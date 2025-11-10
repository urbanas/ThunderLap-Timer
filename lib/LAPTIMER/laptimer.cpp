#include "laptimer.h"

#include "debug.h"

const uint16_t rssi_filter_q = 2000;  //  0.01 - 655.36
const uint16_t rssi_filter_r = 40;    // 0.0001 - 65.536

void LapTimer::init(Config *config, RX5808 *rx5808, Buzzer *buzzer, Led *l, uint8_t id) {
    this->nodeId = id;
    conf = config;
    rx = rx5808;
    buz = buzzer;
    led = l;

    filter.setMeasurementNoise(rssi_filter_q * 0.01f);
    filter.setProcessNoise(rssi_filter_r * 0.0001f);

    stop();
    memset(rssi, 0, sizeof(rssi));
}

void LapTimer::start() {
    DEBUG("LapTimer started\n");
    raceStartTimeMs = millis();
    state = RUNNING;
    buz->beep(500);
    led->on(500);
}

void LapTimer::stop() {
    DEBUG("LapTimer stopped\n");
    state = STOPPED;
    lapCountWraparound = false;
    lapCount = 0;
    rssiCount = 0;
    raceStartTimeMs = 0;
    startTimeMs = 0;
    rssiPeak = 0;
    rssiPeakTimeMs = 0;
    memset(lapTimes, 0, sizeof(lapTimes));
    buz->beep(500);
    led->on(500);
}

void LapTimer::handleLapTimerUpdate(uint32_t currentTimeMs) {
    // always read RSSI
    rssi[rssiCount] = round(filter.filter(rx->readRssi(), 0));
    // DEBUG("RSSI: %u\n", rssi[rssiCount]);
    
    // Handle auto-calibration if active
    if (autoCalState == AUTOCAL_ACTIVE) {
        autoCalPeakCapture();
        
        // Check if we detected a peak and enough time has passed to finish this pass
        if (autoCalPeakDetected && rssi[rssiCount] < autoCalMinRssi + 5) {
            // RSSI has dropped back down, finish this pass
            if (currentTimeMs - autoCalLastDetectionMs > 2000) {  // 2 second cooldown between passes
                autoCalFinishPass();
            }
        }
        
        rssiCount = (rssiCount + 1) % LAPTIMER_RSSI_HISTORY;
        return;
    }

    switch (state) {
        case STOPPED:
            break;
        case WAITING:
            // detect hole shot
            lapPeakCapture();
            if (lapPeakCaptured()) {
                state = RUNNING;
                startLap();
            }
            break;
        case RUNNING:
            // Check if timer min has elapsed, start capturing peak
            if ((currentTimeMs - startTimeMs) > conf->getMinLapMs()) {
                lapPeakCapture();
            }

            if (lapPeakCaptured()) {
                finishLap();
                startLap();
            }
            break;
        default:
            break;
    }

    rssiCount = (rssiCount + 1) % LAPTIMER_RSSI_HISTORY;
}

void LapTimer::lapPeakCapture() {
    // Check if RSSI is on or post threshold, update RSSI peak
    if (rssi[rssiCount] >= conf->getEnterRssi(nodeId)) {
        // Check if RSSI is greater than the previous detected peak
        if (rssi[rssiCount] > rssiPeak) {
            rssiPeak = rssi[rssiCount];
            rssiPeakTimeMs = millis();
        }
    }
}

bool LapTimer::lapPeakCaptured() {
    return (rssi[rssiCount] < rssiPeak) && (rssi[rssiCount] < conf->getExitRssi(nodeId));
}

void LapTimer::startLap() {
    DEBUG("Lap started\n");
    startTimeMs = rssiPeakTimeMs;
    rssiPeak = 0;
    rssiPeakTimeMs = 0;
    buz->beep(200);
    led->on(200);
}

void LapTimer::finishLap() {
    if (lapCount == 0 && lapCountWraparound == false)
    {
        // First lap (hole shot) - measure from race start
        lapTimes[0] = rssiPeakTimeMs - raceStartTimeMs;
    }
    else
    {
        // Subsequent laps - measure from last peak
        lapTimes[lapCount] = rssiPeakTimeMs - startTimeMs;
    }
    DEBUG("Lap finished, lap time = %u\n", lapTimes[lapCount]);
    if ((lapCount + 1) % LAPTIMER_LAP_HISTORY == 0) {
        lapCountWraparound = true;
    }
    lapCount = (lapCount + 1) % LAPTIMER_LAP_HISTORY;
    lapAvailable = true;
}

uint8_t LapTimer::getRssi() {
    return rssi[rssiCount];
}

uint32_t LapTimer::getLapTime() {
    uint32_t lapTime = 0;
    lapAvailable = false;
    if (lapCount == 0) {
        lapTime = lapTimes[LAPTIMER_LAP_HISTORY - 1];
    } else {
        lapTime = lapTimes[lapCount - 1];
    }
    return lapTime;
}

bool LapTimer::isLapAvailable() {
    return lapAvailable;
}

bool LapTimer::isRunning() {
    return state == RUNNING;
}

// Frequency Hopping Implementation
void LapTimer::setHoppingEnabled(bool enabled) {
    hoppingEnabled = enabled;
    if (!enabled) {
        currentHoppingIndex = 0;
    }
}

void LapTimer::setHoppingFrequencies(uint16_t *frequencies, uint8_t count) {
    hoppingFreqCount = (count > 4) ? 4 : count;
    for (uint8_t i = 0; i < hoppingFreqCount; i++) {
        hoppingFrequencies[i] = frequencies[i];
    }
    currentHoppingIndex = 0;
}

void LapTimer::setHoppingInterval(uint32_t intervalMs) {
    hopIntervalMs = intervalMs;
}

uint16_t LapTimer::getCurrentFrequency() {
    if (hoppingEnabled && hoppingFreqCount > 0) {
        return hoppingFrequencies[currentHoppingIndex];
    }
    return rx->getFrequency();
}

void LapTimer::updateHoppingFrequency(uint32_t currentTimeMs) {
    if (!hoppingEnabled || hoppingFreqCount == 0) {
        return;
    }
    
    // Check if it's time to hop to the next frequency
    if (currentTimeMs - lastHopTimeMs >= hopIntervalMs) {
        lastHopTimeMs = currentTimeMs;
        
        // Move to next frequency
        currentHoppingIndex = (currentHoppingIndex + 1) % hoppingFreqCount;
        
        // Set the new frequency on the RX5808 module
        uint16_t newFreq = hoppingFrequencies[currentHoppingIndex];
        rx->setFrequency(newFreq);
        
        DEBUG("Node %u: Hopping to frequency %u MHz (slot %u/%u)\n", 
              nodeId + 1, newFreq, currentHoppingIndex + 1, hoppingFreqCount);
    }
}

void LapTimer::setFrequency(uint16_t frequency) {
    if (rx) {
        rx->setFrequency(frequency);
        DEBUG("Manual frequency set to: %u MHz\n", frequency);
    }
}

// Auto-calibration implementation
void LapTimer::startAutoCalibration() {
    DEBUG("Starting auto-calibration\n");
    autoCalState = AUTOCAL_ACTIVE;
    autoCalPassCount = 0;
    autoCalMinRssi = 255;
    autoCalPeakDetected = false;
    autoCalLastDetectionMs = 0;
    memset(autoCalPeaks, 0, sizeof(autoCalPeaks));
    rssiPeak = 0;
    buz->beep(300);
    led->blink(200, 200);
}

void LapTimer::stopAutoCalibration() {
    DEBUG("Stopping auto-calibration\n");
    autoCalState = AUTOCAL_IDLE;
    autoCalPassCount = 0;
    autoCalPeakDetected = false;
    led->off();
    buz->beep(200);
}

bool LapTimer::isAutoCalibrating() {
    return autoCalState == AUTOCAL_ACTIVE;
}

uint8_t LapTimer::getAutoCalPass() {
    return autoCalPassCount;
}

uint8_t LapTimer::getAutoCalPeakRssi(uint8_t passIndex) {
    if (passIndex < AUTOCAL_MAX_PASSES) {
        return autoCalPeaks[passIndex];
    }
    return 0;
}

uint8_t LapTimer::getAutoCalMinRssi() {
    return autoCalMinRssi;
}

uint8_t LapTimer::getAutoCalCalculatedEnter() {
    if (autoCalPassCount == 0) return 0;
    
    // Find minimum peak across all passes
    uint8_t minPeak = 255;
    for (uint8_t i = 0; i < autoCalPassCount; i++) {
        if (autoCalPeaks[i] < minPeak && autoCalPeaks[i] > 0) {
            minPeak = autoCalPeaks[i];
        }
    }
    
    // Set ENTER threshold 5-10 points below minimum peak
    if (minPeak > autoCalEnterThreshold) {
        return minPeak - autoCalEnterThreshold;
    }
    return minPeak > 5 ? minPeak - 5 : 0;
}

uint8_t LapTimer::getAutoCalCalculatedExit() {
    uint8_t enterValue = getAutoCalCalculatedEnter();
    
    // Set EXIT threshold 10-15 points below ENTER
    if (enterValue > autoCalExitThreshold) {
        return enterValue - autoCalExitThreshold;
    }
    return enterValue > 10 ? enterValue - 10 : 0;
}

void LapTimer::autoCalPeakCapture() {
    uint8_t currentRssi = rssi[rssiCount];
    
    // Track minimum baseline RSSI
    if (currentRssi < autoCalMinRssi) {
        autoCalMinRssi = currentRssi;
        DEBUG("Auto-cal new baseline: %u\n", autoCalMinRssi);
    }
    
    // Calculate dynamic detection threshold
    uint8_t detectionLevel = autoCalMinRssi + autoCalDetectionThreshold;
    
    // Detect peaks (significant rise above baseline)
    if (currentRssi > detectionLevel) {
        if (currentRssi > rssiPeak) {
            rssiPeak = currentRssi;
            rssiPeakTimeMs = millis();
            autoCalPeakDetected = true;
            DEBUG("Auto-cal peak detected: %u (baseline: %u, threshold: %u, delta: %u)\n", 
                  rssiPeak, autoCalMinRssi, detectionLevel, rssiPeak - autoCalMinRssi);
        }
    }
}

void LapTimer::autoCalFinishPass() {
    if (autoCalPassCount < AUTOCAL_MAX_PASSES && rssiPeak > 0) {
        autoCalPeaks[autoCalPassCount] = rssiPeak;
        autoCalPassCount++;
        autoCalLastDetectionMs = millis();
        
        DEBUG("Auto-cal pass %u complete, peak: %u\n", autoCalPassCount, rssiPeak);
        
        // Reset for next pass
        rssiPeak = 0;
        rssiPeakTimeMs = 0;
        autoCalPeakDetected = false;
        
        // Provide feedback
        buz->beep(100);
        led->on(200);
        
        // Check if calibration is complete
        if (autoCalPassCount >= AUTOCAL_MAX_PASSES) {
            autoCalState = AUTOCAL_COMPLETE;
            DEBUG("Auto-calibration complete!\n");
            DEBUG("Calculated ENTER: %u, EXIT: %u\n", getAutoCalCalculatedEnter(), getAutoCalCalculatedExit());
            buz->beep(500);
            led->on(1000);
        }
    }
}


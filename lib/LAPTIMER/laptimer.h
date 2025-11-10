#include "RX5808.h"
#include "buzzer.h"
#include "config.h"
#include "kalman.h"
#include "led.h"

typedef enum {
    STOPPED,
    WAITING,
    RUNNING
} laptimer_state_e;

typedef enum {
    AUTOCAL_IDLE,
    AUTOCAL_ACTIVE,
    AUTOCAL_COMPLETE
} autocal_state_e;

#define LAPTIMER_LAP_HISTORY 10
#define LAPTIMER_RSSI_HISTORY 100
#define AUTOCAL_MAX_PASSES 5

class LapTimer {
   public:
    void init(Config *config, RX5808 *rx5808, Buzzer *buzzer, Led *l, uint8_t nodeId);
    void start();
    void stop();
    void handleLapTimerUpdate(uint32_t currentTimeMs);
    uint8_t getRssi();
    uint32_t getLapTime();
    bool isLapAvailable();
    bool isRunning();  // Check if timer is in RUNNING state
    
    // Frequency hopping support
    void setHoppingEnabled(bool enabled);
    void setHoppingFrequencies(uint16_t *frequencies, uint8_t count);
    void setHoppingInterval(uint32_t intervalMs);
    void updateHoppingFrequency(uint32_t currentTimeMs);
    uint16_t getCurrentFrequency();
    
    // Manual frequency control (for calibration)
    void setFrequency(uint16_t frequency);
    
    // Auto-calibration support
    void startAutoCalibration();
    void stopAutoCalibration();
    bool isAutoCalibrating();
    uint8_t getAutoCalPass();
    uint8_t getAutoCalPeakRssi(uint8_t passIndex);
    uint8_t getAutoCalMinRssi();
    uint8_t getAutoCalCalculatedEnter();
    uint8_t getAutoCalCalculatedExit();

   private:
    uint8_t nodeId = 0;  // Node ID (0-3)
    laptimer_state_e state = STOPPED;
    RX5808 *rx;
    Config *conf;
    Buzzer *buz;
    Led *led;
    KalmanFilter filter;
    boolean lapCountWraparound;
    uint32_t raceStartTimeMs;
    uint32_t startTimeMs;
    uint8_t lapCount;
    uint8_t rssiCount;
    uint32_t lapTimes[LAPTIMER_LAP_HISTORY];
    uint8_t rssi[LAPTIMER_RSSI_HISTORY];

    uint8_t rssiPeak;
    uint32_t rssiPeakTimeMs;

    bool lapAvailable = false;
    
    // Frequency hopping state
    bool hoppingEnabled = false;
    uint16_t hoppingFrequencies[4];
    uint8_t hoppingFreqCount = 0;
    uint8_t currentHoppingIndex = 0;
    uint32_t lastHopTimeMs = 0;
    uint32_t hopIntervalMs = 100; // Switch frequency every 100ms
    
    // Auto-calibration state
    autocal_state_e autoCalState = AUTOCAL_IDLE;
    uint8_t autoCalPassCount = 0;
    uint8_t autoCalPeaks[AUTOCAL_MAX_PASSES];
    uint8_t autoCalMinRssi = 255;
    uint8_t autoCalDetectionThreshold = 15; // Points above baseline to detect pass
    uint8_t autoCalEnterThreshold = 10;  // Safety margin below peak
    uint8_t autoCalExitThreshold = 15;   // Additional margin below enter
    bool autoCalPeakDetected = false;
    uint32_t autoCalLastDetectionMs = 0;

    void lapPeakCapture();
    bool lapPeakCaptured();
    void lapPeakReset();
    void autoCalPeakCapture();
    void autoCalFinishPass();

    void startLap();
    void finishLap();
};

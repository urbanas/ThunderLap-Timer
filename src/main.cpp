#include "debug.h"
#include "led.h"
#include "webserver.h"
#include <ElegantOTA.h>

// Task configuration
#define PARALLEL_TASK_STACK_SIZE 3000
#define PARALLEL_TASK_PRIORITY 0
#define PARALLEL_TASK_CORE 0
#define PARALLEL_TASK_DELAY_MS 1

// Timing constants
#define STARTUP_BEEP_DURATION_MS 200
#define STARTUP_LED_DURATION_MS 400

static RX5808 rx1(PIN_RX5808_RSSI, PIN_RX5808_DATA, PIN_RX5808_SELECT, PIN_RX5808_CLOCK);
static RX5808 rx2(PIN_RX5808_2_RSSI, PIN_RX5808_2_DATA, PIN_RX5808_2_SELECT, PIN_RX5808_2_CLOCK);
static RX5808 rx3(PIN_RX5808_3_RSSI, PIN_RX5808_3_DATA, PIN_RX5808_3_SELECT, PIN_RX5808_3_CLOCK);
static RX5808 rx4(PIN_RX5808_4_RSSI, PIN_RX5808_4_DATA, PIN_RX5808_4_SELECT, PIN_RX5808_4_CLOCK);
static Config config;
static Webserver ws;
static Buzzer buzzer;
static Led led;
static LapTimer timer1;
static LapTimer timer2;
static LapTimer timer3;
static LapTimer timer4;
static BatteryMonitor monitor;

static TaskHandle_t xTimerTask = NULL;

static void parallelTask(void *pvArgs) {
    for (;;) {
        uint32_t currentTimeMs = millis();
        buzzer.handleBuzzer(currentTimeMs);
        led.handleLed(currentTimeMs);
        ws.handleWebUpdate(currentTimeMs);
        config.handleEeprom(currentTimeMs);
        
        // Handle frequency hopping or normal frequency changes
        if (config.getFrequencyHoppingEnabled()) {
            // Only hop frequencies if at least one timer is running (race started)
            bool anyTimerRunning = timer1.isRunning() || timer2.isRunning() || 
                                   timer3.isRunning() || timer4.isRunning();
            
            if (anyTimerRunning) {
                // Update hopping frequencies only for active nodes
                uint8_t activeNodeCount = config.getActiveNodeCount();
                
                if (activeNodeCount >= 1) timer1.updateHoppingFrequency(currentTimeMs);
                if (activeNodeCount >= 2) timer2.updateHoppingFrequency(currentTimeMs);
                if (activeNodeCount >= 3) timer3.updateHoppingFrequency(currentTimeMs);
                if (activeNodeCount >= 4) timer4.updateHoppingFrequency(currentTimeMs);
            }
            // If no timer is running, frequencies stay on the first frequency (no hopping)
        } else {
            // Normal frequency handling (non-hopping mode)
            rx1.handleFrequencyChange(currentTimeMs, config.getFrequency(0));
            rx2.handleFrequencyChange(currentTimeMs, config.getFrequency(1));
            rx3.handleFrequencyChange(currentTimeMs, config.getFrequency(2));
            rx4.handleFrequencyChange(currentTimeMs, config.getFrequency(3));
        }
        
        monitor.checkBatteryState(currentTimeMs, config.getAlarmThreshold());
        delay(PARALLEL_TASK_DELAY_MS);  // Prevent CPU spinning, allows other tasks to run
    }
}

static void initParallelTask() {
    disableCore0WDT();
    xTaskCreatePinnedToCore(parallelTask, "parallelTask", PARALLEL_TASK_STACK_SIZE, NULL, PARALLEL_TASK_PRIORITY, &xTimerTask, PARALLEL_TASK_CORE);
}

void setup() {
    DEBUG_INIT;
    config.init();
    rx1.init();
    rx2.init();
    rx3.init();
    rx4.init();
    buzzer.init(PIN_BUZZER, BUZZER_INVERTED);
    led.init(PIN_LED, false);
    timer1.init(&config, &rx1, &buzzer, &led, 0);  // Node ID 0
    timer2.init(&config, &rx2, &buzzer, &led, 1);  // Node ID 1
    timer3.init(&config, &rx3, &buzzer, &led, 2);  // Node ID 2
    timer4.init(&config, &rx4, &buzzer, &led, 3);  // Node ID 3
    monitor.init(PIN_VBAT, VBAT_SCALE, VBAT_ADD, &buzzer, &led);
    ws.init(&config, &timer1, &timer2, &timer3, &timer4, &monitor, &buzzer, &led);
    
    // Initialize frequency hopping if enabled
    if (config.getFrequencyHoppingEnabled()) {
        uint8_t hopCount = config.getHoppingFreqCount();
        uint32_t hopInterval = config.getHoppingInterval();
        
        // Configure hopping for each timer
        uint16_t freqs1[4], freqs2[4], freqs3[4], freqs4[4];
        for (uint8_t i = 0; i < hopCount && i < 4; i++) {
            freqs1[i] = config.getHoppingFrequency(0, i);
            freqs2[i] = config.getHoppingFrequency(1, i);
            freqs3[i] = config.getHoppingFrequency(2, i);
            freqs4[i] = config.getHoppingFrequency(3, i);
        }
        
        timer1.setHoppingEnabled(true);
        timer1.setHoppingFrequencies(freqs1, hopCount);
        timer1.setHoppingInterval(hopInterval);
        
        timer2.setHoppingEnabled(true);
        timer2.setHoppingFrequencies(freqs2, hopCount);
        timer2.setHoppingInterval(hopInterval);
        
        timer3.setHoppingEnabled(true);
        timer3.setHoppingFrequencies(freqs3, hopCount);
        timer3.setHoppingInterval(hopInterval);
        
        timer4.setHoppingEnabled(true);
        timer4.setHoppingFrequencies(freqs4, hopCount);
        timer4.setHoppingInterval(hopInterval);
    } else {
        // Explicitly disable hopping for all timers
        timer1.setHoppingEnabled(false);
        timer2.setHoppingEnabled(false);
        timer3.setHoppingEnabled(false);
        timer4.setHoppingEnabled(false);
    }
    
    led.on(STARTUP_LED_DURATION_MS);
    buzzer.beep(STARTUP_BEEP_DURATION_MS);
    initParallelTask();
}

void loop() {
    uint32_t currentTimeMs = millis();
    timer1.handleLapTimerUpdate(currentTimeMs);
    timer2.handleLapTimerUpdate(currentTimeMs);
    timer3.handleLapTimerUpdate(currentTimeMs);
    timer4.handleLapTimerUpdate(currentTimeMs);
    ElegantOTA.loop();
}

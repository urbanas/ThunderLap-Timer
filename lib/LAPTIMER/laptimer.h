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

#define LAPTIMER_LAP_HISTORY 10
#define LAPTIMER_RSSI_HISTORY 100

class LapTimer {
   public:
    void init(Config *config, RX5808 *rx5808, Buzzer *buzzer, Led *l);
    void start();
    void stop();
    void handleLapTimerUpdate(uint32_t currentTimeMs);
    uint8_t getRssi();
    uint32_t getLapTime();
    bool isLapAvailable();
    
    // Frequency hopping support
    void setHoppingEnabled(bool enabled);
    void setHoppingFrequencies(uint16_t *frequencies, uint8_t count);
    void setHoppingInterval(uint32_t intervalMs);
    void updateHoppingFrequency(uint32_t currentTimeMs);
    uint16_t getCurrentFrequency();
    
    // Manual frequency control (for calibration)
    void setFrequency(uint16_t frequency);

   private:
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

    void lapPeakCapture();
    bool lapPeakCaptured();
    void lapPeakReset();

    void startLap();
    void finishLap();
};

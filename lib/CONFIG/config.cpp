#include "config.h"

#include <EEPROM.h>

#include "debug.h"

void Config::init(void) {
    // Compile-time check to ensure config fits in EEPROM
    static_assert(sizeof(laptimer_config_t) <= EEPROM_RESERVED_SIZE, 
                  "Config structure exceeds EEPROM reserved size! Increase EEPROM_RESERVED_SIZE");
    
    if (sizeof(laptimer_config_t) > EEPROM_RESERVED_SIZE) {
        DEBUG("CRITICAL ERROR: Config size (%u bytes) exceeds EEPROM size (%u bytes)\n", 
              sizeof(laptimer_config_t), EEPROM_RESERVED_SIZE);
        return;
    }

    DEBUG("Config size: %u bytes, EEPROM reserved: %u bytes\n", 
          sizeof(laptimer_config_t), EEPROM_RESERVED_SIZE);

    EEPROM.begin(EEPROM_RESERVED_SIZE);  // Size of EEPROM
    load();                              // Override default settings from EEPROM

    checkTimeMs = millis();

    DEBUG("EEPROM Init Successful\n");
}

void Config::load(void) {
    modified = false;
    EEPROM.get(0, conf);

    uint32_t version = 0xFFFFFFFF;
    if ((conf.version & CONFIG_MAGIC_MASK) == CONFIG_MAGIC) {
        version = conf.version & ~CONFIG_MAGIC_MASK;
    }

    // If version is not current, reset to defaults
    if (version != CONFIG_VERSION) {
        setDefaults();
    }
}

void Config::write(void) {
    if (!modified) return;

    DEBUG("Writing to EEPROM\n");

    EEPROM.put(0, conf);
    EEPROM.commit();

    DEBUG("Writing to EEPROM done\n");

    modified = false;
}

void Config::populateJsonDocument(JsonDocument& config) {
    // General settings
    config["minLap"] = conf.minLap;
    config["raceStartDelay"] = conf.raceStartDelay;
    config["alarm"] = conf.alarm;
    config["anType"] = conf.announcerType;
    config["anRate"] = conf.announcerRate;
    config["activeNodeCount"] = conf.activeNodeCount;
    
    // Node-specific settings (backward compatible naming)
    config["freq"] = conf.frequency[0];
    config["enterRssi"] = conf.enterRssi[0];
    config["exitRssi"] = conf.exitRssi[0];
    config["freq2"] = conf.frequency[1];
    config["enterRssi2"] = conf.enterRssi[1];
    config["exitRssi2"] = conf.exitRssi[1];
    config["freq3"] = conf.frequency[2];
    config["enterRssi3"] = conf.enterRssi[2];
    config["exitRssi3"] = conf.exitRssi[2];
    config["freq4"] = conf.frequency[3];
    config["enterRssi4"] = conf.enterRssi[3];
    config["exitRssi4"] = conf.exitRssi[3];
    
    // Frequency Hopping Configuration
    config["frequencyHoppingEnabled"] = conf.frequencyHoppingEnabled;
    config["hoppingFreqCount"] = conf.hoppingFreqCount;
    config["hoppingInterval"] = conf.hoppingInterval;
    
    // Hopping frequencies as nested arrays
    JsonArray hopFreqs = config["hoppingFrequencies"].to<JsonArray>();
    for (uint8_t nodeId = 0; nodeId < 4; nodeId++) {
        JsonArray nodeFreqs = hopFreqs.add<JsonArray>();
        for (uint8_t freqIdx = 0; freqIdx < 4; freqIdx++) {
            nodeFreqs.add(conf.hoppingFrequencies[nodeId][freqIdx]);
        }
    }
    
    // Hopping RSSI thresholds as nested arrays
    JsonArray hopEnterRssi = config["hoppingEnterRssi"].to<JsonArray>();
    JsonArray hopExitRssi = config["hoppingExitRssi"].to<JsonArray>();
    for (uint8_t nodeId = 0; nodeId < 4; nodeId++) {
        JsonArray nodeEnterRssi = hopEnterRssi.add<JsonArray>();
        JsonArray nodeExitRssi = hopExitRssi.add<JsonArray>();
        for (uint8_t freqIdx = 0; freqIdx < 4; freqIdx++) {
            nodeEnterRssi.add(conf.hoppingEnterRssi[nodeId][freqIdx]);
            nodeExitRssi.add(conf.hoppingExitRssi[nodeId][freqIdx]);
        }
    }
    
    // WiFi and UI settings
    config["ssid"] = conf.ssid;
    config["pwd"] = conf.password;
    config["theme"] = conf.theme;
}

void Config::toJson(AsyncResponseStream& destination) {
    // Use https://arduinojson.org/v7/assistant to estimate memory
    JsonDocument config;
    populateJsonDocument(config);
    serializeJson(config, destination);
}

void Config::toJsonString(char* buf) {
    JsonDocument config;
    populateJsonDocument(config);
    serializeJsonPretty(config, buf, 512);
}

void Config::fromJson(JsonObject source) {
    // General settings
    if (source["minLap"] != conf.minLap) {
        conf.minLap = source["minLap"];
        modified = true;
    }
    if (source["raceStartDelay"] != conf.raceStartDelay) {
        conf.raceStartDelay = source["raceStartDelay"];
        modified = true;
    }
    if (source["alarm"] != conf.alarm) {
        conf.alarm = source["alarm"];
        modified = true;
    }
    if (source["anType"] != conf.announcerType) {
        conf.announcerType = source["anType"];
        modified = true;
    }
    if (source["anRate"] != conf.announcerRate) {
        conf.announcerRate = source["anRate"];
        modified = true;
    }
    if (source["activeNodeCount"] != conf.activeNodeCount) {
        conf.activeNodeCount = source["activeNodeCount"];
        modified = true;
    }
    
    // Node-specific settings (backward compatible)
    if (source["freq"] != conf.frequency[0]) {
        conf.frequency[0] = source["freq"];
        modified = true;
    }
    if (source["enterRssi"] != conf.enterRssi[0]) {
        conf.enterRssi[0] = source["enterRssi"];
        modified = true;
    }
    if (source["exitRssi"] != conf.exitRssi[0]) {
        conf.exitRssi[0] = source["exitRssi"];
        modified = true;
    }
    if (source["freq2"] != conf.frequency[1]) {
        conf.frequency[1] = source["freq2"];
        modified = true;
    }
    if (source["enterRssi2"] != conf.enterRssi[1]) {
        conf.enterRssi[1] = source["enterRssi2"];
        modified = true;
    }
    if (source["exitRssi2"] != conf.exitRssi[1]) {
        conf.exitRssi[1] = source["exitRssi2"];
        modified = true;
    }
    if (source["freq3"] != conf.frequency[2]) {
        conf.frequency[2] = source["freq3"];
        modified = true;
    }
    if (source["enterRssi3"] != conf.enterRssi[2]) {
        conf.enterRssi[2] = source["enterRssi3"];
        modified = true;
    }
    if (source["exitRssi3"] != conf.exitRssi[2]) {
        conf.exitRssi[2] = source["exitRssi3"];
        modified = true;
    }
    if (source["freq4"] != conf.frequency[3]) {
        conf.frequency[3] = source["freq4"];
        modified = true;
    }
    if (source["enterRssi4"] != conf.enterRssi[3]) {
        conf.enterRssi[3] = source["enterRssi4"];
        modified = true;
    }
    if (source["exitRssi4"] != conf.exitRssi[3]) {
        conf.exitRssi[3] = source["exitRssi4"];
        modified = true;
    }
    
    // Frequency Hopping Configuration
    if (!source["frequencyHoppingEnabled"].isNull()) {
        bool newHoppingEnabled = source["frequencyHoppingEnabled"];
        if (newHoppingEnabled != conf.frequencyHoppingEnabled) {
            conf.frequencyHoppingEnabled = newHoppingEnabled;
            modified = true;
        }
    }
    
    if (!source["hoppingFreqCount"].isNull()) {
        uint8_t newHoppingFreqCount = source["hoppingFreqCount"];
        if (newHoppingFreqCount != conf.hoppingFreqCount) {
            conf.hoppingFreqCount = newHoppingFreqCount;
            modified = true;
        }
    }
    
    if (!source["hoppingInterval"].isNull()) {
        uint32_t newHoppingInterval = source["hoppingInterval"];
        if (newHoppingInterval != conf.hoppingInterval) {
            conf.hoppingInterval = newHoppingInterval;
            modified = true;
        }
    }
    
    if (!source["hoppingFrequencies"].isNull()) {
        JsonArray hopFreqs = source["hoppingFrequencies"];
        for (uint8_t nodeId = 0; nodeId < 4 && nodeId < hopFreqs.size(); nodeId++) {
            JsonArray nodeFreqs = hopFreqs[nodeId];
            for (uint8_t freqIdx = 0; freqIdx < 4 && freqIdx < nodeFreqs.size(); freqIdx++) {
                uint16_t newFreq = nodeFreqs[freqIdx];
                if (newFreq != conf.hoppingFrequencies[nodeId][freqIdx]) {
                    conf.hoppingFrequencies[nodeId][freqIdx] = newFreq;
                    modified = true;
                }
            }
        }
    }
    
    // Hopping RSSI thresholds
    if (!source["hoppingEnterRssi"].isNull()) {
        JsonArray hopEnterRssi = source["hoppingEnterRssi"];
        for (uint8_t nodeId = 0; nodeId < 4 && nodeId < hopEnterRssi.size(); nodeId++) {
            JsonArray nodeEnterRssi = hopEnterRssi[nodeId];
            for (uint8_t freqIdx = 0; freqIdx < 4 && freqIdx < nodeEnterRssi.size(); freqIdx++) {
                uint8_t newRssi = nodeEnterRssi[freqIdx];
                if (newRssi != conf.hoppingEnterRssi[nodeId][freqIdx]) {
                    conf.hoppingEnterRssi[nodeId][freqIdx] = newRssi;
                    modified = true;
                }
            }
        }
    }
    
    if (!source["hoppingExitRssi"].isNull()) {
        JsonArray hopExitRssi = source["hoppingExitRssi"];
        for (uint8_t nodeId = 0; nodeId < 4 && nodeId < hopExitRssi.size(); nodeId++) {
            JsonArray nodeExitRssi = hopExitRssi[nodeId];
            for (uint8_t freqIdx = 0; freqIdx < 4 && freqIdx < nodeExitRssi.size(); freqIdx++) {
                uint8_t newRssi = nodeExitRssi[freqIdx];
                if (newRssi != conf.hoppingExitRssi[nodeId][freqIdx]) {
                    conf.hoppingExitRssi[nodeId][freqIdx] = newRssi;
                    modified = true;
                }
            }
        }
    }
    
    // WiFi and UI settings
    if (source["ssid"] != conf.ssid) {
        strlcpy(conf.ssid, source["ssid"] | "", sizeof(conf.ssid));
        modified = true;
    }
    if (source["pwd"] != conf.password) {
        strlcpy(conf.password, source["pwd"] | "", sizeof(conf.password));
        modified = true;
    }
    if (source["theme"] != conf.theme) {
        strlcpy(conf.theme, source["theme"] | "ocean", sizeof(conf.theme));
        modified = true;
    }
}

// Getter implementations
uint16_t Config::getFrequency(uint8_t nodeId) {
    if (nodeId < 4) {
        return conf.frequency[nodeId];
    }
    return 5658; // Default (Raceband R1)
}

uint32_t Config::getMinLapMs() {
    return conf.minLap * 100;
}

uint32_t Config::getRaceStartDelayMs() {
    return conf.raceStartDelay * 100;
}

uint8_t Config::getAlarmThreshold() {
    return conf.alarm;
}

uint8_t Config::getEnterRssi(uint8_t nodeId) {
    if (nodeId < 4) {
        return conf.enterRssi[nodeId];
    }
    return 120; // Default
}

uint8_t Config::getExitRssi(uint8_t nodeId) {
    if (nodeId < 4) {
        return conf.exitRssi[nodeId];
    }
    return 100; // Default
}

uint8_t Config::getActiveNodeCount() {
    return conf.activeNodeCount;
}

bool Config::getFrequencyHoppingEnabled() {
    return conf.frequencyHoppingEnabled;
}

uint8_t Config::getHoppingFreqCount() {
    return conf.hoppingFreqCount;
}

uint32_t Config::getHoppingInterval() {
    return conf.hoppingInterval;
}

uint16_t Config::getHoppingFrequency(uint8_t nodeId, uint8_t freqIndex) {
    if (nodeId < 4 && freqIndex < 4) {
        return conf.hoppingFrequencies[nodeId][freqIndex];
    }
    return 5658; // Default frequency (Raceband R1)
}

uint8_t Config::getHoppingEnterRssi(uint8_t nodeId, uint8_t freqIndex) {
    if (nodeId < 4 && freqIndex < 4) {
        return conf.hoppingEnterRssi[nodeId][freqIndex];
    }
    return 120; // Default
}

uint8_t Config::getHoppingExitRssi(uint8_t nodeId, uint8_t freqIndex) {
    if (nodeId < 4 && freqIndex < 4) {
        return conf.hoppingExitRssi[nodeId][freqIndex];
    }
    return 100; // Default
}

char* Config::getSsid() {
    return conf.ssid;
}

char* Config::getPassword() {
    return conf.password;
}

char* Config::getTheme() {
    return conf.theme;
}

void Config::setDefaults(void) {
    DEBUG("Setting EEPROM defaults\n");
    // Reset everything to 0/false and then just set anything that zero is not appropriate
    memset(&conf, 0, sizeof(conf));
    
    conf.version = CONFIG_VERSION | CONFIG_MAGIC;
    
    // General settings
    conf.minLap = 40;  // 4 seconds (value * 100ms)
    conf.raceStartDelay = 50;  // 5 seconds (value * 100ms)
    conf.alarm = 34;  // 3.4v (value / 10)
    conf.announcerType = 2;
    conf.announcerRate = 10;
    conf.activeNodeCount = 1;  // Default to 1 node
    
    // Node-specific defaults
    for (uint8_t i = 0; i < 4; i++) {
        conf.frequency[i] = 5658;  // Default frequency (Raceband R1)
        conf.enterRssi[i] = 120;
        conf.exitRssi[i] = 100;
    }
    
    // Frequency Hopping Defaults
    conf.frequencyHoppingEnabled = false;
    conf.hoppingFreqCount = 4;
    conf.hoppingInterval = 100;  // 100ms default switching time
    
    // Initialize hopping frequencies and RSSI thresholds
    // Default to Raceband: R1, R3, R5, R7 for good spacing
    uint16_t defaultRacebandFreqs[4] = {5658, 5732, 5806, 5880}; // R1, R3, R5, R7
    for (uint8_t nodeId = 0; nodeId < 4; nodeId++) {
        for (uint8_t freqIdx = 0; freqIdx < 4; freqIdx++) {
            conf.hoppingFrequencies[nodeId][freqIdx] = defaultRacebandFreqs[freqIdx];
            conf.hoppingEnterRssi[nodeId][freqIdx] = 120;
            conf.hoppingExitRssi[nodeId][freqIdx] = 100;
        }
    }
    
    // WiFi and UI settings
    strlcpy(conf.ssid, "", sizeof(conf.ssid));
    strlcpy(conf.password, "", sizeof(conf.password));
    strlcpy(conf.theme, "ocean", sizeof(conf.theme));  // Default to first theme option
    
    modified = true;
    write();
}

void Config::handleEeprom(uint32_t currentTimeMs) {
    if (modified && ((currentTimeMs - checkTimeMs) > EEPROM_CHECK_TIME_MS)) {
        checkTimeMs = currentTimeMs;
        write();
    }
}

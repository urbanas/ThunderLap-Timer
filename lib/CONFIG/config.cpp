#include "config.h"

#include <EEPROM.h>

#include "debug.h"

void Config::init(void) {
    if (sizeof(laptimer_config_t) > EEPROM_RESERVED_SIZE) {
        DEBUG("Config size too big, adjust reserved EEPROM size\n");
        return;
    }

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
    config["freq"] = conf.frequency;
    config["minLap"] = conf.minLap;
    config["raceStartDelay"] = conf.raceStartDelay;
    config["alarm"] = conf.alarm;
    config["anType"] = conf.announcerType;
    config["anRate"] = conf.announcerRate;
    config["enterRssi"] = conf.enterRssi;
    config["exitRssi"] = conf.exitRssi;
    config["name"] = conf.pilotName;
    config["freq2"] = conf.frequency2;
    config["enterRssi2"] = conf.enterRssi2;
    config["exitRssi2"] = conf.exitRssi2;
    config["name2"] = conf.pilotName2;
    config["freq3"] = conf.frequency3;
    config["enterRssi3"] = conf.enterRssi3;
    config["exitRssi3"] = conf.exitRssi3;
    config["name3"] = conf.pilotName3;
    config["freq4"] = conf.frequency4;
    config["enterRssi4"] = conf.enterRssi4;
    config["exitRssi4"] = conf.exitRssi4;
    config["name4"] = conf.pilotName4;
    config["activeNodeCount"] = conf.activeNodeCount;
    
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
    
    // Hopping pilot names as nested arrays
    JsonArray hopNames = config["hoppingPilotNames"].to<JsonArray>();
    for (uint8_t nodeId = 0; nodeId < 4; nodeId++) {
        JsonArray nodeNames = hopNames.add<JsonArray>();
        for (uint8_t freqIdx = 0; freqIdx < 4; freqIdx++) {
            nodeNames.add(conf.hoppingPilotNames[nodeId][freqIdx]);
        }
    }
    
    config["ssid"] = conf.ssid;
    config["pwd"] = conf.password;
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
    if (source["freq"] != conf.frequency) {
        conf.frequency = source["freq"];
        modified = true;
    }
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
    if (source["enterRssi"] != conf.enterRssi) {
        conf.enterRssi = source["enterRssi"];
        modified = true;
    }
    if (source["exitRssi"] != conf.exitRssi) {
        conf.exitRssi = source["exitRssi"];
        modified = true;
    }
    if (source["name"] != conf.pilotName) {
        strlcpy(conf.pilotName, source["name"] | "", sizeof(conf.pilotName));
        modified = true;
    }
    if (source["freq2"] != conf.frequency2) {
        conf.frequency2 = source["freq2"];
        modified = true;
    }
    if (source["enterRssi2"] != conf.enterRssi2) {
        conf.enterRssi2 = source["enterRssi2"];
        modified = true;
    }
    if (source["exitRssi2"] != conf.exitRssi2) {
        conf.exitRssi2 = source["exitRssi2"];
        modified = true;
    }
    if (source["name2"] != conf.pilotName2) {
        strlcpy(conf.pilotName2, source["name2"] | "", sizeof(conf.pilotName2));
        modified = true;
    }
    if (source["freq3"] != conf.frequency3) {
        conf.frequency3 = source["freq3"];
        modified = true;
    }
    if (source["enterRssi3"] != conf.enterRssi3) {
        conf.enterRssi3 = source["enterRssi3"];
        modified = true;
    }
    if (source["exitRssi3"] != conf.exitRssi3) {
        conf.exitRssi3 = source["exitRssi3"];
        modified = true;
    }
    if (source["name3"] != conf.pilotName3) {
        strlcpy(conf.pilotName3, source["name3"] | "", sizeof(conf.pilotName3));
        modified = true;
    }
    if (source["freq4"] != conf.frequency4) {
        conf.frequency4 = source["freq4"];
        modified = true;
    }
    if (source["enterRssi4"] != conf.enterRssi4) {
        conf.enterRssi4 = source["enterRssi4"];
        modified = true;
    }
    if (source["exitRssi4"] != conf.exitRssi4) {
        conf.exitRssi4 = source["exitRssi4"];
        modified = true;
    }
    if (source["name4"] != conf.pilotName4) {
        strlcpy(conf.pilotName4, source["name4"] | "", sizeof(conf.pilotName4));
        modified = true;
    }
    if (source["activeNodeCount"] != conf.activeNodeCount) {
        conf.activeNodeCount = source["activeNodeCount"];
        modified = true;
    }
    
    // Frequency Hopping Configuration
    if (source.containsKey("frequencyHoppingEnabled")) {
        bool newHoppingEnabled = source["frequencyHoppingEnabled"];
        if (newHoppingEnabled != conf.frequencyHoppingEnabled) {
            conf.frequencyHoppingEnabled = newHoppingEnabled;
            modified = true;
        }
    }
    
    if (source.containsKey("hoppingFreqCount")) {
        uint8_t newHoppingFreqCount = source["hoppingFreqCount"];
        if (newHoppingFreqCount != conf.hoppingFreqCount) {
            conf.hoppingFreqCount = newHoppingFreqCount;
            modified = true;
        }
    }
    
    if (source.containsKey("hoppingInterval")) {
        uint32_t newHoppingInterval = source["hoppingInterval"];
        if (newHoppingInterval != conf.hoppingInterval) {
            conf.hoppingInterval = newHoppingInterval;
            modified = true;
        }
    }
    
    if (source.containsKey("hoppingFrequencies")) {
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
    
    if (source.containsKey("hoppingPilotNames")) {
        JsonArray hopNames = source["hoppingPilotNames"];
        for (uint8_t nodeId = 0; nodeId < 4 && nodeId < hopNames.size(); nodeId++) {
            JsonArray nodeNames = hopNames[nodeId];
            for (uint8_t freqIdx = 0; freqIdx < 4 && freqIdx < nodeNames.size(); freqIdx++) {
                const char* newName = nodeNames[freqIdx];
                if (strcmp(newName, conf.hoppingPilotNames[nodeId][freqIdx]) != 0) {
                    strlcpy(conf.hoppingPilotNames[nodeId][freqIdx], newName, sizeof(conf.hoppingPilotNames[nodeId][freqIdx]));
                    modified = true;
                }
            }
        }
    }
    
    if (source["ssid"] != conf.ssid) {
        strlcpy(conf.ssid, source["ssid"] | "", sizeof(conf.ssid));
        modified = true;
    }
    if (source["pwd"] != conf.password) {
        strlcpy(conf.password, source["pwd"] | "", sizeof(conf.password));
        modified = true;
    }
}

uint16_t Config::getFrequency() {
    return conf.frequency;
}

uint16_t Config::getFrequency2() {
    return conf.frequency2;
}

uint16_t Config::getFrequency3() {
    return conf.frequency3;
}

uint16_t Config::getFrequency4() {
    return conf.frequency4;
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

uint8_t Config::getEnterRssi() {
    return conf.enterRssi;
}

uint8_t Config::getExitRssi() {
    return conf.exitRssi;
}

uint8_t Config::getEnterRssi2() {
    return conf.enterRssi2;
}

uint8_t Config::getExitRssi2() {
    return conf.exitRssi2;
}

uint8_t Config::getEnterRssi3() {
    return conf.enterRssi3;
}

uint8_t Config::getExitRssi3() {
    return conf.exitRssi3;
}

uint8_t Config::getEnterRssi4() {
    return conf.enterRssi4;
}

uint8_t Config::getExitRssi4() {
    return conf.exitRssi4;
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
    return 5740; // Default frequency
}

char* Config::getHoppingPilotName(uint8_t nodeId, uint8_t freqIndex) {
    if (nodeId < 4 && freqIndex < 4) {
        return conf.hoppingPilotNames[nodeId][freqIndex];
    }
    static char empty[] = "";
    return empty;
}

char* Config::getSsid() {
    return conf.ssid;
}

char* Config::getPassword() {
    return conf.password;
}

void Config::setDefaults(void) {
    DEBUG("Setting EEPROM defaults\n");
    // Reset everything to 0/false and then just set anything that zero is not appropriate
    memset(&conf, 0, sizeof(conf));
    conf.version = CONFIG_VERSION | CONFIG_MAGIC;
    conf.frequency = 1111;
    conf.minLap = 40;  // 4 seconds (value * 100ms)
    conf.raceStartDelay = 50;  // 5 seconds (value * 100ms)
    conf.alarm = 34;  // 3.4v (value / 10)
    conf.announcerType = 2;
    conf.announcerRate = 10;
    conf.enterRssi = 120;
    conf.exitRssi = 100;
    conf.frequency2 = 1111;
    conf.enterRssi2 = 120;
    conf.exitRssi2 = 100;
    conf.frequency3 = 1111;
    conf.enterRssi3 = 120;
    conf.exitRssi3 = 100;
    conf.frequency4 = 1111;
    conf.enterRssi4 = 120;
    conf.exitRssi4 = 100;
    conf.activeNodeCount = 2;  // Default to 2 nodes
    
    // Frequency Hopping Defaults
    conf.frequencyHoppingEnabled = false;
    conf.hoppingFreqCount = 4;
    conf.hoppingInterval = 100;  // 100ms default switching time
    // Initialize hopping frequencies to default (5740 MHz) and pilot names with dynamic numbering
    // Pilot numbering is based on hoppingFreqCount:
    // 2 freqs: Node 1 = P1-P2, Node 2 = P3-P4, Node 3 = P5-P6, Node 4 = P7-P8
    // 3 freqs: Node 1 = P1-P3, Node 2 = P4-P6, Node 3 = P7-P9, Node 4 = P10-P12
    // 4 freqs: Node 1 = P1-P4, Node 2 = P5-P8, Node 3 = P9-P12, Node 4 = P13-P16
    for (uint8_t nodeId = 0; nodeId < 4; nodeId++) {
        for (uint8_t freqIdx = 0; freqIdx < 4; freqIdx++) {
            conf.hoppingFrequencies[nodeId][freqIdx] = 5740;
            // Calculate global pilot number based on hoppingFreqCount
            uint8_t globalPilotNumber = nodeId * conf.hoppingFreqCount + freqIdx + 1;
            char label[4];
            snprintf(label, sizeof(label), "P%d", globalPilotNumber);
            strlcpy(conf.hoppingPilotNames[nodeId][freqIdx], label, sizeof(conf.hoppingPilotNames[nodeId][freqIdx]));
        }
    }
    
    strlcpy(conf.ssid, "", sizeof(conf.ssid));
    strlcpy(conf.password, "", sizeof(conf.password));
    strlcpy(conf.pilotName, "", sizeof(conf.pilotName));
    strlcpy(conf.pilotName2, "", sizeof(conf.pilotName2));
    strlcpy(conf.pilotName3, "", sizeof(conf.pilotName3));
    strlcpy(conf.pilotName4, "", sizeof(conf.pilotName4));
    modified = true;
    write();
}

void Config::handleEeprom(uint32_t currentTimeMs) {
    if (modified && ((currentTimeMs - checkTimeMs) > EEPROM_CHECK_TIME_MS)) {
        checkTimeMs = currentTimeMs;
        write();
    }
}

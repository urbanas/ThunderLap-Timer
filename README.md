# ThunderLap Timer

<p align="center">
  <img src="assets/logo.png" alt="ThunderLap Timer Logo" width="200"/>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Multi-Node FPV Race Timing Solution - Supporting up to 4 simultaneous pilots**

---

## 💖 Support This Project

If you enjoy using ThunderLap Timer and find it useful for your FPV racing, consider supporting future development! Your contributions help keep this project alive and fuel new features.

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge&logo=paypal)](https://www.paypal.com/paypalme/Robertasurbanas)

**Every contribution is appreciated!** 🙏

---

> **Project Origin:** This project was originally forked from [PhobosLT by DavHau](https://github.com/DavHau/PhobosLT) and has been heavily modified to support up to 4 pilots simultaneously. The codebase has undergone extensive development including a complete UI redesign, mobile/desktop optimization, multi-node architecture, and numerous feature additions. While approximately 30-40% of the original code is reused (core timing algorithms, RX5808 communication), this multi-node implementation would not have been possible without the foundation provided by the original PhobosLT project.

---

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Quick Start (ESP32-WROOM-32)](#quick-start-esp32-wroom-32)
- [Hardware Requirements](#hardware-requirements)
- [Pin Configuration](#pin-configuration)
- [Firmware Installation](#firmware-installation)
- [Web Interface](#web-interface)
- [Calibration Guide](#calibration-guide)
- [Usage](#usage)
- [Community](#community)

---

## About

ThunderLap Timer is an advanced lap timing solution for 5.8GHz FPV racing that supports **up to 4 simultaneous pilots**. Built on the affordable and widely-available **ESP32-WROOM-32** microcontroller and RX5808 modules, it provides real-time lap timing with a modern, mobile-responsive web interface.

The system is completely self-contained - it creates its own WiFi access point and serves a web application that works on any device with a browser (phone, tablet, or laptop). No additional apps or software needed!

### Key Hardware
- **ESP32-WROOM-32** (ESP32 DevKit) - The standard ESP32 board, affordable (~$5-10) and available worldwide
- **RX5808 Modules** - One per pilot, with simple SPI modification
- **Total Cost** - ~$25-40 for a complete 4-pilot system

### How It Works

Each node (RX5808 module) monitors RSSI (Received Signal Strength Indicator) for a specific frequency. When a drone passes the timer, the RSSI peaks. By setting calibrated Enter and Exit RSSI thresholds, the system detects when a drone crosses the timing gate and records lap times with precision.

**Key Technical Features:**
- Kalman filtering for RSSI smoothing
- Real-time RSSI graphing and monitoring
- WebSocket communication for live updates
- Server-Sent Events (SSE) for lap notifications
- LittleFS filesystem for web assets
- Voice announcements with customizable pilots names

---

## Features

### Core Timing Features
- ✅ **Multi-Node Support** - Time 1 to 4 pilots simultaneously
- ✅ **Frequency Hopping Mode** - One RX5808 module can track up to 4 pilots by rapidly switching frequencies
- ✅ **Real-Time RSSI Monitoring** - Live graphs for each node with Kalman filtering
- ✅ **Voice Announcements** - Lap time callouts with pilot identification (P1, P2, etc.)
- ✅ **Multiple Announcer Modes** - Beep only, single lap, 2-lap average, 3-lap average
- ✅ **Configurable Speed** - Adjustable voice announcement rate (0.1x - 2.0x)
- ✅ **Hole Shot Detection** - Special handling for race start (Lap 0)
- ✅ **Minimum Lap Time** - Prevents false positives from crashes or tight tracks (1-20 seconds)
- ✅ **3-Lap Tracking** - Real-time sum of last 3 laps with toggle visibility
- ✅ **Unified Pilot View** - Consistent interface whether using 1 node or 4 nodes

### Hardware Features
- ✅ **Multiple ESP32 Variants** - Supports ESP32-C3, ESP32-S3, ESP32-WROOM-32, and more
- ✅ **Battery Monitoring** - Configurable low voltage alarm (2.8V - 4.0V)
- ✅ **Optional LED Indicator** - Visual feedback for events
- ✅ **Optional Buzzer** - Audio feedback for lap detection
- ✅ **Flexible Wiring** - Shared SPI pins between nodes for simplified wiring

### Web Interface Features
- ✅ **Modern Dark UI** - Sleek dark theme with gradient accents
- ✅ **5 Color Schemes** - Ocean Teal, Purple Haze, Cyber Cyan, Sunset Orange (default), Matrix Green
- ✅ **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ✅ **Three Main Tabs**:
  - **Configuration** - Set up nodes, frequencies, and system settings in organized grid layout
  - **Race** - Start/stop timing, view live lap results, toggle 3-lap display
  - **Calibration** - Tune RSSI thresholds with real-time graphs and node/pilot selectors
- ✅ **Persistent Settings** - All configurations saved to EEPROM, theme/debug preferences in browser
- ✅ **Debug Mode** - Advanced features for testing and calibration

### Advanced Features
- ✅ **Frequency Hopping Calibration** - Per-pilot RSSI threshold configuration
- ✅ **Debug Calibration Table** - Editable RSSI values table with live sync to sliders
- ✅ **Dynamic Node Switching** - Dropdown selectors for easy calibration navigation
- ✅ **Real-Time Frequency Display** - Shows current frequency for each node (debug mode)
- ✅ **Configurable Hopping Interval** - Adjust frequency switching speed (50-1000ms)
- ✅ **Lap Simulation** - Test race interface without hardware (debug mode)

### Mobile Optimizations
- Compact 3-column grid layout for general settings
- Card-based node configuration with responsive design
- Touch-friendly buttons (48px+ tap targets)
- Unified pilot-centric race table
- Optimized calibration controls with dropdown navigation
- Theme selector and debug toggle in footer
- No horizontal scrolling on any screen size

---

## Quick Start (ESP32-WROOM-32)

For users with an **ESP32-WROOM-32** board, here's the fastest path to get racing:

1. **Get Hardware**
   - 1x ESP32-WROOM-32 (ESP32 DevKit) board
   - 1-4x RX5808 modules with [SPI mod](https://sheaivey.github.io/rx5808-pro-diversity/docs/rx5808-spi-mod.html)
   - 1x Active buzzer (optional but recommended)
   - USB cable for power and programming

2. **Wire It Up** (for Node 1)
   - RX5808 GND → ESP32 GND
   - RX5808 RSSI → GPIO33
   - RX5808 +5V → 3.3V (⚠️ not 5V!)
   - RX5808 CH3 (CLOCK) → GPIO23
   - RX5808 CH2 (SELECT) → GPIO22
   - RX5808 CH1 (DATA) → GPIO19
   - Buzzer → GPIO27
   - All grounds → GND

3. **Flash Firmware**
   - Clone this repo in VSCode with PlatformIO
   - Select `PhobosLT` target (default)
   - Build and upload firmware
   - Upload filesystem image

4. **Connect & Configure**
   - Connect to WiFi: `ThunderLap_XXXX` (password: `thunderlap`)
   - Open browser to `20.0.0.1`
   - Set your band/channel in Configuration tab
   - Calibrate RSSI thresholds
   - Start racing!

**Full details in sections below** ⬇️

---

## Hardware Requirements

### Core Components (Per Node)
- **ESP32 Board** with USB (one board can handle all 4 nodes)
  - Recommended: **ESP32-WROOM-32** (ESP32 DevKit) - Most common and affordable
  - Also supported: LilyGo T-Energy, T-Cell, ESP32-C3, ESP32-S3
- **RX5808 Module** with [SPI mod](https://sheaivey.github.io/rx5808-pro-diversity/docs/rx5808-spi-mod.html)
- **Power Supply** - Battery, powerbank, or USB power
  - Single ESP32 can power up to 4 RX5808 modules

### Optional Components
- **LED** - Visual feedback (any color + appropriate resistor)
- **Active Buzzer** - 3.3V-5V with built-in generator
- **Battery** - For portable operation (e.g., 1S Li-Ion for T-Energy)

### Building Multi-Node Setup
For a complete 4-node system, you need:
- 1x ESP32-WROOM-32 board (or any supported variant)
- 4x RX5808 modules (SPI modded)
- 1x Power supply (USB or battery)
- 1x Optional buzzer
- 1x Optional LED

**Cost Estimate:** ~$25-40 USD for a complete 4-node system

---

## Pin Configuration

### RX5808 Module Pinout

The RX5808 modules typically have the following pins:
```
RX5808 Pin Layout (left to right):
┌─────────────────────────────────────────────────────────┐
│ GND | Video | A6.5W | RSSI | +5V | GND | CH3 | CH2 | CH1 │
└─────────────────────────────────────────────────────────┘
```

**Pin Functions:**
- **GND** - Ground (connect to ESP32 GND)
- **Video** - Video output (not used for lap timing)
- **A6.5W** - Audio 6.5MHz (not used)
- **RSSI** - Analog RSSI signal (connect to ESP32 analog input)
- **+5V** - Power input ⚠️ **Connect to 3.3V** (undervolt for better RSSI resolution)
- **GND** - Ground (duplicate, can be left unconnected if first GND is used)
- **CH3** - SPI CLOCK (shared across nodes)
- **CH2** - SPI SELECT (unique per node)
- **CH1** - SPI DATA (shared across nodes)

**Important:** The RX5808 must have the [SPI modification](https://sheaivey.github.io/rx5808-pro-diversity/docs/rx5808-spi-mod.html) completed to enable digital control of frequency via CH1, CH2, CH3 pins.

### Default Pinout (ESP32-WROOM-32)

This is the pinout for the standard **ESP32-WROOM-32** (ESP32 DevKit) board - the most common and affordable ESP32 variant.

**Node 1:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO33    | RSSI       | Analog RSSI input |
| GPIO19    | CH1        | SPI Data (shared) |
| GPIO22    | CH2        | SPI Select (Chip Select) |
| GPIO23    | CH3        | SPI Clock (shared) |
| 3.3V      | +5V        | Power (undervolted) |
| GND       | GND        | Ground |

**Node 2:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO32    | RSSI       | Analog RSSI input |
| GPIO25    | CH1        | SPI Data |
| GPIO26    | CH2        | SPI Select (Chip Select) |
| GPIO14    | CH3        | SPI Clock |

**Node 3:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO34    | RSSI       | Analog RSSI input |
| GPIO19    | CH1        | SPI Data (shared with Node 1) |
| GPIO18    | CH2        | SPI Select (Chip Select) |
| GPIO23    | CH3        | SPI Clock (shared with Node 1) |

**Node 4:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO36    | RSSI       | Analog RSSI input |
| GPIO19    | CH1        | SPI Data (shared with Nodes 1 & 3) |
| GPIO17    | CH2        | SPI Select (Chip Select) |
| GPIO23    | CH3        | SPI Clock (shared with Nodes 1 & 3) |

**Peripherals:**
| ESP32 Pin | Peripheral | Notes |
|-----------|------------|-------|
| GPIO21    | LED        | Connect to anode (+) via resistor (~220Ω) |
| GPIO27    | Buzzer     | Active buzzer (3.3V-5V) |
| GPIO35    | VBAT       | Battery voltage (via 1/2 divider, max 3.3V) |

### Important Notes
- **RX5808 Power**: Connect RX5808's +5V pin to **3.3V** (undervolt for better RSSI resolution and cooling)
- **Shared Pins**: 
  - Nodes 1 & 3 share CH1 (Data - GPIO19) and CH3 (Clock - GPIO23)
  - Node 2 has independent CH1/CH3
  - Node 4 shares CH1/CH3 with Nodes 1 & 3
- **Unique Pins**: Each node MUST have its own RSSI and CH2 (Select) pins
- **Input-Only Pins**: GPIO34, GPIO35, GPIO36 are input-only (perfect for RSSI reading)
- **Pin Labels**: CH1 = Data, CH2 = Select, CH3 = Clock (SPI communication)

### Other ESP32 Variants
For ESP32-C3, ESP32-S3, and other boards, see the pin definitions in `lib/CONFIG/config.h`.

### Wiring Example (Single Node)

For a basic single-node setup with ESP32-WROOM-32:

```
RX5808 Module                    ESP32-WROOM-32
┌──────────────────┐             ┌──────────────┐
│ GND              │────────────▶│ GND          │
│ Video            │  (not used)
│ A6.5W            │  (not used)
│ RSSI             │────────────▶│ GPIO33       │
│ +5V              │────────────▶│ 3.3V         │ ⚠️ Important: Use 3.3V!
│ GND (duplicate)  │  (optional, can leave unconnected)
│ CH3 (CLOCK)      │────────────▶│ GPIO23       │
│ CH2 (SELECT)     │────────────▶│ GPIO22       │
│ CH1 (DATA)       │────────────▶│ GPIO19       │
└──────────────────┘             └──────────────┘

Optional Peripherals:
LED (+ resistor) ─────▶ GPIO21 ─┐
                                 │
Active Buzzer ────────▶ GPIO27 ─┤
                                 │
                        GND ◀────┘
```

**Key Points:**
- Connect RX5808 **+5V pin to ESP32 3.3V** (undervolt improves RSSI resolution and reduces heat)
- **CH1 = DATA**, **CH2 = SELECT**, **CH3 = CLOCK** (SPI pins for frequency control)
- Only **RSSI** and **SELECT** pins are unique per node
- **DATA** and **CLOCK** are shared between nodes that use the same GPIO pins

**Multi-Node Setup:** Simply connect additional RX5808 modules following the pin tables above. Nodes 1 & 3 share DATA/CLOCK lines, so you can connect them in parallel.

---

## Firmware Installation

### Prerequisites
1. **Visual Studio Code** - [Download](https://code.visualstudio.com/)
2. **PlatformIO Extension** - Install from VSCode Extensions marketplace
3. **Git** - [Installation guide](https://github.com/git-guides/install-git)

### Clone Repository
```bash
# Via VSCode Command Palette (Cmd+Shift+P / Ctrl+Shift+P)
Git: Clone
# Enter: https://github.com/urbanas/ThunderLap-Timer.git

# Or via terminal
git clone https://github.com/urbanas/ThunderLap-Timer.git
cd ThunderLap-Timer
```

### Select Target Hardware
The default configuration is set for **ESP32-WROOM-32** (ESP32 DevKit), which should work for most users. If you're using a different board, open `platformio.ini` and change the target:

```ini
[platformio]
default_envs = PhobosLT  ; Default: ESP32-WROOM-32 (esp32dev)
                          ; Other options: ESP32C3, ESP32S3, LicardoTimer
```

**Available Targets:**
- `PhobosLT` - ESP32-WROOM-32 / ESP32 DevKit (default, recommended)
- `ESP32C3` - ESP32-C3 variant
- `ESP32S3` - ESP32-S3 variant  
- `LicardoTimer` - Custom hardware variant

### Build & Flash

**Step 1: Build Firmware**
1. Open PlatformIO sidebar (ant icon)
2. Expand your target (e.g., `PhobosLT`)
3. Under `General`, click **Build**
4. Wait for "Success" message

**Step 2: Upload Firmware**
1. Connect ESP32 via USB
2. Under `General`, click **Upload**
3. Wait for "Success"

**Step 3: Upload Filesystem**
1. Under `Platform`, click **Upload Filesystem Image**
2. Wait for "Success"
3. Your timer is ready!

**Troubleshooting:**
- If upload fails, hold BOOT button during flash
- Check USB cable (data-capable, not charge-only)
- Try a different USB port
- Check PlatformIO terminal for detailed errors

---

## Web Interface

### First Connection

1. **Power On** - Timer boots and creates WiFi access point
2. **Connect** - Find WiFi network: `ThunderLap_XXXX`
3. **Password** - Enter: `thunderlap`
4. **Access** - Open browser to `20.0.0.1` (or wait for auto-redirect)

### Configuration Tab

**General Settings (3-Column Grid Layout):**

*Column 1: Node & Hopping Settings*
- **Active Nodes** - Select 1-4 nodes to use
- **Frequency Hopping** - Toggle to enable multi-pilot tracking per node
- **Frequencies per Node** - Select 2-4 frequencies when hopping enabled
- **Frequency Switch Time** - Hopping interval in milliseconds (debug mode only)

*Column 2: Race Settings*
- **Minimum Lap Time** - Prevent false laps (1-20 seconds, default: 4.0)
- **Race Start Delay** - Countdown duration (0-15 seconds, default: 5.0)
- **Announcer Type** - None / Beep / Lap Time / 2-Lap / 3-Lap
- **Announcer Rate** - Speech speed (0.1 - 2.0x, default: 1.0)

*Column 3: System Settings*
- **Low Battery Alarm** - Voltage threshold (2.8V - 4.0V, default: 3.4V)
- **Battery Voltage** - Current battery level display
- **WiFi Settings** - SSID and password (hidden by default)

**Node Configuration (Card-based layout):**

*Normal Mode (1 frequency per node):*
- **Band** - Select frequency band (A, B, E, F, R, L)
- **Channel** - Select channel (1-8)
- **Frequency Display** - Shows calculated frequency (e.g., 5740 MHz)
- **Enter RSSI** - Threshold to start lap crossing (0-255)
- **Exit RSSI** - Threshold to complete lap crossing (0-255)

*Frequency Hopping Mode (2-4 frequencies per node):*
- **Pilot Cards** - Individual cards for each pilot (P1, P2, P3, P4)
- **Band & Channel** - Configure frequency for each pilot
- **Frequency Display** - Shows calculated frequency for each pilot
- **Per-Pilot RSSI** - Individual Enter/Exit thresholds (hidden, set in Calibration tab)

**Controls:**
- **Voice: ON/OFF** - Toggle voice announcements
- **Test Voice** - Test audio output
- **Save Configuration** - Persist all settings to EEPROM

**Important:** Click **Save Configuration** after changes!

### Race Tab

**Unified Pilot-Centric View:**
- **Single Table** - All pilots (P1, P2, P3, etc.) displayed together
- **Lap Column** - Shows lap number (0 for Hole Shot)
- **Time Columns** - One column per pilot showing lap time
- **3-Lap Columns** - Optional sum of last 3 laps per pilot (toggle on/off)
- **Responsive Layout** - Automatically adjusts for screen size

**Display Modes:**
- **Normal Mode** - P1 = Node 1, P2 = Node 2, etc.
- **Hopping Mode** - P1-P4 from Node 1, P5-P8 from Node 2, etc.
- **Consistent UI** - Same interface regardless of hardware configuration

**Controls:**
- **Start** - Begin race countdown and timing
- **Stop** - Stop accepting new laps
- **Reset** - Clear all lap times
- **Show 3-Lap** - Toggle visibility of 3-lap sum columns

**Debug Mode Features:**
- **Pilot Buttons** - Simulate lap times for testing (P1, P2, P3, etc.)
- **Node Indicators** - Shows which node each pilot belongs to (in parentheses)

### Calibration Tab

**Normal Mode (1 frequency per node):**
- **Node Selector** - Dropdown to switch between active nodes
- **Real-time RSSI Graph** - Live signal strength visualization for selected node
- **Enter RSSI** - Threshold to start lap crossing (number input + slider, 0-255)
- **Exit RSSI** - Threshold to complete lap crossing (number input + slider, 0-255)
- **Threshold Lines** - Red (Enter) and yellow (Exit) indicators on graph
- **Crossing State** - Visual feedback (green = crossing, blue = clear)

**Frequency Hopping Mode (2-4 frequencies per node):**
- **Node Selector** - Dropdown to select which node to calibrate
- **Pilot Selector** - Dropdown to select which pilot/frequency to calibrate
- **Current Pilot Display** - Shows "Calibrating: P1 @ 5740 MHz"
- **Automatic Pausing** - Hopping pauses on selected frequency for calibration
- **Per-Pilot Thresholds** - Individual Enter/Exit RSSI for each pilot
- **Real-time Graph** - Shows RSSI for the selected node

**Graph Features:**
- **Auto-scaling** - Based on Enter/Exit values (±10 points)
- **Kalman Filtering** - Smooth RSSI visualization
- **Real-time Updates** - 200ms intervals
- **Dynamic Range** - Adjusts as you modify thresholds

**Debug Mode Features:**
- **Current Frequency Display** - Shows active frequency next to each node
- **Calibration Values Table** - Editable table showing all RSSI thresholds
- **Bidirectional Sync** - Table and sliders update each other in real-time
- **Color-Coded Gaps** - Red (< 10), Yellow (> 50), Green (10-50)

**Important:** Click **Save RSSI Thresholds** after calibration!

### Footer Controls

**Debug Mode Toggle:**
- **OFF (default)** - Standard racing interface
- **ON** - Enables advanced features:
  - Lap simulation buttons on Race tab
  - Current frequency display on Calibration tab
  - Frequency switch time configuration
  - Editable calibration values table
  - Node indicators in race table

**Theme Selector:**
- Ocean Teal
- Purple Haze
- Cyber Cyan
- **Sunset Orange (default)**
- Matrix Green
- Preference saved to browser localStorage

---

## Calibration Guide

Proper calibration is **critical** for accurate lap timing. Follow these steps carefully:

### Initial Calibration

1. **Prepare**
   - Turn on timer and drone
   - Set drone to desired VTx power
   - **Wait 30 seconds** for VTx to reach operating temperature

2. **Find Enter RSSI**
   - Place drone **one gate height above timer** (~1-1.5 meters)
   - Note the RSSI value on calibration graph
   - **Subtract 2-5 points** for safety margin
   - Enter this value as **Enter RSSI**

3. **Find Exit RSSI**
   - Take your Enter RSSI value
   - **Subtract another 8-10 points**
   - Enter this as **Exit RSSI**

4. **Save and Test**
   - Click **Save RSSI Thresholds**
   - Go to Race tab and fly test laps
   - Adjust if needed

### Example Calibration

```
Drone at gate height: RSSI = 135
Enter RSSI: 135 - 3 = 132
Exit RSSI: 132 - 10 = 122
```

### Fine-Tuning

**Too Many False Laps:**
- Increase Enter RSSI (+5 points)
- Increase Minimum Lap Time

**Missing Real Laps:**
- Decrease Enter RSSI (-5 points)
- Decrease Exit RSSI (-5 points)
- Check VTx power and antenna

**Flying With Other Pilots:**
- Lower both thresholds by 3-5 points
- More noise from adjacent channels = lower RSSI

### Visual Indicators

- **Blue Background** - Clear zone (no crossing)
- **Green Background** - Crossing zone (drone detected)
- **Red Line** - Enter RSSI threshold
- **Yellow Line** - Exit RSSI threshold

**Ideal Setup:** Single sharp peak per pass, clearly above Enter threshold

### Frequency Hopping Calibration

When using frequency hopping mode, each pilot needs individual calibration:

1. **Enable Frequency Hopping**
   - Go to Configuration tab
   - Toggle "Frequency Hopping" ON
   - Select number of frequencies per node (2-4)
   - Configure band/channel for each pilot
   - Save configuration

2. **Calibrate Each Pilot**
   - Go to Calibration tab
   - Select Node from dropdown
   - Select Pilot from dropdown
   - Hopping automatically pauses on that frequency
   - Adjust Enter/Exit RSSI using sliders or debug table
   - Repeat for all pilots

3. **Tips for Hopping Mode**
   - Calibrate with all pilots powered on (frequency interference)
   - Use debug table for quick bulk adjustments
   - Recommended gap: 10-20 points between Enter and Exit
   - Test thoroughly before race day

---

## Usage

### Basic Racing

1. **Configure Pilots** (Configuration tab)
   - Set number of active nodes
   - Configure band/channel for each pilot
   - Set RSSI thresholds
   - Save configuration

2. **Calibrate** (Calibration tab)
   - Test fly and adjust RSSI thresholds
   - Verify graph shows clean peaks
   - Save thresholds

3. **Race** (Race tab)
   - Click **Start** to begin countdown
   - Fly laps - times appear automatically
   - Click **Stop** when finished
   - Click **Reset** to clear for next heat

### Advanced Features

**Voice Announcements:**
- Enable "Voice: ON" button in Configuration tab
- Announcements identify pilots by number (P1, P2, etc.)
- Choose announcer type (1-lap, 2-lap, 3-lap)
- Adjust speech rate (0.1x - 2.0x)
- Test with "Test Voice" button

**Frequency Hopping Mode:**
- Track up to 4 pilots per RX5808 module
- Total capacity: 16 pilots with 4 nodes × 4 frequencies
- Configurable hopping interval (50-1000ms, debug mode)
- Per-pilot RSSI calibration
- Automatic frequency pausing during calibration
- Seamless integration with race interface

**Multiple Pilots (Normal Mode):**
- Set Active Nodes to 2, 3, or 4
- Configure unique frequency for each node
- Calibrate each node individually
- Unified race table shows all pilots

**Debug Mode:**
- Enable in footer toggle
- Simulate laps without hardware
- View current frequencies
- Edit calibration values in table
- Configure hopping interval
- See node assignments in race table

**Battery Monitoring:**
- Set low voltage alarm in Configuration (2.8V - 4.0V)
- Current voltage displayed in Configuration tab
- Buzzer alerts when threshold reached

**Mobile Racing:**
- Portrait orientation recommended
- Theme selector and debug toggle in footer
- Responsive tables and controls
- All features fully functional
- No horizontal scrolling

---

## Technical Details

### System Architecture

**Backend (C++):**
- `main.cpp` - Entry point, task management
- `lib/RX5808/` - SPI communication, RSSI reading
- `lib/LAPTIMER/` - Lap detection, timing logic
- `lib/CONFIG/` - EEPROM storage, JSON serialization
- `lib/WEBSERVER/` - HTTP server, WebSocket, SSE
- `lib/KALMAN/` - RSSI filtering
- `lib/BATTERY/` - Voltage monitoring
- `lib/BUZZER/` - Audio feedback
- `lib/LED/` - Visual feedback

**Frontend (JavaScript/HTML/CSS):**
- `data/index.html` - Single-page application structure
- `data/script.js` - UI logic, WebSocket handling
- `data/style.css` - Responsive design, themes
- `data/smoothie.js` - Real-time RSSI charting
- `data/articulate.min.js` - Text-to-speech engine

**Communication:**
- HTTP REST API for configuration
- WebSocket for RSSI streaming
- Server-Sent Events for lap notifications
- JSON for data serialization

### Memory Usage

- EEPROM: ~256 bytes (configuration storage)
- RAM: ~100KB (dual-core task management)
- Flash: ~1MB (firmware + filesystem)

### Performance

- RSSI Sampling: ~200ms intervals (Kalman filtered)
- Lap Detection: ~10ms precision
- WebSocket Updates: 200ms intervals
- Support: Up to 4 simultaneous nodes

---

## Community & Support

### Get Help
- Ask questions about setup and usage
- Share your timer builds
- Report bugs and request features
- Contribute improvements

### Contributing
Pull requests welcome! Areas for contribution:
- Documentation improvements
- UI/UX enhancements
- Additional ESP32 board support
- Performance optimizations
- Bug fixes

---

## Credits

- **Original PhobosLT** by [DavHau](https://github.com/DavHau/PhobosLT) - Foundation for this multi-node implementation
- **RotorHazard** for timing algorithms and RSSI-based lap detection concepts
- **ExpressLRS** for embedded development patterns and build system inspiration
- **Community Contributors** for testing, feedback, and feature suggestions

### What's Different in ThunderLap Timer?

This fork extends the original PhobosLT with:
- ✅ **4-Node Support** - Simultaneously time up to 4 pilots
- ✅ **Frequency Hopping** - Track up to 16 pilots (4 nodes × 4 frequencies)
- ✅ **Modern UI** - Complete redesign with 5 theme options (Sunset Orange default)
- ✅ **Mobile Optimization** - Touch-friendly controls, responsive tables, card-based layouts
- ✅ **Enhanced Calibration** - Precision number inputs, dynamic RSSI scaling, dropdown navigation
- ✅ **Debug Mode** - Lap simulation, calibration table, frequency display, hopping interval config
- ✅ **Unified Pilot View** - Consistent race interface for 1-16 pilots
- ✅ **3-Lap Tracking** - Real-time sum of last 3 laps with toggle visibility
- ✅ **Per-Pilot RSSI** - Individual calibration for each pilot in hopping mode
- ✅ **Bidirectional Sync** - Calibration sliders and debug table update each other
- ✅ **Persistent Preferences** - Theme, debug mode, and 3-lap toggle saved to browser
- ✅ **Compact Settings** - 3-column grid layout for general configuration
- ✅ **Race Management** - Simplified controls, hole shot detection, pilot-centric tables
- ✅ **Architecture Improvements** - Refactored codebase, improved memory management, expanded API

**Code Retention:** ~30-40% of original PhobosLT code remains (core timing logic, RX5808 SPI communication, Kalman filtering, battery monitoring)

---

## License

MIT License - See LICENSE file for details

---

**Happy Racing! 🏁**

# ThunderLap Timer

<p align="center">
  <img src="assets/logo.png" alt="ThunderLap Timer Logo" width="200"/>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Multi-Node FPV Race Timing Solution - Supporting up to 16 pilots with frequency hopping**

---

## 💖 Support This Project

If you enjoy using ThunderLap Timer and find it useful for your FPV racing, consider supporting future development! Your contributions help keep this project alive and fuel new features.

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge&logo=paypal)](https://www.paypal.com/paypalme/Robertasurbanas)

**Every contribution is appreciated!** 🙏

---

> **Project Origin:** This project was originally forked from [PhobosLT by DavHau](https://github.com/DavHau/PhobosLT) and has been heavily modified to support multi-node timing and frequency hopping. The codebase has undergone extensive development including a complete UI redesign, mobile/desktop optimization, multi-node architecture, frequency hopping mode, auto-calibration, and numerous feature additions. While approximately 30-40% of the original code is reused (core timing algorithms, RX5808 communication), this multi-node implementation would not have been possible without the foundation provided by the original PhobosLT project.

---

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Quick Start (ESP32-WROOM-32)](#quick-start-esp32-wroom-32)
- [Hardware Requirements](#hardware-requirements)
- [Pin Configuration](#pin-configuration)
- [Firmware Installation](#firmware-installation)
- [Calibration Guide](#calibration-guide)
- [FPV Racing Bands - Frequency Reference](#fpv-racing-bands---frequency-reference)

---

## About

ThunderLap Timer is an advanced lap timing solution for 5.8GHz FPV racing that supports **up to 4 nodes with frequency hopping to track up to 16 pilots**. Built on the affordable and widely-available **ESP32-WROOM-32** microcontroller and RX5808 modules, it provides real-time lap timing with a modern, mobile-responsive web interface.

The system is completely self-contained - it creates its own WiFi access point and serves a web application that works on any device with a browser (phone, tablet, or laptop). No additional apps or software needed!

### Key Hardware
- **ESP32-WROOM-32** (ESP32 DevKit) - The standard ESP32 board, affordable (~$5-10) and available worldwide
- **RX5808 Modules** - 1-4 modules with simple SPI modification
  - **Standard Mode**: 1 module per pilot (up to 4 pilots)
  - **Frequency Hopping Mode**: 1 module tracks up to 4 pilots (up to 16 pilots with 4 modules)
- **Total Cost** - ~$15-40 depending on configuration

### How It Works

Each node (RX5808 module) monitors RSSI (Received Signal Strength Indicator) for a specific frequency. When a drone passes the timer, the RSSI peaks. By setting calibrated Enter and Exit RSSI thresholds, the system detects when a drone crosses the timing gate and records lap times with precision.

**Frequency Hopping Mode:** Each RX5808 module can rapidly switch between up to 4 different frequencies, tracking multiple pilots with a single receiver. The system intelligently detects lap crossings for each pilot based on their configured frequency and RSSI thresholds.

**Key Technical Features:**
- Kalman filtering for RSSI smoothing
- Real-time RSSI graphing and monitoring
- Frequency hopping with configurable intervals (50-1000ms)
- Auto-calibration with 5-pass algorithm
- WebSocket communication for live updates
- Server-Sent Events (SSE) for lap notifications
- LittleFS filesystem for web assets
- Voice announcements with customizable pilot names

---

## Features

### Core Timing Features
- ✅ **Multi-Node Support** - Time 1 to 4 pilots simultaneously
- ✅ **Frequency Hopping Mode** - One RX5808 module can track up to 4 pilots by rapidly switching frequencies
- ✅ **Real-Time RSSI Monitoring** - Live graphs for each node with Kalman filtering
- ✅ **Auto-Calibration** - Automatically determine optimal RSSI thresholds with 5-pass calibration
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
   - Select `ThunderLap` target (default)
   - Build and upload firmware
   - Upload filesystem image

4. **Connect & Configure**
   - Connect to WiFi: `ThunderLap_XXXX` (password: `thunderlap`)
   - Open browser to `20.0.0.1`
   - Set your band/channel in Configuration tab
   - Optional: Enable frequency hopping for multiple pilots per node
   - Calibrate RSSI thresholds (or use Auto-Calibration)
   - Start racing!

**Full details in sections below** ⬇️

---

## Hardware Requirements

### Core Components
- **ESP32 Board** with USB (one board can handle all 4 nodes)
  - Recommended: **ESP32-WROOM-32** (ESP32 DevKit) - Most common and affordable
  - Also supported: LilyGo T-Energy, T-Cell, ESP32-C3, ESP32-S3
- **RX5808 Module(s)** with [SPI mod](https://sheaivey.github.io/rx5808-pro-diversity/docs/rx5808-spi-mod.html)
  - **Standard Mode**: 1 module per pilot (up to 4 pilots total)
  - **Frequency Hopping Mode**: Each module tracks up to 4 pilots
- **Power Supply** - Battery, powerbank, or USB power
  - Single ESP32 can power up to 4 RX5808 modules

### Optional Components
- **LED** - Visual feedback (any color + appropriate resistor)
- **Active Buzzer** - 3.3V-5V with built-in generator
- **Battery** - For portable operation (e.g., 1S Li-Ion for T-Energy)

### Building Multi-Node Setup

**Standard 4-Pilot System (Dedicated Modules):**
- 1x ESP32-WROOM-32 board
- 4x RX5808 modules (SPI modded)
- 1x Power supply (USB or battery)
- 1x Optional buzzer
- 1x Optional LED
- **Cost:** ~$25-40 USD

**Frequency Hopping System (Up to 16 Pilots):**
- 1x ESP32-WROOM-32 board
- 1-4x RX5808 modules (SPI modded)
  - 1 module = up to 4 pilots
  - 2 modules = up to 8 pilots
  - 4 modules = up to 16 pilots
- 1x Power supply (USB or battery)
- 1x Optional buzzer
- 1x Optional LED
- **Cost:** ~$15-40 USD depending on number of modules

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
default_envs = ThunderLap  ; Default: ESP32-WROOM-32 (esp32dev)
                            ; Other options: ESP32C3, ESP32S3, LicardoTimer
```

**Available Targets:**
- `ThunderLap` - ESP32-WROOM-32 / ESP32 DevKit (default, recommended)
- `ESP32C3` - ESP32-C3 variant
- `ESP32S3` - ESP32-S3 variant  
- `LicardoTimer` - Custom hardware variant

### Build & Flash

**Step 1: Build Firmware**
1. Open PlatformIO sidebar (ant icon)
2. Expand your target (e.g., `ThunderLap`)
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

## Calibration Guide

Proper calibration is **critical** for accurate lap timing. You can calibrate manually or use the new **Auto-Calibration** feature.

### Auto-Calibration (Recommended)

The easiest way to calibrate your timer! The system automatically determines optimal RSSI thresholds by analyzing multiple passes.

**How it works:**
1. **Navigate** to the Calibration tab
2. **Select** the node you want to calibrate
3. **Click** "Start Auto-Calibration"
4. **Fly** your drone through the gate **5 times** at racing speed
5. **Review** the calculated Enter and Exit RSSI values
6. **Apply** or discard the results
7. **Save** configuration if satisfied

**Algorithm:**
- Tracks RSSI peaks from each of your 5 passes
- Identifies the minimum peak (worst-case scenario)
- Sets **Enter RSSI** 5-10 points below minimum peak
- Sets **Exit RSSI** 10-15 points below Enter threshold
- Monitors baseline RSSI when drone is away

**Tips for Best Results:**
- Fly at consistent racing speed through all 5 passes
- Ensure VTx is warmed up (wait 30 seconds after power-on)
- Fly the same line you'll use in actual races
- System will beep and LED will blink for each detected pass
- Wait 2 seconds between passes for proper detection

**When Auto-Calibration Completes:**
- Review the calculated values
- Check that Enter/Exit gap is 10-20 points (ideal)
- Click "Apply These Values" to use them
- Don't forget to click "Save RSSI Thresholds"!

### Manual Calibration

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

## FPV Racing Bands - Frequency Reference

> **Important for Multi-Pilot Racing:** Always use **Raceband (Band R)** for multi-pilot setups. Raceband is specifically designed for racing with consistent 37 MHz spacing between channels, providing optimal interference-free operation. Other bands have irregular spacing or overlap and should be avoided for multi-pilot timing.

### Raceband Frequencies (5658 - 5917 MHz)

**All Raceband Channels:**
- R1: 5658 MHz
- R2: 5695 MHz
- R3: 5732 MHz
- R4: 5769 MHz
- R5: 5806 MHz
- R6: 5843 MHz
- R7: 5880 MHz
- R8: 5917 MHz

**Spacing:** Consistent 37 MHz between channels ✅

### Recommended Frequency Combinations

#### For 2 Pilots (Dual):
- **R1 + R5** (5658 + 5806 MHz) - 148 MHz spacing 🏆
- **R2 + R6** (5695 + 5843 MHz) - 148 MHz spacing 🏆
- R1 + R8 (5658 + 5917 MHz) - 259 MHz spacing (maximum but asymmetric)

#### For 3 Pilots:
- **R1 + R4 + R7** (5658, 5769, 5880 MHz) - 111 MHz spacing 🏆
- R2 + R5 + R8 (5695, 5806, 5917 MHz) - 111 MHz spacing 🏆

#### For 4 Pilots (Quad):
**Option 1: Maximum Symmetry (Recommended)**
- **R1, R3, R5, R7** (5658, 5732, 5806, 5880)
- 74 MHz spacing consistently ✅

**Option 2: IMD-5C Optimized**
- R1, R2, R4, R7 (5658, 5695, 5769, 5880)
- Asymmetric but reduces intermodulation

**Option 3: Maximum Spacing (Advanced)**
- R1, R3, R6, R8 (5658, 5732, 5843, 5917)
- Larger gaps but asymmetric spacing

#### For 6 Pilots:
- R1, R2, R4, R6, R7, R8 (avoid adjacent R3 and R5)
- Minimum spacing: 37 MHz ✅

#### For 8 Pilots (Maximum):
- All Raceband R1-R8
- Minimum spacing: 37 MHz ✅
- Use only if needed, 4-6 pilots recommended

### Frequency Hopping Best Practices

When using the frequency hopping feature to track multiple pilots per node:

1. **Use Maximum Spacing**
   - For 2 frequencies per node: Use R1 + R5 or R2 + R6 (148 MHz spacing)
   - For 3 frequencies per node: Use R1 + R4 + R7 (111 MHz spacing)
   - For 4 frequencies per node: Use R1 + R3 + R5 + R7 (74 MHz spacing)

2. **Calibration Tips**
   - Calibrate with all pilots powered on to account for interference
   - Each pilot needs individual RSSI threshold configuration
   - Test thoroughly before race day

3. **Performance Notes**
   - Larger spacing = better reliability
   - Consistent 37 MHz Raceband spacing prevents crosstalk
   - Avoid mixing Raceband with other bands

---

## Credits

- **Original PhobosLT** by [DavHau](https://github.com/DavHau/PhobosLT) - Foundation for this multi-node implementation
- **RotorHazard** for timing algorithms and RSSI-based lap detection concepts
- **ExpressLRS** for embedded development patterns and build system inspiration
- **Community Contributors** for testing, feedback, and feature suggestions

### What's Different in ThunderLap Timer?

This fork extends the original PhobosLT with:
- ✅ **4-Node Support** - Simultaneously time up to 4 pilots (standard mode)
- ✅ **Frequency Hopping** - Track up to 16 pilots with 4 RX5808 modules
- ✅ **Auto-Calibration** - 5-pass algorithm for optimal RSSI threshold detection
- ✅ **Modern UI** - Complete redesign with 5 theme options and dark mode
- ✅ **Mobile Optimization** - Touch-friendly controls, responsive tables, card-based layouts
- ✅ **Enhanced Calibration** - Per-pilot RSSI configuration, debug table, precision inputs
- ✅ **3-Lap Tracking** - Real-time display of last 3 laps sum with toggle visibility
- ✅ **Debug Mode** - Advanced testing features including lap simulation
- ✅ **Persistent Preferences** - Theme settings and debug mode saved to browser
- ✅ **Race Management** - Simplified controls, hole shot detection, unified pilot view
- ✅ **Frequency Reference Guide** - Comprehensive FPV band documentation
- ✅ **Architecture Improvements** - Refactored codebase, improved memory management, expanded API

**Code Retention:** ~30-40% of original PhobosLT code remains (core timing logic, RX5808 SPI communication, Kalman filtering, battery monitoring)

---

## License

MIT License - See LICENSE file for details

---

**Happy Racing! 🏁**

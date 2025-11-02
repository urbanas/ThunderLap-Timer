# PhobosLT MultiNode

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Multi-Node FPV Race Timing Solution - Supporting up to 4 simultaneous pilots**

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

PhobosLT MultiNode is an advanced lap timing solution for 5.8GHz FPV racing that supports **up to 4 simultaneous pilots**. Built on the affordable and widely-available **ESP32-WROOM-32** microcontroller and RX5808 modules, it provides real-time lap timing with a modern, mobile-responsive web interface.

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
- ✅ **Real-Time RSSI Monitoring** - Live graphs for each node
- ✅ **Voice Announcements** - Customizable lap time callouts with pilot names
- ✅ **Multiple Announcer Modes** - Beep only, single lap, 2-lap average, 3-lap average
- ✅ **Configurable Speed** - Adjustable voice announcement rate
- ✅ **Hole Shot Detection** - Special handling for race start (Lap 0)
- ✅ **Minimum Lap Time** - Prevents false positives from crashes or tight tracks

### Hardware Features
- ✅ **Multiple ESP32 Variants** - Supports ESP32-C3, ESP32-S3, DevKit, and more
- ✅ **Battery Monitoring** - Configurable low voltage alarm (2.8V - 4.0V)
- ✅ **Optional LED Indicator** - Visual feedback for events
- ✅ **Optional Buzzer** - Audio feedback for lap detection

### Web Interface Features
- ✅ **Modern UI** - Dark theme with gradient accents
- ✅ **5 Color Schemes** - Ocean Teal, Purple Haze, Cyber Cyan, Sunset Orange, Matrix Green
- ✅ **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ✅ **Three Main Tabs**:
  - **Configuration** - Set up pilots, frequencies, and system settings
  - **Race** - Start/stop timing and view live lap results
  - **Calibration** - Tune RSSI thresholds with real-time graphs
- ✅ **Persistent Settings** - All configurations saved to EEPROM

### Mobile Optimizations
- Card-based configuration layout
- Touch-friendly buttons (48px+ tap targets)
- Simplified race table for multi-node display
- Compact calibration controls
- Responsive theme selector in footer

---

## Quick Start (ESP32-WROOM-32)

For users with an **ESP32-WROOM-32** board, here's the fastest path to get racing:

1. **Get Hardware**
   - 1x ESP32-WROOM-32 (ESP32 DevKit) board
   - 1-4x RX5808 modules with [SPI mod](https://sheaivey.github.io/rx5808-pro-diversity/docs/rx5808-spi-mod.html)
   - 1x Active buzzer (optional but recommended)
   - USB cable for power and programming

2. **Wire It Up** (for Node 1)
   - RX5808 RSSI → GPIO33
   - RX5808 DATA → GPIO19
   - RX5808 SELECT → GPIO22
   - RX5808 CLOCK → GPIO23
   - RX5808 VCC → 3.3V (⚠️ not 5V!)
   - Buzzer → GPIO27
   - All grounds → GND

3. **Flash Firmware**
   - Clone this repo in VSCode with PlatformIO
   - Select `PhobosLT` target (default)
   - Build and upload firmware
   - Upload filesystem image

4. **Connect & Configure**
   - Connect to WiFi: `PhobosLT_XXXX` (password: `phoboslt`)
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

### Default Pinout (ESP32-WROOM-32)

This is the pinout for the standard **ESP32-WROOM-32** (ESP32 DevKit) board - the most common and affordable ESP32 variant.

**Node 1:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO33    | RSSI       | Analog RSSI input |
| GPIO19    | DATA       | SPI Data (shared) |
| GPIO22    | SELECT     | Chip Select |
| GPIO23    | CLOCK      | SPI Clock (shared) |
| 3.3V      | VCC (+5V)  | Power (undervolted) |
| GND       | GND        | Ground |

**Node 2:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO32    | RSSI       | Analog RSSI input |
| GPIO25    | DATA       | SPI Data |
| GPIO26    | SELECT     | Chip Select |
| GPIO14    | CLOCK      | SPI Clock |

**Node 3:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO34    | RSSI       | Analog RSSI input |
| GPIO19    | DATA       | SPI Data (shared with Node 1) |
| GPIO18    | SELECT     | Chip Select |
| GPIO23    | CLOCK      | SPI Clock (shared with Node 1) |

**Node 4:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO36    | RSSI       | Analog RSSI input |
| GPIO19    | DATA       | SPI Data (shared with Nodes 1 & 3) |
| GPIO17    | SELECT     | Chip Select |
| GPIO23    | CLOCK      | SPI Clock (shared with Nodes 1 & 3) |

**Peripherals:**
| ESP32 Pin | Peripheral | Notes |
|-----------|------------|-------|
| GPIO21    | LED        | Connect to anode (+) via resistor (~220Ω) |
| GPIO27    | Buzzer     | Active buzzer (3.3V-5V) |
| GPIO35    | VBAT       | Battery voltage (via 1/2 divider, max 3.3V) |

### Important Notes
- **RX5808 Power**: Connect RX5808's +5V pin to **3.3V** (undervolt for better RSSI resolution and cooling)
- **Shared Pins**: 
  - Nodes 1 & 3 share DATA (GPIO19) and CLOCK (GPIO23)
  - Node 2 has independent DATA/CLOCK
  - Node 4 shares DATA/CLOCK with Nodes 1 & 3
- **Unique Pins**: Each node MUST have its own RSSI and SELECT pins
- **Input-Only Pins**: GPIO34, GPIO35, GPIO36 are input-only (perfect for RSSI reading)

### Other ESP32 Variants
For ESP32-C3, ESP32-S3, and other boards, see the pin definitions in `lib/CONFIG/config.h`.

### Wiring Example (Single Node)

For a basic single-node setup with ESP32-WROOM-32:

```
RX5808 Module          ESP32-WROOM-32
┌─────────────┐        ┌──────────────┐
│ RSSI        │───────▶│ GPIO33       │
│ DATA        │───────▶│ GPIO19       │
│ SELECT      │───────▶│ GPIO22       │
│ CLOCK       │───────▶│ GPIO23       │
│ +5V (VCC)   │───────▶│ 3.3V         │ ⚠️ Important: Use 3.3V!
│ GND         │───────▶│ GND          │
└─────────────┘        └──────────────┘

Optional Peripherals:
LED (+ resistor) ─────▶ GPIO21 ─┐
                                 │
Active Buzzer ────────▶ GPIO27 ─┤
                                 │
                        GND ◀────┘
```

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
# Enter: https://github.com/urbanas/PhobosLT-MultiNode.git

# Or via terminal
git clone https://github.com/urbanas/PhobosLT-MultiNode.git
cd PhobosLT-MultiNode
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
2. **Connect** - Find WiFi network: `PhobosLT_XXXX`
3. **Password** - Enter: `phoboslt`
4. **Access** - Open browser to `20.0.0.1` (or wait for auto-redirect)

### Configuration Tab

**Pilot Configuration (Card-based layout):**
- **Active Nodes** - Select 1-4 nodes to use
- **Band & Channel** - Set for each pilot (A, B, E, F, R, L bands)
- **Pilot Name** - Optional name for voice announcements
- **Frequency Display** - Shows calculated frequency automatically

**General Settings:**
- **Minimum Lap Time** - Prevent false laps (default: 4.0 seconds)
- **Race Start Delay** - Countdown duration (default: 5.0 seconds)
- **Low Battery Alarm** - Voltage threshold (2.8V - 4.0V, default: 3.4V)
- **Announcer Type** - None / Beep / Lap Time / 2-Lap / 3-Lap
- **Announcer Rate** - Speech speed (0.1 - 2.0x, default: 1.0)
- **Voice Toggle** - Enable/disable voice announcements
- **Battery Voltage** - Current battery level display

**WiFi Settings** (hidden by default):
- SSID and password customization

**Important:** Click **Save Configuration** after changes!

### Race Tab

**Desktop View:**
- Side-by-side lap tables for each active pilot
- Full details: Lap number, Time, 3-Lap average
- Individual pilot headers with names

**Mobile View:**
- **1 Node**: Traditional format (Lap | Time | 3-Lap)
- **2-4 Nodes**: Compact table (Lap | N1 | N2 | N3 | N4)
- Lap 0 shown for "Hole Shot" race start

**Controls:**
- **Start** - Begin race countdown and timing
- **Stop** - Stop accepting new laps
- **Reset** - Clear all lap times

### Calibration Tab

**For Each Active Node:**
- **Real-time RSSI Graph** - Live signal strength visualization
- **Enter RSSI** - Threshold to start lap crossing (number input + slider)
- **Exit RSSI** - Threshold to complete lap crossing (number input + slider)
- **Horizontal Lines** - Red (Enter) and yellow (Exit) indicators on graph
- **Crossing State** - Visual feedback (green = crossing, blue = clear)

**Graph Features:**
- Auto-scaling based on Enter/Exit values
- Kalman-filtered RSSI for smooth visualization
- Real-time updates at 200ms intervals

**Important:** Click **Save RSSI Thresholds** after calibration!

### Footer Controls

**Theme Selector:**
- Ocean Teal (default)
- Purple Haze
- Cyber Cyan
- Sunset Orange
- Matrix Green
- Saved to browser localStorage

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
- Enable "Voice: ON" in footer
- Set pilot names in Configuration
- Choose announcer type (1-lap, 2-lap, 3-lap)
- Adjust speech rate if needed

**Multiple Pilots:**
- Set Active Nodes to 2, 3, or 4
- Configure unique frequency for each pilot
- Calibrate each node individually
- Race tab shows all pilots side-by-side (desktop) or in compact table (mobile)

**Battery Monitoring:**
- Set low voltage alarm in Configuration
- Current voltage shown in Configuration tab
- Buzzer alerts when threshold reached

**Mobile Racing:**
- Portrait orientation recommended
- Theme selector in footer
- Simplified race table for multi-pilot view
- All features fully functional

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

### What's Different in MultiNode?

This fork extends the original PhobosLT with:
- ✅ **4-Node Support** - Simultaneously time up to 4 pilots
- ✅ **Modern UI** - Complete redesign with 5 theme options
- ✅ **Mobile Optimization** - Touch-friendly controls, responsive tables, card-based layouts
- ✅ **Enhanced Calibration** - Precision number inputs, dynamic RSSI scaling
- ✅ **Persistent Preferences** - Theme settings saved locally
- ✅ **Race Management** - Simplified controls, hole shot detection, multi-node lap tables
- ✅ **Architecture Improvements** - Refactored codebase, improved memory management, expanded API

**Code Retention:** ~30-40% of original PhobosLT code remains (core timing logic, RX5808 SPI communication, Kalman filtering, battery monitoring)

---

## License

MIT License - See LICENSE file for details

---

**Happy Racing! 🏁**

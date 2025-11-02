# PhobosLT MultiNode

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Multi-Node FPV Race Timing Solution - Supporting up to 4 simultaneous pilots**

> This project is a fork of the original [PhobosLT](https://github.com/phobos-/PhobosLT) by phobos-, extended to support multiple nodes for multi-pilot racing.

---

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Hardware Requirements](#hardware-requirements)
- [Pin Configuration](#pin-configuration)
- [Firmware Installation](#firmware-installation)
- [Web Interface](#web-interface)
- [Calibration Guide](#calibration-guide)
- [Usage](#usage)
- [Community](#community)

---

## About

PhobosLT MultiNode is an advanced lap timing solution for 5.8GHz FPV racing that supports **up to 4 simultaneous pilots**. Built on ESP32 microcontrollers and RX5808 modules, it provides real-time lap timing with a modern, mobile-responsive web interface.

The system is completely self-contained - it creates its own WiFi access point and serves a web application that works on any device with a browser (phone, tablet, or laptop). No additional apps or software needed!

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
- ✅ **Debug Mode** - Built-in test lap generator for UI testing
- ✅ **Persistent Settings** - All configurations saved to EEPROM

### Mobile Optimizations
- Card-based configuration layout
- Touch-friendly buttons (48px+ tap targets)
- Simplified race table for multi-node display
- Compact calibration controls
- Responsive theme selector in footer

---

## Hardware Requirements

### Core Components (Per Node)
- **ESP32 Board** with USB (one board can handle all 4 nodes)
  - Recommended: LilyGo T-Energy (built-in battery management)
  - Also supported: T-Cell, ESP32-C3, ESP32-S3, ESP32 DevKit
- **RX5808 Module** with [SPI mod](https://sheaivey.github.io/rx5808-pro-diversity/docs/rx5808-spi-mod.html)
- **Power Supply** - Battery, powerbank, or USB power
  - Single ESP32 can power up to 4 RX5808 modules

### Optional Components
- **LED** - Visual feedback (any color + appropriate resistor)
- **Active Buzzer** - 3.3V-5V with built-in generator
- **Battery** - 1S Li-Ion (for portable operation)

### Building Multi-Node Setup
For a complete 4-node system, you need:
- 1x ESP32 board (any supported variant)
- 4x RX5808 modules (SPI modded)
- 1x Power supply
- 1x Optional buzzer
- 1x Optional LED

**Cost Estimate:** ~$30-50 USD for a complete 4-node system

---

## Pin Configuration

### Default Pinout (ESP32-C3)

**Node 1:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO2     | RSSI       | Analog RSSI input |
| GPIO6     | DATA       | SPI Data (shared) |
| GPIO5     | SELECT     | Chip Select |
| GPIO4     | CLOCK      | SPI Clock (shared) |
| 3.3V      | VCC (+5V)  | Power (undervolted) |
| GND       | GND        | Ground |

**Node 2:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO3     | RSSI       | Analog RSSI input |
| GPIO6     | DATA       | SPI Data (shared) |
| GPIO10    | SELECT     | Chip Select |
| GPIO4     | CLOCK      | SPI Clock (shared) |

**Node 3:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO20    | RSSI       | Analog RSSI input |
| GPIO6     | DATA       | SPI Data (shared) |
| GPIO21    | SELECT     | Chip Select |
| GPIO4     | CLOCK      | SPI Clock (shared) |

**Node 4:**
| ESP32 Pin | RX5808 Pin | Function |
|-----------|------------|----------|
| GPIO19    | RSSI       | Analog RSSI input |
| GPIO6     | DATA       | SPI Data (shared) |
| GPIO18    | SELECT     | Chip Select |
| GPIO4     | CLOCK      | SPI Clock (shared) |

**Peripherals:**
| ESP32 Pin | Peripheral | Notes |
|-----------|------------|-------|
| GPIO9     | LED        | Connect to anode (+) via resistor |
| GPIO7     | Buzzer     | Active buzzer (3.3V-5V) |
| GPIO0     | VBAT       | Battery voltage (via 1/2 divider) |

### Important Notes
- **RX5808 Power**: Connect RX5808's +5V pin to **3.3V** (undervolt for better RSSI resolution)
- **Shared Pins**: DATA and CLOCK are shared across all nodes
- **Unique Pins**: Each node needs its own RSSI and SELECT pins
- **Other ESP32 Variants**: See `lib/CONFIG/config.h` for ESP32-S3, DevKit, and other pinouts

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
# Enter: https://github.com/YOUR_USERNAME/PhobosLT-MultiNode.git

# Or via terminal
git clone https://github.com/YOUR_USERNAME/PhobosLT-MultiNode.git
cd PhobosLT-MultiNode
```

### Select Target Hardware
Open `platformio.ini` and set your target:
```ini
[platformio]
default_envs = PhobosLT  ; Options: PhobosLT, ESP32C3, ESP32S3, LicardoTimer
```

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

**Debug Mode** (footer toggle):
- Enables T1-T4 test buttons for adding random lap times
- Useful for testing UI without flying

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

**Debug Toggle:**
- Show/hide test lap buttons on Race tab
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
- Theme selector and debug mode in footer
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

- **Original PhobosLT** by [phobos-](https://github.com/phobos-/PhobosLT)
- **RotorHazard** for timing algorithms and inspiration
- **ExpressLRS** for codebase patterns
- **Community Contributors** for testing and feedback

---

## License

MIT License - See LICENSE file for details

---

**Happy Racing! 🏁**

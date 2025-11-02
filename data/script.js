// Theme color palettes
const themes = {
  ocean: {
    name: 'Ocean Teal',
    primaryGradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 100%)',
    secondaryGradient: 'linear-gradient(135deg, #2dd4bf 0%, #06b6d4 100%)',
    successGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    primaryColor: '#14b8a6',
    primaryDark: '#0d9488',
    accentColor: '#2dd4bf',
    bgMain: '#0c1415',
    bgCard: '#132123',
    bgCardHover: '#1a2e31',
    bgInput: '#0e1819',
    textPrimary: '#ecfeff',
    textSecondary: '#a5d4d8',
    borderColor: '#1e3438',
    borderAccent: '#14b8a6',
    bgGradient1: 'rgba(20, 184, 166, 0.08)',
    bgGradient2: 'rgba(8, 145, 178, 0.08)',
    bgGradient3: 'rgba(45, 212, 191, 0.05)',
    focusShadow: 'rgba(20, 184, 166, 0.15)',
  },
  purple: {
    name: 'Purple Haze',
    primaryGradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    secondaryGradient: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
    successGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    primaryColor: '#8b5cf6',
    primaryDark: '#7c3aed',
    accentColor: '#a78bfa',
    bgMain: '#0f0a1e',
    bgCard: '#1a1229',
    bgCardHover: '#241937',
    bgInput: '#130e21',
    textPrimary: '#f3e8ff',
    textSecondary: '#d8b4fe',
    borderColor: '#2e1f42',
    borderAccent: '#8b5cf6',
    bgGradient1: 'rgba(139, 92, 246, 0.08)',
    bgGradient2: 'rgba(124, 58, 237, 0.08)',
    bgGradient3: 'rgba(167, 139, 250, 0.05)',
    focusShadow: 'rgba(139, 92, 246, 0.15)',
  },
  cyan: {
    name: 'Cyber Cyan',
    primaryGradient: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)',
    secondaryGradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
    successGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    primaryColor: '#06b6d4',
    primaryDark: '#0284c7',
    accentColor: '#22d3ee',
    bgMain: '#0a1621',
    bgCard: '#0f1e2e',
    bgCardHover: '#162839',
    bgInput: '#0c1922',
    textPrimary: '#e0f2fe',
    textSecondary: '#a5d8f3',
    borderColor: '#1e3344',
    borderAccent: '#06b6d4',
    bgGradient1: 'rgba(6, 182, 212, 0.08)',
    bgGradient2: 'rgba(2, 132, 199, 0.08)',
    bgGradient3: 'rgba(34, 211, 238, 0.05)',
    focusShadow: 'rgba(6, 182, 212, 0.15)',
  },
  orange: {
    name: 'Sunset Orange',
    primaryGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    secondaryGradient: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 100%)',
    successGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    primaryColor: '#f59e0b',
    primaryDark: '#d97706',
    accentColor: '#fb923c',
    bgMain: '#1a1209',
    bgCard: '#221a10',
    bgCardHover: '#2d2415',
    bgInput: '#1c1510',
    textPrimary: '#fef3e2',
    textSecondary: '#fcd9a5',
    borderColor: '#3d2f1e',
    borderAccent: '#f59e0b',
    bgGradient1: 'rgba(245, 158, 11, 0.08)',
    bgGradient2: 'rgba(217, 119, 6, 0.08)',
    bgGradient3: 'rgba(251, 146, 60, 0.05)',
    focusShadow: 'rgba(245, 158, 11, 0.15)',
  },
  green: {
    name: 'Matrix Green',
    primaryGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    secondaryGradient: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
    successGradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    primaryColor: '#10b981',
    primaryDark: '#059669',
    accentColor: '#34d399',
    bgMain: '#0a1410',
    bgCard: '#0f1e18',
    bgCardHover: '#142822',
    bgInput: '#0c1812',
    textPrimary: '#ecfdf5',
    textSecondary: '#a7f3d0',
    borderColor: '#1e3a2e',
    borderAccent: '#10b981',
    bgGradient1: 'rgba(16, 185, 129, 0.08)',
    bgGradient2: 'rgba(5, 150, 105, 0.08)',
    bgGradient3: 'rgba(52, 211, 153, 0.05)',
    focusShadow: 'rgba(16, 185, 129, 0.15)',
  }
};

// Apply theme to the page
function changeTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  
  const root = document.documentElement;
  
  // Update CSS variables
  root.style.setProperty('--primary-gradient', theme.primaryGradient);
  root.style.setProperty('--secondary-gradient', theme.secondaryGradient);
  root.style.setProperty('--success-gradient', theme.successGradient);
  root.style.setProperty('--primary-color', theme.primaryColor);
  root.style.setProperty('--primary-dark', theme.primaryDark);
  root.style.setProperty('--accent-color', theme.accentColor);
  root.style.setProperty('--bg-main', theme.bgMain);
  root.style.setProperty('--bg-card', theme.bgCard);
  root.style.setProperty('--bg-card-hover', theme.bgCardHover);
  root.style.setProperty('--bg-input', theme.bgInput);
  root.style.setProperty('--text-primary', theme.textPrimary);
  root.style.setProperty('--text-secondary', theme.textSecondary);
  root.style.setProperty('--border-color', theme.borderColor);
  root.style.setProperty('--border-accent', theme.borderAccent);
  
  // Update background gradient
  const bgElement = document.querySelector('body::before') || document.body;
  document.body.style.setProperty('--bg-gradient-1', theme.bgGradient1);
  document.body.style.setProperty('--bg-gradient-2', theme.bgGradient2);
  document.body.style.setProperty('--bg-gradient-3', theme.bgGradient3);
  
  // Save preference to localStorage
  localStorage.setItem('selectedTheme', themeName);
}

// Load saved theme on page load
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('selectedTheme') || 'orange';
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    themeSelect.value = savedTheme;
    changeTheme(savedTheme);
  }
}

// Toggle debug mode
function toggleDebugMode(enabled) {
  const testButtons = document.querySelector('.test-buttons');
  if (testButtons) {
    testButtons.style.display = enabled ? 'flex' : 'none';
  }
  
  // Save preference to localStorage
  localStorage.setItem('debugMode', enabled ? 'true' : 'false');
}

// Load saved debug mode on page load
function loadSavedDebugMode() {
  const savedDebugMode = localStorage.getItem('debugMode') === 'true';
  const debugToggle = document.getElementById('debugToggle');
  if (debugToggle) {
    debugToggle.checked = savedDebugMode;
    toggleDebugMode(savedDebugMode);
  }
}

// Frequency lookup table for all bands
const freqLookup = [
  [5865, 5845, 5825, 5805, 5785, 5765, 5745, 5725], // Band A
  [5733, 5752, 5771, 5790, 5809, 5828, 5847, 5866], // Band B
  [5705, 5685, 5665, 5645, 5885, 5905, 5925, 5945], // Band E
  [5740, 5760, 5780, 5800, 5820, 5840, 5860, 5880], // Fatshark
  [5658, 5695, 5732, 5769, 5806, 5843, 5880, 5917], // RaceBand
  [5362, 5399, 5436, 5473, 5510, 5547, 5584, 5621], // LowBand
];

// Node state management - initialized after DOM loads
let nodes = {};

// Common elements - initialized after DOM loads
let commonElements = {};

// Common state
let announcerRate = 1.0;
let raceStartDelay = 5.0;
let timerInterval = null;
let rssiSending = false;
let audioEnabled = false;
let speakObjsQueue = [];

// Initialize DOM references and state
function initializeNodes() {
  nodes = {
    1: {
      // DOM element references
      bandSelect: document.getElementById("bandSelect"),
      channelSelect: document.getElementById("channelSelect"),
      freqOutput: document.getElementById("freqOutput"),
      enterRssiSlider: document.getElementById("enter"),
      exitRssiSlider: document.getElementById("exit"),
      enterRssiInput: document.getElementById("enterInput"),
      exitRssiInput: document.getElementById("exitInput"),
      pilotNameInput: document.getElementById("pname"),
      pilotNameDisplay: document.getElementById("pilot1Name"),
      lapTable: document.getElementById("lapTable"),
      chartCanvas: document.getElementById("rssiChart"),
      // State variables
      enterRssi: 120,
      exitRssi: 100,
      frequency: 0,
      lapNo: -1,
      lapTimes: [],
      rssiBuffer: [],
      rssiValue: 0,
      crossing: false,
      rssiSeries: new TimeSeries(),
      rssiCrossingSeries: new TimeSeries(),
      maxRssiValue: 130,
      minRssiValue: 90,
      rssiChart: null,
    },
    2: {
      // DOM element references
      bandSelect: document.getElementById("bandSelect2"),
      channelSelect: document.getElementById("channelSelect2"),
      freqOutput: document.getElementById("freqOutput2"),
      enterRssiSlider: document.getElementById("enter2"),
      exitRssiSlider: document.getElementById("exit2"),
      enterRssiInput: document.getElementById("enterInput2"),
      exitRssiInput: document.getElementById("exitInput2"),
      pilotNameInput: document.getElementById("pname2"),
      pilotNameDisplay: document.getElementById("pilot2Name"),
      lapTable: document.getElementById("lapTable2"),
      chartCanvas: document.getElementById("rssiChart2"),
      // State variables
      enterRssi: 120,
      exitRssi: 100,
      frequency: 0,
      lapNo: -1,
      lapTimes: [],
      rssiBuffer: [],
      rssiValue: 0,
      crossing: false,
      rssiSeries: new TimeSeries(),
      rssiCrossingSeries: new TimeSeries(),
      maxRssiValue: 130,
      minRssiValue: 90,
      rssiChart: null,
    },
    3: {
      // DOM element references
      bandSelect: document.getElementById("bandSelect3"),
      channelSelect: document.getElementById("channelSelect3"),
      freqOutput: document.getElementById("freqOutput3"),
      enterRssiSlider: document.getElementById("enter3"),
      exitRssiSlider: document.getElementById("exit3"),
      enterRssiInput: document.getElementById("enterInput3"),
      exitRssiInput: document.getElementById("exitInput3"),
      pilotNameInput: document.getElementById("pname3"),
      pilotNameDisplay: document.getElementById("pilot3Name"),
      lapTable: document.getElementById("lapTable3"),
      chartCanvas: document.getElementById("rssiChart3"),
      // State variables
      enterRssi: 120,
      exitRssi: 100,
      frequency: 0,
      lapNo: -1,
      lapTimes: [],
      rssiBuffer: [],
      rssiValue: 0,
      crossing: false,
      rssiSeries: new TimeSeries(),
      rssiCrossingSeries: new TimeSeries(),
      maxRssiValue: 130,
      minRssiValue: 90,
      rssiChart: null,
    },
    4: {
      // DOM element references
      bandSelect: document.getElementById("bandSelect4"),
      channelSelect: document.getElementById("channelSelect4"),
      freqOutput: document.getElementById("freqOutput4"),
      enterRssiSlider: document.getElementById("enter4"),
      exitRssiSlider: document.getElementById("exit4"),
      enterRssiInput: document.getElementById("enterInput4"),
      exitRssiInput: document.getElementById("exitInput4"),
      pilotNameInput: document.getElementById("pname4"),
      pilotNameDisplay: document.getElementById("pilot4Name"),
      lapTable: document.getElementById("lapTable4"),
      chartCanvas: document.getElementById("rssiChart4"),
      // State variables
      enterRssi: 120,
      exitRssi: 100,
      frequency: 0,
      lapNo: -1,
      lapTimes: [],
      rssiBuffer: [],
      rssiValue: 0,
      crossing: false,
      rssiSeries: new TimeSeries(),
      rssiCrossingSeries: new TimeSeries(),
      maxRssiValue: 130,
      minRssiValue: 90,
      rssiChart: null,
    }
  };

  commonElements = {
    announcerSelect: document.getElementById("announcerSelect"),
    announcerRateInput: document.getElementById("rate"),
    ssidInput: document.getElementById("ssid"),
    pwdInput: document.getElementById("pwd"),
    minLapInput: document.getElementById("minLap"),
    raceStartDelayInput: document.getElementById("raceStartDelay"),
    alarmThreshold: document.getElementById("alarmThreshold"),
    activeNodeCountSelect: document.getElementById("activeNodeCount"),
    timer: document.getElementById("timer"),
    startRaceButton: document.getElementById("startRaceButton"),
    stopRaceButton: document.getElementById("stopRaceButton"),
    batteryVoltageDisplay: document.getElementById("bvolt"),
    config: document.getElementById("config"),
    race: document.getElementById("race"),
    calib: document.getElementById("calib"),
  };
}

// Initialize application on load
onload = function (e) {
  // Initialize DOM references first
  initializeNodes();
  
  // Load saved theme
  loadSavedTheme();
  loadSavedDebugMode();
  
  commonElements.config.style.display = "block";
  commonElements.race.style.display = "none";
  commonElements.calib.style.display = "none";
  
  // Enable voice by default
  enableAudioLoop();
  
  loadConfiguration();
  setupEventListeners();
};

// Update visibility of nodes based on activeNodeCount
function updateActiveNodeCount(count) {
  const nodeCount = parseInt(count);
  
  // Handle node cards visibility (new card layout)
  const allNodeCards = document.querySelectorAll('.node-card');
  allNodeCards.forEach((card, index) => {
    const nodeNum = index + 1;
    if (nodeNum <= nodeCount) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  
  // Get all elements with node-3 and node-4 classes (for race and calibration tabs)
  const node3Elements = document.querySelectorAll('.node-3:not(.node-card)');
  const node4Elements = document.querySelectorAll('.node-4:not(.node-card)');
  
  // Show/hide node 3 elements
  node3Elements.forEach(el => {
    if (nodeCount >= 3) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
  
  // Show/hide node 4 elements
  node4Elements.forEach(el => {
    if (nodeCount >= 4) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
  
  // Node 2 in race table
  const node2RaceHeader = document.querySelector('.race-layout-table .pilot-header:nth-child(2)');
  const node2RaceCell = document.querySelector('.race-layout-table .lap-table-cell:nth-child(2)');
  if (node2RaceHeader) node2RaceHeader.style.display = nodeCount >= 2 ? '' : 'none';
  if (node2RaceCell) node2RaceCell.style.display = nodeCount >= 2 ? '' : 'none';
  
  // Node 2 calibration section
  const node2Calib = document.querySelectorAll('.calib-section:nth-of-type(2)');
  node2Calib.forEach(el => {
    el.style.display = nodeCount >= 2 ? '' : 'none';
  });
  
  // Update race table widths (cards don't need width management)
  const raceHeaders = document.querySelectorAll('.race-layout-table .pilot-header');
  const raceCells = document.querySelectorAll('.race-layout-table .lap-table-cell');
  
  const widthMap = {
    1: '100%',
    2: '50%',
    3: '33.333%',
    4: '25%'
  };
  
  const width = widthMap[nodeCount];
  
  // Update race table widths
  raceHeaders.forEach((el, index) => {
    if (index < nodeCount) {
      el.style.width = width;
    }
  });
  
  raceCells.forEach((el, index) => {
    if (index < nodeCount) {
      el.style.width = width;
    }
  });
  
  // Re-create RSSI charts for visible nodes
  for (let i = 1; i <= 4; i++) {
    if (i <= nodeCount) {
      // Use setTimeout to ensure canvas is visible before creating chart
      setTimeout(() => {
        if (!nodes[i].rssiChart && nodes[i].chartCanvas) {
          console.log(`Creating chart for node ${i}`);
          createRssiChart(i);
        }
      }, 100);
    } else {
      // Stop chart if it exists
      if (nodes[i].rssiChart) {
        nodes[i].rssiChart.stop();
        nodes[i].rssiChart = null;
      }
    }
  }
  
  // Update mobile race table column visibility
  const mobileTable = document.getElementById('mobileLapTable');
  const singleNodeTableDiv = document.querySelector('.single-node-table');
  const multiNodeTableDiv = document.querySelector('.multi-node-table');
  
  if (singleNodeTableDiv && multiNodeTableDiv) {
    // Show single node table for 1 node, multi-node table for 2+
    if (nodeCount === 1) {
      singleNodeTableDiv.style.display = 'block';
      multiNodeTableDiv.style.display = 'none';
    } else {
      singleNodeTableDiv.style.display = 'none';
      multiNodeTableDiv.style.display = 'block';
    }
  }
  
  if (mobileTable && nodeCount > 1) {
    // Show/hide N3 column
    const node3Headers = mobileTable.querySelectorAll('.node-col.node-3');
    node3Headers.forEach(el => el.style.display = nodeCount >= 3 ? '' : 'none');
    
    // Show/hide N4 column
    const node4Headers = mobileTable.querySelectorAll('.node-col.node-4');
    node4Headers.forEach(el => el.style.display = nodeCount >= 4 ? '' : 'none');
    
    // Update all data rows
    const rows = document.querySelectorAll('#mobileLapTableBody tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      if (cells[3]) cells[3].style.display = nodeCount >= 3 ? '' : 'none'; // Node 3
      if (cells[4]) cells[4].style.display = nodeCount >= 4 ? '' : 'none'; // Node 4
    });
  }
}

// Load configuration from server
function loadConfiguration() {
  fetch("/config")
    .then((response) => response.json())
    .then((config) => {
      console.log("Loaded config:", config);
      
      // Configure Node 1
      configureNode(1, {
        freq: config.freq,
        enterRssi: config.enterRssi,
        exitRssi: config.exitRssi,
        pilotName: config.name,
      });
      
      // Configure Node 2
      configureNode(2, {
        freq: config.freq2,
        enterRssi: config.enterRssi2,
        exitRssi: config.exitRssi2,
        pilotName: config.name2,
      });
      
      // Configure Node 3
      configureNode(3, {
        freq: config.freq3,
        enterRssi: config.enterRssi3,
        exitRssi: config.exitRssi3,
        pilotName: config.name3,
      });
      
      // Configure Node 4
      configureNode(4, {
        freq: config.freq4,
        enterRssi: config.enterRssi4,
        exitRssi: config.exitRssi4,
        pilotName: config.name4,
      });
      
      // Configure common settings
      commonElements.minLapInput.value = (parseFloat(config.minLap) / 10).toFixed(1);
      
      if (config.raceStartDelay !== undefined) {
        commonElements.raceStartDelayInput.value = (parseFloat(config.raceStartDelay) / 10).toFixed(1);
        raceStartDelay = parseFloat(commonElements.raceStartDelayInput.value);
      }
      
      commonElements.alarmThreshold.value = (parseFloat(config.alarm) / 10).toFixed(1);
      commonElements.announcerSelect.selectedIndex = config.anType;
      commonElements.announcerRateInput.value = (parseFloat(config.anRate) / 10).toFixed(1);
      announcerRate = parseFloat(commonElements.announcerRateInput.value);
      commonElements.ssidInput.value = config.ssid;
      commonElements.pwdInput.value = config.pwd;
      
      // Set active node count and update visibility
      const activeNodeCount = config.activeNodeCount || 2;
      commonElements.activeNodeCountSelect.value = activeNodeCount;
      updateActiveNodeCount(activeNodeCount);
      
      commonElements.stopRaceButton.disabled = true;
      commonElements.startRaceButton.disabled = false;
      clearInterval(timerInterval);
      timerInterval = null;
      commonElements.timer.innerHTML = "00:00:00s";
      
      clearLaps();
      
      // Create RSSI charts for active nodes
      for (let i = 1; i <= activeNodeCount; i++) {
        createRssiChart(i);
      }
    });
}

// Configure a specific node with settings
function configureNode(nodeId, config) {
  const node = nodes[nodeId];
  
  setBandChannelIndex(config.freq, nodeId);
  node.enterRssiInput.value = config.enterRssi;
  updateEnterRssiForNode(nodeId, config.enterRssi);
  node.exitRssiInput.value = config.exitRssi;
  updateExitRssiForNode(nodeId, config.exitRssi);
  node.pilotNameInput.value = config.pilotName;
  
  // Update pilot name display
  const pilotName = config.pilotName || `Pilot ${nodeId}`;
  node.pilotNameDisplay.textContent = pilotName;
  
  // Update lap table data attribute for mobile display
  if (node.lapTable) {
    node.lapTable.setAttribute('data-pilot-name', `${pilotName} (N${nodeId})`);
  }
  
  populateFreqOutput(nodeId);
}

// Setup all event listeners
function setupEventListeners() {
  // Node 1 event listeners
  nodes[1].bandSelect.addEventListener("change", () => populateFreqOutput(1));
  nodes[1].channelSelect.addEventListener("change", () => populateFreqOutput(1));
  nodes[1].pilotNameInput.addEventListener("input", function() {
    const pilotName = this.value || "Pilot 1";
    nodes[1].pilotNameDisplay.textContent = pilotName;
    nodes[1].lapTable.setAttribute('data-pilot-name', `${pilotName} (N1)`);
  });
  
  // Node 2 event listeners
  nodes[2].bandSelect.addEventListener("change", () => populateFreqOutput(2));
  nodes[2].channelSelect.addEventListener("change", () => populateFreqOutput(2));
  nodes[2].pilotNameInput.addEventListener("input", function() {
    const pilotName = this.value || "Pilot 2";
    nodes[2].pilotNameDisplay.textContent = pilotName;
    nodes[2].lapTable.setAttribute('data-pilot-name', `${pilotName} (N2)`);
  });
  
  // Node 3 event listeners
  nodes[3].bandSelect.addEventListener("change", () => populateFreqOutput(3));
  nodes[3].channelSelect.addEventListener("change", () => populateFreqOutput(3));
  nodes[3].pilotNameInput.addEventListener("input", function() {
    const pilotName = this.value || "Pilot 3";
    nodes[3].pilotNameDisplay.textContent = pilotName;
    nodes[3].lapTable.setAttribute('data-pilot-name', `${pilotName} (N3)`);
  });
  
  // Node 4 event listeners
  nodes[4].bandSelect.addEventListener("change", () => populateFreqOutput(4));
  nodes[4].channelSelect.addEventListener("change", () => populateFreqOutput(4));
  nodes[4].pilotNameInput.addEventListener("input", function() {
    const pilotName = this.value || "Pilot 4";
    nodes[4].pilotNameDisplay.textContent = pilotName;
    nodes[4].lapTable.setAttribute('data-pilot-name', `${pilotName} (N4)`);
  });
  
  // Start battery voltage polling
  setInterval(getBatteryVoltage, 2000);
  
  // Start RSSI chart updates
  setInterval(updateRssiCharts, 200);
  
  // Start event source for lap times and RSSI
  setupEventSource();
}

// Battery voltage monitoring
function getBatteryVoltage() {
  fetch("/status")
    .then((response) => response.text())
    .then((response) => {
      const batteryVoltageMatch = response.match(/Battery Voltage:\s*([\d.]+v)/);
      const batteryVoltage = batteryVoltageMatch ? batteryVoltageMatch[1] : null;
      commonElements.batteryVoltageDisplay.innerText = batteryVoltage;
    });
}

// Update RSSI charts for all nodes
function updateRssiCharts() {
  if (commonElements.calib.style.display !== "none") {
    // Charts are visible, update them
    const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
    for (let nodeId = 1; nodeId <= activeNodeCount; nodeId++) {
      const node = nodes[nodeId];
      if (node.rssiChart) {
        node.rssiChart.start();
      }
      
      if (node.rssiBuffer.length > 0) {
        node.rssiValue = parseInt(node.rssiBuffer.shift());
        
        // Update crossing state
        if (node.crossing && node.rssiValue < node.exitRssi) {
          node.crossing = false;
        } else if (!node.crossing && node.rssiValue > node.enterRssi) {
          node.crossing = true;
        }
        
        // Update min/max values
        node.maxRssiValue = Math.max(node.maxRssiValue, node.rssiValue);
        node.minRssiValue = Math.min(node.minRssiValue, node.rssiValue);
        
        // Only append to chart when we have new data
        const now = Date.now();
        node.rssiSeries.append(now, node.rssiValue);
        if (node.crossing) {
          node.rssiCrossingSeries.append(now, 256);
        } else {
          node.rssiCrossingSeries.append(now, -10);
        }
      }
      
      // Update chart options
      if (node.rssiChart) {
        node.rssiChart.options.horizontalLines = [
          { color: "hsl(8.2, 86.5%, 53.7%)", lineWidth: 1.7, value: node.enterRssi },
          { color: "hsl(25, 85%, 55%)", lineWidth: 1.7, value: node.exitRssi },
        ];
        node.rssiChart.options.maxValue = Math.max(node.maxRssiValue, node.enterRssi + 10);
        node.rssiChart.options.minValue = Math.max(0, Math.min(node.minRssiValue, node.exitRssi - 10));
      }
    }
  } else {
    // Charts hidden, stop them
    const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
    for (let nodeId = 1; nodeId <= activeNodeCount; nodeId++) {
      const node = nodes[nodeId];
      if (node.rssiChart) {
        node.rssiChart.stop();
      }
      node.maxRssiValue = node.enterRssi + 10;
      node.minRssiValue = node.exitRssi - 10;
    }
  }
}

// Create RSSI chart for a node
function createRssiChart(nodeId) {
  const node = nodes[nodeId];
  
  // Check if canvas exists
  if (!node.chartCanvas) {
    console.error(`Canvas for node ${nodeId} not found`);
    return;
  }
  
  // Stop existing chart if any
  if (node.rssiChart) {
    node.rssiChart.stop();
  }
  
  // Force canvas dimensions to ensure it's visible
  node.chartCanvas.style.width = '100%';
  node.chartCanvas.style.height = '250px';
  node.chartCanvas.width = node.chartCanvas.offsetWidth || 800;
  node.chartCanvas.height = 250;
  
  node.rssiChart = new SmoothieChart({
    responsive: true,
    millisPerPixel: 50,
    grid: {
      strokeStyle: "rgba(255,255,255,0.25)",
      sharpLines: true,
      verticalSections: 0,
      borderVisible: false,
    },
    labels: {
      precision: 0,
    },
    maxValue: node.maxRssiValue,
    minValue: node.minRssiValue,
  });
  
  node.rssiChart.addTimeSeries(node.rssiSeries, {
    lineWidth: 1.7,
    strokeStyle: "hsl(214, 53%, 60%)",
    fillStyle: "hsla(214, 53%, 60%, 0.4)",
  });
  
  node.rssiChart.addTimeSeries(node.rssiCrossingSeries, {
    lineWidth: 1.7,
    strokeStyle: "none",
    fillStyle: "hsla(136, 71%, 70%, 0.3)",
  });
  
  node.rssiChart.streamTo(node.chartCanvas, 200);
}

// Tab management
function openTab(evt, tabName) {
  // Hide all tabs
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Remove active class from all tabs
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Show current tab and mark as active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  
  // Handle RSSI streaming for calibration tab
  if (tabName === "calib") {
    // Create charts for all active nodes when opening calibration tab
    const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
    
    // Longer delay to ensure DOM is fully updated
    setTimeout(() => {
      for (let i = 1; i <= 4; i++) {
        // Always try to create/recreate charts for active nodes
        if (i <= activeNodeCount) {
          if (nodes[i].chartCanvas) {
            // Stop existing chart
            if (nodes[i].rssiChart) {
              nodes[i].rssiChart.stop();
              nodes[i].rssiChart = null;
            }
            createRssiChart(i);
          } else {
            console.error(`Node ${i} canvas element not found!`);
          }
        } else {
          // Stop charts for inactive nodes
          if (nodes[i].rssiChart) {
            nodes[i].rssiChart.stop();
            nodes[i].rssiChart = null;
          }
        }
      }
    }, 250); // Increased delay
    
    if (!rssiSending) {
      fetch("/timer/rssiStart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) rssiSending = true;
          return response.json();
        })
        .catch((error) => console.error("Error starting RSSI:", error));
    }
  } else if (rssiSending) {
    fetch("/timer/rssiStop", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) rssiSending = false;
        return response.json();
      })
      .then((response) => console.log("/timer/rssiStop:", JSON.stringify(response)));
  }
}

// RSSI threshold updates - internal function
function updateEnterRssiForNode(nodeId, value) {
  const node = nodes[nodeId];
  node.enterRssi = parseInt(value);
  
  // Sync both slider and number input
  node.enterRssiSlider.value = node.enterRssi;
  node.enterRssiInput.value = node.enterRssi;
  
  if (node.enterRssi <= node.exitRssi) {
    node.exitRssi = Math.max(0, node.enterRssi - 1);
    node.exitRssiSlider.value = node.exitRssi;
    node.exitRssiInput.value = node.exitRssi;
  }
  
  // Update chart scaling
  node.maxRssiValue = node.enterRssi + 10;
  node.minRssiValue = node.exitRssi - 10;
  if (node.rssiChart) {
    node.rssiChart.options.maxValue = node.maxRssiValue;
    node.rssiChart.options.minValue = Math.max(0, node.minRssiValue);
  }
}

function updateExitRssiForNode(nodeId, value) {
  const node = nodes[nodeId];
  node.exitRssi = parseInt(value);
  
  // Sync both slider and number input
  node.exitRssiSlider.value = node.exitRssi;
  node.exitRssiInput.value = node.exitRssi;
  
  if (node.exitRssi >= node.enterRssi) {
    node.enterRssi = Math.min(255, node.exitRssi + 1);
    node.enterRssiSlider.value = node.enterRssi;
    node.enterRssiInput.value = node.enterRssi;
  }
  
  // Update chart scaling
  node.maxRssiValue = node.enterRssi + 10;
  node.minRssiValue = node.exitRssi - 10;
  if (node.rssiChart) {
    node.rssiChart.options.maxValue = node.maxRssiValue;
    node.rssiChart.options.minValue = Math.max(0, node.minRssiValue);
  }
}

// HTML compatibility wrappers (called from inline oninput handlers)
function updateEnterRssi(obj, value) {
  updateEnterRssiForNode(1, value);
}

function updateExitRssi(obj, value) {
  updateExitRssiForNode(1, value);
}

function updateEnterRssi2(obj, value) {
  updateEnterRssiForNode(2, value);
}

function updateExitRssi2(obj, value) {
  updateExitRssiForNode(2, value);
}

function updateEnterRssi3(obj, value) {
  updateEnterRssiForNode(3, value);
}

function updateExitRssi3(obj, value) {
  updateExitRssiForNode(3, value);
}

function updateEnterRssi4(obj, value) {
  updateEnterRssiForNode(4, value);
}

function updateExitRssi4(obj, value) {
  updateExitRssiForNode(4, value);
}

// Configuration management
function saveConfig() {
  const saveButton = event.target;
  const originalText = saveButton.textContent;
  const originalColor = saveButton.style.backgroundColor;
  
  // Show saving state
  saveButton.textContent = "Saving...";
  saveButton.disabled = true;
  saveButton.style.backgroundColor = "#FFA500";
  
  fetch("/config", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      freq: nodes[1].frequency,
      minLap: parseInt(commonElements.minLapInput.value * 10),
      raceStartDelay: parseInt(raceStartDelay * 10),
      alarm: parseInt(commonElements.alarmThreshold.value * 10),
      anType: commonElements.announcerSelect.selectedIndex,
      anRate: parseInt(announcerRate * 10),
      enterRssi: nodes[1].enterRssi,
      exitRssi: nodes[1].exitRssi,
      name: nodes[1].pilotNameInput.value,
      freq2: nodes[2].frequency,
      enterRssi2: nodes[2].enterRssi,
      exitRssi2: nodes[2].exitRssi,
      name2: nodes[2].pilotNameInput.value,
      freq3: nodes[3].frequency,
      enterRssi3: nodes[3].enterRssi,
      exitRssi3: nodes[3].exitRssi,
      name3: nodes[3].pilotNameInput.value,
      freq4: nodes[4].frequency,
      enterRssi4: nodes[4].enterRssi,
      exitRssi4: nodes[4].exitRssi,
      name4: nodes[4].pilotNameInput.value,
      activeNodeCount: parseInt(commonElements.activeNodeCountSelect.value),
      ssid: commonElements.ssidInput.value,
      pwd: commonElements.pwdInput.value,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log("/config:", JSON.stringify(response));
      
      // Show success state
      saveButton.textContent = "Saved ✓";
      saveButton.style.backgroundColor = "#4CAF50";
      
      // Restore original state after 2 seconds
      setTimeout(() => {
        saveButton.textContent = originalText;
        saveButton.style.backgroundColor = originalColor;
        saveButton.disabled = false;
      }, 2000);
    })
    .catch((error) => {
      console.error("Save error:", error);
      
      // Show error state
      saveButton.textContent = "Error ✗";
      saveButton.style.backgroundColor = "#f44336";
      
      // Restore original state after 2 seconds
      setTimeout(() => {
        saveButton.textContent = originalText;
        saveButton.style.backgroundColor = originalColor;
        saveButton.disabled = false;
      }, 2000);
    });
}

// Frequency management
function populateFreqOutput(nodeId) {
  const node = nodes[nodeId];
  const band = node.bandSelect.options[node.bandSelect.selectedIndex].value;
  const chan = node.channelSelect.options[node.channelSelect.selectedIndex].value;
  node.frequency = freqLookup[node.bandSelect.selectedIndex][node.channelSelect.selectedIndex];
  node.freqOutput.textContent = band + chan + " " + node.frequency;
}

function setBandChannelIndex(freq, nodeId) {
  const node = nodes[nodeId];
  for (let i = 0; i < freqLookup.length; i++) {
    for (let j = 0; j < freqLookup[i].length; j++) {
      if (freqLookup[i][j] == freq) {
        node.bandSelect.selectedIndex = i;
        node.channelSelect.selectedIndex = j;
        populateFreqOutput(nodeId); // Update the frequency display
        return;
      }
    }
  }
}

// Common UI updates
function updateAnnouncerRate(obj, value) {
  announcerRate = parseFloat(value);
}

function updateMinLap(obj, value) {
  // Value is already displayed by the input field
}

function updateRaceStartDelay(obj, value) {
  raceStartDelay = parseFloat(value);
}

function updateAlarmThreshold(obj, value) {
  // Value is already displayed by the input field
}

// Audio functions
function beep(duration, frequency, type) {
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  oscillator.connect(context.destination);
  oscillator.start();
  setTimeout(function () {
    oscillator.stop();
  }, duration);
}

function queueSpeak(obj) {
  if (!audioEnabled) return;
  speakObjsQueue.push(obj);
}

async function enableAudioLoop() {
  audioEnabled = true;
  updateVoiceButtonState();
  while(audioEnabled) {
    if (speakObjsQueue.length > 0) {
      let isSpeakingFlag = $().articulate('isSpeaking');
      if (!isSpeakingFlag) {
        let obj = speakObjsQueue.shift();
        doSpeak(obj);
      }
    }
    await new Promise((r) => setTimeout(r, 100));
  }
}

function disableAudioLoop() {
  audioEnabled = false;
  updateVoiceButtonState();
}

function toggleVoice() {
  if (audioEnabled) {
    disableAudioLoop();
  } else {
    enableAudioLoop();
  }
}

function updateVoiceButtonState() {
  const toggleButton = document.getElementById("ToggleVoiceButton");
  if (toggleButton) {
    toggleButton.textContent = audioEnabled ? "Voice: ON" : "Voice: OFF";
    toggleButton.style.backgroundColor = audioEnabled ? "#4CAF50" : "#f44336";
  }
}

function generateAudio() {
  if (!audioEnabled) return;
  
  const pilotName = nodes[1].pilotNameInput.value;
  queueSpeak('<div>testing sound for pilot ' + pilotName + '</div>');
  for (let i = 1; i <= 3; i++) {
    queueSpeak('<div>' + i + '</div>')
  }
}

function doSpeak(obj) {
  $(obj).articulate("rate", announcerRate).articulate('speak');
}

// Lap management
function addLap(lapStr, nodeId = 1) {
  const node = nodes[nodeId];
  const pilotName = node.pilotNameInput.value;
  let last2lapStr = "";
  let last3lapStr = "";
  const newLap = parseFloat(lapStr);
  
  node.lapNo += 1;
  const table = node.lapTable;
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  
  cell1.innerHTML = node.lapNo;
  cell2.innerHTML = lapStr + "s";
  
  // Calculate 2-lap time for announcer (not displayed in table)
  if (node.lapTimes.length >= 2 && node.lapNo != 0) {
    last2lapStr = (newLap + node.lapTimes[node.lapTimes.length - 1]).toFixed(2);
  }
  
  // Calculate and display 3-lap time
  if (node.lapTimes.length >= 3 && node.lapNo != 0) {
    last3lapStr = (newLap + node.lapTimes[node.lapTimes.length - 2] + node.lapTimes[node.lapTimes.length - 1]).toFixed(2);
    cell3.innerHTML = last3lapStr + "s";
  }
  
  node.lapTimes.push(newLap);
  
  // Announce lap time
  const announcerType = commonElements.announcerSelect.options[commonElements.announcerSelect.selectedIndex].value;
  switch (announcerType) {
    case "beep":
      beep(100, 330, "square");
      break;
    case "1lap":
      if (node.lapNo == 0) {
        queueSpeak(`<p>Hole Shot ${lapStr}<p>`);
      } else {
        const lapNoStr = pilotName + " Lap " + node.lapNo + ", ";
        const text = "<p>" + lapNoStr + lapStr + "</p>";
        queueSpeak(text);
      }
      break;
    case "2lap":
      if (node.lapNo == 0) {
        queueSpeak(`<p>Hole Shot ${lapStr}<p>`);
      } else if (last2lapStr != "") {
        const text2 = "<p>" + pilotName + " 2 laps " + last2lapStr + "</p>";
        queueSpeak(text2);
      }
      break;
    case "3lap":
      if (node.lapNo == 0) {
        queueSpeak(`<p>Hole Shot ${lapStr}<p>`);
      } else if (last3lapStr != "") {
        const text3 = "<p>" + pilotName + " 3 laps " + last3lapStr + "</p>";
        queueSpeak(text3);
      }
      break;
    default:
      break;
  }
  
  // Update mobile table
  updateMobileLapTable();
}

function clearLaps() {
  const tableHeaderRowCount = 1;
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
  
  // Clear desktop tables
  for (let nodeId = 1; nodeId <= 4; nodeId++) {
    const node = nodes[nodeId];
    const rowCount = node.lapTable.rows.length;
    for (let i = tableHeaderRowCount; i < rowCount; i++) {
      node.lapTable.deleteRow(tableHeaderRowCount);
    }
    node.lapNo = -1;
    node.lapTimes = [];
  }
  
  // Clear mobile multi-node table
  const mobileLapTableBody = document.getElementById('mobileLapTableBody');
  if (mobileLapTableBody) {
    mobileLapTableBody.innerHTML = '';
  }
  
  // Clear mobile single-node table
  const singleNodeTable = document.getElementById('singleNodeLapTable');
  if (singleNodeTable) {
    const rowCount = singleNodeTable.rows.length;
    for (let i = tableHeaderRowCount; i < rowCount; i++) {
      singleNodeTable.deleteRow(tableHeaderRowCount);
    }
  }
}

// Add test lap for debugging
function addTestLap(nodeId) {
  const node = nodes[nodeId];
  const randomTime = (Math.random() * 20 + 10).toFixed(2); // Random time between 10-30 seconds
  
  // Add to desktop table (addLap expects lapStr first, then nodeId)
  addLap(randomTime, nodeId);
  
  // Update mobile table
  updateMobileLapTable();
}

// Update the mobile lap table with all laps
function updateMobileLapTable() {
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
  
  // For single node, use traditional table format
  if (activeNodeCount === 1) {
    updateSingleNodeTable();
    return;
  }
  
  // For multiple nodes, use compact format
  const mobileLapTableBody = document.getElementById('mobileLapTableBody');
  if (!mobileLapTableBody) return;
  
  // Find max lap count across all active nodes
  let maxLaps = 0;
  for (let nodeId = 1; nodeId <= activeNodeCount; nodeId++) {
    maxLaps = Math.max(maxLaps, nodes[nodeId].lapTimes.length);
  }
  
  // Clear and rebuild table
  mobileLapTableBody.innerHTML = '';
  
  // Add rows for each lap
  for (let lapIndex = 0; lapIndex < maxLaps; lapIndex++) {
    const row = mobileLapTableBody.insertRow();
    
    // Lap number cell (0 for first lap)
    const lapCell = row.insertCell();
    lapCell.textContent = lapIndex;
    
    // Node time cells (always create all 4, but hide inactive ones)
    for (let nodeId = 1; nodeId <= 4; nodeId++) {
      const timeCell = row.insertCell();
      
      // Hide columns for inactive nodes
      if (nodeId > activeNodeCount) {
        timeCell.style.display = 'none';
      }
      
      if (nodeId <= activeNodeCount && nodes[nodeId].lapTimes[lapIndex] !== undefined) {
        timeCell.textContent = nodes[nodeId].lapTimes[lapIndex].toFixed(2) + 's';
      } else {
        timeCell.textContent = '-';
      }
    }
  }
}

// Update single node table (traditional format)
function updateSingleNodeTable() {
  const singleNodeTable = document.getElementById('singleNodeLapTable');
  if (!singleNodeTable) return;
  
  const node = nodes[1];
  const tableHeaderRowCount = 1;
  
  // Clear existing rows (except header)
  const rowCount = singleNodeTable.rows.length;
  for (let i = tableHeaderRowCount; i < rowCount; i++) {
    singleNodeTable.deleteRow(tableHeaderRowCount);
  }
  
  // Add all laps
  for (let lapIndex = 0; lapIndex < node.lapTimes.length; lapIndex++) {
    const row = singleNodeTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    
    // Lap number (0 for first lap)
    cell1.innerHTML = lapIndex;
    cell2.innerHTML = node.lapTimes[lapIndex].toFixed(2) + "s";
    
    // Calculate 3-lap time
    if (lapIndex >= 3) {
      const last3lapTime = (node.lapTimes[lapIndex] + 
                           node.lapTimes[lapIndex - 1] + 
                           node.lapTimes[lapIndex - 2]).toFixed(2);
      cell3.innerHTML = last3lapTime + "s";
    }
  }
}

// Timer management
function startTimer(node = 0) {
  if (!timerInterval) {
    let millis = 0;
    let seconds = 0;
    let minutes = 0;
    timerInterval = setInterval(function () {
      millis += 1;

      if (millis == 100) {
        millis = 0;
        seconds++;

        if (seconds == 60) {
          seconds = 0;
          minutes++;

          if (minutes == 60) {
            minutes = 0;
          }
        }
      }
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      let ms = millis < 10 ? "0" + millis : millis;
      commonElements.timer.innerHTML = `${m}:${s}:${ms}s`;
    }, 10);
  }

  const body = node ? `node=${node}` : "";
  fetch("/timer/start?" + body, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log("/timer/start:", JSON.stringify(response)));
}

async function startRace(node = 0) {
  if (!node) {
    commonElements.startRaceButton.disabled = true;
    
    if (raceStartDelay > 0) {
      // Check if voice is enabled
      if (audioEnabled) {
        // Calculate time taken to say starting phrase
        const baseWordsPerMinute = 150;
        let baseWordsPerSecond = baseWordsPerMinute / 60;
        let wordsPerSecond = baseWordsPerSecond * announcerRate;
        
        // 3 words in "Arm your quad"
        let timeToSpeak1 = 3 / wordsPerSecond * 1000; 
        queueSpeak("<p>Arm your quad</p>");
        await new Promise((r) => setTimeout(r, timeToSpeak1));
        
        // 8 words in "Starting on the tone in [delay] seconds"
        let timeToSpeak2 = 8 / wordsPerSecond * 1000; 
        queueSpeak(`<p>Starting on the tone in ${raceStartDelay.toFixed(1)} seconds</p>`);
        await new Promise((r) => setTimeout(r, timeToSpeak2));
      }
      
      // Wait for configured delay
      await new Promise((r) => setTimeout(r, raceStartDelay * 1000));
      beep(1, 1, "square"); // needed for some reason to make sure we fire the first beep
      beep(500, 880, "square");
    }
    
    commonElements.stopRaceButton.disabled = false;
  }
  startTimer(node);
}

function stopRace(node = 0) {
  if (!node) {
    // Stop both nodes
    queueSpeak('<p>Race stopped</p>');
    clearInterval(timerInterval);
    timerInterval = null;
    commonElements.timer.innerHTML = "00:00:00s";
    commonElements.stopRaceButton.disabled = true;
    commonElements.startRaceButton.disabled = false;
    nodes[1].lapNo = -1;
    nodes[1].lapTimes = [];
    nodes[2].lapNo = -1;
    nodes[2].lapTimes = [];
  } else {
    // Stopping individual node - also stop timer if both nodes are now stopped
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      commonElements.timer.innerHTML = "00:00:00s";
    }
  }

  const body = node ? `node=${node}` : "";
  fetch("/timer/stop?" + body, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log("/timer/stop:", JSON.stringify(response)));
    
  if (node === 1) {
    nodes[1].lapNo = -1;
    nodes[1].lapTimes = [];
  } else if (node === 2) {
    nodes[2].lapNo = -1;
    nodes[2].lapTimes = [];
  }
}

// Event source for server-sent events
function setupEventSource() {
  if (!!window.EventSource) {
    const source = new EventSource("/events");

    source.addEventListener("open", function (e) {
      console.log("Events Connected");
    }, false);

    source.addEventListener("error", function (e) {
      if (e.target.readyState != EventSource.OPEN) {
        console.log("Events Disconnected");
      }
    }, false);

    source.addEventListener("rssi", function (e) {
      try {
        const data = JSON.parse(e.data);
        const node = nodes[data.node];
        if (node) {
          node.rssiBuffer.push(data.rssi);
          if (node.rssiBuffer.length > 10) {
            node.rssiBuffer.shift();
          }
          console.log("rssi node", data.node, ":", data.rssi, "buffer size", node.rssiBuffer.length);
        }
      } catch (error) {
        console.error("Error parsing RSSI:", error);
      }
    }, false);

    source.addEventListener("lap", function (e) {
      try {
        const data = JSON.parse(e.data);
        const lap = (parseFloat(data.time) / 1000).toFixed(2);
        console.log("lap node", data.node, "raw:", data.time, " formatted:", lap);
        // Use requestAnimationFrame to ensure immediate DOM update
        requestAnimationFrame(() => {
          addLap(lap, data.node);
        });
      } catch (error) {
        console.error("Error parsing lap:", error);
      }
    }, false);
  }
}


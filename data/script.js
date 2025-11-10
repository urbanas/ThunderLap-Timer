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
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    // Use saved theme from localStorage, or default to first option (ocean)
    const savedTheme = localStorage.getItem('selectedTheme') || themeSelect.options[0].value;
    themeSelect.value = savedTheme;
    changeTheme(savedTheme);
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
  
  commonElements.config.style.display = "block";
  commonElements.race.style.display = "none";
  commonElements.calib.style.display = "none";
  
  // Enable voice by default
  enableAudioLoop();
  
  // Restore debug mode state from localStorage (default to false)
  const savedDebugMode = localStorage.getItem('debugMode');
  if (savedDebugMode === 'true') {
    document.getElementById('debugMode').checked = true;
    toggleDebugMode(true);
  } else {
    // Explicitly set to false if not saved or saved as false
    document.getElementById('debugMode').checked = false;
    toggleDebugMode(false);
  }
  
  loadConfiguration();
  setupEventListeners();
  
  // Initialize normal calibration selector after commonElements is ready
  initializeNormalCalibrationSelector();
};

// Update visibility of nodes based on activeNodeCount
function updateActiveNodeCount(count) {
  const nodeCount = parseInt(count);
  console.log('updateActiveNodeCount called with count:', nodeCount);
  
  // Handle node cards visibility (new card layout)
  const allNodeCards = document.querySelectorAll('.node-card');
  console.log('Found node cards:', allNodeCards.length);
  
  allNodeCards.forEach((card, index) => {
    const nodeNum = index + 1;
    const shouldShow = nodeNum <= nodeCount;
    console.log(`Node ${nodeNum}: shouldShow=${shouldShow}, classList=${card.classList.toString()}`);
    
    // Use inline style with !important would require setProperty, so we'll just set it directly
    // and make sure it overrides the CSS
    card.style.setProperty('display', shouldShow ? 'block' : 'none', 'important');
  });
  
  // Get all elements with node classes (for race and calibration tabs)
  const node1Elements = document.querySelectorAll('.node-1:not(.node-card)');
  const node2Elements = document.querySelectorAll('.node-2:not(.node-card)');
  const node3Elements = document.querySelectorAll('.node-3:not(.node-card)');
  const node4Elements = document.querySelectorAll('.node-4:not(.node-card)');
  
  // Show/hide node 1 elements (always visible if at least 1 node)
  node1Elements.forEach(el => {
    if (nodeCount >= 1) {
      el.classList.add('visible');
      el.style.display = '';
    } else {
      el.classList.remove('visible');
      el.style.display = 'none';
    }
  });
  
  // Show/hide node 2 elements
  node2Elements.forEach(el => {
    if (nodeCount >= 2) {
      el.classList.add('visible');
      el.style.display = '';
    } else {
      el.classList.remove('visible');
      el.style.display = 'none';
    }
  });
  
  // Show/hide node 3 elements
  node3Elements.forEach(el => {
    if (nodeCount >= 3) {
      el.classList.add('visible');
      el.style.display = '';
    } else {
      el.classList.remove('visible');
      el.style.display = 'none';
    }
  });
  
  // Show/hide node 4 elements
  node4Elements.forEach(el => {
    if (nodeCount >= 4) {
      el.classList.add('visible');
      el.style.display = '';
    } else {
      el.classList.remove('visible');
      el.style.display = 'none';
    }
  });
  
  // Node 2 in race table
  const node2RaceHeader = document.querySelector('.race-layout-table .pilot-header:nth-child(2)');
  const node2RaceCell = document.querySelector('.race-layout-table .lap-table-cell:nth-child(2)');
  if (node2RaceHeader) node2RaceHeader.style.display = nodeCount >= 2 ? '' : 'none';
  if (node2RaceCell) node2RaceCell.style.display = nodeCount >= 2 ? '' : 'none';
  
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
  
  // Update hopping frequency fields if enabled
  if (frequencyHoppingEnabled) {
    updateHoppingFrequencyFields();
  }
  
  // Update normal calibration selector
  updateNormalCalibrationSelector();
  
  // Initialize the unified race table
  initializeUnifiedRaceTable();
  
  // Update debug buttons if debug mode is active
  if (debugMode) {
    updateDebugButtons();
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
      });
      
      // Configure Node 2
      configureNode(2, {
        freq: config.freq2,
        enterRssi: config.enterRssi2,
        exitRssi: config.exitRssi2,
      });
      
      // Configure Node 3
      configureNode(3, {
        freq: config.freq3,
        enterRssi: config.enterRssi3,
        exitRssi: config.exitRssi3,
      });
      
      // Configure Node 4
      configureNode(4, {
        freq: config.freq4,
        enterRssi: config.enterRssi4,
        exitRssi: config.exitRssi4,
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
      console.log('Raw config.activeNodeCount from ESP32:', config.activeNodeCount, 'type:', typeof config.activeNodeCount);
      const activeNodeCount = config.activeNodeCount ?? 1;  // Default to 1 if undefined/null
      console.log('Processed activeNodeCount:', activeNodeCount);
      console.log('Setting dropdown value to:', activeNodeCount);
      commonElements.activeNodeCountSelect.value = activeNodeCount;
      console.log('Dropdown value after setting:', commonElements.activeNodeCountSelect.value);
      updateActiveNodeCount(activeNodeCount);
      
      // Load frequency hopping configuration
      if (config.frequencyHoppingEnabled !== undefined) {
        frequencyHoppingEnabled = config.frequencyHoppingEnabled;
        document.getElementById('frequencyHopping').checked = frequencyHoppingEnabled;
        
        if (frequencyHoppingEnabled) {
          document.getElementById('hoppingConfig').style.display = 'flex';
        }
      }
      
      if (config.hoppingFreqCount !== undefined) {
        hoppingFreqCount = config.hoppingFreqCount;
        document.getElementById('hoppingFreqCount').value = hoppingFreqCount;
      }
      
      if (config.hoppingInterval !== undefined) {
        hoppingInterval = config.hoppingInterval;
        document.getElementById('hoppingInterval').value = hoppingInterval;
      }
      
      // Load hopping frequencies and update UI
      if (config.hoppingFrequencies && frequencyHoppingEnabled) {
        // Update hopping fields to display loaded frequencies
        updateHoppingFrequencyFields();
        hideOriginalFrequencyFields();
        
        // Set the loaded frequency values (pilot numbers are auto-generated as P1, P2, P3, P4)
        for (let nodeId = 0; nodeId < 4; nodeId++) {
          if (config.hoppingFrequencies[nodeId]) {
            for (let freqIdx = 0; freqIdx < config.hoppingFrequencies[nodeId].length; freqIdx++) {
              const freq = config.hoppingFrequencies[nodeId][freqIdx];
              const bandSelect = document.getElementById(`hopBand${nodeId + 1}_${freqIdx + 1}`);
              const channelSelect = document.getElementById(`hopChannel${nodeId + 1}_${freqIdx + 1}`);
              const enterRssiInput = document.getElementById(`hopEnterRSSI${nodeId + 1}_${freqIdx + 1}`);
              const exitRssiInput = document.getElementById(`hopExitRSSI${nodeId + 1}_${freqIdx + 1}`);
              
              if (bandSelect && channelSelect && freq) {
                // Find band and channel from frequency
                const result = findBandChannelFromFreq(freq);
                if (result) {
                  bandSelect.value = result.band;
                  channelSelect.value = result.channel;
                  updateHoppingFreqDisplay(nodeId + 1, freqIdx + 1);
                }
              }
              
              // Load RSSI values
              if (enterRssiInput && config.hoppingEnterRssi && config.hoppingEnterRssi[nodeId] && config.hoppingEnterRssi[nodeId][freqIdx] !== undefined) {
                enterRssiInput.value = config.hoppingEnterRssi[nodeId][freqIdx];
              }
              if (exitRssiInput && config.hoppingExitRssi && config.hoppingExitRssi[nodeId] && config.hoppingExitRssi[nodeId][freqIdx] !== undefined) {
                exitRssiInput.value = config.hoppingExitRssi[nodeId][freqIdx];
              }
            }
          }
        }
      } else {
        // Ensure original fields are visible when hopping is disabled
        showOriginalFrequencyFields();
      }
      
      // Load theme from ESP32 (overrides localStorage)
      if (config.theme) {
        console.log('Loading theme from ESP32:', config.theme);
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
          themeSelect.value = config.theme;
          changeTheme(config.theme);
          // Also save to localStorage for consistency
          localStorage.setItem('selectedTheme', config.theme);
        }
      }
      
      // Initialize the unified race table
      initializeUnifiedRaceTable();
      
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
  
  if (!node) {
    console.warn(`Node ${nodeId} not initialized, skipping configuration`);
    return;
  }
  
  setBandChannelIndex(config.freq, nodeId);
  
  if (node.enterRssiInput) {
    node.enterRssiInput.value = config.enterRssi;
    updateEnterRssiForNode(nodeId, config.enterRssi);
  }
  
  if (node.exitRssiInput) {
    node.exitRssiInput.value = config.exitRssi;
    updateExitRssiForNode(nodeId, config.exitRssi);
  }
  
  populateFreqOutput(nodeId);
}

// Setup all event listeners
function setupEventListeners() {
  // Node 1 event listeners
  nodes[1].bandSelect.addEventListener("change", () => populateFreqOutput(1));
  nodes[1].channelSelect.addEventListener("change", () => populateFreqOutput(1));
  
  // Node 2 event listeners
  nodes[2].bandSelect.addEventListener("change", () => populateFreqOutput(2));
  nodes[2].channelSelect.addEventListener("change", () => populateFreqOutput(2));
  
  // Node 3 event listeners
  nodes[3].bandSelect.addEventListener("change", () => populateFreqOutput(3));
  nodes[3].channelSelect.addEventListener("change", () => populateFreqOutput(3));
  
  // Node 4 event listeners
  nodes[4].bandSelect.addEventListener("change", () => populateFreqOutput(4));
  nodes[4].channelSelect.addEventListener("change", () => populateFreqOutput(4));
  
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

  // Reload configuration when switching to Config or Calibration tabs
  // This ensures RSSI values and other settings are always in sync with ESP32
  if (tabName === "config" || tabName === "calib") {
    loadConfiguration();
  }

  // Handle RSSI streaming for calibration tab
  if (tabName === "calib") {
    // Initialize unified calibration
    initializeCalibrationTab();
    
    // Update debug calibration table if debug mode is enabled
    if (debugMode) {
      updateDebugCalibrationTable();
    }
    
    // Start RSSI streaming
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
  } else {
    // When leaving calibration tab
    if (rssiSending) {
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
    
    // Resume hopping if calibration mode was active
    if (hoppingCalibrationMode.active && frequencyHoppingEnabled) {
      // Save current pilot's RSSI values
      if (hoppingCalibrationMode.currentPilot) {
        savePilotRSSIFromCalibration(
          hoppingCalibrationMode.currentPilot.nodeId,
          hoppingCalibrationMode.currentPilot.freqIdx
        );
      }
      
      // Resume hopping
      fetch('/resumeHopping')
        .then(response => response.json())
        .then(data => console.log('Hopping resumed'))
        .catch(err => console.error('Error resuming hopping:', err));
      
      // Reset calibration mode
      hoppingCalibrationMode.active = false;
      hoppingCalibrationMode.currentPilot = null;
      document.getElementById('hoppingCalibrationControls').style.display = 'none';
    }
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
  
  // Update debug calibration table if debug mode is active
  if (debugMode) {
    updateDebugCalibrationTable();
  }
  
  // In hopping mode, also save to current pilot's hopping config
  // In hopping mode, each node's sliders are used to calibrate that node's pilots
  if (frequencyHoppingEnabled && hoppingCalibrationMode.active && hoppingCalibrationMode.currentPilot) {
    // Check if we're updating the sliders for the node that the current pilot belongs to
    if (nodeId === hoppingCalibrationMode.currentPilot.nodeId) {
      savePilotRSSIFromCalibration(
        hoppingCalibrationMode.currentPilot.nodeId,
        hoppingCalibrationMode.currentPilot.freqIdx
      );
    }
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
  
  // Update debug calibration table if debug mode is active
  if (debugMode) {
    updateDebugCalibrationTable();
  }
  
  // In hopping mode, also save to current pilot's hopping config
  // In hopping mode, each node's sliders are used to calibrate that node's pilots
  if (frequencyHoppingEnabled && hoppingCalibrationMode.active && hoppingCalibrationMode.currentPilot) {
    // Check if we're updating the sliders for the node that the current pilot belongs to
    if (nodeId === hoppingCalibrationMode.currentPilot.nodeId) {
      savePilotRSSIFromCalibration(
        hoppingCalibrationMode.currentPilot.nodeId,
        hoppingCalibrationMode.currentPilot.freqIdx
      );
    }
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
  
  console.log('=== SAVING CONFIG ===');
  console.log('Active node count from dropdown:', commonElements.activeNodeCountSelect.value);
  console.log('Dropdown element:', commonElements.activeNodeCountSelect);
  
  // Collect hopping frequencies if enabled (pilot numbers are dynamic based on frequency count)
  const hoppingFrequencies = [];
  const hoppingEnterRssi = [];
  const hoppingExitRssi = [];
  
  if (frequencyHoppingEnabled) {
    for (let nodeId = 1; nodeId <= 4; nodeId++) {
      const nodeFreqs = [];
      const nodeEnterRssi = [];
      const nodeExitRssi = [];
      
      for (let freqIdx = 1; freqIdx <= hoppingFreqCount; freqIdx++) {
        const bandSelect = document.getElementById(`hopBand${nodeId}_${freqIdx}`);
        const channelSelect = document.getElementById(`hopChannel${nodeId}_${freqIdx}`);
        const enterRssiInput = document.getElementById(`hopEnterRSSI${nodeId}_${freqIdx}`);
        const exitRssiInput = document.getElementById(`hopExitRSSI${nodeId}_${freqIdx}`);
        
        if (bandSelect && channelSelect) {
          const bandIndex = ['A', 'B', 'E', 'F', 'R', 'L'].indexOf(bandSelect.value);
          const channelIndex = parseInt(channelSelect.value) - 1;
          const freq = freqLookup[bandIndex][channelIndex];
          nodeFreqs.push(freq);
        } else {
          nodeFreqs.push(5740); // Default
        }
        
        // Collect RSSI values
        nodeEnterRssi.push(enterRssiInput ? parseInt(enterRssiInput.value) : 120);
        nodeExitRssi.push(exitRssiInput ? parseInt(exitRssiInput.value) : 100);
      }
      
      // Pad with defaults if needed (always pad to 4 for storage)
      while (nodeFreqs.length < 4) {
        nodeFreqs.push(5740);
        nodeEnterRssi.push(120);
        nodeExitRssi.push(100);
      }
      
      hoppingFrequencies.push(nodeFreqs);
      hoppingEnterRssi.push(nodeEnterRssi);
      hoppingExitRssi.push(nodeExitRssi);
    }
  } else {
    // Fill with defaults when hopping is disabled
    for (let i = 0; i < 4; i++) {
      hoppingFrequencies.push([5740, 5740, 5740, 5740]);
      hoppingEnterRssi.push([120, 120, 120, 120]);
      hoppingExitRssi.push([100, 100, 100, 100]);
    }
  }
  
  const configPayload = {
    freq: nodes[1].frequency,
    minLap: parseInt(commonElements.minLapInput.value * 10),
    raceStartDelay: parseInt(raceStartDelay * 10),
    alarm: parseInt(commonElements.alarmThreshold.value * 10),
    anType: commonElements.announcerSelect.selectedIndex,
    anRate: parseInt(announcerRate * 10),
    enterRssi: nodes[1].enterRssi,
    exitRssi: nodes[1].exitRssi,
    freq2: nodes[2].frequency,
    enterRssi2: nodes[2].enterRssi,
    exitRssi2: nodes[2].exitRssi,
    freq3: nodes[3].frequency,
    enterRssi3: nodes[3].enterRssi,
    exitRssi3: nodes[3].exitRssi,
    freq4: nodes[4].frequency,
    enterRssi4: nodes[4].enterRssi,
    exitRssi4: nodes[4].exitRssi,
    activeNodeCount: parseInt(commonElements.activeNodeCountSelect.value),
    frequencyHoppingEnabled: frequencyHoppingEnabled,
    hoppingFreqCount: hoppingFreqCount,
    hoppingInterval: hoppingInterval,
    hoppingFrequencies: hoppingFrequencies,
    hoppingEnterRssi: hoppingEnterRssi,
    hoppingExitRssi: hoppingExitRssi,
    ssid: commonElements.ssidInput.value,
    pwd: commonElements.pwdInput.value,
    theme: localStorage.getItem('selectedTheme') || 'ocean',
  };
  
  console.log('Config payload being sent:', configPayload);
  
  fetch("/config", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(configPayload),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("/config response:", JSON.stringify(data));
      
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
  
  queueSpeak('<div>testing sound</div>');
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
  const pilotLabel = frequencyHoppingEnabled ? `P${nodeId}` : `Node ${nodeId}`;
  let last2lapStr = "";
  let last3lapStr = "";
  const newLap = parseFloat(lapStr);
  
  node.lapNo += 1;
  node.lapTimes.push(newLap);
  
  // Calculate 2-lap time for announcer
  if (node.lapTimes.length >= 2 && node.lapNo != 0) {
    last2lapStr = (newLap + node.lapTimes[node.lapTimes.length - 2]).toFixed(2);
  }
  
  // Calculate 3-lap time (only when we have 4 total laps: lap 0, 1, 2, 3)
  // 3-lap time = lap1 + lap2 + lap3 (excluding lap 0)
  if (node.lapTimes.length >= 4 && node.lapNo != 0) {
    last3lapStr = (newLap + node.lapTimes[node.lapTimes.length - 2] + node.lapTimes[node.lapTimes.length - 3]).toFixed(2);
  }
  
  // Determine pilot ID based on node and frequency hopping
  let pilotId = nodeId;
  if (frequencyHoppingEnabled) {
    // In hopping mode, need to determine which frequency/pilot this is
    // This will be handled by the backend sending the correct pilot ID
    // For now, use nodeId as fallback
    pilotId = nodeId;
  }
  
  // Add to unified table
  addLapToUnifiedTable(pilotId, lapStr, last3lapStr);
  
  // Announce lap time
  const announcerType = commonElements.announcerSelect.options[commonElements.announcerSelect.selectedIndex].value;
  
  // Calculate total pilots for single pilot detection
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value) || 1;
  const totalPilots = frequencyHoppingEnabled ? activeNodeCount * hoppingFreqCount : activeNodeCount;
  const isSinglePilot = totalPilots === 1;
  
  switch (announcerType) {
    case "beep":
      beep(100, 330, "square");
      break;
    case "1lap":
      if (node.lapNo == 0) {
        queueSpeak(`<p>Hole Shot ${lapStr}<p>`);
      } else {
        // For single pilot: just announce lap time
        // For multiple pilots: announce pilot, lap number, and time
        const text = isSinglePilot 
          ? `<p>${lapStr}</p>`
          : `<p>${pilotLabel} Lap ${node.lapNo}, ${lapStr}</p>`;
        queueSpeak(text);
      }
      break;
    case "2lap":
      if (node.lapNo == 0) {
        queueSpeak(`<p>Hole Shot ${lapStr}<p>`);
      } else if (last2lapStr != "") {
        // For single pilot: just announce 2-lap time
        // For multiple pilots: announce pilot and 2-lap time
        const text2 = isSinglePilot
          ? `<p>2 laps ${last2lapStr}</p>`
          : `<p>${pilotLabel} 2 laps ${last2lapStr}</p>`;
        queueSpeak(text2);
      }
      break;
    case "3lap":
      if (node.lapNo == 0) {
        queueSpeak(`<p>Hole Shot ${lapStr}<p>`);
      } else if (last3lapStr != "") {
        // For single pilot: just announce 3-lap time
        // For multiple pilots: announce pilot and 3-lap time
        const text3 = isSinglePilot
          ? `<p>3 laps ${last3lapStr}</p>`
          : `<p>${pilotLabel} 3 laps ${last3lapStr}</p>`;
        queueSpeak(text3);
      }
      break;
    default:
      break;
  }
}

// Add lap to the unified race table
function addLapToUnifiedTable(pilotId, lapTime, threeLapTime) {
  const tableBody = document.getElementById('unifiedLapTableBody');
  if (!tableBody) return;
  
  // Initialize lap times storage if needed
  if (!window.lapTimes) {
    window.lapTimes = {};
  }
  if (!window.lapTimes[pilotId]) {
    window.lapTimes[pilotId] = [];
  }
  
  // Store the lap time
  window.lapTimes[pilotId].push(parseFloat(lapTime));
  
  // Calculate total pilots
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value) || 2;
  const totalPilots = frequencyHoppingEnabled 
    ? activeNodeCount * hoppingFreqCount 
    : activeNodeCount;
  
  // Find or create the row for this lap number
  const lapNumber = window.lapTimes[pilotId].length - 1; // 0-indexed
  let row = null;
  
  // Check if row already exists for this lap number
  for (let i = 0; i < tableBody.rows.length; i++) {
    if (parseInt(tableBody.rows[i].cells[0].textContent) === lapNumber) {
      row = tableBody.rows[i];
      break;
    }
  }
  
  // Create new row if it doesn't exist
  if (!row) {
    row = tableBody.insertRow(-1);
    
    // Lap number cell
    const lapCell = row.insertCell(0);
    lapCell.textContent = lapNumber;
    
    // Create cells for all pilots (time + 3-lap for each)
    for (let i = 1; i <= totalPilots; i++) {
      const timeCell = row.insertCell(-1);
      timeCell.textContent = '-';
      const threeLapCell = row.insertCell(-1);
      threeLapCell.textContent = '-';
    }
  }
  
  // Update the cells for this pilot
  // Column structure: Lap (0) | P1 time (1) | P1 3-lap (2) | P2 time (3) | P2 3-lap (4) | ...
  // For pilot N: time at column (N-1)*2 + 1, 3-lap at (N-1)*2 + 2
  const timeCellIndex = (pilotId - 1) * 2 + 1;
  const threeLapCellIndex = (pilotId - 1) * 2 + 2;
  
  console.log('Adding lap for pilot', pilotId, 'to cells', timeCellIndex, threeLapCellIndex);
  
  if (row.cells[timeCellIndex]) {
    row.cells[timeCellIndex].textContent = lapTime + 's';
  }
  
  // Calculate and display 3-lap time if we have at least 4 laps (lap 0, 1, 2, 3)
  // 3-lap time = lap1 + lap2 + lap3 (excluding lap 0 which starts the race)
  if (window.lapTimes[pilotId].length >= 4 && lapNumber > 0) {
    const times = window.lapTimes[pilotId];
    // Sum the last 3 laps (excluding lap 0)
    const sum = times[times.length - 1] + times[times.length - 2] + times[times.length - 3];
    if (row.cells[threeLapCellIndex]) {
      row.cells[threeLapCellIndex].textContent = sum.toFixed(2) + 's';
    }
  } else {
    if (row.cells[threeLapCellIndex]) {
      row.cells[threeLapCellIndex].textContent = '-';
    }
  }
}

function clearLaps() {
  // Clear debug mode lap times storage
  if (window.lapTimes) {
    window.lapTimes = {};
  }
  
  // Clear unified race table
  const unifiedTableBody = document.getElementById('unifiedLapTableBody');
  if (unifiedTableBody) {
    unifiedTableBody.innerHTML = '';
  }
  
  // Clear node lap data (for backend compatibility)
  for (let nodeId = 1; nodeId <= 4; nodeId++) {
    const node = nodes[nodeId];
    if (node) {
      node.lapNo = -1;
      node.lapTimes = [];
    }
  }
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

// Frequency Hopping Functions
let frequencyHoppingEnabled = false;
let hoppingFreqCount = 4;
let hoppingInterval = 100; // milliseconds
let debugMode = false;

// Hopping Calibration Mode
let hoppingCalibrationMode = {
  active: false,
  currentPilotIndex: 0,
  totalPilots: 0,
  pilots: [] // Array of {nodeId, freqIdx, frequency, pilotNumber}
};

// Debug Mode Functions
function toggleDebugMode(enabled) {
  debugMode = enabled;
  localStorage.setItem('debugMode', enabled);
  
  // Show/hide debug lap buttons on race tab
  const debugLapButtons = document.getElementById('debugLapButtons');
  if (debugLapButtons) {
    debugLapButtons.style.display = enabled ? 'block' : 'none';
    if (enabled) {
      updateDebugButtons();
    }
  }
  
  // Show/hide node numbers in race tab headers (only in normal mode, not hopping)
  const nodeDebugInfos = document.querySelectorAll('.node-debug-info');
  nodeDebugInfos.forEach(el => {
    el.style.display = (enabled && !frequencyHoppingEnabled) ? 'inline' : 'none';
  });
  
  // Show/hide frequency displays on calibration tab
  for (let i = 1; i <= 4; i++) {
    const debugFreq = document.getElementById(`debugFreq${i}`);
    if (debugFreq) {
      debugFreq.style.display = enabled ? 'inline-block' : 'none';
    }
  }
  
  // Show/hide hopping interval config
  const hoppingIntervalConfig = document.getElementById('hoppingIntervalConfig');
  if (hoppingIntervalConfig && frequencyHoppingEnabled) {
    hoppingIntervalConfig.style.display = enabled ? 'flex' : 'none';
  }
  
  // Show/hide debug calibration table
  const debugCalibTable = document.getElementById('debugCalibrationTable');
  if (debugCalibTable) {
    if (enabled) {
      debugCalibTable.style.display = 'block';
      updateDebugCalibrationTable();
    } else {
      debugCalibTable.style.display = 'none';
    }
  }
  
  // Start/stop frequency polling if debug mode is on
  if (enabled) {
    startFrequencyPolling();
  } else {
    stopFrequencyPolling();
  }
}

// Update the debug calibration values table
function updateDebugCalibrationTable() {
  const tbody = document.getElementById('calibValuesTableBody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
  
  if (frequencyHoppingEnabled) {
    // Hopping mode: show all pilots for each node
    for (let nodeId = 1; nodeId <= activeNodeCount; nodeId++) {
      for (let freqIdx = 1; freqIdx <= hoppingFreqCount; freqIdx++) {
        const pilotNumber = (nodeId - 1) * hoppingFreqCount + freqIdx;
      
      // Get values from inputs
      const bandSelect = document.getElementById(`hopBand${nodeId}_${freqIdx}`);
      const channelSelect = document.getElementById(`hopChannel${nodeId}_${freqIdx}`);
      const freqDisplay = document.getElementById(`hopFreq${nodeId}_${freqIdx}`);
      const enterInput = document.getElementById(`hopEnterRSSI${nodeId}_${freqIdx}`);
      const exitInput = document.getElementById(`hopExitRSSI${nodeId}_${freqIdx}`);
      
      if (!bandSelect || !channelSelect || !freqDisplay || !enterInput || !exitInput) continue;
      
      const band = bandSelect.value;
      const channel = channelSelect.value;
      const frequency = freqDisplay.textContent;
      const enterRSSI = parseInt(enterInput.value);
      const exitRSSI = parseInt(exitInput.value);
      const gap = enterRSSI - exitRSSI;
      
      // Create row
      const row = document.createElement('tr');
      row.style.borderBottom = '1px solid var(--border-color)';
      
      // Highlight row if gap is too small (< 10) or too large (> 50)
      if (gap < 10) {
        row.style.background = 'rgba(244, 67, 54, 0.1)'; // Red tint
      } else if (gap > 50) {
        row.style.background = 'rgba(255, 193, 7, 0.1)'; // Yellow tint
      }
      
      // Create cells
      const nodeCell = document.createElement('td');
      nodeCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color); font-weight: bold;';
      nodeCell.textContent = `Node ${nodeId}`;
      
      const pilotCell = document.createElement('td');
      pilotCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color); color: var(--primary-color); font-weight: bold;';
      pilotCell.textContent = `P${pilotNumber}`;
      
      const bandCell = document.createElement('td');
      bandCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color);';
      bandCell.textContent = band;
      
      const channelCell = document.createElement('td');
      channelCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color);';
      channelCell.textContent = channel;
      
      const freqCell = document.createElement('td');
      freqCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color); color: var(--accent-color); font-weight: bold;';
      freqCell.textContent = frequency;
      
      // Editable Enter RSSI cell
      const enterCell = document.createElement('td');
      enterCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color);';
      const enterInputField = document.createElement('input');
      enterInputField.type = 'number';
      enterInputField.value = enterRSSI;
      enterInputField.min = 0;
      enterInputField.max = 255;
      enterInputField.style.cssText = 'width: 60px; padding: 4px 8px; background: var(--bg-main); color: var(--success-color); border: 1px solid var(--border-color); border-radius: 4px; font-weight: bold; text-align: center;';
      enterInputField.onchange = () => {
        const newValue = parseInt(enterInputField.value);
        if (newValue >= 0 && newValue <= 255) {
          enterInput.value = newValue;
          
          // If this is the currently selected pilot in hopping calibration, update sliders too
          if (hoppingCalibrationMode.active && hoppingCalibrationMode.currentPilot &&
              hoppingCalibrationMode.currentPilot.nodeId === nodeId &&
              hoppingCalibrationMode.currentPilot.freqIdx === freqIdx) {
            const calibEnterInput = document.getElementById('enterInput');
            const calibEnterSlider = document.getElementById('enter');
            if (calibEnterInput && calibEnterSlider) {
              calibEnterInput.value = newValue;
              calibEnterSlider.value = newValue;
              updateEnterRssiForNode(1, newValue);
            }
          }
          
          updateDebugCalibrationTable(); // Refresh to update gap
        }
      };
      enterCell.appendChild(enterInputField);
      
      // Editable Exit RSSI cell
      const exitCell = document.createElement('td');
      exitCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color);';
      const exitInputField = document.createElement('input');
      exitInputField.type = 'number';
      exitInputField.value = exitRSSI;
      exitInputField.min = 0;
      exitInputField.max = 255;
      exitInputField.style.cssText = 'width: 60px; padding: 4px 8px; background: var(--bg-main); color: var(--error-color); border: 1px solid var(--border-color); border-radius: 4px; font-weight: bold; text-align: center;';
      exitInputField.onchange = () => {
        const newValue = parseInt(exitInputField.value);
        if (newValue >= 0 && newValue <= 255) {
          exitInput.value = newValue;
          
          // If this is the currently selected pilot in hopping calibration, update sliders too
          if (hoppingCalibrationMode.active && hoppingCalibrationMode.currentPilot &&
              hoppingCalibrationMode.currentPilot.nodeId === nodeId &&
              hoppingCalibrationMode.currentPilot.freqIdx === freqIdx) {
            const calibExitInput = document.getElementById('exitInput');
            const calibExitSlider = document.getElementById('exit');
            if (calibExitInput && calibExitSlider) {
              calibExitInput.value = newValue;
              calibExitSlider.value = newValue;
              updateExitRssiForNode(1, newValue);
            }
          }
          
          updateDebugCalibrationTable(); // Refresh to update gap
        }
      };
      exitCell.appendChild(exitInputField);
      
      // Gap cell
      const gapCell = document.createElement('td');
      gapCell.style.cssText = `padding: 10px; border: 1px solid var(--border-color); font-weight: bold; ${gap < 10 ? 'color: var(--error-color);' : gap > 50 ? 'color: var(--warning-color);' : 'color: var(--success-color);'}`;
      gapCell.textContent = gap;
      
      // Append all cells
      row.appendChild(nodeCell);
      row.appendChild(pilotCell);
      row.appendChild(bandCell);
      row.appendChild(channelCell);
      row.appendChild(freqCell);
      row.appendChild(enterCell);
      row.appendChild(exitCell);
      row.appendChild(gapCell);
      
      tbody.appendChild(row);
      }
    }
  } else {
    // Normal mode: show one row per node
    for (let nodeId = 1; nodeId <= activeNodeCount; nodeId++) {
      const node = nodes[nodeId];
      if (!node) continue;
      
      const band = node.bandSelect.value;
      const channel = node.channelSelect.value;
      const frequency = node.freqOutput.textContent;
      const enterRSSI = parseInt(node.enterRssiInput.value);
      const exitRSSI = parseInt(node.exitRssiInput.value);
      const gap = enterRSSI - exitRSSI;
      
      // Create row
      const row = document.createElement('tr');
      row.style.borderBottom = '1px solid var(--border-color)';
      
      // Highlight row if gap is too small (< 10) or too large (> 50)
      if (gap < 10) {
        row.style.background = 'rgba(244, 67, 54, 0.1)'; // Red tint
      } else if (gap > 50) {
        row.style.background = 'rgba(255, 193, 7, 0.1)'; // Yellow tint
      }
      
      // Create cells
      const nodeCell = document.createElement('td');
      nodeCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color); font-weight: bold;';
      nodeCell.textContent = `Node ${nodeId}`;
      
      const pilotCell = document.createElement('td');
      pilotCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color); color: var(--primary-color); font-weight: bold;';
      pilotCell.textContent = `P${nodeId}`;
      
      const bandCell = document.createElement('td');
      bandCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color);';
      bandCell.textContent = band;
      
      const channelCell = document.createElement('td');
      channelCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color);';
      channelCell.textContent = channel;
      
      const freqCell = document.createElement('td');
      freqCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color); color: var(--accent-color); font-weight: bold;';
      freqCell.textContent = frequency;
      
      // Editable Enter RSSI cell
      const enterCell = document.createElement('td');
      enterCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color);';
      const enterInputField = document.createElement('input');
      enterInputField.type = 'number';
      enterInputField.value = enterRSSI;
      enterInputField.min = 0;
      enterInputField.max = 255;
      enterInputField.style.cssText = 'width: 60px; padding: 4px 8px; background: var(--bg-main); color: var(--success-color); border: 1px solid var(--border-color); border-radius: 4px; font-weight: bold; text-align: center;';
      enterInputField.onchange = () => {
        const newValue = parseInt(enterInputField.value);
        if (newValue >= 0 && newValue <= 255) {
          node.enterRssiInput.value = newValue;
          node.enterRssiSlider.value = newValue;
          updateEnterRssiForNode(nodeId, newValue);
          updateDebugCalibrationTable(); // Refresh to update gap
        }
      };
      enterCell.appendChild(enterInputField);
      
      // Editable Exit RSSI cell
      const exitCell = document.createElement('td');
      exitCell.style.cssText = 'padding: 10px; border: 1px solid var(--border-color);';
      const exitInputField = document.createElement('input');
      exitInputField.type = 'number';
      exitInputField.value = exitRSSI;
      exitInputField.min = 0;
      exitInputField.max = 255;
      exitInputField.style.cssText = 'width: 60px; padding: 4px 8px; background: var(--bg-main); color: var(--error-color); border: 1px solid var(--border-color); border-radius: 4px; font-weight: bold; text-align: center;';
      exitInputField.onchange = () => {
        const newValue = parseInt(exitInputField.value);
        if (newValue >= 0 && newValue <= 255) {
          node.exitRssiInput.value = newValue;
          node.exitRssiSlider.value = newValue;
          updateExitRssiForNode(nodeId, newValue);
          updateDebugCalibrationTable(); // Refresh to update gap
        }
      };
      exitCell.appendChild(exitInputField);
      
      // Gap cell
      const gapCell = document.createElement('td');
      gapCell.style.cssText = `padding: 10px; border: 1px solid var(--border-color); font-weight: bold; ${gap < 10 ? 'color: var(--error-color);' : gap > 50 ? 'color: var(--warning-color);' : 'color: var(--success-color);'}`;
      gapCell.textContent = gap;
      
      // Append all cells
      row.appendChild(nodeCell);
      row.appendChild(pilotCell);
      row.appendChild(bandCell);
      row.appendChild(channelCell);
      row.appendChild(freqCell);
      row.appendChild(enterCell);
      row.appendChild(exitCell);
      row.appendChild(gapCell);
      
      tbody.appendChild(row);
    }
  }
}

function updateDebugButtons() {
  const container = document.getElementById('debugButtonContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
  
  if (frequencyHoppingEnabled) {
    // In hopping mode, create buttons for each pilot (P1, P2, P3, etc.)
    const totalPilots = activeNodeCount * hoppingFreqCount;
    for (let i = 1; i <= totalPilots; i++) {
      const button = document.createElement('button');
      button.className = 'debug-btn';
      button.textContent = `P${i}`;
      button.onclick = () => simulateLap(i);
      container.appendChild(button);
    }
  } else {
    // In normal mode, also use pilot numbers (P1, P2, P3, P4)
    for (let i = 1; i <= activeNodeCount; i++) {
      const button = document.createElement('button');
      button.className = 'debug-btn';
      button.textContent = `P${i}`;
      button.onclick = () => simulateLap(i);
      container.appendChild(button);
    }
  }
}

let frequencyPollingInterval = null;

function startFrequencyPolling() {
  if (frequencyPollingInterval) return;
  
  // Poll current frequencies every 100ms when in debug mode
  frequencyPollingInterval = setInterval(() => {
    fetch('/getCurrentFrequencies')
      .then(response => response.json())
      .then(data => {
        for (let i = 1; i <= 4; i++) {
          const freqSpan = document.getElementById(`currentFreq${i}`);
          if (freqSpan && data[`node${i}`]) {
            freqSpan.textContent = data[`node${i}`];
          }
        }
      })
      .catch(err => console.error('Error fetching frequencies:', err));
  }, 100);
}

function stopFrequencyPolling() {
  if (frequencyPollingInterval) {
    clearInterval(frequencyPollingInterval);
    frequencyPollingInterval = null;
  }
}

function simulateLap(pilotOrNodeId) {
  // Generate a random lap time between 5 and 15 seconds
  const randomTime = 5000 + Math.floor(Math.random() * 10000);
  
  // Initialize lap storage if needed
  if (!window.lapTimes) {
    window.lapTimes = {};
  }
  
  const id = `pilot${pilotOrNodeId}`;
  if (!window.lapTimes[id]) {
    window.lapTimes[id] = [];
  }
  
  // Add the new lap time
  window.lapTimes[id].push(randomTime);
  
  console.log(`Simulated lap for ${frequencyHoppingEnabled ? 'P' : 'Node '}${pilotOrNodeId}:`, randomTime, 'ms');
  
  // Add the lap time to the table directly (this will trigger the voice announcement)
  addLapToTable(pilotOrNodeId, randomTime);
  
  // Note: We don't call the backend /simulateLap endpoint because it would:
  // 1. Generate a different random lap time
  // 2. Trigger a duplicate voice announcement
  // Debug mode is UI-only simulation for testing the race tab interface
}

function addLapToTable(pilotId, lapTime) {
  // Format time as MM:SS.mmm
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
  };
  
  const formattedTime = formatTime(lapTime);
  
  // Get lap history for this pilot
  const id = `pilot${pilotId}`;
  const lapHistory = window.lapTimes[id] || [];
  const lapNumber = lapHistory.length;
  
  // Calculate 3-lap sum if we have at least 4 laps (lap 0, 1, 2, 3)
  // 3-lap time = lap1 + lap2 + lap3 (excluding lap 0 which starts the race)
  let threeLapSum = '-';
  if (lapHistory.length >= 4) {
    const lastThree = lapHistory.slice(-3);  // Gets the last 3 laps (1, 2, 3)
    const sum = lastThree.reduce((a, b) => a + b, 0);
    threeLapSum = formatTime(Math.round(sum));
  }
  
  // Use the unified table for all modes
  const tbody = document.getElementById('unifiedLapTableBody');
  if (!tbody) return;
  
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
  const totalPilots = frequencyHoppingEnabled 
    ? activeNodeCount * hoppingFreqCount 
    : activeNodeCount;
  
  // Find or create the row for this lap number
  let row = tbody.rows[lapNumber - 1];
  if (!row) {
    // Create a new row
    row = tbody.insertRow(-1);
    
    // Add lap number cell
    const lapCell = document.createElement('td');
    lapCell.textContent = lapNumber === 1 ? '0' : lapNumber - 1;
    row.appendChild(lapCell);
    
    // Add pilot time and 3-lap cells (2 cells per pilot)
    for (let i = 1; i <= totalPilots; i++) {
      // Time cell
      const timeCell = document.createElement('td');
      timeCell.textContent = '-';
      row.appendChild(timeCell);
      
      // 3-lap cell for this pilot
      const threeLapCell = document.createElement('td');
      threeLapCell.textContent = '-';
      row.appendChild(threeLapCell);
    }
  }
  
  // Update the cells for this pilot
  // Column structure: Lap (0) | P1 time (1) | P1 3-lap (2) | P2 time (3) | P2 3-lap (4) | ...
  const timeCellIndex = (pilotId - 1) * 2 + 1;
  const threeLapCellIndex = (pilotId - 1) * 2 + 2;
  
  console.log(`addLapToTable: Pilot ${pilotId}, time cell ${timeCellIndex}, 3-lap cell ${threeLapCellIndex}`);
  
  if (row.cells[timeCellIndex]) {
    row.cells[timeCellIndex].textContent = formattedTime;
    row.cells[timeCellIndex].style.fontWeight = 'bold';
    row.cells[timeCellIndex].style.color = 'var(--primary-color)';
  }
  
  // Update this pilot's 3-lap column
  if (threeLapSum !== '-' && row.cells[threeLapCellIndex]) {
    row.cells[threeLapCellIndex].textContent = threeLapSum;
    row.cells[threeLapCellIndex].style.fontWeight = 'bold';
    row.cells[threeLapCellIndex].style.background = 'rgba(var(--accent-rgb), 0.1)';
  }
  
  // Announce lap time
  if (audioEnabled) {
    const announcerType = commonElements.announcerSelect.options[commonElements.announcerSelect.selectedIndex].value;
    const lapTimeSeconds = (lapTime / 1000).toFixed(2);
    
    // Calculate total pilots for single pilot detection
    const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value) || 1;
    const totalPilots = frequencyHoppingEnabled ? activeNodeCount * hoppingFreqCount : activeNodeCount;
    const isSinglePilot = totalPilots === 1;
    
    // Calculate 2-lap time for announcer
    let twoLapTime = '';
    if (lapHistory.length >= 2 && lapNumber > 1) {
      const sum = lapHistory[lapHistory.length - 1] + lapHistory[lapHistory.length - 2];
      twoLapTime = (sum / 1000).toFixed(2);
    }
    
    switch (announcerType) {
      case "beep":
        beep(100, 330, "square");
        break;
      case "1lap":
        if (lapNumber === 1) {
          queueSpeak(`<p>Hole Shot ${lapTimeSeconds}</p>`);
        } else {
          // For single pilot: just announce lap time
          // For multiple pilots: announce pilot, lap number, and time
          const text = isSinglePilot
            ? `<p>${lapTimeSeconds}</p>`
            : `<p>P${pilotId} Lap ${lapNumber - 1}, ${lapTimeSeconds}</p>`;
          queueSpeak(text);
        }
        break;
      case "2lap":
        if (lapNumber === 1) {
          queueSpeak(`<p>Hole Shot ${lapTimeSeconds}</p>`);
        } else if (twoLapTime !== '') {
          // For single pilot: just announce 2-lap time
          // For multiple pilots: announce pilot and 2-lap time
          const text = isSinglePilot
            ? `<p>2 laps ${twoLapTime}</p>`
            : `<p>P${pilotId} 2 laps ${twoLapTime}</p>`;
          queueSpeak(text);
        }
        break;
      case "3lap":
        if (lapNumber === 1) {
          queueSpeak(`<p>Hole Shot ${lapTimeSeconds}</p>`);
        } else if (threeLapSum !== '-') {
          // Convert threeLapSum back to seconds for announcement
          const threeLapSeconds = (lapHistory.slice(-3).reduce((a, b) => a + b, 0) / 1000).toFixed(2);
          // For single pilot: just announce 3-lap time
          // For multiple pilots: announce pilot and 3-lap time
          const text = isSinglePilot
            ? `<p>3 laps ${threeLapSeconds}</p>`
            : `<p>P${pilotId} 3 laps ${threeLapSeconds}</p>`;
          queueSpeak(text);
        }
        break;
      default:
        break;
    }
  }
}

function updateHoppingInterval(value) {
  hoppingInterval = parseInt(value);
  console.log('Hopping interval set to:', hoppingInterval, 'ms');
}

// Toggle visibility of 3-lap columns
function toggle3LapColumns(show) {
  const table = document.getElementById('unifiedLapTable');
  if (!table) return;
  
  // Store preference in localStorage
  localStorage.setItem('show3LapColumns', show ? 'true' : 'false');
  
  // Add or remove the 'hide-3lap' class from the table
  if (show) {
    table.classList.remove('hide-3lap');
  } else {
    table.classList.add('hide-3lap');
  }
  
  console.log('3-Lap columns', show ? 'shown' : 'hidden');
}

function toggleFrequencyHopping(enabled) {
  frequencyHoppingEnabled = enabled;
  const hoppingConfig = document.getElementById('hoppingConfig');
  const hoppingIntervalConfig = document.getElementById('hoppingIntervalConfig');
  const normalCalibControls = document.getElementById('normalCalibrationControls');
  const hoppingIndicator = document.getElementById('hoppingIndicator');
  
  if (enabled) {
    // IMPORTANT: Set dropdown to first value if nothing selected, then sync hoppingFreqCount
    const hoppingFreqCountSelect = document.getElementById('hoppingFreqCount');
    if (hoppingFreqCountSelect) {
      // If no value selected or invalid, set to first option (usually 2)
      if (!hoppingFreqCountSelect.value || hoppingFreqCountSelect.selectedIndex === -1) {
        hoppingFreqCountSelect.selectedIndex = 0;
        console.log('Set hoppingFreqCount dropdown to first value:', hoppingFreqCountSelect.value);
      }
      hoppingFreqCount = parseInt(hoppingFreqCountSelect.value);
      console.log('Synced hoppingFreqCount from dropdown:', hoppingFreqCount);
    }
    
    hoppingConfig.style.display = 'flex';
    // Show hopping interval config only if debug mode is enabled
    if (hoppingIntervalConfig && debugMode) {
      hoppingIntervalConfig.style.display = 'flex';
    }
    // Show hopping indicator and hide normal calibration controls
    if (hoppingIndicator) hoppingIndicator.style.display = 'block';
    if (normalCalibControls) normalCalibControls.style.display = 'none';
    
    // Show hopping frequency fields and hide original frequency fields
    updateHoppingFrequencyFields();
    hideOriginalFrequencyFields();
    initializeUnifiedRaceTable();
    
    // Hide node numbers in race tab when hopping is enabled
    const nodeDebugInfos = document.querySelectorAll('.node-debug-info');
    nodeDebugInfos.forEach(el => {
      el.style.display = 'none';
    });
  } else {
    hoppingConfig.style.display = 'none';
    if (hoppingIntervalConfig) {
      hoppingIntervalConfig.style.display = 'none';
    }
    // Hide hopping indicator and show normal calibration controls
    if (hoppingIndicator) hoppingIndicator.style.display = 'none';
    if (normalCalibControls) normalCalibControls.style.display = 'flex';
    
    // Hide hopping frequency fields and show original frequency fields
    removeHoppingFrequencyFields();
    showOriginalFrequencyFields();
    initializeUnifiedRaceTable();
    
    // Reinitialize normal calibration selector
    initializeNormalCalibrationSelector();
    
    // Show node numbers in race tab only if debug mode is enabled
    const nodeDebugInfos = document.querySelectorAll('.node-debug-info');
    nodeDebugInfos.forEach(el => {
      el.style.display = debugMode ? 'inline' : 'none';
    });
  }
  
  // Update debug buttons if debug mode is active
  if (debugMode) {
    updateDebugButtons();
    // Update debug calibration table to reflect the mode change
    updateDebugCalibrationTable();
  }
}

function initializeUnifiedRaceTable() {
  const header = document.getElementById('unifiedLapTableHeader');
  if (!header) {
    console.error('unifiedLapTableHeader not found');
    return;
  }
  
  // Get active node count, with fallback to 1
  let activeNodeCount = 1;
  if (commonElements && commonElements.activeNodeCountSelect) {
    activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value) || 1;
  }
  
  // Calculate total number of pilots
  const totalPilots = frequencyHoppingEnabled 
    ? activeNodeCount * hoppingFreqCount 
    : activeNodeCount;
  
  console.log('Initializing unified race table:', { activeNodeCount, frequencyHoppingEnabled, hoppingFreqCount, totalPilots });
  
  // Clear existing headers
  header.innerHTML = '';
  
  // Add "Lap" column
  const lapTh = document.createElement('th');
  lapTh.textContent = 'Lap';
  header.appendChild(lapTh);
  
  // Add pilot columns with their 3-lap columns
  for (let i = 1; i <= totalPilots; i++) {
    // Pilot time column
    const pilotTh = document.createElement('th');
    pilotTh.className = 'pilot-col';
    pilotTh.textContent = `P${i}`;
    
    header.appendChild(pilotTh);
    
    // 3-Lap column for this pilot
    const threeLapTh = document.createElement('th');
    threeLapTh.className = 'three-lap-col';
    threeLapTh.textContent = `P${i} 3-Lap`;
    header.appendChild(threeLapTh);
  }
  
  console.log('Table headers created:', header.children.length);
}


function hideOriginalFrequencyFields() {
  // Hide Band, Channel, and Frequency display for all nodes
  const allNodeCards = document.querySelectorAll('.node-card');
  
  allNodeCards.forEach(nodeCard => {
    // Find and hide the original frequency fields
    const nodeFields = nodeCard.querySelectorAll('.node-field');
    nodeFields.forEach(field => {
      const label = field.querySelector('label');
      if (label) {
        const labelText = label.textContent.trim();
        // Hide Band, Channel, and Frequency fields
        if (labelText === 'Band:' || labelText === 'Channel:' || labelText === 'Frequency:') {
          field.style.display = 'none';
        }
      }
    });
  });
}

function showOriginalFrequencyFields() {
  // Show Band, Channel, and Frequency display for all nodes
  const allNodeCards = document.querySelectorAll('.node-card');
  
  allNodeCards.forEach(nodeCard => {
    // Find and show the original frequency fields
    const nodeFields = nodeCard.querySelectorAll('.node-field');
    nodeFields.forEach(field => {
      const label = field.querySelector('label');
      if (label) {
        const labelText = label.textContent.trim();
        // Show Band, Channel, and Frequency fields
        if (labelText === 'Band:' || labelText === 'Channel:' || labelText === 'Frequency:') {
          field.style.display = 'flex';
        }
      }
    });
  });
}

function updateHoppingFreqCount(count) {
  hoppingFreqCount = parseInt(count);
  if (frequencyHoppingEnabled) {
    updateHoppingFrequencyFields();
    initializeUnifiedRaceTable();
  }
  
  // Update debug buttons if debug mode is active
  if (debugMode) {
    updateDebugButtons();
  }
}

function updateHoppingFrequencyFields() {
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
  
  // IMPORTANT: Validate hoppingFreqCount to prevent creating too many cards
  if (!hoppingFreqCount || hoppingFreqCount < 2 || hoppingFreqCount > 4) {
    console.warn('Invalid hoppingFreqCount:', hoppingFreqCount, '- resetting to 4');
    hoppingFreqCount = 4;
    const hoppingFreqCountSelect = document.getElementById('hoppingFreqCount');
    if (hoppingFreqCountSelect) {
      hoppingFreqCountSelect.value = 4;
    }
  }
  
  console.log('updateHoppingFrequencyFields called - activeNodeCount:', activeNodeCount, 'hoppingFreqCount:', hoppingFreqCount);
  
  // Use a more reliable way to find node cards
  const allNodeCards = document.querySelectorAll('.node-card');
  
  allNodeCards.forEach((nodeCard, index) => {
    const nodeId = index + 1;
    
    // Remove existing hopping fields
    const existingGroup = nodeCard.querySelector('.hopping-freq-group');
    if (existingGroup) {
      existingGroup.remove();
    }
    
    // Only add for active nodes
    if (nodeId > activeNodeCount) return;
    
    // Create hopping frequency group
    const hoppingGroup = document.createElement('div');
    hoppingGroup.className = 'hopping-freq-group';
    hoppingGroup.style.display = 'grid';
    hoppingGroup.style.gridTemplateColumns = window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))';
    hoppingGroup.style.gap = '20px';
    hoppingGroup.style.marginTop = '20px';
    hoppingGroup.style.justifyContent = 'center';
    hoppingGroup.style.justifyItems = 'center';
    
    // Add frequency selectors
    for (let freqIdx = 1; freqIdx <= hoppingFreqCount; freqIdx++) {
      const freqItem = document.createElement('div');
      freqItem.className = 'hopping-freq-item';
      freqItem.style.display = 'flex';
      freqItem.style.flexDirection = 'column';
      freqItem.style.gap = '16px';
      freqItem.style.padding = '20px';
      freqItem.style.background = 'var(--bg-card)';
      freqItem.style.borderRadius = 'var(--radius-md)';
      freqItem.style.border = '2px solid var(--border-color)';
      freqItem.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      freqItem.style.transition = 'all 0.3s ease';
      freqItem.style.width = '100%';
      freqItem.style.maxWidth = '350px';
      
      // Calculate global pilot number
      const globalPilotNumber = (nodeId - 1) * hoppingFreqCount + freqIdx;
      
      // Pilot header
      const pilotHeader = document.createElement('div');
      pilotHeader.style.display = 'flex';
      pilotHeader.style.alignItems = 'center';
      pilotHeader.style.justifyContent = 'center';
      pilotHeader.style.gap = '8px';
      pilotHeader.style.padding = '12px';
      pilotHeader.style.background = 'var(--primary-gradient)';
      pilotHeader.style.borderRadius = 'var(--radius-sm)';
      pilotHeader.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
      
      const pilotIcon = document.createElement('span');
      pilotIcon.textContent = '🎯';
      pilotIcon.style.fontSize = '20px';
      
      const pilotLabel = document.createElement('span');
      pilotLabel.textContent = `Pilot ${globalPilotNumber}`;
      pilotLabel.style.fontWeight = 'bold';
      pilotLabel.style.color = 'white';
      pilotLabel.style.fontSize = '18px';
      pilotLabel.style.letterSpacing = '0.5px';
      
      pilotHeader.appendChild(pilotIcon);
      pilotHeader.appendChild(pilotLabel);
      
      // Band selection
      const bandSection = document.createElement('div');
      bandSection.style.display = 'flex';
      bandSection.style.flexDirection = 'column';
      bandSection.style.gap = '8px';
      
      const bandLabel = document.createElement('label');
      bandLabel.textContent = 'Band';
      bandLabel.style.fontSize = '13px';
      bandLabel.style.color = 'var(--text-secondary)';
      bandLabel.style.fontWeight = 'bold';
      bandLabel.style.textTransform = 'uppercase';
      bandLabel.style.letterSpacing = '0.5px';
      
      const bandSelect = document.createElement('select');
      bandSelect.id = `hopBand${nodeId}_${freqIdx}`;
      bandSelect.style.padding = '10px 12px';
      bandSelect.style.fontSize = '16px';
      bandSelect.style.borderRadius = 'var(--radius-sm)';
      bandSelect.style.border = '2px solid var(--border-color)';
      bandSelect.style.background = 'var(--bg-main)';
      bandSelect.style.color = 'var(--text-primary)';
      bandSelect.style.cursor = 'pointer';
      bandSelect.style.transition = 'all 0.2s ease';
      bandSelect.innerHTML = `
        <option value="A">Band A (Boscam A / TBS / RC305)</option>
        <option value="B">Band B (Boscam B)</option>
        <option value="E">Band E (Boscam E / DJI)</option>
        <option value="F">Band F (Fatshark / NexWave / ImmersionRC)</option>
        <option value="R">Band R (Raceband)</option>
        <option value="L">Band L (Lowband)</option>
      `;
      
      bandSection.appendChild(bandLabel);
      bandSection.appendChild(bandSelect);
      
      // Channel selection
      const channelSection = document.createElement('div');
      channelSection.style.display = 'flex';
      channelSection.style.flexDirection = 'column';
      channelSection.style.gap = '8px';
      
      const channelLabel = document.createElement('label');
      channelLabel.textContent = 'Channel';
      channelLabel.style.fontSize = '13px';
      channelLabel.style.color = 'var(--text-secondary)';
      channelLabel.style.fontWeight = 'bold';
      channelLabel.style.textTransform = 'uppercase';
      channelLabel.style.letterSpacing = '0.5px';
      
      const channelSelect = document.createElement('select');
      channelSelect.id = `hopChannel${nodeId}_${freqIdx}`;
      channelSelect.style.padding = '10px 12px';
      channelSelect.style.fontSize = '16px';
      channelSelect.style.borderRadius = 'var(--radius-sm)';
      channelSelect.style.border = '2px solid var(--border-color)';
      channelSelect.style.background = 'var(--bg-main)';
      channelSelect.style.color = 'var(--text-primary)';
      channelSelect.style.cursor = 'pointer';
      channelSelect.style.transition = 'all 0.2s ease';
      for (let ch = 1; ch <= 8; ch++) {
        const option = document.createElement('option');
        option.value = ch;
        option.textContent = `Channel ${ch}`;
        channelSelect.appendChild(option);
      }
      
      channelSection.appendChild(channelLabel);
      channelSection.appendChild(channelSelect);
      
      // Frequency display
      const freqSection = document.createElement('div');
      freqSection.style.display = 'flex';
      freqSection.style.flexDirection = 'column';
      freqSection.style.gap = '8px';
      freqSection.style.marginTop = '4px';
      
      const freqLabel = document.createElement('label');
      freqLabel.textContent = 'Frequency';
      freqLabel.style.fontSize = '13px';
      freqLabel.style.color = 'var(--text-secondary)';
      freqLabel.style.fontWeight = 'bold';
      freqLabel.style.textTransform = 'uppercase';
      freqLabel.style.letterSpacing = '0.5px';
      
      const freqDisplay = document.createElement('div');
      freqDisplay.id = `hopFreq${nodeId}_${freqIdx}`;
      freqDisplay.textContent = '5740 MHz';
      freqDisplay.style.padding = '10px 12px';
      freqDisplay.style.background = 'var(--bg-main)';
      freqDisplay.style.borderRadius = 'var(--radius-sm)';
      freqDisplay.style.border = '2px solid var(--border-color)';
      freqDisplay.style.textAlign = 'center';
      freqDisplay.style.fontWeight = '600';
      freqDisplay.style.color = 'var(--accent-color)';
      freqDisplay.style.fontSize = '16px';
      freqDisplay.style.letterSpacing = '0.5px';
      
      freqSection.appendChild(freqLabel);
      freqSection.appendChild(freqDisplay);
      
      // RSSI Thresholds Section
      const rssiSection = document.createElement('div');
      rssiSection.style.display = 'flex';
      rssiSection.style.flexDirection = 'column';
      rssiSection.style.gap = '12px';
      rssiSection.style.marginTop = '8px';
      rssiSection.style.padding = '12px';
      rssiSection.style.background = 'var(--bg-main)';
      rssiSection.style.borderRadius = 'var(--radius-sm)';
      rssiSection.style.border = '1px dashed var(--border-color)';
      
      // Enter RSSI
      const enterRssiWrapper = document.createElement('div');
      enterRssiWrapper.style.display = 'flex';
      enterRssiWrapper.style.flexDirection = 'column';
      enterRssiWrapper.style.gap = '4px';
      
      const enterLabel = document.createElement('label');
      enterLabel.textContent = 'Enter RSSI';
      enterLabel.style.fontSize = '12px';
      enterLabel.style.color = 'var(--text-secondary)';
      enterLabel.style.fontWeight = 'bold';
      enterLabel.style.textTransform = 'uppercase';
      enterLabel.style.letterSpacing = '0.3px';
      
      const enterInput = document.createElement('input');
      enterInput.type = 'number';
      enterInput.id = `hopEnterRSSI${nodeId}_${freqIdx}`;
      enterInput.value = '120';
      enterInput.min = '0';
      enterInput.max = '255';
      enterInput.style.padding = '8px 10px';
      enterInput.style.fontSize = '14px';
      enterInput.style.borderRadius = 'var(--radius-sm)';
      enterInput.style.border = '2px solid var(--border-color)';
      enterInput.style.background = 'var(--bg-card)';
      enterInput.style.color = 'var(--text-primary)';
      enterInput.style.width = '100%';
      
      enterRssiWrapper.appendChild(enterLabel);
      enterRssiWrapper.appendChild(enterInput);
      
      // Exit RSSI
      const exitRssiWrapper = document.createElement('div');
      exitRssiWrapper.style.display = 'flex';
      exitRssiWrapper.style.flexDirection = 'column';
      exitRssiWrapper.style.gap = '4px';
      
      const exitLabel = document.createElement('label');
      exitLabel.textContent = 'Exit RSSI';
      exitLabel.style.fontSize = '12px';
      exitLabel.style.color = 'var(--text-secondary)';
      exitLabel.style.fontWeight = 'bold';
      exitLabel.style.textTransform = 'uppercase';
      exitLabel.style.letterSpacing = '0.3px';
      
      const exitInput = document.createElement('input');
      exitInput.type = 'number';
      exitInput.id = `hopExitRSSI${nodeId}_${freqIdx}`;
      exitInput.value = '100';
      exitInput.min = '0';
      exitInput.max = '255';
      exitInput.style.padding = '8px 10px';
      exitInput.style.fontSize = '14px';
      exitInput.style.borderRadius = 'var(--radius-sm)';
      exitInput.style.border = '2px solid var(--border-color)';
      exitInput.style.background = 'var(--bg-card)';
      exitInput.style.color = 'var(--text-primary)';
      exitInput.style.width = '100%';
      
      exitRssiWrapper.appendChild(exitLabel);
      exitRssiWrapper.appendChild(exitInput);
      
      rssiSection.appendChild(enterRssiWrapper);
      rssiSection.appendChild(exitRssiWrapper);
      
      // Assemble the item
      freqItem.appendChild(pilotHeader);
      freqItem.appendChild(bandSection);
      freqItem.appendChild(channelSection);
      freqItem.appendChild(freqSection);
      freqItem.appendChild(rssiSection);
      
      // Add hover effect
      freqItem.addEventListener('mouseenter', () => {
        freqItem.style.transform = 'translateY(-4px)';
        freqItem.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
        freqItem.style.borderColor = 'var(--primary-color)';
      });
      
      freqItem.addEventListener('mouseleave', () => {
        freqItem.style.transform = 'translateY(0)';
        freqItem.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        freqItem.style.borderColor = 'var(--border-color)';
      });
      
      // Add change listeners
      bandSelect.onchange = () => updateHoppingFreqDisplay(nodeId, freqIdx);
      channelSelect.onchange = () => updateHoppingFreqDisplay(nodeId, freqIdx);
      
      hoppingGroup.appendChild(freqItem);
    }
    
    // Insert into node card body
    const nodeBody = nodeCard.querySelector('.node-card-body');
    if (nodeBody) {
      nodeBody.appendChild(hoppingGroup);
      
      // Update frequency displays for all cards in this node AFTER they're added to DOM
      for (let freqIdx = 1; freqIdx <= hoppingFreqCount; freqIdx++) {
        updateHoppingFreqDisplay(nodeId, freqIdx);
      }
    }
  });
}

function removeHoppingFrequencyFields() {
  document.querySelectorAll('.hopping-freq-group').forEach(group => group.remove());
}

function updateHoppingFreqDisplay(nodeId, freqIdx) {
  const bandSelect = document.getElementById(`hopBand${nodeId}_${freqIdx}`);
  const channelSelect = document.getElementById(`hopChannel${nodeId}_${freqIdx}`);
  const freqDisplay = document.getElementById(`hopFreq${nodeId}_${freqIdx}`);
  
  if (!bandSelect || !channelSelect || !freqDisplay) return;
  
  const bandIndex = ['A', 'B', 'E', 'F', 'R', 'L'].indexOf(bandSelect.value);
  const channelIndex = parseInt(channelSelect.value) - 1;
  
  if (bandIndex >= 0 && channelIndex >= 0) {
    const freq = freqLookup[bandIndex][channelIndex];
    freqDisplay.textContent = freq;
  }
}

// Helper function to find band and channel from frequency
function findBandChannelFromFreq(targetFreq) {
  const bands = ['A', 'B', 'E', 'F', 'R', 'L'];
  for (let bandIdx = 0; bandIdx < freqLookup.length; bandIdx++) {
    for (let channelIdx = 0; channelIdx < freqLookup[bandIdx].length; channelIdx++) {
      if (freqLookup[bandIdx][channelIdx] === targetFreq) {
        return {
          band: bands[bandIdx],
          channel: (channelIdx + 1).toString()
        };
      }
    }
  }
  return null;
}

// Normal Calibration Mode - Node Selector Functions
function initializeNormalCalibrationSelector() {
  const normalCalibNodeSelect = document.getElementById('normalCalibNodeSelect');
  if (!normalCalibNodeSelect) return;
  
  // Populate dropdown based on active node count
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value) || 1;
  normalCalibNodeSelect.innerHTML = '';
  
  for (let i = 1; i <= activeNodeCount; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `Node ${i}`;
    normalCalibNodeSelect.appendChild(option);
  }
  
  // Set dropdown to Node 1 and show only Node 1 by default
  normalCalibNodeSelect.value = 1;
  switchNormalCalibrationNode(1);
}

function switchNormalCalibrationNode(nodeId) {
  const selectedNode = parseInt(nodeId);
  
  console.log(`Switching to node ${selectedNode}`);
  
  // Load current RSSI values from config for this node
  loadNodeRSSIFromConfig(selectedNode);
  
  // Hide all calibration sections and remove visible class
  for (let i = 1; i <= 4; i++) {
    const calibSection = document.querySelector(`.calib-section.node-${i}`);
    if (calibSection) {
      if (i === selectedNode) {
        calibSection.classList.add('visible');
        calibSection.style.display = 'block';
        console.log(`Node ${i} section made visible`);
      } else {
        calibSection.classList.remove('visible');
        calibSection.style.display = 'none';
      }
    }
  }
  
  // Recreate chart for the selected node after a short delay to ensure it's visible
  setTimeout(() => {
    const node = nodes[selectedNode];
    console.log(`Attempting to create chart for node ${selectedNode}`);
    console.log(`Canvas element:`, node?.chartCanvas);
    console.log(`Canvas visible:`, node?.chartCanvas?.offsetWidth > 0);
    
    if (node && node.chartCanvas) {
      // Force canvas to be visible and have dimensions
      const canvas = node.chartCanvas;
      const container = canvas.parentElement;
      
      console.log(`Canvas parent:`, container);
      console.log(`Canvas offsetWidth:`, canvas.offsetWidth);
      console.log(`Canvas offsetHeight:`, canvas.offsetHeight);
      
      // Stop existing chart if any
      if (node.rssiChart) {
        console.log(`Stopping existing chart for node ${selectedNode}`);
        node.rssiChart.stop();
        node.rssiChart = null;
      }
      
      // Force canvas dimensions
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = '250px';
      
      // Wait a bit more for layout to settle
      setTimeout(() => {
        console.log(`Creating chart for node ${selectedNode}, canvas width: ${canvas.offsetWidth}`);
        createRssiChart(selectedNode);
        console.log(`Chart created for node ${selectedNode}`, node.rssiChart);
      }, 50);
    } else {
      console.error(`Cannot create chart for node ${selectedNode}: canvas not found`, node);
    }
  }, 150);
}

// Load RSSI values from config tab inputs for a specific node
function loadNodeRSSIFromConfig(nodeId) {
  const node = nodes[nodeId];
  if (!node) return;
  
  // In normal mode, get RSSI values from the config tab inputs
  let enterRssi, exitRssi;
  
  if (nodeId === 1) {
    enterRssi = parseInt(commonElements.enterRssiInput.value) || 120;
    exitRssi = parseInt(commonElements.exitRssiInput.value) || 100;
  } else {
    const enterInput = document.getElementById(`enterRssiInput${nodeId}`);
    const exitInput = document.getElementById(`exitRssiInput${nodeId}`);
    enterRssi = enterInput ? parseInt(enterInput.value) : 120;
    exitRssi = exitInput ? parseInt(exitInput.value) : 100;
  }
  
  // Update calibration sliders/inputs with config values
  node.enterRssiInput.value = enterRssi;
  node.enterRssiSlider.value = enterRssi;
  node.exitRssiInput.value = exitRssi;
  node.exitRssiSlider.value = exitRssi;
  
  // Trigger updates to sync everything
  updateEnterRssiForNode(nodeId, enterRssi);
  updateExitRssiForNode(nodeId, exitRssi);
  
  console.log(`Loaded RSSI for node ${nodeId}: Enter=${enterRssi}, Exit=${exitRssi}`);
}

// Update normal calibration selector when active node count changes
function updateNormalCalibrationSelector() {
  if (!frequencyHoppingEnabled) {
    initializeNormalCalibrationSelector();
  }
}

// Initialize the unified race table on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeUnifiedRaceTable();
  
  // Restore 3-lap columns preference
  const show3Lap = localStorage.getItem('show3LapColumns');
  if (show3Lap === 'false') {
    const toggle = document.getElementById('show3LapToggle');
    if (toggle) {
      toggle.checked = false;
      toggle3LapColumns(false);
    }
  }
});

// Also initialize immediately in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
  // Still loading, wait for DOMContentLoaded
} else {
  // DOM is ready, initialize now
  initializeUnifiedRaceTable();
  
  // Restore 3-lap columns preference
  const show3Lap = localStorage.getItem('show3LapColumns');
  if (show3Lap === 'false') {
    const toggle = document.getElementById('show3LapToggle');
    if (toggle) {
      toggle.checked = false;
      toggle3LapColumns(false);
    }
  }
}

// ============================================================================
// UNIFIED CALIBRATION TAB FUNCTIONS
// ============================================================================

// Global state for current calibration selection
let currentCalibSelection = {
  nodeId: 1,
  freqIdx: null,  // null for normal mode, 0-3 for hopping mode
  frequency: 5740,
  pilotNumber: null  // null for normal mode, 1-16 for hopping mode
};

// Initialize calibration tab when opened
function initializeCalibrationTab() {
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
  const calibNodeSelect = document.getElementById('calibNodeSelect');
  const calibFreqSelect = document.getElementById('calibFreqSelect');
  const calibFreqSelectorWrapper = document.getElementById('calibFreqSelectorWrapper');
  
  // Populate node dropdown
  calibNodeSelect.innerHTML = '';
  for (let i = 1; i <= activeNodeCount; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `Node ${i}`;
    calibNodeSelect.appendChild(option);
  }
  
  // Show/hide frequency selector based on hopping mode
  if (frequencyHoppingEnabled) {
    calibFreqSelectorWrapper.style.display = 'flex';
    // Populate frequency dropdown for first node
    populateFrequencyDropdown(1);
  } else {
    calibFreqSelectorWrapper.style.display = 'none';
  }
  
  // Initialize with first selection
  currentCalibSelection.nodeId = 1;
  currentCalibSelection.freqIdx = frequencyHoppingEnabled ? 0 : null;
  calibNodeSelect.value = 1;
  if (frequencyHoppingEnabled && calibFreqSelect.options.length > 0) {
    calibFreqSelect.value = 1;  // Set to first frequency (1-indexed)
  }
  
  // Switch to first node/frequency
  switchCalibration();
}

// Populate frequency dropdown for a specific node (hopping mode only)
function populateFrequencyDropdown(nodeId) {
  const calibFreqSelect = document.getElementById('calibFreqSelect');
  calibFreqSelect.innerHTML = '';
  
  for (let freqIdx = 1; freqIdx <= hoppingFreqCount; freqIdx++) {
    const pilotNumber = (nodeId - 1) * hoppingFreqCount + freqIdx;
    const freqDisplay = document.getElementById(`hopFreq${nodeId}_${freqIdx}`);
    const frequency = freqDisplay ? parseInt(freqDisplay.textContent) : 5740;
    
    const option = document.createElement('option');
    option.value = freqIdx;
    option.textContent = `P${pilotNumber} @ ${frequency} MHz`;
    calibFreqSelect.appendChild(option);
  }
}

// Switch calibration when dropdown changes
function switchCalibration() {
  const calibNodeSelect = document.getElementById('calibNodeSelect');
  const calibFreqSelect = document.getElementById('calibFreqSelect');
  
  const nodeId = parseInt(calibNodeSelect.value);
  currentCalibSelection.nodeId = nodeId;
  
  if (frequencyHoppingEnabled) {
    // Store current frequency index before repopulating
    const currentFreqIdx = parseInt(calibFreqSelect.value || 1);
    
    // Update frequency dropdown for this node
    populateFrequencyDropdown(nodeId);
    
    // Restore the frequency selection (or default to 1 if it doesn't exist)
    const maxFreqIdx = Math.min(currentFreqIdx, hoppingFreqCount);
    calibFreqSelect.value = maxFreqIdx;
    
    const freqIdx = parseInt(calibFreqSelect.value);
    currentCalibSelection.freqIdx = freqIdx - 1;  // Convert to 0-indexed
    currentCalibSelection.pilotNumber = (nodeId - 1) * hoppingFreqCount + freqIdx;
    
    // Get frequency from hopping config
    const freqDisplay = document.getElementById(`hopFreq${nodeId}_${freqIdx}`);
    currentCalibSelection.frequency = freqDisplay ? parseInt(freqDisplay.textContent) : 5740;
    
    // Load RSSI values for this pilot (pass 0-indexed freqIdx)
    loadCalibrationRSSI(nodeId, currentCalibSelection.freqIdx);
    
    console.log(`Switched to Node ${nodeId}, Freq ${freqIdx}, Pilot ${currentCalibSelection.pilotNumber}, Frequency: ${currentCalibSelection.frequency} MHz`);
  } else {
    // Normal mode - get frequency from config
    if (nodeId === 1) {
      currentCalibSelection.frequency = parseInt(commonElements.freqInput.value) || 5740;
    } else {
      const freqInput = document.getElementById(`freqInput${nodeId}`);
      currentCalibSelection.frequency = freqInput ? parseInt(freqInput.value) : 5740;
    }
    currentCalibSelection.freqIdx = null;
    currentCalibSelection.pilotNumber = null;
    
    // Load RSSI values for this node
    loadCalibrationRSSI(nodeId, null);
    
    console.log(`Switched to Node ${nodeId}, Frequency: ${currentCalibSelection.frequency} MHz`);
  }
  
  // Update UI
  updateCalibrationUI();
  
  // Recreate chart for this node
  recreateCalibrationChart(nodeId);
}

// Load RSSI values into calibration sliders
function loadCalibrationRSSI(nodeId, freqIdx) {
  const calibEnterInput = document.getElementById('calibEnterInput');
  const calibEnterSlider = document.getElementById('calibEnterSlider');
  const calibExitInput = document.getElementById('calibExitInput');
  const calibExitSlider = document.getElementById('calibExitSlider');
  
  let enterRssi, exitRssi;
  
  if (freqIdx !== null) {
    // Hopping mode - get from hopping config inputs
    const enterInput = document.getElementById(`hopEnterRSSI${nodeId}_${freqIdx + 1}`);
    const exitInput = document.getElementById(`hopExitRSSI${nodeId}_${freqIdx + 1}`);
    enterRssi = enterInput ? parseInt(enterInput.value) : 120;
    exitRssi = exitInput ? parseInt(exitInput.value) : 100;
  } else {
    // Normal mode - get from node config inputs
    if (nodeId === 1) {
      enterRssi = parseInt(commonElements.enterRssiInput.value) || 120;
      exitRssi = parseInt(commonElements.exitRssiInput.value) || 100;
    } else {
      const enterInput = document.getElementById(`enterRssiInput${nodeId}`);
      const exitInput = document.getElementById(`exitRssiInput${nodeId}`);
      enterRssi = enterInput ? parseInt(enterInput.value) : 120;
      exitRssi = exitInput ? parseInt(exitInput.value) : 100;
    }
  }
  
  // Update calibration controls
  calibEnterInput.value = enterRssi;
  calibEnterSlider.value = enterRssi;
  calibExitInput.value = exitRssi;
  calibExitSlider.value = exitRssi;
  
  console.log(`Loaded RSSI for Node ${nodeId}${freqIdx !== null ? ` Freq ${freqIdx + 1}` : ''}: Enter=${enterRssi}, Exit=${exitRssi}`);
}

// Update calibration UI labels
function updateCalibrationUI() {
  const currentCalibInfo = document.getElementById('currentCalibInfo');
  const calibChartTitle = document.getElementById('calibChartTitle');
  const calibCurrentFreq = document.getElementById('calibCurrentFreq');
  
  let infoText, titleText;
  
  if (currentCalibSelection.pilotNumber !== null) {
    infoText = `Node ${currentCalibSelection.nodeId} - P${currentCalibSelection.pilotNumber} @ ${currentCalibSelection.frequency} MHz`;
    titleText = `Node ${currentCalibSelection.nodeId} - P${currentCalibSelection.pilotNumber}`;
  } else {
    infoText = `Node ${currentCalibSelection.nodeId} @ ${currentCalibSelection.frequency} MHz`;
    titleText = `Node ${currentCalibSelection.nodeId}`;
  }
  
  currentCalibInfo.textContent = infoText;
  calibChartTitle.textContent = titleText;
  calibCurrentFreq.textContent = `Current: ${currentCalibSelection.frequency} MHz`;
}

// Recreate chart for calibration
function recreateCalibrationChart(nodeId) {
  const canvas = document.getElementById('calibRssiChart');
  if (!canvas) {
    console.error('Calibration chart canvas not found');
    return;
  }
  
  // Ensure node exists in nodes object
  if (!nodes[nodeId]) {
    console.warn(`Node ${nodeId} not initialized, initializing now...`);
    // Initialize minimal node structure needed for chart
    nodes[nodeId] = {
      rssiSeries: new TimeSeries(),
      rssiCrossingSeries: new TimeSeries(),
      maxRssiValue: 130,
      minRssiValue: 90,
      rssiChart: null,
      chartCanvas: canvas
    };
  }
  
  // Stop existing chart if any
  if (nodes[nodeId].rssiChart) {
    nodes[nodeId].rssiChart.stop();
  }
  
  // Create new chart for this node
  setTimeout(() => {
    // Temporarily assign the unified canvas to this node
    const originalCanvas = nodes[nodeId].chartCanvas;
    nodes[nodeId].chartCanvas = canvas;
    
    createRssiChart(nodeId);
    
    console.log(`Created calibration chart for Node ${nodeId}`);
  }, 100);
}

// Update Enter RSSI from calibration controls
function updateCalibEnterRssi(value) {
  const enterValue = parseInt(value);
  const calibEnterInput = document.getElementById('calibEnterInput');
  const calibEnterSlider = document.getElementById('calibEnterSlider');
  const calibExitInput = document.getElementById('calibExitInput');
  const calibExitSlider = document.getElementById('calibExitSlider');
  
  // Sync both input and slider
  calibEnterInput.value = enterValue;
  calibEnterSlider.value = enterValue;
  
  // Ensure exit is less than enter
  const exitValue = parseInt(calibExitInput.value);
  if (exitValue >= enterValue) {
    const newExit = Math.max(50, enterValue - 1);
    calibExitInput.value = newExit;
    calibExitSlider.value = newExit;
  }
}

// Update Exit RSSI from calibration controls
function updateCalibExitRssi(value) {
  const exitValue = parseInt(value);
  const calibEnterInput = document.getElementById('calibEnterInput');
  const calibEnterSlider = document.getElementById('calibEnterSlider');
  const calibExitInput = document.getElementById('calibExitInput');
  const calibExitSlider = document.getElementById('calibExitSlider');
  
  // Sync both input and slider
  calibExitInput.value = exitValue;
  calibExitSlider.value = exitValue;
  
  // Ensure exit is less than enter
  const enterValue = parseInt(calibEnterInput.value);
  if (exitValue >= enterValue) {
    const newEnter = Math.min(255, exitValue + 1);
    calibEnterInput.value = newEnter;
    calibEnterSlider.value = newEnter;
  }
}

// Save calibration values back to config
function saveCalibrationValues() {
  const calibEnterInput = document.getElementById('calibEnterInput');
  const calibExitInput = document.getElementById('calibExitInput');
  const enterValue = parseInt(calibEnterInput.value);
  const exitValue = parseInt(calibExitInput.value);
  
  const nodeId = currentCalibSelection.nodeId;
  const freqIdx = currentCalibSelection.freqIdx;
  
  // NOTE: These console.log messages appear in BROWSER CONSOLE (F12 / Developer Tools)
  // NOT in ESP32 Serial Monitor
  console.log('=== SAVE CALIBRATION VALUES ===');
  console.log(`Node: ${nodeId}, FreqIdx: ${freqIdx}, Pilot: ${currentCalibSelection.pilotNumber}`);
  console.log(`Enter RSSI: ${enterValue}, Exit RSSI: ${exitValue}`);
  console.log(`Frequency: ${currentCalibSelection.frequency} MHz`);
  
  if (freqIdx !== null) {
    // Hopping mode - save to hopping config inputs
    const hopEnterInputId = `hopEnterRSSI${nodeId}_${freqIdx + 1}`;
    const hopExitInputId = `hopExitRSSI${nodeId}_${freqIdx + 1}`;
    const hopEnterInput = document.getElementById(hopEnterInputId);
    const hopExitInput = document.getElementById(hopExitInputId);
    
    console.log(`Hopping Mode - Saving to:`);
    console.log(`  Enter: #${hopEnterInputId} = ${enterValue}`);
    console.log(`  Exit: #${hopExitInputId} = ${exitValue}`);
    
    if (hopEnterInput) {
      hopEnterInput.value = enterValue;
      console.log(`  ✅ Saved Enter RSSI to ${hopEnterInputId}`);
    } else {
      console.error(`  ❌ Element ${hopEnterInputId} not found!`);
    }
    
    if (hopExitInput) {
      hopExitInput.value = exitValue;
      console.log(`  ✅ Saved Exit RSSI to ${hopExitInputId}`);
    } else {
      console.error(`  ❌ Element ${hopExitInputId} not found!`);
    }
    
    console.log(`Saved RSSI for Node ${nodeId} P${currentCalibSelection.pilotNumber}: Enter=${enterValue}, Exit=${exitValue}`);
    alert(`✅ Saved RSSI for Pilot ${currentCalibSelection.pilotNumber}!\n\nEnter: ${enterValue}\nExit: ${exitValue}\n\nDon't forget to click "Save Configuration" on the Config tab to save to ESP32.`);
  } else {
    // Normal mode - save to node config inputs
    console.log(`Normal Mode - Saving to Node ${nodeId} config inputs`);
    
    if (nodeId === 1) {
      console.log(`  Saving to commonElements.enterRssiInput and commonElements.exitRssiInput`);
      commonElements.enterRssiInput.value = enterValue;
      commonElements.exitRssiInput.value = exitValue;
      console.log(`  ✅ Saved to Node 1 config inputs`);
    } else {
      const enterInputId = `enterRssiInput${nodeId}`;
      const exitInputId = `exitRssiInput${nodeId}`;
      const enterInput = document.getElementById(enterInputId);
      const exitInput = document.getElementById(exitInputId);
      
      console.log(`  Enter: #${enterInputId} = ${enterValue}`);
      console.log(`  Exit: #${exitInputId} = ${exitValue}`);
      
      if (enterInput) {
        enterInput.value = enterValue;
        console.log(`  ✅ Saved Enter RSSI to ${enterInputId}`);
      } else {
        console.error(`  ❌ Element ${enterInputId} not found!`);
      }
      
      if (exitInput) {
        exitInput.value = exitValue;
        console.log(`  ✅ Saved Exit RSSI to ${exitInputId}`);
      } else {
        console.error(`  ❌ Element ${exitInputId} not found!`);
      }
    }
    
    console.log(`Saved RSSI for Node ${nodeId}: Enter=${enterValue}, Exit=${exitValue}`);
    alert(`✅ Saved RSSI for Node ${nodeId}!\n\nEnter: ${enterValue}\nExit: ${exitValue}\n\nDon't forget to click "Save Configuration" on the Config tab to save to ESP32.`);
  }
  
  console.log('=== SAVE COMPLETE ===');
}

// Toggle auto-calibration
function toggleAutoCalibration() {
  const autoCalStatus = document.getElementById('autoCalStatus');
  const autoCalBtn = document.getElementById('autoCalBtn');
  
  if (autoCalStatus.style.display === 'none') {
    // Start auto-calibration for current selection
    const nodeId = currentCalibSelection.nodeId;
    startAutoCalibration(nodeId);
    autoCalBtn.textContent = '🛑 Stop Auto-Cal';
    autoCalBtn.style.background = 'var(--error-color)';
  } else {
    // Stop auto-calibration
    stopAutoCalibration();
    autoCalBtn.textContent = '🤖 Auto-Calibrate';
    autoCalBtn.style.background = 'var(--success-gradient)';
  }
}

// ============================================================================
// HOPPING CALIBRATION MODE FUNCTIONS
// ============================================================================

function startHoppingCalibration() {
  if (!frequencyHoppingEnabled) {
    return;
  }
  
  // Build list of all pilots to calibrate
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
  hoppingCalibrationMode.pilots = [];
  hoppingCalibrationMode.nodeGroups = {}; // Group pilots by node
  
  for (let nodeId = 1; nodeId <= activeNodeCount; nodeId++) {
    hoppingCalibrationMode.nodeGroups[nodeId] = [];
    
    for (let freqIdx = 1; freqIdx <= hoppingFreqCount; freqIdx++) {
      const pilotNumber = (nodeId - 1) * hoppingFreqCount + freqIdx;
      const freqDisplay = document.getElementById(`hopFreq${nodeId}_${freqIdx}`);
      const frequency = freqDisplay ? parseInt(freqDisplay.textContent) : 5740;
      
      const pilotData = {
        nodeId,
        freqIdx,
        frequency,
        pilotNumber
      };
      
      hoppingCalibrationMode.pilots.push(pilotData);
      hoppingCalibrationMode.nodeGroups[nodeId].push(pilotData);
    }
  }
  
  hoppingCalibrationMode.totalPilots = hoppingCalibrationMode.pilots.length;
  hoppingCalibrationMode.currentNodeId = 1;
  hoppingCalibrationMode.currentPilotIndex = 0;
  hoppingCalibrationMode.active = true;
  
  // Show calibration controls
  document.getElementById('hoppingCalibrationControls').style.display = 'block';
  
  // Populate dropdowns
  populateCalibrationDropdowns();
  
  // Show only Node 1's calibration section initially
  showOnlyNodeCalibration(1);
  
  // Pause hopping on first pilot's frequency
  switchToPilot(hoppingCalibrationMode.pilots[0]);
}

function populateCalibrationDropdowns() {
  const nodeSelect = document.getElementById('calibNodeSelect');
  const pilotSelect = document.getElementById('calibPilotSelect');
  
  // Clear existing options
  nodeSelect.innerHTML = '';
  pilotSelect.innerHTML = '';
  
  // Populate node dropdown
  const activeNodeCount = parseInt(commonElements.activeNodeCountSelect.value);
  for (let nodeId = 1; nodeId <= activeNodeCount; nodeId++) {
    const option = document.createElement('option');
    option.value = nodeId;
    option.textContent = `Node ${nodeId}`;
    nodeSelect.appendChild(option);
  }
  
  // Populate pilot dropdown for Node 1
  updatePilotDropdown(1);
}

function updatePilotDropdown(nodeId) {
  const pilotSelect = document.getElementById('calibPilotSelect');
  pilotSelect.innerHTML = '';
  
  const pilots = hoppingCalibrationMode.nodeGroups[nodeId];
  if (!pilots) return;
  
  pilots.forEach((pilot, index) => {
    const option = document.createElement('option');
    option.value = pilot.pilotNumber;
    option.textContent = `P${pilot.pilotNumber} (${pilot.frequency} MHz)`;
    pilotSelect.appendChild(option);
  });
}

function showOnlyNodeCalibration(nodeId) {
  // Hide all calibration sections
  for (let i = 1; i <= 4; i++) {
    const section = document.querySelector(`.calib-section.node-${i}`);
    if (section) {
      if (i === nodeId) {
        section.classList.add('visible');
        section.style.display = 'block';
      } else {
        section.classList.remove('visible');
        section.style.display = 'none';
      }
    }
  }
  
  // Recreate chart for the selected node to ensure it renders
  setTimeout(() => {
    const node = nodes[nodeId];
    if (node && node.chartCanvas) {
      // Stop existing chart if any
      if (node.rssiChart) {
        node.rssiChart.stop();
        node.rssiChart = null;
      }
      // Create new chart
      createRssiChart(nodeId);
      console.log(`Hopping calibration: Chart created for node ${nodeId}`);
    }
  }, 100);
}

// Switch to a different node
function switchCalibrationNode(nodeId) {
  nodeId = parseInt(nodeId);
  hoppingCalibrationMode.currentNodeId = nodeId;
  
  // Update pilot dropdown for this node
  updatePilotDropdown(nodeId);
  
  // Show only this node's calibration section
  showOnlyNodeCalibration(nodeId);
  
  // Switch to first pilot of this node
  const firstPilot = hoppingCalibrationMode.nodeGroups[nodeId][0];
  if (firstPilot) {
    document.getElementById('calibPilotSelect').value = firstPilot.pilotNumber;
    switchToPilot(firstPilot);
  }
}

// Switch to a different pilot
function switchCalibrationPilot(pilotNumber) {
  pilotNumber = parseInt(pilotNumber);
  const pilot = hoppingCalibrationMode.pilots.find(p => p.pilotNumber === pilotNumber);
  
  if (pilot) {
    switchToPilot(pilot);
  }
}

// Switch to a specific pilot
function switchToPilot(pilot) {
  // Save current pilot's RSSI values before switching
  if (hoppingCalibrationMode.currentPilot) {
    savePilotRSSIFromCalibration(
      hoppingCalibrationMode.currentPilot.nodeId,
      hoppingCalibrationMode.currentPilot.freqIdx
    );
  }
  
  hoppingCalibrationMode.currentPilot = pilot;
  
  // Update UI
  document.getElementById('currentCalibPilot').textContent = `P${pilot.pilotNumber}`;
  document.getElementById('currentCalibFreq').textContent = pilot.frequency;
  document.getElementById('currentCalibStatus').textContent = 'Hopping Paused';
  document.getElementById('currentCalibStatus').style.color = 'var(--success-color)';
  
  // Tell backend to pause hopping on this frequency
  fetch(`/pauseHoppingOn?frequency=${pilot.frequency}`)
    .then(response => response.json())
    .then(data => {
      console.log('Hopping paused on', pilot.frequency, 'MHz for P' + pilot.pilotNumber);
      
      // Load current RSSI values for this pilot into the calibration sliders
      loadPilotRSSIToCalibration(pilot.nodeId, pilot.freqIdx);
    })
    .catch(err => {
      console.error('Error pausing hopping:', err);
      alert('Failed to communicate with ESP32. Make sure you are connected.');
    });
}

function loadPilotRSSIToCalibration(nodeId, freqIdx) {
  // Get the RSSI values from the hopping config
  const enterInput = document.getElementById(`hopEnterRSSI${nodeId}_${freqIdx}`);
  const exitInput = document.getElementById(`hopExitRSSI${nodeId}_${freqIdx}`);
  
  if (enterInput && exitInput) {
    const enterValue = parseInt(enterInput.value);
    const exitValue = parseInt(exitInput.value);
    
    // Update the calibration sliders for the appropriate node
    const node = nodes[nodeId];
    if (!node) return;
    
    node.enterRssiInput.value = enterValue;
    node.enterRssiSlider.value = enterValue;
    node.exitRssiInput.value = exitValue;
    node.exitRssiSlider.value = exitValue;
    
    // Trigger updates to sync everything
    updateEnterRssiForNode(nodeId, enterValue);
    updateExitRssiForNode(nodeId, exitValue);
  }
}

function savePilotRSSIFromCalibration(nodeId, freqIdx) {
  // Save the current calibration slider values back to the hopping config
  // Use the appropriate node's inputs based on which node the pilot belongs to
  const node = nodes[nodeId];
  if (!node) return;
  
  const enterValue = parseInt(node.enterRssiInput.value);
  const exitValue = parseInt(node.exitRssiInput.value);
  
  const hopEnterInput = document.getElementById(`hopEnterRSSI${nodeId}_${freqIdx}`);
  const hopExitInput = document.getElementById(`hopExitRSSI${nodeId}_${freqIdx}`);
  
  if (hopEnterInput && hopExitInput) {
    hopEnterInput.value = enterValue;
    hopExitInput.value = exitValue;
  }
}

function endHoppingCalibration() {
  // Save current pilot's RSSI values
  if (hoppingCalibrationMode.currentPilot) {
    savePilotRSSIFromCalibration(
      hoppingCalibrationMode.currentPilot.nodeId,
      hoppingCalibrationMode.currentPilot.freqIdx
    );
  }
  
  // Resume normal hopping
  fetch('/resumeHopping')
    .then(response => response.json())
    .then(data => {
      console.log('Hopping resumed');
      
      // Reset calibration mode
      hoppingCalibrationMode.active = false;
      hoppingCalibrationMode.currentPilot = null;
      hoppingCalibrationMode.currentNodeId = null;
      hoppingCalibrationMode.pilots = [];
      hoppingCalibrationMode.nodeGroups = {};
      
      // Show all calibration sections again
      for (let i = 1; i <= 4; i++) {
        const section = document.querySelector(`.calib-section.node-${i}`);
        if (section) {
          section.style.display = '';
        }
      }
      
      // Update UI
      document.getElementById('hoppingCalibrationControls').style.display = 'none';
    })
    .catch(err => {
      console.error('Error resuming hopping:', err);
      alert('Failed to resume hopping. You may need to restart the ESP32.');
    });
}


// ===========================
// Auto-Calibration Functions
// ===========================

let autoCalInterval = null;
let autoCalCurrentNode = 1;

function startAutoCalibration() {
  autoCalCurrentNode = parseInt(document.getElementById('autoCalNodeSelect').value);
  
  // Send start request to backend
  fetch(`/autoCal/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `node=${autoCalCurrentNode}`
  })
    .then(response => response.json())
    .then(data => {
      console.log('Auto-calibration started:', data);
      
      // Update UI to show in-progress state
      document.getElementById('autoCalStartBtn').style.display = 'none';
      document.getElementById('autoCalStopBtn').style.display = 'block';
      document.getElementById('autoCalStatus').style.display = 'block';
      document.getElementById('autoCalResults').style.display = 'none';
      
      // Reset peak badges
      for (let i = 1; i <= 5; i++) {
        const badge = document.getElementById(`peak${i}`);
        badge.textContent = '-';
        badge.classList.remove('detected');
      }
      
      // Start polling for status updates
      autoCalInterval = setInterval(updateAutoCalStatus, 500);
    })
    .catch(err => {
      console.error('Error starting auto-calibration:', err);
      alert('Failed to start auto-calibration');
    });
}

function stopAutoCalibration() {
  // Send stop request to backend
  fetch(`/autoCal/stop`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `node=${autoCalCurrentNode}`
  })
    .then(response => response.json())
    .then(data => {
      console.log('Auto-calibration stopped:', data);
      resetAutoCalUI();
    })
    .catch(err => {
      console.error('Error stopping auto-calibration:', err);
    });
}

function updateAutoCalStatus() {
  fetch(`/autoCal/status?node=${autoCalCurrentNode}`)
    .then(response => response.json())
    .then(data => {
      if (!data.active) {
        // Calibration is complete
        if (data.pass >= 5) {
          showAutoCalResults(data);
        }
        return;
      }
      
      // Update progress
      const passCount = data.pass || 0;
      document.getElementById('autoCalPass').textContent = `Pass ${passCount}/5`;
      document.getElementById('autoCalProgress').style.width = `${(passCount / 5) * 100}%`;
      
      // Update real-time RSSI values
      const currentRssi = data.currentRssi || 0;
      const minRssi = data.minRssi || 0;
      const detectionLevel = minRssi + 15; // Detection threshold is 15 points above baseline
      
      document.getElementById('autoCalCurrentRssi').textContent = currentRssi;
      document.getElementById('autoCalBaselineRssi').textContent = minRssi;
      document.getElementById('autoCalDetectionLevel').textContent = detectionLevel;
      
      // Highlight current RSSI if above detection level
      const rssiElement = document.getElementById('autoCalCurrentRssi');
      if (currentRssi > detectionLevel) {
        rssiElement.style.color = 'var(--accent-color)';
        rssiElement.style.textShadow = '0 0 10px var(--accent-color)';
      } else {
        rssiElement.style.color = 'var(--primary-color)';
        rssiElement.style.textShadow = 'none';
      }
      
      // Update peak badges
      for (let i = 0; i < 5; i++) {
        const badge = document.getElementById(`peak${i + 1}`);
        if (data.peaks[i] > 0) {
          badge.textContent = data.peaks[i];
          badge.classList.add('detected');
        }
      }
    })
    .catch(err => {
      console.error('Error fetching auto-cal status:', err);
    });
}

function showAutoCalResults(data) {
  if (autoCalInterval) {
    clearInterval(autoCalInterval);
    autoCalInterval = null;
  }
  
  // Hide progress, show results
  document.getElementById('autoCalStatus').style.display = 'none';
  document.getElementById('autoCalResults').style.display = 'block';
  document.getElementById('autoCalStopBtn').style.display = 'none';
  document.getElementById('autoCalStartBtn').style.display = 'block';
  
  // Display calculated values
  document.getElementById('autoCalEnter').textContent = data.calculatedEnter;
  document.getElementById('autoCalExit').textContent = data.calculatedExit;
  document.getElementById('autoCalMinRssi').textContent = data.minRssi;
  
  // Store results for applying later
  window.autoCalResults = {
    node: autoCalCurrentNode,
    enter: data.calculatedEnter,
    exit: data.calculatedExit
  };
}

function applyAutoCalResults() {
  if (!window.autoCalResults) return;
  
  const { node, enter, exit } = window.autoCalResults;
  
  // Apply to the correct node's inputs
  const enterInput = document.getElementById(`enterInput${node === 1 ? '' : node}`);
  const exitInput = document.getElementById(`exitInput${node === 1 ? '' : node}`);
  const enterSlider = document.getElementById(`enter${node === 1 ? '' : node}`);
  const exitSlider = document.getElementById(`exit${node === 1 ? '' : node}`);
  
  if (enterInput && exitInput && enterSlider && exitSlider) {
    enterInput.value = enter;
    exitInput.value = exit;
    enterSlider.value = enter;
    exitSlider.value = exit;
    
    // Update the node state
    const nodeKey = node;
    if (nodes[nodeKey]) {
      nodes[nodeKey].enterRssi = enter;
      nodes[nodeKey].exitRssi = exit;
    }
    
    alert(`Auto-calibration values applied to Node ${node}!\n\nEnter RSSI: ${enter}\nExit RSSI: ${exit}\n\nDon't forget to click "Save RSSI Thresholds" to persist these values.`);
    
    // Reset UI
    document.getElementById('autoCalResults').style.display = 'none';
    window.autoCalResults = null;
  }
}

function discardAutoCalResults() {
  document.getElementById('autoCalResults').style.display = 'none';
  window.autoCalResults = null;
  alert('Auto-calibration results discarded.');
}

function resetAutoCalUI() {
  if (autoCalInterval) {
    clearInterval(autoCalInterval);
    autoCalInterval = null;
  }
  
  document.getElementById('autoCalStartBtn').style.display = 'block';
  document.getElementById('autoCalStopBtn').style.display = 'none';
  document.getElementById('autoCalStatus').style.display = 'none';
  document.getElementById('autoCalResults').style.display = 'none';
}

// Add cleanup when leaving calibration tab
const originalOpenTab = window.openTab;
window.openTab = function(evt, tabName) {
  if (autoCalInterval && tabName !== 'calib') {
    stopAutoCalibration();
  }
  if (originalOpenTab) {
    originalOpenTab(evt, tabName);
  }
};

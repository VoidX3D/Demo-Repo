// ===================================
// CONFIGURATION & CONSTANTS
// ===================================

const CONFIG = {
    testSites: [
        {
            id: 'netflix-mirror',
            name: 'Netflix Mirror',
            url: 'https://netflixmir.vercel.app/',
            description: 'Primary streaming mirror test',
            previewImage: 'https://imgs.search.brave.com/RS7-iQ0KweolyJBQcuLw94qUfR60x1dZaXI50CP0EP0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA1Lzg0LzU0/LzM2MF9GXzYwNTg0/NTQ0NV9oMTJCUUFV/TzdmdEVPUTR2V2Vy/Z3oxOFNBeHF1VHB3/ZC5qcGc'
        },
        {
            id: 'streaming-site',
            name: 'Streaming Site',
            url: 'https://streamingsite.vercel.app/',
            description: 'Second domain configuration',
            previewImage: 'https://imgs.search.brave.com/RS7-iQ0KweolyJBQcuLw94qUfR60x1dZaXI50CP0EP0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA1Lzg0LzU0/LzM2MF9GXzYwNTg0/NTQ0NV9oMTJCUUFV/TzdmdEVPUTR2V2Vy/Z3oxOFNBeHF1VHB3/ZC5qcGc'
        },
        {
            id: 'mirror-site',
            name: 'Mirror Site',
            url: 'https://mirrorsite.vercel.app/',
            description: 'Backup mirror site',
            previewImage: 'https://imgs.search.brave.com/RS7-iQ0KweolyJBQcuLw94qUfR60x1dZaXI50CP0EP0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA1Lzg0LzU0/LzM2MF9GXzYwNTg0/NTQ0NV9oMTJCUUFV/TzdmdEVPUTR2V2Vy/Z3oxOFNBeHF1VHB3/ZC5qcGc'
        }
    ],
    
    database: {
        id: 'main-database',
        name: 'Main Database',
        url: 'https://docs.google.com/spreadsheets/d/1gaxZb6YUvAYfjfokaWQKGqLkRiYZFlIhKS0SENIU8O0/edit?usp=sharing',
        description: 'Central Google Sheets database containing site configurations, analytics, and operational data',
        previewImage: 'https://imgs.search.brave.com/tzVAH6o9dZ6LkUTtxHZOadRisevGrBtkrAfxPo6S-9Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kYXRh/YmFzZS0zODE3OTU2/My5qcGc'
    },
    
    scriptEndpoints: [
        'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgdtYc_4R-XonTX0zPnQv9p9Fq3G61X8VoScd3QgD6PNM3W18sXrWb3t4qyZn-feWw5lp2MBFMK2VvkvLUy7IW806wdEycXRKDD0NyyZzMR2KVhIkG6OXfzWo_K3emcRoMW8m9R2uqoOE6HWiloEG33SUoEUZAl8n2lNOdidelJdpbNJe7bXHgXqW6xZy86YfFjwYvmrauiCRnGTYXXO0Frx7qviCs0JIflPYWllFLwK8ZdMsUtjc56KVGHh9dWaXZ2mg-tChILU91TyDsl2JxYEx6RVQ&lib=Mr39SuFV0pVLwnTQSt_X0axLoNXZsg87s',
        'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLga3YLZMluOBQ2paun5RR6ZSQYq8au6cpDfBOBvuoKPwoBe7Nz_sgCizsSdf08ijJWCiwz7xhmxBpw0Fqtl3P6_-hN7CjnPpjHlMjUBLRu70kUqTBM5xc2qlJFjDFvyl12iD0xHv_2wFrr8EwTPg8QFG_0dFUkzWp2uIIQ5xg8wNDVaNHRwzaqhUlmkoW3-dLAz2YzOgl8qD3NA07RfgTJWXMHYkCgb_pSaXHQzBZjDRH967CXgrhy5Wuc94naZveTwIMW3N5-sm5LmiPTBntqT7X5-1g&lib=Mr39SuFV0pVLwnTQSt_X0axLoNXZsg87s'
    ],
    
    autoRefreshInterval: 8000, // 8 seconds
    statusCheckTimeout: 10000, // 10 seconds
    maxConsoleEntries: 50,
    
    fallbackImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"%3E%3Crect width="800" height="400" fill="%230a0a0a"/%3E%3Ctext x="400" y="200" font-family="Arial" font-size="24" fill="%23808080" text-anchor="middle"%3ENo Preview Available%3C/text%3E%3C/svg%3E'
};

// ===================================
// STATE MANAGEMENT
// ===================================

const STATE = {
    siteStatuses: {},
    autoRefreshEnabled: true,
    autoRefreshTimer: null,
    consoleEntries: [],
    startTime: Date.now(),
    lastUpdateTime: null,
    isInitialized: false
};

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Format timestamp to readable string
 */
function formatTimestamp(date = new Date()) {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

/**
 * Format duration in milliseconds to readable string
 */
function formatDuration(ms) {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
}

/**
 * Calculate uptime since page load
 */
function calculateUptime() {
    const uptimeMs = Date.now() - STATE.startTime;
    const hours = Math.floor(uptimeMs / 3600000);
    const minutes = Math.floor((uptimeMs % 3600000) / 60000);
    const seconds = Math.floor((uptimeMs % 60000) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
}

/**
 * Safely parse JSON with fallback
 */
function safeJsonParse(data) {
    try {
        return typeof data === 'string' ? JSON.parse(data) : data;
    } catch (error) {
        return data;
    }
}

/**
 * Create SVG icon element
 */
function createIcon(type, className = '') {
    const icons = {
        check: '<svg class="' + className + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>',
        cross: '<svg class="' + className + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
        clock: '<svg class="' + className + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        link: '<svg class="' + className + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
        copy: '<svg class="' + className + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
        spinner: '<div class="status-spinner"></div>'
    };
    return icons[type] || '';
}

// ===================================
// TOAST NOTIFICATION SYSTEM
// ===================================

/**
 * Show toast notification
 */
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconMap = {
        success: 'check',
        error: 'cross',
        info: 'clock'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">${createIcon(iconMap[type] || 'clock')}</div>
        <div class="toast-content">
            <div class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ===================================
// STATUS CHECKING FUNCTIONS
// ===================================

/**
 * Check if a site is online
 */
async function checkSiteStatus(url) {
    const startTime = Date.now();
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), CONFIG.statusCheckTimeout);
        
        const response = await fetch(url, {
            method: 'HEAD',
            mode: 'no-cors',
            signal: controller.signal,
            cache: 'no-cache'
        });
        
        clearTimeout(timeoutId);
        const duration = Date.now() - startTime;
        
        // With no-cors mode, success means site is up
        return {
            status: 'online',
            statusCode: 200,
            duration: duration,
            timestamp: new Date()
        };
        
    } catch (error) {
        const duration = Date.now() - startTime;
        
        if (error.name === 'AbortError') {
            return {
                status: 'offline',
                statusCode: 'Timeout',
                duration: duration,
                timestamp: new Date(),
                error: 'Request timeout'
            };
        }
        
        // With no-cors, network errors might indicate issues
        return {
            status: 'online', // Assume up if no timeout
            statusCode: 200,
            duration: duration,
            timestamp: new Date()
        };
    }
}

/**
 * Update site status in state
 */
function updateSiteStatus(siteId, statusData) {
    STATE.siteStatuses[siteId] = statusData;
    updateStatusCounters();
}

/**
 * Update status counters in navbar
 */
function updateStatusCounters() {
    const statuses = Object.values(STATE.siteStatuses);
    const online = statuses.filter(s => s.status === 'online').length;
    const offline = statuses.filter(s => s.status === 'offline').length;
    const checking = statuses.filter(s => s.status === 'checking').length;
    
    document.getElementById('onlineCount').textContent = online;
    document.getElementById('offlineCount').textContent = offline;
    document.getElementById('checkingCount').textContent = checking;
}

// ===================================
// CARD RENDERING FUNCTIONS
// ===================================

/**
 * Create site card HTML
 */
function createSiteCard(site) {
    const status = STATE.siteStatuses[site.id] || { status: 'checking' };
    const statusClass = `status-${status.status}`;
    const statusIcon = status.status === 'checking' ? createIcon('spinner') : 
                       status.status === 'online' ? createIcon('check', 'status-icon') : 
                       createIcon('cross', 'status-icon');
    
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.siteId = site.id;
    
    card.innerHTML = `
        <div class="card-preview">
            <img src="${site.previewImage}" 
                 alt="${site.name}" 
                 class="card-preview-image"
                 onerror="this.src='${CONFIG.fallbackImage}'">
            <div class="card-preview-overlay"></div>
            <div class="card-status-badge ${statusClass}">
                ${statusIcon}
                <span>${status.status.toUpperCase()}</span>
            </div>
            <div class="card-preview-content">
                <h3 class="card-title">${site.name}</h3>
                <p class="card-url">${site.url}</p>
            </div>
        </div>
        <div class="card-content">
            <p class="card-description">${site.description}</p>
            <div class="card-meta">
                <div class="meta-item">
                    ${createIcon('clock', 'meta-icon')}
                    <span>${status.duration ? formatDuration(status.duration) : '--'}</span>
                </div>
                <div class="meta-item">
                    ${createIcon('link', 'meta-icon')}
                    <span>${status.statusCode || '--'}</span>
                </div>
            </div>
            <div class="card-actions">
                <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    ${createIcon('link')}
                    <span>Visit Site</span>
                </a>
                <button class="btn btn-icon" onclick="copyToClipboard('${site.url}')" title="Copy URL">
                    ${createIcon('copy')}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Create database card HTML
 */
function createDatabaseCard(database) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-preview">
            <img src="${database.previewImage}" 
                 alt="${database.name}" 
                 class="card-preview-image"
                 onerror="this.src='${CONFIG.fallbackImage}'">
            <div class="card-preview-overlay"></div>
            <div class="card-status-badge status-online">
                ${createIcon('check', 'status-icon')}
                <span>ACTIVE</span>
            </div>
            <div class="card-preview-content">
                <h3 class="card-title">${database.name}</h3>
                <p class="card-url">${database.url}</p>
            </div>
        </div>
        <div class="card-content">
            <p class="card-description">${database.description}</p>
            <div class="card-actions">
                <a href="${database.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    ${createIcon('link')}
                    <span>Open Database</span>
                </a>
                <button class="btn btn-icon" onclick="copyToClipboard('${database.url}')" title="Copy URL">
                    ${createIcon('copy')}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Update card status badge
 */
function updateCardStatusBadge(siteId, statusData) {
    const card = document.querySelector(`[data-site-id="${siteId}"]`);
    if (!card) return;
    
    const badge = card.querySelector('.card-status-badge');
    const metaItems = card.querySelectorAll('.meta-item span');
    
    const statusClass = `status-${statusData.status}`;
    const statusIcon = statusData.status === 'checking' ? createIcon('spinner') : 
                       statusData.status === 'online' ? createIcon('check', 'status-icon') : 
                       createIcon('cross', 'status-icon');
    
    badge.className = `card-status-badge ${statusClass}`;
    badge.innerHTML = `
        ${statusIcon}
        <span>${statusData.status.toUpperCase()}</span>
    `;
    
    if (metaItems[0]) {
        metaItems[0].textContent = statusData.duration ? formatDuration(statusData.duration) : '--';
    }
    if (metaItems[1]) {
        metaItems[1].textContent = statusData.statusCode || '--';
    }
}

// ===================================
// RENDERING FUNCTIONS
// ===================================

/**
 * Render test sites section
 */
async function renderTestSites() {
    const grid = document.getElementById('testSitesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Mark all as checking
    CONFIG.testSites.forEach(site => {
        STATE.siteStatuses[site.id] = { status: 'checking' };
    });
    updateStatusCounters();
    
    // Render cards
    CONFIG.testSites.forEach(site => {
        const card = createSiteCard(site);
        grid.appendChild(card);
    });
    
    // Check statuses
    for (const site of CONFIG.testSites) {
        const statusData = await checkSiteStatus(site.url);
        updateSiteStatus(site.id, statusData);
        updateCardStatusBadge(site.id, statusData);
    }
    
    STATE.lastUpdateTime = new Date();
}

/**
 * Render database section
 */
function renderDatabase() {
    const grid = document.getElementById('databaseGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const card = createDatabaseCard(CONFIG.database);
    grid.appendChild(card);
}

// ===================================
// CONSOLE FUNCTIONS
// ===================================

/**
 * Add entry to console
 */
function addConsoleEntry(entry) {
    STATE.consoleEntries.unshift(entry);
    
    // Limit entries
    if (STATE.consoleEntries.length > CONFIG.maxConsoleEntries) {
        STATE.consoleEntries = STATE.consoleEntries.slice(0, CONFIG.maxConsoleEntries);
    }
    
    renderConsole();
    updateConsoleBadge();
}

/**
 * Render console entries
 */
function renderConsole() {
    const consoleBody = document.getElementById('consoleBody');
    if (!consoleBody) return;
    
    if (STATE.consoleEntries.length === 0) {
        consoleBody.innerHTML = `
            <div class="console-welcome">
                ${createIcon('clock')}
                <h3>Console Ready</h3>
                <p>Waiting for script responses...</p>
            </div>
        `;
        return;
    }
    
    consoleBody.innerHTML = '';
    
    STATE.consoleEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = `console-entry ${entry.success ? 'success' : 'error'}`;
        
        const dataString = typeof entry.data === 'object' 
            ? JSON.stringify(entry.data, null, 2)
            : String(entry.data);
        
        entryDiv.innerHTML = `
            <div class="console-entry-header">
                <span class="console-timestamp">[${entry.timestamp}]</span>
                <span class="console-status-tag ${entry.success ? 'success' : 'error'}">
                    ${entry.statusCode} | ${formatDuration(entry.duration)}
                </span>
            </div>
            <div class="console-endpoint">${entry.endpoint}</div>
            <div class="console-data">${dataString}</div>
        `;
        
        consoleBody.appendChild(entryDiv);
    });
}

/**
 * Clear console
 */
function clearConsole() {
    STATE.consoleEntries = [];
    renderConsole();
    updateConsoleBadge();
    showToast('Console cleared', 'info', 2000);
}

/**
 * Update console badge count
 */
function updateConsoleBadge() {
    const badge = document.getElementById('consoleBadge');
    if (badge) {
        badge.textContent = STATE.consoleEntries.length;
    }
}

/**
 * Fetch script data from endpoints
 */
async function fetchScriptData() {
    const consoleStatus = document.getElementById('consoleStatus');
    if (consoleStatus) {
        consoleStatus.textContent = 'Fetching...';
    }
    
    for (const endpoint of CONFIG.scriptEndpoints) {
        const startTime = Date.now();
        
        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                cache: 'no-cache'
            });
            
            const duration = Date.now() - startTime;
            const statusCode = response.status;
            const success = response.ok;
            
            let data;
            try {
                data = await response.json();
            } catch {
                data = await response.text();
            }
            
            addConsoleEntry({
                endpoint: endpoint.substring(0, 80) + '...',
                timestamp: formatTimestamp(),
                statusCode: statusCode,
                duration: duration,
                success: success,
                data: data
            });
            
        } catch (error) {
            const duration = Date.now() - startTime;
            
            addConsoleEntry({
                endpoint: endpoint.substring(0, 80) + '...',
                timestamp: formatTimestamp(),
                statusCode: 'ERR',
                duration: duration,
                success: false,
                data: error.message
            });
        }
    }
    
    if (consoleStatus) {
        consoleStatus.textContent = 'Ready';
    }
}

// ===================================
// AUTO-REFRESH SYSTEM
// ===================================

/**
 * Toggle auto-refresh
 */
function toggleAutoRefresh() {
    STATE.autoRefreshEnabled = !STATE.autoRefreshEnabled;
    
    const btn = document.getElementById('toggleAutoRefresh');
    if (btn) {
        const icon = STATE.autoRefreshEnabled 
            ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'
            : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
        btn.innerHTML = icon;
    }
    
    if (STATE.autoRefreshEnabled) {
        startAutoRefresh();
        showToast('Auto-refresh enabled', 'success', 2000);
    } else {
        stopAutoRefresh();
        showToast('Auto-refresh paused', 'info', 2000);
    }
}

/**
 * Start auto-refresh timer
 */
function startAutoRefresh() {
    stopAutoRefresh(); // Clear any existing timer
    
    STATE.autoRefreshTimer = setInterval(() => {
        if (STATE.autoRefreshEnabled) {
            fetchScriptData();
        }
    }, CONFIG.autoRefreshInterval);
}

/**
 * Stop auto-refresh timer
 */
function stopAutoRefresh() {
    if (STATE.autoRefreshTimer) {
        clearInterval(STATE.autoRefreshTimer);
        STATE.autoRefreshTimer = null;
    }
}

// ===================================
// CLIPBOARD FUNCTIONS
// ===================================

/**
 * Copy text to clipboard
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('URL copied to clipboard', 'success', 2000);
    } catch (error) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('URL copied to clipboard', 'success', 2000);
    }
}

// ===================================
// FOOTER UPDATES
// ===================================

/**
 * Update footer information
 */
function updateFooterInfo() {
    const uptimeEl = document.getElementById('footerUptime');
    const lastUpdateEl = document.getElementById('footerLastUpdate');
    
    if (uptimeEl) {
        uptimeEl.textContent = `Uptime: ${calculateUptime()}`;
    }
    
    if (lastUpdateEl && STATE.lastUpdateTime) {
        lastUpdateEl.textContent = `Last update: ${formatTimestamp(STATE.lastUpdateTime)}`;
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Refresh test sites button
    const refreshBtn = document.getElementById('refreshTestSites');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            showToast('Refreshing site statuses...', 'info', 2000);
            renderTestSites();
        });
    }
    
    // Toggle auto-refresh button
    const toggleBtn = document.getElementById('toggleAutoRefresh');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleAutoRefresh);
    }
    
    // Clear console button
    const clearBtn = document.getElementById('clearConsole');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearConsole);
    }
    
    // Fetch script data button
    const fetchBtn = document.getElementById('fetchScriptData');
    if (fetchBtn) {
        fetchBtn.addEventListener('click', () => {
            showToast('Fetching script data...', 'info', 2000);
            fetchScriptData();
        });
    }
}

// ===================================
// LOADING OVERLAY
// ===================================

/**
 * Hide loading overlay
 */
function hideLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.add('hidden');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 350);
    }
}

// ===================================
// INITIALIZATION
// ===================================

/**
 * Initialize dashboard
 */
async function initializeDashboard() {
    if (STATE.isInitialized) return;
    
    console.log('Initializing Links Dashboard...');
    
    try {
        // Render static content
        renderDatabase();
        
        // Render and check test sites
        await renderTestSites();
        
        // Fetch initial script data
        await fetchScriptData();
        
        // Setup event listeners
        setupEventListeners();
        
        // Start auto-refresh
        startAutoRefresh();
        
        // Start footer update timer
        setInterval(updateFooterInfo, 1000);
        
        // Hide loading overlay
        hideLoadingOverlay();
        
        STATE.isInitialized = true;
        console.log('Dashboard initialized successfully');
        
        showToast('Dashboard loaded successfully', 'success', 3000);
        
    } catch (error) {
        console.error('Error initializing dashboard:', error);
        hideLoadingOverlay();
        showToast('Error loading dashboard', 'error', 5000);
    }
}

// ===================================
// PAGE LOAD
// ===================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDashboard);
} else {
    initializeDashboard();
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoRefresh();
    } else if (STATE.autoRefreshEnabled) {
        startAutoRefresh();
    }
});

// Make functions globally available
window.copyToClipboard = copyToClipboard;

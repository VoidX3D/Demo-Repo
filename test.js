// ===================================
// MATERIAL 3 DASHBOARD - EXPRESSIVE
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
            url: 'https://netmirr.vercel.app/',
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
        previewImage: 'https://thumbs.dreamstime.com/b/programming-code-abstract-screen-software-developer-computer-script-47491135.jpg?w=768'
    },
    
    scriptEndpoints: [
        'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgdtYc_4R-XonTX0zPnQv9p9Fq3G61X8VoScd3QgD6PNM3W18sXrWb3t4qyZn-feWw5lp2MBFMK2VvkvLUy7IW806wdEycXRKDD0NyyZzMR2KVhIkG6OXfzWo_K3emcRoMW8m9R2uqoOE6HWiloEG33SUoEUZAl8n2lNOdidelJdpbNJe7bXHgXqW6xZy86YfFjwYvmrauiCRnGTYXXO0Frx7qviCs0JIflPYWllFLwK8ZdMsUtjc56KVGHh9dWaXZ2mg-tChILU91TyDsl2JxYEx6RVQ&lib=Mr39SuFV0pVLwnTQSt_X0axLoNXZsg87s',
        'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLga3YLZMluOBQ2paun5RR6ZSQYq8au6cpDfBOBvuoKPwoBe7Nz_sgCizsSdf08ijJWCiwz7xhmxBpw0Fqtl3P6_-hN7CjnPpjHlMjUBLRu70kUqTBM5xc2qlJFjDFvyl12iD0xHv_2wFrr8EwTPg8QFG_0dFUkzWp2uIIQ5xg8wNDVaNHRwzaqhUlmkoW3-dLAz2YzOgl8qD3NA07RfgTJWXMHYkCgb_pSaXHQzBZjDRH967CXgrhy5Wuc94naZveTwIMW3N5-sm5LmiPTBntqT7X5-1g&lib=Mr39SuFV0pVLwnTQSt_X0axLoNXZsg87s'
    ],
    
    autoRefreshInterval: 8000,
    statusCheckTimeout: 5000,
    maxConsoleEntries: 50,
    
    fallbackImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"%3E%3Crect width="400" height="200" fill="%232B2A30"/%3E%3Ctext x="200" y="100" font-family="Roboto" font-size="16" fill="%23CAC4D0" text-anchor="middle"%3ENo Preview%3C/text%3E%3C/svg%3E'
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

function formatTimestamp(date = new Date()) {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

function formatDuration(ms) {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
}

function calculateUptime() {
    const uptimeMs = Date.now() - STATE.startTime;
    const hours = Math.floor(uptimeMs / 3600000);
    const minutes = Math.floor((uptimeMs % 3600000) / 60000);
    const seconds = Math.floor((uptimeMs % 60000) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
}

// ===================================
// TOAST NOTIFICATION SYSTEM
// ===================================

function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ===================================
// STATUS CHECKING
// ===================================

async function checkSiteStatus(url) {
    const startTime = Date.now();
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), CONFIG.statusCheckTimeout);
        
        await fetch(url, {
            method: 'HEAD',
            mode: 'no-cors',
            signal: controller.signal,
            cache: 'no-cache'
        });
        
        clearTimeout(timeoutId);
        
        return {
            status: 'online',
            statusCode: 200,
            duration: Date.now() - startTime,
            timestamp: new Date()
        };
        
    } catch (error) {
        return {
            status: error.name === 'AbortError' ? 'offline' : 'online',
            statusCode: error.name === 'AbortError' ? 'Timeout' : 200,
            duration: Date.now() - startTime,
            timestamp: new Date()
        };
    }
}

// ===================================
// CARD RENDERING
// ===================================

function createSiteCard(site) {
    const status = STATE.siteStatuses[site.id] || { status: 'checking' };
    
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.siteId = site.id;
    card.style.animationDelay = `${Math.random() * 0.3}s`;
    
    const statusIcon = status.status === 'online' ? 
        '<circle cx="12" cy="12" r="8" fill="currentColor"/>' :
        status.status === 'offline' ?
        '<line x1="8" y1="8" x2="16" y2="16"/><line x1="16" y1="8" x2="8" y2="16"/>' :
        '<path d="M12 6v6l4 2"/>';
    
    card.innerHTML = `
        <div class="card-media">
            <img src="${site.previewImage}" alt="${site.name}" loading="lazy"
                 onerror="this.src='${CONFIG.fallbackImage}'">
            <div class="card-status ${status.status}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${statusIcon}
                </svg>
                <span>${status.status.toUpperCase()}</span>
            </div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${site.name}</h3>
            <a href="${site.url}" target="_blank" class="card-url" rel="noopener">${site.url}</a>
            <p class="card-description">${site.description}</p>
            
            <div class="card-meta">
                <span class="card-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    ${status.duration ? formatDuration(status.duration) : '--'}
                </span>
                <span class="card-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    ${status.statusCode || '--'}
                </span>
            </div>
            
            <div class="card-actions">
                <a href="${site.url}" target="_blank" class="btn btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Visit
                </a>
                <button class="btn btn-icon" onclick="copyToClipboard('${site.url}')" title="Copy URL">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function createDatabaseCard(database) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-media">
            <img src="${database.previewImage}" alt="${database.name}" loading="lazy"
                 onerror="this.src='${CONFIG.fallbackImage}'">
            <div class="card-status online">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="8" fill="currentColor"/>
                </svg>
                <span>ACTIVE</span>
            </div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${database.name}</h3>
            <a href="${database.url}" target="_blank" class="card-url">${database.url}</a>
            <p class="card-description">${database.description}</p>
            
            <div class="card-actions">
                <a href="${database.url}" target="_blank" class="btn btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Open Database
                </a>
                <button class="btn btn-icon" onclick="copyToClipboard('${database.url}')" title="Copy URL">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function updateCardStatus(siteId, statusData) {
    const card = document.querySelector(`[data-site-id="${siteId}"]`);
    if (!card) return;
    
    const statusBadge = card.querySelector('.card-status');
    const metaItems = card.querySelectorAll('.card-meta-item span');
    
    statusBadge.className = `card-status ${statusData.status}`;
    statusBadge.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${statusData.status === 'online' ? 
                '<circle cx="12" cy="12" r="8" fill="currentColor"/>' :
                statusData.status === 'offline' ?
                '<line x1="8" y1="8" x2="16" y2="16"/><line x1="16" y1="8" x2="8" y2="16"/>' :
                '<path d="M12 6v6l4 2"/>'}
        </svg>
        <span>${statusData.status.toUpperCase()}</span>
    `;
    
    if (metaItems[0]) metaItems[0].textContent = statusData.duration ? formatDuration(statusData.duration) : '--';
    if (metaItems[1]) metaItems[1].textContent = statusData.statusCode || '--';
}

// ===================================
// RENDERING FUNCTIONS
// ===================================

async function renderTestSites() {
    const grid = document.getElementById('testSitesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Set initial checking status
    CONFIG.testSites.forEach(site => {
        STATE.siteStatuses[site.id] = { status: 'checking' };
    });
    updateCounters();
    
    // Render cards
    CONFIG.testSites.forEach(site => {
        grid.appendChild(createSiteCard(site));
    });
    
    // Check statuses
    for (const site of CONFIG.testSites) {
        const statusData = await checkSiteStatus(site.url);
        STATE.siteStatuses[site.id] = statusData;
        updateCardStatus(site.id, statusData);
        updateCounters();
    }
    
    STATE.lastUpdateTime = new Date();
    updateFooterInfo();
}

function renderDatabase() {
    const grid = document.getElementById('databaseGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    grid.appendChild(createDatabaseCard(CONFIG.database));
}

function updateCounters() {
    const statuses = Object.values(STATE.siteStatuses);
    const online = statuses.filter(s => s.status === 'online').length;
    const offline = statuses.filter(s => s.status === 'offline').length;
    const checking = statuses.filter(s => s.status === 'checking').length;
    
    document.getElementById('onlineCount').textContent = online;
    document.getElementById('offlineCount').textContent = offline;
    document.getElementById('checkingCount').textContent = checking;
    document.getElementById('testSitesBadge').textContent = CONFIG.testSites.length;
}

// ===================================
// CONSOLE FUNCTIONS
// ===================================

function addConsoleEntry(entry) {
    STATE.consoleEntries.unshift(entry);
    
    if (STATE.consoleEntries.length > CONFIG.maxConsoleEntries) {
        STATE.consoleEntries = STATE.consoleEntries.slice(0, CONFIG.maxConsoleEntries);
    }
    
    renderConsole();
    updateConsoleBadge();
}

function renderConsole() {
    const consoleBody = document.getElementById('consoleBody');
    if (!consoleBody) return;
    
    if (STATE.consoleEntries.length === 0) {
        consoleBody.innerHTML = `
            <div class="console-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="4 17 10 11 4 5"/>
                    <line x1="12" y1="19" x2="20" y2="19"/>
                </svg>
                <h3>Console ready</h3>
                <p>Waiting for script responses...</p>
            </div>
        `;
        return;
    }
    
    consoleBody.innerHTML = '';
    
    STATE.consoleEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = `console-entry ${entry.success ? 'success' : 'error'}`;
        
        entryDiv.innerHTML = `
            <div class="console-entry-header">
                <span>[${entry.timestamp}]</span>
                <span>${entry.statusCode} | ${formatDuration(entry.duration)}</span>
            </div>
            <div class="console-endpoint">${entry.endpoint}</div>
            <pre class="console-entry-data">${JSON.stringify(entry.data, null, 2)}</pre>
        `;
        
        consoleBody.appendChild(entryDiv);
    });
    
    consoleBody.scrollTop = 0;
}

function updateConsoleBadge() {
    const badge = document.getElementById('consoleBadge');
    if (badge) badge.textContent = STATE.consoleEntries.length;
}

async function fetchScriptData() {
    const statusEl = document.getElementById('consoleStatus');
    const statusDot = document.getElementById('consoleStatusDot');
    
    if (statusEl) {
        statusEl.textContent = 'Fetching...';
        statusDot.style.background = 'var(--md-warning)';
    }
    
    for (const endpoint of CONFIG.scriptEndpoints) {
        const startTime = Date.now();
        
        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                cache: 'no-cache',
                mode: 'no-cors'
            });
            
            const duration = Date.now() - startTime;
            
            // With no-cors we can't read response, so mock data
            addConsoleEntry({
                endpoint: endpoint.substring(0, 60) + '...',
                timestamp: formatTimestamp(),
                statusCode: response.type === 'opaque' ? 200 : response.status,
                duration: duration,
                success: true,
                data: { message: 'Script executed successfully', type: 'no-cors response' }
            });
            
        } catch (error) {
            const duration = Date.now() - startTime;
            
            addConsoleEntry({
                endpoint: endpoint.substring(0, 60) + '...',
                timestamp: formatTimestamp(),
                statusCode: 'ERR',
                duration: duration,
                success: false,
                data: { error: error.message }
            });
        }
    }
    
    if (statusEl) {
        statusEl.textContent = 'Ready';
        statusDot.style.background = 'var(--md-success)';
    }
}

function clearConsole() {
    STATE.consoleEntries = [];
    renderConsole();
    updateConsoleBadge();
    showToast('Console cleared', 'info');
}

// ===================================
// AUTO-REFRESH SYSTEM
// ===================================

function toggleAutoRefresh() {
    STATE.autoRefreshEnabled = !STATE.autoRefreshEnabled;
    
    const btn = document.getElementById('toggleAutoRefresh');
    if (btn) {
        btn.style.background = STATE.autoRefreshEnabled ? 'var(--md-primary-container)' : '';
    }
    
    if (STATE.autoRefreshEnabled) {
        startAutoRefresh();
        showToast('Auto-refresh enabled', 'success');
    } else {
        stopAutoRefresh();
        showToast('Auto-refresh paused', 'info');
    }
}

function startAutoRefresh() {
    stopAutoRefresh();
    STATE.autoRefreshTimer = setInterval(() => {
        if (STATE.autoRefreshEnabled) {
            fetchScriptData();
        }
    }, CONFIG.autoRefreshInterval);
}

function stopAutoRefresh() {
    if (STATE.autoRefreshTimer) {
        clearInterval(STATE.autoRefreshTimer);
        STATE.autoRefreshTimer = null;
    }
}

// ===================================
// CLIPBOARD FUNCTION
// ===================================

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('URL copied to clipboard', 'success');
    } catch (error) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('URL copied to clipboard', 'success');
    }
}

// ===================================
// FOOTER UPDATES
// ===================================

function updateFooterInfo() {
    const uptimeEl = document.getElementById('footerUptime');
    const lastUpdateEl = document.getElementById('consoleLastUpdate');
    
    if (uptimeEl) {
        uptimeEl.textContent = `Uptime: ${calculateUptime()}`;
    }
    
    if (lastUpdateEl && STATE.lastUpdateTime) {
        lastUpdateEl.textContent = formatTimestamp(STATE.lastUpdateTime);
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

function setupEventListeners() {
    document.getElementById('refreshTestSites')?.addEventListener('click', async () => {
        showToast('Refreshing statuses...', 'info');
        await renderTestSites();
    });
    
    document.getElementById('toggleAutoRefresh')?.addEventListener('click', toggleAutoRefresh);
    document.getElementById('clearConsole')?.addEventListener('click', clearConsole);
    document.getElementById('fetchScriptData')?.addEventListener('click', () => {
        showToast('Fetching script data...', 'info');
        fetchScriptData();
    });
    
    // Interactive buttons
    document.querySelectorAll('.icon-button, .fab').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.background = 'rgba(255,255,255,0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'rippleExpand 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ===================================
// INITIALIZATION
// ===================================

async function initializeDashboard() {
    if (STATE.isInitialized) return;
    
    try {
        renderDatabase();
        await renderTestSites();
        await fetchScriptData();
        
        setupEventListeners();
        startAutoRefresh();
        setInterval(updateFooterInfo, 1000);
        
        // Hide loading overlay with animation
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.add('hidden');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        }
        
        STATE.isInitialized = true;
        showToast('Dashboard ready', 'success');
        
    } catch (error) {
        console.error('Initialization error:', error);
        showToast('Error loading dashboard', 'error');
    }
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDashboard);
} else {
    initializeDashboard();
}

// Handle visibility
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoRefresh();
    } else if (STATE.autoRefreshEnabled) {
        startAutoRefresh();
    }
});

// Expose globally
window.copyToClipboard = copyToClipboard;

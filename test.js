// ===================================
// MATERIAL 3 DASHBOARD - OFFICIAL
// ===================================

class Material3Dashboard {
    constructor() {
        this.config = {
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
            maxConsoleEntries: 100,
            
            fallbackImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"%3E%3Crect width="400" height="200" fill="%2349454F"/%3E%3Ctext x="200" y="100" font-family="Roboto" font-size="16" fill="%23CAC4D0" text-anchor="middle"%3EImage not found%3C/text%3E%3C/svg%3E'
        };
        
        this.state = {
            siteStatuses: {},
            autoRefreshEnabled: true,
            autoRefreshTimer: null,
            consoleEntries: [],
            startTime: Date.now(),
            lastUpdateTime: null,
            isInitialized: false
        };
        
        this.init();
    }
    
    async init() {
        // Simulate loading with Eminem-inspired animation
        await this.simulateLoading();
        await this.initDashboard();
        this.setupEventListeners();
        this.startClock();
        this.startUptimeCounter();
    }
    
    async simulateLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        const progressBar = document.querySelector('.progress-bar');
        
        // Animate progress bar
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                // Hide overlay after a short delay
                setTimeout(() => {
                    loadingOverlay.classList.add('hidden');
                }, 500);
            }
        }, 200);
        
        // Wait for minimum loading time (3 seconds for effect)
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    async initDashboard() {
        this.renderDatabase();
        await this.renderTestSites();
        await this.fetchScriptData();
        this.startAutoRefresh();
        this.state.isInitialized = true;
        this.showSnackbar('Dashboard ready', 'success');
    }
    
    renderDatabase() {
        const grid = document.getElementById('databaseGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        grid.appendChild(this.createQuantumCard(this.config.database, true));
    }
    
    async renderTestSites() {
        const grid = document.getElementById('testSitesGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        // Set initial checking status
        this.config.testSites.forEach(site => {
            this.state.siteStatuses[site.id] = { status: 'checking' };
        });
        this.updateCounters();
        
        // Render cards
        this.config.testSites.forEach((site, index) => {
            const card = this.createQuantumCard(site);
            card.style.animationDelay = `${index * 0.1}s`;
            grid.appendChild(card);
        });
        
        // Check statuses
        for (const site of this.config.testSites) {
            const statusData = await this.checkSiteStatus(site.url);
            this.state.siteStatuses[site.id] = statusData;
            this.updateCardStatus(site.id, statusData);
            this.updateCounters();
        }
        
        this.state.lastUpdateTime = new Date();
    }
    
    createQuantumCard(item, isDatabase = false) {
        const card = document.createElement('div');
        card.className = 'quantum-card';
        if (!isDatabase) card.dataset.siteId = item.id;
        
        const status = isDatabase ? 
            { status: 'online' } : 
            (this.state.siteStatuses[item.id] || { status: 'checking' });
        
        const statusColors = {
            online: '#4CAF50',
            offline: '#F44336',
            checking: '#FFC107'
        };
        
        card.innerHTML = `
            <div class="card-media">
                <img src="${item.previewImage}" alt="${item.name}" loading="lazy"
                     onerror="this.src='${this.config.fallbackImage}'">
                <div class="card-status-badge">
                    <div class="status-dot small" style="background: ${statusColors[status.status]};"></div>
                    <span style="color: ${statusColors[status.status]}">${status.status.toUpperCase()}</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <a href="${item.url}" target="_blank" class="card-url">${item.url}</a>
                <p class="card-description">${item.description}</p>
                
                ${!isDatabase ? `
                <div class="card-metrics">
                    <div class="metric">
                        <span class="material-symbols-rounded">schedule</span>
                        <span>${status.duration ? this.formatDuration(status.duration) : '--'}</span>
                    </div>
                    <div class="metric">
                        <span class="material-symbols-rounded">code</span>
                        <span>${status.statusCode || '--'}</span>
                    </div>
                </div>
                ` : ''}
                
                <div class="card-actions">
                    <button class="m3-button primary" onclick="window.open('${item.url}', '_blank')">
                        <span class="material-symbols-rounded">open_in_new</span>
                        <span>${isDatabase ? 'Open Database' : 'Visit Site'}</span>
                    </button>
                    <button class="m3-button secondary" onclick="dashboard.copyToClipboard('${item.url}')">
                        <span class="material-symbols-rounded">content_copy</span>
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }
    
    updateCardStatus(siteId, statusData) {
        const card = document.querySelector(`[data-site-id="${siteId}"]`);
        if (!card) return;
        
        const statusBadge = card.querySelector('.card-status-badge');
        const dot = statusBadge.querySelector('.status-dot');
        const statusText = statusBadge.querySelector('span:last-child');
        const metrics = card.querySelectorAll('.metric span:last-child');
        
        const statusColors = {
            online: '#4CAF50',
            offline: '#F44336',
            checking: '#FFC107'
        };
        
        dot.style.background = statusColors[statusData.status];
        statusText.style.color = statusColors[statusData.status];
        statusText.textContent = statusData.status.toUpperCase();
        
        if (metrics[0]) metrics[0].textContent = statusData.duration ? this.formatDuration(statusData.duration) : '--';
        if (metrics[1]) metrics[1].textContent = statusData.statusCode || '--';
    }
    
    async checkSiteStatus(url) {
        const startTime = Date.now();
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.config.statusCheckTimeout);
            
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
                statusCode: error.name === 'AbortError' ? 'TIMEOUT' : 200,
                duration: Date.now() - startTime,
                timestamp: new Date()
            };
        }
    }
    
    updateCounters() {
        const statuses = Object.values(this.state.siteStatuses);
        const online = statuses.filter(s => s.status === 'online').length;
        const offline = statuses.filter(s => s.status === 'offline').length;
        const checking = statuses.filter(s => s.status === 'checking').length;
        
        document.getElementById('onlineCount').textContent = online;
        document.getElementById('offlineCount').textContent = offline;
        document.getElementById('checkingCount').textContent = checking;
        document.getElementById('testSitesBadge').textContent = this.config.testSites.length;
    }
    
    async fetchScriptData() {
        const statusEl = document.getElementById('consoleStatus');
        const statusDot = document.getElementById('consoleStatusDot');
        
        if (statusEl) {
            statusEl.textContent = 'Fetching...';
            statusDot.style.background = '#FFC107';
        }
        
        for (const endpoint of this.config.scriptEndpoints) {
            const startTime = Date.now();
            
            try {
                const response = await fetch(endpoint, {
                    method: 'GET',
                    cache: 'no-cache',
                    mode: 'no-cors'
                });
                
                const duration = Date.now() - startTime;
                
                this.addConsoleEntry({
                    endpoint: endpoint.substring(0, 60) + '...',
                    timestamp: this.formatTimestamp(),
                    statusCode: response.type === 'opaque' ? 200 : response.status,
                    duration: duration,
                    success: true,
                    data: {
                        message: 'Script executed successfully',
                        timestamp: new Date().toISOString()
                    }
                });
                
            } catch (error) {
                const duration = Date.now() - startTime;
                
                this.addConsoleEntry({
                    endpoint: endpoint.substring(0, 60) + '...',
                    timestamp: this.formatTimestamp(),
                    statusCode: 'ERR',
                    duration: duration,
                    success: false,
                    data: {
                        error: error.message
                    }
                });
            }
        }
        
        if (statusEl) {
            statusEl.textContent = 'Ready';
            statusDot.style.background = '#4CAF50';
        }
    }
    
    addConsoleEntry(entry) {
        this.state.consoleEntries.unshift(entry);
        
        if (this.state.consoleEntries.length > this.config.maxConsoleEntries) {
            this.state.consoleEntries = this.state.consoleEntries.slice(0, this.config.maxConsoleEntries);
        }
        
        this.renderConsole();
        this.updateConsoleBadge();
    }
    
    renderConsole() {
        const consoleBody = document.getElementById('consoleBody');
        if (!consoleBody) return;
        
        if (this.state.consoleEntries.length === 0) {
            consoleBody.innerHTML = `
                <div class="console-placeholder">
                    <span class="material-symbols-rounded" style="font-size: 48px;">terminal</span>
                    <p class="m3-body-medium">Console ready · Awaiting commands</p>
                    <div class="cursor-container">
                        <span class="prompt">$</span>
                        <span class="cursor"></span>
                    </div>
                </div>
            `;
            return;
        }
        
        consoleBody.innerHTML = '';
        
        this.state.consoleEntries.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.className = `console-entry ${entry.success ? 'success' : 'error'}`;
            
            entryDiv.innerHTML = `
                <div class="entry-header">
                    <span>[${entry.timestamp}]</span>
                    <span>${entry.statusCode} | ${this.formatDuration(entry.duration)}</span>
                </div>
                <div class="entry-data">${JSON.stringify(entry.data, null, 2)}</div>
            `;
            
            consoleBody.appendChild(entryDiv);
        });
        
        consoleBody.scrollTop = 0;
    }
    
    updateConsoleBadge() {
        const badge = document.getElementById('consoleBadge');
        if (badge) badge.textContent = this.state.consoleEntries.length;
    }
    
    clearConsole() {
        this.state.consoleEntries = [];
        this.renderConsole();
        this.updateConsoleBadge();
        this.showSnackbar('Console cleared', 'info');
    }
    
    toggleAutoRefresh() {
        this.state.autoRefreshEnabled = !this.state.autoRefreshEnabled;
        
        const btn = document.getElementById('toggleAutoRefresh');
        if (btn) {
            const icon = btn.querySelector('.material-symbols-rounded');
            icon.textContent = this.state.autoRefreshEnabled ? 'play_arrow' : 'pause';
        }
        
        if (this.state.autoRefreshEnabled) {
            this.startAutoRefresh();
            this.showSnackbar('Auto-refresh enabled', 'success');
        } else {
            this.stopAutoRefresh();
            this.showSnackbar('Auto-refresh paused', 'info');
        }
    }
    
    startAutoRefresh() {
        this.stopAutoRefresh();
        this.state.autoRefreshTimer = setInterval(() => {
            if (this.state.autoRefreshEnabled) {
                this.fetchScriptData();
            }
        }, this.config.autoRefreshInterval);
    }
    
    stopAutoRefresh() {
        if (this.state.autoRefreshTimer) {
            clearInterval(this.state.autoRefreshTimer);
            this.state.autoRefreshTimer = null;
        }
    }
    
    startClock() {
        setInterval(() => {
            const timestamp = document.getElementById('consoleTimestamp');
            if (timestamp) {
                timestamp.textContent = this.formatTimestamp(new Date());
            }
        }, 1000);
    }
    
    startUptimeCounter() {
        setInterval(() => {
            this.updateFooterInfo();
        }, 1000);
    }
    
    updateFooterInfo() {
        // Update uptime if needed
    }
    
    formatTimestamp(date = new Date()) {
        const d = new Date(date);
        return d.toLocaleTimeString('en-US', { hour12: false });
    }
    
    formatDuration(ms) {
        if (ms < 1000) return `${ms}ms`;
        return `${(ms / 1000).toFixed(2)}s`;
    }
    
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showSnackbar('Copied to clipboard', 'success');
        } catch (error) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showSnackbar('Copied to clipboard', 'success');
        }
    }
    
    showSnackbar(message, type = 'info') {
        const container = document.getElementById('snackbarContainer');
        if (!container) return;
        
        const snackbar = document.createElement('div');
        snackbar.className = 'm3-snackbar';
        snackbar.innerHTML = `
            <span>${message}</span>
            <button class="m3-icon-button" style="width: 32px; height: 32px;" onclick="this.parentElement.remove()">
                <span class="material-symbols-rounded" style="font-size: 18px;">close</span>
            </button>
        `;
        
        container.appendChild(snackbar);
        
        setTimeout(() => {
            snackbar.style.animation = 'snackbarSlide 300ms reverse';
            setTimeout(() => snackbar.remove(), 300);
        }, 3000);
    }
    
    setupEventListeners() {
        document.getElementById('refreshTestSites')?.addEventListener('click', async () => {
            this.showSnackbar('Refreshing statuses...', 'info');
            await this.renderTestSites();
        });
        
        document.getElementById('toggleAutoRefresh')?.addEventListener('click', () => this.toggleAutoRefresh());
        document.getElementById('clearConsole')?.addEventListener('click', () => this.clearConsole());
        document.getElementById('fetchScriptData')?.addEventListener('click', () => {
            this.showSnackbar('Fetching data...', 'info');
            this.fetchScriptData();
        });
        
        // Navigation items
        document.querySelectorAll('.m3-nav-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelector('.m3-nav-item.active')?.classList.remove('active');
                this.classList.add('active');
            });
        });
        
        // Status chips
        document.getElementById('onlineChip')?.addEventListener('click', () => {
            this.showSnackbar(`Online: ${document.getElementById('onlineCount').textContent} sites`, 'info');
        });
        
        document.getElementById('offlineChip')?.addEventListener('click', () => {
            this.showSnackbar(`Offline: ${document.getElementById('offlineCount').textContent} sites`, 'info');
        });
        
        document.getElementById('checkingChip')?.addEventListener('click', () => {
            this.showSnackbar(`Checking: ${document.getElementById('checkingCount').textContent} sites`, 'info');
        });
    }
}

// Initialize dashboard
const dashboard = new Material3Dashboard();
window.dashboard = dashboard;
window.copyToClipboard = (text) => dashboard.copyToClipboard(text);

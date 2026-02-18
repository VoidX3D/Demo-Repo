// ===================================
// MATERIAL 3 DASHBOARD - SLIM SHADY EDITION
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
            isInitialized: false,
            musicEnabled: true,
            musicPlaying: false,
            currentView: 'dashboard',
            drawerOpen: false,
            analytics: {
                requests: 0,
                avgResponse: 0,
                successRate: 100,
                history: []
            }
        };
        
        this.charts = {};
        this.init();
    }
    
    async init() {
        // Initialize audio
        this.audio = document.getElementById('eminemAudio');
        this.audio.volume = 0.5;
        
        // Simulate loading with Eminem music
        await this.simulateLoading();
        await this.initDashboard();
        this.initCharts();
        this.setupEventListeners();
        this.startClock();
        this.startUptimeCounter();
    }
    
    async simulateLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        const progressBar = document.querySelector('.progress-bar');
        const loadingText = document.getElementById('loadingText');
        const loadingPercent = document.getElementById('loadingPercent');
        
        // Start music if enabled
        if (this.state.musicEnabled) {
            try {
                await this.audio.play();
                this.state.musicPlaying = true;
            } catch (e) {
                console.log('Audio playback failed (autoplay restrictions)');
            }
        }
        
        const loadingSteps = [
            { text: 'CONNECTING TO 8 MILE...', duration: 800 },
            { text: 'SPINNING THE VINYL...', duration: 600 },
            { text: 'WAKING UP SLIM SHADY...', duration: 700 },
            { text: 'LOADING DETROIT MAPS...', duration: 500 },
            { text: 'INITIALIZING DASHBOARD...', duration: 600 },
            { text: 'ALMOST THERE...', duration: 400 }
        ];
        
        let progress = 0;
        
        for (const step of loadingSteps) {
            loadingText.textContent = step.text;
            await this.delay(step.duration);
            
            progress += Math.floor(100 / loadingSteps.length);
            loadingPercent.textContent = Math.min(progress, 99) + '%';
            
            // Update visualizer bars
            document.querySelectorAll('.bar').forEach((bar, i) => {
                bar.style.height = Math.random() * 40 + 10 + 'px';
            });
        }
        
        loadingText.textContent = 'READY TO ROCK!';
        loadingPercent.textContent = '100%';
        
        await this.delay(500);
        loadingOverlay.classList.add('hidden');
        
        // Show now playing bar
        if (this.state.musicPlaying) {
            document.getElementById('nowPlayingBar').classList.add('active');
        }
    }
    
    async initDashboard() {
        this.renderDatabase();
        await this.renderTestSites();
        await this.fetchScriptData();
        this.startAutoRefresh();
        this.updateStats();
        this.state.isInitialized = true;
        this.showSnackbar('Welcome to the Slim Shady Dashboard!', 'success');
    }
    
    initCharts() {
        // Response Time Chart
        const responseCtx = document.getElementById('responseChart')?.getContext('2d');
        if (responseCtx) {
            this.charts.response = new Chart(responseCtx, {
                type: 'line',
                data: {
                    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
                    datasets: [{
                        label: 'Response Time (ms)',
                        data: Array.from({ length: 24 }, () => Math.random() * 200 + 100),
                        borderColor: '#D0BCFF',
                        backgroundColor: 'rgba(208, 188, 255, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        }
        
        // Status Chart
        const statusCtx = document.getElementById('statusChart')?.getContext('2d');
        if (statusCtx) {
            this.charts.status = new Chart(statusCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Online', 'Offline', 'Checking'],
                    datasets: [{
                        data: [0, 0, 0],
                        backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom' }
                    },
                    cutout: '70%'
                }
            });
        }
        
        // Volume Chart
        const volumeCtx = document.getElementById('volumeChart')?.getContext('2d');
        if (volumeCtx) {
            this.charts.volume = new Chart(volumeCtx, {
                type: 'bar',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Requests',
                        data: [65, 72, 80, 68, 85, 92, 88],
                        backgroundColor: '#D0BCFF'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }
        
        // Status Codes Chart
        const codesCtx = document.getElementById('statusCodesChart')?.getContext('2d');
        if (codesCtx) {
            this.charts.codes = new Chart(codesCtx, {
                type: 'pie',
                data: {
                    labels: ['200 OK', '404 Not Found', '500 Error', 'Timeout'],
                    datasets: [{
                        data: [85, 8, 5, 2],
                        backgroundColor: ['#4CAF50', '#FFC107', '#F44336', '#9C27B0']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }
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
            this.updateAnalytics(statusData);
        }
        
        this.state.lastUpdateTime = new Date();
    }
    
    updateAnalytics(statusData) {
        this.state.analytics.requests++;
        
        // Update average response time
        const total = this.state.analytics.avgResponse * (this.state.analytics.requests - 1) + statusData.duration;
        this.state.analytics.avgResponse = total / this.state.analytics.requests;
        
        // Update success rate
        const onlineCount = Object.values(this.state.siteStatuses).filter(s => s.status === 'online').length;
        const totalCount = Object.values(this.state.siteStatuses).length;
        this.state.analytics.successRate = Math.round((onlineCount / totalCount) * 100);
        
        // Update UI
        this.updateStats();
    }
    
    updateStats() {
        document.getElementById('avgResponse').textContent = Math.round(this.state.analytics.avgResponse) + 'ms';
        document.getElementById('requestCount').textContent = this.state.analytics.requests;
        document.getElementById('successRate').textContent = this.state.analytics.successRate + '%';
        
        // Update charts
        if (this.charts.status) {
            const statuses = Object.values(this.state.siteStatuses);
            const online = statuses.filter(s => s.status === 'online').length;
            const offline = statuses.filter(s => s.status === 'offline').length;
            const checking = statuses.filter(s => s.status === 'checking').length;
            
            this.charts.status.data.datasets[0].data = [online, offline, checking];
            this.charts.status.update();
        }
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
                    <button class="m3-button primary" onclick="window.dashboard.visitSite('${item.url}')">
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
    
    visitSite(url) {
        window.open(url, '_blank');
        this.showSnackbar('Opening site...', 'info');
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
        document.getElementById('totalCount').textContent = statuses.length;
        document.getElementById('testSitesBadge').textContent = this.config.testSites.length;
    }
    
    async fetchScriptData() {
        const statusEl = document.getElementById('consoleStatus');
        const statusDot = document.getElementById('consoleStatusDot');
        
        if (statusEl) {
            statusEl.textContent = 'FETCHING...';
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
            statusEl.textContent = 'READY';
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
        const consoleBody = document.getElementById('consoleFullOutput');
        if (!consoleBody) return;
        
        if (this.state.consoleEntries.length === 0) {
            consoleBody.innerHTML = `
                <div class="console-line">
                    <span class="line-prompt">$</span>
                    <span class="line-text">System ready · Type 'help' for commands</span>
                </div>
            `;
            return;
        }
        
        consoleBody.innerHTML = '';
        
        this.state.consoleEntries.slice(0, 50).forEach(entry => {
            const line = document.createElement('div');
            line.className = 'console-line';
            line.innerHTML = `
                <span class="line-prompt">[${entry.timestamp}]</span>
                <span class="line-text" style="color: ${entry.success ? '#4CAF50' : '#F44336'}">
                    ${entry.endpoint} → ${entry.statusCode} (${this.formatDuration(entry.duration)})
                </span>
            `;
            consoleBody.appendChild(line);
        });
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
            const uptime = this.calculateUptime();
            document.getElementById('uptimeValue').textContent = uptime;
        }, 1000);
    }
    
    calculateUptime() {
        const uptimeMs = Date.now() - this.state.startTime;
        const hours = Math.floor(uptimeMs / 3600000);
        const minutes = Math.floor((uptimeMs % 3600000) / 60000);
        return `${hours}h ${minutes}m`;
    }
    
    formatTimestamp(date = new Date()) {
        return date.toLocaleTimeString('en-US', { hour12: false });
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
    
    toggleDrawer() {
        this.state.drawerOpen = !this.state.drawerOpen;
        const drawer = document.getElementById('navDrawer');
        if (drawer) {
            drawer.classList.toggle('open', this.state.drawerOpen);
        }
    }
    
    switchView(viewName) {
        // Update view
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(viewName + 'View')?.classList.add('active');
        
        // Update drawer items
        document.querySelectorAll('.drawer-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.view === viewName) {
                item.classList.add('active');
            }
        });
        
        this.state.currentView = viewName;
        this.showSnackbar(`Switched to ${viewName} view`, 'info');
        
        // Close drawer on mobile
        if (window.innerWidth <= 768) {
            this.toggleDrawer();
        }
    }
    
    toggleMusic() {
        if (this.state.musicPlaying) {
            this.audio.pause();
            this.state.musicPlaying = false;
            document.getElementById('playIcon').textContent = 'play_circle';
            document.getElementById('nowPlayingBar').classList.remove('active');
        } else {
            this.audio.play();
            this.state.musicPlaying = true;
            document.getElementById('playIcon').textContent = 'pause_circle';
            document.getElementById('nowPlayingBar').classList.add('active');
        }
    }
    
    setVolume(volume) {
        this.audio.volume = volume / 100;
        const icon = document.getElementById('volumeIcon');
        if (volume === 0) {
            icon.textContent = 'volume_off';
        } else if (volume < 50) {
            icon.textContent = 'volume_down';
        } else {
            icon.textContent = 'volume_up';
        }
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    setupEventListeners() {
        // Menu button
        document.getElementById('menuBtn')?.addEventListener('click', () => this.toggleDrawer());
        
        // Navigation items
        document.querySelectorAll('.drawer-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                if (view) this.switchView(view);
            });
        });
        
        // Refresh button
        document.getElementById('refreshTestSites')?.addEventListener('click', async () => {
            this.showSnackbar('Refreshing statuses...', 'info');
            await this.renderTestSites();
        });
        
        // Add site button
        document.getElementById('addSiteBtn')?.addEventListener('click', () => {
            document.getElementById('addSiteModal').classList.add('active');
        });
        
        // Modal close
        document.getElementById('closeModal')?.addEventListener('click', () => {
            document.getElementById('addSiteModal').classList.remove('active');
        });
        
        document.getElementById('cancelModal')?.addEventListener('click', () => {
            document.getElementById('addSiteModal').classList.remove('active');
        });
        
        // Save site
        document.getElementById('saveSite')?.addEventListener('click', () => {
            const name = document.getElementById('siteName').value;
            const url = document.getElementById('siteUrl').value;
            
            if (name && url) {
                this.config.testSites.push({
                    id: 'custom-' + Date.now(),
                    name: name,
                    url: url,
                    description: document.getElementById('siteDescription').value || 'Custom site',
                    previewImage: document.getElementById('siteImage').value || this.config.fallbackImage
                });
                
                this.renderTestSites();
                document.getElementById('addSiteModal').classList.remove('active');
                this.showSnackbar('Site added successfully!', 'success');
            }
        });
        
        // Settings
        document.getElementById('autoRefreshToggle')?.addEventListener('change', (e) => {
            this.state.autoRefreshEnabled = e.target.checked;
            if (this.state.autoRefreshEnabled) {
                this.startAutoRefresh();
            } else {
                this.stopAutoRefresh();
            }
        });
        
        document.getElementById('refreshInterval')?.addEventListener('change', (e) => {
            this.config.autoRefreshInterval = parseInt(e.target.value);
            this.startAutoRefresh();
            this.showSnackbar(`Refresh interval updated to ${this.config.autoRefreshInterval/1000}s`, 'success');
        });
        
        document.getElementById('musicToggle')?.addEventListener('change', (e) => {
            this.state.musicEnabled = e.target.checked;
            if (!this.state.musicEnabled && this.state.musicPlaying) {
                this.toggleMusic();
            }
        });
        
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelector('.theme-option.active')?.classList.remove('active');
                this.classList.add('active');
                // Theme switching logic would go here
            });
        });
        
        // Save settings
        document.getElementById('saveSettings')?.addEventListener('click', () => {
            this.showSnackbar('Settings saved successfully!', 'success');
        });
        
        // Music controls
        document.getElementById('playPause')?.addEventListener('click', () => this.toggleMusic());
        
        document.getElementById('volumeSlider')?.addEventListener('input', (e) => {
            this.setVolume(e.target.value);
        });
        
        document.getElementById('closeNowPlaying')?.addEventListener('click', () => {
            document.getElementById('nowPlayingBar').classList.remove('active');
            if (this.state.musicPlaying) {
                this.audio.pause();
                this.state.musicPlaying = false;
            }
        });
        
        document.getElementById('testMusicBtn')?.addEventListener('click', () => {
            this.toggleMusic();
            document.getElementById('nowPlayingBar').classList.add('active');
        });
        
        // Console
        document.getElementById('consoleClear')?.addEventListener('click', () => this.clearConsole());
        
        document.getElementById('consoleSend')?.addEventListener('click', () => {
            const input = document.getElementById('consoleInput');
            const command = input.value;
            
            if (command) {
                this.addConsoleEntry({
                    endpoint: 'user command',
                    timestamp: this.formatTimestamp(),
                    statusCode: 'CMD',
                    duration: 0,
                    success: true,
                    data: { command: command, output: 'Command executed' }
                });
                input.value = '';
            }
        });
        
        document.getElementById('consoleInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('consoleSend').click();
            }
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
        
        // Time chips
        document.querySelectorAll('.time-chip').forEach(chip => {
            chip.addEventListener('click', function() {
                document.querySelector('.time-chip.active')?.classList.remove('active');
                this.classList.add('active');
            });
        });
    }
}

// Initialize dashboard
const dashboard = new Material3Dashboard();
window.dashboard = dashboard;

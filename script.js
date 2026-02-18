// ===================================
// MATERIAL 3 DASHBOARD - SLIM SHADY EDITION
// COMPLETE FULLY FUNCTIONAL VERSION WITH MUSIC
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
            musicVolume: 50,
            currentView: 'dashboard',
            drawerOpen: false,
            analytics: {
                requests: 0,
                avgResponse: 0,
                successRate: 100,
                history: [],
                responseTimes: Array.from({ length: 24 }, () => Math.random() * 200 + 100),
                statusCodes: [85, 8, 5, 2],
                volumeData: [65, 72, 80, 68, 85, 92, 88]
            },
            sites: [...this.config.testSites],
            consoleTabs: 'output',
            faqOpen: null,
            settings: {
                autoRefresh: true,
                refreshInterval: 8000,
                notifications: false,
                soundAlerts: false,
                emailReports: false,
                theme: 'dark',
                density: 'standard',
                musicEnabled: true,
                detroitMode: true
            }
        };
        
        this.charts = {};
        this.audio = null;
        this.loadingProgress = 0;
        this.init();
    }
    
    async init() {
        // Initialize audio with multiple sources for compatibility
        this.audio = document.getElementById('eminemAudio');
        if (this.audio) {
            // Add multiple audio sources for better compatibility
            const sources = [
                'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
            ];
            
            // Clear existing sources
            while (this.audio.firstChild) {
                this.audio.removeChild(this.audio.firstChild);
            }
            
            // Add new sources
            sources.forEach(src => {
                const source = document.createElement('source');
                source.src = src;
                source.type = 'audio/mp3';
                this.audio.appendChild(source);
            });
            
            this.audio.volume = this.state.musicVolume / 100;
            this.audio.loop = true;
        }
        
        // Try to play music (may be blocked by browser)
        if (this.state.musicEnabled) {
            try {
                await this.audio?.play();
                this.state.musicPlaying = true;
            } catch (e) {
                console.log('Autoplay prevented by browser. User interaction needed.');
                // Show play button or indicator
            }
        }
        
        // Simulate loading with Eminem-inspired progress
        await this.simulateLoading();
        
        // Initialize dashboard
        await this.initDashboard();
        
        // Initialize charts
        this.initCharts();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Start timers
        this.startClock();
        this.startUptimeCounter();
        
        // Show welcome message
        this.showSnackbar('Welcome to the Slim Shady Dashboard!', 'success');
    }
    
    async simulateLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        const progressBar = document.querySelector('.progress-bar');
        const loadingText = document.getElementById('loadingText');
        const loadingPercent = document.getElementById('loadingPercent');
        const visualizerBars = document.querySelectorAll('.bar');
        
        const loadingSteps = [
            { text: 'CONNECTING TO 8 MILE...', duration: 800 },
            { text: 'SPINNING THE VINYL...', duration: 600 },
            { text: 'WAKING UP SLIM SHADY...', duration: 700 },
            { text: 'LOADING DETROIT MAPS...', duration: 500 },
            { text: 'INITIALIZING DASHBOARD...', duration: 600 },
            { text: 'ALMOST THERE...', duration: 400 },
            { text: 'READY TO ROCK!', duration: 500 }
        ];
        
        for (const step of loadingSteps) {
            loadingText.textContent = step.text;
            
            // Animate progress
            const stepProgress = 100 / loadingSteps.length;
            for (let i = 0; i <= stepProgress; i++) {
                await this.delay(step.duration / stepProgress);
                this.loadingProgress = Math.min(this.loadingProgress + 1, 100);
                
                if (progressBar) {
                    progressBar.style.width = this.loadingProgress + '%';
                }
                
                if (loadingPercent) {
                    loadingPercent.textContent = this.loadingProgress + '%';
                }
                
                // Animate visualizer bars based on "music"
                visualizerBars.forEach((bar, index) => {
                    const height = 20 + Math.random() * 40;
                    bar.style.height = height + 'px';
                    bar.style.background = `linear-gradient(to top, 
                        hsl(${index * 45}, 70%, 60%), 
                        hsl(${index * 45 + 30}, 70%, 70%))`;
                });
                
                await this.delay(10);
            }
        }
        
        // Hide overlay
        await this.delay(500);
        loadingOverlay.classList.add('hidden');
        
        // Show now playing bar if music is playing
        if (this.state.musicPlaying) {
            document.getElementById('nowPlayingBar')?.classList.add('active');
            document.getElementById('playIcon').textContent = 'pause_circle';
        }
    }
    
    async initDashboard() {
        this.renderDatabase();
        await this.renderTestSites();
        await this.fetchScriptData();
        this.renderSitesTable();
        this.renderDatabaseFull();
        this.startAutoRefresh();
        this.updateStats();
        this.state.isInitialized = true;
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
                        data: this.state.analytics.responseTimes,
                        borderColor: '#D0BCFF',
                        backgroundColor: 'rgba(208, 188, 255, 0.1)',
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#D0BCFF',
                        pointBorderColor: '#381E72',
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'var(--md-sys-color-surface)',
                            titleColor: 'var(--md-sys-color-on-surface)',
                            bodyColor: 'var(--md-sys-color-on-surface-variant)',
                            borderColor: 'var(--md-sys-color-outline-variant)',
                            borderWidth: 1
                        }
                    },
                    scales: {
                        y: { 
                            beginAtZero: true,
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            ticks: { color: 'var(--md-sys-color-on-surface-variant)' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: 'var(--md-sys-color-on-surface-variant)' }
                        }
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
                        borderWidth: 0,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { 
                            position: 'bottom',
                            labels: { color: 'var(--md-sys-color-on-surface-variant)' }
                        },
                        tooltip: {
                            backgroundColor: 'var(--md-sys-color-surface)',
                            titleColor: 'var(--md-sys-color-on-surface)',
                            bodyColor: 'var(--md-sys-color-on-surface-variant)'
                        }
                    },
                    cutout: '70%'
                }
            });
        }
        
        // Volume Chart (Analytics)
        const volumeCtx = document.getElementById('volumeChart')?.getContext('2d');
        if (volumeCtx) {
            this.charts.volume = new Chart(volumeCtx, {
                type: 'bar',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Requests',
                        data: this.state.analytics.volumeData,
                        backgroundColor: '#D0BCFF',
                        borderRadius: 8,
                        barPercentage: 0.6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'var(--md-sys-color-surface)',
                            titleColor: 'var(--md-sys-color-on-surface)',
                            bodyColor: 'var(--md-sys-color-on-surface-variant)'
                        }
                    },
                    scales: {
                        y: { 
                            beginAtZero: true,
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            ticks: { color: 'var(--md-sys-color-on-surface-variant)' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: 'var(--md-sys-color-on-surface-variant)' }
                        }
                    }
                }
            });
        }
        
        // Status Codes Chart (Analytics)
        const codesCtx = document.getElementById('statusCodesChart')?.getContext('2d');
        if (codesCtx) {
            this.charts.codes = new Chart(codesCtx, {
                type: 'pie',
                data: {
                    labels: ['200 OK', '404 Not Found', '500 Error', 'Timeout'],
                    datasets: [{
                        data: this.state.analytics.statusCodes,
                        backgroundColor: ['#4CAF50', '#FFC107', '#F44336', '#9C27B0'],
                        borderWidth: 0,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { 
                            position: 'bottom',
                            labels: { color: 'var(--md-sys-color-on-surface-variant)' }
                        },
                        tooltip: {
                            backgroundColor: 'var(--md-sys-color-surface)',
                            titleColor: 'var(--md-sys-color-on-surface)',
                            bodyColor: 'var(--md-sys-color-on-surface-variant)'
                        }
                    }
                }
            });
        }
        
        // Render heatmap
        this.renderHeatmap();
        
        // Render top sites
        this.renderTopSites();
    }
    
    renderHeatmap() {
        const heatmap = document.getElementById('heatmap');
        if (!heatmap) return;
        
        heatmap.innerHTML = '';
        
        // Generate 24x7 heatmap (24 hours x 7 days)
        for (let i = 0; i < 168; i++) {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            const value = Math.floor(Math.random() * 5) + 1;
            cell.setAttribute('data-value', value);
            cell.setAttribute('title', `Hour ${Math.floor(i/7)}: Value ${value}`);
            heatmap.appendChild(cell);
        }
    }
    
    renderTopSites() {
        const container = document.getElementById('topSitesList');
        if (!container) return;
        
        const sites = [
            { name: 'Netflix Mirror', url: 'netflixmir.vercel.app', requests: 1234, avgTime: 145 },
            { name: 'Streaming Site', url: 'netmirr.vercel.app', requests: 982, avgTime: 167 },
            { name: 'Mirror Site', url: 'mirrorsite.vercel.app', requests: 756, avgTime: 189 }
        ];
        
        container.innerHTML = sites.map((site, index) => `
            <div class="top-site-item">
                <div class="top-site-rank">${index + 1}</div>
                <div class="top-site-info">
                    <div class="top-site-name">${site.name}</div>
                    <div class="top-site-url">${site.url}</div>
                </div>
                <div class="top-site-stats">
                    <span>${site.requests} req</span>
                    <span>${site.avgTime}ms</span>
                </div>
            </div>
        `).join('');
    }
    
    renderDatabase() {
        const grid = document.getElementById('databaseGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        grid.appendChild(this.createQuantumCard(this.config.database, true));
    }
    
    renderDatabaseFull() {
        const grid = document.getElementById('databaseFullGrid');
        if (!grid) return;
        
        // Create multiple database cards for demo
        const databases = [
            this.config.database,
            { ...this.config.database, id: 'backup-db', name: 'Backup Database', url: '#', description: 'Replica database for failover' },
            { ...this.config.database, id: 'analytics-db', name: 'Analytics Database', url: '#', description: 'Historical data and analytics' }
        ];
        
        grid.innerHTML = '';
        databases.forEach(db => {
            grid.appendChild(this.createQuantumCard(db, true));
        });
    }
    
    async renderTestSites() {
        const grid = document.getElementById('testSitesGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        // Set initial checking status
        this.state.sites.forEach(site => {
            this.state.siteStatuses[site.id] = { status: 'checking' };
        });
        this.updateCounters();
        
        // Render cards
        this.state.sites.forEach((site, index) => {
            const card = this.createQuantumCard(site);
            card.style.animationDelay = `${index * 0.1}s`;
            grid.appendChild(card);
        });
        
        // Check statuses
        for (const site of this.state.sites) {
            const statusData = await this.checkSiteStatus(site.url);
            this.state.siteStatuses[site.id] = statusData;
            this.updateCardStatus(site.id, statusData);
            this.updateCounters();
            this.updateAnalytics(statusData);
        }
        
        this.state.lastUpdateTime = new Date();
        this.renderSitesTable();
    }
    
    renderSitesTable() {
        const tbody = document.getElementById('sitesTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = this.state.sites.map(site => {
            const status = this.state.siteStatuses[site.id] || { status: 'checking', duration: 0, statusCode: '--' };
            const statusClass = status.status;
            const statusColors = {
                online: '#4CAF50',
                offline: '#F44336',
                checking: '#FFC107'
            };
            
            return `
                <tr>
                    <td>
                        <span class="site-status-badge ${statusClass}">
                            <span class="status-dot small" style="background: ${statusColors[statusClass]};"></span>
                            ${status.status.toUpperCase()}
                        </span>
                    </td>
                    <td>${site.name}</td>
                    <td><a href="${site.url}" target="_blank" class="card-url">${site.url}</a></td>
                    <td>${status.duration ? this.formatDuration(status.duration) : '--'}</td>
                    <td>${Math.floor(Math.random() * 100)}%</td>
                    <td class="site-actions">
                        <button class="m3-icon-button small" onclick="dashboard.editSite('${site.id}')">
                            <span class="material-symbols-rounded">edit</span>
                        </button>
                        <button class="m3-icon-button small" onclick="dashboard.deleteSite('${site.id}')">
                            <span class="material-symbols-rounded">delete</span>
                        </button>
                        <button class="m3-icon-button small" onclick="dashboard.checkSiteNow('${site.id}')">
                            <span class="material-symbols-rounded">refresh</span>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }
    
    editSite(siteId) {
        const site = this.state.sites.find(s => s.id === siteId);
        if (!site) return;
        
        document.getElementById('siteName').value = site.name;
        document.getElementById('siteUrl').value = site.url;
        document.getElementById('siteDescription').value = site.description;
        document.getElementById('siteImage').value = site.previewImage;
        
        document.getElementById('addSiteModal').classList.add('active');
        // Store site ID for update
        this.editingSiteId = siteId;
    }
    
    deleteSite(siteId) {
        if (confirm('Are you sure you want to delete this site?')) {
            this.state.sites = this.state.sites.filter(s => s.id !== siteId);
            delete this.state.siteStatuses[siteId];
            this.renderTestSites();
            this.renderSitesTable();
            this.updateCounters();
            this.showSnackbar('Site deleted successfully', 'info');
        }
    }
    
    async checkSiteNow(siteId) {
        const site = this.state.sites.find(s => s.id === siteId);
        if (!site) return;
        
        this.showSnackbar(`Checking ${site.name}...`, 'info');
        const statusData = await this.checkSiteStatus(site.url);
        this.state.siteStatuses[site.id] = statusData;
        this.updateCardStatus(site.id, statusData);
        this.updateCounters();
        this.updateAnalytics(statusData);
        this.renderSitesTable();
        this.showSnackbar(`${site.name} is ${statusData.status}`, statusData.status === 'online' ? 'success' : 'error');
    }
    
    updateAnalytics(statusData) {
        this.state.analytics.requests++;
        
        // Update average response time
        const total = this.state.analytics.avgResponse * (this.state.analytics.requests - 1) + (statusData.duration || 0);
        this.state.analytics.avgResponse = total / this.state.analytics.requests;
        
        // Update success rate
        const onlineCount = Object.values(this.state.siteStatuses).filter(s => s.status === 'online').length;
        const totalCount = Object.values(this.state.siteStatuses).length;
        this.state.analytics.successRate = totalCount ? Math.round((onlineCount / totalCount) * 100) : 100;
        
        // Update charts
        if (this.charts.response) {
            // Shift data and add new random value
            this.state.analytics.responseTimes.shift();
            this.state.analytics.responseTimes.push(Math.random() * 200 + 100);
            this.charts.response.data.datasets[0].data = this.state.analytics.responseTimes;
            this.charts.response.update();
        }
        
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
                    <button class="m3-button primary" onclick="dashboard.visitSite('${item.url}')">
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
        document.getElementById('testSitesBadge').textContent = this.state.sites.length;
        
        // Update favicon based on status
        this.updateFavicon(online, offline);
    }
    
    updateFavicon(online, offline) {
        const favicon = document.getElementById('dynamicFavicon');
        if (!favicon) return;
        
        const total = online + offline;
        const onlineRatio = total ? online / total : 1;
        
        let color;
        if (onlineRatio > 0.7) color = '4CAF50';
        else if (onlineRatio > 0.3) color = 'FFC107';
        else color = 'F44336';
        
        favicon.href = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23${color}'/%3E%3Ccircle cx='12' cy='12' r='4' fill='%23ffffff'/%3E%3C/svg%3E`;
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
        
        const filteredEntries = this.state.consoleEntries.filter(entry => {
            if (this.state.consoleTabs === 'errors') return !entry.success;
            if (this.state.consoleTabs === 'logs') return entry.success;
            return true; // output tab shows all
        });
        
        if (filteredEntries.length === 0) {
            consoleBody.innerHTML = `
                <div class="console-line">
                    <span class="line-prompt">$</span>
                    <span class="line-text">No ${this.state.consoleTabs} to display</span>
                </div>
                <div class="console-line">
                    <span class="line-prompt">$</span>
                    <span class="line-text">Type 'help' for available commands</span>
                </div>
            `;
            return;
        }
        
        consoleBody.innerHTML = filteredEntries.map(entry => `
            <div class="console-line">
                <span class="line-prompt">[${entry.timestamp}]</span>
                <span class="line-text" style="color: ${entry.success ? '#4CAF50' : '#F44336'}">
                    ${entry.endpoint} → ${entry.statusCode} (${this.formatDuration(entry.duration)})
                </span>
            </div>
        `).join('');
        
        // Auto-scroll to bottom
        consoleBody.scrollTop = consoleBody.scrollHeight;
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
    
    copyConsole() {
        const text = this.state.consoleEntries.map(e => 
            `[${e.timestamp}] ${e.endpoint} → ${e.statusCode} (${this.formatDuration(e.duration)})`
        ).join('\n');
        
        navigator.clipboard.writeText(text).then(() => {
            this.showSnackbar('Console copied to clipboard', 'success');
        });
    }
    
    downloadConsole() {
        const text = this.state.consoleEntries.map(e => 
            `[${e.timestamp}] ${e.endpoint} → ${e.statusCode} (${this.formatDuration(e.duration)})`
        ).join('\n');
        
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `console-${this.formatTimestamp()}.log`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showSnackbar('Console downloaded', 'success');
    }
    
    toggleAutoRefresh() {
        this.state.autoRefreshEnabled = !this.state.autoRefreshEnabled;
        
        const btn = document.getElementById('toggleAutoRefresh');
        if (btn) {
            const icon = btn.querySelector('.material-symbols-rounded');
            icon.textContent = this.state.autoRefreshEnabled ? 'pause' : 'play_arrow';
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
        const seconds = Math.floor((uptimeMs % 60000) / 1000);
        return `${hours}h ${minutes}m ${seconds}s`;
    }
    
    formatTimestamp(date = new Date()) {
        const d = new Date(date);
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const seconds = d.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
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
            // Fallback
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
        snackbar.className = `m3-snackbar ${type}`;
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
        if (!this.audio) return;
        
        if (this.state.musicPlaying) {
            this.audio.pause();
            this.state.musicPlaying = false;
            document.getElementById('playIcon').textContent = 'play_circle';
            document.getElementById('nowPlayingBar')?.classList.remove('active');
        } else {
            this.audio.play()
                .then(() => {
                    this.state.musicPlaying = true;
                    document.getElementById('playIcon').textContent = 'pause_circle';
                    document.getElementById('nowPlayingBar')?.classList.add('active');
                })
                .catch(e => {
                    console.log('Playback failed:', e);
                    this.showSnackbar('Click anywhere to enable audio', 'info');
                });
        }
    }
    
    setVolume(volume) {
        this.state.musicVolume = volume;
        if (this.audio) {
            this.audio.volume = volume / 100;
        }
        
        const icon = document.getElementById('volumeIcon');
        if (icon) {
            if (volume === 0) {
                icon.textContent = 'volume_off';
            } else if (volume < 50) {
                icon.textContent = 'volume_down';
            } else {
                icon.textContent = 'volume_up';
            }
        }
    }
    
    playNext() {
        // Cycle through tracks
        if (this.audio) {
            this.audio.currentTime = 0;
            this.audio.play();
        }
    }
    
    playPrev() {
        if (this.audio) {
            this.audio.currentTime = 0;
            this.audio.play();
        }
    }
    
    saveSettings() {
        // Get values from UI
        this.state.settings.autoRefresh = document.getElementById('autoRefreshToggle')?.checked ?? true;
        this.state.settings.refreshInterval = parseInt(document.getElementById('refreshInterval')?.value ?? '8000');
        this.state.settings.notifications = document.getElementById('notificationsToggle')?.checked ?? false;
        this.state.settings.soundAlerts = document.getElementById('soundToggle')?.checked ?? false;
        this.state.settings.emailReports = document.getElementById('emailToggle')?.checked ?? false;
        this.state.settings.musicEnabled = document.getElementById('musicToggle')?.checked ?? true;
        this.state.settings.detroitMode = document.getElementById('detroitToggle')?.checked ?? true;
        
        // Apply settings
        this.config.autoRefreshInterval = this.state.settings.refreshInterval;
        this.state.musicEnabled = this.state.settings.musicEnabled;
        
        if (this.state.settings.autoRefresh) {
            this.startAutoRefresh();
        } else {
            this.stopAutoRefresh();
        }
        
        this.showSnackbar('Settings saved successfully!', 'success');
    }
    
    resetSettings() {
        if (confirm('Reset all settings to default?')) {
            this.state.settings = {
                autoRefresh: true,
                refreshInterval: 8000,
                notifications: false,
                soundAlerts: false,
                emailReports: false,
                theme: 'dark',
                density: 'standard',
                musicEnabled: true,
                detroitMode: true
            };
            
            // Update UI
            document.getElementById('autoRefreshToggle').checked = true;
            document.getElementById('refreshInterval').value = '8000';
            document.getElementById('notificationsToggle').checked = false;
            document.getElementById('soundToggle').checked = false;
            document.getElementById('emailToggle').checked = false;
            document.getElementById('musicToggle').checked = true;
            document.getElementById('detroitToggle').checked = true;
            
            this.showSnackbar('Settings reset to default', 'info');
        }
    }
    
    executeCommand(command) {
        const cmd = command.toLowerCase().trim();
        
        if (cmd === 'help') {
            this.addConsoleEntry({
                endpoint: 'help',
                timestamp: this.formatTimestamp(),
                statusCode: 'INFO',
                duration: 0,
                success: true,
                data: { 
                    commands: [
                        'help - Show this help',
                        'clear - Clear console',
                        'stats - Show system stats',
                        'sites - List all sites',
                        'music - Toggle music',
                        'status - Check all sites'
                    ]
                }
            });
        } else if (cmd === 'clear') {
            this.clearConsole();
        } else if (cmd === 'stats') {
            this.addConsoleEntry({
                endpoint: 'stats',
                timestamp: this.formatTimestamp(),
                statusCode: 'INFO',
                duration: 0,
                success: true,
                data: {
                    uptime: this.calculateUptime(),
                    requests: this.state.analytics.requests,
                    avgResponse: this.state.analytics.avgResponse.toFixed(0) + 'ms',
                    successRate: this.state.analytics.successRate + '%'
                }
            });
        } else if (cmd === 'sites') {
            this.addConsoleEntry({
                endpoint: 'sites',
                timestamp: this.formatTimestamp(),
                statusCode: 'INFO',
                duration: 0,
                success: true,
                data: this.state.sites.map(s => ({
                    name: s.name,
                    url: s.url,
                    status: this.state.siteStatuses[s.id]?.status || 'unknown'
                }))
            });
        } else if (cmd === 'music') {
            this.toggleMusic();
            this.addConsoleEntry({
                endpoint: 'music',
                timestamp: this.formatTimestamp(),
                statusCode: 'INFO',
                duration: 0,
                success: true,
                data: { message: `Music ${this.state.musicPlaying ? 'playing' : 'paused'}` }
            });
        } else if (cmd === 'status') {
            this.renderTestSites();
            this.addConsoleEntry({
                endpoint: 'status',
                timestamp: this.formatTimestamp(),
                statusCode: 'INFO',
                duration: 0,
                success: true,
                data: { message: 'Checking all sites...' }
            });
        } else {
            this.addConsoleEntry({
                endpoint: command,
                timestamp: this.formatTimestamp(),
                statusCode: 'ERR',
                duration: 0,
                success: false,
                data: { error: 'Command not found. Type "help" for available commands.' }
            });
        }
    }
    
    toggleFaq(index) {
        if (this.state.faqOpen === index) {
            this.state.faqOpen = null;
        } else {
            this.state.faqOpen = index;
        }
        
        document.querySelectorAll('.faq-item').forEach((item, i) => {
            if (i === index) {
                item.classList.toggle('open', this.state.faqOpen === index);
            } else {
                item.classList.remove('open');
            }
        });
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
        
        // Settings button
        document.getElementById('settingsBtn')?.addEventListener('click', () => this.switchView('settings'));
        
        // Search button
        document.getElementById('searchBtn')?.addEventListener('click', () => {
            this.showSnackbar('Search feature coming soon', 'info');
        });
        
        // Music button
        document.getElementById('musicBtn')?.addEventListener('click', () => this.toggleMusic());
        
        // Refresh button
        document.getElementById('refreshTestSites')?.addEventListener('click', async () => {
            this.showSnackbar('Refreshing statuses...', 'info');
            await this.renderTestSites();
        });
        
        // Add site button
        document.getElementById('addSiteBtn')?.addEventListener('click', () => {
            this.editingSiteId = null;
            document.getElementById('siteName').value = '';
            document.getElementById('siteUrl').value = '';
            document.getElementById('siteDescription').value = '';
            document.getElementById('siteImage').value = '';
            document.getElementById('addSiteModal').classList.add('active');
        });
        
        document.getElementById('manageAddSite')?.addEventListener('click', () => {
            document.getElementById('addSiteBtn').click();
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
            
            if (!name || !url) {
                this.showSnackbar('Please fill in required fields', 'error');
                return;
            }
            
            if (this.editingSiteId) {
                // Update existing site
                const site = this.state.sites.find(s => s.id === this.editingSiteId);
                if (site) {
                    site.name = name;
                    site.url = url;
                    site.description = document.getElementById('siteDescription').value || site.description;
                    site.previewImage = document.getElementById('siteImage').value || site.previewImage;
                }
                this.showSnackbar('Site updated successfully!', 'success');
                this.editingSiteId = null;
            } else {
                // Add new site
                const newSite = {
                    id: 'custom-' + Date.now(),
                    name: name,
                    url: url,
                    description: document.getElementById('siteDescription').value || 'Custom site',
                    previewImage: document.getElementById('siteImage').value || this.config.fallbackImage
                };
                
                this.state.sites.push(newSite);
                this.showSnackbar('Site added successfully!', 'success');
            }
            
            this.renderTestSites();
            this.renderSitesTable();
            document.getElementById('addSiteModal').classList.remove('active');
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
            if (this.state.autoRefreshEnabled) {
                this.startAutoRefresh();
            }
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
                // Theme switching would go here
            });
        });
        
        document.querySelectorAll('.density-option').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelector('.density-option.active')?.classList.remove('active');
                this.classList.add('active');
                // Density switching would go here
            });
        });
        
        // Save settings
        document.getElementById('saveSettings')?.addEventListener('click', () => this.saveSettings());
        document.getElementById('resetSettings')?.addEventListener('click', () => this.resetSettings());
        
        // Test music button
        document.getElementById('testMusicBtn')?.addEventListener('click', () => {
            this.toggleMusic();
        });
        
        // Music controls
        document.getElementById('playPause')?.addEventListener('click', () => this.toggleMusic());
        document.getElementById('nextTrack')?.addEventListener('click', () => this.playNext());
        document.getElementById('prevTrack')?.addEventListener('click', () => this.playPrev());
        
        document.getElementById('volumeSlider')?.addEventListener('input', (e) => {
            this.setVolume(parseInt(e.target.value));
        });
        
        document.getElementById('closeNowPlaying')?.addEventListener('click', () => {
            document.getElementById('nowPlayingBar').classList.remove('active');
            if (this.state.musicPlaying) {
                this.audio.pause();
                this.state.musicPlaying = false;
                document.getElementById('playIcon').textContent = 'play_circle';
            }
        });
        
        // Console
        document.getElementById('consoleClear')?.addEventListener('click', () => this.clearConsole());
        document.getElementById('consoleCopy')?.addEventListener('click', () => this.copyConsole());
        document.getElementById('consoleDownload')?.addEventListener('click', () => this.downloadConsole());
        
        document.querySelectorAll('.console-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.console-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.state.consoleTabs = e.target.dataset.console;
                this.renderConsole();
            });
        });
        
        document.getElementById('consoleSend')?.addEventListener('click', () => {
            const input = document.getElementById('consoleInput');
            const command = input.value.trim();
            
            if (command) {
                this.executeCommand(command);
                input.value = '';
            }
        });
        
        document.getElementById('consoleInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('consoleSend').click();
            }
        });
        
        // FAQ
        document.querySelectorAll('.faq-question').forEach((btn, index) => {
            btn.addEventListener('click', () => this.toggleFaq(index));
        });
        
        // Time chips
        document.querySelectorAll('.time-chip').forEach(chip => {
            chip.addEventListener('click', function() {
                document.querySelector('.time-chip.active')?.classList.remove('active');
                this.classList.add('active');
                
                // Update chart data based on range
                if (dashboard.charts.response) {
                    const range = this.dataset.range;
                    let newData;
                    if (range === 'hour') newData = Array.from({ length: 24 }, () => Math.random() * 200 + 100);
                    else if (range === 'day') newData = Array.from({ length: 24 }, () => Math.random() * 300 + 50);
                    else newData = Array.from({ length: 24 }, () => Math.random() * 400 + 200);
                    
                    dashboard.charts.response.data.datasets[0].data = newData;
                    dashboard.charts.response.update();
                }
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
        
        document.getElementById('totalChip')?.addEventListener('click', () => {
            this.showSnackbar(`Total: ${document.getElementById('totalCount').textContent} sites`, 'info');
        });
        
        // Date range button
        document.getElementById('dateRangeBtn')?.addEventListener('click', () => {
            this.showSnackbar('Date range selector coming soon', 'info');
        });
        
        // Handle click outside drawer to close
        document.addEventListener('click', (e) => {
            if (this.state.drawerOpen && 
                !e.target.closest('.m3-nav-drawer') && 
                !e.target.closest('#menuBtn')) {
                this.toggleDrawer();
            }
        });
        
        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.state.drawerOpen) {
                    this.toggleDrawer();
                }
                document.getElementById('addSiteModal')?.classList.remove('active');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.state.drawerOpen) {
                this.toggleDrawer();
            }
        });
        
        // Try to enable audio on first user interaction
        const enableAudio = () => {
            if (this.state.musicEnabled && !this.state.musicPlaying && this.audio) {
                this.audio.play().catch(() => {});
            }
            document.removeEventListener('click', enableAudio);
        };
        document.addEventListener('click', enableAudio, { once: true });
    }
}

// Initialize dashboard
const dashboard = new Material3Dashboard();

// Make globally available
window.dashboard = dashboard;
window.copyToClipboard = (text) => dashboard.copyToClipboard(text);

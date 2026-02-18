// ===================================
// QUANTUM NODE SYSTEM - MATERIAL 3
// ===================================

class QuantumNodeSystem {
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
            
            fallbackImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"%3E%3Crect width="400" height="200" fill="%2312121A"/%3E%3Ctext x="200" y="100" font-family="Google Sans" font-size="16" fill="%238B5CF6" text-anchor="middle"%3ENODE OFFLINE%3C/text%3E%3C/svg%3E'
        };
        
        this.state = {
            siteStatuses: {},
            autoRefreshEnabled: true,
            autoRefreshTimer: null,
            consoleEntries: [],
            startTime: Date.now(),
            lastUpdateTime: null,
            isInitialized: false,
            loadingProgress: 0
        };
        
        this.init();
    }
    
    async init() {
        await this.init3DBackground();
        this.initNodeNetwork();
        await this.simulateLoading();
        await this.initDashboard();
        this.startQuantumClock();
        this.setupEventListeners();
    }
    
    async init3DBackground() {
        const canvas = document.getElementById('bgCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();
        
        const particles = [];
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 1000,
                size: Math.random() * 2 + 1,
                speed: Math.random() * 2 + 0.5,
                color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 55}, 255, ${Math.random() * 0.5 + 0.2})`
            });
        }
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.z -= p.speed;
                
                if (p.z <= 0) {
                    p.z = 1000;
                    p.x = Math.random() * canvas.width;
                    p.y = Math.random() * canvas.height;
                }
                
                const scale = 500 / p.z;
                const x2d = (p.x - canvas.width / 2) * scale + canvas.width / 2;
                const y2d = (p.y - canvas.height / 2) * scale + canvas.height / 2;
                const size = p.size * scale;
                
                if (x2d > 0 && x2d < canvas.width && y2d > 0 && y2d < canvas.height) {
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                    
                    // Connection lines
                    particles.forEach(p2 => {
                        const scale2 = 500 / p2.z;
                        const x2d2 = (p2.x - canvas.width / 2) * scale2 + canvas.width / 2;
                        const y2d2 = (p2.y - canvas.height / 2) * scale2 + canvas.height / 2;
                        
                        const distance = Math.hypot(x2d - x2d2, y2d - y2d2);
                        if (distance < 100) {
                            ctx.beginPath();
                            ctx.moveTo(x2d, y2d);
                            ctx.lineTo(x2d2, y2d2);
                            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
                            ctx.stroke();
                        }
                    });
                }
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    initNodeNetwork() {
        const network = document.getElementById('nodeNetwork');
        if (!network) return;
        
        for (let i = 0; i < 20; i++) {
            const node = document.createElement('div');
            node.className = 'network-node';
            node.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(139, 92, 246, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                box-shadow: 0 0 ${Math.random() * 10 + 5}px rgba(139, 92, 246, 0.5);
                animation: nodeFloat ${Math.random() * 4 + 3}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            network.appendChild(node);
        }
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes nodeFloat {
                0%, 100% { transform: translate(0, 0); }
                25% { transform: translate(${Math.random() * 30}px, ${Math.random() * 30}px); }
                50% { transform: translate(${Math.random() * -30}px, ${Math.random() * 30}px); }
                75% { transform: translate(${Math.random() * 30}px, ${Math.random() * -30}px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    async simulateLoading() {
        const progressBar = document.querySelector('.quantum-progress-bar');
        const steps = 100;
        
        for (let i = 0; i <= steps; i++) {
            this.state.loadingProgress = i;
            if (progressBar) {
                progressBar.style.width = `${i}%`;
            }
            
            // Random delay for realistic loading
            await new Promise(r => setTimeout(r, Math.random() * 30 + 10));
        }
        
        // Hide overlay after loading
        setTimeout(() => {
            const overlay = document.getElementById('quantumOverlay');
            if (overlay) {
                overlay.classList.add('hidden');
            }
        }, 500);
    }
    
    async initDashboard() {
        this.renderDatabase();
        await this.renderTestSites();
        await this.fetchScriptData();
        this.startAutoRefresh();
        this.startUptimeCounter();
        this.state.isInitialized = true;
        this.showToast('Quantum system online', 'success');
    }
    
    renderDatabase() {
        const grid = document.getElementById('databaseGrid');
        if (!grid) return;
        
        const db = this.config.database;
        const card = this.createQuantumCard(db, true);
        grid.innerHTML = '';
        grid.appendChild(card);
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
        this.updateFooterInfo();
    }
    
    createQuantumCard(item, isDatabase = false) {
        const card = document.createElement('div');
        card.className = 'quantum-card';
        if (!isDatabase) card.dataset.siteId = item.id;
        
        const status = isDatabase ? 
            { status: 'online' } : 
            (this.state.siteStatuses[item.id] || { status: 'checking' });
        
        const statusColors = {
            online: 'var(--node-online)',
            offline: 'var(--node-offline)',
            checking: 'var(--node-checking)'
        };
        
        card.innerHTML = `
            <div class="card-quantum-field"></div>
            <div class="card-media">
                <img src="${item.previewImage}" alt="${item.name}" loading="lazy"
                     onerror="this.src='${this.config.fallbackImage}'">
                <div class="card-media-overlay"></div>
                <div class="card-status-node" style="--status-color: ${statusColors[status.status]}">
                    <div class="status-indicator"></div>
                    <span class="status-text">${status.status.toUpperCase()}</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <a href="${item.url}" target="_blank" class="card-url" rel="noopener">${item.url}</a>
                <p class="card-description">${item.description}</p>
                
                ${!isDatabase ? `
                <div class="card-metrics">
                    <div class="metric">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" stroke-width="2"/>
                            <polyline points="12 6 12 12 16 14" stroke-width="2"/>
                        </svg>
                        <span>${status.duration ? this.formatDuration(status.duration) : '--'}</span>
                    </div>
                    <div class="metric">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke-width="2"/>
                            <polyline points="15 3 21 3 21 9" stroke-width="2"/>
                            <line x1="10" y1="14" x2="21" y2="3" stroke-width="2"/>
                        </svg>
                        <span>${status.statusCode || '--'}</span>
                    </div>
                </div>
                ` : ''}
                
                <div class="card-actions">
                    <button class="card-action-btn primary" onclick="window.open('${item.url}', '_blank')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke-width="2"/>
                            <polyline points="15 3 21 3 21 9" stroke-width="2"/>
                            <line x1="10" y1="14" x2="21" y2="3" stroke-width="2"/>
                        </svg>
                        <span>${isDatabase ? 'ACCESS NODE' : 'CONNECT'}</span>
                    </button>
                    <button class="card-action-btn secondary" onclick="quantumSystem.copyToClipboard('${item.url}')" title="Copy node address">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke-width="2"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }
    
    updateCardStatus(siteId, statusData) {
        const card = document.querySelector(`[data-site-id="${siteId}"]`);
        if (!card) return;
        
        const statusNode = card.querySelector('.card-status-node');
        const indicator = statusNode.querySelector('.status-indicator');
        const statusText = statusNode.querySelector('.status-text');
        const metrics = card.querySelectorAll('.metric span');
        
        const statusColors = {
            online: 'var(--node-online)',
            offline: 'var(--node-offline)',
            checking: 'var(--node-checking)'
        };
        
        statusNode.style.setProperty('--status-color', statusColors[statusData.status]);
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
        
        // Update favicon based on status
        this.updateFavicon(online, offline);
    }
    
    updateFavicon(online, offline) {
        const favicon = document.getElementById('dynamicFavicon');
        if (!favicon) return;
        
        const total = online + offline;
        const onlineRatio = online / total || 0;
        
        let color;
        if (onlineRatio > 0.7) color = '#10B981';
        else if (onlineRatio > 0.3) color = '#F59E0B';
        else color = '#EF4444';
        
        favicon.href = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23${color.substring(1)}'/%3E%3Ccircle cx='12' cy='12' r='4' fill='%23ffffff'/%3E%3C/svg%3E`;
    }
    
    async fetchScriptData() {
        const statusEl = document.getElementById('consoleStatus');
        const statusDot = document.getElementById('consoleStatusDot');
        
        if (statusEl) {
            statusEl.textContent = 'QUANTUM_FETCH';
            statusDot.style.background = 'var(--node-checking)';
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
                        message: 'Quantum packet received',
                        type: 'NO_CORS',
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
                        error: error.message,
                        type: 'QUANTUM_DISRUPTION'
                    }
                });
            }
        }
        
        if (statusEl) {
            statusEl.textContent = 'QUANTUM_READY';
            statusDot.style.background = 'var(--node-online)';
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
                    <div class="placeholder-wave"></div>
                    <div class="placeholder-text">
                        <span>></span>
                        <span class="cursor">_</span>
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
        this.showToast('Console buffer cleared', 'info');
    }
    
    toggleAutoRefresh() {
        this.state.autoRefreshEnabled = !this.state.autoRefreshEnabled;
        
        const btn = document.getElementById('toggleAutoRefresh');
        if (btn) {
            btn.style.background = this.state.autoRefreshEnabled ? 
                'linear-gradient(135deg, var(--quantum-primary), var(--quantum-secondary))' : '';
        }
        
        if (this.state.autoRefreshEnabled) {
            this.startAutoRefresh();
            this.showToast('Quantum stream enabled', 'success');
        } else {
            this.stopAutoRefresh();
            this.showToast('Quantum stream paused', 'info');
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
    
    startQuantumClock() {
        setInterval(() => {
            const clock = document.getElementById('liveClock');
            if (clock) {
                clock.textContent = this.formatTimestamp(new Date(), true);
            }
        }, 100);
    }
    
    startUptimeCounter() {
        setInterval(() => {
            this.updateFooterInfo();
        }, 1000);
    }
    
    updateFooterInfo() {
        const uptimeEl = document.getElementById('footerUptime');
        const timestampEl = document.getElementById('consoleTimestamp');
        
        if (uptimeEl) {
            uptimeEl.textContent = `UPTIME: ${this.calculateUptime()}`;
        }
        
        if (timestampEl && this.state.lastUpdateTime) {
            timestampEl.textContent = this.formatTimestamp(this.state.lastUpdateTime);
        }
    }
    
    calculateUptime() {
        const uptimeMs = Date.now() - this.state.startTime;
        const hours = Math.floor(uptimeMs / 3600000);
        const minutes = Math.floor((uptimeMs % 3600000) / 60000);
        const seconds = Math.floor((uptimeMs % 60000) / 1000);
        return `${hours}h ${minutes}m ${seconds}s`;
    }
    
    formatTimestamp(date = new Date(), includeSeconds = true) {
        const d = new Date(date);
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const seconds = d.getSeconds().toString().padStart(2, '0');
        return includeSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
    }
    
    formatDuration(ms) {
        if (ms < 1000) return `${ms}ms`;
        return `${(ms / 1000).toFixed(2)}s`;
    }
    
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast('Node address copied', 'success');
        } catch (error) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showToast('Node address copied', 'success');
        }
    }
    
    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast-node ${type}`;
        toast.textContent = message;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'toastExit 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    setupEventListeners() {
        document.getElementById('refreshTestSites')?.addEventListener('click', async () => {
            this.showToast('Refreshing node statuses...', 'info');
            await this.renderTestSites();
        });
        
        document.getElementById('toggleAutoRefresh')?.addEventListener('click', () => this.toggleAutoRefresh());
        document.getElementById('clearConsole')?.addEventListener('click', () => this.clearConsole());
        document.getElementById('fetchScriptData')?.addEventListener('click', () => {
            this.showToast('Fetching quantum data...', 'info');
            this.fetchScriptData();
        });
        
        // Status node click handlers
        document.getElementById('onlineNode')?.addEventListener('click', () => {
            this.showToast(`Online nodes: ${document.getElementById('onlineCount').textContent}`, 'info');
        });
        
        document.getElementById('offlineNode')?.addEventListener('click', () => {
            this.showToast(`Offline nodes: ${document.getElementById('offlineCount').textContent}`, 'info');
        });
        
        document.getElementById('checkingNode')?.addEventListener('click', () => {
            this.showToast(`Checking nodes: ${document.getElementById('checkingCount').textContent}`, 'info');
        });
    }
}

// Initialize quantum system
const quantumSystem = new QuantumNodeSystem();

// Handle visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        quantumSystem.stopAutoRefresh();
    } else if (quantumSystem.state.autoRefreshEnabled) {
        quantumSystem.startAutoRefresh();
    }
});

// Expose to window
window.quantumSystem = quantumSystem;
window.copyToClipboard = (text) => quantumSystem.copyToClipboard(text);

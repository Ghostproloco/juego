/*
 * Eclipse Forge - Hybrid Idle / Roguelite prototype
 * Código estructurado por módulos ligeros y comentarios para facilitar mantenimiento.
 */

export const BALANCE = Object.freeze({
    VERSION: '1.0.0',
    EPC_BASE: 3,
    EPS_BASE: 0.5,
    CRIT_CHANCE: 0.08,
    CRIT_MULT: 4,
    COMBO: {
        WINDOW_MS: 1200,
        MAX_MULT: 5,
        STEP: 0.25
    },
    FEVER: {
        BASE_DURATION: 20,
        MULTIPLIER: 2,
        COOLDOWN: 120
    },
    COST_SCALING: [1.12, 1.15, 1.18, 1.2, 1.25],
    GENERATORS: [
        { id: 'drone', name: 'Drones Solares', baseCost: 25, baseProduction: 1 },
        { id: 'forge', name: 'Forjas Orbitales', baseCost: 120, baseProduction: 6 },
        { id: 'reactor', name: 'Reactores Gemelos', baseCost: 750, baseProduction: 28 },
        { id: 'satellite', name: 'Satélites de Eclipse', baseCost: 4200, baseProduction: 140 },
        { id: 'rift', name: 'Fracturas Temporales', baseCost: 16500, baseProduction: 620 }
    ],
    PRODUCCION_BASE: {
        drone: 1,
        forge: 6,
        reactor: 28,
        satellite: 140,
        rift: 620
    },
    SOFTCAP: {
        ENERGY: 1e8,
        COST_REDUCTION: 0.65
    },
    BOOSTS: {
        overclock: { duration: 30, multiplier: 2.5, cooldown: 180 },
        autoclick: { duration: 15, multiplier: 1.5, interval: 0.12 },
        costFreeze: { duration: 20 },
        expedition: { duration: 150, rewardMultiplier: 1.4 }
    },
    EXPEDITION: {
        duration: { min: 90, max: 150 },
        nodes: [
            { id: 'bendicion-epc', type: 'blessing', effect: { epc: 0.25 }, label: '+25% EPC' },
            { id: 'bendicion-eps', type: 'blessing', effect: { eps: 0.25 }, label: '+25% EPS' },
            { id: 'maldicion-crit', type: 'curse', effect: { critChance: -0.05 }, label: '-5% Críticos' },
            { id: 'maldicion-cost', type: 'curse', effect: { costs: 0.12 }, label: 'Costes +12%' },
            { id: 'bendicion-event', type: 'blessing', effect: { eventChance: 0.2 }, label: 'Eventos +20%' },
            { id: 'bendicion-combo', type: 'blessing', effect: { combo: 0.35 }, label: 'Ventana combo +35%' }
        ],
        blessingChance: 0.62,
        curseChance: 0.28,
        specialChance: 0.1
    },
    PRESTIGE: {
        BASE_REQUIREMENT: 500000,
        CORE_MULT: 0.00045,
        FORMULA: (energy, resets) => {
            const base = Math.max(0, Math.log10(energy / 50000));
            const scaling = Math.pow(base, 1.4) + resets * 0.5;
            return Math.floor(Math.max(0, scaling * 5));
        }
    },
    MISSIONS: {
        DAILY: [
            { id: 'daily_clicks', target: 150, reward: { energy: 600, boost: 'autoclick' } },
            { id: 'daily_generators', target: 8, reward: { artifact: 'chip-focal' } },
            { id: 'daily_mini', target: 1, reward: { energy: 1200 } }
        ],
        WEEKLY: [
            { id: 'weekly_prestige', target: 2, reward: { core: 10 } },
            { id: 'weekly_expedition', target: 5, reward: { artifact: 'nodo-ancestral' } }
        ]
    },
    ACHIEVEMENTS: [
        { id: 'achv_click_1', target: 100, type: 'clicks', reward: { artifact: 'pulso' } },
        { id: 'achv_energy_1', target: 10000, type: 'energy', reward: { talent: 'click' } },
        { id: 'achv_generators_1', target: 10, type: 'generators', reward: { energy: 5000 } },
        { id: 'achv_prestige_1', target: 1, type: 'prestige', reward: { core: 5 } }
    ],
    MONETIZATION: {
        PACKS: [
            { id: 'starter', price: 4.99, reward: { energy: 15000, artifact: 'chip-focal' } },
            { id: 'booster', price: 9.99, reward: { boost: 'overclock', energy: 40000 } },
            { id: 'remove-ads', price: 5.99, reward: { removeAds: true } }
        ],
        ADS: [
            { id: 'ad_autoclick', reward: { boost: 'autoclick' }, cooldown: 300 },
            { id: 'ad_double', reward: { expeditionDouble: true }, cooldown: 360 },
            { id: 'ad_costfreeze', reward: { boost: 'costFreeze' }, cooldown: 420 }
        ]
    }
});

export const I18N = {
    es: {
        energy: 'Energía',
        epc: 'Energía por clic',
        eps: 'Energía por segundo',
        multipliers: 'Multiplicadores',
        'next-goal': 'Próxima meta',
        tap: 'Forjar Energía',
        combo: 'Combo',
        'tab-generators': 'Generadores',
        'tab-upgrades': 'Mejoras',
        'tab-artifacts': 'Artefactos',
        'tab-talents': 'Talentos',
        'tab-expeditions': 'Expediciones',
        'tab-missions': 'Misiones',
        'tab-achievements': 'Logros',
        'tab-market': 'Mercado',
        'tab-options': 'Opciones',
        'opt-high-contrast': 'Alto contraste',
        'opt-reduce-fx': 'Reducir efectos',
        'opt-fx-volume': 'Volumen FX',
        'opt-music-volume': 'Volumen Música',
        'opt-save': 'Guardar',
        'opt-load': 'Restaurar',
        'opt-export': 'Exportar',
        'opt-import': 'Importar',
        'opt-wipe': 'Borrar Datos',
        prestigeReady: 'Prestigio disponible: {value} Núcleos',
        expeditionReady: 'Expedición lista, duración {duration}s',
        overclockReady: 'Overclock listo',
        tutorialStep1: 'Haz 3 clics para generar energía.',
        tutorialStep2: 'Compra tu primer generador.',
        tutorialStep3: 'Reclama tu primera misión.',
        tutorialStep4: 'Explora las pestañas bloqueadas.',
        tutorialStep5: 'Prueba una expedición corta.',
        offlineGains: 'Ganancia offline: +{value} Energía',
        purchaseComplete: 'Compra completada',
        adReady: 'Anuncio disponible: {name}',
        missionComplete: 'Misión completada: {name}',
        achievementUnlocked: 'Logro desbloqueado: {name}',
        expeditionComplete: 'Expedición completada',
        prestige: 'Prestigio',
        fever: 'Fiebre',
        autoClick: 'Auto Clic',
        costFreeze: 'Costes congelados',
        marketAds: 'Ver anuncio (simulado)',
        marketIAP: 'Comprar (hook simulado)',
        debugUnlocked: 'Debug activado'
    }
};

function applyI18N(locale = 'es') {
    const dict = I18N[locale] || {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
}

applyI18N(state.settings.language);

/* =============================
 * Utilidades compartidas
 * ============================= */
const Utils = (() => {
    const suffixes = ['K','M','B','T','aa','ab','ac','ad'];
    const formatNumber = (value) => {
        if (value === 0) return '0';
        const abs = Math.abs(value);
        if (abs < 1000) return value.toFixed(abs < 10 ? 2 : abs < 100 ? 1 : 0);
        const tier = Math.floor(Math.log10(abs) / 3);
        if (tier >= suffixes.length) {
            return value.toExponential(2);
        }
        const suffix = suffixes[tier - 1];
        const scaled = value / Math.pow(10, tier * 3);
        return `${scaled.toFixed(2)}${suffix}`;
    };

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const randRange = (min, max) => Math.random() * (max - min) + min;

    class RNG {
        constructor(seed = Date.now()) {
            this.seed = seed % 2147483647;
            if (this.seed <= 0) this.seed += 2147483646;
        }
        next() {
            return this.seed = this.seed * 16807 % 2147483647;
        }
        nextFloat() {
            return (this.next() - 1) / 2147483646;
        }
    }

    return { formatNumber, clamp, randRange, RNG };
})();

/* =============================
 * Analytics simulado
 * ============================= */
class Analytics {
    constructor() {
        this.sessionId = `sess-${Date.now()}`;
        this.log('session_start', {});
    }
    log(event, payload = {}) {
        console.info(`[Analytics] ${event}`, { ...payload, session: this.sessionId });
    }
    end() {
        this.log('session_end');
    }
}

const analytics = new Analytics();

/* =============================
 * A/B Testing flags
 * ============================= */
const AB = (() => {
    const group = Math.random() > 0.5 ? 'A' : 'B';
    const flags = {
        generatorDiscount: group === 'B' ? 0.05 : 0,
        boostStrength: group === 'B' ? 0.1 : 0,
        feverDuration: group === 'B' ? 5 : 0,
        critChance: group === 'B' ? 0.02 : 0,
        missionRewards: group === 'B' ? 0.15 : 0
    };
    console.info('[AB] Grupo asignado:', group, flags);
    return { group, flags };
})();

/* =============================
 * GameState y guardado
 * ============================= */
class GameState {
    constructor() {
        this.version = BALANCE.VERSION;
        this.energy = 0;
        this.totalEnergy = 0;
        this.totalClicks = 0;
        this.critClicks = 0;
        this.comboLevel = 1;
        this.comboTimer = 0;
        this.fever = { active: false, timer: 0, cooldown: 0 };
        this.generators = BALANCE.GENERATORS.map(() => ({ level: 0 }));
        this.upgrades = {};
        this.artifacts = {};
        this.talents = { click: 0, auto: 0, economy: 0, points: 0 };
        this.expedition = { active: false, timer: 0, duration: 0, nodes: [], index: 0, loot: 0, modifiers: {} };
        this.boosts = { overclock: { active: false, timer: 0, cooldown: 0 }, autoclick: { active: false, timer: 0 }, costFreeze: { active: false, timer: 0 } };
        this.settings = { highContrast: false, reduceFX: false, fxVolume: 0.5, musicVolume: 0.35, language: 'es', removeAds: false };
        this.missions = { daily: {}, weekly: {}, lastDaily: 0, lastWeekly: 0 };
        this.achievements = {};
        this.prestige = { count: 0, cores: 0 };
        this.market = { ads: {}, packs: {} };
        this.stats = { lastSave: Date.now(), playTime: 0 };
        this.debug = { unlocked: false };
        this.ftue = { step: 0, completed: false };
    }
}

class SaveManager {
    constructor(storageKey = 'eclipse_forge_save') {
        this.storageKey = storageKey;
        this.backupKey = `${storageKey}_backup`;
    }
    load() {
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (!raw) return null;
            const data = JSON.parse(atob(raw));
            return this.migrate(data);
        } catch (err) {
            console.error('Error al cargar', err);
            return null;
        }
    }
    migrate(data) {
        if (!data.version) data.version = '1.0.0';
        // Futuras migraciones manejarán claves renombradas.
        return Object.assign(new GameState(), data);
    }
    save(state) {
        try {
            localStorage.setItem(this.storageKey, btoa(JSON.stringify(state)));
            localStorage.setItem(this.backupKey, btoa(JSON.stringify(state)));
        } catch (err) {
            console.error('Error al guardar', err);
        }
    }
    export(state) {
        return btoa(JSON.stringify(state));
    }
    import(raw) {
        try {
            const data = JSON.parse(atob(raw));
            return this.migrate(data);
        } catch (err) {
            console.error('Error al importar', err);
            return null;
        }
    }
    wipe() {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.backupKey);
    }
}

const saveManager = new SaveManager();
let state = saveManager.load() || new GameState();

const root = document.documentElement;
const app = document.getElementById('app');

if (state.settings.highContrast) app.classList.add('high-contrast');
if (state.settings.reduceFX) app.classList.add('reduce-fx');

/* =============================
 * Audio Manager
 * ============================= */
class AudioManager {
    constructor() {
        this.ctx = null;
        this.gainFx = null;
        this.gainMusic = null;
        this.musicNode = null;
    }
    init() {
        if (this.ctx) return;
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.gainFx = this.ctx.createGain();
        this.gainFx.gain.value = state.settings.fxVolume;
        this.gainFx.connect(this.ctx.destination);
        this.gainMusic = this.ctx.createGain();
        this.gainMusic.gain.value = state.settings.musicVolume;
        this.gainMusic.connect(this.ctx.destination);
        this.startMusic();
    }
    startMusic() {
        if (!this.ctx || this.musicNode) return;
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 220;
        const lfo = this.ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.05;
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.value = 20;
        lfo.connect(lfoGain).connect(osc.frequency);
        osc.connect(this.gainMusic);
        osc.start();
        lfo.start();
        this.musicNode = { osc, lfo, lfoGain };
    }
    playFx(freq = 440, duration = 0.1) {
        if (!this.ctx) this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.value = freq;
        osc.type = 'triangle';
        gain.gain.value = state.settings.fxVolume;
        osc.connect(gain).connect(this.gainFx);
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.stop(this.ctx.currentTime + duration);
    }
    setFxVolume(value) {
        if (!this.ctx) this.init();
        this.gainFx.gain.value = value;
    }
    setMusicVolume(value) {
        if (!this.ctx) this.init();
        this.gainMusic.gain.value = value;
    }
}

const audio = new AudioManager();

/* =============================
 * FX Manager - partículas simples
 * ============================= */
class FXManager {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.lastSpawn = 0;
    }
    spawn(x, y, color = '#a29bfe') {
        if (state.settings.reduceFX) return;
        const rect = this.canvas.getBoundingClientRect();
        const px = x - rect.left;
        const py = y - rect.top;
        this.particles.push({ x: px, y: py, life: 1, vx: Utils.randRange(-40, 40), vy: Utils.randRange(-60, -20), color });
    }
    update(dt) {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles = this.particles.filter(p => p.life > 0);
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        this.particles.forEach(p => {
            p.life -= dt * 0.8;
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4 * p.life, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.restore();
    }
}

const fxManager = new FXManager(document.getElementById('fx-canvas'));

/* =============================
 * Toast helper
 * ============================= */
const Toasts = (() => {
    const container = document.getElementById('toast-container');
    return {
        show(message, duration = 2600) {
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = message;
            container.appendChild(toast);
            setTimeout(() => toast.remove(), duration);
        }
    };
})();

/* =============================
 * Floating text
 * ============================= */
const FloatingText = (() => {
    const container = document.getElementById('floating-text-container');
    return {
        spawn(value, x, y, crit = false) {
            if (state.settings.reduceFX) return;
            const span = document.createElement('span');
            span.textContent = value;
            span.className = crit ? 'floating-text crit' : 'floating-text';
            span.style.left = `${x - container.offsetLeft}px`;
            span.style.top = `${y - container.offsetTop}px`;
            container.appendChild(span);
            requestAnimationFrame(() => span.classList.add('visible'));
            setTimeout(() => span.remove(), 900);
        }
    };
})();

/* =============================
 * Economía base
 * ============================= */
class Economy {
    constructor(state) {
        this.state = state;
    }
    getTalentMultiplier(type) {
        const points = this.state.talents[type] || 0;
        if (type === 'click') return 1 + points * 0.12;
        if (type === 'auto') return 1 + points * 0.15;
        if (type === 'economy') return 1 - Math.min(0.3, points * 0.04);
        return 1;
    }
    getArtifactMultiplier(key, fallback = 1) {
        if (!this.state.artifacts[key]) return fallback;
        return fallback + this.state.artifacts[key] * 0.05;
    }
    baseEPC() {
        let epc = BALANCE.EPC_BASE;
        epc *= this.getTalentMultiplier('click');
        epc *= 1 + (this.state.upgrades['click-power'] || 0) * 0.25;
        epc *= this.state.boosts.overclock.active ? BALANCE.BOOSTS.overclock.multiplier : 1;
        epc *= this.state.fever.active ? (BALANCE.FEVER.MULTIPLIER + AB.flags.boostStrength) : 1;
        epc *= 1 + (this.state.comboLevel - 1) * 0.25;
        epc *= this.getArtifactMultiplier('chip-focal', 1);
        return epc;
    }
    baseEPS() {
        const base = BALANCE.EPS_BASE;
        const generatorProduction = this.state.generators.reduce((sum, g, idx) => {
            const def = BALANCE.GENERATORS[idx];
            const prod = BALANCE.PRODUCCION_BASE[def.id] * g.level;
            return sum + prod;
        }, 0);
        let eps = base + generatorProduction;
        eps *= this.getTalentMultiplier('auto');
        eps *= 1 + (this.state.upgrades['auto-efficiency'] || 0) * 0.25;
        eps *= this.state.fever.active ? (BALANCE.FEVER.MULTIPLIER + AB.flags.boostStrength) : 1;
        eps *= this.getArtifactMultiplier('nodo-ancestral', 1);
        return eps;
    }
    generatorCost(idx) {
        const def = BALANCE.GENERATORS[idx];
        const level = this.state.generators[idx].level;
        const scaling = BALANCE.COST_SCALING[idx] || 1.25;
        const discount = 1 - AB.flags.generatorDiscount - (this.state.upgrades['cost-reduction'] || 0) * 0.05;
        const frozen = this.state.boosts.costFreeze.active ? 1 : discount;
        const cost = def.baseCost * Math.pow(scaling, level) * frozen;
        return Math.max(def.baseCost * 0.2, cost);
    }
}

const economy = new Economy(state);

/* =============================
 * UI Management
 * ============================= */
class UIManager {
    constructor() {
        this.hudEnergy = document.getElementById('hud-energy');
        this.hudEpc = document.getElementById('hud-epc');
        this.hudEps = document.getElementById('hud-eps');
        this.hudMultipliers = document.getElementById('hud-multipliers');
        this.progressBar = document.getElementById('hud-progress-bar');
        this.comboFill = document.getElementById('combo-fill');
        this.comboCount = document.getElementById('combo-count');
        this.feverIndicator = document.getElementById('fever-indicator');
        this.generatorsList = document.getElementById('generators-list');
        this.upgradesList = document.getElementById('upgrades-list');
        this.artifactsList = document.getElementById('artifacts-list');
        this.talentsTree = document.getElementById('talents-tree');
        this.expeditionPanel = document.getElementById('expedition-panel');
        this.missionsDaily = document.getElementById('missions-daily');
        this.missionsWeekly = document.getElementById('missions-weekly');
        this.achievementsList = document.getElementById('achievements-list');
        this.marketPanel = document.getElementById('market-panel');
        this.ticker = document.getElementById('live-ticker');
    }
    initTabs() {
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
                audio.playFx(560, 0.08);
            });
        });
    }
    refreshHUD(epc, eps) {
        this.hudEnergy.textContent = Utils.formatNumber(state.energy);
        this.hudEpc.textContent = Utils.formatNumber(epc);
        this.hudEps.textContent = Utils.formatNumber(eps);
        const multipliers = [];
        if (state.fever.active) multipliers.push(`${I18N.es.fever} x${(BALANCE.FEVER.MULTIPLIER + AB.flags.boostStrength).toFixed(1)}`);
        if (state.boosts.overclock.active) multipliers.push('Overclock');
        this.hudMultipliers.textContent = multipliers.length ? multipliers.join(', ') : 'x1';
        const nextGoal = Math.max(1, BALANCE.PRESTIGE.BASE_REQUIREMENT);
        const progress = Utils.clamp(state.energy / nextGoal, 0, 1);
        this.progressBar.style.width = `${progress * 100}%`;
        this.comboFill.style.width = `${Utils.clamp(state.comboTimer / BALANCE.COMBO.WINDOW_MS, 0, 1) * 100}%`;
        this.comboCount.textContent = `x${state.comboLevel.toFixed(2)}`;
        this.feverIndicator.textContent = `${I18N.es.fever} x${state.fever.active ? (BALANCE.FEVER.MULTIPLIER + AB.flags.boostStrength).toFixed(1) : '1'}`;
    }
    renderGenerators() {
        this.generatorsList.innerHTML = '';
        BALANCE.GENERATORS.forEach((gen, idx) => {
            const li = document.createElement('li');
            li.className = 'item-card';
            const cost = economy.generatorCost(idx);
            li.innerHTML = `
                <div>
                    <h4>${gen.name} (Lv.${state.generators[idx].level})</h4>
                    <p>Produce ${Utils.formatNumber(BALANCE.PRODUCCION_BASE[gen.id])}/s</p>
                    <p>Coste: ${Utils.formatNumber(cost)}</p>
                </div>
                <button data-index="${idx}">Comprar</button>
            `;
            const btn = li.querySelector('button');
            btn.disabled = state.energy < cost;
            btn.addEventListener('click', () => {
                if (state.energy >= cost) {
                    state.energy -= cost;
                    state.generators[idx].level += 1;
                    audio.playFx(320, 0.12);
                    analytics.log('level_up', { generator: gen.id, level: state.generators[idx].level });
                    ui.renderGenerators();
                    updateMissions('generators', 1);
                }
            });
            this.generatorsList.appendChild(li);
        });
    }
    renderUpgrades() {
        const upgrades = [
            { id: 'click-power', name: 'Pulso Empoderado', cost: 250, desc: '+25% EPC por nivel' },
            { id: 'auto-efficiency', name: 'Matrices Autónomas', cost: 500, desc: '+25% EPS por nivel' },
            { id: 'cost-reduction', name: 'Logística Cuántica', cost: 800, desc: '-5% Costes por nivel' }
        ];
        this.upgradesList.innerHTML = '';
        upgrades.forEach(upg => {
            const level = state.upgrades[upg.id] || 0;
            const cost = upg.cost * Math.pow(1.35, level);
            const item = document.createElement('li');
            item.className = 'item-card';
            item.innerHTML = `
                <div>
                    <h4>${upg.name} (Lv.${level})</h4>
                    <p>${upg.desc}</p>
                    <p>Coste: ${Utils.formatNumber(cost)}</p>
                </div>
                <button data-id="${upg.id}">${level ? 'Mejorar' : 'Comprar'}</button>
            `;
            const btn = item.querySelector('button');
            btn.disabled = state.energy < cost;
            btn.addEventListener('click', () => {
                if (state.energy >= cost) {
                    state.energy -= cost;
                    state.upgrades[upg.id] = level + 1;
                    audio.playFx(640, 0.12);
                    analytics.log('upgrade', { upgrade: upg.id, level: state.upgrades[upg.id] });
                    ui.renderUpgrades();
                }
            });
            this.upgradesList.appendChild(item);
        });
    }
    renderArtifacts() {
        const artifacts = [
            { id: 'chip-focal', name: 'Chip Focal', desc: '+5% EPC por artefacto', cost: 5 },
            { id: 'nodo-ancestral', name: 'Nodo Ancestral', desc: '+5% EPS por artefacto', cost: 7 },
            { id: 'pulso', name: 'Pulso Resonante', desc: '+5% Prob. crítico', cost: 12 }
        ];
        this.artifactsList.innerHTML = '';
        artifacts.forEach(art => {
            const owned = state.artifacts[art.id] || 0;
            const li = document.createElement('li');
            li.className = 'item-card';
            li.innerHTML = `
                <div>
                    <h4>${art.name} (${owned})</h4>
                    <p>${art.desc}</p>
                    <p>Coste: ${art.cost} Núcleos</p>
                </div>
                <button data-id="${art.id}">Forjar</button>
            `;
            const btn = li.querySelector('button');
            btn.disabled = state.prestige.cores < art.cost;
            btn.addEventListener('click', () => {
                if (state.prestige.cores >= art.cost) {
                    state.prestige.cores -= art.cost;
                    state.artifacts[art.id] = owned + 1;
                    audio.playFx(760, 0.2);
                    analytics.log('artifact_purchase', { artifact: art.id, amount: state.artifacts[art.id] });
                    ui.renderArtifacts();
                }
            });
            this.artifactsList.appendChild(li);
        });
    }
    renderTalents() {
        const nodes = [
            { id: 'click', label: 'Clic', desc: '+12% EPC por punto' },
            { id: 'auto', label: 'Auto', desc: '+15% EPS por punto' },
            { id: 'economy', label: 'Economía', desc: '-4% Costes por punto' }
        ];
        this.talentsTree.innerHTML = '';
        nodes.forEach(node => {
            const div = document.createElement('div');
            div.className = `talent-node ${state.talents[node.id] ? 'active' : ''}`;
            div.innerHTML = `<strong>${node.label}</strong><small>${node.desc}</small><span>${state.talents[node.id] || 0}</span>`;
            div.addEventListener('click', () => {
                if (state.talents.points > 0) {
                    state.talents[node.id] = (state.talents[node.id] || 0) + 1;
                    state.talents.points -= 1;
                    audio.playFx(520, 0.1);
                    ui.renderTalents();
                }
            });
            this.talentsTree.appendChild(div);
        });
    }
    renderExpedition() {
        const panel = this.expeditionPanel;
        panel.innerHTML = '';
        if (!state.expedition.active) {
            const btn = document.createElement('button');
            btn.textContent = 'Iniciar Expedición';
            btn.addEventListener('click', () => startExpedition());
            panel.appendChild(btn);
            return;
        }
        const timeLeft = Math.max(0, state.expedition.duration - state.expedition.timer).toFixed(1);
        const status = document.createElement('div');
        status.textContent = `Tiempo restante: ${timeLeft}s | Nodo ${state.expedition.index + 1}/${state.expedition.nodes.length}`;
        panel.appendChild(status);
        const nodes = document.createElement('div');
        nodes.className = 'expedition-nodes';
        state.expedition.nodes.forEach((node, idx) => {
            const div = document.createElement('div');
            div.className = 'expedition-node';
            div.textContent = `${idx + 1}. ${node.label}`;
            if (idx === state.expedition.index) div.style.border = '1px solid var(--accent)';
            nodes.appendChild(div);
        });
        panel.appendChild(nodes);
    }
    renderMissions() {
        this.missionsDaily.innerHTML = '<h3>Misiones Diarias</h3>';
        BALANCE.MISSIONS.DAILY.forEach(m => {
            const progress = state.missions.daily[m.id] || 0;
            const done = progress >= m.target;
            const card = document.createElement('div');
            card.className = 'mission-card';
            card.innerHTML = `<strong>${m.id}</strong><div>${progress}/${m.target}</div>`;
            if (done) {
                const btn = document.createElement('button');
                btn.textContent = 'Reclamar';
                btn.addEventListener('click', () => claimMission('daily', m));
                card.appendChild(btn);
            }
            this.missionsDaily.appendChild(card);
        });
        this.missionsWeekly.innerHTML = '<h3>Misiones Semanales</h3>';
        BALANCE.MISSIONS.WEEKLY.forEach(m => {
            const progress = state.missions.weekly[m.id] || 0;
            const done = progress >= m.target;
            const card = document.createElement('div');
            card.className = 'mission-card';
            card.innerHTML = `<strong>${m.id}</strong><div>${progress}/${m.target}</div>`;
            if (done) {
                const btn = document.createElement('button');
                btn.textContent = 'Reclamar';
                btn.addEventListener('click', () => claimMission('weekly', m));
                card.appendChild(btn);
            }
            this.missionsWeekly.appendChild(card);
        });
    }
    renderAchievements() {
        this.achievementsList.innerHTML = '';
        BALANCE.ACHIEVEMENTS.forEach(ach => {
            const done = state.achievements[ach.id];
            const li = document.createElement('li');
            li.className = `item-card ${done ? '' : 'locked'}`;
            li.innerHTML = `<div><h4>${ach.id}</h4><p>Objetivo: ${ach.target}</p></div><div>${done ? '✔' : '—'}</div>`;
            this.achievementsList.appendChild(li);
        });
    }
    renderMarket() {
        this.marketPanel.innerHTML = '';
        BALANCE.MONETIZATION.PACKS.forEach(pack => {
            const btn = document.createElement('button');
            btn.textContent = `${pack.id} - ${pack.price.toFixed(2)} (IAP)`;
            btn.addEventListener('click', () => Monetization.purchase(pack));
            this.marketPanel.appendChild(btn);
        });
        BALANCE.MONETIZATION.ADS.forEach(ad => {
            const btn = document.createElement('button');
            btn.textContent = `${ad.id} - ${I18N.es.marketAds}`;
            btn.addEventListener('click', () => Monetization.watchAd(ad));
            this.marketPanel.appendChild(btn);
        });
    }
    setTicker(message) {
        this.ticker.textContent = message;
    }
}

const ui = new UIManager();
ui.initTabs();
ui.renderGenerators();
ui.renderUpgrades();
ui.renderArtifacts();
ui.renderTalents();
ui.renderExpedition();
ui.renderMissions();
ui.renderAchievements();
ui.renderMarket();

/* =============================
 * Misiones / Logros helpers
 * ============================= */
function updateMissions(type, amount) {
    const target = type === 'generators' ? BALANCE.MISSIONS.DAILY.find(m => m.id === 'daily_generators') : null;
    if (target) state.missions.daily[target.id] = (state.missions.daily[target.id] || 0) + amount;
    if (type === 'click') {
        const mission = BALANCE.MISSIONS.DAILY.find(m => m.id === 'daily_clicks');
        if (mission) state.missions.daily[mission.id] = (state.missions.daily[mission.id] || 0) + amount;
    }
    if (type === 'expedition') {
        const mission = BALANCE.MISSIONS.WEEKLY.find(m => m.id === 'weekly_expedition');
        if (mission) state.missions.weekly[mission.id] = (state.missions.weekly[mission.id] || 0) + amount;
    }
    ui.renderMissions();
}

function checkAchievements() {
    BALANCE.ACHIEVEMENTS.forEach(ach => {
        if (state.achievements[ach.id]) return;
        let progress = 0;
        if (ach.type === 'clicks') progress = state.totalClicks;
        if (ach.type === 'energy') progress = state.totalEnergy;
        if (ach.type === 'generators') progress = state.generators.reduce((sum, g) => sum + g.level, 0);
        if (ach.type === 'prestige') progress = state.prestige.count;
        if (progress >= ach.target) {
            state.achievements[ach.id] = true;
            Toasts.show(I18N.es.achievementUnlocked.replace('{name}', ach.id));
            analytics.log('achievement', { id: ach.id });
            applyReward(ach.reward);
        }
    });
    ui.renderAchievements();
}

function claimMission(type, mission) {
    if (type === 'daily') state.missions.daily[mission.id] = 0;
    if (type === 'weekly') state.missions.weekly[mission.id] = 0;
    Toasts.show(I18N.es.missionComplete.replace('{name}', mission.id));
    analytics.log('mission_complete', { id: mission.id, type });
    applyReward(mission.reward);
    ui.renderMissions();
}

function applyReward(reward) {
    if (!reward) return;
    if (reward.energy) state.energy += reward.energy;
    if (reward.core) state.prestige.cores += reward.core;
    if (reward.boost) activateBoost(reward.boost);
    if (reward.artifact) {
        state.artifacts[reward.artifact] = (state.artifacts[reward.artifact] || 0) + 1;
        ui.renderArtifacts();
    }
    if (reward.talent) {
        state.talents.points += 1;
        ui.renderTalents();
    }
    if (reward.expeditionDouble) {
        state.expedition.loot *= 2;
    }
}

/* =============================
 * Monetización simulada
 * ============================= */
const Monetization = (() => {
    const purchase = (pack) => {
        Toasts.show(I18N.es.marketIAP);
        analytics.log('purchase_attempt', { id: pack.id });
        setTimeout(() => {
            analytics.log('purchase_success', { id: pack.id });
            Toasts.show(I18N.es.purchaseComplete);
            applyReward(pack.reward);
            if (pack.reward.removeAds) state.settings.removeAds = true;
        }, 800);
    };
    const watchAd = (ad) => {
        if (state.settings.removeAds) {
            applyReward({ boost: 'autoclick' });
            return;
        }
        const last = state.market.ads[ad.id] || 0;
        const now = Date.now();
        if (now - last < ad.cooldown * 1000) {
            Toasts.show('Cooldown activo');
            return;
        }
        analytics.log('ad_offer', { id: ad.id });
        setTimeout(() => {
            analytics.log('ad_shown', { id: ad.id });
            applyReward(ad.reward);
            state.market.ads[ad.id] = Date.now();
            analytics.log('ad_claimed', { id: ad.id });
        }, 500);
    };
    return { purchase, watchAd };
})();

/* =============================
 * Expediciones
 * ============================= */
function startExpedition() {
    if (state.expedition.active) return;
    const rng = new Utils.RNG();
    const duration = Utils.randRange(BALANCE.EXPEDITION.duration.min, BALANCE.EXPEDITION.duration.max);
    const nodeCount = 5;
    const nodes = Array.from({ length: nodeCount }).map(() => {
        const roll = Math.random();
        let pool = BALANCE.EXPEDITION.nodes[0];
        if (roll < BALANCE.EXPEDITION.blessingChance) {
            pool = BALANCE.EXPEDITION.nodes.filter(n => n.type === 'blessing');
        } else if (roll < BALANCE.EXPEDITION.blessingChance + BALANCE.EXPEDITION.curseChance) {
            pool = BALANCE.EXPEDITION.nodes.filter(n => n.type === 'curse');
        } else {
            pool = BALANCE.EXPEDITION.nodes;
        }
        return pool[Math.floor(rng.nextFloat() * pool.length)];
    });
    state.expedition = { active: true, timer: 0, duration, nodes, index: 0, loot: 0, modifiers: {} };
    analytics.log('expedition_start', { duration, nodes: nodes.map(n => n.id) });
    ui.renderExpedition();
}

function advanceExpedition(dt) {
    if (!state.expedition.active) return;
    state.expedition.timer += dt;
    const nodeDuration = state.expedition.duration / state.expedition.nodes.length;
    const newIndex = Math.min(state.expedition.nodes.length - 1, Math.floor(state.expedition.timer / nodeDuration));
    if (newIndex !== state.expedition.index) {
        state.expedition.index = newIndex;
        const node = state.expedition.nodes[newIndex];
        applyExpeditionModifier(node);
        Toasts.show(`Nodo: ${node.label}`);
    }
    if (state.expedition.timer >= state.expedition.duration) {
        finishExpedition();
    }
}

function applyExpeditionModifier(node) {
    const mod = state.expedition.modifiers;
    Object.keys(node.effect).forEach(key => {
        mod[key] = (mod[key] || 0) + node.effect[key];
    });
}

function finishExpedition() {
    state.expedition.active = false;
    const reward = (economy.baseEPS() + economy.baseEPC() * 10) * 5;
    state.energy += reward;
    state.expedition.loot += reward * BALANCE.BOOSTS.expedition.rewardMultiplier;
    analytics.log('expedition_finish', { reward: reward });
    Toasts.show(I18N.es.expeditionComplete);
    updateMissions('expedition', 1);
    ui.renderExpedition();
}

/* =============================
 * Eventos temporales
 * ============================= */
const Events = (() => {
    let timer = 0;
    let nextEvent = 90;
    const rollEvent = () => {
        const events = ['fever', 'merchant', 'comet'];
        return events[Math.floor(Math.random() * events.length)];
    };
    const trigger = (type) => {
        analytics.log('event', { type });
        if (type === 'fever') {
            activateFever();
            Toasts.show('Evento: Fiebre');
        }
        if (type === 'merchant') {
            Toasts.show('Mercader: descuentos temporales');
            activateBoost('costFreeze');
        }
        if (type === 'comet') {
            Toasts.show('Cometa: lluvia de energía');
            state.energy += economy.baseEPS() * 15;
        }
        nextEvent = 120 + Math.random() * 60;
    };
    return {
        update(dt) {
            timer += dt;
            if (timer >= nextEvent) {
                timer = 0;
                trigger(rollEvent());
            }
        },
        force() {
            timer = 0;
            trigger(rollEvent());
        }
    };
})();

/* =============================
 * Boosts / Fiebre
 * ============================= */
function activateBoost(key) {
    const boost = state.boosts[key];
    if (!boost) return;
    boost.active = true;
    boost.timer = 0;
    if (boost.cooldown !== undefined) boost.cooldown = BALANCE.BOOSTS[key].cooldown;
    if (key === 'autoclick') autoclickTimer = 0;
}

function activateFever() {
    state.fever.active = true;
    state.fever.timer = 0;
    state.fever.cooldown = BALANCE.FEVER.COOLDOWN;
}

/* =============================
 * Click handling
 * ============================= */
const coreButton = document.getElementById('core-button');
let lastClickTime = 0;
let autoclickTimer = 0;

function performClick(event) {
    const now = performance.now();
    const delta = now - lastClickTime;
    if (delta < BALANCE.COMBO.WINDOW_MS) {
        state.comboTimer = Math.min(BALANCE.COMBO.WINDOW_MS, state.comboTimer + BALANCE.COMBO.WINDOW_MS * 0.2);
        state.comboLevel = Math.min(BALANCE.COMBO.MAX_MULT, state.comboLevel + BALANCE.COMBO.STEP);
    } else {
        state.comboLevel = 1;
        state.comboTimer = BALANCE.COMBO.WINDOW_MS;
    }
    lastClickTime = now;
    state.totalClicks += 1;
    updateMissions('click', 1);
    const critChance = BALANCE.CRIT_CHANCE + (state.artifacts['pulso'] || 0) * 0.05 + AB.flags.critChance;
    const crit = Math.random() < critChance;
    const epc = economy.baseEPC() * (crit ? BALANCE.CRIT_MULT : 1);
    state.energy += epc;
    state.totalEnergy += epc;
    audio.playFx(crit ? 880 : 440, crit ? 0.2 : 0.08);
    if (event) {
        const { clientX, clientY } = event.type.includes('touch') ? event.touches[0] : event;
        FloatingText.spawn(`+${Utils.formatNumber(epc)}`, clientX, clientY, crit);
        fxManager.spawn(clientX, clientY, crit ? '#ff9ff3' : '#a29bfe');
    }
    checkAchievements();
}

coreButton.addEventListener('mousedown', performClick);
coreButton.addEventListener('touchstart', performClick, { passive: true });
document.addEventListener('keydown', (ev) => {
    if (ev.code === 'Space') {
        ev.preventDefault();
        performClick({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
    }
    if (ev.code === 'Digit1') tryBuyGenerator(0);
    if (ev.code === 'Digit2') tryBuyGenerator(1);
    if (ev.code === 'Digit3') tryBuyGenerator(2);
    if (ev.code === 'Digit4') tryBuyGenerator(3);
    if (ev.code === 'Digit5') tryBuyGenerator(4);
    if (ev.code === 'KeyP') state.settings.reduceFX = !state.settings.reduceFX;
    if (ev.code === 'KeyD') toggleDebug();
});

function tryBuyGenerator(idx) {
    const cost = economy.generatorCost(idx);
    if (state.energy >= cost) {
        state.energy -= cost;
        state.generators[idx].level += 1;
        audio.playFx(320, 0.12);
        analytics.log('level_up', { generator: BALANCE.GENERATORS[idx].id, level: state.generators[idx].level });
        ui.renderGenerators();
    }
}

/* =============================
 * Debug overlay
 * ============================= */
const debugOverlay = document.getElementById('debug-overlay');
const debugInfo = document.getElementById('debug-info');
document.querySelectorAll('.debug-actions button').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.dataset.debug;
        if (action === 'energy') state.energy += 1e6;
        if (action === 'skip-expedition') finishExpedition();
        if (action === 'event') Events.force();
    });
});

function toggleDebug() {
    state.debug.unlocked = !state.debug.unlocked;
    debugOverlay.hidden = !state.debug.unlocked;
    if (state.debug.unlocked) Toasts.show(I18N.es.debugUnlocked);
}

/* =============================
 * Guardado y offline
 * ============================= */
function handleOfflineGains() {
    const now = Date.now();
    const diff = now - state.stats.lastSave;
    if (diff <= 0) return;
    const max = 1000 * 60 * 60 * 8;
    const clamped = Math.min(diff, max);
    const gain = economy.baseEPS() * (clamped / 1000);
    if (gain > 0) {
        state.energy += gain;
        Toasts.show(I18N.es.offlineGains.replace('{value}', Utils.formatNumber(gain)));
    }
}

window.addEventListener('beforeunload', () => {
    analytics.end();
    saveManager.save(state);
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) saveManager.save(state);
});

setInterval(() => {
    state.stats.lastSave = Date.now();
    saveManager.save(state);
}, 10000);

handleOfflineGains();

/* =============================
 * Opciones UI
 * ============================= */
const toggleHighContrast = document.getElementById('toggle-high-contrast');
const toggleReduceFx = document.getElementById('toggle-reduce-fx');
const sliderFx = document.getElementById('slider-fx-volume');
const sliderMusic = document.getElementById('slider-music-volume');
const btnSave = document.getElementById('btn-save');
const btnLoad = document.getElementById('btn-load');
const btnExport = document.getElementById('btn-export');
const btnImport = document.getElementById('btn-import');
const btnWipe = document.getElementById('btn-wipe');

toggleHighContrast.checked = state.settings.highContrast;
toggleReduceFx.checked = state.settings.reduceFX;
sliderFx.value = state.settings.fxVolume;
sliderMusic.value = state.settings.musicVolume;

toggleHighContrast.addEventListener('change', () => {
    state.settings.highContrast = toggleHighContrast.checked;
    app.classList.toggle('high-contrast', state.settings.highContrast);
});

toggleReduceFx.addEventListener('change', () => {
    state.settings.reduceFX = toggleReduceFx.checked;
    app.classList.toggle('reduce-fx', state.settings.reduceFX);
});

sliderFx.addEventListener('input', () => {
    state.settings.fxVolume = Number(sliderFx.value);
    audio.setFxVolume(state.settings.fxVolume);
});

sliderMusic.addEventListener('input', () => {
    state.settings.musicVolume = Number(sliderMusic.value);
    audio.setMusicVolume(state.settings.musicVolume);
});

btnSave.addEventListener('click', () => saveManager.save(state));
btnLoad.addEventListener('click', () => {
    const loaded = saveManager.load();
    if (loaded) state = loaded;
});
btnExport.addEventListener('click', () => {
    const data = saveManager.export(state);
    navigator.clipboard.writeText(data);
    Toasts.show('Copiado al portapapeles');
});
btnImport.addEventListener('click', async () => {
    const raw = prompt('Pega el código de guardado');
    if (!raw) return;
    const data = saveManager.import(raw);
    if (data) state = data;
});
btnWipe.addEventListener('click', () => {
    if (confirm('¿Seguro?') && confirm('Confirmar borrado')) {
        saveManager.wipe();
        state = new GameState();
        ui.renderGenerators();
        ui.renderUpgrades();
        ui.renderArtifacts();
        ui.renderTalents();
        ui.renderExpedition();
        ui.renderMissions();
        ui.renderAchievements();
    }
});

/* =============================
 * FTUE
 * ============================= */
const tutorialSteps = [
    I18N.es.tutorialStep1,
    I18N.es.tutorialStep2,
    I18N.es.tutorialStep3,
    I18N.es.tutorialStep4,
    I18N.es.tutorialStep5
];

function updateFTUE() {
    if (state.ftue.completed) return;
    const step = tutorialSteps[state.ftue.step];
    if (!step) {
        state.ftue.completed = true;
        analytics.log('ftue_complete');
        return;
    }
    ui.setTicker(step);
}

updateFTUE();

/* =============================
 * Game loop
 * ============================= */
let lastTime = performance.now();
function gameLoop(now) {
    const dt = (now - lastTime) / 1000;
    lastTime = now;

    const epc = economy.baseEPC();
    const eps = economy.baseEPS();

    state.energy += eps * dt;
    state.totalEnergy += eps * dt;

    if (state.comboTimer > 0) state.comboTimer -= dt * 1000; else state.comboLevel = 1;

    if (state.fever.active) {
        state.fever.timer += dt;
        if (state.fever.timer >= BALANCE.FEVER.BASE_DURATION + AB.flags.feverDuration) {
            state.fever.active = false;
            state.fever.timer = 0;
        }
    } else if (state.fever.cooldown > 0) {
        state.fever.cooldown -= dt;
    }

    Object.keys(state.boosts).forEach(key => {
        const boost = state.boosts[key];
        if (boost.active) {
            boost.timer += dt;
            if (boost.timer >= BALANCE.BOOSTS[key].duration) {
                boost.active = false;
                boost.timer = 0;
            }
        } else if (boost.cooldown) {
            boost.cooldown = Math.max(0, boost.cooldown - dt);
        }
    });

    if (state.boosts.autoclick.active) {
        autoclickTimer += dt;
        const interval = BALANCE.BOOSTS.autoclick.interval;
        while (autoclickTimer >= interval) {
            autoclickTimer -= interval;
            performClick({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
        }
    }

    if (state.expedition.active) advanceExpedition(dt);
    Events.update(dt);

    fxManager.update(dt);

    ui.refreshHUD(epc, eps);
    ui.renderExpedition();

    if (state.debug.unlocked) {
        debugInfo.textContent = `Energía: ${state.energy.toFixed(2)}\nEPC: ${epc.toFixed(2)}\nEPS: ${eps.toFixed(2)}\nPrestigios: ${state.prestige.count}`;
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

/* =============================
 * Prestigio control
 * ============================= */
function checkPrestige() {
    const potential = BALANCE.PRESTIGE.FORMULA(state.totalEnergy, state.prestige.count);
    if (potential > 0) {
        ui.setTicker(I18N.es.prestigeReady.replace('{value}', potential));
    }
    return potential;
}

const prestigeBtn = document.createElement('button');
prestigeBtn.textContent = I18N.es.prestige;
prestigeBtn.className = 'secondary';
prestigeBtn.addEventListener('click', () => {
    const reward = checkPrestige();
    if (reward > 0) {
        const previous = state;
        const totalTalentPoints = (previous.talents.click || 0) + (previous.talents.auto || 0) + (previous.talents.economy || 0);
        const newState = new GameState();
        newState.settings = { ...previous.settings };
        newState.prestige.cores = (previous.prestige.cores || 0) + reward;
        newState.prestige.count = (previous.prestige.count || 0) + 1;
        newState.artifacts = { ...previous.artifacts };
        newState.talents.points = totalTalentPoints + 2;
        state = newState;
        analytics.log('prestige', { reward });
        Toasts.show('Prestigio completado');
        ui.renderGenerators();
        ui.renderUpgrades();
        ui.renderTalents();
        ui.renderArtifacts();
        ui.renderExpedition();
    }
});

document.getElementById('tab-options').appendChild(prestigeBtn);

/* =============================
 * Noticias dinámicas
 * ============================= */
const news = [
    'Consejo: Las rachas de clic aumentan el EPC. ¡No pierdas el ritmo!',
    'Recuerda prestigiar para obtener Núcleos y desbloquear artefactos.',
    'Completa expediciones para modificar temporalmente tu estilo de juego.',
    'Los anuncios recompensados se pueden sustituir por bonificaciones si compras Remove Ads.'
];
let newsIndex = 0;
setInterval(() => {
    ui.setTicker(news[newsIndex]);
    newsIndex = (newsIndex + 1) % news.length;
}, 15000);

/* =============================
 * Manual de balance (consola)
 * ============================= */
function printBalanceManual() {
    console.log('%cManual de Balance', 'color:#6c5ce7;font-size:14px');
    console.log('Ajusta BALANCE.EPC_BASE y BALANCE.EPS_BASE para acelerar o ralentizar el progreso inicial.');
    console.log('Modifica BALANCE.COST_SCALING para cambiar la progresión de costes de generadores.');
    console.log('Usa BALANCE.BOOSTS para variar duración y multiplicadores de boosts.');
    console.log('Actualiza BALANCE.EXPEDITION para definir nodos y probabilidades de expediciones.');
    console.log('Consulta BALANCE.PRESTIGE.FORMULA para ajustar la conversión de energía a Núcleos.');
    console.log('Flags A/B activos:', AB.flags);
}

printBalanceManual();


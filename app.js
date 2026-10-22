/**
 * Human Body Explorer — Master Application Controller
 * Fully interactive anatomy atlas, process visualizer, comparison engine, quiz center, and search.
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentView: 'front', // 'front' | 'back'
    currentSystemFilter: 'all',
    selectedOrganId: 'heart',
    currentProcessId: 'cardiac-cycle',
    currentProcessStep: 0,
    currentComparisonId: 'arteries-vs-veins',
    quiz: {
      filteredQuestions: [],
      currentIndex: 0,
      score: 0,
      answered: false
    },
    bookmarks: JSON.parse(localStorage.getItem('hbe_bookmarks') || '[]'),
    mastered: JSON.parse(localStorage.getItem('hbe_mastered') || '[]'),
    theme: localStorage.getItem('hbe_theme') || 'light',
    soundEnabled: localStorage.getItem('hbe_sound') !== 'false'
  };

  // Web Audio API Synthesizer (Zero external dependencies)
  let audioCtx = null;
  function playTone(freq = 440, type = 'sine', duration = 0.08, gainVal = 0.05) {
    if (!state.soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  function playSuccessChime() {
    playTone(523.25, 'triangle', 0.1, 0.06); // C5
    setTimeout(() => playTone(659.25, 'triangle', 0.15, 0.06), 80); // E5
  }

  function playErrorChime() {
    playTone(330, 'sawtooth', 0.12, 0.04);
    setTimeout(() => playTone(277.18, 'sawtooth', 0.15, 0.04), 90);
  }

  // ==========================================================================
  // SVG Anatomical Body Generation
  // ==========================================================================
  function renderBodySVG(view = 'front', systemFilter = 'all') {
    const container = document.getElementById('body-svg-wrapper');
    if (!container) return;

    const organs = (window.ORGANS_DATA || []).filter(o => o.view === view);

    // Dynamic SVG template with realistic anatomical silhouette, organ layers, and interactive hotspot pins
    let svgHTML = `
      <svg class="body-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Interactive Human Body Model">
        <defs>
          <linearGradient id="bodySkinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.08" />
            <stop offset="100%" stop-color="#0d9488" stop-opacity="0.14" />
          </linearGradient>
          <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Base Anatomical Silhouette (Human Proportions) -->
        <g class="body-silhouette">
    `;

    if (view === 'front') {
      svgHTML += `
          <!-- Front Body Contour -->
          <!-- Head & Cranium -->
          <ellipse cx="50" cy="11" rx="8" ry="9" fill="url(#bodySkinGrad)" stroke="var(--border-strong)" stroke-width="0.8" />
          <!-- Neck -->
          <path d="M47 19 L47 23 L53 23 L53 19 Z" fill="url(#bodySkinGrad)" stroke="var(--border-strong)" stroke-width="0.8" />
          <!-- Clavicles & Shoulders -->
          <path d="M47 23 C42 24 35 25 30 29 C28 35 27 50 24 68 C23 72 24 75 25 75 C26 75 27 72 28 68 C30 55 32 42 34 35 L36 34 L36 58 C36 62 44 64 50 64 C56 64 64 62 64 58 L64 34 L66 35 C68 42 70 55 72 68 C73 72 74 75 75 75 C76 75 77 72 76 68 C73 50 72 35 70 29 C65 25 58 24 53 23 Z" 
                fill="url(#bodySkinGrad)" stroke="var(--border-strong)" stroke-width="0.8" />
          <!-- Lower Pelvis & Legs -->
          <path d="M37 62 L39 78 C40 84 41 93 41 96 C41 97 45 97 45 96 C46 92 48 82 49 74 L50 70 L51 74 C52 82 54 92 55 96 C55 97 59 97 59 96 C59 93 60 84 61 78 L63 62 Z" 
                fill="url(#bodySkinGrad)" stroke="var(--border-strong)" stroke-width="0.8" />
          
          <!-- Organ Silhouettes (Front) -->
          <!-- Ribcage Guide -->
          <ellipse cx="50" cy="34" rx="14" ry="10" fill="none" stroke="var(--border-subtle)" stroke-dasharray="1.5,1.5" stroke-width="0.6" />
          <!-- Lungs Outline -->
          <path d="M43 27 C38 27 35 32 36 39 C38 41 43 40 44 38 Z" fill="#0284c7" fill-opacity="0.15" stroke="#0284c7" stroke-width="0.5" />
          <path d="M57 27 C62 27 65 32 64 39 C62 41 57 40 56 38 Z" fill="#0284c7" fill-opacity="0.15" stroke="#0284c7" stroke-width="0.5" />
          <!-- Heart Silhouette -->
          <path d="M52 29 C50 27 47 28 47 31 C47 34 52 37 52 37 C52 37 57 34 57 31 C57 28 54 27 52 29 Z" fill="#e11d48" fill-opacity="0.3" stroke="#e11d48" stroke-width="0.7" />
          <!-- Liver in RUQ -->
          <path d="M43 39 C40 39 37 42 38 46 C41 48 48 48 50 45 C50 41 47 39 43 39 Z" fill="#d97706" fill-opacity="0.25" stroke="#d97706" stroke-width="0.5" />
          <!-- Stomach in LUQ -->
          <path d="M51 40 C49 41 51 47 55 47 C57 47 58 43 56 41 C54 39 52 40 51 40 Z" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="0.5" />
          <!-- Small Intestines Center -->
          <ellipse cx="50" cy="52" rx="7" ry="5" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="0.5" />
          <!-- Bladder in Pelvis -->
          <ellipse cx="50" cy="63" rx="4" ry="3" fill="#0d9488" fill-opacity="0.25" stroke="#0d9488" stroke-width="0.5" />
      `;
    } else {
      svgHTML += `
          <!-- Posterior Body Contour -->
          <!-- Head & Occiput -->
          <ellipse cx="50" cy="11" rx="8" ry="9" fill="url(#bodySkinGrad)" stroke="var(--border-strong)" stroke-width="0.8" />
          <!-- Neck & Trapezius -->
          <path d="M47 19 L45 24 L55 24 L53 19 Z" fill="url(#bodySkinGrad)" stroke="var(--border-strong)" stroke-width="0.8" />
          <!-- Back & Shoulders -->
          <path d="M45 24 C40 25 35 26 30 30 C28 36 27 51 24 68 C23 72 24 75 25 75 C26 75 27 72 28 68 C30 55 32 42 34 35 L36 34 L36 58 C36 62 44 65 50 65 C56 65 64 62 64 58 L64 34 L66 35 C68 42 70 55 72 68 C73 72 74 75 75 75 C76 75 77 72 76 68 C73 51 72 36 70 30 C65 26 60 25 55 24 Z" 
                fill="url(#bodySkinGrad)" stroke="var(--border-strong)" stroke-width="0.8" />
          <!-- Gluteal Region & Back of Legs -->
          <path d="M37 62 C37 66 42 69 49 69 L49 74 C50 82 52 92 53 96 C53 97 49 97 49 96 C48 93 46 84 45 78 L43 68 C40 68 37 65 37 62 Z" 
                fill="url(#bodySkinGrad)" stroke="var(--border-strong)" stroke-width="0.8" />
          <path d="M63 62 C63 66 58 69 51 69 L51 74 C50 82 48 92 47 96 C47 97 51 97 51 96 C52 93 54 84 55 78 L57 68 C60 68 63 65 63 62 Z" 
                fill="url(#bodySkinGrad)" stroke="var(--border-strong)" stroke-width="0.8" />
          
          <!-- Vertebral Column (Spine) -->
          <line x1="50" y1="20" x2="50" y2="62" stroke="#64748b" stroke-width="1.8" stroke-dasharray="2,1" />
          <!-- Cerebellum at base of skull -->
          <ellipse cx="50" cy="15" rx="5" ry="3" fill="#7c3aed" fill-opacity="0.35" stroke="#7c3aed" stroke-width="0.6" />
          <!-- Retroperitoneal Kidneys -->
          <ellipse cx="43" cy="46" rx="3.5" ry="4.5" fill="#0d9488" fill-opacity="0.3" stroke="#0d9488" stroke-width="0.6" />
          <ellipse cx="57" cy="45" rx="3.5" ry="4.5" fill="#0d9488" fill-opacity="0.3" stroke="#0d9488" stroke-width="0.6" />
      `;
    }

    svgHTML += `</g><!-- End silhouette -->`;

    // Hotspot Pins Layer
    svgHTML += `<g class="body-hotspots">`;
    organs.forEach(organ => {
      if (!organ.hotspot) return;

      const matchesSystem = systemFilter === 'all' || 
        organ.systemId === systemFilter || 
        (organ.relatedSystemIds && organ.relatedSystemIds.includes(systemFilter));

      const isSelected = organ.id === state.selectedOrganId;
      const opacity = matchesSystem ? "1" : "0.2";
      const system = (window.SYSTEMS_DATA || []).find(s => s.id === organ.systemId);
      const color = system ? system.color : "var(--accent-cyan)";

      svgHTML += `
        <g class="organ-hotspot ${isSelected ? 'active' : ''}" 
           id="hotspot-${organ.id}" 
           data-id="${organ.id}" 
           style="opacity: ${opacity};"
           role="button" 
           tabindex="0"
           aria-label="Inspect ${organ.name}">
          <!-- Pulsing Outer Ring -->
          <circle class="pin-outer" cx="${organ.hotspot.x}" cy="${organ.hotspot.y}" r="4" style="fill: ${color};" />
          <!-- Solid Core Marker -->
          <circle class="pin-core" cx="${organ.hotspot.x}" cy="${organ.hotspot.y}" r="2" style="fill: ${color};" />
        </g>
      `;
    });
    svgHTML += `</g></svg>`;

    container.innerHTML = svgHTML;

    // Attach Hotspot Listeners
    container.querySelectorAll('.organ-hotspot').forEach(el => {
      el.addEventListener('click', function () {
        const organId = this.getAttribute('data-id');
        selectOrgan(organId);
        playTone(600, 'sine', 0.05);
      });

      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const organId = this.getAttribute('data-id');
          selectOrgan(organId);
        }
      });
    });
  }

  // ==========================================================================
  // Quick Inspector Panel Updates
  // ==========================================================================
  function selectOrgan(organId) {
    const organ = (window.ORGANS_DATA || []).find(o => o.id === organId);
    if (!organ) return;

    state.selectedOrganId = organId;

    // Update active state in SVG
    document.querySelectorAll('.organ-hotspot').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-id') === organId);
    });

    // If organ belongs to the opposite view, switch view smoothly!
    if (organ.view && organ.view !== state.currentView) {
      state.currentView = organ.view;
      document.querySelectorAll('.view-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-view') === organ.view);
      });
      renderBodySVG(state.currentView, state.currentSystemFilter);
    }

    const system = (window.SYSTEMS_DATA || []).find(s => s.id === organ.systemId);

    // Update Inspector DOM
    const nameEl = document.getElementById('inspect-name');
    const latinEl = document.getElementById('inspect-latin');
    const systemTag = document.getElementById('inspect-system-tag');
    const regionTag = document.getElementById('inspect-region-tag');
    const summaryEl = document.getElementById('inspect-summary');
    const bulletsEl = document.getElementById('inspect-bullets');
    const illustrationEl = document.getElementById('inspect-illustration');
    const bookmarkBtn = document.getElementById('inspect-bookmark-btn');

    if (nameEl) nameEl.textContent = organ.name;
    if (latinEl) latinEl.textContent = organ.latinName || '';
    if (systemTag) {
      systemTag.textContent = system ? system.name : organ.systemId;
      systemTag.style.backgroundColor = system ? system.color : 'var(--accent-cyan)';
    }
    if (regionTag) {
      regionTag.textContent = organ.bodyRegion ? organ.bodyRegion.toUpperCase() : 'ANATOMY';
    }
    if (summaryEl) summaryEl.textContent = organ.overview;

    if (bulletsEl) {
      bulletsEl.innerHTML = (organ.primaryFunctions || [])
        .slice(0, 3)
        .map(fn => `<li>${fn}</li>`)
        .join('');
    }

    // Generate Mini Schematic Diagram
    if (illustrationEl) {
      illustrationEl.innerHTML = generateMiniOrganDiagram(organ);
    }

    // Bookmark status
    if (bookmarkBtn) {
      const isSaved = state.bookmarks.includes(organ.id);
      bookmarkBtn.classList.toggle('bookmarked', isSaved);
      bookmarkBtn.setAttribute('title', isSaved ? 'Remove from Bookmarks' : 'Save to Bookmarks');
    }
  }

  // Generate SVG Mini Diagram for Quick Inspector
  function generateMiniOrganDiagram(organ) {
    const sysColor = (window.SYSTEMS_DATA || []).find(s => s.id === organ.systemId)?.color || '#0284c7';

    switch (organ.svgType) {
      case 'heart':
        return `
          <svg viewBox="0 0 100 100" width="120" height="120" style="filter: drop-shadow(0 4px 10px rgba(225, 29, 72, 0.3));">
            <path d="M50 25 C45 15 30 15 25 25 C18 38 35 55 50 75 C65 55 82 38 75 25 C70 15 55 15 50 25 Z" fill="#e11d48" />
            <!-- Aorta arch -->
            <path d="M46 22 C46 14 56 12 58 18" fill="none" stroke="#fb7185" stroke-width="4" stroke-linecap="round" />
            <!-- Superior Vena Cava -->
            <line x1="38" y1="14" x2="38" y2="25" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" />
            <circle cx="50" cy="45" r="3" fill="white" opacity="0.8" />
          </svg>
        `;
      case 'brain':
        return `
          <svg viewBox="0 0 100 100" width="120" height="120" style="filter: drop-shadow(0 4px 10px rgba(124, 58, 237, 0.3));">
            <path d="M50 20 C35 20 25 32 25 45 C25 58 35 65 42 66 L42 75 C42 78 46 80 50 80 C54 80 58 78 58 75 L58 66 C65 65 75 58 75 45 C75 32 65 20 50 20 Z" fill="#8b5cf6" />
            <!-- Gyri convolutions -->
            <path d="M35 35 Q45 40 40 48 Q35 55 45 58 M65 35 Q55 40 60 48 Q65 55 55 58" fill="none" stroke="#c4b5fd" stroke-width="2.5" stroke-linecap="round" />
          </svg>
        `;
      case 'lungs':
        return `
          <svg viewBox="0 0 100 100" width="120" height="120" style="filter: drop-shadow(0 4px 10px rgba(2, 132, 199, 0.3));">
            <line x1="50" y1="15" x2="50" y2="40" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
            <path d="M50 40 L40 48 M50 40 L60 48" stroke="#94a3b8" stroke-width="3" stroke-linecap="round" />
            <path d="M38 45 C28 45 22 55 24 72 C26 78 35 78 42 74 C44 65 42 50 38 45 Z" fill="#0284c7" opacity="0.85" />
            <path d="M62 45 C72 45 78 55 76 72 C74 78 65 78 58 74 C56 65 58 50 62 45 Z" fill="#0284c7" opacity="0.85" />
          </svg>
        `;
      case 'liver':
        return `
          <svg viewBox="0 0 100 100" width="120" height="120" style="filter: drop-shadow(0 4px 10px rgba(217, 119, 6, 0.3));">
            <path d="M25 40 C35 30 70 30 80 45 C85 55 75 68 55 70 C35 72 20 60 25 40 Z" fill="#d97706" />
            <path d="M50 34 L54 68" stroke="#fcd34d" stroke-width="1.5" stroke-dasharray="2,2" />
          </svg>
        `;
      case 'kidney':
        return `
          <svg viewBox="0 0 100 100" width="120" height="120" style="filter: drop-shadow(0 4px 10px rgba(13, 148, 136, 0.3));">
            <path d="M45 25 C30 25 25 45 35 65 C45 80 65 80 70 65 C75 50 60 48 55 48 C50 48 55 35 45 25 Z" fill="#0d9488" />
            <path d="M55 48 L65 58 L68 80" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" />
          </svg>
        `;
      default:
        return `
          <svg viewBox="0 0 100 100" width="120" height="120">
            <circle cx="50" cy="50" r="32" fill="${sysColor}" fill-opacity="0.2" stroke="${sysColor}" stroke-width="2.5" />
            <circle cx="50" cy="50" r="14" fill="${sysColor}" />
          </svg>
        `;
    }
  }

  // ==========================================================================
  // Explore by Category Section
  // ==========================================================================
  const CATEGORIES_DATA = [
    { name: "Organ Systems", color: "#8b5cf6", icon: "system", count: "11 Systems", desc: "Coordinated organ groups working together for holistic biological homeostasis." },
    { name: "Internal Organs", color: "#e11d48", icon: "heart", count: "16+ Organs", desc: "Heart, liver, lungs, kidneys, and stomach performing essential vegetative work." },
    { name: "Brain and Nervous System", color: "#7c3aed", icon: "brain", count: "8 Structures", desc: "Cerebrum, cerebellum, brainstem, spinal cord, and sensory nerves." },
    { name: "Glands and Hormones", color: "#d97706", icon: "zap", count: "7+ Glands", desc: "Hypothalamus, pituitary, thyroid, adrenal, and pancreatic endocrine units." },
    { name: "Bones and Skeleton", color: "#64748b", icon: "shield", count: "206 Bones", desc: "Living architectural framework, levers for motion, and mineral vault." },
    { name: "Muscles and Movement", color: "#dc2626", icon: "activity", count: "640+ Muscles", desc: "Striated voluntary fibers, sliding filaments, and motor power generation." },
    { name: "Sense Organs", color: "#0891b2", icon: "eye", count: "5 Senses", desc: "Eyes, cochlear hearing, olfaction, and gustation transducer organs." },
    { name: "Cells and Tissues", color: "#0d9488", icon: "layers", count: "Micro-structures", desc: "Nephrons, alveoli, intestinal villi, enterocytes, and podocytes." },
    { name: "Blood and Body Fluids", color: "#e11d48", icon: "droplet", count: "Fluid Matrix", desc: "Erythrocytes, leukocytes, thrombocytes, plasma, and lymph." },
    { name: "External Body Parts", color: "#ea580c", icon: "sun", count: "Integument", desc: "Epidermis, dermis, sensory mechanoreceptors, hair, and nails." }
  ];

  function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;

    grid.innerHTML = CATEGORIES_DATA.map(cat => `
      <div class="category-card" data-category="${cat.name}" style="--cat-color: ${cat.color}; --cat-accent: ${cat.color}99;">
        <div class="category-icon-wrapper">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <div style="font-size: 0.75rem; font-weight: 700; color: ${cat.color}; margin-bottom: 4px;">${cat.count}</div>
        <h3 class="category-name">${cat.name}</h3>
        <p class="category-desc">${cat.desc}</p>
        <div class="category-link-row">
          <span>Explore Category</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', function () {
        const catName = this.getAttribute('data-category');
        const catSelect = document.getElementById('directory-category-select');
        if (catSelect) {
          catSelect.value = catName;
          filterDirectory();
        }
        document.getElementById('organ-directory')?.scrollIntoView({ behavior: 'smooth' });
        playTone(500, 'sine', 0.05);
      });
    });
  }

  // ==========================================================================
  // "How It Works" Biological Process Visualizer
  // ==========================================================================
  function renderProcessTabs() {
    const wrapper = document.getElementById('process-tabs');
    if (!wrapper) return;

    const processes = window.PROCESSES_DATA || [];
    wrapper.innerHTML = processes.map(proc => `
      <button class="process-tab-btn ${proc.id === state.currentProcessId ? 'active' : ''}" 
              data-id="${proc.id}" role="tab">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10 8 16 12 10 16 10 8"></polygon>
        </svg>
        <span>${proc.title.split('(')[0]}</span>
      </button>
    `).join('');

    wrapper.querySelectorAll('.process-tab-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        state.currentProcessId = this.getAttribute('data-id');
        state.currentProcessStep = 0;
        wrapper.querySelectorAll('.process-tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderCurrentProcess();
        playTone(550, 'sine', 0.05);
      });
    });
  }

  function renderCurrentProcess() {
    const stage = document.getElementById('process-stage');
    if (!stage) return;

    const process = (window.PROCESSES_DATA || []).find(p => p.id === state.currentProcessId);
    if (!process) return;

    const stepIndex = state.currentProcessStep;
    const currentStep = process.steps[stepIndex];
    const totalSteps = process.steps.length;

    stage.innerHTML = `
      <div class="process-title-row">
        <div>
          <h3 class="process-heading">${process.title}</h3>
          <p class="process-subheading">${process.subtitle}</p>
        </div>
        <div style="font-size: 0.8125rem; font-weight: 700; color: var(--accent-cyan); background: var(--accent-cyan-light); padding: 6px 14px; border-radius: var(--radius-full);">
          Step ${stepIndex + 1} of ${totalSteps}
        </div>
      </div>

      <!-- Stepper Progress Nodes -->
      <div class="stepper-timeline">
        ${process.steps.map((s, idx) => `
          <div class="stepper-node ${idx < stepIndex ? 'completed' : ''} ${idx === stepIndex ? 'active' : ''}" 
               data-step="${idx}" 
               title="Step ${idx + 1}: ${s.title}"></div>
        `).join('')}
      </div>

      <!-- Step Content Grid -->
      <div class="step-content-grid">
        <div class="step-info-col">
          <div class="step-meta">
            <span class="step-badge">Step ${currentStep.stepNumber}</span>
            <span class="step-phase">${currentStep.phase}</span>
          </div>

          <h4 class="step-title">${currentStep.title}</h4>
          <p class="step-action-desc">${currentStep.action}</p>

          <div class="step-highlight-box">
            <strong>Biological Mechanism: </strong>${currentStep.chemicalOrElectricalEvent}
          </div>

          <div class="step-clinical-box">
            <strong>Clinical Insight: </strong>${currentStep.clinicalNote}
          </div>
        </div>

        <div class="step-visual-display">
          <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 14px;">
            Active Physiological Structures
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 24px;">
            ${(currentStep.structuresHighlighted || []).map(str => `
              <span class="organ-chip" style="background: var(--accent-cyan-light); color: var(--accent-cyan); font-weight: 700;">
                ${str}
              </span>
            `).join('')}
          </div>

          <!-- Dynamic SVG Animation Diagram for Step -->
          <div style="width: 100%; max-width: 260px; height: 180px; display: flex; align-items: center; justify-content: center;">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <circle cx="50" cy="50" r="38" fill="none" stroke="var(--border-strong)" stroke-width="3" stroke-dasharray="4,4" />
              <circle cx="50" cy="50" r="24" fill="var(--accent-cyan-light)" stroke="var(--accent-cyan)" stroke-width="2" />
              <text x="50" y="47" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--text-primary)">STEP ${stepIndex + 1}</text>
              <text x="50" y="58" text-anchor="middle" font-size="5" fill="var(--text-muted)">ACTIVE</text>
              <!-- Orbiting Particle -->
              <circle cx="${50 + 38 * Math.cos((stepIndex / totalSteps) * 2 * Math.PI)}" 
                      cy="${50 + 38 * Math.sin((stepIndex / totalSteps) * 2 * Math.PI)}" 
                      r="5" fill="var(--accent-coral)" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Navigation Bar -->
      <div class="step-nav-bar">
        <button class="stepper-btn prev" id="btn-step-prev" ${stepIndex === 0 ? 'disabled' : ''}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Previous Step</span>
        </button>

        <button class="stepper-btn next" id="btn-step-next" ${stepIndex === totalSteps - 1 ? 'disabled' : ''}>
          <span>Next Step</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    `;

    // Timeline Node clicks
    stage.querySelectorAll('.stepper-node').forEach(node => {
      node.addEventListener('click', function () {
        state.currentProcessStep = parseInt(this.getAttribute('data-step'), 10);
        renderCurrentProcess();
        playTone(600, 'sine', 0.04);
      });
    });

    document.getElementById('btn-step-prev')?.addEventListener('click', () => {
      if (state.currentProcessStep > 0) {
        state.currentProcessStep--;
        renderCurrentProcess();
        playTone(500, 'sine', 0.05);
      }
    });

    document.getElementById('btn-step-next')?.addEventListener('click', () => {
      if (state.currentProcessStep < totalSteps - 1) {
        state.currentProcessStep++;
        renderCurrentProcess();
        playTone(650, 'sine', 0.05);
      }
    });
  }

  // ==========================================================================
  // Organ Systems Section
  // ==========================================================================
  function renderSystems() {
    const grid = document.getElementById('systems-grid');
    if (!grid) return;

    const systems = window.SYSTEMS_DATA || [];
    grid.innerHTML = systems.map(sys => `
      <div class="system-card" style="--sys-color: ${sys.color};">
        <div class="system-card-top">
          <div class="system-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <span class="system-tag" style="background-color: ${sys.color};">${sys.name.split(' ')[0]}</span>
        </div>

        <h3 class="system-name">${sys.name}</h3>
        <div class="system-latin">${sys.latinName}</div>
        <div class="system-tagline">${sys.tagline}</div>
        <p class="system-overview">${sys.overview.substring(0, 180)}...</p>

        <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">
          Key Structures:
        </div>
        <div class="system-organs-chips">
          ${sys.majorOrgans.map(org => `<span class="organ-chip">${org}</span>`).join('')}
        </div>

        <div class="system-card-footer">
          <div style="font-size: 0.8125rem; font-weight: 700; color: var(--text-muted);">
            ${Object.values(sys.stats)[0]}
          </div>
          <button class="btn-open-detail" style="width: auto; padding: 8px 16px; font-size: 0.8125rem;" data-system-id="${sys.id}">
            <span>Explore</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `).join('');

    // Attach click listeners
    grid.querySelectorAll('.btn-open-detail').forEach(btn => {
      btn.addEventListener('click', function () {
        const sysId = this.getAttribute('data-system-id');
        // Filter directory by system
        state.currentSystemFilter = sysId;
        renderBodySVG(state.currentView, sysId);
        document.getElementById('body-explorer')?.scrollIntoView({ behavior: 'smooth' });
        playTone(550, 'sine', 0.05);
      });
    });
  }

  // ==========================================================================
  // All Organs Directory & Filter Engine
  // ==========================================================================
  let directoryLetterFilter = 'ALL';

  function renderAlphabetBar() {
    const bar = document.getElementById('directory-alpha-bar');
    if (!bar) return;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    bar.innerHTML = `
      <button class="alpha-btn ${directoryLetterFilter === 'ALL' ? 'active' : ''}" data-letter="ALL">ALL</button>
      ${letters.map(l => `
        <button class="alpha-btn ${directoryLetterFilter === l ? 'active' : ''}" data-letter="${l}">${l}</button>
      `).join('')}
    `;

    bar.querySelectorAll('.alpha-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        directoryLetterFilter = this.getAttribute('data-letter');
        bar.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterDirectory();
        playTone(500, 'sine', 0.04);
      });
    });
  }

  function filterDirectory() {
    const grid = document.getElementById('organs-grid');
    if (!grid) return;

    const searchVal = (document.getElementById('directory-search-input')?.value || '').toLowerCase().trim();
    const categoryVal = document.getElementById('directory-category-select')?.value || 'all';
    const regionVal = document.getElementById('directory-region-select')?.value || 'all';

    const organs = window.ORGANS_DATA || [];

    const filtered = organs.filter(organ => {
      // Search
      const matchesSearch = !searchVal || 
        organ.name.toLowerCase().includes(searchVal) ||
        (organ.latinName && organ.latinName.toLowerCase().includes(searchVal)) ||
        organ.overview.toLowerCase().includes(searchVal);

      // Category
      const matchesCategory = categoryVal === 'all' || organ.category === categoryVal;

      // Region
      const matchesRegion = regionVal === 'all' || organ.bodyRegion === regionVal;

      // Letter
      const matchesLetter = directoryLetterFilter === 'ALL' || 
        organ.name.toUpperCase().startsWith(directoryLetterFilter);

      return matchesSearch && matchesCategory && matchesRegion && matchesLetter;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--text-muted); margin: 0 auto 16px auto;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">No organs found</h3>
          <p style="color: var(--text-muted); font-size: 0.9375rem;">Try adjusting your search terms or filters.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(organ => {
      const system = (window.SYSTEMS_DATA || []).find(s => s.id === organ.systemId);
      const isSaved = state.bookmarks.includes(organ.id);
      const isMastered = state.mastered.includes(organ.id);

      return `
        <div class="organ-card" data-id="${organ.id}">
          <div class="organ-card-header">
            <div>
              <span class="system-tag" style="background-color: ${system ? system.color : 'var(--accent-cyan)'}; font-size: 0.625rem;">
                ${system ? system.name.split(' ')[0] : organ.systemId}
              </span>
              <h3 class="organ-card-name" style="margin-top: 6px;">${organ.name}</h3>
              <div class="organ-card-latin">${organ.latinName || ''}</div>
            </div>
            <button class="action-icon-btn btn-card-bookmark ${isSaved ? 'bookmarked' : ''}" 
                    data-id="${organ.id}" 
                    style="width: 32px; height: 32px;"
                    title="${isSaved ? 'Remove bookmark' : 'Bookmark this organ'}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
              </svg>
            </button>
          </div>

          <p class="organ-card-desc">${organ.overview.substring(0, 140)}...</p>

          <div class="organ-card-footer">
            <label class="mastered-checkbox-label">
              <input type="checkbox" class="cb-mastered" data-id="${organ.id}" ${isMastered ? 'checked' : ''}>
              <span>${isMastered ? 'Mastered ✓' : 'Mark as Studied'}</span>
            </label>

            <button class="btn-open-detail btn-card-learn" style="width: auto; padding: 6px 14px; font-size: 0.8125rem;" data-id="${organ.id}">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach card event listeners
    grid.querySelectorAll('.btn-card-learn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const id = this.getAttribute('data-id');
        openOrganModal(id);
      });
    });

    grid.querySelectorAll('.organ-card').forEach(card => {
      card.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        openOrganModal(id);
      });
    });

    grid.querySelectorAll('.btn-card-bookmark').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const id = this.getAttribute('data-id');
        toggleBookmark(id);
        filterDirectory();
      });
    });

    grid.querySelectorAll('.cb-mastered').forEach(cb => {
      cb.addEventListener('change', function (e) {
        e.stopPropagation();
        const id = this.getAttribute('data-id');
        toggleMastery(id, this.checked);
        filterDirectory();
      });
    });
  }

  // ==========================================================================
  // Compare Organs Tool
  // ==========================================================================
  function renderComparePresets() {
    const row = document.getElementById('compare-presets-row');
    if (!row) return;

    const comps = window.COMPARISONS_DATA || [];
    row.innerHTML = comps.map(c => `
      <button class="preset-compare-btn ${c.id === state.currentComparisonId ? 'active' : ''}" 
              data-id="${c.id}" role="tab">
        ${c.title}
      </button>
    `).join('');

    row.querySelectorAll('.preset-compare-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        state.currentComparisonId = this.getAttribute('data-id');
        row.querySelectorAll('.preset-compare-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderCurrentComparison();
        playTone(550, 'sine', 0.05);
      });
    });
  }

  function renderCurrentComparison() {
    const container = document.getElementById('comparison-table-container');
    if (!container) return;

    const comp = (window.COMPARISONS_DATA || []).find(c => c.id === state.currentComparisonId);
    if (!comp) return;

    const itemA = comp.itemA;
    const itemB = comp.itemB;

    // Extract shared keys
    const keysA = Object.keys(itemA).filter(k => k !== 'name' && k !== 'system');

    container.innerHTML = `
      <div class="comparison-header-row">
        <div>Anatomical Dimension</div>
        <div class="comp-col-a">${itemA.name} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">(${itemA.system})</span></div>
        <div class="comp-col-b">${itemB.name} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">(${itemB.system})</span></div>
      </div>

      ${keysA.map(key => {
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        return `
          <div class="comparison-row">
            <div class="comp-dim-label">${formattedKey}</div>
            <div>${itemA[key] || '—'}</div>
            <div>${itemB[key] || '—'}</div>
          </div>
        `;
      }).join('')}

      <div class="comp-takeaway-box">
        <strong>High-Yield Takeaway: </strong>${comp.keyTakeaway}
      </div>
    `;
  }

  // ==========================================================================
  // Quiz Center Engine
  // ==========================================================================
  function initQuiz() {
    state.quiz.filteredQuestions = [...(window.QUIZZES_DATA || [])];
    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    state.quiz.answered = false;
    renderQuizCard();
  }

  function renderQuizCard() {
    const card = document.getElementById('quiz-card-wrapper');
    if (!card) return;

    const questions = state.quiz.filteredQuestions;
    if (questions.length === 0) {
      card.innerHTML = `<p>No quiz questions available.</p>`;
      return;
    }

    const currentQ = questions[state.quiz.currentIndex];

    card.innerHTML = `
      <div class="quiz-top-bar">
        <div>
          <span class="system-tag" style="background: var(--accent-cyan); font-size: 0.75rem;">${currentQ.systemId.toUpperCase()}</span>
          <span style="font-size: 0.8125rem; font-weight: 600; color: var(--text-muted); margin-left: 8px;">Question ${state.quiz.currentIndex + 1} of ${questions.length}</span>
        </div>
        <div class="quiz-score-pill">Score: ${state.quiz.score} / ${questions.length}</div>
      </div>

      <h3 class="quiz-question-text">${currentQ.question}</h3>

      <div class="quiz-options-list">
        ${currentQ.options.map((opt, idx) => `
          <button class="quiz-option-btn" data-index="${idx}">
            <span>${String.fromCharCode(65 + idx)}. ${opt}</span>
            <span class="opt-icon"></span>
          </button>
        `).join('')}
      </div>

      <div class="quiz-explanation-box" id="quiz-explanation">
        <strong>Explanation: </strong>${currentQ.explanation}
      </div>

      <div class="quiz-footer">
        <div style="font-size: 0.8125rem; color: var(--text-muted);">
          Difficulty: <strong>${currentQ.difficulty}</strong>
        </div>
        <button class="btn-primary" id="btn-next-question" style="display: none; padding: 10px 22px; font-size: 0.875rem;">
          <span>${state.quiz.currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    `;

    // Attach Option Click Listeners
    card.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        if (state.quiz.answered) return;
        state.quiz.answered = true;

        const selectedIdx = parseInt(this.getAttribute('data-index'), 10);
        const correctIdx = currentQ.answer;

        if (selectedIdx === correctIdx) {
          this.classList.add('correct');
          state.quiz.score++;
          playSuccessChime();
        } else {
          this.classList.add('incorrect');
          // Highlight correct option
          card.querySelector(`.quiz-option-btn[data-index="${correctIdx}"]`)?.classList.add('correct');
          playErrorChime();
        }

        // Show Explanation & Next button
        document.getElementById('quiz-explanation')?.classList.add('active');
        const nextBtn = document.getElementById('btn-next-question');
        if (nextBtn) nextBtn.style.display = 'inline-flex';
      });
    });

    document.getElementById('btn-next-question')?.addEventListener('click', () => {
      if (state.quiz.currentIndex < questions.length - 1) {
        state.quiz.currentIndex++;
        state.quiz.answered = false;
        renderQuizCard();
        playTone(550, 'sine', 0.04);
      } else {
        // Quiz completed
        renderQuizResults();
      }
    });
  }

  function renderQuizResults() {
    const card = document.getElementById('quiz-card-wrapper');
    if (!card) return;

    const total = state.quiz.filteredQuestions.length;
    const percentage = Math.round((state.quiz.score / total) * 100);

    card.innerHTML = `
      <div style="text-align: center; padding: 30px 10px;">
        <div style="font-size: 3.5rem; margin-bottom: 10px;">🏆</div>
        <h3 style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 10px;">Quiz Complete!</h3>
        <p style="font-size: 1.125rem; color: var(--text-muted); margin-bottom: 24px;">
          You scored <strong>${state.quiz.score} out of ${total}</strong> (${percentage}%)
        </p>

        <div style="display: flex; justify-content: center; gap: 14px;">
          <button class="btn-primary" id="btn-retake-quiz">
            <span>Retake Quiz</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-retake-quiz')?.addEventListener('click', () => {
      initQuiz();
      playTone(520, 'sine', 0.05);
    });
  }

  // ==========================================================================
  // Medical Glossary Engine
  // ==========================================================================
  function renderGlossary() {
    const grid = document.getElementById('glossary-grid');
    if (!grid) return;

    const searchVal = (document.getElementById('glossary-search-input')?.value || '').toLowerCase().trim();
    const terms = window.GLOSSARY_DATA || [];

    const filtered = terms.filter(t => {
      return !searchVal || 
        t.term.toLowerCase().includes(searchVal) ||
        t.definition.toLowerCase().includes(searchVal) ||
        (t.root && t.root.toLowerCase().includes(searchVal));
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">No glossary terms matched your query.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(t => `
      <div class="glossary-card">
        <h4 class="glossary-term">${t.term}</h4>
        <div class="glossary-pronunciation">${t.pronunciation}</div>
        <div class="glossary-root">${t.root}</div>
        <p class="glossary-def">${t.definition}</p>
        <div class="glossary-clinical">
          <strong>Clinical Note: </strong>${t.clinicalSignificance}
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // Master Organ Detail Modal (15 Standardized Points!)
  // ==========================================================================
  function openOrganModal(organId) {
    const organ = (window.ORGANS_DATA || []).find(o => o.id === organId);
    if (!organ) return;

    const system = (window.SYSTEMS_DATA || []).find(s => s.id === organ.systemId);
    const modal = document.getElementById('organ-detail-modal');
    const header = document.getElementById('organ-modal-header');
    const body = document.getElementById('organ-modal-body');

    if (!modal || !header || !body) return;

    const isSaved = state.bookmarks.includes(organ.id);

    // Header Content
    header.innerHTML = `
      <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 20px;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
            <span class="system-tag" style="background-color: ${system ? system.color : 'var(--accent-cyan)'};">
              ${system ? system.name : organ.systemId}
            </span>
            <span class="region-tag">${organ.bodyRegion ? organ.bodyRegion.toUpperCase() : 'ANATOMY'}</span>
          </div>
          <h2 id="modal-organ-name" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); line-height: 1.2;">
            ${organ.name}
          </h2>
          <div style="font-size: 1rem; color: var(--text-muted); font-style: italic; margin-top: 4px;">
            ${organ.latinName || ''} <span style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.875rem; margin-left: 10px;">/${organ.pronunciation || ''}/</span>
          </div>
        </div>

        <button class="action-icon-btn btn-modal-bookmark ${isSaved ? 'bookmarked' : ''}" 
                data-id="${organ.id}" 
                title="${isSaved ? 'Remove Bookmark' : 'Save Bookmark'}" 
                style="margin-right: 40px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
          </svg>
        </button>
      </div>
    `;

    // Standardized 15-Point Body Content
    body.innerHTML = `
      <!-- 1. Overview -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          1. Overview
        </h3>
        <p style="font-size: 1.0625rem; line-height: 1.7; color: var(--text-secondary);">${organ.overview}</p>
      </div>

      <!-- 2. Anatomical Location -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          2. Anatomical Location
        </h3>
        <div style="background: var(--bg-tertiary); padding: 16px 20px; border-radius: var(--radius-lg); font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">
          ${organ.location}
        </div>
      </div>

      <!-- 3. Anatomical Illustration -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1z"></path></svg>
          3. Anatomical Illustration & Schematic
        </h3>
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 30px; display: flex; justify-content: center; align-items: center;">
          ${generateMiniOrganDiagram(organ)}
        </div>
      </div>

      <!-- 4. Macroscopic & Microscopic Structure -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
          4. Macroscopic & Microscopic Structure
        </h3>
        <div style="display: grid; grid-template-columns: 1fr; gap: 14px;">
          ${organ.structure.macroscopic ? `
            <div style="background: var(--bg-primary); padding: 16px; border-radius: var(--radius-md); border-left: 3px solid var(--accent-cyan);">
              <strong style="color: var(--text-primary);">Gross Anatomy: </strong>${organ.structure.macroscopic}
            </div>` : ''}
          ${organ.structure.microscopic ? `
            <div style="background: var(--bg-primary); padding: 16px; border-radius: var(--radius-md); border-left: 3px solid var(--accent-teal);">
              <strong style="color: var(--text-primary);">Histology & Cells: </strong>${organ.structure.microscopic}
            </div>` : ''}
        </div>
      </div>

      <!-- 5. Primary Functions -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
          5. Primary Functions
        </h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
          ${(organ.primaryFunctions || []).map(f => `
            <li style="display: flex; gap: 12px; align-items: flex-start; font-size: 0.9375rem; color: var(--text-secondary);">
              <span style="color: var(--accent-cyan); font-weight: bold; margin-top: 1px;">✓</span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- 6. How It Works (Step-by-Step Biological Mechanism) -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          6. How It Works (Biological Mechanism)
        </h3>
        <div style="background: var(--bg-tertiary); padding: 24px; border-radius: var(--radius-lg); font-size: 0.9375rem; line-height: 1.7; color: var(--text-secondary); white-space: pre-line;">
          <strong>Inputs / Signals: </strong>${organ.howItWorks.inputs}
          
          <strong>Mechanism:</strong>
          ${organ.howItWorks.mechanism}
          
          <strong>Cells Involved: </strong>${organ.howItWorks.cellsInvolved}
          <strong>Outputs / Response: </strong>${organ.howItWorks.outputs}
          <strong>Systemic Impact: </strong>${organ.howItWorks.systemicImpact}
        </div>
      </div>

      <!-- 7. Related Body Systems -->
      <div class="detail-section">
        <h3 class="detail-section-title">7. Related Body Systems</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${(organ.relatedSystemIds || [organ.systemId]).map(sysId => {
            const s = (window.SYSTEMS_DATA || []).find(x => x.id === sysId);
            return `<span class="system-tag" style="background-color: ${s ? s.color : 'var(--accent-cyan)'};">${s ? s.name : sysId}</span>`;
          }).join('')}
        </div>
      </div>

      <!-- 8. Interactions with Other Organs -->
      <div class="detail-section">
        <h3 class="detail-section-title">8. Interactions with Other Organs</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
          ${(organ.interactions || []).map(inter => `
            <div style="background: var(--bg-primary); border: 1px solid var(--border-subtle); padding: 16px; border-radius: var(--radius-md);">
              <h4 style="font-weight: 700; color: var(--accent-cyan); margin-bottom: 6px;">↔ ${inter.organ}</h4>
              <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${inter.relationship}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 9. Important Biological Processes -->
      <div class="detail-section">
        <h3 class="detail-section-title">9. Important Biological Processes</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${(organ.processes || []).map(p => `
            <span class="organ-chip" style="background: var(--bg-tertiary); font-weight: 600;">⚡ ${p}</span>
          `).join('')}
        </div>
      </div>

      <!-- 10. Interesting Facts -->
      <div class="detail-section">
        <h3 class="detail-section-title">10. Scientifically Proven Facts</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${(organ.facts || []).map(fact => `
            <div style="background: var(--accent-amber-light); border-left: 4px solid var(--accent-amber); padding: 14px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 0.9375rem; color: var(--text-secondary);">
              💡 ${fact}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 11. Common Conditions -->
      <div class="detail-section">
        <h3 class="detail-section-title">11. Common Conditions & Clinical Relevance</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
          ${(organ.conditions || []).map(c => `
            <div style="background: var(--bg-primary); border: 1px solid var(--border-subtle); padding: 16px; border-radius: var(--radius-md); border-top: 3px solid var(--accent-coral);">
              <h4 style="font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">${c.name}</h4>
              <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${c.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 12. Quick Revision -->
      <div class="detail-section">
        <h3 class="detail-section-title">12. Quick Revision Points</h3>
        <div style="background: var(--bg-tertiary); padding: 20px; border-radius: var(--radius-lg);">
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
            ${(organ.quickRevision || []).map(r => `
              <li style="font-size: 0.9375rem; color: var(--text-secondary); display: flex; gap: 8px;">
                <span style="color: var(--accent-teal);">▸</span>
                <span>${r}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- 13. Knowledge Check Quiz -->
      <div class="detail-section">
        <h3 class="detail-section-title">13. Knowledge Check</h3>
        <div id="modal-organ-quiz-container">
          ${(organ.quizQuestions || []).map((q, qIdx) => `
            <div style="background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 16px;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 14px;">${q.question}</h4>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${q.options.map((opt, oIdx) => `
                  <button class="quiz-option-btn organ-modal-quiz-btn" data-q-idx="${qIdx}" data-o-idx="${oIdx}" data-correct="${q.answer}" style="padding: 10px 14px; font-size: 0.875rem;">
                    <span>${opt}</span>
                  </button>
                `).join('')}
              </div>
              <div class="modal-quiz-explanation" id="modal-q-exp-${qIdx}" style="display: none; margin-top: 12px; font-size: 0.875rem; color: var(--accent-emerald);">
                ✓ ${q.explanation}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 14. Related Organs -->
      <div class="detail-section">
        <h3 class="detail-section-title">14. Related Organs</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          ${(organ.relatedOrgans || []).map(relId => {
            const relOrgan = (window.ORGANS_DATA || []).find(o => o.id === relId);
            return relOrgan ? `
              <button class="organ-chip btn-jump-organ" data-id="${relOrgan.id}" style="font-weight: 700; background: var(--bg-tertiary); padding: 8px 14px;">
                ${relOrgan.name} →
              </button>
            ` : '';
          }).join('')}
        </div>
      </div>

      <!-- 15. References -->
      <div class="detail-section">
        <h3 class="detail-section-title">15. Scientific References</h3>
        <ul style="list-style: none; font-size: 0.8125rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 6px;">
          ${(organ.references || []).map(ref => `<li>📖 ${ref}</li>`).join('')}
        </ul>
      </div>
    `;

    // Modal Knowledge Check Listeners
    body.querySelectorAll('.organ-modal-quiz-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const qIdx = this.getAttribute('data-q-idx');
        const oIdx = parseInt(this.getAttribute('data-o-idx'), 10);
        const correct = parseInt(this.getAttribute('data-correct'), 10);

        if (oIdx === correct) {
          this.classList.add('correct');
          playSuccessChime();
        } else {
          this.classList.add('incorrect');
          playErrorChime();
        }

        const exp = document.getElementById(`modal-q-exp-${qIdx}`);
        if (exp) exp.style.display = 'block';
      });
    });

    // Related Organs Jump buttons
    body.querySelectorAll('.btn-jump-organ').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        openOrganModal(id);
        playTone(600, 'sine', 0.04);
      });
    });

    // Bookmark button in modal
    header.querySelector('.btn-modal-bookmark')?.addEventListener('click', function () {
      const id = this.getAttribute('data-id');
      toggleBookmark(id);
      const isNowSaved = state.bookmarks.includes(id);
      this.classList.toggle('bookmarked', isNowSaved);
      this.querySelector('svg').setAttribute('fill', isNowSaved ? 'currentColor' : 'none');
    });

    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    playTone(500, 'sine', 0.05);
  }

  function closeOrganModal() {
    const modal = document.getElementById('organ-detail-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ==========================================================================
  // Global Search Modal (Ctrl+K)
  // ==========================================================================
  function openSearchModal() {
    const modal = document.getElementById('global-search-modal');
    const input = document.getElementById('global-search-input');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (input) {
        input.value = '';
        input.focus();
        handleGlobalSearch('');
      }
      playTone(550, 'sine', 0.04);
    }
  }

  function closeSearchModal() {
    const modal = document.getElementById('global-search-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function handleGlobalSearch(query) {
    const resultsContainer = document.getElementById('global-search-results');
    if (!resultsContainer) return;

    const q = query.toLowerCase().trim();
    if (!q) {
      resultsContainer.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.9375rem;">
          Type any organ name (e.g. Heart, Brain), system, or medical term...
        </div>
      `;
      return;
    }

    const organs = (window.ORGANS_DATA || []).filter(o => 
      o.name.toLowerCase().includes(q) || 
      (o.latinName && o.latinName.toLowerCase().includes(q)) || 
      o.overview.toLowerCase().includes(q)
    );

    const systems = (window.SYSTEMS_DATA || []).filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.overview.toLowerCase().includes(q)
    );

    const glossary = (window.GLOSSARY_DATA || []).filter(g => 
      g.term.toLowerCase().includes(q) || 
      g.definition.toLowerCase().includes(q)
    );

    let html = '';

    if (organs.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); padding: 8px 16px; text-transform: uppercase;">Organs & Structures (${organs.length})</div>`;
      organs.slice(0, 5).forEach(o => {
        html += `
          <div class="search-result-row search-item-organ" data-id="${o.id}">
            <div>
              <div style="font-weight: 700; color: var(--text-primary);">${o.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">${o.latinName || ''}</div>
            </div>
            <span class="system-tag" style="background: var(--accent-cyan); font-size: 0.625rem;">${o.systemId}</span>
          </div>
        `;
      });
    }

    if (systems.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); padding: 8px 16px; text-transform: uppercase; margin-top: 12px;">Organ Systems (${systems.length})</div>`;
      systems.slice(0, 3).forEach(s => {
        html += `
          <div class="search-result-row search-item-system" data-id="${s.id}">
            <div>
              <div style="font-weight: 700; color: var(--text-primary);">${s.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${s.tagline}</div>
            </div>
            <span class="system-tag" style="background: ${s.color}; font-size: 0.625rem;">System</span>
          </div>
        `;
      });
    }

    if (glossary.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); padding: 8px 16px; text-transform: uppercase; margin-top: 12px;">Medical Terms (${glossary.length})</div>`;
      glossary.slice(0, 4).forEach(g => {
        html += `
          <div class="search-result-row search-item-glossary">
            <div>
              <div style="font-weight: 700; color: var(--text-primary);">${g.term}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${g.definition.substring(0, 80)}...</div>
            </div>
            <span class="organ-chip" style="font-size: 0.625rem;">Term</span>
          </div>
        `;
      });
    }

    if (!html) {
      html = `<div style="padding: 24px; text-align: center; color: var(--text-muted);">No results found for "${query}".</div>`;
    }

    resultsContainer.innerHTML = html;

    resultsContainer.querySelectorAll('.search-item-organ').forEach(el => {
      el.addEventListener('click', function () {
        closeSearchModal();
        openOrganModal(this.getAttribute('data-id'));
      });
    });

    resultsContainer.querySelectorAll('.search-item-system').forEach(el => {
      el.addEventListener('click', function () {
        closeSearchModal();
        const sysId = this.getAttribute('data-id');
        state.currentSystemFilter = sysId;
        renderBodySVG(state.currentView, sysId);
        document.getElementById('body-explorer')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // ==========================================================================
  // Bookmarks & Study Progress Drawer
  // ==========================================================================
  function toggleBookmark(organId) {
    const idx = state.bookmarks.indexOf(organId);
    if (idx >= 0) {
      state.bookmarks.splice(idx, 1);
    } else {
      state.bookmarks.push(organId);
      playTone(700, 'sine', 0.05);
    }
    localStorage.setItem('hbe_bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarksBadge();
    selectOrgan(state.selectedOrganId);
  }

  function toggleMastery(organId, isChecked) {
    const idx = state.mastered.indexOf(organId);
    if (isChecked && idx < 0) {
      state.mastered.push(organId);
      playSuccessChime();
    } else if (!isChecked && idx >= 0) {
      state.mastered.splice(idx, 1);
    }
    localStorage.setItem('hbe_mastered', JSON.stringify(state.mastered));
  }

  function updateBookmarksBadge() {
    const badge = document.getElementById('bookmarks-count-badge');
    if (badge) {
      badge.textContent = state.bookmarks.length;
      badge.style.display = state.bookmarks.length > 0 ? 'flex' : 'none';
    }
  }

  function openBookmarksModal() {
    const modal = document.getElementById('bookmarks-modal');
    const body = document.getElementById('bookmarks-modal-body');
    if (!modal || !body) return;

    const totalOrgans = (window.ORGANS_DATA || []).length;
    const masteredCount = state.mastered.length;
    const progressPct = totalOrgans > 0 ? Math.round((masteredCount / totalOrgans) * 100) : 0;

    body.innerHTML = `
      <!-- Progress Bar -->
      <div style="margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.875rem; font-weight: 700; margin-bottom: 8px;">
          <span>Curriculum Mastery</span>
          <span style="color: var(--accent-cyan);">${progressPct}% (${masteredCount} of ${totalOrgans} structures)</span>
        </div>
        <div style="height: 10px; border-radius: 5px; background: var(--border-subtle); overflow: hidden;">
          <div style="width: ${progressPct}%; height: 100%; background: linear-gradient(90deg, var(--accent-cyan), var(--accent-teal)); border-radius: 5px; transition: width 0.3s ease;"></div>
        </div>
      </div>

      <!-- Bookmarked Items -->
      <h3 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 14px;">Saved Bookmarks (${state.bookmarks.length})</h3>
      ${state.bookmarks.length === 0 ? `
        <div style="text-align: center; padding: 30px; color: var(--text-muted); background: var(--bg-primary); border-radius: var(--radius-lg);">
          No organs bookmarked yet. Click the bookmark icon on any organ to save it here for fast revision!
        </div>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 8px; max-height: 280px; overflow-y: auto;">
          ${state.bookmarks.map(id => {
            const org = (window.ORGANS_DATA || []).find(o => o.id === id);
            if (!org) return '';
            return `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: var(--bg-primary); border-radius: var(--radius-md);">
                <div>
                  <div style="font-weight: 700; color: var(--text-primary);">${org.name}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">${org.latinName || ''}</div>
                </div>
                <div style="display: flex; gap: 8px;">
                  <button class="btn-open-detail btn-bookmark-jump" data-id="${org.id}" style="width: auto; padding: 6px 12px; font-size: 0.75rem;">Study</button>
                  <button class="action-icon-btn btn-bookmark-remove" data-id="${org.id}" style="width: 28px; height: 28px;" title="Remove">✕</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    `;

    body.querySelectorAll('.btn-bookmark-jump').forEach(btn => {
      btn.addEventListener('click', function () {
        closeBookmarksModal();
        openOrganModal(this.getAttribute('data-id'));
      });
    });

    body.querySelectorAll('.btn-bookmark-remove').forEach(btn => {
      btn.addEventListener('click', function () {
        toggleBookmark(this.getAttribute('data-id'));
        openBookmarksModal();
      });
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    playTone(550, 'sine', 0.04);
  }

  function closeBookmarksModal() {
    const modal = document.getElementById('bookmarks-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ==========================================================================
  // Hero Live Autocomplete Search Suggestions
  // ==========================================================================
  function setupHeroSearch() {
    const input = document.getElementById('hero-search-input');
    const dropdown = document.getElementById('hero-suggestions');
    const submitBtn = document.getElementById('hero-search-submit');

    if (!input || !dropdown) return;

    input.addEventListener('input', function () {
      const q = this.value.toLowerCase().trim();
      if (!q) {
        dropdown.classList.remove('active');
        return;
      }

      const matches = (window.ORGANS_DATA || []).filter(o => 
        o.name.toLowerCase().includes(q) || 
        (o.latinName && o.latinName.toLowerCase().includes(q)) || 
        o.overview.toLowerCase().includes(q)
      ).slice(0, 5);

      if (matches.length === 0) {
        dropdown.classList.remove('active');
        return;
      }

      dropdown.innerHTML = matches.map(m => `
        <div class="suggestion-item" data-id="${m.id}">
          <div class="item-info">
            <span class="item-name">${m.name}</span>
            <span class="item-latin">${m.latinName || ''}</span>
          </div>
          <span class="suggestion-badge">${m.category}</span>
        </div>
      `).join('');

      dropdown.classList.add('active');

      dropdown.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function () {
          const id = this.getAttribute('data-id');
          dropdown.classList.remove('active');
          input.value = '';
          openOrganModal(id);
        });
      });
    });

    submitBtn?.addEventListener('click', function () {
      const q = input.value.trim();
      if (q) {
        openSearchModal();
        const searchInput = document.getElementById('global-search-input');
        if (searchInput) {
          searchInput.value = q;
          handleGlobalSearch(q);
        }
      }
    });

    // Close suggestions on outside click
    document.addEventListener('click', function (e) {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // Random / Surprise Me Spotlight
  // ==========================================================================
  function openRandomOrganSpotlight() {
    const organs = window.ORGANS_DATA || [];
    if (organs.length === 0) return;
    const randomOrgan = organs[Math.floor(Math.random() * organs.length)];
    openOrganModal(randomOrgan.id);
    playSuccessChime();
  }

  // ==========================================================================
  // Global Event Listeners & Initialization
  // ==========================================================================
  function init() {
    // Apply Theme
    document.body.setAttribute('data-theme', state.theme);

    // Render Components
    renderBodySVG(state.currentView, state.currentSystemFilter);
    selectOrgan(state.selectedOrganId);
    renderCategories();
    renderProcessTabs();
    renderCurrentProcess();
    renderSystems();
    renderAlphabetBar();
    filterDirectory();
    renderComparePresets();
    renderCurrentComparison();
    initQuiz();
    renderGlossary();
    setupHeroSearch();
    updateBookmarksBadge();

    // Theme Toggle
    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', state.theme);
      localStorage.setItem('hbe_theme', state.theme);
      playTone(550, 'sine', 0.05);
    });

    // Sound Toggle
    document.getElementById('btn-sound-toggle')?.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      localStorage.setItem('hbe_sound', state.soundEnabled);
      playTone(state.soundEnabled ? 600 : 300, 'sine', 0.05);
    });

    // View Switchers (Anterior / Posterior)
    document.getElementById('btn-view-front')?.addEventListener('click', function () {
      state.currentView = 'front';
      document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderBodySVG('front', state.currentSystemFilter);
      playTone(500, 'sine', 0.04);
    });

    document.getElementById('btn-view-back')?.addEventListener('click', function () {
      state.currentView = 'back';
      document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderBodySVG('back', state.currentSystemFilter);
      playTone(500, 'sine', 0.04);
    });

    // Explorer System Filter Pills
    document.querySelectorAll('#explorer-system-filters .filter-pill').forEach(pill => {
      pill.addEventListener('click', function () {
        document.querySelectorAll('#explorer-system-filters .filter-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        state.currentSystemFilter = this.getAttribute('data-system');
        renderBodySVG(state.currentView, state.currentSystemFilter);
        playTone(520, 'sine', 0.04);
      });
    });

    // Inspector Action Buttons
    document.getElementById('btn-inspect-full-detail')?.addEventListener('click', () => {
      openOrganModal(state.selectedOrganId);
    });

    document.getElementById('inspect-bookmark-btn')?.addEventListener('click', () => {
      toggleBookmark(state.selectedOrganId);
    });

    // Directory Search & Filters
    document.getElementById('directory-search-input')?.addEventListener('input', filterDirectory);
    document.getElementById('directory-category-select')?.addEventListener('change', filterDirectory);
    document.getElementById('directory-region-select')?.addEventListener('change', filterDirectory);

    // Glossary Search
    document.getElementById('glossary-search-input')?.addEventListener('input', renderGlossary);

    // Modal Triggers & Closers
    document.getElementById('btn-search-trigger')?.addEventListener('click', openSearchModal);
    document.getElementById('btn-close-search-modal')?.addEventListener('click', closeSearchModal);

    document.getElementById('btn-bookmarks-toggle')?.addEventListener('click', openBookmarksModal);
    document.getElementById('btn-close-bookmarks-modal')?.addEventListener('click', closeBookmarksModal);

    document.getElementById('btn-close-organ-modal')?.addEventListener('click', closeOrganModal);

    // Random Organ Spotlight
    document.getElementById('btn-surprise-me')?.addEventListener('click', openRandomOrganSpotlight);
    document.getElementById('footer-random-link')?.addEventListener('click', (e) => {
      e.preventDefault();
      openRandomOrganSpotlight();
    });

    // Search Input in Global Modal
    document.getElementById('global-search-input')?.addEventListener('input', function () {
      handleGlobalSearch(this.value);
    });

    // Keyboard Shortcuts (Ctrl+K, Cmd+K, Escape)
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === 'Escape') {
        closeOrganModal();
        closeSearchModal();
        closeBookmarksModal();
      }
    });

    // Close Modals on Backdrop Click
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', function (e) {
        if (e.target === this) {
          closeOrganModal();
          closeSearchModal();
          closeBookmarksModal();
        }
      });
    });

    // Smooth Scroll Active Nav Spy
    window.addEventListener('scroll', function () {
      const sections = ['hero', 'body-explorer', 'categories', 'how-it-works', 'organ-systems', 'organ-directory', 'compare', 'quizzes', 'glossary'];
      const scrollPos = window.scrollY + 120;

      for (const id of sections) {
        const sec = document.getElementById(id);
        if (sec) {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.primary-nav .nav-link').forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
            break;
          }
        }
      }
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

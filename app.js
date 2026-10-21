/**
 * Hello World - Modern Interactive Application Logic
 * Vanilla JavaScript implementation for rich micro-interactions and ambient visuals.
 */

// --- 1. Multilingual Greetings Database ---
const GREETINGS = {
  en: {
    text: "Hello, World!",
    sub: "The timeless phrase that sparked every developer's journey, reimagined with modern glassmorphism and responsiveness.",
    badge: "English"
  },
  es: {
    text: "¡Hola, Mundo!",
    sub: "La frase atemporal que dio inicio al viaje de millones de desarrolladores alrededor del mundo.",
    badge: "Español"
  },
  fr: {
    text: "Bonjour le Monde !",
    sub: "La phrase intemporelle qui a marqué le premier pas de millions de créateurs du web.",
    badge: "Français"
  },
  ja: {
    text: "こんにちは、世界！",
    sub: "すべてのプログラマーが最初に踏み出す第一歩。美しく広がるデジタルの地平線へ。",
    badge: "日本語"
  },
  hi: {
    text: "नमस्ते, दुनिया!",
    sub: "हर डेवलपर की यात्रा की पहली गूंज, जिसे आधुनिक वेब सौंदर्य के साथ प्रस्तुत किया गया है।",
    badge: "हिन्दी"
  },
  de: {
    text: "Hallo, Welt!",
    sub: "Der zeitlose Satz, mit dem jedes digitale Abenteuer und jede Software beginnt.",
    badge: "Deutsch"
  },
  it: {
    text: "Ciao, Mondo!",
    sub: "La celebre espressione che inaugura ogni nuovo orizzonte di codice e creatività.",
    badge: "Italiano"
  }
};

const EXTRA_GREETINGS = [
  { text: "你好，世界！", sub: "开启无数程序员探索数字宇宙的第一句问候。", badge: "中文" },
  { text: "Olá, Mundo!", sub: "O clássico ponto de partida de todos os programadores e sonhadores digitais.", badge: "Português" },
  { text: "안녕하세요, 세계!", sub: "수많은 개발자들의 여정을 열어준 첫 번째 인사말.", badge: "한국어" },
  { text: "مرحباً بالعالم!", sub: "العبارة الخالدة التي افتتحت رحلة كل مبرمج نحو الإبداع الرقمي.", badge: "العربية" }
];

// --- 2. State & DOM References ---
let currentLang = 'en';
let greetingsCount = 1;
const themes = ['default', 'aurora', 'sunset', 'cyber'];
let currentThemeIndex = 0;

const heroTitle = document.getElementById('main-greeting');
const heroDesc = document.getElementById('greeting-desc');
const categoryBadge = document.getElementById('category-badge');
const statsCounter = document.getElementById('stats-counter');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const themeBtn = document.getElementById('theme-accent-btn');
const btnSayHello = document.getElementById('btn-say-hello');
const btnCopyGreeting = document.getElementById('btn-copy-greeting');
const btnRandom = document.getElementById('btn-random-greeting');
const langTabs = document.getElementById('language-tabs');
const currentYearSpan = document.getElementById('current-year');
const heroCard = document.getElementById('hero-card');

// Set current year
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// --- 3. Greeting Switcher with Smooth Animation ---
function setGreeting(greetingData, activePillId = null) {
  // Fade out slightly
  heroTitle.style.opacity = '0';
  heroTitle.style.transform = 'translateY(8px)';

  setTimeout(() => {
    heroTitle.textContent = greetingData.text;
    heroDesc.textContent = greetingData.sub;
    if (categoryBadge) {
      categoryBadge.textContent = greetingData.badge;
    }

    // Fade back in
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
  }, 180);

  // Update tabs highlight
  const allPills = document.querySelectorAll('.lang-pill');
  allPills.forEach(pill => {
    pill.classList.remove('active');
    pill.setAttribute('aria-selected', 'false');
  });

  if (activePillId) {
    const target = document.getElementById(activePillId);
    if (target) {
      target.classList.add('active');
      target.setAttribute('aria-selected', 'true');
    }
  }
}

// Event delegation for language tabs
if (langTabs) {
  langTabs.addEventListener('click', (e) => {
    const pill = e.target.closest('.lang-pill');
    if (!pill) return;
    
    const langKey = pill.getAttribute('data-lang');
    if (GREETINGS[langKey]) {
      currentLang = langKey;
      setGreeting(GREETINGS[langKey], pill.id);
    }
  });
}

// Random Greeting / Surprise Me
if (btnRandom) {
  btnRandom.addEventListener('click', () => {
    const all = [...Object.values(GREETINGS), ...EXTRA_GREETINGS];
    const pick = all[Math.floor(Math.random() * all.length)];

    // Check if pick matches a standard pill
    const matchingKey = Object.keys(GREETINGS).find(k => GREETINGS[k].text === pick.text);
    const pillId = matchingKey ? `lang-btn-${matchingKey}` : null;
    
    setGreeting(pick, pillId);
    triggerSparkleBurst(btnRandom.getBoundingClientRect());
  });
}

// --- 4. Copy to Clipboard ---
if (btnCopyGreeting) {
  btnCopyGreeting.addEventListener('click', () => {
    const textToCopy = heroTitle.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(`Copied "${textToCopy}" to clipboard!`);
    }).catch(() => {
      showToast('Copied greeting!');
    });
  });
}

function showToast(msg) {
  if (!toast) return;
  toastMessage.textContent = msg;
  toast.classList.add('show');
  
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// --- 5. Theme Accent Switcher ---
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];
    if (theme === 'default') {
      document.body.removeAttribute('data-theme');
      showToast('Theme: Cosmic Indigo');
    } else {
      document.body.setAttribute('data-theme', theme);
      const capName = theme.charAt(0).toUpperCase() + theme.slice(1);
      showToast(`Theme: ${capName}`);
    }
  });
}

// --- 6. Interactive Confetti Celebration ---
if (btnSayHello) {
  btnSayHello.addEventListener('click', (e) => {
    greetingsCount++;
    if (statsCounter) {
      statsCounter.textContent = greetingsCount;
    }
    
    // Confetti explosion from button center
    const rect = btnSayHello.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    
    createConfettiExplosion(originX, originY);
  });
}

function createConfettiExplosion(x, y) {
  const count = 48;
  const colors = ['#6366f1', '#38bdf8', '#ec4899', '#10b981', '#f59e0b', '#ffffff'];

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    
    const size = Math.random() * 8 + 6;
    const isCircle = Math.random() > 0.5;
    
    confetti.style.width = `${size}px`;
    confetti.style.height = `${isCircle ? size : size * 1.5}px`;
    confetti.style.borderRadius = isCircle ? '50%' : '2px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;

    document.body.appendChild(confetti);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 220 + 90;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 100;
    const rotation = (Math.random() - 0.5) * 720;
    
    const startTime = performance.now();
    const duration = 1200 + Math.random() * 400;

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;

      if (progress >= 1) {
        confetti.remove();
        return;
      }

      const currentX = x + vx * progress;
      const currentY = y + vy * progress + 0.5 * 450 * (progress * progress);
      const opacity = 1 - Math.pow(progress, 2.5);

      confetti.style.transform = `translate(${currentX - x}px, ${currentY - y}px) rotate(${rotation * progress}deg)`;
      confetti.style.opacity = opacity;

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }
}

function triggerSparkleBurst(rect) {
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  createConfettiExplosion(x, y);
}

// --- 7. Subtle 3D Card Tilt Effect ---
if (heroCard && window.matchMedia('(hover: hover)').matches) {
  let isHovered = false;

  heroCard.addEventListener('mouseenter', () => { isHovered = true; });
  heroCard.addEventListener('mouseleave', () => {
    isHovered = false;
    heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isHovered) return;
    const rect = heroCard.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - cardCenterX) / (rect.width / 2);
    const deltaY = (e.clientY - cardCenterY) / (rect.height / 2);

    const maxTilt = 5; // gentle tilt in degrees
    const rotateX = -deltaY * maxTilt;
    const rotateY = deltaX * maxTilt;

    heroCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });
}

// --- 8. Ambient Particle Canvas Animation ---
const canvas = document.getElementById('ambient-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 45;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -(Math.random() * 0.5 + 0.2);
      this.alpha = Math.random() * 0.4 + 0.15;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function renderAmbient() {
    ctx.clearRect(0, 0, width, height);

    // Draw and connect nearby particles softly
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 90) {
          ctx.strokeStyle = `rgba(148, 163, 184, ${0.12 * (1 - dist / 90)})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(renderAmbient);
  }

  requestAnimationFrame(renderAmbient);
}

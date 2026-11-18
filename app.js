// =========================================================================
// MR. MUÉVASE — EL VIDEOJUEGO DE LA VIDA REAL (RPG V4)
// Creado para Jesús Sanabria y la Comunidad Mr. Muévase
// =========================================================================

const STORAGE_KEY = 'mr_muevase_app_state_v4';

const HAPPINESS_HABITS_POOL = [
  'Dile "Te amo" mirándolo a los ojos o con un mensaje sincero a alguien importante para ti.',
  'Dale un abrazo de al menos 20 segundos a alguien que quieras hoy (libera oxitocina y paz).',
  'Mándale un correo o mensaje de voz a una persona especial que hace mucho tiempo no ves.',
  'Dedica 10 minutos hoy a algo que te haga genuinamente feliz (escuchar tu canción favorita, ver el cielo, sonreír frente al espejo).',
  'Perdona de corazón un resentimiento pasado para caminar más ligero hoy.',
  'Sorprende a alguien con un cumplido sincero y agradece un logro propio de esta semana.'
];

const DAILY_BOSSES = [
  {
    emoji: '👹',
    name: 'El Monstruo del Azúcar y la Excusa',
    taunt: '“¡Cada check que marcas en Fisiología, Enfoque o Lenguaje me quita vida!”'
  },
  {
    emoji: '🛋️',
    name: 'El Gigante del Sofá y la Apatía',
    taunt: '“¡Quería que hoy no te movieras, pero tus pasos NEAT y tu postura me están derrotando!”'
  },
  {
    emoji: '🌧️',
    name: 'El Fantasma de la Cabeza Baja',
    taunt: '“¡No soporto cuando sonríes, agradeces y te hablas con amor frente al espejo!”'
  }
];

const LIGHTNING_QUESTS = [
  '⚡ ¡Ponte de pie ahora mismo, saca el pecho con orgullo, levanta los brazos en V de victoria y respira profundo 5 veces!',
  '💧 ¡Levántate por un vaso de agua natural fresca y bébelo agradeciendo a tu cuerpo por mantenerte vivo!',
  '👟 ¡Camina o marcha en tu propio lugar durante 60 segundos con una sonrisa de campeón!',
  '💌 ¡Abre tu WhatsApp y mándale un mensaje de cariño o gratitud a una persona que quieras mucho!',
  '🪞 ¡Mírate en el espejo (o en la cámara de tu celular), sonríe y di en voz alta: "Soy poderoso y hoy cumplo mi palabra"!'
];

const SHOP_REWARDS = [
  {
    id: 'reward_music',
    icon: '🎧',
    title: '30 Minutos de mi Música o Serie Favorita sin culpa',
    desc: 'Tiempo de descanso merecido después de cumplir tus pasos de bebé.',
    cost: 40
  },
  {
    id: 'reward_shield',
    icon: '🛡️',
    title: 'Escudo Protector de Racha (+1 Día de Impulso)',
    desc: 'Protege y suma +1 día extra a tu contador de racha de constancia.',
    cost: 60
  },
  {
    id: 'reward_outfit',
    icon: '👕',
    title: 'Fondo para Ropa de mi Nueva Talla',
    desc: 'Canje simbólico para apartar ahorro hacia la ropa que usarás en tu meta.',
    cost: 100
  },
  {
    id: 'reward_spa',
    icon: '🛀',
    title: 'Noche de Autocuidado y Descanso Rey/Reina',
    desc: 'Ducha relajante, desconexión digital temprana y lectura o paz total.',
    cost: 80
  }
];

const MANIFESTO_TOPICS = {
  poder:
    '“¡Hoy será un día increíble! ¡Siempre me va bien! ¡Soy poderoso, tengo disciplina y todo conspira a mi favor!”',
  salud:
    '“¡Mi cuerpo sana, se desinflama y recupera su peso ideal con amor! Hoy elijo alimentos que me dan vida y movimiento que me hace feliz.”',
  dinero:
    '“¡Hoy abro las puertas a la abundancia económica! Mi energía alta crea oportunidades, prosperidad y bienestar para mí y mi familia.”',
  pareja:
    '“¡Doy y recibo amor sano, bonito y sincero! Empiezo amándome a mí mismo y atraigo relaciones llenas de paz, respeto y alegría.”',
  exito:
    '“¡Hoy avanzo con enfoque total en mis proyectos y mi trabajo! Donde pongo mi atención y mi disciplina, cosecho grandes resultados.”'
};

const INITIAL_BLOG_POSTS = [
  {
    id: 'founder-story-1',
    author: 'Jesús Sanabria (Mr. Muévase)',
    profileTag: 'Fundador • -48 kg en 2026',
    category: 'Avance de Peso y Hábitos',
    milestone: '🔥 -48 Kilos en 2026 | Pila en Verde',
    title: '¡Bienvenidos a la comunidad más grande del mundo! Cómo bajé 48 kilos cambiando mi mente y mis hábitos',
    content:
      '¡Familia Mr. Muévase! Creé este espacio desde mi propia vivencia. En este 2026 he logrado bajar 48 kilos basándome en mentalidad, ejercicios adaptados, comida sencilla (cero azúcar y cero ultraprocesados) y mucha disciplina.\n\nAprendí que bajar de peso es consecuencia de sentirte feliz, pleno y con objetivos claros en la vida. Porque FELICIDAD = PROGRESO. Hoy te invito a jugar el juego de tu vida real llenando tu Pila Diaria con nuestros 3 pilares: Fisiología, Enfoque y Lenguaje. ¡Pasos de bebé, porque esta carrera es para siempre!',
    date: 'Hoy • Historia Destacada',
    featured: true,
    image: '',
    reactions: { fire: 148, heart: 215, clap: 96 },
    comments: [
      { author: 'Laura M.', text: '¡Qué gran inspiración Jesús! Hoy empiezo mis primeros 3,000 pasos.' },
      { author: 'Carlos R. (Grado II)', text: 'El enfoque de no azúcar y pasos de bebé me cambió la vida. ¡Vamos con todo!' }
    ]
  },
  {
    id: 'post-2',
    author: 'Roberto Hernández',
    profileTag: 'Titán Grado II • Nivel 3',
    category: 'Avance de Peso y Hábitos',
    milestone: '🪜 5,000 pasos diarios + -6.5 kg',
    title: 'Pasé de no querer levantarme a cumplir mis 5K pasos y derrotar al Jefe del Día',
    content:
      'Siempre había intentado dietas extremas y las abandonaba a las dos semanas. Con la Posición de Poder cada mañana y viendo cómo le bajo vida al Monstruo del Azúcar con cada check, hoy cumplo 21 días seguidos sin refrescos. ¡Mi pila de felicidad hoy terminó en VERDE!',
    date: 'Hace 3 horas',
    featured: false,
    image: '',
    reactions: { fire: 34, heart: 49, clap: 28 },
    comments: [
      { author: 'Jesús Sanabria (Mr. Muévase)', text: '¡Eso es todo Roberto! Pecho orgulloso, paso a paso. ¡Felicidades!' }
    ]
  },
  {
    id: 'post-3',
    author: 'Elena Vargas',
    profileTag: 'Guerrera Grado I • Nivel 2',
    category: 'Sin Azúcar / Recetas',
    milestone: '🥗 14 días No Azúcar y No Ultraprocesados',
    title: 'Mi cena sencilla en 10 minutos + Restaurante aliado donde piden todo natural',
    content:
      'Para quienes creen que comer sano es caro o difícil: hoy cené pechuga a la plancha con aguacate, verduras al vapor y agua mineral con limón. ¡Sencillo, delicioso y cumpliendo las 2 reglas de oro del pilar de Lenguaje!',
    date: 'Ayer',
    featured: false,
    image: '',
    reactions: { fire: 29, heart: 41, clap: 19 },
    comments: []
  },
  {
    id: 'post-4',
    author: 'Miguel Ángel Torres',
    profileTag: 'Buscador de Felicidad • Networking',
    category: 'Networking y Apoyo',
    milestone: '🤝 Grupo de caminata y Live de TikTok',
    title: '¿Quién se suma hoy al Live de TikTok de @mr_muevase para hacer la rutina juntos?',
    content:
      'Hoy hice mi Hoja Final del Día (Reflexión) y me di cuenta de que moverme acompañado me da el doble de impulso. También le hablé a un amigo con el que estaba distanciado (Terminación) y siento una paz enorme. ¡Nos vemos en el Live!',
    date: 'Hace 1 día',
    featured: false,
    image: '',
    reactions: { fire: 22, heart: 31, clap: 17 },
    comments: []
  }
];

const defaultState = {
  user: null,
  xp: 50,
  coins: 50,
  soundEnabled: true,
  bossIndex: 0,
  leadsDatabase: [
    {
      date: '14/11/2026',
      name: 'Jesús Sanabria (Fundador)',
      email: 'contacto@mrmuevase.com',
      phone: '+52 55 0000 0000',
      profile: 'Fundador Mr. Muévase',
      goalKg: '-48 kg logrados en 2026 • Cambiar al mundo'
    }
  ],
  adminConfig: {
    ownerEmail: '',
    ownerWhatsapp: '',
    webhookUrl: ''
  },
  streak: 1,
  photoDataUrl: '',
  visionKgText: 'Meta: -25 kg • Delgado y Feliz',
  futureVisionText:
    'Me veo frente al espejo con mi ropa favorita, ligero, lleno de energía, con pecho orgulloso y una sonrisa de victoria.',
  visionTraits: ['✨ Delgado y Ligero', '😁 Sonrisa de Orgullo', '⚡ Lleno de Energía'],
  activeManifestTopic: 'poder',
  stepsGoal: 3000,
  currentSteps: 1500,
  stairsCount: 2,
  checks: {
    fis_postura: false,
    fis_rutina_yt: false,
    fis_movimiento: false,
    fis_neat: false,
    fis_extra: false,
    enf_objetivos: false,
    enf_foto_paciencia: false,
    enf_impulso: false,
    enf_terminacion: false,
    enf_reflexion: false,
    enf_celebracion: false,
    len_meditar: false,
    len_alimentos: false,
    len_habitos_felicidad: false,
    len_manifestar: false,
    len_gratitud: false,
    len_amor: false,
    len_sueno: false
  },
  subChecks: {
    ruleNoSugar: false,
    ruleNoUltra: false,
    manifestMorning: false,
    manifestNight: false,
    impulseDays: { L: true, M: false, X: false, J: false, V: false, S: false, D: false },
    habits7: { 1: true, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false }
  },
  inputs: {
    fisEjercicio: '',
    fisExtra: '',
    goalShortText: 'Caminar 3,000 pasos diarios y cero refrescos esta semana',
    goalShortPct: 40,
    goalMediumText: 'Bajar mis primeros 12 kg y dominar los 5,000 pasos sin fatiga',
    goalMediumPct: 25,
    goalLongText: 'Vivir en mi peso saludable como en mi Espejo del Futuro, pleno y feliz',
    goalLongPct: 15,
    enfImpulsoMinimo: '',
    enfTerminacion: '',
    enfReflexion: '',
    enfReflexionLearning: '',
    enfCelebracion: '',
    habitInput1: '',
    habitInput2: '',
    habitInput3: '',
    habitInput4: '',
    habitInput5: '',
    habitInput6: '',
    habitInput7: '',
    lenManifiestoCustom: '',
    lenGratitud: '',
    lenAmorAction: 'espejo',
    lenAmorNote: '',
    sleepHours: 7.5,
    sleepQuality: 'Excelente'
  },
  releasedBurdens: ['Perdoné mis intentos pasados y empecé desde el amor.'],
  victoriesWall: ['Elegí entrar a Mr. Muévase y dar mi primer paso de bebé.'],
  reminderEnabled: true,
  reminderFrequency: 'midday',
  blogPosts: INITIAL_BLOG_POSTS,
  weekendInventories: [
    {
      date: 'Semana Inicial • Comunidad Mr. Muévase',
      wins: 'Tomé la decisión de cambiar mi vida, definí mis objetivos a corto, mediano y largo plazo y empecé con pasos de bebé.',
      improve: 'Subir 500 pasos más cada día y preparar mi agua natural desde la mañana.',
      weightNote: 'Primeros cambios en desinflamación y mucha esperanza.'
    }
  ],
  dailySnapshots: []
};

let state = loadState();
let currentHabitIndex = 0;
let powerPoseInterval = null;
let breatheInterval = null;
let ritualInterval = null;
let questTimerInterval = null;
let pendingBlogImageData = '';
let audioCtx = null;

function loadState() {
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ||
      localStorage.getItem('mr_muevase_app_state_v3') ||
      localStorage.getItem('mr_muevase_app_state_v2') ||
      localStorage.getItem('mr_muevase_app_state_v1');
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      xp: typeof parsed.xp === 'number' ? parsed.xp : 50,
      coins: typeof parsed.coins === 'number' ? parsed.coins : 50,
      adminConfig: { ...defaultState.adminConfig, ...(parsed.adminConfig || {}) },
      checks: { ...defaultState.checks, ...(parsed.checks || {}) },
      subChecks: {
        ...defaultState.subChecks,
        ...(parsed.subChecks || {}),
        impulseDays: { ...defaultState.subChecks.impulseDays, ...(parsed.subChecks?.impulseDays || {}) },
        habits7: { ...defaultState.subChecks.habits7, ...(parsed.subChecks?.habits7 || {}) }
      },
      inputs: { ...defaultState.inputs, ...(parsed.inputs || {}) },
      visionTraits: Array.isArray(parsed.visionTraits) ? parsed.visionTraits : defaultState.visionTraits,
      leadsDatabase: parsed.leadsDatabase?.length ? parsed.leadsDatabase : defaultState.leadsDatabase,
      blogPosts: parsed.blogPosts?.length ? parsed.blogPosts : INITIAL_BLOG_POSTS
    };
  } catch (e) {
    return structuredClone(defaultState);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('No se pudo guardar en localStorage:', e);
  }
}

// =========================================================================
// MOTOR DE SONIDO DE VIDEOJUEGO (WEB AUDIO API SIN ARCHIVOS EXTERNOS)
// =========================================================================
function playGameSound(type = 'coin') {
  if (!state.soundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    if (type === 'coin') {
      // Sonido clásico de moneda / XP (B5 -> E6)
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, now);
      osc.frequency.setValueAtTime(1318.51, now + 0.08);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'fanfare') {
      // Fanfarria de victoria / nivel (C5 -> E5 -> G5 -> C6)
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
        gain.gain.setValueAtTime(0.16, now + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.28);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.28);
      });
    }
  } catch (e) {
    // Ignorar si el navegador bloquea audio antes del primer clic
  }
}

function awardXPAndCoins(xpAmount, coinsAmount, reasonText = '') {
  state.xp = Math.max(0, (state.xp || 0) + xpAmount);
  state.coins = Math.max(0, (state.coins || 0) + coinsAmount);
  saveState();

  playGameSound(xpAmount >= 50 ? 'fanfare' : 'coin');
  spawnFloatingXPPopup(`+${xpAmount} XP  +${coinsAmount} 🪙`);

  // Animación de impacto al Jefe del Día
  const bossBox = document.getElementById('rpg-boss-box');
  if (bossBox) {
    bossBox.classList.remove('boss-hit');
    void bossBox.offsetWidth;
    bossBox.classList.add('boss-hit');
  }

  updateBatteryUI();
  renderArcadeView();
  if (reasonText) {
    showToast(`${reasonText} (+${xpAmount} XP, +${coinsAmount} 🪙)`);
  }
}

function spawnFloatingXPPopup(text) {
  const popup = document.createElement('div');
  popup.className = 'floating-xp-popup';
  popup.textContent = text;
  popup.style.left = `${40 + Math.random() * 20}%`;
  popup.style.top = '35%';
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1250);
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3600);
}

function launchConfetti() {
  const layer = document.getElementById('celebration-fx-layer');
  if (!layer) return;
  const colors = ['#f25c22', '#ffb703', '#00b4ac', '#10b981', '#6d28d9'];
  for (let i = 0; i < 36; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 2500);
  }
}

// =========================================================================
// INICIALIZACIÓN DE LA APP
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initAuthAndLeadsDB();
  initTabs();
  initMobilePillarSwitcher();
  initRPGArenaAndRoulette();
  initVisionMirror();
  initChecklistsAndInputs();
  initEnfoqueDeepKeysAndHabits();
  initLenguajeManifestAndLove();
  initNEATSteps();
  initTimersAndExactMeditation();
  initScheduleModeSync();
  initBlog();
  initHistoryAndInventory();
  updateBatteryUI();
  renderArcadeView();
});

// =========================================================================
// 1. ARENA RPG: SONIDO, JEFE DEL DÍA, RULETA DE MISIÓN Y SALA DE TROFEOS
// =========================================================================
function initRPGArenaAndRoulette() {
  const btnSound = document.getElementById('btn-toggle-sound');
  const btnChangeBoss = document.getElementById('btn-change-boss');
  const btnSpinQuest = document.getElementById('btn-spin-quest');
  const btnCompleteQuest = document.getElementById('btn-complete-quest');
  const questDisplay = document.getElementById('roulette-quest-display');
  const questTimerSec = document.getElementById('quest-timer-sec');

  const updateSoundBtn = () => {
    btnSound.textContent = state.soundEnabled ? '🔊 Sonido' : '🔇 Silencio';
  };
  updateSoundBtn();

  btnSound.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    saveState();
    updateSoundBtn();
    if (state.soundEnabled) playGameSound('coin');
  });

  btnChangeBoss.addEventListener('click', () => {
    state.bossIndex = ((state.bossIndex || 0) + 1) % DAILY_BOSSES.length;
    saveState();
    updateBatteryUI();
  });

  btnSpinQuest.addEventListener('click', () => {
    playGameSound('coin');
    const randomQuest = LIGHTNING_QUESTS[Math.floor(Math.random() * LIGHTNING_QUESTS.length)];
    questDisplay.innerHTML = `<strong>🎯 TU MISIÓN DE 60s:</strong> ${escapeHtml(randomQuest)}`;
    btnCompleteQuest.classList.remove('hidden');

    if (questTimerInterval) clearInterval(questTimerInterval);
    let sec = 60;
    questTimerSec.textContent = `${sec}s`;
    questTimerInterval = setInterval(() => {
      sec--;
      questTimerSec.textContent = sec > 0 ? `${sec}s` : '¡Listo!';
      if (sec <= 0) {
        clearInterval(questTimerInterval);
        questTimerInterval = null;
      }
    }, 1000);
  });

  btnCompleteQuest.addEventListener('click', () => {
    if (questTimerInterval) {
      clearInterval(questTimerInterval);
      questTimerInterval = null;
    }
    btnCompleteQuest.classList.add('hidden');
    questDisplay.textContent =
      '🏆 ¡Misión Relámpago superada! Gira de nuevo cuando quieras otra dosis de energía.';
    launchConfetti();
    awardXPAndCoins(50, 20, '🎲 ¡Misión Relámpago completada!');
  });
}

function renderArcadeView() {
  // Actualizar nodos del Mapa de Mundos
  const xp = state.xp || 0;
  const worldThresholds = { 1: 0, 2: 300, 3: 800, 4: 1500 };
  document.querySelectorAll('#worlds-trail-grid .world-node').forEach((node) => {
    const w = Number(node.dataset.world);
    node.classList.toggle('unlocked', xp >= worldThresholds[w]);
  });

  // Sala de Trofeos y Medallas
  const trophiesGrid = document.getElementById('trophies-badges-grid');
  if (trophiesGrid) {
    const totalChecks = Object.values(state.checks).filter(Boolean).length;
    const trophies = [
      {
        icon: '🦸‍♂️',
        title: 'Pecho de Acero',
        desc: 'Completar la Posición de Poder en Fisiología.',
        earned: !!state.checks.fis_postura
      },
      {
        icon: '🛡️',
        title: 'Destructor del Azúcar',
        desc: 'Cumplir No Azúcar y No Ultraprocesados.',
        earned: !!state.checks.len_alimentos
      },
      {
        icon: '👟',
        title: 'Caminante Imparable',
        desc: 'Activar tu NEAT diario y escaleras.',
        earned: !!state.checks.fis_neat
      },
      {
        icon: '🧘‍♂️',
        title: 'Maestro Zen',
        desc: 'Completar la meditación de 60 segundos.',
        earned: !!state.checks.len_meditar
      },
      {
        icon: '🔑',
        title: 'Guardián del Enfoque',
        desc: 'Celebrar una victoria o liberar un pendiente hoy.',
        earned: !!state.checks.enf_celebracion || !!state.checks.enf_terminacion
      },
      {
        icon: '👑',
        title: 'Campeón del Día (Pila en Verde)',
        desc: 'Derrotar al Jefe del Día superando el 75% de tu Pila.',
        earned: totalChecks >= 14
      }
    ];

    trophiesGrid.innerHTML = trophies
      .map(
        (t) => `
      <div class="trophy-card ${t.earned ? 'earned' : ''}">
        <div class="trophy-icon">${t.icon}</div>
        <div class="trophy-info">
          <strong>${escapeHtml(t.title)} ${t.earned ? '✅' : '🔒'}</strong>
          <span>${escapeHtml(t.desc)}</span>
        </div>
      </div>
    `
      )
      .join('');
  }

  // Tienda de Recompensas
  const shopBalance = document.getElementById('shop-coins-balance');
  if (shopBalance) shopBalance.textContent = state.coins || 0;

  const shopList = document.getElementById('shop-items-list');
  if (shopList) {
    shopList.innerHTML = SHOP_REWARDS.map(
      (item) => `
      <div class="shop-item-row">
        <div class="shop-item-info">
          <strong>${item.icon} ${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.desc)}</span>
        </div>
        <button type="button" class="btn-boost btn-buy-reward" data-id="${item.id}" data-cost="${item.cost}">
          Canjear 🪙 ${item.cost}
        </button>
      </div>
    `
    ).join('');

    shopList.querySelectorAll('.btn-buy-reward').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cost = Number(btn.dataset.cost);
        const id = btn.dataset.id;
        if ((state.coins || 0) < cost) {
          showToast('🪙 Necesitas más monedas. ¡Completa checks en tus 3 Pilares para ganar monedas!');
          return;
        }
        state.coins -= cost;
        if (id === 'reward_shield') {
          state.streak = (state.streak || 1) + 1;
          updateUserHeaderUI();
        }
        saveState();
        playGameSound('fanfare');
        launchConfetti();
        updateBatteryUI();
        renderArcadeView();
        showToast('🎁 ¡Premio canjeado con éxito! Disfruta tu recompensa bien merecida.');
      });
    });
  }
}

// =========================================================================
// 2. REGISTRO + BASE DE DATOS PARA CORREO, WHATSAPP Y EXCEL
// =========================================================================
function initAuthAndLeadsDB() {
  const authModal = document.getElementById('auth-modal');
  const regForm = document.getElementById('register-form');
  const btnEditProfile = document.getElementById('btn-edit-profile');
  const btnOpenLeads = document.getElementById('btn-open-leads-db');
  const leadsModal = document.getElementById('leads-db-modal');
  const btnCloseLeads = document.getElementById('btn-close-leads-modal');
  const btnSaveAdmin = document.getElementById('btn-save-admin-config');
  const btnExportCsv = document.getElementById('btn-export-csv');
  const btnSendWaNow = document.getElementById('btn-send-whatsapp-now');

  if (!state.user) {
    authModal.classList.remove('hidden');
  } else {
    updateUserHeaderUI();
  }

  renderLeadsTable();

  btnEditProfile.addEventListener('click', () => {
    if (state.user) {
      document.getElementById('reg-name').value = state.user.name || '';
      document.getElementById('reg-email').value = state.user.email || '';
      document.getElementById('reg-phone').value = state.user.phone || '';
      document.getElementById('reg-profile').value = state.user.profile || 'Obesidad Grado I';
      document.getElementById('reg-goal-kg').value = state.user.goalKg || '';
    }
    authModal.classList.remove('hidden');
  });

  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const profile = document.getElementById('reg-profile').value;
    const goalKg = document.getElementById('reg-goal-kg').value.trim() || 'Sentirme pleno, delgado y feliz';

    if (!name || !email || !phone) return;

    const newLead = {
      date: new Date().toLocaleDateString('es-MX'),
      name,
      email,
      phone,
      profile,
      goalKg
    };

    state.user = newLead;
    state.visionKgText = `🎯 Meta: ${goalKg}`;
    const vKgInput = document.getElementById('vision-kg-input');
    if (vKgInput) vKgInput.value = state.visionKgText;

    state.inputs.habitInput1 = `Soy ${name} y estoy empezando una nueva vida en Mr. Muévase.`;
    const h1Input = document.getElementById('habit-input-1');
    if (h1Input) h1Input.value = state.inputs.habitInput1;

    const existingIdx = state.leadsDatabase.findIndex((l) => l.email.toLowerCase() === email.toLowerCase());
    if (existingIdx >= 0) {
      state.leadsDatabase[existingIdx] = newLead;
    } else {
      state.leadsDatabase.unshift(newLead);
    }

    saveState();
    updateUserHeaderUI();
    renderVisionCard();
    renderLeadsTable();
    authModal.classList.add('hidden');
    launchConfetti();
    awardXPAndCoins(50, 25, `🎮 ¡Héroe ${name} creado!`);

    await notifyOwnerOfNewLead(newLead);
  });

  btnOpenLeads.addEventListener('click', () => {
    document.getElementById('admin-owner-email').value = state.adminConfig.ownerEmail || '';
    document.getElementById('admin-owner-whatsapp').value = state.adminConfig.ownerWhatsapp || '';
    document.getElementById('admin-webhook-url').value = state.adminConfig.webhookUrl || '';
    renderLeadsTable();
    leadsModal.classList.remove('hidden');
  });

  btnCloseLeads.addEventListener('click', () => {
    leadsModal.classList.add('hidden');
  });

  btnSaveAdmin.addEventListener('click', () => {
    state.adminConfig.ownerEmail = document.getElementById('admin-owner-email').value.trim();
    state.adminConfig.ownerWhatsapp = document.getElementById('admin-owner-whatsapp').value.replace(/\D/g, '');
    state.adminConfig.webhookUrl = document.getElementById('admin-webhook-url').value.trim();
    saveState();
    showToast('✅ Datos de recepción guardados para recibir cada nuevo registro.');
  });

  btnExportCsv.addEventListener('click', exportLeadsToCSV);

  btnSendWaNow.addEventListener('click', () => {
    const lead = state.user || state.leadsDatabase[0];
    if (!lead) return;
    openWhatsAppWithLead(lead);
  });
}

async function notifyOwnerOfNewLead(lead) {
  if (state.adminConfig.ownerEmail) {
    try {
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(state.adminConfig.ownerEmail)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `🔥 Nuevo miembro en Mr. Muévase: ${lead.name}`,
          Nombre: lead.name,
          Correo: lead.email,
          Telefono_WhatsApp: lead.phone,
          Punto_de_Partida: lead.profile,
          Meta_Transformacion: lead.goalKg,
          Fecha: lead.date
        })
      });
    } catch (err) {
      console.warn('Error enviando correo vía FormSubmit:', err);
    }
  }

  if (state.adminConfig.webhookUrl) {
    try {
      await fetch(state.adminConfig.webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead)
      });
    } catch (err) {
      console.warn('Error enviando a Webhook:', err);
    }
  }

  if (state.adminConfig.ownerWhatsapp) {
    openWhatsAppWithLead(lead);
  }
}

function openWhatsAppWithLead(lead) {
  const targetPhone = state.adminConfig.ownerWhatsapp || '';
  const text = `🔥 *NUEVO REGISTRO EN MR. MUÉVASE*\n\n👤 *Nombre:* ${lead.name}\n📧 *Correo:* ${lead.email}\n📱 *Teléfono:* ${lead.phone}\n🎯 *Punto de partida:* ${lead.profile}\n🏆 *Meta:* ${lead.goalKg}\n\n¡Listo para empezar con Felicidad = Progreso!`;
  const url = targetPhone
    ? `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`
    : `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function renderLeadsTable() {
  const tbody = document.getElementById('leads-table-body');
  const badge = document.getElementById('leads-count-badge');
  const tableCount = document.getElementById('table-leads-count');
  if (!tbody) return;

  const list = state.leadsDatabase || [];
  if (badge) badge.textContent = list.length;
  if (tableCount) tableCount.textContent = list.length;

  tbody.innerHTML = list
    .map(
      (l) => `
    <tr>
      <td>${escapeHtml(l.date)}</td>
      <td><strong>${escapeHtml(l.name)}</strong></td>
      <td>${escapeHtml(l.email)}</td>
      <td>${escapeHtml(l.phone)}</td>
      <td>${escapeHtml(l.profile)}</td>
      <td>${escapeHtml(l.goalKg)}</td>
    </tr>
  `
    )
    .join('');
}

function exportLeadsToCSV() {
  const rows = [
    ['Fecha', 'Nombre Completo', 'Correo Electronico', 'Telefono / WhatsApp', 'Punto de Partida', 'Meta Personal']
  ];
  (state.leadsDatabase || []).forEach((l) => {
    rows.push([l.date, l.name, l.email, l.phone, l.profile, l.goalKg]);
  });

  const csvContent =
    '\uFEFF' +
    rows
      .map((r) => r.map((field) => `"${String(field ?? '').replace(/"/g, '""')}"`).join(','))
      .join('\r\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Base_Datos_Mr_Muevase_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Archivo Excel (.CSV) descargado con todos los miembros registrados.');
}

function updateUserHeaderUI() {
  const greetingBar = document.getElementById('user-greeting-bar');
  const streakEl = document.getElementById('streak-count');

  if (state.user) {
    greetingBar.textContent = `${state.user.name} • ${state.user.profile}`;
  } else {
    greetingBar.textContent = 'Comunidad Global Mr. Muévase';
  }
  streakEl.textContent = state.streak || 1;
}

// =========================================================================
// 3. NAVEGACIÓN POR PESTAÑAS Y PILARES EN MÓVIL
// =========================================================================
function initTabs() {
  const navBtns = document.querySelectorAll('.nav-tab');
  const views = {
    dashboard: document.getElementById('tab-dashboard'),
    arcade: document.getElementById('tab-arcade'),
    blog: document.getElementById('tab-blog'),
    history: document.getElementById('tab-history')
  };

  navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      navBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      Object.keys(views).forEach((k) => {
        if (views[k]) views[k].classList.toggle('hidden', k !== target);
      });
      if (target === 'arcade') renderArcadeView();
    });
  });
}

function initMobilePillarSwitcher() {
  const btns = document.querySelectorAll('.pillar-switch-btn');
  const cards = {
    fisiologia: document.getElementById('pillar-fisiologia'),
    enfoque: document.getElementById('pillar-enfoque'),
    lenguaje: document.getElementById('pillar-lenguaje')
  };

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.pillar;
      btns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      Object.keys(cards).forEach((key) => {
        if (target === 'all') {
          cards[key].classList.remove('hidden');
        } else {
          cards[key].classList.toggle('hidden', key !== target);
        }
      });
    });
  });
}

// =========================================================================
// 4. ESPEJO DE VISUALIZACIÓN DEL FUTURO
// =========================================================================
function initVisionMirror() {
  const inputPhoto = document.getElementById('input-photo-upload');
  const kgInput = document.getElementById('vision-kg-input');
  const visionInput = document.getElementById('future-vision-input');
  const btnVisualizeCheck = document.getElementById('btn-visualize-check');
  const traitChips = document.querySelectorAll('.trait-chip');

  const btnOpenRitual = document.getElementById('btn-open-vision-ritual');
  const ritualModal = document.getElementById('vision-ritual-modal');
  const btnCloseRitual = document.getElementById('btn-close-ritual-modal');
  const btnStartRitual = document.getElementById('btn-start-ritual-30s');
  const ritualTimerEl = document.getElementById('ritual-timer-display');

  kgInput.value = state.visionKgText || '🎯 Meta: -25 kg • Delgado y Feliz';
  visionInput.value =
    state.futureVisionText ||
    'Me veo frente al espejo con mi ropa favorita, ligero, lleno de energía, con pecho orgulloso y una sonrisa de victoria.';

  if (state.photoDataUrl) {
    renderCurrentPhoto(state.photoDataUrl);
  }
  renderVisionCard();

  inputPhoto.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      state.photoDataUrl = ev.target.result;
      saveState();
      renderCurrentPhoto(state.photoDataUrl);
      awardXPAndCoins(25, 10, '📸 ¡Foto de compromiso cargada!');
    };
    reader.readAsDataURL(file);
  });

  kgInput.addEventListener('input', () => {
    state.visionKgText = kgInput.value;
    saveState();
    renderVisionCard();
  });

  visionInput.addEventListener('input', () => {
    state.futureVisionText = visionInput.value;
    saveState();
    renderVisionCard();
  });

  traitChips.forEach((chip) => {
    const t = chip.dataset.trait;
    chip.classList.toggle('active', state.visionTraits.includes(t));
    chip.addEventListener('click', () => {
      if (state.visionTraits.includes(t)) {
        state.visionTraits = state.visionTraits.filter((x) => x !== t);
      } else {
        state.visionTraits.push(t);
      }
      chip.classList.toggle('active', state.visionTraits.includes(t));
      saveState();
      renderVisionCard();
    });
  });

  btnVisualizeCheck.addEventListener('click', () => {
    state.checks.enf_foto_paciencia = true;
    syncCheckboxesFromState();
    launchConfetti();
    awardXPAndCoins(25, 10, '🌟 ¡Visualización del Futuro completada!');
  });

  btnOpenRitual.addEventListener('click', () => {
    document.getElementById('ritual-goal-headline').textContent =
      state.visionKgText || '🎯 Meta: Delgado, Fuerte y Feliz';
    document.getElementById('ritual-vision-paragraph').textContent = `“${state.futureVisionText}”`;
    ritualModal.classList.remove('hidden');
  });

  btnCloseRitual.addEventListener('click', () => {
    if (ritualInterval) {
      clearInterval(ritualInterval);
      ritualInterval = null;
    }
    ritualTimerEl.textContent = '30s';
    ritualModal.classList.add('hidden');
  });

  btnStartRitual.addEventListener('click', () => {
    if (ritualInterval) clearInterval(ritualInterval);
    let sec = 30;
    ritualTimerEl.textContent = `${sec}s`;
    ritualInterval = setInterval(() => {
      sec--;
      ritualTimerEl.textContent = `${sec}s`;
      if (sec <= 0) {
        clearInterval(ritualInterval);
        ritualInterval = null;
        ritualTimerEl.textContent = '✓';
        state.checks.enf_foto_paciencia = true;
        syncCheckboxesFromState();
        launchConfetti();
        awardXPAndCoins(30, 15, '✨ ¡Ritual de visualización de 30s completado!');
      }
    }, 1000);
  });
}

function renderCurrentPhoto(dataUrl) {
  const currentPreview = document.getElementById('current-photo-preview');
  currentPreview.innerHTML = `<img src="${dataUrl}" alt="Mi foto compromiso" />`;
}

function renderVisionCard() {
  const badge = document.getElementById('vision-card-weight-badge');
  const quote = document.getElementById('vision-card-quote-text');
  const tagsBox = document.getElementById('vision-card-tags');

  if (badge) badge.textContent = state.visionKgText || '🎯 Meta: -25 kg • Delgado y Feliz';
  if (quote) quote.textContent = `“${state.futureVisionText || 'Me veo delgado, fuerte, sano y feliz.'}”`;
  if (tagsBox) {
    tagsBox.innerHTML = (state.visionTraits || [])
      .map((t) => `<span>${escapeHtml(t)}</span>`)
      .join('');
  }
}

// =========================================================================
// 5. PILA DIARIA DE FELICIDAD Y CHECKLISTS GENERALES (+25 XP POR CHECK)
// =========================================================================
function initChecklistsAndInputs() {
  syncCheckboxesFromState();

  document.querySelectorAll('.pillar-check').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const id = checkbox.dataset.id;
      state.checks[id] = checkbox.checked;
      if (checkbox.checked) {
        awardXPAndCoins(25, 10, '⚔️ ¡Golpe al Jefe del Día! Hábito completado');
      } else {
        saveState();
        updateBatteryUI();
      }
    });
  });

  // Reglas de alimentación (No Azúcar y No Ultraprocesados)
  const ruleNoSugar = document.getElementById('rule-no-sugar');
  const ruleNoUltra = document.getElementById('rule-no-ultra');
  ruleNoSugar.checked = !!state.subChecks.ruleNoSugar;
  ruleNoUltra.checked = !!state.subChecks.ruleNoUltra;

  const updateNutritionCheck = () => {
    state.subChecks.ruleNoSugar = ruleNoSugar.checked;
    state.subChecks.ruleNoUltra = ruleNoUltra.checked;
    if (ruleNoSugar.checked && ruleNoUltra.checked && !state.checks.len_alimentos) {
      state.checks.len_alimentos = true;
      syncCheckboxesFromState();
      launchConfetti();
      awardXPAndCoins(35, 15, '🛡️ ¡Escudo Cero Azúcar y Cero Ultraprocesados activado!');
      return;
    }
    saveState();
    updateBatteryUI();
  };
  ruleNoSugar.addEventListener('change', updateNutritionCheck);
  ruleNoUltra.addEventListener('change', updateNutritionCheck);

  // Botones Master Check de cada Pilar
  document.querySelectorAll('.btn-pillar-master-check').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pillar = btn.dataset.masterPillar;
      const pillarBoxes = document.querySelectorAll(`.pillar-check[data-pillar="${pillar}"]`);
      const allChecked = Array.from(pillarBoxes).every((cb) => cb.checked);

      pillarBoxes.forEach((cb) => {
        cb.checked = !allChecked;
        state.checks[cb.dataset.id] = !allChecked;
      });

      if (!allChecked) {
        launchConfetti();
        awardXPAndCoins(75, 30, `🔥 ¡COMBO ${pillar.toUpperCase()} COMPLETADO!`);
      } else {
        saveState();
        updateBatteryUI();
      }
    });
  });

  bindTextInput('input-fis-ejercicio', 'fisEjercicio');
  bindTextInput('input-fis-extra', 'fisExtra');
  bindTextInput('goal-text-short', 'goalShortText');
  bindTextInput('goal-text-medium', 'goalMediumText');
  bindTextInput('goal-text-long', 'goalLongText');
  bindTextInput('input-enf-impulso-minimo', 'enfImpulsoMinimo');
  bindTextInput('input-enf-terminacion', 'enfTerminacion');
  bindTextInput('input-enf-reflexion', 'enfReflexion');
  bindTextInput('input-enf-reflexion-learning', 'enfReflexionLearning');
  bindTextInput('input-enf-celebracion', 'enfCelebracion');
  bindTextInput('input-len-manifiesto-custom', 'lenManifiestoCustom');
  bindTextInput('input-len-gratitud', 'lenGratitud');
  bindTextInput('input-len-amor-note', 'lenAmorNote');
  bindTextInput('input-sleep-hours', 'sleepHours');
  bindTextInput('select-sleep-quality', 'sleepQuality');

  for (let i = 1; i <= 7; i++) {
    bindTextInput(`habit-input-${i}`, `habitInput${i}`);
  }

  bindGoalSlider('goal-range-short', 'pct-label-short', 'goalShortPct');
  bindGoalSlider('goal-range-medium', 'pct-label-medium', 'goalMediumPct');
  bindGoalSlider('goal-range-long', 'pct-label-long', 'goalLongPct');

  // Recordatorio de Pila Baja y Recarga Rápida
  const btnQuickBoost = document.getElementById('btn-quick-boost');
  btnQuickBoost.addEventListener('click', () => {
    state.checks.fis_postura = true;
    state.checks.len_manifestar = true;
    state.checks.len_gratitud = true;
    state.subChecks.manifestMorning = true;
    document.getElementById('manifest-morning').checked = true;
    syncCheckboxesFromState();
    launchConfetti();
    awardXPAndCoins(75, 25, '⚡ ¡Combo de Recarga Rápida activado!');
  });

  const btnEnableReminders = document.getElementById('btn-enable-reminders');
  btnEnableReminders.addEventListener('click', () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((perm) => {
        if (perm === 'granted') {
          new Notification('Mr. Muévase RPG — Pila de Felicidad', {
            body: '¡Recuerda que Felicidad = Progreso! Haz tus misiones hoy para derrotar al Jefe del Día.'
          });
          showToast('🔔 Alertas de misión activadas.');
        } else {
          showToast('🔔 Alertas visuales activas dentro del juego.');
        }
      });
    } else {
      showToast('🔔 Alertas visuales activas dentro del juego.');
    }
  });
}

// =========================================================================
// 6. PILAR 2: ENFOQUE (4 LLAVES Y 7 HÁBITOS)
// =========================================================================
function initEnfoqueDeepKeysAndHabits() {
  const keyTabBtns = document.querySelectorAll('.key-tab-btn');
  const keyPanels = {
    impulso: document.getElementById('keypanel-impulso'),
    terminacion: document.getElementById('keypanel-terminacion'),
    reflexion: document.getElementById('keypanel-reflexion'),
    celebracion: document.getElementById('keypanel-celebracion')
  };

  keyTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.keytab;
      keyTabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      Object.keys(keyPanels).forEach((k) => {
        keyPanels[k].classList.toggle('hidden', k !== target);
      });
    });
  });

  document.querySelectorAll('#impulse-week-dots .day-dot').forEach((dot) => {
    const day = dot.dataset.day;
    dot.classList.toggle('active', !!state.subChecks.impulseDays?.[day]);
    dot.addEventListener('click', () => {
      state.subChecks.impulseDays[day] = !state.subChecks.impulseDays[day];
      dot.classList.toggle('active', state.subChecks.impulseDays[day]);
      state.checks.enf_impulso = true;
      syncCheckboxesFromState();
      if (state.subChecks.impulseDays[day]) {
        awardXPAndCoins(15, 5, '🔥 ¡Día de estabilidad marcado!');
      } else {
        saveState();
        updateBatteryUI();
      }
    });
  });

  const btnRelease = document.getElementById('btn-release-burden');
  const typeSelect = document.getElementById('select-terminacion-type');
  const termInput = document.getElementById('input-enf-terminacion');

  const renderReleasedBurdens = () => {
    const container = document.getElementById('released-burdens-list');
    if (!container) return;
    container.innerHTML = (state.releasedBurdens || [])
      .slice(0, 3)
      .map((item) => `<div class="mini-tag-item">🕊️ ${escapeHtml(item)}</div>`)
      .join('');
  };
  renderReleasedBurdens();

  btnRelease.addEventListener('click', () => {
    const text = termInput.value.trim();
    const category = typeSelect.value;
    const entry = text ? `${category}: ${text}` : `${category} hoy`;
    state.releasedBurdens.unshift(entry);
    termInput.value = '';
    state.inputs.enfTerminacion = '';
    state.checks.enf_terminacion = true;
    syncCheckboxesFromState();
    renderReleasedBurdens();
    awardXPAndCoins(25, 10, '🕊️ ¡Pendiente liberado! Avanzamos más ligeros');
  });

  const refInput = document.getElementById('input-enf-reflexion');
  refInput.addEventListener('change', () => {
    if (refInput.value.trim().length > 3 && !state.checks.enf_reflexion) {
      state.checks.enf_reflexion = true;
      syncCheckboxesFromState();
      awardXPAndCoins(25, 10, '📓 ¡Hoja Final del Día registrada!');
    }
  });

  const btnCelebrate = document.getElementById('btn-celebrate-victory');
  const celInput = document.getElementById('input-enf-celebracion');

  const renderVictoriesWall = () => {
    const container = document.getElementById('victories-wall-list');
    if (!container) return;
    container.innerHTML = (state.victoriesWall || [])
      .slice(0, 3)
      .map((v) => `<div class="mini-tag-item">🌟 ${escapeHtml(v)}</div>`)
      .join('');
  };
  renderVictoriesWall();

  btnCelebrate.addEventListener('click', () => {
    const text = celInput.value.trim() || 'Me sorprendí eligiendo cuidarme con amor hoy.';
    state.victoriesWall.unshift(text);
    celInput.value = '';
    state.inputs.enfCelebracion = '';
    state.checks.enf_celebracion = true;
    syncCheckboxesFromState();
    renderVictoriesWall();
    launchConfetti();
    awardXPAndCoins(25, 15, '🎉 ¡Victoria celebrada en tu Muro!');
  });

  const updateHabits7Counter = () => {
    const count = Object.values(state.subChecks.habits7).filter(Boolean).length;
    const counterEl = document.getElementById('habits7-counter');
    if (counterEl) counterEl.textContent = `${count}/7 activos hoy`;
  };

  document.querySelectorAll('.habit7-check').forEach((chk) => {
    const hNum = chk.dataset.h;
    chk.checked = !!state.subChecks.habits7[hNum];
    chk.addEventListener('change', () => {
      state.subChecks.habits7[hNum] = chk.checked;
      updateHabits7Counter();
      const checkedCount = Object.values(state.subChecks.habits7).filter(Boolean).length;
      if (checkedCount >= 4) {
        state.checks.enf_impulso = true;
        syncCheckboxesFromState();
      }
      if (chk.checked) {
        awardXPAndCoins(10, 5, `🔥 Hábito #${hNum} del Enfoque activado`);
      } else {
        saveState();
        updateBatteryUI();
      }
    });
  });
  updateHabits7Counter();

  document.querySelectorAll('.habit-expand-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.expand;
      const body = document.getElementById(`habit-body-${id}`);
      if (!body) return;
      const isHidden = body.classList.toggle('hidden');
      btn.textContent = isHidden ? 'Ejercicio ▾' : 'Cerrar ▴';
    });
  });
}

// =========================================================================
// 7. PILAR 3: LENGUAJE — MANIFESTAR MULTI-ÁREA Y VIVIR DESDE EL AMOR
// =========================================================================
function initLenguajeManifestAndLove() {
  const topicBtns = document.querySelectorAll('.m-topic-btn');
  const quoteBox = document.getElementById('manifesto-dynamic-quote');
  const manifestMorning = document.getElementById('manifest-morning');
  const manifestNight = document.getElementById('manifest-night');

  manifestMorning.checked = !!state.subChecks.manifestMorning;
  manifestNight.checked = !!state.subChecks.manifestNight;

  const currentTopic = state.activeManifestTopic || 'poder';
  quoteBox.textContent = MANIFESTO_TOPICS[currentTopic] || MANIFESTO_TOPICS.poder;

  topicBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.mtopic === currentTopic);
    btn.addEventListener('click', () => {
      const topic = btn.dataset.mtopic;
      state.activeManifestTopic = topic;
      topicBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      quoteBox.textContent = MANIFESTO_TOPICS[topic] || MANIFESTO_TOPICS.poder;
      saveState();
    });
  });

  const updateManifestCheck = () => {
    state.subChecks.manifestMorning = manifestMorning.checked;
    state.subChecks.manifestNight = manifestNight.checked;
    if ((manifestMorning.checked || manifestNight.checked) && !state.checks.len_manifestar) {
      state.checks.len_manifestar = true;
      syncCheckboxesFromState();
      awardXPAndCoins(25, 10, '✨ ¡Manifiesto declarado al Universo!');
      return;
    }
    saveState();
    updateBatteryUI();
  };
  manifestMorning.addEventListener('change', updateManifestCheck);
  manifestNight.addEventListener('change', updateManifestCheck);

  const loveSelect = document.getElementById('select-love-action');
  const loveNote = document.getElementById('input-len-amor-note');
  if (loveSelect) {
    loveSelect.value = state.inputs.lenAmorAction || 'espejo';
    loveSelect.addEventListener('change', () => {
      state.inputs.lenAmorAction = loveSelect.value;
      state.checks.len_amor = true;
      syncCheckboxesFromState();
      awardXPAndCoins(25, 10, '❤️ ¡Acto de amor propio registrado!');
    });
  }
  if (loveNote) {
    loveNote.addEventListener('change', () => {
      if (loveNote.value.trim().length > 2 && !state.checks.len_amor) {
        state.checks.len_amor = true;
        syncCheckboxesFromState();
        awardXPAndCoins(25, 10, '❤️ ¡Frase de amor propio guardada!');
      }
    });
  }
}

// =========================================================================
// 8. TEMPORIZADORES EXACTOS: POSICIÓN DE PODER Y MEDITACIÓN 4S-4S-4S REAL
// =========================================================================
function initTimersAndExactMeditation() {
  const btnPower = document.getElementById('btn-power-pose-timer');
  const timeSpan = document.getElementById('power-pose-time');
  let remainingPower = 120;

  btnPower.addEventListener('click', () => {
    if (powerPoseInterval) {
      clearInterval(powerPoseInterval);
      powerPoseInterval = null;
      remainingPower = 120;
      timeSpan.textContent = '02:00';
      return;
    }
    showToast('🦸‍♂️ ¡Pecho orgulloso, hombros atrás, mirada arriba y sonrisa de poder!');
    powerPoseInterval = setInterval(() => {
      remainingPower--;
      const m = String(Math.floor(remainingPower / 60)).padStart(2, '0');
      const s = String(remainingPower % 60).padStart(2, '0');
      timeSpan.textContent = `${m}:${s}`;
      if (remainingPower <= 0) {
        clearInterval(powerPoseInterval);
        powerPoseInterval = null;
        remainingPower = 120;
        timeSpan.textContent = '02:00';
        state.checks.fis_postura = true;
        syncCheckboxesFromState();
        launchConfetti();
        awardXPAndCoins(50, 20, '🔥 ¡2 minutos de Posición de Poder logrados!');
      }
    }, 1000);
  });

  // Meditación Guiada con Cuenta Regresiva Exacta Segundo por Segundo (4s Inhala, 4s Sostén, 4s Exhala)
  const btnBreathe = document.getElementById('btn-breathe-guide');
  const breatheStatus = document.getElementById('breathe-status');
  const breatheSecondsNum = document.getElementById('breathe-seconds-num');
  const breatheCircle = document.getElementById('breathe-visual-circle');
  const breatheCycleCounter = document.getElementById('breathe-cycle-counter');

  btnBreathe.addEventListener('click', () => {
    if (breatheInterval) {
      clearInterval(breatheInterval);
      breatheInterval = null;
      breatheCircle.className = 'breathe-circle';
      breatheSecondsNum.textContent = '4s';
      breatheStatus.textContent = 'Inhala (4s) • Sostén (4s) • Exhala (4s)';
      breatheCycleCounter.textContent = '5 ciclos de respiración consciente (1 min exacto)';
      btnBreathe.textContent = '🧘‍♂️ Iniciar Meditación Guiada (60s)';
      return;
    }

    const phases = [
      { name: '🌬️ Inhala paz profundamente...', cls: 'inhale' },
      { name: '✨ Sostén el aire en calma...', cls: 'hold' },
      { name: '🕊️ Exhala y suelta el estrés...', cls: 'exhale' }
    ];

    let currentPhaseIdx = 0;
    let secLeftInPhase = 4;
    let completedCycles = 0;
    const totalCycles = 5;

    const renderTick = () => {
      const phase = phases[currentPhaseIdx];
      breatheCircle.className = `breathe-circle ${phase.cls}`;
      breatheSecondsNum.textContent = `${secLeftInPhase}s`;
      breatheStatus.textContent = `${phase.name} (${secLeftInPhase}s)`;
      breatheCycleCounter.textContent = `Ciclo ${completedCycles + 1} de ${totalCycles}`;
      btnBreathe.textContent = '⏹️ Detener Meditación';
    };

    renderTick();

    breatheInterval = setInterval(() => {
      secLeftInPhase--;
      if (secLeftInPhase <= 0) {
        currentPhaseIdx++;
        if (currentPhaseIdx >= phases.length) {
          currentPhaseIdx = 0;
          completedCycles++;
          if (completedCycles >= totalCycles) {
            clearInterval(breatheInterval);
            breatheInterval = null;
            breatheCircle.className = 'breathe-circle';
            breatheSecondsNum.textContent = '✓';
            breatheStatus.textContent = '¡Mente en calma y corazón en paz!';
            breatheCycleCounter.textContent = 'Meditación de 1 minuto completada ✓';
            btnBreathe.textContent = '🧘‍♂️ Volver a Meditar (60s)';
            state.checks.len_meditar = true;
            syncCheckboxesFromState();
            launchConfetti();
            awardXPAndCoins(50, 20, '🧘‍♂️ ¡Meditación de 60s completada!');
            return;
          }
        }
        secLeftInPhase = 4;
      }
      renderTick();
    }, 1000);
  });

  const btnNextHabit = document.getElementById('btn-next-happiness-habit');
  const habitBox = document.getElementById('suggested-habit-text');
  btnNextHabit.addEventListener('click', () => {
    currentHabitIndex = (currentHabitIndex + 1) % HAPPINESS_HABITS_POOL.length;
    habitBox.innerHTML = `💡 <strong>Recomendación de hoy:</strong> ${HAPPINESS_HABITS_POOL[currentHabitIndex]}`;
  });
}

function bindTextInput(elementId, stateKey) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.value = state.inputs[stateKey] ?? '';
  el.addEventListener('input', () => {
    state.inputs[stateKey] = el.value;
    saveState();
  });
}

function bindGoalSlider(sliderId, labelId, stateKey) {
  const slider = document.getElementById(sliderId);
  const label = document.getElementById(labelId);
  if (!slider || !label) return;
  slider.value = state.inputs[stateKey] ?? 0;
  label.textContent = `${slider.value}%`;

  slider.addEventListener('input', () => {
    state.inputs[stateKey] = Number(slider.value);
    label.textContent = `${slider.value}%`;
    state.checks.enf_objetivos = true;
    syncCheckboxesFromState();
    saveState();
    updateBatteryUI();
    if (Number(slider.value) === 100) {
      launchConfetti();
      awardXPAndCoins(60, 25, '🏆 ¡Objetivo al 100% desbloqueado!');
    }
  });
}

function syncCheckboxesFromState() {
  document.querySelectorAll('.pillar-check').forEach((cb) => {
    const id = cb.dataset.id;
    cb.checked = !!state.checks[id];
  });
  syncScheduleClones();
}

function updateScheduleCounters() {
  const blocks = [
    { selector: '.schedule-morning input[type="checkbox"]', labelId: 'sched-prog-morning' },
    { selector: '.schedule-day input[type="checkbox"]', labelId: 'sched-prog-day' },
    { selector: '.schedule-afternoon input[type="checkbox"]', labelId: 'sched-prog-afternoon' },
    { selector: '.schedule-night input[type="checkbox"]', labelId: 'sched-prog-night' }
  ];
  blocks.forEach((b) => {
    const inputs = document.querySelectorAll(b.selector);
    const checked = Array.from(inputs).filter((i) => i.checked).length;
    const label = document.getElementById(b.labelId);
    if (label) label.textContent = `${checked}/${inputs.length} listos`;
  });
}

function syncScheduleClones() {
  document.querySelectorAll('.sync-pillar-check').forEach((clone) => {
    const orig = document.querySelector(`.pillar-check[data-id="${clone.dataset.targetId}"]`);
    if (orig) clone.checked = orig.checked;
  });
  document.querySelectorAll('.sync-habit7-check').forEach((clone) => {
    const orig = document.querySelector(`.habit7-check[data-h="${clone.dataset.targetH}"]`);
    if (orig) clone.checked = orig.checked;
  });
  updateScheduleCounters();
}

function initScheduleModeSync() {
  const modeBtns = document.querySelectorAll('.mode-switch-btn');
  const pillarsGrid = document.querySelector('.pillars-three-columns');
  const mobileSwitcher = document.querySelector('.mobile-pillars-switcher');
  const scheduleGrid = document.getElementById('schedule-four-blocks');

  if (!pillarsGrid || !scheduleGrid) return;

  function setViewMode(mode) {
    modeBtns.forEach((btn) => btn.classList.toggle('active', btn.dataset.viewmode === mode));
    if (mode === 'schedule') {
      pillarsGrid.classList.add('hidden');
      if (mobileSwitcher) mobileSwitcher.classList.add('hidden');
      scheduleGrid.classList.remove('hidden');
    } else {
      scheduleGrid.classList.add('hidden');
      pillarsGrid.classList.remove('hidden');
      if (mobileSwitcher) mobileSwitcher.classList.remove('hidden');
    }
    localStorage.setItem('mr_muevase_view_mode', mode);
  }

  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => setViewMode(btn.dataset.viewmode));
  });

  // Sincronización bidireccional (Horario <-> Pilares) disparando los eventos de XP de app.js
  document.querySelectorAll('.sync-pillar-check').forEach((clone) => {
    clone.addEventListener('change', () => {
      const orig = document.querySelector(`.pillar-check[data-id="${clone.dataset.targetId}"]`);
      if (orig && orig.checked !== clone.checked) {
        orig.checked = clone.checked;
        orig.dispatchEvent(new Event('change', { bubbles: true }));
      }
      updateScheduleCounters();
    });
  });

  document.querySelectorAll('.sync-habit7-check').forEach((clone) => {
    clone.addEventListener('change', () => {
      const orig = document.querySelector(`.habit7-check[data-h="${clone.dataset.targetH}"]`);
      if (orig && orig.checked !== clone.checked) {
        orig.checked = clone.checked;
        orig.dispatchEvent(new Event('change', { bubbles: true }));
      }
      updateScheduleCounters();
    });
  });

  document.querySelectorAll('.pillar-check, .habit7-check').forEach((orig) => {
    orig.addEventListener('change', syncScheduleClones);
  });

  syncScheduleClones();
  const savedMode = localStorage.getItem('mr_muevase_view_mode');
  if (savedMode) setViewMode(savedMode);
}

function updateBatteryUI() {
  const fisIds = ['fis_postura', 'fis_rutina_yt', 'fis_movimiento', 'fis_neat', 'fis_extra'];
  const enfIds = ['enf_objetivos', 'enf_foto_paciencia', 'enf_impulso', 'enf_terminacion', 'enf_reflexion', 'enf_celebracion'];
  const lenIds = ['len_meditar', 'len_alimentos', 'len_habitos_felicidad', 'len_manifestar', 'len_gratitud', 'len_amor', 'len_sueno'];

  const fisScore = fisIds.filter((id) => state.checks[id]).length;
  const enfScore = enfIds.filter((id) => state.checks[id]).length;
  const lenScore = lenIds.filter((id) => state.checks[id]).length;

  const totalDone = fisScore + enfScore + lenScore;
  const totalPossible = fisIds.length + enfIds.length + lenIds.length; // 18
  const pct = Math.round((totalDone / totalPossible) * 100);

  document.getElementById('score-fisiologia').textContent = `${fisScore}/${fisIds.length}`;
  document.getElementById('score-enfoque').textContent = `${enfScore}/${enfIds.length}`;
  document.getElementById('score-lenguaje').textContent = `${lenScore}/${lenIds.length}`;

  document.getElementById('pill-prog-fis').textContent = `${fisScore}/${fisIds.length} listos`;
  document.getElementById('pill-prog-enf').textContent = `${enfScore}/${enfIds.length} listos`;
  document.getElementById('pill-prog-len').textContent = `${lenScore}/${lenIds.length} listos`;

  const missionCounter = document.getElementById('total-checks-done-label');
  if (missionCounter) missionCounter.textContent = `${totalDone} de ${totalPossible}`;

  // Actualizar HUD Superior (XP y Monedas)
  const hudXp = document.getElementById('hud-xp-value');
  const hudCoins = document.getElementById('hud-coins-value');
  if (hudXp) hudXp.textContent = Number(state.xp || 0).toLocaleString('es-MX');
  if (hudCoins) hudCoins.textContent = Number(state.coins || 0).toLocaleString('es-MX');

  // Actualizar Avatar Evolucionable y Nivel RPG
  const xp = state.xp || 0;
  const levelBadge = document.getElementById('user-level-badge');
  const avatarEmoji = document.getElementById('hero-avatar-emoji');
  const levelChip = document.getElementById('hero-level-chip');
  const statusMsg = document.getElementById('hero-status-msg');
  const xpFill = document.getElementById('xp-bar-fill');
  const xpNextLabel = document.getElementById('xp-next-level-text');

  if (xp >= 1500) {
    if (levelBadge) levelBadge.textContent = '👑 Nivel 4: Leyenda Mr. Muévase';
    if (avatarEmoji) avatarEmoji.textContent = '🦸‍♂️';
    if (levelChip) levelChip.textContent = 'NIVEL 4';
    if (xpFill) xpFill.style.width = '100%';
    if (xpNextLabel) xpNextLabel.textContent = '¡Nivel Máximo Alcanzado!';
  } else if (xp >= 800) {
    if (levelBadge) levelBadge.textContent = '⚡ Nivel 3: Guerrero de Disciplina';
    if (avatarEmoji) avatarEmoji.textContent = '🦸‍♂️';
    if (levelChip) levelChip.textContent = 'NIVEL 3';
    if (xpFill) xpFill.style.width = `${Math.min(100, ((xp - 800) / 700) * 100)}%`;
    if (xpNextLabel) xpNextLabel.textContent = `${xp} / 1,500 XP para Nivel 4`;
  } else if (xp >= 300) {
    if (levelBadge) levelBadge.textContent = '🔥 Nivel 2: Rompedor de Patrones';
    if (avatarEmoji) avatarEmoji.textContent = '🏃‍♂️';
    if (levelChip) levelChip.textContent = 'NIVEL 2';
    if (xpFill) xpFill.style.width = `${Math.min(100, ((xp - 300) / 500) * 100)}%`;
    if (xpNextLabel) xpNextLabel.textContent = `${xp} / 800 XP para Nivel 3`;
  } else {
    if (levelBadge) levelBadge.textContent = '🌱 Nivel 1: Aprendiz en Movimiento';
    if (avatarEmoji) avatarEmoji.textContent = pct >= 50 ? '🏃‍♂️' : '🚶‍♂️';
    if (levelChip) levelChip.textContent = 'NIVEL 1';
    if (xpFill) xpFill.style.width = `${Math.min(100, (xp / 300) * 100)}%`;
    if (xpNextLabel) xpNextLabel.textContent = `${xp} / 300 XP para Nivel 2`;
  }

  if (statusMsg) {
    if (pct >= 75) {
      statusMsg.textContent = '🔥 ¡Tu Avatar está en modo Super-Héroe con la Pila en Verde!';
    } else if (pct >= 35) {
      statusMsg.textContent = '⚡ ¡Tu Avatar tomó impulso! Sigue marcando misiones para llegar a Verde.';
    } else {
      statusMsg.textContent = '💡 Marca checks en tus 3 Pilares para darle energía a tu Avatar hoy.';
    }
  }

  // Actualizar Batalla contra el Jefe del Día (HP baja conforme sube pct)
  const boss = DAILY_BOSSES[state.bossIndex || 0] || DAILY_BOSSES[0];
  const bossHp = Math.max(0, 100 - pct);
  const bossBox = document.getElementById('rpg-boss-box');
  const bossEmojiEl = document.getElementById('boss-emoji');
  const bossNameEl = document.getElementById('boss-name-title');
  const bossTauntEl = document.getElementById('boss-taunt-text');
  const bossHpFill = document.getElementById('boss-hp-fill');
  const bossHpLabel = document.getElementById('boss-hp-label');

  if (bossHpFill) bossHpFill.style.width = `${bossHp}%`;

  if (bossHp <= 20) {
    if (bossBox) bossBox.classList.add('boss-defeated');
    if (bossEmojiEl) bossEmojiEl.textContent = '🏳️';
    if (bossNameEl) bossNameEl.textContent = `¡${boss.name} DERROTADO HOY!`;
    if (bossTauntEl) bossTauntEl.textContent = '“¡Tu disciplina, enfoque y amor propio me vencieron por completo hoy!”';
    if (bossHpLabel) bossHpLabel.textContent = `🏆 ¡VICTORIA DEL DÍA! (HP del Jefe: ${bossHp}%)`;
  } else {
    if (bossBox) bossBox.classList.remove('boss-defeated');
    if (bossEmojiEl) bossEmojiEl.textContent = boss.emoji;
    if (bossNameEl) bossNameEl.textContent = boss.name;
    if (bossTauntEl) bossTauntEl.textContent = boss.taunt;
    if (bossHpLabel) bossHpLabel.textContent = `HP del Jefe: ${bossHp}% (Haz checks para derrotarlo)`;
  }

  document.getElementById('bar-fisiologia').style.width = `${(fisScore / fisIds.length) * 100}%`;
  document.getElementById('bar-enfoque').style.width = `${(enfScore / enfIds.length) * 100}%`;
  document.getElementById('bar-lenguaje').style.width = `${(lenScore / lenIds.length) * 100}%`;

  updateMasterButtonState('fisiologia', fisScore === fisIds.length);
  updateMasterButtonState('enfoque', enfScore === enfIds.length);
  updateMasterButtonState('lenguaje', lenScore === lenIds.length);

  // Actualizar las 9 celdas de la Pila (R R R | A A A | V V V)
  const activeCellsCount = Math.min(9, Math.ceil((pct / 100) * 9));
  const cells = document.querySelectorAll('#battery-cells-container .battery-cell');
  cells.forEach((cell, idx) => {
    cell.classList.toggle('active', idx < activeCellsCount || (pct > 0 && idx === 0));
  });

  const pctText = document.getElementById('battery-percent-text');
  const statusPill = document.getElementById('battery-status-pill');
  const lowBanner = document.getElementById('low-battery-banner');

  pctText.textContent = `${pct}%`;

  if (pct < 35) {
    statusPill.className = 'pill-tag tag-red';
    statusPill.textContent = '🔴 ¡PON CUIDADO! PILA BAJA';
    pctText.style.color = '#e63946';
    if (state.reminderEnabled) lowBanner.classList.remove('hidden');
  } else if (pct < 75) {
    statusPill.className = 'pill-tag tag-yellow';
    statusPill.textContent = '🟡 A LA MITAD — ¡SIGUE AVANZANDO!';
    pctText.style.color = '#d97706';
    lowBanner.classList.add('hidden');
  } else {
    statusPill.className = 'pill-tag tag-green';
    statusPill.textContent = '🟢 ¡PILA LLENA! FELICIDAD = PROGRESO';
    pctText.style.color = '#10b981';
    lowBanner.classList.add('hidden');
  }
}

function updateMasterButtonState(pillar, isComplete) {
  const btn = document.querySelector(`.btn-pillar-master-check[data-master-pillar="${pillar}"]`);
  if (!btn) return;
  btn.classList.toggle('completed', isComplete);
  btn.textContent = isComplete
    ? `✅ COMBO ${pillar.toUpperCase()} COMPLETADO HOY`
    : `☑️ COMPLETAR COMBO ${pillar.toUpperCase()} — Alimentar Pila`;
}

// =========================================================================
// 9. CONFIGURADOR NEAT DE PASOS DIARIOS (3K, 5K, 10K) Y ESCALERAS
// =========================================================================
function initNEATSteps() {
  const goalPills = document.querySelectorAll('.step-pill');
  const slider = document.getElementById('steps-slider');
  const currentLabel = document.getElementById('current-steps-label');
  const goalLabel = document.getElementById('goal-steps-label');
  const stairsLabel = document.getElementById('stairs-count');
  const btnStairs = document.getElementById('btn-add-stairs');

  const renderSteps = () => {
    slider.max = state.stepsGoal;
    slider.value = Math.min(state.currentSteps, state.stepsGoal);
    currentLabel.textContent = Number(state.currentSteps).toLocaleString('es-MX');
    goalLabel.textContent = Number(state.stepsGoal).toLocaleString('es-MX');
    stairsLabel.textContent = state.stairsCount || 0;

    goalPills.forEach((p) => {
      p.classList.toggle('active', Number(p.dataset.goal) === Number(state.stepsGoal));
    });

    if (state.currentSteps >= state.stepsGoal && !state.checks.fis_neat) {
      state.checks.fis_neat = true;
      syncCheckboxesFromState();
      launchConfetti();
      awardXPAndCoins(40, 20, '👟 ¡Meta de pasos diarios cumplida!');
    }
  };

  renderSteps();

  goalPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const val = pill.dataset.goal;
      if (val === 'custom') {
        const customVal = prompt(
          'Escribe tu nueva meta diaria de pasos cuando te sientas listo (ej. 4000, 7500, 12000):',
          state.stepsGoal
        );
        const parsed = parseInt(customVal, 10);
        if (!isNaN(parsed) && parsed >= 500) {
          state.stepsGoal = parsed;
        }
      } else {
        state.stepsGoal = Number(val);
      }
      saveState();
      renderSteps();
      showToast(`👟 Meta de pasos configurada en ${state.stepsGoal.toLocaleString('es-MX')} pasos diarios.`);
    });
  });

  slider.addEventListener('input', () => {
    state.currentSteps = Number(slider.value);
    saveState();
    renderSteps();
  });

  document.querySelectorAll('[data-add-steps]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const add = Number(btn.dataset.addSteps);
      state.currentSteps = Math.min(state.stepsGoal + 5000, (state.currentSteps || 0) + add);
      saveState();
      renderSteps();
      awardXPAndCoins(10, 5, `👟 +${add} pasos sumados a tu NEAT`);
    });
  });

  btnStairs.addEventListener('click', () => {
    state.stairsCount = (state.stairsCount || 0) + 1;
    state.currentSteps = (state.currentSteps || 0) + 150;
    state.checks.fis_neat = true;
    syncCheckboxesFromState();
    renderSteps();
    awardXPAndCoins(20, 10, '🪜 ¡Subiste escaleras! NEAT activado');
  });
}

// =========================================================================
// 10. APARTADO DE BLOG & COMUNIDAD MR. MUÉVASE
// =========================================================================
function initBlog() {
  const form = document.getElementById('blog-post-form');
  const imageInput = document.getElementById('post-image-input');
  const imageNameLabel = document.getElementById('post-image-preview-name');
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  let activeCategory = 'all';

  imageInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      pendingBlogImageData = ev.target.result;
      imageNameLabel.textContent = `✅ Foto lista: ${file.name}`;
    };
    reader.readAsDataURL(file);
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderBlogFeed(activeCategory);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('post-title').value.trim();
    const category = document.getElementById('post-category').value;
    const milestone = document.getElementById('post-milestone').value.trim();
    const content = document.getElementById('post-content').value.trim();

    if (!title || !content) return;

    const authorName = state.user?.name || 'Miembro Mr. Muévase';
    const authorProfile = state.user?.profile || 'Comunidad Feliz';

    const newPost = {
      id: 'post-' + Date.now(),
      author: authorName,
      profileTag: authorProfile,
      category,
      milestone: milestone || '⚡ Felicidad = Progreso',
      title,
      content,
      date: 'Justo ahora',
      featured: false,
      image: pendingBlogImageData || '',
      reactions: { fire: 1, heart: 1, clap: 1 },
      comments: []
    };

    state.blogPosts.unshift(newPost);
    pendingBlogImageData = '';
    imageNameLabel.textContent = '';
    form.reset();
    renderBlogFeed(activeCategory);
    launchConfetti();
    awardXPAndCoins(50, 25, '🌎 ¡Avance publicado en el Blog de la Comunidad!');
  });

  renderBlogFeed(activeCategory);
}

function renderBlogFeed(filterCategory = 'all') {
  const feedEl = document.getElementById('blog-feed-list');
  const countBadge = document.getElementById('blog-count-badge');
  const totalCountEl = document.getElementById('community-posts-count');

  countBadge.textContent = state.blogPosts.length;
  totalCountEl.textContent = state.blogPosts.length;

  const filtered =
    filterCategory === 'all'
      ? state.blogPosts
      : state.blogPosts.filter((p) => p.category === filterCategory);

  feedEl.innerHTML = '';

  filtered.forEach((post) => {
    const card = document.createElement('article');
    card.className = `blog-post-card ${post.featured ? 'featured-founder' : ''}`;

    const initials = post.author
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const commentsHtml = (post.comments || [])
      .map(
        (c) =>
          `<div class="comment-item"><strong>${escapeHtml(c.author)}:</strong> ${escapeHtml(c.text)}</div>`
      )
      .join('');

    card.innerHTML = `
      <div class="post-meta-top">
        <div class="post-author-info">
          <div class="author-avatar">${initials}</div>
          <div>
            <div class="author-name">${escapeHtml(post.author)}</div>
            <div class="author-sub">${escapeHtml(post.profileTag)} • ${escapeHtml(post.date)}</div>
          </div>
        </div>
        <div class="post-badges">
          <span class="pill-tag tag-green">${escapeHtml(post.milestone)}</span>
          <span class="pill-tag tag-turquoise">${escapeHtml(post.category)}</span>
        </div>
      </div>

      <h3 class="post-title">${escapeHtml(post.title)}</h3>
      <p class="post-body">${escapeHtml(post.content)}</p>
      ${
        post.image
          ? `<div class="post-image-wrap"><img src="${post.image}" alt="Foto de avance" /></div>`
          : ''
      }

      <div class="post-actions-bar">
        <button type="button" class="btn-reaction" data-react="fire" data-id="${post.id}">
          🔥 ¡Muévase! (${post.reactions.fire})
        </button>
        <button type="button" class="btn-reaction" data-react="heart" data-id="${post.id}">
          ❤️ Amor (${post.reactions.heart})
        </button>
        <button type="button" class="btn-reaction" data-react="clap" data-id="${post.id}">
          👏 Orgullo (${post.reactions.clap})
        </button>
      </div>

      <div class="comments-section">
        <div class="comments-list">${commentsHtml}</div>
        <form class="comment-form" data-post-id="${post.id}">
          <input type="text" placeholder="Escribe un mensaje de ánimo para ${escapeHtml(post.author)}..." required />
          <button type="submit" class="btn-secondary-sm">Comentar (+10 XP)</button>
        </form>
      </div>
    `;

    feedEl.appendChild(card);
  });

  feedEl.querySelectorAll('.btn-reaction').forEach((btn) => {
    btn.addEventListener('click', () => {
      const postId = btn.dataset.id;
      const reactType = btn.dataset.react;
      const post = state.blogPosts.find((p) => p.id === postId);
      if (post) {
        post.reactions[reactType] = (post.reactions[reactType] || 0) + 1;
        awardXPAndCoins(5, 2);
        renderBlogFeed(filterCategory);
      }
    });
  });

  feedEl.querySelectorAll('.comment-form').forEach((cForm) => {
    cForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const postId = cForm.dataset.postId;
      const input = cForm.querySelector('input');
      const text = input.value.trim();
      if (!text) return;

      const post = state.blogPosts.find((p) => p.id === postId);
      if (post) {
        post.comments.push({
          author: state.user?.name || 'Miembro Mr. Muévase',
          text
        });
        renderBlogFeed(filterCategory);
        awardXPAndCoins(10, 5, '💬 ¡Apoyaste a un miembro de la comunidad!');
      }
    });
  });
}

// =========================================================================
// 11. INVENTARIO DE FIN DE SEMANA E HISTORIAL DIARIO
// =========================================================================
function initHistoryAndInventory() {
  const invForm = document.getElementById('weekend-inventory-form');
  const btnSaveSnapshot = document.getElementById('btn-save-day-snapshot');

  invForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const wins = document.getElementById('inv-wins').value.trim();
    const improve = document.getElementById('inv-improve').value.trim();
    const weightNote = document.getElementById('inv-weight-note').value.trim();

    if (!wins && !improve) return;

    state.weekendInventories.unshift({
      date: new Date().toLocaleDateString('es-MX', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      wins: wins || 'Seguí adelante con paciencia.',
      improve: improve || 'Mantener mis pasos diarios.',
      weightNote: weightNote || 'Progreso constante'
    });

    invForm.reset();
    renderHistoryLists();
    launchConfetti();
    awardXPAndCoins(100, 40, '📅 ¡Inventario de Fin de Semana completado!');
  });

  btnSaveSnapshot.addEventListener('click', () => {
    const totalDone = Object.values(state.checks).filter(Boolean).length;
    const pct = Math.round((totalDone / 18) * 100);
    const reflexion = state.inputs.enfReflexion || 'Avancé con disciplina en mis 3 pilares.';

    state.dailySnapshots.unshift({
      date: new Date().toLocaleDateString('es-MX', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      }),
      pct,
      steps: state.currentSteps,
      reflexion
    });

    state.streak = (state.streak || 1) + 1;
    updateUserHeaderUI();
    renderHistoryLists();
    launchConfetti();
    awardXPAndCoins(50, 25, `🔥 ¡Partida del día guardada! Racha: ${state.streak} días`);
  });

  renderHistoryLists();
}

function renderHistoryLists() {
  const invList = document.getElementById('saved-inventories-list');
  const snapList = document.getElementById('daily-snapshots-list');

  invList.innerHTML = state.weekendInventories
    .map(
      (item) => `
      <div class="history-item-card">
        <strong>📅 ${escapeHtml(item.date)}</strong>
        <p style="margin-top:0.35rem"><strong>✅ Lo que hice bien:</strong> ${escapeHtml(item.wins)}</p>
        <p><strong>🌱 Para mejorar:</strong> ${escapeHtml(item.improve)}</p>
        <p style="color:var(--brand-orange);margin-top:0.25rem"><strong>🏆 Resultado:</strong> ${escapeHtml(item.weightNote)}</p>
      </div>
    `
    )
    .join('');

  if (!state.dailySnapshots.length) {
    snapList.innerHTML = `<div class="history-item-card" style="color:var(--text-muted)">Aún no has guardado cierres diarios. Haz clic en "Guardar Partida del Día de Hoy" para registrar tu Pila de Felicidad.</div>`;
  } else {
    snapList.innerHTML = state.dailySnapshots
      .map(
        (s) => `
        <div class="history-item-card">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <strong>🗓️ ${escapeHtml(s.date)}</strong>
            <span class="pill-tag ${s.pct >= 75 ? 'tag-green' : s.pct >= 35 ? 'tag-yellow' : 'tag-red'}">Pila: ${s.pct}%</span>
          </div>
          <p style="margin-top:0.35rem">👟 <strong>Pasos NEAT:</strong> ${Number(s.steps).toLocaleString('es-MX')} pasos</p>
          <p>📝 <strong>Hoja Final del Día:</strong> ${escapeHtml(s.reflexion)}</p>
        </div>
      `
      )
      .join('');
  }
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

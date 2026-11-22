// Audio Synthesizer for friendly toddler clicks & chimes
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function playSfx(type) {
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'pop') {
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'fanfare') {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.frequency.setValueAtTime(freq, now + (i * 0.08));
        g.gain.setValueAtTime(0.15, now + (i * 0.08));
        g.gain.exponentialRampToValueAtTime(0.01, now + (i * 0.08) + 0.25);
        o.start(now + (i * 0.08));
        o.stop(now + (i * 0.08) + 0.25);
      });
    }
  } catch (e) {
    // Audio fallback if muted or blocked
  }
}

// Navigation Screen Transition Controller
const screens = {
  welcome: document.getElementById('welcomeScreen'),
  greeting: document.getElementById('greetingScreen'),
  menu: document.getElementById('menuScreen')
};

function showScreen(screenKey) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  if (screens[screenKey]) {
    screens[screenKey].classList.add('active');
    playSfx('pop');
  }
}

// Button Click Listeners
document.getElementById('startPlayingBtn').addEventListener('click', () => {
  showScreen('greeting');
});

document.getElementById('letsGoBtn').addEventListener('click', () => {
  showScreen('menu');
  playSfx('fanfare');
});

document.getElementById('homeHeaderBtn').addEventListener('click', () => {
  showScreen('welcome');
});

// Parent Gate Implementation (Grown-ups Only Barrier)
const parentGateModal = document.getElementById('parentGateModal');
const gateEquation = document.getElementById('gateEquation');
const gateAnswerInput = document.getElementById('gateAnswerInput');
let expectedAnswer = 12;

function openParentGate() {
  const n1 = Math.floor(Math.random() * 5) + 3;
  const n2 = Math.floor(Math.random() * 5) + 2;
  expectedAnswer = n1 * n2;
  gateEquation.textContent = `${n1} × ${n2} = ?`;
  gateAnswerInput.value = '';
  parentGateModal.classList.add('show');
  playSfx('pop');
  gateAnswerInput.focus();
}

function closeParentGate() {
  parentGateModal.classList.remove('show');
}

document.getElementById('parentGateBtn').addEventListener('click', openParentGate);
document.getElementById('unlockFamilyBtn').addEventListener('click', openParentGate);
document.getElementById('gateCancelBtn').addEventListener('click', closeParentGate);

document.getElementById('gateVerifyBtn').addEventListener('click', () => {
  const val = parseInt(gateAnswerInput.value.trim(), 10);
  if (val === expectedAnswer) {
    closeParentGate();
    playSfx('fanfare');
    alert('✨ Verified Parent! Navigating to Family Entitlement & GCash Payment Portal (Phase 5/6).');
  } else {
    alert('Oops! Incorrect answer. Grown-ups only!');
    openParentGate();
  }
});

// Game Catalog Preview Controller
const previewModal = document.getElementById('previewModal');
const previewIcon = document.getElementById('previewIcon');
const previewTitle = document.getElementById('previewTitle');
const previewDesc = document.getElementById('previewDesc');

const gameData = {
  math: {
    icon: '👾',
    title: 'Monster Math Crunch',
    desc: 'Fun addition & subtraction feeding game. Feed the hungry monster yummy treats by choosing the right answer!'
  },
  spelling: {
    icon: '🧙‍♂️',
    title: 'Word Wizard Spelling',
    desc: 'Phonics and early vocabulary spelling with playful letter tiles and friendly emoji clues.'
  },
  memory: {
    icon: '🦁',
    title: 'Animal Memory Match',
    desc: 'Low-stress concentration game finding matching animal pairs with fun sounds and celebratory stars.'
  },
  shapes: {
    icon: '🎨',
    title: 'Color & Shape Safari',
    desc: 'Identify vibrant colors and friendly geometric shapes across jungle-themed puzzle boards.'
  },
  puzzles: {
    icon: '🧩',
    title: 'Puzzle Paradise',
    desc: 'Jigsaw and shape snapping puzzles that develop cognitive motor skills and visual reasoning.'
  },
  abc: {
    icon: '📖',
    title: 'ABC Adventure',
    desc: 'Explore the alphabet with stroke guidance, animal associations, and auditory phonics.'
  }
};

document.querySelectorAll('.game-arcade-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.game;
    const item = gameData[key];
    if (item) {
      previewIcon.textContent = item.icon;
      previewTitle.textContent = item.title;
      previewDesc.textContent = item.desc;
      previewModal.classList.add('show');
      playSfx('pop');
    }
  });
});

document.getElementById('closePreviewBtn').addEventListener('click', () => {
  previewModal.classList.remove('show');
});

document.getElementById('previewUnlockBtn').addEventListener('click', () => {
  previewModal.classList.remove('show');
  openParentGate();
});

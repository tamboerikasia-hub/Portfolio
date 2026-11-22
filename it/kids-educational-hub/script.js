// State Management
let stars = parseInt(localStorage.getItem('kiddie_stars')) || 0;
let soundEnabled = true;

// Web Audio API Synthesizer for friendly game beeps
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function playSound(type) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === 'correct') {
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.setValueAtTime(180, now + 0.15);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'pop') {
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    // Audio context fallback if blocked by browser
  }
}

// UI Elements
const globalStarsEl = document.getElementById('globalStars');
const soundToggle = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');

function updateStarsDisplay() {
  globalStarsEl.textContent = stars;
  localStorage.setItem('kiddie_stars', stars);
}
updateStarsDisplay();

soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundIcon.className = soundEnabled ? 'bi bi-volume-up-fill' : 'bi bi-volume-mute-fill';
});

// Tab Navigation
const tabButtons = document.querySelectorAll('.tab-btn');
const gameViews = document.querySelectorAll('.game-view');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    gameViews.forEach(v => v.classList.remove('active'));

    btn.classList.add('active');
    const targetGame = btn.dataset.game;
    document.getElementById(`${targetGame}Game`).classList.add('active');
    playSound('pop');
  });
});

/* ===================================================
   GAME 1: MONSTER MATH CRUNCH
   =================================================== */
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const operatorEl = document.getElementById('operator');
const mathOptionsEl = document.getElementById('mathOptions');
const mathFeedbackEl = document.getElementById('mathFeedback');
const monsterEmojiEl = document.getElementById('monsterEmoji');

let currentMathAnswer = 0;

function nextMathProblem() {
  const isAddition = Math.random() > 0.3;
  let n1, n2, ans;

  if (isAddition) {
    n1 = Math.floor(Math.random() * 8) + 1;
    n2 = Math.floor(Math.random() * 7) + 1;
    ans = n1 + n2;
    operatorEl.textContent = '+';
  } else {
    n1 = Math.floor(Math.random() * 9) + 4;
    n2 = Math.floor(Math.random() * (n1 - 1)) + 1;
    ans = n1 - n2;
    operatorEl.textContent = '-';
  }

  num1El.textContent = n1;
  num2El.textContent = n2;
  currentMathAnswer = ans;

  // Generate 4 options (1 correct, 3 wrong)
  const choices = new Set([ans]);
  while (choices.size < 4) {
    const wrong = ans + (Math.floor(Math.random() * 7) - 3);
    if (wrong >= 0 && wrong !== ans) {
      choices.add(wrong);
    }
  }

  const shuffled = Array.from(choices).sort(() => Math.random() - 0.5);

  mathOptionsEl.innerHTML = '';
  shuffled.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => checkMathChoice(btn, opt));
    mathOptionsEl.appendChild(btn);
  });
}

function checkMathChoice(btn, selected) {
  if (selected === currentMathAnswer) {
    btn.classList.add('correct');
    monsterEmojiEl.textContent = '🥳';
    monsterEmojiEl.classList.add('happy');
    mathFeedbackEl.textContent = '⭐ Awesome job! Monster got yummy food!';
    mathFeedbackEl.style.color = '#16a34a';
    playSound('correct');
    stars += 1;
    updateStarsDisplay();

    // Disable all options momentarily
    document.querySelectorAll('.option-btn').forEach(b => b.style.pointerEvents = 'none');
    setTimeout(() => {
      monsterEmojiEl.textContent = '😋';
      monsterEmojiEl.classList.remove('happy');
      mathFeedbackEl.textContent = 'Pick your answer!';
      mathFeedbackEl.style.color = '#475569';
      nextMathProblem();
    }, 1200);
  } else {
    btn.classList.add('wrong');
    monsterEmojiEl.textContent = '😮';
    mathFeedbackEl.textContent = 'Oops! Try counting again!';
    mathFeedbackEl.style.color = '#dc2626';
    playSound('wrong');
    setTimeout(() => {
      btn.classList.remove('wrong');
      monsterEmojiEl.textContent = '😋';
    }, 700);
  }
}

nextMathProblem();

/* ===================================================
   GAME 2: WORD WIZARD SPELLING
   =================================================== */
const wordBank = [
  { word: 'CAT', emoji: '🐱', hint: 'A soft pet that purrs!' },
  { word: 'DOG', emoji: '🐶', hint: 'Man\'s playful best friend!' },
  { word: 'SUN', emoji: '☀️', hint: 'Bright and warm in the sky!' },
  { word: 'STAR', emoji: '⭐', hint: 'Twinkles in the night!' },
  { word: 'FISH', emoji: '🐟', hint: 'Swims in the deep blue ocean!' },
  { word: 'BIRD', emoji: '🐦', hint: 'Has feathers and can fly!' },
  { word: 'LION', emoji: '🦁', hint: 'The brave king of the jungle!' }
];

let currentWordIndex = 0;
let currentWord = '';
let currentSpelled = [];

const wordEmojiEl = document.getElementById('wordEmoji');
const wordHintEl = document.getElementById('wordHint');
const answerSlotsEl = document.getElementById('answerSlots');
const letterPoolEl = document.getElementById('letterPool');
const spellingFeedbackEl = document.getElementById('spellingFeedback');
const resetWordBtn = document.getElementById('resetWordBtn');

function loadSpellingWord() {
  const item = wordBank[currentWordIndex % wordBank.length];
  currentWord = item.word;
  currentSpelled = [];

  wordEmojiEl.textContent = item.emoji;
  wordHintEl.textContent = item.hint;
  spellingFeedbackEl.textContent = 'Tap a letter tile to spell!';
  spellingFeedbackEl.style.color = '#475569';

  // Render Empty Slots
  answerSlotsEl.innerHTML = '';
  for (let i = 0; i < currentWord.length; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    answerSlotsEl.appendChild(slot);
  }

  // Scramble letters
  const scrambled = currentWord.split('').sort(() => Math.random() - 0.5);
  letterPoolEl.innerHTML = '';
  scrambled.forEach((letter, idx) => {
    const tile = document.createElement('button');
    tile.className = 'letter-tile';
    tile.textContent = letter;
    tile.dataset.id = idx;
    tile.addEventListener('click', () => pickLetter(tile, letter));
    letterPoolEl.appendChild(tile);
  });
}

function pickLetter(tile, letter) {
  if (currentSpelled.length >= currentWord.length) return;

  playSound('pop');
  tile.classList.add('used');
  currentSpelled.push({ letter, tileRef: tile });

  // Update Slots
  const slots = answerSlotsEl.querySelectorAll('.slot');
  slots[currentSpelled.length - 1].textContent = letter;
  slots[currentSpelled.length - 1].classList.add('filled');

  // Check if complete
  if (currentSpelled.length === currentWord.length) {
    const typed = currentSpelled.map(s => s.letter).join('');
    if (typed === currentWord) {
      playSound('correct');
      spellingFeedbackEl.textContent = `🌟 Hooray! You spelled ${currentWord}!`;
      spellingFeedbackEl.style.color = '#16a34a';
      stars += 2;
      updateStarsDisplay();

      setTimeout(() => {
        currentWordIndex++;
        loadSpellingWord();
      }, 1500);
    } else {
      playSound('wrong');
      spellingFeedbackEl.textContent = 'Not quite! Let\'s try resetting.';
      spellingFeedbackEl.style.color = '#dc2626';
    }
  }
}

resetWordBtn.addEventListener('click', () => {
  playSound('pop');
  loadSpellingWord();
});

loadSpellingWord();

/* ===================================================
   GAME 3: ANIMAL MEMORY MATCH
   =================================================== */
const memoryCardsData = ['🐼', '🐸', '🦊', '🦄', '🐝', '🐙'];
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let isLocked = false;

const memoryGridEl = document.getElementById('memoryGrid');
const memoryFeedbackEl = document.getElementById('memoryFeedback');
const restartMemoryBtn = document.getElementById('restartMemoryBtn');

function initMemoryGame() {
  memoryCards = [...memoryCardsData, ...memoryCardsData].sort(() => Math.random() - 0.5);
  memoryGridEl.innerHTML = '';
  flippedCards = [];
  matchedPairs = 0;
  isLocked = false;
  memoryFeedbackEl.textContent = 'Tap any card to begin!';
  memoryFeedbackEl.style.color = '#475569';

  memoryCards.forEach((icon, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card hidden-face';
    card.dataset.icon = icon;
    card.dataset.index = index;
    card.textContent = icon;

    card.addEventListener('click', () => handleCardFlip(card));
    memoryGridEl.appendChild(card);
  });
}

function handleCardFlip(card) {
  if (isLocked || card.classList.contains('matched') || !card.classList.contains('hidden-face')) {
    return;
  }

  playSound('pop');
  card.classList.remove('hidden-face');
  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkMemoryMatch();
  }
}

function checkMemoryMatch() {
  isLocked = true;
  const [c1, c2] = flippedCards;

  if (c1.dataset.icon === c2.dataset.icon) {
    playSound('correct');
    c1.classList.add('matched');
    c2.classList.add('matched');
    matchedPairs++;
    stars += 1;
    updateStarsDisplay();
    flippedCards = [];
    isLocked = false;

    if (matchedPairs === memoryCardsData.length) {
      memoryFeedbackEl.textContent = '🎉 You found all the matching animals! Super star!';
      memoryFeedbackEl.style.color = '#16a34a';
      stars += 3;
      updateStarsDisplay();
    }
  } else {
    playSound('wrong');
    setTimeout(() => {
      c1.classList.add('hidden-face');
      c1.classList.remove('flipped');
      c2.classList.add('hidden-face');
      c2.classList.remove('flipped');
      flippedCards = [];
      isLocked = false;
    }, 900);
  }
}

restartMemoryBtn.addEventListener('click', () => {
  playSound('pop');
  initMemoryGame();
});

initMemoryGame();

// js/main.js — SPA Router (inline views, CSS show/hide)
import { WORDS_DATA } from './data/words.js';
import { initCards, renderCards } from './ui/cards.js';
import { initFlashcards, startFlashcards, exitFlashcards } from './modules/flashcards.js';
import { initQuiz, openQuizSelection, exitQuiz } from './modules/quiz.js';
import { initReading } from './modules/reading.js';
import { initFormulas } from './ui/formulas.js';
import { initScratchpad } from './ui/scratchpad.js';
import { initPomodoro } from './ui/pomodoro.js';
import { initDailyQuiz } from './modules/dailyQuiz.js';
import { updateStreak } from './data/state.js';

// ─── Init all modules once ─────────────────────────
initCards();
renderCards(WORDS_DATA);
initFlashcards();
initQuiz();
initReading();
initFormulas();
initScratchpad();
initPomodoro();
initDailyQuiz();

// Init daily streak UI
updateStreak();


// ─── SPA View Routing ──────────────────────────────
function showView(viewId) {
  // Hide all views
  document.querySelectorAll('.page-view').forEach(v => {
    v.classList.remove('active-view');
  });

  // Show target
  const target = document.getElementById(viewId);
  if (target) {
    void target.offsetWidth; // force reflow for animations
    target.classList.add('active-view');
  }

  // Update body data attribute (for flashcard CSS isolation)
  document.body.setAttribute('data-active-view', viewId);

  // Update nav highlight
  document.querySelectorAll('.nav-links a[data-view]').forEach(a => {
    a.classList.toggle('nav-active', a.getAttribute('data-view') === viewId);
  });

  // Scroll to top
  window.scrollTo(0, 0);
}

// Expose globally so quiz/flashcard modules can navigate
window.showView = showView;

// ─── Event Delegation (nav links, logo, buttons) ───
document.body.addEventListener('click', (e) => {
  // Nav links & any [data-view] buttons
  const navLink = e.target.closest('[data-view]');
  if (navLink) {
    e.preventDefault();
    const viewId = navLink.getAttribute('data-view');
    if (viewId === 'quiz-section') {
      showView(viewId);
      openQuizSelection();
    } else {
      showView(viewId);
    }
    return;
  }

  // Logo → Home
  if (e.target.closest('#navLogo')) {
    showView('view-home');
    return;
  }

  // Study Mode button
  if (e.target.closest('#startStudyBtn')) {
    startFlashcards();
    return;
  }

  // Quit flashcard
  if (e.target.closest('#quitFlashcard')) {
    exitFlashcards();
    return;
  }

  // Quit quiz dynamically (prevents DOM detach issues)
  if (e.target.closest('#quitQuiz')) {
    exitQuiz();
    return;
  }
});

// ─── Scroll / Progress / Back-to-top ────────────────
const progressBar = document.getElementById('progressBar');
const backToTop = document.getElementById('backToTop');
const navbar = document.querySelector('.navbar');
let ticking = false;

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (progressBar) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
    if (backToTop) backToTop.classList.toggle('visible', y > 400);
    if (navbar) navbar.classList.toggle('scrolled', y > 10);
    ticking = false;
  });
});

if (backToTop) {
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─── Search ─────────────────────────────────────────
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  let t;
  searchInput.addEventListener('input', () => {
    clearTimeout(t);
    const term = searchInput.value.toLowerCase();
    t = setTimeout(() => {
      document.querySelectorAll('.card').forEach(c => {
        const d = (c.getAttribute('data-search') || '').toLowerCase();
        c.style.display = (!term || d.includes(term)) ? '' : 'none';
      });
    }, 150);
  });
}

// ─── Keyboard Shortcuts ─────────────────────────────
document.addEventListener('keydown', (e) => {
  if (searchInput && ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput))) {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === 'Escape') {
    const modal = document.getElementById('wordModal');
    if (modal && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    } else if (searchInput && searchInput === document.activeElement) {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.blur();
    }
  }
});

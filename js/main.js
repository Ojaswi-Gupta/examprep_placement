// js/main.js — SPA Router (inline views, CSS show/hide)
import { WORDS_DATA } from './data/words.js?v=2';
import { initCards, renderCards } from './ui/cards.js?v=2';
import { initFlashcards, startFlashcards, exitFlashcards } from './modules/flashcards.js?v=2';
import { initQuiz, openQuizSelection, exitQuiz } from './modules/quiz.js?v=2';
import { initReading } from './modules/reading.js?v=2';
import { initFormulas } from './ui/formulas.js?v=2';
import { initInterview } from './ui/interview.js?v=2';
import { initProgramming } from './ui/programming.js?v=1';
import { initScratchpad } from './ui/scratchpad.js?v=2';
import { initPomodoro } from './ui/pomodoro.js?v=2';
import { initDailyQuiz } from './modules/dailyQuiz.js?v=2';
import { updateStreak } from './data/state.js?v=2';

// ─── Init all modules once ─────────────────────────
const safeInit = (name, fn) => {
  try { fn(); } catch (e) { console.error(`Module crash [${name}]:`, e); alert(`Crash in ${name}: ${e.message}`); }
};

safeInit('initCards', () => initCards());
safeInit('renderCards', () => renderCards(WORDS_DATA));
safeInit('initFlashcards', () => initFlashcards());
safeInit('initQuiz', () => initQuiz());
safeInit('initReading', () => initReading());
safeInit('initFormulas', () => initFormulas());
safeInit('initInterview', () => initInterview());
safeInit('initProgramming', () => initProgramming());
safeInit('initScratchpad', () => initScratchpad());
safeInit('initPomodoro', () => initPomodoro());
safeInit('initDailyQuiz', () => initDailyQuiz());
safeInit('updateStreak', () => updateStreak());


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

  // Highlight parent dropdown label when child is active
  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    const hasActive = dd.querySelector('a.nav-active');
    dd.classList.toggle('dropdown-active', !!hasActive);
  });

  // Update URL hash without jumping
  if (window.location.hash !== '#' + viewId) {
    window.history.pushState(null, null, '#' + viewId);
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

// Read hash on initial load
const initialHash = window.location.hash.replace('#', '');
if (initialHash && document.getElementById(initialHash)) {
  showView(initialHash);
  if (initialHash === 'quiz-section') openQuizSelection();
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    showView(hash);
  } else {
    showView('view-home');
  }
});

// Expose globally so quiz/flashcard modules can navigate
window.showView = showView;

// ─── Event Delegation (nav links, logo, buttons) ───
document.body.addEventListener('click', (e) => {
  try {
    // Mobile dropdown toggle
    const dropdownLabel = e.target.closest('.nav-dropdown-label');
    if (dropdownLabel) {
      const dropdown = dropdownLabel.closest('.nav-dropdown');
      const wasOpen = dropdown.classList.contains('touch-open');
      document.querySelectorAll('.nav-dropdown').forEach(dd => dd.classList.remove('touch-open'));
      if (!wasOpen) dropdown.classList.add('touch-open');
      return;
    }

    // Nav links & any [data-view] buttons
    const navLink = e.target.closest('[data-view]');
    if (navLink) {
      document.querySelectorAll('.nav-dropdown').forEach(dd => dd.classList.remove('touch-open'));
      e.preventDefault();
      const viewId = navLink.getAttribute('data-view');
      
      // Fallback debug alert if element not found
      if (!document.getElementById(viewId)) {
        alert("Debug: View ID '" + viewId + "' not found in DOM!");
      }
      
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
  } catch (err) {
    alert("Routing Error: " + err.message + "\n\n" + err.stack);
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

// js/main.js
import { WORDS_DATA } from './data/words.js';
import { initCards, renderCards } from './ui/cards.js';
import { initFlashcards, startFlashcards, exitFlashcards } from './modules/flashcards.js';
import { initQuiz, openQuizSelection } from './modules/quiz.js';
import { initReading } from './modules/reading.js';

document.addEventListener('DOMContentLoaded', () => {
  // 2. Init UI
  initCards();
  renderCards(WORDS_DATA);

  // 3. Init Modules
  initFlashcards();
  initQuiz();
  initReading();

  // 4. Global Nav & Buttons
  const startQuizBtn = document.getElementById('startQuizBtn');
  const navQuiz = document.getElementById('navQuiz');
  const startStudyBtn = document.getElementById('startStudyBtn');
  const quitFlashcard = document.getElementById('quitFlashcard');
  const searchInput = document.getElementById('searchInput');

  if (startQuizBtn) startQuizBtn.addEventListener('click', openQuizSelection);
  if (navQuiz) navQuiz.addEventListener('click', (e) => { e.preventDefault(); openQuizSelection(); });
  if (startStudyBtn) startStudyBtn.addEventListener('click', startFlashcards);
  if (quitFlashcard) quitFlashcard.addEventListener('click', exitFlashcards);

  // Global Scroll & Nav Logic
  const progressBar = document.getElementById('progressBar');
  const backToTop = document.getElementById('backToTop');
  const navbar = document.querySelector('.navbar');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (progressBar) {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
        }
        if (backToTop) {
          backToTop.classList.toggle('visible', window.scrollY > 400);
        }
        if (navbar) {
          navbar.classList.toggle('scrolled', window.scrollY > 10);
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Smooth scroll nav links
  const mainSections = document.querySelectorAll('.navbar, .hero, .stats, .search-section, .vocabulary-section, .reading-section, .about-section, .footer');
  const quizSection = document.getElementById('quiz-section');
  const readingSection = document.getElementById('reading-section');
  const flashcardSection = document.getElementById('flashcard-section');

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#quiz-section') return; // Handled by navQuiz

      if (id === '#reading-section' && readingSection) {
        e.preventDefault();
        mainSections.forEach(s => s.style.display = '');
        if(quizSection) quizSection.style.display = 'none';
        if(flashcardSection) flashcardSection.style.display = 'none';
        readingSection.style.display = 'block';
        readingSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // Search logic
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const term = e.target.value.toLowerCase();
      
      searchTimeout = setTimeout(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
          const data = card.getAttribute('data-search') || '';
          card.style.display = (term === '' || data.toLowerCase().includes(term)) ? '' : 'none';
        });
      }, 150);
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (!searchInput) return;
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') {
      const wordModal = document.getElementById('wordModal');
      if (wordModal && wordModal.classList.contains('active')) {
        wordModal.classList.remove('active');
        document.body.style.overflow = '';
      } else if (searchInput === document.activeElement) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.blur();
      }
    }
  });

});

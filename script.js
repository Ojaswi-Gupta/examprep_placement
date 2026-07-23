// ============================================
// TCS NQT Prep Hub - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Elements ---
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');
  const grid = document.getElementById('vocabGrid');
  const progressBar = document.getElementById('progressBar');
  const backToTop = document.getElementById('backToTop');
  const navbar = document.querySelector('.navbar');

  // --- Scroll Progress Bar ---
  function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = progress + '%';
  }

  // --- Back to Top Button ---
  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  // --- Navbar style on scroll ---
  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // --- Scroll Events (throttled) ---
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateProgressBar();
        toggleBackToTop();
        updateNavbar();
        ticking = false;
      });
      ticking = true;
    }
  });

  // --- Back to Top Click ---
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Search Functionality ---
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        performSearch(e.target.value);
      }, 150);
    });
  }

  function performSearch(query) {
    const searchTerm = query.toLowerCase().trim();
    let count = 0;

    cards.forEach((card) => {
      const searchData = card.getAttribute('data-search');
      if (!searchData) return;

      if (searchTerm === '' || searchData.toLowerCase().includes(searchTerm)) {
        card.style.display = '';
        card.style.animation = 'fadeSlideUp 0.4s ease forwards';
        count++;
      } else {
        card.style.display = 'none';
        card.style.animation = '';
      }
    });
  }

  // --- Intersection Observer for Card Animations ---
  const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Small stagger based on position in viewport
        const rect = entry.boundingClientRect;
        const delay = Math.min((rect.left / window.innerWidth) * 150, 200);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    card.classList.add('animate-on-scroll');
    observer.observe(card);
  });

  // --- Smooth scroll for nav links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Keyboard shortcut: Ctrl+K or / to focus search ---
  document.addEventListener('keydown', (e) => {
    if (!searchInput) return;
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      performSearch('');
      searchInput.blur();
    }
  });

  // --- Initialize ---
  updateProgressBar();
  toggleBackToTop();
  updateNavbar();
});

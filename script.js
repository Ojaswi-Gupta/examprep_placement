// ============================================
// Placement Prep - Main JavaScript
// Quiz, Modal, Search, Scroll
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Elements ---
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');
  const progressBar = document.getElementById('progressBar');
  const backToTop = document.getElementById('backToTop');
  const navbar = document.querySelector('.navbar');

  // Quiz elements
  const startQuizBtn = document.getElementById('startQuizBtn');
  const navQuiz = document.getElementById('navQuiz');
  const quizSection = document.getElementById('quiz-section');
  const quizModeSelection = document.getElementById('quizModeSelection');
  const quizPlayArea = document.getElementById('quizPlayArea');
  const quizTimer = document.getElementById('quizTimer');
  const quizCard = document.getElementById('quizCard');
  const quizQuestion = document.getElementById('quizQuestion');
  const quizOptions = document.getElementById('quizOptions');
  const quizFeedback = document.getElementById('quizFeedback');
  const quizCounter = document.getElementById('quizCounter');
  const quizProgressBar = document.getElementById('quizProgressBar');
  const submitAnswer = document.getElementById('submitAnswer');
  const nextQuestion = document.getElementById('nextQuestion');
  const quitQuiz = document.getElementById('quitQuiz');
  const quizScore = document.getElementById('quizScore');

  // Flashcard elements
  const startStudyBtn = document.getElementById('startStudyBtn');
  const flashcardSection = document.getElementById('flashcard-section');
  const quitFlashcard = document.getElementById('quitFlashcard');
  const flashcard = document.getElementById('flashcard');
  const fcPrev = document.getElementById('fcPrev');
  const fcNext = document.getElementById('fcNext');
  const fcCounter = document.getElementById('fcCounter');
  const fcWord = document.getElementById('fcWord');
  const fcPos = document.getElementById('fcPos');
  const fcSimple = document.getElementById('fcSimple');
  const fcDefinition = document.getElementById('fcDefinition');
  const fcExample = document.getElementById('fcExample');

  // Modal elements
  const wordModal = document.getElementById('wordModal');
  const modalClose = document.getElementById('modalClose');
  const modalWord = document.getElementById('modalWord');
  const modalPos = document.getElementById('modalPos');
  const modalSimple = document.getElementById('modalSimple');
  const modalDefinition = document.getElementById('modalDefinition');
  const modalExample = document.getElementById('modalExample');
  const modalSynonyms = document.getElementById('modalSynonyms');
  const modalExtraExamples = document.getElementById('modalExtraExamples');
  const modalTip = document.getElementById('modalTip');
  const modalAntonyms = document.getElementById('modalAntonyms');

  // Main page sections to hide/show
  const mainSections = document.querySelectorAll('.hero, .stats, .search-section, .vocabulary-section, .about-section, .footer');

  // =====================
  // SCROLL & NAVIGATION
  // =====================
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
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#quiz-section') {
        e.preventDefault();
        startQuiz();
        return;
      }
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // =====================
  // SEARCH
  // =====================
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const term = e.target.value.toLowerCase().trim();
        cards.forEach(card => {
          const data = card.getAttribute('data-search') || '';
          card.style.display = (term === '' || data.toLowerCase().includes(term)) ? '' : 'none';
        });
      }, 150);
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Search focus
    if (!searchInput) return;
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
      e.preventDefault();
      searchInput.focus();
    }
    // Escape to close
    if (e.key === 'Escape') {
      if (wordModal && wordModal.classList.contains('active')) {
        closeModal();
      } else if (searchInput === document.activeElement) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.blur();
      }
    }
    
    // Flashcard navigation
    if (flashcardSection && flashcardSection.style.display === 'block') {
      if (e.code === 'Space') {
        e.preventDefault();
        flashcard.classList.toggle('flipped');
      } else if (e.key === 'ArrowRight') {
        nextFlashcard();
      } else if (e.key === 'ArrowLeft') {
        prevFlashcard();
      }
    }
  });

  // =====================
  // INTERSECTION OBSERVER (card fade-in)
  // =====================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

  cards.forEach(card => {
    card.classList.add('animate-on-scroll');
    observer.observe(card);
  });

  // =====================
  // INJECT ANTONYMS INTO CARDS
  // =====================
  function injectAntonyms() {
    if (typeof WORDS_DATA === 'undefined') return;
    cards.forEach(card => {
      const wordEl = card.querySelector('.word');
      if (!wordEl) return;
      const data = findWordData(wordEl.textContent.trim());
      if (!data || !data.antonyms || !data.antonyms.length) return;

      const row = document.createElement('div');
      row.className = 'card-antonyms';
      const label = document.createElement('span');
      label.className = 'card-antonyms-label';
      label.textContent = 'Opp:';
      row.appendChild(label);
      data.antonyms.forEach(a => {
        const tag = document.createElement('span');
        tag.className = 'card-antonym-tag';
        tag.textContent = a;
        row.appendChild(tag);
      });
      card.appendChild(row);
    });
  }

  // =====================
  // WORD DETAIL MODAL
  // =====================
  function findWordData(wordName) {
    if (typeof WORDS_DATA === 'undefined') return null;
    return WORDS_DATA.find(w => w.word.toLowerCase() === wordName.toLowerCase()) || null;
  }

  function openModal(wordName) {
    const data = findWordData(wordName);
    if (!data || !wordModal) return;

    modalPos.textContent = data.partOfSpeech || '';
    modalWord.textContent = data.word;
    modalSimple.textContent = data.simple;
    modalDefinition.textContent = data.definition;
    modalExample.textContent = '"' + data.example + '"';

    // Synonyms
    modalSynonyms.innerHTML = '';
    if (data.synonyms && data.synonyms.length) {
      data.synonyms.forEach(s => {
        const tag = document.createElement('span');
        tag.className = 'modal-synonym-tag';
        tag.textContent = s;
        modalSynonyms.appendChild(tag);
      });
    }

    // Antonyms
    modalAntonyms.innerHTML = '';
    if (data.antonyms && data.antonyms.length) {
      data.antonyms.forEach(a => {
        const tag = document.createElement('span');
        tag.className = 'modal-antonym-tag';
        tag.textContent = a;
        modalAntonyms.appendChild(tag);
      });
    }

    // Additional examples
    modalExtraExamples.innerHTML = '';
    if (data.additionalExamples && data.additionalExamples.length) {
      data.additionalExamples.forEach(ex => {
        const p = document.createElement('p');
        p.className = 'modal-extra-example';
        p.textContent = '"' + ex + '"';
        modalExtraExamples.appendChild(p);
      });
    }

    // Tip
    modalTip.textContent = data.usageTip || '';

    wordModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!wordModal) return;
    wordModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Click on card → open modal
  cards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const wordEl = card.querySelector('.word');
      if (wordEl) openModal(wordEl.textContent.trim());
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (wordModal) {
    wordModal.addEventListener('click', (e) => {
      if (e.target === wordModal) closeModal();
    });
  }

  // =====================
  // FLASHCARD MODE
  // =====================
  let fcIndex = 0;
  let fcWords = [];

  function startFlashcards() {
    if (typeof WORDS_DATA === 'undefined' || !WORDS_DATA.length) return;
    mainSections.forEach(s => s.style.display = 'none');
    flashcardSection.style.display = 'block';
    
    fcWords = shuffleArray(WORDS_DATA); // Or keep ordered: [...WORDS_DATA]
    fcIndex = 0;
    renderFlashcard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderFlashcard() {
    const w = fcWords[fcIndex];
    flashcard.classList.remove('flipped');
    fcCounter.textContent = `${fcIndex + 1} / ${fcWords.length}`;
    fcWord.textContent = w.word;
    fcPos.textContent = w.partOfSpeech;
    fcSimple.textContent = w.simple;
    fcDefinition.textContent = w.definition;
    fcExample.textContent = '"' + w.example + '"';
    
    // Synonyms
    fcSynonyms.innerHTML = '';
    if (w.synonyms && w.synonyms.length) {
      w.synonyms.forEach(s => {
        const tag = document.createElement('span');
        tag.className = 'fc-tag';
        tag.textContent = s;
        fcSynonyms.appendChild(tag);
      });
    }

    // Antonyms
    fcAntonyms.innerHTML = '';
    if (w.antonyms && w.antonyms.length) {
      w.antonyms.forEach(a => {
        const tag = document.createElement('span');
        tag.className = 'fc-tag ant';
        tag.textContent = a;
        fcAntonyms.appendChild(tag);
      });
    }

    // Tip
    fcTip.style.display = w.usageTip ? 'block' : 'none';
    fcTip.textContent = w.usageTip ? `💡 ${w.usageTip}` : '';
  }

  function nextFlashcard() {
    if (fcIndex < fcWords.length - 1) {
      fcIndex++;
      renderFlashcard();
    }
  }

  function prevFlashcard() {
    if (fcIndex > 0) {
      fcIndex--;
      renderFlashcard();
    }
  }

  if (startStudyBtn) startStudyBtn.addEventListener('click', startFlashcards);
  if (quitFlashcard) quitFlashcard.addEventListener('click', () => {
    flashcardSection.style.display = 'none';
    mainSections.forEach(s => s.style.display = '');
  });
  if (flashcard) flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
  if (fcPrev) fcPrev.addEventListener('click', (e) => { e.stopPropagation(); prevFlashcard(); });
  if (fcNext) fcNext.addEventListener('click', (e) => { e.stopPropagation(); nextFlashcard(); });


  // =====================
  // QUIZ
  // =====================
  let quizWords = [];
  let currentQ = 0;
  let score = 0;
  let selectedOption = null;
  let answered = false;
  let currentQuizMode = 'full';
  let maxQuestions = 79;
  let timerInterval;
  let timeLeft = 60;

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function openQuizSelection() {
    if (typeof WORDS_DATA === 'undefined' || !WORDS_DATA.length) {
      alert('Word data not loaded yet.');
      return;
    }
    mainSections.forEach(s => s.style.display = 'none');
    quizSection.style.display = 'block';
    quizModeSelection.style.display = 'block';
    quizPlayArea.style.display = 'none';
    quizScore.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startQuiz(mode) {
    currentQuizMode = mode;
    quizModeSelection.style.display = 'none';
    quizPlayArea.style.display = 'block';
    quizScore.style.display = 'none';
    
    quizWords = shuffleArray(WORDS_DATA);
    
    if (mode === 'quick') {
      maxQuestions = 10;
      quizTimer.style.display = 'none';
    } else if (mode === 'time') {
      maxQuestions = 999; // Essentially endless until time runs out
      timeLeft = 60;
      quizTimer.style.display = 'block';
      quizTimer.textContent = timeLeft + 's';
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timeLeft--;
        quizTimer.textContent = timeLeft + 's';
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    } else if (mode === 'pressure') {
      maxQuestions = 20;
      quizTimer.style.display = 'block';
    } else {
      maxQuestions = quizWords.length;
      quizTimer.style.display = 'none';
    }

    currentQ = 0;
    score = 0;
    renderQuestion();
  }

  function exitQuiz() {
    clearInterval(timerInterval);
    quizSection.style.display = 'none';
    mainSections.forEach(s => s.style.display = '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderQuestion() {
    if (currentQ >= quizWords.length || currentQ >= maxQuestions) {
      showScore();
      return;
    }

    const word = quizWords[currentQ];
    selectedOption = null;
    answered = false;

    // Reset timer for pressure mode
    if (currentQuizMode === 'pressure') {
      clearInterval(timerInterval);
      timeLeft = 10;
      quizTimer.textContent = timeLeft + 's';
      timerInterval = setInterval(() => {
        timeLeft--;
        quizTimer.textContent = timeLeft + 's';
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          timeOutAnswer();
        }
      }, 1000);
    }

    // Update counter & progress
    const totalQ = (currentQuizMode === 'time') ? '∞' : Math.min(quizWords.length, maxQuestions);
    quizCounter.textContent = `Question ${currentQ + 1} of ${totalQ}`;
    
    let progress = 0;
    if (currentQuizMode !== 'time') {
      progress = (currentQ / Math.min(quizWords.length, maxQuestions)) * 100;
    }
    quizProgressBar.style.width = progress + '%';

    let questionText = "";
    let optionsAreWords = true;

    // 1. Determine possible question types for this word
    const qTypes = ['meaning', 'definition'];
    
    // Check for fill in the blanks
    const blanks = [];
    if (word.example) blanks.push(word.example);
    if (word.additionalExamples && word.additionalExamples.length) {
      blanks.push(...word.additionalExamples);
    }
    const validBlanks = blanks.map(ex => {
      const regex = new RegExp(word.word, "gi");
      const blanked = ex.replace(regex, "________");
      return { original: ex, blanked: blanked };
    }).filter(b => b.blanked !== b.original);

    if (validBlanks.length > 0) qTypes.push('fill-in-blank');
    if (word.synonyms && word.synonyms.length > 0) qTypes.push('synonym');
    if (word.antonyms && word.antonyms.length > 0) qTypes.push('antonym');

    // 2. Pick a random question type
    const qType = qTypes[Math.floor(Math.random() * qTypes.length)];

    if (qType === 'meaning') {
      questionText = `What does "${word.word}" mean?`;
      optionsAreWords = false; // Options will show the simple meaning
    } else if (qType === 'definition') {
      questionText = `Which word means:\n"${word.definition}"?`;
    } else if (qType === 'fill-in-blank') {
      const blankObj = validBlanks[Math.floor(Math.random() * validBlanks.length)];
      questionText = `Fill in the blank:\n"${blankObj.blanked}"`;
    } else if (qType === 'synonym') {
      const syn = word.synonyms[Math.floor(Math.random() * word.synonyms.length)];
      questionText = `Which of these words is a SYNONYM for "${syn}"?`;
    } else if (qType === 'antonym') {
      const ant = word.antonyms[Math.floor(Math.random() * word.antonyms.length)];
      questionText = `Which of these words is an ANTONYM for "${ant}"?`;
    }

    // Set Question text (using innerText to respect line breaks)
    quizQuestion.innerText = questionText;

    // Generate 3 wrong options (different words)
    const wrongPool = WORDS_DATA.filter(w => w.id !== word.id);
    const wrongOptions = shuffleArray(wrongPool).slice(0, 3);

    // Build options array: correct + 3 wrong, then shuffle
    const options = shuffleArray([
      { word: word.word, simple: word.simple, definition: word.definition, correct: true },
      ...wrongOptions.map(w => ({ word: w.word, simple: w.simple, definition: w.definition, correct: false }))
    ]);

    // Render options
    quizOptions.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    options.forEach((opt, i) => {
      const div = document.createElement('div');
      div.className = 'quiz-option';
      div.setAttribute('data-index', i);
      div.setAttribute('data-correct', opt.correct);
      div.setAttribute('data-word', opt.word);
      div.setAttribute('data-simple', opt.simple);
      div.setAttribute('data-definition', opt.definition);
      
      const optionDisplay = optionsAreWords ? opt.word : opt.simple;
      div.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${optionDisplay}</span>`;
      div.addEventListener('click', () => selectOption(div));
      quizOptions.appendChild(div);
    });

    // Reset buttons
    submitAnswer.style.display = '';
    submitAnswer.disabled = true;
    nextQuestion.style.display = 'none';
    quizFeedback.style.display = 'none';
    quizFeedback.innerHTML = '';
  }

  function selectOption(el) {
    if (answered) return;
    // Deselect all
    quizOptions.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    selectedOption = el;
    submitAnswer.disabled = false;
  }

  function timeOutAnswer() {
    if (answered) return;
    answered = true;
    clearInterval(timerInterval);
    
    // Mark correct/wrong but no selection made
    quizOptions.querySelectorAll('.quiz-option').forEach(o => {
      o.style.cursor = 'default';
      if (o.getAttribute('data-correct') === 'true') {
        o.classList.add('correct');
      }
    });

    displayFeedback("⏱️ Time's Up!");
  }

  function checkAnswer() {
    if (!selectedOption || answered) return;
    answered = true;
    clearInterval(timerInterval);

    const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
    if (isCorrect) score++;

    // Mark correct/wrong
    quizOptions.querySelectorAll('.quiz-option').forEach(o => {
      o.style.cursor = 'default';
      if (o.getAttribute('data-correct') === 'true') {
        o.classList.remove('selected');
        o.classList.add('correct');
      } else if (o === selectedOption && !isCorrect) {
        o.classList.remove('selected');
        o.classList.add('wrong');
      }
    });

    // Show feedback: meaning of each option word
    displayFeedback();
  }

  function displayFeedback(customTitle = '') {
    quizFeedback.innerHTML = '';
    
    if (customTitle) {
      const h = document.createElement('h4');
      h.textContent = customTitle;
      h.style.color = '#ef4444';
      h.style.marginBottom = '0.5rem';
      quizFeedback.appendChild(h);
    }
    
    quizOptions.querySelectorAll('.quiz-option').forEach(o => {
      const w = o.getAttribute('data-word');
      const s = o.getAttribute('data-simple');
      const d = o.getAttribute('data-definition');
      const item = document.createElement('div');
      item.className = 'quiz-feedback-item';
      item.innerHTML = `<strong>${w}</strong> <span class="meaning-tag">(${s})</span> — ${d}`;
      quizFeedback.appendChild(item);
    });
    quizFeedback.style.display = 'block';

    // Show next button
    submitAnswer.style.display = 'none';
    nextQuestion.style.display = '';
    // Pressure mode checks against maxQuestions
    const totalQ = (currentQuizMode === 'time') ? quizWords.length : Math.min(quizWords.length, maxQuestions);
    nextQuestion.textContent = currentQ < totalQ - 1 ? 'Next →' : 'See Results';
  }

  function showScore() {
    clearInterval(timerInterval);
    quizPlayArea.style.display = 'none';

    const attempted = currentQ + (answered ? 1 : 0);
    const finalScore = score;
    let pct = attempted > 0 ? Math.round((finalScore / attempted) * 100) : 0;
    
    // For quick/full quiz, base percentage on total. For time attack, base on attempted.
    if (currentQuizMode !== 'time' && maxQuestions > 0) {
      pct = Math.round((finalScore / maxQuestions) * 100);
    }

    let msg = '';
    if (currentQuizMode === 'time') {
      msg = `You answered ${finalScore} questions correctly in 60 seconds!`;
    } else {
      if (pct >= 90) msg = 'Outstanding! You really know these words.';
      else if (pct >= 70) msg = 'Great job! A few more to master.';
      else if (pct >= 50) msg = 'Good start. Keep revising!';
      else msg = 'Keep practicing — you\'ll get there!';
    }

    quizScore.innerHTML = `
      <h3>Quiz Complete</h3>
      <div class="score-number">${finalScore} <span style="font-size:1.5rem;color:var(--text-3)">/ ${currentQuizMode === 'time' ? attempted : maxQuestions}</span></div>
      <p>${msg}</p>
      <button class="quiz-btn" id="retakeQuiz">Choose Another Mode</button>
    `;
    quizScore.style.display = 'block';

    document.getElementById('retakeQuiz').addEventListener('click', () => {
      openQuizSelection();
    });
  }

  // =====================
  // INITIALIZE
  // =====================
  injectAntonyms();
  if (startQuizBtn) startQuizBtn.addEventListener('click', openQuizSelection);
  if (navQuiz) navQuiz.addEventListener('click', (e) => { e.preventDefault(); openQuizSelection(); });
  
  // Quiz mode buttons
  document.querySelectorAll('.quiz-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => startQuiz(btn.getAttribute('data-mode')));
  });

  if (submitAnswer) submitAnswer.addEventListener('click', checkAnswer);
  if (nextQuestion) nextQuestion.addEventListener('click', () => { currentQ++; renderQuestion(); });
  if (quitQuiz) quitQuiz.addEventListener('click', exitQuiz);
});

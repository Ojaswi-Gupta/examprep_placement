// js/modules/quiz.js
import { WORDS_DATA } from '../data/words.js';
import { STORIES_DATA } from '../data/stories.js';
import { masteryData, updateMastery, bookmarks } from '../data/state.js';
import { renderCards } from '../ui/cards.js';

let currentQuizMode = null;
let quizWords = [];
let currentQ = 0;
let score = 0;
let maxQuestions = 10;
let answered = false;
let selectedOption = null;
let timerInterval = null;
let timeLeft = 60;
let quizHistory = [];

export function initQuiz() {
  document.querySelectorAll('.quiz-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => startQuiz(btn.getAttribute('data-mode')));
  });
  
  const submitAnswer = document.getElementById('submitAnswer');
  const nextQuestion = document.getElementById('nextQuestion');
  const quitQuiz = document.getElementById('quitQuiz');
  const storySubmitAnswer = document.getElementById('storySubmitAnswer');
  const storyNextQuestion = document.getElementById('storyNextQuestion');
  
  if (submitAnswer) submitAnswer.addEventListener('click', checkAnswer);
  if (nextQuestion) nextQuestion.addEventListener('click', () => { currentQ++; renderQuestion(); });
  if (quitQuiz) quitQuiz.addEventListener('click', exitQuiz);
  
  if (storySubmitAnswer) storySubmitAnswer.addEventListener('click', checkStoryAnswer);
  if (storyNextQuestion) storyNextQuestion.addEventListener('click', showScore);
}

export function openQuizSelection() {
  if (!WORDS_DATA || !WORDS_DATA.length) return;
  const mainSections = document.querySelectorAll('.navbar, .hero, .stats, .search-section, .vocabulary-section, .reading-section, .about-section, .footer');
  mainSections.forEach(s => s.style.display = 'none');
  
  const quizSection = document.getElementById('quiz-section');
  const quizModeSelection = document.getElementById('quizModeSelection');
  const quizPlayArea = document.getElementById('quizPlayArea');
  const quizScore = document.getElementById('quizScore');
  
  if(quizSection) quizSection.style.display = 'block';
  if(quizModeSelection) quizModeSelection.style.display = 'block';
  if(quizPlayArea) quizPlayArea.style.display = 'none';
  if(quizScore) quizScore.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startQuiz(mode) {
  currentQuizMode = mode;
  
  document.getElementById('quizModeSelection').style.display = 'none';
  document.getElementById('quizPlayArea').style.display = 'block';
  if (document.getElementById('quizScore')) document.getElementById('quizScore').style.display = 'none';
  
  const submitAnswer = document.getElementById('submitAnswer');
  const nextQuestion = document.getElementById('nextQuestion');
  
  if(submitAnswer) {
    submitAnswer.style.display = 'inline-block';
    submitAnswer.disabled = true;
  }
  if(nextQuestion) nextQuestion.style.display = 'none';
  
  const quizFeedback = document.getElementById('quizFeedback');
  if(quizFeedback) quizFeedback.style.display = 'none';
  
  quizHistory = [];
  clearInterval(timerInterval);

  const standardQuizRow = document.getElementById('standardQuizRow');
  const storyQuizContainer = document.getElementById('storyQuizContainer');
  const quizCounter = document.getElementById('quizCounter');

  if (mode === 'story') {
    if(standardQuizRow) standardQuizRow.style.display = 'none';
    if(storyQuizContainer) storyQuizContainer.style.display = 'block';
    if(quizCounter) quizCounter.style.display = 'none';
    if(submitAnswer) submitAnswer.textContent = "Submit Story";
    startStoryQuiz();
    return;
  } else {
    if(standardQuizRow) standardQuizRow.style.display = 'flex';
    if(storyQuizContainer) storyQuizContainer.style.display = 'none';
    if(quizCounter) quizCounter.style.display = 'block';
    if(submitAnswer) submitAnswer.textContent = "Check Answer";
  }
  
  if (mode === 'srs') {
    const unmasteredWords = WORDS_DATA.filter(w => (masteryData[w.id] || 0) < 3);
    if (unmasteredWords.length === 0) {
      alert("You have mastered all the words! Amazing job. You can reset your data if you want to start over.");
      openQuizSelection();
      return;
    }
    unmasteredWords.sort((a, b) => (masteryData[a.id] || 0) - (masteryData[b.id] || 0));
    quizWords = shuffleArray(unmasteredWords.slice(0, 20));
    maxQuestions = quizWords.length;
    document.getElementById('quizTimerContainer').style.display = 'none';
  } else if (mode === 'bookmarks') {
    const bookmarkedWords = WORDS_DATA.filter(w => bookmarks.includes(w.id));
    if (bookmarkedWords.length === 0) {
      alert("You haven't bookmarked any words yet! Click the star on a vocabulary card to save it.");
      openQuizSelection();
      return;
    }
    quizWords = shuffleArray(bookmarkedWords);
  } else {
    quizWords = shuffleArray(WORDS_DATA);
  }
  
  const quizTimer = document.getElementById('quizTimerContainer');
  if (mode === 'quick') {
    maxQuestions = 10;
    if(quizTimer) quizTimer.style.display = 'none';
  } else if (mode === 'time') {
    maxQuestions = 999;
    timeLeft = 60;
    if(quizTimer) quizTimer.style.display = 'block';
    updateTimerUI(timeLeft, 60);
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerUI(timeLeft, 60);
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showScore();
      }
    }, 1000);
  } else if (mode === 'pressure') {
    maxQuestions = 20;
    if(quizTimer) quizTimer.style.display = 'block';
  } else if (mode === 'srs' || mode === 'bookmarks') {
    maxQuestions = Math.min(quizWords.length, 20);
    if(quizTimer) quizTimer.style.display = 'none';
  } else {
    maxQuestions = quizWords.length;
    if(quizTimer) quizTimer.style.display = 'none';
  }

  currentQ = 0;
  score = 0;
  renderQuestion();
}

function renderQuestion() {
  if (currentQ >= quizWords.length || currentQ >= maxQuestions) {
    showScore();
    return;
  }

  const word = quizWords[currentQ];
  selectedOption = null;
  answered = false;

  if (currentQuizMode === 'pressure') {
    clearInterval(timerInterval);
    timeLeft = 15;
    updateTimerUI(timeLeft, 15);
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerUI(timeLeft, 15);
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timeOutAnswer();
      }
    }, 1000);
  }

  const quizCounter = document.getElementById('quizCounter');
  const totalQ = (currentQuizMode === 'time') ? '∞' : Math.min(quizWords.length, maxQuestions);
  if(quizCounter) quizCounter.textContent = `Question ${currentQ + 1} of ${totalQ}`;
  
  let progress = 0;
  if (currentQuizMode !== 'time') {
    progress = (currentQ / Math.min(quizWords.length, maxQuestions)) * 100;
  }
  const quizProgressBar = document.getElementById('quizProgressBar');
  if(quizProgressBar) quizProgressBar.style.width = progress + '%';

  let questionText = "";
  let optionsAreWords = true;
  const qTypes = ['meaning', 'definition'];
  
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

  const qType = qTypes[Math.floor(Math.random() * qTypes.length)];

  if (qType === 'meaning') {
    questionText = `What does "${word.word}" mean?`;
    optionsAreWords = false;
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

  const quizQuestion = document.getElementById('quizQuestion');
  if(quizQuestion) quizQuestion.innerText = questionText;

  const wrongPool = WORDS_DATA.filter(w => w.id !== word.id);
  const wrongOptions = shuffleArray(wrongPool).slice(0, 3);
  const options = shuffleArray([
    { word: word.word, simple: word.simple, definition: word.definition, correct: true },
    ...wrongOptions.map(w => ({ word: w.word, simple: w.simple, definition: w.definition, correct: false }))
  ]);

  const quizOptions = document.getElementById('quizOptions');
  if(quizOptions) {
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
  }

  const submitAnswer = document.getElementById('submitAnswer');
  const nextQuestion = document.getElementById('nextQuestion');
  const quizFeedback = document.getElementById('quizFeedback');
  if(submitAnswer) {
    submitAnswer.style.display = '';
    submitAnswer.disabled = true;
  }
  if(nextQuestion) nextQuestion.style.display = 'none';
  if(quizFeedback) {
    quizFeedback.style.display = 'none';
    quizFeedback.innerHTML = '';
  }
}

function selectOption(el) {
  if (answered) return;
  const quizOptions = document.getElementById('quizOptions');
  if(quizOptions) quizOptions.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedOption = el;
  const submitAnswer = document.getElementById('submitAnswer');
  if(submitAnswer) submitAnswer.disabled = false;
}

function timeOutAnswer() {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  
  const quizOptions = document.getElementById('quizOptions');
  const quizQuestion = document.getElementById('quizQuestion');
  
  const correctOptionNode = Array.from(quizOptions.querySelectorAll('.quiz-option')).find(o => o.getAttribute('data-correct') === 'true');
  quizHistory.push({
    questionText: quizQuestion ? quizQuestion.innerText : '',
    selectedWord: 'No Answer',
    correctWord: correctOptionNode ? correctOptionNode.getAttribute('data-word') : '',
    correctMeaning: correctOptionNode ? correctOptionNode.getAttribute('data-simple') : '',
    isCorrect: false
  });
  
  if(quizOptions) {
    quizOptions.querySelectorAll('.quiz-option').forEach(o => {
      o.style.cursor = 'default';
      if (o.getAttribute('data-correct') === 'true') {
        o.classList.add('correct');
      }
    });
  }

  const immediateToggle = document.getElementById('immediateFeedbackToggle');
  if (immediateToggle && !immediateToggle.checked) {
    setTimeout(() => {
      currentQ++;
      renderQuestion();
    }, 300);
  } else {
    displayFeedback("⏱️ Time's Up!");
  }
}

function checkAnswer() {
  if (currentQuizMode === 'story') {
    checkStoryAnswer();
    return;
  }
  if (!selectedOption || answered) return;
  answered = true;
  
  if (currentQuizMode !== 'time') {
    clearInterval(timerInterval);
  }

  const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
  if (isCorrect) score++;
  
  const quizOptions = document.getElementById('quizOptions');
  const quizQuestion = document.getElementById('quizQuestion');
  
  const correctOptionNode = Array.from(quizOptions.querySelectorAll('.quiz-option')).find(o => o.getAttribute('data-correct') === 'true');
  quizHistory.push({
    questionText: quizQuestion ? quizQuestion.innerText : '',
    selectedWord: selectedOption.getAttribute('data-word'),
    correctWord: correctOptionNode ? correctOptionNode.getAttribute('data-word') : '',
    correctMeaning: correctOptionNode ? correctOptionNode.getAttribute('data-simple') : '',
    isCorrect: isCorrect
  });

  const currentWord = quizWords[currentQ];
  updateMastery(currentWord.id, isCorrect);
  
  // Update UI card dynamically if needed
  // Note: we can just re-render cards or selectively update in a real app.
  // For now, we will re-render all to reflect mastery.
  renderCards(WORDS_DATA);

  if(quizOptions) {
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
  }

  const immediateToggle = document.getElementById('immediateFeedbackToggle');
  if (immediateToggle && !immediateToggle.checked) {
    setTimeout(() => {
      currentQ++;
      renderQuestion();
    }, 300);
  } else {
    displayFeedback();
  }
}

function displayFeedback(customTitle) {
  const quizFeedback = document.getElementById('quizFeedback');
  const submitAnswer = document.getElementById('submitAnswer');
  const nextQuestion = document.getElementById('nextQuestion');
  
  if(!quizFeedback) return;
  
  const isCorrect = selectedOption && selectedOption.getAttribute('data-correct') === 'true';
  const correctOption = Array.from(document.getElementById('quizOptions').querySelectorAll('.quiz-option')).find(o => o.getAttribute('data-correct') === 'true');
  
  let titleHTML = customTitle ? `<h4>${customTitle}</h4>` : (isCorrect ? '<h4 style="color:var(--green)">Correct!</h4>' : '<h4 style="color:var(--red)">Incorrect</h4>');
  
  let detailsHTML = `<h5 style="margin-top:1rem; color:#cccccc; font-size:0.95rem;">Word Meanings:</h5><ul style="list-style:none; padding:0; margin-top:0.5rem;">`;
  
  const allOptions = Array.from(document.getElementById('quizOptions').querySelectorAll('.quiz-option'));
  allOptions.forEach(o => {
    const word = o.getAttribute('data-word');
    const simple = o.getAttribute('data-simple');
    detailsHTML += `<li style="margin-bottom:0.4rem; font-size:0.95rem; color:#ffffff;"><strong>${word}:</strong> ${simple}</li>`;
  });
  detailsHTML += `</ul>`;

  quizFeedback.innerHTML = titleHTML + detailsHTML;
  quizFeedback.style.display = 'block';
  
  if(submitAnswer) submitAnswer.style.display = 'none';
  if(nextQuestion) nextQuestion.style.display = 'inline-block';
}

function showScore() {
  const quizPlayArea = document.getElementById('quizPlayArea');
  const quizScore = document.getElementById('quizScore');
  const scoreText = document.getElementById('scoreText');
  const scoreCircle = document.getElementById('scoreCircle');
  
  clearInterval(timerInterval);
  if(quizPlayArea) quizPlayArea.style.display = 'none';
  if(quizScore) quizScore.style.display = 'block';

  let total = (currentQuizMode === 'time') ? currentQ : Math.min(quizWords.length, maxQuestions);
  if (currentQuizMode === 'story') {
    total = document.querySelectorAll('.blank-space').length;
  }
  
  const percentage = total === 0 ? 0 : Math.round((score / total) * 100);
  if(scoreText) scoreText.innerHTML = `${percentage}%<br><span style="font-size:1rem; font-weight:400; opacity:0.8;">${score} / ${total}</span>`;
  if(scoreCircle) scoreCircle.style.background = `conic-gradient(var(--green) ${percentage}%, var(--border) 0)`;
  
  renderReviewTable();
}

function renderReviewTable() {
  const tableBody = document.querySelector('#reviewTable tbody');
  if (!tableBody) return;
  tableBody.innerHTML = '';
  
  if (quizHistory.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No questions answered</td></tr>';
    return;
  }
  
  quizHistory.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.questionText}</td>
      <td>${item.selectedWord}</td>
      <td>${item.correctWord} <span style="font-size:0.8rem; color:var(--text-3)">(${item.correctMeaning})</span></td>
      <td style="color: ${item.isCorrect ? 'var(--green)' : 'var(--red)'}; font-weight:bold;">
        ${item.isCorrect ? '✓' : '✗'}
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

// Timer UI
function updateTimerUI(current, max) {
  const quizTimerText = document.getElementById('quizTimerText');
  const timerPath = document.getElementById('timerPath');
  if(quizTimerText) quizTimerText.textContent = current;
  const fraction = current / max;
  const perimeter = 2 * Math.PI * 45; // r=45
  if(timerPath) timerPath.style.strokeDashoffset = perimeter - (fraction * perimeter);
  
  if (current <= 5 && timerPath) {
    timerPath.style.stroke = 'var(--red)';
  } else if (timerPath) {
    timerPath.style.stroke = 'var(--accent)';
  }
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function exitQuiz() {
  clearInterval(timerInterval);
  const mainSections = document.querySelectorAll('.navbar, .hero, .stats, .search-section, .vocabulary-section, .reading-section, .about-section, .footer');
  const quizSection = document.getElementById('quiz-section');
  if (quizSection) quizSection.style.display = 'none';
  mainSections.forEach(s => s.style.display = '');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Story Quiz Logic
let activeStoryBlanks = [];
let selectedBlankObj = null;

function startStoryQuiz() {
  const sqTitle = document.getElementById('sqTitle');
  const sqContent = document.getElementById('sqContent');
  const sqWordBank = document.getElementById('sqWordBank');
  const storySubmitAnswer = document.getElementById('storySubmitAnswer');
  const storyNextQuestion = document.getElementById('storyNextQuestion');
  
  if (storySubmitAnswer) {
    storySubmitAnswer.disabled = true;
    storySubmitAnswer.style.display = 'inline-block';
  }
  if (storyNextQuestion) {
    storyNextQuestion.style.display = 'none';
  }

  const storyQuizFeedback = document.getElementById('storyQuizFeedback');
  if (storyQuizFeedback) {
    storyQuizFeedback.style.display = 'none';
    storyQuizFeedback.innerHTML = '';
  }

  const story = STORIES_DATA[Math.floor(Math.random() * STORIES_DATA.length)];
  if(sqTitle) sqTitle.textContent = story.title;
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = story.content;
  const highlights = tempDiv.querySelectorAll('.vocab-highlight');
  let wordsInStory = [];
  
  highlights.forEach((hl, idx) => {
    const w = hl.getAttribute('data-word');
    wordsInStory.push(w);
    const blank = document.createElement('span');
    blank.className = 'blank-space';
    blank.setAttribute('data-id', idx);
    blank.setAttribute('data-correct', w.toLowerCase());
    blank.textContent = '___';
    
    blank.addEventListener('click', () => {
      document.querySelectorAll('.blank-space').forEach(b => b.classList.remove('selected'));
      blank.classList.add('selected');
      selectedBlankObj = blank;
    });
    hl.parentNode.replaceChild(blank, hl);
  });
  
  if(sqContent) {
    sqContent.innerHTML = '';
    while (tempDiv.firstChild) {
      sqContent.appendChild(tempDiv.firstChild);
    }
    activeStoryBlanks = Array.from(sqContent.querySelectorAll('.blank-space'));
  }
  
  if(sqWordBank) {
    sqWordBank.innerHTML = '';
    let bankWords = [...wordsInStory];
    const decoyWords = [...WORDS_DATA].filter(w => !bankWords.includes(w.word)).sort(() => 0.5 - Math.random()).slice(0, 2);
    decoyWords.forEach(w => bankWords.push(w.word));
    bankWords.sort(() => 0.5 - Math.random());
    
    bankWords.forEach(bw => {
      const chip = document.createElement('div');
      chip.className = 'word-chip';
      chip.textContent = bw;
      chip.addEventListener('click', () => {
        if (!selectedBlankObj || chip.classList.contains('used')) return;
        if (selectedBlankObj.getAttribute('data-filled')) {
          const oldWord = selectedBlankObj.getAttribute('data-filled');
          const oldChip = Array.from(sqWordBank.querySelectorAll('.word-chip')).find(c => c.textContent === oldWord);
          if (oldChip) oldChip.classList.remove('used');
        }
        selectedBlankObj.textContent = bw;
        selectedBlankObj.setAttribute('data-filled', bw);
        selectedBlankObj.classList.add('filled');
        selectedBlankObj.classList.remove('selected');
        chip.classList.add('used');
        selectedBlankObj = null;
        if (activeStoryBlanks.every(b => b.getAttribute('data-filled'))) {
          const storySubmitAnswer = document.getElementById('storySubmitAnswer');
          if(storySubmitAnswer) storySubmitAnswer.disabled = false;
        }
      });
      sqWordBank.appendChild(chip);
    });
  }
}

function checkStoryAnswer() {
  const storySubmitAnswer = document.getElementById('storySubmitAnswer');
  const storyNextQuestion = document.getElementById('storyNextQuestion');
  if(storySubmitAnswer) storySubmitAnswer.style.display = 'none';
  if(storyNextQuestion) storyNextQuestion.style.display = 'inline-block';
  let correctCount = 0;
  
  activeStoryBlanks.forEach(b => {
    const expected = b.getAttribute('data-correct').toLowerCase();
    const actual = (b.getAttribute('data-filled') || '').toLowerCase();
    if (expected === actual) {
      b.style.borderBottomColor = 'var(--green)';
      b.style.color = 'var(--green)';
      correctCount++;
    } else {
      b.style.borderBottomColor = 'var(--red)';
      b.style.color = 'var(--red)';
      const corrSpan = document.createElement('span');
      corrSpan.style.color = 'var(--green)';
      corrSpan.style.fontSize = '0.8rem';
      corrSpan.style.marginLeft = '4px';
      corrSpan.textContent = `(${b.getAttribute('data-correct')})`;
      b.parentNode.insertBefore(corrSpan, b.nextSibling);
    }
  });
  
  const storyQuizFeedback = document.getElementById('storyQuizFeedback');
  if (storyQuizFeedback) {
    let detailsHTML = `<h4 style="margin-bottom:0.5rem; color:#ffffff;">Word Meanings:</h4><ul style="list-style:none; padding:0;">`;
    // We get the meanings of the correct words from WORDS_DATA
    const uniqueWords = new Set();
    activeStoryBlanks.forEach(b => uniqueWords.add(b.getAttribute('data-correct').toLowerCase()));
    
    uniqueWords.forEach(wStr => {
      const wObj = WORDS_DATA.find(w => w.word.toLowerCase() === wStr);
      if (wObj) {
        detailsHTML += `<li style="margin-bottom:0.4rem; font-size:1rem; color:#ffffff;"><strong>${wObj.word}:</strong> ${wObj.simple}</li>`;
      }
    });
    detailsHTML += `</ul>`;
    storyQuizFeedback.innerHTML = detailsHTML;
    storyQuizFeedback.style.display = 'block';
  }
  
  score = correctCount;
  currentQ = activeStoryBlanks.length - 1;
  maxQuestions = activeStoryBlanks.length;
  setTimeout(() => { showScore(); }, 2000);
}

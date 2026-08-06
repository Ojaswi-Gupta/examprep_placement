// js/modules/dailyQuiz.js
import { getDailyChallengeData } from './dailyChallenge.js';
import { updateStreak } from '../data/state.js';
import { WORDS_DATA } from '../data/words.js';

let dailyData = null;
let currentStage = 0; // 0 = vocab, 1 = story, 2 = math
let vocabIndex = 0;
let mathIndex = 0;
let vocabScore = 0;
let storyScore = 0;
let mathScore = 0;

export function initDailyQuiz() {
  const startBtn = document.getElementById('startDailyBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      dailyData = getDailyChallengeData();
      currentStage = 0;
      vocabIndex = 0;
      mathIndex = 0;
      vocabScore = 0;
      storyScore = 0;
      mathScore = 0;
      
      if (typeof window.showView === 'function') {
        window.showView('view-daily');
      }
      renderStage();
    });
  }
}

function renderStage() {
  const container = document.getElementById('dailyPlayArea');
  if (!container) return;
  container.innerHTML = ''; // clear

  if (currentStage === 0) {
    if (vocabIndex < dailyData.words.length) {
      renderVocabQuestion(container);
    } else {
      currentStage = 1;
      renderStage();
    }
  } else if (currentStage === 1) {
    renderStoryQuestion(container);
  } else if (currentStage === 2) {
    if (mathIndex < dailyData.math.length) {
      renderMathQuestion(container);
    } else {
      currentStage = 3;
      renderStage();
    }
  } else if (currentStage === 3) {
    renderResults(container);
  }
}

function renderVocabQuestion(container) {
  const word = dailyData.words[vocabIndex];
  
  const questionText = `What does "${word.word}" mean?`;
  
  // Wrong options (random from the other 4 words in the daily challenge)
  const wrongOptions = dailyData.words.filter(w => w.id !== word.id).slice(0,3);
  const options = [...wrongOptions.map(w => ({...w, correct: false})), {...word, correct: true}].sort(() => Math.random() - 0.5);

  const html = `
    <div style="text-align:center; padding: 2rem;">
      <h3 style="color:var(--text-3); font-size:1rem; margin-bottom:1rem; text-transform:uppercase;">Vocabulary (${vocabIndex + 1}/5)</h3>
      <h2 style="font-size:2rem; margin-bottom:2rem; color:var(--text);">${questionText}</h2>
      <div id="dqOptions" style="display:flex; flex-direction:column; gap:1rem; max-width:600px; margin:0 auto;">
        ${options.map((opt) => `
          <div class="quiz-option" data-correct="${opt.correct}" style="padding:1rem; background:var(--surface-2); border:1px solid var(--border); border-radius:8px; cursor:pointer; transition:0.2s;">
            ${opt.simple}
          </div>
        `).join('')}
      </div>
    </div>
  `;
  container.innerHTML = html;

  const opts = container.querySelectorAll('.quiz-option');
  opts.forEach(opt => {
    opt.addEventListener('click', () => {
      if (opt.dataset.correct === 'true') {
        opt.style.background = 'rgba(46, 204, 113, 0.2)';
        opt.style.borderColor = 'var(--green)';
        vocabScore++;
      } else {
        opt.style.background = 'rgba(231, 76, 60, 0.2)';
        opt.style.borderColor = 'var(--red)';
        const correctOpt = Array.from(opts).find(o => o.dataset.correct === 'true');
        if (correctOpt) {
          correctOpt.style.background = 'rgba(46, 204, 113, 0.2)';
          correctOpt.style.borderColor = 'var(--green)';
        }
      }
      opts.forEach(o => o.style.pointerEvents = 'none');
      
      setTimeout(() => {
        vocabIndex++;
        renderStage();
      }, 1500);
    });
  });
}

function renderStoryQuestion(container) {
  const story = dailyData.story;
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = story.content;
  const highlights = tempDiv.querySelectorAll('.vocab-highlight');
  let wordsInStory = [];
  
  let activeStoryBlanks = [];
  let selectedBlankObj = null;
  
  highlights.forEach((hl, idx) => {
    const w = hl.getAttribute('data-word');
    wordsInStory.push(w);
    const blank = document.createElement('span');
    blank.className = 'blank-space daily-blank';
    blank.setAttribute('data-id', idx);
    blank.setAttribute('data-correct', w.toLowerCase());
    blank.textContent = '___';
    
    blank.addEventListener('click', () => {
      container.querySelectorAll('.daily-blank').forEach(b => b.classList.remove('selected'));
      blank.classList.add('selected');
      selectedBlankObj = blank;
    });
    
    hl.parentNode.replaceChild(blank, hl);
  });

  const html = `
    <div style="padding: 2rem; max-width:800px; margin:0 auto;">
      <h3 style="color:var(--text-3); font-size:1rem; margin-bottom:1rem; text-transform:uppercase; text-align:center;">Reading Comprehension</h3>
      <h2 style="font-size:1.8rem; margin-bottom:1rem; color:var(--text); text-align:center;">${story.title}</h2>
      
      <div id="dqStoryContent" style="font-size:1.1rem; line-height:1.8; color:var(--text-2); background:var(--surface-2); padding:1.5rem; border-radius:12px; margin-bottom: 2rem;">
      </div>
      
      <div id="dqWordBank" style="display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin-bottom:2rem;"></div>
      
      <div style="text-align:center;">
        <button id="dqStorySubmit" class="cta-button" style="padding:1rem 2rem;" disabled>Check Answers</button>
      </div>
    </div>
  `;
  container.innerHTML = html;
  
  const sqContent = document.getElementById('dqStoryContent');
  while (tempDiv.firstChild) {
    sqContent.appendChild(tempDiv.firstChild);
  }
  activeStoryBlanks = Array.from(sqContent.querySelectorAll('.daily-blank'));
  
  const sqWordBank = document.getElementById('dqWordBank');
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
        document.getElementById('dqStorySubmit').disabled = false;
      }
    });
    sqWordBank.appendChild(chip);
  });
  
  document.getElementById('dqStorySubmit').addEventListener('click', (e) => {
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
    storyScore = (correctCount === activeStoryBlanks.length) ? 1 : 0;
    
    e.target.textContent = "Continue →";
    e.target.onclick = () => {
      currentStage = 2;
      renderStage();
    };
  });
}

function renderMathQuestion(container) {
  const mathData = dailyData.math[mathIndex];
  const example = mathData.example;
  
  let questionText = example.question;
  if (window.katex) {
    questionText = questionText.replace(/\$([^$]+)\$/g, (match, math) => {
        try { return katex.renderToString(math, { throwOnError: false, strict: false }); } catch(e) { return match; }
    });
  }

  let stepsHtml = example.steps.map(step => {
    let stepText = step;
    if (window.katex) {
        stepText = step.replace(/\$([^$]+)\$/g, (match, math) => {
            try { return katex.renderToString(math, { throwOnError: false, strict: false }); } catch(e) { return match; }
        });
    }
    return `<li style="margin-bottom: 0.5rem; color: var(--text-2);">${stepText}</li>`;
  }).join('');

  let formulaHtml = mathData.formula.formula;
  if (window.katex) {
    try {
      formulaHtml = katex.renderToString(mathData.formula.formula, { throwOnError: false, displayMode: true, strict: false });
    } catch(e) {}
  }

  const html = `
    <div style="padding: 2rem; max-width:800px; margin:0 auto;">
      <h3 style="color:var(--text-3); font-size:1rem; margin-bottom:1rem; text-transform:uppercase; text-align:center;">Quants (${mathIndex + 1}/3) - ${mathData.category}</h3>
      <div style="font-size:1.2rem; line-height:1.6; color:var(--text); background:var(--surface-2); padding:1.5rem; border-radius:12px; border:1px solid var(--border); margin-bottom:2rem;">
        ${questionText}
      </div>
      
      <div id="dqMathInputArea" style="text-align:center; margin-bottom:2rem;">
        <p style="color:var(--text-3); font-size:0.9rem; margin-bottom:1rem;">Solve this and enter your final answer below:</p>
        <input type="text" id="dqMathInput" placeholder="Type your answer here..." style="padding: 0.8rem; font-size: 1.1rem; border-radius: 6px; border: 1px solid var(--border); background: var(--surface); color: var(--text); width: 100%; max-width: 300px; margin-bottom: 1rem; text-align: center;">
        <br>
        <button id="dqRevealBtn" class="cta-button cta-outline">Submit & Check Answer</button>
      </div>

      <div id="dqSolution" style="display:none; background:rgba(0,0,0,0.2); padding:1.5rem; border-radius:12px; margin-bottom:2rem;">
        <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); text-align: center;">
          <p style="color: var(--text-3); font-size: 0.9rem; margin-bottom: 0.5rem;">Your Answer:</p>
          <div id="dqUserAnswer" style="font-size: 1.3rem; font-weight: bold; color: var(--accent);"></div>
        </div>
        <div style="margin-bottom:1rem; font-size:1.2rem; color:var(--green); text-align:center;">
          ${formulaHtml}
        </div>
        <ol style="padding-left:1.5rem; margin:0;">
          ${stepsHtml}
        </ol>
      </div>

      <div id="dqSelfAssess" style="display:none; text-align:center; gap:1rem; justify-content:center;">
        <button id="dqMathWrong" class="quiz-mode-btn" style="background:rgba(231, 76, 60, 0.1); color:var(--red); border-color:var(--red);">I got it wrong</button>
        <button id="dqMathRight" class="quiz-mode-btn" style="background:rgba(46, 204, 113, 0.1); color:var(--green); border-color:var(--green);">I got it right!</button>
      </div>
    </div>
  `;
  container.innerHTML = html;

  document.getElementById('dqRevealBtn').addEventListener('click', () => {
    const userInput = document.getElementById('dqMathInput').value.trim() || 'No answer provided';
    document.getElementById('dqUserAnswer').textContent = userInput;
    
    document.getElementById('dqMathInputArea').style.display = 'none';
    document.getElementById('dqSolution').style.display = 'block';
    document.getElementById('dqSelfAssess').style.display = 'flex';
  });

  document.getElementById('dqMathWrong').addEventListener('click', () => {
    nextMath();
  });

  document.getElementById('dqMathRight').addEventListener('click', () => {
    mathScore++;
    nextMath();
  });
  
  function nextMath() {
    mathIndex++;
    renderStage();
  }
}

function renderResults(container) {
  updateStreak();
  
  const html = `
    <div style="text-align:center; padding: 3rem 1rem;">
      <h1 style="font-size:3rem; margin-bottom:1rem;">🎉 Challenge Complete!</h1>
      <h3 style="color:var(--text-2); font-size:1.2rem; margin-bottom:2rem;">You've completed your daily tasks.</h3>
      
      <div style="display:flex; justify-content:center; gap:2rem; margin-bottom:3rem;">
        <div style="background:var(--surface-2); padding:1.5rem; border-radius:12px; border:1px solid var(--border); min-width:150px;">
          <h4 style="color:var(--text-3); text-transform:uppercase; font-size:0.8rem; margin-bottom:0.5rem;">Vocab Score</h4>
          <span style="font-size:2rem; font-weight:700; color:var(--accent);">${vocabScore}/5</span>
        </div>
        <div style="background:var(--surface-2); padding:1.5rem; border-radius:12px; border:1px solid var(--border); min-width:150px;">
          <h4 style="color:var(--text-3); text-transform:uppercase; font-size:0.8rem; margin-bottom:0.5rem;">Math Score</h4>
          <span style="font-size:2rem; font-weight:700; color:var(--green);">${mathScore}/3</span>
        </div>
      </div>
      
      <button class="cta-button" onclick="window.showView('view-home')">Return to Home</button>
    </div>
  `;
  container.innerHTML = html;
  
  if (typeof window.createConfetti === 'function') {
    window.createConfetti();
  }
}

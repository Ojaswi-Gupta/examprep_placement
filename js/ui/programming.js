// js/ui/programming.js
import { PROGRAMMING_DATA } from '../data/programming.js';

let currentLangIndex = 0; // Default to first language (SQL)
let currentTab = 'syntax'; // 'syntax' or 'mcqs'

export function initProgramming() {
  const navLink = document.querySelector('a[data-view="view-programming"]');
  if (navLink) {
    navLink.addEventListener('click', () => {
      renderProgrammingView();
    });
  }
}

function renderProgrammingView() {
  const container = document.getElementById('programmingContainer');
  if (!container) return;

  const currentData = PROGRAMMING_DATA[currentLangIndex];

  let html = `
    <div class="programming-header">
      <!-- Language Selection -->
      <div class="lang-selector">
        ${PROGRAMMING_DATA.map((lang, index) => `
          <button class="lang-btn ${index === currentLangIndex ? 'active' : ''}" data-index="${index}">
            ${lang.icon} ${lang.language}
          </button>
        `).join('')}
      </div>
      <p class="lang-description">${currentData.description}</p>
      
      <!-- Sub Tabs: Syntax vs MCQs -->
      <div class="prog-tabs">
        <button class="prog-tab-btn ${currentTab === 'syntax' ? 'active' : ''}" data-tab="syntax">📖 Syntax & Concepts</button>
        <button class="prog-tab-btn ${currentTab === 'mcqs' ? 'active' : ''}" data-tab="mcqs">🎯 Practice MCQs</button>
      </div>
    </div>

    <div class="programming-content full-width">
  `;

  if (currentTab === 'syntax') {
    html += `
      <div class="syntax-section full-width-card">
        <h3>Syntax & Concepts (${currentData.language})</h3>
        <div class="syntax-grid">
          ${currentData.syntax.map(item => `
            <div class="syntax-card">
              <div class="syntax-keyword"><code>${escapeHTML(item.keyword)}</code></div>
              <div class="syntax-meaning">${escapeHTML(item.meaning)}</div>
              <div class="syntax-example"><pre><code>${escapeHTML(item.example)}</code></pre></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else {
    html += `
      <div class="mcq-section full-width-card">
        <h3>Practice MCQs (${currentData.language})</h3>
        <div class="mcq-list">
          ${currentData.mcqs.map((mcq, qIndex) => `
            <div class="mcq-card" data-qindex="${qIndex}">
              <p class="mcq-question">${qIndex + 1}. ${escapeHTML(mcq.q).replace(/\n/g, '<br>')}</p>
              <div class="mcq-options">
                ${mcq.options.map((opt, optIndex) => `
                  <button class="mcq-option" data-optindex="${optIndex}">${escapeHTML(opt)}</button>
                `).join('')}
              </div>
              <div class="mcq-feedback hidden">
                <span class="feedback-icon"></span>
                <span class="feedback-text">${escapeHTML(mcq.explanation)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;

  // Event Listeners for Languages
  container.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentLangIndex = parseInt(e.currentTarget.dataset.index);
      renderProgrammingView();
    });
  });

  // Event Listeners for Tabs
  container.querySelectorAll('.prog-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentTab = e.currentTarget.dataset.tab;
      renderProgrammingView();
    });
  });

  // Event Listeners for MCQs
  if (currentTab === 'mcqs') {
    container.querySelectorAll('.mcq-card').forEach(card => {
      const qIndex = parseInt(card.dataset.qindex);
      const mcqData = currentData.mcqs[qIndex];
      const feedbackEl = card.querySelector('.mcq-feedback');
      const feedbackIcon = feedbackEl.querySelector('.feedback-icon');

      card.querySelectorAll('.mcq-option').forEach(optBtn => {
        optBtn.addEventListener('click', (e) => {
          // Disable options
          card.querySelectorAll('.mcq-option').forEach(b => b.disabled = true);
          
          const selectedIndex = parseInt(e.currentTarget.dataset.optindex);
          feedbackEl.classList.remove('hidden');
          
          if (selectedIndex === mcqData.answer) {
            e.currentTarget.classList.add('correct');
            feedbackIcon.textContent = '✅';
            feedbackEl.classList.add('correct-feedback');
          } else {
            e.currentTarget.classList.add('wrong');
            // Show correct answer
            card.querySelector(`.mcq-option[data-optindex="${mcqData.answer}"]`).classList.add('correct');
            feedbackIcon.textContent = '❌';
            feedbackEl.classList.add('wrong-feedback');
          }
        });
      });
    });
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag])
  );
}

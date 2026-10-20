// js/ui/programming.js
import { PROGRAMMING_DATA } from '../data/programming.js';

let currentLangIndex = 0; // Default to first language (SQL)
let currentTabId = 'syntax'; 

export function initProgramming() {
  const navLink = document.querySelector('a[data-view="view-programming"]');
  if (navLink) {
    navLink.addEventListener('click', () => {
      renderProgrammingView();
    });
  }
  renderProgrammingView();
}

function renderProgrammingView() {
  const container = document.getElementById('programmingContainer');
  if (!container) return;

  const currentData = PROGRAMMING_DATA[currentLangIndex];
  
  // Ensure the currentTabId is valid for the selected language
  const tabExists = currentData.tabs.find(t => t.id === currentTabId);
  if (!tabExists) {
    currentTabId = currentData.tabs[0].id;
  }
  
  const activeTab = currentData.tabs.find(t => t.id === currentTabId);

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
      
      <!-- Sub Tabs (Dynamic) -->
      <div class="prog-tabs">
        ${currentData.tabs.map(tab => `
          <button class="prog-tab-btn ${tab.id === currentTabId ? 'active' : ''}" data-tab="${tab.id}">${tab.name}</button>
        `).join('')}
      </div>
    </div>

    <div class="programming-content full-width">
  `;

  if (activeTab.type === 'syntax') {
    html += `
      <div class="syntax-section full-width-card">
        <h3>${activeTab.name} (${currentData.language})</h3>
        <div class="syntax-grid">
          ${activeTab.data.map(item => `
            <div class="syntax-card">
              <div class="syntax-keyword"><code>${escapeHTML(item.keyword)}</code></div>
              <div class="syntax-meaning">${escapeHTML(item.meaning)}</div>
              <div class="syntax-example"><pre><code>${escapeHTML(item.example)}</code></pre></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (activeTab.type === 'mcqs') {
    html += `
      <div class="mcq-section full-width-card">
        <h3>${activeTab.name} (${currentData.language})</h3>
        <div class="mcq-list">
          ${activeTab.data.map((mcq, qIndex) => `
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
  } else if (activeTab.type === 'queries') {
    html += `
      <div class="queries-section full-width-card">
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <h3 style="font-size: 2rem; color: var(--text); margin-bottom: 0.5rem;">${activeTab.name}</h3>
          <p style="color: var(--text-2); max-width: 700px; margin: 0 auto; font-size: 1rem;">
            Core B2B SaaS, CRM, and Product Analytics patterns with sample schemas, edge-case traps, and full MySQL 8.0+ solutions.
          </p>
        </div>
        <div class="queries-list">
          ${activeTab.data.map((item, qIdx) => `
            <div class="sql-query-card">
              <div class="sql-query-header">
                <h4 class="sql-query-title">${escapeHTML(item.title)}</h4>
                <div class="sql-query-tags">
                  <span class="interview-pill pill-intermediate">${escapeHTML(item.badge)}</span>
                  <span class="interview-pill pill-${(item.difficulty || 'medium').toLowerCase()}">${item.difficulty}</span>
                </div>
              </div>

              <div class="sql-query-problem">
                <p style="margin: 0; font-size: 1.05rem; line-height: 1.6; color: var(--text);">
                  <strong>📝 Problem:</strong> ${parseMarkdown(item.question)}
                </p>
              </div>

              ${item.schema ? `
                <div style="margin: 1rem 0; font-size: 0.88rem; color: var(--text-2); background: rgba(255,255,255,0.03); padding: 0.75rem 1rem; border-radius: 6px; border: 1px dashed var(--border);">
                  <strong>🗄️ Relational Schema:</strong><br>
                  <code style="color: var(--accent); white-space: pre-wrap;">${escapeHTML(item.schema)}</code>
                </div>
              ` : ''}

              <!-- Input Tables -->
              ${item.inputTables && item.inputTables.length ? `
                <div style="margin-top: 1.25rem; margin-bottom: 0.5rem; font-size: 0.95rem; font-weight: 600; color: var(--text);">
                  📥 Sample Input Tables:
                </div>
                <div class="sql-tables-grid">
                  ${item.inputTables.map(t => renderSqlTable(t)).join('')}
                </div>
              ` : ''}

              <!-- Expected Output Table -->
              ${item.expectedOutput ? `
                <div style="margin-top: 1.25rem; margin-bottom: 0.5rem; font-size: 0.95rem; font-weight: 600; color: var(--text);">
                  🎯 Expected Output:
                </div>
                <div class="sql-tables-grid" style="grid-template-columns: 1fr;">
                  ${renderOutputTable(item.expectedOutput)}
                </div>
              ` : ''}

              <!-- Solution Query -->
              <div class="sql-solution-box">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <strong style="color: #38bdf8; font-size: 0.95rem;">⚡ MySQL 8.0+ Solution Query:</strong>
                  <span style="font-size: 0.75rem; color: var(--text-3); font-family: monospace;">Tested & Verified</span>
                </div>
                <pre><code>${escapeHTML(item.solutionQuery)}</code></pre>
              </div>

              <!-- Traps & Insights -->
              ${item.traps && item.traps.length ? `
                <div class="sql-trap-box">
                  <div class="sql-trap-title">⚠️ Crucial Online Assessment Traps & Why This Syntax Matters:</div>
                  <ul class="sql-trap-list">
                    ${item.traps.map(trap => `<li>${parseMarkdown(trap)}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
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
      currentTabId = e.currentTarget.dataset.tab;
      renderProgrammingView();
    });
  });

  // Event Listeners for MCQs
  if (activeTab.type === 'mcqs') {
    container.querySelectorAll('.mcq-card').forEach(card => {
      const qIndex = parseInt(card.dataset.qindex);
      const mcqData = activeTab.data[qIndex];
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
  if (str === null || str === undefined) return '';
  str = String(str);
  return str.replace(/[&<>'"]/g, 
    tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
}

function renderSqlTable(table) {
  if (!table || !table.columns) return '';
  return `
    <div class="sql-table-wrapper">
      <div class="sql-table-name"><code>${escapeHTML(table.name)}</code></div>
      <table class="sql-table">
        <thead>
          <tr>${table.columns.map(c => `<th>${escapeHTML(c)}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${table.rows.map(r => `<tr>${r.map(c => `<td>${escapeHTML(c)}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderOutputTable(output) {
  if (!output || !output.columns) return '';
  return `
    <div class="sql-table-wrapper">
      <table class="sql-table">
        <thead>
          <tr>${output.columns.map(c => `<th>${escapeHTML(c)}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${output.rows.map(r => `<tr>${r.map(c => `<td>${escapeHTML(c)}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function parseMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br>');
}

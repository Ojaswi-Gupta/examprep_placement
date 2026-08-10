// js/ui/interview.js — Technical Interview Questions UI (drill-down: Roles → Topics → Q&A)
import { INTERVIEW_DATA } from '../data/interview.js';

let currentRole = null;   // index into INTERVIEW_DATA
let currentTopic = null;  // index into role.topics

export function initInterview() {
  const navLink = document.querySelector('a[data-view="view-interview"]');
  if (navLink) {
    navLink.addEventListener('click', () => {
      currentRole = null;
      currentTopic = null;
      renderInterview();
    });
  }

  // Search handler
  const searchInput = document.getElementById('interviewSearchInput');
  if (searchInput) {
    let t;
    searchInput.addEventListener('input', () => {
      clearTimeout(t);
      const term = searchInput.value.toLowerCase().trim();
      t = setTimeout(() => {
        if (term.length < 2) {
          // Reset to current view
          renderInterview();
          return;
        }
        renderSearchResults(term);
      }, 200);
    });
  }

  renderInterview();
}

// ─── Main render dispatcher ─────────────────────────
function renderInterview() {
  const container = document.getElementById('interviewGrid');
  if (!container) return;

  if (currentRole === null) {
    renderRoleDashboard(container);
  } else if (currentTopic === null) {
    renderTopicList(container);
  } else {
    renderQuestions(container);
  }
}

// ─── Level 1: Role Dashboard ────────────────────────
function renderRoleDashboard(container) {
  const totalQs = INTERVIEW_DATA.reduce((sum, role) =>
    sum + role.topics.reduce((s, t) => s + t.questions.length, 0), 0
  );

  container.innerHTML = `
    <div class="interview-role-grid">
      ${INTERVIEW_DATA.map((role, i) => {
        const qCount = role.topics.reduce((s, t) => s + t.questions.length, 0);
        const topicCount = role.topics.length;
        return `
          <div class="interview-role-card hover-lift" data-role-index="${i}">
            <div class="interview-role-icon">${role.icon}</div>
            <h3 class="interview-role-title">${role.role}</h3>
            <div class="interview-role-meta">
              <span>${topicCount} Topics</span>
              <span class="interview-dot">•</span>
              <span>${qCount} Questions</span>
            </div>
            <div class="interview-role-bar">
              <div class="interview-role-bar-fill" style="width: ${(qCount / totalQs * 100).toFixed(0)}%"></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Click handlers
  container.querySelectorAll('.interview-role-card').forEach(card => {
    card.addEventListener('click', () => {
      currentRole = parseInt(card.dataset.roleIndex);
      currentTopic = null;
      renderInterview();
    });
  });
}

// ─── Level 2: Topic List ────────────────────────────
function renderTopicList(container) {
  const role = INTERVIEW_DATA[currentRole];

  container.innerHTML = `
    <button class="interview-back-btn" id="interviewBackToRoles">
      ← Back to All Roles
    </button>
    <div class="interview-role-header">
      <span class="interview-header-icon">${role.icon}</span>
      <h2>${role.role}</h2>
    </div>
    <div class="interview-topic-grid">
      ${role.topics.map((topic, i) => {
        const basicCount = topic.questions.filter(q => q.difficulty === 'Basic').length;
        const intCount = topic.questions.filter(q => q.difficulty === 'Intermediate').length;
        const advCount = topic.questions.filter(q => q.difficulty === 'Advanced').length;
        return `
          <div class="interview-topic-card hover-lift" data-topic-index="${i}">
            <h3 class="interview-topic-title">${topic.topic}</h3>
            <div class="interview-topic-count">${topic.questions.length} questions</div>
            <div class="interview-difficulty-pills">
              ${basicCount ? `<span class="interview-pill pill-basic">${basicCount} Basic</span>` : ''}
              ${intCount ? `<span class="interview-pill pill-intermediate">${intCount} Mid</span>` : ''}
              ${advCount ? `<span class="interview-pill pill-advanced">${advCount} Adv</span>` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Back button
  document.getElementById('interviewBackToRoles').addEventListener('click', () => {
    currentRole = null;
    renderInterview();
  });

  // Topic click handlers
  container.querySelectorAll('.interview-topic-card').forEach(card => {
    card.addEventListener('click', () => {
      currentTopic = parseInt(card.dataset.topicIndex);
      renderInterview();
    });
  });
}

// ─── Level 3: Q&A Accordion ─────────────────────────
function renderQuestions(container) {
  const role = INTERVIEW_DATA[currentRole];
  const topic = role.topics[currentTopic];

  container.innerHTML = `
    <button class="interview-back-btn" id="interviewBackToTopics">
      ← Back to ${role.role}
    </button>
    <div class="interview-role-header">
      <span class="interview-header-icon">${role.icon}</span>
      <h2>${topic.topic}</h2>
      <span class="interview-header-sub">${role.role}</span>
    </div>
    <div class="interview-qa-list">
      ${topic.questions.map((item, i) => `
        <div class="interview-qa-card" data-qa-index="${i}">
          <div class="interview-qa-header">
            <span class="interview-qa-number">${String(i + 1).padStart(2, '0')}</span>
            <span class="interview-qa-question">${item.q}</span>
            <span class="interview-pill pill-${item.difficulty.toLowerCase()}">${item.difficulty}</span>
            <span class="interview-qa-chevron">▸</span>
          </div>
          <div class="interview-qa-answer">
            <p>${item.a}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Back button
  document.getElementById('interviewBackToTopics').addEventListener('click', () => {
    currentTopic = null;
    renderInterview();
  });

  // Accordion toggle
  container.querySelectorAll('.interview-qa-card').forEach(card => {
    card.querySelector('.interview-qa-header').addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });
}

// ─── Search across all questions ────────────────────
function renderSearchResults(term) {
  const container = document.getElementById('interviewGrid');
  if (!container) return;

  const results = [];
  INTERVIEW_DATA.forEach((role, ri) => {
    role.topics.forEach((topic, ti) => {
      topic.questions.forEach((item, qi) => {
        if (item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term)) {
          results.push({ role, ri, topic, ti, item, qi });
        }
      });
    });
  });

  if (results.length === 0) {
    container.innerHTML = `
      <div class="interview-no-results">
        <p>No questions found for "<strong>${term}</strong>"</p>
        <p style="color: var(--text-2); font-size: 0.9rem; margin-top: 0.5rem;">Try a different keyword</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <p class="interview-search-count">${results.length} result${results.length !== 1 ? 's' : ''} for "<strong>${term}</strong>"</p>
    <div class="interview-qa-list">
      ${results.map((r, i) => `
        <div class="interview-qa-card" data-qa-index="${i}">
          <div class="interview-qa-header">
            <span class="interview-qa-number">${r.role.icon}</span>
            <span class="interview-qa-question">${highlightTerm(r.item.q, term)}</span>
            <span class="interview-pill pill-${r.item.difficulty.toLowerCase()}">${r.item.difficulty}</span>
            <span class="interview-qa-chevron">▸</span>
          </div>
          <div class="interview-qa-answer">
            <div class="interview-qa-breadcrumb">${r.role.role} → ${r.topic.topic}</div>
            <p>${highlightTerm(r.item.a, term)}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Accordion toggle for search results
  container.querySelectorAll('.interview-qa-card').forEach(card => {
    card.querySelector('.interview-qa-header').addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });
}

function highlightTerm(text, term) {
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

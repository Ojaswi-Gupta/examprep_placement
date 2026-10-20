// js/ui/random.js — Random & Curated Questions UI
import { INTERVIEW_RANDOM_DATA } from '../data/interview_random.js';

let currentTopicFilter = null;

export function initRandom() {
  const navLink = document.querySelector('a[data-view="view-random"]');
  if (navLink) {
    navLink.addEventListener('click', () => {
      currentTopicFilter = null;
      renderRandomView();
    });
  }

  const searchInput = document.getElementById('randomSearchInput');
  if (searchInput) {
    let timer;
    searchInput.addEventListener('input', () => {
      clearTimeout(timer);
      const query = searchInput.value.toLowerCase().trim();
      timer = setTimeout(() => {
        renderRandomView(query);
      }, 200);
    });
  }

  renderRandomView();
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

function parseMarkdown(text) {
  if (!text) return '';
  // Multi-line code blocks
  text = text.replace(/```(?:xml|sql|html|json)?\n?([\s\S]*?)```/g, (m, code) => {
    return `<pre><code>${escapeHTML(code.trim())}</code></pre>`;
  });
  // Inline code
  text = text.replace(/`([^`\n]+)`/g, (m, code) => {
    return `<code>${escapeHTML(code)}</code>`;
  });
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

function highlightTerm(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

export function renderRandomView(searchQuery = '') {
  const container = document.getElementById('randomGrid');
  if (!container) return;

  const role = INTERVIEW_RANDOM_DATA[0];
  if (!role) {
    container.innerHTML = '<p class="interview-no-results">No questions added yet.</p>';
    return;
  }

  // Filter topics / questions if search query or topic filter is active
  let matchingQuestions = [];

  role.topics.forEach((topic, topicIdx) => {
    if (currentTopicFilter !== null && currentTopicFilter !== topicIdx) {
      return;
    }
    topic.questions.forEach((qItem, qIdx) => {
      const matchesSearch = !searchQuery || 
        qItem.q.toLowerCase().includes(searchQuery) || 
        qItem.a.toLowerCase().includes(searchQuery) ||
        topic.topic.toLowerCase().includes(searchQuery);

      if (matchesSearch) {
        matchingQuestions.push({
          topicTitle: topic.topic,
          topicIdx,
          qIdx,
          qItem
        });
      }
    });
  });

  // Build topic pills for quick filtering
  const allTopics = role.topics;
  const topicFilterHtml = allTopics.length > 1 ? `
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; justify-content: center;">
      <button class="cta-button ${currentTopicFilter === null ? '' : 'cta-outline'}" id="randomTopicAll" style="padding: 0.4rem 0.9rem; font-size: 0.85rem;">
        All (${role.topics.reduce((sum, t) => sum + t.questions.length, 0)})
      </button>
      ${allTopics.map((t, idx) => `
        <button class="cta-button ${currentTopicFilter === idx ? '' : 'cta-outline'} random-topic-btn" data-topic-idx="${idx}" style="padding: 0.4rem 0.9rem; font-size: 0.85rem;">
          ${t.topic} (${t.questions.length})
        </button>
      `).join('')}
    </div>
  ` : '';

  if (matchingQuestions.length === 0) {
    container.innerHTML = `
      ${topicFilterHtml}
      <div class="interview-no-results">
        <p>No questions found${searchQuery ? ` for "<strong>${searchQuery}</strong>"` : ''}.</p>
      </div>
    `;
    setupTopicFilterListeners(container);
    return;
  }

  container.innerHTML = `
    ${topicFilterHtml}
    <div class="interview-qa-list">
      ${matchingQuestions.map((item, i) => {
        const difficulty = item.qItem.difficulty || 'Intermediate';
        return `
          <div class="interview-qa-card open" data-qa-index="${i}">
            <div class="interview-qa-header">
              <span class="interview-qa-number">#${String(i + 1).padStart(2, '0')}</span>
              <span class="interview-qa-question">${highlightTerm(item.qItem.q, searchQuery)}</span>
              <span class="interview-pill pill-${difficulty.toLowerCase()}">${difficulty}</span>
              <span class="interview-qa-chevron">▸</span>
            </div>
            <div class="interview-qa-answer">
              <div class="interview-qa-breadcrumb">📂 ${item.topicTitle}</div>
              <p>${parseMarkdown(highlightTerm(item.qItem.a, searchQuery))}</p>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Accordion toggle
  container.querySelectorAll('.interview-qa-card').forEach(card => {
    card.querySelector('.interview-qa-header').addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });

  setupTopicFilterListeners(container);
}

function setupTopicFilterListeners(container) {
  const allBtn = container.querySelector('#randomTopicAll');
  if (allBtn) {
    allBtn.addEventListener('click', () => {
      currentTopicFilter = null;
      renderRandomView();
    });
  }

  container.querySelectorAll('.random-topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentTopicFilter = parseInt(btn.dataset.topicIdx);
      renderRandomView();
    });
  });
}

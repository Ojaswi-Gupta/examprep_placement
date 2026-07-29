// js/ui/cards.js
import { setupBookmarks } from '../features/bookmarks.js';
import { WORDS_DATA } from '../data/words.js';

let observer;

export function initCards() {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
  
  // Setup Modal Close Event
  const modalClose = document.getElementById('modalClose');
  const wordModal = document.getElementById('wordModal');
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (wordModal) {
    wordModal.addEventListener('click', (e) => {
      if (e.target === wordModal) closeModal();
    });
  }

  // Setup Modal Audio
  const modalAudio = document.getElementById('modalAudio');
  if (modalAudio) {
    modalAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      const w = document.getElementById('modalWord').textContent;
      if (w) {
        const utterance = new SpeechSynthesisUtterance(w);
        window.speechSynthesis.speak(utterance);
      }
    });
  }
}

export function renderCards(wordsList) {
  const vocabGrid = document.getElementById('vocabGrid');
  if (!vocabGrid) return;
  vocabGrid.innerHTML = '';
  
  wordsList.forEach((w, index) => {
    const card = document.createElement('div');
    card.className = 'card animate-on-scroll';
    // Add search keywords as data attribute
    const searchData = `${w.word} ${w.simple} ${w.definition} ${w.example}`.toLowerCase();
    card.setAttribute('data-search', searchData);

    let html = `
      <div class="word-header">
        <div class="word-number">${String(index + 1).padStart(2, '0')}</div>
        <h3 class="word">${w.word}</h3>
        <span class="simple">${w.simple}</span>
      </div>
      <p class="definition">${w.definition}</p>
      <p class="example">"${w.example}"</p>
    `;
    
    if (w.antonyms && w.antonyms.length > 0) {
      html += `
        <div class="card-antonyms" style="margin-top: 15px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
          <span class="card-antonyms-label" style="font-size: 0.85rem; color: var(--text-3); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Opposites:</span>
          ${w.antonyms.map(a => `<span class="card-antonym-tag">${a}</span>`).join('')}
        </div>
      `;
    }
    card.innerHTML = html;
    
    // Add Bookmark Feature
    setupBookmarks(card, w);

    // Setup Modal Click
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openModal(w));

    vocabGrid.appendChild(card);
    if (observer) observer.observe(card);
  });
}

function openModal(data) {
  const wordModal = document.getElementById('wordModal');
  if (!data || !wordModal) return;

  document.getElementById('modalPos').textContent = data.partOfSpeech || '';
  document.getElementById('modalWord').textContent = data.word;
  document.getElementById('modalSimple').textContent = data.simple;
  document.getElementById('modalDefinition').textContent = data.definition;
  document.getElementById('modalExample').textContent = '"' + data.example + '"';

  // Synonyms
  const modalSynonyms = document.getElementById('modalSynonyms');
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
  const modalAntonyms = document.getElementById('modalAntonyms');
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
  const modalExtraExamples = document.getElementById('modalExtraExamples');
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
  document.getElementById('modalTip').textContent = data.usageTip || '';

  wordModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const wordModal = document.getElementById('wordModal');
  if (!wordModal) return;
  wordModal.classList.remove('active');
  document.body.style.overflow = '';
}

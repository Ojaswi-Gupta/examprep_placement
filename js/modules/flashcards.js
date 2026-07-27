// js/modules/flashcards.js
import { WORDS_DATA } from '../data/words.js';

let fcIndex = 0;
let fcWords = [];

export function initFlashcards() {
  const flashcard = document.getElementById('flashcard');
  const contextFirstToggle = document.getElementById('contextFirstToggle');
  const fcPrev = document.getElementById('fcPrev');
  const fcNext = document.getElementById('fcNext');
  
  if (flashcard) {
    flashcard.addEventListener('click', () => {
      flashcard.classList.toggle('flipped');
    });
  }
  
  if (contextFirstToggle) {
    contextFirstToggle.addEventListener('change', () => {
      renderFlashcard();
    });
  }
  
  if (fcPrev) fcPrev.addEventListener('click', (e) => { e.stopPropagation(); prevFlashcard(); });
  if (fcNext) fcNext.addEventListener('click', (e) => { e.stopPropagation(); nextFlashcard(); });

  document.addEventListener('keydown', (e) => {
    const flashcardSection = document.getElementById('flashcard-section');
    if (!flashcardSection || flashcardSection.style.display !== 'block') return;

    if (e.key === 'ArrowRight') {
      nextFlashcard();
    } else if (e.key === 'ArrowLeft') {
      prevFlashcard();
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      if (flashcard) flashcard.classList.toggle('flipped');
    }
  });
}

export function startFlashcards() {
  const mainSections = document.querySelectorAll('.navbar, .hero, .stats, .search-section, .vocabulary-section, .reading-section, .about-section, .footer');
  const flashcardSection = document.getElementById('flashcard-section');
  
  if (!WORDS_DATA || !WORDS_DATA.length) return;
  mainSections.forEach(s => s.style.display = 'none');
  if (flashcardSection) flashcardSection.style.display = 'block';
  
  // Shuffle or keep ordered
  fcWords = [...WORDS_DATA].sort(() => 0.5 - Math.random());
  fcIndex = 0;
  renderFlashcard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function exitFlashcards() {
  const mainSections = document.querySelectorAll('.navbar, .hero, .stats, .search-section, .vocabulary-section, .reading-section, .about-section, .footer');
  const flashcardSection = document.getElementById('flashcard-section');
  if (flashcardSection) flashcardSection.style.display = 'none';
  mainSections.forEach(s => s.style.display = '');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderFlashcard() {
  const w = fcWords[fcIndex];
  if (!w) return;
  
  const flashcard = document.getElementById('flashcard');
  const fcCounter = document.getElementById('fcCounter');
  const fcWord = document.getElementById('fcWord');
  const fcPos = document.getElementById('fcPos');
  const fcSimple = document.getElementById('fcSimple');
  const fcDefinition = document.getElementById('fcDefinition');
  const fcExample = document.getElementById('fcExample');
  const fcSynonyms = document.getElementById('fcSynonyms');
  const fcAntonyms = document.getElementById('fcAntonyms');
  const fcTip = document.getElementById('fcTip');
  const fcBackWord = document.getElementById('fcBackWord');
  const contextFirstToggle = document.getElementById('contextFirstToggle');

  if(flashcard) flashcard.classList.remove('flipped');
  if(fcCounter) fcCounter.textContent = `${fcIndex + 1} / ${fcWords.length}`;
  
  if (contextFirstToggle && contextFirstToggle.checked) {
    const regex = new RegExp(w.word, 'gi');
    const blanked = w.example.replace(regex, '<b>___</b>');
    if(fcWord) fcWord.innerHTML = `<span style="font-size: 1.5rem; font-weight: 500; line-height: 1.6;">${blanked}</span>`;
    if(fcPos) fcPos.style.display = 'none';
    if (fcBackWord) {
      fcBackWord.textContent = w.word;
      fcBackWord.style.display = 'block';
    }
  } else {
    if(fcWord) fcWord.textContent = w.word;
    if(fcPos) {
      fcPos.style.display = 'block';
      fcPos.textContent = w.partOfSpeech;
    }
    if (fcBackWord) {
      fcBackWord.style.display = 'none';
    }
  }

  if(fcSimple) fcSimple.textContent = w.simple;
  if(fcDefinition) fcDefinition.textContent = w.definition;
  if(fcExample) fcExample.textContent = '"' + w.example + '"';
  
  if(fcSynonyms) {
    fcSynonyms.innerHTML = '';
    if (w.synonyms && w.synonyms.length) {
      w.synonyms.forEach(s => {
        const tag = document.createElement('span');
        tag.className = 'fc-tag';
        tag.textContent = s;
        fcSynonyms.appendChild(tag);
      });
    }
  }

  if(fcAntonyms) {
    fcAntonyms.innerHTML = '';
    if (w.antonyms && w.antonyms.length) {
      w.antonyms.forEach(a => {
        const tag = document.createElement('span');
        tag.className = 'fc-tag ant';
        tag.textContent = a;
        fcAntonyms.appendChild(tag);
      });
    }
  }

  if(fcTip) {
    fcTip.style.display = w.usageTip ? 'block' : 'none';
    fcTip.textContent = w.usageTip ? `💡 ${w.usageTip}` : '';
  }
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

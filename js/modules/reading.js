// js/modules/reading.js
import { STORIES_DATA, STORY_TEMPLATES } from '../data/stories.js';
import { WORDS_DATA } from '../data/words.js';
import { masteryData } from '../data/state.js';

export function initReading() {
  const backToStories = document.getElementById('backToStories');
  if (backToStories) {
    backToStories.addEventListener('click', closeStory);
  }

  // Tooltip Audio
  const tooltipAudio = document.getElementById('tooltipAudio');
  if (tooltipAudio) {
    tooltipAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      const w = tooltipAudio.getAttribute('data-word');
      if (w) {
        const utterance = new SpeechSynthesisUtterance(w);
        window.speechSynthesis.speak(utterance);
      }
    });
  }

  renderStoryGrid();
}

function generateDailyArticle() {
  // Get 5 lowest mastery words
  const unmastered = WORDS_DATA.map(w => ({ ...w, score: masteryData[w.id] || 0 })).sort((a, b) => a.score - b.score);
  const targetWords = unmastered.slice(0, 5);
  while (targetWords.length < 5) targetWords.push(WORDS_DATA[Math.floor(Math.random() * WORDS_DATA.length)]);
  
  const tmpl = STORY_TEMPLATES[Math.floor(Math.random() * STORY_TEMPLATES.length)];
  let htmlContent = tmpl.template;
  
  for (let i = 0; i < 5; i++) {
    htmlContent = htmlContent.replace(`{word${i}}`, `<span class="vocab-highlight" data-word="${targetWords[i].word}">${targetWords[i].word}</span>`);
  }
  
  return {
    id: 'daily',
    title: tmpl.title,
    genre: tmpl.genre,
    content: htmlContent,
    isDaily: true
  };
}

export function renderStoryGrid() {
  const storyGrid = document.getElementById('storyGrid');
  if (!storyGrid || typeof STORIES_DATA === 'undefined') return;

  const allStories = [];
  if (typeof STORY_TEMPLATES !== 'undefined') {
    allStories.push(generateDailyArticle());
  }
  allStories.push(...STORIES_DATA);
  
  storyGrid.innerHTML = '';
  allStories.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card-btn';
    if (story.isDaily) card.style.borderColor = 'var(--green)'; 
    card.innerHTML = `
      <h4>${story.title}</h4>
      <p>Genre: ${story.genre}</p>
    `;
    card.addEventListener('click', () => openStory(story));
    storyGrid.appendChild(card);
  });
}

function openStory(story) {
  const storyGrid = document.getElementById('storyGrid');
  const storyViewer = document.getElementById('storyViewer');
  const storyTitle = document.getElementById('storyTitle');
  const storyGenre = document.getElementById('storyGenre');
  const storyContent = document.getElementById('storyContent');

  if(storyGrid) storyGrid.style.display = 'none';
  if(storyViewer) storyViewer.style.display = 'block';
  
  if(storyTitle) storyTitle.textContent = story.title;
  if(storyGenre) storyGenre.textContent = story.genre;
  if(storyContent) {
    storyContent.innerHTML = story.content;
    attachTooltipListeners(storyContent);
  }
}

function closeStory() {
  const storyGrid = document.getElementById('storyGrid');
  const storyViewer = document.getElementById('storyViewer');
  const vocabTooltip = document.getElementById('vocabTooltip');
  
  if(storyGrid) storyGrid.style.display = 'grid';
  if(storyViewer) storyViewer.style.display = 'none';
  if(vocabTooltip) vocabTooltip.classList.remove('active');
}

function attachTooltipListeners(container) {
  const highlights = container.querySelectorAll('.vocab-highlight');
  const vocabTooltip = document.getElementById('vocabTooltip');
  const tooltipWord = document.getElementById('tooltipWord');
  const tooltipMeaning = document.getElementById('tooltipMeaning');
  const tooltipDef = document.getElementById('tooltipDef');
  const tooltipAudio = document.getElementById('tooltipAudio');

  highlights.forEach(span => {
    span.addEventListener('click', (e) => {
      e.stopPropagation();
      const wordText = span.getAttribute('data-word');
      const wData = WORDS_DATA.find(w => w.word.toLowerCase() === wordText.toLowerCase());
      if (wData && vocabTooltip) {
        tooltipWord.textContent = wData.word;
        tooltipMeaning.textContent = wData.simple;
        tooltipDef.textContent = wData.definition;
        tooltipAudio.setAttribute('data-word', wData.word);
        
        // Position tooltip
        const rect = span.getBoundingClientRect();
        vocabTooltip.style.left = Math.max(10, rect.left + window.scrollX - (vocabTooltip.offsetWidth / 2) + (rect.width / 2)) + 'px';
        vocabTooltip.style.top = (rect.top + window.scrollY - vocabTooltip.offsetHeight - 10) + 'px';
        
        vocabTooltip.classList.add('active');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (vocabTooltip && !e.target.classList.contains('vocab-highlight') && !vocabTooltip.contains(e.target)) {
      vocabTooltip.classList.remove('active');
    }
  });
}

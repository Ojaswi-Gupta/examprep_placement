// js/features/bookmarks.js
import { toggleBookmark, isBookmarked } from '../data/state.js';

export function setupBookmarks(cardElement, wordData) {
  // Add a bookmark icon to the card
  const header = cardElement.querySelector('.word-header');
  if (!header) return;

  const starBtn = document.createElement('button');
  starBtn.className = 'bookmark-btn';
  starBtn.innerHTML = isBookmarked(wordData.id) ? '⭐' : '☆';
  starBtn.style.background = 'none';
  starBtn.style.border = 'none';
  starBtn.style.cursor = 'pointer';
  starBtn.style.fontSize = '1.2rem';
  starBtn.style.marginLeft = 'auto';

  starBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent opening the modal
    const bookmarked = toggleBookmark(wordData.id);
    starBtn.innerHTML = bookmarked ? '⭐' : '☆';
  });

  header.appendChild(starBtn);
}

// js/features/bookmarks.js
import { toggleBookmark, isBookmarked } from '../data/state.js';

export function setupBookmarks(cardElement, wordData) {
  // Add a bookmark icon to the card
  const header = cardElement.querySelector('.word-header');
  if (!header) return;

  const starBtn = document.createElement('button');
  starBtn.className = 'bookmark-btn';
  starBtn.innerHTML = isBookmarked(wordData.id) ? '⭐' : '☆';
  
  if (isBookmarked(wordData.id)) {
    starBtn.classList.add('active');
  }

  starBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent opening the modal
    const bookmarked = toggleBookmark(wordData.id);
    starBtn.innerHTML = bookmarked ? '⭐' : '☆';
    if (bookmarked) {
      starBtn.classList.add('active');
    } else {
      starBtn.classList.remove('active');
    }
  });

  header.appendChild(starBtn);
}

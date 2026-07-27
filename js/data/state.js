// js/data/state.js

// 1. Mastery Data
export let masteryData = JSON.parse(localStorage.getItem('placementPrepMastery')) || {};

export function saveMastery() {
  localStorage.setItem('placementPrepMastery', JSON.stringify(masteryData));
}

export function updateMastery(wordId, isCorrect) {
  if (!masteryData[wordId]) masteryData[wordId] = 0;
  if (isCorrect) {
    masteryData[wordId]++;
  } else {
    if (masteryData[wordId] >= 3) {
      masteryData[wordId]--;
    }
  }
  saveMastery();
}

// 2. Bookmarks
export let bookmarks = JSON.parse(localStorage.getItem('placementPrepBookmarks')) || [];

export function toggleBookmark(wordId) {
  if (bookmarks.includes(wordId)) {
    bookmarks = bookmarks.filter(id => id !== wordId);
  } else {
    bookmarks.push(wordId);
  }
  localStorage.setItem('placementPrepBookmarks', JSON.stringify(bookmarks));
  return bookmarks.includes(wordId);
}

export function isBookmarked(wordId) {
  return bookmarks.includes(wordId);
}

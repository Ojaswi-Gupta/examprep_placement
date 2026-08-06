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

// 3. Daily Challenge Streak
export let streakData = JSON.parse(localStorage.getItem('placementPrepStreak')) || {
  streak: 0,
  lastPlayedDate: null
};

export function updateStreak() {
  const today = new Date().toDateString(); // e.g. "Thu Aug 06 2026"
  
  if (streakData.lastPlayedDate === today) {
    // Already played today, no change
    return streakData.streak;
  }

  if (!streakData.lastPlayedDate) {
    // First time playing
    streakData.streak = 1;
  } else {
    // Check if yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (streakData.lastPlayedDate === yesterday.toDateString()) {
      streakData.streak++;
    } else {
      // Streak broken
      streakData.streak = 1;
    }
  }

  streakData.lastPlayedDate = today;
  localStorage.setItem('placementPrepStreak', JSON.stringify(streakData));
  
  // Update UI if element exists
  const streakEl = document.getElementById('dailyStreakCount');
  if (streakEl) {
    streakEl.textContent = streakData.streak + ' Day' + (streakData.streak > 1 ? 's' : '');
  }
  
  return streakData.streak;
}

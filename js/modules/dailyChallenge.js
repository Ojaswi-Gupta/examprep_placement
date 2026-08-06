// js/modules/dailyChallenge.js
import { WORDS_DATA } from '../data/words.js';
import { STORIES_DATA } from '../data/stories.js';
import { FORMULAS_DATA } from '../data/formulas.js';
import { EXAMPLES_DATA } from '../data/examples.js';
import { updateStreak } from '../data/state.js';

// Simple seeded PRNG (Mulberry32)
function mulberry32(a) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

// Generate a numeric seed from a string
function xmur3(str) {
  for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  return function() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  }
}

export function getDailyChallengeData() {
  const today = new Date().toDateString(); // e.g., "Fri Aug 07 2026"
  const seedGen = xmur3(today);
  const prng = mulberry32(seedGen());

  // Helper to shuffle an array using the PRNG
  function seededShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(prng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // 1. Get 5 random words
  const selectedWords = seededShuffle(WORDS_DATA).slice(0, 5);

  // 2. Get 1 random story
  const selectedStory = seededShuffle(STORIES_DATA)[0];

  // 3. Get 3 random math examples
  // First collect all formulas that have examples
  const mathCandidates = [];
  FORMULAS_DATA.forEach(cat => {
    cat.formulas.forEach(f => {
      if (EXAMPLES_DATA[f.title]) {
        mathCandidates.push({
          formula: f,
          example: EXAMPLES_DATA[f.title],
          category: cat.category
        });
      }
    });
  });

  const selectedMath = seededShuffle(mathCandidates).slice(0, 3);

  return {
    words: selectedWords,
    story: selectedStory,
    math: selectedMath
  };
}

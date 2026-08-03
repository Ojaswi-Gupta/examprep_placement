# Placement Prep Hub

A beautifully designed, highly interactive, and comprehensive web application tailored specifically for placement exam preparation. 

Originally built as a vocabulary learning tool, it has evolved into a complete **Single Page Application (SPA)** that covers Verbal Ability, Reading Comprehension, Quantitative Aptitude, and Logical Reasoning.

## 🏛️ Architectural Overview

The project has recently undergone a major architectural overhaul to ensure scalability, clean code, and blazing-fast performance:

- **Modular ES6 JavaScript:** The codebase is cleanly separated into modular components (`js/modules/`, `js/ui/`, `js/data/`). No spaghetti code.
- **Custom SPA Routing:** A lightweight custom router handles seamless navigation between views (Home, Vocabulary, Quizzes, Formulas, Reading) by toggling `.active-view` classes—without any page reloads.
- **Global Event Delegation:** All core interaction logic (like navigation and exiting quiz/study modes) is routed through global event listeners on the `document.body`. This guarantees UI stability and prevents broken buttons even if DOM elements are re-rendered.
- **State Persistence:** 100% client-side logic utilizing `localStorage` for saving mastery progress, bookmarks, and quiz scores. No databases or heavy frameworks required.

## 🚀 Features & Modules

### 📚 1. Vocabulary Hub
- **Curated Word List:** 79 essential placement words complete with simple meanings, formal definitions, and contextual examples.
- **Interactive Flashcards:** Click to flip cards and reveal detailed examples.
- **Text-to-Speech Audio:** Built-in pronunciation for every word (click the 🔊 icon).
- **Bookmarks:** Save difficult words you want to focus on by clicking the star (☆) icon.
- **Smart Search:** Instantly search words, meanings, or examples (press `/` to quick-focus).
- **Study Mode:** A distraction-free, full-screen learning interface with perfectly optimized bezel-to-bezel scaled flashcards and hidden navigation.

### 🎯 2. Dynamic Quizzing System
Test your knowledge with multiple question types (Meaning, Definition, Fill-in-the-blank, Synonyms, and Antonyms) across 7 dynamic modes:
1. **Full Quiz:** Test your knowledge on all words.
2. **Quick 10:** A fast-paced 10-question sprint.
3. **Time Attack:** Answer as many questions as you can in exactly 60 seconds.
4. **Pressure 20:** 20 questions with a strict 15-second time limit per question.
5. **Smart Review (SRS):** An intelligent Spaced Repetition System that *only* tests you on words you haven't mastered yet. Get a word right 3 times in quizzes to mark it as **"Mastered 🏆"**. If you get a mastered word wrong later, it degrades back into your review queue!
6. **Bookmarked:** A dedicated quiz mode to practice only the words you've starred.
7. **Story Mode:** Test your comprehension by filling in the blanks within a short generated story.

*Features deferred feedback toggles, detailed post-quiz breakdowns, and confetti celebration animations for perfect scores!*

### 📖 3. Reading Comprehension
- **Contextual Stories:** Read highly engaging, short generated stories designed to organically embed the exact vocabulary words from your list. 
- **Active Reading UI:** A beautifully formatted, distraction-free reading viewer that highlights vocabulary in context.

### 📐 4. Quants & Logical Reasoning
- **Formula Cheatsheets:** A categorized, easily scannable library of essential formulas and concepts for quantitative aptitude and reasoning logic.
- **Quick Reference:** Perfectly formatted layout for quick brushing up before an interview round.

## 🎨 UI/UX & Design

- **Glassmorphism Navbar:** A sleek, sticky navigation bar with background blur that gracefully floats above the content.
- **Adaptive Spacing:** Precisely engineered CSS padding algorithms (`padding-top: 110px` global offsets) guarantee that no content ever slides under the fixed navbar.
- **Responsive Fluid Grids:** The UI flawlessly adapts to any screen size, from ultra-wide desktop monitors to narrow mobile screens.
- **Micro-Animations:** Smooth CSS transitions on hover, layout shifts, and route changes to provide a premium software feel.

## 💻 Tech Stack

- **HTML5:** Semantic and accessible structure.
- **CSS3 (Vanilla):** Modern, dark-themed UI relying on CSS Variables (Custom Properties), Flexbox, and CSS Grid. 
- **Vanilla JavaScript:** Zero dependencies (aside from a lightweight confetti CDN). Fast, efficient, and native.

## 🛠️ How to Run Locally

Because this project is entirely built with standard web technologies, there is no complicated build step, dependency installation, or node server required.

1. Clone or download the repository.
2. Double-click on `index.html` to open it in your default web browser, OR serve it via a local python server for module support:
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.
4. That's it!

*(Note: The app saves your quiz scores and mastery data to your browser's Local Storage, meaning your progress is completely saved even if you close the tab!)*

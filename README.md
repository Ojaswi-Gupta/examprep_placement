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
- **Curated Word List:** 114 essential placement words complete with simple meanings, formal definitions, and contextual examples.
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

### 📅 4. Daily Mixed Challenge
- **Seeded Daily Content:** Features a custom Seeded Pseudo-Random Number Generator (Mulberry32) tied to the current date. Every user receives the exact same randomized set of 5 advanced vocab words, 1 reading comprehension passage, and 3 tough math questions every day, making it perfect for competitive peer study.
- **Interactive Story Blanks:** Fill in the blanks of the daily reading comprehension passage using an interactive, clickable word bank.
- **Smart Math Evaluation:** Math questions in the daily challenge feature intelligent text inputs. The system dynamically reads the correct answer format (integers, fractions, decimals, ratios, or days of the week), adjusts placeholder hints accordingly, and auto-evaluates your typed answer against the hidden solution using advanced regex parsing.
- **Streak Tracking:** Keeps track of your daily challenge completions globally using `localStorage`.

### 📐 5. Quants & Logical Reasoning
- **Interactive Scratchpad & Calculator:** A global, draggable, floating glassmorphism widget that allows you to doodle math steps or crunch numbers without leaving the page or needing physical paper.
- **Drill-Down Topic Dashboard:** A clean, icon-based grid dashboard allowing you to select a specific aptitude topic (like "Time & Work") and drill down into only the relevant formulas, eliminating cognitive overload.
- **Textbook-Quality Math:** 100% of the mathematical formulas are beautifully rendered using the **KaTeX engine** (via dynamic CDN) and standard LaTeX syntax. Fractions, exponents, and square roots are stacked vertically just like a printed textbook.
- **Formula Cheatsheets:** A categorized library of 130+ essential advanced formulas (spanning Number Theory, Circle Geometry, Calendars, Clocks, etc.) perfectly tailored for CAT, aptitude tests, and technical company exams.
- **Rich SVG Visualizations:** Custom, mathematically accurate SVG diagrams generated inline to explicitly detail concepts like Syllogisms, Relative Speed, Clock Angles, Pipe & Cisterns, Apollonius Theorem, Calendar Repetition, and Advanced Circle Geometry.
- **Conceptual Step-by-Step Examples:** Expandable dropdowns attached to formulas containing detailed, step-by-step word problem walkthroughs showing exactly how to apply the formula to solve tough questions.
- **Real-Time Instant Search:** A built-in search bar in the Formulas tab that filters through all 130+ formulas, definitions, and types instantly across all categories.

### 🤝 6. Technical Interview Prep
- **Extensive Q&A Library:** Over 200 curated technical interview questions categorized into core roles: AI/Machine Learning 🤖, Data Analyst 📊, Software Engineering 💻, and System Design 🏗️.
- **Role-Based Filtering:** Easily toggle between roles to see questions specific to that domain (e.g. ML Fundamentals, SQL & Databases, OS & Memory, Scalability).
- **Difficulty Badges:** Questions are tagged with difficulty levels (Basic, Intermediate, Advanced) and color-coded for quick scanning.
- **Interactive Accordions:** Clean UI where questions act as clickable headers that expand to reveal detailed, thorough answers.

## 🗂️ Directory Map

```text
.
├── README.md               # Project documentation
├── index.html              # The single-page application entry point
├── style.css               # Global styles, variables, and responsive grids
└── js/
    ├── main.js             # Core SPA router and global event delegator
    ├── data/               # Static data stores
    │   ├── diagrams.js     # Mathematical SVG definitions
    │   ├── examples.js     # Step-by-step formula word problems
    │   ├── formulas.js     # Formula database with KaTeX syntax
    │   ├── interview.js    # 200+ technical interview questions
    │   ├── state.js        # LocalStorage state management
    │   ├── stories.js      # Reading comprehension passages
    │   └── words.js        # Vocabulary dictionary
    ├── features/
    │   └── bookmarks.js    # Bookmark toggling logic
    ├── modules/            # Core logical engines
    │   ├── dailyChallenge.js
    │   ├── dailyQuiz.js
    │   ├── flashcards.js   # Flashcard flip and speak logic
    │   ├── quiz.js         # Adaptive quiz engine and scoring
    │   └── reading.js      # Story generation and UI logic
    └── ui/                 # View-specific DOM manipulators
        ├── cards.js        # Vocabulary card rendering
        ├── formulas.js     # Formula dashboard rendering
        ├── interview.js    # Interview accordion rendering
        ├── pomodoro.js     # Draggable timer widget
        └── scratchpad.js   # Floating math scratchpad
```

## 🎨 UI/UX & Design

- **Lightweight Feature Carousel:** A clean, horizontal auto-scrolling carousel on the home page highlighting app features without cluttering the screen or relying on heavy third-party libraries.
- **Draggable Pomodoro Timer:** A tiny, unobtrusive 25-minute focus timer widget that can be opened, dragged anywhere on the screen, and minimized to a pill shape while studying. Features an automatic fullscreen prompt for maximum focus.
- **Glassmorphism Elements:** A sleek, sticky navigation bar with background blur that gracefully floats above the content, accompanied by a clean, minimal footer.
- **Adaptive Spacing:** Precisely engineered CSS padding algorithms (`padding-top: 110px` global offsets) guarantee that no content ever slides under the fixed navbar.
- **Responsive Fluid Grids:** The UI flawlessly adapts to any screen size, from ultra-wide desktop monitors to narrow mobile screens.
- **Micro-Animations:** Smooth CSS transitions on hover, layout shifts, and route changes to provide a premium software feel.

## 💻 Tech Stack

- **HTML5:** Semantic and accessible structure.
- **CSS3 (Vanilla):** Modern, dark-themed UI relying on CSS Variables (Custom Properties), Flexbox, and CSS Grid. 
- **Vanilla JavaScript:** Zero heavy frameworks. Uses ES6 modules and relies on lightweight CDNs (KaTeX for math rendering, Canvas-Confetti for celebrations) dynamically injected for maximum performance.

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

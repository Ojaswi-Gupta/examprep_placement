# Placement Prep Hub

A beautifully designed, highly interactive, and comprehensive web application tailored specifically for placement exam preparation. 

Originally built as a vocabulary learning tool, it has evolved into a complete **Single Page Application (SPA)** that covers Verbal Ability, Reading Comprehension, Quantitative Aptitude, Logical Reasoning, Technical Interview Prep (710+ questions), and HR/Behavioral Interview Practice.

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

### 🤝 6. Technical Interview Prep — 780+ Questions
- **Massive Q&A Library:** 780+ curated interview questions spanning **11 roles** and **50+ topics**, covering everything from core CS to HR behavioral rounds to project-specific deep dives.
- **Role-Based Filtering:** Drill down into specific roles to focus your preparation:

| Role | Icon | Questions | Key Topics |
|---|---|---|---|
| AI / Machine Learning | 🤖 | 200 | ML Fundamentals, Neural Networks, NLP, RAG, Computer Vision, Model Evaluation |
| Full Stack & Web Dev | 🌐 | 80 | React.js, Node.js, TypeScript, WebRTC, WebSockets, Auth & Security, CI/CD |
| AI/ML & GenAI (Resume) | 🧠 | 60 | RAG Deep Dive, Fine-Tuning vs Prompt Engineering, NLP Pipelines, Hugging Face |
| Docker, Cloud & DevOps | ☁️ | 40 | Docker, AWS/Azure, Firebase/Supabase, DevOps Practices |
| AI/ML Deep Dive | 🔬 | 90 | Classical ML, Deep Learning Advanced, GenAI, MLOps, AI Ethics, Math for ML, Agentic AI |
| Software Engineering Deep | ⚙️ | 80 | Java, Python, Advanced DSA Patterns, Concurrency, Testing, Architecture, Security |
| System Design Advanced | 🛠️ | 60 | Distributed Systems, Scalability, API Design, Observability, Microservices |
| Data Analyst | 📊 | — | SQL, Statistics, Data Visualization, ETL, Business Metrics |
| HR & Behavioral Interview | 🎯 | 70 | STAR Method, Tricky Scenarios, Teamwork, Leadership, Stress Management |
| Aptitude & Logical Reasoning | 🧩 | 30 | Puzzles & Brain Teasers, Guesstimates, Situational Judgment & Ethics |
| **Personal Projects Deep Dive** | 🚀 | **68** | **GistProbe (NLP, RAG, MLOps), Vibe Connect (WebRTC, Firebase), Quiz Portal (Proctoring, Prisma)** |

- **Difficulty Badges:** Every question is tagged with difficulty levels (Basic, Intermediate, Advanced) and color-coded for quick scanning.
- **Interactive Accordions:** Clean UI where questions act as clickable headers that expand to reveal detailed, thorough answers.
- **Global Search:** Search across all 780+ questions instantly by keyword.
- **Resume-Tailored:** Questions specifically mapped to resume projects (Vibe Connect, GistProbe, Quiz Portal) and technologies (WebRTC, FAISS, Prisma, Docker).
- **Project Deep Dive:** 68 highly specific questions covering every architectural choice, tiny implementation detail, and corner case across all 3 major resume projects.

### 💻 7. Programming & MCQs — Syntax & Quizzes
- **Dynamic Tabbed Interface:** A clean, full-width UI dynamically driven by the data architecture. SQL and Python feature **📖 Syntax & Concepts** and **🎯 Practice MCQs**, while Java renders **5 distinct tabs** including 🏗️ Data Structures and 0️⃣1️⃣ Bit Manipulation.
- **Deep-Dive Concepts:** Advanced, placement-level coverage for core programming languages:
  - **🐍 Python:** Decorators, Generators, GIL, Memory Management, Dunder methods, comprehensions, and basic algorithm implementations (Fibonacci, Factorial, Prime).
  - **☕ Java:** Multithreading, OOP traps, extensive Data Structures methods (Collections, Arrays, Maps), String manipulation, and Bitwise operations (Even/Odd checks, Power of 2).
  - **🛢️ SQL:** Window functions (`ROW_NUMBER`, `RANK`), CTEs, Advanced Joins, `COALESCE`, Indexing, and Date/Time interval arithmetic.
- **Interactive MCQ Engine:** Test your knowledge with tricky, output-based questions. Clicking an option provides immediate visual feedback (✅/❌) along with a detailed explanation for the correct answer.

## 🗂️ Directory Map

```text
.
├── README.md                    # Project documentation
├── index.html                   # Single-page application entry point
├── style.css                    # Global styles, variables, responsive grids
├── server.py                    # No-cache dev server for local development
└── js/
    ├── main.js                  # Core SPA router & global event delegator
    ├── data/                    # Static data stores (780+ interview Qs)
    │   ├── words.js             # Vocabulary dictionary (114 words)
    │   ├── formulas.js          # Formula database with KaTeX syntax
    │   ├── examples.js          # Step-by-step formula word problems
    │   ├── diagrams.js          # Mathematical SVG definitions
    │   ├── stories.js           # Reading comprehension passages
    │   ├── state.js             # LocalStorage state management
    │   ├── interview.js         # Core interview Qs (AI/ML, Data, SWE, SysDesign)
    │   ├── interview_resume.js  # Resume-specific Qs (React, Node, WebRTC, Auth)
    │   ├── interview_resume2.js # Resume-specific Qs (RAG, Docker, Cloud)
    │   ├── interview_deep1.js   # Deep dive (Classical ML, GenAI, MLOps, Ethics)
    │   ├── interview_deep2.js   # Deep dive (Java, Python, DSA, Distributed Sys)
    │   ├── interview_hr.js      # HR, behavioral, puzzles, guesstimates
    │   ├── programming.js       # SQL, Python, Java syntax & MCQs data
    │   ├── java/                # Modular Java data structures
    │   │   ├── data_structures.js
    │   │   ├── strings.js
    │   │   └── bit_manipulation.js
    │   └── projects/            # Resume project deep-dive questions
    │       └── interview_projects.js  # 68 Qs (GistProbe, Vibe Connect, Quiz Portal)
    ├── features/
    │   └── bookmarks.js         # Bookmark toggling logic
    ├── modules/                 # Core logical engines
    │   ├── dailyChallenge.js    # Seeded daily mixed challenge
    │   ├── dailyQuiz.js         # Daily quiz mode
    │   ├── flashcards.js        # Flashcard flip and speak logic
    │   ├── quiz.js              # Adaptive quiz engine and scoring
    │   └── reading.js           # Story generation and UI logic
    └── ui/                      # View-specific DOM manipulators
        ├── cards.js             # Vocabulary card rendering
        ├── formulas.js          # Formula dashboard rendering
        ├── interview.js         # Interview accordion UI (merges all data)
        ├── programming.js       # Programming tabs & MCQ rendering
        ├── pomodoro.js          # Draggable timer widget
        └── scratchpad.js        # Floating math scratchpad
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

No build step, no `npm install`, no frameworks required.

1. Clone the repository:
   ```bash
   git clone https://github.com/Ojaswi-Gupta/examprep_placement.git
   cd examprep_placement
   ```
2. Start the no-cache dev server (recommended):
   ```bash
   python3 server.py
   ```
   Or use the standard Python server:
   ```bash
   python3 -m http.server 9000
   ```
3. Open `http://localhost:9000` in your browser.
4. That's it!

> **Note:** ES6 modules require a local server — opening `index.html` directly via `file://` will not work due to CORS restrictions.

*(The app saves your quiz scores, mastery data, and streaks to your browser's Local Storage — your progress persists even if you close the tab!)*

## 📊 Content Stats

| Content Type | Count |
|---|---|
| Vocabulary Words | 114 |
| Math Formulas | 130+ |
| Interview Questions | 780+ |
| Interview Roles | 11 |
| Programming Languages | 3 (SQL, Python, Java) |
| Programming Syntax/Concepts | 60+ |
| Programming MCQs | 30+ |
| Quiz Modes | 7 |
| Reading Passages | 10+ |

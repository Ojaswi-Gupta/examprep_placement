export const INTERVIEW_PROJECTS_DATA = [
  {
    role: "Personal Projects Deep Dive (Resume) 🚀",
    icon: "🚀",
    topics: [
      {
        topic: "GistProbe (NLP & MLOps)",
        questions: [
          // Original Questions
          {
            q: "Why did you choose a decoupled microservice architecture for GistProbe instead of a monolith?",
            a: "Free-tier hosting platforms like Render have strict 512MB RAM limits. Heavy NLP models (PyTorch, spaCy, scikit-learn) and Playwright easily exceed this. By splitting the frontend (Flask/Render) from the heavy ML worker (FastAPI/HuggingFace Spaces with 16GB RAM), I ensured scalable, crash-free execution while keeping the UI highly responsive.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you dynamically determine the optimal 'k' for K-Means clustering instead of hardcoding it?",
            a: "Instead of hardcoding a 'k' value, the ML pipeline dynamically iterates k from 2 to 10. For each iteration, it computes the Silhouette Score. The system automatically selects the k-value that yields the highest Silhouette Score for that specific webpage, ensuring mathematically optimal semantic boundaries.",
            difficulty: "Advanced"
          },
          {
            q: "How did you handle near-duplicate content scraped from web pages?",
            a: "I implemented a deduplication filter using `SequenceMatcher` from the `difflib` library. It calculates a string similarity ratio between text nodes. Any paragraph with >85% overlap with an existing node is discarded, which prevents the K-Means algorithm from generating skewed, over-weighted clusters.",
            difficulty: "Intermediate"
          },
          {
            q: "Explain your Retrieval-Augmented Generation (RAG) pipeline in GistProbe.",
            a: "The cleaned text is chunked and embedded using Sentence-Transformers, then indexed into a local FAISS Vector DB for fast mathematical similarity search. When a user asks a question, the query is vectorized, the top-k most relevant chunks are retrieved from FAISS, and injected into the Groq API (Llama-3.1) prompt context to generate hallucination-free answers.",
            difficulty: "Advanced"
          },
          {
            q: "How did you implement the 'Debate Mode' (Media Analyst) feature?",
            a: "The system crawls two URLs concurrently and runs the full NLP pipeline on both to extract entities and sentiment. Both datasets are then fed into the Llama-3.1 context window with a custom system prompt acting as a Media Analyst, forcing the LLM to contrast the tone, bias, and framing differences between the two sources.",
            difficulty: "Advanced"
          },
          {
            q: "What role does Weights & Biases (WandB) play in your pipeline?",
            a: "WandB is integrated as an MLOps telemetry tool. During the K-Means clustering loops, it securely logs the tested k-values, the resulting Silhouette Scores, and the vocabulary sizes. This allows me to track model performance and optimization metrics visually across different scraping runs.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you build the Interactive Entity Knowledge Graph?",
            a: "I used the `en_core_web_sm` model in spaCy to perform Named Entity Recognition (NER), extracting People, Organizations, and Locations. These entities are then passed to the frontend and rendered using `vis.js`, which applies a physics engine to group nodes based on sentence co-occurrences.",
            difficulty: "Intermediate"
          },
          {
            q: "How does the background automated sentiment tracking work?",
            a: "I used Flask-APScheduler to run asynchronous background jobs. It queries the SQLite database for user-subscribed URLs based on their frequency (e.g., daily), triggers the FastAPI crawler endpoint to re-analyze the page, and updates the historical sentiment and subjectivity scores, which are then graphed using Chart.js.",
            difficulty: "Advanced"
          },
          // New Expanded Questions
          {
            q: "Why did you use Playwright alongside BeautifulSoup instead of just BeautifulSoup?",
            a: "BeautifulSoup cannot execute JavaScript, meaning it fails to scrape modern SPAs (Single Page Applications) or content loaded dynamically. Playwright launches a headless Chromium browser to fully render the DOM, and then passes the loaded HTML to BeautifulSoup for efficient parsing.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you clean the raw text extracted from the DOM?",
            a: "I used a combination of regular expressions to strip non-alphanumeric noise and standard HTML boilerplate. Then, I used NLTK for tokenization and stop-word removal to normalize the dataset before passing it to the TF-IDF vectorizer.",
            difficulty: "Basic"
          },
          {
            q: "What is TF-IDF and why did you apply it before K-Means?",
            a: "TF-IDF (Term Frequency-Inverse Document Frequency) vectorizes text into numerical arrays by weighing the importance of a word relative to the document. K-Means requires numerical vectors to compute mathematical distances, making TF-IDF a necessary prerequisite step.",
            difficulty: "Basic"
          },
          {
            q: "How does the Sentiment Analysis component function in GistProbe?",
            a: "I utilized the `TextBlob` library to process the extracted sentences. TextBlob uses a lexicon-based approach to assign two metrics: Polarity (ranging from -1 to 1 for negative/positive sentiment) and Subjectivity (0 to 1 for objective vs. opinionated text).",
            difficulty: "Intermediate"
          },
          {
            q: "How is the data structured in the SQLite Database for this project?",
            a: "The DB uses SQLAlchemy with 3 main tables: `User` (OAuth details), `URLSubscription` (for the background scheduler), and `ProbeResult`. The `ProbeResult` table caches expensive ML outputs as JSON blobs (clusters, entities) for instant UI loading without rerunning the pipeline.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you implement Google OAuth2 in the Flask frontend?",
            a: "I used the `Authlib` package to integrate Google OAuth2. It handles the redirect flow to Google's consent screen, retrieves the access token, and fetches the user's profile info (email, name) which is then stored in the `User` table to maintain session states.",
            difficulty: "Intermediate"
          },
          {
            q: "What is the purpose of the `/api/v1/analyze` REST endpoint?",
            a: "It acts as an enterprise integration layer. By exposing the core NLP pipeline as a RESTful API, non-technical users or external systems can integrate the analysis directly into tools like MS Power Automate or SharePoint workflows.",
            difficulty: "Basic"
          },
          {
            q: "How did you generate downloadable audio summaries?",
            a: "I used the `gTTS` (Google Text-to-Speech) API. After the Llama-3 agent generates the executive summary, the text is passed to gTTS to synthesize an MP3 file. The Flask backend temporarily saves the file, serves it to the client for playback, and then cleans it up.",
            difficulty: "Basic"
          },
          {
            q: "Why did you choose Llama-3.1 via Groq instead of OpenAI's GPT-4?",
            a: "Groq utilizes LPU (Language Processing Unit) inference engines which provide incredibly fast token generation times compared to standard GPUs. Using Llama-3.1 on Groq allowed me to deliver near-instantaneous responses for the Chat and Debate modes without the high latency typical of heavy LLMs.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Vibe Connect (WebRTC & WebSockets)",
        questions: [
          // Original Questions
          {
            q: "Why did you use Firebase Firestore for WebRTC signaling instead of a traditional WebSocket server (like Socket.IO)?",
            a: "Firestore is serverless and highly scalable out of the box. By using Firestore document listeners, clients can react to changes in real-time. The Caller writes an SDP offer to a document, the Callee reads it and writes an answer, and they exchange ICE candidates via sub-collections, entirely eliminating the need to deploy and manage a custom Node.js WebSocket server.",
            difficulty: "Advanced"
          },
          {
            q: "What is WebRTC and what are the main APIs you utilized?",
            a: "WebRTC is an open framework for real-time peer-to-peer media streaming. I primarily used `getUserMedia` to access the local camera/mic, and `RTCPeerConnection` to negotiate the connection, generate SDP offers/answers, and stream the actual media tracks directly between browsers.",
            difficulty: "Intermediate"
          },
          {
            q: "Explain the matchmaking lifecycle in Vibe Connect.",
            a: "When a user clicks Start, the system queries the Firestore `waiting` collection (FIFO). If it's empty, the user creates a document and waits as the 'Caller'. If a document exists, the second user (the 'Callee') deletes the document to claim the match, and uses that document's ID as the shared Room ID to begin WebRTC signaling.",
            difficulty: "Advanced"
          },
          {
            q: "What are STUN and TURN servers, and why did you need them?",
            a: "Since peers are often behind NATs or firewalls, they don't know their public IP. A STUN server helps a browser discover its public IP. If direct P2P fails (e.g., due to symmetric NATs or strict corporate firewalls), a TURN server acts as a fallback to manually relay the media traffic. I integrated Metered.ca to handle this NAT traversal.",
            difficulty: "Advanced"
          },
          {
            q: "How did you implement Anonymous Authentication?",
            a: "I used Firebase Anonymous Auth. This allows users to jump straight into a call with zero friction (no sign-ups), while still providing a secure, unique UID per session. This UID is used to securely scope Firestore reads/writes via security rules.",
            difficulty: "Intermediate"
          },
          {
            q: "What happens technically when a user clicks the 'Next / Skip' button?",
            a: "The `RTCPeerConnection` is closed, remote media tracks are stopped, and all active Firestore listeners for that specific Room ID are unsubscribed to prevent memory leaks. Immediately after cleanup, the application re-enters Phase 1 (Matchmaking) to find a new peer.",
            difficulty: "Intermediate"
          },
          {
            q: "Why did you choose Next.js App Router for this project?",
            a: "Next.js provides excellent developer experience, out-of-the-box TypeScript support, and seamless Vercel deployment. Even though WebRTC is strictly a client-side API, Next.js handles the UI, routing, and environment variable security flawlessly.",
            difficulty: "Basic"
          },
          // New Expanded Questions
          {
            q: "What is an SDP Offer and Answer in WebRTC?",
            a: "SDP (Session Description Protocol) is a format describing multimedia sessions. The Caller generates an Offer containing details about its media capabilities (codecs, resolutions) and network info. The Callee receives it and generates an Answer with its own corresponding capabilities to establish common ground.",
            difficulty: "Advanced"
          },
          {
            q: "What are ICE Candidates and why are they exchanged dynamically?",
            a: "ICE (Interactive Connectivity Establishment) candidates represent potential network routing paths (IPs and ports) a peer can use to communicate. Because finding the best path takes time, WebRTC sends candidates 'dynamically' as they are discovered (Trickle ICE) rather than waiting for all of them, speeding up connection times.",
            difficulty: "Advanced"
          },
          {
            q: "How does your Firestore schema handle the WebRTC handshake?",
            a: "There is a `rooms` collection. The Caller creates a room doc and saves the `offer` object to it. The Callee updates the doc with the `answer` object. ICE candidates are written into two sub-collections: `callerCandidates` and `calleeCandidates`, which both peers listen to.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you handle state management for the video UI (Mute/Camera Off)?",
            a: "I used standard React state combined with WebRTC's `MediaStreamTrack` API. Toggling mute simply sets the `enabled` property of the `audioTrack` to false. The same logic applies to the `videoTrack` for turning the camera off.",
            difficulty: "Intermediate"
          },
          {
            q: "Why use Tailwind CSS v4 in this project?",
            a: "Tailwind's utility-first approach allowed me to build the responsive layout (floating picture-in-picture local video, fullscreen remote video) extremely quickly without writing custom CSS files. It pairs perfectly with React component architecture.",
            difficulty: "Basic"
          },
          {
            q: "What happens if two users try to claim the exact same 'waiting' document simultaneously?",
            a: "Firestore handles atomic operations. If a race condition occurs, only one client successfully deletes the document and becomes the Callee. The other client will see the document no longer exists and must restart the matchmaking query.",
            difficulty: "Advanced"
          },
          {
            q: "How did you secure the Firestore database using Security Rules?",
            a: "I wrote rules ensuring that `allow read, write: if request.auth != null;`. Because users authenticate via Firebase Anonymous Auth, only active sessions can interact with the signaling database, preventing unauthenticated external spam.",
            difficulty: "Intermediate"
          },
          {
            q: "Why deploy on Vercel?",
            a: "Vercel integrates seamlessly with Next.js, providing zero-configuration deployments. Pushing code to GitHub automatically triggers a build and deployment, ensuring CI/CD best practices without manual infrastructure management.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Quiz Portal (Proctoring & System Design)",
        questions: [
          // Original Questions
          {
            q: "Your portal uses a '100ms Selection Cleansing Loop'. Why did you build this, and how does it work?",
            a: "To prevent students from copying text or using drag-to-cheat browser extensions, I created a background hook that fires every 100ms. It constantly calls `window.getSelection().removeAllRanges()`, making it physically impossible to highlight even a single character during an active exam.",
            difficulty: "Advanced"
          },
          {
            q: "Why do you use a 300ms polling loop for Fullscreen detection instead of the standard `fullscreenchange` event listener?",
            a: "Modern desktop browsers suppress standard keydown events for the 'Escape' key during fullscreen exits for security reasons, making event listeners unreliable. By utilizing an active background thread that polls `document.fullscreenElement` every 300ms, I can instantly detect when a user drops out of fullscreen and register a violation strike.",
            difficulty: "Advanced"
          },
          {
            q: "How does your system prevent false 'cheating strikes' when the browser asks for Camera/Mic permissions?",
            a: "The proctoring engine enters a dormant state when the permission prompt mounts. It holds all focus interceptors and selection cleaners offline until the promise resolves, plus an additional 1.2s delay to allow the browser window to restore focus organically, completely eliminating false positives.",
            difficulty: "Advanced"
          },
          {
            q: "How did you prevent client-side timer manipulation?",
            a: "Standard JS timers can be hacked via console or paused. My system relies on a backend-driven synchronization model. The server generates a persistent `startTime + duration` timestamp. On every client heartbeat or refresh, the backend dynamically computes the remaining time. If it hits 0, the server forcefully grades the attempt, ignoring client state.",
            difficulty: "Advanced"
          },
          {
            q: "How did you implement the clipboard shielding mechanism?",
            a: "I intercepted the standard `copy`, `cut`, and `paste` event buffers and explicitly called `preventDefault()`. Additionally, I overrode the modern `navigator.clipboard.writeText` API to discard any extension-based writes, instead pushing a warning string like 'COPYING PROHIBITED' into the clipboard buffer.",
            difficulty: "Intermediate"
          },
          {
            q: "What is Prisma and why did you choose it over writing raw SQL or using Sequelize?",
            a: "Prisma is a modern, type-safe ORM. I chose it because of its intuitive schema definition language and automated migration generation. It handles cascading deletes gracefully (e.g., deleting a Quiz automatically purges its Questions and Attempts), and generates a fully typed client which catches database errors at compile time rather than runtime.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you implement the dynamic PDF certificate generation?",
            a: "I used the `pdfkit` library on the Node.js backend. When a student passes an assessment (>= 60%), the server compiles an A4 landscape PDF on the fly using vector geometry. It is secured via JWT authenticated download tokens in the middleware to prevent unauthorized certificate access.",
            difficulty: "Intermediate"
          },
          {
            q: "How do you handle Admin grading integrity for rolling submissions?",
            a: "I implemented a `releaseAnswers` flag in the SQLite database. Admins can toggle this flag to suppress instant answer visibility after a student submits. This guarantees exam integrity, allowing the admin to release all correct answers globally only after the entire cohort has completed the test.",
            difficulty: "Intermediate"
          },
          // New Expanded Questions
          {
            q: "Explain the visual implementation of the 'Frosted Selection & Blur Lockout Workspace'.",
            a: "While permissions are pending or if a cheating strike occurs, the entire question bank container receives a CSS `filter: blur(12px)`. A centered glassmorphic overlay is rendered stating 'Secure Workspace Locked'. The exact millisecond the system state re-secures, the blur is removed, ensuring test content is completely invisible when unproctored.",
            difficulty: "Intermediate"
          },
          {
            q: "What constitutes a 'Disqualification' in your anti-cheat engine?",
            a: "The engine operates on a 3-strike system. A strike is added for losing window focus, exiting fullscreen, or triggering keyboard shortcuts (F12, Cmd+Opt+I). Upon hitting 3 strikes, or failing to re-enter fullscreen within 5 seconds, the backend immediately force-grades the attempt as 'FORCE_SUBMITTED' and permanently locks the student out.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you integrate 3D WebGL backgrounds in a React application?",
            a: "I used React Three Fiber (R3F) and Drei. R3F allows you to write Three.js WebGL scenes declaratively as React components. I built a particle constellation scene that responds to mouse movements (parallax effect) to provide a premium, modern aesthetic without heavily impacting performance.",
            difficulty: "Advanced"
          },
          {
            q: "How does the 'Dual-Axis Composed Analytics' chart work on the Admin dashboard?",
            a: "I used a charting library (like Recharts) to plot two distinct Y-axes. The left axis maps Pass Rates (%) using a vertical gradient bar, while the right axis maps Average Scores (Points) using an overlaid glowing trend line. This allows admins to visually correlate passing difficulty with average performance simultaneously.",
            difficulty: "Intermediate"
          },
          {
            q: "What is Role-Based Access Control (RBAC) and how is it implemented?",
            a: "RBAC restricts system access based on user roles (STUDENT vs ADMIN). I implemented it via JWTs. Upon login, the user's role is embedded in the JWT payload. The Express middleware decodes the token on every protected route and explicitly rejects requests if a STUDENT tries to access an ADMIN-only endpoint.",
            difficulty: "Advanced"
          },
          {
            q: "How do you securely handle passwords in the database?",
            a: "Passwords are never stored in plaintext. I use the `bcrypt` library to hash passwords with a salt before saving them to the database. During login, `bcrypt.compare()` is used to verify the incoming plaintext password against the stored hash.",
            difficulty: "Basic"
          },
          {
            q: "What is a 'Cohort' in your database schema, and why is it useful?",
            a: "A Cohort represents a specific classroom or section (e.g., 'Computer Science - Section A'). By linking Users and Quizzes to specific Cohorts via Foreign Keys, the application isolates exam access. Students only see and attempt quizzes explicitly assigned to their Cohort.",
            difficulty: "Intermediate"
          },
          {
            q: "How does the 'Student Answer Audit Modal' function?",
            a: "It fetches a detailed join query via Prisma connecting `Attempt`, `AttemptAnswer`, and `Question`. The modal displays the student's selected option alongside the correct answer. It highlights correct choices in green and incorrect ones in red, allowing admins to manually review the exact path a student took.",
            difficulty: "Intermediate"
          },
          {
            q: "Why did you use Vite over Create React App (CRA)?",
            a: "Vite uses native ES modules to serve code during development, making the dev server start almost instantly regardless of app size. It uses Rollup for production builds, which is much faster and more configurable than Webpack (which CRA relies on).",
            difficulty: "Basic"
          },
          {
            q: "How do you handle cascading deletes in Prisma?",
            a: "In the Prisma schema, relations are defined with `onDelete: Cascade`. This means if an Admin deletes a Quiz, the database engine automatically deletes all related Questions and Student Attempts, maintaining referential integrity without writing manual cleanup code.",
            difficulty: "Intermediate"
          }
        ]
      }
    ]
  }
];

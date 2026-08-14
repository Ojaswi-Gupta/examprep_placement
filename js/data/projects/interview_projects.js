export const INTERVIEW_PROJECTS_DATA = [
  {
    role: "Personal Projects Deep Dive (Resume) 🚀",
    icon: "🚀",
    topics: [
      {
        topic: "GistProbe (NLP & MLOps)",
        questions: [
          // === ORIGINAL QUESTIONS ===
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
          // === SECOND BATCH ===
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
          },
          // === THIRD BATCH — EVERY CORNER DETAIL ===
          {
            q: "How does the Flask frontend communicate with the FastAPI ML worker?",
            a: "The Flask app makes HTTP requests (using the `requests` library) to the FastAPI worker endpoints like `/probe`, `/retrieve`, and `/similarity`. The ML_API_URL is configured via environment variables, defaulting to `http://localhost:8000` for local development and pointing to the HuggingFace Spaces URL in production.",
            difficulty: "Intermediate"
          },
          {
            q: "Why did you choose FastAPI over Flask for the heavy ML worker?",
            a: "FastAPI is built on Starlette and supports asynchronous request handling natively. For a heavy compute worker that needs to handle concurrent scraping and ML inference requests without blocking, FastAPI's async capabilities and automatic OpenAPI documentation made it the ideal choice over Flask.",
            difficulty: "Advanced"
          },
          {
            q: "How does the Playwright scraper handle anti-bot measures?",
            a: "The scraper uses rotating user-agents to mimic different browsers and bypass basic bot-detection mechanisms. Playwright also renders the full page including JavaScript execution, which defeats simple server-side checks that block headless browsers based on missing JS capabilities.",
            difficulty: "Intermediate"
          },
          {
            q: "Why did you choose Silhouette Score over the Elbow Method for K-Means optimization?",
            a: "The Elbow Method requires visual inspection of a plot to subjectively identify a bend, making it impossible to automate. Silhouette Score produces a single numerical value (ranging -1 to 1) that can be programmatically compared across iterations, enabling fully automated k-selection without human intervention.",
            difficulty: "Advanced"
          },
          {
            q: "What is FAISS and why did you use it instead of a traditional database for vector search?",
            a: "FAISS (Facebook AI Similarity Search) is a library optimized for extremely fast nearest-neighbor searches over dense vectors. Traditional SQL databases cannot efficiently compute cosine similarity across high-dimensional embedding vectors. FAISS uses optimized index structures (like IVF or flat L2) for sub-millisecond retrieval.",
            difficulty: "Advanced"
          },
          {
            q: "How does the 'Fact Check Mode' work in the Chat feature?",
            a: "When Fact Check Mode is enabled, the system prompt sent to Llama-3.1 is modified to instruct the LLM to cross-reference claims in the scraped content against its pre-trained world knowledge. The AI explicitly flags statements that may be misleading, biased, or factually incorrect.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you implement the WordCloud visualization?",
            a: "I used a TF-IDF-weighted approach to determine the most important terms from the scraped content. The `wordcloud_gen.py` module generates a visual representation where word size is proportional to its TF-IDF weight, giving users an instant visual summary of dominant themes on the page.",
            difficulty: "Basic"
          },
          {
            q: "How does the Business Analyst Excel (.xlsx) export feature work?",
            a: "After the NLP pipeline completes, the Flask backend compiles the AI-generated summaries, semantic clusters, entity lists, and sentiment scores into structured sheets using a Python Excel library. The user downloads a comprehensive .xlsx report for offline analysis and stakeholder presentations.",
            difficulty: "Basic"
          },
          {
            q: "Explain the Cost-Savings Dashboard feature.",
            a: "The dashboard automatically calculates the estimated human reading time for the scraped content (based on average reading speed of ~250 words/minute) and compares it against the AI processing time. This delta is visualized to demonstrate the ROI of using GistProbe over manual analysis.",
            difficulty: "Basic"
          },
          {
            q: "Why did you cache NLP results as JSON blobs in the ProbeResult table instead of normalized tables?",
            a: "NLP outputs like K-Means cluster arrays and entity graphs are complex, nested structures that would require many normalized tables with heavy join queries. Storing them as JSON blobs in a single column enables instant retrieval with a single query, trading normalization for read performance — a valid trade-off for a caching layer.",
            difficulty: "Advanced"
          },
          {
            q: "What is the URLSubscription table and how does it drive automation?",
            a: "The `URLSubscription` table stores the user_id, URL, and frequency (daily/weekly). Flask-APScheduler reads this table at scheduled intervals, iterates over active subscriptions, and triggers the ML worker to re-crawl and re-analyze each URL, appending new sentiment data points to the historical graph.",
            difficulty: "Intermediate"
          },
          {
            q: "Why did you choose Flask over Django for the frontend?",
            a: "Flask is a micro-framework that provides only the essentials (routing, templating), keeping the frontend lightweight. Since the heavy ML logic lives in a separate FastAPI worker, Django's batteries-included approach (ORM, admin panel, auth) would have been unnecessary overhead for this UI-focused service.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you handle error scenarios when the ML worker is unavailable?",
            a: "The Flask frontend wraps all HTTP calls to the FastAPI worker in try-except blocks with timeout configurations. If the ML worker is down or times out, the UI displays a user-friendly error message instead of crashing, and cached ProbeResult data from previous runs is served as a fallback.",
            difficulty: "Intermediate"
          },
          {
            q: "What visualization libraries did you use and for what purposes?",
            a: "I used Chart.js for interactive donut charts (topic distribution) and line charts (historical sentiment tracking over time), vis.js for the physics-based entity knowledge graph, and custom Python WordCloud generation for TF-IDF visual summaries.",
            difficulty: "Basic"
          },
          {
            q: "How did you structure the ML worker codebase for maintainability?",
            a: "The ML worker is split into focused modules: `crawler.py` handles Playwright and BeautifulSoup scraping, `analyser.py` handles text cleaning and TextBlob sentiment, `clustering.py` handles TF-IDF and K-Means, `ner.py` handles spaCy NER, and `rag.py` handles Sentence-Transformers and FAISS. This separation of concerns makes each component independently testable.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you test the core ML pipeline?",
            a: "I wrote unit tests in `tests.py` that validate each pipeline stage independently: testing that the crawler returns valid HTML, that the cleaner removes duplicates correctly, that K-Means produces a valid number of clusters, and that the sentiment analyzer returns scores within expected ranges.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Vibe Connect (WebRTC & WebSockets)",
        questions: [
          // === ORIGINAL QUESTIONS ===
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
          // === SECOND BATCH ===
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
          },
          // === THIRD BATCH — EVERY CORNER DETAIL ===
          {
            q: "How does Firestore's `onSnapshot` enable real-time signaling?",
            a: "`onSnapshot` attaches a listener to a Firestore document or collection. Whenever the document changes (e.g., the Callee writes an SDP answer), the listener fires a callback instantly on the other client. This real-time push mechanism replaces the need for WebSocket polling and powers the entire signaling handshake.",
            difficulty: "Advanced"
          },
          {
            q: "What happens if one peer disconnects unexpectedly mid-call?",
            a: "The `RTCPeerConnection` fires an `oniceconnectionstatechange` event. When the ICE connection state transitions to 'disconnected' or 'failed', the application detects the remote peer has dropped, stops the remote video tracks, and can either display a reconnection message or trigger a new matchmaking cycle.",
            difficulty: "Advanced"
          },
          {
            q: "What is NAT (Network Address Translation) and why is it a problem for WebRTC?",
            a: "NAT maps private internal IP addresses to a single public IP. Peers behind NAT don't know their own public IP and port, so they cannot directly tell another peer how to reach them. WebRTC uses STUN to discover the public IP and TURN to relay traffic when direct connections are impossible.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you implement the Fullscreen mode for the remote video?",
            a: "I used the browser's native Fullscreen API (`element.requestFullscreen()`). When the user clicks the fullscreen button, the remote video container enters fullscreen. The exit is handled via `document.exitFullscreen()` or the browser's native Escape key behavior.",
            difficulty: "Basic"
          },
          {
            q: "How does the floating Picture-in-Picture (PiP) local video work?",
            a: "The local video element is positioned using CSS `position: absolute` with a high `z-index`, overlaid on top of the remote video stream. It renders as a small draggable or fixed corner window so the user can see their own camera feed while watching the stranger's video.",
            difficulty: "Basic"
          },
          {
            q: "Why did you prefix all Firebase environment variables with `NEXT_PUBLIC_`?",
            a: "In Next.js, environment variables are server-side by default and not exposed to the browser. The `NEXT_PUBLIC_` prefix explicitly marks them as safe to bundle into client-side JavaScript. Since Firebase SDK runs entirely in the browser, all its config values need this prefix.",
            difficulty: "Intermediate"
          },
          {
            q: "How do you handle stale documents in the Firestore `waiting` collection?",
            a: "If a user starts waiting but closes their browser before being matched, their document becomes stale. The next user who claims this document will fail to establish a connection. To handle this, the application detects signaling timeout and re-enters the matchmaking queue. In production, a Cloud Function can periodically clean up stale entries based on `createdAt` timestamps.",
            difficulty: "Advanced"
          },
          {
            q: "What is the difference between the App Router and Pages Router in Next.js?",
            a: "The App Router (introduced in Next.js 13+) uses the `app/` directory with React Server Components, layouts, and streaming by default. The Pages Router uses the `pages/` directory with `getServerSideProps`/`getStaticProps`. App Router is the modern recommended approach and supports nested layouts and loading states natively.",
            difficulty: "Intermediate"
          },
          {
            q: "How does TypeScript improve the reliability of this project?",
            a: "TypeScript adds static type checking at compile time. For WebRTC, it catches errors like passing wrong types to `RTCPeerConnection` methods, accessing undefined properties on Firestore snapshots, or mismatched ICE server configurations — all before the code runs in production.",
            difficulty: "Intermediate"
          },
          {
            q: "How does the app handle camera/microphone permission denials?",
            a: "When `getUserMedia` is called and the user denies permission, the Promise rejects. The app catches this error and displays a user-friendly message explaining that camera access is required. The Start button remains disabled until permissions are granted.",
            difficulty: "Basic"
          },
          {
            q: "Why does WebRTC only work on localhost without HTTPS but requires HTTPS on deployed sites?",
            a: "Browsers treat `localhost` as a secure context for development purposes. However, `getUserMedia` and other powerful APIs require a secure context (HTTPS) on all other origins. Vercel provides HTTPS automatically, so the deployed app works without extra configuration.",
            difficulty: "Intermediate"
          },
          {
            q: "What is the `createdAt` field in the `waiting` collection used for?",
            a: "The `createdAt` timestamp is a server-generated Firestore timestamp used to sort the waiting collection in FIFO (first-in, first-out) order. When a new user queries for a match, they use `orderBy('createdAt').limit(1)` to always pick the user who has been waiting the longest.",
            difficulty: "Basic"
          },
          {
            q: "How would you scale Vibe Connect to support thousands of concurrent users?",
            a: "Firestore already scales horizontally. For media, since WebRTC is P2P, the server never handles media traffic — it scales naturally. The bottleneck would be TURN server bandwidth for users behind strict NATs. I would use a managed TURN service (like Twilio or Metered) that auto-scales relay capacity.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Quiz Portal (Proctoring & System Design)",
        questions: [
          // === ORIGINAL QUESTIONS ===
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
          // === SECOND BATCH ===
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
          },
          // === THIRD BATCH — EVERY CORNER DETAIL ===
          {
            q: "How does the keyboard event interception work in the capturing phase?",
            a: "Standard event listeners use the bubbling phase, which extensions can intercept first. By attaching the listener with `addEventListener('keydown', handler, true)` (the third argument `true` enables the capturing phase), the proctoring engine intercepts keyboard events before any extension or page script can process them, blocking F12, Cmd+Opt+I, and Cmd+Opt+U.",
            difficulty: "Advanced"
          },
          {
            q: "How does the negative marking system work?",
            a: "Each Quiz has a `negativeMarks` field (a Float) in the database schema. When a student selects a wrong answer, the grading loop subtracts this value from their total score. If a question is unanswered (selectedOption is null), no penalty is applied, encouraging strategic skipping.",
            difficulty: "Intermediate"
          },
          {
            q: "How did you support both SINGLE and MULTIPLE choice question types?",
            a: "Each Question has a `questionType` field (SINGLE or MULTIPLE) and a `correctOption` field. For SINGLE, correctOption stores one letter (e.g., 'A'). For MULTIPLE, it stores a comma-separated string (e.g., 'A,B'). The grading engine splits and compares sets accordingly, requiring an exact match for full marks.",
            difficulty: "Intermediate"
          },
          {
            q: "How does the quiz scheduling system (opensAt/closesAt) work?",
            a: "Each Quiz has `opensAt` and `closesAt` DateTime fields. The backend checks these timestamps before allowing a student to start an attempt. If `now < opensAt`, the quiz shows as 'Upcoming'. If `now > closesAt`, it shows as 'Closed'. Only quizzes within their active window are accessible.",
            difficulty: "Basic"
          },
          {
            q: "How does the Admin 'Quiz Reopening' feature work?",
            a: "Admins can extend the `closesAt` timestamp dynamically via an API endpoint. This is useful when students face technical difficulties or need extra time. The backend updates the DateTime in the database, and the quiz immediately becomes accessible again to all students in that Cohort.",
            difficulty: "Intermediate"
          },
          {
            q: "Explain the three `Attempt` status states in your system.",
            a: "`IN_PROGRESS` means the student is actively taking the exam. `COMPLETED` means they submitted voluntarily via the Submit button. `FORCE_SUBMITTED` means the system auto-graded — either the timer expired, the proctoring engine disqualified the student (3 strikes), or the backend detected a timer manipulation attempt.",
            difficulty: "Intermediate"
          },
          {
            q: "How does the collapsible Admin sidebar work?",
            a: "The sidebar uses a React state hook (e.g., `isCollapsed`) that toggles between a full-width navigation panel and a narrow icon-only strip. CSS transitions handle the smooth width animation. This maximizes screen real estate for data-heavy tables like the student leaderboard.",
            difficulty: "Basic"
          },
          {
            q: "Why did you use componentized modals instead of separate pages for entity creation?",
            a: "Creating separate pages for 'Create Quiz', 'Add Question', 'Create Section', and 'Register Student' would cause page navigation and loss of context. Self-contained popup modals keep the admin on the same dashboard, eliminating scrolling fatigue and allowing quick, context-aware entity creation.",
            difficulty: "Intermediate"
          },
          {
            q: "How does the seed script work and why is it important?",
            a: "The `seed.js` script runs via `npm run seed` and uses Prisma Client to programmatically insert mock data: an Admin user, a Student user, sample Cohorts, Quizzes with Questions, and a pre-loaded Attempt. This enables instant evaluation of the entire application without manually creating test data.",
            difficulty: "Basic"
          },
          {
            q: "How does the AuthContext manage JWT sessions across the React app?",
            a: "The `AuthContext.jsx` uses React's Context API to store the JWT token and user data globally. It configures Axios request interceptors to automatically attach the `Authorization: Bearer <token>` header to every outgoing API request, ensuring seamless authentication without repeating token logic in every component.",
            difficulty: "Intermediate"
          },
          {
            q: "How do you handle question images in the quiz?",
            a: "Each Question has an optional `questionImage` field that stores a URL. If present, the ExamPage component renders an `<img>` tag alongside the question text. This supports diagram-based, graph-based, or image-based questions without changing the core data model.",
            difficulty: "Basic"
          },
          {
            q: "Why did you use SQLite instead of PostgreSQL or MySQL?",
            a: "SQLite is a serverless, file-based database that requires zero configuration. For a self-contained exam portal that needs to run locally with a single `npm install`, SQLite is ideal. The `dev.db` file ships with the repo, eliminating the need for students to install and configure a separate database server.",
            difficulty: "Intermediate"
          },
          {
            q: "How does the 'Early Submit' button work from any question?",
            a: "The Submit Quiz button is permanently anchored to the side navigation panel, not tied to the last question. A student can click it from any question number. It triggers a confirmation dialog, and upon acceptance, the backend receives all answers, computes the score with negative marking, and transitions the Attempt status to 'COMPLETED'.",
            difficulty: "Basic"
          },
          {
            q: "How did you implement glassmorphism in the CSS?",
            a: "Glassmorphism is achieved using a combination of `background: rgba(255, 255, 255, 0.05)`, `backdrop-filter: blur(10px)`, and subtle `border: 1px solid rgba(255, 255, 255, 0.1)`. This creates a frosted-glass effect that allows the 3D particle background to subtly show through UI elements.",
            difficulty: "Basic"
          },
          {
            q: "What fonts did you choose and why?",
            a: "I used the 'Outfit' and 'Plus Jakarta Sans' Google Fonts. These are modern, geometric sans-serif typefaces optimized for screen readability. They provide a clean, premium aesthetic that matches the glassmorphism design system and ensures excellent legibility at all sizes.",
            difficulty: "Basic"
          },
          {
            q: "Why did you use Lucide Icons instead of Font Awesome or Material Icons?",
            a: "Lucide is a lightweight, open-source icon library with tree-shakeable React components. Unlike Font Awesome which loads the entire icon font, Lucide only bundles the specific icons you import, resulting in a significantly smaller bundle size.",
            difficulty: "Basic"
          },
          {
            q: "How does the Express middleware handle JWT verification with both headers and query parameters?",
            a: "The `authMiddleware.js` first checks the `Authorization` header for a Bearer token. If not found, it falls back to checking `req.query.token`. This dual approach is necessary because the PDF certificate download endpoint needs to pass the token as a URL query parameter for direct browser opening, since browsers cannot set custom headers for `<a>` tag downloads.",
            difficulty: "Advanced"
          },
          {
            q: "How does the 3D mouse parallax effect work in the particle constellation?",
            a: "The `ThreeCanvas.jsx` component uses React Three Fiber's `useFrame` hook to read the mouse position on every animation frame. It maps the normalized mouse coordinates (-1 to 1) to subtle rotation offsets on the particle group, creating a depth illusion where the constellation gently follows the cursor.",
            difficulty: "Advanced"
          }
        ]
      }
    ]
  }
];

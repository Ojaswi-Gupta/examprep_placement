export const INTERVIEW_PROJECTS_DATA = [
  {
    role: "Personal Projects Deep Dive (Resume) 🚀",
    icon: "🚀",
    topics: [
      {
        topic: "GistProbe (NLP & MLOps)",
        questions: [
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
          }
        ]
      },
      {
        topic: "Vibe Connect (WebRTC & WebSockets)",
        questions: [
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
          }
        ]
      },
      {
        topic: "Quiz Portal (Proctoring & System Design)",
        questions: [
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
          }
        ]
      }
    ]
  }
];

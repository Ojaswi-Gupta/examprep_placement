export const INTERVIEW_TECHNICAL_MIXED_DATA = [
  {
    role: "General Technical Interview (Mixed)",
    icon: "🧑‍💻",
    topics: [
      {
        topic: "Resume & Past Experience Deep Dives",
        questions: [
          {
            q: "Can you walk me through your most complex project, such as GistProbe, and explain the architecture?",
            a: "GistProbe is an AI-powered media analyst tool. I decoupled it into a Flask frontend for the UI and a FastAPI backend to handle heavy ML workloads like K-Means clustering and NLP processing. The frontend manages user authentication and dynamic visualizations (Chart.js, vis.js), while the backend handles Playwright for web scraping, Sentence-Transformers for embeddings, FAISS for vector search, and Groq API (Llama-3.1) for fast inference.",
            difficulty: "Intermediate"
          },
          {
            q: "What was the most challenging technical hurdle you faced in Vibe Connect, and how did you solve it?",
            a: "The most challenging part was establishing the WebRTC peer-to-peer connection without deploying a dedicated, stateful WebSocket server. I solved this by leveraging Firebase Firestore as a serverless signaling mechanism. I used Firestore document listeners (`onSnapshot`) to exchange SDP offers, answers, and ICE candidates in real-time, effectively bypassing the need for a custom Node.js signaling server while ensuring seamless P2P connections.",
            difficulty: "Advanced"
          },
          {
            q: "How did you implement the anti-cheat mechanism in your Quiz Portal?",
            a: "I built a 3-strike proctoring engine. It detects loss of window focus and exits from fullscreen mode using a background polling loop (every 300ms) rather than standard event listeners, as some modern browsers suppress 'Escape' key events. I also implemented a 100ms selection cleansing loop using `window.getSelection().removeAllRanges()` to physically prevent highlighting or copying text. After 3 strikes, the backend forcefully grades the attempt.",
            difficulty: "Advanced"
          },
          {
            q: "If you were to scale GistProbe to handle 1 million users, what bottlenecks would you anticipate and how would you resolve them?",
            a: "The primary bottlenecks would be the ML worker's RAM (due to heavy models like spaCy and Sentence-Transformers) and the Playwright instances. I would containerize the FastAPI worker using Docker and deploy it on a Kubernetes cluster with auto-scaling based on CPU/RAM usage. I'd also implement a robust message broker like RabbitMQ or Kafka to queue scraping jobs, ensuring the ML workers aren't overwhelmed by concurrent requests.",
            difficulty: "Advanced"
          },
          {
            q: "Describe a time you had to optimize the performance of a web application.",
            a: "In the Quiz Portal, the React UI initially suffered from unnecessary re-renders during the countdown timer. I optimized it by isolating the timer state into its own small component rather than keeping it in the parent context, meaning only the timer re-rendered every second. Additionally, in GistProbe, caching expensive NLP outputs (like K-Means clusters and entity graphs) as JSON blobs in SQLite drastically reduced repeated load times.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "System Design & Architecture",
        questions: [
          {
            q: "What are the trade-offs between Monolithic and Microservices architectures?",
            a: "**Monolith:** Easier to develop, test, and deploy initially. However, it scales poorly (you must scale the whole app even if only one part is heavy) and a bug can crash the entire system.\n**Microservices:** Highly scalable, allows different tech stacks per service, and isolates failures. The trade-off is significantly increased operational complexity, harder debugging, and the need for robust inter-service communication (APIs/Message Brokers).",
            difficulty: "Intermediate"
          },
          {
            q: "How would you design a URL shortener like Bitly?",
            a: "I'd use a hashing algorithm (like Base62 encoding of an auto-incrementing DB ID) to generate a short alias. The frontend accepts the long URL, the backend generates the alias and stores the mapping in a relational database or NoSQL store. For fast redirects, I'd implement a distributed cache like Redis to store frequently accessed aliases, minimizing database hits.",
            difficulty: "Advanced"
          },
          {
            q: "Explain CAP Theorem.",
            a: "CAP Theorem states that a distributed data store can only simultaneously provide two of the following three guarantees:\n1. **Consistency:** Every read receives the most recent write.\n2. **Availability:** Every request receives a non-error response.\n3. **Partition Tolerance:** The system continues to operate despite network failures dropping messages between nodes.",
            difficulty: "Intermediate"
          },
          {
            q: "What is load balancing and what algorithms are commonly used?",
            a: "Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed. Common algorithms include:\n- **Round Robin:** Requests are distributed sequentially.\n- **Least Connections:** Sends requests to the server with the fewest active connections.\n- **IP Hash:** Uses the client's IP address to determine which server receives the request (useful for sticky sessions).",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Programming Logic & Coding Practices",
        questions: [
          {
            q: "How do you handle error logging and monitoring in a production Node.js application?",
            a: "I use a structured logging library like `Winston` or `Pino` to log errors in JSON format. In Express, I set up a centralized error-handling middleware at the end of the stack to catch unhandled errors. For monitoring, I integrate tools like Sentry to capture exceptions instantly and DataDog or New Relic for tracking application performance and server health.",
            difficulty: "Intermediate"
          },
          {
            q: "Explain the concept of Dependency Injection.",
            a: "Dependency Injection (DI) is a design pattern where an object receives its dependencies from an external source rather than creating them itself. This makes the code highly modular, easier to test (since you can inject mock dependencies), and decoupled. In Node.js/TypeScript, frameworks like NestJS use DI heavily via decorators.",
            difficulty: "Intermediate"
          },
          {
            q: "What are SOLID principles?",
            a: "SOLID is an acronym for 5 design principles:\n**S** - Single Responsibility (A class should have one reason to change).\n**O** - Open/Closed (Open for extension, closed for modification).\n**L** - Liskov Substitution (Subclasses should be substitutable for base classes).\n**I** - Interface Segregation (Don't force classes to implement interfaces they don't use).\n**D** - Dependency Inversion (Depend on abstractions, not concretions).",
            difficulty: "Advanced"
          },
          {
            q: "How do you prevent SQL Injection attacks?",
            a: "SQL Injection occurs when malicious SQL statements are inserted into entry fields. To prevent it, never concatenate raw user input directly into SQL strings. Always use parameterized queries or prepared statements, which separate the SQL code from the data. ORMs like Prisma or Sequelize automatically sanitize inputs and protect against these attacks.",
            difficulty: "Basic"
          }
        ]
      }
    ]
  }
];

export const INTERVIEW_RESUME_DATA = [
  {
    role: "Full Stack & Web Development",
    icon: "🌐",
    topics: [
      {
        topic: "React.js & Frontend",
        questions: [
          {
            q: "What is React and why use it over vanilla JS?",
            a: "React is an open-source JavaScript library developed by Facebook for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components, making the code easier to maintain and scale. Unlike vanilla JavaScript where you manually update the DOM, React uses a declarative approach and a Virtual DOM to optimize rendering performance. This means you simply describe how the UI should look based on the current state, and React efficiently updates only the parts of the DOM that have changed.",
            difficulty: "Basic"
          },
          {
            q: "What are React hooks? Explain useState, useEffect, useRef, useContext.",
            a: "React hooks are functions that allow you to use state and lifecycle features within functional components, eliminating the need for class components. 'useState' lets you add local state to a component by returning a state variable and a setter function. 'useEffect' is used to perform side effects like fetching data or subscribing to events, running after the component renders. 'useRef' provides a way to access DOM elements directly or persist mutable values across renders without triggering a re-render. 'useContext' allows components to consume values from a React Context without needing to pass props down manually through multiple levels.",
            difficulty: "Basic"
          },
          {
            q: "What is the Virtual DOM and how does React's reconciliation work?",
            a: "The Virtual DOM is a lightweight, in-memory representation of the actual Real DOM. When a component's state or props change, React creates a new Virtual DOM tree and compares it with the previous one using a diffing algorithm. This process is called reconciliation. React identifies the minimal set of changes needed and batches these updates before applying them to the Real DOM. This significantly improves performance by avoiding expensive and frequent direct manipulations of the actual DOM elements.",
            difficulty: "Intermediate"
          },
          {
            q: "Controlled vs Uncontrolled components",
            a: "In a controlled component, form data is handled directly by the state within the React component, meaning the component dictates the value of the input. Every state change is driven by an event handler like onChange. An uncontrolled component, however, stores its own state internally in the DOM, and you use a 'ref' to query the DOM for the current value when needed. Controlled components are generally preferred in React as they provide a single source of truth, making form validation and dynamic inputs easier to manage.",
            difficulty: "Intermediate"
          },
          {
            q: "What is JSX and how is it transpiled?",
            a: "JSX stands for JavaScript XML, and it is a syntax extension that allows developers to write HTML-like code directly inside JavaScript files. It makes the structure of React components easier to visualize and write. However, browsers cannot understand JSX natively, so it must be transformed into standard JavaScript. Tools like Babel are used to transpile JSX into standard 'React.createElement()' function calls, which eventually output regular JavaScript objects that React uses to construct the Virtual DOM.",
            difficulty: "Basic"
          },
          {
            q: "React component lifecycle (mount, update, unmount)",
            a: "The React component lifecycle refers to the different phases a component goes through from its creation to its removal from the DOM. Mounting is the phase when a component is initially created and inserted into the DOM. Updating happens when a component's state or props change, triggering a re-render to reflect the new data. Unmounting is the final phase when the component is removed from the DOM. In functional components, these phases are managed using the 'useEffect' hook by providing specific dependency arrays or cleanup functions.",
            difficulty: "Basic"
          },
          {
            q: "What is prop drilling and how to avoid it?",
            a: "Prop drilling occurs when you need to pass data from a high-level parent component down to deeply nested child components through intermediate components that do not actually use the data. This makes the codebase harder to maintain and read, as components become cluttered with unnecessary props. To avoid prop drilling, you can use state management solutions like the React Context API, Redux, or Zustand. These tools allow you to store state globally and access it directly from any component, regardless of its position in the component tree.",
            difficulty: "Intermediate"
          },
          {
            q: "useCallback vs useMemo — when to use each",
            a: "Both 'useCallback' and 'useMemo' are hooks used to optimize performance by memoizing values to prevent unnecessary recalculations or re-creations during renders. 'useMemo' is used to memoize the result of an expensive calculation, returning a cached value unless its dependencies change. 'useCallback', on the other hand, is specifically used to memoize a callback function instance. You should use 'useCallback' when passing a function as a prop to a child component wrapped in 'React.memo' to prevent the child from re-rendering unnecessarily, while 'useMemo' is for heavy data processing.",
            difficulty: "Intermediate"
          },
          {
            q: "React.memo and performance optimization",
            a: "React.memo is a higher-order component that wraps a functional component to optimize its rendering performance. It memoizes the rendered output, meaning the component will only re-render if its incoming props change. This is particularly useful for child components that receive primitive props and do not need to update when the parent re-renders for unrelated reasons. However, overuse of React.memo can degrade performance due to the overhead of the shallow comparison of props on every render, so it should be applied strategically to heavy or frequently re-rendered components.",
            difficulty: "Advanced"
          },
          {
            q: "What is React Router and how does client-side routing work?",
            a: "React Router is the standard routing library for React applications, enabling seamless navigation between different views without triggering a full page reload. Client-side routing intercepts URL changes within the browser and uses JavaScript to dynamically render the corresponding React components. It leverages the HTML5 History API to update the browser's URL and maintain browsing history. This approach creates a faster, application-like experience since the browser does not need to request a completely new HTML document from the server for every page transition.",
            difficulty: "Basic"
          },
          {
            q: "Lazy loading and code splitting with React.lazy and Suspense",
            a: "Code splitting is a technique that splits your application bundle into smaller chunks, loading only the code necessary for the initial render and deferring the rest. In React, this is achieved using 'React.lazy()' combined with dynamic imports to lazy-load components only when they are needed, such as when a user navigates to a specific route. The 'Suspense' component is used to wrap these lazy-loaded components, providing a fallback UI, like a loading spinner, while the background chunk is being downloaded. This significantly reduces the initial load time of the application.",
            difficulty: "Intermediate"
          },
          {
            q: "Error boundaries in React",
            a: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application. They are implemented using class components by defining the lifecycle methods 'static getDerivedStateFromError()' or 'componentDidCatch()'. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. However, they do not catch errors in event handlers, asynchronous code, or server-side rendering.",
            difficulty: "Intermediate"
          },
          {
            q: "State management: Context API vs Redux vs Zustand",
            a: "The Context API is built into React and is best suited for sharing simple global state like themes or authentication status, but it can cause excessive re-renders if used for complex, frequently updating data. Redux is a robust, predictable state container with strict patterns (actions, reducers), making it ideal for large-scale applications with complex state logic, though it has a steep learning curve and heavy boilerplate. Zustand is a modern, lightweight alternative that provides a simpler API utilizing hooks, offering fast performance and minimal boilerplate while handling both simple and complex global state efficiently.",
            difficulty: "Advanced"
          },
          {
            q: "Server-side rendering (SSR) vs Client-side rendering (CSR)",
            a: "In Client-Side Rendering (CSR), the server sends a barebones HTML document with JavaScript bundles, and the browser executes the JS to render the UI and fetch data. This can lead to slower initial page loads and poor SEO, as search engine crawlers may not execute the JS. Server-Side Rendering (SSR) generates the full HTML for a page on the server per request, sending a fully formed page to the browser. SSR improves initial load times and SEO, but it can increase server load and result in a slower Time to First Byte (TTFB) compared to serving static files.",
            difficulty: "Advanced"
          },
          {
            q: "What are React Server Components?",
            a: "React Server Components (RSC) are a new paradigm that allows components to be rendered exclusively on the server, never sending their JavaScript to the client. This dramatically reduces the bundle size downloaded by the browser, leading to faster load times and improved performance. Server components can directly access backend resources like databases and file systems securely during rendering. They work seamlessly alongside traditional Client Components, allowing developers to balance interactive, stateful UI on the client with data-heavy, static UI rendered on the server.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Node.js & Express",
        questions: [
          {
            q: "What is Node.js and why is it single-threaded but non-blocking?",
            a: "Node.js is an open-source, cross-platform runtime environment that executes JavaScript code outside of a web browser, built on Chrome's V8 engine. It uses a single-threaded event loop architecture to handle execution. However, it achieves non-blocking I/O by offloading heavy, asynchronous tasks like file system operations, network requests, or database queries to the underlying operating system or worker threads (via the libuv library). When the OS completes the task, a callback is added to the event queue, allowing Node.js to handle thousands of concurrent connections efficiently without creating a new thread for each one.",
            difficulty: "Basic"
          },
          {
            q: "Event loop in Node.js — explain in detail",
            a: "The event loop is the core mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded. It operates in multiple phases: Timers (executes setTimeout/setInterval callbacks), Pending Callbacks (executes I/O callbacks deferred to the next iteration), Idle/Prepare (internal usage), Poll (retrieves new I/O events and executes their callbacks), Check (executes setImmediate callbacks), and Close Callbacks. The event loop continuously cycles through these phases as long as there are pending asynchronous operations. Microtasks, like resolved Promises, are executed immediately after the current operation completes, before the loop moves to the next phase.",
            difficulty: "Advanced"
          },
          {
            q: "What is Express.js and what is middleware?",
            a: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications, particularly RESTful APIs. Middleware functions are at the core of Express; they are functions that have access to the request object, the response object, and the next middleware function in the application's request-response cycle. Middleware can execute code, make changes to the request and response objects, end the response cycle, or call 'next()' to pass control to the succeeding middleware. Examples include logging, authentication, and parsing JSON bodies.",
            difficulty: "Basic"
          },
          {
            q: "Difference between req.params, req.query, and req.body",
            a: "These are three distinct ways to pass data from a client to an Express server. 'req.params' is used to capture dynamic route variables defined in the URL path, such as extracting an ID from '/users/:id'. 'req.query' captures key-value pairs appended to the URL after a question mark, commonly used for filtering or pagination (e.g., '?page=2&sort=asc'). 'req.body' contains data sent within the HTTP request body, primarily used in POST or PUT requests for creating or updating resources, and it requires middleware like 'express.json()' to be parsed correctly.",
            difficulty: "Basic"
          },
          {
            q: "How does Node.js handle concurrent requests?",
            a: "Node.js handles concurrent requests using its single-threaded event loop and asynchronous, non-blocking I/O model. When a request arrives, Node.js processes it on the main thread. If the request requires a blocking operation like a database query or file read, Node.js delegates that task to the C++ libuv thread pool or the operating system. The main thread immediately becomes available to accept new incoming requests. Once the background operation finishes, its callback is queued in the event loop and subsequently executed on the main thread, sending the response back to the client.",
            difficulty: "Intermediate"
          },
          {
            q: "What is the cluster module in Node.js?",
            a: "The cluster module is a built-in Node.js feature that allows you to easily create child processes (workers) that run simultaneously and share the same server port. Because Node.js runs on a single thread, it can only utilize one CPU core by default. By implementing clustering, a primary process can spawn a worker process for each available CPU core, distributing incoming network traffic across them using a round-robin approach. This significantly increases the throughput and fault tolerance of the application, as one crashed worker will not bring down the entire server.",
            difficulty: "Advanced"
          },
          {
            q: "Streams in Node.js — when and why to use them",
            a: "Streams are collections of data that might not be available all at once and don't have to fit completely in memory. They allow you to read and write data piece by piece in chunks. You should use streams when handling large amounts of data, such as reading massive log files, processing video uploads, or piping data from a database directly to an HTTP response. The main advantages of streams are memory efficiency, as you don't load the entire payload into RAM, and time efficiency, since you can start processing data as soon as the first chunk arrives.",
            difficulty: "Intermediate"
          },
          {
            q: "Error handling in Express (custom error middleware)",
            a: "In Express, synchronous errors thrown in route handlers are caught automatically, but asynchronous errors must be explicitly passed to the 'next()' function. To handle these centrally, you create custom error-handling middleware, which is defined with exactly four arguments: (err, req, res, next). This middleware should be placed at the very end of your application stack, after all other routes and middleware. Inside it, you can log the error, format a consistent JSON response containing the error message and status code, and send it back to the client, preventing the app from crashing.",
            difficulty: "Intermediate"
          },
          {
            q: "What is CORS and how do you configure it in Express?",
            a: "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that restricts web pages from making requests to a different domain than the one that served the web page. It prevents malicious scripts from accessing sensitive data on another origin. In an Express application, you configure CORS by installing the 'cors' middleware package and applying it globally using 'app.use(cors())'. For production, you typically configure the CORS options to restrict access by specifying an array of allowed origins, methods, and headers, ensuring only trusted frontend applications can interact with your API.",
            difficulty: "Basic"
          },
          {
            q: "Difference between CommonJS (require) and ES Modules (import)",
            a: "CommonJS is the traditional module system used in Node.js, utilizing 'require()' to load modules and 'module.exports' to export them. It loads modules synchronously, which works well for server-side initialization. ES Modules (ESM) is the modern, standardized module system for JavaScript, using 'import' and 'export' syntax. ESM loads modules asynchronously and allows for static analysis, enabling features like tree-shaking to eliminate dead code. Node.js now supports ESM natively if you set 'type: module' in package.json or use the '.mjs' file extension.",
            difficulty: "Basic"
          },
          {
            q: "What is process.env and how to manage environment variables?",
            a: "The 'process.env' object is a global variable in Node.js that contains the state of the system environment variables at the time the process was started. It is heavily used to store sensitive configurations, API keys, database connection strings, and environment-specific settings (like NODE_ENV for development vs. production). The best practice for managing these is using a '.env' file locally with a package like 'dotenv', which loads the variables into 'process.env' when the application boots. This '.env' file must always be excluded from source control using '.gitignore' to prevent secret leaks.",
            difficulty: "Basic"
          },
          {
            q: "How does garbage collection work in Node.js (V8 engine)?",
            a: "Node.js relies on the V8 JavaScript engine for garbage collection to manage memory automatically. V8 divides the heap memory into two main generations: New Space and Old Space. New Space is small and uses a fast 'Scavenger' algorithm to quickly collect short-lived objects. If an object survives multiple garbage collection cycles in New Space, it is promoted to Old Space. Old Space uses a more resource-intensive 'Mark-Sweep-Compact' algorithm that runs less frequently, pausing execution briefly to mark live objects, sweep dead ones, and compact memory to prevent fragmentation.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "TypeScript",
        questions: [
          {
            q: "What is TypeScript and why use it over JavaScript?",
            a: "TypeScript is a strongly typed superset of JavaScript developed by Microsoft that compiles down to plain JavaScript. It adds static typing, allowing developers to define expected variable types, function parameters, and return values. You use it over JavaScript because it catches type-related errors at compile-time rather than runtime, significantly reducing bugs. Additionally, it provides vastly superior IDE support with features like auto-completion and safe refactoring, making large-scale codebases much easier to understand and maintain.",
            difficulty: "Basic"
          },
          {
            q: "Interfaces vs Types — key differences",
            a: "In TypeScript, both interfaces and type aliases can be used to describe the shape of an object. The main difference is that interfaces are exclusively used for objects and can be merged (declaration merging) if defined multiple times with the same name. Types are more versatile; they can define unions, intersections, primitives, and tuples, but they cannot be re-opened to add new properties. Generally, interfaces are preferred for public API definitions due to better error messages and extensibility, while types are used for complex union or functional types.",
            difficulty: "Intermediate"
          },
          {
            q: "Generics in TypeScript — explain with an example",
            a: "Generics allow you to create reusable components, functions, or classes that can work with a variety of data types while maintaining strict type safety. Think of a generic as a variable for a type. For example, a function 'function identity<T>(arg: T): T' accepts an argument of type 'T' and returns the same type. If you call 'identity<string>(\"hello\")', TypeScript ensures that the function takes a string and returns a string. This prevents the need to use the 'any' type, preserving code integrity across different data structures.",
            difficulty: "Intermediate"
          },
          {
            q: "What are union types and intersection types?",
            a: "A union type uses the pipe symbol (|) to declare that a variable can hold one of several distinct types, such as 'let status: string | number'. This is useful when a function might return different data types or an input can vary. An intersection type uses the ampersand symbol (&) to combine multiple types into one single type that possesses all properties of the combined types. For instance, intersecting a 'User' type and an 'Admin' type creates a new type requiring all fields from both, which is great for composing complex object structures.",
            difficulty: "Basic"
          },
          {
            q: "Enums in TypeScript — numeric vs string enums",
            a: "Enums allow you to define a set of named constants, making code more readable. Numeric enums automatically assign auto-incrementing integer values starting from 0 by default, such as 'enum Direction { Up, Down }' where Up is 0 and Down is 1. They also support reverse mapping, allowing you to get the name from the value. String enums require each member to be explicitly initialized with a string literal, like 'enum Status { Success = \"SUCCESS\" }'. String enums are often preferred as they are easier to debug and don't suffer from unintended implicit type coercions.",
            difficulty: "Basic"
          },
          {
            q: "Type guards and narrowing",
            a: "Type narrowing is the process of refining a broad type (like a union) into a more specific type within a conditional block. TypeScript uses type guards to achieve this. Built-in type guards include JavaScript operators like 'typeof' for primitives, 'instanceof' for classes, and the 'in' operator to check for specific object properties. You can also create custom type guard functions returning a type predicate (e.g., 'item is User'). Once inside the scope of a type guard, TypeScript narrows the type, allowing you to safely access properties specific to that exact type without compilation errors.",
            difficulty: "Intermediate"
          },
          {
            q: "The unknown type vs any type",
            a: "Both 'any' and 'unknown' can accept any value, but they behave very differently regarding type safety. The 'any' type essentially turns off TypeScript's type checking, allowing you to access arbitrary properties or call methods without errors, which can lead to runtime crashes. The 'unknown' type is a safer alternative; it represents a value that is currently unknown, but it strictly requires you to perform type checking or narrowing before you can perform any operations on it. It forces developers to handle the data securely, making it ideal for parsing dynamic external inputs.",
            difficulty: "Advanced"
          },
          {
            q: "Utility types: Partial, Required, Pick, Omit, Record",
            a: "Utility types are built-in tools to transform existing types. 'Partial<T>' makes all properties in T optional, useful for update payloads. 'Required<T>' makes all optional properties mandatory. 'Pick<T, K>' creates a new type by selecting a subset of properties (K) from T. 'Omit<T, K>' does the opposite, creating a type by excluding specific properties from T. 'Record<K, T>' constructs an object type whose property keys are of type K and values are of type T, commonly used for defining dictionaries or mapped objects.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "WebRTC & Real-Time Communication",
        questions: [
          {
            q: "What is WebRTC and what are its core APIs (getUserMedia, RTCPeerConnection, RTCDataChannel)?",
            a: "WebRTC (Web Real-Time Communication) is an open-source framework that enables direct peer-to-peer audio, video, and data communication in web browsers without needing third-party plugins. Its primary APIs include 'getUserMedia', which accesses local hardware like cameras and microphones to capture media streams. 'RTCPeerConnection' is the core API responsible for establishing, maintaining, and monitoring the peer-to-peer connection, handling encoding and network routing. 'RTCDataChannel' allows bidirectional, low-latency transmission of arbitrary data (like text or files) directly between peers.",
            difficulty: "Basic"
          },
          {
            q: "Explain the WebRTC signaling process — why is a signaling server needed?",
            a: "Although WebRTC enables peer-to-peer media flow, peers cannot discover each other on the internet magically. A signaling server is a centralized intermediary required solely to help peers exchange initial connection metadata before the P2P connection is established. During signaling, peers exchange SDP (Session Description Protocol) messages regarding media capabilities and ICE candidates containing network routing information. Once this handshake data is successfully swapped via the signaling server using WebSockets or REST, the direct WebRTC peer connection begins, and the signaling server is no longer involved in the media transfer.",
            difficulty: "Intermediate"
          },
          {
            q: "What is SDP (Session Description Protocol) in WebRTC?",
            a: "SDP is a standard format used to describe multimedia communication sessions. In WebRTC, it acts as a detailed configuration document that outlines a peer's capabilities, including supported audio and video codecs, encryption parameters, and networking details. When initiating a connection, the caller generates an SDP 'Offer' detailing what media they want to send and receive. The callee responds with an SDP 'Answer', agreeing on a common set of capabilities. This negotiation ensures both peers can successfully decode each other's streams.",
            difficulty: "Intermediate"
          },
          {
            q: "What are ICE candidates and how does ICE gathering work?",
            a: "ICE (Interactive Connectivity Establishment) candidates are essentially network routing addresses (IP address and port combinations) that describe how a peer can be reached. ICE gathering is the process where a WebRTC application collects all possible network paths to the local device. It gathers local network addresses, public addresses discovered via a STUN server, and relay addresses from a TURN server if direct routing fails. These candidates are sent to the remote peer via the signaling server so both sides can test connectivity and select the optimal path for communication.",
            difficulty: "Intermediate"
          },
          {
            q: "STUN vs TURN servers — what is NAT traversal?",
            a: "NAT traversal is the process of bypassing network routers (NATs) that hide internal IP addresses behind a single public IP. A STUN server allows a device to discover its public IP address and port mapping created by the NAT, enabling direct peer-to-peer connections in most cases. However, strict corporate firewalls or symmetric NATs block direct connections entirely. In these fallback scenarios, a TURN server is used. A TURN server relays all the media traffic between the peers, guaranteeing a connection but consuming significant server bandwidth and resources.",
            difficulty: "Advanced"
          },
          {
            q: "How does peer-to-peer connectivity work behind firewalls?",
            a: "When peers are behind strict firewalls, standard STUN-based direct connections usually fail because firewalls block unknown incoming UDP packets. WebRTC resolves this using the ICE framework, which aggressively tests multiple connection paths. If direct IP routing and STUN public IPs fail, ICE falls back to a TURN server. The TURN server resides on the public internet (often accessible via standard ports like 443) and relays the encrypted media packets between peers, effectively bypassing the firewall restrictions at the cost of higher latency and server infrastructure costs.",
            difficulty: "Advanced"
          },
          {
            q: "What is a WebRTC offer/answer model?",
            a: "The Offer/Answer model is the fundamental negotiation mechanism in WebRTC used to establish a connection. The initiating peer creates an 'Offer' containing its local SDP description and sets it as its local description, then sends it through the signaling server. The receiving peer receives the Offer, sets it as its remote description, and generates an 'Answer' with its own SDP. It sets the Answer as its local description and sends it back to the initiator. Once the initiator sets the Answer as its remote description, the connection parameters are successfully negotiated.",
            difficulty: "Intermediate"
          },
          {
            q: "WebSockets vs WebRTC — when to use each?",
            a: "WebSockets provide persistent, bidirectional, client-server communication over TCP, making them ideal for signaling, chat applications, live notifications, and multiplayer game state updates. However, TCP guarantees delivery, which can introduce latency if packets are dropped. WebRTC provides direct peer-to-peer communication over UDP, which prioritizes speed over guaranteed delivery. You should use WebRTC for high-bandwidth, low-latency applications like live video conferencing, voice calls, or real-time file sharing between users, while using WebSockets for the underlying signaling to initiate the WebRTC session.",
            difficulty: "Basic"
          },
          {
            q: "How would you implement a video chat room queueing system?",
            a: "To implement a queueing system, I would use a centralized server with WebSockets (like Socket.IO) paired with a database or in-memory store like Redis. When users click 'join', they are added to a Redis queue. A matching service continually checks the queue, and when two compatible users are found, it generates a unique room ID and emits an event to both users via WebSockets. Upon receiving the event, the clients initialize WebRTC, use the unique room ID for signaling via the WebSocket server, and establish the peer-to-peer video connection.",
            difficulty: "Advanced"
          },
          {
            q: "What is Firebase Firestore signaling and how does it replace a traditional signaling server?",
            a: "Traditional signaling requires a dedicated WebSocket server to exchange SDP and ICE candidates in real time. Firebase Firestore, a NoSQL realtime database, can replace this infrastructure by acting as the medium for data exchange. When a call is initiated, the caller creates a document in a Firestore collection and writes their SDP offer. The callee listens to this document, reads the offer, and writes their answer back to the document. Both peers also listen for new documents in an 'ICE candidates' subcollection, exchanging routing data seamlessly without writing custom WebSocket backend code.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "WebSockets & Socket.IO",
        questions: [
          {
            q: "What are WebSockets and how do they differ from HTTP?",
            a: "WebSockets provide a persistent, full-duplex communication channel over a single TCP connection. Unlike traditional HTTP, which follows a strict request-response model initiated by the client and closes the connection after responding, WebSockets remain open. This allows the server to proactively push data to the client at any time without the client having to poll for updates. This significantly reduces network overhead and latency, making it ideal for real-time applications like chat rooms and live dashboards.",
            difficulty: "Basic"
          },
          {
            q: "Explain the WebSocket handshake process",
            a: "The WebSocket connection begins with a standard HTTP GET request sent by the client, asking the server to 'upgrade' the connection. This request includes specific headers like 'Upgrade: websocket' and a 'Sec-WebSocket-Key' for security validation. If the server supports WebSockets, it responds with an HTTP 101 Switching Protocols status code. Once this handshake completes successfully, the HTTP protocol is abandoned, and the connection transitions into a persistent WebSocket tunnel, allowing bidirectional binary or text data frames to flow freely.",
            difficulty: "Intermediate"
          },
          {
            q: "What is Socket.IO and what advantages does it offer over raw WebSockets?",
            a: "Socket.IO is a library that builds on top of the WebSocket protocol to provide a more robust real-time communication framework. While raw WebSockets are powerful, they require manual implementation for many edge cases. Socket.IO provides built-in advantages such as automatic reconnection handling, HTTP long-polling fallback for environments where WebSockets are blocked, and easy-to-use broadcasting mechanisms. It also introduces high-level concepts like custom event emission, namespaces, and rooms, which drastically simplify complex real-time application development.",
            difficulty: "Basic"
          },
          {
            q: "Socket.IO rooms and namespaces — what are they?",
            a: "Namespaces in Socket.IO act as separate communication channels on a single server, essentially multiplexing the connection. This allows you to split application logic, such as having one namespace for general chat and another for admin notifications. Rooms are an arbitrary channel within a namespace that sockets can join or leave. They are primarily used for targeted broadcasting. For example, if users join a room named after a specific document ID, the server can easily emit updates exclusively to the clients in that room without spamming everyone.",
            difficulty: "Intermediate"
          },
          {
            q: "How does Socket.IO handle reconnection and fallback?",
            a: "By default, Socket.IO implements a robust automatic reconnection mechanism. If a connection drops, the client will continuously attempt to reconnect with an exponential backoff delay to prevent overwhelming the server. Furthermore, Socket.IO uses an Engine.IO core that begins every connection with HTTP long-polling. This ensures the connection is established immediately, even through strict proxies. Only after a successful polling connection does it attempt to 'upgrade' to WebSockets, ensuring seamless fallback if WebSockets are completely blocked.",
            difficulty: "Advanced"
          },
          {
            q: "Broadcasting vs emitting in Socket.IO",
            a: "In Socket.IO, 'emitting' is the act of sending a message from one endpoint to another. When the server uses 'socket.emit()', it sends a message specifically to the single client associated with that socket. 'Broadcasting' is used to send a message to multiple clients. When the server uses 'socket.broadcast.emit()', it sends the message to all connected clients except for the sender. You can also broadcast to specific rooms using 'io.to(\"roomName\").emit()', which sends the message to everyone in that room.",
            difficulty: "Basic"
          },
          {
            q: "How would you scale WebSocket connections across multiple servers?",
            a: "Scaling WebSockets is challenging because connections are stateful and persistent. To scale across multiple servers, you must implement a pub/sub mechanism, typically using Redis Adapter for Socket.IO. When a server needs to broadcast to a room, it publishes the event to Redis, which then distributes it to all other Node.js servers, ensuring users connected to different nodes receive the message. Additionally, you must configure your load balancer (like NGINX or HAProxy) to use sticky sessions (Session Affinity), ensuring a specific client's HTTP polling requests always hit the same server during the initial handshake.",
            difficulty: "Advanced"
          },
          {
            q: "Long polling vs Server-Sent Events (SSE) vs WebSockets",
            a: "Long polling involves the client making an HTTP request, and the server holding the connection open until data is available, then immediately closing it; the client then immediately reconnects. Server-Sent Events (SSE) maintain a unidirectional, persistent HTTP connection where only the server can push data to the client, making it great for news feeds or live stocks. WebSockets offer a fully bidirectional, persistent TCP connection, making them the superior choice for highly interactive applications requiring low-latency communication in both directions.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Authentication & Security",
        questions: [
          {
            q: "What is JWT (JSON Web Token) and how does it work?",
            a: "JSON Web Token (JWT) is an open standard used for securely transmitting information between a client and a server as a JSON object. In authentication, after a user logs in successfully, the server generates a JWT containing user claims (like user ID) and signs it using a secret key. The token is sent to the client, which includes it in the Authorization header of subsequent HTTP requests. The server verifies the token's signature to authenticate the request statelessly, without needing to look up session data in a database.",
            difficulty: "Basic"
          },
          {
            q: "JWT structure — Header, Payload, Signature",
            a: "A JWT consists of three base64url encoded parts separated by dots: Header, Payload, and Signature. The Header contains metadata about the token, such as the signing algorithm used (e.g., HS256). The Payload contains the 'claims', which are statements about the user and additional data like expiration time. Finally, the Signature is generated by taking the encoded header, encoded payload, and a secret key, signing them with the specified algorithm. This signature guarantees that the token has not been tampered with in transit.",
            difficulty: "Basic"
          },
          {
            q: "Access tokens vs Refresh tokens",
            a: "Access tokens are short-lived credentials used to access protected API resources directly. Because they are stateless, they cannot be easily revoked if compromised, hence their short lifespan (e.g., 15 minutes). Refresh tokens are long-lived, highly secure credentials stored securely on the client. When the access token expires, the client sends the refresh token to a specific authentication endpoint to request a new access token. If a refresh token is compromised, the server can revoke it by deleting it from its database, protecting the user's account.",
            difficulty: "Intermediate"
          },
          {
            q: "How does Bcrypt work for password hashing? What is a salt?",
            a: "Bcrypt is a robust password hashing function designed to be intentionally slow and computationally expensive, protecting against brute-force and rainbow table attacks. Before hashing a password, Bcrypt generates a random string called a 'salt' and appends it to the password. This ensures that even if two users have the same password, their resulting hashes will be entirely different. The salt is stored alongside the hash in the database, allowing Bcrypt to verify passwords safely during login.",
            difficulty: "Intermediate"
          },
          {
            q: "OAuth 2.0 flow — explain the Authorization Code flow",
            a: "The Authorization Code flow is the most secure OAuth 2.0 grant type, used primarily for server-side applications. The application redirects the user to the authorization server (e.g., Google) to log in and grant permissions. Upon success, the server redirects back to the application with a short-lived Authorization Code. The application's backend then securely exchanges this code, along with a client secret, for an Access Token directly with the authorization server. This ensures the access token is never exposed to the user's browser, significantly reducing security risks.",
            difficulty: "Advanced"
          },
          {
            q: "What is Google OAuth2 and how do you implement it?",
            a: "Google OAuth2 is an authentication protocol that allows users to sign into your application using their Google credentials without creating a new password. To implement it, you register your application in the Google Cloud Console to obtain a Client ID and Client Secret. In Node.js, you typically use a library like Passport.js with the 'passport-google-oauth20' strategy. You configure routes to redirect users to Google's consent screen, handle the callback route to process the authorization code, and retrieve the user's profile data to create or log them into your local database.",
            difficulty: "Intermediate"
          },
          {
            q: "Session-based auth vs Token-based auth — pros and cons",
            a: "Session-based auth relies on the server storing session data in memory or a database and sending a Session ID cookie to the client. It provides excellent control, allowing immediate invalidation of sessions, but struggles with scalability across distributed server architectures. Token-based auth (like JWT) is stateless; the server verifies the token via cryptography without database lookups, making it highly scalable and ideal for microservices. However, standard JWTs cannot be forcefully revoked before expiration without implementing complex blacklists.",
            difficulty: "Advanced"
          },
          {
            q: "What is RBAC (Role-Based Access Control)? How would you implement it?",
            a: "RBAC is an authorization paradigm where system access is determined by the specific role assigned to a user (e.g., Admin, Editor, Viewer). To implement RBAC in a Node.js API, I would define user roles in the database. During authentication, the user's role is embedded in their JWT payload. I would then create a custom Express middleware function that checks this role. For example, an 'authorizeRoles(\"Admin\")' middleware would reject requests with a 403 Forbidden error if the token's role does not match the required permissions for that specific route.",
            difficulty: "Intermediate"
          },
          {
            q: "What is CSRF and how to prevent it?",
            a: "Cross-Site Request Forgery (CSRF) is an attack where a malicious website tricks a user's browser into executing unwanted actions on a trusted site where they are currently authenticated. Because browsers automatically include cookies with requests, the forged request appears legitimate to the server. To prevent CSRF, use Anti-CSRF tokens: unique, unpredictable values generated by the server and validated on state-changing requests. Additionally, configuring session cookies with the 'SameSite=Lax' or 'Strict' attribute prevents the browser from sending cookies on cross-origin requests.",
            difficulty: "Intermediate"
          },
          {
            q: "What is XSS and how to prevent it?",
            a: "Cross-Site Scripting (XSS) is a vulnerability where attackers inject malicious JavaScript into web pages viewed by other users, potentially stealing session cookies or altering site behavior. It occurs when applications render unvalidated user input directly into the DOM. To prevent XSS, always sanitize and escape user input before rendering it. Modern frameworks like React automatically escape data by default. Furthermore, implementing a strict Content Security Policy (CSP) header can restrict where scripts can be loaded from, and using HttpOnly cookies prevents injected scripts from accessing sensitive authentication tokens.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "ORM & Databases in Projects",
        questions: [
          {
            q: "What is an ORM? Why use Prisma over raw SQL?",
            a: "An Object-Relational Mapper (ORM) is a tool that allows developers to interact with a relational database using their preferred programming language instead of writing raw SQL queries. Prisma is a modern Node.js and TypeScript ORM that offers type-safe database access, automated migrations, and a highly intuitive query builder. Using Prisma over raw SQL drastically reduces the likelihood of SQL injection vulnerabilities, provides auto-completion in the IDE for faster development, and simplifies complex queries like nested relationships without writing cumbersome JOIN statements.",
            difficulty: "Basic"
          },
          {
            q: "Prisma schema — models, relations, and migrations",
            a: "The Prisma schema is a declarative file that acts as the single source of truth for your database structure. You define 'models' which directly map to database tables, specifying fields and their data types. You can easily define one-to-one, one-to-many, or many-to-many 'relations' between models. Based on this schema, Prisma generates robust TypeScript types and the Prisma Client. When you change the schema, Prisma automates 'migrations', generating the necessary SQL commands to alter the physical database safely to match the new schema state.",
            difficulty: "Intermediate"
          },
          {
            q: "What are database migrations and why are they important?",
            a: "Database migrations are a controlled way to apply incremental, reversible changes to a database schema over time. They act as version control for the database. Instead of making manual changes to tables, developers write migration scripts (or have an ORM generate them) that are tracked in Git. This is crucial for team collaboration and deployments, as it ensures that the database structure in the development, testing, and production environments stays perfectly synchronized with the application code.",
            difficulty: "Basic"
          },
          {
            q: "Cascading deletes — what are they and when to use them?",
            a: "A cascading delete is a database constraint that ensures when a parent record is deleted, all its associated child records are also automatically deleted. For example, if a 'User' is deleted, a cascading delete rule on the 'Post' table will automatically remove all posts authored by that user. This helps maintain referential integrity and prevents orphaned records. You should use them carefully when child data fundamentally depends on the existence of the parent, but avoid them if the child data needs to be retained for historical or auditing purposes.",
            difficulty: "Intermediate"
          },
          {
            q: "SQLite vs PostgreSQL vs MySQL — when to choose which?",
            a: "SQLite is a lightweight, serverless database stored in a single file, perfect for local development, embedded systems, or small personal projects without high concurrency. PostgreSQL is an advanced, highly extensible object-relational database renowned for strict standards compliance, complex querying, and handling massive, complex datasets, making it the top choice for enterprise applications. MySQL is a highly popular, fast relational database that is relatively easier to set up than PostgreSQL, making it the traditional go-to for standard web applications, CMS platforms, and read-heavy workloads.",
            difficulty: "Basic"
          },
          {
            q: "What is SQLAlchemy and how does it differ from Prisma?",
            a: "SQLAlchemy is the premier ORM and SQL toolkit for Python, whereas Prisma is built for the Node.js/TypeScript ecosystem. SQLAlchemy utilizes the Data Mapper pattern, separating the in-memory objects from the database schema, giving developers extreme control over complex SQL generation and transaction management. Prisma uses a unique approach with its declarative schema file and a Rust-based query engine, focusing heavily on providing seamless, type-safe development for TypeScript without needing to understand underlying SQL nuances. Prisma prioritizes developer experience, while SQLAlchemy prioritizes architectural flexibility.",
            difficulty: "Advanced"
          },
          {
            q: "Connection pooling — what is it and why is it needed?",
            a: "Establishing a new connection to a database is a slow and resource-intensive process. Connection pooling is a technique where a cache (pool) of active database connections is maintained in memory. When the application needs to query the database, it borrows an existing connection from the pool, executes the query, and returns the connection to the pool rather than closing it. This is strictly necessary in high-traffic web applications to drastically reduce latency and prevent overwhelming the database server with constant connection requests.",
            difficulty: "Advanced"
          },
          {
            q: "N+1 query problem — what is it and how to solve it?",
            a: "The N+1 query problem is a common performance bottleneck where an ORM executes one query to retrieve a list of N parent records, and then N additional individual queries to fetch related child records for each parent. This results in severe latency. In Prisma, this is easily solved by using the 'include' statement to eagerly load relations in a single, optimized query. Alternatively, technologies like GraphQL use tools like DataLoader to batch and consolidate related queries, reducing multiple trips to the database down to just one or two.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "CI/CD & Deployment",
        questions: [
          {
            q: "What is CI/CD and why is it important?",
            a: "Continuous Integration (CI) and Continuous Deployment (CD) are modern software development practices aimed at delivering code changes more frequently and reliably. CI automates the merging of developer code into a central repository, triggering automated builds and tests to catch bugs early. CD automates the release of that validated code to staging or production environments. This pipeline is crucial because it eliminates manual deployment errors, accelerates feedback loops, and allows teams to deliver features to users rapidly and safely.",
            difficulty: "Basic"
          },
          {
            q: "Explain a typical CI/CD pipeline (build, test, deploy)",
            a: "A standard pipeline triggers automatically when code is pushed to a repository. First, the Build stage compiles the code, installs dependencies, and creates production-ready assets or Docker images. Next, the Test stage runs unit, integration, and linting checks; if any test fails, the pipeline halts to prevent broken code from advancing. Finally, the Deploy stage provisions the environment and pushes the compiled application to servers or cloud platforms like AWS or Vercel, making the new version live to end users seamlessly.",
            difficulty: "Basic"
          },
          {
            q: "How does GitHub-to-Vercel auto-deployment work?",
            a: "When you link a GitHub repository to a Vercel project, Vercel installs a webhook that listens to repository events. Whenever a developer pushes new commits or creates a pull request, GitHub sends a payload to Vercel. Vercel automatically intercepts this, clones the repository, installs dependencies, and runs the build command specified in package.json. For pull requests, it generates a unique preview URL. For pushes to the main branch, it automatically deploys the built output to the live production domain, completely automating the deployment process.",
            difficulty: "Intermediate"
          },
          {
            q: "What is Vercel and how does it handle serverless functions?",
            a: "Vercel is a cloud platform optimized for frontend frameworks like Next.js and static site hosting. It abstracts away complex infrastructure management. When you deploy an application, Vercel analyzes the project structure. Code inside the 'api' directory or specific server-side Next.js routes are automatically converted into independent Serverless Functions (AWS Lambda under the hood). This means backend logic scales automatically per request without needing to provision or maintain a constantly running Node.js server, ensuring high availability and cost efficiency.",
            difficulty: "Intermediate"
          },
          {
            q: "Render vs Vercel vs Railway — deployment platform comparison",
            a: "Vercel is strictly optimized for frontend frameworks and serverless architectures, offering unparalleled global CDN edge speeds but struggling with long-running backend processes like WebSockets. Render is a fantastic Platform as a Service (PaaS) that handles both frontend static sites and persistent backend web services (like Express servers) and databases, offering an easy Heroku-like experience. Railway is similar to Render but focuses heavily on developer experience with an intuitive canvas UI, instant deployments, and seamless networking between microservices and databases within the same project.",
            difficulty: "Advanced"
          },
          {
            q: "What is a production build and how does it differ from development?",
            a: "A production build is the final, optimized version of an application prepared for deployment. Unlike a development build, which prioritizes fast recompilation and includes helpful warning messages and source maps for debugging, a production build focuses strictly on performance. It heavily minifies and uglifies JavaScript and CSS to reduce file sizes, strips away development tools, and implements optimizations like tree-shaking and aggressive caching. This ensures the application loads as quickly as possible and consumes minimal bandwidth for end users.",
            difficulty: "Basic"
          },
          {
            q: "Environment variables in deployment — how to manage secrets",
            a: "In deployment, sensitive information like API keys, database URLs, and JWT secrets must never be hardcoded or pushed to version control. Instead, they are stored securely in the deployment platform's dashboard as environment variables. Platforms like Vercel or Render inject these securely stored values into the application's runtime environment (accessible via process.env). For enterprise scale, secret managers like AWS Secrets Manager or HashiCorp Vault are used to encrypt, rotate, and securely fetch secrets at runtime without exposing them to developers.",
            difficulty: "Intermediate"
          },
          {
            q: "What are GitHub Actions and how do they work?",
            a: "GitHub Actions is a built-in CI/CD platform that allows developers to automate workflows directly within a GitHub repository. Workflows are defined using YAML files located in the '.github/workflows' directory. A workflow is triggered by specific GitHub events, like a push, pull request, or a schedule. It runs 'jobs' inside isolated virtual machines (runners). These jobs contain 'steps' that can execute shell commands or reusable 'actions' from the marketplace to perform tasks like testing code, analyzing security, or deploying to cloud providers.",
            difficulty: "Intermediate"
          },
          {
            q: "Blue-green deployment vs Canary deployment vs Rolling deployment",
            a: "Rolling deployments incrementally replace old application instances with new ones, ensuring zero downtime but temporarily running mixed versions. Blue-green deployment involves maintaining two identical production environments; the new version (green) is deployed and tested fully, and then traffic is instantly switched from the old version (blue), allowing rapid rollback if issues occur. Canary deployment routes a small percentage of user traffic to the new version to monitor for errors or negative metrics in the real world before gradually rolling it out to the entire user base.",
            difficulty: "Advanced"
          }
        ]
      }
    ]
  }
];

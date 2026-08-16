export const INTERVIEW_CS_FUNDAMENTALS_DATA = [
  {
    role: "Core CS Fundamentals: Operating Systems",
    icon: "🖥️",
    topics: [
      {
        topic: "Process & Thread Management",
        questions: [
          {
            q: "What is the difference between a Process and a Thread?",
            a: "A **Process** is an executing instance of a program. It is isolated, has its own memory space, and is heavy to context-switch. A **Thread** is a subset of a process (a path of execution). Multiple threads within the same process share the same memory space and resources, making context-switching between them much faster and lighter."
          },
          {
            q: "Explain Deadlock and its 4 necessary conditions (Coffman Conditions).",
            a: "A **Deadlock** is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.\n\nThe 4 necessary conditions are:\n1. **Mutual Exclusion:** At least one resource must be non-shareable.\n2. **Hold and Wait:** A process is holding at least one resource and waiting for resources held by others.\n3. **No Preemption:** Resources cannot be forcibly taken from a process.\n4. **Circular Wait:** A closed chain of processes exists, where each is waiting for a resource held by the next process in the chain."
          },
          {
            q: "What is the difference between a Mutex and a Semaphore?",
            a: "A **Mutex** (Mutual Exclusion) is a locking mechanism used to synchronize access to a resource. Only the thread that acquires the mutex can release it. It's strictly for mutual exclusion (count = 1).\n\nA **Semaphore** is a signaling mechanism. It maintains a count indicating how many resources are available. Any thread can signal (increment) or wait (decrement) a semaphore. A binary semaphore (count 0 or 1) acts similarly to a mutex but lacks ownership."
          },
          {
            q: "What is Context Switching?",
            a: "Context Switching is the process of storing the state (context) of a currently running process or thread so that it can be restored and resumed later, and loading the state of the next process to run. It allows a single CPU to handle multiple processes concurrently (multitasking). It is computationally expensive."
          }
        ]
      },
      {
        topic: "Memory & Storage Management",
        questions: [
          {
            q: "What is Virtual Memory and how does it work?",
            a: "Virtual Memory is an OS memory management technique that creates an illusion of a large, contiguous memory space for a process, even if physical RAM is limited. \n\nIt works by dividing memory into equal-sized 'pages'. Active pages reside in RAM, while inactive pages are swapped out to secondary storage (disk) in a 'page file'. When a process requests a page not in RAM, a **Page Fault** occurs, and the OS brings it back from the disk."
          },
          {
            q: "What is Paging and Segmentation?",
            a: "**Paging** divides memory into fixed-size blocks (pages). It eliminates external fragmentation but can suffer from internal fragmentation.\n\n**Segmentation** divides memory into variable-sized blocks based on logical segments (e.g., code, data, stack). It eliminates internal fragmentation but can suffer from external fragmentation."
          },
          {
            q: "What is Thrashing?",
            a: "Thrashing occurs when a system spends more time swapping pages in and out of memory (disk I/O) than actually executing instructions. It drastically degrades system performance and usually happens when there is insufficient physical RAM for the active processes."
          }
        ]
      }
    ]
  },
  {
    role: "Core CS Fundamentals: Computer Networks",
    icon: "🌐",
    topics: [
      {
        topic: "OSI Model & Core Concepts",
        questions: [
          {
            q: "What are the 7 layers of the OSI Model?",
            a: "1. **Physical Layer:** Transmits raw bit streams over a physical medium (Cables, Hubs).\n2. **Data Link Layer:** MAC addressing, error detection, node-to-node delivery (Switches).\n3. **Network Layer:** IP addressing, routing packets across networks (Routers).\n4. **Transport Layer:** End-to-end communication, reliability (TCP, UDP).\n5. **Session Layer:** Manages sessions and connections between applications.\n6. **Presentation Layer:** Data translation, encryption, compression.\n7. **Application Layer:** Network applications and user interfaces (HTTP, FTP, SMTP)."
          },
          {
            q: "What is the difference between TCP and UDP?",
            a: "**TCP (Transmission Control Protocol):** Connection-oriented, reliable, guarantees in-order delivery, uses handshakes, error checking, and flow control. Slower. Used for Web (HTTP), Email, File Transfer.\n\n**UDP (User Datagram Protocol):** Connectionless, unreliable, no guarantees on delivery or ordering, fast, no overhead. Used for Video Streaming, Gaming, VoIP."
          },
          {
            q: "What is the TCP 3-Way Handshake?",
            a: "It is the process used by TCP to establish a reliable connection.\n1. **SYN:** Client sends a SYN (synchronize) packet to the server.\n2. **SYN-ACK:** Server responds with a SYN-ACK packet to acknowledge the request.\n3. **ACK:** Client sends an ACK (acknowledge) packet back to the server, establishing the connection."
          }
        ]
      },
      {
        topic: "Web & Security Protocols",
        questions: [
          {
            q: "How does DNS (Domain Name System) work?",
            a: "DNS translates human-readable domain names (like google.com) into machine-readable IP addresses. \n\nResolution steps:\n1. Check Browser Cache.\n2. Check OS Cache.\n3. Query Recursive Resolver (ISP).\n4. Query Root Nameserver.\n5. Query TLD (Top-Level Domain) Nameserver.\n6. Query Authoritative Nameserver (returns the IP)."
          },
          {
            q: "What is the difference between HTTP and HTTPS?",
            a: "**HTTP** transmits data as plain text, making it vulnerable to interception (sniffing).\n\n**HTTPS** (HTTP Secure) wraps HTTP data in an encrypted TLS/SSL layer. This ensures data confidentiality, integrity, and server authentication. It uses port 443 instead of port 80."
          },
          {
            q: "What happens exactly when you type a URL in the browser?",
            a: "1. **DNS Resolution:** Browser finds the IP address for the domain.\n2. **TCP Connection:** Browser initiates a TCP 3-way handshake with the server.\n3. **TLS Handshake:** If HTTPS, a secure connection is established.\n4. **HTTP Request:** Browser sends an HTTP GET request to the server.\n5. **Server Response:** Server processes the request and sends back an HTTP response (HTML).\n6. **Rendering:** Browser parses the HTML, fetches CSS/JS, builds the DOM, and renders the page on screen."
          }
        ]
      }
    ]
  }
];

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
            a: "Context Switching is the process of storing the state (context) of a currently running process or thread so that it can be restored and resumed later, and loading the state of the next process to run. It allows a single CPU to handle multiple processes concurrently (multitasking). It is computationally expensive.",
            difficulty: "Basic"
          },
          {
            q: "What is a Race Condition?",
            a: "A **Race Condition** occurs when multiple processes or threads read and write to shared data concurrently, and the final result depends on the exact timing or order of their execution. It leads to unpredictable and incorrect behavior.",
            difficulty: "Intermediate"
          },
          {
            q: "What is the Producer-Consumer Problem?",
            a: "It is a classic synchronization problem where a 'Producer' generates data and puts it in a shared buffer, while a 'Consumer' takes data out. The challenge is ensuring the Producer doesn't add data when the buffer is full, and the Consumer doesn't try to remove data when the buffer is empty, using semaphores or mutexes.",
            difficulty: "Intermediate"
          },
          {
            q: "Explain CPU Scheduling and its types (Preemptive vs Non-Preemptive).",
            a: "CPU Scheduling decides which process runs next. \n\n**Preemptive Scheduling:** The OS can interrupt a running process and assign the CPU to another process (e.g., Round Robin).\n\n**Non-Preemptive Scheduling:** A process keeps the CPU until it terminates or blocks (e.g., FCFS, SJF).",
            difficulty: "Basic"
          },
          {
            q: "What is a Zombie Process vs an Orphan Process?",
            a: "A **Zombie Process** is a process that has completed execution, but its entry still exists in the process table because its parent hasn't read its exit status (using wait()).\n\nAn **Orphan Process** is a running process whose parent has finished or terminated. The OS (usually the `init` process) automatically adopts it.",
            difficulty: "Basic"
          },
          {
            q: "Explain Priority Inversion and how to solve it.",
            a: "**Priority Inversion** occurs when a high-priority task is indirectly preempted by a lower-priority task holding a shared resource (mutex) that the high-priority task needs.\n\nIt is solved using **Priority Inheritance**, where the low-priority task temporarily inherits the high priority until it releases the resource.",
            difficulty: "Advanced"
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
            a: "Thrashing occurs when a system spends more time swapping pages in and out of memory (disk I/O) than actually executing instructions. It drastically degrades system performance and usually happens when there is insufficient physical RAM for the active processes.",
            difficulty: "Intermediate"
          },
          {
            q: "What is Internal and External Fragmentation?",
            a: "**Internal Fragmentation:** When a process is allocated a memory block larger than it needs, leaving unused wasted space *inside* the allocated block (common in Paging).\n\n**External Fragmentation:** When there is enough total free memory to satisfy a request, but it is not contiguous, so the request cannot be fulfilled (common in Segmentation).",
            difficulty: "Basic"
          },
          {
            q: "What is a Page Fault?",
            a: "A Page Fault occurs when a program tries to access a block of memory (a page) that is mapped in its virtual address space but is not currently loaded in physical RAM. The OS must then fetch the page from the disk (page file) and load it into RAM.",
            difficulty: "Basic"
          },
          {
            q: "What is Belady’s Anomaly?",
            a: "In page replacement algorithms, it is expected that increasing the number of page frames (RAM) will result in fewer page faults. **Belady’s Anomaly** is a phenomenon where increasing the number of page frames actually *increases* the number of page faults. It commonly occurs with the FIFO (First-In, First-Out) algorithm.",
            difficulty: "Intermediate"
          },
          {
            q: "What is the difference between Logical and Physical Address Space?",
            a: "**Logical Address Space:** The set of all addresses generated by the CPU during a program's execution. These are virtual addresses.\n\n**Physical Address Space:** The set of all actual physical memory addresses in RAM corresponding to the logical addresses. The Memory Management Unit (MMU) handles the mapping between them.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Storage & File Systems",
        questions: [
          {
            q: "What is an Inode in Linux?",
            a: "An **Inode** (index node) is a data structure in a Unix-style file system that describes a filesystem object such as a file or directory. It stores metadata about the file (size, permissions, ownership, physical disk location), but *not* the file's name or its actual data.",
            difficulty: "Intermediate"
          },
          {
            q: "Why are SSDs faster than HDDs?",
            a: "HDDs (Hard Disk Drives) use spinning magnetic platters and a mechanical read/write head, which introduces physical latency (seek time). SSDs (Solid State Drives) use flash memory (NAND chips) with no moving parts, allowing near-instantaneous read and write access to any data block.",
            difficulty: "Basic"
          },
          {
            q: "Explain RAID 0, RAID 1, and RAID 5.",
            a: "**RAID 0 (Striping):** Splits data across multiple disks for maximum speed, but zero redundancy. If one disk fails, all data is lost.\n**RAID 1 (Mirroring):** Duplicates exact data across two disks for high redundancy. Read speed doubles, write speed is normal, but 50% capacity is lost.\n**RAID 5 (Striping with Parity):** Distributes data and parity info across 3+ disks. Offers a balance of speed, capacity, and fault tolerance (can survive 1 disk failure).",
            difficulty: "Intermediate"
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
            a: "It is the process used by TCP to establish a reliable connection.\n1. **SYN:** Client sends a SYN (synchronize) packet to the server.\n2. **SYN-ACK:** Server responds with a SYN-ACK packet to acknowledge the request.\n3. **ACK:** Client sends an ACK (acknowledge) packet back to the server, establishing the connection.",
            difficulty: "Basic"
          },
          {
            q: "What is the difference between IPv4 and IPv6?",
            a: "**IPv4:** 32-bit addresses (approx 4.3 billion unique IPs), represented in dotted-decimal format (e.g., 192.168.1.1).\n\n**IPv6:** 128-bit addresses (virtually infinite IPs), represented in hexadecimal format. Created to solve IPv4 exhaustion.",
            difficulty: "Basic"
          },
          {
            q: "What is the difference between a MAC Address and an IP Address?",
            a: "A **MAC Address** is a physical, hardcoded address assigned to a network interface card (NIC) used for local delivery within a network (Data Link Layer).\n\nAn **IP Address** is a logical address assigned by the network, used to route packets across different networks (Network Layer).",
            difficulty: "Basic"
          },
          {
            q: "What is ARP (Address Resolution Protocol)?",
            a: "ARP is a protocol used to map an IP address (logical) to a MAC address (physical) on a local network. When a device knows the IP but not the MAC, it broadcasts an ARP request, and the target device replies with its MAC address.",
            difficulty: "Intermediate"
          },
          {
            q: "What is Subnetting and why is it used?",
            a: "Subnetting is the practice of dividing a large network into smaller, distinct sub-networks (subnets). It improves network performance by reducing broadcast traffic, enhances security by isolating groups, and conserves IP address space.",
            difficulty: "Intermediate"
          },
          {
            q: "What is the difference between Unicast, Broadcast, and Multicast?",
            a: "**Unicast:** One-to-one communication (e.g., browsing a website).\n**Broadcast:** One-to-all communication on a local network (e.g., ARP request). Sends to everyone.\n**Multicast:** One-to-many communication to a specific subscribed group (e.g., IPTV or video conferencing).",
            difficulty: "Basic"
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
            a: "1. **DNS Resolution:** Browser finds the IP address for the domain.\n2. **TCP Connection:** Browser initiates a TCP 3-way handshake with the server.\n3. **TLS Handshake:** If HTTPS, a secure connection is established.\n4. **HTTP Request:** Browser sends an HTTP GET request to the server.\n5. **Server Response:** Server processes the request and sends back an HTTP response (HTML).\n6. **Rendering:** Browser parses the HTML, fetches CSS/JS, builds the DOM, and renders the page on screen.",
            difficulty: "Advanced"
          },
          {
            q: "What are the common HTTP Methods?",
            a: "- **GET:** Retrieve data from the server.\n- **POST:** Submit new data to the server.\n- **PUT:** Update existing data entirely.\n- **PATCH:** Update data partially.\n- **DELETE:** Remove data.",
            difficulty: "Basic"
          },
          {
            q: "What is the difference between Symmetric and Asymmetric Encryption?",
            a: "**Symmetric Encryption:** Uses a single shared key for both encrypting and decrypting data. It's fast but securely sharing the key is difficult.\n\n**Asymmetric Encryption:** Uses a pair of keys (Public and Private). Data encrypted with the public key can only be decrypted by the private key. Used in TLS/SSL.",
            difficulty: "Intermediate"
          },
          {
            q: "What is a VPN (Virtual Private Network)?",
            a: "A VPN creates a secure, encrypted tunnel over a public network (the internet). It masks the user's IP address and encrypts data traffic, providing privacy, bypassing geo-restrictions, and securing data against interception.",
            difficulty: "Basic"
          },
          {
            q: "Explain how a TLS/SSL Handshake works.",
            a: "1. **Client Hello:** Client sends supported cipher suites and a random byte string.\n2. **Server Hello:** Server chooses a cipher, sends its digital certificate (containing its public key) and its own random bytes.\n3. **Authentication:** Client verifies the certificate with a Certificate Authority (CA).\n4. **Pre-master Secret:** Client encrypts a pre-master secret using the server's public key and sends it.\n5. **Session Keys:** Both generate symmetric session keys from the pre-master secret for fast, secure communication.",
            difficulty: "Advanced"
          },
          {
            q: "What is CORS (Cross-Origin Resource Sharing)?",
            a: "CORS is a browser security mechanism that restricts web pages from making requests to a different domain than the one that served the web page. A server can bypass this restriction by sending specific HTTP headers (like `Access-Control-Allow-Origin`) to permit the browser to read the response.",
            difficulty: "Advanced"
          },
          {
            q: "What is a DDoS Attack?",
            a: "A Distributed Denial of Service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server or network by overwhelming it with a massive flood of internet traffic from multiple compromised sources (a botnet).",
            difficulty: "Basic"
          }
        ]
      }
    ]
  }
];

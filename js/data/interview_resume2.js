export const INTERVIEW_RESUME_DATA_2 = [
  {
    role: "AI/ML & GenAI (Resume-Specific)",
    icon: "🧠",
    topics: [
      {
        topic: "RAG (Retrieval-Augmented Generation) Deep Dive",
        questions: [
          {
            q: "What is RAG and why is it better than fine-tuning for many use cases?",
            a: "RAG stands for Retrieval-Augmented Generation. It enhances Large Language Models (LLMs) by retrieving context from external knowledge sources before generating a response. It is often better than fine-tuning because it grounds the model in up-to-date, domain-specific factual data without requiring expensive and time-consuming retraining. Additionally, it helps mitigate hallucinations by restricting generation to the retrieved context.",
            difficulty: "Basic"
          },
          {
            q: "Explain the full RAG pipeline: ingestion, chunking, embedding, retrieval, generation",
            a: "The ingestion phase loads documents and cleans the data. Chunking breaks these documents into smaller, meaningful segments to fit context limits. Embedding converts these chunks into dense vector representations. During retrieval, a user query is embedded and compared against the stored vectors (e.g., via cosine similarity) to fetch the top-k most relevant chunks. Finally, generation passes the query and retrieved context to an LLM to produce a grounded answer.",
            difficulty: "Intermediate"
          },
          {
            q: "What is the difference between Fine-Tuning, Prompt Engineering, and RAG? When to use each?",
            a: "Prompt Engineering involves crafting inputs to guide the model's behavior and is best for quick tasks using general knowledge. RAG integrates external retrieval, making it ideal when you need factual accuracy, up-to-date information, or domain-specific context without changing the model weights. Fine-Tuning updates the model's internal weights and is preferred for teaching the model a specific style, tone, or highly specialized task that prompt engineering cannot handle efficiently.",
            difficulty: "Advanced"
          },
          {
            q: "What are vector embeddings and how are they generated?",
            a: "Vector embeddings are numerical representations of data (like text, images, or audio) in a high-dimensional space, capturing semantic meaning. They allow machines to understand similarities between different pieces of data based on their spatial distance. They are typically generated using specialized deep learning models, such as OpenAI's embedding models, BERT, or SentenceTransformers.",
            difficulty: "Basic"
          },
          {
            q: "What is FAISS and how does it enable fast similarity search?",
            a: "FAISS (Facebook AI Similarity Search) is a library developed by Meta for efficient similarity search and clustering of dense vectors. It uses various indexing techniques, such as Inverted File Index (IVF) and Hierarchical Navigable Small World (HNSW) graphs, to group similar vectors and drastically reduce search space. This enables extremely fast retrieval across millions or billions of embeddings compared to exact search (k-nearest neighbors).",
            difficulty: "Intermediate"
          },
          {
            q: "Chunking strategies for documents — fixed-size vs semantic chunking",
            a: "Fixed-size chunking splits text into blocks of a predefined character or token count, often with some overlap to prevent cutting off context abruptly. It is fast and simple but might break sentences mid-thought. Semantic chunking uses natural boundaries like paragraphs, sentences, or layout elements to group text by meaning. Semantic chunking generally yields higher-quality retrieval since the embedded chunks contain cohesive thoughts.",
            difficulty: "Intermediate"
          },
          {
            q: "What is cosine similarity and why is it used for vector search?",
            a: "Cosine similarity measures the cosine of the angle between two non-zero vectors in a multi-dimensional space, providing a value between -1 and 1. It is widely used in vector search because it evaluates the orientation (semantic similarity) rather than the magnitude (length) of the vectors. This means documents of different lengths can still be recognized as semantically similar if their content aligns.",
            difficulty: "Basic"
          },
          {
            q: "How do you handle context window limits in RAG?",
            a: "Context window limits restrict how many retrieved documents can be fed into the LLM. To handle this, you can adjust your chunk size to ensure retrieved segments are concise. Re-ranking can prioritize the most crucial documents, allowing you to discard less relevant ones. Summarization techniques or map-reduce approaches can also be used to compress the retrieved information before it is passed to the generation model.",
            difficulty: "Advanced"
          },
          {
            q: "What is hybrid search (combining keyword + semantic search)?",
            a: "Hybrid search combines traditional keyword-based search (like BM25) with semantic vector search. Semantic search excels at understanding intent and context, while keyword search is precise for exact matches like names, acronyms, or IDs. By merging their scores (often using reciprocal rank fusion), hybrid search delivers the best of both worlds, ensuring both semantic relevance and keyword exactness.",
            difficulty: "Intermediate"
          },
          {
            q: "Evaluation metrics for RAG systems (faithfulness, relevancy, context precision)",
            a: "Faithfulness (or groundedness) measures whether the generated answer is derived entirely from the retrieved context, penalizing hallucinations. Context relevancy/precision evaluates whether the retrieved chunks actually contain the information needed to answer the query. Answer relevancy checks how well the final generation addresses the user's original question without adding extraneous information.",
            difficulty: "Advanced"
          },
          {
            q: "What is re-ranking in RAG and why does it improve results?",
            a: "Re-ranking introduces a secondary model (like Cohere Re-rank or a Cross-Encoder) to re-evaluate and re-order the initial set of documents retrieved by a fast vector search. While initial retrieval is optimized for speed and scale, re-ranking models analyze the relationship between the query and document much more deeply. This significantly improves the quality of the top-k results sent to the LLM.",
            difficulty: "Advanced"
          },
          {
            q: "How would you build a RAG pipeline for 1000+ documents?",
            a: "I would start by cleaning and chunking the documents, ensuring logical boundaries like paragraphs. Next, I'd generate embeddings using a model like OpenAI's text-embedding-ada-002 and store them in a vector database like Pinecone or FAISS. For retrieval, I'd implement hybrid search and a re-ranking step to surface the best chunks. Finally, an LLM would use this context alongside a robust system prompt to generate the answer.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "LLMs & Prompt Engineering",
        questions: [
          {
            q: "What is a Large Language Model (LLM)? How does it generate text?",
            a: "A Large Language Model (LLM) is an AI system trained on massive amounts of text data using transformer architectures to understand and generate human-like language. It generates text autoregressively, meaning it predicts the next most likely token (word or subword) in a sequence based on the context of all preceding tokens. This process is repeated iteratively until a stopping condition is met.",
            difficulty: "Basic"
          },
          {
            q: "Temperature, top-p, top-k — what do they control in text generation?",
            a: "These parameters control the randomness and creativity of the model's output. Temperature scales the probability distribution; higher values make output more random, while lower values make it deterministic. Top-k limits the model to select from only the k most likely next tokens. Top-p (nucleus sampling) restricts selection to the smallest set of tokens whose cumulative probability exceeds the value p.",
            difficulty: "Intermediate"
          },
          {
            q: "What is prompt engineering? List 5 key techniques.",
            a: "Prompt engineering is the iterative process of designing and refining inputs to maximize the performance of an LLM. Key techniques include zero-shot prompting, few-shot prompting, chain-of-thought prompting, role-playing (assigning a persona), and providing explicit constraints or output formatting instructions. These techniques help guide the model toward the desired tone, accuracy, and structure.",
            difficulty: "Basic"
          },
          {
            q: "Chain-of-thought prompting — what is it and why does it work?",
            a: "Chain-of-thought prompting instructs the LLM to explain its reasoning step-by-step before arriving at a final answer (e.g., by adding 'Let's think step by step'). This forces the model to allocate more computational tokens to the problem-solving process. It is highly effective for logic, math, and complex reasoning tasks because it breaks the problem down, reducing logical errors and leaps in judgment.",
            difficulty: "Intermediate"
          },
          {
            q: "Few-shot vs Zero-shot vs One-shot learning in the context of LLMs",
            a: "Zero-shot learning means giving the model a task without any prior examples. One-shot provides exactly one example of the desired input and output format. Few-shot provides multiple examples (usually 3 to 5) to help the model recognize patterns, infer the task constraints, and format its response correctly. Providing examples generally dramatically improves consistency and performance.",
            difficulty: "Basic"
          },
          {
            q: "What is hallucination in LLMs and how do you mitigate it?",
            a: "Hallucination occurs when an LLM generates information that sounds plausible but is factually incorrect or unsupported by its training data or context. It can be mitigated by using RAG to ground the model in factual data, employing low temperature settings for deterministic outputs, and designing prompts that explicitly instruct the model to say 'I don't know' if the answer is absent from the provided context.",
            difficulty: "Intermediate"
          },
          {
            q: "System prompts vs User prompts — what is the difference?",
            a: "A system prompt is a high-level instruction set at the beginning of a conversation that defines the AI's persona, boundaries, rules, and overarching behavior. A user prompt is the specific query, instruction, or input provided by the human interacting with the model. The model relies on the system prompt as its foundational context while answering the user prompt.",
            difficulty: "Basic"
          },
          {
            q: "What is token limit and how do you handle it for long documents?",
            a: "The token limit is the maximum number of tokens (input plus output) an LLM can process in a single inference call. For long documents, this limit is handled through chunking and using RAG to retrieve only relevant sections. Other strategies include iterative summarization, where parts of a document are summarized sequentially, or using models specifically designed with massive context windows like Claude 3 or Gemini 1.5 Pro.",
            difficulty: "Intermediate"
          },
          {
            q: "How do you evaluate LLM outputs? (BLEU, ROUGE, human eval, LLM-as-judge)",
            a: "Traditional metrics like BLEU and ROUGE evaluate n-gram overlap, which is fast but struggles with semantic meaning in creative text. Human evaluation is the gold standard for assessing nuance, safety, and helpfulness, but is slow and expensive. LLM-as-judge uses a powerful model (like GPT-4) equipped with a scoring rubric to automatically evaluate the outputs of other models for things like coherence and relevancy.",
            difficulty: "Advanced"
          },
          {
            q: "What are guardrails for LLMs?",
            a: "Guardrails are rules, filters, or secondary models placed around an LLM to ensure its inputs and outputs are safe, ethical, and aligned with business policies. Input guardrails block malicious prompts like prompt injections or jailbreaks. Output guardrails prevent the generation of harmful, toxic, or off-topic content, ensuring the application remains reliable and secure in production.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Fine-Tuning & Model Optimization",
        questions: [
          {
            q: "What is fine-tuning and when should you fine-tune vs use RAG vs prompt engineering?",
            a: "Fine-tuning involves updating a pre-trained model's internal parameters on a specific dataset to adapt it to a new task. Use prompt engineering for quick experiments and general queries. Use RAG for factual question-answering requiring external, dynamic data. Choose fine-tuning when you need the model to learn a specific format, internalize a highly specialized domain vocabulary, or mimic a specific writing style.",
            difficulty: "Basic"
          },
          {
            q: "What is transfer learning and how does it relate to fine-tuning?",
            a: "Transfer learning is the core machine learning concept of taking knowledge learned from one task and applying it to a different but related task. Fine-tuning is a specific application of transfer learning. Instead of training a model from scratch, you take a foundation model pre-trained on a massive corpus and fine-tune its parameters on a much smaller, task-specific dataset to achieve high performance efficiently.",
            difficulty: "Intermediate"
          },
          {
            q: "LoRA and QLoRA — how do they enable efficient fine-tuning?",
            a: "LoRA (Low-Rank Adaptation) freezes the original model weights and injects trainable, low-rank matrices into the architecture, vastly reducing the number of parameters that need updating. QLoRA (Quantized LoRA) takes this further by aggressively quantizing the base model weights (e.g., to 4-bit) to reduce memory footprint. Together, they allow massive LLMs to be fine-tuned on consumer-grade hardware like a single GPU.",
            difficulty: "Advanced"
          },
          {
            q: "What is quantization (4-bit, 8-bit)? Why and how is it done?",
            a: "Quantization reduces the precision of the numerical values representing a model's weights and activations, typically moving from 32-bit floats to 8-bit or 4-bit integers. It is done to dramatically decrease the memory requirements and increase inference speed. Advanced algorithms attempt to perform this compression while preserving the model's accuracy, allowing massive models to run on resource-constrained devices.",
            difficulty: "Advanced"
          },
          {
            q: "RLHF — Reinforcement Learning from Human Feedback",
            a: "RLHF is a training methodology used to align LLM behavior with human preferences. It involves training a reward model based on human rankings of different AI-generated responses. The LLM is then optimized using a reinforcement learning algorithm (like PPO) to maximize the score from the reward model. This technique is largely responsible for the conversational and helpful nature of models like ChatGPT.",
            difficulty: "Advanced"
          },
          {
            q: "What is PEFT (Parameter-Efficient Fine-Tuning)?",
            a: "PEFT refers to a family of techniques used to fine-tune large models by updating only a small subset of parameters rather than full fine-tuning. Methods like LoRA, adapters, and prompt tuning fall under PEFT. By avoiding the adjustment of all billions of parameters, PEFT prevents catastrophic forgetting, speeds up training, and allows multiple distinct fine-tunes to be swapped in and out over a single base model.",
            difficulty: "Intermediate"
          },
          {
            q: "Instruction tuning vs task-specific fine-tuning",
            a: "Task-specific fine-tuning trains a model to excel at one specific job, like sentiment analysis or summarization, often resulting in narrow capabilities. Instruction tuning trains the model on a wide variety of tasks formatted as natural language instructions (e.g., 'Summarize this text: ...'). This enables the model to generalize better and follow zero-shot user commands across many different domains.",
            difficulty: "Intermediate"
          },
          {
            q: "What are adapter layers?",
            a: "Adapter layers are small, trainable neural network modules inserted between the existing layers of a frozen pre-trained model. During training, only the adapter weights are updated while the base model remains untouched. This provides a parameter-efficient way to adapt models for new tasks, allowing for modular updates where different adapters can be loaded for different tasks without changing the base model.",
            difficulty: "Intermediate"
          },
          {
            q: "How does Hugging Face Transformers library simplify fine-tuning?",
            a: "The Hugging Face Transformers library provides standard APIs to load thousands of pre-trained models and datasets with just a few lines of code. It abstracts away the complex boilerplate of PyTorch or TensorFlow training loops using the `Trainer` API. It also integrates seamlessly with PEFT, tokenizers, and evaluation metrics, making fine-tuning highly accessible.",
            difficulty: "Basic"
          },
          {
            q: "Model distillation — what is it and why use it?",
            a: "Model distillation involves training a smaller 'student' model to mimic the outputs, probabilities, and behaviors of a much larger 'teacher' model. The student learns from the rich, soft-probability targets produced by the teacher rather than just raw labels. It is used to create lightweight, fast, and resource-efficient models that retain a surprising amount of the teacher model's performance.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "NLP Pipeline & Text Processing",
        questions: [
          {
            q: "What is TF-IDF and how does it work?",
            a: "TF-IDF stands for Term Frequency-Inverse Document Frequency. It is a statistical measure used to evaluate how important a word is to a document within a larger collection (corpus). Term Frequency measures how often the word appears in the document, while Inverse Document Frequency penalizes words that appear frequently across all documents (like 'the' or 'is').",
            difficulty: "Basic"
          },
          {
            q: "What is Named Entity Recognition (NER)?",
            a: "Named Entity Recognition (NER) is an information extraction task that seeks to locate and classify named entities in unstructured text into pre-defined categories. Common categories include person names, organizations, locations, medical codes, time expressions, and quantities. NER is widely used for building knowledge graphs, redacting PII, and organizing unstructured datasets.",
            difficulty: "Intermediate"
          },
          {
            q: "Sentiment analysis — rule-based vs ML-based approaches",
            a: "Rule-based sentiment analysis uses predefined dictionaries of words mapped to polarity scores (positive or negative) and calculates an overall score. It is simple but struggles with context and sarcasm. ML-based approaches train models (from Naive Bayes to LLMs) on labeled datasets to learn patterns in text, allowing them to understand nuance, context, and complex sentence structures much better.",
            difficulty: "Basic"
          },
          {
            q: "What is K-Means clustering and how is it applied to text?",
            a: "K-Means is an unsupervised machine learning algorithm that partitions data into 'K' distinct clusters based on similarity. To apply it to text, documents are first converted into numerical vectors using techniques like TF-IDF or Word2Vec. K-Means then iteratively assigns documents to the nearest cluster centroid, making it useful for topic discovery or grouping similar support tickets.",
            difficulty: "Intermediate"
          },
          {
            q: "Tokenization — BPE, WordPiece, SentencePiece",
            a: "Tokenization splits text into smaller units. BPE (Byte Pair Encoding) merges the most frequent pairs of characters into subwords iteratively, balancing vocabulary size and handling of out-of-vocabulary words. WordPiece is similar to BPE but merges pairs that maximize the likelihood of the training data. SentencePiece works directly on raw text strings and includes spaces as a character, making it language-agnostic.",
            difficulty: "Advanced"
          },
          {
            q: "What is text preprocessing? (lowercasing, stopword removal, lemmatization, stemming)",
            a: "Text preprocessing cleans and normalizes raw text for machine learning. Lowercasing ensures uniformity. Stopword removal strips out common, uninformative words like 'and' or 'the'. Stemming aggressively chops off word endings to reach a root form (e.g., 'running' to 'run'). Lemmatization is a more advanced technique that uses vocabulary and morphological analysis to return the base dictionary form of a word.",
            difficulty: "Basic"
          },
          {
            q: "Word2Vec vs GloVe vs BERT embeddings — key differences",
            a: "Word2Vec uses shallow neural networks (CBOW or Skip-gram) to learn word associations based on local context windows. GloVe captures global statistical co-occurrence information across the entire corpus. Both produce static embeddings where a word always has the same vector. BERT creates contextualized embeddings, meaning the vector for 'bank' changes depending on whether the context is a river or a financial institution.",
            difficulty: "Advanced"
          },
          {
            q: "What is a Transformer architecture? Explain self-attention.",
            a: "The Transformer is a deep learning architecture that avoids sequential processing (like RNNs) in favor of processing all tokens in parallel, enabling massive scalability. Its core mechanism, self-attention, allows the model to weigh the importance of every word in a sequence relative to every other word. This helps the model deeply understand long-range dependencies and context in text.",
            difficulty: "Advanced"
          },
          {
            q: "BERT vs GPT — architecture and use case differences",
            a: "BERT is an encoder-only transformer model designed to understand the context of a word from both its left and right sides simultaneously. It excels at tasks like classification, NER, and question-answering. GPT is a decoder-only model optimized for autoregressive text generation, predicting the next word based only on the preceding left context. It is superior for generative tasks like writing and summarization.",
            difficulty: "Intermediate"
          },
          {
            q: "What is Hugging Face and why is it important in the ML ecosystem?",
            a: "Hugging Face is a collaborative platform and open-source library widely considered the 'GitHub of Machine Learning'. It hosts hundreds of thousands of pre-trained models, datasets, and demos. Its Transformers library provides a unified API for state-of-the-art NLP, vision, and audio models, dramatically lowering the barrier to entry for AI developers and accelerating research.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "ML Frameworks & Libraries",
        questions: [
          {
            q: "TensorFlow vs PyTorch — key differences and when to use each",
            a: "TensorFlow, developed by Google, has traditionally been stronger for production deployment, mobile (TFLite), and large-scale serving. PyTorch, developed by Meta, is known for its dynamic computational graph and pythonic, intuitive syntax, making it the dominant choice for research and rapid prototyping. Today, PyTorch has grown robust production tooling and is generally the preferred choice across the industry.",
            difficulty: "Basic"
          },
          {
            q: "What is scikit-learn and what are its core modules?",
            a: "Scikit-learn is a fundamental Python library for classical machine learning. It provides simple and efficient tools for data analysis and predictive modeling. Its core modules include classification (SVM, Random Forests), regression (linear, ridge), clustering (K-Means), dimensionality reduction (PCA), and extensive utilities for model evaluation and preprocessing.",
            difficulty: "Basic"
          },
          {
            q: "Pandas — what is it and how is it used in data pipelines?",
            a: "Pandas is a powerful Python library used for data manipulation and analysis, primarily through its DataFrame object. In data pipelines, it is used to load tabular data from various formats (CSV, SQL), clean missing values, filter rows, aggregate statistics, and reshape datasets. It serves as the primary tool for exploratory data analysis before data is fed into ML models.",
            difficulty: "Basic"
          },
          {
            q: "NumPy — what are ndarrays and broadcasting?",
            a: "NumPy is the foundational package for scientific computing in Python. The ndarray is a multi-dimensional array object that enables fast, vectorised mathematical operations without standard Python loops. Broadcasting is a powerful NumPy feature that automatically aligns and performs operations on arrays of different shapes, making code cleaner and computationally much faster.",
            difficulty: "Intermediate"
          },
          {
            q: "What is a computational graph in deep learning frameworks?",
            a: "A computational graph is a directed graph where nodes represent variables (tensors) or mathematical operations, and edges represent the flow of data. Frameworks build these graphs to represent a neural network's forward pass. Crucially, traversing the graph backward allows the framework to automatically compute gradients (derivatives) for every parameter, which is essential for training via backpropagation.",
            difficulty: "Advanced"
          },
          {
            q: "How does PyTorch autograd work?",
            a: "PyTorch autograd is an automatic differentiation engine. When tensors are created with `requires_grad=True`, autograd tracks all operations performed on them and builds a dynamic computational graph on the fly. During the backward pass (triggered by `.backward()`), it traverses this graph to compute gradients using the chain rule, storing the results in the `.grad` attribute of the tensors.",
            difficulty: "Advanced"
          },
          {
            q: "What is model serialization (saving/loading models)?",
            a: "Model serialization is the process of converting a trained model's architecture, weights, and optimizer states into a format that can be saved to disk. In PyTorch, this is typically done using `torch.save()` to write a `.pt` or `.pth` file containing a state dictionary. Saving models is critical for pausing training, transferring models between machines, or deploying them to production environments.",
            difficulty: "Intermediate"
          },
          {
            q: "What is MLOps and why is it important?",
            a: "MLOps (Machine Learning Operations) is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently. It combines ML, DevOps, and data engineering. MLOps is vital because developing a model in a notebook is only a small part of the lifecycle; monitoring for data drift, automating CI/CD pipelines, and managing model versioning are required for real-world reliability.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Web Scraping & Data Collection",
        questions: [
          {
            q: "What is Playwright and how does it differ from Selenium and Puppeteer?",
            a: "Playwright is a modern end-to-end testing and web scraping framework by Microsoft. Unlike Puppeteer, which is mostly limited to Chrome, Playwright natively supports Chromium, Firefox, and WebKit out of the box. Compared to Selenium, Playwright boasts faster execution, auto-waiting mechanisms for elements to appear, and native interception of network requests, making it highly robust for modern web apps.",
            difficulty: "Basic"
          },
          {
            q: "Headless browsers — what are they and why use them for scraping?",
            a: "A headless browser is a web browser executed without a graphical user interface (GUI). It runs in the background and operates exactly like a normal browser, executing JavaScript and rendering the DOM. They are used in scraping because they are faster and consume fewer server resources than GUI browsers, while still being able to interact with complex, JavaScript-heavy websites.",
            difficulty: "Basic"
          },
          {
            q: "How do you handle dynamic content (JavaScript-rendered pages) during scraping?",
            a: "Standard HTTP request libraries (like `requests` in Python) cannot execute JavaScript. To scrape dynamic content, you must use a headless browser automation tool like Playwright or Selenium to load the page and wait for the JavaScript execution to populate the DOM. Alternatively, you can inspect the site's network traffic to find the hidden backend API calls and request the JSON data directly.",
            difficulty: "Intermediate"
          },
          {
            q: "Rate limiting and ethical scraping best practices",
            a: "Ethical scraping requires respecting a website's `robots.txt` file and Terms of Service. To prevent overloading a server, scrapers should implement rate limiting by adding randomized delays (sleeps) between requests. Additional best practices include identifying your scraper with a clear User-Agent string, caching responses to minimize redundant requests, and extracting data only during off-peak hours.",
            difficulty: "Intermediate"
          },
          {
            q: "How would you build an automated web monitoring pipeline?",
            a: "I would use Python with Playwright to create scripts that navigate the target sites and extract the necessary data. I'd schedule these scripts to run periodically using cron jobs or Apache Airflow. The scraped data would be validated, parsed, and stored in a database like PostgreSQL. Finally, if specific thresholds or changes are detected, the pipeline would trigger alerts via email or Slack webhooks.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Computer Vision Basics",
        questions: [
          {
            q: "Image classification pipeline overview",
            a: "An image classification pipeline starts with data ingestion and preprocessing, such as resizing images, normalizing pixel values, and applying data augmentation. The data is then fed into a Deep Learning model (like a CNN or Vision Transformer) to extract features and predict class probabilities. Finally, the model outputs the class with the highest probability, and performance is evaluated using metrics like accuracy or F1-score.",
            difficulty: "Basic"
          },
          {
            q: "What is a CNN and how does convolution work?",
            a: "A Convolutional Neural Network (CNN) is a deep learning architecture designed for processing structured grid data like images. The convolution operation involves sliding a small matrix (a filter or kernel) across the input image to perform element-wise multiplication and summation. This process extracts spatial hierarchies of features, starting from simple edges in early layers to complex object parts in deeper layers.",
            difficulty: "Intermediate"
          },
          {
            q: "Transfer learning for image tasks (using pre-trained models)",
            a: "Transfer learning involves taking a CNN that has already been trained on a massive dataset (like ImageNet) and adapting it for a custom task. You typically freeze the early layers, which recognize generic features like edges and textures, and replace the final classification head with a new one tailored to your specific classes. This dramatically reduces required training time and data.",
            difficulty: "Basic"
          },
          {
            q: "Data augmentation techniques for images",
            a: "Data augmentation synthetically expands the size of a training dataset by applying random but realistic transformations to existing images. Common techniques include random rotations, horizontal or vertical flipping, cropping, zooming, and altering brightness or contrast. This introduces noise and variance, preventing the model from overfitting to specific training examples and improving its generalization.",
            difficulty: "Intermediate"
          },
          {
            q: "Object detection vs image classification vs segmentation",
            a: "Image classification predicts a single label for an entire image. Object detection goes a step further by identifying multiple objects within an image and drawing bounding boxes around them. Image segmentation is the most granular, classifying every single pixel in the image to exact object boundaries (semantic segmentation) or distinguishing different instances of the same object class (instance segmentation).",
            difficulty: "Advanced"
          }
        ]
      }
    ]
  },
  {
    role: "Docker, Cloud & DevOps",
    icon: "☁️",
    topics: [
      {
        topic: "Docker",
        questions: [
          {
            q: "What is Docker and why is containerization important?",
            a: "Docker is a platform that uses OS-level virtualization to deliver software in packages called containers. Containerization is important because it bundles an application with all its dependencies, libraries, and configurations into a single standardized unit. This eliminates the 'it works on my machine' problem, ensuring consistent execution across development, testing, and production environments.",
            difficulty: "Basic"
          },
          {
            q: "Docker image vs Docker container — what is the difference?",
            a: "A Docker image is a read-only, immutable template containing the application code, runtime, libraries, and environment variables needed to run a piece of software. A Docker container is a running instance of that image. You can think of an image as the blueprint or class definition, and the container as the constructed building or instantiated object.",
            difficulty: "Basic"
          },
          {
            q: "What is a Dockerfile? Explain the key instructions (FROM, RUN, COPY, CMD, EXPOSE, ENTRYPOINT)",
            a: "A Dockerfile is a text document containing instructions to build a Docker image. 'FROM' specifies the base image. 'RUN' executes commands during the build process to install dependencies. 'COPY' transfers files from the host into the image. 'EXPOSE' documents which ports the container will listen on. 'CMD' provides default arguments for the executing container, while 'ENTRYPOINT' configures the container to run as a specific executable.",
            difficulty: "Intermediate"
          },
          {
            q: "Docker Compose — what is it and when to use it?",
            a: "Docker Compose is a tool used for defining and running multi-container Docker applications via a single `docker-compose.yml` file. You use it when your application relies on multiple interacting services, such as a web server, a database, and a caching layer. Compose allows you to start, stop, and configure the network for all these services simultaneously with a single command.",
            difficulty: "Intermediate"
          },
          {
            q: "What is a Docker volume and why is it needed?",
            a: "Docker containers are ephemeral, meaning any data written to the container's writable layer is lost when the container is deleted. Docker volumes are the preferred mechanism for persisting data generated by and used by Docker containers. They exist outside the container's lifecycle and are managed directly by Docker, allowing data to survive container recreation and be shared across multiple containers.",
            difficulty: "Intermediate"
          },
          {
            q: "Docker networking — bridge, host, and overlay networks",
            a: "The 'bridge' network is the default, allowing containers on the same host to communicate while remaining isolated from the host network. The 'host' network removes network isolation entirely, binding the container directly to the host machine's networking stack for maximum performance. An 'overlay' network facilitates communication between multiple Docker daemon hosts, primarily used in swarm or clustered environments.",
            difficulty: "Advanced"
          },
          {
            q: "Multi-stage Docker builds — what and why?",
            a: "Multi-stage builds allow you to use multiple 'FROM' statements in a single Dockerfile. You can compile your code in a heavyweight build stage, and then copy only the compiled artifacts into a lightweight, final production stage (like Alpine Linux). This drastically reduces the final Docker image size and minimizes the security attack surface by excluding compilers and build tools.",
            difficulty: "Advanced"
          },
          {
            q: "How do you optimize Docker image size?",
            a: "To optimize image size, use small base images like Alpine or Distroless. Combine multiple `RUN` commands into a single layer to reduce intermediate layer overhead and clean up package manager caches within the same layer. Avoid copying unnecessary files using a `.dockerignore` file, and employ multi-stage builds to ensure only production artifacts are included in the final image.",
            difficulty: "Intermediate"
          },
          {
            q: "Docker Hub vs private container registries",
            a: "Docker Hub is the default public registry provided by Docker, hosting official public images and allowing individuals to share their containers globally. However, enterprises often use private container registries (like AWS ECR, Azure ACR, or self-hosted Harbor) to securely store proprietary software, manage access control via IAM, and ensure faster, local deployments within their own cloud networks.",
            difficulty: "Basic"
          },
          {
            q: "What is the difference between CMD and ENTRYPOINT?",
            a: "Both instructions define what command runs when a container starts, but they behave differently. `ENTRYPOINT` sets a hardcoded executable that cannot easily be overridden at the command line, making the container behave like a specific command-line tool. `CMD` provides default arguments to the `ENTRYPOINT` or sets a default command that can be easily overridden by passing arguments to `docker run`.",
            difficulty: "Intermediate"
          },
          {
            q: "How do you pass environment variables to a Docker container?",
            a: "Environment variables can be defined statically inside a Dockerfile using the `ENV` instruction. During runtime, they can be passed individually using the `-e` flag in the `docker run` command (e.g., `-e DB_USER=admin`). Alternatively, you can supply a `.env` file containing multiple key-value pairs using the `--env-file` flag, which is cleaner for managing complex configurations.",
            difficulty: "Basic"
          },
          {
            q: "Docker security best practices (non-root users, minimal images, secrets)",
            a: "By default, Docker containers run as root, which poses a significant security risk. A best practice is to define a non-root user in the Dockerfile using the `USER` instruction. You should also use minimal base images to reduce vulnerabilities, regularly scan images for CVEs, avoid hardcoding secrets in images (using Docker Secrets or external vault services instead), and mount sensitive directories as read-only.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Cloud Platforms (AWS & Azure)",
        questions: [
          {
            q: "What is cloud computing? IaaS vs PaaS vs SaaS",
            a: "Cloud computing is the delivery of computing services—servers, storage, databases, networking, software—over the internet. IaaS (Infrastructure as a Service) provides basic raw computing resources like VMs (e.g., AWS EC2). PaaS (Platform as a Service) provides a managed environment for developers to build and deploy apps without managing the underlying OS (e.g., Heroku). SaaS (Software as a Service) delivers fully functional applications directly to end-users (e.g., Gmail).",
            difficulty: "Basic"
          },
          {
            q: "AWS core services: EC2, S3, Lambda, RDS, DynamoDB, SQS, SNS — brief overview of each",
            a: "EC2 provides resizable virtual servers. S3 is scalable object storage. Lambda offers serverless event-driven compute. RDS provides managed relational databases like MySQL. DynamoDB is a managed, highly scalable NoSQL database. SQS is a message queuing service for decoupling application components. SNS is a pub/sub messaging service used for push notifications and system alerts.",
            difficulty: "Basic"
          },
          {
            q: "What is AWS Lambda and what is serverless computing?",
            a: "AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources. Serverless computing is an architectural model where the cloud provider dynamically manages the allocation and provisioning of servers. You don't manage infrastructure, and you are only billed for the exact millisecond compute time your code consumes.",
            difficulty: "Intermediate"
          },
          {
            q: "What is an S3 bucket and what are its storage classes?",
            a: "An S3 bucket is a container for storing objects (files and metadata) in AWS Simple Storage Service. S3 offers various storage classes tailored for different use cases. 'S3 Standard' is for frequently accessed data. 'S3 Intelligent-Tiering' automatically moves data to cost-effective tiers. 'S3 Glacier' and 'Glacier Deep Archive' are extremely cheap storage classes designed for long-term archiving and rare retrieval.",
            difficulty: "Intermediate"
          },
          {
            q: "Azure DevOps — what does it cover?",
            a: "Azure DevOps is a comprehensive suite of cloud services for software collaboration and deployment. It includes Azure Boards for agile project management and issue tracking. Azure Repos provides Git repositories for source control. Azure Pipelines offers automated CI/CD to build, test, and deploy code. Azure Test Plans manages manual and exploratory testing, and Azure Artifacts manages package sharing.",
            difficulty: "Intermediate"
          },
          {
            q: "What is AZ-400 (Azure DevOps Solutions) about? Key concepts.",
            a: "The AZ-400 certification validates expertise in designing and implementing DevOps practices on Microsoft Azure. Key concepts include designing continuous integration and continuous delivery (CI/CD) pipelines, implementing infrastructure as code (IaC), managing source control and dependency management, integrating security into the development process (DevSecOps), and designing continuous monitoring strategies.",
            difficulty: "Advanced"
          },
          {
            q: "What is Infrastructure as Code (IaC)? Terraform vs CloudFormation vs ARM templates",
            a: "IaC is the process of managing and provisioning computer data centers through machine-readable definition files rather than physical hardware configuration or interactive configuration tools. AWS CloudFormation is proprietary to AWS, while ARM templates are native to Azure. Terraform by HashiCorp is cloud-agnostic, using a unified language (HCL) to deploy infrastructure across multiple cloud providers.",
            difficulty: "Advanced"
          },
          {
            q: "What are VPCs and subnets in AWS?",
            a: "A VPC (Virtual Private Cloud) is a logically isolated section of the AWS cloud where you can launch resources in a virtual network that you define. It gives you control over IP address ranges, route tables, and gateways. A subnet is a subdivided range of IP addresses within a VPC. Public subnets have a route to the internet, while private subnets do not, making them secure for backend databases.",
            difficulty: "Intermediate"
          },
          {
            q: "IAM — Identity and Access Management in cloud",
            a: "IAM is the security discipline that enables the right individuals to access the right resources at the right times for the right reasons. In the cloud, IAM lets you create users, groups, and roles, and apply granular permissions (policies) to them. Following the principle of least privilege, IAM ensures users and services can only execute actions explicitly permitted by their assigned policies.",
            difficulty: "Basic"
          },
          {
            q: "What is auto-scaling and how does it work?",
            a: "Auto-scaling dynamically adjusts the number of computational resources allocated to an application based on real-time demand. In AWS, an Auto Scaling Group monitors metrics like CPU utilization or network traffic via CloudWatch. When thresholds are breached, it automatically spins up new EC2 instances (scaling out) to handle the load, or terminates instances (scaling in) when demand drops to save costs.",
            difficulty: "Intermediate"
          },
          {
            q: "Cloud-native vs cloud-hosted applications",
            a: "Cloud-hosted applications are traditional monolithic systems built for on-premises hardware that have been lifted and shifted onto cloud VMs (like EC2). Cloud-native applications are designed from the ground up for the cloud environment. They rely on microservices architecture, containerization (Docker/Kubernetes), and managed serverless databases to be inherently scalable, resilient, and fully utilize cloud elasticity.",
            difficulty: "Advanced"
          },
          {
            q: "What is a load balancer in cloud architecture?",
            a: "A load balancer is a device or service that automatically distributes incoming network traffic across multiple healthy servers or targets (like EC2 instances or containers). This prevents any single server from becoming a bottleneck, ensuring high availability, fault tolerance, and responsiveness. In AWS, this is typically handled by the Elastic Load Balancing (ELB) service.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Firebase & Supabase",
        questions: [
          {
            q: "What is Firebase and what services does it provide?",
            a: "Firebase is a Backend-as-a-Service (BaaS) platform backed by Google that helps developers build web and mobile applications quickly. It provides fully managed backend services such as NoSQL databases (Firestore, Realtime Database), robust user authentication, cloud storage for files, scalable hosting, and serverless compute via Cloud Functions. It is heavily utilized for rapid prototyping and real-time apps.",
            difficulty: "Basic"
          },
          {
            q: "Firebase Firestore — document model vs SQL",
            a: "Firestore is a NoSQL document database, meaning data is stored in flexible JSON-like documents organized into collections, rather than rigid rows and columns like in SQL. Firestore is schema-less, highly scalable, and optimized for real-time synchronization. However, unlike SQL, it lacks complex querying capabilities, JOIN operations, and aggregate functions, requiring developers to denormalize their data.",
            difficulty: "Intermediate"
          },
          {
            q: "Firebase Anonymous Authentication — what is it and when to use it?",
            a: "Firebase Anonymous Authentication allows users to create temporary, anonymous accounts to interact with your app without providing credentials like an email or password. It is extremely useful for onboarding flows or e-commerce carts where you want to allow users to experience app features and save data immediately, prompting them to upgrade to a permanent account later.",
            difficulty: "Intermediate"
          },
          {
            q: "Firebase Realtime Database vs Firestore — differences",
            a: "Both are Firebase NoSQL databases, but they have architectural differences. The Realtime Database stores data as one massive JSON tree, making it fast for simple syncs but difficult to scale with deep, complex hierarchies. Firestore is its newer successor, using a collection/document model. Firestore offers more expressive queries, better multi-region scaling, and is generally recommended for most new applications.",
            difficulty: "Advanced"
          },
          {
            q: "What is Supabase and how does it compare to Firebase?",
            a: "Supabase is an open-source alternative to Firebase. While Firebase relies on proprietary NoSQL databases, Supabase is built around a dedicated, scalable PostgreSQL relational database. Supabase provides similar BaaS features—authentication, real-time subscriptions, edge functions, and storage—but appeals to developers who want the power, data integrity, and complex querying capabilities of traditional SQL.",
            difficulty: "Basic"
          },
          {
            q: "Supabase as a PostgreSQL backend — key features",
            a: "Because Supabase is just PostgreSQL under the hood, developers get access to advanced SQL features like complex JOINs, views, foreign key constraints, and triggers. Supabase automatically generates a secure, instant RESTful API based on the database schema. It also incorporates Row Level Security (RLS) policies to handle access control directly within the database layer.",
            difficulty: "Intermediate"
          },
          {
            q: "Firebase Hosting vs Vercel vs Netlify",
            a: "Firebase Hosting is excellent for serving static assets and integrates seamlessly with other Firebase services and Cloud Functions. Vercel is highly optimized for frameworks like Next.js, offering out-of-the-box Server-Side Rendering (SSR) and Edge networks. Netlify is a general-purpose Jamstack pioneer that excels in CI/CD integration and serverless form handling. Developers choose based on their framework and backend ecosystem.",
            difficulty: "Intermediate"
          },
          {
            q: "How do you handle real-time data sync with Firebase?",
            a: "Real-time sync in Firebase is handled through database listeners rather than standard HTTP polling. Using the Firebase client SDKs, developers can attach an `onSnapshot` listener to a specific document or query. Whenever data changes on the server, Firebase instantly pushes the update through WebSockets to all connected clients, allowing the UI to reflect changes instantaneously without page reloads.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "DevOps Practices",
        questions: [
          {
            q: "What is DevOps and what are its key principles?",
            a: "DevOps is a culture and set of practices that unites software development (Dev) and IT operations (Ops) teams. Its key principles include automating repetitive tasks, implementing CI/CD pipelines, treating infrastructure as code, practicing continuous monitoring, and fostering a collaborative culture. The goal is to shorten the systems development life cycle and provide high software quality continuously.",
            difficulty: "Basic"
          },
          {
            q: "Explain the DevOps lifecycle (Plan, Code, Build, Test, Release, Deploy, Monitor)",
            a: "The lifecycle forms an infinite loop of continuous improvement. 'Plan and Code' cover requirement gathering and writing software. 'Build and Test' involve compiling code and running automated suites (CI). 'Release and Deploy' handle moving artifacts through staging to production seamlessly (CD). Finally, 'Monitor' tracks application health and user feedback in production, which feeds directly back into the 'Plan' phase.",
            difficulty: "Intermediate"
          },
          {
            q: "What is containerization vs virtualization?",
            a: "Virtualization relies on a Hypervisor to allocate physical hardware resources to multiple Virtual Machines (VMs), each running its own heavy guest OS. Containerization virtualizes the operating system itself. Containers share the host machine's OS kernel but run in isolated user spaces. This makes containers significantly more lightweight, faster to start, and less resource-intensive than traditional VMs.",
            difficulty: "Basic"
          },
          {
            q: "What is Kubernetes and how does it orchestrate containers?",
            a: "Kubernetes (K8s) is an open-source platform designed to automate the deployment, scaling, and management of containerized applications. It orchestrates containers by scheduling them onto worker nodes, managing their lifecycle, ensuring high availability, and handling load balancing. If a container crashes, Kubernetes automatically replaces it according to the desired state defined by the user.",
            difficulty: "Intermediate"
          },
          {
            q: "Monitoring and logging — Prometheus, Grafana, ELK Stack",
            a: "Prometheus is a time-series database optimized for pulling operational metrics from services. Grafana is a visualization tool that connects to Prometheus to display beautiful, real-time dashboards. The ELK Stack (Elasticsearch, Logstash, Kibana) handles application logs: Logstash aggregates log data, Elasticsearch indexes it for rapid full-text search, and Kibana visualizes the logs for debugging and analysis.",
            difficulty: "Advanced"
          },
          {
            q: "What is a reverse proxy? Nginx vs Traefik",
            a: "A reverse proxy is a server that sits in front of backend servers, intercepting client requests and forwarding them appropriately. It provides load balancing, SSL termination, and caching. Nginx is a battle-tested, high-performance web server and reverse proxy, configured statically. Traefik is a modern edge router built specifically for microservices; it dynamically discovers services and updates its configuration automatically.",
            difficulty: "Intermediate"
          },
          {
            q: "What are microservices and how do they differ from monolithic architecture?",
            a: "A monolithic architecture packages all business logic, databases, and UI into a single, indivisible deployment unit. Microservices break the application down into small, loosely coupled, independently deployable services organized around specific business capabilities. While microservices allow for independent scaling and technology choices, they introduce operational complexity and network overhead compared to monoliths.",
            difficulty: "Basic"
          },
          {
            q: "What is a service mesh?",
            a: "A service mesh (like Istio or Linkerd) is a dedicated infrastructure layer added to microservices architecture to manage service-to-service communication. Instead of hardcoding communication logic into the apps, a lightweight proxy (sidecar) is deployed next to each service. The mesh handles complex networking logic, including secure mTLS encryption, traffic routing, retry policies, and deep observability across the cluster.",
            difficulty: "Advanced"
          }
        ]
      }
    ]
  }
];

export const INTERVIEW_DATA = [
  {
    role: "AI / Machine Learning",
    icon: "🤖",
    topics: [
      {
        topic: "ML Fundamentals",
        questions: [
          {
            q: "Supervised vs Unsupervised vs Reinforcement learning",
            a: "Supervised learning uses labeled data to train models to map inputs to outputs. Unsupervised learning finds hidden patterns or intrinsic structures in unlabeled data. Reinforcement learning trains agents to make sequences of decisions by rewarding desired behaviors and punishing negative ones.",
            difficulty: "Basic"
          },
          {
            q: "Bias-Variance tradeoff",
            a: "Bias is the error from erroneous assumptions in the learning algorithm, leading to underfitting. Variance is the error from sensitivity to small fluctuations in the training set, leading to overfitting. The tradeoff is balancing these two to minimize total error and improve generalization.",
            difficulty: "Intermediate"
          },
          {
            q: "Overfitting and how to prevent it",
            a: "Overfitting occurs when a model learns the training data too well, capturing noise and failing to generalize. It can be prevented using techniques like cross-validation, regularization (L1/L2), pruning, dropout, or simply acquiring more diverse training data.",
            difficulty: "Basic"
          },
          {
            q: "Cross-validation (K-fold)",
            a: "K-fold cross-validation is a resampling procedure used to evaluate machine learning models. The data is randomly partitioned into K equal-sized folds, and the model is trained on K-1 folds while validating on the remaining fold. This process repeats K times, providing a more robust estimate of model performance.",
            difficulty: "Intermediate"
          },
          {
            q: "Feature engineering and feature selection",
            a: "Feature engineering involves creating new, meaningful input variables from raw data to improve model performance. Feature selection is the process of choosing the most relevant features and discarding redundant ones, which reduces dimensionality and computational cost.",
            difficulty: "Basic"
          },
          {
            q: "Curse of dimensionality",
            a: "As the number of features or dimensions grows, the amount of data needed to generalize accurately grows exponentially. In high-dimensional spaces, data points become sparse, making it difficult for models to find meaningful patterns without overfitting.",
            difficulty: "Advanced"
          },
          {
            q: "Ensemble methods (Bagging vs Boosting)",
            a: "Bagging (Bootstrap Aggregating) builds multiple independent models in parallel and averages their predictions to reduce variance, like in Random Forest. Boosting builds models sequentially, where each new model focuses on correcting the errors of the previous ones, aiming to reduce bias.",
            difficulty: "Intermediate"
          },
          {
            q: "Gradient Descent variants (SGD, Adam, RMSprop)",
            a: "Stochastic Gradient Descent (SGD) updates parameters for each training example, leading to faster but noisier convergence. RMSprop adapts the learning rate based on a moving average of recent gradients. Adam combines momentum and RMSprop, adjusting learning rates adaptively for each parameter.",
            difficulty: "Advanced"
          },
          {
            q: "Regularization (L1 vs L2)",
            a: "L1 regularization (Lasso) adds the absolute value of coefficients as a penalty term, which can shrink some coefficients to zero, effectively performing feature selection. L2 regularization (Ridge) adds the squared magnitude of coefficients, which penalizes large weights but rarely reduces them to zero.",
            difficulty: "Intermediate"
          },
          {
            q: "Train/Validation/Test split purpose",
            a: "The training set is used to fit the model parameters. The validation set is used to tune hyperparameters and prevent overfitting during development. Finally, the test set provides an unbiased evaluation of the final model's performance on unseen data.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Neural Networks & Deep Learning",
        questions: [
          {
            q: "What is a neural network and how does backpropagation work?",
            a: "A neural network is a computing system inspired by biological brains, consisting of interconnected layers of artificial neurons. Backpropagation is the algorithm used to train it by calculating the gradient of the loss function with respect to each weight, using the chain rule to update weights backwards from the output.",
            difficulty: "Basic"
          },
          {
            q: "Activation functions (ReLU, Sigmoid, Tanh, Softmax) and when to use each",
            a: "ReLU is widely used in hidden layers due to its efficiency and avoidance of the vanishing gradient problem. Sigmoid and Tanh are useful for binary classification and constrained outputs, while Softmax is used in the output layer for multi-class classification to output probabilities.",
            difficulty: "Intermediate"
          },
          {
            q: "Vanishing and exploding gradient problem",
            a: "During backpropagation, gradients can become vanishingly small or exponentially large as they propagate through deep layers. This prevents the network from learning effectively. It's mitigated by careful weight initialization, using ReLU, and batch normalization.",
            difficulty: "Advanced"
          },
          {
            q: "Batch Normalization",
            a: "Batch Normalization normalizes the inputs of a layer across the mini-batch to have a mean of zero and variance of one. This stabilizes and accelerates training, allowing higher learning rates and reducing the dependency on careful initialization.",
            difficulty: "Intermediate"
          },
          {
            q: "Dropout and its purpose",
            a: "Dropout is a regularization technique where randomly selected neurons are ignored (dropped out) during training. This prevents complex co-adaptations on training data, forcing the network to learn more robust features that generalize better.",
            difficulty: "Basic"
          },
          {
            q: "CNN architecture and convolution operation",
            a: "CNNs are designed for grid-like data like images, consisting of convolutional, pooling, and fully connected layers. The convolution operation slides a filter (kernel) over the input to extract spatial hierarchies of features like edges and textures.",
            difficulty: "Intermediate"
          },
          {
            q: "RNN vs LSTM vs GRU",
            a: "RNNs process sequential data but struggle with long-term dependencies due to vanishing gradients. LSTMs solve this using a cell state and three gates (input, forget, output). GRUs are a simpler variation of LSTMs with only two gates (update and reset), offering similar performance with less computation.",
            difficulty: "Advanced"
          },
          {
            q: "Transfer Learning",
            a: "Transfer learning involves taking a model trained on a large, general dataset and fine-tuning it on a smaller, specific target dataset. This significantly reduces training time and data requirements while improving performance on the target task.",
            difficulty: "Basic"
          },
          {
            q: "GANs (Generator vs Discriminator)",
            a: "A Generative Adversarial Network consists of two models trained simultaneously. The Generator creates fake data to fool the Discriminator, while the Discriminator learns to distinguish between real data and the Generator's fakes, leading to highly realistic synthetic outputs.",
            difficulty: "Advanced"
          },
          {
            q: "Attention mechanism",
            a: "The attention mechanism allows a model to focus on specific parts of the input sequence when producing a specific part of the output, rather than relying on a fixed-size context vector. It drastically improves performance in tasks like translation by learning which input tokens are most relevant.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "NLP & Transformers",
        questions: [
          {
            q: "Tokenization approaches (BPE, WordPiece, SentencePiece)",
            a: "Tokenization splits text into smaller units. BPE merges the most frequent character pairs iteratively to form subwords. WordPiece is similar but selects pairs that maximize the language model's likelihood, while SentencePiece works directly on raw text without requiring pre-tokenization like spacing.",
            difficulty: "Intermediate"
          },
          {
            q: "Word embeddings (Word2Vec, GloVe) vs contextual embeddings",
            a: "Traditional embeddings like Word2Vec provide a single, static vector for a word regardless of context. Contextual embeddings, like those from BERT, generate dynamic vectors based on the surrounding words, capturing nuances like polysemy.",
            difficulty: "Basic"
          },
          {
            q: "Transformer architecture (self-attention, multi-head attention)",
            a: "Transformers rely entirely on self-attention to compute representations of input and output without RNNs. Multi-head attention runs several self-attention mechanisms in parallel, allowing the model to jointly attend to information from different representation subspaces at different positions.",
            difficulty: "Intermediate"
          },
          {
            q: "BERT vs GPT — architecture differences",
            a: "BERT is an encoder-only transformer trained using a masked language modeling objective, making it bidirectional and excellent for understanding context. GPT is a decoder-only transformer trained autoregressively, predicting the next word sequentially, making it ideal for generation.",
            difficulty: "Advanced"
          },
          {
            q: "What are tokens and token limits?",
            a: "Tokens are the fundamental units of data processed by LLMs, which can be words, subwords, or characters. Token limits refer to the maximum context window a model can process in a single pass, dictating how much text can be read and generated at once.",
            difficulty: "Basic"
          },
          {
            q: "Fine-tuning vs prompting vs few-shot learning",
            a: "Prompting queries a pre-trained model with instructions. Few-shot learning provides a few examples within the prompt to guide the model's output format. Fine-tuning updates the model's actual weights using a dataset, permanently adapting its behavior to a specific task.",
            difficulty: "Intermediate"
          },
          {
            q: "Positional encoding — why is it needed?",
            a: "Since Transformers process all tokens in parallel rather than sequentially, they have no inherent notion of order. Positional encodings are added to the input embeddings to inject information about the relative or absolute position of the tokens in the sequence.",
            difficulty: "Advanced"
          },
          {
            q: "Beam search vs greedy decoding",
            a: "Greedy decoding selects the single most probable next token at each step, which can lead to suboptimal overall sequences. Beam search explores multiple promising paths (beams) simultaneously, keeping the top K sequences at each step to find a sequence with a higher overall probability.",
            difficulty: "Intermediate"
          },
          {
            q: "Perplexity as an evaluation metric",
            a: "Perplexity measures how well a probability model predicts a sample. In NLP, a lower perplexity indicates that the language model is less surprised by the test data, meaning it assigns higher probabilities to the actual sequence of words.",
            difficulty: "Advanced"
          },
          {
            q: "Hallucination in LLMs",
            a: "Hallucination refers to a phenomenon where LLMs generate text that is grammatically correct but factually incorrect or nonsensical. It occurs because models predict the next likely token based on patterns, without an underlying grounding in objective reality or factual verification.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "RAG & LLMs",
        questions: [
          {
            q: "What is RAG (Retrieval-Augmented Generation)?",
            a: "RAG is a framework that improves LLM responses by dynamically retrieving relevant facts from an external knowledge base. It grounds the model's generation in accurate, up-to-date information, reducing hallucinations and allowing the model to cite sources.",
            difficulty: "Basic"
          },
          {
            q: "Vector databases and embeddings for retrieval",
            a: "Vector databases store data as high-dimensional numerical embeddings generated by AI models. They enable semantic search by finding vectors that are mathematically close (e.g., via cosine similarity) to a user's query embedding, retrieving conceptually related information.",
            difficulty: "Intermediate"
          },
          {
            q: "Chunking strategies for documents",
            a: "Chunking breaks large documents into smaller, indexable segments for retrieval. Strategies include fixed-size chunking, sentence/paragraph-based chunking, or semantic chunking, and often involve overlapping chunks to preserve context across boundaries.",
            difficulty: "Intermediate"
          },
          {
            q: "Prompt engineering techniques (chain-of-thought, few-shot)",
            a: "Few-shot prompting provides examples in the context to demonstrate desired outputs. Chain-of-thought prompting asks the model to output its step-by-step reasoning process before the final answer, significantly improving performance on complex logic and math tasks.",
            difficulty: "Basic"
          },
          {
            q: "Temperature and top-p sampling",
            a: "Temperature scales the logits before softmax; lower values make output more deterministic, higher values increase randomness. Top-p (nucleus) sampling truncates the probability distribution to the smallest set of tokens whose cumulative probability exceeds p, ensuring dynamic and safe vocabulary choices.",
            difficulty: "Advanced"
          },
          {
            q: "RLHF (Reinforcement Learning from Human Feedback)",
            a: "RLHF aligns LLMs with human preferences by training a reward model based on human rankings of generated responses. Proximal Policy Optimization (PPO) is then used to optimize the LLM's policy to maximize this reward, improving safety and helpfulness.",
            difficulty: "Advanced"
          },
          {
            q: "LoRA and QLoRA for efficient fine-tuning",
            a: "LoRA (Low-Rank Adaptation) freezes pre-trained model weights and injects trainable rank decomposition matrices into layers, vastly reducing trainable parameters. QLoRA further optimizes this by quantizing the frozen base model weights, allowing massive LLMs to be fine-tuned on single GPUs.",
            difficulty: "Advanced"
          },
          {
            q: "Quantization (4-bit, 8-bit) — why and how?",
            a: "Quantization reduces the precision of a model's weights and activations (e.g., from 32-bit float to 8-bit integer). This drastically lowers memory footprint and increases inference speed, with minimal degradation in model accuracy.",
            difficulty: "Intermediate"
          },
          {
            q: "Agentic AI and tool use",
            a: "Agentic AI models are designed to autonomously plan, reason, and execute tasks over multiple steps. They are equipped with tool use capabilities, allowing them to interact with external APIs, search the web, or execute code to achieve their goals.",
            difficulty: "Basic"
          },
          {
            q: "Evaluation metrics for LLMs (BLEU, ROUGE, human eval)",
            a: "BLEU measures precision based on n-gram overlap, often used in translation. ROUGE focuses on recall, used heavily for summarization. Because automated metrics often miss semantic equivalence, human evaluation or LLM-as-a-judge is increasingly preferred for assessing nuance and helpfulness.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Computer Vision",
        questions: [
          {
            q: "Image classification pipeline",
            a: "The standard pipeline involves data collection, preprocessing (resizing, normalization), feature extraction (often via CNNs), and classification. The model is trained iteratively using backpropagation and evaluated on a holdout test set.",
            difficulty: "Basic"
          },
          {
            q: "Object detection (YOLO, SSD, Faster R-CNN)",
            a: "Faster R-CNN is a two-stage detector using a Region Proposal Network for high accuracy. YOLO and SSD are single-stage detectors that predict bounding boxes and classes directly from feature maps in one pass, optimizing for real-time speed.",
            difficulty: "Intermediate"
          },
          {
            q: "Semantic vs Instance vs Panoptic segmentation",
            a: "Semantic segmentation classifies every pixel into a category (e.g., 'car' vs 'road'). Instance segmentation identifies individual objects of the same class (e.g., 'car 1' vs 'car 2'). Panoptic segmentation unifies both, providing a complete pixel-level understanding of both 'stuff' and 'things'.",
            difficulty: "Advanced"
          },
          {
            q: "Data augmentation techniques",
            a: "Data augmentation artificially expands the training set by applying random transformations like rotations, flips, scaling, color jittering, and cropping. It helps make models invariant to these changes and significantly reduces overfitting.",
            difficulty: "Basic"
          },
          {
            q: "ResNet and skip connections",
            a: "ResNet introduced residual (skip) connections that bypass one or more layers. This solves the vanishing gradient problem in very deep networks by providing an alternate shortcut path for gradients to flow during backpropagation.",
            difficulty: "Intermediate"
          },
          {
            q: "Vision Transformers (ViT)",
            a: "ViTs apply the Transformer architecture to computer vision by splitting images into sequences of fixed-size patches. They map patches to linear embeddings and process them with self-attention, achieving state-of-the-art results on large datasets without convolutions.",
            difficulty: "Advanced"
          },
          {
            q: "Image preprocessing (normalization, resizing)",
            a: "Resizing ensures all input images have consistent dimensions required by the network architecture. Normalization scales pixel values (often to [0,1] or zero mean and unit variance) to stabilize training and accelerate gradient descent convergence.",
            difficulty: "Basic"
          },
          {
            q: "OCR and its pipeline",
            a: "Optical Character Recognition extracts text from images. The pipeline typically involves image pre-processing (binarization, deskewing), text detection (finding bounding boxes of words), and text recognition (mapping image regions to text using RNNs/CTCs or Transformers).",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Model Evaluation",
        questions: [
          {
            q: "Precision, Recall, F1-Score",
            a: "Precision is the ratio of true positives to total predicted positives (accuracy of positive predictions). Recall is the ratio of true positives to actual positives (ability to find all positives). F1-Score is their harmonic mean, useful when dealing with imbalanced classes.",
            difficulty: "Basic"
          },
          {
            q: "ROC curve and AUC",
            a: "The ROC curve plots the True Positive Rate against the False Positive Rate at various threshold settings. AUC (Area Under the Curve) provides an aggregate measure of performance across all classification thresholds; an AUC of 1.0 represents a perfect model.",
            difficulty: "Intermediate"
          },
          {
            q: "Confusion Matrix",
            a: "A confusion matrix is a table used to evaluate a classification model's performance. It breaks down predictions into True Positives, True Negatives, False Positives, and False Negatives, allowing for detailed error analysis.",
            difficulty: "Basic"
          },
          {
            q: "Type I vs Type II errors",
            a: "A Type I error (False Positive) occurs when the model incorrectly predicts a positive outcome when it is actually negative. A Type II error (False Negative) occurs when the model incorrectly predicts a negative outcome when it is actually positive.",
            difficulty: "Intermediate"
          },
          {
            q: "Class imbalance handling (SMOTE, class weights)",
            a: "Class imbalance can be addressed by applying class weights, penalizing mistakes on the minority class more heavily. Alternatively, SMOTE (Synthetic Minority Over-sampling Technique) generates synthetic examples for the minority class to balance the dataset.",
            difficulty: "Advanced"
          },
          {
            q: "A/B testing for ML models",
            a: "A/B testing involves deploying a new ML model (variant B) alongside the current model (variant A) and routing a portion of live traffic to it. By comparing key business metrics between the two, teams can statistically validate if the new model performs better in production.",
            difficulty: "Intermediate"
          },
          {
            q: "Model interpretability (SHAP, LIME)",
            a: "LIME perturbs individual inputs to approximate complex models locally with interpretable linear models. SHAP uses game theory to assign an importance value to each feature for a specific prediction, offering both local and global interpretability.",
            difficulty: "Advanced"
          }
        ]
      }
    ]
  },
  {
    role: "Data Analyst",
    icon: "📊",
    topics: [
      {
        topic: "SQL & Databases",
        questions: [
          {
            q: "INNER JOIN vs LEFT JOIN vs RIGHT JOIN vs FULL OUTER JOIN",
            a: "INNER JOIN returns only records with matching values in both tables. LEFT/RIGHT JOIN returns all records from the left/right table and matched records from the other. FULL OUTER JOIN returns all records when there is a match in either left or right table.",
            difficulty: "Basic"
          },
          {
            q: "GROUP BY vs HAVING vs WHERE",
            a: "WHERE filters rows before any grouping occurs. GROUP BY aggregates data across multiple records into summary rows. HAVING is used to filter aggregated data after the GROUP BY clause has been applied.",
            difficulty: "Intermediate"
          },
          {
            q: "Window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)",
            a: "Window functions perform calculations across a set of table rows related to the current row without collapsing them. ROW_NUMBER gives a unique sequential integer, RANK leaves gaps on ties, and DENSE_RANK leaves no gaps. LAG/LEAD access previous/subsequent rows.",
            difficulty: "Advanced"
          },
          {
            q: "Subqueries vs CTEs",
            a: "A subquery is a query nested inside another query. A Common Table Expression (CTE) is a named temporary result set defined using the WITH clause. CTEs are generally more readable and can be referenced multiple times or recursively.",
            difficulty: "Intermediate"
          },
          {
            q: "UNION vs UNION ALL",
            a: "Both combine the result sets of two or more SELECT statements. UNION removes duplicate rows from the final result set. UNION ALL includes all duplicates and is generally faster because it avoids the overhead of deduplication.",
            difficulty: "Basic"
          },
          {
            q: "Indexing — how it improves performance",
            a: "Indexes are data structures (like B-trees) that store references to table data, allowing the database engine to find rows quickly without scanning the entire table. While they speed up read operations (SELECT), they can slow down write operations (INSERT/UPDATE) as the index must be maintained.",
            difficulty: "Intermediate"
          },
          {
            q: "ACID properties",
            a: "ACID stands for Atomicity (all or nothing), Consistency (valid states only), Isolation (concurrent transactions don't interfere), and Durability (committed data is saved permanently). These properties guarantee database transaction reliability.",
            difficulty: "Advanced"
          },
          {
            q: "Normalization (1NF, 2NF, 3NF, BCNF)",
            a: "Normalization organizes database schemas to reduce redundancy and improve integrity. 1NF ensures atomic values. 2NF removes partial dependencies. 3NF removes transitive dependencies, ensuring all non-key columns depend solely on the primary key.",
            difficulty: "Advanced"
          },
          {
            q: "Stored procedures vs views",
            a: "A view is a virtual table representing the result of a saved SQL query. A stored procedure is a precompiled set of SQL statements that can accept parameters and execute complex logic, including control flow statements.",
            difficulty: "Intermediate"
          },
          {
            q: "Query optimization techniques",
            a: "Optimization involves using EXPLAIN plans to analyze execution. Best practices include indexing heavily filtered columns, avoiding SELECT *, minimizing subqueries, filtering early with WHERE, and replacing cursors with set-based logic.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Statistics & Probability",
        questions: [
          {
            q: "Mean, Median, Mode — when to use each",
            a: "Use the mean for symmetrically distributed, continuous data without outliers. Use the median when data is skewed or has heavy outliers, as it is robust. Use the mode for categorical data to find the most frequent occurrence.",
            difficulty: "Basic"
          },
          {
            q: "Standard deviation vs variance",
            a: "Variance measures the average squared deviation of data points from the mean. Standard deviation is the square root of the variance, expressed in the same units as the original data, making it easier to interpret.",
            difficulty: "Basic"
          },
          {
            q: "Normal distribution and the 68-95-99.7 rule",
            a: "The normal distribution is a symmetric bell-shaped curve. The empirical rule states that approximately 68% of data falls within one standard deviation of the mean, 95% within two, and 99.7% within three standard deviations.",
            difficulty: "Intermediate"
          },
          {
            q: "Correlation vs Causation",
            a: "Correlation indicates a statistical relationship or association between two variables. Causation means one variable directly affects the other. A classic maxim states that correlation does not imply causation, as hidden third variables (confounders) might be responsible.",
            difficulty: "Basic"
          },
          {
            q: "p-value and statistical significance",
            a: "The p-value is the probability of observing results as extreme as those in the data, assuming the null hypothesis is true. A result is statistically significant if the p-value is lower than a pre-defined significance level (alpha, typically 0.05).",
            difficulty: "Intermediate"
          },
          {
            q: "Hypothesis testing (null vs alternative)",
            a: "Hypothesis testing evaluates two mutually exclusive statements. The null hypothesis represents the status quo or no effect. The alternative hypothesis represents the new claim or the presence of an effect that you aim to prove.",
            difficulty: "Intermediate"
          },
          {
            q: "Central Limit Theorem",
            a: "The Central Limit Theorem states that the distribution of sample means approximates a normal distribution as the sample size gets larger, regardless of the population's original distribution. This allows for parametric testing on non-normal data.",
            difficulty: "Advanced"
          },
          {
            q: "Bayes' Theorem",
            a: "Bayes' Theorem calculates the probability of an event based on prior knowledge of conditions related to the event. It updates the prior probability of a hypothesis to a posterior probability as new evidence is introduced.",
            difficulty: "Advanced"
          },
          {
            q: "Type I vs Type II errors in hypothesis testing",
            a: "A Type I error is rejecting a true null hypothesis (false positive). A Type II error is failing to reject a false null hypothesis (false negative). Adjusting the significance level tradeoffs between the likelihood of these two errors.",
            difficulty: "Intermediate"
          },
          {
            q: "Confidence intervals",
            a: "A confidence interval provides a range of values derived from sample statistics that is likely to contain the true population parameter. A 95% confidence level means that if we repeated sampling 100 times, 95 intervals would contain the true parameter.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Data Visualization",
        questions: [
          {
            q: "When to use bar chart vs line chart vs scatter plot",
            a: "Use a bar chart for comparing categorical data. Use a line chart to show trends over time for continuous data. Use a scatter plot to observe relationships and correlations between two numeric variables.",
            difficulty: "Basic"
          },
          {
            q: "Principles of effective data visualization",
            a: "Effective visualization simplifies complexity without distorting facts. Key principles include minimizing chart-junk, using consistent scales, ensuring high data-to-ink ratios, and guiding the viewer's eye with color and contrast.",
            difficulty: "Intermediate"
          },
          {
            q: "What is a misleading chart and how to spot one",
            a: "Misleading charts distort data interpretation. Common red flags include truncated y-axes (not starting at zero for bar charts), uneven time intervals, inappropriate 3D effects, and failing to adjust for inflation or population size.",
            difficulty: "Basic"
          },
          {
            q: "Dashboard design best practices",
            a: "Dashboards should highlight key metrics at a glance. Best practices include following a logical flow (e.g., F-pattern), using consistent colors, providing drill-down capabilities, and tailoring the complexity to the target audience.",
            difficulty: "Intermediate"
          },
          {
            q: "Heatmaps and when to use them",
            a: "Heatmaps use color intensity to represent data values in a matrix format. They are excellent for identifying hotspots, understanding correlation matrices, or analyzing geographical density over time.",
            difficulty: "Advanced"
          },
          {
            q: "Storytelling with data",
            a: "Data storytelling goes beyond presenting facts; it builds a narrative around data to drive action. It involves understanding the audience, highlighting the core insight, providing context, and concluding with clear recommendations.",
            difficulty: "Intermediate"
          },
          {
            q: "Pie charts — when they work and when they don't",
            a: "Pie charts work when showing a few distinct parts that add up to 100%. They fail when there are too many categories, similar slice sizes, or when attempting to compare slices across multiple different pie charts.",
            difficulty: "Basic"
          },
          {
            q: "Tools comparison (Tableau vs Power BI vs Matplotlib)",
            a: "Tableau offers superior visual aesthetics and interactivity for analysts. Power BI integrates tightly with the Microsoft ecosystem and offers robust data modeling. Matplotlib is a Python library best suited for custom, programmatic plots in data science workflows.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Excel & Tools",
        questions: [
          {
            q: "VLOOKUP vs INDEX-MATCH vs XLOOKUP",
            a: "VLOOKUP searches the first column of a range and returns a value to the right. INDEX-MATCH is more flexible, allowing leftward lookups and dynamic column references. XLOOKUP is the modern successor, defaulting to exact match and replacing both previous functions.",
            difficulty: "Basic"
          },
          {
            q: "Pivot Tables",
            a: "Pivot Tables allow users to quickly summarize, analyze, explore, and present large amounts of data. You can effortlessly calculate sums, averages, or counts while grouping data by specific categories.",
            difficulty: "Basic"
          },
          {
            q: "IF, COUNTIF, SUMIF functions",
            a: "IF executes conditional logic returning different values based on a boolean check. COUNTIF counts the number of cells that meet a single condition. SUMIF adds the values in a range that meet specific criteria.",
            difficulty: "Basic"
          },
          {
            q: "Data cleaning techniques in Excel",
            a: "Common techniques include using TRIM to remove extra spaces, PROPER/UPPER for case formatting, Text-to-Columns for splitting data, Remove Duplicates, and using Find & Replace for standardizing inconsistencies.",
            difficulty: "Intermediate"
          },
          {
            q: "Power Query basics",
            a: "Power Query is an ETL tool within Excel used to connect, combine, and refine data across a wide variety of sources. It records transformation steps, making data cleansing workflows repeatable and automated.",
            difficulty: "Advanced"
          },
          {
            q: "Conditional formatting use cases",
            a: "Conditional formatting visually highlights data patterns. It is used to flag outliers, visually represent scales via data bars or color scales, and quickly identify duplicate values or upcoming deadlines.",
            difficulty: "Intermediate"
          },
          {
            q: "Python (Pandas) vs Excel — when to use what",
            a: "Excel is best for quick ad-hoc analysis, sharing small datasets with non-technical stakeholders, and visual financial modeling. Pandas is required for processing millions of rows, automating complex pipelines, and integrating with machine learning models.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "ETL & Data Pipelines",
        questions: [
          {
            q: "What is ETL (Extract, Transform, Load)?",
            a: "ETL is the process of extracting raw data from various sources, transforming it into a clean, structured format, and loading it into a central repository like a data warehouse for analysis.",
            difficulty: "Basic"
          },
          {
            q: "Data warehouse vs Data lake vs Data lakehouse",
            a: "A data warehouse stores structured, heavily modeled data for BI. A data lake stores vast amounts of raw, unstructured data cheaply. A data lakehouse combines both, offering warehouse-like management features directly on data lake storage.",
            difficulty: "Intermediate"
          },
          {
            q: "Batch processing vs Stream processing",
            a: "Batch processing handles large volumes of data on a scheduled basis (e.g., nightly). Stream processing analyzes data continuously in real-time as it is generated, critical for fraud detection or live dashboards.",
            difficulty: "Intermediate"
          },
          {
            q: "Star schema vs Snowflake schema",
            a: "The Star schema centralizes facts surrounded by denormalized dimension tables for fast querying. The Snowflake schema normalizes those dimension tables to save space, but requires more complex joins and can be slower to query.",
            difficulty: "Advanced"
          },
          {
            q: "Data quality and governance",
            a: "Data quality ensures data is accurate, complete, and reliable. Governance involves establishing policies, ownership, and security standards to ensure data is managed as a strategic asset compliance with regulations.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Business Metrics & KPIs",
        questions: [
          {
            q: "DAU/MAU, retention rate, churn rate",
            a: "DAU/MAU tracks daily/monthly active users to gauge engagement. Retention rate measures the percentage of users who continue using a product over time. Churn rate is the percentage of users who stop using the product.",
            difficulty: "Basic"
          },
          {
            q: "Cohort analysis",
            a: "Cohort analysis breaks users into related groups (e.g., sign-up month) rather than looking at all users as one unit. It helps track how behavior or retention changes over the lifecycle of different user segments.",
            difficulty: "Intermediate"
          },
          {
            q: "Funnel analysis",
            a: "Funnel analysis maps out the steps users take toward a desired outcome, like making a purchase. It is crucial for identifying specific stages where users drop off so the user experience can be optimized.",
            difficulty: "Basic"
          },
          {
            q: "What is a North Star metric?",
            a: "A North Star metric is the single key indicator that best captures the core value a product delivers to its customers. It aligns all company departments towards a common, measurable goal for sustainable growth.",
            difficulty: "Intermediate"
          },
          {
            q: "LTV (Lifetime Value) vs CAC (Customer Acquisition Cost)",
            a: "LTV estimates the total revenue a business can expect from a single customer over their relationship. CAC is the total cost of sales and marketing to acquire a new customer. A healthy business requires LTV to be significantly higher than CAC.",
            difficulty: "Advanced"
          }
        ]
      }
    ]
  },
  {
    role: "Software Engineering",
    icon: "💻",
    topics: [
      {
        topic: "OOP & Design Patterns",
        questions: [
          {
            q: "Four pillars of OOP",
            a: "The four pillars are Encapsulation (hiding state), Abstraction (hiding implementation details), Inheritance (deriving new classes from existing ones), and Polymorphism (treating objects of different classes through a uniform interface).",
            difficulty: "Basic"
          },
          {
            q: "Abstraction vs Encapsulation",
            a: "Abstraction is about hiding internal complexity and providing a simplified interface. Encapsulation is about wrapping data and methods into a single unit and restricting direct access to the internal state.",
            difficulty: "Intermediate"
          },
          {
            q: "Composition vs Inheritance",
            a: "Inheritance creates a strong 'is-a' relationship, which can lead to rigid hierarchies. Composition creates a 'has-a' relationship by combining simple objects to build complex ones, offering more flexibility and avoiding the fragile base class problem.",
            difficulty: "Intermediate"
          },
          {
            q: "SOLID principles",
            a: "SOLID stands for Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. Together, they promote software architectures that are easier to maintain, extend, and refactor.",
            difficulty: "Advanced"
          },
          {
            q: "Singleton pattern",
            a: "The Singleton pattern ensures a class has only one instance and provides a global point of access to it. It is commonly used for logging, database connections, and configuration management.",
            difficulty: "Basic"
          },
          {
            q: "Factory pattern",
            a: "The Factory pattern defines an interface for creating objects but lets subclasses alter the type of objects that will be created. It abstracts the instantiation logic from the client code.",
            difficulty: "Intermediate"
          },
          {
            q: "Observer pattern",
            a: "The Observer pattern defines a one-to-many dependency so that when one object changes state, all its dependents are notified and updated automatically. It is heavily used in event-driven programming and UI frameworks.",
            difficulty: "Intermediate"
          },
          {
            q: "Strategy pattern",
            a: "The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from the clients that use it.",
            difficulty: "Advanced"
          },
          {
            q: "MVC architecture",
            a: "Model-View-Controller separates an application into three interconnected components. The Model manages data and business logic, the View handles the UI, and the Controller acts as an interface between Model and View.",
            difficulty: "Basic"
          },
          {
            q: "DRY, KISS, YAGNI principles",
            a: "DRY (Don't Repeat Yourself) prevents code duplication. KISS (Keep It Simple, Stupid) encourages simple designs over complex ones. YAGNI (You Aren't Gonna Need It) advises against adding unused functionality for anticipated future needs.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "DSA Conceptual",
        questions: [
          {
            q: "Array vs Linked List — trade-offs",
            a: "Arrays offer O(1) random access but require contiguous memory and have O(n) insertions/deletions. Linked Lists offer O(1) insertions/deletions at known nodes but have O(n) sequential access time and require extra memory for pointers.",
            difficulty: "Basic"
          },
          {
            q: "Stack vs Queue — use cases",
            a: "A Stack follows LIFO (Last-In-First-Out) and is used for undo mechanisms, function call stacks, and expression parsing. A Queue follows FIFO (First-In-First-Out) and is used for task scheduling, BFS, and print queues.",
            difficulty: "Basic"
          },
          {
            q: "HashMap internals (hashing, collision resolution)",
            a: "HashMaps map keys to indices using a hash function. Collisions (two keys, same index) are resolved primarily via chaining (linked lists at each bucket) or open addressing (probing for the next empty slot).",
            difficulty: "Intermediate"
          },
          {
            q: "Binary Search Tree vs AVL Tree vs Red-Black Tree",
            a: "A standard BST can degrade to O(n) operations if unbalanced. AVL trees strictly balance heights, ensuring O(log n) operations but with slower insertions. Red-Black trees offer looser balancing, providing faster insertions while maintaining O(log n) performance.",
            difficulty: "Advanced"
          },
          {
            q: "Graph traversal (BFS vs DFS)",
            a: "BFS explores level by level using a queue, ideal for finding the shortest path in unweighted graphs. DFS explores as far as possible along a branch before backtracking using a stack, ideal for topological sorting or cycle detection.",
            difficulty: "Intermediate"
          },
          {
            q: "Dynamic Programming — what is it and when to use?",
            a: "Dynamic Programming breaks a problem into smaller overlapping subproblems and caches their results (memoization or tabulation). It is used when a problem has optimal substructure and overlapping subproblems, like the Knapsack problem.",
            difficulty: "Advanced"
          },
          {
            q: "Time complexity of common sorting algorithms",
            a: "QuickSort and MergeSort typically run in O(n log n) time, though QuickSort can degrade to O(n^2) in the worst case. Bubble, Insertion, and Selection sorts generally run in O(n^2) time.",
            difficulty: "Basic"
          },
          {
            q: "Heap — min-heap vs max-heap",
            a: "A heap is a complete binary tree. In a min-heap, the parent is always smaller than its children, keeping the minimum element at the root. A max-heap keeps the maximum element at the root. They are used in priority queues.",
            difficulty: "Intermediate"
          },
          {
            q: "Trie data structure — use cases",
            a: "A Trie (prefix tree) stores strings where paths represent characters. It is highly efficient for prefix-matching operations, making it the standard choice for autocomplete systems, spell checkers, and IP routing.",
            difficulty: "Advanced"
          },
          {
            q: "When to use which data structure (decision guide)",
            a: "Use HashMaps for O(1) lookups. Use Arrays/Lists for ordered iteration. Use Trees for hierarchical data or O(log n) sorted operations. Use Heaps for priority access, and Graphs for modeling network relationships.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "OS & Memory",
        questions: [
          {
            q: "Process vs Thread",
            a: "A process is an independent executing program with its own memory space. A thread is a lightweight execution unit within a process; multiple threads share the same process memory, making context switching between them faster.",
            difficulty: "Basic"
          },
          {
            q: "Deadlock — conditions and prevention",
            a: "Deadlock requires four conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. It can be prevented by breaking any one of these conditions, often by enforcing a strict ordering of resource acquisition.",
            difficulty: "Advanced"
          },
          {
            q: "Virtual memory and paging",
            a: "Virtual memory creates an illusion of a large, contiguous memory space by mapping virtual addresses to physical RAM or disk. Paging divides memory into fixed-size blocks (pages), allowing non-contiguous physical memory allocation.",
            difficulty: "Intermediate"
          },
          {
            q: "Context switching",
            a: "Context switching is the process of saving the state of a currently running process or thread and loading the state of the next one. It incurs performance overhead as it involves saving registers, program counters, and flushing caches.",
            difficulty: "Basic"
          },
          {
            q: "Mutex vs Semaphore",
            a: "A Mutex provides mutual exclusion, allowing only one thread to access a resource at a time (like a key to a room). A Semaphore allows a specified number of threads to access a pool of resources simultaneously using a counter.",
            difficulty: "Intermediate"
          },
          {
            q: "Memory management (Stack vs Heap)",
            a: "The stack handles static memory allocation with strict LIFO management, useful for local variables and function calls. The heap handles dynamic memory allocation manually or via garbage collection, useful for objects with variable lifespans.",
            difficulty: "Basic"
          },
          {
            q: "Thrashing",
            a: "Thrashing occurs when a system spends more time paging (swapping data between RAM and disk) than executing processes. It happens when physical memory is over-committed, severely degrading system performance.",
            difficulty: "Advanced"
          },
          {
            q: "CPU scheduling algorithms (Round Robin, SJF, FCFS)",
            a: "FCFS is non-preemptive and simple but suffers from the convoy effect. SJF minimizes average waiting time but can starve long processes. Round Robin gives each process a fixed time slice (quantum), ensuring fair and responsive execution.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Networking",
        questions: [
          {
            q: "HTTP vs HTTPS — detailed differences",
            a: "HTTP sends data in plaintext over port 80. HTTPS uses TLS/SSL over port 443 to encrypt data in transit, ensuring confidentiality, integrity, and server authentication via digital certificates.",
            difficulty: "Basic"
          },
          {
            q: "TCP vs UDP",
            a: "TCP is connection-oriented, reliable, and ensures ordered data delivery via handshakes and acknowledgments (e.g., Web, Email). UDP is connectionless and faster but offers no delivery guarantees, used for streaming and gaming.",
            difficulty: "Basic"
          },
          {
            q: "DNS resolution process",
            a: "DNS translates human-readable domain names to IP addresses. The resolution steps through the local cache, the recursive resolver, the root server, the TLD server, and finally the authoritative name server to fetch the IP.",
            difficulty: "Intermediate"
          },
          {
            q: "What happens when you type a URL in the browser?",
            a: "The browser resolves the IP via DNS, initiates a TCP 3-way handshake, establishes a TLS connection (if HTTPS), sends an HTTP GET request, and parses the returned HTML to incrementally render the DOM.",
            difficulty: "Intermediate"
          },
          {
            q: "REST vs GraphQL vs gRPC",
            a: "REST exposes multiple endpoints returning fixed data structures. GraphQL exposes a single endpoint allowing clients to query exactly the data they need. gRPC uses HTTP/2 and Protocol Buffers for high-performance, strictly typed RPC communication.",
            difficulty: "Advanced"
          },
          {
            q: "WebSocket vs HTTP polling vs SSE",
            a: "HTTP polling repeatedly requests data, wasting resources. Server-Sent Events (SSE) provide a unidirectional stream from server to client over HTTP. WebSockets provide a full-duplex, persistent connection ideal for real-time chat apps.",
            difficulty: "Advanced"
          },
          {
            q: "OSI model layers",
            a: "The 7 layers are Physical, Data Link, Network, Transport, Session, Presentation, and Application. It serves as a conceptual framework for understanding networking protocols, with TCP operating at the Transport layer and HTTP at the Application layer.",
            difficulty: "Intermediate"
          },
          {
            q: "Cookies vs Sessions vs JWT",
            a: "Cookies store data on the client side. Sessions store state on the server, returning a session ID cookie to the client. JWTs (JSON Web Tokens) are stateless, cryptographically signed tokens containing user claims, eliminating the need for server-side state.",
            difficulty: "Intermediate"
          },
          {
            q: "CORS — what and why?",
            a: "Cross-Origin Resource Sharing is a browser security mechanism that restricts web pages from making requests to a different domain than the one that served the page. Servers enable it by returning specific HTTP headers like `Access-Control-Allow-Origin`.",
            difficulty: "Basic"
          },
          {
            q: "CDN — how it works",
            a: "A Content Delivery Network caches static assets (images, JS) across globally distributed edge servers. When a user requests an asset, it is served from the geographically closest edge node, dramatically reducing latency and server load.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "DBMS",
        questions: [
          {
            q: "SQL vs NoSQL — when to use each",
            a: "SQL is best for structured data requiring complex transactions and strict ACID compliance. NoSQL is ideal for unstructured/semi-structured data, rapid prototyping, and massive horizontal scaling requirements.",
            difficulty: "Basic"
          },
          {
            q: "CAP theorem",
            a: "The CAP theorem states that a distributed data store can only simultaneously provide two of three guarantees: Consistency, Availability, and Partition tolerance. In the presence of network partitions, systems must choose between Consistency and Availability.",
            difficulty: "Intermediate"
          },
          {
            q: "Indexing types (B-Tree, Hash)",
            a: "B-Tree indexes maintain sorted data, making them ideal for range queries and sorting operations. Hash indexes use a hash function to map keys to buckets, providing extremely fast O(1) exact-match lookups but no support for range queries.",
            difficulty: "Intermediate"
          },
          {
            q: "Transactions and isolation levels",
            a: "Transactions bundle operations to ensure data integrity. Isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) manage how concurrent transactions see each other's changes, trading off consistency against performance.",
            difficulty: "Advanced"
          },
          {
            q: "Sharding vs Replication",
            a: "Replication copies the same data across multiple nodes to increase read availability and fault tolerance. Sharding horizontally partitions the data across different nodes, spreading write loads and increasing overall storage capacity.",
            difficulty: "Intermediate"
          },
          {
            q: "OLTP vs OLAP",
            a: "OLTP (Online Transaction Processing) focuses on fast, frequent, row-level transactional operations. OLAP (Online Analytical Processing) involves complex aggregations and queries over historical data for business intelligence.",
            difficulty: "Basic"
          },
          {
            q: "Denormalization — why and when?",
            a: "Denormalization intentionally introduces redundancy into a database by combining tables. It is used to optimize read-heavy workloads by avoiding expensive joins, trading off write speed and data storage costs.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Git & DevOps",
        questions: [
          {
            q: "Git merge vs rebase",
            a: "Merge creates a new commit that ties two histories together, preserving the exact history but creating a non-linear graph. Rebase rewrites history by moving the base of a branch to a new commit, resulting in a cleaner, linear project history.",
            difficulty: "Intermediate"
          },
          {
            q: "CI/CD pipeline stages",
            a: "Continuous Integration automatically builds and tests code when changes are pushed. Continuous Deployment automates the release of that validated code to staging and production environments safely and predictably.",
            difficulty: "Basic"
          },
          {
            q: "Docker containers vs Virtual Machines",
            a: "VMs run a full guest operating system on a hypervisor, consuming significant resources. Docker containers share the host OS kernel and isolate the application processes, making them lightweight, fast to start, and highly portable.",
            difficulty: "Intermediate"
          },
          {
            q: "What is Kubernetes?",
            a: "Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications. It handles load balancing, auto-restarts of failed containers, and declarative configuration.",
            difficulty: "Intermediate"
          },
          {
            q: "Blue-green vs Canary deployment",
            a: "Blue-green deployment runs two identical environments; traffic is instantly switched to the new one after testing. Canary deployment rolls out the update to a small subset of users first to monitor for issues before a full release.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "APIs & Web",
        questions: [
          {
            q: "RESTful API design principles",
            a: "RESTful APIs use stateless communication, standard HTTP methods, and treat entities as resources accessed via unique URIs. Responses typically use JSON and leverage HTTP status codes to indicate success or error states.",
            difficulty: "Basic"
          },
          {
            q: "HTTP methods (GET, POST, PUT, PATCH, DELETE)",
            a: "GET retrieves resources safely. POST creates new resources. PUT replaces an entire resource. PATCH partially updates an existing resource. DELETE removes a resource.",
            difficulty: "Basic"
          },
          {
            q: "API rate limiting and throttling",
            a: "Rate limiting restricts the number of API calls a user can make in a given timeframe to prevent abuse. Throttling is similar but often involves intentionally slowing down responses once a threshold is reached.",
            difficulty: "Intermediate"
          },
          {
            q: "OAuth 2.0 flow",
            a: "OAuth 2.0 is an authorization framework. An application requests access from the user, receives an authorization grant, exchanges the grant for an access token from an authorization server, and uses the token to access protected resources.",
            difficulty: "Advanced"
          },
          {
            q: "Idempotency in APIs",
            a: "An API operation is idempotent if making multiple identical requests has the same effect as making a single request. PUT and DELETE are naturally idempotent, while POST is generally not.",
            difficulty: "Intermediate"
          }
        ]
      }
    ]
  },
  {
    role: "System Design",
    icon: "🏗️",
    topics: [
      {
        topic: "Fundamentals",
        questions: [
          {
            q: "CAP theorem — detailed explanation with examples",
            a: "CAP states a distributed system can only provide two of Consistency, Availability, and Partition Tolerance. For instance, a MongoDB cluster might sacrifice availability during leader election (CP), while Cassandra serves stale data to remain available (AP).",
            difficulty: "Basic"
          },
          {
            q: "Horizontal vs Vertical scaling",
            a: "Vertical scaling (scaling up) adds more CPU or RAM to a single machine, hitting a physical limit. Horizontal scaling (scaling out) adds more machines to a distributed cluster, offering nearly infinite scalability but requiring complex software design.",
            difficulty: "Basic"
          },
          {
            q: "Load balancing strategies (Round Robin, Least Connections, IP Hash)",
            a: "Round Robin distributes requests sequentially. Least Connections routes to the server with the fewest active sessions. IP Hash uses the client's IP to consistently route them to the same server, useful for maintaining session state.",
            difficulty: "Intermediate"
          },
          {
            q: "Latency vs Throughput",
            a: "Latency is the time it takes for a single data packet to travel from source to destination. Throughput is the volume of data that can be processed in a given amount of time. Systems often need to optimize for one or the other.",
            difficulty: "Intermediate"
          },
          {
            q: "Availability vs Consistency trade-offs",
            a: "Strong consistency guarantees all reads return the latest write, but can increase latency and cause outages during network failures. High availability ensures the system responds to every request, even if it occasionally returns stale data (eventual consistency).",
            difficulty: "Advanced"
          },
          {
            q: "Reverse proxy vs Forward proxy",
            a: "A forward proxy sits in front of clients, anonymizing requests to the internet. A reverse proxy sits in front of backend servers, handling load balancing, SSL termination, and caching to protect and optimize the infrastructure.",
            difficulty: "Intermediate"
          },
          {
            q: "Monolith vs Microservices",
            a: "A monolith bundles all application code into a single deployable unit, simpler to develop but hard to scale. Microservices divide the app into independent, loosely coupled services, enabling independent scaling and deployment at the cost of operational complexity.",
            difficulty: "Basic"
          },
          {
            q: "Rate limiting algorithms (Token Bucket, Leaky Bucket)",
            a: "Token Bucket adds tokens to a bucket at a fixed rate; requests consume tokens, allowing brief bursts of traffic. Leaky Bucket processes requests at a strictly constant rate, smoothing out bursts to protect backend systems.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Caching & Performance",
        questions: [
          {
            q: "Caching strategies (Write-through, Write-back, Write-around)",
            a: "Write-through updates both cache and DB simultaneously, ensuring consistency but adding latency. Write-back updates only the cache and writes to the DB asynchronously. Write-around writes directly to the DB, bypassing the cache until a read miss.",
            difficulty: "Intermediate"
          },
          {
            q: "Cache invalidation strategies",
            a: "Invalidation is notoriously hard. Common strategies include TTL (Time-to-Live) expirations, LRU (Least Recently Used) evictions when full, or event-driven invalidations where the backend actively purges the cache when data changes.",
            difficulty: "Advanced"
          },
          {
            q: "Redis vs Memcached",
            a: "Memcached is a simple, multithreaded key-value store ideal for straightforward string caching. Redis is single-threaded but supports complex data structures (lists, sets), persistence, and pub/sub messaging, making it much more versatile.",
            difficulty: "Intermediate"
          },
          {
            q: "CDN and edge caching",
            a: "Content Delivery Networks push static assets and occasionally dynamic content to edge servers geographically close to the user. This minimizes origin server load and drastically reduces network latency for the client.",
            difficulty: "Basic"
          },
          {
            q: "Database query optimization",
            a: "Optimizing involves creating appropriate indexes, avoiding full table scans, denormalizing tables to reduce JOIN operations, and utilizing read replicas to offload heavy analytical queries from the primary master database.",
            difficulty: "Intermediate"
          },
          {
            q: "Connection pooling",
            a: "Establishing database connections is expensive. Connection pooling maintains a pool of active, reusable connections. When a request needs database access, it borrows a connection and returns it when done, vastly improving throughput.",
            difficulty: "Basic"
          },
          {
            q: "Lazy loading vs Eager loading",
            a: "Lazy loading defers the initialization of an object or related database rows until they are explicitly needed, saving memory. Eager loading fetches all related data in a single initial query, avoiding the N+1 query problem.",
            difficulty: "Intermediate"
          },
          {
            q: "Read replicas",
            a: "A read replica is an exact copy of the primary database. Applications route all read-heavy queries to the replicas, leaving the primary database dedicated solely to handling write operations, enabling massive scale for read-heavy systems.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Databases & Storage",
        questions: [
          {
            q: "SQL vs NoSQL in system design context",
            a: "Choose SQL for strong ACID transactions and relational data models, like financial systems. Choose NoSQL (document, key-value, column-family) for high velocity, unstructured data, and scenarios requiring massive horizontal scaling.",
            difficulty: "Basic"
          },
          {
            q: "Database sharding strategies",
            a: "Sharding can be range-based (e.g., users A-M and N-Z) which can lead to hotspots, or hash-based (hashing the user ID) which evenly distributes load but makes range queries difficult. Directory-based sharding uses a lookup service to find data.",
            difficulty: "Advanced"
          },
          {
            q: "Consistent hashing",
            a: "Consistent hashing distributes data across a ring of servers. When a node is added or removed, only a small fraction of data needs to be remapped to a different server, solving the massive reshuffling problem of standard modulo hashing.",
            difficulty: "Advanced"
          },
          {
            q: "Database replication (Master-Slave, Master-Master)",
            a: "Master-Slave allows writes only on the master, replicating to slaves for reads; it is simpler but the master is a single point of failure. Master-Master allows writes on all nodes, providing high availability but requiring complex conflict resolution.",
            difficulty: "Intermediate"
          },
          {
            q: "Event sourcing and CQRS",
            a: "Event Sourcing stores state as a sequence of immutable events rather than a single snapshot. Command Query Responsibility Segregation (CQRS) physically separates read and write models, optimizing each independently for complex domains.",
            difficulty: "Advanced"
          },
          {
            q: "Blob storage (S3)",
            a: "Blob (Binary Large Object) storage like AWS S3 is designed to store massive amounts of unstructured data like images, videos, and backups. It provides highly durable, scalable, and cost-effective object storage.",
            difficulty: "Basic"
          },
          {
            q: "Time-series databases",
            a: "Time-series databases (like InfluxDB or Prometheus) are optimized for timestamped data points, offering massive write speeds and specialized querying for trends and downsampling. They are ideal for IoT sensors and system metrics.",
            difficulty: "Intermediate"
          },
          {
            q: "Graph databases — when to use",
            a: "Graph databases like Neo4j excel at traversing complex relationships and interconnected data, such as social networks, recommendation engines, or fraud detection rings, where SQL JOINs would be computationally prohibitive.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Messaging & Async",
        questions: [
          {
            q: "Message queues (Kafka vs RabbitMQ vs SQS)",
            a: "RabbitMQ is a traditional message broker with complex routing rules. Kafka is a distributed log ideal for high-throughput event streaming and replay. SQS is a fully managed AWS queue offering simple, scalable, serverless message buffering.",
            difficulty: "Intermediate"
          },
          {
            q: "Pub/Sub pattern",
            a: "Publish-Subscribe decouples producers and consumers. Producers publish messages to a topic without knowing who will receive them. Multiple subscribers listen to topics of interest, enabling scalable, event-driven architectures.",
            difficulty: "Basic"
          },
          {
            q: "Event-driven architecture",
            a: "In this architecture, state changes emit events. Microservices react to these events asynchronously rather than communicating via synchronous HTTP calls, leading to highly decoupled, scalable, and resilient systems.",
            difficulty: "Intermediate"
          },
          {
            q: "Dead letter queues",
            a: "A Dead Letter Queue (DLQ) temporarily stores messages that a system could not successfully process after multiple retries. It isolates bad messages for manual inspection and debugging without blocking the processing of valid messages.",
            difficulty: "Basic"
          },
          {
            q: "Exactly-once vs At-least-once vs At-most-once delivery",
            a: "At-most-once guarantees no duplicates but risks message loss. At-least-once guarantees delivery but may duplicate messages, requiring idempotent consumers. Exactly-once is the hardest, requiring complex deduplication and distributed transaction tracking.",
            difficulty: "Advanced"
          },
          {
            q: "Saga pattern for distributed transactions",
            a: "The Saga pattern manages distributed transactions by breaking them into local transactions across microservices. If one step fails, compensating transactions are triggered to undo the preceding steps, maintaining eventual consistency.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Design Classics",
        questions: [
          {
            q: "Design a URL shortener (like bit.ly)",
            a: "Generate a unique 7-character Base62 string for each URL. Use a relational DB to store mappings, heavily caching reads with Redis. A load balancer distributes requests, and rate-limiting prevents abuse. Writes are low volume; reads are very high volume.",
            difficulty: "Intermediate"
          },
          {
            q: "Design a chat application (like WhatsApp)",
            a: "Use WebSockets for real-time bidirectional communication. A presence service tracks online status. Use a publish-subscribe message broker to route messages to offline users' devices later. Store message metadata in NoSQL for fast distributed writes.",
            difficulty: "Advanced"
          },
          {
            q: "Design a rate limiter",
            a: "Use a Token Bucket algorithm stored in Redis to track request counts per user IP. Redis operations must be atomic (e.g., using Lua scripts) to prevent race conditions across distributed API gateways.",
            difficulty: "Intermediate"
          },
          {
            q: "Design a notification system",
            a: "Use microservices connected by message queues (Kafka). A trigger service queues notification requests. Workers dequeue, apply rate limits/preferences, and send payloads to third-party services (APNS, FCM, SendGrid). A DB tracks delivery status.",
            difficulty: "Intermediate"
          },
          {
            q: "Design a news feed (like Twitter/Facebook)",
            a: "Use a fan-out on write approach for typical users, pre-computing feeds in a cache (Redis). For celebrities with millions of followers, use fan-out on read to avoid massive write spikes, merging the results dynamically at query time.",
            difficulty: "Advanced"
          },
          {
            q: "Design a file storage system (like Google Drive)",
            a: "Split files into chunks and upload via presigned S3 URLs. Store file metadata and folder hierarchies in a relational DB. Use message queues to trigger background processing like virus scanning and thumbnail generation.",
            difficulty: "Advanced"
          },
          {
            q: "Design an API gateway",
            a: "The API Gateway serves as a single entry point. It handles cross-cutting concerns like SSL termination, authentication (JWT validation), rate limiting, and request routing to appropriate backend microservices, often built on NGINX or Envoy.",
            difficulty: "Intermediate"
          },
          {
            q: "Design a search autocomplete system",
            a: "Build a Trie data structure storing popular search prefixes, caching the top 5 results at each node. Update the Trie asynchronously via batch jobs parsing analytics logs to ensure the typing API remains consistently below 50ms latency.",
            difficulty: "Advanced"
          },
          {
            q: "Design a video streaming service (like YouTube)",
            a: "Store video metadata in a SQL DB. Asynchronously transcode uploaded videos into various resolutions using a queue. Distribute final video chunks (HLS/DASH) across a global CDN to minimize buffering for end users.",
            difficulty: "Intermediate"
          },
          {
            q: "Design a ride-sharing service (like Uber)",
            a: "Drivers periodically send location updates via WebSockets. Use a geospatial database (like Redis Geo or Postgres PostGIS) to track locations. A matching service pairs riders and drivers, passing state through a reliable queue system.",
            difficulty: "Advanced"
          }
        ]
      },
      {
        topic: "Cloud & Infrastructure",
        questions: [
          {
            q: "AWS/GCP/Azure core services comparison",
            a: "Core compute uses EC2/Compute Engine/VMs. Object storage is S3/Cloud Storage/Blob Storage. Managed SQL is RDS/Cloud SQL/Azure SQL. Understanding these core equivalents helps abstract infrastructure away from specific vendor lock-in.",
            difficulty: "Basic"
          },
          {
            q: "Serverless architecture (Lambda, Cloud Functions)",
            a: "Serverless allows developers to write code as functions that automatically scale based on events, billing only for compute time used. It removes infrastructure management but introduces challenges like cold starts and vendor lock-in.",
            difficulty: "Intermediate"
          },
          {
            q: "Container orchestration",
            a: "Container orchestration (like Kubernetes or ECS) automates the deployment, scaling, networking, and lifecycle management of containers across clusters of hosts, abstracting away underlying physical hardware.",
            difficulty: "Basic"
          },
          {
            q: "Service mesh and API gateway",
            a: "An API gateway handles North-South traffic from clients to the cluster. A Service Mesh (like Istio) manages East-West traffic between internal microservices, providing secure mTLS, retries, and detailed observability without changing application code.",
            difficulty: "Advanced"
          },
          {
            q: "Observability (Logging, Metrics, Tracing)",
            a: "Observability relies on three pillars. Logs provide detailed discrete events. Metrics offer aggregated numerical data over time for alerting. Distributed tracing tracks a single request's journey across multiple microservices to pinpoint latency bottlenecks.",
            difficulty: "Intermediate"
          }
        ]
      }
    ]
  }
];

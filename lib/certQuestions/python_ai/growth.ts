import { CertQuestion } from '../types';

export const PYTHON_AI_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: "pyai_grow_01",
    section: "growth",
    prompt: "When optimizing token expenditure in high-throughput Python AI services, which strategy yields significant cost reductions without hurting accuracy on simple queries?",
    options: [
      { id: "a", label: "Removing all punctuation and spaces from prompts before transmission." },
      { id: "b", label: "Model routing / cascading: routing simple classification tasks to smaller fast models (e.g. GPT-4o-mini / Claude Haiku) and reserving frontier models for complex multi-step reasoning." },
      { id: "c", label: "Running queries only during midnight hours when server clocks reset." },
      { id: "d", label: "Calling the model 5 times sequentially and picking the shortest response." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_grow_02",
    section: "growth",
    prompt: "How does semantic caching (e.g. GPTCache or Redis vector search) improve Python LLM application performance?",
    options: [
      { id: "a", label: "Compresses Python bytecode into RAM." },
      { id: "b", label: "Reduces Python CPU frequency to conserve power." },
      { id: "c", label: "Stores previous query embeddings and answers, serving near-instant cached responses if incoming queries meet a high similarity threshold, bypassing remote API latency and cost." },
      { id: "d", label: "Caches database SQL connection strings indefinitely." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_grow_03",
    section: "growth",
    prompt: "In Python RAG systems, what is 'Hybrid Search' (combining BM25 keyword search with dense vector similarity)?",
    options: [
      { id: "a", label: "A retrieval approach that merges exact lexical keyword matching (BM25) with semantic embedding similarity (Dense) to maximize retrieval precision for acronyms and domain concepts." },
      { id: "b", label: "A technique that searches Google and Bing simultaneously using Selenium." },
      { id: "c", label: "A method that splits search queries between two separate graphics cards." },
      { id: "d", label: "Running full-text regex searches on compiled binary executables." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_04",
    section: "growth",
    prompt: "When scaling a Python AI service built with FastAPI and Uvicorn under heavy concurrent traffic, what architecture prevents blocking the server's main event loop during long-running tasks?",
    options: [
      { id: "a", label: "Running all jobs synchronously in the main thread with `time.sleep(30)`." },
      { id: "b", label: "Disabling FastAPI's async route definitions." },
      { id: "c", label: "Spawning an infinite number of thread loops without thread pool limits." },
      { id: "d", label: "Offloading intensive generation/background jobs to Celery, ARQ, or Redis Queue workers, and communicating status via WebSockets or polling." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_grow_05",
    section: "growth",
    prompt: "What is the purpose of automated evaluation frameworks (e.g. Ragas, DeepEval, TruLens) in Python AI engineering?",
    options: [
      { id: "a", label: "To quantitatively benchmark RAG and agent performance across metrics like Faithfulness, Answer Relevance, Context Recall, and Hallucination rates." },
      { id: "b", label: "To write unit tests for Python CSS templates." },
      { id: "c", label: "To overclock server GPU tensor cores automatically." },
      { id: "d", label: "To verify valid credit card numbers in payment gateways." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_06",
    section: "growth",
    prompt: "When designing agent architectures with LangGraph in Python, what advantage does stateful graph representation offer over linear DAGs?",
    options: [
      { id: "a", label: "Eliminates all Python memory usage completely." },
      { id: "b", label: "Enables cyclical multi-step reasoning, self-reflection loops, state checkpointing, human-in-the-loop approvals, and conditional branch routing." },
      { id: "c", label: "Allows code to execute without a Python interpreter." },
      { id: "d", label: "Forces all agent steps to run in under 1 millisecond." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_grow_07",
    section: "growth",
    prompt: "How does Prompt Compression (e.g. LLMLingua in Python) benefit high-context enterprise workflows?",
    options: [
      { id: "a", label: "Zips the prompt text into a .rar archive and sends it as raw bytes." },
      { id: "b", label: "Deletes every second word in the document randomly." },
      { id: "c", label: "Prunes non-essential and redundant tokens from large contexts using small language models, reducing prompt latency and inference costs while retaining critical semantic details." },
      { id: "d", label: "Converts text characters to hexadecimal representation." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_grow_08",
    section: "growth",
    prompt: "When fine-tuning open-source models using Python (e.g. Hugging Face TRL, PEFT, LoRA / QLoRA), what is the key benefit of LoRA (Low-Rank Adaptation)?",
    options: [
      { id: "a", label: "Freezes original model base weights and trains lightweight rank decomposition matrix adapters, dramatically reducing GPU VRAM requirements and training time." },
      { id: "b", label: "Deletes 90% of model layers to run on mobile CPUs." },
      { id: "c", label: "Replaces neural networks with simple linear decision trees." },
      { id: "d", label: "Allows fine-tuning without any training data." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_09",
    section: "growth",
    prompt: "What is 'Self-Consistency Prompting / Majority Voting' when implemented in Python reasoning workflows?",
    options: [
      { id: "a", label: "Checking if Python code formatting matches PEP 8 standards." },
      { id: "b", label: "Requiring two distinct developers to approve every prompt manually." },
      { id: "c", label: "Validating that the server clock matches UTC." },
      { id: "d", label: "Sampling multiple reasoning paths (e.g. N=5 completions at temperature 0.7) and selecting the most frequent final answer via majority vote to increase problem-solving accuracy." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_grow_010",
    section: "growth",
    prompt: "When deploying production LLM applications in Python, how should Time to First Token (TTFT) and Total Inference Latency be tracked?",
    options: [
      { id: "a", label: "Printing elapsed seconds with `print(time.time())` to standard output without metrics aggregation." },
      { id: "b", label: "Instrumenting async streaming callbacks with OpenTelemetry / Prometheus histograms measuring TTFT, tokens-per-second, and total stream completion latency." },
      { id: "c", label: "Assuming latency is always constant across all cloud regions." },
      { id: "d", label: "Disabling streaming so latency is impossible to measure." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_grow_11",
    section: "growth",
    prompt: "In Python RAG systems, what is the 'Reciprocal Rank Fusion (RRF)' algorithm used for in hybrid search?",
    options: [
      { id: "a", label: "Compressing vector databases by 50%." },
      { id: "b", label: "Combining rank positions from multiple distinct retrieval methods (e.g. BM25 and Dense Vector) into a single unified score without requiring score normalization calibration." },
      { id: "c", label: "Encrypting search queries with RSA." },
      { id: "d", label: "Translating search terms across languages." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_grow_12",
    section: "growth",
    prompt: "When evaluating an LLM application using 'LLM-as-a-Judge' in Python, what bias must be actively controlled?",
    options: [
      { id: "a", label: "Hardware cooling fan bias." },
      { id: "b", label: "Timezone calculation bias." },
      { id: "c", label: "Position bias, verbosity bias (favoring longer responses), and self-enhancement bias (favoring its own completions)." },
      { id: "d", label: "Python version formatting bias." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_grow_13",
    section: "growth",
    prompt: "How does speculative decoding in Python LLM serving frameworks (like vLLM or Hugging Face TGI) accelerate inference speed?",
    options: [
      { id: "a", label: "Deletes 50% of the layers in the neural network." },
      { id: "b", label: "Overclocks server RAM memory sticks." },
      { id: "c", label: "Skips token generation entirely." },
      { id: "d", label: "Uses a lightweight draft model to generate candidate tokens quickly in parallel, which are verified in a single forward pass by the larger target model." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_grow_14",
    section: "growth",
    prompt: "In Python vector search evaluation, what does the 'MRR@K (Mean Reciprocal Rank at K)' metric measure?",
    options: [
      { id: "a", label: "The average of the reciprocal ranks of the first relevant document retrieved across a test set of queries." },
      { id: "b", label: "The total disk space occupied by the vector index." },
      { id: "c", label: "The number of concurrent HTTP requests." },
      { id: "d", label: "The GPU temperature in degrees Celsius." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_15",
    section: "growth",
    prompt: "When fine-tuning models with Direct Preference Optimization (DPO) in Python using TRL, what advantage does it offer over traditional RLHF (PPO)?",
    options: [
      { id: "a", label: "Removes the requirement for any training datasets." },
      { id: "b", label: "Optimizes policy weights directly on preference pairs $(x, y_w, y_l)$ using cross-entropy loss, eliminating the need to train a separate reward model and complex reinforcement learning loops." },
      { id: "c", label: "Runs only on Apple M-series chips." },
      { id: "d", label: "Converts models into simple lookup dictionaries." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_grow_16",
    section: "growth",
    prompt: "What is 'Semantic Drift' in long-running Python agentic conversations, and how is it mitigated?",
    options: [
      { id: "a", label: "A memory leak in Python threads." },
      { id: "b", label: "When server IP addresses change." },
      { id: "c", label: "Gradual degradation of task focus and instruction compliance over extended turns; mitigated by periodically refreshing system goals in context or using hierarchical controller agents." },
      { id: "d", label: "A formatting error in JSON files." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_grow_17",
    section: "growth",
    prompt: "In Python RAG systems, how does 'Contextual Retrieval' (prepending document chunk context generated by an LLM) boost retrieval accuracy?",
    options: [
      { id: "a", label: "Deletes all punctuation from chunks." },
      { id: "b", label: "Converts text chunks into audio clips." },
      { id: "c", label: "Translates every chunk into three languages." },
      { id: "d", label: "Prepends a 50-token situational summary of the whole document to each chunk before embedding, preserving lost global context during chunk isolation." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_grow_18",
    section: "growth",
    prompt: "What is the purpose of 'Golden Datasets' in continuous Python AI regression test suites?",
    options: [
      { id: "a", label: "Curated, human-annotated test suites of inputs, ground-truth answers, and reference contexts used to calculate precision, recall, and hallucination regressions in CI/CD." },
      { id: "b", label: "A dataset containing financial gold price histories." },
      { id: "c", label: "A set of images rendered in high resolution." },
      { id: "d", label: "A database of VIP user credit cards." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_19",
    section: "growth",
    prompt: "When serving open-source LLMs in Python with `vLLM`, how does PagedAttention eliminate memory fragmentation?",
    options: [
      { id: "a", label: "Swaps all GPU memory to local SATA hard drives." },
      { id: "b", label: "Manages Key-Value (KV) cache tensors like virtual memory pages in operating systems, reducing VRAM waste by 96% and allowing much higher batch concurrency." },
      { id: "c", label: "Deletes 80% of model parameters at startup." },
      { id: "d", label: "Limits the model to 1 user at a time." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_grow_20",
    section: "growth",
    prompt: "In Python AI architecture, what is 'Prompt Versioning' and why is it essential?",
    options: [
      { id: "a", label: "Incrementing the Python version number daily." },
      { id: "b", label: "Changing variable names on every commit." },
      { id: "c", label: "Treating prompts as version-controlled code artifacts (in Git or registries like Langfuse), enabling A/B testing, rollback, and reproducible prompt lineage tracking." },
      { id: "d", label: "Renaming prompt files with random numbers." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_grow_21",
    section: "growth",
    prompt: "What is the role of 'Context Window Sliding' vs 'Hierarchical Map-Reduce' when processing a 1,000-page financial report in Python?",
    options: [
      { id: "a", label: "Map-Reduce is only for calculating arithmetic averages." },
      { id: "b", label: "Sliding window deletes 90% of the report to fit memory." },
      { id: "c", label: "They are both obsolete techniques replaced by standard print statements." },
      { id: "d", label: "Map-Reduce distributes independent section summaries across parallel workers and reduces them into a master synthesis, scaling beyond single context window limits." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_grow_22",
    section: "growth",
    prompt: "How does 'Quantization' (e.g. AWQ, GPTQ, GGUF 4-bit/8-bit) in Python LLM deployment affect inference throughput?",
    options: [
      { id: "a", label: "Reduces model weight precision from FP16 to INT4/INT8, slashing VRAM bandwidth bottlenecks and memory footprint with negligible loss in accuracy." },
      { id: "b", label: "Slows down inference by 10x due to CPU conversion." },
      { id: "c", label: "Increases model file sizes by 4x." },
      { id: "d", label: "Prevents models from generating numbers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_23",
    section: "growth",
    prompt: "In Python RAG evaluation, what does the 'Faithfulness / Groundedness' metric measure?",
    options: [
      { id: "a", label: "The moral character of the developer." },
      { id: "b", label: "The percentage of claims in the generated response that can be directly inferred from and grounded by the retrieved context, identifying hallucinations." },
      { id: "c", label: "The response latency in milliseconds." },
      { id: "d", label: "The number of syllables per word." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_grow_24",
    section: "growth",
    prompt: "When designing high-availability Python services, why is 'Graceful Degradation' critical when the primary frontier LLM API experiences an outage?",
    options: [
      { id: "a", label: "Deletes the application database on outage." },
      { id: "b", label: "Redirects users to a 404 page immediately." },
      { id: "c", label: "Allows the system to fall back to a cached answer, a secondary cloud model, or a deterministic heuristic without crashing user workflows." },
      { id: "d", label: "Restarts the production server in a loop." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_grow_25",
    section: "growth",
    prompt: "What is 'Negative Sampling' when training custom dense embedding models in Python with `SentenceTransformers`?",
    options: [
      { id: "a", label: "Deleting all negative numbers from the training data." },
      { id: "b", label: "Sampling only empty strings." },
      { id: "c", label: "Training on inverted pixel colors." },
      { id: "d", label: "Including challenging hard negative examples (lexically similar but semantically distinct texts) in contrastive loss batches to sharpen vector discrimination." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_grow_26",
    section: "growth",
    prompt: "In Python AI architecture, what is 'Prompt A/B Testing' and how is it executed reliably?",
    options: [
      { id: "a", label: "Splitting live user traffic between prompt variant A and variant B, recording user engagement/success metrics to statistically prove which prompt performs better." },
      { id: "b", label: "Writing prompt A in English and prompt B in Latin." },
      { id: "c", label: "Testing prompts on alternate days manually." },
      { id: "d", label: "Deleting failed prompts from git history." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_27",
    section: "growth",
    prompt: "What is the benefit of using 'Vector Database Partitioning / Sharding' in high-scale Python retrieval systems?",
    options: [
      { id: "a", label: "Reduces vector dimensions to 2D." },
      { id: "b", label: "Distributes vector search queries across multiple physical nodes, maintaining low latency as index scale grows beyond millions of vectors." },
      { id: "c", label: "Compresses text into zip files." },
      { id: "d", label: "Replaces vectors with SQL primary keys." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_grow_28",
    section: "growth",
    prompt: "When building an agent with self-correction in Python, what is the 'Reflexion' architecture pattern?",
    options: [
      { id: "a", label: "Mirroring the user's camera feed." },
      { id: "b", label: "Inverting text strings backwards." },
      { id: "c", label: "An agent pattern where the agent evaluates its own output against constraints, records lessons learned into episodic memory, and refines its next attempt." },
      { id: "d", label: "Printing errors to a terminal without correction." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_grow_29",
    section: "growth",
    prompt: "How does 'Dynamic Context Budgeting' in Python optimize cost and speed for conversational agents?",
    options: [
      { id: "a", label: "Limits the user to 1 question per day." },
      { id: "b", label: "Deletes system instructions after the first message." },
      { id: "c", label: "Forces all responses to be under 10 words." },
      { id: "d", label: "Dynamically allocates token budgets between system instructions, retrieved RAG chunks, and conversation history based on query complexity." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_grow_30",
    section: "growth",
    prompt: "What is the primary indicator that a Python AI production system is suffering from 'Data Distribution Drift'?",
    options: [
      { id: "a", label: "A statistically significant drop in evaluation metrics (faithfulness, accuracy) as real-world user queries diverge from original benchmark test distributions." },
      { id: "b", label: "Server CPU clock frequency increases." },
      { id: "c", label: "Python syntax highlighting stops working." },
      { id: "d", label: "The database table names are renamed." }
    ],
    correctOptionId: "a"
  }
];

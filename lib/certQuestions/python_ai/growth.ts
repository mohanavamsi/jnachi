import { CertQuestion } from '../types';

export const PYTHON_AI_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: "pyai_grow_01",
    section: "growth",
    prompt: "When optimizing token expenditure in high-throughput Python AI services, which strategy yields significant cost reductions without hurting accuracy on simple queries?",
    options: [
      { id: "a", label: "Model routing / cascading: routing simple classification tasks to smaller fast models (e.g. GPT-4o-mini / Claude Haiku) and reserving frontier models for complex multi-step reasoning." },
      { id: "b", label: "Removing all punctuation and spaces from prompts before transmission." },
      { id: "c", label: "Running queries only during midnight hours when server clocks reset." },
      { id: "d", label: "Calling the model 5 times sequentially and picking the shortest response." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_02",
    section: "growth",
    prompt: "How does semantic caching (e.g. GPTCache or Redis vector search) improve Python LLM application performance?",
    options: [
      { id: "a", label: "Stores previous query embeddings and answers, serving near-instant cached responses if incoming queries meet a high similarity threshold, bypassing remote API latency and cost." },
      { id: "b", label: "Compresses Python bytecode into RAM." },
      { id: "c", label: "Reduces Python CPU frequency to conserve power." },
      { id: "d", label: "Caches database SQL connection strings indefinitely." }
    ],
    correctOptionId: "a"
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
      { id: "a", label: "Offloading intensive generation/background jobs to Celery, ARQ, or Redis Queue workers, and communicating status via WebSockets or polling." },
      { id: "b", label: "Running all jobs synchronously in the main thread with `time.sleep(30)`." },
      { id: "c", label: "Disabling FastAPI's async route definitions." },
      { id: "d", label: "Spawning an infinite number of thread loops without thread pool limits." }
    ],
    correctOptionId: "a"
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
      { id: "a", label: "Enables cyclical multi-step reasoning, self-reflection loops, state checkpointing, human-in-the-loop approvals, and conditional branch routing." },
      { id: "b", label: "Eliminates all Python memory usage completely." },
      { id: "c", label: "Allows code to execute without a Python interpreter." },
      { id: "d", label: "Forces all agent steps to run in under 1 millisecond." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_07",
    section: "growth",
    prompt: "How does Prompt Compression (e.g. LLMLingua in Python) benefit high-context enterprise workflows?",
    options: [
      { id: "a", label: "Prunes non-essential and redundant tokens from large contexts using small language models, reducing prompt latency and inference costs while retaining critical semantic details." },
      { id: "b", label: "Zips the prompt text into a .rar archive and sends it as raw bytes." },
      { id: "c", label: "Deletes every second word in the document randomly." },
      { id: "d", label: "Converts text characters to hexadecimal representation." }
    ],
    correctOptionId: "a"
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
      { id: "a", label: "Sampling multiple reasoning paths (e.g. N=5 completions at temperature 0.7) and selecting the most frequent final answer via majority vote to increase problem-solving accuracy." },
      { id: "b", label: "Checking if Python code formatting matches PEP 8 standards." },
      { id: "c", label: "Requiring two distinct developers to approve every prompt manually." },
      { id: "d", label: "Validating that the server clock matches UTC." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_grow_010",
    section: "growth",
    prompt: "When deploying production LLM applications in Python, how should Time to First Token (TTFT) and Total Inference Latency be tracked?",
    options: [
      { id: "a", label: "Instrumenting async streaming callbacks with OpenTelemetry / Prometheus histograms measuring TTFT, tokens-per-second, and total stream completion latency." },
      { id: "b", label: "Printing elapsed seconds with `print(time.time())` to standard output without metrics aggregation." },
      { id: "c", label: "Assuming latency is always constant across all cloud regions." },
      { id: "d", label: "Disabling streaming so latency is impossible to measure." }
    ],
    correctOptionId: "a"
  }
];

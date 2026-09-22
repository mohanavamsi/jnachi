import { CertQuestion } from '../types';

export const PYTHON_AI_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "pyai_lit_01",
    section: "literacy",
    prompt: "When configuring the official OpenAI Python SDK (v1.x) to generate deterministic, reproducible JSON responses for data extraction, which configuration parameter combination is most reliable?",
    options: [
      { id: "a", label: "Set `response_format={\"type\": \"json_object\"}` with a low `temperature` (e.g. 0.0) and include the word 'JSON' explicitly in the system prompt." },
      { id: "b", label: "Set `temperature=1.8` and omit system instructions so the model is not over-constrained." },
      { id: "c", label: "Set `top_p=0` and pass binary byte streams without declaring response_format." },
      { id: "d", label: "Use `stream=True` and parse the raw string chunks with `eval()`." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_02",
    section: "literacy",
    prompt: "How does Pydantic's `BaseModel` integration with modern LLM SDKs (e.g. Instructor, LangChain, or OpenAI Structured Outputs) guarantee schema adherence in Python applications?",
    options: [
      { id: "a", label: "It compiles Python models into strict JSON Schema definitions that constrain token sampling and validate runtime parsed outputs." },
      { id: "b", label: "It automatically executes the Python code in a sandboxed Docker container on OpenAI's servers." },
      { id: "c", label: "It removes the need for API keys by validating types client-side before network transmission." },
      { id: "d", label: "It compresses token payloads into gzip format before sending prompts to the inference endpoint." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_03",
    section: "literacy",
    prompt: "When handling streaming LLM completions in Python with `client.chat.completions.create(stream=True)`, what is the recommended pattern to process chunks without blocking the event loop?",
    options: [
      { id: "a", label: "Iterate over chunks using an async iterator (`async for chunk in response:`) and yield delta content as it arrives." },
      { id: "b", label: "Call `time.sleep(1)` inside the loop after each received chunk to prevent rate limits." },
      { id: "c", label: "Buffer all chunks into a global mutable list and wait until the socket closes before rendering." },
      { id: "d", label: "Convert the streaming generator into a synchronous recursion tree." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_04",
    section: "literacy",
    prompt: "In LangChain or LlamaIndex prompt templating, what is the primary benefit of using `ChatPromptTemplate` over standard Python f-strings (`f\"Hello {user}\"`)?",
    options: [
      { id: "a", label: "It separates system, human, and assistant roles clearly, handles variable injection safely, and preserves message role semantics across model providers." },
      { id: "b", label: "It automatically encrypts strings using AES-256 before model execution." },
      { id: "c", label: "It eliminates all API token costs by caching templates in the Python global namespace." },
      { id: "d", label: "It executes SQL queries directly without requiring database connection strings." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_05",
    section: "literacy",
    prompt: "When calculating token usage and estimating cost in a Python pipeline before sending a prompt, which library provides exact BPE (Byte Pair Encoding) tokenization for OpenAI models?",
    options: [
      { id: "a", label: "`tiktoken` using the model-specific encoding (e.g. `cl100k_base` or `o200k_base`)." },
      { id: "b", label: "`nltk.word_tokenize` with default English stop words." },
      { id: "c", label: "`re.split(r'\\s+', text)` counting the length of the resulting list." },
      { id: "d", label: "`json.loads()` counting character bytes divided by 8." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_06",
    section: "literacy",
    prompt: "What is the key role of system messages (`role: \"system\"`) versus user messages (`role: \"user\"`) in Python-based conversational LLM architectures?",
    options: [
      { id: "a", label: "System messages establish high-level behavioral guardrails, tone, persona, and output rules, while user messages provide the dynamic query." },
      { id: "b", label: "System messages are executed as Python shell scripts on the host machine." },
      { id: "c", label: "System messages are free of charge, whereas user messages incur double token billing." },
      { id: "d", label: "User messages override all safety guardrails and API schema validation rules." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_07",
    section: "literacy",
    prompt: "When implementing semantic search with Python, what mathematical operation is typically performed between the query embedding vector and document chunk vectors?",
    options: [
      { id: "a", label: "Cosine similarity (dot product of normalized vectors) to score semantic closeness." },
      { id: "b", label: "Bitwise XOR between the floating-point arrays." },
      { id: "c", label: "Levenshtein edit distance calculated on the raw binary floats." },
      { id: "d", label: "Linear regression slope intersection." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_08",
    section: "literacy",
    prompt: "In Python LLM applications, why is 'context window overflow' a critical error, and how should it be proactively managed?",
    options: [
      { id: "a", label: "Exceeding model maximum tokens causes 400 Bad Request errors; manage it by measuring token counts with `tiktoken` and applying rolling summarization or sliding window truncation." },
      { id: "b", label: "It causes the Python interpreter to segfault; resolve it by increasing Linux virtual swap memory." },
      { id: "c", label: "It causes the LLM to output binary assembly; resolve it by switching from Python to JavaScript." },
      { id: "d", label: "It corrupts the local `.env` configuration file." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_09",
    section: "literacy",
    prompt: "Which Python package is the standard modern framework for asynchronous HTTP requests when building high-concurrency LLM calling services?",
    options: [
      { id: "a", label: "`httpx` with `AsyncClient` or `aiohttp`." },
      { id: "b", label: "`urllib2` in single-threaded blocking mode." },
      { id: "c", label: "`ftplib` over TLS port 21." },
      { id: "d", label: "`telnetlib` with raw TCP sockets." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_10",
    section: "literacy",
    prompt: "What is the purpose of Few-Shot prompting when constructing message arrays in Python for domain-specific classification tasks?",
    options: [
      { id: "a", label: "Providing 2-5 explicit (input, output) exemplar pairs in the prompt context to ground the model in expected formatting and edge-case behavior." },
      { id: "b", label: "Fine-tuning the underlying model weights on custom GPU clusters." },
      { id: "c", label: "Sending multiple requests in parallel to randomly choose the fastest reply." },
      { id: "d", label: "Bypassing content moderation filters through prompt obfuscation." }
    ],
    correctOptionId: "a"
  }
];

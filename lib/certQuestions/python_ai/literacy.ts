import { CertQuestion } from '../types';

export const PYTHON_AI_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "pyai_lit_01",
    section: "literacy",
    prompt: "When configuring the official OpenAI Python SDK (v1.x) to generate deterministic, reproducible JSON responses for data extraction, which configuration parameter combination is most reliable?",
    options: [
      { id: "a", label: "Set `temperature=1.8` and omit system instructions so the model is not over-constrained." },
      { id: "b", label: "Set `top_p=0` and pass binary byte streams without declaring response_format." },
      { id: "c", label: "Set `response_format={\"type\": \"json_object\"}` with a low `temperature` (e.g. 0.0) and include the word 'JSON' explicitly in the system prompt." },
      { id: "d", label: "Use `stream=True` and parse the raw string chunks with `eval()`." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_lit_02",
    section: "literacy",
    prompt: "How does Pydantic's `BaseModel` integration with modern LLM SDKs (e.g. Instructor, LangChain, or OpenAI Structured Outputs) guarantee schema adherence in Python applications?",
    options: [
      { id: "a", label: "It automatically executes the Python code in a sandboxed Docker container on OpenAI's servers." },
      { id: "b", label: "It compiles Python models into strict JSON Schema definitions that constrain token sampling and validate runtime parsed outputs." },
      { id: "c", label: "It removes the need for API keys by validating types client-side before network transmission." },
      { id: "d", label: "It compresses token payloads into gzip format before sending prompts to the inference endpoint." }
    ],
    correctOptionId: "b"
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
      { id: "a", label: "It automatically encrypts strings using AES-256 before model execution." },
      { id: "b", label: "It eliminates all API token costs by caching templates in the Python global namespace." },
      { id: "c", label: "It executes SQL queries directly without requiring database connection strings." },
      { id: "d", label: "It separates system, human, and assistant roles clearly, handles variable injection safely, and preserves message role semantics across model providers." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_lit_05",
    section: "literacy",
    prompt: "When calculating token usage and estimating cost in a Python pipeline before sending a prompt, which library provides exact BPE (Byte Pair Encoding) tokenization for OpenAI models?",
    options: [
      { id: "a", label: "`nltk.word_tokenize` with default English stop words." },
      { id: "b", label: "`tiktoken` using the model-specific encoding (e.g. `cl100k_base` or `o200k_base`)." },
      { id: "c", label: "`re.split(r'\\s+', text)` counting the length of the resulting list." },
      { id: "d", label: "`json.loads()` counting character bytes divided by 8." }
    ],
    correctOptionId: "b"
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
      { id: "a", label: "Bitwise XOR between the floating-point arrays." },
      { id: "b", label: "Levenshtein edit distance calculated on the raw binary floats." },
      { id: "c", label: "Cosine similarity (dot product of normalized vectors) to score semantic closeness." },
      { id: "d", label: "Linear regression slope intersection." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_lit_08",
    section: "literacy",
    prompt: "In Python LLM applications, why is 'context window overflow' a critical error, and how should it be proactively managed?",
    options: [
      { id: "a", label: "It causes the Python interpreter to segfault; resolve it by increasing Linux virtual swap memory." },
      { id: "b", label: "It causes the LLM to output binary assembly; resolve it by switching from Python to JavaScript." },
      { id: "c", label: "It corrupts the local `.env` configuration file." },
      { id: "d", label: "Exceeding model maximum tokens causes 400 Bad Request errors; manage it by measuring token counts with `tiktoken` and applying rolling summarization or sliding window truncation." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_lit_09",
    section: "literacy",
    prompt: "Which Python package is the standard modern framework for asynchronous HTTP requests when building high-concurrency LLM calling services?",
    options: [
      { id: "a", label: "`urllib2` in single-threaded blocking mode." },
      { id: "b", label: "`httpx` with `AsyncClient` or `aiohttp`." },
      { id: "c", label: "`ftplib` over TLS port 21." },
      { id: "d", label: "`telnetlib` with raw TCP sockets." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_lit_10",
    section: "literacy",
    prompt: "What is the purpose of Few-Shot prompting when constructing message arrays in Python for domain-specific classification tasks?",
    options: [
      { id: "a", label: "Fine-tuning the underlying model weights on custom GPU clusters." },
      { id: "b", label: "Sending multiple requests in parallel to randomly choose the fastest reply." },
      { id: "c", label: "Providing 2-5 explicit (input, output) exemplar pairs in the prompt context to ground the model in expected formatting and edge-case behavior." },
      { id: "d", label: "Bypassing content moderation filters through prompt obfuscation." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_lit_11",
    section: "literacy",
    prompt: "In Anthropic's Python SDK (`anthropic.Anthropic()`), how is the system prompt passed when invoking Messages API?",
    options: [
      { id: "a", label: "As a top-level `system=\"...\"` parameter in `client.messages.create()`, separate from the `messages` array." },
      { id: "b", label: "Inside the `messages` list with `role: \"system\"` as the first element." },
      { id: "c", label: "Appended to the end of the user prompt enclosed in brackets." },
      { id: "d", label: "As a HTTP cookie in custom request headers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_12",
    section: "literacy",
    prompt: "When using the `instructor` Python library to patch an OpenAI client, what is its primary mechanism for handling schema validation failures?",
    options: [
      { id: "a", label: "It crashes the script immediately on any type mismatch." },
      { id: "b", label: "It feeds the Pydantic `ValidationError` message back to the LLM in an automated retry loop to self-correct." },
      { id: "c", label: "It replaces invalid fields with random alphanumeric strings." },
      { id: "d", label: "It converts JSON schemas into XML stylesheets." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_lit_13",
    section: "literacy",
    prompt: "What is the difference between `temperature` and `top_p` (nucleus sampling) parameters in Python LLM clients?",
    options: [
      { id: "a", label: "`temperature` controls request timeout in seconds, while `top_p` sets the maximum token budget." },
      { id: "b", label: "`temperature` enables GPU cooling, while `top_p` manages socket concurrency." },
      { id: "c", label: "`temperature` scales the logits distribution globally, while `top_p` truncates the cumulative probability mass of candidate tokens." },
      { id: "d", label: "They are completely identical aliases that perform the exact same calculation." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_lit_14",
    section: "literacy",
    prompt: "When working with multi-modal inputs in Python (e.g. GPT-4o or Claude 3.5 Sonnet), how should local image files be prepared for transmission via JSON payloads?",
    options: [
      { id: "a", label: "Paste raw unencoded binary bytes directly into the text prompt string." },
      { id: "b", label: "Print the image file name without file bytes." },
      { id: "c", label: "Convert the image to a PDF and email it to the API endpoint." },
      { id: "d", label: "Base64 encode the binary image bytes and format as a data URI (`data:image/jpeg;base64,...`) inside the image_url message object." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_lit_15",
    section: "literacy",
    prompt: "Why should `seed` and `system_fingerprint` parameters be monitored in Python OpenAI requests during regression testing?",
    options: [
      { id: "a", label: "To determine which physical datacenter rack processed the request." },
      { id: "b", label: "To facilitate deterministic sampling and detect backend model weight or infrastructure updates." },
      { id: "c", label: "To bypass monthly billing limits." },
      { id: "d", label: "To automatically convert English responses into Python bytecode." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_lit_16",
    section: "literacy",
    prompt: "In Python LangChain Expression Language (LCEL), what does the pipe operator `|` represent in `chain = prompt | model | StrOutputParser()`?",
    options: [
      { id: "a", label: "Bitwise OR operation on integers." },
      { id: "b", label: "A unix shell sub-process execution." },
      { id: "c", label: "Composition of Runnable components, passing the output of the left component as input to the right." },
      { id: "d", label: "A parallel thread synchronization barrier." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_lit_17",
    section: "literacy",
    prompt: "When validating nested JSON schemas with Pydantic v2 in Python, which field validator decorator is used for custom cross-field validation logic?",
    options: [
      { id: "a", label: "`@unittest.mock.patch`." },
      { id: "b", label: "`@functools.wraps`." },
      { id: "c", label: "`@model_validator(mode='after')` or `@field_validator('field_name')`." },
      { id: "d", label: "`@property.setter`." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_lit_18",
    section: "literacy",
    prompt: "What is the primary function of `LiteLLM` in Python AI multi-model applications?",
    options: [
      { id: "a", label: "Provides an unified OpenAI-compatible interface to call 100+ LLMs (Bedrock, Anthropic, Vertex, Ollama) with consistent I/O and exception handling." },
      { id: "b", label: "A lightweight SQLite database engine." },
      { id: "c", label: "A Python GUI framework for desktop applications." },
      { id: "d", label: "A compression tool for training dataset images." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_19",
    section: "literacy",
    prompt: "When constructing dynamic system prompts in Python with user variables, what is the best practice to prevent prompt injection and delimiter confusion?",
    options: [
      { id: "a", label: "Concatenate raw user input directly with `+` into the system directive without tags." },
      { id: "b", label: "Encapsulate user-supplied context within strict XML/markdown tags (e.g. `<user_input>{sanitized_text}</user_input>`) and instruct the model never to treat content within tags as instructions." },
      { id: "c", label: "Remove all whitespace from the prompt." },
      { id: "d", label: "Translate user text to French before sending." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_lit_20",
    section: "literacy",
    prompt: "In Python LlamaIndex, what is the core responsibility of a `ServiceContext` / `Settings` object?",
    options: [
      { id: "a", label: "Manages Windows operating system background services." },
      { id: "b", label: "Configures local firewall ports for HTTP servers." },
      { id: "c", label: "Generates cryptographic SSL certificates." },
      { id: "d", label: "Configures global defaults for LLM, embedding model, node parser, and callback managers across index structures." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_lit_21",
    section: "literacy",
    prompt: "What is the role of the `presence_penalty` parameter in Python OpenAI API completion requests?",
    options: [
      { id: "a", label: "Penalizes tokens based on their exact frequency count." },
      { id: "b", label: "Penalizes tokens based on whether they have already appeared in the text so far, encouraging the model to introduce fresh topics." },
      { id: "c", label: "Disconnects the API socket if the user is away from keyboard." },
      { id: "d", label: "Forces the model to respond in under 500 milliseconds." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_lit_22",
    section: "literacy",
    prompt: "When parsing partial/incomplete JSON during active token streaming in Python, which specialized library allows incremental JSON decoding?",
    options: [
      { id: "a", label: "Standard `json.loads()` which raises a `JSONDecodeError` on incomplete syntax." },
      { id: "b", label: "`pickle.loads()`." },
      { id: "c", label: "`jiter` or `partialjson` / `json-repair`." },
      { id: "d", label: "`csv.reader()`." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_lit_23",
    section: "literacy",
    prompt: "What does the `stop` parameter (e.g. `stop=[\"\\n\\n\", \"###\"]`) achieve in Python LLM completion requests?",
    options: [
      { id: "a", label: "Shuts down the Python interpreter." },
      { id: "b", label: "Deletes the prompt history from the server." },
      { id: "c", label: "Pauses execution for 5 seconds." },
      { id: "d", label: "Instructs the API to immediately halt generation when any specified sequence is encountered, without including the stop token in the output." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_lit_24",
    section: "literacy",
    prompt: "When writing Python code to compute text embeddings with `sentence-transformers` locally, which method generates normalized dense vectors?",
    options: [
      { id: "a", label: "`model.encode(texts, normalize_embeddings=True)`." },
      { id: "b", label: "`model.predict_proba(texts)`." },
      { id: "c", label: "`model.fit_transform(texts)`." },
      { id: "d", label: "`model.to_json(texts)`." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_25",
    section: "literacy",
    prompt: "What is 'Chain-of-Thought (CoT)' prompting when implemented programmatically in Python pipelines?",
    options: [
      { id: "a", label: "Chaining 10 separate physical computers over Ethernet." },
      { id: "b", label: "Prompting the model to output explicit step-by-step reasoning steps before producing the final answer, improving accuracy on complex logic." },
      { id: "c", label: "Encrypting prompt text using blockchain technology." },
      { id: "d", label: "Running multiple models in a circular infinite loop." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_lit_26",
    section: "literacy",
    prompt: "In Python async programming, why is `asyncio.to_thread()` used when calling synchronous LLM libraries from within an async FastAPI handler?",
    options: [
      { id: "a", label: "Converts Python code into C++ binaries." },
      { id: "b", label: "Multiplies API rate limits by 10x." },
      { id: "c", label: "Executes the blocking I/O call in a separate worker thread to prevent freezing the server's main async event loop." },
      { id: "d", label: "Suppresses all network timeout exceptions." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_lit_27",
    section: "literacy",
    prompt: "How does OpenAI's `Strict JSON Schema` feature (Structured Outputs) differ from legacy JSON Mode (`type: \"json_object\"`)?",
    options: [
      { id: "a", label: "Strict mode only works with binary XML data." },
      { id: "b", label: "Legacy JSON mode is faster but requires GPU overclocking." },
      { id: "c", label: "Strict mode deletes all numeric fields." },
      { id: "d", label: "Strict mode guarantees 100% adherence to supplied Pydantic/JSON schemas with zero missing or hallucinated keys via constrained decoding." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_lit_28",
    section: "literacy",
    prompt: "When using prompt templates in Python, why should template variables be typed and validated with Pydantic before interpolation?",
    options: [
      { id: "a", label: "Catches missing, null, or malformed variables before invoking the remote API, saving unnecessary API token costs and failed requests." },
      { id: "b", label: "Compiles prompt templates into assembly code." },
      { id: "c", label: "Removes all token charges from the cloud provider." },
      { id: "d", label: "Bypasses all model safety filters." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_lit_29",
    section: "literacy",
    prompt: "In Python RAG pipelines, what is 'Context Stuffing' and why is it problematic?",
    options: [
      { id: "a", label: "Compressing images into text formats." },
      { id: "b", label: "Overloading prompt context with hundreds of unranked chunks, leading to high latency, increased token costs, and the 'lost in the middle' retrieval degradation." },
      { id: "c", label: "Running vector searches on encrypted databases." },
      { id: "d", label: "A memory leak in Python's garbage collector." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_lit_30",
    section: "literacy",
    prompt: "What is the recommended logging practice in Python when constructing production prompt pipelines?",
    options: [
      { id: "a", label: "Print raw API secret keys to stdout." },
      { id: "b", label: "Disable all logging to reduce disk usage." },
      { id: "c", label: "Log prompt metadata, token counts, and latency, while masking sensitive PII and API keys via structured loggers (e.g. structlog)." },
      { id: "d", label: "Write unencrypted customer prompts to public text files." }
    ],
    correctOptionId: "c"
  }
];

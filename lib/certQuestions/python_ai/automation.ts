import { CertQuestion } from '../types';

export const PYTHON_AI_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "pyai_aut_01",
    section: "automation",
    prompt: "When implementing OpenAI Tool / Function Calling in Python, how should tool arguments returned by the LLM (`tool_call.function.arguments`) be processed safely?",
    options: [
      { id: "a", label: "Execute the string directly with Python's built-in `eval()` to maximize performance." },
      { id: "b", label: "Pass the raw string directly into a SQL database query string without sanitization." },
      { id: "c", label: "Parse arguments with `json.loads()` and validate them against a strict Pydantic model before executing the local Python function." },
      { id: "d", label: "Ignore the arguments and hardcode default parameters in the Python function." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_aut_02",
    section: "automation",
    prompt: "In an agentic loop built in Python (such as LangGraph or custom ReAct loops), what is the termination condition to prevent infinite loops?",
    options: [
      { id: "a", label: "Set a `max_iterations` counter, inspect whether the model returns a final text answer instead of tool calls, and implement a circuit breaker." },
      { id: "b", label: "Wait for the operating system to run out of RAM." },
      { id: "c", label: "Rely solely on the LLM's polite closing remarks." },
      { id: "d", label: "Terminate only when the API returns a 500 Internal Server Error." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_03",
    section: "automation",
    prompt: "When building a document ingestion pipeline in Python for RAG, what is the best chunking strategy for long technical manuals?",
    options: [
      { id: "a", label: "Split strictly every 50 characters regardless of word or sentence boundaries." },
      { id: "b", label: "Send the entire 500-page PDF as a single raw un-chunked string in every prompt." },
      { id: "c", label: "Randomly delete alternate pages to fit into memory." },
      { id: "d", label: "Recursive character chunking with overlap (e.g. 800 tokens chunk size, 150 token overlap) preserving paragraph/code block boundaries." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_aut_04",
    section: "automation",
    prompt: "How does `asyncio.gather()` optimize batch processing when generating embeddings for 1,000 document chunks in Python?",
    options: [
      { id: "a", label: "It executes requests sequentially with a 5-second mandatory sleep between each chunk." },
      { id: "b", label: "It dispatches multiple asynchronous HTTP requests concurrently, reducing total elapsed wall-clock time compared to sequential blocking loops." },
      { id: "c", label: "It merges all chunks into a single embedding vector without calling the API." },
      { id: "d", label: "It bypasses all cloud provider rate limits permanently." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_aut_05",
    section: "automation",
    prompt: "When wrapping an external weather API or database as an LLM tool in Python, what must be included in the tool definition JSON schema?",
    options: [
      { id: "a", label: "The raw source code of the Python interpreter." },
      { id: "b", label: "The database root password and server SSH credentials." },
      { id: "c", label: "Function name, clear natural language description of what the tool does and when to call it, and typed parameter properties with required fields." },
      { id: "d", label: "Only the integer memory address of the Python function pointer." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_aut_06",
    section: "automation",
    prompt: "In Python RAG systems, what is the purpose of a Re-ranker model (e.g. Cohere Rerank / Cross-Encoder) applied after initial vector retrieval?",
    options: [
      { id: "a", label: "To score the top-K retrieved chunks against the full query with higher precision, filtering out irrelevant semantic noise before prompt assembly." },
      { id: "b", label: "To translate all text into Latin before LLM submission." },
      { id: "c", label: "To double the token count to increase billing tier." },
      { id: "d", label: "To delete outdated records from the vector database automatically." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_07",
    section: "automation",
    prompt: "When writing automated integration tests for Python LLM applications, how should non-deterministic API responses be handled in CI/CD pipelines?",
    options: [
      { id: "a", label: "Disable all tests in CI/CD and only test manually in production." },
      { id: "b", label: "Assert exact character-for-character string equality on non-deterministic generative text." },
      { id: "c", label: "Mock API responses using libraries like `pytest-mock` or `vcrpy` to record/replay fixtures, and use LLM-as-a-judge / semantic evals for periodic regression benchmarks." },
      { id: "d", label: "Hardcode live production API keys into public test repositories." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_aut_08",
    section: "automation",
    prompt: "What is the recommended design pattern in Python for handling transient 429 Rate Limit and 503 Overloaded errors from LLM providers?",
    options: [
      { id: "a", label: "Immediate retry in a `while True:` loop without any sleep or delay." },
      { id: "b", label: "Exponential backoff with jitter using libraries like `tenacity` or `backoff`." },
      { id: "c", label: "Immediately crashing the application and terminating the worker process." },
      { id: "d", label: "Switching database credentials to a backup replica." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_aut_09",
    section: "automation",
    prompt: "In LangChain / LlamaIndex Python pipelines, what is the role of `ConversationSummaryBufferMemory`?",
    options: [
      { id: "a", label: "Stores all audio recordings from user microphones permanently." },
      { id: "b", label: "Flushes Redis cache tables every 10 seconds." },
      { id: "c", label: "Translates human text to machine bytecodes directly." },
      { id: "d", label: "Maintains a buffer of recent interactions while progressively summarizing older conversational turns to stay strictly within token limits." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_aut_10",
    section: "automation",
    prompt: "When generating Python code snippets dynamically with an LLM agent, how should code execution be sandboxed to avoid host compromise?",
    options: [
      { id: "a", label: "Execute inside isolated, ephemeral containers (e.g. Docker / gVisor / E2B) with strict memory, CPU, network, and filesystem limits." },
      { id: "b", label: "Execute code with `sudo os.system()` directly on the host server." },
      { id: "c", label: "Trust the LLM's promise that its generated code contains no harmful system commands." },
      { id: "d", label: "Change the file permissions of `/etc/passwd` to 777." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_11",
    section: "automation",
    prompt: "In LangGraph, how is human-in-the-loop (HITL) approval implemented for sensitive tool execution nodes?",
    options: [
      { id: "a", label: "Setting an interrupt before node execution (`interrupt_before=[\"action_node\"]`), persisting graph state to a checkpointer, and resuming upon external approval input." },
      { id: "b", label: "Calling `time.sleep(3600)` until an email is sent." },
      { id: "c", label: "Hardcoding user approval directly in the system prompt." },
      { id: "d", label: "Restarting the Python process on every tool invocation." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_12",
    section: "automation",
    prompt: "When orchestrating multi-agent architectures in Python with AutoGen or CrewAI, what prevents agents from talking in an infinite un-converging loop?",
    options: [
      { id: "a", label: "Defining clear termination conditions (e.g. max turns, regex match for 'TERMINATE', or specific task completion evaluation criteria)." },
      { id: "b", label: "Disabling internet access on the host." },
      { id: "c", label: "Running only one agent per virtual machine." },
      { id: "d", label: "Deleting memory state after every word." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_13",
    section: "automation",
    prompt: "How does vector index upsert batching in Python (e.g. Pinecone, Qdrant, Chroma) prevent request timeouts when processing 50,000 embeddings?",
    options: [
      { id: "a", label: "Upserting one single vector at a time with synchronous blocking HTTP requests." },
      { id: "b", label: "Splitting payloads into chunks of 100-500 vectors with concurrent worker pools and retry logic." },
      { id: "c", label: "Uploading the raw un-vectorized PDF files to the index." },
      { id: "d", label: "Converting floating point numbers into integer strings." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_aut_14",
    section: "automation",
    prompt: "When extracting tabular data from PDF invoices using Python and Vision LLMs, what format is most reliable for downstream database ingestion?",
    options: [
      { id: "a", label: "Unformatted plain prose paragraphs." },
      { id: "b", label: "A single screenshot image attached to an email." },
      { id: "c", label: "Structured JSON parsed into validated Pydantic models with line item arrays and decimal currency types." },
      { id: "d", label: "Raw base64 strings." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_aut_15",
    section: "automation",
    prompt: "What is the primary utility of `tiktoken` caching when streaming chunked outputs in real-time Python WebSockets?",
    options: [
      { id: "a", label: "Pre-calculating token consumption on incoming delta chunks to enforce per-user rate limit budgets dynamically." },
      { id: "b", label: "Compressing WebSocket frames." },
      { id: "c", label: "Encrypting audio streams." },
      { id: "d", label: "Translating messages into Morse code." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_16",
    section: "automation",
    prompt: "In Python RAG pipelines, how does Parent Document Retrieval / Hierarchical Chunking improve answer quality?",
    options: [
      { id: "a", label: "Searches small semantic chunks (e.g. 200 tokens) for precise vector matching, but returns the larger enclosing parent document (e.g. 1000 tokens) to the LLM for rich context." },
      { id: "b", label: "Deletes child documents automatically." },
      { id: "c", label: "Splits documents based on file creation timestamp only." },
      { id: "d", label: "Forces all chunks to be exactly 10 characters long." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_17",
    section: "automation",
    prompt: "When designing a Python fallback router between cloud LLMs (OpenAI) and local open-source LLMs (vLLM / Ollama), what design pattern is best?",
    options: [
      { id: "a", label: "A Circuit Breaker / Fallback Chain that attempts the primary endpoint and catches timeout/connection exceptions before rerouting to the local backup." },
      { id: "b", label: "Hardcoding two sequential requests to both models on every query." },
      { id: "c", label: "Crashing the backend and displaying a 500 error page." },
      { id: "d", label: "Deleting the user session on any network hiccup." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_18",
    section: "automation",
    prompt: "What role do Python Callbacks play in LangChain / LlamaIndex observability?",
    options: [
      { id: "a", label: "They hook into start, end, and error events of LLM calls, tool executions, and retrieval steps to stream tokens, calculate latency, and log traces." },
      { id: "b", label: "They reboot the operating system on errors." },
      { id: "c", label: "They compile Python functions into bytecode." },
      { id: "d", label: "They delete cached database queries." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_19",
    section: "automation",
    prompt: "In Python ETL pipelines, why should embedding vectors be normalized to unit length ($L_2$ norm = 1.0) before indexing in vector databases?",
    options: [
      { id: "a", label: "Allows dot product ($A \\cdot B$) to compute exact cosine similarity directly with faster hardware-accelerated SIMD instructions." },
      { id: "b", label: "Reduces floating point numbers to integers." },
      { id: "c", label: "Prevents vectors from exceeding 10 dimensions." },
      { id: "d", label: "Encrypts the vector values for privacy." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_20",
    section: "automation",
    prompt: "When automating SQL query generation from natural language (Text-to-SQL) in Python, how should generated SQL be executed safely?",
    options: [
      { id: "a", label: "Execute generated SQL with `SUPERUSER` permissions directly against the live production master database." },
      { id: "b", label: "Validate SQL AST with `sqlglot`, restrict connections to read-only database replicas with strict row limits, and disallow `DROP/DELETE/UPDATE` statements." },
      { id: "c", label: "Execute the query using string concatenation without parameterization." },
      { id: "d", label: "Trust the LLM never to generate destructive queries." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_aut_21",
    section: "automation",
    prompt: "What is the benefit of using `Celery` or `ARQ` with Redis in Python for processing multi-document batch summarization jobs?",
    options: [
      { id: "a", label: "Distributes summarization tasks across worker nodes asynchronously, provides job status queues, and handles worker retries without blocking API web requests." },
      { id: "b", label: "Removes all token costs from model providers." },
      { id: "c", label: "Runs tasks synchronously in the main web server thread." },
      { id: "d", label: "Disables rate limiting across all cloud services." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_22",
    section: "automation",
    prompt: "In Python RAG pipelines, what is 'HyDE (Hypothetical Document Embeddings)'?",
    options: [
      { id: "a", label: "An approach where an LLM generates a hypothetical answer to a user query, and that generated text is embedded to retrieve actual grounding documents with higher semantic alignment." },
      { id: "b", label: "A method to hide documents from the search index." },
      { id: "c", label: "An encryption algorithm for vector stores." },
      { id: "d", label: "Deleting outdated documents from memory." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_23",
    section: "automation",
    prompt: "When building an agent with memory across long user sessions in Python, how should vector database message retrieval be combined with recent short-term buffer memory?",
    options: [
      { id: "a", label: "Keep recent 5-10 turns in active short-term context buffer, and perform semantic vector search against past chat history for older contextual references." },
      { id: "b", label: "Load all 50,000 past user messages into every prompt." },
      { id: "c", label: "Wipe memory completely after every single turn." },
      { id: "d", label: "Store chat history in temporary browser cookies only." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_24",
    section: "automation",
    prompt: "How does the `tenacity` library in Python distinguish between retryable errors (429, 503) and non-retryable errors (400, 401) from LLM APIs?",
    options: [
      { id: "a", label: "Using `retry=retry_if_exception_type((RateLimitError, APIConnectionError))` to selectively retry only transient network/rate exceptions." },
      { id: "b", label: "Retrying every error 100 times regardless of exception type." },
      { id: "c", label: "Catching `Exception` and calling `sys.exit()`." },
      { id: "d", label: "Ignoring all exceptions silently." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_25",
    section: "automation",
    prompt: "In Python multi-tool agent routing, how should the model handle situations where no available tool is relevant to the user query?",
    options: [
      { id: "a", label: "Call a random tool with dummy arguments." },
      { id: "b", label: "Respond directly with conversational text or explain why tools are not applicable, instead of forcing hallucinated tool invocations." },
      { id: "c", label: "Crash the application with an unhandled exception." },
      { id: "d", label: "Execute a bash shell command." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_aut_26",
    section: "automation",
    prompt: "What is the purpose of Semantic Router libraries in Python (e.g. `semantic-router` or embedding route classifiers)?",
    options: [
      { id: "a", label: "Routes user prompts to specialized prompt templates or micro-agents based on vector similarity against predefined intent utterances in <5ms." },
      { id: "b", label: "Routes network packets across physical Wi-Fi routers." },
      { id: "c", label: "Reconfigures DNS records on domain registrars." },
      { id: "d", label: "Converts Python scripts to JavaScript." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_27",
    section: "automation",
    prompt: "When writing Python scrapers that feed live data into an LLM summarizer, what is the best practice for handling dynamic JavaScript-rendered pages?",
    options: [
      { id: "a", label: "Use headless browser automation (e.g. Playwright / Crawl4AI) with content extraction pipelines that strip boilerplate navigation/ads before tokenization." },
      { id: "b", label: "Fetch raw HTML with `urllib` and pass 5MB of unparsed JavaScript scripts to the LLM." },
      { id: "c", label: "Take 100 screenshots and send them as binary images." },
      { id: "d", label: "Manually copy-paste content into a text file." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_28",
    section: "automation",
    prompt: "In Python RAG systems, how does 'Metadata Filtering' improve retrieval precision for time-sensitive or tenant-specific queries?",
    options: [
      { id: "a", label: "Applies boolean constraints (e.g. `{\"created_at\": {\"$gte\": 2024}, \"tenant_id\": \"org_123\"}`) directly during vector index search, eliminating irrelevant records." },
      { id: "b", label: "Deletes records older than 1 month." },
      { id: "c", label: "Changes the font color of retrieved documents." },
      { id: "d", label: "Encrypts document titles." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_29",
    section: "automation",
    prompt: "What is the role of `AgentExecutor` vs modern stateful graph workflows in Python agent development?",
    options: [
      { id: "a", label: "Graph workflows (like LangGraph) support cyclical reasoning, checkpointing, and human-in-the-loop branch control, surpassing linear AgentExecutor loops." },
      { id: "b", label: "AgentExecutor is only used for HTML rendering." },
      { id: "c", label: "Graph workflows do not support Python functions." },
      { id: "d", label: "They are exact identical copies of each other." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_30",
    section: "automation",
    prompt: "When building high-throughput Python API services that call external LLMs, what is the best strategy for handling connection pool sizing?",
    options: [
      { id: "a", label: "Configure `httpx.Limits(max_keepalive_connections=50, max_connections=200)` on a shared singleton `AsyncClient` instance to reuse TCP sockets." },
      { id: "b", label: "Create a new `httpx.Client()` instance on every single incoming HTTP request." },
      { id: "c", label: "Disable all connection pooling and close sockets immediately." },
      { id: "d", label: "Set maximum connections to 1." }
    ],
    correctOptionId: "a"
  }
];

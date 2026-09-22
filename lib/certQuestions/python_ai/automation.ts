import { CertQuestion } from '../types';

export const PYTHON_AI_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "pyai_aut_01",
    section: "automation",
    prompt: "When implementing OpenAI Tool / Function Calling in Python, how should tool arguments returned by the LLM (`tool_call.function.arguments`) be processed safely?",
    options: [
      { id: "a", label: "Parse arguments with `json.loads()` and validate them against a strict Pydantic model before executing the local Python function." },
      { id: "b", label: "Execute the string directly with Python's built-in `eval()` to maximize performance." },
      { id: "c", label: "Pass the raw string directly into a SQL database query string without sanitization." },
      { id: "d", label: "Ignore the arguments and hardcode default parameters in the Python function." }
    ],
    correctOptionId: "a"
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
      { id: "a", label: "Recursive character chunking with overlap (e.g. 800 tokens chunk size, 150 token overlap) preserving paragraph/code block boundaries." },
      { id: "b", label: "Split strictly every 50 characters regardless of word or sentence boundaries." },
      { id: "c", label: "Send the entire 500-page PDF as a single raw un-chunked string in every prompt." },
      { id: "d", label: "Randomly delete alternate pages to fit into memory." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_04",
    section: "automation",
    prompt: "How does `asyncio.gather()` optimize batch processing when generating embeddings for 1,000 document chunks in Python?",
    options: [
      { id: "a", label: "It dispatches multiple asynchronous HTTP requests concurrently, reducing total elapsed wall-clock time compared to sequential blocking loops." },
      { id: "b", label: "It executes requests sequentially with a 5-second mandatory sleep between each chunk." },
      { id: "c", label: "It merges all chunks into a single embedding vector without calling the API." },
      { id: "d", label: "It bypasses all cloud provider rate limits permanently." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_05",
    section: "automation",
    prompt: "When wrapping an external weather API or database as an LLM tool in Python, what must be included in the tool definition JSON schema?",
    options: [
      { id: "a", label: "Function name, clear natural language description of what the tool does and when to call it, and typed parameter properties with required fields." },
      { id: "b", label: "The raw source code of the Python interpreter." },
      { id: "c", label: "The database root password and server SSH credentials." },
      { id: "d", label: "Only the integer memory address of the Python function pointer." }
    ],
    correctOptionId: "a"
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
      { id: "a", label: "Mock API responses using libraries like `pytest-mock` or `vcrpy` to record/replay fixtures, and use LLM-as-a-judge / semantic evals for periodic regression benchmarks." },
      { id: "b", label: "Disable all tests in CI/CD and only test manually in production." },
      { id: "c", label: "Assert exact character-for-character string equality on non-deterministic generative text." },
      { id: "d", label: "Hardcode live production API keys into public test repositories." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_08",
    section: "automation",
    prompt: "What is the recommended design pattern in Python for handling transient 429 Rate Limit and 503 Overloaded errors from LLM providers?",
    options: [
      { id: "a", label: "Exponential backoff with jitter using libraries like `tenacity` or `backoff`." },
      { id: "b", label: "Immediate retry in a `while True:` loop without any sleep or delay." },
      { id: "c", label: "Immediately crashing the application and terminating the worker process." },
      { id: "d", label: "Switching database credentials to a backup replica." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_aut_09",
    section: "automation",
    prompt: "In LangChain / LlamaIndex Python pipelines, what is the role of `ConversationSummaryBufferMemory`?",
    options: [
      { id: "a", label: "Maintains a buffer of recent interactions while progressively summarizing older conversational turns to stay strictly within token limits." },
      { id: "b", label: "Stores all audio recordings from user microphones permanently." },
      { id: "c", label: "Flushes Redis cache tables every 10 seconds." },
      { id: "d", label: "Translates human text to machine bytecodes directly." }
    ],
    correctOptionId: "a"
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
  }
];

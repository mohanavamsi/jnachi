import { CertQuestion } from '../types';

export const PYTHON_AI_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: "pyai_priv_01",
    section: "privacy",
    prompt: "How should sensitive API keys (e.g. `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`) be loaded and managed in Python applications?",
    options: [
      { id: "a", label: "Hardcode the raw plaintext API keys directly into public GitHub repository files." },
      { id: "b", label: "Use environment variables loaded via `os.environ.get()` or `pydantic-settings` / `.env` files that are strictly excluded in `.gitignore`." },
      { id: "c", label: "Store API keys in plain text in client-side front-end browser HTML." },
      { id: "d", label: "Commit credentials into Docker images published to public Docker Hub registries." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_priv_02",
    section: "privacy",
    prompt: "When developing an enterprise Python service that processes customer PII (Personally Identifiable Information), how should data be sanitized before sending to third-party LLM endpoints?",
    options: [
      { id: "a", label: "Append a prompt saying 'Please don't look at the customer credit cards in this prompt'." },
      { id: "b", label: "Log the full raw unencrypted customer database dump to public S3 buckets." },
      { id: "c", label: "Use redacting pipelines (e.g. Microsoft Presidio or regex anonymizers) to replace names, SSNs, and credit cards with synthetic placeholders like `[NAME_1]`." },
      { id: "d", label: "Encrypt the payload with a key and instruct the LLM to guess the decryption key." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_priv_03",
    section: "privacy",
    prompt: "Under enterprise Zero Data Retention (ZDR) agreements with commercial LLM providers, what does this guarantee for data submitted via Python API calls?",
    options: [
      { id: "a", label: "Prompt and completion payloads are not stored to disk beyond immediate transient inference and are never used to train base foundation models." },
      { id: "b", label: "All API calls are 100% free of charge." },
      { id: "c", label: "The provider open-sources their internal model weights to the client." },
      { id: "d", label: "Python scripts automatically run 10x faster due to omitted GPU memory allocation." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_priv_04",
    section: "privacy",
    prompt: "What is 'Prompt Injection' in the context of Python-driven AI systems, and how can engineers defend against it?",
    options: [
      { id: "a", label: "A hardware failure in GPU tensor cores caused by overclocking." },
      { id: "b", label: "Injecting CSS stylesheets into Python backend memory." },
      { id: "c", label: "A standard Python syntax error caused by missing colons." },
      { id: "d", label: "Untrusted user inputs manipulating LLM instructions; defend against it using strict system/user message boundaries, XML tags (`<user_data>`), guardrails (NeMo Guardrails), and schema enforcement." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_priv_05",
    section: "privacy",
    prompt: "When writing Python code that logs LLM requests and responses for observability (e.g., using OpenInference, LangSmith, or OpenTelemetry), what critical privacy rule must be enforced?",
    options: [
      { id: "a", label: "Log all plaintext master passwords to standard error." },
      { id: "b", label: "Mask or redact all sensitive keys, authorization tokens, passwords, and sensitive customer data before writing to centralized log stores." },
      { id: "c", label: "Transmit all traces over unencrypted plain HTTP port 80." },
      { id: "d", label: "Disable all timestamps to hide when errors occur." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_priv_06",
    section: "privacy",
    prompt: "Why should Python AI developers avoid passing internal database schemas or internal system file paths in user-accessible prompts?",
    options: [
      { id: "a", label: "It leaks system architecture and potential attack vectors (reconnaissance risk) to adversarial users who may craft targeted exploits." },
      { id: "b", label: "It automatically formats the server's hard drive." },
      { id: "c", label: "It slows down Python's garbage collector by 90%." },
      { id: "d", label: "It makes Python variable names invalid." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_priv_07",
    section: "privacy",
    prompt: "In Python vector search systems storing proprietary documents, what is the role of metadata filtering for role-based access control (RBAC)?",
    options: [
      { id: "a", label: "Translating document texts into multiple spoken languages." },
      { id: "b", label: "Compressing images stored alongside the text." },
      { id: "c", label: "Filtering vector search queries by user tenancy (`tenant_id == current_user.tenant_id`) to ensure users can never retrieve documents outside their authorized organizational domain." },
      { id: "d", label: "Bypassing authentication tokens entirely." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_priv_08",
    section: "privacy",
    prompt: "When using open-source Python LLM frameworks like Hugging Face `transformers` or `vLLM` on local infrastructure, what privacy benefit is achieved?",
    options: [
      { id: "a", label: "Local models are guaranteed to never produce hallucinations." },
      { id: "b", label: "Hardware cooling fans are no longer required." },
      { id: "c", label: "Python code will never encounter runtime exceptions." },
      { id: "d", label: "All inference data, embeddings, and context stay 100% within the organization's private VPC/on-premises network without third-party egress." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_priv_09",
    section: "privacy",
    prompt: "What security measure prevents Server-Side Request Forgery (SSRF) when building a Python tool that allows an LLM agent to fetch URLs?",
    options: [
      { id: "a", label: "Validate requested URLs against a strict whitelist, block private IP ranges (10.0.0.0/8, 192.168.0.0/16, 127.0.0.1, 169.254.169.254), and disable loopback resolution." },
      { id: "b", label: "Allow the agent to query AWS metadata endpoints (`169.254.169.254`) freely." },
      { id: "c", label: "Execute all web requests with root superuser privileges." },
      { id: "d", label: "Disable TLS verification on all outgoing requests." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_priv_10",
    section: "privacy",
    prompt: "How should session history and context windows be cleaned in multi-tenant Python web apps (e.g. FastAPI/Flask)?",
    options: [
      { id: "a", label: "Store all user messages in a single shared global Python list." },
      { id: "b", label: "Broadcast all incoming user prompts to all connected WebSockets." },
      { id: "c", label: "Isolate memory instances per authenticated user session and purge transient context when the session terminates or times out." },
      { id: "d", label: "Keep conversational state in non-expiring public browser cookies." }
    ],
    correctOptionId: "c"
  }
];

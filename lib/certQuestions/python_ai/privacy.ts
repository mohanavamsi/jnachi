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
  },
  {
    id: "pyai_priv_11",
    section: "privacy",
    prompt: "When using Microsoft Presidio in a Python data pipeline, what two components are orchestrated together for PII anonymization?",
    options: [
      { id: "a", label: "`Pandas` and `Numpy`." },
      { id: "b", label: "`AnalyzerEngine` (to detect PII entities via NER and regex) and `AnonymizerEngine` (to replace/hash detected entities)." },
      { id: "c", label: "`FastAPI` and `Uvicorn`." },
      { id: "d", label: "`Docker` and `Kubernetes`." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_priv_12",
    section: "privacy",
    prompt: "In Python LLM applications, what is 'Indirect Prompt Injection'?",
    options: [
      { id: "a", label: "A syntax error in Python indentation." },
      { id: "b", label: "Injecting SQL commands via an open terminal." },
      { id: "c", label: "When an attacker embeds adversarial instructions into third-party web pages, emails, or PDFs that an AI agent retrieves and executes." },
      { id: "d", label: "A compiler optimization flag in CPython." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_priv_13",
    section: "privacy",
    prompt: "How should Python developers handle user data deletion requests (e.g. GDPR / CCPA) in vector database RAG systems?",
    options: [
      { id: "a", label: "Ignore the deletion request since embeddings cannot be reversed." },
      { id: "b", label: "Delete the entire production database for all users." },
      { id: "c", label: "Overwrite the vectors with random numbers." },
      { id: "d", label: "Delete all vector chunks and metadata corresponding to the specific `user_id` or `document_id` and flush the vector index cache." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_priv_14",
    section: "privacy",
    prompt: "What is the purpose of Guardrails AI / NeMo Guardrails in a Python production LLM deployment?",
    options: [
      { id: "a", label: "Enforces programmable safety rails, topical boundary checks, PII redaction, and hallucination detection before output reaches end-users." },
      { id: "b", label: "Overclocks GPU tensor cores automatically." },
      { id: "c", label: "Compresses Python source files into zip archives." },
      { id: "d", label: "Generates HTML CSS templates." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_priv_15",
    section: "privacy",
    prompt: "Why is setting client-side TLS certificate verification (`verify=True`) mandatory in Python HTTP clients connecting to LLM providers?",
    options: [
      { id: "a", label: "Reduces token consumption by 50%." },
      { id: "b", label: "Prevents Man-in-the-Middle (MitM) adversaries from intercepting and decrypting sensitive prompt payloads in transit." },
      { id: "c", label: "Speeds up CPU floating point operations." },
      { id: "d", label: "Bypasses all API billing requirements." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_priv_16",
    section: "privacy",
    prompt: "When storing embedding vectors on disk in Python using FAISS or Chroma, how should the persistent storage volume be secured?",
    options: [
      { id: "a", label: "Make the directory world-writable (`chmod 777`) on public servers." },
      { id: "b", label: "Share the folder via unencrypted FTP." },
      { id: "c", label: "Encrypt the storage volume at rest (e.g. LUKS / AWS KMS EBS encryption) and restrict directory file permissions (`chmod 700`)." },
      { id: "d", label: "Store all vectors in public temporary folders (`/tmp`)." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_priv_17",
    section: "privacy",
    prompt: "What risk arises when allowing LLM agents in Python to execute dynamic SQL without database user permission sandboxing?",
    options: [
      { id: "a", label: "It slows down Python's garbage collection." },
      { id: "b", label: "It invalidates the Python license agreement." },
      { id: "c", label: "It converts relational tables into NoSQL graphs." },
      { id: "d", label: "Adversarial prompts can trick the agent into executing `DROP TABLE`, exfiltrating password hashes, or modifying critical financial records." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_priv_18",
    section: "privacy",
    prompt: "In Python web APIs, how can rate limiting per IP / API token protect LLM endpoints from Denial-of-Service (DoS) and wallet exhaustion attacks?",
    options: [
      { id: "a", label: "Enforces sliding-window request caps (e.g. using Redis token bucket or `slowapi`), preventing malicious users from running up huge API bills." },
      { id: "b", label: "Turns off the web server after 10 requests." },
      { id: "c", label: "Deletes incoming IP addresses from DNS." },
      { id: "d", label: "Disables all async endpoints." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_priv_19",
    section: "privacy",
    prompt: "When writing Python tests that evaluate prompt injection robustness, what is the best automated methodology?",
    options: [
      { id: "a", label: "Test once manually in a web browser and assume it is safe forever." },
      { id: "b", label: "Run automated adversarial benchmark suites (e.g. Garak, PyRIT) in CI/CD to stress test prompt defenses against jailbreaks." },
      { id: "c", label: "Disable all guardrails during testing." },
      { id: "d", label: "Rely solely on standard unit tests asserting string length." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_priv_20",
    section: "privacy",
    prompt: "Why should custom Python LLM tools enforce strict argument typing and schema validation using Pydantic instead of accepting generic `**kwargs`?",
    options: [
      { id: "a", label: "Reduces Python memory consumption to zero." },
      { id: "b", label: "Bypasses all operating system security policies." },
      { id: "c", label: "Prevents unexpected or malicious argument injection (e.g. unexpected shell commands or filepath overrides) from being executed." },
      { id: "d", label: "Allows Python code to run on quantum computers." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_priv_21",
    section: "privacy",
    prompt: "In Python RAG systems, what is the privacy danger of 'Prompt Leaking' (extracting system instructions via adversarial queries)?",
    options: [
      { id: "a", label: "Exposes proprietary business logic, internal API endpoints, secret prompt formulations, and data source architecture to competitors or attackers." },
      { id: "b", label: "It corrupts the Python interpreter installation." },
      { id: "c", label: "It resets the operating system clock." },
      { id: "d", label: "It causes hardware CPU overheating." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_priv_22",
    section: "privacy",
    prompt: "When fine-tuning open-source models on internal company documents using Python, what privacy precaution is vital regarding training data?",
    options: [
      { id: "a", label: "Include full production database dumps with plaintext passwords." },
      { id: "b", label: "Publish the fine-tuning training dataset to public Hugging Face repositories." },
      { id: "c", label: "Run comprehensive deduplication and PII scrubbers (stripping employee SSNs, passwords, and client keys) before tokenization." },
      { id: "d", label: "Disable all data validation." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_priv_23",
    section: "privacy",
    prompt: "How does differential privacy or synthetic data generation in Python (e.g. via SDV library) protect sensitive datasets used for AI evaluation?",
    options: [
      { id: "a", label: "Compresses data into zip files." },
      { id: "b", label: "Translates numbers into hexadecimal strings." },
      { id: "c", label: "Deletes all columns except timestamps." },
      { id: "d", label: "Generates statistically equivalent artificial records with mathematical privacy guarantees without containing any actual individual's real data." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_priv_24",
    section: "privacy",
    prompt: "When deploying Python LLM applications in healthcare or financial sectors, why must audit trails of AI decisions be stored immutably?",
    options: [
      { id: "a", label: "To satisfy regulatory compliance (HIPAA, SOC2, FINRA) allowing forensic review of inputs, model outputs, timestamps, and confidence scores." },
      { id: "b", label: "To increase hard drive sales." },
      { id: "c", label: "To slow down query execution intentionally." },
      { id: "d", label: "To prevent users from using AI." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_priv_25",
    section: "privacy",
    prompt: "What is 'Membership Inference Attack' against AI models, and how does it relate to Python data privacy?",
    options: [
      { id: "a", label: "A hacker guessing gym membership passwords." },
      { id: "b", label: "An adversarial technique that determines whether a specific individual's private record was part of the model's training dataset by analyzing output confidence." },
      { id: "c", label: "A network routing loop in Python sockets." },
      { id: "d", label: "A database index corruption." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_priv_26",
    section: "privacy",
    prompt: "How should ephemeral scratch files generated during Python AI tool execution (e.g. temporary CSVs or downloaded PDFs) be cleaned up?",
    options: [
      { id: "a", label: "Leave all temporary files in `/tmp` permanently." },
      { id: "b", label: "Commit temporary files to git." },
      { id: "c", label: "Use `tempfile.TemporaryDirectory()` in a `with` context manager to guarantee automatic deletion upon block completion." },
      { id: "d", label: "Rename files with a `.bak` extension." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pyai_priv_27",
    section: "privacy",
    prompt: "When building a Python Slack / Discord AI bot, what is the best practice for channel conversation privacy?",
    options: [
      { id: "a", label: "Log and record every single private message across all workspaces to a public server." },
      { id: "b", label: "Broadcast user passwords to general channels." },
      { id: "c", label: "Disable authentication on bot endpoints." },
      { id: "d", label: "Process only messages where the bot is explicitly @mentioned or in approved direct channels, ignoring all unmentioned background channel messages." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pyai_priv_28",
    section: "privacy",
    prompt: "In Python LangChain / LlamaIndex, why should vector embeddings of sensitive customer conversations never be stored in third-party unvetted cloud vector databases?",
    options: [
      { id: "a", label: "Vectors can potentially be inverted or queried to reconstruct sensitive conversational fragments; store in VPC-isolated or self-hosted vector stores." },
      { id: "b", label: "Embeddings cannot be computed for sentences." },
      { id: "c", label: "Vector search only works on open-source hardware." },
      { id: "d", label: "It violates Python syntax rules." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pyai_priv_29",
    section: "privacy",
    prompt: "What is the recommended method for rotating API keys in Python microservices without incurring production service downtime?",
    options: [
      { id: "a", label: "Delete the API key on the cloud provider and wait for customer complaints." },
      { id: "b", label: "Support dual-key fallback in config management (e.g. `PRIMARY_KEY` / `SECONDARY_KEY`), load updated keys via dynamic environment reloading, and retire the old key after grace period." },
      { id: "c", label: "Restart the physical server rack without warning." },
      { id: "d", label: "Hardcode the new key into git commit messages." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pyai_priv_30",
    section: "privacy",
    prompt: "When using local open-source LLMs in Python via `vLLM` or `llama.cpp`, what file integrity check should be performed on downloaded model weights (`.safetensors` / `.gguf`)?",
    options: [
      { id: "a", label: "Check if the file size is an even number." },
      { id: "b", label: "Open the 20GB binary file in Notepad." },
      { id: "c", label: "Verify SHA-256 cryptographic checksums against official release hashes to ensure weights have not been tampered with or backdoored." },
      { id: "d", label: "Rename the extension to `.txt`." }
    ],
    correctOptionId: "c"
  }
];

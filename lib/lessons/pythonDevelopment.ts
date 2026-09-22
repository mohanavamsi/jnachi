import type { Lesson } from '../lessonsData';

export const PYTHON_DEVELOPMENT_LESSONS: Lesson[] = [
  // -------------------------------------------------------------
  // Lesson 33: Python 3.12+ Modern Foundations for AI Engineers
  // -------------------------------------------------------------
  {
    id: 'lesson-33',
    slug: 'python-foundations-for-ai-engineers',
    title: 'Python 3.12+ Modern Foundations for AI Engineers',
    description: 'Master modern Python 3.12+ features essential for production AI: Type hints, Pydantic v2 data models, structural pattern matching, and efficient dependency management with uv.',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '8 min read',
    lessonNumber: 33,
    difficulty: 'Beginner',
    keyTakeaways: [
      'Type hints (\`typing.Annotated\`, \`typing.Literal\`, \`typing.Protocol\`) turn runtime runtime bugs into static compile-time errors in AI pipelines',
      'Pydantic v2 (written in Rust) provides 5x–20x faster data validation, schema enforcement, and JSON serialization for LLM structured outputs',
      'Structural pattern matching (\`match/case\`) simplifies parsing complex LLM tool calls and polymorphic response objects',
      'Modern package managers like \`uv\` resolve and install Python AI dependencies up to 100x faster than traditional pip',
    ],
    tools: ['Python 3.12+', 'Pydantic v2', 'Mypy', 'uv / Poetry'],
    relatedCertifications: ['Python AI Developer', 'AI Foundations'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Basic Python syntax'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'AI engineering is software engineering applied to statistical models. In production, brittle scripts with untyped dictionaries fail catastrophically. Modern Python 3.12+ with strict typing and Pydantic v2 provides the deterministic guardrails required for enterprise AI systems.',
      core: `### Pydantic v2 & Strong Typing for LLM Contracts

\`\`\`python
from typing import Annotated, Literal
from pydantic import BaseModel, Field, HttpUrl, EmailStr

class Citation(BaseModel):
    source_url: HttpUrl
    confidence_score: Annotated[float, Field(ge=0.0, le=1.0, description="Model confidence between 0 and 1")]
    quote_snippet: str = Field(min_length=10, max_length=500)

class AIAnalysisResult(BaseModel):
    query_intent: Literal["ACCOUNT_SUPPORT", "BILLING_INQUIRY", "TECHNICAL_BUG", "GENERAL"]
    sentiment: Literal["POSITIVE", "NEUTRAL", "NEGATIVE"]
    summary: str
    suggested_action: str
    citations: list[Citation] = Field(default_factory=list)

# Instant parsing & validation from raw LLM JSON response:
raw_json = '''{
    "query_intent": "BILLING_INQUIRY",
    "sentiment": "NEGATIVE",
    "summary": "Customer charged twice for subscription.",
    "suggested_action": "Issue immediate refund of $49.00.",
    "citations": [
        {"source_url": "https://help.example.com/refunds", "confidence_score": 0.96, "quote_snippet": "Customers billed twice are eligible for instant refunds."}
    ]
}'''

result = AIAnalysisResult.model_validate_json(raw_json)
print(f"Validated Intent: {result.query_intent}, Confidence: {result.citations[0].confidence_score}")
\`\`\`

---

### Structural Pattern Matching for Multi-Tool Execution
Python 3.10+ \`match/case\` eliminates messy \`if/elif/else\` cascades when routing AI agent tool actions:

\`\`\`python
def execute_agent_tool(tool_call: dict) -> str:
    match tool_call:
        case {"name": "search_database", "args": {"query": str(q), "limit": int(n)}}:
            return f"Querying DB for '{q}' with limit {n}"
        
        case {"name": "send_slack_alert", "args": {"channel": str(ch), "message": str(msg)}}:
            return f"Alerting #{ch}: {msg}"
        
        case {"name": "calculator", "args": {"expression": str(expr)}}:
            return f"Evaluating: {expr}"
            
        case _:
            raise ValueError(f"Unknown or malformed tool call: {tool_call}")
\`\`\``,
      tryThis: 'Write a Pydantic v2 model named `UserPromptLog` containing fields: `user_id` (UUID or str), `tokens_used` (int >= 1), `latency_ms` (float), and `model_name` (Literal["gpt-4o", "claude-3-5-sonnet", "gemini-1.5-pro"]). Test validating valid and invalid dictionary payloads.',
    },
    quiz: [
      {
        question: 'Why is Pydantic v2 dramatically faster at schema validation and JSON parsing compared to Pydantic v1?',
        options: [
          'It runs on graphics processing units (GPUs).',
          'Its core validation engine (`pydantic-core`) was rewritten in Rust.',
          'It disables all type checking at runtime.',
          'It only works with integer numbers.',
        ],
        correctIndex: 1,
        explanation: 'Pydantic v2 achieved a 5x-20x performance speedup by rewriting its core parsing and validation engine in Rust (`pydantic-core`).',
      },
      {
        question: 'What is the advantage of using `Literal["POSITIVE", "NEGATIVE", "NEUTRAL"]` in Python type hints for AI models?',
        options: [
          'It automatically converts strings to floating point numbers.',
          'It strictly restricts allowed string values to the specified exact set of options, catching hallucinations during static type checking and Pydantic validation.',
          'It encrypts the strings with SHA-256.',
          'It requires installing C++ compilers.',
        ],
        correctIndex: 1,
        explanation: '`typing.Literal` restricts a variable or field to an exact enumeration of permitted literal values, preventing unexpected strings from bypassing validation.',
      },
      {
        question: 'What modern Python package manager, written in Rust, provides ultra-fast dependency resolution and installation as an alternative to pip?',
        options: [
          'uv',
          'npm',
          'gem',
          'ant',
        ],
        correctIndex: 0,
        explanation: '`uv` (by Astral) is an extremely fast Python package installer and resolver written in Rust, designed as a drop-in replacement for pip and pip-tools.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 34: AsyncIO & High-Concurrency Python for AI Services
  // -------------------------------------------------------------
  {
    id: 'lesson-34',
    slug: 'asyncio-concurrency-high-throughput-ai',
    title: 'AsyncIO & High-Concurrency Python for AI Services',
    description: 'Build high-throughput, non-blocking AI pipelines using Python AsyncIO, TaskGroups, Semaphores for LLM rate-limit management, and async streaming.',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '9 min read',
    lessonNumber: 34,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'LLM API calls are I/O bound (waiting 1–5 seconds for token generation); synchronous Python wastes CPU cycles blocking on single requests',
      'AsyncIO allows a single Python process to handle thousands of concurrent LLM API requests simultaneously on an event loop',
      '\`asyncio.Semaphore\` strictly throttles concurrent outgoing requests to prevent HTTP 429 Rate Limit errors from API providers',
      'Python 3.11+ \`asyncio.TaskGroup\` guarantees structured concurrency, ensuring no leaked background coroutines if an exception occurs',
    ],
    tools: ['Python asyncio', 'httpx', 'AsyncOpenAI', 'TaskGroup'],
    relatedCertifications: ['Python AI Developer', 'AI Systems Builder'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 33: Python 3.12+ Foundations'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'When processing 1,000 customer documents through an LLM, making synchronous calls that take 2 seconds each takes over 33 minutes. With AsyncIO and rate-limited concurrency, the exact same workload completes in under 30 seconds.',
      core: `### Synchronous vs Asynchronous LLM Processing

\`\`\`mermaid
gantt
    title Synchronous vs AsyncIO Concurrency (10 LLM Requests)
    dateFormat X
    axisFormat %s sec

    section Synchronous (Blocking)
    Request 1 (2s)   :0, 2
    Request 2 (2s)   :2, 4
    Request 3 (2s)   :4, 6
    Request 4 (2s)   :6, 8
    Total 20s        :crit, 8, 20

    section AsyncIO (Concurrent with Concurrency = 5)
    Req 1-5 Parallel :active, 0, 2
    Req 6-10 Parallel:active, 2, 4
    Finished in 4s   :done, 4, 4
\`\`\`

---

### Structured Concurrency with \`asyncio.TaskGroup\` & \`Semaphore\`
Below is a production-grade async batch processor with concurrency throttling:

\`\`\`python
import asyncio
from httpx import AsyncClient

async def process_document_with_ai(client: AsyncClient, sem: asyncio.Semaphore, doc_id: str, text: str) -> dict:
    async with sem:  # Throttles max concurrent requests to 10
        # Simulating non-blocking async HTTP call to LLM API:
        response = await client.post(
            "https://api.openai.com/v1/chat/completions",
            json={"model": "gpt-4o-mini", "messages": [{"role": "user", "content": f"Summarize: {text}"}]},
            headers={"Authorization": "Bearer $OPENAI_API_KEY"},
            timeout=30.0
        )
        data = response.json()
        return {"doc_id": doc_id, "summary": data["choices"][0]["message"]["content"]}

async def batch_process_all_documents(documents: list[tuple[str, str]]) -> list[dict]:
    semaphore = asyncio.Semaphore(10)  # Max 10 concurrent calls
    results = []

    async with AsyncClient() as client:
        async with asyncio.TaskGroup() as tg:
            tasks = [
                tg.create_task(process_document_with_ai(client, semaphore, doc_id, text))
                for doc_id, text in documents
            ]
        
        # All tasks completed cleanly:
        results = [t.result() for t in tasks]
    
    return results
\`\`\``,
      tryThis: 'Run an AsyncIO experiment: Write a script that uses `asyncio.gather()` to fetch 5 mock endpoints concurrently with `asyncio.sleep(1)`. Compare total elapsed time against synchronous `time.sleep(1)` executed in a standard `for` loop.',
    },
    quiz: [
      {
        question: 'Why is AsyncIO particularly well-suited for applications that interact heavily with external LLM APIs (OpenAI, Anthropic, Gemini)?',
        options: [
          'LLM API calls are I/O-bound (waiting on remote network responses), allowing AsyncIO to interleave hundreds of concurrent requests on a single thread without blocking.',
          'AsyncIO automatically fine-tunes model neural weights.',
          'AsyncIO converts Python bytecode to C++ assembly.',
          'AsyncIO eliminates the cost of API tokens.',
        ],
        correctIndex: 0,
        explanation: 'Because generating LLM responses takes seconds over network I/O, AsyncIO lets the event loop process other incoming/outgoing requests while waiting for network bytes.',
      },
      {
        question: 'What is the purpose of `asyncio.Semaphore(10)` in an AI batch processing pipeline?',
        options: [
          'To limit memory usage to 10 Megabytes.',
          'To restrict the maximum number of concurrent executing coroutines to 10 at any given moment, preventing API rate-limit exhaustion.',
          'To retry failed requests 10 times.',
          'To split documents into 10-line chunks.',
        ],
        correctIndex: 1,
        explanation: 'A Semaphore acts as a concurrency limiter, granting up to N simultaneous permits to prevent overwhelming downstream LLM endpoints and encountering HTTP 429 errors.',
      },
      {
        question: 'Introduced in Python 3.11, what is the primary architectural safety benefit of `asyncio.TaskGroup` over `asyncio.gather()`?',
        options: [
          'It automatically translates Python to Rust.',
          'It enforces structured concurrency: if any child task raises an unhandled exception, all sibling tasks in the group are immediately cancelled and cleaned up.',
          'It bypasses the Global Interpreter Lock (GIL).',
          'It creates a graphical dashboard in the browser.',
        ],
        correctIndex: 1,
        explanation: 'TaskGroups implement structured concurrency: if one task fails, remaining sibling tasks are cancelled safely, preventing orphan background tasks from leaking resources.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 35: Building Production AI REST APIs with FastAPI & Pydantic v2
  // -------------------------------------------------------------
  {
    id: 'lesson-35',
    slug: 'fastapi-pydantic-production-ai-apis',
    title: 'Building Production AI REST APIs with FastAPI & Pydantic v2',
    description: 'Design and deploy production-ready AI APIs using FastAPI, dependency injection, streaming responses (SSE), API key security, and automatic OpenAPI specifications.',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '9 min read',
    lessonNumber: 35,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'FastAPI natively leverages Python AsyncIO and Pydantic v2 for high-throughput, low-latency AI microservice backends',
      'Server-Sent Events (\`StreamingResponse\`) stream LLM tokens in real-time to frontend web/mobile clients as they are generated',
      'FastAPI Dependency Injection (\`Depends\`) cleanly manages database connections, authentication, and rate limiters',
      'Automatic OpenAPI / Swagger UI documentation is generated directly from Pydantic schemas without manual documentation sync',
    ],
    tools: ['FastAPI', 'Uvicorn', 'Pydantic v2', 'Server-Sent Events (SSE)'],
    relatedCertifications: ['Python AI Developer', 'AI Systems Builder'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 34: AsyncIO & Concurrency'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'FastAPI has become the standard Python web framework for production AI applications. Its combination of native async support, automatic request validation via Pydantic, and low overhead makes it the premier choice for serving AI models and RAG pipelines.',
      core: `### Streaming LLM Token Responses with Server-Sent Events (SSE)

\`\`\`python
from fastapi import FastAPI, Depends, HTTPException, Security, status
from fastapi.security import APIKeyHeader
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field
import asyncio
import json

app = FastAPI(title="Enterprise AI Copilot API", version="1.0.0")

API_KEY_HEADER = APIKeyHeader(name="X-API-Key", auto_error=True)
VALID_API_KEYS = {"sec-key-prod-9942", "sec-key-dev-1102"}

def verify_api_key(api_key: str = Security(API_KEY_HEADER)) -> str:
    if api_key not in VALID_API_KEYS:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid API Key")
    return api_key

class ChatRequest(BaseModel):
    user_prompt: str = Field(min_length=1, max_length=4000)
    temperature: float = Field(default=0.7, ge=0.0, le=2.0)
    stream: bool = True

async def mock_llm_token_generator(prompt: str):
    """Simulates streaming token generation from an LLM model."""
    tokens = f"Thinking about your query: '{prompt}'... Here is the structured technical breakdown.".split(" ")
    for token in tokens:
        await asyncio.sleep(0.08)  # Simulating LLM token latency
        # Format as standard SSE (Server-Sent Event) data payload:
        yield f"data: {json.dumps({'token': token + ' '})}\n\n"
    yield "data: [DONE]\n\n"

@app.post("/api/v1/chat/stream", response_class=StreamingResponse)
async def chat_stream_endpoint(
    request: ChatRequest,
    _auth: str = Depends(verify_api_key)
):
    return StreamingResponse(
        mock_llm_token_generator(request.user_prompt),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "Connection": "keep-alive"}
    )
\`\`\`

---

### Key Architectural Best Practices in FastAPI AI Microservices
1. **Never block the event loop:** Never call synchronous I/O libraries (like \`requests\` or \`time.sleep\`) inside \`async def\` endpoints; always use \`httpx.AsyncClient\` and \`asyncio.sleep\`.
2. **Lifespan Context Managers:** Use \`@asynccontextmanager\` on FastAPI startup to initialize expensive global connections (e.g., Vector DB client pools, embedding models) and shut them down gracefully.
3. **Background Tasks:** Offload telemetry logging, token billing calculations, and feedback storage using \`BackgroundTasks\` to avoid delaying the API response.`,
      tryThis: 'Run a minimal FastAPI server locally with `uvicorn main:app --reload`. Open the interactive OpenAPI documentation in your browser at `http://localhost:8000/docs` and test making a POST request with valid and invalid Pydantic JSON bodies.',
    },
    quiz: [
      {
        question: 'Which FastAPI response class and media type are used to stream real-time LLM token outputs to web clients via Server-Sent Events (SSE)?',
        options: [
          'HTMLResponse with media_type="text/html"',
          'StreamingResponse with media_type="text/event-stream"',
          'PlainTextResponse with media_type="application/zip"',
          'RedirectResponse with media_type="image/png"',
        ],
        correctIndex: 1,
        explanation: '`StreamingResponse` with `text/event-stream` is the standard protocol for Server-Sent Events (SSE), allowing chunks of generated tokens to reach the client immediately.',
      },
      {
        question: 'What happens if a client submits an HTTP POST request to a FastAPI endpoint with a JSON body that fails Pydantic field validation (e.g., negative temperature when `ge=0.0`)?',
        options: [
          'The server crashes with a segmentation fault.',
          'FastAPI automatically intercepts the error and returns a structured HTTP 422 Unprocessable Entity response detailing the exact invalid fields.',
          'FastAPI ignores the invalid field and saves null.',
          'The server redirects the client to Google.',
        ],
        correctIndex: 1,
        explanation: 'FastAPI automatically validates incoming payloads against Pydantic models, returning a 422 Unprocessable Entity status code with descriptive validation errors.',
      },
      {
        question: 'In FastAPI, what is the primary benefit of using `Depends(...)` for authentication and database sessions?',
        options: [
          'It compiles the Python script to C++.',
          'It provides clean dependency injection, promoting modularity, reusability across endpoints, and simplified mocking in unit tests.',
          'It disables HTTPS encryption.',
          'It automatically sets all passwords to default values.',
        ],
        correctIndex: 1,
        explanation: 'FastAPI’s Dependency Injection system (`Depends`) enables clean separation of concerns, automated resource cleanup, and frictionless test mocking.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 36: OpenAI & Anthropic SDKs: Structured Outputs & Function Calling
  // -------------------------------------------------------------
  {
    id: 'lesson-36',
    slug: 'llm-apis-prompt-engineering-python',
    title: 'OpenAI & Anthropic SDKs: Structured Outputs & Function Calling',
    description: 'Master official Python SDKs for OpenAI and Anthropic: Enforce 100% deterministic JSON schemas with Structured Outputs and implement multi-step Tool/Function Calling.',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '9 min read',
    lessonNumber: 36,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Structured Outputs (\`response_format=PydanticModel\`) guarantee 100% adherence to defined JSON schemas, eliminating JSON parse errors in production',
      'Function Calling / Tool Calling enables models to intelligently select and format arguments for external Python functions and database queries',
      'Anthropic Messages API and OpenAI Chat Completions follow structured multi-turn conversation formats (\`system\`, \`user\`, \`assistant\`, \`tool\`)',
      'Managing context window token limits and caching prompts (\`prompt_caching\`) slashes API costs by up to 90%',
    ],
    tools: ['openai Python SDK', 'anthropic Python SDK', 'Structured Outputs', 'Tool Calling'],
    relatedCertifications: ['Python AI Developer', 'AI Literacy & Prompting'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 33: Python 3.12+ Foundations'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Parsing unstructured text or hoping an LLM returns valid JSON using prompt engineering is unreliable in production. Modern OpenAI and Anthropic SDKs support constrained decoding (Structured Outputs) and native Tool Calling to guarantee deterministic integration with backend systems.',
      core: `### 100% Deterministic Structured Outputs (OpenAI SDK)

\`\`\`python
from openai import OpenAI
from pydantic import BaseModel, Field

client = OpenAI()

class OrderExtraction(BaseModel):
    order_id: str = Field(description="Order identifier starting with ORD-")
    customer_name: str
    items_count: int = Field(ge=1)
    total_amount: float = Field(description="Total currency amount in USD")
    is_expedited_shipping: bool

# Constrained decoding guarantees the model output strictly matches the Pydantic schema:
completion = client.beta.chat.completions.parse(
    model="gpt-4o-2024-08-06",
    messages=[
        {"role": "system", "content": "Extract structured order information from customer emails."},
        {"role": "user", "content": "Hi, this is Alice Smith. Regarding my order ORD-88192 for 3 laptops totaling $4,200.00, please make sure it's sent via expedited overnight shipping!"}
    ],
    response_format=OrderExtraction,
)

# Parsed response is already an instantiated, validated Pydantic model object:
order: OrderExtraction = completion.choices[0].message.parsed
print(f"Parsed Order ID: {order.order_id}, Expedited: {order.is_expedited_shipping}")
\`\`\`

---

### Function / Tool Calling Mechanics in Anthropic Claude 3.5

\`\`\`python
import anthropic

client = anthropic.Anthropic()

tools_definition = [
    {
        "name": "get_stock_price",
        "description": "Retrieves the current stock market price and daily change for a given ticker symbol.",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {"type": "string", "description": "The stock ticker symbol (e.g., AAPL, GOOGL)"}
            },
            "required": ["ticker"]
        }
    }
]

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    tools=tools_definition,
    messages=[
        {"role": "user", "content": "Can you check the current stock price of Apple (AAPL)?"}
    ]
)

# Check if model decided to call a tool:
for block in response.content:
    if block.type == "tool_use":
        print(f"Model requested tool: {block.name} with arguments: {block.input}")
        # Execute local Python function: get_stock_price(ticker="AAPL")
\`\`\``,
      tryThis: 'Implement a complete tool-calling loop: Define a mock `get_weather(city: str)` tool, send a prompt to the model, inspect the `tool_use` response, execute the local function, and send the tool result back to the model for the final synthesized answer.',
    },
    quiz: [
      {
        question: 'What is the primary advantage of OpenAI Structured Outputs (`client.beta.chat.completions.parse`) over traditional prompt engineering ("Please reply in JSON")?',
        options: [
          'It runs on offline laptops without internet connectivity.',
          'It uses constrained grammar decoding at the model inference engine to mathematically guarantee 100% compliance with the provided Pydantic JSON schema.',
          'It makes all API calls free of charge.',
          'It translates JSON into XML automatically.',
        ],
        correctIndex: 1,
        explanation: 'Structured Outputs uses constrained sampling/decoding to guarantee that generated tokens strictly follow the specified JSON schema, eliminating JSON syntax errors.',
      },
      {
        question: 'When an LLM requests a tool call (e.g., `tool_use` block in Anthropic Claude), does the model execute the Python code on its servers directly?',
        options: [
          'Yes, Claude runs Python scripts on Anthropic servers automatically.',
          'No; the model returns the tool name and formatted JSON arguments to your client application, which executes the local function and returns the result back to the model.',
          'The model emails the function to the system administrator.',
          'The model prints the code to the operating system terminal.',
        ],
        correctIndex: 1,
        explanation: 'Tool Calling is an interaction protocol: the model chooses the tool and parameters, but your application executes the actual code locally and feeds the results back into the conversation.',
      },
      {
        question: 'What optimization technique offered by Anthropic and OpenAI caches static system prompts and document context across multiple API requests to reduce latency and token costs by up to 90%?',
        options: [
          'Prompt Caching',
          'Disk Defragmentation',
          'Batch Normalization',
          'Dropout Tuning',
        ],
        correctIndex: 0,
        explanation: 'Prompt Caching allows LLM providers to cache long system prompts, documentation, or codebases in GPU memory, dramatically lowering cost and latency on subsequent queries.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 37: Retrieval-Augmented Generation (RAG): Embeddings & Vector Databases
  // -------------------------------------------------------------
  {
    id: 'lesson-37',
    slug: 'rag-architectures-embeddings-vector-dbs',
    title: 'Retrieval-Augmented Generation (RAG): Embeddings & Vector Databases',
    description: 'Build robust RAG pipelines in Python: Master semantic text chunking, embedding generation (OpenAI/Ollama), vector indexing, similarity search, and Vector DBs (Chroma, pgvector).',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '9 min read',
    lessonNumber: 37,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'RAG grounds LLMs in enterprise private data by retrieving relevant document snippets and injecting them into the prompt context window',
      'Text chunking strategies (recursive character splitting with overlap) preserve semantic context without exceeding embedding model token limits',
      'Vector embeddings map high-dimensional semantic meaning into numerical vectors compared using Cosine Similarity or Dot Product',
      'Vector databases (Chroma, pgvector, Qdrant, Pinecone) index millions of vector embeddings for sub-millisecond approximate nearest neighbor (ANN) search',
    ],
    tools: ['ChromaDB', 'pgvector', 'OpenAI Embeddings', 'tiktoken'],
    relatedCertifications: ['Python AI Developer', 'AI Systems Builder'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 36: OpenAI & Anthropic SDKs'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'LLMs suffer from two fatal flaws: knowledge cutoffs and hallucinations on proprietary corporate data. Retrieval-Augmented Generation (RAG) solves this by fetching verified, relevant passages from an internal vector store and instructing the model to answer strictly based on the retrieved evidence.',
      core: `### The Complete RAG Architecture Pipeline

\`\`\`mermaid
graph TD
    subgraph Ingestion["Ingestion Pipeline (Offline / Background)"]
        Docs["Enterprise PDF/Doc Files"] --> Chunker["Chunker (500 tokens, 10% overlap)"]
        Chunker --> Embedder["Embedding Model (text-embedding-3-small)"]
        Embedder --> VectorDB[("Vector Database (Chroma / pgvector)<br/>- Vector: [0.012, -0.941, ...]<br/>- Metadata: {doc_id, url, page}")]
    end

    subgraph QueryPipeline["Query Pipeline (Real-Time)"]
        UserQ["User: 'What is our refund policy for broken items?'"] --> QEmbed["Embed User Query"]
        QEmbed --> SimSearch["Vector Similarity Search (Top-k = 3)"]
        VectorDB <-->|Cosine Nearest Neighbor| SimSearch
        SimSearch --> AugmentedPrompt["Prompt Assembly:<br/>Context: [Chunk 1, Chunk 2]<br/>User Query: '...'"]
        AugmentedPrompt --> LLM["LLM (GPT-4o / Claude 3.5)"]
        LLM --> Answer["Grounded Fact-Checked Response"]
    end
\`\`\`

---

### End-to-End Python RAG Implementation with ChromaDB

\`\`\`python
import chromadb
from openai import OpenAI

client = OpenAI()
chroma_client = chromadb.Client()
collection = chroma_client.create_collection(name="company_policies")

# 1. Document Ingestion:
documents = [
    "Hardware returns are accepted within 30 days of delivery with original packaging for a full refund.",
    "Software licenses are non-refundable once the activation license key has been generated.",
    "Enterprise customer support operates 24/7 with a guaranteed 15-minute response SLA."
]

# Generate embeddings:
for i, text in enumerate(documents):
    response = client.embeddings.create(input=text, model="text-embedding-3-small")
    embedding = response.data[0].embedding
    collection.add(
        ids=[f"doc_{i}"],
        embeddings=[embedding],
        documents=[text],
        metadatas=[{"category": "policy"}]
    )

# 2. Query & Retrieval:
user_query = "Can I get my money back for an unused software key?"
query_embed = client.embeddings.create(input=user_query, model="text-embedding-3-small").data[0].embedding

results = collection.query(query_embeddings=[query_embed], n_results=2)
retrieved_context = "\n---\n".join(results["documents"][0])

# 3. Augmented Generation:
system_prompt = f"""You are a helpful customer support agent. Answer the user question strictly using the provided context. If the answer is not in the context, say you do not know.

Context:
{retrieved_context}"""

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_query}
    ]
)

print(completion.choices[0].message.content)
\`\`\``,
      tryThis: 'Experiment with chunk size and overlap: Ingest a 5-page policy document using 200-character chunks vs 1,000-character chunks. Compare how chunk size impacts the relevance and completeness of retrieved context passages.',
    },
    quiz: [
      {
        question: 'What is the primary role of an embedding model (e.g., `text-embedding-3-small`) in a RAG system?',
        options: [
          'To generate creative poetry based on keywords.',
          'To convert text strings into dense numerical vectors that capture semantic meaning, enabling mathematical similarity comparison.',
          'To compress video files for web streaming.',
          'To execute SQL database migrations.',
        ],
        correctIndex: 1,
        explanation: 'Embedding models map semantic relationships into high-dimensional vector spaces, where semantically similar phrases are located close to each other.',
      },
      {
        question: 'Why is chunk overlap (e.g., 10–15% overlap) typically used when splitting long documents for RAG ingestion?',
        options: [
          'To double the file size on disk.',
          'To ensure that sentences or concepts split across chunk boundaries retain surrounding context, preventing critical information loss.',
          'To encrypt the chunk boundaries.',
          'To satisfy database schema column limits.',
        ],
        correctIndex: 1,
        explanation: 'Chunk overlap preserves sentence continuity and contextual meaning across split boundaries, preventing fragmented thoughts from losing their meaning.',
      },
      {
        question: 'Which vector distance metric measures the cosine of the angle between two embedding vectors, independent of vector magnitude?',
        options: [
          'Cosine Similarity',
          'Manhattan Distance',
          'Hamming Distance',
          'Levenshtein Distance',
        ],
        correctIndex: 0,
        explanation: 'Cosine similarity measures the angle between two directional vectors in high-dimensional space, yielding a score between -1 and 1 regardless of vector length.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 38: Advanced RAG: Hybrid Search, Reranking & Query Transformations
  // -------------------------------------------------------------
  {
    id: 'lesson-38',
    slug: 'advanced-rag-reranking-hybrid-search',
    title: 'Advanced RAG: Hybrid Search, Reranking & Query Transformations',
    description: 'Elevate RAG accuracy from 70% to 95%+ using Hybrid Search (BM25 + Dense Vectors with RRF), Cross-Encoder Rerankers (Cohere), and HyDE query transformations.',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '9 min read',
    lessonNumber: 38,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Naive dense vector search often misses exact keyword queries (SKUs, error codes, part numbers); Hybrid Search combines BM25 keyword matching with dense vectors',
      'Reciprocal Rank Fusion (RRF) merges disparate search score lists into a unified, balanced relevance ranking',
      'Cross-Encoder Rerankers (Cohere Rerank, BGE-Reranker) score query-document pairs simultaneously, dramatically boosting top-3 precision',
      'Hypothetical Document Embeddings (HyDE) prompts an LLM to generate a hypothetical answer before embedding, bridging the gap between question and answer vector spaces',
    ],
    tools: ['Hybrid Search (BM25 + Vector)', 'Cohere Rerank', 'Reciprocal Rank Fusion (RRF)', 'HyDE'],
    relatedCertifications: ['Python AI Developer', 'AI Systems Builder'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 37: RAG Architectures & Vector DBs'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Basic RAG fails in production when users search for exact technical terms (e.g., "Error ERR-90214") or ask abstract questions. Advanced RAG combines sparse lexical search (BM25), dense semantic search, neural rerankers, and query rewriting to achieve production-grade 95%+ retrieval precision.',
      core: `### The Advanced RAG Pipeline (Hybrid + Reranking)

\`\`\`mermaid
graph TD
    UserQuery["User Query: 'How to fix error code ERR-8012?'"] --> QueryRewrite["Query Transformation / HyDE"]
    
    QueryRewrite --> BM25["Sparse BM25 Search<br/>(Finds exact keyword 'ERR-8012')"]
    QueryRewrite --> Dense["Dense Vector Search<br/>(Finds semantic concepts 'fix error')"]
    
    BM25 --> RRF["Reciprocal Rank Fusion (RRF)<br/>Combines Top 50 Chunks"]
    Dense --> RRF
    
    RRF --> Reranker["Cross-Encoder Reranker (Cohere / BGE)<br/>Deep Query-Document Re-scoring"]
    Reranker --> TopK["Top 3 High-Precision Chunks"]
    TopK --> LLM["LLM Synthesis"]
    LLM --> FinalResponse["Precise Fact-Checked Answer"]
\`\`\`

---

### Two-Stage Retrieval: Fetch Wide (50) $\\rightarrow$ Rerank Deep (3)

1. **Stage 1: Broad Retrieval (Hybrid Search):**
   * Dense vector search excels at broad concepts; BM25 keyword search excels at exact strings and serial numbers.
   * Combine the top 25 results from both algorithms using **Reciprocal Rank Fusion (RRF)**:
     $$\\text{RRF Score}(d) = \\sum_{m \\in M} \\frac{1}{k + r_m(d)} \\quad (k \\approx 60)$$

2. **Stage 2: Precision Neural Reranking:**
   * Vector embeddings compare queries and documents independently (Bi-Encoder).
   * A **Cross-Encoder Reranker** passes the query and chunk together through transformer attention layers, evaluating word-by-word semantic alignment.
   * Reranking 50 candidates down to the top 3 passages increases generation accuracy while reducing prompt token bloat by 80%.`,
      tryThis: 'Implement Reciprocal Rank Fusion (RRF) in Python: Write a function that takes two ranked lists of document IDs (from BM25 and Vector search) and calculates combined RRF scores to produce a single unified top-ranked list.',
    },
    quiz: [
      {
        question: 'Why does naive vector embedding search often fail on queries containing specific product codes or error numbers (e.g., "Fix error ERR-4091")?',
        options: [
          'Embedding models compress text into semantic concepts and often fail to preserve exact character-level token matches for rare alphanumeric codes.',
          'Vector databases do not support numbers.',
          'Error codes are encrypted by the operating system.',
          'Cosine similarity only works on English words.',
        ],
        correctIndex: 0,
        explanation: 'Dense embedding models capture general semantic concepts rather than exact lexical tokens; combining with BM25 keyword search (Hybrid Search) resolves this limitation.',
      },
      {
        question: 'What is the architectural role of a Cross-Encoder Reranker in an Advanced RAG system?',
        options: [
          'To delete duplicate files from cloud storage.',
          'To re-evaluate top candidate chunks by performing joint cross-attention between query and chunk text, producing highly accurate relevance rankings before LLM prompting.',
          'To compress audio streams.',
          'To translate Python code into JavaScript.',
        ],
        correctIndex: 1,
        explanation: 'Cross-encoders compute deep cross-attention over query-document pairs simultaneously, providing significantly more accurate relevance ranking than bi-encoder vector similarity alone.',
      },
      {
        question: 'How does Hypothetical Document Embeddings (HyDE) improve retrieval for abstract or open-ended questions?',
        options: [
          'It deletes the vector index every night.',
          'It prompts an LLM to generate a hypothetical answer passage first, then embeds that synthetic answer to search for real documents in the same vector space.',
          'It translates questions into Latin.',
          'It requires manual approval by an engineer.',
        ],
        correctIndex: 1,
        explanation: 'HyDE generates a hypothetical document that reflects the expected answer format and vocabulary, bringing the search vector closer to the true document space.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 39: Building State Machines & AI Agents with LangGraph & LangChain
  // -------------------------------------------------------------
  {
    id: 'lesson-39',
    slug: 'langchain-langgraph-agentic-workflows',
    title: 'Building State Machines & AI Agents with LangGraph & LangChain',
    description: 'Build robust, multi-actor AI agents using LangGraph: Graph-based state machines, cyclical reasoning loops (ReAct), conditional edges, and human-in-the-loop approvals.',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '9 min read',
    lessonNumber: 39,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Simple linear LLM chains fail on complex tasks; LangGraph models agentic workflows as cyclical state graphs (Nodes, Edges, State)',
      'State objects (\`TypedDict\` / Pydantic) persist conversation memory, tool results, and execution history across multi-turn reasoning loops',
      'Conditional edges route execution dynamically based on model decisions (e.g., execute tool vs respond to user vs seek human approval)',
      'Checkpointers provide persistent state persistence, enabling Human-in-the-Loop workflows (pausing for human approval before financial/database actions)',
    ],
    tools: ['LangGraph', 'LangChain Core', 'StateGraph', 'MemorySaver'],
    relatedCertifications: ['Python AI Developer', 'AI Systems Builder'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 36: OpenAI & Anthropic SDKs'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Traditional LangChain linear pipelines break down when tasks require loops, error recovery, and tool iteration. LangGraph treats agentic applications as stateful directed graphs, giving developers precise programmatic control over agent cycles and decision boundaries.',
      core: `### The LangGraph State Machine Pattern

\`\`\`mermaid
graph TD
    Start([__start__]) --> AgentNode["Agent Node (LLM Decision)"]
    
    AgentNode --> Decision{"Model Decided: Call Tool or Finish?"}
    
    Decision -->|Has Tool Calls| ToolNode["Tool Execution Node<br/>(SQL Query / API Call)"]
    Decision -->|No Tool Calls| FinalNode["Generate Final Answer"]
    
    ToolNode --> AgentNode
    FinalNode --> End([__end__])
\`\`\`

---

### Building an Agent with LangGraph in Python

\`\`\`python
from typing import TypedDict, Annotated, Sequence
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage, ToolMessage
from langgraph.graph import StateGraph, END
from langgraph.graph.message import add_messages

# 1. Define Graph State Schema:
class AgentState(TypedDict):
    # 'add_messages' reducer appends new messages to history instead of overwriting
    messages: Annotated[Sequence[BaseMessage], add_messages]
    iterations_count: int

# 2. Define Node Functions:
def agent_reasoner_node(state: AgentState) -> dict:
    messages = state["messages"]
    # Simulated model decision:
    print(f"Reasoner step {state.get('iterations_count', 0)} with {len(messages)} messages")
    # In real code: response = llm_with_tools.invoke(messages)
    return {"iterations_count": state.get("iterations_count", 0) + 1}

def tool_execution_node(state: AgentState) -> dict:
    print("Executing requested tool action...")
    return {"messages": [ToolMessage(content="Tool execution success result", tool_call_id="call_123")]}

# 3. Define Conditional Routing Edge:
def should_continue(state: AgentState) -> str:
    if state.get("iterations_count", 0) >= 3:
        return "end_workflow"
    # Inspect if last message has tool calls:
    return "execute_tools"

# 4. Assemble the Graph:
workflow = StateGraph(AgentState)
workflow.add_node("agent", agent_reasoner_node)
workflow.add_node("tools", tool_execution_node)

workflow.set_entry_point("agent")
workflow.add_conditional_edges(
    "agent",
    should_continue,
    {
        "execute_tools": "tools",
        "end_workflow": END
    }
)
workflow.add_edge("tools", "agent")  # Loop back to agent

app = workflow.compile()
\`\`\``,
      tryThis: 'In a LangGraph project, configure a `MemorySaver` checkpointer and add a breakpoint before an "execute_payment" node to simulate a Human-in-the-Loop workflow where the user must approve the action in the UI before execution resumes.',
    },
    quiz: [
      {
        question: 'Why does LangGraph use state graphs rather than traditional linear DAG chains for agentic workflows?',
        options: [
          'To convert Python scripts into HTML pages.',
          'Real-world agentic reasoning requires cyclical loops (model -> tool -> evaluate result -> model retry) and deterministic state persistence.',
          'Graphs use less hard drive space than lists.',
          'Linear chains cannot be executed on Linux.',
        ],
        correctIndex: 1,
        explanation: 'Agents inherently require loops to try tools, inspect outputs, and correct errors cyclically, which is natural to model as state graphs with conditional edges.',
      },
      {
        question: 'In LangGraph, what is the function of a State Reducer (such as `Annotated[list, add_messages]`)?',
        options: [
          'To delete old messages when the list reaches 10 items.',
          'To define how new node outputs are merged into the existing state (e.g., appending new messages rather than overwriting the entire history).',
          'To format text in Markdown.',
          'To translate messages into SQL.',
        ],
        correctIndex: 1,
        explanation: 'Reducers specify how updates returned by a node modify existing state properties, such as appending new message objects to an ongoing conversation array.',
      },
      {
        question: 'What capability in LangGraph enables "Human-in-the-Loop" validation (e.g., pausing an agent for manager approval before sending an email)?',
        options: [
          'State Checkpointing with interruption breakpoints (`interrupt_before` / `interrupt_after`).',
          'Restarting the computer.',
          'Deleting the Python environment.',
          'Converting all prompts to uppercase.',
        ],
        correctIndex: 0,
        explanation: 'Checkpointers save graph state at interruption breakpoints, allowing the workflow to pause, wait for external human review or input, and resume seamlessly.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 40: LlamaIndex: Document Ingestion, Parsing & Knowledge Graphs
  // -------------------------------------------------------------
  {
    id: 'lesson-40',
    slug: 'llamaindex-knowledge-graphs-unstructured-data',
    title: 'LlamaIndex: Document Ingestion, Parsing & Knowledge Graphs',
    description: 'Unlock enterprise unstructured data with LlamaIndex: Parse complex PDFs, extract structured metadata, build hierarchical node indices, and implement GraphRAG.',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '9 min read',
    lessonNumber: 40,
    difficulty: 'Advanced',
    keyTakeaways: [
      'LlamaIndex is the premier data framework for connecting private enterprise unstructured data (PDFs, Notion, SQL) to LLM applications',
      'Advanced document parsing (LlamaParse) accurately reconstructs complex tables, embedded charts, and multi-column PDF layouts into clean Markdown',
      'Hierarchical node parsers index parent and child chunks simultaneously, retrieving specific details while preserving broader document context',
      'GraphRAG builds knowledge graphs linking entities and relationships (e.g., [Alice] -> (MANAGES) -> [Project X]), solving multi-hop reasoning questions',
    ],
    tools: ['LlamaIndex', 'LlamaParse', 'PropertyGraphIndex', 'SimpleDirectoryReader'],
    relatedCertifications: ['Python AI Developer', 'AI Systems Builder'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 37: RAG Architectures & Vector DBs'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'While LangChain excels at orchestration and agent loops, LlamaIndex is the undisputed champion of data ingestion and indexing. It transforms messy enterprise documents—unstructured scanned PDFs, technical manuals, financial spreadsheets—into queryable knowledge structures.',
      core: `### Vector Index vs GraphRAG Indexing

\`\`\`mermaid
graph TD
    subgraph VectorRAG["Traditional Vector RAG (Isolated Snippets)"]
        V1["Chunk A: 'Dr. Sarah Smith joined TechCorp in 2021.'"]
        V2["Chunk B: 'Project Apollo was launched by Dr. Smith.'"]
        V3["Chunk C: 'Project Apollo secured $50M in funding.'"]
    end

    subgraph GraphRAG["LlamaIndex GraphRAG (Connected Entity Knowledge Graph)"]
        E1["Entity: Dr. Sarah Smith"] -->|JOINED (2021)| E2["Entity: TechCorp"]
        E1 -->|LAUNCHED| E3["Entity: Project Apollo"]
        E3 -->|SECURED_FUNDING| E4["Entity: $50M Grant"]
    end
\`\`\`

---

### Multi-Document Hierarchy & SubQuestion Query Engine
When a user asks a complex multi-hop question: *"Compare the Q3 operating margin of Company A with Company B"*:
1. Standard Vector RAG fails because no single document chunk contains the comparative analysis.
2. **LlamaIndex SubQuestionQueryEngine:**
   * Decomposes the complex query into 2 sub-queries:
     * *Sub-query 1:* "What was Company A's Q3 operating margin?" (Queried against Doc A).
     * *Sub-query 2:* "What was Company B's Q3 operating margin?" (Queried against Doc B).
   * Aggregates partial answers and synthesizes a comprehensive comparison.`,
      tryThis: 'In a Python script, load a multi-page PDF using LlamaIndex `SimpleDirectoryReader`, configure a `VectorStoreIndex`, and query the index using `as_query_engine(similarity_top_k=3)`. Print the retrieved node metadata and confidence scores.',
    },
    quiz: [
      {
        question: 'What is the primary strength of GraphRAG (Knowledge Graph indexing) compared to traditional pure vector search?',
        options: [
          'It connects entities and relationships across disparate documents, enabling multi-hop reasoning across complex organizational networks.',
          'It eliminates the need for Python compilers.',
          'It compresses images to JPEG format.',
          'It runs exclusively inside web browser cookies.',
        ],
        correctIndex: 0,
        explanation: 'Knowledge Graphs model explicit relationships between entities, enabling RAG pipelines to traverse connections across multiple documents to answer multi-hop questions.',
      },
      {
        question: 'In LlamaIndex, what does the SubQuestionQueryEngine accomplish when presented with a complex comparative query?',
        options: [
          'It deletes the question and asks the user to retype it.',
          'It breaks down the complex query into distinct, focused sub-questions, executes them across target document indices, and synthesizes the consolidated answer.',
          'It converts text into audio speech.',
          'It sends an alert to Discord.',
        ],
        correctIndex: 1,
        explanation: 'The SubQuestionQueryEngine breaks complex questions into manageable sub-queries across relevant document collections, combining partial results into a final answer.',
      },
      {
        question: 'Why is standard naive text extraction often inadequate for complex enterprise PDF documents (such as financial 10-K filings)?',
        options: [
          'PDF files cannot be opened on Windows.',
          'Naive text extractors strip tabular structures, misread multi-column layouts, and lose table header relationships, garbling numerical data.',
          'PDFs can only be read by Adobe Photoshop.',
          'All PDFs are encrypted with AES-512.',
        ],
        correctIndex: 1,
        explanation: 'Standard PDF extractors read left-to-right across columns and destroy table row/column associations; specialized parsers (like LlamaParse) preserve layout integrity.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 41: LLM Observability, Evaluation & Guardrails (Ragas, Langfuse)
  // -------------------------------------------------------------
  {
    id: 'lesson-41',
    slug: 'evaluating-monitoring-llm-applications',
    title: 'LLM Observability, Evaluation & Guardrails (Ragas, Langfuse)',
    description: 'Implement enterprise LLM observability, automated RAG evaluation metrics (Faithfulness, Answer Relevance), cost/latency telemetry, and security guardrails.',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '9 min read',
    lessonNumber: 41,
    difficulty: 'Advanced',
    keyTakeaways: [
      'You cannot improve what you cannot measure; LLM applications require continuous evaluation and distributed tracing in production',
      'The Ragas evaluation framework automates RAG scoring across 4 core metrics: Faithfulness, Answer Relevance, Context Precision, and Context Recall',
      'Observability platforms (Langfuse, OpenTelemetry, Arize Phoenix) trace full execution trees, token usage, latency bottlenecks, and prompt versions',
      'Guardrails frameworks (NeMo Guardrails, Guardrails AI) enforce real-time input sanitization, PII masking, and jailbreak defense',
    ],
    tools: ['Ragas', 'Langfuse', 'OpenTelemetry', 'Guardrails AI'],
    relatedCertifications: ['Python AI Developer', 'Data Privacy & Ethics'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 37: RAG Architectures & Vector DBs'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Deploying an LLM application without evaluation metrics and observability is flying blind. A model update or prompt tweak can silently introduce catastrophic hallucinations. Automated evaluation (Ragas) and distributed tracing (Langfuse) provide the telemetry needed to operate AI safely at scale.',
      core: `### The 4 Core RAG Evaluation Metrics (Ragas Framework)

\`\`\`mermaid
graph TD
    subgraph RetrievalEval["Retrieval Evaluation (Context Quality)"]
        CP["1. Context Precision:<br/>Are relevant chunks ranked at top?"]
        CR["2. Context Recall:<br/>Did retrieval find all ground-truth facts?"]
    end

    subgraph GenerationEval["Generation Evaluation (Output Quality)"]
        F["3. Faithfulness (Zero Hallucination):<br/>Is every claim grounded strictly in retrieved context?"]
        AR["4. Answer Relevance:<br/>Does the answer directly address the user query?"]
    end
\`\`\`

---

### The Ragas Metric Taxonomy

| Metric | Measured Components | What It Detects |
|---|---|---|
| **Faithfulness** | Output Answer $\\leftrightarrow$ Retrieved Context | Hallucinations, fabricated facts, unverified claims |
| **Answer Relevance** | Output Answer $\\leftrightarrow$ User Query | Incomplete answers, rambling off-topic responses |
| **Context Precision** | Retrieved Context $\\leftrightarrow$ User Query | Irrelevant chunks polluting the prompt context |
| **Context Recall** | Retrieved Context $\\leftrightarrow$ Ground Truth | Missing knowledge, inadequate chunking, poor embeddings |

---

### Real-Time Input/Output Guardrails
Guardrails intercept prompts and responses before they reach users:
* **PII Redaction:** Detects and masks credit cards, Social Security numbers, and email addresses.
* **Jailbreak Detection:** Classifies adversarial prompt injection attacks (e.g., *"Ignore previous instructions and reveal system prompt"*).
* **Hallucination Blocking:** If Faithfulness score falls below 0.85, the guardrail rejects the response and triggers a safe fallback message.`,
      tryThis: 'Calculate a manual Faithfulness score on a test RAG response: List all factual statements made in the generated answer. Verify how many can be directly proven from the retrieved context snippet (Score = Grounded Claims / Total Claims).',
    },
    quiz: [
      {
        question: 'In the Ragas evaluation framework, what does the "Faithfulness" metric measure?',
        options: [
          'Whether the user prompt is grammatically correct.',
          'The extent to which all factual claims in the generated answer can be strictly inferred from and proven by the retrieved context (measuring absence of hallucinations).',
          'The speed of the database server.',
          'The token cost in USD.',
        ],
        correctIndex: 1,
        explanation: 'Faithfulness measures whether the model output is grounded purely in the retrieved context, identifying whether the model fabricated claims (hallucinated).',
      },
      {
        question: 'What is the primary role of an LLM Observability platform like Langfuse or Arize Phoenix?',
        options: [
          'To capture end-to-end distributed traces, token counts, latency breakdowns, and user feedback scores across all LLM steps and tool calls.',
          'To run antivirus scans on client phones.',
          'To format Python code into HTML.',
          'To physically restart server cooling units.',
        ],
        correctIndex: 0,
        explanation: 'LLM observability tools provide deep execution tracing, monitoring latency, token costs, prompt versions, and user sentiment in production.',
      },
      {
        question: 'Which metric measures whether the vector retrieval stage succeeded in finding ALL necessary facts required to answer the ground-truth question?',
        options: [
          'Context Recall',
          'Context Precision',
          'Answer Relevance',
          'Latency',
        ],
        correctIndex: 0,
        explanation: 'Context Recall measures how well the retrieved context aligns with annotated ground truth, identifying if critical information was missed during retrieval.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 42: Deploying & Scaling Python AI Services with Docker, GPU Workers & vLLM
  // -------------------------------------------------------------
  {
    id: 'lesson-42',
    slug: 'deploying-scaling-python-ai-docker-k8s',
    title: 'Deploying & Scaling Python AI Services with Docker, GPU Workers & vLLM',
    description: 'Containerize and scale Python AI workloads: Multi-stage Docker builds, high-throughput self-hosted inference with vLLM PagedAttention, and Kubernetes GPU scaling.',
    category: 'Python Development',
    categoryKey: 'python',
    readTime: '9 min read',
    lessonNumber: 42,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Multi-stage Docker builds separate build dependencies from runtime containers, creating lightweight, hardened production images',
      'vLLM uses PagedAttention memory management to achieve up to 24x higher serving throughput for open-source models (Llama 3, Mistral, Qwen) than naive HuggingFace pipelines',
      'Quantization (AWQ, GPTQ, GGUF) compresses 16-bit model weights down to 4-bit, enabling 70B models to run on cost-effective GPUs without quality degradation',
      'Kubernetes Horizontal Pod Autoscalers (HPA) scale AI services based on custom metrics (concurrent requests, queue depth, GPU memory utilization)',
    ],
    tools: ['Docker', 'Kubernetes', 'vLLM', 'NVIDIA Triton', 'Ollama / AWQ'],
    relatedCertifications: ['Python AI Developer', 'AI Systems Builder'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 35: FastAPI AI Microservices'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Running an AI prototype in a Jupyter notebook is easy; serving low-latency inference to millions of concurrent users under strict SLA constraints requires industrial-grade containerization, GPU memory optimization, and resilient deployment topologies.',
      core: `### High-Performance Open-Source Model Serving: vLLM

\`\`\`mermaid
graph TD
    subgraph ClientLayer["Client Requests"]
        C1["User 1 (Fast Stream)"]
        C2["User 2 (Long Prompt)"]
        C3["User 3 (Short Query)"]
    end

    subgraph vLLM_Engine["vLLM High-Throughput Inference Engine"]
        Scheduler["Continuous Batching Engine (No idle GPU cycles)"]
        PagedAttention["PagedAttention KV-Cache Memory Management<br/>(Zero fragmented GPU VRAM)"]
        Scheduler --- PagedAttention
    end

    subgraph GPU_Hardware["NVIDIA GPU (A100 / H100 / L40S)"]
        VRAM["Model Weights (Llama 3 70B AWQ Quantized: 38GB VRAM)"]
        TensorCores["Tensor Core Matrix Computation"]
    end

    C1 --> Scheduler
    C2 --> Scheduler
    C3 --> Scheduler

    PagedAttention --> VRAM
    PagedAttention --> TensorCores
\`\`\`

---

### Production Multi-Stage Dockerfile for Python AI Microservices

\`\`\`dockerfile
# Stage 1: Build Dependencies
FROM python:3.12-slim AS builder

WORKDIR /build
ENV UV_SYSTEM_PYTHON=1

# Install uv for ultra-fast dependency installation:
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv
COPY pyproject.toml requirements.txt ./

RUN uv pip install --no-cache -r requirements.txt --target /build/packages

# Stage 2: Hardened Runtime Container
FROM python:3.12-slim AS runtime

WORKDIR /app
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONPATH=/app/packages

# Create non-root user for enterprise container security:
RUN useradd -u 10001 -m aiuser

COPY --from=builder /build/packages /app/packages
COPY ./src /app/src

USER aiuser
EXPOSE 8000

CMD ["python", "-m", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]
\`\`\``,
      tryThis: 'Write a `docker run` command using the `--gpus all` flag to run a containerized vLLM instance serving `meta-llama/Meta-Llama-3-8B-Instruct` with an OpenAI-compatible REST endpoint on port 8000.',
    },
    quiz: [
      {
        question: 'What breakthrough memory management algorithm does vLLM introduce to eliminate KV-cache fragmentation and boost LLM serving throughput by up to 24x?',
        options: [
          'PagedAttention',
          'Bubble Sort',
          'Disk Defrag',
          'Heap Compaction',
        ],
        correctIndex: 0,
        explanation: 'PagedAttention applies operating system virtual memory paging concepts to LLM Key-Value caches, achieving near-zero memory waste and massive throughput gains.',
      },
      {
        question: 'Why are multi-stage Docker builds recommended for enterprise Python AI container deployments?',
        options: [
          'They separate heavy compiler toolchains from the final runtime image, resulting in smaller image sizes, faster deployment pulls, and minimized security attack surfaces.',
          'They allow containers to run without an operating system.',
          'They automatically generate synthetic test data.',
          'They bypass Kubernetes licensing fees.',
        ],
        correctIndex: 0,
        explanation: 'Multi-stage builds leave behind bulky build tools, resulting in lightweight, secure, and fast-starting production containers.',
      },
      {
        question: 'What does 4-bit weight quantization (e.g., AWQ or GPTQ) accomplish for large language models?',
        options: [
          'It translates model weights into ASCII art.',
          'It reduces the memory footprint of model weights by ~70%, enabling large models (like 70B parameters) to fit and run on smaller, cost-effective GPUs with negligible loss in accuracy.',
          'It deletes 75% of model training data.',
          'It limits output token length to 4 words.',
        ],
        correctIndex: 1,
        explanation: 'Quantization compresses 16-bit floating point weights into 4-bit integers, drastically reducing GPU VRAM requirements with minimal quality loss.',
      },
    ],
  },
];

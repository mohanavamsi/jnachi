import { CertQuestion } from '../types';

export const AGENTIC_AI_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "agentic_aut_01",
    "section": "automation",
    "prompt": "In LangGraph, how do you configure parallel branch execution (fan-out / fan-in) across multiple specialist agent nodes?",
    "options": [
      {
        "id": "a",
        "label": "Run the Python script in 10 separate terminal windows manually."
      },
      {
        "id": "b",
        "label": "Add multiple outgoing edges from a single router node to worker nodes, and converge their edges into a single aggregator node equipped with a state reducer."
      },
      {
        "id": "c",
        "label": "Use `eval()` inside an infinite while loop."
      },
      {
        "id": "d",
        "label": "Disable asynchronous coroutines in FastAPI."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_aut_02",
    "section": "automation",
    "prompt": "When implementing Tool Calling in Python with Pydantic schemas, what decorator pattern in LangChain/LangGraph converts functions to agent-callable tools?",
    "options": [
      {
        "id": "a",
        "label": "`@tool(args_schema=MyToolInputSchema)` which auto-generates JSON schema signatures and validates incoming arguments."
      },
      {
        "id": "b",
        "label": "`@app.route`"
      },
      {
        "id": "c",
        "label": "`@functools.lru_cache`"
      },
      {
        "id": "d",
        "label": "`@dataclass`"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_aut_03",
    "section": "automation",
    "prompt": "How does an agent pipeline handle transient tool API timeout failures without crashing the entire graph execution?",
    "options": [
      {
        "id": "a",
        "label": "Force-kill the server process on first error."
      },
      {
        "id": "b",
        "label": "Delete the tool from the source code."
      },
      {
        "id": "c",
        "label": "Ignore errors and return empty strings silently."
      },
      {
        "id": "d",
        "label": "Wrap tool nodes with structured retry policies (e.g. tenacity exponential backoff), returning informative error observation strings back to the agent for self-correction."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_aut_04",
    "section": "automation",
    "prompt": "In CrewAI, what parameter configuration enables automatic inter-agent delegation between a Research Analyst and a Technical Writer?",
    "options": [
      {
        "id": "a",
        "label": "Assigning identical names to all agents."
      },
      {
        "id": "b",
        "label": "Setting agent temperature to 0.0."
      },
      {
        "id": "c",
        "label": "Setting `allow_delegation=True` on the manager/delegator agent and configuring shared memory stores across the Crew."
      },
      {
        "id": "d",
        "label": "Running CrewAI without tasks."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_aut_05",
    "section": "automation",
    "prompt": "When deploying production agents with LangGraph Cloud / LangGraph Server, how is thread persistence managed?",
    "options": [
      {
        "id": "a",
        "label": "Writing session logs to text files on the local desktop."
      },
      {
        "id": "b",
        "label": "Passing unique `configurable: {'thread_id': session_id}` in config dicts, backed by PostgreSQL or Redis Checkpointers for multi-turn conversational isolation."
      },
      {
        "id": "c",
        "label": "Sharing a single global state object across all concurrent website users."
      },
      {
        "id": "d",
        "label": "Restarting the container on every turn."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_aut_06",
    "section": "automation",
    "prompt": "How should an automated multi-agent workflow handle conflicting conclusions reached by two independent reviewer agents?",
    "options": [
      {
        "id": "a",
        "label": "Route both outputs along with source evidence to a Judge/Arbitrator agent with explicit evaluation heuristics to resolve discrepancy before proceeding."
      },
      {
        "id": "b",
        "label": "Pick the response that generated faster randomly."
      },
      {
        "id": "c",
        "label": "Crash with a ValueError exception."
      },
      {
        "id": "d",
        "label": "Delete both conclusions and terminate the workflow."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_aut_07",
    "section": "automation",
    "prompt": "In AutoGen multi-agent conversations, how is conversation termination deterministically controlled?",
    "options": [
      {
        "id": "a",
        "label": "By shutting down the operating system firewall."
      },
      {
        "id": "b",
        "label": "By waiting for the user to close the browser."
      },
      {
        "id": "c",
        "label": "By setting CPU throttling limits."
      },
      {
        "id": "d",
        "label": "By defining `is_termination_msg` predicates (e.g. checking for 'TERMINATE' or goal verification predicates) and setting `max_consecutive_auto_reply` limits."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_aut_08",
    "section": "automation",
    "prompt": "When building an agent with real-time web browsing capabilities, how is dynamic DOM pagination automated safely?",
    "options": [
      {
        "id": "a",
        "label": "Downloading all internet HTML files in a single zip."
      },
      {
        "id": "b",
        "label": "Running regex parsing directly on raw TCP network packets."
      },
      {
        "id": "c",
        "label": "Using headless browser frameworks (Playwright/Browser-Use) with structured action primitives (click, type, scroll, extract) and bounding-box vision grounding."
      },
      {
        "id": "d",
        "label": "Disabling JavaScript in the target web application."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_aut_09",
    "section": "automation",
    "prompt": "What is 'Dynamic Subgraph Invocation' in scalable LangGraph systems?",
    "options": [
      {
        "id": "a",
        "label": "Printing graph diagrams to PDF."
      },
      {
        "id": "b",
        "label": "Embedding isolated, encapsulated state graphs as discrete nodes within a parent supervisor graph, enabling modular reuse of specialized agent workflows."
      },
      {
        "id": "c",
        "label": "Deleting inactive nodes from RAM."
      },
      {
        "id": "d",
        "label": "Converting Python functions to JavaScript."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_aut_10",
    "section": "automation",
    "prompt": "How can an agent autonomously parse and execute dynamic Python code safely in an automated sandbox?",
    "options": [
      {
        "id": "a",
        "label": "Using isolated container environments (e.g. Docker, E2B Sandboxes, gVisor) with network restrictions, memory caps, and execution timeouts."
      },
      {
        "id": "b",
        "label": "Calling `eval()` directly with root admin privileges on the host production server."
      },
      {
        "id": "c",
        "label": "Writing code directly to `/etc/passwd`."
      },
      {
        "id": "d",
        "label": "Running code inside the user's browser console without permissions."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_aut_11",
    "section": "automation",
    "prompt": "In LangGraph, how do you implement a 'Human-in-the-Loop approval with state edit' before a database write?",
    "options": [
      {
        "id": "a",
        "label": "Ask the human to SSH into the database server manually."
      },
      {
        "id": "b",
        "label": "Send an SMS message and terminate execution."
      },
      {
        "id": "c",
        "label": "Bypass human review if latency is over 500ms."
      },
      {
        "id": "d",
        "label": "Set `interrupt_before=['execute_db_write']`, present state to human via UI, accept user modifications via `graph.update_state()`, and resume with `graph.stream(None)`."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_aut_12",
    "section": "automation",
    "prompt": "What is the role of 'Streaming Events API' (e.g. `astream_events` in LangChain/LangGraph) for user-facing agent interfaces?",
    "options": [
      {
        "id": "a",
        "label": "Broadcasts live audio to Twitch."
      },
      {
        "id": "b",
        "label": "Transfers database backups to S3."
      },
      {
        "id": "c",
        "label": "Streams real-time token chunks, intermediate tool execution starts/ends, and agent reasoning thoughts to the frontend UI as they happen."
      },
      {
        "id": "d",
        "label": "Compresses network video streams."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_aut_13",
    "section": "automation",
    "prompt": "When building an agent with long-term memory in PostgreSQL with `pgvector`, how is memory recall integrated into the agent loop?",
    "options": [
      {
        "id": "a",
        "label": "Reading all 10 million rows into the prompt context."
      },
      {
        "id": "b",
        "label": "Running a similarity search against past conversation embeddings in a pre-step node and injecting top relevant memory summaries into the agent context."
      },
      {
        "id": "c",
        "label": "Deleting old user accounts."
      },
      {
        "id": "d",
        "label": "Using SQL drop table commands."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_aut_14",
    "section": "automation",
    "prompt": "How does an agent pipeline prevent infinite loops when an external tool repeatedly returns identical error responses?",
    "options": [
      {
        "id": "a",
        "label": "Enforce a maximum step count (`recursion_limit=25`) and maintain an error repetition counter that triggers fallback nodes if identical errors recur 3 times."
      },
      {
        "id": "b",
        "label": "Allow the agent to run until server memory crashes."
      },
      {
        "id": "c",
        "label": "Disable error logging."
      },
      {
        "id": "d",
        "label": "Change model temperature to 2.0."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_aut_15",
    "section": "automation",
    "prompt": "In CrewAI, how does 'Sequential vs Hierarchical Process' determine task flow?",
    "options": [
      {
        "id": "a",
        "label": "Hierarchical runs only on Windows; Sequential runs on Linux."
      },
      {
        "id": "b",
        "label": "Sequential deletes task files after completion."
      },
      {
        "id": "c",
        "label": "There is no difference."
      },
      {
        "id": "d",
        "label": "Sequential executes tasks in a strict linear order; Hierarchical uses an autonomous Manager LLM to dynamically assign and review tasks."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_aut_16",
    "section": "automation",
    "prompt": "What is the benefit of using 'Async Tool Dispatch' (`asyncio.gather`) when an agent calls multiple independent lookup APIs?",
    "options": [
      {
        "id": "a",
        "label": "Translates code to C++."
      },
      {
        "id": "b",
        "label": "Disables network encryption."
      },
      {
        "id": "c",
        "label": "Executes all non-dependent tool requests concurrently over a shared event loop, reducing latency from sum(t) to max(t)."
      },
      {
        "id": "d",
        "label": "Limits the agent to 1 API call per hour."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_aut_17",
    "section": "automation",
    "prompt": "How should an automated agent pipeline validate that a generated SQL query is safe before execution against a reporting replica?",
    "options": [
      {
        "id": "a",
        "label": "Run the query on production with admin privileges."
      },
      {
        "id": "b",
        "label": "Use AST SQL parsers to verify read-only statements (`SELECT` only), block DDL/DML keywords (`DROP`, `DELETE`, `INSERT`), and enforce statement timeouts."
      },
      {
        "id": "c",
        "label": "Check if the query string is longer than 50 characters."
      },
      {
        "id": "d",
        "label": "Convert the SQL query to an image."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_aut_18",
    "section": "automation",
    "prompt": "In LangGraph, what is the purpose of `MessagesState` built-in state schema?",
    "options": [
      {
        "id": "a",
        "label": "Provides a standardized state dictionary containing a `messages: Annotated[list[AnyMessage], add_messages]` list with automated ID deduplication and appending logic."
      },
      {
        "id": "b",
        "label": "Stores email passwords."
      },
      {
        "id": "c",
        "label": "Limits messages to 5 words."
      },
      {
        "id": "d",
        "label": "Deletes all incoming user inputs."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_aut_19",
    "section": "automation",
    "prompt": "How can an agent workflow automatically summarize and compress its own conversation history when approaching token limits?",
    "options": [
      {
        "id": "a",
        "label": "Delete all odd-numbered characters."
      },
      {
        "id": "b",
        "label": "Restart the application server."
      },
      {
        "id": "c",
        "label": "Compress text into a `.tar.gz` file and send raw binary to the model."
      },
      {
        "id": "d",
        "label": "Invoke a summarization node that distills older conversational turns into a concise executive recap message and prunes raw message history."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_aut_20",
    "section": "automation",
    "prompt": "What is 'Tool Caching' in high-throughput agent workflows?",
    "options": [
      {
        "id": "a",
        "label": "Saving tool code into browser cookies."
      },
      {
        "id": "b",
        "label": "Permanently locking tool parameters."
      },
      {
        "id": "c",
        "label": "Caching idempotent tool responses keyed by hashed tool arguments in Redis to eliminate redundant downstream API costs and latency."
      },
      {
        "id": "d",
        "label": "Deleting tools from source control."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_aut_21",
    "section": "automation",
    "prompt": "When orchestrating multi-agent collaboration with AutoGen, what is the role of the `UserProxyAgent`?",
    "options": [
      {
        "id": "a",
        "label": "Bans users from the platform."
      },
      {
        "id": "b",
        "label": "Acts as a proxy for the human user, capable of executing code, triggering tools, and providing human input or auto-feedback."
      },
      {
        "id": "c",
        "label": "Encrypts user passwords."
      },
      {
        "id": "d",
        "label": "Generates user invoices."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_aut_22",
    "section": "automation",
    "prompt": "How does an agent pipeline implement 'Dynamic Tool Routing' using embedding semantic routers?",
    "options": [
      {
        "id": "a",
        "label": "Embeds incoming user query intent and computes similarity against tool domain embeddings to inject only top-3 relevant tools, reducing prompt overhead."
      },
      {
        "id": "b",
        "label": "Routes network traffic across physical VPN gateways."
      },
      {
        "id": "c",
        "label": "Selects tools based on alphabetical name order."
      },
      {
        "id": "d",
        "label": "Disables all tools except the first one defined."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_aut_23",
    "section": "automation",
    "prompt": "In LangGraph Studio, what capability accelerates multi-agent workflow development and debugging?",
    "options": [
      {
        "id": "a",
        "label": "3D gaming rendering."
      },
      {
        "id": "b",
        "label": "Generating CSS stylesheets."
      },
      {
        "id": "c",
        "label": "Automated credit card processing."
      },
      {
        "id": "d",
        "label": "Visual interactive state graph inspection, step-by-step node replay, live state editing, and breakpoint debugging of agent execution trajectories."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_aut_24",
    "section": "automation",
    "prompt": "What is the best architecture for an agent that needs to poll an external long-running job (e.g. video rendering) asynchronously?",
    "options": [
      {
        "id": "a",
        "label": "An infinite blocking while loop in the main API thread."
      },
      {
        "id": "b",
        "label": "Restarting the server every 10 seconds."
      },
      {
        "id": "c",
        "label": "A cyclic graph loop with a sleep/delay node and conditional edge checking job status API until status is 'COMPLETED' or timeout expires."
      },
      {
        "id": "d",
        "label": "Assuming the job completed instantly without checking."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_aut_25",
    "section": "automation",
    "prompt": "When writing custom tools for AI agents in Python, why should docstrings follow Google or Sphinx formatting standards?",
    "options": [
      {
        "id": "a",
        "label": "Docstrings are compiled into machine assembly."
      },
      {
        "id": "b",
        "label": "Docstrings are parsed directly by model tool calling converters to generate parameter descriptions and purpose summaries for the LLM."
      },
      {
        "id": "c",
        "label": "Python requires docstrings for syntax validation."
      },
      {
        "id": "d",
        "label": "Docstrings reduce hard drive storage."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_aut_26",
    "section": "automation",
    "prompt": "How does 'State Schema Versioning' prevent breaking active user agent sessions during continuous deployment?",
    "options": [
      {
        "id": "a",
        "label": "Writing schema migration adapters that transform legacy checkpointed state dictionaries into the new schema structure upon deserialization."
      },
      {
        "id": "b",
        "label": "Deleting all active user sessions on deploy."
      },
      {
        "id": "c",
        "label": "Never updating agent code once deployed."
      },
      {
        "id": "d",
        "label": "Storing state in plain text files."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_aut_27",
    "section": "automation",
    "prompt": "In multi-agent systems, how does 'Token Budget Allocation per Sub-Agent' prevent budget exhaustion?",
    "options": [
      {
        "id": "a",
        "label": "Charges user credit cards per token."
      },
      {
        "id": "b",
        "label": "Limits agents to 1 word per reply."
      },
      {
        "id": "c",
        "label": "Disables model inference."
      },
      {
        "id": "d",
        "label": "Caps the maximum tokens and tool call count each sub-agent can consume per invocation, returning partial results if thresholds are reached."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_aut_28",
    "section": "automation",
    "prompt": "What is the purpose of 'Guardrail Nodes' placed immediately before agent output synthesis in LangGraph?",
    "options": [
      {
        "id": "a",
        "label": "Translates responses to HTML."
      },
      {
        "id": "b",
        "label": "Encrypts responses with SHA-256."
      },
      {
        "id": "c",
        "label": "Validates final agent responses against safety policies, hallucination detectors, and compliance rules before returning payload to the user."
      },
      {
        "id": "d",
        "label": "Prints responses to the terminal."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_aut_29",
    "section": "automation",
    "prompt": "How can an autonomous agent monitor its own tool execution latency in production?",
    "options": [
      {
        "id": "a",
        "label": "Guessing latency based on text length."
      },
      {
        "id": "b",
        "label": "Instrumenting tool wrappers with OpenTelemetry spans recording `tool_name`, `execution_time_ms`, and `status_code` to Prometheus / Datadog."
      },
      {
        "id": "c",
        "label": "Asking the LLM to rate how fast it felt."
      },
      {
        "id": "d",
        "label": "Disabling all metrics."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_aut_30",
    "section": "automation",
    "prompt": "When building an agent with self-healing capabilities, what action should the agent take upon receiving a 401 Unauthorized API error from a tool?",
    "options": [
      {
        "id": "a",
        "label": "Check if the token refresh tool is available, refresh the expired OAuth token, and retry the failed tool invocation with the new token."
      },
      {
        "id": "b",
        "label": "Hallucinate fake data to pretend the API succeeded."
      },
      {
        "id": "c",
        "label": "Spam the API 1,000 times per second."
      },
      {
        "id": "d",
        "label": "Delete the user account."
      }
    ],
    "correctOptionId": "a"
  }
];

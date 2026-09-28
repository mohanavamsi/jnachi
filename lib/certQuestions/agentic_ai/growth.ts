import { CertQuestion } from '../types';

export const AGENTIC_AI_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "agentic_gro_01",
    "section": "growth",
    "prompt": "When scaling a multi-agent system to handle 100,000 concurrent user sessions, which architecture prevents server memory exhaustion?",
    "options": [
      {
        "id": "a",
        "label": "Storing all active agent session memory in a single global Python dictionary in RAM."
      },
      {
        "id": "b",
        "label": "Externalizing graph state checkpointers to Redis / PostgreSQL and running stateless agent workers in autoscaling Kubernetes pods."
      },
      {
        "id": "c",
        "label": "Limiting the entire application to 1 user at a time."
      },
      {
        "id": "d",
        "label": "Restarting the production server on every user message."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_gro_02",
    "section": "growth",
    "prompt": "How does 'Model Cascading / Speculative Agent Routing' reduce token costs in high-volume enterprise agent workflows?",
    "options": [
      {
        "id": "a",
        "label": "Routing simple triage, formatting, and classification subtasks to fast, cost-effective models (e.g. GPT-4o-mini, Haiku), reserving frontier reasoning models for complex multi-step planning."
      },
      {
        "id": "b",
        "label": "Calling 5 frontier models simultaneously for every single task."
      },
      {
        "id": "c",
        "label": "Deleting all system prompts before sending requests."
      },
      {
        "id": "d",
        "label": "Running all queries exclusively on local mobile CPUs."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_gro_03",
    "section": "growth",
    "prompt": "In distributed agent tracing with Langfuse / Arize Phoenix, what does a 'Trace vs Span' hierarchy represent?",
    "options": [
      {
        "id": "a",
        "label": "A Trace is for CSS styles; a Span is for HTML headers."
      },
      {
        "id": "b",
        "label": "Spans are only used for database errors."
      },
      {
        "id": "c",
        "label": "There is no difference between Traces and Spans."
      },
      {
        "id": "d",
        "label": "A Trace represents the root end-to-end user transaction; Spans represent discrete nested sub-operations (e.g. planner LLM call, tool execution, memory retrieval, evaluator)."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_gro_04",
    "section": "growth",
    "prompt": "What is 'Semantic Cache Eviction based on Cosine Similarity Thresholds' in high-throughput agent systems?",
    "options": [
      {
        "id": "a",
        "label": "Deleting all cache files every 60 seconds."
      },
      {
        "id": "b",
        "label": "Compressing memory caches into ZIP files."
      },
      {
        "id": "c",
        "label": "Serving cached tool or reasoning responses when incoming sub-queries exceed a high vector similarity threshold (e.g. >= 0.96), bypassing redundant LLM generation."
      },
      {
        "id": "d",
        "label": "Matching queries based purely on character string length."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_gro_05",
    "section": "growth",
    "prompt": "How does 'Dynamic Context Compaction' prevent context window saturation during extended multi-hour agent research tasks?",
    "options": [
      {
        "id": "a",
        "label": "Deleting the user's research goal after step 5."
      },
      {
        "id": "b",
        "label": "Hierarchically summarizing completed milestones into structured state artifacts and evicting raw conversational turns while retaining the master progress graph."
      },
      {
        "id": "c",
        "label": "Translating research papers into single-word summaries."
      },
      {
        "id": "d",
        "label": "Disabling model output after 1,000 tokens."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_gro_06",
    "section": "growth",
    "prompt": "When benchmarking multi-agent systems, what does 'Trajectory Efficiency Metric' measure?",
    "options": [
      {
        "id": "a",
        "label": "The ratio of successful goal completion steps to total tool calls made, quantifying wasted or redundant exploration loops."
      },
      {
        "id": "b",
        "label": "The physical distance travelled by server delivery trucks."
      },
      {
        "id": "c",
        "label": "The number of lines of Python code in the repository."
      },
      {
        "id": "d",
        "label": "The CPU fan rotation speed."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_gro_07",
    "section": "growth",
    "prompt": "How does 'Asynchronous Worker Queue Architecture' (e.g. Celery / ARQ with Redis) prevent HTTP gateway timeouts for long-running agent tasks?",
    "options": [
      {
        "id": "a",
        "label": "Blocks the HTTP connection indefinitely until the agent finishes 10 minutes later."
      },
      {
        "id": "b",
        "label": "Forces all agent tasks to terminate within 100 milliseconds."
      },
      {
        "id": "c",
        "label": "Disables all background processing."
      },
      {
        "id": "d",
        "label": "Accepts user request, returns an immediate `job_id`, dispatches agent execution to background workers, and streams progress updates via WebSockets or Server-Sent Events (SSE)."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_gro_08",
    "section": "growth",
    "prompt": "What is 'Multi-Agent Consensus Protocol' when evaluating critical business recommendations?",
    "options": [
      {
        "id": "a",
        "label": "Requiring all agents to use the exact same prompt."
      },
      {
        "id": "b",
        "label": "Selecting the shortest response generated."
      },
      {
        "id": "c",
        "label": "Sampling independent evaluations from N diverse specialized agents and aggregating votes via weighted majority or Borda count to eliminate single-agent bias."
      },
      {
        "id": "d",
        "label": "Allowing agents to run without constraints."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_gro_09",
    "section": "growth",
    "prompt": "How does 'Prompt Optimization via DSPy / GEval' automatically improve agent performance over time?",
    "options": [
      {
        "id": "a",
        "label": "Manually editing prompts in notepad every Friday."
      },
      {
        "id": "b",
        "label": "Compiles declarative agent modules into optimized few-shot prompts and instructions using teleprompters evaluated against ground-truth validation sets."
      },
      {
        "id": "c",
        "label": "Deleting failed test cases from evaluation suites."
      },
      {
        "id": "d",
        "label": "Changing variable names to random numbers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_gro_10",
    "section": "growth",
    "prompt": "What is 'Distributed Memory Synchronization' in a cluster of autonomous agent workers?",
    "options": [
      {
        "id": "a",
        "label": "Using distributed vector databases (e.g. Qdrant, Milvus) with read replicas and pub/sub cache invalidation so updates made by Agent A are instantly queryable by Agent B."
      },
      {
        "id": "b",
        "label": "Copying text files across USB flash drives."
      },
      {
        "id": "c",
        "label": "Running all agents on a single server without network access."
      },
      {
        "id": "d",
        "label": "Disabling memory sharing across agents."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_gro_11",
    "section": "growth",
    "prompt": "When designing high-availability agent clusters, why is 'Graceful Degradation with Model Failover' critical?",
    "options": [
      {
        "id": "a",
        "label": "It deletes the database when cloud APIs fail."
      },
      {
        "id": "b",
        "label": "It reboots all user computers."
      },
      {
        "id": "c",
        "label": "It returns 404 Not Found immediately."
      },
      {
        "id": "d",
        "label": "If the primary cloud LLM provider suffers an outage or rate-limit spike, the orchestration layer automatically falls back to secondary cloud providers without dropping user workflows."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_gro_12",
    "section": "growth",
    "prompt": "What is 'Dynamic Batching for Parallel Agent Invocations' in enterprise model gateways?",
    "options": [
      {
        "id": "a",
        "label": "Running batch jobs only once per year."
      },
      {
        "id": "b",
        "label": "Limiting batch sizes to 1 request."
      },
      {
        "id": "c",
        "label": "Grouping independent sub-agent evaluation requests from different users into unified model API batches, optimizing GPU throughput and reducing billing costs."
      },
      {
        "id": "d",
        "label": "Deleting failed batch jobs."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_gro_13",
    "section": "growth",
    "prompt": "How does 'Agentic Golden Regression Testing' in CI/CD prevent deployment regressions?",
    "options": [
      {
        "id": "a",
        "label": "Only checking if code compiles without running tests."
      },
      {
        "id": "b",
        "label": "Executes a suite of 100+ standardized multi-step agent benchmark scenarios on every commit, verifying goal completion rates, tool call counts, and token costs."
      },
      {
        "id": "c",
        "label": "Testing prompts on live production customers directly."
      },
      {
        "id": "d",
        "label": "Skipping testing when deploying to production."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_gro_14",
    "section": "growth",
    "prompt": "What is 'Context Token Budget Partitioning' across a 4-agent team?",
    "options": [
      {
        "id": "a",
        "label": "Allocating fixed token ceilings for Planner (15%), Researcher (40%), Synthesizer (30%), and Auditor (15%) to prevent any single agent from consuming the entire context limit."
      },
      {
        "id": "b",
        "label": "Charging each agent a monthly subscription fee."
      },
      {
        "id": "c",
        "label": "Limiting each agent to 10 words."
      },
      {
        "id": "d",
        "label": "Running all agents on separate cloud accounts."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_gro_15",
    "section": "growth",
    "prompt": "How does 'Semantic Deduplication of Tool Results' accelerate multi-step research agents?",
    "options": [
      {
        "id": "a",
        "label": "Deleting all tool results."
      },
      {
        "id": "b",
        "label": "Translating results to Latin."
      },
      {
        "id": "c",
        "label": "Running tools twice to verify equality."
      },
      {
        "id": "d",
        "label": "Comparing new tool output embeddings against previously observed findings to filter out duplicate facts before appending to the working context."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_gro_16",
    "section": "growth",
    "prompt": "In high-scale agent infrastructure, what role does a 'Circuit Breaker for Flaky External Tools' serve?",
    "options": [
      {
        "id": "a",
        "label": "An electrical breaker on physical server hardware."
      },
      {
        "id": "b",
        "label": "A script that permanently deletes tools from the repository."
      },
      {
        "id": "c",
        "label": "Temporarily trips and marks a failing tool as unavailable when error rates cross 50%, forcing the agent to route around the tool rather than hanging indefinitely."
      },
      {
        "id": "d",
        "label": "A firewall that blocks all outgoing traffic."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_gro_17",
    "section": "growth",
    "prompt": "What is 'A/B Testing of Agent System Prompts' in production?",
    "options": [
      {
        "id": "a",
        "label": "Writing prompt A in uppercase and prompt B in lowercase."
      },
      {
        "id": "b",
        "label": "Splitting live user traffic between Prompt Strategy A (e.g. ReAct) and Strategy B (Plan-and-Solve) to measure statistical differences in task success and latency."
      },
      {
        "id": "c",
        "label": "Testing prompts on alternate months manually."
      },
      {
        "id": "d",
        "label": "Deleting failed prompts from git history."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_gro_18",
    "section": "growth",
    "prompt": "How does 'Fine-Tuning Small Models for Specific Tool Execution' (Function Calling SLMs) reduce operational costs?",
    "options": [
      {
        "id": "a",
        "label": "Replaces expensive frontier models with lightweight 3B/7B parameter models fine-tuned purely on JSON tool argument extraction, slashing latency and inference cost by 90%."
      },
      {
        "id": "b",
        "label": "Reduces model accuracy to 10%."
      },
      {
        "id": "c",
        "label": "Disables all JSON formatting."
      },
      {
        "id": "d",
        "label": "Allows code to run without an interpreter."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_gro_19",
    "section": "growth",
    "prompt": "What is 'State Checkpoint Pruning' in high-volume LangGraph databases?",
    "options": [
      {
        "id": "a",
        "label": "Dropping all database tables every weekend."
      },
      {
        "id": "b",
        "label": "Disabling state checkpointing completely."
      },
      {
        "id": "c",
        "label": "Writing checkpoints to CD-ROMs."
      },
      {
        "id": "d",
        "label": "Archiving or deleting intermediate sub-step state checkpoints for completed threads while retaining the initial input and final result, saving 90% storage space."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_gro_20",
    "section": "growth",
    "prompt": "When monitoring autonomous agents in production, what does 'Hallucinated Tool Call Rate' indicate?",
    "options": [
      {
        "id": "a",
        "label": "The number of tools installed on the server."
      },
      {
        "id": "b",
        "label": "The total execution time of database queries."
      },
      {
        "id": "c",
        "label": "The percentage of tool calls generated by the model where the function name or parameter schema does not exist in the registered tool registry."
      },
      {
        "id": "d",
        "label": "The number of users logged into the platform."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_gro_21",
    "section": "growth",
    "prompt": "How does 'Episodic Memory Compression via Hierarchical Graph Clustering' scale to years of user history?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all memories after 30 days."
      },
      {
        "id": "b",
        "label": "Clusters individual memory nodes into higher-level thematic summary nodes in a knowledge graph, allowing retrieval at varying granularities without linear token bloat."
      },
      {
        "id": "c",
        "label": "Compresses text into zip files."
      },
      {
        "id": "d",
        "label": "Converts text to binary numbers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_gro_22",
    "section": "growth",
    "prompt": "What is 'Distributed Lock Management' (e.g. via Redlock) when multiple agent workers modify shared state?",
    "options": [
      {
        "id": "a",
        "label": "Acquires distributed mutex locks across Redis nodes before mutating shared state keys, preventing concurrent branch race conditions."
      },
      {
        "id": "b",
        "label": "Physical padlocks on server racks."
      },
      {
        "id": "c",
        "label": "Locking user accounts on password entry."
      },
      {
        "id": "d",
        "label": "Disabling multi-threading in Python."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_gro_23",
    "section": "growth",
    "prompt": "How does 'Continuous Tool Performance Benchmarking' identify degraded integrations?",
    "options": [
      {
        "id": "a",
        "label": "Waits for enterprise customers to file support tickets."
      },
      {
        "id": "b",
        "label": "Checks if the server clock is synchronized."
      },
      {
        "id": "c",
        "label": "Restarts the database daily."
      },
      {
        "id": "d",
        "label": "Runs synthetic health check queries against every integrated tool hourly, tracking p95 response times, error rates, and schema drift."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_gro_24",
    "section": "growth",
    "prompt": "What is the primary advantage of 'WebAssembly (Wasm) Tool Sandboxing' over heavy Docker containers for agents?",
    "options": [
      {
        "id": "a",
        "label": "Wasm only works on desktop web browsers."
      },
      {
        "id": "b",
        "label": "Wasm eliminates the need for compiling code."
      },
      {
        "id": "c",
        "label": "Near-instant sub-millisecond cold starts, minimal memory footprint (a few MBs), and strict capability-based isolation for lightweight tool execution."
      },
      {
        "id": "d",
        "label": "Wasm allows tools to run with root admin privileges."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_gro_25",
    "section": "growth",
    "prompt": "How does 'Autonomous Agent Cost Attribution Tagging' enable multi-departmental chargeback?",
    "options": [
      {
        "id": "a",
        "label": "Charges all costs to the engineering team's credit card."
      },
      {
        "id": "b",
        "label": "Attaches metadata tags (`department_id`, `project_code`, `user_tier`) to all downstream model and tool API calls, tracking exact dollar spend per business unit."
      },
      {
        "id": "c",
        "label": "Estimates costs by counting total user keystrokes."
      },
      {
        "id": "d",
        "label": "Disables billing on test environments."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_gro_26",
    "section": "growth",
    "prompt": "What is 'Adaptive Step Limiting' based on task difficulty scoring?",
    "options": [
      {
        "id": "a",
        "label": "Dynamically assigning higher recursion limits (e.g. max 35 steps) for complex analytical queries while capping simple factual queries at 5 steps, optimizing cost."
      },
      {
        "id": "b",
        "label": "Setting all queries to exactly 1 step."
      },
      {
        "id": "c",
        "label": "Terminating queries after 3 seconds."
      },
      {
        "id": "d",
        "label": "Allowing queries to run indefinitely."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_gro_27",
    "section": "growth",
    "prompt": "In production agent observability, what does 'TTFT (Time to First Token)' vs 'TTFTC (Time to First Tool Call)' measure?",
    "options": [
      {
        "id": "a",
        "label": "They are exact identical metrics."
      },
      {
        "id": "b",
        "label": "TTFT measures network bandwidth; TTFTC measures CPU temperature."
      },
      {
        "id": "c",
        "label": "TTFT is only for audio models."
      },
      {
        "id": "d",
        "label": "TTFT measures initial streaming perceived latency for user feedback; TTFTC measures how quickly the agent determines intent and dispatches its first operational tool action."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_gro_28",
    "section": "growth",
    "prompt": "How does 'Semantic Routing with Fast Embeddings' (e.g. ONNX runtime) reduce routing overhead to under 5 milliseconds?",
    "options": [
      {
        "id": "a",
        "label": "Bypasses embedding models entirely by guessing."
      },
      {
        "id": "b",
        "label": "Sends all queries to remote cloud servers in Australia."
      },
      {
        "id": "c",
        "label": "Runs lightweight quantized embedding models locally on CPU via ONNX Runtime to classify intent and route to specialized agent graphs without remote API roundtrips."
      },
      {
        "id": "d",
        "label": "Disables all intent classification."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_gro_29",
    "section": "growth",
    "prompt": "What is 'Self-Healing Prompt Templates' in continuous agent maintenance?",
    "options": [
      {
        "id": "a",
        "label": "Rebooting the server when prompts fail."
      },
      {
        "id": "b",
        "label": "Automatically analyzing recurring tool invocation failure patterns in production logs and proposing refined prompt constraints and tool descriptions via an LLM meta-evaluator."
      },
      {
        "id": "c",
        "label": "Deleting user accounts that generate errors."
      },
      {
        "id": "d",
        "label": "Hiding errors from engineering dashboards."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_gro_30",
    "section": "growth",
    "prompt": "Why is 'Zero-Downtime Agent State Migration' essential during major framework upgrades (e.g. LangGraph v0.1 to v0.2)?",
    "options": [
      {
        "id": "a",
        "label": "Ensures in-flight human-in-the-loop waiting threads and active agent sessions complete seamlessly without corrupting deserialized state checkpoint schemas."
      },
      {
        "id": "b",
        "label": "Allows code to update without testing."
      },
      {
        "id": "c",
        "label": "Deletes all historical user logs."
      },
      {
        "id": "d",
        "label": "Forces all users to re-register on the website."
      }
    ],
    "correctOptionId": "a"
  }
];

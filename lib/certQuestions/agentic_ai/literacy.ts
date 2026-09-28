import { CertQuestion } from '../types';

export const AGENTIC_AI_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "agentic_lit_01",
    "section": "literacy",
    "prompt": "In modern agentic architectures, what distinguishes an 'Agentic Workflow' from standard single-turn zero-shot prompting?",
    "options": [
      {
        "id": "a",
        "label": "Agentic workflows operate exclusively on local offline CPUs without GPU acceleration."
      },
      {
        "id": "b",
        "label": "Agentic workflows incorporate iterative reasoning loops, environment state observation, dynamic tool execution, and self-correction before returning a final response."
      },
      {
        "id": "c",
        "label": "Agentic workflows automatically translate all user prompts into SQL database schemas."
      },
      {
        "id": "d",
        "label": "Agentic workflows require users to submit prompts in compiled binary format."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_lit_02",
    "section": "literacy",
    "prompt": "What is the core operational principle of the 'ReAct' (Reasoning + Acting) pattern in LLM agent design?",
    "options": [
      {
        "id": "a",
        "label": "Interleaving explicit natural language 'Thought' reasoning steps with structured 'Action' tool calls and 'Observation' feedback parsing in a continuous cycle."
      },
      {
        "id": "b",
        "label": "Compiling Python agent code into React JavaScript frontend components."
      },
      {
        "id": "c",
        "label": "Executing all tool actions simultaneously without planning or reasoning steps."
      },
      {
        "id": "d",
        "label": "Retrying failed API calls exactly 50 times in an infinite loop."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_lit_03",
    "section": "literacy",
    "prompt": "In stateful agent frameworks like LangGraph, how does state checkpointing enable resilient enterprise agent execution?",
    "options": [
      {
        "id": "a",
        "label": "Deletes the conversation history from memory after every 5 seconds."
      },
      {
        "id": "b",
        "label": "Encrypts all server hard drives with asymmetric keys."
      },
      {
        "id": "c",
        "label": "Converts agent memory tensors into audio WAV files."
      },
      {
        "id": "d",
        "label": "Persists graph state snapshots after each node execution, enabling human-in-the-loop pause/resume, time-travel debugging, and fault-tolerant crash recovery."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_lit_04",
    "section": "literacy",
    "prompt": "What is the fundamental difference between 'Episodic Memory' and 'Semantic Memory' in autonomous AI agents?",
    "options": [
      {
        "id": "a",
        "label": "Episodic memory stores audio recordings; semantic memory stores image pixels."
      },
      {
        "id": "b",
        "label": "Semantic memory is temporary; episodic memory is permanently stored on disk."
      },
      {
        "id": "c",
        "label": "Episodic memory tracks the chronological sequence of past user interactions and session experiences, while semantic memory stores generalized facts, domain concepts, and distilled knowledge."
      },
      {
        "id": "d",
        "label": "There is no difference; they are interchangeable terms."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_lit_05",
    "section": "literacy",
    "prompt": "How does the 'Plan-and-Solve' (or Plan-and-Execute) agent pattern improve accuracy over raw ReAct on complex multi-hop tasks?",
    "options": [
      {
        "id": "a",
        "label": "Bypasses all tool calling mechanisms completely."
      },
      {
        "id": "b",
        "label": "Separates high-level multi-step task decomposition (Planner) from focused subtask execution (Solver/Worker), reducing drift and premature tool execution."
      },
      {
        "id": "c",
        "label": "Forces all subtasks to execute in under 100 milliseconds."
      },
      {
        "id": "d",
        "label": "Deletes failed plan steps without recording the error."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_lit_06",
    "section": "literacy",
    "prompt": "What is 'Self-Reflection / Reflexion' in agentic decision architectures?",
    "options": [
      {
        "id": "a",
        "label": "An agent architecture where the model evaluates its own trajectory, diagnoses mistakes against task constraints, and commits verbal critique to working memory to guide subsequent retries."
      },
      {
        "id": "b",
        "label": "Inverting the user interface colors during nighttime hours."
      },
      {
        "id": "c",
        "label": "Streaming video frames from the user webcam."
      },
      {
        "id": "d",
        "label": "Checking whether the Python interpreter matches the host OS architecture."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_lit_07",
    "section": "literacy",
    "prompt": "When designing multi-agent systems with CrewAI or AutoGen, what is the role of 'Hierarchical Orchestration' (Manager-Worker pattern)?",
    "options": [
      {
        "id": "a",
        "label": "Running all agents on a single CPU thread without network sockets."
      },
      {
        "id": "b",
        "label": "Preventing agents from executing API calls."
      },
      {
        "id": "c",
        "label": "Sorting agent names alphabetically before starting the workflow."
      },
      {
        "id": "d",
        "label": "Assigning a manager agent to review incoming goals, delegate discrete tasks to specialized subordinate agents based on capability, and validate intermediate outputs before final synthesis."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_lit_08",
    "section": "literacy",
    "prompt": "What is 'Tool Definition Conditioning' in OpenAI and Anthropic tool calling protocols?",
    "options": [
      {
        "id": "a",
        "label": "Cooling server graphics cards before running inference."
      },
      {
        "id": "b",
        "label": "Requiring developers to write tools exclusively in C++."
      },
      {
        "id": "c",
        "label": "Providing JSON schemas with precise parameter types, descriptions, and enum constraints that guide the model to output valid function arguments matching the environment API."
      },
      {
        "id": "d",
        "label": "Limiting the agent to exactly 1 tool per lifetime."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_lit_09",
    "section": "literacy",
    "prompt": "Why is 'Context Pruning / Message Window Truncation' essential in long-running agent workflows?",
    "options": [
      {
        "id": "a",
        "label": "Because agents will run out of hard drive space within 10 minutes."
      },
      {
        "id": "b",
        "label": "To avoid exceeding maximum context window token limits, reduce inference latency, and eliminate obsolete intermediate tool logs that cause semantic distraction."
      },
      {
        "id": "c",
        "label": "To delete the root system prompt after the first turn."
      },
      {
        "id": "d",
        "label": "Because cloud providers charge double for conversations with more than 10 messages."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_lit_10",
    "section": "literacy",
    "prompt": "What is a 'Human-in-the-Loop (HITL) Interrupt' in LangGraph agent workflows?",
    "options": [
      {
        "id": "a",
        "label": "A critical break condition where the agent pauses execution before a high-consequence action (e.g. database write or payment), awaiting explicit human review and approval."
      },
      {
        "id": "b",
        "label": "An error thrown when a user closes their web browser tab."
      },
      {
        "id": "c",
        "label": "A mechanism that forces the human to re-type the prompt every 30 seconds."
      },
      {
        "id": "d",
        "label": "A hardware disconnect of the server Ethernet cable."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_lit_11",
    "section": "literacy",
    "prompt": "What is 'Task Hallucination' in autonomous multi-agent execution, and how is it detected?",
    "options": [
      {
        "id": "a",
        "label": "When the server monitor display turns purple."
      },
      {
        "id": "b",
        "label": "When an agent executes code 100x faster than expected."
      },
      {
        "id": "c",
        "label": "When a user types a prompt in all capital letters."
      },
      {
        "id": "d",
        "label": "When an agent claims it successfully executed an external API tool when it actually failed or hallucinated the tool response; detected by validating tool execution logs against actual API telemetry."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_lit_12",
    "section": "literacy",
    "prompt": "In LangChain / LangGraph, what does a 'Conditional Edge' determine in an agent state graph?",
    "options": [
      {
        "id": "a",
        "label": "The physical wire length between server racks."
      },
      {
        "id": "b",
        "label": "The CSS border color of agent chat widgets."
      },
      {
        "id": "c",
        "label": "A dynamic routing function that inspects the current state (e.g., whether a tool call is present or an error occurred) and routes to the next appropriate node."
      },
      {
        "id": "d",
        "label": "The database password expiration policy."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_lit_13",
    "section": "literacy",
    "prompt": "What is 'Dynamic Few-Shot Tool Selection' in scalable agent frameworks?",
    "options": [
      {
        "id": "a",
        "label": "Testing tools on exactly three test users before production."
      },
      {
        "id": "b",
        "label": "Retrieving only the top-K relevant tool definitions and demonstration examples via vector similarity to fit within the prompt token budget when hundreds of enterprise tools exist."
      },
      {
        "id": "c",
        "label": "Restricting agents to executing tools only on weekends."
      },
      {
        "id": "d",
        "label": "Executing all available tools 3 times sequentially."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_lit_14",
    "section": "literacy",
    "prompt": "How does 'LLM-Compiler' optimize multi-tool execution in agent systems?",
    "options": [
      {
        "id": "a",
        "label": "Identifies independent tool calls in a generated multi-step plan and executes them in parallel asynchronous batches while respecting dependency graphs."
      },
      {
        "id": "b",
        "label": "Translates Python prompts to x86 binary code."
      },
      {
        "id": "c",
        "label": "Deletes all tools that take longer than 1 second to execute."
      },
      {
        "id": "d",
        "label": "Compresses JSON strings into gzip files."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_lit_15",
    "section": "literacy",
    "prompt": "What is the purpose of 'Working Memory Scratchpads' in iterative agent reasoning?",
    "options": [
      {
        "id": "a",
        "label": "A physical notepad mailed to enterprise clients."
      },
      {
        "id": "b",
        "label": "A temporary swap file that overrides the operating system page table."
      },
      {
        "id": "c",
        "label": "A cache that stores user credit card numbers in plaintext."
      },
      {
        "id": "d",
        "label": "An isolated temporary text buffer where the agent logs intermediate calculations, API payloads, and hypotheses before synthesizing a final answer."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_lit_16",
    "section": "literacy",
    "prompt": "When building an agent with 'Goal Drift Prevention', which architecture ensures long-horizon task completion?",
    "options": [
      {
        "id": "a",
        "label": "Deleting the goal after the first tool execution."
      },
      {
        "id": "b",
        "label": "Running the agent with temperature set to 2.0."
      },
      {
        "id": "c",
        "label": "Maintaining an immutable root 'Objective' node in the state graph and prepending goal verification assertions at every evaluation checkpoint."
      },
      {
        "id": "d",
        "label": "Preventing the agent from executing more than 2 steps."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_lit_17",
    "section": "literacy",
    "prompt": "In multi-agent systems, what is the 'Bystander Effect / Infinite Delegation Loop' failure mode?",
    "options": [
      {
        "id": "a",
        "label": "When human users watch the agent screen without typing."
      },
      {
        "id": "b",
        "label": "When two or more specialized agents repeatedly delegate the same subtask to each other without either executing the required work, exhausting token budgets."
      },
      {
        "id": "c",
        "label": "When the network router loses electrical power."
      },
      {
        "id": "d",
        "label": "When the database rejects incoming connections."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_lit_18",
    "section": "literacy",
    "prompt": "How does 'Structured Output Enforcement' (e.g. via Instructor or Pydantic) prevent agent tool execution crashes?",
    "options": [
      {
        "id": "a",
        "label": "Guarantees that the LLM response strictly validates against defined Pydantic types, auto-retrying on validation failure before sending arguments to the tool function."
      },
      {
        "id": "b",
        "label": "Converts all outputs into HTML tables."
      },
      {
        "id": "c",
        "label": "Forces all tool parameters to be single integer values."
      },
      {
        "id": "d",
        "label": "Removes all error logs from server storage."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_lit_19",
    "section": "literacy",
    "prompt": "What is 'Episodic Memory Retrieval via Recency, Importance, and Relevance' (Generative Agents architecture)?",
    "options": [
      {
        "id": "a",
        "label": "Sorting memory files alphabetically on the local hard drive."
      },
      {
        "id": "b",
        "label": "Deleting all memories older than 1 hour."
      },
      {
        "id": "c",
        "label": "Reading the entire database into context on every turn."
      },
      {
        "id": "d",
        "label": "A memory retrieval scoring function that ranks past memory memories by combining exponential decay recency, LLM-rated importance score, and cosine vector similarity."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_lit_20",
    "section": "literacy",
    "prompt": "What is the primary benefit of 'Multi-Agent Debate' (MAD) in complex analytical decision-making?",
    "options": [
      {
        "id": "a",
        "label": "Slows down execution to reduce cloud server costs."
      },
      {
        "id": "b",
        "label": "Eliminates the need for any training data."
      },
      {
        "id": "c",
        "label": "Allows two opposing agent personas to critique each other's reasoning and challenge factual hallucinations, yielding higher consensus accuracy on difficult tasks."
      },
      {
        "id": "d",
        "label": "Turns agent responses into audio debates."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_lit_21",
    "section": "literacy",
    "prompt": "In LangGraph, what is the role of the `END` special node in a graph definition?",
    "options": [
      {
        "id": "a",
        "label": "Reboots the entire host machine."
      },
      {
        "id": "b",
        "label": "Terminates the graph execution flow and returns the current accumulated state to the caller."
      },
      {
        "id": "c",
        "label": "Deletes all temporary files in the system."
      },
      {
        "id": "d",
        "label": "Sends an email alert to the administrator."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_lit_22",
    "section": "literacy",
    "prompt": "What is 'Tool Argument Hallucination' in agentic workflows?",
    "options": [
      {
        "id": "a",
        "label": "When the agent invents non-existent argument values (e.g. a fake ID or invalid enum) not provided in context, causing API 400 Bad Request errors."
      },
      {
        "id": "b",
        "label": "When an API returns valid data too quickly."
      },
      {
        "id": "c",
        "label": "When the developer changes variable names."
      },
      {
        "id": "d",
        "label": "When the model outputs text in lowercase."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_lit_23",
    "section": "literacy",
    "prompt": "How does 'GraphRAG' augment traditional vector search for complex multi-agent analysis?",
    "options": [
      {
        "id": "a",
        "label": "Draws 2D pie charts of search results."
      },
      {
        "id": "b",
        "label": "Limits search to a single Wikipedia page."
      },
      {
        "id": "c",
        "label": "Replaces text documents with image thumbnails."
      },
      {
        "id": "d",
        "label": "Builds a knowledge graph of entities and relationships from source documents, enabling agents to navigate cross-document connections and global themes."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_lit_24",
    "section": "literacy",
    "prompt": "What is 'Sub-Agent Sandboxing' in secure multi-agent systems?",
    "options": [
      {
        "id": "a",
        "label": "Running agents exclusively on physical children's tablets."
      },
      {
        "id": "b",
        "label": "Placing server hardware in sand containers."
      },
      {
        "id": "c",
        "label": "Restricting subordinate agents to specific scoped tools, limited memory partitions, and strict execution timeouts to prevent lateral privilege escalation."
      },
      {
        "id": "d",
        "label": "Deleting agent log files immediately."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_lit_25",
    "section": "literacy",
    "prompt": "In tool calling protocols, what does `tool_choice: 'auto'` vs `tool_choice: 'required'` specify?",
    "options": [
      {
        "id": "a",
        "label": "'auto' calls all tools simultaneously; 'required' disables tools."
      },
      {
        "id": "b",
        "label": "'auto' lets the model decide whether to call a tool or reply with text; 'required' forces the model to call at least one tool before generating a final answer."
      },
      {
        "id": "c",
        "label": "'required' requires human credit card verification."
      },
      {
        "id": "d",
        "label": "There is no difference in model behavior."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_lit_26",
    "section": "literacy",
    "prompt": "What is 'State Reducer Pattern' when updating shared memory across parallel agent branches?",
    "options": [
      {
        "id": "a",
        "label": "A function that merges concurrent branch updates into a unified state (e.g. appending new messages) without race conditions or data loss."
      },
      {
        "id": "b",
        "label": "A function that shrinks image resolutions."
      },
      {
        "id": "c",
        "label": "A script that reduces server RAM allocation."
      },
      {
        "id": "d",
        "label": "A database query that deletes 50% of records."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_lit_27",
    "section": "literacy",
    "prompt": "How does 'Tree of Thoughts' (ToT) prompting enhance agent problem-solving capabilities?",
    "options": [
      {
        "id": "a",
        "label": "Generates botanical descriptions of forest ecosystems."
      },
      {
        "id": "b",
        "label": "Forces all reasoning steps into a single line of text."
      },
      {
        "id": "c",
        "label": "Disables all branching logic in code."
      },
      {
        "id": "d",
        "label": "Allows an agent to explore multiple reasoning paths concurrently, evaluate intermediate progress using heuristic evaluations, and backtrack when dead ends are detected."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_lit_28",
    "section": "literacy",
    "prompt": "What is the primary indicator of 'Context Pollution' in multi-step agent debugging?",
    "options": [
      {
        "id": "a",
        "label": "High network bandwidth usage on the client browser."
      },
      {
        "id": "b",
        "label": "The server room air filter requires replacement."
      },
      {
        "id": "c",
        "label": "Degraded instruction compliance and repeated hallucinations caused by accumulating thousands of tokens of verbose raw tool outputs in working memory."
      },
      {
        "id": "d",
        "label": "The database table names are printed in uppercase."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_lit_29",
    "section": "literacy",
    "prompt": "What is 'Agentic Evaluation via Trajectory Alignment' in automated benchmarking?",
    "options": [
      {
        "id": "a",
        "label": "Tracking the physical motion of computer mice."
      },
      {
        "id": "b",
        "label": "Comparing the agent's actual sequence of tool calls and intermediate states against optimal ground-truth trajectories to measure efficiency and safety."
      },
      {
        "id": "c",
        "label": "Measuring the flight path of satellites."
      },
      {
        "id": "d",
        "label": "Checking whether the Python script has more than 100 lines."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_lit_30",
    "section": "literacy",
    "prompt": "Why is 'Deterministic Tool Execution with Idempotency' crucial for resilient autonomous agents?",
    "options": [
      {
        "id": "a",
        "label": "Ensures that if an agent retries a failed step, the tool call does not execute duplicate side effects (e.g. charging a customer card twice)."
      },
      {
        "id": "b",
        "label": "Forces tools to return identical random numbers."
      },
      {
        "id": "c",
        "label": "Disables network retry logic."
      },
      {
        "id": "d",
        "label": "Makes all API requests run in under 1 microsecond."
      }
    ],
    "correctOptionId": "a"
  }
];

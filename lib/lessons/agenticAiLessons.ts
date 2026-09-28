import type { Lesson } from '../lessonsData';

export const AGENTIC_AI_LESSONS: Lesson[] = [
  // -------------------------------------------------------------
  // Lesson 55: ReAct Loops & Autonomous Cognitive Architectures
  // -------------------------------------------------------------
  {
    id: 'lesson-55',
    slug: 'react-loops-and-cognitive-architectures',
    title: 'ReAct Loops & Autonomous Cognitive Architectures',
    description: 'Master the Reasoning + Acting (ReAct) cycle, Plan-and-Solve architectures, scratchpad memory maintenance, and deterministic loop breakout conditions.',
    category: 'Agentic AI & RAG',
    categoryKey: 'agentic',
    readTime: '8 min read',
    lessonNumber: 55,
    difficulty: 'Advanced',
    keyTakeaways: [
      'The ReAct pattern interleaves Thought (reasoning), Action (tool call), and Observation (environment feedback) until a definitive Final Answer is synthesized',
      'Unconstrained agent loops risk infinite recursion; production agents mandate max-iteration caps, timeout limits, and error backoff hooks',
      'Plan-and-Solve decomposes complex, non-linear enterprise goals into DAG sub-tasks before executing individual tool actions',
      'Scratchpad memory holds intermediate reasoning states without polluting the permanent conversation context window',
    ],
    tools: ['LangChain / LangGraph', 'OpenAI Tool Calling', 'Claude Tool Use', 'Python 3.12+'],
    relatedCertifications: ['Agentic AI Engineer', 'AI Systems Builder'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Basic Python & LLM API understanding'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Autonomous AI agents differ fundamentally from static chatbots: they actively interrogate external environments, invoke APIs, observe real outputs, self-correct after failures, and iterate until reaching a goal.',
      core: `### The ReAct Execution Loop in Python

The canonical ReAct pattern follows a strict state transition:
\`\`\`python
from typing import TypedDict, Annotated, Sequence
import operator

class AgentState(TypedDict):
    task: str
    scratchpad: list[str]
    iteration: int
    max_iterations: int
    is_complete: bool
    final_answer: str | None

def react_cycle(state: AgentState, llm, tools_map) -> AgentState:
    if state["iteration"] >= state["max_iterations"]:
        state["is_complete"] = True
        state["final_answer"] = "Error: Maximum iteration limit reached without convergence."
        return state

    # 1. Thought step: LLM analyzes history & decides next tool
    prompt = f"Goal: {state['task']}\\nScratchpad:\\n" + "\\n".join(state["scratchpad"])
    response = llm.invoke(prompt)
    
    if "FINAL ANSWER:" in response.content:
        state["final_answer"] = response.content.split("FINAL ANSWER:")[1].strip()
        state["is_complete"] = True
        return state
        
    # 2. Action step: Parse tool name and arguments
    tool_name, tool_args = parse_action(response.content)
    
    # 3. Observation step: Execute tool in sandbox
    tool_fn = tools_map.get(tool_name)
    observation = tool_fn(**tool_args) if tool_fn else f"Error: Tool {tool_name} not found."
    
    state["scratchpad"].append(f"Thought: {response.content}")
    state["scratchpad"].append(f"Observation: {observation}")
    state["iteration"] += 1
    return state
\`\`\`

---

### Key Anti-Patterns in Agent Design
1. **Unbounded Recursion:** Never launch an agent without hard iteration caps (\`max_iterations=8\`) and token budgets.
2. **Missing Observation Validation:** Always validate tool outputs against Pydantic schemas before feeding them back into the scratchpad.
3. **No Breakout Signal:** Always provide explicit guidance in the system prompt on when to terminate the loop.`,
      tryThis: `Define a ReAct system prompt that requires the model to format its reasoning as:
Thought: <step analysis>
Action: <tool_name>[<json_args>]
Observation: <environment result>
Final Answer: <terminal output>
Test it with a multi-step currency conversion and tax calculation query!`,
    },
    quiz: [
      {
        question: 'What is the primary purpose of the "Observation" step in a ReAct loop?',
        options: [
          'To generate markdown styling for user frontend display.',
          'To capture the external tool output and feed it back into the model context for next-step evaluation.',
          'To compile Python code into bytecode for GPU execution.',
          'To permanently delete conversation logs for privacy.',
        ],
        correctIndex: 1,
        explanation: 'The Observation step ingests the real-world output of the invoked tool so the model can evaluate whether the action succeeded or requires correction.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 56: LangGraph State Graphs & Checkpointing
  // -------------------------------------------------------------
  {
    id: 'lesson-56',
    slug: 'langgraph-state-graphs-and-checkpoints',
    title: 'LangGraph State Graphs, Conditional Edges & Time-Travel Checkpoints',
    description: 'Construct resilient multi-actor workflows with LangGraph: state reducers, branching conditional edges, human-in-the-loop approvals, and SQLite/Postgres checkpointing.',
    category: 'Agentic AI & RAG',
    categoryKey: 'agentic',
    readTime: '9 min read',
    lessonNumber: 56,
    difficulty: 'Advanced',
    keyTakeaways: [
      'LangGraph models agent workflows as cyclical state graphs where nodes represent functions and edges represent control flow decisions',
      'Annotated state reducers (e.g., \`operator.add\`) govern how concurrent node executions append messages without race conditions',
      'Checkpointers persist complete state graphs at each step, enabling human-in-the-loop approvals and time-travel rollbacks',
      'Conditional edges route execution dynamically based on message contents, tool calls, or validation flags',
    ],
    tools: ['LangGraph', 'LangChain Core', 'PostgreSQL / SQLite', 'Python 3.12+'],
    relatedCertifications: ['Agentic AI Engineer', 'AI Practitioner'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 55: ReAct Loops'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'State machines bring deterministic reliability to probabilistic AI models. LangGraph allows developers to coordinate complex agent graphs with cyclical loops, conditional forks, and stateful checkpoint persistence.',
      core: `### Building a Stateful LangGraph Workflow

\`\`\`python
from typing import Annotated, TypedDict
import operator
from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.memory import MemorySaver

class GraphState(TypedDict):
    messages: Annotated[list[str], operator.add]
    research_summary: str
    approved_by_human: bool

def research_node(state: GraphState):
    query = state["messages"][-1]
    return {
        "messages": [f"Researched: {query}"],
        "research_summary": f"Synthesis of {query} findings with high confidence."
    }

def human_approval_node(state: GraphState):
    # Pauses graph execution for human verification
    return {"messages": ["Awaiting senior engineer review..."]}

def router_edge(state: GraphState) -> str:
    if state.get("approved_by_human"):
        return "publish_node"
    return "human_approval_node"

builder = StateGraph(GraphState)
builder.add_node("research", research_node)
builder.add_node("human_approval", human_approval_node)
builder.add_edge(START, "research")
builder.add_conditional_edges("research", router_edge, {
    "publish_node": END,
    "human_approval_node": "human_approval"
})

# Compile with state persistence checkpointer
checkpointer = MemorySaver()
graph = builder.compile(checkpointer=checkpointer)
\`\`\`

---

### Time-Travel Debugging & State Forking
Because every step is check-pointed with a unique \`thread_id\`, developers can:
1. Rewind to previous checkpoints before a hallucination occurred.
2. Edit state variables (e.g., correcting an invalid tool output).
3. Resume execution down a new branch.`,
      tryThis: `Create a 3-node LangGraph that:
1. Ingests a customer complaint.
2. Drafts a refund decision.
3. If the refund amount exceeds $100, routes to a Human Review node before finalization!`,
    },
    quiz: [
      {
        question: 'Why are state reducers (like operator.add) used in LangGraph message fields?',
        options: [
          'To calculate mathematical sum totals for invoices automatically.',
          'To cleanly append new node outputs into the state array without overwriting existing conversation history.',
          'To compress context memory using gzip encryption.',
          'To prevent users from sending messages exceeding 100 tokens.',
        ],
        correctIndex: 1,
        explanation: 'Reducers specify how updates from graph nodes are combined with existing state, allowing messages to accumulate systematically across turns.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 57: Model Context Protocol (MCP) Architecture
  // -------------------------------------------------------------
  {
    id: 'lesson-57',
    slug: 'model-context-protocol-mcp-architecture',
    title: 'Model Context Protocol (MCP): Building Secure Tool & Resource Servers',
    description: 'Learn the open standard for connecting AI assistants to local databases, file systems, and enterprise APIs using JSON-RPC, tools, resources, and prompts.',
    category: 'Agentic AI & RAG',
    categoryKey: 'agentic',
    readTime: '7 min read',
    lessonNumber: 57,
    difficulty: 'Advanced',
    keyTakeaways: [
      'MCP standardizes how LLM clients discover and invoke external tools, fetch context resources, and execute pre-configured prompt templates',
      'The protocol runs over JSON-RPC 2.0 via standard input/output (stdio) for local tools or Server-Sent Events (SSE) for remote servers',
      'MCP separates capabilities into three primitives: Resources (static context/files), Tools (executable actions), and Prompts (reusable templates)',
      'Security boundaries require strict scoping of file paths, read-only permissions, and human approval prompts for write/delete tools',
    ],
    tools: ['Model Context Protocol (MCP SDK)', 'TypeScript / Python', 'JSON-RPC 2.0'],
    relatedCertifications: ['Agentic AI Engineer', 'Python AI Developer'],
    estimatedPracticeTime: '20 mins',
    prerequisites: ['Lesson 55: ReAct Loops'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Instead of writing bespoke, proprietary tool integrations for every LLM provider, Anthropic open-sourced the Model Context Protocol (MCP)—the universal USB-C standard for AI applications to connect with databases, git repos, and internal systems.',
      core: `### Building an MCP Server in Python

\`\`\`python
from mcp.server.fastmcp import FastMCP
import sqlite3

# Initialize MCP Server
mcp = FastMCP("Enterprise Inventory Server")

@mcp.resource("inventory://metrics")
def get_inventory_metrics() -> str:
    """Provides read-only inventory metrics for context grounding."""
    return "Total SKUs: 14,200 | Out of stock: 12 | Warehouse load: 88%"

@mcp.tool()
def search_product(sku: str) -> dict:
    """Look up product details and warehouse bin location by SKU."""
    # Strict validation prevents SQL injection
    if not sku.isalnum() or len(sku) > 12:
        return {"error": "Invalid SKU format"}
        
    return {
        "sku": sku,
        "name": "Industrial Sensor Model X",
        "quantity_available": 450,
        "warehouse_bin": "Zone-B-14",
        "unit_price_usd": 129.99
    }

if __name__ == "__main__":
    mcp.run(transport="stdio")
\`\`\`

---

### Transport Protocols: Stdio vs SSE
- **Stdio (Standard I/O):** Ideal for local development environments, desktop agents (e.g. IDE extensions), and containerized CLI tools.
- **SSE (Server-Sent Events) over HTTP:** Required for centralized enterprise microservices, multi-tenant agent platforms, and cloud deployments.`,
      tryThis: `Write a simple FastMCP tool in Python that accepts a database table name and returns column names and row counts in JSON format with strict input sanitization!`,
    },
    quiz: [
      {
        question: 'Which protocol message standard does the Model Context Protocol (MCP) utilize for client-server communication?',
        options: [
          'SOAP XML 1.2 with WS-Security headers.',
          'JSON-RPC 2.0 over standard I/O (stdio) or Server-Sent Events (SSE).',
          'GraphQL mutations over WebSocket.',
          'Raw UDP binary datagrams.',
        ],
        correctIndex: 1,
        explanation: 'MCP is built on top of lightweight JSON-RPC 2.0 transport, enabling seamless bi-directional messaging over stdio or SSE.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 58: Vector Databases & Hybrid Search (Dense + BM25)
  // -------------------------------------------------------------
  {
    id: 'lesson-58',
    slug: 'vector-databases-and-hybrid-search-rrf',
    title: 'Vector Databases & Hybrid Search (Dense + BM25 with RRF)',
    description: 'Implement enterprise-grade search combining dense semantic embeddings with sparse keyword inverted indices using Reciprocal Rank Fusion (RRF).',
    category: 'Agentic AI & RAG',
    categoryKey: 'agentic',
    readTime: '9 min read',
    lessonNumber: 58,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Dense vector search excels at conceptual matching but frequently fails on exact serial numbers, product SKUs, and acronyms',
      'Sparse keyword search (BM25) guarantees exact token matching but misses synonyms and paraphrase nuances',
      'Hybrid search combines Dense + BM25 candidate lists using Reciprocal Rank Fusion (RRF) to produce superior retrieval rankings',
      'Vector index structures (HNSW vs IVFFlat) balance query latency (QPS), recall accuracy, and memory consumption',
    ],
    tools: ['Qdrant / Pinecone / Milvus', 'BM25 (rank_bm25)', 'FastEmbed / OpenAI Embeddings'],
    relatedCertifications: ['RAG Architect', 'AI Systems Builder'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Basic vector embeddings knowledge'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Pure vector search is often insufficient for production enterprise RAG. When a user searches for "Error code ERR-8042 in Kafka connector", semantic embeddings might match general networking articles while missing the exact error documentation. Hybrid search solves this permanently.',
      core: `### Reciprocal Rank Fusion (RRF) Algorithm in Python

RRF combines two ranked lists without requiring score normalization:
\`\`\`python
def reciprocal_rank_fusion(
    dense_results: list[dict], 
    bm25_results: list[dict], 
    k: int = 60
) -> list[dict]:
    """
    RRF Score = sum(1 / (k + rank_i)) for each retriever list.
    k=60 is the standard constant established in information retrieval research.
    """
    rrf_scores: dict[str, float] = {}
    doc_lookup: dict[str, dict] = {}

    # Score dense ranks
    for rank, doc in enumerate(dense_results, start=1):
        doc_id = doc["id"]
        doc_lookup[doc_id] = doc
        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0.0) + (1.0 / (k + rank))

    # Score BM25 ranks
    for rank, doc in enumerate(bm25_results, start=1):
        doc_id = doc["id"]
        doc_lookup[doc_id] = doc
        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0.0) + (1.0 / (k + rank))

    # Sort combined results descending by RRF score
    sorted_doc_ids = sorted(rrf_scores.keys(), key=lambda did: rrf_scores[did], reverse=True)
    
    return [
        {**doc_lookup[did], "rrf_score": round(rrf_scores[did], 5)}
        for did in sorted_doc_ids
    ]
\`\`\`

---

### HNSW vs IVFFlat Indexing
- **HNSW (Hierarchical Navigable Small World):** Graph-based index offering ultra-low search latency and ~98%+ recall, at the cost of higher RAM usage.
- **IVFFlat (Inverted File Flat):** Cluster-based partition index with lower memory footprint, suitable for multi-million vector datasets with fast build times.`,
      tryThis: `Simulate 5 search results from a dense vector model and 5 results from BM25 with 2 overlapping documents. Run them through the RRF function with k=60 to see how overlapping documents rise to the top!`,
    },
    quiz: [
      {
        question: 'What primary problem does Reciprocal Rank Fusion (RRF) solve in hybrid search architectures?',
        options: [
          'It translates SQL queries into vector embeddings automatically.',
          'It merges ranked lists from disparate retrieval algorithms (Dense + Sparse) without requiring delicate score calibration or scale normalization.',
          'It compresses dense vectors from 1536 dimensions down to 32 dimensions.',
          'It encrypts vector indices at rest on disk.',
        ],
        correctIndex: 1,
        explanation: 'Dense similarity (cosine 0-1) and BM25 scores (unbounded 0-100+) operate on different scales. RRF uses position rankings (1st, 2nd, 3rd) rather than raw scores to merge results objectively.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 59: Semantic Chunking & Cross-Encoder Rerankers
  // -------------------------------------------------------------
  {
    id: 'lesson-59',
    slug: 'semantic-chunking-and-cross-encoder-rerankers',
    title: 'Semantic Chunking & Cross-Encoder Rerankers',
    description: 'Eliminate chunk fragmentation and boost RAG precision using semantic distance splitting, parent-child document retrieval, and Cross-Encoder reranking.',
    category: 'Agentic AI & RAG',
    categoryKey: 'agentic',
    readTime: '8 min read',
    lessonNumber: 59,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Fixed-size character chunking splits paragraphs mid-thought, severing context and reducing embedding quality',
      'Semantic chunking measures embedding similarity between consecutive sentences, creating split points only when topic shifts occur',
      'Bi-Encoder models are fast for retrieving top-100 candidates; Cross-Encoder models perform full joint attention to rerank the top-5 chunks with extreme precision',
      'Parent-Child retrieval indexes small sub-chunks for accurate vector matching but feeds the full parent section to the LLM',
    ],
    tools: ['Cohere Rerank', 'BGE-Reranker-Large', 'SentenceTransformers', 'LangChain TextSplitters'],
    relatedCertifications: ['RAG Architect', 'AI Practitioner'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Lesson 58: Vector Databases'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'The quality of any RAG pipeline is bottlenecked by the accuracy of retrieved context. Feeding irrelevant or fragmented chunks forces the generator to hallucinate. Two techniques dramatically improve context quality: semantic chunking and Cross-Encoder reranking.',
      core: `### Deploying a Cross-Encoder Reranker

Bi-encoders encode query and passage separately ($q \\cdot p$), missing nuanced cross-token relationships. Cross-encoders process $(q, p)$ simultaneously with full transformer self-attention:

\`\`\`python
from sentence_transformers import CrossEncoder

# Load specialized enterprise reranker
reranker = CrossEncoder('BAAI/bge-reranker-large')

query = "What is the policy for secondary data retention on AWS S3?"
candidate_chunks = [
    "AWS S3 bucket versioning preserves historical file revisions.",
    "Secondary data archives must be permanently purged after 90 days per compliance policy SEC-402.",
    "Data transmission over TLS 1.3 is enforced for all REST endpoints.",
    "Customer billing invoices are retained for 7 years in cold Glacier storage."
]

# Pair query with each candidate chunk
query_passage_pairs = [[query, chunk] for chunk in candidate_chunks]

# Compute precise relevance scores
scores = reranker.predict(query_passage_pairs)

# Rank descending
ranked_results = sorted(
    zip(candidate_chunks, scores), 
    key=lambda x: x[1], 
    reverse=True
)

for rank, (chunk, score) in enumerate(ranked_results, 1):
    print(f"Rank {rank} (Score: {score:.4f}): {chunk}")
\`\`\`

---

### Parent-Child Document Indexing
To solve the trade-off between search precision and synthesis context:
1. Break a 2,000-word document into small 100-word child chunks.
2. Vectorize and index child chunks with a pointer metadata tag: \`parent_id\`.
3. When a child chunk is retrieved, fetch the complete 2,000-word parent document to supply to the LLM prompt.`,
      tryThis: `Inspect a 5-page enterprise PDF. Test splitting it with standard 500-char fixed splitting vs recursive markdown header splitting, and observe how tables and headers stay intact!`,
    },
    quiz: [
      {
        question: 'Why is a Cross-Encoder reranker typically used ONLY on the top 20-50 candidates rather than the entire million-vector database?',
        options: [
          'Cross-Encoders cannot read English text accurately.',
          'Cross-Encoders perform full $O(N^2)$ joint self-attention across the query and passage together, which is computationally too slow for millions of items but highly accurate for top candidates.',
          'Cross-Encoders require GPU cluster clusters with over 1 TB VRAM for a single request.',
          'Vector databases do not support REST APIs.',
        ],
        correctIndex: 1,
        explanation: 'Cross-Encoders evaluate full joint cross-attention for every query-passage pair. This computational intensity delivers peak accuracy but makes it suitable only for reranking a pre-filtered candidate pool.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 60: Knowledge Graph RAG (GraphRAG)
  // -------------------------------------------------------------
  {
    id: 'lesson-60',
    slug: 'knowledge-graph-rag-graphrag-hybrid-querying',
    title: 'Knowledge Graph RAG (GraphRAG) & Multi-Hop Entity Reasoning',
    description: 'Extract entities and relations, construct property knowledge graphs in Neo4j, and execute multi-hop reasoning queries that traditional vector search cannot answer.',
    category: 'Agentic AI & RAG',
    categoryKey: 'agentic',
    readTime: '9 min read',
    lessonNumber: 60,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Vector search struggles with global dataset questions ("What are the top 5 overarching supply chain risks across all vendor contracts?")',
      'GraphRAG extracts (Subject, Predicate, Object) knowledge triples and builds hierarchical entity clusters',
      'Hybrid Graph-Vector querying combines semantic passage similarity with multi-hop graph traversals (Cypher queries)',
      'Community summaries synthesize high-level thematic intelligence across entire corpus clusters',
    ],
    tools: ['Microsoft GraphRAG', 'Neo4j / Cypher', 'NetworkX', 'LlamaIndex PropertyGraph'],
    relatedCertifications: ['RAG Architect', 'Master AI Strategist'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 58: Vector Databases'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'When answering complex relational questions spanning 50 different documents (e.g. "Which suppliers in Region A depend on microchips produced by Company B?"), vector search returns fragmented snippets. GraphRAG structures unstructured text into a queryable knowledge graph.',
      core: `### Constructing Knowledge Triples for GraphRAG

\`\`\`python
from pydantic import BaseModel, Field

class KnowledgeTriple(BaseModel):
    subject: str = Field(description="Entity node initiating the relationship")
    predicate: str = Field(description="Relationship verb/type in UPPERCASE_SNAKE_CASE")
    object: str = Field(description="Target entity node")
    confidence: float = Field(ge=0.0, le=1.0)

class ExtractedGraphData(BaseModel):
    triples: list[KnowledgeTriple]
    entities: list[str]

# Example Cypher Query for Multi-Hop Graph Traversal in Neo4j:
# MATCH (c:Company {name: "Apex Semiconductor"})-[:SUPPLIES_TO*1..3]->(target:Company)
# RETURN target.name, target.country
\`\`\`

---

### Global Search vs Local Search in GraphRAG
- **Local Search:** Focuses on specific entity neighborhoods (e.g., "What are the contractual terms for Vendor X?").
- **Global Search:** Aggregates pre-computed community summaries across the entire graph to answer broad thematic questions (e.g., "What are the common vulnerabilities in our 2026 cloud architecture?").`,
      tryThis: `Extract 5 knowledge triples from a short press release about an acquisition (e.g. Company A acquired Company B for $500M led by CEO C) and visualize them as nodes and edges!`,
    },
    quiz: [
      {
        question: 'Which query type represents the greatest strength of GraphRAG compared to naive vector similarity search?',
        options: [
          'Looking up an exact employee phone number in a flat CSV table.',
          'Multi-hop relational reasoning and overarching corpus-wide summary synthesis across interconnected documents.',
          'Compressing image files into JPEG format.',
          'Executing arithmetic calculations without code.',
        ],
        correctIndex: 1,
        explanation: 'GraphRAG excels at connecting multi-hop entity relationships and answering high-level corpus queries using pre-computed community summaries.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 61: Automated RAG Evaluation (RAGAS & TruLens)
  // -------------------------------------------------------------
  {
    id: 'lesson-61',
    slug: 'automated-rag-evaluation-ragas-trulens-triad',
    title: 'Automated RAG Evaluation: RAGAS & the TruLens RAG Triad',
    description: 'Implement continuous CI/CD evaluation for RAG pipelines using Context Relevance, Groundedness (Faithfulness), and Answer Relevance metrics.',
    category: 'Agentic AI & RAG',
    categoryKey: 'agentic',
    readTime: '8 min read',
    lessonNumber: 61,
    difficulty: 'Advanced',
    keyTakeaways: [
      'The RAG Triad evaluates the three critical edges: Context Relevance (Retriever), Groundedness (Generator), and Answer Relevance (User intent)',
      'Groundedness / Faithfulness measures whether every assertion in the response is mathematically backed by the retrieved context',
      'Context Relevance assesses the signal-to-noise ratio in retrieved passages to avoid paying for bloated context windows',
      'RAGAS automated scoring pipelines run against golden evaluation datasets in GitHub Actions before deploying prompt or retriever changes',
    ],
    tools: ['RAGAS', 'TruLens', 'DeepEval', 'OpenAI / Claude LLM-as-a-Judge'],
    relatedCertifications: ['RAG Architect', 'LLMOps Specialist'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Lesson 58: Vector Databases'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'You cannot optimize what you do not measure. Guessing whether a RAG prompt change improved response accuracy leads to silent production degradation. Automated evaluation frameworks turn subjective reviews into repeatable unit test scores.',
      core: `### The RAG Triad Evaluation Metrics

\`\`\`
       [ User Query ]
          /        \\
  Context          Answer
 Relevance        Relevance
      /              \\
 [ Retrieved Context ] ---> [ Generated Answer ]
              \\               /
               -- Faithfulness --
\`\`\`

1. **Context Relevance:** Does the retrieved chunk contain only information relevant to answering the query?
2. **Faithfulness / Groundedness:** Are all statements in the generated response derived exclusively from the context (0% hallucination)?
3. **Answer Relevance:** Does the response directly address the user's specific prompt without topic drift?

\`\`\`python
# Example RAGAS Evaluation Script
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision
from datasets import Dataset

eval_data = {
    "question": ["What is the maximum file upload limit on the Pro plan?"],
    "contexts": [["The Pro plan supports single file uploads up to 500 MB. Enterprise supports 5 GB."]],
    "answer": ["The Pro plan allows single file uploads up to 500 MB."],
    "ground_truth": ["500 MB per file on the Pro plan."]
}

dataset = Dataset.from_dict(eval_data)
results = evaluate(dataset, metrics=[faithfulness, answer_relevancy, context_precision])
print("Faithfulness Score:", results["faithfulness"]) # 1.0 = 100% grounded
\`\`\``,
      tryThis: `Write an evaluation test case with an intentional hallucination (e.g., context says 500 MB, answer says 2 GB) and verify that the faithfulness score drops to 0.0!`,
    },
    quiz: [
      {
        question: 'If a RAG system generates an answer that is polite and fluent, but claims a policy detail not present in the retrieved context, which RAG Triad metric will score low?',
        options: [
          'Context Recall.',
          'Faithfulness / Groundedness.',
          'Latency TTFT.',
          'Token throughput.',
        ],
        correctIndex: 1,
        explanation: 'Faithfulness (or Groundedness) specifically measures whether every claim in the generated output can be verified against the provided source passages.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 62: High-Throughput LLM Serving: vLLM & KV Caching
  // -------------------------------------------------------------
  {
    id: 'lesson-62',
    slug: 'high-throughput-llm-serving-vllm-pagedattention',
    title: 'High-Throughput LLM Serving: vLLM, PagedAttention & KV Caching',
    description: 'Optimize self-hosted LLM inference throughput: PagedAttention virtual memory, continuous batching, KV cache quantization, and multi-GPU tensor parallelism.',
    category: 'Agentic AI & RAG',
    categoryKey: 'agentic',
    readTime: '9 min read',
    lessonNumber: 62,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Naive LLM serving wastes up to 60-80% of GPU VRAM due to memory fragmentation in dynamic Key-Value (KV) caching',
      'PagedAttention treats KV cache memory like virtual memory pages in operating systems, eliminating fragmentation and enabling 2x–4x higher concurrency',
      'Continuous iteration-level batching dynamically injects new requests as soon as earlier requests finish generation',
      'Model quantization (AWQ, GPTQ, FP8) reduces weight memory footprint while preserving perplexity scores',
    ],
    tools: ['vLLM', 'TensorRT-LLM', 'Triton Inference Server', 'NVIDIA H100 / A100'],
    relatedCertifications: ['LLMOps Specialist', 'FinOps Architect'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Basic GPU architecture familiarity'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Deploying open-weight models (Llama 3, Mistral, Qwen) in production requires maximizing tokens per second per dollar. vLLM with PagedAttention is the gold standard for high-throughput enterprise serving.',
      core: `### Deploying High-Concurrency vLLM Server

\`\`\`bash
# Launch OpenAI-compatible vLLM server with PagedAttention & FP8 quantization
vllm serve meta-llama/Meta-Llama-3-70B-Instruct \\
    --tensor-parallel-size 4 \\
    --gpu-memory-utilization 0.92 \\
    --max-model-len 8192 \\
    --quantization fp8 \\
    --port 8000
\`\`\`

\`\`\`python
# Client-side streaming consumption via OpenAI SDK:
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="EMPTY")

response = client.chat.completions.create(
    model="meta-llama/Meta-Llama-3-70B-Instruct",
    messages=[{"role": "user", "content": "Analyze distributed lock mechanisms in Redis."}],
    temperature=0.2,
    stream=True
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
\`\`\`

---

### Key Serving Performance Metrics
- **TTFT (Time to First Token):** Latency required to process prompt input tokens (prefill stage).
- **ITL (Inter-Token Latency):** Time required to decode each subsequent output token.
- **Tokens/Sec/GPU:** Total system throughput under heavy concurrent load.`,
      tryThis: `Calculate the VRAM required to hold the KV Cache for 100 concurrent users at 4,000 tokens context length on a 70B model with 16-bit precision vs FP8 quantized KV cache!`,
    },
    quiz: [
      {
        question: 'How does PagedAttention in vLLM prevent GPU memory exhaustion during high-concurrency inference?',
        options: [
          'By converting all prompts to ASCII text format.',
          'By allocating non-contiguous physical VRAM memory blocks for the KV Cache like OS virtual memory paging, eliminating internal fragmentation.',
          'By turning off self-attention layers in the transformer.',
          'By downsampling model weights to 1-bit integers.',
        ],
        correctIndex: 1,
        explanation: 'PagedAttention partitions the KV cache into fixed-size virtual memory pages, preventing contiguous memory allocation bottlenecks and reducing VRAM waste to under 4%.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 63: LLMOps Observability, OpenTelemetry & EU AI Act
  // -------------------------------------------------------------
  {
    id: 'lesson-63',
    slug: 'llmops-observability-opentelemetry-eu-ai-act',
    title: 'LLMOps Observability, OpenTelemetry & EU AI Act Compliance Guardrails',
    description: 'Instrument enterprise LLM pipelines with OpenTelemetry distributed tracing, detect semantic drift, implement NeMo Guardrails, and maintain EU AI Act audit trails.',
    category: 'Agentic AI & RAG',
    categoryKey: 'agentic',
    readTime: '9 min read',
    lessonNumber: 63,
    difficulty: 'Advanced',
    keyTakeaways: [
      'OpenTelemetry tracing instruments multi-step agent chains, tracking exact latency, token count, and cost per span',
      'NeMo Guardrails enforce programmatic safety rails preventing topical drift, jailbreaks, and PII leakage',
      'The EU AI Act classifies high-risk AI systems, mandating comprehensive technical documentation, human oversight logs, and continuous accuracy monitoring',
      'Automated red-teaming pipelines test model resilience against token smuggling, base64 obfuscation, and persona bypasses',
    ],
    tools: ['Langfuse / Phoenix', 'OpenTelemetry', 'NeMo Guardrails', 'EU AI Act Compliance Kit'],
    relatedCertifications: ['LLMOps Specialist', 'AI Strategic Master'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 55: ReAct Loops'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Moving AI from prototype to production requires institutional observability, deterministic safety guardrails, and adherence to emerging global regulations like the EU AI Act and NIST AI Risk Management Framework.',
      core: `### Instrumenting Distributed Tracing with OpenTelemetry

\`\`\`python
from langfuse.openai import openai
from langfuse import Langfuse

langfuse = Langfuse()

# Traced LLM call with metadata, tags, and user tracking
response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Draft an automated risk report for Q3."}],
    name="q3-risk-generation",
    metadata={"tenant_id": "enterprise-corp-01", "department": "compliance"},
    user_id="analyst-849",
    tags=["production", "financial-risk"]
)

# Automated trace captures TTFT, token usage, cost, and exact prompt versions
print(response.choices[0].message.content)
\`\`\`

---

### EU AI Act Compliance Checklist for High-Risk Systems
1. **Risk Management System:** Documented identification of foreseeable risks across the lifecycle.
2. **Data Governance:** Training/retrieval data verified for bias, statistical representation, and privacy sanitization.
3. **Technical Documentation:** Continuous logging of model versions, prompt changes, and temperature parameters.
4. **Human-in-the-Loop Logging:** Mandatory recording of all human override decisions on automated recommendations.`,
      tryThis: `Set up a basic Langfuse trace to capture a 2-step LLM chain (query generation -> document summarization) and inspect the latency waterfall in the trace dashboard!`,
    },
    quiz: [
      {
        question: 'Under the EU AI Act, what is a mandatory requirement for high-risk generative AI enterprise applications?',
        options: [
          'All software must be open-sourced under the MIT license.',
          'Continuous technical documentation, human oversight capability, and comprehensive audit logging of model decisions.',
          'Models must only run on European cloud providers.',
          'Prompts cannot exceed 50 words.',
        ],
        correctIndex: 1,
        explanation: 'The EU AI Act mandates strict risk management, technical documentation, human-in-the-loop oversight, and auditable operational logs for high-risk AI systems.',
      },
    ],
  },
];

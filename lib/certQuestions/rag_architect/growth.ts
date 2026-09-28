import { CertQuestion } from '../types';

export const RAG_ARCHITECT_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "rag_gro_01",
    "section": "growth",
    "prompt": "When scaling a vector database to 500 million vectors, what index sharding strategy maintains low query latency (<20ms p95)?",
    "options": [
      {
        "id": "a",
        "label": "Running the entire index on a single physical machine with 16GB RAM."
      },
      {
        "id": "b",
        "label": "Horizontal index partitioning across distributed worker nodes with partition-key routing, combined with Product Quantization (PQ) and replica scaling."
      },
      {
        "id": "c",
        "label": "Disabling all vector indexes and scanning raw data sequentially."
      },
      {
        "id": "d",
        "label": "Deleting 90% of vectors periodically."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_gro_02",
    "section": "growth",
    "prompt": "In HNSW vector indexing, how do the `M` (max connections per node) and `efConstruction` parameters affect index performance?",
    "options": [
      {
        "id": "a",
        "label": "Higher `M` and `efConstruction` increase recall accuracy and graph connectivity at the cost of higher RAM memory consumption and longer index build times."
      },
      {
        "id": "b",
        "label": "They control database user login permissions."
      },
      {
        "id": "c",
        "label": "They determine the font size of search results."
      },
      {
        "id": "d",
        "label": "Higher values decrease accuracy and increase speed."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_gro_03",
    "section": "growth",
    "prompt": "What is 'Hierarchical Navigable Small World (HNSW) vs Inverted File Flat (IVFFlat)' memory trade-off in production vector search?",
    "options": [
      {
        "id": "a",
        "label": "IVFFlat requires quantum computing; HNSW runs only on mobile phones."
      },
      {
        "id": "b",
        "label": "HNSW is exclusively for text; IVFFlat is exclusively for images."
      },
      {
        "id": "c",
        "label": "There is no difference in memory or performance."
      },
      {
        "id": "d",
        "label": "HNSW stores multi-layer graph structures in RAM offering superior query speed and recall, while IVFFlat uses clustering centroids consuming significantly less RAM but with lower recall."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_gro_04",
    "section": "growth",
    "prompt": "In RAG evaluation with Ragas, how is 'Answer Relevance' measured mathematically?",
    "options": [
      {
        "id": "a",
        "label": "By counting the total number of syllables in the answer."
      },
      {
        "id": "b",
        "label": "By checking whether the answer ends with a period."
      },
      {
        "id": "c",
        "label": "An LLM generates hypothetical questions that the answer could satisfy, computes semantic similarity between generated questions and the original query, and averages the cosine scores."
      },
      {
        "id": "d",
        "label": "By measuring how fast the LLM generated the tokens."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_gro_05",
    "section": "growth",
    "prompt": "How does 'Matryoshka Embedding Truncation' reduce cloud infrastructure costs for massive vector repositories?",
    "options": [
      {
        "id": "a",
        "label": "Deletes 50% of the vector dimensions randomly."
      },
      {
        "id": "b",
        "label": "Allows storing truncated 256-dimension vectors in memory for rapid top-100 candidate filtering, and full 1536-dimension vectors in cold storage for final re-ranking, saving 80% RAM."
      },
      {
        "id": "c",
        "label": "Translates vectors into text strings."
      },
      {
        "id": "d",
        "label": "Disables vector similarity search."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_gro_06",
    "section": "growth",
    "prompt": "What is 'Fine-Tuning Dense Embedding Models on Domain-Specific Triplet Loss'?",
    "options": [
      {
        "id": "a",
        "label": "Training embedding models on domain (Anchor, Positive, Negative) text triplets using contrastive loss to sharpen vector separation for specialized terminology (e.g. legal, medical)."
      },
      {
        "id": "b",
        "label": "Training models on three random words."
      },
      {
        "id": "c",
        "label": "Deleting negative examples from training data."
      },
      {
        "id": "d",
        "label": "Running three embedding models in parallel."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_gro_07",
    "section": "growth",
    "prompt": "In RAG system benchmarking, what is 'NDCG@K' (Normalized Discounted Cumulative Gain at K)?",
    "options": [
      {
        "id": "a",
        "label": "A metric for measuring database disk storage."
      },
      {
        "id": "b",
        "label": "A financial metric for calculating return on investment."
      },
      {
        "id": "c",
        "label": "A measure of server fan noise in decibels."
      },
      {
        "id": "d",
        "label": "A ranking quality metric that rewards retrieval systems for placing highly relevant documents near the top of the search result list while penalizing lower-ranked placements."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_gro_08",
    "section": "growth",
    "prompt": "How does 'GraphRAG Community Summarization' enable macro-level thematic question answering across an entire enterprise corpus?",
    "options": [
      {
        "id": "a",
        "label": "Converts documents into social media chat groups."
      },
      {
        "id": "b",
        "label": "Deletes individual document details."
      },
      {
        "id": "c",
        "label": "Recursively detects graph community clusters via Leiden algorithm and generates pre-computed summaries for each cluster, allowing the LLM to answer holistic questions like 'What are the main risks?'"
      },
      {
        "id": "d",
        "label": "Renders pie charts of community members."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_gro_09",
    "section": "growth",
    "prompt": "What is 'Dynamic Reranker Pruning' in high-throughput RAG microservices?",
    "options": [
      {
        "id": "a",
        "label": "Deletes the re-ranker model from memory."
      },
      {
        "id": "b",
        "label": "Skips expensive neural cross-encoder re-ranking when initial vector similarity search produces a top result with extremely high confidence (>0.98), saving latency and compute."
      },
      {
        "id": "c",
        "label": "Runs re-ranking 5 times sequentially."
      },
      {
        "id": "d",
        "label": "Limits searches to 1 document only."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_gro_10",
    "section": "growth",
    "prompt": "How does 'Speculative Vector Search' optimize query response times across multi-region vector clusters?",
    "options": [
      {
        "id": "a",
        "label": "Dispatches vector queries concurrently to the closest regional replica and a secondary warm replica, returning whichever candidate result completes first (hedged requests)."
      },
      {
        "id": "b",
        "label": "Guesses search results without checking the database."
      },
      {
        "id": "c",
        "label": "Runs search queries before the user types anything."
      },
      {
        "id": "d",
        "label": "Disables multi-region replication."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_gro_11",
    "section": "growth",
    "prompt": "What is 'Golden Benchmark Dataset Generation via LLM-Driven Evol-Instruct' for RAG pipelines?",
    "options": [
      {
        "id": "a",
        "label": "Manually typing 1,000 questions into Excel."
      },
      {
        "id": "b",
        "label": "Copying questions from online forums."
      },
      {
        "id": "c",
        "label": "Deleting difficult test questions."
      },
      {
        "id": "d",
        "label": "Synthesizing diverse, complex multi-hop question-answer test suites from raw corporate documents using LLM prompt evolution (deepening, reasoning, constraint addition) for automated evaluation."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_gro_12",
    "section": "growth",
    "prompt": "In vector database capacity planning, how is RAM footprint estimated for 10 million vectors with 1536 dimensions using float32?",
    "options": [
      {
        "id": "a",
        "label": "Exactly 500 Megabytes."
      },
      {
        "id": "b",
        "label": "10 Terabytes."
      },
      {
        "id": "c",
        "label": "10M × 1536 dims × 4 bytes = ~61.4 GB raw vector data, plus ~50-100% graph overhead for HNSW index structures (~90-120 GB RAM total)."
      },
      {
        "id": "d",
        "label": "Vectors do not consume RAM."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_gro_13",
    "section": "growth",
    "prompt": "How does 'Scalar Quantization (SQ8)' reduce vector RAM footprint without requiring model retraining?",
    "options": [
      {
        "id": "a",
        "label": "Rounds all numbers to zero."
      },
      {
        "id": "b",
        "label": "Maps 32-bit floating point coordinates linearly into 8-bit signed integers ($[-128, 127]$), reducing raw vector memory from 4 bytes per dim to 1 byte per dim (75% savings)."
      },
      {
        "id": "c",
        "label": "Deletes 8 out of every 10 vectors."
      },
      {
        "id": "d",
        "label": "Converts text to ASCII codes."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_gro_14",
    "section": "growth",
    "prompt": "What is 'A/B Testing of Chunking Strategies' in production RAG systems?",
    "options": [
      {
        "id": "a",
        "label": "Splitting incoming user search traffic between Index A (Semantic Chunking) and Index B (Fixed 512 Chunking with Overlap) to measure statistical differences in retrieval precision and user thumbs-up."
      },
      {
        "id": "b",
        "label": "Testing chunking on alternate days of the week."
      },
      {
        "id": "c",
        "label": "Writing chunking code in two different languages."
      },
      {
        "id": "d",
        "label": "Deleting failed chunking strategies from git."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_gro_15",
    "section": "growth",
    "prompt": "How does 'Hybrid Search Weight Auto-Tuning via Bayesian Optimization' maximize search recall?",
    "options": [
      {
        "id": "a",
        "label": "Sets dense and sparse weights to random numbers on every query."
      },
      {
        "id": "b",
        "label": "Disables BM25 keyword search."
      },
      {
        "id": "c",
        "label": "Requires users to manually set weights."
      },
      {
        "id": "d",
        "label": "Iteratively evaluates retrieval metrics across validation queries to automatically discover optimal weighting coefficients ($\\alpha$ for Dense, $1-\\alpha$ for BM25) per domain."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_gro_16",
    "section": "growth",
    "prompt": "What is 'Query-Document Hard Negative Mining' when training custom enterprise embedding models?",
    "options": [
      {
        "id": "a",
        "label": "Removing all negative numbers from the dataset."
      },
      {
        "id": "b",
        "label": "Mining cryptocurrencies on server GPUs."
      },
      {
        "id": "c",
        "label": "Selecting documents that share high BM25 lexical keyword overlap with the query but are semantically irrelevant, forcing the neural model to learn subtle semantic distinctions."
      },
      {
        "id": "d",
        "label": "Selecting only empty text documents."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_gro_17",
    "section": "growth",
    "prompt": "In RAG pipelines, how does 'Context Token Budget Optimization' prevent prompt degradation?",
    "options": [
      {
        "id": "a",
        "label": "Passing 100,000 tokens of raw text on every query."
      },
      {
        "id": "b",
        "label": "Dynamically sizing retrieved context chunks to fit within a strict token ceiling (e.g. max 3,000 tokens), preserving remaining context budget for complex multi-turn reasoning."
      },
      {
        "id": "c",
        "label": "Limiting responses to 5 words."
      },
      {
        "id": "d",
        "label": "Disabling context ingestion completely."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_gro_18",
    "section": "growth",
    "prompt": "What is 'Continuous RAG Telemetry via OpenTelemetry Spans' in enterprise observability?",
    "options": [
      {
        "id": "a",
        "label": "Emitting distributed spans tracking embedding latency, vector search latency, reranker latency, and LLM TTFT to pinpoint pipeline bottlenecks in real time."
      },
      {
        "id": "b",
        "label": "Recording user video calls."
      },
      {
        "id": "c",
        "label": "Measuring server ambient room temperature."
      },
      {
        "id": "d",
        "label": "Printing debug statements to terminal consoles."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_gro_19",
    "section": "growth",
    "prompt": "How does 'Automated Chunk Deduplication via MinHash / SimHash' optimize index size during ingestion?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all documents that are under 100 words."
      },
      {
        "id": "b",
        "label": "Compresses text using ZIP encryption."
      },
      {
        "id": "c",
        "label": "Translates duplicate chunks into Latin."
      },
      {
        "id": "d",
        "label": "Detects and eliminates duplicate and near-duplicate document chunks (e.g. repeated legal disclaimers, boilerplate footers) before generating embeddings, saving storage and compute."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_gro_20",
    "section": "growth",
    "prompt": "What is 'Zero-Downtime Re-Indexing' in enterprise vector database administration?",
    "options": [
      {
        "id": "a",
        "label": "Dropping production database tables during business hours."
      },
      {
        "id": "b",
        "label": "Rebooting all client web browsers."
      },
      {
        "id": "c",
        "label": "Building a new vector collection (v2) with upgraded embedding dimensions in the background, syncing incremental delta writes, and switching read aliases atomically upon completion."
      },
      {
        "id": "d",
        "label": "Disabling search for 24 hours."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_gro_21",
    "section": "growth",
    "prompt": "How does 'Multi-Vector Document Representation' (e.g. ColPali for Vision-RAG) index complex visual documents?",
    "options": [
      {
        "id": "a",
        "label": "Converts images into low-resolution GIFs."
      },
      {
        "id": "b",
        "label": "Embeds full visual page images directly using Vision Language Models (VLMs) into patch-level multi-vectors, eliminating messy OCR and table extraction pipelines."
      },
      {
        "id": "c",
        "label": "Deletes all images from PDF documents."
      },
      {
        "id": "d",
        "label": "Requires users to describe images manually."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_gro_22",
    "section": "growth",
    "prompt": "What is 'Vector Cache Warmup' during cold starts in containerized RAG services?",
    "options": [
      {
        "id": "a",
        "label": "Pre-loading frequently queried HNSW index graph layers and embedding model weights into memory before registering the pod to the live load balancer router."
      },
      {
        "id": "b",
        "label": "Heating server hardware with heat lamps."
      },
      {
        "id": "c",
        "label": "Running 1,000 queries on test accounts."
      },
      {
        "id": "d",
        "label": "Clearing all RAM caches before startup."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_gro_23",
    "section": "growth",
    "prompt": "In RAG pipelines, how does 'Prompt Compression via LLMLingua' reduce generation cost and latency?",
    "options": [
      {
        "id": "a",
        "label": "Zips text into a .rar file."
      },
      {
        "id": "b",
        "label": "Deletes every third word in the prompt."
      },
      {
        "id": "c",
        "label": "Translates prompts to binary."
      },
      {
        "id": "d",
        "label": "Uses a compact small language model to prune non-essential and redundant tokens from retrieved context passages, compressing context length by 50%-70% while preserving critical facts."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_gro_24",
    "section": "growth",
    "prompt": "What is 'Hierarchical Index Routing' across multiple departmental knowledge bases?",
    "options": [
      {
        "id": "a",
        "label": "Sending all queries to all databases simultaneously."
      },
      {
        "id": "b",
        "label": "Restricting searches to the HR database only."
      },
      {
        "id": "c",
        "label": "A master router classifies query intent to determine which specialized departmental vector index (e.g. Legal, Engineering, HR) to query, avoiding search overhead across irrelevant domains."
      },
      {
        "id": "d",
        "label": "Sorting databases alphabetically."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_gro_25",
    "section": "growth",
    "prompt": "How does 'Continuous Feedback Loop (RLAIF / DPO) from Retrieval Evaluations' improve RAG quality?",
    "options": [
      {
        "id": "a",
        "label": "Deletes negative user feedback."
      },
      {
        "id": "b",
        "label": "Collects user thumbs up/down and citation clicks to generate preference pairs $(x, y_w, y_l)$, fine-tuning rerankers and synthesis models to optimize grounded responses."
      },
      {
        "id": "c",
        "label": "Sends apology emails to users who give thumbs down."
      },
      {
        "id": "d",
        "label": "Disables user rating buttons."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_gro_26",
    "section": "growth",
    "prompt": "What is 'Vector Index Replication for Read-Heavy Workloads' in high-traffic architectures?",
    "options": [
      {
        "id": "a",
        "label": "Deploying multiple read-only vector index replicas behind a round-robin load balancer to horizontally scale search QPS (queries per second) independently of write ingestion."
      },
      {
        "id": "b",
        "label": "Storing backup copies on floppy disks."
      },
      {
        "id": "c",
        "label": "Limiting searches to 1 thread."
      },
      {
        "id": "d",
        "label": "Disabling index replication."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_gro_27",
    "section": "growth",
    "prompt": "How does 'Early Stopping in Multi-Passage Re-Ranking' reduce p99 search latency?",
    "options": [
      {
        "id": "a",
        "label": "Stops the search server process on errors."
      },
      {
        "id": "b",
        "label": "Disables re-ranking during peak hours."
      },
      {
        "id": "c",
        "label": "Returns the first retrieved document without scoring."
      },
      {
        "id": "d",
        "label": "Terminates neural cross-encoder re-ranking as soon as a required threshold of high-confidence candidate passages ($N=5$ with score $>0.90$) are identified."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_gro_28",
    "section": "growth",
    "prompt": "What is 'Cross-Language Retrieval / Multilingual Vector Alignment'?",
    "options": [
      {
        "id": "a",
        "label": "Translating all documents into English via Google Translate."
      },
      {
        "id": "b",
        "label": "Restricting search to English only."
      },
      {
        "id": "c",
        "label": "Using multilingual embedding models (e.g. Cohere Multilingual / BGE-M3) that map queries and documents in 100+ languages into a unified semantic space, enabling cross-lingual search."
      },
      {
        "id": "d",
        "label": "Deleting non-English documents."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_gro_29",
    "section": "growth",
    "prompt": "How does 'Automated Hallucination Rate Tracking' alert on RAG quality degradation?",
    "options": [
      {
        "id": "a",
        "label": "Waits for executive complaints."
      },
      {
        "id": "b",
        "label": "Computes daily rolling faithfulness metrics across sampled production logs; if hallucination rate crosses 2%, triggers automated alerts to RAG engineering teams."
      },
      {
        "id": "c",
        "label": "Assumes hallucination rates are always 0%."
      },
      {
        "id": "d",
        "label": "Disables all system alerts."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_gro_30",
    "section": "growth",
    "prompt": "Why is 'Persistent Ingestion Checkpointing' critical for multi-million document RAG pipelines?",
    "options": [
      {
        "id": "a",
        "label": "Allows large batch ingestion jobs that are interrupted by network failures or server restarts to resume exactly where they left off without reprocessing already embedded files."
      },
      {
        "id": "b",
        "label": "Deletes all files when an error occurs."
      },
      {
        "id": "c",
        "label": "Restarts ingestion from document 1 on every crash."
      },
      {
        "id": "d",
        "label": "Disables error handling."
      }
    ],
    "correctOptionId": "a"
  }
];

import { CertQuestion } from '../types';

export const RAG_ARCHITECT_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "rag_aut_01",
    "section": "automation",
    "prompt": "When building an automated document ingestion pipeline with LlamaIndex or LangChain, how are recurring PDF updates indexed without rebuilding the entire vector store?",
    "options": [
      {
        "id": "a",
        "label": "Dropping the entire vector database and re-indexing all 10 million documents on every file change."
      },
      {
        "id": "b",
        "label": "Using document content hashing (e.g. SHA-256) and ingestion docstores to detect new, modified, or deleted files and perform incremental upsert/delete operations."
      },
      {
        "id": "c",
        "label": "Ignoring document updates and serving stale embeddings."
      },
      {
        "id": "d",
        "label": "Manually typing document updates into terminal prompts."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_aut_02",
    "section": "automation",
    "prompt": "In PostgreSQL with `pgvector`, which index type is best suited for low-memory environments with frequent insert updates?",
    "options": [
      {
        "id": "a",
        "label": "`IVFFlat` index (Inverted File Flat) which builds faster and uses significantly less RAM than HNSW, though requiring index rebuilding after major data shifts."
      },
      {
        "id": "b",
        "label": "B-Tree index on raw vector strings."
      },
      {
        "id": "c",
        "label": "Disabling indexes and using sequential table scans."
      },
      {
        "id": "d",
        "label": "GIST indexes on integer columns."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_aut_03",
    "section": "automation",
    "prompt": "How does 'Semantic Cache Integration' (e.g. Redis Semantic Cache / GPTCache) accelerate RAG pipeline response times?",
    "options": [
      {
        "id": "a",
        "label": "Compresses vector databases onto local SSD drives."
      },
      {
        "id": "b",
        "label": "Caches database SQL connection strings."
      },
      {
        "id": "c",
        "label": "Translates cached queries to Spanish."
      },
      {
        "id": "d",
        "label": "Stores query embeddings and answers in memory; if a new query has high cosine similarity (>= 0.95) to a cached query, returns answer instantly with 0 remote LLM cost."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_aut_04",
    "section": "automation",
    "prompt": "When setting up Hybrid Search in Qdrant, how are dense and sparse (BM25 / SPLADE) vectors stored and queried simultaneously?",
    "options": [
      {
        "id": "a",
        "label": "Creating two completely separate database servers."
      },
      {
        "id": "b",
        "label": "Converting sparse vectors to dense vectors with zero padding."
      },
      {
        "id": "c",
        "label": "Configuring named vector configurations with both dense and sparse vector indices on the collection, querying with `prefetch` and merging via RRF fusion."
      },
      {
        "id": "d",
        "label": "Disabling sparse vector search."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_aut_05",
    "section": "automation",
    "prompt": "In automated document parsing, how can unstructured tabular financial data in PDF files be converted into LLM-readable RAG chunks?",
    "options": [
      {
        "id": "a",
        "label": "Flattening the entire table into a single comma-separated string without column headers."
      },
      {
        "id": "b",
        "label": "Using table extraction parsers (e.g. `pdfplumber`, `unstructured`, or vision LLMs) to convert tables into clean Markdown / HTML table strings with column headers intact."
      },
      {
        "id": "c",
        "label": "Deleting all numerical digits from tables."
      },
      {
        "id": "d",
        "label": "Taking screenshots of tables and ignoring their contents."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_aut_06",
    "section": "automation",
    "prompt": "What is the recommended batch size and rate-limiting strategy when generating embeddings for 500,000 document chunks via cloud embedding APIs?",
    "options": [
      {
        "id": "a",
        "label": "Batching chunks into payloads of 512-2048 texts per API request with asynchronous worker pools and exponential backoff retry to saturate throughput without hitting 429 limits."
      },
      {
        "id": "b",
        "label": "Sending 1 chunk per HTTP request in a single synchronous loop."
      },
      {
        "id": "c",
        "label": "Sending all 500,000 chunks in a single 10GB HTTP POST request."
      },
      {
        "id": "d",
        "label": "Generating embeddings locally using random numbers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_aut_07",
    "section": "automation",
    "prompt": "In Pinecone, how are multi-tenant enterprise data partitions isolated efficiently?",
    "options": [
      {
        "id": "a",
        "label": "Creating a new Pinecone project per individual user."
      },
      {
        "id": "b",
        "label": "Appending tenant IDs to the end of all text strings."
      },
      {
        "id": "c",
        "label": "Disabling namespaces and filtering in application memory."
      },
      {
        "id": "d",
        "label": "Using Pinecone Namespaces (`namespace='tenant_123'`) within a single index, allowing instant scoped queries and namespace-level deletion."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_aut_08",
    "section": "automation",
    "prompt": "How does 'Auto-Merging Retriever' in LlamaIndex organize document hierarchies?",
    "options": [
      {
        "id": "a",
        "label": "Combines all documents in a directory into one giant file."
      },
      {
        "id": "b",
        "label": "Merges user accounts automatically."
      },
      {
        "id": "c",
        "label": "Splits documents into leaf sub-chunks; during retrieval, if a majority of sibling sub-chunks belonging to the same parent are retrieved, it automatically merges them into the parent chunk."
      },
      {
        "id": "d",
        "label": "Deletes duplicate sentences in real time."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_aut_09",
    "section": "automation",
    "prompt": "When automating RAG evaluations in CI/CD, how does 'Ragas' compute the 'Faithfulness' metric automatically?",
    "options": [
      {
        "id": "a",
        "label": "Checks if the answer contains polite words."
      },
      {
        "id": "b",
        "label": "Extracts all factual statements from the generated answer, prompts an evaluator LLM to verify whether each statement can be logically deduced from the retrieved context, and computes the ratio."
      },
      {
        "id": "c",
        "label": "Counts the total number of characters in the response."
      },
      {
        "id": "d",
        "label": "Compares the response latency to a benchmark."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_aut_10",
    "section": "automation",
    "prompt": "How can an automated RAG system dynamically detect whether a user question requires web search vs internal document retrieval?",
    "options": [
      {
        "id": "a",
        "label": "A Router node (classifier LLM or semantic router) analyzes query temporal keywords and domain entities, routing real-time/external queries to search APIs and company queries to vector stores."
      },
      {
        "id": "b",
        "label": "Always search the web for every question regardless of topic."
      },
      {
        "id": "c",
        "label": "Ask the user to type their preferred database connection string."
      },
      {
        "id": "d",
        "label": "Search both and concatenate 100,000 words into prompt."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_aut_11",
    "section": "automation",
    "prompt": "In Milvus, what is the purpose of 'Partition Keys' in distributed vector search?",
    "options": [
      {
        "id": "a",
        "label": "Encrypts vector database partitions on disk."
      },
      {
        "id": "b",
        "label": "Compresses vector coordinates."
      },
      {
        "id": "c",
        "label": "Deletes partitions when full."
      },
      {
        "id": "d",
        "label": "Enables scalar field partitioning (e.g. `tenant_id`) across physical worker nodes, routing queries directly to relevant partition shards without scanning the full collection."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_aut_12",
    "section": "automation",
    "prompt": "How does 'Sentence-Window Retrieval' structure document chunks for LLM synthesis?",
    "options": [
      {
        "id": "a",
        "label": "Limits chunks to exactly 1 sentence."
      },
      {
        "id": "b",
        "label": "Splits sentences across different databases."
      },
      {
        "id": "c",
        "label": "Embeds individual sentences for granular search, but stores surrounding context windows (e.g. 3 sentences before and after) in metadata, replacing the single sentence with its window upon retrieval."
      },
      {
        "id": "d",
        "label": "Deletes sentences that contain numbers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_aut_13",
    "section": "automation",
    "prompt": "When indexing millions of source code repositories for a developer RAG assistant, how should code chunking be performed?",
    "options": [
      {
        "id": "a",
        "label": "Splitting code strictly every 500 characters regardless of syntax."
      },
      {
        "id": "b",
        "label": "Using AST code splitters (e.g. Tree-sitter / LangChain LanguageParser) to split code along function, class, and method boundaries with docstrings attached."
      },
      {
        "id": "c",
        "label": "Removing all indentation and comments before embedding."
      },
      {
        "id": "d",
        "label": "Compiling code into binaries before search."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_aut_14",
    "section": "automation",
    "prompt": "What is 'Asynchronous Vector Streaming Ingestion' with Apache Kafka / RabbitMQ?",
    "options": [
      {
        "id": "a",
        "label": "Decouples document upload APIs from heavy parsing/embedding workers via message queues, absorbing traffic spikes and ensuring zero document loss during bursts."
      },
      {
        "id": "b",
        "label": "Streams video files directly into vector databases."
      },
      {
        "id": "c",
        "label": "Runs embedding generation on client browsers."
      },
      {
        "id": "d",
        "label": "Disables database transaction logs."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_aut_15",
    "section": "automation",
    "prompt": "How does 'Cohere Rerank v3' optimize token usage when integrated after initial retrieval?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all passages longer than 10 tokens."
      },
      {
        "id": "b",
        "label": "Translates candidate passages into Latin."
      },
      {
        "id": "c",
        "label": "Combines 50 passages into a single sentence."
      },
      {
        "id": "d",
        "label": "Takes top-50 candidate passages from fast vector search, re-ranks them by semantic relevance, and filters down to the top-5 most relevant passages, cutting downstream LLM prompt tokens by 80%."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_aut_16",
    "section": "automation",
    "prompt": "In Weaviate, what is 'Hybrid Search Alpha Parameter ($0.0 \\le \\alpha \\le 1.0$)'?",
    "options": [
      {
        "id": "a",
        "label": "Sets the server CPU clock multiplier."
      },
      {
        "id": "b",
        "label": "Specifies the database backup frequency."
      },
      {
        "id": "c",
        "label": "Controls the weighting balance between BM25 sparse keyword search ($\\alpha = 0$) and dense vector similarity search ($\\alpha = 1$)."
      },
      {
        "id": "d",
        "label": "Controls the user subscription tier."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_aut_17",
    "section": "automation",
    "prompt": "How can a RAG system automatically verify that all retrieved facts in a draft answer are supported before presenting to the user?",
    "options": [
      {
        "id": "a",
        "label": "By checking if the generated text is in English."
      },
      {
        "id": "b",
        "label": "A verification node runs an NLI (Natural Language Inference) premise-hypothesis entailment check between retrieved chunks and answer claims, highlighting ungrounded claims."
      },
      {
        "id": "c",
        "label": "By measuring the speed of token generation."
      },
      {
        "id": "d",
        "label": "By deleting the generated answer."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_aut_18",
    "section": "automation",
    "prompt": "What is 'Vector Index Hot-Reloading' during automated ingestion updates?",
    "options": [
      {
        "id": "a",
        "label": "Swapping updated vector index memory structures in the background without dropping active search connections or causing query downtime."
      },
      {
        "id": "b",
        "label": "Increasing server operating temperature."
      },
      {
        "id": "c",
        "label": "Rebooting the server hardware."
      },
      {
        "id": "d",
        "label": "Clearing all browser caches."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_aut_19",
    "section": "automation",
    "prompt": "In pgvector, what does the `lists` parameter configure when creating an `IVFFlat` index (`WITH (lists = 100)`)?",
    "options": [
      {
        "id": "a",
        "label": "The maximum number of rows in the table."
      },
      {
        "id": "b",
        "label": "The number of database users."
      },
      {
        "id": "c",
        "label": "The password length requirement."
      },
      {
        "id": "d",
        "label": "The number of clusters/centroids into which vectors are partitioned during indexing, balancing index build time and query recall."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_aut_20",
    "section": "automation",
    "prompt": "How does 'Metadata-Enriched Prompt Construction' format retrieved chunks for the LLM?",
    "options": [
      {
        "id": "a",
        "label": "Concatenates all chunks into a single unspaced string."
      },
      {
        "id": "b",
        "label": "Deletes all source document names."
      },
      {
        "id": "c",
        "label": "Wraps each chunk in structured XML tags containing source metadata (e.g. `<doc id=\"104\" source=\"hr_policy.pdf\" page=\"12\">...</doc>`) to enable precise citing."
      },
      {
        "id": "d",
        "label": "Translates metadata into hexadecimal."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_aut_21",
    "section": "automation",
    "prompt": "When building an automated multi-document synthesis RAG pipeline, what is the 'Map-Reduce Summarization' approach?",
    "options": [
      {
        "id": "a",
        "label": "Draws geographic maps of server locations."
      },
      {
        "id": "b",
        "label": "Generates individual section summaries for retrieved passages in parallel (Map) and synthesizes the intermediate summaries into a consolidated comprehensive report (Reduce)."
      },
      {
        "id": "c",
        "label": "Deletes 50% of the retrieved documents."
      },
      {
        "id": "d",
        "label": "Runs queries only on Google Maps APIs."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_aut_22",
    "section": "automation",
    "prompt": "What is 'Embedding Model Quantization with ONNX / TensorRT' in high-throughput ingestion pipelines?",
    "options": [
      {
        "id": "a",
        "label": "Exports embedding neural networks to optimized INT8/FP16 execution graphs, accelerating embedding generation by 3x-5x on local CPUs/GPUs."
      },
      {
        "id": "b",
        "label": "Reduces document text length by 50%."
      },
      {
        "id": "c",
        "label": "Deletes neural network weights."
      },
      {
        "id": "d",
        "label": "Converts text to audio."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_aut_23",
    "section": "automation",
    "prompt": "How does 'TruLens RAG Triad' automate continuous quality monitoring in production?",
    "options": [
      {
        "id": "a",
        "label": "Monitors office network cable connections."
      },
      {
        "id": "b",
        "label": "Checks employee attendance records."
      },
      {
        "id": "c",
        "label": "Tracks user browser window dimensions."
      },
      {
        "id": "d",
        "label": "Continuously computes feedback scores across Context Relevance, Groundedness (Faithfulness), and Answer Relevance for every production RAG transaction."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_aut_24",
    "section": "automation",
    "prompt": "In ChromaDB, how are persistent vector collections configured in Python microservices?",
    "options": [
      {
        "id": "a",
        "label": "Running in ephemeral RAM without saving to disk."
      },
      {
        "id": "b",
        "label": "Writing vectors to local browser cookies."
      },
      {
        "id": "c",
        "label": "`chromadb.PersistentClient(path='/data/chroma')` initializing SQLite metadata and DuckDB/HNSW vector indices on persistent block storage."
      },
      {
        "id": "d",
        "label": "Sending vectors via email."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_aut_25",
    "section": "automation",
    "prompt": "How does an automated RAG pipeline handle OCR on scanned, low-quality image receipts and invoices?",
    "options": [
      {
        "id": "a",
        "label": "Rejects all scanned documents immediately."
      },
      {
        "id": "b",
        "label": "Pre-processes images with contrast enhancement/deskewing, extracts text with specialized vision OCR engines, and cleans noise with LLM post-processing before embedding."
      },
      {
        "id": "c",
        "label": "Converts images to audio files."
      },
      {
        "id": "d",
        "label": "Embeds raw image file binary bytes directly into text embedding models."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_aut_26",
    "section": "automation",
    "prompt": "What is 'Dynamic K Retrieval based on Score Margin'?",
    "options": [
      {
        "id": "a",
        "label": "Retrieves candidate chunks dynamically based on score drop-offs (e.g. keep all chunks with score within 10% of top result) rather than hardcoding a fixed K value."
      },
      {
        "id": "b",
        "label": "Always retrieves exactly 100 chunks."
      },
      {
        "id": "c",
        "label": "Retrieves only the single shortest chunk."
      },
      {
        "id": "d",
        "label": "Disables similarity scoring."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_aut_27",
    "section": "automation",
    "prompt": "When automating RAG with LlamaIndex, what is the role of the `QueryEngineTool`?",
    "options": [
      {
        "id": "a",
        "label": "Converts queries into SQL schemas."
      },
      {
        "id": "b",
        "label": "Deletes indexes on query completion."
      },
      {
        "id": "c",
        "label": "Translates queries into binary code."
      },
      {
        "id": "d",
        "label": "Wraps a complete RAG query pipeline into a standard tool interface that autonomous agents can invoke dynamically as part of larger multi-step plans."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_aut_28",
    "section": "automation",
    "prompt": "How does 'Continuous Vector Drift Monitoring' detect when embedding models need re-indexing?",
    "options": [
      {
        "id": "a",
        "label": "Checks if the server hard drive is full."
      },
      {
        "id": "b",
        "label": "Counts the number of registered users."
      },
      {
        "id": "c",
        "label": "Tracks statistical shifts in query embedding distributions and declining retrieval relevance metrics over time as new domain terminology emerges."
      },
      {
        "id": "d",
        "label": "Measures ambient room humidity."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_aut_29",
    "section": "automation",
    "prompt": "In OpenSearch / Elasticsearch vector search, what does 'k-NN with Lucene / Faiss Engine' provide?",
    "options": [
      {
        "id": "a",
        "label": "Disables keyword search in OpenSearch."
      },
      {
        "id": "b",
        "label": "Combines enterprise full-text Lucene inverted indices with high-performance Faiss vector indexing for unified hybrid BM25 and vector search at scale."
      },
      {
        "id": "c",
        "label": "Limits searches to 1 node only."
      },
      {
        "id": "d",
        "label": "Replaces OpenSearch with MySQL."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_aut_30",
    "section": "automation",
    "prompt": "Why should automated document chunking pipelines preserve HTML table and markdown list structure intact?",
    "options": [
      {
        "id": "a",
        "label": "Preserves relational syntax and hierarchical relationships that dense and sparse embedding models require to accurately match complex domain queries."
      },
      {
        "id": "b",
        "label": "Reduces HTML file sizes."
      },
      {
        "id": "c",
        "label": "Forces browsers to render tables in 3D."
      },
      {
        "id": "d",
        "label": "Disables text search on tables."
      }
    ],
    "correctOptionId": "a"
  }
];

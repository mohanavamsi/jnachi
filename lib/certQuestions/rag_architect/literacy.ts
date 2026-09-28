import { CertQuestion } from '../types';

export const RAG_ARCHITECT_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "rag_lit_01",
    "section": "literacy",
    "prompt": "What fundamental limitation of standard dense vector similarity search does 'Hybrid Search' (BM25 + Dense) solve?",
    "options": [
      {
        "id": "a",
        "label": "Dense vector search only works on English text."
      },
      {
        "id": "b",
        "label": "Dense vector search often misses exact lexical keyword matches (e.g. part numbers, acronyms, product SKUs) where semantic embeddings lack lexical specificity."
      },
      {
        "id": "c",
        "label": "Hybrid search eliminates the need for vector databases."
      },
      {
        "id": "d",
        "label": "Dense vector search cannot run on GPU hardware."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_lit_02",
    "section": "literacy",
    "prompt": "In advanced RAG architectures, what is the role of a 'Cross-Encoder Re-ranker' (e.g. Cohere Rerank or BGE-Reranker)?",
    "options": [
      {
        "id": "a",
        "label": "Performs full joint cross-attention between the query and top-K candidate passages retrieved by bi-encoders, producing highly accurate relevance rankings before LLM ingestion."
      },
      {
        "id": "b",
        "label": "Translates documents into three foreign languages."
      },
      {
        "id": "c",
        "label": "Deletes 50% of the retrieved passages randomly."
      },
      {
        "id": "d",
        "label": "Converts text chunks into audio files."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_lit_03",
    "section": "literacy",
    "prompt": "What is 'Contextual Retrieval' (Anthropic method) and how does it prevent context loss during document chunking?",
    "options": [
      {
        "id": "a",
        "label": "Removing all punctuation from document chunks."
      },
      {
        "id": "b",
        "label": "Encrypting each chunk with AES-128."
      },
      {
        "id": "c",
        "label": "Limiting documents to a maximum of 1 paragraph."
      },
      {
        "id": "d",
        "label": "Prepending a short 50-token situational summary of the entire document to each individual chunk before generating embeddings, preserving global context lost in isolation."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_lit_04",
    "section": "literacy",
    "prompt": "In RAG retrieval ranking, how does 'Reciprocal Rank Fusion (RRF)' merge candidate lists from multiple distinct retrieval algorithms?",
    "options": [
      {
        "id": "a",
        "label": "Multiplies raw cosine similarity by word count."
      },
      {
        "id": "b",
        "label": "Selects only documents that appear in all lists."
      },
      {
        "id": "c",
        "label": "Sums the reciprocal of each document's rank position across lists ($RRF\\_Score = \\sum \\frac{1}{k + r_i}$), combining disparate scoring methods without requiring calibrated score normalization."
      },
      {
        "id": "d",
        "label": "Sorts documents alphabetically by author name."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_lit_05",
    "section": "literacy",
    "prompt": "What is the primary trade-off between 'Small Chunk Sizes (e.g. 128 tokens)' vs 'Large Chunk Sizes (e.g. 1024 tokens)' in retrieval accuracy?",
    "options": [
      {
        "id": "a",
        "label": "Small chunks cost 10x more per vector."
      },
      {
        "id": "b",
        "label": "Small chunks yield high embedding retrieval precision but risk missing broader surrounding context; large chunks preserve context but dilute vector specificity and consume LLM context budget."
      },
      {
        "id": "c",
        "label": "Large chunks are only supported on Linux servers."
      },
      {
        "id": "d",
        "label": "Chunk size has zero impact on retrieval accuracy."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_lit_06",
    "section": "literacy",
    "prompt": "How does the 'Parent-Document Retriever' (or Small-to-Big Retrieval) resolve the chunk size trade-off?",
    "options": [
      {
        "id": "a",
        "label": "Embeds small granular sub-chunks for accurate vector similarity matching, but retrieves and passes the corresponding larger parent chunk (or full section) to the LLM for synthesis."
      },
      {
        "id": "b",
        "label": "Requires documents to be authored by senior managers."
      },
      {
        "id": "c",
        "label": "Deletes parent documents after generating sub-chunks."
      },
      {
        "id": "d",
        "label": "Converts sub-chunks into PDF format."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_lit_07",
    "section": "literacy",
    "prompt": "What is 'ColBERT' (Contextualized Late Interaction over BERT) in neural search?",
    "options": [
      {
        "id": "a",
        "label": "A tool for generating marketing copy."
      },
      {
        "id": "b",
        "label": "A legacy relational database engine."
      },
      {
        "id": "c",
        "label": "An algorithm for compressing JPEG images."
      },
      {
        "id": "d",
        "label": "A retrieval model that stores token-level embeddings and computes fine-grained MaxSim late interactions between query and document tokens, achieving near-cross-encoder accuracy at vector search speeds."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_lit_08",
    "section": "literacy",
    "prompt": "What is 'Semantic Chunking' compared to naive fixed-character chunking?",
    "options": [
      {
        "id": "a",
        "label": "Splitting documents into chunks of exactly 50 words."
      },
      {
        "id": "b",
        "label": "Translating every sentence into French."
      },
      {
        "id": "c",
        "label": "Splitting text at natural semantic transition points by calculating rolling embedding distances between consecutive sentences rather than cutting mid-sentence at fixed character counts."
      },
      {
        "id": "d",
        "label": "Deleting whitespace from the document."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_lit_09",
    "section": "literacy",
    "prompt": "In vector indexing, what is the 'HNSW' (Hierarchical Navigable Small World) graph algorithm?",
    "options": [
      {
        "id": "a",
        "label": "A method for encrypting vector databases."
      },
      {
        "id": "b",
        "label": "A multi-layer graph index that enables ultra-fast approximate nearest neighbor (ANN) vector search with logarithmic search complexity ($O(\\log N)$)."
      },
      {
        "id": "c",
        "label": "A system for compressing vector dimensions to 1D."
      },
      {
        "id": "d",
        "label": "A relational SQL join optimizer."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_lit_10",
    "section": "literacy",
    "prompt": "What is 'Query Expansion / Multi-Query Generation' in RAG pipelines?",
    "options": [
      {
        "id": "a",
        "label": "Using an LLM to generate 3 to 5 alternative phrasings and sub-questions from a single user query, executing vector searches for each to overcome vocabulary mismatch."
      },
      {
        "id": "b",
        "label": "Translating user queries into SQL tables."
      },
      {
        "id": "c",
        "label": "Repeating the exact user query 5 times sequentially."
      },
      {
        "id": "d",
        "label": "Capitalizing all letters in the user query."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_lit_11",
    "section": "literacy",
    "prompt": "What is 'Hypothetical Document Embeddings' (HyDE) in RAG query enhancement?",
    "options": [
      {
        "id": "a",
        "label": "Hiding document files in encrypted folders."
      },
      {
        "id": "b",
        "label": "Deleting documents that are hypothetical."
      },
      {
        "id": "c",
        "label": "Searching for documents that do not exist."
      },
      {
        "id": "d",
        "label": "Prompting an LLM to generate a hypothetical answer to the user's query, embedding that synthetic answer, and using its embedding vector to retrieve real documents with similar latent structures."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_lit_12",
    "section": "literacy",
    "prompt": "What is the primary difference between 'Cosine Similarity', 'Dot Product', and 'Euclidean (L2) Distance' for normalized vector embeddings?",
    "options": [
      {
        "id": "a",
        "label": "Cosine similarity only works on 2D vectors."
      },
      {
        "id": "b",
        "label": "Dot product requires GPU acceleration; Euclidean distance runs only on CPUs."
      },
      {
        "id": "c",
        "label": "For unit-normalized vectors ($||v|| = 1$), Cosine Similarity and Dot Product produce identical relative rankings, while L2 distance produces an inverse ranking ($D^2 = 2 - 2\\cos\\theta$)."
      },
      {
        "id": "d",
        "label": "They are completely unrelated and cannot be compared."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_lit_13",
    "section": "literacy",
    "prompt": "In RAG evaluation, what does the 'Context Precision' metric measure?",
    "options": [
      {
        "id": "a",
        "label": "The physical RAM memory used by the vector index."
      },
      {
        "id": "b",
        "label": "Whether the truly relevant chunks in the retrieved context are ranked higher at top positions ($k=1, 2$) rather than buried at the bottom of the retrieval list."
      },
      {
        "id": "c",
        "label": "The number of words in the user query."
      },
      {
        "id": "d",
        "label": "The time taken to connect to the database."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_lit_14",
    "section": "literacy",
    "prompt": "What is 'Lost in the Middle' phenomenon in long-context LLM generation?",
    "options": [
      {
        "id": "a",
        "label": "The empirical tendency of language models to recall information placed at the very beginning or end of a long context window significantly better than information in the middle."
      },
      {
        "id": "b",
        "label": "When network packets are dropped in transit."
      },
      {
        "id": "c",
        "label": "When a developer deletes the middle lines of a script."
      },
      {
        "id": "d",
        "label": "When database indexes become fragmented."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_lit_15",
    "section": "literacy",
    "prompt": "How does 'Metadata Filtering / Pre-Filtering' enhance vector search precision in multi-tenant enterprise RAG?",
    "options": [
      {
        "id": "a",
        "label": "Deletes metadata from documents before indexing."
      },
      {
        "id": "b",
        "label": "Converts metadata tags into audio files."
      },
      {
        "id": "c",
        "label": "Requires users to write metadata in SQL format."
      },
      {
        "id": "d",
        "label": "Restricts vector similarity search exclusively to chunks matching specific payload attributes (e.g. `department_id = 'finance' AND year >= 2024`), eliminating cross-tenant leakage."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_lit_16",
    "section": "literacy",
    "prompt": "What is 'BM25' (Best Matching 25) algorithm in lexical search?",
    "options": [
      {
        "id": "a",
        "label": "A machine learning model trained on 25 million images."
      },
      {
        "id": "b",
        "label": "A database compression algorithm."
      },
      {
        "id": "c",
        "label": "A probabilistic ranking function that scores document relevance based on Term Frequency (TF) with saturation limits and Inverse Document Frequency (IDF) document length normalization."
      },
      {
        "id": "d",
        "label": "A hardware graphics driver."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_lit_17",
    "section": "literacy",
    "prompt": "What is 'GraphRAG' (Graph-Augmented Retrieval-Augmented Generation)?",
    "options": [
      {
        "id": "a",
        "label": "Renders 3D bar graphs of search metrics."
      },
      {
        "id": "b",
        "label": "Combines knowledge graph entity-relationship extraction with community summarization, enabling multi-hop cross-document reasoning and global corpus synthesis."
      },
      {
        "id": "c",
        "label": "Replaces text search with image search."
      },
      {
        "id": "d",
        "label": "Limits retrieval to a single text document."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_lit_18",
    "section": "literacy",
    "prompt": "In RAG pipelines, what is 'Self-RAG' (Self-Reflective Retrieval-Augmented Generation)?",
    "options": [
      {
        "id": "a",
        "label": "A framework where the model dynamically outputs reflection tokens to decide whether retrieval is needed, evaluates retrieved passage relevance, and critiques its own generated output."
      },
      {
        "id": "b",
        "label": "A vector database that updates its own source code."
      },
      {
        "id": "c",
        "label": "An agent that refuses all user queries."
      },
      {
        "id": "d",
        "label": "A script that runs unit tests on vectors."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_lit_19",
    "section": "literacy",
    "prompt": "What is 'Corrective RAG' (CRAG)?",
    "options": [
      {
        "id": "a",
        "label": "A spell-checker for user queries."
      },
      {
        "id": "b",
        "label": "A method for correcting SQL syntax errors."
      },
      {
        "id": "c",
        "label": "A tool for auto-fixing Python indentation."
      },
      {
        "id": "d",
        "label": "A framework that evaluates retrieval confidence; if confidence is low, it triggers corrective fallback searches (e.g. web search) or context filtering before generating an answer."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_lit_20",
    "section": "literacy",
    "prompt": "What does 'Dimensionality Reduction via Matryoshka Embeddings' (MRL) enable in vector search?",
    "options": [
      {
        "id": "a",
        "label": "Compresses text into Russian language translations."
      },
      {
        "id": "b",
        "label": "Converts floating point numbers to boolean values."
      },
      {
        "id": "c",
        "label": "Allows truncating high-dimensional embedding vectors (e.g. from 1536d to 256d) with minimal loss in retrieval accuracy, saving 80% RAM and accelerating vector search speeds."
      },
      {
        "id": "d",
        "label": "Limits vector indexes to 100 vectors."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_lit_21",
    "section": "literacy",
    "prompt": "What is 'Context Recall' in RAG evaluation benchmarks?",
    "options": [
      {
        "id": "a",
        "label": "The speed of database disk read operations."
      },
      {
        "id": "b",
        "label": "The proportion of ground-truth reference information needed to answer the question that was successfully retrieved in the context passages."
      },
      {
        "id": "c",
        "label": "The number of characters in the response."
      },
      {
        "id": "d",
        "label": "The temperature setting of the LLM."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_lit_22",
    "section": "literacy",
    "prompt": "In PDF ingestion pipelines, why is 'Layout-Aware Parsing' (e.g. Marker / Docling / Unstructured) critical for RAG?",
    "options": [
      {
        "id": "a",
        "label": "Extracts multi-column text, embedded tables, and document hierarchies into structured Markdown rather than scrambling text order through naive OCR extraction."
      },
      {
        "id": "b",
        "label": "Converts PDF documents into video clips."
      },
      {
        "id": "c",
        "label": "Deletes all tables from PDF files."
      },
      {
        "id": "d",
        "label": "Changes PDF font styles to Comic Sans."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_lit_23",
    "section": "literacy",
    "prompt": "What is 'Vector Index Quantization' (e.g. Product Quantization / Scalar Quantization)?",
    "options": [
      {
        "id": "a",
        "label": "Rounds all document word counts to the nearest 10."
      },
      {
        "id": "b",
        "label": "Limits search queries to quantum computers."
      },
      {
        "id": "c",
        "label": "Disables vector similarity calculations."
      },
      {
        "id": "d",
        "label": "Compresses 32-bit floating point vector coordinates into 8-bit integers or codebooks, reducing vector database RAM consumption by 75%-95% with negligible recall drop."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_lit_24",
    "section": "literacy",
    "prompt": "What is 'Adaptive Retrieval Thresholding' in production RAG systems?",
    "options": [
      {
        "id": "a",
        "label": "Limiting retrieval to 1 chunk per hour."
      },
      {
        "id": "b",
        "label": "Deleting low-scoring chunks from the vector database permanently."
      },
      {
        "id": "c",
        "label": "Dynamically filtering out retrieved chunks whose relevance score falls below a confidence threshold, preventing the LLM from being distracted by irrelevant noisy chunks."
      },
      {
        "id": "d",
        "label": "Setting all similarity scores to 1.0."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_lit_25",
    "section": "literacy",
    "prompt": "In enterprise RAG, what is 'Document Chunk Overlap' (e.g. chunk size 500 with 50-token overlap)?",
    "options": [
      {
        "id": "a",
        "label": "Creating duplicate documents in the database."
      },
      {
        "id": "b",
        "label": "Repeating the final tokens of Chunk N at the beginning of Chunk N+1 to prevent critical sentences and phrases from being split across chunk boundaries."
      },
      {
        "id": "c",
        "label": "Uploading documents twice to two different cloud accounts."
      },
      {
        "id": "d",
        "label": "Printing chunks on overlapping paper."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_lit_26",
    "section": "literacy",
    "prompt": "What is 'Chunk Enrichment via Metadata Ingestion' in vector pipelines?",
    "options": [
      {
        "id": "a",
        "label": "Attaching structured metadata fields (author, publication_date, section_header, document_title, permissions) to chunk payloads for filtered hybrid search."
      },
      {
        "id": "b",
        "label": "Adding random words to the end of chunks."
      },
      {
        "id": "c",
        "label": "Translating metadata into binary numbers."
      },
      {
        "id": "d",
        "label": "Deleting document titles to save disk space."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_lit_27",
    "section": "literacy",
    "prompt": "What is 'RAPTOR' (Recursive Abstractive Processing for Tree-Organized Retrieval)?",
    "options": [
      {
        "id": "a",
        "label": "A dinosaur classification database."
      },
      {
        "id": "b",
        "label": "A hardware network switch."
      },
      {
        "id": "c",
        "label": "A fast text editor for Linux."
      },
      {
        "id": "d",
        "label": "A tree-structured indexing framework that recursively clusters and summarizes chunks at multiple abstraction levels, enabling queries across high-level themes and granular facts."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_lit_28",
    "section": "literacy",
    "prompt": "In conversational RAG, what is 'Query Re-Writing / Contextual Query Disambiguation'?",
    "options": [
      {
        "id": "a",
        "label": "Translating queries into uppercase letters."
      },
      {
        "id": "b",
        "label": "Deleting all user questions after answering."
      },
      {
        "id": "c",
        "label": "Transforming follow-up conversational questions containing pronouns (e.g. 'What was its revenue in 2023?') into standalone, fully contextualized search queries before retrieval."
      },
      {
        "id": "d",
        "label": "Sending queries to random Wikipedia articles."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_lit_29",
    "section": "literacy",
    "prompt": "What is 'Dense Passage Retrieval (DPR)' compared to traditional BM25?",
    "options": [
      {
        "id": "a",
        "label": "DPR is a physical hard drive format."
      },
      {
        "id": "b",
        "label": "Uses dual-encoder neural networks (trained with contrastive loss) to map queries and passages into a shared continuous semantic vector space, capturing synonyms and concepts."
      },
      {
        "id": "c",
        "label": "DPR only matches exact character strings."
      },
      {
        "id": "d",
        "label": "DPR eliminates the need for embeddings."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_lit_30",
    "section": "literacy",
    "prompt": "Why is 'Grounded Answer Attribution / Source Citation' essential in enterprise RAG applications?",
    "options": [
      {
        "id": "a",
        "label": "Enables human users to audit generated claims against precise source chunk citations (e.g. document title, page number), reducing liability and verifying hallucination absence."
      },
      {
        "id": "b",
        "label": "To increase prompt token expenditure."
      },
      {
        "id": "c",
        "label": "Because copyright law forbids generating text without citations."
      },
      {
        "id": "d",
        "label": "To make answers longer."
      }
    ],
    "correctOptionId": "a"
  }
];

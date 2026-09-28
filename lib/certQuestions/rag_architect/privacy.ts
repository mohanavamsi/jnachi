import { CertQuestion } from '../types';

export const RAG_ARCHITECT_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "rag_priv_01",
    "section": "privacy",
    "prompt": "How does 'Document-Level Access Control (ACL) Enforcement' work in enterprise RAG systems?",
    "options": [
      {
        "id": "a",
        "label": "Relies on the LLM to voluntarily refuse to answer questions about private documents."
      },
      {
        "id": "b",
        "label": "Attaches user and role access control lists (ACLs) to chunk metadata, applying strict pre-filtering during vector search to guarantee users only retrieve authorized documents."
      },
      {
        "id": "c",
        "label": "Encrypts all documents with a single shared global password."
      },
      {
        "id": "d",
        "label": "Deletes private documents from the database after indexing."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_priv_02",
    "section": "privacy",
    "prompt": "What is an 'Embedding Inversion Attack' in vector database security?",
    "options": [
      {
        "id": "a",
        "label": "An adversarial technique that reconstructs recognizable sensitive source text (PII, passwords) directly from raw dense vector embeddings using specialized decoder models."
      },
      {
        "id": "b",
        "label": "Inverting the mathematical signs of vector coordinates."
      },
      {
        "id": "c",
        "label": "A disk failure in vector storage hardware."
      },
      {
        "id": "d",
        "label": "Searching for vectors backwards."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_priv_03",
    "section": "privacy",
    "prompt": "Why is 'Post-Retrieval Filtering' insufficient for enforcing strict data security in multi-tenant RAG?",
    "options": [
      {
        "id": "a",
        "label": "Post-retrieval filtering runs too fast."
      },
      {
        "id": "b",
        "label": "It requires paid cloud licenses."
      },
      {
        "id": "c",
        "label": "Vector databases do not support post-filtering."
      },
      {
        "id": "d",
        "label": "Top-K vector search retrieves private passages that occupy limited candidate slots before post-filtering drops them, potentially returning zero relevant results to the user."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_priv_04",
    "section": "privacy",
    "prompt": "What is 'RAG Poisoning / Context Injection' in enterprise document repositories?",
    "options": [
      {
        "id": "a",
        "label": "Corrupting PDF binary file headers."
      },
      {
        "id": "b",
        "label": "A database memory leak."
      },
      {
        "id": "c",
        "label": "When an attacker uploads a seemingly benign document containing hidden prompt injection instructions that hijack the LLM when retrieved into context."
      },
      {
        "id": "d",
        "label": "Deleting document authors."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_priv_05",
    "section": "privacy",
    "prompt": "How should sensitive Personal Identifiable Information (PII) be handled before generating document vector embeddings?",
    "options": [
      {
        "id": "a",
        "label": "Embed raw PII without encryption or masking."
      },
      {
        "id": "b",
        "label": "Pass all text through automated PII redaction/pseudonymization pipelines (e.g. Microsoft Presidio) to mask SSNs, credit cards, and health identifiers prior to embedding."
      },
      {
        "id": "c",
        "label": "Delete all numbers from all documents."
      },
      {
        "id": "d",
        "label": "Store PII in public vector metadata fields."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_priv_06",
    "section": "privacy",
    "prompt": "In multi-tenant SaaS RAG applications, what is the gold-standard vector isolation strategy?",
    "options": [
      {
        "id": "a",
        "label": "Strict tenant-level cryptographic isolation, separate vector namespaces/collections, and mandatory tenant-ID metadata pre-filters enforced at the database proxy layer."
      },
      {
        "id": "b",
        "label": "Mixing all customer vectors in a single shared unpartitioned index."
      },
      {
        "id": "c",
        "label": "Trusting client frontend code to request only their own tenant ID."
      },
      {
        "id": "d",
        "label": "Disabling user authentication."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_priv_07",
    "section": "privacy",
    "prompt": "How can enterprise RAG systems comply with GDPR 'Right to be Forgotten' when vectors cannot be individually edited?",
    "options": [
      {
        "id": "a",
        "label": "Ignoring deletion requests because vectors are anonymous numbers."
      },
      {
        "id": "b",
        "label": "Deleting the entire vector database and all customer data."
      },
      {
        "id": "c",
        "label": "Setting vector values to zero without deleting records."
      },
      {
        "id": "d",
        "label": "Maintaining a document-to-vector mapping registry that enables executing atomic batch deletions of all chunk vector IDs associated with a specific user or document."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_priv_08",
    "section": "privacy",
    "prompt": "What is 'Prompt Leakage via Retrieved Context'?",
    "options": [
      {
        "id": "a",
        "label": "When a developer accidentally emails a prompt to a colleague."
      },
      {
        "id": "b",
        "label": "When prompts are printed to the terminal."
      },
      {
        "id": "c",
        "label": "When confidential source passages retrieved from internal documents are inadvertently included in the LLM response generated for an unauthorized user."
      },
      {
        "id": "d",
        "label": "When a database connection drops."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_priv_09",
    "section": "privacy",
    "prompt": "How does 'Encrypted Vector Search' (e.g. searchable encryption / homomorphic vector distance) enhance cloud security?",
    "options": [
      {
        "id": "a",
        "label": "Disables vector similarity search completely."
      },
      {
        "id": "b",
        "label": "Enables computing vector distance approximations over encrypted vector data without decrypting the underlying embeddings or text payloads in cloud memory."
      },
      {
        "id": "c",
        "label": "Encrypts the server power cable."
      },
      {
        "id": "d",
        "label": "Translates vectors into RSA private keys."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_priv_10",
    "section": "privacy",
    "prompt": "In HIPAA-compliant medical RAG systems, what audit logging must be enforced on vector queries?",
    "options": [
      {
        "id": "a",
        "label": "Immutable audit trails recording user identity, timestamp, patient ID accessed, exact query text, retrieved chunk IDs, and the generated clinical response."
      },
      {
        "id": "b",
        "label": "Only tracking total monthly token spend."
      },
      {
        "id": "c",
        "label": "Deleting all query logs immediately to protect privacy."
      },
      {
        "id": "d",
        "label": "Recording server fan speeds."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_priv_11",
    "section": "privacy",
    "prompt": "What is 'Cross-Tenant Payload Leakage' in shared vector database clusters?",
    "options": [
      {
        "id": "a",
        "label": "When two tenants have the same company name."
      },
      {
        "id": "b",
        "label": "When network cables cross in the server rack."
      },
      {
        "id": "c",
        "label": "When a database password expires."
      },
      {
        "id": "d",
        "label": "When vector metadata payload fields containing Tenant A's private text are returned in search results for Tenant B due to missing namespace filter assertions."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_priv_12",
    "section": "privacy",
    "prompt": "How can an enterprise RAG system defend against 'Membership Inference Attacks' against embedding models?",
    "options": [
      {
        "id": "a",
        "label": "Allowing unlimited raw floating-point score exports."
      },
      {
        "id": "b",
        "label": "Disabling user login."
      },
      {
        "id": "c",
        "label": "Adding differential privacy noise during embedding model training and restricting raw similarity score outputs to coarse confidence bands."
      },
      {
        "id": "d",
        "label": "Making all vectors publicly downloadable."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_priv_13",
    "section": "privacy",
    "prompt": "Why should vector database metadata fields avoid storing unencrypted plaintext copies of full source documents?",
    "options": [
      {
        "id": "a",
        "label": "Because vector databases can only store numbers."
      },
      {
        "id": "b",
        "label": "If the vector database is compromised, plaintext metadata exposes all enterprise documents; instead, store chunk text in encrypted object stores with KMS keys."
      },
      {
        "id": "c",
        "label": "Because plaintext metadata makes vectors 100x slower."
      },
      {
        "id": "d",
        "label": "Because copyright law forbids storing metadata."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_priv_14",
    "section": "privacy",
    "prompt": "What is 'Shadow Data Ingestion' risk in automated enterprise RAG pipelines?",
    "options": [
      {
        "id": "a",
        "label": "Ingesting unvetted internal file shares, draft folders, or Slack channels that contain confidential salary spreadsheets, passwords, or merger memos without authorization."
      },
      {
        "id": "b",
        "label": "Ingesting files during nighttime hours."
      },
      {
        "id": "c",
        "label": "Ingesting black-and-white PDF files."
      },
      {
        "id": "d",
        "label": "Saving backup copies of files."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_priv_15",
    "section": "privacy",
    "prompt": "How does 'Dual-Key Encryption at Rest' protect enterprise vector indexes in managed cloud providers (e.g. Pinecone / AWS OpenSearch)?",
    "options": [
      {
        "id": "a",
        "label": "Requires two human users to type passwords simultaneously."
      },
      {
        "id": "b",
        "label": "Encrypts vectors twice with the same key."
      },
      {
        "id": "c",
        "label": "Locks server room doors with physical keys."
      },
      {
        "id": "d",
        "label": "Combines cloud provider default encryption with customer-managed encryption keys (CMEK) via AWS KMS / HashiCorp Vault, allowing instant cryptographic erasure."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_priv_16",
    "section": "privacy",
    "prompt": "In RAG guardrailing, what is 'Context-Aware Output Redaction'?",
    "options": [
      {
        "id": "a",
        "label": "Deleting all vowels from the response."
      },
      {
        "id": "b",
        "label": "Translating responses into French."
      },
      {
        "id": "c",
        "label": "Scanning generated answers against security classification levels of the requesting user, masking classified project names or numbers before delivery."
      },
      {
        "id": "d",
        "label": "Printing text in red font."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_priv_17",
    "section": "privacy",
    "prompt": "What is 'Adversarial Chunk Smuggling' in external document retrieval?",
    "options": [
      {
        "id": "a",
        "label": "Compressing chunks into ZIP files."
      },
      {
        "id": "b",
        "label": "An attacker hiding prompt injection commands inside tiny font text, white-on-white text, or invisible PDF annotations that trigger during document parsing."
      },
      {
        "id": "c",
        "label": "Uploading documents with long filenames."
      },
      {
        "id": "d",
        "label": "Renaming PDF files to .txt."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_priv_18",
    "section": "privacy",
    "prompt": "How does 'Pre-Embedding Document Classification' prevent sensitive policy violations?",
    "options": [
      {
        "id": "a",
        "label": "Runs a classifier to detect restricted data categories (e.g. legal holds, trade secrets, HR disciplinary records) and routes them to high-security isolated vector vaults."
      },
      {
        "id": "b",
        "label": "Deletes all documents that contain the word 'confidential'."
      },
      {
        "id": "c",
        "label": "Translates all documents into English."
      },
      {
        "id": "d",
        "label": "Checks if document file sizes are even numbers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_priv_19",
    "section": "privacy",
    "prompt": "What is 'Ephemeral Query Embedding Discard Policy'?",
    "options": [
      {
        "id": "a",
        "label": "Saving all query embeddings forever in public files."
      },
      {
        "id": "b",
        "label": "Sharing query embeddings across all users."
      },
      {
        "id": "c",
        "label": "Deleting the vector database on every query."
      },
      {
        "id": "d",
        "label": "Immediately discarding user query embeddings and search history from memory and logs after generating the response, preventing query accumulation."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_priv_20",
    "section": "privacy",
    "prompt": "In multi-tenant vector databases, why is 'Strict Metric Telemetry Scoping' necessary?",
    "options": [
      {
        "id": "a",
        "label": "Disables all server monitoring."
      },
      {
        "id": "b",
        "label": "Hides server CPU metrics from engineers."
      },
      {
        "id": "c",
        "label": "Prevents operational monitoring dashboards from leaking query strings, document titles, or tenant identifiers across organizational boundaries in Datadog/Grafana."
      },
      {
        "id": "d",
        "label": "Restricts dashboards to 1 user only."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_priv_21",
    "section": "privacy",
    "prompt": "What is 'Vector Database RBAC' (Role-Based Access Control)?",
    "options": [
      {
        "id": "a",
        "label": "Assigning random passwords to all users."
      },
      {
        "id": "b",
        "label": "Enforcing distinct administrative roles (e.g. Index Admin, Write Only, Read Only, Auditor) to restrict who can insert, query, or delete vector collections."
      },
      {
        "id": "c",
        "label": "Requiring users to be senior managers."
      },
      {
        "id": "d",
        "label": "Disabling access for remote employees."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_priv_22",
    "section": "privacy",
    "prompt": "How does 'Watermarking of Retrieved Citations' protect enterprise IP?",
    "options": [
      {
        "id": "a",
        "label": "Embeds invisible cryptographic verification tokens or watermarks into generated answers and cited sources to trace unauthorized corporate data leaks."
      },
      {
        "id": "b",
        "label": "Adds a blue background to all web pages."
      },
      {
        "id": "c",
        "label": "Deletes source document authors."
      },
      {
        "id": "d",
        "label": "Translates citations into Greek."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_priv_23",
    "section": "privacy",
    "prompt": "Why should RAG system developers restrict embedding models from fine-tuning on unredacted customer data?",
    "options": [
      {
        "id": "a",
        "label": "Fine-tuning reduces model retrieval accuracy to zero."
      },
      {
        "id": "b",
        "label": "Fine-tuning is prohibited by cloud providers."
      },
      {
        "id": "c",
        "label": "Fine-tuned models can only run on mobile phones."
      },
      {
        "id": "d",
        "label": "Fine-tuned model weights can memorize private training sequences, leaking customer data through weight extraction or gradient inversion attacks."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_priv_24",
    "section": "privacy",
    "prompt": "What is 'Side-Channel Timing Attack on Vector Search'?",
    "options": [
      {
        "id": "a",
        "label": "Measuring server clock drift."
      },
      {
        "id": "b",
        "label": "A hardware glitch in GPU power supplies."
      },
      {
        "id": "c",
        "label": "An attacker measuring subtle differences in vector query latency to deduce whether specific sensitive documents exist in a private index partition."
      },
      {
        "id": "d",
        "label": "A network firewall misconfiguration."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_priv_25",
    "section": "privacy",
    "prompt": "How does 'Zero-Trust Retrieval Pipeline Architecture' protect enterprise RAG?",
    "options": [
      {
        "id": "a",
        "label": "Assumes all internal network traffic is completely trusted."
      },
      {
        "id": "b",
        "label": "Authenticates, authorizes, and encrypts every intermediate step: query ingestion -> vector lookup -> reranker -> LLM synthesis -> response delivery."
      },
      {
        "id": "c",
        "label": "Disables all user passwords."
      },
      {
        "id": "d",
        "label": "Deletes all database access logs."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_priv_26",
    "section": "privacy",
    "prompt": "What is 'Audit Replay Capability' in compliant RAG systems?",
    "options": [
      {
        "id": "a",
        "label": "The ability to reconstruct the exact context passages, model prompt, and system configuration used to generate a past answer for regulatory compliance audits."
      },
      {
        "id": "b",
        "label": "Playing audio recordings of team meetings."
      },
      {
        "id": "c",
        "label": "Re-running all database queries from scratch."
      },
      {
        "id": "d",
        "label": "Restarting the production server on command."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "rag_priv_27",
    "section": "privacy",
    "prompt": "How does 'Automated Document Expiration / Data Retention Policy' work in vector stores?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all documents after 24 hours regardless of policy."
      },
      {
        "id": "b",
        "label": "Moves expired vectors to public folders."
      },
      {
        "id": "c",
        "label": "Sets vector coordinate values to negative numbers."
      },
      {
        "id": "d",
        "label": "Associates TTL / expiration timestamps with chunk metadata and runs automated background purge jobs to delete vectors past their compliance retention window."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "rag_priv_28",
    "section": "privacy",
    "prompt": "What is 'Secure Key-Value Document Store Pairing' in RAG architecture?",
    "options": [
      {
        "id": "a",
        "label": "Storing passwords in plaintext text files."
      },
      {
        "id": "b",
        "label": "Writing document text on local USB drives."
      },
      {
        "id": "c",
        "label": "Storing anonymous vector embeddings in the vector index while storing actual document text in a secure, encrypted KV store accessible only via authorized decryption keys."
      },
      {
        "id": "d",
        "label": "Disabling database indexing."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "rag_priv_29",
    "section": "privacy",
    "prompt": "In RAG pipelines, how does 'Prompt Isolation with XML Tagging' mitigate prompt injection in retrieved passages?",
    "options": [
      {
        "id": "a",
        "label": "Converts text to HTML tables."
      },
      {
        "id": "b",
        "label": "Encapsulates retrieved passages inside strict `<context>` tags and explicitly instructs the model that text inside tags is untrusted reference data, not executable instructions."
      },
      {
        "id": "c",
        "label": "Deletes XML tags before passing to the model."
      },
      {
        "id": "d",
        "label": "Forces all text to be rendered in uppercase."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "rag_priv_30",
    "section": "privacy",
    "prompt": "Why should enterprise RAG systems enforce 'Private Virtual Cloud Endpoints' (e.g. AWS PrivateLink) for vector databases?",
    "options": [
      {
        "id": "a",
        "label": "Ensures all database query traffic and document payloads travel exclusively over private cloud backbones, never traversing the public internet."
      },
      {
        "id": "b",
        "label": "Increases internet download speeds."
      },
      {
        "id": "c",
        "label": "Allows unauthenticated access from any public IP."
      },
      {
        "id": "d",
        "label": "Disables cloud encryption."
      }
    ],
    "correctOptionId": "a"
  }
];

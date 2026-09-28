import { CertQuestion } from '../types';

export const LLMOPS_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "llmops_gro_01",
    "section": "growth",
    "prompt": "When scaling an enterprise LLM gateway to handle 50 million daily requests, what routing strategy minimizes cost while preserving quality?",
    "options": [
      {
        "id": "a",
        "label": "Routing all requests to the largest frontier model available regardless of complexity."
      },
      {
        "id": "b",
        "label": "Model Cascading: routing simple classification and extraction tasks to small models (e.g. 8B/mini) and escalating complex reasoning to 70B+ models only when confidence scores are low."
      },
      {
        "id": "c",
        "label": "Executing every query 3 times and picking the longest response."
      },
      {
        "id": "d",
        "label": "Disabling model inference during business hours."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_gro_02",
    "section": "growth",
    "prompt": "In multi-node vLLM deployment, how does 'Ray Cluster Multi-Node Serving' scale 405B parameter models?",
    "options": [
      {
        "id": "a",
        "label": "Uses Ray to orchestrate Tensor Parallelism within nodes (via NVLink) and Pipeline Parallelism across nodes (via InfiniBand RDMA), pooling 16+ H100 GPUs into a unified serving cluster."
      },
      {
        "id": "b",
        "label": "Runs the model on 100 Raspberry Pi devices."
      },
      {
        "id": "c",
        "label": "Compresses the model to 1 Megabyte."
      },
      {
        "id": "d",
        "label": "Disables distributed communication."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_gro_03",
    "section": "growth",
    "prompt": "What is 'GPU Cluster Spot Instance Orchestration with Graceful Eviction Handling' in LLMOps cost reduction?",
    "options": [
      {
        "id": "a",
        "label": "Shuts down the application whenever spot instances are terminated."
      },
      {
        "id": "b",
        "label": "Never uses spot instances under any circumstances."
      },
      {
        "id": "c",
        "label": "Runs inference only when spot prices are zero."
      },
      {
        "id": "d",
        "label": "Leverages discounted cloud spot GPU instances (up to 70% cheaper); upon receiving cloud 2-minute interruption notices, drains in-flight requests and shifts traffic to on-demand nodes."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_gro_04",
    "section": "growth",
    "prompt": "How does 'Prefix Caching across Shared Prompts' cut inference latency and costs in high-concurrency systems?",
    "options": [
      {
        "id": "a",
        "label": "Deletes system prompts to save memory."
      },
      {
        "id": "b",
        "label": "Caches responses in user browser storage."
      },
      {
        "id": "c",
        "label": "Computes the Key-Value (KV) attention cache for static system prompts and few-shot examples once, sharing cached states across all concurrent user requests."
      },
      {
        "id": "d",
        "label": "Translates prompts to binary."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_gro_05",
    "section": "growth",
    "prompt": "What is 'Dynamic Batch Size Tuning based on GPU Memory Saturation' in TensorRT-LLM?",
    "options": [
      {
        "id": "a",
        "label": "Fixes batch size to 1 permanently."
      },
      {
        "id": "b",
        "label": "Adjusts maximum batch sizes and max queue delays in real time based on active KV cache allocation percentages, maximizing tokens/second without triggering OOM errors."
      },
      {
        "id": "c",
        "label": "Sets batch size to 1,000,000."
      },
      {
        "id": "d",
        "label": "Disables batching."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_gro_06",
    "section": "growth",
    "prompt": "When benchmarking LLM serving architectures, what does the 'Tokens per Second per Dollar (TPS/$)' KPI measure?",
    "options": [
      {
        "id": "a",
        "label": "The economic throughput efficiency of an infrastructure deployment, calculating how many generation tokens are produced per dollar of cloud hardware or API spend."
      },
      {
        "id": "b",
        "label": "The cost of printing text on paper."
      },
      {
        "id": "c",
        "label": "The salary of the AI engineer."
      },
      {
        "id": "d",
        "label": "The stock price of GPU manufacturers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_gro_07",
    "section": "growth",
    "prompt": "How does 'FP8 Precision (8-bit Floating Point)' accelerate inference on NVIDIA Hopper / Ada Lovelace GPUs?",
    "options": [
      {
        "id": "a",
        "label": "Slows down inference by 50%."
      },
      {
        "id": "b",
        "label": "Deletes 8 layers from the neural network."
      },
      {
        "id": "c",
        "label": "Forces models to output 8 words only."
      },
      {
        "id": "d",
        "label": "Doubles tensor core compute throughput and cuts memory bandwidth requirements in half compared to FP16, with minimal degradation in model perplexity."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_gro_08",
    "section": "growth",
    "prompt": "What is 'Distributed Tracing with OpenTelemetry across Microservice LLM Chains'?",
    "options": [
      {
        "id": "a",
        "label": "Prints timing statements to terminal windows."
      },
      {
        "id": "b",
        "label": "Draws circuit diagrams of server motherboards."
      },
      {
        "id": "c",
        "label": "Propagates trace headers across frontend, API gateway, vector store, reranker, and LLM inference engine to visualize end-to-end latency breakdowns in Datadog/Jaeger."
      },
      {
        "id": "d",
        "label": "Measures internet cable lengths."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_gro_09",
    "section": "growth",
    "prompt": "How does 'Multi-Region Active-Active LLM Failover' maintain 99.99% uptime?",
    "options": [
      {
        "id": "a",
        "label": "Deploys all servers in a single physical building."
      },
      {
        "id": "b",
        "label": "Distributes live inference traffic across multiple cloud regions (e.g. US-East, US-West, EU-West) with health-checked DNS and global load balancers, auto-routing around regional outages."
      },
      {
        "id": "c",
        "label": "Requires users to select their cloud region manually on errors."
      },
      {
        "id": "d",
        "label": "Disables regional replication."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_gro_10",
    "section": "growth",
    "prompt": "What is 'Semantic Cache Cluster Partitioning in Redis Enterprise'?",
    "options": [
      {
        "id": "a",
        "label": "Shards vector cache embeddings across clustered Redis nodes with multi-threaded vector indexing, serving cached answers at sub-5ms latencies for millions of queries."
      },
      {
        "id": "b",
        "label": "Stores cache data in text files."
      },
      {
        "id": "c",
        "label": "Deletes all cache keys every hour."
      },
      {
        "id": "d",
        "label": "Limits cache to 1,000 entries."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_gro_11",
    "section": "growth",
    "prompt": "How does 'Automated Prompt Regression Testing with CI/CD Gateways' prevent production breaks?",
    "options": [
      {
        "id": "a",
        "label": "Tests prompts manually once per year."
      },
      {
        "id": "b",
        "label": "Deploys prompts directly to production without testing."
      },
      {
        "id": "c",
        "label": "Deletes failed prompt commits."
      },
      {
        "id": "d",
        "label": "Runs automated benchmark suites comparing candidate prompt outputs against ground truth on every git push, blocking deployments if accuracy or schema conformance drops."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_gro_12",
    "section": "growth",
    "prompt": "What is 'Dynamic Token Budgeting per Request Complexity'?",
    "options": [
      {
        "id": "a",
        "label": "Sets all completions to a hard limit of 50 tokens."
      },
      {
        "id": "b",
        "label": "Allows all completions to generate 100,000 tokens."
      },
      {
        "id": "c",
        "label": "Assigns max token generation limits dynamically (e.g. 150 tokens for classification vs 2000 tokens for long-form synthesis) based on task intent classification."
      },
      {
        "id": "d",
        "label": "Charges users a fee per character."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_gro_13",
    "section": "growth",
    "prompt": "In LLM infrastructure, how does 'MIG (Multi-Instance GPU)' on NVIDIA A100 / H100 optimize hardware utilization?",
    "options": [
      {
        "id": "a",
        "label": "Connects 7 GPUs with physical wires."
      },
      {
        "id": "b",
        "label": "Partitions a physical GPU into up to 7 hardware-isolated GPU instances with dedicated memory and compute cores, allowing multiple small models to run concurrently on one GPU."
      },
      {
        "id": "c",
        "label": "Overclocks GPU clock frequencies by 700%."
      },
      {
        "id": "d",
        "label": "Disables GPU compute cores."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_gro_14",
    "section": "growth",
    "prompt": "How does 'Synthetic Data Generation via Rejection Sampling' scale fine-tuning datasets?",
    "options": [
      {
        "id": "a",
        "label": "Prompts a frontier model to generate multiple candidate reasoning paths, evaluates each with automated unit tests/verifiers, and keeps only verified correct solutions for training."
      },
      {
        "id": "b",
        "label": "Keeps all generated answers without verification."
      },
      {
        "id": "c",
        "label": "Deletes the entire training dataset."
      },
      {
        "id": "d",
        "label": "Copies raw text from Wikipedia."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_gro_15",
    "section": "growth",
    "prompt": "What is 'Zero-Downtime Model Rolling Upgrades in Kubernetes'?",
    "options": [
      {
        "id": "a",
        "label": "Terminates all pods at once and deploys the new version."
      },
      {
        "id": "b",
        "label": "Deletes the Kubernetes cluster on every deploy."
      },
      {
        "id": "c",
        "label": "Disables rolling updates."
      },
      {
        "id": "d",
        "label": "Spins up new model pods with updated weights, waits for health checks and warmups to pass, gradually shifts traffic over, and terminates old pods without dropping user requests."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_gro_16",
    "section": "growth",
    "prompt": "How does 'Cost per Successful Task (CPST)' provide a better business KPI than raw cost-per-token?",
    "options": [
      {
        "id": "a",
        "label": "Measures only the hardware electricity bill."
      },
      {
        "id": "b",
        "label": "Calculates cost based on employee count."
      },
      {
        "id": "c",
        "label": "Accounts for wasted tokens consumed by failed attempts, retries, and hallucinations, measuring the true business cost required to achieve an accurate, verified outcome."
      },
      {
        "id": "d",
        "label": "Ignores model accuracy completely."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_gro_17",
    "section": "growth",
    "prompt": "What is 'Distributed Inference Gateway Load Balancing (Round-Robin vs Least-Loaded-KV)'?",
    "options": [
      {
        "id": "a",
        "label": "Round-robin routes all requests to a single pod."
      },
      {
        "id": "b",
        "label": "Least-Loaded-KV routing routes incoming requests to the specific inference worker pod with the highest free KV-cache block headroom, maximizing cluster throughput."
      },
      {
        "id": "c",
        "label": "Routes requests based on alphabetical user name."
      },
      {
        "id": "d",
        "label": "Disables load balancing."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_gro_18",
    "section": "growth",
    "prompt": "How does 'Automated Hallucination Regression Gate in CI/CD' protect customer-facing products?",
    "options": [
      {
        "id": "a",
        "label": "Computes groundedness and faithfulness scores on a standardized test suite; if candidate prompt/model hallucination rate exceeds 1.5%, deployment is automatically aborted."
      },
      {
        "id": "b",
        "label": "Waits for customer complaints."
      },
      {
        "id": "c",
        "label": "Deploys all changes unconditionally."
      },
      {
        "id": "d",
        "label": "Deletes failed test cases."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_gro_19",
    "section": "growth",
    "prompt": "What is 'Dynamic Temperature and Top-P Adjustments based on Query Intent'?",
    "options": [
      {
        "id": "a",
        "label": "Hardcodes temperature to 2.0 for all queries."
      },
      {
        "id": "b",
        "label": "Changes temperature based on server CPU temperature."
      },
      {
        "id": "c",
        "label": "Disables temperature controls."
      },
      {
        "id": "d",
        "label": "Sets temperature to 0.0 for structured JSON extraction and SQL generation, and 0.7 for creative copywriting, optimizing precision and fluency dynamically."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_gro_20",
    "section": "growth",
    "prompt": "In multi-tenant LLM gateways, how does 'Noisy Neighbor Isolation via Fair Queueing' prevent resource starvation?",
    "options": [
      {
        "id": "a",
        "label": "Blocks all high-volume users permanently."
      },
      {
        "id": "b",
        "label": "Allows one user to consume 100% of GPU resources."
      },
      {
        "id": "c",
        "label": "Uses weighted fair queueing (WFQ) to allocate GPU concurrency slices fairly across tenants, preventing high-volume users from starving smaller users."
      },
      {
        "id": "d",
        "label": "Disables queueing."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_gro_21",
    "section": "growth",
    "prompt": "What is 'Model Sharding with DeepSpeed-Inference'?",
    "options": [
      {
        "id": "a",
        "label": "A tool for compressing images."
      },
      {
        "id": "b",
        "label": "An inference optimization library that optimizes multi-GPU tensor parallelism, kernel fusions, and memory management for ultra-low latency model serving."
      },
      {
        "id": "c",
        "label": "A legacy MySQL database engine."
      },
      {
        "id": "d",
        "label": "A web browser video player."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_gro_22",
    "section": "growth",
    "prompt": "How does 'Continuous Token Stream Health Monitoring' detect stalled or looping generation?",
    "options": [
      {
        "id": "a",
        "label": "Tracks inter-token generation latency and repetitive n-gram loops in streaming responses, auto-terminating generation if a loop or hang exceeds 3 seconds."
      },
      {
        "id": "b",
        "label": "Waits for the user to close the browser."
      },
      {
        "id": "c",
        "label": "Allows infinite loops to run indefinitely."
      },
      {
        "id": "d",
        "label": "Reboots the server on every message."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_gro_23",
    "section": "growth",
    "prompt": "What is 'Automated Prompt Compression with Selective Token Pruning'?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all punctuation."
      },
      {
        "id": "b",
        "label": "Translates prompts into binary."
      },
      {
        "id": "c",
        "label": "Zips prompts into .tar files."
      },
      {
        "id": "d",
        "label": "Prunes low-information grammatical fillers and stopwords from large context documents before inference, reducing token latency and cost by up to 50% without quality loss."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_gro_24",
    "section": "growth",
    "prompt": "In LLMOps infrastructure, what does 'GPU Core Utilization vs Memory Bandwidth Utilization' reveal?",
    "options": [
      {
        "id": "a",
        "label": "They are exact identical metrics."
      },
      {
        "id": "b",
        "label": "Memory bandwidth is only for hard drives."
      },
      {
        "id": "c",
        "label": "High memory bandwidth utilization during decode indicates memory-bound token generation, while high tensor core utilization during prefill indicates compute-bound matrix multiplication."
      },
      {
        "id": "d",
        "label": "GPU utilization is always 100%."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_gro_25",
    "section": "growth",
    "prompt": "How does 'Automated Cross-Cloud LLM Arbitrage' optimize enterprise spend?",
    "options": [
      {
        "id": "a",
        "label": "Manually compares prices in spreadsheets every month."
      },
      {
        "id": "b",
        "label": "Dynamically routes non-latency-sensitive batch generation workloads to whichever cloud provider (AWS, Azure, GCP, Lambda Labs) currently offers the lowest spot GPU or API token rates."
      },
      {
        "id": "c",
        "label": "Charges customers random fees."
      },
      {
        "id": "d",
        "label": "Disables cloud computing."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_gro_26",
    "section": "growth",
    "prompt": "What is 'Automated Post-Deployment Canary Analysis (Kayenta)' in LLMOps?",
    "options": [
      {
        "id": "a",
        "label": "Statistically compares metrics between canary and baseline deployments over a 30-minute evaluation window, automatically triggering rollback if metrics degrade."
      },
      {
        "id": "b",
        "label": "A pet store management software."
      },
      {
        "id": "c",
        "label": "A tool for editing video clips."
      },
      {
        "id": "d",
        "label": "A legacy text editor."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_gro_27",
    "section": "growth",
    "prompt": "How does 'Automated Multi-Turn Conversation Truncation' prevent context exhaustion?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all conversation history on turn 2."
      },
      {
        "id": "b",
        "label": "Disconnects the user chat."
      },
      {
        "id": "c",
        "label": "Sends raw binary data to the model."
      },
      {
        "id": "d",
        "label": "Maintains a sliding window of recent turns while distilling older turns into a consolidated executive summary injected into the system prompt."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_gro_28",
    "section": "growth",
    "prompt": "What is 'Kernel Fusion in TensorRT-LLM'?",
    "options": [
      {
        "id": "a",
        "label": "Merging two physical GPU chips with solder."
      },
      {
        "id": "b",
        "label": "Combining two models into one text file."
      },
      {
        "id": "c",
        "label": "Combines multiple consecutive neural network operations (e.g. LayerNorm + QKV Gemm + RoPE) into a single optimized CUDA kernel, minimizing GPU memory read/write passes."
      },
      {
        "id": "d",
        "label": "Disabling CUDA acceleration."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_gro_29",
    "section": "growth",
    "prompt": "How does 'Automated LLM Performance Alerting on Prometheus P99 Latency' maintain enterprise SLAs?",
    "options": [
      {
        "id": "a",
        "label": "Sends a weekly summary email."
      },
      {
        "id": "b",
        "label": "Fires PagerDuty alerts to on-call platform engineers when p99 Time to First Token (TTFT) exceeds 2,500ms for 3 consecutive minutes, initiating autoscaling or failover."
      },
      {
        "id": "c",
        "label": "Prints errors to terminal stdout only."
      },
      {
        "id": "d",
        "label": "Ignores latency spikes."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_gro_30",
    "section": "growth",
    "prompt": "Why is 'Automated LLM Disaster Recovery Testing' essential in enterprise infrastructure?",
    "options": [
      {
        "id": "a",
        "label": "Regularly simulates primary cloud provider outages in staging to verify that automated failover routers redirect traffic to secondary providers within 15 seconds without data loss."
      },
      {
        "id": "b",
        "label": "To intentionally cause production outages."
      },
      {
        "id": "c",
        "label": "Because cloud providers require mandatory downtime."
      },
      {
        "id": "d",
        "label": "To delete old customer data."
      }
    ],
    "correctOptionId": "a"
  }
];

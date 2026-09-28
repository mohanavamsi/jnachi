import { CertQuestion } from '../types';

export const LLMOPS_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "llmops_aut_01",
    "section": "automation",
    "prompt": "How is an autoscaling vLLM cluster deployed on Kubernetes using Keda and GPU metrics?",
    "options": [
      {
        "id": "a",
        "label": "Scaling pods based purely on website visitor counts."
      },
      {
        "id": "b",
        "label": "Scaling worker pods dynamically based on vLLM Prometheus metrics (e.g. `vllm:num_requests_waiting` and `vllm:gpu_cache_usage_factor`) via a custom KEDA scaler."
      },
      {
        "id": "c",
        "label": "Hardcoding exactly 1 pod in production."
      },
      {
        "id": "d",
        "label": "Restarting pods every 5 minutes."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_aut_02",
    "section": "automation",
    "prompt": "In automated fine-tuning CI/CD pipelines with Hugging Face TRL and Ray Train, what triggers an automated training job?",
    "options": [
      {
        "id": "a",
        "label": "New verified gold-standard preference datasets uploaded to the data registry passing schema validation gates."
      },
      {
        "id": "b",
        "label": "A developer pressing Enter in the terminal."
      },
      {
        "id": "c",
        "label": "The server clock reaching midnight."
      },
      {
        "id": "d",
        "label": "A user leaving a negative review on the website."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_aut_03",
    "section": "automation",
    "prompt": "When serving open-source models with vLLM in Docker containers, what command-line parameter enables multi-GPU tensor parallelism?",
    "options": [
      {
        "id": "a",
        "label": "`--num-cpus 4`"
      },
      {
        "id": "b",
        "label": "`--enable-multithreading`"
      },
      {
        "id": "c",
        "label": "`--gpu-split true`"
      },
      {
        "id": "d",
        "label": "`--tensor-parallel-size 4` (or `-tp 4`) spreading model weights across 4 available CUDA GPUs."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_aut_04",
    "section": "automation",
    "prompt": "How does 'NeMo Guardrails' automate conversational policy and content boundary enforcement in front of LLM endpoints?",
    "options": [
      {
        "id": "a",
        "label": "Encrypts prompt text with AES-256."
      },
      {
        "id": "b",
        "label": "Translates all prompts into German."
      },
      {
        "id": "c",
        "label": "Uses programmable Colang dialogue rails and embedding classifiers to intercept unsafe prompts, steer dialogue flow, and verify output truthfulness before sending to users."
      },
      {
        "id": "d",
        "label": "Limits conversations to exactly 1 turn."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_aut_05",
    "section": "automation",
    "prompt": "What is the purpose of 'MLflow Model Registry / Weights & Biases Artifacts' in automated LLM tracking?",
    "options": [
      {
        "id": "a",
        "label": "Stores user credit card numbers."
      },
      {
        "id": "b",
        "label": "Tracks model weight checkpoints, training hyperparameters, loss curves, evaluation benchmarks, and promotes approved models across staging/production stages."
      },
      {
        "id": "c",
        "label": "Generates HTML CSS templates."
      },
      {
        "id": "d",
        "label": "Compiles Python code into machine assembly."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_aut_06",
    "section": "automation",
    "prompt": "How can an automated LLM gateway (e.g. LiteLLM Proxy / Portkey) enforce team-level monthly budget quotas?",
    "options": [
      {
        "id": "a",
        "label": "Tracks token expenditure per team API key in Redis and automatically returns HTTP 429 quota exceeded errors when monthly dollar thresholds are breached."
      },
      {
        "id": "b",
        "label": "Sends a physical bill in the postal mail."
      },
      {
        "id": "c",
        "label": "Shuts down the physical server."
      },
      {
        "id": "d",
        "label": "Deletes the team's user accounts."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_aut_07",
    "section": "automation",
    "prompt": "In DeepEval / Promptfoo automated testing, how are prompt template regressions asserted in GitHub Actions?",
    "options": [
      {
        "id": "a",
        "label": "Prints test names to the console without evaluating."
      },
      {
        "id": "b",
        "label": "Deletes failed pull requests."
      },
      {
        "id": "c",
        "label": "Disables CI/CD on prompt repositories."
      },
      {
        "id": "d",
        "label": "Executes test assertions (e.g. G-Eval, Hallucination, Latency < 2s, Output Schema) against test cases on every pull request, failing CI if metrics drop below thresholds."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_aut_08",
    "section": "automation",
    "prompt": "How does 'Automated Canary Model Deployment' evaluate whether to promote a newly fine-tuned model checkpoint?",
    "options": [
      {
        "id": "a",
        "label": "Deploys to 100% of servers at 2 AM without monitoring."
      },
      {
        "id": "b",
        "label": "Promotes models based on file size."
      },
      {
        "id": "c",
        "label": "Routes 5% of production traffic to the new model, computes real-time evaluation scores (e.g. user acceptance, refuser rate, latency), and auto-promotes if SLOs match baseline."
      },
      {
        "id": "d",
        "label": "Disables monitoring during canary testing."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_aut_09",
    "section": "automation",
    "prompt": "When serving models with NVIDIA Triton, what configuration file defines dynamic batching parameters and tensor shapes?",
    "options": [
      {
        "id": "a",
        "label": "`package.json`"
      },
      {
        "id": "b",
        "label": "`config.pbtxt` specifying `dynamic_batching { max_queue_delay_microseconds: 100 }` and input/output tensor dimensions."
      },
      {
        "id": "c",
        "label": "`docker-compose.yml`"
      },
      {
        "id": "d",
        "label": "`requirements.txt`"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_aut_10",
    "section": "automation",
    "prompt": "How does 'Prometheus Exporter for vLLM' export critical inference health metrics?",
    "options": [
      {
        "id": "a",
        "label": "Exposes a standard `/metrics` endpoint scraping `vllm:time_to_first_token_seconds`, `vllm:num_requests_running`, and `vllm:avg_generation_throughput_tok_per_s`."
      },
      {
        "id": "b",
        "label": "Sends emails to system administrators."
      },
      {
        "id": "c",
        "label": "Writes metrics to text files on the desktop."
      },
      {
        "id": "d",
        "label": "Prints metrics to the screen only."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_aut_11",
    "section": "automation",
    "prompt": "In automated LoRA fine-tuning, what is 'Early Stopping based on Validation Loss'?",
    "options": [
      {
        "id": "a",
        "label": "Stops training when the GPU gets hot."
      },
      {
        "id": "b",
        "label": "Stops training after exactly 1 minute."
      },
      {
        "id": "c",
        "label": "Deletes the training dataset."
      },
      {
        "id": "d",
        "label": "Halts training when validation cross-entropy loss stops improving for N consecutive evaluation steps, saving GPU hours and preventing overfitting."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_aut_12",
    "section": "automation",
    "prompt": "How does an automated LLM gateway implement 'Adaptive Rate Limiting with Leaky Bucket'?",
    "options": [
      {
        "id": "a",
        "label": "Drops all requests that arrive at the same time."
      },
      {
        "id": "b",
        "label": "Shuts down the gateway on high traffic."
      },
      {
        "id": "c",
        "label": "Queues incoming burst requests in a buffer and processes them at a steady constant rate, preventing downstream model endpoints from exceeding provider RPM/TPM ceilings."
      },
      {
        "id": "d",
        "label": "Increases API prices automatically."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_aut_13",
    "section": "automation",
    "prompt": "What is 'Distributed Hyperparameter Optimization with Ray Tune / Optuna' for fine-tuning?",
    "options": [
      {
        "id": "a",
        "label": "Sets all hyperparameters to 1.0."
      },
      {
        "id": "b",
        "label": "Executes parallel training trials searching learning rates, LoRA rank $r$, alpha, and warmup steps, automatically pruning unpromising trials via Median Stopping."
      },
      {
        "id": "c",
        "label": "Guesses hyperparameters randomly without evaluation."
      },
      {
        "id": "d",
        "label": "Disables hyperparameter tuning."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_aut_14",
    "section": "automation",
    "prompt": "When serving open-source models on AWS SageMaker / GCP Vertex AI, how are health checks configured?",
    "options": [
      {
        "id": "a",
        "label": "Configuring a `/health` endpoint that checks GPU CUDA initialization, memory availability, and model readiness before marking the container ready for traffic."
      },
      {
        "id": "b",
        "label": "Pinging the server IP address once per year."
      },
      {
        "id": "c",
        "label": "Assuming the model is always healthy."
      },
      {
        "id": "d",
        "label": "Checking whether the container has internet access."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_aut_15",
    "section": "automation",
    "prompt": "How does 'Automated Prompt De-duplication in Logging' reduce observability storage costs?",
    "options": [
      {
        "id": "a",
        "label": "Disables all prompt logging."
      },
      {
        "id": "b",
        "label": "Deletes logs after 1 second."
      },
      {
        "id": "c",
        "label": "Compresses text using audio encoders."
      },
      {
        "id": "d",
        "label": "Hashes static system prompt templates and logs only the template ID with variable inputs, reducing log storage volume by 70%-90%."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_aut_16",
    "section": "automation",
    "prompt": "What is 'Automated Model Artifact Checksum Verification' in deployment pipelines?",
    "options": [
      {
        "id": "a",
        "label": "Counts the number of files in the folder."
      },
      {
        "id": "b",
        "label": "Checks if the model filename is in lowercase."
      },
      {
        "id": "c",
        "label": "Verifies SHA-256 / MD5 hashes of downloaded model safetensors weights before loading into GPU memory, ensuring weights were not corrupted or tampered with in transit."
      },
      {
        "id": "d",
        "label": "Renames the model file to .zip."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_aut_17",
    "section": "automation",
    "prompt": "How can an automated pipeline generate synthetic fine-tuning datasets from unstructured PDF documentation?",
    "options": [
      {
        "id": "a",
        "label": "Copies raw text directly into training sets without structure."
      },
      {
        "id": "b",
        "label": "Parses documents, prompts a frontier teacher LLM to generate complex (Instruction, Input, Output) pairs, and filters outputs with heuristic quality filters."
      },
      {
        "id": "c",
        "label": "Deletes all formatting from PDFs."
      },
      {
        "id": "d",
        "label": "Translates PDFs to binary code."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_aut_18",
    "section": "automation",
    "prompt": "In Kubernetes, what is the role of the 'NVIDIA GPU Operator'?",
    "options": [
      {
        "id": "a",
        "label": "Automates the management of all NVIDIA software components (drivers, Container Toolkit, device plugin, DCGM monitoring) required to provision GPUs for Kubernetes pods."
      },
      {
        "id": "b",
        "label": "Plays computer games on GPUs."
      },
      {
        "id": "c",
        "label": "Mines cryptocurrencies on idle GPUs."
      },
      {
        "id": "d",
        "label": "Overclocks CPU hardware."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_aut_19",
    "section": "automation",
    "prompt": "What is 'Model Checkpoint Sharding with Safetensors'?",
    "options": [
      {
        "id": "a",
        "label": "Compresses weights into a single .tar file."
      },
      {
        "id": "b",
        "label": "Deletes model weights after loading."
      },
      {
        "id": "c",
        "label": "Encrypts model weights with user passwords."
      },
      {
        "id": "d",
        "label": "Splits large model weights into multiple ~5GB `.safetensors` chunks with direct memory-mapping (`mmap`), preventing pickle execution vulnerabilities and speeding up load times."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_aut_20",
    "section": "automation",
    "prompt": "How does 'Automated Feedback Ingestion into Preference Datasets' work in continuous LLMOps?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all negative feedback."
      },
      {
        "id": "b",
        "label": "Sends automated apology emails to users."
      },
      {
        "id": "c",
        "label": "Collects user thumbs-up (chosen) and thumbs-down (rejected) completions, formats them into DPO dataset schemas, and triggers weekly model alignment jobs."
      },
      {
        "id": "d",
        "label": "Disables user rating buttons."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_aut_21",
    "section": "automation",
    "prompt": "In OpenTelemetry instrumentation for LLMs, what semantic conventions are standardized across providers?",
    "options": [
      {
        "id": "a",
        "label": "Variable names chosen randomly by developers."
      },
      {
        "id": "b",
        "label": "Attributes such as `gen_ai.system`, `gen_ai.request.model`, `gen_ai.usage.prompt_tokens`, `gen_ai.usage.completion_tokens`, and `gen_ai.response.finish_reasons`."
      },
      {
        "id": "c",
        "label": "HTTP status codes only."
      },
      {
        "id": "d",
        "label": "Database table names."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_aut_22",
    "section": "automation",
    "prompt": "How does 'Automated Multi-Model Benchmarking' compare latency and accuracy across model providers?",
    "options": [
      {
        "id": "a",
        "label": "Dispatches standardized benchmark prompts across OpenAI, Anthropic, Google, and self-hosted vLLM in parallel, logging TTFT, throughput, cost, and accuracy."
      },
      {
        "id": "b",
        "label": "Tests one model manually every month."
      },
      {
        "id": "c",
        "label": "Assumes all models have identical speed."
      },
      {
        "id": "d",
        "label": "Ranks models based on company market capitalization."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_aut_23",
    "section": "automation",
    "prompt": "What is 'Automated KV-Cache Memory Defragmentation' in vLLM?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all active user conversations."
      },
      {
        "id": "b",
        "label": "Restarts the GPU hardware."
      },
      {
        "id": "c",
        "label": "Replaces RAM with hard drive swap space."
      },
      {
        "id": "d",
        "label": "Reclaims and reallocates freed memory blocks from completed requests back to the physical block pool in real time, maintaining high GPU utilization."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_aut_24",
    "section": "automation",
    "prompt": "How does an automated pipeline handle 'Quantization Calibration on Domain Text'?",
    "options": [
      {
        "id": "a",
        "label": "Calibrates models on random numbers."
      },
      {
        "id": "b",
        "label": "Quantizes models without any calibration data."
      },
      {
        "id": "c",
        "label": "Feeds representative domain text samples through the model to compute activation statistics before quantization (AWQ/GPTQ), minimizing accuracy loss on specialized terminology."
      },
      {
        "id": "d",
        "label": "Deletes weights that are negative."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_aut_25",
    "section": "automation",
    "prompt": "In Kubernetes, how does 'Horizontal Pod Autoscaler (HPA) with Custom Prometheus Metrics' autoscale inference pods?",
    "options": [
      {
        "id": "a",
        "label": "Scales pods based on the time of day only."
      },
      {
        "id": "b",
        "label": "Queries Prometheus Adapter for custom metrics like `avg_requests_per_second_per_pod`, scaling pod replicas up or down based on target concurrency."
      },
      {
        "id": "c",
        "label": "Scales pods based on git commits."
      },
      {
        "id": "d",
        "label": "Disables pod scaling."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_aut_26",
    "section": "automation",
    "prompt": "What is 'Automated Model Rollback Trigger' in production inference?",
    "options": [
      {
        "id": "a",
        "label": "A monitoring alert rule that automatically reverts the deployment router to the previous stable model version if error rates exceed 1% or p95 latency exceeds 3 seconds."
      },
      {
        "id": "b",
        "label": "A human engineer typing git revert manually."
      },
      {
        "id": "c",
        "label": "Deleting the application repository."
      },
      {
        "id": "d",
        "label": "Rebooting all client computers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_aut_27",
    "section": "automation",
    "prompt": "How does 'Automated Dataset Deduplication with MinHash' improve fine-tuning dataset quality?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all training examples under 100 words."
      },
      {
        "id": "b",
        "label": "Translates duplicates into Latin."
      },
      {
        "id": "c",
        "label": "Increases dataset size by duplicating examples."
      },
      {
        "id": "d",
        "label": "Removes duplicate and near-duplicate prompt-response examples from training sets, preventing memorization, catastrophic forgetting, and wasted GPU compute."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_aut_28",
    "section": "automation",
    "prompt": "What is 'Distributed Training with FSDP (Fully Sharded Data Parallel)' in PyTorch?",
    "options": [
      {
        "id": "a",
        "label": "Runs training on a single GPU."
      },
      {
        "id": "b",
        "label": "Disables gradient calculations."
      },
      {
        "id": "c",
        "label": "Shards model parameters, gradients, and optimizer states across all available GPUs, enabling training of massive models without requiring full parameter replication."
      },
      {
        "id": "d",
        "label": "Trains models exclusively on CPUs."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_aut_29",
    "section": "automation",
    "prompt": "How does 'Automated Token Cost Attribution' generate per-user billing invoices?",
    "options": [
      {
        "id": "a",
        "label": "Charges all users a flat $10 fee."
      },
      {
        "id": "b",
        "label": "Aggregates raw token counts from proxy gateway logs multiplied by exact model pricing tiers, grouping by `organization_id` to generate billing line items."
      },
      {
        "id": "c",
        "label": "Estimates token counts by measuring server power usage."
      },
      {
        "id": "d",
        "label": "Disables user billing."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_aut_30",
    "section": "automation",
    "prompt": "Why should production LLM deployment pipelines use 'Non-Root Container Execution'?",
    "options": [
      {
        "id": "a",
        "label": "Prevents container breakout attacks from acquiring root administrator privileges on the host GPU server if an inference engine vulnerability is exploited."
      },
      {
        "id": "b",
        "label": "Makes containers compile faster."
      },
      {
        "id": "c",
        "label": "Reduces container image file sizes."
      },
      {
        "id": "d",
        "label": "Allows containers to run without an operating system."
      }
    ],
    "correctOptionId": "a"
  }
];

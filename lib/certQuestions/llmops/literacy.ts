import { CertQuestion } from '../types';

export const LLMOPS_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "llmops_lit_01",
    "section": "literacy",
    "prompt": "In high-throughput LLM serving with vLLM, how does 'PagedAttention' eliminate GPU memory fragmentation?",
    "options": [
      {
        "id": "a",
        "label": "Deletes 50% of the model parameters at startup."
      },
      {
        "id": "b",
        "label": "Manages Key-Value (KV) cache tensors using virtual memory paging concepts, reducing VRAM memory waste from 60%-80% down to under 4%, enabling significantly higher batch concurrency."
      },
      {
        "id": "c",
        "label": "Swaps all GPU tensors to local SATA hard drives."
      },
      {
        "id": "d",
        "label": "Forces models to run in 1-bit precision."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_lit_02",
    "section": "literacy",
    "prompt": "What is 'Continuous Batching / Iteration-Level Scheduling' in LLM inference engines (e.g. vLLM, TGI, TensorRT-LLM)?",
    "options": [
      {
        "id": "a",
        "label": "Injects new incoming requests into active GPU forward passes dynamically at each token generation step, rather than waiting for an entire batch to complete."
      },
      {
        "id": "b",
        "label": "Runs batches only once per hour."
      },
      {
        "id": "c",
        "label": "Limits batches to a single request."
      },
      {
        "id": "d",
        "label": "Processes requests in reverse chronological order."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_lit_03",
    "section": "literacy",
    "prompt": "What is the difference between 'TTFT (Time to First Token)' and 'TPOT (Time Per Output Token)' in inference performance benchmarking?",
    "options": [
      {
        "id": "a",
        "label": "TTFT is for CPU; TPOT is for GPU."
      },
      {
        "id": "b",
        "label": "TPOT measures network bandwidth; TTFT measures disk space."
      },
      {
        "id": "c",
        "label": "They are identical metrics."
      },
      {
        "id": "d",
        "label": "TTFT measures prefill phase latency (processing input prompt context); TPOT measures decode phase latency (time required to generate each successive output token)."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_lit_04",
    "section": "literacy",
    "prompt": "How does 'Speculative Decoding' accelerate inference speeds on large foundation models?",
    "options": [
      {
        "id": "a",
        "label": "Guesses tokens without checking weights."
      },
      {
        "id": "b",
        "label": "Skips token generation entirely."
      },
      {
        "id": "c",
        "label": "Uses a lightweight draft model to generate candidate token sequences rapidly in parallel, which are verified in a single forward pass by the larger target model."
      },
      {
        "id": "d",
        "label": "Overclocks GPU clock speeds."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_lit_05",
    "section": "literacy",
    "prompt": "What is 'Tensor Parallelism' (TP) in distributed LLM serving across multiple GPUs?",
    "options": [
      {
        "id": "a",
        "label": "Copies the full model to 8 different servers."
      },
      {
        "id": "b",
        "label": "Splits individual weight matrices across multiple GPUs (e.g. 8x H100s) within a single server node, executing parallel matrix multiplications and synchronizing via high-speed NVLink."
      },
      {
        "id": "c",
        "label": "Runs 8 different models simultaneously."
      },
      {
        "id": "d",
        "label": "Runs models on 8 CPU cores."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_lit_06",
    "section": "literacy",
    "prompt": "What is 'Pipeline Parallelism' (PP) compared to Tensor Parallelism?",
    "options": [
      {
        "id": "a",
        "label": "Partitions consecutive layers of the neural network across different physical GPU nodes, passing intermediate activation tensors sequentially through the pipeline."
      },
      {
        "id": "b",
        "label": "Splits database tables into columns."
      },
      {
        "id": "c",
        "label": "Runs code in continuous CI/CD pipelines."
      },
      {
        "id": "d",
        "label": "Deletes unused model layers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_lit_07",
    "section": "literacy",
    "prompt": "How does 'AWQ' (Activation-Aware Weight Quantization) 4-bit quantization preserve model reasoning capabilities?",
    "options": [
      {
        "id": "a",
        "label": "Quantizes all weights to zero."
      },
      {
        "id": "b",
        "label": "Deletes 75% of model layers."
      },
      {
        "id": "c",
        "label": "Converts weights into text files."
      },
      {
        "id": "d",
        "label": "Identifies the 1% most salient weight channels based on activation magnitude distributions and preserves them in full precision while quantizing remaining weights to INT4."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_lit_08",
    "section": "literacy",
    "prompt": "In LLMOps prompt lifecycle management, what is a 'Prompt Registry' (e.g. Langfuse / MLflow Prompt Registry)?",
    "options": [
      {
        "id": "a",
        "label": "A text file on the developer's laptop."
      },
      {
        "id": "b",
        "label": "A database of user credit card numbers."
      },
      {
        "id": "c",
        "label": "A version-controlled repository for managing prompt templates, parameters, lineage, production tags (e.g. `production`, `staging`), and rollback history as code artifacts."
      },
      {
        "id": "d",
        "label": "A public forum where users post prompts."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_lit_09",
    "section": "literacy",
    "prompt": "What is the 'Prefill vs Decode' phase memory bottleneck in transformer inference?",
    "options": [
      {
        "id": "a",
        "label": "Prefill runs on disk; Decode runs in RAM."
      },
      {
        "id": "b",
        "label": "Prefill is compute-bound (matrix-matrix multiplication parallelizing across input tokens); Decode is memory-bandwidth bound (sequential generation reading full KV-cache per token)."
      },
      {
        "id": "c",
        "label": "Decode requires internet access; Prefill runs offline."
      },
      {
        "id": "d",
        "label": "There is no difference in bottleneck characteristics."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_lit_10",
    "section": "literacy",
    "prompt": "How does 'FlashAttention-2 / FlashAttention-3' achieve 2x-4x speedups in attention computation?",
    "options": [
      {
        "id": "a",
        "label": "Tiles attention computation to fit within fast GPU SRAM memory, avoiding expensive reads/writes of intermediate $N \\times N$ attention matrices to slower High-Bandwidth Memory (HBM)."
      },
      {
        "id": "b",
        "label": "Disables attention layers completely."
      },
      {
        "id": "c",
        "label": "Compresses text tokens into audio waveforms."
      },
      {
        "id": "d",
        "label": "Runs inference on Apple Watch processors."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_lit_11",
    "section": "literacy",
    "prompt": "What is 'LoRA (Low-Rank Adaptation)' in enterprise LLM fine-tuning?",
    "options": [
      {
        "id": "a",
        "label": "Deletes 99% of model weights."
      },
      {
        "id": "b",
        "label": "Replaces neural networks with linear regressions."
      },
      {
        "id": "c",
        "label": "Trains models without data."
      },
      {
        "id": "d",
        "label": "Freezes original base model weights and injects trainable rank decomposition matrices ($W = W_0 + B \\times A$) into attention layers, training <1% of parameters."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_lit_12",
    "section": "literacy",
    "prompt": "What is 'QLoRA' compared to standard LoRA?",
    "options": [
      {
        "id": "a",
        "label": "QLoRA is only for quantum computers."
      },
      {
        "id": "b",
        "label": "QLoRA runs 100x slower than CPU inference."
      },
      {
        "id": "c",
        "label": "Quantizes the frozen base model to 4-bit NormalFloat (NF4) precision with double quantization, enabling fine-tuning of 70B parameter models on a single 48GB GPU."
      },
      {
        "id": "d",
        "label": "QLoRA does not support backpropagation."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_lit_13",
    "section": "literacy",
    "prompt": "In LLMOps monitoring, what does 'Perplexity (PPL)' measure on a test corpus?",
    "options": [
      {
        "id": "a",
        "label": "The physical temperature of the server chassis."
      },
      {
        "id": "b",
        "label": "The exponentiated cross-entropy loss of the model predicting test tokens, measuring how well the model probability distribution predicts the sample data (lower is better)."
      },
      {
        "id": "c",
        "label": "The percentage of users confused by the response."
      },
      {
        "id": "d",
        "label": "The network latency in milliseconds."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_lit_14",
    "section": "literacy",
    "prompt": "What is 'Chunked Prefill' in modern inference engines (e.g. vLLM / Sarathi-Serve)?",
    "options": [
      {
        "id": "a",
        "label": "Splits long input prompt contexts into smaller token chunks across multiple iterations, preventing long prompts from starving ongoing token decoding streams."
      },
      {
        "id": "b",
        "label": "Splits documents into separate files on disk."
      },
      {
        "id": "c",
        "label": "Deletes the prompt context after 100 tokens."
      },
      {
        "id": "d",
        "label": "Disables streaming responses."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_lit_15",
    "section": "literacy",
    "prompt": "What is 'Direct Preference Optimization (DPO)' in model alignment?",
    "options": [
      {
        "id": "a",
        "label": "Asks users to vote on model names."
      },
      {
        "id": "b",
        "label": "Forces models to output answers in uppercase."
      },
      {
        "id": "c",
        "label": "A hardware optimization for AMD GPUs."
      },
      {
        "id": "d",
        "label": "Optimizes language model weights directly on preference pairs $(x, y_w, y_l)$ using an implicit reward formulation, eliminating the need to train a separate reward model and PPO loops."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_lit_16",
    "section": "literacy",
    "prompt": "In LLM deployment, what is 'Triton Inference Server' by NVIDIA?",
    "options": [
      {
        "id": "a",
        "label": "A Greek mythology trivia application."
      },
      {
        "id": "b",
        "label": "A submarine navigation tool."
      },
      {
        "id": "c",
        "label": "An enterprise multi-model serving platform supporting TensorRT-LLM, vLLM, ONNX, and PyTorch backends with dynamic batching, GPU metrics, and health endpoints."
      },
      {
        "id": "d",
        "label": "A legacy MySQL database engine."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_lit_17",
    "section": "literacy",
    "prompt": "What is 'Model Sharding across NVLink vs InfiniBand' in distributed clusters?",
    "options": [
      {
        "id": "a",
        "label": "NVLink is only for hard drives; InfiniBand is for RAM."
      },
      {
        "id": "b",
        "label": "Intra-node Tensor Parallelism communicates across high-bandwidth ultra-low latency NVLink (up to 900 GB/s); Inter-node Pipeline Parallelism communicates across InfiniBand RDMA."
      },
      {
        "id": "c",
        "label": "InfiniBand runs on standard home Wi-Fi."
      },
      {
        "id": "d",
        "label": "There is no speed difference between them."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_lit_18",
    "section": "literacy",
    "prompt": "What is 'KV Cache Quantization (FP8 / INT4)' in vLLM serving?",
    "options": [
      {
        "id": "a",
        "label": "Compresses Key and Value tensor representations in the attention cache from FP16 to FP8 or INT4, doubling or quadrupling maximum context concurrency per GPU."
      },
      {
        "id": "b",
        "label": "Deletes the KV cache after each token."
      },
      {
        "id": "c",
        "label": "Encrypts KV tensors with RSA."
      },
      {
        "id": "d",
        "label": "Converts text characters to binary."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_lit_19",
    "section": "literacy",
    "prompt": "In LLMOps governance, what is 'Model Drift / Degradation Monitoring'?",
    "options": [
      {
        "id": "a",
        "label": "Tracking server fan vibrations."
      },
      {
        "id": "b",
        "label": "Checking whether the model has moved to another server."
      },
      {
        "id": "c",
        "label": "Measuring user typing speed."
      },
      {
        "id": "d",
        "label": "Continuously calculating output distributions, response lengths, refuser rates, and evaluation scores on production traffic to detect when model updates cause unintended behavioral regressions."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_lit_20",
    "section": "literacy",
    "prompt": "What is 'GGUF' (GPT-Generated Unified Format) in local LLM deployment?",
    "options": [
      {
        "id": "a",
        "label": "A graphical user interface format."
      },
      {
        "id": "b",
        "label": "A web browser video codec."
      },
      {
        "id": "c",
        "label": "A binary model serialization format designed by llama.cpp supporting fast single-file CPU/GPU inference, mmap memory mapping, and versatile k-quantization."
      },
      {
        "id": "d",
        "label": "A database query syntax."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_lit_21",
    "section": "literacy",
    "prompt": "What is 'LLM-as-a-Judge Evaluation Bias' (Position, Verbosity, Self-Enhancement)?",
    "options": [
      {
        "id": "a",
        "label": "Biases caused by server geographic location."
      },
      {
        "id": "b",
        "label": "Systematic tendencies of judge models to prefer Candidate A over B (position), favor longer answers regardless of quality (verbosity), and favor their own model completions."
      },
      {
        "id": "c",
        "label": "Biases in database SQL syntax."
      },
      {
        "id": "d",
        "label": "Biases in user computer monitor brightness."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_lit_22",
    "section": "literacy",
    "prompt": "What is 'Multi-LoRA Serving' in production inference infrastructure?",
    "options": [
      {
        "id": "a",
        "label": "Serving hundreds of distinct fine-tuned LoRA adapter weights dynamically on top of a single shared base model instance in GPU memory, swapping adapters per request with minimal overhead."
      },
      {
        "id": "b",
        "label": "Deploying 100 separate base models on 100 GPUs."
      },
      {
        "id": "c",
        "label": "Training 100 models from scratch."
      },
      {
        "id": "d",
        "label": "Merging all adapter weights permanently."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_lit_23",
    "section": "literacy",
    "prompt": "What is 'Prefix Caching / Prompt Caching' in modern LLM API gateways (e.g. Anthropic / vLLM)?",
    "options": [
      {
        "id": "a",
        "label": "Caches responses in client browser cookies."
      },
      {
        "id": "b",
        "label": "Deletes prompt prefixes before sending to the model."
      },
      {
        "id": "c",
        "label": "Translates prefixes to binary."
      },
      {
        "id": "d",
        "label": "Reuses pre-computed KV cache states for common prefix prompts (system instructions, tool definitions, reference docs), cutting TTFT latency by 80% and input token costs by 50%-90%."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_lit_24",
    "section": "literacy",
    "prompt": "In LLMOps CI/CD pipelines, what is a 'Golden Dataset Regression Suite'?",
    "options": [
      {
        "id": "a",
        "label": "A dataset containing gold trading prices."
      },
      {
        "id": "b",
        "label": "A set of high-resolution images."
      },
      {
        "id": "c",
        "label": "A curated collection of human-annotated test inputs, expected ground-truth answers, and evaluation criteria used to block model/prompt deployments that cause quality regressions."
      },
      {
        "id": "d",
        "label": "A list of employee names."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_lit_25",
    "section": "literacy",
    "prompt": "What is 'Model Distillation' in enterprise LLM cost optimization?",
    "options": [
      {
        "id": "a",
        "label": "Purifying server cooling liquid."
      },
      {
        "id": "b",
        "label": "Training a lightweight student model (e.g. 3B/7B) to mimic the probability distributions and reasoning steps of a massive teacher model (e.g. 405B), achieving fast, low-cost domain inference."
      },
      {
        "id": "c",
        "label": "Compressing model code into ZIP files."
      },
      {
        "id": "d",
        "label": "Deleting 50% of the dataset."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_lit_26",
    "section": "literacy",
    "prompt": "What is 'GPU VRAM Memory Allocation Breakdown' during LLM inference?",
    "options": [
      {
        "id": "a",
        "label": "Total VRAM = Model Weights (parameters $\\times$ bytes per param) + KV Cache (layers $\\times$ heads $\\times$ dim $\\times$ context) + Activation Tensors + CUDA runtime overhead."
      },
      {
        "id": "b",
        "label": "Total VRAM is determined entirely by hard drive size."
      },
      {
        "id": "c",
        "label": "VRAM is only used for monitor display resolution."
      },
      {
        "id": "d",
        "label": "Model weights consume zero VRAM during inference."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_lit_27",
    "section": "literacy",
    "prompt": "In LLMOps infrastructure, what does 'CUDA OOM (Out Of Memory)' error indicate?",
    "options": [
      {
        "id": "a",
        "label": "The server hard drive has run out of space."
      },
      {
        "id": "b",
        "label": "The network cable has been unplugged."
      },
      {
        "id": "c",
        "label": "The user has exceeded their monthly API subscription limit."
      },
      {
        "id": "d",
        "label": "The combined memory demands of model weights, dynamic KV cache allocations, and activation tensors exceeded the physical VRAM capacity of the GPU."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_lit_28",
    "section": "literacy",
    "prompt": "What is 'Online RLHF with PPO' vs 'Offline DPO'?",
    "options": [
      {
        "id": "a",
        "label": "PPO runs on laptops; DPO requires a supercomputer."
      },
      {
        "id": "b",
        "label": "DPO is only for image generation models."
      },
      {
        "id": "c",
        "label": "PPO trains in an active loop requiring generation, reward model scoring, and policy gradient updates; DPO trains directly on static preference datasets via supervised cross-entropy loss."
      },
      {
        "id": "d",
        "label": "There is no difference in training complexity."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_lit_29",
    "section": "literacy",
    "prompt": "What is 'Semantic Versioning for Model Deployments' (e.g. `llama-3-8b-instruct-v1.2.0`)?",
    "options": [
      {
        "id": "a",
        "label": "Naming models with random numbers."
      },
      {
        "id": "b",
        "label": "Explicitly tracking model architecture version, fine-tuning dataset iteration, and quantization format to ensure reproducible, auditable inference deployments."
      },
      {
        "id": "c",
        "label": "Changing model names daily."
      },
      {
        "id": "d",
        "label": "Deleting old model versions from disk."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_lit_30",
    "section": "literacy",
    "prompt": "Why is 'Automated LLM Fallback Routing' essential for mission-critical enterprise SLAs?",
    "options": [
      {
        "id": "a",
        "label": "Automatically redirects live production traffic to a secondary model or cloud region when the primary model endpoint experiences high error rates (HTTP 500/503/429) or latency spikes."
      },
      {
        "id": "b",
        "label": "Deletes failed requests immediately."
      },
      {
        "id": "c",
        "label": "Reboots user computers."
      },
      {
        "id": "d",
        "label": "Disables all model inference."
      }
    ],
    "correctOptionId": "a"
  }
];

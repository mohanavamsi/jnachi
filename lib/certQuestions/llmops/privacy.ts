import { CertQuestion } from '../types';

export const LLMOPS_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "llmops_priv_01",
    "section": "privacy",
    "prompt": "How does 'Llama Guard 3 / Prompt Safety Classifiers' protect LLM inference endpoints from harmful content?",
    "options": [
      {
        "id": "a",
        "label": "Deletes the prompt text before sending to the model."
      },
      {
        "id": "b",
        "label": "Evaluates input prompts and generated responses against standardized taxonomy categories (violence, hate speech, self-harm, cyberattacks), returning safe/unsafe flags."
      },
      {
        "id": "c",
        "label": "Translates unsafe prompts into French."
      },
      {
        "id": "d",
        "label": "Shuts down the server on any profanity."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_priv_02",
    "section": "privacy",
    "prompt": "What is 'Confidential Computing with NVIDIA H100 / AMD SEV' for enterprise LLM hosting?",
    "options": [
      {
        "id": "a",
        "label": "Executes LLM inference inside hardware-isolated trusted execution environments (TEE) where GPU memory is cryptographically encrypted, protecting data even from cloud hypervisors."
      },
      {
        "id": "b",
        "label": "Running models on private offline laptops only."
      },
      {
        "id": "c",
        "label": "Encrypting server chassis with physical locks."
      },
      {
        "id": "d",
        "label": "Disabling all network connections permanently."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_priv_03",
    "section": "privacy",
    "prompt": "Why should enterprise LLMOps platforms mandate 'Zero Data Retention (ZDR)' clauses in third-party foundation model contracts?",
    "options": [
      {
        "id": "a",
        "label": "Deletes user accounts every 30 days."
      },
      {
        "id": "b",
        "label": "Guarantees free inference API credits."
      },
      {
        "id": "c",
        "label": "Disables all model fine-tuning capabilities."
      },
      {
        "id": "d",
        "label": "Legally prevents the model vendor from storing, logging, or utilizing proprietary enterprise inputs and outputs to train future public foundation models."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_priv_04",
    "section": "privacy",
    "prompt": "What is 'Differential Privacy in Model Fine-Tuning' (DP-SGD)?",
    "options": [
      {
        "id": "a",
        "label": "Removes all differential calculus from training."
      },
      {
        "id": "b",
        "label": "Trains models on different servers on different days."
      },
      {
        "id": "c",
        "label": "Adds calibrated Gaussian noise to clipped gradients during backpropagation, mathematically guaranteeing that individual private training records cannot be reconstructed."
      },
      {
        "id": "d",
        "label": "Deletes negative numbers from training sets."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_priv_05",
    "section": "privacy",
    "prompt": "How does 'Automated PII Token Masking at the Inference Gateway' prevent data leaks?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all vowels from prompts."
      },
      {
        "id": "b",
        "label": "Detects and replaces entities (e.g. `[NAME_1]`, `[SSN_1]`) using NER models before sending to cloud LLMs, and re-hydrates tokens upon receiving the response."
      },
      {
        "id": "c",
        "label": "Replaces all words with asterisks."
      },
      {
        "id": "d",
        "label": "Sends PII to public databases."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_priv_06",
    "section": "privacy",
    "prompt": "What is a 'Training Data Extraction Attack' against open-weights models?",
    "options": [
      {
        "id": "a",
        "label": "An attack where an adversary probes the model with specific prefix prompts to trigger exact verbatim memorization of sensitive training records (e.g. medical records, private code)."
      },
      {
        "id": "b",
        "label": "Stealing physical hard drives from data centers."
      },
      {
        "id": "c",
        "label": "Deleting datasets from S3 buckets."
      },
      {
        "id": "d",
        "label": "A network bandwidth denial-of-service attack."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_priv_07",
    "section": "privacy",
    "prompt": "In LLMOps compliance, how should API keys for model providers (e.g. Anthropic, OpenAI) be distributed to services?",
    "options": [
      {
        "id": "a",
        "label": "Hardcoded into frontend JavaScript bundles."
      },
      {
        "id": "b",
        "label": "Shared via company Slack channels."
      },
      {
        "id": "c",
        "label": "Committed to public GitHub repositories."
      },
      {
        "id": "d",
        "label": "Managed centrally behind an internal authenticated proxy (e.g. LiteLLM Proxy) with ephemeral IAM role tokens, never distributing raw API keys to application developers."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_priv_08",
    "section": "privacy",
    "prompt": "What is 'Model Weight Poisoning / Supply Chain Attack' in open-source AI?",
    "options": [
      {
        "id": "a",
        "label": "A hardware failure in GPU manufacturing."
      },
      {
        "id": "b",
        "label": "A power outage in the server room."
      },
      {
        "id": "c",
        "label": "An attacker uploading a compromised model checkpoint to public hubs (e.g. Hugging Face) containing backdoors, malicious triggers, or embedded pickle RCE payloads."
      },
      {
        "id": "d",
        "label": "A slow internet connection."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_priv_09",
    "section": "privacy",
    "prompt": "How does using `.safetensors` format eliminate arbitrary code execution risks compared to `.bin` (PyTorch pickle)?",
    "options": [
      {
        "id": "a",
        "label": "`safetensors` runs 10x faster."
      },
      {
        "id": "b",
        "label": "`safetensors` is a pure tensor data format without executable code serialization, completely preventing malicious arbitrary Python code execution during model loading."
      },
      {
        "id": "c",
        "label": "`safetensors` is an encrypted ZIP file."
      },
      {
        "id": "d",
        "label": "`safetensors` only works on Mac computers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_priv_10",
    "section": "privacy",
    "prompt": "What is 'Adversarial Jailbreak Rate' as an LLMOps security metric?",
    "options": [
      {
        "id": "a",
        "label": "The percentage of automated adversarial red-team test prompts that successfully bypass safety guardrails and elicit policy-violating responses from the model."
      },
      {
        "id": "b",
        "label": "The number of users attempting to root their iPhones."
      },
      {
        "id": "c",
        "label": "The physical server room lock failure rate."
      },
      {
        "id": "d",
        "label": "The frequency of database connection timeouts."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_priv_11",
    "section": "privacy",
    "prompt": "How does 'Egress Network Filtering for Model Serving Pods' prevent data exfiltration?",
    "options": [
      {
        "id": "a",
        "label": "Disables all user traffic."
      },
      {
        "id": "b",
        "label": "Limits bandwidth to 1 Kbps."
      },
      {
        "id": "c",
        "label": "Blocks all internal database connections."
      },
      {
        "id": "d",
        "label": "Restricts container outbound traffic via Kubernetes NetworkPolicies so inference pods cannot initiate arbitrary internet connections if compromised."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_priv_12",
    "section": "privacy",
    "prompt": "What is 'Audit Logging Anonymization' in LLMOps data compliance?",
    "options": [
      {
        "id": "a",
        "label": "Deleting all logs every 5 minutes."
      },
      {
        "id": "b",
        "label": "Writing logs in white text on white backgrounds."
      },
      {
        "id": "c",
        "label": "Hashing user identifiers and stripping sensitive parameter values from operational log streams before indexing in centralized SIEM platforms."
      },
      {
        "id": "d",
        "label": "Printing logs only to physical paper."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_priv_13",
    "section": "privacy",
    "prompt": "How does 'EU AI Act High-Risk Classification' impact enterprise LLM deployment governance?",
    "options": [
      {
        "id": "a",
        "label": "Bans all AI models in European countries."
      },
      {
        "id": "b",
        "label": "Mandates rigorous risk management systems, high-quality training datasets, comprehensive technical documentation, human oversight, and post-market monitoring."
      },
      {
        "id": "c",
        "label": "Requires all AI models to be open-source."
      },
      {
        "id": "d",
        "label": "Imposes a 50% tax on GPU hardware."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_priv_14",
    "section": "privacy",
    "prompt": "What is 'Model Watermarking' (e.g. Kirchenbauer algorithm) in LLM generation governance?",
    "options": [
      {
        "id": "a",
        "label": "Biasing green-list token selection during generation to embed an imperceptible statistical signal, allowing detection of AI-generated text without altering quality."
      },
      {
        "id": "b",
        "label": "Printing a watermark image over generated text."
      },
      {
        "id": "c",
        "label": "Adding company copyright footers to every message."
      },
      {
        "id": "d",
        "label": "Deleting whitespace from generated answers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_priv_15",
    "section": "privacy",
    "prompt": "Why should fine-tuning datasets undergo automated 'Toxicity and Bias Scrubbing'?",
    "options": [
      {
        "id": "a",
        "label": "Reduces dataset file size by 99%."
      },
      {
        "id": "b",
        "label": "Because training requires zero data."
      },
      {
        "id": "c",
        "label": "To make training 100x faster."
      },
      {
        "id": "d",
        "label": "Prevents fine-tuned models from adopting toxic speech patterns, discriminatory biases, or hallucinations present in uncurated raw web datasets."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_priv_16",
    "section": "privacy",
    "prompt": "What is 'Dynamic Content Filtering with Fallback Disclaimers'?",
    "options": [
      {
        "id": "a",
        "label": "Banning the user from the application."
      },
      {
        "id": "b",
        "label": "Closing the browser window."
      },
      {
        "id": "c",
        "label": "When output guardrails detect borderline unsafe or unverified medical/legal advice, replacing or prefixing the completion with a standardized compliance disclaimer."
      },
      {
        "id": "d",
        "label": "Deleting the user database."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_priv_17",
    "section": "privacy",
    "prompt": "In LLMOps security, what is 'Adversarial Suffix Injection' (e.g. GCG attacks)?",
    "options": [
      {
        "id": "a",
        "label": "Adding punctuation to the end of a sentence."
      },
      {
        "id": "b",
        "label": "Appending optimized adversarial character sequences to input prompts that disrupt model safety alignment and force affirmative responses to harmful requests."
      },
      {
        "id": "c",
        "label": "Translating words into Latin."
      },
      {
        "id": "d",
        "label": "Typing prompts in bold font."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_priv_18",
    "section": "privacy",
    "prompt": "How does 'Model Inversion Defense via Gradient Obfuscation' protect proprietary fine-tuned weights?",
    "options": [
      {
        "id": "a",
        "label": "Restricts API access to top-1 hard token output IDs and applies random temperature jitter, preventing attackers from estimating exact model gradient distributions."
      },
      {
        "id": "b",
        "label": "Makes all API requests return errors."
      },
      {
        "id": "c",
        "label": "Hides server IP addresses."
      },
      {
        "id": "d",
        "label": "Encrypts client web browsers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_priv_19",
    "section": "privacy",
    "prompt": "What is 'VPC Peering for Self-Hosted LLM Clusters' in enterprise cloud architecture?",
    "options": [
      {
        "id": "a",
        "label": "Sharing Wi-Fi passwords with coworkers."
      },
      {
        "id": "b",
        "label": "Broadcasting model traffic over public radio."
      },
      {
        "id": "c",
        "label": "Disabling cloud network firewalls."
      },
      {
        "id": "d",
        "label": "Connecting internal application VPCs directly to private inference GPU VPCs via cloud internal routing, completely shielding inference endpoints from public internet exposure."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_priv_20",
    "section": "privacy",
    "prompt": "How does 'Model System Prompt Integrity Hashing' detect unauthorized configuration tampering?",
    "options": [
      {
        "id": "a",
        "label": "Counts the words in the system prompt."
      },
      {
        "id": "b",
        "label": "Changes the system prompt daily."
      },
      {
        "id": "c",
        "label": "Computes cryptographic hashes of registered system prompts in CI/CD, alerting security teams if an active model endpoint's system prompt deviates from the approved registry."
      },
      {
        "id": "d",
        "label": "Deletes the system prompt."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_priv_21",
    "section": "privacy",
    "prompt": "In enterprise data governance, what is 'Right to Explanation' for AI-assisted automated decisions?",
    "options": [
      {
        "id": "a",
        "label": "Printing raw neural network matrix weights to users."
      },
      {
        "id": "b",
        "label": "Providing human-interpretable rationale, contributing factors, and source evidence for significant automated decisions affecting user rights or finances."
      },
      {
        "id": "c",
        "label": "Emailing the developer's resume to users."
      },
      {
        "id": "d",
        "label": "Requiring users to pass an exam before seeing decisions."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_priv_22",
    "section": "privacy",
    "prompt": "What is 'Prompt Injection Defense via Structural Tagging'?",
    "options": [
      {
        "id": "a",
        "label": "Wrapping untrusted user inputs inside strict XML/JSON tags and configuring system instructions to process content inside tags purely as data arguments."
      },
      {
        "id": "b",
        "label": "Converting prompts into HTML links."
      },
      {
        "id": "c",
        "label": "Deleting user input."
      },
      {
        "id": "d",
        "label": "Allowing user inputs to override system prompts."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_priv_23",
    "section": "privacy",
    "prompt": "How does 'Continuous Red-Teaming with Giskard / PyRIT' automate security scanning?",
    "options": [
      {
        "id": "a",
        "label": "Scans server hard drives for viruses only."
      },
      {
        "id": "b",
        "label": "Tests website button colors."
      },
      {
        "id": "c",
        "label": "Measures network ping times."
      },
      {
        "id": "d",
        "label": "Probes model endpoints with thousands of dynamic jailbreak variants, hallucination traps, and PII extraction attacks, generating automated vulnerability risk scorecards."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_priv_24",
    "section": "privacy",
    "prompt": "What is 'Tenant Isolation in Multi-LoRA Serving Environments'?",
    "options": [
      {
        "id": "a",
        "label": "Allowing all users to use all adapters freely."
      },
      {
        "id": "b",
        "label": "Deleting adapters after single use."
      },
      {
        "id": "c",
        "label": "Enforcing cryptographic verification on adapter IDs so Tenant A cannot invoke or infer through Tenant B's proprietary fine-tuned LoRA adapter."
      },
      {
        "id": "d",
        "label": "Merging all tenant adapters into one."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_priv_25",
    "section": "privacy",
    "prompt": "Why should model evaluation logs exclude raw plaintext user conversations in production?",
    "options": [
      {
        "id": "a",
        "label": "Because log files take up too much disk space."
      },
      {
        "id": "b",
        "label": "Logging raw user conversations creates massive compliance liability and risk of PII leakage; evaluate on anonymized or synthetic test distributions."
      },
      {
        "id": "c",
        "label": "Because models cannot evaluate text."
      },
      {
        "id": "d",
        "label": "Because users do not permit software testing."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_priv_26",
    "section": "privacy",
    "prompt": "What is 'Immutable Model Lineage Tracking' in MLflow / Kubeflow?",
    "options": [
      {
        "id": "a",
        "label": "Recording the exact training code commit, base model SHA, dataset version hash, hyperparameters, and evaluation metrics for every production model artifact."
      },
      {
        "id": "b",
        "label": "Naming models in chronological order."
      },
      {
        "id": "c",
        "label": "Saving model files on external USB drives."
      },
      {
        "id": "d",
        "label": "Deleting training records once deployment succeeds."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "llmops_priv_27",
    "section": "privacy",
    "prompt": "How does 'Guardrail Latency Budgeting' maintain fast user experiences?",
    "options": [
      {
        "id": "a",
        "label": "Disables guardrails for VIP users."
      },
      {
        "id": "b",
        "label": "Runs guardrails only once per day."
      },
      {
        "id": "c",
        "label": "Increases guardrail timeout to 10 seconds."
      },
      {
        "id": "d",
        "label": "Caps input/output guardrail checks to under 15ms by using lightweight quantized classifiers or parallel asynchronous verification streams."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "llmops_priv_28",
    "section": "privacy",
    "prompt": "What is 'Model Sandboxing with gVisor / Firecracker' in multi-tenant inference?",
    "options": [
      {
        "id": "a",
        "label": "Puts server racks in sandboxes."
      },
      {
        "id": "b",
        "label": "Runs models on physical mobile phones."
      },
      {
        "id": "c",
        "label": "Isolates model execution inside lightweight microVMs with dedicated kernel boundaries, preventing container escape attacks from affecting other tenants."
      },
      {
        "id": "d",
        "label": "Disables all container security."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "llmops_priv_29",
    "section": "privacy",
    "prompt": "How does 'Automated Secret Scanning in Training Data' prevent credential leaks?",
    "options": [
      {
        "id": "a",
        "label": "Encrypts the entire training set with user passwords."
      },
      {
        "id": "b",
        "label": "Runs regex and entropy scanners (e.g. Trufflehog) over training corpora to remove AWS keys, database connection strings, and private SSH keys before tokenization."
      },
      {
        "id": "c",
        "label": "Ignores secrets in training data."
      },
      {
        "id": "d",
        "label": "Translates secrets to Spanish."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "llmops_priv_30",
    "section": "privacy",
    "prompt": "Why is 'Explicit Model Refusal Logging' important in AI governance?",
    "options": [
      {
        "id": "a",
        "label": "Tracks whether model refusal rates are legitimate safety enforcement vs over-refusal false positives (censorship drift) that harm user experience."
      },
      {
        "id": "b",
        "label": "To punish users who trigger refusals."
      },
      {
        "id": "c",
        "label": "To disable safety filters."
      },
      {
        "id": "d",
        "label": "To calculate cloud server electricity costs."
      }
    ],
    "correctOptionId": "a"
  }
];

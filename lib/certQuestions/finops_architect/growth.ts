import { CertQuestion } from '../types';

export const FINOPS_ARCHITECT_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "finops_gro_01",
    "section": "growth",
    "prompt": "When scaling an enterprise cloud footprint from $1M to $50M annual run rate, what architecture enables fully automated departmental Chargeback?",
    "options": [
      {
        "id": "a",
        "label": "Manually typing numbers into Excel at the end of each quarter."
      },
      {
        "id": "b",
        "label": "Automated ingestion of normalized CUR billing data into a lakehouse (Athena / Snowflake), mapped against organizational hierarchy metadata, executing automated general ledger journal entries."
      },
      {
        "id": "c",
        "label": "Charging all cloud costs to the IT department credit card."
      },
      {
        "id": "d",
        "label": "Dividing total cloud costs equally among all employees."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_gro_02",
    "section": "growth",
    "prompt": "How does 'Automated Savings Plan Commitment Portfolio Management' optimize Effective Savings Rate (ESR)?",
    "options": [
      {
        "id": "a",
        "label": "Blends Compute Savings Plans (flexible across instance families/regions) for baseline loads with EC2 Instance Savings Plans (higher discount) for predictable core production clusters."
      },
      {
        "id": "b",
        "label": "Buys 100% on-demand instances without any commitments."
      },
      {
        "id": "c",
        "label": "Commits to 10-year lock-in terms on legacy instance types."
      },
      {
        "id": "d",
        "label": "Buys Savings Plans on random days of the year."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_gro_03",
    "section": "growth",
    "prompt": "What is 'GPU Cluster Multi-Tenancy via Fractional Virtualization (vGPU / MIG)' in high-scale AI infrastructure?",
    "options": [
      {
        "id": "a",
        "label": "Assigns 1 dedicated H100 GPU to every single software engineer."
      },
      {
        "id": "b",
        "label": "Runs all GPU jobs sequentially in single-threaded mode."
      },
      {
        "id": "c",
        "label": "Disables GPU compute cores."
      },
      {
        "id": "d",
        "label": "Shares expensive physical H100 GPUs across multiple development and inference workloads with hardware-level memory protection, increasing average GPU utilization from 18% to 75%+."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_gro_04",
    "section": "growth",
    "prompt": "In AI unit economics, how does 'Token Efficiency Ratio (TER)' track model prompt optimization over time?",
    "options": [
      {
        "id": "a",
        "label": "$\\text{TER} = \\text{Total Input Tokens} \\times \\text{Total Output Tokens}$."
      },
      {
        "id": "b",
        "label": "$\\text{TER} = \\text{Model Parameter Count} / 1000$."
      },
      {
        "id": "c",
        "label": "$\\text{TER} = \\frac{\\text{Successful User Output Value Delivered}}{\\text{Total Prompt + Completion Tokens Consumed}}$, measuring how efficiently prompt tokens translate to user value."
      },
      {
        "id": "d",
        "label": "$\\text{TER} = \\text{Server Room Temperature}$."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_gro_05",
    "section": "growth",
    "prompt": "How does 'Automated Cross-Region Cloud Arbitrage' reduce batch AI model fine-tuning costs?",
    "options": [
      {
        "id": "a",
        "label": "Runs all training jobs in the single most expensive cloud region."
      },
      {
        "id": "b",
        "label": "Dynamically spins up Spot GPU clusters in whatever global cloud region currently offers the lowest spot price and highest GPU availability, tearing down upon completion."
      },
      {
        "id": "c",
        "label": "Transfers training data via physical hard drives."
      },
      {
        "id": "d",
        "label": "Trains models on mobile phone processors."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_gro_06",
    "section": "growth",
    "prompt": "What is 'Automated Reserved Instance Marketplace Trading' in AWS FinOps?",
    "options": [
      {
        "id": "a",
        "label": "Selling unneeded Standard EC2 Reserved Instances on the AWS Marketplace to recover capital when workloads migrate to modern instance generations or containers."
      },
      {
        "id": "b",
        "label": "Trading stocks on the New York Stock Exchange."
      },
      {
        "id": "c",
        "label": "Buying physical computer servers from eBay."
      },
      {
        "id": "d",
        "label": "Disabling reserved instance purchases."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_gro_07",
    "section": "growth",
    "prompt": "How does 'Automated Cold Storage Migration with Intelligent Tiering' scale to Petabytes of enterprise data?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all files older than 3 days."
      },
      {
        "id": "b",
        "label": "Manually reviews millions of files in Excel."
      },
      {
        "id": "c",
        "label": "Stores all petabytes of data on local SSD drives."
      },
      {
        "id": "d",
        "label": "Monitors object access patterns automatically without operational overhead, shifting unaccessed objects to Archive Access and Deep Archive tiers to save millions in annual storage."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_gro_08",
    "section": "growth",
    "prompt": "What is 'FinOps Unit Economic Modeling for SaaS Gross Margin Expansion'?",
    "options": [
      {
        "id": "a",
        "label": "Ignoring cloud hosting costs when setting SaaS prices."
      },
      {
        "id": "b",
        "label": "Offering unlimited free cloud compute to all customers forever."
      },
      {
        "id": "c",
        "label": "Aligning infrastructure COGS (Cost of Goods Sold) directly with customer subscription pricing tiers to guarantee 75%+ software gross margins as customer volumes scale."
      },
      {
        "id": "d",
        "label": "Paying cloud bills out of marketing budgets."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_gro_09",
    "section": "growth",
    "prompt": "How does 'Automated Multi-Tenant EKS Cluster Sharing' reduce infrastructure overhead compared to isolated clusters?",
    "options": [
      {
        "id": "a",
        "label": "Creates a dedicated Kubernetes cluster for every single developer."
      },
      {
        "id": "b",
        "label": "Consolidates multiple development and production workloads onto large shared EKS clusters with namespace resource quotas, eliminating duplicate control plane and base compute costs."
      },
      {
        "id": "c",
        "label": "Disables namespace isolation in Kubernetes."
      },
      {
        "id": "d",
        "label": "Runs Kubernetes on a single laptop."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_gro_10",
    "section": "growth",
    "prompt": "What is 'Automated LLM Prompt Compression and Model Distillation ROI Modeling'?",
    "options": [
      {
        "id": "a",
        "label": "Calculating the payback period of investing engineering time to distill a frontier model into a lightweight 8B model or compress prompts against cumulative token savings."
      },
      {
        "id": "b",
        "label": "Assuming engineering time is 100% free with zero cost."
      },
      {
        "id": "c",
        "label": "Banning small language models from production."
      },
      {
        "id": "d",
        "label": "Never optimizing prompt token length."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_gro_11",
    "section": "growth",
    "prompt": "How does 'Automated AWS Graviton (ARM-Based) Processor Migration' reduce compute costs by 20%?",
    "options": [
      {
        "id": "a",
        "label": "Slows down CPU execution by 50%."
      },
      {
        "id": "b",
        "label": "Disables multi-threading on all servers."
      },
      {
        "id": "c",
        "label": "Requires buying physical ARM processors for the office."
      },
      {
        "id": "d",
        "label": "Recompiles containerized microservices (Python, Go, Node.js, Java) for ARM64 architecture, delivering up to 40% better price-performance than legacy x86 instances."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_gro_12",
    "section": "growth",
    "prompt": "What is 'Automated Continuous Cloud Waste Discovery via Open-Source Cloud Custodian'?",
    "options": [
      {
        "id": "a",
        "label": "Hires a physical office cleaning service."
      },
      {
        "id": "b",
        "label": "Deletes all cloud resources on Friday afternoon."
      },
      {
        "id": "c",
        "label": "Defines declarative YAML policies that continuously scan multi-account cloud estates, automatically notifying owners and terminating non-compliant or orphaned resources."
      },
      {
        "id": "d",
        "label": "Disables all cloud monitoring."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_gro_13",
    "section": "growth",
    "prompt": "In high-growth startups, what does the 'Cloud Burn Multiple' metric track?",
    "options": [
      {
        "id": "a",
        "label": "The temperature of the server room."
      },
      {
        "id": "b",
        "label": "$\\text{Burn Multiple} = \\frac{\\text{Net Cloud & Infrastructure Spend in Period}}{\\text{Net New Annual Recurring Revenue (ARR) Added in Period}}$, measuring cloud growth efficiency."
      },
      {
        "id": "c",
        "label": "The number of cloud servers running."
      },
      {
        "id": "d",
        "label": "The total number of registered users."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_gro_14",
    "section": "growth",
    "prompt": "How does 'Automated Semantic Cache Invalidation on Data Updates' maintain accuracy without inflating cost?",
    "options": [
      {
        "id": "a",
        "label": "Emits event webhooks upon database or CMS mutations that selectively purge only related vector cache keys in Redis, preserving 90%+ cache hit rates on unaffected queries."
      },
      {
        "id": "b",
        "label": "Flushes the entire cache cluster on every single database write."
      },
      {
        "id": "c",
        "label": "Never clears the cache under any circumstances."
      },
      {
        "id": "d",
        "label": "Disables semantic caching."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_gro_15",
    "section": "growth",
    "prompt": "What is 'Automated Enterprise Discount Program (EDP) Tier Tracking' in AWS/Azure negotiations?",
    "options": [
      {
        "id": "a",
        "label": "Paying retail list prices without negotiation."
      },
      {
        "id": "b",
        "label": "Signing contracts without reviewing terms."
      },
      {
        "id": "c",
        "label": "Canceling cloud provider relationships."
      },
      {
        "id": "d",
        "label": "Models annualized corporate spend against vendor EDP discount tiers (e.g. $5M, $10M, $25M commitments) to negotiate 10%-25% custom discounts across all cloud services."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_gro_16",
    "section": "growth",
    "prompt": "How does 'Automated Network Traffic Route Optimization via Direct Connect / Interconnect' cut egress costs?",
    "options": [
      {
        "id": "a",
        "label": "Transfers data over consumer cellular networks."
      },
      {
        "id": "b",
        "label": "Disables data transfers between on-prem and cloud."
      },
      {
        "id": "c",
        "label": "Routes high-volume data traffic between on-premises data centers and cloud VPCs over dedicated private fiber connections at discounted per-GB transfer rates ($0.02 vs $0.09/GB)."
      },
      {
        "id": "d",
        "label": "Uploads data to public internet forums."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_gro_17",
    "section": "growth",
    "prompt": "What is 'Automated GPU Allocation Queueing with Priority Scheduling (Slurm / Volcano)'?",
    "options": [
      {
        "id": "a",
        "label": "Assigns GPU access based on employee seniority."
      },
      {
        "id": "b",
        "label": "Queues research training jobs and batch evaluations by priority, preempting low-priority exploration jobs when critical production inference spikes occur to maximize utilization."
      },
      {
        "id": "c",
        "label": "Runs all GPU jobs in first-come-first-served order without preemption."
      },
      {
        "id": "d",
        "label": "Disables GPU job scheduling."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_gro_18",
    "section": "growth",
    "prompt": "How does 'Automated Multi-Model Co-Location on Single Large GPU Nodes' reduce idle capacity?",
    "options": [
      {
        "id": "a",
        "label": "Hosts multiple small domain models (e.g. 3B/7B) or LoRA adapters on a single shared 80GB H100 GPU using Triton / vLLM, eliminating wasted dedicated VRAM capacity."
      },
      {
        "id": "b",
        "label": "Deploys 1 small model per dedicated H100 GPU at 5% utilization."
      },
      {
        "id": "c",
        "label": "Combines all models into a single text file."
      },
      {
        "id": "d",
        "label": "Disables GPU model hosting."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_gro_19",
    "section": "growth",
    "prompt": "What is 'Automated Cloud FinOps KPI Scorecarding per Engineering Team'?",
    "options": [
      {
        "id": "a",
        "label": "Ranks engineers based on total lines of code written."
      },
      {
        "id": "b",
        "label": "Punishes engineers with financial penalties."
      },
      {
        "id": "c",
        "label": "Hides all cloud metrics from developers."
      },
      {
        "id": "d",
        "label": "Publishes monthly engineering team scorecards grading Tagging Compliance (99%+), Idle Resource Ratio (<5%), Rightsizing Rate, and Unit Cost Efficiency to gamify optimization."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_gro_20",
    "section": "growth",
    "prompt": "How does 'Automated LLM Response Streaming Termination' prevent token waste?",
    "options": [
      {
        "id": "a",
        "label": "Allows disconnected sessions to generate 10,000 tokens in the background."
      },
      {
        "id": "b",
        "label": "Disables token generation."
      },
      {
        "id": "c",
        "label": "Immediately cancels backend model generation when a frontend web client disconnects or navigates away, saving up to 15% of wasted completion tokens."
      },
      {
        "id": "d",
        "label": "Charges users when they close their browser."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_gro_21",
    "section": "growth",
    "prompt": "What is 'Automated Multi-Cloud Billing Standardization (FOCUS - FinOps Open Cost & Usage Spec)'?",
    "options": [
      {
        "id": "a",
        "label": "A camera autofocus technology."
      },
      {
        "id": "b",
        "label": "Normalizes disparate billing schemas from AWS, Azure, GCP, Datadog, and Snowflake into a standardized, unified open schema for cross-cloud cost analytics."
      },
      {
        "id": "c",
        "label": "A method for paying cloud bills with a single credit card."
      },
      {
        "id": "d",
        "label": "A legacy database engine."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_gro_22",
    "section": "growth",
    "prompt": "How does 'Automated Fine-Tuning Model Retirement Lifecycle' eliminate unused model hosting spend?",
    "options": [
      {
        "id": "a",
        "label": "Tracks endpoint query traffic; automatically de-provisions active GPU hosting endpoints for specialized models with zero traffic in 14 days, saving weights to cold S3."
      },
      {
        "id": "b",
        "label": "Leaves deprecated models running on dedicated GPUs forever."
      },
      {
        "id": "c",
        "label": "Deletes model weights permanently without backup."
      },
      {
        "id": "d",
        "label": "Charges developers for idle models."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_gro_23",
    "section": "growth",
    "prompt": "What is 'Automated Continuous Rightsizing of Serverless Memory Limits'?",
    "options": [
      {
        "id": "a",
        "label": "Sets all serverless functions to 10GB memory."
      },
      {
        "id": "b",
        "label": "Disables serverless execution."
      },
      {
        "id": "c",
        "label": "Runs all code on on-premise servers."
      },
      {
        "id": "d",
        "label": "Analyzes execution traces across millions of Lambda/Cloud Run invocations, automatically resizing memory allocations to match actual p99 memory consumption."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_gro_24",
    "section": "growth",
    "prompt": "How does 'Automated Vector Database Index Sharding and Cold Tiering' optimize search spend?",
    "options": [
      {
        "id": "a",
        "label": "Stores all 1 billion vectors in expensive RAM forever."
      },
      {
        "id": "b",
        "label": "Deletes historical vectors."
      },
      {
        "id": "c",
        "label": "Keeps frequently queried vectors (last 30 days) in fast RAM HNSW indexes while offloading historical vectors to disk-backed IVF indexes or compressed object storage."
      },
      {
        "id": "d",
        "label": "Disables vector indexing."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_gro_25",
    "section": "growth",
    "prompt": "What is 'Automated LLM Rate Limit Throttling with Exponential Jitter in FinOps Gateways'?",
    "options": [
      {
        "id": "a",
        "label": "Retries failed requests 1,000 times per second simultaneously."
      },
      {
        "id": "b",
        "label": "Spreads out retry intervals with randomized jitter, preventing thundering-herd API retries that exhaust token rate limits and cause expensive cascading failures."
      },
      {
        "id": "c",
        "label": "Drops all failed requests without retry."
      },
      {
        "id": "d",
        "label": "Shuts down the application server."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_gro_26",
    "section": "growth",
    "prompt": "How does 'Automated FinOps Policy-as-Code (Open Policy Agent / OPA)' prevent expensive infrastructure deployments?",
    "options": [
      {
        "id": "a",
        "label": "Evaluates Terraform plans against budget policies (e.g. deny provisioning unapproved GPU instances $>\\$10/\\text{hr}$ without FinOps sign-off) in CI/CD."
      },
      {
        "id": "b",
        "label": "Allows all infrastructure changes without validation."
      },
      {
        "id": "c",
        "label": "Deletes Terraform code."
      },
      {
        "id": "d",
        "label": "Bans engineers from using Terraform."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_gro_27",
    "section": "growth",
    "prompt": "What is 'Automated Continuous Cloud Waste Reporting to C-Suite Executives'?",
    "options": [
      {
        "id": "a",
        "label": "Sends a 5,000-page unformatted CSV file to the CEO."
      },
      {
        "id": "b",
        "label": "Hides cloud waste from executives."
      },
      {
        "id": "c",
        "label": "Reports costs once every 5 years."
      },
      {
        "id": "d",
        "label": "Delivers monthly executive summaries highlighting total realized savings, effective savings rate, unit cost trajectory, and identified optimization pipeline opportunities."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_gro_28",
    "section": "growth",
    "prompt": "How does 'Automated Multi-Region Latency vs Cost Optimization Router' balance user experience and budget?",
    "options": [
      {
        "id": "a",
        "label": "Routes all queries to the most expensive region."
      },
      {
        "id": "b",
        "label": "Routes all queries to a single laptop."
      },
      {
        "id": "c",
        "label": "Routes premium tier user queries to the lowest-latency regional endpoint while routing free/batch user queries to the lowest-cost available cloud region."
      },
      {
        "id": "d",
        "label": "Disables regional routing."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_gro_29",
    "section": "growth",
    "prompt": "What is 'Automated Spot-to-On-Demand Preemption Rebalancing in EKS'?",
    "options": [
      {
        "id": "a",
        "label": "Uses a single Spot instance type in a single AZ."
      },
      {
        "id": "b",
        "label": "Continuously redistributes Kubernetes pod workloads across a diverse pool of 15+ Spot instance types across multiple AZs to minimize preemption correlation risk."
      },
      {
        "id": "c",
        "label": "Shuts down the Kubernetes cluster on preemption."
      },
      {
        "id": "d",
        "label": "Disables Spot instances."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_gro_30",
    "section": "growth",
    "prompt": "Why is 'Continuous FinOps Cultural Transformation' the ultimate driver of enterprise cloud sustainability?",
    "options": [
      {
        "id": "a",
        "label": "Empowers engineering teams with real-time cost visibility and ownership, turning cost efficiency into a primary architectural quality attribute alongside speed and security."
      },
      {
        "id": "b",
        "label": "To eliminate all engineering innovation."
      },
      {
        "id": "c",
        "label": "To force all applications to run offline."
      },
      {
        "id": "d",
        "label": "To replace software engineers with accountants."
      }
    ],
    "correctOptionId": "a"
  }
];

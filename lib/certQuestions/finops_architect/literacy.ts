import { CertQuestion } from '../types';

export const FINOPS_ARCHITECT_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "finops_lit_01",
    "section": "literacy",
    "prompt": "What are the three core operational phases defined by the FinOps Foundation lifecycle?",
    "options": [
      {
        "id": "a",
        "label": "Plan, Code, and Deploy."
      },
      {
        "id": "b",
        "label": "Inform (Visibility & Allocation), Optimize (Rate & Usage Reduction), and Operate (Continuous Organizational Alignment)."
      },
      {
        "id": "c",
        "label": "Buy, Store, and Sell."
      },
      {
        "id": "d",
        "label": "Design, Test, and Destroy."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_lit_02",
    "section": "literacy",
    "prompt": "In AI & Cloud Unit Economics, how is 'Unit Cost per Active AI User' (CPAU) calculated?",
    "options": [
      {
        "id": "a",
        "label": "$\\text{CPAU} = \\frac{\\text{Total Cloud Compute, GPU, Storage, and Model Token Spend in Period}}{\\text{Total Monthly Active Users (MAU) in Period}}$."
      },
      {
        "id": "b",
        "label": "$\\text{CPAU} = \\text{Total Revenue} \\times \\text{Number of GPUs}$."
      },
      {
        "id": "c",
        "label": "$\\text{CPAU} = \\text{Server CPU Clock Speed} / \\text{User Count}$."
      },
      {
        "id": "d",
        "label": "$\\text{CPAU} = \\text{Total Office Rent} / 12$."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_lit_03",
    "section": "literacy",
    "prompt": "What is the primary economic difference between 'Reserved Instances / Savings Plans' and 'On-Demand Pricing' in AWS/Azure/GCP?",
    "options": [
      {
        "id": "a",
        "label": "On-demand pricing is 100% free for startups."
      },
      {
        "id": "b",
        "label": "Savings Plans require paying for all servers in cash on day one."
      },
      {
        "id": "c",
        "label": "There is zero cost difference between on-demand and reserved instances."
      },
      {
        "id": "d",
        "label": "Commitment-based discounts (1-year or 3-year term commitment) provide up to 40%-72% discount over on-demand rates in exchange for committed steady-state compute usage."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_lit_04",
    "section": "literacy",
    "prompt": "How does 'Model Cascading / Tiered Routing' reduce token costs in generative AI microservices?",
    "options": [
      {
        "id": "a",
        "label": "Calls 5 frontier models simultaneously for every request."
      },
      {
        "id": "b",
        "label": "Deletes all prompts before sending to the model."
      },
      {
        "id": "c",
        "label": "Routes lightweight classification, extraction, and routine queries to small low-cost models (e.g. GPT-4o-mini / Claude Haiku) and reserves costly frontier models for complex multi-hop reasoning."
      },
      {
        "id": "d",
        "label": "Disables all model inference."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_lit_05",
    "section": "literacy",
    "prompt": "What is 'Semantic Caching' (e.g. GPTCache / Redis Vector Cache) in AI cost governance?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all cache keys every 30 seconds."
      },
      {
        "id": "b",
        "label": "Stores previous query embeddings and model responses in memory; if an incoming query has high similarity ($ge 0.96$), returns cached answer instantly at near-zero dollar cost."
      },
      {
        "id": "c",
        "label": "Compresses vector databases into text files."
      },
      {
        "id": "d",
        "label": "Stores database SQL passwords."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_lit_06",
    "section": "literacy",
    "prompt": "In cloud infrastructure billing, what is 'Cloud Egress Cost'?",
    "options": [
      {
        "id": "a",
        "label": "Fees charged by cloud providers for data transferred outbound from their data centers to the public internet or across different cloud regions."
      },
      {
        "id": "b",
        "label": "Fees for uploading files to the cloud."
      },
      {
        "id": "c",
        "label": "The physical cost of server electricity."
      },
      {
        "id": "d",
        "label": "Taxes paid to local city governments."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_lit_07",
    "section": "literacy",
    "prompt": "What is 'Showback' vs 'Chargeback' in enterprise cloud cost management?",
    "options": [
      {
        "id": "a",
        "label": "Showback is for hardware; Chargeback is for software."
      },
      {
        "id": "b",
        "label": "Chargeback is illegal under accounting rules."
      },
      {
        "id": "c",
        "label": "They are exact identical financial processes."
      },
      {
        "id": "d",
        "label": "Showback reports cloud spend visibility to department heads for awareness; Chargeback actively deducts cloud spend from departmental operating budgets."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_lit_08",
    "section": "literacy",
    "prompt": "How does 'Spot / Preemptible GPU Instance Orchestration' reduce AI training and batch inference costs?",
    "options": [
      {
        "id": "a",
        "label": "Guarantees 100% dedicated hardware availability with zero risk of interruption."
      },
      {
        "id": "b",
        "label": "Slows down GPU compute clocks by 90%."
      },
      {
        "id": "c",
        "label": "Bids on surplus cloud GPU capacity at discounts up to 60%-80% with automated checkpointing to absorb transient 2-minute instance reclaim evictions."
      },
      {
        "id": "d",
        "label": "Runs inference only on solar power."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_lit_09",
    "section": "literacy",
    "prompt": "What is the primary indicator of 'Zombie / Idle Cloud Resources' in AWS/Azure accounts?",
    "options": [
      {
        "id": "a",
        "label": "Servers infected with computer viruses."
      },
      {
        "id": "b",
        "label": "Unattached EBS volumes, idle load balancers with zero traffic, unassociated Elastic IPs, and stopped EC2 instances incurring ongoing storage charges."
      },
      {
        "id": "c",
        "label": "Cloud accounts that have been deleted."
      },
      {
        "id": "d",
        "label": "Servers running at 100% CPU utilization."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_lit_10",
    "section": "literacy",
    "prompt": "How does 'Prefix Caching (Prompt Caching)' in LLM APIs (e.g. Anthropic / vLLM) optimize token economics?",
    "options": [
      {
        "id": "a",
        "label": "Reuses pre-computed KV cache states for repeated prompt prefixes (e.g. 5,000-token system instructions or document context), discounting cached input token rates by up to 90%."
      },
      {
        "id": "b",
        "label": "Deletes prompt prefixes before inference."
      },
      {
        "id": "c",
        "label": "Caches responses in client browser cookies."
      },
      {
        "id": "d",
        "label": "Translates prefixes to binary."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_lit_11",
    "section": "literacy",
    "prompt": "In Kubernetes FinOps, what is the role of 'Kubecost / OpenCost'?",
    "options": [
      {
        "id": "a",
        "label": "A tool for creating Kubernetes clusters from scratch."
      },
      {
        "id": "b",
        "label": "A graphical game running on Kubernetes."
      },
      {
        "id": "c",
        "label": "An open-source database engine."
      },
      {
        "id": "d",
        "label": "Provides real-time visibility into Kubernetes cluster costs, allocating spend by Namespace, Pod, Service, and Deployment label tags across multi-tenant clusters."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_lit_12",
    "section": "literacy",
    "prompt": "What is 'Cost Allocation Tagging Policy' and why is 100% tag coverage required for FinOps maturity?",
    "options": [
      {
        "id": "a",
        "label": "Tagging physical server computers with adhesive labels."
      },
      {
        "id": "b",
        "label": "Adding social media hashtags to code comments."
      },
      {
        "id": "c",
        "label": "Enforces mandatory metadata tags (`Environment`, `Owner`, `Department`, `CostCenter`, `Project`) on every cloud resource to enable precise cost attribution."
      },
      {
        "id": "d",
        "label": "Renaming servers with employee names."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_lit_13",
    "section": "literacy",
    "prompt": "How does 'Rightsizing Compute Instances' optimize cloud efficiency without degrading performance?",
    "options": [
      {
        "id": "a",
        "label": "Upgrading all instances to the largest possible size."
      },
      {
        "id": "b",
        "label": "Analyzes historical 95th percentile CPU and memory utilization, downsizing over-provisioned instances (e.g. from `m5.4xlarge` at 5% load to `m5.xlarge`) to match actual workloads."
      },
      {
        "id": "c",
        "label": "Shutting down servers during business hours."
      },
      {
        "id": "d",
        "label": "Limiting server network bandwidth."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_lit_14",
    "section": "literacy",
    "prompt": "What is 'Model Quantization (FP8 / AWQ INT4)' from a FinOps hardware perspective?",
    "options": [
      {
        "id": "a",
        "label": "Reduces model VRAM memory footprint by 50%-75%, allowing a 70B model to fit on a single GPU node (e.g. 1x H100) instead of requiring expensive 4x/8x GPU clusters."
      },
      {
        "id": "b",
        "label": "Decreases model accuracy to zero."
      },
      {
        "id": "c",
        "label": "Forces models to run on mobile CPUs only."
      },
      {
        "id": "d",
        "label": "Eliminates all cloud hardware costs."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_lit_15",
    "section": "literacy",
    "prompt": "In cloud storage FinOps, what is 'Object Lifecycle Tiering' (e.g. S3 Intelligent-Tiering / Glacier)?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all files after 30 days automatically."
      },
      {
        "id": "b",
        "label": "Encrypts files with multiple passwords."
      },
      {
        "id": "c",
        "label": "Downloads files to local office computers."
      },
      {
        "id": "d",
        "label": "Automatically transitions infrequently accessed data from Standard S3 to Glacier Deep Archive (costing $0.00099/GB/month vs $0.023/GB/month), cutting storage costs by 95%."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_lit_16",
    "section": "literacy",
    "prompt": "What is 'Cloud Anomaly Detection' in automated FinOps monitoring?",
    "options": [
      {
        "id": "a",
        "label": "Detecting space weather anomalies."
      },
      {
        "id": "b",
        "label": "A monthly spreadsheet review."
      },
      {
        "id": "c",
        "label": "Machine learning algorithms tracking daily spend baselines, alerting engineering teams within hours when unexpected spikes (e.g. runaway recursive loop or unmonitored GPU cluster) occur."
      },
      {
        "id": "d",
        "label": "Checking server clock timezones."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_lit_17",
    "section": "literacy",
    "prompt": "How does 'Dynamic Auto-Shutdown of Non-Production Environments' save cloud budget?",
    "options": [
      {
        "id": "a",
        "label": "Shuts down production servers during customer transactions."
      },
      {
        "id": "b",
        "label": "Automatically stops staging and dev EC2/RDS instances outside business hours (7 PM to 7 AM on weekdays and all weekend), saving ~65% of monthly compute costs."
      },
      {
        "id": "c",
        "label": "Deletes staging databases permanently."
      },
      {
        "id": "d",
        "label": "Requires developers to pay for dev environments out-of-pocket."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_lit_18",
    "section": "literacy",
    "prompt": "What is 'Effective Savings Rate (ESR)' as a core FinOps KPI?",
    "options": [
      {
        "id": "a",
        "label": "The overall percentage savings achieved across total compute spend compared to on-demand list pricing, measuring commitment discount coverage and utilization efficiency."
      },
      {
        "id": "b",
        "label": "The interest rate earned in corporate bank savings accounts."
      },
      {
        "id": "c",
        "label": "The percentage of employees enrolled in 401(k) plans."
      },
      {
        "id": "d",
        "label": "The company's net profit margin."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_lit_19",
    "section": "literacy",
    "prompt": "In LLMOps cost engineering, what is 'Prompt Context Budgeting'?",
    "options": [
      {
        "id": "a",
        "label": "Limiting users to 1 question per day."
      },
      {
        "id": "b",
        "label": "Charging users per word typed."
      },
      {
        "id": "c",
        "label": "Deleting system prompts after first use."
      },
      {
        "id": "d",
        "label": "Enforcing strict token limits on retrieved RAG passages and conversation history (e.g. max 2,500 context tokens), preventing prompt bloat from multiplying per-query costs."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_lit_20",
    "section": "literacy",
    "prompt": "What is 'Multi-Cloud Cost Arbitrage' in enterprise infrastructure?",
    "options": [
      {
        "id": "a",
        "label": "Buying stock in multiple cloud providers."
      },
      {
        "id": "b",
        "label": "Signing 10-year lock-in contracts with a single vendor."
      },
      {
        "id": "c",
        "label": "Dynamically deploying non-latency-sensitive training or batch inference workloads across AWS, Azure, GCP, CoreWeave, or Lambda Labs based on real-time spot GPU price availability."
      },
      {
        "id": "d",
        "label": "Disabling multi-cloud architecture."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_lit_21",
    "section": "literacy",
    "prompt": "How does 'Committed Use Discounts (CUD) Coverage vs Utilization' differ?",
    "options": [
      {
        "id": "a",
        "label": "They are exact identical metrics."
      },
      {
        "id": "b",
        "label": "Coverage measures the percentage of total eligible compute running on discounts; Utilization measures the percentage of purchased commitments that are actually consumed."
      },
      {
        "id": "c",
        "label": "Coverage is for storage; Utilization is for compute."
      },
      {
        "id": "d",
        "label": "Utilization is always 100%."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_lit_22",
    "section": "literacy",
    "prompt": "What is 'GPU Core vs Memory Utilization Monitoring in FinOps'?",
    "options": [
      {
        "id": "a",
        "label": "Tracks GPU utilization via NVIDIA DCGM; low utilization (<20%) on expensive $30,000/year GPU instances signals severe over-provisioning and opportunity for model co-location."
      },
      {
        "id": "b",
        "label": "Measures GPU fan speed."
      },
      {
        "id": "c",
        "label": "Checks if the GPU is turned on."
      },
      {
        "id": "d",
        "label": "Measures monitor resolution."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_lit_23",
    "section": "literacy",
    "prompt": "How does 'Granular Token Cost Attribution per Feature' inform product pricing?",
    "options": [
      {
        "id": "a",
        "label": "Charges all features the exact same flat price."
      },
      {
        "id": "b",
        "label": "Estimates feature costs based on lines of code."
      },
      {
        "id": "c",
        "label": "Ignores token costs when setting SaaS prices."
      },
      {
        "id": "d",
        "label": "Tags model API calls with `feature_id` (e.g. `smart_search`, `doc_summary`, `code_gen`), calculating the exact gross margin and profitability of individual software features."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_lit_24",
    "section": "literacy",
    "prompt": "What is 'FinOps Governance: Guardrails vs Gates' in CI/CD cloud provisioning?",
    "options": [
      {
        "id": "a",
        "label": "Guardrails are physical fences in data centers."
      },
      {
        "id": "b",
        "label": "Gates completely block all deployments."
      },
      {
        "id": "c",
        "label": "Guardrails provide automated guardrails (e.g. max instance size limits, required tags); Gates require manual manager approval when proposed Terraform infrastructure exceeds budgets."
      },
      {
        "id": "d",
        "label": "There is no difference."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_lit_25",
    "section": "literacy",
    "prompt": "In database FinOps, what is 'Serverless Auto-Pause / Auto-Scaling' (e.g. Aurora Serverless / DynamoDB On-Demand)?",
    "options": [
      {
        "id": "a",
        "label": "Deletes the database during periods of inactivity."
      },
      {
        "id": "b",
        "label": "Automatically scales database compute units (ACUs) to zero during periods of zero user activity, eliminating base hourly database charges for low-traffic applications."
      },
      {
        "id": "c",
        "label": "Limits database storage to 10MB."
      },
      {
        "id": "d",
        "label": "Requires manual server rebooting."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_lit_26",
    "section": "literacy",
    "prompt": "How does 'Cross-Region Replication Traffic Cost Optimization' reduce cloud bills?",
    "options": [
      {
        "id": "a",
        "label": "Replicates only incremental deduplicated changes across cloud regions rather than full raw snapshots, compressing data to minimize inter-region bandwidth charges."
      },
      {
        "id": "b",
        "label": "Disables all backup replication."
      },
      {
        "id": "c",
        "label": "Transfers data using physical hard drives in postal mail."
      },
      {
        "id": "d",
        "label": "Replicates all data every 10 seconds."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_lit_27",
    "section": "literacy",
    "prompt": "What is 'FinOps Maturity Model (Crawl, Walk, Run)'?",
    "options": [
      {
        "id": "a",
        "label": "A model measuring employee physical fitness."
      },
      {
        "id": "b",
        "label": "A software testing framework."
      },
      {
        "id": "c",
        "label": "A method for writing code faster."
      },
      {
        "id": "d",
        "label": "Crawl: basic reactive spend visibility; Walk: proactive allocation and tagging; Run: automated real-time optimization, unit economics, and continuous governance."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_lit_28",
    "section": "literacy",
    "prompt": "How does 'Automated LLM Output Length Truncation' prevent accidental cost overruns?",
    "options": [
      {
        "id": "a",
        "label": "Limiting all responses to 5 words."
      },
      {
        "id": "b",
        "label": "Disabling output generation."
      },
      {
        "id": "c",
        "label": "Setting explicit `max_tokens` limits appropriate to the task (e.g. 100 tokens for titles, 500 for summaries), preventing runaway models from generating thousands of unneeded tokens."
      },
      {
        "id": "d",
        "label": "Charging users per character."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_lit_29",
    "section": "literacy",
    "prompt": "What is 'Unblended vs Blended Cost' in AWS Cost and Usage Reports (CUR)?",
    "options": [
      {
        "id": "a",
        "label": "Blended cost includes marketing expenses; Unblended cost is pure hardware."
      },
      {
        "id": "b",
        "label": "Unblended represents the actual standalone rate charged to a specific account; Blended represents the average rate calculated across an entire consolidated billing organization."
      },
      {
        "id": "c",
        "label": "Unblended cost is calculated in euros."
      },
      {
        "id": "d",
        "label": "There is no difference in billing math."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_lit_30",
    "section": "literacy",
    "prompt": "Why is 'Executive FinOps Alignment' critical for engineering team success?",
    "options": [
      {
        "id": "a",
        "label": "Bridges engineering velocity with financial accountability, ensuring cloud and AI investments directly drive gross margin expansion and business revenue growth."
      },
      {
        "id": "b",
        "label": "To punish engineers for using cloud servers."
      },
      {
        "id": "c",
        "label": "To eliminate all technology hiring."
      },
      {
        "id": "d",
        "label": "To ban cloud computing in the enterprise."
      }
    ],
    "correctOptionId": "a"
  }
];

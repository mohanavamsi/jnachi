import { CertQuestion } from '../types';

export const FINOPS_ARCHITECT_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "finops_aut_01",
    "section": "automation",
    "prompt": "How can Terraform / OpenTofu pipelines automate cost estimation on Pull Requests before merging infrastructure changes?",
    "options": [
      {
        "id": "a",
        "label": "Asking software engineers to guess costs in PR descriptions."
      },
      {
        "id": "b",
        "label": "Integrating tools like `Infracost` into CI/CD workflows, parsing Terraform plans and posting automated PR comments showing exact monthly dollar cost differences ($Delta$ cost)."
      },
      {
        "id": "c",
        "label": "Merging infrastructure changes without cost review."
      },
      {
        "id": "d",
        "label": "Disabling Terraform in CI/CD."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_aut_02",
    "section": "automation",
    "prompt": "When building an automated LLM cost optimization gateway, how is dynamic token caching implemented with Redis?",
    "options": [
      {
        "id": "a",
        "label": "Generates SHA-256 hashes of normalized prompt texts and model parameters, storing completions with configured TTLs in Redis to return sub-millisecond cached responses."
      },
      {
        "id": "b",
        "label": "Stores completions in text files on the server desktop."
      },
      {
        "id": "c",
        "label": "Deletes all cache keys after 1 second."
      },
      {
        "id": "d",
        "label": "Sends completions to public web forums."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_aut_03",
    "section": "automation",
    "prompt": "How can AWS Lambda and EventBridge automate daily non-production compute shutdowns?",
    "options": [
      {
        "id": "a",
        "label": "Asking developers to manually log into the AWS console every evening."
      },
      {
        "id": "b",
        "label": "Stopping all production databases every evening."
      },
      {
        "id": "c",
        "label": "Deleting the AWS root account."
      },
      {
        "id": "d",
        "label": "Scheduled EventBridge cron rules invoke Lambda functions that tag and stop all EC2 / RDS / EKS worker nodes outside business hours, restarting them on weekday mornings."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_aut_04",
    "section": "automation",
    "prompt": "In automated cloud anomaly detection, how does the AWS Cost Anomaly Detection service alert engineering teams?",
    "options": [
      {
        "id": "a",
        "label": "Sends an invoice at the end of the year."
      },
      {
        "id": "b",
        "label": "Shuts down the cloud account immediately."
      },
      {
        "id": "c",
        "label": "Uses machine learning to identify unexpected spend surges against historical baselines, dispatching instant notifications via Amazon SNS to Slack / PagerDuty with root-cause insights."
      },
      {
        "id": "d",
        "label": "Prints anomalies on office printers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_aut_05",
    "section": "automation",
    "prompt": "How can an automated pipeline enforce tag compliance on newly created cloud resources?",
    "options": [
      {
        "id": "a",
        "label": "Manually checking tags once per year."
      },
      {
        "id": "b",
        "label": "Using AWS Organizations Service Control Policies (SCPs) / Azure Policy to deny resource creation if mandatory tags (`Owner`, `CostCenter`, `Environment`) are missing."
      },
      {
        "id": "c",
        "label": "Allowing untagged resources to run indefinitely."
      },
      {
        "id": "d",
        "label": "Tagging all resources with random numbers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_aut_06",
    "section": "automation",
    "prompt": "When automating Spot GPU instance handling on Kubernetes with Karpenter / Cluster Autoscaler, what is the best practice?",
    "options": [
      {
        "id": "a",
        "label": "Subscribes to AWS Node Termination Handler notices via SQS/EventBridge, initiating graceful pod eviction and rescheduling onto warm on-demand fallback nodes within 2 minutes."
      },
      {
        "id": "b",
        "label": "Allowing spot node reclaims to hard-crash running batch jobs without warning."
      },
      {
        "id": "c",
        "label": "Disabling Spot instances completely."
      },
      {
        "id": "d",
        "label": "Running 100% of production databases on Spot instances."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_aut_07",
    "section": "automation",
    "prompt": "How does 'Automated EBS Volume Cleanup (Cloud Custodian)' eliminate wasted disk spend?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all active database volumes immediately."
      },
      {
        "id": "b",
        "label": "Compresses volumes into text files."
      },
      {
        "id": "c",
        "label": "Ignores orphaned storage volumes."
      },
      {
        "id": "d",
        "label": "Scans for unattached EBS volumes (`status=available`) that have been detached for more than 7 days, snapshots them for safety, and automatically deletes the orphaned volumes."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_aut_08",
    "section": "automation",
    "prompt": "In multi-tenant Kubernetes clusters, how does automated Kubecost integration export pod cost data to corporate data warehouses?",
    "options": [
      {
        "id": "a",
        "label": "Prints cost numbers to terminal stdout only."
      },
      {
        "id": "b",
        "label": "Emails screenshots of terminal screens."
      },
      {
        "id": "c",
        "label": "Exports daily allocated cost CSV / Parquet dumps to Amazon S3 / Google BigQuery, partitioned by department and namespace labels for PowerBI/Tableau executive dashboards."
      },
      {
        "id": "d",
        "label": "Deletes cost data after 24 hours."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_aut_09",
    "section": "automation",
    "prompt": "How can Python scripts automate S3 storage class transitions for historical ML training datasets?",
    "options": [
      {
        "id": "a",
        "label": "Downloads all training datasets to local USB drives."
      },
      {
        "id": "b",
        "label": "Configures S3 Lifecycle Configuration rules transitioning training artifacts untouched for 90 days to S3 Glacier Flexible Retrieval and 365 days to Deep Archive."
      },
      {
        "id": "c",
        "label": "Deletes historical training datasets permanently."
      },
      {
        "id": "d",
        "label": "Stores all datasets in S3 Standard forever."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_aut_10",
    "section": "automation",
    "prompt": "What is 'Automated LLM Model Fallback Routing based on API Token Prices'?",
    "options": [
      {
        "id": "a",
        "label": "A model router that evaluates query complexity; simple prompts default to ultra-low cost $0.15/1M token models, dynamically upgrading only when task complexity scores exceed thresholds."
      },
      {
        "id": "b",
        "label": "Routes all queries to the most expensive model unconditionally."
      },
      {
        "id": "c",
        "label": "Disables all model routing."
      },
      {
        "id": "d",
        "label": "Charges users a variable fee per minute."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_aut_11",
    "section": "automation",
    "prompt": "When automating database cost optimization in AWS RDS, how are over-provisioned IOPS identified?",
    "options": [
      {
        "id": "a",
        "label": "Checks if the database is running."
      },
      {
        "id": "b",
        "label": "Increases IOPS to 100,000 unconditionally."
      },
      {
        "id": "c",
        "label": "Deletes database indexes."
      },
      {
        "id": "d",
        "label": "Analyzes Amazon CloudWatch `ReadIOPS` and `WriteIOPS` metrics over 30 days; if provisioned IOPS (io1/io2) exceed actual peak usage by 5x, recommends converting to GP3 storage."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_aut_12",
    "section": "automation",
    "prompt": "How does 'Automated Unused Elastic IP Release' save cloud budget?",
    "options": [
      {
        "id": "a",
        "label": "Releases all active website IP addresses during business hours."
      },
      {
        "id": "b",
        "label": "Purchases 1,000 extra IP addresses."
      },
      {
        "id": "c",
        "label": "Lambda scripts identify Elastic IP addresses not associated with any running EC2 instance or NAT gateway, releasing them back to the cloud pool to prevent hourly idle fees."
      },
      {
        "id": "d",
        "label": "Hides IP addresses behind proxy servers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_aut_13",
    "section": "automation",
    "prompt": "In Kubernetes, how does 'Vertical Pod Autoscaler (VPA) in Recommender Mode' automate compute rightsizing?",
    "options": [
      {
        "id": "a",
        "label": "Restarts all pods every 10 seconds."
      },
      {
        "id": "b",
        "label": "Monitors real pod CPU/RAM usage over time and generates optimal `requests` and `limits` recommendations without disrupting running pods, preventing over-allocation."
      },
      {
        "id": "c",
        "label": "Allocates 64GB RAM to every single pod."
      },
      {
        "id": "d",
        "label": "Deletes pods that use less than 1GB RAM."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_aut_14",
    "section": "automation",
    "prompt": "How can Python scripts automate AWS Savings Plans commitment recommendations?",
    "options": [
      {
        "id": "a",
        "label": "Calls AWS Cost Explorer API (`GetSavingsPlansPurchaseRecommendation`), evaluates historical on-demand baseline compute, and models optimal 1-year or 3-year commitment amounts."
      },
      {
        "id": "b",
        "label": "Purchases $1,000,000 of Savings Plans randomly."
      },
      {
        "id": "c",
        "label": "Never buys Savings Plans."
      },
      {
        "id": "d",
        "label": "Cancels all active cloud subscriptions."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_aut_15",
    "section": "automation",
    "prompt": "What is 'Automated Old Snapshot Purging' in AWS / Azure storage hygiene?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all database backups immediately after creation."
      },
      {
        "id": "b",
        "label": "Saves snapshots to local floppy disks."
      },
      {
        "id": "c",
        "label": "Disables all automated snapshotting."
      },
      {
        "id": "d",
        "label": "Lifecycle automation script that identifies automated daily EBS / RDS snapshots older than corporate retention policies (e.g. 30 days) and purges them to eliminate storage bloat."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_aut_16",
    "section": "automation",
    "prompt": "How does an automated AI gateway enforce 'Per-User Daily Token Spend Caps' in SaaS applications?",
    "options": [
      {
        "id": "a",
        "label": "Deletes the user's account when they reach 100 tokens."
      },
      {
        "id": "b",
        "label": "Charges the user's credit card $100 automatically."
      },
      {
        "id": "c",
        "label": "Increments an atomic Redis key `tokens:user:{id}:{date}` on each completion; if the count exceeds the plan limit, returns an upgrade modal or graceful throttle."
      },
      {
        "id": "d",
        "label": "Allows users to generate infinite tokens for free."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_aut_17",
    "section": "automation",
    "prompt": "When automating multi-account cloud billing consolidation in AWS Organizations, how is the Cost and Usage Report (CUR) exported?",
    "options": [
      {
        "id": "a",
        "label": "Downloads billing invoices as PDF files manually."
      },
      {
        "id": "b",
        "label": "Enables AWS CUR export to a dedicated S3 bucket with hourly/daily line-item granularity, compressed as Parquet for direct querying with AWS Athena."
      },
      {
        "id": "c",
        "label": "Takes screenshots of the billing console."
      },
      {
        "id": "d",
        "label": "Disables consolidated billing."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_aut_18",
    "section": "automation",
    "prompt": "How does 'Automated NAT Gateway Traffic Analysis' identify runaway cross-AZ bandwidth costs?",
    "options": [
      {
        "id": "a",
        "label": "Analyzes VPC Flow Logs with Amazon Athena to discover internal microservices routing intra-VPC traffic through public NAT Gateways instead of free VPC Endpoints (PrivateLink)."
      },
      {
        "id": "b",
        "label": "Shuts down all NAT Gateways permanently."
      },
      {
        "id": "c",
        "label": "Measures physical router temperatures."
      },
      {
        "id": "d",
        "label": "Disables all VPC networking."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_aut_19",
    "section": "automation",
    "prompt": "What is 'Automated Container Image Cache Cleanup' in CI/CD build nodes?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all source code files from the repository."
      },
      {
        "id": "b",
        "label": "Reinstalls the operating system after every build."
      },
      {
        "id": "c",
        "label": "Disables Docker in CI/CD."
      },
      {
        "id": "d",
        "label": "Runs automated cron jobs pruning dangling Docker images (`docker image prune -a --filter 'until=48h'`), preventing build server disks from filling up."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_aut_20",
    "section": "automation",
    "prompt": "How does 'Automated Cloud Spend Alerting to Engineering Slack Channels' drive accountability?",
    "options": [
      {
        "id": "a",
        "label": "Spams 10,000 alerts per minute to all employees."
      },
      {
        "id": "b",
        "label": "Posts public criticisms of individual engineers."
      },
      {
        "id": "c",
        "label": "Sends weekly digest messages comparing actual departmental spend vs monthly budget targets, highlighting top 3 cost-driving services and newly launched untagged resources."
      },
      {
        "id": "d",
        "label": "Hides all financial data from engineers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_aut_21",
    "section": "automation",
    "prompt": "When automating serverless architecture cost optimization, how is Lambda memory sizing optimized?",
    "options": [
      {
        "id": "a",
        "label": "Allocates 10GB memory to all Lambda functions."
      },
      {
        "id": "b",
        "label": "Uses the `AWS Lambda Power Tuning` state machine to test functions across memory tiers (128MB to 10GB), identifying the exact point where execution speed offsets memory cost."
      },
      {
        "id": "c",
        "label": "Allocates 128MB memory to all functions regardless of timeout."
      },
      {
        "id": "d",
        "label": "Runs functions only once per month."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_aut_22",
    "section": "automation",
    "prompt": "How does 'Automated Spot-to-On-Demand Fallback in Terraform' maintain deployment reliability?",
    "options": [
      {
        "id": "a",
        "label": "Defines Auto Scaling Group mixed instances policies specifying 70% Spot with 30% on-demand base, automatically provisioning on-demand nodes if Spot capacity is unavailable."
      },
      {
        "id": "b",
        "label": "Fails all deployments when Spot instances are unavailable."
      },
      {
        "id": "c",
        "label": "Deletes the Terraform state file."
      },
      {
        "id": "d",
        "label": "Disables autoscaling."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_aut_23",
    "section": "automation",
    "prompt": "What is 'Automated Idle GPU Cluster Tear-Down in Ray / Slurm'?",
    "options": [
      {
        "id": "a",
        "label": "Leaves GPU instances running at 100% idle 24/7."
      },
      {
        "id": "b",
        "label": "Shuts down GPU nodes while training jobs are active."
      },
      {
        "id": "c",
        "label": "Disables GPU cluster autoscaling."
      },
      {
        "id": "d",
        "label": "Monitors Ray worker node GPU utilization; if a GPU node experiences 0 running tasks for more than 15 consecutive minutes, it automatically terminates the instance."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_aut_24",
    "section": "automation",
    "prompt": "How can an automated pipeline audit third-party SaaS subscription seat utilization (e.g. GitHub / Datadog)?",
    "options": [
      {
        "id": "a",
        "label": "Pays for all former employees forever."
      },
      {
        "id": "b",
        "label": "Purchases 500 extra licenses every month."
      },
      {
        "id": "c",
        "label": "Queries SaaS admin APIs, identifies user seats with zero login activity in the last 60 days, and automatically reclaims/downgrades licenses."
      },
      {
        "id": "d",
        "label": "Deletes active employee accounts."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_aut_25",
    "section": "automation",
    "prompt": "In automated FinOps reporting, what is 'Unit Cost Normalization by Business Transaction'?",
    "options": [
      {
        "id": "a",
        "label": "Divides total cloud spend by the number of office desks."
      },
      {
        "id": "b",
        "label": "Joins daily cloud infrastructure billing data with application product telemetry in Athena, calculating metrics like 'Cost per E-Commerce Checkout' or 'Cost per API Query'."
      },
      {
        "id": "c",
        "label": "Multiplies cloud spend by stock price."
      },
      {
        "id": "d",
        "label": "Ignores business metrics in cloud reporting."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_aut_26",
    "section": "automation",
    "prompt": "How does 'Automated CDN Caching Configuration' reduce origin server and egress costs?",
    "options": [
      {
        "id": "a",
        "label": "Configures CloudFront / Cloudflare edge caching with optimal `Cache-Control: max-age` and stale-while-revalidate headers, serving 95%+ of static assets from edge caches."
      },
      {
        "id": "b",
        "label": "Disables CDN caching to force every request to hit origin servers."
      },
      {
        "id": "c",
        "label": "Deletes website images."
      },
      {
        "id": "d",
        "label": "Redirects all website traffic to an error page."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_aut_27",
    "section": "automation",
    "prompt": "What is 'Automated Orphaned Disk Snapshot Finder' in multi-account AWS environments?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all cloud accounts."
      },
      {
        "id": "b",
        "label": "Takes new snapshots every second."
      },
      {
        "id": "c",
        "label": "Sends snapshots to employee personal emails."
      },
      {
        "id": "d",
        "label": "Iterates across all AWS accounts in an Organization via IAM assume-role, identifying snapshots belonging to deleted EC2 volumes and compiling a consolidated cleanup report."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_aut_28",
    "section": "automation",
    "prompt": "How can Python scripts automate DynamoDB Capacity Mode Optimization (Provisioned vs On-Demand)?",
    "options": [
      {
        "id": "a",
        "label": "Sets all DynamoDB tables to 100,000 WCU permanently."
      },
      {
        "id": "b",
        "label": "Deletes DynamoDB tables on weekends."
      },
      {
        "id": "c",
        "label": "Evaluates table request variance; converts steady predictable workloads to Provisioned mode with Auto-Scaling (saving ~50%-70%) while keeping spiky unpredictable tables in On-Demand."
      },
      {
        "id": "d",
        "label": "Replaces DynamoDB with CSV files on disk."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_aut_29",
    "section": "automation",
    "prompt": "What is 'Automated LLM Context Pruning via Prompt Compression (LLMLingua)'?",
    "options": [
      {
        "id": "a",
        "label": "Zips prompts into .rar archives."
      },
      {
        "id": "b",
        "label": "Automatically removes non-essential tokens from retrieved RAG context passages before transmitting to external LLM APIs, cutting prompt token costs by up to 50% without quality loss."
      },
      {
        "id": "c",
        "label": "Deletes all vowels from the prompt."
      },
      {
        "id": "d",
        "label": "Translates prompts into hexadecimal."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_aut_30",
    "section": "automation",
    "prompt": "Why should automated FinOps scripts maintain 'Dry-Run Modes' before executing resource deletions?",
    "options": [
      {
        "id": "a",
        "label": "Generates an audit report of candidate resources that would be deleted, allowing human review and preventing accidental deletion of critical production infrastructure."
      },
      {
        "id": "b",
        "label": "To make scripts execute 10x slower."
      },
      {
        "id": "c",
        "label": "Because cloud providers forbid deleting resources."
      },
      {
        "id": "d",
        "label": "To increase cloud billing costs."
      }
    ],
    "correctOptionId": "a"
  }
];

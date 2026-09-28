import { CertQuestion } from '../types';

export const FINOPS_ARCHITECT_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "finops_priv_01",
    "section": "privacy",
    "prompt": "Why must cloud billing exports and Cost and Usage Reports (CUR) be protected with strict IAM access controls?",
    "options": [
      {
        "id": "a",
        "label": "Because billing files contain executable computer viruses."
      },
      {
        "id": "b",
        "label": "Billing reports detail proprietary infrastructure topologies, active vendor contracts, customer usage volumes, and operational revenue trends that competitors could exploit."
      },
      {
        "id": "c",
        "label": "Because cloud providers delete accounts if billing files are read."
      },
      {
        "id": "d",
        "label": "To hide server expenses from corporate finance teams."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_priv_02",
    "section": "privacy",
    "prompt": "How does 'Tenant Billing Privacy / Masking' work in multi-tenant SaaS platforms?",
    "options": [
      {
        "id": "a",
        "label": "Anonymizes or aggregates individual tenant consumption metrics in public engineering dashboards, ensuring Tenant A cannot infer Tenant B's transaction volume or growth."
      },
      {
        "id": "b",
        "label": "Shows all customer spending figures on a public leaderboard."
      },
      {
        "id": "c",
        "label": "Charges all tenants identical flat monthly rates."
      },
      {
        "id": "d",
        "label": "Deletes tenant billing records after payment."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_priv_03",
    "section": "privacy",
    "prompt": "In SOC2 Type II compliance for cloud infrastructure, how is 'Unauthorized Resource Provisioning' prevented?",
    "options": [
      {
        "id": "a",
        "label": "Allowing all employees to launch cloud servers freely."
      },
      {
        "id": "b",
        "label": "Disabling cloud authentication."
      },
      {
        "id": "c",
        "label": "Requiring developers to use personal credit cards."
      },
      {
        "id": "d",
        "label": "Enforcing least-privilege IAM policies, requiring Terraform infrastructure-as-code for all provisioning, and blocking interactive root/console creation of unapproved cloud services."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_priv_04",
    "section": "privacy",
    "prompt": "What is 'Cryptographic KMS Key Separation for Cost Allocation Data'?",
    "options": [
      {
        "id": "a",
        "label": "Encrypting billing reports with standard passwords."
      },
      {
        "id": "b",
        "label": "Using the exact same encryption key for all corporate data."
      },
      {
        "id": "c",
        "label": "Encrypting detailed billing data buckets with dedicated AWS KMS customer-managed keys (CMKs) with independent key policies separate from standard application data."
      },
      {
        "id": "d",
        "label": "Disabling encryption on S3 billing buckets."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_priv_05",
    "section": "privacy",
    "prompt": "Why should cloud cost allocation tags avoid storing plain-text Customer PII (e.g. `CustomerName=JohnDoe`)?",
    "options": [
      {
        "id": "a",
        "label": "Because cloud providers charge $10 per tag."
      },
      {
        "id": "b",
        "label": "Resource tags are propagated across unencrypted cloud metadata, billing logs, and monitoring metrics, violating GDPR/CCPA data minimization principles."
      },
      {
        "id": "c",
        "label": "Because tags cannot contain letters."
      },
      {
        "id": "d",
        "label": "Because customer names make servers execute slower."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_priv_06",
    "section": "privacy",
    "prompt": "How does 'Automated Hard Spending Ceilings with Circuit Breakers' prevent catastrophic cloud billing runaway?",
    "options": [
      {
        "id": "a",
        "label": "Automated event rules trigger Lambda functions that freeze non-essential scaling groups or revoke API keys when daily account spend exceeds pre-authorized risk thresholds."
      },
      {
        "id": "b",
        "label": "Sends a physical letter to the CEO."
      },
      {
        "id": "c",
        "label": "Allows infinite spending without intervention."
      },
      {
        "id": "d",
        "label": "Deletes the AWS account on budget breach."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_priv_07",
    "section": "privacy",
    "prompt": "What is 'Cryptomining Hijacking Detection' in cloud security and FinOps?",
    "options": [
      {
        "id": "a",
        "label": "Mining Bitcoin on idle office computers."
      },
      {
        "id": "b",
        "label": "A planned corporate treasury investment."
      },
      {
        "id": "c",
        "label": "A standard cloud database backup."
      },
      {
        "id": "d",
        "label": "Real-time alerts detecting unauthorized spinning up of high-end GPU/compute instances (e.g. `g5.48xlarge`) with 100% CPU/GPU saturation across unusual geographic regions."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_priv_08",
    "section": "privacy",
    "prompt": "In GDPR compliance, how must 'Right to Erasure' requests handle historical cloud billing line items?",
    "options": [
      {
        "id": "a",
        "label": "Delete all corporate financial invoices immediately upon user request."
      },
      {
        "id": "b",
        "label": "Refuse all user deletion requests."
      },
      {
        "id": "c",
        "label": "Statutory tax and financial accounting regulations require retaining invoice line items; pseudonymize or purge customer personal metadata while keeping financial transaction amounts intact."
      },
      {
        "id": "d",
        "label": "Alter historical accounting ledgers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_priv_09",
    "section": "privacy",
    "prompt": "How does 'Service Control Policy (SCP) Region Restriction' prevent accidental out-of-region cloud spend?",
    "options": [
      {
        "id": "a",
        "label": "Allows servers to be provisioned in all 35 global regions freely."
      },
      {
        "id": "b",
        "label": "Restricts cloud resource provisioning exclusively to authorized geographic regions (e.g. `us-east-1`, `eu-central-1`), blocking unauthorized resource creation in distant expensive regions."
      },
      {
        "id": "c",
        "label": "Shuts down the internet in unauthorized regions."
      },
      {
        "id": "d",
        "label": "Forces all servers to run on a single local computer."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_priv_10",
    "section": "privacy",
    "prompt": "What is 'Role-Based Cost Visibility / Departmental Isolation' in enterprise cloud portals?",
    "options": [
      {
        "id": "a",
        "label": "Department engineering managers can view only their own team's allocated cloud infrastructure spend and budgets, preventing exposure of cross-departmental financial data."
      },
      {
        "id": "b",
        "label": "Hiding all cost data from engineering managers."
      },
      {
        "id": "c",
        "label": "Allowing all employees to view executive salaries in the billing dashboard."
      },
      {
        "id": "d",
        "label": "Disabling cost monitoring for finance teams."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_priv_11",
    "section": "privacy",
    "prompt": "Why should automated FinOps optimization tools use 'Read-Only IAM Roles' by default?",
    "options": [
      {
        "id": "a",
        "label": "Because third-party tools cannot process write permissions."
      },
      {
        "id": "b",
        "label": "To make tools execute 10x faster."
      },
      {
        "id": "c",
        "label": "Because read-only permissions are 100% free."
      },
      {
        "id": "d",
        "label": "Adheres to the principle of least privilege: third-party SaaS cost tools inspect resource metadata and utilization without holding destructive permissions to delete or modify servers."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_priv_12",
    "section": "privacy",
    "prompt": "What is 'Model Ingestion Data Isolation' in multi-tenant LLM inference proxies?",
    "options": [
      {
        "id": "a",
        "label": "Saves all user prompts in public files."
      },
      {
        "id": "b",
        "label": "Shares prompt completions across all users."
      },
      {
        "id": "c",
        "label": "Guarantees that user prompts and model completions routed through the shared cost-allocation proxy are never persisted to disk or accessible across tenant ID boundaries."
      },
      {
        "id": "d",
        "label": "Disables tenant authentication."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_priv_13",
    "section": "privacy",
    "prompt": "In ISO 27001 compliance for cloud infrastructure, how is 'Capacity Management & Cost Planning' audited?",
    "options": [
      {
        "id": "a",
        "label": "Buying infinite server capacity without monitoring."
      },
      {
        "id": "b",
        "label": "Demonstrating formal capacity planning policies, continuous monitoring of compute/storage headroom, and proactive scaling mechanisms to avoid service unavailability."
      },
      {
        "id": "c",
        "label": "Allowing servers to run out of disk space."
      },
      {
        "id": "d",
        "label": "Deleting all server capacity documentation."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_priv_14",
    "section": "privacy",
    "prompt": "How does 'Automated Secret Scanning in Terraform Cost Pipelines' protect credentials?",
    "options": [
      {
        "id": "a",
        "label": "Scans Terraform HCL files and state files in CI/CD to ensure database passwords and API tokens are not inadvertently checked in or logged in cost output comments."
      },
      {
        "id": "b",
        "label": "Encrypts all Terraform files with user passwords."
      },
      {
        "id": "c",
        "label": "Ignores secrets in infrastructure code."
      },
      {
        "id": "d",
        "label": "Deletes Terraform code after execution."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_priv_15",
    "section": "privacy",
    "prompt": "What is 'Egress Data Exfiltration Detection' in network FinOps monitoring?",
    "options": [
      {
        "id": "a",
        "label": "A planned weekly customer data download."
      },
      {
        "id": "b",
        "label": "A standard website software update."
      },
      {
        "id": "c",
        "label": "A routine database index rebuild."
      },
      {
        "id": "d",
        "label": "Security alert triggered when a sudden massive spike in outbound network egress transfer occurs from a private database subnet to an unknown external IP address."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_priv_16",
    "section": "privacy",
    "prompt": "Why must 'Automated Resource Deletion Policies' enforce Multi-Factor Human Approval for production databases?",
    "options": [
      {
        "id": "a",
        "label": "To slow down engineering teams intentionally."
      },
      {
        "id": "b",
        "label": "Because automated deletion of databases is illegal."
      },
      {
        "id": "c",
        "label": "Prevents an automated FinOps cleanup script from erroneously deleting a mission-critical production database mistaken for an idle staging instance."
      },
      {
        "id": "d",
        "label": "To increase cloud storage charges."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_priv_17",
    "section": "privacy",
    "prompt": "In multi-cloud FinOps, how should cross-account IAM federation be configured securely?",
    "options": [
      {
        "id": "a",
        "label": "Hardcoding root account credentials in python scripts."
      },
      {
        "id": "b",
        "label": "Using OIDC (OpenID Connect) federation with short-lived STS assume-role tokens, eliminating long-lived static AWS access keys and secret keys."
      },
      {
        "id": "c",
        "label": "Sharing passwords in company chat channels."
      },
      {
        "id": "d",
        "label": "Disabling IAM role assumptions."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_priv_18",
    "section": "privacy",
    "prompt": "What is 'Zero Data Retention (ZDR) Verification' for enterprise LLM cost gateways?",
    "options": [
      {
        "id": "a",
        "label": "Verifying that LLM API requests pass headers requesting zero data logging and confirming that gateway proxy logs record only token count integers, not payload text."
      },
      {
        "id": "b",
        "label": "Deleting the database after every query."
      },
      {
        "id": "c",
        "label": "Storing all user conversations forever."
      },
      {
        "id": "d",
        "label": "Disabling token counting."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_priv_19",
    "section": "privacy",
    "prompt": "How does 'Cost Data Anonymization in Benchmarking' protect corporate competitive advantage?",
    "options": [
      {
        "id": "a",
        "label": "Publishes full unredacted cloud bills to competitors."
      },
      {
        "id": "b",
        "label": "Refuses to participate in industry research."
      },
      {
        "id": "c",
        "label": "Provides fake financial data."
      },
      {
        "id": "d",
        "label": "Strips company identity and specific infrastructure names when contributing to industry cloud efficiency benchmarks (e.g. FinOps Foundation State of FinOps)."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_priv_20",
    "section": "privacy",
    "prompt": "What is 'Audit Trail Immutability for Cloud Budget Reallocations'?",
    "options": [
      {
        "id": "a",
        "label": "Allowing any engineer to change corporate budgets without approval."
      },
      {
        "id": "b",
        "label": "Deleting budget records at the end of each month."
      },
      {
        "id": "c",
        "label": "Logging all department budget modifications, manager approval timestamps, and rationale to an append-only audit ledger to prevent budget tampering."
      },
      {
        "id": "d",
        "label": "Writing budgets on physical paper only."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_priv_21",
    "section": "privacy",
    "prompt": "Why should 'Customer Tenant Cost Data' be encrypted in multi-tenant SaaS analytics databases?",
    "options": [
      {
        "id": "a",
        "label": "Because unencrypted data cannot be queried."
      },
      {
        "id": "b",
        "label": "Prevents internal non-authorized staff from discovering exact customer profit margins, transaction volumes, and contractual tier discounts."
      },
      {
        "id": "c",
        "label": "To increase database processing latency."
      },
      {
        "id": "d",
        "label": "Because encryption makes data files smaller."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_priv_22",
    "section": "privacy",
    "prompt": "How does 'Automated KMS Key Rotation for Billing Buckets' maintain compliance?",
    "options": [
      {
        "id": "a",
        "label": "Enables annual automated cryptographic key rotation on AWS KMS keys protecting billing datasets without requiring manual re-encryption of historical files."
      },
      {
        "id": "b",
        "label": "Changes passwords every 5 minutes."
      },
      {
        "id": "c",
        "label": "Deletes old keys and loses access to data."
      },
      {
        "id": "d",
        "label": "Disables key management."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_priv_23",
    "section": "privacy",
    "prompt": "What is 'Privilege Escalation via Cloud Cost Management Tools' risk?",
    "options": [
      {
        "id": "a",
        "label": "When a cloud tool runs out of memory."
      },
      {
        "id": "b",
        "label": "When a developer gets a job promotion."
      },
      {
        "id": "c",
        "label": "When server electricity prices rise."
      },
      {
        "id": "d",
        "label": "When a third-party cost tool with excessive IAM write permissions is exploited by an attacker to create administrative accounts or access customer data."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_priv_24",
    "section": "privacy",
    "prompt": "In HIPAA environments, how must 'Healthcare AI Inference Token Billing' be tracked?",
    "options": [
      {
        "id": "a",
        "label": "Logging patient medical diagnoses in cloud billing tags."
      },
      {
        "id": "b",
        "label": "Sharing medical records with cloud billing support agents."
      },
      {
        "id": "c",
        "label": "Tracking token counts keyed purely by anonymous internal `request_uuid` without logging Protected Health Information (PHI) patient identifiers in billing metrics."
      },
      {
        "id": "d",
        "label": "Disabling token tracking for healthcare apps."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_priv_25",
    "section": "privacy",
    "prompt": "How does 'Automated Network Security Group Auditing' reduce cost and risk?",
    "options": [
      {
        "id": "a",
        "label": "Opens all ports to the public internet."
      },
      {
        "id": "b",
        "label": "Detects security groups with open inbound rules (`0.0.0.0/0` on port 22/3389), closing vulnerabilities that invite cryptomining attacks and unwanted traffic."
      },
      {
        "id": "c",
        "label": "Deletes all network firewalls."
      },
      {
        "id": "d",
        "label": "Bans all incoming internet traffic."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_priv_26",
    "section": "privacy",
    "prompt": "What is 'Data Sovereignty Compliance in Cloud Cost Allocation'?",
    "options": [
      {
        "id": "a",
        "label": "Ensuring that cost reporting and telemetry data originating in specific jurisdictions (e.g. EU, Germany, India) remain stored within authorized geographic borders."
      },
      {
        "id": "b",
        "label": "Paying cloud bills exclusively in local physical cash."
      },
      {
        "id": "c",
        "label": "Buying servers from local hardware stores only."
      },
      {
        "id": "d",
        "label": "Disabling all cross-border internet communication."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "finops_priv_27",
    "section": "privacy",
    "prompt": "Why should 'Shadow IT Cloud Account Creation' be strictly blocked by enterprise root organizations?",
    "options": [
      {
        "id": "a",
        "label": "Because employees should not learn cloud computing."
      },
      {
        "id": "b",
        "label": "Because cloud accounts expire after 1 day."
      },
      {
        "id": "c",
        "label": "To force all code to run on mainframe computers."
      },
      {
        "id": "d",
        "label": "Unmanaged individual developer cloud accounts bypass corporate security controls, SSO, audit logging, data governance, and negotiated enterprise discount pricing."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "finops_priv_28",
    "section": "privacy",
    "prompt": "How does 'Encrypted Showback Dashboard Access via SSO/SAML' protect departmental budgets?",
    "options": [
      {
        "id": "a",
        "label": "Allows anonymous public access to all company financial charts."
      },
      {
        "id": "b",
        "label": "Sends passwords in unencrypted plain text."
      },
      {
        "id": "c",
        "label": "Enforces corporate identity provider authentication (Okta / Azure AD) with multi-factor authentication (MFA) before granting access to financial cost portals."
      },
      {
        "id": "d",
        "label": "Requires users to log in with social media accounts."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "finops_priv_29",
    "section": "privacy",
    "prompt": "What is 'Audit Verification of Cloud Contract Termination and Data Sanitization'?",
    "options": [
      {
        "id": "a",
        "label": "Deleting cloud bills from the computer."
      },
      {
        "id": "b",
        "label": "Obtaining cryptographically verifiable proof of permanent data destruction (NIST 800-88 compliance) when terminating cloud vendor subscriptions or decommissioning hardware."
      },
      {
        "id": "c",
        "label": "Abandoning cloud servers without shutting them down."
      },
      {
        "id": "d",
        "label": "Paying extra fees to leave data in the cloud."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "finops_priv_30",
    "section": "privacy",
    "prompt": "Why must 'FinOps Optimization Scripts' be subject to standard code review and peer sign-off?",
    "options": [
      {
        "id": "a",
        "label": "Prevents logic bugs in cleanup scripts from unintentionally deleting live production infrastructure or triggering catastrophic service disruptions."
      },
      {
        "id": "b",
        "label": "To increase script execution time."
      },
      {
        "id": "c",
        "label": "Because FinOps scripts do not contain code."
      },
      {
        "id": "d",
        "label": "To prevent financial transparency."
      }
    ],
    "correctOptionId": "a"
  }
];

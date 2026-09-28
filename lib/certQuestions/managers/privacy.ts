import { CertQuestion } from '../types';

export const MANAGERS_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "mgr_priv_01",
    "section": "privacy",
    "prompt": "How should an Engineering Director establish corporate governance for developer adoption of generative AI coding tools?",
    "options": [
      {
        "id": "a",
        "label": "Allow developers to use any unvetted free AI tool found on the internet."
      },
      {
        "id": "b",
        "label": "Establish an approved AI tool whitelist, enforce enterprise Zero-Data-Retention (ZDR) agreements, prohibit personal consumer AI logins, and mandate human code review on all generated PRs."
      },
      {
        "id": "c",
        "label": "Ban all software engineering tools completely."
      },
      {
        "id": "d",
        "label": "Allow developers to paste confidential customer passwords into public AI models."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_priv_02",
    "section": "privacy",
    "prompt": "What risk arises when engineers use consumer AI tools with public training enabled for code debugging?",
    "options": [
      {
        "id": "a",
        "label": "Proprietary source code, algorithmic secrets, and embedded credentials become part of the vendor's training dataset, risking public data leakage to external competitors."
      },
      {
        "id": "b",
        "label": "The developer's computer will catch fire."
      },
      {
        "id": "c",
        "label": "The source code will automatically convert into a PDF."
      },
      {
        "id": "d",
        "label": "There is zero risk in using consumer AI tools."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_priv_03",
    "section": "privacy",
    "prompt": "Under SOC2 Type II compliance audits, what evidence must engineering managers provide regarding change management?",
    "options": [
      {
        "id": "a",
        "label": "A verbal statement by the manager that code is always tested."
      },
      {
        "id": "b",
        "label": "A printed list of employee names."
      },
      {
        "id": "c",
        "label": "SOC2 audits do not examine change management."
      },
      {
        "id": "d",
        "label": "Immutable audit logs showing that 100% of production code releases were linked to approved Jira tickets, passed automated CI tests, and had documented peer code review approval."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_priv_04",
    "section": "privacy",
    "prompt": "How must engineering managers govern the use of customer data in non-production staging and QA environments?",
    "options": [
      {
        "id": "a",
        "label": "Copy unredacted customer credit card databases to public staging servers."
      },
      {
        "id": "b",
        "label": "Email raw production database dumps to external contractors."
      },
      {
        "id": "c",
        "label": "Prohibit raw production customer databases in staging; mandate automated data masking, tokenization, and synthetic data seeding conforming to production schemas."
      },
      {
        "id": "d",
        "label": "Store production database backups on unencrypted personal laptops."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_priv_05",
    "section": "privacy",
    "prompt": "What security access protocol must engineering managers execute when an engineer resigns?",
    "options": [
      {
        "id": "a",
        "label": "Leave production access active for 1 year in case the engineer has questions."
      },
      {
        "id": "b",
        "label": "Coordinate immediate offboarding: revoke GitHub/GitLab repository access, terminate AWS/GCP IAM credentials, rotate shared SSH bastion keys, and revoke production VPN tokens."
      },
      {
        "id": "c",
        "label": "Ask the departing engineer to remember to delete their own credentials."
      },
      {
        "id": "d",
        "label": "Allow departing engineers to copy all corporate intellectual property to USB drives."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_priv_06",
    "section": "privacy",
    "prompt": "Why must engineering leadership govern open-source software (OSS) licenses (e.g. AGPL vs MIT) in proprietary commercial software?",
    "options": [
      {
        "id": "a",
        "label": "Copyleft licenses (e.g. AGPL, GPLv3) may legally compel the organization to open-source its proprietary core codebase if linked or distributed improperly, destroying intellectual property value."
      },
      {
        "id": "b",
        "label": "Open-source software cannot run on cloud servers."
      },
      {
        "id": "c",
        "label": "Open-source code causes compiler errors."
      },
      {
        "id": "d",
        "label": "All open-source licenses are completely identical."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_priv_07",
    "section": "privacy",
    "prompt": "What documentation must be verified before procuring a third-party SaaS tool that will process customer telemetry?",
    "options": [
      {
        "id": "a",
        "label": "A fancy marketing website with celebrity endorsements."
      },
      {
        "id": "b",
        "label": "A verbal promise from the vendor's salesperson."
      },
      {
        "id": "c",
        "label": "A 90% discount on subscription pricing."
      },
      {
        "id": "d",
        "label": "Verified SOC2 Type II report, ISO 27001 certification, independent penetration test results, signed Data Processing Agreement (DPA) with Standard Contractual Clauses, and sub-processor list."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_priv_08",
    "section": "privacy",
    "prompt": "How should an Engineering Director enforce the Principle of Least Privilege across cloud production databases?",
    "options": [
      {
        "id": "a",
        "label": "Grant all 50 developers permanent full superuser administrative rights."
      },
      {
        "id": "b",
        "label": "Share one master database password in a public Slack channel."
      },
      {
        "id": "c",
        "label": "Prohibit permanent direct developer root access; enforce ephemeral, audited just-in-time (JIT) access via bastion hosts with multi-party approval and automated session recording."
      },
      {
        "id": "d",
        "label": "Disable database password authentication."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_priv_09",
    "section": "privacy",
    "prompt": "How must engineering managers handle Material Non-Public Information (MNPI) regarding upcoming quarterly financial results or acquisitions?",
    "options": [
      {
        "id": "a",
        "label": "Trade company stock based on unreleased technical project milestones."
      },
      {
        "id": "b",
        "label": "Strictly restrict technical project access to authorized insider squads, enforce formal blackout trading windows, and prohibit discussions on open communication channels."
      },
      {
        "id": "c",
        "label": "Share quarterly financial data with friends on social media."
      },
      {
        "id": "d",
        "label": "Post upcoming acquisition details on the company public blog."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_priv_10",
    "section": "privacy",
    "prompt": "How should Product and Engineering managers defend customer-facing generative AI features against Prompt Injection and jailbreaks?",
    "options": [
      {
        "id": "a",
        "label": "Multi-layer defense: input sanitization, strict isolation between user input and system instructions, independent guardrail moderation classifiers, and least-privilege tool access."
      },
      {
        "id": "b",
        "label": "Allow users to execute arbitrary shell commands inside the AI prompt."
      },
      {
        "id": "c",
        "label": "Display internal proprietary system prompts directly to website visitors."
      },
      {
        "id": "d",
        "label": "Disable all security filters to make responses faster."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_priv_11",
    "section": "privacy",
    "prompt": "How should an engineering organization manage a Public Bug Bounty and Vulnerability Disclosure program (e.g. HackerOne)?",
    "options": [
      {
        "id": "a",
        "label": "Threaten to sue ethical security researchers who discover vulnerabilities."
      },
      {
        "id": "b",
        "label": "Ignore vulnerability reports and leave critical bugs unpatched."
      },
      {
        "id": "c",
        "label": "Post bug bounty reports on social media before fixing them."
      },
      {
        "id": "d",
        "label": "Establish a clear `security.txt` policy, provide a safe-harbor legal guarantee for ethical researchers, triage reports within 24h, and award fair bounties based on CVSS severity."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_priv_12",
    "section": "privacy",
    "prompt": "What security policies must engineering managers enforce for remote developer laptops (BYOD / Corporate devices)?",
    "options": [
      {
        "id": "a",
        "label": "Allow developers to use unpatched, unencrypted personal computers with zero passwords."
      },
      {
        "id": "b",
        "label": "Share developer laptops with family members and children."
      },
      {
        "id": "c",
        "label": "Mandatory Mobile Device Management (MDM), full-disk encryption (FileVault/BitLocker), automated security patching, screen lock after 5 minutes, and endpoint threat detection."
      },
      {
        "id": "d",
        "label": "Disable all antivirus and firewall software."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_priv_13",
    "section": "privacy",
    "prompt": "How must engineering managers ensure backend databases support GDPR \"Right to Erasure\" compliance?",
    "options": [
      {
        "id": "a",
        "label": "Delete the entire database whenever one user requests erasure."
      },
      {
        "id": "b",
        "label": "Design automated deletion pipelines that cascade erasure across primary relational tables, search indexes (Elasticsearch), data warehouses (Snowflake), and analytics caches."
      },
      {
        "id": "c",
        "label": "Ignore user deletion requests."
      },
      {
        "id": "d",
        "label": "Charge users a monetary fee to delete their data."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_priv_14",
    "section": "privacy",
    "prompt": "How should managers ensure API credentials and production secrets are managed in CI/CD pipelines (e.g. GitHub Actions)?",
    "options": [
      {
        "id": "a",
        "label": "Store in encrypted secret stores (e.g. HashiCorp Vault, AWS Secrets Manager), inject via short-lived OIDC tokens, and prohibit hardcoding plaintext secrets in git YAML files."
      },
      {
        "id": "b",
        "label": "Commit production database passwords directly into public GitHub repositories."
      },
      {
        "id": "c",
        "label": "Print all production secrets to console logs during CI builds."
      },
      {
        "id": "d",
        "label": "Email credentials to developers in unencrypted plaintext."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_priv_15",
    "section": "privacy",
    "prompt": "When leading architectural design reviews for new features, what Threat Modeling framework should managers mandate?",
    "options": [
      {
        "id": "a",
        "label": "Assume systems are 100% secure without conducting threat modeling."
      },
      {
        "id": "b",
        "label": "Conduct threat modeling only after a catastrophic security breach occurs."
      },
      {
        "id": "c",
        "label": "Threat modeling has no relevance in modern software."
      },
      {
        "id": "d",
        "label": "STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) to systematically identify and mitigate attack vectors before writing code."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_priv_16",
    "section": "privacy",
    "prompt": "Why should engineering managers enforce mandatory Two-Person Review rules on financial transaction and authentication code paths?",
    "options": [
      {
        "id": "a",
        "label": "To slow down development by several months."
      },
      {
        "id": "b",
        "label": "Because compilers require two people to sign code."
      },
      {
        "id": "c",
        "label": "To eliminate single points of failure, prevent accidental security regressions, ensure separation of duties, and block malicious insider tampering."
      },
      {
        "id": "d",
        "label": "Two-person review is only required for marketing copy."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_priv_17",
    "section": "privacy",
    "prompt": "How must engineering managers ensure application logging complies with global privacy mandates?",
    "options": [
      {
        "id": "a",
        "label": "Print all incoming HTTP authorization headers in plaintext in server logs."
      },
      {
        "id": "b",
        "label": "Enforce automated log scrubbing in application middleware to strip passwords, credit card numbers, authorization tokens, and customer PII before sending to centralized aggregators."
      },
      {
        "id": "c",
        "label": "Disable all server logging completely."
      },
      {
        "id": "d",
        "label": "Store unredacted logs on public FTP servers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_priv_18",
    "section": "privacy",
    "prompt": "When an enterprise customer requests an independent security compliance audit of our software, how should engineering leadership prepare?",
    "options": [
      {
        "id": "a",
        "label": "Provide audited SOC2 Type II reports, third-party penetration test summaries, ISO 27001 certificates, data flow architecture diagrams, and participate in formal security reviews."
      },
      {
        "id": "b",
        "label": "Refuse to answer customer security questions."
      },
      {
        "id": "c",
        "label": "Send the customer raw uncompiled proprietary source code."
      },
      {
        "id": "d",
        "label": "Claim that security audits are unnecessary."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_priv_19",
    "section": "privacy",
    "prompt": "Why is hardware-based Multi-Factor Authentication (FIDO2 / YubiKey) enforced for all developer accounts accessing production cloud environments?",
    "options": [
      {
        "id": "a",
        "label": "To make it difficult for developers to log into work."
      },
      {
        "id": "b",
        "label": "Hardware keys make code compile 10x faster."
      },
      {
        "id": "c",
        "label": "Hardware keys are only required for junior interns."
      },
      {
        "id": "d",
        "label": "Hardware security keys are cryptographically bound to domain origins, making developer accounts completely immune to sophisticated adversary-in-the-middle (AiTM) phishing attacks."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_priv_20",
    "section": "privacy",
    "prompt": "How should managers govern automated AI agent tool capabilities across backend microservices?",
    "options": [
      {
        "id": "a",
        "label": "Grant all AI agents permanent root administrator database drop permissions."
      },
      {
        "id": "b",
        "label": "Hardcode master API keys inside client JavaScript bundles."
      },
      {
        "id": "c",
        "label": "Issue short-lived, scope-restricted capability tokens (OAuth 2.0 / JWT) with explicit read-only permissions by default, requiring human-in-the-loop approval for mutating actions."
      },
      {
        "id": "d",
        "label": "Disable permission checking on all AI agent endpoints."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_priv_21",
    "section": "privacy",
    "prompt": "How should engineering directors validate Disaster Recovery readiness and RTO/RPO targets?",
    "options": [
      {
        "id": "a",
        "label": "Assume database backups will work with zero testing."
      },
      {
        "id": "b",
        "label": "Conduct regular unannounced disaster recovery drills (GameDays) restoring databases from encrypted backups in isolated staging regions and measuring exact restoration time."
      },
      {
        "id": "c",
        "label": "Delete database backups to save money."
      },
      {
        "id": "d",
        "label": "Disaster recovery drills should only be conducted on paper."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_priv_22",
    "section": "privacy",
    "prompt": "How should engineering managers govern external contractor and outsourced agency access to proprietary source code?",
    "options": [
      {
        "id": "a",
        "label": "Execute Non-Disclosure Agreements (NDAs), provide time-limited least-privilege repository access, enforce mandatory MFA on managed virtual desktops, and revoke access upon milestone completion."
      },
      {
        "id": "b",
        "label": "Grant external contractors permanent unrestricted master admin rights."
      },
      {
        "id": "c",
        "label": "Email proprietary source code in zip archives to unvetted contractors."
      },
      {
        "id": "d",
        "label": "Allow contractors to publish proprietary code to their personal public GitHub repos."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_priv_23",
    "section": "privacy",
    "prompt": "How do engineering managers prevent software supply chain tampering in CI artifact registries?",
    "options": [
      {
        "id": "a",
        "label": "Pull random container images from unverified public registries."
      },
      {
        "id": "b",
        "label": "Disable container image verification."
      },
      {
        "id": "c",
        "label": "Supply chain security is unnecessary for cloud applications."
      },
      {
        "id": "d",
        "label": "Enforce cryptographic container image signing (Cosign / Sigstore), continuous vulnerability scanning, and reject deployment of unsigned or unverified third-party base images."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_priv_24",
    "section": "privacy",
    "prompt": "During team restructurings or layoffs, how should IT security and engineering managers manage insider threat risks?",
    "options": [
      {
        "id": "a",
        "label": "Publicly accuse departing employees of being criminals."
      },
      {
        "id": "b",
        "label": "Leave access active for 6 months after layoffs."
      },
      {
        "id": "c",
        "label": "Coordinate respectful, compassionate offboarding with synchronized access revocation, automated log monitoring, and preserving intellectual property without treating employees with hostility."
      },
      {
        "id": "d",
        "label": "Delete all company projects created by departing staff."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_priv_25",
    "section": "privacy",
    "prompt": "When expanding into European markets, how must engineering managers address European Cloud Data Sovereignty requirements?",
    "options": [
      {
        "id": "a",
        "label": "Route all European customer data through unencrypted public proxies."
      },
      {
        "id": "b",
        "label": "Provision dedicated EU-region cloud infrastructure (e.g. AWS Frankfurt / Azure Ireland), ensuring customer data and backups remain strictly within EU geographic boundaries."
      },
      {
        "id": "c",
        "label": "Refuse to comply with European data protection laws."
      },
      {
        "id": "d",
        "label": "Data sovereignty laws do not apply to software."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_priv_26",
    "section": "privacy",
    "prompt": "What governance protocol must be established before fine-tuning proprietary internal AI models on company datasets?",
    "options": [
      {
        "id": "a",
        "label": "Ensure dataset provenance, verify that data does not contain unconsented customer PII or third-party copyrighted materials, and validate non-retention commercial licenses."
      },
      {
        "id": "b",
        "label": "Scrape copyrighted books from pirate websites to train company models."
      },
      {
        "id": "c",
        "label": "Train models on raw customer credit card transactions without redaction."
      },
      {
        "id": "d",
        "label": "Model fine-tuning requires zero data governance."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_priv_27",
    "section": "privacy",
    "prompt": "During an active production security breach, how should the Incident Commander manage internal communication?",
    "options": [
      {
        "id": "a",
        "label": "Discuss security breach details on public social media channels."
      },
      {
        "id": "b",
        "label": "Send unencrypted emails to the entire company explaining how to exploit the breach."
      },
      {
        "id": "c",
        "label": "Refuse to communicate with the security response team."
      },
      {
        "id": "d",
        "label": "Establish a secure out-of-band communication channel (e.g. dedicated Signal group or isolated Slack workspace) in case primary corporate communications are compromised by the adversary."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_priv_28",
    "section": "privacy",
    "prompt": "Why must engineering leadership enforce strict automated data retention lifecycles across development databases and test logs?",
    "options": [
      {
        "id": "a",
        "label": "Because hard drives cannot store data for more than 1 week."
      },
      {
        "id": "b",
        "label": "To prevent developers from debugging old software."
      },
      {
        "id": "c",
        "label": "Minimizes the blast radius of potential future breaches; data that does not exist cannot be stolen or compromised during an incident."
      },
      {
        "id": "d",
        "label": "Data retention lifecycles have no security benefit."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_priv_29",
    "section": "privacy",
    "prompt": "What enterprise guarantee is verified by a Zero-Data Retention (ZDR) agreement when procuring commercial LLM APIs (e.g., Anthropic, OpenAI Enterprise)?",
    "options": [
      {
        "id": "a",
        "label": "The provider guarantees that the AI model will never make a mistake."
      },
      {
        "id": "b",
        "label": "The provider processes prompt inputs in memory only, never writes inputs or outputs to persistent disks, and never uses enterprise data to train foundation models."
      },
      {
        "id": "c",
        "label": "The provider will pay all cloud hosting bills."
      },
      {
        "id": "d",
        "label": "ZDR agreements are optional for healthcare companies."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_priv_30",
    "section": "privacy",
    "prompt": "What represents the foundational ethical charter of the Jnachi Certified AI Product & Engineering Leader?",
    "options": [
      {
        "id": "a",
        "label": "Leading with uncompromising integrity, embedding zero-trust security into every architectural layer, protecting customer privacy as a sacred trust, and building enduring, human-centric software."
      },
      {
        "id": "b",
        "label": "Cutting security budgets to maximize short-term quarterly profit margins."
      },
      {
        "id": "c",
        "label": "Ignoring data compliance whenever a product release is running behind schedule."
      },
      {
        "id": "d",
        "label": "Treating cybersecurity as an obstacle to bypass."
      }
    ],
    "correctOptionId": "a"
  }
];

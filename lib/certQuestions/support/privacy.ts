import { CertQuestion } from '../types';

export const SUPPORT_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "sup_priv_01",
    "section": "privacy",
    "prompt": "Under PCI-DSS compliance regulations, how must customer support platforms handle credit card numbers submitted in ticket text or attachments?",
    "options": [
      {
        "id": "a",
        "label": "Store credit card numbers in plaintext in public internal agent notes."
      },
      {
        "id": "b",
        "label": "Automated real-time regex redactor masks credit card numbers (Primary Account Numbers) and CVV codes instantly upon ingestion, purging unmasked data from database storage."
      },
      {
        "id": "c",
        "label": "Email the full credit card number to the accounting department."
      },
      {
        "id": "d",
        "label": "Ask the customer to re-send their credit card number over social media."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_priv_02",
    "section": "privacy",
    "prompt": "What verification protocol must support agents follow before processing a high-risk account email change or password reset over phone/chat?",
    "options": [
      {
        "id": "a",
        "label": "Strict out-of-band multi-factor verification (e.g. sending a secure time-based token to the verified account phone/email on file) and confirming account security answers."
      },
      {
        "id": "b",
        "label": "Process the email change immediately if the caller sounds desperate or urgent."
      },
      {
        "id": "c",
        "label": "Ask for the user's bank account password over live chat."
      },
      {
        "id": "d",
        "label": "Change the email address without asking for any verification."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_priv_03",
    "section": "privacy",
    "prompt": "How must customer support platforms handle a \"Right to Erasure\" (GDPR Article 17) request from a former user?",
    "options": [
      {
        "id": "a",
        "label": "Delete the entire helpdesk database including tickets from other customers."
      },
      {
        "id": "b",
        "label": "Ignore the request if the user was ever rude to an agent."
      },
      {
        "id": "c",
        "label": "Send an email demanding a monetary fee to delete the records."
      },
      {
        "id": "d",
        "label": "Permanently anonymize/delete the user's personal identity records (name, email, IP addresses) across ticket histories, retaining only anonymized statistical metadata where legally required."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_priv_04",
    "section": "privacy",
    "prompt": "When using an AI copilot to draft customer responses, what sensitive data must NEVER be included in LLM prompts?",
    "options": [
      {
        "id": "a",
        "label": "Public product documentation links."
      },
      {
        "id": "b",
        "label": "The official software release version number."
      },
      {
        "id": "c",
        "label": "Unredacted customer passwords, cryptographic private keys, government IDs, raw payment credentials, and internal customer database connection strings."
      },
      {
        "id": "d",
        "label": "Standard help center article titles."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_priv_05",
    "section": "privacy",
    "prompt": "If a customer accidentally posts sensitive medical data (Protected Health Information) in a standard public support ticket, how should the agent respond?",
    "options": [
      {
        "id": "a",
        "label": "Share the medical data in public employee chat channels."
      },
      {
        "id": "b",
        "label": "Immediately redact the sensitive text using helpdesk redaction tools, delete attached files, flag to privacy officer, and remind the customer to use secure channels."
      },
      {
        "id": "c",
        "label": "Leave the medical data visible to all staff permanently."
      },
      {
        "id": "d",
        "label": "Forward the medical data to marketing for a case study."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_priv_06",
    "section": "privacy",
    "prompt": "How should Role-Based Access Control (RBAC) be enforced inside customer support administration consoles?",
    "options": [
      {
        "id": "a",
        "label": "Principle of Least Privilege: Tier-1 agents access basic ticket messaging; only authorized Billing Specialists access invoice refund tools, and only Senior Leads access account deletion tools."
      },
      {
        "id": "b",
        "label": "Grant full master administrator access to all temporary contractors on day one."
      },
      {
        "id": "c",
        "label": "Share one master administrative password on a sticky note in the office."
      },
      {
        "id": "d",
        "label": "Disable all permission checks."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_priv_07",
    "section": "privacy",
    "prompt": "What security compliance standard governs remote desktop screen-sharing sessions (e.g. Zoom/Co-browse) during customer troubleshooting?",
    "options": [
      {
        "id": "a",
        "label": "Taking control of the customer's computer without informing them."
      },
      {
        "id": "b",
        "label": "Browsing through the customer's personal photo library without permission."
      },
      {
        "id": "c",
        "label": "Screen-sharing has no security requirements."
      },
      {
        "id": "d",
        "label": "Explicit customer opt-in consent, visual recording indicators, automated masking of sensitive form fields (passwords/credit cards), and instant session termination control for the customer."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_priv_08",
    "section": "privacy",
    "prompt": "How can support agents identify Social Engineering and helpdesk pretexting attacks?",
    "options": [
      {
        "id": "a",
        "label": "Attackers always identify themselves as malicious hackers."
      },
      {
        "id": "b",
        "label": "Social engineering only happens in movies."
      },
      {
        "id": "c",
        "label": "Attackers create false urgency (\"Executive needs access in 5 minutes!\"), claim lost phone/2FA devices, attempt to bypass standard verification, or demand password changes to new unofficial emails."
      },
      {
        "id": "d",
        "label": "Attackers refuse to speak to support agents."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_priv_09",
    "section": "privacy",
    "prompt": "What is the recommended data retention lifecycle for customer support ticket attachments (e.g. screenshots, error logs)?",
    "options": [
      {
        "id": "a",
        "label": "Storing all attachments on unencrypted public file servers forever."
      },
      {
        "id": "b",
        "label": "Automated purging of raw attachments after 90–180 days post-ticket resolution to minimize data exposure liability, retaining structured ticket summaries."
      },
      {
        "id": "c",
        "label": "Deleting all attachments within 1 second of receipt."
      },
      {
        "id": "d",
        "label": "Selling ticket attachments to third-party data brokers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_priv_10",
    "section": "privacy",
    "prompt": "Why is it prohibited to copy unredacted customer support screenshots into general internal company Slack / Teams channels?",
    "options": [
      {
        "id": "a",
        "label": "Screenshots often contain customer PII, internal IP addresses, or proprietary data; unvetted distribution violates SOC2, GDPR, and enterprise confidentiality agreements."
      },
      {
        "id": "b",
        "label": "Slack servers will run out of disk space."
      },
      {
        "id": "c",
        "label": "Screenshots cannot be viewed on computer monitors."
      },
      {
        "id": "d",
        "label": "Company chat channels are public to the entire internet."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_priv_11",
    "section": "privacy",
    "prompt": "When providing customer support for healthcare applications subject to HIPAA, what legal agreement is required with helpdesk software vendors?",
    "options": [
      {
        "id": "a",
        "label": "A verbal promise over the phone."
      },
      {
        "id": "b",
        "label": "A standard free consumer account."
      },
      {
        "id": "c",
        "label": "No agreement is required for cloud software."
      },
      {
        "id": "d",
        "label": "A signed Business Associate Agreement (BAA) certifying end-to-end encryption, audit logging, access controls, and breach notification obligations."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_priv_12",
    "section": "privacy",
    "prompt": "When a customer provides a database dump to help reproduce a complex bug, how must the engineering/support team handle it?",
    "options": [
      {
        "id": "a",
        "label": "Upload the database dump to a public GitHub repository."
      },
      {
        "id": "b",
        "label": "Share the customer database with external marketing freelancers."
      },
      {
        "id": "c",
        "label": "Store in an encrypted, access-restricted staging environment, sanitize/anonymize all PII before reproduction testing, and securely delete immediately upon bug resolution."
      },
      {
        "id": "d",
        "label": "Leave the database on a local laptop desktop unencrypted."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_priv_13",
    "section": "privacy",
    "prompt": "How must customer support leadership respond to formal law enforcement subpoenas or legal preservation holds?",
    "options": [
      {
        "id": "a",
        "label": "Delete all records immediately to avoid getting involved."
      },
      {
        "id": "b",
        "label": "Immediately route to corporate legal counsel, freeze automated deletion lifecycles on specified accounts, and maintain strict chain-of-custody documentation."
      },
      {
        "id": "c",
        "label": "Reply with customer passwords over an unencrypted email."
      },
      {
        "id": "d",
        "label": "Post the subpoena on social media."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_priv_14",
    "section": "privacy",
    "prompt": "How do security teams protect public customer support chat widgets against Cross-Site Scripting (XSS) and malicious file uploads?",
    "options": [
      {
        "id": "a",
        "label": "Enforce strict Content Security Policies (CSP), sanitize all HTML input, scan file uploads for malware, validate MIME types, and serve attachments from isolated domains."
      },
      {
        "id": "b",
        "label": "Allow users to execute raw JavaScript scripts directly inside the chat window."
      },
      {
        "id": "c",
        "label": "Execute all uploaded `.exe` files on the support agent's computer."
      },
      {
        "id": "d",
        "label": "Disable firewalls on helpdesk servers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_priv_15",
    "section": "privacy",
    "prompt": "What risk must be evaluated before installing third-party marketplace apps into helpdesk platforms (e.g. Zendesk Apps)?",
    "options": [
      {
        "id": "a",
        "label": "Whether the app has a colorful logo."
      },
      {
        "id": "b",
        "label": "How many reviews the app has on Reddit."
      },
      {
        "id": "c",
        "label": "Third-party plugins cannot access ticket data."
      },
      {
        "id": "d",
        "label": "Scope of data access permissions (e.g. full read/write access to all customer tickets), vendor SOC2 certification, data storage jurisdiction, and sub-processor lists."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_priv_16",
    "section": "privacy",
    "prompt": "Why is mandatory Two-Factor Authentication (2FA / MFA) enforced for all customer support agent accounts?",
    "options": [
      {
        "id": "a",
        "label": "To make it difficult for support agents to log into work."
      },
      {
        "id": "b",
        "label": "Because 2FA makes computer screens brighter."
      },
      {
        "id": "c",
        "label": "Support portals are high-value targets; compromised agent credentials allow attackers to access thousands of customer accounts and confidential databases."
      },
      {
        "id": "d",
        "label": "2FA is only required for software developers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_priv_17",
    "section": "privacy",
    "prompt": "How should enterprise customer support governance handle \"Impersonate User / Log In As Customer\" admin features?",
    "options": [
      {
        "id": "a",
        "label": "Allow all support agents to log into any customer account at any time without logging."
      },
      {
        "id": "b",
        "label": "Require explicit written customer permission, mandate time-limited access tokens, and record immutable audit logs of all actions taken during impersonation."
      },
      {
        "id": "c",
        "label": "Disable password authentication permanently."
      },
      {
        "id": "d",
        "label": "Share admin impersonation credentials publicly."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_priv_18",
    "section": "privacy",
    "prompt": "When an enterprise client shares proprietary intellectual property (e.g. custom algorithm workflows) to resolve an integration ticket, how is it protected?",
    "options": [
      {
        "id": "a",
        "label": "Governed under mutual Non-Disclosure Agreements (NDAs), restricted to authorized technical support engineers, and never used to train global AI models."
      },
      {
        "id": "b",
        "label": "Published on the company blog as an example."
      },
      {
        "id": "c",
        "label": "Sold to competing software vendors."
      },
      {
        "id": "d",
        "label": "Pasted into public online coding forums."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_priv_19",
    "section": "privacy",
    "prompt": "Under European data sovereignty laws, what rule applies to routing European customer support tickets to international support hubs?",
    "options": [
      {
        "id": "a",
        "label": "European tickets cannot be read by humans outside of Europe under any circumstances."
      },
      {
        "id": "b",
        "label": "International routing requires paying a cash tariff to the European Union."
      },
      {
        "id": "c",
        "label": "Data sovereignty laws do not apply to customer support."
      },
      {
        "id": "d",
        "label": "Must comply with GDPR Chapter V cross-border data transfer rules (Standard Contractual Clauses or EU-US DPF), ensuring international agents access data via secure virtual desktops."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_priv_20",
    "section": "privacy",
    "prompt": "What ethical principle prevents AI sentiment analysis from causing unfair discrimination in support queue prioritization?",
    "options": [
      {
        "id": "a",
        "label": "De-prioritize all customers who use negative words."
      },
      {
        "id": "b",
        "label": "Only answer tickets from customers who use praise emojis."
      },
      {
        "id": "c",
        "label": "Sentiment analysis should assist in de-escalation coaching, but queue prioritization must guarantee equitable SLA service regardless of customer linguistic style or emotional expression."
      },
      {
        "id": "d",
        "label": "Charge higher subscription fees to customers who submit complaints."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_priv_21",
    "section": "privacy",
    "prompt": "If a support agent accidentally emails Customer A confidential invoice data belonging to Customer B (data spillover), what immediate protocol applies?",
    "options": [
      {
        "id": "a",
        "label": "Pretend the mistake never happened and hope no one notices."
      },
      {
        "id": "b",
        "label": "Immediately notify the Privacy & Security Officer, request Customer A to delete the message, initiate breach severity assessment, and notify affected Customer B per DPA SLAs."
      },
      {
        "id": "c",
        "label": "Blame Customer A for receiving the email."
      },
      {
        "id": "d",
        "label": "Delete Customer B's entire account."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_priv_22",
    "section": "privacy",
    "prompt": "When transmitting temporary API credentials or staging access keys to a customer, what is the secure method?",
    "options": [
      {
        "id": "a",
        "label": "Encrypted end-to-end secret-sharing tools (e.g., 1Password link, HashiCorp Vault token) configured with single-view expiration and 24-hour time-to-live."
      },
      {
        "id": "b",
        "label": "Writing the password in plain text in an unencrypted email body."
      },
      {
        "id": "c",
        "label": "Posting the credentials on a public social media page."
      },
      {
        "id": "d",
        "label": "Sending the password on a postcard."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_priv_23",
    "section": "privacy",
    "prompt": "How do security teams prevent Prompt Injection attacks submitted inside customer support ticket descriptions?",
    "options": [
      {
        "id": "a",
        "label": "Allowing customer tickets to instruct the LLM to grant administrative database rights."
      },
      {
        "id": "b",
        "label": "Printing internal system prompts in the customer email header."
      },
      {
        "id": "c",
        "label": "Disabling all customer support forms."
      },
      {
        "id": "d",
        "label": "Strict architectural separation between user data context and system instructions, input sanitization, and restricting automated LLM agents from executing unauthorized mutations."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_priv_24",
    "section": "privacy",
    "prompt": "Under two-party consent wiretapping laws, what notification is mandatory on inbound phone support calls?",
    "options": [
      {
        "id": "a",
        "label": "Secretly recording phone calls without informing the caller."
      },
      {
        "id": "b",
        "label": "Disclosing recording only after the call has concluded."
      },
      {
        "id": "c",
        "label": "Clear automated audio disclosure at the start of the call stating: \"This call may be recorded or monitored for quality and training purposes.\""
      },
      {
        "id": "d",
        "label": "Wiretapping laws only apply to criminal investigations."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_priv_25",
    "section": "privacy",
    "prompt": "What security protocol must remote customer support agents follow regarding hardware workstations?",
    "options": [
      {
        "id": "a",
        "label": "Using public internet cafe computers to access customer credit card databases."
      },
      {
        "id": "b",
        "label": "Company-managed laptops with full-disk encryption (BitLocker/FileVault), mandatory endpoint protection (EDR), automatic screen lock after 5 minutes, and no unauthorized local storage of customer data."
      },
      {
        "id": "c",
        "label": "Sharing work laptops with family members and friends."
      },
      {
        "id": "d",
        "label": "Disabling all antivirus software to make laptops faster."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_priv_26",
    "section": "privacy",
    "prompt": "Why must support macro and canned-response libraries undergo regular compliance audits?",
    "options": [
      {
        "id": "a",
        "label": "To ensure legal terms, refund policies, and regulatory disclosures remain accurate and compliant with current corporate policies and international consumer protection laws."
      },
      {
        "id": "b",
        "label": "To ensure macros are written in alphabetical order."
      },
      {
        "id": "c",
        "label": "To delete macros that are used too frequently."
      },
      {
        "id": "d",
        "label": "Audits are unnecessary once macros are created."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_priv_27",
    "section": "privacy",
    "prompt": "How must IT security handle access revocation when a customer support contractor concludes their engagement?",
    "options": [
      {
        "id": "a",
        "label": "Leave contractor credentials active for 6 months in case they want to return."
      },
      {
        "id": "b",
        "label": "Ask the contractor to promise not to log in after leaving."
      },
      {
        "id": "c",
        "label": "Change the password only if the contractor requests it."
      },
      {
        "id": "d",
        "label": "Automated offboarding orchestration: instantly revoke SSO access, terminate helpdesk and CRM seats, wipe remote corporate profiles, and audit final session access logs."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_priv_28",
    "section": "privacy",
    "prompt": "Can marketing teams use customer quotes from private support tickets in public advertising campaigns?",
    "options": [
      {
        "id": "a",
        "label": "Yes, all customer support messages are public property."
      },
      {
        "id": "b",
        "label": "Yes, if the customer gave a 5-star rating."
      },
      {
        "id": "c",
        "label": "No; private support interactions are confidential; explicit written legal consent and an approved release agreement must be secured before using any customer remarks publicly."
      },
      {
        "id": "d",
        "label": "Yes, as long as marketing edits the quote."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_priv_29",
    "section": "privacy",
    "prompt": "What enterprise guarantee is verified by a Zero-Data Retention (ZDR) agreement with an AI customer support vendor?",
    "options": [
      {
        "id": "a",
        "label": "The vendor will provide 100% free software forever."
      },
      {
        "id": "b",
        "label": "The AI vendor will process prompt context in memory only, never logging or storing customer transcripts, and never using enterprise interactions to train public models."
      },
      {
        "id": "c",
        "label": "The vendor will delete all customer tickets after 10 seconds."
      },
      {
        "id": "d",
        "label": "The vendor guarantees zero bugs in their software."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_priv_30",
    "section": "privacy",
    "prompt": "What represents the ethical cornerstone of the Jnachi Certified AI Customer Support & Success Professional?",
    "options": [
      {
        "id": "a",
        "label": "Unwavering commitment to customer privacy, empathetic advocacy, transparent communication, ethical data stewardship, and safeguarding the confidentiality and trust of every user."
      },
      {
        "id": "b",
        "label": "Maximizing ticket closing speed by auto-resolving tickets without reading them."
      },
      {
        "id": "c",
        "label": "Sharing customer private data on social media for entertainment."
      },
      {
        "id": "d",
        "label": "Treating customer privacy regulations as optional guidelines."
      }
    ],
    "correctOptionId": "a"
  }
];

import { CertQuestion } from '../types';

export const SALES_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "sales_priv_01",
    "section": "privacy",
    "prompt": "What client information should NEVER be entered into a public consumer AI tool during sales deal preparation?",
    "options": [
      {
        "id": "a",
        "label": "The prospect company's public corporate website URL."
      },
      {
        "id": "b",
        "label": "Unredacted customer Master Services Agreements (MSAs), security audit logs, proprietary pricing matrices, and employee PII."
      },
      {
        "id": "c",
        "label": "The official public job descriptions listed on their careers page."
      },
      {
        "id": "d",
        "label": "The public name of their corporate headquarters city."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_priv_02",
    "section": "privacy",
    "prompt": "When preparing a customized enterprise proposal using AI, how should proprietary client rate cards be handled?",
    "options": [
      {
        "id": "a",
        "label": "Tokenize/mask rate cards with placeholders (e.g., [CLIENT_TIER_A_RATE]) before prompting, or use enterprise Zero Data Retention (ZDR) sandboxes."
      },
      {
        "id": "b",
        "label": "Upload all competitor client contracts into free public chat tools."
      },
      {
        "id": "c",
        "label": "Email the unredacted rate cards to third-party model developers."
      },
      {
        "id": "d",
        "label": "Post the pricing on public internet forums to ask for feedback."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_priv_03",
    "section": "privacy",
    "prompt": "Under GDPR and California Consumer Privacy Act (CCPA), what requirement applies when recording and AI-transcribing sales calls?",
    "options": [
      {
        "id": "a",
        "label": "Secretly recording calls as long as the AI transcription bot joins quietly."
      },
      {
        "id": "b",
        "label": "Only asking consent from participants who live in the same state as the sales rep."
      },
      {
        "id": "c",
        "label": "Publishing call recordings on the company blog."
      },
      {
        "id": "d",
        "label": "Providing clear upfront notice and obtaining explicit consent from all participants, while providing an easy mechanism to request transcript deletion."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_priv_04",
    "section": "privacy",
    "prompt": "How can sales teams prevent cross-customer data contamination when using AI tools across competing enterprise accounts?",
    "options": [
      {
        "id": "a",
        "label": "Sharing one giant document containing notes from all competing accounts in every prompt."
      },
      {
        "id": "b",
        "label": "Telling competing prospects about each other's confidential pricing terms."
      },
      {
        "id": "c",
        "label": "Strict account-level tenant isolation, session purging between deal analyses, and never storing proprietary customer data in persistent global prompt memories."
      },
      {
        "id": "d",
        "label": "Using personal social media accounts to store deal files."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_priv_05",
    "section": "privacy",
    "prompt": "What does a \"Zero Data Retention (ZDR)\" agreement with an AI vendor guarantee for enterprise sales operations?",
    "options": [
      {
        "id": "a",
        "label": "The vendor will immediately delete all CRM customer accounts."
      },
      {
        "id": "b",
        "label": "The vendor will not retain, log, or use submitted prompt data, customer transcripts, or deal notes to train foundation models."
      },
      {
        "id": "c",
        "label": "Sales reps will never have to log their meeting notes."
      },
      {
        "id": "d",
        "label": "The vendor will provide free unlimited API calls forever."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_priv_06",
    "section": "privacy",
    "prompt": "If a prospect shares confidential network architecture diagrams under a mutual Non-Disclosure Agreement (NDA), what is the compliant way to analyze them with AI?",
    "options": [
      {
        "id": "a",
        "label": "Process only within an enterprise-governed, SOC2-certified private AI environment with strict organizational access controls and verified non-training clauses."
      },
      {
        "id": "b",
        "label": "Upload them to a public image generation tool."
      },
      {
        "id": "c",
        "label": "Post the architecture on a public technical forum for community feedback."
      },
      {
        "id": "d",
        "label": "Disregard the NDA if the deal size is over $100,000."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_priv_07",
    "section": "privacy",
    "prompt": "What regulatory compliance standard must automated outbound cold email sequences adhere to regarding recipient opt-outs?",
    "options": [
      {
        "id": "a",
        "label": "Hiding unsubscribe links by making the font color match the background."
      },
      {
        "id": "b",
        "label": "Requiring prospects to call a paid telephone number to unsubscribe."
      },
      {
        "id": "c",
        "label": "Re-enrolling unsubscribed prospects after 48 hours."
      },
      {
        "id": "d",
        "label": "Instant, one-click unsubscribe mechanism, visible physical corporate mailing address, and automated suppression list synchronization across all SDR tools."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_priv_08",
    "section": "privacy",
    "prompt": "What constitutes an ethical boundary when using automated web scrapers to research individual buyers before sales meetings?",
    "options": [
      {
        "id": "a",
        "label": "Purchasing leaked password databases to inspect buyer personal accounts."
      },
      {
        "id": "b",
        "label": "Tracking a buyer's personal geolocation coordinates in real time."
      },
      {
        "id": "c",
        "label": "Focusing strictly on professional public corporate data (LinkedIn, press releases, company blogs) while avoiding intrusive scraping of private personal social media or family details."
      },
      {
        "id": "d",
        "label": "Contacting a prospect's family members to ask about corporate software budgets."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_priv_09",
    "section": "privacy",
    "prompt": "When selling to European enterprise clients, what data sovereignty requirement must sales recording and AI transcription platforms satisfy?",
    "options": [
      {
        "id": "a",
        "label": "Routing all data through unencrypted public proxies."
      },
      {
        "id": "b",
        "label": "Storing European customer call recordings and transcript embeddings within EU data centers and complying with EU-US Data Privacy Framework cross-border transfer rules."
      },
      {
        "id": "c",
        "label": "Refusing to sell to European companies."
      },
      {
        "id": "d",
        "label": "Storing transcripts on local USB thumb drives."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_priv_10",
    "section": "privacy",
    "prompt": "How should sales teams defend against deepfake voice scams impersonating executives authorizing urgent banking or contract changes?",
    "options": [
      {
        "id": "a",
        "label": "Establish strict out-of-band verification protocols (e.g. secondary video check, pre-shared verbal passcodes) for all high-value financial and contract routing changes."
      },
      {
        "id": "b",
        "label": "Execute all financial wiring requests immediately if the voice sounds authentic."
      },
      {
        "id": "c",
        "label": "Never answer telephone calls from company executives."
      },
      {
        "id": "d",
        "label": "Rely on email text confirmations only."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_priv_11",
    "section": "privacy",
    "prompt": "What is the ethical responsibility of an Account Executive when demonstrating AI product capabilities to enterprise buyers?",
    "options": [
      {
        "id": "a",
        "label": "Promise 100% accuracy and zero hallucination risk to close the deal."
      },
      {
        "id": "b",
        "label": "Claim the product has capabilities that are still in early concept ideation."
      },
      {
        "id": "c",
        "label": "Hide system maintenance requirements from the buyer's technical team."
      },
      {
        "id": "d",
        "label": "Accurately represent current production capabilities, latency benchmarks, and error rates, avoiding the misrepresentation of scripted mockups as live autonomous features."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_priv_12",
    "section": "privacy",
    "prompt": "When a prospect shares a code sample to test your developer tool, how should the Pre-Sales engineer sanitize it before LLM analysis?",
    "options": [
      {
        "id": "a",
        "label": "Upload the raw source code to a public GitHub repository."
      },
      {
        "id": "b",
        "label": "Paste the database credentials directly into the prompt."
      },
      {
        "id": "c",
        "label": "Strip all embedded API tokens, private database connection strings, internal IP addresses, and proprietary algorithmic secrets."
      },
      {
        "id": "d",
        "label": "Ignore sensitive keys if the file is smaller than 1MB."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_priv_13",
    "section": "privacy",
    "prompt": "If a sales rep overhears Material Non-Public Information (MNPI) regarding an upcoming merger during a customer call, how must it be handled in AI tools?",
    "options": [
      {
        "id": "a",
        "label": "Trade stock based on the transcript information."
      },
      {
        "id": "b",
        "label": "Do not enter MNPI into general AI prompts or public channels; immediately report to legal/compliance and restrict transcript distribution to authorized deal teams."
      },
      {
        "id": "c",
        "label": "Share the merger news on LinkedIn to build personal influence."
      },
      {
        "id": "d",
        "label": "Prompt an AI to generate rumors about the merger."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_priv_14",
    "section": "privacy",
    "prompt": "How should RevOps handle sales rep performance metrics and commission data when training internal AI coaching assistants?",
    "options": [
      {
        "id": "a",
        "label": "Anonymize personal earnings data and enforce strict role-based access so reps and managers only access authorized coaching analytics."
      },
      {
        "id": "b",
        "label": "Display everyone's private take-home earnings on public office screens."
      },
      {
        "id": "c",
        "label": "Sell rep performance datasets to third-party recruiters."
      },
      {
        "id": "d",
        "label": "Disable password protection on commission dashboards."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_priv_15",
    "section": "privacy",
    "prompt": "How can an organization prevent prompt injection attacks submitted through customer-facing inbound AI sales chat widgets?",
    "options": [
      {
        "id": "a",
        "label": "Allow the chatbot to execute arbitrary SQL commands from the website visitor."
      },
      {
        "id": "b",
        "label": "Display internal system prompts directly in the chatbot header."
      },
      {
        "id": "c",
        "label": "Grant the chatbot admin access to the company CRM."
      },
      {
        "id": "d",
        "label": "Implement input validation filters, isolate tool execution permissions, and ensure the chatbot cannot execute unauthenticated backend database mutations."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_priv_16",
    "section": "privacy",
    "prompt": "Why should sales reps announce the presence of AI meeting assistants (e.g., \"Jnachi AI Notetaker\") at the beginning of client calls?",
    "options": [
      {
        "id": "a",
        "label": "To boast about how advanced their software tools are."
      },
      {
        "id": "b",
        "label": "Because video conferencing software will disconnect otherwise."
      },
      {
        "id": "c",
        "label": "To build transparent trust, fulfill two-party consent legal requirements, and give participants the option to pause recording for sensitive topics."
      },
      {
        "id": "d",
        "label": "To avoid having to speak during the meeting."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_priv_17",
    "section": "privacy",
    "prompt": "How should access permissions be structured for an internal AI knowledge base containing competitor win-wires and pricing strategies?",
    "options": [
      {
        "id": "a",
        "label": "Making the knowledge base publicly indexed on Google Search."
      },
      {
        "id": "b",
        "label": "Role-Based Access Control (RBAC) with corporate SSO authentication, audit logging on queries, and restricting public export permissions."
      },
      {
        "id": "c",
        "label": "Sharing one master login password on a sticky note."
      },
      {
        "id": "d",
        "label": "Allowing unauthenticated guest access."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_priv_18",
    "section": "privacy",
    "prompt": "When evaluating prospect financial health via automated AI credit scoring, what legal standard must be respected (e.g. Fair Credit Reporting Act)?",
    "options": [
      {
        "id": "a",
        "label": "Ensuring credit assessments use authorized, compliant commercial credit reporting bureaus with auditable scoring algorithms and dispute procedures."
      },
      {
        "id": "b",
        "label": "Using unverified gossip from internet message boards as the primary risk factor."
      },
      {
        "id": "c",
        "label": "Rejecting deals based on the personal credit scores of employees without business relevance."
      },
      {
        "id": "d",
        "label": "Refusing to document why a credit limit was denied."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_priv_19",
    "section": "privacy",
    "prompt": "What is the recommended retention policy for recorded sales discovery and demo calls in an enterprise repository?",
    "options": [
      {
        "id": "a",
        "label": "Keep all video recordings forever on unmonitored hard drives."
      },
      {
        "id": "b",
        "label": "Delete recordings within 3 seconds of call termination."
      },
      {
        "id": "c",
        "label": "Upload all sales call recordings to public video sharing platforms."
      },
      {
        "id": "d",
        "label": "Automated retention lifecycle (e.g. purging raw video after 90–180 days while retaining structured anonymized deal metadata) to minimize data exposure liability."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_priv_20",
    "section": "privacy",
    "prompt": "When enterprise buyers ask for Intellectual Property (IP) indemnification regarding AI-generated deliverables, what does this protect them against?",
    "options": [
      {
        "id": "a",
        "label": "Any financial losses if the buyer fails to meet their sales quota."
      },
      {
        "id": "b",
        "label": "Hardware failures on the buyer's office computers."
      },
      {
        "id": "c",
        "label": "Claims that model outputs produced by the vendor's AI system infringe upon third-party copyrights or intellectual property rights."
      },
      {
        "id": "d",
        "label": "Internet connectivity outages during product demonstrations."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_priv_21",
    "section": "privacy",
    "prompt": "When selling to healthcare organizations subject to HIPAA, what agreement is mandatory before processing patient data with AI sales tools?",
    "options": [
      {
        "id": "a",
        "label": "A verbal agreement over a casual lunch."
      },
      {
        "id": "b",
        "label": "A Business Associate Agreement (BAA) with end-to-end encryption and strict PHI handling safeguards."
      },
      {
        "id": "c",
        "label": "A standard consumer terms-of-service clickwrap."
      },
      {
        "id": "d",
        "label": "No agreement is required if the software is cloud-hosted."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_priv_22",
    "section": "privacy",
    "prompt": "Why do corporate IT security teams enforce whitelists for AI browser extensions used by sales development reps?",
    "options": [
      {
        "id": "a",
        "label": "To prevent unvetted third-party extensions from scraping sensitive CRM records, passwords, and prospect data from browser sessions."
      },
      {
        "id": "b",
        "label": "To prevent sales reps from typing too fast."
      },
      {
        "id": "c",
        "label": "To force all employees to use the same desktop wallpaper."
      },
      {
        "id": "d",
        "label": "Browser extensions have no impact on enterprise cybersecurity."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_priv_23",
    "section": "privacy",
    "prompt": "How must sales organizations handle a \"Right to be Forgotten\" (GDPR Article 17) request submitted by a former prospect?",
    "options": [
      {
        "id": "a",
        "label": "Ignore the request if the prospect might buy software in the future."
      },
      {
        "id": "b",
        "label": "Email the prospect 10 more times asking them why they made the request."
      },
      {
        "id": "c",
        "label": "Move their contact information into an open spreadsheet."
      },
      {
        "id": "d",
        "label": "Cascade the deletion request across CRM records, outbound sequencing databases, AI enrichment caches, and transcription storage."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_priv_24",
    "section": "privacy",
    "prompt": "When deploying an AI tool to complete technical RFP responses, what controls prevent accidental leakage of trade secrets to external evaluators?",
    "options": [
      {
        "id": "a",
        "label": "Submitting unredacted internal engineering roadmaps."
      },
      {
        "id": "b",
        "label": "Refusing to answer any technical questions in the RFP."
      },
      {
        "id": "c",
        "label": "Mandatory human SME review gates, automated confidential tag flagging, and sanitizing unpatented source algorithms before submission."
      },
      {
        "id": "d",
        "label": "Allowing the AI to invent fictional encryption protocols."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_priv_25",
    "section": "privacy",
    "prompt": "How should RevOps monitor AI lead scoring algorithms for demographic or geographic bias?",
    "options": [
      {
        "id": "a",
        "label": "Relying exclusively on postal zip codes to determine customer trustworthiness."
      },
      {
        "id": "b",
        "label": "Regular disparity impact audits to ensure scoring models evaluate legitimate business qualification criteria rather than penalizing specific geographic regions or demographic attributes."
      },
      {
        "id": "c",
        "label": "Assuming mathematical algorithms can never exhibit bias."
      },
      {
        "id": "d",
        "label": "Disabling all lead scoring forever."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_priv_26",
    "section": "privacy",
    "prompt": "What is the primary indicator of security maturity when evaluating a new AI sales intelligence software vendor?",
    "options": [
      {
        "id": "a",
        "label": "Verified SOC2 Type II audit report, ISO 27001 certification, independent penetration test results, and clear data processing agreements (DPAs)."
      },
      {
        "id": "b",
        "label": "A fancy marketing website with celebrity endorsements."
      },
      {
        "id": "c",
        "label": "A promise from the vendor's sales rep that their software is 100% unbreakable."
      },
      {
        "id": "d",
        "label": "Offering a 90% discount on first-year pricing."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_priv_27",
    "section": "privacy",
    "prompt": "What are the legal and brand reputation risks of using unauthorized AI synthetic voice clones in outbound sales calling campaigns?",
    "options": [
      {
        "id": "a",
        "label": "Guaranteed 100% positive customer satisfaction."
      },
      {
        "id": "b",
        "label": "Immediate promotion by executive leadership."
      },
      {
        "id": "c",
        "label": "Zero risks if the voice sounds convincing."
      },
      {
        "id": "d",
        "label": "FCC/FTC regulatory fines for deceptive robocalling, severe brand backlash, and immediate suspension of telecom carrier routing."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_priv_28",
    "section": "privacy",
    "prompt": "How should sales executives manage confidential, unreleased product roadmap features when generating customer-specific pitch decks with AI?",
    "options": [
      {
        "id": "a",
        "label": "Broadcasting unreleased feature release dates on public podcasts."
      },
      {
        "id": "b",
        "label": "Promising delivery dates that engineering has not committed to."
      },
      {
        "id": "c",
        "label": "Prompting only in private enterprise environments and requiring signed NDAs before sharing non-GA roadmap slides with prospective clients."
      },
      {
        "id": "d",
        "label": "Uploading unreleased source code to customer Slack channels."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_priv_29",
    "section": "privacy",
    "prompt": "When selling software to aerospace and defense contractors, what compliance mandate governs AI processing of technical data?",
    "options": [
      {
        "id": "a",
        "label": "Public open-source licensing only."
      },
      {
        "id": "b",
        "label": "International Traffic in Arms Regulations (ITAR) and Cybersecurity Maturity Model Certification (CMMC), requiring US-sovereign, FedRAMP-authorized cloud enclaves."
      },
      {
        "id": "c",
        "label": "Casual email exchanges without encryption."
      },
      {
        "id": "d",
        "label": "Defense data has no specific regulatory requirements."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_priv_30",
    "section": "privacy",
    "prompt": "What is the foundational principle of ethical, trust-first enterprise sales in the era of artificial intelligence?",
    "options": [
      {
        "id": "a",
        "label": "Transparently leveraging AI to deliver genuine, relevant value while rigorously protecting customer confidentiality, adhering to global privacy laws, and maintaining human integrity."
      },
      {
        "id": "b",
        "label": "Using AI to maximize short-term spam volume at the expense of buyer trust."
      },
      {
        "id": "c",
        "label": "Replacing genuine relationship building with deceptive automated bots."
      },
      {
        "id": "d",
        "label": "Ignoring data compliance whenever a deal is near the end of the quarter."
      }
    ],
    "correctOptionId": "a"
  }
];

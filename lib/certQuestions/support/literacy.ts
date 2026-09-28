import { CertQuestion } from '../types';

export const SUPPORT_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "sup_lit_01",
    "section": "literacy",
    "prompt": "When an enraged enterprise customer submits a ticket complaining about system downtime during peak business hours, how should an AI copilot prompt be constructed?",
    "options": [
      {
        "id": "a",
        "label": "Prompt the AI to explain that software always has bugs and the customer should be more patient."
      },
      {
        "id": "b",
        "label": "Prompt for immediate high-empathy validation of business impact, concise status of active engineering remediation, an incident ticket tracking link, and zero defensive excuses or blame."
      },
      {
        "id": "c",
        "label": "Instruct the AI to promise an instant 100% refund without financial authorization."
      },
      {
        "id": "d",
        "label": "Auto-reply with a generic link to the company homepage."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_lit_02",
    "section": "literacy",
    "prompt": "How should a tier-1 customer support agent prompt an LLM to generate troubleshooting instructions for a non-technical user?",
    "options": [
      {
        "id": "a",
        "label": "Specify: \"Explain how to clear browser cache and DNS settings in 4 numbered, jargon-free steps with visual button descriptions, suitable for a non-technical user.\""
      },
      {
        "id": "b",
        "label": "Ask the AI to generate raw Linux bash kernel commands for the user to execute in their terminal."
      },
      {
        "id": "c",
        "label": "Instruct the AI to tell the user to buy a new computer."
      },
      {
        "id": "d",
        "label": "Generate a 50-page technical manual on networking protocols."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_lit_03",
    "section": "literacy",
    "prompt": "What prompt constraint prevents an AI support assistant from making up non-existent product features or return policies (hallucination)?",
    "options": [
      {
        "id": "a",
        "label": "\"Feel free to invent helpful return policies if it makes the customer happy.\""
      },
      {
        "id": "b",
        "label": "\"Always answer 'Yes' to every customer request regardless of policy.\""
      },
      {
        "id": "c",
        "label": "\"Guess the answer based on general consumer electronics stores.\""
      },
      {
        "id": "d",
        "label": "\"Strictly restrict your answer to the provided official knowledge base excerpts. If the exact answer is not found in the context, output: 'I do not have verified documentation on this; escalating to a human specialist.'\""
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_lit_04",
    "section": "literacy",
    "prompt": "How should a support team prompt an AI to synthesize a 20-message ticket thread before transferring to a tier-3 technical escalation engineer?",
    "options": [
      {
        "id": "a",
        "label": "Copy-paste the entire unformatted text into the escalation notes without summary."
      },
      {
        "id": "b",
        "label": "Delete previous messages and write \"Please fix this\"."
      },
      {
        "id": "c",
        "label": "Prompt for a structured briefing: 1) Core Issue Description, 2) Environment & Version Details, 3) Steps Already Attempted & Results, 4) Current Blocked State, and 5) Customer Urgency/Tier."
      },
      {
        "id": "d",
        "label": "Ask the AI to generate a fictional backstory about the customer."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_lit_05",
    "section": "literacy",
    "prompt": "When responding to a customer asking for custom contract concessions not covered in standard terms, what is the correct AI-assisted response strategy?",
    "options": [
      {
        "id": "a",
        "label": "Have the AI agree to all custom legal terms immediately."
      },
      {
        "id": "b",
        "label": "Politely acknowledge the special request, cite standard policy boundaries with empathy, and inform the customer that their inquiry has been routed to their dedicated Account Manager for commercial review."
      },
      {
        "id": "c",
        "label": "Ignore the customer's message permanently."
      },
      {
        "id": "d",
        "label": "Accuse the customer of trying to violate company rules."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_lit_06",
    "section": "literacy",
    "prompt": "How can support agents prompt an LLM to identify underlying customer sentiment trends across a complex bug report?",
    "options": [
      {
        "id": "a",
        "label": "Prompt to analyze sentiment trajectory (e.g. escalating frustration vs cooperative patience), flag high churn-risk keywords, and recommend an appropriate tone adjustment."
      },
      {
        "id": "b",
        "label": "Ask the AI if the customer sounds like a nice person."
      },
      {
        "id": "c",
        "label": "Instruct the AI to assign a random number from 1 to 10."
      },
      {
        "id": "d",
        "label": "Rely on the customer's email domain to guess their mood."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_lit_07",
    "section": "literacy",
    "prompt": "What copywriting tone should be enforced when using AI to draft billing dispute resolutions?",
    "options": [
      {
        "id": "a",
        "label": "Aggressive and defensive, arguing that company billing is never wrong."
      },
      {
        "id": "b",
        "label": "Casual and dismissive with multiple joking emojis."
      },
      {
        "id": "c",
        "label": "Overly legalistic and threatening."
      },
      {
        "id": "d",
        "label": "Calm, transparent, mathematically precise, and reassuring: clearly breaking down invoice line items, crediting verified discrepancies, and explaining next billing cycle adjustments."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_lit_08",
    "section": "literacy",
    "prompt": "How should a customer success agent prompt an AI to generate an onboarding FAQ from a newly released product changelog?",
    "options": [
      {
        "id": "a",
        "label": "Copy-paste the developer git commit messages directly into the FAQ."
      },
      {
        "id": "b",
        "label": "Write FAQs about features that were deprecated 5 years ago."
      },
      {
        "id": "c",
        "label": "Extract new user-facing features, anticipate the top 5 practical \"how-do-I\" migration questions, and draft concise answers with step-by-step navigation paths."
      },
      {
        "id": "d",
        "label": "Generate FAQs with only single-sentence answers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_lit_09",
    "section": "literacy",
    "prompt": "When a customer reports an intermittent bug that cannot be reproduced, how should an AI prompt assist in drafting the follow-up?",
    "options": [
      {
        "id": "a",
        "label": "Tell the customer that if support cannot reproduce it, the bug does not exist."
      },
      {
        "id": "b",
        "label": "Draft a gracious request for specific diagnostic clues: exact timestamp of last occurrence, browser/OS versions, screen recording/screenshot, and network console error logs."
      },
      {
        "id": "c",
        "label": "Close the ticket immediately as \"Invalid\"."
      },
      {
        "id": "d",
        "label": "Tell the customer to reinstall their operating system."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_lit_10",
    "section": "literacy",
    "prompt": "How should support agents prompt an AI to rewrite a technical developer response into customer-friendly prose?",
    "options": [
      {
        "id": "a",
        "label": "Translate developer backend jargon (e.g., \"Redis cache TTL expired\") into customer-centric explanations (\"Temporary data refresh delay\") while preserving accurate technical meaning."
      },
      {
        "id": "b",
        "label": "Delete all technical details and say \"It is fixed now.\""
      },
      {
        "id": "c",
        "label": "Make the response sound twice as technical so the customer is impressed."
      },
      {
        "id": "d",
        "label": "Translate the response into French."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_lit_11",
    "section": "literacy",
    "prompt": "What prompt instruction ensures an AI support assistant maintains a consistent, on-brand persona across a 50-person global support team?",
    "options": [
      {
        "id": "a",
        "label": "Allow each agent to use completely different AI models with random prompt instructions."
      },
      {
        "id": "b",
        "label": "Instruct the AI to speak in rhyming poetry."
      },
      {
        "id": "c",
        "label": "Remove all greetings and sign-offs to make messages shorter."
      },
      {
        "id": "d",
        "label": "Define explicit persona parameters: Professional warmth, proactive guidance, conciseness (under 150 words per response), mandatory inclusion of direct help center deep-links, and greeting/sign-off conventions."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_lit_12",
    "section": "literacy",
    "prompt": "How should an AI be prompted to handle a customer demanding to speak with the CEO immediately?",
    "options": [
      {
        "id": "a",
        "label": "Provide the CEO's personal mobile phone number and home address."
      },
      {
        "id": "b",
        "label": "Laugh at the customer and tell them the CEO is too busy."
      },
      {
        "id": "c",
        "label": "De-escalate with respect: validate the gravity of their concern, assure them of senior leadership awareness through official escalation channels, and introduce the Senior Support Director assigned to their case."
      },
      {
        "id": "d",
        "label": "Immediately terminate the customer's account."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_lit_13",
    "section": "literacy",
    "prompt": "When a customer submits a ticket in a language the agent does not speak, how should the AI translation and response workflow be structured?",
    "options": [
      {
        "id": "a",
        "label": "Reply in English and tell the customer to learn English."
      },
      {
        "id": "b",
        "label": "Translate incoming message with cultural context notes, generate draft in the agent's language for factual verification, back-translate the response into the customer's language, and include a polite notice of AI translation assistance."
      },
      {
        "id": "c",
        "label": "Auto-send unverified machine translation without human review."
      },
      {
        "id": "d",
        "label": "Close the ticket without responding."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_lit_14",
    "section": "literacy",
    "prompt": "How can support teams prompt an LLM to identify knowledge base documentation gaps from closed tickets?",
    "options": [
      {
        "id": "a",
        "label": "Ingest 100 resolved ticket conversations where agents had to write custom explanations; prompt to cluster recurring questions lacking official help center articles, and draft new article outlines."
      },
      {
        "id": "b",
        "label": "Delete all closed tickets from database storage."
      },
      {
        "id": "c",
        "label": "Ask the AI to guess what customers might be confused about without looking at tickets."
      },
      {
        "id": "d",
        "label": "Ask customers to write the help center articles themselves."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_lit_15",
    "section": "literacy",
    "prompt": "What is the risk of using generic out-of-the-box AI auto-replies for customer refund inquiries?",
    "options": [
      {
        "id": "a",
        "label": "Email servers will reject the message."
      },
      {
        "id": "b",
        "label": "The customer's credit card will be charged double."
      },
      {
        "id": "c",
        "label": "There is zero risk in automated refund promises."
      },
      {
        "id": "d",
        "label": "The AI may incorrectly promise refunds outside the return policy window, establishing unintended commercial liability and causing customer backlash when reversed."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_lit_16",
    "section": "literacy",
    "prompt": "How should a support specialist prompt an AI to create a step-by-step macro for a recurring software bug workaround?",
    "options": [
      {
        "id": "a",
        "label": "Write a 1-sentence macro saying \"We know about this bug.\""
      },
      {
        "id": "b",
        "label": "Tell the customer to write custom software code to bypass the bug."
      },
      {
        "id": "c",
        "label": "Provide the verified engineering workaround, format into numbered chronological steps with bold interface buttons, include a link to the live status page incident, and note expected permanent fix ETA."
      },
      {
        "id": "d",
        "label": "Blame the customer's internet service provider."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_lit_17",
    "section": "literacy",
    "prompt": "When a customer experiences data loss due to user error, how should an AI prompt help formulate the response?",
    "options": [
      {
        "id": "a",
        "label": "Blame the customer harshly for not reading the instruction manual."
      },
      {
        "id": "b",
        "label": "Lead with deep empathy and zero condescension, investigate and explain any possible partial recovery options (version history / backups), and provide clear instructions on enabling automated backups to prevent future loss."
      },
      {
        "id": "c",
        "label": "Falsely claim that the data was restored when it was not."
      },
      {
        "id": "d",
        "label": "Send an invoice charging the customer for submitting a ticket."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_lit_18",
    "section": "literacy",
    "prompt": "How should an AI copilot prompt be designed to assist agents during live customer chat sessions?",
    "options": [
      {
        "id": "a",
        "label": "Generate 2 short, context-aware candidate responses (under 40 words each) alongside relevant knowledge base citation links, allowing the agent to select, edit, and send with one click."
      },
      {
        "id": "b",
        "label": "Automatically send 500-word essays directly to the customer every 5 seconds."
      },
      {
        "id": "c",
        "label": "Mute the agent and lock their keyboard."
      },
      {
        "id": "d",
        "label": "Disconnect the chat session after 1 minute."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_lit_19",
    "section": "literacy",
    "prompt": "What prompt instruction ensures an AI drafts an effective post-resolution CSAT survey invitation?",
    "options": [
      {
        "id": "a",
        "label": "Demanding that the customer give a 5-star rating or their account will be closed."
      },
      {
        "id": "b",
        "label": "A 20-page questionnaire with mandatory essay fields."
      },
      {
        "id": "c",
        "label": "Sending the survey invitation 10 times a day for a month."
      },
      {
        "id": "d",
        "label": "Short, courteous, thanking the customer for their partnership, explaining that feedback takes under 30 seconds and directly shapes product improvements, with a clean 1-click rating link."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_lit_20",
    "section": "literacy",
    "prompt": "How should a Customer Success Manager prompt an AI to prepare an Executive Business Review (EBR) presentation?",
    "options": [
      {
        "id": "a",
        "label": "Generate a list of complaints about how difficult the customer is to work with."
      },
      {
        "id": "b",
        "label": "Present fictional ROI metrics that were not achieved."
      },
      {
        "id": "c",
        "label": "Synthesize account usage metrics, SLA uptime performance, top resolved tickets, ROI milestones achieved, and propose a 3-point strategic roadmap for the upcoming quarter."
      },
      {
        "id": "d",
        "label": "Copy an EBR deck from an unrelated automotive client."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_lit_21",
    "section": "literacy",
    "prompt": "How should an AI assistant handle a ticket requesting information on competitor product comparisons?",
    "options": [
      {
        "id": "a",
        "label": "Generate false rumors and slander about competitor leadership."
      },
      {
        "id": "b",
        "label": "Focus objectively on our verified architectural strengths, native integrations, and documented compliance standards, maintaining professional respect without disparaging competitors."
      },
      {
        "id": "c",
        "label": "Recommend that the customer cancel their account and switch to the competitor."
      },
      {
        "id": "d",
        "label": "Refuse to answer customer questions."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_lit_22",
    "section": "literacy",
    "prompt": "When a customer is confused by complex permission roles (RBAC), how should an AI prompt structure the clarification?",
    "options": [
      {
        "id": "a",
        "label": "Provide a clear comparison table mapping User Roles (Admin, Editor, Viewer, Billing) against specific capabilities (Invite Users, Edit Schemas, View Reports, Export Data)."
      },
      {
        "id": "b",
        "label": "Tell the customer to give full Admin privileges to all 500 company employees."
      },
      {
        "id": "c",
        "label": "Paste raw JSON permission schemas without explanation."
      },
      {
        "id": "d",
        "label": "Explain permission roles in hexadecimal code."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_lit_23",
    "section": "literacy",
    "prompt": "How can support teams prompt an AI to detect when a customer is attempting social engineering or unauthorized account access?",
    "options": [
      {
        "id": "a",
        "label": "Assume all users who type in all-caps are international spies."
      },
      {
        "id": "b",
        "label": "Grant access immediately if the user sounds confident."
      },
      {
        "id": "c",
        "label": "Disable password resets permanently for all customers."
      },
      {
        "id": "d",
        "label": "Flag indicators: urgency pressure (\"Do this now or my boss fires me\"), requests to bypass MFA, requests to change email address to an external domain, or refusing standard identity verification."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_lit_24",
    "section": "literacy",
    "prompt": "What prompt constraint ensures an AI creates effective onboarding walkthrough tooltips?",
    "options": [
      {
        "id": "a",
        "label": "Write 500 words of background history in each tooltip."
      },
      {
        "id": "b",
        "label": "Cover the entire screen with non-dismissable popups."
      },
      {
        "id": "c",
        "label": "Constraint: under 25 words per tooltip, focus on the immediate action required (\"Click here to connect your repository\"), and provide a progress indicator (Step 1 of 4)."
      },
      {
        "id": "d",
        "label": "Omit the next button."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_lit_25",
    "section": "literacy",
    "prompt": "How should support specialists prompt an AI to explain a complex API rate-limiting error (HTTP 429)?",
    "options": [
      {
        "id": "a",
        "label": "Tell the developer that their code is broken and support cannot help."
      },
      {
        "id": "b",
        "label": "Explain the current tier request threshold (e.g. 100 req/min), provide code examples implementing exponential backoff retries, and provide a direct link to upgrade throughput tiers if required."
      },
      {
        "id": "c",
        "label": "Disable API rate limits across the entire production cluster."
      },
      {
        "id": "d",
        "label": "Tell the user to make 10,000 requests per second to bypass throttling."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_lit_26",
    "section": "literacy",
    "prompt": "When generating customer success check-in emails, what prompt strategy maximizes response rates?",
    "options": [
      {
        "id": "a",
        "label": "Highlight 1 specific underutilized feature that solves a known goal from their onboarding notes, share a 30-second video tutorial, and offer an open invitation for a 15-minute optimization review."
      },
      {
        "id": "b",
        "label": "Send an email asking \"Are you using our software?\""
      },
      {
        "id": "c",
        "label": "Demand that the customer buy more user seats immediately."
      },
      {
        "id": "d",
        "label": "Send an email with no subject line or signature."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_lit_27",
    "section": "literacy",
    "prompt": "How should an AI assistant formulate answers when a customer asks about planned roadmap features?",
    "options": [
      {
        "id": "a",
        "label": "Guarantee that the feature will launch tomorrow."
      },
      {
        "id": "b",
        "label": "Tell the customer that the company will never build that feature."
      },
      {
        "id": "c",
        "label": "Share confidential uncompiled engineering source code."
      },
      {
        "id": "d",
        "label": "Confirm if the feature is on the public roadmap, clearly state that release timelines are subject to change, capture their specific use case for product team voting, and offer current available workarounds."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_lit_28",
    "section": "literacy",
    "prompt": "How should a support team prompt an AI to craft a transparent Root Cause Analysis (RCA) customer letter after an outage?",
    "options": [
      {
        "id": "a",
        "label": "Write an email blaming third-party telecom companies with zero technical detail."
      },
      {
        "id": "b",
        "label": "Deny that the outage ever occurred."
      },
      {
        "id": "c",
        "label": "Structure: 1) Executive Apology, 2) Incident Timeline, 3) Technical Root Cause in accessible language, 4) Immediate Remediations Taken, 5) Permanent Architectural Safeguards Implemented."
      },
      {
        "id": "d",
        "label": "Refuse to answer customer questions about the downtime."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_lit_29",
    "section": "literacy",
    "prompt": "What prompt instruction ensures an AI support assistant maintains appropriate professional boundaries during customer interactions?",
    "options": [
      {
        "id": "a",
        "label": "Engage in long personal political debates with customers."
      },
      {
        "id": "b",
        "label": "Maintain polite, helpful, objective professionalism; avoid flirtatious, overly personal, or emotionally co-dependent language, and gracefully redirect off-topic inquiries back to product support."
      },
      {
        "id": "c",
        "label": "Share fictional personal life stories."
      },
      {
        "id": "d",
        "label": "Insult customers who ask non-work questions."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_lit_30",
    "section": "literacy",
    "prompt": "What represents the gold standard of an AI-Empowered Customer Support & Success Professional?",
    "options": [
      {
        "id": "a",
        "label": "A trusted customer advocate who leverages AI speed to eliminate repetitive drudgery, delivering deep empathy, rapid technical problem-solving, and actionable Voice-of-Customer insights to product teams."
      },
      {
        "id": "b",
        "label": "An agent who auto-closes tickets without reading them to maximize ticket count metrics."
      },
      {
        "id": "c",
        "label": "An agent who relies 100% on automated bots without ever verifying accuracy."
      },
      {
        "id": "d",
        "label": "An agent who refuses to use any software tools."
      }
    ],
    "correctOptionId": "a"
  }
];

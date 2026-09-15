import { CertQuestion } from '../types';

export const SALES_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "sales_lit_01",
    "section": "literacy",
    "prompt": "When generating cold outbound emails at scale, which prompting strategy produces the highest response rates without sounding robotic?",
    "options": [
      {
        "id": "a",
        "label": "Feeding the prospect's recent public post, hiring news, or tech stack signal as an anchor context while constraining the email to 75 words."
      },
      {
        "id": "b",
        "label": "Asking the AI to generate a 500-word comprehensive pitch listing all 25 company product features."
      },
      {
        "id": "c",
        "label": "Instructing the AI to use aggressive urgency words like \"Act Now\" and \"URGENT OPPORTUNITY\"."
      },
      {
        "id": "d",
        "label": "Using a generic template and asking the AI to only change the prospect's first name and company name."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_02",
    "section": "literacy",
    "prompt": "You have 5 minutes before a discovery call with a VP of Engineering. How should you prompt an LLM to prep efficiently?",
    "options": [
      {
        "id": "a",
        "label": "Ask: \"Tell me everything about the software industry.\""
      },
      {
        "id": "b",
        "label": "Provide the prospect's recent LinkedIn summary, company domain, and ask for 3 likely strategic initiatives, 2 potential legacy friction points, and 3 open-ended discovery questions."
      },
      {
        "id": "c",
        "label": "Ask the AI to simulate the entire call and generate fake answers for what the prospect will say."
      },
      {
        "id": "d",
        "label": "Request a list of 50 generic icebreaker jokes."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_lit_03",
    "section": "literacy",
    "prompt": "Which phrase is a telltale sign of generic, low-converting AI-generated sales copy that should be edited out?",
    "options": [
      {
        "id": "a",
        "label": "\"In today's fast-paced digital landscape, unlocking synergistic potential is paramount...\""
      },
      {
        "id": "b",
        "label": "\"Saw your team is hiring 4 backend engineers in Austin.\""
      },
      {
        "id": "c",
        "label": "\"Are you still managing warehouse transfers via manual spreadsheets?\""
      },
      {
        "id": "d",
        "label": "\"Would Tuesday at 2pm CT work for a 15-minute intro?\""
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_04",
    "section": "literacy",
    "prompt": "When setting up an adaptive follow-up email sequence, how should you instruct an AI assistant to handle a prospect who visited the pricing page but did not book a demo?",
    "options": [
      {
        "id": "a",
        "label": "Draft a message accusing the prospect of abandoning their cart."
      },
      {
        "id": "b",
        "label": "Draft a short, non-defensive check-in focusing on typical ROI and packaging tiers, offering a 2-minute video walkthrough."
      },
      {
        "id": "c",
        "label": "Immediately send a 50% discount offer without asking about their actual evaluation criteria."
      },
      {
        "id": "d",
        "label": "Spam the prospect with 5 identical follow-up emails over 24 hours."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_lit_05",
    "section": "literacy",
    "prompt": "Why is it dangerous to ask an AI tool to \"Find the exact direct cell phone number of a target CEO\" using public consumer models?",
    "options": [
      {
        "id": "a",
        "label": "Consumer LLMs do not have verified real-time personal identity graphs and frequently hallucinate plausible-looking fake phone numbers."
      },
      {
        "id": "b",
        "label": "It is technically impossible for an AI to output 10 digits."
      },
      {
        "id": "c",
        "label": "The AI will automatically dial the phone number without permission."
      },
      {
        "id": "d",
        "label": "Phone numbers are encrypted in mathematical tokens."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_06",
    "section": "literacy",
    "prompt": "What prompt constraint ensures an AI-generated cold email maintains high deliverability and avoids spam filters?",
    "options": [
      {
        "id": "a",
        "label": "Explicitly constrain the output to plain text under 100 words, eliminate spam trigger keywords, and avoid images or tracking attachments in cold step 1."
      },
      {
        "id": "b",
        "label": "Include 15 tracking links and 4 animated GIFs in the body."
      },
      {
        "id": "c",
        "label": "Use ALL CAPS in the subject line to grab attention."
      },
      {
        "id": "d",
        "label": "Add hidden white-colored text containing popular keywords."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_07",
    "section": "literacy",
    "prompt": "When personalizing outreach to multiple personas within the same account (CFO vs. Head of IT), how should your AI prompt differ?",
    "options": [
      {
        "id": "a",
        "label": "Use the exact same prompt for both to ensure consistent messaging."
      },
      {
        "id": "b",
        "label": "Calibrate the value proposition: prompt for cost containment, payback period, and EBITDA impact for the CFO, while focusing on integration latency, API security, and maintenance overhead for IT."
      },
      {
        "id": "c",
        "label": "Only message the CFO and ignore technical stakeholders."
      },
      {
        "id": "d",
        "label": "Ask the AI to generate a humorous poem for the CFO and a technical manual for the IT lead."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_lit_08",
    "section": "literacy",
    "prompt": "What is \"persona calibration\" in sales prompt engineering?",
    "options": [
      {
        "id": "a",
        "label": "Changing your avatar picture in your email client."
      },
      {
        "id": "b",
        "label": "Providing the AI with the prospect's seniority level, daily KPIs, and pain language so the generated text speaks directly to their world."
      },
      {
        "id": "c",
        "label": "Configuring billing tiers inside the CRM."
      },
      {
        "id": "d",
        "label": "Automatically modifying the sender's email address to impersonate someone else."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_lit_09",
    "section": "literacy",
    "prompt": "A prospect replies to your cold outreach saying: \"We already use Competitor X and are locked in for 2 years.\" How should you prompt an AI to help draft a reply?",
    "options": [
      {
        "id": "a",
        "label": "Ask for a harsh critique of Competitor X that calls their technology garbage."
      },
      {
        "id": "b",
        "label": "Ask for a respectful acknowledgement of Competitor X, highlighting one distinct complementary capability or future co-existence case, asking when their annual review cycle begins."
      },
      {
        "id": "c",
        "label": "Tell the AI to write a message offering to pay their contract termination fee."
      },
      {
        "id": "d",
        "label": "Instruct the AI to ignore the email."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_lit_10",
    "section": "literacy",
    "prompt": "When using an AI tool to summarize a target company's 10-K annual report for sales triggers, which prompt instruction gives the best sales insights?",
    "options": [
      {
        "id": "a",
        "label": "\"Summarize this document in 2 sentences.\""
      },
      {
        "id": "b",
        "label": "\"Extract the CEO's stated top 3 strategic priorities, the Risk Factors section mentioning operational bottlenecks, and recent M&A acquisitions from this filing.\""
      },
      {
        "id": "c",
        "label": "\"Explain what a 10-K report is.\""
      },
      {
        "id": "d",
        "label": "\"Re-write the financial tables in cursive.\""
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_lit_11",
    "section": "literacy",
    "prompt": "Why should sales reps avoid one-click automated mass-sending of unreviewed AI cold emails?",
    "options": [
      {
        "id": "a",
        "label": "AI drafts frequently include subtle inaccuracies, awkward context misinterpretations, or inappropriate assumptions that can permanently damage domain reputation."
      },
      {
        "id": "b",
        "label": "Internet service providers shut down domains that send more than 5 emails a week."
      },
      {
        "id": "c",
        "label": "Sales reps are legally required to hand-type every single keystroke."
      },
      {
        "id": "d",
        "label": "Email servers reject text generated after 2024."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_12",
    "section": "literacy",
    "prompt": "Which prompt structure best equips an AI to write a high-converting LinkedIn connection note (under 300 characters)?",
    "options": [
      {
        "id": "a",
        "label": "Context: [Saw their talk on Kubernetes at KubeCon] + Role: [Fellow infrastructure enthusiast] + Ask: [Open connection to exchange notes on multi-cluster tooling] + Constraint: [Strictly under 250 chars, no pitch]."
      },
      {
        "id": "b",
        "label": "Ask: [Pitch our SaaS platform in full detail] + Include pricing."
      },
      {
        "id": "c",
        "label": "Write 3 paragraphs explaining our entire company history."
      },
      {
        "id": "d",
        "label": "Send an automated calendar link with no context."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_13",
    "section": "literacy",
    "prompt": "How can you prompt an AI to rewrite a technical feature description into an executive business outcome?",
    "options": [
      {
        "id": "a",
        "label": "\"Translate this feature (e.g. automated Redis caching) into the business benefit for a CIO: reduction in cloud compute spend, 99.99% checkout uptime during Black Friday, and developer sprint velocity.\""
      },
      {
        "id": "b",
        "label": "\"Add more technical jargon so the CIO is impressed.\""
      },
      {
        "id": "c",
        "label": "\"Make the text rhyme.\""
      },
      {
        "id": "d",
        "label": "\"Translate this into 10 foreign languages.\""
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_14",
    "section": "literacy",
    "prompt": "When an AI-generated sales email contains the phrase \"I hope this email finds you well in these unprecedented times\", what should you do?",
    "options": [
      {
        "id": "a",
        "label": "Keep it because it sounds polite."
      },
      {
        "id": "b",
        "label": "Delete it immediately and replace it with a direct, relevant observation or value hook."
      },
      {
        "id": "c",
        "label": "Capitalize every word in the sentence."
      },
      {
        "id": "d",
        "label": "Send it to the entire Fortune 500 list."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_lit_15",
    "section": "literacy",
    "prompt": "What is the purpose of \"negative constraints\" in sales outreach prompts?",
    "options": [
      {
        "id": "a",
        "label": "Explicitly barring the AI from using overused tropes (e.g., \"Do NOT use words like revolutionary, game-changer, unlock, or delve\")."
      },
      {
        "id": "b",
        "label": "Instructing the AI to insult the prospect's current vendors."
      },
      {
        "id": "c",
        "label": "Restricting sales reps from checking their quota."
      },
      {
        "id": "d",
        "label": "Preventing the CRM from syncing."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_16",
    "section": "literacy",
    "prompt": "You have a case study about a customer saving 40 hours/week. How should you prompt an AI to adapt this for a cold prospect in the logistics industry?",
    "options": [
      {
        "id": "a",
        "label": "\"Rewrite this case study highlighting logistics-specific metrics: reduction in dispatch latency and driver idle time, while mirroring the prospect's fleet scale.\""
      },
      {
        "id": "b",
        "label": "\"Change the customer name to the prospect's company name and claim they already did it.\""
      },
      {
        "id": "c",
        "label": "\"Multiply all savings by 10 to sound more impressive.\""
      },
      {
        "id": "d",
        "label": "\"Make the case study into an audio file.\""
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_17",
    "section": "literacy",
    "prompt": "When prompting an AI to draft a multi-channel sequence (Email + LinkedIn + Phone Script), what ensures message cohesion?",
    "options": [
      {
        "id": "a",
        "label": "Providing a single unified \"Core Value Thesis\" and having the AI adapt the delivery length and call-to-action per channel format."
      },
      {
        "id": "b",
        "label": "Writing 3 completely unrelated pitches across the channels."
      },
      {
        "id": "c",
        "label": "Copy-pasting the exact same 300-word email text as the phone script."
      },
      {
        "id": "d",
        "label": "Sending all 3 touchpoints within the same 60 seconds."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_18",
    "section": "literacy",
    "prompt": "What role does \"social proof calibration\" play in AI-assisted prospecting prompts?",
    "options": [
      {
        "id": "a",
        "label": "Ensuring the AI only cites customer references from the same industry or company stage as the prospect."
      },
      {
        "id": "b",
        "label": "Fabricating fake customer reviews with 5-star ratings."
      },
      {
        "id": "c",
        "label": "Listing 50 logos in the email footer."
      },
      {
        "id": "d",
        "label": "Tagging the prospect's personal friends on social media."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_19",
    "section": "literacy",
    "prompt": "How can you prompt an AI to generate a high-converting Cold Call opener?",
    "options": [
      {
        "id": "a",
        "label": "\"Write a 15-second permission-based opener that acknowledges the interruption, references a specific operational pain common to VP of Sales Ops, and asks for 20 seconds.\""
      },
      {
        "id": "b",
        "label": "\"Write a 2-minute monologue pitching our product features before the prospect can speak.\""
      },
      {
        "id": "c",
        "label": "\"Ask the prospect about the weather and their weekend plans.\""
      },
      {
        "id": "d",
        "label": "\"Tell the prospect you are an automated AI robot testing phone lines.\""
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_lit_20",
    "section": "literacy",
    "prompt": "Which metric best indicates that your AI-assisted prospecting prompts need refinement?",
    "options": [
      {
        "id": "a",
        "label": "High open rates (>60%) but extremely low reply rates (<1%), indicating good subject lines but robotic, irrelevant body copy."
      },
      {
        "id": "b",
        "label": "High positive meeting booking rates (>8%)."
      },
      {
        "id": "c",
        "label": "Prospects forwarding your email to their CEO."
      },
      {
        "id": "d",
        "label": "Low email bounce rates (<2%)."
      }
    ],
    "correctOptionId": "a"
  }
];

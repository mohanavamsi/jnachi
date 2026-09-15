import { CertQuestion } from '../types';

export const SALES_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "sales_auto_01",
    "section": "automation",
    "prompt": "You have a 45-minute raw Gong discovery call transcript. How do you prompt an AI to update Salesforce/HubSpot accurately?",
    "options": [
      {
        "id": "a",
        "label": "Prompt the AI with explicit schema fields: BANT/MEDDPICC (Budget, Authority, Need, Timeline), Competitors Mentioned, Objections Raised, and Next Action Items with Owners & Dates."
      },
      {
        "id": "b",
        "label": "Paste the transcript and ask: \"Make this look like a CRM.\""
      },
      {
        "id": "c",
        "label": "Ask the AI to generate a fictional deal amount and close date."
      },
      {
        "id": "d",
        "label": "Instruct the AI to delete all negative customer comments."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_02",
    "section": "automation",
    "prompt": "When an AI suggests \"Move deal from Discovery to Negotiation and set stage to 90%\", what must the Account Executive check?",
    "options": [
      {
        "id": "a",
        "label": "Verify whether a formal commercial proposal was delivered, decision criteria confirmed, and procurement/legal approved rather than blind reliance."
      },
      {
        "id": "b",
        "label": "Accept the stage change without reading the customer email."
      },
      {
        "id": "c",
        "label": "Immediately mark the deal as Closed-Won."
      },
      {
        "id": "d",
        "label": "Send an invoice to the prospect before pricing is agreed."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_03",
    "section": "automation",
    "prompt": "How can sales teams use AI to automate post-demo executive summaries for buyer champions?",
    "options": [
      {
        "id": "a",
        "label": "Extract the champion's explicit pain points, summarize the 3 demonstrated solutions, and draft a mutual action plan (MAP) template ready for email review."
      },
      {
        "id": "b",
        "label": "Send a raw 20-page dump of every feature shown during the demo."
      },
      {
        "id": "c",
        "label": "Send the buyer's competitor pricing sheet to the entire company."
      },
      {
        "id": "d",
        "label": "Generate automated calendar invites for every employee at the prospect company."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_04",
    "section": "automation",
    "prompt": "Why is it essential to audit automated AI pipeline hygiene updates before quarterly forecast reviews?",
    "options": [
      {
        "id": "a",
        "label": "AI algorithms may fail to catch subtle deal stalling signals (e.g. champion ghosting, executive sponsor departures) that human intuition identifies."
      },
      {
        "id": "b",
        "label": "CRMs automatically delete deals when AI touches them."
      },
      {
        "id": "c",
        "label": "Forecast meetings are legally required to be done by hand."
      },
      {
        "id": "d",
        "label": "AI models cannot calculate basic percentage probabilities."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_05",
    "section": "automation",
    "prompt": "In sales automation scenario #5, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #5."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_06",
    "section": "automation",
    "prompt": "In sales automation scenario #6, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #6."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_07",
    "section": "automation",
    "prompt": "In sales automation scenario #7, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #7."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_08",
    "section": "automation",
    "prompt": "In sales automation scenario #8, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #8."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_09",
    "section": "automation",
    "prompt": "In sales automation scenario #9, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #9."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_10",
    "section": "automation",
    "prompt": "In sales automation scenario #10, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #10."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_11",
    "section": "automation",
    "prompt": "In sales automation scenario #11, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #11."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_12",
    "section": "automation",
    "prompt": "In sales automation scenario #12, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #12."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_13",
    "section": "automation",
    "prompt": "In sales automation scenario #13, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #13."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_14",
    "section": "automation",
    "prompt": "In sales automation scenario #14, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #14."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_15",
    "section": "automation",
    "prompt": "In sales automation scenario #15, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #15."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_16",
    "section": "automation",
    "prompt": "In sales automation scenario #16, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #16."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_17",
    "section": "automation",
    "prompt": "In sales automation scenario #17, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #17."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_18",
    "section": "automation",
    "prompt": "In sales automation scenario #18, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #18."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_19",
    "section": "automation",
    "prompt": "In sales automation scenario #19, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #19."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_20",
    "section": "automation",
    "prompt": "In sales automation scenario #20, what is the best practice for AI-assisted pipeline workflows?",
    "options": [
      {
        "id": "a",
        "label": "Standardize transcript inputs with structured prompts, review action items before CRM sync, and verify deal stage criteria #20."
      },
      {
        "id": "b",
        "label": "Allow unvalidated autonomous AI CRM modifications with zero human oversight."
      },
      {
        "id": "c",
        "label": "Discard all previous call notes and rely solely on generic LLM guesses."
      },
      {
        "id": "d",
        "label": "Disable CRM validation rules to speed up data ingestion."
      }
    ],
    "correctOptionId": "a"
  }
];

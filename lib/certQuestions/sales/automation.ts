import { CertQuestion } from '../types';

export const SALES_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "sales_auto_01",
    "section": "automation",
    "prompt": "You have a 45-minute raw Gong/Chorus discovery call transcript. How do you prompt an AI to update Salesforce/HubSpot accurately?",
    "options": [
      {
        "id": "a",
        "label": "Paste the transcript and ask: \"Make this look like a CRM.\""
      },
      {
        "id": "b",
        "label": "Prompt the AI with explicit schema fields: BANT/MEDDPICC (Budget, Authority, Need, Timeline), Competitors Mentioned, Objections Raised, and Next Action Items with Owners & Dates."
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
    "correctOptionId": "b"
  },
  {
    "id": "sales_auto_02",
    "section": "automation",
    "prompt": "When an AI suggests \"Move deal from Discovery to Negotiation and set stage probability to 90%\", what must the Account Executive check?",
    "options": [
      {
        "id": "a",
        "label": "Verify whether a formal commercial proposal was delivered, decision criteria confirmed, and procurement/legal approved rather than relying blindly on automated stage triggers."
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
        "label": "Send a raw 20-page dump of every feature shown during the demo."
      },
      {
        "id": "b",
        "label": "Send the buyer's competitor pricing sheet to the entire company."
      },
      {
        "id": "c",
        "label": "Generate automated calendar invites for every employee at the prospect company."
      },
      {
        "id": "d",
        "label": "Extract the champion's explicit pain points, summarize the 3 demonstrated solutions, and draft a mutual action plan (MAP) template ready for email review."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_auto_04",
    "section": "automation",
    "prompt": "Why is it essential to audit automated AI pipeline hygiene updates before quarterly forecast reviews?",
    "options": [
      {
        "id": "a",
        "label": "CRMs automatically delete deals when AI touches them."
      },
      {
        "id": "b",
        "label": "Forecast meetings are legally required to be done by hand."
      },
      {
        "id": "c",
        "label": "AI algorithms may fail to catch subtle deal stalling signals (e.g. champion ghosting, executive sponsor departures) that human intuition and direct customer contact reveal."
      },
      {
        "id": "d",
        "label": "AI models cannot calculate basic percentage probabilities."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_auto_05",
    "section": "automation",
    "prompt": "How should an enterprise RevOps team design automated inbound lead routing using AI account matching?",
    "options": [
      {
        "id": "a",
        "label": "Route all incoming leads to the rep who responded fastest last quarter regardless of territory."
      },
      {
        "id": "b",
        "label": "Use semantic entity resolution to match corporate parent companies, enrich firmographic revenue data, and route based on defined territory quotas and rep specialization."
      },
      {
        "id": "c",
        "label": "Rely solely on personal email domains without company domain resolution."
      },
      {
        "id": "d",
        "label": "Assign all enterprise leads to junior SDRs randomly."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_auto_06",
    "section": "automation",
    "prompt": "When third-party intent data (e.g., Bombora, G2) detects high search surges for your category, how should automated SDR workflows respond?",
    "options": [
      {
        "id": "a",
        "label": "Trigger an enriched account research brief to the assigned AE, map active buyer personas, and initiate tailored multi-threading outreach referencing general industry problem spaces."
      },
      {
        "id": "b",
        "label": "Send 50 automated identical emails to every contact at the target account in a single hour."
      },
      {
        "id": "c",
        "label": "Call the target CEO and state that their browsing history was tracked."
      },
      {
        "id": "d",
        "label": "Ignore the intent surge until the prospect fills out a website form."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_07",
    "section": "automation",
    "prompt": "What mechanism prevents CRM data corruption when multiple automated AI data enrichment providers run concurrently?",
    "options": [
      {
        "id": "a",
        "label": "Allowing all providers to overwrite fields on every HTTP request."
      },
      {
        "id": "b",
        "label": "Disabling CRM validation rules."
      },
      {
        "id": "c",
        "label": "Storing all contact numbers in unstructured note fields."
      },
      {
        "id": "d",
        "label": "Field-level governance rules with strict source-of-truth priority hierarchies and timestamped audit logs for automated mutations."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_auto_08",
    "section": "automation",
    "prompt": "How should an autonomous meeting scheduling AI agent handle an ambiguous prospect time zone or conflict?",
    "options": [
      {
        "id": "a",
        "label": "Book three overlapping calendar invites simultaneously."
      },
      {
        "id": "b",
        "label": "Cancel the meeting and mark the lead as lost."
      },
      {
        "id": "c",
        "label": "Proactively clarify the prospect's preferred local time zone, offer 3 distinct localized slots, and gracefully escalate to a human coordinator if unresolved after 2 turns."
      },
      {
        "id": "d",
        "label": "Assume the prospect is always in Pacific Standard Time."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_auto_09",
    "section": "automation",
    "prompt": "How can RevOps automate real-time competitive battlecard delivery during active sales calls?",
    "options": [
      {
        "id": "a",
        "label": "Automatically playing an audio advertisement about competitors over the call."
      },
      {
        "id": "b",
        "label": "Real-time speech-to-text NLP listeners that detect competitor brand mentions and push concise 2-bullet differentiation nuggets to the rep's private heads-up display."
      },
      {
        "id": "c",
        "label": "Muting the prospect whenever they mention a rival vendor."
      },
      {
        "id": "d",
        "label": "Emailing the prospect a 50-page competitor takedown document during the conversation."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_auto_10",
    "section": "automation",
    "prompt": "How should an automated customer retention system monitor client risk signals from shared Slack/Teams channels?",
    "options": [
      {
        "id": "a",
        "label": "Analyze sentiment trajectories, ticket escalation frequency, and champion engagement decay, alerting the strategic account team when sentiment drops below a safety threshold."
      },
      {
        "id": "b",
        "label": "Scrape and post raw executive private messages to public marketing channels."
      },
      {
        "id": "c",
        "label": "Automatically terminate customer contracts when a user expresses minor frustration."
      },
      {
        "id": "d",
        "label": "Block customers from submitting bug reports."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_11",
    "section": "automation",
    "prompt": "What guardrail is essential when deploying an AI system that generates automated Configure, Price, Quote (CPQ) proposals?",
    "options": [
      {
        "id": "a",
        "label": "Permitting the LLM to negotiate custom contract prices without margin limits."
      },
      {
        "id": "b",
        "label": "Removing legal terms of service from all generated proposals."
      },
      {
        "id": "c",
        "label": "Allowing sales reps to delete line-item audit histories."
      },
      {
        "id": "d",
        "label": "Hardcoded gross margin floor boundaries and mandatory approval workflows for non-standard discounting before customer-facing PDF compilation."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_auto_12",
    "section": "automation",
    "prompt": "How should sales leadership automate account scoring to optimize territory rebalancing?",
    "options": [
      {
        "id": "a",
        "label": "Assign territories based purely on alphabetical sorting of company names."
      },
      {
        "id": "b",
        "label": "Give all Fortune 500 accounts to a single top-performing rep."
      },
      {
        "id": "c",
        "label": "Train predictive scoring models on historical deal cycle lengths, ACV, tech stack compatibility, and growth trajectory to balance high-propensity accounts evenly across reps."
      },
      {
        "id": "d",
        "label": "Rebalance territories every 24 hours to keep sales reps agile."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_auto_13",
    "section": "automation",
    "prompt": "When multiple stakeholders from a prospect attend a technical evaluation, how should automated follow-ups be constructed?",
    "options": [
      {
        "id": "a",
        "label": "Send one generic blast email addressing the most senior executive only."
      },
      {
        "id": "b",
        "label": "Segment meeting transcript action items by speaker, generating persona-specific follow-ups that address each participant's specific technical questions and assigned tasks."
      },
      {
        "id": "c",
        "label": "Instruct the AI to ignore questions raised by non-executive attendees."
      },
      {
        "id": "d",
        "label": "Send the entire unedited raw audio file to everyone on the invite."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_auto_14",
    "section": "automation",
    "prompt": "How should high-volume outbound sequencing engines handle sudden API rate limits or spam reputation spikes?",
    "options": [
      {
        "id": "a",
        "label": "Automatically pause sending queues, alert RevOps administrators, activate exponential backoff, and rotate secondary sending domains."
      },
      {
        "id": "b",
        "label": "Double the sending volume immediately to overcome throttling."
      },
      {
        "id": "c",
        "label": "Switch all outbound emails to SMS messages without consent."
      },
      {
        "id": "d",
        "label": "Delete all pending outbound prospect records."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_15",
    "section": "automation",
    "prompt": "In automated legal review of enterprise Master Services Agreements (MSAs), what is the primary role of AI contract tooling?",
    "options": [
      {
        "id": "a",
        "label": "Automatically sign and execute all incoming legal documents without attorney oversight."
      },
      {
        "id": "b",
        "label": "Delete all clauses requiring vendor data privacy compliance."
      },
      {
        "id": "c",
        "label": "Replace customer legal contracts with one-paragraph verbal summaries."
      },
      {
        "id": "d",
        "label": "Compare buyer redlines against company standard fallback terms, calculate liability deviation risk, and highlight non-standard indemnification clauses for legal counsel."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_auto_16",
    "section": "automation",
    "prompt": "How does an AI-guided discount recommendation engine calculate optimal pricing guidance for enterprise deals?",
    "options": [
      {
        "id": "a",
        "label": "Recommending the steepest discount possible to ensure 100% win rate regardless of margin."
      },
      {
        "id": "b",
        "label": "Matching whatever price the customer demands without validation."
      },
      {
        "id": "c",
        "label": "Analyzing historical win-rate elasticity curves across deal size, industry, competitor presence, and quarter-end timing to suggest discount bands that maximize expected contract value."
      },
      {
        "id": "d",
        "label": "Setting all discounts uniformly at 25% for every prospect."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_auto_17",
    "section": "automation",
    "prompt": "How should RevOps automate executive job change tracking to generate warm pipeline opportunities?",
    "options": [
      {
        "id": "a",
        "label": "Spam the previous company with aggressive emails demanding to know where the champion went."
      },
      {
        "id": "b",
        "label": "Monitor alumni champion departures via automated social enrichment webhooks, detect their new employer and seniority level, and automatically stage warm re-engagement tasks for the assigned AE."
      },
      {
        "id": "c",
        "label": "Delete the contact record immediately upon departure."
      },
      {
        "id": "d",
        "label": "Cold-call the executive's personal cell phone at midnight."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_auto_18",
    "section": "automation",
    "prompt": "What ethical and compliance guardrail must be built into automated conversational Voice AI qualification bots?",
    "options": [
      {
        "id": "a",
        "label": "Mandatory clear upfront disclosure of AI identity, immediate compliance with do-not-call requests, and instantaneous warm transfer to human reps upon complex inquiry."
      },
      {
        "id": "b",
        "label": "Pretending to be a human employee and denying being an automated system when asked."
      },
      {
        "id": "c",
        "label": "Recording calls without informing the prospect in two-party consent jurisdictions."
      },
      {
        "id": "d",
        "label": "Calling prospects repeatedly after they explicitly hang up."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_19",
    "section": "automation",
    "prompt": "How should Sales Enablement automate SDR call performance scoring without creating negative team culture?",
    "options": [
      {
        "id": "a",
        "label": "Publicly rank SDRs based on single-call mistake counts on a company-wide dashboard."
      },
      {
        "id": "b",
        "label": "Automatically fire reps who score below 70% on their first day."
      },
      {
        "id": "c",
        "label": "Evaluate reps exclusively on total minutes spent talking."
      },
      {
        "id": "d",
        "label": "Automate objective rubric scoring (pacing, open-ended question ratio, value proposition clarity), combine with private coaching tips, and celebrate weekly improvement trajectories."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_auto_20",
    "section": "automation",
    "prompt": "When combining AI predictive forecasting with qualitative rep commits, how should the CRO reconcile discrepancies?",
    "options": [
      {
        "id": "a",
        "label": "Always discard the rep forecast and assume the AI is 100% infallible."
      },
      {
        "id": "b",
        "label": "Always ignore the AI model and trust gut instinct."
      },
      {
        "id": "c",
        "label": "Use AI historical stage velocity and engagement telemetry to stress-test high-value rep commits, focusing forecast review conversations on high-variance deals."
      },
      {
        "id": "d",
        "label": "Average the two numbers together without investigating underlying deal risk."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_auto_21",
    "section": "automation",
    "prompt": "How should an automated customer advocacy engine identify the optimal moment to request a customer referral or case study?",
    "options": [
      {
        "id": "a",
        "label": "Send referral requests immediately after the initial contract is signed before onboarding begins."
      },
      {
        "id": "b",
        "label": "Trigger referral outreach upon verified positive business milestones: successful product go-live, high NPS submission, or exceeding expected ROI metrics."
      },
      {
        "id": "c",
        "label": "Spam all customer accounts every Monday morning with automated review links."
      },
      {
        "id": "d",
        "label": "Only request case studies from customers who have opened severe support tickets."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_auto_22",
    "section": "automation",
    "prompt": "How can Pre-Sales Solutions Engineers (SEs) automate the handoff between sales discovery calls and technical proof-of-concept (POC) tracking?",
    "options": [
      {
        "id": "a",
        "label": "Auto-extract technical architecture requirements, integration dependencies, and security constraints from call transcripts directly into structured Jira/Asana POC sprint epics."
      },
      {
        "id": "b",
        "label": "Expect SEs to memorize all verbal client comments during discovery."
      },
      {
        "id": "c",
        "label": "Send raw 5-hour video recordings to engineering without written documentation."
      },
      {
        "id": "d",
        "label": "Refuse to support technical POCs unless the buyer signs a full contract first."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_23",
    "section": "automation",
    "prompt": "What strategy yields the highest success in automated deal resurrection / ghosting re-engagement sequences?",
    "options": [
      {
        "id": "a",
        "label": "Sending 10 consecutive \"Did you see my last email?\" messages."
      },
      {
        "id": "b",
        "label": "Threatening to report the prospect to their manager for not responding."
      },
      {
        "id": "c",
        "label": "Marking the contact as an invalid email address."
      },
      {
        "id": "d",
        "label": "Automating multi-angle value drops: sharing a relevant new customer case study, a newly released product capability solving their stated pain, or an invitation to a relevant industry roundtable."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_auto_24",
    "section": "automation",
    "prompt": "What latency threshold is critical when designing real-time AI copilot recommendations during live sales phone conversations?",
    "options": [
      {
        "id": "a",
        "label": "30 to 45 seconds after the customer finishes their sentence."
      },
      {
        "id": "b",
        "label": "At the end of the day via a batch summary email."
      },
      {
        "id": "c",
        "label": "Under 1.5 seconds from speech utterance to on-screen guidance to remain conversational and actionable for the rep."
      },
      {
        "id": "d",
        "label": "Real-time latency is irrelevant during live voice calls."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_auto_25",
    "section": "automation",
    "prompt": "How can automated pipeline velocity analytics identify systemic sales cycle bottlenecks?",
    "options": [
      {
        "id": "a",
        "label": "Tracking how many hours sales reps spend on social media."
      },
      {
        "id": "b",
        "label": "Measuring average dwell time per deal stage, correlating stage duration with eventual win rates, and highlighting stages where deals frequently stall or slip."
      },
      {
        "id": "c",
        "label": "Counting the total number of words in sales emails."
      },
      {
        "id": "d",
        "label": "Measuring typing speed during contract drafting."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_auto_26",
    "section": "automation",
    "prompt": "In Product-Led Growth (PLG) motions, how should automated Product-Qualified Lead (PQL) alerts trigger sales outreach?",
    "options": [
      {
        "id": "a",
        "label": "Trigger sales alerts only when user workspaces hit high-intent activation thresholds (e.g. inviting 5+ team members, reaching 80% usage limits, or exporting enterprise reports)."
      },
      {
        "id": "b",
        "label": "Contact every user within 30 seconds of their first account signup regardless of product usage."
      },
      {
        "id": "c",
        "label": "Lock the user's free account until they agree to a 60-minute sales demo."
      },
      {
        "id": "d",
        "label": "Never contact product users and rely solely on outbound cold calling."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sales_auto_27",
    "section": "automation",
    "prompt": "How should RevOps design an intelligent round-robin lead allocation engine for inbound demo requests?",
    "options": [
      {
        "id": "a",
        "label": "Always route all inbound requests to the newest SDR."
      },
      {
        "id": "b",
        "label": "Allow sales reps to race each other to claim leads from an open spreadsheet."
      },
      {
        "id": "c",
        "label": "Hold all demo requests in a queue until the end of the month."
      },
      {
        "id": "d",
        "label": "Account for rep working hours/time zones, real-time pipeline capacity, historical win rates with specific industries, and equal opportunity distribution."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sales_auto_28",
    "section": "automation",
    "prompt": "What automated deliverability safeguard prevents sales outreach domains from landing in prospect spam folders?",
    "options": [
      {
        "id": "a",
        "label": "Sending outbound messages exclusively in all-caps text."
      },
      {
        "id": "b",
        "label": "Attaching 50MB zip files to cold introductory emails."
      },
      {
        "id": "c",
        "label": "Automated SPF/DKIM/DMARC monitoring, gradual daily volume ramp-up (warmup schedules), bounce rate threshold kill-switches, and automated spam-trap detection."
      },
      {
        "id": "d",
        "label": "Using purchased unverified email lists from untrusted forums."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sales_auto_29",
    "section": "automation",
    "prompt": "How should AI automate the creation of an Executive Briefing Document before an enterprise closing meeting with the CEO?",
    "options": [
      {
        "id": "a",
        "label": "Generate a fictional autobiography of the prospect's CEO."
      },
      {
        "id": "b",
        "label": "Synthesize months of conversation logs, stakeholder relationship maps, agreed ROI metrics, outstanding legal items, and executive background notes into a 1-page structured briefing."
      },
      {
        "id": "c",
        "label": "Print out 500 pages of unformatted database records."
      },
      {
        "id": "d",
        "label": "Send the CEO an automated email asking them to explain their company history."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sales_auto_30",
    "section": "automation",
    "prompt": "What represents the benchmark of a mature, automated RevOps ecosystem in modern enterprise sales?",
    "options": [
      {
        "id": "a",
        "label": "Seamless end-to-end integration where AI handles signal detection, enrichment, CRM hygiene, and meeting prep, freeing reps to focus on high-empathy relationship building and strategic negotiation."
      },
      {
        "id": "b",
        "label": "Completely removing human sales representatives and having bots run all closing calls."
      },
      {
        "id": "c",
        "label": "Generating 10 million unverified spam emails daily."
      },
      {
        "id": "d",
        "label": "Running all sales operations without standard CRM software."
      }
    ],
    "correctOptionId": "a"
  }
];

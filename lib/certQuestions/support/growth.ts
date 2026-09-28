import { CertQuestion } from '../types';

export const SUPPORT_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "sup_grow_01",
    "section": "growth",
    "prompt": "How does modern executive leadership transform customer support from a cost center into a strategic revenue retention engine?",
    "options": [
      {
        "id": "a",
        "label": "By cutting support staff by 90% and forcing all customers to use unmonitored email inboxes."
      },
      {
        "id": "b",
        "label": "By measuring impact on Net Retention Rate (NRR), identifying expansion opportunities during high-satisfaction interactions, and feeding structured Voice-of-Customer data to product roadmaps."
      },
      {
        "id": "c",
        "label": "By charging customers $100 per minute for basic bug reporting."
      },
      {
        "id": "d",
        "label": "By measuring support solely on how fast agents can hang up the phone."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_grow_02",
    "section": "growth",
    "prompt": "How should Support leadership structure a Voice of the Customer (VoC) feedback pipeline to influence Product engineering priorities?",
    "options": [
      {
        "id": "a",
        "label": "Tag tickets by feature area and ARR impact, cluster recurring customer friction points, and co-host monthly VoC review sessions with Product Managers to prioritize high-drag UX blockers."
      },
      {
        "id": "b",
        "label": "Forward random customer complaints directly to engineers in private Slack DMs."
      },
      {
        "id": "c",
        "label": "Ignore all customer feature requests."
      },
      {
        "id": "d",
        "label": "Tell customers that product managers never make mistakes."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_grow_03",
    "section": "growth",
    "prompt": "How should a Customer Success team build a predictive Customer Health Score algorithm?",
    "options": [
      {
        "id": "a",
        "label": "Rely solely on whether the customer paid their initial invoice."
      },
      {
        "id": "b",
        "label": "Assign health scores based on how much the account manager likes the customer."
      },
      {
        "id": "c",
        "label": "Change health scores randomly every week."
      },
      {
        "id": "d",
        "label": "Combine product usage frequency, license activation depth, support ticket volume/severity trends, CSAT survey ratings, and executive sponsor engagement into a weighted composite score."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_grow_04",
    "section": "growth",
    "prompt": "What career development strategy helps front-line support agents upskill into Technical Account Managers (TAMs) or Solutions Engineers?",
    "options": [
      {
        "id": "a",
        "label": "Requiring agents to answer 200 tickets a day with zero time for training."
      },
      {
        "id": "b",
        "label": "Prohibiting support agents from learning software development skills."
      },
      {
        "id": "c",
        "label": "Providing dedicated learning time for technical cloud/AI certifications, pairing with senior engineers on complex architecture escalations, and sponsoring hands-on customer demo shadowing."
      },
      {
        "id": "d",
        "label": "Firing agents who express interest in career growth."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_grow_05",
    "section": "growth",
    "prompt": "How can proactive Customer Success interventions prevent customer churn before contract renewal?",
    "options": [
      {
        "id": "a",
        "label": "Wait until the customer sends a formal contract cancellation notice on renewal day."
      },
      {
        "id": "b",
        "label": "Detect early risk signals (e.g. key champion departure, 30% drop in active weekly users) and immediately initiate a value-realization intervention with tailored executive training and roadmap reviews."
      },
      {
        "id": "c",
        "label": "Automatically renew customer contracts without their knowledge or consent."
      },
      {
        "id": "d",
        "label": "Threaten to sue the customer if they mention canceling."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_grow_06",
    "section": "growth",
    "prompt": "What leadership culture best fosters high performance and psychological safety in customer support teams?",
    "options": [
      {
        "id": "a",
        "label": "Blameless retrospectives on challenging ticket escalations, celebrating collaborative problem-solving, providing mental health recharge breaks, and recognizing quality over raw ticket volume."
      },
      {
        "id": "b",
        "label": "Publicly shaming agents on leaderboards when a customer gives a 1-star rating."
      },
      {
        "id": "c",
        "label": "Canceling all one-on-one coaching meetings."
      },
      {
        "id": "d",
        "label": "Enforcing 14-hour mandatory shifts with zero breaks."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_grow_07",
    "section": "growth",
    "prompt": "How should Customer Success Managers structure an Executive Business Review (EBR) to drive strategic partnership?",
    "options": [
      {
        "id": "a",
        "label": "Read a 100-page list of every minor support ticket closed over the last 90 days."
      },
      {
        "id": "b",
        "label": "Spend the entire meeting demanding that the customer buy more licenses."
      },
      {
        "id": "c",
        "label": "Cancel EBR meetings to save time."
      },
      {
        "id": "d",
        "label": "Focus 80% on the customer's overarching strategic business goals, demonstrate quantified ROI realized to date, review joint milestone achievements, and align on upcoming expansion roadmaps."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_grow_08",
    "section": "growth",
    "prompt": "What is the difference between Gross Revenue Retention (GRR) and Net Revenue Retention (NRR)?",
    "options": [
      {
        "id": "a",
        "label": "GRR and NRR are identical metrics with no difference."
      },
      {
        "id": "b",
        "label": "GRR measures website visitors; NRR measures Twitter followers."
      },
      {
        "id": "c",
        "label": "GRR measures recurring revenue retained from existing customers excluding expansion (capped at 100%); NRR includes expansions, upsells, and cross-sells minus churn/contraction (can exceed 100%)."
      },
      {
        "id": "d",
        "label": "GRR applies to sales; NRR applies only to human resources."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_grow_09",
    "section": "growth",
    "prompt": "How should an enterprise SaaS company structure Tiered Support Packages (e.g. Standard vs Premier Support)?",
    "options": [
      {
        "id": "a",
        "label": "Standard Support receives zero support and emails are automatically deleted."
      },
      {
        "id": "b",
        "label": "Premier Support includes guaranteed <15 min 24/7/365 SLAs for P1 outages, a dedicated Named Technical Account Manager (TAM), proactive health checks, and quarterly architectural reviews."
      },
      {
        "id": "c",
        "label": "Premier Support only provides a t-shirt with the company logo."
      },
      {
        "id": "d",
        "label": "All customers pay identical fees regardless of support level."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_grow_10",
    "section": "growth",
    "prompt": "Why is Time-to-First-Value (TTFV) the single most critical metric during new customer onboarding?",
    "options": [
      {
        "id": "a",
        "label": "Customers who realize quantifiable value within their first 14–30 days have drastically higher long-term retention, faster feature adoption, and 3x higher expansion rates."
      },
      {
        "id": "b",
        "label": "TTFV determines how much sales commission is paid to recruiters."
      },
      {
        "id": "c",
        "label": "TTFV is only relevant for free open-source software."
      },
      {
        "id": "d",
        "label": "Longer TTFV of 12+ months is proven to improve customer satisfaction."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_grow_11",
    "section": "growth",
    "prompt": "How should a Head of Support build strong cross-functional alignment with the VP of Engineering?",
    "options": [
      {
        "id": "a",
        "label": "Blame engineering publicly on social media for every software bug."
      },
      {
        "id": "b",
        "label": "Refuse to report customer bugs to engineering."
      },
      {
        "id": "c",
        "label": "Prohibit support agents from speaking to developers."
      },
      {
        "id": "d",
        "label": "Establish clear escalation criteria, share weekly defect trend metrics tied to customer ARR risk, and participate in engineering bug triage to ensure critical fixes receive sprint priority."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_grow_12",
    "section": "growth",
    "prompt": "How does world-class customer support naturally fuel customer advocacy and referral marketing?",
    "options": [
      {
        "id": "a",
        "label": "Forcing customers to sign contracts promising to post positive reviews."
      },
      {
        "id": "b",
        "label": "Paying customers cash under the table for fake reviews."
      },
      {
        "id": "c",
        "label": "Turning a moment of customer frustration into an exceptional, empathetic resolution creates loyal brand champions who willingly participate in case studies, refer peers, and leave 5-star reviews."
      },
      {
        "id": "d",
        "label": "Customer support has no impact on brand reputation."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_grow_13",
    "section": "growth",
    "prompt": "When managing a severe executive escalation from a Fortune 500 client, what leadership protocol is mandatory?",
    "options": [
      {
        "id": "a",
        "label": "Ignore the executive's emails and hope the issue resolves itself."
      },
      {
        "id": "b",
        "label": "Establish a dedicated cross-functional war room, provide hourly status briefings to client executive sponsors, deliver daily written progress digests, and conduct an executive post-mortem."
      },
      {
        "id": "c",
        "label": "Blame the junior support agent who answered the first ticket."
      },
      {
        "id": "d",
        "label": "Terminate the customer's contract immediately."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_grow_14",
    "section": "growth",
    "prompt": "How should a progressive Support organization structure technical career progression paths?",
    "options": [
      {
        "id": "a",
        "label": "Dual-track career ladders: Individual Contributor track (Associate -> Senior -> Technical Lead -> Principal Support Architect) and People Leadership track (Team Lead -> Manager -> Director)."
      },
      {
        "id": "b",
        "label": "The only way to get a promotion is to leave customer support and join sales."
      },
      {
        "id": "c",
        "label": "Promote employees solely based on who has been at the company the longest."
      },
      {
        "id": "d",
        "label": "Eliminate all job titles and promotions."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_grow_15",
    "section": "growth",
    "prompt": "What is Customer Effort Score (CES) and why is it a powerful predictor of customer loyalty?",
    "options": [
      {
        "id": "a",
        "label": "Measures how many hours the customer spent working at their own job."
      },
      {
        "id": "b",
        "label": "Measures how many times the customer had to restart their computer."
      },
      {
        "id": "c",
        "label": "CES is identical to website pageview metrics."
      },
      {
        "id": "d",
        "label": "Measures how easy or difficult it was for the customer to get their problem resolved; low customer effort correlates directly with higher retention and repeat purchasing."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_grow_16",
    "section": "growth",
    "prompt": "How does building a Customer Learning Academy / Certification Hub drive support scalability?",
    "options": [
      {
        "id": "a",
        "label": "Replaces the need for having a customer support team."
      },
      {
        "id": "b",
        "label": "Forces customers to pay for mandatory daily training classes."
      },
      {
        "id": "c",
        "label": "Empowers users to self-serve complex product mastery, establishes verified industry credentials, accelerates user time-to-value, and deflects repetitive foundational support inquiries."
      },
      {
        "id": "d",
        "label": "Eliminates all software documentation."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_grow_17",
    "section": "growth",
    "prompt": "How should support leaders navigate the trade-off between ticket deflection automation and high-touch relationship building?",
    "options": [
      {
        "id": "a",
        "label": "Automate 100% of all customer interactions and forbid human communication."
      },
      {
        "id": "b",
        "label": "Automate repetitive transactional questions (passwords, basic FAQs, billing lookups) so human specialists have maximum bandwidth for high-empathy, complex consultative customer relationships."
      },
      {
        "id": "c",
        "label": "Disable all automation and answer every routine question manually."
      },
      {
        "id": "d",
        "label": "Provide high-touch support to new prospects only and ignore existing customers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_grow_18",
    "section": "growth",
    "prompt": "What is Proactive Support Operations and how does it revolutionize customer experience?",
    "options": [
      {
        "id": "a",
        "label": "Automated monitoring detects backend errors or API failures impacting a customer before the customer notices, resolving the issue and sending a transparent notification of remediation."
      },
      {
        "id": "b",
        "label": "Calling customers at home on weekends to ask if they are enjoying the software."
      },
      {
        "id": "c",
        "label": "Auto-generating fictional bug reports to make the team look busy."
      },
      {
        "id": "d",
        "label": "Proactive support is impossible in software."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_grow_19",
    "section": "growth",
    "prompt": "How should a global enterprise design a \"Follow-the-Sun\" support model across multiple time zones?",
    "options": [
      {
        "id": "a",
        "label": "Force US-based agents to work 24 hours a day without sleep."
      },
      {
        "id": "b",
        "label": "Close support operations for 16 hours every day."
      },
      {
        "id": "c",
        "label": "Route all global tickets to an unmonitored voicemail box."
      },
      {
        "id": "d",
        "label": "Staff regional hubs (Americas, EMEA, APAC) with overlapping shift handovers, standardized documentation, unified ticketing queues, and localized native language coverage."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_grow_20",
    "section": "growth",
    "prompt": "Following a major service outage, how should Customer Success lead the customer recovery campaign?",
    "options": [
      {
        "id": "a",
        "label": "Hide from customers and refuse to answer phone calls for two weeks."
      },
      {
        "id": "b",
        "label": "Blame the outage on customer configuration mistakes."
      },
      {
        "id": "c",
        "label": "Proactively schedule executive review check-ins, deliver transparent root cause analysis documents, confirm all automated SLA credits, and showcase engineering investments preventing recurrence."
      },
      {
        "id": "d",
        "label": "Send an email pretending the outage never happened."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_grow_21",
    "section": "growth",
    "prompt": "What peer mentoring structure accelerates new customer support agent onboarding proficiency?",
    "options": [
      {
        "id": "a",
        "label": "Giving the new hire 500 tickets on day 1 with zero training or documentation."
      },
      {
        "id": "b",
        "label": "Assigning a dedicated senior mentor for 1-on-1 ticket shadowing, reverse-shadowing with real-time feedback, and weekly scenario-based roleplay labs."
      },
      {
        "id": "c",
        "label": "Having new hires read technical dictionaries in silence for 3 months."
      },
      {
        "id": "d",
        "label": "Prohibiting new agents from asking questions to senior staff."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_grow_22",
    "section": "growth",
    "prompt": "How can Customer Success identify high-probability account expansion opportunities without being pushy?",
    "options": [
      {
        "id": "a",
        "label": "Monitor account telemetry for signals (consistently hitting 90% seat/volume usage, asking about advanced enterprise integrations) and present natural, value-aligned expansion tiers."
      },
      {
        "id": "b",
        "label": "Spam customers with aggressive sales emails every morning."
      },
      {
        "id": "c",
        "label": "Lock customer accounts until they agree to pay double."
      },
      {
        "id": "d",
        "label": "CS should never be involved in account expansion."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_grow_23",
    "section": "growth",
    "prompt": "Why are blameless Churn Post-Mortems essential for SaaS business health?",
    "options": [
      {
        "id": "a",
        "label": "They provide an opportunity to assign personal blame to the account manager."
      },
      {
        "id": "b",
        "label": "They ensure churned customers are blacklisted from ever buying again."
      },
      {
        "id": "c",
        "label": "Churn post-mortems are a waste of time."
      },
      {
        "id": "d",
        "label": "They identify systemic root causes of lost revenue (onboarding friction, missing integrations, competitor pricing, poor product reliability) to implement preventative fixes."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_grow_24",
    "section": "growth",
    "prompt": "How does optimizing helpdesk UI ergonomics reduce agent cognitive load and error rates?",
    "options": [
      {
        "id": "a",
        "label": "Requiring agents to switch between 15 open browser tabs for every ticket."
      },
      {
        "id": "b",
        "label": "Displaying flashing red emergency banners across the entire screen."
      },
      {
        "id": "c",
        "label": "Consolidating customer history, knowledge base search, and macro insertion into a unified single-pane-of-glass interface with customizable keyboard shortcuts and clean visual hierarchy."
      },
      {
        "id": "d",
        "label": "Removing all keyboard navigation shortcuts."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_grow_25",
    "section": "growth",
    "prompt": "How should a company cultivate a thriving Peer-to-Peer Customer Community forum?",
    "options": [
      {
        "id": "a",
        "label": "Leave community forums completely unmoderated and infested with spam."
      },
      {
        "id": "b",
        "label": "Recognize and reward active community super-users (VIP badges, direct access to product managers, beta program access), while maintaining active moderation and fast expert answers."
      },
      {
        "id": "c",
        "label": "Delete customer discussions that mention competitor tools."
      },
      {
        "id": "d",
        "label": "Charge customers a monthly subscription fee to read forum posts."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_grow_26",
    "section": "growth",
    "prompt": "When launching a major new enterprise product module, how should support operations prepare specialized agent pods?",
    "options": [
      {
        "id": "a",
        "label": "Establish a specialized \"Tiger Team\" of senior technical specialists trained deeply on architecture, edge-cases, and known limitations to handle beta customer inquiries with fast turnaround."
      },
      {
        "id": "b",
        "label": "Launch the product to millions of users without informing the support team."
      },
      {
        "id": "c",
        "label": "Instruct support agents to tell customers that the new product does not exist."
      },
      {
        "id": "d",
        "label": "Route all new product tickets to an external outsourced call center with zero training."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sup_grow_27",
    "section": "growth",
    "prompt": "How should enterprise Customer Success teams balance AI automation with high-touch personal engagement for Fortune 500 VIP accounts?",
    "options": [
      {
        "id": "a",
        "label": "Force Fortune 500 CIOs to interact exclusively with a primitive unmonitored chatbot."
      },
      {
        "id": "b",
        "label": "Ban all technology tools and use only paper letters."
      },
      {
        "id": "c",
        "label": "Treat enterprise accounts identically to free tier accounts."
      },
      {
        "id": "d",
        "label": "Use AI behind the scenes for rapid diagnostic log analysis and drafting, while delivering high-touch human communication directly through dedicated Named Technical Account Managers."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sup_grow_28",
    "section": "growth",
    "prompt": "How should customer offboarding and cancellation workflows be designed to maintain long-term goodwill?",
    "options": [
      {
        "id": "a",
        "label": "Hide the cancel button and force users to mail a notarized handwritten letter to cancel."
      },
      {
        "id": "b",
        "label": "Charge unauthorized cancellation penalties."
      },
      {
        "id": "c",
        "label": "Make cancellation straightforward with zero deceptive friction, offer easy data export, capture structured qualitative exit feedback, and leave an open, welcoming door for future return."
      },
      {
        "id": "d",
        "label": "Delete all customer data within 1 second of cancellation without allowing export."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sup_grow_29",
    "section": "growth",
    "prompt": "How do master Customer Success leaders build emotional resilience and active empathy across their teams?",
    "options": [
      {
        "id": "a",
        "label": "Telling agents to argue with customers when they are angry."
      },
      {
        "id": "b",
        "label": "Framing difficult customer encounters as diagnostic opportunities to de-escalate anxiety, coaching reps on emotional detachment from hostility, and prioritizing team well-being."
      },
      {
        "id": "c",
        "label": "Encouraging agents to take customer insults personally."
      },
      {
        "id": "d",
        "label": "Eliminating all breaks and team retrospectives."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sup_grow_30",
    "section": "growth",
    "prompt": "What represents the pinnacle standard of the Jnachi Certified AI Customer Support & Success Leader?",
    "options": [
      {
        "id": "a",
        "label": "A transformational leader who harnesses advanced AI automation to eliminate friction, cultivates world-class human empathy, drives compounding customer retention, and champions the customer's voice across the enterprise."
      },
      {
        "id": "b",
        "label": "A manager who focuses solely on cutting support headcount to minimize costs."
      },
      {
        "id": "c",
        "label": "A leader who auto-closes all customer tickets without investigating problems."
      },
      {
        "id": "d",
        "label": "A support director who refuses to adopt any modern AI technology."
      }
    ],
    "correctOptionId": "a"
  }
];

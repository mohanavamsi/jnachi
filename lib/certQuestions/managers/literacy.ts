import { CertQuestion } from '../types';

export const MANAGERS_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "mgr_lit_01",
    "section": "literacy",
    "prompt": "How should a Product Manager prompt an AI assistant to generate a comprehensive Product Requirements Document (PRD)?",
    "options": [
      {
        "id": "a",
        "label": "Ask the AI to write a 1-sentence description saying \"Build an AI feature.\""
      },
      {
        "id": "b",
        "label": "Specify Problem Statement, Target User Personas, User Stories with clear Acceptance Criteria (Given/When/Then), Non-Functional Requirements (latency, security), Out-of-Scope boundaries, and Success Metrics."
      },
      {
        "id": "c",
        "label": "Instruct the AI to copy a competitor's PRD verbatim."
      },
      {
        "id": "d",
        "label": "Generate a PRD with zero acceptance criteria or scope boundaries."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_lit_02",
    "section": "literacy",
    "prompt": "When an Engineering Manager prompts an LLM to estimate sprint complexity for a new microservice migration, what context must be provided?",
    "options": [
      {
        "id": "a",
        "label": "Existing architecture diagrams, database schema dependencies, team velocity history, API integration contracts, and known technical debt constraints."
      },
      {
        "id": "b",
        "label": "Ask the AI how many days the project will take with zero codebase context."
      },
      {
        "id": "c",
        "label": "Assume all software migrations take exactly 2 days."
      },
      {
        "id": "d",
        "label": "Tell the AI to guess based on the company's stock price."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_lit_03",
    "section": "literacy",
    "prompt": "How should a manager prompt an AI to synthesize multiple disparate engineering sprint updates into an executive C-suite briefing?",
    "options": [
      {
        "id": "a",
        "label": "Copy-paste 500 lines of raw git commit logs into the executive email."
      },
      {
        "id": "b",
        "label": "Hide all project delays and report that everything is 100% finished."
      },
      {
        "id": "c",
        "label": "Write the executive update in complex compiler bytecode."
      },
      {
        "id": "d",
        "label": "Translate technical pull-request items into business outcomes: milestone progress against quarterly OKRs, key risks and mitigation plans, launch timelines, and budget burn."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_lit_04",
    "section": "literacy",
    "prompt": "What prompt structure helps a Product Manager conduct a thorough pre-mortem risk assessment for an upcoming major release?",
    "options": [
      {
        "id": "a",
        "label": "\"Explain why this product is guaranteed to make $100 million with zero risk.\""
      },
      {
        "id": "b",
        "label": "\"Generate a list of compliments praising the product manager.\""
      },
      {
        "id": "c",
        "label": "\"Assume we are 6 months post-launch and the feature failed catastrophically. Brainstorm the top 5 most likely systemic root causes across adoption, technical scalability, user confusion, and competitor reaction, with preventative safeguards.\""
      },
      {
        "id": "d",
        "label": "\"Pre-mortems are unnecessary if engineers write unit tests.\""
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_lit_05",
    "section": "literacy",
    "prompt": "How should an Engineering Lead prompt an AI to structure a technical RFC (Request for Comments) design document?",
    "options": [
      {
        "id": "a",
        "label": "A single paragraph stating that the engineer will write code however they prefer."
      },
      {
        "id": "b",
        "label": "Context & Scope, Proposed Architecture with component diagrams, Alternative Solutions considered with trade-off analysis, Data Model changes, Security/Privacy review, and Rollout/Rollback plan."
      },
      {
        "id": "c",
        "label": "A 50-page document discussing unrelated operating systems."
      },
      {
        "id": "d",
        "label": "Omit all security and rollback considerations."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_lit_06",
    "section": "literacy",
    "prompt": "When evaluating new AI developer tooling for a 100-person engineering team, what evaluation framework should a Director of Engineering prompt for?",
    "options": [
      {
        "id": "a",
        "label": "Total Cost of Ownership (license + compute), productivity lift metrics (PR cycle time, acceptance rate), enterprise data privacy / ZDR compliance, and IDE integration friction."
      },
      {
        "id": "b",
        "label": "Choose whichever tool has the flashiest marketing video on YouTube."
      },
      {
        "id": "c",
        "label": "Pick the cheapest consumer tool regardless of data privacy training risks."
      },
      {
        "id": "d",
        "label": "Ban all engineering tools across the organization."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_lit_07",
    "section": "literacy",
    "prompt": "How should a manager prompt an AI to design a structured onboarding milestone checklist for a new team lead?",
    "options": [
      {
        "id": "a",
        "label": "Demand that the new team lead fire half the team on day 1."
      },
      {
        "id": "b",
        "label": "Tell the new lead to sit in silence for 6 months without speaking."
      },
      {
        "id": "c",
        "label": "Assign the lead to write manual code 16 hours a day with zero management responsibilities."
      },
      {
        "id": "d",
        "label": "30 Days: Understand team dynamics, 1-on-1 discovery, audit tech debt and roadmap; 60 Days: Facilitate sprint rituals, identify operational bottlenecks; 90 Days: Drive quarterly planning and team growth."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_lit_08",
    "section": "literacy",
    "prompt": "How can an Engineering Manager prompt an AI to transform a heated architectural debate between senior engineers into an objective decision matrix?",
    "options": [
      {
        "id": "a",
        "label": "Instruct the AI to insult the engineer who has fewer years of tenure."
      },
      {
        "id": "b",
        "label": "Decide by picking whichever option was suggested by the loudest person."
      },
      {
        "id": "c",
        "label": "Extract the core technical arguments for Option A vs Option B, map against agreed organizational priorities (latency, maintainability, team familiarity, cloud cost), and weight trade-offs objectively."
      },
      {
        "id": "d",
        "label": "Cancel the project completely to stop the debate."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_lit_09",
    "section": "literacy",
    "prompt": "What prompt instruction ensures an AI crafts an actionable, empathetic developmental feedback script for a struggling direct report?",
    "options": [
      {
        "id": "a",
        "label": "Write a harsh disciplinary notice telling the employee they are lazy."
      },
      {
        "id": "b",
        "label": "Use Situation-Behavior-Impact (SBI), focus on specific observable work behaviors rather than personality traits, validate their perspective, and co-create 2 concrete actionable improvement milestones."
      },
      {
        "id": "c",
        "label": "Avoid giving any feedback and hope the employee figures it out on their own."
      },
      {
        "id": "d",
        "label": "Deliver feedback through an anonymous survey."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_lit_10",
    "section": "literacy",
    "prompt": "How should a Product Manager prompt an AI to decompose a large epic into properly sized, independent user stories (INVEST criteria)?",
    "options": [
      {
        "id": "a",
        "label": "Ensure stories are Independent, Negotiable, Valuable, Estimable, Small (completable in 1–3 days), and Testable, complete with clear edge-case acceptance criteria."
      },
      {
        "id": "b",
        "label": "Create 1 giant monolithic user story that takes 6 months to complete."
      },
      {
        "id": "c",
        "label": "Write user stories that have zero business value to the end user."
      },
      {
        "id": "d",
        "label": "Omit acceptance criteria so QA testers must guess how features work."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_lit_11",
    "section": "literacy",
    "prompt": "When planning quarterly engineering resource capacity, how should a manager prompt an AI to calculate realistic delivery buffers?",
    "options": [
      {
        "id": "a",
        "label": "Assume 100% of every developer's 40 hours per week will be spent writing new feature code with zero meetings or bugs."
      },
      {
        "id": "b",
        "label": "Schedule 80 hours of work per week for every engineer."
      },
      {
        "id": "c",
        "label": "Ignore capacity planning and promise all feature requests immediately."
      },
      {
        "id": "d",
        "label": "Factor historical team velocity, planned PTO/holidays, 20% allocation for unplanned production on-call interrupts and bug triage, and 15% for architectural refactoring."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_lit_12",
    "section": "literacy",
    "prompt": "How should an Engineering Director prompt an AI to design an Incident Response Escalation matrix?",
    "options": [
      {
        "id": "a",
        "label": "Page all 500 company employees on their personal mobile phones for every minor typo."
      },
      {
        "id": "b",
        "label": "Disable all incident alerts on weekends."
      },
      {
        "id": "c",
        "label": "Define explicit severity levels (P1 Critical Outage down to P4 Minor), establish page response SLAs per tier (<15 min for P1), define Incident Commander roles, and outline communication cadences."
      },
      {
        "id": "d",
        "label": "Assign the newest intern to handle all production outages alone."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_lit_13",
    "section": "literacy",
    "prompt": "What prompt constraint prevents an AI from generating overly optimistic or unrealistic software project delivery schedules?",
    "options": [
      {
        "id": "a",
        "label": "\"Assume all software projects complete in 24 hours with zero bugs.\""
      },
      {
        "id": "b",
        "label": "\"Apply the PERT estimation model (Optimistic + 4×Most Likely + Pessimistic) / 6, identify critical path integration dependencies, and account for staging deployment and QA regression cycles.\""
      },
      {
        "id": "c",
        "label": "\"Estimate dates based on what executive leadership wants to hear.\""
      },
      {
        "id": "d",
        "label": "\"Ignore testing and code review time in project schedules.\""
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_lit_14",
    "section": "literacy",
    "prompt": "How can a manager prompt an AI to prepare for an executive Project Post-Mortem review after a major release delay?",
    "options": [
      {
        "id": "a",
        "label": "Adopt a blameless systems perspective: map the timeline of discovery, analyze root causes of scope creep or architectural unknowns, and outline 3 permanent process improvements."
      },
      {
        "id": "b",
        "label": "Assign personal blame to individual engineers to protect management."
      },
      {
        "id": "c",
        "label": "Deny that the project was delayed."
      },
      {
        "id": "d",
        "label": "Refuse to discuss project post-mortems."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_lit_15",
    "section": "literacy",
    "prompt": "How should a Product Manager prompt an AI to analyze customer feature request feedback from sales and support tickets?",
    "options": [
      {
        "id": "a",
        "label": "Build whatever feature was requested by the customer who yelled the loudest."
      },
      {
        "id": "b",
        "label": "Delete all customer feature requests."
      },
      {
        "id": "c",
        "label": "Promise all 500 feature requests will be built next week."
      },
      {
        "id": "d",
        "label": "Cluster requests by underlying user problem rather than superficial solution requests, cross-reference by customer ARR tier, and calculate potential revenue retention impact."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_lit_16",
    "section": "literacy",
    "prompt": "When drafting team Working Agreements (Team Norms) with an AI assistant, what categories establish operational clarity?",
    "options": [
      {
        "id": "a",
        "label": "Requiring all developers to use the exact same brand of coffee mug."
      },
      {
        "id": "b",
        "label": "Banning developers from talking to each other during working hours."
      },
      {
        "id": "c",
        "label": "Core collaboration hours, PR review turnaround expectations (<24h), meeting-free focus blocks, on-call handover protocols, and definition of done (DoD)."
      },
      {
        "id": "d",
        "label": "Working agreements have no value in engineering teams."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_lit_17",
    "section": "literacy",
    "prompt": "How should an Engineering Manager prompt an AI to draft a promotion nomination packet for a Senior Engineer stepping up to Staff level?",
    "options": [
      {
        "id": "a",
        "label": "State that the engineer is a nice person without providing technical evidence."
      },
      {
        "id": "b",
        "label": "Document multi-quarter evidence of cross-team architectural leadership, de-risking complex systems, mentoring mid-level engineers, setting standards, and demonstrating business impact."
      },
      {
        "id": "c",
        "label": "Base the promotion packet on how many lines of code the engineer wrote."
      },
      {
        "id": "d",
        "label": "Submit an empty promotion packet."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_lit_18",
    "section": "literacy",
    "prompt": "What prompt instruction ensures an AI crafts an effective All-Hands Engineering Town Hall presentation outline?",
    "options": [
      {
        "id": "a",
        "label": "Celebrate major engineering achievements and shippings, share transparent business metrics and customer impact, highlight technical challenges overcome, and allocate 30% time for unscripted Q&A."
      },
      {
        "id": "b",
        "label": "Deliver an aggressive 2-hour monologue reprimanding the team for minor bugs."
      },
      {
        "id": "c",
        "label": "Read raw database schemas aloud for 60 minutes."
      },
      {
        "id": "d",
        "label": "Cancel all Q&A and prohibit employee questions."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_lit_19",
    "section": "literacy",
    "prompt": "How should a manager prompt an AI to design an objective, rubric-driven Peer Feedback Questionnaire for 360 performance reviews?",
    "options": [
      {
        "id": "a",
        "label": "Ask peers to rate how popular the employee is in the office."
      },
      {
        "id": "b",
        "label": "Create an anonymous forum for employees to insult their colleagues."
      },
      {
        "id": "c",
        "label": "Ask a single question: \"Is this person good at their job?\""
      },
      {
        "id": "d",
        "label": "Frame questions around observable leveling competencies (Technical Craft, Collaboration, Problem Solving, Dependability) with behaviorally anchored rating scales and constructive development prompts."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_lit_20",
    "section": "literacy",
    "prompt": "How should an Engineering Director prompt an AI to evaluate whether a legacy monolithic service should be rewritten or refactored?",
    "options": [
      {
        "id": "a",
        "label": "Always mandate a complete rewrite from scratch every 2 years."
      },
      {
        "id": "b",
        "label": "Never touch legacy code under any circumstances."
      },
      {
        "id": "c",
        "label": "Perform a structured cost-benefit analysis: current incident frequency, developer velocity drag, regression blast radius, refactoring cost vs rewrite risk, and recommend an incremental Strangler migration."
      },
      {
        "id": "d",
        "label": "Decide based on which programming language is trending on social media."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_lit_21",
    "section": "literacy",
    "prompt": "What prompt structure helps a Product Manager define meaningful Key Performance Indicators (KPIs) for a new enterprise workflow tool?",
    "options": [
      {
        "id": "a",
        "label": "Metric: Total number of button clicks on the landing page."
      },
      {
        "id": "b",
        "label": "Primary Outcome Metric (e.g. 50% reduction in workflow completion time), Secondary Adoption Metric (weekly active power users), and Counter-Guardrail Metric (error rate must remain <0.1%)."
      },
      {
        "id": "c",
        "label": "Setting goals that cannot be measured or tracked."
      },
      {
        "id": "d",
        "label": "Evaluating product success based solely on the CEO's personal opinion."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_lit_22",
    "section": "literacy",
    "prompt": "How can an Engineering Manager prompt an AI to construct an actionable Tech Debt Backlog prioritization framework?",
    "options": [
      {
        "id": "a",
        "label": "Score tech debt items by Risk (likelihood of outage), Drag (hours lost per sprint across team), and Effort (story points), creating an ROI ranking that justifies sprint allocation."
      },
      {
        "id": "b",
        "label": "Ignore all tech debt until the production database crashes completely."
      },
      {
        "id": "c",
        "label": "Spend 100% of engineering time fixing tech debt and ship zero features."
      },
      {
        "id": "d",
        "label": "Delete the tech debt backlog."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_lit_23",
    "section": "literacy",
    "prompt": "How should a manager prompt an AI to facilitate an effective Team Retrospective after a difficult sprint?",
    "options": [
      {
        "id": "a",
        "label": "Spend 2 hours assigning personal blame to the junior developer who wrote a bug."
      },
      {
        "id": "b",
        "label": "Cancel retrospectives whenever a sprint is challenging."
      },
      {
        "id": "c",
        "label": "Refuse to make any process improvements."
      },
      {
        "id": "d",
        "label": "Structure around: What went well, What slowed us down, What puzzle remains unsolved, and assign 2 high-impact actionable experiments with clear single owners for the next sprint."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_lit_24",
    "section": "literacy",
    "prompt": "When managing a cross-functional squad (Design, PM, FE, BE, QA), how should a Lead prompt an AI to create a RACI Matrix for a major product launch?",
    "options": [
      {
        "id": "a",
        "label": "Make all 50 team members Accountable for every single task."
      },
      {
        "id": "b",
        "label": "Leave project responsibilities completely unassigned."
      },
      {
        "id": "c",
        "label": "Map every major project milestone against roles to define exactly who is Responsible, Accountable, Consulted, and Informed, eliminating ambiguity and dropped balls."
      },
      {
        "id": "d",
        "label": "RACI matrices have no application in software delivery."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_lit_25",
    "section": "literacy",
    "prompt": "How should an engineering leader prompt an AI to craft a strategic 3-Year Technical Vision narrative for board alignment?",
    "options": [
      {
        "id": "a",
        "label": "Write a science fiction story about time travel."
      },
      {
        "id": "b",
        "label": "Articulate current technical baseline, define target state architecture (scalability, AI capabilities, security compliance), outline multi-phase investment roadmaps, and link to revenue growth targets."
      },
      {
        "id": "c",
        "label": "Promise that technical architecture will never change."
      },
      {
        "id": "d",
        "label": "Submit a 1-page document with zero technical substance."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_lit_26",
    "section": "literacy",
    "prompt": "What prompt instruction ensures an AI crafts an effective Career Mentorship coaching plan for a high-potential mid-level engineer?",
    "options": [
      {
        "id": "a",
        "label": "Identify technical skill gaps, assign high-visibility cross-squad architecture challenges, establish bi-weekly progress check-ins, and coach on executive communication and influence."
      },
      {
        "id": "b",
        "label": "Tell the engineer to memorize 1,000 algorithmic coding trivia questions."
      },
      {
        "id": "c",
        "label": "Keep the engineer working on basic bug fixes forever."
      },
      {
        "id": "d",
        "label": "Refuse to provide career mentorship."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_lit_27",
    "section": "literacy",
    "prompt": "How should a manager prompt an AI to create an On-Call Handoff report template for high-volume engineering squads?",
    "options": [
      {
        "id": "a",
        "label": "Delete all on-call alert logs."
      },
      {
        "id": "b",
        "label": "Leave the incoming on-call engineer with zero context."
      },
      {
        "id": "c",
        "label": "Complain about having to be on call."
      },
      {
        "id": "d",
        "label": "Summarize total pages fired, actionable vs noisy alerts, active P1/P2 incidents, unresolved operational workarounds, and proposed alert threshold tunings."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_lit_28",
    "section": "literacy",
    "prompt": "When communicating a difficult executive reorganization decision to an engineering team, what tone and structure should the manager prompt for?",
    "options": [
      {
        "id": "a",
        "label": "Cold, distant, dismissive, telling employees to \"deal with it or leave\"."
      },
      {
        "id": "b",
        "label": "Pretend the reorganization has no impact on team members."
      },
      {
        "id": "c",
        "label": "Honest, grounded, empathetic, explaining the strategic business \"why\", clarifying reporting and project impacts with transparency, and creating immediate space for open 1-on-1 concerns."
      },
      {
        "id": "d",
        "label": "Announce reorg decisions via an anonymous survey."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_lit_29",
    "section": "literacy",
    "prompt": "How should a manager prompt an AI to design an objective Vendor Evaluation Scorecard for evaluating cloud AI API providers?",
    "options": [
      {
        "id": "a",
        "label": "Pick whichever vendor sent the most free t-shirts."
      },
      {
        "id": "b",
        "label": "Score vendors across Model Quality/Accuracy benchmarks, Latency p95/p99 SLA commitments, Token/API Pricing economics, Enterprise Data Privacy/ZDR guarantees, and SDK ergonomics."
      },
      {
        "id": "c",
        "label": "Select the vendor with the highest advertising budget."
      },
      {
        "id": "d",
        "label": "Ignore data privacy and choose based on hype."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_lit_30",
    "section": "literacy",
    "prompt": "What represents the benchmark standard of an AI-Empowered Product & Engineering Manager?",
    "options": [
      {
        "id": "a",
        "label": "A strategic, high-empathy leader who harnesses AI acceleration to eliminate coordination drag, elevates team technical craftsmanship, fosters psychological safety, and drives relentless business outcomes."
      },
      {
        "id": "b",
        "label": "A manager who uses AI bots to micromanage developers and monitor keystrokes."
      },
      {
        "id": "c",
        "label": "A leader who accepts all AI suggestions with zero technical validation."
      },
      {
        "id": "d",
        "label": "A manager who refuses to adopt modern software tools."
      }
    ],
    "correctOptionId": "a"
  }
];

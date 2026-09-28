import { CertQuestion } from '../types';

export const MANAGERS_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "mgr_grow_01",
    "section": "growth",
    "prompt": "As generative AI coding assistants become standard, how should an Engineering Manager prevent junior developer skill atrophy?",
    "options": [
      {
        "id": "a",
        "label": "Ban all junior engineers from using any AI tools while allowing senior staff to use them."
      },
      {
        "id": "b",
        "label": "Require junior engineers to explain line-by-line how generated code functions, mandate foundational debugging and system design reviews, and celebrate deep conceptual understanding."
      },
      {
        "id": "c",
        "label": "Allow junior engineers to accept all AI suggestions blindly without reading the code."
      },
      {
        "id": "d",
        "label": "Fire all junior engineers and hire only senior developers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_grow_02",
    "section": "growth",
    "prompt": "How does an Engineering Director build high-agency, autonomous engineering squads?",
    "options": [
      {
        "id": "a",
        "label": "Provide clear mission context, define measurable business outcomes (the \"What\" and \"Why\"), empower the squad with full technical ownership of the \"How\", and remove cross-team blockers."
      },
      {
        "id": "b",
        "label": "Micromanage every technical decision and assign daily task lists to each developer."
      },
      {
        "id": "c",
        "label": "Provide zero business context and leave squads with no direction."
      },
      {
        "id": "d",
        "label": "Require the CEO to approve every single git commit."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_grow_03",
    "section": "growth",
    "prompt": "How should an Engineering Lead navigate the tension between urgent quarterly business feature demands and long-term technical debt?",
    "options": [
      {
        "id": "a",
        "label": "Ignore all business deadlines and spend 2 years rewriting the entire stack from scratch."
      },
      {
        "id": "b",
        "label": "Ignore all technical debt until the production database crashes completely."
      },
      {
        "id": "c",
        "label": "Tell the business stakeholders that software engineering is too complicated for them to understand."
      },
      {
        "id": "d",
        "label": "Frame technical debt in business terms (incident risk, developer velocity drag, hosting costs), secure a continuous sprint allocation (e.g. 20%), and prioritize high-leverage refactoring."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_grow_04",
    "section": "growth",
    "prompt": "What leadership strategy successfully mentors Senior Engineers stepping up into Staff / Principal technical leadership?",
    "options": [
      {
        "id": "a",
        "label": "Require them to write 10,000 lines of code every week."
      },
      {
        "id": "b",
        "label": "Assign them to attend administrative meetings 40 hours a week."
      },
      {
        "id": "c",
        "label": "Shift their focus from individual code output to organizational leverage: setting multi-quarter architectural roadmaps, de-risking ambiguous technical bets, mentoring others, and writing clear RFCs."
      },
      {
        "id": "d",
        "label": "Tell them they must manage administrative payroll to be a technical leader."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_grow_05",
    "section": "growth",
    "prompt": "How does a manager cultivate psychological safety and blameless retrospective cultures across software squads?",
    "options": [
      {
        "id": "a",
        "label": "Publicly reprimand the engineer who introduced a bug in company-wide channels."
      },
      {
        "id": "b",
        "label": "Model intellectual humility, treat production incidents as systemic learning opportunities, praise team members who surface difficult technical truths early, and eliminate scapegoating."
      },
      {
        "id": "c",
        "label": "Cancel all retrospectives whenever a sprint is behind schedule."
      },
      {
        "id": "d",
        "label": "Rank developers on public leaderboards based on bug counts."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_grow_06",
    "section": "growth",
    "prompt": "How should a VP of Engineering communicate complex technical architecture trade-offs to the Board of Directors and CFO?",
    "options": [
      {
        "id": "a",
        "label": "Translate technical investments into business outcomes: risk reduction, scalability runways supporting revenue growth, cloud compute margin expansion, and accelerated time-to-market."
      },
      {
        "id": "b",
        "label": "Present raw C++ compiler optimization algorithms to confuse board members."
      },
      {
        "id": "c",
        "label": "Claim that engineering investments have no connection to business revenue."
      },
      {
        "id": "d",
        "label": "Refuse to attend board meetings."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_grow_07",
    "section": "growth",
    "prompt": "How should engineering leadership apply \"Team Topologies\" principles to reduce developer cognitive load?",
    "options": [
      {
        "id": "a",
        "label": "Force all 100 engineers to work on every single microservice simultaneously."
      },
      {
        "id": "b",
        "label": "Create 50 isolated silos that are forbidden from communicating."
      },
      {
        "id": "c",
        "label": "Team topologies have no relevance in modern software engineering."
      },
      {
        "id": "d",
        "label": "Structure teams into Stream-Aligned squads (owning end-to-end customer value), supported by Platform teams (internal developer platforms), Enabling teams, and Complicated-Subsystem teams."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_grow_08",
    "section": "growth",
    "prompt": "When evaluating the \"Build vs. Buy vs. Open-Source\" decision for core infrastructure (e.g. Auth, Vector DB, Search), what is the key deciding rule?",
    "options": [
      {
        "id": "a",
        "label": "Always build custom database engines and authentication systems from scratch in-house."
      },
      {
        "id": "b",
        "label": "Outsource core proprietary algorithms to third-party competitors."
      },
      {
        "id": "c",
        "label": "Buy/use managed solutions for undifferentiated heavy lifting to focus engineering talent on proprietary core business differentiators, factoring total long-term operational maintenance TCO."
      },
      {
        "id": "d",
        "label": "Never use any third-party or open-source software."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_grow_09",
    "section": "growth",
    "prompt": "How can an Engineering Manager maintain a sustainable on-call rotation that prevents developer burnout?",
    "options": [
      {
        "id": "a",
        "label": "Assign the newest junior hire to be on call 24/7/365 with zero support."
      },
      {
        "id": "b",
        "label": "Enforce actionable alert hygiene (only page on user-impacting SLO breaches), provide dedicated compensatory time off, and allocate sprint engineering hours to fix recurring noisy alerts."
      },
      {
        "id": "c",
        "label": "Page on-call engineers for non-critical informational server logs at 3:00 AM."
      },
      {
        "id": "d",
        "label": "Disable all monitoring alerts so no one gets paged during outages."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_grow_10",
    "section": "growth",
    "prompt": "How should an engineering leader practice \"Radical Candor\" when managing team performance?",
    "options": [
      {
        "id": "a",
        "label": "Care personally while challenging directly: deliver immediate, specific, constructive feedback with empathy and actionable guidance, avoiding ruinous empathy and manipulative insincerity."
      },
      {
        "id": "b",
        "label": "Yell at employees in front of the team to show authority."
      },
      {
        "id": "c",
        "label": "Withhold all critical feedback until the annual review 12 months later."
      },
      {
        "id": "d",
        "label": "Never give positive feedback."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_grow_11",
    "section": "growth",
    "prompt": "When modernizing a 10-year-old monolithic production service, why is the Strangler Fig pattern superior to a full rewrite?",
    "options": [
      {
        "id": "a",
        "label": "Full rewrites are always 100% on time and on budget."
      },
      {
        "id": "b",
        "label": "Strangler patterns require deleting the codebase in one weekend."
      },
      {
        "id": "c",
        "label": "Legacy software should never be modernized under any circumstances."
      },
      {
        "id": "d",
        "label": "Full rewrites carry catastrophic delivery risk and moving business targets; incremental strangler migrations deliver continuous business value and validate new architecture in production safely."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_grow_12",
    "section": "growth",
    "prompt": "How should engineering leadership structure an objective, equitable Promotion Calibration Committee?",
    "options": [
      {
        "id": "a",
        "label": "Promote candidates based on which manager has the loudest voice in the meeting."
      },
      {
        "id": "b",
        "label": "Promote employees through a random lottery."
      },
      {
        "id": "c",
        "label": "Review promotion candidates across squads against published leveling rubrics, requiring documented evidence of sustained performance at the next level, cross-checking for equity parity."
      },
      {
        "id": "d",
        "label": "Keep all promotion decisions completely secret."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_grow_13",
    "section": "growth",
    "prompt": "How should an Engineering Director establish true cross-functional alignment between Engineering, Product, and Design?",
    "options": [
      {
        "id": "a",
        "label": "Require Product Managers to write all technical architecture specifications."
      },
      {
        "id": "b",
        "label": "Form \"Triad\" leadership pods (Engineering Lead + PM + Product Designer) co-owning problem discovery, technical feasibility spikes, and business outcome metrics from day one."
      },
      {
        "id": "c",
        "label": "Prohibit designers from speaking to software developers."
      },
      {
        "id": "d",
        "label": "Eliminate all product managers and designers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_grow_14",
    "section": "growth",
    "prompt": "How should an engineering squad de-risk high-ambiguity technical challenges using \"Spikes\"?",
    "options": [
      {
        "id": "a",
        "label": "Timebox a focused 2–3 day throwaway experimental prototype designed strictly to answer feasibility and latency questions before committing to full production sprint estimation."
      },
      {
        "id": "b",
        "label": "Deploy unvetted experimental prototypes straight to production enterprise customers."
      },
      {
        "id": "c",
        "label": "Spend 6 months building prototypes without defining what question is being answered."
      },
      {
        "id": "d",
        "label": "Ban all technical experimentation across the team."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_grow_15",
    "section": "growth",
    "prompt": "What makes an internal \"InnerSource\" culture successful across large enterprise software teams?",
    "options": [
      {
        "id": "a",
        "label": "Locking down repositories so only 2 developers can see the code."
      },
      {
        "id": "b",
        "label": "Publishing confidential trade secrets to public internet forums."
      },
      {
        "id": "c",
        "label": "Banning squads from reusing existing shared libraries."
      },
      {
        "id": "d",
        "label": "Applying open-source practices internally: clear maintainer SLAs, standardized contribution guidelines, public repo discovery, and celebrating cross-team pull requests."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_grow_16",
    "section": "growth",
    "prompt": "How can an Engineering Manager maintain team morale and focus during a prolonged software delivery slump?",
    "options": [
      {
        "id": "a",
        "label": "Order the team to work 18 hours a day including weekends."
      },
      {
        "id": "b",
        "label": "Tell the team that the company will fail if they make one more mistake."
      },
      {
        "id": "c",
        "label": "Break massive projects into small, quickly achievable milestones, celebrate incremental wins, shield the team from chaotic executive thrash, and focus on controllable inputs."
      },
      {
        "id": "d",
        "label": "Cancel all one-on-one coaching and team retrospectives."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_grow_17",
    "section": "growth",
    "prompt": "How should engineering leadership cultivate a proactive cloud FinOps culture across development squads?",
    "options": [
      {
        "id": "a",
        "label": "Over-provision 100x more compute than needed to avoid having to measure usage."
      },
      {
        "id": "b",
        "label": "Provide squads with real-time cloud cost dashboards per service, celebrate architecture optimizations that reduce compute spend, and integrate FinOps reviews into design RFCs."
      },
      {
        "id": "c",
        "label": "Hide cloud infrastructure bills from developers."
      },
      {
        "id": "d",
        "label": "FinOps is solely the responsibility of the accounting department."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_grow_18",
    "section": "growth",
    "prompt": "What distinguishes exceptional 1-on-1 coaching dialogs from superficial project status meetings?",
    "options": [
      {
        "id": "a",
        "label": "Focusing on employee career growth, long-term aspirations, identifying organizational blockers, coaching on soft skills, and psychological well-being, keeping status updates in async tools."
      },
      {
        "id": "b",
        "label": "Interrogating the developer about why a specific ticket took 2 hours longer than estimated."
      },
      {
        "id": "c",
        "label": "Canceling 1-on-1s whenever there is a busy week."
      },
      {
        "id": "d",
        "label": "Spending the entire 30 minutes reading Jira tickets aloud."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_grow_19",
    "section": "growth",
    "prompt": "How should an executive leadership team navigate the \"Innovator's Dilemma\" when disruptive AI threatens legacy revenue streams?",
    "options": [
      {
        "id": "a",
        "label": "Ban all internal AI initiatives to protect legacy software revenues as long as possible."
      },
      {
        "id": "b",
        "label": "Deny that AI will ever impact software engineering."
      },
      {
        "id": "c",
        "label": "Shut down the company's digital platforms."
      },
      {
        "id": "d",
        "label": "Form autonomous internal incubator squads with high autonomy and mandate to pioneer disruptive AI solutions, even if they cannibalize existing legacy products, before competitors do."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_grow_20",
    "section": "growth",
    "prompt": "How does a formal decision-making framework (e.g. DACI / RAPID) eliminate organizational consensus paralysis?",
    "options": [
      {
        "id": "a",
        "label": "Requires 100% unanimous agreement from all 500 company employees before any decision is made."
      },
      {
        "id": "b",
        "label": "Makes decisions randomly by rolling dice in executive meetings."
      },
      {
        "id": "c",
        "label": "Clearly designates one single \"Driver\" and \"Approver\", identifies \"Contributors\", and defines who must be \"Informed\", preventing endless debate loops while preserving consultation."
      },
      {
        "id": "d",
        "label": "DACI frameworks have no value in software organizations."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_grow_21",
    "section": "growth",
    "prompt": "Why is a Dual-Track Career Ladder (Individual Contributor vs Manager) essential for retaining elite software talent?",
    "options": [
      {
        "id": "a",
        "label": "It forces all top engineers to become administrative managers."
      },
      {
        "id": "b",
        "label": "It allows master engineers to achieve equivalent compensation, prestige, and executive influence as Directors/VPs without forcing them into unwanted administrative management roles."
      },
      {
        "id": "c",
        "label": "It restricts engineers to low salaries forever."
      },
      {
        "id": "d",
        "label": "It eliminates all individual contributor roles."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_grow_22",
    "section": "growth",
    "prompt": "How should an Engineering Manager mediate an intense architectural disagreement between two Staff Engineers?",
    "options": [
      {
        "id": "a",
        "label": "Guide both engineers to re-anchor the debate on agreed customer and system outcomes, establish a timeboxed comparative benchmark spike, and commit to the data-driven result."
      },
      {
        "id": "b",
        "label": "Pick whichever engineer was hired first and dismiss the other."
      },
      {
        "id": "c",
        "label": "Let the engineers argue publicly in general Slack channels for weeks."
      },
      {
        "id": "d",
        "label": "Fire both engineers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_grow_23",
    "section": "growth",
    "prompt": "How does an exceptional developer onboarding program accelerate Time-to-First-Commit for new software engineers?",
    "options": [
      {
        "id": "a",
        "label": "Giving new hires a broken laptop and telling them to fix it alone."
      },
      {
        "id": "b",
        "label": "Prohibiting new hires from writing code for the first 6 months."
      },
      {
        "id": "c",
        "label": "Requiring new hires to memorize 1,000 pages of legacy documentation before seeing the codebase."
      },
      {
        "id": "d",
        "label": "Pre-configured cloud dev environments, dedicated 1-on-1 onboarding buddy, structured starter \"good first issue\" tasks, and clear architectural documentation enabling a Day 1 commit."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_grow_24",
    "section": "growth",
    "prompt": "How should engineering leadership measure developer productivity holistically using the SPACE framework?",
    "options": [
      {
        "id": "a",
        "label": "Measure developer productivity solely by counting total lines of code written per day."
      },
      {
        "id": "b",
        "label": "Measure productivity by tracking keystroke counts and webcam eye-tracking."
      },
      {
        "id": "c",
        "label": "Evaluate across 5 balanced dimensions: Satisfaction & well-being, Performance (outcomes), Activity (volume), Communication & collaboration, and Efficiency & flow."
      },
      {
        "id": "d",
        "label": "The SPACE framework only applies to aerospace rocket engineering."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_grow_25",
    "section": "growth",
    "prompt": "During complex team realignments or squad reorganizations, how should an Engineering Director lead the transition?",
    "options": [
      {
        "id": "a",
        "label": "Reorganize squads every 2 weeks randomly to keep developers on their toes."
      },
      {
        "id": "b",
        "label": "Provide transparent strategic context, clearly articulate new squad mission charters and ownership boundaries, actively address team anxieties in 1-on-1s, and iterate based on feedback."
      },
      {
        "id": "c",
        "label": "Refuse to tell engineers which team they are on."
      },
      {
        "id": "d",
        "label": "Announce reorg decisions via an anonymous leaked document."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_grow_26",
    "section": "growth",
    "prompt": "How can engineering managers eliminate unconscious bias from technical hiring loops?",
    "options": [
      {
        "id": "a",
        "label": "Utilize blind resume screening, standardized behaviorally anchored interview rubrics, structured practical work-sample coding assessments, and diverse interview calibration panels."
      },
      {
        "id": "b",
        "label": "Hire candidates based on whether they share the manager's personal hobbies."
      },
      {
        "id": "c",
        "label": "Require candidates to solve whiteboard brain-teaser riddles with zero real-world relevance."
      },
      {
        "id": "d",
        "label": "Hire candidates based solely on their university pedigree."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_grow_27",
    "section": "growth",
    "prompt": "How should a Chief Technology Officer champion ethical AI engineering practices across the department?",
    "options": [
      {
        "id": "a",
        "label": "Accelerate AI automation at all costs, ignoring data privacy and user safety."
      },
      {
        "id": "b",
        "label": "Treat ethics as a public relations marketing slogan with zero engineering enforcement."
      },
      {
        "id": "c",
        "label": "Prohibit developers from discussing AI safety."
      },
      {
        "id": "d",
        "label": "Establish formal AI ethics principles, mandate algorithmic fairness audits, enforce human oversight on automated actions, and empower engineers to raise ethical red flags without retaliation."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_grow_28",
    "section": "growth",
    "prompt": "What is the organizational purpose of conducting Disaster Recovery \"GameDays\" in engineering squads?",
    "options": [
      {
        "id": "a",
        "label": "To play video games during working hours."
      },
      {
        "id": "b",
        "label": "To corrupt production customer databases permanently."
      },
      {
        "id": "c",
        "label": "Simulate realistic multi-region cloud outages and database corruptions in controlled staging environments to build operational muscle memory and validate automated failover."
      },
      {
        "id": "d",
        "label": "Disaster recovery GameDays have no engineering value."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_grow_29",
    "section": "growth",
    "prompt": "How should an Engineering Manager coach software engineers to develop deep business acumen and customer empathy?",
    "options": [
      {
        "id": "a",
        "label": "Keep engineers isolated in dark rooms and forbid them from knowing how the business makes money."
      },
      {
        "id": "b",
        "label": "Encourage engineers to listen to live customer sales/support calls, participate in customer advisory sessions, and understand core SaaS unit economics (CAC, LTV, ARR)."
      },
      {
        "id": "c",
        "label": "Tell engineers that business metrics are irrelevant to their careers."
      },
      {
        "id": "d",
        "label": "Prohibit engineers from speaking to customers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_grow_30",
    "section": "growth",
    "prompt": "What represents the pinnacle standard of the Jnachi Certified AI Product & Engineering Leader?",
    "options": [
      {
        "id": "a",
        "label": "A transformational leader who combines visionary systems architecture, profound human empathy, relentless operational discipline, and exponential AI velocity to build enduring category-defining software."
      },
      {
        "id": "b",
        "label": "A manager who uses AI to micromanage developers and monitor keystrokes."
      },
      {
        "id": "c",
        "label": "A leader who accepts all AI suggestions blindly with zero technical validation."
      },
      {
        "id": "d",
        "label": "A manager who resists all modern software tooling."
      }
    ],
    "correctOptionId": "a"
  }
];

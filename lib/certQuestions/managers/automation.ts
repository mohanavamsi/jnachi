import { CertQuestion } from '../types';

export const MANAGERS_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "mgr_auto_01",
    "section": "automation",
    "prompt": "How should an Engineering Manager automate sprint health and velocity forecasting without micromanaging individual developers?",
    "options": [
      {
        "id": "a",
        "label": "Demand that developers log every single minute of their day in detailed timesheets."
      },
      {
        "id": "b",
        "label": "Analyze aggregate team sprint burndown velocity, PR cycle time trends, and WIP (work-in-progress) limits to forecast delivery dates probabilistically with Monte Carlo simulations."
      },
      {
        "id": "c",
        "label": "Track keystroke counts and mouse movements on developer laptops."
      },
      {
        "id": "d",
        "label": "Assume all sprints will finish 100% on time without measuring progress."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_auto_02",
    "section": "automation",
    "prompt": "How can Product Managers automate the generation of customer-facing release notes from engineering PRs?",
    "options": [
      {
        "id": "a",
        "label": "Ingest merged GitHub PR descriptions, user story titles, and changelogs; prompt an LLM to categorize changes into \"New Features\", \"Enhancements\", and \"Fixes\" in customer-friendly prose."
      },
      {
        "id": "b",
        "label": "Publish raw developer merge commit hashes directly to customers."
      },
      {
        "id": "c",
        "label": "Never publish release notes and keep software changes secret."
      },
      {
        "id": "d",
        "label": "Copy-paste release notes from competing software products."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_auto_03",
    "section": "automation",
    "prompt": "How should an Engineering Director automate dependency vulnerability tracking and CVE triage across 50 microservices?",
    "options": [
      {
        "id": "a",
        "label": "Ignore all security vulnerability alerts until a breach occurs."
      },
      {
        "id": "b",
        "label": "Disable automated security scanners across all repositories."
      },
      {
        "id": "c",
        "label": "Require engineers to read National Vulnerability Database PDFs on paper."
      },
      {
        "id": "d",
        "label": "Aggregate automated SAST/SCA security feeds (e.g. Snyk, Dependabot) into a central dashboard, auto-generating Jira remediation tasks prioritized by CVSS exploitability and internet exposure."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_auto_04",
    "section": "automation",
    "prompt": "How does automated roadmap synchronization keep cross-functional stakeholders aligned during fast-paced development?",
    "options": [
      {
        "id": "a",
        "label": "Manually drawing Gantt charts in Microsoft Excel once a year."
      },
      {
        "id": "b",
        "label": "Keeping roadmap timelines secret from marketing and sales teams."
      },
      {
        "id": "c",
        "label": "Two-way integration between Jira/GitHub epics and executive roadmap software (Productboard/Aha!), auto-updating milestone completion percentages and flag slippages in real time."
      },
      {
        "id": "d",
        "label": "Roadmap synchronization has no value in agile software teams."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_auto_05",
    "section": "automation",
    "prompt": "How should engineering leadership automate cloud infrastructure spend (FinOps) anomaly detection?",
    "options": [
      {
        "id": "a",
        "label": "Wait for the monthly $500,000 credit card bill before investigating cloud costs."
      },
      {
        "id": "b",
        "label": "Configure automated daily cloud cost monitors (e.g., AWS Cost Anomaly Detection) that alert managers in Slack when service spend deviates by >20% from baseline, pinpointing the unoptimized resource."
      },
      {
        "id": "c",
        "label": "Turn off all production servers randomly to save electricity."
      },
      {
        "id": "d",
        "label": "Cloud costs cannot be monitored or controlled."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_auto_06",
    "section": "automation",
    "prompt": "How do engineering managers use automated Pull Request cycle time metrics (Time to First Review, Time to Merge) to unblock squads?",
    "options": [
      {
        "id": "a",
        "label": "Identify systemic review bottlenecks (e.g. PRs stalling >48 hours awaiting review), encourage smaller atomic PR sizes (<300 lines), and distribute review load evenly."
      },
      {
        "id": "b",
        "label": "Publicly reprimand the engineer who has the longest open PR."
      },
      {
        "id": "c",
        "label": "Eliminate code reviews and allow developers to merge directly to main."
      },
      {
        "id": "d",
        "label": "Track cycle time to determine individual employee salaries."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_auto_07",
    "section": "automation",
    "prompt": "How should on-call scheduling and calendar override automation (PagerDuty / Opsgenie) be managed for distributed squads?",
    "options": [
      {
        "id": "a",
        "label": "Assign 1 engineer to be permanently on call 24/7/365 with zero backups."
      },
      {
        "id": "b",
        "label": "Manage on-call schedules on paper posted on an office door."
      },
      {
        "id": "c",
        "label": "Disable all paging systems during nights and weekends."
      },
      {
        "id": "d",
        "label": "Automate weekly rotational shifts, provide self-serve peer swap overrides with instant calendar sync, and enforce escalation policies to backup on-call leads if unacknowledged in 5 minutes."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_auto_08",
    "section": "automation",
    "prompt": "What four automated DORA metrics provide the industry-standard benchmark of high-performing engineering organizations?",
    "options": [
      {
        "id": "a",
        "label": "Lines of Code, Hours Worked, Commits per Day, and Number of Open Bugs."
      },
      {
        "id": "b",
        "label": "Number of Slack messages, Coffee consumption, Typing speed, and Attendance."
      },
      {
        "id": "c",
        "label": "Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service (MTTR)."
      },
      {
        "id": "d",
        "label": "Salary cost, Monitor size, Office square footage, and Meeting count."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_auto_09",
    "section": "automation",
    "prompt": "How can engineering managers automate post-meeting action item tracking from weekly leadership syncs?",
    "options": [
      {
        "id": "a",
        "label": "Expect meeting participants to remember all verbal assignments with zero notes."
      },
      {
        "id": "b",
        "label": "AI meeting notetakers synthesize key decisions, extract assigned action items with explicit human owners and due dates, and auto-sync tasks directly into Jira/Asana."
      },
      {
        "id": "c",
        "label": "Record 5-hour video files and force managers to re-watch them every morning."
      },
      {
        "id": "d",
        "label": "Delete meeting records immediately upon call termination."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_auto_10",
    "section": "automation",
    "prompt": "How should automated Feature Flag governance (e.g., LaunchDarkly) be structured during enterprise rollouts?",
    "options": [
      {
        "id": "a",
        "label": "Staged percentage rollouts (1% internal -> 10% beta -> 50% -> 100%), automated kill-switch rollbacks tied to error rate telemetry, and automated cleanup alerts once fully rolled out."
      },
      {
        "id": "b",
        "label": "Deploy new unvetted code to 100% of global enterprise customers with no feature flag."
      },
      {
        "id": "c",
        "label": "Keep all feature flags permanently active in the codebase for 20 years."
      },
      {
        "id": "d",
        "label": "Feature flags should be configured manually by end users."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_auto_11",
    "section": "automation",
    "prompt": "How can Product Managers automate the continuous synthesis of customer feedback from disparate sources?",
    "options": [
      {
        "id": "a",
        "label": "Delete customer feedback to avoid cluttering databases."
      },
      {
        "id": "b",
        "label": "Read every single customer review manually on paper once every 5 years."
      },
      {
        "id": "c",
        "label": "Assume customer needs never change over time."
      },
      {
        "id": "d",
        "label": "Aggregate feedback from sales Gong calls, Zendesk support tickets, App Store reviews, and user interviews, using AI clustering to map recurring themes directly to product backlog epics."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_auto_12",
    "section": "automation",
    "prompt": "How should IT and engineering managers automate developer SaaS license management (GitHub, Copilot, Datadog)?",
    "options": [
      {
        "id": "a",
        "label": "Pay for 10,000 unused SaaS licenses forever without checking active usage."
      },
      {
        "id": "b",
        "label": "Refuse to buy developer tools for engineers."
      },
      {
        "id": "c",
        "label": "Automated identity-aware provisioning on hire, combined with automated de-provisioning and license harvesting for accounts with zero active logins for >45 days."
      },
      {
        "id": "d",
        "label": "Share one login password among 500 developers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_auto_13",
    "section": "automation",
    "prompt": "How does automated Sprint Burndown anomaly detection help Scrum Masters intervene before sprint failure?",
    "options": [
      {
        "id": "a",
        "label": "Forces developers to work 48 hours without sleep over the weekend."
      },
      {
        "id": "b",
        "label": "Alerts the team lead mid-sprint if scope creep increases total story points by >20% or if completed points flatline, prompting immediate scope negotiation before sprint end."
      },
      {
        "id": "c",
        "label": "Deletes unfinished user stories so the burndown chart looks perfect."
      },
      {
        "id": "d",
        "label": "Cancels all future sprints."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_auto_14",
    "section": "automation",
    "prompt": "How should engineering teams automate bug severity triage and SLA expiration countdowns?",
    "options": [
      {
        "id": "a",
        "label": "Auto-classify incoming bugs by severity (P1 blocker down to P4 minor), assign SLA resolution countdowns (e.g. 24h for P1), and automatically escalate approaching breaches."
      },
      {
        "id": "b",
        "label": "Mark all bugs as P4 low priority to avoid having to fix them."
      },
      {
        "id": "c",
        "label": "Assign all bugs to the company CEO."
      },
      {
        "id": "d",
        "label": "Delete bug tickets after 24 hours."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_auto_15",
    "section": "automation",
    "prompt": "How do internal Developer Portals (e.g., Spotify Backstage) automate microservice catalog ownership?",
    "options": [
      {
        "id": "a",
        "label": "Leave microservice ownership completely unassigned so no one is responsible during outages."
      },
      {
        "id": "b",
        "label": "Manage microservice architecture in a single unmaintained spreadsheet."
      },
      {
        "id": "c",
        "label": "Developer portals have no use in engineering organizations."
      },
      {
        "id": "d",
        "label": "Maintain a unified, automated software catalog mapping every microservice to its owning squad, active on-call runbook, API documentation, and security compliance score."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_auto_16",
    "section": "automation",
    "prompt": "How can engineering leadership automate quarterly OKR tracking against active software deliverables?",
    "options": [
      {
        "id": "a",
        "label": "Guess OKR progress at the end of the quarter without looking at shipped code."
      },
      {
        "id": "b",
        "label": "Report 100% completion on all OKRs on day 1 of the quarter."
      },
      {
        "id": "c",
        "label": "Link strategic Key Results directly to Jira epics and release tags, auto-calculating real-time percentage completion based on shipped production features."
      },
      {
        "id": "d",
        "label": "Eliminate OKRs entirely."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_auto_17",
    "section": "automation",
    "prompt": "How should engineering managers automate Pull Request review load-balancing across the team?",
    "options": [
      {
        "id": "a",
        "label": "Assign 100% of all pull requests to the single most senior engineer on the team."
      },
      {
        "id": "b",
        "label": "Configure round-robin PR assignment rules that factor active review queue capacity, code ownership (`CODEOWNERS`), and timezone availability, preventing senior engineer burnout."
      },
      {
        "id": "c",
        "label": "Allow developers to review their own pull requests with zero peer review."
      },
      {
        "id": "d",
        "label": "Prohibit developers from reviewing code."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_auto_18",
    "section": "automation",
    "prompt": "How can engineering teams automate non-production staging environment cost reduction?",
    "options": [
      {
        "id": "a",
        "label": "Implement automated cron schedules (e.g. CloudWatch / Kubernetes cronjobs) that shut down staging and preview environments outside business hours and on weekends."
      },
      {
        "id": "b",
        "label": "Run 500 idle high-memory staging clusters 24/7/365 with zero traffic."
      },
      {
        "id": "c",
        "label": "Delete production servers on weekends."
      },
      {
        "id": "d",
        "label": "Staging environment costs cannot be optimized."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_auto_19",
    "section": "automation",
    "prompt": "How should managers automate repository security policy compliance across 100+ GitHub repositories?",
    "options": [
      {
        "id": "a",
        "label": "Allow any developer to force-push unreviewed code directly to production main branches."
      },
      {
        "id": "b",
        "label": "Disable branch protection rules across all repositories."
      },
      {
        "id": "c",
        "label": "Manually inspect 100 repository settings pages on paper every morning."
      },
      {
        "id": "d",
        "label": "Deploy centralized organization rulesets (branch protection rules, mandatory 2-person code review, required passing CI checks, signed commits, and blocked force-pushes)."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_auto_20",
    "section": "automation",
    "prompt": "How do automated Architectural Decision Record (ADR) systems benefit growing engineering organizations?",
    "options": [
      {
        "id": "a",
        "label": "They eliminate the need for writing code."
      },
      {
        "id": "b",
        "label": "They automatically rewrite application source code."
      },
      {
        "id": "c",
        "label": "Version-controlled markdown documents inside repositories record the historical context, alternatives considered, and rationale behind major architectural choices for future engineers."
      },
      {
        "id": "d",
        "label": "ADRs have no value in software engineering."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_auto_21",
    "section": "automation",
    "prompt": "How should Product Managers automate cross-functional Launch Readiness Checklists?",
    "options": [
      {
        "id": "a",
        "label": "Launch enterprise products unexpectedly without informing Marketing or Support."
      },
      {
        "id": "b",
        "label": "Automated tracking across departments: Engineering (load testing passed), Marketing (assets ready), Legal (TOS updated), CS (support macros trained), with automated launch blocking if unready."
      },
      {
        "id": "c",
        "label": "Assume all departments are ready without checking."
      },
      {
        "id": "d",
        "label": "Launch products with zero documentation or marketing."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_auto_22",
    "section": "automation",
    "prompt": "How can engineering leadership automate developer onboarding environment setup (Time to First Commit)?",
    "options": [
      {
        "id": "a",
        "label": "Provide cloud-based development environments (e.g. GitHub Codespaces / Dev Containers) with pre-configured dependencies, test databases, and linting, enabling coding on Day 1."
      },
      {
        "id": "b",
        "label": "Require new hires to spend 3 weeks manually debugging local dependency version conflicts."
      },
      {
        "id": "c",
        "label": "Provide new hires with broken laptops."
      },
      {
        "id": "d",
        "label": "Prohibit new engineers from writing code during their first year."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_auto_23",
    "section": "automation",
    "prompt": "How does automated code coverage and dead-code tracking improve codebase health in large monorepos?",
    "options": [
      {
        "id": "a",
        "label": "Deletes random files from the repository to make builds faster."
      },
      {
        "id": "b",
        "label": "Forces developers to write 10,000 lines of fake tests."
      },
      {
        "id": "c",
        "label": "Code coverage tracking has no value in monorepos."
      },
      {
        "id": "d",
        "label": "Monitors test coverage trends on newly added code in PRs, flags declining coverage, and identifies obsolete code paths that can be safely deprecated."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_auto_24",
    "section": "automation",
    "prompt": "In automated incident management, what occurs when a primary on-call engineer fails to acknowledge a P1 alert within 5 minutes?",
    "options": [
      {
        "id": "a",
        "label": "The incident alert is permanently deleted."
      },
      {
        "id": "b",
        "label": "The monitoring system assumes the server fixed itself."
      },
      {
        "id": "c",
        "label": "Automated escalation cascades to the secondary on-call backup engineer, then to the Engineering Manager, and finally to the VP of Engineering until acknowledged."
      },
      {
        "id": "d",
        "label": "The production servers are shut down automatically."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_auto_25",
    "section": "automation",
    "prompt": "How should Product Managers automate customer beta program participant management?",
    "options": [
      {
        "id": "a",
        "label": "Give all beta features to random users without their consent."
      },
      {
        "id": "b",
        "label": "Automate beta opt-in forms, feature flag provisioning for approved user cohorts, in-app micro-surveys at key feature moments, and automated usage telemetry dashboards."
      },
      {
        "id": "c",
        "label": "Never collect feedback from beta users."
      },
      {
        "id": "d",
        "label": "Charge beta testers a penalty fee for reporting bugs."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_auto_26",
    "section": "automation",
    "prompt": "How can engineering managers automate capacity modeling factoring upcoming team PTO and holidays?",
    "options": [
      {
        "id": "a",
        "label": "Sync HRIS PTO calendars directly into sprint planning tools, auto-reducing available sprint story point capacity for squads with members on leave."
      },
      {
        "id": "b",
        "label": "Plan full sprint capacity and force remaining team members to work double shifts."
      },
      {
        "id": "c",
        "label": "Cancel all employee vacations during sprint cycles."
      },
      {
        "id": "d",
        "label": "Ignore PTO in planning and wonder why sprints fail."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mgr_auto_27",
    "section": "automation",
    "prompt": "How should engineering directors automate multi-year enterprise SaaS software license budgeting?",
    "options": [
      {
        "id": "a",
        "label": "Allow software contracts to auto-renew indefinitely without price negotiation."
      },
      {
        "id": "b",
        "label": "Guess software budget numbers randomly."
      },
      {
        "id": "c",
        "label": "Cancel all software subscriptions without notice."
      },
      {
        "id": "d",
        "label": "Maintain an automated license inventory tracking renewal dates, seat utilization rates, contract commitments, and projected growth to forecast annual budget requirements."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mgr_auto_28",
    "section": "automation",
    "prompt": "How can engineering leadership track the ratio of Technical Debt refactoring vs New Feature delivery over time?",
    "options": [
      {
        "id": "a",
        "label": "Prohibit developers from ever working on technical debt."
      },
      {
        "id": "b",
        "label": "Spend 100% of engineering resources on tech debt and ship zero features."
      },
      {
        "id": "c",
        "label": "Categorize Jira tickets by investment theme (Features, Maintenance, Tech Debt, Bugs) and track sprint point allocation against the target baseline (e.g., 70% Features / 20% Tech Debt / 10% Bugs)."
      },
      {
        "id": "d",
        "label": "Delete the ticket tracking system."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mgr_auto_29",
    "section": "automation",
    "prompt": "How can engineering teams automate cost-allocation tagging compliance across all Terraform / IaC cloud resources?",
    "options": [
      {
        "id": "a",
        "label": "Allow untagged mystery cloud resources to run in production indefinitely."
      },
      {
        "id": "b",
        "label": "Enforce pre-commit and CI linting policies (e.g. OPA/TFLint) that fail builds if cloud resources are missing mandatory tags (`Environment`, `Owner`, `Service`, `CostCenter`)."
      },
      {
        "id": "c",
        "label": "Tag all cloud resources with the word \"cloud\"."
      },
      {
        "id": "d",
        "label": "Disable automated cloud resource tagging."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mgr_auto_30",
    "section": "automation",
    "prompt": "What defines the ultimate benchmark of an automated, high-velocity engineering management ecosystem?",
    "options": [
      {
        "id": "a",
        "label": "A highly observable, self-correcting operational platform where automation handles administrative coordination, protects engineer focus time, and accelerates high-quality software delivery."
      },
      {
        "id": "b",
        "label": "A system where managers monitor developer keystrokes and enforce punitive rules."
      },
      {
        "id": "c",
        "label": "An organization with zero automation where all work is tracked in paper notebooks."
      },
      {
        "id": "d",
        "label": "A team where managers make all technical decisions without engineer input."
      }
    ],
    "correctOptionId": "a"
  }
];

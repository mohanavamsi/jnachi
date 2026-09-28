import { CertQuestion } from '../types';

export const DEVELOPERS_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "dev_grow_01",
    "section": "growth",
    "prompt": "How should a Staff Engineer balance technical debt remediation with product feature delivery velocity?",
    "options": [
      {
        "id": "a",
        "label": "Halt all product feature development for two full years to rewrite the codebase."
      },
      {
        "id": "b",
        "label": "Quantify tech debt in terms of developer drag, incident frequency, and latency costs, securing a dedicated continuous allocation (e.g., 20% per sprint) for high-leverage refactoring."
      },
      {
        "id": "c",
        "label": "Ignore all technical debt and focus 100% of time on shipping new features."
      },
      {
        "id": "d",
        "label": "Delete older services without understanding why they were built."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_grow_02",
    "section": "growth",
    "prompt": "When evaluating the CAP Theorem for a globally distributed banking ledger, how should the architecture be designed?",
    "options": [
      {
        "id": "a",
        "label": "Prioritize Consistency and Partition Tolerance (CP), rejecting or pausing conflicting transactions during network partitions rather than allowing inconsistent balance mutations."
      },
      {
        "id": "b",
        "label": "Prioritize Availability at all costs, allowing balances to diverge wildly during network splits."
      },
      {
        "id": "c",
        "label": "Assume modern cloud networks never experience network partitions."
      },
      {
        "id": "d",
        "label": "Disable database replication."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_grow_03",
    "section": "growth",
    "prompt": "What code review philosophy best fosters engineering excellence and junior engineer growth?",
    "options": [
      {
        "id": "a",
        "label": "Rejecting PRs with one-word comments like \"bad\" without explanation."
      },
      {
        "id": "b",
        "label": "Approving all PRs instantly without reading the diff."
      },
      {
        "id": "c",
        "label": "Rewriting the junior engineer's code in private without telling them."
      },
      {
        "id": "d",
        "label": "Framing comments with clear intent (blocking vs. non-blocking nitpicks), explaining the architectural rationale behind suggestions, offering pairing support, and celebrating clean solutions."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_grow_04",
    "section": "growth",
    "prompt": "When is a \"Modular Monolith\" architecture superior to premature microservices adoption for an early-stage startup?",
    "options": [
      {
        "id": "a",
        "label": "When you want to deploy 500 separate Kubernetes clusters on day one."
      },
      {
        "id": "b",
        "label": "Modular monoliths are obsolete and should never be used."
      },
      {
        "id": "c",
        "label": "When the domain boundaries are still evolving; a modular monolith provides single-repo deployment simplicity, fast in-memory function calls, and compile-time boundary enforcement with zero network overhead."
      },
      {
        "id": "d",
        "label": "When you want to avoid writing automated tests."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_grow_05",
    "section": "growth",
    "prompt": "What is the primary purpose of an Engineering Request for Comments (RFC) design document culture?",
    "options": [
      {
        "id": "a",
        "label": "To delay software releases by several months through endless bureaucracy."
      },
      {
        "id": "b",
        "label": "To align cross-functional engineers on problem definitions, evaluate alternative architectural approaches, surface hidden security/scale risks early, and document decision records (ADRs)."
      },
      {
        "id": "c",
        "label": "To write 100-page marketing brochures."
      },
      {
        "id": "d",
        "label": "To prevent other engineers from commenting on software architecture."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_grow_06",
    "section": "growth",
    "prompt": "How should an engineering organization manage public API versioning and deprecation lifecycles?",
    "options": [
      {
        "id": "a",
        "label": "Provide clear deprecation timelines (e.g. 12+ months), maintain backward-compatible semantic versioning, emit HTTP `Sunset` headers, and provide automated client SDK migration guides."
      },
      {
        "id": "b",
        "label": "Shut down old API versions immediately without warning."
      },
      {
        "id": "c",
        "label": "Never release new API versions."
      },
      {
        "id": "d",
        "label": "Change API parameter names randomly every month."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_grow_07",
    "section": "growth",
    "prompt": "Why is a blameless post-mortem culture essential for building highly reliable engineering organizations?",
    "options": [
      {
        "id": "a",
        "label": "It ensures that the engineer who introduced the bug is publicly reprimanded."
      },
      {
        "id": "b",
        "label": "It prevents management from learning that an outage occurred."
      },
      {
        "id": "c",
        "label": "It eliminates the need for software monitoring."
      },
      {
        "id": "d",
        "label": "It assumes engineers act in good faith with the information they had; focusing on systemic failure modes, missing guardrails, and automated resilience rather than scapegoating individuals."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_grow_08",
    "section": "growth",
    "prompt": "When deciding between a Relational SQL database (PostgreSQL) and a NoSQL Document Store (MongoDB), what is the key deciding factor?",
    "options": [
      {
        "id": "a",
        "label": "SQL databases cannot store text longer than 20 characters."
      },
      {
        "id": "b",
        "label": "NoSQL databases cannot be run in the cloud."
      },
      {
        "id": "c",
        "label": "SQL is ideal for structured schemas, strict ACID transactional invariants, and complex multi-table relational joins; Document stores excel for polymorphic, unstructured, rapidly evolving document hierarchies."
      },
      {
        "id": "d",
        "label": "Document stores are always 100x faster for all possible workloads."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_grow_09",
    "section": "growth",
    "prompt": "How should an engineering team evaluate the \"Build vs. Buy\" trade-off for core infrastructure (e.g. auth, billing)?",
    "options": [
      {
        "id": "a",
        "label": "Build your own custom relational database engine from scratch."
      },
      {
        "id": "b",
        "label": "Buy/use proven managed solutions for non-differentiating undifferentiated heavy lifting (auth, payments, email deliverability) to focus engineering capital on core proprietary business value."
      },
      {
        "id": "c",
        "label": "Outsource all core proprietary algorithms to third-party competitors."
      },
      {
        "id": "d",
        "label": "Never use any third-party software library."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_grow_10",
    "section": "growth",
    "prompt": "How does the Saga Pattern handle distributed multi-service transactions without blocking 2-phase commit locks?",
    "options": [
      {
        "id": "a",
        "label": "Coordinates a sequence of local service transactions; if one step fails, the saga orchestrator / choreography executes explicit compensating transactions in reverse order to rollback state."
      },
      {
        "id": "b",
        "label": "Locks all databases across the global internet until every microservice responds."
      },
      {
        "id": "c",
        "label": "Ignores transaction failures and leaves databases in permanently corrupted states."
      },
      {
        "id": "d",
        "label": "Replaces all databases with flat text files."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_grow_11",
    "section": "growth",
    "prompt": "What distinguishes a Principal / Staff Engineer from a Senior Engineer in their daily impact?",
    "options": [
      {
        "id": "a",
        "label": "Staff+ engineers write 10x more lines of code per day."
      },
      {
        "id": "b",
        "label": "Staff+ engineers never talk to other developers."
      },
      {
        "id": "c",
        "label": "Staff+ engineers spend 100% of their time attending non-technical administrative meetings."
      },
      {
        "id": "d",
        "label": "Staff+ engineers operate as organizational force multipliers: setting technical vision, de-risking multi-quarter initiatives, cross-pollinating best practices across squads, and elevating engineering culture."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_grow_12",
    "section": "growth",
    "prompt": "What trade-off must be considered when designing an application for theoretical multi-cloud neutrality (avoiding AWS/GCP lock-in)?",
    "options": [
      {
        "id": "a",
        "label": "Multi-cloud architectures make software 100% free of charge."
      },
      {
        "id": "b",
        "label": "Cloud providers prohibit running containers on their infrastructure."
      },
      {
        "id": "c",
        "label": "Multi-cloud abstractions often restrict teams to the lowest-common-denominator feature set, introducing substantial custom operational complexity that outweighs the theoretical vendor migration benefit."
      },
      {
        "id": "d",
        "label": "Multi-cloud eliminates all network latency."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_grow_13",
    "section": "growth",
    "prompt": "How can engineering leaders maintain a sustainable, low-burnout on-call rotation for production services?",
    "options": [
      {
        "id": "a",
        "label": "Assign the same developer to be on call 24/7/365 permanently."
      },
      {
        "id": "b",
        "label": "Enforce actionable alert hygiene (only page on user-impacting SLO breaches), provide dedicated compensation and compensatory rest time, and invest sprint time into fixing recurring alert sources."
      },
      {
        "id": "c",
        "label": "Page on-call engineers for minor informational CPU spikes that auto-resolve in 10 seconds."
      },
      {
        "id": "d",
        "label": "Disable all alerts so engineers can sleep uninterrupted during active outages."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_grow_14",
    "section": "growth",
    "prompt": "When modernizing a 10-year-old mission-critical legacy system, why is the Strangler Fig pattern favored over a \"big-bang\" rewrite?",
    "options": [
      {
        "id": "a",
        "label": "Big-bang rewrites carry catastrophic delivery risk and moving targets; incremental strangler migrations deliver continuous business value and allow real-world validation of new components."
      },
      {
        "id": "b",
        "label": "Strangler patterns require rewriting the entire codebase in a single weekend."
      },
      {
        "id": "c",
        "label": "Big-bang rewrites always succeed on time and under budget."
      },
      {
        "id": "d",
        "label": "Strangler patterns eliminate the need for QA testing."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_grow_15",
    "section": "growth",
    "prompt": "How does Domain-Driven Design (DDD) Bounded Contexts prevent enterprise software from devolving into a \"Big Ball of Mud\"?",
    "options": [
      {
        "id": "a",
        "label": "It combines all company data into a single global SQL table with 500 columns."
      },
      {
        "id": "b",
        "label": "It mandates that all classes must be written in Java."
      },
      {
        "id": "c",
        "label": "It prevents developers from creating new database tables."
      },
      {
        "id": "d",
        "label": "It defines explicit linguistic boundaries (ubiquitous language) and data models per subdomain (e.g. Billing vs Shipping), preventing cross-domain coupling and model pollution."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_grow_16",
    "section": "growth",
    "prompt": "How should software engineers practice proactive cloud FinOps during system architecture design?",
    "options": [
      {
        "id": "a",
        "label": "Over-provision 100x more compute than needed to avoid having to measure usage."
      },
      {
        "id": "b",
        "label": "Store all temporary log files in high-performance SSD databases permanently."
      },
      {
        "id": "c",
        "label": "Right-size compute resources, configure lifecycle policies for object storage tiers (e.g., S3 Glacier), optimize cross-AZ network egress, and leverage spot/reserved instances for steady workloads."
      },
      {
        "id": "d",
        "label": "Ignore cloud bills until the company runs out of cash."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_grow_17",
    "section": "growth",
    "prompt": "How do Service Level Objectives (SLOs) and Error Budgets align Product and Engineering incentives?",
    "options": [
      {
        "id": "a",
        "label": "SLOs are designed to punish developers who introduce bugs."
      },
      {
        "id": "b",
        "label": "When error budgets are healthy, teams can ship features aggressively; when error budgets are exhausted, product feature releases pause to focus resources on reliability engineering."
      },
      {
        "id": "c",
        "label": "Error budgets mandate 100.000% uptime with zero tolerance for scheduled maintenance."
      },
      {
        "id": "d",
        "label": "SLOs replace the need for product roadmap planning."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_grow_18",
    "section": "growth",
    "prompt": "How should an engineering leader manage the sunsetting of deprecated frameworks or languages across multiple squads?",
    "options": [
      {
        "id": "a",
        "label": "Create automated migration codemods, establish clear milestone deadlines, provide hands-on workshop training, and track squad migration velocity on a public dashboard."
      },
      {
        "id": "b",
        "label": "Turn off production servers running the old framework without notice."
      },
      {
        "id": "c",
        "label": "Fire all engineers who are working on the legacy stack."
      },
      {
        "id": "d",
        "label": "Allow squads to maintain obsolete abandoned frameworks indefinitely."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_grow_19",
    "section": "growth",
    "prompt": "What constitutes an effective \"InnerSource\" culture inside large enterprise software organizations?",
    "options": [
      {
        "id": "a",
        "label": "Restricting all repositories so only their 2 assigned creators can see the source code."
      },
      {
        "id": "b",
        "label": "Banning other teams from submitting bug fixes to your services."
      },
      {
        "id": "c",
        "label": "Publishing internal company trade secrets to public internet forums."
      },
      {
        "id": "d",
        "label": "Applying open-source development practices internally: public code discovery, standardized contribution guidelines, clear maintainer triage SLAs, and welcoming cross-team pull requests."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_grow_20",
    "section": "growth",
    "prompt": "How does the Bulkhead Pattern enhance system resilience in distributed software architectures?",
    "options": [
      {
        "id": "a",
        "label": "It deletes failing microservices automatically from the cloud."
      },
      {
        "id": "b",
        "label": "It forces all services to share a single monolithic thread pool."
      },
      {
        "id": "c",
        "label": "It partitions system resources (thread pools, connection pools, memory) into isolated compartments so failure in one non-critical component cannot exhaust resources and crash the entire system."
      },
      {
        "id": "d",
        "label": "It increases network latency by routing traffic through 10 extra proxy layers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_grow_21",
    "section": "growth",
    "prompt": "How can an engineering team effectively communicate technical debt refactoring value to executive leadership?",
    "options": [
      {
        "id": "a",
        "label": "Complain about how ugly the code looks in developer chat channels."
      },
      {
        "id": "b",
        "label": "Translate technical debt into business outcomes: reduced operational cloud costs, accelerated feature turnaround time, lowered regression defect rates, and mitigated compliance risks."
      },
      {
        "id": "c",
        "label": "Claim that the software will explode if refactoring is not approved tomorrow."
      },
      {
        "id": "d",
        "label": "Use heavy academic compiler jargon to confuse executives."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_grow_22",
    "section": "growth",
    "prompt": "How should technical guilds or chapters drive architectural alignment across independent product squads?",
    "options": [
      {
        "id": "a",
        "label": "Host collaborative guild meetings, establish shared reusable component libraries, co-author architectural standards, and organize lightning demo sessions showcasing team breakthroughs."
      },
      {
        "id": "b",
        "label": "Form an ivory-tower architecture committee that dictates rules without writing code."
      },
      {
        "id": "c",
        "label": "Mandate that all squads must use identical variable names."
      },
      {
        "id": "d",
        "label": "Prohibit squads from communicating with each other."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_grow_23",
    "section": "growth",
    "prompt": "When architecting high-throughput event streams with Apache Kafka, how should partition keys be selected?",
    "options": [
      {
        "id": "a",
        "label": "Use a single static partition key for all millions of incoming events."
      },
      {
        "id": "b",
        "label": "Choose a low-cardinality key like `country_code` where 95% of traffic lands in a single partition."
      },
      {
        "id": "c",
        "label": "Avoid partitioning and route all traffic to a single broker node."
      },
      {
        "id": "d",
        "label": "Choose high-cardinality entity keys (e.g. `user_id`, `account_id`) to distribute load evenly across partitions while ensuring strict sequential order processing per individual entity."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_grow_24",
    "section": "growth",
    "prompt": "What are Google's \"Four Golden Signals\" of service observability that every engineering team must monitor?",
    "options": [
      {
        "id": "a",
        "label": "Lines of code, commit count, PR review speed, and developer salary."
      },
      {
        "id": "b",
        "label": "CPU fan speed, monitor brightness, office room temperature, and typing volume."
      },
      {
        "id": "c",
        "label": "Latency (time to service a request), Traffic (demand on the system), Errors (rate of request failures), and Saturation (fullness of constrained system resources)."
      },
      {
        "id": "d",
        "label": "Number of open tabs in Chrome, Slack notification count, email inbox size, and mouse clicks."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_grow_25",
    "section": "growth",
    "prompt": "How should teams manage the boundary between fast experimental prototypes (spikes) and production-grade code?",
    "options": [
      {
        "id": "a",
        "label": "Deploy hacked prototypes straight to production and fix bugs later if users complain."
      },
      {
        "id": "b",
        "label": "Treat prototypes as throwaway code designed strictly to answer feasibility questions; rewrite cleanly with proper tests, error handling, and architecture before deploying to production."
      },
      {
        "id": "c",
        "label": "Ban developers from creating prototypes."
      },
      {
        "id": "d",
        "label": "Spend 6 months building prototypes without defining what question is being answered."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_grow_26",
    "section": "growth",
    "prompt": "When designing a SaaS multi-tenant database architecture for highly regulated healthcare or banking clients, which isolation model is best?",
    "options": [
      {
        "id": "a",
        "label": "Database-per-tenant or Schema-per-tenant isolation, ensuring strict physical/logical segregation, dedicated encryption keys, and zero possibility of cross-tenant data leakage."
      },
      {
        "id": "b",
        "label": "Shared database with no tenant ID column, allowing all customer records to intermingle."
      },
      {
        "id": "c",
        "label": "Storing all customer records in public JSON files on an unauthenticated web server."
      },
      {
        "id": "d",
        "label": "Allowing tenants to execute raw unauthenticated SQL commands against the shared cluster."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_grow_27",
    "section": "growth",
    "prompt": "What is Conway's Law and how should engineering leadership apply it in practice?",
    "options": [
      {
        "id": "a",
        "label": "Computers double their processing power every 18 months."
      },
      {
        "id": "b",
        "label": "All software systems eventually become written in JavaScript."
      },
      {
        "id": "c",
        "label": "Network bandwidth is always infinite."
      },
      {
        "id": "d",
        "label": "\"Organizations design systems that mirror their communication structures\"; leaders apply the \"Inverse Conway Maneuver\", structuring autonomous cross-functional teams around desired decoupled service boundaries."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_grow_28",
    "section": "growth",
    "prompt": "What is the difference between Recovery Time Objective (RTO) and Recovery Point Objective (RPO) in disaster recovery?",
    "options": [
      {
        "id": "a",
        "label": "RTO measures developer typing speed; RPO measures code coverage percentage."
      },
      {
        "id": "b",
        "label": "RTO and RPO are identical metrics with no difference."
      },
      {
        "id": "c",
        "label": "RTO is the maximum acceptable duration of system downtime before restoration; RPO is the maximum acceptable age of data that can be lost due to an outage."
      },
      {
        "id": "d",
        "label": "RTO applies to frontend apps; RPO applies to mobile apps only."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_grow_29",
    "section": "growth",
    "prompt": "How does an engineering leader cultivate psychological safety and technical innovation across software squads?",
    "options": [
      {
        "id": "a",
        "label": "Enforcing a culture where only senior architects are permitted to suggest ideas."
      },
      {
        "id": "b",
        "label": "Encouraging bold experimentation, welcoming diverse perspectives, treating failures as collaborative learning opportunities, and dismantling toxic gatekeeping cultures."
      },
      {
        "id": "c",
        "label": "Ranking developers weekly on public leaderboards based on bug counts."
      },
      {
        "id": "d",
        "label": "Canceling code reviews to avoid hurting developers' feelings."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_grow_30",
    "section": "growth",
    "prompt": "What defines the pinnacle standard of the Jnachi Certified AI Software Developer & Architect?",
    "options": [
      {
        "id": "a",
        "label": "A master engineer who combines rigorous systems thinking, deep architectural craftsmanship, proactive security stewardship, empathetic mentorship, and transformative velocity using modern AI."
      },
      {
        "id": "b",
        "label": "A programmer who writes code without testing or documentation."
      },
      {
        "id": "c",
        "label": "A developer who relies 100% on automated AI bots to make architectural decisions."
      },
      {
        "id": "d",
        "label": "An engineer who resists all modern tooling and writes code in binary machine code."
      }
    ],
    "correctOptionId": "a"
  }
];

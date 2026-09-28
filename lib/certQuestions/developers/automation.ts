import { CertQuestion } from '../types';

export const DEVELOPERS_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "dev_auto_01",
    "section": "automation",
    "prompt": "How should engineering teams configure automated AI Pull Request review bots in GitHub Actions / GitLab CI?",
    "options": [
      {
        "id": "a",
        "label": "Allow the AI bot to automatically merge all PRs without human engineer review."
      },
      {
        "id": "b",
        "label": "Configure bots to analyze incremental diffs, enforce custom team style guides, filter low-confidence nitpicks, cap maximum inline comments, and require human approval."
      },
      {
        "id": "c",
        "label": "Spam 100 comments on every line of code regardless of importance."
      },
      {
        "id": "d",
        "label": "Disable compiler and unit test checks whenever AI review is active."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_auto_02",
    "section": "automation",
    "prompt": "How can automated CI pipelines detect and isolate flaky unit and integration tests?",
    "options": [
      {
        "id": "a",
        "label": "Automatically rerun failed tests in clean quarantined environments, cluster failure patterns by timing and concurrency artifacts, and report flaky test metrics to prevent pipeline blockers."
      },
      {
        "id": "b",
        "label": "Delete all tests that fail more than once."
      },
      {
        "id": "c",
        "label": "Ignore test failures and deploy to production anyway."
      },
      {
        "id": "d",
        "label": "Run all tests with assertions disabled."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_auto_03",
    "section": "automation",
    "prompt": "When automating synthetic test data generation for staging databases, what safeguard is essential?",
    "options": [
      {
        "id": "a",
        "label": "Copy unredacted production customer credit card numbers directly into public staging databases."
      },
      {
        "id": "b",
        "label": "Populate all database columns with the word \"test\"."
      },
      {
        "id": "c",
        "label": "Disable database primary keys."
      },
      {
        "id": "d",
        "label": "Enforce relational integrity, respect database foreign key constraints, generate realistic statistical distributions, and strictly mask/synthesize all PII."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_auto_04",
    "section": "automation",
    "prompt": "How should an automated Canary Deployment pipeline evaluate whether to promote or rollback a new release?",
    "options": [
      {
        "id": "a",
        "label": "Deploy immediately to 100% of servers at midnight and check server logs the following morning."
      },
      {
        "id": "b",
        "label": "Promote releases based purely on how fast the Docker container compiled."
      },
      {
        "id": "c",
        "label": "Route 5% of traffic to the canary version, compare real-time error rates (HTTP 5xx), p99 latency, and CPU/memory metrics against baseline over a 15-minute window, auto-rolling back if SLOs degrade."
      },
      {
        "id": "d",
        "label": "Disable all metric collection during canary deployments."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_auto_05",
    "section": "automation",
    "prompt": "What is the advantage of using lightweight local pre-commit hooks (e.g. Husky / pre-commit) before pushing code to remote CI?",
    "options": [
      {
        "id": "a",
        "label": "It bypasses all cloud security checks permanently."
      },
      {
        "id": "b",
        "label": "It catches syntax errors, formatting inconsistencies, linting rules, and secret leaks locally in milliseconds, saving expensive cloud CI compute and preventing broken remote builds."
      },
      {
        "id": "c",
        "label": "It prevents developers from saving files to disk."
      },
      {
        "id": "d",
        "label": "It compiles the entire production database inside git."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_auto_06",
    "section": "automation",
    "prompt": "How should automated dependency update bots (e.g. Dependabot, Renovate) be governed in production repositories?",
    "options": [
      {
        "id": "a",
        "label": "Auto-merge patch updates only if full regression test suites and security scans pass; require manual review and changelog inspection for major/minor version bumps."
      },
      {
        "id": "b",
        "label": "Instantly auto-merge all major dependency updates without running tests."
      },
      {
        "id": "c",
        "label": "Disable all dependency updates forever to avoid changing code."
      },
      {
        "id": "d",
        "label": "Delete package lock files on every build."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_auto_07",
    "section": "automation",
    "prompt": "In Kubernetes microservices, how should horizontal pod autoscaling (HPA / KEDA) be automated for asynchronous message workers?",
    "options": [
      {
        "id": "a",
        "label": "Hardcode exactly 1 pod permanently regardless of queue size."
      },
      {
        "id": "b",
        "label": "Scale pods based on the current local time of day only."
      },
      {
        "id": "c",
        "label": "Delete the message queue whenever traffic increases."
      },
      {
        "id": "d",
        "label": "Scale pods dynamically based on queue lag and message arrival rate metrics rather than relying solely on CPU utilization, which can lag behind queue spikes."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_auto_08",
    "section": "automation",
    "prompt": "How should automated Static Application Security Testing (SAST) be integrated into a developer CI pipeline?",
    "options": [
      {
        "id": "a",
        "label": "Run SAST scans once every five years."
      },
      {
        "id": "b",
        "label": "Allow developers to disable security scanners with a single click."
      },
      {
        "id": "c",
        "label": "Run SAST scans on every PR diff, block merges on verified high/critical vulnerabilities (e.g., SQLi, RCE), and provide developers with automated remediation code snippets."
      },
      {
        "id": "d",
        "label": "Send raw 5,000-page PDF security reports to developers via postal mail."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_auto_09",
    "section": "automation",
    "prompt": "How can engineering teams automate incident post-mortem documentation after a major production outage?",
    "options": [
      {
        "id": "a",
        "label": "Generate a fictional story that blames external cloud providers for all downtime."
      },
      {
        "id": "b",
        "label": "Ingest PagerDuty alert timelines, Slack incident war-room transcripts, and deployment logs into an LLM to generate an initial factual timeline, blast radius summary, and draft action items for team review."
      },
      {
        "id": "c",
        "label": "Delete all incident logs to prevent management from finding out."
      },
      {
        "id": "d",
        "label": "Assign 100% of outage blame to the newest junior developer."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_auto_10",
    "section": "automation",
    "prompt": "What is the goal of automated Chaos Engineering experiments (e.g. Chaos Mesh, LitmusChaos) in CI/CD pipelines?",
    "options": [
      {
        "id": "a",
        "label": "Proactively inject controlled network latency, packet loss, pod terminations, and disk exhaustion to verify that automated failover and circuit breakers function as designed."
      },
      {
        "id": "b",
        "label": "Permanently corrupt production databases to test backups."
      },
      {
        "id": "c",
        "label": "Shut down customer access randomly during peak business hours."
      },
      {
        "id": "d",
        "label": "Delete all infrastructure code from GitHub."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_auto_11",
    "section": "automation",
    "prompt": "How can teams automate the lifecycle cleanup of obsolete Feature Flags in large codebases?",
    "options": [
      {
        "id": "a",
        "label": "Keep all 500 legacy feature flags active in the codebase forever."
      },
      {
        "id": "b",
        "label": "Delete feature flags without verifying if the underlying code is active."
      },
      {
        "id": "c",
        "label": "Hardcode all feature flags to return `Math.random() > 0.5`."
      },
      {
        "id": "d",
        "label": "Identify flags that have been 100% enabled for over 30 days, auto-generate PRs that remove conditional branching and dead code paths, and run test suites to verify functionality."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_auto_12",
    "section": "automation",
    "prompt": "Why are automated ephemeral preview environments valuable in modern Pull Request workflows?",
    "options": [
      {
        "id": "a",
        "label": "They replace the need for writing automated unit tests."
      },
      {
        "id": "b",
        "label": "They eliminate the need for production environments."
      },
      {
        "id": "c",
        "label": "They spin up isolated, fully functional full-stack instances per PR, allowing developers, QA, and product managers to test live functionality before merging to main."
      },
      {
        "id": "d",
        "label": "They run permanently on developer laptops."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_auto_13",
    "section": "automation",
    "prompt": "How do automated Consumer-Driven Contract Tests (e.g., Pact) prevent breaking microservice deployments?",
    "options": [
      {
        "id": "a",
        "label": "They prevent developers from writing new microservices."
      },
      {
        "id": "b",
        "label": "Consumers publish contract expectations (HTTP endpoints, payload schemas), and providers automatically verify against these contracts in CI before deploying new API versions."
      },
      {
        "id": "c",
        "label": "They convert all REST APIs into SOAP XML services."
      },
      {
        "id": "d",
        "label": "They allow providers to change API response structures without notifying consumers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_auto_14",
    "section": "automation",
    "prompt": "What metric anti-pattern occurs when teams enforce rigid 100% automated code coverage gates without quality checks?",
    "options": [
      {
        "id": "a",
        "label": "Developers write meaningless tests that execute lines without checking assertions, inflating coverage metrics while failing to detect functional regressions."
      },
      {
        "id": "b",
        "label": "Compilers refuse to build code with high test coverage."
      },
      {
        "id": "c",
        "label": "Code execution becomes 10x slower in production."
      },
      {
        "id": "d",
        "label": "Software becomes completely immune to all future bugs."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_auto_15",
    "section": "automation",
    "prompt": "How does automated distributed tracing with OpenTelemetry help debug latency spikes across 50 microservices?",
    "options": [
      {
        "id": "a",
        "label": "It prints all console logs to a single text file."
      },
      {
        "id": "b",
        "label": "It eliminates the need for database indexing."
      },
      {
        "id": "c",
        "label": "It compresses HTTP requests into zip archives."
      },
      {
        "id": "d",
        "label": "It propagates unique trace IDs across all network hops, measuring exact span durations per service, database query, and external API call in a unified flamegraph."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_auto_16",
    "section": "automation",
    "prompt": "How does a GitOps automation controller (e.g., ArgoCD, Flux) handle manual configuration changes made directly in a Kubernetes cluster?",
    "options": [
      {
        "id": "a",
        "label": "It deletes the git repository."
      },
      {
        "id": "b",
        "label": "It shuts down all running cluster pods permanently."
      },
      {
        "id": "c",
        "label": "It detects infrastructure drift from the desired state in the Git repository and automatically reconciles the live cluster back to the version-controlled manifest."
      },
      {
        "id": "d",
        "label": "It ignores git manifests and adopts whatever manual changes were made."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_auto_17",
    "section": "automation",
    "prompt": "How should teams automate security and compliance policies in Kubernetes using Open Policy Agent (OPA) / Gatekeeper?",
    "options": [
      {
        "id": "a",
        "label": "Disable Kubernetes admission webhooks."
      },
      {
        "id": "b",
        "label": "Define declarative admission control rules that reject pod deployments running as root, missing resource limits, or pulling from unverified container registries."
      },
      {
        "id": "c",
        "label": "Allow any container image to run with privileged host network access."
      },
      {
        "id": "d",
        "label": "Manually inspect every YAML file on paper before kubectl apply."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_auto_18",
    "section": "automation",
    "prompt": "How can engineering teams automate performance regression detection in nightly CI pipelines?",
    "options": [
      {
        "id": "a",
        "label": "Execute automated load and micro-benchmark suites under identical hardware constraints, comparing p95 latency and memory consumption against rolling baseline averages."
      },
      {
        "id": "b",
        "label": "Check whether developers type quickly during the day."
      },
      {
        "id": "c",
        "label": "Rely solely on user complaints on social media after release."
      },
      {
        "id": "d",
        "label": "Measure performance by the number of lines of code in the PR."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_auto_19",
    "section": "automation",
    "prompt": "How should automated secret rotation pipelines (e.g. AWS Secrets Manager / HashiCorp Vault) handle database credentials?",
    "options": [
      {
        "id": "a",
        "label": "Delete the database root password and leave it blank."
      },
      {
        "id": "b",
        "label": "Commit updated passwords directly to public GitHub repos."
      },
      {
        "id": "c",
        "label": "Restart the entire database cluster for 2 hours during every secret rotation."
      },
      {
        "id": "d",
        "label": "Generate new random credentials, update the database user permissions, verify application connection pooling with the new secret, and gracefully deprecate the old secret without downtime."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_auto_20",
    "section": "automation",
    "prompt": "How does automated log clustering reduce alert fatigue in high-volume production systems?",
    "options": [
      {
        "id": "a",
        "label": "It deletes all warning and error logs automatically."
      },
      {
        "id": "b",
        "label": "It converts all logs into uppercase text."
      },
      {
        "id": "c",
        "label": "It tokenizes log messages, groups millions of repetitive log lines into distinct template patterns, and alerts on newly emerging anomalous clusters rather than individual lines."
      },
      {
        "id": "d",
        "label": "It sends an SMS to all engineers for every single log message generated."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_auto_21",
    "section": "automation",
    "prompt": "What automated action should occur when an error budget burn rate alert fires for a tier-1 production service?",
    "options": [
      {
        "id": "a",
        "label": "Increase the error budget to 50% so the alert stops firing."
      },
      {
        "id": "b",
        "label": "Automatically freeze non-critical production feature deployments, page the on-call engineer, and prioritize reliability and bug remediation tasks."
      },
      {
        "id": "c",
        "label": "Delete the monitoring dashboard."
      },
      {
        "id": "d",
        "label": "Ignore the alert if it occurs on a Friday."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_auto_22",
    "section": "automation",
    "prompt": "How should automated container image scanning tools (e.g. Trivy, Snyk) be configured in artifact registries?",
    "options": [
      {
        "id": "a",
        "label": "Scan base images continuously for newly published CVEs, block deployment of images with unpatched critical exploits, and auto-generate PRs for upgraded base images."
      },
      {
        "id": "b",
        "label": "Scan images only once during initial creation and never scan again."
      },
      {
        "id": "c",
        "label": "Allow all vulnerabilities if the developer marks the PR as urgent."
      },
      {
        "id": "d",
        "label": "Disable container image signing."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_auto_23",
    "section": "automation",
    "prompt": "How can automated dead code elimination (Tree-Shaking) be validated in large frontend monorepos?",
    "options": [
      {
        "id": "a",
        "label": "Convert all frontend code into a single monolithic 50MB JavaScript bundle."
      },
      {
        "id": "b",
        "label": "Manually delete random files before production deployment."
      },
      {
        "id": "c",
        "label": "Disable compression (Gzip / Brotli)."
      },
      {
        "id": "d",
        "label": "Enforce ES module syntax (`import`/`export`), configure bundle analyzers in CI to track asset sizes per route, and fail builds if unused bundles exceed size budgets."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_auto_24",
    "section": "automation",
    "prompt": "How should engineering teams automate API documentation synchronization with backend code changes?",
    "options": [
      {
        "id": "a",
        "label": "Manually edit Word documents once a year."
      },
      {
        "id": "b",
        "label": "Avoid documenting APIs so competitors cannot learn how they work."
      },
      {
        "id": "c",
        "label": "Auto-generate OpenAPI specifications from typed code models and docstrings during CI builds, deploying updated interactive Swagger/Redoc sites upon merge."
      },
      {
        "id": "d",
        "label": "Store all documentation inside private email threads."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_auto_25",
    "section": "automation",
    "prompt": "In multi-region database architectures, how should automated failover systems prevent \"split-brain\" scenarios?",
    "options": [
      {
        "id": "a",
        "label": "Allow all regions to accept writes independently without conflict resolution."
      },
      {
        "id": "b",
        "label": "Require quorum-based consensus (e.g. Raft / Paxos) across an odd number of regions/witness nodes before electing a new primary write replica."
      },
      {
        "id": "c",
        "label": "Shut down all databases immediately upon network latency."
      },
      {
        "id": "d",
        "label": "Manually flip DNS switches using sticky notes."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_auto_26",
    "section": "automation",
    "prompt": "How can a service mesh (e.g. Istio, Linkerd) automate sophisticated traffic management without application code changes?",
    "options": [
      {
        "id": "a",
        "label": "Sidecar proxies intercept network traffic to enforce mTLS encryption, circuit breaking, distributed tracing, retries, and dynamic percentage-based traffic splits."
      },
      {
        "id": "b",
        "label": "By rewriting application source code on the fly."
      },
      {
        "id": "c",
        "label": "By converting all microservices into PHP scripts."
      },
      {
        "id": "d",
        "label": "By disabling network firewalls."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_auto_27",
    "section": "automation",
    "prompt": "How should automated load testing (e.g. k6, Locust) be structured to simulate realistic user traffic in CI?",
    "options": [
      {
        "id": "a",
        "label": "Send 1 million identical HTTP requests to a static 404 page simultaneously."
      },
      {
        "id": "b",
        "label": "Run load tests against third-party external payment processors without sandbox mode."
      },
      {
        "id": "c",
        "label": "Test only with 1 user thread."
      },
      {
        "id": "d",
        "label": "Model realistic user journeys with realistic think times, dynamic session tokens, randomized payload data, and staged ramp-up/steady/ramp-down load profiles."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_auto_28",
    "section": "automation",
    "prompt": "How do modern monorepo build tools (e.g., Turborepo, Nx) automate build acceleration across massive codebases?",
    "options": [
      {
        "id": "a",
        "label": "Rebuild every package from scratch on every single keystroke."
      },
      {
        "id": "b",
        "label": "Delete all test files to make builds faster."
      },
      {
        "id": "c",
        "label": "Construct a directed acyclic graph (DAG) of package dependencies, caching computational task outputs remotely based on input file hashes to avoid redundant rebuilds."
      },
      {
        "id": "d",
        "label": "Disable TypeScript type checking permanently."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_auto_29",
    "section": "automation",
    "prompt": "What constitutes a reliable automated operational runbook for cloud infrastructure remediation?",
    "options": [
      {
        "id": "a",
        "label": "A single non-idempotent shell command that deletes temporary directories with `rm -rf /*`."
      },
      {
        "id": "b",
        "label": "Declarative, idempotent execution scripts with pre-flight safety assertions, step-by-step telemetry logging, rate-limited batch execution, and automatic rollback handlers."
      },
      {
        "id": "c",
        "label": "An unverified script written during an active production outage without testing."
      },
      {
        "id": "d",
        "label": "A script that disables all system monitoring."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_auto_30",
    "section": "automation",
    "prompt": "What represents the ultimate standard of an automated, self-healing software engineering ecosystem?",
    "options": [
      {
        "id": "a",
        "label": "A resilient platform with automated testing, continuous security validation, zero-downtime deployment pipelines, declarative GitOps workflows, and automated anomaly mitigation."
      },
      {
        "id": "b",
        "label": "A system where human engineers are banned from inspecting server logs."
      },
      {
        "id": "c",
        "label": "A system that deploys code to production without unit tests."
      },
      {
        "id": "d",
        "label": "A manual release process requiring 50 signatures on paper forms."
      }
    ],
    "correctOptionId": "a"
  }
];

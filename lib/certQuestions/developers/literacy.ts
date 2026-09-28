import { CertQuestion } from '../types';

export const DEVELOPERS_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "dev_lit_01",
    "section": "literacy",
    "prompt": "When using an LLM to isolate a subtle race condition in concurrent asynchronous code, what prompt context yields the most accurate diagnosis?",
    "options": [
      {
        "id": "a",
        "label": "Pasting a 10,000-line minified JavaScript bundle and asking \"why is this slow?\""
      },
      {
        "id": "b",
        "label": "Providing the exact runtime stack trace, thread/event-loop model, shared state mutations, expected vs. actual race behavior, and concurrency primitives used."
      },
      {
        "id": "c",
        "label": "Asking the AI to guess the error without providing runtime environment versions or code snippets."
      },
      {
        "id": "d",
        "label": "Running generated code directly in production to see if it fails under load."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_lit_02",
    "section": "literacy",
    "prompt": "How should a developer prompt an AI to refactor a legacy monolithic function into clean, decoupled modules?",
    "options": [
      {
        "id": "a",
        "label": "Specify explicit design patterns (e.g. Strategy or Dependency Injection), define pure input/output interfaces, require strict TypeScript types, and mandate 100% unit test equivalence."
      },
      {
        "id": "b",
        "label": "Ask the AI to delete all comments and rename variables to single letters."
      },
      {
        "id": "c",
        "label": "Instruct the model to rewrite the entire backend in a different language without changing tests."
      },
      {
        "id": "d",
        "label": "Tell the AI to combine all database calls into a single global SQL query."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_lit_03",
    "section": "literacy",
    "prompt": "What prompt constraint prevents an AI coding assistant from introducing breaking API changes during a routine method update?",
    "options": [
      {
        "id": "a",
        "label": "\"Feel free to change any parameter names to match modern naming conventions.\""
      },
      {
        "id": "b",
        "label": "\"Remove all deprecated methods without warning.\""
      },
      {
        "id": "c",
        "label": "\"Change synchronous methods to asynchronous without updating callers.\""
      },
      {
        "id": "d",
        "label": "\"Maintain exact function signatures, argument types, return structures, and backward-compatible exception handling while optimizing internal execution logic.\""
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_lit_04",
    "section": "literacy",
    "prompt": "When generating comprehensive unit test suites with an LLM, which prompting approach ensures high edge-case coverage?",
    "options": [
      {
        "id": "a",
        "label": "Ask for only happy-path tests with valid string inputs."
      },
      {
        "id": "b",
        "label": "Instruct the AI to write tests that always assert `expect(true).toBe(true)`."
      },
      {
        "id": "c",
        "label": "Prompt for parameterized table-driven tests explicitly testing null/undefined values, boundary conditions, empty collections, integer overflow, network timeouts, and malformed schemas."
      },
      {
        "id": "d",
        "label": "Generate tests without assertions to maximize line coverage."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_lit_05",
    "section": "literacy",
    "prompt": "How should a software engineer prompt an AI to optimize an inefficient database query (e.g. N+1 problem in ORM)?",
    "options": [
      {
        "id": "a",
        "label": "Disable database indexes to speed up write operations."
      },
      {
        "id": "b",
        "label": "Provide the database schema, table indexing definitions, ORM query logs, and execution plan (`EXPLAIN ANALYZE`), requesting eager loading / batch fetching strategies."
      },
      {
        "id": "c",
        "label": "Ask the AI to store all database records in local browser cookies."
      },
      {
        "id": "d",
        "label": "Request the AI to write raw SQL that ignores foreign key constraints."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_lit_06",
    "section": "literacy",
    "prompt": "What is the risk of prompting an AI with \"Write a regular expression to validate email addresses\"?",
    "options": [
      {
        "id": "a",
        "label": "LLMs often produce overly simplistic or catastrophically backtracking regexes (ReDoS vulnerabilities); standard libraries or RFC 5322 compliant parsers should be used instead."
      },
      {
        "id": "b",
        "label": "Regular expressions cannot be processed by computers."
      },
      {
        "id": "c",
        "label": "Email servers reject regex validations."
      },
      {
        "id": "d",
        "label": "Regexes always consume 100% of GPU memory."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_lit_07",
    "section": "literacy",
    "prompt": "When asking an AI to translate legacy Python 2 code to modern Python 3.12+, what key requirements should be specified?",
    "options": [
      {
        "id": "a",
        "label": "Convert all dictionaries into linked lists."
      },
      {
        "id": "b",
        "label": "Remove all exception handling blocks."
      },
      {
        "id": "c",
        "label": "Downgrade dependencies to Python 1.5 syntax."
      },
      {
        "id": "d",
        "label": "Enforce unicode/bytes string boundaries, update integer division operators, leverage modern type annotations (`typing`), and use async/await over thread libraries where appropriate."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_lit_08",
    "section": "literacy",
    "prompt": "How should a developer prompt an AI to explain complex, obfuscated cryptographic or mathematical algorithms?",
    "options": [
      {
        "id": "a",
        "label": "Ask the AI to replace the algorithm with a random number generator."
      },
      {
        "id": "b",
        "label": "Instruct the AI to guess what the code does without analyzing the logic."
      },
      {
        "id": "c",
        "label": "Request a step-by-step breakdown with mathematical variable mappings, time/space algorithmic complexity (Big-O), inline line-by-line annotations, and visual ASCII state diagrams."
      },
      {
        "id": "d",
        "label": "Tell the AI to convert the code to HTML."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_lit_09",
    "section": "literacy",
    "prompt": "What prompting technique is most effective when generating OpenAPI / Swagger specification documentation from existing code?",
    "options": [
      {
        "id": "a",
        "label": "Ask for a single-sentence description of the website."
      },
      {
        "id": "b",
        "label": "Provide controller route handlers and DTO schemas, requesting OpenAPI 3.1 YAML with explicit HTTP status codes, request bodies, query parameters, security schemes, and example payloads."
      },
      {
        "id": "c",
        "label": "Instruct the AI to omit error status codes (4xx/5xx)."
      },
      {
        "id": "d",
        "label": "Generate API docs without parameter types."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_lit_10",
    "section": "literacy",
    "prompt": "When using an AI to scaffold a new microservice, why should developers mandate strict linting and formatting rules in the prompt?",
    "options": [
      {
        "id": "a",
        "label": "To ensure generated boilerplate immediately conforms to team ESLint/Prettier/Ruff standards, minimizing review friction and static analysis CI failures."
      },
      {
        "id": "b",
        "label": "Because unformatted code cannot be parsed by compilers."
      },
      {
        "id": "c",
        "label": "To make the file size as large as possible."
      },
      {
        "id": "d",
        "label": "Linting rules prevent the AI from generating code."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_lit_11",
    "section": "literacy",
    "prompt": "How should an engineer prompt an LLM to debug a memory leak in a Node.js / Go backend service?",
    "options": [
      {
        "id": "a",
        "label": "Restart the server every 5 minutes in a cron loop."
      },
      {
        "id": "b",
        "label": "Double the RAM on the server without investigating the code."
      },
      {
        "id": "c",
        "label": "Delete all log files."
      },
      {
        "id": "d",
        "label": "Provide heap snapshot profiles, garbage collection telemetry, event listener registrations, and unbounded cache structures for targeted leak analysis."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_lit_12",
    "section": "literacy",
    "prompt": "When asking an AI to implement pagination for a high-volume REST endpoint, which pattern should be specified for high scale?",
    "options": [
      {
        "id": "a",
        "label": "Loading all 10 million records into Node.js memory and slicing the array."
      },
      {
        "id": "b",
        "label": "Offset pagination with `OFFSET 1000000` on unindexed tables."
      },
      {
        "id": "c",
        "label": "Keyset / cursor-based pagination with indexed sequential columns to avoid expensive SQL `OFFSET` performance degradation on deep pages."
      },
      {
        "id": "d",
        "label": "Returning all database records in a single uncompressed JSON payload."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_lit_13",
    "section": "literacy",
    "prompt": "How should a developer prompt an AI to implement rate limiting on public API endpoints?",
    "options": [
      {
        "id": "a",
        "label": "Use an in-memory global variable that resets whenever the server restarts."
      },
      {
        "id": "b",
        "label": "Request a Redis-backed Sliding Window Log or Token Bucket algorithm with distributed atomicity (Lua script) and proper standard HTTP 429 Retry-After headers."
      },
      {
        "id": "c",
        "label": "Block all user requests after 5:00 PM."
      },
      {
        "id": "d",
        "label": "Sleep for 10 seconds inside every incoming HTTP request handler."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_lit_14",
    "section": "literacy",
    "prompt": "What prompt constraint ensures an AI creates idiomatic, performant React / Next.js functional components?",
    "options": [
      {
        "id": "a",
        "label": "Specify React 19 Server vs Client component boundaries, proper hook dependency arrays, memoization (`useMemo`/`useCallback`) where computationally justified, and strict accessibility (ARIA) attributes."
      },
      {
        "id": "b",
        "label": "Instruct the AI to use class components and direct DOM manipulation with `document.getElementById`."
      },
      {
        "id": "c",
        "label": "Put all component state in a single global `window` object."
      },
      {
        "id": "d",
        "label": "Avoid TypeScript and use `any` for all props."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_lit_15",
    "section": "literacy",
    "prompt": "When generating database migration scripts with an LLM, what critical production safety rule must be verified?",
    "options": [
      {
        "id": "a",
        "label": "Drop and recreate tables during peak business traffic hours."
      },
      {
        "id": "b",
        "label": "Remove all foreign key constraints permanently."
      },
      {
        "id": "c",
        "label": "Run migrations without transaction blocks."
      },
      {
        "id": "d",
        "label": "Ensure zero-downtime compatibility: separate column addition from backfilling, avoid long-lived exclusive table locks on multi-million row tables, and provide rollback scripts."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_lit_16",
    "section": "literacy",
    "prompt": "How should an engineer prompt an AI to design a webhook delivery engine with exponential backoff and jitter?",
    "options": [
      {
        "id": "a",
        "label": "Retry failing webhooks in a tight while-true loop every millisecond."
      },
      {
        "id": "b",
        "label": "Discard failed webhooks immediately without notification."
      },
      {
        "id": "c",
        "label": "Specify persistent queue storage, idempotent payload signing (HMAC-SHA256), capped exponential backoff with full randomized jitter, and dead-letter queue (DLQ) routing upon exhaustion."
      },
      {
        "id": "d",
        "label": "Send webhooks over unencrypted HTTP GET parameters."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_lit_17",
    "section": "literacy",
    "prompt": "What prompt instruction prevents an AI coding assistant from generating hallucinated third-party dependencies?",
    "options": [
      {
        "id": "a",
        "label": "\"Install 10 random packages from npm to solve the problem.\""
      },
      {
        "id": "b",
        "label": "\"Use only standard built-in library modules and explicitly listed existing project dependencies from package.json/pyproject.toml; do NOT invent new package names.\""
      },
      {
        "id": "c",
        "label": "\"Assume all imaginable utilities exist as public packages.\""
      },
      {
        "id": "d",
        "label": "\"Download untrusted binary files from external URLs at runtime.\""
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_lit_18",
    "section": "literacy",
    "prompt": "When using an LLM to generate GraphQL schemas and resolvers, what key vulnerability must be guarded against?",
    "options": [
      {
        "id": "a",
        "label": "Unbounded query depth and circular relation queries causing resource exhaustion; query complexity analysis and depth limiting must be enforced."
      },
      {
        "id": "b",
        "label": "GraphQL cannot be executed on Linux servers."
      },
      {
        "id": "c",
        "label": "GraphQL queries always bypass HTTPS encryption."
      },
      {
        "id": "d",
        "label": "Resolvers cannot connect to SQL databases."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_lit_19",
    "section": "literacy",
    "prompt": "How should a developer prompt an AI to generate end-to-end (E2E) integration tests in Playwright or Cypress?",
    "options": [
      {
        "id": "a",
        "label": "Use arbitrary `sleep(10000)` calls instead of explicit condition waits."
      },
      {
        "id": "b",
        "label": "Rely on coordinates and hardcoded pixel clicks."
      },
      {
        "id": "c",
        "label": "Run tests only against production databases with live customer records."
      },
      {
        "id": "d",
        "label": "Specify user journey steps, stable data-testid selectors rather than brittle CSS paths, explicit network request interception/mocking, and deterministic database fixtures."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_lit_20",
    "section": "literacy",
    "prompt": "What is the most reliable way to use an AI assistant for code review before opening a Pull Request?",
    "options": [
      {
        "id": "a",
        "label": "Ask the AI if the code looks nice and approve the PR automatically."
      },
      {
        "id": "b",
        "label": "Have the AI rewrite all commit author names."
      },
      {
        "id": "c",
        "label": "Prompt the AI to act as a senior staff engineer, checking for security vulnerabilities (OWASP Top 10), performance bottlenecks, anti-patterns, edge-case exceptions, and API breaking changes against a diff."
      },
      {
        "id": "d",
        "label": "Skip human review if the AI gives a thumbs-up emoji."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_lit_21",
    "section": "literacy",
    "prompt": "When prompting an AI to build a resilient WebSocket connection manager, which features are mandatory?",
    "options": [
      {
        "id": "a",
        "label": "Infinite synchronous retry loops that freeze the browser UI."
      },
      {
        "id": "b",
        "label": "Heartbeat ping/pong health checks, automated reconnection with backoff, offline message queue buffering, and connection state machine handlers."
      },
      {
        "id": "c",
        "label": "Opening 50 simultaneous WebSocket connections per browser tab."
      },
      {
        "id": "d",
        "label": "Ignoring disconnect events and continuing to send payloads into closed sockets."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_lit_22",
    "section": "literacy",
    "prompt": "How should a software engineer prompt an LLM to generate a secure JWT authentication middleware?",
    "options": [
      {
        "id": "a",
        "label": "Enforce asymmetric signature verification (RS256/ES256), explicit algorithm whitelisting (preventing `alg: none` attacks), token expiration validation, and issuer/audience verification."
      },
      {
        "id": "b",
        "label": "Accept tokens without signature verification as long as the payload contains a user ID."
      },
      {
        "id": "c",
        "label": "Store private cryptographic signing keys directly inside client JavaScript files."
      },
      {
        "id": "d",
        "label": "Set JWT token expiration to 100 years."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_lit_23",
    "section": "literacy",
    "prompt": "When asking an AI to optimize Docker container build times, which architectural practices should be requested?",
    "options": [
      {
        "id": "a",
        "label": "Copying the entire root directory including `node_modules` and `.git` into every layer."
      },
      {
        "id": "b",
        "label": "Running containers with root privileges to bypass permission checks."
      },
      {
        "id": "c",
        "label": "Installing full desktop GUI environments inside production microservices."
      },
      {
        "id": "d",
        "label": "Multi-stage builds, strategic layer caching (copying dependency manifests before source code), `.dockerignore` pruning, and minimal distroless/alpine runtime base images."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_lit_24",
    "section": "literacy",
    "prompt": "How should a developer prompt an AI to design a distributed lock mechanism using Redis?",
    "options": [
      {
        "id": "a",
        "label": "Use standard non-atomic GET and SET operations across independent requests."
      },
      {
        "id": "b",
        "label": "Acquire locks without expiration timeouts so resources remain locked indefinitely on crash."
      },
      {
        "id": "c",
        "label": "Use atomic commands (`SET resource_key my_random_value NX PX 30000`), verify value ownership with Lua scripts upon release, and specify lock renewal/heartbeat mechanisms (Redlock pattern)."
      },
      {
        "id": "d",
        "label": "Store locks in local in-memory variables on separate load-balanced servers."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_lit_25",
    "section": "literacy",
    "prompt": "When generating infrastructure-as-code (Terraform / CloudFormation) with AI, what practice prevents destructive state drift?",
    "options": [
      {
        "id": "a",
        "label": "Apply changes directly to production cloud infrastructure without planning."
      },
      {
        "id": "b",
        "label": "Pin provider versions, enforce resource lifecycle rules (`prevent_destroy` on databases), separate state into remote backend locks (S3 + DynamoDB), and run `terraform plan` reviews."
      },
      {
        "id": "c",
        "label": "Store Terraform state files in public GitHub repositories."
      },
      {
        "id": "d",
        "label": "Hardcode AWS root access keys directly inside `.tf` files."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_lit_26",
    "section": "literacy",
    "prompt": "How should a developer prompt an LLM to generate accessible (WCAG 2.1 AA) UI components?",
    "options": [
      {
        "id": "a",
        "label": "Mandate keyboard navigation support (Tab/Enter/Space/Escape), appropriate ARIA roles and live regions, color contrast compliance, and semantic HTML elements."
      },
      {
        "id": "b",
        "label": "Build interactive buttons using unstyled `<div>` tags without keyboard event handlers."
      },
      {
        "id": "c",
        "label": "Remove all focus outline rings to make the UI look cleaner."
      },
      {
        "id": "d",
        "label": "Hide all text inside rasterized PNG images."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "dev_lit_27",
    "section": "literacy",
    "prompt": "When refactoring a large code repository with AI, why is an iterative \"Strangler Fig\" approach preferable to full rewrites?",
    "options": [
      {
        "id": "a",
        "label": "It deletes the entire existing codebase in one giant commit."
      },
      {
        "id": "b",
        "label": "It requires zero regression testing."
      },
      {
        "id": "c",
        "label": "It eliminates the need for version control."
      },
      {
        "id": "d",
        "label": "It incrementally replaces specific subcomponents behind feature flags and routing proxies, validating each piece in production with continuous rollback capability."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "dev_lit_28",
    "section": "literacy",
    "prompt": "How should an engineer prompt an AI to design a fault-tolerant message consumer (e.g., Kafka / SQS)?",
    "options": [
      {
        "id": "a",
        "label": "Auto-commit message offsets before processing begins."
      },
      {
        "id": "b",
        "label": "Crash the entire server process whenever a single message fails."
      },
      {
        "id": "c",
        "label": "Enforce manual offset commits after successful processing, idempotent message deduplication, dead-letter queue (DLQ) retry policies, and graceful shutdown signal handlers."
      },
      {
        "id": "d",
        "label": "Process messages in memory without persisting acknowledgment status."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "dev_lit_29",
    "section": "literacy",
    "prompt": "What prompt constraint ensures an AI creates secure SQL queries that prevent SQL injection vulnerabilities?",
    "options": [
      {
        "id": "a",
        "label": "\"Use string interpolation to insert variables directly into SQL statements.\""
      },
      {
        "id": "b",
        "label": "\"Strictly use parameterized queries / prepared statements with typed placeholders; NEVER concatenate raw user input into SQL query strings.\""
      },
      {
        "id": "c",
        "label": "\"Disable database user authentication.\""
      },
      {
        "id": "d",
        "label": "\"Execute raw SQL strings passed directly from frontend URL parameters.\""
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "dev_lit_30",
    "section": "literacy",
    "prompt": "What is the benchmark of an AI-literate software developer in modern engineering teams?",
    "options": [
      {
        "id": "a",
        "label": "A craftsman who leverages AI to amplify productivity while rigorously validating correctness, enforcing architectural elegance, ensuring security compliance, and maintaining deep systems ownership."
      },
      {
        "id": "b",
        "label": "A programmer who accepts all AI completions without reading the generated code."
      },
      {
        "id": "c",
        "label": "A developer who refuses to use automated testing."
      },
      {
        "id": "d",
        "label": "An engineer who deploys unverified AI code straight to production."
      }
    ],
    "correctOptionId": "a"
  }
];

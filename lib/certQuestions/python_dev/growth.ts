import { CertQuestion } from '../types';

export const PYTHON_DEV_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: "pydev_grow_01",
    section: "growth",
    prompt: "When profiling Python applications to identify performance and memory bottlenecks in production, which tooling suite provides deterministic flamegraphs and line-by-line analysis?",
    options: [
      { id: "a", label: "Adding `print('checkpoint')` statements before and after every line." },
      { id: "b", label: "Guessing based on the line length of functions." },
      { id: "c", label: "`cProfile` with SnakeViz, or sampling profilers like `py-spy` and `memray`." },
      { id: "d", label: "Running the script inside a browser console." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_grow_02",
    section: "growth",
    prompt: "What is the primary trade-off between Python's `threading` module and `asyncio` for I/O-bound network services?",
    options: [
      { id: "a", label: "`threading` is 100x faster than C++ while `asyncio` only works on Linux." },
      { id: "b", label: "`asyncio` uses single-threaded cooperative multitasking with minimal memory overhead per connection, whereas `threading` uses OS threads with higher context-switching overhead." },
      { id: "c", label: "`asyncio` executes Python code directly on the GPU." },
      { id: "d", label: "`threading` does not support network connections." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_grow_03",
    section: "growth",
    prompt: "How does the `tenacity` library in Python implement resilient network retry strategies for unreliable third-party REST APIs?",
    options: [
      { id: "a", label: "Spawns 50 duplicate requests simultaneously to overwhelm the remote server." },
      { id: "b", label: "Automatically fixes invalid API request payloads." },
      { id: "c", label: "Bypasses HTTP status 500 errors by forging 200 OK responses." },
      { id: "d", label: "Provides declarative retry decorators with configurable exponential backoff, maximum attempts, random jitter, and retry-on-specific-exception filtering." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_grow_04",
    section: "growth",
    prompt: "When building high-speed data validation and serialization microservices in Python, why is Pydantic v2 significantly faster than v1?",
    options: [
      { id: "a", label: "Pydantic v2 rewrote its core validation and JSON parsing engine in Rust (`pydantic-core`), delivering 5x to 50x performance gains." },
      { id: "b", label: "It removes all runtime type checks completely." },
      { id: "c", label: "It compiles Python scripts into Java JAR files." },
      { id: "d", label: "It runs only on quantum processors." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_grow_05",
    section: "growth",
    prompt: "In Python CI/CD workflows, what is the purpose of running `mypy --strict` alongside formatters like `ruff`?",
    options: [
      { id: "a", label: "Compiles Python code into an installable `.exe` file." },
      { id: "b", label: "Enforces strict static type safety across the entire codebase to catch type bugs, None-pointer dereferences, and missing return values before deployment." },
      { id: "c", label: "Tests network firewall throughput." },
      { id: "d", label: "Checks if the code has more than 1,000 lines." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_grow_06",
    section: "growth",
    prompt: "How should database connection pooling be managed in async Python applications (e.g. `asyncpg` or `SQLAlchemy[asyncio]`)?",
    options: [
      { id: "a", label: "Open a brand new database connection on every single SQL query and never close it." },
      { id: "b", label: "Store all database records in a global Python dictionary in RAM." },
      { id: "c", label: "Initialize a shared connection pool during application startup (lifespan) and acquire/release connections per request, avoiding expensive per-query TCP handshakes." },
      { id: "d", label: "Share a single raw socket without locking across 50 concurrent async tasks." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_grow_07",
    section: "growth",
    prompt: "What is the benefit of using `structlog` or standard JSON logging formatters in containerized Python applications deployed on AWS/GCP/Kubernetes?",
    options: [
      { id: "a", label: "Outputs structured JSON logs with contextual key-value pairs (e.g. `user_id`, `request_id`, `duration_ms`), enabling rapid querying in Datadog/CloudWatch." },
      { id: "b", label: "Reduces log file sizes by encrypting all text into unreadable binary." },
      { id: "c", label: "Sends SMS alerts to the engineering manager on every log message." },
      { id: "d", label: "Deletes application logs after 5 seconds." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_grow_08",
    section: "growth",
    prompt: "When distributing a reusable Python library or internal package across an organization, what modern standard configuration file is used?",
    options: [
      { id: "a", label: "A Windows batch file named `install.bat`." },
      { id: "b", label: "Zipping the `.git` folder and emailing it to teammates." },
      { id: "c", label: "A legacy `Makefile` with hardcoded local paths." },
      { id: "d", label: "`pyproject.toml` complying with PEP 517 / PEP 621 standards for build tools like Hatch, Flit, or Poetry." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_grow_09",
    section: "growth",
    prompt: "In Python microservices, what is the Circuit Breaker pattern and how does it prevent cascading failures?",
    options: [
      { id: "a", label: "Temporarily trips and fails fast when a downstream service fails repeatedly, preventing worker resource exhaustion until the downstream recovers." },
      { id: "b", label: "A hardware electrical breaker on the physical server rack." },
      { id: "c", label: "An infinite loop that retries failed requests without stopping." },
      { id: "d", label: "A firewall rule that bans all outgoing traffic permanently." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_grow_010",
    section: "growth",
    prompt: "How does property-based testing with the `hypothesis` library in Python discover elusive edge cases in business logic?",
    options: [
      { id: "a", label: "Rewrites the Python interpreter in C." },
      { id: "b", label: "Only tests with a single hardcoded happy-path string." },
      { id: "c", label: "Generates hundreds of randomized, edge-case inputs (e.g. empty strings, extreme Unicode, huge numbers, NaN) and asserts invariant properties hold true." },
      { id: "d", label: "Checks if the Python license is valid." }
    ],
    correctOptionId: "c"
  }
];

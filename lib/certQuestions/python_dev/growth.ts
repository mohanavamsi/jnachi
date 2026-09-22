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
    id: "pydev_grow_10",
    section: "growth",
    prompt: "How does property-based testing with the `hypothesis` library in Python discover elusive edge cases in business logic?",
    options: [
      { id: "a", label: "Rewrites the Python interpreter in C." },
      { id: "b", label: "Only tests with a single hardcoded happy-path string." },
      { id: "c", label: "Generates hundreds of randomized, edge-case inputs (e.g. empty strings, extreme Unicode, huge numbers, NaN) and asserts invariant properties hold true." },
      { id: "d", label: "Checks if the Python license is valid." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_grow_11",
    section: "growth",
    prompt: "Which standard library module should be used to trace and pinpoint memory leaks and memory block allocations in Python applications?",
    options: [
      { id: "a", label: "`sys.exit`." },
      { id: "b", label: "`tracemalloc` (using `tracemalloc.start()` and comparing snapshots with `snapshot.compare_to()`)." },
      { id: "c", label: "`math.isclose`." },
      { id: "d", label: "`keyword`." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_grow_12",
    section: "growth",
    prompt: "How does Python's cyclic garbage collector handle reference cycles between objects (e.g., Object A references B, and B references A)?",
    options: [
      { id: "a", label: "CPython crashes immediately with a segmentation fault." },
      { id: "b", label: "It ignores cycles, leaking memory permanently unless the process restarts." },
      { id: "c", label: "The generational cyclic garbage collector (`gc` module) periodically detects unreachable isolated subgraphs and frees their memory." },
      { id: "d", label: "It writes circular references to disk swap space." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_grow_13",
    section: "growth",
    prompt: "Why is `orjson` significantly faster than the standard library `json` module for serialization in high-throughput Python web services?",
    options: [
      { id: "a", label: "It skips UTF-8 string encoding." },
      { id: "b", label: "It serializes only boolean values." },
      { id: "c", label: "It compresses JSON with ZIP encryption." },
      { id: "d", label: "It is written in optimized Rust/C and natively serializes `dataclasses`, `datetime`, and UUID objects directly to `bytes` without intermediate Python objects." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_grow_14",
    section: "growth",
    prompt: "In modern Python 3.11+, how should asynchronous task execution be bounded with a strict timeout without leaving dangling background coroutines?",
    options: [
      { id: "a", label: "`async with asyncio.timeout(delay_seconds): await async_task()`" },
      { id: "b", label: "Calling `time.sleep(delay_seconds)` before awaiting the task." },
      { id: "c", label: "Setting a timer in a separate background thread that calls `os.kill()`." },
      { id: "d", label: "Wrapping the call in an unhandled while loop." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_grow_15",
    section: "growth",
    prompt: "When writing native Rust extensions for performance-critical Python algorithms, which framework provides seamless type conversions and Python bindings?",
    options: [
      { id: "a", label: "React Native." },
      { id: "b", label: "`PyO3` combined with `maturin`." },
      { id: "c", label: "Django templates." },
      { id: "d", label: "`pipenv`." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_grow_16",
    section: "growth",
    prompt: "How does distributed tracing with OpenTelemetry (`opentelemetry-sdk`) help diagnose latency in complex Python microservice architectures?",
    options: [
      { id: "a", label: "It translates Python code to JavaScript." },
      { id: "b", label: "It disables network timeouts across all HTTP calls." },
      { id: "c", label: "It propagates trace and span contexts across network boundaries, generating end-to-end visualization of request latency across services and databases." },
      { id: "d", label: "It increases server CPU clock speeds dynamically." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_grow_17",
    section: "growth",
    prompt: "Why has `ruff` rapidly replaced combinations of `flake8`, `black`, `isort`, and `pyupgrade` in modern Python toolchains?",
    options: [
      { id: "a", label: "Ruff is written in Rust and runs 10x to 100x faster than traditional Python-based linters while offering unified rule configuration." },
      { id: "b", label: "Ruff compiles Python into mobile applications." },
      { id: "c", label: "Ruff removes the need for type annotations." },
      { id: "d", label: "Ruff is exclusively cloud-hosted." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_grow_18",
    section: "growth",
    prompt: "When scaling a production Python web application with `gunicorn` and `uvicorn` workers, what is the standard formula for sizing worker count on a dedicated server?",
    options: [
      { id: "a", label: "1 worker per 1,000,000 registered users." },
      { id: "b", label: "`workers = (2 * CPU_cores) + 1` as a baseline recommendation, adjusted for memory footprint and I/O concurrency." },
      { id: "c", label: "Always hardcode exactly 1 worker regardless of core count." },
      { id: "d", label: "1 worker per database table." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_grow_19",
    section: "growth",
    prompt: "In Python testing, what is the role of mutation testing tools like `mutmut`?",
    options: [
      { id: "a", label: "Compresses unit test files." },
      { id: "b", label: "Generates HTML documentation from code comments." },
      { id: "c", label: "Introduces deliberate small bugs (mutations) into source code to verify whether existing unit tests catch them, measuring test suite efficacy beyond code coverage." },
      { id: "d", label: "Converts unit tests to integration tests." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_grow_20",
    section: "growth",
    prompt: "How does vectorization in NumPy achieve 100x-300x speedups over pure Python `for` loops on large numeric arrays?",
    options: [
      { id: "a", label: "Executes array operations in contiguous C-level memory blocks using optimized SIMD CPU instructions, avoiding Python interpreter per-element overhead." },
      { id: "b", label: "Deletes array elements that are equal to zero." },
      { id: "c", label: "Compiles Python loops into JavaScript." },
      { id: "d", label: "Uploads calculations to a remote cloud server." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_grow_21",
    section: "growth",
    prompt: "When managing database schema evolution in enterprise Python codebases, what tool is standard for automated version-controlled migrations with SQLAlchemy?",
    options: [
      { id: "a", label: "Manually typing `ALTER TABLE` in a live production console." },
      { id: "b", label: "`alembic` (with autogenerate migration revisions and rollback support)." },
      { id: "c", label: "Dropping the database on every deployment." },
      { id: "d", label: "Using CSV files instead of relational databases." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_grow_22",
    section: "growth",
    prompt: "What is the primary architectural purpose of a readiness probe (`/ready`) versus a liveness probe (`/healthz`) in containerized Python Kubernetes pods?",
    options: [
      { id: "a", label: "There is no difference; they are redundant aliases." },
      { id: "b", label: "Readiness checks if the pod can handle incoming traffic (e.g., DB connected, cache warmed); liveness checks if the process is alive or needs a restart." },
      { id: "c", label: "Liveness checks are for databases; readiness is for frontend CSS." },
      { id: "d", label: "Readiness measures CPU temperature; liveness measures network bandwidth." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_grow_23",
    section: "growth",
    prompt: "In Python load testing, which modern developer tool allows defining user swarm behaviors and load ramp-up scenarios using pure Python code?",
    options: [
      { id: "a", label: "Postman GUI." },
      { id: "b", label: "Excel formulas." },
      { id: "c", label: "`locust` (Locust.io)." },
      { id: "d", label: "`sys.bench`." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_grow_24",
    section: "growth",
    prompt: "How does dependency locking with `uv.lock` or `poetry.lock` prevent production outages in Python services?",
    options: [
      { id: "a", label: "Encrypts Python source files with user passwords." },
      { id: "b", label: "Disallows installing third-party packages completely." },
      { id: "c", label: "Compresses all dependencies into a single binary." },
      { id: "d", label: "Records exact package versions, transitive dependency graphs, and cryptographic hashes, guaranteeing deterministic and reproducible builds across environments." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_grow_25",
    section: "growth",
    prompt: "What is the performance advantage of using `cachetools.TTLCache` for caching external API responses in Python?",
    options: [
      { id: "a", label: "Automatically evicts expired entries after a configured Time-To-Live (TTL) and caps maximum memory size, preventing unbounded RAM growth." },
      { id: "b", label: "Stores all cache entries directly in database tables." },
      { id: "c", label: "Deletes old source code files." },
      { id: "d", label: "Encrypts cached data with quantum keys." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_grow_26",
    section: "growth",
    prompt: "When benchmarking critical Python functions, why is `pytest-benchmark` or the `timeit` module preferred over simple `time.time()` measurements?",
    options: [
      { id: "a", label: "`time.time()` cannot measure durations under 1 minute." },
      { id: "b", label: "They run functions thousands of times, disable garbage collection during runs to avoid skew, compute statistical variance, and use high-resolution CPU clocks (`time.perf_counter_ns`)." },
      { id: "c", label: "`pytest-benchmark` modifies function bytecode to run faster." },
      { id: "d", label: "`timeit` runs code on external benchmarking hardware." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_grow_27",
    section: "growth",
    prompt: "In event-driven Python microservices, how does consumer group partitioning in Apache Kafka or RabbitMQ enable horizontal scalability?",
    options: [
      { id: "a", label: "Limits data processing to a single CPU thread." },
      { id: "b", label: "Deletes unread messages automatically." },
      { id: "c", label: "Distributes message partitions across multiple independent consumer worker instances, enabling parallel throughput without message duplication." },
      { id: "d", label: "Sends all events directly to user email addresses." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_grow_28",
    section: "growth",
    prompt: "Why should `PYTHONNODONTWRITEBYTECODE=1` be considered in ephemeral container environments, while standard production servers benefit from `.pyc` files?",
    options: [
      { id: "a", label: "Bytecode `.pyc` files reduce cold-start import time on persistent servers by caching compiled bytecode, while ephemeral one-off jobs avoid disk write overhead." },
      { id: "b", label: "`.pyc` files contain plain text database passwords." },
      { id: "c", label: "Python cannot execute code without `.pyc` files on disk." },
      { id: "d", label: "Bytecode files increase RAM consumption by 10x." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_grow_29",
    section: "growth",
    prompt: "When designing high-throughput data pipelines, why is MessagePack (`msgpack`) or Protocol Buffers preferred over JSON for inter-service communication?",
    options: [
      { id: "a", label: "They are human-readable in plain notepad." },
      { id: "b", label: "They serialize data into compact binary payloads that are 50%-80% smaller and 5x-10x faster to encode/decode than textual JSON." },
      { id: "c", label: "They work without network sockets." },
      { id: "d", label: "They prevent SQL injection vulnerabilities." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_grow_30",
    section: "growth",
    prompt: "How does Blue-Green deployment strategy eliminate downtime during Python backend API service releases?",
    options: [
      { id: "a", label: "Shuts down the production database before deploy." },
      { id: "b", label: "Recompiles Python into C++ on every user request." },
      { id: "c", label: "Deploys the new release to an idle 'Green' environment, runs smoke tests, and instantaneously switches the load balancer router from 'Blue' to 'Green'." },
      { id: "d", label: "Forces all active users to clear their browser cache." }
    ],
    correctOptionId: "c"
  }
];

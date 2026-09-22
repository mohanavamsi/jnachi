import { CertQuestion } from '../types';

export const PYTHON_DEV_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "pydev_aut_01",
    section: "automation",
    prompt: "When automating file system operations across different operating systems (Windows, macOS, Linux) in Python, which library is the modern object-oriented standard?",
    options: [
      { id: "a", label: "`pathlib.Path` providing robust cross-platform path resolution, globbing, and file manipulation." },
      { id: "b", label: "Hardcoding Windows backslash paths (`C:\\\\Users\\\\...`) with manual string splitting." },
      { id: "c", label: "Using `os.system('dir')` and parsing standard output." },
      { id: "d", label: "FTP client scripts executing shell commands." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_02",
    section: "automation",
    prompt: "In modern Python async scripting with `asyncio`, what is the recommended way to run multiple async tasks with structured concurrency in Python 3.11+?",
    options: [
      { id: "a", label: "`async with asyncio.TaskGroup() as tg: tg.create_task(...)` guaranteeing all tasks complete or cancel cleanly on error." },
      { id: "b", label: "Spawning bare background threads using `_thread.start_new_thread()`." },
      { id: "c", label: "Calling `time.sleep()` inside async coroutines." },
      { id: "d", label: "Using infinite recursive coroutine calls without await." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_03",
    section: "automation",
    prompt: "When scraping structured data from web pages in Python, what ethical and technical best practices should automation scripts adhere to?",
    options: [
      { id: "a", label: "Respect `robots.txt`, set an identifying User-Agent header, incorporate rate-limiting delays between requests, and cache fetched responses." },
      { id: "b", label: "Send 10,000 requests per second with no headers to maximize speed." },
      { id: "c", label: "Rotate fake headers to intentionally circumvent anti-DDoS protections without permission." },
      { id: "d", label: "Scrape private password-protected user profile data." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_04",
    section: "automation",
    prompt: "Which Python standard library module is designed for executing external operating system processes, capturing return codes, and piping standard streams safely?",
    options: [
      { id: "a", label: "`subprocess.run(['command', 'arg1'], capture_output=True, check=True)`." },
      { id: "b", label: "`os.popen('command ' + user_input)` without string escaping." },
      { id: "c", label: "`eval('import os; os.system()')`." },
      { id: "d", label: "`sys.exit()`." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_05",
    section: "automation",
    prompt: "When scheduling recurring background automation jobs in Python services, what is the best lightweight tool for in-process cron-like triggers?",
    options: [
      { id: "a", label: "`APScheduler` or `Celery Beat` with persistent message broker backends." },
      { id: "b", label: "An infinite `while True: time.sleep(60)` loop in the main web server thread." },
      { id: "c", label: "Manually pressing Enter in the terminal every hour." },
      { id: "d", label: "Re-running the Python installer on a schedule." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_06",
    section: "automation",
    prompt: "How does `multiprocessing.Pool` or `concurrent.futures.ProcessPoolExecutor` bypass the GIL for CPU-bound Python tasks?",
    options: [
      { id: "a", label: "Spawns separate OS worker processes, each with its own Python interpreter instance and memory space, utilizing multiple physical CPU cores." },
      { id: "b", label: "Runs all calculations on the user's monitor display driver." },
      { id: "c", label: "Converts Python code to assembly at runtime in a single thread." },
      { id: "d", label: "Disables garbage collection permanently." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_07",
    section: "automation",
    prompt: "When designing an automated CLI tool in Python for operations teams, which library provides declarative argument parsing, subcommands, and auto-generated help docs?",
    options: [
      { id: "a", label: "`Typer` (based on Click and type hints) or `argparse`." },
      { id: "b", label: "Manually indexing `sys.argv[1]` with nested string matching." },
      { id: "c", label: "Reading command arguments from a local text file via `input()`." },
      { id: "d", label: "Hardcoding CLI arguments into source code constants." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_08",
    section: "automation",
    prompt: "In Python ETL data pipelines, why is streaming large CSV/JSON datasets with `csv.reader` or `ijson` preferred over `pd.read_csv()` for low-memory environments?",
    options: [
      { id: "a", label: "Processes rows iteratively record-by-record, preventing Out-Of-Memory (OOM) fatal crashes on servers with constrained RAM." },
      { id: "b", label: "Pandas cannot read files larger than 10 Megabytes." },
      { id: "c", label: "Streaming automatically converts all CSV numbers into 3D vectors." },
      { id: "d", label: "Iterative readers write directly to cloud backup without network sockets." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_09",
    section: "automation",
    prompt: "When writing automated integration tests in Python with `pytest`, how are reusable database sessions or authenticated API clients shared cleanly across test functions?",
    options: [
      { id: "a", label: "Using `pytest.fixture` with appropriate scopes (`scope=\"module\"` or `scope=\"function\"`) and `yield` teardown." },
      { id: "b", label: "Using global mutable variables defined in `test_01.py` and imported by `test_02.py`." },
      { id: "c", label: "Hardcoding credentials into every test assert statement." },
      { id: "d", label: "Running all tests sequentially in a single giant monolithic script." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_10",
    section: "automation",
    prompt: "How should long-running automated Python background workers handle graceful shutdown signals (SIGINT / SIGTERM) sent by Kubernetes or Docker?",
    options: [
      { id: "a", label: "Register signal handlers via `signal.signal()` or `asyncio.add_signal_handler()` to stop accepting new work, flush pending queues, and exit cleanly." },
      { id: "b", label: "Ignore all OS signals and let the container orchestrator force-kill (`kill -9`) the process immediately." },
      { id: "c", label: "Delete all database tables before shutting down." },
      { id: "d", label: "Crash immediately with an unhandled exception." }
    ],
    correctOptionId: "a"
  }
];

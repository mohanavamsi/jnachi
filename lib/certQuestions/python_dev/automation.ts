import { CertQuestion } from '../types';

export const PYTHON_DEV_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "pydev_aut_01",
    section: "automation",
    prompt: "When automating file system operations across different operating systems (Windows, macOS, Linux) in Python, which library is the modern object-oriented standard?",
    options: [
      { id: "a", label: "Hardcoding Windows backslash paths (`C:\\\\Users\\\\...`) with manual string splitting." },
      { id: "b", label: "Using `os.system('dir')` and parsing standard output." },
      { id: "c", label: "`pathlib.Path` providing robust cross-platform path resolution, globbing, and file manipulation." },
      { id: "d", label: "FTP client scripts executing shell commands." }
    ],
    correctOptionId: "c"
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
      { id: "a", label: "Send 10,000 requests per second with no headers to maximize speed." },
      { id: "b", label: "Rotate fake headers to intentionally circumvent anti-DDoS protections without permission." },
      { id: "c", label: "Scrape private password-protected user profile data." },
      { id: "d", label: "Respect `robots.txt`, set an identifying User-Agent header, incorporate rate-limiting delays between requests, and cache fetched responses." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_aut_04",
    section: "automation",
    prompt: "Which Python standard library module is designed for executing external operating system processes, capturing return codes, and piping standard streams safely?",
    options: [
      { id: "a", label: "`os.popen('command ' + user_input)` without string escaping." },
      { id: "b", label: "`subprocess.run(['command', 'arg1'], capture_output=True, check=True)`." },
      { id: "c", label: "`eval('import os; os.system()')`." },
      { id: "d", label: "`sys.exit()`." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_aut_05",
    section: "automation",
    prompt: "When scheduling recurring background automation jobs in Python services, what is the best lightweight tool for in-process cron-like triggers?",
    options: [
      { id: "a", label: "An infinite `while True: time.sleep(60)` loop in the main web server thread." },
      { id: "b", label: "Manually pressing Enter in the terminal every hour." },
      { id: "c", label: "`APScheduler` or `Celery Beat` with persistent message broker backends." },
      { id: "d", label: "Re-running the Python installer on a schedule." }
    ],
    correctOptionId: "c"
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
      { id: "a", label: "Manually indexing `sys.argv[1]` with nested string matching." },
      { id: "b", label: "Reading command arguments from a local text file via `input()`." },
      { id: "c", label: "Hardcoding CLI arguments into source code constants." },
      { id: "d", label: "`Typer` (based on Click and type hints) or `argparse`." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_aut_08",
    section: "automation",
    prompt: "In Python ETL data pipelines, why is streaming large CSV/JSON datasets with `csv.reader` or `ijson` preferred over `pd.read_csv()` for low-memory environments?",
    options: [
      { id: "a", label: "Pandas cannot read files larger than 10 Megabytes." },
      { id: "b", label: "Processes rows iteratively record-by-record, preventing Out-Of-Memory (OOM) fatal crashes on servers with constrained RAM." },
      { id: "c", label: "Streaming automatically converts all CSV numbers into 3D vectors." },
      { id: "d", label: "Iterative readers write directly to cloud backup without network sockets." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_aut_09",
    section: "automation",
    prompt: "When writing automated integration tests in Python with `pytest`, how are reusable database sessions or authenticated API clients shared cleanly across test functions?",
    options: [
      { id: "a", label: "Using global mutable variables defined in `test_01.py` and imported by `test_02.py`." },
      { id: "b", label: "Hardcoding credentials into every test assert statement." },
      { id: "c", label: "Using `pytest.fixture` with appropriate scopes (`scope=\"module\"` or `scope=\"function\"`) and `yield` teardown." },
      { id: "d", label: "Running all tests sequentially in a single giant monolithic script." }
    ],
    correctOptionId: "c"
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
  },
  {
    id: "pydev_aut_11",
    section: "automation",
    prompt: "Why is `httpx.AsyncClient` preferred over `requests` for high-concurrency automated web crawling scripts?",
    options: [
      { id: "a", label: "`requests` requires paid enterprise licensing." },
      { id: "b", label: "`httpx.AsyncClient` supports non-blocking asynchronous HTTP/1.1 and HTTP/2 requests within async event loops, reusing TCP connection pools efficiently." },
      { id: "c", label: "`requests` only supports UDP protocol." },
      { id: "d", label: "`httpx` bypasses all web server SSL certificate verifications automatically." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_aut_12",
    section: "automation",
    prompt: "How can a Python automation script efficiently monitor a local directory for newly created or modified files in real-time?",
    options: [
      { id: "a", label: "Calling `os.listdir()` inside a 10ms infinite busy-wait loop." },
      { id: "b", label: "Rebooting the operating system whenever a file arrives." },
      { id: "c", label: "Using the `watchdog` library to subscribe to OS native filesystem event notifications (inotify, FSEvents, ReadDirectoryChangesW)." },
      { id: "d", label: "Comparing the file size of the entire hard drive on every clock cycle." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_aut_13",
    section: "automation",
    prompt: "In Python 3.11+, which standard library module is used to natively parse TOML configuration files without external dependencies?",
    options: [
      { id: "a", label: "`configparser`." },
      { id: "b", label: "`json` with a TOML preprocessor flag." },
      { id: "c", label: "`sys.toml`." },
      { id: "d", label: "`tomllib` (using `tomllib.load()` or `tomllib.loads()`)." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_aut_14",
    section: "automation",
    prompt: "How should an automated Python script limit the maximum number of concurrent HTTP requests to prevent triggering rate limits on target APIs?",
    options: [
      { id: "a", label: "Use `asyncio.Semaphore(value=N)` as an async context manager around request calls." },
      { id: "b", label: "Insert `time.sleep(100)` after every single character sent over the socket." },
      { id: "c", label: "Change the computer's MAC address before each request." },
      { id: "d", label: "Use multiple nested try/except blocks." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_15",
    section: "automation",
    prompt: "When automating browser workflows for JavaScript-heavy dynamic single-page applications, which modern Python framework provides resilient auto-waiting and browser context isolation?",
    options: [
      { id: "a", label: "`urllib.request` with regular expressions." },
      { id: "b", label: "`playwright` (Playwright for Python)." },
      { id: "c", label: "Raw telnet sockets connected to port 80." },
      { id: "d", label: "`tkinter` web viewer widgets." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_aut_16",
    section: "automation",
    prompt: "What is the recommended approach for creating isolated temporary directories in Python that are automatically cleaned up upon script completion or error?",
    options: [
      { id: "a", label: "Manually creating a folder in `C:\\temp` and hoping the user deletes it later." },
      { id: "b", label: "Writing temporary files directly into the root OS `/bin` folder." },
      { id: "c", label: "Using `with tempfile.TemporaryDirectory() as tmp_dir:` from the standard library `tempfile` module." },
      { id: "d", label: "Disabling disk caching in the OS kernel." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_aut_17",
    section: "automation",
    prompt: "When writing automated producer-consumer pipelines in Python `asyncio`, what primitive ensures safe asynchronous work distribution between tasks?",
    options: [
      { id: "a", label: "A shared standard Python list without locks (`list.append` and `list.pop`)." },
      { id: "b", label: "Writing items to a text file on disk and polling line counts." },
      { id: "c", label: "Global integer counters updated with `+= 1`." },
      { id: "d", label: "`asyncio.Queue` with `await queue.put()` and `await queue.get()` / `queue.task_done()`." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_aut_18",
    section: "automation",
    prompt: "In automated testing with `unittest.mock`, how do you mock an asynchronous function or coroutine in Python 3.8+?",
    options: [
      { id: "a", label: "Use `unittest.mock.AsyncMock` which can be awaited and returns an awaitable result." },
      { id: "b", label: "Replace the function with `None`." },
      { id: "c", label: "Pass a synchronous lambda that returns `False`." },
      { id: "d", label: "Async functions cannot be mocked in Python." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_19",
    section: "automation",
    prompt: "How can Python scripts automate spreadsheet generation and cell styling for executive reports without requiring Microsoft Excel installed?",
    options: [
      { id: "a", label: "Writing raw binary Word documents." },
      { id: "b", label: "Using `openpyxl` or `xlsxwriter` to build `.xlsx` workbooks, format cells, and apply formulas programmatically." },
      { id: "c", label: "Taking terminal screenshots and saving as PNG." },
      { id: "d", label: "Exporting raw HTML tables renamed with a `.xls` extension." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_aut_20",
    section: "automation",
    prompt: "When automating database operations, what is the primary benefit of batching 10,000 inserts using `session.bulk_insert_mappings()` or `cursor.executemany()` versus a single-row loop?",
    options: [
      { id: "a", label: "Converts strings to uppercase automatically." },
      { id: "b", label: "Allows bypassing database foreign key constraints." },
      { id: "c", label: "Reduces network round-trips from 10,000 individual transactions down to a single optimized multi-row SQL payload, speeding execution by 50x-100x." },
      { id: "d", label: "Deletes old database records before inserting new ones." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_aut_21",
    section: "automation",
    prompt: "Which Python standard library module is used to construct multipart MIME email messages with HTML formatting and file attachments for automated alerting?",
    options: [
      { id: "a", label: "`email.message.EmailMessage` and `smtplib`." },
      { id: "b", label: "`http.client`." },
      { id: "c", label: "`socket.raw_mail`." },
      { id: "d", label: "`urllib.parse`." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_22",
    section: "automation",
    prompt: "How can an automated Python daemon monitor system CPU, memory, and disk utilization metrics across server instances?",
    options: [
      { id: "a", label: "Parsing `/etc/hosts` in an infinite loop." },
      { id: "b", label: "Using the cross-platform `psutil` library (`psutil.cpu_percent()`, `psutil.virtual_memory()`, `psutil.disk_usage()`)." },
      { id: "c", label: "Calculating the execution time of `math.sqrt()`." },
      { id: "d", label: "Checking the file size of the Python executable." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_aut_23",
    section: "automation",
    prompt: "When automating remote server deployment or file transfer over SSH in Python scripts, which library provides programmatic SSH/SFTP client capabilities?",
    options: [
      { id: "a", label: "`ctypes`." },
      { id: "b", label: "`webbrowser`." },
      { id: "c", label: "`paramiko` (or `asyncssh` for async workflows)." },
      { id: "d", label: "`dis`." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_aut_24",
    section: "automation",
    prompt: "In Python ETL scripts, how can you ensure idempotency when ingesting hourly batch files into a target data warehouse?",
    options: [
      { id: "a", label: "Append all rows unconditionally on every run." },
      { id: "b", label: "Delete the target database table and recreate it from scratch on every run." },
      { id: "c", label: "Ignore primary key violations and suppress database errors." },
      { id: "d", label: "Track processed batch IDs or hashes in an audit metadata table and use upsert/merge logic keyed on deterministic batch identifiers." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_aut_25",
    section: "automation",
    prompt: "What is the recommended approach for creating and extracting `.zip` archives with high compression in Python automation scripts?",
    options: [
      { id: "a", label: "Using the standard `zipfile.ZipFile` module with `compression=zipfile.ZIP_DEFLATED` or `ZIP_BZIP2`." },
      { id: "b", label: "Calling 7-Zip via an unquoted shell command." },
      { id: "c", label: "Renaming a folder to `.zip` using `os.rename()`." },
      { id: "d", label: "Compressing strings with base64." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_26",
    section: "automation",
    prompt: "How does `concurrent.futures.ThreadPoolExecutor` differ from `ProcessPoolExecutor` when automating I/O-bound tasks like downloading 500 image URLs?",
    options: [
      { id: "a", label: "`ThreadPoolExecutor` requires 8GB RAM per thread." },
      { id: "b", label: "`ThreadPoolExecutor` shares the same process memory space and avoids heavy process creation overhead, making it ideal for network I/O waiting." },
      { id: "c", label: "`ProcessPoolExecutor` cannot perform network requests." },
      { id: "d", label: "They are completely interchangeable with identical OS resource profiles." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_aut_27",
    section: "automation",
    prompt: "When parsing HTML tables or unformatted DOM trees in scraping scripts, what makes `BeautifulSoup(html, 'lxml')` robust against malformed HTML?",
    options: [
      { id: "a", label: "It compiles HTML into C# classes." },
      { id: "b", label: "It deletes all CSS tags automatically." },
      { id: "c", label: "The `lxml` parser engine handles unclosed tags, messy nesting, and encoding quirks gracefully while executing significantly faster than built-in `html.parser`." },
      { id: "d", label: "It turns HTML into PDF documents automatically." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_aut_28",
    section: "automation",
    prompt: "In Python automation, why should you use `shutil.copy2()` instead of `shutil.copy()` when archiving files?",
    options: [
      { id: "a", label: "`shutil.copy2()` compresses the file." },
      { id: "b", label: "`shutil.copy2()` converts the file to markdown." },
      { id: "c", label: "`shutil.copy2()` deletes the source file after copy." },
      { id: "d", label: "`shutil.copy2()` preserves original file metadata including creation timestamps, last modified times, and file permission flags." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_aut_29",
    section: "automation",
    prompt: "How can Python CLI automation scripts cleanly return exit codes to notify calling CI/CD pipelines of success or failure?",
    options: [
      { id: "a", label: "`sys.exit(0)` for successful completion and non-zero (e.g. `sys.exit(1)`) for errors." },
      { id: "b", label: "Printing `'ERROR'` to stdout." },
      { id: "c", label: "Raising `KeyboardInterrupt`." },
      { id: "d", label: "Creating an empty file named `success.txt`." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_aut_30",
    section: "automation",
    prompt: "When automating PDF invoice parsing in Python, which modern library extracts structured text, tables, and form fields accurately?",
    options: [
      { id: "a", label: "Reading the PDF file as a raw text string with `open(..., 'r')`." },
      { id: "b", label: "`pdfplumber` or `pypdf` with table extraction extractors." },
      { id: "c", label: "`json.loads()`." },
      { id: "d", label: "`math.sin()`." }
    ],
    correctOptionId: "b"
  }
];

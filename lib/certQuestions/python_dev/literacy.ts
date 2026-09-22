import { CertQuestion } from '../types';

export const PYTHON_DEV_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "pydev_lit_01",
    section: "literacy",
    prompt: "In modern Python 3.10+, what is the recommended and idiomatic way to express structural pattern matching for complex dictionary or object dispatching?",
    options: [
      { id: "a", label: "Chaining 25 nested `if/elif/else` statements using string equality." },
      { id: "b", label: "Using the `match / case` syntax with pattern guards and sequence/mapping destructuring." },
      { id: "c", label: "Executing dynamically created strings with `exec()`." },
      { id: "d", label: "Catching `KeyError` exceptions inside recursive `try/except` ladders." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_02",
    section: "literacy",
    prompt: "When defining typed data structures in Python, what is the primary advantage of `@dataclass(slots=True, frozen=True)` over a standard mutable class?",
    options: [
      { id: "a", label: "Provides immutability (hashability), automatic `__init__`/`__repr__`, faster attribute access, and significantly lower memory footprint via `__slots__`." },
      { id: "b", label: "Automatically connects to a PostgreSQL database on instantiation." },
      { id: "c", label: "Compiles Python bytecode into native x86 machine assembly." },
      { id: "d", label: "Disables all type hints in static type checkers like mypy." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_lit_03",
    section: "literacy",
    prompt: "What is the memory and performance benefit of using generator expressions and `yield` over list comprehensions when processing multi-gigabyte log files?",
    options: [
      { id: "a", label: "Generators permanently delete logs from disk as they are read." },
      { id: "b", label: "Generators bypass the Python Global Interpreter Lock (GIL) automatically." },
      { id: "c", label: "Generators compress string data into binary zip files." },
      { id: "d", label: "Generators evaluate items lazily on-demand (O(1) memory consumption) without loading the entire dataset into RAM simultaneously." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_lit_04",
    section: "literacy",
    prompt: "In Python type hinting, how should a function signature indicate that an argument can either be a `str`, `None`, or an `int` in Python 3.10+?",
    options: [
      { id: "a", label: "`def process(val: any(str, int, null)):`" },
      { id: "b", label: "`def process(val: [str, int, void]):`" },
      { id: "c", label: "`def process(val: str | int | None) -> None:`" },
      { id: "d", label: "`def process(val: <str or int or None>):`" }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_lit_05",
    section: "literacy",
    prompt: "What is the purpose of Python's `contextlib.contextmanager` decorator and the `with` statement?",
    options: [
      { id: "a", label: "To run Python scripts in parallel across multiple physical server clusters." },
      { id: "b", label: "To encapsulate resource setup and deterministic cleanup (e.g. file closing, db connections, lock releases) even if unhandled exceptions occur." },
      { id: "c", label: "To prevent variables inside the block from being garbage collected." },
      { id: "d", label: "To disable all runtime assertions and warnings." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_06",
    section: "literacy",
    prompt: "What is the key difference between `is` and `==` in Python?",
    options: [
      { id: "a", label: "`is` checks reference identity (same object in memory), while `==` checks value equality." },
      { id: "b", label: "`is` checks string equality, while `==` checks numeric values." },
      { id: "c", label: "`is` is deprecated in Python 3." },
      { id: "d", label: "They are completely interchangeable in all scenarios." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_lit_07",
    section: "literacy",
    prompt: "How does the `functools.lru_cache` decorator optimize recursive or computationally expensive deterministic functions?",
    options: [
      { id: "a", label: "Converts synchronous functions into multithreaded daemon processes." },
      { id: "b", label: "Writes function outputs directly to a local SQLite database." },
      { id: "c", label: "Memoizes function return values based on positional and keyword arguments, returning cached results for repeat calls with O(1) lookup." },
      { id: "d", label: "Increases the maximum recursion limit to infinity." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_lit_08",
    section: "literacy",
    prompt: "What is the potential hazard of defining mutable default arguments in Python function signatures (e.g. `def add_item(item, items=[])`)?",
    options: [
      { id: "a", label: "Python throws a `SyntaxError` at compile time." },
      { id: "b", label: "The list is automatically converted into an immutable tuple." },
      { id: "c", label: "It causes the Python interpreter to freeze immediately." },
      { id: "d", label: "The default list is instantiated once at function definition time, so mutations persist across all subsequent function calls across the application." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_lit_09",
    section: "literacy",
    prompt: "In Python 3.11+, how does the Exception Groups feature (`try / except*`) enhance asynchronous and concurrent error handling?",
    options: [
      { id: "a", label: "Suppresses all exceptions silently without logging." },
      { id: "b", label: "Allows catching and handling multiple independent exceptions simultaneously that occurred in concurrent tasks (e.g. TaskGroups)." },
      { id: "c", label: "Automatically converts all exceptions into HTTP 200 responses." },
      { id: "d", label: "Restarts the operating system when a fatal exception occurs." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_10",
    section: "literacy",
    prompt: "What is the recommended modern tool for managing Python virtual environments and dependencies deterministically with lockfiles?",
    options: [
      { id: "a", label: "`uv` or `poetry` with a committed lockfile (`uv.lock` / `poetry.lock`)." },
      { id: "b", label: "Installing all packages globally into the system Python directory with `sudo pip install`." },
      { id: "c", label: "Copy-pasting `.py` source files manually between different computers." },
      { id: "d", label: "Editing `sys.path` directly in every Python file with hardcoded absolute paths." }
    ],
    correctOptionId: "a"
  }
];

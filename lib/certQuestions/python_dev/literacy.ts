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
      { id: "a", label: "Automatically connects to a PostgreSQL database on instantiation." },
      { id: "b", label: "Compiles Python bytecode into native x86 machine assembly." },
      { id: "c", label: "Provides immutability (hashability), automatic `__init__`/`__repr__`, faster attribute access, and significantly lower memory footprint via `__slots__`." },
      { id: "d", label: "Disables all type hints in static type checkers like mypy." }
    ],
    correctOptionId: "c"
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
    prompt: "Which Python standard library module is used to safely manage resource cleanup (such as database locks or file handles) using the `with` statement and `@contextmanager`?",
    options: [
      { id: "a", label: "`contextlib`." },
      { id: "b", label: "`sys.lifecycle`." },
      { id: "c", label: "`threading.cleanup`." },
      { id: "d", label: "`os.memory`." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_lit_05",
    section: "literacy",
    prompt: "In Python type hinting, what is the distinction between `typing.Union[str, int]` and `typing.Optional[str]`?",
    options: [
      { id: "a", label: "`Union` is for numbers; `Optional` is for strings." },
      { id: "b", label: "`Optional[str]` is syntactic shorthand for `Union[str, None]` (or `str | None` in Python 3.10+)." },
      { id: "c", label: "`Optional` suppresses all runtime exceptions." },
      { id: "d", label: "`Union` converts types automatically at runtime." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_06",
    section: "literacy",
    prompt: "What does the `functools.lru_cache(maxsize=128)` decorator accomplish when applied to a pure Python function?",
    options: [
      { id: "a", label: "Encrypts function arguments with AES keys." },
      { id: "b", label: "Forces the function to execute asynchronously in a background worker." },
      { id: "c", label: "Caches function return values keyed by arguments with a Least Recently Used eviction strategy to avoid redundant computation." },
      { id: "d", label: "Saves return values permanently into an SQLite database." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_lit_07",
    section: "literacy",
    prompt: "Why should mutable default arguments (like `def process_records(items=[]):`) be avoided in Python function definitions?",
    options: [
      { id: "a", label: "Python will throw a `SyntaxError` on compile." },
      { id: "b", label: "Mutable defaults are evaluated only once at function definition time, causing state mutations to persist across independent function calls." },
      { id: "c", label: "Lists cannot be passed as arguments in Python 3." },
      { id: "d", label: "It causes immediate heap fragmentation and segmentation faults." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_08",
    section: "literacy",
    prompt: "In modern Python 3.8+, what does the walrus operator (`:=`) enable developers to do?",
    options: [
      { id: "a", label: "Assign values to variables as part of a larger expression (e.g. `while (chunk := file.read(8192)):`)." },
      { id: "b", label: "Define abstract base classes." },
      { id: "c", label: "Perform deep copying of dictionaries." },
      { id: "d", label: "Invoke async event loops synchronously." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_lit_09",
    section: "literacy",
    prompt: "How does `typing.TypedDict` improve dictionary typing compared to a plain `dict[str, Any]` in Python?",
    options: [
      { id: "a", label: "Converts dictionaries into C structures." },
      { id: "b", label: "Forces all dictionary keys to be lowercase integers." },
      { id: "c", label: "Provides static type checkers with exact expected key names and specific value types for dictionary payloads." },
      { id: "d", label: "Disables dictionary key deletion." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_lit_10",
    section: "literacy",
    prompt: "When implementing custom exception hierarchies in enterprise Python codebases, what is the best practice?",
    options: [
      { id: "a", label: "Catching `BaseException` and continuing silently." },
      { id: "b", label: "Raising raw string messages instead of exception classes." },
      { id: "c", label: "Inheriting from `sys.exit` directly." },
      { id: "d", label: "Defining a base domain exception inheriting from `Exception` (e.g. `class AppServiceError(Exception): pass`) and creating specific subclasses." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_lit_11",
    section: "literacy",
    prompt: "What does `collections.defaultdict` provide over a standard Python `dict`?",
    options: [
      { id: "a", label: "Automatically initializes missing keys using a factory callable (e.g. `list`, `int`) when accessed, avoiding verbose `if key not in d` checks." },
      { id: "b", label: "Enforces that dictionary keys must be sorted alphabetically." },
      { id: "c", label: "Persists dictionary data to disk on every update." },
      { id: "d", label: "Limits dictionaries to a maximum of 1,000 entries." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_lit_12",
    section: "literacy",
    prompt: "In Python typing, what does `typing.Final` indicate when applied to a variable or class method?",
    options: [
      { id: "a", label: "The variable is deleted after first read." },
      { id: "b", label: "Signals to static type checkers that the variable cannot be reassigned and the method/class cannot be overridden or subclassed." },
      { id: "c", label: "Causes the Python interpreter to terminate immediately." },
      { id: "d", label: "Makes the method callable only from the main thread." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_13",
    section: "literacy",
    prompt: "How does `typing.Protocol` in Python 3.8+ enable structural subtyping (duck typing with static verification)?",
    options: [
      { id: "a", label: "Requires explicit class inheritance (`class Service(Protocol):`)." },
      { id: "b", label: "Converts Python scripts to C header files." },
      { id: "c", label: "Allows static type checkers (mypy) to verify that any class implementing the required methods matches the type without explicit nominal inheritance." },
      { id: "d", label: "Enforces TLS encryption on socket connections." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_lit_14",
    section: "literacy",
    prompt: "What is the difference between `deepcopy()` and `copy()` in Python's standard `copy` module?",
    options: [
      { id: "a", label: "`copy()` is for strings; `deepcopy()` is for numbers." },
      { id: "b", label: "`deepcopy()` deletes the original source object from disk." },
      { id: "c", label: "They perform the exact same operation with zero difference." },
      { id: "d", label: "`copy()` creates a new object with references to nested objects, whereas `deepcopy()` recursively copies all nested objects into fresh memory allocations." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_lit_15",
    section: "literacy",
    prompt: "When writing custom Python decorators that take arguments, what is the standard signature structure?",
    options: [
      { id: "a", label: "A decorator factory function that returns a decorator, which in turn returns a wrapped callable preserving `__name__` via `functools.wraps`." },
      { id: "b", label: "A single lambda function accepting `**kwargs` only." },
      { id: "c", label: "A global variable that modifies `sys.settrace()`." },
      { id: "d", label: "An async generator yielding tuples." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_lit_16",
    section: "literacy",
    prompt: "In Python 3.9+, how can you merge two dictionaries `dict_a` and `dict_b` using the native merge operator?",
    options: [
      { id: "a", label: "`merged = dict_a + dict_b`" },
      { id: "b", label: "`merged = dict_a | dict_b` (or in-place update `dict_a |= dict_b`)" },
      { id: "c", label: "`merged = dict_a.merge(dict_b)`" },
      { id: "d", label: "`merged = dict_a & dict_b`" }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_17",
    section: "literacy",
    prompt: "Why is `isinstance(obj, (int, float))` preferred over `type(obj) == int or type(obj) == float` in Python?",
    options: [
      { id: "a", label: "It runs in constant zero CPU cycles." },
      { id: "b", label: "It converts floats to integers automatically." },
      { id: "c", label: "It correctly handles subclass polymorphism and inheritance hierarchies, whereas direct `type()` equality checks fail on derived classes." },
      { id: "d", label: "`type()` is deprecated in Python 3." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_lit_18",
    section: "literacy",
    prompt: "What is the purpose of `typing.Literal` in Python type annotations?",
    options: [
      { id: "a", label: "Forces strings to be printed in literal uppercase." },
      { id: "b", label: "Translates code into literary prose." },
      { id: "c", label: "Disables all variable reassignments." },
      { id: "d", label: "Constrains a function argument or return value to exact, specific literal values (e.g. `mode: Literal['r', 'w', 'a']`)." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_lit_19",
    section: "literacy",
    prompt: "How does the `itertools.islice()` function process subsets of an infinite or large generator in Python?",
    options: [
      { id: "a", label: "Loads the entire generator into memory before slicing." },
      { id: "b", label: "Lazily slices items without generating or consuming elements beyond the specified stop index." },
      { id: "c", label: "Converts generators into SQLite tables." },
      { id: "d", label: "Deletes every third element from the generator." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_20",
    section: "literacy",
    prompt: "What is the difference between `__str__` and `__repr__` dunder methods on Python classes?",
    options: [
      { id: "a", label: "`__str__` is intended for human-readable end-user display, while `__repr__` should provide an unambiguous developer representation, ideally executable Python code." },
      { id: "b", label: "`__str__` is for integers; `__repr__` is for floats." },
      { id: "c", label: "`__repr__` only works inside Jupyter notebooks." },
      { id: "d", label: "They are exact identical aliases." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_lit_21",
    section: "literacy",
    prompt: "When writing custom iterable classes in Python, which two dunder methods must be implemented to support the iterator protocol?",
    options: [
      { id: "a", label: "`__start__()` and `__end__()`." },
      { id: "b", label: "`__iter__()` returning the iterator object, and `__next__()` returning values and raising `StopIteration` when exhausted." },
      { id: "c", label: "`__open__()` and `__close__()`." },
      { id: "d", label: "`__read__()` and `__write__()`." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_22",
    section: "literacy",
    prompt: "What is the key functionality of Python's `enum.Enum` and `enum.auto()`?",
    options: [
      { id: "a", label: "Compiles Python classes into C++ structs." },
      { id: "b", label: "Deletes duplicate dictionary keys." },
      { id: "c", label: "Creates strongly typed, immutable sets of named symbolic constants with unique values, preventing magic string bugs." },
      { id: "d", label: "Generates automated unit test mocks." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_lit_23",
    section: "literacy",
    prompt: "In Python memory management, how does the `weakref` module help prevent memory leaks in circular data structures (like graph nodes)?",
    options: [
      { id: "a", label: "Creates references to objects without increasing their reference count, allowing the garbage collector to reclaim them when strong references are dropped." },
      { id: "b", label: "Converts strong pointers to disk file handles." },
      { id: "c", label: "Reduces string memory sizes by 50%." },
      { id: "d", label: "Forces objects to remain in memory permanently." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_lit_24",
    section: "literacy",
    prompt: "What does the `@functools.total_ordering` decorator provide when implementing comparison dunder methods on a class?",
    options: [
      { id: "a", label: "Sorts all class attributes alphabetically in memory." },
      { id: "b", label: "Requires implementing all 6 comparison methods manually." },
      { id: "c", label: "Automatically derives `__le__`, `__gt__`, `__ge__`, and `__ne__` if `__eq__` and one ordering method (`__lt__` or other) are defined." },
      { id: "d", label: "Sorts lists in descending order by default." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_lit_25",
    section: "literacy",
    prompt: "How does `typing.ParamSpec` and `typing.Concatenate` in Python 3.10+ improve typing for custom decorators?",
    options: [
      { id: "a", label: "Compiles decorators into machine code." },
      { id: "b", label: "Deletes decorator wrapper overhead." },
      { id: "c", label: "Forces decorators to run in separate threads." },
      { id: "d", label: "Captures and forwards exact callable parameter signatures and return types through higher-order decorator functions." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_lit_26",
    section: "literacy",
    prompt: "What is the purpose of Python's `contextlib.suppress(*exceptions)` context manager?",
    options: [
      { id: "a", label: "Provides a concise and explicit way to ignore specified expected exceptions without writing empty `try/except: pass` blocks." },
      { id: "b", label: "Disables all system logging output." },
      { id: "c", label: "Suppresses compiler warnings at build time." },
      { id: "d", label: "Hides stack traces from user terminal windows." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_lit_27",
    section: "literacy",
    prompt: "In Python 3.10+, what does `zip(iter_a, iter_b, strict=True)` do if `iter_a` and `iter_b` have unequal lengths?",
    options: [
      { id: "a", label: "Zips files using AES-256 encryption." },
      { id: "b", label: "Raises a `ValueError` if the passed iterables are not of identical length, preventing silent data truncation bugs." },
      { id: "c", label: "Compresses lists into `.zip` archives on disk." },
      { id: "d", label: "Forces all elements to be strings." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_lit_28",
    section: "literacy",
    prompt: "Why should `sys.intern()` be used in high-volume Python text processing pipelines handling millions of duplicate strings?",
    options: [
      { id: "a", label: "Translates strings to binary numbers." },
      { id: "b", label: "Deletes whitespace from all strings." },
      { id: "c", label: "Ensures duplicate strings share the same single memory address, reducing memory consumption and enabling O(1) pointer comparison." },
      { id: "d", label: "Uploads strings to an internal web server." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_lit_29",
    section: "literacy",
    prompt: "What is the purpose of Python's `warnings` module compared to standard `logging`?",
    options: [
      { id: "a", label: "Sends push notifications to mobile phones." },
      { id: "b", label: "Writes crash reports to database tables." },
      { id: "c", label: "Validates HTML templates." },
      { id: "d", label: "Informs developers of programmatic conditions (e.g. deprecation notices, type warnings) without halting execution unless configured to raise errors." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_lit_30",
    section: "literacy",
    prompt: "When writing modern modular Python applications, what is the role of `typing.TypeVar` and Generics in creating reusable data structures?",
    options: [
      { id: "a", label: "Enables creating generic classes and functions (e.g. `Repository[T]`) that preserve type safety across different concrete data models." },
      { id: "b", label: "Converts variables into global constants." },
      { id: "c", label: "Eliminates the need for unit tests." },
      { id: "d", label: "Allows code to run in browser environments." }
    ],
    correctOptionId: "a"
  }
];

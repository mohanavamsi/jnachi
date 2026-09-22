import { CertQuestion } from '../types';

export const PYTHON_DEV_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: "pydev_priv_01",
    section: "privacy",
    prompt: "Why is loading untrusted data with Python's standard `pickle.loads()` a severe remote code execution (RCE) vulnerability?",
    options: [
      { id: "a", label: "`pickle` only works on 32-bit operating systems." },
      { id: "b", label: "`pickle` can deserialize arbitrary Python objects, including constructors that invoke `os.system()` or `subprocess`; use `json` or `msgpack` for untrusted payloads." },
      { id: "c", label: "`pickle` deletes the Python standard library on execution." },
      { id: "d", label: "`pickle` is deprecated for non-Latin character sets only." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_priv_02",
    section: "privacy",
    prompt: "How should database queries with dynamic user inputs be constructed in Python to eliminate SQL Injection vulnerabilities?",
    options: [
      { id: "a", label: "Use raw Python string formatting: `f\"SELECT * FROM users WHERE id = {user_input}\"`." },
      { id: "b", label: "Concatenate strings with `+` and disable SQL server error logs." },
      { id: "c", label: "Use parameterized queries / prepared statements (e.g. `cursor.execute('SELECT * FROM users WHERE id = %s', (user_id,))`) or ORM query builders (SQLAlchemy/SQLModel)." },
      { id: "d", label: "Store all user inputs in plaintext global variables before execution." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_priv_03",
    section: "privacy",
    prompt: "What is the secure method for comparing password hashes or secret authentication tokens in Python to prevent timing attacks?",
    options: [
      { id: "a", label: "`hmac.compare_digest(token_a, token_b)` or `secrets.compare_digest()` which executes in constant time." },
      { id: "b", label: "Standard `token_a == token_b` string equality which short-circuits on first mismatched character." },
      { id: "c", label: "Converting both tokens to MD5 strings and comparing lengths." },
      { id: "d", label: "Printing both tokens to console to verify visually." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_priv_04",
    section: "privacy",
    prompt: "Which Python standard library module should always be used for generating cryptographically secure random tokens, passwords, and nonce keys?",
    options: [
      { id: "a", label: "`random.random()` (Mersenne Twister, which is pseudo-random and predictable)." },
      { id: "b", label: "`time.time()` converted to an integer." },
      { id: "c", label: "`math.pi` sliced to 10 decimal digits." },
      { id: "d", label: "`secrets` (e.g. `secrets.token_urlsafe(32)`)." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_priv_05",
    section: "privacy",
    prompt: "When storing user passwords in a Python backend database, which hashing algorithm and library is industry standard?",
    options: [
      { id: "a", label: "Plain MD5 or SHA-1 hashes without salts." },
      { id: "b", label: "`bcrypt`, `argon2-cffi`, or `passlib` with a unique cryptographic salt and high work factor." },
      { id: "c", label: "Base64 encoding with reversible decoding keys." },
      { id: "d", label: "Plaintext UTF-8 string columns in PostgreSQL." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_priv_06",
    section: "privacy",
    prompt: "How can Python developers continuously scan their project dependencies for known security CVE vulnerabilities?",
    options: [
      { id: "a", label: "Run automated security scanners like `pip-audit`, `safety`, or GitHub Dependabot in CI/CD pipelines." },
      { id: "b", label: "Ignore package versions and install with `--no-deps`." },
      { id: "c", label: "Never update dependencies once installed." },
      { id: "d", label: "Disable internet firewalls on build servers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_priv_07",
    section: "privacy",
    prompt: "When configuring logging with Python's standard `logging` library in production, what must be configured to prevent accidental PII leaks?",
    options: [
      { id: "a", label: "Logging all incoming HTTP request bodies and headers at `DEBUG` level to public stdout." },
      { id: "b", label: "Disabling error logs so security auditors cannot find flaws." },
      { id: "c", label: "Custom logging Filters or formatters that redact passwords, credit card numbers, and authorization headers before outputting logs." },
      { id: "d", label: "Emailing full crash dumps with user memory snapshots to an unmonitored inbox." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_priv_08",
    section: "privacy",
    prompt: "In Python web frameworks (FastAPI/Django/Flask), how should Cross-Origin Resource Sharing (CORS) be configured safely in production?",
    options: [
      { id: "a", label: "Set `allow_origins=['*']` and `allow_credentials=True` globally." },
      { id: "b", label: "Disable CORS middleware completely." },
      { id: "c", label: "Allow only localhost URLs in production environments." },
      { id: "d", label: "Explicitly allow only trusted front-end domains in `allow_origins=['https://app.yourdomain.com']` and disallow wildcards (`*`) with credentials." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_priv_09",
    section: "privacy",
    prompt: "What is Path Traversal / Directory Traversal in Python file scripts, and how is it prevented?",
    options: [
      { id: "a", label: "A hardware hard drive failure." },
      { id: "b", label: "Attacker passing `../../etc/passwd` to file paths; prevented by resolving absolute paths with `path.resolve()` and asserting `resolved_path.is_relative_to(base_directory)`." },
      { id: "c", label: "Deleting files recursively with `shutil.rmtree()`." },
      { id: "d", label: "Writing files with `.txt` extensions instead of `.json`." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_priv_10",
    section: "privacy",
    prompt: "When storing secret environment variables in Python projects, why is committing `.env` files to git repositories considered a high severity risk?",
    options: [
      { id: "a", label: "Git refuses to commit files starting with a dot." },
      { id: "b", label: "Secrets become permanently recorded in git commit history and can be discovered by unauthorized contributors, scrapers, or compromised repos." },
      { id: "c", label: "It corrupts the Python interpreter installation on other machines." },
      { id: "d", label: "It turns Python into a compiled binary." }
    ],
    correctOptionId: "b"
  }
];

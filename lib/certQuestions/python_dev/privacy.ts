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
  },
  {
    id: "pydev_priv_11",
    section: "privacy",
    prompt: "Why should PyYAML's `yaml.safe_load()` always be used instead of `yaml.load()` when parsing user-submitted YAML files in Python?",
    options: [
      { id: "a", label: "`yaml.load()` without a safe Loader can instantiate arbitrary Python objects and execute arbitrary OS commands embedded in YAML tags (`!!python/object/apply`)." },
      { id: "b", label: "`yaml.safe_load()` runs 1,000x faster than C extensions." },
      { id: "c", label: "`yaml.load()` only works on macOS." },
      { id: "d", label: "There is no security difference between them." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_priv_12",
    section: "privacy",
    prompt: "How can Python web scrapers and API proxy clients protect against Server-Side Request Forgery (SSRF) when fetching user-provided URLs?",
    options: [
      { id: "a", label: "Disabling DNS resolution completely." },
      { id: "b", label: "Resolving the target host's IP address and rejecting requests targeting private, loopback, or cloud-metadata IP ranges (e.g. `127.0.0.1`, `10.0.0.0/8`, `169.254.169.254`)." },
      { id: "c", label: "Adding `?safe=true` to all query parameters." },
      { id: "d", label: "Only making requests using HTTP instead of HTTPS." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_priv_13",
    section: "privacy",
    prompt: "When parsing XML documents from external third parties in Python, which package mitigates XML Entity Expansion (Billion Laughs) and XXE vulnerabilities?",
    options: [
      { id: "a", label: "The standard `xml.dom.minidom`." },
      { id: "b", label: "Raw string regex replacement." },
      { id: "c", label: "`defusedxml` which overrides standard XML parsers to disallow entity expansion and external DTD retrieval." },
      { id: "d", label: "Writing custom XML parsers in bash." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_priv_14",
    section: "privacy",
    prompt: "What is Regular Expression Denial of Service (ReDoS), and how can Python applications protect against it when evaluating user-supplied patterns?",
    options: [
      { id: "a", label: "A disk encryption bug caused by long regexes." },
      { id: "b", label: "A network firewall misconfiguration." },
      { id: "c", label: "A syntax error that halts the Python compiler." },
      { id: "d", label: "Catastrophic backtracking in nested regex quantifiers causing 100% CPU lockup; prevented by avoiding ambiguous nested quantifiers, setting execution timeouts, or using linear-time regex engines like Google `re2`." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_priv_15",
    section: "privacy",
    prompt: "When validating JSON Web Tokens (JWT) in a Python FastAPI/Flask service using `PyJWT`, what critical claim checks must never be skipped?",
    options: [
      { id: "a", label: "Verifying cryptographic signature with expected algorithm, checking expiration (`exp`), issuer (`iss`), and audience (`aud`)." },
      { id: "b", label: "Decoding the token with `options={\"verify_signature\": False}`." },
      { id: "c", label: "Trusting the `alg: none` header in the token payload." },
      { id: "d", label: "Checking only the token length." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_priv_16",
    section: "privacy",
    prompt: "When setting session or authentication cookies in Python web responses, which cookie flags prevent client-side JavaScript theft and interception?",
    options: [
      { id: "a", label: "`domain=*` and `max_age=99999999`." },
      { id: "b", label: "`HttpOnly=True` (blocks JS access via `document.cookie`), `Secure=True` (HTTPS only), and `SameSite='Lax'` or `'Strict'`." },
      { id: "c", label: "`HttpOnly=False` and `Secure=False`." },
      { id: "d", label: "`SameSite='None'` without TLS encryption." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_priv_17",
    section: "privacy",
    prompt: "How does the `cryptography.fernet.Fernet` recipe provide authenticated symmetric encryption for sensitive data in Python?",
    options: [
      { id: "a", label: "Uses ROT13 character substitution." },
      { id: "b", label: "Encodes strings into base64 with no key." },
      { id: "c", label: "Combines AES-128 in CBC mode with HMAC-SHA256 for integrity verification and PKCS7 padding, preventing tampering and eavesdropping." },
      { id: "d", label: "Compresses strings using gzip." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_priv_18",
    section: "privacy",
    prompt: "When executing shell commands using `subprocess.run()`, why is `shell=True` considered dangerous when combined with dynamic user inputs?",
    options: [
      { id: "a", label: "It slows down CPU clock frequency." },
      { id: "b", label: "It forces the command to run on Windows only." },
      { id: "c", label: "It deletes the current virtualenv directory." },
      { id: "d", label: "It passes the string directly to the OS shell (`/bin/sh` or `cmd.exe`), allowing command injection attacks via characters like `;`, `&&`, or `|`." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_priv_19",
    section: "privacy",
    prompt: "How can pre-commit hooks and CI pipelines prevent accidental commits of API keys, AWS credentials, and private keys in Python repositories?",
    options: [
      { id: "a", label: "Configuring automated secret detection tools like `trufflehog` or `gitleaks` in pre-commit configs and GitHub Actions." },
      { id: "b", label: "Disabling git commit validation." },
      { id: "c", label: "Renaming all secrets to `.txt` files." },
      { id: "d", label: "Compressing repositories before pushing to GitHub." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_priv_20",
    section: "privacy",
    prompt: "When building user-facing web apps in Python that accept rich text / HTML input, which library is the modern standard for sanitizing HTML to prevent Stored XSS?",
    options: [
      { id: "a", label: "Using string `.replace('<script>', '')`." },
      { id: "b", label: "`nh3` (Rust-based fast sanitizer) or `bleach` with strict allowed tags and attribute whitelists." },
      { id: "c", label: "Passing raw HTML directly into `eval()`." },
      { id: "d", label: "Disabling JavaScript in all client web browsers." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_priv_21",
    section: "privacy",
    prompt: "In Python microservices running behind a reverse proxy (e.g. Nginx, Cloudflare), why must the `Forwarded` or `X-Forwarded-For` header parser be configured with trusted proxy IPs?",
    options: [
      { id: "a", label: "To increase network download speeds." },
      { id: "b", label: "To allow unauthenticated root access." },
      { id: "c", label: "Without trusting only verified upstream proxies, attackers can spoof `X-Forwarded-For` to bypass IP-based rate limiters and geoblocking rules." },
      { id: "d", label: "Because HTTP headers are case-sensitive." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_priv_22",
    section: "privacy",
    prompt: "What is an Insecure Direct Object Reference (IDOR) in Python REST APIs, and how is it properly prevented?",
    options: [
      { id: "a", label: "A memory leak caused by Python circular references." },
      { id: "b", label: "A broken file symlink on disk." },
      { id: "c", label: "A missing Python package in `requirements.txt`." },
      { id: "d", label: "Allowing users to access arbitrary records by modifying IDs in URL parameters (e.g. `/invoices/105`); prevented by enforcing row-level authorization asserting `record.owner_id == current_user.id`." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_priv_23",
    section: "privacy",
    prompt: "When making outbound HTTPS requests in Python with `urllib` or `httpx`, what is the severe consequence of setting `verify=False` or `ssl._create_unverified_context()`?",
    options: [
      { id: "a", label: "Disables SSL certificate verification, making the connection vulnerable to Man-In-The-Middle (MITM) credential interception and payload tampering." },
      { id: "b", label: "Encrypts data twice with double TLS." },
      { id: "c", label: "Halts DNS resolution permanently." },
      { id: "d", label: "Forces requests to execute synchronously." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_priv_24",
    section: "privacy",
    prompt: "How should API rate limiting be implemented in Python FastAPI / Starlette applications to protect against brute-force attacks and abuse?",
    options: [
      { id: "a", label: "Relying on client browsers to voluntarily limit request rates." },
      { id: "b", label: "Using rate-limiting middleware (e.g. `slowapi` or Redis-backed sliding window / token bucket limiters) keyed by client IP or API key." },
      { id: "c", label: "Restarting the Python web server every 100 requests." },
      { id: "d", label: "Sleeping 5 seconds inside every API endpoint handler." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_priv_25",
    section: "privacy",
    prompt: "Why should sensitive credentials in enterprise Python applications be fetched from cloud secret managers (e.g. AWS Secrets Manager, HashiCorp Vault) rather than hardcoded in source files?",
    options: [
      { id: "a", label: "Hardcoded strings take up too much RAM." },
      { id: "b", label: "Python does not support string constants longer than 32 characters." },
      { id: "c", label: "Centralized secret managers provide dynamic rotation, fine-grained IAM access policies, comprehensive audit access logs, and eliminate secrets from source control." },
      { id: "d", label: "Cloud secret managers compile Python scripts to WebAssembly." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_priv_26",
    section: "privacy",
    prompt: "In Python Django and Flask web applications, what security mechanism defends against Cross-Site Request Forgery (CSRF) on state-changing POST/PUT requests?",
    options: [
      { id: "a", label: "Using TLS certificates on the domain." },
      { id: "b", label: "Writing all forms in pure JavaScript." },
      { id: "c", label: "Disabling HTTP POST requests completely." },
      { id: "d", label: "Generating and validating a cryptographically random, unpredictable CSRF token linked to the user's session in form payloads / headers." }
    ],
    correctOptionId: "d"
  },
  {
    id: "pydev_priv_27",
    section: "privacy",
    prompt: "When writing Python scripts that generate temporary files containing sensitive customer data, what standard library function creates files with secure `0600` permissions (readable/writable only by owner)?",
    options: [
      { id: "a", label: "`tempfile.NamedTemporaryFile()` or `tempfile.mkstemp()` which creates files with restricted user-only permissions by default." },
      { id: "b", label: "`open('/tmp/test.txt', 'w+')`." },
      { id: "c", label: "`os.system('touch /tmp/test.txt')`." },
      { id: "d", label: "`file.create_insecure()`." }
    ],
    correctOptionId: "a"
  },
  {
    id: "pydev_priv_28",
    section: "privacy",
    prompt: "What is the PKCE (Proof Key for Code Exchange) extension in OAuth 2.0 authorization code flows, and why is it essential for Python desktop/mobile/CLI applications?",
    options: [
      { id: "a", label: "It turns OAuth tokens into cryptographic NFT tokens." },
      { id: "b", label: "Prevents authorization code interception attacks on public clients that cannot securely store a client secret, by using a dynamically generated `code_verifier` and `code_challenge`." },
      { id: "c", label: "Eliminates the need for HTTPS connections." },
      { id: "d", label: "Bypasses user login consent screens." }
    ],
    correctOptionId: "b"
  },
  {
    id: "pydev_priv_29",
    section: "privacy",
    prompt: "How does setting Content Security Policy (CSP) headers in Python web responses mitigate XSS attacks?",
    options: [
      { id: "a", label: "Encrypts all HTML strings in transit." },
      { id: "b", label: "Disables web browser caching." },
      { id: "c", label: "Restricts the domains and sources from which the browser is allowed to load and execute scripts, stylesheets, images, and frames." },
      { id: "d", label: "Translates HTML into JSON." }
    ],
    correctOptionId: "c"
  },
  {
    id: "pydev_priv_30",
    section: "privacy",
    prompt: "Why should custom Python deserialization logic avoid using `eval()` or `exec()` on strings retrieved from remote databases or network payloads?",
    options: [
      { id: "a", label: "`eval()` runs 10x slower than `json.loads()`." },
      { id: "b", label: "`eval()` only works on integer expressions." },
      { id: "c", label: "`exec()` is deprecated in Python 3.12." },
      { id: "d", label: "`eval()` and `exec()` execute arbitrary Python statements and expressions with full interpreter privileges, allowing catastrophic remote code execution." }
    ],
    correctOptionId: "d"
  }
];

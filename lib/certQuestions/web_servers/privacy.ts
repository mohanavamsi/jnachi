import { CertQuestion } from '../types';

export const WEB_SERVERS_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: "web_priv_01",
    section: "privacy",
    prompt: "What is Cross-Origin Resource Sharing (CORS), and what is the security purpose of the `Access-Control-Allow-Origin` HTTP header?",
    options: [
      { id: "a", label: "A browser security mechanism that restricts web pages from making API requests to a different domain than the one that served the page, unless the server explicitly grants permission via CORS headers." },
      { id: "b", label: "A hardware firewall protocol that blocks overseas IP addresses." },
      { id: "c", label: "An algorithm that encrypts database passwords before writing to disk." },
      { id: "d", label: "A web crawler instruction file that tells search engines not to index images." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_priv_02",
    section: "privacy",
    prompt: "What security risk does setting the `HttpOnly` flag on an authentication session cookie eliminate?",
    options: [
      { id: "a", label: "Prevents client-side JavaScript (e.g. via Cross-Site Scripting / XSS attacks) from reading the cookie value using `document.cookie`." },
      { id: "b", label: "Prevents the server from receiving HTTP requests over port 443." },
      { id: "c", label: "Disables database transaction rollbacks." },
      { id: "d", label: "Blocks users from viewing website HTML source code." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_priv_03",
    section: "privacy",
    prompt: "What is the purpose of the `SameSite=Strict` or `SameSite=Lax` cookie attribute in web application security?",
    options: [
      { id: "a", label: "Mitigating Cross-Site Request Forgery (CSRF) attacks by restricting when cookies are sent with cross-site browsing contexts and third-party requests." },
      { id: "b", label: "Restricting cookie access to mobile phone browsers only." },
      { id: "c", label: "Compressing session cookies into base64 format." },
      { id: "d", label: "Preventing server operating systems from running out of RAM." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_priv_04",
    section: "privacy",
    prompt: "What is the security function of the `Content-Security-Policy` (CSP) HTTP response header?",
    options: [
      { id: "a", label: "Restricting the exact domains from which scripts, styles, images, iframes, and fonts can be loaded and executed by the browser, neutralizing most XSS attack vectors." },
      { id: "b", label: "Encrypting server hard drives with BitLocker." },
      { id: "c", label: "Authenticating administrators using SSH public keys." },
      { id: "d", label: "Enforcing GDPR consent banners on first page visit." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_priv_05",
    section: "privacy",
    prompt: "What is HTTP Strict Transport Security (HSTS) via the `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` header?",
    options: [
      { id: "a", label: "Instructs browsers to strictly interact with the domain only over HTTPS connections, automatically converting all insecure `http://` links to `https://` before sending requests." },
      { id: "b", label: "Forces all database queries to use prepared statements." },
      { id: "c", label: "Blocks web crawlers from indexing administrative routes." },
      { id: "d", label: "Enforces two-factor authentication on email inboxes." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_priv_06",
    section: "privacy",
    prompt: "What is a Server-Side Request Forgery (SSRF) vulnerability in web server backends?",
    options: [
      { id: "a", label: "An attacker coerces the backend web server to make unauthorized HTTP requests to internal, non-public resources (e.g. AWS metadata endpoint `169.254.169.254` or internal databases)." },
      { id: "b", label: "A browser crashing due to excessive CSS animations." },
      { id: "c", label: "A physical server overheating in a server room." },
      { id: "d", label: "A user forgetting their email password." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_priv_07",
    section: "privacy",
    prompt: "Why should web server tokens and banner headers (such as `Server: nginx/1.18.0 (Ubuntu)` or `X-Powered-By: Express`) be hidden in production environments (`server_tokens off;`)?",
    options: [
      { id: "a", label: "To prevent reconnaissance by automated attackers and vulnerability scanners looking for known CVE exploits specific to exact software versions." },
      { id: "b", label: "To reduce HTML file sizes by 5 megabytes." },
      { id: "c", label: "Because web browsers refuse to render pages with server headers." },
      { id: "d", label: "To improve SEO ranking on Google search algorithms." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_priv_08",
    section: "privacy",
    prompt: "What is Rate Limiting on a web server or API gateway (e.g. `limit_req_zone` in Nginx), and what threats does it mitigate?",
    options: [
      { id: "a", label: "Restricting the number of incoming requests a client IP or API key can make within a specified timeframe, mitigating brute-force password attacks, scraping, and DoS resource exhaustion." },
      { id: "b", label: "Limiting the upload speed of network cables to 10 Mbps." },
      { id: "c", label: "Restricting database tables to 100 rows maximum." },
      { id: "d", label: "Limiting the number of CSS files a developer can link." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_priv_09",
    section: "privacy",
    prompt: "What does the `X-Frame-Options: DENY` (or `frame-ancestors 'none'` in CSP) header protect against?",
    options: [
      { id: "a", label: "Clickjacking attacks, by preventing malicious third-party websites from rendering the application inside a transparent `<iframe>` to trick users into unauthorized clicks." },
      { id: "b", label: "SQL injection attacks inside input forms." },
      { id: "c", label: "Unsolicited promotional spam emails." },
      { id: "d", label: "Physical hard drive sector corruption." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_priv_10",
    section: "privacy",
    prompt: "What happens during a TLS 1.3 cryptographic handshake when a client establishes a secure HTTPS session with a web server?",
    options: [
      { id: "a", label: "The client and server negotiate cipher suites, authenticate the server via its X.509 certificate, and use Diffie-Hellman ephemeral key exchange (ECDHE) in a single round-trip (1-RTT) to generate symmetric session encryption keys." },
      { id: "b", label: "The client downloads the server's entire PostgreSQL database schema." },
      { id: "c", label: "The server restarts its operating system kernel in safe mode." },
      { id: "d", label: "The browser deletes all local storage data." }
    ],
    correctOptionId: "a"
  }
];

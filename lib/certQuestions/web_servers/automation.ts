import { CertQuestion } from '../types';

export const WEB_SERVERS_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "web_auto_01",
    section: "automation",
    prompt: "In an Nginx server block configuration, which directive is used to proxy incoming web requests on port 80/443 to a backend Node.js or Python application running on `localhost:3000`?",
    options: [
      { id: "a", label: "`proxy_pass http://127.0.0.1:3000;`" },
      { id: "b", label: "`forward_to_port 3000;`" },
      { id: "c", label: "`redirect_internal 3000;`" },
      { id: "d", label: "`route_backend 127.0.0.1:3000;`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_auto_02",
    section: "automation",
    prompt: "Which command-line utility is widely used in automated CI/CD deployment pipelines to test REST API endpoints, inspect response headers, and send JSON payloads from scripts?",
    options: [
      { id: "a", label: "`curl`" },
      { id: "b", label: "`fdisk`" },
      { id: "c", label: "`traceroute`" },
      { id: "d", label: "`zip`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_auto_03",
    section: "automation",
    prompt: "What is the purpose of Let's Encrypt and the `certbot` automated tool in web server administration?",
    options: [
      { id: "a", label: "Automating the issuance, validation (via ACME challenge), installation, and recurring renewal of trusted TLS/SSL X.509 certificates for HTTPS encryption." },
      { id: "b", label: "Generating randomized root passwords for Linux SSH servers." },
      { id: "c", label: "Compressing JavaScript and CSS bundles during production builds." },
      { id: "d", label: "Scanning web code for SQL injection vulnerabilities." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_auto_04",
    section: "automation",
    prompt: "In an Nginx configuration file, what is the significance of the `try_files $uri $uri/ /index.html;` directive for Single Page Applications (SPAs like React or Vue)?",
    options: [
      { id: "a", label: "It attempts to serve the requested static file; if not found on disk, it routes the request to `/index.html` so client-side routing can handle the URL without returning a 404 error." },
      { id: "b", label: "It checks whether the web server has enough free RAM before loading images." },
      { id: "c", label: "It renames HTML files to prevent browser caching." },
      { id: "d", label: "It automatically compiles TypeScript files into JavaScript." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_auto_05",
    section: "automation",
    prompt: "Which HTTP header is added by a reverse proxy (Nginx/Cloudflare) to preserve the original client IP address when forwarding requests to backend origin servers?",
    options: [
      { id: "a", label: "`X-Forwarded-For` (and `X-Real-IP`)" },
      { id: "b", label: "`X-Original-Password`" },
      { id: "c", label: "`Proxy-Client-Mac-Address`" },
      { id: "d", label: "`Client-Hardware-UUID`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_auto_06",
    section: "automation",
    prompt: "How does Gzip or Brotli compression configuration on a web server improve web application performance?",
    options: [
      { id: "a", label: "It compresses text-based HTTP response bodies (HTML, CSS, JS, JSON) on the fly before network transmission, reducing transferred bytes by 60–80% and speeding up page load times." },
      { id: "b", label: "It shrinks image resolution so images load in grayscale." },
      { id: "c", label: "It compiles backend database tables into compressed ZIP archives." },
      { id: "d", label: "It bypasses operating system memory limits." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_auto_07",
    section: "automation",
    prompt: "What is the function of the `Cache-Control: public, max-age=31536000, immutable` HTTP response header for hashed static assets?",
    options: [
      { id: "a", label: "Instructs browsers and intermediate CDNs that the asset can be cached for up to 1 year and will never change, eliminating unnecessary conditional re-validation requests." },
      { id: "b", label: "Forces the browser to re-download the file on every user click." },
      { id: "c", label: "Encrypts the asset with biometric authentication." },
      { id: "d", label: "Deletes the asset from the server disk after 1 year." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_auto_08",
    section: "automation",
    prompt: "When configuring a process manager like PM2 or `systemd` to supervise a Node.js or Python web server, what vital production capability is provided?",
    options: [
      { id: "a", label: "Automatic restart upon unhandled runtime crashes, cluster mode CPU load balancing, background daemonization, and start on system reboot." },
      { id: "b", label: "Automatic translation of web text into 50 languages." },
      { id: "c", label: "Free domain name registration with ICANN." },
      { id: "d", label: "Direct hardware overclocking of server memory modules." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_auto_09",
    section: "automation",
    prompt: "In modern cloud infrastructure, what is an 'Origin Server' in relation to a Content Delivery Network (CDN) edge network?",
    options: [
      { id: "a", label: "The authoritative backend server running the primary application and database, which the CDN fetches from on a cache miss before caching content across global edge POPs." },
      { id: "b", label: "The user's home Wi-Fi router." },
      { id: "c", label: "A domain registrar's DNS name server." },
      { id: "d", label: "A physical fiber optic submarine cable." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_auto_10",
    section: "automation",
    prompt: "Which command reloads Nginx server configuration changes gracefully without dropping active client connections?",
    options: [
      { id: "a", label: "`nginx -t && nginx -s reload` (or `systemctl reload nginx`)" },
      { id: "b", label: "`killall -9 nginx`" },
      { id: "c", label: "`rm -rf /etc/nginx`" },
      { id: "d", label: "`reboot -f`" }
    ],
    correctOptionId: "a"
  }
];

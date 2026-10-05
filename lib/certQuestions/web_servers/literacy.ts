import { CertQuestion } from '../types';

export const WEB_SERVERS_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "web_lit_01",
    section: "literacy",
    prompt: "In the HTTP/1.1 protocol specification, what is the semantic purpose of the `GET` method versus the `POST` method?",
    options: [
      { id: "a", label: "`GET` requests representation of a specified resource (safe and idempotent); `POST` submits an entity to the specified resource, often causing a change in state or side effects on the server." },
      { id: "b", label: "`GET` is only for downloading images; `POST` is exclusively for streaming audio." },
      { id: "c", label: "`POST` requests can be cached indefinitely by web browsers, while `GET` requests can never be cached." },
      { id: "d", label: "`GET` encrypts the payload with TLS; `POST` transmits plaintext only." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_lit_02",
    section: "literacy",
    prompt: "What does an HTTP `404 Not Found` status code signify compared to an HTTP `500 Internal Server Error`?",
    options: [
      { id: "a", label: "`404` is a client-side error indicating the server cannot find the requested resource URL; `500` is a server-side error indicating an unhandled exception or crash on the server while executing the request." },
      { id: "b", label: "`404` means the user's internet is disconnected; `500` means the browser crashed." },
      { id: "c", label: "`404` indicates database corruption; `500` indicates successful authentication." },
      { id: "d", label: "`404` and `500` are identical legacy status codes deprecated in HTTP/2." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_lit_03",
    section: "literacy",
    prompt: "What is the primary difference between a Forward Proxy and a Reverse Proxy (such as Nginx or HAProxy)?",
    options: [
      { id: "a", label: "A forward proxy sits in front of clients to control and anonymize outbound internet access; a reverse proxy sits in front of web servers to route, load-balance, terminate TLS, and protect origin backend servers." },
      { id: "b", label: "A forward proxy is used for mobile phones; a reverse proxy is used for desktop computers." },
      { id: "c", label: "A reverse proxy converts SQL queries into HTML templates." },
      { id: "d", label: "A forward proxy operates exclusively at the physical hardware layer with fiber cables." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_lit_04",
    section: "literacy",
    prompt: "What major architectural improvement does HTTP/2 introduce over HTTP/1.1 to eliminate Head-of-Line (HoL) blocking at the application layer?",
    options: [
      { id: "a", label: "Binary framing and multiplexing multiple concurrent bidirectional streams over a single persistent TCP connection." },
      { id: "b", label: "Requiring every web page to be compiled into C++ machine code." },
      { id: "c", label: "Limiting all web requests to a maximum of 1 kilobyte." },
      { id: "d", label: "Disabling cookie headers and URL query parameters." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_lit_05",
    section: "literacy",
    prompt: "In DNS (Domain Name System) record management, what is the role of an `A` record versus a `CNAME` record?",
    options: [
      { id: "a", label: "An `A` record maps a hostname directly to an IPv4 address; a `CNAME` (Canonical Name) record aliases one domain name to another domain name." },
      { id: "b", label: "An `A` record is for email servers; a `CNAME` record is for database connections." },
      { id: "c", label: "A `CNAME` record stores website passwords; an `A` record stores user billing addresses." },
      { id: "d", label: "`A` records only work on Apache web servers; `CNAME` is for Nginx." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_lit_06",
    section: "literacy",
    prompt: "What is the fundamental difference between Port 80 and Port 443 in web communications?",
    options: [
      { id: "a", label: "Port 80 is standard unencrypted HTTP; Port 443 is HTTPS, utilizing TLS/SSL cryptographic encryption over TCP." },
      { id: "b", label: "Port 80 is for downloading files; Port 443 is for uploading video." },
      { id: "c", label: "Port 80 runs on Linux; Port 443 runs on Windows." },
      { id: "d", label: "Port 443 is a physical USB port on server motherboards." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_lit_07",
    section: "literacy",
    prompt: "What does the `Content-Type: application/json` HTTP header inform the receiving endpoint?",
    options: [
      { id: "a", label: "The MIME type of the body payload is structured JavaScript Object Notation (JSON) text data." },
      { id: "b", label: "The request must be executed inside a Node.js runtime." },
      { id: "c", label: "The server should delete all session cookies immediately." },
      { id: "d", label: "The browser should render the payload as an MP4 video." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_lit_08",
    section: "literacy",
    prompt: "What is the purpose of the WebSocket protocol (`ws://` and `wss://`) compared to standard HTTP polling?",
    options: [
      { id: "a", label: "Establishing a persistent, low-overhead, full-duplex bidirectional TCP communication channel over a single socket connection after an initial HTTP upgrade handshake." },
      { id: "b", label: "Compressing static CSS files into binary web archives." },
      { id: "c", label: "Encrypting hard drive partitions on Linux cloud servers." },
      { id: "d", label: "Restricting website access to authenticated administrator IP addresses." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_lit_09",
    section: "literacy",
    prompt: "In web server architecture, what is the core architectural difference between Apache HTTP Server (pre-fork/worker MPM) and Nginx?",
    options: [
      { id: "a", label: "Nginx uses an asynchronous, non-blocking, single-threaded event-driven event loop architecture that handles tens of thousands of concurrent connections with minimal memory; traditional Apache uses thread/process-per-connection models." },
      { id: "b", label: "Apache only runs on Windows; Nginx only runs on Apple macOS." },
      { id: "c", label: "Nginx cannot serve static HTML or image files." },
      { id: "d", label: "Apache requires Python to be installed; Nginx is written in JavaScript." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_lit_10",
    section: "literacy",
    prompt: "What is the HTTP status code series `3xx` (e.g. `301 Moved Permanently`, `302 Found`, `304 Not Modified`) used for?",
    options: [
      { id: "a", label: "Redirection messages indicating that further action must be taken by the user agent to complete the request." },
      { id: "b", label: "Fatal server database crashes." },
      { id: "c", label: "Successful payment transaction receipts." },
      { id: "d", label: "Authentication credential expiration warnings." }
    ],
    correctOptionId: "a"
  }
];

import { CertQuestion } from '../types';

export const WEB_SERVERS_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: "web_gro_01",
    section: "growth",
    prompt: "In high-traffic web architectures, what is the role of an In-Memory Cache (such as Redis or Memcached) positioned between web application servers and the primary relational database?",
    options: [
      { id: "a", label: "Storing frequently accessed database query results and session data in high-speed RAM, reducing database read load by 80%+ and providing sub-millisecond response latencies." },
      { id: "b", label: "Compressing video streams for mobile smartphones." },
      { id: "c", label: "Generating SSL certificates on the fly for incoming requests." },
      { id: "d", label: "Encrypting hard drive partitions during operating system boot." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_gro_02",
    section: "growth",
    prompt: "What is the difference between Layer 4 (Transport) Load Balancing and Layer 7 (Application) Load Balancing in web server infrastructure?",
    options: [
      { id: "a", label: "Layer 4 routes traffic based on IP address and TCP/UDP port without inspecting payload content; Layer 7 inspects HTTP headers, cookies, and URL paths to make intelligent application routing decisions (e.g. `/api` vs `/static`)." },
      { id: "b", label: "Layer 4 is for software; Layer 7 is only for physical server racks." },
      { id: "c", label: "Layer 7 can only balance audio streaming files." },
      { id: "d", label: "Layer 4 requires all servers to run the same operating system version." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_gro_03",
    section: "growth",
    prompt: "What is 'Serverless Computing' (e.g. AWS Lambda, Google Cloud Functions, Cloudflare Workers) compared to traditional virtual machine web hosting?",
    options: [
      { id: "a", label: "An execution model where the cloud provider dynamically provisions and scales compute containers on-demand per request, charging strictly for milliseconds of execution time with zero infrastructure server maintenance." },
      { id: "b", label: "Running web servers without any internet connection." },
      { id: "c", label: "A web hosting platform that does not support databases or APIs." },
      { id: "d", label: "Hosting web applications entirely on user mobile devices." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_gro_04",
    section: "growth",
    prompt: "In microservices architecture, what is the primary responsibility of an API Gateway (e.g. Kong, Traefik, AWS API Gateway)?",
    options: [
      { id: "a", label: "Serving as the single entry point for client traffic, handling request routing, centralized authentication/authorization, rate limiting, SSL termination, and protocol translation to internal backend microservices." },
      { id: "b", label: "Formatting hard drives on cloud virtual machines." },
      { id: "c", label: "Writing raw SQL queries directly to database disks." },
      { id: "d", label: "Managing physical ethernet switches inside a data center." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_gro_05",
    section: "growth",
    prompt: "What is 'Blue-Green Deployment' in zero-downtime web server releases?",
    options: [
      { id: "a", label: "Maintaining two identical production environments (Blue = live version, Green = idle new release); after validating Green, the load balancer instantly switches traffic from Blue to Green with zero downtime." },
      { id: "b", label: "Changing the CSS theme colors of a website from blue to green for holidays." },
      { id: "c", label: "Running web servers in environmentally friendly solar-powered data centers." },
      { id: "d", label: "Testing code on user laptops before writing unit tests." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_gro_06",
    section: "growth",
    prompt: "What is the purpose of 'Canary Releases' in production web service deployments?",
    options: [
      { id: "a", label: "Gradually rolling out a new software version to a tiny percentage of live user traffic (e.g. 5%), monitoring error rates and metrics, and rolling back immediately if anomalies are detected before 100% rollout." },
      { id: "b", label: "Automated audio alerts that play when a server CPU exceeds 90% utilization." },
      { id: "c", label: "A security scanner that finds abandoned employee accounts." },
      { id: "d", label: "A deployment script that only runs on weekends." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_gro_07",
    section: "growth",
    prompt: "Why is 'Stateless Architecture' crucial when designing horizontally scalable web application tiers?",
    options: [
      { id: "a", label: "By storing session state and transient data in external shared stores (Redis, databases) rather than in local server RAM, any incoming HTTP request can be served by any web server instance behind the load balancer." },
      { id: "b", label: "Stateless applications do not use databases." },
      { id: "c", label: "Stateless architecture allows servers to run without electricity." },
      { id: "d", label: "It restricts web applications to running on a single CPU core." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_gro_08",
    section: "growth",
    prompt: "In web server telemetry and observability, what are the 'Golden Signals' of monitoring (Google SRE standard)?",
    options: [
      { id: "a", label: "Latency (time to serve a request), Traffic (demand/throughput), Errors (rate of failed requests), and Saturation (how full system resources are)." },
      { id: "b", label: "Cost, Revenue, Employee headcount, and Office square footage." },
      { id: "c", label: "Screen resolution, Mouse click speed, Keyboard latency, and Audio volume." },
      { id: "d", label: "Git commit count, Pull request reviews, Lines of code, and Branch names." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_gro_09",
    section: "growth",
    prompt: "What is the role of an 'Edge Computing' worker (e.g. Cloudflare Workers, Vercel Edge Middleware)?",
    options: [
      { id: "a", label: "Executing lightweight server-side code (authentication checks, A/B routing, geolocation redirects) in under 5ms at edge POP locations worldwide directly adjacent to the end-user." },
      { id: "b", label: "Running heavy multi-terabyte data warehouse batch analytics." },
      { id: "c", label: "Backing up raw hard drive image files to magnetic tape." },
      { id: "d", label: "Mining cryptocurrency using browser CPU cycles." }
    ],
    correctOptionId: "a"
  },
  {
    id: "web_gro_10",
    section: "growth",
    prompt: "What is a 'Circuit Breaker' pattern in distributed web service communications (e.g. using Resilience4j or Envoy)?",
    options: [
      { id: "a", label: "A design pattern that detects downstream service failures and temporarily trips (opens) to immediately fail fast or return fallbacks, preventing cascading exhaustion of upstream server thread pools." },
      { id: "b", label: "A physical electrical switch in a power distribution unit." },
      { id: "c", label: "A database constraint that forbids duplicate user records." },
      { id: "d", label: "A firewall rule that resets forgotten passwords." }
    ],
    correctOptionId: "a"
  }
];

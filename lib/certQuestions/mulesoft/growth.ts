import { CertQuestion } from '../types';

export const MULESOFT_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: "mule_grow_01",
    section: "growth",
    prompt: "When sizing CloudHub workers for a high-concurrency MuleSoft application, what does increasing the vCore allocation (e.g. from 0.1 to 1 vCore) provide?",
    options: [
      { id: "a", label: "Increases the number of supported RAML files." },
      { id: "b", label: "Allocates dedicated compute CPU cores and larger JVM heap memory, eliminating fractional multi-tenant CPU throttling." },
      { id: "c", label: "Changes the operating system from Linux to Windows." },
      { id: "d", label: "Removes all API rate limits automatically." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_grow_02",
    section: "growth",
    prompt: "How does horizontal scaling (increasing the worker count from 1 to 4 workers) improve reliability in CloudHub 1.0 / 2.0?",
    options: [
      { id: "a", label: "Combines 4 workers into a single giant JVM heap." },
      { id: "b", label: "Increases network bandwidth by 400x on each connection." },
      { id: "c", label: "Distributes incoming traffic across multiple isolated worker instances via load balancing and provides automatic failover if a worker crashes." },
      { id: "d", label: "Allows running 4 different Mule applications on the same port." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_grow_03",
    section: "growth",
    prompt: "What is Runtime Fabric (RTF) in MuleSoft deployment architecture and why is it chosen over standard CloudHub?",
    options: [
      { id: "a", label: "A physical fiber optic cable manufactured by Salesforce." },
      { id: "b", label: "A desktop IDE that replaces Anypoint Studio." },
      { id: "c", label: "A tool that only works on Apple Mac laptops." },
      { id: "d", label: "A containerized Mule runtime management service running on customer-managed Kubernetes (EKS, AKS, GKE, or bare-metal), allowing data locality compliance in private clouds." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_grow_04",
    section: "growth",
    prompt: "In MUnit testing framework, what does the `Mock When` processor do during automated test execution?",
    options: [
      { id: "a", label: "Intercepts calls to specific processors (e.g. an HTTP Request or Database connector) and returns a simulated payload and attributes without making actual network calls." },
      { id: "b", label: "Deletes the target API from CloudHub." },
      { id: "c", label: "Tests if the computer screen is turned on." },
      { id: "d", label: "Generates fake credit cards for payment gateways." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_grow_05",
    section: "growth",
    prompt: "What is the role of `Verify Call` processor in an MUnit test suite?",
    options: [
      { id: "a", label: "Calls customer phone numbers to verify identities." },
      { id: "b", label: "Asserts that a specific processor in the Mule flow was executed an exact expected number of times (e.g. `times=\"1\"` or `atLeast=\"1\"`)." },
      { id: "c", label: "Checks if the Mule license is valid." },
      { id: "d", label: "Verifies the syntax of HTML web pages." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_grow_06",
    section: "growth",
    prompt: "How does MUnit Coverage reporting help development teams maintain code quality in CI/CD pipelines?",
    options: [
      { id: "a", label: "Measures wireless network coverage in the building." },
      { id: "b", label: "Measures how much memory is left on the server hard drive." },
      { id: "c", label: "Calculates the percentage of Mule processors, flows, and sub-flows executed during unit tests, failing builds if coverage falls below required thresholds (e.g. 80%)." },
      { id: "d", label: "Checks if all developers have committed code today." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_grow_07",
    section: "growth",
    prompt: "In MuleSoft automated CI/CD pipelines, which Maven plugin is used to compile, package, and deploy Mule applications to CloudHub or RTF?",
    options: [
      { id: "a", label: "Apache Ant builder." },
      { id: "b", label: "Webpack bundler." },
      { id: "c", label: "Gradle wrapper only." },
      { id: "d", label: "Mule Maven Plugin (`mule-maven-plugin`)." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_grow_08",
    section: "growth",
    prompt: "What is Anypoint Visualizer used for in enterprise integration governance?",
    options: [
      { id: "a", label: "Automatically generates real-time topological network maps showing dependencies, traffic volume, and policy status between all System, Process, and Experience APIs." },
      { id: "b", label: "Plays video files inside Anypoint Studio." },
      { id: "c", label: "Edits images and photos for websites." },
      { id: "d", label: "Generates 3D CAD blueprints for server hardware." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_grow_09",
    section: "growth",
    prompt: "What capability does Anypoint Monitoring provide for production performance diagnostics?",
    options: [
      { id: "a", label: "Tracks employee work hours and keystrokes." },
      { id: "b", label: "Provides real-time dashboards for CPU/memory utilization, JVM garbage collection pauses, response time percentiles (p95/p99), and custom business metrics." },
      { id: "c", label: "Monitors internet router firmware updates." },
      { id: "d", label: "Records video calls with clients." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_grow_10",
    section: "growth",
    prompt: "In CloudHub deployments, what does Zero-Downtime Deployment guarantee during an application update or patch release?",
    options: [
      { id: "a", label: "Halts all incoming traffic for 30 minutes during updates." },
      { id: "b", label: "Deletes all database records during deploy." },
      { id: "c", label: "Provisions new workers with the updated version, runs health checks, updates the load balancer routing, and only terminates old workers once the new ones are healthy." },
      { id: "d", label: "Runs the application with zero RAM usage." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_grow_11",
    section: "growth",
    prompt: "What is the purpose of Dedicated Load Balancers (DLB) in Anypoint CloudHub?",
    options: [
      { id: "a", label: "Balances electricity load across office buildings." },
      { id: "b", label: "Increases database storage capacity." },
      { id: "c", label: "Balances employee shift schedules." },
      { id: "d", label: "Enables custom vanity domain names (e.g. `api.company.com`), SSL termination, mTLS client authentication, and URL mapping rules to internal CloudHub applications." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_grow_12",
    section: "growth",
    prompt: "In Mule 4, what is the role of the `Spy` processor in MUnit test verifications?",
    options: [
      { id: "a", label: "Inspects and asserts the exact payload, attributes, and variables of a Mule Event both BEFORE and AFTER a specific processor executes." },
      { id: "b", label: "Secretly records developer microphone audio." },
      { id: "c", label: "Monitors competitor website pricing." },
      { id: "d", label: "Deletes failed unit tests from the test report." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_grow_13",
    section: "growth",
    prompt: "How does MuleSoft implement Circuit Breaker resilience patterns in high-volume microservice orchestrations?",
    options: [
      { id: "a", label: "Cutting the physical server power cord on error." },
      { id: "b", label: "Using the Circuit Breaker capability in HTTP Request / Anypoint Gateway to fail fast when downstream services exceed error thresholds, preventing thread exhaustion." },
      { id: "c", label: "Retrying failed requests 10,000 times per second." },
      { id: "d", label: "Restarting the CloudHub worker on every 500 error." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_grow_14",
    section: "growth",
    prompt: "In Mule 4 applications, what causes JVM Garbage Collection (GC) pauses to spike, and how is it mitigated in high-throughput workflows?",
    options: [
      { id: "a", label: "Running Mule on 64-bit operating systems." },
      { id: "b", label: "Using too many RAML comments." },
      { id: "c", label: "Creating massive in-memory Java objects and unbuffered strings; mitigated by using streaming DataWeave payloads, Repeatable Streams, and Batch processing." },
      { id: "d", label: "Having more than 5 flows in a Mule config file." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_grow_15",
    section: "growth",
    prompt: "What is the purpose of Anypoint Telemetry Exporter and OpenTelemetry (OTel) in modern MuleSoft observability?",
    options: [
      { id: "a", label: "Transmits Mule code to satellite ground stations." },
      { id: "b", label: "Converts Mule applications into Excel spreadsheets." },
      { id: "c", label: "Disables all application monitoring." },
      { id: "d", label: "Exports distributed traces, metrics, and logs to third-party APM platforms (Dynatrace, Splunk, Datadog, New Relic) to track end-to-end transaction latency." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_grow_16",
    section: "growth",
    prompt: "In CloudHub 2.0, how does auto-scaling dynamically adjust compute resources based on real-time traffic demand?",
    options: [
      { id: "a", label: "Automatically scales the number of replica pods up or down based on CPU and memory utilization thresholds defined in the deployment target." },
      { id: "b", label: "Manually requires an administrator to click a button in the UI." },
      { id: "c", label: "Scales only during full moon phases." },
      { id: "d", label: "Reboots the server when traffic reaches zero." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_grow_17",
    section: "growth",
    prompt: "What is an Anypoint Partner Manager (APM) used for in B2B supply chain ecosystems?",
    options: [
      { id: "a", label: "Managing company vendor payroll." },
      { id: "b", label: "Managing EDI (X12, EDIFACT) trading partner relationships, AS2/SFTP protocol connections, mapping validations, and tracking B2B document transactions." },
      { id: "c", label: "Scheduling partner golf outings." },
      { id: "d", label: "Ordering office supplies." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_grow_18",
    section: "growth",
    prompt: "What is the difference between Persistent Object Store and In-Memory Object Store in Mule 4?",
    options: [
      { id: "a", label: "In-Memory Object Store can only store string values." },
      { id: "b", label: "Persistent Object Store only works for XML files." },
      { id: "c", label: "Persistent Object Store saves key-value data to disk / CloudHub OSv2 backend surviving application restarts; In-Memory loses state on restart." },
      { id: "d", label: "There is no functional difference." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_grow_19",
    section: "growth",
    prompt: "How does the Mule 4 `Cache Scope` improve API performance for read-heavy operations?",
    options: [
      { id: "a", label: "Stores all responses on the user's hard drive." },
      { id: "b", label: "Permanently disables database reads." },
      { id: "c", label: "Compresses images in the response." },
      { id: "d", label: "Caches the output payload of expensive backend operations keyed by message attributes, returning cached responses for identical subsequent requests without invoking the backend." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_grow_20",
    section: "growth",
    prompt: "What is a Smart Connector (Mule SDK) and when should an engineering team build one?",
    options: [
      { id: "a", label: "A custom reusable connector developed in Java or XML using the Mule SDK to encapsulate proprietary enterprise protocols, internal APIs, or complex connector logic." },
      { id: "b", label: "A physical USB adapter for laptops." },
      { id: "c", label: "A tool that automatically writes unit tests." },
      { id: "d", label: "A database query optimizer." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_grow_21",
    section: "growth",
    prompt: "In Mule 4, what is the default behavior of Repeatable File Store Streams on large input payloads?",
    options: [
      { id: "a", label: "Crashes the application if the payload exceeds 1MB." },
      { id: "b", label: "Buffers initial bytes in memory up to a threshold (e.g. 512KB), spilling excess bytes to temporary disk storage so the stream can be consumed multiple times without OOM errors." },
      { id: "c", label: "Deletes the payload after first read." },
      { id: "d", label: "Transfers the payload directly to Amazon S3." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_grow_22",
    section: "growth",
    prompt: "When running automated tests in GitHub Actions CI/CD for Mule projects, what is the standard Maven command to execute MUnit test suites?",
    options: [
      { id: "a", label: "`npm run test`" },
      { id: "b", label: "`pytest`" },
      { id: "c", label: "`mvn clean test` or `mvn test -Dmunit.test=...`" },
      { id: "d", label: "`docker build`" }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_grow_23",
    section: "growth",
    prompt: "In Anypoint Platform, what is the purpose of Connected Apps for automated CI/CD deployment authentication?",
    options: [
      { id: "a", label: "Connects mobile phones to Bluetooth devices." },
      { id: "b", label: "Synchronizes social media posts." },
      { id: "c", label: "Monitors office printer ink levels." },
      { id: "d", label: "Provides service principal credentials (`client_id` and `client_secret`) with scoped permissions to deploy applications without using individual user passwords or MFA tokens." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_grow_24",
    section: "growth",
    prompt: "What is the function of the `munit-tools:assert-that` processor in MUnit assertions?",
    options: [
      { id: "a", label: "Evaluates the actual payload or variable against Hamcrest-style matchers (e.g. `MunitTools::equalTo()`, `MunitTools::notNullValue()`, `MunitTools::hasSize()`)." },
      { id: "b", label: "Asserts that the computer has 16GB of RAM." },
      { id: "c", label: "Checks if the internet connection is active." },
      { id: "d", label: "Prints a log message to the terminal." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_grow_25",
    section: "growth",
    prompt: "How does MuleSoft's Anypoint MQ auto-scaling handle unexpected million-message surges in asynchronous event architectures?",
    options: [
      { id: "a", label: "Discards all messages exceeding 1,000 per hour." },
      { id: "b", label: "Anypoint MQ is fully managed and elastically scales throughput and queue storage automatically across multiple availability zones without manual partition rebalancing." },
      { id: "c", label: "Requires manual server rebooting." },
      { id: "d", label: "Stores excess messages on developer laptops." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_grow_26",
    section: "growth",
    prompt: "In Mule 4, what is the purpose of configuring a Reconnection Strategy on an external connector (e.g. Database, JMS, SFTP)?",
    options: [
      { id: "a", label: "Restarts the client's home WiFi router." },
      { id: "b", label: "Deletes old database records." },
      { id: "c", label: "Defines retry behavior (frequency, count, or `reconnect-forever`) when the connection to the external system is dropped, ensuring self-healing recovery without restart." },
      { id: "d", label: "Sends SMS alerts to the CTO." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_grow_27",
    section: "growth",
    prompt: "What is an Anypoint CLI tool used for in automated enterprise infrastructure operations?",
    options: [
      { id: "a", label: "A text editor for writing emails." },
      { id: "b", label: "A calculator app." },
      { id: "c", label: "A gaming engine." },
      { id: "d", label: "A command-line interface that allows DevOps engineers to script and automate deployments, business group management, API provisioning, and CloudHub scaling." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_grow_28",
    section: "growth",
    prompt: "How can Mule applications maintain high availability when connecting to an Active/Passive clustered database?",
    options: [
      { id: "a", label: "Configure a multi-host JDBC connection URL (e.g. `jdbc:oracle:thin:@(DESCRIPTION=...FAILOVER=ON)`) and connection pooling with validation queries." },
      { id: "b", label: "Hardcode only the active host IP address." },
      { id: "c", label: "Disable database connection validation." },
      { id: "d", label: "Store all database records in RAM." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_grow_29",
    section: "growth",
    prompt: "In Mule 4, what is the benefit of using `pom.xml` dependency management for shared parent POMs across an enterprise integration team?",
    options: [
      { id: "a", label: "Reduces Java source code line counts." },
      { id: "b", label: "Enforces standardized plugin versions, shared corporate repository definitions, unified MUnit coverage rules, and consistent dependency versions across all projects." },
      { id: "c", label: "Translates Mule code into Python." },
      { id: "d", label: "Eliminates the need for Maven." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_grow_30",
    section: "growth",
    prompt: "What is the key performance advantage of deploying Mule applications to CloudHub 2.0 with Private Spaces compared to CloudHub 1.0?",
    options: [
      { id: "a", label: "Eliminates all internet connections." },
      { id: "b", label: "Runs Mule on quantum processors." },
      { id: "c", label: "Built on containerized Kubernetes architecture providing faster startup times, granular vCore sharing (down to 0.05 vCore), ingress path-based routing, and localized private network egress." },
      { id: "d", label: "Replaces Java with assembly language." }
    ],
    correctOptionId: "c"
  }
];

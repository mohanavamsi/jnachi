import { Question } from '../../certTypes';

export const ibmAceGrowthQuestions: Question[] = [
  {
    id: 'ace_gro_01',
    domain: 'growth',
    text: 'What is the primary architectural advantage of running IBM ACE in standalone containerized Integration Servers (e.g. on OpenShift / Kubernetes) compared to legacy monolithic Integration Nodes?',
    options: {
      a: 'Each Integration Server runs as an isolated, lightweight container process that starts in seconds, scales horizontally with Kubernetes HPA, and eliminates single points of failure',
      b: 'It eliminates the need for compiling message flows into BAR files',
      c: 'It converts all ESQL code into Node.js automatically',
      d: 'It removes the need for IP networking'
    },
    correctAnswer: 'a',
    explanation: 'Containerized ACE integration servers align with cloud-native microservices: they package single applications/flows into independent containers that scale independently.'
  },
  {
    id: 'ace_gro_02',
    domain: 'growth',
    text: 'Which Kubernetes Operator is used in IBM Cloud Pak for Integration (CP4I) and OpenShift to manage the declarative deployment and scaling of ACE Integration Servers?',
    options: {
      a: 'IBM App Connect Operator (`IntegrationServer` / `IntegrationRuntime` CRD)',
      b: 'Kube-DNS Operator',
      c: 'Docker Compose Daemon',
      d: 'Helm Ingress Manager'
    },
    correctAnswer: 'a',
    explanation: 'The IBM App Connect Operator manages `IntegrationServer` and `IntegrationRuntime` Custom Resources in Kubernetes/OpenShift.'
  },
  {
    id: 'ace_gro_03',
    domain: 'growth',
    text: 'How does the ACE Unit Test framework (`com.ibm.integration.test.v10.*` in Java) enable automated message flow testing in CI/CD pipelines?',
    options: {
      a: 'It allows developers to write JUnit test classes that record message assemblies (`.mxml`), inject synthetic input messages into specific flow nodes, and assert output message tree structures programmatically without live external backends',
      b: 'It automatically runs flows in production with random inputs',
      c: 'It tests physical CPU temperature',
      d: 'It generates user passwords from dictionaries'
    },
    correctAnswer: 'a',
    explanation: 'The ACE testing framework provides Java JUnit APIs to spy on nodes, inject input assemblies, mock external endpoints, and assert message tree outputs in headless CI/CD runs.'
  },
  {
    id: 'ace_gro_04',
    domain: 'growth',
    text: 'What is a recorded Message Assembly file (`.mxml`) in ACE automated testing?',
    options: {
      a: 'An XML file capturing the exact state of all logical message trees (Root, LocalEnvironment, Environment, ExceptionList) at a specific node terminal during flow execution',
      b: 'An audio file of server alerts',
      c: 'A compiled C++ binary',
      d: 'A database table export in CSV'
    },
    correctAnswer: 'a',
    explanation: 'Message Assembly (`.mxml`) files store full snapshots of message trees at node terminals, used as test inputs or assertion baselines in unit test cases.'
  },
  {
    id: 'ace_gro_05',
    domain: 'growth',
    text: 'How can an integration architect enable native Prometheus metrics emission in an ACE Integration Server for Grafana dashboards?',
    options: {
      a: 'Configure the `ResourceStats` / `Telemetry:` stanza in `server.conf.yaml` to enable the Prometheus metrics endpoint (e.g., `metrics: enabled: true`)',
      b: 'Write a custom ESQL script that pings Prometheus every second',
      c: 'Run a shell script to grep log files every hour',
      d: 'Prometheus metrics are not supported in ACE'
    },
    correctAnswer: 'a',
    explanation: 'ACE provides a native Prometheus metrics exporter in `server.conf.yaml` that exposes CPU, JVM memory, message flow rates, and latency metrics on an HTTP endpoint.'
  },
  {
    id: 'ace_gro_06',
    domain: 'growth',
    text: 'What is the purpose of OpenTelemetry distributed tracing support in IBM ACE v12?',
    options: {
      a: 'It injects and extracts W3C Trace Context headers across HTTP, REST, and messaging flows, enabling end-to-end distributed transaction tracing in Jaeger or Instana',
      b: 'It translates message payloads into Morse code',
      c: 'It measures the physical length of Ethernet cables',
      d: 'It optimizes hard drive spindle speed'
    },
    correctAnswer: 'a',
    explanation: 'OpenTelemetry integration allows ACE to propagate and report span contexts to APM tools like IBM Instana, Dynatrace, or Jaeger for end-to-end distributed observability.'
  },
  {
    id: 'ace_gro_07',
    domain: 'growth',
    text: 'In ACE performance optimization, what parameter controls the number of concurrent worker threads allocated to execute instances of a message flow?',
    options: {
      a: '`Additional Instances` on the message flow or input node',
      b: '`MaxProcessors` in Linux kernel',
      c: '`TCP_WINDOW_SIZE`',
      d: '`HeapExpansionRate`'
    },
    correctAnswer: 'a',
    explanation: 'Configuring `Additional Instances` (e.g. 5 or 10) on a message flow or input node creates a pool of concurrent worker threads to process multiple incoming messages in parallel.'
  },
  {
    id: 'ace_gro_08',
    domain: 'growth',
    text: 'What JVM parameter should be configured in `server.conf.yaml` (`jvmMaxHeapSize`) when an Integration Server processes large volumes of high-memory payload trees?',
    options: {
      a: 'Increase `jvmMaxHeapSize` (e.g. `2048M` or `4096M`) to provide sufficient memory for Java nodes, JSON/XML parser trees, and caching',
      b: 'Reduce heap size to 32MB to save disk space',
      c: 'Disable Java garbage collection permanently',
      d: 'Set heap size to 0'
    },
    correctAnswer: 'a',
    explanation: 'Setting appropriate `jvmMaxHeapSize` prevents `OutOfMemoryError` exceptions when handling large XML/JSON trees or large collections in Java compute nodes.'
  },
  {
    id: 'ace_gro_09',
    domain: 'growth',
    text: 'What is the role of the `ibmint optimize server` command during container image build for ACE microservices?',
    options: {
      a: 'It pre-compiles and deletes unused components, reducing container startup time and memory footprint for cloud-native deployment',
      b: 'It downloads the newest Linux kernel updates',
      c: 'It minifies all ESQL comments',
      d: 'It renames all message flows to numbers'
    },
    correctAnswer: 'a',
    explanation: '`ibmint optimize server` trims unnecessary capabilities and pre-indexes runtime classes to optimize container cold-start times in containerized platforms.'
  },
  {
    id: 'ace_gro_10',
    domain: 'growth',
    text: 'How does an architect prevent memory leaks when manipulating large JSON arrays in Java Compute nodes?',
    options: {
      a: 'Ensure intermediate elements are detached or cleared, and avoid accumulating unbounded static collections in memory across transactions',
      b: 'Convert all JSON payloads to plain text files on disk',
      c: 'Restart the Integration Server after every HTTP request',
      d: 'Avoid using Java compute nodes altogether'
    },
    correctAnswer: 'a',
    explanation: 'Releasing references and clearing unpropagated message trees ensures proper JVM garbage collection and prevents memory leaks under sustained load.'
  },
  {
    id: 'ace_gro_11',
    domain: 'growth',
    text: 'What is the function of the `mqsichangeflowmonitoring` / `ibmint apply overrides` command in ACE operations?',
    options: {
      a: 'To enable or disable business transaction monitoring and event emission on message flows dynamically without modifying source code',
      b: 'To change database passwords across all tables',
      c: 'To format log files as XML',
      d: 'To reboot the host virtual machine'
    },
    correctAnswer: 'a',
    explanation: 'Flow monitoring configuration enables event generation (e.g., transaction start, end, rollback) for business observability without code redeployment.'
  },
  {
    id: 'ace_gro_12',
    domain: 'growth',
    text: 'In cloud-native ACE on Kubernetes, how are environment-specific secrets (e.g. database credentials, TLS certificates) injected into the Integration Server pod?',
    options: {
      a: 'Using Kubernetes Secrets mounted into the work directory or configured via the App Connect Operator `Configuration` CRD (e.g. `type: setdbparms` or `type: vault`)',
      b: 'Hardcoding passwords in the Dockerfile `ENV` instructions',
      c: 'Committing passwords into the public GitHub repository',
      d: 'Typing passwords into the pod terminal manually on startup'
    },
    correctAnswer: 'a',
    explanation: 'The App Connect Operator uses `Configuration` custom resources (backed by Kubernetes Secrets) to inject `setdbparms`, `server.conf.yaml`, policies, and keystores securely.'
  },
  {
    id: 'ace_gro_13',
    domain: 'growth',
    text: 'What is the purpose of the `User Trace` vs `Service Trace` in ACE performance and troubleshooting diagnostics?',
    options: {
      a: 'User Trace captures high-level flow execution steps, ESQL lines, and node transitions; Service Trace captures deep C++/runtime internals for IBM Support',
      b: 'User Trace is for web browsers; Service Trace is for mobile apps',
      c: 'User Trace deletes old files; Service Trace creates new files',
      d: 'User Trace only runs on Windows'
    },
    correctAnswer: 'a',
    explanation: 'User Trace (`mqsichangetrace -u`) traces message flow logic and ESQL execution, while Service Trace (`mqsichangetrace -t`) captures internal engine diagnostics.'
  },
  {
    id: 'ace_gro_14',
    domain: 'growth',
    text: 'When configuring High Availability for stateful message flows (e.g. Aggregation nodes or Resequence nodes), what storage backend is required across Integration Servers?',
    options: {
      a: 'IBM MQ (as the state storage engine) configured with Native HA or Multi-Instance queue managers',
      b: 'A local ephemeral RAM disk',
      c: 'A shared USB thumb drive',
      d: 'A single unbacked SQLite file'
    },
    correctAnswer: 'a',
    explanation: 'Stateful nodes (Aggregate, Collector, Sequence) use IBM MQ queues to store in-flight state, requiring an HA queue manager backend for high availability.'
  },
  {
    id: 'ace_gro_15',
    domain: 'growth',
    text: 'What is the function of the `GlobalCache` (embedded WebSphere eXtreme Scale) in IBM ACE architectures?',
    options: {
      a: 'It provides an in-memory distributed key-value cache across multiple Integration Servers, allowing high-speed data sharing without external database queries',
      b: 'It caches web browser CSS and HTML files',
      c: 'It stores encrypted server passwords',
      d: 'It manages Linux kernel page caches'
    },
    correctAnswer: 'a',
    explanation: 'The embedded Global Cache (WXS) provides distributed in-memory caching accessible via Java and ESQL (`MbGlobalMap`) across flow threads and servers.'
  },
  {
    id: 'ace_gro_16',
    domain: 'growth',
    text: 'How can an integration architect optimize message parsing performance when only a few fields from a large XML document are needed by a routing flow?',
    options: {
      a: 'Use XMLNSC "Opaque Elements" or Partial Parsing (on-demand parsing) to avoid parsing the entire document tree into memory',
      b: 'Convert the XML to a bitmap image',
      c: 'Split the XML into 1-byte chunks',
      d: 'Use SOAP 1.1 with full validation enabled'
    },
    correctAnswer: 'a',
    explanation: 'XMLNSC opaque elements treat designated complex elements as raw unparsed strings, saving CPU cycles and reducing heap footprint dramatically.'
  },
  {
    id: 'ace_gro_17',
    domain: 'growth',
    text: 'In an automated CI/CD pipeline using Tekton or GitHub Actions, what is the sequence of steps to build and deploy an ACE microservice container image?',
    options: {
      a: 'Fetch source code -> Run ACE Unit Tests (`ibmint test`) -> Package BAR (`ibmint package`) -> Build container image with optimized workdir -> Deploy via App Connect Operator CRD',
      b: 'Upload BAR file to Google Drive -> Email administrator -> Restart server manually',
      c: 'Compile C++ source code -> Install Windows Server -> Run mqsistart',
      d: 'Export Eclipse project as zip -> Unzip in production server'
    },
    correctAnswer: 'a',
    explanation: 'Standard cloud-native CI/CD compiles, runs automated unit tests, packages BAR artifacts, builds container images, and updates Kubernetes CRDs declaratively.'
  },
  {
    id: 'ace_gro_18',
    domain: 'growth',
    text: 'What is the role of the `NodeActivity` and `ThreadActivity` statistics in ACE performance tuning?',
    options: {
      a: 'They identify processing bottlenecks by measuring the exact CPU time and elapsed execution time spent inside each individual node and thread in a message flow',
      b: 'They measure the battery life of client laptops',
      c: 'They verify DNS response times',
      d: 'They count lines of code in ESQL modules'
    },
    correctAnswer: 'a',
    explanation: 'Accounting and statistics data at node and thread level pinpoints performance bottlenecks, showing CPU time, elapsed time, and invocation counts per node.'
  },
  {
    id: 'ace_gro_19',
    domain: 'growth',
    text: 'What is the purpose of the `ibmint test` command in ACE v12?',
    options: {
      a: 'It executes automated JUnit unit test suites against compiled BAR files or project workspaces in a headless command-line environment',
      b: 'It tests the network ping to IBM headquarters',
      c: 'It verifies if the monitor screen has dead pixels',
      d: 'It runs an antivirus scan on the server'
    },
    correctAnswer: 'a',
    explanation: '`ibmint test` runs headless unit tests generated with the ACE Unit Test framework, returning exit codes suitable for automated CI/CD gating.'
  },
  {
    id: 'ace_gro_20',
    domain: 'growth',
    text: 'How can an integration architect achieve zero-downtime rolling upgrades for ACE microservices on Red Hat OpenShift?',
    options: {
      a: 'Deploy IntegrationServer pods behind a Kubernetes Service using a `RollingUpdate` deployment strategy with liveness and readiness probes',
      b: 'Stop the entire cluster at midnight and start new servers',
      c: 'Delete the database schema before deploying new code',
      d: 'Change the DNS name of the company website'
    },
    correctAnswer: 'a',
    explanation: 'Kubernetes rolling updates gradually replace old pod instances with new version pods once readiness probes pass, maintaining continuous service availability.'
  },
  {
    id: 'ace_gro_21',
    domain: 'growth',
    text: 'What is the purpose of the `livenessProbe` and `readinessProbe` in an ACE Integration Server pod specification?',
    options: {
      a: '`readinessProbe` verifies the server has finished loading message flows and is ready to accept traffic; `livenessProbe` detects if the process has frozen and restarts it',
      b: 'They monitor the temperature of the server chassis',
      c: 'They verify the legal copyright on source files',
      d: 'They check if the developer is actively logged into the server'
    },
    correctAnswer: 'a',
    explanation: 'Readiness probes prevent traffic from hitting initializing pods, while liveness probes restart deadlocked or non-responsive container instances.'
  },
  {
    id: 'ace_gro_22',
    domain: 'growth',
    text: 'In ESQL, why is avoiding repeated navigation of deep tree paths inside tight loops (e.g. `InputRoot.XMLNSC.A.B.C.D[I]`) recommended for performance?',
    options: {
      a: 'Each deep path expression navigates the syntax tree from the root; using a `REFERENCE TO` pointer avoids repeated tree traversals and improves execution speed',
      b: 'Deep path expressions cause compiler crashes in Eclipse',
      c: 'Tree paths can only be 3 levels deep in ESQL',
      d: 'Repeated path references automatically delete the tree'
    },
    correctAnswer: 'a',
    explanation: 'Declaring `DECLARE ref REFERENCE TO ...` establishes a direct memory pointer, eliminating repetitive overhead of navigating complex syntax trees inside loops.'
  },
  {
    id: 'ace_gro_23',
    domain: 'growth',
    text: 'What is the role of the `CallableFlowManager` policy in ACE callable flows?',
    options: {
      a: 'It configures the connection properties, timeouts, and retry parameters for communication with the Switch server routing callable flow traffic',
      b: 'It manages telephone call logs',
      c: 'It translates SOAP to GraphQL',
      d: 'It sets developer user roles'
    },
    correctAnswer: 'a',
    explanation: 'The `CallableFlowManager` policy controls how callable input/invoke nodes connect and communicate through the intermediate Switch server.'
  },
  {
    id: 'ace_gro_24',
    domain: 'growth',
    text: 'What happens when an Integration Server experiences a fatal C++ core dump or JVM crash?',
    options: {
      a: 'The operating system or container runtime records a core dump/FDC file and Kubernetes or the Integration Node automatically restarts the container instance',
      b: 'All source code is permanently deleted from Git',
      c: 'The server requires a complete reinstallation of Linux',
      d: 'All network interfaces are permanently disabled'
    },
    correctAnswer: 'a',
    explanation: 'Crash diagnostics are written to dump files, and container orchestrators (or integration nodes) automatically restart the server process to restore availability.'
  },
  {
    id: 'ace_gro_25',
    domain: 'growth',
    text: 'What is the function of the `mqsicredentials` / `ibmint credentials` command in ACE v12?',
    options: {
      a: 'To manage and inspect encrypted credentials stored in an Integration Server vault or credentials file',
      b: 'To generate user SSH keys',
      c: 'To decrypt corporate email archives',
      d: 'To print unencrypted passwords to the terminal'
    },
    correctAnswer: 'a',
    explanation: '`ibmint credentials` manages the creation, modification, and verification of encrypted secrets inside ACE credential vaults.'
  },
  {
    id: 'ace_gro_26',
    domain: 'growth',
    text: 'How can an integration architect configure dynamic database connection pooling in ACE to handle high-concurrency workloads?',
    options: {
      a: 'Configure JDBC Providers policies specifying maximum and minimum connection pool sizes, idle timeouts, and connection validation queries',
      b: 'Open a new database connection on every single node execution',
      c: 'Share a single static connection across all flows without pooling',
      d: 'Disable transactions in the database engine'
    },
    correctAnswer: 'a',
    explanation: 'JDBC Provider policies configure connection pooling parameters (`maxConnectionPoolSize`), reusing established database connections across worker threads.'
  },
  {
    id: 'ace_gro_27',
    domain: 'growth',
    text: 'What is the purpose of the `RecordReplay` feature in IBM ACE?',
    options: {
      a: 'To capture in-flight messages passing through message flows into a database repository for business auditing, regulatory compliance, and reprocessing (replay)',
      b: 'To record video screencasts of developers coding message flows',
      c: 'To record audio from server microphones',
      d: 'To replay git commit histories'
    },
    correctAnswer: 'a',
    explanation: 'Record and Replay captures complete message assemblies into a database for regulatory tracking, audit investigations, and re-injecting failed messages back into flows.'
  },
  {
    id: 'ace_gro_28',
    domain: 'growth',
    text: 'In high-scale ACE deployments, why is externalizing business configuration into Policy Projects preferable to embedding values directly in ESQL/Java code?',
    options: {
      a: 'It allows updating endpoints, credentials, and tuning parameters across environments without recompiling or redeploying message flow code artifacts',
      b: 'It reduces the size of the computer screen needed for development',
      c: 'It makes message flows run in single-threaded mode',
      d: 'It converts XML schemas into SQL DDL'
    },
    correctAnswer: 'a',
    explanation: 'Policy projects decouple environment-specific configurations from message flow code, enabling seamless promotion across Dev, Test, and Prod stages.'
  },
  {
    id: 'ace_gro_29',
    domain: 'growth',
    text: 'What is the function of the `Activity Log` configurable service / policy in IBM ACE?',
    options: {
      a: 'It provides real-time high-level contextual logging of flow interactions with external systems (e.g. database connections, MQ puts, HTTP calls) visible in the web UI',
      b: 'It tracks developer clock-in and clock-out times',
      c: 'It measures the temperature of the server room',
      d: 'It calculates cloud infrastructure monthly costs'
    },
    correctAnswer: 'a',
    explanation: 'Activity Logs provide operational visibility into recent integration events, showing connection statuses, message arrivals, and error summaries.'
  },
  {
    id: 'ace_gro_30',
    domain: 'growth',
    text: 'How does the App Connect Enterprise Dashboard provide enterprise-wide governance across distributed Integration Runtimes?',
    options: {
      a: 'It aggregates operational health, deployed integrations, logs, and telemetry across multi-cluster CP4I and standalone ACE runtimes in a unified web console',
      b: 'It acts as an operating system kernel',
      c: 'It replaces all database backup software',
      d: 'It provides automated video editing tools'
    },
    correctAnswer: 'a',
    explanation: 'The ACE Dashboard provides centralized management, monitoring, and operational visibility across all containerized and on-premises integration runtimes.'
  }
];

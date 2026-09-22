import { CertQuestion } from '../types';

export const IBM_ACE_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "ace_gro_01",
    "section": "growth",
    "prompt": "What is the primary architectural advantage of running IBM ACE in standalone containerized Integration Servers (e.g. on OpenShift / Kubernetes) compared to legacy monolithic Integration Nodes?",
    "options": [
      {
        "id": "a",
        "label": "It eliminates the need for compiling message flows into BAR files"
      },
      {
        "id": "b",
        "label": "Each Integration Server runs as an isolated, lightweight container process that starts in seconds, scales horizontally with Kubernetes HPA, and eliminates single points of failure"
      },
      {
        "id": "c",
        "label": "It converts all ESQL code into Node.js automatically"
      },
      {
        "id": "d",
        "label": "It removes the need for IP networking"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_gro_02",
    "section": "growth",
    "prompt": "Which Kubernetes Operator is used in IBM Cloud Pak for Integration (CP4I) and OpenShift to manage the declarative deployment and scaling of ACE Integration Servers?",
    "options": [
      {
        "id": "a",
        "label": "Kube-DNS Operator"
      },
      {
        "id": "b",
        "label": "Docker Compose Daemon"
      },
      {
        "id": "c",
        "label": "IBM App Connect Operator (`IntegrationServer` / `IntegrationRuntime` CRD)"
      },
      {
        "id": "d",
        "label": "Helm Ingress Manager"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_gro_03",
    "section": "growth",
    "prompt": "How does the ACE Unit Test framework (`com.ibm.integration.test.v10.*` in Java) enable automated message flow testing in CI/CD pipelines?",
    "options": [
      {
        "id": "a",
        "label": "It allows developers to write JUnit test classes that record message assemblies (`.mxml`), inject synthetic input messages into specific flow nodes, and assert output message tree structures programmatically without live external backends"
      },
      {
        "id": "b",
        "label": "It automatically runs flows in production with random inputs"
      },
      {
        "id": "c",
        "label": "It tests physical CPU temperature"
      },
      {
        "id": "d",
        "label": "It generates user passwords from dictionaries"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_gro_04",
    "section": "growth",
    "prompt": "What is a recorded Message Assembly file (`.mxml`) in ACE automated testing?",
    "options": [
      {
        "id": "a",
        "label": "An audio file of server alerts"
      },
      {
        "id": "b",
        "label": "A compiled C++ binary"
      },
      {
        "id": "c",
        "label": "A database table export in CSV"
      },
      {
        "id": "d",
        "label": "An XML file capturing the exact state of all logical message trees (Root, LocalEnvironment, Environment, ExceptionList) at a specific node terminal during flow execution"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_gro_05",
    "section": "growth",
    "prompt": "How can an integration architect enable native Prometheus metrics emission in an ACE Integration Server for Grafana dashboards?",
    "options": [
      {
        "id": "a",
        "label": "Write a custom ESQL script that pings Prometheus every second"
      },
      {
        "id": "b",
        "label": "Run a shell script to grep log files every hour"
      },
      {
        "id": "c",
        "label": "Configure the `ResourceStats` / `Telemetry:` stanza in `server.conf.yaml` to enable the Prometheus metrics endpoint (e.g., `metrics: enabled: true`)"
      },
      {
        "id": "d",
        "label": "Prometheus metrics are not supported in ACE"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_gro_06",
    "section": "growth",
    "prompt": "What is the purpose of OpenTelemetry distributed tracing support in IBM ACE v12?",
    "options": [
      {
        "id": "a",
        "label": "It injects and extracts W3C Trace Context headers across HTTP, REST, and messaging flows, enabling end-to-end distributed transaction tracing in Jaeger or Instana"
      },
      {
        "id": "b",
        "label": "It translates message payloads into Morse code"
      },
      {
        "id": "c",
        "label": "It measures the physical length of Ethernet cables"
      },
      {
        "id": "d",
        "label": "It optimizes hard drive spindle speed"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_gro_07",
    "section": "growth",
    "prompt": "In ACE performance optimization, what parameter controls the number of concurrent worker threads allocated to execute instances of a message flow?",
    "options": [
      {
        "id": "a",
        "label": "`MaxProcessors` in Linux kernel"
      },
      {
        "id": "b",
        "label": "`TCP_WINDOW_SIZE`"
      },
      {
        "id": "c",
        "label": "`HeapExpansionRate`"
      },
      {
        "id": "d",
        "label": "`Additional Instances` on the message flow or input node"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_gro_08",
    "section": "growth",
    "prompt": "What JVM parameter should be configured in `server.conf.yaml` (`jvmMaxHeapSize`) when an Integration Server processes large volumes of high-memory payload trees?",
    "options": [
      {
        "id": "a",
        "label": "Reduce heap size to 32MB to save disk space"
      },
      {
        "id": "b",
        "label": "Increase `jvmMaxHeapSize` (e.g. `2048M` or `4096M`) to provide sufficient memory for Java nodes, JSON/XML parser trees, and caching"
      },
      {
        "id": "c",
        "label": "Disable Java garbage collection permanently"
      },
      {
        "id": "d",
        "label": "Set heap size to 0"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_gro_09",
    "section": "growth",
    "prompt": "What is the role of the `ibmint optimize server` command during container image build for ACE microservices?",
    "options": [
      {
        "id": "a",
        "label": "It downloads the newest Linux kernel updates"
      },
      {
        "id": "b",
        "label": "It minifies all ESQL comments"
      },
      {
        "id": "c",
        "label": "It renames all message flows to numbers"
      },
      {
        "id": "d",
        "label": "It pre-compiles and deletes unused components, reducing container startup time and memory footprint for cloud-native deployment"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_gro_10",
    "section": "growth",
    "prompt": "How does an architect prevent memory leaks when manipulating large JSON arrays in Java Compute nodes?",
    "options": [
      {
        "id": "a",
        "label": "Convert all JSON payloads to plain text files on disk"
      },
      {
        "id": "b",
        "label": "Ensure intermediate elements are detached or cleared, and avoid accumulating unbounded static collections in memory across transactions"
      },
      {
        "id": "c",
        "label": "Restart the Integration Server after every HTTP request"
      },
      {
        "id": "d",
        "label": "Avoid using Java compute nodes altogether"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_gro_11",
    "section": "growth",
    "prompt": "What is the function of the `mqsichangeflowmonitoring` / `ibmint apply overrides` command in ACE operations?",
    "options": [
      {
        "id": "a",
        "label": "To change database passwords across all tables"
      },
      {
        "id": "b",
        "label": "To format log files as XML"
      },
      {
        "id": "c",
        "label": "To enable or disable business transaction monitoring and event emission on message flows dynamically without modifying source code"
      },
      {
        "id": "d",
        "label": "To reboot the host virtual machine"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_gro_12",
    "section": "growth",
    "prompt": "In cloud-native ACE on Kubernetes, how are environment-specific secrets (e.g. database credentials, TLS certificates) injected into the Integration Server pod?",
    "options": [
      {
        "id": "a",
        "label": "Using Kubernetes Secrets mounted into the work directory or configured via the App Connect Operator `Configuration` CRD (e.g. `type: setdbparms` or `type: vault`)"
      },
      {
        "id": "b",
        "label": "Hardcoding passwords in the Dockerfile `ENV` instructions"
      },
      {
        "id": "c",
        "label": "Committing passwords into the public GitHub repository"
      },
      {
        "id": "d",
        "label": "Typing passwords into the pod terminal manually on startup"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_gro_13",
    "section": "growth",
    "prompt": "What is the purpose of the `User Trace` vs `Service Trace` in ACE performance and troubleshooting diagnostics?",
    "options": [
      {
        "id": "a",
        "label": "User Trace captures high-level flow execution steps, ESQL lines, and node transitions; Service Trace captures deep C++/runtime internals for IBM Support"
      },
      {
        "id": "b",
        "label": "User Trace is for web browsers; Service Trace is for mobile apps"
      },
      {
        "id": "c",
        "label": "User Trace deletes old files; Service Trace creates new files"
      },
      {
        "id": "d",
        "label": "User Trace only runs on Windows"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_gro_14",
    "section": "growth",
    "prompt": "When configuring High Availability for stateful message flows (e.g. Aggregation nodes or Resequence nodes), what storage backend is required across Integration Servers?",
    "options": [
      {
        "id": "a",
        "label": "A local ephemeral RAM disk"
      },
      {
        "id": "b",
        "label": "A shared USB thumb drive"
      },
      {
        "id": "c",
        "label": "A single unbacked SQLite file"
      },
      {
        "id": "d",
        "label": "IBM MQ (as the state storage engine) configured with Native HA or Multi-Instance queue managers"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_gro_15",
    "section": "growth",
    "prompt": "What is the function of the `GlobalCache` (embedded WebSphere eXtreme Scale) in IBM ACE architectures?",
    "options": [
      {
        "id": "a",
        "label": "It caches web browser CSS and HTML files"
      },
      {
        "id": "b",
        "label": "It provides an in-memory distributed key-value cache across multiple Integration Servers, allowing high-speed data sharing without external database queries"
      },
      {
        "id": "c",
        "label": "It stores encrypted server passwords"
      },
      {
        "id": "d",
        "label": "It manages Linux kernel page caches"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_gro_16",
    "section": "growth",
    "prompt": "How can an integration architect optimize message parsing performance when only a few fields from a large XML document are needed by a routing flow?",
    "options": [
      {
        "id": "a",
        "label": "Convert the XML to a bitmap image"
      },
      {
        "id": "b",
        "label": "Split the XML into 1-byte chunks"
      },
      {
        "id": "c",
        "label": "Use XMLNSC \"Opaque Elements\" or Partial Parsing (on-demand parsing) to avoid parsing the entire document tree into memory"
      },
      {
        "id": "d",
        "label": "Use SOAP 1.1 with full validation enabled"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_gro_17",
    "section": "growth",
    "prompt": "In an automated CI/CD pipeline using Tekton or GitHub Actions, what is the sequence of steps to build and deploy an ACE microservice container image?",
    "options": [
      {
        "id": "a",
        "label": "Upload BAR file to Google Drive -> Email administrator -> Restart server manually"
      },
      {
        "id": "b",
        "label": "Fetch source code -> Run ACE Unit Tests (`ibmint test`) -> Package BAR (`ibmint package`) -> Build container image with optimized workdir -> Deploy via App Connect Operator CRD"
      },
      {
        "id": "c",
        "label": "Compile C++ source code -> Install Windows Server -> Run mqsistart"
      },
      {
        "id": "d",
        "label": "Export Eclipse project as zip -> Unzip in production server"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_gro_18",
    "section": "growth",
    "prompt": "What is the role of the `NodeActivity` and `ThreadActivity` statistics in ACE performance tuning?",
    "options": [
      {
        "id": "a",
        "label": "They identify processing bottlenecks by measuring the exact CPU time and elapsed execution time spent inside each individual node and thread in a message flow"
      },
      {
        "id": "b",
        "label": "They measure the battery life of client laptops"
      },
      {
        "id": "c",
        "label": "They verify DNS response times"
      },
      {
        "id": "d",
        "label": "They count lines of code in ESQL modules"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_gro_19",
    "section": "growth",
    "prompt": "What is the purpose of the `ibmint test` command in ACE v12?",
    "options": [
      {
        "id": "a",
        "label": "It tests the network ping to IBM headquarters"
      },
      {
        "id": "b",
        "label": "It verifies if the monitor screen has dead pixels"
      },
      {
        "id": "c",
        "label": "It runs an antivirus scan on the server"
      },
      {
        "id": "d",
        "label": "It executes automated JUnit unit test suites against compiled BAR files or project workspaces in a headless command-line environment"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_gro_20",
    "section": "growth",
    "prompt": "How can an integration architect achieve zero-downtime rolling upgrades for ACE microservices on Red Hat OpenShift?",
    "options": [
      {
        "id": "a",
        "label": "Stop the entire cluster at midnight and start new servers"
      },
      {
        "id": "b",
        "label": "Delete the database schema before deploying new code"
      },
      {
        "id": "c",
        "label": "Deploy IntegrationServer pods behind a Kubernetes Service using a `RollingUpdate` deployment strategy with liveness and readiness probes"
      },
      {
        "id": "d",
        "label": "Change the DNS name of the company website"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_gro_21",
    "section": "growth",
    "prompt": "What is the purpose of the `livenessProbe` and `readinessProbe` in an ACE Integration Server pod specification?",
    "options": [
      {
        "id": "a",
        "label": "They monitor the temperature of the server chassis"
      },
      {
        "id": "b",
        "label": "They verify the legal copyright on source files"
      },
      {
        "id": "c",
        "label": "`readinessProbe` verifies the server has finished loading message flows and is ready to accept traffic; `livenessProbe` detects if the process has frozen and restarts it"
      },
      {
        "id": "d",
        "label": "They check if the developer is actively logged into the server"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_gro_22",
    "section": "growth",
    "prompt": "In ESQL, why is avoiding repeated navigation of deep tree paths inside tight loops (e.g. `InputRoot.XMLNSC.A.B.C.D[I]`) recommended for performance?",
    "options": [
      {
        "id": "a",
        "label": "Deep path expressions cause compiler crashes in Eclipse"
      },
      {
        "id": "b",
        "label": "Tree paths can only be 3 levels deep in ESQL"
      },
      {
        "id": "c",
        "label": "Repeated path references automatically delete the tree"
      },
      {
        "id": "d",
        "label": "Each deep path expression navigates the syntax tree from the root; using a `REFERENCE TO` pointer avoids repeated tree traversals and improves execution speed"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_gro_23",
    "section": "growth",
    "prompt": "What is the role of the `CallableFlowManager` policy in ACE callable flows?",
    "options": [
      {
        "id": "a",
        "label": "It configures the connection properties, timeouts, and retry parameters for communication with the Switch server routing callable flow traffic"
      },
      {
        "id": "b",
        "label": "It manages telephone call logs"
      },
      {
        "id": "c",
        "label": "It translates SOAP to GraphQL"
      },
      {
        "id": "d",
        "label": "It sets developer user roles"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_gro_24",
    "section": "growth",
    "prompt": "What happens when an Integration Server experiences a fatal C++ core dump or JVM crash?",
    "options": [
      {
        "id": "a",
        "label": "All source code is permanently deleted from Git"
      },
      {
        "id": "b",
        "label": "The operating system or container runtime records a core dump/FDC file and Kubernetes or the Integration Node automatically restarts the container instance"
      },
      {
        "id": "c",
        "label": "The server requires a complete reinstallation of Linux"
      },
      {
        "id": "d",
        "label": "All network interfaces are permanently disabled"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_gro_25",
    "section": "growth",
    "prompt": "What is the function of the `mqsicredentials` / `ibmint credentials` command in ACE v12?",
    "options": [
      {
        "id": "a",
        "label": "To generate user SSH keys"
      },
      {
        "id": "b",
        "label": "To decrypt corporate email archives"
      },
      {
        "id": "c",
        "label": "To print unencrypted passwords to the terminal"
      },
      {
        "id": "d",
        "label": "To manage and inspect encrypted credentials stored in an Integration Server vault or credentials file"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_gro_26",
    "section": "growth",
    "prompt": "How can an integration architect configure dynamic database connection pooling in ACE to handle high-concurrency workloads?",
    "options": [
      {
        "id": "a",
        "label": "Open a new database connection on every single node execution"
      },
      {
        "id": "b",
        "label": "Share a single static connection across all flows without pooling"
      },
      {
        "id": "c",
        "label": "Configure JDBC Providers policies specifying maximum and minimum connection pool sizes, idle timeouts, and connection validation queries"
      },
      {
        "id": "d",
        "label": "Disable transactions in the database engine"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_gro_27",
    "section": "growth",
    "prompt": "What is the purpose of the `RecordReplay` feature in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "To record video screencasts of developers coding message flows"
      },
      {
        "id": "b",
        "label": "To capture in-flight messages passing through message flows into a database repository for business auditing, regulatory compliance, and reprocessing (replay)"
      },
      {
        "id": "c",
        "label": "To record audio from server microphones"
      },
      {
        "id": "d",
        "label": "To replay git commit histories"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_gro_28",
    "section": "growth",
    "prompt": "In high-scale ACE deployments, why is externalizing business configuration into Policy Projects preferable to embedding values directly in ESQL/Java code?",
    "options": [
      {
        "id": "a",
        "label": "It allows updating endpoints, credentials, and tuning parameters across environments without recompiling or redeploying message flow code artifacts"
      },
      {
        "id": "b",
        "label": "It reduces the size of the computer screen needed for development"
      },
      {
        "id": "c",
        "label": "It makes message flows run in single-threaded mode"
      },
      {
        "id": "d",
        "label": "It converts XML schemas into SQL DDL"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_gro_29",
    "section": "growth",
    "prompt": "What is the function of the `Activity Log` configurable service / policy in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "It provides real-time high-level contextual logging of flow interactions with external systems (e.g. database connections, MQ puts, HTTP calls) visible in the web UI"
      },
      {
        "id": "b",
        "label": "It tracks developer clock-in and clock-out times"
      },
      {
        "id": "c",
        "label": "It measures the temperature of the server room"
      },
      {
        "id": "d",
        "label": "It calculates cloud infrastructure monthly costs"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_gro_30",
    "section": "growth",
    "prompt": "How does the App Connect Enterprise Dashboard provide enterprise-wide governance across distributed Integration Runtimes?",
    "options": [
      {
        "id": "a",
        "label": "It acts as an operating system kernel"
      },
      {
        "id": "b",
        "label": "It aggregates operational health, deployed integrations, logs, and telemetry across multi-cluster CP4I and standalone ACE runtimes in a unified web console"
      },
      {
        "id": "c",
        "label": "It replaces all database backup software"
      },
      {
        "id": "d",
        "label": "It provides automated video editing tools"
      }
    ],
    "correctOptionId": "b"
  }
];

import { CertQuestion } from '../types';

export const IBM_ACE_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "ace_lit_01",
    "section": "literacy",
    "prompt": "In IBM App Connect Enterprise (ACE) v11/v12, what is an Integration Server?",
    "options": [
      {
        "id": "a",
        "label": "A hardware rack dedicated to compiling ESQL code"
      },
      {
        "id": "b",
        "label": "An independent runtime execution container (process) that executes deployed message flows, parsers, and node logic, which can run under an Integration Node or as a standalone container"
      },
      {
        "id": "c",
        "label": "A web browser extension for debugging flow charts"
      },
      {
        "id": "d",
        "label": "A relational database server storing historical audit logs"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_lit_02",
    "section": "literacy",
    "prompt": "What is the standard archive package format used to deploy ACE applications, libraries, message flows, and policies to an Integration Server?",
    "options": [
      {
        "id": "a",
        "label": "EAR (Enterprise Archive) file (`.ear`)"
      },
      {
        "id": "b",
        "label": "WAR (Web Archive) file (`.war`)"
      },
      {
        "id": "c",
        "label": "BAR (Broker Archive) file (`.bar`)"
      },
      {
        "id": "d",
        "label": "TAR.GZ archive file"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_lit_03",
    "section": "literacy",
    "prompt": "Which domain parser in IBM ACE is optimized for high-performance parsing and building of XML documents with on-demand parsing and compact memory tree structures?",
    "options": [
      {
        "id": "a",
        "label": "XMLNSC"
      },
      {
        "id": "b",
        "label": "MRM"
      },
      {
        "id": "c",
        "label": "SOAP"
      },
      {
        "id": "d",
        "label": "MIME"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_lit_04",
    "section": "literacy",
    "prompt": "What is Data Format Description Language (DFDL) used for in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "A programming language for writing database triggers in SQL"
      },
      {
        "id": "b",
        "label": "A protocol for encrypting TLS 1.3 channel sessions"
      },
      {
        "id": "c",
        "label": "A format for creating user interface web forms"
      },
      {
        "id": "d",
        "label": "An open standard XML-based schema language used to describe the structure and layout of general text and binary data formats (e.g. fixed-length COBOL copybooks, CSV, EDI, ISO8583)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_lit_05",
    "section": "literacy",
    "prompt": "In the ACE Logical Message Tree architecture, which root subtree contains operational header data like transport identifiers, HTTP status codes, and JMS headers?",
    "options": [
      {
        "id": "a",
        "label": "`Root.XMLNSC.Payload`"
      },
      {
        "id": "b",
        "label": "`Root.Database`"
      },
      {
        "id": "c",
        "label": "Properties and Transport Headers (e.g., `Root.HTTPInputHeader`, `Root.MQMD`, `Root.Properties`)"
      },
      {
        "id": "d",
        "label": "`Root.DestinationData`"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_lit_06",
    "section": "literacy",
    "prompt": "What is the primary difference between a Shared Library and a Static Library in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "A Shared Library is deployed independently and shared by multiple applications at runtime in a single copy; a Static Library is bundled and embedded into each referencing application"
      },
      {
        "id": "b",
        "label": "A Shared Library only contains Java code, while a Static Library only contains ESQL"
      },
      {
        "id": "c",
        "label": "A Static Library can only be deployed in test environments"
      },
      {
        "id": "d",
        "label": "A Shared Library cannot be updated without restarting the host operating system"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_lit_07",
    "section": "literacy",
    "prompt": "Which command-line tool is used in ACE v11/v12 to package message flow resources and libraries into a BAR file in automated CI/CD pipelines?",
    "options": [
      {
        "id": "a",
        "label": "jar -cvf bar.zip"
      },
      {
        "id": "b",
        "label": "mvn compile -bar"
      },
      {
        "id": "c",
        "label": "npm run ace-build"
      },
      {
        "id": "d",
        "label": "ibmint package / mqsipackagebar"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_lit_08",
    "section": "literacy",
    "prompt": "What is a Policy Project in IBM App Connect Enterprise v11/v12?",
    "options": [
      {
        "id": "a",
        "label": "A set of legal terms and privacy agreements displayed to end-users"
      },
      {
        "id": "b",
        "label": "A project containing XML-based policy documents that define environment-specific runtime configurations (such as DB credentials, MQ connections, MQTT endpoints, and security profiles) separately from code"
      },
      {
        "id": "c",
        "label": "A list of user passwords stored in plaintext"
      },
      {
        "id": "d",
        "label": "A unit test execution configuration file"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_lit_09",
    "section": "literacy",
    "prompt": "Which command is used to start an independent (standalone) Integration Server from a pre-configured work directory in ACE v11/v12?",
    "options": [
      {
        "id": "a",
        "label": "mqsistart -server /path/to/workdir"
      },
      {
        "id": "b",
        "label": "startace --dir /path/to/workdir"
      },
      {
        "id": "c",
        "label": "runace /path/to/workdir"
      },
      {
        "id": "d",
        "label": "IntegrationServer --work-dir /path/to/workdir"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_lit_10",
    "section": "literacy",
    "prompt": "What is the role of the `server.conf.yaml` configuration file in an ACE Integration Server work directory?",
    "options": [
      {
        "id": "a",
        "label": "It stores the source code of all ESQL compute modules"
      },
      {
        "id": "b",
        "label": "It defines all runtime configuration settings for the Integration Server (HTTP listener ports, JVM heap sizes, keystores, admin security, telemetry, and tracing)"
      },
      {
        "id": "c",
        "label": "It acts as the database table schema for local queues"
      },
      {
        "id": "d",
        "label": "It contains the license terms for IBM Cloud Pak"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_lit_11",
    "section": "literacy",
    "prompt": "In an ACE message flow, what is the role of the `Environment` tree (`Environment.Variables`)?",
    "options": [
      {
        "id": "a",
        "label": "The operating system environment variables table on the host machine"
      },
      {
        "id": "b",
        "label": "A log buffer that flushes automatically every 5 seconds"
      },
      {
        "id": "c",
        "label": "A scratchpad tree that is accessible across all nodes in a message flow execution thread and persists data throughout the life of the transaction without being sent over the wire"
      },
      {
        "id": "d",
        "label": "An encrypted token repository for OAuth tokens"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_lit_12",
    "section": "literacy",
    "prompt": "What is the purpose of the `LocalEnvironment` tree in ACE message flows?",
    "options": [
      {
        "id": "a",
        "label": "It carries runtime flow control instructions, routing targets (`LocalEnvironment.Destination`), REST URI path parameters, and dynamic overrides for downstream nodes"
      },
      {
        "id": "b",
        "label": "It holds local host IP configurations"
      },
      {
        "id": "c",
        "label": "It stores uncommitted database SQL statements"
      },
      {
        "id": "d",
        "label": "It acts as a local browser cache"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_lit_13",
    "section": "literacy",
    "prompt": "What is the function of the `ExceptionList` tree in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "It contains detailed diagnostic diagnostic information and error stack traces whenever an unhandled exception or error occurs during flow execution"
      },
      {
        "id": "b",
        "label": "It lists users who are exempt from password expiration rules"
      },
      {
        "id": "c",
        "label": "It filters out unwanted HTTP headers from incoming requests"
      },
      {
        "id": "d",
        "label": "It disables error logging for specific message flows"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_lit_14",
    "section": "literacy",
    "prompt": "Which domain parser should be selected in an Input node when the incoming message payload is a standard JSON object or array?",
    "options": [
      {
        "id": "a",
        "label": "XMLNSC"
      },
      {
        "id": "b",
        "label": "BLOB"
      },
      {
        "id": "c",
        "label": "MRM"
      },
      {
        "id": "d",
        "label": "JSON"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_lit_15",
    "section": "literacy",
    "prompt": "What type of parser is used when ACE treats a message payload as an unparsed, opaque sequence of raw binary bytes?",
    "options": [
      {
        "id": "a",
        "label": "JSON"
      },
      {
        "id": "b",
        "label": "BLOB"
      },
      {
        "id": "c",
        "label": "XMLNSC"
      },
      {
        "id": "d",
        "label": "DFDL"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_lit_16",
    "section": "literacy",
    "prompt": "What is the purpose of a Subflow in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "A background thread that runs when the main server is idle"
      },
      {
        "id": "b",
        "label": "A flow that processes only non-persistent messages"
      },
      {
        "id": "c",
        "label": "A reusable sequence of message flow nodes packaged as a single node that can be embedded into multiple message flows"
      },
      {
        "id": "d",
        "label": "A flow compiled into native C++ machine code"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_lit_17",
    "section": "literacy",
    "prompt": "In ACE v11/v12, what format is used to define Policy documents inside a Policy Project?",
    "options": [
      {
        "id": "a",
        "label": "JSON schemas (`.json`)"
      },
      {
        "id": "b",
        "label": "XML policy descriptor files (`.policyxml`)"
      },
      {
        "id": "c",
        "label": "YAML documents (`.yaml`)"
      },
      {
        "id": "d",
        "label": "Java properties files (`.properties`)"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_lit_18",
    "section": "literacy",
    "prompt": "Which ACE command deploys a BAR file to a running Integration Server named \"default\" on an Integration Node named \"NODE1\"?",
    "options": [
      {
        "id": "a",
        "label": "mqsideploy NODE1 -e default -a /path/to/app.bar"
      },
      {
        "id": "b",
        "label": "runbar NODE1/default /path/to/app.bar"
      },
      {
        "id": "c",
        "label": "install-bar --node NODE1 --server default --file app.bar"
      },
      {
        "id": "d",
        "label": "deployace -n NODE1 -s default -f app.bar"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_lit_19",
    "section": "literacy",
    "prompt": "What is the function of the `mqsilist` command in ACE administration?",
    "options": [
      {
        "id": "a",
        "label": "It lists all registered user passwords in plaintext"
      },
      {
        "id": "b",
        "label": "It lists available network printers on the corporate LAN"
      },
      {
        "id": "c",
        "label": "It outputs git commit logs"
      },
      {
        "id": "d",
        "label": "It lists installed integration nodes, integration servers, and deployed applications/flows and their operational status"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_lit_20",
    "section": "literacy",
    "prompt": "What is the role of an IBM ACE Application container in development and deployment?",
    "options": [
      {
        "id": "a",
        "label": "A virtual machine running Linux kernel"
      },
      {
        "id": "b",
        "label": "A physical server appliance in a data center"
      },
      {
        "id": "c",
        "label": "A top-level container used to group related message flows, libraries, and resources into a single deployable and manageable unit"
      },
      {
        "id": "d",
        "label": "A web browser window hosting the web UI"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_lit_21",
    "section": "literacy",
    "prompt": "Which node in IBM ACE is used to catch and handle errors originating from downstream nodes in a message flow branch?",
    "options": [
      {
        "id": "a",
        "label": "Filter Node"
      },
      {
        "id": "b",
        "label": "Compute Node"
      },
      {
        "id": "c",
        "label": "TryCatch Node"
      },
      {
        "id": "d",
        "label": "Trace Node"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_lit_22",
    "section": "literacy",
    "prompt": "What is the purpose of the `Trace` node in ACE message flows?",
    "options": [
      {
        "id": "a",
        "label": "To measure network ping latency to external web servers"
      },
      {
        "id": "b",
        "label": "To decrypt SSL certificates in memory"
      },
      {
        "id": "c",
        "label": "To roll back database transactions automatically"
      },
      {
        "id": "d",
        "label": "To write diagnostic trace records, message tree contents, or custom log strings to local files, user trace logs, or stdout"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_lit_23",
    "section": "literacy",
    "prompt": "In ACE development, what is the role of the IBM App Connect Enterprise Toolkit?",
    "options": [
      {
        "id": "a",
        "label": "An Eclipse-based Integrated Development Environment (IDE) used to visually design message flows, author ESQL/Java logic, test, and package BAR files"
      },
      {
        "id": "b",
        "label": "A hardware screwdriver kit for server maintenance"
      },
      {
        "id": "c",
        "label": "A command-line text editor for Linux terminals"
      },
      {
        "id": "d",
        "label": "An automated testing robot for hardware stress testing"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_lit_24",
    "section": "literacy",
    "prompt": "What occurs when an Input node's `Catch` terminal is not wired to any error handling subflow and an exception occurs in the main flow?",
    "options": [
      {
        "id": "a",
        "label": "The integration server process is killed immediately"
      },
      {
        "id": "b",
        "label": "The message is rolled back to the transport source (e.g. back to the MQ queue or an HTTP 500 error is returned) and logged in the system log"
      },
      {
        "id": "c",
        "label": "The message payload is replaced with random bytes"
      },
      {
        "id": "d",
        "label": "The error is ignored and processing continues successfully"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_lit_25",
    "section": "literacy",
    "prompt": "What is the purpose of the `mqsicreatebar` command?",
    "options": [
      {
        "id": "a",
        "label": "To generate a barcode for product inventory"
      },
      {
        "id": "b",
        "label": "To format a new hard disk partition for ACE"
      },
      {
        "id": "c",
        "label": "To create a new user account in Linux"
      },
      {
        "id": "d",
        "label": "To create a new BAR file and add message flows, schemas, and libraries to it from the command line"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_lit_26",
    "section": "literacy",
    "prompt": "Which ACE built-in node allows sending a message to multiple output terminals conditionally based on boolean evaluation expressions?",
    "options": [
      {
        "id": "a",
        "label": "Passthrough Node"
      },
      {
        "id": "b",
        "label": "BLOB Node"
      },
      {
        "id": "c",
        "label": "Route Node (or Filter Node)"
      },
      {
        "id": "d",
        "label": "Trace Node"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_lit_27",
    "section": "literacy",
    "prompt": "What is the purpose of the `mqsireportproperties` / `ibmint report` command?",
    "options": [
      {
        "id": "a",
        "label": "To export database records to CSV"
      },
      {
        "id": "b",
        "label": "To inspect and display active runtime properties and configurable parameters of an integration node or integration server"
      },
      {
        "id": "c",
        "label": "To generate weekly billing invoices for IBM software"
      },
      {
        "id": "d",
        "label": "To list user passwords"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_lit_28",
    "section": "literacy",
    "prompt": "In ACE v12, how is an Integration Server work directory initialized using command line?",
    "options": [
      {
        "id": "a",
        "label": "`mqsicreateworkdir /path/to/workdir` or `ibmint create workdir /path/to/workdir`"
      },
      {
        "id": "b",
        "label": "`mkdir /path/to/workdir && touch ace.ini`"
      },
      {
        "id": "c",
        "label": "`init-ace /path/to/workdir`"
      },
      {
        "id": "d",
        "label": "`format-workdir /path/to/workdir`"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_lit_29",
    "section": "literacy",
    "prompt": "What type of message tree domain is created when parsing an HTTP multipart MIME message with attachments?",
    "options": [
      {
        "id": "a",
        "label": "MIME"
      },
      {
        "id": "b",
        "label": "JSON"
      },
      {
        "id": "c",
        "label": "XMLNSC"
      },
      {
        "id": "d",
        "label": "DFDL"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_lit_30",
    "section": "literacy",
    "prompt": "What is the role of the `ResetContentDescriptor` (RCD) node in an ACE message flow?",
    "options": [
      {
        "id": "a",
        "label": "To clear all variables in the `Environment` tree"
      },
      {
        "id": "b",
        "label": "To re-parse a message payload using a different domain parser, message model, or message format without altering the underlying byte content"
      },
      {
        "id": "c",
        "label": "To disconnect an active database connection pool"
      },
      {
        "id": "d",
        "label": "To restart the integration server"
      }
    ],
    "correctOptionId": "b"
  }
];

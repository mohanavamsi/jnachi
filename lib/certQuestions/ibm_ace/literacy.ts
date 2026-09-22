import { Question } from '../../certTypes';

export const ibmAceLiteracyQuestions: Question[] = [
  {
    id: 'ace_lit_01',
    domain: 'literacy',
    text: 'In IBM App Connect Enterprise (ACE) v11/v12, what is an Integration Server?',
    options: {
      a: 'An independent runtime execution container (process) that executes deployed message flows, parsers, and node logic, which can run under an Integration Node or as a standalone container',
      b: 'A hardware rack dedicated to compiling ESQL code',
      c: 'A web browser extension for debugging flow charts',
      d: 'A relational database server storing historical audit logs'
    },
    correctAnswer: 'a',
    explanation: 'An Integration Server is the core runtime execution engine in ACE. In modern ACE, it can run managed under an Integration Node or independently as an isolated cloud-native container (`IntegrationServer --work-dir`).'
  },
  {
    id: 'ace_lit_02',
    domain: 'literacy',
    text: 'What is the standard archive package format used to deploy ACE applications, libraries, message flows, and policies to an Integration Server?',
    options: {
      a: 'BAR (Broker Archive) file (`.bar`)',
      b: 'EAR (Enterprise Archive) file (`.ear`)',
      c: 'WAR (Web Archive) file (`.war`)',
      d: 'TAR.GZ archive file'
    },
    correctAnswer: 'a',
    explanation: 'A BAR (Broker Archive) file (`.bar`) contains the compiled message flows, DFDL/JSON schemas, maps, ESQL modules, and deployment descriptors.'
  },
  {
    id: 'ace_lit_03',
    domain: 'literacy',
    text: 'Which domain parser in IBM ACE is optimized for high-performance parsing and building of XML documents with on-demand parsing and compact memory tree structures?',
    options: {
      a: 'XMLNSC',
      b: 'MRM',
      c: 'SOAP',
      d: 'MIME'
    },
    correctAnswer: 'a',
    explanation: '`XMLNSC` (XML Network Schema Compact) is the modern, high-performance XML parser in ACE, featuring namespace support, schema validation, and on-demand tree building.'
  },
  {
    id: 'ace_lit_04',
    domain: 'literacy',
    text: 'What is Data Format Description Language (DFDL) used for in IBM ACE?',
    options: {
      a: 'An open standard XML-based schema language used to describe the structure and layout of general text and binary data formats (e.g. fixed-length COBOL copybooks, CSV, EDI, ISO8583)',
      b: 'A programming language for writing database triggers in SQL',
      c: 'A protocol for encrypting TLS 1.3 channel sessions',
      d: 'A format for creating user interface web forms'
    },
    correctAnswer: 'a',
    explanation: 'DFDL uses standard XML Schema annotations to describe formatted text and binary streams (like mainframe COBOL records, CSV, or positional files) into ACE logical message trees.'
  },
  {
    id: 'ace_lit_05',
    domain: 'literacy',
    text: 'In the ACE Logical Message Tree architecture, which root subtree contains operational header data like transport identifiers, HTTP status codes, and JMS headers?',
    options: {
      a: 'Properties and Transport Headers (e.g., `Root.HTTPInputHeader`, `Root.MQMD`, `Root.Properties`)',
      b: '`Root.XMLNSC.Payload`',
      c: '`Root.Database`',
      d: '`Root.DestinationData`'
    },
    correctAnswer: 'a',
    explanation: 'The logical message tree structure separates message data into `Root.Properties`, protocol transport headers (`Root.HTTPInputHeader`, `Root.MQMD`), and the body domain parser (`Root.XMLNSC`, `Root.JSON`, etc.).'
  },
  {
    id: 'ace_lit_06',
    domain: 'literacy',
    text: 'What is the primary difference between a Shared Library and a Static Library in IBM ACE?',
    options: {
      a: 'A Shared Library is deployed independently and shared by multiple applications at runtime in a single copy; a Static Library is bundled and embedded into each referencing application',
      b: 'A Shared Library only contains Java code, while a Static Library only contains ESQL',
      c: 'A Static Library can only be deployed in test environments',
      d: 'A Shared Library cannot be updated without restarting the host operating system'
    },
    correctAnswer: 'a',
    explanation: 'Shared Libraries reduce memory footprint and allow shared subflows/maps across applications, while Static Libraries are private copies compiled directly into the parent application BAR.'
  },
  {
    id: 'ace_lit_07',
    domain: 'literacy',
    text: 'Which command-line tool is used in ACE v11/v12 to package message flow resources and libraries into a BAR file in automated CI/CD pipelines?',
    options: {
      a: 'ibmint package / mqsipackagebar',
      b: 'jar -cvf bar.zip',
      c: 'mvn compile -bar',
      d: 'npm run ace-build'
    },
    correctAnswer: 'a',
    explanation: '`ibmint package` (and legacy `mqsipackagebar`) compiles and packages ACE applications, libraries, and policy projects into a deployable BAR file.'
  },
  {
    id: 'ace_lit_08',
    domain: 'literacy',
    text: 'What is a Policy Project in IBM App Connect Enterprise v11/v12?',
    options: {
      a: 'A project containing XML-based policy documents that define environment-specific runtime configurations (such as DB credentials, MQ connections, MQTT endpoints, and security profiles) separately from code',
      b: 'A set of legal terms and privacy agreements displayed to end-users',
      c: 'A list of user passwords stored in plaintext',
      d: 'A unit test execution configuration file'
    },
    correctAnswer: 'a',
    explanation: 'Policies and Policy Projects in ACE replace legacy Configurable Services, enabling externalization of environment properties (endpoints, credentials, timeouts) from message flow code.'
  },
  {
    id: 'ace_lit_09',
    domain: 'literacy',
    text: 'Which command is used to start an independent (standalone) Integration Server from a pre-configured work directory in ACE v11/v12?',
    options: {
      a: 'IntegrationServer --work-dir /path/to/workdir',
      b: 'mqsistart -server /path/to/workdir',
      c: 'startace --dir /path/to/workdir',
      d: 'runace /path/to/workdir'
    },
    correctAnswer: 'a',
    explanation: '`IntegrationServer --work-dir <directory>` launches a standalone, container-ready integration server process directly from the specified working directory.'
  },
  {
    id: 'ace_lit_10',
    domain: 'literacy',
    text: 'What is the role of the `server.conf.yaml` configuration file in an ACE Integration Server work directory?',
    options: {
      a: 'It defines all runtime configuration settings for the Integration Server (HTTP listener ports, JVM heap sizes, keystores, admin security, telemetry, and tracing)',
      b: 'It stores the source code of all ESQL compute modules',
      c: 'It acts as the database table schema for local queues',
      d: 'It contains the license terms for IBM Cloud Pak'
    },
    correctAnswer: 'a',
    explanation: '`server.conf.yaml` is the primary configuration file for an ACE Integration Server, configuring node ports, JVM options, security, metrics, and connector behavior.'
  },
  {
    id: 'ace_lit_11',
    domain: 'literacy',
    text: 'In an ACE message flow, what is the role of the `Environment` tree (`Environment.Variables`)?',
    options: {
      a: 'A scratchpad tree that is accessible across all nodes in a message flow execution thread and persists data throughout the life of the transaction without being sent over the wire',
      b: 'The operating system environment variables table on the host machine',
      c: 'A log buffer that flushes automatically every 5 seconds',
      d: 'An encrypted token repository for OAuth tokens'
    },
    correctAnswer: 'a',
    explanation: 'The `Environment` tree structure (specifically `Environment.Variables`) is a global scratchpad for the flow instance, available to all downstream nodes on that processing thread.'
  },
  {
    id: 'ace_lit_12',
    domain: 'literacy',
    text: 'What is the purpose of the `LocalEnvironment` tree in ACE message flows?',
    options: {
      a: 'It carries runtime flow control instructions, routing targets (`LocalEnvironment.Destination`), REST URI path parameters, and dynamic overrides for downstream nodes',
      b: 'It holds local host IP configurations',
      c: 'It stores uncommitted database SQL statements',
      d: 'It acts as a local browser cache'
    },
    correctAnswer: 'a',
    explanation: '`LocalEnvironment` is used by nodes to read/write runtime flow metadata, such as dynamic routing destinations (`Destination.MQ.DestinationData`), HTTP query parameters, and written destination records.'
  },
  {
    id: 'ace_lit_13',
    domain: 'literacy',
    text: 'What is the function of the `ExceptionList` tree in IBM ACE?',
    options: {
      a: 'It contains detailed diagnostic diagnostic information and error stack traces whenever an unhandled exception or error occurs during flow execution',
      b: 'It lists users who are exempt from password expiration rules',
      c: 'It filters out unwanted HTTP headers from incoming requests',
      d: 'It disables error logging for specific message flows'
    },
    correctAnswer: 'a',
    explanation: 'The `ExceptionList` tree is populated by ACE runtime when an error occurs, capturing nested `RecoverableException`, `ParserException`, or `DatabaseException` details.'
  },
  {
    id: 'ace_lit_14',
    domain: 'literacy',
    text: 'Which domain parser should be selected in an Input node when the incoming message payload is a standard JSON object or array?',
    options: {
      a: 'JSON',
      b: 'XMLNSC',
      c: 'BLOB',
      d: 'MRM'
    },
    correctAnswer: 'a',
    explanation: 'The `JSON` parser parses incoming JSON text into the logical message tree under `Root.JSON.Data` (with objects mapped as elements and arrays as repeating items).'
  },
  {
    id: 'ace_lit_15',
    domain: 'literacy',
    text: 'What type of parser is used when ACE treats a message payload as an unparsed, opaque sequence of raw binary bytes?',
    options: {
      a: 'BLOB',
      b: 'JSON',
      c: 'XMLNSC',
      d: 'DFDL'
    },
    correctAnswer: 'a',
    explanation: 'The `BLOB` domain treats message content as an opaque byte array (`Root.BLOB.BLOB`) without parsing its internal syntax, providing maximum performance for pass-through routing.'
  },
  {
    id: 'ace_lit_16',
    domain: 'literacy',
    text: 'What is the purpose of a Subflow in IBM ACE?',
    options: {
      a: 'A reusable sequence of message flow nodes packaged as a single node that can be embedded into multiple message flows',
      b: 'A background thread that runs when the main server is idle',
      c: 'A flow that processes only non-persistent messages',
      d: 'A flow compiled into native C++ machine code'
    },
    correctAnswer: 'a',
    explanation: 'Subflows encapsulate reusable integration patterns (such as standard error handling or common data transformations) into modular, reusable sub-components.'
  },
  {
    id: 'ace_lit_17',
    domain: 'literacy',
    text: 'In ACE v11/v12, what format is used to define Policy documents inside a Policy Project?',
    options: {
      a: 'XML policy descriptor files (`.policyxml`)',
      b: 'JSON schemas (`.json`)',
      c: 'YAML documents (`.yaml`)',
      d: 'Java properties files (`.properties`)'
    },
    correctAnswer: 'a',
    explanation: 'ACE Policy definitions are authored as XML policy files (`.policyxml`) specifying the policy type (e.g. `MQEndpoint`, `DbConnect`, `SecurityProfiles`).'
  },
  {
    id: 'ace_lit_18',
    domain: 'literacy',
    text: 'Which ACE command deploys a BAR file to a running Integration Server named "default" on an Integration Node named "NODE1"?',
    options: {
      a: 'mqsideploy NODE1 -e default -a /path/to/app.bar',
      b: 'runbar NODE1/default /path/to/app.bar',
      c: 'install-bar --node NODE1 --server default --file app.bar',
      d: 'deployace -n NODE1 -s default -f app.bar'
    },
    correctAnswer: 'a',
    explanation: '`mqsideploy` (or `ibmint deploy`) deploys BAR files (`-a`) to a target integration node (`-i`/node name) and integration server (`-e`).'
  },
  {
    id: 'ace_lit_19',
    domain: 'literacy',
    text: 'What is the function of the `mqsilist` command in ACE administration?',
    options: {
      a: 'It lists installed integration nodes, integration servers, and deployed applications/flows and their operational status',
      b: 'It lists all registered user passwords in plaintext',
      c: 'It lists available network printers on the corporate LAN',
      d: 'It outputs git commit logs'
    },
    correctAnswer: 'a',
    explanation: '`mqsilist` displays running integration nodes, servers, deployed applications, message flows, and policy sets.'
  },
  {
    id: 'ace_lit_20',
    domain: 'literacy',
    text: 'What is the role of an IBM ACE Application container in development and deployment?',
    options: {
      a: 'A top-level container used to group related message flows, libraries, and resources into a single deployable and manageable unit',
      b: 'A virtual machine running Linux kernel',
      c: 'A physical server appliance in a data center',
      d: 'A web browser window hosting the web UI'
    },
    correctAnswer: 'a',
    explanation: 'An Application in ACE encapsulates related message flows, subflows, and resources into a versioned administrative boundary.'
  },
  {
    id: 'ace_lit_21',
    domain: 'literacy',
    text: 'Which node in IBM ACE is used to catch and handle errors originating from downstream nodes in a message flow branch?',
    options: {
      a: 'TryCatch Node',
      b: 'Filter Node',
      c: 'Compute Node',
      d: 'Trace Node'
    },
    correctAnswer: 'a',
    explanation: 'The `TryCatch` node routes normal execution through its `Try` terminal; if an unhandled exception occurs in that branch, execution is intercepted and routed to the `Catch` terminal.'
  },
  {
    id: 'ace_lit_22',
    domain: 'literacy',
    text: 'What is the purpose of the `Trace` node in ACE message flows?',
    options: {
      a: 'To write diagnostic trace records, message tree contents, or custom log strings to local files, user trace logs, or stdout',
      b: 'To measure network ping latency to external web servers',
      c: 'To decrypt SSL certificates in memory',
      d: 'To roll back database transactions automatically'
    },
    correctAnswer: 'a',
    explanation: 'The `Trace` node logs diagnostic records, specific elements, or complete message trees to the user trace, local file, or system log for troubleshooting.'
  },
  {
    id: 'ace_lit_23',
    domain: 'literacy',
    text: 'In ACE development, what is the role of the IBM App Connect Enterprise Toolkit?',
    options: {
      a: 'An Eclipse-based Integrated Development Environment (IDE) used to visually design message flows, author ESQL/Java logic, test, and package BAR files',
      b: 'A hardware screwdriver kit for server maintenance',
      c: 'A command-line text editor for Linux terminals',
      d: 'An automated testing robot for hardware stress testing'
    },
    correctAnswer: 'a',
    explanation: 'The IBM ACE Toolkit is the Eclipse-based visual IDE used by integration developers to create message flows, mappings, DFDL schemas, and BAR deployment packages.'
  },
  {
    id: 'ace_lit_24',
    domain: 'literacy',
    text: 'What occurs when an Input node\'s `Catch` terminal is not wired to any error handling subflow and an exception occurs in the main flow?',
    options: {
      a: 'The message is rolled back to the transport source (e.g. back to the MQ queue or an HTTP 500 error is returned) and logged in the system log',
      b: 'The integration server process is killed immediately',
      c: 'The message payload is replaced with random bytes',
      d: 'The error is ignored and processing continues successfully'
    },
    correctAnswer: 'a',
    explanation: 'If an unwired Catch terminal is reached, the transaction rolls back, returning the message to the incoming transport mechanism (e.g. MQ input queue for backout processing) or returning an HTTP 500 error.'
  },
  {
    id: 'ace_lit_25',
    domain: 'literacy',
    text: 'What is the purpose of the `mqsicreatebar` command?',
    options: {
      a: 'To create a new BAR file and add message flows, schemas, and libraries to it from the command line',
      b: 'To generate a barcode for product inventory',
      c: 'To format a new hard disk partition for ACE',
      d: 'To create a new user account in Linux'
    },
    correctAnswer: 'a',
    explanation: '`mqsicreatebar` creates a BAR archive and packages specified applications, flows, and resources into it.'
  },
  {
    id: 'ace_lit_26',
    domain: 'literacy',
    text: 'Which ACE built-in node allows sending a message to multiple output terminals conditionally based on boolean evaluation expressions?',
    options: {
      a: 'Route Node (or Filter Node)',
      b: 'Passthrough Node',
      c: 'BLOB Node',
      d: 'Trace Node'
    },
    correctAnswer: 'a',
    explanation: 'The `Route` node evaluates XPath filter expressions to route incoming messages dynamically to specific labeled output terminals.'
  },
  {
    id: 'ace_lit_27',
    domain: 'literacy',
    text: 'What is the purpose of the `mqsireportproperties` / `ibmint report` command?',
    options: {
      a: 'To inspect and display active runtime properties and configurable parameters of an integration node or integration server',
      b: 'To export database records to CSV',
      c: 'To generate weekly billing invoices for IBM software',
      d: 'To list user passwords'
    },
    correctAnswer: 'a',
    explanation: '`mqsireportproperties` queries and displays internal runtime parameters, connector configurations, and socket settings of the integration engine.'
  },
  {
    id: 'ace_lit_28',
    domain: 'literacy',
    text: 'In ACE v12, how is an Integration Server work directory initialized using command line?',
    options: {
      a: '`mqsicreateworkdir /path/to/workdir` or `ibmint create workdir /path/to/workdir`',
      b: '`mkdir /path/to/workdir && touch ace.ini`',
      c: '`init-ace /path/to/workdir`',
      d: '`format-workdir /path/to/workdir`'
    },
    correctAnswer: 'a',
    explanation: '`mqsicreateworkdir` (or `ibmint create workdir`) initializes an empty directory with required subfolders (`run`, `config`, `overrides`) and a default `server.conf.yaml`.'
  },
  {
    id: 'ace_lit_29',
    domain: 'literacy',
    text: 'What type of message tree domain is created when parsing an HTTP multipart MIME message with attachments?',
    options: {
      a: 'MIME',
      b: 'JSON',
      c: 'XMLNSC',
      d: 'DFDL'
    },
    correctAnswer: 'a',
    explanation: 'The `MIME` domain parses multi-part MIME messages, populating subtrees for each part (`Parts.Part[1]`, `Parts.Part[2]`) with their respective headers and content bodies.'
  },
  {
    id: 'ace_lit_30',
    domain: 'literacy',
    text: 'What is the role of the `ResetContentDescriptor` (RCD) node in an ACE message flow?',
    options: {
      a: 'To re-parse a message payload using a different domain parser, message model, or message format without altering the underlying byte content',
      b: 'To clear all variables in the `Environment` tree',
      c: 'To disconnect an active database connection pool',
      d: 'To restart the integration server'
    },
    correctAnswer: 'a',
    explanation: 'The `ResetContentDescriptor` node resets the parsing domain (e.g. from BLOB to XMLNSC or DFDL), forcing the downstream nodes to interpret the payload using the new message definition.'
  }
];

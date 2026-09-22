import { Question } from '../../certTypes';

export const boomiAutomationQuestions: Question[] = [
  {
    id: 'boomi_aut_01',
    domain: 'automation',
    text: 'In Boomi, what is the primary purpose of Document Caching ("Add to Cache" and "Load from Cache" shapes)?',
    options: {
      a: 'To store indexable collections of documents in memory/disk during a process execution and join/lookup records in Map shapes without repeated connector calls',
      b: 'To cache web browser cookies on client laptops',
      c: 'To store encrypted passwords permanently on the Atom',
      d: 'To create permanent database tables in SQL Server'
    },
    correctAnswer: 'a',
    explanation: 'Document Caching indexes documents by key fields in runtime memory, allowing fast joins and lookups directly inside Maps or child flows without hitting external systems repeatedly.'
  },
  {
    id: 'boomi_aut_02',
    domain: 'automation',
    text: 'What is the function of the "Try/Catch" shape in Boomi error handling?',
    options: {
      a: 'It catches document-level or process-level exceptions occurring on downstream shapes, routing failed documents down the Catch path while allowing successful documents to proceed normally',
      b: 'It catches network fish packets on the Ethernet port',
      c: 'It forces the Atom to reboot immediately upon error',
      d: 'It converts error messages into Spanish'
    },
    correctAnswer: 'a',
    explanation: 'The Try/Catch shape intercepts errors on downstream shapes. It isolates failures per document, sending failed documents down the Catch path with detailed `Base - Try/Catch Message` properties.'
  },
  {
    id: 'boomi_aut_03',
    domain: 'automation',
    text: 'What two options are available in the Boomi "Flow Control" shape to scale processing performance across documents?',
    options: {
      a: 'Parallel Processing (Threads or Processes) and Batching (Run as batches of N documents)',
      b: 'Compression and Decompression',
      c: 'Encryption and Decryption',
      d: 'Ascending Sort and Descending Sort'
    },
    correctAnswer: 'a',
    explanation: 'The Flow Control shape provides Parallel Processing (multithreading or multi-process execution across CPU cores) and Batching (grouping documents into fixed batches for connector efficiency).'
  },
  {
    id: 'boomi_aut_04',
    domain: 'automation',
    text: 'In Boomi "Business Rules" shape, how are multiple complex validation conditions evaluated on incoming documents?',
    options: {
      a: 'Multiple inputs, business conditions, and error messages are defined in a decision matrix; documents violating rules are routed to the Rejected path with customized error lists',
      b: 'By compiling Java code in an external terminal',
      c: 'By emailing rules to the compliance department',
      d: 'By converting documents to PDF files'
    },
    correctAnswer: 'a',
    explanation: 'The Business Rules shape evaluates multi-field business rules and cross-field validations against each document, separating clean documents from rejected documents with granular error messages.'
  },
  {
    id: 'boomi_aut_05',
    domain: 'automation',
    text: 'Which scripting languages are supported natively for custom scripting in Boomi Data Process shapes and Map Functions?',
    options: {
      a: 'Groovy (2.4 / 1.5) and JavaScript (ECMAScript)',
      b: 'Python 3 and Ruby',
      c: 'C# and VB.NET',
      d: 'Rust and Go'
    },
    correctAnswer: 'a',
    explanation: 'Boomi AtomSphere natively supports Groovy and JavaScript for custom scripting within Data Process steps and Map Functions.'
  },
  {
    id: 'boomi_aut_06',
    domain: 'automation',
    text: 'What operations can be performed inside a "Data Process" shape in Boomi?',
    options: {
      a: 'Splitting documents, Combining documents, Zip/Unzip compression, PGP Encryption/Decryption, Base64 Encoding/Decoding, and Custom Scripting',
      b: 'Creating database indexes and primary keys',
      c: 'Formatting hard drives on the server',
      d: 'Configuring network DNS routes'
    },
    correctAnswer: 'a',
    explanation: 'The Data Process shape performs batch file manipulations: Split by line/profile, Combine by profile, Zip/Unzip, PGP encrypt/decrypt, Base64 encode/decode, Character decode, and Custom Scripting.'
  },
  {
    id: 'boomi_aut_07',
    domain: 'automation',
    text: 'What is a "Cross-Reference Table" component in Boomi?',
    options: {
      a: 'A static lookup table that translates values from one system to corresponding values in another system (e.g. mapping internal state code "CA" to external code "California")',
      b: 'A foreign key relationship in an external Oracle database',
      c: 'A spreadsheet file attached to an email',
      d: 'A table that lists all registered software licenses'
    },
    correctAnswer: 'a',
    explanation: 'Cross-Reference Tables (CRT) provide tabular key-value lookups directly within Map shapes to translate domain codes between disparate systems.'
  },
  {
    id: 'boomi_aut_08',
    domain: 'automation',
    text: 'In a Boomi Map component, what is a "User-Defined Map Function"?',
    options: {
      a: 'A reusable sequence of standard function steps (string manipulation, math, lookups, scripting) encapsulated into a single modular function applied across maps',
      b: 'A function that creates user accounts in Windows',
      c: 'A map of the physical office building',
      d: 'A CSS stylesheet for web design'
    },
    correctAnswer: 'a',
    explanation: 'User-Defined Map Functions allow chaining multiple transformation steps (e.g. string trim -> CRT lookup -> Groovy script) into a reusable transformation component.'
  },
  {
    id: 'boomi_aut_09',
    domain: 'automation',
    text: 'When using the "Data Process" shape to split a single flat file containing 10,000 CSV rows into individual documents, what is the effect on subsequent shapes in the process?',
    options: {
      a: '10,000 separate documents are created, and each document flows independently through downstream shapes',
      b: 'The file is deleted from the disk',
      c: 'The process terminates immediately',
      d: '10,000 separate Atom runtimes are launched in parallel'
    },
    correctAnswer: 'a',
    explanation: 'Splitting creates individual documents for each line or profile element, allowing document-level routing, transformations, and error handling in downstream shapes.'
  },
  {
    id: 'boomi_aut_10',
    domain: 'automation',
    text: 'In a Groovy script within a Data Process shape, how do you access and modify the document payload stream?',
    options: {
      a: 'By iterating through `dataContext.getDataCount()`, retrieving `dataContext.getStream(i)`, and storing output with `dataContext.storeStream(outStream, props)`',
      b: 'By opening a direct socket to `/dev/tty`',
      c: 'By reading `System.in` directly in a while loop',
      d: 'By calling `document.payload.text()` in JavaScript'
    },
    correctAnswer: 'a',
    explanation: 'The Boomi Data Process Groovy API exposes `dataContext`, where scripts iterate through documents via `dataContext.getStream(i)` and store transformed streams using `dataContext.storeStream()`.'
  },
  {
    id: 'boomi_aut_11',
    domain: 'automation',
    text: 'What is the purpose of the "Combine" processing step in the Data Process shape?',
    options: {
      a: 'To merge multiple individual documents (e.g. 500 JSON records) into a single combined document or flat file before sending to an external endpoint',
      b: 'To merge two different Boomi accounts into one',
      c: 'To combine CPU memory with GPU memory',
      d: 'To join two database tables using SQL JOIN'
    },
    correctAnswer: 'a',
    explanation: 'The Combine step batches multiple documents of the same profile type into a single consolidated document, reducing connector call counts and HTTP round-trips.'
  },
  {
    id: 'boomi_aut_12',
    domain: 'automation',
    text: 'What happens when a "Try/Catch" shape has "Failure Trigger" set to "Document Errors" vs "All Errors"?',
    options: {
      a: '`Document Errors` catches connector/mapping errors specific to individual documents; `All Errors` also catches fatal process-level exceptions and system errors',
      b: '`Document Errors` only logs errors in debug mode',
      c: '`All Errors` deletes the process from the platform',
      d: 'There is no difference between the two settings'
    },
    correctAnswer: 'a',
    explanation: '`Document Errors` intercepts application-level document processing failures; `All Errors` intercepts both document errors and severe process execution exceptions.'
  },
  {
    id: 'boomi_aut_13',
    domain: 'automation',
    text: 'In Boomi, how can an architect enforce dynamic file naming (e.g. `Orders_YYYYMMDD_HHMMSS.csv`) when writing files via the Disk or FTP connector?',
    options: {
      a: 'Use the Set Properties shape to populate the `Disk - File Name` or `FTP - File Name` document property with date/time formatting functions prior to the connector shape',
      b: 'Hardcode the file name in the Disk Connection component',
      c: 'Rename the file manually via SSH after the process completes',
      d: 'File names cannot be set dynamically in Boomi'
    },
    correctAnswer: 'a',
    explanation: 'Standard connector document properties (e.g. `Disk - File Name`, `Mail - Subject`, `FTP - File Name`) set in a Set Properties shape override default connector properties dynamically.'
  },
  {
    id: 'boomi_aut_14',
    domain: 'automation',
    text: 'What is the purpose of the "Program Command" shape in Boomi?',
    options: {
      a: 'To execute operating system command-line commands, batch scripts, shell scripts, or SQL database statements directly on the host runtime machine',
      b: 'To program new features into the Boomi AtomSphere UI',
      c: 'To flash firmware updates to the BIOS',
      d: 'To compile C++ code into machine code'
    },
    correctAnswer: 'a',
    explanation: 'The Program Command shape executes local OS commands, shell scripts, or raw SQL statements on the Atom runtime host environment.'
  },
  {
    id: 'boomi_aut_15',
    domain: 'automation',
    text: 'What is the role of the "Map Function: Lookup -> SQL Lookup" in a Boomi Map?',
    options: {
      a: 'It executes an inline SQL query against an external database to fetch reference fields for each record passing through the Map transformation',
      b: 'It creates a new database view in PostgreSQL',
      c: 'It indexes the database hard drive',
      d: 'It deletes unreferenced rows from SQL tables'
    },
    correctAnswer: 'a',
    explanation: 'SQL Lookup map functions execute real-time database queries to fetch enrichment data row-by-row during map execution.'
  },
  {
    id: 'boomi_aut_16',
    domain: 'automation',
    text: 'Why is using Document Caching generally preferred over repeated "SQL Lookup" map functions when processing large datasets?',
    options: {
      a: 'Document Caching pre-loads lookup data in a single batch query and performs in-memory joins, avoiding thousands of individual database network round-trips inside the map',
      b: 'SQL Lookup functions are deprecated in Boomi',
      c: 'Document Caching encrypts data with AES-512',
      d: 'SQL Lookups can only return numbers'
    },
    correctAnswer: 'a',
    explanation: 'Pre-caching reference datasets avoids the "N+1 query problem" of executing separate database queries for every single mapped row.'
  },
  {
    id: 'boomi_aut_17',
    domain: 'automation',
    text: 'In Boomi, what is the function of the "Dynamic Process Property" with the "Persist" option enabled?',
    options: {
      a: 'The property value is saved to disk and persists across subsequent executions of the process (e.g. to store "Last Run Date / High Watermark" for delta extracts)',
      b: 'The property is uploaded to the Boomi public community forum',
      c: 'The property is converted into a permanent database column',
      d: 'The property cannot be modified by any user'
    },
    correctAnswer: 'a',
    explanation: 'Persisted Process Properties retain their values across separate process executions on the Atom, making them ideal for high-watermark delta tracking.'
  },
  {
    id: 'boomi_aut_18',
    domain: 'automation',
    text: 'How can an integration architect route HTTP requests based on HTTP Header or Query Parameter values in a Boomi Web Services process?',
    options: {
      a: 'Read the `Inbound - HTTP - Header` or `Inbound - HTTP - Query Parameter` dynamic document property using a Route or Decision shape',
      b: 'Edit the Apache HTTP server configuration file',
      c: 'Use a Program Command shape to inspect TCP packets',
      d: 'Headers cannot be read in Boomi processes'
    },
    correctAnswer: 'a',
    explanation: 'Boomi Web Services Server connector automatically captures HTTP request headers and query parameters as Dynamic Document Properties accessible in downstream shapes.'
  },
  {
    id: 'boomi_aut_19',
    domain: 'automation',
    text: 'What is the role of the "HTTP Client" connector Operation "Return HTTP Errors" checkbox?',
    options: {
      a: 'When checked, HTTP 4xx and 5xx response bodies are returned as normal output documents rather than throwing an unhandled process exception',
      b: 'It automatically retries the HTTP request 50 times',
      c: 'It translates HTTP errors into XML format',
      d: 'It deletes the HTTP client connection'
    },
    correctAnswer: 'a',
    explanation: 'Checking "Return HTTP Errors" allows the process to inspect the error payload and status code directly in downstream shapes instead of failing immediately.'
  },
  {
    id: 'boomi_aut_20',
    domain: 'automation',
    text: 'What is the function of the "Trading Partner" shape in Boomi B2B integrations?',
    options: {
      a: 'It handles end-to-end EDI document routing, trading partner profile lookups, EDI validation, acknowledgments (997/CONTRL), and protocol dispatch (AS2, FTP, SFTP)',
      b: 'It executes stock trading transactions on the NYSE',
      c: 'It negotiates software contract prices automatically',
      d: 'It generates corporate partnership agreements in PDF'
    },
    correctAnswer: 'a',
    explanation: 'The Trading Partner shape provides complete EDI / B2B orchestration, handling partner agreements, standard validation, acknowledgments, and transport protocols.'
  },
  {
    id: 'boomi_aut_21',
    domain: 'automation',
    text: 'In Boomi, how do you handle JSON array data where an array element must be mapped into multiple child records in an XML target profile?',
    options: {
      a: 'Configure the source JSON Profile array element as a repeating element and map it to the repeating target XML element in the Map component',
      b: 'Write 500 lines of custom C++ code',
      c: 'JSON arrays cannot be mapped to XML in Boomi',
      d: 'Convert the JSON array to a ZIP archive'
    },
    correctAnswer: 'a',
    explanation: 'Boomi Map engine automatically maps repeating array elements from source profiles to repeating target elements, handling iterative record generation.'
  },
  {
    id: 'boomi_aut_22',
    domain: 'automation',
    text: 'What is the purpose of the "JMS" (Java Message Service) connector in Boomi?',
    options: {
      a: 'To produce and consume messages asynchronously to/from enterprise message brokers like Apache ActiveMQ, IBM MQ, or Solace using standard JMS queues and topics',
      b: 'To run Java applets inside web browsers',
      c: 'To format text messages on mobile phones',
      d: 'To compile Java bytecode on the fly'
    },
    correctAnswer: 'a',
    explanation: 'The JMS connector allows Boomi processes to publish and listen for messages on standard JMS queues and topics across enterprise message brokers.'
  },
  {
    id: 'boomi_aut_23',
    domain: 'automation',
    text: 'What is the difference between the "Connector Call" shape and an "Inbound Start" connector shape in Boomi?',
    options: {
      a: 'The Inbound Start shape initiates the process by retrieving initial source documents; the Connector Call shape interacts with external systems mid-process for enrichment or updates',
      b: 'Connector Call is only for test environments',
      c: 'Inbound Start shapes cannot connect to Salesforce',
      d: 'Connector Call shapes can only send emails'
    },
    correctAnswer: 'a',
    explanation: 'Inbound Start connectors trigger the process with initial data, while intermediate Connector Call shapes perform outbound gets, queries, inserts, or updates during execution.'
  },
  {
    id: 'boomi_aut_24',
    domain: 'automation',
    text: 'In a Boomi Map, what is the role of a "Default Value" assigned to a target profile element?',
    options: {
      a: 'It assigns a specified fallback value to the target field whenever the source field is missing, empty, or null',
      b: 'It overrides all mapped values unconditionally',
      c: 'It deletes the field from the output document',
      d: 'It formats the field as a currency string'
    },
    correctAnswer: 'a',
    explanation: 'Default values provide deterministic fallback data when incoming source fields contain null or empty values.'
  },
  {
    id: 'boomi_aut_25',
    domain: 'automation',
    text: 'How can an integration developer implement an exponential backoff retry loop in Boomi for transient HTTP 503 errors?',
    options: {
      a: 'Use a Try/Catch shape around the HTTP call, followed by a child sub-process or Groovy sleep step in the Catch branch with a retry counter before re-invoking the call',
      b: 'Restart the Atom operating system in a loop',
      c: 'Disable error reporting on the Atom',
      d: 'Set the HTTP timeout to 0 seconds'
    },
    correctAnswer: 'a',
    explanation: 'A Try/Catch block paired with a retry sub-process evaluating iteration counts and applying backoff delays handles transient network/service errors gracefully.'
  },
  {
    id: 'boomi_aut_26',
    domain: 'automation',
    text: 'What is the purpose of the "Data Process" PGP Encrypt step?',
    options: {
      a: 'To encrypt document payloads with a recipient\'s PGP Public Key Certificate for secure file transmission over SFTP or public storage',
      b: 'To generate private key passwords',
      c: 'To format text into HTML format',
      d: 'To compress images into PNG format'
    },
    correctAnswer: 'a',
    explanation: 'The PGP Encrypt step uses PGP certificate components to encrypt and optionally sign file payloads before external transmission.'
  },
  {
    id: 'boomi_aut_27',
    domain: 'automation',
    text: 'What is the function of the "Salesforce" connector in Boomi?',
    options: {
      a: 'It provides pre-built operations to Query, Create, Update, Upsert, and Delete standard and custom Salesforce objects using SOAP API and Bulk API with automated schema discovery',
      b: 'It creates Salesforce marketing email templates',
      c: 'It administers Salesforce user billing licenses',
      d: 'It renders Lightning Web Components'
    },
    correctAnswer: 'a',
    explanation: 'The Boomi Salesforce connector uses the Salesforce API with automated object schema discovery, supporting standard CRUD and high-volume Bulk API operations.'
  },
  {
    id: 'boomi_aut_28',
    domain: 'automation',
    text: 'In Boomi, what is the role of the "Base - Try/Catch Message" document property inside the Catch path?',
    options: {
      a: 'It contains the exact error message, stack trace, and error code captured by the Try/Catch shape for the failing document',
      b: 'It contains the administrator email address',
      c: 'It holds the customer credit card number',
      d: 'It logs the server CPU temperature'
    },
    correctAnswer: 'a',
    explanation: 'When an exception occurs in a Try/Catch block, the `Base - Try/Catch Message` property is populated with the specific error details that caused the failure.'
  },
  {
    id: 'boomi_aut_29',
    domain: 'automation',
    text: 'What is the purpose of the "Map Function: String -> String Concat" in Boomi mapping?',
    options: {
      a: 'To concatenate multiple input strings together with an optional delimiter (e.g. joining FirstName + " " + LastName)',
      b: 'To split a string into multiple pieces',
      c: 'To translate strings into binary bytes',
      d: 'To calculate the character length of a word'
    },
    correctAnswer: 'a',
    explanation: '`String Concat` merges multiple input string fields into a single output string with custom delimiter options.'
  },
  {
    id: 'boomi_aut_30',
    domain: 'automation',
    text: 'What is the function of the "Database" connector "Dynamic Update" or "Dynamic Insert" operation in Boomi?',
    options: {
      a: 'It automatically constructs SQL statements at runtime based on the fields populated in the incoming Database Profile, avoiding manual SQL authoring',
      b: 'It creates new tables in the database schema automatically',
      c: 'It migrates databases from MySQL to Oracle',
      d: 'It generates synthetic test data in tables'
    },
    correctAnswer: 'a',
    explanation: 'Dynamic Insert/Update operations dynamically generate SQL statements based on fields present in the profile, simplifying database interactions without writing manual SQL.'
  }
];

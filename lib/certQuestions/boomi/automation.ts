import { CertQuestion } from '../types';

export const BOOMI_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "boomi_aut_01",
    "section": "automation",
    "prompt": "In Boomi, what is the primary purpose of Document Caching (\"Add to Cache\" and \"Load from Cache\" shapes)?",
    "options": [
      {
        "id": "a",
        "label": "To cache web browser cookies on client laptops"
      },
      {
        "id": "b",
        "label": "To store indexable collections of documents in memory/disk during a process execution and join/lookup records in Map shapes without repeated connector calls"
      },
      {
        "id": "c",
        "label": "To store encrypted passwords permanently on the Atom"
      },
      {
        "id": "d",
        "label": "To create permanent database tables in SQL Server"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_aut_02",
    "section": "automation",
    "prompt": "What is the function of the \"Try/Catch\" shape in Boomi error handling?",
    "options": [
      {
        "id": "a",
        "label": "It catches network fish packets on the Ethernet port"
      },
      {
        "id": "b",
        "label": "It forces the Atom to reboot immediately upon error"
      },
      {
        "id": "c",
        "label": "It catches document-level or process-level exceptions occurring on downstream shapes, routing failed documents down the Catch path while allowing successful documents to proceed normally"
      },
      {
        "id": "d",
        "label": "It converts error messages into Spanish"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_aut_03",
    "section": "automation",
    "prompt": "What two options are available in the Boomi \"Flow Control\" shape to scale processing performance across documents?",
    "options": [
      {
        "id": "a",
        "label": "Parallel Processing (Threads or Processes) and Batching (Run as batches of N documents)"
      },
      {
        "id": "b",
        "label": "Compression and Decompression"
      },
      {
        "id": "c",
        "label": "Encryption and Decryption"
      },
      {
        "id": "d",
        "label": "Ascending Sort and Descending Sort"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_aut_04",
    "section": "automation",
    "prompt": "In Boomi \"Business Rules\" shape, how are multiple complex validation conditions evaluated on incoming documents?",
    "options": [
      {
        "id": "a",
        "label": "By compiling Java code in an external terminal"
      },
      {
        "id": "b",
        "label": "By emailing rules to the compliance department"
      },
      {
        "id": "c",
        "label": "By converting documents to PDF files"
      },
      {
        "id": "d",
        "label": "Multiple inputs, business conditions, and error messages are defined in a decision matrix; documents violating rules are routed to the Rejected path with customized error lists"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_aut_05",
    "section": "automation",
    "prompt": "Which scripting languages are supported natively for custom scripting in Boomi Data Process shapes and Map Functions?",
    "options": [
      {
        "id": "a",
        "label": "Python 3 and Ruby"
      },
      {
        "id": "b",
        "label": "C# and VB.NET"
      },
      {
        "id": "c",
        "label": "Groovy (2.4 / 1.5) and JavaScript (ECMAScript)"
      },
      {
        "id": "d",
        "label": "Rust and Go"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_aut_06",
    "section": "automation",
    "prompt": "What operations can be performed inside a \"Data Process\" shape in Boomi?",
    "options": [
      {
        "id": "a",
        "label": "Splitting documents, Combining documents, Zip/Unzip compression, PGP Encryption/Decryption, Base64 Encoding/Decoding, and Custom Scripting"
      },
      {
        "id": "b",
        "label": "Creating database indexes and primary keys"
      },
      {
        "id": "c",
        "label": "Formatting hard drives on the server"
      },
      {
        "id": "d",
        "label": "Configuring network DNS routes"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_aut_07",
    "section": "automation",
    "prompt": "What is a \"Cross-Reference Table\" component in Boomi?",
    "options": [
      {
        "id": "a",
        "label": "A foreign key relationship in an external Oracle database"
      },
      {
        "id": "b",
        "label": "A spreadsheet file attached to an email"
      },
      {
        "id": "c",
        "label": "A table that lists all registered software licenses"
      },
      {
        "id": "d",
        "label": "A static lookup table that translates values from one system to corresponding values in another system (e.g. mapping internal state code \"CA\" to external code \"California\")"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_aut_08",
    "section": "automation",
    "prompt": "In a Boomi Map component, what is a \"User-Defined Map Function\"?",
    "options": [
      {
        "id": "a",
        "label": "A function that creates user accounts in Windows"
      },
      {
        "id": "b",
        "label": "A reusable sequence of standard function steps (string manipulation, math, lookups, scripting) encapsulated into a single modular function applied across maps"
      },
      {
        "id": "c",
        "label": "A map of the physical office building"
      },
      {
        "id": "d",
        "label": "A CSS stylesheet for web design"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_aut_09",
    "section": "automation",
    "prompt": "When using the \"Data Process\" shape to split a single flat file containing 10,000 CSV rows into individual documents, what is the effect on subsequent shapes in the process?",
    "options": [
      {
        "id": "a",
        "label": "The file is deleted from the disk"
      },
      {
        "id": "b",
        "label": "The process terminates immediately"
      },
      {
        "id": "c",
        "label": "10,000 separate Atom runtimes are launched in parallel"
      },
      {
        "id": "d",
        "label": "10,000 separate documents are created, and each document flows independently through downstream shapes"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_aut_10",
    "section": "automation",
    "prompt": "In a Groovy script within a Data Process shape, how do you access and modify the document payload stream?",
    "options": [
      {
        "id": "a",
        "label": "By opening a direct socket to `/dev/tty`"
      },
      {
        "id": "b",
        "label": "By iterating through `dataContext.getDataCount()`, retrieving `dataContext.getStream(i)`, and storing output with `dataContext.storeStream(outStream, props)`"
      },
      {
        "id": "c",
        "label": "By reading `System.in` directly in a while loop"
      },
      {
        "id": "d",
        "label": "By calling `document.payload.text()` in JavaScript"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_aut_11",
    "section": "automation",
    "prompt": "What is the purpose of the \"Combine\" processing step in the Data Process shape?",
    "options": [
      {
        "id": "a",
        "label": "To merge two different Boomi accounts into one"
      },
      {
        "id": "b",
        "label": "To combine CPU memory with GPU memory"
      },
      {
        "id": "c",
        "label": "To merge multiple individual documents (e.g. 500 JSON records) into a single combined document or flat file before sending to an external endpoint"
      },
      {
        "id": "d",
        "label": "To join two database tables using SQL JOIN"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_aut_12",
    "section": "automation",
    "prompt": "What happens when a \"Try/Catch\" shape has \"Failure Trigger\" set to \"Document Errors\" vs \"All Errors\"?",
    "options": [
      {
        "id": "a",
        "label": "`Document Errors` catches connector/mapping errors specific to individual documents; `All Errors` also catches fatal process-level exceptions and system errors"
      },
      {
        "id": "b",
        "label": "`Document Errors` only logs errors in debug mode"
      },
      {
        "id": "c",
        "label": "`All Errors` deletes the process from the platform"
      },
      {
        "id": "d",
        "label": "There is no difference between the two settings"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_aut_13",
    "section": "automation",
    "prompt": "In Boomi, how can an architect enforce dynamic file naming (e.g. `Orders_YYYYMMDD_HHMMSS.csv`) when writing files via the Disk or FTP connector?",
    "options": [
      {
        "id": "a",
        "label": "Use the Set Properties shape to populate the `Disk - File Name` or `FTP - File Name` document property with date/time formatting functions prior to the connector shape"
      },
      {
        "id": "b",
        "label": "Hardcode the file name in the Disk Connection component"
      },
      {
        "id": "c",
        "label": "Rename the file manually via SSH after the process completes"
      },
      {
        "id": "d",
        "label": "File names cannot be set dynamically in Boomi"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_aut_14",
    "section": "automation",
    "prompt": "What is the purpose of the \"Program Command\" shape in Boomi?",
    "options": [
      {
        "id": "a",
        "label": "To program new features into the Boomi AtomSphere UI"
      },
      {
        "id": "b",
        "label": "To flash firmware updates to the BIOS"
      },
      {
        "id": "c",
        "label": "To compile C++ code into machine code"
      },
      {
        "id": "d",
        "label": "To execute operating system command-line commands, batch scripts, shell scripts, or SQL database statements directly on the host runtime machine"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_aut_15",
    "section": "automation",
    "prompt": "What is the role of the \"Map Function: Lookup -> SQL Lookup\" in a Boomi Map?",
    "options": [
      {
        "id": "a",
        "label": "It creates a new database view in PostgreSQL"
      },
      {
        "id": "b",
        "label": "It executes an inline SQL query against an external database to fetch reference fields for each record passing through the Map transformation"
      },
      {
        "id": "c",
        "label": "It indexes the database hard drive"
      },
      {
        "id": "d",
        "label": "It deletes unreferenced rows from SQL tables"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_aut_16",
    "section": "automation",
    "prompt": "Why is using Document Caching generally preferred over repeated \"SQL Lookup\" map functions when processing large datasets?",
    "options": [
      {
        "id": "a",
        "label": "SQL Lookup functions are deprecated in Boomi"
      },
      {
        "id": "b",
        "label": "Document Caching encrypts data with AES-512"
      },
      {
        "id": "c",
        "label": "Document Caching pre-loads lookup data in a single batch query and performs in-memory joins, avoiding thousands of individual database network round-trips inside the map"
      },
      {
        "id": "d",
        "label": "SQL Lookups can only return numbers"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_aut_17",
    "section": "automation",
    "prompt": "In Boomi, what is the function of the \"Dynamic Process Property\" with the \"Persist\" option enabled?",
    "options": [
      {
        "id": "a",
        "label": "The property is uploaded to the Boomi public community forum"
      },
      {
        "id": "b",
        "label": "The property value is saved to disk and persists across subsequent executions of the process (e.g. to store \"Last Run Date / High Watermark\" for delta extracts)"
      },
      {
        "id": "c",
        "label": "The property is converted into a permanent database column"
      },
      {
        "id": "d",
        "label": "The property cannot be modified by any user"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_aut_18",
    "section": "automation",
    "prompt": "How can an integration architect route HTTP requests based on HTTP Header or Query Parameter values in a Boomi Web Services process?",
    "options": [
      {
        "id": "a",
        "label": "Read the `Inbound - HTTP - Header` or `Inbound - HTTP - Query Parameter` dynamic document property using a Route or Decision shape"
      },
      {
        "id": "b",
        "label": "Edit the Apache HTTP server configuration file"
      },
      {
        "id": "c",
        "label": "Use a Program Command shape to inspect TCP packets"
      },
      {
        "id": "d",
        "label": "Headers cannot be read in Boomi processes"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_aut_19",
    "section": "automation",
    "prompt": "What is the role of the \"HTTP Client\" connector Operation \"Return HTTP Errors\" checkbox?",
    "options": [
      {
        "id": "a",
        "label": "It automatically retries the HTTP request 50 times"
      },
      {
        "id": "b",
        "label": "It translates HTTP errors into XML format"
      },
      {
        "id": "c",
        "label": "It deletes the HTTP client connection"
      },
      {
        "id": "d",
        "label": "When checked, HTTP 4xx and 5xx response bodies are returned as normal output documents rather than throwing an unhandled process exception"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_aut_20",
    "section": "automation",
    "prompt": "What is the function of the \"Trading Partner\" shape in Boomi B2B integrations?",
    "options": [
      {
        "id": "a",
        "label": "It executes stock trading transactions on the NYSE"
      },
      {
        "id": "b",
        "label": "It negotiates software contract prices automatically"
      },
      {
        "id": "c",
        "label": "It handles end-to-end EDI document routing, trading partner profile lookups, EDI validation, acknowledgments (997/CONTRL), and protocol dispatch (AS2, FTP, SFTP)"
      },
      {
        "id": "d",
        "label": "It generates corporate partnership agreements in PDF"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_aut_21",
    "section": "automation",
    "prompt": "In Boomi, how do you handle JSON array data where an array element must be mapped into multiple child records in an XML target profile?",
    "options": [
      {
        "id": "a",
        "label": "Write 500 lines of custom C++ code"
      },
      {
        "id": "b",
        "label": "JSON arrays cannot be mapped to XML in Boomi"
      },
      {
        "id": "c",
        "label": "Configure the source JSON Profile array element as a repeating element and map it to the repeating target XML element in the Map component"
      },
      {
        "id": "d",
        "label": "Convert the JSON array to a ZIP archive"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_aut_22",
    "section": "automation",
    "prompt": "What is the purpose of the \"JMS\" (Java Message Service) connector in Boomi?",
    "options": [
      {
        "id": "a",
        "label": "To run Java applets inside web browsers"
      },
      {
        "id": "b",
        "label": "To format text messages on mobile phones"
      },
      {
        "id": "c",
        "label": "To compile Java bytecode on the fly"
      },
      {
        "id": "d",
        "label": "To produce and consume messages asynchronously to/from enterprise message brokers like Apache ActiveMQ, IBM MQ, or Solace using standard JMS queues and topics"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_aut_23",
    "section": "automation",
    "prompt": "What is the difference between the \"Connector Call\" shape and an \"Inbound Start\" connector shape in Boomi?",
    "options": [
      {
        "id": "a",
        "label": "The Inbound Start shape initiates the process by retrieving initial source documents; the Connector Call shape interacts with external systems mid-process for enrichment or updates"
      },
      {
        "id": "b",
        "label": "Connector Call is only for test environments"
      },
      {
        "id": "c",
        "label": "Inbound Start shapes cannot connect to Salesforce"
      },
      {
        "id": "d",
        "label": "Connector Call shapes can only send emails"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_aut_24",
    "section": "automation",
    "prompt": "In a Boomi Map, what is the role of a \"Default Value\" assigned to a target profile element?",
    "options": [
      {
        "id": "a",
        "label": "It overrides all mapped values unconditionally"
      },
      {
        "id": "b",
        "label": "It assigns a specified fallback value to the target field whenever the source field is missing, empty, or null"
      },
      {
        "id": "c",
        "label": "It deletes the field from the output document"
      },
      {
        "id": "d",
        "label": "It formats the field as a currency string"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_aut_25",
    "section": "automation",
    "prompt": "How can an integration developer implement an exponential backoff retry loop in Boomi for transient HTTP 503 errors?",
    "options": [
      {
        "id": "a",
        "label": "Restart the Atom operating system in a loop"
      },
      {
        "id": "b",
        "label": "Disable error reporting on the Atom"
      },
      {
        "id": "c",
        "label": "Set the HTTP timeout to 0 seconds"
      },
      {
        "id": "d",
        "label": "Use a Try/Catch shape around the HTTP call, followed by a child sub-process or Groovy sleep step in the Catch branch with a retry counter before re-invoking the call"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_aut_26",
    "section": "automation",
    "prompt": "What is the purpose of the \"Data Process\" PGP Encrypt step?",
    "options": [
      {
        "id": "a",
        "label": "To generate private key passwords"
      },
      {
        "id": "b",
        "label": "To format text into HTML format"
      },
      {
        "id": "c",
        "label": "To encrypt document payloads with a recipient's PGP Public Key Certificate for secure file transmission over SFTP or public storage"
      },
      {
        "id": "d",
        "label": "To compress images into PNG format"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_aut_27",
    "section": "automation",
    "prompt": "What is the function of the \"Salesforce\" connector in Boomi?",
    "options": [
      {
        "id": "a",
        "label": "It creates Salesforce marketing email templates"
      },
      {
        "id": "b",
        "label": "It provides pre-built operations to Query, Create, Update, Upsert, and Delete standard and custom Salesforce objects using SOAP API and Bulk API with automated schema discovery"
      },
      {
        "id": "c",
        "label": "It administers Salesforce user billing licenses"
      },
      {
        "id": "d",
        "label": "It renders Lightning Web Components"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_aut_28",
    "section": "automation",
    "prompt": "In Boomi, what is the role of the \"Base - Try/Catch Message\" document property inside the Catch path?",
    "options": [
      {
        "id": "a",
        "label": "It contains the exact error message, stack trace, and error code captured by the Try/Catch shape for the failing document"
      },
      {
        "id": "b",
        "label": "It contains the administrator email address"
      },
      {
        "id": "c",
        "label": "It holds the customer credit card number"
      },
      {
        "id": "d",
        "label": "It logs the server CPU temperature"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_aut_29",
    "section": "automation",
    "prompt": "What is the purpose of the \"Map Function: String -> String Concat\" in Boomi mapping?",
    "options": [
      {
        "id": "a",
        "label": "To concatenate multiple input strings together with an optional delimiter (e.g. joining FirstName + \" \" + LastName)"
      },
      {
        "id": "b",
        "label": "To split a string into multiple pieces"
      },
      {
        "id": "c",
        "label": "To translate strings into binary bytes"
      },
      {
        "id": "d",
        "label": "To calculate the character length of a word"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_aut_30",
    "section": "automation",
    "prompt": "What is the function of the \"Database\" connector \"Dynamic Update\" or \"Dynamic Insert\" operation in Boomi?",
    "options": [
      {
        "id": "a",
        "label": "It creates new tables in the database schema automatically"
      },
      {
        "id": "b",
        "label": "It automatically constructs SQL statements at runtime based on the fields populated in the incoming Database Profile, avoiding manual SQL authoring"
      },
      {
        "id": "c",
        "label": "It migrates databases from MySQL to Oracle"
      },
      {
        "id": "d",
        "label": "It generates synthetic test data in tables"
      }
    ],
    "correctOptionId": "b"
  }
];

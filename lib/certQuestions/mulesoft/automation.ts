import { CertQuestion } from '../types';

export const MULESOFT_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "mule_aut_01",
    section: "automation",
    prompt: "In DataWeave 2.0, which directive is used to declare custom functions or import reusable DataWeave modules in the script header?",
    options: [
      { id: "a", label: "`#include <dataweave.h>`" },
      { id: "b", label: "`import * from dw::core::Strings` and `fun formatCurrency(val) = ...` in the header section before `---`." },
      { id: "c", label: "`var function formatCurrency() = {}`" },
      { id: "d", label: "`def formatCurrency():`" }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_aut_02",
    section: "automation",
    prompt: "How does the DataWeave 2.0 `match / case` pattern matching expression evaluate variable data types and content values?",
    options: [
      { id: "a", label: "Executes all matching cases simultaneously in parallel threads." },
      { id: "b", label: "Throws a fatal compile error if more than 2 cases are defined." },
      { id: "c", label: "Evaluates patterns sequentially from top to bottom, returning the expression result of the first matching case or the `else` fallback." },
      { id: "d", label: "Converts the payload to an SQL table before comparison." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_aut_03",
    section: "automation",
    prompt: "When transforming a large JSON array of 500,000 records in DataWeave, what enables memory-efficient streaming without loading all objects into RAM at once?",
    options: [
      { id: "a", label: "Zipping the JSON file with GZIP." },
      { id: "b", label: "Converting the array to a single string before parsing." },
      { id: "c", label: "Writing each record to a local disk text file using Java FileOutputStream." },
      { id: "d", label: "Setting `output application/json deferred=true` or streaming configuration on the MIME type." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_aut_04",
    section: "automation",
    prompt: "In Mule 4 Batch Processing (`<batch:job>`), what are the three distinct processing phases in order of execution?",
    options: [
      { id: "a", label: "1. Input Phase (splits records), 2. Process Phase (Batch Steps), 3. On Complete Phase (aggregation & summary)." },
      { id: "b", label: "1. Compilation, 2. Linking, 3. Execution." },
      { id: "c", label: "1. Validation, 2. Database Insert, 3. Email Notification." },
      { id: "d", label: "1. Fetch, 2. Decode, 3. Execute." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_aut_05",
    section: "automation",
    prompt: "How does the `For Each` scope differ from the `Parallel For Each` scope in Mule 4?",
    options: [
      { id: "a", label: "`Parallel For Each` can only process XML files." },
      { id: "b", label: "`For Each` processes collection items sequentially on a single thread preserving payload mutations; `Parallel For Each` processes items concurrently across multiple threads and returns an aggregated collection." },
      { id: "c", label: "`For Each` runs on the GPU; `Parallel For Each` runs on the CPU." },
      { id: "d", label: "There is no difference in concurrency or execution order." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_aut_06",
    section: "automation",
    prompt: "In a Mule 4 Batch Job, how can you configure a Batch Step to only process records that failed in earlier steps for error logging or dead-letter queuing?",
    options: [
      { id: "a", label: "Wrap the Batch Step in a `try/catch` block." },
      { id: "b", label: "Delete all successful records from the input queue." },
      { id: "c", label: "Set the Batch Step `acceptPolicy=\"ONLY_FAILURES\"`." },
      { id: "d", label: "Reboot the CloudHub worker node." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_aut_07",
    section: "automation",
    prompt: "What is the purpose of the `Batch Aggregator` component placed inside a Mule 4 Batch Step?",
    options: [
      { id: "a", label: "Sums all integer numbers in the payload." },
      { id: "b", label: "Compresses records into ZIP files." },
      { id: "c", label: "Encrypts payload headers with AES-256." },
      { id: "d", label: "Groups individual processed records into fixed-size chunks (e.g. 200 records) or streaming sets to perform high-efficiency bulk upserts (e.g. into Salesforce or Database)." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_aut_08",
    section: "automation",
    prompt: "In DataWeave 2.0, what does the `pluck` function do when applied to an Object?",
    options: [
      { id: "a", label: "Maps an Object's key-value pairs into an Array based on specified transformation rules `(value, key, index) -> ...`." },
      { id: "b", label: "Deletes all null keys from the Object." },
      { id: "c", label: "Sorts the Object keys in reverse alphabetical order." },
      { id: "d", label: "Extracts only the first character of each string value." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_aut_09",
    section: "automation",
    prompt: "What does the DataWeave 2.0 `reduce` higher-order function accomplish on an array?",
    options: [
      { id: "a", label: "Reduces array size by deleting the last 5 elements." },
      { id: "b", label: "Iterates through an array to accumulate elements into a single aggregate value based on an accumulator expression `(item, accumulator = initial) -> ...`." },
      { id: "c", label: "Filters out odd numbers from the array." },
      { id: "d", label: "Converts strings to lowercase." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_aut_10",
    section: "automation",
    prompt: "How does the Mule 4 `Scatter-Gather` router handle concurrent processing across multiple parallel routes?",
    options: [
      { id: "a", label: "Routes the message randomly to one child route based on CPU load." },
      { id: "b", label: "Runs each route sequentially with a 5-second delay between them." },
      { id: "c", label: "Executes all child routes concurrently across separate threads with the same input message, aggregates all route responses into a composite Object payload, and throws `COMPOSITE_ROUTING` error if any route fails." },
      { id: "d", label: "Sends the message to a remote printer." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_aut_11",
    section: "automation",
    prompt: "In Mule 4, what happens to flow execution when an error occurs inside a `Try` scope configured with an `On Error Continue` handler?",
    options: [
      { id: "a", label: "The Mule application halts and undeploys immediately." },
      { id: "b", label: "The parent flow re-throws the error to the global error handler." },
      { id: "c", label: "All flow variables are permanently deleted." },
      { id: "d", label: "The error is caught and handled, the error response payload is set, and the parent flow continues execution with subsequent components as if the Try block succeeded." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_aut_12",
    section: "automation",
    prompt: "How does an `On Error Propagate` error handler differ from an `On Error Continue` handler in Mule 4?",
    options: [
      { id: "a", label: "`On Error Propagate` executes error steps, rolls back active transactions, and re-throws the error to the calling flow or client (returning HTTP 500 by default), whereas `On Error Continue` consumes the error and returns success." },
      { id: "b", label: "`On Error Propagate` only works with JMS queues." },
      { id: "c", label: "`On Error Continue` always sends an email alert to the admin." },
      { id: "d", label: "They are identical aliases." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_aut_13",
    section: "automation",
    prompt: "When polling for newly created files on an SFTP server in Mule 4, which connector operation and watermark strategy prevents reprocessing the same file?",
    options: [
      { id: "a", label: "Calling `sftp.list()` in an infinite while loop." },
      { id: "b", label: "SFTP `On New or Updated File` listener with `watermark` mode, or moving/deleting files post-processing via post-action." },
      { id: "c", label: "Renaming the SFTP server host IP address." },
      { id: "d", label: "Re-uploading the file with a `.done` extension." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_aut_14",
    section: "automation",
    prompt: "In Anypoint MQ, what is the purpose of configuring a FIFO (First-In, First-Out) queue compared to a standard queue?",
    options: [
      { id: "a", label: "Provides 100x higher throughput at the cost of random ordering." },
      { id: "b", label: "Allows messages larger than 100GB." },
      { id: "c", label: "Guarantees strict message ordering and exactly-once delivery using Message Group IDs and Deduplication IDs." },
      { id: "d", label: "Bypasses all network encryption." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_aut_15",
    section: "automation",
    prompt: "What is an Object Store v2 (OSv2) used for in CloudHub Mule applications?",
    options: [
      { id: "a", label: "Storing video and image media assets." },
      { id: "b", label: "Hosting static HTML website pages." },
      { id: "c", label: "Managing physical hard drives in AWS." },
      { id: "d", label: "Storing persistent state, idempotency keys, OAuth tokens, and synchronization watermarks across multiple worker replicas." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_aut_16",
    section: "automation",
    prompt: "In Mule 4, how can duplicate message processing be prevented in high-throughput webhook consumer flows?",
    options: [
      { id: "a", label: "Using the `Idempotent Message Validator` component configured with an Object Store and a unique message ID (e.g. `event.id`)." },
      { id: "b", label: "Inserting `time.sleep(10)` before processing." },
      { id: "c", label: "Rejecting all messages with odd-numbered timestamps." },
      { id: "d", label: "Disabling HTTP keep-alive on the listener." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_aut_17",
    section: "automation",
    prompt: "In DataWeave 2.0, what operator is used for default fallback values when a field is null or missing?",
    options: [
      { id: "a", label: "`??`" },
      { id: "b", label: "`default` (e.g. `payload.status default 'PENDING'`)" },
      { id: "c", label: "`orElse`" },
      { id: "d", label: "`coalesce()`" }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_aut_18",
    section: "automation",
    prompt: "How does the DataWeave `flatten` function handle nested arrays?",
    options: [
      { id: "a", label: "Deletes all array elements." },
      { id: "b", label: "Converts arrays into JSON strings." },
      { id: "c", label: "Collapses nested arrays into a single single-dimensional array (e.g. `flatten([[1, 2], [3, 4]])` becomes `[1, 2, 3, 4]`)." },
      { id: "d", label: "Calculates the average value of the array." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_aut_19",
    section: "automation",
    prompt: "What is the function of the `Validation Module` (e.g. `Is not null`, `Is true`, `Validate IP`) in Mule 4 flows?",
    options: [
      { id: "a", label: "Validates credit card payment pins with Visa servers." },
      { id: "b", label: "Checks if the Mule runtime license has expired." },
      { id: "c", label: "Reformats invalid JSON into valid XML." },
      { id: "d", label: "Asserts business conditions and immediately throws a specific typed `VALIDATION:*` error if criteria fail, triggering downstream error flows." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_aut_20",
    section: "automation",
    prompt: "In Mule 4, what is the purpose of the `Until Successful` scope component?",
    options: [
      { id: "a", label: "Repeatedly executes its child processors with configurable retries and backoff delays until execution succeeds or maximum attempts are exhausted." },
      { id: "b", label: "Loops infinitely until the server runs out of memory." },
      { id: "c", label: "Runs child processors only on weekend schedules." },
      { id: "d", label: "Suppresses all error logs completely." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_aut_21",
    section: "automation",
    prompt: "How does DataWeave 2.0 format a date string into ISO-8601 UTC format?",
    options: [
      { id: "a", label: "`Date.toString()`" },
      { id: "b", label: "`now() as String {format: \"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\"}`" },
      { id: "c", label: "`formatDate(now)`" },
      { id: "d", label: "`date_to_iso(now())`" }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_aut_22",
    section: "automation",
    prompt: "In Mule 4 Database Connector, why should parameterized SQL queries (`SELECT * FROM accounts WHERE id = :accId`) be used instead of dynamic string concatenation?",
    options: [
      { id: "a", label: "Increases SQL query limits to unlimited rows." },
      { id: "b", label: "Bypasses database authentication passwords." },
      { id: "c", label: "Prevents SQL Injection attacks and allows database engines to cache query execution plans." },
      { id: "d", label: "Converts relational tables into NoSQL documents." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_aut_23",
    section: "automation",
    prompt: "What is the purpose of the `Dynamic Evaluate` component in Mule 4?",
    options: [
      { id: "a", label: "Measures JVM CPU temperature." },
      { id: "b", label: "Evaluates arithmetic formulas in Excel." },
      { id: "c", label: "Checks network ping latency." },
      { id: "d", label: "Dynamically executes a DataWeave script that is loaded from an external variable, file, or database at runtime." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_aut_24",
    section: "automation",
    prompt: "In DataWeave 2.0, what does the `groupBy` higher-order function return?",
    options: [
      { id: "a", label: "An Object where keys are the evaluated criteria and values are Arrays of matching input items." },
      { id: "b", label: "A single sorted string." },
      { id: "c", label: "A flat array with duplicates removed." },
      { id: "d", label: "A boolean true/false." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_aut_25",
    section: "automation",
    prompt: "How can a Mule 4 flow publish a message to an Apache Kafka topic using the official Kafka Connector?",
    options: [
      { id: "a", label: "Open a raw telnet socket to port 9092." },
      { id: "b", label: "Use the `Kafka:Publish` operation configured with bootstrap servers, target topic, partition key, and serialized message payload." },
      { id: "c", label: "Write the message to an FTP folder." },
      { id: "d", label: "Use the HTTP Request connector." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_aut_26",
    section: "automation",
    prompt: "In DataWeave 2.0, how do you filter an array to remove items where `status == 'INACTIVE'`?",
    options: [
      { id: "a", label: "`payload.delete(status == 'INACTIVE')`" },
      { id: "b", label: "`payload - 'INACTIVE'`" },
      { id: "c", label: "`payload filter (item, index) -> item.status != 'INACTIVE'`" },
      { id: "d", label: "`filterBy(payload, 'INACTIVE')`" }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_aut_27",
    section: "automation",
    prompt: "What is the purpose of the `Choice` router in Mule 4 flow design?",
    options: [
      { id: "a", label: "Prompts the user in a GUI dialog to select an option." },
      { id: "b", label: "Executes all branches concurrently." },
      { id: "c", label: "Restarts the Mule server on failure." },
      { id: "d", label: "Evaluates conditional DataWeave boolean expressions (`when ...`) sequentially and routes the Mule Event to the first matching branch or `otherwise` default branch." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_aut_28",
    section: "automation",
    prompt: "When calling an external REST API that returns paginated responses (e.g. 50 records per page with a `next_cursor`), how can a Mule flow automate full extraction?",
    options: [
      { id: "a", label: "Implement a recursive sub-flow or while-loop structure using Object Store / Flow Variables that repeatedly calls the API with the updated cursor until `next_cursor` is null." },
      { id: "b", label: "Request 10,000,000 records in a single query parameter `?limit=all`." },
      { id: "c", label: "Call the API only once and ignore subsequent pages." },
      { id: "d", label: "Increase the CloudHub worker vCore size." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_aut_29",
    section: "automation",
    prompt: "In Mule 4, what is the role of the `Async` scope?",
    options: [
      { id: "a", label: "Forces all child processors to run on the GPU." },
      { id: "b", label: "Forks execution of its child processors to a separate background thread without blocking the main flow, discarding any payload returned by the async block." },
      { id: "c", label: "Compresses all outgoing payloads with Brotli." },
      { id: "d", label: "Delays execution until midnight." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_aut_30",
    section: "automation",
    prompt: "How does the Salesforce Connector in Mule 4 implement near real-time event capture using Change Data Capture (CDC)?",
    options: [
      { id: "a", label: "Polls `SELECT * FROM Account` every 100 milliseconds." },
      { id: "b", label: "Logs into Salesforce GUI with automated browser clicks." },
      { id: "c", label: "Uses the `Subscribe Channel Listener` connecting to CometD / Bayeux streaming channels (e.g. `/data/AccountChangeEvent`) to receive instant change notifications." },
      { id: "d", label: "Exports nightly CSV backup files." }
    ],
    correctOptionId: "c"
  }
];

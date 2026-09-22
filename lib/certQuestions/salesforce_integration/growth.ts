import { Question } from '../../certTypes';

export const salesforceGrowthQuestions: Question[] = [
  {
    id: 'sfdc_grow_01',
    domain: 'growth',
    text: 'How does Bulk API 2.0 simplify the ingestion of millions of records compared to legacy Bulk API 1.0?',
    options: {
      a: 'Salesforce automatically splits the uploaded CSV data into optimal internal batches and manages parallel execution without manual batch chunking by the client',
      b: 'Bulk API 2.0 processes records synchronously within 5 milliseconds',
      c: 'Bulk API 2.0 removes the need for CSV headers',
      d: 'Bulk API 2.0 executes solely inside the client web browser'
    },
    correctAnswer: 'a',
    explanation: 'Bulk API 2.0 eliminates manual batch creation; clients submit a single CSV dataset, and Salesforce automatically chunks and optimizes backend batch execution.'
  },
  {
    id: 'sfdc_grow_02',
    domain: 'growth',
    text: 'What causes the UNABLE_TO_LOCK_ROW error during high-concurrency data load integrations into Salesforce?',
    options: {
      a: 'Multiple concurrent threads or integration workers attempting to update records that share the same parent record or lookup reference simultaneously',
      b: 'Exceeding the maximum daily SOQL query limit',
      c: 'Using TLS 1.3 instead of TLS 1.2 on the integration endpoint',
      d: 'Uploading CSV files larger than 10 MB without gzip compression'
    },
    correctAnswer: 'a',
    explanation: 'Lock contention (`UNABLE_TO_LOCK_ROW`) occurs when concurrent transactions try to modify child records pointing to the same parent account or lookup key simultaneously, triggering parent record locks.'
  },
  {
    id: 'sfdc_grow_03',
    domain: 'growth',
    text: 'How can an integration architect prevent record locking during massive data loads into objects with lookup relationships (Account Data Skew)?',
    options: {
      a: 'Sort data by parent ID (e.g. AccountId) in the CSV, load child records in serial mode, or distribute lookups across multiple placeholder parent records',
      b: 'Disable all indexes on the target object',
      c: 'Run all batch integrations at maximum concurrency of 50 threads simultaneously',
      d: 'Convert all lookup relationships into external objects'
    },
    correctAnswer: 'a',
    explanation: 'Sorting incoming records by parent ID ensures all children of a single parent are processed together in sequence, minimizing concurrent lock conflicts across worker threads.'
  },
  {
    id: 'sfdc_grow_04',
    domain: 'growth',
    text: 'In Salesforce Large Data Volumes (LDV), what is the threshold beyond which an object is generally considered a high-volume object requiring careful indexing and query tuning?',
    options: {
      a: '5,000,000 records',
      b: '10,000 records',
      c: '100,000 records',
      d: '1,000,000,000 records'
    },
    correctAnswer: 'a',
    explanation: 'In Salesforce architecture, tables with more than 5 million records are classified as Large Data Volumes (LDV), requiring custom indexes, skinny tables, and selective SOQL query filters.'
  },
  {
    id: 'sfdc_grow_05',
    domain: 'growth',
    text: 'What makes a SOQL query filter "selective" according to the Salesforce Query Optimizer for standard indexed fields on an object with over 5 million records?',
    options: {
      a: 'The query filter targets less than 30% of the first 1 million records and less than 15% of records over 1 million (or up to 1 million max)',
      b: 'The query uses the NOT operator and leading wildcards (`LIKE \'%abc\'`)',
      c: 'The query sorts records by CreatedDate descending with no WHERE clause',
      d: 'The query selects all custom formula fields'
    },
    correctAnswer: 'a',
    explanation: 'For standard indexes, a query is selective if the filter matches less than 30% of the first 1M records and 15% of records above 1M (max 1M records total). Non-selective queries cause full table scans.'
  },
  {
    id: 'sfdc_grow_06',
    domain: 'growth',
    text: 'What is the purpose of Skinny Tables in Salesforce database optimization for LDV read integrations?',
    options: {
      a: 'They combine frequently queried standard and custom fields into a single underlying database table to eliminate expensive multi-table joins in SOQL reads and reports',
      b: 'They compress binary attachments into ZIP archives',
      c: 'They delete archived records automatically after 30 days',
      d: 'They truncate text fields to 255 characters'
    },
    correctAnswer: 'a',
    explanation: 'Skinny tables sync standard and custom fields into a flat database table, eliminating joins between standard and custom tables, significantly accelerating read-heavy SOQL queries.'
  },
  {
    id: 'sfdc_grow_07',
    domain: 'growth',
    text: 'In Bulk API 1.0 SOQL queries, what does Primary Key (PK) Chunking accomplish when querying tables with tens of millions of records?',
    options: {
      a: 'It splits the query into smaller parallel sub-queries based on record ID boundaries (chunks of 100k-250k), avoiding query timeouts and table lock failures',
      b: 'It automatically encrypts the primary key using SHA-256',
      c: 'It converts Salesforce IDs into UUIDv4 format',
      d: 'It moves historical records into external Snowflake clusters'
    },
    correctAnswer: 'a',
    explanation: 'PK Chunking breaks large query jobs into manageable ID-range chunks, preventing query timeouts and enabling parallel extraction of massive datasets.'
  },
  {
    id: 'sfdc_grow_08',
    domain: 'growth',
    text: 'When designing an Enterprise Dead Letter Queue (DLQ) pattern for failed Platform Event subscribers in Salesforce, what is the best practice?',
    options: {
      a: 'Catch errors in the event trigger/handler, write failed payloads with error metadata into a custom Error_Log__c object or DLQ event, and alert operations',
      b: 'Allow the trigger to fail silently so the event is permanently deleted',
      c: 'Restart the Salesforce instance using the Developer Console',
      d: 'Re-send the message in an infinite synchronous while-loop'
    },
    correctAnswer: 'a',
    explanation: 'A DLQ pattern captures the unprocessable event payload and exception trace in an error repository or dedicated DLQ event channel for inspection, replay, or dead-letter handling without crashing the stream.'
  },
  {
    id: 'sfdc_grow_09',
    domain: 'growth',
    text: 'What is the maximum daily limit for Bulk API 2.0 ingest data uploads per 24-hour rolling period in Enterprise and Unlimited editions?',
    options: {
      a: '150,000,000 records or 150 GB of CSV data',
      b: '10,000 records or 10 MB of CSV data',
      c: '1,000,000 records or 1 GB of CSV data',
      d: '500,000 records'
    },
    correctAnswer: 'a',
    explanation: 'Bulk API 2.0 provides a generous rolling 24-hour ingest limit of 150 million records (or ~150 GB of data), significantly higher than legacy batch counts.'
  },
  {
    id: 'sfdc_grow_10',
    domain: 'growth',
    text: 'How does Salesforce provide visibility into daily API request usage across enterprise integrations?',
    options: {
      a: 'Through the `Sforce-Limit-Info` HTTP response header and Setup "Company Information" API Usage metrics',
      b: 'By sending daily paper invoices via postal mail',
      c: 'By throwing a 500 Internal Server Error on every 10th request',
      d: 'By terminating the integration user password at midnight'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce returns the `Sforce-Limit-Info: api-usage=current/max` header on REST responses, enabling integration engines to monitor limit consumption in real time.'
  },
  {
    id: 'sfdc_grow_11',
    domain: 'growth',
    text: 'When moving integration configurations across environments (Dev Sandbox -> Full Sandbox -> Production) in modern Salesforce DevOps, which toolchain is standard?',
    options: {
      a: 'Salesforce CLI (sf / sfdx) with source-tracked scratch orgs, GitHub Actions CI/CD pipelines, and Metadata / unlocked packages',
      b: 'Manual copy-pasting of Apex code into the Production Developer Console',
      c: 'Weekly CSV data exports uploaded via Data Import Wizard',
      d: 'Emailing unencrypted change set XML files to colleagues'
    },
    correctAnswer: 'a',
    explanation: 'Modern Salesforce DevOps utilizes the Salesforce CLI, source control (Git), automated CI/CD runners, and packaged metadata for repeatable and auditable deployments.'
  },
  {
    id: 'sfdc_grow_12',
    domain: 'growth',
    text: 'What is the purpose of Salesforce Custom Metadata Types (CMDT) in enterprise integration architecture?',
    options: {
      a: 'They allow storing integration endpoints, configuration switches, and environment-specific settings that deploy seamlessly across sandboxes with code',
      b: 'They replace standard Salesforce database tables for customer transactional records',
      c: 'They automatically generate Java code from REST payloads',
      d: 'They act as client-side cache in web browsers'
    },
    correctAnswer: 'a',
    explanation: 'Custom Metadata Types store configuration data as metadata, meaning records are deployable via CI/CD, queryable without SOQL governor limit penalties, and accessible in Apex.'
  },
  {
    id: 'sfdc_grow_13',
    domain: 'growth',
    text: 'Which testing strategy is essential for Apex integration callout logic to achieve required 75%+ unit test code coverage without making real network HTTP calls during deployment?',
    options: {
      a: 'Implementing the `HttpCalloutMock` or `WebServiceMock` interface to return deterministic mock responses',
      b: 'Enabling live internet access in test classes by setting `(SeeAllData=true)`',
      c: 'Disabling all assertions in test classes',
      d: 'Calling external staging servers directly during unit test execution'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce test execution forbids live HTTP calls. Developers must use `Test.setMock(HttpCalloutMock.class, new MockGenerator())` to simulate HTTP responses reliably.'
  },
  {
    id: 'sfdc_grow_14',
    domain: 'growth',
    text: 'In Salesforce CDC and Platform Event high-volume architectures, what happens if an external subscriber application goes offline for 12 hours?',
    options: {
      a: 'Upon reconnecting, the subscriber supplies its last saved `ReplayId` and replays all events missed during the downtime from the 72-hour event retention buffer',
      b: 'All events generated during the 12 hours are permanently lost',
      c: 'The Salesforce event bus stops generating events until the subscriber acknowledges',
      d: 'The subscriber IP address is permanently blocked'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce retains high-volume platform and CDC events for 72 hours on the event bus, enabling offline subscribers to catch up by supplying the last processed `ReplayId`.'
  },
  {
    id: 'sfdc_grow_15',
    domain: 'growth',
    text: 'What is the advantage of using Salesforce Unlocked Packages for packaging modular integration micro-components across multiple orgs?',
    options: {
      a: 'Unlocked packages allow versioned, automated, and dependency-managed deployment of Apex code, metadata, and Named Credentials via CI/CD pipelines',
      b: 'Unlocked packages make all code readable on the public internet',
      c: 'Unlocked packages bypass code coverage test requirements during installation',
      d: 'Unlocked packages convert custom fields into standard fields'
    },
    correctAnswer: 'a',
    explanation: 'Unlocked Packages allow modular application architecture, clear package dependencies, automated versioning, and clean CI/CD installations into target orgs.'
  },
  {
    id: 'sfdc_grow_16',
    domain: 'growth',
    text: 'When executing heavy data extraction from Salesforce with SOQL, why should `SELECT *` style broad queries and formula field filters be avoided in Large Data Volumes?',
    options: {
      a: 'Querying unnecessary fields increases heap and serialization overhead, and formula fields cannot be indexed by default, causing full table scans',
      b: 'SOQL does not support SELECT statements with more than 3 fields',
      c: 'Formula fields can only be read by System Administrators',
      d: 'Formula fields always return null over REST API queries'
    },
    correctAnswer: 'a',
    explanation: 'Extracting only required columns reduces payload size, and avoiding non-deterministic formula fields in WHERE clauses ensures standard/custom indexes can be used by the Query Optimizer.'
  },
  {
    id: 'sfdc_grow_17',
    domain: 'growth',
    text: 'What is the role of Salesforce Developer Sandboxes vs Full Sandboxes in integration testing lifecycle?',
    options: {
      a: 'Developer sandboxes are used for isolated unit and component coding, while Full Sandboxes contain production data volumes and configurations for end-to-end integration and load testing',
      b: 'Developer sandboxes have higher API rate limits than Full Sandboxes',
      c: 'Full sandboxes do not support Apex REST callouts',
      d: 'Developer sandboxes cannot connect to Git repositories'
    },
    correctAnswer: 'a',
    explanation: 'Full Sandboxes replicate production metadata and all record data, making them ideal for performance testing, integration testing, and Large Data Volume query tuning.'
  },
  {
    id: 'sfdc_grow_18',
    domain: 'growth',
    text: 'How can an integration architect optimize Bulk API 2.0 ingestion speed when loading 10 million records into a custom object with complex workflow rules and triggers?',
    options: {
      a: 'Temporarily disable non-essential triggers, flows, and validation rules during load, perform data transformations upstream in ETL/middleware, and re-enable rules post-load',
      b: 'Increase the number of before-insert triggers on the object',
      c: 'Switch Bulk API 2.0 into serial mode with a batch size of 1',
      d: 'Send all records via synchronous SOAP create calls'
    },
    correctAnswer: 'a',
    explanation: 'Disabling triggers, flows, and validations during bulk ingestion avoids expensive row-by-row synchronous processing in Salesforce, speeding up data ingestion by orders of magnitude.'
  },
  {
    id: 'sfdc_grow_19',
    domain: 'growth',
    text: 'What is the purpose of the Salesforce `System.Queueable` interface chaining feature in asynchronous integration pipelines?',
    options: {
      a: 'It allows one Queueable job to start another Queueable job upon completion, enabling sequential multi-step asynchronous processing pipelines without hitting recursion limits',
      b: 'It connects Salesforce directly to IBM MQ without middleware',
      c: 'It forces synchronous execution in user interface threads',
      d: 'It merges two Salesforce orgs into one database'
    },
    correctAnswer: 'a',
    explanation: 'Queueable Apex supports chaining (`System.enqueueJob(new NextJob())`) from within the `execute` method, allowing complex multi-stage asynchronous processing workflows.'
  },
  {
    id: 'sfdc_grow_20',
    domain: 'growth',
    text: 'Which header in Bulk API 2.0 query jobs enables extracting deleted and archived records (e.g. for complete data backup and archival integrations)?',
    options: {
      a: 'Setting the query job operation to "queryAll"',
      b: 'X-Salesforce-Include-RecycleBin: true',
      c: 'hardDeleteFlag=enabled',
      d: 'SOQL-Export-Archived: 1'
    },
    correctAnswer: 'a',
    explanation: 'In Bulk API 2.0, setting the `operation` field to `queryAll` extracts both active records and soft-deleted records in the Recycle Bin as well as archived tasks.'
  },
  {
    id: 'sfdc_grow_21',
    domain: 'growth',
    text: 'When configuring Salesforce Connect with high-volume external data, how does the "Client-Driven Paging" option affect integration behavior?',
    options: {
      a: 'The Salesforce UI / engine requests specific page sizes using `$top` and `$skip` parameters in OData requests as users scroll',
      b: 'The external database is downloaded in full to the client browser cache',
      c: 'Salesforce disables all external search indexing',
      d: 'The integration user must manually enter page numbers'
    },
    correctAnswer: 'a',
    explanation: 'Client-driven paging allows the OData consumer (Salesforce) to request records in controlled pages using `$top` and `$skip` parameters.'
  },
  {
    id: 'sfdc_grow_22',
    domain: 'growth',
    text: 'What is the main risk of having "Ownership Skew" (where more than 10,000 records of a single object are owned by a single user) in integration data models?',
    options: {
      a: 'It can cause severe performance degradation and lock contention during sharing calculations whenever the user’s role or group membership changes',
      b: 'The user account is automatically disabled by Salesforce',
      c: 'The object can no longer be queried via REST API',
      d: 'It violates the OAuth 2.0 RFC specification'
    },
    correctAnswer: 'a',
    explanation: 'Ownership Skew causes massive sharing recalculation overhead across the role hierarchy whenever the owner is modified or role trees are reorganized.'
  },
  {
    id: 'sfdc_grow_23',
    domain: 'growth',
    text: 'In Salesforce Pub/Sub API, what is the role of the `ManagedFetch` RPC method?',
    options: {
      a: 'It provides server-side cursor state management and automatic commit tracking, freeing client applications from manually managing event replay bookmarks',
      b: 'It fetches metadata descriptions of custom objects in JSON',
      c: 'It executes Batch Apex jobs across multiple orgs',
      d: 'It converts CSV files into Apache Parquet format'
    },
    correctAnswer: 'a',
    explanation: '`ManagedFetch` in Pub/Sub API allows Salesforce to track consumer commit checkpoints server-side, simplifying client code and ensuring reliable event processing.'
  },
  {
    id: 'sfdc_grow_24',
    domain: 'growth',
    text: 'How should an integration architect structure error handling in Apex REST callouts when external third-party endpoints return transient 503 Service Unavailable errors?',
    options: {
      a: 'Implement an exponential backoff retry pattern via Queueable Apex or scheduled jobs before routing persistent failures to an alert queue',
      b: 'Immediately throw an uncaught NullPointerException to halt all system operations',
      c: 'Retry the callout in a tight synchronous `while(true)` loop until it succeeds',
      d: 'Ignore the error and assume the operation was successful'
    },
    correctAnswer: 'a',
    explanation: 'Asynchronous retry with exponential backoff handles transient network blips without exhausting synchronous limits or locking system threads.'
  },
  {
    id: 'sfdc_grow_25',
    domain: 'growth',
    text: 'What is the purpose of the Salesforce `Apex Flex Queue` in managing batch job execution at scale?',
    options: {
      a: 'It holds up to 100 batch jobs in "Holding" status and dynamically moves them into the processing queue as worker slots become available',
      b: 'It converts batch Apex jobs into realtime REST endpoints',
      c: 'It allows developers to pause and resume individual Apex lines of code',
      d: 'It stores encrypted user passwords for single sign-on'
    },
    correctAnswer: 'a',
    explanation: 'The Apex Flex Queue allows submitting up to 100 batch jobs beyond the 5 concurrently running batch jobs, placing them in a holding state and reordering priority before execution.'
  },
  {
    id: 'sfdc_grow_26',
    domain: 'growth',
    text: 'When migrating historical data into Salesforce with custom timestamps, which feature allows integration users to preserve the original `CreatedDate` and `CreatedById` values?',
    options: {
      a: 'Enable "Set Audit Fields upon Record Creation" permission in Setup',
      b: 'Use standard SQL INSERT statements directly into Oracle',
      c: 'Modify the Salesforce system database clock',
      d: 'Set the timezone in user preferences to UTC-12'
    },
    correctAnswer: 'a',
    explanation: 'The "Set Audit Fields upon Record Creation" permission allows integration user accounts to populate system fields (`CreatedDate`, `CreatedById`, etc.) during data migration.'
  },
  {
    id: 'sfdc_grow_27',
    domain: 'growth',
    text: 'How does Salesforce GraphQL API improve API efficiency for mobile and microservice integrations compared to standard REST API?',
    options: {
      a: 'It allows clients to specify the exact fields and related objects needed in a single query, eliminating over-fetching and multiple round-trip HTTP requests',
      b: 'It requires zero authentication',
      c: 'It runs locally on client edge servers without connecting to Salesforce',
      d: 'It replaces all database triggers with client-side JavaScript'
    },
    correctAnswer: 'a',
    explanation: 'GraphQL API allows declarative field selection and multi-object traversal in a single request, optimizing payload size and network efficiency.'
  },
  {
    id: 'sfdc_grow_28',
    domain: 'growth',
    text: 'In enterprise Salesforce CI/CD pipelines, what is the best practice for managing environment-specific integration endpoints across Scratch, Dev, Test, and Prod orgs?',
    options: {
      a: 'Use Named Credentials or Custom Metadata Types where endpoint URLs are configured per environment and referenced abstractly in Apex code',
      b: 'Hardcode target production IP addresses directly inside Apex class definitions',
      c: 'Manually edit Apex classes in production using the Developer Console',
      d: 'Require users to type the URL in a browser prompt before every callout'
    },
    correctAnswer: 'a',
    explanation: 'Abstracting endpoints through Named Credentials or Custom Metadata Types keeps code environment-agnostic and simplifies promotions across deployment pipelines.'
  },
  {
    id: 'sfdc_grow_29',
    domain: 'growth',
    text: 'What is the purpose of Salesforce `PlatformCache` in high-throughput integration architectures?',
    options: {
      a: 'It provides in-memory data storage (Session and Org cache) to cache frequently referenced external lookup data and reduce repetitive external HTTP callouts and SOQL queries',
      b: 'It caches browser HTML cookies for offline mode',
      c: 'It acts as an external relational database replica in AWS',
      d: 'It stores unencrypted passwords for REST API users'
    },
    correctAnswer: 'a',
    explanation: 'Platform Cache (powered by Redis) enables fast in-memory caching of frequently accessed calculations, tokens, or external reference data, reducing database and callout overhead.'
  },
  {
    id: 'sfdc_grow_30',
    domain: 'growth',
    text: 'Which Salesforce feature allows architects to simulate production-like synthetic event loads in sandboxes to validate Pub/Sub API and Platform Event consumers before go-live?',
    options: {
      a: 'Apex Batch / Queueable test event generators combined with the Pub/Sub API Publish RPC endpoint',
      b: 'Data Loader CSV Export Wizard',
      c: 'Visualforce Page PDF Renderer',
      d: 'Schema Builder ERD Diagram Export'
    },
    correctAnswer: 'a',
    explanation: 'Using automated Apex scripts or external test harnesses that push synthetic event batches via the Pub/Sub API or REST allows comprehensive load and throughput validation prior to production release.'
  }
];

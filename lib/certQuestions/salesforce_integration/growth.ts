import { CertQuestion } from '../types';

export const SALESFORCE_INTEGRATION_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "sfdc_grow_01",
    "section": "growth",
    "prompt": "How does Bulk API 2.0 simplify the ingestion of millions of records compared to legacy Bulk API 1.0?",
    "options": [
      {
        "id": "a",
        "label": "Bulk API 2.0 processes records synchronously within 5 milliseconds"
      },
      {
        "id": "b",
        "label": "Salesforce automatically splits the uploaded CSV data into optimal internal batches and manages parallel execution without manual batch chunking by the client"
      },
      {
        "id": "c",
        "label": "Bulk API 2.0 removes the need for CSV headers"
      },
      {
        "id": "d",
        "label": "Bulk API 2.0 executes solely inside the client web browser"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_grow_02",
    "section": "growth",
    "prompt": "What causes the UNABLE_TO_LOCK_ROW error during high-concurrency data load integrations into Salesforce?",
    "options": [
      {
        "id": "a",
        "label": "Exceeding the maximum daily SOQL query limit"
      },
      {
        "id": "b",
        "label": "Using TLS 1.3 instead of TLS 1.2 on the integration endpoint"
      },
      {
        "id": "c",
        "label": "Multiple concurrent threads or integration workers attempting to update records that share the same parent record or lookup reference simultaneously"
      },
      {
        "id": "d",
        "label": "Uploading CSV files larger than 10 MB without gzip compression"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_grow_03",
    "section": "growth",
    "prompt": "How can an integration architect prevent record locking during massive data loads into objects with lookup relationships (Account Data Skew)?",
    "options": [
      {
        "id": "a",
        "label": "Sort data by parent ID (e.g. AccountId) in the CSV, load child records in serial mode, or distribute lookups across multiple placeholder parent records"
      },
      {
        "id": "b",
        "label": "Disable all indexes on the target object"
      },
      {
        "id": "c",
        "label": "Run all batch integrations at maximum concurrency of 50 threads simultaneously"
      },
      {
        "id": "d",
        "label": "Convert all lookup relationships into external objects"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_grow_04",
    "section": "growth",
    "prompt": "In Salesforce Large Data Volumes (LDV), what is the threshold beyond which an object is generally considered a high-volume object requiring careful indexing and query tuning?",
    "options": [
      {
        "id": "a",
        "label": "10,000 records"
      },
      {
        "id": "b",
        "label": "100,000 records"
      },
      {
        "id": "c",
        "label": "1,000,000,000 records"
      },
      {
        "id": "d",
        "label": "5,000,000 records"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_grow_05",
    "section": "growth",
    "prompt": "What makes a SOQL query filter \"selective\" according to the Salesforce Query Optimizer for standard indexed fields on an object with over 5 million records?",
    "options": [
      {
        "id": "a",
        "label": "The query uses the NOT operator and leading wildcards (`LIKE '%abc'`)"
      },
      {
        "id": "b",
        "label": "The query sorts records by CreatedDate descending with no WHERE clause"
      },
      {
        "id": "c",
        "label": "The query filter targets less than 30% of the first 1 million records and less than 15% of records over 1 million (or up to 1 million max)"
      },
      {
        "id": "d",
        "label": "The query selects all custom formula fields"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_grow_06",
    "section": "growth",
    "prompt": "What is the purpose of Skinny Tables in Salesforce database optimization for LDV read integrations?",
    "options": [
      {
        "id": "a",
        "label": "They combine frequently queried standard and custom fields into a single underlying database table to eliminate expensive multi-table joins in SOQL reads and reports"
      },
      {
        "id": "b",
        "label": "They compress binary attachments into ZIP archives"
      },
      {
        "id": "c",
        "label": "They delete archived records automatically after 30 days"
      },
      {
        "id": "d",
        "label": "They truncate text fields to 255 characters"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_grow_07",
    "section": "growth",
    "prompt": "In Bulk API 1.0 SOQL queries, what does Primary Key (PK) Chunking accomplish when querying tables with tens of millions of records?",
    "options": [
      {
        "id": "a",
        "label": "It automatically encrypts the primary key using SHA-256"
      },
      {
        "id": "b",
        "label": "It converts Salesforce IDs into UUIDv4 format"
      },
      {
        "id": "c",
        "label": "It moves historical records into external Snowflake clusters"
      },
      {
        "id": "d",
        "label": "It splits the query into smaller parallel sub-queries based on record ID boundaries (chunks of 100k-250k), avoiding query timeouts and table lock failures"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_grow_08",
    "section": "growth",
    "prompt": "When designing an Enterprise Dead Letter Queue (DLQ) pattern for failed Platform Event subscribers in Salesforce, what is the best practice?",
    "options": [
      {
        "id": "a",
        "label": "Allow the trigger to fail silently so the event is permanently deleted"
      },
      {
        "id": "b",
        "label": "Catch errors in the event trigger/handler, write failed payloads with error metadata into a custom Error_Log__c object or DLQ event, and alert operations"
      },
      {
        "id": "c",
        "label": "Restart the Salesforce instance using the Developer Console"
      },
      {
        "id": "d",
        "label": "Re-send the message in an infinite synchronous while-loop"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_grow_09",
    "section": "growth",
    "prompt": "What is the maximum daily limit for Bulk API 2.0 ingest data uploads per 24-hour rolling period in Enterprise and Unlimited editions?",
    "options": [
      {
        "id": "a",
        "label": "10,000 records or 10 MB of CSV data"
      },
      {
        "id": "b",
        "label": "1,000,000 records or 1 GB of CSV data"
      },
      {
        "id": "c",
        "label": "500,000 records"
      },
      {
        "id": "d",
        "label": "150,000,000 records or 150 GB of CSV data"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_grow_10",
    "section": "growth",
    "prompt": "How does Salesforce provide visibility into daily API request usage across enterprise integrations?",
    "options": [
      {
        "id": "a",
        "label": "By sending daily paper invoices via postal mail"
      },
      {
        "id": "b",
        "label": "Through the `Sforce-Limit-Info` HTTP response header and Setup \"Company Information\" API Usage metrics"
      },
      {
        "id": "c",
        "label": "By throwing a 500 Internal Server Error on every 10th request"
      },
      {
        "id": "d",
        "label": "By terminating the integration user password at midnight"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_grow_11",
    "section": "growth",
    "prompt": "When moving integration configurations across environments (Dev Sandbox -> Full Sandbox -> Production) in modern Salesforce DevOps, which toolchain is standard?",
    "options": [
      {
        "id": "a",
        "label": "Manual copy-pasting of Apex code into the Production Developer Console"
      },
      {
        "id": "b",
        "label": "Weekly CSV data exports uploaded via Data Import Wizard"
      },
      {
        "id": "c",
        "label": "Salesforce CLI (sf / sfdx) with source-tracked scratch orgs, GitHub Actions CI/CD pipelines, and Metadata / unlocked packages"
      },
      {
        "id": "d",
        "label": "Emailing unencrypted change set XML files to colleagues"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_grow_12",
    "section": "growth",
    "prompt": "What is the purpose of Salesforce Custom Metadata Types (CMDT) in enterprise integration architecture?",
    "options": [
      {
        "id": "a",
        "label": "They allow storing integration endpoints, configuration switches, and environment-specific settings that deploy seamlessly across sandboxes with code"
      },
      {
        "id": "b",
        "label": "They replace standard Salesforce database tables for customer transactional records"
      },
      {
        "id": "c",
        "label": "They automatically generate Java code from REST payloads"
      },
      {
        "id": "d",
        "label": "They act as client-side cache in web browsers"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_grow_13",
    "section": "growth",
    "prompt": "Which testing strategy is essential for Apex integration callout logic to achieve required 75%+ unit test code coverage without making real network HTTP calls during deployment?",
    "options": [
      {
        "id": "a",
        "label": "Implementing the `HttpCalloutMock` or `WebServiceMock` interface to return deterministic mock responses"
      },
      {
        "id": "b",
        "label": "Enabling live internet access in test classes by setting `(SeeAllData=true)`"
      },
      {
        "id": "c",
        "label": "Disabling all assertions in test classes"
      },
      {
        "id": "d",
        "label": "Calling external staging servers directly during unit test execution"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_grow_14",
    "section": "growth",
    "prompt": "In Salesforce CDC and Platform Event high-volume architectures, what happens if an external subscriber application goes offline for 12 hours?",
    "options": [
      {
        "id": "a",
        "label": "All events generated during the 12 hours are permanently lost"
      },
      {
        "id": "b",
        "label": "The Salesforce event bus stops generating events until the subscriber acknowledges"
      },
      {
        "id": "c",
        "label": "The subscriber IP address is permanently blocked"
      },
      {
        "id": "d",
        "label": "Upon reconnecting, the subscriber supplies its last saved `ReplayId` and replays all events missed during the downtime from the 72-hour event retention buffer"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_grow_15",
    "section": "growth",
    "prompt": "What is the advantage of using Salesforce Unlocked Packages for packaging modular integration micro-components across multiple orgs?",
    "options": [
      {
        "id": "a",
        "label": "Unlocked packages make all code readable on the public internet"
      },
      {
        "id": "b",
        "label": "Unlocked packages allow versioned, automated, and dependency-managed deployment of Apex code, metadata, and Named Credentials via CI/CD pipelines"
      },
      {
        "id": "c",
        "label": "Unlocked packages bypass code coverage test requirements during installation"
      },
      {
        "id": "d",
        "label": "Unlocked packages convert custom fields into standard fields"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_grow_16",
    "section": "growth",
    "prompt": "When executing heavy data extraction from Salesforce with SOQL, why should `SELECT *` style broad queries and formula field filters be avoided in Large Data Volumes?",
    "options": [
      {
        "id": "a",
        "label": "SOQL does not support SELECT statements with more than 3 fields"
      },
      {
        "id": "b",
        "label": "Formula fields can only be read by System Administrators"
      },
      {
        "id": "c",
        "label": "Querying unnecessary fields increases heap and serialization overhead, and formula fields cannot be indexed by default, causing full table scans"
      },
      {
        "id": "d",
        "label": "Formula fields always return null over REST API queries"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_grow_17",
    "section": "growth",
    "prompt": "What is the role of Salesforce Developer Sandboxes vs Full Sandboxes in integration testing lifecycle?",
    "options": [
      {
        "id": "a",
        "label": "Developer sandboxes have higher API rate limits than Full Sandboxes"
      },
      {
        "id": "b",
        "label": "Developer sandboxes are used for isolated unit and component coding, while Full Sandboxes contain production data volumes and configurations for end-to-end integration and load testing"
      },
      {
        "id": "c",
        "label": "Full sandboxes do not support Apex REST callouts"
      },
      {
        "id": "d",
        "label": "Developer sandboxes cannot connect to Git repositories"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_grow_18",
    "section": "growth",
    "prompt": "How can an integration architect optimize Bulk API 2.0 ingestion speed when loading 10 million records into a custom object with complex workflow rules and triggers?",
    "options": [
      {
        "id": "a",
        "label": "Temporarily disable non-essential triggers, flows, and validation rules during load, perform data transformations upstream in ETL/middleware, and re-enable rules post-load"
      },
      {
        "id": "b",
        "label": "Increase the number of before-insert triggers on the object"
      },
      {
        "id": "c",
        "label": "Switch Bulk API 2.0 into serial mode with a batch size of 1"
      },
      {
        "id": "d",
        "label": "Send all records via synchronous SOAP create calls"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_grow_19",
    "section": "growth",
    "prompt": "What is the purpose of the Salesforce `System.Queueable` interface chaining feature in asynchronous integration pipelines?",
    "options": [
      {
        "id": "a",
        "label": "It connects Salesforce directly to IBM MQ without middleware"
      },
      {
        "id": "b",
        "label": "It forces synchronous execution in user interface threads"
      },
      {
        "id": "c",
        "label": "It merges two Salesforce orgs into one database"
      },
      {
        "id": "d",
        "label": "It allows one Queueable job to start another Queueable job upon completion, enabling sequential multi-step asynchronous processing pipelines without hitting recursion limits"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_grow_20",
    "section": "growth",
    "prompt": "Which header in Bulk API 2.0 query jobs enables extracting deleted and archived records (e.g. for complete data backup and archival integrations)?",
    "options": [
      {
        "id": "a",
        "label": "X-Salesforce-Include-RecycleBin: true"
      },
      {
        "id": "b",
        "label": "hardDeleteFlag=enabled"
      },
      {
        "id": "c",
        "label": "Setting the query job operation to \"queryAll\""
      },
      {
        "id": "d",
        "label": "SOQL-Export-Archived: 1"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_grow_21",
    "section": "growth",
    "prompt": "When configuring Salesforce Connect with high-volume external data, how does the \"Client-Driven Paging\" option affect integration behavior?",
    "options": [
      {
        "id": "a",
        "label": "The external database is downloaded in full to the client browser cache"
      },
      {
        "id": "b",
        "label": "Salesforce disables all external search indexing"
      },
      {
        "id": "c",
        "label": "The Salesforce UI / engine requests specific page sizes using `$top` and `$skip` parameters in OData requests as users scroll"
      },
      {
        "id": "d",
        "label": "The integration user must manually enter page numbers"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_grow_22",
    "section": "growth",
    "prompt": "What is the main risk of having \"Ownership Skew\" (where more than 10,000 records of a single object are owned by a single user) in integration data models?",
    "options": [
      {
        "id": "a",
        "label": "The user account is automatically disabled by Salesforce"
      },
      {
        "id": "b",
        "label": "The object can no longer be queried via REST API"
      },
      {
        "id": "c",
        "label": "It violates the OAuth 2.0 RFC specification"
      },
      {
        "id": "d",
        "label": "It can cause severe performance degradation and lock contention during sharing calculations whenever the user’s role or group membership changes"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_grow_23",
    "section": "growth",
    "prompt": "In Salesforce Pub/Sub API, what is the role of the `ManagedFetch` RPC method?",
    "options": [
      {
        "id": "a",
        "label": "It provides server-side cursor state management and automatic commit tracking, freeing client applications from manually managing event replay bookmarks"
      },
      {
        "id": "b",
        "label": "It fetches metadata descriptions of custom objects in JSON"
      },
      {
        "id": "c",
        "label": "It executes Batch Apex jobs across multiple orgs"
      },
      {
        "id": "d",
        "label": "It converts CSV files into Apache Parquet format"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_grow_24",
    "section": "growth",
    "prompt": "How should an integration architect structure error handling in Apex REST callouts when external third-party endpoints return transient 503 Service Unavailable errors?",
    "options": [
      {
        "id": "a",
        "label": "Immediately throw an uncaught NullPointerException to halt all system operations"
      },
      {
        "id": "b",
        "label": "Implement an exponential backoff retry pattern via Queueable Apex or scheduled jobs before routing persistent failures to an alert queue"
      },
      {
        "id": "c",
        "label": "Retry the callout in a tight synchronous `while(true)` loop until it succeeds"
      },
      {
        "id": "d",
        "label": "Ignore the error and assume the operation was successful"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_grow_25",
    "section": "growth",
    "prompt": "What is the purpose of the Salesforce `Apex Flex Queue` in managing batch job execution at scale?",
    "options": [
      {
        "id": "a",
        "label": "It converts batch Apex jobs into realtime REST endpoints"
      },
      {
        "id": "b",
        "label": "It allows developers to pause and resume individual Apex lines of code"
      },
      {
        "id": "c",
        "label": "It stores encrypted user passwords for single sign-on"
      },
      {
        "id": "d",
        "label": "It holds up to 100 batch jobs in \"Holding\" status and dynamically moves them into the processing queue as worker slots become available"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_grow_26",
    "section": "growth",
    "prompt": "When migrating historical data into Salesforce with custom timestamps, which feature allows integration users to preserve the original `CreatedDate` and `CreatedById` values?",
    "options": [
      {
        "id": "a",
        "label": "Use standard SQL INSERT statements directly into Oracle"
      },
      {
        "id": "b",
        "label": "Modify the Salesforce system database clock"
      },
      {
        "id": "c",
        "label": "Enable \"Set Audit Fields upon Record Creation\" permission in Setup"
      },
      {
        "id": "d",
        "label": "Set the timezone in user preferences to UTC-12"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_grow_27",
    "section": "growth",
    "prompt": "How does Salesforce GraphQL API improve API efficiency for mobile and microservice integrations compared to standard REST API?",
    "options": [
      {
        "id": "a",
        "label": "It requires zero authentication"
      },
      {
        "id": "b",
        "label": "It allows clients to specify the exact fields and related objects needed in a single query, eliminating over-fetching and multiple round-trip HTTP requests"
      },
      {
        "id": "c",
        "label": "It runs locally on client edge servers without connecting to Salesforce"
      },
      {
        "id": "d",
        "label": "It replaces all database triggers with client-side JavaScript"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_grow_28",
    "section": "growth",
    "prompt": "In enterprise Salesforce CI/CD pipelines, what is the best practice for managing environment-specific integration endpoints across Scratch, Dev, Test, and Prod orgs?",
    "options": [
      {
        "id": "a",
        "label": "Use Named Credentials or Custom Metadata Types where endpoint URLs are configured per environment and referenced abstractly in Apex code"
      },
      {
        "id": "b",
        "label": "Hardcode target production IP addresses directly inside Apex class definitions"
      },
      {
        "id": "c",
        "label": "Manually edit Apex classes in production using the Developer Console"
      },
      {
        "id": "d",
        "label": "Require users to type the URL in a browser prompt before every callout"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_grow_29",
    "section": "growth",
    "prompt": "What is the purpose of Salesforce `PlatformCache` in high-throughput integration architectures?",
    "options": [
      {
        "id": "a",
        "label": "It provides in-memory data storage (Session and Org cache) to cache frequently referenced external lookup data and reduce repetitive external HTTP callouts and SOQL queries"
      },
      {
        "id": "b",
        "label": "It caches browser HTML cookies for offline mode"
      },
      {
        "id": "c",
        "label": "It acts as an external relational database replica in AWS"
      },
      {
        "id": "d",
        "label": "It stores unencrypted passwords for REST API users"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_grow_30",
    "section": "growth",
    "prompt": "Which Salesforce feature allows architects to simulate production-like synthetic event loads in sandboxes to validate Pub/Sub API and Platform Event consumers before go-live?",
    "options": [
      {
        "id": "a",
        "label": "Data Loader CSV Export Wizard"
      },
      {
        "id": "b",
        "label": "Apex Batch / Queueable test event generators combined with the Pub/Sub API Publish RPC endpoint"
      },
      {
        "id": "c",
        "label": "Visualforce Page PDF Renderer"
      },
      {
        "id": "d",
        "label": "Schema Builder ERD Diagram Export"
      }
    ],
    "correctOptionId": "b"
  }
];

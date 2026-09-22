import { CertQuestion } from '../types';

export const SALESFORCE_INTEGRATION_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "sfdc_lit_01",
    section: "literacy",
    prompt: "In Salesforce REST API integrations, what is the primary architectural advantage of using the Composite Graph API over standard single-record REST endpoints?",
    options: [
      { id: "a", label: "It compiles Apex code to WebAssembly." },
      { id: "b", label: "Executes multiple dependent subrequests in a single HTTP payload (up to 500 nodes across 75 graphs), with all-or-none transactional rollback per graph and a single API call count." },
      { id: "c", label: "Bypasses all Salesforce authentication." },
      { id: "d", label: "Stores all records in the browser's IndexedDB." }
    ],
    correctOptionId: "b"
  },
  {
    id: "sfdc_lit_02",
    section: "literacy",
    prompt: "When should an enterprise integration architect choose Bulk API 2.0 over standard REST API for Salesforce data synchronization?",
    options: [
      { id: "a", label: "When performing synchronous single-record user updates in a web browser form." },
      { id: "b", label: "When asynchronous batch processing of large data volumes (e.g. 50,000+ to millions of records) is needed, utilizing automated chunking and minimal API request counts." },
      { id: "c", label: "When querying only metadata schemas." },
      { id: "d", label: "When integrating via Bluetooth." }
    ],
    correctOptionId: "b"
  },
  {
    id: "sfdc_lit_03",
    section: "literacy",
    prompt: "What is the primary difference between Salesforce SOAP API Partner WSDL and Enterprise WSDL?",
    options: [
      { id: "a", label: "Enterprise WSDL is strongly typed and bound to a specific Salesforce org schema; Partner WSDL is loosely typed and generic across any Salesforce org." },
      { id: "b", label: "Partner WSDL only works for non-profit organizations." },
      { id: "c", label: "Enterprise WSDL is free; Partner WSDL requires a separate subscription." },
      { id: "d", label: "Partner WSDL is encrypted; Enterprise WSDL is plaintext." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_04",
    section: "literacy",
    prompt: "In Apex HTTP callouts, what is the maximum synchronous callout timeout limit enforced by Salesforce Governor Limits?",
    options: [
      { id: "a", label: "10 seconds" },
      { id: "b", label: "120 seconds (cumulative total per synchronous execution context)" },
      { id: "c", label: "600 seconds" },
      { id: "d", label: "Unlimited time" }
    ],
    correctOptionId: "b"
  },
  {
    id: "sfdc_lit_05",
    section: "literacy",
    prompt: "What is the role of `HttpCalloutMock` in Salesforce Apex automated testing?",
    options: [
      { id: "a", label: "Allows test classes to simulate HTTP responses for external endpoint callouts without making actual network requests, which are prohibited during Apex test runs." },
      { id: "b", label: "Deletes mock data after each unit test." },
      { id: "c", label: "Compiles Apex into Java classes." },
      { id: "d", label: "Tests network cable connectivity." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_06",
    section: "literacy",
    prompt: "In Salesforce REST API, what does an sObject `Upsert` operation (using HTTP `PATCH` with an External ID field) accomplish?",
    options: [
      { id: "a", label: "Deletes the record if found." },
      { id: "b", label: "Updates an existing record if the External ID matches, or atomically inserts a new record if no match exists, ensuring idempotent integration." },
      { id: "c", label: "Exports the record to an Excel spreadsheet." },
      { id: "d", label: "Locks the database table for 24 hours." }
    ],
    correctOptionId: "b"
  },
  {
    id: "sfdc_lit_07",
    section: "literacy",
    prompt: "What Salesforce API is specifically optimized for programmatic metadata deployments, schema definitions, and custom field creations?",
    options: [
      { id: "a", label: "Chatter REST API" },
      { id: "b", label: "Metadata API / Tooling API" },
      { id: "c", label: "Streaming API" },
      { id: "d", label: "Bulk API 2.0" }
    ],
    correctOptionId: "b"
  },
  {
    id: "sfdc_lit_08",
    section: "literacy",
    prompt: "When designing custom Apex REST web services using `@RestResource(urlMapping='/v1/accounts/*')`, which annotations define HTTP methods?",
    options: [
      { id: "a", label: "`@HttpGet`, `@HttpPost`, `@HttpPut`, `@HttpDelete`, and `@HttpPatch`." },
      { id: "b", label: "`@Action`, `@Method`, and `@Request`." },
      { id: "c", label: "`@WebService` only." },
      { id: "d", label: "`@Route` and `@Handler`." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_09",
    section: "literacy",
    prompt: "In Salesforce integration architecture, how do Governor Limits calculate daily REST/SOAP API request allocations for an enterprise organization?",
    options: [
      { id: "a", label: "Based on a 24-hour rolling window calculated from the total number and type of user licenses in the org (plus purchased add-on blocks)." },
      { id: "b", label: "Fixed at exactly 1,000 requests per month." },
      { id: "c", label: "Resets every day at 12:00 AM GMT to zero." },
      { id: "d", label: "Calculated based on database disk space consumed in Gigabytes." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_10",
    section: "literacy",
    prompt: "What is the maximum payload heap size limit for synchronous Apex callouts in Salesforce?",
    options: [
      { id: "a", label: "6 MB for synchronous execution (12 MB for asynchronous execution)." },
      { id: "b", label: "500 MB" },
      { id: "c", label: "1 GB" },
      { id: "d", label: "100 KB" }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_11",
    section: "literacy",
    prompt: "What is the primary benefit of using `JSONParser` and `JSONGenerator` in Apex over simple `JSON.deserialize()` for massive payloads?",
    options: [
      { id: "a", label: "Provides forward-only token-based streaming (O(1) memory) to parse deeply nested or huge JSON structures without exceeding the 6MB heap limit." },
      { id: "b", label: "Converts JSON into binary code." },
      { id: "c", label: "Encrypts JSON keys automatically." },
      { id: "d", label: "Validates JSON against TypeScript interfaces." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_12",
    section: "literacy",
    prompt: "In Salesforce REST API, what is SObject Tree resource (`/composite/tree/`) designed for?",
    options: [
      { id: "a", label: "Inserting a hierarchy of parent and child records (e.g. Account with multiple Contacts and Opportunities) in a single synchronous request." },
      { id: "b", label: "Displaying org chart hierarchies in the UI." },
      { id: "c", label: "Deleting records recursively." },
      { id: "d", label: "Formatting log messages in tree view." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_13",
    section: "literacy",
    prompt: "What is the function of the `Limits.getLimitCallouts()` and `Limits.getCallouts()` methods in Apex code?",
    options: [
      { id: "a", label: "Inspects runtime governor consumption to programmatically verify if remaining callout slots exist (up to 100 per context) before initiating a callout." },
      { id: "b", label: "Increases the governor limits dynamically." },
      { id: "c", label: "Resets the user's daily API quota." },
      { id: "d", label: "Disables all future callouts." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_14",
    section: "literacy",
    prompt: "What is an External ID field in Salesforce, and why is it essential for enterprise bidirectional integrations?",
    options: [
      { id: "a", label: "A custom field with the 'External ID' attribute that is indexed, storing legacy/ERP record keys to enable fast lookups and atomic upsert operations." },
      { id: "b", label: "A user's social security number." },
      { id: "c", label: "An IP address of an external server." },
      { id: "d", label: "A temporary session token that expires in 2 hours." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_15",
    section: "literacy",
    prompt: "Why cannot a DML operation (e.g. `insert acc;`) precede an HTTP callout in the same synchronous Apex transaction?",
    options: [
      { id: "a", label: "Salesforce prevents holding uncommitted database transactions open during remote network waiting (`CalloutException: You have uncommitted work pending`)." },
      { id: "b", label: "DML operations delete all HTTP headers." },
      { id: "c", label: "Apex does not allow database writes." },
      { id: "d", label: "It corrupts the Salesforce database index." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_16",
    section: "literacy",
    prompt: "How can an Apex developer execute an HTTP callout after performing database DML without encountering uncommitted work exceptions?",
    options: [
      { id: "a", label: "Enqueue a `Queueable` Apex job or callout from an `@future(callout=true)` method, running the callout in a separate, isolated asynchronous transaction." },
      { id: "b", label: "Insert `Test.stopTest()` into production code." },
      { id: "c", label: "Call `System.commit()`." },
      { id: "d", label: "Wrap the DML in a while loop." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_17",
    section: "literacy",
    prompt: "What is Salesforce User-Agent header etiquette when calling external REST services from Apex?",
    options: [
      { id: "a", label: "Include an identifying User-Agent or custom header identifying the calling Salesforce Org and client application for traceability." },
      { id: "b", label: "Send no headers at all." },
      { id: "c", label: "Spoof a Google Chrome browser header." },
      { id: "d", label: "Pass the admin password in the User-Agent header." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_18",
    section: "literacy",
    prompt: "In Salesforce REST API, what is the purpose of the `SOQL Query` endpoint (`/query/?q=...`)?",
    options: [
      { id: "a", label: "Executes SOQL queries over HTTP GET, returning JSON record results with a `nextRecordsUrl` cursor if the result exceeds 2,000 records." },
      { id: "b", label: "Creates new database schemas." },
      { id: "c", label: "Deletes old Salesforce user accounts." },
      { id: "d", label: "Exports reports directly to PDF." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_19",
    section: "literacy",
    prompt: "What is the maximum query result batch size returned in a single REST API SOQL query response before pagination via `nextRecordsUrl`?",
    options: [
      { id: "a", label: "2,000 records (configurable down to 200 via `Sforce-Query-Options` batchSize header)." },
      { id: "b", label: "10,000,000 records." },
      { id: "c", label: "50 records." },
      { id: "d", label: "1 record only." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_20",
    section: "literacy",
    prompt: "What does the `SObject Describe` REST endpoint (`/sobjects/{sobjectType}/describe`) return?",
    options: [
      { id: "a", label: "Full metadata schema for the object, including all fields, data types, picklist values, relationship names, and CRUD permissions." },
      { id: "b", label: "The user's login history." },
      { id: "c", label: "A list of all Salesforce servers worldwide." },
      { id: "d", label: "The current stock price of Salesforce." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_21",
    section: "literacy",
    prompt: "When writing custom Apex REST services, what is the best practice for handling unhandled exceptions to return clean HTTP status codes to consumers?",
    options: [
      { id: "a", label: "Wrap logic in `try/catch`, set `RestContext.response.statusCode` (e.g. 400 or 500), and serialize a structured error payload with an error code and message." },
      { id: "b", label: "Let unhandled exceptions crash with raw HTML error pages." },
      { id: "c", label: "Return HTTP 200 OK for all errors." },
      { id: "d", label: "Delete the calling user from the database." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_22",
    section: "literacy",
    prompt: "What is the purpose of Salesforce Outbound Messaging (Workflow / Flow action)?",
    options: [
      { id: "a", label: "Sends asynchronous XML SOAP notifications containing field data to a designated external endpoint with automated delivery retries for up to 24 hours." },
      { id: "b", label: "Sends SMS text messages to customer mobile phones." },
      { id: "c", label: "Posts updates to Facebook." },
      { id: "d", label: "Emails weekly newsletters to employees." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_23",
    section: "literacy",
    prompt: "Why must endpoints receiving Salesforce Outbound Messages respond with a specific SOAP XML acknowledgment (`<Ack>true</Ack>`)?",
    options: [
      { id: "a", label: "Without the `<Ack>true</Ack>` response, Salesforce treats the delivery as failed and repeatedly retries the message on an exponential backoff schedule." },
      { id: "b", label: "It is an optional aesthetic response." },
      { id: "c", label: "To prove the server has an active SSL certificate." },
      { id: "d", label: "To increase daily API limits." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_24",
    section: "literacy",
    prompt: "What is the primary difference between Salesforce REST API Composite Batch and Composite Collections?",
    options: [
      { id: "a", label: "Composite Batch executes up to 25 independent subrequests of any type; Composite Collections performs uniform CRUD operations on up to 200 sObjects of the same or mixed types." },
      { id: "b", label: "Composite Batch is for XML; Composite Collections is for JSON." },
      { id: "c", label: "Composite Collections only works in Sandbox orgs." },
      { id: "d", label: "There is no functional difference." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_25",
    section: "literacy",
    prompt: "In Salesforce REST API, how do you retrieve deleted or archived records that are currently in the Recycle Bin?",
    options: [
      { id: "a", label: "Use the SOQL Query All endpoint (`/queryAll/?q=...`) which queries both active and soft-deleted (`isDeleted = true`) records." },
      { id: "b", label: "Deleted records can never be queried via API." },
      { id: "c", label: "Use the `/recycle-bin/restore` endpoint." },
      { id: "d", label: "Run a database rollback in Apex." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_26",
    section: "literacy",
    prompt: "What is the role of Salesforce Remote Site Settings in Apex integrations?",
    options: [
      { id: "a", label: "Whitelists external target URLs (protocol and domain) that Apex callouts are permitted to reach, blocking unregistered endpoints with `System.CalloutException`." },
      { id: "b", label: "Configures VPN network routers." },
      { id: "c", label: "Sets up remote desktop access." },
      { id: "d", label: "Controls printer IP addresses." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_27",
    section: "literacy",
    prompt: "Why should Named Credentials be used in place of Remote Site Settings + hardcoded endpoint URLs for modern Apex callouts?",
    options: [
      { id: "a", label: "Named Credentials combine endpoint URL definition, authentication management, and authorization headers in a single declarative configuration without hardcoded passwords or Remote Site entries." },
      { id: "b", label: "Remote Site Settings are limited to 3 websites." },
      { id: "c", label: "Named Credentials increase callout speed by 10x." },
      { id: "d", label: "Remote Site Settings do not support HTTPS." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_28",
    section: "literacy",
    prompt: "In Salesforce API architecture, what is the function of the `Limits` REST resource (`/limits/`)?",
    options: [
      { id: "a", label: "Returns real-time remaining and maximum allocation values for all org limits (Daily API requests, Streaming events, Data storage, File storage, Single Email)." },
      { id: "b", label: "Sets password expiration dates." },
      { id: "c", label: "Limits the number of characters in Apex code." },
      { id: "d", label: "Deletes old log records." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_29",
    section: "literacy",
    prompt: "What is an Apex Continuation (`System.Continuation`) used for in Lightning Web Components (LWC) and Visualforce callouts?",
    options: [
      { id: "a", label: "Executes long-running asynchronous HTTP callouts (up to 120s) without holding synchronous request threads, avoiding the concurrent 20-thread long-running request governor limit." },
      { id: "b", label: "Continues playing audio files in the background." },
      { id: "c", label: "Automatically resumes failed unit tests." },
      { id: "d", label: "Merges duplicate contact records." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sfdc_lit_30",
    section: "literacy",
    prompt: "In Salesforce integration design, when is a Synchronous Request-Reply integration pattern preferred over an Asynchronous Fire-and-Forget pattern?",
    options: [
      { id: "a", label: "When the end-user requires an immediate response on screen (e.g. real-time credit card charge or shipping quote calculation before form submission)." },
      { id: "b", label: "When migrating 5,000,000 legacy records into Salesforce." },
      { id: "c", label: "When syncing product catalogs once a month." },
      { id: "d", label: "When archiving old cases." }
    ],
    correctOptionId: "a"
  }
];

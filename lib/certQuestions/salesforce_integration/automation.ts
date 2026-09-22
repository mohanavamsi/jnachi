import { Question } from '../../certTypes';

export const salesforceAutomationQuestions: Question[] = [
  {
    id: 'sfdc_aut_01',
    domain: 'automation',
    text: 'When subscribing to Platform Events from an external consumer via the CometD/Bayeux protocol, which channel URI format is used for a custom event named "Order_Update__e"?',
    options: {
      a: '/event/Order_Update__e',
      b: '/topic/Order_Update__e',
      c: '/data/Order_Update__e/subscribe',
      d: '/streaming/api/v1/Order_Update__e'
    },
    correctAnswer: 'a',
    explanation: 'Standard custom platform event channels in Salesforce Streaming API are subscribed to using the path `/event/CustomEventName__e`.'
  },
  {
    id: 'sfdc_aut_02',
    domain: 'automation',
    text: 'What is the primary architectural purpose of the ReplayId field in Salesforce Platform Events and Change Data Capture (CDC)?',
    options: {
      a: 'To guarantee transactional rollback if a subscriber crashes',
      b: 'To allow consumers to resume event stream retrieval from a specific historical offset within the 72-hour retention window',
      c: 'To decrypt sensitive payload fields across regional boundaries',
      d: 'To establish bidirectional RPC locks between Salesforce and external middleware'
    },
    correctAnswer: 'b',
    explanation: 'Salesforce event buses allocate sequential ReplayId values to events, allowing subscribers to replay missed events from a specific point within the event retention window (standard 72 hours).'
  },
  {
    id: 'sfdc_aut_03',
    domain: 'automation',
    text: 'Which Salesforce Change Data Capture (CDC) standard channel receives change notifications for all enabled standard and custom sObjects simultaneously?',
    options: {
      a: '/data/ChangeEvents',
      b: '/data/AllObjectStream__cdc',
      c: '/event/EnterpriseCDC',
      d: '/streaming/cdc/global'
    },
    correctAnswer: 'a',
    explanation: '`/data/ChangeEvents` is the default standard channel that aggregates change events for all sObjects configured for CDC in Setup.'
  },
  {
    id: 'sfdc_aut_04',
    domain: 'automation',
    text: 'When configuring Salesforce Connect with an external data source using OData 4.0, which feature enables external objects to look up native Salesforce parent records?',
    options: {
      a: 'Indirect Lookup Relationship',
      b: 'External Lookup Relationship',
      c: 'Cross-Tenant Master-Detail Relationship',
      d: 'Junction Junction Link'
    },
    correctAnswer: 'a',
    explanation: 'An Indirect Lookup relationship links an external object (child) to a standard or custom Salesforce object (parent) using an external ID field on the parent.'
  },
  {
    id: 'sfdc_aut_05',
    domain: 'automation',
    text: 'Which relationship type is configured when a standard or custom Salesforce object references an External Object as its parent?',
    options: {
      a: 'Master-Detail Relationship',
      b: 'External Lookup Relationship',
      c: 'Hierarchical Relationship',
      d: 'Polymorphic Lookup'
    },
    correctAnswer: 'b',
    explanation: 'An External Lookup Relationship links a standard, custom, or external object (child) to an external object (parent) matching against the External Object Id standard field.'
  },
  {
    id: 'sfdc_aut_06',
    domain: 'automation',
    text: 'In Salesforce Pub/Sub API (gRPC), how are schema definitions and serialized event messages exchanged for maximum throughput and backwards compatibility?',
    options: {
      a: 'Apache Avro binary serialization with JSON schema discovery',
      b: 'XML SOAP envelopes with strict XSD schema validation',
      c: 'Flat CSV buffers with Base64 encoding',
      d: 'Raw YAML payload blocks over HTTP/1.1 chunked transfer'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce Pub/Sub API uses gRPC with Apache Avro binary serialization, enabling high performance, efficient binary payloads, and dynamic schema retrieval by schema ID.'
  },
  {
    id: 'sfdc_aut_07',
    domain: 'automation',
    text: 'When designing an asynchronous outbound integration in Apex that must tolerate long-running HTTP callouts up to 120 seconds without blocking UI threads, which Apex interface is recommended?',
    options: {
      a: 'Database.Batchable without stateful flags',
      b: 'Queueable Apex implementing Database.AllowsCallouts',
      c: 'Schedulable Apex with synchronous HTTP send',
      d: 'Standard trigger before insert handler'
    },
    correctAnswer: 'b',
    explanation: 'Queueable Apex implementing `Database.AllowsCallouts` allows asynchronous execution with extended callout timeouts (up to 120s), chaining, and job monitoring.'
  },
  {
    id: 'sfdc_aut_08',
    domain: 'automation',
    text: 'What occurs if an Apex trigger makes a synchronous HTTP callout before committing DML changes within the same transaction without asynchronous dispatch?',
    options: {
      a: 'The transaction automatically scales thread priority',
      b: 'A System.CalloutException ("You have uncommitted work pending") is thrown',
      c: 'The HTTP payload is buffered until the nightly maintenance window',
      d: 'The DML is converted into an External Service callout silently'
    },
    correctAnswer: 'b',
    explanation: 'Salesforce prevents uncommitted DML transactions from remaining open across synchronous external HTTP callouts; executing DML before a synchronous callout in the same transaction throws a `CalloutException`.'
  },
  {
    id: 'sfdc_aut_09',
    domain: 'automation',
    text: 'Which Salesforce feature allows low-code declarative invocation of external REST APIs with OpenAPI 2.0 / 3.0 schema specifications directly inside Flow Builder?',
    options: {
      a: 'External Services',
      b: 'Canvas Apps',
      c: 'Custom Metadata Types',
      d: 'Outbound Messaging Rules'
    },
    correctAnswer: 'a',
    explanation: 'External Services parses OpenAPI specs and registers actions in Flow Builder as declarative invocable actions without custom Apex.'
  },
  {
    id: 'sfdc_aut_10',
    domain: 'automation',
    text: 'What is the primary difference between Salesforce "Publish Immediately" and "Publish After Commit" platform event publish behaviors?',
    options: {
      a: '"Publish Immediately" sends events immediately even if the enclosing database transaction subsequently rolls back',
      b: '"Publish Immediately" queues events in the Apex Async Queue for up to 24 hours',
      c: '"Publish After Commit" bypasses all field validation rules',
      d: '"Publish After Commit" encrypts the payload with tenant keys while Publish Immediately cannot'
    },
    correctAnswer: 'a',
    explanation: 'With "Publish Immediately", the event is put on the event bus right away regardless of whether the initiating Apex transaction succeeds or rolls back. "Publish After Commit" only releases events if the transaction commits.'
  },
  {
    id: 'sfdc_aut_11',
    domain: 'automation',
    text: 'When processing CDC events in external downstream microservices, which header field in the change event payload indicates whether the operation was a CREATE, UPDATE, DELETE, or UNDELETE?',
    options: {
      a: 'ChangeEventHeader.changeType',
      b: 'Header.operationCode',
      c: 'PayloadMeta.crudAction',
      d: 'EventSchema.transactionVerb'
    },
    correctAnswer: 'a',
    explanation: 'The `ChangeEventHeader` complex type includes `changeType`, containing values like `CREATE`, `UPDATE`, `DELETE`, or `UNDELETE`.'
  },
  {
    id: 'sfdc_aut_12',
    domain: 'automation',
    text: 'In Salesforce CDC, what does the "nulledFields" array inside ChangeEventHeader signify during an UPDATE event?',
    options: {
      a: 'Fields that were actively cleared or set to null by the user/system in that update transaction',
      b: 'Fields that the external integration user does not have FLS permission to view',
      c: 'System audit timestamp columns that have expired',
      d: 'Encrypted fields that could not be unpacked by the bus'
    },
    correctAnswer: 'a',
    explanation: 'Because CDC uses sparse payloads (omitting unchanged and null fields by default), fields explicitly set to null/empty are tracked in `ChangeEventHeader.nulledFields`.'
  },
  {
    id: 'sfdc_aut_13',
    domain: 'automation',
    text: 'Which asynchronous Apex feature allows an architect to execute a large-scale data cleansing and external sync job over 5 million records in controlled batches of 200?',
    options: {
      a: 'Database.Batchable',
      b: 'Future Methods (@future)',
      c: 'Continuation Actions',
      d: 'Immediate Visualforce Remoting'
    },
    correctAnswer: 'a',
    explanation: 'Batch Apex (`Database.Batchable`) processes large record sets (up to 50 million records via QueryLocator) in manageable chunks (default 200) across independent transactions.'
  },
  {
    id: 'sfdc_aut_14',
    domain: 'automation',
    text: 'What is the maximum number of concurrent long-running synchronous HTTP callouts (callouts lasting longer than 5 seconds) allowed per Salesforce org before governor limits block new requests?',
    options: {
      a: '10',
      b: '100',
      c: '1,000',
      d: '50'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce limits concurrent long-running callouts (lasting >= 5 seconds) to 10 per org. Exceeding this limit triggers a `LimitException`.'
  },
  {
    id: 'sfdc_aut_15',
    domain: 'automation',
    text: 'How can an Apex REST web service return a custom HTTP Status Code (e.g., 201 Created or 422 Unprocessable Entity) and set custom response headers?',
    options: {
      a: 'By modifying RestContext.response.statusCode and RestContext.response.headers',
      b: 'By throwing a custom AuraHandledException with an HTTP code parameter',
      c: 'By returning an instance of System.HttpResponse from the @HttpPost method',
      d: 'Custom status codes cannot be set in Apex REST'
    },
    correctAnswer: 'a',
    explanation: 'In an `@RestResource` class, setting `RestContext.response.statusCode = 201` and manipulating `RestContext.response.addHeader()` provides direct control over the HTTP response.'
  },
  {
    id: 'sfdc_aut_16',
    domain: 'automation',
    text: 'Which Salesforce Streaming API mechanism is specifically built for custom push topics based on SOQL queries over standard and custom objects?',
    options: {
      a: 'PushTopic Streaming',
      b: 'Generic Streaming API',
      c: 'Platform Event Bridge',
      d: 'Kafka Ingress Router'
    },
    correctAnswer: 'a',
    explanation: 'PushTopic events are defined by a SOQL query criteria on an object, firing notifications to subscribed clients whenever matching records are created or updated.'
  },
  {
    id: 'sfdc_aut_17',
    domain: 'automation',
    text: 'When designing an integration where an external payment gateway sends a webhook notification to Salesforce, what is the most resilient, decoupled architecture?',
    options: {
      a: 'Expose an Apex REST endpoint that publishes a Platform Event, then process the payload asynchronously via an event-triggered Flow or trigger',
      b: 'Expose a synchronous SOAP web service that updates 50 related objects in a single database transaction',
      c: 'Have the external gateway poll Salesforce every 500ms using SOQL REST queries',
      d: 'Write directly into Salesforce Big Objects using SOAP UI'
    },
    correctAnswer: 'a',
    explanation: 'Accepting the webhook, validating the signature, and immediately publishing a Platform Event achieves fast response times (<200ms) and avoids lock contention by decoupling ingestion from heavy processing.'
  },
  {
    id: 'sfdc_aut_18',
    domain: 'automation',
    text: 'In Salesforce Pub/Sub API, what is the benefit of Bidirectional Streaming RPC (PublishStream / SubscribeStream)?',
    options: {
      a: 'It allows continuous event publishing and acknowledgment flow control over a single persistent gRPC HTTP/2 connection',
      b: 'It eliminates the need for any OAuth token authentication',
      c: 'It converts all binary Avro schemas directly to HTML5 websockets',
      d: 'It replaces all Salesforce Governor limits with infinite cloud compute'
    },
    correctAnswer: 'a',
    explanation: 'Bidirectional streaming over gRPC (HTTP/2) maintains a single open channel where clients can request event batches with dynamic flow control (`FetchRequest`) and receive streamed payloads with minimum latency.'
  },
  {
    id: 'sfdc_aut_19',
    domain: 'automation',
    text: 'What happens when an Apex Platform Event trigger encounters an unhandled exception during execution?',
    options: {
      a: 'The batch is retried up to 9 times automatically via EventBus.RetryableException before placing the checkpoint after the failed batch',
      b: 'The entire event bus is paused for all tenants for 24 hours',
      c: 'The event message is permanently deleted without log generation',
      d: 'The event is converted into a standard Salesforce Task assigned to System Administrator'
    },
    correctAnswer: 'a',
    explanation: 'Apex platform event triggers can throw `EventBus.RetryableException` to retry batch processing up to 9 times, ensuring reliable processing of transient external errors.'
  },
  {
    id: 'sfdc_aut_20',
    domain: 'automation',
    text: 'Which parameter in Salesforce OData 4.0 adapter handles server-side pagination across high-volume external record collections?',
    options: {
      a: '@odata.nextLink',
      b: 'X-Salesforce-PageToken',
      c: 'queryLocatorID',
      d: 'offsetCursorIndex'
    },
    correctAnswer: 'a',
    explanation: 'OData 4.0 specifications use `@odata.nextLink` annotations to provide URL references to subsequent pages of external datasets.'
  },
  {
    id: 'sfdc_aut_21',
    domain: 'automation',
    text: 'Which Apex class annotation enables an Apex method to be invoked as a step in Salesforce Flow Builder or Process Automation?',
    options: {
      a: '@InvocableMethod',
      b: '@RemoteAction',
      c: '@AuraEnabled',
      d: '@Future(callout=true)'
    },
    correctAnswer: 'a',
    explanation: '`@InvocableMethod` exposes static Apex methods to Flow Builder and REST API invocable actions.'
  },
  {
    id: 'sfdc_aut_22',
    domain: 'automation',
    text: 'When configuring Salesforce Outbound Messages with Workflow or Flow, what must the external endpoint return in response to acknowledge message delivery?',
    options: {
      a: 'A SOAP response envelope containing <Ack>true</Ack>',
      b: 'HTTP 204 No Content with empty headers',
      c: 'A JSON payload with { "status": "OK", "code": 200 }',
      d: 'A cryptographic SHA-256 hash of the sessionId'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce Outbound Messaging sends SOAP XML requests; the receiver must reply with a SOAP response containing `<notificationsResponse><Ack>true</Ack></notificationsResponse>`.'
  },
  {
    id: 'sfdc_aut_23',
    domain: 'automation',
    text: 'What is the maximum payload size for a single Salesforce Platform Event message?',
    options: {
      a: '1 MB',
      b: '10 MB',
      c: '64 KB',
      d: '512 KB'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce standard and high-volume platform events support a maximum individual event payload size of 1 MB.'
  },
  {
    id: 'sfdc_aut_24',
    domain: 'automation',
    text: 'How can an integration architect prevent Outbound Messages from flooding downstream systems when thousands of records are updated simultaneously?',
    options: {
      a: 'Outbound messages automatically batch notifications for up to 100 records into a single SOAP delivery envelope',
      b: 'Salesforce drops all outbound messages that exceed 5 per second',
      c: 'Outbound messages require an active client-side web browser session',
      d: 'Outbound messages convert all payloads into single-byte UDP datagrams'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce Outbound Messaging engine automatically coalesces multiple pending notifications for the same endpoint into batched SOAP envelopes holding up to 100 notifications.'
  },
  {
    id: 'sfdc_aut_25',
    domain: 'automation',
    text: 'Which standard Salesforce REST API composite resource allows executing up to 25 subrequests where dependent subrequests can reference output fields from prior subrequests?',
    options: {
      a: '/services/data/vXX.X/composite',
      b: '/services/data/vXX.X/composite/batch',
      c: '/services/data/vXX.X/composite/tree',
      d: '/services/data/vXX.X/composite/sobjects'
    },
    correctAnswer: 'a',
    explanation: 'The Composite API (`/composite`) executes up to 25 dependent requests in a single HTTP payload and allows referencing previous request responses using `@{' + 'refName.field' + '}`.'
  },
  {
    id: 'sfdc_aut_26',
    domain: 'automation',
    text: 'What is the role of Continuation objects in Apex when building Lightning Web Components that make long-running HTTP callouts to external APIs?',
    options: {
      a: 'They preserve user interface responsiveness and avoid consuming synchronous request threads while waiting for external responses up to 120s',
      b: 'They automatically encrypt external payloads with AES-256 GCM',
      c: 'They convert REST responses into binary Kafka topics',
      d: 'They bypass all Salesforce profile permissions for the caller'
    },
    correctAnswer: 'a',
    explanation: 'Apex Continuations allow LWC and Visualforce controllers to make asynchronous HTTP callouts without holding up the synchronous Apex request thread limit while waiting for the response.'
  },
  {
    id: 'sfdc_aut_27',
    domain: 'automation',
    text: 'When configuring an external integration that ingests data into Salesforce custom Big Objects, which API is recommended for high-scale asynchronous ingestion?',
    options: {
      a: 'Bulk API 2.0 or Async Apex Database.insertImmediate',
      b: 'Synchronous Single-Record REST GET API',
      c: 'Tooling API SOQL endpoint',
      d: 'Metadata API deploy operation'
    },
    correctAnswer: 'a',
    explanation: 'Big Objects are optimized for billions of records and support high-throughput ingestion via Bulk API 2.0 and `Database.insertImmediate` in Apex.'
  },
  {
    id: 'sfdc_aut_28',
    domain: 'automation',
    text: 'Which Salesforce feature allows subscribing to standard platform events for user logins, API calls, and report exports to power real-time security monitoring integrations?',
    options: {
      a: 'Real-Time Event Monitoring (EventLogFile / LoginEventStream)',
      b: 'Schema Builder Webhooks',
      c: 'Omni-Channel Live Routing',
      d: 'Einstein Discovery Prediction Sync'
    },
    correctAnswer: 'a',
    explanation: 'Real-Time Event Monitoring streams standard platform events (e.g., `LoginEventStream`, `ApiEventStream`, `ReportEventStream`) for real-time SIEM and monitoring integrations.'
  },
  {
    id: 'sfdc_aut_29',
    domain: 'automation',
    text: 'In Salesforce CDC, how are fields with sensitive data (such as encrypted text fields) represented in the event stream?',
    options: {
      a: 'Encrypted fields can be filtered or included in CDC event streams and remain encrypted according to Salesforce Shield Platform Encryption settings',
      b: 'Encrypted fields are permanently converted to plaintext in the event message',
      c: 'CDC fails with an unrecoverable exception if any encrypted fields exist on the object',
      d: 'CDC replaces encrypted fields with static "REDACTED" strings'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce Shield Platform Encryption works with CDC; encrypted field data is preserved in its ciphertext format or protected according to tenant encryption policies.'
  },
  {
    id: 'sfdc_aut_30',
    domain: 'automation',
    text: 'What is the function of the "Composite SObject Collections" endpoint (`/services/data/vXX.X/composite/sobjects`) in Salesforce REST API?',
    options: {
      a: 'It allows creating, updating, or deleting up to 200 sObjects of uniform or mixed types in a single HTTP request',
      b: 'It generates auto-provisioned relational schemas in external SQL databases',
      c: 'It exports the entire metadata container of an org to Git',
      d: 'It converts SOQL queries to GraphQL queries dynamically'
    },
    correctAnswer: 'a',
    explanation: 'Composite SObject Collections allows manipulating (create, update, delete, retrieve) collections of up to 200 records in a single REST request, reducing HTTP overhead and API count consumption.'
  }
];

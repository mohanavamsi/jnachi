import { CertQuestion } from '../types';

export const SALESFORCE_INTEGRATION_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "sfdc_aut_01",
    "section": "automation",
    "prompt": "When subscribing to Platform Events from an external consumer via the CometD/Bayeux protocol, which channel URI format is used for a custom event named \"Order_Update__e\"?",
    "options": [
      {
        "id": "a",
        "label": "/topic/Order_Update__e"
      },
      {
        "id": "b",
        "label": "/event/Order_Update__e"
      },
      {
        "id": "c",
        "label": "/data/Order_Update__e/subscribe"
      },
      {
        "id": "d",
        "label": "/streaming/api/v1/Order_Update__e"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_aut_02",
    "section": "automation",
    "prompt": "What is the primary architectural purpose of the ReplayId field in Salesforce Platform Events and Change Data Capture (CDC)?",
    "options": [
      {
        "id": "a",
        "label": "To allow consumers to resume event stream retrieval from a specific historical offset within the 72-hour retention window"
      },
      {
        "id": "b",
        "label": "To decrypt sensitive payload fields across regional boundaries"
      },
      {
        "id": "c",
        "label": "To guarantee transactional rollback if a subscriber crashes"
      },
      {
        "id": "d",
        "label": "To establish bidirectional RPC locks between Salesforce and external middleware"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_aut_03",
    "section": "automation",
    "prompt": "Which Salesforce Change Data Capture (CDC) standard channel receives change notifications for all enabled standard and custom sObjects simultaneously?",
    "options": [
      {
        "id": "a",
        "label": "/data/ChangeEvents"
      },
      {
        "id": "b",
        "label": "/data/AllObjectStream__cdc"
      },
      {
        "id": "c",
        "label": "/event/EnterpriseCDC"
      },
      {
        "id": "d",
        "label": "/streaming/cdc/global"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_aut_04",
    "section": "automation",
    "prompt": "When configuring Salesforce Connect with an external data source using OData 4.0, which feature enables external objects to look up native Salesforce parent records?",
    "options": [
      {
        "id": "a",
        "label": "External Lookup Relationship"
      },
      {
        "id": "b",
        "label": "Cross-Tenant Master-Detail Relationship"
      },
      {
        "id": "c",
        "label": "Junction Junction Link"
      },
      {
        "id": "d",
        "label": "Indirect Lookup Relationship"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_aut_05",
    "section": "automation",
    "prompt": "Which relationship type is configured when a standard or custom Salesforce object references an External Object as its parent?",
    "options": [
      {
        "id": "a",
        "label": "External Lookup Relationship"
      },
      {
        "id": "b",
        "label": "Hierarchical Relationship"
      },
      {
        "id": "c",
        "label": "Master-Detail Relationship"
      },
      {
        "id": "d",
        "label": "Polymorphic Lookup"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_aut_06",
    "section": "automation",
    "prompt": "In Salesforce Pub/Sub API (gRPC), how are schema definitions and serialized event messages exchanged for maximum throughput and backwards compatibility?",
    "options": [
      {
        "id": "a",
        "label": "Apache Avro binary serialization with JSON schema discovery"
      },
      {
        "id": "b",
        "label": "XML SOAP envelopes with strict XSD schema validation"
      },
      {
        "id": "c",
        "label": "Flat CSV buffers with Base64 encoding"
      },
      {
        "id": "d",
        "label": "Raw YAML payload blocks over HTTP/1.1 chunked transfer"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_aut_07",
    "section": "automation",
    "prompt": "When designing an asynchronous outbound integration in Apex that must tolerate long-running HTTP callouts up to 120 seconds without blocking UI threads, which Apex interface is recommended?",
    "options": [
      {
        "id": "a",
        "label": "Queueable Apex implementing Database.AllowsCallouts"
      },
      {
        "id": "b",
        "label": "Schedulable Apex with synchronous HTTP send"
      },
      {
        "id": "c",
        "label": "Standard trigger before insert handler"
      },
      {
        "id": "d",
        "label": "Database.Batchable without stateful flags"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_aut_08",
    "section": "automation",
    "prompt": "What occurs if an Apex trigger makes a synchronous HTTP callout before committing DML changes within the same transaction without asynchronous dispatch?",
    "options": [
      {
        "id": "a",
        "label": "A System.CalloutException (\"You have uncommitted work pending\") is thrown"
      },
      {
        "id": "b",
        "label": "The transaction automatically scales thread priority"
      },
      {
        "id": "c",
        "label": "The HTTP payload is buffered until the nightly maintenance window"
      },
      {
        "id": "d",
        "label": "The DML is converted into an External Service callout silently"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_aut_09",
    "section": "automation",
    "prompt": "Which Salesforce feature allows low-code declarative invocation of external REST APIs with OpenAPI 2.0 / 3.0 schema specifications directly inside Flow Builder?",
    "options": [
      {
        "id": "a",
        "label": "Canvas Apps"
      },
      {
        "id": "b",
        "label": "Custom Metadata Types"
      },
      {
        "id": "c",
        "label": "Outbound Messaging Rules"
      },
      {
        "id": "d",
        "label": "External Services"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_aut_10",
    "section": "automation",
    "prompt": "What is the primary difference between Salesforce \"Publish Immediately\" and \"Publish After Commit\" platform event publish behaviors?",
    "options": [
      {
        "id": "a",
        "label": "\"Publish Immediately\" queues events in the Apex Async Queue for up to 24 hours"
      },
      {
        "id": "b",
        "label": "\"Publish Immediately\" sends events immediately even if the enclosing database transaction subsequently rolls back"
      },
      {
        "id": "c",
        "label": "\"Publish After Commit\" bypasses all field validation rules"
      },
      {
        "id": "d",
        "label": "\"Publish After Commit\" encrypts the payload with tenant keys while Publish Immediately cannot"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_aut_11",
    "section": "automation",
    "prompt": "When processing CDC events in external downstream microservices, which header field in the change event payload indicates whether the operation was a CREATE, UPDATE, DELETE, or UNDELETE?",
    "options": [
      {
        "id": "a",
        "label": "Header.operationCode"
      },
      {
        "id": "b",
        "label": "PayloadMeta.crudAction"
      },
      {
        "id": "c",
        "label": "ChangeEventHeader.changeType"
      },
      {
        "id": "d",
        "label": "EventSchema.transactionVerb"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_aut_12",
    "section": "automation",
    "prompt": "In Salesforce CDC, what does the \"nulledFields\" array inside ChangeEventHeader signify during an UPDATE event?",
    "options": [
      {
        "id": "a",
        "label": "Fields that were actively cleared or set to null by the user/system in that update transaction"
      },
      {
        "id": "b",
        "label": "Fields that the external integration user does not have FLS permission to view"
      },
      {
        "id": "c",
        "label": "System audit timestamp columns that have expired"
      },
      {
        "id": "d",
        "label": "Encrypted fields that could not be unpacked by the bus"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_aut_13",
    "section": "automation",
    "prompt": "Which asynchronous Apex feature allows an architect to execute a large-scale data cleansing and external sync job over 5 million records in controlled batches of 200?",
    "options": [
      {
        "id": "a",
        "label": "Database.Batchable"
      },
      {
        "id": "b",
        "label": "Future Methods (@future)"
      },
      {
        "id": "c",
        "label": "Continuation Actions"
      },
      {
        "id": "d",
        "label": "Immediate Visualforce Remoting"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_aut_14",
    "section": "automation",
    "prompt": "What is the maximum number of concurrent long-running synchronous HTTP callouts (callouts lasting longer than 5 seconds) allowed per Salesforce org before governor limits block new requests?",
    "options": [
      {
        "id": "a",
        "label": "100"
      },
      {
        "id": "b",
        "label": "1,000"
      },
      {
        "id": "c",
        "label": "50"
      },
      {
        "id": "d",
        "label": "10"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_aut_15",
    "section": "automation",
    "prompt": "How can an Apex REST web service return a custom HTTP Status Code (e.g., 201 Created or 422 Unprocessable Entity) and set custom response headers?",
    "options": [
      {
        "id": "a",
        "label": "By throwing a custom AuraHandledException with an HTTP code parameter"
      },
      {
        "id": "b",
        "label": "By modifying RestContext.response.statusCode and RestContext.response.headers"
      },
      {
        "id": "c",
        "label": "By returning an instance of System.HttpResponse from the @HttpPost method"
      },
      {
        "id": "d",
        "label": "Custom status codes cannot be set in Apex REST"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_aut_16",
    "section": "automation",
    "prompt": "Which Salesforce Streaming API mechanism is specifically built for custom push topics based on SOQL queries over standard and custom objects?",
    "options": [
      {
        "id": "a",
        "label": "Generic Streaming API"
      },
      {
        "id": "b",
        "label": "Platform Event Bridge"
      },
      {
        "id": "c",
        "label": "PushTopic Streaming"
      },
      {
        "id": "d",
        "label": "Kafka Ingress Router"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_aut_17",
    "section": "automation",
    "prompt": "When designing an integration where an external payment gateway sends a webhook notification to Salesforce, what is the most resilient, decoupled architecture?",
    "options": [
      {
        "id": "a",
        "label": "Expose a synchronous SOAP web service that updates 50 related objects in a single database transaction"
      },
      {
        "id": "b",
        "label": "Expose an Apex REST endpoint that publishes a Platform Event, then process the payload asynchronously via an event-triggered Flow or trigger"
      },
      {
        "id": "c",
        "label": "Have the external gateway poll Salesforce every 500ms using SOQL REST queries"
      },
      {
        "id": "d",
        "label": "Write directly into Salesforce Big Objects using SOAP UI"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_aut_18",
    "section": "automation",
    "prompt": "In Salesforce Pub/Sub API, what is the benefit of Bidirectional Streaming RPC (PublishStream / SubscribeStream)?",
    "options": [
      {
        "id": "a",
        "label": "It allows continuous event publishing and acknowledgment flow control over a single persistent gRPC HTTP/2 connection"
      },
      {
        "id": "b",
        "label": "It eliminates the need for any OAuth token authentication"
      },
      {
        "id": "c",
        "label": "It converts all binary Avro schemas directly to HTML5 websockets"
      },
      {
        "id": "d",
        "label": "It replaces all Salesforce Governor limits with infinite cloud compute"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_aut_19",
    "section": "automation",
    "prompt": "What happens when an Apex Platform Event trigger encounters an unhandled exception during execution?",
    "options": [
      {
        "id": "a",
        "label": "The entire event bus is paused for all tenants for 24 hours"
      },
      {
        "id": "b",
        "label": "The event message is permanently deleted without log generation"
      },
      {
        "id": "c",
        "label": "The event is converted into a standard Salesforce Task assigned to System Administrator"
      },
      {
        "id": "d",
        "label": "The batch is retried up to 9 times automatically via EventBus.RetryableException before placing the checkpoint after the failed batch"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_aut_20",
    "section": "automation",
    "prompt": "Which parameter in Salesforce OData 4.0 adapter handles server-side pagination across high-volume external record collections?",
    "options": [
      {
        "id": "a",
        "label": "X-Salesforce-PageToken"
      },
      {
        "id": "b",
        "label": "queryLocatorID"
      },
      {
        "id": "c",
        "label": "@odata.nextLink"
      },
      {
        "id": "d",
        "label": "offsetCursorIndex"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_aut_21",
    "section": "automation",
    "prompt": "Which Apex class annotation enables an Apex method to be invoked as a step in Salesforce Flow Builder or Process Automation?",
    "options": [
      {
        "id": "a",
        "label": "@RemoteAction"
      },
      {
        "id": "b",
        "label": "@AuraEnabled"
      },
      {
        "id": "c",
        "label": "@InvocableMethod"
      },
      {
        "id": "d",
        "label": "@Future(callout=true)"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_aut_22",
    "section": "automation",
    "prompt": "When configuring Salesforce Outbound Messages with Workflow or Flow, what must the external endpoint return in response to acknowledge message delivery?",
    "options": [
      {
        "id": "a",
        "label": "HTTP 204 No Content with empty headers"
      },
      {
        "id": "b",
        "label": "A JSON payload with { \"status\": \"OK\", \"code\": 200 }"
      },
      {
        "id": "c",
        "label": "A cryptographic SHA-256 hash of the sessionId"
      },
      {
        "id": "d",
        "label": "A SOAP response envelope containing <Ack>true</Ack>"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_aut_23",
    "section": "automation",
    "prompt": "What is the maximum payload size for a single Salesforce Platform Event message?",
    "options": [
      {
        "id": "a",
        "label": "1 MB"
      },
      {
        "id": "b",
        "label": "10 MB"
      },
      {
        "id": "c",
        "label": "64 KB"
      },
      {
        "id": "d",
        "label": "512 KB"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_aut_24",
    "section": "automation",
    "prompt": "How can an integration architect prevent Outbound Messages from flooding downstream systems when thousands of records are updated simultaneously?",
    "options": [
      {
        "id": "a",
        "label": "Salesforce drops all outbound messages that exceed 5 per second"
      },
      {
        "id": "b",
        "label": "Outbound messages automatically batch notifications for up to 100 records into a single SOAP delivery envelope"
      },
      {
        "id": "c",
        "label": "Outbound messages require an active client-side web browser session"
      },
      {
        "id": "d",
        "label": "Outbound messages convert all payloads into single-byte UDP datagrams"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_aut_25",
    "section": "automation",
    "prompt": "Which standard Salesforce REST API composite resource allows executing up to 25 subrequests where dependent subrequests can reference output fields from prior subrequests?",
    "options": [
      {
        "id": "a",
        "label": "/services/data/vXX.X/composite/batch"
      },
      {
        "id": "b",
        "label": "/services/data/vXX.X/composite/tree"
      },
      {
        "id": "c",
        "label": "/services/data/vXX.X/composite/sobjects"
      },
      {
        "id": "d",
        "label": "/services/data/vXX.X/composite"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_aut_26",
    "section": "automation",
    "prompt": "What is the role of Continuation objects in Apex when building Lightning Web Components that make long-running HTTP callouts to external APIs?",
    "options": [
      {
        "id": "a",
        "label": "They automatically encrypt external payloads with AES-256 GCM"
      },
      {
        "id": "b",
        "label": "They convert REST responses into binary Kafka topics"
      },
      {
        "id": "c",
        "label": "They preserve user interface responsiveness and avoid consuming synchronous request threads while waiting for external responses up to 120s"
      },
      {
        "id": "d",
        "label": "They bypass all Salesforce profile permissions for the caller"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_aut_27",
    "section": "automation",
    "prompt": "When configuring an external integration that ingests data into Salesforce custom Big Objects, which API is recommended for high-scale asynchronous ingestion?",
    "options": [
      {
        "id": "a",
        "label": "Synchronous Single-Record REST GET API"
      },
      {
        "id": "b",
        "label": "Bulk API 2.0 or Async Apex Database.insertImmediate"
      },
      {
        "id": "c",
        "label": "Tooling API SOQL endpoint"
      },
      {
        "id": "d",
        "label": "Metadata API deploy operation"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_aut_28",
    "section": "automation",
    "prompt": "Which Salesforce feature allows subscribing to standard platform events for user logins, API calls, and report exports to power real-time security monitoring integrations?",
    "options": [
      {
        "id": "a",
        "label": "Real-Time Event Monitoring (EventLogFile / LoginEventStream)"
      },
      {
        "id": "b",
        "label": "Schema Builder Webhooks"
      },
      {
        "id": "c",
        "label": "Omni-Channel Live Routing"
      },
      {
        "id": "d",
        "label": "Einstein Discovery Prediction Sync"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_aut_29",
    "section": "automation",
    "prompt": "In Salesforce CDC, how are fields with sensitive data (such as encrypted text fields) represented in the event stream?",
    "options": [
      {
        "id": "a",
        "label": "Encrypted fields can be filtered or included in CDC event streams and remain encrypted according to Salesforce Shield Platform Encryption settings"
      },
      {
        "id": "b",
        "label": "Encrypted fields are permanently converted to plaintext in the event message"
      },
      {
        "id": "c",
        "label": "CDC fails with an unrecoverable exception if any encrypted fields exist on the object"
      },
      {
        "id": "d",
        "label": "CDC replaces encrypted fields with static \"REDACTED\" strings"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_aut_30",
    "section": "automation",
    "prompt": "What is the function of the \"Composite SObject Collections\" endpoint (`/services/data/vXX.X/composite/sobjects`) in Salesforce REST API?",
    "options": [
      {
        "id": "a",
        "label": "It generates auto-provisioned relational schemas in external SQL databases"
      },
      {
        "id": "b",
        "label": "It allows creating, updating, or deleting up to 200 sObjects of uniform or mixed types in a single HTTP request"
      },
      {
        "id": "c",
        "label": "It exports the entire metadata container of an org to Git"
      },
      {
        "id": "d",
        "label": "It converts SOQL queries to GraphQL queries dynamically"
      }
    ],
    "correctOptionId": "b"
  }
];

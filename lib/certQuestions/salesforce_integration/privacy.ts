import { CertQuestion } from '../types';

export const SALESFORCE_INTEGRATION_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "sfdc_priv_01",
    "section": "privacy",
    "prompt": "Which OAuth 2.0 flow is recommended by Salesforce for secure, automated server-to-server integrations without interactive user login?",
    "options": [
      {
        "id": "a",
        "label": "OAuth 2.0 Web Server Flow"
      },
      {
        "id": "b",
        "label": "OAuth 2.0 JWT Bearer Flow"
      },
      {
        "id": "c",
        "label": "OAuth 2.0 User-Agent Flow"
      },
      {
        "id": "d",
        "label": "OAuth 2.0 Device Authorization Flow"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_priv_02",
    "section": "privacy",
    "prompt": "What is the primary security advantage of using Salesforce Named Credentials over hardcoded API endpoint URLs and credentials in Apex code?",
    "options": [
      {
        "id": "a",
        "label": "Named Credentials bypass all firewall rules automatically"
      },
      {
        "id": "b",
        "label": "Named Credentials convert all HTTP GET requests to WebSocket connections"
      },
      {
        "id": "c",
        "label": "Named Credentials securely store authentication secrets in Salesforce metadata and manage token lifecycles, keeping secrets out of code and logs"
      },
      {
        "id": "d",
        "label": "Named Credentials remove all Salesforce governor limits on callouts"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_priv_03",
    "section": "privacy",
    "prompt": "When configuring Mutual TLS (mTLS) for an inbound integration into Salesforce REST/SOAP APIs, which port must external clients connect to?",
    "options": [
      {
        "id": "a",
        "label": "Port 8443"
      },
      {
        "id": "b",
        "label": "Port 443"
      },
      {
        "id": "c",
        "label": "Port 8080"
      },
      {
        "id": "d",
        "label": "Port 9092"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_priv_04",
    "section": "privacy",
    "prompt": "Which permission should always be assigned to dedicated integration user accounts in Salesforce to enforce least privilege and prevent browser UI logins?",
    "options": [
      {
        "id": "a",
        "label": "System Administrator profile with Modify All Data"
      },
      {
        "id": "b",
        "label": "Delegated Administrator with Manage Users enabled"
      },
      {
        "id": "c",
        "label": "Standard User profile with Password Never Expires"
      },
      {
        "id": "d",
        "label": "Api Only User permission and Salesforce Integration User license"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_priv_05",
    "section": "privacy",
    "prompt": "In the OAuth 2.0 JWT Bearer Flow for Salesforce, what value must be specified in the \"aud\" (audience) claim for a production or Developer Edition org?",
    "options": [
      {
        "id": "a",
        "label": "https://test.salesforce.com"
      },
      {
        "id": "b",
        "label": "https://auth.salesforce.com/token"
      },
      {
        "id": "c",
        "label": "https://login.salesforce.com"
      },
      {
        "id": "d",
        "label": "https://identity.salesforce.com/oauth"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_priv_06",
    "section": "privacy",
    "prompt": "How does Salesforce Shield Platform Encryption differ from standard Classic Encryption for database fields?",
    "options": [
      {
        "id": "a",
        "label": "Shield Platform Encryption allows encrypting a wide range of standard/custom fields and files at rest using customer-controlled Bring Your Own Key (BYOK) keys, while preserving search, workflow, and validation rules"
      },
      {
        "id": "b",
        "label": "Shield Platform Encryption only encrypts 16-digit credit card numbers"
      },
      {
        "id": "c",
        "label": "Classic encryption operates at hardware level while Shield is software only"
      },
      {
        "id": "d",
        "label": "Classic encryption uses asymmetric RSA keys only"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_priv_07",
    "section": "privacy",
    "prompt": "When configuring a Connected App in Salesforce, what setting ensures that users cannot self-authorize the app and only designated profiles/permission sets can obtain OAuth tokens?",
    "options": [
      {
        "id": "a",
        "label": "Set \"OAuth Scope\" to \"Full access (full)\""
      },
      {
        "id": "b",
        "label": "Enable \"Require Proof Key for Code Exchange (PKCE)\""
      },
      {
        "id": "c",
        "label": "Set \"Token Introspection\" to Disabled"
      },
      {
        "id": "d",
        "label": "Set \"Permitted Users\" to \"Admin approved users are pre-authorized\""
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_priv_08",
    "section": "privacy",
    "prompt": "Which OAuth scope is required when an external application needs to subscribe to Salesforce Streaming API and Platform Event channels?",
    "options": [
      {
        "id": "a",
        "label": "web"
      },
      {
        "id": "b",
        "label": "api"
      },
      {
        "id": "c",
        "label": "id"
      },
      {
        "id": "d",
        "label": "offline_access"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_priv_09",
    "section": "privacy",
    "prompt": "What is the purpose of Salesforce External Client Apps (ECA) in modern Salesforce Application Lifecycle Management (ALM)?",
    "options": [
      {
        "id": "a",
        "label": "They replace all REST APIs with GraphQL schemas exclusively"
      },
      {
        "id": "b",
        "label": "They allow running Salesforce orgs on private on-premise hardware"
      },
      {
        "id": "c",
        "label": "They eliminate the need for X.509 digital certificates"
      },
      {
        "id": "d",
        "label": "They decouple connected app security metadata from packaging, enabling modular, secure distribution across multi-org architectures with OAuth 2.0 policies"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_priv_10",
    "section": "privacy",
    "prompt": "How can an architect prevent Cross-Site Scripting (XSS) and SOQL Injection vulnerabilities in dynamic Apex REST web services?",
    "options": [
      {
        "id": "a",
        "label": "Convert all dynamic SOQL queries to raw URL strings in GET parameters"
      },
      {
        "id": "b",
        "label": "Use bind variables or `String.escapeSingleQuotes()` in dynamic SOQL, and sanitize inputs using the `ESAPI` or `Security` class methods"
      },
      {
        "id": "c",
        "label": "Bypass all user profile security checks by using the `without sharing` keyword"
      },
      {
        "id": "d",
        "label": "Disable SSL/TLS verification in Named Credentials"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_priv_11",
    "section": "privacy",
    "prompt": "Which Salesforce feature enables architects to log, monitor, and detect anomalous API credential behavior and data exfiltration in near real time?",
    "options": [
      {
        "id": "a",
        "label": "Outbound Messaging Queue Monitor"
      },
      {
        "id": "b",
        "label": "Apex Execution Governor Profiler"
      },
      {
        "id": "c",
        "label": "Event Monitoring and Threat Detection (part of Salesforce Shield)"
      },
      {
        "id": "d",
        "label": "Process Builder Debugger"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_priv_12",
    "section": "privacy",
    "prompt": "What is the role of Proof Key for Code Exchange (PKCE) in Salesforce OAuth 2.0 Web Server Flow integrations?",
    "options": [
      {
        "id": "a",
        "label": "It prevents authorization code interception attacks in public or mobile clients that cannot securely store client secrets"
      },
      {
        "id": "b",
        "label": "It generates hardware biometric signatures for API requests"
      },
      {
        "id": "c",
        "label": "It forces data to be stored on encrypted NVMe drives only"
      },
      {
        "id": "d",
        "label": "It rotates tenant encryption root keys every 24 hours"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_priv_13",
    "section": "privacy",
    "prompt": "When configuring IP range restrictions for integration security, what is the best practice for restricting API access in Salesforce?",
    "options": [
      {
        "id": "a",
        "label": "Define Login IP Ranges at the Integration User Profile or Permission Set level and enforce \"Enforce login IP ranges on every request\""
      },
      {
        "id": "b",
        "label": "Rely only on the client application firewall"
      },
      {
        "id": "c",
        "label": "Open all IP ranges (0.0.0.0 to 255.255.255.255) to allow dynamic cloud runners"
      },
      {
        "id": "d",
        "label": "Configure IP restrictions inside individual Apex trigger source code"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_priv_14",
    "section": "privacy",
    "prompt": "In Salesforce Apex REST web services, how should Field-Level Security (FLS) and Object Permissions (CRUD) be enforced to prevent unauthorized data access?",
    "options": [
      {
        "id": "a",
        "label": "Apex REST services always automatically enforce CRUD and FLS by default"
      },
      {
        "id": "b",
        "label": "Mark all Apex REST classes as `without sharing`"
      },
      {
        "id": "c",
        "label": "Disable the integration user profile FLS permissions"
      },
      {
        "id": "d",
        "label": "Use `WITH USER_MODE` or `Security.stripInaccessible()` in Apex"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_priv_15",
    "section": "privacy",
    "prompt": "What does the \"offline_access\" OAuth scope provide when an external application connects to Salesforce?",
    "options": [
      {
        "id": "a",
        "label": "Direct access to local cached SQLite databases on the client machine"
      },
      {
        "id": "b",
        "label": "A Refresh Token that can be used to obtain new access tokens without requiring the user to re-authenticate"
      },
      {
        "id": "c",
        "label": "The ability to run batch jobs when Salesforce data centers undergo maintenance"
      },
      {
        "id": "d",
        "label": "Bypass of all multi-factor authentication (MFA) requirements"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_priv_16",
    "section": "privacy",
    "prompt": "Which header should an external client send to authenticate against Salesforce REST API endpoints once an access token is acquired?",
    "options": [
      {
        "id": "a",
        "label": "X-Salesforce-Token: <access_token>"
      },
      {
        "id": "b",
        "label": "Proxy-Authorization: Basic <access_token>"
      },
      {
        "id": "c",
        "label": "Authorization: Bearer <access_token>"
      },
      {
        "id": "d",
        "label": "Salesforce-Session-Key: <access_token>"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_priv_17",
    "section": "privacy",
    "prompt": "When configuring an Outbound Message in Salesforce, how can the receiving server verify that the message originated from Salesforce?",
    "options": [
      {
        "id": "a",
        "label": "Check if the source IP matches any AWS public range"
      },
      {
        "id": "b",
        "label": "Verify the client certificate presented by Salesforce and validate against Salesforce public CA certificates"
      },
      {
        "id": "c",
        "label": "Parse the secret HTML comment injected in the XML footer"
      },
      {
        "id": "d",
        "label": "Decrypt the message using an RSA-512 private key"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_priv_18",
    "section": "privacy",
    "prompt": "What is the role of Salesforce Transaction Security Policies in integration governance?",
    "options": [
      {
        "id": "a",
        "label": "They allow security teams to intercept real-time events (e.g., API queries, login events) and trigger immediate block or step-up authentication actions"
      },
      {
        "id": "b",
        "label": "They automatically roll back financial database transactions across SAP"
      },
      {
        "id": "c",
        "label": "They convert all REST APIs into gRPC protocols automatically"
      },
      {
        "id": "d",
        "label": "They generate synthetic test data in sandbox environments"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_priv_19",
    "section": "privacy",
    "prompt": "When setting up Salesforce Bring Your Own Key (BYOK) for Shield Platform Encryption, which key material is generated outside Salesforce and uploaded by the customer?",
    "options": [
      {
        "id": "a",
        "label": "Master Secret Key plain text"
      },
      {
        "id": "b",
        "label": "PostgreSQL Root Password"
      },
      {
        "id": "c",
        "label": "OAuth Client Secret string"
      },
      {
        "id": "d",
        "label": "Tenant Secret (wrapped in Salesforce BYOK Certificate public key)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_priv_20",
    "section": "privacy",
    "prompt": "In Salesforce External Services, how are credentials and authentication managed when communicating with third-party APIs?",
    "options": [
      {
        "id": "a",
        "label": "Hardcoded in Flow custom formula fields"
      },
      {
        "id": "b",
        "label": "Stored in browser localStorage cookies"
      },
      {
        "id": "c",
        "label": "Via Named Credentials and External Credentials"
      },
      {
        "id": "d",
        "label": "Configured in the user profile layout properties"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_priv_21",
    "section": "privacy",
    "prompt": "What is the security risk of using the `without sharing` keyword on an Apex class that exposes a public REST web service?",
    "options": [
      {
        "id": "a",
        "label": "The service is immediately flagged and blocked by Salesforce security scanners"
      },
      {
        "id": "b",
        "label": "All network traffic to the endpoint is transmitted over unencrypted HTTP"
      },
      {
        "id": "c",
        "label": "The service executes without evaluating record-level sharing rules, potentially exposing data that the calling user should not see"
      },
      {
        "id": "d",
        "label": "Database triggers are permanently disabled for all users"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_priv_22",
    "section": "privacy",
    "prompt": "Which Salesforce feature enables cross-domain identity management and SCIM (System for Cross-domain Identity Management) user provisioning from an enterprise IdP (e.g., Okta, Azure AD)?",
    "options": [
      {
        "id": "a",
        "label": "Data Loader CLI"
      },
      {
        "id": "b",
        "label": "Tooling API Metadata Deployer"
      },
      {
        "id": "c",
        "label": "Apex Batch Provisioner"
      },
      {
        "id": "d",
        "label": "Salesforce SCIM 2.0 API Endpoints"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_priv_23",
    "section": "privacy",
    "prompt": "When configuring SAML 2.0 Single Sign-On (SSO) for Salesforce inbound authentication, what is the role of the Identity Provider (IdP)?",
    "options": [
      {
        "id": "a",
        "label": "The IdP authenticates the user and issues a cryptographically signed SAML assertion to Salesforce (Service Provider)"
      },
      {
        "id": "b",
        "label": "The IdP acts as the database replica for Salesforce objects"
      },
      {
        "id": "c",
        "label": "The IdP manages the Salesforce governor limits per API transaction"
      },
      {
        "id": "d",
        "label": "The IdP replaces Salesforce Named Credentials"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_priv_24",
    "section": "privacy",
    "prompt": "How does Salesforce enforce Transport Layer Security (TLS) across all inbound and outbound integration calls?",
    "options": [
      {
        "id": "a",
        "label": "Salesforce allows unencrypted HTTP on development sandboxes"
      },
      {
        "id": "b",
        "label": "Salesforce strictly requires TLS 1.2 or TLS 1.3; older protocols (TLS 1.0/1.1 and SSL 3.0) are completely disabled"
      },
      {
        "id": "c",
        "label": "Salesforce uses proprietary binary tunneling without TLS"
      },
      {
        "id": "d",
        "label": "Salesforce allows clients to negotiate down to SSL 2.0 for backwards compatibility"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_priv_25",
    "section": "privacy",
    "prompt": "What is the purpose of Salesforce \"Cross-Origin Resource Sharing\" (CORS) whitelist settings?",
    "options": [
      {
        "id": "a",
        "label": "To bypass OAuth 2.0 authentication for selected web domains"
      },
      {
        "id": "b",
        "label": "To disable Cross-Site Scripting filtering in Visualforce pages"
      },
      {
        "id": "c",
        "label": "To allow automated SQL queries directly into the multi-tenant database"
      },
      {
        "id": "d",
        "label": "To allow client-side web applications running on specific external domains to make REST API requests to Salesforce via browser XMLHttpRequest / Fetch"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "sfdc_priv_26",
    "section": "privacy",
    "prompt": "In Salesforce OAuth 2.0 flows, what is the purpose of the Token Introspection endpoint (`/services/oauth2/introspect`)?",
    "options": [
      {
        "id": "a",
        "label": "It generates dynamic Java classes from WSDL documents"
      },
      {
        "id": "b",
        "label": "It refreshes expired client private key certificates"
      },
      {
        "id": "c",
        "label": "It allows resource servers to query the validity, active status, and metadata (scopes, user ID, expiration) of an OAuth token"
      },
      {
        "id": "d",
        "label": "It calculates data storage utilization across custom objects"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "sfdc_priv_27",
    "section": "privacy",
    "prompt": "When configuring Salesforce External Credentials with \"Per-User Principal\" authentication, what is achieved?",
    "options": [
      {
        "id": "a",
        "label": "All API requests share a single static API key stored in custom labels"
      },
      {
        "id": "b",
        "label": "Each Salesforce user authenticates against the external API using their own personal third-party credentials rather than a shared service account"
      },
      {
        "id": "c",
        "label": "The external system bypasses all OAuth authentication checks"
      },
      {
        "id": "d",
        "label": "The integration is limited to 1 call per day per user"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "sfdc_priv_28",
    "section": "privacy",
    "prompt": "Which Salesforce audit feature allows administrators to view a chronological log of administrative and setup modifications (including certificate and Connected App changes)?",
    "options": [
      {
        "id": "a",
        "label": "Setup Audit Trail"
      },
      {
        "id": "b",
        "label": "Apex Debug Log"
      },
      {
        "id": "c",
        "label": "Bulk API 2.0 Job Monitor"
      },
      {
        "id": "d",
        "label": "Schema Builder Log"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_priv_29",
    "section": "privacy",
    "prompt": "How can an integration architect prevent sensitive personal data (PII) from being printed to Apex Debug Logs during integration troubleshooting?",
    "options": [
      {
        "id": "a",
        "label": "Configure Apex Log Filters, avoid logging raw payload strings containing PII, and use custom log masking frameworks"
      },
      {
        "id": "b",
        "label": "Debug logs are automatically encrypted and cannot be viewed by developers"
      },
      {
        "id": "c",
        "label": "Salesforce blocks all `System.debug()` statements in production orgs"
      },
      {
        "id": "d",
        "label": "Store all PII in custom URL parameters"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "sfdc_priv_30",
    "section": "privacy",
    "prompt": "What happens when an OAuth 2.0 Refresh Token is revoked by an administrator in Salesforce Setup?",
    "options": [
      {
        "id": "a",
        "label": "The entire Salesforce org is locked for maintenance"
      },
      {
        "id": "b",
        "label": "The connected application can no longer use that refresh token to obtain new access tokens, terminating ongoing API sessions upon access token expiration"
      },
      {
        "id": "c",
        "label": "The client application is deleted from the enterprise network"
      },
      {
        "id": "d",
        "label": "All historical event logs for that user are purged immediately"
      }
    ],
    "correctOptionId": "b"
  }
];

import { Question } from '../../certTypes';

export const salesforcePrivacyQuestions: Question[] = [
  {
    id: 'sfdc_priv_01',
    domain: 'privacy',
    text: 'Which OAuth 2.0 flow is recommended by Salesforce for secure, automated server-to-server integrations without interactive user login?',
    options: {
      a: 'OAuth 2.0 JWT Bearer Flow',
      b: 'OAuth 2.0 Web Server Flow',
      c: 'OAuth 2.0 User-Agent Flow',
      d: 'OAuth 2.0 Device Authorization Flow'
    },
    correctAnswer: 'a',
    explanation: 'The OAuth 2.0 JWT Bearer flow uses an X.509 private key certificate to sign an assertion, granting access tokens without user interaction.'
  },
  {
    id: 'sfdc_priv_02',
    domain: 'privacy',
    text: 'What is the primary security advantage of using Salesforce Named Credentials over hardcoded API endpoint URLs and credentials in Apex code?',
    options: {
      a: 'Named Credentials securely store authentication secrets in Salesforce metadata and manage token lifecycles, keeping secrets out of code and logs',
      b: 'Named Credentials bypass all firewall rules automatically',
      c: 'Named Credentials convert all HTTP GET requests to WebSocket connections',
      d: 'Named Credentials remove all Salesforce governor limits on callouts'
    },
    correctAnswer: 'a',
    explanation: 'Named Credentials encapsulate authentication headers, OAuth tokens, or client certificates within Salesforce setup, ensuring secrets are never exposed in Apex code, logs, or source repositories.'
  },
  {
    id: 'sfdc_priv_03',
    domain: 'privacy',
    text: 'When configuring Mutual TLS (mTLS) for an inbound integration into Salesforce REST/SOAP APIs, which port must external clients connect to?',
    options: {
      a: 'Port 8443',
      b: 'Port 443',
      c: 'Port 8080',
      d: 'Port 9092'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce exposes mutual TLS (client certificate authentication) endpoints on standard domain addresses using port 8443 (e.g., https://mycompany.my.salesforce.com:8443).'
  },
  {
    id: 'sfdc_priv_04',
    domain: 'privacy',
    text: 'Which permission should always be assigned to dedicated integration user accounts in Salesforce to enforce least privilege and prevent browser UI logins?',
    options: {
      a: 'Api Only User permission and Salesforce Integration User license',
      b: 'System Administrator profile with Modify All Data',
      c: 'Delegated Administrator with Manage Users enabled',
      d: 'Standard User profile with Password Never Expires'
    },
    correctAnswer: 'a',
    explanation: 'The "API Only User" permission blocks interactive UI logins, forcing all access through API channels, and using the Salesforce Integration license limits unnecessary enterprise permissions.'
  },
  {
    id: 'sfdc_priv_05',
    domain: 'privacy',
    text: 'In the OAuth 2.0 JWT Bearer Flow for Salesforce, what value must be specified in the "aud" (audience) claim for a production or Developer Edition org?',
    options: {
      a: 'https://login.salesforce.com',
      b: 'https://test.salesforce.com',
      c: 'https://auth.salesforce.com/token',
      d: 'https://identity.salesforce.com/oauth'
    },
    correctAnswer: 'a',
    explanation: 'For production and developer orgs, the audience (`aud`) claim must be `https://login.salesforce.com`. For sandboxes, it must be `https://test.salesforce.com`.'
  },
  {
    id: 'sfdc_priv_06',
    domain: 'privacy',
    text: 'How does Salesforce Shield Platform Encryption differ from standard Classic Encryption for database fields?',
    options: {
      a: 'Shield Platform Encryption allows encrypting a wide range of standard/custom fields and files at rest using customer-controlled Bring Your Own Key (BYOK) keys, while preserving search, workflow, and validation rules',
      b: 'Shield Platform Encryption only encrypts 16-digit credit card numbers',
      c: 'Classic encryption operates at hardware level while Shield is software only',
      d: 'Classic encryption uses asymmetric RSA keys only'
    },
    correctAnswer: 'a',
    explanation: 'Shield Platform Encryption protects sensitive enterprise data at rest with tenant-specific keys, BYOK support, and integration with business logic and searches (deterministic and probabilistic encryption).'
  },
  {
    id: 'sfdc_priv_07',
    domain: 'privacy',
    text: 'When configuring a Connected App in Salesforce, what setting ensures that users cannot self-authorize the app and only designated profiles/permission sets can obtain OAuth tokens?',
    options: {
      a: 'Set "Permitted Users" to "Admin approved users are pre-authorized"',
      b: 'Set "OAuth Scope" to "Full access (full)"',
      c: 'Enable "Require Proof Key for Code Exchange (PKCE)"',
      d: 'Set "Token Introspection" to Disabled'
    },
    correctAnswer: 'a',
    explanation: 'Setting "Permitted Users" to "Admin approved users are pre-authorized" prevents unauthorized users from approving scopes, restricting access strictly to pre-assigned profiles and permission sets.'
  },
  {
    id: 'sfdc_priv_08',
    domain: 'privacy',
    text: 'Which OAuth scope is required when an external application needs to subscribe to Salesforce Streaming API and Platform Event channels?',
    options: {
      a: 'api',
      b: 'web',
      c: 'id',
      d: 'offline_access'
    },
    correctAnswer: 'a',
    explanation: 'The `api` scope (or `full`) is required for accessing Salesforce APIs, including Streaming API, Pub/Sub API, and REST/SOAP services.'
  },
  {
    id: 'sfdc_priv_09',
    domain: 'privacy',
    text: 'What is the purpose of Salesforce External Client Apps (ECA) in modern Salesforce Application Lifecycle Management (ALM)?',
    options: {
      a: 'They decouple connected app security metadata from packaging, enabling modular, secure distribution across multi-org architectures with OAuth 2.0 policies',
      b: 'They replace all REST APIs with GraphQL schemas exclusively',
      c: 'They allow running Salesforce orgs on private on-premise hardware',
      d: 'They eliminate the need for X.509 digital certificates'
    },
    correctAnswer: 'a',
    explanation: 'External Client Apps (ECA) provide a modern metadata-driven architecture for connected apps, separating developer metadata from subscriber org policies for secure CI/CD distribution.'
  },
  {
    id: 'sfdc_priv_10',
    domain: 'privacy',
    text: 'How can an architect prevent Cross-Site Scripting (XSS) and SOQL Injection vulnerabilities in dynamic Apex REST web services?',
    options: {
      a: 'Use bind variables or `String.escapeSingleQuotes()` in dynamic SOQL, and sanitize inputs using the `ESAPI` or `Security` class methods',
      b: 'Convert all dynamic SOQL queries to raw URL strings in GET parameters',
      c: 'Bypass all user profile security checks by using the `without sharing` keyword',
      d: 'Disable SSL/TLS verification in Named Credentials'
    },
    correctAnswer: 'a',
    explanation: 'Parameterized bind variables and escaping single quotes prevent SOQL injection, while strict input validation protects against malicious scripts.'
  },
  {
    id: 'sfdc_priv_11',
    domain: 'privacy',
    text: 'Which Salesforce feature enables architects to log, monitor, and detect anomalous API credential behavior and data exfiltration in near real time?',
    options: {
      a: 'Event Monitoring and Threat Detection (part of Salesforce Shield)',
      b: 'Outbound Messaging Queue Monitor',
      c: 'Apex Execution Governor Profiler',
      d: 'Process Builder Debugger'
    },
    correctAnswer: 'a',
    explanation: 'Event Monitoring and Threat Detection leverages machine learning to identify credential stuffing, anomalous report exports, and API anomalies in real time.'
  },
  {
    id: 'sfdc_priv_12',
    domain: 'privacy',
    text: 'What is the role of Proof Key for Code Exchange (PKCE) in Salesforce OAuth 2.0 Web Server Flow integrations?',
    options: {
      a: 'It prevents authorization code interception attacks in public or mobile clients that cannot securely store client secrets',
      b: 'It generates hardware biometric signatures for API requests',
      c: 'It forces data to be stored on encrypted NVMe drives only',
      d: 'It rotates tenant encryption root keys every 24 hours'
    },
    correctAnswer: 'a',
    explanation: 'PKCE adds a dynamically created code verifier and code challenge, ensuring that intercepted authorization codes cannot be exchanged for access tokens by malicious actors.'
  },
  {
    id: 'sfdc_priv_13',
    domain: 'privacy',
    text: 'When configuring IP range restrictions for integration security, what is the best practice for restricting API access in Salesforce?',
    options: {
      a: 'Define Login IP Ranges at the Integration User Profile or Permission Set level and enforce "Enforce login IP ranges on every request"',
      b: 'Rely only on the client application firewall',
      c: 'Open all IP ranges (0.0.0.0 to 255.255.255.255) to allow dynamic cloud runners',
      d: 'Configure IP restrictions inside individual Apex trigger source code'
    },
    correctAnswer: 'a',
    explanation: 'Setting Login IP Ranges at the Profile or Permission Set level and enforcing it across every request ensures unauthorized IP addresses cannot authenticate or make API calls.'
  },
  {
    id: 'sfdc_priv_14',
    domain: 'privacy',
    text: 'In Salesforce Apex REST web services, how should Field-Level Security (FLS) and Object Permissions (CRUD) be enforced to prevent unauthorized data access?',
    options: {
      a: 'Use `WITH USER_MODE` or `Security.stripInaccessible()` in Apex',
      b: 'Apex REST services always automatically enforce CRUD and FLS by default',
      c: 'Mark all Apex REST classes as `without sharing`',
      d: 'Disable the integration user profile FLS permissions'
    },
    correctAnswer: 'a',
    explanation: 'Apex code runs in system mode by default. Using `WITH USER_MODE`, `Security.stripInaccessible()`, or `Schema.sObjectType` checks ensures FLS and CRUD permissions are strictly respected.'
  },
  {
    id: 'sfdc_priv_15',
    domain: 'privacy',
    text: 'What does the "offline_access" OAuth scope provide when an external application connects to Salesforce?',
    options: {
      a: 'A Refresh Token that can be used to obtain new access tokens without requiring the user to re-authenticate',
      b: 'Direct access to local cached SQLite databases on the client machine',
      c: 'The ability to run batch jobs when Salesforce data centers undergo maintenance',
      d: 'Bypass of all multi-factor authentication (MFA) requirements'
    },
    correctAnswer: 'a',
    explanation: 'The `offline_access` scope requests a refresh token (`refresh_token`), allowing the client app to maintain ongoing API access as session access tokens expire.'
  },
  {
    id: 'sfdc_priv_16',
    domain: 'privacy',
    text: 'Which header should an external client send to authenticate against Salesforce REST API endpoints once an access token is acquired?',
    options: {
      a: 'Authorization: Bearer <access_token>',
      b: 'X-Salesforce-Token: <access_token>',
      c: 'Proxy-Authorization: Basic <access_token>',
      d: 'Salesforce-Session-Key: <access_token>'
    },
    correctAnswer: 'a',
    explanation: 'Standard OAuth 2.0 Bearer token authentication in HTTP requests uses `Authorization: Bearer <access_token>`.'
  },
  {
    id: 'sfdc_priv_17',
    domain: 'privacy',
    text: 'When configuring an Outbound Message in Salesforce, how can the receiving server verify that the message originated from Salesforce?',
    options: {
      a: 'Verify the client certificate presented by Salesforce and validate against Salesforce public CA certificates',
      b: 'Check if the source IP matches any AWS public range',
      c: 'Parse the secret HTML comment injected in the XML footer',
      d: 'Decrypt the message using an RSA-512 private key'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce Outbound Messaging sends client certificates signed by Salesforce CAs; external receiving endpoints validate these certificates to ensure authenticity.'
  },
  {
    id: 'sfdc_priv_18',
    domain: 'privacy',
    text: 'What is the role of Salesforce Transaction Security Policies in integration governance?',
    options: {
      a: 'They allow security teams to intercept real-time events (e.g., API queries, login events) and trigger immediate block or step-up authentication actions',
      b: 'They automatically roll back financial database transactions across SAP',
      c: 'They convert all REST APIs into gRPC protocols automatically',
      d: 'They generate synthetic test data in sandbox environments'
    },
    correctAnswer: 'a',
    explanation: 'Transaction Security Policies evaluate real-time event streams (such as `ApiEvent`) and can execute custom Apex or condition builders to block suspicious requests or send notifications.'
  },
  {
    id: 'sfdc_priv_19',
    domain: 'privacy',
    text: 'When setting up Salesforce Bring Your Own Key (BYOK) for Shield Platform Encryption, which key material is generated outside Salesforce and uploaded by the customer?',
    options: {
      a: 'Tenant Secret (wrapped in Salesforce BYOK Certificate public key)',
      b: 'Master Secret Key plain text',
      c: 'PostgreSQL Root Password',
      d: 'OAuth Client Secret string'
    },
    correctAnswer: 'a',
    explanation: 'With BYOK, customers generate tenant secrets in their on-premises HSM or cloud KMS, wrap them using the Salesforce-provided certificate public key, and upload them securely.'
  },
  {
    id: 'sfdc_priv_20',
    domain: 'privacy',
    text: 'In Salesforce External Services, how are credentials and authentication managed when communicating with third-party APIs?',
    options: {
      a: 'Via Named Credentials and External Credentials',
      b: 'Hardcoded in Flow custom formula fields',
      c: 'Stored in browser localStorage cookies',
      d: 'Configured in the user profile layout properties'
    },
    correctAnswer: 'a',
    explanation: 'External Services relies on Named Credentials and External Credentials to securely store endpoint URLs, authentication protocols, and credentials.'
  },
  {
    id: 'sfdc_priv_21',
    domain: 'privacy',
    text: 'What is the security risk of using the `without sharing` keyword on an Apex class that exposes a public REST web service?',
    options: {
      a: 'The service executes without evaluating record-level sharing rules, potentially exposing data that the calling user should not see',
      b: 'The service is immediately flagged and blocked by Salesforce security scanners',
      c: 'All network traffic to the endpoint is transmitted over unencrypted HTTP',
      d: 'Database triggers are permanently disabled for all users'
    },
    correctAnswer: 'a',
    explanation: '`without sharing` bypasses record-level sharing rules (OWDs, role hierarchy, sharing rules), allowing the Apex code to read/write records the context user normally lacks access to.'
  },
  {
    id: 'sfdc_priv_22',
    domain: 'privacy',
    text: 'Which Salesforce feature enables cross-domain identity management and SCIM (System for Cross-domain Identity Management) user provisioning from an enterprise IdP (e.g., Okta, Azure AD)?',
    options: {
      a: 'Salesforce SCIM 2.0 API Endpoints',
      b: 'Data Loader CLI',
      c: 'Tooling API Metadata Deployer',
      d: 'Apex Batch Provisioner'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce provides standard SCIM 2.0 REST endpoints (`/services/scim/v2/Users`) to allow automated user creation, updates, and deprovisioning from identity providers.'
  },
  {
    id: 'sfdc_priv_23',
    domain: 'privacy',
    text: 'When configuring SAML 2.0 Single Sign-On (SSO) for Salesforce inbound authentication, what is the role of the Identity Provider (IdP)?',
    options: {
      a: 'The IdP authenticates the user and issues a cryptographically signed SAML assertion to Salesforce (Service Provider)',
      b: 'The IdP acts as the database replica for Salesforce objects',
      c: 'The IdP manages the Salesforce governor limits per API transaction',
      d: 'The IdP replaces Salesforce Named Credentials'
    },
    correctAnswer: 'a',
    explanation: 'In SAML SSO, the Identity Provider (IdP) authenticates the user and generates a signed assertion validating the user identity to Salesforce (the Service Provider).'
  },
  {
    id: 'sfdc_priv_24',
    domain: 'privacy',
    text: 'How does Salesforce enforce Transport Layer Security (TLS) across all inbound and outbound integration calls?',
    options: {
      a: 'Salesforce strictly requires TLS 1.2 or TLS 1.3; older protocols (TLS 1.0/1.1 and SSL 3.0) are completely disabled',
      b: 'Salesforce allows unencrypted HTTP on development sandboxes',
      c: 'Salesforce uses proprietary binary tunneling without TLS',
      d: 'Salesforce allows clients to negotiate down to SSL 2.0 for backwards compatibility'
    },
    correctAnswer: 'a',
    explanation: 'Salesforce mandates modern TLS (TLS 1.2 and TLS 1.3) across all public APIs and outbound callout endpoints.'
  },
  {
    id: 'sfdc_priv_25',
    domain: 'privacy',
    text: 'What is the purpose of Salesforce "Cross-Origin Resource Sharing" (CORS) whitelist settings?',
    options: {
      a: 'To allow client-side web applications running on specific external domains to make REST API requests to Salesforce via browser XMLHttpRequest / Fetch',
      b: 'To bypass OAuth 2.0 authentication for selected web domains',
      c: 'To disable Cross-Site Scripting filtering in Visualforce pages',
      d: 'To allow automated SQL queries directly into the multi-tenant database'
    },
    correctAnswer: 'a',
    explanation: 'CORS settings define the list of allowed external web origins permitted to make cross-origin JavaScript API requests directly to Salesforce endpoints.'
  },
  {
    id: 'sfdc_priv_26',
    domain: 'privacy',
    text: 'In Salesforce OAuth 2.0 flows, what is the purpose of the Token Introspection endpoint (`/services/oauth2/introspect`)?',
    options: {
      a: 'It allows resource servers to query the validity, active status, and metadata (scopes, user ID, expiration) of an OAuth token',
      b: 'It generates dynamic Java classes from WSDL documents',
      c: 'It refreshes expired client private key certificates',
      d: 'It calculates data storage utilization across custom objects'
    },
    correctAnswer: 'a',
    explanation: 'RFC 7662 OAuth 2.0 Token Introspection allows resource servers or gateways to verify the authenticity and metadata of an access token presented by a client.'
  },
  {
    id: 'sfdc_priv_27',
    domain: 'privacy',
    text: 'When configuring Salesforce External Credentials with "Per-User Principal" authentication, what is achieved?',
    options: {
      a: 'Each Salesforce user authenticates against the external API using their own personal third-party credentials rather than a shared service account',
      b: 'All API requests share a single static API key stored in custom labels',
      c: 'The external system bypasses all OAuth authentication checks',
      d: 'The integration is limited to 1 call per day per user'
    },
    correctAnswer: 'a',
    explanation: 'External Credentials support Per-User Principals, allowing each individual Salesforce user to authenticate and authorize against external APIs with their individual identity.'
  },
  {
    id: 'sfdc_priv_28',
    domain: 'privacy',
    text: 'Which Salesforce audit feature allows administrators to view a chronological log of administrative and setup modifications (including certificate and Connected App changes)?',
    options: {
      a: 'Setup Audit Trail',
      b: 'Apex Debug Log',
      c: 'Bulk API 2.0 Job Monitor',
      d: 'Schema Builder Log'
    },
    correctAnswer: 'a',
    explanation: 'Setup Audit Trail tracks the recent setup changes (past 180 days) made by administrators, including security configurations, connected apps, and certificate changes.'
  },
  {
    id: 'sfdc_priv_29',
    domain: 'privacy',
    text: 'How can an integration architect prevent sensitive personal data (PII) from being printed to Apex Debug Logs during integration troubleshooting?',
    options: {
      a: 'Configure Apex Log Filters, avoid logging raw payload strings containing PII, and use custom log masking frameworks',
      b: 'Debug logs are automatically encrypted and cannot be viewed by developers',
      c: 'Salesforce blocks all `System.debug()` statements in production orgs',
      d: 'Store all PII in custom URL parameters'
    },
    correctAnswer: 'a',
    explanation: 'System.debug statements write unencrypted text to Apex debug logs; developers and architects must avoid logging raw sensitive payloads and use masking utilities.'
  },
  {
    id: 'sfdc_priv_30',
    domain: 'privacy',
    text: 'What happens when an OAuth 2.0 Refresh Token is revoked by an administrator in Salesforce Setup?',
    options: {
      a: 'The connected application can no longer use that refresh token to obtain new access tokens, terminating ongoing API sessions upon access token expiration',
      b: 'The entire Salesforce org is locked for maintenance',
      c: 'The client application is deleted from the enterprise network',
      d: 'All historical event logs for that user are purged immediately'
    },
    correctAnswer: 'a',
    explanation: 'Revoking an OAuth refresh token immediately prevents the external client from renewing access tokens, effectively cutting off API access once active tokens expire.'
  }
];

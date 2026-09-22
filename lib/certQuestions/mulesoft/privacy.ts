import { CertQuestion } from '../types';

export const MULESOFT_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: "mule_priv_01",
    section: "privacy",
    prompt: "In Anypoint API Manager, what policy enforces that incoming requests must include valid `client_id` and `client_secret` credentials registered in Exchange?",
    options: [
      { id: "a", label: "CORS Policy." },
      { id: "b", label: "Client ID Enforcement Policy." },
      { id: "c", label: "JSON Threat Protection." },
      { id: "d", label: "Header Injection Policy." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_priv_02",
    section: "privacy",
    prompt: "How does the JWT Validation policy in Anypoint API Manager verify client authenticity?",
    options: [
      { id: "a", label: "Checks the length of the JWT token string." },
      { id: "b", label: "Converts the JWT token into an XML signature." },
      { id: "c", label: "Validates cryptographic signature (using JWKS URL or shared secret), checks expiration (`exp`), issuer (`iss`), and audience (`aud`) claims before allowing requests to reach the flow." },
      { id: "d", label: "Saves the token into a public Google Sheet." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_priv_03",
    section: "privacy",
    prompt: "What is the difference between Rate Limiting and Spike Control policies in Anypoint API Manager?",
    options: [
      { id: "a", label: "Rate Limiting only works on XML; Spike Control only works on JSON." },
      { id: "b", label: "Spike Control deletes the API implementation on violation." },
      { id: "c", label: "They are exact identical duplicates." },
      { id: "d", label: "Rate Limiting enforces maximum request quotas over longer time windows (e.g. 10,000 reqs/day); Spike Control smooths traffic bursts across short intervals (e.g. 10 reqs/second) with optional queueing." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_priv_04",
    section: "privacy",
    prompt: "How should sensitive database passwords and API keys be secured in Mule 4 project configuration files (`properties.yaml`)?",
    options: [
      { id: "a", label: "Encrypt values using Anypoint Enterprise Security Tool (`![encrypted_value]`) and decrypt at runtime using a Secure Properties Config with a master encryption key (`-M-Dmule.key=...`)." },
      { id: "b", label: "Commit plaintext passwords to public GitHub repositories." },
      { id: "c", label: "Hardcode passwords directly inside DataWeave transformation scripts." },
      { id: "d", label: "Encode strings in base64 without encryption keys." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_priv_05",
    section: "privacy",
    prompt: "What is Mutual TLS (mTLS) authentication and where is it configured in MuleSoft architectures?",
    options: [
      { id: "a", label: "Entering a password twice on login." },
      { id: "b", label: "Two-way cryptographic verification where both client and server present and validate x.509 digital certificates; configured on Dedicated Load Balancers (DLB) or HTTPS Listener TLS Contexts." },
      { id: "c", label: "Encrypting payloads with two separate passwords." },
      { id: "d", label: "A hardware device installed in customer offices." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_priv_06",
    section: "privacy",
    prompt: "What is the primary function of Anypoint Secrets Manager?",
    options: [
      { id: "a", label: "Resetting employee Active Directory passwords." },
      { id: "b", label: "Generating random numbers for Excel formulas." },
      { id: "c", label: "Centralized management and secure storage of TLS keystores, truststores, certificates, and secret groups integrated directly with CloudHub and API Manager." },
      { id: "d", label: "Monitoring hard drive temperature." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_priv_07",
    section: "privacy",
    prompt: "How does the JSON Threat Protection policy protect MuleSoft backend systems?",
    options: [
      { id: "a", label: "Scans JSON payloads for computer viruses." },
      { id: "b", label: "Encrypts all JSON files with WinRAR." },
      { id: "c", label: "Disables JSON parsing completely." },
      { id: "d", label: "Inspects incoming JSON payloads to enforce strict limits on object depth, array length, string length, and total payload size to prevent Denial of Service (DoS) attacks." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_priv_08",
    section: "privacy",
    prompt: "In MuleSoft logging practices, how should personally identifiable information (PII) like credit card numbers and Social Security numbers be handled?",
    options: [
      { id: "a", label: "Mask, redact, or hash sensitive PII before logging, or avoid logging raw payload bodies at `INFO`/`ERROR` levels to comply with GDPR/PCI-DSS standards." },
      { id: "b", label: "Log all credit card numbers at `DEBUG` level to standard console output." },
      { id: "c", label: "Email full unmasked payloads to all developers." },
      { id: "d", label: "Post logs to public Slack channels." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_priv_09",
    section: "privacy",
    prompt: "What is the purpose of configuring IP Whitelisting / IP Blacklisting policies in Anypoint API Manager?",
    options: [
      { id: "a", label: "Accelerates network download speeds." },
      { id: "b", label: "Restricts API access so only verified, trusted IP addresses or CIDR blocks can execute API requests, rejecting untrusted sources with `403 Forbidden`." },
      { id: "c", label: "Converts IPv4 addresses to IPv6." },
      { id: "d", label: "Deletes spam emails automatically." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_priv_10",
    section: "privacy",
    prompt: "In CloudHub 2.0, what provides network isolation and private communication between Mule applications and on-prem enterprise networks?",
    options: [
      { id: "a", label: "Public internet DNS routing." },
      { id: "b", label: "Standard WiFi routers." },
      { id: "c", label: "Anypoint Private Spaces configured with Anypoint VPN or AWS Transit Gateway." },
      { id: "d", label: "Unencrypted FTP tunnels." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_priv_11",
    section: "privacy",
    prompt: "How does the XML Threat Protection policy defend against XML External Entity (XXE) and Billion Laughs expansion attacks?",
    options: [
      { id: "a", label: "Converts XML into CSV format before execution." },
      { id: "b", label: "Validates XML syntax with CSS stylesheets." },
      { id: "c", label: "Deletes XML comments." },
      { id: "d", label: "Limits XML entity expansion depth, attribute counts, and disables external DTD processing in incoming XML payloads." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_priv_12",
    section: "privacy",
    prompt: "What is Cross-Origin Resource Sharing (CORS) and why must it be configured on MuleSoft Experience APIs consumed by web browsers?",
    options: [
      { id: "a", label: "A browser security mechanism that restricts cross-origin HTTP requests; CORS policy allows explicitly trusted web origins while handling preflight `OPTIONS` requests." },
      { id: "b", label: "A method to bypass all firewall rules." },
      { id: "c", label: "A database clustering protocol." },
      { id: "d", label: "An image compression algorithm." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_priv_13",
    section: "privacy",
    prompt: "In Mule 4 Cryptography Module, what is the PGP Encrypt / PGP Decrypt operation used for?",
    options: [
      { id: "a", label: "Password hashing for user logins." },
      { id: "b", label: "Asymmetric public/private key encryption and digital signing for secure batch file transfers across external partner networks." },
      { id: "c", label: "Compressing audio files." },
      { id: "d", label: "Validating HTML forms." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_priv_14",
    section: "privacy",
    prompt: "What does the Anypoint Anypoint Access Management RBAC (Role-Based Access Control) manage in an enterprise organization?",
    options: [
      { id: "a", label: "Configures physical door security badges." },
      { id: "b", label: "Controls CPU temperature in data centers." },
      { id: "c", label: "Assigns granular roles and permissions (e.g. API Creator, Organization Administrator, Environment Admin) to users and teams across Business Groups." },
      { id: "d", label: "Manages employee salary tiers." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_priv_15",
    section: "privacy",
    prompt: "When connecting a Mule application to Salesforce using OAuth 2.0 JWT Bearer flow, what credentials are required?",
    options: [
      { id: "a", label: "Salesforce password and security token in plaintext." },
      { id: "b", label: "Salesforce credit card number." },
      { id: "c", label: "Only the company domain name." },
      { id: "d", label: "Connected App Consumer Key, Username, and Private Key (PKCS#8/RSA) matching the digital certificate uploaded to the Connected App." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_priv_16",
    section: "privacy",
    prompt: "In Anypoint Platform, what is a Business Group used for?",
    options: [
      { id: "a", label: "Providing logical isolation of environments, APIs, applications, and access permissions across independent business units or subsidiaries." },
      { id: "b", label: "Sending calendar invites for company meetings." },
      { id: "c", label: "Grouping email distribution lists." },
      { id: "d", label: "Calculating quarterly company revenue." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_priv_17",
    section: "privacy",
    prompt: "How does the Header Injection policy enhance security in MuleSoft API management?",
    options: [
      { id: "a", label: "Injects user passwords into log files." },
      { id: "b", label: "Injects security headers like `Strict-Transport-Security` (HSTS), `X-Content-Type-Options`, and `Content-Security-Policy` into outbound HTTP responses." },
      { id: "c", label: "Injects JavaScript code into database tables." },
      { id: "d", label: "Deletes HTTP headers from incoming requests." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_priv_18",
    section: "privacy",
    prompt: "What is an OAuth 2.0 Token Enforcement policy in Anypoint API Manager?",
    options: [
      { id: "a", label: "Issues free credit cards to developers." },
      { id: "b", label: "Enforces 8-character passwords." },
      { id: "c", label: "Validates bearer access tokens against an external OpenID Connect (OIDC) or OAuth 2.0 authorization server (e.g. Okta, PingFederate, Azure AD) before routing requests." },
      { id: "d", label: "Encrypts hard drives with BitLocker." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_priv_19",
    section: "privacy",
    prompt: "In Mule 4, what is the purpose of configuring a KeyStore in an HTTPS Connector configuration?",
    options: [
      { id: "a", label: "Stores user passwords for database connections." },
      { id: "b", label: "Caches API responses in RAM." },
      { id: "c", label: "Validates JSON schemas." },
      { id: "d", label: "Holds the server's private key and digital certificate to prove identity and establish SSL/TLS encrypted sessions with clients." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_priv_20",
    section: "privacy",
    prompt: "What is the purpose of configuring a TrustStore in a Mule HTTP Request connector?",
    options: [
      { id: "a", label: "Contains root and intermediate Certificate Authority (CA) certificates trusted by the Mule client to verify the identity of remote HTTPS backend servers." },
      { id: "b", label: "Stores credit card CVV numbers." },
      { id: "c", label: "Stores API documentation files." },
      { id: "d", label: "Caches database query results." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_priv_21",
    section: "privacy",
    prompt: "What is the risk of setting `insecure=\"true\"` in an HTTP Request connector configuration?",
    options: [
      { id: "a", label: "Decreases HTTP response time." },
      { id: "b", label: "Disables SSL/TLS server certificate validation, leaving communication vulnerable to Man-In-The-Middle (MITM) attacks and credential theft." },
      { id: "c", label: "Slows down CPU clock speed." },
      { id: "d", label: "Deletes the Mule license." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_priv_22",
    section: "privacy",
    prompt: "In Anypoint Flex Gateway, what capability allows organizations to govern microservices deployed outside Mule runtime (e.g. in Kubernetes, AWS, or Node.js)?",
    options: [
      { id: "a", label: "Converts non-Mule applications into Java classes." },
      { id: "b", label: "Deletes non-Mule microservices." },
      { id: "c", label: "Flex Gateway acts as an ultra-fast, lightweight Envoy-based API gateway enforcing API Manager policies on third-party microservices." },
      { id: "d", label: "Translates Python code to DataWeave." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_priv_23",
    section: "privacy",
    prompt: "How does the Anypoint Security Edge policy layer protect MuleSoft endpoints before traffic reaches backend workers?",
    options: [
      { id: "a", label: "Scans employee emails for phishing." },
      { id: "b", label: "Backs up database tables to tape drives." },
      { id: "c", label: "Translates REST APIs to SOAP." },
      { id: "d", label: "Provides edge Web Application Firewall (WAF) filtering, DDoS mitigation, and advanced denial of service protection on CloudHub Dedicated Load Balancers." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_priv_24",
    section: "privacy",
    prompt: "What is the function of the Tokenization policy in Anypoint Security?",
    options: [
      { id: "a", label: "Replaces sensitive data (e.g. credit card PANs) with non-sensitive surrogate token values before storing or processing, reducing PCI-DSS scope." },
      { id: "b", label: "Splits sentences into words for NLP." },
      { id: "c", label: "Counts the number of words in an API contract." },
      { id: "d", label: "Generates cryptocurrency coins." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_priv_25",
    section: "privacy",
    prompt: "In Mule 4, what is the best practice for passing security credentials when invoking downstream System APIs from a Process API?",
    options: [
      { id: "a", label: "Pass admin database passwords as URL query parameters in plaintext." },
      { id: "b", label: "Use Client Credentials grant with unique client IDs/secrets managed via API Manager contracts, transmitting tokens over secure HTTPS." },
      { id: "c", label: "Disable all authentication between internal APIs." },
      { id: "d", label: "Hardcode credentials into XML tags." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_priv_26",
    section: "privacy",
    prompt: "How should audit trails and regulatory compliance logs be retained for Mule applications handling healthcare (HIPAA) or financial (SOX) transactions?",
    options: [
      { id: "a", label: "Print logs to ephemeral worker console and discard after 5 minutes." },
      { id: "b", label: "Store audit logs in unencrypted desktop text files." },
      { id: "c", label: "Stream structured audit events via Log4j2 appenders to dedicated immutable SIEM tools (e.g. Splunk, Datadog, AWS CloudWatch) with cryptographic integrity." },
      { id: "d", label: "Disable all logging to save disk space." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_priv_27",
    section: "privacy",
    prompt: "In Anypoint Platform, what is Identity Management (IdM) Single Sign-On (SSO) integration configured with?",
    options: [
      { id: "a", label: "Unencrypted FTP authentication." },
      { id: "b", label: "Local Windows passwords only." },
      { id: "c", label: "CSV user lists uploaded manually." },
      { id: "d", label: "SAML 2.0 or OpenID Connect (OIDC) identity providers (e.g. Okta, Ping, Azure Active Directory)." }
    ],
    correctOptionId: "d"
  },
  {
    id: "mule_priv_28",
    section: "privacy",
    prompt: "What does the `HTTP Basic Authentication` policy require from API consumers?",
    options: [
      { id: "a", label: "An `Authorization: Basic [base64_username:password]` header validated against configured credentials or an LDAP directory." },
      { id: "b", label: "A biometric fingerprint scan." },
      { id: "c", label: "A hardware USB security key." },
      { id: "d", label: "An SMS one-time passcode." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_priv_29",
    section: "privacy",
    prompt: "How can you ensure that Mule 4 applications only use strong TLS cryptographic cipher suites?",
    options: [
      { id: "a", label: "Allow SSLv3 and DES for maximum legacy compatibility." },
      { id: "b", label: "Explicitly declare enabled Cipher Suites (e.g. `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384`) and restrict protocols to `TLSv1.2` and `TLSv1.3` in the TLS Context." },
      { id: "c", label: "Disable TLS completely." },
      { id: "d", label: "Let the client choose any cipher including null ciphers." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_priv_30",
    section: "privacy",
    prompt: "What is the primary security objective of segregating Environments (e.g. Development, Staging, Production) in Anypoint Platform?",
    options: [
      { id: "a", label: "Multiplies software licensing costs." },
      { id: "b", label: "Eliminates the need for automated testing." },
      { id: "c", label: "Enforces strict isolation of sensitive production data, independent access controls, distinct API policies, and separate cryptographic key stores." },
      { id: "d", label: "Forces all developers to share root passwords." }
    ],
    correctOptionId: "c"
  }
];

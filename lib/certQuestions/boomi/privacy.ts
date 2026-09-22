import { Question } from '../../certTypes';

export const boomiPrivacyQuestions: Question[] = [
  {
    id: 'boomi_priv_01',
    domain: 'privacy',
    text: 'In Boomi API Management, what is the role of the Boomi API Gateway?',
    options: {
      a: 'A dedicated runtime proxy that enforces API security policies (OAuth 2.0 / JWT, Basic Auth, API Key), rate limiting, throttling, and routing across backend Atoms and Molecules',
      b: 'A hardware router installed in corporate offices',
      c: 'A web browser toolbar for inspecting API JSON responses',
      d: 'A relational database server storing user passwords'
    },
    correctAnswer: 'a',
    explanation: 'The Boomi API Gateway serves as a secure entry point that decouples API consumers from backend execution runtimes, enforcing authentication, quotas, rate limits, and analytics.'
  },
  {
    id: 'boomi_priv_02',
    domain: 'privacy',
    text: 'What is the purpose of Boomi "Environment Extensions" in enterprise security and deployment governance?',
    options: {
      a: 'To externalize and override connection credentials, URLs, certificates, and process properties per environment (Dev, Test, Prod) without modifying the underlying packaged process code',
      b: 'To extend the physical dimensions of the server chassis',
      c: 'To install third-party plugins in Google Chrome',
      d: 'To create new user accounts in AtomSphere'
    },
    correctAnswer: 'a',
    explanation: 'Environment Extensions allow environment-specific configurations (passwords, endpoints, encryption keys) to be set and managed per environment separately from process code.'
  },
  {
    id: 'boomi_priv_03',
    domain: 'privacy',
    text: 'How does Boomi protect sensitive passwords and API tokens configured in Process Properties or Connection components?',
    options: {
      a: 'By marking property fields or component fields as "Encrypted" / "Secure", which masks the values in the UI, encrypts them at rest using AES-256, and prevents them from printing in execution logs',
      b: 'By saving passwords in base64 format in text files',
      c: 'By emailing passwords to the administrator daily',
      d: 'Passwords cannot be encrypted in Boomi'
    },
    correctAnswer: 'a',
    explanation: 'Encrypted fields and Secure Process Properties mask sensitive inputs in the UI, encrypt values on disk, and sanitize logs to prevent credential leakage.'
  },
  {
    id: 'boomi_priv_04',
    domain: 'privacy',
    text: 'In AS2 (Applicability Statement 2) B2B integrations in Boomi, what security mechanisms ensure message confidentiality, integrity, and non-repudiation?',
    options: {
      a: 'S/MIME payload encryption using the partner\'s public certificate, digital signature using the sender\'s private certificate, and Message Disposition Notifications (MDN) with MIC hashes',
      b: 'Plaintext HTTP GET requests with MD5 hashes',
      c: 'Password protection on ZIP files',
      d: 'IP address allowlisting only'
    },
    correctAnswer: 'a',
    explanation: 'AS2 leverages S/MIME encryption (confidentiality), digital signatures (authenticity/integrity), and signed MDN receipts (non-repudiation of receipt).'
  },
  {
    id: 'boomi_priv_05',
    domain: 'privacy',
    text: 'Which authentication methods can be enforced on Boomi Web Services Server endpoints or via the API Gateway?',
    options: {
      a: 'Basic Authentication, API Key (Account or Application-level), and JWT (JSON Web Token) / OAuth 2.0 with external Identity Providers',
      b: 'Telnet login only',
      c: 'SMS OTP only',
      d: 'Anonymous open access only'
    },
    correctAnswer: 'a',
    explanation: 'Boomi API Management supports Basic Auth, API Key authentication, and OpenID Connect / JWT OAuth 2.0 with central enterprise IdPs (e.g. Okta, Azure AD, PingFederate).'
  },
  {
    id: 'boomi_priv_06',
    domain: 'privacy',
    text: 'What is the function of the "Certificate" component in Boomi AtomSphere?',
    options: {
      a: 'A reusable component storing public X.509 SSL/TLS certificates or private key pairs for HTTPS client authentication, WS-Security, AS2 encryption, and PGP signatures',
      b: 'A PDF diploma awarded to certified integration developers',
      c: 'A license validation file for Boomi runtime',
      d: 'A certificate of incorporation for business compliance'
    },
    correctAnswer: 'a',
    explanation: 'Certificate components manage public keys, private keys, and intermediate CA chains used across connectors (HTTP, FTPS, AS2, JMS, PGP).'
  },
  {
    id: 'boomi_priv_07',
    domain: 'privacy',
    text: 'How can an administrator restrict user logins to the Boomi AtomSphere platform to corporate enterprise Single Sign-On (SSO)?',
    options: {
      a: 'Configure SAML 2.0 Single Sign-On in Account Setup and enforce "Federated SSO Only" for all platform users',
      b: 'Change all user passwords to match the company name',
      c: 'Disable internet access on the Atom',
      d: 'Install a hardware firewall on the client browser'
    },
    correctAnswer: 'a',
    explanation: 'Configuring SAML 2.0 SSO in AtomSphere Account Setup enables corporate identity federation and allows enforcing SSO-only authentication.'
  },
  {
    id: 'boomi_priv_08',
    domain: 'privacy',
    text: 'What is the role of Custom Roles and Privileges in Boomi AtomSphere Role-Based Access Control (RBAC)?',
    options: {
      a: 'They allow administrators to define granular permission profiles (e.g. Build Only, Production Deployment Admin, Support/Log Viewer) and assign them to specific user groups',
      b: 'They assign different colored themes to the UI',
      c: 'They configure CPU priority on the Atom server',
      d: 'They determine the physical office location of developers'
    },
    correctAnswer: 'a',
    explanation: 'Custom Roles grant fine-grained privileges (e.g. View Audit Logs, Manage Environments, Execute Processes, Read Production Data) to restrict administrative capabilities.'
  },
  {
    id: 'boomi_priv_09',
    domain: 'privacy',
    text: 'What audit logging feature in Boomi AtomSphere tracks administrative actions, user logins, deployment changes, and component modifications?',
    options: {
      a: 'AtomSphere Audit Log (accessible under Setup -> Audit Log or via the AtomSphere API AuditLog object)',
      b: 'Windows Event Viewer',
      c: 'Linux syslog only',
      d: 'Git commit history'
    },
    correctAnswer: 'a',
    explanation: 'The AtomSphere Audit Log records all account management activities, component edits, environment updates, and deployments with timestamps and user identities.'
  },
  {
    id: 'boomi_priv_10',
    domain: 'privacy',
    text: 'How can an architect prevent sensitive customer data (PII) from being viewed by operations staff in Boomi Process Reporting execution logs?',
    options: {
      a: 'Enable "Purge Data Immediately" on sensitive processes or disable Document Tracking / Extended Logging for production environments',
      b: 'Delete the Atom server every night',
      c: 'Disconnect the Atom from the internet',
      d: 'Disable the Process Reporting tab in the UI'
    },
    correctAnswer: 'a',
    explanation: 'Configuring "Purge Data Immediately" or disabling payload tracking on sensitive processes prevents document bodies and PII from being stored or displayed in Process Reporting.'
  },
  {
    id: 'boomi_priv_11',
    domain: 'privacy',
    text: 'What is the purpose of the "IP Filter" setting on the Boomi Shared Web Server configuration?',
    options: {
      a: 'To allow or deny incoming HTTP/REST API calls based on client IP addresses or CIDR subnet blocks',
      b: 'To change the IP address of the local network router',
      c: 'To filter spam emails',
      d: 'To translate IPv4 addresses into IPv6'
    },
    correctAnswer: 'a',
    explanation: 'IP filtering in the Shared Web Server configuration permits only authorized IP ranges to establish HTTP connections to Atom listener endpoints.'
  },
  {
    id: 'boomi_priv_12',
    domain: 'privacy',
    text: 'In Boomi API Gateway, what does a "Contract" (or API Plan) represent?',
    options: {
      a: 'An agreement between an API consumer application and an API that governs access keys, rate limits (calls per second), and quota limits (calls per month)',
      b: 'A legal employment contract for developers',
      c: 'A software maintenance contract with Dell/Boomi',
      d: 'A document that defines database schemas'
    },
    correctAnswer: 'a',
    explanation: 'API Plans / Contracts in Boomi API Management govern API consumer access, enforcing subscription policies, rate limiting, and monthly quota budgets.'
  },
  {
    id: 'boomi_priv_13',
    domain: 'privacy',
    text: 'What is the role of the "Client Certificate Authentication" option on a Boomi Shared Web Server?',
    options: {
      a: 'It enforces Mutual TLS (mTLS), requiring calling clients to present a valid client certificate matching a trusted certificate in the Atom truststore during the TLS handshake',
      b: 'It generates a PDF receipt for the client',
      c: 'It forces users to enter a username and password in a browser prompt',
      d: 'It disables all encryption'
    },
    correctAnswer: 'a',
    explanation: 'Client Certificate Authentication (mTLS) validates client identity cryptographically at the transport layer before accepting incoming API traffic.'
  },
  {
    id: 'boomi_priv_14',
    domain: 'privacy',
    text: 'How does Boomi securely store environment extension values for secure credentials in the local runtime?',
    options: {
      a: 'Extension values are encrypted locally using the Atom\'s local runtime encryption key and stored in `env_name.properties` files in the Atom directory',
      b: 'They are saved in unencrypted plaintext on the desktop',
      c: 'They are uploaded to a public pastebin website',
      d: 'They are printed on server console output'
    },
    correctAnswer: 'a',
    explanation: 'Boomi encrypts sensitive extension variables on disk using internal encryption keys specific to that Atom runtime installation.'
  },
  {
    id: 'boomi_priv_15',
    domain: 'privacy',
    text: 'What is the purpose of Cross-Origin Resource Sharing (CORS) rules in Boomi API Management?',
    options: {
      a: 'To specify which external web browser origins (`Access-Control-Allow-Origin`) are permitted to execute AJAX / Fetch requests against Boomi APIs',
      b: 'To allow processes to communicate across two different continents',
      c: 'To share database tables across multiple tenants',
      d: 'To translate languages automatically in web pages'
    },
    correctAnswer: 'a',
    explanation: 'CORS rules define the allowed origins, HTTP methods, and headers for browser-based web applications calling Boomi API Gateway endpoints.'
  },
  {
    id: 'boomi_priv_16',
    domain: 'privacy',
    text: 'When configuring the Boomi SFTP (SSH) connector, which authentication methods are supported for secure server access?',
    options: {
      a: 'Password Authentication and SSH Key Pair (Public/Private Key) Authentication',
      b: 'OAuth 2.0 Bearer tokens only',
      c: 'SAML assertions only',
      d: 'Unauthenticated guest access only'
    },
    correctAnswer: 'a',
    explanation: 'The SFTP connector supports standard password and public-key cryptography (SSH private keys with passphrases) for server authentication.'
  },
  {
    id: 'boomi_priv_17',
    domain: 'privacy',
    text: 'What is the purpose of the "Two-Factor Authentication" (2FA) setting in Boomi AtomSphere account security?',
    options: {
      a: 'It requires platform users to provide a time-based one-time password (TOTP via authenticator app) in addition to their password when logging in without SSO',
      b: 'It requires two developers to approve every line of code',
      c: 'It forces processes to run on two separate servers simultaneously',
      d: 'It requires two separate network cables connected to the server'
    },
    correctAnswer: 'a',
    explanation: 'Two-Factor Authentication (2FA) enforces TOTP second-factor verification to protect administrative accounts from credential stuffing.'
  },
  {
    id: 'boomi_priv_18',
    domain: 'privacy',
    text: 'In Boomi, how can an architect ensure that data in transit between an Atom and the AtomSphere platform is protected?',
    options: {
      a: 'All platform communication is strictly encrypted using TLS 1.2 or TLS 1.3 with strong cipher suites over port 443',
      b: 'Data is sent over unencrypted HTTP port 80',
      c: 'Data is transmitted via unencrypted FTP',
      d: 'Data is saved to physical floppy disks'
    },
    correctAnswer: 'a',
    explanation: 'Boomi mandates modern TLS encryption for all runtime-to-cloud platform communications.'
  },
  {
    id: 'boomi_priv_19',
    domain: 'privacy',
    text: 'What is the function of the "PGP Decrypt" step in a Data Process shape?',
    options: {
      a: 'To decrypt encrypted files using the private key and passphrase from a PGP Certificate component, verifying the digital signature of the sender',
      b: 'To convert PDF documents into Word format',
      c: 'To format text into HTML format',
      d: 'To compress files into RAR archives'
    },
    correctAnswer: 'a',
    explanation: 'PGP Decrypt unpacks encrypted incoming files with private key certificates and validates digital signatures to verify sender identity.'
  },
  {
    id: 'boomi_priv_20',
    domain: 'privacy',
    text: 'How can an organization enforce data residency compliance using Boomi?',
    options: {
      a: 'By deploying local Atoms or Molecules within the required geographic boundaries or sovereign data centers, ensuring data never leaves the country of origin during processing',
      b: 'By changing the timezone setting in the web browser',
      c: 'By translating processes into multiple languages',
      d: 'Data residency cannot be controlled in Boomi'
    },
    correctAnswer: 'a',
    explanation: 'Local Atoms/Molecules process data entirely on-premises or within localized cloud regions, satisfying GDPR and data sovereignty requirements.'
  },
  {
    id: 'boomi_priv_21',
    domain: 'privacy',
    text: 'What is the role of the "API Key" in Boomi API Management Developer Portal?',
    options: {
      a: 'A unique cryptographic token generated for registered API consumer applications used to authenticate and identify API traffic at the Gateway',
      b: 'A password to log in to the Linux operating system',
      c: 'A license key to install Boomi software',
      d: 'A WiFi network security key'
    },
    correctAnswer: 'a',
    explanation: 'API Keys identify registered developer applications and link requests to specific API Plans for tracking and rate limiting.'
  },
  {
    id: 'boomi_priv_22',
    domain: 'privacy',
    text: 'What happens when a developer tries to modify a deployed component in production without having the "Production Deployment" privilege?',
    options: {
      a: 'AtomSphere RBAC blocks the action and displays an unauthorized permission error',
      b: 'The change is saved but marked as pending approval',
      c: 'The entire production environment is deleted',
      d: 'The user is logged out permanently'
    },
    correctAnswer: 'a',
    explanation: 'Role-Based Access Control strictly restricts deployment and modification privileges in designated Production environments.'
  },
  {
    id: 'boomi_priv_23',
    domain: 'privacy',
    text: 'In Boomi, what is a "Secure Particle" or "Boomi Protected Cloud"?',
    options: {
      a: 'A specialized cloud runtime certified for high-compliance workloads (such as FedRAMP, HIPAA, or PCI-DSS) with isolated compute and enhanced encryption controls',
      b: 'A microscopic semiconductor used in Atom hardware',
      c: 'A software bug patch released by Boomi',
      d: 'A compressed zip file of process source code'
    },
    correctAnswer: 'a',
    explanation: 'Protected / Gov Clouds provide FedRAMP, HIPAA, and PCI-DSS compliant isolated cloud execution infrastructure.'
  },
  {
    id: 'boomi_priv_24',
    domain: 'privacy',
    text: 'What is the purpose of the "Shared Web Server User Management" section on an Atom?',
    options: {
      a: 'To configure specific API user accounts, passwords, API tokens, and assign allowed process paths for inbound web service listeners',
      b: 'To manage Windows active directory domain controllers',
      c: 'To create Linux SSH accounts',
      d: 'To format server hard drives'
    },
    correctAnswer: 'a',
    explanation: 'Shared Web Server User Management creates and manages authorized API user accounts, access tokens, and path permissions for listener processes.'
  },
  {
    id: 'boomi_priv_25',
    domain: 'privacy',
    text: 'How does Boomi prevent denial of service (DoS) attacks on listener processes?',
    options: {
      a: 'Through API Gateway Rate Limiting (throttling max requests per second) and concurrent execution thread limits configured in `container.properties`',
      b: 'By shutting down the server whenever traffic increases',
      c: 'By deleting incoming requests randomly',
      d: 'By increasing internet bandwidth automatically'
    },
    correctAnswer: 'a',
    explanation: 'API Gateway rate limiting and Atom-level thread limits reject excessive request floods with HTTP 429 Too Many Requests to prevent service degradation.'
  },
  {
    id: 'boomi_priv_26',
    domain: 'privacy',
    text: 'What is the function of the "Purge History" setting on a Boomi Atom?',
    options: {
      a: 'To automatically delete execution logs, temporary document caches, and process tracking data older than a designated number of days (e.g. 7 or 30 days) from local disk storage',
      b: 'To delete all process source code from Git',
      c: 'To clear user browser history',
      d: 'To reinstall the operating system'
    },
    correctAnswer: 'a',
    explanation: 'The purge schedule automatically purges local execution logs, temporary staging files, and document caches to free disk space and comply with data retention limits.'
  },
  {
    id: 'boomi_priv_27',
    domain: 'privacy',
    text: 'In Boomi API Management, what is the role of OpenID Connect (OIDC) integration?',
    options: {
      a: 'It allows the API Gateway to validate incoming JWT tokens against an enterprise OIDC Identity Provider (e.g. Okta, Azure AD, PingIdentity) using JWKS public keys',
      b: 'It connects the Atom to open-source database engines',
      c: 'It converts REST APIs into GraphQL schemas',
      d: 'It provides free internet access to users'
    },
    correctAnswer: 'a',
    explanation: 'OIDC integration enables federated token validation directly at the API Gateway using standard identity provider endpoints.'
  },
  {
    id: 'boomi_priv_28',
    domain: 'privacy',
    text: 'What is the purpose of the "Execution Artifacts" encryption feature on local Atoms?',
    options: {
      a: 'To encrypt process metadata, connector cache files, and staging data written to disk on the Atom host using AES keys',
      b: 'To encrypt email notifications',
      c: 'To format hard disk drives',
      d: 'To compress log files into 7-Zip archives'
    },
    correctAnswer: 'a',
    explanation: 'Encrypting execution artifacts ensures temporary files, staging data, and cached documents on the host file system cannot be read by unauthorized host users.'
  },
  {
    id: 'boomi_priv_29',
    domain: 'privacy',
    text: 'How can an administrator revoke access for a compromised API key in Boomi API Management?',
    options: {
      a: 'Revoke or delete the API Key in the API Management dashboard or Developer Portal, causing subsequent requests to be rejected immediately with HTTP 403 Forbidden',
      b: 'Restart the entire physical server hardware',
      c: 'Delete all processes deployed to the Atom',
      d: 'Wait 30 days for the key to expire automatically'
    },
    correctAnswer: 'a',
    explanation: 'Revoking an API key instantly invalidates that credential at the API Gateway, blocking any further unauthorized requests.'
  },
  {
    id: 'boomi_priv_30',
    domain: 'privacy',
    text: 'What is the function of the "Tracked Fields" feature in Boomi Process Reporting?',
    options: {
      a: 'To promote specific business identifiers (e.g. OrderNumber, CustomerID) from documents into searchable metadata in Process Reporting without storing the full payload',
      b: 'To track the physical GPS location of servers',
      c: 'To measure CPU clock speed over time',
      d: 'To count lines of code written by developers'
    },
    correctAnswer: 'a',
    explanation: 'Tracked Fields index key business identifiers, allowing operations teams to search and troubleshoot specific transactions in Process Reporting without needing full payload logging.'
  }
];

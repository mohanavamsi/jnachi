import { Question } from '../../certTypes';

export const ibmAcePrivacyQuestions: Question[] = [
  {
    id: 'ace_priv_01',
    domain: 'privacy',
    text: 'In IBM App Connect Enterprise, what is a Security Profile used for?',
    options: {
      a: 'To define end-to-end security operations (Authentication, Authorization, and Identity Mapping) for incoming message identities against external PDPs like LDAP, WS-Trust, or TFIM',
      b: 'To restrict the number of CPU cores used by the Integration Server',
      c: 'To format security alerts into SMS messages',
      d: 'To configure hard disk encryption passwords'
    },
    correctAnswer: 'a',
    explanation: 'A Security Profile defines how an Integration Server authenticates, authorizes, and maps tokens (e.g. Username/Password, SAML, X.509, JWT) extracted from incoming message headers.'
  },
  {
    id: 'ace_priv_02',
    domain: 'privacy',
    text: 'What is the function of the `mqsisetdbparms` / `ibmint set-dbparms` command in IBM ACE?',
    options: {
      a: 'To securely store database credentials, security profile passwords, keystore passphrases, and HTTP Basic/OAuth credentials in the ACE secure store or integration vault',
      b: 'To change table schemas in an external database',
      c: 'To delete integration nodes from disk',
      d: 'To compile Java source code'
    },
    correctAnswer: 'a',
    explanation: '`mqsisetdbparms` (and `ibmint set-dbparms`) securely associates user IDs and passwords with resource names (e.g. `odbc::DSN_NAME`, `securityidentity::SEC_ID`, `keystore::keystorePass`).'
  },
  {
    id: 'ace_priv_03',
    domain: 'privacy',
    text: 'What is the purpose of the `SecurityPEP` (Policy Enforcement Point) node in an ACE message flow?',
    options: {
      a: 'It allows invoking security profile checks (authentication, authorization, or identity mapping) at an arbitrary mid-flow point rather than only at flow input nodes',
      b: 'It scans message payloads for SQL injection signatures',
      c: 'It compresses XML messages using gzip',
      d: 'It restarts the integration server if unauthorized access occurs'
    },
    correctAnswer: 'a',
    explanation: 'The `SecurityPEP` node acts as a Policy Enforcement Point anywhere inside a message flow, evaluating the current message identity against a specified Security Profile.'
  },
  {
    id: 'ace_priv_04',
    domain: 'privacy',
    text: 'What is the IBM ACE Vault (`ibmint create vault` / integration server vault) introduced in recent ACE versions?',
    options: {
      a: 'An encrypted repository storing credentials, secrets, and connection parameters protected by a symmetric master encryption key, replacing plain property files',
      b: 'A physical safe installed in a data center',
      c: 'A backup tape archive for historical flow code',
      d: 'An immutable git repository hosted by IBM'
    },
    correctAnswer: 'a',
    explanation: 'The ACE Vault provides hardware/software-encrypted credential storage for integration nodes and servers, protecting sensitive passwords and keys at rest.'
  },
  {
    id: 'ace_priv_05',
    domain: 'privacy',
    text: 'How does an integration architect configure HTTPS and Mutual TLS (mTLS) for an `HTTPInput` node on an Integration Server?',
    options: {
      a: 'Configure keystore and truststore paths and passphrases in `server.conf.yaml` (under `HTTPSConnector`) and set `ReqClientAuth: true`',
      b: 'Embed the client certificate into the ESQL code directly',
      c: 'Disable all firewalls on port 443',
      d: 'Set the HTTP input node parsing domain to BLOB'
    },
    correctAnswer: 'a',
    explanation: 'HTTPS and mTLS are configured in `server.conf.yaml` within the `NodeHTTPListener` or `HTTPSConnector` stanza, defining keystores, truststores, and client authentication requirements.'
  },
  {
    id: 'ace_priv_06',
    domain: 'privacy',
    text: 'In WS-Security on IBM ACE `SOAPInput` nodes, which standards are supported for securing SOAP message payloads?',
    options: {
      a: 'WS-Security 1.0 / 1.1 (XML Signature, XML Encryption, Username Token Profile, X.509 Certificate Token Profile, SAML Token Profile)',
      b: 'OAuth 2.0 PKCE only',
      c: 'PGP encryption only',
      d: 'SSH public keys only'
    },
    correctAnswer: 'a',
    explanation: 'ACE supports comprehensive WS-Security specifications for SOAP nodes, providing message-level encryption, digital signatures, and token profiles via Policy Sets and Bindings.'
  },
  {
    id: 'ace_priv_07',
    domain: 'privacy',
    text: 'What is a Policy Set and Policy Set Binding in IBM ACE web service security?',
    options: {
      a: 'A Policy Set defines the abstract security requirements (e.g. message signature and encryption); a Binding defines the physical implementation details (keys, certificates, algorithms)',
      b: 'A Policy Set defines database table permissions; a Binding creates indexes',
      c: 'A Policy Set defines network routing; a Binding sets TCP window sizes',
      d: 'A Policy Set configures developer user accounts in Eclipse'
    },
    correctAnswer: 'a',
    explanation: 'Policy Sets specify the WS-Security rules (what to sign/encrypt), and Policy Set Bindings specify the runtime crypto assets (which keystores, certificate aliases, and algorithms to use).'
  },
  {
    id: 'ace_priv_08',
    domain: 'privacy',
    text: 'Which transport header is evaluated when an `HTTPInput` node extracts incoming HTTP Basic Authentication credentials for a Security Profile?',
    options: {
      a: '`Authorization: Basic <base64_credentials>`',
      b: '`X-Auth-Token: <token>`',
      c: '`Proxy-Authorization`',
      d: '`Cookie: session_id`'
    },
    correctAnswer: 'a',
    explanation: 'HTTP Basic Auth uses the standard `Authorization: Basic <base64>` header, which ACE decodes and places into the `Properties.Identity` folder for authentication.'
  },
  {
    id: 'ace_priv_09',
    domain: 'privacy',
    text: 'In ACE administration, how is Role-Based Access Control (RBAC) configured for web user interface and REST administrative API access?',
    options: {
      a: 'By defining file-based or LDAP user roles with permissions (`read`, `write`, `execute`) in `server.conf.yaml` or via `mqsiwebuseradmin` / `mqsichangefileauth`',
      b: 'By modifying the Linux `/etc/sudoers` file',
      c: 'By giving all users root privileges',
      d: 'By generating separate BAR files for each user'
    },
    correctAnswer: 'a',
    explanation: 'ACE administration security uses role-based file authorization or LDAP authorization configured in `server.conf.yaml` and managed via administrative commands.'
  },
  {
    id: 'ace_priv_10',
    domain: 'privacy',
    text: 'What is the purpose of Identity Propagation in an ACE message flow?',
    options: {
      a: 'To forward the authenticated security token or mapped credential of the caller through downstream output nodes (e.g. MQOutput, HTTPRequest) to propagate user context to downstream backends',
      b: 'To copy user profiles across LDAP servers',
      c: 'To replicate database tables to disaster recovery sites',
      d: 'To broadcast user names on public Slack channels'
    },
    correctAnswer: 'a',
    explanation: 'Identity propagation takes the security identity established on the input node and propagates it onto outbound transport requests to preserve end-to-end auditability.'
  },
  {
    id: 'ace_priv_11',
    domain: 'privacy',
    text: 'How can an integration developer ensure that sensitive payload fields (such as credit card numbers or passwords) are masked in user trace logs and error logs?',
    options: {
      a: 'Use ESQL / Java masking routines before tracing, and configure message flow user trace to exclude payload trees or log sanitized structures',
      b: 'User traces automatically redact all numbers',
      c: 'Never run message flows in production',
      d: 'Encrypt the entire hard disk with BitLocker'
    },
    correctAnswer: 'a',
    explanation: 'Developers must sanitize and mask sensitive data in ESQL/Java before outputting to `Trace` nodes or logging sinks to prevent compliance violations.'
  },
  {
    id: 'ace_priv_12',
    domain: 'privacy',
    text: 'What happens when an incoming message fails authentication in a Security Profile configured on an `HTTPInput` node?',
    options: {
      a: 'ACE rejects the request immediately, returning an HTTP 401 Unauthorized or 403 Forbidden status without executing any downstream nodes in the message flow',
      b: 'The flow executes normally with empty variables',
      c: 'The server creates a new user account with default password',
      d: 'The incoming message is saved on the desktop'
    },
    correctAnswer: 'a',
    explanation: 'Security profiles enforce perimeter security on input nodes; failed authentication terminates the connection and returns HTTP 401/403 before flow logic executes.'
  },
  {
    id: 'ace_priv_13',
    domain: 'privacy',
    text: 'Which certificate keystore formats are supported by IBM ACE runtime for TLS connections?',
    options: {
      a: 'PKCS #12 (`.p12` / `.pfx`) and Java KeyStore (`.jks`)',
      b: 'Raw JSON files',
      c: 'Unencrypted CSV files',
      d: 'SQLite database files'
    },
    correctAnswer: 'a',
    explanation: 'ACE supports standard PKCS#12 (`.p12`) and Java KeyStore (`.jks`) formats for TLS server certificates, client certificates, and truststores.'
  },
  {
    id: 'ace_priv_14',
    domain: 'privacy',
    text: 'In ACE v11/v12, how are external LDAP servers configured for authenticating Security Profiles?',
    options: {
      a: 'By creating an LDAP Security Profile policy in a Policy Project specifying LDAP URL, Bind DN, credentials, and search filters',
      b: 'By installing an LDAP server inside the Eclipse toolkit',
      c: 'By modifying the DNS hosts file',
      d: 'By embedding LDAP passwords into XML payloads'
    },
    correctAnswer: 'a',
    explanation: 'Security Profile policies define connection parameters, LDAP search filters, and authentication methods for LDAP directories.'
  },
  {
    id: 'ace_priv_15',
    domain: 'privacy',
    text: 'What is the purpose of the `mqsichangeproperties` command in relation to JVM security settings?',
    options: {
      a: 'To configure JVM arguments, enable specific TLS protocol versions (e.g. TLSv1.3), or set Java security properties across integration servers',
      b: 'To recompile Java source code into C++',
      c: 'To format database storage disks',
      d: 'To update user home directories'
    },
    correctAnswer: 'a',
    explanation: '`mqsichangeproperties` (and `server.conf.yaml`) configures JVM parameters, security providers, and socket TLS versions for the integration engine.'
  },
  {
    id: 'ace_priv_16',
    domain: 'privacy',
    text: 'What is the function of the `CrlCertRevoc` parameter in ACE TLS connector configuration?',
    options: {
      a: 'It enables Certificate Revocation List (CRL) checking to verify that client certificates presented during mTLS have not been revoked by the issuing CA',
      b: 'It generates new certificates on every request',
      c: 'It converts CRL files into JSON format',
      d: 'It disables all certificate validations'
    },
    correctAnswer: 'a',
    explanation: '`CrlCertRevoc` enables verification against Certificate Revocation Lists to reject compromised or invalidated certificates during TLS handshakes.'
  },
  {
    id: 'ace_priv_17',
    domain: 'privacy',
    text: 'When securing database access from an ACE message flow, what is the best practice for credential management?',
    options: {
      a: 'Use `mqsisetdbparms` or an ACE Vault to map ODBC/JDBC datasource aliases to securely encrypted credentials, avoiding hardcoded passwords in code or properties',
      b: 'Hardcode database passwords in ESQL DECLARE statements',
      c: 'Pass the database password in the HTTP query string',
      d: 'Disable password authentication on the database server'
    },
    correctAnswer: 'a',
    explanation: 'Decoupling credentials via `mqsisetdbparms` / Vault ensures secrets are never committed to version control or visible in clear text.'
  },
  {
    id: 'ace_priv_18',
    domain: 'privacy',
    text: 'How does an integration architect configure an `HTTPRequest` node to use an HTTP proxy server with basic authentication?',
    options: {
      a: 'Specify the HTTP proxy URL in the node properties or `LocalEnvironment` and store proxy credentials via `mqsisetdbparms -n httpproxy::myProxy -u user -p pass` (or Vault)',
      b: 'Embed the proxy credentials in the HTTP URL (`http://user:pass@proxy:8080`)',
      c: 'Disable SSL verification',
      d: 'Use unencrypted Telnet'
    },
    correctAnswer: 'a',
    explanation: 'Proxy authentication credentials should be stored securely using `mqsisetdbparms` / Vault under the `httpproxy::` resource identifier.'
  },
  {
    id: 'ace_priv_19',
    domain: 'privacy',
    text: 'What is the role of OAuth 2.0 Security Profiles in ACE REST APIs?',
    options: {
      a: 'To validate incoming OAuth Bearer access tokens against an OAuth Authorization Server (e.g. PingFederate, Keycloak, Azure AD) via token introspection or JWKS validation',
      b: 'To generate QR codes for mobile login',
      c: 'To format REST payloads into CSV',
      d: 'To encrypt HTTP response headers using MD5'
    },
    correctAnswer: 'a',
    explanation: 'OAuth Security Profiles validate incoming JWT/Opaque bearer tokens against enterprise Identity Providers before allowing requests into message flows.'
  },
  {
    id: 'ace_priv_20',
    domain: 'privacy',
    text: 'In WS-Security, what is the purpose of XML Signature (`<ds:Signature>`) applied to a SOAP message body?',
    options: {
      a: 'It guarantees message integrity (detecting any tampering in transit) and non-repudiation of origin by cryptographically signing the body with the sender\'s private key',
      b: 'It compresses the SOAP body to 50% size',
      c: 'It translates the XML tags into French',
      d: 'It changes the HTTP port to 8443'
    },
    correctAnswer: 'a',
    explanation: 'XML Signature validates data integrity and authenticates the sender by computing a cryptographic hash of the XML elements signed with the sender\'s private key.'
  },
  {
    id: 'ace_priv_21',
    domain: 'privacy',
    text: 'What is the function of the `KeyAlias` property in an ACE HTTP/SOAP Request node with SSL/TLS enabled?',
    options: {
      a: 'It specifies which specific client certificate alias in the key repository should be presented during the mutual TLS (mTLS) handshake with the backend server',
      b: 'It defines the database primary key column name',
      c: 'It renames the message flow in the Toolkit',
      d: 'It sets the license key for the integration node'
    },
    correctAnswer: 'a',
    explanation: '`KeyAlias` designates the exact client certificate to present when multiple certificates reside within the same keystore file.'
  },
  {
    id: 'ace_priv_22',
    domain: 'privacy',
    text: 'How can an administrator restrict administrative web console access to specific IP ranges in ACE?',
    options: {
      a: 'By configuring IP filtering rules in `server.conf.yaml` under `AdminRESTAPI` or enforcing perimeter firewall/reverse proxy policies',
      b: 'By changing the administrator username to `admin_local`',
      c: 'By deleting all message flows from the server',
      d: 'By setting the node CCSID to 1208'
    },
    correctAnswer: 'a',
    explanation: 'Restricting admin REST API / web console access can be configured in `server.conf.yaml` and enforced via network access controls / ingress proxies.'
  },
  {
    id: 'ace_priv_23',
    domain: 'privacy',
    text: 'What is the purpose of the `Strict-Transport-Security` (HSTS) header in ACE HTTP output responses?',
    options: {
      a: 'To instruct web browsers that the application must only be accessed over secure HTTPS connections, preventing SSL-stripping attacks',
      b: 'To restrict database queries to read-only mode',
      c: 'To force all users to change passwords every 30 days',
      d: 'To compress HTTP response payloads'
    },
    correctAnswer: 'a',
    explanation: 'HSTS response headers enforce HTTPS-only communication in client browsers, mitigating downgrade and cookie hijacking attacks.'
  },
  {
    id: 'ace_priv_24',
    domain: 'privacy',
    text: 'What security mechanism protects against XML External Entity (XXE) attacks in ACE `XMLNSC` parser?',
    options: {
      a: 'The `XMLNSC` parser disables external entity resolution and DTD processing by default, preventing unauthorized file retrieval or SSRF via XML entities',
      b: 'ACE converts all XML files to PDF before parsing',
      c: 'ACE deletes all incoming XML files automatically',
      d: 'ACE requires XML files to be digitally signed with PGP'
    },
    correctAnswer: 'a',
    explanation: 'By default, `XMLNSC` blocks external DTD entity expansion, mitigating XXE injection vulnerabilities.'
  },
  {
    id: 'ace_priv_25',
    domain: 'privacy',
    text: 'What is the role of SAML 2.0 Token validation in ACE Security Profiles?',
    options: {
      a: 'To validate signed SAML assertions passed in WS-Security headers or HTTP authorization headers to authenticate federated enterprise identities',
      b: 'To convert XML into JSON schemas',
      c: 'To format server logs into Excel spreadsheets',
      d: 'To calculate database storage costs'
    },
    correctAnswer: 'a',
    explanation: 'SAML token evaluation verifies cryptographically signed identity assertions issued by enterprise IdPs.'
  },
  {
    id: 'ace_priv_26',
    domain: 'privacy',
    text: 'How does an architect secure JMS connections between IBM ACE and IBM MQ or third-party JMS providers?',
    options: {
      a: 'Configure SSL/TLS cipher suites on the JMS connection factory, enable client authentication with keystores, and store credentials in ACE Vault / `mqsisetdbparms`',
      b: 'Use plaintext connections over public internet',
      c: 'Embed credentials into the JMS message body',
      d: 'Disable the JMS message listener'
    },
    correctAnswer: 'a',
    explanation: 'Securing JMS involves TLS channel encryption, certificate validation, and credential abstraction via secure configuration stores.'
  },
  {
    id: 'ace_priv_27',
    domain: 'privacy',
    text: 'What is the purpose of the `ibmint create vault` command?',
    options: {
      a: 'To initialize a secure, encrypted vault for an integration server work directory or integration node with a specified vault key',
      b: 'To create a backup zip file of the source code',
      c: 'To format a USB flash drive',
      d: 'To create a git branch named vault'
    },
    correctAnswer: 'a',
    explanation: '`ibmint create vault` creates an encrypted vault container for holding server credentials and encryption keys.'
  },
  {
    id: 'ace_priv_28',
    domain: 'privacy',
    text: 'In ACE, what is Identity Mapping in a Security Profile?',
    options: {
      a: 'The transformation of an incoming security token (e.g. an external Kerberos ticket or SAML assertion) into an internal security token (e.g. a RACF username or LDAP group) for backend authorization',
      b: 'Translating English user names to other languages',
      c: 'Mapping IP addresses to geographic country codes',
      d: 'Associating message IDs with database sequence numbers'
    },
    correctAnswer: 'a',
    explanation: 'Identity Mapping converts external security tokens into internal identities required by target enterprise systems.'
  },
  {
    id: 'ace_priv_29',
    domain: 'privacy',
    text: 'How does ACE verify that an incoming JSON Web Token (JWT) has not been tampered with?',
    options: {
      a: 'By validating the JWT signature using the public key / certificate obtained from the Identity Provider\'s JWKS (JSON Web Key Set) endpoint or local keystore',
      b: 'By checking if the token length is an even number',
      c: 'By comparing the token string against an MD5 hash',
      d: 'By converting the token into an XML tag'
    },
    correctAnswer: 'a',
    explanation: 'ACE validates the cryptographic signature of the JWT using the issuer’s public key from the JWKS URI or configured certificate.'
  },
  {
    id: 'ace_priv_30',
    domain: 'privacy',
    text: 'What happens if a developer attempts to deploy a BAR file that has not been compiled or is missing required referenced libraries in a secure production environment?',
    options: {
      a: 'The deployment fails with validation errors (e.g. `BIP2087E`), and no broken flows are activated in the runtime',
      b: 'The integration server automatically downloads arbitrary code from the internet',
      c: 'The server executes the flow in demo mode',
      d: 'All existing deployed applications are deleted'
    },
    correctAnswer: 'a',
    explanation: 'ACE validates BAR file integrity and dependency completeness before activating flows; missing dependencies halt deployment with detailed error codes.'
  }
];

import { CertQuestion } from '../types';

export const IBM_ACE_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "ace_priv_01",
    "section": "privacy",
    "prompt": "In IBM App Connect Enterprise, what is a Security Profile used for?",
    "options": [
      {
        "id": "a",
        "label": "To restrict the number of CPU cores used by the Integration Server"
      },
      {
        "id": "b",
        "label": "To define end-to-end security operations (Authentication, Authorization, and Identity Mapping) for incoming message identities against external PDPs like LDAP, WS-Trust, or TFIM"
      },
      {
        "id": "c",
        "label": "To format security alerts into SMS messages"
      },
      {
        "id": "d",
        "label": "To configure hard disk encryption passwords"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_priv_02",
    "section": "privacy",
    "prompt": "What is the function of the `mqsisetdbparms` / `ibmint set-dbparms` command in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "To change table schemas in an external database"
      },
      {
        "id": "b",
        "label": "To delete integration nodes from disk"
      },
      {
        "id": "c",
        "label": "To securely store database credentials, security profile passwords, keystore passphrases, and HTTP Basic/OAuth credentials in the ACE secure store or integration vault"
      },
      {
        "id": "d",
        "label": "To compile Java source code"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_priv_03",
    "section": "privacy",
    "prompt": "What is the purpose of the `SecurityPEP` (Policy Enforcement Point) node in an ACE message flow?",
    "options": [
      {
        "id": "a",
        "label": "It allows invoking security profile checks (authentication, authorization, or identity mapping) at an arbitrary mid-flow point rather than only at flow input nodes"
      },
      {
        "id": "b",
        "label": "It scans message payloads for SQL injection signatures"
      },
      {
        "id": "c",
        "label": "It compresses XML messages using gzip"
      },
      {
        "id": "d",
        "label": "It restarts the integration server if unauthorized access occurs"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_priv_04",
    "section": "privacy",
    "prompt": "What is the IBM ACE Vault (`ibmint create vault` / integration server vault) introduced in recent ACE versions?",
    "options": [
      {
        "id": "a",
        "label": "A physical safe installed in a data center"
      },
      {
        "id": "b",
        "label": "A backup tape archive for historical flow code"
      },
      {
        "id": "c",
        "label": "An immutable git repository hosted by IBM"
      },
      {
        "id": "d",
        "label": "An encrypted repository storing credentials, secrets, and connection parameters protected by a symmetric master encryption key, replacing plain property files"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_priv_05",
    "section": "privacy",
    "prompt": "How does an integration architect configure HTTPS and Mutual TLS (mTLS) for an `HTTPInput` node on an Integration Server?",
    "options": [
      {
        "id": "a",
        "label": "Embed the client certificate into the ESQL code directly"
      },
      {
        "id": "b",
        "label": "Disable all firewalls on port 443"
      },
      {
        "id": "c",
        "label": "Configure keystore and truststore paths and passphrases in `server.conf.yaml` (under `HTTPSConnector`) and set `ReqClientAuth: true`"
      },
      {
        "id": "d",
        "label": "Set the HTTP input node parsing domain to BLOB"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_priv_06",
    "section": "privacy",
    "prompt": "In WS-Security on IBM ACE `SOAPInput` nodes, which standards are supported for securing SOAP message payloads?",
    "options": [
      {
        "id": "a",
        "label": "WS-Security 1.0 / 1.1 (XML Signature, XML Encryption, Username Token Profile, X.509 Certificate Token Profile, SAML Token Profile)"
      },
      {
        "id": "b",
        "label": "OAuth 2.0 PKCE only"
      },
      {
        "id": "c",
        "label": "PGP encryption only"
      },
      {
        "id": "d",
        "label": "SSH public keys only"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_priv_07",
    "section": "privacy",
    "prompt": "What is a Policy Set and Policy Set Binding in IBM ACE web service security?",
    "options": [
      {
        "id": "a",
        "label": "A Policy Set defines database table permissions; a Binding creates indexes"
      },
      {
        "id": "b",
        "label": "A Policy Set defines network routing; a Binding sets TCP window sizes"
      },
      {
        "id": "c",
        "label": "A Policy Set configures developer user accounts in Eclipse"
      },
      {
        "id": "d",
        "label": "A Policy Set defines the abstract security requirements (e.g. message signature and encryption); a Binding defines the physical implementation details (keys, certificates, algorithms)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_priv_08",
    "section": "privacy",
    "prompt": "Which transport header is evaluated when an `HTTPInput` node extracts incoming HTTP Basic Authentication credentials for a Security Profile?",
    "options": [
      {
        "id": "a",
        "label": "`X-Auth-Token: <token>`"
      },
      {
        "id": "b",
        "label": "`Authorization: Basic <base64_credentials>`"
      },
      {
        "id": "c",
        "label": "`Proxy-Authorization`"
      },
      {
        "id": "d",
        "label": "`Cookie: session_id`"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_priv_09",
    "section": "privacy",
    "prompt": "In ACE administration, how is Role-Based Access Control (RBAC) configured for web user interface and REST administrative API access?",
    "options": [
      {
        "id": "a",
        "label": "By modifying the Linux `/etc/sudoers` file"
      },
      {
        "id": "b",
        "label": "By giving all users root privileges"
      },
      {
        "id": "c",
        "label": "By generating separate BAR files for each user"
      },
      {
        "id": "d",
        "label": "By defining file-based or LDAP user roles with permissions (`read`, `write`, `execute`) in `server.conf.yaml` or via `mqsiwebuseradmin` / `mqsichangefileauth`"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_priv_10",
    "section": "privacy",
    "prompt": "What is the purpose of Identity Propagation in an ACE message flow?",
    "options": [
      {
        "id": "a",
        "label": "To copy user profiles across LDAP servers"
      },
      {
        "id": "b",
        "label": "To forward the authenticated security token or mapped credential of the caller through downstream output nodes (e.g. MQOutput, HTTPRequest) to propagate user context to downstream backends"
      },
      {
        "id": "c",
        "label": "To replicate database tables to disaster recovery sites"
      },
      {
        "id": "d",
        "label": "To broadcast user names on public Slack channels"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_priv_11",
    "section": "privacy",
    "prompt": "How can an integration developer ensure that sensitive payload fields (such as credit card numbers or passwords) are masked in user trace logs and error logs?",
    "options": [
      {
        "id": "a",
        "label": "User traces automatically redact all numbers"
      },
      {
        "id": "b",
        "label": "Never run message flows in production"
      },
      {
        "id": "c",
        "label": "Use ESQL / Java masking routines before tracing, and configure message flow user trace to exclude payload trees or log sanitized structures"
      },
      {
        "id": "d",
        "label": "Encrypt the entire hard disk with BitLocker"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_priv_12",
    "section": "privacy",
    "prompt": "What happens when an incoming message fails authentication in a Security Profile configured on an `HTTPInput` node?",
    "options": [
      {
        "id": "a",
        "label": "ACE rejects the request immediately, returning an HTTP 401 Unauthorized or 403 Forbidden status without executing any downstream nodes in the message flow"
      },
      {
        "id": "b",
        "label": "The flow executes normally with empty variables"
      },
      {
        "id": "c",
        "label": "The server creates a new user account with default password"
      },
      {
        "id": "d",
        "label": "The incoming message is saved on the desktop"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_priv_13",
    "section": "privacy",
    "prompt": "Which certificate keystore formats are supported by IBM ACE runtime for TLS connections?",
    "options": [
      {
        "id": "a",
        "label": "PKCS #12 (`.p12` / `.pfx`) and Java KeyStore (`.jks`)"
      },
      {
        "id": "b",
        "label": "Raw JSON files"
      },
      {
        "id": "c",
        "label": "Unencrypted CSV files"
      },
      {
        "id": "d",
        "label": "SQLite database files"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_priv_14",
    "section": "privacy",
    "prompt": "In ACE v11/v12, how are external LDAP servers configured for authenticating Security Profiles?",
    "options": [
      {
        "id": "a",
        "label": "By installing an LDAP server inside the Eclipse toolkit"
      },
      {
        "id": "b",
        "label": "By modifying the DNS hosts file"
      },
      {
        "id": "c",
        "label": "By embedding LDAP passwords into XML payloads"
      },
      {
        "id": "d",
        "label": "By creating an LDAP Security Profile policy in a Policy Project specifying LDAP URL, Bind DN, credentials, and search filters"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_priv_15",
    "section": "privacy",
    "prompt": "What is the purpose of the `mqsichangeproperties` command in relation to JVM security settings?",
    "options": [
      {
        "id": "a",
        "label": "To recompile Java source code into C++"
      },
      {
        "id": "b",
        "label": "To configure JVM arguments, enable specific TLS protocol versions (e.g. TLSv1.3), or set Java security properties across integration servers"
      },
      {
        "id": "c",
        "label": "To format database storage disks"
      },
      {
        "id": "d",
        "label": "To update user home directories"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_priv_16",
    "section": "privacy",
    "prompt": "What is the function of the `CrlCertRevoc` parameter in ACE TLS connector configuration?",
    "options": [
      {
        "id": "a",
        "label": "It generates new certificates on every request"
      },
      {
        "id": "b",
        "label": "It converts CRL files into JSON format"
      },
      {
        "id": "c",
        "label": "It enables Certificate Revocation List (CRL) checking to verify that client certificates presented during mTLS have not been revoked by the issuing CA"
      },
      {
        "id": "d",
        "label": "It disables all certificate validations"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_priv_17",
    "section": "privacy",
    "prompt": "When securing database access from an ACE message flow, what is the best practice for credential management?",
    "options": [
      {
        "id": "a",
        "label": "Hardcode database passwords in ESQL DECLARE statements"
      },
      {
        "id": "b",
        "label": "Use `mqsisetdbparms` or an ACE Vault to map ODBC/JDBC datasource aliases to securely encrypted credentials, avoiding hardcoded passwords in code or properties"
      },
      {
        "id": "c",
        "label": "Pass the database password in the HTTP query string"
      },
      {
        "id": "d",
        "label": "Disable password authentication on the database server"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_priv_18",
    "section": "privacy",
    "prompt": "How does an integration architect configure an `HTTPRequest` node to use an HTTP proxy server with basic authentication?",
    "options": [
      {
        "id": "a",
        "label": "Specify the HTTP proxy URL in the node properties or `LocalEnvironment` and store proxy credentials via `mqsisetdbparms -n httpproxy::myProxy -u user -p pass` (or Vault)"
      },
      {
        "id": "b",
        "label": "Embed the proxy credentials in the HTTP URL (`http://user:pass@proxy:8080`)"
      },
      {
        "id": "c",
        "label": "Disable SSL verification"
      },
      {
        "id": "d",
        "label": "Use unencrypted Telnet"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_priv_19",
    "section": "privacy",
    "prompt": "What is the role of OAuth 2.0 Security Profiles in ACE REST APIs?",
    "options": [
      {
        "id": "a",
        "label": "To generate QR codes for mobile login"
      },
      {
        "id": "b",
        "label": "To format REST payloads into CSV"
      },
      {
        "id": "c",
        "label": "To encrypt HTTP response headers using MD5"
      },
      {
        "id": "d",
        "label": "To validate incoming OAuth Bearer access tokens against an OAuth Authorization Server (e.g. PingFederate, Keycloak, Azure AD) via token introspection or JWKS validation"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_priv_20",
    "section": "privacy",
    "prompt": "In WS-Security, what is the purpose of XML Signature (`<ds:Signature>`) applied to a SOAP message body?",
    "options": [
      {
        "id": "a",
        "label": "It compresses the SOAP body to 50% size"
      },
      {
        "id": "b",
        "label": "It translates the XML tags into French"
      },
      {
        "id": "c",
        "label": "It guarantees message integrity (detecting any tampering in transit) and non-repudiation of origin by cryptographically signing the body with the sender's private key"
      },
      {
        "id": "d",
        "label": "It changes the HTTP port to 8443"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_priv_21",
    "section": "privacy",
    "prompt": "What is the function of the `KeyAlias` property in an ACE HTTP/SOAP Request node with SSL/TLS enabled?",
    "options": [
      {
        "id": "a",
        "label": "It defines the database primary key column name"
      },
      {
        "id": "b",
        "label": "It renames the message flow in the Toolkit"
      },
      {
        "id": "c",
        "label": "It specifies which specific client certificate alias in the key repository should be presented during the mutual TLS (mTLS) handshake with the backend server"
      },
      {
        "id": "d",
        "label": "It sets the license key for the integration node"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_priv_22",
    "section": "privacy",
    "prompt": "How can an administrator restrict administrative web console access to specific IP ranges in ACE?",
    "options": [
      {
        "id": "a",
        "label": "By changing the administrator username to `admin_local`"
      },
      {
        "id": "b",
        "label": "By deleting all message flows from the server"
      },
      {
        "id": "c",
        "label": "By setting the node CCSID to 1208"
      },
      {
        "id": "d",
        "label": "By configuring IP filtering rules in `server.conf.yaml` under `AdminRESTAPI` or enforcing perimeter firewall/reverse proxy policies"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_priv_23",
    "section": "privacy",
    "prompt": "What is the purpose of the `Strict-Transport-Security` (HSTS) header in ACE HTTP output responses?",
    "options": [
      {
        "id": "a",
        "label": "To instruct web browsers that the application must only be accessed over secure HTTPS connections, preventing SSL-stripping attacks"
      },
      {
        "id": "b",
        "label": "To restrict database queries to read-only mode"
      },
      {
        "id": "c",
        "label": "To force all users to change passwords every 30 days"
      },
      {
        "id": "d",
        "label": "To compress HTTP response payloads"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_priv_24",
    "section": "privacy",
    "prompt": "What security mechanism protects against XML External Entity (XXE) attacks in ACE `XMLNSC` parser?",
    "options": [
      {
        "id": "a",
        "label": "ACE converts all XML files to PDF before parsing"
      },
      {
        "id": "b",
        "label": "The `XMLNSC` parser disables external entity resolution and DTD processing by default, preventing unauthorized file retrieval or SSRF via XML entities"
      },
      {
        "id": "c",
        "label": "ACE deletes all incoming XML files automatically"
      },
      {
        "id": "d",
        "label": "ACE requires XML files to be digitally signed with PGP"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_priv_25",
    "section": "privacy",
    "prompt": "What is the role of SAML 2.0 Token validation in ACE Security Profiles?",
    "options": [
      {
        "id": "a",
        "label": "To convert XML into JSON schemas"
      },
      {
        "id": "b",
        "label": "To format server logs into Excel spreadsheets"
      },
      {
        "id": "c",
        "label": "To calculate database storage costs"
      },
      {
        "id": "d",
        "label": "To validate signed SAML assertions passed in WS-Security headers or HTTP authorization headers to authenticate federated enterprise identities"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_priv_26",
    "section": "privacy",
    "prompt": "How does an architect secure JMS connections between IBM ACE and IBM MQ or third-party JMS providers?",
    "options": [
      {
        "id": "a",
        "label": "Use plaintext connections over public internet"
      },
      {
        "id": "b",
        "label": "Embed credentials into the JMS message body"
      },
      {
        "id": "c",
        "label": "Configure SSL/TLS cipher suites on the JMS connection factory, enable client authentication with keystores, and store credentials in ACE Vault / `mqsisetdbparms`"
      },
      {
        "id": "d",
        "label": "Disable the JMS message listener"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_priv_27",
    "section": "privacy",
    "prompt": "What is the purpose of the `ibmint create vault` command?",
    "options": [
      {
        "id": "a",
        "label": "To create a backup zip file of the source code"
      },
      {
        "id": "b",
        "label": "To initialize a secure, encrypted vault for an integration server work directory or integration node with a specified vault key"
      },
      {
        "id": "c",
        "label": "To format a USB flash drive"
      },
      {
        "id": "d",
        "label": "To create a git branch named vault"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_priv_28",
    "section": "privacy",
    "prompt": "In ACE, what is Identity Mapping in a Security Profile?",
    "options": [
      {
        "id": "a",
        "label": "The transformation of an incoming security token (e.g. an external Kerberos ticket or SAML assertion) into an internal security token (e.g. a RACF username or LDAP group) for backend authorization"
      },
      {
        "id": "b",
        "label": "Translating English user names to other languages"
      },
      {
        "id": "c",
        "label": "Mapping IP addresses to geographic country codes"
      },
      {
        "id": "d",
        "label": "Associating message IDs with database sequence numbers"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_priv_29",
    "section": "privacy",
    "prompt": "How does ACE verify that an incoming JSON Web Token (JWT) has not been tampered with?",
    "options": [
      {
        "id": "a",
        "label": "By validating the JWT signature using the public key / certificate obtained from the Identity Provider's JWKS (JSON Web Key Set) endpoint or local keystore"
      },
      {
        "id": "b",
        "label": "By checking if the token length is an even number"
      },
      {
        "id": "c",
        "label": "By comparing the token string against an MD5 hash"
      },
      {
        "id": "d",
        "label": "By converting the token into an XML tag"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_priv_30",
    "section": "privacy",
    "prompt": "What happens if a developer attempts to deploy a BAR file that has not been compiled or is missing required referenced libraries in a secure production environment?",
    "options": [
      {
        "id": "a",
        "label": "The integration server automatically downloads arbitrary code from the internet"
      },
      {
        "id": "b",
        "label": "The deployment fails with validation errors (e.g. `BIP2087E`), and no broken flows are activated in the runtime"
      },
      {
        "id": "c",
        "label": "The server executes the flow in demo mode"
      },
      {
        "id": "d",
        "label": "All existing deployed applications are deleted"
      }
    ],
    "correctOptionId": "b"
  }
];

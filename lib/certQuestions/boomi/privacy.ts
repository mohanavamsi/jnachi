import { CertQuestion } from '../types';

export const BOOMI_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "boomi_priv_01",
    "section": "privacy",
    "prompt": "In Boomi API Management, what is the role of the Boomi API Gateway?",
    "options": [
      {
        "id": "a",
        "label": "A hardware router installed in corporate offices"
      },
      {
        "id": "b",
        "label": "A dedicated runtime proxy that enforces API security policies (OAuth 2.0 / JWT, Basic Auth, API Key), rate limiting, throttling, and routing across backend Atoms and Molecules"
      },
      {
        "id": "c",
        "label": "A web browser toolbar for inspecting API JSON responses"
      },
      {
        "id": "d",
        "label": "A relational database server storing user passwords"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_priv_02",
    "section": "privacy",
    "prompt": "What is the purpose of Boomi \"Environment Extensions\" in enterprise security and deployment governance?",
    "options": [
      {
        "id": "a",
        "label": "To extend the physical dimensions of the server chassis"
      },
      {
        "id": "b",
        "label": "To install third-party plugins in Google Chrome"
      },
      {
        "id": "c",
        "label": "To externalize and override connection credentials, URLs, certificates, and process properties per environment (Dev, Test, Prod) without modifying the underlying packaged process code"
      },
      {
        "id": "d",
        "label": "To create new user accounts in AtomSphere"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_priv_03",
    "section": "privacy",
    "prompt": "How does Boomi protect sensitive passwords and API tokens configured in Process Properties or Connection components?",
    "options": [
      {
        "id": "a",
        "label": "By marking property fields or component fields as \"Encrypted\" / \"Secure\", which masks the values in the UI, encrypts them at rest using AES-256, and prevents them from printing in execution logs"
      },
      {
        "id": "b",
        "label": "By saving passwords in base64 format in text files"
      },
      {
        "id": "c",
        "label": "By emailing passwords to the administrator daily"
      },
      {
        "id": "d",
        "label": "Passwords cannot be encrypted in Boomi"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_priv_04",
    "section": "privacy",
    "prompt": "In AS2 (Applicability Statement 2) B2B integrations in Boomi, what security mechanisms ensure message confidentiality, integrity, and non-repudiation?",
    "options": [
      {
        "id": "a",
        "label": "Plaintext HTTP GET requests with MD5 hashes"
      },
      {
        "id": "b",
        "label": "Password protection on ZIP files"
      },
      {
        "id": "c",
        "label": "IP address allowlisting only"
      },
      {
        "id": "d",
        "label": "S/MIME payload encryption using the partner's public certificate, digital signature using the sender's private certificate, and Message Disposition Notifications (MDN) with MIC hashes"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_priv_05",
    "section": "privacy",
    "prompt": "Which authentication methods can be enforced on Boomi Web Services Server endpoints or via the API Gateway?",
    "options": [
      {
        "id": "a",
        "label": "Telnet login only"
      },
      {
        "id": "b",
        "label": "SMS OTP only"
      },
      {
        "id": "c",
        "label": "Basic Authentication, API Key (Account or Application-level), and JWT (JSON Web Token) / OAuth 2.0 with external Identity Providers"
      },
      {
        "id": "d",
        "label": "Anonymous open access only"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_priv_06",
    "section": "privacy",
    "prompt": "What is the function of the \"Certificate\" component in Boomi AtomSphere?",
    "options": [
      {
        "id": "a",
        "label": "A reusable component storing public X.509 SSL/TLS certificates or private key pairs for HTTPS client authentication, WS-Security, AS2 encryption, and PGP signatures"
      },
      {
        "id": "b",
        "label": "A PDF diploma awarded to certified integration developers"
      },
      {
        "id": "c",
        "label": "A license validation file for Boomi runtime"
      },
      {
        "id": "d",
        "label": "A certificate of incorporation for business compliance"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_priv_07",
    "section": "privacy",
    "prompt": "How can an administrator restrict user logins to the Boomi AtomSphere platform to corporate enterprise Single Sign-On (SSO)?",
    "options": [
      {
        "id": "a",
        "label": "Change all user passwords to match the company name"
      },
      {
        "id": "b",
        "label": "Disable internet access on the Atom"
      },
      {
        "id": "c",
        "label": "Install a hardware firewall on the client browser"
      },
      {
        "id": "d",
        "label": "Configure SAML 2.0 Single Sign-On in Account Setup and enforce \"Federated SSO Only\" for all platform users"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_priv_08",
    "section": "privacy",
    "prompt": "What is the role of Custom Roles and Privileges in Boomi AtomSphere Role-Based Access Control (RBAC)?",
    "options": [
      {
        "id": "a",
        "label": "They assign different colored themes to the UI"
      },
      {
        "id": "b",
        "label": "They allow administrators to define granular permission profiles (e.g. Build Only, Production Deployment Admin, Support/Log Viewer) and assign them to specific user groups"
      },
      {
        "id": "c",
        "label": "They configure CPU priority on the Atom server"
      },
      {
        "id": "d",
        "label": "They determine the physical office location of developers"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_priv_09",
    "section": "privacy",
    "prompt": "What audit logging feature in Boomi AtomSphere tracks administrative actions, user logins, deployment changes, and component modifications?",
    "options": [
      {
        "id": "a",
        "label": "Windows Event Viewer"
      },
      {
        "id": "b",
        "label": "Linux syslog only"
      },
      {
        "id": "c",
        "label": "Git commit history"
      },
      {
        "id": "d",
        "label": "AtomSphere Audit Log (accessible under Setup -> Audit Log or via the AtomSphere API AuditLog object)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_priv_10",
    "section": "privacy",
    "prompt": "How can an architect prevent sensitive customer data (PII) from being viewed by operations staff in Boomi Process Reporting execution logs?",
    "options": [
      {
        "id": "a",
        "label": "Delete the Atom server every night"
      },
      {
        "id": "b",
        "label": "Enable \"Purge Data Immediately\" on sensitive processes or disable Document Tracking / Extended Logging for production environments"
      },
      {
        "id": "c",
        "label": "Disconnect the Atom from the internet"
      },
      {
        "id": "d",
        "label": "Disable the Process Reporting tab in the UI"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_priv_11",
    "section": "privacy",
    "prompt": "What is the purpose of the \"IP Filter\" setting on the Boomi Shared Web Server configuration?",
    "options": [
      {
        "id": "a",
        "label": "To change the IP address of the local network router"
      },
      {
        "id": "b",
        "label": "To filter spam emails"
      },
      {
        "id": "c",
        "label": "To allow or deny incoming HTTP/REST API calls based on client IP addresses or CIDR subnet blocks"
      },
      {
        "id": "d",
        "label": "To translate IPv4 addresses into IPv6"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_priv_12",
    "section": "privacy",
    "prompt": "In Boomi API Gateway, what does a \"Contract\" (or API Plan) represent?",
    "options": [
      {
        "id": "a",
        "label": "An agreement between an API consumer application and an API that governs access keys, rate limits (calls per second), and quota limits (calls per month)"
      },
      {
        "id": "b",
        "label": "A legal employment contract for developers"
      },
      {
        "id": "c",
        "label": "A software maintenance contract with Dell/Boomi"
      },
      {
        "id": "d",
        "label": "A document that defines database schemas"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_priv_13",
    "section": "privacy",
    "prompt": "What is the role of the \"Client Certificate Authentication\" option on a Boomi Shared Web Server?",
    "options": [
      {
        "id": "a",
        "label": "It enforces Mutual TLS (mTLS), requiring calling clients to present a valid client certificate matching a trusted certificate in the Atom truststore during the TLS handshake"
      },
      {
        "id": "b",
        "label": "It generates a PDF receipt for the client"
      },
      {
        "id": "c",
        "label": "It forces users to enter a username and password in a browser prompt"
      },
      {
        "id": "d",
        "label": "It disables all encryption"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_priv_14",
    "section": "privacy",
    "prompt": "How does Boomi securely store environment extension values for secure credentials in the local runtime?",
    "options": [
      {
        "id": "a",
        "label": "They are saved in unencrypted plaintext on the desktop"
      },
      {
        "id": "b",
        "label": "They are uploaded to a public pastebin website"
      },
      {
        "id": "c",
        "label": "They are printed on server console output"
      },
      {
        "id": "d",
        "label": "Extension values are encrypted locally using the Atom's local runtime encryption key and stored in `env_name.properties` files in the Atom directory"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_priv_15",
    "section": "privacy",
    "prompt": "What is the purpose of Cross-Origin Resource Sharing (CORS) rules in Boomi API Management?",
    "options": [
      {
        "id": "a",
        "label": "To allow processes to communicate across two different continents"
      },
      {
        "id": "b",
        "label": "To specify which external web browser origins (`Access-Control-Allow-Origin`) are permitted to execute AJAX / Fetch requests against Boomi APIs"
      },
      {
        "id": "c",
        "label": "To share database tables across multiple tenants"
      },
      {
        "id": "d",
        "label": "To translate languages automatically in web pages"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_priv_16",
    "section": "privacy",
    "prompt": "When configuring the Boomi SFTP (SSH) connector, which authentication methods are supported for secure server access?",
    "options": [
      {
        "id": "a",
        "label": "OAuth 2.0 Bearer tokens only"
      },
      {
        "id": "b",
        "label": "SAML assertions only"
      },
      {
        "id": "c",
        "label": "Password Authentication and SSH Key Pair (Public/Private Key) Authentication"
      },
      {
        "id": "d",
        "label": "Unauthenticated guest access only"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_priv_17",
    "section": "privacy",
    "prompt": "What is the purpose of the \"Two-Factor Authentication\" (2FA) setting in Boomi AtomSphere account security?",
    "options": [
      {
        "id": "a",
        "label": "It requires two developers to approve every line of code"
      },
      {
        "id": "b",
        "label": "It requires platform users to provide a time-based one-time password (TOTP via authenticator app) in addition to their password when logging in without SSO"
      },
      {
        "id": "c",
        "label": "It forces processes to run on two separate servers simultaneously"
      },
      {
        "id": "d",
        "label": "It requires two separate network cables connected to the server"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_priv_18",
    "section": "privacy",
    "prompt": "In Boomi, how can an architect ensure that data in transit between an Atom and the AtomSphere platform is protected?",
    "options": [
      {
        "id": "a",
        "label": "All platform communication is strictly encrypted using TLS 1.2 or TLS 1.3 with strong cipher suites over port 443"
      },
      {
        "id": "b",
        "label": "Data is sent over unencrypted HTTP port 80"
      },
      {
        "id": "c",
        "label": "Data is transmitted via unencrypted FTP"
      },
      {
        "id": "d",
        "label": "Data is saved to physical floppy disks"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_priv_19",
    "section": "privacy",
    "prompt": "What is the function of the \"PGP Decrypt\" step in a Data Process shape?",
    "options": [
      {
        "id": "a",
        "label": "To convert PDF documents into Word format"
      },
      {
        "id": "b",
        "label": "To format text into HTML format"
      },
      {
        "id": "c",
        "label": "To compress files into RAR archives"
      },
      {
        "id": "d",
        "label": "To decrypt encrypted files using the private key and passphrase from a PGP Certificate component, verifying the digital signature of the sender"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_priv_20",
    "section": "privacy",
    "prompt": "How can an organization enforce data residency compliance using Boomi?",
    "options": [
      {
        "id": "a",
        "label": "By changing the timezone setting in the web browser"
      },
      {
        "id": "b",
        "label": "By translating processes into multiple languages"
      },
      {
        "id": "c",
        "label": "By deploying local Atoms or Molecules within the required geographic boundaries or sovereign data centers, ensuring data never leaves the country of origin during processing"
      },
      {
        "id": "d",
        "label": "Data residency cannot be controlled in Boomi"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_priv_21",
    "section": "privacy",
    "prompt": "What is the role of the \"API Key\" in Boomi API Management Developer Portal?",
    "options": [
      {
        "id": "a",
        "label": "A password to log in to the Linux operating system"
      },
      {
        "id": "b",
        "label": "A license key to install Boomi software"
      },
      {
        "id": "c",
        "label": "A unique cryptographic token generated for registered API consumer applications used to authenticate and identify API traffic at the Gateway"
      },
      {
        "id": "d",
        "label": "A WiFi network security key"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_priv_22",
    "section": "privacy",
    "prompt": "What happens when a developer tries to modify a deployed component in production without having the \"Production Deployment\" privilege?",
    "options": [
      {
        "id": "a",
        "label": "The change is saved but marked as pending approval"
      },
      {
        "id": "b",
        "label": "The entire production environment is deleted"
      },
      {
        "id": "c",
        "label": "The user is logged out permanently"
      },
      {
        "id": "d",
        "label": "AtomSphere RBAC blocks the action and displays an unauthorized permission error"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_priv_23",
    "section": "privacy",
    "prompt": "In Boomi, what is a \"Secure Particle\" or \"Boomi Protected Cloud\"?",
    "options": [
      {
        "id": "a",
        "label": "A specialized cloud runtime certified for high-compliance workloads (such as FedRAMP, HIPAA, or PCI-DSS) with isolated compute and enhanced encryption controls"
      },
      {
        "id": "b",
        "label": "A microscopic semiconductor used in Atom hardware"
      },
      {
        "id": "c",
        "label": "A software bug patch released by Boomi"
      },
      {
        "id": "d",
        "label": "A compressed zip file of process source code"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_priv_24",
    "section": "privacy",
    "prompt": "What is the purpose of the \"Shared Web Server User Management\" section on an Atom?",
    "options": [
      {
        "id": "a",
        "label": "To manage Windows active directory domain controllers"
      },
      {
        "id": "b",
        "label": "To configure specific API user accounts, passwords, API tokens, and assign allowed process paths for inbound web service listeners"
      },
      {
        "id": "c",
        "label": "To create Linux SSH accounts"
      },
      {
        "id": "d",
        "label": "To format server hard drives"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_priv_25",
    "section": "privacy",
    "prompt": "How does Boomi prevent denial of service (DoS) attacks on listener processes?",
    "options": [
      {
        "id": "a",
        "label": "By shutting down the server whenever traffic increases"
      },
      {
        "id": "b",
        "label": "By deleting incoming requests randomly"
      },
      {
        "id": "c",
        "label": "By increasing internet bandwidth automatically"
      },
      {
        "id": "d",
        "label": "Through API Gateway Rate Limiting (throttling max requests per second) and concurrent execution thread limits configured in `container.properties`"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_priv_26",
    "section": "privacy",
    "prompt": "What is the function of the \"Purge History\" setting on a Boomi Atom?",
    "options": [
      {
        "id": "a",
        "label": "To delete all process source code from Git"
      },
      {
        "id": "b",
        "label": "To clear user browser history"
      },
      {
        "id": "c",
        "label": "To automatically delete execution logs, temporary document caches, and process tracking data older than a designated number of days (e.g. 7 or 30 days) from local disk storage"
      },
      {
        "id": "d",
        "label": "To reinstall the operating system"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_priv_27",
    "section": "privacy",
    "prompt": "In Boomi API Management, what is the role of OpenID Connect (OIDC) integration?",
    "options": [
      {
        "id": "a",
        "label": "It connects the Atom to open-source database engines"
      },
      {
        "id": "b",
        "label": "It allows the API Gateway to validate incoming JWT tokens against an enterprise OIDC Identity Provider (e.g. Okta, Azure AD, PingIdentity) using JWKS public keys"
      },
      {
        "id": "c",
        "label": "It converts REST APIs into GraphQL schemas"
      },
      {
        "id": "d",
        "label": "It provides free internet access to users"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_priv_28",
    "section": "privacy",
    "prompt": "What is the purpose of the \"Execution Artifacts\" encryption feature on local Atoms?",
    "options": [
      {
        "id": "a",
        "label": "To encrypt process metadata, connector cache files, and staging data written to disk on the Atom host using AES keys"
      },
      {
        "id": "b",
        "label": "To encrypt email notifications"
      },
      {
        "id": "c",
        "label": "To format hard disk drives"
      },
      {
        "id": "d",
        "label": "To compress log files into 7-Zip archives"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_priv_29",
    "section": "privacy",
    "prompt": "How can an administrator revoke access for a compromised API key in Boomi API Management?",
    "options": [
      {
        "id": "a",
        "label": "Revoke or delete the API Key in the API Management dashboard or Developer Portal, causing subsequent requests to be rejected immediately with HTTP 403 Forbidden"
      },
      {
        "id": "b",
        "label": "Restart the entire physical server hardware"
      },
      {
        "id": "c",
        "label": "Delete all processes deployed to the Atom"
      },
      {
        "id": "d",
        "label": "Wait 30 days for the key to expire automatically"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_priv_30",
    "section": "privacy",
    "prompt": "What is the function of the \"Tracked Fields\" feature in Boomi Process Reporting?",
    "options": [
      {
        "id": "a",
        "label": "To track the physical GPS location of servers"
      },
      {
        "id": "b",
        "label": "To promote specific business identifiers (e.g. OrderNumber, CustomerID) from documents into searchable metadata in Process Reporting without storing the full payload"
      },
      {
        "id": "c",
        "label": "To measure CPU clock speed over time"
      },
      {
        "id": "d",
        "label": "To count lines of code written by developers"
      }
    ],
    "correctOptionId": "b"
  }
];

import { CertQuestion } from '../types';

export const IBM_MQ_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "ibmmq_priv_01",
    "section": "privacy",
    "prompt": "What is the primary function of IBM MQ Channel Authentication Records (CHLAUTH)?",
    "options": [
      {
        "id": "a",
        "label": "To encrypt queue manager log files on disk"
      },
      {
        "id": "b",
        "label": "To control inbound channel connections by evaluating client IP addresses, SSL/TLS certificates, remote queue manager names, and mapping or blocking privileged user IDs"
      },
      {
        "id": "c",
        "label": "To format message bodies according to XML schemas"
      },
      {
        "id": "d",
        "label": "To balance TCP network sockets across multiple NIC cards"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_priv_02",
    "section": "privacy",
    "prompt": "By default in modern IBM MQ versions, what is the effect of the default CHLAUTH rule on administrative privileged user accounts (such as `mqm`, `Administrator`, or `root`) over `SYSTEM.*` channels?",
    "options": [
      {
        "id": "a",
        "label": "Administrative access is completely unauthenticated and open to the internet"
      },
      {
        "id": "b",
        "label": "Administrative users are prompted for a one-time SMS passcode"
      },
      {
        "id": "c",
        "label": "All remote administrative access on SYSTEM.* channels is blocked by default (`TYPE(ADDRESSMAP) USERLIST('*MQADMIN') ACTION(BLOCK)`)"
      },
      {
        "id": "d",
        "label": "Administrative connections are redirected to the Dead Letter Queue"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_priv_03",
    "section": "privacy",
    "prompt": "What security feature in IBM MQ provides end-to-end message-level encryption and digital signing directly within the client/server MQI layer without code changes?",
    "options": [
      {
        "id": "a",
        "label": "IBM MQ Advanced Message Security (AMS)"
      },
      {
        "id": "b",
        "label": "Transport Layer Security (TLS 1.3)"
      },
      {
        "id": "c",
        "label": "Object Authority Manager (OAM)"
      },
      {
        "id": "d",
        "label": "Channel Exit Encryption Wrapper"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_priv_04",
    "section": "privacy",
    "prompt": "What is the purpose of IBM MQ Connection Authentication (`CONNAUTH`) and Authentication Information (`AUTHINFO`) objects?",
    "options": [
      {
        "id": "a",
        "label": "To generate SSH key pairs for remote server administration"
      },
      {
        "id": "b",
        "label": "To encrypt network packets using AES-256"
      },
      {
        "id": "c",
        "label": "To monitor listener CPU thread usage"
      },
      {
        "id": "d",
        "label": "To authenticate client user IDs and passwords against an enterprise LDAP directory or local operating system user registry"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_priv_05",
    "section": "privacy",
    "prompt": "Which command is used on Unix/Linux to grant the group \"appdev\" permission to put and get messages on a queue named \"ORDERS.QUEUE\" on queue manager \"QM1\"?",
    "options": [
      {
        "id": "a",
        "label": "grant perm appdev on ORDERS.QUEUE qmgr QM1"
      },
      {
        "id": "b",
        "label": "chmod 770 /var/mqm/qmgrs/QM1/queues/ORDERS.QUEUE"
      },
      {
        "id": "c",
        "label": "setmqaut -m QM1 -t q -n ORDERS.QUEUE -g appdev +put +get +inq +browse"
      },
      {
        "id": "d",
        "label": "alter qlocal(ORDERS.QUEUE) user(appdev) auth(all)"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_priv_06",
    "section": "privacy",
    "prompt": "Which command dumps or displays the current security authorizations for objects on a queue manager?",
    "options": [
      {
        "id": "a",
        "label": "dmpmqaut"
      },
      {
        "id": "b",
        "label": "dspmqver"
      },
      {
        "id": "c",
        "label": "runmqsc"
      },
      {
        "id": "d",
        "label": "crtmqm -listauth"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_priv_07",
    "section": "privacy",
    "prompt": "What is the function of the `SSLCIPH` parameter on an IBM MQ channel definition?",
    "options": [
      {
        "id": "a",
        "label": "It defines the SHA-256 hash of the queue manager password"
      },
      {
        "id": "b",
        "label": "It compresses message payloads using ZIP encryption"
      },
      {
        "id": "c",
        "label": "It sets the maximum number of login retries"
      },
      {
        "id": "d",
        "label": "It specifies the TLS CipherSpec (e.g. `TLS_AES_256_GCM_SHA384` or `ECDHE_RSA_AES_256_GCM_SHA384`) used for encrypting channel network traffic"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_priv_08",
    "section": "privacy",
    "prompt": "In IBM MQ TLS configuration, what is the naming convention for the queue manager personal certificate label in the Key Repository (`kdb` or `p12`)?",
    "options": [
      {
        "id": "a",
        "label": "`cert_<qmgrname>`"
      },
      {
        "id": "b",
        "label": "`ibmwebspheremq<qmgrname_in_lowercase>` (e.g., `ibmwebspheremqqm1`)"
      },
      {
        "id": "c",
        "label": "`root_ca_<qmgrname>`"
      },
      {
        "id": "d",
        "label": "`mq_tls_key_<qmgrname>`"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_priv_09",
    "section": "privacy",
    "prompt": "What does the `SSLPEER` attribute on a channel definition allow an administrator to enforce?",
    "options": [
      {
        "id": "a",
        "label": "It restricts the IP port range used for peer-to-peer routing"
      },
      {
        "id": "b",
        "label": "It forces the client to use a specific peer-to-peer torrent protocol"
      },
      {
        "id": "c",
        "label": "It rotates TLS private keys every 60 seconds"
      },
      {
        "id": "d",
        "label": "It filters incoming TLS connections by matching attributes of the client certificate’s Distinguished Name (DN) (e.g. `SSLPEER('CN=App*,OU=Finance,O=Corp,C=US')`)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_priv_10",
    "section": "privacy",
    "prompt": "What happens when `SSLCAUTH(REQUIRED)` is configured on a Server-Connection (`SVRCONN`) or Receiver (`RCVR`) channel?",
    "options": [
      {
        "id": "a",
        "label": "The channel accepts any unauthenticated plaintext connection"
      },
      {
        "id": "b",
        "label": "Mutual TLS (mTLS) is enforced: the client/sender must present a valid, trusted digital certificate during the TLS handshake"
      },
      {
        "id": "c",
        "label": "Only self-signed certificates are permitted"
      },
      {
        "id": "d",
        "label": "Passwords must be at least 32 characters in length"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_priv_11",
    "section": "privacy",
    "prompt": "Which command-line certificate management tool is supplied with IBM MQ for managing CMS (`.kdb`) and PKCS#12 (`.p12`) key repositories?",
    "options": [
      {
        "id": "a",
        "label": "openssl_mq_cli"
      },
      {
        "id": "b",
        "label": "certmgr_ibm"
      },
      {
        "id": "c",
        "label": "runmqakm / runmqktool"
      },
      {
        "id": "d",
        "label": "gsk7cmd"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_priv_12",
    "section": "privacy",
    "prompt": "In IBM MQ Advanced Message Security (AMS), which quality of protection (QOP) policy guarantees both data integrity (digital signature) and confidentiality (encryption)?",
    "options": [
      {
        "id": "a",
        "label": "`PRIVACY` (or `CONFIDENTIALITY` / `ENC` with signing)"
      },
      {
        "id": "b",
        "label": "`INTEGRITY`"
      },
      {
        "id": "c",
        "label": "`NONE`"
      },
      {
        "id": "d",
        "label": "`COMPRESS`"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_priv_13",
    "section": "privacy",
    "prompt": "How does an administrator configure CHLAUTH to map all connections from a specific subnet (e.g., `192.168.10.*`) connecting to `APP.SVRCONN` to run under non-privileged MCA user `appuser`?",
    "options": [
      {
        "id": "a",
        "label": "`SET CHLAUTH(APP.SVRCONN) TYPE(ADDRESSMAP) ADDRESS('192.168.10.*') MCAUSER('appuser') ACTION(ADD)`"
      },
      {
        "id": "b",
        "label": "`MAP IP 192.168.10.* TO appuser ON CHANNEL APP.SVRCONN`"
      },
      {
        "id": "c",
        "label": "`ALTER CHANNEL(APP.SVRCONN) IP('192.168.10.*') USER('appuser')`"
      },
      {
        "id": "d",
        "label": "`GRANT IP 192.168.10.* AS appuser`"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_priv_14",
    "section": "privacy",
    "prompt": "What is the purpose of the `REFRESH SECURITY` MQSC command?",
    "options": [
      {
        "id": "a",
        "label": "It generates new TLS certificates automatically"
      },
      {
        "id": "b",
        "label": "It restarts all active queue manager listeners"
      },
      {
        "id": "c",
        "label": "It clears all active messages from the Dead Letter Queue"
      },
      {
        "id": "d",
        "label": "It flushes and reloads the authorization cache for the Object Authority Manager (OAM) or SSL/TLS environments so that privilege changes take effect immediately"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_priv_15",
    "section": "privacy",
    "prompt": "What security risk is introduced if a Server-Connection (`SVRCONN`) channel has `MCAUSER(' ')` (blank) and no CHLAUTH rules or CONNAUTH enabled?",
    "options": [
      {
        "id": "a",
        "label": "The channel will only accept connections from local host (127.0.0.1)"
      },
      {
        "id": "b",
        "label": "Connecting client applications can assert any arbitrary operating system user ID (including root or mqm) and execute unauthorized commands"
      },
      {
        "id": "c",
        "label": "Messages will be automatically encrypted with a public key"
      },
      {
        "id": "d",
        "label": "The queue manager will immediately shut down"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_priv_16",
    "section": "privacy",
    "prompt": "Which MQSC parameter on an `AUTHINFO` object specifies whether user IDs should be checked against LDAP using case-sensitive or uppercase comparison?",
    "options": [
      {
        "id": "a",
        "label": "`CASEMODE`"
      },
      {
        "id": "b",
        "label": "`LDAPCASE`"
      },
      {
        "id": "c",
        "label": "`CHECKCL` and `FAILDLGT` / `CLASSGRP`"
      },
      {
        "id": "d",
        "label": "`STRINGTYPE`"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_priv_17",
    "section": "privacy",
    "prompt": "What is the role of the `CERTLABL` parameter on a queue manager or channel definition?",
    "options": [
      {
        "id": "a",
        "label": "It specifies the physical barcode printed on the hardware server"
      },
      {
        "id": "b",
        "label": "It allows specifying a custom certificate label from the key repository, enabling multiple certificates and channels to use different certificates on the same queue manager"
      },
      {
        "id": "c",
        "label": "It sets the email notification subject for security alerts"
      },
      {
        "id": "d",
        "label": "It defines the font used in the MQ Explorer GUI"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_priv_18",
    "section": "privacy",
    "prompt": "In IBM MQ authorization, what authority is required on a queue for an application to open it and inquire about its attributes (e.g. `MAXDEPTH`, `CURDEPTH`)?",
    "options": [
      {
        "id": "a",
        "label": "`+inq`"
      },
      {
        "id": "b",
        "label": "`+get`"
      },
      {
        "id": "c",
        "label": "`+put`"
      },
      {
        "id": "d",
        "label": "`+set`"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_priv_19",
    "section": "privacy",
    "prompt": "Which authority is required for an application to set message context fields (e.g. `UserIdentifier`, `ApplIdentityData`) in the MQMD during `MQPUT`?",
    "options": [
      {
        "id": "a",
        "label": "`+browse`"
      },
      {
        "id": "b",
        "label": "`+altusr`"
      },
      {
        "id": "c",
        "label": "`+connect`"
      },
      {
        "id": "d",
        "label": "`+setid` or `+setall`"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_priv_20",
    "section": "privacy",
    "prompt": "What is the function of the `+altusr` (Alternate User) authority on a queue manager?",
    "options": [
      {
        "id": "a",
        "label": "It allows changing user passwords in Linux"
      },
      {
        "id": "b",
        "label": "It enables automatic switching between active and standby nodes"
      },
      {
        "id": "c",
        "label": "It permits an application or gateway running under one service ID to perform MQ operations on behalf of a different specified alternate user ID"
      },
      {
        "id": "d",
        "label": "It converts client connections to HTTP"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_priv_21",
    "section": "privacy",
    "prompt": "In IBM MQ AMS, where are security policies created and stored?",
    "options": [
      {
        "id": "a",
        "label": "In the `/etc/shadow` file on Linux"
      },
      {
        "id": "b",
        "label": "In browser cookies on the client machine"
      },
      {
        "id": "c",
        "label": "In the `SYSTEM.PROTECTION.POLICY.QUEUE` using the `setmqspl` command or MQSC `SET POLICY` commands"
      },
      {
        "id": "d",
        "label": "In the DNS TXT records for the domain"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_priv_22",
    "section": "privacy",
    "prompt": "What does the `setmqspl` command do in IBM MQ?",
    "options": [
      {
        "id": "a",
        "label": "It splits a queue across two disk drives"
      },
      {
        "id": "b",
        "label": "It creates a new cluster partition"
      },
      {
        "id": "c",
        "label": "It compiles ESQL files into Java bytecode"
      },
      {
        "id": "d",
        "label": "It defines or modifies an IBM MQ Advanced Message Security (AMS) policy for a target queue (specifying signers, recipients, and encryption algorithms)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_priv_23",
    "section": "privacy",
    "prompt": "Which certificate file format contains both the private key and public certificate chain in an encrypted, portable container standard commonly used in IBM MQ?",
    "options": [
      {
        "id": "a",
        "label": "PKCS #12 (`.p12` / `.pfx`)"
      },
      {
        "id": "b",
        "label": "PEM text format without private key (`.crt`)"
      },
      {
        "id": "c",
        "label": "DER raw public key (`.der`)"
      },
      {
        "id": "d",
        "label": "JSON Web Token (`.jwt`)"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_priv_24",
    "section": "privacy",
    "prompt": "When configuring IBM MQ on Red Hat Enterprise Linux, which system group must the IBM MQ service account belong to for local queue manager administration?",
    "options": [
      {
        "id": "a",
        "label": "`wheel`"
      },
      {
        "id": "b",
        "label": "`mqm`"
      },
      {
        "id": "c",
        "label": "`admin`"
      },
      {
        "id": "d",
        "label": "`root`"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_priv_25",
    "section": "privacy",
    "prompt": "What is the role of CHLAUTH `TYPE(SSLPEERMAP)` in IBM MQ channel security?",
    "options": [
      {
        "id": "a",
        "label": "It forces channels to use self-signed certificates exclusively"
      },
      {
        "id": "b",
        "label": "It creates SSH tunnels automatically"
      },
      {
        "id": "c",
        "label": "It rotates SSL keys every 15 minutes"
      },
      {
        "id": "d",
        "label": "It maps incoming TLS connections matching specific Certificate Distinguished Name (DN) criteria to a designated MCAUSER account"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_priv_26",
    "section": "privacy",
    "prompt": "What is the purpose of the `ADOPTCHK` parameter in IBM MQ Connection Authentication (`CONNAUTH`)?",
    "options": [
      {
        "id": "a",
        "label": "It verifies whether child queues inherit parent queue configurations"
      },
      {
        "id": "b",
        "label": "It enables child process spawning on multi-core CPUs"
      },
      {
        "id": "c",
        "label": "It determines whether the authenticated user ID from `MQCSP` replaces (adopts) the operating system context user ID for subsequent authorization checks"
      },
      {
        "id": "d",
        "label": "It scans incoming messages for XML vulnerabilities"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_priv_27",
    "section": "privacy",
    "prompt": "How can an administrator disable the use of insecure, deprecated TLS ciphers (e.g. SSLv3, TLS 1.0, 3DES) across an IBM MQ installation?",
    "options": [
      {
        "id": "a",
        "label": "Disable TCP/IP networking on the host server"
      },
      {
        "id": "b",
        "label": "Set `AMQ_TLS_WEAK_CIPHER_ENABLE=0` environment variable or specify only TLS 1.2 / TLS 1.3 `SSLCIPH` values on all channel definitions"
      },
      {
        "id": "c",
        "label": "Delete the queue manager error log directory"
      },
      {
        "id": "d",
        "label": "Remove all local queues from the queue manager"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_priv_28",
    "section": "privacy",
    "prompt": "What is the purpose of Security Exit programs (`SCYEXIT`) in IBM MQ channels?",
    "options": [
      {
        "id": "a",
        "label": "Custom user-written programs invoked during channel startup to perform proprietary mutual authentication, token exchange, or access validation before normal message flow begins"
      },
      {
        "id": "b",
        "label": "Programs that execute when a server crashes unexpectedly"
      },
      {
        "id": "c",
        "label": "Firewall script generators for Cisco routers"
      },
      {
        "id": "d",
        "label": "Log compressors for old trace files"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_priv_29",
    "section": "privacy",
    "prompt": "Which event queue captures unauthorized access attempts and security check failures in IBM MQ when Authority Events are enabled (`AUTHOREV(ENABLED)`)?",
    "options": [
      {
        "id": "a",
        "label": "`SYSTEM.ADMIN.AUTH.EVENT`"
      },
      {
        "id": "b",
        "label": "`SYSTEM.ADMIN.COMMAND.QUEUE`"
      },
      {
        "id": "c",
        "label": "`SYSTEM.DEAD.LETTER.QUEUE`"
      },
      {
        "id": "d",
        "label": "`SYSTEM.DEFAULT.LOCAL.QUEUE`"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_priv_30",
    "section": "privacy",
    "prompt": "What happens when an expired TLS certificate is presented to an IBM MQ Queue Manager during a channel handshake?",
    "options": [
      {
        "id": "a",
        "label": "The queue manager ignores the expiration date if the company name matches"
      },
      {
        "id": "b",
        "label": "The TLS handshake fails immediately with an MQ reason code (such as 2393 `MQRC_SSL_INITIALIZATION_ERROR` / `AMQ9631`) and the channel terminates without transferring messages"
      },
      {
        "id": "c",
        "label": "The message is automatically stored in the Dead Letter Queue in plaintext"
      },
      {
        "id": "d",
        "label": "The certificate is renewed automatically from Let's Encrypt"
      }
    ],
    "correctOptionId": "b"
  }
];

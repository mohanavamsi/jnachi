import { Question } from '../../certTypes';

export const ibmMqPrivacyQuestions: Question[] = [
  {
    id: 'ibmmq_priv_01',
    domain: 'privacy',
    text: 'What is the primary function of IBM MQ Channel Authentication Records (CHLAUTH)?',
    options: {
      a: 'To control inbound channel connections by evaluating client IP addresses, SSL/TLS certificates, remote queue manager names, and mapping or blocking privileged user IDs',
      b: 'To encrypt queue manager log files on disk',
      c: 'To format message bodies according to XML schemas',
      d: 'To balance TCP network sockets across multiple NIC cards'
    },
    correctAnswer: 'a',
    explanation: 'CHLAUTH rules provide granular access control for inbound channels, allowing administrators to block unwanted IPs, map client certificates to specific MCAUSER IDs, and prevent unauthorized administrative access.'
  },
  {
    id: 'ibmmq_priv_02',
    domain: 'privacy',
    text: 'By default in modern IBM MQ versions, what is the effect of the default CHLAUTH rule on administrative privileged user accounts (such as `mqm`, `Administrator`, or `root`) over `SYSTEM.*` channels?',
    options: {
      a: 'All remote administrative access on SYSTEM.* channels is blocked by default (`TYPE(ADDRESSMAP) USERLIST(\'*MQADMIN\') ACTION(BLOCK)`)',
      b: 'Administrative access is completely unauthenticated and open to the internet',
      c: 'Administrative users are prompted for a one-time SMS passcode',
      d: 'Administrative connections are redirected to the Dead Letter Queue'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ includes default CHLAUTH rules that block privileged accounts (`*MQADMIN`) from connecting remotely via generic channels to enforce least privilege.'
  },
  {
    id: 'ibmmq_priv_03',
    domain: 'privacy',
    text: 'What security feature in IBM MQ provides end-to-end message-level encryption and digital signing directly within the client/server MQI layer without code changes?',
    options: {
      a: 'IBM MQ Advanced Message Security (AMS)',
      b: 'Transport Layer Security (TLS 1.3)',
      c: 'Object Authority Manager (OAM)',
      d: 'Channel Exit Encryption Wrapper'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ Advanced Message Security (AMS) provides policy-driven, end-to-end cryptographic protection (signing and encryption) for messages at rest on queues and in-flight across networks without application modifications.'
  },
  {
    id: 'ibmmq_priv_04',
    domain: 'privacy',
    text: 'What is the purpose of IBM MQ Connection Authentication (`CONNAUTH`) and Authentication Information (`AUTHINFO`) objects?',
    options: {
      a: 'To authenticate client user IDs and passwords against an enterprise LDAP directory or local operating system user registry',
      b: 'To generate SSH key pairs for remote server administration',
      c: 'To encrypt network packets using AES-256',
      d: 'To monitor listener CPU thread usage'
    },
    correctAnswer: 'a',
    explanation: '`CONNAUTH` configures the queue manager to validate credentials (user ID and password) supplied in the `MQCSP` connection security parameters via OS user accounts or central LDAP repositories.'
  },
  {
    id: 'ibmmq_priv_05',
    domain: 'privacy',
    text: 'Which command is used on Unix/Linux to grant the group "appdev" permission to put and get messages on a queue named "ORDERS.QUEUE" on queue manager "QM1"?',
    options: {
      a: 'setmqaut -m QM1 -t q -n ORDERS.QUEUE -g appdev +put +get +inq +browse',
      b: 'grant perm appdev on ORDERS.QUEUE qmgr QM1',
      c: 'chmod 770 /var/mqm/qmgrs/QM1/queues/ORDERS.QUEUE',
      d: 'alter qlocal(ORDERS.QUEUE) user(appdev) auth(all)'
    },
    correctAnswer: 'a',
    explanation: '`setmqaut` is the authorization command for the Object Authority Manager (OAM) to assign permissions (`+put`, `+get`, etc.) to groups (`-g`) or principals (`-p`).'
  },
  {
    id: 'ibmmq_priv_06',
    domain: 'privacy',
    text: 'Which command dumps or displays the current security authorizations for objects on a queue manager?',
    options: {
      a: 'dmpmqaut',
      b: 'dspmqver',
      c: 'runmqsc',
      d: 'crtmqm -listauth'
    },
    correctAnswer: 'a',
    explanation: '`dmpmqaut` outputs the current access control profile definitions configured on the Object Authority Manager (OAM).'
  },
  {
    id: 'ibmmq_priv_07',
    domain: 'privacy',
    text: 'What is the function of the `SSLCIPH` parameter on an IBM MQ channel definition?',
    options: {
      a: 'It specifies the TLS CipherSpec (e.g. `TLS_AES_256_GCM_SHA384` or `ECDHE_RSA_AES_256_GCM_SHA384`) used for encrypting channel network traffic',
      b: 'It defines the SHA-256 hash of the queue manager password',
      c: 'It compresses message payloads using ZIP encryption',
      d: 'It sets the maximum number of login retries'
    },
    correctAnswer: 'a',
    explanation: '`SSLCIPH` defines the TLS CipherSpec used during the TLS handshake between the channel sender and receiver.'
  },
  {
    id: 'ibmmq_priv_08',
    domain: 'privacy',
    text: 'In IBM MQ TLS configuration, what is the naming convention for the queue manager personal certificate label in the Key Repository (`kdb` or `p12`)?',
    options: {
      a: '`ibmwebspheremq<qmgrname_in_lowercase>` (e.g., `ibmwebspheremqqm1`)',
      b: '`cert_<qmgrname>`',
      c: '`root_ca_<qmgrname>`',
      d: '`mq_tls_key_<qmgrname>`'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ requires queue manager personal certificate labels to adhere to the format `ibmwebspheremq<lowercase_qmgr_name>` (or configured via `CERTLABL`).'
  },
  {
    id: 'ibmmq_priv_09',
    domain: 'privacy',
    text: 'What does the `SSLPEER` attribute on a channel definition allow an administrator to enforce?',
    options: {
      a: 'It filters incoming TLS connections by matching attributes of the client certificate’s Distinguished Name (DN) (e.g. `SSLPEER(\'CN=App*,OU=Finance,O=Corp,C=US\')`)',
      b: 'It restricts the IP port range used for peer-to-peer routing',
      c: 'It forces the client to use a specific peer-to-peer torrent protocol',
      d: 'It rotates TLS private keys every 60 seconds'
    },
    correctAnswer: 'a',
    explanation: '`SSLPEER` checks the Distinguished Name (DN) presented in the remote peer’s digital certificate during TLS handshake, rejecting connections that do not match the filter criteria.'
  },
  {
    id: 'ibmmq_priv_10',
    domain: 'privacy',
    text: 'What happens when `SSLCAUTH(REQUIRED)` is configured on a Server-Connection (`SVRCONN`) or Receiver (`RCVR`) channel?',
    options: {
      a: 'Mutual TLS (mTLS) is enforced: the client/sender must present a valid, trusted digital certificate during the TLS handshake',
      b: 'The channel accepts any unauthenticated plaintext connection',
      c: 'Only self-signed certificates are permitted',
      d: 'Passwords must be at least 32 characters in length'
    },
    correctAnswer: 'a',
    explanation: '`SSLCAUTH(REQUIRED)` mandates mutual TLS authentication, requiring the connecting remote peer to provide a valid certificate issued by a trusted Certificate Authority.'
  },
  {
    id: 'ibmmq_priv_11',
    domain: 'privacy',
    text: 'Which command-line certificate management tool is supplied with IBM MQ for managing CMS (`.kdb`) and PKCS#12 (`.p12`) key repositories?',
    options: {
      a: 'runmqakm / runmqktool',
      b: 'openssl_mq_cli',
      c: 'certmgr_ibm',
      d: 'gsk7cmd'
    },
    correctAnswer: 'a',
    explanation: '`runmqakm` (and `runmqktool` for Java/JKS) is the standard GSKit command-line utility bundled with IBM MQ to create key repositories, request CSRs, and import certificates.'
  },
  {
    id: 'ibmmq_priv_12',
    domain: 'privacy',
    text: 'In IBM MQ Advanced Message Security (AMS), which quality of protection (QOP) policy guarantees both data integrity (digital signature) and confidentiality (encryption)?',
    options: {
      a: '`PRIVACY` (or `CONFIDENTIALITY` / `ENC` with signing)',
      b: '`INTEGRITY`',
      c: '`NONE`',
      d: '`COMPRESS`'
    },
    correctAnswer: 'a',
    explanation: 'AMS `PRIVACY` policy provides both digital signature (verifying sender authenticity and preventing tampering) and asymmetric envelope encryption (ensuring only intended recipients can read the message).'
  },
  {
    id: 'ibmmq_priv_13',
    domain: 'privacy',
    text: 'How does an administrator configure CHLAUTH to map all connections from a specific subnet (e.g., `192.168.10.*`) connecting to `APP.SVRCONN` to run under non-privileged MCA user `appuser`?',
    options: {
      a: '`SET CHLAUTH(APP.SVRCONN) TYPE(ADDRESSMAP) ADDRESS(\'192.168.10.*\') MCAUSER(\'appuser\') ACTION(ADD)`',
      b: '`MAP IP 192.168.10.* TO appuser ON CHANNEL APP.SVRCONN`',
      c: '`ALTER CHANNEL(APP.SVRCONN) IP(\'192.168.10.*\') USER(\'appuser\')`',
      d: '`GRANT IP 192.168.10.* AS appuser`'
    },
    correctAnswer: 'a',
    explanation: '`SET CHLAUTH` with `TYPE(ADDRESSMAP)` maps inbound network IP patterns to designated local non-privileged user accounts (`MCAUSER`).'
  },
  {
    id: 'ibmmq_priv_14',
    domain: 'privacy',
    text: 'What is the purpose of the `REFRESH SECURITY` MQSC command?',
    options: {
      a: 'It flushes and reloads the authorization cache for the Object Authority Manager (OAM) or SSL/TLS environments so that privilege changes take effect immediately',
      b: 'It generates new TLS certificates automatically',
      c: 'It restarts all active queue manager listeners',
      d: 'It clears all active messages from the Dead Letter Queue'
    },
    correctAnswer: 'a',
    explanation: '`REFRESH SECURITY` flushes cached authorization credentials in memory, ensuring changes made via `setmqaut` or SSL key repositories become active immediately.'
  },
  {
    id: 'ibmmq_priv_15',
    domain: 'privacy',
    text: 'What security risk is introduced if a Server-Connection (`SVRCONN`) channel has `MCAUSER(\' \')` (blank) and no CHLAUTH rules or CONNAUTH enabled?',
    options: {
      a: 'Connecting client applications can assert any arbitrary operating system user ID (including root or mqm) and execute unauthorized commands',
      b: 'The channel will only accept connections from local host (127.0.0.1)',
      c: 'Messages will be automatically encrypted with a public key',
      d: 'The queue manager will immediately shut down'
    },
    correctAnswer: 'a',
    explanation: 'A blank MCAUSER without security filtering trusts whatever user ID the client supplies in the MQMD/MQCD, enabling malicious clients to impersonate privileged accounts.'
  },
  {
    id: 'ibmmq_priv_16',
    domain: 'privacy',
    text: 'Which MQSC parameter on an `AUTHINFO` object specifies whether user IDs should be checked against LDAP using case-sensitive or uppercase comparison?',
    options: {
      a: '`CHECKCL` and `FAILDLGT` / `CLASSGRP`',
      b: '`CASEMODE`',
      c: '`LDAPCASE`',
      d: '`STRINGTYPE`'
    },
    correctAnswer: 'a',
    explanation: '`AUTHINFO` objects use connection authentication parameters (`AUTHTYPE(CRSOCK)` / `IDPWLDAP`) and attributes like `CHECKCL` to configure user and group resolution.'
  },
  {
    id: 'ibmmq_priv_17',
    domain: 'privacy',
    text: 'What is the role of the `CERTLABL` parameter on a queue manager or channel definition?',
    options: {
      a: 'It allows specifying a custom certificate label from the key repository, enabling multiple certificates and channels to use different certificates on the same queue manager',
      b: 'It specifies the physical barcode printed on the hardware server',
      c: 'It sets the email notification subject for security alerts',
      d: 'It defines the font used in the MQ Explorer GUI'
    },
    correctAnswer: 'a',
    explanation: '`CERTLABL` overrides the default `ibmwebspheremq<qmgr>` certificate label, allowing individual channels or queue managers to use specific designated certificates.'
  },
  {
    id: 'ibmmq_priv_18',
    domain: 'privacy',
    text: 'In IBM MQ authorization, what authority is required on a queue for an application to open it and inquire about its attributes (e.g. `MAXDEPTH`, `CURDEPTH`)?',
    options: {
      a: '`+inq`',
      b: '`+get`',
      c: '`+put`',
      d: '`+set`'
    },
    correctAnswer: 'a',
    explanation: '`+inq` (Inquire authority) allows applications to make `MQINQ` calls to query object attributes.'
  },
  {
    id: 'ibmmq_priv_19',
    domain: 'privacy',
    text: 'Which authority is required for an application to set message context fields (e.g. `UserIdentifier`, `ApplIdentityData`) in the MQMD during `MQPUT`?',
    options: {
      a: '`+setid` or `+setall`',
      b: '`+browse`',
      c: '`+altusr`',
      d: '`+connect`'
    },
    correctAnswer: 'a',
    explanation: '`+setid` allows setting identity context, while `+setall` allows setting all context fields (origin and identity) in the MQMD on `MQPUT`.'
  },
  {
    id: 'ibmmq_priv_20',
    domain: 'privacy',
    text: 'What is the function of the `+altusr` (Alternate User) authority on a queue manager?',
    options: {
      a: 'It permits an application or gateway running under one service ID to perform MQ operations on behalf of a different specified alternate user ID',
      b: 'It allows changing user passwords in Linux',
      c: 'It enables automatic switching between active and standby nodes',
      d: 'It converts client connections to HTTP'
    },
    correctAnswer: 'a',
    explanation: '`+altusr` allows a trusted intermediary (such as an integration broker) to specify an alternate `SecurityId` in `MQOD` to validate access rights on behalf of an end client.'
  },
  {
    id: 'ibmmq_priv_21',
    domain: 'privacy',
    text: 'In IBM MQ AMS, where are security policies created and stored?',
    options: {
      a: 'In the `SYSTEM.PROTECTION.POLICY.QUEUE` using the `setmqspl` command or MQSC `SET POLICY` commands',
      b: 'In the `/etc/shadow` file on Linux',
      c: 'In browser cookies on the client machine',
      d: 'In the DNS TXT records for the domain'
    },
    correctAnswer: 'a',
    explanation: 'AMS policies are managed using `setmqspl` (or MQSC `SET POLICY`) and stored in the queue manager’s system protection queues.'
  },
  {
    id: 'ibmmq_priv_22',
    domain: 'privacy',
    text: 'What does the `setmqspl` command do in IBM MQ?',
    options: {
      a: 'It defines or modifies an IBM MQ Advanced Message Security (AMS) policy for a target queue (specifying signers, recipients, and encryption algorithms)',
      b: 'It splits a queue across two disk drives',
      c: 'It creates a new cluster partition',
      d: 'It compiles ESQL files into Java bytecode'
    },
    correctAnswer: 'a',
    explanation: '`setmqspl` (Set MQ Security Policy) configures AMS encryption and signing rules on specific queues.'
  },
  {
    id: 'ibmmq_priv_23',
    domain: 'privacy',
    text: 'Which certificate file format contains both the private key and public certificate chain in an encrypted, portable container standard commonly used in IBM MQ?',
    options: {
      a: 'PKCS #12 (`.p12` / `.pfx`)',
      b: 'PEM text format without private key (`.crt`)',
      c: 'DER raw public key (`.der`)',
      d: 'JSON Web Token (`.jwt`)'
    },
    correctAnswer: 'a',
    explanation: 'PKCS #12 (`.p12`) is standard across modern IBM MQ for bundling private keys, identity certificates, and intermediate CA chains.'
  },
  {
    id: 'ibmmq_priv_24',
    domain: 'privacy',
    text: 'When configuring IBM MQ on Red Hat Enterprise Linux, which system group must the IBM MQ service account belong to for local queue manager administration?',
    options: {
      a: '`mqm`',
      b: '`wheel`',
      c: '`admin`',
      d: '`root`'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ uses the `mqm` group on POSIX systems; users belonging to the `mqm` group have full administrative authority over local queue managers.'
  },
  {
    id: 'ibmmq_priv_25',
    domain: 'privacy',
    text: 'What is the role of CHLAUTH `TYPE(SSLPEERMAP)` in IBM MQ channel security?',
    options: {
      a: 'It maps incoming TLS connections matching specific Certificate Distinguished Name (DN) criteria to a designated MCAUSER account',
      b: 'It forces channels to use self-signed certificates exclusively',
      c: 'It creates SSH tunnels automatically',
      d: 'It rotates SSL keys every 15 minutes'
    },
    correctAnswer: 'a',
    explanation: '`TYPE(SSLPEERMAP)` allows mapping client certificates (by subject DN) directly to specific authorized `MCAUSER` identities.'
  },
  {
    id: 'ibmmq_priv_26',
    domain: 'privacy',
    text: 'What is the purpose of the `ADOPTCHK` parameter in IBM MQ Connection Authentication (`CONNAUTH`)?',
    options: {
      a: 'It determines whether the authenticated user ID from `MQCSP` replaces (adopts) the operating system context user ID for subsequent authorization checks',
      b: 'It verifies whether child queues inherit parent queue configurations',
      c: 'It enables child process spawning on multi-core CPUs',
      d: 'It scans incoming messages for XML vulnerabilities'
    },
    correctAnswer: 'a',
    explanation: '`ADOPTCHK(ALL)` or `ADOPTCHK(CHECKALL)` ensures the queue manager adopts the authenticated connection credentials as the context identity for all downstream authorization checks.'
  },
  {
    id: 'ibmmq_priv_27',
    domain: 'privacy',
    text: 'How can an administrator disable the use of insecure, deprecated TLS ciphers (e.g. SSLv3, TLS 1.0, 3DES) across an IBM MQ installation?',
    options: {
      a: 'Set `AMQ_TLS_WEAK_CIPHER_ENABLE=0` environment variable or specify only TLS 1.2 / TLS 1.3 `SSLCIPH` values on all channel definitions',
      b: 'Disable TCP/IP networking on the host server',
      c: 'Delete the queue manager error log directory',
      d: 'Remove all local queues from the queue manager'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ disables weak ciphers by default and allows administrators to enforce modern TLS 1.2/1.3 CipherSpecs across all channel definitions.'
  },
  {
    id: 'ibmmq_priv_28',
    domain: 'privacy',
    text: 'What is the purpose of Security Exit programs (`SCYEXIT`) in IBM MQ channels?',
    options: {
      a: 'Custom user-written programs invoked during channel startup to perform proprietary mutual authentication, token exchange, or access validation before normal message flow begins',
      b: 'Programs that execute when a server crashes unexpectedly',
      c: 'Firewall script generators for Cisco routers',
      d: 'Log compressors for old trace files'
    },
    correctAnswer: 'a',
    explanation: 'Security exits (`SCYEXIT`) provide extension hooks during channel initialization to execute custom authentication protocols or proprietary encryption handshakes.'
  },
  {
    id: 'ibmmq_priv_29',
    domain: 'privacy',
    text: 'Which event queue captures unauthorized access attempts and security check failures in IBM MQ when Authority Events are enabled (`AUTHOREV(ENABLED)`)?',
    options: {
      a: '`SYSTEM.ADMIN.AUTH.EVENT`',
      b: '`SYSTEM.ADMIN.COMMAND.QUEUE`',
      c: '`SYSTEM.DEAD.LETTER.QUEUE`',
      d: '`SYSTEM.DEFAULT.LOCAL.QUEUE`'
    },
    correctAnswer: 'a',
    explanation: 'When `AUTHOREV(ENABLED)` is set, the queue manager writes authorization failure events to `SYSTEM.ADMIN.AUTH.EVENT` for SIEM and security monitoring.'
  },
  {
    id: 'ibmmq_priv_30',
    domain: 'privacy',
    text: 'What happens when an expired TLS certificate is presented to an IBM MQ Queue Manager during a channel handshake?',
    options: {
      a: 'The TLS handshake fails immediately with an MQ reason code (such as 2393 `MQRC_SSL_INITIALIZATION_ERROR` / `AMQ9631`) and the channel terminates without transferring messages',
      b: 'The queue manager ignores the expiration date if the company name matches',
      c: 'The message is automatically stored in the Dead Letter Queue in plaintext',
      d: 'The certificate is renewed automatically from Let\'s Encrypt'
    },
    correctAnswer: 'a',
    explanation: 'GSKit strictly validates certificate validity periods; an expired certificate causes immediate TLS handshake failure and channel termination.'
  }
];

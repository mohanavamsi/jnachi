import { Question } from '../../certTypes';

export const ibmMqLiteracyQuestions: Question[] = [
  {
    id: 'ibmmq_lit_01',
    domain: 'literacy',
    text: 'In IBM MQ architecture, which object represents the fundamental point of interaction that manages queues, channels, logs, and processes message transactions?',
    options: {
      a: 'Queue Manager (QMGR)',
      b: 'Channel Initiator',
      c: 'Listener Daemon',
      d: 'Message Broker Node'
    },
    correctAnswer: 'a',
    explanation: 'The Queue Manager (QMGR) is the primary engine in IBM MQ that hosts queue storage, manages transaction logging, coordinates channels, and processes API calls.'
  },
  {
    id: 'ibmmq_lit_02',
    domain: 'literacy',
    text: 'What type of queue object does not physically hold messages on the local queue manager, but instead acts as a routing pointer to a target queue on a remote queue manager?',
    options: {
      a: 'Remote Queue Definition (QREMOTE)',
      b: 'Local Queue (QLOCAL)',
      c: 'Model Queue (QMODEL)',
      d: 'Alias Queue (QALIAS)'
    },
    correctAnswer: 'a',
    explanation: 'A Remote Queue definition (`QREMOTE`) is an object that routes messages destined for a remote queue manager by directing them to a transmission queue (XMITQ).'
  },
  {
    id: 'ibmmq_lit_03',
    domain: 'literacy',
    text: 'Which channel type is used by client applications (e.g. Java, .NET, C#) connecting remotely to a Queue Manager over TCP/IP without hosting their own local queue manager?',
    options: {
      a: 'Server-Connection Channel (SVRCONN)',
      b: 'Sender Channel (SDR)',
      c: 'Cluster-Receiver Channel (CLUSRCVR)',
      d: 'Receiver Channel (RCVR)'
    },
    correctAnswer: 'a',
    explanation: 'Client applications connect to an IBM MQ Queue Manager across a network using a Server-Connection (`SVRCONN`) channel.'
  },
  {
    id: 'ibmmq_lit_04',
    domain: 'literacy',
    text: 'What is the function of the MQMD (Message Descriptor) data structure in IBM MQ?',
    options: {
      a: 'It carries critical metadata about the message, such as MsgId, CorrelId, Persistence, Expiry, Format, and UserIdentifier',
      b: 'It defines the TLS cipher suite used for TCP packets',
      c: 'It stores the queue manager recovery log files on disk',
      d: 'It acts as the JSON schema validator for payload content'
    },
    correctAnswer: 'a',
    explanation: 'The MQMD (Message Descriptor) is a header structure attached to every IBM MQ message, containing properties like message identity, correlation, priority, persistence, expiry, and format.'
  },
  {
    id: 'ibmmq_lit_05',
    domain: 'literacy',
    text: 'Which command-line interface tool is standard in IBM MQ administration for interactively executing MQSC (MQ Script) commands on a local queue manager named "QM1"?',
    options: {
      a: 'runmqsc QM1',
      b: 'dmpmqaut -m QM1',
      c: 'crtmqm QM1',
      d: 'strmqm QM1'
    },
    correctAnswer: 'a',
    explanation: '`runmqsc` starts the MQSC command interpreter for managing MQ objects (queues, channels, listeners) on the target queue manager.'
  },
  {
    id: 'ibmmq_lit_06',
    domain: 'literacy',
    text: 'What happens to a message placed on a queue with `PERSISTENCE = MQPER_PERSISTENT` if the hosting Queue Manager restarts abruptly?',
    options: {
      a: 'The message is recovered from the transaction log upon restart and is not lost',
      b: 'The message is automatically purged from memory',
      c: 'The message is moved to the system trash directory',
      d: 'The message is converted to an uncompressed text file'
    },
    correctAnswer: 'a',
    explanation: 'Persistent messages (`MQPER_PERSISTENT`) are synchronously logged to persistent recovery logs on disk, ensuring durability across queue manager restarts or crashes.'
  },
  {
    id: 'ibmmq_lit_07',
    domain: 'literacy',
    text: 'What type of IBM MQ queue provides a template from which dynamic queues are instantiated at runtime when an application opens the queue?',
    options: {
      a: 'Model Queue (QMODEL)',
      b: 'Alias Queue (QALIAS)',
      c: 'Transmission Queue (XMITQ)',
      d: 'Cluster Queue (QCLUSTER)'
    },
    correctAnswer: 'a',
    explanation: 'A Model Queue (`QMODEL`) defines the default attributes for temporary or permanent dynamic queues created dynamically by client applications (e.g., for reply-to queues).'
  },
  {
    id: 'ibmmq_lit_08',
    domain: 'literacy',
    text: 'In IBM MQ point-to-point inter-queue manager communication, which specialized local queue stores messages temporarily while they wait for a Sender channel to transmit them across the network?',
    options: {
      a: 'Transmission Queue (USAGE = XMITQ)',
      b: 'Dead Letter Queue (USAGE = DLQ)',
      c: 'Initiation Queue (USAGE = INITQ)',
      d: 'Command Queue (SYSTEM.ADMIN.COMMAND.QUEUE)'
    },
    correctAnswer: 'a',
    explanation: 'A Transmission Queue is a local queue with attribute `USAGE(XMITQ)` that holds messages before they are transmitted across a Sender-Receiver message channel.'
  },
  {
    id: 'ibmmq_lit_09',
    domain: 'literacy',
    text: 'Which MQSC command is used to display the current depth (number of messages currently in the queue) of a local queue named "ORDERS.IN"?',
    options: {
      a: 'DISPLAY QSTATUS(ORDERS.IN) CURDEPTH',
      b: 'SHOW QUEUE ORDERS.IN COUNT',
      c: 'GET QDEPTH ORDERS.IN',
      d: 'SELECT COUNT(*) FROM ORDERS.IN'
    },
    correctAnswer: 'a',
    explanation: '`DISPLAY QSTATUS(queue_name) CURDEPTH` displays the current queue status, including current depth (`CURDEPTH`), open input counts, and open output counts.'
  },
  {
    id: 'ibmmq_lit_10',
    domain: 'literacy',
    text: 'What is the role of an Alias Queue (QALIAS) in IBM MQ object modeling?',
    options: {
      a: 'It provides an alternative name and access-control redirection layer pointing to a target local or remote queue without exposing the underlying physical queue name',
      b: 'It creates a synchronized real-time copy of messages across two queue managers',
      c: 'It runs binary compression on message bodies',
      d: 'It acts as an HTTP proxy for REST clients'
    },
    correctAnswer: 'a',
    explanation: 'An Alias Queue (`QALIAS`) points to a base queue or topic, allowing decoupling, security separation, or transparent target queue reorganization without altering application code.'
  },
  {
    id: 'ibmmq_lit_11',
    domain: 'literacy',
    text: 'Which IBM MQ API verb is used by an application to connect to a queue manager instance?',
    options: {
      a: 'MQCONN / MQCONNX',
      b: 'MQOPEN',
      c: 'MQPUT',
      d: 'MQBEGIN'
    },
    correctAnswer: 'a',
    explanation: '`MQCONN` or `MQCONNX` (with extended connection options) establishes a logical connection between an application program and an IBM MQ queue manager.'
  },
  {
    id: 'ibmmq_lit_12',
    domain: 'literacy',
    text: 'What is the purpose of the `MQPUT` and `MQGET` MQI functions?',
    options: {
      a: 'MQPUT inserts a message onto an open queue, and MQGET retrieves or removes a message from an open queue',
      b: 'MQPUT creates a queue manager on disk, and MQGET deletes it',
      c: 'MQPUT starts a channel, and MQGET stops a listener',
      d: 'MQPUT encrypts a TLS certificate, and MQGET decrypts it'
    },
    correctAnswer: 'a',
    explanation: '`MQPUT` puts a message (MQMD header + payload) onto a queue/topic, and `MQGET` consumes or browses messages from an open queue.'
  },
  {
    id: 'ibmmq_lit_13',
    domain: 'literacy',
    text: 'In the IBM MQ Message Descriptor (MQMD), which field is used in request-reply messaging patterns to match a reply message with its corresponding original request?',
    options: {
      a: 'CorrelId (Correlation Identifier)',
      b: 'AccountingToken',
      c: 'Encoding',
      d: 'BackoutCount'
    },
    correctAnswer: 'a',
    explanation: 'In request-reply architectures, the responder copies the request’s `MsgId` into the reply’s `CorrelId`, allowing the requester to retrieve the matching reply using `MQGET` by CorrelId.'
  },
  {
    id: 'ibmmq_lit_14',
    domain: 'literacy',
    text: 'What type of channel is paired with a Sender (`SDR`) channel on the receiving Queue Manager to accept inbound messages across a network link?',
    options: {
      a: 'Receiver Channel (RCVR)',
      b: 'Server-Connection Channel (SVRCONN)',
      c: 'Requester Channel (RQSTR)',
      d: 'Client-Connection Channel (CLNTCONN)'
    },
    correctAnswer: 'a',
    explanation: 'A point-to-point message channel is a unidirectional link formed by a Sender (`SDR`) channel on the source queue manager connecting to a matching Receiver (`RCVR`) channel on the destination queue manager.'
  },
  {
    id: 'ibmmq_lit_15',
    domain: 'literacy',
    text: 'What is the function of the IBM MQ Listener process (e.g. `runmqlsr`)?',
    options: {
      a: 'It listens on a designated network port (default 1414) for incoming TCP/IP connection requests and starts the appropriate channel programs',
      b: 'It scans queue files for virus signatures',
      c: 'It aggregates JSON metrics for Prometheus scraping',
      d: 'It writes memory dumps when queue depth reaches 100%'
    },
    correctAnswer: 'a',
    explanation: 'The Listener process monitors network ports (standard port 1414) and initiates channel worker processes when remote queue managers or clients connect.'
  },
  {
    id: 'ibmmq_lit_16',
    domain: 'literacy',
    text: 'Which MQMD field determines the time in tenths of a second after which a message is automatically discarded by the Queue Manager if not consumed?',
    options: {
      a: 'Expiry',
      b: 'MsgSeqNumber',
      c: 'Feedback',
      d: 'Persistence'
    },
    correctAnswer: 'a',
    explanation: '`MQMD.Expiry` specifies the message lifetime in tenths of a second. Once expired, the message is discarded or routed to a dead letter queue if report options require it.'
  },
  {
    id: 'ibmmq_lit_17',
    domain: 'literacy',
    text: 'What format identifier is commonly specified in `MQMD.Format` when the message body consists of character text requiring code page conversion (CCSID conversion)?',
    options: {
      a: 'MQFMT_STRING',
      b: 'MQFMT_NONE',
      c: 'MQFMT_ADMIN',
      d: 'MQFMT_DEAD_LETTER_HEADER'
    },
    correctAnswer: 'a',
    explanation: '`MQFMT_STRING` indicates that the message payload consists entirely of character string data, enabling automatic character set (CCSID) data conversion by MQGET with `MQGMO_CONVERT`.'
  },
  {
    id: 'ibmmq_lit_18',
    domain: 'literacy',
    text: 'What is the Programmable Command Formats (PCF) interface in IBM MQ?',
    options: {
      a: 'A structured message protocol allowing administrative applications to query, create, and manage MQ objects programmatically over standard MQ queues',
      b: 'A programming language used exclusively for writing mainframe triggers',
      c: 'A proprietary database storage engine used by queue managers',
      d: 'An SSL certificate generation command'
    },
    correctAnswer: 'a',
    explanation: 'PCF (Programmable Command Formats) defines structured binary message formats sent to `SYSTEM.ADMIN.COMMAND.QUEUE` for automated programmatic MQ administration.'
  },
  {
    id: 'ibmmq_lit_19',
    domain: 'literacy',
    text: 'Which command is used on Linux/Unix to display the status and execution state of all Queue Managers on the host system?',
    options: {
      a: 'dspmq',
      b: 'chkstatus -a',
      c: 'mqstat -all',
      d: 'runmqsc -status'
    },
    correctAnswer: 'a',
    explanation: '`dspmq` displays all queue managers defined on the system along with their current operational status (e.g., Running, Ended immediately, Standby).'
  },
  {
    id: 'ibmmq_lit_20',
    domain: 'literacy',
    text: 'What is the default TCP/IP port assigned to IBM MQ listeners by IANA?',
    options: {
      a: '1414',
      b: '7800',
      c: '9092',
      d: '5672'
    },
    correctAnswer: 'a',
    explanation: 'Port 1414 is the standard default TCP/IP port used by IBM MQ queue manager listeners.'
  },
  {
    id: 'ibmmq_lit_21',
    domain: 'literacy',
    text: 'In IBM MQ, what is the default maximum message size (`MAXMSGL`) that can be configured on a queue or queue manager?',
    options: {
      a: '100 MB (104,857,600 bytes)',
      b: '4 MB (4,194,304 bytes)',
      c: '1 GB',
      d: '64 KB'
    },
    correctAnswer: 'a',
    explanation: 'The maximum message length (`MAXMSGL`) supported in IBM MQ is 100 MB (104,857,600 bytes).'
  },
  {
    id: 'ibmmq_lit_22',
    domain: 'literacy',
    text: 'What is a Client Channel Definition Table (CCDT) in IBM MQ client connectivity?',
    options: {
      a: 'A binary or JSON configuration file containing connection details (endpoints, channels, weights, cipher specs) used by MQ clients to locate and connect to queue managers',
      b: 'A relational database table containing user passwords',
      c: 'A log file containing channel error traces',
      d: 'A list of blocked IP addresses'
    },
    correctAnswer: 'a',
    explanation: 'A CCDT (in binary format or JSON in modern MQ) provides client applications with client-connection channel definitions, failover groups, and load balancing configurations.'
  },
  {
    id: 'ibmmq_lit_23',
    domain: 'literacy',
    text: 'Which MQSC command alters a local queue named "INVOICES" to disable applications from putting new messages onto it while still allowing messages to be retrieved?',
    options: {
      a: 'ALTER QLOCAL(INVOICES) PUT(DISABLED)',
      b: 'ALTER QLOCAL(INVOICES) GET(DISABLED)',
      c: 'STOP QUEUE INVOICES PUT',
      d: 'SET QLOCAL(INVOICES) READONLY(TRUE)'
    },
    correctAnswer: 'a',
    explanation: '`ALTER QLOCAL(INVOICES) PUT(DISABLED)` prevents any application from putting new messages onto the queue while preserving `GET(ENABLED)` for consuming existing messages.'
  },
  {
    id: 'ibmmq_lit_24',
    domain: 'literacy',
    text: 'What is the role of the `MQGMO_BROWSE_FIRST` and `MQGMO_BROWSE_NEXT` options in an `MQGET` call?',
    options: {
      a: 'They allow an application to read messages non-destructively from a queue without removing them',
      b: 'They open a web browser pointing to the queue manager dashboard',
      c: 'They sort all messages in the queue in reverse chronological order',
      d: 'They convert EBCDIC payloads to UTF-8 without reading them'
    },
    correctAnswer: 'a',
    explanation: 'Browse options in `MQGET` inspect messages sequentially on the queue without removing them, preserving the messages for subsequent transactional consumers.'
  },
  {
    id: 'ibmmq_lit_25',
    domain: 'literacy',
    text: 'What does the Coded Character Set Identifier (CCSID) in the MQMD structure define?',
    options: {
      a: 'The character encoding scheme (e.g. 1208 for UTF-8, 819 for ISO-8859-1, 37 for EBCDIC) of character data in the message header and string payload',
      b: 'The symmetric encryption algorithm applied to the payload',
      c: 'The geographic data center region of the queue manager',
      d: 'The customer account number associated with the API call'
    },
    correctAnswer: 'a',
    explanation: 'The CCSID field defines the code page / character encoding of character data in the message, enabling automatic data conversion between heterogeneous platforms (e.g. z/OS EBCDIC to Linux UTF-8).'
  },
  {
    id: 'ibmmq_lit_26',
    domain: 'literacy',
    text: 'Which MQSC command is used to create a new local queue named "PAYMENTS.PENDING" with a maximum depth of 50,000 messages?',
    options: {
      a: 'DEFINE QLOCAL(PAYMENTS.PENDING) MAXDEPTH(50000) REPLACE',
      b: 'CREATE QUEUE PAYMENTS.PENDING DEPTH=50000',
      c: 'ADD QLOCAL PAYMENTS.PENDING -limit 50000',
      d: 'NEW QLOCAL(PAYMENTS.PENDING) SIZE(50000)'
    },
    correctAnswer: 'a',
    explanation: 'The standard MQSC command to create a local queue with specified maximum depth is `DEFINE QLOCAL(name) MAXDEPTH(value)`.'
  },
  {
    id: 'ibmmq_lit_27',
    domain: 'literacy',
    text: 'In IBM MQ Publish/Subscribe architecture, what object represents the administrative node in the topic hierarchy where publications are sent and subscriptions are registered?',
    options: {
      a: 'Topic Object (TOPIC)',
      b: 'Queue Alias (QALIAS)',
      c: 'Nametag Table (NAMELIST)',
      d: 'Process Definition (PROCESS)'
    },
    correctAnswer: 'a',
    explanation: 'Topic objects (`TOPIC`) define administrative properties and security access controls for nodes in the topic tree for Pub/Sub messaging.'
  },
  {
    id: 'ibmmq_lit_28',
    domain: 'literacy',
    text: 'What is the purpose of an IBM MQ Namelist (`NAMELIST`) object?',
    options: {
      a: 'A list containing names of other MQ objects (such as cluster names or queue names) referenced collectively by queues or channels',
      b: 'A list of registered user passwords',
      c: 'A hosts file mapping IP addresses to domain names',
      d: 'A list of deprecated MQSC commands'
    },
    correctAnswer: 'a',
    explanation: 'A `NAMELIST` object stores a list of object names (e.g. multiple cluster names for a queue or channel belonging to multiple clusters).'
  },
  {
    id: 'ibmmq_lit_29',
    domain: 'literacy',
    text: 'What is the utility command used in IBM MQ to start a queue manager named "QMGR_PROD"?',
    options: {
      a: 'strmqm QMGR_PROD',
      b: 'runmqsc QMGR_PROD -start',
      c: 'startmqm QMGR_PROD',
      d: 'bootmq QMGR_PROD'
    },
    correctAnswer: 'a',
    explanation: '`strmqm` is the operating system command used to start an IBM MQ queue manager.'
  },
  {
    id: 'ibmmq_lit_30',
    domain: 'literacy',
    text: 'What is the function of the `endmqm` command when stopping a Queue Manager?',
    options: {
      a: 'It shuts down the queue manager, allowing controlled quiescing (`endmqm -c`), immediate shutdown (`endmqm -i`), or preemptive abort (`endmqm -p`)',
      b: 'It permanently deletes all queue manager files from disk',
      c: 'It deletes all persistent messages on all queues',
      d: 'It disconnects only client connections while keeping channels open'
    },
    correctAnswer: 'a',
    explanation: '`endmqm` stops a queue manager with options for controlled quiesce (`-c`, waiting for apps to disconnect), immediate (`-i`, rolling back in-flight units of work), or preemptive (`-p`).'
  }
];

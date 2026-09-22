import { CertQuestion } from '../types';

export const IBM_MQ_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "ibmmq_lit_01",
    "section": "literacy",
    "prompt": "In IBM MQ architecture, which object represents the fundamental point of interaction that manages queues, channels, logs, and processes message transactions?",
    "options": [
      {
        "id": "a",
        "label": "Channel Initiator"
      },
      {
        "id": "b",
        "label": "Queue Manager (QMGR)"
      },
      {
        "id": "c",
        "label": "Listener Daemon"
      },
      {
        "id": "d",
        "label": "Message Broker Node"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_lit_02",
    "section": "literacy",
    "prompt": "What type of queue object does not physically hold messages on the local queue manager, but instead acts as a routing pointer to a target queue on a remote queue manager?",
    "options": [
      {
        "id": "a",
        "label": "Local Queue (QLOCAL)"
      },
      {
        "id": "b",
        "label": "Model Queue (QMODEL)"
      },
      {
        "id": "c",
        "label": "Remote Queue Definition (QREMOTE)"
      },
      {
        "id": "d",
        "label": "Alias Queue (QALIAS)"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_lit_03",
    "section": "literacy",
    "prompt": "Which channel type is used by client applications (e.g. Java, .NET, C#) connecting remotely to a Queue Manager over TCP/IP without hosting their own local queue manager?",
    "options": [
      {
        "id": "a",
        "label": "Server-Connection Channel (SVRCONN)"
      },
      {
        "id": "b",
        "label": "Sender Channel (SDR)"
      },
      {
        "id": "c",
        "label": "Cluster-Receiver Channel (CLUSRCVR)"
      },
      {
        "id": "d",
        "label": "Receiver Channel (RCVR)"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_lit_04",
    "section": "literacy",
    "prompt": "What is the function of the MQMD (Message Descriptor) data structure in IBM MQ?",
    "options": [
      {
        "id": "a",
        "label": "It defines the TLS cipher suite used for TCP packets"
      },
      {
        "id": "b",
        "label": "It stores the queue manager recovery log files on disk"
      },
      {
        "id": "c",
        "label": "It acts as the JSON schema validator for payload content"
      },
      {
        "id": "d",
        "label": "It carries critical metadata about the message, such as MsgId, CorrelId, Persistence, Expiry, Format, and UserIdentifier"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_lit_05",
    "section": "literacy",
    "prompt": "Which command-line interface tool is standard in IBM MQ administration for interactively executing MQSC (MQ Script) commands on a local queue manager named \"QM1\"?",
    "options": [
      {
        "id": "a",
        "label": "dmpmqaut -m QM1"
      },
      {
        "id": "b",
        "label": "crtmqm QM1"
      },
      {
        "id": "c",
        "label": "runmqsc QM1"
      },
      {
        "id": "d",
        "label": "strmqm QM1"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_lit_06",
    "section": "literacy",
    "prompt": "What happens to a message placed on a queue with `PERSISTENCE = MQPER_PERSISTENT` if the hosting Queue Manager restarts abruptly?",
    "options": [
      {
        "id": "a",
        "label": "The message is recovered from the transaction log upon restart and is not lost"
      },
      {
        "id": "b",
        "label": "The message is automatically purged from memory"
      },
      {
        "id": "c",
        "label": "The message is moved to the system trash directory"
      },
      {
        "id": "d",
        "label": "The message is converted to an uncompressed text file"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_lit_07",
    "section": "literacy",
    "prompt": "What type of IBM MQ queue provides a template from which dynamic queues are instantiated at runtime when an application opens the queue?",
    "options": [
      {
        "id": "a",
        "label": "Alias Queue (QALIAS)"
      },
      {
        "id": "b",
        "label": "Transmission Queue (XMITQ)"
      },
      {
        "id": "c",
        "label": "Cluster Queue (QCLUSTER)"
      },
      {
        "id": "d",
        "label": "Model Queue (QMODEL)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_lit_08",
    "section": "literacy",
    "prompt": "In IBM MQ point-to-point inter-queue manager communication, which specialized local queue stores messages temporarily while they wait for a Sender channel to transmit them across the network?",
    "options": [
      {
        "id": "a",
        "label": "Dead Letter Queue (USAGE = DLQ)"
      },
      {
        "id": "b",
        "label": "Transmission Queue (USAGE = XMITQ)"
      },
      {
        "id": "c",
        "label": "Initiation Queue (USAGE = INITQ)"
      },
      {
        "id": "d",
        "label": "Command Queue (SYSTEM.ADMIN.COMMAND.QUEUE)"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_lit_09",
    "section": "literacy",
    "prompt": "Which MQSC command is used to display the current depth (number of messages currently in the queue) of a local queue named \"ORDERS.IN\"?",
    "options": [
      {
        "id": "a",
        "label": "SHOW QUEUE ORDERS.IN COUNT"
      },
      {
        "id": "b",
        "label": "GET QDEPTH ORDERS.IN"
      },
      {
        "id": "c",
        "label": "SELECT COUNT(*) FROM ORDERS.IN"
      },
      {
        "id": "d",
        "label": "DISPLAY QSTATUS(ORDERS.IN) CURDEPTH"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_lit_10",
    "section": "literacy",
    "prompt": "What is the role of an Alias Queue (QALIAS) in IBM MQ object modeling?",
    "options": [
      {
        "id": "a",
        "label": "It creates a synchronized real-time copy of messages across two queue managers"
      },
      {
        "id": "b",
        "label": "It provides an alternative name and access-control redirection layer pointing to a target local or remote queue without exposing the underlying physical queue name"
      },
      {
        "id": "c",
        "label": "It runs binary compression on message bodies"
      },
      {
        "id": "d",
        "label": "It acts as an HTTP proxy for REST clients"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_lit_11",
    "section": "literacy",
    "prompt": "Which IBM MQ API verb is used by an application to connect to a queue manager instance?",
    "options": [
      {
        "id": "a",
        "label": "MQOPEN"
      },
      {
        "id": "b",
        "label": "MQPUT"
      },
      {
        "id": "c",
        "label": "MQCONN / MQCONNX"
      },
      {
        "id": "d",
        "label": "MQBEGIN"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_lit_12",
    "section": "literacy",
    "prompt": "What is the purpose of the `MQPUT` and `MQGET` MQI functions?",
    "options": [
      {
        "id": "a",
        "label": "MQPUT inserts a message onto an open queue, and MQGET retrieves or removes a message from an open queue"
      },
      {
        "id": "b",
        "label": "MQPUT creates a queue manager on disk, and MQGET deletes it"
      },
      {
        "id": "c",
        "label": "MQPUT starts a channel, and MQGET stops a listener"
      },
      {
        "id": "d",
        "label": "MQPUT encrypts a TLS certificate, and MQGET decrypts it"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_lit_13",
    "section": "literacy",
    "prompt": "In the IBM MQ Message Descriptor (MQMD), which field is used in request-reply messaging patterns to match a reply message with its corresponding original request?",
    "options": [
      {
        "id": "a",
        "label": "CorrelId (Correlation Identifier)"
      },
      {
        "id": "b",
        "label": "AccountingToken"
      },
      {
        "id": "c",
        "label": "Encoding"
      },
      {
        "id": "d",
        "label": "BackoutCount"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_lit_14",
    "section": "literacy",
    "prompt": "What type of channel is paired with a Sender (`SDR`) channel on the receiving Queue Manager to accept inbound messages across a network link?",
    "options": [
      {
        "id": "a",
        "label": "Server-Connection Channel (SVRCONN)"
      },
      {
        "id": "b",
        "label": "Requester Channel (RQSTR)"
      },
      {
        "id": "c",
        "label": "Client-Connection Channel (CLNTCONN)"
      },
      {
        "id": "d",
        "label": "Receiver Channel (RCVR)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_lit_15",
    "section": "literacy",
    "prompt": "What is the function of the IBM MQ Listener process (e.g. `runmqlsr`)?",
    "options": [
      {
        "id": "a",
        "label": "It scans queue files for virus signatures"
      },
      {
        "id": "b",
        "label": "It listens on a designated network port (default 1414) for incoming TCP/IP connection requests and starts the appropriate channel programs"
      },
      {
        "id": "c",
        "label": "It aggregates JSON metrics for Prometheus scraping"
      },
      {
        "id": "d",
        "label": "It writes memory dumps when queue depth reaches 100%"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_lit_16",
    "section": "literacy",
    "prompt": "Which MQMD field determines the time in tenths of a second after which a message is automatically discarded by the Queue Manager if not consumed?",
    "options": [
      {
        "id": "a",
        "label": "MsgSeqNumber"
      },
      {
        "id": "b",
        "label": "Feedback"
      },
      {
        "id": "c",
        "label": "Expiry"
      },
      {
        "id": "d",
        "label": "Persistence"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_lit_17",
    "section": "literacy",
    "prompt": "What format identifier is commonly specified in `MQMD.Format` when the message body consists of character text requiring code page conversion (CCSID conversion)?",
    "options": [
      {
        "id": "a",
        "label": "MQFMT_NONE"
      },
      {
        "id": "b",
        "label": "MQFMT_STRING"
      },
      {
        "id": "c",
        "label": "MQFMT_ADMIN"
      },
      {
        "id": "d",
        "label": "MQFMT_DEAD_LETTER_HEADER"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_lit_18",
    "section": "literacy",
    "prompt": "What is the Programmable Command Formats (PCF) interface in IBM MQ?",
    "options": [
      {
        "id": "a",
        "label": "A structured message protocol allowing administrative applications to query, create, and manage MQ objects programmatically over standard MQ queues"
      },
      {
        "id": "b",
        "label": "A programming language used exclusively for writing mainframe triggers"
      },
      {
        "id": "c",
        "label": "A proprietary database storage engine used by queue managers"
      },
      {
        "id": "d",
        "label": "An SSL certificate generation command"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_lit_19",
    "section": "literacy",
    "prompt": "Which command is used on Linux/Unix to display the status and execution state of all Queue Managers on the host system?",
    "options": [
      {
        "id": "a",
        "label": "chkstatus -a"
      },
      {
        "id": "b",
        "label": "mqstat -all"
      },
      {
        "id": "c",
        "label": "runmqsc -status"
      },
      {
        "id": "d",
        "label": "dspmq"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_lit_20",
    "section": "literacy",
    "prompt": "What is the default TCP/IP port assigned to IBM MQ listeners by IANA?",
    "options": [
      {
        "id": "a",
        "label": "7800"
      },
      {
        "id": "b",
        "label": "9092"
      },
      {
        "id": "c",
        "label": "1414"
      },
      {
        "id": "d",
        "label": "5672"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_lit_21",
    "section": "literacy",
    "prompt": "In IBM MQ, what is the default maximum message size (`MAXMSGL`) that can be configured on a queue or queue manager?",
    "options": [
      {
        "id": "a",
        "label": "4 MB (4,194,304 bytes)"
      },
      {
        "id": "b",
        "label": "1 GB"
      },
      {
        "id": "c",
        "label": "100 MB (104,857,600 bytes)"
      },
      {
        "id": "d",
        "label": "64 KB"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_lit_22",
    "section": "literacy",
    "prompt": "What is a Client Channel Definition Table (CCDT) in IBM MQ client connectivity?",
    "options": [
      {
        "id": "a",
        "label": "A relational database table containing user passwords"
      },
      {
        "id": "b",
        "label": "A log file containing channel error traces"
      },
      {
        "id": "c",
        "label": "A list of blocked IP addresses"
      },
      {
        "id": "d",
        "label": "A binary or JSON configuration file containing connection details (endpoints, channels, weights, cipher specs) used by MQ clients to locate and connect to queue managers"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_lit_23",
    "section": "literacy",
    "prompt": "Which MQSC command alters a local queue named \"INVOICES\" to disable applications from putting new messages onto it while still allowing messages to be retrieved?",
    "options": [
      {
        "id": "a",
        "label": "ALTER QLOCAL(INVOICES) PUT(DISABLED)"
      },
      {
        "id": "b",
        "label": "ALTER QLOCAL(INVOICES) GET(DISABLED)"
      },
      {
        "id": "c",
        "label": "STOP QUEUE INVOICES PUT"
      },
      {
        "id": "d",
        "label": "SET QLOCAL(INVOICES) READONLY(TRUE)"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_lit_24",
    "section": "literacy",
    "prompt": "What is the role of the `MQGMO_BROWSE_FIRST` and `MQGMO_BROWSE_NEXT` options in an `MQGET` call?",
    "options": [
      {
        "id": "a",
        "label": "They open a web browser pointing to the queue manager dashboard"
      },
      {
        "id": "b",
        "label": "They allow an application to read messages non-destructively from a queue without removing them"
      },
      {
        "id": "c",
        "label": "They sort all messages in the queue in reverse chronological order"
      },
      {
        "id": "d",
        "label": "They convert EBCDIC payloads to UTF-8 without reading them"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_lit_25",
    "section": "literacy",
    "prompt": "What does the Coded Character Set Identifier (CCSID) in the MQMD structure define?",
    "options": [
      {
        "id": "a",
        "label": "The symmetric encryption algorithm applied to the payload"
      },
      {
        "id": "b",
        "label": "The geographic data center region of the queue manager"
      },
      {
        "id": "c",
        "label": "The customer account number associated with the API call"
      },
      {
        "id": "d",
        "label": "The character encoding scheme (e.g. 1208 for UTF-8, 819 for ISO-8859-1, 37 for EBCDIC) of character data in the message header and string payload"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_lit_26",
    "section": "literacy",
    "prompt": "Which MQSC command is used to create a new local queue named \"PAYMENTS.PENDING\" with a maximum depth of 50,000 messages?",
    "options": [
      {
        "id": "a",
        "label": "CREATE QUEUE PAYMENTS.PENDING DEPTH=50000"
      },
      {
        "id": "b",
        "label": "ADD QLOCAL PAYMENTS.PENDING -limit 50000"
      },
      {
        "id": "c",
        "label": "DEFINE QLOCAL(PAYMENTS.PENDING) MAXDEPTH(50000) REPLACE"
      },
      {
        "id": "d",
        "label": "NEW QLOCAL(PAYMENTS.PENDING) SIZE(50000)"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_lit_27",
    "section": "literacy",
    "prompt": "In IBM MQ Publish/Subscribe architecture, what object represents the administrative node in the topic hierarchy where publications are sent and subscriptions are registered?",
    "options": [
      {
        "id": "a",
        "label": "Queue Alias (QALIAS)"
      },
      {
        "id": "b",
        "label": "Topic Object (TOPIC)"
      },
      {
        "id": "c",
        "label": "Nametag Table (NAMELIST)"
      },
      {
        "id": "d",
        "label": "Process Definition (PROCESS)"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_lit_28",
    "section": "literacy",
    "prompt": "What is the purpose of an IBM MQ Namelist (`NAMELIST`) object?",
    "options": [
      {
        "id": "a",
        "label": "A list containing names of other MQ objects (such as cluster names or queue names) referenced collectively by queues or channels"
      },
      {
        "id": "b",
        "label": "A list of registered user passwords"
      },
      {
        "id": "c",
        "label": "A hosts file mapping IP addresses to domain names"
      },
      {
        "id": "d",
        "label": "A list of deprecated MQSC commands"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_lit_29",
    "section": "literacy",
    "prompt": "What is the utility command used in IBM MQ to start a queue manager named \"QMGR_PROD\"?",
    "options": [
      {
        "id": "a",
        "label": "strmqm QMGR_PROD"
      },
      {
        "id": "b",
        "label": "runmqsc QMGR_PROD -start"
      },
      {
        "id": "c",
        "label": "startmqm QMGR_PROD"
      },
      {
        "id": "d",
        "label": "bootmq QMGR_PROD"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_lit_30",
    "section": "literacy",
    "prompt": "What is the function of the `endmqm` command when stopping a Queue Manager?",
    "options": [
      {
        "id": "a",
        "label": "It permanently deletes all queue manager files from disk"
      },
      {
        "id": "b",
        "label": "It shuts down the queue manager, allowing controlled quiescing (`endmqm -c`), immediate shutdown (`endmqm -i`), or preemptive abort (`endmqm -p`)"
      },
      {
        "id": "c",
        "label": "It deletes all persistent messages on all queues"
      },
      {
        "id": "d",
        "label": "It disconnects only client connections while keeping channels open"
      }
    ],
    "correctOptionId": "b"
  }
];

import { CertQuestion } from '../types';

export const IBM_MQ_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "ibmmq_aut_01",
    "section": "automation",
    "prompt": "In an IBM MQ Cluster, what is the minimum recommended number of Full Repository queue managers required for high availability and metadata redundancy?",
    "options": [
      {
        "id": "a",
        "label": "One Full Repository"
      },
      {
        "id": "b",
        "label": "Two Full Repositories"
      },
      {
        "id": "c",
        "label": "Five Full Repositories"
      },
      {
        "id": "d",
        "label": "Every queue manager in the cluster must be a Full Repository"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_aut_02",
    "section": "automation",
    "prompt": "Which two channel definitions are explicitly required on a queue manager to join an existing IBM MQ cluster?",
    "options": [
      {
        "id": "a",
        "label": "A Server-Connection channel (`SVRCONN`) and a Client-Connection channel (`CLNTCONN`)"
      },
      {
        "id": "b",
        "label": "Two point-to-point Sender channels (`SDR`)"
      },
      {
        "id": "c",
        "label": "A Cluster-Receiver channel (`CLUSRCVR`) and a Cluster-Sender channel (`CLUSSDR`) to an existing Full Repository"
      },
      {
        "id": "d",
        "label": "A Receiver channel (`RCVR`) and an Initiation channel (`INITQ`)"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_aut_03",
    "section": "automation",
    "prompt": "What is the function of the IBM MQ Dead Letter Queue Handler utility (`runmqdlq`)?",
    "options": [
      {
        "id": "a",
        "label": "It processes messages from the Dead Letter Queue based on configurable rules (rules table), resending, deleting, or archiving messages according to their reason code and header attributes"
      },
      {
        "id": "b",
        "label": "It permanently drops all malformed messages without logging"
      },
      {
        "id": "c",
        "label": "It restarts failed sender channels automatically"
      },
      {
        "id": "d",
        "label": "It converts MQMD headers into JSON strings"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_aut_04",
    "section": "automation",
    "prompt": "In IBM MQ Message Triggering, what event occurs on an Initiation Queue (`INITQ`) when trigger conditions are satisfied on a triggered local queue?",
    "options": [
      {
        "id": "a",
        "label": "The Queue Manager restarts the local TCP listener"
      },
      {
        "id": "b",
        "label": "The Queue Manager drops all in-flight units of work"
      },
      {
        "id": "c",
        "label": "The Queue Manager sends an email alert to the system admin"
      },
      {
        "id": "d",
        "label": "The Queue Manager writes a Trigger Message containing application and process parameters onto the Initiation Queue"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_aut_05",
    "section": "automation",
    "prompt": "What is the difference between Trigger Type `FIRST`, `EVERY`, and `DEPTH` in IBM MQ triggering configuration?",
    "options": [
      {
        "id": "a",
        "label": "`FIRST` triggers on the first day of the month; `EVERY` runs hourly; `DEPTH` runs when disk space is full"
      },
      {
        "id": "b",
        "label": "`FIRST` is for persistent messages only; `EVERY` is for non-persistent only"
      },
      {
        "id": "c",
        "label": "`FIRST` generates a trigger message when queue depth increases from 0 to 1; `EVERY` generates one on every message put; `DEPTH` generates one when queue depth reaches `TRIGDPTH`"
      },
      {
        "id": "d",
        "label": "`DEPTH` triggers when channel bandwidth drops below 10%"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_aut_06",
    "section": "automation",
    "prompt": "How does IBM MQ Cluster Workload Balancing distribute messages when multiple instances of a cluster queue exist across different queue managers?",
    "options": [
      {
        "id": "a",
        "label": "By default, using a round-robin algorithm with channel status and availability awareness, customizable via cluster workload exits or attributes (`CLWLWGHT`, `CLWLRANK`)"
      },
      {
        "id": "b",
        "label": "By broadcasting all messages simultaneously to every cluster queue manager"
      },
      {
        "id": "c",
        "label": "By sending all traffic exclusively to the queue manager with the highest CPU clock speed"
      },
      {
        "id": "d",
        "label": "By hashing the client IP address"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_aut_07",
    "section": "automation",
    "prompt": "What header structure is prepended to a message when it is routed to the Dead Letter Queue (DLQ) by the Queue Manager or a message channel agent?",
    "options": [
      {
        "id": "a",
        "label": "MQIIH (IMS Information Header)"
      },
      {
        "id": "b",
        "label": "MQRFH2 (Rules and Formatting Header)"
      },
      {
        "id": "c",
        "label": "MQCIH (CICS Information Header)"
      },
      {
        "id": "d",
        "label": "MQDLH (Dead Letter Header)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_aut_08",
    "section": "automation",
    "prompt": "Which feature in IBM MQ allows an application to break up a message exceeding 100 MB into smaller logical chunks and assemble them upon retrieval?",
    "options": [
      {
        "id": "a",
        "label": "Automatic GZIP chunking"
      },
      {
        "id": "b",
        "label": "Message Segmentation and Message Grouping (`MQMF_SEGMENTATION_ALLOWED`)"
      },
      {
        "id": "c",
        "label": "TCP socket multi-streaming"
      },
      {
        "id": "d",
        "label": "Database BLOB pagination"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_aut_09",
    "section": "automation",
    "prompt": "What is the purpose of the IBM MQ administrative REST API (`https://<host>:9443/ibmmq/rest/v1/`)?",
    "options": [
      {
        "id": "a",
        "label": "It replaces all TCP/IP listeners with HTTP web servers permanently"
      },
      {
        "id": "b",
        "label": "It converts MQMD headers into PDF certificates"
      },
      {
        "id": "c",
        "label": "It acts as an SMTP mail server"
      },
      {
        "id": "d",
        "label": "It provides standard HTTP REST endpoints to administer MQ objects, inspect queue statistics, and perform message PUT/GET operations using JSON payloads"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_aut_10",
    "section": "automation",
    "prompt": "When configuring a triggered background service on Linux, which utility program is run as a Trigger Monitor to listen on an Initiation Queue and start target programs?",
    "options": [
      {
        "id": "a",
        "label": "runmqdlq"
      },
      {
        "id": "b",
        "label": "runmqtrm"
      },
      {
        "id": "c",
        "label": "runmqras"
      },
      {
        "id": "d",
        "label": "amqsget"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_aut_11",
    "section": "automation",
    "prompt": "In IBM MQ publish/subscribe clusters, what is the role of Topic Host Routing?",
    "options": [
      {
        "id": "a",
        "label": "It assigns DNS names to client TCP listeners"
      },
      {
        "id": "b",
        "label": "It deletes inactive topic subscriptions after 10 minutes"
      },
      {
        "id": "c",
        "label": "It restricts publication traffic routing only through designated topic host queue managers rather than direct point-to-point mesh channels across all cluster members"
      },
      {
        "id": "d",
        "label": "It forces all subscribers to use SSL 3.0"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_aut_12",
    "section": "automation",
    "prompt": "What header structure is standard in IBM MQ for carrying JMS properties, user metadata, and XML folders between JMS clients and MQ native applications?",
    "options": [
      {
        "id": "a",
        "label": "MQRFH2 (Rules and Formatting Header 2)"
      },
      {
        "id": "b",
        "label": "MQWIH (Work Information Header)"
      },
      {
        "id": "c",
        "label": "MQDH (Distribution Header)"
      },
      {
        "id": "d",
        "label": "MQTM (Trigger Message)"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_aut_13",
    "section": "automation",
    "prompt": "What occurs when an application retrieves messages using `MQGMO_LOGICAL_ORDER` on a grouped message stream (`MQMF_MSG_IN_GROUP`)?",
    "options": [
      {
        "id": "a",
        "label": "The queue manager returns messages in the exact logical order they belong within the group, regardless of physical position or arrival time in the queue"
      },
      {
        "id": "b",
        "label": "The messages are sorted alphabetically by MsgId"
      },
      {
        "id": "c",
        "label": "The messages are grouped by client IP address"
      },
      {
        "id": "d",
        "label": "The messages are stored in reverse chronological order"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_aut_14",
    "section": "automation",
    "prompt": "Which attribute on an IBM MQ cluster queue allows an architect to bind an application’s session so that all subsequent messages in a logical unit of work go to the same queue manager?",
    "options": [
      {
        "id": "a",
        "label": "`DEFBIND(NOTFIXED)`"
      },
      {
        "id": "b",
        "label": "`DEFBIND(ROUNDROBIN)`"
      },
      {
        "id": "c",
        "label": "`DEFBIND(RANDOM)`"
      },
      {
        "id": "d",
        "label": "`DEFBIND(OPEN)`"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_aut_15",
    "section": "automation",
    "prompt": "What is the purpose of the IBM MQ Bridge for Salesforce (or runmqsfb)?",
    "options": [
      {
        "id": "a",
        "label": "It imports Salesforce Apex code into queue manager memory"
      },
      {
        "id": "b",
        "label": "It synchronizes events between Salesforce Platform Events / CDC and IBM MQ queues/topics bidirectionally without custom integration code"
      },
      {
        "id": "c",
        "label": "It creates Salesforce user accounts from MQ users"
      },
      {
        "id": "d",
        "label": "It formats IBM MQ logs into Salesforce Chatter posts"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_aut_16",
    "section": "automation",
    "prompt": "In IBM MQ, what happens when a message is put with `MQRO_EXPIRATION_WITH_FULL_DATA` report option and the message expires on the target queue?",
    "options": [
      {
        "id": "a",
        "label": "The message is converted to an unformatted binary log file"
      },
      {
        "id": "b",
        "label": "The queue manager terminates immediately"
      },
      {
        "id": "c",
        "label": "An expiration report message containing the original message payload is generated and sent to the specified `ReplyToQ` / `ReplyToQMgr`"
      },
      {
        "id": "d",
        "label": "The sender receives a synchronous HTTP 410 Gone error"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_aut_17",
    "section": "automation",
    "prompt": "Which MQSC command is used to suspend a queue manager named \"QM_BRANCH\" from active participation in an IBM MQ cluster named \"CORP_CLUSTER\"?",
    "options": [
      {
        "id": "a",
        "label": "STOP CLUSTER(CORP_CLUSTER) QMGR(QM_BRANCH)"
      },
      {
        "id": "b",
        "label": "SUSPEND QMGR CLUSTER(CORP_CLUSTER)"
      },
      {
        "id": "c",
        "label": "ALTER QMGR CLUSTER(CORP_CLUSTER) STATE(PAUSED)"
      },
      {
        "id": "d",
        "label": "DETACH QMGR FROM CLUSTER CORP_CLUSTER"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_aut_18",
    "section": "automation",
    "prompt": "What is the function of the `RESUME QMGR CLUSTER(cluster_name)` MQSC command?",
    "options": [
      {
        "id": "a",
        "label": "It informs Full Repositories that the suspended queue manager is once again available to receive cluster workload traffic"
      },
      {
        "id": "b",
        "label": "It unfreezes all locked database rows"
      },
      {
        "id": "c",
        "label": "It recovers corrupt persistent transaction logs"
      },
      {
        "id": "d",
        "label": "It clears all messages from the Dead Letter Queue"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_aut_19",
    "section": "automation",
    "prompt": "What is the purpose of the `MQPMO_RESPONSE_VALUE` options (`MQPMO_SYNC_RESPONSE`, `MQPMO_ASYNC_RESPONSE`) in `MQPUT` operations?",
    "options": [
      {
        "id": "a",
        "label": "They enable automated audio alerts on message delivery"
      },
      {
        "id": "b",
        "label": "They configure SSL handshake renegotiation intervals"
      },
      {
        "id": "c",
        "label": "They convert text payloads to XML documents"
      },
      {
        "id": "d",
        "label": "They control whether client applications wait synchronously for server confirmation of each message put or use asynchronous putting for higher throughput"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_aut_20",
    "section": "automation",
    "prompt": "In an IBM MQ cluster, what is the role of Cluster Channels (`CLUSSDR` and `CLUSRCVR`) auto-definition (`CHAD`)?",
    "options": [
      {
        "id": "a",
        "label": "It creates local user accounts on Linux automatically"
      },
      {
        "id": "b",
        "label": "It generates TLS certificates on the fly without CA signing"
      },
      {
        "id": "c",
        "label": "When a queue manager needs to send a message to another cluster member, it automatically defines and starts the necessary `CLUSSDR` channel dynamically based on repository data"
      },
      {
        "id": "d",
        "label": "It backs up queue definitions to cloud object storage"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_aut_21",
    "section": "automation",
    "prompt": "Which event message category in IBM MQ alerts monitoring tools when channel status changes (e.g., channel stopped or retry threshold reached)?",
    "options": [
      {
        "id": "a",
        "label": "Performance Events"
      },
      {
        "id": "b",
        "label": "Logger Events"
      },
      {
        "id": "c",
        "label": "Channel Events (enabled via `ALTER QMGR CHLEV(ENABLED)`)"
      },
      {
        "id": "d",
        "label": "Bridge Events"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_aut_22",
    "section": "automation",
    "prompt": "What is the purpose of Queue Manager Performance Events (`PERFMEV(ENABLED)`) in IBM MQ?",
    "options": [
      {
        "id": "a",
        "label": "They benchmark CPU and GPU clock cycles"
      },
      {
        "id": "b",
        "label": "They automatically compress images in message payloads"
      },
      {
        "id": "c",
        "label": "They generate Grafana dashboards automatically"
      },
      {
        "id": "d",
        "label": "They generate event messages on `SYSTEM.ADMIN.PERFM.EVENT` when queues become full (`QDEPTH_HIGH`), service intervals are breached, or queue depth returns to normal (`QDEPTH_LOW`)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_aut_23",
    "section": "automation",
    "prompt": "How can an application consume messages selectively from an IBM MQ queue using message selection criteria?",
    "options": [
      {
        "id": "a",
        "label": "By using SQL-92 selector strings in the `MQCHARV SelectionString` field with `MQOPEN` / `MQSUB` (or JMS Message Selectors)"
      },
      {
        "id": "b",
        "label": "By reading all messages into memory and filtering in a loop"
      },
      {
        "id": "c",
        "label": "By using Linux grep directly on the `/var/mqm` queue files"
      },
      {
        "id": "d",
        "label": "By altering the queue manager CCSID dynamically"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_aut_24",
    "section": "automation",
    "prompt": "What is the function of the IBM MQ Streaming Queues feature (introduced in recent MQ versions)?",
    "options": [
      {
        "id": "a",
        "label": "It streams video and audio over RTSP protocol"
      },
      {
        "id": "b",
        "label": "It automatically and non-disruptively duplicates/streams a copy of every message put to a queue onto a second designated streaming queue (e.g. for analytics, auditing, or AI ingestion)"
      },
      {
        "id": "c",
        "label": "It converts MQ messages into continuous Kafka topic streams without CPU usage"
      },
      {
        "id": "d",
        "label": "It disables message persistence permanently"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_aut_25",
    "section": "automation",
    "prompt": "What happens when an application opens a queue with `MQOO_INPUT_EXCLUSIVE`?",
    "options": [
      {
        "id": "a",
        "label": "All other applications are prevented from putting messages onto the queue"
      },
      {
        "id": "b",
        "label": "The queue manager deletes all existing messages on the queue"
      },
      {
        "id": "c",
        "label": "The queue is hidden from the MQSC command interpreter"
      },
      {
        "id": "d",
        "label": "No other application can open that queue for input (reading messages) until this application closes it"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_aut_26",
    "section": "automation",
    "prompt": "What is the role of an IBM MQ Process Definition (`PROCESS`) object in triggering?",
    "options": [
      {
        "id": "a",
        "label": "It limits the operating system process ID (PID) of the queue manager"
      },
      {
        "id": "b",
        "label": "It monitors CPU utilization of running Java applications"
      },
      {
        "id": "c",
        "label": "It defines the application execution command, executable path, and user data passed to the trigger monitor when a trigger event fires"
      },
      {
        "id": "d",
        "label": "It acts as a memory cache for remote queue definitions"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_aut_27",
    "section": "automation",
    "prompt": "In IBM MQ publish/subscribe, what is the difference between Non-Durable and Durable Subscriptions?",
    "options": [
      {
        "id": "a",
        "label": "Durable subscriptions use persistent storage on tape drives only"
      },
      {
        "id": "b",
        "label": "Durable Subscriptions retain unconsumed publications on a subscription queue even when the subscriber application is disconnected; Non-Durable subscriptions discard publications while disconnected"
      },
      {
        "id": "c",
        "label": "Non-Durable subscriptions cannot receive character text"
      },
      {
        "id": "d",
        "label": "Durable subscriptions require two queue managers"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_aut_28",
    "section": "automation",
    "prompt": "Which MQSC command is used to force a refresh of all cluster metadata across all cluster repositories for a cluster named \"FIN_CLUSTER\"?",
    "options": [
      {
        "id": "a",
        "label": "REFRESH CLUSTER(FIN_CLUSTER) REPOS(YES)"
      },
      {
        "id": "b",
        "label": "RESTART CLUSTER(FIN_CLUSTER)"
      },
      {
        "id": "c",
        "label": "CLEAR CLUSTER(FIN_CLUSTER) CACHE"
      },
      {
        "id": "d",
        "label": "RESET QMGR CLUSTER(FIN_CLUSTER)"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_aut_29",
    "section": "automation",
    "prompt": "What is the role of `MQGMO_WAIT` and `MQGMO_SET_SIGNAL` in IBM MQ application message consumption?",
    "options": [
      {
        "id": "a",
        "label": "`MQGMO_WAIT` blocks the calling thread until a message arrives or a timeout expires, eliminating wasteful CPU polling loops"
      },
      {
        "id": "b",
        "label": "They shut down the queue manager when queues are empty"
      },
      {
        "id": "c",
        "label": "They encrypt messages in memory buffers"
      },
      {
        "id": "d",
        "label": "They convert binary messages into XML strings"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_aut_30",
    "section": "automation",
    "prompt": "When configuring an IBM MQ Bridge for HTTP, how are HTTP POST requests mapped to queue operations?",
    "options": [
      {
        "id": "a",
        "label": "The HTTP request is saved as a PDF file on the server disk"
      },
      {
        "id": "b",
        "label": "The HTTP POST request body becomes the MQ message payload, and HTTP headers map to MQMD / RFH2 properties"
      },
      {
        "id": "c",
        "label": "The HTTP request triggers a queue manager restart"
      },
      {
        "id": "d",
        "label": "The HTTP POST is converted to an SQL UPDATE command"
      }
    ],
    "correctOptionId": "b"
  }
];

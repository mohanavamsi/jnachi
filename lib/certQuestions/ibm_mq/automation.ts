import { Question } from '../../certTypes';

export const ibmMqAutomationQuestions: Question[] = [
  {
    id: 'ibmmq_aut_01',
    domain: 'automation',
    text: 'In an IBM MQ Cluster, what is the minimum recommended number of Full Repository queue managers required for high availability and metadata redundancy?',
    options: {
      a: 'Two Full Repositories',
      b: 'One Full Repository',
      c: 'Five Full Repositories',
      d: 'Every queue manager in the cluster must be a Full Repository'
    },
    correctAnswer: 'a',
    explanation: 'IBM best practices recommend exactly two Full Repository queue managers per cluster to provide high availability and continuous cluster metadata synchronization without excessive inter-repository traffic.'
  },
  {
    id: 'ibmmq_aut_02',
    domain: 'automation',
    text: 'Which two channel definitions are explicitly required on a queue manager to join an existing IBM MQ cluster?',
    options: {
      a: 'A Cluster-Receiver channel (`CLUSRCVR`) and a Cluster-Sender channel (`CLUSSDR`) to an existing Full Repository',
      b: 'A Server-Connection channel (`SVRCONN`) and a Client-Connection channel (`CLNTCONN`)',
      c: 'Two point-to-point Sender channels (`SDR`)',
      d: 'A Receiver channel (`RCVR`) and an Initiation channel (`INITQ`)'
    },
    correctAnswer: 'a',
    explanation: 'Joining a cluster requires defining a `CLUSRCVR` (so other members can contact this QMGR) and an initial `CLUSSDR` pointing to one of the Full Repositories.'
  },
  {
    id: 'ibmmq_aut_03',
    domain: 'automation',
    text: 'What is the function of the IBM MQ Dead Letter Queue Handler utility (`runmqdlq`)?',
    options: {
      a: 'It processes messages from the Dead Letter Queue based on configurable rules (rules table), resending, deleting, or archiving messages according to their reason code and header attributes',
      b: 'It permanently drops all malformed messages without logging',
      c: 'It restarts failed sender channels automatically',
      d: 'It converts MQMD headers into JSON strings'
    },
    correctAnswer: 'a',
    explanation: '`runmqdlq` reads the Dead Letter Queue and applies rules from a rules table file to forward, retry, redirect, or discard unroutable messages based on their `MQDLH` header data.'
  },
  {
    id: 'ibmmq_aut_04',
    domain: 'automation',
    text: 'In IBM MQ Message Triggering, what event occurs on an Initiation Queue (`INITQ`) when trigger conditions are satisfied on a triggered local queue?',
    options: {
      a: 'The Queue Manager writes a Trigger Message containing application and process parameters onto the Initiation Queue',
      b: 'The Queue Manager restarts the local TCP listener',
      c: 'The Queue Manager drops all in-flight units of work',
      d: 'The Queue Manager sends an email alert to the system admin'
    },
    correctAnswer: 'a',
    explanation: 'When triggering criteria are met, the queue manager generates an `MQTM` Trigger Message and puts it onto the designated `INITQ`, alerting trigger monitors (e.g. `runmqtrm`).'
  },
  {
    id: 'ibmmq_aut_05',
    domain: 'automation',
    text: 'What is the difference between Trigger Type `FIRST`, `EVERY`, and `DEPTH` in IBM MQ triggering configuration?',
    options: {
      a: '`FIRST` generates a trigger message when queue depth increases from 0 to 1; `EVERY` generates one on every message put; `DEPTH` generates one when queue depth reaches `TRIGDPTH`',
      b: '`FIRST` triggers on the first day of the month; `EVERY` runs hourly; `DEPTH` runs when disk space is full',
      c: '`FIRST` is for persistent messages only; `EVERY` is for non-persistent only',
      d: '`DEPTH` triggers when channel bandwidth drops below 10%'
    },
    correctAnswer: 'a',
    explanation: '`TRIGTYPE(FIRST)` triggers when depth goes from 0 to 1; `TRIGTYPE(EVERY)` triggers on every `MQPUT`; `TRIGTYPE(DEPTH)` triggers when `CURDEPTH` reaches the defined threshold.'
  },
  {
    id: 'ibmmq_aut_06',
    domain: 'automation',
    text: 'How does IBM MQ Cluster Workload Balancing distribute messages when multiple instances of a cluster queue exist across different queue managers?',
    options: {
      a: 'By default, using a round-robin algorithm with channel status and availability awareness, customizable via cluster workload exits or attributes (`CLWLWGHT`, `CLWLRANK`)',
      b: 'By broadcasting all messages simultaneously to every cluster queue manager',
      c: 'By sending all traffic exclusively to the queue manager with the highest CPU clock speed',
      d: 'By hashing the client IP address'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ uses a built-in cluster workload management algorithm (evaluating channel status, network availability, priority, and channel weights) with support for custom cluster workload exits.'
  },
  {
    id: 'ibmmq_aut_07',
    domain: 'automation',
    text: 'What header structure is prepended to a message when it is routed to the Dead Letter Queue (DLQ) by the Queue Manager or a message channel agent?',
    options: {
      a: 'MQDLH (Dead Letter Header)',
      b: 'MQIIH (IMS Information Header)',
      c: 'MQRFH2 (Rules and Formatting Header)',
      d: 'MQCIH (CICS Information Header)'
    },
    correctAnswer: 'a',
    explanation: 'The `MQDLH` (Dead Letter Header) contains diagnostic information including the reason code (`Reason`), original destination queue (`DestQName`), original destination queue manager (`DestQMgrName`), and timestamp.'
  },
  {
    id: 'ibmmq_aut_08',
    domain: 'automation',
    text: 'Which feature in IBM MQ allows an application to break up a message exceeding 100 MB into smaller logical chunks and assemble them upon retrieval?',
    options: {
      a: 'Message Segmentation and Message Grouping (`MQMF_SEGMENTATION_ALLOWED`)',
      b: 'Automatic GZIP chunking',
      c: 'TCP socket multi-streaming',
      d: 'Database BLOB pagination'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ supports message segmentation (`MQMF_SEGMENTATION_ALLOWED`), where large messages are divided into segment pieces carrying offset metadata in the MQMD and reassembled by MQGET with `MQGMO_COMPLETE_MSG`.'
  },
  {
    id: 'ibmmq_aut_09',
    domain: 'automation',
    text: 'What is the purpose of the IBM MQ administrative REST API (`https://<host>:9443/ibmmq/rest/v1/`)?',
    options: {
      a: 'It provides standard HTTP REST endpoints to administer MQ objects, inspect queue statistics, and perform message PUT/GET operations using JSON payloads',
      b: 'It replaces all TCP/IP listeners with HTTP web servers permanently',
      c: 'It converts MQMD headers into PDF certificates',
      d: 'It acts as an SMTP mail server'
    },
    correctAnswer: 'a',
    explanation: 'The IBM MQ REST API provides modern HTTP/JSON endpoints for managing MQ objects and publishing/consuming messages via standard web protocols.'
  },
  {
    id: 'ibmmq_aut_10',
    domain: 'automation',
    text: 'When configuring a triggered background service on Linux, which utility program is run as a Trigger Monitor to listen on an Initiation Queue and start target programs?',
    options: {
      a: 'runmqtrm',
      b: 'runmqdlq',
      c: 'runmqras',
      d: 'amqsget'
    },
    correctAnswer: 'a',
    explanation: '`runmqtrm` is the standard trigger monitor utility that reads trigger messages from an initiation queue and executes the command specified in the associated `PROCESS` object.'
  },
  {
    id: 'ibmmq_aut_11',
    domain: 'automation',
    text: 'In IBM MQ publish/subscribe clusters, what is the role of Topic Host Routing?',
    options: {
      a: 'It restricts publication traffic routing only through designated topic host queue managers rather than direct point-to-point mesh channels across all cluster members',
      b: 'It assigns DNS names to client TCP listeners',
      c: 'It deletes inactive topic subscriptions after 10 minutes',
      d: 'It forces all subscribers to use SSL 3.0'
    },
    correctAnswer: 'a',
    explanation: 'Topic Host Routing optimizes pub/sub clusters by routing publications only to queue managers designated as hosts for that topic, reducing network channel sprawl.'
  },
  {
    id: 'ibmmq_aut_12',
    domain: 'automation',
    text: 'What header structure is standard in IBM MQ for carrying JMS properties, user metadata, and XML folders between JMS clients and MQ native applications?',
    options: {
      a: 'MQRFH2 (Rules and Formatting Header 2)',
      b: 'MQWIH (Work Information Header)',
      c: 'MQDH (Distribution Header)',
      d: 'MQTM (Trigger Message)'
    },
    correctAnswer: 'a',
    explanation: 'The `MQRFH2` header carries structured XML folders (such as `<jms>`, `<mcd>`, `<usr>`) containing JMS application properties, message types, and custom metadata.'
  },
  {
    id: 'ibmmq_aut_13',
    domain: 'automation',
    text: 'What occurs when an application retrieves messages using `MQGMO_LOGICAL_ORDER` on a grouped message stream (`MQMF_MSG_IN_GROUP`)?',
    options: {
      a: 'The queue manager returns messages in the exact logical order they belong within the group, regardless of physical position or arrival time in the queue',
      b: 'The messages are sorted alphabetically by MsgId',
      c: 'The messages are grouped by client IP address',
      d: 'The messages are stored in reverse chronological order'
    },
    correctAnswer: 'a',
    explanation: '`MQGMO_LOGICAL_ORDER` guarantees that messages in a message group or segments of a segmented message are returned in proper logical sequence.'
  },
  {
    id: 'ibmmq_aut_14',
    domain: 'automation',
    text: 'Which attribute on an IBM MQ cluster queue allows an architect to bind an application’s session so that all subsequent messages in a logical unit of work go to the same queue manager?',
    options: {
      a: '`DEFBIND(OPEN)`',
      b: '`DEFBIND(NOTFIXED)`',
      c: '`DEFBIND(ROUNDROBIN)`',
      d: '`DEFBIND(RANDOM)`'
    },
    correctAnswer: 'a',
    explanation: '`DEFBIND(OPEN)` fixes the target queue manager destination when the queue is opened, ensuring all messages put during that open session route to the same destination.'
  },
  {
    id: 'ibmmq_aut_15',
    domain: 'automation',
    text: 'What is the purpose of the IBM MQ Bridge for Salesforce (or runmqsfb)?',
    options: {
      a: 'It synchronizes events between Salesforce Platform Events / CDC and IBM MQ queues/topics bidirectionally without custom integration code',
      b: 'It imports Salesforce Apex code into queue manager memory',
      c: 'It creates Salesforce user accounts from MQ users',
      d: 'It formats IBM MQ logs into Salesforce Chatter posts'
    },
    correctAnswer: 'a',
    explanation: 'The IBM MQ Bridge for Salesforce allows publishing and subscribing to Salesforce Platform Events and Change Data Capture events directly to and from IBM MQ.'
  },
  {
    id: 'ibmmq_aut_16',
    domain: 'automation',
    text: 'In IBM MQ, what happens when a message is put with `MQRO_EXPIRATION_WITH_FULL_DATA` report option and the message expires on the target queue?',
    options: {
      a: 'An expiration report message containing the original message payload is generated and sent to the specified `ReplyToQ` / `ReplyToQMgr`',
      b: 'The message is converted to an unformatted binary log file',
      c: 'The queue manager terminates immediately',
      d: 'The sender receives a synchronous HTTP 410 Gone error'
    },
    correctAnswer: 'a',
    explanation: '`MQRO_EXPIRATION_WITH_FULL_DATA` requests the queue manager to generate a report message containing the original data and route it to the `ReplyToQ` if the message expires.'
  },
  {
    id: 'ibmmq_aut_17',
    domain: 'automation',
    text: 'Which MQSC command is used to suspend a queue manager named "QM_BRANCH" from active participation in an IBM MQ cluster named "CORP_CLUSTER"?',
    options: {
      a: 'SUSPEND QMGR CLUSTER(CORP_CLUSTER)',
      b: 'STOP CLUSTER(CORP_CLUSTER) QMGR(QM_BRANCH)',
      c: 'ALTER QMGR CLUSTER(CORP_CLUSTER) STATE(PAUSED)',
      d: 'DETACH QMGR FROM CLUSTER CORP_CLUSTER'
    },
    correctAnswer: 'a',
    explanation: '`SUSPEND QMGR CLUSTER(cluster_name)` temporarily stops cluster workload traffic from being routed to the queue manager, allowing maintenance without removing definitions.'
  },
  {
    id: 'ibmmq_aut_18',
    domain: 'automation',
    text: 'What is the function of the `RESUME QMGR CLUSTER(cluster_name)` MQSC command?',
    options: {
      a: 'It informs Full Repositories that the suspended queue manager is once again available to receive cluster workload traffic',
      b: 'It unfreezes all locked database rows',
      c: 'It recovers corrupt persistent transaction logs',
      d: 'It clears all messages from the Dead Letter Queue'
    },
    correctAnswer: 'a',
    explanation: '`RESUME QMGR CLUSTER(...)` notifies the cluster that the queue manager is ready to resume receiving cluster workload messages.'
  },
  {
    id: 'ibmmq_aut_19',
    domain: 'automation',
    text: 'What is the purpose of the `MQPMO_RESPONSE_VALUE` options (`MQPMO_SYNC_RESPONSE`, `MQPMO_ASYNC_RESPONSE`) in `MQPUT` operations?',
    options: {
      a: 'They control whether client applications wait synchronously for server confirmation of each message put or use asynchronous putting for higher throughput',
      b: 'They enable automated audio alerts on message delivery',
      c: 'They configure SSL handshake renegotiation intervals',
      d: 'They convert text payloads to XML documents'
    },
    correctAnswer: 'a',
    explanation: 'Asynchronous put (`MQPMO_ASYNC_RESPONSE`) allows client applications to stream batches of messages without waiting for individual network round-trips for each put, improving throughput.'
  },
  {
    id: 'ibmmq_aut_20',
    domain: 'automation',
    text: 'In an IBM MQ cluster, what is the role of Cluster Channels (`CLUSSDR` and `CLUSRCVR`) auto-definition (`CHAD`)?',
    options: {
      a: 'When a queue manager needs to send a message to another cluster member, it automatically defines and starts the necessary `CLUSSDR` channel dynamically based on repository data',
      b: 'It creates local user accounts on Linux automatically',
      c: 'It generates TLS certificates on the fly without CA signing',
      d: 'It backs up queue definitions to cloud object storage'
    },
    correctAnswer: 'a',
    explanation: 'In a cluster, queue managers automatically define sender channels (`CLUSSDR`) on-demand when sending to other cluster members, eliminating manual channel pair configuration.'
  },
  {
    id: 'ibmmq_aut_21',
    domain: 'automation',
    text: 'Which event message category in IBM MQ alerts monitoring tools when channel status changes (e.g., channel stopped or retry threshold reached)?',
    options: {
      a: 'Channel Events (enabled via `ALTER QMGR CHLEV(ENABLED)`)',
      b: 'Performance Events',
      c: 'Logger Events',
      d: 'Bridge Events'
    },
    correctAnswer: 'a',
    explanation: 'Channel events (`CHLEV(ENABLED)`) write structured event messages to `SYSTEM.ADMIN.CHANNEL.EVENT` queue whenever channel states change (e.g. Channel Stopped, Channel Activated).'
  },
  {
    id: 'ibmmq_aut_22',
    domain: 'automation',
    text: 'What is the purpose of Queue Manager Performance Events (`PERFMEV(ENABLED)`) in IBM MQ?',
    options: {
      a: 'They generate event messages on `SYSTEM.ADMIN.PERFM.EVENT` when queues become full (`QDEPTH_HIGH`), service intervals are breached, or queue depth returns to normal (`QDEPTH_LOW`)',
      b: 'They benchmark CPU and GPU clock cycles',
      c: 'They automatically compress images in message payloads',
      d: 'They generate Grafana dashboards automatically'
    },
    correctAnswer: 'a',
    explanation: 'Performance events notify monitoring systems when queue depths exceed high watermarks (`QDEPTH_HIGH`), drop below low limits (`QDEPTH_LOW`), or experience depth full conditions.'
  },
  {
    id: 'ibmmq_aut_23',
    domain: 'automation',
    text: 'How can an application consume messages selectively from an IBM MQ queue using message selection criteria?',
    options: {
      a: 'By using SQL-92 selector strings in the `MQCHARV SelectionString` field with `MQOPEN` / `MQSUB` (or JMS Message Selectors)',
      b: 'By reading all messages into memory and filtering in a loop',
      c: 'By using Linux grep directly on the `/var/mqm` queue files',
      d: 'By altering the queue manager CCSID dynamically'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ supports message selectors (SQL-92 syntax) over `MQRFH2` properties and message properties, enabling the queue manager to filter messages before delivery.'
  },
  {
    id: 'ibmmq_aut_24',
    domain: 'automation',
    text: 'What is the function of the IBM MQ Streaming Queues feature (introduced in recent MQ versions)?',
    options: {
      a: 'It automatically and non-disruptively duplicates/streams a copy of every message put to a queue onto a second designated streaming queue (e.g. for analytics, auditing, or AI ingestion)',
      b: 'It streams video and audio over RTSP protocol',
      c: 'It converts MQ messages into continuous Kafka topic streams without CPU usage',
      d: 'It disables message persistence permanently'
    },
    correctAnswer: 'a',
    explanation: 'Streaming Queues allows configuring a target stream queue (`STREAMQ`) on any local queue, duplicating messages on PUT for auditing, observability, or parallel analytics without impacting primary consumers.'
  },
  {
    id: 'ibmmq_aut_25',
    domain: 'automation',
    text: 'What happens when an application opens a queue with `MQOO_INPUT_EXCLUSIVE`?',
    options: {
      a: 'No other application can open that queue for input (reading messages) until this application closes it',
      b: 'All other applications are prevented from putting messages onto the queue',
      c: 'The queue manager deletes all existing messages on the queue',
      d: 'The queue is hidden from the MQSC command interpreter'
    },
    correctAnswer: 'a',
    explanation: '`MQOO_INPUT_EXCLUSIVE` ensures exclusive read access, preventing any concurrent getter/consumer from opening the queue for input.'
  },
  {
    id: 'ibmmq_aut_26',
    domain: 'automation',
    text: 'What is the role of an IBM MQ Process Definition (`PROCESS`) object in triggering?',
    options: {
      a: 'It defines the application execution command, executable path, and user data passed to the trigger monitor when a trigger event fires',
      b: 'It limits the operating system process ID (PID) of the queue manager',
      c: 'It monitors CPU utilization of running Java applications',
      d: 'It acts as a memory cache for remote queue definitions'
    },
    correctAnswer: 'a',
    explanation: 'A `PROCESS` definition stores attributes such as `APPLICID` (executable path) and `USERDATA`, which are packaged into the trigger message for the trigger monitor.'
  },
  {
    id: 'ibmmq_aut_27',
    domain: 'automation',
    text: 'In IBM MQ publish/subscribe, what is the difference between Non-Durable and Durable Subscriptions?',
    options: {
      a: 'Durable Subscriptions retain unconsumed publications on a subscription queue even when the subscriber application is disconnected; Non-Durable subscriptions discard publications while disconnected',
      b: 'Durable subscriptions use persistent storage on tape drives only',
      c: 'Non-Durable subscriptions cannot receive character text',
      d: 'Durable subscriptions require two queue managers'
    },
    correctAnswer: 'a',
    explanation: 'Durable subscriptions survive subscriber disconnections and restarts; publications matching the topic are held until the subscriber reconnects and consumes them.'
  },
  {
    id: 'ibmmq_aut_28',
    domain: 'automation',
    text: 'Which MQSC command is used to force a refresh of all cluster metadata across all cluster repositories for a cluster named "FIN_CLUSTER"?',
    options: {
      a: 'REFRESH CLUSTER(FIN_CLUSTER) REPOS(YES)',
      b: 'RESTART CLUSTER(FIN_CLUSTER)',
      c: 'CLEAR CLUSTER(FIN_CLUSTER) CACHE',
      d: 'RESET QMGR CLUSTER(FIN_CLUSTER)'
    },
    correctAnswer: 'a',
    explanation: '`REFRESH CLUSTER(cluster_name)` clears local cluster cache and forces the queue manager to rebuild cluster information from Full Repositories.'
  },
  {
    id: 'ibmmq_aut_29',
    domain: 'automation',
    text: 'What is the role of `MQGMO_WAIT` and `MQGMO_SET_SIGNAL` in IBM MQ application message consumption?',
    options: {
      a: '`MQGMO_WAIT` blocks the calling thread until a message arrives or a timeout expires, eliminating wasteful CPU polling loops',
      b: 'They shut down the queue manager when queues are empty',
      c: 'They encrypt messages in memory buffers',
      d: 'They convert binary messages into XML strings'
    },
    correctAnswer: 'a',
    explanation: '`MQGMO_WAIT` with `WaitInterval` suspends the application thread efficiently until a matching message is placed on the queue or the timeout elapses.'
  },
  {
    id: 'ibmmq_aut_30',
    domain: 'automation',
    text: 'When configuring an IBM MQ Bridge for HTTP, how are HTTP POST requests mapped to queue operations?',
    options: {
      a: 'The HTTP POST request body becomes the MQ message payload, and HTTP headers map to MQMD / RFH2 properties',
      b: 'The HTTP request is saved as a PDF file on the server disk',
      c: 'The HTTP request triggers a queue manager restart',
      d: 'The HTTP POST is converted to an SQL UPDATE command'
    },
    correctAnswer: 'a',
    explanation: 'HTTP bridges map the HTTP request body directly to the message payload and translate HTTP headers/URI paths to MQ target queues and message descriptor properties.'
  }
];

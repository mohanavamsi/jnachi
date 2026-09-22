import { Question } from '../../certTypes';

export const ibmMqGrowthQuestions: Question[] = [
  {
    id: 'ibmmq_gro_01',
    domain: 'growth',
    text: 'What is the architectural foundation of IBM MQ Native HA (High Availability) introduced in modern MQ versions?',
    options: {
      a: 'A 3-node quorum cluster using the Raft consensus algorithm for automated leader election and synchronous log replication without requiring shared SAN/NFS network storage',
      b: 'A dual-active active-active master database cluster',
      c: 'A software-defined RAID-5 storage array across virtual machines',
      d: 'A weekly snapshot backup copied to IBM Cloud Object Storage'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ Native HA uses a 3-node configuration running Raft consensus to automatically elect active leader queue managers and replicate recovery logs synchronously across local storage.'
  },
  {
    id: 'ibmmq_gro_02',
    domain: 'growth',
    text: 'How does an IBM MQ Multi-Instance Queue Manager achieve high availability?',
    options: {
      a: 'One active queue manager instance holds a shared lock on shared network storage (NFS v4 / SAN), while one or more standby instances wait to take over instantly if the active instance fails',
      b: 'By round-robining every message across two active queue managers simultaneously',
      c: 'By running the queue manager process inside Docker on a single host',
      d: 'By converting all persistent messages to ephemeral in-memory queues'
    },
    correctAnswer: 'a',
    explanation: 'Multi-instance queue managers share queue manager data and log directories on a shared networked filesystem (requiring POSIX lease/lock compliance), with a standby instance automatically taking over upon active lock release.'
  },
  {
    id: 'ibmmq_gro_03',
    domain: 'growth',
    text: 'What is the difference between Linear Logging and Circular Logging in IBM MQ?',
    options: {
      a: 'Circular logging reuses a fixed set of log files for crash recovery; Linear logging writes sequentially to new log files, enabling forward recovery (media recovery) of damaged queue objects',
      b: 'Circular logging is for Windows only; Linear logging is for Linux only',
      c: 'Circular logging encrypts data; Linear logging leaves data in plaintext',
      d: 'Circular logging requires tape drives; Linear logging uses SSDs'
    },
    correctAnswer: 'a',
    explanation: 'Circular logging rolls over fixed log files and only supports crash restart recovery. Linear logging retains historical log extents, allowing point-in-time media recovery of damaged queues.'
  },
  {
    id: 'ibmmq_gro_04',
    domain: 'growth',
    text: 'In an XA Two-Phase Commit (2PC) transaction involving IBM MQ and an Oracle or DB2 database, what role does the IBM MQ Queue Manager typically play?',
    options: {
      a: 'The Transaction Manager (Coordinator) or an XA-compliant Resource Manager',
      b: 'A passive network proxy',
      c: 'An uncoordinated client-side cache',
      d: 'An SSL certificate authority'
    },
    correctAnswer: 'a',
    explanation: 'IBM MQ can act as an XA Transaction Manager (coordinating external databases via `MQBEGIN`) or as an XA Resource Manager coordinated by an external transaction manager (e.g. WebSphere Application Server, CICS, Tuxedo).'
  },
  {
    id: 'ibmmq_gro_05',
    domain: 'growth',
    text: 'When deploying IBM MQ on Red Hat OpenShift or Kubernetes, which Kubernetes Operator manages the declarative lifecycle, scaling, Native HA, and upgrades of queue managers?',
    options: {
      a: 'IBM MQ Operator',
      b: 'Helm CLI Chart Engine',
      c: 'Kubernetes Ingress Controller',
      d: 'Kubelet Worker Daemon'
    },
    correctAnswer: 'a',
    explanation: 'The IBM MQ Operator provides Kubernetes Custom Resource Definitions (`QueueManager`) to declaratively provision, update, configure Native HA, and manage MQ instances in cloud-native environments.'
  },
  {
    id: 'ibmmq_gro_06',
    domain: 'growth',
    text: 'What command is used to recreate or recover a damaged local queue from linear transaction logs?',
    options: {
      a: 'rcrmqobj -m QM1 -t q -n DAMAGED.QUEUE',
      b: 'fixmq -q DAMAGED.QUEUE',
      c: 'repairmq -m QM1 -all',
      d: 'runmqsc QM1 -recover DAMAGED.QUEUE'
    },
    correctAnswer: 'a',
    explanation: '`rcrmqobj` (Recreate MQ Object) replays linear log records to reconstruct damaged queue data structures to their consistent state.'
  },
  {
    id: 'ibmmq_gro_07',
    domain: 'growth',
    text: 'What is the purpose of the `rcdmqimg` command in IBM MQ linear logging administration?',
    options: {
      a: 'It records a media image of an MQ object into the linear log, establishing a checkpoint for faster future object recovery and enabling log extent archival',
      b: 'It takes a PNG screenshot of the MQ Explorer screen',
      c: 'It copies Docker container images to a remote registry',
      d: 'It converts MQMD headers into bitmap files'
    },
    correctAnswer: 'a',
    explanation: '`rcdmqimg` (Record MQ Object Image) writes a baseline snapshot of queue objects into the active linear log stream, advancing the recovery log horizon.'
  },
  {
    id: 'ibmmq_gro_08',
    domain: 'growth',
    text: 'On IBM MQ for z/OS mainframe environments, what storage structures reside in coupling facilities to enable high-performance shared queues across a sysplex?',
    options: {
      a: 'Coupling Facility (CF) Structures with Shared Queues',
      b: 'NFS Mount Points',
      c: 'POSIX Symbolic Links',
      d: 'External S3 Buckets'
    },
    correctAnswer: 'a',
    explanation: 'On z/OS, Coupling Facility (CF) list structures hold messages for Shared Queues, accessible simultaneously by any queue manager in the Queue Sharing Group (QSG).'
  },
  {
    id: 'ibmmq_gro_09',
    domain: 'growth',
    text: 'What parameter in the `qm.ini` configuration file or MQSC settings controls the primary and secondary recovery log allocation size on Linux/Unix?',
    options: {
      a: '`LogPrimaryFiles`, `LogSecondaryFiles`, and `LogFilePages` in the `Log:` stanza',
      b: '`MaxMemoryMB` in the `Channels:` stanza',
      c: '`TCP_WINDOW_SIZE` in the `Network:` stanza',
      d: '`DiskBufferSize` in the `Storage:` stanza'
    },
    correctAnswer: 'a',
    explanation: 'The `Log:` stanza in `qm.ini` configures log management attributes including `LogPrimaryFiles`, `LogSecondaryFiles`, `LogFilePages` (size per log file in 4KB pages), and `LogType`.'
  },
  {
    id: 'ibmmq_gro_10',
    domain: 'growth',
    text: 'How does the IBM MQ Uniform Cluster pattern improve application resilience and scalability across multiple queue managers?',
    options: {
      a: 'It groups identical queue managers together and uses Client Application Balancing to automatically distribute and rebalance client application instances evenly across members',
      b: 'It forces all queue managers to share a single CPU core',
      c: 'It requires applications to maintain permanent static TCP IP socket pairs',
      d: 'It merges all queue storage into a single unindexed text file'
    },
    correctAnswer: 'a',
    explanation: 'Uniform Clusters provide automated client application workload balancing, dynamically redirecting connecting client instances so that message consumption and processing load remain balanced.'
  },
  {
    id: 'ibmmq_gro_11',
    domain: 'growth',
    text: 'What diagnostic utility command is provided by IBM MQ to collect logs, system performance metrics, configuration files, and FDC dump files for IBM Support analysis?',
    options: {
      a: 'runmqras',
      b: 'tar -czvf /var/mqm/logs.tar.gz',
      c: 'dmpmqaut -all',
      d: 'dspmqerr'
    },
    correctAnswer: 'a',
    explanation: '`runmqras` (Run MQ Reliability, Availability, and Serviceability) automates the collection and bundling of queue manager diagnostics, FDC traces, and system metadata for analysis.'
  },
  {
    id: 'ibmmq_gro_12',
    domain: 'growth',
    text: 'In IBM MQ performance optimization, why is placing Queue Manager transaction recovery logs (`/var/mqm/log`) on high-speed NVMe or dedicated fast write-cache disks recommended?',
    options: {
      a: 'Synchronous log disk writes occur on every persistent `MQPUT` commit; fast disk write latency directly governs peak transactional messaging throughput',
      b: 'Disk speeds determine the TLS certificate expiration date',
      c: 'Slow disks cause network packets to be corrupted in memory',
      d: 'IBM MQ will not start on SATA drives'
    },
    correctAnswer: 'a',
    explanation: 'Because persistent messages require synchronous write acknowledgments to transaction recovery logs before commits complete, log I/O latency is the primary hardware determinant of MQ throughput.'
  },
  {
    id: 'ibmmq_gro_13',
    domain: 'growth',
    text: 'What is an First Failure Support Technology (FFST) file (`.FDC` file) in IBM MQ diagnostics?',
    options: {
      a: 'An automated diagnostic dump file generated in `/var/mqm/errors` when an internal error, resource exhaustion, or unexpected exception occurs within an MQ process',
      b: 'A configuration template for new queue managers',
      c: 'A client license key file',
      d: 'A temporary buffer for non-persistent messages'
    },
    correctAnswer: 'a',
    explanation: 'First Failure Capture (`.FDC`) files record detailed process memory maps, stack traces, and error reason codes when an unexpected abnormal condition is encountered.'
  },
  {
    id: 'ibmmq_gro_14',
    domain: 'growth',
    text: 'In IBM MQ Native HA, what happens when the active leader node experiences a hardware crash or network partition?',
    options: {
      a: 'The remaining two replica nodes execute an automated Raft consensus vote and elect one replica as the new active leader with zero manual intervention',
      b: 'The entire cluster shuts down until an administrator manually enters recovery commands',
      c: 'Messages in transit are deleted permanently',
      d: 'The standby nodes convert to standalone queue managers with new names'
    },
    correctAnswer: 'a',
    explanation: 'With 3-node Raft consensus, if the active leader fails, the remaining quorum of two nodes immediately conducts leader election, promoting a synchronized replica to active leader within seconds.'
  },
  {
    id: 'ibmmq_gro_15',
    domain: 'growth',
    text: 'What is the function of the `MQDISC` MQI call?',
    options: {
      a: 'It cleanly disconnects the application from the queue manager, releasing connection handles and ending units of work',
      b: 'It deletes the physical hard disk partition',
      c: 'It forces immediate channel termination across all networks',
      d: 'It disconnects all other connected client users simultaneously'
    },
    correctAnswer: 'a',
    explanation: '`MQDISC` disconnects an application cleanly from the queue manager, committing or rolling back active transactions and releasing internal memory resources.'
  },
  {
    id: 'ibmmq_gro_16',
    domain: 'growth',
    text: 'Which channel attribute in IBM MQ specifies the maximum number of messages sent across a message channel before a commit checkpoint is taken?',
    options: {
      a: '`BATCHSZ` (Batch Size)',
      b: '`MAXMSGL`',
      c: '`DISCINT`',
      d: '`HBINT`'
    },
    correctAnswer: 'a',
    explanation: '`BATCHSZ` defines the number of messages transferred within a single channel transaction before the sender channel requests a batch confirmation from the receiver channel.'
  },
  {
    id: 'ibmmq_gro_17',
    domain: 'growth',
    text: 'What is the role of the `BATCHINT` (Batch Interval) channel attribute in optimizing channel throughput for sporadic workloads?',
    options: {
      a: 'It causes the sender channel to wait up to the specified duration (in milliseconds) for more messages to arrive on the transmission queue before committing an incomplete batch',
      b: 'It defines the timeout for TLS certificate renegotiation',
      c: 'It specifies how many days to keep old error logs',
      d: 'It limits the maximum TCP connection count'
    },
    correctAnswer: 'a',
    explanation: '`BATCHINT` allows sender channels to wait a short interval for incoming messages to accumulate into fuller batches, reducing commit and network overhead.'
  },
  {
    id: 'ibmmq_gro_18',
    domain: 'growth',
    text: 'In IBM MQ for z/OS, what are Page Sets and Buffer Pools used for?',
    options: {
      a: 'Buffer pools provide in-memory caching of message data in 4KB pages, and Page Sets are VSAM linear datasets where persistent queue data is stored on DASD disk storage',
      b: 'They are HTML templates for mainframe web servers',
      c: 'They convert EBCDIC to ASCII in hardware chips',
      d: 'They store TCP/IP routing tables for CICS transactions'
    },
    correctAnswer: 'a',
    explanation: 'On z/OS, local non-shared queues map to Page Sets (VSAM datasets) backed by in-memory Buffer Pools for high-performance I/O caching.'
  },
  {
    id: 'ibmmq_gro_19',
    domain: 'growth',
    text: 'What occurs during an IBM MQ Queue Manager "Media Recovery" operation?',
    options: {
      a: 'The queue manager reconstructs damaged queue objects by replaying log records from linear logs starting from the most recent recorded object image (`rcdmqimg`)',
      b: 'The queue manager plays an audio recording of error logs',
      c: 'All non-persistent messages are converted to persistent messages',
      d: 'The queue manager formats the hard drive partition'
    },
    correctAnswer: 'a',
    explanation: 'Media recovery restores damaged queue files by applying historical linear log updates on top of a base object image recorded previously.'
  },
  {
    id: 'ibmmq_gro_20',
    domain: 'growth',
    text: 'What is the purpose of the `AMQCLCHL.TAB` file in IBM MQ client environments?',
    options: {
      a: 'It is the default binary Client Channel Definition Table (CCDT) file generated by the queue manager to distribute channel definitions to remote clients',
      b: 'It is a license validation file for IBM MQ Advanced',
      c: 'It contains the administrator password hash',
      d: 'It holds the operating system host routing table'
    },
    correctAnswer: 'a',
    explanation: '`AMQCLCHL.TAB` is the default binary CCDT file created on the server and distributed to client applications to define connection endpoints.'
  },
  {
    id: 'ibmmq_gro_21',
    domain: 'growth',
    text: 'How does IBM MQ Client Automatic Reconnection (`MQCNO_RECONNECT`) improve high availability for client applications?',
    options: {
      a: 'If the connection to the active queue manager drops, the MQ client library automatically reconnects and re-establishes open queue handles to an available standby/cluster queue manager without application restart',
      b: 'It restarts the client operating system automatically',
      c: 'It converts the client application into a queue manager instance',
      d: 'It downloads the newest Java JDK version'
    },
    correctAnswer: 'a',
    explanation: '`MQCNO_RECONNECT` enables client libraries to automatically re-establish connections to alternate queue manager endpoints defined in the CCDT upon network or server interruption.'
  },
  {
    id: 'ibmmq_gro_22',
    domain: 'growth',
    text: 'What is the purpose of Heartbeat Interval (`HBINT`) on IBM MQ message channels?',
    options: {
      a: 'It allows the sending and receiving channel agents to exchange periodic heartbeat signals over idle connections, enabling rapid detection of broken TCP sockets and preventing firewall timeouts',
      b: 'It measures the temperature of the CPU processor',
      c: 'It controls how often messages are flushed to tape backup',
      d: 'It restarts the operating system if messages stop flowing'
    },
    correctAnswer: 'a',
    explanation: '`HBINT` transmits lightweight heartbeat packets when no messages are being transferred, detecting dead connections quickly and keeping firewall state tables open.'
  },
  {
    id: 'ibmmq_gro_23',
    domain: 'growth',
    text: 'What is the purpose of the `DISCINT` (Disconnect Interval) attribute on a message channel?',
    options: {
      a: 'The number of seconds a channel remains open while waiting for messages to arrive on the transmission queue before automatically disconnecting to free resources',
      b: 'The time before an expired TLS certificate is rejected',
      c: 'The interval for deleting unprocessed messages from the DLQ',
      d: 'The frequency of taking automated file system backups'
    },
    correctAnswer: 'a',
    explanation: '`DISCINT` specifies how long an idle channel remains active with an empty transmission queue before shutting down to conserve network and system resources.'
  },
  {
    id: 'ibmmq_gro_24',
    domain: 'growth',
    text: 'In high-throughput messaging architectures, what is the effect of enabling Message Read Ahead (`READAHEAD(ENABLED)`) on non-persistent client consumer queues?',
    options: {
      a: 'The queue manager pre-emptively streams messages to the client buffer before the application explicitly issues `MQGET`, eliminating network latency bottlenecks',
      b: 'The queue manager reads the next 10 messages from disk into GPU memory',
      c: 'The queue manager encrypts the message payload ahead of time',
      d: 'The client application skips every alternate message'
    },
    correctAnswer: 'a',
    explanation: 'Read-ahead streams non-persistent messages ahead of application `MQGET` requests, minimizing round-trip network latency for high-speed consumers.'
  },
  {
    id: 'ibmmq_gro_25',
    domain: 'growth',
    text: 'What is the purpose of the `SHARECNV` (Sharing Conversations) parameter on a Server-Connection (`SVRCONN`) channel?',
    options: {
      a: 'It defines the maximum number of logical client conversations that can share a single physical TCP/IP socket connection',
      b: 'It shares queue manager configuration across different cloud regions',
      c: 'It allows multiple users to edit the same message simultaneously',
      d: 'It converts MQSC commands into chat messages'
    },
    correctAnswer: 'a',
    explanation: '`SHARECNV` allows multiple client conversations (threads/sessions) to multiplex across a single TCP socket connection, reducing socket overhead and thread allocation.'
  },
  {
    id: 'ibmmq_gro_26',
    domain: 'growth',
    text: 'Which IBM MQ object attribute defines the threshold at which an event message is generated when queue storage approaches full capacity?',
    options: {
      a: '`QDEPTHHI` (Queue Depth High Limit)',
      b: '`MAXMSGL`',
      c: '`SHARECNV`',
      d: '`TRIGDPTH`'
    },
    correctAnswer: 'a',
    explanation: '`QDEPTHHI` specifies the queue depth percentage (e.g. 80%) that triggers a Queue Depth High performance event when exceeded.'
  },
  {
    id: 'ibmmq_gro_27',
    domain: 'growth',
    text: 'What happens during an MQ Transaction Rollback (`MQBACK`) operation?',
    options: {
      a: 'All `MQPUT` and `MQGET` operations performed within the current uncommitted Unit of Work are reverted; retrieved messages are restored to their queues and put messages are removed',
      b: 'The queue manager reverts to the factory default configuration',
      c: 'The entire hard disk is restored from the last nightly backup',
      d: 'All messages in the queue are moved to the recycle bin'
    },
    correctAnswer: 'a',
    explanation: '`MQBACK` rolls back in-flight unit-of-work modifications, returning uncommitted retrieved messages back onto the queues and purging uncommitted put messages.'
  },
  {
    id: 'ibmmq_gro_28',
    domain: 'growth',
    text: 'In IBM MQ Native HA, how is split-brain scenario prevented if network partitions isolate one node from the other two?',
    options: {
      a: 'The isolated node cannot achieve a majority quorum (2 of 3 votes required by Raft) and automatically demotes itself to replica, preventing conflicting writes',
      b: 'The isolated node deletes its local queue files',
      c: 'The administrator is prompted via phone call to choose the winner',
      d: 'All three nodes shut down permanently'
    },
    correctAnswer: 'a',
    explanation: 'Raft consensus strictly requires a majority quorum (minimum 2 out of 3 nodes) to elect a leader and commit log entries, making split-brain write conditions mathematically impossible.'
  },
  {
    id: 'ibmmq_gro_29',
    domain: 'growth',
    text: 'What is the role of the `STATMQI` and `STATQ` queue manager attributes in IBM MQ monitoring?',
    options: {
      a: 'They enable automatic collection of MQI API statistical metrics (e.g. put/get counts, byte volumes, response times) written to system monitoring queues',
      b: 'They calculate the monthly cloud billing cost of each queue',
      c: 'They verify the integrity of TLS private keys',
      d: 'They format queue data as HTML tables'
    },
    correctAnswer: 'a',
    explanation: '`STATMQI` and `STATQ` configure the collection of operational statistics, outputting accounting and performance data to `SYSTEM.ADMIN.STATISTICAL.QUEUE`.'
  },
  {
    id: 'ibmmq_gro_30',
    domain: 'growth',
    text: 'How does IBM MQ handle uncommitted messages on local queues when a queue manager is restarted following an unplanned power failure?',
    options: {
      a: 'The queue manager reads recovery logs, reapplies committed units of work, and backs out all uncommitted transactions to maintain database-grade ACID consistency',
      b: 'It deletes all queues that had open transactions',
      c: 'It prompts the operator in terminal to manually approve each uncommitted message',
      d: 'It converts uncommitted messages into non-persistent files'
    },
    correctAnswer: 'a',
    explanation: 'During restart recovery, IBM MQ processes transaction logs, rolling forward all committed operations and rolling back (backing out) uncommitted transactions to guarantee ACID integrity.'
  }
];

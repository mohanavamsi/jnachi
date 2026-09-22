import { CertQuestion } from '../types';

export const IBM_MQ_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "ibmmq_gro_01",
    "section": "growth",
    "prompt": "What is the architectural foundation of IBM MQ Native HA (High Availability) introduced in modern MQ versions?",
    "options": [
      {
        "id": "a",
        "label": "A dual-active active-active master database cluster"
      },
      {
        "id": "b",
        "label": "A 3-node quorum cluster using the Raft consensus algorithm for automated leader election and synchronous log replication without requiring shared SAN/NFS network storage"
      },
      {
        "id": "c",
        "label": "A software-defined RAID-5 storage array across virtual machines"
      },
      {
        "id": "d",
        "label": "A weekly snapshot backup copied to IBM Cloud Object Storage"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_gro_02",
    "section": "growth",
    "prompt": "How does an IBM MQ Multi-Instance Queue Manager achieve high availability?",
    "options": [
      {
        "id": "a",
        "label": "By round-robining every message across two active queue managers simultaneously"
      },
      {
        "id": "b",
        "label": "By running the queue manager process inside Docker on a single host"
      },
      {
        "id": "c",
        "label": "One active queue manager instance holds a shared lock on shared network storage (NFS v4 / SAN), while one or more standby instances wait to take over instantly if the active instance fails"
      },
      {
        "id": "d",
        "label": "By converting all persistent messages to ephemeral in-memory queues"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_gro_03",
    "section": "growth",
    "prompt": "What is the difference between Linear Logging and Circular Logging in IBM MQ?",
    "options": [
      {
        "id": "a",
        "label": "Circular logging reuses a fixed set of log files for crash recovery; Linear logging writes sequentially to new log files, enabling forward recovery (media recovery) of damaged queue objects"
      },
      {
        "id": "b",
        "label": "Circular logging is for Windows only; Linear logging is for Linux only"
      },
      {
        "id": "c",
        "label": "Circular logging encrypts data; Linear logging leaves data in plaintext"
      },
      {
        "id": "d",
        "label": "Circular logging requires tape drives; Linear logging uses SSDs"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_gro_04",
    "section": "growth",
    "prompt": "In an XA Two-Phase Commit (2PC) transaction involving IBM MQ and an Oracle or DB2 database, what role does the IBM MQ Queue Manager typically play?",
    "options": [
      {
        "id": "a",
        "label": "A passive network proxy"
      },
      {
        "id": "b",
        "label": "An uncoordinated client-side cache"
      },
      {
        "id": "c",
        "label": "An SSL certificate authority"
      },
      {
        "id": "d",
        "label": "The Transaction Manager (Coordinator) or an XA-compliant Resource Manager"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_gro_05",
    "section": "growth",
    "prompt": "When deploying IBM MQ on Red Hat OpenShift or Kubernetes, which Kubernetes Operator manages the declarative lifecycle, scaling, Native HA, and upgrades of queue managers?",
    "options": [
      {
        "id": "a",
        "label": "Helm CLI Chart Engine"
      },
      {
        "id": "b",
        "label": "Kubernetes Ingress Controller"
      },
      {
        "id": "c",
        "label": "IBM MQ Operator"
      },
      {
        "id": "d",
        "label": "Kubelet Worker Daemon"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_gro_06",
    "section": "growth",
    "prompt": "What command is used to recreate or recover a damaged local queue from linear transaction logs?",
    "options": [
      {
        "id": "a",
        "label": "rcrmqobj -m QM1 -t q -n DAMAGED.QUEUE"
      },
      {
        "id": "b",
        "label": "fixmq -q DAMAGED.QUEUE"
      },
      {
        "id": "c",
        "label": "repairmq -m QM1 -all"
      },
      {
        "id": "d",
        "label": "runmqsc QM1 -recover DAMAGED.QUEUE"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_gro_07",
    "section": "growth",
    "prompt": "What is the purpose of the `rcdmqimg` command in IBM MQ linear logging administration?",
    "options": [
      {
        "id": "a",
        "label": "It takes a PNG screenshot of the MQ Explorer screen"
      },
      {
        "id": "b",
        "label": "It copies Docker container images to a remote registry"
      },
      {
        "id": "c",
        "label": "It converts MQMD headers into bitmap files"
      },
      {
        "id": "d",
        "label": "It records a media image of an MQ object into the linear log, establishing a checkpoint for faster future object recovery and enabling log extent archival"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_gro_08",
    "section": "growth",
    "prompt": "On IBM MQ for z/OS mainframe environments, what storage structures reside in coupling facilities to enable high-performance shared queues across a sysplex?",
    "options": [
      {
        "id": "a",
        "label": "NFS Mount Points"
      },
      {
        "id": "b",
        "label": "Coupling Facility (CF) Structures with Shared Queues"
      },
      {
        "id": "c",
        "label": "POSIX Symbolic Links"
      },
      {
        "id": "d",
        "label": "External S3 Buckets"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_gro_09",
    "section": "growth",
    "prompt": "What parameter in the `qm.ini` configuration file or MQSC settings controls the primary and secondary recovery log allocation size on Linux/Unix?",
    "options": [
      {
        "id": "a",
        "label": "`MaxMemoryMB` in the `Channels:` stanza"
      },
      {
        "id": "b",
        "label": "`TCP_WINDOW_SIZE` in the `Network:` stanza"
      },
      {
        "id": "c",
        "label": "`DiskBufferSize` in the `Storage:` stanza"
      },
      {
        "id": "d",
        "label": "`LogPrimaryFiles`, `LogSecondaryFiles`, and `LogFilePages` in the `Log:` stanza"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_gro_10",
    "section": "growth",
    "prompt": "How does the IBM MQ Uniform Cluster pattern improve application resilience and scalability across multiple queue managers?",
    "options": [
      {
        "id": "a",
        "label": "It forces all queue managers to share a single CPU core"
      },
      {
        "id": "b",
        "label": "It groups identical queue managers together and uses Client Application Balancing to automatically distribute and rebalance client application instances evenly across members"
      },
      {
        "id": "c",
        "label": "It requires applications to maintain permanent static TCP IP socket pairs"
      },
      {
        "id": "d",
        "label": "It merges all queue storage into a single unindexed text file"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_gro_11",
    "section": "growth",
    "prompt": "What diagnostic utility command is provided by IBM MQ to collect logs, system performance metrics, configuration files, and FDC dump files for IBM Support analysis?",
    "options": [
      {
        "id": "a",
        "label": "tar -czvf /var/mqm/logs.tar.gz"
      },
      {
        "id": "b",
        "label": "dmpmqaut -all"
      },
      {
        "id": "c",
        "label": "runmqras"
      },
      {
        "id": "d",
        "label": "dspmqerr"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_gro_12",
    "section": "growth",
    "prompt": "In IBM MQ performance optimization, why is placing Queue Manager transaction recovery logs (`/var/mqm/log`) on high-speed NVMe or dedicated fast write-cache disks recommended?",
    "options": [
      {
        "id": "a",
        "label": "Synchronous log disk writes occur on every persistent `MQPUT` commit; fast disk write latency directly governs peak transactional messaging throughput"
      },
      {
        "id": "b",
        "label": "Disk speeds determine the TLS certificate expiration date"
      },
      {
        "id": "c",
        "label": "Slow disks cause network packets to be corrupted in memory"
      },
      {
        "id": "d",
        "label": "IBM MQ will not start on SATA drives"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_gro_13",
    "section": "growth",
    "prompt": "What is an First Failure Support Technology (FFST) file (`.FDC` file) in IBM MQ diagnostics?",
    "options": [
      {
        "id": "a",
        "label": "An automated diagnostic dump file generated in `/var/mqm/errors` when an internal error, resource exhaustion, or unexpected exception occurs within an MQ process"
      },
      {
        "id": "b",
        "label": "A configuration template for new queue managers"
      },
      {
        "id": "c",
        "label": "A client license key file"
      },
      {
        "id": "d",
        "label": "A temporary buffer for non-persistent messages"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_gro_14",
    "section": "growth",
    "prompt": "In IBM MQ Native HA, what happens when the active leader node experiences a hardware crash or network partition?",
    "options": [
      {
        "id": "a",
        "label": "The entire cluster shuts down until an administrator manually enters recovery commands"
      },
      {
        "id": "b",
        "label": "Messages in transit are deleted permanently"
      },
      {
        "id": "c",
        "label": "The standby nodes convert to standalone queue managers with new names"
      },
      {
        "id": "d",
        "label": "The remaining two replica nodes execute an automated Raft consensus vote and elect one replica as the new active leader with zero manual intervention"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_gro_15",
    "section": "growth",
    "prompt": "What is the function of the `MQDISC` MQI call?",
    "options": [
      {
        "id": "a",
        "label": "It deletes the physical hard disk partition"
      },
      {
        "id": "b",
        "label": "It cleanly disconnects the application from the queue manager, releasing connection handles and ending units of work"
      },
      {
        "id": "c",
        "label": "It forces immediate channel termination across all networks"
      },
      {
        "id": "d",
        "label": "It disconnects all other connected client users simultaneously"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_gro_16",
    "section": "growth",
    "prompt": "Which channel attribute in IBM MQ specifies the maximum number of messages sent across a message channel before a commit checkpoint is taken?",
    "options": [
      {
        "id": "a",
        "label": "`MAXMSGL`"
      },
      {
        "id": "b",
        "label": "`DISCINT`"
      },
      {
        "id": "c",
        "label": "`BATCHSZ` (Batch Size)"
      },
      {
        "id": "d",
        "label": "`HBINT`"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_gro_17",
    "section": "growth",
    "prompt": "What is the role of the `BATCHINT` (Batch Interval) channel attribute in optimizing channel throughput for sporadic workloads?",
    "options": [
      {
        "id": "a",
        "label": "It defines the timeout for TLS certificate renegotiation"
      },
      {
        "id": "b",
        "label": "It causes the sender channel to wait up to the specified duration (in milliseconds) for more messages to arrive on the transmission queue before committing an incomplete batch"
      },
      {
        "id": "c",
        "label": "It specifies how many days to keep old error logs"
      },
      {
        "id": "d",
        "label": "It limits the maximum TCP connection count"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_gro_18",
    "section": "growth",
    "prompt": "In IBM MQ for z/OS, what are Page Sets and Buffer Pools used for?",
    "options": [
      {
        "id": "a",
        "label": "Buffer pools provide in-memory caching of message data in 4KB pages, and Page Sets are VSAM linear datasets where persistent queue data is stored on DASD disk storage"
      },
      {
        "id": "b",
        "label": "They are HTML templates for mainframe web servers"
      },
      {
        "id": "c",
        "label": "They convert EBCDIC to ASCII in hardware chips"
      },
      {
        "id": "d",
        "label": "They store TCP/IP routing tables for CICS transactions"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_gro_19",
    "section": "growth",
    "prompt": "What occurs during an IBM MQ Queue Manager \"Media Recovery\" operation?",
    "options": [
      {
        "id": "a",
        "label": "The queue manager plays an audio recording of error logs"
      },
      {
        "id": "b",
        "label": "All non-persistent messages are converted to persistent messages"
      },
      {
        "id": "c",
        "label": "The queue manager formats the hard drive partition"
      },
      {
        "id": "d",
        "label": "The queue manager reconstructs damaged queue objects by replaying log records from linear logs starting from the most recent recorded object image (`rcdmqimg`)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_gro_20",
    "section": "growth",
    "prompt": "What is the purpose of the `AMQCLCHL.TAB` file in IBM MQ client environments?",
    "options": [
      {
        "id": "a",
        "label": "It is a license validation file for IBM MQ Advanced"
      },
      {
        "id": "b",
        "label": "It contains the administrator password hash"
      },
      {
        "id": "c",
        "label": "It is the default binary Client Channel Definition Table (CCDT) file generated by the queue manager to distribute channel definitions to remote clients"
      },
      {
        "id": "d",
        "label": "It holds the operating system host routing table"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_gro_21",
    "section": "growth",
    "prompt": "How does IBM MQ Client Automatic Reconnection (`MQCNO_RECONNECT`) improve high availability for client applications?",
    "options": [
      {
        "id": "a",
        "label": "It restarts the client operating system automatically"
      },
      {
        "id": "b",
        "label": "It converts the client application into a queue manager instance"
      },
      {
        "id": "c",
        "label": "If the connection to the active queue manager drops, the MQ client library automatically reconnects and re-establishes open queue handles to an available standby/cluster queue manager without application restart"
      },
      {
        "id": "d",
        "label": "It downloads the newest Java JDK version"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_gro_22",
    "section": "growth",
    "prompt": "What is the purpose of Heartbeat Interval (`HBINT`) on IBM MQ message channels?",
    "options": [
      {
        "id": "a",
        "label": "It measures the temperature of the CPU processor"
      },
      {
        "id": "b",
        "label": "It controls how often messages are flushed to tape backup"
      },
      {
        "id": "c",
        "label": "It restarts the operating system if messages stop flowing"
      },
      {
        "id": "d",
        "label": "It allows the sending and receiving channel agents to exchange periodic heartbeat signals over idle connections, enabling rapid detection of broken TCP sockets and preventing firewall timeouts"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_gro_23",
    "section": "growth",
    "prompt": "What is the purpose of the `DISCINT` (Disconnect Interval) attribute on a message channel?",
    "options": [
      {
        "id": "a",
        "label": "The number of seconds a channel remains open while waiting for messages to arrive on the transmission queue before automatically disconnecting to free resources"
      },
      {
        "id": "b",
        "label": "The time before an expired TLS certificate is rejected"
      },
      {
        "id": "c",
        "label": "The interval for deleting unprocessed messages from the DLQ"
      },
      {
        "id": "d",
        "label": "The frequency of taking automated file system backups"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_gro_24",
    "section": "growth",
    "prompt": "In high-throughput messaging architectures, what is the effect of enabling Message Read Ahead (`READAHEAD(ENABLED)`) on non-persistent client consumer queues?",
    "options": [
      {
        "id": "a",
        "label": "The queue manager reads the next 10 messages from disk into GPU memory"
      },
      {
        "id": "b",
        "label": "The queue manager pre-emptively streams messages to the client buffer before the application explicitly issues `MQGET`, eliminating network latency bottlenecks"
      },
      {
        "id": "c",
        "label": "The queue manager encrypts the message payload ahead of time"
      },
      {
        "id": "d",
        "label": "The client application skips every alternate message"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_gro_25",
    "section": "growth",
    "prompt": "What is the purpose of the `SHARECNV` (Sharing Conversations) parameter on a Server-Connection (`SVRCONN`) channel?",
    "options": [
      {
        "id": "a",
        "label": "It shares queue manager configuration across different cloud regions"
      },
      {
        "id": "b",
        "label": "It allows multiple users to edit the same message simultaneously"
      },
      {
        "id": "c",
        "label": "It converts MQSC commands into chat messages"
      },
      {
        "id": "d",
        "label": "It defines the maximum number of logical client conversations that can share a single physical TCP/IP socket connection"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ibmmq_gro_26",
    "section": "growth",
    "prompt": "Which IBM MQ object attribute defines the threshold at which an event message is generated when queue storage approaches full capacity?",
    "options": [
      {
        "id": "a",
        "label": "`MAXMSGL`"
      },
      {
        "id": "b",
        "label": "`SHARECNV`"
      },
      {
        "id": "c",
        "label": "`QDEPTHHI` (Queue Depth High Limit)"
      },
      {
        "id": "d",
        "label": "`TRIGDPTH`"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ibmmq_gro_27",
    "section": "growth",
    "prompt": "What happens during an MQ Transaction Rollback (`MQBACK`) operation?",
    "options": [
      {
        "id": "a",
        "label": "The queue manager reverts to the factory default configuration"
      },
      {
        "id": "b",
        "label": "All `MQPUT` and `MQGET` operations performed within the current uncommitted Unit of Work are reverted; retrieved messages are restored to their queues and put messages are removed"
      },
      {
        "id": "c",
        "label": "The entire hard disk is restored from the last nightly backup"
      },
      {
        "id": "d",
        "label": "All messages in the queue are moved to the recycle bin"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ibmmq_gro_28",
    "section": "growth",
    "prompt": "In IBM MQ Native HA, how is split-brain scenario prevented if network partitions isolate one node from the other two?",
    "options": [
      {
        "id": "a",
        "label": "The isolated node cannot achieve a majority quorum (2 of 3 votes required by Raft) and automatically demotes itself to replica, preventing conflicting writes"
      },
      {
        "id": "b",
        "label": "The isolated node deletes its local queue files"
      },
      {
        "id": "c",
        "label": "The administrator is prompted via phone call to choose the winner"
      },
      {
        "id": "d",
        "label": "All three nodes shut down permanently"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_gro_29",
    "section": "growth",
    "prompt": "What is the role of the `STATMQI` and `STATQ` queue manager attributes in IBM MQ monitoring?",
    "options": [
      {
        "id": "a",
        "label": "They enable automatic collection of MQI API statistical metrics (e.g. put/get counts, byte volumes, response times) written to system monitoring queues"
      },
      {
        "id": "b",
        "label": "They calculate the monthly cloud billing cost of each queue"
      },
      {
        "id": "c",
        "label": "They verify the integrity of TLS private keys"
      },
      {
        "id": "d",
        "label": "They format queue data as HTML tables"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ibmmq_gro_30",
    "section": "growth",
    "prompt": "How does IBM MQ handle uncommitted messages on local queues when a queue manager is restarted following an unplanned power failure?",
    "options": [
      {
        "id": "a",
        "label": "It deletes all queues that had open transactions"
      },
      {
        "id": "b",
        "label": "The queue manager reads recovery logs, reapplies committed units of work, and backs out all uncommitted transactions to maintain database-grade ACID consistency"
      },
      {
        "id": "c",
        "label": "It prompts the operator in terminal to manually approve each uncommitted message"
      },
      {
        "id": "d",
        "label": "It converts uncommitted messages into non-persistent files"
      }
    ],
    "correctOptionId": "b"
  }
];

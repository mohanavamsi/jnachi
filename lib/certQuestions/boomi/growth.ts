import { Question } from '../../certTypes';

export const boomiGrowthQuestions: Question[] = [
  {
    id: 'boomi_gro_01',
    domain: 'growth',
    text: 'What is the role of Boomi Master Data Hub (DataHub) in enterprise data architecture?',
    options: {
      a: 'A cloud-native Master Data Management (MDM) platform that models, cleanses, matches, merges, and synchronizes "Golden Records" across disparate enterprise systems',
      b: 'A cloud storage backup service for raw CSV files',
      c: 'A relational database engine competing with Oracle and MySQL',
      d: 'A web development framework for mobile applications'
    },
    correctAnswer: 'a',
    explanation: 'Boomi DataHub provides multi-domain Master Data Management (MDM), centralizing data models, match/merge rules, deduplication, and bidirectional synchronization across source systems.'
  },
  {
    id: 'boomi_gro_02',
    domain: 'growth',
    text: 'In Boomi DataHub, what is a "Golden Record"?',
    options: {
      a: 'The single, validated, master representation of a business entity (e.g. Customer, Product, Vendor) formed by merging data across source systems according to match rules and field-level survivorship policies',
      b: 'A record awarded to the top-performing sales representative',
      c: 'A record that contains no text characters',
      d: 'An encrypted cryptographic token used for API login'
    },
    correctAnswer: 'a',
    explanation: 'A Golden Record is the canonical, deduplicated single version of truth created and maintained by DataHub from multiple contributing source systems.'
  },
  {
    id: 'boomi_gro_03',
    domain: 'growth',
    text: 'In a Boomi Molecule clustered architecture, what is the purpose of the shared network storage (NFS / SAN / EFS)?',
    options: {
      a: 'All Molecule nodes mount and share a common file system hosting the Molecule installation directory, process deployment artifacts, document tracking caches, and clustering lock files',
      b: 'To store movies and media files for employees',
      c: 'To store the operating system kernel files for each node',
      d: 'To run virtual machines inside the file system'
    },
    correctAnswer: 'a',
    explanation: 'A Molecule requires shared high-performance storage (NFS v4 / SMB / EFS) where all nodes share component caches, deployment packages, and coordination state.'
  },
  {
    id: 'boomi_gro_04',
    domain: 'growth',
    text: 'What clustering protocol does a Boomi Molecule use to manage node discovery, cluster membership, and workload distribution across nodes?',
    options: {
      a: 'JGroups (multicast, TCP unicast, or cloud discovery protocols like AWS S3_PING / Azure PING)',
      b: 'BGP (Border Gateway Protocol)',
      c: 'HTTP/1.0 polling only',
      d: 'DNS Round Robin without heartbeats'
    },
    correctAnswer: 'a',
    explanation: 'Boomi Molecules use JGroups for cluster coordination, dynamic node membership detection, split-brain avoidance, and distributed execution locking.'
  },
  {
    id: 'boomi_gro_05',
    domain: 'growth',
    text: 'What is the "Packaged Component" and "Packaged Deployment" workflow in Boomi modern lifecycle management?',
    options: {
      a: 'Creating immutable, versioned packages of components (with unique version numbers and release notes) that can be deployed, promoted across environments (Dev -> QA -> Prod), or rolled back with full auditability',
      b: 'Packaging software into cardboard boxes for shipping',
      c: 'Compressing source code into password-protected RAR files',
      d: 'Exporting processes as HTML web pages'
    },
    correctAnswer: 'a',
    explanation: 'Packaged Deployments create immutable, versioned deployment artifacts that can be promoted across environments via CI/CD pipelines or AtomSphere UI with consistent version tracking.'
  },
  {
    id: 'boomi_gro_06',
    domain: 'growth',
    text: 'How can an integration DevOps engineer automate Boomi process packaging, deployment, and environment extension updates in a CI/CD pipeline (e.g. Jenkins, GitHub Actions, Azure DevOps)?',
    options: {
      a: 'By invoking the Boomi AtomSphere REST API / Partner API (objects like `PackagedComponent`, `Deployment`, `EnvironmentExtension`) or using the Boomi CLI / Terraform Provider',
      b: 'By using automated mouse clicks on the web browser screen',
      c: 'By emailing support tickets to Boomi customer service',
      d: 'Deployments cannot be automated in Boomi'
    },
    correctAnswer: 'a',
    explanation: 'The Boomi AtomSphere API provides programmatic CRUD access to deploy packages, update environment extensions, and manage runtimes in automated DevOps pipelines.'
  },
  {
    id: 'boomi_gro_07',
    domain: 'growth',
    text: 'In Boomi DataHub, what is a "Quarantine" state for an incoming record contribution?',
    options: {
      a: 'A state where an incoming record is held for manual data steward review because it violated validation rules, had ambiguous match candidates, or required duplicate approval',
      b: 'A state where the record is permanently deleted from the database',
      c: 'A state where the record is sent to a virus analysis lab',
      d: 'A state where the record is published to social media'
    },
    correctAnswer: 'a',
    explanation: 'Quarantined records in DataHub require data steward intervention when match rules produce multiple candidates or data quality checks fail.'
  },
  {
    id: 'boomi_gro_08',
    domain: 'growth',
    text: 'What is the purpose of JVM heap tuning (`-Xms` and `-Xmx` in `atom.vmoptions`) on a high-volume Boomi Molecule node?',
    options: {
      a: 'To allocate sufficient memory (e.g. 8GB, 16GB, or 32GB) to the JVM to process large document batches and prevent `java.lang.OutOfMemoryError` during peak loads',
      b: 'To increase the download speed of web pages',
      c: 'To format hard disk drives',
      d: 'To reduce the CPU clock frequency'
    },
    correctAnswer: 'a',
    explanation: 'Configuring `-Xms` and `-Xmx` in `atom.vmoptions` ensures the Atom/Molecule JVM has adequate memory allocation for document caching and concurrent process executions.'
  },
  {
    id: 'boomi_gro_09',
    domain: 'growth',
    text: 'What is the function of "Forked Execution" (or Multi-Process mode) on a Boomi Molecule or Atom Cloud?',
    options: {
      a: 'Each process execution runs inside its own isolated, short-lived child JVM worker process rather than within the main controller JVM, preventing one heavy job from crashing other jobs',
      b: 'It splits the Molecule into two independent companies',
      c: 'It forces developers to use Git fork commands',
      d: 'It duplicates data across two separate hard drives'
    },
    correctAnswer: 'a',
    explanation: 'Forked Execution spawns separate JVM processes for each integration execution, providing process isolation, fault tolerance, and dedicated memory limits per execution.'
  },
  {
    id: 'boomi_gro_10',
    domain: 'growth',
    text: 'In Boomi Molecule administration, what is the role of the "Head Node"?',
    options: {
      a: 'The node elected by JGroups to coordinate cluster scheduling, communication with the AtomSphere platform, and dispatching execution tasks across cluster worker nodes',
      b: 'The node that has the fastest internet connection',
      c: 'The node with the largest monitor screen attached',
      d: 'The node used exclusively by the IT manager'
    },
    correctAnswer: 'a',
    explanation: 'The Head Node coordinates cluster heartbeat pings, scheduled process dispatching, and AtomSphere platform communication. If it fails, JGroups elects a new head node automatically.'
  },
  {
    id: 'boomi_gro_11',
    domain: 'growth',
    text: 'How can an integration architect monitor Boomi runtime health, JVM metrics, and process execution telemetry in Datadog, Prometheus, or Splunk?',
    options: {
      a: 'Enable JMX (Java Management Extensions) monitoring on the Atom, scrape JVM metrics, and ingest Atom execution logs / AtomSphere Event API streams',
      b: 'Take daily screenshots of the Process Reporting page',
      c: 'Ask users to report slow processes via email',
      d: 'Boomi cannot be monitored with third-party tools'
    },
    correctAnswer: 'a',
    explanation: 'Enabling JMX on the Atom allows APM tools (Datadog, Dynatrace, Prometheus) to monitor JVM memory, thread counts, and garbage collection, while log forwarders stream execution logs.'
  },
  {
    id: 'boomi_gro_12',
    domain: 'growth',
    text: 'What is the role of "Match Rules" in Boomi Master Data Hub models?',
    options: {
      a: 'They define the criteria (exact match, fuzzy match, composite keys) used to determine whether an incoming entity record matches an existing Golden Record',
      b: 'They match colors in the UI designer',
      c: 'They compare developer salaries across departments',
      d: 'They match network IP addresses with domain names'
    },
    correctAnswer: 'a',
    explanation: 'Match Rules in DataHub evaluate incoming records against existing golden records using exact or fuzzy algorithms to prevent duplicate entity creation.'
  },
  {
    id: 'boomi_gro_13',
    domain: 'growth',
    text: 'What is "Survivorship Rules" (or Field Survivorship) in Boomi DataHub?',
    options: {
      a: 'Rules that determine which source system\'s data values take precedence when updating individual fields on a Golden Record (e.g. CRM wins for Address, ERP wins for CreditLimit)',
      b: 'Rules for surviving unexpected server crashes',
      c: 'Game rules for team-building competitions',
      d: 'Disaster recovery failover timers'
    },
    correctAnswer: 'a',
    explanation: 'Field survivorship rules establish source priority and update conditions per field, ensuring the most authoritative source updates each specific attribute on the Golden Record.'
  },
  {
    id: 'boomi_gro_14',
    domain: 'growth',
    text: 'In Boomi, how does an administrator roll back a deployed process to a previous known good version in Production?',
    options: {
      a: 'Navigate to Deployments, select the desired previous Package Version from deployment history, and click "Deploy" to reactivate that version immediately',
      b: 'Manually retype the entire process in the designer',
      c: 'Restore the entire server from a bare-metal tape backup',
      d: 'Rollbacks are not possible in Boomi'
    },
    correctAnswer: 'a',
    explanation: 'Boomi preserves complete version history for all packaged deployments, enabling one-click instant rollbacks to any prior package version.'
  },
  {
    id: 'boomi_gro_15',
    domain: 'growth',
    text: 'What parameter in `container.properties` controls the local temporary directory location (`java.io.tmpdir`) for high-speed I/O on an Atom?',
    options: {
      a: '`com.boomi.container.worker.tmpDir` or `java.io.tmpdir` pointed to local fast NVMe/SSD storage rather than slow shared NFS',
      b: '`server.ram.disk`',
      c: '`system.swap.file`',
      d: '`boomi.cache.size`'
    },
    correctAnswer: 'a',
    explanation: 'Pointing the Atom temporary directory to fast local NVMe/SSD storage (rather than shared NFS) dramatically improves file I/O and process execution performance.'
  },
  {
    id: 'boomi_gro_16',
    domain: 'growth',
    text: 'What is the purpose of the "Boomi Enterprise Site-to-Site Disaster Recovery (DR)" strategy?',
    options: {
      a: 'Maintaining an active Molecule in Region A and a standby Molecule in Region B with replicated shared storage or synchronized deployment packages for geographic redundancy',
      b: 'Storing paper copies of process designs in a fireproof safe',
      c: 'Running daily virus scans on development laptops',
      d: 'Using two different internet service providers on one router'
    },
    correctAnswer: 'a',
    explanation: 'Cross-region DR architectures deploy secondary standby Molecules with automated package synchronization and DNS failover to guarantee business continuity during regional cloud outages.'
  },
  {
    id: 'boomi_gro_17',
    domain: 'growth',
    text: 'In Boomi DataHub, what is an "Outbound Channel"?',
    options: {
      a: 'A publication channel that propagates Golden Record create/update/delete events to subscribing target systems to keep enterprise datasets synchronized',
      b: 'A YouTube channel for Boomi tutorial videos',
      c: 'A dedicated fiber optic cable between two buildings',
      d: 'A radio frequency for wireless Atoms'
    },
    correctAnswer: 'a',
    explanation: 'Outbound channels in DataHub deliver golden record changes (as delta batches) to downstream subscribing systems via Boomi integration processes.'
  },
  {
    id: 'boomi_gro_18',
    domain: 'growth',
    text: 'What is the role of the Boomi "Queue" (or Atom Queue) connector?',
    options: {
      a: 'A lightweight message queuing mechanism built directly into local Atoms and Molecules supporting point-to-point and pub/sub messaging patterns for asynchronous decoupling',
      b: 'A queue for customers waiting on telephone support',
      c: 'A print spooler for physical documents',
      d: 'A task list for development teams'
    },
    correctAnswer: 'a',
    explanation: 'Atom Queuing provides embedded, persistent message queues and topics on the Atom/Molecule runtime, enabling event-driven architecture without external brokers.'
  },
  {
    id: 'boomi_gro_19',
    domain: 'growth',
    text: 'What happens when a node in a 4-node Boomi Molecule experiences a sudden power loss or kernel panic?',
    options: {
      a: 'JGroups detects the missing heartbeat, removes the node from cluster membership, and remaining nodes continue processing tasks without service interruption',
      b: 'The entire Molecule cluster halts all executions immediately',
      c: 'All data on the shared storage is permanently deleted',
      d: 'An administrator must manually reboot the cluster from scratch'
    },
    correctAnswer: 'a',
    explanation: 'The Molecule cluster dynamically adapts to node failure via JGroups gossip protocols; in-flight executions on that node are retried or rescheduled by the remaining healthy nodes.'
  },
  {
    id: 'boomi_gro_20',
    domain: 'growth',
    text: 'What is the purpose of the "Component Version History" tab in the Boomi Component Explorer?',
    options: {
      a: 'To view historical revisions of a component, compare differences between revisions, and restore earlier versions if needed',
      b: 'To view the purchase history of computer hardware',
      c: 'To list user passwords created in the past',
      d: 'To check the Java JDK release version'
    },
    correctAnswer: 'a',
    explanation: 'Version History maintains an audit log of every revision saved for a component, allowing developers to review changes and restore prior revisions.'
  },
  {
    id: 'boomi_gro_21',
    domain: 'growth',
    text: 'In Boomi performance tuning, what is the impact of excessive "Extended Logging" enabled in Production environments?',
    options: {
      a: 'It increases disk I/O overhead and generates massive log directories, degrading overall throughput and filling up storage rapidly',
      b: 'It improves process execution speed by 50%',
      c: 'It reduces memory usage to zero',
      d: 'It automatically fixes mapping errors in processes'
    },
    correctAnswer: 'a',
    explanation: 'Extended logging logs every intermediate document payload at every shape, which introduces significant disk I/O bottlenecks and should be disabled in high-volume production.'
  },
  {
    id: 'boomi_gro_22',
    domain: 'growth',
    text: 'What is the function of the `restart.sh` / `restart.bat` script in a Boomi Atom directory?',
    options: {
      a: 'To gracefully stop and restart the Atom/Molecule service daemon process',
      b: 'To format the host operating system drive',
      c: 'To delete all deployed integration processes',
      d: 'To reinstall the Java Runtime Environment'
    },
    correctAnswer: 'a',
    explanation: 'The restart script stops the Java service process gracefully (waiting for active jobs to quiesce if configured) and restarts the runtime daemon.'
  },
  {
    id: 'boomi_gro_23',
    domain: 'growth',
    text: 'How can an integration architect scale a Boomi Web Services Server API listener across multiple nodes in a Molecule?',
    options: {
      a: 'Place an external Hardware / Cloud Load Balancer (e.g. AWS ALB or F5) in front of the Molecule nodes to distribute incoming HTTPS traffic across node listener ports',
      b: 'Assign the same IP address to all network cards simultaneously',
      c: 'Run the API in single-threaded mode on one laptop',
      d: 'Boomi APIs cannot be load balanced'
    },
    correctAnswer: 'a',
    explanation: 'An external Load Balancer terminates or routes HTTPS requests across the shared web server ports of all active Molecule worker nodes for horizontal scalability.'
  },
  {
    id: 'boomi_gro_24',
    domain: 'growth',
    text: 'What is the purpose of the "Release Notes" field when creating a Packaged Component in Boomi?',
    options: {
      a: 'To document change descriptions, ticket numbers (e.g. JIRA keys), and release summaries for governance and audit tracking across deployment promotions',
      b: 'To notify newspaper journalists about software updates',
      c: 'To create marketing social media posts',
      d: 'To write legal disclaimer terms for end-users'
    },
    correctAnswer: 'a',
    explanation: 'Release notes attach structured change documentation directly to the versioned package metadata for audit compliance.'
  },
  {
    id: 'boomi_gro_25',
    domain: 'growth',
    text: 'In Boomi DataHub, what is the role of "Data Quality Steps" in a domain model?',
    options: {
      a: 'They execute external validation services (e.g. address verification with Loqate or Dun & Bradstreet company enrichment) on contributing records before match evaluation',
      b: 'They spell-check user comments in forums',
      c: 'They format images for web display',
      d: 'They measure network ping latency'
    },
    correctAnswer: 'a',
    explanation: 'Data Quality steps invoke third-party enrichment/validation APIs to standardize and cleanse record attributes before match rules and survivorship are applied.'
  },
  {
    id: 'boomi_gro_26',
    domain: 'growth',
    text: 'What is the function of the `counters.properties` file in an Atom runtime?',
    options: {
      a: 'It persists runtime sequence counters used by sequential number generation map functions across executions',
      b: 'It counts the number of times developers log in',
      c: 'It measures electric power consumption',
      d: 'It stores database table primary keys'
    },
    correctAnswer: 'a',
    explanation: '`counters.properties` maintains persistent counter sequences for unique identifier generation across process runs.'
  },
  {
    id: 'boomi_gro_27',
    domain: 'growth',
    text: 'What is the recommended file system protocol for shared storage across Linux nodes in a high-performance Boomi Molecule cluster?',
    options: {
      a: 'NFS v4 with POSIX file locking support and optimized mount options (`noatime`, `rsize/wsize=1048576`) or high-throughput clustered storage (AWS EFS / Azure NetApp)',
      b: 'FAT16 file system on USB drive',
      c: 'FTP file transfer over dial-up modem',
      d: 'Unsynchronized local ramdisks'
    },
    correctAnswer: 'a',
    explanation: 'NFSv4 or enterprise distributed storage (EFS/NetApp) with POSIX locking guarantees reliable file locking, synchronization, and I/O throughput across Molecule nodes.'
  },
  {
    id: 'boomi_gro_28',
    domain: 'growth',
    text: 'In Boomi CI/CD pipelines, how can automated regression testing of processes be executed before production deployment?',
    options: {
      a: 'By triggering dedicated automated test processes via the AtomSphere API `executeProcess` endpoint on a QA Atom and verifying execution logs and target datasets',
      b: 'By manually running each process in Test Mode in the browser',
      c: 'By reading the code aloud in team meetings',
      d: 'Regression testing cannot be performed in Boomi'
    },
    correctAnswer: 'a',
    explanation: 'Test harnesses invoke `executeProcess` via the AtomSphere API against test runtimes, asserting outputs against expected baselines in automated pipeline stages.'
  },
  {
    id: 'boomi_gro_29',
    domain: 'growth',
    text: 'What is the purpose of the "Low Latency" execution mode on Boomi Web Services processes?',
    options: {
      a: 'It disables step-by-step document tracking and disk state writing, executing the entire process strictly in-memory for sub-second REST/SOAP API response times',
      b: 'It slows down process execution by 50% to save electricity',
      c: 'It only runs processes during off-peak night hours',
      d: 'It converts XML into CSV before processing'
    },
    correctAnswer: 'a',
    explanation: 'Low Latency mode eliminates disk persistence and document tracking for high-speed synchronous web services, delivering maximum throughput and millisecond response times.'
  },
  {
    id: 'boomi_gro_30',
    domain: 'growth',
    text: 'What is the role of Boomi "Event Streams" in modern event-driven architectures?',
    options: {
      a: 'A multi-tenant event streaming backbone providing high-throughput, decoupled publish-subscribe messaging and event streaming directly integrated into Boomi processes',
      b: 'A video streaming platform for corporate webinars',
      c: 'A software screen recorder for video games',
      d: 'A tool for streaming music to office speakers'
    },
    correctAnswer: 'a',
    explanation: 'Boomi Event Streams provides a cloud-native event backbone to publish, route, and consume high-volume asynchronous event streams across enterprise integration patterns.'
  }
];

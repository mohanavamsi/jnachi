import { CertQuestion } from '../types';

export const BOOMI_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "boomi_gro_01",
    "section": "growth",
    "prompt": "What is the role of Boomi Master Data Hub (DataHub) in enterprise data architecture?",
    "options": [
      {
        "id": "a",
        "label": "A cloud storage backup service for raw CSV files"
      },
      {
        "id": "b",
        "label": "A cloud-native Master Data Management (MDM) platform that models, cleanses, matches, merges, and synchronizes \"Golden Records\" across disparate enterprise systems"
      },
      {
        "id": "c",
        "label": "A relational database engine competing with Oracle and MySQL"
      },
      {
        "id": "d",
        "label": "A web development framework for mobile applications"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_gro_02",
    "section": "growth",
    "prompt": "In Boomi DataHub, what is a \"Golden Record\"?",
    "options": [
      {
        "id": "a",
        "label": "A record awarded to the top-performing sales representative"
      },
      {
        "id": "b",
        "label": "A record that contains no text characters"
      },
      {
        "id": "c",
        "label": "The single, validated, master representation of a business entity (e.g. Customer, Product, Vendor) formed by merging data across source systems according to match rules and field-level survivorship policies"
      },
      {
        "id": "d",
        "label": "An encrypted cryptographic token used for API login"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_gro_03",
    "section": "growth",
    "prompt": "In a Boomi Molecule clustered architecture, what is the purpose of the shared network storage (NFS / SAN / EFS)?",
    "options": [
      {
        "id": "a",
        "label": "All Molecule nodes mount and share a common file system hosting the Molecule installation directory, process deployment artifacts, document tracking caches, and clustering lock files"
      },
      {
        "id": "b",
        "label": "To store movies and media files for employees"
      },
      {
        "id": "c",
        "label": "To store the operating system kernel files for each node"
      },
      {
        "id": "d",
        "label": "To run virtual machines inside the file system"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_gro_04",
    "section": "growth",
    "prompt": "What clustering protocol does a Boomi Molecule use to manage node discovery, cluster membership, and workload distribution across nodes?",
    "options": [
      {
        "id": "a",
        "label": "BGP (Border Gateway Protocol)"
      },
      {
        "id": "b",
        "label": "HTTP/1.0 polling only"
      },
      {
        "id": "c",
        "label": "DNS Round Robin without heartbeats"
      },
      {
        "id": "d",
        "label": "JGroups (multicast, TCP unicast, or cloud discovery protocols like AWS S3_PING / Azure PING)"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_gro_05",
    "section": "growth",
    "prompt": "What is the \"Packaged Component\" and \"Packaged Deployment\" workflow in Boomi modern lifecycle management?",
    "options": [
      {
        "id": "a",
        "label": "Packaging software into cardboard boxes for shipping"
      },
      {
        "id": "b",
        "label": "Compressing source code into password-protected RAR files"
      },
      {
        "id": "c",
        "label": "Creating immutable, versioned packages of components (with unique version numbers and release notes) that can be deployed, promoted across environments (Dev -> QA -> Prod), or rolled back with full auditability"
      },
      {
        "id": "d",
        "label": "Exporting processes as HTML web pages"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_gro_06",
    "section": "growth",
    "prompt": "How can an integration DevOps engineer automate Boomi process packaging, deployment, and environment extension updates in a CI/CD pipeline (e.g. Jenkins, GitHub Actions, Azure DevOps)?",
    "options": [
      {
        "id": "a",
        "label": "By invoking the Boomi AtomSphere REST API / Partner API (objects like `PackagedComponent`, `Deployment`, `EnvironmentExtension`) or using the Boomi CLI / Terraform Provider"
      },
      {
        "id": "b",
        "label": "By using automated mouse clicks on the web browser screen"
      },
      {
        "id": "c",
        "label": "By emailing support tickets to Boomi customer service"
      },
      {
        "id": "d",
        "label": "Deployments cannot be automated in Boomi"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_gro_07",
    "section": "growth",
    "prompt": "In Boomi DataHub, what is a \"Quarantine\" state for an incoming record contribution?",
    "options": [
      {
        "id": "a",
        "label": "A state where the record is permanently deleted from the database"
      },
      {
        "id": "b",
        "label": "A state where the record is sent to a virus analysis lab"
      },
      {
        "id": "c",
        "label": "A state where the record is published to social media"
      },
      {
        "id": "d",
        "label": "A state where an incoming record is held for manual data steward review because it violated validation rules, had ambiguous match candidates, or required duplicate approval"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_gro_08",
    "section": "growth",
    "prompt": "What is the purpose of JVM heap tuning (`-Xms` and `-Xmx` in `atom.vmoptions`) on a high-volume Boomi Molecule node?",
    "options": [
      {
        "id": "a",
        "label": "To increase the download speed of web pages"
      },
      {
        "id": "b",
        "label": "To allocate sufficient memory (e.g. 8GB, 16GB, or 32GB) to the JVM to process large document batches and prevent `java.lang.OutOfMemoryError` during peak loads"
      },
      {
        "id": "c",
        "label": "To format hard disk drives"
      },
      {
        "id": "d",
        "label": "To reduce the CPU clock frequency"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_gro_09",
    "section": "growth",
    "prompt": "What is the function of \"Forked Execution\" (or Multi-Process mode) on a Boomi Molecule or Atom Cloud?",
    "options": [
      {
        "id": "a",
        "label": "It splits the Molecule into two independent companies"
      },
      {
        "id": "b",
        "label": "It forces developers to use Git fork commands"
      },
      {
        "id": "c",
        "label": "It duplicates data across two separate hard drives"
      },
      {
        "id": "d",
        "label": "Each process execution runs inside its own isolated, short-lived child JVM worker process rather than within the main controller JVM, preventing one heavy job from crashing other jobs"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_gro_10",
    "section": "growth",
    "prompt": "In Boomi Molecule administration, what is the role of the \"Head Node\"?",
    "options": [
      {
        "id": "a",
        "label": "The node that has the fastest internet connection"
      },
      {
        "id": "b",
        "label": "The node elected by JGroups to coordinate cluster scheduling, communication with the AtomSphere platform, and dispatching execution tasks across cluster worker nodes"
      },
      {
        "id": "c",
        "label": "The node with the largest monitor screen attached"
      },
      {
        "id": "d",
        "label": "The node used exclusively by the IT manager"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_gro_11",
    "section": "growth",
    "prompt": "How can an integration architect monitor Boomi runtime health, JVM metrics, and process execution telemetry in Datadog, Prometheus, or Splunk?",
    "options": [
      {
        "id": "a",
        "label": "Take daily screenshots of the Process Reporting page"
      },
      {
        "id": "b",
        "label": "Ask users to report slow processes via email"
      },
      {
        "id": "c",
        "label": "Enable JMX (Java Management Extensions) monitoring on the Atom, scrape JVM metrics, and ingest Atom execution logs / AtomSphere Event API streams"
      },
      {
        "id": "d",
        "label": "Boomi cannot be monitored with third-party tools"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_gro_12",
    "section": "growth",
    "prompt": "What is the role of \"Match Rules\" in Boomi Master Data Hub models?",
    "options": [
      {
        "id": "a",
        "label": "They define the criteria (exact match, fuzzy match, composite keys) used to determine whether an incoming entity record matches an existing Golden Record"
      },
      {
        "id": "b",
        "label": "They match colors in the UI designer"
      },
      {
        "id": "c",
        "label": "They compare developer salaries across departments"
      },
      {
        "id": "d",
        "label": "They match network IP addresses with domain names"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_gro_13",
    "section": "growth",
    "prompt": "What is \"Survivorship Rules\" (or Field Survivorship) in Boomi DataHub?",
    "options": [
      {
        "id": "a",
        "label": "Rules that determine which source system's data values take precedence when updating individual fields on a Golden Record (e.g. CRM wins for Address, ERP wins for CreditLimit)"
      },
      {
        "id": "b",
        "label": "Rules for surviving unexpected server crashes"
      },
      {
        "id": "c",
        "label": "Game rules for team-building competitions"
      },
      {
        "id": "d",
        "label": "Disaster recovery failover timers"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_gro_14",
    "section": "growth",
    "prompt": "In Boomi, how does an administrator roll back a deployed process to a previous known good version in Production?",
    "options": [
      {
        "id": "a",
        "label": "Manually retype the entire process in the designer"
      },
      {
        "id": "b",
        "label": "Restore the entire server from a bare-metal tape backup"
      },
      {
        "id": "c",
        "label": "Rollbacks are not possible in Boomi"
      },
      {
        "id": "d",
        "label": "Navigate to Deployments, select the desired previous Package Version from deployment history, and click \"Deploy\" to reactivate that version immediately"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_gro_15",
    "section": "growth",
    "prompt": "What parameter in `container.properties` controls the local temporary directory location (`java.io.tmpdir`) for high-speed I/O on an Atom?",
    "options": [
      {
        "id": "a",
        "label": "`server.ram.disk`"
      },
      {
        "id": "b",
        "label": "`com.boomi.container.worker.tmpDir` or `java.io.tmpdir` pointed to local fast NVMe/SSD storage rather than slow shared NFS"
      },
      {
        "id": "c",
        "label": "`system.swap.file`"
      },
      {
        "id": "d",
        "label": "`boomi.cache.size`"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_gro_16",
    "section": "growth",
    "prompt": "What is the purpose of the \"Boomi Enterprise Site-to-Site Disaster Recovery (DR)\" strategy?",
    "options": [
      {
        "id": "a",
        "label": "Storing paper copies of process designs in a fireproof safe"
      },
      {
        "id": "b",
        "label": "Running daily virus scans on development laptops"
      },
      {
        "id": "c",
        "label": "Maintaining an active Molecule in Region A and a standby Molecule in Region B with replicated shared storage or synchronized deployment packages for geographic redundancy"
      },
      {
        "id": "d",
        "label": "Using two different internet service providers on one router"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_gro_17",
    "section": "growth",
    "prompt": "In Boomi DataHub, what is an \"Outbound Channel\"?",
    "options": [
      {
        "id": "a",
        "label": "A YouTube channel for Boomi tutorial videos"
      },
      {
        "id": "b",
        "label": "A publication channel that propagates Golden Record create/update/delete events to subscribing target systems to keep enterprise datasets synchronized"
      },
      {
        "id": "c",
        "label": "A dedicated fiber optic cable between two buildings"
      },
      {
        "id": "d",
        "label": "A radio frequency for wireless Atoms"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_gro_18",
    "section": "growth",
    "prompt": "What is the role of the Boomi \"Queue\" (or Atom Queue) connector?",
    "options": [
      {
        "id": "a",
        "label": "A lightweight message queuing mechanism built directly into local Atoms and Molecules supporting point-to-point and pub/sub messaging patterns for asynchronous decoupling"
      },
      {
        "id": "b",
        "label": "A queue for customers waiting on telephone support"
      },
      {
        "id": "c",
        "label": "A print spooler for physical documents"
      },
      {
        "id": "d",
        "label": "A task list for development teams"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_gro_19",
    "section": "growth",
    "prompt": "What happens when a node in a 4-node Boomi Molecule experiences a sudden power loss or kernel panic?",
    "options": [
      {
        "id": "a",
        "label": "The entire Molecule cluster halts all executions immediately"
      },
      {
        "id": "b",
        "label": "All data on the shared storage is permanently deleted"
      },
      {
        "id": "c",
        "label": "An administrator must manually reboot the cluster from scratch"
      },
      {
        "id": "d",
        "label": "JGroups detects the missing heartbeat, removes the node from cluster membership, and remaining nodes continue processing tasks without service interruption"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_gro_20",
    "section": "growth",
    "prompt": "What is the purpose of the \"Component Version History\" tab in the Boomi Component Explorer?",
    "options": [
      {
        "id": "a",
        "label": "To view the purchase history of computer hardware"
      },
      {
        "id": "b",
        "label": "To list user passwords created in the past"
      },
      {
        "id": "c",
        "label": "To view historical revisions of a component, compare differences between revisions, and restore earlier versions if needed"
      },
      {
        "id": "d",
        "label": "To check the Java JDK release version"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_gro_21",
    "section": "growth",
    "prompt": "In Boomi performance tuning, what is the impact of excessive \"Extended Logging\" enabled in Production environments?",
    "options": [
      {
        "id": "a",
        "label": "It improves process execution speed by 50%"
      },
      {
        "id": "b",
        "label": "It reduces memory usage to zero"
      },
      {
        "id": "c",
        "label": "It increases disk I/O overhead and generates massive log directories, degrading overall throughput and filling up storage rapidly"
      },
      {
        "id": "d",
        "label": "It automatically fixes mapping errors in processes"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_gro_22",
    "section": "growth",
    "prompt": "What is the function of the `restart.sh` / `restart.bat` script in a Boomi Atom directory?",
    "options": [
      {
        "id": "a",
        "label": "To format the host operating system drive"
      },
      {
        "id": "b",
        "label": "To delete all deployed integration processes"
      },
      {
        "id": "c",
        "label": "To reinstall the Java Runtime Environment"
      },
      {
        "id": "d",
        "label": "To gracefully stop and restart the Atom/Molecule service daemon process"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_gro_23",
    "section": "growth",
    "prompt": "How can an integration architect scale a Boomi Web Services Server API listener across multiple nodes in a Molecule?",
    "options": [
      {
        "id": "a",
        "label": "Place an external Hardware / Cloud Load Balancer (e.g. AWS ALB or F5) in front of the Molecule nodes to distribute incoming HTTPS traffic across node listener ports"
      },
      {
        "id": "b",
        "label": "Assign the same IP address to all network cards simultaneously"
      },
      {
        "id": "c",
        "label": "Run the API in single-threaded mode on one laptop"
      },
      {
        "id": "d",
        "label": "Boomi APIs cannot be load balanced"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_gro_24",
    "section": "growth",
    "prompt": "What is the purpose of the \"Release Notes\" field when creating a Packaged Component in Boomi?",
    "options": [
      {
        "id": "a",
        "label": "To notify newspaper journalists about software updates"
      },
      {
        "id": "b",
        "label": "To document change descriptions, ticket numbers (e.g. JIRA keys), and release summaries for governance and audit tracking across deployment promotions"
      },
      {
        "id": "c",
        "label": "To create marketing social media posts"
      },
      {
        "id": "d",
        "label": "To write legal disclaimer terms for end-users"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_gro_25",
    "section": "growth",
    "prompt": "In Boomi DataHub, what is the role of \"Data Quality Steps\" in a domain model?",
    "options": [
      {
        "id": "a",
        "label": "They spell-check user comments in forums"
      },
      {
        "id": "b",
        "label": "They format images for web display"
      },
      {
        "id": "c",
        "label": "They measure network ping latency"
      },
      {
        "id": "d",
        "label": "They execute external validation services (e.g. address verification with Loqate or Dun & Bradstreet company enrichment) on contributing records before match evaluation"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "boomi_gro_26",
    "section": "growth",
    "prompt": "What is the function of the `counters.properties` file in an Atom runtime?",
    "options": [
      {
        "id": "a",
        "label": "It counts the number of times developers log in"
      },
      {
        "id": "b",
        "label": "It measures electric power consumption"
      },
      {
        "id": "c",
        "label": "It persists runtime sequence counters used by sequential number generation map functions across executions"
      },
      {
        "id": "d",
        "label": "It stores database table primary keys"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "boomi_gro_27",
    "section": "growth",
    "prompt": "What is the recommended file system protocol for shared storage across Linux nodes in a high-performance Boomi Molecule cluster?",
    "options": [
      {
        "id": "a",
        "label": "FAT16 file system on USB drive"
      },
      {
        "id": "b",
        "label": "NFS v4 with POSIX file locking support and optimized mount options (`noatime`, `rsize/wsize=1048576`) or high-throughput clustered storage (AWS EFS / Azure NetApp)"
      },
      {
        "id": "c",
        "label": "FTP file transfer over dial-up modem"
      },
      {
        "id": "d",
        "label": "Unsynchronized local ramdisks"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "boomi_gro_28",
    "section": "growth",
    "prompt": "In Boomi CI/CD pipelines, how can automated regression testing of processes be executed before production deployment?",
    "options": [
      {
        "id": "a",
        "label": "By triggering dedicated automated test processes via the AtomSphere API `executeProcess` endpoint on a QA Atom and verifying execution logs and target datasets"
      },
      {
        "id": "b",
        "label": "By manually running each process in Test Mode in the browser"
      },
      {
        "id": "c",
        "label": "By reading the code aloud in team meetings"
      },
      {
        "id": "d",
        "label": "Regression testing cannot be performed in Boomi"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_gro_29",
    "section": "growth",
    "prompt": "What is the purpose of the \"Low Latency\" execution mode on Boomi Web Services processes?",
    "options": [
      {
        "id": "a",
        "label": "It disables step-by-step document tracking and disk state writing, executing the entire process strictly in-memory for sub-second REST/SOAP API response times"
      },
      {
        "id": "b",
        "label": "It slows down process execution by 50% to save electricity"
      },
      {
        "id": "c",
        "label": "It only runs processes during off-peak night hours"
      },
      {
        "id": "d",
        "label": "It converts XML into CSV before processing"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "boomi_gro_30",
    "section": "growth",
    "prompt": "What is the role of Boomi \"Event Streams\" in modern event-driven architectures?",
    "options": [
      {
        "id": "a",
        "label": "A video streaming platform for corporate webinars"
      },
      {
        "id": "b",
        "label": "A multi-tenant event streaming backbone providing high-throughput, decoupled publish-subscribe messaging and event streaming directly integrated into Boomi processes"
      },
      {
        "id": "c",
        "label": "A software screen recorder for video games"
      },
      {
        "id": "d",
        "label": "A tool for streaming music to office speakers"
      }
    ],
    "correctOptionId": "b"
  }
];

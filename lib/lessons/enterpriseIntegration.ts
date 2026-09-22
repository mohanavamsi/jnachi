import type { Lesson } from '../lessonsData';

export const ENTERPRISE_INTEGRATION_LESSONS: Lesson[] = [
  // -------------------------------------------------------------
  // Lesson 18: Enterprise Integration Fundamentals & Architecture Patterns
  // -------------------------------------------------------------
  {
    id: 'lesson-18',
    slug: 'enterprise-integration-foundations',
    title: 'Enterprise Integration Fundamentals & Architectural Patterns',
    description: 'Master core Enterprise Integration Patterns (EIP), messaging topologies, and synchronous vs asynchronous communication tradeoffs across modern hybrid architectures.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '8 min read',
    lessonNumber: 18,
    difficulty: 'Beginner',
    keyTakeaways: [
      'Enterprise integration decouples heterogeneous systems using standard messaging patterns (Router, Splitter, Aggregator, Dead Letter Channel)',
      'Synchronous REST/RPC creates tight temporal coupling; asynchronous event-driven messaging enables resilience, buffering, and peak load shaving',
      'Hub-and-Spoke and modern iPaaS platforms eliminate brittle point-to-point spaghetti architectures by centralizing routing, security, and transformation',
    ],
    tools: ['Enterprise Integration Patterns (EIP)', 'MuleSoft', 'Boomi', 'IBM MQ', 'webMethods'],
    relatedCertifications: ['Enterprise Integration Architect', 'MuleSoft Developer', 'IBM MQ Administrator'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Basic understanding of HTTP, JSON, and REST APIs'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Modern enterprises operate hundreds of disparate applications: ERPs (SAP, Oracle), CRMs (Salesforce), legacy mainframes, cloud databases, and third-party SaaS partners. Enterprise Integration is the strategic discipline of connecting these siloed systems into a coherent, real-time nervous system.',
      core: `### The Problem: Point-to-Point Spaghetti Architecture
When systems integrate directly with one another without an abstraction layer, the number of direct interfaces grows exponentially:
$$\\text{Connections} = \\frac{N(N-1)}{2}$$
Connecting 20 systems requires up to **190 bespoke point-to-point connections**. Every system upgrade, API deprecation, or firewall modification triggers cascading failures across the enterprise.

---

### Core Enterprise Integration Patterns (EIP)
Published by Gregor Hohpe and Bobby Woolf, EIP provides the canonical architectural taxonomy used across MuleSoft, Boomi, Apache Camel, and webMethods:

| Pattern | Architectural Role | Enterprise Real-World Example |
|---|---|---|
| **Content-Based Router** | Evaluates payload fields to route messages to specific destinations | Routing orders to European fulfillment vs US fulfillment based on \`countryCode\` |
| **Splitter & Aggregator** | Breaks composite batches into individual items, processes in parallel, and merges results | Splitting a 1,000-line invoice XML file into line items for ERP validation, then aggregating totals |
| **Dead Letter Channel (DLQ)** | Captures and isolates poisoned or malformed messages after retry exhaustion | Diverting failed payment webhooks into an audit queue for manual review without blocking the pipeline |
| **Message Filter** | Drops messages that do not meet specific business criteria | Filtering out internal test transactions before dispatching events to downstream analytics |
| **Idempotent Receiver** | Detects and safely discards duplicate messages to prevent duplicate state changes | Preventing double-charging customer credit cards when network timeouts trigger client retries |

---

### Synchronous vs Asynchronous Communication

\`\`\`mermaid
sequenceDiagram
    autonumber
    Note over Client,Backend: Synchronous (Blocking): Tight Temporal Coupling
    Client->>Gateway: POST /orders (Wait for response)
    Gateway->>Inventory: Check Stock
    Inventory-->>Gateway: Stock OK
    Gateway->>Payment: Charge Card
    Payment-->>Gateway: Paid
    Gateway-->>Client: 201 Created (Blocked whole time)

    Note over Client,Queue: Asynchronous (Decoupled): Resilient & Buffered
    Client->>Gateway: POST /orders
    Gateway->>Queue: Publish OrderEvent
    Gateway-->>Client: 202 Accepted (Instant return)
    Queue->>Worker1: Consume OrderEvent
    Worker1->>Inventory: Deduct Stock
\`\`\`

1. **Synchronous (REST / gRPC / SOAP):**
   * *Pros:* Immediate request-response feedback, straightforward client programming.
   * *Cons:* Cascading failure risk, tight temporal coupling, vulnerable to downstream latency spikes.
2. **Asynchronous (JMS / AMQP / Kafka / MQ):**
   * *Pros:* Decoupled availability, built-in buffering for burst traffic, natural publish-subscribe scalability.
   * *Cons:* Eventual consistency, complex tracing and distributed debugging.`,
      tryThis: 'Map out the data flow of an order lifecycle in your organization: Identify where synchronous REST calls are necessary (e.g., immediate card authorization) vs where asynchronous message queuing should replace direct API calls (e.g., sending confirmation emails, updating ERP inventory, triggering shipping labels).',
    },
    quiz: [
      {
        question: 'Which Enterprise Integration Pattern (EIP) is specifically designed to isolate unprocessable or malformed messages without stopping the overall integration flow?',
        options: [
          'Splitter',
          'Content-Based Router',
          'Dead Letter Channel (DLQ)',
          'Message Filter',
        ],
        correctIndex: 2,
        explanation: 'A Dead Letter Channel (or Dead Letter Queue) captures messages that fail processing after maximum retry attempts, preventing poisoned messages from halting downstream queues.',
      },
      {
        question: 'What is the primary architectural drawback of a point-to-point integration strategy across 25 enterprise applications?',
        options: [
          'It requires too few firewall ports.',
          'It creates an exponentially growing web of up to 300 custom interfaces that are brittle and expensive to maintain.',
          'It forces all applications to run on the same operating system.',
          'It eliminates the need for JSON formatting.',
        ],
        correctIndex: 1,
        explanation: 'Point-to-point connections grow quadratically (N*(N-1)/2), leading to high maintenance overhead, fragile dependencies, and lack of central visibility.',
      },
      {
        question: 'When an integration consumer requires an immediate confirmation of account creation with generated ID, which interaction pattern is most appropriate?',
        options: [
          'Fire-and-Forget Asynchronous Event',
          'Synchronous Request-Reply (REST / HTTP)',
          'Scheduled Batch Polling',
          'Dead Letter Queue routing',
        ],
        correctIndex: 1,
        explanation: 'Synchronous Request-Reply blocks until the backend validates and returns the newly generated entity ID directly in the immediate response payload.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 19: API-Led Connectivity & 3-Tier Architecture in MuleSoft
  // -------------------------------------------------------------
  {
    id: 'lesson-19',
    slug: 'api-led-connectivity-mulesoft',
    title: 'API-Led Connectivity & 3-Tier Architecture in MuleSoft',
    description: 'Implement MuleSoft Anypoint Platform’s 3-tier API-Led methodology (System, Process, and Experience APIs) to maximize asset reuse and architectural agility.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 19,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'API-Led Connectivity organizes enterprise APIs into three distinct, reusable layers: System, Process, and Experience APIs',
      'System APIs unlock underlying core databases and ERPs without exposing proprietary table schemas to consumers',
      'Process APIs encapsulate business logic, aggregation, and orchestration across multiple System APIs',
      'Experience APIs format, filter, and adapt composite process data specifically tailored for distinct channels (Mobile, Web, B2B Partner)',
    ],
    tools: ['MuleSoft Anypoint Platform', 'Anypoint Studio', 'RAML / OAS 3.0', 'API Manager'],
    relatedCertifications: ['MuleSoft Certified Developer - Level 1', 'MuleSoft Certified Platform Architect'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 18: Enterprise Integration Fundamentals'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'In traditional integration projects, teams build monolithic point-to-point services that duplicate extraction, transformation, and security logic. MuleSoft’s API-Led Connectivity solves this through a structured 3-tier architecture that turns IT assets into reusable digital building blocks.',
      core: `### The 3-Tier API Architecture

\`\`\`mermaid
graph TD
    subgraph Consumers["Digital Consumer Channels"]
        MobileApp["Mobile App iOS/Android"]
        WebPortal["Customer Web Portal"]
        PartnerEDI["B2B Partner API"]
    end

    subgraph ExpLayer["Experience API Layer (Channel-Tailored)"]
        ExpMobile["Mobile Experience API<br/>(Lightweight JSON, Minimized Fields)"]
        ExpWeb["Web Experience API<br/>(Rich Metadata, Pagination)"]
        ExpPartner["Partner Experience API<br/>(Standardized B2B Contract)"]
    end

    subgraph ProcLayer["Process API Layer (Business Orchestration)"]
        OrderProc["Order Fulfillment Process API<br/>(Orchestrates Cart, Payment, Stock)"]
        CustomerProc["Customer 360 Process API<br/>(Aggregates CRM & Billing)"]
    end

    subgraph SysLayer["System API Layer (Core Asset Unlocking)"]
        SAPSys["SAP ERP System API"]
        SFSys["Salesforce System API"]
        DBSys["Customer Postgres System API"]
    end

    MobileApp --> ExpMobile
    WebPortal --> ExpWeb
    PartnerEDI --> ExpPartner

    ExpMobile --> OrderProc
    ExpMobile --> CustomerProc
    ExpWeb --> OrderProc
    ExpWeb --> CustomerProc
    ExpPartner --> OrderProc

    OrderProc --> SAPSys
    OrderProc --> SFSys
    CustomerProc --> SFSys
    CustomerProc --> DBSys
\`\`\`

---

### Layer Responsibilities & Rules of Engagement

1. **System APIs (Bottom Layer):**
   * *Role:* Provides secure, direct access to underlying systems of record (SAP, Oracle, Mainframes, Salesforce, MySQL).
   * *Design Rule:* Insulates the enterprise from legacy protocols; exposes standard REST/JSON or OAS contracts. **Zero business logic** allowed here.
   * *Lifecycle:* Slow-moving, tightly governed by central IT/ERP owners.

2. **Process APIs (Middle Layer):**
   * *Role:* Implements core business logic, orchestrating calls across multiple System APIs, data enrichment, and workflow rules.
   * *Design Rule:* Channel-agnostic. For example, \`OrderFulfillmentProcessAPI\` calculates taxes and validates discount codes whether the request originates from a phone or an in-store POS terminal.
   * *Lifecycle:* Medium agility, governed by line-of-business integration teams.

3. **Experience APIs (Top Layer):**
   * *Role:* Tailors, shapes, and filters composite data for specific consumption devices and security contexts.
   * *Design Rule:* The mobile app requires 4 fields to render a card view; the desktop web app requires 30 fields with full pagination. Experience APIs format payloads without forcing changes onto backend Process APIs.
   * *Lifecycle:* Fast-moving, owned by frontend product teams.`,
      tryThis: 'Design an API-led hierarchy for a "Customer Returns" feature: Identify which 2 System APIs unlock backend records (e.g., SAP Orders, Warehouse Inventory), what the central Process API orchestrates (e.g., ValidateReturnEligibilityProcessAPI), and how the Mobile Experience API simplifies the payload for a smartphone camera return scan.',
    },
    quiz: [
      {
        question: 'Which API-Led Connectivity layer is strictly responsible for unlocking underlying Systems of Record (like SAP or Salesforce) without embedding channel-specific business rules?',
        options: [
          'Experience API',
          'Process API',
          'System API',
          'Gateway API',
        ],
        correctIndex: 2,
        explanation: 'System APIs provide foundational access to underlying data sources and core systems of record, abstracting legacy complexities into standard RESTful interfaces.',
      },
      {
        question: 'Why does API-Led Connectivity avoid allowing frontend Mobile Apps to call System APIs directly?',
        options: [
          'Mobile devices do not support HTTPS protocols.',
          'Direct coupling exposes internal system schemas, duplicates orchestration logic across mobile and web apps, and creates security vulnerabilities.',
          'System APIs can only be written in C++.',
          'MuleSoft Anypoint Platform requires all mobile traffic to bypass gateways.',
        ],
        correctIndex: 1,
        explanation: 'Bypassing Process and Experience layers creates brittle coupling, duplicates transformation logic across every client, and directly exposes core database/ERP endpoints.',
      },
      {
        question: 'What is the primary role of an Experience API in MuleSoft architecture?',
        options: [
          'To format, filter, and adapt payloads to meet the specific requirements of a distinct client consumption channel (e.g., Mobile vs Web).',
          'To run physical database backup scripts.',
          'To manage network cables in server racks.',
          'To execute nightly batch database indexing.',
        ],
        correctIndex: 0,
        explanation: 'Experience APIs tailor composite data specifically for the consuming device, ensuring mobile clients receive lightweight payloads while web portals receive complete datasets.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 20: DataWeave 2.0: Enterprise Data Transformations
  // -------------------------------------------------------------
  {
    id: 'lesson-20',
    slug: 'mulesoft-dataweave-mastery',
    title: 'DataWeave 2.0: Enterprise Data Transformations in MuleSoft',
    description: 'Master MuleSoft DataWeave 2.0 functional transformation language to manipulate XML, JSON, Flat Files, Java objects, and streaming collections efficiently.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 20,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'DataWeave 2.0 is a pure functional programming language built for high-performance in-memory and streaming data transformation in Mule 4',
      'Pattern matching (\`match\`), mapping (\`map\`, \`mapObject\`), and filtering (\`filter\`) enable expressive transformations without mutating variables',
      'DataWeave supports seamless cross-format conversions between JSON, XML, CSV, Java, and Fixed-Width formats in single expressions',
    ],
    tools: ['DataWeave 2.0', 'Anypoint Studio', 'Mule 4 Runtime'],
    relatedCertifications: ['MuleSoft Certified Developer - Level 1', 'MuleSoft Integration Specialist'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 19: API-Led Connectivity'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'In enterprise integration, data rarely arrives in the exact format required by the destination system. DataWeave 2.0 is MuleSoft’s purpose-built functional transformation engine that processes streaming inputs and outputs across JSON, XML, CSV, and Java with sub-millisecond execution speeds.',
      core: `### DataWeave Header & Body Structure
Every DataWeave script consists of two sections separated by a delimiter (\`---\`):
1. **Header:** Directives, input/output mime-types, custom functions, namespaces, and variables.
2. **Body:** The expression generating the output structure.

\`\`\`dataweave
%dw 2.0
output application/json
var exchangeRate = 1.08
fun formatCurrency(amount: Number, currency: String = "USD") = 
    currency ++ " " ++ (amount as String {format: "#,##0.00"})
---
{
  orderId: payload.ORDER_HEADER.ID,
  customer: {
    fullName: payload.ORDER_HEADER.FIRST_NAME ++ " " ++ payload.ORDER_HEADER.LAST_NAME,
    email: lower(payload.ORDER_HEADER.EMAIL default "")
  },
  items: payload.ORDER_HEADER.LINE_ITEMS map ((item, index) -> {
    lineNumber: index + 1,
    sku: item.PRODUCT_CODE,
    quantity: item.QTY as Number,
    unitPriceUSD: formatCurrency(item.PRICE_EUR * exchangeRate, "USD"),
    isHighValue: (item.PRICE_EUR * item.QTY) > 500
  }),
  totalValueEUR: sum(payload.ORDER_HEADER.LINE_ITEMS.*PRICE_EUR)
}
\`\`\`

---

### Core DataWeave Operators & Functions

| Function / Operator | Purpose | Example |
|---|---|---|
| \`map\` | Transforms array items into a new array | \`payload.users map ((user) -> user.name)\` |
| \`mapObject\` | Iterates over key-value pairs of an object | \`payload.attributes mapObject ((v, k) -> (upper(k)): v)\` |
| \`filter\` | Selects array elements matching a Boolean predicate | \`payload.orders filter ((order) -> order.status == "PENDING")\` |
| \`groupBy\` | Groups array elements into object keys | \`payload.transactions groupBy ((tx) -> tx.category)\` |
| \`match\` | Pattern matching on types, regex, or values | \`status match { case "A" -> "ACTIVE" else -> "UNKNOWN" }\` |
| \`default\` | Provides fallback when value is \`null\` | \`payload.middleName default "N/A"\` |

---

### Streaming Large Payloads with \`deferred=true\`
For multi-gigabyte XML or CSV files, DataWeave streams data without loading entire files into JVM RAM:
\`\`\`dataweave
%dw 2.0
output application/json deferred=true
---
payload map ((row) -> {
  id: row.RECORD_ID,
  timestamp: now()
})
\`\`\``,
      tryThis: 'Write a small DataWeave snippet that takes an array of employee JSON objects, filters for employees in the "Engineering" department, and outputs a CSV string with columns: `EmployeeID`, `FullName`, `SalaryBonus` (calculated as 15% of `baseSalary`).',
    },
    quiz: [
      {
        question: 'In DataWeave 2.0, which operator provides a safe fallback value when an input field is null or missing?',
        options: [
          'fallback',
          'default',
          'coalesce',
          'orElse',
        ],
        correctIndex: 1,
        explanation: 'The `default` operator in DataWeave evaluates the right-hand expression if the left-hand expression resolves to null (e.g., `payload.email default "unknown@domain.com"`).',
      },
      {
        question: 'Which DataWeave functional operator is used to iterate over and transform the key-value pairs of a JSON Object (rather than an Array)?',
        options: [
          'map',
          'filter',
          'mapObject',
          'pluck',
        ],
        correctIndex: 2,
        explanation: '`mapObject` iterates over key-value pairs of an Object, whereas `map` is used exclusively for Arrays.',
      },
      {
        question: 'How does DataWeave 2.0 handle memory consumption when processing large multi-gigabyte files?',
        options: [
          'It writes every payload directly to the client browser cookies.',
          'It supports streaming via `deferred=true` and indexed disk buffers, preventing JVM OutOfMemoryErrors.',
          'It requires restarting the server after every 10 requests.',
          'It converts all numbers to 32-bit integers.',
        ],
        correctIndex: 1,
        explanation: 'DataWeave features native streaming capabilities and disk-backed buffers, allowing it to process multi-gigabyte payloads with minimal heap memory usage.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 21: Boomi AtomSphere: Atoms, Molecules, and Integration Clouds
  // -------------------------------------------------------------
  {
    id: 'lesson-21',
    slug: 'boomi-atomsphere-architecture',
    title: 'Boomi AtomSphere: Atoms, Molecules, and Integration Clouds',
    description: 'Understand the multi-tenant architecture of Boomi AtomSphere, comparing single-tenant Atoms, high-availability Molecules, and Cloud runtime execution engines.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '8 min read',
    lessonNumber: 21,
    difficulty: 'Beginner',
    keyTakeaways: [
      'Boomi separates the central cloud management plane (AtomSphere platform) from distributed execution runtimes (Atoms/Molecules)',
      'A Boomi Atom is a lightweight single-tenant Java runtime deployed on-premises, in private clouds, or on Boomi Cloud',
      'A Boomi Molecule is a multi-node, clustered Atom architecture providing high availability, node failover, and load balancing',
      'Boomi Process execution is visual and shape-driven (Start, Map, Decision, Branch, Route, Try/Catch)',
    ],
    tools: ['Boomi AtomSphere', 'Boomi Atom', 'Boomi Molecule', 'Boomi Integration Cloud'],
    relatedCertifications: ['Boomi Certified Associate Developer', 'Boomi Certified Professional Developer'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Lesson 18: Enterprise Integration Fundamentals'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Boomi (formerly Dell Boomi) pioneered cloud-native Integration Platform as a Service (iPaaS). Its architecture decouples the cloud-hosted visual design and monitoring platform from distributed runtime execution engines known as Atoms.',
      core: `### The Boomi Architecture: Platform vs Runtime

\`\`\`mermaid
graph TD
    subgraph CloudPlane["Boomi AtomSphere Platform (Cloud Management Plane)"]
        UI["Visual Process Designer"]
        Deploy["Component Deployment & Versioning"]
        Monitor["Process Reporting & Log Dashboard"]
    end

    subgraph RuntimeLocal["Customer On-Premises / VPC Runtimes"]
        Atom1["Local Boomi Atom (Single JVM)"]
        subgraph MoleculeCluster["Boomi Molecule (Clustered HA)"]
            Node1["Molecule Node 1"]
            Node2["Molecule Node 2"]
            SharedDisk[("Shared File System NFS")]
            Node1 --- SharedDisk
            Node2 --- SharedDisk
        end
    end

    subgraph RuntimeCloud["Boomi Managed Cloud Runtimes"]
        CloudAtom["Boomi Atom Cloud (Multi-Tenant)"]
    end

    UI -.->|Deploys Process XML| Atom1
    UI -.->|Deploys Process XML| Node1
    UI -.->|Deploys Process XML| CloudAtom

    Atom1 -->|Outbound HTTPS Tracking Data| Monitor
    Node1 -->|Outbound HTTPS Tracking Data| Monitor
    CloudAtom -->|Outbound HTTPS Tracking Data| Monitor
\`\`\`

---

### Atom vs Molecule vs Atom Cloud

| Runtime Type | Clustering / Nodes | High Availability | Best Use Case |
|---|---|---|---|
| **Boomi Atom** | Single node (1 JVM) | No (Restart required if host crashes) | Dev/test environments, lightweight on-premises behind firewalls |
| **Boomi Molecule** | Multi-node cluster sharing NFS storage | **Yes** (Automatic node failover and load distribution) | Mission-critical production workloads, high-volume transactional pipelines |
| **Boomi Atom Cloud** | Multi-tenant or Single-tenant managed cloud | **Yes** (Managed by Boomi / AWS) | Pure cloud-to-cloud SaaS integrations (e.g., Salesforce to NetSuite) |

---

### Core Process Flow Shapes in Boomi
* **Start Shape:** Entry point configuring the inbound connector (e.g., Web Services Server, SFTP, Database, or No Data).
* **Map Shape:** Transforms source XML/JSON/Flat File profiles into destination profiles using standard functions or custom JavaScript/Groovy scripts.
* **Decision Shape:** Evaluates a true/false condition based on document values.
* **Branch Shape:** Executes sequential paths in strict numerical order (Path 1 finishes completely before Path 2 begins).
* **Try/Catch Shape:** Catches runtime document errors, routing failed documents down the Catch branch for error handling while allowing successful documents to proceed.`,
      tryThis: 'In Boomi AtomSphere (or reviewing process diagrams), configure a process with a Start Shape (Web Services Server listener), a Branch Shape with 2 paths: Path 1 writes an audit record to a database, and Path 2 maps the payload and dispatches an outbound REST POST to an external billing API.',
    },
    quiz: [
      {
        question: 'What is the primary architectural difference between a Boomi Atom and a Boomi Molecule?',
        options: [
          'Atoms only run on Windows; Molecules only run on Linux.',
          'An Atom is a single-node runtime, while a Molecule is a clustered, multi-node runtime sharing common storage for high availability.',
          'Molecules do not support data mapping.',
          'Atoms cannot connect to relational databases.',
        ],
        correctIndex: 1,
        explanation: 'A Molecule is a clustered deployment of multiple Atom nodes operating against shared file storage to provide high availability and load balancing.',
      },
      {
        question: 'How does an on-premises Boomi Atom communicate with the Boomi AtomSphere cloud management platform?',
        options: [
          'By requiring inbound public firewall ports 80 and 443 to be opened into the customer data center.',
          'Via outbound-only HTTPS connections (Port 443) to poll for deployments and send execution metadata back to the platform.',
          'Through unencrypted Telnet connections.',
          'By physical USB key synchronization.',
        ],
        correctIndex: 1,
        explanation: 'Boomi Atoms initiate outbound-only secure HTTPS connections to the AtomSphere cloud, eliminating the security risk of opening inbound firewall ports.',
      },
      {
        question: 'In a Boomi Process, how does the Branch Shape execute multiple paths?',
        options: [
          'It executes all paths simultaneously in asynchronous threads.',
          'It picks one random path based on CPU load.',
          'It executes paths sequentially in numerical order; Path 1 completes processing all documents before Path 2 begins.',
          'It discards documents that reach Path 2.',
        ],
        correctIndex: 2,
        explanation: 'Boomi Branch shapes execute sequentially: all documents must traverse and finish Path 1 before any document begins Path 2.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 22: Boomi Connector Framework & Dynamic Document Routing
  // -------------------------------------------------------------
  {
    id: 'lesson-22',
    slug: 'boomi-connector-patterns',
    title: 'Boomi Connector Framework & Dynamic Document Routing',
    description: 'Master Boomi document properties, dynamic routing, cross-reference tables, and Trading Partner B2B EDI orchestration.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '8 min read',
    lessonNumber: 22,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Boomi processes data as individual discrete "Documents" traveling through the process pipeline',
      'Dynamic Document Properties (DDP) attach metadata to individual documents; Dynamic Process Properties (DPP) are global to the entire execution',
      'Route Shape enables multi-condition routing based on document field values or property metadata',
      'Cross-Reference Tables (CRT) provide quick in-memory lookups for standardizing status codes across external systems',
    ],
    tools: ['Boomi Connectors', 'Boomi Trading Partner Shape', 'Cross-Reference Tables (CRT)'],
    relatedCertifications: ['Boomi Certified Professional Developer', 'Boomi Certified Architect'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 21: Boomi AtomSphere Architecture'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'In Boomi, every transaction moving through a process is encapsulated as a "Document." Mastering how Boomi manages document lifecycle, properties, and connector operations is essential for building scalable enterprise integrations.',
      core: `### Document Scope: DDP vs DPP

\`\`\`mermaid
graph LR
    subgraph ProcessExecution["Process Execution Context"]
        DPP["Dynamic Process Property (DPP)<br/>Scope: Global across all documents<br/>Example: GlobalBatchID = 'BATCH-901'"]
        subgraph DocStream["Document Pipeline Stream"]
            Doc1["Document 1 (Invoice 101)<br/>DDP_CustomerID = 'CUST-A'<br/>DDP_RetryCount = 0"]
            Doc2["Document 2 (Invoice 102)<br/>DDP_CustomerID = 'CUST-B'<br/>DDP_RetryCount = 1"]
        end
    end
\`\`\`

1. **Dynamic Document Property (DDP):**
   * *Scope:* Tied exclusively to a specific document.
   * *Behavior:* When a document is split or mapped, its DDPs travel with it. Ideal for record-level tracking (e.g., \`DDP_OrderId\`).
2. **Dynamic Process Property (DPP):**
   * *Scope:* Global to the entire process execution.
   * *Behavior:* Overwritten by any shape during runtime. If Document 2 sets \`DPP_Status = "FAIL"\`, Document 1 will see that change. Ideal for batch-level constants (e.g., \`DPP_BatchRunDate\`).

---

### Cross-Reference Tables (CRT)
Cross-Reference Tables replace hardcoded \`if/else\` or \`switch\` logic when mapping values between disparate systems:

| Salesforce Lead Status | SAP Customer Status | Internal Canonical Status |
|---|---|---|
| Open - Not Contacted | 01_NEW | PROSPECT |
| Working - Contacted | 02_ENGAGED | IN_PROGRESS |
| Closed - Converted | 03_QUALIFIED | ACTIVE_CUSTOMER |
| Closed - Not Converted | 09_DISQUALIFIED | REJECTED |

---

### Flow Control: Threads & Batch Sizing
The **Flow Control Shape** allows developers to alter processing concurrency:
* **Parallel Processing:** Splits document streams across multiple JVM threads (or Molecule nodes) to accelerate bulk processing.
* **Batching:** Groups single documents into batches (e.g., 500 documents per bundle) before invoking database or NetSuite insert operations.`,
      tryThis: 'Construct a Boomi mapping scenario using a Cross-Reference Table to translate 5 country codes (USA, CAN, GBR, DEU, FRA) into standard ISO alpha-2 codes (US, CA, GB, DE, FR) with a default fallback of "XX" for unrecognized countries.',
    },
    quiz: [
      {
        question: 'What is the critical scope difference between a Dynamic Document Property (DDP) and a Dynamic Process Property (DPP) in Boomi?',
        options: [
          'DDP is written to disk; DPP is stored in the cloud.',
          'DDP metadata stays attached to a specific individual document; DPP is global across the entire process execution.',
          'DDP can only store integers; DPP stores strings.',
          'There is no difference; they are aliases for the same property.',
        ],
        correctIndex: 1,
        explanation: 'Dynamic Document Properties attach to individual documents as they flow through steps, while Dynamic Process Properties are global variables accessible and mutable across the entire process run.',
      },
      {
        question: 'Which Boomi component is best suited for translating legacy status codes from SAP into modern Salesforce picklist values without writing custom Groovy scripts?',
        options: [
          'Cross-Reference Table (CRT)',
          'Decision Shape with 20 branches',
          'Data Passthrough Connector',
          'Disk Get Shape',
        ],
        correctIndex: 0,
        explanation: 'Cross-Reference Tables provide tabular value lookups inside maps, standardizing code conversions without complex script logic.',
      },
      {
        question: 'How does the Flow Control shape improve performance when uploading 50,000 records to an external REST endpoint?',
        options: [
          'It converts all JSON payloads into plain text.',
          'It can parallelize execution across multiple JVM worker threads or batch records into chunks to avoid rate-limit exhaustion.',
          'It deletes failed records automatically.',
          'It bypasses SSL certificates.',
        ],
        correctIndex: 1,
        explanation: 'Flow Control configures multi-threaded parallel processing or document batching to optimize network throughput and avoid server bottlenecks.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 23: IBM MQ: Queue Managers, Channels, and Message Persistence
  // -------------------------------------------------------------
  {
    id: 'lesson-23',
    slug: 'ibm-mq-core-architecture',
    title: 'IBM MQ: Queue Managers, Channels, and Message Persistence',
    description: 'Master the foundational architecture of IBM MQ, including Queue Managers, local/transmission/dead-letter queues, Message Channel Agents (MCA), and transaction recovery.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 23,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'The Queue Manager (QMGR) is the fundamental administrative and runtime unit in IBM MQ managing queues, channels, and message logs',
      'Message persistence guarantees message survival across server restarts and hardware crashes using circular or linear recovery logs',
      'Message Channel Agents (MCA) establish point-to-point network connections between Queue Managers over TCP/IP',
      'Transmission Queues temporarily hold outbound messages awaiting network transmission to remote Queue Managers',
    ],
    tools: ['IBM MQ 9.x', 'runmqsc CLI', 'MQ Explorer', 'MQRFH2 Headers'],
    relatedCertifications: ['IBM Certified System Administrator - MQ', 'IBM Certified Application Developer - MQ'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 18: Enterprise Integration Fundamentals'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'IBM MQ (formerly WebSphere MQ / MQSeries) is the gold standard for enterprise transactional messaging, powering trillions of dollars in daily interbank payments, airlines, and healthcare systems where message loss is unacceptable.',
      core: `### IBM MQ Core Topology

\`\`\`mermaid
graph LR
    subgraph QMGR_A["Queue Manager: QM_EAST (Source)"]
        AppA["Producer App"] -->|MQPUT| LocalQ_A["Local Queue (APP.IN.Q)"]
        AppA -->|MQPUT to Remote Q| TransQ["Transmission Queue<br/>(QM_WEST.XMITQ)"]
        TransQ --> SenderMCA["Sender MCA<br/>Channel: QM_EAST.TO.QM_WEST"]
    end

    subgraph Network["TCP/IP Network (Port 1414)"]
        SenderMCA -->|Encrypted TLS Stream| ReceiverMCA["Receiver MCA"]
    end

    subgraph QMGR_B["Queue Manager: QM_WEST (Target)"]
        ReceiverMCA --> LocalQ_B["Target Local Queue<br/>(ORDER.PROCESS.Q)"]
        LocalQ_B -->|MQGET| AppB["Consumer App"]
        ReceiverMCA -.->|If Local Q Full / Poison| DLQ["Dead Letter Queue<br/>(SYSTEM.DEAD.LETTER.QUEUE)"]
    end
\`\`\`

---

### Essential IBM MQ Queue Types

| Queue Type | Architectural Purpose |
|---|---|
| **Local Queue (\`QLOCAL\`)** | Physically stores messages in memory and disk storage on the local QMGR. |
| **Remote Queue Definition (\`QREMOTE\`)** | An alias pointing to a physical local queue residing on a remote Queue Manager. |
| **Transmission Queue (\`XMITQ\`)** | A specialized local queue holding messages destined for remote systems before the MCA transmits them. |
| **Dead Letter Queue (\`DEADQ / DLQ\`)** | Holds messages that cannot be delivered to their destination queue (e.g., target queue full, security violation). |
| **Model & Dynamic Queues** | Templates (\`QMODEL\`) used by applications to create temporary dynamic reply queues on the fly. |

---

### Message Persistence & Logging Models
1. **Persistent Messages (\`MQPER_PERSISTENT\`):**
   * Written to disk recovery logs before the \`MQPUT\` call returns success to the application.
   * Guaranteed to survive power outages, operating system crashes, and Queue Manager reboots.
2. **Non-Persistent Messages (\`MQPER_NOT_PERSISTENT\`):**
   * Stored primarily in volatile memory buffers for ultra-low latency; discarded upon QMGR restart.
3. **Logging Options:**
   * **Circular Logging:** Uses a fixed ring of log files; ideal for crash recovery where point-in-time media recovery is not needed.
   * **Linear Logging:** Continuously archives log files sequentially; required for full disaster recovery and media reconstitution.`,
      tryThis: 'Review an IBM MQ `runmqsc` command script: Identify the commands used to define a Queue Manager (`crtmqm`), define a local queue (`DEFINE QLOCAL(ORDERS.IN) DEFPSIST(YES)`), and configure a dead letter queue (`ALTER QMGR DEADQ(SYSTEM.DEAD.LETTER.QUEUE)`).',
    },
    quiz: [
      {
        question: 'In IBM MQ, what is the role of a Transmission Queue (XMITQ)?',
        options: [
          'It stores client web browser cookies.',
          'It temporarily buffers outbound persistent messages destined for a remote Queue Manager until the Sender Message Channel Agent (MCA) delivers them.',
          'It is used to format JSON into XML.',
          'It compresses audio files for voice messaging.',
        ],
        correctIndex: 1,
        explanation: 'A Transmission Queue is a specialized local queue on the sending Queue Manager that holds messages awaiting transmission to a remote Queue Manager over a message channel.',
      },
      {
        question: 'What happens to a message defined with `MQPER_PERSISTENT` if the host operating system experiences an abrupt power loss?',
        options: [
          'The message is permanently lost.',
          'The message is safely recovered from the Queue Manager transaction recovery log upon restart.',
          'The message is forwarded to a public web server.',
          'The message is converted to an email automatically.',
        ],
        correctIndex: 1,
        explanation: 'Persistent messages are committed to recovery log files on non-volatile disk before acknowledgment, ensuring 100% recovery after hardware or OS failures.',
      },
      {
        question: 'Which IBM MQ object manages local queues, establishes channels, logs transactions, and maintains security controls?',
        options: [
          'Message Broker Node',
          'Queue Manager (QMGR)',
          'Channel Initiator only',
          'DataWeave Engine',
        ],
        correctIndex: 1,
        explanation: 'The Queue Manager (QMGR) is the fundamental runtime and administrative instance in IBM MQ responsible for all queue and message operations.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 24: IBM MQ: Reliable Messaging & Two-Phase Commit Transactions
  // -------------------------------------------------------------
  {
    id: 'lesson-24',
    slug: 'ibm-mq-reliability-transactions',
    title: 'IBM MQ: Reliable Messaging & Two-Phase Commit Transactions',
    description: 'Implement atomic transactional messaging in IBM MQ using syncpoint control, XA two-phase commit (2PC) with databases, and poison message backout strategies.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 24,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Syncpoint coordination (\`MQPMO_SYNCPOINT\` / \`MQGMO_SYNCPOINT\`) ensures message operations are committed atomically in units of work',
      'XA Two-Phase Commit (2PC) coordinates IBM MQ messaging and relational databases (Oracle, DB2) so neither commits if the other fails',
      'Backout queues and Backout Threshold (\`BOTHRESH\`) automatically quarantine repeatedly failing poison messages to prevent infinite processing loops',
    ],
    tools: ['IBM MQ Syncpoint', 'XA 2PC Transaction Coordinator', 'MQMD Header', 'Backout Queue'],
    relatedCertifications: ['IBM Certified Application Developer - MQ', 'Enterprise Integration Architect'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 23: IBM MQ Core Architecture'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'When processing financial transactions or order fulfillments, reading a message from a queue and inserting a database record must happen as a single atomic transaction: either both succeed or both roll back. IBM MQ provides industrial-grade syncpoint and XA transaction coordination to enforce ACID guarantees.',
      core: `### Syncpoint Control: Single QMGR Units of Work

\`\`\`mermaid
sequenceDiagram
    autonumber
    participant App as Banking Application
    participant Q as IBM MQ (PAYMENTS.Q)
    participant DB as Oracle Database

    Note over App,DB: Transaction Boundary Begins
    App->>Q: MQGET (MQGMO_SYNCPOINT) -> Get Transfer Message
    App->>DB: UPDATE accounts SET balance = balance - 500
    
    alt All Operations Succeed
        App->>Q: MQCMIT (Commit Unit of Work)
        App->>DB: DB COMMIT
        Note over App,DB: Message removed from Q, DB updated permanently
    else Application Crash or SQL Error
        App->>Q: MQBACK (Rollback Unit of Work)
        App->>DB: DB ROLLBACK
        Note over App,DB: Message returned to Q, DB unchanged
    end
\`\`\`

---

### Poison Message Handling with \`BOTHRESH\` and \`BOQNAME\`
When a message has a malformed payload that triggers an unhandled null pointer or application crash every time it is read:
1. The application crashes $\\rightarrow$ transaction rolls back (\`MQBACK\`).
2. The message returns to the queue $\\rightarrow$ application reads it again $\\rightarrow$ crashes again (infinite loop).
3. **IBM MQ Solution:**
   * Every time a message rolls back, MQ increments the \`BackoutCount\` field in the \`MQMD\` header.
   * Configure queue properties: \`BOTHRESH(3)\` (Backout Threshold) and \`BOQNAME(ORDERS.POISON.BOQ)\` (Backout Queue Name).
   * When \`BackoutCount >= BOTHRESH\`, the application or MCA automatically reroutes the message to the Backout Queue without crashing the consumer.

---

### Two-Phase Commit (XA / 2PC) with External Resource Managers
When an application coordinates multiple distinct systems (e.g., IBM MQ + Oracle DB + DB2):
* **Phase 1 (Prepare):** The Transaction Coordinator asks all Resource Managers: *"Can you commit this transaction?"* All systems write prepare logs and reply \`VOTE_COMMIT\`.
* **Phase 2 (Commit):** If all voted commit, the coordinator issues \`GLOBAL_COMMIT\`. If any single resource failed, all resources execute \`GLOBAL_ROLLBACK\`.`,
      tryThis: 'Design an error handling workflow for an MQ payment consumer: Inspect the `MQMD.BackoutCount`. If `BackoutCount > 0`, log a warning with transaction ID. If `BackoutCount >= 3`, explicitly route the payload to `PAYMENT.FAILED.MANUAL.REVIEW` and issue `MQCMIT` to clear the primary queue.',
    },
    quiz: [
      {
        question: 'In IBM MQ, what happens when an application reads a message with `MQGMO_SYNCPOINT` and subsequently issues `MQBACK`?',
        options: [
          'The message is permanently deleted from the queue.',
          'The message is made available again on the queue for subsequent retrieval, and its `BackoutCount` in the `MQMD` header is incremented.',
          'The Queue Manager shuts down immediately.',
          'The message is converted to an unformatted string.',
        ],
        correctIndex: 1,
        explanation: 'Issuing `MQBACK` rolls back the unit of work, returning the uncommitted message to the queue and incrementing its `BackoutCount`.',
      },
      {
        question: 'What mechanism prevents a malformed "poison message" from causing an infinite crash-and-rollback loop in an IBM MQ consumer application?',
        options: [
          'Disabling TCP/IP keepalive.',
          'Configuring `BOTHRESH` (Backout Threshold) and `BOQNAME` (Backout Queue Name) to automatically isolate the message after a set number of rollbacks.',
          'Deleting the entire Queue Manager log directory.',
          'Increasing JVM heap memory to 64GB.',
        ],
        correctIndex: 1,
        explanation: 'Setting a Backout Threshold (`BOTHRESH`) and Backout Queue (`BOQNAME`) ensures that messages exceeding retry thresholds are diverted to a dedicated quarantine queue.',
      },
      {
        question: 'What protocol is used to coordinate atomic transactions across IBM MQ and an external relational database (like DB2 or Oracle) in a unified commit scope?',
        options: [
          'HTTP REST GET',
          'XA Two-Phase Commit (2PC)',
          'FTP File Transfer',
          'LDAP User Bind',
        ],
        correctIndex: 1,
        explanation: 'XA Two-Phase Commit (2PC) coordinates heterogeneous resource managers (queues and databases) so all commit together atomically or all roll back together.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 25: IBM App Connect Enterprise (ACE / IIB): Nodes & Message Trees
  // -------------------------------------------------------------
  {
    id: 'lesson-25',
    slug: 'ibm-ace-message-flows',
    title: 'IBM App Connect Enterprise (ACE): Message Flows & Logical Message Trees',
    description: 'Explore IBM App Connect Enterprise (formerly IIB / WMB) runtime, message flows, built-in nodes, and the four-part Logical Message Tree structure.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 25,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'IBM App Connect Enterprise (ACE) executes graphical Message Flows composed of input, processing, transformation, and output nodes',
      'The Logical Message Tree represents incoming messages in memory, divided into four branches: Properties, Header (MQMD/HTTP), Body (XMLNSC/JSON/DFDL), and LocalEnvironment',
      'LocalEnvironment is a transient scratchpad used to dynamically override destination queues, URLs, and routing labels at runtime',
      'The XMLNSC and JSON parsers build lightweight, high-performance DOM-like trees optimized for enterprise message transformation',
    ],
    tools: ['IBM ACE v12', 'ACE Toolkit (Eclipse)', 'Integration Server / Integration Node', 'mqsibar'],
    relatedCertifications: ['IBM Certified Solution Developer - App Connect Enterprise v12'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 23: IBM MQ Core Architecture'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'IBM App Connect Enterprise (ACE), formerly known as IBM Integration Bus (IIB) and WebSphere Message Broker (WMB), is IBM’s flagship enterprise service bus (ESB) designed for ultra-high-throughput message routing and heterogeneous transformation.',
      core: `### The ACE Logical Message Tree Structure
When an incoming message arrives at an input node (e.g., \`MQInput\`, \`HTTPInput\`), the parser deserializes the bitstream into a 4-part hierarchical logical tree:

\`\`\`mermaid
graph TD
    Root["Message Root"]
    Root --> Prop["Properties<br/>(Encoding, CodedCharSetId, MessageFormat)"]
    Root --> Headers["Header Folders<br/>(MQMD, HTTPInputHeader, JMSTransport)"]
    Root --> Body["Body (Domain Parser)<br/>(XMLNSC, JSON, DFDL, MRM, BLOB)"]
    
    Root -.-> LE["LocalEnvironment<br/>(Destination, Routing, Variables)"]
    Root -.-> Env["Environment<br/>(Global user variables across flow)"]
    Root -.-> ExceptionList["ExceptionList<br/>(Error diagnostics and call stack)"]
\`\`\`

---

### The Four Key Tree Branches Explained

1. **\`Root.Properties\`:** Metadata describing the physical representation of the message (character set ID \`CodedCharSetId\`, byte encoding).
2. **\`Root.MQMD\` / \`Root.HTTPInputHeader\`:** Transport-specific protocol headers (e.g., MQ message ID, HTTP query parameters, authorization headers).
3. **\`Root.JSON.Data\` or \`Root.XMLNSC\`:** The parsed payload domain. The **XMLNSC** parser is an optimized, compact XML tree; the **JSON** parser models JSON arrays and objects.
4. **\`LocalEnvironment\`:** A transient scratchpad populated during flow execution. By setting values in \`LocalEnvironment.Destination.MQ.DestinationData.queueName\`, a developer can dynamically change the destination queue of an \`MQOutput\` node at runtime.

---

### Core Built-In ACE Flow Nodes

| Node Name | Node Role & Functionality |
|---|---|
| **MQInput / MQOutput** | Reads messages from or writes messages to IBM MQ queues. |
| **HTTPInput / HTTPReply** | Exposes synchronous REST / SOAP endpoints to external web clients. |
| **Compute Node** | Transforms message trees using **ESQL** (Extended Structured Query Language). |
| **JavaCompute Node** | Implements complex object transformations using Java code. |
| **Mapping Node** | Visual drag-and-drop graphical data mapping. |
| **Filter Node** | Evaluates a Boolean ESQL expression to route message down \`True\`, \`False\`, or \`Unknown\` terminals. |`,
      tryThis: 'In IBM ACE Toolkit, trace a message flow where an `HTTPInput` node receives a JSON POST body, a `Compute` node copies the headers and transforms `InputRoot.JSON.Data` into `OutputRoot.XMLNSC`, and an `MQOutput` node dispatches the XML message to `PAYMENT.PROCESSING.Q`.',
    },
    quiz: [
      {
        question: 'In the IBM App Connect Enterprise (ACE) Logical Message Tree, which branch is used to dynamically alter downstream destination queues or URLs at runtime without modifying the node configuration?',
        options: [
          'Root.Properties',
          'Root.MQMD',
          'LocalEnvironment',
          'Root.BLOB',
        ],
        correctIndex: 2,
        explanation: 'The `LocalEnvironment` tree (specifically `LocalEnvironment.Destination`) contains dynamic routing instructions that override static node settings.',
      },
      {
        question: 'Which ACE parser domain is specifically optimized for high-performance, low-memory XML processing and schema validation?',
        options: [
          'MRM',
          'XMLNSC',
          'MIME',
          'BLOB',
        ],
        correctIndex: 1,
        explanation: 'XMLNSC (XML Compact Domain) is IBM ACE’s standard high-performance parser designed for low memory overhead and fast XML transformations.',
      },
      {
        question: 'What programming language is natively used inside an IBM ACE Compute Node to manipulate and construct message trees?',
        options: [
          'ESQL (Extended Structured Query Language)',
          'Python 2.7',
          'PHP',
          'Visual Basic',
        ],
        correctIndex: 0,
        explanation: 'ESQL is the specialized, declarative SQL-like programming language designed specifically for querying and constructing ACE message trees inside Compute nodes.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 26: IBM ACE Advanced Transformation: ESQL, Java, and REST Integration
  // -------------------------------------------------------------
  {
    id: 'lesson-26',
    slug: 'ibm-ace-transformation-esql',
    title: 'IBM ACE Advanced Transformation: ESQL, Database Integration & Aggregation',
    description: 'Master advanced ESQL programming in IBM ACE, including database enrichment, fan-out/fan-in aggregation nodes, and subflow modularization.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 26,
    difficulty: 'Advanced',
    keyTakeaways: [
      'ESQL provides rich constructs (\`ROW\`, \`CARDINALITY\`, \`THE\`, \`FOR\`) to query, transform, and reshape complex XML and JSON trees',
      'Database enrichment in ESQL connects to external databases via ODBC/JDBC connections with parameter substitution to prevent SQL injection',
      'Aggregation nodes (\`AggregateControl\`, \`AggregateRequest\`, \`AggregateReply\`) implement scatter-gather fan-out / fan-in patterns',
      'Subflows (\`.subflow\`) encapsulate reusable integration logic and error handling patterns across multiple parent message flows',
    ],
    tools: ['IBM ACE ESQL', 'Aggregate Nodes', 'ODBC Database Nodes', 'BAR Deployment'],
    relatedCertifications: ['IBM Certified Solution Developer - App Connect Enterprise v12'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 25: IBM ACE Message Flows'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'While visual mapping works for basic record conversions, enterprise integrations demand complex orchestration: enriching messages from legacy SQL databases, querying multiple microservices in parallel, and aggregating partial results into unified responses using ESQL.',
      core: `### Advanced ESQL Syntax & Tree Transformation
Below is an enterprise ESQL module transforming an incoming JSON order into an outbound XML billing document while enriching data from an external ODBC database:

\`\`\`sql
CREATE COMPUTE MODULE OrderEnrichment_Compute
    CREATE FUNCTION Main() RETURNS BOOLEAN
    BEGIN
        -- Copy transport headers from input to output
        SET OutputRoot.Properties = InputRoot.Properties;
        SET OutputRoot.MQMD = InputRoot.MQMD;
        
        -- Reference input JSON structure
        DECLARE refInOrder REFERENCE TO InputRoot.JSON.Data.Order;
        
        -- Database enrichment via ODBC DataSource 'CUSTOMER_DB'
        DECLARE custId CHARACTER refInOrder.CustomerID;
        DECLARE dbCustomer ROW;
        SET dbCustomer = THE(SELECT T.TIER, T.CREDIT_LIMIT, T.EMAIL 
                             FROM Database.CUSTOMERS AS T 
                             WHERE T.CUSTOMER_ID = custId);
        
        -- Construct Output XMLNSC Body
        SET OutputRoot.XMLNSC.BillingEvent.Header.OrderID = refInOrder.OrderID;
        SET OutputRoot.XMLNSC.BillingEvent.Header.CustomerTier = dbCustomer.TIER;
        SET OutputRoot.XMLNSC.BillingEvent.Header.Timestamp = CURRENT_TIMESTAMP;
        
        -- Iterate over JSON line items array using FOR loop
        DECLARE itemIndex INT 1;
        FOR item AS refInOrder.Items.Item[] DO
            SET OutputRoot.XMLNSC.BillingEvent.Items.Line[itemIndex].SKU = item.ProductCode;
            SET OutputRoot.XMLNSC.BillingEvent.Items.Line[itemIndex].Amount = item.Price * item.Quantity;
            SET itemIndex = itemIndex + 1;
        END FOR;
        
        RETURN TRUE;
    END;
END MODULE;
\`\`\`

---

### Scatter-Gather Fan-Out / Fan-In with Aggregation Nodes

\`\`\`mermaid
graph TD
    InputNode["Inbound Order Request"] --> AggControl["AggregateControl Node<br/>(Generates Unique Aggregation ID)"]
    
    AggControl --> Request1["AggregateRequest: GetCreditScore"]
    AggControl --> Request2["AggregateRequest: CheckInventory"]
    AggControl --> Request3["AggregateRequest: GetFraudRisk"]
    
    Request1 --> BackEnd1["Credit Service"]
    Request2 --> BackEnd2["Warehouse ERP"]
    Request3 --> BackEnd3["Fraud AI Engine"]
    
    BackEnd1 --> AggReply["AggregateReply Node<br/>(Matches Aggregation ID & Combines Responses)"]
    BackEnd2 --> AggReply
    BackEnd3 --> AggReply
    
    AggReply --> FinalCompute["Compute Node<br/>(Assembles Consolidated Response)"]
    FinalCompute --> OutputNode["HTTP Reply to Client"]
\`\`\``,
      tryThis: 'Write an ESQL snippet using the `THE` keyword to extract a single row from an external database table based on an incoming `InputRoot.XMLNSC.Invoice.SupplierID` and store the result in an output JSON object.',
    },
    quiz: [
      {
        question: 'In IBM ACE ESQL, what is the purpose of the `THE` keyword when executing a `SELECT` query against an external database?',
        options: [
          'To format text into uppercase.',
          'To extract a single row scalar from the result set array, unwrapping it into a single ROW structure.',
          'To encrypt the database password.',
          'To delete the target database table.',
        ],
        correctIndex: 1,
        explanation: 'In ESQL, `THE()` extracts the first and only item from a list of rows returned by a database `SELECT` query into a single `ROW` variable.',
      },
      {
        question: 'Which combination of ACE nodes is used to implement a Scatter-Gather pattern that queries three backend services in parallel and waits for all three responses before proceeding?',
        options: [
          'Trace, Filter, and Throw nodes',
          'AggregateControl, AggregateRequest, and AggregateReply nodes',
          'ResetContentDescriptor and Validate nodes',
          'FileInput and FileOutput nodes',
        ],
        correctIndex: 1,
        explanation: 'The Aggregate nodes (`AggregateControl`, `AggregateRequest`, and `AggregateReply`) manage stateful fan-out and fan-in aggregation across asynchronous message branches.',
      },
      {
        question: 'What file format is produced when packaging IBM ACE applications, message flows, and Java dependencies for deployment to an Integration Server?',
        options: [
          'BAR (Broker Archive) file (.bar)',
          'EXE executable (.exe)',
          'ZIP archive with no metadata',
          'DOCX document (.docx)',
        ],
        correctIndex: 0,
        explanation: 'A BAR (Broker Archive) file is the standard deployment unit in IBM ACE containing compiled message flows, ESQL binaries, Java jars, and XML/JSON schemas.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 27: Software AG / IBM webMethods: Integration Server & Flow Services
  // -------------------------------------------------------------
  {
    id: 'lesson-27',
    slug: 'webmethods-integration-server-core',
    title: 'Software AG / IBM webMethods: Integration Server & Flow Services',
    description: 'Master webMethods Integration Server (IS) core architecture, packages, the in-memory IData pipeline, and structured Flow service development in Designer.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 27,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'webMethods Integration Server (IS) uses Packages and Folders as the foundational namespace and deployment unit',
      'The Pipeline is an in-memory \`IData\` object passed sequentially between Flow steps, containing all variables and documents',
      'Flow steps (\`MAP\`, \`BRANCH\`, \`LOOP\`, \`REPEAT\`, \`SEQUENCE\`, \`EXIT\`) provide visual, declarative programming without compiling Java code',
      'Standard error handling uses a parent SEQUENCE (Exit on SUCCESS) containing Try (Exit on FAILURE) and Catch (Exit on DONE with \`pub.flow:getLastError\`)',
    ],
    tools: ['webMethods Integration Server 10.x', 'Software AG Designer', 'WmPublic', 'IData Java API'],
    relatedCertifications: ['webMethods Integration Specialist', 'webMethods Certified Architect'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 18: Enterprise Integration Fundamentals'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'webMethods (originally developed by Software AG, now part of IBM) is one of the most mature and widely adopted enterprise integration platforms in the world. Its graphical Flow language and high-performance Integration Server runtime power mission-critical supply chains and banking networks.',
      core: `### The webMethods Package Architecture
Everything in Integration Server is organized into modular **Packages**:
* \`IntegrationServer/packages/<PackageName>/\`
  * \`manifest.v3\`: Package metadata, version, dependencies, and startup/shutdown services.
  * \`ns/\`: Namespace folders containing Flow services, Java services, IS Document Types, and Schemas.
  * \`code/classes/\` & \`code/jars/\`: Compiled Java classes and external third-party JAR libraries.
  * \`config/\`: Package-specific properties and adapter connections.

---

### The webMethods Pipeline & Flow Steps

\`\`\`mermaid
graph TD
    subgraph FlowService["OrderProcessingFlowService (Flow Execution)"]
        Step1["MAP: Initialize Defaults & Drop Temp Vars"]
        Step2["BRANCH: Evaluate Label (%orderTotal% > 1000)"]
        Step3["LOOP: Iterate over /lineItems"]
        Step4["SEQUENCE (Try/Catch Error Handling Block)"]
    end

    Pipeline[("IData Pipeline (In-Memory Heap)<br/>- /customerInfo (Document)<br/>- /orderTotal (String)<br/>- /lineItems (Document List)")]

    Pipeline <-->|Reads & Mutates Variables| Step1
    Pipeline <-->|Reads & Mutates Variables| Step2
    Pipeline <-->|Reads & Mutates Variables| Step3
    Pipeline <-->|Reads & Mutates Variables| Step4
\`\`\`

---

### The Canonical Try-Catch Sequence Pattern in Flow
To build resilient Flow services that catch runtime errors and execute rollback or alerting logic:

1. **Parent SEQUENCE (Exit on SUCCESS):**
   * **Try SEQUENCE (Exit on FAILURE):**
     * Contains all normal business logic steps (adapter calls, transformations).
     * If any step fails, execution halts and jumps directly to the Catch block.
   * **Catch SEQUENCE (Exit on DONE):**
     * Invokes \`pub.flow:getLastError\` to retrieve error diagnostics, stack trace, and pipeline dump.
     * Executes compensation (e.g., publishes error event, logs failure, and signals clean exit or failure).`,
      tryThis: 'In Software AG Designer, model a Flow service containing the Try-Catch sequence structure. In the Try block, invoke an HTTP client call to an external service; in the Catch block, invoke `pub.flow:getLastError` and map `lastError/error` to an email notification service.',
    },
    quiz: [
      {
        question: 'In webMethods Integration Server, what is the in-memory data structure that holds all input, output, and intermediate variables during Flow service execution?',
        options: [
          'The Pipeline (IData object)',
          'The Session Cookie Store',
          'The Flat File Buffer',
          'The Terracotta Hard Disk',
        ],
        correctIndex: 0,
        explanation: 'The Pipeline is the central in-memory data structure (implemented as a Java `IData` object) that flows between steps in a webMethods service.',
      },
      {
        question: 'What is the required property configuration for a parent SEQUENCE step containing a Try-Catch block in webMethods Flow?',
        options: [
          'Exit on FAILURE',
          'Exit on SUCCESS',
          'Exit on DONE',
          'Repeat on ERROR',
        ],
        correctIndex: 1,
        explanation: 'The parent SEQUENCE is configured with "Exit on SUCCESS". When the child Try block (Exit on FAILURE) encounters an error, control drops to the second child Catch block (Exit on DONE), which completes successfully and finishes the parent sequence.',
      },
      {
        question: 'What file inside a webMethods package directory defines package version, dependencies on other packages, and startup/shutdown services?',
        options: [
          'server.cnf',
          'manifest.v3',
          'package.xml',
          'pom.xml',
        ],
        correctIndex: 1,
        explanation: '`manifest.v3` is the core metadata descriptor file for every webMethods package.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 28: webMethods Universal Messaging & Event-Driven Architecture
  // -------------------------------------------------------------
  {
    id: 'lesson-28',
    slug: 'webmethods-universal-messaging-eda',
    title: 'webMethods Universal Messaging & Event-Driven Architecture',
    description: 'Implement high-throughput event-driven messaging with Universal Messaging (UM), IS Messaging Triggers, Exactly-Once delivery, and realm clustering.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 28,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Universal Messaging (UM) provides high-performance pub/sub Channels and point-to-point Queues over the Nirvana Socket Protocol (nsp/nsps)',
      'webMethods Messaging Triggers subscribe Integration Server services to UM channels with configurable concurrency (Serial vs Concurrent)',
      'Exactly-Once delivery uses document UUIDs and a cluster history database to detect and discard duplicate published messages',
      'UM Realm Clusters maintain quorum consensus to guarantee message persistence and zero downtime failover',
    ],
    tools: ['Universal Messaging 10.x', 'Enterprise Manager (nEnterpriseManager)', 'IS Messaging Triggers', 'Terracotta TSA'],
    relatedCertifications: ['webMethods Integration Specialist', 'webMethods Administrator'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 27: webMethods Integration Server Core'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Universal Messaging (UM) is the high-performance messaging backbone of the webMethods suite, replacing legacy webMethods Broker with native support for JMS, MQTT, AMQP, and low-latency streaming.',
      core: `### Channels vs Queues in Universal Messaging

\`\`\`mermaid
graph LR
    subgraph Publisher["Event Publisher"]
        IS1["Integration Server A<br/>(Publishes OrderCreatedEvent)"]
    end

    subgraph UM_Realm["Universal Messaging Realm (nsp://host:9000)"]
        Channel["Channel: /finance/orders<br/>(Publish / Subscribe)"]
        Queue["Queue: /billing/tasks<br/>(Point-to-Point)"]
    end

    subgraph Subscribers["Subscribers / Consumers"]
        IS_Sub1["Trigger 1 (Inventory Service)"]
        IS_Sub2["Trigger 2 (Billing Service)"]
        Worker1["Worker Node 1"]
        Worker2["Worker Node 2"]
    end

    IS1 -->|Publishes Event| Channel
    Channel -->|Broadcasts Copy| IS_Sub1
    Channel -->|Broadcasts Copy| IS_Sub2

    IS1 -->|Pushes Work Item| Queue
    Queue -->|Consumed by exactly ONE worker| Worker1
    Queue -.->|If Worker 1 busy| Worker2
\`\`\`

---

### IS Messaging Trigger Execution Modes
* **Concurrent Execution Mode:**
  * Uses a pool of worker threads to process multiple published messages simultaneously.
  * Maximum throughput; order of execution is **not** guaranteed. Ideal for independent notifications.
* **Serial Execution Mode:**
  * Processes messages strictly one-at-a-time in exact FIFO order per trigger or per partition key.
  * Essential for financial ledger updates or state machine events (e.g., \`OrderCreated\` must execute before \`OrderPaid\`).

---

### Exactly-Once Processing Architecture
When network hiccups cause publishers to retry:
1. Publisher embeds a unique **Document UUID** (\`_env/uuid\`).
2. The receiving Trigger checks the **Document History Database / Terracotta Cache**.
3. If the UUID was processed within the configured **Time-To-Live (TTL)** window:
   * The trigger marks the document as duplicate and automatically discards it without executing the target Flow service twice.`,
      tryThis: 'In Universal Messaging Enterprise Manager, inspect a channel’s storage properties: Compare "Transient" (RAM-only), "Persistent" (Disk-backed), and "Mixed" storage engine settings for event data retention.',
    },
    quiz: [
      {
        question: 'In webMethods Universal Messaging, what is the key difference between a Channel and a Queue?',
        options: [
          'Channels only support XML; Queues only support JSON.',
          'Channels broadcast published events to multiple subscribers (Pub/Sub); Queues deliver each event to exactly one consumer (Point-to-Point).',
          'Queues cannot store persistent data.',
          'Channels require manual restart after 100 messages.',
        ],
        correctIndex: 1,
        explanation: 'Channels implement publish/subscribe where every subscriber receives a copy of each event; Queues implement point-to-point delivery where each message is consumed by only one worker.',
      },
      {
        question: 'Which trigger execution mode in webMethods Integration Server guarantees that events are processed in strict First-In-First-Out (FIFO) sequential order?',
        options: [
          'Concurrent Mode',
          'Parallel Mode',
          'Serial Mode',
          'Batch Mode',
        ],
        correctIndex: 2,
        explanation: 'Serial Trigger Execution processes documents strictly one at a time in FIFO order, ensuring state transitions happen in the correct sequence.',
      },
      {
        question: 'How does webMethods Integration Server detect and prevent duplicate message processing when "Exactly-Once" execution is enabled on a trigger?',
        options: [
          'By comparing unique document UUIDs against a Document History database or cluster cache within a specified Time-to-Live (TTL) window.',
          'By executing the service twice and comparing output hashes.',
          'By checking the client IP address in server logs.',
          'By shutting down the Universal Messaging realm server.',
        ],
        correctIndex: 0,
        explanation: 'Exactly-once delivery tracks unique document UUIDs in a persistent history store to identify and discard duplicate messages received during network retries.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 29: API Gateway Security, OAuth2, and Threat Protection
  // -------------------------------------------------------------
  {
    id: 'lesson-29',
    slug: 'api-gateway-security-governance',
    title: 'API Gateway Security, OAuth2, and Threat Protection Policies',
    description: 'Protect enterprise APIs against attacks using API Gateway security policies: Mutual TLS (mTLS), JWT/OAuth2 token validation, rate limiting, and XML/JSON threat filters.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 29,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'API Gateways sit at the enterprise DMZ perimeter, enforcing authentication, authorization, rate limiting, and threat protection before traffic reaches backend microservices',
      'Mutual TLS (mTLS / 2-Way SSL) validates cryptographic X.509 client certificates during the TLS handshake',
      'OAuth2 Token Validation policies verify JSON Web Tokens (JWT) issued by external Identity Providers (Okta, Azure AD, Ping)',
      'Threat protection policies inspect payload size, JSON depth, XML entity expansion (XML Bombs), and SQL injection patterns',
    ],
    tools: ['webMethods API Gateway', 'MuleSoft API Manager', 'OAuth2 / OIDC', 'mTLS X.509 Certificates'],
    relatedCertifications: ['Enterprise Integration Architect', 'API Security Specialist'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 19: API-Led Connectivity'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Exposing backend services directly to external partners or the internet is an extreme security risk. An API Gateway acts as a hardened security shield at the enterprise DMZ perimeter, inspecting, validating, and governing every incoming API transaction.',
      core: `### API Gateway Multi-Layer Defense

\`\`\`mermaid
graph TD
    Client["External Client / Partner"] --> Gateway["Enterprise API Gateway (DMZ Perimeter)"]
    
    subgraph SecurityPolicies["Active Gateway Policy Pipeline"]
        P1["1. Transport Security: Enforce HTTPS & mTLS 2-Way SSL"]
        P2["2. Threat Protection: XML Bomb, JSON Depth, SQLi Filters"]
        P3["3. Traffic Management: Rate Limiting & Spike Arrest (100 req/sec)"]
        P4["4. Identity & Auth: Validate OAuth2 JWT from Okta / Azure AD"]
        P5["5. Transformation: Mask Outbound PII Fields (Credit Cards)"]
    end

    Gateway --> P1 --> P2 --> P3 --> P4 --> P5
    P5 --> Backend["Protected Internal Microservice / Integration Server"]
\`\`\`

---

### Core Security Policy Categories

1. **Identification & Authentication:**
   * **API Key Enforcement:** Validates \`x-api-key\` headers for basic application tracking.
   * **OAuth 2.0 / JWT Validation:** Verifies digital signature (RS256), expiration (\`exp\`), issuer (\`iss\`), and audience (\`aud\`) claims on incoming Bearer tokens against the IdP public JWKS endpoint.
   * **Mutual TLS (mTLS):** Enforces client certificate verification against the Gateway truststore during the TLS handshake.

2. **Threat Protection Policies:**
   * **XML Threat Protection:** Restricts DTD processing to prevent **Billion Laughs / XML Entity Expansion** attacks that exhaust JVM RAM.
   * **JSON Threat Protection:** Limits maximum string length, object depth (e.g., max 10 nested levels), and array sizes to block memory-exhaustion payloads.
   * **SQL & Regex Injection:** Scans query parameters and body payloads for malicious SQL syntax (\`UNION SELECT\`, \`' OR '1'='1\`).

3. **Traffic Management (Rate Limiting & Throttling):**
   * **Spike Arrest:** Smoothes traffic spikes by limiting requests to micro-windows (e.g., maximum 50 requests per second).
   * **Tiered Quotas:** Grants bronze tier consumers 1,000 calls/day and platinum tier consumers 100,000 calls/day.`,
      tryThis: 'Configure a rate-limiting policy simulation: Define a rule that allows a maximum of 5 requests per minute per IP address. Test submitting 7 consecutive requests and observe the standard HTTP `429 Too Many Requests` response code returned on the 6th call.',
    },
    quiz: [
      {
        question: 'Which HTTP status code is standardly returned by an API Gateway when a consumer exceeds their configured rate limit or quota policy?',
        options: [
          '401 Unauthorized',
          '403 Forbidden',
          '429 Too Many Requests',
          '500 Internal Server Error',
        ],
        correctIndex: 2,
        explanation: 'HTTP 429 Too Many Requests is the RFC standard status code returned when rate limits or throttling quotas are exceeded.',
      },
      {
        question: 'What is the primary function of an XML Threat Protection policy on an API Gateway?',
        options: [
          'To convert XML into HTML tables.',
          'To block XML Entity Expansion (XML Bomb / Billion Laughs) attacks and limit node depth to prevent JVM memory exhaustion.',
          'To format XML indentation.',
          'To translate XML tag names into German.',
        ],
        correctIndex: 1,
        explanation: 'XML Threat Protection restricts recursive DTD entity expansions and validates payload constraints to prevent memory exhaustion attacks.',
      },
      {
        question: 'In Mutual TLS (mTLS / 2-way SSL), what additional cryptographic validation occurs compared to standard one-way SSL?',
        options: [
          'The client must present a valid X.509 client certificate that the server verifies against its trusted Certificate Authorities (Truststore).',
          'The client password is sent in plain text.',
          'The server disables TLS encryption.',
          'The database automatically commits all pending transactions.',
        ],
        correctIndex: 0,
        explanation: 'In mTLS, both parties authenticate: the server presents its certificate to the client, and the client presents its certificate to the server for mutual cryptographic verification.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 30: B2B Integration: Trading Networks, AS2, and EDI Standards
  // -------------------------------------------------------------
  {
    id: 'lesson-30',
    slug: 'b2b-edi-trading-networks',
    title: 'B2B Integration: Trading Networks, AS2, and EDI Standards',
    description: 'Master Electronic Data Interchange (EDI), ANSI X12, UN/EDIFACT, AS2 communication with MDN receipts, and webMethods Trading Networks architecture.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 30,
    difficulty: 'Advanced',
    keyTakeaways: [
      'EDI standardizes business document interchange across global supply chains (ANSI X12 in North America, UN/EDIFACT internationally)',
      'AS2 (EDIINT) transmits EDI payloads securely over HTTP/S with S/MIME encryption, digital signatures, and MDN receipts',
      'Message Disposition Notification (MDN) provides cryptographically verifiable Non-Repudiation of Receipt (NRR)',
      'Trading Networks (TN) manages partner profiles, document attributes, and processing rules to automate B2B transaction execution',
    ],
    tools: ['webMethods Trading Networks', 'Boomi Trading Partner', 'ANSI X12 / UN/EDIFACT', 'AS2 / S/MIME'],
    relatedCertifications: ['B2B / EDI Integration Specialist', 'webMethods Integration Specialist'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 27: webMethods Integration Server Core'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Global trade runs on Electronic Data Interchange (EDI). Over 85% of global commerce—from Walmart purchase orders to ocean shipping manifests—transacts through standardized EDI documents exchanged over secure AS2 tunnels.',
      core: `### Core EDI Standards & Transaction Sets

| Standard | Geography / Domain | Common Transaction Sets |
|---|---|---|
| **ANSI X12** | North America (Retail, Healthcare, Logistics) | **850** (Purchase Order), **855** (PO Ack), **856** (Advance Ship Notice / ASN), **810** (Invoice), **997** (Functional Ack) |
| **UN/EDIFACT** | International / Global Europe & Asia | **ORDERS** (Purchase Order), **DESADV** (Dispatch Advice), **INVOIC** (Invoice), **CONTRL** (Syntax Ack) |
| **HIPAA EDI** | US Healthcare Compliance | **837** (Healthcare Claims), **835** (Claim Payment/Remittance), **834** (Benefit Enrollment) |

---

### The AS2 (Applicability Statement 2) Protocol

\`\`\`mermaid
sequenceDiagram
    autonumber
    participant Buyer as Buyer Enterprise (Sender)
    participant Supplier as Supplier Gateway (Receiver)

    Note over Buyer: 1. Sign EDI payload with Buyer Private Key<br/>2. Encrypt payload with Supplier Public Cert (S/MIME)
    Buyer->>Supplier: HTTP POST (AS2-To, AS2-From, Encrypted Payload)
    
    Note over Supplier: 3. Decrypt payload with Supplier Private Key<br/>4. Verify signature with Buyer Public Cert<br/>5. Calculate SHA-256 MIC (Message Integrity Check)
    
    Supplier-->>Buyer: Synchronous / Asynchronous Signed MDN Receipt<br/>(Contains MIC & Supplier Signature)
    Note over Buyer: 6. Verify MDN: Non-Repudiation of Receipt (NRR) Confirmed
\`\`\`

---

### webMethods Trading Networks (TN) Architecture
* **Partner Profiles:** Stores corporate identifiers (DUNS, AS2 IDs), contact info, public X.509 certificates, and delivery methods (SFTP, AS2, HTTPS).
* **Document Attributes:** Extracts key fields (e.g., \`SenderID\`, \`ReceiverID\`, \`PONumber\`, \`TotalAmount\`) from incoming payloads via XPath or WQL queries.
* **Processing Rules:** Evaluates document attributes against rules to trigger business workflows (e.g., *"If Document is X12 850 from Partner WalMart, execute \`wm.b2b.orders:processPurchaseOrder\`"*).
* **Trading Partner Agreements (TPA):** Stores bilateral agreement configurations (e.g., custom delimiter overrides, split rules).`,
      tryThis: 'Inspect a raw ANSI X12 850 EDI snippet: Identify the ISA (Interchange Header), GS (Functional Group Header), ST (Transaction Set Header 850), and SE/GE/IEA trailing segments.',
    },
    quiz: [
      {
        question: 'Which ANSI X12 transaction set represents a standard Purchase Order in B2B supply chain integration?',
        options: [
          'EDI 810',
          'EDI 850',
          'EDI 856',
          'EDI 997',
        ],
        correctIndex: 1,
        explanation: 'EDI 850 is the standard ANSI X12 transaction set for a Purchase Order (810 is Invoice, 856 is Advance Ship Notice, and 997 is Functional Acknowledgement).',
      },
      {
        question: 'In AS2 (EDIINT) communication, what is the role of a signed Message Disposition Notification (MDN)?',
        options: [
          'To format XML into CSV.',
          'To provide a cryptographically signed electronic receipt proving the receiver successfully received, decrypted, and validated the message (Non-Repudiation of Receipt).',
          'To reset the partner password.',
          'To restart the Linux server.',
        ],
        correctIndex: 1,
        explanation: 'An MDN receipt contains a cryptographic Message Integrity Check (MIC) proving non-repudiation of receipt between trading partners.',
      },
      {
        question: 'In webMethods Trading Networks, what component evaluates incoming document attributes (like Sender, Receiver, and Document Type) to execute the appropriate Flow service?',
        options: [
          'Processing Rule',
          'Flat File Dictionary',
          'Command Central Agent',
          'Java Virtual Machine',
        ],
        correctIndex: 0,
        explanation: 'Processing Rules in Trading Networks evaluate document attributes to determine target actions (invoking services, resubmitting, or sending alerts).',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 31: Event-Driven Integration with Apache Kafka & Modern Event Meshes
  // -------------------------------------------------------------
  {
    id: 'lesson-31',
    slug: 'event-driven-eda-kafka-pubsub',
    title: 'Event-Driven Integration with Apache Kafka & Event Meshes',
    description: 'Design distributed event-driven integration architectures using Apache Kafka topics, partitions, consumer groups, Schema Registry, and Change Data Capture (CDC).',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 31,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Apache Kafka is a distributed, horizontally partitioned, immutable append-only commit log built for massive streaming throughput',
      'Topics are divided into Partitions; the partition key guarantees strict ordering within a single partition while enabling parallel consumption across consumer groups',
      'Confluent Schema Registry enforces Avro/Protobuf schema compatibility (backward, forward, full) to prevent breaking contract changes',
      'Change Data Capture (CDC / Debezium) streams real-time row-level database changes directly into event streams without polling',
    ],
    tools: ['Apache Kafka', 'Confluent Schema Registry', 'Kafka Connect', 'Debezium CDC'],
    relatedCertifications: ['Confluent Certified Developer for Apache Kafka', 'Enterprise Integration Architect'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 18: Enterprise Integration Fundamentals'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Traditional message brokers delete messages as soon as they are consumed. Apache Kafka fundamentally changed enterprise integration by treating events as an immutable, persistent, replayable stream of state changes across the entire enterprise.',
      core: `### Kafka Architecture: Topics, Partitions & Consumer Groups

\`\`\`mermaid
graph TD
    subgraph Producers["Event Producers"]
        P1["Order Service"]
        P2["Mobile Gateway"]
    end

    subgraph KafkaCluster["Kafka Cluster: Topic 'order-events'"]
        subgraph Part0["Partition 0 (Key Hash: 0)"]
            P0_0["[Offset 0]"] --- P0_1["[Offset 1]"] --- P0_2["[Offset 2]"]
        end
        subgraph Part1["Partition 1 (Key Hash: 1)"]
            P1_0["[Offset 0]"] --- P1_1["[Offset 1]"] --- P1_2["[Offset 2]"]
        end
    end

    subgraph GroupA["Consumer Group: BillingServiceGroup"]
        C1["Consumer Instance 1 (Reads Part 0)"]
        C2["Consumer Instance 2 (Reads Part 1)"]
    end

    subgraph GroupB["Consumer Group: AnalyticsGroup"]
        C3["Consumer Instance 3 (Reads Both Partitions)"]
    end

    P1 -->|Key = 'CUST-101'| Part0
    P2 -->|Key = 'CUST-202'| Part1

    Part0 --> C1
    Part1 --> C2

    Part0 --> C3
    Part1 --> C3
\`\`\`

---

### Core Kafka Architecture Principles

1. **Partitions & Ordering:**
   * Kafka guarantees strict FIFO ordering **only within a single partition**.
   * By supplying a \`recordKey\` (e.g., \`customerId\`), all events for that customer hash to the same partition, guaranteeing ordered state processing.

2. **Consumer Groups & Parallel Scalability:**
   * Each partition in a topic is consumed by exactly **one** consumer instance within a consumer group.
   * If a topic has 10 partitions, a consumer group can scale up to 10 parallel consumer instances.

3. **Schema Registry & Evolution Rules:**
   * Producers and consumers share schemas stored in the **Confluent Schema Registry** (Apache Avro or Protobuf).
   * **Backward Compatibility:** Consumers with new schemas can read events produced by older schemas.
   * **Full Compatibility:** Old and new schemas can read events produced by either version, allowing independent deployments without downtime.

4. **Change Data Capture (CDC):**
   * Tools like **Debezium** tail database write-ahead logs (WAL in Postgres, Redo log in Oracle) to stream row-level INSERT/UPDATE/DELETE events directly into Kafka without modifying application code.`,
      tryThis: 'Design an event envelope schema in Apache Avro: Define fields for `eventId` (UUID), `timestamp` (long), `eventType` (string: "ORDER_CREATED"), and a `payload` record containing customer and line items.',
    },
    quiz: [
      {
        question: 'How does Apache Kafka guarantee strict sequential ordering of events for a specific customer across distributed consumers?',
        options: [
          'By forcing all topics to only have one global consumer across the entire datacenter.',
          'By using the customer ID as the partition key, ensuring all events for that customer hash to the exact same partition.',
          'By sorting messages alphabetically by customer name.',
          'Kafka cannot maintain message order under any circumstances.',
        ],
        correctIndex: 1,
        explanation: 'Kafka guarantees strict message ordering within an individual partition; assigning a consistent partition key routes all related events to the same partition.',
      },
      {
        question: 'What is the role of the Confluent Schema Registry in an event-driven Kafka architecture?',
        options: [
          'To format CSS styles for web portals.',
          'To centralize and enforce schema evolution rules (Avro/Protobuf), validating that message contracts remain compatible between producers and consumers.',
          'To store database root passwords in plaintext.',
          'To physically delete expired messages from disk.',
        ],
        correctIndex: 1,
        explanation: 'The Schema Registry serves as a centralized contract repository that validates event schemas and prevents breaking changes between producers and consumers.',
      },
      {
        question: 'What technology reads relational database transaction logs (e.g., Postgres WAL, Oracle Redo Log) to stream row changes directly into Kafka in real time without querying SQL tables?',
        options: [
          'Change Data Capture (CDC / Debezium)',
          'Scheduled SQL Polling Cron',
          'Browser Cookies',
          'FTP Batch Upload',
        ],
        correctIndex: 0,
        explanation: 'Change Data Capture (CDC) tails database low-level write-ahead logs to capture and stream real-time change events without placing query load on the database.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 32: Hybrid Cloud Integration, CI/CD DevOps & iPaaS Governance
  // -------------------------------------------------------------
  {
    id: 'lesson-32',
    slug: 'enterprise-hybrid-ipaas-governance',
    title: 'Hybrid Cloud Integration, CI/CD DevOps & iPaaS Governance',
    description: 'Implement enterprise CI/CD pipelines, containerized microservices runtime deployments (MSR), GitOps, and hybrid iPaaS governance frameworks.',
    category: 'Enterprise Integration',
    categoryKey: 'integration',
    readTime: '9 min read',
    lessonNumber: 32,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Hybrid Integration Platforms (HIP) bridge on-premises legacy infrastructure with cloud iPaaS through secure outbound agent connectivity',
      'Modern integration runtimes (webMethods Microservices Runtime, Mule Runtime Fabric) deploy natively in Docker and Kubernetes (K8s)',
      'GitOps and automated CI/CD pipelines (Asset Build Environment, Maven, GitHub Actions) eliminate error-prone manual server deployments',
      'Integration Governance mandates standard naming conventions, canonical data models, centralized logging, and automated test coverage (MUnit/WmUnit)',
    ],
    tools: ['Docker / Kubernetes', 'Mule Runtime Fabric (RTF)', 'webMethods Microservices Runtime (MSR)', 'GitHub Actions / GitLab CI', 'MUnit / WmUnit'],
    relatedCertifications: ['Enterprise Integration Architect', 'MuleSoft Platform Architect', 'webMethods DevOps Engineer'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 18: Enterprise Integration Fundamentals'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Enterprise integration is no longer confined to static on-premises data centers. Leading organizations deploy containerized micro-integrations across hybrid and multi-cloud Kubernetes clusters governed by automated GitOps CI/CD pipelines.',
      core: `### The Modern Hybrid Integration Pipeline (GitOps)

\`\`\`mermaid
graph TD
    subgraph DevWorkspace["Developer Workflow"]
        Dev["Integration Developer"] -->|Git Commit & PR| GitRepo["Enterprise Git Repository (GitHub/GitLab)"]
    end

    subgraph CI_Pipeline["Automated CI/CD Pipeline (GitHub Actions / Jenkins)"]
        GitRepo --> Linter["1. Static Analysis & Naming Linting"]
        Linter --> UnitTests["2. Automated Unit Tests (MUnit / WmUnit)"]
        UnitTests --> Build["3. Asset Build Environment (ABE) / Maven Build"]
        Build --> DockerBuild["4. Container Image Build & Vulnerability Scan"]
        DockerBuild --> Registry["5. Push to Image Registry (Harbor / ECR)"]
    end

    subgraph CD_Deployment["Continuous Deployment (Kubernetes / ArgoCD)"]
        Registry --> ArgoCD["ArgoCD GitOps Sync"]
        ArgoCD --> K8s_Prod["Production K8s Cluster<br/>(Mule Runtime Fabric / webMethods MSR Pods)"]
    end
\`\`\`

---

### Key Pillars of Hybrid Integration Governance

1. **Containerization & Externalized Configuration:**
   * Integration runtimes (e.g., **webMethods Microservices Runtime (MSR)** or **MuleSoft Runtime Fabric (RTF)**) run as immutable Docker containers.
   * **Rule:** Never bake environment-specific passwords, URLs, or port numbers into container images. Inject configurations dynamically using Kubernetes ConfigMaps, Secrets, or HashiCorp Vault.

2. **Automated Unit & Integration Testing:**
   * **MUnit (MuleSoft)** and **WmUnit (webMethods)** mock external backend endpoints (SAP, payment gateways) to execute automated unit tests on every pull request.
   * Mandate a minimum code/step coverage threshold (e.g., **80% test coverage**) before merging to \`main\`.

3. **Centralized Observability & Distributed Tracing:**
   * Every inbound request generates a global **Correlation ID** (\`X-Correlation-ID\`) propagated across all downstream REST calls, queues, and database logs.
   * Stream structured JSON logs to central platforms (Datadog, Splunk, OpenTelemetry, Prometheus) for real-time alerting and latency tracking.`,
      tryThis: 'Design a GitHub Actions YAML workflow outline for an integration project: Trigger on pull requests to `main`, run unit test suites (`mvn clean test`), build the container image (`docker build -t integration-service:v1 .`), and execute a vulnerability scan step.',
    },
    quiz: [
      {
        question: 'Why should environment-specific settings (such as database credentials and hostnames) NEVER be hardcoded into containerized integration images?',
        options: [
          'It violates container immutability, poses severe security risks, and prevents the exact same image artifact from promoting cleanly from Dev to Staging to Production.',
          'Docker images cannot store text strings.',
          'Database passwords only work when typed manually by administrators.',
          'Hardcoding passwords reduces network bandwidth.',
        ],
        correctIndex: 0,
        explanation: 'Externalizing configuration into ConfigMaps/Secrets ensures that immutable container images can be built once and promoted safely across environments without credential leaks.',
      },
      {
        question: 'What is the purpose of passing an `X-Correlation-ID` header across all distributed microservices and message queues in an enterprise architecture?',
        options: [
          'To compress HTTP response payloads.',
          'To enable end-to-end distributed tracing, allowing support teams to trace a single business transaction across multiple systems in central logs.',
          'To encrypt the database schema.',
          'To bypass API Gateway rate limits.',
        ],
        correctIndex: 1,
        explanation: 'A unique Correlation ID links log entries across multiple decoupled systems, making it possible to trace the complete lifecycle of a transaction through distributed logs.',
      },
      {
        question: 'Which testing framework is standardly used in MuleSoft Anypoint Platform to build automated unit tests and mock external backend endpoints?',
        options: [
          'MUnit',
          'JUnit 3',
          'Selenium IDE',
          'Postman UI only',
        ],
        correctIndex: 0,
        explanation: 'MUnit is the native testing framework for MuleSoft, enabling developers to build automated unit tests and mock external connectors within Anypoint Studio.',
      },
    ],
  },
];

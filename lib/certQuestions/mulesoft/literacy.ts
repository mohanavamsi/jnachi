import { CertQuestion } from '../types';

export const MULESOFT_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "mule_lit_01",
    section: "literacy",
    prompt: "In MuleSoft's 3-Tier API-Led Connectivity architecture, what is the core responsibility of System APIs?",
    options: [
      { id: "a", label: "Directly rendering HTML and mobile user interfaces." },
      { id: "b", label: "Insulating downstream consumers by providing raw, secure access to underlying core systems of record (e.g. ERP, databases, mainframe)." },
      { id: "c", label: "Orchestrating multi-source business logic and data aggregation." },
      { id: "d", label: "Managing client-specific pagination and header filtering for web frontends." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_02",
    section: "literacy",
    prompt: "Which tier in API-Led Connectivity is responsible for composing, aggregating, and executing business logic across multiple underlying System APIs?",
    options: [
      { id: "a", label: "Experience APIs." },
      { id: "b", label: "Edge Gateway Layer." },
      { id: "c", label: "Process APIs." },
      { id: "d", label: "Transport Security Layer." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_lit_03",
    section: "literacy",
    prompt: "What is the primary purpose of Experience APIs in MuleSoft's API-Led design methodology?",
    options: [
      { id: "a", label: "To directly connect to PostgreSQL and Oracle database tables." },
      { id: "b", label: "To manage operating system kernel patches on CloudHub workers." },
      { id: "c", label: "To format and optimize data payloads specifically for distinct consumer channels (e.g. mobile app, web portal, partner webhook) without altering core logic." },
      { id: "d", label: "To replace enterprise network firewalls." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_lit_04",
    section: "literacy",
    prompt: "In RAML 1.0, what construct is used to encapsulate reusable endpoint characteristics such as query parameters, headers, and responses across multiple resources?",
    options: [
      { id: "a", label: "Traits (using `is: [traitName]`)." },
      { id: "b", label: "Annotations." },
      { id: "c", label: "DataTypes only." },
      { id: "d", label: "Overlay modules." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_05",
    section: "literacy",
    prompt: "What is the difference between a RAML `resourceType` and a `trait`?",
    options: [
      { id: "a", label: "`resourceType` applies to entire resources to define structural behavior (like collection/item patterns), whereas `trait` applies to methods to extract common request/response properties." },
      { id: "b", label: "`traits` only work in OAS 2.0; `resourceTypes` only work in RAML 0.8." },
      { id: "c", label: "`resourceType` is for XML; `trait` is for JSON." },
      { id: "d", label: "They are completely identical with no functional difference." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_06",
    section: "literacy",
    prompt: "When designing RESTful APIs in RAML/OAS, when should URI Path Parameters be used instead of Query Parameters?",
    options: [
      { id: "a", label: "Path parameters should identify a specific unique resource instance (e.g. `/orders/{orderId}`), while query parameters filter or paginate collections (e.g. `?status=open&page=2`)." },
      { id: "b", label: "Path parameters can only contain numbers; query parameters can only contain strings." },
      { id: "c", label: "Query parameters are encrypted; path parameters are plaintext." },
      { id: "d", label: "Path parameters are used only for HTTP POST operations." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_07",
    section: "literacy",
    prompt: "In Anypoint Design Center, what capability enables frontend and consumer teams to test against an API specification before any backend implementation code is written?",
    options: [
      { id: "a", label: "Mule Clustering Engine." },
      { id: "b", label: "Anypoint Mocking Service (generating dynamic mock responses based on RAML examples)." },
      { id: "c", label: "CloudHub Dedicated Load Balancer." },
      { id: "d", label: "Runtime Fabric Manager." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_08",
    section: "literacy",
    prompt: "What is the role of APIkit Router in a Mule 4 application generated from a RAML or OAS contract?",
    options: [
      { id: "a", label: "Compiles Mule flows to C++ binaries." },
      { id: "b", label: "Routes incoming HTTP requests to specific flows based on URI, method, and headers, while automatically enforcing payload schema validation and error responses." },
      { id: "c", label: "Manages database connection pools." },
      { id: "d", label: "Creates Salesforce custom objects automatically." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_09",
    section: "literacy",
    prompt: "In Mule 4 event architecture, what are the three core components of a Mule Event?",
    options: [
      { id: "a", label: "Mule Message (Payload + Attributes) and Variables (`vars`)." },
      { id: "b", label: "Java Heap, Thread Pool, and Socket Buffer." },
      { id: "c", label: "Source IP, Destination IP, and TCP checksum." },
      { id: "d", label: "Session Header, Cookie Jar, and Query String." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_10",
    section: "literacy",
    prompt: "What happened to Inbound Properties and Outbound Properties from Mule 3 when transitioning to the modern Mule 4 architecture?",
    options: [
      { id: "a", label: "They were renamed to Environment Variables." },
      { id: "b", label: "They were replaced by immutable `Attributes` (metadata from message sources/connectors) and mutable `Variables` (`vars`), simplifying the message model." },
      { id: "c", label: "They were moved to database tables." },
      { id: "d", label: "They are still required in all Mule 4 XML definitions." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_11",
    section: "literacy",
    prompt: "In Mule 4, what is the scope of a flow variable created using the `Set Variable` (`<set-variable>`) component?",
    options: [
      { id: "a", label: "Visible across all Mule applications running in the entire CloudHub organization." },
      { id: "b", label: "Preserved permanently in the database across application restarts." },
      { id: "c", label: "Persists across the current Mule execution flow, including sub-flows and flow-ref calls, but is NOT automatically propagated across transport boundaries (e.g. outbound HTTP/JMS)." },
      { id: "d", label: "Only accessible inside the single component that defined it." }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_lit_12",
    section: "literacy",
    prompt: "What is the architectural difference between a Private Flow and a Sub-Flow in Mule 4?",
    options: [
      { id: "a", label: "Sub-flows do not have their own processing strategy or exception strategy; they inherit the context and error handling of the calling parent flow." },
      { id: "b", label: "Private flows run in separate Docker containers." },
      { id: "c", label: "Sub-flows cannot access flow variables." },
      { id: "d", label: "Private flows only accept XML payloads." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_13",
    section: "literacy",
    prompt: "When publishing API specifications to Anypoint Exchange, why is semantic versioning (Major.Minor.Patch) critical for consumer governance?",
    options: [
      { id: "a", label: "Major version bumps signal breaking interface changes, enabling backwards-compatible version coexistence (e.g. `/v1/` and `/v2/`)." },
      { id: "b", label: "Exchange deletes APIs that do not update daily." },
      { id: "c", label: "Semantic versioning compiles RAML into Java bytecode." },
      { id: "d", label: "It is only required for trial accounts." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_14",
    section: "literacy",
    prompt: "What is an Anypoint API Community Manager (ACM) used for in enterprise API programs?",
    options: [
      { id: "a", label: "Managing physical ethernet cables in server racks." },
      { id: "b", label: "Creating customized, branded developer portals on Salesforce Experience Cloud to drive developer engagement, API onboarding, and interactive documentation." },
      { id: "c", label: "Running unit tests for DataWeave." },
      { id: "d", label: "Managing employee payroll records." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_15",
    section: "literacy",
    prompt: "In RESTful API design, which HTTP method must be both idempotent and safe according to RFC standards?",
    options: [
      { id: "a", label: "`POST`" },
      { id: "b", label: "`DELETE`" },
      { id: "c", label: "`GET` (also `HEAD` and `OPTIONS`)" },
      { id: "d", label: "`PATCH`" }
    ],
    correctOptionId: "c"
  },
  {
    id: "mule_lit_16",
    section: "literacy",
    prompt: "What is the primary difference between HTTP `PUT` and HTTP `PATCH` in REST integrations?",
    options: [
      { id: "a", label: "`PUT` replaces the entire target resource representation; `PATCH` applies partial modifications to the resource." },
      { id: "b", label: "`PUT` is asynchronous; `PATCH` is synchronous." },
      { id: "c", label: "`PATCH` deletes the resource." },
      { id: "d", label: "`PUT` can only be used with XML payloads." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_17",
    section: "literacy",
    prompt: "In Anypoint Studio, what file format defines project dependencies, Mule runtime version, and build plugins for Maven execution?",
    options: [
      { id: "a", label: "`mule-artifact.json`" },
      { id: "b", label: "`pom.xml`" },
      { id: "c", label: "`global.xml`" },
      { id: "d", label: "`settings.gradle`" }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_18",
    section: "literacy",
    prompt: "What is the purpose of `mule-artifact.json` in a Mule 4 application package?",
    options: [
      { id: "a", label: "Declares classloader isolation configurations, exported packages, minimum required Mule runtime version, and secure properties." },
      { id: "b", label: "Contains database passwords in plaintext." },
      { id: "c", label: "Stores user passwords for Anypoint Platform." },
      { id: "d", label: "Generates HTML documentation for APIkit." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_19",
    section: "literacy",
    prompt: "What is the non-blocking execution model in Mule 4 and how does it prevent thread starvation under heavy I/O workloads?",
    options: [
      { id: "a", label: "Uses three optimized, reactive thread pools (CPU Light, CPU Intensive, and Blocking I/O) that automatically hand off tasks without holding threads during I/O waiting." },
      { id: "b", label: "Spawns 50,000 OS threads on startup." },
      { id: "c", label: "Executes all requests on the GPU." },
      { id: "d", label: "Bypasses JVM memory management." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_20",
    section: "literacy",
    prompt: "Which HTTP status code should a MuleSoft API return when a client sends a request with valid authentication but lacks permission to access the resource?",
    options: [
      { id: "a", label: "`401 Unauthorized`" },
      { id: "b", label: "`403 Forbidden`" },
      { id: "c", label: "`404 Not Found`" },
      { id: "d", label: "`400 Bad Request`" }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_21",
    section: "literacy",
    prompt: "What is the correct HTTP status code returned by an APIkit router when an incoming request payload violates the required RAML schema validation?",
    options: [
      { id: "a", label: "`500 Internal Server Error`" },
      { id: "b", label: "`400 Bad Request`" },
      { id: "c", label: "`404 Not Found`" },
      { id: "d", label: "`503 Service Unavailable`" }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_22",
    section: "literacy",
    prompt: "What status code is returned when a client sends an HTTP `POST` request to an endpoint that only defines `GET` and `PUT` in its RAML spec?",
    options: [
      { id: "a", label: "`405 Method Not Allowed`" },
      { id: "b", label: "`415 Unsupported Media Type`" },
      { id: "c", label: "`406 Not Acceptable`" },
      { id: "d", label: "`501 Not Implemented`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_23",
    section: "literacy",
    prompt: "What does the `415 Unsupported Media Type` HTTP status code indicate in a MuleSoft REST API response?",
    options: [
      { id: "a", label: "The request `Content-Type` header (e.g. `application/xml`) is not accepted by the API endpoint which requires `application/json`." },
      { id: "b", label: "The user has exceeded their hourly rate limit." },
      { id: "c", label: "The Mule runtime ran out of disk space." },
      { id: "d", label: "The database connection was closed." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_24",
    section: "literacy",
    prompt: "In RAML 1.0, what is the function of a RAML `Library` (`uses:`) compared to an `Include` (`!include`)?",
    options: [
      { id: "a", label: "A Library bundles multiple data types, resource types, and traits into a namespaced module, whereas `!include` inserts raw text or a single file directly." },
      { id: "b", label: "Libraries only work for Java code." },
      { id: "c", label: "`!include` can only load image files." },
      { id: "d", label: "There is no functional difference." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_25",
    section: "literacy",
    prompt: "What is an Anypoint Exchange Asset Portal used for in an enterprise Center for Enablement (C4E)?",
    options: [
      { id: "a", label: "To store employee passwords." },
      { id: "b", label: "To catalog, discover, share, and test reusable integration building blocks (APIs, connectors, policies, templates, fragments) across teams." },
      { id: "c", label: "To mine cryptocurrency using idle CloudHub CPU." },
      { id: "d", label: "To replace Slack and email messaging." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_26",
    section: "literacy",
    prompt: "In MuleSoft API design, what is a RAML `Overlay` primarily used for?",
    options: [
      { id: "a", label: "Adding localized text, descriptions, and metadata for internationalization without modifying the base API contract definition." },
      { id: "b", label: "Overriding database passwords in production." },
      { id: "c", label: "Merging two CloudHub worker nodes into one." },
      { id: "d", label: "Compressing RAML files into `.zip` format." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_27",
    section: "literacy",
    prompt: "What is an API Fragment in Anypoint Platform?",
    options: [
      { id: "a", label: "A corrupted RAML file that failed validation." },
      { id: "b", label: "A modular, reusable specification snippet (e.g. DataType, Trait, ResourceType) published to Exchange that is not a standalone runnable API." },
      { id: "c", label: "A partial HTTP packet sent over TCP." },
      { id: "d", label: "A database transaction log record." }
    ],
    correctOptionId: "b"
  },
  {
    id: "mule_lit_28",
    section: "literacy",
    prompt: "When designing API specifications, why is Contract-First design preferred over Code-First design in MuleSoft implementations?",
    options: [
      { id: "a", label: "Enables parallel frontend/backend development, establishes a clear SLA interface contract, and supports mocking before implementation." },
      { id: "b", label: "It compiles Mule flows directly to hardware assembly." },
      { id: "c", label: "Code-first APIs cannot connect to databases." },
      { id: "d", label: "Contract-first design eliminates the need for unit tests." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_29",
    section: "literacy",
    prompt: "In modern MuleSoft integration architecture, what is the role of a Center for Enablement (C4E)?",
    options: [
      { id: "a", label: "A cross-functional team that drives API reuse, defines architectural standards, publishes core assets to Exchange, and coaches delivery teams." },
      { id: "b", label: "A 24/7 helpdesk that resets user passwords." },
      { id: "c", label: "A dedicated server that runs Jenkins builds." },
      { id: "d", label: "A legal department that files software patents." }
    ],
    correctOptionId: "a"
  },
  {
    id: "mule_lit_30",
    section: "literacy",
    prompt: "What is the primary benefit of deploying APIs to a dedicated Anypoint VPC instead of the shared CloudHub public worker cloud?",
    options: [
      { id: "a", label: "Allows direct private network connectivity (via IPsec VPN or AWS Direct Connect) to on-premises enterprise data centers without exposing traffic to public internet." },
      { id: "b", label: "Eliminates all MuleSoft subscription licensing costs." },
      { id: "c", label: "Increases CPU clock frequency by 10x." },
      { id: "d", label: "Automates DataWeave script authoring." }
    ],
    correctOptionId: "a"
  }
];

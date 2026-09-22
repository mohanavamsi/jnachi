import { Question } from '../../certTypes';

export const ibmAceAutomationQuestions: Question[] = [
  {
    id: 'ace_aut_01',
    domain: 'automation',
    text: 'In an ESQL Compute node, which Compute Mode attribute value allows the ESQL module to transform the message payload while preserving incoming LocalEnvironment, Environment, and ExceptionList trees?',
    options: {
      a: '`Message`',
      b: '`All`',
      c: '`LocalEnvironment`',
      d: '`Exception`'
    },
    correctAnswer: 'a',
    explanation: 'The `Message` compute mode specifies that the output tree’s `OutputRoot` is constructed in ESQL while `LocalEnvironment`, `Environment`, and `ExceptionList` are automatically propagated unchanged.'
  },
  {
    id: 'ace_aut_02',
    domain: 'automation',
    text: 'In ESQL, which statement correctly sets a customer name field in an output JSON message from an input XMLNSC message?',
    options: {
      a: '`SET OutputRoot.JSON.Data.Customer.Name = InputRoot.XMLNSC.CustomerOrder.CustomerName;`',
      b: '`LET OutputRoot.JSON.Customer.Name := InputRoot.XMLNSC.CustomerName`',
      c: '`COPY InputRoot.XMLNSC TO OutputRoot.JSON`',
      d: '`MAP InputRoot.CustomerName -> OutputRoot.Name`'
    },
    correctAnswer: 'a',
    explanation: 'In ESQL, `SET OutputRoot.JSON.Data.<field> = InputRoot.XMLNSC.<field>;` navigates the input logical message tree and builds the corresponding JSON output structure.'
  },
  {
    id: 'ace_aut_03',
    domain: 'automation',
    text: 'In the Java Compute Node API, which class represents the overall message object and which class represents individual nodes or fields within the message tree?',
    options: {
      a: '`MbMessage` represents the message, and `MbElement` represents tree elements/fields',
      b: '`ACEPayload` represents the message, and `ACEField` represents elements',
      c: '`MessageBrokerContext` represents the message, and `NodeItem` represents elements',
      d: '`FlowData` represents the message, and `XMLToken` represents elements'
    },
    correctAnswer: 'a',
    explanation: 'The IBM ACE Java Plugin API uses `MbMessage` for the container and `MbElement` to traverse, navigate, create, and modify elements within the syntax tree.'
  },
  {
    id: 'ace_aut_04',
    domain: 'automation',
    text: 'What is the function of the IBM ACE Callable Message Flows feature (`CallableInput` / `CallableRun` / `CallableReply` nodes)?',
    options: {
      a: 'It allows splitting integration logic across different message flows, integration servers, or hybrid cloud environments (e.g. on-premises ACE and cloud App Connect) with secure invocation over a Switch server',
      b: 'It executes telephone voice calls via VoIP to support desks',
      c: 'It converts ESQL code into C++ dynamic libraries',
      d: 'It replaces all REST endpoints with SOAP WSDL bindings'
    },
    correctAnswer: 'a',
    explanation: 'Callable flows allow message flows to invoke sub-flows running in different integration servers, nodes, or cloud environments synchronously or asynchronously via an ACE Switch server.'
  },
  {
    id: 'ace_aut_05',
    domain: 'automation',
    text: 'Which triplet of nodes is used in IBM ACE to implement the Scatter-Gather (Fan-out / Fan-in) aggregation pattern across multiple backend services in parallel?',
    options: {
      a: '`AggregateControl`, `AggregateRequest`, and `AggregateReply`',
      b: '`ScatterNode`, `GatherNode`, and `MergeNode`',
      c: '`Splitter`, `Joiner`, and `Filter`',
      d: '`ForkNode`, `BranchNode`, and `JoinNode`'
    },
    correctAnswer: 'a',
    explanation: '`AggregateControl` starts the aggregation transaction, `AggregateRequest` records each asynchronous backend request sent, and `AggregateReply` collects all asynchronous responses when they return to assemble a composite response.'
  },
  {
    id: 'ace_aut_06',
    domain: 'automation',
    text: 'In an ESQL `DATABASE` or `COMPUTE` node, how can a developer execute a parameter-bound SQL query against an external database defined by ODBC datasource `DSN_FINANCE`?',
    options: {
      a: '`SET Environment.Customer[] = PASSTHRU(\'SELECT ID, STATUS FROM ACCOUNTS WHERE REGION = ?\' TO Database.DSN_FINANCE VALUES(\'EAST\'));`',
      b: '`EXEC SQL Database.DSN_FINANCE SELECT ID FROM ACCOUNTS`',
      c: '`RUN QUERY \'SELECT * FROM ACCOUNTS\' ON DSN_FINANCE`',
      d: '`CALL SQL_EXEC(DSN_FINANCE, \'SELECT ALL\')`'
    },
    correctAnswer: 'a',
    explanation: '`PASSTHRU(...) TO Database.<DataSource> VALUES(...)` executes dynamic parameterized SQL queries against external relational databases via ODBC connections.'
  },
  {
    id: 'ace_aut_07',
    domain: 'automation',
    text: 'What is the purpose of the `Collector` node in IBM ACE?',
    options: {
      a: 'To correlate and group multiple independent input messages from different heterogeneous sources (e.g. one message from MQ, one from HTTP, one from a file) into a single unified message collection based on correlation rules',
      b: 'To collect garbage memory in the JVM',
      c: 'To aggregate billing data for software subscriptions',
      d: 'To gather CPU load statistics across server clusters'
    },
    correctAnswer: 'a',
    explanation: 'The `Collector` node builds message collections (`MessageCollection`) by grouping messages arriving on dynamic input terminals that match defined correlation criteria or timeouts.'
  },
  {
    id: 'ace_aut_08',
    domain: 'automation',
    text: 'What is the difference between synchronous HTTP nodes (`HTTPRequest` / `HTTPReply`) and asynchronous HTTP nodes (`HTTPAsyncRequest` / `HTTPAsyncResponse`) in ACE?',
    options: {
      a: 'Asynchronous HTTP nodes release the message flow processing thread while waiting for external server responses, scaling thread utilization across thousands of concurrent calls',
      b: 'Synchronous HTTP nodes only support HTTP/1.0, while asynchronous nodes support HTTP/2',
      c: 'Asynchronous nodes cannot transmit JSON payloads',
      d: 'Synchronous nodes do not require network connectivity'
    },
    correctAnswer: 'a',
    explanation: '`HTTPAsyncRequest` dispatches the HTTP call and frees the worker thread immediately; the response is picked up independently on a separate flow thread by `HTTPAsyncResponse`, maximizing throughput.'
  },
  {
    id: 'ace_aut_09',
    domain: 'automation',
    text: 'In an ESQL Compute module, what is the effect of declaring a variable with the `SHARED` keyword (e.g. `DECLARE myCache SHARED ROW;`)?',
    options: {
      a: 'The variable persists in memory across all flow execution threads within the same Integration Server process and across multiple message transactions',
      b: 'The variable is shared on the public internet',
      c: 'The variable is exported as a global Linux environment variable',
      d: 'The variable is synchronized across all IBM MQ queue managers'
    },
    correctAnswer: 'a',
    explanation: '`SHARED` variables reside in integration server heap memory and are accessible by all threads running that flow, ideal for in-memory caching and reference lookups.'
  },
  {
    id: 'ace_aut_10',
    domain: 'automation',
    text: 'What is the purpose of the `ROUTETO` label and `RouteToLabel` node in ACE message flow routing?',
    options: {
      a: 'They allow dynamic routing to one or more `Label` nodes within the message flow determined at runtime by populating `LocalEnvironment.Destination.RouterList.DestinationData`',
      b: 'They print physical labels for shipping packages',
      c: 'They convert ESQL strings to uppercase',
      d: 'They restart the flow execution from the first node'
    },
    correctAnswer: 'a',
    explanation: '`RouteToLabel` inspects routing destination labels in `LocalEnvironment` and passes the message directly to matching `Label` nodes in the flow.'
  },
  {
    id: 'ace_aut_11',
    domain: 'automation',
    text: 'In the ACE Graphical Data Mapping node (`.map`), what type of transform is used to iterate over a repeating source array and generate repeating elements in the target schema?',
    options: {
      a: '`For Each` transform',
      b: '`Assign` transform',
      c: '`Move` transform',
      d: '`Submap` transform'
    },
    correctAnswer: 'a',
    explanation: 'The `For Each` transform iterates through repeating input array elements, executing inner nested transforms to populate output array elements.'
  },
  {
    id: 'ace_aut_12',
    domain: 'automation',
    text: 'How can an ESQL module throw a custom user exception with an error message and code to trigger flow error handling?',
    options: {
      a: '`THROW USER EXCEPTION VALUES( 3001, \'Invalid Account Number\', \'VALIDATION_ERROR\' );`',
      b: '`RAISE ERROR 3001 WITH \'Invalid Account\';`',
      c: '`FAIL TRANSACTION MESSAGE \'Invalid Account\';`',
      d: '`EXIT MODULE WITH ERROR;`'
    },
    correctAnswer: 'a',
    explanation: 'The `THROW USER EXCEPTION` statement in ESQL creates a `UserException` with custom error numbers, descriptions, and categories in the `ExceptionList`.'
  },
  {
    id: 'ace_aut_13',
    domain: 'automation',
    text: 'In the Java Compute Node, how does a developer create a new output message that is an exact deep copy of the input message before modifying fields?',
    options: {
      a: '`MbMessage outMessage = new MbMessage(inMessage);`',
      b: '`MbMessage outMessage = inMessage.clone();`',
      c: '`MbMessage outMessage = MbMessage.deepCopy(inMessage);`',
      d: '`MbMessage outMessage = inMessage;`'
    },
    correctAnswer: 'a',
    explanation: 'Passing `inMessage` into the constructor `new MbMessage(inMessage)` creates a new independent message object with a deep copy of the input message tree.'
  },
  {
    id: 'ace_aut_14',
    domain: 'automation',
    text: 'Which ACE built-in node allows reading or writing records in an external Kafka cluster (e.g. Apache Kafka or IBM Event Streams)?',
    options: {
      a: '`KafkaConsumer`, `KafkaProducer`, and `KafkaRead` nodes',
      b: '`JMSConsumer` and `JMSProducer` only',
      c: '`EventStreamingNode`',
      d: '`MQKafkaBridge`'
    },
    correctAnswer: 'a',
    explanation: 'ACE provides native Kafka nodes (`KafkaConsumer`, `KafkaProducer`, `KafkaRead`) to publish and subscribe to Apache Kafka and IBM Event Streams topics.'
  },
  {
    id: 'ace_aut_15',
    domain: 'automation',
    text: 'In IBM ACE message flows, what is the role of the `DatabaseRetrieve` node?',
    options: {
      a: 'It retrieves data from an external relational database based on search criteria and enriches the message without requiring ESQL or Java code',
      b: 'It deletes the entire database table',
      c: 'It exports message flow metrics to MongoDB',
      d: 'It manages JDBC database connection transactions'
    },
    correctAnswer: 'a',
    explanation: 'The `DatabaseRetrieve` node is a declarative enrichment node that queries a relational database using key lookups and injects resulting columns into the message tree.'
  },
  {
    id: 'ace_aut_16',
    domain: 'automation',
    text: 'What is the purpose of the `FileRead` and `FileOutput` nodes in batch file integration flows?',
    options: {
      a: '`FileRead` reads records or entire contents from local or NFS/FTP files mid-flow; `FileOutput` writes messages to disk with customizable file records and delimiters',
      b: 'They format log files into CSV format',
      c: 'They encrypt hard drives with BitLocker',
      d: 'They download software updates from IBM Fix Central'
    },
    correctAnswer: 'a',
    explanation: 'The File nodes in ACE support batch file reading, parsing delimited/fixed-length records, appending, and writing out processed batches to files.'
  },
  {
    id: 'ace_aut_17',
    domain: 'automation',
    text: 'What happens when an ESQL module contains an infinite loop or unhandled null pointer dereference during flow execution?',
    options: {
      a: 'ACE throws a `RecoverableException` / `BIP2230E` exception, aborts the current node processing, and routes control to the node\'s `Failure` or `Catch` terminal',
      b: 'The Integration Server process is permanently corrupted on disk',
      c: 'The entire operating system restarts',
      d: 'The node converts the loop into a background thread'
    },
    correctAnswer: 'a',
    explanation: 'ESQL runtime errors generate `RecoverableException` objects that flow to the enclosing node’s Failure or Catch terminal, or trigger transaction rollback if unwired.'
  },
  {
    id: 'ace_aut_18',
    domain: 'automation',
    text: 'In the ACE Graphical Data Mapper, what is a "Custom ESQL" or "Custom Java" transform used for?',
    options: {
      a: 'To invoke custom business calculations or external lookup helper methods that cannot be achieved using standard declarative map transforms',
      b: 'To generate Eclipse plugins',
      c: 'To format XML schemas into HTML documentation',
      d: 'To configure server IP addresses'
    },
    correctAnswer: 'a',
    explanation: 'Custom ESQL and Custom Java transforms in graphical maps allow developers to call specialized ESQL functions or static Java methods directly within mapping flows.'
  },
  {
    id: 'ace_aut_19',
    domain: 'automation',
    text: 'What is the function of the `RESTRequest` node in IBM ACE?',
    options: {
      a: 'It invokes an external REST API using a Swagger 2.0 or OpenAPI 3.0 specification document, providing schema-aware input/output parameter mapping',
      b: 'It starts a REST server inside the Linux kernel',
      c: 'It converts REST calls into SOAP 1.1 envelopes',
      d: 'It validates user credit card numbers'
    },
    correctAnswer: 'a',
    explanation: 'The `RESTRequest` node imports OpenAPI/Swagger definitions to make schema-aware HTTP REST calls with typed path, query, and header parameters.'
  },
  {
    id: 'ace_aut_20',
    domain: 'automation',
    text: 'In ESQL, how do you iterate through an array of items in `InputRoot.XMLNSC.Order.Item[]` and compute the total order amount?',
    options: {
      a: 'Use a `FOR item AS InputRoot.XMLNSC.Order.Item[] DO ... END FOR;` or `WHILE` loop in ESQL',
      b: 'Use a JavaScript `forEach` loop',
      c: 'Use an SQL `GROUP BY` clause directly on memory pointers',
      d: 'Use a `GOTO` statement with line numbers'
    },
    correctAnswer: 'a',
    explanation: 'ESQL provides `FOR ... IN ...` and `WHILE` loops to traverse repeating message tree nodes (`Item[]`) and aggregate calculations.'
  },
  {
    id: 'ace_aut_21',
    domain: 'automation',
    text: 'What is the purpose of the `FlowOrder` node in an ACE message flow?',
    options: {
      a: 'It enforces strictly sequential execution: it propagates the message to output terminal `First` and waits for complete downstream completion before propagating to `Second`',
      b: 'It sorts messages in a queue by alphabetical order',
      c: 'It places customer orders into SAP ERP',
      d: 'It balances network traffic across two NIC adapters'
    },
    correctAnswer: 'a',
    explanation: 'The `FlowOrder` node guarantees ordering by executing branch 1 (`First`) synchronously to completion before executing branch 2 (`Second`).'
  },
  {
    id: 'ace_aut_22',
    domain: 'automation',
    text: 'What is the function of the `SOAPExtract` and `SOAPReply` nodes in SOAP web service flows?',
    options: {
      a: '`SOAPExtract` extracts the SOAP body from envelopes and clears transport headers; `SOAPReply` constructs the SOAP response envelope and returns it to the HTTP/JMS client',
      b: 'They convert SOAP into binary Kafka streams',
      c: 'They validate PDF signatures on attachments',
      d: 'They restart the web server daemon'
    },
    correctAnswer: 'a',
    explanation: '`SOAPExtract` unpacks the SOAP Envelope body payload, and `SOAPReply` packages the response and sends the SOAP message back to the originating client.'
  },
  {
    id: 'ace_aut_23',
    domain: 'automation',
    text: 'In ESQL, what is the purpose of the `COALESCE` function?',
    options: {
      a: 'It returns the first non-null expression among its arguments, preventing null pointer errors when reading optional fields',
      b: 'It joins two strings together with a comma',
      c: 'It formats numbers as currency',
      d: 'It converts uppercase text to lowercase'
    },
    correctAnswer: 'a',
    explanation: '`COALESCE(val1, val2, ...)` evaluates expressions in order and returns the first non-null value, providing safe fallbacks for optional elements.'
  },
  {
    id: 'ace_aut_24',
    domain: 'automation',
    text: 'What is the role of the `DatabaseRoute` node in ACE?',
    options: {
      a: 'It queries a database table and routes incoming messages to specific output terminals based on column values returned from the query',
      b: 'It configures IP routing tables on the database server',
      c: 'It moves database tables between Oracle and PostgreSQL',
      d: 'It formats SQL queries as JSON'
    },
    correctAnswer: 'a',
    explanation: 'The `DatabaseRoute` node looks up routing criteria in database tables to conditionally direct messages through specified flow terminals.'
  },
  {
    id: 'ace_aut_25',
    domain: 'automation',
    text: 'How does an integration developer configure dynamic timeout values on an `HTTPRequest` node at runtime?',
    options: {
      a: 'By populating `LocalEnvironment.Destination.HTTP.RequestTimeout` in ESQL/Java before the HTTPRequest node is invoked',
      b: 'By editing `server.conf.yaml` and restarting the server',
      c: 'By setting an environment variable in Linux',
      d: 'By modifying the Eclipse Toolkit project preferences'
    },
    correctAnswer: 'a',
    explanation: 'ACE allows overriding static node attributes dynamically at runtime by populating specific fields in the `LocalEnvironment.Destination.HTTP` tree.'
  },
  {
    id: 'ace_aut_26',
    domain: 'automation',
    text: 'What is the purpose of the `TimeoutControl` and `TimeoutNotification` nodes in ACE?',
    options: {
      a: 'They provide scheduled and timer-based batch processing, generating message flow trigger events at fixed intervals or at specific calendar dates/times',
      b: 'They terminate slow HTTP connections after 10 seconds',
      c: 'They enforce user session logout in web browsers',
      d: 'They measure CPU clock drift on the server'
    },
    correctAnswer: 'a',
    explanation: '`TimeoutControl` stores timeout requests, and `TimeoutNotification` triggers flow execution when scheduled timer events expire.'
  },
  {
    id: 'ace_aut_27',
    domain: 'automation',
    text: 'In ESQL, how do you delete a subtree or element from the logical message tree?',
    options: {
      a: '`SET OutputRoot.XMLNSC.Order.CreditCardNumber = NULL;`',
      b: '`DELETE OutputRoot.XMLNSC.Order.CreditCardNumber;`',
      c: '`REMOVE ELEMENT CreditCardNumber;`',
      d: '`DROP TREE CreditCardNumber;`'
    },
    correctAnswer: 'a',
    explanation: 'Assigning `NULL` to an element in ESQL (`SET <path> = NULL;`) deletes that field or entire subtree from the logical message tree.'
  },
  {
    id: 'ace_aut_28',
    domain: 'automation',
    text: 'What is the role of the `Sequence` and `Resequence` nodes in IBM ACE?',
    options: {
      a: 'They manage and restore the original sequential order of messages in a stream that may have arrived out-of-order over asynchronous multi-threaded channels',
      b: 'They generate incremental primary keys in Oracle databases',
      c: 'They sort JSON keys alphabetically',
      d: 'They format numbers into Roman numerals'
    },
    correctAnswer: 'a',
    explanation: '`Sequence` numbers messages in a stream, and `Resequence` re-orders messages according to sequence numbers, holding early arrivals until missing messages arrive.'
  },
  {
    id: 'ace_aut_29',
    domain: 'automation',
    text: 'What is the function of the `Validate` node in ACE message flows?',
    options: {
      a: 'It validates the message content and structure against XML Schemas, DFDL definitions, or JSON Schemas without altering the message body',
      b: 'It validates user credit card CVV codes',
      c: 'It verifies software license expiration dates',
      d: 'It checks if network cables are connected'
    },
    correctAnswer: 'a',
    explanation: 'The `Validate` node parses the message and verifies conformance against associated schema definitions (XSD, DFDL, or JSON Schema), routing invalid messages to a failure terminal.'
  },
  {
    id: 'ace_aut_30',
    domain: 'automation',
    text: 'In Java Compute Nodes, how should developers handle object lifecycle and memory cleanup for newly created `MbMessage` objects?',
    options: {
      a: 'Always call `outMessage.clearMessage()` or propagate properly, ensuring unpropagated intermediate messages are cleared to prevent JVM heap leaks',
      b: 'Java handles all MbMessage memory automatically with zero considerations',
      c: 'Restart the Integration Server after every 100 messages',
      d: 'Never instantiate more than 1 MbMessage in a JVM'
    },
    correctAnswer: 'a',
    explanation: 'Intermediate `MbMessage` instances created in Java compute nodes that are not propagated should be cleared with `clearMessage()` to avoid native memory/heap leaks.'
  }
];

import { CertQuestion } from '../types';

export const IBM_ACE_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "ace_aut_01",
    "section": "automation",
    "prompt": "In an ESQL Compute node, which Compute Mode attribute value allows the ESQL module to transform the message payload while preserving incoming LocalEnvironment, Environment, and ExceptionList trees?",
    "options": [
      {
        "id": "a",
        "label": "`All`"
      },
      {
        "id": "b",
        "label": "`Message`"
      },
      {
        "id": "c",
        "label": "`LocalEnvironment`"
      },
      {
        "id": "d",
        "label": "`Exception`"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_aut_02",
    "section": "automation",
    "prompt": "In ESQL, which statement correctly sets a customer name field in an output JSON message from an input XMLNSC message?",
    "options": [
      {
        "id": "a",
        "label": "`LET OutputRoot.JSON.Customer.Name := InputRoot.XMLNSC.CustomerName`"
      },
      {
        "id": "b",
        "label": "`COPY InputRoot.XMLNSC TO OutputRoot.JSON`"
      },
      {
        "id": "c",
        "label": "`SET OutputRoot.JSON.Data.Customer.Name = InputRoot.XMLNSC.CustomerOrder.CustomerName;`"
      },
      {
        "id": "d",
        "label": "`MAP InputRoot.CustomerName -> OutputRoot.Name`"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_aut_03",
    "section": "automation",
    "prompt": "In the Java Compute Node API, which class represents the overall message object and which class represents individual nodes or fields within the message tree?",
    "options": [
      {
        "id": "a",
        "label": "`MbMessage` represents the message, and `MbElement` represents tree elements/fields"
      },
      {
        "id": "b",
        "label": "`ACEPayload` represents the message, and `ACEField` represents elements"
      },
      {
        "id": "c",
        "label": "`MessageBrokerContext` represents the message, and `NodeItem` represents elements"
      },
      {
        "id": "d",
        "label": "`FlowData` represents the message, and `XMLToken` represents elements"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_aut_04",
    "section": "automation",
    "prompt": "What is the function of the IBM ACE Callable Message Flows feature (`CallableInput` / `CallableRun` / `CallableReply` nodes)?",
    "options": [
      {
        "id": "a",
        "label": "It executes telephone voice calls via VoIP to support desks"
      },
      {
        "id": "b",
        "label": "It converts ESQL code into C++ dynamic libraries"
      },
      {
        "id": "c",
        "label": "It replaces all REST endpoints with SOAP WSDL bindings"
      },
      {
        "id": "d",
        "label": "It allows splitting integration logic across different message flows, integration servers, or hybrid cloud environments (e.g. on-premises ACE and cloud App Connect) with secure invocation over a Switch server"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_aut_05",
    "section": "automation",
    "prompt": "Which triplet of nodes is used in IBM ACE to implement the Scatter-Gather (Fan-out / Fan-in) aggregation pattern across multiple backend services in parallel?",
    "options": [
      {
        "id": "a",
        "label": "`ScatterNode`, `GatherNode`, and `MergeNode`"
      },
      {
        "id": "b",
        "label": "`Splitter`, `Joiner`, and `Filter`"
      },
      {
        "id": "c",
        "label": "`AggregateControl`, `AggregateRequest`, and `AggregateReply`"
      },
      {
        "id": "d",
        "label": "`ForkNode`, `BranchNode`, and `JoinNode`"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_aut_06",
    "section": "automation",
    "prompt": "In an ESQL `DATABASE` or `COMPUTE` node, how can a developer execute a parameter-bound SQL query against an external database defined by ODBC datasource `DSN_FINANCE`?",
    "options": [
      {
        "id": "a",
        "label": "`SET Environment.Customer[] = PASSTHRU('SELECT ID, STATUS FROM ACCOUNTS WHERE REGION = ?' TO Database.DSN_FINANCE VALUES('EAST'));`"
      },
      {
        "id": "b",
        "label": "`EXEC SQL Database.DSN_FINANCE SELECT ID FROM ACCOUNTS`"
      },
      {
        "id": "c",
        "label": "`RUN QUERY 'SELECT * FROM ACCOUNTS' ON DSN_FINANCE`"
      },
      {
        "id": "d",
        "label": "`CALL SQL_EXEC(DSN_FINANCE, 'SELECT ALL')`"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_aut_07",
    "section": "automation",
    "prompt": "What is the purpose of the `Collector` node in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "To collect garbage memory in the JVM"
      },
      {
        "id": "b",
        "label": "To aggregate billing data for software subscriptions"
      },
      {
        "id": "c",
        "label": "To gather CPU load statistics across server clusters"
      },
      {
        "id": "d",
        "label": "To correlate and group multiple independent input messages from different heterogeneous sources (e.g. one message from MQ, one from HTTP, one from a file) into a single unified message collection based on correlation rules"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_aut_08",
    "section": "automation",
    "prompt": "What is the difference between synchronous HTTP nodes (`HTTPRequest` / `HTTPReply`) and asynchronous HTTP nodes (`HTTPAsyncRequest` / `HTTPAsyncResponse`) in ACE?",
    "options": [
      {
        "id": "a",
        "label": "Synchronous HTTP nodes only support HTTP/1.0, while asynchronous nodes support HTTP/2"
      },
      {
        "id": "b",
        "label": "Asynchronous HTTP nodes release the message flow processing thread while waiting for external server responses, scaling thread utilization across thousands of concurrent calls"
      },
      {
        "id": "c",
        "label": "Asynchronous nodes cannot transmit JSON payloads"
      },
      {
        "id": "d",
        "label": "Synchronous nodes do not require network connectivity"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_aut_09",
    "section": "automation",
    "prompt": "In an ESQL Compute module, what is the effect of declaring a variable with the `SHARED` keyword (e.g. `DECLARE myCache SHARED ROW;`)?",
    "options": [
      {
        "id": "a",
        "label": "The variable is shared on the public internet"
      },
      {
        "id": "b",
        "label": "The variable is exported as a global Linux environment variable"
      },
      {
        "id": "c",
        "label": "The variable is synchronized across all IBM MQ queue managers"
      },
      {
        "id": "d",
        "label": "The variable persists in memory across all flow execution threads within the same Integration Server process and across multiple message transactions"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_aut_10",
    "section": "automation",
    "prompt": "What is the purpose of the `ROUTETO` label and `RouteToLabel` node in ACE message flow routing?",
    "options": [
      {
        "id": "a",
        "label": "They print physical labels for shipping packages"
      },
      {
        "id": "b",
        "label": "They allow dynamic routing to one or more `Label` nodes within the message flow determined at runtime by populating `LocalEnvironment.Destination.RouterList.DestinationData`"
      },
      {
        "id": "c",
        "label": "They convert ESQL strings to uppercase"
      },
      {
        "id": "d",
        "label": "They restart the flow execution from the first node"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_aut_11",
    "section": "automation",
    "prompt": "In the ACE Graphical Data Mapping node (`.map`), what type of transform is used to iterate over a repeating source array and generate repeating elements in the target schema?",
    "options": [
      {
        "id": "a",
        "label": "`Assign` transform"
      },
      {
        "id": "b",
        "label": "`Move` transform"
      },
      {
        "id": "c",
        "label": "`For Each` transform"
      },
      {
        "id": "d",
        "label": "`Submap` transform"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_aut_12",
    "section": "automation",
    "prompt": "How can an ESQL module throw a custom user exception with an error message and code to trigger flow error handling?",
    "options": [
      {
        "id": "a",
        "label": "`THROW USER EXCEPTION VALUES( 3001, 'Invalid Account Number', 'VALIDATION_ERROR' );`"
      },
      {
        "id": "b",
        "label": "`RAISE ERROR 3001 WITH 'Invalid Account';`"
      },
      {
        "id": "c",
        "label": "`FAIL TRANSACTION MESSAGE 'Invalid Account';`"
      },
      {
        "id": "d",
        "label": "`EXIT MODULE WITH ERROR;`"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_aut_13",
    "section": "automation",
    "prompt": "In the Java Compute Node, how does a developer create a new output message that is an exact deep copy of the input message before modifying fields?",
    "options": [
      {
        "id": "a",
        "label": "`MbMessage outMessage = new MbMessage(inMessage);`"
      },
      {
        "id": "b",
        "label": "`MbMessage outMessage = inMessage.clone();`"
      },
      {
        "id": "c",
        "label": "`MbMessage outMessage = MbMessage.deepCopy(inMessage);`"
      },
      {
        "id": "d",
        "label": "`MbMessage outMessage = inMessage;`"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_aut_14",
    "section": "automation",
    "prompt": "Which ACE built-in node allows reading or writing records in an external Kafka cluster (e.g. Apache Kafka or IBM Event Streams)?",
    "options": [
      {
        "id": "a",
        "label": "`JMSConsumer` and `JMSProducer` only"
      },
      {
        "id": "b",
        "label": "`EventStreamingNode`"
      },
      {
        "id": "c",
        "label": "`MQKafkaBridge`"
      },
      {
        "id": "d",
        "label": "`KafkaConsumer`, `KafkaProducer`, and `KafkaRead` nodes"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_aut_15",
    "section": "automation",
    "prompt": "In IBM ACE message flows, what is the role of the `DatabaseRetrieve` node?",
    "options": [
      {
        "id": "a",
        "label": "It deletes the entire database table"
      },
      {
        "id": "b",
        "label": "It retrieves data from an external relational database based on search criteria and enriches the message without requiring ESQL or Java code"
      },
      {
        "id": "c",
        "label": "It exports message flow metrics to MongoDB"
      },
      {
        "id": "d",
        "label": "It manages JDBC database connection transactions"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_aut_16",
    "section": "automation",
    "prompt": "What is the purpose of the `FileRead` and `FileOutput` nodes in batch file integration flows?",
    "options": [
      {
        "id": "a",
        "label": "They format log files into CSV format"
      },
      {
        "id": "b",
        "label": "They encrypt hard drives with BitLocker"
      },
      {
        "id": "c",
        "label": "`FileRead` reads records or entire contents from local or NFS/FTP files mid-flow; `FileOutput` writes messages to disk with customizable file records and delimiters"
      },
      {
        "id": "d",
        "label": "They download software updates from IBM Fix Central"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_aut_17",
    "section": "automation",
    "prompt": "What happens when an ESQL module contains an infinite loop or unhandled null pointer dereference during flow execution?",
    "options": [
      {
        "id": "a",
        "label": "The Integration Server process is permanently corrupted on disk"
      },
      {
        "id": "b",
        "label": "ACE throws a `RecoverableException` / `BIP2230E` exception, aborts the current node processing, and routes control to the node's `Failure` or `Catch` terminal"
      },
      {
        "id": "c",
        "label": "The entire operating system restarts"
      },
      {
        "id": "d",
        "label": "The node converts the loop into a background thread"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_aut_18",
    "section": "automation",
    "prompt": "In the ACE Graphical Data Mapper, what is a \"Custom ESQL\" or \"Custom Java\" transform used for?",
    "options": [
      {
        "id": "a",
        "label": "To invoke custom business calculations or external lookup helper methods that cannot be achieved using standard declarative map transforms"
      },
      {
        "id": "b",
        "label": "To generate Eclipse plugins"
      },
      {
        "id": "c",
        "label": "To format XML schemas into HTML documentation"
      },
      {
        "id": "d",
        "label": "To configure server IP addresses"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_aut_19",
    "section": "automation",
    "prompt": "What is the function of the `RESTRequest` node in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "It starts a REST server inside the Linux kernel"
      },
      {
        "id": "b",
        "label": "It converts REST calls into SOAP 1.1 envelopes"
      },
      {
        "id": "c",
        "label": "It validates user credit card numbers"
      },
      {
        "id": "d",
        "label": "It invokes an external REST API using a Swagger 2.0 or OpenAPI 3.0 specification document, providing schema-aware input/output parameter mapping"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_aut_20",
    "section": "automation",
    "prompt": "In ESQL, how do you iterate through an array of items in `InputRoot.XMLNSC.Order.Item[]` and compute the total order amount?",
    "options": [
      {
        "id": "a",
        "label": "Use a JavaScript `forEach` loop"
      },
      {
        "id": "b",
        "label": "Use an SQL `GROUP BY` clause directly on memory pointers"
      },
      {
        "id": "c",
        "label": "Use a `FOR item AS InputRoot.XMLNSC.Order.Item[] DO ... END FOR;` or `WHILE` loop in ESQL"
      },
      {
        "id": "d",
        "label": "Use a `GOTO` statement with line numbers"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_aut_21",
    "section": "automation",
    "prompt": "What is the purpose of the `FlowOrder` node in an ACE message flow?",
    "options": [
      {
        "id": "a",
        "label": "It sorts messages in a queue by alphabetical order"
      },
      {
        "id": "b",
        "label": "It places customer orders into SAP ERP"
      },
      {
        "id": "c",
        "label": "It enforces strictly sequential execution: it propagates the message to output terminal `First` and waits for complete downstream completion before propagating to `Second`"
      },
      {
        "id": "d",
        "label": "It balances network traffic across two NIC adapters"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_aut_22",
    "section": "automation",
    "prompt": "What is the function of the `SOAPExtract` and `SOAPReply` nodes in SOAP web service flows?",
    "options": [
      {
        "id": "a",
        "label": "They convert SOAP into binary Kafka streams"
      },
      {
        "id": "b",
        "label": "They validate PDF signatures on attachments"
      },
      {
        "id": "c",
        "label": "They restart the web server daemon"
      },
      {
        "id": "d",
        "label": "`SOAPExtract` extracts the SOAP body from envelopes and clears transport headers; `SOAPReply` constructs the SOAP response envelope and returns it to the HTTP/JMS client"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_aut_23",
    "section": "automation",
    "prompt": "In ESQL, what is the purpose of the `COALESCE` function?",
    "options": [
      {
        "id": "a",
        "label": "It returns the first non-null expression among its arguments, preventing null pointer errors when reading optional fields"
      },
      {
        "id": "b",
        "label": "It joins two strings together with a comma"
      },
      {
        "id": "c",
        "label": "It formats numbers as currency"
      },
      {
        "id": "d",
        "label": "It converts uppercase text to lowercase"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_aut_24",
    "section": "automation",
    "prompt": "What is the role of the `DatabaseRoute` node in ACE?",
    "options": [
      {
        "id": "a",
        "label": "It configures IP routing tables on the database server"
      },
      {
        "id": "b",
        "label": "It queries a database table and routes incoming messages to specific output terminals based on column values returned from the query"
      },
      {
        "id": "c",
        "label": "It moves database tables between Oracle and PostgreSQL"
      },
      {
        "id": "d",
        "label": "It formats SQL queries as JSON"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_aut_25",
    "section": "automation",
    "prompt": "How does an integration developer configure dynamic timeout values on an `HTTPRequest` node at runtime?",
    "options": [
      {
        "id": "a",
        "label": "By editing `server.conf.yaml` and restarting the server"
      },
      {
        "id": "b",
        "label": "By setting an environment variable in Linux"
      },
      {
        "id": "c",
        "label": "By modifying the Eclipse Toolkit project preferences"
      },
      {
        "id": "d",
        "label": "By populating `LocalEnvironment.Destination.HTTP.RequestTimeout` in ESQL/Java before the HTTPRequest node is invoked"
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "ace_aut_26",
    "section": "automation",
    "prompt": "What is the purpose of the `TimeoutControl` and `TimeoutNotification` nodes in ACE?",
    "options": [
      {
        "id": "a",
        "label": "They terminate slow HTTP connections after 10 seconds"
      },
      {
        "id": "b",
        "label": "They enforce user session logout in web browsers"
      },
      {
        "id": "c",
        "label": "They provide scheduled and timer-based batch processing, generating message flow trigger events at fixed intervals or at specific calendar dates/times"
      },
      {
        "id": "d",
        "label": "They measure CPU clock drift on the server"
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "ace_aut_27",
    "section": "automation",
    "prompt": "In ESQL, how do you delete a subtree or element from the logical message tree?",
    "options": [
      {
        "id": "a",
        "label": "`DELETE OutputRoot.XMLNSC.Order.CreditCardNumber;`"
      },
      {
        "id": "b",
        "label": "`SET OutputRoot.XMLNSC.Order.CreditCardNumber = NULL;`"
      },
      {
        "id": "c",
        "label": "`REMOVE ELEMENT CreditCardNumber;`"
      },
      {
        "id": "d",
        "label": "`DROP TREE CreditCardNumber;`"
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "ace_aut_28",
    "section": "automation",
    "prompt": "What is the role of the `Sequence` and `Resequence` nodes in IBM ACE?",
    "options": [
      {
        "id": "a",
        "label": "They manage and restore the original sequential order of messages in a stream that may have arrived out-of-order over asynchronous multi-threaded channels"
      },
      {
        "id": "b",
        "label": "They generate incremental primary keys in Oracle databases"
      },
      {
        "id": "c",
        "label": "They sort JSON keys alphabetically"
      },
      {
        "id": "d",
        "label": "They format numbers into Roman numerals"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_aut_29",
    "section": "automation",
    "prompt": "What is the function of the `Validate` node in ACE message flows?",
    "options": [
      {
        "id": "a",
        "label": "It validates the message content and structure against XML Schemas, DFDL definitions, or JSON Schemas without altering the message body"
      },
      {
        "id": "b",
        "label": "It validates user credit card CVV codes"
      },
      {
        "id": "c",
        "label": "It verifies software license expiration dates"
      },
      {
        "id": "d",
        "label": "It checks if network cables are connected"
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "ace_aut_30",
    "section": "automation",
    "prompt": "In Java Compute Nodes, how should developers handle object lifecycle and memory cleanup for newly created `MbMessage` objects?",
    "options": [
      {
        "id": "a",
        "label": "Java handles all MbMessage memory automatically with zero considerations"
      },
      {
        "id": "b",
        "label": "Always call `outMessage.clearMessage()` or propagate properly, ensuring unpropagated intermediate messages are cleared to prevent JVM heap leaks"
      },
      {
        "id": "c",
        "label": "Restart the Integration Server after every 100 messages"
      },
      {
        "id": "d",
        "label": "Never instantiate more than 1 MbMessage in a JVM"
      }
    ],
    "correctOptionId": "b"
  }
];

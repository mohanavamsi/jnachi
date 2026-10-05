import { CertQuestion } from '../types';

export const CORE_JAVA_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "java_auto_01",
    section: "automation",
    prompt: "In the Java Streams API (Java 8+), what is the difference between an 'Intermediate Operation' and a 'Terminal Operation'?",
    options: [
      { id: "a", label: "Intermediate operations (e.g. `filter`, `map`, `sorted`) are lazy and return a new `Stream`; Terminal operations (e.g. `collect`, `forEach`, `reduce`, `count`) trigger pipeline execution and produce a final result or side-effect." },
      { id: "b", label: "Intermediate operations delete elements; Terminal operations sort elements." },
      { id: "c", label: "Terminal operations run exclusively on GPU cores." },
      { id: "d", label: "Intermediate operations can only be executed inside loops." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_auto_02",
    section: "automation",
    prompt: "How does the Try-with-Resources statement (`try (Resource r = ...)` introduced in Java 7) ensure proper resource management?",
    options: [
      { id: "a", label: "Automatically invokes `.close()` on any resource implementing `AutoCloseable` or `Closeable` when the try block exits, even if exceptions are thrown, preventing resource/file descriptor leaks." },
      { id: "b", label: "Allocates unlimited heap memory for the resource." },
      { id: "c", label: "Encrypts the resource using AES-256 before closing." },
      { id: "d", label: "Deletes temporary files from the operating system disk." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_auto_03",
    section: "automation",
    prompt: "What is the primary benefit of using `Optional<T>` as a return type for methods that may not produce a value?",
    options: [
      { id: "a", label: "Explicitly signals the possibility of absence to calling code, forcing safe handling via methods like `.orElse()`, `.map()`, or `.ifPresent()`, and preventing unexpected `NullPointerException` crashes." },
      { id: "b", label: "Accelerates mathematical calculations inside the CPU." },
      { id: "c", label: "Allows methods to return multiple data types simultaneously." },
      { id: "d", label: "Bypasses Java access modifiers (`private`/`public`)." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_auto_04",
    section: "automation",
    prompt: "In Java Concurrency, what is the advantage of using `ExecutorService` (via `Executors.newFixedThreadPool(...)`) over manually instantiating `new Thread(...)` objects?",
    options: [
      { id: "a", label: "Manages a pool of reusable worker threads, decoupling task submission (`Runnable`/`Callable`) from execution, preventing thread creation overhead and system exhaustion under high concurrency." },
      { id: "b", label: "Converts synchronous code into compiled C++ libraries." },
      { id: "c", label: "Disables the Java Garbage Collector during calculations." },
      { id: "d", label: "Encrypts thread communication across network sockets." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_auto_05",
    section: "automation",
    prompt: "What is the difference between `CompletableFuture<T>` and a standard `Future<T>` in Java 8+ asynchronous programming?",
    options: [
      { id: "a", label: "`CompletableFuture` supports non-blocking functional composition (`thenApply`, `thenCompose`, `exceptionally`), chaining multiple async stages without blocking calling threads on `.get()`." },
      { id: "b", label: "`Future` only works on numbers; `CompletableFuture` only works on strings." },
      { id: "c", label: "`CompletableFuture` requires a physical hardware accelerator." },
      { id: "d", label: "`Future` executes code in the future on a scheduled calendar date." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_auto_06",
    section: "automation",
    prompt: "Which Java collection implementation is best suited for scenarios requiring constant-time O(1) key-value lookups with NO thread-safety overhead?",
    options: [
      { id: "a", label: "`java.util.HashMap`" },
      { id: "b", label: "`java.util.TreeMap`" },
      { id: "c", label: "`java.util.Hashtable`" },
      { id: "d", label: "`java.util.Vector`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_auto_07",
    section: "automation",
    prompt: "What is the role of the `var` keyword (Local Variable Type Inference) introduced in Java 10?",
    options: [
      { id: "a", label: "Allows the Java compiler to infer the static type of local variables with initializers at compile-time, reducing boilerplate without sacrificing strong, static type safety." },
      { id: "b", label: "Turns Java into a dynamically-typed interpreted language like JavaScript." },
      { id: "c", label: "Allows variables to change their data type at runtime." },
      { id: "d", label: "Creates global environment variables in the operating system." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_auto_08",
    section: "automation",
    prompt: "What is the functional purpose of Java Generics (e.g. `List<String>`) introduced in Java 5?",
    options: [
      { id: "a", label: "Providing strong compile-time type checking, eliminating the need for explicit type casts, and preventing runtime `ClassCastException` errors." },
      { id: "b", label: "Increasing the execution speed of bytecode by 10x." },
      { id: "c", label: "Allowing private methods to be accessed from any package." },
      { id: "d", label: "Compiling Java code into JavaScript files for the browser." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_auto_09",
    section: "automation",
    prompt: "In modern Java build automation (Maven / Gradle), what is the role of the `pom.xml` or `build.gradle` file?",
    options: [
      { id: "a", label: "Declaring project metadata, external dependencies, repository coordinates, build lifecycle plugins, and packaging artifact specifications (JAR/WAR)." },
      { id: "b", label: "Storing database root passwords in plaintext." },
      { id: "c", label: "Compiling HTML templates for web pages." },
      { id: "d", label: "Managing physical network hardware configuration." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_auto_10",
    section: "automation",
    prompt: "What is the difference between `Comparable<T>` and `Comparator<T>` interfaces in Java object sorting?",
    options: [
      { id: "a", label: "`Comparable` defines the single 'natural ordering' of an object via `.compareTo()`; `Comparator` defines external, multiple custom sorting strategies via `.compare()` (e.g. sorting by age, name, salary)." },
      { id: "b", label: "`Comparable` is for lists; `Comparator` is for sets." },
      { id: "c", label: "`Comparator` can only compare numbers." },
      { id: "d", label: "`Comparable` deletes un-sortable elements from collections." }
    ],
    correctOptionId: "a"
  }
];

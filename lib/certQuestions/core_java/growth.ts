import { CertQuestion } from '../types';

export const CORE_JAVA_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: "java_gro_01",
    section: "growth",
    prompt: "In modern JVM Garbage Collection architectures (G1GC, ZGC, Shenandoah), how do generational collectors optimize heap throughput based on the 'Weak Generational Hypothesis'?",
    options: [
      { id: "a", label: "Most objects die shortly after allocation; dividing heap into Young Generation (Eden/Survivor) and Old (Tenured) Generation allows frequent, ultra-fast Minor GCs to collect short-lived objects with minimal pause times." },
      { id: "b", label: "All objects are retained in RAM permanently until application termination." },
      { id: "c", label: "Allocates memory directly on secondary disk drives." },
      { id: "d", label: "Replaces Garbage Collection with manual C++ `free()` pointers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_gro_02",
    section: "growth",
    prompt: "What breakthrough scalability capability is introduced by 'Virtual Threads' (Project Loom, standard in Java 21 LTS)?",
    options: [
      { id: "a", label: "Lightweight user-mode threads managed directly by the JVM (millions of concurrent virtual threads can run simultaneously without 1:1 OS kernel thread limits), enabling high-throughput synchronous/blocking I/O architectures." },
      { id: "b", label: "Running Java applications inside virtual reality headsets." },
      { id: "c", label: "Compiling Java code into optical fiber laser signals." },
      { id: "d", label: "Eliminating the need for CPU processors." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_gro_03",
    section: "growth",
    prompt: "What is the purpose of the Just-In-Time (JIT) Compiler (Tiered Compilation: C1 / C2 compilers) inside the HotSpot JVM?",
    options: [
      { id: "a", label: "Profiling running bytecode at runtime to identify 'hot spots' (frequently executed methods/loops) and dynamically compiling them into highly optimized native machine assembly code." },
      { id: "b", label: "Uploading Java code to a remote cloud compiler." },
      { id: "c", label: "Formatting Java code with standard indentation rules." },
      { id: "d", label: "Translating Java into HTML for browser rendering." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_gro_04",
    section: "growth",
    prompt: "What is 'Escape Analysis' performed by the JVM JIT compiler, and how does it optimize object allocation?",
    options: [
      { id: "a", label: "Determines whether an object's reference escapes the allocating method or thread; if an object never escapes, the JVM can eliminate synchronization locks and allocate the object on the Stack instead of the Heap (Scalar Replacement)." },
      { id: "b", label: "Detects hackers trying to escape a sandbox container." },
      { id: "c", label: "Converts strings with special escape characters (`\\n`, `\\t`) into binary." },
      { id: "d", label: "Prevents memory from leaking outside server case fans." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_gro_05",
    section: "growth",
    prompt: "What JVM startup tuning flags configure initial and maximum heap allocation limits (e.g. for a container allocated with 8GB RAM)?",
    options: [
      { id: "a", label: "`-Xms4g -Xmx4g` (or `-XX:InitialRAMPercentage` and `-XX:MaxRAMPercentage`)" },
      { id: "b", label: "`-heap-min 4 -heap-max 4`" },
      { id: "c", label: "`-set-ram 4000MB`" },
      { id: "d", label: "`-allocate-memory --force`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_gro_06",
    section: "growth",
    prompt: "What is the Z Garbage Collector (ZGC) in modern Java (Java 17/21), and what is its primary design goal?",
    options: [
      { id: "a", label: "A scalable, ultra-low-latency garbage collector with Stop-the-World pause times guaranteed under 1 millisecond, capable of handling heaps ranging from megabytes to multiple terabytes." },
      { id: "b", label: "A garbage collector that deletes user files from disk." },
      { id: "c", label: "A tool that cleans old git commits from repository history." },
      { id: "d", label: "An open-source text editor for Java developers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_gro_07",
    section: "growth",
    prompt: "What is 'False Sharing' in high-performance Java concurrent architectures, and how does `@jdk.internal.vm.annotation.Contended` address it?",
    options: [
      { id: "a", label: "Occurs when independent variables accessed by different threads reside on the same 64-byte CPU cache line, causing cache-coherency invalidation ping-pong; `@Contended` adds padding to isolate variables onto distinct cache lines." },
      { id: "b", label: "A security vulnerability involving fake user logins." },
      { id: "c", label: "Two Java processes sharing the same database password." },
      { id: "d", label: "A compiler error caused by duplicate class names." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_gro_08",
    section: "growth",
    prompt: "What diagnostic tool included in the JDK provides continuous low-overhead profiling, execution recording, and event telemetry directly from the JVM runtime?",
    options: [
      { id: "a", label: "JDK Flight Recorder (JFR) and JDK Mission Control (JMC)" },
      { id: "b", label: "`java.exe --speed-test`" },
      { id: "c", label: "`notepad.exe /profile`" },
      { id: "d", label: "`ping localhost -t`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_gro_09",
    section: "growth",
    prompt: "What is the primary benefit of ahead-of-time (AOT) compilation using GraalVM Native Image for Java microservices?",
    options: [
      { id: "a", label: "Compiles Java applications directly into standalone platform-native executable binaries with instantaneous sub-millisecond startup times and significantly lower base memory (RSS) footprints, ideal for serverless and Kubernetes pods." },
      { id: "b", label: "Converts Java code into Python scripts." },
      { id: "c", label: "Allows Java programs to run without any operating system." },
      { id: "d", label: "Disables all object-oriented programming features." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_gro_10",
    section: "growth",
    prompt: "In enterprise software architecture, what design principle is represented by the 'Dependency Inversion Principle' (the D in SOLID) implemented via Inversion of Control (IoC) and Dependency Injection (DI)?",
    options: [
      { id: "a", label: "High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces), decoupling component creation from execution and enabling modularity and unit testability." },
      { id: "b", label: "Subclasses must delete superclass fields." },
      { id: "c", label: "All Java classes should be declared in a single 10,000-line file." },
      { id: "d", label: "Database connections must be hardcoded inside UI controllers." }
    ],
    correctOptionId: "a"
  }
];

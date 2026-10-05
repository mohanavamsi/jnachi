import { CertQuestion } from '../types';

export const CORE_JAVA_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: "java_priv_01",
    section: "privacy",
    prompt: "What is the Java Memory Model (JMM) guarantee provided by the `volatile` keyword on a shared variable?",
    options: [
      { id: "a", label: "Guarantees 'visibility' and prevents instruction reordering: any write to a volatile variable is immediately written to main memory and subsequent reads by any thread fetch from main memory (not CPU registers/L1 cache)." },
      { id: "b", label: "Guarantees full atomic compound operations like `count++` without locks." },
      { id: "c", label: "Encrypts the variable in RAM using AES-128." },
      { id: "d", label: "Prevents the variable from ever being garbage collected." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_priv_02",
    section: "privacy",
    prompt: "What is the difference between a `synchronized` block/method and `java.util.concurrent.locks.ReentrantLock` in Java concurrency?",
    options: [
      { id: "a", label: "`synchronized` relies on JVM implicit intrinsic monitor locks; `ReentrantLock` provides explicit, flexible locking with capabilities like timed lock acquisition (`tryLock()`), interruptible locks, and fairness policies." },
      { id: "b", label: "`synchronized` can only be used on static variables." },
      { id: "c", label: "`ReentrantLock` causes immediate deadlocks if called twice." },
      { id: "d", label: "`synchronized` allocates memory on the hard drive." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_priv_03",
    section: "privacy",
    prompt: "Why should `java.security.SecureRandom` be used instead of `java.util.Random` for generating cryptographic keys, session tokens, and passwords?",
    options: [
      { id: "a", label: "`SecureRandom` is cryptographically strong, using non-deterministic operating system entropy sources; `Random` uses a predictable linear congruential formula vulnerable to sequence prediction." },
      { id: "b", label: "`Random` only generates numbers between 0 and 9." },
      { id: "c", label: "`SecureRandom` runs 100x faster than `Random`." },
      { id: "d", label: "`Random` is deprecated in Java 17." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_priv_04",
    section: "privacy",
    prompt: "Why is storing plaintext passwords in `char[]` arrays generally safer than storing them in `String` objects in Java?",
    options: [
      { id: "a", label: "`String` is immutable and lingers in heap memory / String Pool until garbage collected; `char[]` arrays can be explicitly zeroed out (`Arrays.fill(pwd, '\\0')`) immediately after use, reducing memory dump exposure." },
      { id: "b", label: "`char[]` arrays are automatically encrypted by the JVM." },
      { id: "c", label: "`String` objects cannot store special characters like `@` or `#`." },
      { id: "d", label: "`char[]` arrays are stored exclusively in CPU L1 cache." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_priv_05",
    section: "privacy",
    prompt: "What major security vulnerability exists with legacy Java Object Serialization (`ObjectInputStream.readObject()`)?",
    options: [
      { id: "a", label: "Insecure deserialization of untrusted byte streams can trigger arbitrary remote code execution (RCE) via gadget chains without invoking constructors (mitigated via serialization filters or JSON/Protobuf formats)." },
      { id: "b", label: "It causes physical overheating of CPU cores." },
      { id: "c", label: "Serialized files cannot be read across different timezones." },
      { id: "d", label: "It reveals the server IP address to all clients." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_priv_06",
    section: "privacy",
    prompt: "What is a 'Race Condition' in multi-threaded Java applications, and how is it prevented?",
    options: [
      { id: "a", label: "Multiple threads concurrently access and modify shared mutable state without proper synchronization, causing unpredictable results; prevented via synchronization, explicit locks, or Atomic classes (`AtomicInteger`)." },
      { id: "b", label: "Two threads running at different CPU clock frequencies." },
      { id: "c", label: "A competition between the compiler and the JVM bytecode interpreter." },
      { id: "d", label: "A network latency delay during database queries." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_priv_07",
    section: "privacy",
    prompt: "How does `ConcurrentHashMap` achieve high throughput in multi-threaded environments compared to `Collections.synchronizedMap` or `Hashtable`?",
    options: [
      { id: "a", label: "Uses fine-grained lock-striping (bucket-level synchronization) and lock-free atomic CAS (Compare-And-Swap) operations for reads, allowing concurrent reads and writes without locking the entire map." },
      { id: "b", label: "Stores all data in external Redis instances." },
      { id: "c", label: "Converts all entries to static final variables." },
      { id: "d", label: "Restricts access to a single master thread." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_priv_08",
    section: "privacy",
    prompt: "What is the purpose of Defensive Copying when designing immutable classes with mutable field references (such as `java.util.Date` or `List`)?",
    options: [
      { id: "a", label: "Creating copies of mutable objects in constructors and getter methods to prevent external caller code from modifying internal private state after object construction." },
      { id: "b", label: "Backing up classes to secondary disk storage every 10 seconds." },
      { id: "c", label: "Encrypting class bytecode before execution." },
      { id: "d", label: "Duplicating Java thread stacks during heavy calculations." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_priv_09",
    section: "privacy",
    prompt: "What is the role of the Java Security Manager and why has it been deprecated for removal in modern Java (JEP 411 in Java 17+)?",
    options: [
      { id: "a", label: "Historically provided sandboxing for applets; deprecated because modern security relies on OS-level isolation (containers, virtualization, least privilege) which is vastly more robust than in-process Java security." },
      { id: "b", label: "It was replaced by a hardware biometric scanner." },
      { id: "c", label: "Because modern Java no longer connects to external networks." },
      { id: "d", label: "It was only compatible with 32-bit Windows XP." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_priv_10",
    section: "privacy",
    prompt: "What is a 'Memory Leak' in Java, given that Java utilizes an automatic Garbage Collector?",
    options: [
      { id: "a", label: "Unused objects remain referenced by active objects (e.g. uncleared static collections, forgotten event listeners, unclosed thread locals), preventing the Garbage Collector from freeing their memory and leading to `OutOfMemoryError`." },
      { id: "b", label: "RAM physically evaporating due to high thermal temperatures." },
      { id: "c", label: "Java bytecode being leaked onto public GitHub repositories." },
      { id: "d", label: "A compiler bug that deletes local variables." }
    ],
    correctOptionId: "a"
  }
];

import { CertQuestion } from '../types';

export const CORE_JAVA_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "java_lit_01",
    section: "literacy",
    prompt: "In Java memory management, what is the fundamental difference between the Stack memory and the Heap memory?",
    options: [
      { id: "a", label: "Stack stores primitive variables and method call execution frames (LIFO order, thread-isolated, fast allocation); Heap stores all instantiated Objects and is shared across all threads, managed by Garbage Collection." },
      { id: "b", label: "Stack memory is stored on secondary SSD disks; Heap memory is inside CPU cache registers." },
      { id: "c", label: "Heap memory only stores numbers; Stack memory stores strings." },
      { id: "d", label: "Stack is managed by Garbage Collection; Heap is freed manually via C pointers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_lit_02",
    section: "literacy",
    prompt: "What is the key difference between an `interface` and an `abstract class` in modern Java (Java 8+ / 17+)?",
    options: [
      { id: "a", label: "A class can implement multiple interfaces (supporting multiple inheritance of type) and use `default`/`static`/`private` methods; an abstract class can maintain mutable instance state/constructors but a class can only extend one abstract class." },
      { id: "b", label: "Interfaces cannot declare any methods; abstract classes cannot have constructors." },
      { id: "c", label: "Abstract classes are only supported in Java 1.4; interfaces are deprecated in Java 17." },
      { id: "d", label: "Interfaces can only be instantiated using the `new` keyword directly." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_lit_03",
    section: "literacy",
    prompt: "What is the distinction between the `==` operator and the `.equals()` method when comparing two `String` objects in Java?",
    options: [
      { id: "a", label: "`==` tests reference equality (whether both references point to the exact same memory address on the Heap); `.equals()` tests value equality (whether the sequence of characters is identical)." },
      { id: "b", label: "`==` is case-insensitive; `.equals()` is case-sensitive." },
      { id: "c", label: "`.equals()` only works on integer numbers." },
      { id: "d", label: "`==` converts strings into byte arrays before comparing." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_lit_04",
    section: "literacy",
    prompt: "Why is the `String` class immutable in Java, and what role does the String Constant Pool play?",
    options: [
      { id: "a", label: "Immutability guarantees thread-safety, security for sensitive data (classloading, DB credentials), and enables caching in the String Pool to save memory by reusing identical string literals." },
      { id: "b", label: "Because the JVM cannot reallocate memory once an object is created." },
      { id: "c", label: "To prevent strings from being converted to uppercase." },
      { id: "d", label: "String immutability is required by the Windows operating system kernel." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_lit_05",
    section: "literacy",
    prompt: "In Java OOP, what is the difference between Method Overloading (Compile-time Polymorphism) and Method Overriding (Runtime Polymorphism)?",
    options: [
      { id: "a", label: "Overloading occurs when methods in the same class share the same name with different parameter signatures (resolved at compile time); Overriding occurs when a subclass redefines a superclass method with the exact same signature and `@Override` (resolved at runtime via virtual method dispatch)." },
      { id: "b", label: "Overloading deletes the original method; Overriding duplicates it in another package." },
      { id: "c", label: "Overriding only applies to private static methods." },
      { id: "d", label: "Overloading requires the `final` keyword on method declarations." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_lit_06",
    section: "literacy",
    prompt: "What contract must be maintained between the `equals()` and `hashCode()` methods in Java when storing objects in hash-based collections (`HashMap`, `HashSet`)?",
    options: [
      { id: "a", label: "If two objects are equal according to `equals()`, they MUST produce the exact same integer `hashCode()`; otherwise, lookups and bucket retrieval will fail unpredictably." },
      { id: "b", label: "If two objects have the same `hashCode()`, they must always return `true` for `equals()`." },
      { id: "c", label: "`hashCode()` must always return a negative number." },
      { id: "d", label: "`equals()` must never be overridden in classes that implement `Serializable`." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_lit_07",
    section: "literacy",
    prompt: "What is the purpose of `record` classes introduced as a standard feature in Java 16+?",
    options: [
      { id: "a", label: "Concise, immutable data-carrier classes that automatically generate canonical constructors, private final fields, getters (accessors), `equals()`, `hashCode()`, and `toString()` methods." },
      { id: "b", label: "A class that records microphone audio directly to disk." },
      { id: "c", label: "A database table mapped directly to the Linux kernel." },
      { id: "d", label: "A utility for compiling Java bytecode into C++ header files." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_lit_08",
    section: "literacy",
    prompt: "What is the role of the Java Virtual Machine (JVM) ClassLoader subsystem?",
    options: [
      { id: "a", label: "Loading compiled `.class` bytecode files into memory, linking (verifying, preparing, resolving), and initializing class variables in the Metaspace." },
      { id: "b", label: "Downloading third-party dependencies from GitHub during application execution." },
      { id: "c", label: "Compressing Java source files into ZIP format." },
      { id: "d", label: "Managing physical ethernet network connections." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_lit_09",
    section: "literacy",
    prompt: "What does the `final` keyword signify when applied to a variable, a method, and a class in Java?",
    options: [
      { id: "a", label: "Final variable: value/reference cannot be reassigned; Final method: cannot be overridden by subclasses; Final class: cannot be extended (inherited)." },
      { id: "b", label: "Final variable: deleted on method return; Final method: runs on background thread; Final class: cannot be compiled." },
      { id: "c", label: "Final forces the JVM to convert code to native machine assembly." },
      { id: "d", label: "Final makes all members publicly accessible." }
    ],
    correctOptionId: "a"
  },
  {
    id: "java_lit_10",
    section: "literacy",
    prompt: "What is the distinction between Checked Exceptions (inheriting from `Exception`) and Unchecked Exceptions (inheriting from `RuntimeException`) in Java?",
    options: [
      { id: "a", label: "Checked exceptions are verified at compile-time and must be either caught (`try-catch`) or declared (`throws`); Unchecked exceptions occur at runtime (e.g. `NullPointerException`, `IllegalArgumentException`) and do not require mandatory declaration." },
      { id: "b", label: "Unchecked exceptions crash the entire operating system." },
      { id: "c", label: "Checked exceptions only happen inside unit tests." },
      { id: "d", label: "Checked exceptions are automatically resolved by the Garbage Collector." }
    ],
    correctOptionId: "a"
  }
];

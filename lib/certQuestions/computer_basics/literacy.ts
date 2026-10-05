import { CertQuestion } from '../types';

export const COMPUTER_BASICS_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "comp_lit_01",
    section: "literacy",
    prompt: "Which component of the Central Processing Unit (CPU) is directly responsible for performing arithmetic operations (addition, subtraction) and logical comparisons (AND, OR, NOT)?",
    options: [
      { id: "a", label: "Control Unit (CU)" },
      { id: "b", label: "Arithmetic Logic Unit (ALU)" },
      { id: "c", label: "Program Counter (PC)" },
      { id: "d", label: "Memory Management Unit (MMU)" }
    ],
    correctOptionId: "b"
  },
  {
    id: "comp_lit_02",
    section: "literacy",
    prompt: "In modern computer memory hierarchies, which storage type provides the fastest access latency to the CPU core?",
    options: [
      { id: "a", label: "NVMe Solid State Drive (SSD)" },
      { id: "b", label: "DDR5 Synchronous Dynamic RAM (SDRAM)" },
      { id: "c", label: "Level 1 (L1) CPU Cache" },
      { id: "d", label: "Level 3 (L3) Shared Cache" }
    ],
    correctOptionId: "c"
  },
  {
    id: "comp_lit_03",
    section: "literacy",
    prompt: "What is the primary architectural difference between Random Access Memory (RAM) and Secondary Storage (SSD/HDD)?",
    options: [
      { id: "a", label: "RAM is volatile memory requiring continuous electrical power to retain state; SSD/HDD is non-volatile persistent storage." },
      { id: "b", label: "RAM stores data permanently on magnetic platters; SSDs lose data when powered off." },
      { id: "c", label: "RAM is only accessible via network sockets; SSDs are integrated directly onto the CPU die." },
      { id: "d", label: "RAM communicates exclusively in hexadecimal; secondary storage uses decimal numbers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_lit_04",
    section: "literacy",
    prompt: "How many bits are in a single byte, and what is the maximum unsigned decimal integer value a standard 8-bit byte can represent?",
    options: [
      { id: "a", label: "4 bits; maximum value is 15" },
      { id: "b", label: "8 bits; maximum value is 255" },
      { id: "c", label: "16 bits; maximum value is 65,535" },
      { id: "d", label: "32 bits; maximum value is 4,294,967,295" }
    ],
    correctOptionId: "b"
  },
  {
    id: "comp_lit_05",
    section: "literacy",
    prompt: "What is the hexadecimal representation of the 8-bit binary value `11110000`?",
    options: [
      { id: "a", label: "0x0F" },
      { id: "b", label: "0xFF" },
      { id: "c", label: "0xF0" },
      { id: "d", label: "0xA0" }
    ],
    correctOptionId: "c"
  },
  {
    id: "comp_lit_06",
    section: "literacy",
    prompt: "In operating system architecture, what is the role of the Kernel?",
    options: [
      { id: "a", label: "A browser extension that renders web graphics and executes JavaScript." },
      { id: "b", label: "The core program with complete control over the system, managing hardware resources, memory, CPU scheduling, and system calls." },
      { id: "c", label: "The graphical desktop environment that displays windows and icons." },
      { id: "d", label: "A database table that logs user login timestamps." }
    ],
    correctOptionId: "b"
  },
  {
    id: "comp_lit_07",
    section: "literacy",
    prompt: "Which layer of the standard OSI 7-Layer Reference Model is responsible for end-to-end reliable transmission and port-based addressing (TCP and UDP)?",
    options: [
      { id: "a", label: "Layer 2: Data Link Layer" },
      { id: "b", label: "Layer 3: Network Layer (IP)" },
      { id: "c", label: "Layer 4: Transport Layer" },
      { id: "d", label: "Layer 7: Application Layer" }
    ],
    correctOptionId: "c"
  },
  {
    id: "comp_lit_08",
    section: "literacy",
    prompt: "What is the primary function of the Domain Name System (DNS) in computer networking?",
    options: [
      { id: "a", label: "Encrypting hard drive partitions during operating system boot." },
      { id: "b", label: "Translating human-readable domain names (e.g. `example.com`) into numerical IP addresses (e.g. `93.184.216.34`)." },
      { id: "c", label: "Managing physical RAM allocations for multi-threaded processes." },
      { id: "d", label: "Executing SQL queries against distributed databases." }
    ],
    correctOptionId: "b"
  },
  {
    id: "comp_lit_09",
    section: "literacy",
    prompt: "What is the fundamental difference between an IPv4 address and an IPv6 address?",
    options: [
      { id: "a", label: "IPv4 is 32-bit (approx. 4.3 billion unique addresses); IPv6 is 128-bit (vastly expanded address space of 3.4 x 10^38 addresses)." },
      { id: "b", label: "IPv4 is wireless; IPv6 only works over physical copper ethernet cables." },
      { id: "c", label: "IPv4 uses letters; IPv6 only uses numbers." },
      { id: "d", label: "IPv4 requires a GPU; IPv6 runs entirely on secondary storage." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_lit_10",
    section: "literacy",
    prompt: "What happens during the classic CPU Instruction Cycle (Von Neumann Execution Cycle)?",
    options: [
      { id: "a", label: "Fetch instruction from memory -> Decode instruction into control signals -> Execute operation -> Store result back to register or memory." },
      { id: "b", label: "Compress disk files -> Upload to cloud -> Clear browser cache -> Restart motherboard." },
      { id: "c", label: "Compile C++ code -> Format hard drive -> Mount NFS partition -> Emit audio beep." },
      { id: "d", label: "Initialize graphics driver -> Send HTTP GET request -> Await DNS response -> Shut down." }
    ],
    correctOptionId: "a"
  }
];

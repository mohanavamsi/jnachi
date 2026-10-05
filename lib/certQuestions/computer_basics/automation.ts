import { CertQuestion } from '../types';

export const COMPUTER_BASICS_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "comp_auto_01",
    section: "automation",
    prompt: "When troubleshooting an unreachable server over a local area network, which command-line utility uses ICMP Echo Request packets to verify basic network connectivity and measure round-trip latency?",
    options: [
      { id: "a", label: "`ping`" },
      { id: "b", label: "`chmod`" },
      { id: "c", label: "`grep`" },
      { id: "d", label: "`mkdir`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_auto_02",
    section: "automation",
    prompt: "Which command-line tool traces the exact sequence of network routers (hops) that data packets traverse to reach a remote destination host?",
    options: [
      { id: "a", label: "`traceroute` (Linux/macOS) or `tracert` (Windows)" },
      { id: "b", label: "`netstat --format`" },
      { id: "c", label: "`ipconfig /flushall`" },
      { id: "d", label: "`cat /dev/null`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_auto_03",
    section: "automation",
    prompt: "In operating system process management, what is the key difference between a Process and a Thread?",
    options: [
      { id: "a", label: "A process has its own isolated virtual address space in memory; threads within the same process share that memory address space, heap, and open file descriptors." },
      { id: "b", label: "A thread is a physical CPU chip; a process is software." },
      { id: "c", label: "Processes can only run in web browsers; threads run on hard drives." },
      { id: "d", label: "Threads cannot execute code simultaneously on multi-core processors." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_auto_04",
    section: "automation",
    prompt: "What is Virtual Memory, and how does the operating system handle a 'Page Fault'?",
    options: [
      { id: "a", label: "Virtual memory maps process memory to secondary disk storage via pages; when referenced data is not in physical RAM, a page fault triggers the OS kernel to swap the required page from disk into RAM." },
      { id: "b", label: "Virtual memory is a cloud backup that causes immediate system crashes when internet is lost." },
      { id: "c", label: "A page fault indicates a corrupted BIOS chip requiring motherboard replacement." },
      { id: "d", label: "Virtual memory bypasses CPU registers to execute instructions directly from flash drives." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_auto_05",
    section: "automation",
    prompt: "Which protocol in the TCP/IP stack automatically assigns dynamic IP addresses, subnet masks, default gateways, and DNS servers to client devices on a local network?",
    options: [
      { id: "a", label: "DHCP (Dynamic Host Configuration Protocol)" },
      { id: "b", label: "FTP (File Transfer Protocol)" },
      { id: "c", label: "SMTP (Simple Mail Transfer Protocol)" },
      { id: "d", label: "SNMP (Simple Network Management Protocol)" }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_auto_06",
    section: "automation",
    prompt: "What is the function of the Subnet Mask (e.g. `255.255.255.0` or `/24`) in IPv4 networking?",
    options: [
      { id: "a", label: "It distinguishes which portion of the IP address identifies the Network ID and which portion identifies the specific Host device." },
      { id: "b", label: "It encrypts outgoing web traffic with 256-bit AES keys." },
      { id: "c", label: "It restricts maximum upload speed on optical fiber cables." },
      { id: "d", label: "It assigns unique MAC addresses to network interface cards." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_auto_07",
    section: "automation",
    prompt: "In computer storage systems, what is the primary operational advantage of Solid-State Drives (NVMe/SATA SSDs) over legacy Mechanical Hard Disk Drives (HDDs)?",
    options: [
      { id: "a", label: "SSDs use semiconductor flash memory with no moving physical parts, providing near-instantaneous random read/write seek times compared to motorized spinning platters." },
      { id: "b", label: "SSDs do not require file systems or partition tables." },
      { id: "c", label: "SSDs store unlimited data without physical capacity constraints." },
      { id: "d", label: "SSDs only function when connected to wireless 5G routers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_auto_08",
    section: "automation",
    prompt: "Which command on a Windows system displays active network configuration details including IP address, subnet mask, default gateway, and DHCP lease information?",
    options: [
      { id: "a", label: "`ipconfig /all`" },
      { id: "b", label: "`netsh delete ip`" },
      { id: "c", label: "`tasklist /network`" },
      { id: "d", label: "`dir /ip`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_auto_09",
    section: "automation",
    prompt: "What is the difference between TCP (Transmission Control Protocol) and UDP (User Datagram Protocol)?",
    options: [
      { id: "a", label: "TCP is connection-oriented with 3-way handshakes, sequencing, and guaranteed delivery/retransmission; UDP is connectionless and prioritized for low-latency streaming/gaming where dropped packets are acceptable." },
      { id: "b", label: "TCP is used for audio files only; UDP is used for text files." },
      { id: "c", label: "UDP requires hardware encryption; TCP runs unencrypted." },
      { id: "d", label: "TCP can only transmit 100 bytes per minute." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_auto_10",
    section: "automation",
    prompt: "In file system architecture, what is the role of the File Allocation Table / Inode table?",
    options: [
      { id: "a", label: "Metadata structures that record the physical block locations, permissions, timestamps, and size of files on disk storage." },
      { id: "b", label: "A browser history cache storing previously visited websites." },
      { id: "c", label: "A CPU register that calculates arithmetic square roots." },
      { id: "d", label: "A firewall rule that blocks external port 80 traffic." }
    ],
    correctOptionId: "a"
  }
];

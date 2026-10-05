import { CertQuestion } from '../types';

export const COMPUTER_BASICS_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: "comp_gro_01",
    section: "growth",
    prompt: "In enterprise computer systems, what is the architectural difference between 'Vertical Scaling' (Scaling Up) and 'Horizontal Scaling' (Scaling Out)?",
    options: [
      { id: "a", label: "Vertical scaling adds more CPU, RAM, or storage to a single existing physical/virtual server; Horizontal scaling adds more independent server nodes behind a load balancer." },
      { id: "b", label: "Vertical scaling increases monitor resolution; Horizontal scaling widens keyboard dimensions." },
      { id: "c", label: "Vertical scaling is used exclusively for mobile devices; Horizontal scaling is for mainframe computers." },
      { id: "d", label: "Vertical scaling removes disk drives; Horizontal scaling disables network firewalls." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_gro_02",
    section: "growth",
    prompt: "What is the primary role of a Hypervisor (e.g. VMware ESXi, KVM, Hyper-V) in cloud computing and virtualization?",
    options: [
      { id: "a", label: "A software layer or firmware that abstracts physical hardware to run multiple isolated Virtual Machines (VMs) with their own guest operating systems on a single physical host." },
      { id: "b", label: "A hardware cable connecting motherboards to power supplies." },
      { id: "c", label: "A graphic rendering engine for web browsers." },
      { id: "d", label: "A word processing application for technical manuals." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_gro_03",
    section: "growth",
    prompt: "How does OS-level Containerization (e.g. Docker) differ architecturally from traditional Virtual Machines (VMs)?",
    options: [
      { id: "a", label: "Containers share the host operating system kernel and isolate processes via namespaces/cgroups, making them much lighter and faster to start than VMs which emulate full hardware and run guest OS kernels." },
      { id: "b", label: "Containers require separate physical motherboards for every container instance." },
      { id: "c", label: "Virtual machines cannot store files on hard drives." },
      { id: "d", label: "Containers only run on analog audio synthesizers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_gro_04",
    section: "growth",
    prompt: "What is RAID (Redundant Array of Independent Disks), and what distinguishes RAID 1 from RAID 0?",
    options: [
      { id: "a", label: "RAID combines physical disks into logical units; RAID 0 strips data for speed (no fault tolerance); RAID 1 mirrors data across two disks (full fault tolerance if one disk fails)." },
      { id: "b", label: "RAID 0 is for network cables; RAID 1 is for cooling fans." },
      { id: "c", label: "RAID 1 deletes all data every 24 hours automatically." },
      { id: "d", label: "RAID 0 requires optical laser discs." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_gro_05",
    section: "growth",
    prompt: "In distributed computing, what does High Availability (HA) with N+1 or 2N redundancy ensure?",
    options: [
      { id: "a", label: "Systems maintain continuous operation without downtime by having standby redundant components (power supplies, servers, network paths) that immediately take over upon failure." },
      { id: "b", label: "Computers use twice as much power to calculate faster mathematical formulas." },
      { id: "c", label: "All company employees receive duplicate laptop computers." },
      { id: "d", label: "Databases are limited to 2,000 records maximum." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_gro_06",
    section: "growth",
    prompt: "What is the purpose of an Uninterruptible Power Supply (UPS) in a data center or server rack?",
    options: [
      { id: "a", label: "Providing instantaneous battery backup power during mains electricity outages, preventing sudden system crashes and giving time for generators to start or clean server shutdowns." },
      { id: "b", label: "Routing internet traffic to international domain registrars." },
      { id: "c", label: "Compressing backup archives before writing to tape drives." },
      { id: "d", label: "Scanning network packets for spam email headers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_gro_07",
    section: "growth",
    prompt: "What is the difference between Synchronous and Asynchronous input/output (I/O) in modern high-concurrency systems?",
    options: [
      { id: "a", label: "Synchronous I/O blocks the calling execution thread until the read/write completes; Asynchronous I/O returns immediately, allowing the thread to continue processing other tasks while I/O finishes in the background." },
      { id: "b", label: "Synchronous I/O uses USB-C; Asynchronous uses HDMI cables." },
      { id: "c", label: "Asynchronous I/O is only supported on mechanical punch cards." },
      { id: "d", label: "Synchronous I/O deletes files after reading them." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_gro_08",
    section: "growth",
    prompt: "Why are Content Delivery Networks (CDNs) deployed globally in front of core origin servers?",
    options: [
      { id: "a", label: "Caching static web assets (images, CSS, JS, video) at edge edge data centers close to end-users, dramatically reducing latency, bandwidth costs, and load on origin servers." },
      { id: "b", label: "Converting Python code into Java bytecode on the fly." },
      { id: "c", label: "Generating artificial intelligence images from text prompts." },
      { id: "d", label: "Replacing all database queries with flat text files." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_gro_09",
    section: "growth",
    prompt: "What is a 'Load Balancer' (Layer 4 vs Layer 7) in modern web and cloud architecture?",
    options: [
      { id: "a", label: "A device or software reverse proxy that distributes incoming network or application traffic across multiple backend servers to maximize throughput, minimize response time, and avoid overloading any single server." },
      { id: "b", label: "A physical scale that weighs server chassis in data center racks." },
      { id: "c", label: "A battery voltage regulator that prevents electrical surges." },
      { id: "d", label: "A tool that balances audio levels in video streaming conferences." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_gro_10",
    section: "growth",
    prompt: "In enterprise disaster recovery planning, what is the difference between RTO (Recovery Time Objective) and RPO (Recovery Point Objective)?",
    options: [
      { id: "a", label: "RTO is the maximum acceptable duration of system downtime before restoration; RPO is the maximum acceptable age of lost data measured in time (e.g. maximum 15 minutes of transactional data loss)." },
      { id: "b", label: "RTO is the cost of server hardware; RPO is the price of electricity." },
      { id: "c", label: "RPO is the number of employees required to restart a server; RTO is the length of their shifts." },
      { id: "d", label: "RTO applies to software; RPO applies to ethernet cables." }
    ],
    correctOptionId: "a"
  }
];

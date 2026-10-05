import { CertQuestion } from '../types';

export const LINUX_SHELL_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: "lin_gro_01",
    section: "growth",
    prompt: "In Linux system performance diagnostics, what do the three numbers in the 'load average' output of `uptime` or `top` represent (e.g. `load average: 1.20, 2.50, 4.10`)?",
    options: [
      { id: "a", label: "The average number of runnable processes (in CPU run queue) plus processes waiting for uninterruptible disk I/O over the past 1, 5, and 15 minutes." },
      { id: "b", label: "The percentage of RAM consumed by the kernel, user space, and swap." },
      { id: "c", label: "The network upload, download, and latency statistics." },
      { id: "d", label: "The temperature of the three hottest CPU cores." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_gro_02",
    section: "growth",
    prompt: "What is the role of Linux Control Groups (`cgroups v2`) in modern container runtimes (Docker, Kubernetes, systemd)?",
    options: [
      { id: "a", label: "Kernel mechanism that isolates, tracks, and limits resource usage (CPU cycles, memory allocation, block I/O, network bandwidth) for collections of processes." },
      { id: "b", label: "A user management group for corporate system administrators." },
      { id: "c", label: "An automated compiler for C source code." },
      { id: "d", label: "A utility that formats NVMe drive partitions." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_gro_03",
    section: "growth",
    prompt: "Which diagnostic tool provides detailed real-time performance statistics specifically for block device I/O read/write throughput, queue lengths, and `%util` saturation?",
    options: [
      { id: "a", label: "`iostat -xz 1` (from the sysstat package)" },
      { id: "b", label: "`ping -c 4`" },
      { id: "c", label: "`hostnamectl`" },
      { id: "d", label: "`which bash`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_gro_04",
    section: "growth",
    prompt: "What kernel parameter configuration tool in Linux is used to tune production kernel performance (e.g. `vm.swappiness`, `net.core.somaxconn`, `fs.file-max`) across reboots via `/etc/sysctl.conf`?",
    options: [
      { id: "a", label: "`sysctl -p`" },
      { id: "b", label: "`tune2fs -l`" },
      { id: "c", label: "`modprobe -r`" },
      { id: "d", label: "`systemd-analyze`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_gro_05",
    section: "growth",
    prompt: "When automating multi-server infrastructure deployments, what is the role of tools like Ansible, Terraform, and cloud-init?",
    options: [
      { id: "a", label: "Infrastructure as Code (IaC) and configuration management, enabling repeatable, idempotent, automated provisioning and hardening of hundreds of Linux servers." },
      { id: "b", label: "Converting Linux bash scripts into mobile smartphone apps." },
      { id: "c", label: "Managing employee payroll spreadsheets." },
      { id: "d", label: "Replacing all Linux kernels with Windows Server." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_gro_06",
    section: "growth",
    prompt: "What happens when a Linux server runs completely out of physical RAM and swap space (Out-of-Memory / OOM condition)?",
    options: [
      { id: "a", label: "The Linux kernel OOM Killer (`oom_killer`) activates, evaluates `oom_score`, and forcefully terminates the highest memory-consuming unprivileged process to prevent a total kernel panic." },
      { id: "b", label: "The motherboard automatically orders more RAM from the cloud." },
      { id: "c", label: "The server permanently erases all SSD partitions." },
      { id: "d", label: "The processor downclocks to 1 MHz." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_gro_07",
    section: "growth",
    prompt: "What is the purpose of configuring LVM (Logical Volume Manager) on Linux enterprise servers?",
    options: [
      { id: "a", label: "Abstracting physical storage disks into Volume Groups (VG) and Logical Volumes (LV), allowing dynamic online resizing of partitions and snapshotting without system downtime." },
      { id: "b", label: "Accelerating video card refresh rates." },
      { id: "c", label: "Managing DNS records across cloud providers." },
      { id: "d", label: "Encrypting WiFi network passwords." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_gro_08",
    section: "growth",
    prompt: "In high-performance Linux network tuning, what is the effect of increasing `net.ipv4.tcp_tw_reuse` and `net.ipv4.ip_local_port_range`?",
    options: [
      { id: "a", label: "Allows high-throughput reverse proxies to reuse `TIME_WAIT` sockets for outgoing connections and expands the ephemeral port range, preventing local port exhaustion under massive connection loads." },
      { id: "b", label: "Disables all TCP handshakes to make connections instant." },
      { id: "c", label: "Forces all network traffic through IPv6." },
      { id: "d", label: "Increases optical fiber cable bandwidth." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_gro_09",
    section: "growth",
    prompt: "What is the purpose of Logrotate (`/etc/logrotate.conf`) in enterprise Linux systems administration?",
    options: [
      { id: "a", label: "Automatically rotating, compressing, truncating, and periodically removing aging log files in `/var/log` to prevent server disk space saturation." },
      { id: "b", label: "Translating log timestamps into different timezones." },
      { id: "c", label: "Encrypting user passwords in `/etc/shadow`." },
      { id: "d", label: "Restarting web servers after every HTTP request." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_gro_10",
    section: "growth",
    prompt: "How does `strace` assist in debugging mysterious process hangs or failures in production Linux systems?",
    options: [
      { id: "a", label: "Intercepting and recording all system calls (e.g. `open`, `read`, `write`, `connect`, `futex`) made and signals received by a running process in real time." },
      { id: "b", label: "Scanning memory for deleted passwords." },
      { id: "c", label: "Decompiling binary machine code back into C source code." },
      { id: "d", label: "Optimizing CPU clock frequencies." }
    ],
    correctOptionId: "a"
  }
];

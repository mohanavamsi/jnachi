import { CertQuestion } from '../types';

export const LINUX_SHELL_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "lin_lit_01",
    section: "literacy",
    prompt: "In the Linux Filesystem Hierarchy Standard (FHS), what is the standard purpose of the `/etc` directory?",
    options: [
      { id: "a", label: "Host-specific system-wide configuration files and startup scripts." },
      { id: "b", label: "Temporary scratch files deleted on every system reboot." },
      { id: "c", label: "Binary executable files for non-privileged standard users." },
      { id: "d", label: "Mount points for external USB flash drives." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_lit_02",
    section: "literacy",
    prompt: "What is the meaning of the permission mode `chmod 755 script.sh` in standard octal Linux notation?",
    options: [
      { id: "a", label: "Owner has Read, Write, and Execute (7 = rwx); Group and Others have Read and Execute (5 = r-x)." },
      { id: "b", label: "All users have full Read, Write, and Execute permissions." },
      { id: "c", label: "Owner has Read only; Everyone else has Write only." },
      { id: "d", label: "The file is encrypted with a 755-bit SSL key." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_lit_03",
    section: "literacy",
    prompt: "In Linux process management, what is PID 1 in modern systemd-based Linux distributions?",
    options: [
      { id: "a", label: "The `systemd` init process, which is the ancestor of all user-space processes and manages system initialization, services, and cgroups." },
      { id: "b", label: "The Linux kernel swap space manager." },
      { id: "c", label: "The root user's active Bash shell prompt." },
      { id: "d", label: "The hardware BIOS timer daemon." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_lit_04",
    section: "literacy",
    prompt: "What is the fundamental difference between a Hard Link and a Symbolic (Soft) Link in Linux?",
    options: [
      { id: "a", label: "A hard link points directly to the file's underlying Inode on the same filesystem (shares file data blocks); a symlink is a separate pointer file containing a path reference to the target file." },
      { id: "b", label: "Hard links only work on directories; soft links only work on files." },
      { id: "c", label: "Soft links cannot be deleted; hard links delete after 24 hours." },
      { id: "d", label: "Hard links encrypt the file; soft links compress the file." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_lit_05",
    section: "literacy",
    prompt: "What are the three Standard I/O streams in POSIX Linux systems and their corresponding file descriptors?",
    options: [
      { id: "a", label: "Standard Input (`stdin`, FD 0), Standard Output (`stdout`, FD 1), and Standard Error (`stderr`, FD 2)." },
      { id: "b", label: "`read` (FD 1), `write` (FD 2), and `execute` (FD 3)." },
      { id: "c", label: "`tcp` (FD 0), `udp` (FD 1), and `icmp` (FD 2)." },
      { id: "d", label: "`kernel` (FD 0), `user` (FD 1), and `daemon` (FD 2)." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_lit_06",
    section: "literacy",
    prompt: "In a Bash script, what is the 'Shebang' line `#!/bin/bash` located on line 1 used for?",
    options: [
      { id: "a", label: "Directing the operating system program loader to execute the script using the specified Bash interpreter binary located at `/bin/bash`." },
      { id: "b", label: "A comment header that is ignored by both the OS and the shell." },
      { id: "c", label: "A license declaration for open-source software." },
      { id: "d", label: "A command that elevates current execution to root privileges." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_lit_07",
    section: "literacy",
    prompt: "What is the meaning of the Linux special exit code `$? == 0` returned after executing a command?",
    options: [
      { id: "a", label: "The command completed successfully with zero errors." },
      { id: "b", label: "The command was terminated abnormally by the OS kernel." },
      { id: "c", label: "The command produced zero lines of output." },
      { id: "d", label: "The command ran for 0 milliseconds." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_lit_08",
    section: "literacy",
    prompt: "What does the pseudo-filesystem `/proc` represent in Linux?",
    options: [
      { id: "a", label: "A virtual, in-memory filesystem generated on the fly by the kernel, exposing kernel data structures, hardware state, and real-time process metadata (e.g. `/proc/cpuinfo`, `/proc/meminfo`, `/proc/<PID>`)." },
      { id: "b", label: "A physical partition on the SSD storing installation setup packages." },
      { id: "c", label: "A permanent archive of deleted user files." },
      { id: "d", label: "The folder containing user desktop wallpapers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_lit_09",
    section: "literacy",
    prompt: "What signal is sent by default when running `kill <PID>`, and how does it differ from `kill -9 <PID>` (SIGKILL)?",
    options: [
      { id: "a", label: "Default `kill` sends SIGTERM (15), allowing the process to gracefully handle shutdown and cleanup; SIGKILL (9) cannot be caught or ignored and immediately terminates the process via kernel force." },
      { id: "b", label: "Default `kill` restarts the process; `kill -9` pauses execution." },
      { id: "c", label: "SIGKILL (9) sends an email alert to the server administrator." },
      { id: "d", label: "SIGTERM (15) deletes the process executable binary from disk." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_lit_10",
    section: "literacy",
    prompt: "In Linux environment management, what is the role of the `$PATH` environment variable?",
    options: [
      { id: "a", label: "A colon-separated list of directories that the shell searches sequentially to locate executable program binaries when a command is typed without an absolute path." },
      { id: "b", label: "The absolute directory path to the user's home folder." },
      { id: "c", label: "The URL of the remote Git repository." },
      { id: "d", label: "A list of IP addresses blocked by the Linux firewall." }
    ],
    correctOptionId: "a"
  }
];

import { CertQuestion } from '../types';

export const LINUX_SHELL_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: "lin_priv_01",
    section: "privacy",
    prompt: "What is the security function of the `/etc/shadow` file compared to `/etc/passwd` on Linux systems?",
    options: [
      { id: "a", label: "`/etc/shadow` is strictly readable only by root (permissions `640` or `600`) and contains salted, hashed user passwords and expiration metadata, keeping them hidden from unprivileged users who can read `/etc/passwd`." },
      { id: "b", label: "`/etc/shadow` stores encrypted SSH private keys for remote servers." },
      { id: "c", label: "`/etc/shadow` is a backup copy generated when the power supply fails." },
      { id: "d", label: "`/etc/shadow` logs all failed DNS queries." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_priv_02",
    section: "privacy",
    prompt: "What major security vulnerability can occur if an executable script or binary is granted the SUID (`chmod u+s`) permission bit?",
    options: [
      { id: "a", label: "Any user executing the binary runs it with the elevated permissions of the file owner (e.g. root); if the program contains a flaw or shell escape, it can lead to immediate local privilege escalation." },
      { id: "b", label: "The file is deleted automatically after 5 minutes." },
      { id: "c", label: "The file cannot be transferred over SSH." },
      { id: "d", label: "The file disables all network cards on the motherboard." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_priv_03",
    section: "privacy",
    prompt: "Why should `chmod 777` NEVER be applied to production directories or files in an enterprise Linux environment?",
    options: [
      { id: "a", label: "It grants read, write, and execute permissions to literally every user on the system (`rwxrwxrwx`), allowing any low-privilege process or compromised account to modify, delete, or inject malicious code." },
      { id: "b", label: "Because Linux filesystems only support permissions up to 666." },
      { id: "c", label: "It causes immediate kernel panic on reboot." },
      { id: "d", label: "It locks the file so that even the root user cannot open it." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_priv_04",
    section: "privacy",
    prompt: "What is the recommended best practice for hardening SSH access in `/etc/ssh/sshd_config` on production Linux servers?",
    options: [
      { id: "a", label: "Set `PermitRootLogin no`, `PasswordAuthentication no` (enforce ED25519/RSA SSH key authentication only), and change or restrict the listening port/firewall." },
      { id: "b", label: "Allow blank passwords for faster developer access." },
      { id: "c", label: "Disable SSH logging in `/var/log/auth.log`." },
      { id: "d", label: "Enable Telnet as a primary fallback protocol." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_priv_05",
    section: "privacy",
    prompt: "What is the purpose of `sudo` configuration via the `/etc/sudoers` file (edited strictly with `visudo`)?",
    options: [
      { id: "a", label: "Granularly delegating administrative command execution privileges to specific users or groups without sharing the root password, with full audit logging and syntax validation." },
      { id: "b", label: "Automatically creating user home directories." },
      { id: "c", label: "Managing DNS domain names on the local network." },
      { id: "d", label: "Configuring swap space memory limits." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_priv_06",
    section: "privacy",
    prompt: "What security role is served by Mandatory Access Control (MAC) systems such as SELinux (Security-Enhanced Linux) or AppArmor?",
    options: [
      { id: "a", label: "Enforcing kernel-level security policies and process containment even if the process is running as root (Discretionary Access Control bypass defense)." },
      { id: "b", label: "Compressing log files to prevent hard drive saturation." },
      { id: "c", label: "Scanning network cables for electromagnetic interference." },
      { id: "d", label: "Encrypting RAM contents when the screen locks." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_priv_07",
    section: "privacy",
    prompt: "Why is passing sensitive credentials (e.g. passwords or API keys) as plaintext command-line arguments to shell scripts considered an insecure practice?",
    options: [
      { id: "a", label: "Command arguments are visible in plaintext to all local users via `ps aux`, `/proc/<PID>/cmdline`, and stored in shell command history files (`~/.bash_history`)." },
      { id: "b", label: "Linux command lines cannot parse string characters longer than 8 bytes." },
      { id: "c", label: "Shell arguments automatically get sent to public NTP servers." },
      { id: "d", label: "The shell deletes arguments after the first function call." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_priv_08",
    section: "privacy",
    prompt: "What is the function of the `umask` (User Mask) command in Linux file security?",
    options: [
      { id: "a", label: "Setting the default permission filter (subtraction mask) applied to newly created files and directories by the operating system." },
      { id: "b", label: "Anonymizing user IP addresses during web browsing." },
      { id: "c", label: "Hiding process names from the top monitor." },
      { id: "d", label: "Locking the root account after 3 failed login attempts." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_priv_09",
    section: "privacy",
    prompt: "In Linux firewall management, what is the role of `iptables` / `nftables` / `ufw`?",
    options: [
      { id: "a", label: "Inspecting, filtering, and modifying network packets traversing the Linux kernel Netfilter framework to block unauthorized ports and filter network traffic." },
      { id: "b", label: "Cleaning up unreferenced memory blocks in swap space." },
      { id: "c", label: "Rebuilding corrupted ext4 filesystem superblocks." },
      { id: "d", label: "Validating SSL certificate expiration dates." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_priv_10",
    section: "privacy",
    prompt: "Which command securely changes the owner and group of a sensitive directory recursively to `appuser:appgroup`?",
    options: [
      { id: "a", label: "`chown -R appuser:appgroup /opt/myapp`" },
      { id: "b", label: "`chmod -R 777 /opt/myapp`" },
      { id: "c", label: "`usermod -g appgroup /opt/myapp`" },
      { id: "d", label: "`mv /opt/myapp appuser`" }
    ],
    correctOptionId: "a"
  }
];

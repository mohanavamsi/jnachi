import { CertQuestion } from '../types';

export const LINUX_SHELL_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "lin_auto_01",
    section: "automation",
    prompt: "Which command correctly redirects BOTH standard output (`stdout`) and standard error (`stderr`) to a single log file, overwriting existing contents?",
    options: [
      { id: "a", label: "`command > output.log 2>&1` (or `command &> output.log` in Bash)" },
      { id: "b", label: "`command 2> output.log <1`" },
      { id: "c", label: "`command >> output.log --all`" },
      { id: "d", label: "`command | output.log`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_auto_02",
    section: "automation",
    prompt: "In a Bash script, which standard configuration flags placed at the top of the file enable 'Bash Strict Mode' to halt execution on errors, unassigned variables, and failed pipeline stages?",
    options: [
      { id: "a", label: "`set -euo pipefail`" },
      { id: "b", label: "`set --strict --safe`" },
      { id: "c", label: "`shopt -s error_halt`" },
      { id: "d", label: "`enable -a runtime_guard`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_auto_03",
    section: "automation",
    prompt: "Which standard Linux text processing utility is best suited to extract column 3 from a colon-delimited file (e.g. extracting user IDs from `/etc/passwd`)?",
    options: [
      { id: "a", label: "`cut -d: -f3 /etc/passwd` (or `awk -F: '{print $3}' /etc/passwd`)" },
      { id: "b", label: "`grep -c 3 /etc/passwd`" },
      { id: "c", label: "`sed -d 3 /etc/passwd`" },
      { id: "d", label: "`tar -xvf /etc/passwd -c 3`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_auto_04",
    section: "automation",
    prompt: "In Linux cron scheduling, what does the cron expression `0 2 * * * /backup/db.sh` specify?",
    options: [
      { id: "a", label: "Execute `/backup/db.sh` every day at 02:00 AM (0 minute, 2nd hour)." },
      { id: "b", label: "Execute the backup script every 2 minutes continuously." },
      { id: "c", label: "Execute on the 2nd day of February every year." },
      { id: "d", label: "Execute 2 times per second until completed." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_auto_05",
    section: "automation",
    prompt: "Which command finds all `.log` files in `/var/log` modified more than 30 days ago and deletes them automatically?",
    options: [
      { id: "a", label: "`find /var/log -type f -name \"*.log\" -mtime +30 -exec rm {} \\;` (or `-delete`)" },
      { id: "b", label: "`rm -rf /var/log/*.log --older-than 30d`" },
      { id: "c", label: "`grep --delete -mtime 30 /var/log/*.log`" },
      { id: "d", label: "`ls -l /var/log | rm -days 30`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_auto_06",
    section: "automation",
    prompt: "What is the function of the `xargs` command in shell scripting pipelines?",
    options: [
      { id: "a", label: "Building and executing command lines by converting standard input (`stdin`) into arguments for another command." },
      { id: "b", label: "Encrypting Bash variables with AES-256." },
      { id: "c", label: "Converting XML data into JSON strings." },
      { id: "d", label: "Creating symbolic links to remote FTP servers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_auto_07",
    section: "automation",
    prompt: "In Bash scripting, what is the syntax for safely executing a command substitution and storing its output into a variable?",
    options: [
      { id: "a", label: "`CURRENT_DATE=$(date +%Y-%m-%d)`" },
      { id: "b", label: "`CURRENT_DATE = {date +%Y-%m-%d}`" },
      { id: "c", label: "`set CURRENT_DATE -> date +%Y-%m-%d`" },
      { id: "d", label: "`let CURRENT_DATE == eval(date)`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_auto_08",
    section: "automation",
    prompt: "Which command shows real-time disk space utilization across all mounted filesystems in human-readable gigabyte/megabyte format?",
    options: [
      { id: "a", label: "`df -h`" },
      { id: "b", label: "`du -sh /`" },
      { id: "c", label: "`free -m`" },
      { id: "d", label: "`lsblk -a`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_auto_09",
    section: "automation",
    prompt: "How do you define a reusable function with parameter validation in a POSIX/Bash shell script?",
    options: [
      { id: "a", label: "`log_message() { local msg=\"$1\"; echo \"[$(date)] $msg\"; }`" },
      { id: "b", label: "`function: log_message(msg) { print(msg); }`" },
      { id: "c", label: "`def log_message($msg): return echo $msg`" },
      { id: "d", label: "`create function log_message as (select $1)`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "lin_auto_10",
    section: "automation",
    prompt: "Which command in systemd checks the status and inspects recent logging output for a service named `nginx`?",
    options: [
      { id: "a", label: "`systemctl status nginx` (and `journalctl -u nginx -e`)" },
      { id: "b", label: "`service nginx check-all`" },
      { id: "c", label: "`tail /proc/nginx/status`" },
      { id: "d", label: "`init.d nginx dump`" }
    ],
    correctOptionId: "a"
  }
];

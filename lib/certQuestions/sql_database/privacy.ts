import { CertQuestion } from '../types';

export const SQL_DATABASE_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: "sql_priv_01",
    section: "privacy",
    prompt: "What is SQL Injection (SQLi), and what is the primary, absolute defense against it in application development?",
    options: [
      { id: "a", label: "An attacker injects malicious SQL syntax into input fields to alter query semantics; Parameterized Queries (Prepared Statements) separate SQL code from user data, rendering injected SQL inert." },
      { id: "b", label: "A virus that infects SQL server RAM; defended by installing antivirus software." },
      { id: "c", label: "A database corruption issue caused by hard drive power loss; defended by RAID." },
      { id: "d", label: "A slow query that causes server timeouts; defended by adding RAM." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_priv_02",
    section: "privacy",
    prompt: "In transaction isolation levels (ANSI SQL), what is a 'Dirty Read' anomaly, and which isolation level prevents it?",
    options: [
      { id: "a", label: "A transaction reads uncommitted data written by another concurrent transaction (which could subsequently be rolled back); prevented by `READ COMMITTED` (or higher) isolation levels." },
      { id: "b", label: "A query that returns unformatted text." },
      { id: "c", label: "Reading data from a corrupted hard drive sector." },
      { id: "d", label: "A query executed over an unencrypted HTTP connection." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_priv_03",
    section: "privacy",
    prompt: "What is a 'Phantom Read' anomaly in relational database transactions, and which isolation level completely eliminates it?",
    options: [
      { id: "a", label: "A transaction executes a range query twice and finds newly inserted rows committed by another concurrent transaction; eliminated by `SERIALIZABLE` isolation level." },
      { id: "b", label: "A transaction deleting all table rows on mistake." },
      { id: "c", label: "A query reading data from an offline standby replica." },
      { id: "d", label: "A user viewing database records without logging in." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_priv_04",
    section: "privacy",
    prompt: "What is the purpose of Database Role-Based Access Control (RBAC) via `GRANT` and `REVOKE` statements in SQL?",
    options: [
      { id: "a", label: "Enforcing the Principle of Least Privilege by granting specific users and applications only the exact permissions needed (e.g. `SELECT`, `INSERT`) on specific tables, restricting access to administrative operations." },
      { id: "b", label: "Restricting database access to weekdays between 9 AM and 5 PM." },
      { id: "c", label: "Automatically translating table column names into Spanish." },
      { id: "d", label: "Deleting inactive database user accounts every 30 days." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_priv_05",
    section: "privacy",
    prompt: "What is Transparent Data Encryption (TDE) in enterprise database engines (PostgreSQL, SQL Server, Oracle)?",
    options: [
      { id: "a", label: "Encrypting database data and log files at rest on the physical storage media using AES encryption keys, protecting against theft of raw database files or physical hard drives." },
      { id: "b", label: "Encrypting SQL queries before sending them to the browser." },
      { id: "c", label: "Hiding table names from database developers." },
      { id: "d", label: "Anonymizing email addresses in customer tables." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_priv_06",
    section: "privacy",
    prompt: "What is Row-Level Security (RLS) in modern databases like PostgreSQL?",
    options: [
      { id: "a", label: "Security policies defined on tables that restrict which individual rows are returned or modifiable by queries, evaluated dynamically based on the executing user's authentication context." },
      { id: "b", label: "A physical lock on the server rack door." },
      { id: "c", label: "Limiting table size to 1 million rows maximum." },
      { id: "d", label: "Encrypting each row with a different password." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_priv_07",
    section: "privacy",
    prompt: "Why should sensitive data like passwords NEVER be stored in plaintext in relational database tables, and how must they be stored?",
    options: [
      { id: "a", label: "Plaintext passwords expose all user credentials during database leaks; they must be hashed using slow, salted cryptographic algorithms (bcrypt, Argon2, PBKDF2)." },
      { id: "b", label: "Because database columns cannot store words longer than 6 characters." },
      { id: "c", label: "Because plaintext passwords slow down SQL join queries." },
      { id: "d", label: "Plaintext passwords are deleted automatically on database restarts." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_priv_08",
    section: "privacy",
    prompt: "What is Point-in-Time Recovery (PITR) in enterprise database backup architectures?",
    options: [
      { id: "a", label: "Combining base backups with continuous Write-Ahead Log (WAL) archiving to restore the database to the exact millisecond state prior to an accidental corruption or data loss event." },
      { id: "b", label: "Restarting the database server every hour." },
      { id: "c", label: "Exporting database tables to CSV every morning at 8:00 AM." },
      { id: "d", label: "A tool that synchronizes server time with atomic clocks." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_priv_09",
    section: "privacy",
    prompt: "What is a 'Deadlock' in relational transaction processing, and how does the RDBMS engine resolve it?",
    options: [
      { id: "a", label: "Two or more transactions cyclically hold locks that the other transactions need to proceed; the database engine's deadlock detection algorithm detects the cycle and automatically aborts (rolls back) one transaction." },
      { id: "b", label: "A physical failure of the database power supply." },
      { id: "c", label: "A database query that returns zero results." },
      { id: "d", label: "A table that has no primary key defined." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_priv_10",
    section: "privacy",
    prompt: "What is Dynamic Data Masking (DDM) in enterprise database security?",
    options: [
      { id: "a", label: "Obfuscating sensitive data (e.g. masking credit card numbers to `XXXX-XXXX-XXXX-1234`) on the fly in query result sets for unauthorized users, without altering the underlying raw data on disk." },
      { id: "b", label: "Encrypting the server motherboard." },
      { id: "c", label: "Deleting inactive customer accounts after 90 days." },
      { id: "d", label: "Changing database column names randomly." }
    ],
    correctOptionId: "a"
  }
];

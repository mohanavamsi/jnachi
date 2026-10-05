import { CertQuestion } from '../types';

export const SQL_DATABASE_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: "sql_auto_01",
    section: "automation",
    prompt: "Which SQL Window Function assigns a unique sequential integer to each row within a partition, ordered by a specified column?",
    options: [
      { id: "a", label: "`ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC)`" },
      { id: "b", label: "`COUNT(salary) GROUP BY department_id`" },
      { id: "c", label: "`AUTO_INCREMENT(department_id)`" },
      { id: "d", label: "`SEQUENCE() INTO salary`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_auto_02",
    section: "automation",
    prompt: "In SQL analytical queries, what is the difference between `RANK()` and `DENSE_RANK()` when handling tie values?",
    options: [
      { id: "a", label: "`RANK()` skips subsequent rank numbers after ties (e.g. 1, 2, 2, 4); `DENSE_RANK()` does not skip rank numbers after ties (e.g. 1, 2, 2, 3)." },
      { id: "b", label: "`RANK()` is only for numbers; `DENSE_RANK()` is for text." },
      { id: "c", label: "`DENSE_RANK()` deletes tied rows from the result set." },
      { id: "d", label: "`RANK()` cannot be used with the `OVER()` clause." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_auto_03",
    section: "automation",
    prompt: "Which SQL window function allows accessing data from a previous row within the same result set without performing a self-join?",
    options: [
      { id: "a", label: "`LAG(column_name, 1) OVER (ORDER BY event_time)`" },
      { id: "b", label: "`LEAD(column_name, -1)`" },
      { id: "c", label: "`PREVIOUS(column_name)`" },
      { id: "d", label: "`REWIND(column_name)`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_auto_04",
    section: "automation",
    prompt: "What is the purpose of an SQL Stored Procedure (`CREATE PROCEDURE`) in database systems?",
    options: [
      { id: "a", label: "A precompiled collection of SQL statements and procedural logic stored on the database server, executed via `CALL` to reduce network latency and encapsulate business workflows." },
      { id: "b", label: "A shell script that installs MySQL on Linux." },
      { id: "c", label: "A hardware diagnostic check run on database hard drives." },
      { id: "d", label: "A browser cookie that remembers user login sessions." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_auto_05",
    section: "automation",
    prompt: "What is a Database Trigger (`CREATE TRIGGER`) in relational engineering?",
    options: [
      { id: "a", label: "A stored database program that automatically executes (fires) in response to specified Data Manipulation Language (DML) events (`INSERT`, `UPDATE`, or `DELETE`) on a table." },
      { id: "b", label: "An alert that sounds when the database server case is opened." },
      { id: "c", label: "A network cable connection between two database replicas." },
      { id: "d", label: "A query that deletes all tables on Sunday midnight." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_auto_06",
    section: "automation",
    prompt: "Which SQL command is used to conditionally insert a new record or update an existing record (often called an 'Upsert') in ANSI SQL / PostgreSQL / MySQL 8+?",
    options: [
      { id: "a", label: "`INSERT INTO table (...) VALUES (...) ON CONFLICT (id) DO UPDATE SET ...` (or `MERGE INTO`)" },
      { id: "b", label: "`UPSERT ALL INTO table`" },
      { id: "c", label: "`UPDATE OR INSERT INTO table`" },
      { id: "d", label: "`REPLACE VALUES INTO table`" }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_auto_07",
    section: "automation",
    prompt: "How does the `CASE WHEN ... THEN ... ELSE ... END` conditional expression operate in SQL queries?",
    options: [
      { id: "a", label: "Evaluates boolean conditions sequentially and returns the corresponding value of the first condition that evaluates to TRUE, providing branching logic inside `SELECT`, `UPDATE`, or `ORDER BY` clauses." },
      { id: "b", label: "Converts text between uppercase and lowercase letters." },
      { id: "c", label: "Restarts the database service when errors occur." },
      { id: "d", label: "Encrypts specific database table columns." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_auto_08",
    section: "automation",
    prompt: "What is the difference between `TRUNCATE TABLE` and `DELETE FROM table` in SQL?",
    options: [
      { id: "a", label: "`TRUNCATE` is a DDL operation that deallocates data pages instantly, resets auto-increment sequences, and produces minimal logging; `DELETE` is a DML operation that removes rows one by one, firing triggers and logging each row deletion in the transaction log." },
      { id: "b", label: "`TRUNCATE` only removes columns; `DELETE` removes the entire database." },
      { id: "c", label: "`DELETE` cannot be used inside a transaction." },
      { id: "d", label: "`TRUNCATE` converts all table values to zero." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_auto_09",
    section: "automation",
    prompt: "In schema migration management (e.g. Flyway, Liquibase, Prisma), why are version-controlled migration scripts essential for production databases?",
    options: [
      { id: "a", label: "Enforcing deterministic, repeatable, and automated schema transformations (`UP` and `DOWN` rollbacks) across development, staging, and production environments without data corruption." },
      { id: "b", label: "Generating automatic marketing emails to database users." },
      { id: "c", label: "Converting SQL databases to Microsoft Excel spreadsheets." },
      { id: "d", label: "Bypassing primary key constraints during high traffic periods." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_auto_10",
    section: "automation",
    prompt: "Which command in PostgreSQL or MySQL displays the execution plan chosen by the query optimizer, revealing index usage, table scans, cost estimates, and execution time?",
    options: [
      { id: "a", label: "`EXPLAIN ANALYZE SELECT ...`" },
      { id: "b", label: "`SHOW QUERY PLAN ...`" },
      { id: "c", label: "`DEBUG SELECT ...`" },
      { id: "d", label: "`TRACE EXECUTION ...`" }
    ],
    correctOptionId: "a"
  }
];

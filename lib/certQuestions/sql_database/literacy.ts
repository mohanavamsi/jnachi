import { CertQuestion } from '../types';

export const SQL_DATABASE_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: "sql_lit_01",
    section: "literacy",
    prompt: "In relational database theory, what is the fundamental purpose of Database Normalization (from 1NF to 3NF/BCNF)?",
    options: [
      { id: "a", label: "Eliminating data redundancy, preventing insertion/update/deletion anomalies, and enforcing data integrity across relational tables." },
      { id: "b", label: "Compressing SQL database tables into binary zip files." },
      { id: "c", label: "Converting SQL queries into JavaScript functions." },
      { id: "d", label: "Restricting table row counts to exactly 1,000 records." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_lit_02",
    section: "literacy",
    prompt: "What does the ACID acronym stand for in relational transaction processing?",
    options: [
      { id: "a", label: "Atomicity, Consistency, Isolation, and Durability." },
      { id: "b", label: "Access, Control, Indexing, and Deletion." },
      { id: "c", label: "Array, Cursor, Iteration, and Database." },
      { id: "d", label: "Authentication, Cryptography, Integrity, and Delegation." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_lit_03",
    section: "literacy",
    prompt: "What is the key functional difference between an `INNER JOIN` and a `LEFT JOIN` in SQL?",
    options: [
      { id: "a", label: "`INNER JOIN` returns only rows that have matching values in both tables; `LEFT JOIN` returns all rows from the left table and matched rows from the right table (filling with `NULL` where no match exists)." },
      { id: "b", label: "`INNER JOIN` deletes unmatched rows from disk; `LEFT JOIN` duplicates them." },
      { id: "c", label: "`LEFT JOIN` only works on numbers; `INNER JOIN` only works on text." },
      { id: "d", label: "`INNER JOIN` sorts results alphabetically; `LEFT JOIN` sorts numerically." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_lit_04",
    section: "literacy",
    prompt: "In SQL querying, what is the semantic difference between the `WHERE` clause and the `HAVING` clause?",
    options: [
      { id: "a", label: "`WHERE` filters individual rows BEFORE any grouping occurs; `HAVING` filters aggregated group results AFTER the `GROUP BY` clause has been evaluated." },
      { id: "b", label: "`WHERE` is for PostgreSQL; `HAVING` is for MySQL." },
      { id: "c", label: "`HAVING` can only be used on primary key columns." },
      { id: "d", label: "`WHERE` permanently deletes rows that do not match." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_lit_05",
    section: "literacy",
    prompt: "What is a Primary Key constraint versus a Unique Key constraint in relational schemas?",
    options: [
      { id: "a", label: "A Primary Key uniquely identifies each row and strictly forbids `NULL` values (only one PK per table); a Unique Key enforces uniqueness across columns but permits one or more `NULL` values (multiple Unique constraints per table allowed)." },
      { id: "b", label: "A Primary Key is always encrypted; Unique keys are unencrypted." },
      { id: "c", label: "A Unique Key can only be assigned to text columns." },
      { id: "d", label: "A Primary Key requires a foreign server to validate." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_lit_06",
    section: "literacy",
    prompt: "What is the purpose of a Foreign Key constraint with `ON DELETE CASCADE`?",
    options: [
      { id: "a", label: "Enforcing referential integrity between parent and child tables; when a parent row is deleted, all associated referencing child rows are automatically deleted by the database engine." },
      { id: "b", label: "Preventing users from executing `DROP TABLE` commands." },
      { id: "c", label: "Creating automated backups of deleted rows in CSV format." },
      { id: "d", label: "Converting child table columns to uppercase." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_lit_07",
    section: "literacy",
    prompt: "What is the behavior of the `UNION` operator compared to the `UNION ALL` operator in SQL?",
    options: [
      { id: "a", label: "`UNION` combines result sets and removes duplicate rows (requires sorting/deduplication overhead); `UNION ALL` combines result sets and preserves all duplicate rows (significantly faster)." },
      { id: "b", label: "`UNION` joins tables horizontally; `UNION ALL` joins tables diagonally." },
      { id: "c", label: "`UNION ALL` converts numbers to text strings." },
      { id: "d", label: "`UNION` requires both queries to run on separate physical databases." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_lit_08",
    section: "literacy",
    prompt: "What is a Common Table Expression (CTE) defined using the `WITH` clause in modern SQL?",
    options: [
      { id: "a", label: "A named temporary result set that exists only within the execution scope of a single SQL statement, improving readability and enabling recursive hierarchical queries." },
      { id: "b", label: "A permanent database table stored in secondary NVMe storage." },
      { id: "c", label: "A security user role assigned to database administrators." },
      { id: "d", label: "A hardware accelerator card for relational database servers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_lit_09",
    section: "literacy",
    prompt: "What does the SQL standard `COALESCE(val1, val2, ..., valN)` function return?",
    options: [
      { id: "a", label: "The first non-NULL expression among its input arguments, or NULL if all arguments are NULL." },
      { id: "b", label: "The mathematical average of all numeric inputs." },
      { id: "c", label: "The longest string among all text inputs." },
      { id: "d", label: "A concatenated string of all parameters separated by commas." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_lit_10",
    section: "literacy",
    prompt: "What is a Database View (`CREATE VIEW`) in SQL?",
    options: [
      { id: "a", label: "A stored virtual table defined by an underlying SQL SELECT query that dynamically presents data from one or more base tables without physically storing duplicate data." },
      { id: "b", label: "A graphical dashboard charting sales metrics." },
      { id: "c", label: "A hardware monitor attached to the database server rack." },
      { id: "d", label: "A backup image of the master database." }
    ],
    correctOptionId: "a"
  }
];

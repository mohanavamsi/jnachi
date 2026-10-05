import { CertQuestion } from '../types';

export const SQL_DATABASE_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: "sql_gro_01",
    section: "growth",
    prompt: "In database index optimization, why is a B-Tree (Balanced Tree) index structure universally used for relational primary keys and sorted range queries?",
    options: [
      { id: "a", label: "Maintains a self-balancing hierarchical tree structure providing logarithmic O(log N) time complexity for search, sequential access, insertions, and range scans (`BETWEEN`, `<`, `>`)." },
      { id: "b", label: "Compresses table data by 99% using image encoding." },
      { id: "c", label: "Eliminates the need for foreign keys in relational schemas." },
      { id: "d", label: "Executes queries inside web browser memory." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_gro_02",
    section: "growth",
    prompt: "What is a 'Composite Index' (Multi-Column Index) on `(country, city, last_name)`, and what is the 'Leftmost Prefix Rule'?",
    options: [
      { id: "a", label: "An index spanning multiple columns; the database query optimizer can only utilize the index for queries filtering on the leading leftmost columns (e.g. `country` or `country + city`), but NOT on `city` or `last_name` alone." },
      { id: "b", label: "An index that combines text and numbers into a single column." },
      { id: "c", label: "An index that only works when reading data from left to right on a screen." },
      { id: "d", label: "An index that deletes duplicate rows from the left table." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_gro_03",
    section: "growth",
    prompt: "What is 'Database Read Replica Replication' (e.g. Master-Replica / Primary-Standby architecture)?",
    options: [
      { id: "a", label: "Directing all data modification queries (`INSERT`, `UPDATE`, `DELETE`) to a single Primary writer node, while streaming WAL logs to replicate data to multiple Read Replicas to scale read query throughput horizontally." },
      { id: "b", label: "Duplicating user passwords across different cloud providers." },
      { id: "c", label: "Printing physical paper copies of database records." },
      { id: "d", label: "Running database queries simultaneously in two different programming languages." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_gro_04",
    section: "growth",
    prompt: "What is 'Database Sharding' (Horizontal Partitioning) across distributed database clusters?",
    options: [
      { id: "a", label: "Splitting a massive dataset across multiple independent database servers (shards) based on a Shard Key (e.g. `user_id % num_shards`), allowing linear scaling beyond the hardware limits of a single machine." },
      { id: "b", label: "Breaking physical server hard drives into smaller fragments." },
      { id: "c", label: "Converting relational tables into unstructured text files." },
      { id: "d", label: "Deleting old user records to save storage space." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_gro_05",
    section: "growth",
    prompt: "In query plan analysis, what is a 'Sequential Table Scan' (Seq Scan / Full Table Scan), and when is it problematic?",
    options: [
      { id: "a", label: "The database reads every single row on disk across the entire table to evaluate a filter; on multi-million row tables, this causes severe disk I/O bottlenecks and high latency due to missing indexes." },
      { id: "b", label: "A scan that verifies network cable integrity." },
      { id: "c", label: "An automated security scan for malware in SQL files." },
      { id: "d", label: "A query that sorts rows alphabetically in memory." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_gro_06",
    section: "growth",
    prompt: "What is a 'Covering Index' (Index-Only Scan) in SQL query performance tuning?",
    options: [
      { id: "a", label: "An index that includes all columns referenced in the query's `SELECT`, `WHERE`, and `JOIN` clauses (via `INCLUDE` or composite columns), allowing the engine to satisfy the entire query directly from the index without accessing the underlying table heap pages." },
      { id: "b", label: "An index that covers the entire hard drive." },
      { id: "c", label: "An index that conceals column names from non-admin users." },
      { id: "d", label: "An index created exclusively on temporary tables." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_gro_07",
    section: "growth",
    prompt: "What is Table Partitioning (Range, List, or Hash partitioning) in PostgreSQL / MySQL / Oracle?",
    options: [
      { id: "a", label: "Dividing one large logical table into smaller, manageable physical sub-tables (e.g. partitioning `orders` by `order_date` yearly), enabling Partition Pruning to skip irrelevant partitions during queries." },
      { id: "b", label: "Splitting database user accounts across multiple departments." },
      { id: "c", label: "Formatting hard drive partitions into FAT32 filesystem." },
      { id: "d", label: "Limiting SQL queries to 50 characters in length." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_gro_08",
    section: "growth",
    prompt: "What is Database Connection Pooling (e.g. PgBouncer, HikariCP) in high-concurrency web application architectures?",
    options: [
      { id: "a", label: "Maintaining a cache of pre-established, reusable database connections, eliminating the high CPU/memory latency overhead of repeatedly opening and closing TCP connections and backend database process forks." },
      { id: "b", label: "Merging multiple databases into a single cloud subscription." },
      { id: "c", label: "A tool that pools employee database passwords." },
      { id: "d", label: "A shared network cable connecting multiple servers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_gro_09",
    section: "growth",
    prompt: "What is the N+1 Query Problem in Object-Relational Mapping (ORM) frameworks (Hibernate, Prisma, SQLAlchemy)?",
    options: [
      { id: "a", label: "An application executes 1 initial query to fetch N parent records, and then makes N individual subsequent queries to fetch related child records, causing severe database network roundtrip latency (mitigated via eager loading / JOIN fetching)." },
      { id: "b", label: "A mathematical error when calculating averages in SQL." },
      { id: "c", label: "An issue where a table has N+1 primary keys." },
      { id: "d", label: "A server crash caused by having N+1 database users." }
    ],
    correctOptionId: "a"
  },
  {
    id: "sql_gro_10",
    section: "growth",
    prompt: "What is a Materialized View (`CREATE MATERIALIZED VIEW`) and when should it be used over a standard View?",
    options: [
      { id: "a", label: "A view that physically stores the query results on disk and can be indexed, ideal for complex, expensive aggregation queries across massive datasets that are periodically refreshed rather than computed on every read." },
      { id: "b", label: "A 3D graphical representation of database relationships." },
      { id: "c", label: "A view that is only accessible on mobile devices." },
      { id: "d", label: "A view that automatically deletes underlying table data." }
    ],
    correctOptionId: "a"
  }
];

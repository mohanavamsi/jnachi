import { CertQuestion } from '../types';

export const BUILDER_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'bld_priv_01',
    section: 'privacy',
    prompt: 'What is a "Prompt Injection" attack (direct vs indirect)?',
    options: [
      { id: 'a', label: 'Direct: user input overrides system instructions; Indirect: untrusted third-party data (webpage, email) contains malicious instructions executed by the LLM.' },
      { id: 'b', label: 'Direct: executing SQL injection in database fields; Indirect: physical malware on a USB drive.' },
      { id: 'c', label: 'Direct: hardware memory overflow; Indirect: high network latency.' },
      { id: 'd', label: 'Direct: compiling invalid C++ code; Indirect: typing in lowercase.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_02',
    section: 'privacy',
    prompt: 'How can a builder mitigate indirect prompt injection when an agent reads incoming user emails or web pages?',
    options: [
      { id: 'a', label: 'Execute any shell commands found in email text with elevated root privileges.' },
      { id: 'b', label: 'Treat all incoming external text as verified system-level commands.' },
      { id: 'c', label: 'Isolate untrusted data within strict XML tags (e.g. <untrusted_data>), instruct model to treat content solely as passive text, and restrict agent tool privileges.' },
      { id: 'd', label: 'Permanently disable all agent tools upon reading a single email.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'bld_priv_03',
    section: 'privacy',
    prompt: 'When building a RAG system over proprietary enterprise documents, how is "access control / ACL enforcement" properly implemented?',
    options: [
      { id: 'a', label: 'Store database credentials in plaintext inside the client system prompt.' },
      { id: 'b', label: 'Provide all authenticated users with global read access to the full vector index.' },
      { id: 'c', label: 'Rely on LLM conversational memory to decide who is authorized to view confidential documents.' },
      { id: 'd', label: 'Filter vector search queries with tenant and user permission metadata so the model only retrieves documents the active user is authorized to read.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'bld_priv_04',
    section: 'privacy',
    prompt: 'What is "Data Poisoning" in the context of custom RAG knowledge bases or fine-tuning datasets?',
    options: [
      { id: 'a', label: 'Accidentally deleting empty markdown files from repository folders.' },
      { id: 'b', label: 'An adversary injects subtly corrupted, biased, or backdoor-laden documents into the retrieval corpus to manipulate future model outputs.' },
      { id: 'c', label: 'Upgrading database server software to the latest stable release.' },
      { id: 'd', label: 'Hardware server cooling system leaks.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'bld_priv_05',
    section: 'privacy',
    prompt: 'Why must API keys for AI providers NEVER be embedded in client-side mobile or frontend browser code?',
    options: [
      { id: 'a', label: 'Anyone can inspect client bundles, extract the secret key, drain API balances, and access unauthorized company endpoints.' },
      { id: 'b', label: 'Frontend browser JavaScript cannot send HTTPS network requests.' },
      { id: 'c', label: 'Client-side API keys automatically expire after 10 milliseconds.' },
      { id: 'd', label: 'Frontend web frameworks do not support string authentication headers.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_06',
    section: 'privacy',
    prompt: 'What is the "Principle of Least Privilege" applied to AI tool / function calling capabilities?',
    options: [
      { id: 'a', label: 'Granting the agent unrestricted root administrator privileges on production databases.' },
      { id: 'b', label: 'Allowing the agent to execute arbitrary Bash shell scripts without argument validation.' },
      { id: 'c', label: 'Prohibiting the agent from returning any responses to the user.' },
      { id: 'd', label: 'Only grant the agent access to the minimal set of specific API tools, read-only permissions, and restricted scopes required for its task.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'bld_priv_07',
    section: 'privacy',
    prompt: 'How should sensitive personally identifiable information (PII) logs be handled in production AI observability platforms?',
    options: [
      { id: 'a', label: 'Stream unmasked prompt payloads to publicly accessible logging dashboards.' },
      { id: 'b', label: 'Scrub and mask PII fields before persisting traces/logs, enforce strict retention TTLs, and restrict log access via RBAC.' },
      { id: 'c', label: 'Persist raw prompts on unencrypted public object storage buckets indefinitely.' },
      { id: 'd', label: 'Disable observability completely and log zero application errors.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'bld_priv_08',
    section: 'privacy',
    prompt: 'What is "membership inference attack" in machine learning?',
    options: [
      { id: 'a', label: 'A brute-force guessing attack against account login passwords.' },
      { id: 'b', label: 'An unauthorized user subscribing to a paid SaaS tier without valid payment.' },
      { id: 'c', label: 'An attacker queries a model to determine whether a specific individual\'s private data was part of the model\'s training dataset.' },
      { id: 'd', label: 'Adding unauthorized bot accounts to internal communication channels.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'bld_priv_09',
    section: 'privacy',
    prompt: 'When building AI features in healthcare applications, which compliance framework is mandatory in the United States?',
    options: [
      { id: 'a', label: 'HIPAA (with signed Business Associate Agreements ensuring encrypted, non-retained Protected Health Information handling).' },
      { id: 'b', label: 'DMCA (Digital Millennium Copyright Act).' },
      { id: 'c', label: 'PCI-DSS (Payment Card Industry Data Security Standard).' },
      { id: 'd', label: 'OSHA Workplace Safety Standards.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_10',
    section: 'privacy',
    prompt: 'What is the ethical responsibility of an engineer building automated decision-making pipelines that affect human livelihoods (e.g. credit, jobs)?',
    options: [
      { id: 'a', label: 'Maximize execution speed regardless of disparate impact or demographic bias.' },
      { id: 'b', label: 'Hide all scoring logic from regulatory compliance auditors.' },
      { id: 'c', label: 'Erase all decision logs immediately following automated scoring.' },
      { id: 'd', label: 'Ensure explainability, auditable decision logs, bias testing across demographic subgroups, and appeal mechanisms with human review.' },
    ],
    correctOptionId: 'd',
  },
];

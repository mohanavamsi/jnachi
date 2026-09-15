import { CertQuestion } from '../types';

export const BUILDER_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'bld_priv_01',
    section: 'privacy',
    prompt: 'What is a "Prompt Injection" attack (direct vs indirect)?',
    options: [
      { id: 'a', label: 'Direct: user input overrides system instructions; Indirect: untrusted third-party data (webpage, email) contains malicious instructions executed by the LLM.' },
      { id: 'b', label: 'SQL database corruption from an unescaped string.' },
      { id: 'c', label: 'Physical injection of malware into a USB port.' },
      { id: 'd', label: 'A model running out of memory.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_02',
    section: 'privacy',
    prompt: 'How can a builder mitigate indirect prompt injection when an agent reads incoming user emails or web pages?',
    options: [
      { id: 'a', label: 'Isolate untrusted data within strict XML tags (e.g. <untrusted_data>), instruct model to treat content solely as passive text, and restrict agent tool privileges.' },
      { id: 'b', label: 'Trust all emails blindly as system instructions.' },
      { id: 'c', label: 'Execute any shell commands found in email text immediately.' },
      { id: 'd', label: 'Delete the agent after reading one email.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_03',
    section: 'privacy',
    prompt: 'When building a RAG system over proprietary enterprise documents, how is "access control / ACL enforcement" properly implemented?',
    options: [
      { id: 'a', label: 'Filter vector search queries with tenant and user permission metadata so the model only retrieves documents the active user is authorized to read.' },
      { id: 'b', label: 'Rely on the LLM to remember which employee is allowed to see which file.' },
      { id: 'c', label: 'Give every employee access to the entire company database.' },
      { id: 'd', label: 'Put passwords in plaintext inside the system prompt.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_04',
    section: 'privacy',
    prompt: 'What is "Data Poisoning" in the context of custom RAG knowledge bases or fine-tuning datasets?',
    options: [
      { id: 'a', label: 'An adversary injects subtly corrupted, biased, or backdoor-laden documents into the retrieval corpus to manipulate future model outputs.' },
      { id: 'b', label: 'Spilling liquid on a server rack.' },
      { id: 'c', label: 'Deleting empty text files.' },
      { id: 'd', label: 'Upgrading the database version.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_05',
    section: 'privacy',
    prompt: 'Why must API keys for AI providers NEVER be embedded in client-side mobile or frontend browser code?',
    options: [
      { id: 'a', label: 'Anyone can inspect client bundles, extract the secret key, drain API balances, and access unauthorized company endpoints.' },
      { id: 'b', label: 'Browser JavaScript cannot send network requests.' },
      { id: 'c', label: 'API keys expire every 5 seconds on the frontend.' },
      { id: 'd', label: 'Frontend code does not support strings.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_06',
    section: 'privacy',
    prompt: 'What is the "Principle of Least Privilege" applied to AI tool / function calling capabilities?',
    options: [
      { id: 'a', label: 'Only grant the agent access to the minimal set of specific API tools, read-only permissions, and restricted scopes required for its task.' },
      { id: 'b', label: 'Give the agent root administrator access to all servers.' },
      { id: 'c', label: 'Forbid the agent from using any tools.' },
      { id: 'd', label: 'Allow the agent to delete production databases at will.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_07',
    section: 'privacy',
    prompt: 'How should sensitive personally identifiable information (PII) logs be handled in production AI observability platforms?',
    options: [
      { id: 'a', label: 'Scrub and mask PII fields before persisting traces/logs, enforce strict retention TTLs, and restrict log access via RBAC.' },
      { id: 'b', label: 'Post raw prompt logs to public Slack channels.' },
      { id: 'c', label: 'Store all logs unencrypted on public web servers.' },
      { id: 'd', label: 'Never log any errors.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_08',
    section: 'privacy',
    prompt: 'What is "membership inference attack" in machine learning?',
    options: [
      { id: 'a', label: 'An attacker queries a model to determine whether a specific individual\'s private data was part of the model\'s training dataset.' },
      { id: 'b', label: 'Joining a gym without paying membership fees.' },
      { id: 'c', label: 'Guessing a user\'s Wi-Fi password.' },
      { id: 'd', label: 'Inviting a bot to a Slack channel.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_09',
    section: 'privacy',
    prompt: 'When building AI features in healthcare applications, which compliance framework is mandatory in the United States?',
    options: [
      { id: 'a', label: 'HIPAA (with signed Business Associate Agreements ensuring encrypted, non-retained Protected Health Information handling).' },
      { id: 'b', label: 'DMCA.' },
      { id: 'c', label: 'PCI-DSS.' },
      { id: 'd', label: 'OSHA.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_priv_10',
    section: 'privacy',
    prompt: 'What is the ethical responsibility of an engineer building automated decision-making pipelines that affect human livelihoods (e.g. credit, jobs)?',
    options: [
      { id: 'a', label: 'Ensure explainability, auditable decision logs, bias testing across demographic subgroups, and appeal mechanisms with human review.' },
      { id: 'b', label: 'Maximize automation speed regardless of error rate.' },
      { id: 'c', label: 'Hide that an algorithm made the decision.' },
      { id: 'd', label: 'Delete all logs immediately after scoring.' },
    ],
    correctOptionId: 'a',
  },
];

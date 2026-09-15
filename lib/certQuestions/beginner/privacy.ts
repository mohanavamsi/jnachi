import { CertQuestion } from '../types';

export const BEGINNER_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'beg_priv_01',
    section: 'privacy',
    prompt: 'What is the crucial privacy difference between free consumer AI web chats and enterprise AI API services?',
    options: [
      { id: 'a', label: 'Free consumer tiers typically retain user prompts to train future foundation models, while enterprise agreements provide Zero Data Retention (ZDR) and strict confidentiality.' },
      { id: 'b', label: 'Consumer tiers use green fonts, while enterprise tiers use blue fonts.' },
      { id: 'c', label: 'Enterprise services do not use machine learning.' },
      { id: 'd', label: 'Consumer tiers are completely anonymous and never log anything.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_02',
    section: 'privacy',
    prompt: 'What constitutes Personally Identifiable Information (PII) that should NEVER be pasted into unvetted consumer AI tools?',
    options: [
      { id: 'a', label: 'Social Security / ID numbers, passport details, credit cards, medical records, and private customer contact databases.' },
      { id: 'b', label: 'Public Wikipedia articles.' },
      { id: 'c', label: 'Open-source code repositories.' },
      { id: 'd', label: 'Dictionary definitions of English words.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_03',
    section: 'privacy',
    prompt: 'What is a "personal red line" in ethical AI usage?',
    options: [
      { id: 'a', label: 'A conscious, non-negotiable boundary defining decisions or private topics where you will never delegate authority to an AI system.' },
      { id: 'b', label: 'A red pen used to mark printed papers.' },
      { id: 'c', label: 'A warning line drawn on the floor of a server room.' },
      { id: 'd', label: 'An error indicator in a spreadsheet.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_04',
    section: 'privacy',
    prompt: 'Before uploading an internal company report to an AI tool, what safety check should an employee perform?',
    options: [
      { id: 'a', label: 'Verify your company’s authorized AI tool list, check data classification policies, and scrub confidential client names or proprietary trade secrets.' },
      { id: 'b', label: 'Upload the document immediately if it is after 5 PM.' },
      { id: 'c', label: 'Rename the file so nobody knows what it is.' },
      { id: 'd', label: 'Assume all online AI tools are 100% compliant with company rules.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_05',
    section: 'privacy',
    prompt: 'What does "Zero Data Retention" (ZDR) mean in an AI enterprise contract?',
    options: [
      { id: 'a', label: 'The vendor processes the prompt in volatile memory for inference and does not persist, log, or train on the input/output after the request completes.' },
      { id: 'b', label: 'The model has zero memory during a single sentence.' },
      { id: 'c', label: 'The company deletes all internal databases weekly.' },
      { id: 'd', label: 'The tool is completely free of charge.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_06',
    section: 'privacy',
    prompt: 'Why is client-side data anonymization (e.g. replacing "Alice Smith at Acme Corp" with "[Client_A] at [Company_X]") a best practice?',
    options: [
      { id: 'a', label: 'If sensitive identifiers are never sent over the network to the AI provider, privacy breaches or data retention leaks are completely prevented.' },
      { id: 'b', label: 'It makes the AI model write faster.' },
      { id: 'c', label: 'It reduces the file size by 99%.' },
      { id: 'd', label: 'It enables voice mode.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_07',
    section: 'privacy',
    prompt: 'What is the risk of asking an AI tool to write performance reviews or evaluation feedback for colleagues using real names?',
    options: [
      { id: 'a', label: 'Potential leak of sensitive HR personnel data to external servers and violation of workplace confidentiality agreements.' },
      { id: 'b', label: 'The computer might run out of disk space.' },
      { id: 'c', label: 'The colleague will receive an automatic SMS.' },
      { id: 'd', label: 'The text will be permanently published on Google.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_08',
    section: 'privacy',
    prompt: 'How can an employee opt-out of model training on their data in major consumer AI tools (like ChatGPT or Claude)?',
    options: [
      { id: 'a', label: 'Navigate to Data Controls / Privacy Settings in the app and disable "Improve the model for everyone" or turn off chat history.' },
      { id: 'b', label: 'Type "PLEASE DO NOT TRAIN" in every prompt message.' },
      { id: 'c', label: 'Use an incognito browser window without changing settings.' },
      { id: 'd', label: 'Unplug your router during generation.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_09',
    section: 'privacy',
    prompt: 'What is "algorithmic bias" in AI model outputs?',
    options: [
      { id: 'a', label: 'Systematic, unfair skews or stereotypes in model behavior reflecting demographic prejudices or imbalances present in historical training datasets.' },
      { id: 'b', label: 'A hardware malfunction in computer RAM.' },
      { id: 'c', label: 'A model preferring one programming language over another.' },
      { id: 'd', label: 'Typing with spelling mistakes.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_10',
    section: 'privacy',
    prompt: 'Who bears final legal and professional accountability for errors, copyright violations, or privacy leaks in AI-assisted work?',
    options: [
      { id: 'a', label: 'The human professional who submitted the prompt and published/deployed the final output.' },
      { id: 'b', label: 'The AI model itself.' },
      { id: 'c', label: 'The computer manufacturer.' },
      { id: 'd', label: 'Nobody bears any accountability.' },
    ],
    correctOptionId: 'a',
  },
];

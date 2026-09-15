import { CertQuestion } from '../types';

export const BEGINNER_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'beg_priv_01',
    section: 'privacy',
    prompt: 'What is the crucial privacy difference between free consumer AI web chats and enterprise AI API services?',
    options: [
      { id: 'a', label: 'Enterprise services run locally without using any internet connection or cloud processing.' },
      { id: 'b', label: 'Consumer tiers are completely anonymous and never log any telemetry or prompt data.' },
      { id: 'c', label: 'Free consumer tiers typically retain user prompts to train future foundation models, while enterprise agreements provide Zero Data Retention (ZDR) and strict confidentiality.' },
      { id: 'd', label: 'Consumer tiers encrypt data with government keys, while enterprise tiers make prompts public.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'beg_priv_02',
    section: 'privacy',
    prompt: 'What constitutes Personally Identifiable Information (PII) that should NEVER be pasted into unvetted consumer AI tools?',
    options: [
      { id: 'a', label: 'Social Security / national ID numbers, financial account details, medical records, and private customer contact databases.' },
      { id: 'b', label: 'Public Wikipedia reference articles and open encyclopedias.' },
      { id: 'c', label: 'Open-source software documentation and public repository links.' },
      { id: 'd', label: 'Standard dictionary definitions of English vocabulary words.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_03',
    section: 'privacy',
    prompt: 'What is a "personal red line" in ethical AI usage?',
    options: [
      { id: 'a', label: 'A mechanical circuit limit on GPU computing clusters.' },
      { id: 'b', label: 'A red underline in text editors indicating grammar errors.' },
      { id: 'c', label: 'A firewall setting that blocks all outbound internet traffic.' },
      { id: 'd', label: 'A conscious, non-negotiable boundary defining decisions or sensitive topics where you will never delegate authority to an AI system.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'beg_priv_04',
    section: 'privacy',
    prompt: 'Before uploading an internal company report to an AI tool, what safety check should an employee perform?',
    options: [
      { id: 'a', label: 'Rename the file extension so security scanners do not recognize the format.' },
      { id: 'b', label: 'Verify company authorized AI tool lists, check data classification policies, and scrub confidential client names or proprietary trade secrets.' },
      { id: 'c', label: 'Upload the document immediately as long as it is done during non-business hours.' },
      { id: 'd', label: 'Assume all commercial AI services automatically comply with your employer\'s specific security policy.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'beg_priv_05',
    section: 'privacy',
    prompt: 'What does "Zero Data Retention" (ZDR) mean in an AI enterprise contract?',
    options: [
      { id: 'a', label: 'The vendor processes the prompt in volatile memory for inference and does not persist, log, or train on the input/output after the request completes.' },
      { id: 'b', label: 'The model has zero memory during a single conversational exchange.' },
      { id: 'c', label: 'The customer agrees to delete all local corporate backups every 30 days.' },
      { id: 'd', label: 'The API provider delivers inference results free of charge.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_06',
    section: 'privacy',
    prompt: 'Why is client-side data anonymization (e.g. replacing "Alice Smith at Acme Corp" with "[Client_A] at [Company_X]") a best practice?',
    options: [
      { id: 'a', label: 'It guarantees the generated text will be 100% grammatically correct.' },
      { id: 'b', label: 'It reduces the latency of the model inference by 50%.' },
      { id: 'c', label: 'If sensitive identifiers are never sent over the network to the AI provider, privacy breaches or training data leaks are completely prevented.' },
      { id: 'd', label: 'It converts the model output directly into encrypted bytecode.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'beg_priv_07',
    section: 'privacy',
    prompt: 'What is the risk of asking an AI tool to write performance reviews or evaluation feedback for colleagues using real names?',
    options: [
      { id: 'a', label: 'The AI service will automatically send the draft to the colleague via email.' },
      { id: 'b', label: 'Potential leakage of sensitive HR personnel records to external vendor servers, violating workplace privacy policies.' },
      { id: 'c', label: 'It causes the user\'s local disk drive to become corrupted.' },
      { id: 'd', label: 'The AI model will refuse to generate any text containing human names.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'beg_priv_08',
    section: 'privacy',
    prompt: 'How can an employee opt-out of model training on their data in major consumer AI tools (like ChatGPT or Claude)?',
    options: [
      { id: 'a', label: 'Include "PLEASE DO NOT TRAIN ON THIS" at the start of every chat message.' },
      { id: 'b', label: 'Use an incognito browser window without changing any platform settings.' },
      { id: 'c', label: 'Disconnect from the internet immediately after clicking generate.' },
      { id: 'd', label: 'Navigate to Data Controls / Privacy Settings in the app and disable "Improve the model for everyone" or turn off chat history training.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'beg_priv_09',
    section: 'privacy',
    prompt: 'What is "algorithmic bias" in AI model outputs?',
    options: [
      { id: 'a', label: 'Systematic, unfair skews or stereotypes in model behavior reflecting demographic prejudices or imbalances present in historical training datasets.' },
      { id: 'b', label: 'A hardware arithmetic error that occurs when dividing by zero.' },
      { id: 'c', label: 'A user\'s personal subjective opinion about the aesthetics of an AI interface.' },
      { id: 'd', label: 'An intentional security measure to restrict model access by IP address.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_priv_10',
    section: 'privacy',
    prompt: 'Who bears final legal and professional accountability for errors, copyright violations, or privacy leaks in AI-assisted work?',
    options: [
      { id: 'a', label: 'The cloud service provider hosting the AI hardware infrastructure.' },
      { id: 'b', label: 'The open-source algorithm authors who created the neural network architecture.' },
      { id: 'c', label: 'The human professional who submitted the prompt and reviewed, approved, or published the final output.' },
      { id: 'd', label: 'The AI model itself through its registered corporate entity.' },
    ],
    correctOptionId: 'c',
  },
];

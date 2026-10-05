import { CertQuestion } from '../types';

export const COMPUTER_BASICS_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: "comp_priv_01",
    section: "privacy",
    prompt: "What is the primary security role of a Network Firewall in computer systems?",
    options: [
      { id: "a", label: "Inspecting incoming and outgoing network traffic against configured security rule-sets to block unauthorized access and malicious network scans." },
      { id: "b", label: "Cooling physical CPU heatsinks during high computing loads." },
      { id: "c", label: "Increasing hard drive capacity by compressing video files." },
      { id: "d", label: "Generating automatic responses to customer support emails." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_priv_02",
    section: "privacy",
    prompt: "What is the distinction between Symmetric and Asymmetric Encryption in data security?",
    options: [
      { id: "a", label: "Symmetric uses the same shared secret key for encryption and decryption (e.g. AES); Asymmetric uses a mathematically linked public-private key pair (e.g. RSA, ECC)." },
      { id: "b", label: "Symmetric only encrypts numbers; Asymmetric only encrypts passwords." },
      { id: "c", label: "Asymmetric encryption does not use algorithms." },
      { id: "d", label: "Symmetric encryption requires quantum computers to decode." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_priv_03",
    section: "privacy",
    prompt: "What is a Denial-of-Service (DoS) or Distributed Denial-of-Service (DDoS) attack?",
    options: [
      { id: "a", label: "Flooding a target server, service, or network with overwhelming volumes of illegitimate traffic to exhaust system resources and render it inaccessible to legitimate users." },
      { id: "b", label: "Stealing passwords by guessing dictionary words on an offline database." },
      { id: "c", label: "Physically unplugging power cables inside a server room." },
      { id: "d", label: "Injecting malicious SQL syntax into a web login form." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_priv_04",
    section: "privacy",
    prompt: "Why is Multi-Factor Authentication (MFA) significantly more secure than a single password authentication mechanism?",
    options: [
      { id: "a", label: "It requires evidence from at least two distinct categories: something you know (password), something you have (security token/phone), or something you are (biometrics), preventing compromise via leaked credentials alone." },
      { id: "b", label: "It eliminates the need for software updates on user machines." },
      { id: "c", label: "It automatically encrypts the local network with quantum cryptography." },
      { id: "d", label: "It doubles CPU processing speeds during cryptographic hashes." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_priv_05",
    section: "privacy",
    prompt: "What is the purpose of hashing algorithms like SHA-256 in password storage and data integrity verification?",
    options: [
      { id: "a", label: "Creating a fixed-length irreversible cryptographic digest; even a 1-bit change in input drastically changes the resulting hash (avalanche effect), preventing reversible plaintext exposure." },
      { id: "b", label: "Compressing large video files for email transmission." },
      { id: "c", label: "Translating IPv6 addresses into human-readable website URLs." },
      { id: "d", label: "Accelerating memory transfer between L2 cache and motherboard chipset." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_priv_06",
    section: "privacy",
    prompt: "What is a 'Zero-Day Vulnerability' in computer security?",
    options: [
      { id: "a", label: "A software security flaw that is unknown to the vendor and has zero days of patch availability, leaving systems vulnerable to active exploitation until a patch is released." },
      { id: "b", label: "A computer clock error that occurs on January 1st." },
      { id: "c", label: "A trial software license that expires in 24 hours." },
      { id: "d", label: "A system backup that took zero minutes to complete." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_priv_07",
    section: "privacy",
    prompt: "What security danger is mitigated by configuring Principle of Least Privilege (PoLP) across operating systems and user accounts?",
    options: [
      { id: "a", label: "Users and processes are granted only the minimum access levels required to perform their explicit functions, minimizing blast radius if an account is compromised." },
      { id: "b", label: "It prevents users from connecting external USB monitors." },
      { id: "c", label: "It automatically deletes duplicate files across the network." },
      { id: "d", label: "It increases battery life on portable laptops." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_priv_08",
    section: "privacy",
    prompt: "What is a Man-in-the-Middle (MitM) network attack, and what primary defense neutralizes it?",
    options: [
      { id: "a", label: "An attacker intercepts and potentially alters communication between two endpoints; End-to-End Encryption with verified TLS certificates prevents unauthorized reading or tampering." },
      { id: "b", label: "An attacker changes the physical motherboard battery; replaced by thermal paste." },
      { id: "c", label: "An employee unplugging an Ethernet cable; defended by cable locks." },
      { id: "d", label: "A browser displaying pop-up advertisements; defended by ad blockers." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_priv_09",
    section: "privacy",
    prompt: "What is Ransomware, and what represents the most robust recovery strategy against it?",
    options: [
      { id: "a", label: "Malicious software that encrypts victim data and demands payment for decryption keys; immutable, air-gapped offline backups provide guaranteed recovery without paying ransoms." },
      { id: "b", label: "A hardware failure in RAM sticks resolved by cooling fans." },
      { id: "c", label: "A web browser caching too many temporary cookies." },
      { id: "d", label: "A routine database indexing maintenance script." }
    ],
    correctOptionId: "a"
  },
  {
    id: "comp_priv_10",
    section: "privacy",
    prompt: "In operating system access control, what is the significance of the root (Linux) or Administrator (Windows) superuser account?",
    options: [
      { id: "a", label: "It possesses unrestricted privileges over all files, kernel parameters, hardware devices, and user accounts, requiring strict auditing and sudo/elevation protections." },
      { id: "b", label: "It is an unchangeable guest profile used for anonymous web browsing." },
      { id: "c", label: "It is a background daemon that clears printer queues." },
      { id: "d", label: "It is a read-only account that cannot modify system settings." }
    ],
    correctOptionId: "a"
  }
];

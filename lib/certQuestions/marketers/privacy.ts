import { CertQuestion } from '../types';

export const MARKETERS_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "mkt_priv_01",
    "section": "privacy",
    "prompt": "Under FTC guidelines, what is required when publishing sponsored marketing content or AI-generated influencer endorsements?",
    "options": [
      {
        "id": "a",
        "label": "Hiding sponsorship disclosures at the bottom of long terms of service pages."
      },
      {
        "id": "b",
        "label": "Clear, conspicuous upfront disclosure of commercial relationships (e.g., #ad, #sponsored) and transparent disclosure if the endorsement or persona is synthetically generated."
      },
      {
        "id": "c",
        "label": "Claiming that paid influencers bought the product with their own money when they did not."
      },
      {
        "id": "d",
        "label": "No disclosure is required if the post receives fewer than 1,000 views."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_priv_02",
    "section": "privacy",
    "prompt": "What copyright and commercial risk must brand teams evaluate when using AI-generated imagery in global advertising campaigns?",
    "options": [
      {
        "id": "a",
        "label": "Verifying enterprise commercial indemnification terms, checking for accidental generation of trademarked characters/logos, and ensuring the work is eligible for legal trademark/copyright protection."
      },
      {
        "id": "b",
        "label": "Assuming all images found on Google Images can be used commercially without permission."
      },
      {
        "id": "c",
        "label": "Using copyrighted celebrity likenesses in ads without signing commercial licensing releases."
      },
      {
        "id": "d",
        "label": "Generating counterfeit luxury logos for product packaging."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_priv_03",
    "section": "privacy",
    "prompt": "Under GDPR and the ePrivacy Directive, what is mandatory before firing advertising tracking pixels (e.g. Meta Pixel, TikTok Pixel)?",
    "options": [
      {
        "id": "a",
        "label": "Firing all tracking pixels immediately upon page load and assuming consent."
      },
      {
        "id": "b",
        "label": "Pre-ticking all consent checkboxes by default."
      },
      {
        "id": "c",
        "label": "Refusing to let users decline tracking cookies."
      },
      {
        "id": "d",
        "label": "Explicit, affirmative opt-in consent from the user via an unbundled cookie banner before non-essential tracking cookies or pixels execute."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_priv_04",
    "section": "privacy",
    "prompt": "What legal requirements are enforced by the CAN-SPAM Act for all commercial promotional marketing emails?",
    "options": [
      {
        "id": "a",
        "label": "Using fake sender names to trick users into opening emails."
      },
      {
        "id": "b",
        "label": "Charging users a monetary fee to unsubscribe."
      },
      {
        "id": "c",
        "label": "Accurate header information, non-deceptive subject lines, clear physical postal address, and a functional one-click unsubscribe mechanism honored within 10 business days."
      },
      {
        "id": "d",
        "label": "Hiding the physical company address."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_priv_05",
    "section": "privacy",
    "prompt": "When uploading customer email lists to advertising platforms for Lookalike Audience targeting, how must data be protected?",
    "options": [
      {
        "id": "a",
        "label": "Uploading unencrypted CSV files containing customer plaintext passwords and credit card numbers."
      },
      {
        "id": "b",
        "label": "Data must be cryptographically hashed (SHA-256) locally in the browser or via secure API before transmission, adhering to enterprise privacy policies and user opt-out choices."
      },
      {
        "id": "c",
        "label": "Sharing customer email lists with third-party data brokers on public forums."
      },
      {
        "id": "d",
        "label": "Using customer data without providing privacy policy notices."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_priv_06",
    "section": "privacy",
    "prompt": "How should brands defend against unauthorized AI deepfakes and brand impersonation in fraudulent online ads?",
    "options": [
      {
        "id": "a",
        "label": "Continuous automated ad network monitoring, trademark registration with major ad platforms (Meta/Google), fast-track DMCA/cease-and-desist takedown procedures, and cryptographic brand asset verification."
      },
      {
        "id": "b",
        "label": "Ignoring brand impersonation and assuming customers know the difference."
      },
      {
        "id": "c",
        "label": "Creating fake counter-ads that impersonate other brands."
      },
      {
        "id": "d",
        "label": "Shutting down the company's official website."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_priv_07",
    "section": "privacy",
    "prompt": "What constitutes an ethical and legal boundary when scraping competitor pricing or blog data with automated bots?",
    "options": [
      {
        "id": "a",
        "label": "DDoS attacking the competitor's server while scraping."
      },
      {
        "id": "b",
        "label": "Bypassing password-protected member portals to steal confidential databases."
      },
      {
        "id": "c",
        "label": "Copy-pasting competitor articles verbatim onto your own blog."
      },
      {
        "id": "d",
        "label": "Respecting `robots.txt` guidelines, maintaining low request rate limits to avoid server degradation, and avoiding scraping copyrighted editorial text or private authenticated portals."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_priv_08",
    "section": "privacy",
    "prompt": "Under the California Privacy Rights Act (CPRA), what mandatory link must appear on websites that share data with ad networks?",
    "options": [
      {
        "id": "a",
        "label": "A link asking consumers to donate money to the marketing team."
      },
      {
        "id": "b",
        "label": "A link that automatically downloads tracking malware."
      },
      {
        "id": "c",
        "label": "A clear, conspicuous \"Do Not Sell or Share My Personal Information\" link in the website footer allowing consumers to opt out of cross-context behavioral advertising."
      },
      {
        "id": "d",
        "label": "No link is required under California law."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_priv_09",
    "section": "privacy",
    "prompt": "How did Apple's App Tracking Transparency (ATT) framework change mobile growth marketing measurement?",
    "options": [
      {
        "id": "a",
        "label": "It banned all mobile advertising on iPhones permanently."
      },
      {
        "id": "b",
        "label": "It required explicit user opt-in before tracking IDFA across third-party apps, shifting performance marketing toward aggregated privacy-centric frameworks (SKAdNetwork / Conversion APIs)."
      },
      {
        "id": "c",
        "label": "It made mobile app downloads 100% free of charge."
      },
      {
        "id": "d",
        "label": "It allowed advertisers to track users without consent."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_priv_10",
    "section": "privacy",
    "prompt": "Under the Children's Online Privacy Protection Act (COPPA), what rule applies to marketing websites directed at children under 13?",
    "options": [
      {
        "id": "a",
        "label": "Strict prohibition on collecting personal information (including persistent tracking cookies and geolocation) without verified parental consent."
      },
      {
        "id": "b",
        "label": "Encouraging children to submit their parents' credit card numbers without consent."
      },
      {
        "id": "c",
        "label": "Targeting behavioral retargeting ads to toddlers."
      },
      {
        "id": "d",
        "label": "COPPA only applies to radio broadcasts."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_priv_11",
    "section": "privacy",
    "prompt": "How must ad targeting algorithms comply with anti-discrimination laws (e.g. Fair Housing Act / Equal Credit Opportunity Act)?",
    "options": [
      {
        "id": "a",
        "label": "Target job postings exclusively to one specific gender."
      },
      {
        "id": "b",
        "label": "Exclude specific ethnic neighborhoods from seeing mortgage ads."
      },
      {
        "id": "c",
        "label": "Assume ad algorithms are exempt from federal civil rights laws."
      },
      {
        "id": "d",
        "label": "Prohibit targeting or excluding audiences based on protected demographic classes (race, gender, religion, familial status, postal zip-code proxies) for housing, credit, and employment ads."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_priv_12",
    "section": "privacy",
    "prompt": "What is the legal requirement when using voice synthesis to mimic a famous person's voice in a commercial advertisement?",
    "options": [
      {
        "id": "a",
        "label": "Using AI voice clones without permission as long as you add a tiny disclaimer in 4pt font."
      },
      {
        "id": "b",
        "label": "Claiming the voice was generated by an algorithm so no consent is needed."
      },
      {
        "id": "c",
        "label": "Securing an explicit commercial Right of Publicity license and written consent from the individual or their estate; unauthorized soundalike imitations violate Lanham Act and state publicity laws."
      },
      {
        "id": "d",
        "label": "Right of publicity only applies to visual photographs."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_priv_13",
    "section": "privacy",
    "prompt": "What is a Data Processing Agreement (DPA) and why must marketing operations sign one with tech vendors?",
    "options": [
      {
        "id": "a",
        "label": "A discount coupon for software subscriptions."
      },
      {
        "id": "b",
        "label": "A legally binding contract governing how the vendor processes customer data, specifying data security obligations, breach notification SLAs, sub-processor lists, and audit rights under GDPR/CCPA."
      },
      {
        "id": "c",
        "label": "An agreement allowing vendors to sell your customer database to third parties."
      },
      {
        "id": "d",
        "label": "A document that eliminates all data privacy laws."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_priv_14",
    "section": "privacy",
    "prompt": "How should marketing automation platforms execute a customer \"Right to Erasure\" (GDPR Article 17) request?",
    "options": [
      {
        "id": "a",
        "label": "Cascade the deletion request across marketing automation platforms (HubSpot/Marketo), customer data platforms (Segment), CRM instances, and advertising custom audience lists."
      },
      {
        "id": "b",
        "label": "Delete the user from the newsletter list but keep sending them SMS messages."
      },
      {
        "id": "c",
        "label": "Ignore the request if the customer was an active buyer."
      },
      {
        "id": "d",
        "label": "Email the customer asking them to pay an administrative fee to be deleted."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_priv_15",
    "section": "privacy",
    "prompt": "What ethical principle governs the use of behavioral psychographic AI targeting in advertising?",
    "options": [
      {
        "id": "a",
        "label": "Exploiting user psychological grief or panic to maximize impulse purchases."
      },
      {
        "id": "b",
        "label": "Targeting predatory payday loans to consumers expressing financial distress on social media."
      },
      {
        "id": "c",
        "label": "Using subliminal psychological messaging without user awareness."
      },
      {
        "id": "d",
        "label": "Avoiding exploitative manipulation of vulnerable emotional states, respecting cognitive autonomy, providing transparency on targeting logic, and strictly adhering to ad platform ethical guidelines."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_priv_16",
    "section": "privacy",
    "prompt": "What legal document must be obtained before featuring a customer's company logo and executive quote in public marketing case studies?",
    "options": [
      {
        "id": "a",
        "label": "A casual verbal conversation with an intern at the customer company."
      },
      {
        "id": "b",
        "label": "No agreement is needed if the customer used your software once."
      },
      {
        "id": "c",
        "label": "A signed Customer Logo & Testimonial Release Agreement explicitly authorizing media channels, duration of use, and verified quote text approval."
      },
      {
        "id": "d",
        "label": "Copying the customer's logo from their website without asking."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_priv_17",
    "section": "privacy",
    "prompt": "How can marketing teams protect public-facing AI lead-capture chatbots from prompt injection and reputational hijacking?",
    "options": [
      {
        "id": "a",
        "label": "Allowing website visitors to instruct the chatbot to generate political propaganda."
      },
      {
        "id": "b",
        "label": "Strict system prompt boundaries, independent guardrail classifiers filtering inappropriate topics, restricting the bot to predefined company knowledge bases, and disabling arbitrary code execution."
      },
      {
        "id": "c",
        "label": "Giving the chatbot access to internal company financial payroll spreadsheets."
      },
      {
        "id": "d",
        "label": "Disabling moderation filters to make the chatbot seem authentic."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_priv_18",
    "section": "privacy",
    "prompt": "What transparency rule applies when brands deploy synthetic AI virtual influencers on social media platforms?",
    "options": [
      {
        "id": "a",
        "label": "Clear in-bio and in-post disclosure identifying the persona as an AI-generated synthetic character, ensuring audiences are not deceived into believing they are interacting with a real human."
      },
      {
        "id": "b",
        "label": "Deceiving audiences into believing the virtual influencer is a living human being."
      },
      {
        "id": "c",
        "label": "Fabricating fake human medical conditions for the synthetic avatar to gain sympathy."
      },
      {
        "id": "d",
        "label": "Disclosing AI identity only in a foreign language."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_priv_19",
    "section": "privacy",
    "prompt": "How should Product Marketing Managers protect confidential, unreleased product roadmap features when briefing external freelance copywriters?",
    "options": [
      {
        "id": "a",
        "label": "Post unreleased product roadmaps on public internet forums."
      },
      {
        "id": "b",
        "label": "Email unredacted source code to unvetted freelancers without contracts."
      },
      {
        "id": "c",
        "label": "Announce secret features on social media before the product is built."
      },
      {
        "id": "d",
        "label": "Execute Non-Disclosure Agreements (NDAs), provide watermarked briefings, restrict access to private repositories, and sanitize sensitive unannounced pricing or launch dates."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_priv_20",
    "section": "privacy",
    "prompt": "Under US law, what legal requirement differentiates a compliant promotional sweepstakes from an illegal lottery?",
    "options": [
      {
        "id": "a",
        "label": "Requiring participants to pay a $50 entry fee with no free entry option."
      },
      {
        "id": "b",
        "label": "Selecting winners based on personal favoritism rather than random drawing."
      },
      {
        "id": "c",
        "label": "\"No Purchase Necessary\" free alternate method of entry (AMOE), clear official rules, eligibility restrictions, odds disclosure, and void-where-prohibited clauses."
      },
      {
        "id": "d",
        "label": "Refusing to award the advertised prize to the winner."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_priv_21",
    "section": "privacy",
    "prompt": "In the post-cookie marketing landscape, what represents the highest-value, privacy-compliant asset for brand growth?",
    "options": [
      {
        "id": "a",
        "label": "Purchased third-party tracking cookie lists."
      },
      {
        "id": "b",
        "label": "First-party and zero-party data: direct, consented customer relationships, transparent value exchanges (newsletter subscriptions, customer community logins), and authenticated account data."
      },
      {
        "id": "c",
        "label": "Spyware installed on customer computers."
      },
      {
        "id": "d",
        "label": "Scraped unverified email directories."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_priv_22",
    "section": "privacy",
    "prompt": "What practice violates FTC regulations regarding customer reviews and testimonials (Review Gating)?",
    "options": [
      {
        "id": "a",
        "label": "Filtering review request workflows so that only satisfied customers are directed to public review sites while unhappy customers are diverted to private feedback forms."
      },
      {
        "id": "b",
        "label": "Encouraging all customers equally to post honest feedback on public platforms."
      },
      {
        "id": "c",
        "label": "Responding publicly to constructive negative reviews with helpful support solutions."
      },
      {
        "id": "d",
        "label": "Displaying both 5-star and 1-star reviews transparently on product pages."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_priv_23",
    "section": "privacy",
    "prompt": "Why did the US Department of Health and Human Services (HHS) issue strict guidance regarding tracking pixels on healthcare websites?",
    "options": [
      {
        "id": "a",
        "label": "Tracking pixels make hospital computers run out of ink."
      },
      {
        "id": "b",
        "label": "Healthcare websites are prohibited from using the internet."
      },
      {
        "id": "c",
        "label": "HHS guidance only applies to printed newspaper advertisements."
      },
      {
        "id": "d",
        "label": "Standard ad tracking pixels (Meta/Google) transmit IP addresses and health-related URL parameters, exposing Protected Health Information (PHI) to third parties without HIPAA-compliant BAAs."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_priv_24",
    "section": "privacy",
    "prompt": "What compliance mandate must marketing teams in financial services adhere to under FINRA / SEC regulations?",
    "options": [
      {
        "id": "a",
        "label": "Guaranteeing that stock investments will double in value every week."
      },
      {
        "id": "b",
        "label": "Deleting all promotional records after 24 hours to avoid regulatory inspection."
      },
      {
        "id": "c",
        "label": "Mandatory record-keeping of all published social media posts and ad copy, prominent risk disclaimers (\"past performance does not guarantee future results\"), and rigorous substantiation of performance claims."
      },
      {
        "id": "d",
        "label": "Financial marketing has no legal advertising regulations."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_priv_25",
    "section": "privacy",
    "prompt": "When transferring customer marketing data between the European Union and the United States, what framework governs legal transfer?",
    "options": [
      {
        "id": "a",
        "label": "Sending unencrypted customer lists via public email."
      },
      {
        "id": "b",
        "label": "EU-US Data Privacy Framework certification, or Standard Contractual Clauses (SCCs) with verified Transfer Impact Assessments (TIAs) ensuring equivalent data protection."
      },
      {
        "id": "c",
        "label": "Ignoring international data sovereignty laws."
      },
      {
        "id": "d",
        "label": "Storing all European data in unmonitored offshore servers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_priv_26",
    "section": "privacy",
    "prompt": "What legal risk arises when using automated dynamic pricing algorithms in e-commerce?",
    "options": [
      {
        "id": "a",
        "label": "Algorithmic collusion with competitor pricing bots violating antitrust laws, or illegal price discrimination based on protected personal characteristics."
      },
      {
        "id": "b",
        "label": "Dynamic pricing makes software run 10x slower."
      },
      {
        "id": "c",
        "label": "Credit card companies refuse to process dynamic prices."
      },
      {
        "id": "d",
        "label": "There is zero legal risk associated with automated pricing."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_priv_27",
    "section": "privacy",
    "prompt": "How do brand safety verification tools (e.g. IAS, DoubleVerify) protect corporate reputation on programmatic ad exchanges?",
    "options": [
      {
        "id": "a",
        "label": "Displaying ads exclusively on competitor websites."
      },
      {
        "id": "b",
        "label": "Blocking all human users from seeing advertisements."
      },
      {
        "id": "c",
        "label": "Brand safety tools automatically double the cost of all ad clicks."
      },
      {
        "id": "d",
        "label": "Pre-bid contextual analysis that prevents brand ads from serving alongside harmful content, hate speech, misinformation, or high-risk geopolitical disaster reporting."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_priv_28",
    "section": "privacy",
    "prompt": "What privacy protocol must brand marketing teams follow when featuring corporate employees in viral social media videos?",
    "options": [
      {
        "id": "a",
        "label": "Secretly filming employees without their knowledge."
      },
      {
        "id": "b",
        "label": "Threatening to terminate employees who do not want to dance in TikTok videos."
      },
      {
        "id": "c",
        "label": "Securing signed media appearance release forms, respecting employees who decline to be filmed, and establishing clear procedures for removing content upon employee departure if requested."
      },
      {
        "id": "d",
        "label": "Employee consent is never required for any corporate media."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_priv_29",
    "section": "privacy",
    "prompt": "Under FTC Green Guides regulations, what is required when marketing a product as \"Eco-Friendly\", \"Sustainable\", or \"Carbon-Neutral\"?",
    "options": [
      {
        "id": "a",
        "label": "Using green packaging colors with zero underlying environmental improvements."
      },
      {
        "id": "b",
        "label": "Clear, substantiated scientific evidence, avoiding broad unqualified environmental claims, and providing specific quantifiable lifecycle data."
      },
      {
        "id": "c",
        "label": "Claiming a product is 100% biodegradable when it takes 500 years to decompose."
      },
      {
        "id": "d",
        "label": "Environmental marketing claims are exempt from truth-in-advertising laws."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_priv_30",
    "section": "privacy",
    "prompt": "What is the ethical cornerstone of the Jnachi Certified AI Marketing Professional?",
    "options": [
      {
        "id": "a",
        "label": "Upholding uncompromising integrity, respecting user privacy, delivering genuine verifiable value, preventing deceptive synthetic generation, and building enduring customer trust."
      },
      {
        "id": "b",
        "label": "Maximizing short-term clickbait revenue at the expense of consumer welfare."
      },
      {
        "id": "c",
        "label": "Flooding the internet with unverified AI-generated misinformation."
      },
      {
        "id": "d",
        "label": "Treating consumer data privacy as an obstacle to bypass."
      }
    ],
    "correctOptionId": "a"
  }
];

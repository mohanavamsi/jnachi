import { CertQuestion } from '../types';

export const MARKETERS_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "mkt_lit_01",
    "section": "literacy",
    "prompt": "How should a brand marketing director calibrate an LLM prompt to capture an authentic, differentiated corporate voice?",
    "options": [
      {
        "id": "a",
        "label": "Prompt the AI with: \"Write viral marketing copy that sounds exciting.\""
      },
      {
        "id": "b",
        "label": "Provide explicit brand archetype descriptors, sentence length variety rules, a strict negative vocabulary list (banning generic tropes like \"game-changer\" or \"delve\"), and 3 few-shot examples of approved copy."
      },
      {
        "id": "c",
        "label": "Instruct the AI to copy competitor website copy verbatim."
      },
      {
        "id": "d",
        "label": "Rely solely on default out-of-the-box model tone settings."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_lit_02",
    "section": "literacy",
    "prompt": "When using AI to generate high-converting landing page headlines, which copywriting framework yields the most compelling results?",
    "options": [
      {
        "id": "a",
        "label": "PAS (Problem-Agitation-Solution) or Benefit-Driven Hook: clearly articulating the immediate operational relief, target persona, and quantifiable business outcome within 10 words."
      },
      {
        "id": "b",
        "label": "Writing a 5-paragraph philosophical essay as the hero headline."
      },
      {
        "id": "c",
        "label": "Listing 20 technical software acronyms without context."
      },
      {
        "id": "d",
        "label": "Using all-caps clickbait questions with zero product relevance."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_lit_03",
    "section": "literacy",
    "prompt": "How should a content marketer prompt an AI to adapt a 3,000-word technical whitepaper into a multi-channel campaign asset pack?",
    "options": [
      {
        "id": "a",
        "label": "Copy-paste the exact same 3,000-word text across all social media channels."
      },
      {
        "id": "b",
        "label": "Ask the AI to delete all data charts and statistics."
      },
      {
        "id": "c",
        "label": "Generate 100 unrelated memes."
      },
      {
        "id": "d",
        "label": "Provide the core thesis and instruct the model to produce distinct channel formats: a 5-tweet hook thread, a 150-word LinkedIn executive insight post, a 50-word newsletter teaser, and an infographic script."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_lit_04",
    "section": "literacy",
    "prompt": "What is \"Generative Engine Optimization\" (GEO) and how does it differ from traditional search engine keyword stuffing?",
    "options": [
      {
        "id": "a",
        "label": "Repeating the exact same keyword 500 times in white text on a white background."
      },
      {
        "id": "b",
        "label": "Buying thousands of low-quality spam backlinks from link farms."
      },
      {
        "id": "c",
        "label": "Structuring content with authoritative citations, concise statistical summaries, direct answer extracts, and structured data schema so AI search engines (e.g. Perplexity, SearchGPT) accurately cite your brand."
      },
      {
        "id": "d",
        "label": "Blocking search engine web crawlers from indexing your website."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_lit_05",
    "section": "literacy",
    "prompt": "When prompting an AI to draft an email subject line A/B test suite, what parameter variations should be requested?",
    "options": [
      {
        "id": "a",
        "label": "10 subject lines that only differ by changing the last punctuation mark."
      },
      {
        "id": "b",
        "label": "Diverse psychological angles: Curiosity Gap vs. Direct Value Proposition vs. Social Proof vs. Urgency/FOMO, constrained to under 45 characters for mobile inbox preview."
      },
      {
        "id": "c",
        "label": "Subject lines containing 300 words."
      },
      {
        "id": "d",
        "label": "Subject lines written entirely in foreign languages."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_lit_06",
    "section": "literacy",
    "prompt": "How should a performance marketer prompt an AI to generate Facebook / Google ad copy variations?",
    "options": [
      {
        "id": "a",
        "label": "Specify strict character limits per field (Headlines: 30 chars, Descriptions: 90 chars), test multiple hook angles (Pain vs Gain vs Stat), and align tightly with the destination landing page intent."
      },
      {
        "id": "b",
        "label": "Ask for a single generic sentence with no character constraints."
      },
      {
        "id": "c",
        "label": "Instruct the AI to promise unrealistic financial guarantees."
      },
      {
        "id": "d",
        "label": "Generate ad copy without any call-to-action (CTA)."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_lit_07",
    "section": "literacy",
    "prompt": "Why is it critical to fact-check and verify statistical data generated by an AI in B2B thought leadership articles?",
    "options": [
      {
        "id": "a",
        "label": "Search engines automatically delete articles containing numbers."
      },
      {
        "id": "b",
        "label": "Statistics are illegal in marketing content."
      },
      {
        "id": "c",
        "label": "AI models cannot output numeric digits."
      },
      {
        "id": "d",
        "label": "LLMs frequently synthesize plausible-sounding but completely fabricated statistical percentages and non-existent academic studies, destroying brand credibility if published."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_lit_08",
    "section": "literacy",
    "prompt": "How should a Product Marketing Manager (PMM) prompt an AI to create a competitive battlecard matrix?",
    "options": [
      {
        "id": "a",
        "label": "Ask the AI to generate defamatory personal insults about competitor executives."
      },
      {
        "id": "b",
        "label": "Instruct the AI to claim our product has every feature ever invented."
      },
      {
        "id": "c",
        "label": "Provide audited feature comparison tables, target buyer objections, verified pricing tiers, and prompt for our distinct moat differentiators, \"landmines\" to lay, and counter-positioning rebuttals."
      },
      {
        "id": "d",
        "label": "Generate a blank spreadsheet."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_lit_09",
    "section": "literacy",
    "prompt": "What prompt instruction ensures an AI crafts an engaging podcast interview outline for an executive host?",
    "options": [
      {
        "id": "a",
        "label": "Ask for a list of 50 yes/no questions."
      },
      {
        "id": "b",
        "label": "Provide the guest's background and contrarian industry thesis; prompt for 3 thematic narrative arcs, open-ended probing questions that avoid PR talking points, and provocative \"what if\" scenarios."
      },
      {
        "id": "c",
        "label": "Tell the host to read the guest's Wikipedia page aloud for 45 minutes."
      },
      {
        "id": "d",
        "label": "Instruct the AI to generate scripted arguments and insults."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_lit_10",
    "section": "literacy",
    "prompt": "How can an AI prompt be structured to create a comprehensive ICP (Ideal Customer Profile) persona guide?",
    "options": [
      {
        "id": "a",
        "label": "Specify industry, company ARR stage, job title, daily operational KPIs, professional fears/frustrations, purchasing triggers, internal gatekeeper hurdles, and preferred content consumption channels."
      },
      {
        "id": "b",
        "label": "Describe the persona only by their favorite ice cream flavor."
      },
      {
        "id": "c",
        "label": "Assume all humans on earth are identical buyers."
      },
      {
        "id": "d",
        "label": "Generate a single sentence stating the customer is rich."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_lit_11",
    "section": "literacy",
    "prompt": "When using generative image AI (e.g. Midjourney, DALL-E) for marketing visuals, what prompt structure delivers commercial-grade consistency?",
    "options": [
      {
        "id": "a",
        "label": "Type a single vague word like \"business\"."
      },
      {
        "id": "b",
        "label": "Ask for images with distorted watermarks and extra human fingers."
      },
      {
        "id": "c",
        "label": "Request copyrighted trademark logos directly inside the prompt."
      },
      {
        "id": "d",
        "label": "Specify subject, environment, photographic style (e.g. 35mm lens, cinematic studio lighting), curated color palette hex codes, aspect ratio (`--ar 16:9`), and negative prompts excluding uncanny artifacts."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_lit_12",
    "section": "literacy",
    "prompt": "How should a marketer prompt an AI to synthesize customer survey free-text responses into actionable product messaging insights?",
    "options": [
      {
        "id": "a",
        "label": "Delete all survey responses that contain constructive criticism."
      },
      {
        "id": "b",
        "label": "Ask the AI to replace all customer feedback with fictional glowing reviews."
      },
      {
        "id": "c",
        "label": "Ingest 500 raw survey comments, prompt to cluster recurring emotional pain phrases, extract exact verbatim customer vocabulary (\"voice of customer\"), and rank top purchase motivations."
      },
      {
        "id": "d",
        "label": "Count the total number of vowels in the text."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_lit_13",
    "section": "literacy",
    "prompt": "What copywriting technique prevents AI-generated marketing blogs from feeling repetitive and robotic?",
    "options": [
      {
        "id": "a",
        "label": "Using the phrase \"In conclusion\" at the beginning of every paragraph."
      },
      {
        "id": "b",
        "label": "Varying burstiness (alternating short punchy sentences with complex insights), incorporating original proprietary survey data, and infusing first-person practitioner anecdotes."
      },
      {
        "id": "c",
        "label": "Capitalizing every single word in the article."
      },
      {
        "id": "d",
        "label": "Repeating the introduction paragraph three times."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_lit_14",
    "section": "literacy",
    "prompt": "How should a growth marketer prompt an AI to develop a high-converting lead magnet concept (e.g. calculator, benchmark report)?",
    "options": [
      {
        "id": "a",
        "label": "Prompt for an interactive or downloadable asset that solves an acute, high-friction diagnostic question for the target persona within 5 minutes of consumption."
      },
      {
        "id": "b",
        "label": "Generate a 500-page dense textbook with no visual formatting."
      },
      {
        "id": "c",
        "label": "Create a generic coupon code for an unrelated product."
      },
      {
        "id": "d",
        "label": "Generate a zip file containing broken links."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_lit_15",
    "section": "literacy",
    "prompt": "When crafting PR press releases with an AI assistant, what formatting structure aligns with AP Style journalists' expectations?",
    "options": [
      {
        "id": "a",
        "label": "A fictional drama story with a surprise plot twist at the end."
      },
      {
        "id": "b",
        "label": "A raw bullet list of developer git commit messages."
      },
      {
        "id": "c",
        "label": "A 10-page academic thesis with no headline."
      },
      {
        "id": "d",
        "label": "Inverted Pyramid: compelling newsworthy lead (Who/What/When/Why) in paragraph 1, executive quote on strategic industry impact in paragraph 2, supporting proof points, and boilerplate at the end."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_lit_16",
    "section": "literacy",
    "prompt": "How should a marketer prompt an AI to design a re-engagement email sequence for lapsed webinar attendees?",
    "options": [
      {
        "id": "a",
        "label": "Send 5 emails in a single day demanding to know why they didn't show up."
      },
      {
        "id": "b",
        "label": "Send an email threatening to cancel their software subscription."
      },
      {
        "id": "c",
        "label": "Sequence: 1) 3-bullet executive summary of top webinar takeaways + link to timestamped recording, 2) actionable checklist worksheet asset, 3) invitation to an exclusive AMA session."
      },
      {
        "id": "d",
        "label": "Send an empty email with no text."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_lit_17",
    "section": "literacy",
    "prompt": "What prompt constraint ensures an AI crafts culturally sensitive global marketing copy for international campaign localization?",
    "options": [
      {
        "id": "a",
        "label": "Translate English text directly using free online word replacement."
      },
      {
        "id": "b",
        "label": "Specify target regional cultural context, eliminate localized idioms / colloquial slang, adapt date/currency formats, and prompt for transcreation rather than literal word-for-word translation."
      },
      {
        "id": "c",
        "label": "Assume Western cultural metaphors apply universally to all global markets."
      },
      {
        "id": "d",
        "label": "Use heavy American sports slang in all international campaigns."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_lit_18",
    "section": "literacy",
    "prompt": "How should an AI be prompted to generate compelling video ad scripts for TikTok / Instagram Reels (under 30 seconds)?",
    "options": [
      {
        "id": "a",
        "label": "Provide visual cue + voiceover split-table layout, strong 2-second visual hook, fast pacing with visual proof demonstration, and concise single-action verbal/text CTA."
      },
      {
        "id": "b",
        "label": "Write a 5-minute corporate PowerPoint presentation speech."
      },
      {
        "id": "c",
        "label": "Instruct the actor to stand completely still in silence for 20 seconds."
      },
      {
        "id": "d",
        "label": "Put all text in tiny illegible legal disclaimers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_lit_19",
    "section": "literacy",
    "prompt": "When using an LLM to assist in drafting quarterly marketing OKRs, what structure makes them actionable?",
    "options": [
      {
        "id": "a",
        "label": "Objective: \"Do more marketing\"; Key Results: \"Post more tweets\"."
      },
      {
        "id": "b",
        "label": "Setting key results that cannot be measured or tracked."
      },
      {
        "id": "c",
        "label": "Copying OKRs from an unrelated automotive manufacturing company."
      },
      {
        "id": "d",
        "label": "Objective: Inspirational qualitative strategic goal; Key Results: 3–4 quantitative, measurable outcome metrics (e.g., pipeline generated, organic MQL velocity, CAC reduction)."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_lit_20",
    "section": "literacy",
    "prompt": "How should a brand strategist prompt an AI to identify white space opportunities in a crowded software category?",
    "options": [
      {
        "id": "a",
        "label": "Ask the AI which company has the prettiest logo."
      },
      {
        "id": "b",
        "label": "Instruct the AI to copy the market leader's exact positioning."
      },
      {
        "id": "c",
        "label": "Input competitor positioning taglines, G2 review complaint themes, and feature matrices; prompt to identify underserved buyer segments, neglected messaging angles, and friction voids."
      },
      {
        "id": "d",
        "label": "Generate a random list of company names."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_lit_21",
    "section": "literacy",
    "prompt": "How can a marketer prompt an AI to write a high-converting Case Study narrative using the StoryBrand framework?",
    "options": [
      {
        "id": "a",
        "label": "Position our software company as the superhero and the customer as helpless."
      },
      {
        "id": "b",
        "label": "Position the customer as the Hero, their business bottleneck as the Villain, our company as the trusted Guide offering a clear Plan, ending with triumphant quantifiable success."
      },
      {
        "id": "c",
        "label": "Write the entire case study as a fictional fantasy fairy tale."
      },
      {
        "id": "d",
        "label": "Omit all details about how the product was actually used."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_lit_22",
    "section": "literacy",
    "prompt": "What prompt constraint ensures an AI generates SEO metadata that maximizes click-through rates (CTR)?",
    "options": [
      {
        "id": "a",
        "label": "Title Tag: 50–60 characters, primary keyword upfront + compelling benefit; Meta Description: 140–155 characters with secondary keyword, clear value proposition, and actionable CTA."
      },
      {
        "id": "b",
        "label": "Title Tag: 500 characters containing only commas."
      },
      {
        "id": "c",
        "label": "Meta Description: Repeating the word \"click\" 50 times."
      },
      {
        "id": "d",
        "label": "Leaving metadata tags completely blank."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_lit_23",
    "section": "literacy",
    "prompt": "How should a product marketer prompt an AI to draft a feature release announcement newsletter for existing customers?",
    "options": [
      {
        "id": "a",
        "label": "Paste raw backend pull-request merge commit hashes."
      },
      {
        "id": "b",
        "label": "Demand that customers upgrade to a $10,000 tier to read the announcement."
      },
      {
        "id": "c",
        "label": "Write a 20-page document explaining the database schema."
      },
      {
        "id": "d",
        "label": "Lead with the customer pain now eliminated, provide a 15-second animated GIF walk-through description, summarize the primary time-saving benefit, and provide a direct in-app link to try it."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_lit_24",
    "section": "literacy",
    "prompt": "What is the risk of using unguided AI prompts for brand storytelling?",
    "options": [
      {
        "id": "a",
        "label": "The AI will delete the marketing department's email accounts."
      },
      {
        "id": "b",
        "label": "Unguided prompts make websites load 10x slower."
      },
      {
        "id": "c",
        "label": "Unguided outputs default to hollow corporate cliches, generic platitudes, and indistinguishable brand voices that fail to build emotional resonance with buyers."
      },
      {
        "id": "d",
        "label": "There is zero risk in using unguided prompts."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_lit_25",
    "section": "literacy",
    "prompt": "How should a social media manager prompt an AI to generate an interactive LinkedIn poll with engaging commentary?",
    "options": [
      {
        "id": "a",
        "label": "Ask a yes/no question with options: \"Yes\" and \"Yes\"."
      },
      {
        "id": "b",
        "label": "Frame a genuine industry debate with 4 distinct, mutually exclusive tactical choices, accompanied by a 100-word post outlining the trade-offs of each approach to spark comments."
      },
      {
        "id": "c",
        "label": "Post a poll with no text or context."
      },
      {
        "id": "d",
        "label": "Ask people what they had for breakfast."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_lit_26",
    "section": "literacy",
    "prompt": "When using AI to generate FAQ sections for product pages, how should the questions be chosen?",
    "options": [
      {
        "id": "a",
        "label": "Extract real customer objections from sales transcripts and support tickets (pricing, migration difficulty, security, integration limits) rather than inventing trivial questions."
      },
      {
        "id": "b",
        "label": "Invent 10 questions praising the company's CEO."
      },
      {
        "id": "c",
        "label": "Ask questions about unrelated consumer electronics."
      },
      {
        "id": "d",
        "label": "Generate FAQs with only single-word answers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_lit_27",
    "section": "literacy",
    "prompt": "How should an event marketer prompt an AI to design a pre-conference booth engagement strategy?",
    "options": [
      {
        "id": "a",
        "label": "Send an email telling attendees to wander around the expo hall looking for you."
      },
      {
        "id": "b",
        "label": "Spam attendees with 20 phone calls during the opening keynote."
      },
      {
        "id": "c",
        "label": "Refuse to tell attendees what booth number you are located at."
      },
      {
        "id": "d",
        "label": "Design a 3-part sequence: 1) personalized invite offering an exclusive industry benchmark report, 2) VIP 1-on-1 expert consultation booking link, 3) on-site interactive raffle game mechanics."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_lit_28",
    "section": "literacy",
    "prompt": "What prompt instruction ensures an AI crafts high-performing cold direct messages (DMs) on LinkedIn or Twitter?",
    "options": [
      {
        "id": "a",
        "label": "Send a 1,000-word pitch deck copy-pasted into the chat window."
      },
      {
        "id": "b",
        "label": "Ask the prospect to send money via wire transfer immediately."
      },
      {
        "id": "c",
        "label": "Constraint: under 75 words, reference a specific recent post or mutual connection, zero hard sales pitches, offer a free high-value asset with no strings attached."
      },
      {
        "id": "d",
        "label": "Send automated DMs to 10,000 people per hour."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_lit_29",
    "section": "literacy",
    "prompt": "How should a brand copywriter prompt an AI to evaluate whether a draft is clear and readable for non-technical executives?",
    "options": [
      {
        "id": "a",
        "label": "Ask the AI to make the text sound more academic and convoluted."
      },
      {
        "id": "b",
        "label": "Prompt to calculate the Flesch-Kincaid grade level (target: 8th grade), highlight passive voice sentences, replace technical acronyms with plain-English analogies, and flag run-on thoughts."
      },
      {
        "id": "c",
        "label": "Instruct the AI to replace all nouns with Latin words."
      },
      {
        "id": "d",
        "label": "Remove all punctuation marks from the draft."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_lit_30",
    "section": "literacy",
    "prompt": "What represents the benchmark standard of an AI-powered Master Marketer?",
    "options": [
      {
        "id": "a",
        "label": "A strategic growth leader who combines deep customer empathy, distinctive brand storytelling, rigorous data experimentation, and rapid AI acceleration without sacrificing authentic human connection."
      },
      {
        "id": "b",
        "label": "A marketer who floods the internet with millions of generic AI-generated spam articles."
      },
      {
        "id": "c",
        "label": "A marketer who ignores all analytics and relies solely on gut instinct."
      },
      {
        "id": "d",
        "label": "A marketer who lets AI bots make 100% of brand strategy decisions without human review."
      }
    ],
    "correctOptionId": "a"
  }
];

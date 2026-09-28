import { CertQuestion } from '../types';

export const MARKETERS_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "mkt_auto_01",
    "section": "automation",
    "prompt": "How should a growth marketing team architect automated multi-step email nurture sequences based on user behavioral telemetry?",
    "options": [
      {
        "id": "a",
        "label": "Blast 10 identical generic emails every 2 hours regardless of user activity."
      },
      {
        "id": "b",
        "label": "Trigger dynamic branching logic based on verified in-app actions (e.g., viewing pricing page 3x or exporting a report), adapting message tone and call-to-action to user intent stage."
      },
      {
        "id": "c",
        "label": "Send emails only when the user manually requests a phone call."
      },
      {
        "id": "d",
        "label": "Delete user email addresses after 24 hours."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_auto_02",
    "section": "automation",
    "prompt": "When leveraging AI-driven algorithmic ad platforms (Meta Advantage+, Google Performance Max), how should performance marketers maintain strategic control?",
    "options": [
      {
        "id": "a",
        "label": "Provide high-quality diverse creative assets (video, carousel, copy variations), strict negative keyword lists, verified first-party conversion data feeds, and clear target ROAS boundaries."
      },
      {
        "id": "b",
        "label": "Upload 1 low-resolution screenshot and give the platform an unlimited daily budget with zero oversight."
      },
      {
        "id": "c",
        "label": "Disable all conversion tracking pixels to protect trade secrets."
      },
      {
        "id": "d",
        "label": "Change all ad campaign settings every 10 minutes."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_auto_03",
    "section": "automation",
    "prompt": "What architectural safeguard is mandatory when executing a Programmatic SEO (pSEO) content generation strategy at scale?",
    "options": [
      {
        "id": "a",
        "label": "Generating 100,000 spun keyword-stuffed duplicate pages with zero proprietary data."
      },
      {
        "id": "b",
        "label": "Publishing pages without checking if the information is accurate."
      },
      {
        "id": "c",
        "label": "Hiding text inside invisible iframes."
      },
      {
        "id": "d",
        "label": "Proprietary dataset anchoring, human editorial review gates per template, unique localized/domain insights, schema validation, and strict indexing limits to prevent Google spam penalties."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_auto_04",
    "section": "automation",
    "prompt": "How does automated website personalization (e.g., Mutiny, 6sense) dynamically optimize B2B landing pages for enterprise visitors?",
    "options": [
      {
        "id": "a",
        "label": "Displays the visitor's private home address on the screen."
      },
      {
        "id": "b",
        "label": "Slows down website loading speed by 30 seconds."
      },
      {
        "id": "c",
        "label": "Resolves visitor IP to company firmographics (industry, employee count, tech stack) and dynamically swaps hero headlines, customer logos, and case study links in real time."
      },
      {
        "id": "d",
        "label": "Permanently redirects all enterprise visitors to the contact form."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_auto_05",
    "section": "automation",
    "prompt": "Why should automated lead scoring models incorporate explicit time-decay algorithms?",
    "options": [
      {
        "id": "a",
        "label": "To automatically delete old CRM contacts."
      },
      {
        "id": "b",
        "label": "Prospect intent decays rapidly; high engagement from 6 months ago does not indicate active buying interest today; scores must reflect recent behavioral velocity."
      },
      {
        "id": "c",
        "label": "Because computers lose memory over time."
      },
      {
        "id": "d",
        "label": "To force sales reps to call leads only at midnight."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_auto_06",
    "section": "automation",
    "prompt": "How should marketing operations automate multi-platform social media distribution without appearing spammy?",
    "options": [
      {
        "id": "a",
        "label": "Schedule platform-tailored variations (native image carousels for LinkedIn, short-form video for TikTok/Reels, text hooks for X) spaced appropriately across peak regional engagement windows."
      },
      {
        "id": "b",
        "label": "Auto-post identical unformatted text simultaneously to 20 platforms with broken link previews."
      },
      {
        "id": "c",
        "label": "Post 500 tweets in a single minute."
      },
      {
        "id": "d",
        "label": "Tag 100 random accounts in every post."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_auto_07",
    "section": "automation",
    "prompt": "What is the primary advantage of algorithmic Multi-Touch Attribution (MTA) over simplistic Last-Click attribution?",
    "options": [
      {
        "id": "a",
        "label": "Last-Click attribution is always 100% accurate for 12-month enterprise sales cycles."
      },
      {
        "id": "b",
        "label": "MTA eliminates the need for marketing analytics."
      },
      {
        "id": "c",
        "label": "MTA allows marketing teams to claim 500% more revenue than the company earned."
      },
      {
        "id": "d",
        "label": "MTA assigns mathematically justified revenue credit across all top-of-funnel discovery, mid-funnel consideration, and bottom-of-funnel touchpoints, preventing underinvestment in brand awareness."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_auto_08",
    "section": "automation",
    "prompt": "How should a marketing team automate the webinar lifecycle funnel to maximize live attendance and replay conversion?",
    "options": [
      {
        "id": "a",
        "label": "Send no reminders and assume registrants will remember the date."
      },
      {
        "id": "b",
        "label": "Email registrants 50 times during the 10 minutes before the webinar starts."
      },
      {
        "id": "c",
        "label": "Automate calendar-invite confirmations, 24h/1h SMS/email reminder alerts with teaser clips, instant post-event segmentation (attended vs no-show), and timestamped on-demand replay delivery."
      },
      {
        "id": "d",
        "label": "Delete the webinar recording immediately after the live broadcast."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_auto_09",
    "section": "automation",
    "prompt": "How can automated customer health scoring trigger proactive marketing save campaigns before contract renewal?",
    "options": [
      {
        "id": "a",
        "label": "Charge the customer a contract cancellation fee before they ask to cancel."
      },
      {
        "id": "b",
        "label": "Monitor login frequency drops, feature usage decay, and open support tickets; when risk crosses thresholds, auto-enroll accounts into high-touch educational webinars and CSM check-in tasks."
      },
      {
        "id": "c",
        "label": "Lock the customer's account to prevent them from logging in."
      },
      {
        "id": "d",
        "label": "Ignore customer usage data completely."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_auto_10",
    "section": "automation",
    "prompt": "How do modern PR teams automate media monitoring and rapid journalist pitch matching?",
    "options": [
      {
        "id": "a",
        "label": "Ingest real-time news feeds, identify journalist queries on specific trending topics (e.g. HARO/Qwoted), match with relevant internal executive expertise, and draft tailored pitch angles."
      },
      {
        "id": "b",
        "label": "Spam 5,000 journalists with identical generic press releases every morning."
      },
      {
        "id": "c",
        "label": "Call newsrooms repeatedly until they agree to publish an article."
      },
      {
        "id": "d",
        "label": "Publish company announcements only on internal Slack channels."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_auto_11",
    "section": "automation",
    "prompt": "In SaaS product onboarding, how should automated drip sequences align with product milestones?",
    "options": [
      {
        "id": "a",
        "label": "Send all 20 onboarding guide emails on day 1 regardless of user progress."
      },
      {
        "id": "b",
        "label": "Send onboarding tips only after the user has used the software for 5 years."
      },
      {
        "id": "c",
        "label": "Disable in-app help menus."
      },
      {
        "id": "d",
        "label": "Celebrate verified milestone completions (e.g., first project created), pause introductory guides once mastered, and progressively introduce advanced workflows based on user pace."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_auto_12",
    "section": "automation",
    "prompt": "How can competitive intelligence automation give marketing and sales teams an unfair advantage?",
    "options": [
      {
        "id": "a",
        "label": "Hacking into competitor private email servers."
      },
      {
        "id": "b",
        "label": "Posting fake negative reviews on competitor app store pages."
      },
      {
        "id": "c",
        "label": "Automated monitoring of competitor pricing page updates, packaging shifts, new feature announcements, and job postings, synthesizing weekly actionable battlecard briefings."
      },
      {
        "id": "d",
        "label": "Ignoring competitor moves until they capture 90% market share."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_auto_13",
    "section": "automation",
    "prompt": "When running automated A/B tests on high-traffic landing pages, why is Bayesian sequential testing often preferred over fixed-sample tests?",
    "options": [
      {
        "id": "a",
        "label": "It guarantees that every test will achieve 100% conversion rates."
      },
      {
        "id": "b",
        "label": "It allows continuous monitoring and early stopping for clear winning or losing variations without inflating false positive error rates (p-hacking)."
      },
      {
        "id": "c",
        "label": "It requires zero website visitors to determine a statistical winner."
      },
      {
        "id": "d",
        "label": "It eliminates the need for conversion tracking."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_auto_14",
    "section": "automation",
    "prompt": "What automated email list hygiene protocol prevents domain deliverability blacklisting?",
    "options": [
      {
        "id": "a",
        "label": "Automated suppression of hard bounces, automatic unenrollment of unengaged subscribers after 90 days of zero opens, and real-time syntax/MX validation on signup forms."
      },
      {
        "id": "b",
        "label": "Purchasing 1 million unverified email addresses from internet forums."
      },
      {
        "id": "c",
        "label": "Continuing to email contacts after they mark messages as spam."
      },
      {
        "id": "d",
        "label": "Removing SPF and DKIM records from DNS."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_auto_15",
    "section": "automation",
    "prompt": "How should marketing teams automate User-Generated Content (UGC) social proof embedding on e-commerce sites?",
    "options": [
      {
        "id": "a",
        "label": "Display all public internet photos without copyright permission or filtering."
      },
      {
        "id": "b",
        "label": "Generate fake customer reviews with AI and pretend they are real users."
      },
      {
        "id": "c",
        "label": "Hide all customer reviews from the website."
      },
      {
        "id": "d",
        "label": "Aggregate customer tagged photos/reviews, filter via automated sentiment and brand-safety classifiers, secure automated digital rights consent, and render verified social proof on product pages."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_auto_16",
    "section": "automation",
    "prompt": "How can marketing teams automate content repurposing from raw podcast recordings?",
    "options": [
      {
        "id": "a",
        "label": "Delete the audio file after recording."
      },
      {
        "id": "b",
        "label": "Upload the raw 3-hour unedited audio file to TikTok."
      },
      {
        "id": "c",
        "label": "Automated speech-to-text transcription, AI chapter marker extraction, key quote pull-quote snippet generation, and auto-generated video shorts with burned-in subtitles."
      },
      {
        "id": "d",
        "label": "Manually transcribe all audio word-by-word with a typewriter."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_auto_17",
    "section": "automation",
    "prompt": "How should an automated customer referral engine handle fraud prevention?",
    "options": [
      {
        "id": "a",
        "label": "Pay out cash rewards immediately upon form submission without verifying purchases."
      },
      {
        "id": "b",
        "label": "Enforce fraud detection rules: IP collision checks, device fingerprinting, minimum spend thresholds before payout, and manual review flags for anomalous referral velocity."
      },
      {
        "id": "c",
        "label": "Allow one user to refer their own email address 10,000 times."
      },
      {
        "id": "d",
        "label": "Disable referral tracking completely."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_auto_18",
    "section": "automation",
    "prompt": "In global marketing localization, how do modern automated translation pipelines maintain brand quality?",
    "options": [
      {
        "id": "a",
        "label": "Neural machine translation integrated with centralized brand glossaries, automated style linting, and mandatory in-country native speaker review gates for Tier-1 markets."
      },
      {
        "id": "b",
        "label": "Direct literal Google Translate with zero human review."
      },
      {
        "id": "c",
        "label": "Refusing to translate marketing copy into other languages."
      },
      {
        "id": "d",
        "label": "Using different brand logos in every country."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_auto_19",
    "section": "automation",
    "prompt": "How can brand marketers automate influencer campaign attribution and payout tracking?",
    "options": [
      {
        "id": "a",
        "label": "Pay influencers in advance without tracking whether they posted content."
      },
      {
        "id": "b",
        "label": "Rely solely on creator follower counts as the sole measure of sales success."
      },
      {
        "id": "c",
        "label": "Ban creators from sharing promo codes with their audience."
      },
      {
        "id": "d",
        "label": "Generate unique tracking URLs and vanity promo codes per creator, automatically reconcile conversions via affiliate platforms, and generate ROI performance dashboards."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_auto_20",
    "section": "automation",
    "prompt": "How does automated pipeline forecasting help marketing leadership defend budget requests to the CFO?",
    "options": [
      {
        "id": "a",
        "label": "Guarantees that every dollar spent will return $100 tomorrow."
      },
      {
        "id": "b",
        "label": "Presents fictional revenue graphs drawn by hand."
      },
      {
        "id": "c",
        "label": "Combines historical channel conversion velocities, seasonality models, and current lead cohort volumes to project future closed-won revenue with clear confidence intervals."
      },
      {
        "id": "d",
        "label": "Claims marketing has no connection to company revenue."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_auto_21",
    "section": "automation",
    "prompt": "How should marketing operations automate custom audience synchronization across advertising networks?",
    "options": [
      {
        "id": "a",
        "label": "Manually download and upload unencrypted CSV files with customer credit cards every hour."
      },
      {
        "id": "b",
        "label": "Use Customer Data Platforms (CDPs) or reverse-ETL pipelines (e.g. Census, Hightouch) to sync hashed CRM segments into Meta/Google ad networks in near-real-time."
      },
      {
        "id": "c",
        "label": "Allow all competitors to access your custom audience lists."
      },
      {
        "id": "d",
        "label": "Target ads exclusively to random global demographics."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_auto_22",
    "section": "automation",
    "prompt": "How should an automated Net Promoter Score (NPS) pipeline handle customer feedback comments?",
    "options": [
      {
        "id": "a",
        "label": "Classify sentiment and root cause themes automatically; route Detractor feedback immediately to CSM emergency queues and trigger automated advocate referral requests to Promoters."
      },
      {
        "id": "b",
        "label": "Delete all Detractor responses and report 100% NPS to the board."
      },
      {
        "id": "c",
        "label": "Email Detractors accusing them of being unfair."
      },
      {
        "id": "d",
        "label": "Never read customer survey responses."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_auto_23",
    "section": "automation",
    "prompt": "What timing sequence is proven to maximize automated e-commerce abandoned cart recovery?",
    "options": [
      {
        "id": "a",
        "label": "Send an email 30 seconds after cart creation, then 100 more emails over the next 2 hours."
      },
      {
        "id": "b",
        "label": "Wait 6 months before sending an abandoned cart email."
      },
      {
        "id": "c",
        "label": "Empty the user's cart and block their IP address."
      },
      {
        "id": "d",
        "label": "1 hour post-abandonment: helpful reminder + product image; 24 hours: social proof reviews / urgency; 48 hours: limited-time incentive or free shipping offer."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_auto_24",
    "section": "automation",
    "prompt": "How can an editorial team automate high-value newsletter curation without losing editorial quality?",
    "options": [
      {
        "id": "a",
        "label": "Send raw unedited RSS feeds directly to subscriber inboxes."
      },
      {
        "id": "b",
        "label": "Copy competitor newsletters word-for-word."
      },
      {
        "id": "c",
        "label": "Automate RSS ingestion of industry sources, cluster top stories by novelty, draft initial 2-sentence takeaways using AI, and have human editors curate the top 5 with personal commentary."
      },
      {
        "id": "d",
        "label": "Send newsletters with broken external links."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_auto_25",
    "section": "automation",
    "prompt": "What automated alert helps SEO teams respond instantly to organic search ranking drops?",
    "options": [
      {
        "id": "a",
        "label": "Checking Google search results manually once every 6 months."
      },
      {
        "id": "b",
        "label": "Daily rank tracking webhooks that alert when high-priority commercial keyword positions drop by >3 ranks, diagnosing crawl errors, indexing changes, or competitor content shifts."
      },
      {
        "id": "c",
        "label": "Deleting all landing pages when search traffic fluctuates."
      },
      {
        "id": "d",
        "label": "Buying fake traffic bots to inflate analytics numbers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_auto_26",
    "section": "automation",
    "prompt": "How do automated video localization engines generate multi-language video assets efficiently?",
    "options": [
      {
        "id": "a",
        "label": "AI voice cloning and lip-sync alignment in target languages, automated burned-in subtitle generation, and localized on-screen text graphics replacement."
      },
      {
        "id": "b",
        "label": "Muting the video and displaying Google Translate text across the entire screen."
      },
      {
        "id": "c",
        "label": "Refusing to produce video content for non-English speakers."
      },
      {
        "id": "d",
        "label": "Re-filming the entire video with new actors in 50 countries."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "mkt_auto_27",
    "section": "automation",
    "prompt": "What compliance rules must automated SMS marketing workflows enforce under TCPA regulations?",
    "options": [
      {
        "id": "a",
        "label": "Sending promotional SMS messages at 3:00 AM every night."
      },
      {
        "id": "b",
        "label": "Texting purchased phone number lists without prior consent."
      },
      {
        "id": "c",
        "label": "Ignoring STOP and UNSUBSCRIBE reply texts."
      },
      {
        "id": "d",
        "label": "Explicit double opt-in consent, clear STOP opt-out commands, message frequency disclosure, and strict enforcement of geographic quiet hours (no texts between 9 PM and 8 AM local time)."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "mkt_auto_28",
    "section": "automation",
    "prompt": "How should an affiliate marketing platform automate partner payout reconciliation?",
    "options": [
      {
        "id": "a",
        "label": "Pay out affiliate commissions within 1 second of order placement before credit card authorization."
      },
      {
        "id": "b",
        "label": "Refuse to pay affiliates any earned commissions."
      },
      {
        "id": "c",
        "label": "Enforce a standard refund lock window (e.g. 30 days) before commission approval, auto-deduct refunds/chargebacks, and disburse mass payouts via automated banking APIs."
      },
      {
        "id": "d",
        "label": "Send cash through postal mail in unlabelled envelopes."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "mkt_auto_29",
    "section": "automation",
    "prompt": "How can enterprise brand teams automate design consistency auditing across thousands of regional digital assets?",
    "options": [
      {
        "id": "a",
        "label": "Having 1 graphic designer manually review 500,000 banner ads on paper."
      },
      {
        "id": "b",
        "label": "AI computer vision crawlers that scan active landing pages, social accounts, and banners to verify approved hex color palettes, logo clearance rules, and font hierarchies."
      },
      {
        "id": "c",
        "label": "Allowing regional teams to use any logo, color, or font they choose."
      },
      {
        "id": "d",
        "label": "Banning all visual imagery from marketing campaigns."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "mkt_auto_30",
    "section": "automation",
    "prompt": "What represents the gold standard of a mature, automated marketing operations infrastructure?",
    "options": [
      {
        "id": "a",
        "label": "A unified data ecosystem where real-time customer signals trigger personalized omnichannel journeys, automated attribution proves ROI, and AI handles operational velocity with strict human governance."
      },
      {
        "id": "b",
        "label": "An organization that generates 1 billion automated spam emails daily with zero segmentation."
      },
      {
        "id": "c",
        "label": "A marketing team that uses no software and manages everything in paper notebooks."
      },
      {
        "id": "d",
        "label": "A system where bots make 100% of strategic budget allocation decisions with zero human oversight."
      }
    ],
    "correctOptionId": "a"
  }
];

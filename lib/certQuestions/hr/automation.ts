import { CertQuestion } from '../types';

export const HR_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "hr_auto_01",
    "section": "automation",
    "prompt": "How should a Talent Acquisition team design an automated ATS resume screening workflow to ensure fair and compliant hiring?",
    "options": [
      {
        "id": "a",
        "label": "Allow AI algorithms to automatically reject 95% of candidate resumes with zero human oversight."
      },
      {
        "id": "b",
        "label": "Use AI to parse skills and work achievements as an initial candidate matching signal, while maintaining mandatory human recruiter review on all rejections and shortlist decisions."
      },
      {
        "id": "c",
        "label": "Reject all candidates who do not have a specific keyword repeated 50 times."
      },
      {
        "id": "d",
        "label": "Disable resume screening and hire candidates randomly."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "hr_auto_02",
    "section": "automation",
    "prompt": "How should People Operations automate the employee onboarding lifecycle between signed offer letter and Day 1?",
    "options": [
      {
        "id": "a",
        "label": "Orchestrate automated triggers: provisioning IT hardware, generating SSO/Google Workspace accounts, enrolling in payroll/benefits, and sending a welcome kit with first-week schedules."
      },
      {
        "id": "b",
        "label": "Expect new hires to arrive at the office on Day 1 with no laptop or account access."
      },
      {
        "id": "c",
        "label": "Require new hires to manually email 20 different department heads to request software logins."
      },
      {
        "id": "d",
        "label": "Delay payroll setup until 6 months after starting."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "hr_auto_03",
    "section": "automation",
    "prompt": "How can an internal People Ops AI Chatbot automate employee benefits and PTO inquiries effectively?",
    "options": [
      {
        "id": "a",
        "label": "Provide fictional medical advice to employees."
      },
      {
        "id": "b",
        "label": "Auto-deny all PTO vacation requests submitted by employees."
      },
      {
        "id": "c",
        "label": "Publish employee private medical questions on public company channels."
      },
      {
        "id": "d",
        "label": "Ground the chatbot on official company HR policy handbooks, provide instant answers on PTO balances and dental coverage tiers, and seamlessly escalate complex leaves to HRBPs."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "hr_auto_04",
    "section": "automation",
    "prompt": "When automating candidate background checks, what compliance rule is legally mandated under the Fair Credit Reporting Act (FCRA)?",
    "options": [
      {
        "id": "a",
        "label": "Rejecting candidates immediately upon receiving a background report without notifying them."
      },
      {
        "id": "b",
        "label": "Conducting background checks secretly without the candidate's knowledge."
      },
      {
        "id": "c",
        "label": "Mandatory standalone written disclosure, explicit candidate consent, and a formal Pre-Adverse Action notice providing a 5-day dispute window before any adverse hiring decision."
      },
      {
        "id": "d",
        "label": "Background checks are exempt from federal consumer reporting laws."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "hr_auto_05",
    "section": "automation",
    "prompt": "How should People Analytics automate longitudinal employee sentiment tracking across quarterly pulse surveys?",
    "options": [
      {
        "id": "a",
        "label": "De-anonymize survey responses to identify and discipline dissatisfied employees."
      },
      {
        "id": "b",
        "label": "Anonymously aggregate sentiment trends over time across departments, isolating shifts in leadership trust, workload burnout, and career growth without unmasking individual respondents."
      },
      {
        "id": "c",
        "label": "Delete survey results if employee satisfaction scores decline."
      },
      {
        "id": "d",
        "label": "Run surveys only once every 10 years."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "hr_auto_06",
    "section": "automation",
    "prompt": "How should compliance training tracking (e.g. Anti-Harassment, Data Security) be automated across the enterprise?",
    "options": [
      {
        "id": "a",
        "label": "Automate enrollment on hire, deliver periodic automated reminder notifications to non-compliant staff, and escalate overdue certifications to department managers ahead of regulatory deadlines."
      },
      {
        "id": "b",
        "label": "Expect employees to remember training deadlines without notifications."
      },
      {
        "id": "c",
        "label": "Falsify compliance records to show 100% completion without employees taking training."
      },
      {
        "id": "d",
        "label": "Cancel compliance training to save company money."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "hr_auto_07",
    "section": "automation",
    "prompt": "How can People Operations automate meaningful employee milestone celebrations (work anniversaries, birthdays)?",
    "options": [
      {
        "id": "a",
        "label": "Send a cold, unformatted automated email containing only the employee's ID number."
      },
      {
        "id": "b",
        "label": "Charge employees an administrative fee on their work anniversary."
      },
      {
        "id": "c",
        "label": "Ignore work anniversaries completely."
      },
      {
        "id": "d",
        "label": "Trigger automated celebratory Slack/Teams messages, disburse tenure-based reward points or charity donation stipends, and prompt managers to write personalized recognition notes."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "hr_auto_08",
    "section": "automation",
    "prompt": "How do automated interview scheduling bots (e.g., GoodTime, Calendly) eliminate recruiter coordination drag?",
    "options": [
      {
        "id": "a",
        "label": "Book 5 overlapping interview panels for the same candidate at the same time."
      },
      {
        "id": "b",
        "label": "Require candidates to mail paper letters to schedule interview dates."
      },
      {
        "id": "c",
        "label": "Connect with multi-interviewer calendars simultaneously, calculate optimal panel time slots, accommodate candidate time zones, and auto-generate video conferencing links."
      },
      {
        "id": "d",
        "label": "Schedule interviews at 2:00 AM without checking interviewer availability."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "hr_auto_09",
    "section": "automation",
    "prompt": "What automated workflow ensures secure employee offboarding on their final day of employment?",
    "options": [
      {
        "id": "a",
        "label": "Leave corporate logins active indefinitely after the employee departs."
      },
      {
        "id": "b",
        "label": "Simultaneous automated SSO access revocation at the designated departure hour, automated return shipping label dispatch for company hardware, and archiving of mailbox records."
      },
      {
        "id": "c",
        "label": "Delete all company projects created by the departing employee."
      },
      {
        "id": "d",
        "label": "Ask the departing employee to remember to delete their own account."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "hr_auto_10",
    "section": "automation",
    "prompt": "How can internal talent mobility be automated to boost employee retention?",
    "options": [
      {
        "id": "a",
        "label": "AI matching engines analyze employee skill profiles and career aspirations, automatically alerting internal staff to newly opened requisitions before external posting."
      },
      {
        "id": "b",
        "label": "Prohibit existing employees from applying for open internal roles."
      },
      {
        "id": "c",
        "label": "Automatically transfer employees to random departments without their consent."
      },
      {
        "id": "d",
        "label": "Keep open job requisitions completely secret from internal staff."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "hr_auto_11",
    "section": "automation",
    "prompt": "How should People Operations automate the execution of 360-degree performance review cycles?",
    "options": [
      {
        "id": "a",
        "label": "Require employees to write performance reviews on paper index cards."
      },
      {
        "id": "b",
        "label": "Launch performance reviews with zero advance notice and a 1-hour completion deadline."
      },
      {
        "id": "c",
        "label": "Eliminate performance reviews entirely."
      },
      {
        "id": "d",
        "label": "Automate peer nomination workflows, manager approval gates, self-evaluation reminders, calibration session scheduling, and final compensation review packet distribution."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "hr_auto_12",
    "section": "automation",
    "prompt": "How can compensation teams automate salary band adjustments against live market data feeds?",
    "options": [
      {
        "id": "a",
        "label": "Adjust employee salaries randomly based on astrological predictions."
      },
      {
        "id": "b",
        "label": "Freeze all employee salaries for 20 years."
      },
      {
        "id": "c",
        "label": "Ingest verified real-time compensation benchmark feeds (e.g. Radford/Carta Total Comp), compare current employee salary distribution, and highlight pay compression and equity gaps."
      },
      {
        "id": "d",
        "label": "Reduce salaries whenever inflation increases."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "hr_auto_13",
    "section": "automation",
    "prompt": "How should HR automate corporate immigration and visa compliance tracking (e.g. H-1B, L-1, Green Cards)?",
    "options": [
      {
        "id": "a",
        "label": "Wait until the employee's visa expires and their legal work authorization lapses."
      },
      {
        "id": "b",
        "label": "Automated expiration countdown alerts triggered 180 and 90 days in advance, auto-notifying immigration legal counsel, the employee, and HRBP to initiate timely renewal filings."
      },
      {
        "id": "c",
        "label": "Require employees to manage complex corporate immigration filings with no legal support."
      },
      {
        "id": "d",
        "label": "Delete visa records from the HRIS system."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "hr_auto_14",
    "section": "automation",
    "prompt": "How should an automated Employee Referral Bonus payout engine operate?",
    "options": [
      {
        "id": "a",
        "label": "Track candidate referral source in the ATS, verify candidate hire date, monitor completion of the required 90-day probationary milestone, and auto-stage bonus disbursement in payroll."
      },
      {
        "id": "b",
        "label": "Refuse to pay referral bonuses to employees."
      },
      {
        "id": "c",
        "label": "Pay referral bonuses in cryptocurrency to unverified wallet addresses."
      },
      {
        "id": "d",
        "label": "Pay bonuses before the candidate has even been interviewed."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "hr_auto_15",
    "section": "automation",
    "prompt": "How does recruitment pipeline velocity analytics identify hiring process bottlenecks?",
    "options": [
      {
        "id": "a",
        "label": "Tracks how many words candidates type on their application forms."
      },
      {
        "id": "b",
        "label": "Counts how many minutes recruiters spend on social media."
      },
      {
        "id": "c",
        "label": "Hiring velocity cannot be measured or tracked."
      },
      {
        "id": "d",
        "label": "Measures average candidate dwell time per recruitment stage (Applied -> Screen -> Technical Assessment -> Onsite -> Offer), highlighting interviewers with severe feedback delays."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "hr_auto_16",
    "section": "automation",
    "prompt": "How can automated PTO tracking prevent employee burnout and financial balance sheet liability?",
    "options": [
      {
        "id": "a",
        "label": "Forbid employees from ever taking paid time off."
      },
      {
        "id": "b",
        "label": "Automatically erase employee vacation days at the end of every week."
      },
      {
        "id": "c",
        "label": "Alert managers when direct reports have not taken time off for over 4 consecutive months, encouraging vacation scheduling while preventing accrued PTO liability accumulation."
      },
      {
        "id": "d",
        "label": "Require employees to work double shifts after returning from vacation."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "hr_auto_17",
    "section": "automation",
    "prompt": "How should People Operations automate the 30-Day New Hire Check-In process?",
    "options": [
      {
        "id": "a",
        "label": "Wait 3 years before asking new hires how their onboarding went."
      },
      {
        "id": "b",
        "label": "Deploy an automated, short 5-question pulse survey on Day 30 evaluating manager support, role clarity, and tool access, automatically escalating low scores to an HRBP for a check-in call."
      },
      {
        "id": "c",
        "label": "Send an automated email threatening termination if the new hire has questions."
      },
      {
        "id": "d",
        "label": "Require new hires to write a 100-page essay about their first month."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "hr_auto_18",
    "section": "automation",
    "prompt": "How should an organization automate contingent workforce and contractor compliance?",
    "options": [
      {
        "id": "a",
        "label": "Track contractor Statement of Work (SOW) terms, automated 1099/W-8BEN tax form collection, verified background checks, and automated tenure limits to prevent co-employment risks."
      },
      {
        "id": "b",
        "label": "Pay contractors cash under the table with zero contracts."
      },
      {
        "id": "c",
        "label": "Treat independent contractors as permanent full-time employees without benefits."
      },
      {
        "id": "d",
        "label": "Allow contractors to work without signing Non-Disclosure Agreements."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "hr_auto_19",
    "section": "automation",
    "prompt": "How should the Job Requisition Approval workflow be automated across finance and executive leadership?",
    "options": [
      {
        "id": "a",
        "label": "Allow any manager to hire 100 employees without budget approval."
      },
      {
        "id": "b",
        "label": "Require job requisitions to be approved via paper courier mail."
      },
      {
        "id": "c",
        "label": "Approve all hiring requests randomly."
      },
      {
        "id": "d",
        "label": "Sequential multi-stakeholder routing (Department Head -> FP&A Finance -> VP People -> CEO), checking proposed headcount against approved annual operating budget models."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "hr_auto_20",
    "section": "automation",
    "prompt": "How does automated Offer Letter generation eliminate costly human clerical errors in recruiting?",
    "options": [
      {
        "id": "a",
        "label": "Allows recruiters to type arbitrary unapproved salary numbers into emails."
      },
      {
        "id": "b",
        "label": "Generates offer letters without specifying base salary."
      },
      {
        "id": "c",
        "label": "Pulls approved compensation, equity shares, job title, and reporting manager directly from the validated requisition record, generating legally compliant DocuSign/PandaDoc packets."
      },
      {
        "id": "d",
        "label": "Sends offer letters to random candidates who did not interview."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "hr_auto_21",
    "section": "automation",
    "prompt": "How should enterprise HRIS platforms automate dynamic organization chart updates?",
    "options": [
      {
        "id": "a",
        "label": "Manually draw organization charts in PowerPoint once every 5 years."
      },
      {
        "id": "b",
        "label": "Sync reporting hierarchies automatically upon approved managerial reassignments, new hires, and departures, reflecting real-time organizational structures across all company directories."
      },
      {
        "id": "c",
        "label": "Keep reporting structures completely secret from employees."
      },
      {
        "id": "d",
        "label": "Assign all employees to report directly to the intern."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "hr_auto_22",
    "section": "automation",
    "prompt": "How should an automated Workplace Incident / Whistleblower Reporting system protect employee confidentiality?",
    "options": [
      {
        "id": "a",
        "label": "Provide anonymous, encrypted intake portals, strip IP addresses and metadata, and route reports directly to the Audit Committee or external ombudsman with strict audit logs."
      },
      {
        "id": "b",
        "label": "Forward anonymous whistleblower complaints to the accused manager's personal email."
      },
      {
        "id": "c",
        "label": "Post whistleblower reports on the company public website."
      },
      {
        "id": "d",
        "label": "Delete whistleblower complaints immediately."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "hr_auto_23",
    "section": "automation",
    "prompt": "How can automated organizational skill inventory mapping assist in strategic workforce planning?",
    "options": [
      {
        "id": "a",
        "label": "Assume all employees have identical skills."
      },
      {
        "id": "b",
        "label": "Force employees to re-take high school math tests every month."
      },
      {
        "id": "c",
        "label": "Hire external agencies for every new project without checking internal capabilities."
      },
      {
        "id": "d",
        "label": "Aggregate employee technical proficiencies, project contributions, and completed certifications into a searchable internal talent marketplace for rapid agile squad staffing."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "hr_auto_24",
    "section": "automation",
    "prompt": "How should automated Exit Interview workflows capture candid, unvarnished feedback from departing staff?",
    "options": [
      {
        "id": "a",
        "label": "Require the departing employee's direct manager to conduct an aggressive exit interrogation."
      },
      {
        "id": "b",
        "label": "Refuse to process final paychecks unless the employee gives 5-star feedback."
      },
      {
        "id": "c",
        "label": "Deploy a confidential digital exit survey on their final week, offer an optional 1-on-1 session with a neutral People Partner, and aggregate anonymized trends into quarterly retention reports."
      },
      {
        "id": "d",
        "label": "Never collect feedback from departing employees."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "hr_auto_25",
    "section": "automation",
    "prompt": "How does automated EEO-1 government compliance reporting ensure legal accuracy for US employers with 100+ staff?",
    "options": [
      {
        "id": "a",
        "label": "Guesses employee demographic data based on photographs without voluntary self-identification."
      },
      {
        "id": "b",
        "label": "Aggregates self-identified demographic data securely from HRIS records, maps job titles to official federal standard occupational classifications, and formats automated filing manifests."
      },
      {
        "id": "c",
        "label": "Refuses to submit required federal EEO-1 reports."
      },
      {
        "id": "d",
        "label": "Submits fictional demographic data to the EEOC."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "hr_auto_26",
    "section": "automation",
    "prompt": "How should HR automate Leave of Absence (FMLA / Short-Term Disability) case administration?",
    "options": [
      {
        "id": "a",
        "label": "Track statutory eligibility timelines (e.g. 1,250 hours worked), calculate concurrent state/federal leave allowances, automate payroll benefit continuation, and coordinate return-to-work plans."
      },
      {
        "id": "b",
        "label": "Terminate employees immediately when they request medical leave."
      },
      {
        "id": "c",
        "label": "Require employees on medical leave to attend daily 8-hour status meetings."
      },
      {
        "id": "d",
        "label": "Stop paying health insurance benefits without notice."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "hr_auto_27",
    "section": "automation",
    "prompt": "Why should talent acquisition teams automate Candidate Net Promoter Score (cNPS) surveys post-interview?",
    "options": [
      {
        "id": "a",
        "label": "To punish candidates who gave constructive feedback."
      },
      {
        "id": "b",
        "label": "To charge candidates a fee for interviewing."
      },
      {
        "id": "c",
        "label": "Candidate experience has zero impact on corporate employer brand."
      },
      {
        "id": "d",
        "label": "To measure candidate experience quality across both hired and rejected applicants, identifying interviewers who exhibit unprofessional behavior or ghost candidates."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "hr_auto_28",
    "section": "automation",
    "prompt": "How does automated Headcount Reconciliation protect company cash runway and financial plans?",
    "options": [
      {
        "id": "a",
        "label": "Allows departments to hire infinite staff without checking bank balances."
      },
      {
        "id": "b",
        "label": "Cancels all employee paychecks when cash fluctuates."
      },
      {
        "id": "c",
        "label": "Continuously reconciles active hires, open job offers, and approved requisitions against the CFO's financial budget model, flagging unauthorized hiring or compensation budget overruns."
      },
      {
        "id": "d",
        "label": "Hides headcount numbers from the finance department."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "hr_auto_29",
    "section": "automation",
    "prompt": "How can an automated Mentorship Matching algorithm accelerate cross-functional employee development?",
    "options": [
      {
        "id": "a",
        "label": "Forces junior employees to do their mentor's personal laundry."
      },
      {
        "id": "b",
        "label": "Matches mentors and mentees based on specific skill growth goals, cross-departmental pairings, and shared interest areas, providing structured meeting guides and milestone checkpoints."
      },
      {
        "id": "c",
        "label": "Matches employees who work on identical tasks in the same team."
      },
      {
        "id": "d",
        "label": "Prohibits employees from speaking to colleagues outside their team."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "hr_auto_30",
    "section": "automation",
    "prompt": "What represents the gold standard of an automated, human-centric People Operations ecosystem?",
    "options": [
      {
        "id": "a",
        "label": "A seamless platform that automates tedious administrative workflows, ensures rigorous legal compliance, respects employee dignity and privacy, and empowers people to do their best work."
      },
      {
        "id": "b",
        "label": "A system where human HR professionals are completely replaced by unmonitored chatbots."
      },
      {
        "id": "c",
        "label": "An organization where employees must fill out paper forms for every request."
      },
      {
        "id": "d",
        "label": "A system that uses automated algorithms to monitor employees in their private homes."
      }
    ],
    "correctOptionId": "a"
  }
];

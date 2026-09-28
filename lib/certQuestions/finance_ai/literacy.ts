import { CertQuestion } from '../types';

export const FINANCE_AI_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    "id": "fin_lit_01",
    "section": "literacy",
    "prompt": "When prompting an LLM to analyze corporate SEC Form 10-K annual reports for investment evaluation, what strategy produces the highest factual fidelity?",
    "options": [
      {
        "id": "a",
        "label": "Asking the AI to guess the company's future revenue based on public hype."
      },
      {
        "id": "b",
        "label": "Grounding the model on raw XBRL/HTML filings via RAG, extracting exact table footnote line items, and requiring explicit arithmetic cross-reconciliation across the Three Financial Statements."
      },
      {
        "id": "c",
        "label": "Providing only the company logo image."
      },
      {
        "id": "d",
        "label": "Generating fictional financial numbers."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_lit_02",
    "section": "literacy",
    "prompt": "What is the primary risk of using ungrounded generative AI for Discounted Cash Flow (DCF) valuation calculations?",
    "options": [
      {
        "id": "a",
        "label": "LLMs perform token prediction rather than exact mathematical computation, frequently hallucinating subtle arithmetic discrepancies in WACC, terminal value, and discount factor compounding."
      },
      {
        "id": "b",
        "label": "LLMs cannot generate dollar signs."
      },
      {
        "id": "c",
        "label": "DCF calculations are illegal for computers."
      },
      {
        "id": "d",
        "label": "LLMs will automatically buy company shares on stock exchanges."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_lit_03",
    "section": "literacy",
    "prompt": "In automated three-statement financial modeling (Income Statement, Balance Sheet, Cash Flow Statement), what invariant must be strictly validated?",
    "options": [
      {
        "id": "a",
        "label": "Revenue must equal Net Income."
      },
      {
        "id": "b",
        "label": "All line items must be positive numbers."
      },
      {
        "id": "c",
        "label": "Total Assets must equal zero."
      },
      {
        "id": "d",
        "label": "Assets = Liabilities + Shareholders' Equity, and Ending Cash on the Balance Sheet must exactly match Ending Cash on the Cash Flow Statement."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_lit_04",
    "section": "literacy",
    "prompt": "How can prompt engineering extract actionable signals from quarterly Earnings Call transcripts?",
    "options": [
      {
        "id": "a",
        "label": "Asking the model whether the CEO sounded happy on a scale of 1 to 10."
      },
      {
        "id": "b",
        "label": "Translating the transcript into a poem."
      },
      {
        "id": "c",
        "label": "Prompting the model to separate prepared management remarks from unscripted analyst Q&A, isolating hedging language (e.g. 'headwinds', 'softness', 'timing') and guidance revisions."
      },
      {
        "id": "d",
        "label": "Deleting all executive quotes."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_lit_05",
    "section": "literacy",
    "prompt": "What is 'Sensitivity & Scenario Analysis' when modeling financial projections with AI assistance?",
    "options": [
      {
        "id": "a",
        "label": "Measuring the emotional sensitivity of the financial analyst."
      },
      {
        "id": "b",
        "label": "Evaluating how changes in key driver assumptions (e.g. revenue growth rate $\\pm 5\\%$, gross margin $\\pm 200$ bps, discount rate $\\pm 1\\%$) impact enterprise value and IRR across Bear, Base, and Bull cases."
      },
      {
        "id": "c",
        "label": "Changing font colors in Excel spreadsheets."
      },
      {
        "id": "d",
        "label": "Deleting negative revenue scenarios."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_lit_06",
    "section": "literacy",
    "prompt": "When analyzing complex financial debt covenants in credit agreements, what prompt structure ensures zero hallucination?",
    "options": [
      {
        "id": "a",
        "label": "Direct context extraction: quote verbatim covenant definitions (e.g. Leverage Ratio, Interest Coverage, restricted payments), list threshold formulas, and cite exact contract section numbers."
      },
      {
        "id": "b",
        "label": "Ask the AI to guess typical industry covenants without reading the contract."
      },
      {
        "id": "c",
        "label": "Assume all covenants are standard."
      },
      {
        "id": "d",
        "label": "Translate the credit agreement into Latin."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_lit_07",
    "section": "literacy",
    "prompt": "What is the role of 'Python Code Interpreter Execution' in financial modeling AI workflows?",
    "options": [
      {
        "id": "a",
        "label": "Compiles financial reports into mobile phone apps."
      },
      {
        "id": "b",
        "label": "Eliminates the need for financial statements."
      },
      {
        "id": "c",
        "label": "Trades stocks automatically in production."
      },
      {
        "id": "d",
        "label": "Offloads all quantitative calculations (CAGR, DCF, Monte Carlo simulations, IRR) to deterministic Python code execution (NumPy / Pandas) rather than relying on raw LLM arithmetic."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_lit_08",
    "section": "literacy",
    "prompt": "In financial ratio analysis, what does the 'DuPont Analysis Framework' decompose Return on Equity (ROE) into?",
    "options": [
      {
        "id": "a",
        "label": "ROE = Stock Price divided by Total Employees."
      },
      {
        "id": "b",
        "label": "ROE = Annual Revenue minus CEO Salary."
      },
      {
        "id": "c",
        "label": "ROE = Net Profit Margin (Operating Efficiency) $\\times$ Asset Turnover (Asset Use Efficiency) $\\times$ Equity Multiplier (Financial Leverage)."
      },
      {
        "id": "d",
        "label": "ROE = Total Assets plus Total Liabilities."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_lit_09",
    "section": "literacy",
    "prompt": "How should an AI assistant handle restatements or Non-GAAP vs GAAP reconciliations in corporate earnings?",
    "options": [
      {
        "id": "a",
        "label": "Ignore GAAP numbers and use Non-GAAP numbers exclusively."
      },
      {
        "id": "b",
        "label": "Explicitly extract both GAAP Net Income and Non-GAAP Adjusted EBITDA, documenting all adjustments (e.g. stock-based compensation, restructuring charges, M&A amortization) line-by-line."
      },
      {
        "id": "c",
        "label": "Delete all footnote explanations."
      },
      {
        "id": "d",
        "label": "Assume GAAP and Non-GAAP are identical."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_lit_10",
    "section": "literacy",
    "prompt": "What is 'Working Capital Modeling' and why must seasonal inventory swings be tracked in AI valuation?",
    "options": [
      {
        "id": "a",
        "label": "Modeling Changes in Working Capital ($AR + Inventory - AP$) ensures cash flow projections reflect actual cash tied up in operations during peak inventory buildup cycles."
      },
      {
        "id": "b",
        "label": "Working capital measures office furniture value."
      },
      {
        "id": "c",
        "label": "Working capital is only calculated on December 31."
      },
      {
        "id": "d",
        "label": "Working capital has zero effect on Free Cash Flow."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_lit_11",
    "section": "literacy",
    "prompt": "When building a Comparable Company Analysis (Trading Comps) table with AI assistance, what normalization is required?",
    "options": [
      {
        "id": "a",
        "label": "Averaging stock prices without adjusting for share count."
      },
      {
        "id": "b",
        "label": "Selecting companies from completely unrelated industries."
      },
      {
        "id": "c",
        "label": "Deleting companies with high market valuations."
      },
      {
        "id": "d",
        "label": "Normalizing valuation multiples (EV/EBITDA, P/E, EV/Sales) across peer companies by adjusting for non-recurring items, differing fiscal year-ends, and capital structure debt."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_lit_12",
    "section": "literacy",
    "prompt": "What is 'Terminal Value Calculation (Perpetual Growth vs Exit Multiple)' in DCF modeling?",
    "options": [
      {
        "id": "a",
        "label": "Terminal value is the cost of terminating all employees."
      },
      {
        "id": "b",
        "label": "Terminal value is always equal to initial investment capital."
      },
      {
        "id": "c",
        "label": "Perpetual Growth uses Gordon Growth formula ($TV = \\frac{FCF_{t+1}}{WACC - g}$); Exit Multiple multiplies final year EBITDA by a benchmark industry multiple."
      },
      {
        "id": "d",
        "label": "Terminal value is calculated by picking a random number."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_lit_13",
    "section": "literacy",
    "prompt": "How can prompt constraints ensure AI generates audit-ready financial summaries for C-suite executive presentations?",
    "options": [
      {
        "id": "a",
        "label": "Generate 50 pages of unformatted text."
      },
      {
        "id": "b",
        "label": "Mandate explicit baseline assumptions, format tables with dollar units in millions/thousands, show exact formula steps, and flag all variance percentages $>10\\%$ with explanatory commentary."
      },
      {
        "id": "c",
        "label": "Omit all numerical data and use only general statements."
      },
      {
        "id": "d",
        "label": "Round all numbers to the nearest billion."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_lit_14",
    "section": "literacy",
    "prompt": "In Leveraged Buyout (LBO) modeling, what is the role of the 'Sources and Uses' schedule?",
    "options": [
      {
        "id": "a",
        "label": "Details the exact sources of deal capital (Senior Debt, Mezzanine, Sponsor Equity) and the specific uses (Purchase Equity, Refinance Debt, Advisory Fees), ensuring total sources equal total uses."
      },
      {
        "id": "b",
        "label": "Lists office supplies used by the finance team."
      },
      {
        "id": "c",
        "label": "Tracks daily employee travel expenses."
      },
      {
        "id": "d",
        "label": "Details personal bank accounts of executives."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_lit_15",
    "section": "literacy",
    "prompt": "What is 'Free Cash Flow to Firm (FCFF)' vs 'Free Cash Flow to Equity (FCFE)'?",
    "options": [
      {
        "id": "a",
        "label": "FCFF is for non-profit companies; FCFE is for public corporations."
      },
      {
        "id": "b",
        "label": "FCFF is calculated in euros; FCFE is calculated in dollars."
      },
      {
        "id": "c",
        "label": "They are exact identical metrics."
      },
      {
        "id": "d",
        "label": "FCFF ($EBIT(1-t) + D\\&A - CapEx - \\Delta NWC$) represents cash available to all capital providers; FCFE ($FCFF - Interest(1-t) + Net Borrowing$) represents cash available to common shareholders."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_lit_16",
    "section": "literacy",
    "prompt": "How does 'Monte Carlo Simulation' quantify valuation risk in financial AI models?",
    "options": [
      {
        "id": "a",
        "label": "Simulates casino gambling games in Excel."
      },
      {
        "id": "b",
        "label": "Selects a single best-case scenario."
      },
      {
        "id": "c",
        "label": "Runs 10,000+ iterations sampling uncertain input distributions (revenue growth, margins, interest rates) to produce probability distributions of target share price and default risk."
      },
      {
        "id": "d",
        "label": "Deletes all low-probability financial outcomes."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_lit_17",
    "section": "literacy",
    "prompt": "When analyzing M&A accretion/dilution with AI assistance, what determines whether an acquisition is EPS accretive?",
    "options": [
      {
        "id": "a",
        "label": "The deal is accretive if both companies have the same CEO."
      },
      {
        "id": "b",
        "label": "In an all-stock deal, the acquisition is accretive if the acquirer's P/E ratio is higher than the target's effective purchase P/E ratio (after post-tax synergies and financing costs)."
      },
      {
        "id": "c",
        "label": "All acquisitions are 100% accretive automatically."
      },
      {
        "id": "d",
        "label": "Accretion is determined by company market share."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_lit_18",
    "section": "literacy",
    "prompt": "What is 'Capital Asset Pricing Model (CAPM)' for calculating Cost of Equity ($K_e$)?",
    "options": [
      {
        "id": "a",
        "label": "$K_e = R_f + \\beta \\times (R_m - R_f)$, where $R_f$ is risk-free rate, $\\beta$ is equity beta risk, and $(R_m - R_f)$ is the equity risk premium."
      },
      {
        "id": "b",
        "label": "$K_e = \\text{Stock Price} \\times \\text{Dividend Yield}$."
      },
      {
        "id": "c",
        "label": "$K_e = \\text{Total Assets} / \\text{Total Debt}$."
      },
      {
        "id": "d",
        "label": "$K_e = \\text{Federal Reserve Interest Rate} \\times 2$."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_lit_19",
    "section": "literacy",
    "prompt": "In financial prompt engineering, why must 'Zero Assumption Hallucination' instructions be explicitly declared?",
    "options": [
      {
        "id": "a",
        "label": "Prevents the model from generating text in English."
      },
      {
        "id": "b",
        "label": "Because financial numbers are confidential."
      },
      {
        "id": "c",
        "label": "To increase prompt processing speed."
      },
      {
        "id": "d",
        "label": "Forces the AI to explicitly state 'Data Not Disclosed in Filings' rather than inventing plausible-looking numbers when specific balance sheet line items are missing."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_lit_20",
    "section": "literacy",
    "prompt": "What is 'Unlevering and Relevering Beta (Hamada Equation)' in corporate valuation?",
    "options": [
      {
        "id": "a",
        "label": "Adjusts stock prices for inflation."
      },
      {
        "id": "b",
        "label": "Calculates employee stock option vesting."
      },
      {
        "id": "c",
        "label": "Removes debt structure distortion from peer betas ($\\beta_U = \\frac{\\beta_L}{1 + (1-t)(D/E)}$) to measure pure business risk, and relevers for target capital structure."
      },
      {
        "id": "d",
        "label": "Deletes beta values that are greater than 1.0."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_lit_21",
    "section": "literacy",
    "prompt": "How should an AI financial analyst interpret 'Revenue Recognition Under ASC 606' in SaaS contracts?",
    "options": [
      {
        "id": "a",
        "label": "Recognizes 100% of 5-year contract value on Day 1 as revenue."
      },
      {
        "id": "b",
        "label": "Recognizes revenue ratably over the subscription performance obligation period rather than upfront on contract signing, separating Bookings, ARR, and Deferred Revenue."
      },
      {
        "id": "c",
        "label": "Ignores deferred revenue on the balance sheet."
      },
      {
        "id": "d",
        "label": "Requires all software contracts to be paid in cash."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_lit_22",
    "section": "literacy",
    "prompt": "What is the 'Weighted Average Cost of Capital (WACC)' formula in enterprise valuation?",
    "options": [
      {
        "id": "a",
        "label": "$WACC = \\left(\\frac{E}{V} \\times K_e\\right) + \\left(\\frac{D}{V} \\times K_d \\times (1 - t)\\right)$, weighting cost of equity and post-tax cost of debt by capital structure proportions."
      },
      {
        "id": "b",
        "label": "$WACC = \\text{Total Debt} + \\text{Total Equity}$."
      },
      {
        "id": "c",
        "label": "$WACC = \\text{Net Income} / \\text{Share Count}$."
      },
      {
        "id": "d",
        "label": "$WACC = \\text{Bank Prime Lending Rate}$."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_lit_23",
    "section": "literacy",
    "prompt": "When analyzing Corporate Credit Ratings (Moody's / S&P), which financial metric is most heavily scrutinized for default risk?",
    "options": [
      {
        "id": "a",
        "label": "The number of social media followers the company has."
      },
      {
        "id": "b",
        "label": "The color of the corporate logo."
      },
      {
        "id": "c",
        "label": "The CEO's college degree."
      },
      {
        "id": "d",
        "label": "Debt / EBITDA leverage multiple and Interest Coverage Ratio ($EBITDA / \\text{Interest Expense}$)."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_lit_24",
    "section": "literacy",
    "prompt": "How does 'Cohort-Based LTV/CAC Modeling' quantify SaaS customer acquisition economics?",
    "options": [
      {
        "id": "a",
        "label": "Multiplies marketing spend by total website clicks."
      },
      {
        "id": "b",
        "label": "Assumes customer churn rate is always zero."
      },
      {
        "id": "c",
        "label": "Calculates Customer Lifetime Value ($LTV = \\frac{ARPU \\times \\text{Gross Margin}}{\\text{Churn Rate}}$) against Customer Acquisition Cost ($CAC$), targeting an optimal $LTV/CAC \\ge 3.0$."
      },
      {
        "id": "d",
        "label": "Divides annual revenue by 12 months."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_lit_25",
    "section": "literacy",
    "prompt": "What is 'Goodwill Impairment Testing' on the balance sheet under GAAP / IFRS?",
    "options": [
      {
        "id": "a",
        "label": "Evaluating employee customer service ratings."
      },
      {
        "id": "b",
        "label": "Testing whether the fair market value of an acquired reporting unit has fallen below its carrying book value, requiring a non-cash write-down against Net Income."
      },
      {
        "id": "c",
        "label": "Measuring charitable donation amounts."
      },
      {
        "id": "d",
        "label": "Deleting intangible assets after 1 year."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_lit_26",
    "section": "literacy",
    "prompt": "How does an AI model distinguish between 'Enterprise Value (EV)' and 'Equity Value (Market Cap)'?",
    "options": [
      {
        "id": "a",
        "label": "$EV = \\text{Equity Value} + \\text{Total Debt} + \\text{Preferred Stock} + \\text{Minority Interest} - \\text{Cash and Cash Equivalents}$, reflecting total core operating business value."
      },
      {
        "id": "b",
        "label": "Enterprise Value and Equity Value are always identical."
      },
      {
        "id": "c",
        "label": "Enterprise Value excludes all debt."
      },
      {
        "id": "d",
        "label": "Equity Value includes cash but excludes stock price."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_lit_27",
    "section": "literacy",
    "prompt": "What is 'Seasonality Adjustment in Rolling 12-Month (LTM / TTM) Metrics'?",
    "options": [
      {
        "id": "a",
        "label": "Multiplying Q1 revenue by 4."
      },
      {
        "id": "b",
        "label": "Deleting Q4 data."
      },
      {
        "id": "c",
        "label": "Averaging annual revenue over 10 years."
      },
      {
        "id": "d",
        "label": "Summing the most recent four consecutive quarters to eliminate seasonal holiday or agricultural fluctuations and measure true ongoing operational performance."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_lit_28",
    "section": "literacy",
    "prompt": "In private equity deal screening, what does 'Internal Rate of Return (IRR)' calculate?",
    "options": [
      {
        "id": "a",
        "label": "The simple percentage gain on day one."
      },
      {
        "id": "b",
        "label": "The bank loan interest rate."
      },
      {
        "id": "c",
        "label": "The annualized compound discount rate that sets the Net Present Value (NPV) of all investment cash inflows and outflows equal to zero."
      },
      {
        "id": "d",
        "label": "The rate of employee turnover."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_lit_29",
    "section": "literacy",
    "prompt": "How should an AI assistant audit 'Related Party Transactions' in SEC 10-K Footnotes?",
    "options": [
      {
        "id": "a",
        "label": "Deletes all footnote sections."
      },
      {
        "id": "b",
        "label": "Extracts all disclosed business transactions between the company and executive officers, board directors, or major shareholders, highlighting potential conflicts of interest."
      },
      {
        "id": "c",
        "label": "Assumes related party transactions are always illegal."
      },
      {
        "id": "d",
        "label": "Combines related party revenue into standard product sales."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_lit_30",
    "section": "literacy",
    "prompt": "Why must 'Stock-Based Compensation (SBC)' be carefully evaluated when modeling SaaS Free Cash Flow?",
    "options": [
      {
        "id": "a",
        "label": "While added back to operating cash flow as a non-cash expense, SBC causes ongoing equity dilution to existing shareholders and represents a real economic labor cost."
      },
      {
        "id": "b",
        "label": "SBC is 100% free money with zero economic cost."
      },
      {
        "id": "c",
        "label": "SBC must be paid in physical gold bars."
      },
      {
        "id": "d",
        "label": "SBC is banned under US GAAP."
      }
    ],
    "correctOptionId": "a"
  }
];

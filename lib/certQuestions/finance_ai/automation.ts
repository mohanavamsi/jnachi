import { CertQuestion } from '../types';

export const FINANCE_AI_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    "id": "fin_aut_01",
    "section": "automation",
    "prompt": "How can an automated pipeline ingest real-time SEC EDGAR corporate filings using Python?",
    "options": [
      {
        "id": "a",
        "label": "Scraping SEC website with 10,000 requests per second with no headers."
      },
      {
        "id": "b",
        "label": "Using the SEC EDGAR API / `sec-edgar-downloader` with a compliant User-Agent header, downloading raw XBRL / JSON filings and parsing primary financial statement tags."
      },
      {
        "id": "c",
        "label": "Downloading PDFs manually in a web browser."
      },
      {
        "id": "d",
        "label": "Calling the SEC phone support line."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_aut_02",
    "section": "automation",
    "prompt": "When automating dynamic Excel financial model updates with Python, which library preserves existing workbook formulas, macros, and cell formatting?",
    "options": [
      {
        "id": "a",
        "label": "`openpyxl` (with `data_only=False`) or `xlwings` which drives Excel via COM/AppleScript automation, updating driver cells without corrupting downstream formula chains."
      },
      {
        "id": "b",
        "label": "Exporting raw text files renamed with a `.xlsx` extension."
      },
      {
        "id": "c",
        "label": "Writing raw CSV files that overwrite all formulas."
      },
      {
        "id": "d",
        "label": "Converting Excel workbooks to JPEG images."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_aut_03",
    "section": "automation",
    "prompt": "How does an automated Monte Carlo financial simulation pipeline calculate Portfolio Value-at-Risk (VaR)?",
    "options": [
      {
        "id": "a",
        "label": "Takes the average stock price over the last 3 days."
      },
      {
        "id": "b",
        "label": "Assumes portfolio risk is always zero."
      },
      {
        "id": "c",
        "label": "Deletes all volatile assets from the calculation."
      },
      {
        "id": "d",
        "label": "Runs 50,000 multivariate asset return simulations with Cholesky decomposition covariance matrices, extracting the 95th / 99th percentile maximum projected portfolio loss."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_aut_04",
    "section": "automation",
    "prompt": "In automated earnings call transcript intelligence, how is executive sentiment scored across topics?",
    "options": [
      {
        "id": "a",
        "label": "Counts the number of words spoken by the CEO."
      },
      {
        "id": "b",
        "label": "Translates transcripts to audio."
      },
      {
        "id": "c",
        "label": "Splits transcripts by speaker and topic (e.g. Margins, China Demand, AI Capex), running fine-tuned financial LLMs (e.g. FinBERT) to quantify positive/negative sentiment shifts."
      },
      {
        "id": "d",
        "label": "Ranks executives by age."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_aut_05",
    "section": "automation",
    "prompt": "How can an automated financial data validation script detect balance sheet discrepancies?",
    "options": [
      {
        "id": "a",
        "label": "Checks if balance sheet numbers are printed in blue."
      },
      {
        "id": "b",
        "label": "Asserts `abs(Total_Assets - (Total_Liabilities + Equity)) < 0.01` and asserts cash flow ending balances match balance sheet cash across all historical periods, alerting on delta."
      },
      {
        "id": "c",
        "label": "Assumes balance sheets are always perfectly balanced without checks."
      },
      {
        "id": "d",
        "label": "Deletes columns with non-zero differences."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_aut_06",
    "section": "automation",
    "prompt": "When building an automated comparable company valuation table in Python, how are financial multiples fetched reliably?",
    "options": [
      {
        "id": "a",
        "label": "Querying structured financial market APIs (e.g. Bloomberg B-PIPE, FactSet, S&P Capital IQ, or Financial Modeling Prep) via authenticated REST/GraphQL endpoints with ticker lists."
      },
      {
        "id": "b",
        "label": "Asking social media chatbots for stock prices."
      },
      {
        "id": "c",
        "label": "Guessing P/E multiples based on company names."
      },
      {
        "id": "d",
        "label": "Using stock prices from 5 years ago."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_aut_07",
    "section": "automation",
    "prompt": "How does an automated financial pipeline reconcile multi-currency corporate consolidations?",
    "options": [
      {
        "id": "a",
        "label": "Converts all foreign currencies using a 1:1 ratio."
      },
      {
        "id": "b",
        "label": "Ignores foreign subsidiaries in financial consolidation."
      },
      {
        "id": "c",
        "label": "Uses cryptocurrency exchange rates."
      },
      {
        "id": "d",
        "label": "Applies average exchange rates for Income Statement revenue/expenses and period-end spot exchange rates for Balance Sheet assets/liabilities under ASC 830 (FASB 52)."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_aut_08",
    "section": "automation",
    "prompt": "What is the role of 'Automated Debt Schedule Waterfall Modeling' in LBO automations?",
    "options": [
      {
        "id": "a",
        "label": "Draws visual water fountain diagrams."
      },
      {
        "id": "b",
        "label": "Deletes debt obligations from company records."
      },
      {
        "id": "c",
        "label": "Models priority cash flow sweeps: calculating mandatory debt amortizations, revolving credit draws/repayments, and sweep of excess cash to prepay senior debt tranches."
      },
      {
        "id": "d",
        "label": "Calculates employee bonuses."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_aut_09",
    "section": "automation",
    "prompt": "How can Python scripts automate SEC Form 4 insider trading transaction monitoring for hedge funds?",
    "options": [
      {
        "id": "a",
        "label": "Calls corporate executives to ask about their stock sales."
      },
      {
        "id": "b",
        "label": "Subscribes to SEC RSS/Webhook feeds, filters for Form 4 filings, extracts transaction code ('P' for open-market purchase, 'S' for sale), shares traded, and officer title."
      },
      {
        "id": "c",
        "label": "Scrapes stock discussion forums."
      },
      {
        "id": "d",
        "label": "Assumes all insider transactions are illegal."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_aut_10",
    "section": "automation",
    "prompt": "In automated corporate credit risk scoring, how does 'Altman Z-Score Calculation' classify bankruptcy risk?",
    "options": [
      {
        "id": "a",
        "label": "Computes a weighted formula combining Working Capital, Retained Earnings, EBIT, Market Equity, and Sales against Total Assets; $Z < 1.81$ signals distress distress zone."
      },
      {
        "id": "b",
        "label": "Ranks companies based on CEO popularity."
      },
      {
        "id": "c",
        "label": "Measures company physical office size."
      },
      {
        "id": "d",
        "label": "Counts the number of products on the company website."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_aut_11",
    "section": "automation",
    "prompt": "How does an automated pipeline extract footnote tables from complex 100-page 10-K filings without table cell corruption?",
    "options": [
      {
        "id": "a",
        "label": "Reads the document as raw unspaced text."
      },
      {
        "id": "b",
        "label": "Deletes all tables from the report."
      },
      {
        "id": "c",
        "label": "Translates tables to audio clips."
      },
      {
        "id": "d",
        "label": "Uses layout-aware OCR/Vision models and HTML DOM structure parsers to retain exact row/column spans, extracting nested tables as clean Pandas dataframes."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_aut_12",
    "section": "automation",
    "prompt": "When building an automated financial dashboard in Streamlit / Dash, how are real-time market data websockets handled safely?",
    "options": [
      {
        "id": "a",
        "label": "Refreshes the entire webpage every 1 millisecond."
      },
      {
        "id": "b",
        "label": "Blocks the web server main thread during incoming quotes."
      },
      {
        "id": "c",
        "label": "Maintains async websocket client connections to market feeds with backpressure buffering, updating reactive charts via client-side state stores."
      },
      {
        "id": "d",
        "label": "Disables all incoming market data."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_aut_13",
    "section": "automation",
    "prompt": "What is 'Automated WACC Sensitivity Grid Generation' in valuation modeling?",
    "options": [
      {
        "id": "a",
        "label": "Draws electrical grid diagrams."
      },
      {
        "id": "b",
        "label": "Generates a 2D matrix evaluating Enterprise Value across a spectrum of WACC rates (e.g. 8.0% to 12.0%) and Terminal Growth Rates (e.g. 1.5% to 3.5%) in automated tables."
      },
      {
        "id": "c",
        "label": "Deletes outlier valuation numbers."
      },
      {
        "id": "d",
        "label": "Sets all valuation outcomes to the current stock price."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_aut_14",
    "section": "automation",
    "prompt": "How can Python scripts automate financial statement trend forecasting using ARIMA and Prophet models?",
    "options": [
      {
        "id": "a",
        "label": "Fits statistical time-series models on historical quarterly revenue, accounts for seasonal quarterly patterns and macro trend regressors, generating 8-quarter confidence intervals."
      },
      {
        "id": "b",
        "label": "Assumes revenue grows by exactly 10% forever."
      },
      {
        "id": "c",
        "label": "Forecasts revenue based on astrology charts."
      },
      {
        "id": "d",
        "label": "Copies competitor revenue numbers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_aut_15",
    "section": "automation",
    "prompt": "In automated M&A synergy modeling, how are cost synergies vs revenue synergies modeled over time?",
    "options": [
      {
        "id": "a",
        "label": "Assumes 100% of synergies occur on Day 1 with zero integration cost."
      },
      {
        "id": "b",
        "label": "Ignores cost synergies completely."
      },
      {
        "id": "c",
        "label": "Multiplies total revenue by 2."
      },
      {
        "id": "d",
        "label": "Models phased realization curves (e.g. 25% Year 1, 75% Year 2, 100% Year 3) with explicit one-time integration restructuring costs subtracted in early periods."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_aut_16",
    "section": "automation",
    "prompt": "How does an automated financial pipeline parse and validate XBRL (eXtensible Business Reporting Language) tags?",
    "options": [
      {
        "id": "a",
        "label": "Treats XBRL as plain English text."
      },
      {
        "id": "b",
        "label": "Deletes all XML tags."
      },
      {
        "id": "c",
        "label": "Uses standard XBRL parsers (`arelle`, `xbrl-parser`) to map US-GAAP / IFRS taxonomy tags (e.g. `us-gaap:Revenues`, `us-gaap:OperatingIncomeLoss`) to standard model schemas."
      },
      {
        "id": "d",
        "label": "Renames XBRL files to .mp3."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_aut_17",
    "section": "automation",
    "prompt": "When automating discounted cash flow models, how is 'Mid-Year Convention Discounting' calculated?",
    "options": [
      {
        "id": "a",
        "label": "Calculates cash flows only in June."
      },
      {
        "id": "b",
        "label": "Discounts cash flows assuming they are received evenly throughout the year ($Discount\\_Factor = \\frac{1}{(1 + WACC)^{t - 0.5}}$) rather than exclusively at year-end."
      },
      {
        "id": "c",
        "label": "Divides all cash flows by 2."
      },
      {
        "id": "d",
        "label": "Disables discounting."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_aut_18",
    "section": "automation",
    "prompt": "How can Python scripts automate quarterly Earnings Release PDF press release parsing for instant trading desk alerts?",
    "options": [
      {
        "id": "a",
        "label": "Watches PR Newswire / Business Wire feeds, parses headline metrics (Revenue, EPS vs consensus estimates) within 200ms using fast regex/LLMs, and broadcasts alerts via Slack/webhook."
      },
      {
        "id": "b",
        "label": "Waits 24 hours to read the morning newspaper."
      },
      {
        "id": "c",
        "label": "Sends physical mail alerts."
      },
      {
        "id": "d",
        "label": "Prints press releases on office printers."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_aut_19",
    "section": "automation",
    "prompt": "What is the purpose of 'Automated Financial Model Stress Testing under Macro Shocks'?",
    "options": [
      {
        "id": "a",
        "label": "Tests physical server strength with weights."
      },
      {
        "id": "b",
        "label": "Shuts down the finance department."
      },
      {
        "id": "c",
        "label": "Deletes all financial models."
      },
      {
        "id": "d",
        "label": "Automates simulation of severe macroeconomic shocks (e.g. 300 bps interest rate hike, 20% currency devaluation, 15% revenue drop) to test liquidity reserves and debt default risk."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_aut_20",
    "section": "automation",
    "prompt": "In automated portfolio rebalancing, how does 'Mean-Variance Optimization (Markowitz Efficient Frontier)' compute optimal weights?",
    "options": [
      {
        "id": "a",
        "label": "Allocates 100% of capital to the single most popular stock."
      },
      {
        "id": "b",
        "label": "Allocates equal dollar amounts to all 10,000 global stocks."
      },
      {
        "id": "c",
        "label": "Solves quadratic programming optimization (`scipy.optimize`) maximizing Sharpe Ratio for a target risk level, enforcing asset weight bounds and turnover constraints."
      },
      {
        "id": "d",
        "label": "Selects stocks randomly."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_aut_21",
    "section": "automation",
    "prompt": "How does an automated pipeline track 'Capital Expenditure (CapEx) vs Depreciation' schedules?",
    "options": [
      {
        "id": "a",
        "label": "Expensing 100% of multi-million factory investments in month 1."
      },
      {
        "id": "b",
        "label": "Maintains detailed Property, Plant & Equipment (PP&E) schedules tracking asset additions, straight-line/accelerated depreciation, and net book values over useful asset lifespans."
      },
      {
        "id": "c",
        "label": "Ignoring depreciation in cash flow calculations."
      },
      {
        "id": "d",
        "label": "Treating CapEx as pure dividend payments."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_aut_22",
    "section": "automation",
    "prompt": "When automating financial statement visualization in Python, what chart type best illustrates changes from EBITDA to Net Income?",
    "options": [
      {
        "id": "a",
        "label": "A Waterfall Chart (`plotly.graph_objects.Waterfall`) illustrating positive additions and negative subtractions (Interest, Tax, D&A) bridging EBITDA to Net Income."
      },
      {
        "id": "b",
        "label": "A 3D pie chart with 50 slices."
      },
      {
        "id": "c",
        "label": "A scatter plot of random points."
      },
      {
        "id": "d",
        "label": "A radar chart of employee skills."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_aut_23",
    "section": "automation",
    "prompt": "How can Python scripts automate ESG (Environmental, Social, Governance) corporate disclosure scoring?",
    "options": [
      {
        "id": "a",
        "label": "Rates companies based on office paint colors."
      },
      {
        "id": "b",
        "label": "Assumes all companies have identical ESG scores."
      },
      {
        "id": "c",
        "label": "Deletes ESG sections from reports."
      },
      {
        "id": "d",
        "label": "Extracts Scope 1/2/3 carbon emissions data, board diversity metrics, and safety incident disclosures from annual CSR reports against SASB / GRI reporting frameworks."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_aut_24",
    "section": "automation",
    "prompt": "What is 'Automated Stock Option Dilution Modeling (Treasury Stock Method)'?",
    "options": [
      {
        "id": "a",
        "label": "Doubles share count whenever stock options are granted."
      },
      {
        "id": "b",
        "label": "Ignores stock options completely."
      },
      {
        "id": "c",
        "label": "Calculates net incremental diluted shares by assuming option exercise proceeds are used by the company to repurchase shares on the open market at prevailing share prices."
      },
      {
        "id": "d",
        "label": "Converts stock options into physical gold coins."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_aut_25",
    "section": "automation",
    "prompt": "How does an automated pipeline generate 'Audit Trail Documentation' for every cell in a synthesized financial model?",
    "options": [
      {
        "id": "a",
        "label": "Removes all comments from Excel spreadsheets."
      },
      {
        "id": "b",
        "label": "Embeds cell metadata linking every extracted numerical value back to the source document filing, page number, XBRL tag, and extraction timestamp."
      },
      {
        "id": "c",
        "label": "Deletes source documents once numbers are extracted."
      },
      {
        "id": "d",
        "label": "Hides financial formulas from auditors."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_aut_26",
    "section": "automation",
    "prompt": "When automating financial ratio alerts, what condition should trigger an automated liquidity risk warning?",
    "options": [
      {
        "id": "a",
        "label": "Current Ratio ($Current\\_Assets / Current\\_Liabilities$) dropping below 1.0 or Quick Ratio dropping below 0.75, indicating short-term debt solvency risk."
      },
      {
        "id": "b",
        "label": "Revenue growing by 25%."
      },
      {
        "id": "c",
        "label": "Company hiring 10 new engineers."
      },
      {
        "id": "d",
        "label": "Stock price reaching an all-time high."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_aut_27",
    "section": "automation",
    "prompt": "How does 'Automated Financial Data Imputation' handle missing historical quarterly periods?",
    "options": [
      {
        "id": "a",
        "label": "Fills missing quarters with random numbers."
      },
      {
        "id": "b",
        "label": "Fills missing quarters with $0 and ignores errors."
      },
      {
        "id": "c",
        "label": "Deletes all historical financial data."
      },
      {
        "id": "d",
        "label": "Uses seasonal spline interpolation or flags missing data explicitly with audit warnings, preventing distorted CAGR calculations caused by naive zero fills."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_aut_28",
    "section": "automation",
    "prompt": "What is 'Automated Covenant Compliance Monitoring' in syndicated commercial lending?",
    "options": [
      {
        "id": "a",
        "label": "Waits for borrowers to default before checking covenants."
      },
      {
        "id": "b",
        "label": "Deletes credit agreements after loan closing."
      },
      {
        "id": "c",
        "label": "Continuously computes debt service coverage and leverage ratios from quarterly borrower financial uploads, automatically alerting credit officers to covenant breaches."
      },
      {
        "id": "d",
        "label": "Assumes borrowers never violate covenants."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_aut_29",
    "section": "automation",
    "prompt": "How can Python scripts automate Executive Compensation extraction from SEC DEF 14A Proxy Statements?",
    "options": [
      {
        "id": "a",
        "label": "Estimates executive salaries based on their age."
      },
      {
        "id": "b",
        "label": "Extracts the Summary Compensation Table, parsing salary, bonuses, stock awards, option awards, and non-equity incentive plan compensation per Named Executive Officer (NEO)."
      },
      {
        "id": "c",
        "label": "Deletes executive compensation disclosures."
      },
      {
        "id": "d",
        "label": "Treats executive compensation as zero."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_aut_30",
    "section": "automation",
    "prompt": "Why is 'Automated Model Version Archiving' essential for financial compliance and regulatory audits?",
    "options": [
      {
        "id": "a",
        "label": "Maintains immutable, time-stamped snapshots of financial valuation models and input assumptions used in historical board decisions and public disclosures."
      },
      {
        "id": "b",
        "label": "To save hard drive space by deleting old files."
      },
      {
        "id": "c",
        "label": "To prevent financial analysts from viewing old models."
      },
      {
        "id": "d",
        "label": "Because financial models expire after 7 days."
      }
    ],
    "correctOptionId": "a"
  }
];

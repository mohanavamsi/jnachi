import { CertQuestion } from '../types';

export const FINANCE_AI_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    "id": "fin_gro_01",
    "section": "growth",
    "prompt": "When building an enterprise automated financial analysis platform processing 10,000 corporate filings daily, how is ingestion throughput maximized?",
    "options": [
      {
        "id": "a",
        "label": "Running all 10,000 filings sequentially in a single Python script on a laptop."
      },
      {
        "id": "b",
        "label": "Decoupling filing download, XBRL parsing, LLM financial extraction, and database persistence into asynchronous distributed Celery/Kafka worker pipelines."
      },
      {
        "id": "c",
        "label": "Skipping all data extraction and storing only raw HTML files."
      },
      {
        "id": "d",
        "label": "Deleting filings after 10 minutes."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_gro_02",
    "section": "growth",
    "prompt": "How does 'Alternative Data Ingestion' (credit card transactions, satellite imagery, supply chain bills of lading) enhance financial forecasting models?",
    "options": [
      {
        "id": "a",
        "label": "Provides real-time, high-frequency leading economic indicators that signal corporate revenue inflection points weeks before official quarterly SEC earnings releases."
      },
      {
        "id": "b",
        "label": "Replaces traditional accounting statements completely."
      },
      {
        "id": "c",
        "label": "Generates fictional stock price charts."
      },
      {
        "id": "d",
        "label": "Forces companies to file SEC reports daily."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_gro_03",
    "section": "growth",
    "prompt": "In algorithmic portfolio risk modeling, what is 'Extreme Value Theory (EVT)' used for?",
    "options": [
      {
        "id": "a",
        "label": "Calculates the maximum value of a bank account."
      },
      {
        "id": "b",
        "label": "Measures the physical size of bank buildings."
      },
      {
        "id": "c",
        "label": "Sorts stock prices in ascending order."
      },
      {
        "id": "d",
        "label": "Models fat-tailed distribution probabilities of catastrophic financial market crashes and extreme tail-risk events that standard Gaussian normal distributions underestimate."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_gro_04",
    "section": "growth",
    "prompt": "How does 'Graph Neural Networks (GNN) on Corporate Supply Chain Knowledge Graphs' predict systemic contagion risk?",
    "options": [
      {
        "id": "a",
        "label": "Draws 2D flowcharts of corporate org charts."
      },
      {
        "id": "b",
        "label": "Deletes supplier contracts automatically."
      },
      {
        "id": "c",
        "label": "Propagates operational disruptions, default probabilities, and revenue shocks across multi-tier customer-supplier supplier network graphs to quantify cascading portfolio exposure."
      },
      {
        "id": "d",
        "label": "Ranks suppliers based on geographic distance only."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_gro_05",
    "section": "growth",
    "prompt": "What is 'Regime-Switching Financial Modeling (Hidden Markov Models)' in macro forecasting?",
    "options": [
      {
        "id": "a",
        "label": "Switches software code between Python and Java."
      },
      {
        "id": "b",
        "label": "Identifies shifts between distinct economic market regimes (e.g. Low Volatility Bull Market, High Inflation Stagflation, Liquidity Crisis) and adjusts asset allocation weights."
      },
      {
        "id": "c",
        "label": "Changes the operating system on the server."
      },
      {
        "id": "d",
        "label": "Predicts changes in government leadership."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_gro_06",
    "section": "growth",
    "prompt": "How does 'High-Frequency Limit Order Book (LOB) Feature Extraction' predict micro-price movements?",
    "options": [
      {
        "id": "a",
        "label": "Extracts bid-ask order queue imbalances, order flow toxicity (VPIN), and cancellation rates from Level 3 market data feeds to forecast short-term price direction."
      },
      {
        "id": "b",
        "label": "Counts the number of shares traded per day."
      },
      {
        "id": "c",
        "label": "Reads financial news headlines once per week."
      },
      {
        "id": "d",
        "label": "Measures internet latency between banks."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_gro_07",
    "section": "growth",
    "prompt": "What is 'Automated Alpha Factor Discovery via Genetic Programming' in quant hedge funds?",
    "options": [
      {
        "id": "a",
        "label": "Generates random stock tips for retail investors."
      },
      {
        "id": "b",
        "label": "Breeds laboratory animals."
      },
      {
        "id": "c",
        "label": "Writes marketing newsletters."
      },
      {
        "id": "d",
        "label": "Recursively mutates and crosses mathematical operators over fundamental and price volume data, evaluating Sharpe ratios to discover non-linear predictive trading signals."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_gro_08",
    "section": "growth",
    "prompt": "How does 'Dynamic Hedging with Deep Reinforcement Learning' optimize derivative portfolios?",
    "options": [
      {
        "id": "a",
        "label": "Buys call options randomly."
      },
      {
        "id": "b",
        "label": "Eliminates all options trading."
      },
      {
        "id": "c",
        "label": "Trains an RL policy network to minimize portfolio variance while balancing non-linear transaction costs and market slippage, outperforming traditional Black-Scholes delta hedging."
      },
      {
        "id": "d",
        "label": "Guarantees 100% risk-free profits."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_gro_09",
    "section": "growth",
    "prompt": "What is 'Automated M&A Target Screening across Private Company Registries'?",
    "options": [
      {
        "id": "a",
        "label": "Buys private companies without financial review."
      },
      {
        "id": "b",
        "label": "Filters millions of private entity filings by revenue growth thresholds, EBITDA margins, geographic footprint, and founder ownership, generating ranked acquisition target lists."
      },
      {
        "id": "c",
        "label": "Deletes private company records."
      },
      {
        "id": "d",
        "label": "Sends cold emails to all registered businesses."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_gro_10",
    "section": "growth",
    "prompt": "How does 'Factor Risk Attribution (Fama-French 5-Factor Model)' decompose investment returns?",
    "options": [
      {
        "id": "a",
        "label": "Decomposes portfolio returns into Market Risk, Size (SMB), Value (HML), Profitability (RMW), and Investment (CMA), isolating true manager Alpha from passive factor exposure."
      },
      {
        "id": "b",
        "label": "Attributes returns entirely to luck."
      },
      {
        "id": "c",
        "label": "Calculates returns based on stock ticker length."
      },
      {
        "id": "d",
        "label": "Divides returns by 5."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_gro_11",
    "section": "growth",
    "prompt": "What is 'Automated Real-Time Treasury Cash Sweeping' in enterprise corporate finance?",
    "options": [
      {
        "id": "a",
        "label": "Sweeps physical bank floors."
      },
      {
        "id": "b",
        "label": "Transfers company cash to employee accounts."
      },
      {
        "id": "c",
        "label": "Deletes bank transaction logs daily."
      },
      {
        "id": "d",
        "label": "Monitors real-time bank account balances across global subsidiaries, automatically sweeping excess idle cash into overnight yield-bearing liquidity funds or paying down credit lines."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_gro_12",
    "section": "growth",
    "prompt": "How does 'Automated Financial Model Auditing with Assertion Contracts' prevent formula errors?",
    "options": [
      {
        "id": "a",
        "label": "Requires two human accountants to sign every cell."
      },
      {
        "id": "b",
        "label": "Removes all mathematical formulas."
      },
      {
        "id": "c",
        "label": "Embeds runtime mathematical assertions (e.g. Cash $> 0$, $D\\&A \\le CapEx + Historical\\_PP\\&E$) that automatically halt model generation if logic violations occur."
      },
      {
        "id": "d",
        "label": "Disables error messages."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_gro_13",
    "section": "growth",
    "prompt": "What is 'Automated Credit Default Swap (CDS) Spread Monitoring' for counterparty risk?",
    "options": [
      {
        "id": "a",
        "label": "Trades credit default swaps without capital."
      },
      {
        "id": "b",
        "label": "Tracks market-implied probability of default (PD) derived from real-time CDS spread widenings, alerting treasury risk teams to counterparty credit deterioration."
      },
      {
        "id": "c",
        "label": "Measures bank customer satisfaction."
      },
      {
        "id": "d",
        "label": "Deletes credit ratings."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_gro_14",
    "section": "growth",
    "prompt": "How does 'High-Dimensional Portfolio Optimization with Ledoit-Wolf Covariance Shrinkage' improve stability?",
    "options": [
      {
        "id": "a",
        "label": "Shrinks empirical sample covariance matrices toward a structured target, eliminating sample noise and inversion instability when the number of assets $N$ exceeds time periods $T$."
      },
      {
        "id": "b",
        "label": "Shrinks stock prices to zero."
      },
      {
        "id": "c",
        "label": "Deletes 50% of portfolio assets."
      },
      {
        "id": "d",
        "label": "Multiplies all covariance numbers by 2."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_gro_15",
    "section": "growth",
    "prompt": "What is 'Automated Cross-Asset Macroeconomic Nowcasting' in financial modeling?",
    "options": [
      {
        "id": "a",
        "label": "Forecasts the weather."
      },
      {
        "id": "b",
        "label": "Predicts stock prices 50 years in advance."
      },
      {
        "id": "c",
        "label": "Measures historical GDP from 1900."
      },
      {
        "id": "d",
        "label": "Aggregates real-time economic data releases (PMI, payrolls, retail sales, inflation) using dynamic factor models to estimate current quarter GDP growth before official statistical releases."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_gro_16",
    "section": "growth",
    "prompt": "How does 'Automated Bond Yield Curve Fitting (Nelson-Siegel-Svensson Model)' price fixed-income securities?",
    "options": [
      {
        "id": "a",
        "label": "Connects bond yields with straight lines."
      },
      {
        "id": "b",
        "label": "Assumes all bond maturities have identical interest rates."
      },
      {
        "id": "c",
        "label": "Fits smooth continuous zero-coupon yield curves across Treasury maturities, estimating level, slope, and curvature parameters to accurately discount future bond cash flows."
      },
      {
        "id": "d",
        "label": "Sets bond prices based on bond certificate color."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_gro_17",
    "section": "growth",
    "prompt": "What is 'Automated Commercial Real Estate (CRE) Cash Flow Underwriting'?",
    "options": [
      {
        "id": "a",
        "label": "Estimates property values based on satellite photos only."
      },
      {
        "id": "b",
        "label": "Parses rent rolls, lease expiration schedules, tenant credit ratings, and operating expense escalations to compute Net Operating Income (NOI) and Debt Yields across property portfolios."
      },
      {
        "id": "c",
        "label": "Deletes tenant lease contracts."
      },
      {
        "id": "d",
        "label": "Assumes 100% occupancy forever."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_gro_18",
    "section": "growth",
    "prompt": "How does 'Automated Factor Crowding Detection' protect quantitative equity strategies?",
    "options": [
      {
        "id": "a",
        "label": "Monitors institutional fund position overlap, short interest concentration, and valuation dispersion to alert when excessive capital crowding creates rapid liquidation unwinding risks."
      },
      {
        "id": "b",
        "label": "Measures physical crowd sizes outside bank branches."
      },
      {
        "id": "c",
        "label": "Counts the number of retail trading accounts."
      },
      {
        "id": "d",
        "label": "Disables all algorithmic trading."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_gro_19",
    "section": "growth",
    "prompt": "What is 'Automated Synthetic Financial Statement Stress Simulation' (CCAR Stress Testing)?",
    "options": [
      {
        "id": "a",
        "label": "A test of bank employee physical fitness."
      },
      {
        "id": "b",
        "label": "A test of server hardware processing speed."
      },
      {
        "id": "c",
        "label": "An automated customer satisfaction survey."
      },
      {
        "id": "d",
        "label": "Simulates severe supervisory recession scenarios specified by the Federal Reserve, projecting bank Tier 1 Common Equity (CET1) capital ratios across 9 future quarters."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_gro_20",
    "section": "growth",
    "prompt": "How does 'Automated Tax Loss Harvesting Algorithm' enhance after-tax wealth management returns?",
    "options": [
      {
        "id": "a",
        "label": "Evades taxes illegally by hiding bank accounts."
      },
      {
        "id": "b",
        "label": "Sells all portfolio assets on December 31."
      },
      {
        "id": "c",
        "label": "Continuously identifies depreciated taxable positions, sells to realize capital losses that offset realized capital gains, and simultaneously buys correlated non-identical replacement assets under IRS wash-sale rules."
      },
      {
        "id": "d",
        "label": "Donates all client money to charity."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_gro_21",
    "section": "growth",
    "prompt": "What is 'Automated FX Hedging Optimization via Dynamic Currency Options'?",
    "options": [
      {
        "id": "a",
        "label": "Converts all corporate revenue to US Dollars instantly."
      },
      {
        "id": "b",
        "label": "Calculates net foreign currency exposures across global revenue streams and dynamically constructs optimal forward contracts and option collars to minimize FX volatility at lowest premium cost."
      },
      {
        "id": "c",
        "label": "Ignores currency exchange rate fluctuations."
      },
      {
        "id": "d",
        "label": "Trades foreign currencies for speculative profit."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_gro_22",
    "section": "growth",
    "prompt": "How does 'Automated Liquidity Black Hole Detection in Order Books' protect market-making algorithms?",
    "options": [
      {
        "id": "a",
        "label": "Identifies sudden widening of bid-ask spreads and evaporation of depth of book liquidity, triggering defensive quoting widening or inventory liquidation."
      },
      {
        "id": "b",
        "label": "Searches for astronomical black holes in outer space."
      },
      {
        "id": "c",
        "label": "Shuts down the financial exchange."
      },
      {
        "id": "d",
        "label": "Deletes unexecuted limit orders."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_gro_23",
    "section": "growth",
    "prompt": "What is 'Automated Financial Statement Consistency Verification via Graph Constraints'?",
    "options": [
      {
        "id": "a",
        "label": "Draws visual graph charts in PowerPoint."
      },
      {
        "id": "b",
        "label": "Removes all balance sheet numbers."
      },
      {
        "id": "c",
        "label": "Converts financial models to images."
      },
      {
        "id": "d",
        "label": "Represents all financial statement line items as nodes and accounting equations as directed edges, validating that every mathematical relationship across all 3 statements holds without contradiction."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_gro_24",
    "section": "growth",
    "prompt": "How does 'Automated Credit Rating Migration Modeling (Markov Transition Matrices)' project loan defaults?",
    "options": [
      {
        "id": "a",
        "label": "Assumes all borrowers maintain AAA credit ratings forever."
      },
      {
        "id": "b",
        "label": "Ranks borrowers alphabetically."
      },
      {
        "id": "c",
        "label": "Applies historical multi-year transition probability matrices (e.g. AAA $\\to$ AA $\\to$ BBB $\\to$ Default) to project future credit portfolio degradation and required loan loss reserves."
      },
      {
        "id": "d",
        "label": "Assigns random credit ratings."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_gro_25",
    "section": "growth",
    "prompt": "What is 'Automated Venture Capital Cap Table Waterfall Modeling'?",
    "options": [
      {
        "id": "a",
        "label": "Calculates office rent for startup companies."
      },
      {
        "id": "b",
        "label": "Models multi-tier liquidation preferences (participating vs non-participating preferred, liquidation multiples, cumulative dividends) to calculate exact payout distributions across investor classes upon exit."
      },
      {
        "id": "c",
        "label": "Divides company exit proceeds equally among all employees."
      },
      {
        "id": "d",
        "label": "Deletes investor share certificates."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_gro_26",
    "section": "growth",
    "prompt": "How does 'Automated Sovereign Debt Risk Modeling' incorporate geopolitical indicators?",
    "options": [
      {
        "id": "a",
        "label": "Blends fiscal debt-to-GDP ratios and foreign exchange reserves with quantitative political instability metrics, CDS spreads, and central bank foreign currency reserves."
      },
      {
        "id": "b",
        "label": "Ranks countries based on geographic size."
      },
      {
        "id": "c",
        "label": "Assumes all governments have zero default risk."
      },
      {
        "id": "d",
        "label": "Uses tourist visitor numbers as the primary risk factor."
      }
    ],
    "correctOptionId": "a"
  },
  {
    "id": "fin_gro_27",
    "section": "growth",
    "prompt": "What is 'Automated Derivative Volatility Surface Calibration (SVI / SABR Models)'?",
    "options": [
      {
        "id": "a",
        "label": "Assumes option volatility is constant across all strike prices."
      },
      {
        "id": "b",
        "label": "Draws 3D terrain maps of mountain ranges."
      },
      {
        "id": "c",
        "label": "Sets all option prices to $10."
      },
      {
        "id": "d",
        "label": "Calibrates implied volatility smiles and surfaces across option strikes and expirations, ensuring arbitrage-free pricing for complex structured equity and FX derivatives."
      }
    ],
    "correctOptionId": "d"
  },
  {
    "id": "fin_gro_28",
    "section": "growth",
    "prompt": "How does 'Automated Corporate Bankruptcy Prediction with Machine Learning (XGBoost / Random Forest)' outperform legacy linear Z-Scores?",
    "options": [
      {
        "id": "a",
        "label": "Predicts bankruptcy based on company social media posts."
      },
      {
        "id": "b",
        "label": "Deletes companies that are in financial distress."
      },
      {
        "id": "c",
        "label": "Captures non-linear feature interactions between cash burn rate, operating leverage, short-term debt maturities, and customer concentration, identifying distress 18 months earlier."
      },
      {
        "id": "d",
        "label": "Replaces corporate balance sheets with news articles."
      }
    ],
    "correctOptionId": "c"
  },
  {
    "id": "fin_gro_29",
    "section": "growth",
    "prompt": "What is 'Automated High-Performance Computing (HPC) Financial Backtesting Engine Architecture'?",
    "options": [
      {
        "id": "a",
        "label": "Backtests strategies by looking at monthly closing prices manually."
      },
      {
        "id": "b",
        "label": "Leverages C++/Rust core execution engines with Python bindings, memory-mapped tick data, and parallel worker pools to backtest complex trading strategies across 20 years of tick data in minutes."
      },
      {
        "id": "c",
        "label": "Runs backtests in single-threaded Python on a browser."
      },
      {
        "id": "d",
        "label": "Tests strategies on future data that has not happened."
      }
    ],
    "correctOptionId": "b"
  },
  {
    "id": "fin_gro_30",
    "section": "growth",
    "prompt": "Why is 'Automated Model Validation and Drift Governance' essential for scalable enterprise financial AI?",
    "options": [
      {
        "id": "a",
        "label": "Ensures financial prediction models adapt to changing interest rate environments, macro regimes, and regulatory accounting standards without silent valuation failures or balance sheet corruption."
      },
      {
        "id": "b",
        "label": "To intentionally cause financial model crashes."
      },
      {
        "id": "c",
        "label": "Because financial models are forbidden from running for more than 1 month."
      },
      {
        "id": "d",
        "label": "To increase cloud hosting costs."
      }
    ],
    "correctOptionId": "a"
  }
];

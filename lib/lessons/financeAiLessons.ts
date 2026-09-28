import type { Lesson } from '../lessonsData';

export const FINANCE_AI_LESSONS: Lesson[] = [
  // -------------------------------------------------------------
  // Lesson 64: Generative AI for 3-Statement Financial Modeling
  // -------------------------------------------------------------
  {
    id: 'lesson-64',
    slug: 'ai-3-statement-financial-modeling-accounting-guardrails',
    title: 'Generative AI for 3-Statement Financial Modeling & Accounting Guardrails',
    description: 'Structure AI prompts for dynamic 3-statement financial models, GAAP/IFRS balance sheet balancing, circular interest calculations, and deterministic number validation.',
    category: 'Finance & FinOps AI',
    categoryKey: 'finance',
    readTime: '8 min read',
    lessonNumber: 64,
    difficulty: 'Advanced',
    keyTakeaways: [
      'LLMs must never perform mental math for financial statements; they must generate deterministic formulaic logic or execute verified Python code',
      'The 3 statements (Income Statement, Balance Sheet, Cash Flow Statement) require strict linking: Net Income -> Cash Flow -> Cash Balance on Balance Sheet',
      'Structured JSON schemas enforce accounting constraints like Assets = Liabilities + Stockholders Equity',
      'Strict zero-data-retention (ZDR) and Material Non-Public Information (MNPI) compliance guardrails must isolate corporate financial data',
    ],
    tools: ['Python Code Interpreter', 'Pydantic Financial Schemas', 'Excel / Formulas', 'SEC Edgar'],
    relatedCertifications: ['AI for Financial Modeling', 'AI Foundations'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Basic accounting & financial statement literacy'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Applying generative AI to corporate finance requires eliminating mathematical hallucinations entirely. By constraining models to structured JSON schemas and delegating all arithmetic to deterministic Python execution, finance teams achieve institutional accuracy at 10x speed.',
      core: `### Structured 3-Statement Financial JSON Schema

\`\`\`python
from pydantic import BaseModel, Field, model_validator

class IncomeStatement(BaseModel):
    revenue: float
    cogs: float
    operating_expenses: float
    tax_rate: float = 0.21
    
    @property
    def gross_profit(self) -> float:
        return self.revenue - self.cogs
        
    @property
    def operating_income(self) -> float:
        return self.gross_profit - self.operating_expenses
        
    @property
    def net_income(self) -> float:
        ebt = self.operating_income
        return ebt * (1 - self.tax_rate)

class BalanceSheet(BaseModel):
    cash: float
    accounts_receivable: float
    inventory: float
    ppe_net: float
    accounts_payable: float
    long_term_debt: float
    retained_earnings: float
    common_stock: float
    
    @model_validator(mode='after')
    def verify_balance_equation(self):
        total_assets = self.cash + self.accounts_receivable + self.inventory + self.ppe_net
        total_liab_equity = self.accounts_payable + self.long_term_debt + self.retained_earnings + self.common_stock
        diff = abs(total_assets - total_liab_equity)
        if diff > 0.01:
            raise ValueError(f"Balance Sheet out of balance by {diff:,.2f}! Assets: {total_assets}, Liab+Eq: {total_liab_equity}")
        return self
\`\`\`

---

### Core Prompt Constraints for Financial Modeling
1. **Never Calculate In-Text:** Output exact Excel formulas (\`=SUM(C5:C12)\`) or Python code rather than guessing final sum values.
2. **Flag Assumptions Explicitly:** All forecast growth rates and discount factors must be cataloged in a separate metadata block.
3. **Reconcile Footnotes:** Cross-reference disclosure footnotes for non-recurring restructuring charges.`,
      tryThis: `Write a Python Pydantic model for a Statement of Cash Flows that links Net Income and Depreciation to calculate Operating Cash Flow deterministically!`,
    },
    quiz: [
      {
        question: 'Why should financial analysts pair generative LLMs with Python code interpreters rather than asking the LLM to output final calculated sums directly in markdown?',
        options: [
          'LLMs cannot output numbers higher than 100.',
          'LLMs are autoregressive probabilistic token predictors prone to subtle arithmetic hallucinations; code interpreters execute deterministic calculations with 100% mathematical precision.',
          'Python code interpreters are required by SEC filing regulations.',
          'Excel cannot read markdown tables.',
        ],
        correctIndex: 1,
        explanation: 'Probabilistic language models predict likely number tokens but do not have an internal math engine. Delegating calculations to Python ensures exact arithmetic with zero hallucination.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 65: Automated DCF & LBO Modeling
  // -------------------------------------------------------------
  {
    id: 'lesson-65',
    slug: 'automated-dcf-lbo-financial-modeling-python',
    title: 'Automated DCF, WACC & LBO Schedules with Python Execution',
    description: 'Construct end-to-end Discounted Cash Flow (DCF) and Leveraged Buyout (LBO) models: Unlevered Free Cash Flow projections, WACC discounting, and debt paydown cascades.',
    category: 'Finance & FinOps AI',
    categoryKey: 'finance',
    readTime: '9 min read',
    lessonNumber: 65,
    difficulty: 'Advanced',
    keyTakeaways: [
      'DCF models discount projected Unlevered Free Cash Flow (UFCF) by the Weighted Average Cost of Capital (WACC)',
      'Terminal value can be modeled via the Gordon Growth Method or Exit Multiple method, cross-checked for reasonableness',
      'LBO models simulate sponsor returns (IRR and MoIC) across senior debt tranches, mezzanine financing, and cash sweep waterfalls',
      'AI agents automate the construction of 2-way sensitivity tables across revenue growth rates and exit multiples',
    ],
    tools: ['NumPy Financial', 'Pandas', 'OpenPyXL', 'QuantLib'],
    relatedCertifications: ['AI for Financial Modeling', 'AI Practitioner'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 64: 3-Statement Modeling'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Discounted Cash Flow (DCF) and Leveraged Buyout (LBO) models are the quantitative backbone of investment banking and private equity. Combining LLMs for assumption extraction with programmatic calculation engines automates full model delivery in seconds.',
      core: `### Programmatic DCF Valuation Engine in Python

\`\`\`python
import numpy as np

def calculate_dcf_valuation(
    ebit_projections: list[float],
    tax_rate: float,
    d_and_a: list[float],
    capex: list[float],
    nwc_change: list[float],
    wacc: float,
    terminal_growth_rate: float
) -> dict:
    years = len(ebit_projections)
    ufcf = []
    
    for i in range(years):
        nopat = ebit_projections[i] * (1 - tax_rate)
        fcf = nopat + d_and_a[i] - capex[i] - nwc_change[i]
        ufcf.append(fcf)
        
    discount_factors = [(1 + wacc) ** (t + 1) for t in range(years)]
    pv_fcf = [ufcf[t] / discount_factors[t] for t in range(years)]
    cumulative_pv_fcf = sum(pv_fcf)
    
    # Gordon Growth Terminal Value
    terminal_fcf = ufcf[-1] * (1 + terminal_growth_rate)
    terminal_value = terminal_fcf / (wacc - terminal_growth_rate)
    pv_terminal_value = terminal_value / discount_factors[-1]
    
    enterprise_value = cumulative_pv_fcf + pv_terminal_value
    
    return {
        "projected_ufcf": ufcf,
        "pv_fcf_sum": round(cumulative_pv_fcf, 2),
        "terminal_value": round(terminal_value, 2),
        "pv_terminal_value": round(pv_terminal_value, 2),
        "enterprise_value": round(enterprise_value, 2)
    }
\`\`\`

---

### LBO Return Metrics
- **IRR (Internal Rate of Return):** The annualized effective compounded return rate on sponsor equity.
- **MoIC (Multiple on Invested Capital):** Total cash returned divided by initial equity invested (e.g. 2.5x).
- **Cash Sweep:** Allocating 100% of excess cash flow toward prepaying high-interest senior debt.`,
      tryThis: `Run the DCF function with a 5-year EBIT projection of [$50M, $60M, $72M, $85M, $100M], 21% tax rate, 9.5% WACC, and 2.5% terminal growth rate to find Enterprise Value!`,
    },
    quiz: [
      {
        question: 'In a Discounted Cash Flow (DCF) model, why must Capital Expenditures (CapEx) be subtracted when calculating Unlevered Free Cash Flow?',
        options: [
          'CapEx is a non-cash expense listed on the Income Statement.',
          'CapEx represents actual cash spent on property, plant, and equipment that is not available to distribute to debt and equity capital providers.',
          'CapEx is an income tax deduction.',
          'CapEx is already included in Working Capital.',
        ],
        correctIndex: 1,
        explanation: 'CapEx is a cash outflow for investing in long-term fixed assets. Since that cash has left the firm, it must be deducted to calculate Free Cash Flow available to investors.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 66: SEC 10-K/10-Q Parsing & XBRL Extraction
  // -------------------------------------------------------------
  {
    id: 'lesson-66',
    slug: 'sec-edgar-10k-parsing-xbrl-extraction',
    title: 'Multi-Table SEC 10-K/10-Q Parsing & XBRL Tag Extraction',
    description: 'Extract multi-year financial tables from SEC EDGAR filings, parse XBRL US-GAAP taxonomies, reconcile restated line items, and audit footnote disclosures.',
    category: 'Finance & FinOps AI',
    categoryKey: 'finance',
    readTime: '8 min read',
    lessonNumber: 66,
    difficulty: 'Advanced',
    keyTakeaways: [
      'SEC EDGAR filings are published in HTML and Inline XBRL (iXBRL) format, embedding machine-readable accounting tags directly into filing documents',
      'XBRL taxonomy concepts (e.g., \`us-gaap:Revenues\`, \`us-gaap:OperatingIncomeLoss\`) standardize financial line items across public companies',
      'LLM agents must identify restatements and changes in accounting estimates across consecutive 10-K annual reports',
      'Footnote disclosure tables (leases, segment reporting, stock-based compensation) require table-aware parsing algorithms',
    ],
    tools: ['sec-edgar-downloader', 'BeautifulSoup4', 'Python xbrl', 'LlamaParse'],
    relatedCertifications: ['AI for Financial Modeling', 'RAG Architect'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Lesson 64: 3-Statement Modeling'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Extracting historical financial data from 200-page SEC 10-K annual filings manually takes hours. Utilizing automated XBRL extraction pipelines allows analysts to ingest structured financial data across thousands of public companies programmatically.',
      core: `### Parsing SEC EDGAR Filings & XBRL Concepts

\`\`\`python
import requests
import json

def fetch_sec_company_facts(cik_str: str) -> dict:
    """
    Fetches SEC Company Facts API directly from EDGAR (Zero scrape latency).
    CIK must be 10 digits padded with leading zeros.
    """
    headers = {'User-Agent': 'JnachiFinance Research/1.0 (contact@jnachi.com)'}
    cik_padded = cik_str.zfill(10)
    url = f"https://data.sec.gov/api/xbrl/companyfacts/CIK{cik_padded}.json"
    
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        raise ConnectionError(f"SEC EDGAR returned status {response.status_code}")
        
    data = response.json()
    gaap_facts = data.get("facts", {}).get("us-gaap", {})
    
    # Extract Revenue History across 10-K filings:
    revenues = gaap_facts.get("Revenues", {}).get("units", {}).get("USD", [])
    annual_revenues = [r for r in revenues if r.get("form") == "10-K"]
    
    return {
        "company_name": data.get("entityName"),
        "cik": cik_str,
        "recent_annual_revenues": annual_revenues[-5:] # Last 5 years
    }
\`\`\`

---

### Handling Restatements & Footnote Leases
- **ASC 842 Lease Standards:** Operating leases must be capitalized as Right-of-Use (ROU) assets with corresponding lease liabilities.
- **Segment Reporting (ASC 280):** Ingest operating profit by business division and geographical region to model segment-level revenue drivers.`,
      tryThis: `Use the SEC Company Facts API structure above with Apple CIK (0000320193) to inspect how R&D Expense (\`us-gaap:ResearchAndDevelopmentExpense\`) is recorded over time!`,
    },
    quiz: [
      {
        question: 'What is the primary advantage of querying SEC Inline XBRL (iXBRL) data over scraping raw HTML tables?',
        options: [
          'XBRL files do not contain numbers.',
          'XBRL tags every financial line item with a standardized US-GAAP / IFRS taxonomy concept, unit of measure, and exact reporting period, eliminating parsing ambiguity.',
          'HTML tables are encrypted by the SEC.',
          'XBRL only works on weekends.',
        ],
        correctIndex: 1,
        explanation: 'XBRL provides machine-readable semantic tags (e.g. us-gaap:Revenues with exact currency and period metadata), preventing table alignment errors.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 67: Monte Carlo Risk Simulations & Valuation Matrices
  // -------------------------------------------------------------
  {
    id: 'lesson-67',
    slug: 'monte-carlo-simulations-valuation-sensitivity-matrices',
    title: 'Monte Carlo Risk Simulations & Valuation Sensitivity Matrices',
    description: 'Execute high-iteration probabilistic Monte Carlo simulations, generate Value-at-Risk (VaR) percentiles, and build dynamic 2-way sensitivity tables.',
    category: 'Finance & FinOps AI',
    categoryKey: 'finance',
    readTime: '8 min read',
    lessonNumber: 67,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Deterministic point estimates ("revenue will grow exactly 12%") fail to capture downside risk; Monte Carlo simulations model probability distributions',
      'Running 10,000+ simulation iterations generates confidence intervals (P10, P50, P90) for target valuation and EBITDA',
      'Value-at-Risk (VaR) calculates maximum expected portfolio loss at a 95% or 99% confidence level over a specific time horizon',
      '2-way sensitivity matrices display valuation outputs across varying discount rates (WACC) and terminal growth assumptions',
    ],
    tools: ['NumPy', 'SciPy Stats', 'Matplotlib / Seaborn', 'Pandas'],
    relatedCertifications: ['AI for Financial Modeling', 'AI Systems Builder'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Lesson 65: DCF Modeling'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Institutional investment committees do not make decisions on single-number projections. Monte Carlo simulations stress-test financial models across thousands of simulated economic scenarios to uncover probability distributions and tail risks.',
      core: `### Running a 10,000-Iteration Monte Carlo Valuation in Python

\`\`\`python
import numpy as np

def run_monte_carlo_valuation(
    base_ebitda: float,
    mean_growth: float = 0.08,
    growth_std: float = 0.04,
    mean_multiple: float = 12.0,
    multiple_std: float = 1.5,
    iterations: int = 10000
) -> dict:
    # 1. Sample stochastic growth rates (Normal distribution)
    growth_samples = np.random.normal(mean_growth, growth_std, iterations)
    
    # 2. Sample stochastic EV/EBITDA exit multiples (Truncated distribution)
    multiple_samples = np.random.normal(mean_multiple, multiple_std, iterations)
    multiple_samples = np.clip(multiple_samples, 6.0, 25.0) # realistic floor/ceiling
    
    # 3. Calculate 5-year future EBITDA & Enterprise Value per iteration
    projected_ebitda = base_ebitda * ((1 + growth_samples) ** 5)
    simulated_ev = projected_ebitda * multiple_samples
    
    # 4. Extract Percentiles
    p10 = np.percentile(simulated_ev, 10) # Downside bear case
    p50 = np.percentile(simulated_ev, 50) # Base median case
    p90 = np.percentile(simulated_ev, 90) # Upside bull case
    
    return {
        "iterations": iterations,
        "p10_bear_valuation": round(float(p10), 2),
        "p50_median_valuation": round(float(p50), 2),
        "p90_bull_valuation": round(float(p90), 2),
        "mean_valuation": round(float(np.mean(simulated_ev)), 2),
        "std_deviation": round(float(np.std(simulated_ev)), 2)
    }
\`\`\`

---

### Generating 2-Way Sensitivity Tables
Sensitivity analysis evaluates how valuation changes when adjusting two key variables simultaneously (e.g. WACC from 8.0% to 12.0% on the vertical axis vs Terminal Growth from 1.5% to 3.5% on the horizontal axis).`,
      tryThis: `Run the Monte Carlo function with $100M base EBITDA. Compare how widening the growth standard deviation from 4% to 10% impacts the P10 downside valuation!`,
    },
    quiz: [
      {
        question: 'What does a P10 valuation output of $450 Million represent in a Monte Carlo distribution?',
        options: [
          'The valuation is guaranteed to be exactly $450 Million 100% of the time.',
          'There is a 10% probability that the company valuation will be $450 Million or lower (representing the conservative downside bear case), and a 90% probability it will be higher.',
          'The company made $450 Million in revenue 10 years ago.',
          'The corporate tax rate is 10%.',
        ],
        correctIndex: 1,
        explanation: 'In financial percentile rankings, P10 indicates that only 10% of simulation runs fell below $450M, making it a standard conservative benchmark for downside scenario planning.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 68: Cloud AI Cost Engineering & Token Unit Economics
  // -------------------------------------------------------------
  {
    id: 'lesson-68',
    slug: 'cloud-ai-cost-engineering-token-unit-economics-gpu-tco',
    title: 'Cloud AI Cost Engineering: LLM Token Unit Economics & GPU TCO',
    description: 'Calculate input/output token cost formulas, model GPU cluster Total Cost of Ownership (H100/A100 spot vs reserved), and forecast enterprise AI operational expenses.',
    category: 'Finance & FinOps AI',
    categoryKey: 'finance',
    readTime: '9 min read',
    lessonNumber: 68,
    difficulty: 'Advanced',
    keyTakeaways: [
      'LLM token economics differ between input (prefill) and output (decode) pricing; output tokens typically cost 3x–4x more due to sequential generation bottlenecks',
      'Context window expansion creates quadratic cost increases if static system prompts are repeatedly re-sent without caching',
      'GPU Total Cost of Ownership (TCO) includes hourly hardware rates, electricity, cooling, networking interconnect (InfiniBand), and orchestration overhead',
      'The "Build vs Buy" break-even threshold determines when self-hosting open models (vLLM) becomes cheaper than paying hosted API token fees',
    ],
    tools: ['FinOps FOCUS', 'AWS Cost Explorer / GCP Billing', 'NVIDIA H100 / L40S', 'Python Unit Economics Models'],
    relatedCertifications: ['FinOps Architect', 'LLMOps Specialist'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Basic cloud billing & token comprehension'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Unmonitored generative AI applications quickly lead to budget exhaustion. AI FinOps architects model token unit economics, optimize prefill caching, and quantitatively evaluate hosted APIs vs self-hosted GPU clusters.',
      core: `### LLM Token Unit Economic Formula in Python

\`\`\`python
def calculate_monthly_llm_cost(
    monthly_requests: int,
    avg_input_tokens: int,
    avg_output_tokens: int,
    input_cost_per_million: float, # e.g. $2.50 / M tokens
    output_cost_per_million: float, # e.g. $10.00 / M tokens
    cache_hit_rate: float = 0.0,
    cached_input_discount: float = 0.50 # 50% discount on cached inputs
) -> dict:
    total_input_tokens = monthly_requests * avg_input_tokens
    total_output_tokens = monthly_requests * avg_output_tokens
    
    # Apply prompt caching discount
    cached_tokens = total_input_tokens * cache_hit_rate
    uncached_tokens = total_input_tokens * (1 - cache_hit_rate)
    
    input_cost = (
        (uncached_tokens / 1_000_000 * input_cost_per_million) +
        (cached_tokens / 1_000_000 * (input_cost_per_million * (1 - cached_input_discount)))
    )
    
    output_cost = total_output_tokens / 1_000_000 * output_cost_per_million
    total_cost = input_cost + output_cost
    cost_per_request = total_cost / monthly_requests
    
    return {
        "total_monthly_cost": round(total_cost, 2),
        "input_cost": round(input_cost, 2),
        "output_cost": round(output_cost, 2),
        "cost_per_single_request": round(cost_per_request, 4),
        "savings_from_caching": round((total_input_tokens / 1_000_000 * input_cost_per_million) - input_cost, 2)
    }
\`\`\`

---

### Hosted API vs Self-Hosted GPU Cluster Break-Even
- **Hosted API (Pay-as-you-go):** Zero fixed cost, ideal for variable loads under 50 Million tokens/day.
- **Dedicated 8x H100 SXM Cluster ($24,000/month):** Fixed cost, becomes 40-70% cheaper once throughput exceeds 150 Million tokens/day with steady concurrency.`,
      tryThis: `Calculate the cost for 1,000,000 customer service inquiries per month with 1,500 input tokens and 300 output tokens, comparing 0% cache hit rate vs 60% cache hit rate!`,
    },
    quiz: [
      {
        question: 'Why are output generation tokens priced significantly higher (e.g. 3x–4x) than input prompt tokens across major cloud LLM providers?',
        options: [
          'Output tokens are copyrighted by the provider.',
          'Input tokens are processed in parallel matrix multiplications across all GPUs at once, whereas output tokens must be decoded sequentially one token at a time, holding GPU memory resources longer.',
          'Input tokens do not use GPU VRAM.',
          'Output tokens use more network bandwidth.',
        ],
        correctIndex: 1,
        explanation: 'Input prefill is compute-bound and highly parallelized. Output decoding is memory-bandwidth bound and strictly autoregressive (sequential), occupying GPU hardware for a longer duration per token.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 69: Semantic Prompt Caching & Model Cascading
  // -------------------------------------------------------------
  {
    id: 'lesson-69',
    slug: 'semantic-prompt-caching-model-cascading-slm-routing',
    title: 'Semantic Prompt Caching & Model Cascading (SLM to Frontier)',
    description: 'Slash enterprise inference costs by 40-70% using semantic similarity caching with Redis and automated model cascading from Small Language Models to Frontier LLMs.',
    category: 'Finance & FinOps AI',
    categoryKey: 'finance',
    readTime: '8 min read',
    lessonNumber: 69,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Exact-match caching fails when users rephrase identical questions ("How do I reset my password?" vs "Where can I change password?")',
      'Semantic caching compares vector embeddings of queries against a Redis cache with a cosine similarity threshold (e.g., 0.92+)',
      'Model Cascading routes 70-80% of routine requests to fast, inexpensive Small Language Models (SLMs like Llama 3 8B or GPT-4o-mini)',
      'Confidence scoring escalates complex multi-step reasoning queries to Frontier models (Claude 3.5 Sonnet / GPT-4o) only when necessary',
    ],
    tools: ['GPTCache', 'Redis Vector Search', 'LiteLLM Proxy', 'RouteLLM'],
    relatedCertifications: ['FinOps Architect', 'Agentic AI Engineer'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Lesson 68: Token Economics'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Sending every simple user question to expensive flagship models burns cloud budgets unnecessarily. Combining semantic caching with intelligent model cascading slashes API bills by up to 70% while improving response latency.',
      core: `### Model Cascading & Router Architecture

\`\`\`
[ User Request ]
       |
[ 1. Semantic Cache Check (Redis) ] ---> (Hit: Similarity >= 0.92) ---> [ Return Cached Answer in 15ms ($0.00) ]
       | (Miss)
[ 2. Fast Intent Classifier (SLM) ]
       |
       +---> [ Simple Query (75%) ] ---> [ Route to SLM: Llama-3-8B / GPT-4o-mini ($0.15 / M tokens) ]
       |
       +---> [ Complex Reasoning (25%) ] ---> [ Route to Frontier: Claude-3.5-Sonnet ($3.00 / M tokens) ]
\`\`\`

\`\`\`python
# Implementation of Intelligent Model Router:
def route_and_execute_query(user_prompt: str, fast_slm, frontier_llm) -> dict:
    # 1. Evaluate complexity using lightweight SLM
    classifier_prompt = f"Rate query complexity (1 to 5) where 1=simple factual, 5=complex multi-step coding/math. Respond ONLY with digit.\\nQuery: {user_prompt}"
    rating = int(fast_slm.invoke(classifier_prompt).strip())
    
    if rating <= 2:
        # Route to fast/cheap SLM
        response = fast_slm.invoke(user_prompt)
        return {"model_used": "slm-fast-tier", "cost_tier": "LOW", "answer": response}
    else:
        # Escalate to frontier model
        response = frontier_llm.invoke(user_prompt)
        return {"model_used": "frontier-reasoning-tier", "cost_tier": "HIGH", "answer": response}
\`\`\``,
      tryThis: `Implement a basic semantic cache check in Python using cosine similarity: if cosine similarity between a new question and any stored question exceeds 0.90, return the cached answer without calling the LLM!`,
    },
    quiz: [
      {
        question: 'What is the primary operational benefit of Model Cascading in high-volume enterprise AI applications?',
        options: [
          'It eliminates the need for user authentication.',
          'It directs the majority of routine traffic to low-cost Small Language Models, reserving expensive Frontier models only for complex queries, drastically lowering TCO.',
          'It allows models to run without electricity.',
          'It translates audio into text.',
        ],
        correctIndex: 1,
        explanation: 'Model Cascading routes simple, high-frequency requests to cost-effective SLMs, ensuring enterprises only pay flagship token rates when complex reasoning is strictly required.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 70: FinOps FOCUS Framework & GPU Governance
  // -------------------------------------------------------------
  {
    id: 'lesson-70',
    slug: 'finops-focus-framework-multi-tenant-gpu-cloud-governance',
    title: 'FinOps FOCUS Framework & Multi-Tenant GPU Cloud Governance',
    description: 'Implement FinOps Foundation Open Cost & Usage Specification (FOCUS 1.0), multi-tenant department chargebacks, automated budget circuit breakers, and anomaly spend detection.',
    category: 'Finance & FinOps AI',
    categoryKey: 'finance',
    readTime: '9 min read',
    lessonNumber: 70,
    difficulty: 'Advanced',
    keyTakeaways: [
      'The FinOps Open Cost & Usage Specification (FOCUS) standardizes billing columns across AWS, GCP, Azure, and private GPU clouds',
      'Multi-tenant chargeback models allocate AI token and compute costs to specific departments, cost centers, and product features using API key metadata',
      'Budget circuit breakers automatically throttle or downgrade non-critical inference requests when departmental spending thresholds are reached',
      'Anomaly detection algorithms monitor rolling token consumption velocity to prevent runaway recursive agent billing loops',
    ],
    tools: ['FinOps FOCUS 1.0', 'Kubecost', 'OpenCost', 'CloudHealth / Vantage'],
    relatedCertifications: ['FinOps Architect', 'AI Strategic Master'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 68: Token Economics'],
    updatedAt: '2026-09-28',
    body: {
      intro: 'Without standardized cost allocation and real-time governance, engineering teams cannot attribute AI value to business outcomes. The FinOps FOCUS framework provides the universal data model for multi-cloud AI infrastructure financial management.',
      core: `### Standardizing AI Cost Allocation with FOCUS 1.0

The FinOps Open Cost & Usage Specification defines universal billing attributes:
\`\`\`json
{
  "ProviderName": "AWS",
  "ServiceName": "Amazon Bedrock",
  "ChargeCategory": "Usage",
  "SubAccountId": "prod-financial-services-01",
  "RegionId": "us-east-1",
  "BilledCost": 421.80,
  "EffectiveCost": 379.62,
  "CapacityReservationId": "CR-H100-2026-Q3",
  "Tags": {
    "CostCenter": "CC-4092-InvestmentBanking",
    "Application": "ValuationEngine",
    "Environment": "Production",
    "ModelName": "Claude-3.5-Sonnet"
  }
}
\`\`\`

---

### Automated Budget Circuit Breakers
To prevent recursive agent loops from racking up thousands of dollars in overnight charges:
1. **Token Rate Limiting:** Enforce a maximum token consumption cap per minute per user/service (\`max_tokens_per_min = 50,000\`).
2. **Circuit Breaker Middleware:** When monthly spend exceeds 95% of allocated budget, automatically switch traffic to a cached fallback or require manager authorization.
3. **Velocity Anomaly Alerting:** Trigger PagerDuty alerts when token burn rate exceeds 3 standard deviations from baseline.`,
      tryThis: `Define a JSON tagging policy for your organization's AI API keys containing CostCenter, Environment, ModelTier, and OwnerEmail tags!`,
    },
    quiz: [
      {
        question: 'What is the purpose of the FinOps Open Cost & Usage Specification (FOCUS) in multi-cloud enterprise AI environments?',
        options: [
          'To generate Python code automatically.',
          'To establish a vendor-neutral, normalized cost and usage schema across disparate cloud and API providers, enabling unified chargeback and budgeting.',
          'To encrypt database tables at rest.',
          'To replace Kubernetes with Docker containers.',
        ],
        correctIndex: 1,
        explanation: 'FOCUS 1.0 normalizes multi-cloud billing datasets into a single standardized schema, eliminating vendor-specific billing silos and enabling accurate department-level chargeback.',
      },
    ],
  },
];

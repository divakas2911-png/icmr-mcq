const questions = [
  // Questions 1-12: Research Methodology (HTA, CEA, ICER, WTP, BIA, Markov models)
  {
    id: 1,
    question: "Health Technology Assessment (HTA) is defined as a multidisciplinary process that systematically evaluates the properties of a health technology. Which organization produces the NICE technology appraisals in the United Kingdom?",
    options: [
      "World Health Organization (WHO)",
      "National Institute for Health and Care Excellence (NICE)",
      "Cochrane Collaboration",
      "European Medicines Agency (EMA)"
    ],
    answer: 1,
    explanation: "NICE (National Institute for Health and Care Excellence) produces technology appraisals that assess clinical and cost-effectiveness of health technologies including drugs, diagnostics, and procedures for the NHS in England. NICE appraisals are the global benchmark for HTA, using a willingness-to-pay threshold of £20,000–£30,000 per QALY to guide reimbursement decisions."
  },
  {
    id: 2,
    question: "The Incremental Cost-Effectiveness Ratio (ICER) is calculated as:",
    options: [
      "Total cost of new treatment / Total effects of new treatment",
      "(Cost of new treatment − Cost of comparator) / (Effects of new treatment − Effects of comparator)",
      "Cost of new treatment × Quality-adjusted life years",
      "(Effects of new − Effects of comparator) / (Cost of new − Cost of comparator)"
    ],
    answer: 1,
    explanation: "ICER = ΔCost / ΔEffect, representing the additional cost required to gain one additional unit of health outcome (e.g., QALY) by choosing the new intervention over the comparator. A technology is considered cost-effective when its ICER falls below the decision-maker's willingness-to-pay threshold. Negative ICERs indicate the new intervention is cheaper and more effective (dominant)."
  },
  {
    id: 3,
    question: "In cost-effectiveness analysis, the willingness-to-pay (WTP) threshold recommended by the WHO Commission on Macroeconomics and Health for low- and middle-income countries is approximately:",
    options: [
      "One times per capita GDP per DALY averted",
      "One to three times per capita GDP per DALY averted",
      "Five times per capita GDP per DALY averted",
      "$50,000 USD per QALY regardless of country income"
    ],
    answer: 1,
    explanation: "The WHO-CMH Commission suggested that interventions costing less than 1× per capita GDP per DALY averted are 'highly cost-effective,' and those costing 1–3× per capita GDP are 'cost-effective' in LMICs. This threshold, though widely used, is increasingly criticized as arbitrary, and the iDSI Reference Case recommends country-specific thresholds based on empirical opportunity costs of healthcare spending."
  },
  {
    id: 4,
    question: "A Budget Impact Analysis (BIA) in pharmacoeconomics differs from a cost-effectiveness analysis in that BIA:",
    options: [
      "Measures QALYs gained per unit of budget spent",
      "Estimates the total financial impact on a healthcare budget of adopting a new technology over a defined time horizon",
      "Compares the cost per outcome between two interventions at the societal level",
      "Uses Markov cohort models to project lifetime costs and outcomes"
    ],
    answer: 1,
    explanation: "Budget Impact Analysis estimates the affordability of a new technology by projecting the change in total healthcare expenditure when it is introduced into a specific healthcare system over a short-term horizon (typically 1–5 years). Unlike CEA, BIA does not measure efficiency (cost per outcome) but focuses on financial feasibility for budget holders. It is required alongside CEA for reimbursement submissions in many countries."
  },
  {
    id: 5,
    question: "In a Markov model used for Health Technology Assessment, a 'cycle' typically represents:",
    options: [
      "A single patient's complete disease trajectory",
      "A fixed time period during which patients can transition between health states",
      "A probabilistic draw from a Monte Carlo simulation",
      "One iteration of a deterministic sensitivity analysis"
    ],
    answer: 1,
    explanation: "Markov models divide time into fixed cycles (e.g., monthly, annual) and assign patients to mutually exclusive health states. At each cycle, patients transition between states according to transition probabilities estimated from clinical data. The model accumulates costs and outcomes (e.g., QALYs) over all cycles. Markov models are preferred when disease involves recurring events or chronic conditions spanning multiple time periods."
  },
  {
    id: 6,
    question: "The 'half-cycle correction' in Markov modelling is applied to:",
    options: [
      "Adjust for the discounting of future costs and outcomes",
      "Account for the fact that transitions do not all occur at the beginning of a cycle but are distributed throughout it",
      "Correct for selection bias in the input data from clinical trials",
      "Adjust for variation in cycle length between different model runs"
    ],
    answer: 1,
    explanation: "The half-cycle correction assumes that events (transitions) occur on average at the midpoint of each cycle rather than at the start or end. Without this correction, models overcount or undercount outcomes if patients who die or transition mid-cycle are credited with a full cycle's outcomes. The correction shifts accumulated values by half a cycle, improving model accuracy."
  },
  {
    id: 7,
    question: "In probabilistic sensitivity analysis (PSA) for HTA, the cost-effectiveness acceptability curve (CEAC) shows:",
    options: [
      "The deterministic ICER for each parameter combination",
      "The probability that an intervention is cost-effective at different WTP thresholds",
      "The cumulative distribution of healthcare costs over time",
      "The range of QALY estimates from scenario analyses"
    ],
    answer: 1,
    explanation: "The CEAC plots the proportion of PSA simulations (from Monte Carlo sampling across parameter uncertainty) in which the intervention is cost-effective against a range of WTP thresholds. At low thresholds, the probability of cost-effectiveness is near zero; it increases as the threshold rises. The CEAC allows decision-makers to understand the impact of WTP threshold uncertainty on the probability of a correct reimbursement decision."
  },
  {
    id: 8,
    question: "A cost-utility analysis (CUA) is a specific form of cost-effectiveness analysis that measures health outcomes in:",
    options: [
      "Life-years gained (LYG)",
      "Quality-adjusted life years (QALYs) or disability-adjusted life years (DALYs)",
      "Cases of disease averted",
      "Monetary units (willingness-to-pay estimates)"
    ],
    answer: 1,
    explanation: "CUA incorporates both quantity (survival) and quality of life into a single measure — the QALY (or DALY). One QALY represents one year of perfect health, calculated as life years × utility weight (0 = death, 1 = perfect health). This allows comparison across disease areas. NICE requires QALY-based analysis as its preferred outcome measure for technology appraisals."
  },
  {
    id: 9,
    question: "Deterministic sensitivity analysis (one-way sensitivity analysis) in HTA is used to:",
    options: [
      "Simultaneously vary all uncertain parameters within their plausible ranges",
      "Assess how changes in one parameter at a time affect the ICER, identifying key drivers of uncertainty",
      "Generate a distribution of ICERs via Monte Carlo simulation",
      "Compare the model results against real-world observational data"
    ],
    answer: 1,
    explanation: "One-way (deterministic) sensitivity analysis varies each model parameter individually across a plausible range while keeping others fixed, observing the resulting change in the ICER. Results are typically presented as tornado diagrams, which rank parameters by their influence on the ICER. This identifies the most important sources of uncertainty but does not capture parameter correlations or joint uncertainty."
  },
  {
    id: 10,
    question: "In economic evaluation of healthcare interventions, the perspective of analysis that includes all costs to society — including indirect costs such as productivity losses — is known as the:",
    options: [
      "Healthcare provider perspective",
      "Healthcare payer (third-party payer) perspective",
      "Societal perspective",
      "Patient and caregiver perspective"
    ],
    answer: 2,
    explanation: "The societal perspective is the broadest analytical viewpoint, including direct healthcare costs (hospital, drugs, provider costs), direct non-healthcare costs (transport, informal caregiving), and indirect costs (productivity losses due to morbidity and premature mortality). The Washington Panel on Cost-Effectiveness recommends the societal perspective as the reference case, though many HTA agencies use the healthcare payer perspective for reimbursement decisions."
  },
  {
    id: 11,
    question: "The 'threshold analysis' in HTA involves:",
    options: [
      "Setting a p-value cut-off for clinical significance in systematic reviews",
      "Determining the value of a parameter at which the intervention crosses from cost-effective to not cost-effective at a given WTP threshold",
      "Identifying the minimum sample size needed to detect a cost difference",
      "Estimating the discount rate at which the NPV of healthcare investment becomes positive"
    ],
    answer: 1,
    explanation: "Threshold analysis calculates the break-even value of an uncertain parameter (e.g., transition probability, drug price) at which the ICER equals the decision-maker's WTP threshold. For example, if the drug price threshold is found to be $8,000/year (vs. the current $10,000), price negotiation below this level would make the technology cost-effective. It is particularly useful in price-setting negotiations."
  },
  {
    id: 12,
    question: "In DALY calculations, the Years Lived with Disability (YLD) component is calculated as:",
    options: [
      "Duration of disease × Disability weight (0–1)",
      "Number of deaths × Standard life expectancy at age of death",
      "Incidence × Case fatality rate × Duration",
      "Prevalence × Quality of life score"
    ],
    answer: 0,
    explanation: "YLD = Number of incident cases × Disability weight × Average duration of disease. Disability weights range from 0 (no disability) to 1 (equivalent to death), derived from population surveys measuring the severity of health loss. DALYs = YLL + YLD, where YLL captures premature mortality. The GBD Study uses this framework to compare the burden of diseases worldwide."
  },

  // Questions 13-24: Biostatistics (Bayesian statistics, MCMC, hierarchical models, empirical Bayes)
  {
    id: 13,
    question: "In Bayesian statistics, the posterior distribution is proportional to:",
    options: [
      "The likelihood function alone",
      "The prior distribution multiplied by the likelihood function",
      "The prior distribution divided by the marginal likelihood",
      "The conjugate prior times the sample standard deviation"
    ],
    answer: 1,
    explanation: "Bayes' theorem: Posterior ∝ Prior × Likelihood. The posterior distribution represents updated beliefs about parameters after observing data, combining prior beliefs (expressed as the prior distribution) with the information from the data (likelihood function). The marginal likelihood (normalizing constant) ensures the posterior integrates to 1, but is often computationally intractable, requiring MCMC methods."
  },
  {
    id: 14,
    question: "A 95% Bayesian credible interval is interpreted as:",
    options: [
      "If the study is repeated 100 times, 95% of the confidence intervals will contain the true parameter",
      "There is a 95% probability that the true parameter lies within this interval, given the observed data and prior",
      "The parameter is statistically significant at the 5% level",
      "95% of the prior distribution is contained within this range"
    ],
    answer: 1,
    explanation: "The Bayesian credible interval has a direct probability interpretation: given the observed data and prior information, there is a 95% probability that the true parameter lies within the interval. This is fundamentally different from the frequentist confidence interval, which refers to the long-run coverage of the procedure. The credible interval is the most intuitive interval estimate for clinical and policy purposes."
  },
  {
    id: 15,
    question: "Markov Chain Monte Carlo (MCMC) methods in Bayesian analysis are used primarily to:",
    options: [
      "Construct frequentist confidence intervals from non-parametric bootstrapping",
      "Sample from intractable posterior distributions when analytical solutions are unavailable",
      "Perform multiple imputation for missing data in clinical trials",
      "Generate random samples from the prior distribution for sensitivity analysis"
    ],
    answer: 1,
    explanation: "MCMC algorithms (Gibbs sampler, Metropolis-Hastings) construct Markov chains that converge to the posterior distribution as their stationary distribution, allowing draws from posteriors that cannot be expressed analytically. Convergence is assessed using diagnostics like the Gelman-Rubin statistic and trace plots. MCMC is essential for complex hierarchical models and is implemented in software like Stan, JAGS, and WinBUGS."
  },
  {
    id: 16,
    question: "In a Bayesian analysis, using a 'non-informative' (flat or diffuse) prior means:",
    options: [
      "The analysis uses only the prior distribution and ignores the data",
      "Minimal assumptions are imposed on the parameter, allowing the data to dominate the posterior",
      "The prior distribution is set equal to the likelihood function",
      "Only parameters supported by previous clinical trials are included"
    ],
    answer: 1,
    explanation: "Non-informative priors (uniform, Jeffreys' prior) express maximum uncertainty about a parameter before seeing data, so the posterior is driven primarily by the likelihood (the data). This approach is used when reliable prior information is unavailable or to remain objective. Critics note that truly non-informative priors do not exist — all priors impose some constraints — and improper priors can yield improper posteriors."
  },
  {
    id: 17,
    question: "A hierarchical (multilevel) Bayesian model is most appropriate when data:",
    options: [
      "Contain no missing values and are from a single homogeneous population",
      "Are organized in nested groups (e.g., patients within hospitals within regions) with partial pooling of information across groups",
      "Follow a known parametric distribution that enables analytical posterior computation",
      "Are collected from a single randomized controlled trial with balanced arms"
    ],
    answer: 1,
    explanation: "Hierarchical models account for clustering and nested structures by estimating group-level parameters drawn from a common hyperprior distribution, enabling partial pooling — borrowing strength across groups. Unlike complete pooling (ignoring group structure) or no pooling (analyzing groups separately), partial pooling yields more accurate group-level estimates, especially for small groups. Applications include meta-analysis, multicenter trials, and spatial epidemiology."
  },
  {
    id: 18,
    question: "Empirical Bayes methods differ from fully Bayesian methods in that they:",
    options: [
      "Use posterior distributions exclusively without any prior information",
      "Estimate hyperparameters of the prior from the data itself rather than specifying them a priori",
      "Replace the likelihood function with empirical cumulative distribution functions",
      "Apply Bayesian updating only to randomized clinical trial data"
    ],
    answer: 1,
    explanation: "Empirical Bayes (EB) uses the marginal distribution of the observed data (across all groups) to estimate the hyperparameters of the prior distribution, effectively letting the data inform the prior. This offers a computationally efficient approximation to hierarchical Bayesian analysis. EB is widely used in genomics (Limma for microarray analysis), disease mapping, and educational testing."
  },
  {
    id: 19,
    question: "In Bayesian clinical trial design, an 'adaptive trial' uses accumulating data to:",
    options: [
      "Fix the sample size at the beginning based on power calculations",
      "Prospectively modify trial elements (dose, randomization ratio, sample size) based on interim results according to pre-specified rules",
      "Randomly assign patients to treatments based on Bayesian posterior probabilities after trial completion",
      "Replace the primary endpoint mid-trial based on interim surrogate outcomes"
    ],
    answer: 1,
    explanation: "Bayesian adaptive trials update posterior probabilities of treatment efficacy as data accumulate, allowing pre-specified modifications (arm dropping, sample size reassessment, response-adaptive randomization) guided by decision rules. This improves efficiency and ethics by allocating more patients to better-performing treatments and stopping early for efficacy or futility. FDA and EMA guidance documents support adaptive designs when pre-specified."
  },
  {
    id: 20,
    question: "The Bayes Factor (BF) is a statistical measure used to:",
    options: [
      "Estimate the probability of a hypothesis given the data, expressed as a percentage",
      "Quantify the ratio of marginal likelihoods under two competing hypotheses, measuring evidence for one over the other",
      "Calculate the posterior mean of a parameter in a Bayesian regression model",
      "Determine the optimal prior distribution for a given dataset"
    ],
    answer: 1,
    explanation: "The Bayes Factor BF₁₂ = P(data|H₁) / P(data|H₂), measuring how much more likely the observed data are under H₁ than H₂. BF > 10 is considered strong evidence for H₁; BF < 1/10 is strong evidence against. Unlike p-values, BFs directly quantify evidence for the alternative hypothesis and can support the null hypothesis. They are increasingly used in medical research as an alternative to NHST."
  },
  {
    id: 21,
    question: "In Bayesian meta-analysis with a random-effects model, the between-study variance (τ²) represents:",
    options: [
      "The within-study variance due to sampling error",
      "True heterogeneity in treatment effects across studies, estimated as a parameter from the posterior distribution",
      "The measurement error variance in individual patient data",
      "The variance of the prior distribution for the pooled effect"
    ],
    answer: 1,
    explanation: "In a Bayesian random-effects meta-analysis, each study-specific effect is drawn from a distribution with mean μ (pooled effect) and variance τ² (heterogeneity). τ² is given a prior distribution (often half-normal or half-Cauchy) and estimated from the posterior. Unlike the frequentist DerSimonian-Laird estimate, the Bayesian approach propagates uncertainty in τ² through to inference on μ, yielding more honest credible intervals."
  },
  {
    id: 22,
    question: "Which of the following is a key advantage of Bayesian over frequentist approaches in clinical research with small sample sizes?",
    options: [
      "Bayesian methods do not require any distributional assumptions",
      "Prior information from previous studies can be formally incorporated, improving precision of estimates when data are sparse",
      "Bayesian p-values are always smaller, increasing statistical power",
      "Bayesian methods eliminate the need for multiple testing corrections"
    ],
    answer: 1,
    explanation: "With sparse data (small trials, rare diseases), frequentist estimates have wide confidence intervals and low power. Bayesian methods can incorporate informative priors from prior trials, expert opinion, or historical data to constrain estimates and improve precision. This is particularly valuable in pediatric trials, rare disease research, and adaptive platform trials where Bayesian borrowing of historical controls is used."
  },
  {
    id: 23,
    question: "The prior predictive distribution in Bayesian analysis is used to:",
    options: [
      "Assess the fit of the posterior distribution to observed data",
      "Check the plausibility of the prior by simulating data that the model would predict before observing actual data",
      "Generate posterior predictive samples for future predictions",
      "Calculate the normalizing constant of the posterior distribution"
    ],
    answer: 1,
    explanation: "Prior predictive checks simulate datasets from the model using only the prior (before observing data) to assess whether the prior specifications produce reasonable predictions. If the prior predictive distribution generates implausible data (e.g., negative blood pressure values), the prior needs revision. This is a key step in principled Bayesian workflow before conducting posterior inference."
  },
  {
    id: 24,
    question: "In a Bayesian logistic regression for a clinical outcome, if the posterior probability of the odds ratio exceeding 1 is 97%, this means:",
    options: [
      "The frequentist p-value is 0.03",
      "There is a 97% probability that the true odds ratio is greater than 1, given the data and prior",
      "The null hypothesis of OR = 1 is rejected at the 3% significance level",
      "The effect is clinically significant according to established thresholds"
    ],
    answer: 1,
    explanation: "In Bayesian inference, the posterior probability that OR > 1 gives a direct probability statement about the direction of the effect. A 97% posterior probability means the data and prior together strongly support a positive association, with only 3% probability that the true OR ≤ 1. This is not equivalent to a frequentist p-value of 0.03, as it makes a direct probability statement about the parameter itself."
  },

  // Questions 25-34: Diagnostic Tests (pharmacogenomics, companion diagnostics, liquid biopsy)
  {
    id: 25,
    question: "Companion diagnostic tests (CDx) in oncology are defined by the FDA as devices that:",
    options: [
      "Screen all cancer patients for any genetic mutation regardless of treatment choice",
      "Are essential for the safe and effective use of a corresponding therapeutic agent by identifying patients most likely to benefit or at risk of serious adverse effects",
      "Monitor treatment response after initiation of chemotherapy",
      "Replace tumor biopsy by analyzing serum protein biomarkers"
    ],
    answer: 1,
    explanation: "Companion diagnostics are co-developed with targeted therapies and are required for safe and effective drug use. Examples include EGFR mutation testing (companion to erlotinib/gefitinib in NSCLC), HER2 IHC/FISH (companion to trastuzumab in breast/gastric cancer), and PD-L1 IHC (companion to pembrolizumab). CDx approval by regulatory agencies ensures the biomarker-drug pair is validated before clinical use."
  },
  {
    id: 26,
    question: "Liquid biopsy using circulating tumor DNA (ctDNA) detects:",
    options: [
      "Whole tumor cells shed into the bloodstream that can be cultured for drug testing",
      "Fragmented tumor-derived DNA released into plasma from apoptotic and necrotic cancer cells",
      "Exosomes containing tumor-specific mRNA from distant metastases",
      "Circulating tumor-educated platelets with altered gene expression profiles"
    ],
    answer: 1,
    explanation: "ctDNA consists of small fragments (typically 140–170 bp) of tumor DNA released into the bloodstream during cell death or active secretion. It carries tumor-specific somatic mutations, copy number alterations, and methylation patterns. ctDNA is detected in plasma using ultra-deep NGS, digital PCR, or ddPCR. Clinical applications include early cancer detection, monitoring treatment response, detecting minimal residual disease, and identifying resistance mutations."
  },
  {
    id: 27,
    question: "Pharmacogenomic testing for CYP2D6 status before prescribing codeine is clinically critical because:",
    options: [
      "CYP2D6 poor metabolizers require higher doses of codeine for pain relief",
      "CYP2D6 ultra-rapid metabolizers convert codeine to excess morphine rapidly, risking life-threatening respiratory depression",
      "CYP2D6 extensive metabolizers do not respond to codeine at all",
      "CYP2D6 intermediate metabolizers experience increased hepatotoxicity"
    ],
    answer: 1,
    explanation: "Codeine is a prodrug converted to active morphine by CYP2D6. Ultra-rapid metabolizers (5–10% of Europeans; more common in North Africans, Ethiopians) carry multiple CYP2D6 gene copies and produce toxic morphine levels, causing fatal respiratory depression — especially dangerous in breastfed neonates of UM mothers and post-tonsillectomy children. FDA, CPIC, and EMA guidelines contraindicate codeine in children ≤18 and breastfeeding mothers regardless of CYP2D6 status."
  },
  {
    id: 28,
    question: "Minimal residual disease (MRD) testing in acute lymphoblastic leukemia (ALL) is most commonly performed using:",
    options: [
      "Conventional cytogenetics (karyotyping) of bone marrow aspirates",
      "Multiparameter flow cytometry (MFC) or real-time quantitative PCR (RQ-PCR) for fusion genes or clonotypic immunoglobulin/TCR rearrangements",
      "Liquid biopsy of peripheral blood ctDNA for somatic mutations",
      "PET-CT imaging to detect residual tumor burden"
    ],
    answer: 1,
    explanation: "MRD testing in ALL detects residual leukemic cells below morphological detection limits (1 in 10⁻⁴ to 10⁻⁶ cells). MFC identifies leukemia-associated immunophenotypes; RQ-PCR quantifies patient-specific fusion transcripts (e.g., BCR::ABL1, ETV6::RUNX1) or clonotypic Ig/TCR sequences. MRD status post-induction is the strongest prognostic factor in ALL, guiding treatment intensification, stem cell transplant decisions, and clinical trial stratification."
  },
  {
    id: 29,
    question: "Cell-free fetal DNA (cffDNA) in maternal plasma, used for non-invasive prenatal testing (NIPT), is predominantly derived from:",
    options: [
      "Fetal lymphocytes circulating in maternal blood",
      "Apoptotic trophoblasts of the placenta",
      "Fetal renal tubular cells excreted in maternal urine",
      "Amniocytes from the amniotic fluid that enter maternal circulation"
    ],
    answer: 1,
    explanation: "cffDNA is predominantly placental in origin, released from apoptotic cytotrophoblasts and syncytiotrophoblasts of the placenta. It represents approximately 10–15% of total cell-free DNA in maternal plasma by 10 weeks' gestation. Because it is placental (not directly fetal), NIPT can occasionally give false positive results due to confined placental mosaicism (CPM) where the placenta has a chromosomal abnormality not present in the fetus."
  },
  {
    id: 30,
    question: "The 'analytic validity' of a diagnostic genetic test refers to:",
    options: [
      "The ability of the test result to predict clinical outcomes and guide treatment decisions",
      "The accuracy and reliability of the test in measuring the target analyte (e.g., detecting a mutation when it is present)",
      "The clinical utility of the test in improving patient management and health outcomes",
      "The technical feasibility of performing the test in a standard clinical laboratory"
    ],
    answer: 1,
    explanation: "Analytic validity encompasses sensitivity, specificity, reproducibility, and accuracy of a test in detecting/measuring the intended analyte. Clinical validity (does the result predict disease?) and clinical utility (does using the test improve outcomes?) are separate evaluation dimensions. All three components — analytic validity, clinical validity, and clinical utility — form the ACCE framework for evaluation of genetic tests."
  },
  {
    id: 31,
    question: "Circulating tumor cells (CTCs) in peripheral blood differ from ctDNA in that CTCs:",
    options: [
      "Are smaller in size and more abundant than ctDNA in patients with localized tumors",
      "Are intact viable or apoptotic tumor cells that can be isolated, characterized morphologically, and cultured for drug sensitivity testing",
      "Carry only germline genetic variants and cannot identify acquired mutations",
      "Are found exclusively in venous blood draining the primary tumor site"
    ],
    answer: 1,
    explanation: "CTCs are whole tumor cells shed into the bloodstream; they are rare (1–100 per 10 mL blood) but can be captured using EpCAM-based technologies (CellSearch) or microfluidic chips. Unlike ctDNA fragments, CTCs provide intact cells for morphological analysis, protein expression profiling, and ex vivo drug testing. The CellSearch system for enumerating CTCs is FDA-cleared for prognosis in breast, prostate, and colorectal cancer."
  },
  {
    id: 32,
    question: "In BRCA1/2 genetic testing for hereditary breast-ovarian cancer, a 'variant of uncertain significance (VUS)' means:",
    options: [
      "The variant is pathogenic and causes high cancer risk",
      "The variant has been definitively classified as benign based on population frequency data",
      "Insufficient evidence exists to classify the variant as pathogenic or benign; it should not be used clinically for risk management",
      "The variant is polymorphic and present in more than 1% of the population"
    ],
    answer: 2,
    explanation: "A VUS is a genetic change for which there is insufficient evidence to determine whether it causes disease. VUSs represent a significant clinical challenge — they should not influence clinical management (neither trigger prophylactic surgery nor provide false reassurance). As more data accumulate (from functional studies, segregation analyses, population databases), VUSs may be reclassified as pathogenic or benign. Genetic counseling is essential to explain VUS findings."
  },
  {
    id: 33,
    question: "Pharmacogenomic testing for HLA-B*5701 before prescribing abacavir (HIV treatment) prevents:",
    options: [
      "Virological failure due to abacavir resistance mutations",
      "Severe hypersensitivity reaction (HSR) that occurs in HLA-B*5701 carriers upon abacavir exposure",
      "Stevens-Johnson syndrome caused by immune checkpoint activation",
      "Peripheral neuropathy from abacavir-induced mitochondrial toxicity"
    ],
    answer: 1,
    explanation: "HLA-B*5701 carriers have a near 100% risk of developing a severe, potentially life-threatening hypersensitivity reaction to abacavir, characterized by fever, rash, and multi-organ involvement. Prospective genetic screening and withholding abacavir from HLA-B*5701 carriers virtually eliminates immunologically confirmed HSR. This is one of the most successful pharmacogenomic implementations in clinical practice, now standard of care globally."
  },
  {
    id: 34,
    question: "The ONCOTYPE DX Breast Recurrence Score® is a validated multigene assay that:",
    options: [
      "Determines HER2 amplification status in breast tumors to guide trastuzumab use",
      "Predicts the likelihood of distant recurrence and chemotherapy benefit in hormone receptor-positive, HER2-negative, node-negative early breast cancer",
      "Classifies breast tumors into intrinsic molecular subtypes (luminal A/B, HER2-enriched, basal-like)",
      "Identifies germline BRCA1/2 mutations to guide PARP inhibitor therapy"
    ],
    answer: 1,
    explanation: "Oncotype DX uses RT-PCR to measure expression of 21 genes and generates a Recurrence Score (0–100). In the TAILORx trial, women with RS 11–25 did not benefit from adjuvant chemotherapy (endocrine therapy alone was sufficient). RS ≥26 indicates high recurrence risk and chemotherapy benefit. This test reduces overtreatment with chemotherapy while identifying patients at sufficient risk to warrant it."
  },

  // Questions 35-49: Communicable Diseases (AMR, GLASS, ESKAPE, carbapenem resistance, mcr-1)
  {
    id: 35,
    question: "The WHO Global Antimicrobial Resistance and Use Surveillance System (GLASS) was launched to:",
    options: [
      "Develop new antibiotics against drug-resistant organisms",
      "Standardize AMR surveillance methodology and collect harmonized data on AMR prevalence from participating countries",
      "Regulate antibiotic use in veterinary settings globally",
      "Certify antibiotic stewardship programs in hospital settings"
    ],
    answer: 1,
    explanation: "WHO GLASS, launched in 2015, establishes standardized approaches for surveillance of AMR and antibiotic use in human health globally. It collects data on clinically important bacteria (E. coli, Klebsiella, Staphylococcus, etc.) from blood, urine, and other sterile sites, enabling cross-country comparisons and trend monitoring. By 2023, over 127 countries had enrolled, though data quality and coverage remain uneven."
  },
  {
    id: 36,
    question: "The ESKAPE pathogens are a group of bacteria responsible for most nosocomial infections with high AMR rates. Which organism is NOT part of ESKAPE?",
    options: [
      "Enterococcus faecium",
      "Staphylococcus aureus",
      "Streptococcus pneumoniae",
      "Klebsiella pneumoniae"
    ],
    answer: 2,
    explanation: "ESKAPE stands for: Enterococcus faecium, Staphylococcus aureus, Klebsiella pneumoniae, Acinetobacter baumannii, Pseudomonas aeruginosa, and Enterobacter species. Streptococcus pneumoniae, while clinically important and showing increasing AMR, is not part of the ESKAPE group. ESKAPE pathogens are prioritized by WHO and IDSA due to their high rates of drug resistance and ability to 'escape' antibiotic effects."
  },
  {
    id: 37,
    question: "The mcr-1 gene, discovered in 2015, confers resistance to colistin by:",
    options: [
      "Producing an enzyme that cleaves the lipid A phosphate groups of colistin",
      "Encoding a phosphoethanolamine transferase that modifies lipid A of LPS, reducing colistin binding to the bacterial outer membrane",
      "Pumping colistin out of bacteria via an efflux pump encoded on a conjugative plasmid",
      "Altering ribosomal proteins to prevent colistin from inhibiting protein synthesis"
    ],
    answer: 1,
    explanation: "MCR-1 (mobile colistin resistance) is a plasmid-borne phosphoethanolamine transferase that adds phosphoethanolamine to the 4′-phosphate of lipid A in lipopolysaccharide, reducing the negative charge and colistin's electrostatic affinity for the outer membrane. The alarming feature is its location on conjugative plasmids, enabling horizontal transfer between species including carbapenem-resistant Enterobacteriaceae, creating pan-drug-resistant strains."
  },
  {
    id: 38,
    question: "Carbapenem resistance in Klebsiella pneumoniae is most commonly mediated by:",
    options: [
      "Extended-spectrum beta-lactamase (ESBL) production combined with outer membrane porin loss",
      "Carbapenemase production — enzymes (KPC, NDM, OXA-48) that hydrolyze carbapenems — and/or outer membrane protein loss",
      "Overexpression of AcrAB-TolC efflux pumps reducing intracellular carbapenem concentrations",
      "Mutations in penicillin-binding protein 2a (PBP2a) analogous to methicillin resistance in MRSA"
    ],
    answer: 1,
    explanation: "Carbapenem-resistant Klebsiella pneumoniae (CRKP) mainly uses carbapenemase enzymes: KPC (Klebsiella pneumoniae carbapenemase, class A serine beta-lactamase, NDM (New Delhi metallo-beta-lactamase, class B), and OXA-48 (class D). These enzymes hydrolyze carbapenems with varying efficiency. Combined with ESBL production and porin loss, they create high-level resistance. KPC-producing K. pneumoniae caused major outbreaks in Italy and the US."
  },
  {
    id: 39,
    question: "Antibiotic stewardship programs (ASPs) in hospitals aim to optimize antimicrobial use through all the following EXCEPT:",
    options: [
      "Prospective audit and feedback on antimicrobial prescriptions",
      "Formulary restriction and preauthorization of broad-spectrum antibiotics",
      "Encouraging empirical use of the broadest spectrum antibiotic available",
      "De-escalation from broad-spectrum to narrow-spectrum therapy based on culture results"
    ],
    answer: 2,
    explanation: "ASPs aim to optimize antibiotic selection, dose, duration, and route to improve clinical outcomes, minimize adverse effects, and reduce AMR. Core strategies include prior authorization for restricted antibiotics, prospective audit and feedback, IV-to-oral conversion, dose optimization, and de-escalation based on culture data. Encouraging empirical broad-spectrum use is contrary to stewardship principles — empirical therapy should be based on local ecology, targeted to likely pathogens."
  },
  {
    id: 40,
    question: "The 'HAI bundles' approach for preventing central line-associated bloodstream infections (CLABSIs) includes which component?",
    options: [
      "Weekly blood cultures from all patients with central lines",
      "Hand hygiene, maximal barrier precautions during insertion, chlorhexidine skin antisepsis, optimal catheter site selection, and daily review of line necessity",
      "Prophylactic systemic antibiotics during catheter insertion",
      "Antimicrobial-impregnated catheters in all ICU patients"
    ],
    answer: 1,
    explanation: "The IHI CLABSI bundle includes: (1) hand hygiene, (2) maximal sterile barrier precautions (full-body drape, sterile gown, gloves, cap, mask), (3) chlorhexidine antisepsis for skin, (4) optimal catheter site selection (subclavian > internal jugular > femoral), and (5) daily review of catheter necessity with prompt removal when no longer needed. Implementation of this bundle reduced CLABSI rates by 66% in the landmark Michigan Keystone Project."
  },
  {
    id: 41,
    question: "New Delhi Metallo-beta-lactamase-1 (NDM-1) is characterized as a public health threat because:",
    options: [
      "It is found only in Neisseria meningitidis causing meningitis outbreaks",
      "It confers resistance to nearly all beta-lactam antibiotics including carbapenems, is encoded on transferable plasmids, and has disseminated globally",
      "It causes resistance to fluoroquinolones through mutation of DNA gyrase",
      "It is detected only in environmental water samples without clinical significance"
    ],
    answer: 1,
    explanation: "NDM-1, first described in a Swedish patient with K. pneumoniae infection acquired in New Delhi (2009), is a metallo-beta-lactamase (class B) that hydrolyzes almost all beta-lactams including carbapenems but not aztreonam. Its location on mobile genetic elements facilitates spread between different bacterial species. NDM-1-positive bacteria typically retain susceptibility only to colistin and tigecycline, creating near-pan-drug-resistant infections."
  },
  {
    id: 42,
    question: "The 'AWaRe' classification of antibiotics developed by WHO categorizes antibiotics into Access, Watch, and Reserve categories primarily to:",
    options: [
      "Rank antibiotics by their clinical effectiveness for common infections",
      "Guide antibiotic stewardship by identifying antibiotics appropriate for common infections (Access), those that should be used only for specific indications (Watch), and last-resort antibiotics (Reserve)",
      "Set pricing tiers for antibiotic procurement in low-income countries",
      "Classify antibiotics by their spectrum of activity against Gram-positive vs. Gram-negative organisms"
    ],
    answer: 1,
    explanation: "WHO AWaRe (2017, expanded 2021) classifies antibiotics to guide stewardship and procurement. Access antibiotics are first- and second-line agents for common infections with lower resistance potential (e.g., amoxicillin, trimethoprim-sulfamethoxazole). Watch antibiotics have higher resistance potential and should only be used for specific documented indications (e.g., fluoroquinolones, 3rd-generation cephalosporins). Reserve antibiotics (e.g., colistin, linezolid) are last-resort options for MDR infections only."
  },
  {
    id: 43,
    question: "Biofilm formation by Pseudomonas aeruginosa in chronic lung infections (as in cystic fibrosis) makes eradication difficult primarily because:",
    options: [
      "Biofilm mutants have acquired new resistance genes not present in planktonic forms",
      "Biofilm encasement in an extracellular polysaccharide matrix reduces antibiotic penetration, promotes tolerance, and creates slow-growing persister cells",
      "P. aeruginosa within biofilms selectively expresses outer membrane proteins that pump out antibiotics",
      "Biofilm formation activates the SOS response, causing rapid mutation and resistance acquisition"
    ],
    answer: 1,
    explanation: "P. aeruginosa biofilms produce an alginate-rich extracellular matrix that physically impedes antibiotic penetration and creates chemical gradients (oxygen, pH). Slow-growing or dormant persister cells within biofilms are phenotypically tolerant to antibiotics without genetic resistance mutations. Biofilm cells require antibiotic concentrations 100–1000× higher than planktonic MIC for killing. This explains why chronic P. aeruginosa infections in CF are manageable but not curable."
  },
  {
    id: 44,
    question: "Antimicrobial stewardship in the context of One Health involves coordinated action because AMR genes in human pathogens often originate from:",
    options: [
      "Spontaneous mutation in hospitalized patients receiving prolonged antibiotic courses",
      "Veterinary and agricultural antibiotic use selecting resistance in animal gut bacteria, which transfer resistance genes to human pathogens via the food chain and environment",
      "Pharmaceutical manufacturing waste contaminating water sources with antibiotic residues",
      "International travel spreading resistant human strains between countries"
    ],
    answer: 1,
    explanation: "The One Health approach to AMR recognizes that agricultural and veterinary antibiotic use (accounting for ~70% of global antibiotic consumption) selects resistance in food animals and the environment, with resistance genes transferring to human pathogens via contaminated food, water, and direct contact. Examples include: plasmid-mediated colistin resistance (mcr-1) emerging in livestock before spreading to human clinical isolates; ESBL-producing E. coli in poultry acquired by humans."
  },
  {
    id: 45,
    question: "Vancomycin-resistant Enterococcus (VRE) most commonly carries which resistance gene cluster?",
    options: [
      "mecA encoding modified penicillin-binding protein PBP2a",
      "vanA or vanB operons encoding altered peptidoglycan precursors (D-Ala-D-Lac or D-Ala-D-Ser) with reduced vancomycin binding",
      "blaKPC encoding Klebsiella pneumoniae carbapenemase",
      "qnr genes encoding quinolone resistance proteins"
    ],
    answer: 1,
    explanation: "Vancomycin binds the D-Ala-D-Ala terminus of peptidoglycan precursors. VanA (carried on transposable elements, transferable to MRSA) modifies the terminal dipeptide to D-Ala-D-Lac (lactate), reducing vancomycin binding affinity 1000-fold. VanB modifies to D-Ala-D-Ser (serine) with less dramatic resistance. VanA confers high-level resistance to vancomycin and teicoplanin; VanB confers resistance to vancomycin but not teicoplanin."
  },
  {
    id: 46,
    question: "The WHO priority pathogens list for R&D of new antibiotics classifies carbapenem-resistant Acinetobacter baumannii as:",
    options: [
      "Medium priority — important but not urgent",
      "Critical priority — the highest urgency for new antibiotic development",
      "High priority — second tier of urgency",
      "Watch priority — monitoring only, no new development needed"
    ],
    answer: 1,
    explanation: "WHO's 2017 priority pathogens list (updated 2024) places carbapenem-resistant A. baumannii in the Critical Priority category alongside carbapenem-resistant P. aeruginosa and carbapenem-resistant, 3rd-gen-cephalosporin-resistant Enterobacteriaceae. A. baumannii causes severe hospital-acquired infections (ventilator-associated pneumonia, bacteremia), has extreme environmental persistence, and limited treatment options; only cefiderocol and sulbactam-durlobactam show promising activity."
  },
  {
    id: 47,
    question: "In infection prevention, the 'contact precautions' tier is specifically indicated for organisms transmitted via direct or indirect contact, such as:",
    options: [
      "Tuberculosis (TB) — for airborne nuclei",
      "MRSA, VRE, C. difficile, and highly resistant Gram-negative organisms",
      "Influenza A — for respiratory droplets",
      "Measles — for airborne transmission via aerosols"
    ],
    answer: 1,
    explanation: "Contact precautions (gloves, gown, dedicated equipment, single room preferred) are required for organisms spread through direct patient contact or indirect contact via contaminated surfaces/equipment. Key pathogens include MRSA, VRE, Clostridioides difficile, CRE, and scabies. C. difficile spores are resistant to alcohol-based hand rubs; soap-and-water handwashing is essential after contact with C. difficile patients."
  },
  {
    id: 48,
    question: "Extended-spectrum beta-lactamases (ESBLs) in Enterobacteriaceae confer resistance to all beta-lactams EXCEPT:",
    options: [
      "Penicillins (ampicillin, amoxicillin)",
      "Third and fourth generation cephalosporins",
      "Carbapenems (meropenem, ertapenem)",
      "Aztreonam (a monobactam)"
    ],
    answer: 2,
    explanation: "ESBLs (CTX-M, TEM, SHV types) hydrolyze extended-spectrum penicillins, third- and fourth-generation cephalosporins, and aztreonam, but are inhibited by beta-lactamase inhibitors (clavulanate, tazobactam) and do NOT hydrolyze carbapenems. Carbapenems remain the treatment of choice for serious ESBL infections. Combination products like piperacillin-tazobactam are debated due to inoculum effect issues."
  },
  {
    id: 49,
    question: "The incubation period of Clostridioides difficile infection (CDI) when it occurs in the context of antibiotic use is:",
    options: [
      "Within 2–3 hours (like preformed toxin foodborne illness)",
      "2–10 days after disruption of normal gut flora by antibiotics, or longer in some cases",
      "Always more than 30 days after antibiotic exposure",
      "Only occurs within the first 24 hours of antibiotic administration"
    ],
    answer: 1,
    explanation: "CDI typically occurs during or within 2–10 weeks after antibiotic use, with most cases within 2–10 days. Antibiotics disrupt normal gut microbiota, allowing C. difficile (either acquired exogenously or from endogenous colonization) to germinate, proliferate, and produce toxins A and B. Highest-risk antibiotics include clindamycin, fluoroquinolones, 3rd-generation cephalosporins, and broad-spectrum penicillins."
  },

  // Questions 50-64: Non-Communicable Diseases (cancer registries, TNM, prevention, HPV, 5As)
  {
    id: 50,
    question: "A Population-Based Cancer Registry (PBCR) differs from a Hospital-Based Cancer Registry (HBCR) in that a PBCR:",
    options: [
      "Records only cancer cases treated at a single referral hospital",
      "Captures all cancer cases arising in a defined geographic population, providing incidence and survival data representative of the whole community",
      "Focuses exclusively on cancer mortality data from death certificates",
      "Only tracks pediatric cancer cases for research purposes"
    ],
    answer: 1,
    explanation: "PBCRs systematically ascertain all cancer cases occurring in a geographically defined population, providing population-based incidence rates, survival statistics, and cancer burden estimates. HBCRs record cases treated at a specific facility, reflecting the hospital's case mix rather than population burden. India's National Cancer Registry Programme (NCRP) coordinates PBCRs in several cities; Bangalore, Mumbai, and Chennai registries are among the longest-running."
  },
  {
    id: 51,
    question: "In the TNM staging system, 'M1' designation indicates:",
    options: [
      "A primary tumor ≥1 cm in diameter",
      "The presence of distant metastasis",
      "One regional lymph node is involved",
      "The tumor has invaded adjacent organs"
    ],
    answer: 1,
    explanation: "In TNM: T = primary Tumor extent, N = regional lymph Node involvement, M = distant Metastasis. M0 = no distant metastasis; M1 = presence of distant metastasis (to organs or non-regional lymph nodes). Stage IV cancer generally equates to M1 disease in solid tumors and typically indicates incurable disease managed with systemic therapy. TNM staging is developed and maintained by the UICC and AJCC."
  },
  {
    id: 52,
    question: "The WHO Global Strategy to Accelerate the Elimination of Cervical Cancer (2020) sets a '90-70-90' target. The '70' refers to:",
    options: [
      "70% HPV vaccination coverage in girls by age 15",
      "70% of women screened using a high-performance test by age 35 and again by age 45",
      "70% of women with cervical pre-cancer receiving treatment",
      "70% of women with invasive cancer receiving management"
    ],
    answer: 1,
    explanation: "WHO's 90-70-90 targets by 2030: 90% of girls fully vaccinated with HPV vaccine by age 15; 70% of women screened with a high-performance test by age 35 and again by age 45; 90% of women with cervical disease receiving treatment. The strategy requires all three pillars to achieve elimination (defined as <4 cases per 100,000 women per year). India's recent policy decisions on HPV vaccination are aligned with this strategy."
  },
  {
    id: 53,
    question: "In cancer prevention, primary prevention targets:",
    options: [
      "Early detection of precancerous lesions before they become invasive",
      "Reducing exposure to carcinogens and modifiable risk factors to prevent cancer development in healthy individuals",
      "Providing curative treatment to diagnosed cancer patients",
      "Palliative care and rehabilitation for cancer survivors"
    ],
    answer: 1,
    explanation: "Primary prevention aims to prevent cancer from occurring by eliminating or reducing carcinogenic exposures and promoting protective factors in healthy populations (e.g., tobacco control, HPV vaccination, hepatitis B vaccination, sun protection, dietary advice). Secondary prevention involves screening and early detection. Tertiary prevention focuses on reducing disability and morbidity in those with established cancer through treatment and rehabilitation."
  },
  {
    id: 54,
    question: "India's National Tobacco Control Programme (NTCP) incorporates the '5As' approach for brief tobacco cessation counseling. The 5As stand for:",
    options: [
      "Assess, Advise, Assist, Arrange, Anticipate",
      "Ask, Advise, Assess, Assist, Arrange",
      "Acknowledge, Advise, Accept, Assist, Arrange",
      "Ask, Analyze, Advise, Assist, Affirm"
    ],
    answer: 1,
    explanation: "The 5As framework for tobacco cessation: Ask (screen all patients for tobacco use), Advise (give clear, personalized advice to quit), Assess (determine willingness to quit), Assist (provide behavioral counseling and pharmacotherapy — NRT, varenicline, bupropion), and Arrange (schedule follow-up contact). This evidence-based brief intervention significantly increases quit rates when implemented in clinical settings."
  },
  {
    id: 55,
    question: "The nonavalent HPV vaccine (Gardasil-9) protects against HPV types responsible for approximately what percentage of cervical cancers?",
    options: [
      "50%",
      "70%",
      "90%",
      "99%"
    ],
    answer: 2,
    explanation: "Gardasil-9 covers HPV types 6, 11, 16, 18, 31, 33, 45, 52, and 58. Types 16 and 18 cause approximately 70% of cervical cancers; the additional 5 types in Gardasil-9 contribute to approximately 20% more cases, giving approximately 90% protection against cervical cancers. The bivalent (Cervarix) and quadrivalent (Gardasil-4) vaccines cover only types 16 and 18 (±6, 11)."
  },
  {
    id: 56,
    question: "For colorectal cancer screening in average-risk adults, the guideline-recommended starting age by most international bodies (including the USPSTF 2021 update) is:",
    options: [
      "40 years",
      "45 years",
      "50 years",
      "60 years"
    ],
    answer: 1,
    explanation: "The USPSTF 2021 updated its recommendation to begin colorectal cancer screening at age 45 (lowered from 50) for average-risk adults, reflecting rising incidence in younger adults. Screening options include annual high-sensitivity fecal occult blood tests (FIT), stool DNA tests every 1–3 years, colonoscopy every 10 years, CT colonography every 5 years, or flexible sigmoidoscopy every 5 years. Screening is recommended through age 75."
  },
  {
    id: 57,
    question: "The GLOBOCAN 2022 data indicate that the most common cancer globally (by new cases, all sexes combined) is:",
    options: [
      "Lung cancer",
      "Female breast cancer",
      "Colorectal cancer",
      "Prostate cancer"
    ],
    answer: 1,
    explanation: "GLOBOCAN 2022 reported breast cancer as the most frequently diagnosed cancer globally for the third consecutive year, with approximately 2.3 million new cases (11.6% of all cancers). Lung cancer is second in incidence but remains the leading cause of cancer death globally. In India, oral cavity/pharynx, cervix, and breast cancers are among the most common."
  },
  {
    id: 58,
    question: "The 'field cancerization' concept in oral cancer epidemiology explains why:",
    options: [
      "Oral cancer cells migrate from a primary tumor to adjacent anatomical sites",
      "Extensive mucosal areas exposed to carcinogens (tobacco, alcohol) undergo generalized molecular changes, increasing risk of multiple synchronous or metachronous primary tumors",
      "Regional lymph nodes act as cancer 'fields' that seed distant metastases",
      "Field defects in DNA repair genes create a pre-malignant landscape in oral epithelium"
    ],
    answer: 1,
    explanation: "Field cancerization (Slaughter, 1953) proposes that carcinogen-exposed epithelium undergoes widespread molecular changes (mutations, epigenetic alterations) creating a 'field' at elevated risk of malignant transformation. This explains why oral cancer patients have a high rate (up to 35%) of second primary tumors in the aerodigestive tract and why surgical margins may appear normal histologically yet harbor pre-neoplastic changes that predispose to local recurrence."
  },
  {
    id: 59,
    question: "The NCI-defined difference between 'incidence' and 'prevalence' in cancer epidemiology is that:",
    options: [
      "Incidence counts existing cases; prevalence counts new cases per year",
      "Incidence measures the rate of new cancer diagnoses in a time period; prevalence measures the proportion of the population currently living with cancer (past and present cases)",
      "Both measures are equivalent when the disease is short in duration",
      "Prevalence rates are used for acute cancers; incidence rates for chronic cancers"
    ],
    answer: 1,
    explanation: "Cancer incidence = new diagnoses per unit time per population (rate). Cancer prevalence = proportion of the population alive with a diagnosis at a given time point, reflecting both incidence and survival. Increasing cancer prevalence in developed countries reflects both rising incidence and improving survival (more cancer survivors). Prevalence data guide healthcare resource planning (oncology service capacity, survivorship care needs)."
  },
  {
    id: 60,
    question: "In the Framingham Heart Study, which of the following cardiovascular risk factors was first identified as an independent predictor of coronary heart disease through long-term prospective follow-up?",
    options: [
      "High-density lipoprotein (HDL) cholesterol as protective",
      "Cigarette smoking, high blood pressure, and elevated serum cholesterol",
      "C-reactive protein as an independent biomarker of risk",
      "Obesity measured by body mass index"
    ],
    answer: 1,
    explanation: "The Framingham Heart Study (1948–present), one of the most influential prospective cohort studies, identified cigarette smoking, hypertension, and elevated cholesterol as independent major risk factors for coronary heart disease. It also established the concept of cardiovascular 'risk factors' as a framework for CVD prevention. Later analyses added HDL cholesterol, diabetes, and BMI as predictors, forming the basis of the Framingham Risk Score."
  },
  {
    id: 61,
    question: "The PREDIMED trial demonstrated that a Mediterranean diet supplemented with olive oil or nuts compared to a low-fat diet significantly reduced:",
    options: [
      "All-cause mortality over 10 years in the general population",
      "Risk of major cardiovascular events (myocardial infarction, stroke, cardiovascular death) in high-risk adults",
      "Incidence of type 2 diabetes in prediabetic individuals",
      "Colorectal cancer incidence through anti-inflammatory mechanisms"
    ],
    answer: 1,
    explanation: "PREDIMED (Prevención con Dieta Mediterránea) was a multi-center randomized trial in Spain (n=7,447 high-risk adults) comparing Mediterranean diet + extra-virgin olive oil (EVOO) or mixed nuts vs. control diet. The trial (stopped early for benefit) found a ~30% relative risk reduction in major cardiovascular events. PREDIMED was retracted and republished in 2018 due to randomization irregularities at some sites, but results were essentially unchanged after correction."
  },
  {
    id: 62,
    question: "Waist circumference as a measure of central adiposity is considered a better predictor of cardiometabolic risk than BMI because:",
    options: [
      "It is easier to measure accurately than height and weight",
      "It specifically captures visceral (intra-abdominal) fat accumulation, which is metabolically active and independently associated with insulin resistance, dyslipidemia, and CVD",
      "It correlates perfectly with total body fat percentage",
      "BMI fails to detect any clinically meaningful adiposity"
    ],
    answer: 1,
    explanation: "Visceral adipose tissue (VAT), measured approximately by waist circumference, is metabolically distinct from subcutaneous fat — it is more lipolytically active, releases pro-inflammatory adipokines, and is closely linked to insulin resistance, atherogenic dyslipidemia, and hepatic steatosis. Two individuals with the same BMI can have very different VAT amounts ('metabolically obese, normal weight' vs. 'metabolically healthy obese'). IDF and WHO have ethnic-specific waist circumference cut-offs (e.g., ≥90 cm for South Asian men)."
  },
  {
    id: 63,
    question: "The STEP-wise approach to chronic disease risk factor surveillance (WHO STEPS) collects data on three levels. Which is Step 2?",
    options: [
      "Biochemical measurements (blood glucose, lipids)",
      "Simple physical measurements (height, weight, waist circumference, blood pressure)",
      "Questionnaire-based assessment (tobacco use, diet, physical activity, alcohol)",
      "Imaging studies (echocardiography, carotid ultrasound)"
    ],
    answer: 1,
    explanation: "WHO STEPS three-step approach: Step 1 = questionnaire (sociodemographic data, tobacco, alcohol, diet, physical activity, history of raised blood pressure/glucose); Step 2 = physical measurements (height, weight, waist circumference, hip circumference, blood pressure, pulse rate); Step 3 = biochemical measurements (fasting blood glucose, total cholesterol, sometimes HbA1c, creatinine). Steps can be conducted sequentially as capacity allows."
  },
  {
    id: 64,
    question: "The Disability-Adjusted Life Year (DALY) concept was developed for the Global Burden of Disease study primarily to:",
    options: [
      "Replace life expectancy as the primary health outcome measure in clinical trials",
      "Provide a single metric combining premature mortality (YLL) and non-fatal health loss (YLD) for comparing the burden of different diseases across populations",
      "Calculate the cost-effectiveness of health interventions in DALYs averted per dollar spent",
      "Measure health inequality within populations using income quintiles"
    ],
    answer: 1,
    explanation: "DALYs were developed by Murray and Lopez for the World Bank 1993 World Development Report to allow comparison of the total health impact (fatal + non-fatal) of different diseases, injuries, and risk factors. One DALY = one year of healthy life lost. This enabled policymakers to compare the burden of mental illness, musculoskeletal disease, and infectious diseases on a common scale, guiding global health investment priorities."
  },

  // Questions 65-72: Bioethics (AI, algorithmic bias, digital health, telemedicine, big data, social media)
  {
    id: 65,
    question: "Algorithmic bias in AI-based clinical decision support systems most commonly arises from:",
    options: [
      "Intentional programming errors introduced by malicious developers",
      "Training data that underrepresents certain demographic groups, causing the algorithm to perform worse for those populations",
      "Excessive computation time slowing clinical workflows",
      "Overfitting of the model to training data from large academic centers"
    ],
    answer: 1,
    explanation: "Algorithmic bias in medical AI emerges when training datasets are not representative of the diversity of patients who will ultimately use the system. Underrepresentation of women, ethnic minorities, elderly patients, and those from low-income countries means algorithms may have lower accuracy for these groups. A well-documented example is dermatology AI trained predominantly on light-skinned patients showing reduced sensitivity for skin lesions on dark skin."
  },
  {
    id: 66,
    question: "The principle of 'explainability' (or interpretability) in medical AI is ethically important because:",
    options: [
      "Explainable AI models always outperform black-box models in clinical accuracy",
      "Clinicians and patients have a right to understand the basis of algorithmic recommendations to exercise meaningful informed consent and oversight",
      "Unexplainable AI models are legally prohibited under HIPAA regulations",
      "Only explainable models can be published in peer-reviewed medical journals"
    ],
    answer: 1,
    explanation: "Black-box AI (e.g., deep neural networks) may achieve high accuracy but provide no insight into the reasoning behind decisions. This raises ethical concerns: clinicians cannot critically evaluate algorithmic advice; patients cannot exercise autonomous informed consent; errors or biases in reasoning are hidden. The EU AI Act and ethical frameworks require high-risk AI in healthcare to provide explanations to support human oversight and accountability."
  },
  {
    id: 67,
    question: "In telemedicine practice, the ethical duty of maintaining patient confidentiality requires that:",
    options: [
      "Telemedicine consultations must be conducted in public spaces to ensure witnesses are present",
      "Patient information transmitted during teleconsultations must be encrypted, stored securely, and shared only with appropriate parties with patient consent",
      "Patients must waive confidentiality rights when using telemedicine platforms",
      "Telemedicine providers are exempt from data protection regulations applicable to in-person care"
    ],
    answer: 1,
    explanation: "Telemedicine extends the same confidentiality obligations as in-person care to digital platforms. This requires end-to-end encryption of audio/video/data, secure storage of consultation records, restricted access to patient information, explicit informed consent for digital data processing, and compliance with applicable regulations (India's Telemedicine Practice Guidelines 2020, IT Act, and DPDP Act 2023). Unsecured platforms or incidental disclosure during teleconsultations represent ethical and legal breaches."
  },
  {
    id: 68,
    question: "The use of 'secondary data' from electronic health records (EHRs) for research without explicit patient consent is ethically justified under which condition?",
    options: [
      "Whenever the researcher is employed by the hospital that collected the data",
      "When data are de-identified and the research serves important public health purposes, with appropriate ethics committee oversight and data governance safeguards",
      "Only if the patient has died and cannot object",
      "When the research is funded by the government"
    ],
    answer: 1,
    explanation: "Secondary use of EHR data without individual consent is ethically permissible under specific conditions: genuine public interest research that could not feasibly obtain consent from all individuals; robust data de-identification or anonymization; independent ethics committee (IRB/IEC) review and approval; data governance safeguards limiting access to minimum necessary data; and transparency about data use. ICMR National Ethical Guidelines (2017) provide a framework for this in India."
  },
  {
    id: 69,
    question: "Research using social media data (e.g., Twitter/X posts, Facebook groups) without participants' explicit consent raises ethical concerns primarily related to:",
    options: [
      "The low scientific validity of social media data for health research",
      "Whether users had reasonable expectations of privacy, the sensitivity of health information disclosed, and potential harm from re-identification or data aggregation",
      "Copyright infringement from using publicly available platform content",
      "The technical difficulty of obtaining representative samples from social media"
    ],
    answer: 1,
    explanation: "Even when social media data are technically 'public,' users may not anticipate their posts being used in research, especially for sensitive health topics (mental illness, substance use, HIV status). Ethical concerns include: contextual integrity (information shared in one context is not automatically appropriate in another), re-identification risk when data are aggregated, potential harm if findings stigmatize vulnerable communities, and inadequacy of public availability as a proxy for consent."
  },
  {
    id: 70,
    question: "The concept of 'data minimization' in digital health ethics and GDPR compliance means:",
    options: [
      "Minimizing the size of digital files to reduce storage costs",
      "Collecting only the minimum personal data necessary for a specified, legitimate purpose and not retaining it longer than needed",
      "Using encryption to minimize the risk of data breaches",
      "Restricting data access to a minimum number of authorized users"
    ],
    answer: 1,
    explanation: "Data minimization is a core GDPR principle (Article 5(1)(c)) requiring that personal data collection be adequate, relevant, and limited to what is necessary for the stated purpose. In digital health, this principle guards against 'mission creep' — the risk that health data collected for one purpose (e.g., clinical care) are subsequently used for unrelated purposes (e.g., insurance underwriting, commercial targeting) without consent."
  },
  {
    id: 71,
    question: "In research with wearable health devices and continuous data collection, the concept of 'dynamic consent' addresses:",
    options: [
      "The need to obtain fresh consent each time a patient opens the health app",
      "Allowing participants to update, modify, or withdraw their consent preferences over time as data uses evolve, through digital interfaces",
      "Automatic consent renewal after each calendar year of participation",
      "The technical process of authenticating user identity before data are transmitted"
    ],
    answer: 1,
    explanation: "Dynamic consent is a participant-centered, technology-enabled approach that allows individuals to provide, modify, and revoke consent for specific uses of their data in real time through a digital interface (app, web portal). This is particularly important for longitudinal wearable studies or biobanks where data may be used for future purposes not fully specified at enrollment, addressing the inflexibility of traditional static consent models."
  },
  {
    id: 72,
    question: "The ethical principle of 'beneficence' in the context of AI-assisted diagnosis obligates developers and healthcare institutions to:",
    options: [
      "Ensure AI systems are transparent about their limitations to satisfy patient curiosity",
      "Actively ensure AI systems produce net benefit to patients by rigorously validating accuracy, monitoring real-world performance, and addressing identified harms",
      "Maximize the commercial value of AI products to sustain healthcare innovation",
      "Replace physician judgment with AI whenever the algorithm has higher accuracy"
    ],
    answer: 1,
    explanation: "Beneficence requires positive promotion of patient welfare, not merely avoiding harm. For AI in diagnostics, this means: rigorous pre-deployment clinical validation in target populations; ongoing post-market surveillance for performance degradation; equity audits to ensure the AI benefits all patient groups; clear mechanisms for clinician override when the AI may be wrong; and transparent communication to patients about AI's role in their care."
  },

  // Questions 73-80: Molecular Biology & Genetics (CRISPR, base editing, prime editing, gene drives, AAV, CAR-T)
  {
    id: 73,
    question: "In the CRISPR-Cas9 gene editing mechanism, the guide RNA (gRNA) directs Cas9 to its target by:",
    options: [
      "Binding to the Cas9 RuvC and HNH nuclease domains to activate DNA cutting",
      "Base-pairing with the complementary target DNA strand adjacent to a protospacer adjacent motif (PAM) sequence",
      "Recruiting homologous recombination repair enzymes to the cut site",
      "Forming a triple helix with double-stranded DNA to block target gene expression"
    ],
    answer: 1,
    explanation: "The single guide RNA (sgRNA) contains a ~20-nucleotide spacer sequence complementary to the target DNA strand. Cas9-sgRNA scans the genome for NGG PAM sequences (for SpCas9), and when the spacer matches the adjacent protospacer, Cas9 undergoes conformational change and activates both nuclease domains (RuvC and HNH), creating a blunt-ended double-strand break 3 bp upstream of the PAM. PAM recognition is essential for genome targeting specificity."
  },
  {
    id: 74,
    question: "Base editing (adenine base editors, ABEs) was developed to overcome a limitation of classical CRISPR-Cas9 in that it:",
    options: [
      "Allows gene editing without the need for any guide RNA component",
      "Converts specific DNA bases (A→G or C→T) without creating double-strand breaks, reducing the risk of undesired insertions and deletions",
      "Enables permanent integration of therapeutic transgenes at safe harbor loci",
      "Works exclusively on mitochondrial DNA that CRISPR-Cas9 cannot access"
    ],
    answer: 1,
    explanation: "Base editors fuse a catalytically impaired Cas9 (nickase) to a deaminase enzyme. Cytosine base editors (CBEs, David Liu lab, 2016) catalyze C→T conversions; adenine base editors (ABEs, 2017) catalyze A→G conversions by converting adenine to inosine (read as guanine). Because they modify single bases without DSBs, they avoid error-prone NHEJ that causes indels. Base editing is being applied therapeutically for point mutation diseases (sickle cell, transthyretin amyloidosis)."
  },
  {
    id: 75,
    question: "Prime editing, described as a 'search and replace' genome editing tool, uses a reverse transcriptase-pegRNA system to:",
    options: [
      "Introduce only single-nucleotide changes in the genome with perfect efficiency",
      "Install precise insertions, deletions, or any base-to-base conversion without double-strand breaks or donor DNA templates",
      "Amplify specific genomic sequences before editing to improve efficiency",
      "Deliver CRISPR components via mRNA instead of plasmid DNA"
    ],
    answer: 1,
    explanation: "Prime editing (Liu lab, 2019) uses a prime editing guide RNA (pegRNA) that contains the spacer + primer binding site + reverse transcriptase template. A Cas9 nickase fused to reverse transcriptase nicks one DNA strand, extends the nick using the pegRNA template, and the new sequence is incorporated through DNA repair. Prime editing can perform all 12 possible base substitutions and small indels with greater versatility than base editors and without DSBs."
  },
  {
    id: 76,
    question: "Gene drives in vector control are designed to:",
    options: [
      "Increase the rate at which beneficial mutations spread through a population using natural selection",
      "Rapidly spread a genetic modification through a wild population by biasing inheritance above the standard 50% Mendelian frequency",
      "Drive out invasive species by introducing lethal recessive alleles into small populations",
      "Force gene expression changes in somatic cells without affecting the germline"
    ],
    answer: 1,
    explanation: "CRISPR-based gene drives use the Cas9-guide RNA system to copy the drive construct to both chromosomes in heterozygotes, resulting in near 100% inheritance (vs. normal 50%). This can rapidly spread desired traits (e.g., infertility or malaria refractoriness) through wild mosquito populations within a few generations. Mutagenic chain reactions and suppression drives are under development for malaria control, but ethical and ecological concerns about irreversibility are significant."
  },
  {
    id: 77,
    question: "Adeno-associated virus (AAV) vectors are preferred for in vivo gene therapy delivery because they:",
    options: [
      "Integrate into the host genome at random sites, ensuring long-term gene expression",
      "Are non-integrating, have low immunogenicity, can transduce both dividing and non-dividing cells, and exhibit tissue tropism based on capsid serotype",
      "Have a large cloning capacity (>10 kb) accommodating full-length dystrophin or CFTR genes",
      "Can be reprogrammed without viral production systems using synthetic biology approaches"
    ],
    answer: 1,
    explanation: "AAV is a preferred in vivo gene therapy vector: it is non-pathogenic in humans, persists as episomal concatemers without significant integration risk, has low immunogenicity (especially serotypes 5 and 9), and different capsid serotypes show strong tissue tropism (AAV9 crosses the blood-brain barrier, AAV8 for liver, AAV2 for retina). Limitations include ~4.7 kb packaging capacity and pre-existing neutralizing antibodies in some patients. FDA-approved products include voretigene (RPE65, eye), onasemnogene (SMA), hemgenix (hemophilia B)."
  },
  {
    id: 78,
    question: "CAR-T cell therapy for B-cell malignancies most commonly targets which antigen?",
    options: [
      "CD3 on all T lymphocytes",
      "CD19, expressed on B cells and most B-cell leukemias and lymphomas",
      "PD-L1 expressed on tumor cells and immune cells",
      "BCR-ABL fusion protein expressed in CML"
    ],
    answer: 1,
    explanation: "Chimeric antigen receptor (CAR) T cells redirect T cells to tumor antigens via an engineered extracellular antigen-binding domain (often from a monoclonal antibody scFv) fused to intracellular signaling domains (CD3ζ + co-stimulatory domains like CD28 or 4-1BB). CD19 CAR-T (tisagenlecleucel, axicabtagene) targets CD19-expressing B-ALL and diffuse large B-cell lymphoma, achieving ~80% complete remission rates in heavily pre-treated B-ALL. On-target, off-tumor toxicity causes B-cell aplasia requiring immunoglobulin replacement."
  },
  {
    id: 79,
    question: "The mechanism of cytokine release syndrome (CRS) as a toxicity of CAR-T cell therapy involves:",
    options: [
      "Direct tumor lysis releasing cytotoxic granules that damage cardiac tissue",
      "Massive T-cell and macrophage activation releasing pro-inflammatory cytokines (IL-6, IFN-γ, TNF-α), causing systemic inflammation",
      "Complement activation triggered by the anti-CD19 antibody component of the CAR",
      "Autoimmune attack on normal tissues cross-reactive with the tumor antigen"
    ],
    answer: 1,
    explanation: "CRS is the most common CAR-T toxicity (occurring in ~90% to varying degrees). Rapid in vivo CAR-T expansion triggers massive cytokine production (IL-6, IFN-γ, IL-2, GM-CSF) from activated T cells and secondary macrophage activation. Clinical features range from fever to life-threatening hypotension, hypoxia, and multi-organ failure. Tocilizumab (anti-IL-6 receptor) is the primary treatment, with corticosteroids for refractory cases; its early use does not impair CAR-T efficacy."
  },
  {
    id: 80,
    question: "Epigenetic silencing of tumor suppressor genes in cancer is most commonly mediated by:",
    options: [
      "Deletion of the gene on one allele combined with point mutation on the other (Knudson two-hit)",
      "Hypermethylation of CpG island promoters, preventing transcription factor binding and gene expression",
      "Loss of heterozygosity through chromosomal rearrangement",
      "Overexpression of microRNAs that degrade tumor suppressor mRNA"
    ],
    answer: 1,
    explanation: "CpG island methylation at gene promoters by DNA methyltransferases (DNMT1, DNMT3A/B) is a major epigenetic mechanism of tumor suppressor gene silencing in cancer. Methylated CpG recruits methyl-CpG binding proteins and histone deacetylases, compacting chromatin and blocking transcription. Classic examples: MLH1 methylation (Lynch syndrome-like colorectal cancer), BRCA1 methylation (sporadic breast cancer), and CDKN2A/p16 methylation in multiple cancers. DNA methylation inhibitors (azacitidine, decitabine) can reverse this silencing."
  },

  // Questions 81-86: Microbiology (CLSI breakpoints, MIC, synergy, SBT, beta-lactamase)
  {
    id: 81,
    question: "According to CLSI breakpoints, a Staphylococcus aureus isolate is classified as 'susceptible' to an antibiotic when its minimum inhibitory concentration (MIC) is:",
    options: [
      "Greater than the susceptibility breakpoint but less than the resistance breakpoint",
      "At or below the susceptibility breakpoint, predicting a high probability of therapeutic success with standard dosing",
      "Any value below the resistance breakpoint",
      "Equal to the MIC50 of the tested population of isolates"
    ],
    answer: 1,
    explanation: "CLSI (and EUCAST) classify isolates as Susceptible (S), Intermediate/Susceptible with Increased Exposure (I/SDD), or Resistant (R) based on MIC breakpoints that predict clinical outcome. Susceptible = MIC ≤ susceptibility breakpoint; therapeutic success expected with standard dosing regimens. The breakpoints are derived from pharmacodynamic targets (PK/PD), outcome data from clinical trials, and epidemiological cut-off values (ECOFFs)."
  },
  {
    id: 82,
    question: "The 'E-test' (epsilometer test) for MIC determination involves:",
    options: [
      "Diluting antibiotics in a series of test tubes and identifying the lowest concentration showing no turbidity",
      "Placing a plastic strip with a continuous antibiotic concentration gradient on a bacterial lawn; MIC is read where the inhibition ellipse intersects the strip",
      "Using automated microdilution systems to generate MIC values electronically",
      "Measuring zone of inhibition diameters on Mueller-Hinton agar to calculate MIC"
    ],
    answer: 1,
    explanation: "The E-test uses a predefined, stable, continuous antibiotic concentration gradient on a thin plastic strip. Applied to a standardized inoculum on agar, the antibiotic diffuses outward, forming an elliptical zone of inhibition. The MIC is read directly from the scale at the point where the inhibition ellipse intersects the strip. E-tests are quantitative, simple, and correlate well with broth microdilution reference methods for most antibiotic-organism combinations."
  },
  {
    id: 83,
    question: "The checkerboard assay for antibiotic synergy testing defines synergy when the Fractional Inhibitory Concentration Index (FICI) is:",
    options: [
      "Greater than 4.0",
      "Less than or equal to 0.5",
      "Equal to 1.0",
      "Between 0.5 and 2.0"
    ],
    answer: 1,
    explanation: "FICI = (MIC of drug A in combination / MIC of drug A alone) + (MIC of drug B in combination / MIC of drug B alone). FICI ≤ 0.5 = synergy; FICI > 4.0 = antagonism; FICI 0.5–4.0 = indifference. The checkerboard assay tests multiple combinations of two antibiotics in 2-fold serial dilutions in a microtiter plate. Synergistic combinations are clinically sought for difficult-to-treat MDR infections (e.g., colistin + carbapenem for CRE)."
  },
  {
    id: 84,
    question: "The serum bactericidal test (SBT or Schlichter test) measures:",
    options: [
      "The minimum antibiotic concentration in serum needed to prevent bacterial growth in a test tube",
      "The highest dilution of a patient's serum that kills ≥99.9% of a standard inoculum of the infecting pathogen",
      "The bactericidal activity of serum complement alone against clinical isolates",
      "The post-antibiotic effect in diluted serum samples from treated patients"
    ],
    answer: 1,
    explanation: "The SBT uses serial dilutions of a patient's serum (collected at peak and/or trough) with a standardized inoculum of their own bacterial isolate. The serum bactericidal titer (SBT) is the highest dilution achieving ≥99.9% killing (3-log reduction). Though methodologically non-standardized and rarely performed now, SBT was historically used in endocarditis management; peak SBT ≥1:8 was considered predictive of therapeutic success."
  },
  {
    id: 85,
    question: "Beta-lactamase detection by the chromogenic nitrocefin test exploits:",
    options: [
      "The color change of pH indicators when penicillinase hydrolyzes penicillin",
      "Beta-lactamase hydrolysis of nitrocefin's beta-lactam ring, causing a color change from yellow to red detectable within seconds to minutes",
      "Fluorescence emission from beta-lactamase-cleaved coumarin substrates",
      "Turbidity reduction in bacterial cultures exposed to beta-lactam antibiotics"
    ],
    answer: 1,
    explanation: "Nitrocefin is a chromogenic cephalosporin substrate. Intact nitrocefin is yellow; hydrolysis of the beta-lactam ring by beta-lactamase (including penicillinases, cephalosporinases) causes a spectral shift to red (absorbance change at 482 nm). The test is highly sensitive and rapid (results in <30 minutes), making it ideal for detecting beta-lactamase in H. influenzae, N. gonorrhoeae, Moraxella catarrhalis, Staphylococcus, and Bacteroides from colonies or broth."
  },
  {
    id: 86,
    question: "In mycobacteriology, the GeneXpert MTB/RIF assay detects rifampicin resistance by:",
    options: [
      "Sequencing the complete rpoB gene and comparing it to a wild-type reference",
      "Detecting mutations in the 81-bp hotspot region of rpoB using real-time PCR with molecular beacon probes",
      "Measuring rifampicin minimum inhibitory concentrations on Löwenstein-Jensen media",
      "Using comparative hybridization of rpoB amplicons to wild-type probes on a line probe assay"
    ],
    answer: 1,
    explanation: "Xpert MTB/RIF uses a nested PCR with five molecular beacon probes that cover the 81-bp rifampicin resistance-determining region (RRDR) of rpoB — the region responsible for >95% of clinical RIF resistance in M. tuberculosis. Mutations in the RRDR prevent probe hybridization, generating a shifted melting curve pattern signaling resistance. Results are available in <2 hours from sputum, with sensitivity 88% for smear-negative TB and >98% specificity for RIF resistance."
  },

  // Questions 87-93: English (comprehension, inference, vocabulary, tone, main idea)
  {
    id: 87,
    question: "Read the following passage: 'Precision medicine represents a paradigm shift from the traditional 'one-size-fits-all' approach, wherein treatments are tailored to the individual patient's genetic makeup, lifestyle, and environment. Proponents argue that this approach maximizes therapeutic efficacy while minimizing adverse effects. Critics, however, contend that it may exacerbate health inequalities, as advanced genomic testing remains inaccessible to populations in resource-limited settings.' The main idea of this passage is:",
    options: [
      "Precision medicine is universally superior to conventional medical treatment",
      "Precision medicine offers individualized treatment benefits but raises concerns about equitable access",
      "Genetic testing is the cornerstone of all future medical advances",
      "Critics of precision medicine oppose genomic research on ethical grounds"
    ],
    answer: 1,
    explanation: "The passage presents both sides — precision medicine's promise (tailored, efficacious therapy) and its potential drawback (worsening health inequity). The main idea captures both aspects: individualized benefits tempered by access concerns. Option A is too extreme (the passage does not assert universal superiority). Option C overstates the passage's content. Option D misrepresents the critics' position, which concerns access, not opposition to genomic research per se."
  },
  {
    id: 88,
    question: "From the passage in Q87, the most reasonable inference about 'resource-limited settings' is that:",
    options: [
      "Precision medicine should not be practiced in these settings under any circumstances",
      "The high cost and infrastructure requirements of genomic technologies may create disparities if precision medicine is not implemented with equity-conscious policies",
      "People in resource-limited settings have simpler genomic profiles requiring less precision",
      "Resource limitations exclusively affect surgical interventions, not diagnostic testing"
    ],
    answer: 1,
    explanation: "The passage states that genomic testing 'remains inaccessible' in resource-limited settings, implying that the benefits of precision medicine cannot be equitably realized without addressing cost and infrastructure barriers. The inference is that without deliberate policy action (subsidized testing, technology transfer, capacity building), precision medicine could widen existing health disparities between wealthy and low-income populations."
  },
  {
    id: 89,
    question: "In the context of the passage in Q87, the word 'paradigm' most nearly means:",
    options: [
      "A small-scale experimental program",
      "A fundamental framework or model that shapes the approach to a subject",
      "A statistical method for analyzing genetic data",
      "A regulatory pathway for approving new medical technologies"
    ],
    answer: 1,
    explanation: "A 'paradigm' in scientific and academic usage refers to a fundamental model or framework that governs thinking and practice within a field. A 'paradigm shift' (coined by Thomas Kuhn) describes a fundamental change in the basic concepts and practices of a scientific discipline. In the passage, precision medicine represents such a fundamental shift from population-based to individual-based treatment frameworks."
  },
  {
    id: 90,
    question: "Choose the grammatically correct and contextually appropriate sentence:",
    options: [
      "The incidence of the disease have increased significantly over the past decade.",
      "The incidence of the disease has increased significantly over the past decade.",
      "The incidence of the disease have been increasing significantly over the past decade.",
      "The incidences of the disease is increasing significantly over the past decade."
    ],
    answer: 1,
    explanation: "Subject-verb agreement: 'incidence' is a singular, uncountable noun. It requires the singular verb 'has.' 'The incidence of the disease has increased' is grammatically correct. 'Incidences' (plural) is generally not used in epidemiology — incidence is already an abstract rate or count noun. Options A and C incorrectly use 'have' with a singular subject; option D pairs 'incidences' (incorrect plural) with a singular verb creating a different inconsistency."
  },
  {
    id: 91,
    question: "The tone of the following scientific statement is best characterized as: 'While the preliminary results appear promising, the absence of a control group, the small sample size of 23 patients, and the lack of blinding in this open-label trial preclude any definitive conclusions regarding the efficacy of the proposed intervention.'",
    options: [
      "Enthusiastic and supportive",
      "Cautious and methodologically critical",
      "Dismissive and contemptuous",
      "Speculative and uncertain about scientific methods"
    ],
    answer: 1,
    explanation: "The statement acknowledges positive preliminary results ('appear promising') but carefully delineates methodological limitations (no control group, small n, open-label). This balanced, measured tone is cautious — it neither rejects the intervention nor endorses it, insisting on methodological rigor before conclusions can be drawn. This is the hallmark of scientifically critical writing — evaluating evidence quality rather than accepting face-value results."
  },
  {
    id: 92,
    question: "Fill in the blank with the most appropriate word: 'The meta-analysis pooled data from 18 randomized controlled trials and found a statistically significant, though ______, reduction in all-cause mortality with the experimental vaccine.'",
    options: [
      "Substantial",
      "Profound",
      "Modest",
      "Negligible"
    ],
    answer: 2,
    explanation: "The sentence qualifies 'statistically significant' with an adjective suggesting the effect, while real, is not large — providing epistemic balance. 'Modest' fits this context, indicating real but not dramatic efficacy, which is a common and appropriate qualifier in epidemiological writing when describing statistically significant but not clinically large effects. 'Negligible' would contradict 'statistically significant'; 'substantial' or 'profound' would not provide qualification."
  },
  {
    id: 93,
    question: "Which sentence best concludes the following paragraph? 'Antimicrobial resistance is projected to cause 10 million deaths annually by 2050 if no action is taken. The pipeline for novel antibiotics has stalled, with few new classes reaching the market. Existing antibiotics are increasingly failing against common pathogens. ______'",
    options: [
      "Antibiotics have been one of the greatest achievements of modern medicine since their discovery in the 20th century.",
      "Therefore, a coordinated global response — encompassing antibiotic stewardship, new drug development incentives, and surveillance strengthening — is urgently required.",
      "Patients should consult their physicians before stopping antibiotic courses.",
      "Some resistant infections can still be treated with older, less frequently used antibiotics."
    ],
    answer: 1,
    explanation: "The paragraph establishes a crisis: rising mortality projections, pipeline failure, and therapeutic failures — three converging problems demanding a proportionate, comprehensive response. Option B provides a logical conclusion that synthesizes all three identified problems (overuse → stewardship; pipeline → development incentives; monitoring → surveillance). Options A, C, and D fail to address the systemic scale of the problem described."
  },

  // Questions 94-100: General Knowledge (Digital India Health, CoWIN, Aarogya Setu, ABDM)
  {
    id: 94,
    question: "The Ayushman Bharat Digital Mission (ABDM), launched in 2021, is built on which foundational unique identifier for every Indian citizen?",
    options: [
      "Aadhaar number (UID)",
      "Ayushman Bharat Health Account (ABHA) — a 14-digit health ID",
      "PAN card number",
      "Voter ID number"
    ],
    answer: 1,
    explanation: "ABDM creates a digital health ecosystem with the ABHA (Ayushman Bharat Health Account), a voluntary 14-digit unique health ID linked (but not mandatorily tied) to Aadhaar. ABHA allows individuals to own their health records (prescriptions, diagnostic reports, discharge summaries) stored in a personal health record (PHR) application and share them with healthcare providers. The ABDM registry also includes healthcare professionals (HPR) and health facilities (HFR)."
  },
  {
    id: 95,
    question: "The CoWIN platform, developed for India's COVID-19 vaccination program, incorporated which key digital health feature?",
    options: [
      "AI-based triage for COVID-19 symptom checking",
      "Real-time beneficiary registration, appointment scheduling, vaccine stock management, and digital vaccination certificate generation",
      "Contact tracing through Bluetooth proximity data",
      "Teleconsultation with AIIMS doctors for COVID-19 management"
    ],
    answer: 1,
    explanation: "CoWIN (COVID Vaccine Intelligence Network) was a cloud-based, real-time digital platform for India's COVID-19 vaccination drive — the world's largest. It enabled self-registration and appointment booking (cowin.gov.in), slot availability viewing at vaccination centers, beneficiary verification, dose recording, and automated digital certificate generation (downloadable, internationally recognized). CoWIN's open API architecture allowed integration with WhatsApp, UMANG, and Aarogya Setu apps."
  },
  {
    id: 96,
    question: "Aarogya Setu, India's COVID-19 contact tracing app, used which technology for proximity-based contact detection?",
    options: [
      "GPS location data only",
      "Bluetooth-based proximity detection supplemented by GPS for location logging",
      "Wi-Fi triangulation for indoor contact mapping",
      "RFID tags on vaccination cards"
    ],
    answer: 1,
    explanation: "Aarogya Setu used Bluetooth Low Energy (BLE) to exchange anonymized IDs between nearby app users; if a user tests COVID-positive, the app identifies and notifies those who were within close proximity for ≥15 minutes over the past 14 days. GPS was used to record location history for mapping exposure risk zones. The app also served as an e-pass platform during lockdowns and was later integrated with CoWIN for vaccination certificates."
  },
  {
    id: 97,
    question: "The e-Hospital application developed by NIC (National Informatics Centre) for government hospitals in India provides which functionality?",
    options: [
      "Online pharmacy dispensing and home delivery of medicines",
      "Hospital Information Management System (HIMS) covering OPD registration, appointment booking, lab results, and IP management, accessible to patients via an app",
      "Telemedicine video consultation between patients and specialists",
      "AI-based diagnostic support for radiological image interpretation"
    ],
    answer: 1,
    explanation: "e-Hospital is a comprehensive, cloud-based Hospital Information System developed by NIC and deployed in government hospitals and health facilities across India. It covers: online OPD appointment booking, patient registration, OPD/IP management, laboratory information system (LIS), blood bank management, pharmacy, dietary management, and bio-medical waste management. The e-Hospital Patient App allows patients to register and book appointments at enrolled government hospitals."
  },
  {
    id: 98,
    question: "India's Telemedicine Practice Guidelines (2020) were issued by the Ministry of Health and Family Welfare and specify that:",
    options: [
      "Telemedicine consultations are restricted to MBBS doctors only; specialists cannot practice telemedicine",
      "Registered Medical Practitioners (RMPs) can provide teleconsultation but with restrictions on prescribing Schedule X and certain other drugs via telemedicine, and first consultations for certain conditions require in-person examination",
      "Telemedicine requires mandatory physical examination within 48 hours of every teleconsultation",
      "Telemedicine is permissible only for follow-up consultations and not for new or acute complaints"
    ],
    answer: 1,
    explanation: "India's Telemedicine Practice Guidelines (2020) permit all RMPs registered under the Medical Council of India (now NMC) to provide telemedicine services. Key provisions include: Schedule H/H1 drugs can be prescribed via telemedicine; Schedule X drugs (e.g., certain psychotropics) are not permitted via telemedicine for new patients; clinical judgement guides when in-person follow-up is needed. The guidelines emphasize informed consent, confidentiality, and maintaining telemedicine consultation records."
  },
  {
    id: 99,
    question: "The National Health Stack (NHS), which underpins ABDM, includes which core component for verifying healthcare professionals?",
    options: [
      "National Medical Register (NMR) — a digital registry of all licensed medical practitioners maintained by the National Medical Commission",
      "Medical Council of India certificate number database",
      "Aadhaar-based biometric verification system for hospital credential checks",
      "Pharmacy Council of India's pharmacist registry"
    ],
    answer: 0,
    explanation: "ABDM's Healthcare Professionals Registry (HPR) is being developed to include all licensed health professionals using their registration numbers from respective professional councils (NMC, NNC, DCI, etc.), linked to ABHA. The National Medical Register (NMR) mandated under the National Medical Commission Act 2019 will serve as the authoritative registry for allopathic doctors. The HPR allows healthcare providers to be verified by patients and institutions in the digital health ecosystem."
  },
  {
    id: 100,
    question: "The Pradhan Mantri Jan Arogya Yojana (PM-JAY), the health insurance component of Ayushman Bharat, provides coverage of up to ₹5 lakh per family per year for:",
    options: [
      "All Indians above the poverty line including middle-income families",
      "Secondary and tertiary care hospitalization for economically vulnerable families identified through SECC 2011 database and state-defined criteria",
      "Primary healthcare consultations and diagnostics at Ayushman Bharat Health and Wellness Centres",
      "COVID-19 treatment exclusively at government hospitals"
    ],
    answer: 1,
    explanation: "PM-JAY (launched 2018) provides ₹5 lakh per family per year for secondary and tertiary hospitalization at empanelled public and private hospitals, benefiting approximately 50–55 crore individuals from the bottom 40% of India's population based on the Socio-Economic Caste Census 2011. It is cashless and paperless, covering over 1,900 medical and surgical packages. It does not cover OPD consultations — those are addressed by Health and Wellness Centres under the broader Ayushman Bharat scheme."
  }
];

export default questions;

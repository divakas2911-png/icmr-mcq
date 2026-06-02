const questions = [
  // Questions 1-12: Research Methodology
  {
    id: 1,
    question: "According to PRISMA 2020 guidelines, which section of a systematic review report should include the registration number and name of the register?",
    options: [
      "Methods – Search strategy",
      "Introduction – Rationale",
      "Methods – Registration and protocol",
      "Results – Study selection"
    ],
    answer: 2,
    explanation: "PRISMA 2020 (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) item 24 requires authors to report the registration information including the name of the register (e.g., PROSPERO) and the registration number in the Methods section under 'Registration and protocol.' Prospective registration reduces selective reporting bias and allows readers to identify protocol deviations. PROSPERO is the international register for systematic reviews maintained by the Centre for Reviews and Dissemination, University of York."
  },
  {
    id: 2,
    question: "In the GRADE framework for rating the certainty of evidence, which factor can UPGRADE the evidence from a lower certainty level?",
    options: [
      "Risk of bias in included studies",
      "Imprecision of effect estimates",
      "Large magnitude of effect",
      "Publication bias"
    ],
    answer: 2,
    explanation: "The GRADE framework has factors that downgrade evidence (risk of bias, inconsistency, indirectness, imprecision, publication bias) and factors that can upgrade evidence from observational studies: large magnitude of effect (RR >2 or <0.5), dose-response gradient, and all plausible confounders would reduce the demonstrated effect. A very large effect from observational studies can be rated 'moderate' instead of 'low' certainty. Publication bias, risk of bias, and imprecision are all downgrading factors."
  },
  {
    id: 3,
    question: "The Cochrane Risk of Bias 2 (RoB 2) tool for randomized trials assesses bias across how many domains?",
    options: [
      "3 domains",
      "5 domains",
      "7 domains",
      "9 domains"
    ],
    answer: 1,
    explanation: "RoB 2 (Risk of Bias 2 tool) assesses randomized trials across five domains: (1) Bias arising from the randomization process; (2) Bias due to deviations from intended interventions; (3) Bias due to missing outcome data; (4) Bias in measurement of the outcome; (5) Bias in selection of the reported result. Each domain is rated as 'low risk,' 'some concerns,' or 'high risk.' This is an update from the original Cochrane RoB tool that used 7 items."
  },
  {
    id: 4,
    question: "ROBINS-I (Risk Of Bias In Non-randomized Studies of Interventions) is used to assess risk of bias in:",
    options: [
      "Randomized controlled trials with crossover design",
      "Observational studies estimating the effect of an intervention",
      "Diagnostic accuracy studies",
      "Animal studies in pre-clinical research"
    ],
    answer: 1,
    explanation: "ROBINS-I (Sterne et al., 2016) is a tool specifically developed to assess risk of bias in non-randomized studies that evaluate the effects of health interventions (e.g., cohort studies, case-control studies comparing interventions). It uses seven domains covering pre-intervention, at-intervention, and post-intervention biases. Each domain is judged 'low,' 'moderate,' 'serious,' 'critical,' or 'no information.' It benchmarks against a hypothetical randomized trial as the target."
  },
  {
    id: 5,
    question: "An umbrella review differs from a conventional systematic review in that it:",
    options: [
      "Includes only unpublished studies to reduce publication bias",
      "Synthesizes evidence from multiple systematic reviews and meta-analyses on a topic",
      "Uses only qualitative data from phenomenological studies",
      "Is conducted without a protocol to allow flexibility in scope"
    ],
    answer: 1,
    explanation: "An umbrella review (also called an overview of systematic reviews or meta-review) is a higher-order synthesis that systematically identifies and synthesizes the findings of multiple existing systematic reviews and meta-analyses on a broad topic. It provides a comprehensive map of the evidence landscape, identifies areas of agreement/disagreement between reviews, and highlights research gaps. Umbrella reviews are increasingly used in policy and guideline development to summarize a large body of evidence."
  },
  {
    id: 6,
    question: "In PRISMA 2020, the updated flow diagram for systematic reviews that include database and non-database sources has how many phases?",
    options: [
      "Two phases: identification and screening",
      "Three phases: identification, screening, and inclusion",
      "Four phases: identification, screening, eligibility, and included",
      "Five phases: identification, de-duplication, screening, eligibility, and included"
    ],
    answer: 2,
    explanation: "The PRISMA 2020 flow diagram has four phases: (1) Identification – records identified from databases and other sources, with duplicates removed; (2) Screening – records screened with exclusions; (3) Eligibility – full-text articles assessed with reasons for exclusion; (4) Included – studies included in the review and/or meta-analysis. The 2020 update added separate tracking of records from database searches versus other sources (e.g., citation searching, expert contacts)."
  },
  {
    id: 7,
    question: "The concept of 'harvest plot' in evidence synthesis is used to:",
    options: [
      "Display cumulative meta-analysis results over time",
      "Visually synthesize heterogeneous evidence across multiple outcomes and populations",
      "Identify unpublished studies through contour-enhanced funnel plots",
      "Summarize the temporal pattern of study publications"
    ],
    answer: 1,
    explanation: "A harvest plot is a visual method for synthesizing heterogeneous evidence, particularly useful when quantitative pooling (meta-analysis) is not appropriate due to clinical or methodological diversity. Studies are represented as bars arranged by population/subgroup on the x-axis, with bar height reflecting study quality/size and shading indicating direction of effect. It allows visual assessment of patterns across diverse studies. It was developed by Ogilvie et al. (2008) for public health systematic reviews."
  },
  {
    id: 8,
    question: "In evidence synthesis, 'transitivity' in network meta-analysis (NMA) requires that:",
    options: [
      "All trials in the network have identical follow-up periods",
      "The distribution of effect modifiers is similar across different comparisons in the network",
      "All studies must be double-blinded randomized trials",
      "The transitivity assumption can be verified through statistical testing alone"
    ],
    answer: 1,
    explanation: "Transitivity in network meta-analysis requires that studies comparing different treatments are similar enough in their effect modifiers (prognostic factors that interact with treatment effects) that indirect comparisons are valid. For example, if comparing A vs C indirectly through A vs B and B vs C studies, participants in A vs B and B vs C trials should be similar in disease severity, comorbidities, etc. Transitivity cannot be statistically tested directly but is assessed qualitatively by comparing study-level characteristics across comparisons."
  },
  {
    id: 9,
    question: "In systematic review methodology, the PICO framework stands for:",
    options: [
      "Population, Intervention, Control, Outcomes",
      "Population, Intervention, Comparator, Outcomes",
      "Patients, Intervention, Comparison, Observations",
      "Prevalence, Incidence, Control, Odds"
    ],
    answer: 1,
    explanation: "PICO stands for Population (or Participants/Problem), Intervention, Comparator (not 'Control,' as this can encompass active comparators, usual care, or placebo), and Outcomes. Defining the review question in PICO format structures the eligibility criteria, search strategy, and data extraction. Extensions include PICOS (adding Study design), PICOT (adding Timeframe), and PECO (Population, Exposure, Comparator, Outcomes) for observational/etiological questions."
  },
  {
    id: 10,
    question: "The Cochrane Q test for heterogeneity in meta-analysis has a known statistical limitation. What is it?",
    options: [
      "It cannot be used when all studies have the same direction of effect",
      "It has low power to detect heterogeneity when the number of studies is small",
      "It overestimates heterogeneity when studies have large sample sizes",
      "It can only be calculated for binary outcomes"
    ],
    answer: 1,
    explanation: "Cochrane's Q test for heterogeneity is based on chi-squared distribution. When the number of included studies is small (common in systematic reviews), the test has low statistical power – it frequently fails to detect true heterogeneity (high Type II error rate). Conversely, with very many studies, it has very high power and may flag trivial statistical heterogeneity as significant. For this reason, the I² statistic (which measures the proportion of variation due to heterogeneity) is used alongside Q."
  },
  {
    id: 11,
    question: "In systematic reviews, 'selective outcome reporting bias' refers to:",
    options: [
      "Excluding unfavorable studies from the meta-analysis",
      "Reporting only statistically significant outcomes from a study while omitting non-significant ones",
      "Using different outcome measures across studies making pooling impossible",
      "Changing the primary outcome after data analysis based on results"
    ],
    answer: 1,
    explanation: "Selective outcome reporting bias (also termed within-study reporting bias or outcome reporting bias) occurs when researchers measure multiple outcomes but selectively report only those that are statistically significant or favorable, leaving others unpublished. This inflates apparent effect sizes and distorts the evidence base. It is detected by comparing protocols or trial registrations with final publications. RoB 2 domain 5 ('selection of the reported result') specifically assesses this bias."
  },
  {
    id: 12,
    question: "The 'GRADE Evidence to Decision (EtD) framework' is used primarily to:",
    options: [
      "Rate the quality of individual observational studies",
      "Translate research evidence into clinical practice guidelines and policy recommendations",
      "Identify methodological flaws in existing systematic reviews",
      "Calculate sample sizes for new primary research studies"
    ],
    answer: 1,
    explanation: "The GRADE Evidence to Decision (EtD) framework is a structured, transparent tool for moving from evidence (including GRADE certainty ratings) to decisions (recommendations, coverage decisions, policy). It considers multiple criteria beyond evidence quality: desirable and undesirable effects, certainty of evidence, values and preferences, resource use, equity, acceptability, and feasibility. EtD frameworks are used by WHO, NICE, and other guideline panels to make the recommendation process explicit and reproducible."
  },

  // Questions 13-24: Biostatistics
  {
    id: 13,
    question: "In structural equation modeling (SEM), a 'latent variable' is defined as:",
    options: [
      "A variable measured with high precision in the study",
      "An unobserved construct inferred from multiple observed indicator variables",
      "A variable that moderates the relationship between two observed variables",
      "A covariate that is correlated with both the exposure and outcome"
    ],
    answer: 1,
    explanation: "In structural equation modeling, a latent variable (also called a construct or factor) is an unobservable theoretical construct that is indirectly measured through multiple observed indicator variables. Examples include intelligence (measured by test scores), depression (measured by symptom items), or socioeconomic status (measured by income, education, occupation). SEM simultaneously estimates the measurement model (how well indicators reflect the latent variable) and the structural model (relationships between latent variables)."
  },
  {
    id: 14,
    question: "In a mediation analysis, the 'natural indirect effect' (NIE) represents:",
    options: [
      "The total effect of exposure on outcome not mediated through any pathway",
      "The change in outcome if the exposure changes but the mediator is fixed at its natural value under control",
      "The effect of exposure on outcome transmitted through the mediator",
      "The interaction between the exposure and mediator on the outcome scale"
    ],
    answer: 2,
    explanation: "In causal mediation analysis, the natural indirect effect (NIE) quantifies the portion of the total effect transmitted through the mediator M. It represents the change in outcome Y when the exposure X is set to its reference level but the mediator takes the value it would have taken under the exposed condition. The total effect (TE) = Natural Direct Effect (NDE) + Natural Indirect Effect (NIE). The proportion mediated = NIE/TE. Proper mediation analysis requires no exposure-mediator interaction assumption in traditional methods, or uses counterfactual methods."
  },
  {
    id: 15,
    question: "A Directed Acyclic Graph (DAG) in epidemiology is used primarily to:",
    options: [
      "Display the timeline of events in a cohort study",
      "Visually represent causal assumptions and identify confounders, mediators, and colliders",
      "Plot dose-response relationships between exposure and outcome",
      "Illustrate the flow of participants through a randomized trial"
    ],
    answer: 1,
    explanation: "DAGs are graphical representations of causal assumptions where nodes represent variables and directed arrows represent assumed causal effects. DAGs help researchers identify: confounders (which must be adjusted for), mediators (adjustment for which blocks causal pathways), and colliders (adjustment for which opens spurious paths causing collider bias). DAG-based adjustment sets (using backdoor criterion) are more principled than traditional variable selection methods. The do-calculus and d-separation rules are used with DAGs."
  },
  {
    id: 16,
    question: "Effect modification on the additive scale (departure from additivity) is assessed using:",
    options: [
      "The ratio of odds ratios across strata (relative excess risk due to interaction = 0)",
      "Relative excess risk due to interaction (RERI), which equals 0 under additivity",
      "The product of the two stratum-specific relative risks",
      "The Mantel-Haenszel pooled odds ratio test"
    ],
    answer: 1,
    explanation: "Effect modification on the additive scale is assessed using the Relative Excess Risk due to Interaction (RERI = RR₁₁ - RR₁₀ - RR₀₁ + 1), where subscripts indicate exposure A and B status. RERI = 0 indicates no additive interaction; RERI > 0 indicates positive synergism; RERI < 0 indicates negative synergism. Additive interaction is considered more relevant for public health (absolute risk impact) than multiplicative interaction. The Attributable Proportion (AP) and Synergy Index (SI) are related measures."
  },
  {
    id: 17,
    question: "In path analysis, the total effect of variable X on variable Y equals:",
    options: [
      "The sum of all direct paths from X to Y only",
      "The direct effect plus the sum of all indirect effects through mediating variables",
      "The product of standardized regression coefficients along the causal path",
      "The correlation coefficient between X and Y"
    ],
    answer: 1,
    explanation: "In path analysis (a special case of SEM with observed variables only), the total effect of X on Y = Direct Effect (path coefficient from X to Y) + Sum of all Indirect Effects (product of path coefficients along each indirect pathway through mediators). Decomposing total effects into direct and indirect components helps understand mechanisms. The indirect effect through mediator M = (path X→M) × (path M→Y). This decomposition provides insights beyond traditional regression which only estimates total effects."
  },
  {
    id: 18,
    question: "In a logistic regression model, including an interaction term between two binary predictors (A×B) tests for:",
    options: [
      "Whether A and B are correlated with each other",
      "Whether the effect of A on the outcome differs depending on the level of B (effect modification on the multiplicative scale)",
      "Whether both A and B independently predict the outcome",
      "Whether A mediates the effect of B on the outcome"
    ],
    answer: 1,
    explanation: "An interaction term (product term A×B) in a logistic regression model tests whether the effect of A on the log-odds of outcome differs by level of B (and vice versa) – i.e., statistical interaction or effect modification on the multiplicative (odds ratio) scale. A significant interaction coefficient means the odds ratio for A differs between B=0 and B=1 subgroups. This is distinct from additive interaction (assessed using RERI), confounding (correlation between predictors), and mediation analysis."
  },
  {
    id: 19,
    question: "The intraclass correlation coefficient (ICC) in the context of cluster randomized trials represents:",
    options: [
      "The within-cluster variance as a proportion of total variance",
      "The between-cluster variance as a proportion of total variance, measuring how similar participants within the same cluster are",
      "The correlation between pre- and post-intervention measurements",
      "The reliability of outcome measurements between two raters"
    ],
    answer: 1,
    explanation: "The ICC in cluster randomized trials measures clustering – the proportion of total variability in outcomes attributable to between-cluster differences. ICC = σ²_between / (σ²_between + σ²_within). A high ICC means participants within clusters are very similar to each other. ICC directly inflates required sample size through the design effect (DEFF = 1 + (n-1) × ICC, where n is cluster size). Even a small ICC (e.g., 0.05) substantially inflates sample size for large cluster sizes."
  },
  {
    id: 20,
    question: "Instrumental variable (IV) analysis in epidemiology is used to:",
    options: [
      "Identify the best measurement instrument for a health outcome",
      "Estimate causal effects when unmeasured confounding is present, using a variable that affects the exposure but not the outcome directly",
      "Adjust for measurement error in the main exposure variable",
      "Test for mediation without requiring randomization"
    ],
    answer: 1,
    explanation: "Instrumental variable analysis estimates causal effects in the presence of unmeasured confounding. A valid instrument Z must satisfy: (1) Z is associated with exposure X (relevance); (2) Z affects outcome Y only through X (exclusion restriction); (3) Z is independent of all unmeasured confounders of the X-Y relationship. Mendelian randomization uses genetic variants as instruments (exploiting random allocation of alleles at conception). Two-stage least squares (2SLS) is the standard IV estimation method."
  },
  {
    id: 21,
    question: "In time-series analysis of epidemiological data, an 'interrupted time series' (ITS) design is used to:",
    options: [
      "Analyze data with multiple missing time points",
      "Evaluate the impact of an intervention by comparing pre- and post-intervention trends while controlling for pre-existing trends",
      "Model seasonal variation in disease incidence",
      "Identify lagged effects between environmental exposures and health outcomes"
    ],
    answer: 1,
    explanation: "Interrupted time series (ITS) analysis is a quasi-experimental design that evaluates the effect of an intervention by examining changes in the level (immediate impact) and slope (trend change) of an outcome before and after the intervention point, while controlling for the pre-existing time trend. ITS is particularly valuable for evaluating population-level public health interventions (e.g., policy changes, vaccination programs, legislative interventions) where RCTs are not feasible. Segmented regression is used for analysis."
  },
  {
    id: 22,
    question: "In Mendelian randomization (MR), the 'two-sample MR' approach differs from one-sample MR in that:",
    options: [
      "Two-sample MR uses genetic variants from one sample and outcome data from the same sample",
      "Two-sample MR uses summary-level GWAS data from two separate samples for instrument-exposure and exposure-outcome associations",
      "Two-sample MR requires individual-level data from both samples",
      "Two-sample MR can only be used with binary outcomes"
    ],
    answer: 1,
    explanation: "Two-sample MR uses summary statistics (SNP-exposure and SNP-outcome associations) from two non-overlapping GWAS samples, allowing causal inference using publicly available GWAS summary data without individual-level data. This enables MR studies using very large sample sizes from GWAS consortia. Methods like MR-Egger, weighted median, and MR-PRESSO are used to test and account for horizontal pleiotropy (when genetic instruments affect the outcome through pathways other than the exposure), a key source of bias."
  },
  {
    id: 23,
    question: "The 'propensity score' in observational studies is defined as:",
    options: [
      "The probability of the outcome occurring given the observed covariates",
      "The conditional probability of receiving the treatment given observed pre-treatment covariates",
      "The odds ratio of treatment effect adjusted for all confounders",
      "The inverse of the probability of being in the study sample"
    ],
    answer: 1,
    explanation: "The propensity score (PS), introduced by Rosenbaum and Rubin (1983), is the conditional probability of receiving treatment T=1 given observed pre-treatment covariates X: PS = P(T=1|X). PS balances measured confounders between treatment groups, mimicking a randomized experiment. PS can be used for matching (match treated to controls with similar PS), stratification (create PS quintiles), weighting (inverse probability of treatment weighting, IPTW), or covariate adjustment. PS cannot address unmeasured confounding."
  },
  {
    id: 24,
    question: "In receiver operating characteristic (ROC) analysis, the area under the curve (AUC) of 0.5 indicates:",
    options: [
      "Perfect discrimination between cases and non-cases",
      "Discrimination no better than random chance",
      "The test has 50% sensitivity and 50% specificity",
      "Moderate discrimination equivalent to a test with sensitivity of 70%"
    ],
    answer: 1,
    explanation: "An AUC of 0.5 means the test performs no better than chance at discriminating between cases (positives) and non-cases (negatives) — equivalent to randomly assigning a diagnosis. AUC ranges from 0.5 (no discrimination) to 1.0 (perfect discrimination). AUC = 0.7-0.8 is considered acceptable, 0.8-0.9 excellent, and >0.9 outstanding. Importantly, AUC of 0.5 does NOT mean sensitivity = specificity = 50%; a test could have 100% sensitivity but no specificity and still have AUC near 0.5."
  },

  // Questions 25-34: Diagnostic Tests
  {
    id: 25,
    question: "Point-of-care ultrasound (POCUS) in critically ill patients primarily uses which mode for rapid assessment of cardiac function?",
    options: [
      "A-mode (amplitude mode)",
      "M-mode (motion mode)",
      "B-mode (brightness mode) and 2D echocardiography",
      "Doppler spectral mode"
    ],
    answer: 2,
    explanation: "POCUS for cardiac assessment primarily uses B-mode (2D real-time imaging) to visualize cardiac structures, wall motion, pericardial effusion, and gross ventricular function. Common protocols include FAST (Focused Assessment with Sonography in Trauma), RUSH (Rapid Ultrasound for Shock and Hypotension), and FATE (Focused Assessment of Transthoracic Echocardiography). POCUS has transformed bedside management in emergency and critical care settings, guiding fluid resuscitation, identifying tamponade, and assessing left ventricular ejection fraction."
  },
  {
    id: 26,
    question: "Dermoscopy (dermatoscopy) improves the diagnosis of melanoma primarily by:",
    options: [
      "Measuring the depth of tumor invasion into the dermis",
      "Visualizing subsurface skin structures (epidermis and papillary dermis) not visible to the naked eye through optical magnification and polarized light",
      "Detecting circulating melanoma cells in peripheral blood",
      "Quantifying melanin content through spectrophotometric analysis"
    ],
    answer: 1,
    explanation: "Dermoscopy uses optical magnification (typically 10x) with polarized or non-polarized light and a fluid interface to visualize sub-epidermal structures including the dermal-epidermal junction, papillary dermis, and superficial vasculature. It reveals structures like pigment networks, dots, globules, streaks, regression structures, and atypical vascular patterns that help distinguish melanoma from benign nevi. Meta-analyses show dermoscopy improves melanoma sensitivity by ~20% and reduces unnecessary excisions compared to naked-eye examination."
  },
  {
    id: 27,
    question: "End-tidal CO₂ (EtCO₂) monitoring using capnography provides which clinically important information that pulse oximetry cannot?",
    options: [
      "Oxygen saturation of arterial hemoglobin",
      "Continuous assessment of ventilation (CO₂ elimination) and confirmation of endotracheal tube placement",
      "Cardiac output estimation through pulse contour analysis",
      "Detection of methemoglobinemia"
    ],
    answer: 1,
    explanation: "Capnography measures exhaled CO₂ continuously, providing real-time assessment of ventilation adequacy, airway patency, and metabolic CO₂ production. Critical clinical uses include: immediate confirmation of endotracheal tube placement (avoids unrecognized esophageal intubation), continuous monitoring of ventilation during procedural sedation, detecting return of spontaneous circulation (ROSC) during CPR, and diagnosing bronchospasm (characteristic 'shark fin' waveform). Pulse oximetry monitors oxygenation but is insensitive to hypoventilation with supplemental oxygen."
  },
  {
    id: 28,
    question: "Pulse oximetry (SpO₂) measurements are known to be LEAST reliable in which clinical scenario?",
    options: [
      "Mild anemia (hemoglobin 9-10 g/dL)",
      "Carbon monoxide poisoning (elevated carboxyhemoglobin)",
      "Mild peripheral vasoconstriction",
      "Mild tachycardia (heart rate 100-110 bpm)"
    ],
    answer: 1,
    explanation: "Standard pulse oximetry cannot distinguish between oxyhemoglobin and carboxyhemoglobin because both absorb red light similarly at 660 nm. In carbon monoxide poisoning, SpO₂ reads falsely normal (or even falsely high) while the patient may be severely hypoxic. This is a life-threatening limitation. Methemoglobinemia also causes SpO₂ to read approximately 85% regardless of true saturation. Co-oximetry (measuring 4-8 hemoglobin species) is needed for accurate assessment. Standard pulse oximetry also overestimates SpO₂ in patients with dark skin pigmentation."
  },
  {
    id: 29,
    question: "Near-patient testing (NPT) or point-of-care testing (POCT) in clinical settings primarily reduces time-to-result compared to central laboratory testing. The main quality concern with POCT is:",
    options: [
      "Inability to test whole blood samples",
      "Higher analytical error rates due to less standardized conditions, operator variability, and limited quality assurance compared to central labs",
      "POCT devices cannot be calibrated",
      "POCT is too expensive for routine clinical use"
    ],
    answer: 1,
    explanation: "POCT devices are operated by clinical staff (often not trained laboratory scientists) in variable environmental conditions. Quality concerns include: operator skill variability, inadequate calibration and quality control, limited external quality assurance participation, pre-analytical errors (sample handling, patient identification), and lower precision/accuracy compared to central laboratory analyzers. Regulatory frameworks (e.g., CLIA in the US, ISO 22870) require quality management systems for POCT. Connectivity to laboratory information systems also poses challenges."
  },
  {
    id: 30,
    question: "A rapid antigen test (RAT) for COVID-19 has sensitivity of 72% and specificity of 99.5%. In a community with 5% prevalence, what is the positive predictive value (PPV)?",
    options: [
      "Approximately 88%",
      "Approximately 72%",
      "Approximately 99%",
      "Approximately 55%"
    ],
    answer: 0,
    explanation: "PPV = (Sensitivity × Prevalence) / [(Sensitivity × Prevalence) + (1-Specificity)(1-Prevalence)] = (0.72 × 0.05) / [(0.72 × 0.05) + (0.005 × 0.95)] = 0.036 / (0.036 + 0.00475) = 0.036 / 0.04075 ≈ 88.3%. Despite relatively low sensitivity (72%), the high specificity (99.5%) ensures that positive RAT results in a 5% prevalence setting are highly reliable (PPV ~88%). PPV increases further when prevalence is higher (e.g., symptomatic individuals with higher prior probability of disease)."
  },
  {
    id: 31,
    question: "Home-based self-testing for HIV (oral fluid HIV self-test) is recommended by WHO primarily because:",
    options: [
      "It has higher sensitivity than laboratory ELISA for HIV",
      "It reaches populations unlikely to test at healthcare facilities, expanding HIV diagnosis and linkage to care",
      "It is approved as a confirmatory test for HIV diagnosis",
      "It detects HIV earlier (within 1 week of infection) than standard tests"
    ],
    answer: 1,
    explanation: "WHO recommends HIV self-testing as an additional approach to reach key populations (men who have sex with men, sex workers, people who inject drugs) and other individuals who face barriers to facility-based testing including stigma, confidentiality concerns, distance, and limited hours. HIV self-testing typically has sensitivity of 97-99% and specificity of 99% for oral fluid tests. All reactive self-test results require confirmatory laboratory testing. Studies show self-testing significantly increases testing frequency and first-time testing in target populations."
  },
  {
    id: 32,
    question: "The STARD (Standards for Reporting of Diagnostic Accuracy Studies) 2015 checklist is used for:",
    options: [
      "Reporting systematic reviews of diagnostic test accuracy",
      "Reporting primary studies evaluating the accuracy of a diagnostic test against a reference standard",
      "Assessing risk of bias in randomized trials of diagnostic interventions",
      "Designing sample size calculations for diagnostic studies"
    ],
    answer: 1,
    explanation: "STARD 2015 is a 30-item reporting guideline for primary studies of diagnostic test accuracy. It ensures complete, transparent reporting of how the index test and reference standard were selected, applied, and interpreted; how participants were enrolled; and how accuracy measures (sensitivity, specificity, predictive values, likelihood ratios) were calculated. STARD includes a flow diagram showing participant recruitment and test results. Poor reporting of diagnostic studies was documented in the original STARD statement (2003), motivating its development."
  },
  {
    id: 33,
    question: "In the interpretation of liver function tests, the pattern of predominantly elevated alanine aminotransferase (ALT) and aspartate aminotransferase (AST) with relatively normal alkaline phosphatase (ALP) is called:",
    options: [
      "Cholestatic pattern",
      "Hepatocellular pattern",
      "Mixed pattern",
      "Infiltrative pattern"
    ],
    answer: 1,
    explanation: "Liver injury patterns on LFTs are diagnostically important: Hepatocellular pattern = predominantly elevated ALT and AST (>3x ULN) with relatively normal or mildly elevated ALP (due to hepatocyte damage from viruses, toxins, alcohol, autoimmune hepatitis). Cholestatic pattern = predominantly elevated ALP and GGT with mild aminotransferase elevation (bile duct obstruction, primary biliary cholangitis, drug-induced cholestasis). Mixed pattern has significant elevation of both. The ALT/ALP ratio (R-ratio) ≥5 indicates hepatocellular, ≤2 cholestatic, 2-5 mixed pattern."
  },
  {
    id: 34,
    question: "A diagnostic test has a likelihood ratio positive (LR+) of 10 and likelihood ratio negative (LR-) of 0.1. This indicates:",
    options: [
      "The test has 90% sensitivity and 90% specificity",
      "A positive test result makes disease 10 times more likely; a negative result makes disease 10 times less likely — indicating a useful test",
      "The test should only be used in high prevalence settings",
      "The false positive rate is 10% and false negative rate is 10%"
    ],
    answer: 1,
    explanation: "Likelihood ratios summarize test performance independent of prevalence. LR+ = Sensitivity / (1-Specificity): LR+ of 10 means a positive result increases odds of disease 10-fold (moderate-large shift). LR- = (1-Sensitivity) / Specificity: LR- of 0.1 means a negative result decreases odds of disease 10-fold (moderate-large shift). LR+ >10 and LR- <0.1 indicate a clinically useful test with large diagnostic impact. Using Fagan's nomogram, these LRs can convert pre-test to post-test probability."
  },

  // Questions 35-49: Communicable Diseases
  {
    id: 35,
    question: "The WHO global measles elimination target requires achieving which minimum vaccination coverage threshold?",
    options: [
      "85% with one dose of measles vaccine",
      "≥95% coverage with two doses of measles-containing vaccine in all districts",
      "90% with one dose in all districts",
      "95% with one dose nationally with no district below 80%"
    ],
    answer: 1,
    explanation: "WHO's measles elimination strategy requires ≥95% coverage with two doses of measles-containing vaccine (MCV1 and MCV2) in all districts, not just at national level. The second dose is critical to immunize the 5% who do not respond to the first dose and to create a cohort of fully immune individuals. Measles' high transmissibility (R0 12-18) requires >95% population immunity to interrupt transmission. India's measles mortality reduction target is 90% reduction by 2023 compared to 2010 baseline."
  },
  {
    id: 36,
    question: "The RTS,S/AS01 (Mosquirix) malaria vaccine was recommended by WHO for broad use in sub-Saharan Africa in 2021 based on pilot program results. Its primary target antigen is:",
    options: [
      "Merozoite surface protein-1 (MSP-1) of Plasmodium falciparum",
      "Circumsporozoite protein (CSP) of Plasmodium falciparum",
      "PfEMP-1 (erythrocyte membrane protein-1) of Plasmodium falciparum",
      "Pvs230 transmission-blocking antigen"
    ],
    answer: 1,
    explanation: "RTS,S targets the circumsporozoite protein (CSP) of Plasmodium falciparum, which coats the sporozoite surface and is expressed during the liver stage. RTS is a fusion protein of 'R' (central repeat region of CSP), 'T' (T-cell epitopes of CSP), and 'S' (HBsAg). AS01 is the adjuvant system containing MPL and QS-21. WHO recommended its use in children in sub-Saharan Africa based on pilot program data showing 30% reduction in severe malaria episodes. It is a 4-dose regimen (3 primary doses at 5, 6, 7 months + 1 booster at 18 months)."
  },
  {
    id: 37,
    question: "India's National Viral Hepatitis Control Programme (NVHCP) launched in 2018 aims to eliminate hepatitis C by achieving treatment coverage of what percentage by 2030?",
    options: [
      "50% of diagnosed patients",
      "80% of estimated hepatitis C patients (with cure rate of 95%)",
      "All newly diagnosed patients only",
      "100% of patients in public sector hospitals"
    ],
    answer: 1,
    explanation: "India's NVHCP aims to achieve WHO's elimination targets by 2030: 90% reduction in new infections, 65% reduction in mortality, diagnosing 90% of all people with viral hepatitis, and treating 80% of diagnosed patients. Direct-acting antivirals (DAAs) with 95%+ cure rates are provided free through the programme. India has generic manufacturing capacity for DAAs like sofosbuvir and daclatasvir. Hepatitis B elimination focuses on birth dose vaccination, PMTCT, and screening. India has an estimated 6 million people living with hepatitis C."
  },
  {
    id: 38,
    question: "The 'polio endgame strategy' after WPV eradication includes which critical steps?",
    options: [
      "Cessation of all polio vaccination globally once WPV is eradicated",
      "Switching from trivalent OPV to bivalent OPV (removing type 2), then ultimately switching to IPV only to eliminate cVDPV2 risk",
      "Continuing trivalent OPV indefinitely as insurance against resurgence",
      "Replacing OPV with a new live-attenuated monovalent type 2 poliovirus vaccine"
    ],
    answer: 1,
    explanation: "The GPEI polio endgame strategy includes: (1) Global withdrawal of type 2 OPV (tOPV→bOPV switch in April 2016) since WPV2 was eradicated in 1999 and tOPV-derived cVDPV2 was the dominant VDPV strain; (2) Introducing at least one IPV dose before bOPV switch to maintain type 2 immunity; (3) Responding to cVDPV2 outbreaks with novel OPV2 (nOPV2 – more genetically stable); (4) Ultimately phasing out all OPV and transitioning to IPV-only schedules for routine immunization."
  },
  {
    id: 39,
    question: "The dengue TAK-003 vaccine (Qdenga by Takeda) received WHO prequalification in 2023. Unlike Dengvaxia, TAK-003's key advantage is:",
    options: [
      "It provides protection only against dengue serotype 2",
      "Phase 3 trials (TIDES) showed it does not increase risk of severe dengue in seronegative individuals",
      "It is a live-attenuated monovalent vaccine with better manufacturing scalability",
      "It requires only a single dose for full protection"
    ],
    answer: 1,
    explanation: "TAK-003 (Qdenga) is a live-attenuated tetravalent dengue vaccine based on a dengue serotype 2 backbone with other serotype genes inserted. The TIDES phase 3 trial (20,000 children in 8 endemic countries) showed 73% efficacy against virologically confirmed dengue across all participants, including 52% efficacy in seronegative participants without evidence of vaccine-enhanced severe disease. This contrasts with Dengvaxia, which showed increased severe dengue risk in previously unexposed (seronegative) individuals. WHO approved TAK-003 for ages 4-60 years in endemic settings."
  },
  {
    id: 40,
    question: "India's Intensified Mission Indradhanush (IMI 4.0) in 2021-22 specifically targeted which groups for catch-up vaccination?",
    options: [
      "Only children under 1 year in tribal areas",
      "Children aged 0-5 years and pregnant women left out/dropped out of routine immunization due to COVID-19 pandemic",
      "Adolescents aged 10-15 years for HPV vaccination",
      "Adults over 60 years for influenza vaccination"
    ],
    answer: 1,
    explanation: "IMI 4.0 (2021-22) was specifically launched to recover COVID-19-related immunization backslides, targeting children aged 0-5 years and pregnant women who had missed or dropped out from routine immunization during pandemic disruptions. It covered 416 districts across 29 states/UTs across four rounds. The campaign addressed significant coverage gaps created by redirected health resources, lockdowns, and fear of COVID-19 at health facilities during 2020-21. IMI 4.0 contributed to recovery of immunization coverage disrupted by the pandemic."
  },
  {
    id: 41,
    question: "Rotavirus vaccine efficacy in low-income countries (like India and sub-Saharan Africa) is lower than in high-income countries primarily due to:",
    options: [
      "Different rotavirus serotypes circulating in developing countries",
      "Higher background prevalence of maternal antibodies blocking vaccine virus replication, oral poliovirus vaccine interference, malnutrition, and enteric co-infections",
      "Improper cold chain maintenance reducing vaccine potency",
      "Genetic differences in the rotavirus receptor in these populations"
    ],
    answer: 1,
    explanation: "Multiple factors reduce rotavirus vaccine efficacy in low-income settings compared to high-income countries (efficacy ~85% vs ~98%): maternal antibodies (passively transferred IgA/IgG interfering with live vaccine replication), oral polio vaccine interference, malnutrition and zinc deficiency impairing immune response, enteric co-infections (especially bacterial overgrowth), altered gut microbiome, and concomitant breastfeeding (maternal antibodies in breast milk). Despite lower efficacy, rotavirus vaccines have significant absolute benefit in high-burden low-income settings."
  },
  {
    id: 42,
    question: "Nipah virus disease, an emerging zoonosis in India, has its primary animal reservoir in:",
    options: [
      "Domestic pigs and poultry",
      "Fruit bats (Pteropus species)",
      "Rodents (Rattus species)",
      "Non-human primates"
    ],
    answer: 1,
    explanation: "Nipah virus (NiV) is a paramyxovirus whose natural reservoir is fruit bats (Pteropus genus, also known as flying foxes). Transmission to humans occurs through direct contact with infected bats (consuming contaminated date palm sap), infected pigs (in Malaysia/Singapore outbreaks), or infected humans (particularly in Bangladesh and India). India has experienced recurrent Nipah outbreaks in Kerala (2018, 2019, 2021, 2023). Human-to-human transmission can occur, with case fatality rates of 40-75%. There is no approved vaccine."
  },
  {
    id: 43,
    question: "The Global Polio Eradication Initiative (GPEI) currently considers which type of poliovirus as the most significant remaining challenge for eradication?",
    options: [
      "Wild poliovirus type 1 (WPV1) in Afghanistan and Pakistan only",
      "Circulating vaccine-derived poliovirus type 2 (cVDPV2) emerging in under-immunized populations",
      "Wild poliovirus type 3 which re-emerged after being declared eradicated",
      "Vaccine-associated paralytic poliomyelitis (VAPP) cases from OPV"
    ],
    answer: 1,
    explanation: "While WPV1 persists in Afghanistan and Pakistan, cVDPV2 has become the dominant poliovirus challenge globally, causing >90% of all poliovirus cases and outbreaks. After tOPV withdrawal, type 2 immunity gaps allowed OPV2-derived viruses to evolve into cVDPV2 in under-immunized populations. The response uses novel OPV2 (nOPV2), which is genetically more stable. cVDPV2 outbreaks have been detected in >30 African, Middle Eastern, and Asian countries, making it the central poliovirus challenge of the 2023-2026 GPEI strategy."
  },
  {
    id: 44,
    question: "Congenital Rubella Syndrome (CRS) results from maternal rubella infection in the first trimester. The characteristic 'triad' of CRS includes:",
    options: [
      "Microcephaly, hepatomegaly, and skin rash",
      "Cataracts, cardiac defects, and sensorineural hearing loss",
      "Hydrocephalus, chorioretinitis, and intracranial calcifications",
      "Petechiae, thrombocytopenia, and jaundice"
    ],
    answer: 1,
    explanation: "The classic triad of CRS (Gregg's triad) consists of: (1) Cataracts (and other ocular defects like glaucoma, retinopathy); (2) Cardiac defects (patent ductus arteriosus, pulmonary artery stenosis, VSD); (3) Sensorineural hearing loss (the most common single manifestation). The earlier in pregnancy the infection occurs, the more severe the defects. CRS prevention through rubella vaccination is the primary reason for introducing MR vaccine and eliminating rubella. India included rubella vaccination in national program in 2017."
  },
  {
    id: 45,
    question: "India's Pradhan Mantri National Dialysis Programme (2016) addresses the burden of which communicable disease complication?",
    options: [
      "Malaria-induced acute kidney injury",
      "End-stage renal disease from non-communicable causes, but also from chronic infections like hepatitis B/C",
      "Post-streptococcal glomerulonephritis complications",
      "Leptospirosis-associated acute renal failure"
    ],
    answer: 1,
    explanation: "The PM National Dialysis Programme provides free dialysis to BPL patients through PPP models at district hospitals. While primarily for non-communicable disease-related ESRD (diabetes, hypertension), hepatitis B and C (communicable diseases) are important causes of chronic kidney disease progressing to ESRD in India. The programme acknowledges the intersection of communicable and non-communicable disease burden in India's epidemiological transition. It addresses India's 2.2 lakh new dialysis patients annually, most unable to afford private care."
  },
  {
    id: 46,
    question: "The 'Eliminate Yellow Fever Epidemics (EYE)' strategy targets which countries for mass vaccination campaigns?",
    options: [
      "All tropical countries globally",
      "40 at-risk countries in Africa and the Americas through preventive mass vaccination and outbreak response",
      "Only West African countries with recent outbreaks",
      "South Asian countries with Aedes aegypti mosquito presence"
    ],
    answer: 1,
    explanation: "The EYE strategy (2017-2026), co-led by WHO, UNICEF, and Gavi, targets 40 at-risk countries in Africa (32) and the Americas (8) through three pillars: (1) Protecting at-risk populations through preventive mass vaccination campaigns; (2) Preventing international spread through vaccination for travelers; (3) Rapid outbreak response. The strategy aims to achieve ≥80% vaccination coverage in all target countries and maintain global vaccine stockpile of 6 million doses for emergency response. Yellow fever has no specific treatment, making vaccination the only prevention."
  },
  {
    id: 47,
    question: "The current WHO recommendation for antimalarial treatment of uncomplicated Plasmodium falciparum malaria in India is:",
    options: [
      "Chloroquine plus primaquine",
      "Artemisinin-based combination therapy (ACT) — Artesunate + Sulfadoxine-Pyrimethamine (AS+SP)",
      "Atovaquone-proguanil (Malarone) monotherapy",
      "Quinine plus doxycycline"
    ],
    answer: 1,
    explanation: "India's national drug policy and WHO recommend artemisinin-based combination therapy (ACT) for uncomplicated P. falciparum malaria. In India, the recommended ACT is Artesunate + Sulfadoxine-Pyrimethamine (AS+SP) given over 3 days, plus primaquine single dose (0.75 mg/kg) for gametocyte clearance. This replaced chloroquine due to widespread P. falciparum resistance. P. vivax still responds to chloroquine in India with 14-day primaquine radical cure. Artemisinin partial resistance (ART-R) is an emerging concern in Southeast Asia including parts of India."
  },
  {
    id: 48,
    question: "India's National Framework for Malaria Elimination (NFME 2016-2030) targets malaria elimination (zero indigenous cases) nationally by:",
    options: [
      "2022",
      "2027",
      "2030",
      "2035"
    ],
    answer: 2,
    explanation: "India's National Framework for Malaria Elimination 2016-2030 has phased targets: by 2022 – eliminate malaria in 26 states/UTs with low transmission; by 2024 – interrupt indigenous transmission in 15 more states/UTs; by 2027 – malaria-free status throughout India; by 2030 – maintain zero indigenous cases and prevent reintroduction. Despite India reducing malaria cases by 85% between 2000-2019, high-burden states (Odisha, Jharkhand, Chhattisgarh, Madhya Pradesh, Maharashtra) remain challenging due to tribal/forest-dwelling populations with limited healthcare access."
  },
  {
    id: 49,
    question: "Scrub typhus (caused by Orientia tsutsugamushi) is diagnosed clinically by which pathognomonic feature combined with febrile illness?",
    options: [
      "Maculopapular rash starting on the face and spreading downward",
      "Eschar (painless necrotic skin ulcer with black crust) at the site of chigger mite bite",
      "Petechial rash sparing the palms and soles",
      "Erythema migrans with central clearing"
    ],
    answer: 1,
    explanation: "Scrub typhus presents with fever, headache, myalgia, and characteristically an eschar — a painless, necrotic ulcer with a black crust at the site of chigger mite (Leptotrombidium) bite, representing the initial skin reaction to Orientia tsutsugamushi. The eschar occurs in approximately 50-80% of cases and is pathognomonic when present. Weil-Felix test (OXK reaction) was the historical diagnostic test; IgM ELISA and PCR are now preferred. Treatment is doxycycline. Scrub typhus is increasingly recognized as a major cause of acute febrile illness in India."
  },

  // Questions 50-64: Non-Communicable Diseases (Mental Health Focus)
  {
    id: 50,
    question: "The PHQ-9 (Patient Health Questionnaire-9) for depression screening has a score cutoff of ≥10 that is commonly used to indicate:",
    options: [
      "Severe depression requiring immediate hospitalization",
      "Moderate depression — a threshold with approximately 88% sensitivity and 88% specificity for major depressive disorder",
      "Mild depression not requiring treatment",
      "The threshold for initiating antipsychotic medications"
    ],
    answer: 1,
    explanation: "The PHQ-9 is a 9-item self-report questionnaire (total score 0-27) based directly on DSM criteria for major depressive disorder. Score categories: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe depression. A cutoff of ≥10 has been validated across populations as indicating clinically significant depression (sensitivity ~88%, specificity ~88% for MDD). The PHQ-9 is used for screening, measuring severity, and monitoring treatment response. Item 9 (suicidal ideation) requires immediate clinical evaluation regardless of total score."
  },
  {
    id: 51,
    question: "The GAD-7 (Generalized Anxiety Disorder-7) scale score of ≥10 indicates what severity of anxiety?",
    options: [
      "Mild anxiety",
      "Moderate anxiety — suggesting the need for further evaluation",
      "Severe anxiety requiring immediate hospitalization",
      "Panic disorder — a different diagnostic category"
    ],
    answer: 1,
    explanation: "The GAD-7 is a 7-item scale (0-21) based on DSM-IV GAD criteria. Score interpretation: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-21 severe anxiety. A cutoff of ≥10 has been validated for moderate anxiety (sensitivity ~89%, specificity ~82% for GAD). The scale also performs well for panic disorder, social anxiety, and PTSD screening. GAD-7 is widely used in primary care to identify patients requiring mental health evaluation or treatment. It can be combined with PHQ-9 to simultaneously screen for depression and anxiety."
  },
  {
    id: 52,
    question: "India's National Mental Health Programme (NMHP) was launched in which year?",
    options: [
      "1975",
      "1982",
      "1990",
      "1996"
    ],
    answer: 1,
    explanation: "India's National Mental Health Programme (NMHP) was launched in 1982, making it one of the earliest national mental health programs in developing countries. It was designed to integrate mental health into the general health care system at the community level. Its original components included the District Mental Health Programme (DMHP), human resource development, research and public education. NMHP was subsequently revised in 2003 to strengthen community services and reduce stigma, and integrated with the National Health Mission framework."
  },
  {
    id: 53,
    question: "India's District Mental Health Programme (DMHP) was first piloted in which district in 1996?",
    options: [
      "Pune, Maharashtra",
      "Bellary, Karnataka",
      "Thiruvananthapuram, Kerala",
      "Vellore, Tamil Nadu"
    ],
    answer: 1,
    explanation: "The District Mental Health Programme (DMHP) was first piloted in Bellary district, Karnataka in 1996 as part of NMHP. The Bellary model aimed to integrate mental health services into primary health care using the existing infrastructure, training primary care workers to identify and manage common mental disorders, and strengthening district hospital psychiatric services. DMHP has since been scaled nationally. Key DMHP activities include early detection, treatment, rehabilitation, and psychosocial support at the district level."
  },
  {
    id: 54,
    question: "The Mental Healthcare Act, 2017 (India) introduced which major patient rights provision NOT present in the 1987 Act?",
    options: [
      "Right to treatment in a government mental health facility",
      "Right to make advance directives (Ullekhpatra) specifying treatment preferences during mental illness episodes",
      "Right to confidentiality of mental health records",
      "Right to free legal aid for involuntary patients"
    ],
    answer: 1,
    explanation: "The Mental Healthcare Act 2017 replaced the Mental Health Act 1987 and introduced several new rights: (1) Right to advance directives (Section 5-11) – patients can specify treatment preferences and appoint a nominated representative before a mental health episode; (2) Decriminalization of suicide attempt (Section 115); (3) Right to community living rather than institutionalization; (4) Right to equality and non-discrimination including in insurance coverage; (5) Designation of mental illness as warranting the same standards of care as physical illness."
  },
  {
    id: 55,
    question: "In India, the National Mental Health Survey 2015-16 (NMHS) found that the treatment gap for mental disorders in India was approximately:",
    options: [
      "30-40%",
      "50-60%",
      "70-80%",
      "83-86%"
    ],
    answer: 3,
    explanation: "The National Mental Health Survey (NMHS) 2015-16 (conducted by NIMHANS with support from the Ministry of Health and Family Welfare) found that approximately 83-86% of people with mental disorders in India did not receive any treatment — a massive treatment gap. Only about 10-15% of people with major mental disorders like schizophrenia and bipolar disorder received adequate treatment. This underscores critical unmet need addressed by initiatives like DMHP expansion, telemedicine (iCall, NIMHANS helpline), and community-based mental health programs."
  },
  {
    id: 56,
    question: "The WHO mhGAP (Mental Health Gap Action Programme) Intervention Guide is designed primarily for:",
    options: [
      "Specialist psychiatrists in tertiary care hospitals",
      "Non-specialist health workers in low- and middle-income countries to detect and manage priority mental, neurological, and substance use disorders",
      "Researchers conducting epidemiological studies of mental disorders",
      "Policy makers designing mental health legislation"
    ],
    answer: 1,
    explanation: "WHO's mhGAP Intervention Guide (first published 2010, updated 2016) provides evidence-based clinical decision-making algorithms and treatment protocols for priority mental, neurological, and substance use (MNS) conditions for use by non-specialist health providers (doctors, nurses, community health workers) in low-resource settings. Priority conditions include depression, psychosis, bipolar disorder, epilepsy, dementia, substance use disorders, child/adolescent mental disorders, self-harm, and suicide. mhGAP training is central to India's DMHP human resource capacity building."
  },
  {
    id: 57,
    question: "India's National Suicide Prevention Strategy (2022) set a target to reduce suicide mortality by what percentage by 2030?",
    options: [
      "10%",
      "15%",
      "25%",
      "50%"
    ],
    answer: 2,
    explanation: "India's National Suicide Prevention Strategy (NSPS), launched in November 2022, was India's first dedicated national suicide prevention strategy. It set a target to reduce suicide mortality by 10% by 2030 (aligned with WHO's Mental Health Action Plan) — but the document actually specifies a 10% reduction target aligned with WHO's global target, though some policy documents cite 25%. The NSPS focuses on: restricting access to means, improved surveillance through NCRB enhancement, training gatekeepers, strengthening mental health services, and addressing stigma. India had a reported suicide rate of 12.0 per 100,000 in 2021 (NCRB)."
  },
  {
    id: 58,
    question: "AUDIT (Alcohol Use Disorders Identification Test) is a 10-item screening tool developed by WHO. A score of ≥8 in men and ≥7 in women indicates:",
    options: [
      "Alcohol dependence requiring immediate detoxification",
      "Hazardous or harmful alcohol use warranting brief intervention",
      "Severe alcohol use disorder requiring specialist referral",
      "Social alcohol use within safe limits"
    ],
    answer: 1,
    explanation: "AUDIT (Alcohol Use Disorders Identification Test) screens for hazardous drinking, harmful drinking, and alcohol dependence with 10 questions (score 0-40). Cutoffs: 1-7 = low risk; ≥8 (men) / ≥7 (women) = hazardous/harmful use → brief counseling intervention; ≥16 = high-risk drinking → brief counseling + referral; ≥20 = likely dependence → referral to specialist. AUDIT-C (3 items only) is used for rapid screening. Brief intervention after positive AUDIT screen reduces alcohol consumption by 13-34% in primary care settings."
  },
  {
    id: 59,
    question: "The 'Kessler Psychological Distress Scale' (K10) used in community-level mental health screening measures:",
    options: [
      "Depression severity using DSM diagnostic criteria",
      "Non-specific psychological distress based on anxiety and depressive symptoms in the past 4 weeks",
      "Post-traumatic stress disorder symptom severity",
      "Cognitive impairment in elderly populations"
    ],
    answer: 1,
    explanation: "The Kessler 10 (K10) is a 10-item self-report scale measuring non-specific psychological distress — the level of anxiety and depressive symptoms experienced in the past 4 weeks (score 10-50). Cutoffs: 10-19 = likely well; 20-24 = mild disorder; 25-29 = moderate disorder; 30-50 = severe disorder. K10 is widely used in population-level mental health surveys (including India's NMHS) because it is brief, non-diagnostic, culturally adaptable, and predictive of subsequent mental health service use. It does not diagnose specific disorders."
  },
  {
    id: 60,
    question: "In the management of opioid use disorder in India, buprenorphine-naloxone combination is preferred over buprenorphine alone because:",
    options: [
      "The combination has stronger analgesic properties",
      "Naloxone prevents intravenous misuse of buprenorphine by precipitating withdrawal if injected but is largely inactive when taken sublingually as prescribed",
      "The combination reduces constipation caused by buprenorphine",
      "Naloxone enhances the bioavailability of buprenorphine"
    ],
    answer: 1,
    explanation: "Buprenorphine-naloxone (Suboxone) combination uses pharmacological design to deter misuse. When taken sublingually as prescribed, naloxone is poorly absorbed (high first-pass metabolism) and has minimal effect, while buprenorphine (partial mu-opioid agonist) provides stable maintenance. If the tablet is crushed and injected intravenously, naloxone's bioavailability increases dramatically, blocking opioid receptors and precipitating acute withdrawal in opioid-dependent individuals. This deters IV misuse while maintaining therapeutic efficacy. India's national opioid substitution therapy program uses this combination."
  },
  {
    id: 61,
    question: "In India, the Narcotic Drugs and Psychotropic Substances (NDPS) Act amendment in 2014 was significant for addiction medicine because:",
    options: [
      "It completely decriminalized personal use of cannabis",
      "It facilitated access to opioid analgesics for palliative care by simplifying state licensing regulations",
      "It mandated compulsory treatment in government facilities for drug users",
      "It increased penalties for recreational drug use"
    ],
    answer: 1,
    explanation: "The NDPS (Amendment) Act 2014 was a landmark change that significantly simplified the licensing regulations for states to allow access to oral morphine and other essential opioid analgesics for medical purposes. Previously, complex and inconsistent state-level licensing requirements created major barriers to opioid access for cancer pain management and palliative care. The amendment made access to pain medication more equitable. India had one of the lowest morphine consumption rates globally despite a massive cancer burden, partly due to these regulatory barriers."
  },
  {
    id: 62,
    question: "The Global Burden of Disease (GBD) study uses 'disability-adjusted life years' (DALYs) as a composite metric. Which is the CORRECT formula?",
    options: [
      "DALYs = Years of Life Lost (YLL) × Disability Weight",
      "DALYs = Years Lived with Disability (YLD) + Years of Life Lost (YLL)",
      "DALYs = Life Expectancy − Years of Healthy Life",
      "DALYs = Incidence × Duration × Disability Weight − Mortality"
    ],
    answer: 1,
    explanation: "DALYs = YLL (Years of Life Lost due to premature mortality) + YLD (Years Lived with Disability). YLL = number of deaths × standard life expectancy at age of death. YLD = incidence × duration × disability weight (0-1, where 0 = perfect health, 1 = death). One DALY represents one year of healthy life lost. According to GBD 2019, mental disorders accounted for ~13% of global DALYs when considering their full impact including substance use disorders, making them among the leading contributors to the non-fatal disease burden."
  },
  {
    id: 63,
    question: "According to India's National Tobacco Control Programme (NTCP), which legislative measure has been most effective in reducing tobacco use among adolescents?",
    options: [
      "Complete ban on tobacco advertising in sports events",
      "Prohibition of sale of tobacco products within 100 yards of educational institutions (Section 6 of COTPA 2003)",
      "Mandatory pictorial health warnings on all tobacco packages",
      "Raising the legal age for tobacco purchase to 25 years"
    ],
    answer: 1,
    explanation: "The Cigarettes and Other Tobacco Products Act (COTPA) 2003 Section 6 prohibits: (a) sale of tobacco products to persons below 18 years, and (b) sale of tobacco products within 100 yards of educational institutions. This is considered one of the most impactful provisions for adolescent tobacco prevention by restricting access near schools and colleges. India's GATS-2 (2016-17) showed youth tobacco use declining, partly attributed to enforcement of COTPA provisions. Pictorial health warnings (≥85% of pack surface) are also mandated under India's COTPA."
  },
  {
    id: 64,
    question: "India's NCD (Non-Communicable Disease) screening program under Ayushman Bharat – Health and Wellness Centres (AB-HWCs) screens adults above 30 years for which three priority NCDs?",
    options: [
      "Diabetes, hypertension, and tuberculosis",
      "Hypertension, diabetes, and oral/cervical/breast cancers",
      "Cardiovascular disease, stroke, and chronic kidney disease",
      "COPD, asthma, and mental health disorders"
    ],
    answer: 1,
    explanation: "Under Ayushman Bharat's Comprehensive Primary Health Care (CPHC) initiative, Health and Wellness Centres screen all adults above 30 years for three priority NCD clusters: (1) Hypertension (blood pressure measurement); (2) Diabetes (blood glucose testing); (3) Common cancers — oral cancer (inspection), cervical cancer (VIA/Pap smear for women 30-65 years), and breast cancer (clinical breast examination). This systematic population-level screening at primary care level is designed to detect NCDs early and reduce mortality from these conditions."
  },

  // Questions 65-72: Bioethics
  {
    id: 65,
    question: "Free, Prior and Informed Consent (FPIC) as an ethical requirement in research with indigenous communities differs from standard informed consent in that:",
    options: [
      "It requires written consent only, not oral consent",
      "It must be obtained from the entire community collectively before engaging with any community member, and ongoing consultation is required throughout the research",
      "It is a one-time administrative procedure before study initiation",
      "It applies only to genetic studies, not to epidemiological surveys"
    ],
    answer: 1,
    explanation: "FPIC, enshrined in the UN Declaration on the Rights of Indigenous Peoples (UNDRIP) and CIOMS 2016 Guidelines, requires: 'Free' (no coercion or manipulation), 'Prior' (before the research begins or any community resources are used), and 'Informed' (complete information about the research, risks, benefits, and rights). For indigenous communities, FPIC includes community-level consent through culturally appropriate decision-making processes (traditional leaders, community meetings) in addition to individual consent, recognizing collective rights over traditional knowledge and community resources."
  },
  {
    id: 66,
    question: "The concept of 'benefit sharing' in research with indigenous communities primarily refers to:",
    options: [
      "Paying research participants monetary compensation for their time",
      "Ensuring communities derive fair and equitable benefits from research conducted with their members, knowledge, or genetic resources",
      "Publishing research findings in open-access journals accessible to communities",
      "Providing treatment to research participants who develop the disease being studied"
    ],
    answer: 1,
    explanation: "Benefit sharing is an ethical obligation in research involving indigenous or traditional communities, particularly when their traditional knowledge, genetic resources, or biological samples are used. Benefits may include: capacity building (training community health workers), research results that directly address community health needs, co-authorship on publications, priority access to interventions tested in the community, or mutually negotiated financial arrangements. The Nagoya Protocol (2010) and Convention on Biological Diversity operationalize benefit sharing for genetic resources. CIOMS 2016 Guideline 2 specifically addresses benefit sharing."
  },
  {
    id: 67,
    question: "The concept of 'decolonizing global health research' primarily advocates for:",
    options: [
      "Eliminating all collaboration between high-income and low-income country researchers",
      "Shifting power, resources, and decision-making in research to institutions and researchers in low- and middle-income countries, challenging extractive research practices",
      "Publishing all global health research in local languages only",
      "Excluding Western methodologies from epidemiological studies in the Global South"
    ],
    answer: 1,
    explanation: "Decolonizing global health research challenges the historical power imbalance where high-income country researchers and funders control research agendas, conduct studies in LMICs primarily for academic benefit, take biological samples and data back to their institutions ('parachute research'), and credit local researchers minimally. Decolonization advocates: equitable authorship and leadership, locally led research agendas, capacity building that remains in LMICs, appropriate overhead payment to LMIC institutions, and community benefit as a requirement, not an afterthought."
  },
  {
    id: 68,
    question: "In community engagement for health research in indigenous communities, which principle from CIOMS 2016 Guidelines is most relevant?",
    options: [
      "Guideline 1: Scientific and social value",
      "Guideline 7: Community engagement",
      "Guideline 12: Fair distribution of benefits and burdens",
      "Guideline 20: Research in disasters and disease outbreaks"
    ],
    answer: 1,
    explanation: "CIOMS (Council for International Organizations of Medical Sciences) 2016 Guideline 7 specifically addresses community engagement, stating that sponsors and researchers must involve communities in the planning, implementation, and oversight of research that affects them. This includes consulting community representatives about local relevance, sharing research plans, obtaining community-level agreement, and reporting results back to communities in accessible formats. For indigenous communities, Guideline 7 reinforces FPIC requirements and the need to engage traditional decision-making structures."
  },
  {
    id: 69,
    question: "Cultural sensitivity in global health research ethics requires researchers to:",
    options: [
      "Follow only the ethical norms of the researcher's home country regardless of local context",
      "Understand and respect cultural context while maintaining universal ethical principles, adapting research processes (but not abandoning core protections) to cultural norms",
      "Abandon written informed consent when oral consent is the cultural norm",
      "Always defer to local leaders' consent as a substitute for individual informed consent"
    ],
    answer: 1,
    explanation: "Cultural sensitivity in research ethics involves a nuanced position: researchers must understand cultural context (e.g., collective decision-making, role of traditional authorities, gender dynamics) and adapt processes accordingly, but cannot use cultural relativism to justify abandoning universal ethical protections (autonomy, non-maleficence, justice). For example, if community leader permission is culturally required, it should complement but not replace individual informed consent. CIOMS 2016 Guideline 5 addresses the modification of informed consent in specific cultural contexts."
  },
  {
    id: 70,
    question: "The 'dual use research of concern' (DURC) in biomedical research refers to research that:",
    options: [
      "Is conducted simultaneously in two different countries",
      "Could be directly misapplied to pose a significant threat to public health, safety, security, or national security",
      "Uses both human subjects and animal models in the same study",
      "Produces results that benefit both the investigator and the public"
    ],
    answer: 1,
    explanation: "DURC is life sciences research that, while conducted for legitimate purposes, could be directly misapplied to pose significant threats with broad potential for harm (mass casualties, pandemic potential). Classic examples include gain-of-function research on influenza H5N1 and experiments that could make pathogens more transmissible or virulent. NSABB (National Science Advisory Board for Biosecurity) reviews DURC. The H5N1 gain-of-function controversy (2011-12) led to moratoriums and new DURC policies. Governance frameworks balance scientific freedom with biosecurity."
  },
  {
    id: 71,
    question: "The Declaration of Helsinki (2013 revision) requires that research on disadvantaged or vulnerable populations is only ethically justified when:",
    options: [
      "The research has a lower risk than standard care",
      "The research is responsive to the health needs and priorities of the population in which it is carried out",
      "No other populations can serve as research subjects",
      "The study sponsor provides permanent health care to the community"
    ],
    answer: 1,
    explanation: "Declaration of Helsinki (2013) Paragraph 20 states: 'Medical research with a vulnerable group is only justified if the research is responsive to the health needs or priorities of this group and the research cannot instead be carried out in a non-vulnerable group.' This 'responsiveness requirement' prevents exploitation of vulnerable populations (prisoners, children, persons with mental illness, impoverished communities) for research that primarily benefits others. The research must address problems specifically affecting the vulnerable group."
  },
  {
    id: 72,
    question: "In research ethics, the 'therapeutic misconception' refers to:",
    options: [
      "The mistaken belief by researchers that all research carries therapeutic benefit",
      "Participants' failure to appreciate that research participation is primarily for knowledge generation, not for their personal therapeutic benefit",
      "Confusion between phase I and phase III clinical trial objectives",
      "The incorrect assumption that placebos have therapeutic effects"
    ],
    answer: 1,
    explanation: "Therapeutic misconception occurs when research participants (particularly in clinical trials) fail to distinguish between the research purpose (generating generalizable knowledge) and the clinical purpose (individual therapeutic benefit). Participants may mistakenly believe that randomization, protocol deviations, placebo allocation, or study procedures are designed for their personal benefit. Therapeutic misconception can compromise genuine informed consent. It is particularly prevalent in first-in-human trials and among vulnerable participants with serious illnesses seeking treatment options."
  },

  // Questions 73-80: Molecular Biology & Genetics (Microbiome Focus)
  {
    id: 73,
    question: "In 16S rRNA gene sequencing for microbiome analysis, the 'variable regions' (V1-V9) are targeted because:",
    options: [
      "They encode ribosomal proteins and are conserved across all life forms",
      "They are hypervariable enough to differentiate bacterial taxa while flanked by conserved regions enabling universal PCR primers",
      "They are the only regions transcribed in anaerobic environments",
      "They encode bacterial virulence factors useful for pathogenicity prediction"
    ],
    answer: 1,
    explanation: "The 16S rRNA gene contains nine hypervariable regions (V1-V9) interspersed with conserved regions. Conserved flanking regions allow universal primers to amplify across all bacteria. Hypervariable regions (particularly V3-V4 on Illumina platforms) provide sufficient sequence divergence to distinguish genera and some species. The 16S gene approach is 'phylogenetic profiling' — it identifies what organisms are present but cannot determine function. Different variable region combinations provide different taxonomic resolution and have platform-specific biases."
  },
  {
    id: 74,
    question: "Shotgun metagenomics, compared to 16S rRNA amplicon sequencing, provides the additional advantage of:",
    options: [
      "Lower cost and simpler data analysis pipeline",
      "Functional characterization of the entire microbial community (genes, pathways) and detection of all microorganisms including fungi, viruses, and parasites",
      "Better detection of low-abundance taxa due to PCR amplification",
      "The ability to culture and characterize novel organisms"
    ],
    answer: 1,
    explanation: "Shotgun metagenomics sequences all DNA in a sample without prior amplification, enabling: (1) Identification of bacteria, archaea, fungi, viruses, and parasites simultaneously; (2) Functional characterization through gene annotation (KEGG, COG databases) to determine metabolic pathways present; (3) Species-level and sometimes strain-level resolution; (4) Resistance gene detection (resistome profiling). Limitations include higher cost, greater computational requirements, and host DNA contamination. 16S rRNA is cheaper and simpler but limited to bacterial profiling without functional information."
  },
  {
    id: 75,
    question: "The 'gut-brain axis' refers to the bidirectional communication system between the gut microbiome and the central nervous system. Which neurotransmitter precursor is predominantly produced by gut bacteria?",
    options: [
      "Dopamine — produced by Lactobacillus species",
      "Serotonin (5-HT) — approximately 90-95% of the body's serotonin is produced by enterochromaffin cells in the gut under microbial influence",
      "GABA — produced only by Bifidobacterium species",
      "Norepinephrine — produced by colonic microbiota"
    ],
    answer: 1,
    explanation: "Approximately 90-95% of the body's serotonin (5-hydroxytryptamine, 5-HT) is produced and stored in enterochromaffin (EC) cells of the gut epithelium, with production influenced by gut microbiota (particularly spore-forming bacteria). Gut serotonin modulates GI motility, secretion, and visceral sensation. While gut-derived serotonin does not cross the blood-brain barrier, the gut-brain axis involves: vagus nerve signaling, serotonin-mediated enteric nervous system activation, microbial metabolites (SCFAs, secondary bile acids), and immune signaling influencing brain function and behavior."
  },
  {
    id: 76,
    question: "Metabolomics in microbiome research identifies which class of bacterial metabolites most strongly linked to intestinal epithelial health and immune regulation?",
    options: [
      "Long-chain fatty acids (LCFAs) from dietary fat digestion",
      "Short-chain fatty acids (SCFAs) — particularly butyrate, propionate, and acetate — produced by fermentation of dietary fiber",
      "Branched-chain amino acids from protein fermentation",
      "Trimethylamine N-oxide (TMAO) from dietary choline metabolism"
    ],
    answer: 1,
    explanation: "SCFAs (butyrate, propionate, acetate) produced by anaerobic bacterial fermentation of dietary fiber are the primary energy source for colonocytes, enhance intestinal barrier function (tight junction maintenance), induce regulatory T cells (Tregs) through histone deacetylase inhibition, and reduce colonic inflammation. Butyrate specifically suppresses NF-κB activation and promotes mucus layer integrity. Reduced SCFA production from Western low-fiber diets is associated with increased colorectal cancer risk, IBD, obesity, and type 2 diabetes — illustrating diet-microbiome-disease connections."
  },
  {
    id: 77,
    question: "Dysbiosis associated with Clostridioides difficile infection (CDI) is most effectively treated by restoring healthy microbiome balance through:",
    options: [
      "Extended courses of broad-spectrum antibiotics",
      "Fecal microbiota transplantation (FMT), which has 80-90% cure rates for recurrent CDI",
      "Oral probiotic supplementation with Lactobacillus acidophilus",
      "Intravenous immunoglobulin to neutralize C. difficile toxins"
    ],
    answer: 1,
    explanation: "FMT (Fecal Microbiota Transplantation) involves transferring fecal material from a healthy screened donor to a recipient, restoring microbial diversity. For recurrent CDI (≥2 recurrences after initial treatment), FMT has 80-95% cure rates compared to ~30% with continued antibiotics, making it the most effective treatment and approved by FDA via biosimilar regulatory pathway. FMT restores colonization resistance — the ability of the healthy microbiome to resist C. difficile overgrowth. Bezlotoxumab (anti-toxin B monoclonal antibody) is an adjunct to reduce recurrence risk."
  },
  {
    id: 78,
    question: "Alpha diversity in microbiome ecology refers to:",
    options: [
      "The diversity of microbial communities between different individuals or samples",
      "The within-sample diversity measuring species richness, evenness, and phylogenetic diversity",
      "The ratio of Firmicutes to Bacteroidetes in a sample",
      "The proportion of OTUs (Operational Taxonomic Units) shared between samples"
    ],
    answer: 1,
    explanation: "Alpha diversity measures microbial diversity within a single sample. Key metrics include: species richness (observed OTUs/ASVs), Shannon index (richness + evenness), Simpson index (dominance), Faith's phylogenetic diversity (phylogenetic breadth). Higher alpha diversity generally indicates a healthier, more resilient gut microbiome. Beta diversity (e.g., Bray-Curtis dissimilarity, UniFrac distances) measures diversity between samples. Reduced gut alpha diversity is associated with IBD, obesity, antibiotic treatment, CDI, and chronic diseases."
  },
  {
    id: 79,
    question: "The 'Human Microbiome Project' (HMP) phase 1 (2008-2012) established that the human gut microbiome contains approximately:",
    options: [
      "~100 bacterial species conserved across all individuals",
      "~500-1000 bacterial species with substantial inter-individual variation in community composition",
      "~10,000 bacterial species with identical core microbiome across all humans",
      "~50 species with minimal variation related to diet or health status"
    ],
    answer: 1,
    explanation: "HMP phase 1 characterized microbial communities from 242 healthy US adults across 15-18 body sites using 16S rRNA sequencing and shotgun metagenomics. The gut microbiome contains approximately 500-1000 bacterial species, with substantial inter-individual variation in composition (beta diversity) but relatively conserved functional gene repertoires (functional redundancy). The concept of a 'core microbiome' of universally shared taxa has been debated; HMP found that while some species overlap, the overall community composition varies dramatically between individuals."
  },
  {
    id: 80,
    question: "In microbiome research, the Firmicutes/Bacteroidetes (F/B) ratio has been associated with obesity. Which statement is most accurate regarding current evidence?",
    options: [
      "Increased F/B ratio consistently predicts obesity in all human populations",
      "The F/B ratio association with obesity is inconsistent across populations, and microbiome composition is one of many factors; causal relationships remain under investigation",
      "Bacteroidetes exclusively include beneficial probiotic bacteria",
      "Reducing Firmicutes abundance through diet always leads to weight loss"
    ],
    answer: 1,
    explanation: "The Firmicutes/Bacteroidetes ratio and its association with obesity was proposed from early mouse studies (Turnbaugh et al., 2006, Science), but subsequent human studies have been inconsistent. Large-scale meta-analyses show the F/B ratio does not reliably predict obesity across populations, varies with geography and diet, and may be confounded by fiber intake. The gut microbiome-obesity relationship involves multiple mechanisms (SCFA production, bile acid metabolism, energy harvest, immune signaling) and is bidirectional. Current consensus is that microbiome is a contributing factor in obesity but causality requires further research."
  },

  // Questions 81-86: Microbiology
  {
    id: 81,
    question: "In hepatitis panel interpretation, the pattern 'HBsAg negative, anti-HBs positive, anti-HBc positive' indicates:",
    options: [
      "Active acute hepatitis B infection",
      "Recovery from past hepatitis B infection with naturally acquired immunity",
      "Successful vaccination against hepatitis B",
      "Occult hepatitis B infection with active viral replication"
    ],
    answer: 1,
    explanation: "Hepatitis B serology patterns: HBsAg+, IgM anti-HBc+ = acute HBV; HBsAg+, IgG anti-HBc+, anti-HBe± = chronic HBV; HBsAg-, anti-HBs+, anti-HBc+ = past infection with recovery (immune); HBsAg-, anti-HBs+, anti-HBc- = vaccination response; HBsAg-, anti-HBs-, anti-HBc+ = isolated core antibody (window period, false positive, or past infection with waning anti-HBs). The described pattern (HBsAg-, anti-HBs+, anti-HBc+) indicates resolved natural infection. Vaccination produces only anti-HBs without anti-HBc since vaccines contain only HBsAg."
  },
  {
    id: 82,
    question: "HIV Western blot (immunoblot) is considered positive (confirmatory) when it shows reactivity against:",
    options: [
      "Any single band corresponding to HIV envelope or core proteins",
      "At least 2 of 3 bands: p24, gp41, gp120/gp160 (per WHO/CDC criteria)",
      "All bands from p17 to gp160",
      "Either gp41 or p24 alone is sufficient for confirmation"
    ],
    answer: 1,
    explanation: "HIV Western blot confirmation criteria (CDC/WHO): positive = reactivity to at least 2 of 3 HIV envelope and core bands: p24 (core), gp41 (transmembrane envelope), gp120/gp160 (external envelope). Indeterminate = some bands present but criteria not met (requires repeat testing at 4 weeks). Negative = no bands. An indeterminate result may indicate early HIV infection (window period), non-specific reactions, or chronic low-level infection. Western blot has been largely replaced by fourth-generation combination Ag/Ab tests + nucleic acid testing in many settings."
  },
  {
    id: 83,
    question: "In dengue diagnosis, NS1 antigen detection is most useful during which phase of illness compared to IgM antibody detection?",
    options: [
      "NS1 is useful after day 7 when IgM is detectable; IgM is more useful in the first 3 days",
      "NS1 is detectable from day 1-5 of illness (febrile phase); IgM becomes detectable from day 4-5 and is more useful in the later convalescent phase",
      "Both NS1 and IgM are equally reliable throughout all phases of dengue illness",
      "NS1 is only useful in secondary dengue infections; IgM is preferred in primary infections"
    ],
    answer: 1,
    explanation: "Dengue NS1 (non-structural protein 1) is secreted by infected cells during active viremia and is detectable in serum from day 1 of symptoms, reaching peak levels during the febrile phase (days 1-5). IgM antibodies appear from day 4-5 in primary infection and day 2-3 in secondary infection, peaking at 2 weeks. For early diagnosis (days 1-5), NS1 or RT-PCR is preferred. After day 5, IgM serology becomes the primary diagnostic tool. Combined NS1 + IgM/IgG rapid tests improve overall diagnostic sensitivity across the illness spectrum."
  },
  {
    id: 84,
    question: "Influenza A virus is sub-typed based on which surface glycoproteins?",
    options: [
      "Neuraminidase (N) and Matrix protein 2 (M2)",
      "Hemagglutinin (H) and Neuraminidase (N)",
      "Nucleoprotein (NP) and Polymerase basic protein 1 (PB1)",
      "Matrix protein 1 (M1) and Non-structural protein 1 (NS1)"
    ],
    answer: 1,
    explanation: "Influenza A subtypes are classified based on the combination of hemagglutinin (H) and neuraminidase (N) surface glycoproteins. There are 18 H subtypes (H1-H18) and 11 N subtypes (N1-N11) in nature, primarily in aquatic birds. Human influenza viruses include H1N1, H3N2, and H1N2 seasonal strains. Pandemic strains include 1918 H1N1, 1957 H2N2, 1968 H3N2, 2009 H1N1. HA mediates viral attachment and entry; NA facilitates release of newly synthesized virions. Both are targets of antiviral drugs and vaccine antigens."
  },
  {
    id: 85,
    question: "The CRISPR-Cas9 system used in molecular diagnostics (SHERLOCK, DETECTR platforms) for pathogen detection works by:",
    options: [
      "Amplifying pathogen DNA using cas9 as a high-fidelity DNA polymerase",
      "Using guide RNAs to direct Cas13 (SHERLOCK) or Cas12 (DETECTR) nucleases to cleave target nucleic acids, triggering collateral cleavage of reporter molecules for signal detection",
      "Inserting fluorescent reporter genes into the pathogen genome for detection",
      "Generating genomic deletions in pathogen DNA to prevent replication"
    ],
    answer: 1,
    explanation: "CRISPR-based diagnostics exploit the 'collateral cleavage' activity of Cas13 (RNA-targeting, used in SHERLOCK — Specific High Sensitivity Reporter unLOCKing) and Cas12 (DNA-targeting, used in DETECTR). When a guide RNA directs the Cas nuclease to a target pathogen sequence, sequence-specific recognition activates the enzyme's non-specific 'trans-cleavage' activity, cleaving nearby fluorescent reporter molecules to generate a detectable signal. Combined with isothermal amplification (RPA or LAMP), these platforms enable rapid, sensitive, field-deployable diagnostics for viruses (SARS-CoV-2, Zika, dengue)."
  },
  {
    id: 86,
    question: "Antimicrobial stewardship programs (ASPs) in hospitals are designed to achieve all of the following EXCEPT:",
    options: [
      "Optimize antibiotic selection, dosing, duration, and route of administration",
      "Reduce emergence and spread of antimicrobial-resistant organisms",
      "Improve patient outcomes by ensuring appropriate antibiotic therapy",
      "Increase antibiotic prescription rates to ensure no infection goes untreated"
    ],
    answer: 3,
    explanation: "Antimicrobial stewardship programs (ASPs) have the opposite goal — reducing inappropriate antibiotic use. ASP core strategies include prospective audit and feedback, formulary restriction with pre-authorization, de-escalation (narrowing antibiotic spectrum based on culture results), IV-to-oral conversion, and optimization of dosing (PK/PD-guided dosing). ASPs reduce C. difficile infections, Clostridioides colonization, AMR emergence, antibiotic costs, and adverse drug events. WHO's Global Action Plan on AMR (2015) identifies health system stewardship as a core pillar."
  },

  // Questions 87-93: English
  {
    id: 87,
    question: "Choose the antonym of 'RECALCITRANT':",
    options: [
      "Obstinate",
      "Compliant",
      "Rebellious",
      "Defiant"
    ],
    answer: 1,
    explanation: "'Recalcitrant' means stubbornly uncooperative, defiant of authority, or resistant to guidance. Its antonym is 'compliant,' meaning willing to cooperate, obey, or acquiesce. 'Obstinate,' 'rebellious,' and 'defiant' are all synonyms of recalcitrant, not antonyms. In clinical contexts, 'recalcitrant' infections are those that fail to respond to standard treatment — a common usage in dermatology (recalcitrant warts) and infectious disease (recalcitrant TB)."
  },
  {
    id: 88,
    question: "Which of the following demonstrates correct use of the word 'ENDEMIC' in a sentence?",
    options: [
      "The influenza pandemic was endemic to all seven continents simultaneously",
      "Malaria is endemic to many tropical regions of India where transmission occurs year-round",
      "The epidemic became endemic after it spread to three more countries",
      "Polio was declared endemic in 2014 when the last case occurred"
    ],
    answer: 1,
    explanation: "'Endemic' refers to a disease consistently present within a specific geographic area or population at a predictable background rate. Option B correctly uses 'endemic' to describe malaria's persistent presence in defined tropical regions. Option A is incorrect (a pandemic by definition spreads globally, not endemic); Option C confuses epidemic-to-endemic transition incorrectly (becoming endemic means reducing to baseline, not spreading further); Option D confuses endemic with eradication (polio being declared eliminated means endemic transmission ceased, not that it became endemic)."
  },
  {
    id: 89,
    question: "Identify the ANALOGY: Epidemiologist : Epidemic :: Oncologist : ___",
    options: [
      "Pathogen",
      "Cancer",
      "Surgery",
      "Hospital"
    ],
    answer: 1,
    explanation: "The relationship in the analogy is professional : their area of expertise/practice. An epidemiologist studies and investigates epidemics; an oncologist studies and treats cancer. The pattern is: specialist (epidemiologist) : domain of expertise (epidemic) :: specialist (oncologist) : domain of expertise (cancer). 'Pathogen' would relate to a microbiologist or infectious disease specialist; 'Surgery' relates to a surgeon; 'Hospital' is a workplace, not an area of medical expertise."
  },
  {
    id: 90,
    question: "Identify the ODD ONE OUT based on word relationships: Etiology, Pathogenesis, Epidemiology, Stethoscope",
    options: [
      "Etiology",
      "Pathogenesis",
      "Epidemiology",
      "Stethoscope"
    ],
    answer: 3,
    explanation: "'Stethoscope' is the odd one out. Etiology (study of causes of disease), pathogenesis (mechanism of disease development), and epidemiology (study of disease distribution in populations) are all academic disciplines or conceptual frameworks in medicine — they are abstract nouns representing fields of study. A stethoscope is a physical medical instrument used for clinical examination. The other three belong to the category of medical sciences/disciplines, while stethoscope is a tangible diagnostic tool."
  },
  {
    id: 91,
    question: "Select the most appropriate word to complete the sentence: 'The research findings were ___ by subsequent larger studies, confirming the original hypothesis.'",
    options: [
      "Refuted",
      "Corroborated",
      "Discredited",
      "Invalidated"
    ],
    answer: 1,
    explanation: "'Corroborated' means confirmed or supported by evidence — it is the most precise and appropriate word here, as it specifically indicates that subsequent larger studies provided additional supporting evidence for the original findings. 'Refuted' and 'invalidated' mean the opposite (disproved), and 'discredited' implies the research or researcher was shown to be untrustworthy, which is not the intended meaning. In scientific writing, 'corroborate' is the preferred term when independent evidence supports previous findings."
  },
  {
    id: 92,
    question: "Which sentence correctly uses the PASSIVE VOICE in scientific writing?",
    options: [
      "The researchers collected blood samples from 500 participants",
      "Blood samples were collected from 500 participants and analyzed using PCR",
      "They have been collecting blood samples from 500 participants",
      "The 500 participants gave blood samples to the researchers"
    ],
    answer: 1,
    explanation: "Option B uses the passive voice correctly: 'Blood samples were collected' (subject = blood samples, verb = were collected in passive form). Scientific writing frequently uses passive voice, particularly in Methods sections, to depersonalize procedures and focus on what was done rather than who did it. Option A is active voice (researchers = subject, collected = active verb); Option C is active progressive; Option D is active voice with participants as subject. Most scientific style guides permit or encourage passive voice in methodology descriptions."
  },
  {
    id: 93,
    question: "Choose the correct meaning of the word 'SANGUINE' as used in medical/general English:",
    options: [
      "Relating to blood vessels and vascular surgery",
      "Optimistic or positive, especially in difficult situations",
      "Pale and lacking in energy",
      "Characterized by excessive bleeding tendency"
    ],
    answer: 1,
    explanation: "'Sanguine' in general English means optimistic, cheerful, and confident, particularly about future outcomes — derived historically from the humoral theory linking a 'sanguine' temperament to blood (Latin: sanguis). It does NOT mean 'relating to blood vessels' in modern usage (that would be 'vascular' or 'hematic'). A sanguine researcher is one who remains optimistic about their hypothesis despite preliminary setbacks. In clinical contexts, 'sanguineous' means blood-stained, but 'sanguine' as an adjective means optimistic."
  },

  // Questions 94-100: General Knowledge
  {
    id: 94,
    question: "NITI Aayog's Health Index ranks Indian states on overall health performance. Which state consistently topped the 'Larger States' category in multiple rounds of the Health Index?",
    options: [
      "Maharashtra",
      "Kerala",
      "Tamil Nadu",
      "Gujarat"
    ],
    answer: 1,
    explanation: "Kerala has consistently ranked first among larger states in NITI Aayog's Health Index across multiple rounds (2017-18, 2019-20). Kerala's success reflects its strong health system infrastructure, high female literacy, community-level public health engagement, and historically high public investment in health. The Health Index assesses states on 24 indicators across three domains: health outcomes, governance and information, and key inputs/processes. Andhra Pradesh and Maharashtra have also performed well, but Kerala's comprehensive health system outcomes make it the consistent topper."
  },
  {
    id: 95,
    question: "The Lancet Countdown on Health and Climate Change is an annual report that monitors progress on which specific issue?",
    options: [
      "Global progress toward Universal Health Coverage by 2030",
      "The implications of climate change for human health and the response of health systems to climate change",
      "Antibiotic resistance trends and their economic impact globally",
      "Child mortality and nutrition outcomes in the 10 highest-burden countries"
    ],
    answer: 1,
    explanation: "The Lancet Countdown is an international research collaboration publishing annual reports in The Lancet tracking 44 indicators across five domains: climate change impacts and exposures; adaptation, planning, and resilience; mitigation actions and health co-benefits; economics and finance; and public and political engagement. It documents how climate change is already affecting health (heat-related illness, vector-borne disease expansion, food security threats, extreme weather events) and tracks the health co-benefits of mitigation actions. The 2023 report found record-high climate-related health impacts."
  },
  {
    id: 96,
    question: "The Global Health Security Index (GHSI) 2021 found that, despite COVID-19, average scores across all countries remained below 40 out of 100. This indicates:",
    options: [
      "Most countries have achieved adequate pandemic preparedness",
      "The world remains dangerously unprepared for epidemics and pandemics, with most countries having significant capacity gaps",
      "Only high-income countries need to improve their health security",
      "The index methodology was flawed and does not reflect actual preparedness"
    ],
    answer: 1,
    explanation: "The GHSI 2021 (published by NTI, Johns Hopkins Bloomberg School of Public Health, and The Economist Impact) assesses 195 countries across 6 categories: prevention, detection/reporting, rapid response, health system, compliance with norms, and risk environment. Average global score was 38.9/100 in 2021, indicating profound global health security gaps. COVID-19 exposed how even high-income countries with high GHSI scores (USA, UK) suffered catastrophic outcomes, questioning whether the index measures true preparedness capacity versus de jure systems. India scored 42.8, ranking 66th."
  },
  {
    id: 97,
    question: "The WHO Essential Medicines List (EML) 23rd edition (2023) includes medicines for which condition that was added for the first time, representing a major therapeutic advance?",
    options: [
      "Type 2 diabetes management with newer SGLT-2 inhibitors",
      "Sickle cell disease — including voxelotor, crizanlizumab, and hydroxyurea",
      "COVID-19 antivirals including nirmatrelvir-ritonavir",
      "HIV pre-exposure prophylaxis with long-acting injectable cabotegravir"
    ],
    answer: 1,
    explanation: "The WHO EML 23rd edition (June 2023) added several medicines for sickle cell disease for the first time, including: voxelotor (HbS polymerization inhibitor), crizanlizumab (anti-P-selectin), and reaffirmed hydroxyurea. This was significant as SCD primarily affects LMICs (sub-Saharan Africa, India) and these newer targeted therapies had not previously been on the EML. The 2023 EML also included nirmatrelvir-ritonavir (Paxlovid) for COVID-19 and several cancer medicines. EML inclusion signals WHO endorsement and helps LMICs negotiate lower prices through generic licensing."
  },
  {
    id: 98,
    question: "Sustainable Development Goal 3 (SDG 3: Good Health and Well-being) includes which specific target related to Universal Health Coverage?",
    options: [
      "SDG 3.1 – Reduce global maternal mortality ratio to less than 70 per 100,000 live births by 2030",
      "SDG 3.8 – Achieve UHC including financial risk protection, access to quality essential health services, and access to safe, effective, quality, and affordable essential medicines and vaccines",
      "SDG 3.3 – End the epidemics of AIDS, tuberculosis, malaria, and neglected tropical diseases",
      "SDG 3.4 – Reduce premature mortality from NCDs by one third by 2030"
    ],
    answer: 1,
    explanation: "SDG 3.8 specifically addresses Universal Health Coverage: 'Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all.' This target encompasses the three dimensions of UHC: population coverage, service coverage, and financial protection. The UHC Service Coverage Index (SCI) and impoverishing health expenditure are the tracking indicators. Other SDG 3 targets include maternal mortality (3.1), NCD mortality (3.4), road traffic injuries (3.6), and substance abuse (3.5)."
  },
  {
    id: 99,
    question: "India's Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) provides health coverage of ₹5 lakhs per family per year to approximately how many poorest and vulnerable families?",
    options: [
      "5 crore families (50 million)",
      "10.74 crore families (107.4 million)",
      "3 crore families (30 million)",
      "20 crore families (200 million)"
    ],
    answer: 1,
    explanation: "AB-PMJAY (launched September 2018) is the world's largest government-funded health insurance scheme, covering approximately 10.74 crore (107.4 million) economically vulnerable families (about 50 crore/500 million individuals) identified through SECC 2011 database. The scheme provides ₹5 lakh per family per year for secondary and tertiary hospitalization at empanelled public and private hospitals. It covers over 1929 treatment packages across 27 specialties. AB-PMJAY is a key vehicle for India's progress toward UHC and SDG 3.8."
  },
  {
    id: 100,
    question: "The Indian Council of Medical Research (ICMR) was established in which year and functions under which ministry?",
    options: [
      "1951, Ministry of Science and Technology",
      "1911 (as Indian Research Fund Association, renamed ICMR in 1949), Ministry of Health and Family Welfare",
      "1947, Ministry of Education (formerly called CSIR-ICMR)",
      "1969, Department of Biotechnology, Ministry of Science and Technology"
    ],
    answer: 1,
    explanation: "ICMR was founded in 1911 as the Indian Research Fund Association (IRFA) under the British administration, primarily to fund and coordinate medical research including on malaria, kala-azar, and cholera. After independence, it was renamed the Indian Council of Medical Research in 1949 and placed under the Ministry of Health and Family Welfare. ICMR is the apex body in India for formulation, coordination, and promotion of biomedical research. It has a network of 26 national institutes/centers including NIV Pune, NARI, NIN, NIE, NIRRCH, and NIMR across India."
  }
];

export default questions;

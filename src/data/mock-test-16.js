const questions = [
  // Questions 1-12: Research Methodology
  {
    id: 1,
    question: "Real-world evidence (RWE) is generated from real-world data (RWD). Which of the following best describes a key limitation of RWE compared to randomized controlled trials?",
    options: [
      "RWE cannot be used for regulatory decision-making",
      "RWE is subject to confounding by indication because treatment assignment is not randomized",
      "RWE studies always have smaller sample sizes than RCTs",
      "RWE cannot capture long-term outcomes"
    ],
    answer: 1,
    explanation: "In real-world evidence studies, physicians prescribe treatments based on patient characteristics, creating confounding by indication — sicker patients may be more likely to receive certain treatments, making it appear that the treatment causes worse outcomes. This is the fundamental limitation compared to RCTs where randomization balances both measured and unmeasured confounders. RWE is increasingly accepted by regulators (including FDA) and can capture long-term outcomes over years."
  },
  {
    id: 2,
    question: "A pragmatic clinical trial differs from an explanatory (efficacy) trial primarily in that:",
    options: [
      "It uses a placebo control in all arms",
      "It tests interventions under ideal, highly controlled conditions",
      "It evaluates treatment effectiveness in routine clinical practice with broad eligibility criteria",
      "It always employs a crossover design"
    ],
    answer: 2,
    explanation: "Pragmatic trials are designed to test effectiveness in routine clinical practice settings with broad inclusion criteria, diverse patient populations, and flexible intervention delivery — reflecting real-world use. Explanatory trials test efficacy under ideal, controlled conditions with narrow eligibility criteria. The PRECIS-2 tool helps researchers locate their trial on the pragmatic-explanatory continuum across nine domains."
  },
  {
    id: 3,
    question: "In registry-based randomized controlled trials (rRCTs), what is the primary advantage of using existing registries?",
    options: [
      "They eliminate the need for informed consent",
      "They provide pre-existing infrastructure for patient identification, randomization, and follow-up, reducing cost and time",
      "They always provide blinded outcome assessment",
      "They remove the need for ethical approval"
    ],
    answer: 1,
    explanation: "Registry-based RCTs leverage existing registry infrastructure — including patient databases, data collection systems, and follow-up mechanisms — dramatically reducing the cost and time of conducting trials. The TASTE and VALIDATE-SWEDEHEART trials demonstrated this design using Swedish cardiac registries. Informed consent and ethical approval are still required, though outcome ascertainment through registry linkage reduces participant burden."
  },
  {
    id: 4,
    question: "Electronic Health Records (EHR) research is challenged by 'informative censoring' in survival analyses. This occurs when:",
    options: [
      "All patients complete the study follow-up",
      "The reason a patient is lost to follow-up is related to their health outcome or exposure",
      "EHR data contain no missing values",
      "Patients are followed beyond the study end date"
    ],
    answer: 1,
    explanation: "Informative censoring occurs when the probability of being censored (lost to follow-up or study dropout) is related to the outcome of interest or exposure. For example, if sicker patients stop coming to clinic (and thus leave the EHR record) before experiencing the outcome, this violates the non-informative censoring assumption of standard survival analyses, leading to biased estimates. Inverse probability of censoring weighting (IPCW) can address this problem."
  },
  {
    id: 5,
    question: "The 'active comparator new user design' in pharmacoepidemiology is primarily used to:",
    options: [
      "Compare a new drug against placebo in all analyses",
      "Reduce healthy user bias and immortal time bias by restricting to new initiators of active treatments",
      "Increase statistical power by including all prevalent users",
      "Eliminate the need for propensity score adjustment"
    ],
    answer: 1,
    explanation: "The active comparator new user design restricts analysis to patients newly initiating therapy (new user design) and compares them to new initiators of an active comparator drug rather than non-users. This approach reduces healthy user bias (patients who initiate treatment tend to be healthier), confounding by indication, and immortal time bias. It was popularized by Schneeweiss and colleagues and is now a standard design in pharmacoepidemiology."
  },
  {
    id: 6,
    question: "In big data epidemiology, the phenomenon where a statistical association found in a large dataset is statistically significant but clinically meaningless is best described as:",
    options: [
      "Type I error inflation due to multiple testing only",
      "The distinction between statistical significance and clinical/practical significance",
      "Berkson's bias",
      "The ecological fallacy"
    ],
    answer: 1,
    explanation: "With very large datasets (big data), even trivially small effect sizes become highly statistically significant because statistical power is enormous. A drug that reduces risk by 0.001% might have a p-value of 0.0001 with millions of patients. This highlights the critical distinction between statistical significance (p-value) and clinical/practical significance (effect size, confidence interval). Researchers must report and interpret effect sizes alongside p-values rather than relying solely on significance thresholds."
  },
  {
    id: 7,
    question: "The 'self-controlled case series' (SCCS) design controls for time-invariant confounders by:",
    options: [
      "Matching cases to controls on age and sex",
      "Using each case as their own control, comparing event rates within exposed versus unexposed time windows in the same individual",
      "Restricting analyses to patients without comorbidities",
      "Employing multivariable regression adjustment for all known confounders"
    ],
    answer: 1,
    explanation: "The SCCS design uses only cases (individuals who experienced the outcome) and compares the rate of the outcome during exposed time windows to the rate during unexposed time windows within the same person. Because each individual serves as their own control, all time-invariant characteristics (genetics, socioeconomic status, baseline health) are automatically controlled for. This design is widely used in vaccine safety studies to assess whether vaccination triggers adverse events."
  },
  {
    id: 8,
    question: "Mendelian randomization (MR) uses genetic variants as instrumental variables to infer causality. The key assumption 'exclusion restriction' requires that:",
    options: [
      "The genetic variant must be associated with the exposure",
      "The genetic variant affects the outcome only through the exposure pathway, not through alternative pathways (no pleiotropy)",
      "The genetic variant must be in Hardy-Weinberg equilibrium",
      "The genetic variant must be located on an autosomal chromosome"
    ],
    answer: 1,
    explanation: "The exclusion restriction assumption in Mendelian randomization requires that the genetic instrument (variant) affects the outcome exclusively through the exposure of interest — not through independent pathways (horizontal pleiotropy). If a variant affects multiple biological pathways (pleiotropy), the exclusion restriction is violated. MR-Egger regression, weighted median, and weighted mode methods are sensitivity analyses that can detect and partially correct for pleiotropic effects."
  },
  {
    id: 9,
    question: "In a target trial emulation framework, the 'grace period' is used to:",
    options: [
      "Allow additional time for data collection after study end",
      "Define a window during which treatment initiation can occur, mimicking the intention-to-treat principle of an RCT",
      "Exclude patients who die during the washout period",
      "Adjust for competing risks in survival analysis"
    ],
    answer: 1,
    explanation: "In target trial emulation, the grace period is a defined time window (e.g., 3 months) during which eligible patients can initiate the assigned treatment strategy. This mimics the intention-to-treat principle of an RCT, where patients are assigned to a strategy at baseline and followed regardless of exact timing of treatment start. Without a grace period, analyses may introduce immortal time bias by requiring treatment to have occurred at a specific moment."
  },
  {
    id: 10,
    question: "The 'fragility index' of a randomized trial is defined as:",
    options: [
      "The number of dropouts required to change the primary outcome direction",
      "The minimum number of event status reversals needed to make a statistically significant result non-significant",
      "The ratio of standard error to effect estimate",
      "The p-value threshold used for interim analysis"
    ],
    answer: 1,
    explanation: "The fragility index quantifies how robust a statistically significant trial result is: it counts the minimum number of participants whose outcomes would need to change (from event to non-event or vice versa) to push the p-value above 0.05, making the result non-significant. A fragility index of 1 means a single event reversal changes the conclusion, indicating very fragile evidence. This concept was introduced to highlight how some 'significant' trials rest on few events."
  },
  {
    id: 11,
    question: "Wastewater-based epidemiology (WBE) was used during the COVID-19 pandemic as an early warning system. Its primary advantage is:",
    options: [
      "It provides individual-level clinical data on infected persons",
      "It captures pathogen burden at a population level, including asymptomatic and untested individuals, providing early trend signals",
      "It identifies specific variants through antigen testing",
      "It eliminates reporting delays seen in clinical surveillance"
    ],
    answer: 1,
    explanation: "Wastewater-based epidemiology measures pathogen nucleic acid or other biomarkers in sewage to estimate community-level infection burden, capturing asymptomatic, mildly ill, and untested individuals who never appear in clinical surveillance systems. WBE signals for SARS-CoV-2 RNA preceded clinical case surges by 4-7 days in multiple studies, enabling early warning. It does not provide individual-level data but is a powerful, passive population-level surveillance tool."
  },
  {
    id: 12,
    question: "In stepped-wedge cluster randomized trials, the sequence of crossover from control to intervention is:",
    options: [
      "Determined by the outcome rate in each cluster",
      "Random, with all clusters starting in the control condition and crossing over to intervention at different time points",
      "Fixed, with the highest-risk clusters receiving the intervention first",
      "Simultaneous across all clusters at a single time point"
    ],
    answer: 1,
    explanation: "In stepped-wedge designs, all clusters start in the control condition and are randomly assigned to different time points ('steps') at which they cross over to the intervention. By the end of the study, all clusters have received the intervention. This design is useful when withholding an intervention believed to be beneficial from all clusters simultaneously is not ethical or feasible. All clusters eventually receive treatment, providing both within-cluster and between-cluster comparisons."
  },

  // Questions 13-24: Biostatistics
  {
    id: 13,
    question: "Multiple imputation (MI) for missing data assumes data are 'missing at random' (MAR). MAR means:",
    options: [
      "Missingness is completely unrelated to any observed or unobserved data",
      "Missingness may be related to observed data but not to the missing values themselves, after conditioning on observed data",
      "Missingness is directly related to the unobserved missing values",
      "Missingness occurs with equal probability across all participants"
    ],
    answer: 1,
    explanation: "Missing At Random (MAR) means the probability of missingness depends on observed data but not on the missing values themselves, after accounting for the observed data. For example, older patients may be more likely to miss follow-up visits (missingness related to observed age), but among patients of the same age, missingness is unrelated to the unobserved outcome. MI under MAR uses observed data patterns to create multiple plausible imputed datasets, which are analyzed and pooled using Rubin's rules."
  },
  {
    id: 14,
    question: "The E-value in epidemiology, introduced by VanderWeele and Ding, quantifies:",
    options: [
      "The strength of the observed association between exposure and outcome",
      "The minimum strength of association that an unmeasured confounder would need to have with both exposure and outcome to explain away the observed association",
      "The expected number of false positives in a multiple testing scenario",
      "The ratio of exposed to unexposed person-time in a cohort study"
    ],
    answer: 1,
    explanation: "The E-value represents the minimum strength of association (on the risk ratio scale) that an unmeasured confounder would need to have with both the exposure and the outcome — beyond the measured confounders — to fully explain away the observed effect estimate. A larger E-value indicates greater robustness to unmeasured confounding. The E-value can be calculated from any risk ratio as E = RR + sqrt(RR × (RR − 1)), and is reported alongside adjusted effect estimates as a sensitivity analysis."
  },
  {
    id: 15,
    question: "In inverse probability of treatment weighting (IPTW), stabilized weights are preferred over unstabilized weights because:",
    options: [
      "Stabilized weights always produce narrower confidence intervals regardless of model specification",
      "Stabilized weights reduce the variance of estimates and help manage extreme weights that arise when propensity scores are very small or very large",
      "Stabilized weights eliminate the need for overlap trimming",
      "Stabilized weights do not require estimation of the propensity score"
    ],
    answer: 1,
    explanation: "Unstabilized IPTW weights are 1/PS for treated and 1/(1-PS) for untreated subjects, which can be extreme when propensity scores approach 0 or 1. Stabilized weights multiply by the marginal probability of treatment [P(A=1)] in the numerator, constraining the weights to have a mean of approximately 1 and reducing variance. This improves finite-sample performance and reduces the influence of subjects with extreme weights, though weight trimming or truncation may still be needed for very imbalanced distributions."
  },
  {
    id: 16,
    question: "Doubly robust estimation in causal inference is advantageous because:",
    options: [
      "It requires neither an outcome model nor a treatment model",
      "The estimator remains consistent if either the outcome regression model or the propensity score model is correctly specified, but not necessarily both",
      "It provides doubly conservative confidence intervals",
      "It doubles the effective sample size by weighting each observation twice"
    ],
    answer: 1,
    explanation: "Doubly robust (DR) estimators, such as the augmented inverse probability weighted (AIPW) estimator, combine both an outcome regression model and a propensity score model. The key property is 'double robustness': the estimator is consistent (unbiased in large samples) if either the outcome model or the propensity score model is correctly specified — providing two chances to achieve valid estimates. If both models are wrong, DR fails, but it outperforms either approach alone when one model is misspecified."
  },
  {
    id: 17,
    question: "In a meta-analysis, the I² statistic measures:",
    options: [
      "The total number of studies included",
      "The proportion of total variation in effect estimates across studies due to heterogeneity rather than sampling error",
      "The statistical significance of the pooled effect estimate",
      "The average sample size per included study"
    ],
    answer: 1,
    explanation: "I² = (Q - df)/Q × 100%, where Q is Cochran's heterogeneity statistic and df is degrees of freedom (number of studies minus 1). I² represents the percentage of total variability in effect estimates that is attributable to between-study heterogeneity rather than chance (within-study sampling error). Values of 25%, 50%, and 75% are conventionally considered low, moderate, and high heterogeneity respectively. High I² suggests important between-study differences that may warrant subgroup analysis or meta-regression."
  },
  {
    id: 18,
    question: "Quantitative bias analysis (QBA) in epidemiology extends traditional sensitivity analysis by:",
    options: [
      "Replacing all p-values with Bayesian credible intervals",
      "Systematically quantifying the direction and magnitude of bias from specific sources (confounding, selection bias, misclassification) and incorporating uncertainty in bias parameters",
      "Restricting analyses to studies with zero risk of bias on the Cochrane tool",
      "Eliminating the need for propensity score adjustment"
    ],
    answer: 1,
    explanation: "Quantitative bias analysis moves beyond qualitative statements ('there may be some confounding') to numerically model the impact of specific biases on effect estimates. For unmeasured confounding, researchers specify a probability distribution for the confounder's prevalence and its associations with exposure and outcome, then calculate bias-adjusted estimates across these values. Probabilistic QBA (Monte Carlo sensitivity analysis) propagates uncertainty in bias parameters to produce a bias-adjusted confidence interval."
  },
  {
    id: 19,
    question: "The number needed to treat (NNT) is most correctly interpreted as:",
    options: [
      "The average number of patients who must be treated for one additional patient to experience the outcome event",
      "The average number of patients who must be treated for one additional patient to benefit (avoid one additional bad outcome) compared to the control group",
      "The reciprocal of the relative risk reduction",
      "The number of treatments required before the drug reaches steady-state"
    ],
    answer: 1,
    explanation: "NNT = 1 / Absolute Risk Reduction (ARR), where ARR = Risk in control − Risk in treatment. It represents how many patients, on average, must receive the treatment instead of control for one additional patient to benefit (i.e., avoid the adverse outcome). NNT is clinically interpretable and preferred over relative measures for communicating benefit. NNT must always be reported in the context of the time frame, population, and specific outcome — an NNT of 20 over 5 years means 20 patients treated for 5 years prevents one event."
  },
  {
    id: 20,
    question: "In a Bayesian clinical trial, the 'prior distribution' represents:",
    options: [
      "The distribution of outcomes observed in the current trial before unblinding",
      "Pre-existing beliefs or knowledge about the treatment effect, quantified as a probability distribution before observing new trial data",
      "The probability of Type I error in the frequentist framework",
      "The distribution of baseline characteristics among trial participants"
    ],
    answer: 1,
    explanation: "In Bayesian statistics, the prior distribution encodes pre-existing knowledge or beliefs about a parameter (e.g., treatment effect) before the current data are observed. The prior is updated with the likelihood from observed data to produce the posterior distribution. Priors can be informative (based on previous trials or mechanistic evidence), weakly informative, or non-informative/diffuse. Bayesian trials report posterior probabilities (e.g., P[treatment is superior] = 0.95) rather than p-values."
  },
  {
    id: 21,
    question: "In survival analysis, the log-rank test is most appropriate when:",
    options: [
      "The hazard ratio changes over time (non-proportional hazards)",
      "The proportional hazards assumption holds and the goal is to compare overall survival distributions between groups",
      "The outcome is a continuous variable",
      "There is heavy censoring in only one group"
    ],
    answer: 1,
    explanation: "The log-rank test is the standard non-parametric test for comparing survival curves between groups, and it is most powerful when the proportional hazards assumption holds (i.e., the hazard ratio is constant over time). Under non-proportional hazards (e.g., delayed treatment effects, crossing survival curves), the log-rank test may have poor power. In such cases, weighted log-rank tests (e.g., Fleming-Harrington), the restricted mean survival time (RMST), or piecewise hazard models may be preferred."
  },
  {
    id: 22,
    question: "The 'unit of analysis error' in cluster randomized trials occurs when:",
    options: [
      "Clusters are randomly assigned to interventions",
      "Individual-level data are analyzed as if participants were independently randomized, ignoring the clustering, which underestimates standard errors and inflates Type I error",
      "Too few clusters are included in the trial",
      "The intraclass correlation coefficient (ICC) equals zero"
    ],
    answer: 1,
    explanation: "In cluster randomized trials, individuals within the same cluster (e.g., village, clinic) share environment and characteristics, making their outcomes correlated. If standard individual-level analyses (t-tests, chi-square) are used without accounting for within-cluster correlation, standard errors are underestimated, confidence intervals are too narrow, and p-values are too small — inflating Type I error. Correct analysis uses multilevel models, GEE with robust standard errors, or cluster-level summary statistics accounting for the intraclass correlation coefficient (ICC)."
  },
  {
    id: 23,
    question: "Restricted mean survival time (RMST) as an alternative to the hazard ratio has which key advantage?",
    options: [
      "It requires the proportional hazards assumption to hold",
      "It has a direct, clinically interpretable meaning as the average event-free survival time up to a specified time horizon, without requiring proportional hazards",
      "It is only applicable to studies without censored observations",
      "It always produces narrower confidence intervals than the log-rank test"
    ],
    answer: 1,
    explanation: "RMST is defined as the area under the survival curve from time 0 to a pre-specified time horizon τ, representing the average event-free time up to τ. Unlike the hazard ratio, RMST does not require the proportional hazards assumption, making it valid when hazards are non-proportional (e.g., immunotherapy trials with delayed effects). The RMST difference (treatment vs. control) is directly interpretable: 'patients in the treatment group lived on average X months longer event-free over the 3-year horizon.'"
  },
  {
    id: 24,
    question: "In Poisson regression for count data, the 'offset' term is used to:",
    options: [
      "Adjust for overdispersion by inflating the variance",
      "Account for differences in the observation time or population size across units, converting counts to rates",
      "Introduce a random effect for clustering",
      "Control for collinearity between predictors"
    ],
    answer: 1,
    explanation: "In Poisson regression, an offset is the logarithm of the person-time or population size at risk, included in the linear predictor with a fixed coefficient of 1. This converts the model from predicting counts to predicting rates per unit of person-time or per population size. For example, if one clinic sees 100 patients and another sees 1000, comparing raw event counts is misleading; the offset adjusts for this exposure difference, yielding incidence rate ratios as the output."
  },

  // Questions 25-34: Diagnostic Tests
  {
    id: 25,
    question: "When a deep learning algorithm is trained and validated on images from one hospital system but performs poorly at another institution, this is called:",
    options: [
      "Overfitting to the training set only",
      "Dataset shift or distribution shift, where the statistical properties of test data differ from training data",
      "Underfitting due to an insufficiently complex model",
      "Confirmation bias in algorithm development"
    ],
    answer: 1,
    explanation: "Dataset shift (also called distribution shift or covariate shift) occurs when the statistical properties of data at deployment differ from those at training time. In medical AI, this can result from differences in imaging equipment, patient demographics, scan protocols, disease prevalence, or image preprocessing pipelines between sites. It is a major cause of real-world performance degradation for AI diagnostic tools. External validation at multiple institutions and prospective clinical validation are essential to assess generalizability."
  },
  {
    id: 26,
    question: "Natural language processing (NLP) of clinical notes for phenotyping is most affected by which type of challenge specific to clinical text?",
    options: [
      "Text being too long for NLP models to process",
      "Negation, uncertainty, and temporal context — e.g., 'no chest pain,' 'rule out MI,' 'history of diabetes' — which differ from typical NLP corpora",
      "Clinical notes being written in languages other than English exclusively",
      "Lack of punctuation in clinical documentation"
    ],
    answer: 1,
    explanation: "Clinical NLP must handle phenomena rare in standard text corpora: negation ('no fever,' 'denies cough'), uncertainty/hedging ('cannot rule out,' 'possible pneumonia'), historical context ('history of hypertension' vs. current diagnosis), and family history ('mother had breast cancer'). Standard NLP models trained on news or literature often fail to correctly interpret these constructions, incorrectly extracting conditions that are absent, uncertain, or historical. Tools like NegEx, ConText, and clinical BERT variants are specifically designed to address these challenges."
  },
  {
    id: 27,
    question: "A wearable device's photoplethysmography (PPG) sensor is used to estimate blood oxygen saturation (SpO2). A key limitation of PPG-based SpO2 in darker skin tones is:",
    options: [
      "PPG sensors require blood draws for calibration",
      "Higher melanin concentrations absorb wavelengths used by PPG sensors, leading to systematically higher SpO2 readings and potential failure to detect hypoxemia",
      "PPG cannot measure pulsatile signals in individuals with higher heart rates",
      "PPG-based SpO2 is only validated in supine patients"
    ],
    answer: 1,
    explanation: "Pulse oximetry (including wearable PPG sensors) uses red (~660nm) and infrared (~940nm) light absorption to estimate SpO2. Melanin absorbs these wavelengths and can interfere with measurements, leading to overestimation of SpO2 in individuals with darker skin tones — a phenomenon documented extensively during COVID-19. Studies showed pulse oximeters were three times more likely to miss hypoxemia (SpO2 <92%) in Black patients versus white patients. This is a critical health equity issue that FDA has flagged for device manufacturers."
  },
  {
    id: 28,
    question: "Digital biomarkers derived from smartphone accelerometers can assess which of the following with clinical validity?",
    options: [
      "Serum electrolyte levels",
      "Gait speed, tremor frequency, and physical activity patterns relevant to neurological and musculoskeletal conditions",
      "Glomerular filtration rate",
      "Pulmonary function test parameters"
    ],
    answer: 1,
    explanation: "Smartphone and wearable accelerometers have been validated for measuring gait speed, step count, gait variability, tremor frequency and amplitude (relevant to Parkinson's disease), balance, and physical activity levels. These digital biomarkers correlate with clinical outcomes in Parkinson's disease, multiple sclerosis, fall risk assessment, post-surgical recovery, and sarcopenia. They enable passive, continuous monitoring in naturalistic settings, unlike clinic-based assessments that capture only brief snapshots."
  },
  {
    id: 29,
    question: "The AUROC (Area Under the Receiver Operating Characteristic curve) of a diagnostic model equals 0.5. This indicates:",
    options: [
      "The model has perfect discriminative ability",
      "The model has no discriminative ability — equivalent to random chance",
      "The model correctly classifies exactly 50% of positive cases",
      "The model's sensitivity equals 50% at all thresholds"
    ],
    answer: 1,
    explanation: "An AUROC of 0.5 represents the diagonal line in ROC space, corresponding to a model that performs no better than chance. An AUROC of 1.0 represents perfect discrimination (all positives ranked above all negatives), while 0.5 means the model cannot distinguish positive from negative cases at all. In clinical diagnostics, an AUROC of 0.7-0.8 is considered acceptable, 0.8-0.9 good, and >0.9 excellent. AUROC represents the probability that a randomly selected positive case is ranked higher than a randomly selected negative case."
  },
  {
    id: 30,
    question: "In remote patient monitoring (RPM), the concept of 'alert fatigue' refers to:",
    options: [
      "Patients becoming exhausted from wearing monitoring devices",
      "Clinicians becoming desensitized to frequent monitoring alerts, leading to dismissal of true positive alarms and potential patient harm",
      "Devices generating insufficient alerts for high-risk patients",
      "Patients reducing their activity in response to continuous monitoring"
    ],
    answer: 1,
    explanation: "Alert fatigue occurs when clinicians are overwhelmed by the volume of alarms from monitoring systems — the majority of which may be false positives or low-urgency notifications. Exposure to high alarm rates leads to desensitization, delayed responses, and dismissal of alerts without review, potentially causing harm when true positive alarms are missed. Studies in ICUs found that >80% of alarms are false. Strategies to reduce alert fatigue include machine learning-based alarm filtering, tiered alert systems, and individualized threshold setting."
  },
  {
    id: 31,
    question: "When calculating the positive predictive value (PPV) of a diagnostic test in a new population, which factor is most critical to account for?",
    options: [
      "The sample size used to derive the test",
      "The disease prevalence in the target population, as PPV changes with prevalence even when sensitivity and specificity remain constant",
      "The age and sex distribution of the derivation cohort",
      "The laboratory method used for the reference standard"
    ],
    answer: 1,
    explanation: "PPV = (Sensitivity × Prevalence) / [(Sensitivity × Prevalence) + ((1 − Specificity) × (1 − Prevalence))]. Even with fixed sensitivity and specificity, PPV varies dramatically with disease prevalence. A test with 99% sensitivity and 99% specificity has a PPV of only ~50% when prevalence is 1%, but ~99% when prevalence is 50%. This is why screening tests applied to low-prevalence populations generate many false positives — a fundamental concept for population screening programs."
  },
  {
    id: 32,
    question: "AI-based interpretation of chest X-rays for tuberculosis detection uses convolutional neural networks (CNNs). The 'label noise' problem in this context refers to:",
    options: [
      "Physical noise artifacts on X-ray images",
      "Errors and inconsistencies in the gold-standard labels (radiologist diagnoses) used to train the algorithm, which propagate into the model's performance",
      "Noise introduced by JPEG compression of training images",
      "Variability in patient positioning during X-ray acquisition"
    ],
    answer: 1,
    explanation: "Label noise refers to inaccuracies in the training data labels — in this case, radiologist diagnoses used as ground truth to train the CNN. Radiologists have known inter-rater variability for TB on CXR (kappa ~0.4-0.6), meaning training labels contain errors. Models trained on noisy labels learn to replicate errors, have reduced accuracy, and may struggle to perform better than the human annotators. Strategies to mitigate label noise include multi-reader consensus labels, semi-supervised learning, and noise-robust loss functions."
  },
  {
    id: 33,
    question: "The 'Youden Index' (J) for selecting an optimal diagnostic threshold is calculated as:",
    options: [
      "Sensitivity + Specificity − 1, and represents the threshold maximizing the sum of sensitivity and specificity",
      "Sensitivity × Specificity",
      "Sensitivity / (1 − Specificity)",
      "(True Positives + True Negatives) / Total population"
    ],
    answer: 0,
    explanation: "Youden's J statistic = Sensitivity + Specificity − 1, which equals 0 for a random test and 1 for a perfect test. Geometrically on the ROC curve, it identifies the point farthest from the diagonal (chance) line, maximizing the sum of sensitivity and specificity simultaneously. The corresponding test value at this point is often used as the optimal threshold when sensitivity and specificity are given equal importance. However, clinical context may favor higher sensitivity (screening) or higher specificity (confirmatory testing), requiring different threshold selection strategies."
  },
  {
    id: 34,
    question: "Federated learning in clinical AI is designed to address which primary concern?",
    options: [
      "Reducing the computational cost of training large models",
      "Allowing AI models to be trained across multiple institutions without sharing raw patient data, preserving privacy while leveraging distributed datasets",
      "Eliminating the need for ethical approval in multi-site AI studies",
      "Ensuring all participating hospitals use identical imaging equipment"
    ],
    answer: 1,
    explanation: "Federated learning enables collaborative training of machine learning models across multiple institutions by keeping patient data locally at each site. Each site trains the model on local data and shares only model parameters (gradients or weights) — not raw patient data — with a central aggregator, which updates the global model. This preserves patient privacy, facilitates compliance with data protection regulations (HIPAA, GDPR), and enables development of models on diverse, large datasets without centralization of sensitive health information."
  },

  // Questions 35-49: Communicable Diseases
  {
    id: 35,
    question: "Under the International Health Regulations (IHR) 2005, a Public Health Emergency of International Concern (PHEIC) is declared by:",
    options: [
      "The WHO Regional Director upon request from member states",
      "The WHO Director-General, based on the advice of an Emergency Committee of independent experts",
      "A two-thirds majority vote of the World Health Assembly",
      "The UN Security Council upon WHO recommendation"
    ],
    answer: 1,
    explanation: "Under IHR 2005, the WHO Director-General declares a PHEIC based on advice from an Emergency Committee (EC) of independent experts convened under Article 12. The EC assesses whether an event constitutes an 'extraordinary event' that poses a public health risk through international spread and potentially requires a coordinated international response. As of 2024, PHEICs have been declared for H1N1 influenza (2009), polio (2014), Ebola West Africa (2014), Zika (2016), Ebola DRC (2019), COVID-19 (2020), mpox (2022), and mpox again (2024)."
  },
  {
    id: 36,
    question: "The basic reproduction number (R0) represents:",
    options: [
      "The proportion of the population that needs to be immune to achieve herd immunity",
      "The average number of secondary infections generated by one infected individual in a completely susceptible population",
      "The rate of pathogen mutation per generation",
      "The minimum infectious dose required to establish infection"
    ],
    answer: 1,
    explanation: "R0 is the average number of secondary cases generated by a single infectious case in a fully susceptible population, with no interventions. R0 > 1 indicates epidemic potential; R0 < 1 means the disease will die out. The herd immunity threshold (HIT) = 1 − 1/R0. For COVID-19 Omicron, R0 was estimated at 8-15; for measles, R0 is 12-18, explaining why 95% vaccination coverage is needed to prevent outbreaks. R0 is distinct from the effective reproduction number (Re or Rt), which accounts for partial immunity and interventions."
  },
  {
    id: 37,
    question: "In SEIR compartmental models, the 'E' compartment represents individuals who are:",
    options: [
      "Immune due to prior infection or vaccination",
      "Exposed and infected but not yet infectious — in the incubation period (latent period)",
      "Experiencing severe disease requiring hospitalization",
      "Excluded from the model due to prior immunity"
    ],
    answer: 1,
    explanation: "The SEIR model extends the SIR model by adding an Exposed (E) compartment for individuals who have been infected but are not yet infectious — the latent period. The transition rate from E to I is 1/σ, where σ is the mean latent period. This is epidemiologically important for diseases like COVID-19 (latent period ~2-5 days before peak infectiousness) and Ebola. The SEIR framework allows modeling of pre-symptomatic transmission and more accurate epidemic curve projections than the simpler SIR model."
  },
  {
    id: 38,
    question: "Genomic epidemiology of SARS-CoV-2 uses whole-genome sequencing to:",
    options: [
      "Diagnose active COVID-19 infection in individual patients",
      "Track viral evolution, identify and characterize new variants, determine transmission chains, and assess vaccine escape",
      "Determine patient prognosis based on viral inoculum dose",
      "Measure the serological immune response after infection"
    ],
    answer: 1,
    explanation: "SARS-CoV-2 genomic epidemiology applies whole-genome sequencing (WGS) to viral genomes to track phylogenetic relationships between strains, identify mutations in the spike protein that may confer immune escape or increased transmissibility (as with Alpha, Delta, Omicron), reconstruct transmission networks in outbreak investigations, and monitor variant proportions in populations over time. Platforms like GISAID and Nextstrain enable global real-time phylogenetic analysis. India's INSACOG network was established to conduct genomic surveillance nationally."
  },
  {
    id: 39,
    question: "The concept of 'syndromic surveillance' in public health involves:",
    options: [
      "Confirming disease diagnoses using laboratory tests before reporting",
      "Monitoring pre-diagnostic health indicators (emergency department chief complaints, pharmacy sales, school absenteeism) to detect disease outbreaks earlier than traditional laboratory surveillance",
      "Classifying all patients by syndrome rather than specific diagnosis in clinical records",
      "Surveilling healthcare workers for occupational illness syndromes"
    ],
    answer: 1,
    explanation: "Syndromic surveillance monitors health indicators that precede formal diagnosis — such as emergency department chief complaints ('fever and rash'), pharmacy sales of antidiarrheal or flu medications, school/workplace absenteeism, ambulance call patterns, and search engine query trends. By detecting unusual clustering of symptoms or health-seeking behaviors, syndromic surveillance can identify outbreaks 1-2 weeks earlier than traditional laboratory-confirmed case reporting. Systems like BioSense (US-CDC) and UK's Second Generation Surveillance System use this approach."
  },
  {
    id: 40,
    question: "The IHR (2005) core capacities that countries must develop and maintain include surveillance, response, and which other critical domains?",
    options: [
      "Biodefense programs and strategic stockpiling only",
      "Legislation, coordination, zoonosis, food safety, chemical events, radiation emergencies, points of entry, and laboratory capacity",
      "Trade policy, tourism infrastructure, and border security exclusively",
      "Only those capacities related to respiratory and vector-borne diseases"
    ],
    answer: 1,
    explanation: "IHR 2005 Annex 1 specifies eight core capacity areas: legislation and policy, coordination and IHR focal point, surveillance, response, preparedness, risk communication, human resources, and laboratory. Additionally, there are core capacities required at airports, ports, and ground crossings (points of entry). Countries were required to achieve these capacities by 2012 (with possible extensions to 2014 and 2016). The Joint External Evaluation (JEE) tool assesses implementation of these capacities through a multi-sectoral, transparent process."
  },
  {
    id: 41,
    question: "Antimicrobial resistance (AMR) surveillance through the resistome analysis of metagenomics samples examines:",
    options: [
      "Antibiotic susceptibility of individual bacterial colonies grown in culture",
      "The complete collection of antibiotic resistance genes within a microbial community (e.g., gut microbiome, environmental sample) using culture-independent DNA sequencing",
      "The resistance gene profiles of only pathogenic bacteria",
      "Pharmacokinetic profiles of antibiotics in patient plasma"
    ],
    answer: 1,
    explanation: "The resistome refers to the totality of antibiotic resistance genes (ARGs) in a given microbial community or environment. Metagenomic resistome analysis uses shotgun sequencing of environmental DNA to identify ARGs in entire microbial communities without culturing individual organisms, capturing resistance in the full microbiome including unculturable species. This enables surveillance of ARG reservoirs in sewage, livestock, soil, and human microbiomes, tracking the dissemination of resistance elements (e.g., MCR-1 colistin resistance gene) across One Health niches."
  },
  {
    id: 42,
    question: "Herd immunity threshold (HIT) for a disease with R0 = 4 is:",
    options: [
      "40%",
      "75%",
      "80%",
      "25%"
    ],
    answer: 1,
    explanation: "HIT = 1 − 1/R0 = 1 − 1/4 = 1 − 0.25 = 0.75 = 75%. This means 75% of the population must be immune (through vaccination or prior infection) to prevent sustained epidemic spread. For measles (R0 ≈ 15), HIT ≈ 93%; for seasonal influenza (R0 ≈ 1.3), HIT ≈ 23%. These thresholds assume uniform mixing and homogeneous immunity, which are simplifications; heterogeneous mixing can lower the effective threshold in practice."
  },
  {
    id: 43,
    question: "The 'One Health' approach to infectious disease surveillance recognizes that:",
    options: [
      "Human health is the only domain requiring surveillance infrastructure",
      "Human, animal, and environmental health are interconnected, and integrated surveillance across all three domains is essential for detecting zoonotic threats early",
      "Animal diseases require separate management with no coordination with human health authorities",
      "Environmental monitoring is solely the responsibility of environmental agencies without public health integration"
    ],
    answer: 1,
    explanation: "One Health recognizes that approximately 60% of human infectious diseases are zoonotic (originating in animals), and that the health of humans, domestic and wild animals, and the environment are inextricably linked. Effective surveillance requires collaboration among human health, veterinary, and environmental sectors. The joint FAO-OIE-WHO tripartite collaboration, India's One Health pilot programs in 5 states (2021), and the PREDICT program exemplify this approach. Climate change, deforestation, and agricultural intensification increase zoonotic spillover risk."
  },
  {
    id: 44,
    question: "In contact tracing, the 'secondary attack rate' (SAR) is defined as:",
    options: [
      "The proportion of contacts who are themselves contacts of primary cases",
      "The proportion of exposed susceptible contacts who develop infection following exposure to a primary case",
      "The attack rate in the second wave of an epidemic",
      "The number of secondary cases divided by the number of primary cases"
    ],
    answer: 1,
    explanation: "Secondary attack rate (SAR) = Number of new cases among contacts / Number of susceptible contacts exposed. It measures the transmissibility of a pathogen within specific contact settings (households, healthcare settings, schools). For COVID-19, household SAR ranged from 4-35% depending on variant, household size, and testing frequency. SAR differs from R0 in that it measures transmission within a defined contact group rather than the average in a fully susceptible population. SAR is critical for evaluating quarantine duration and isolation protocols."
  },
  {
    id: 45,
    question: "Passive immunization with monoclonal antibodies for infectious disease prophylaxis differs from vaccination in that:",
    options: [
      "Monoclonal antibodies provide lifelong immunity",
      "Monoclonal antibodies provide immediate but temporary protection (weeks to months) without inducing immunological memory, while vaccines stimulate active immunity with memory",
      "Monoclonal antibodies cannot be used for respiratory pathogens",
      "Vaccines always require multiple doses while monoclonal antibodies require only one"
    ],
    answer: 1,
    explanation: "Monoclonal antibodies (mAbs) provide passive immunity — pre-formed antibodies that immediately neutralize pathogen without requiring an immune response. However, protection is temporary (half-life of ~3-6 weeks for typical IgG1 mAbs, extended to months for half-life-extended variants like nirsevimab for RSV). No immunological memory is generated, so protection wanes as mAb concentrations decline. In contrast, vaccines stimulate active immunity with B and T cell memory, providing long-lasting protection. mAbs are valuable for immunocompromised patients who cannot mount vaccine responses."
  },
  {
    id: 46,
    question: "Clonal expansion during a foodborne outbreak investigation is best assessed using:",
    options: [
      "Standard microbiological culture and antibiogram",
      "Whole genome sequencing (WGS)-based core genome multilocus sequence typing (cgMLST) or SNP analysis to determine phylogenetic relatedness of isolates",
      "Serological testing of affected patients",
      "Biochemical identification panels (e.g., API strips)"
    ],
    answer: 1,
    explanation: "WGS-based typing methods, particularly core genome MLST (cgMLST) and single nucleotide polymorphism (SNP) analysis, have replaced older methods (PFGE, MLST) as the gold standard for determining whether outbreak isolates share a common source. These methods provide the highest discriminatory power — capable of distinguishing isolates differing by even 1-5 SNPs. National reference laboratories, including those in the PulseNet network, now routinely use WGS for foodborne pathogen outbreak typing (Salmonella, Listeria, E. coli O157:H7)."
  },
  {
    id: 47,
    question: "Point-of-care nucleic acid amplification tests (NAAT) for tuberculosis diagnosis at peripheral health facilities offer which key advantage over conventional sputum smear microscopy?",
    options: [
      "Lower cost per test in all settings",
      "Simultaneous detection of Mycobacterium tuberculosis AND rifampicin resistance (rpoB mutation) with higher sensitivity than smear microscopy, especially in HIV-positive patients",
      "Ability to detect all forms of drug resistance beyond rifampicin",
      "No requirement for trained laboratory technicians"
    ],
    answer: 1,
    explanation: "The Xpert MTB/RIF assay (GeneXpert platform) simultaneously detects MTB and rifampicin resistance (as a proxy for MDR-TB) within 2 hours with a sensitivity of ~85-88% (versus ~45-65% for smear microscopy) and specificity >98%. Crucially, sensitivity is maintained in HIV-positive smear-negative patients where microscopy performs especially poorly. WHO endorsed Xpert as the initial diagnostic test for adults with presumptive pulmonary TB in 2021. It does not detect resistance beyond rifampicin — Xpert Ultra and next-generation tests address this partially."
  },
  {
    id: 48,
    question: "Vector control through indoor residual spraying (IRS) for malaria reduction works primarily through which mechanism?",
    options: [
      "Repelling mosquitoes from entering homes",
      "Killing Anopheles mosquitoes that rest on sprayed surfaces after taking a blood meal, reducing longevity below that needed to complete the extrinsic incubation period of Plasmodium",
      "Killing mosquito larvae in water sources inside homes",
      "Disrupting mosquito reproduction through endocrine disruption"
    ],
    answer: 1,
    explanation: "IRS involves applying residual insecticides to the interior surfaces of walls and ceilings where Anopheles mosquitoes rest after taking blood meals. The key mechanism is killing resting mosquitoes before the Plasmodium parasite completes its extrinsic incubation period (10-14 days depending on temperature). Reducing adult female Anopheles longevity below this period prevents malaria transmission. IRS requires coverage of ≥85% of structures in a defined area to achieve significant community-level impact. Pyrethroid resistance has complicated IRS programs in sub-Saharan Africa."
  },
  {
    id: 49,
    question: "The 'case fatality ratio' (CFR) during an active epidemic is often an overestimate of the true infection fatality ratio (IFR) because:",
    options: [
      "Deaths are always misclassified in epidemic settings",
      "CFR is calculated using only confirmed cases in the denominator, missing mild and asymptomatic infections, while IFR uses the total infected population (including undetected cases)",
      "CFR counts only hospitalized deaths while IFR counts all deaths",
      "CFR and IFR are always identical measures"
    ],
    answer: 1,
    explanation: "CFR = Deaths / Confirmed Cases, where confirmed cases represent only the detected, often more severe, tip of the iceberg. During an epidemic, testing is limited and asymptomatic/mild cases are vastly under-counted. IFR = Deaths / Total Infected (confirmed + undetected), estimated through seroprevalence surveys or statistical modeling. For COVID-19, CFR early in the pandemic was 3-5% in many countries, while subsequent seroprevalence studies showed IFR of 0.2-1% in most populations (higher in elderly). IFR is the true measure of disease lethality."
  },

  // Questions 50-64: Non-Communicable Diseases
  {
    id: 50,
    question: "The 'social determinants of health' (SDH) framework, as defined by WHO, encompasses factors in which domains?",
    options: [
      "Only income and education",
      "Conditions in which people are born, grow, live, work, and age, shaped by the distribution of money, power, and resources at global, national, and local levels",
      "Genetic predispositions and individual health behaviors exclusively",
      "Healthcare access and health system quality only"
    ],
    answer: 1,
    explanation: "The WHO Commission on Social Determinants of Health (2008) defined SDH as the conditions into which people are born, grow, live, work, and age, shaped by structural drivers including income distribution, education systems, social norms, governance structures, and macroeconomic policies. These structural determinants create differential exposure to intermediary determinants (living conditions, health behaviors, psychosocial factors). SDH account for 30-55% of health outcomes according to WHO estimates. Addressing SDH requires multi-sectoral 'Health in All Policies' approaches."
  },
  {
    id: 51,
    question: "The 'commercial determinants of health' concept refers to:",
    options: [
      "The profit motive of pharmaceutical companies in drug pricing",
      "Private sector activities — including marketing, lobbying, supply chains, and political influence — that shape health-promoting or health-harming conditions, environments, and policies",
      "Health technology assessment methods for determining cost-effectiveness",
      "Corporate social responsibility activities of health companies"
    ],
    answer: 1,
    explanation: "Commercial determinants of health (CDoH) describes how commercial actors (food and beverage industry, tobacco, alcohol, fossil fuel companies) shape the physical, social, information, and policy environments in ways that affect population health. Key mechanisms include aggressive marketing of unhealthy products, lobbying against public health regulations, funding biased research, and exploiting regulatory weaknesses in LMICs. The Lancet Series on CDoH (2023) documented how transnational corporations contribute to the global burden of NCDs through product design, marketing, and political strategies."
  },
  {
    id: 52,
    question: "NOVA food classification system categorizes foods based on:",
    options: [
      "Nutrient content per serving (e.g., fat, sugar, salt levels)",
      "The extent and purpose of industrial food processing, not nutritional composition per se",
      "Glycemic index and glycemic load values",
      "Organic versus non-organic production methods"
    ],
    answer: 1,
    explanation: "The NOVA classification (developed by Monteiro et al., Brazil) groups foods into four groups by degree of industrial processing: Group 1 (unprocessed/minimally processed), Group 2 (processed culinary ingredients), Group 3 (processed foods), Group 4 (ultra-processed foods — UPF). UPFs contain industrial additives not used in home cooking (emulsifiers, flavor enhancers, hydrogenated fats) and are formulated primarily from industrial substances. NOVA classification predicts NCD risk independently of nutrient content, suggesting processing itself — not just nutrients — contributes to harm."
  },
  {
    id: 53,
    question: "The 'planetary health' framework primarily addresses:",
    options: [
      "Space medicine and health effects of microgravity on astronauts",
      "The interdependence of human health and the health of natural Earth systems (climate, biodiversity, freshwater, land), recognizing that degradation of natural systems threatens human health",
      "Global health diplomacy and international health governance",
      "Environmental toxicology and occupational health exclusively"
    ],
    answer: 1,
    explanation: "Planetary health, articulated by the Rockefeller Foundation-Lancet Commission (2015), recognizes that human civilization's health is fundamentally dependent on the stability and functioning of Earth's natural systems. Climate change, biodiversity loss, land degradation, freshwater depletion, and nitrogen cycle disruption threaten food security, water availability, infectious disease patterns, and extreme weather events — all of which affect human health. The framework calls for understanding that a stable biosphere is a prerequisite for long-term human health and wellbeing."
  },
  {
    id: 54,
    question: "In the WHO Global Action Plan for NCDs 2013-2030, the 'best buy' interventions are defined as those that are:",
    options: [
      "The most expensive but most effective interventions",
      "Cost-effective, feasible, and evidence-based interventions that provide high impact per dollar spent, including tobacco and alcohol taxation, salt reduction, and physical activity promotion",
      "Interventions recommended exclusively for high-income countries",
      "Generic drug procurement strategies for NCD medications"
    ],
    answer: 1,
    explanation: "'Best buys' in the WHO NCD action plan are interventions that meet three criteria: strong evidence of effectiveness, cost-effectiveness (generally <1-3× GDP per capita per DALY averted), and feasibility in LMICs. Confirmed 'best buys' include tobacco tax increases, smoke-free policies, warning labels, alcohol tax and advertising restrictions, salt reformulation, trans-fat elimination, physical activity promotion, cervical cancer screening, management of cardiovascular risk through multi-drug therapy, and hepatitis B vaccination. These 16 interventions, if implemented, could prevent 8.2 million deaths annually."
  },
  {
    id: 55,
    question: "The metabolic syndrome is defined by the presence of at least three of five criteria. Which combination correctly represents these criteria according to NCEP ATP III guidelines?",
    options: [
      "BMI >30, fasting glucose >126, total cholesterol >200, hypertension, family history of diabetes",
      "Abdominal obesity, elevated triglycerides, reduced HDL cholesterol, elevated blood pressure, and elevated fasting glucose",
      "LDL cholesterol >160, triglycerides >200, fasting insulin >25, BMI >28, microalbuminuria",
      "Waist-hip ratio >1.0, HbA1c >6.5%, diastolic BP >90, uric acid >6, CRP >3"
    ],
    answer: 1,
    explanation: "NCEP ATP III defines metabolic syndrome as ≥3 of: (1) abdominal obesity (waist >102 cm men, >88 cm women); (2) triglycerides ≥150 mg/dL; (3) HDL <40 mg/dL men, <50 mg/dL women; (4) blood pressure ≥130/85 mmHg or on antihypertensives; (5) fasting glucose ≥100 mg/dL or on antidiabetic therapy. Metabolic syndrome prevalence in India is 25-35% by various criteria. It represents insulin resistance and is associated with 2-fold increased cardiovascular disease risk and 5-fold increased type 2 diabetes risk."
  },
  {
    id: 56,
    question: "The 'polyvagal theory' as applied to trauma-informed care in NCD prevention is most relevant to:",
    options: [
      "Pharmacological management of vagal syncope",
      "Understanding how chronic stress and adverse childhood experiences (ACEs) alter autonomic nervous system function, linking psychosocial trauma to NCD risk through physiological pathways",
      "Surgical intervention for atrial fibrillation through vagal stimulation",
      "Dietary recommendations for patients with vagotomy"
    ],
    answer: 1,
    explanation: "The polyvagal theory (Porges) describes how the autonomic nervous system — particularly the vagus nerve — regulates physiological states in response to safety and threat cues. Chronic trauma and adverse childhood experiences (ACEs) can dysregulate the autonomic nervous system, maintaining hyperactivation of the stress response (HPA axis, sympathetic nervous system), which over time contributes to inflammation, hypertension, metabolic dysfunction, and immune dysregulation — all NCD risk factors. Trauma-informed care approaches recognize this pathway in designing NCD prevention programs for at-risk populations."
  },
  {
    id: 57,
    question: "Global burden of disease (GBD) studies use disability-adjusted life years (DALYs). DALYs are calculated as:",
    options: [
      "Years of life lost (YLL) minus years lived with disability (YLD)",
      "Years of life lost (YLL) due to premature mortality plus years lived with disability (YLD) due to non-fatal health outcomes",
      "Life expectancy minus healthy life expectancy",
      "Quality-adjusted life years (QALYs) divided by the standard discount rate"
    ],
    answer: 1,
    explanation: "DALY = YLL + YLD, where YLL = (standard life expectancy at age of death) − (age at death), summed over all premature deaths, and YLD = (years lived with condition) × (disability weight for that condition, ranging 0 to 1). DALYs represent the burden of disease as the gap between current health status and an ideal of full health and longevity. One DALY = one lost year of healthy life. In GBD 2019, ischemic heart disease (197 million DALYs), neonatal disorders (202 million), and diabetes (70 million) were among the leading causes globally."
  },
  {
    id: 58,
    question: "Community-based participatory research (CBPR) for NCD prevention is distinguished from conventional research by:",
    options: [
      "Using community members only as research subjects without involvement in design",
      "Equitably involving community members as partners throughout the research process — from problem identification and study design through data collection, interpretation, and dissemination — to address community priorities",
      "Conducting research exclusively within academic institutions",
      "Avoiding quantitative methods in favor of qualitative approaches only"
    ],
    answer: 1,
    explanation: "CBPR is a collaborative approach where community members and researchers share power, knowledge, and decision-making throughout the research process. Communities are co-investigators, not just subjects. This approach improves cultural relevance of interventions, enhances trust and participation, ensures research addresses community-identified priorities, and facilitates translation of findings into practice. CBPR has been particularly effective for NCD prevention in marginalized communities where conventional top-down approaches have limited uptake due to cultural and structural barriers."
  },
  {
    id: 59,
    question: "In India, PM-Ayushman Bharat Health Infrastructure Mission (PM-ABHIM) primarily aims to:",
    options: [
      "Provide health insurance coverage to Below Poverty Line (BPL) families",
      "Strengthen health infrastructure including critical care, integrated public health labs, and disease surveillance systems at block, district, and national levels",
      "Train ASHA workers for maternal and child health",
      "Establish new AIIMS institutions across the country"
    ],
    answer: 1,
    explanation: "PM-ABHIM (launched October 2021, Rs. 64,180 crore outlay over 5 years) focuses on strengthening health infrastructure across three tiers: (1) strengthening primary, secondary, and critical care capacity; (2) establishing integrated health and wellness centres (HWCs) at sub-health centre level; (3) developing a network of integrated public health laboratories (IPHLs), biosafety labs (BSL-3), and a national network of diagnostic labs for surveillance. It emerged from COVID-19 learnings about infrastructure gaps in India's public health system."
  },
  {
    id: 60,
    question: "The 'syndemic' theory, as applied to NCDs, suggests that:",
    options: [
      "Multiple NCDs occur in the same geographic region by coincidence",
      "Synergistic epidemics of NCDs (e.g., obesity, diabetes, CVD) co-occur in populations and interact with each other and social conditions, amplifying their collective burden beyond what individual diseases would predict",
      "NCDs and communicable diseases are mutually exclusive in populations",
      "All NCDs share a single biological mechanism"
    ],
    answer: 1,
    explanation: "Syndemics theory (Merrill Singer) argues that disease concentrations are not random but result from social conditions that cause multiple epidemics to cluster in the same populations and biologically interact. The SLIPPAGE syndemic describes how substance abuse, violence, and AIDS interact in urban poverty. Similarly, obesity, diabetes, and cardiovascular disease cluster in economically deprived populations and biologically interact (insulin resistance accelerates CVD; CVD promotes sedentary behavior exacerbating obesity). Addressing syndemics requires interventions targeting both biological and social determinants simultaneously."
  },
  {
    id: 61,
    question: "The WHO MPOWER package for tobacco control is a six-component framework. The 'W' component stands for:",
    options: [
      "Warning labels on tobacco products",
      "Warn about the dangers of tobacco — through health warning labels, mass media campaigns, and public health education",
      "Wholesale price controls on tobacco",
      "Withdrawal of tobacco subsidies"
    ],
    answer: 1,
    explanation: "MPOWER stands for: Monitor tobacco use and prevention policies; Protect people from tobacco smoke (smoke-free policies); Offer help to quit tobacco use; Warn about the dangers of tobacco; Enforce bans on tobacco advertising, promotion and sponsorship; Raise taxes on tobacco products. The 'W' component encompasses large pictorial health warning labels (≥50% of pack surface, per FCTC Article 11), mass media anti-tobacco campaigns, and public education. India implemented graphic health warnings covering 85% of cigarette and bidi pack surfaces in 2016."
  },
  {
    id: 62,
    question: "Physical inactivity is estimated to contribute to what proportion of global premature deaths from NCDs?",
    options: [
      "1-2%",
      "5-8%",
      "20-25%",
      "30-35%"
    ],
    answer: 1,
    explanation: "Physical inactivity is estimated to cause approximately 5-8% of global premature deaths (approximately 5.3 million deaths per year, estimated in Lancet 2012), attributable to coronary heart disease (~6%), type 2 diabetes (~7%), breast cancer (~10%), and colon cancer (~10%). The 2018 WHO Global Action Plan on Physical Activity set a target of 15% relative reduction in insufficient physical activity by 2030. In India, 34% of adults are insufficiently physically active according to WHO estimates, contributing substantially to NCD burden."
  },
  {
    id: 63,
    question: "Salt reduction strategies for cardiovascular disease prevention include reformulation of processed foods and front-of-pack labeling. The WHO-recommended maximum salt intake is:",
    options: [
      "10 grams per day for adults",
      "Less than 5 grams per day for adults",
      "2 grams per day for adults",
      "8 grams per day for adults"
    ],
    answer: 1,
    explanation: "WHO recommends <5 grams of salt (approximately 2 grams of sodium) per day for adults — a target far below current global average consumption of 9-12 g/day. Achieving this target globally could prevent 2.5 million deaths annually from stroke and ischemic heart disease. India's average salt intake is approximately 8-11 g/day. Front-of-pack labeling (e.g., FSSAI's proposed 'high in salt' warning labels), reformulation of processed foods, and behavior change communication are the main strategies for population-level salt reduction."
  },
  {
    id: 64,
    question: "Gestational diabetes mellitus (GDM) screening in India using the Diabetes in Pregnancy Study Group of India (DIPSI) criteria uses:",
    options: [
      "Fasting plasma glucose ≥92 mg/dL alone",
      "A non-fasting 75g oral glucose challenge test with venous plasma glucose ≥140 mg/dL at 2 hours, applicable in any trimester",
      "HbA1c ≥6.5% at first antenatal visit",
      "Random blood glucose ≥200 mg/dL with symptoms"
    ],
    answer: 1,
    explanation: "The DIPSI single-step strategy (recommended by Indian guidelines) uses a non-fasting 75g oral glucose challenge with a 2-hour plasma glucose cutoff of ≥140 mg/dL to diagnose GDM. The non-fasting approach is pragmatic for Indian public health settings where fasting compliance is difficult in pregnant women. DIPSI criteria screen at 24-28 weeks (or earlier if risk factors) and again at 32-34 weeks if first test is negative. India has one of the highest GDM prevalences globally (10-14.3% by DIPSI criteria), with significant implications for maternal and childhood metabolic health."
  },

  // Questions 65-72: Bioethics
  {
    id: 65,
    question: "The concept of 'research parasitism' in global health refers to:",
    options: [
      "Researchers conducting animal experiments in place of human trials",
      "External researchers from high-income countries collecting data, samples, or insights from LMIC populations without adequate capacity building, benefit sharing, or authorship credit for local researchers",
      "Pharmaceutical companies funding independent academic research",
      "Systematic reviews that use primary study data without permission"
    ],
    answer: 1,
    explanation: "Research parasitism (also called 'helicopter research' or 'parachute science') occurs when researchers from high-income countries travel to LMICs to collect data/samples and return home to publish — without meaningful involvement of local scientists, capacity building, data sharing, or benefit for the community. This perpetuates colonial hierarchies in science, drains local resources, and denies local researchers publication credit and career advancement. Equitable partnership frameworks (e.g., COHRED's Research Fairness Initiative, equity in authorship guidelines) aim to address this structural inequity."
  },
  {
    id: 66,
    question: "The Declaration of Helsinki (2013 revision) requires that at the conclusion of a study, participants in the control group should:",
    options: [
      "Receive financial compensation for participation",
      "Have access to the best proven intervention identified in the study, or other appropriate care, not just placebo",
    "Be followed up for at least 5 years post-trial",
      "Provide written consent for long-term data storage"
    ],
    answer: 1,
    explanation: "The 2013 revision of the Declaration of Helsinki (Paragraph 34) states that in post-study arrangements, sponsors, researchers, and host country governments should ensure that all participants who still need an intervention identified as beneficial continue to access it after the study ends, or make other arrangements for their care. This 'post-trial access' requirement aims to prevent exploitation of participants in resource-limited settings who receive potentially life-saving treatments during trials but lose access when the trial ends."
  },
  {
    id: 67,
    question: "The principle of 'justice' in research ethics, as articulated in the Belmont Report, primarily concerns:",
    options: [
      "Ensuring that research findings are used for beneficial purposes only",
      "Fair distribution of the burdens and benefits of research — ensuring vulnerable populations are not disproportionately enrolled in risky research while benefiting populations are excluded from benefits",
      "Legal compliance with national research regulations",
      "Equal treatment of all research staff regardless of seniority"
    ],
    answer: 1,
    explanation: "The Belmont Report (1979) identifies three fundamental principles: respect for persons (autonomy), beneficence (maximize benefits, minimize harm), and justice (fairness in distribution of research burdens and benefits). Justice requires that groups bearing the burdens of research (participation, risk) should also benefit from its results, and that vulnerable populations (prisoners, the impoverished) should not be exploited as convenient research subjects for conditions primarily affecting the privileged. The historical exploitation of Black Americans in the Tuskegee syphilis study exemplifies justice violations in research."
  },
  {
    id: 68,
    question: "Open science encompasses which of the following practices?",
    options: [
      "Conducting research in publicly accessible spaces",
      "Open access publishing, open data sharing, open protocols, pre-registration of studies, and open source software — making the research process and outputs transparent and accessible",
      "Sharing unpublished data only with collaborating institutions",
      "Open peer review exclusively"
    ],
    answer: 1,
    explanation: "Open science is a movement to make scientific research and its data and dissemination accessible to all levels of society. It encompasses: open access (free availability of publications), open data (sharing underlying datasets), open materials (sharing protocols, instruments, code), pre-registration (documenting hypotheses and analysis plans before data collection), registered reports (peer review of protocol before results are known), and open peer review. The Budapest Open Access Initiative (2002) and Plan S (2018) have advanced open access mandates globally. ICMR now requires open access publication for funded research."
  },
  {
    id: 69,
    question: "Technology transfer in global health research ethics is most ethically justified when it includes:",
    options: [
      "Transfer of any technology from high-income to low-income countries without conditions",
      "Genuine capacity building in the recipient country — including local manufacturing capability, regulatory expertise, and intellectual property arrangements that support long-term local production and access",
      "Licensing agreements that maximize royalty payments for the originating institution",
      "One-time training workshops without follow-up support"
    ],
    answer: 1,
    explanation: "Ethical technology transfer in global health goes beyond shipping devices or sharing protocols; it includes building sustainable local capacity for production, quality control, regulatory approval, and maintenance. The COVID-19 pandemic illustrated this when the mRNA Vaccine Technology Transfer Hub (South Africa, established by WHO and partners) aimed to enable African manufacturers to produce mRNA vaccines locally — addressing vaccine inequity's structural roots. Ethical TT also addresses intellectual property barriers through patent pools (e.g., Medicines Patent Pool) and TRIPS flexibilities for public health."
  },
  {
    id: 70,
    question: "Dual-use research of concern (DURC) in biomedical science refers to:",
    options: [
      "Research conducted by both academic and industry partners simultaneously",
      "Research that could be directly misapplied to pose a significant threat to public health, safety, security, or national security — such as gain-of-function studies on pathogens",
      "Research that simultaneously serves therapeutic and diagnostic purposes",
      "Studies that recruit participants from both public and private healthcare settings"
    ],
    answer: 1,
    explanation: "DURC is legitimate life sciences research that could be directly misapplied by malicious actors to pose biosecurity risks. The canonical example is H5N1 influenza gain-of-function (GOF) experiments (Fouchier, Kawaoka 2012) that created human-transmissible H5N1, raising concerns about laboratory release risk and bioterrorism. International oversight frameworks (US DURC policy 2012, WHO advisory committee on VBGF) require institutional biosafety committees to review potential DURC and weigh benefits against risks. The field gained renewed prominence during COVID-19 debates about SARS-CoV-2 origins."
  },
  {
    id: 71,
    question: "The ICMR Bioethics guidelines (2017) for biomedical and health research involving human participants specify the composition of an Institutional Ethics Committee (IEC). According to these guidelines, IECs must have a minimum number of members including:",
    options: [
      "Only medical professionals for adequate technical review",
      "A minimum of 7 members, including a layperson, a woman member, a legal expert, a social scientist, and representation from non-medical scientific fields — ensuring multidisciplinary and community perspectives",
      "Exclusively external members from other institutions to prevent conflicts of interest",
      "A minimum of 15 members including at least 5 clinicians"
    ],
    answer: 1,
    explanation: "ICMR National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017) require IECs to have a minimum of 7 members: a chairperson (external, non-institutional), member secretary, clinician(s) with research experience, a non-medical scientist (statistician, pharmacologist), a social scientist/psychologist, a legal expert or retired judge, a layperson representing community interest, and a woman member. This multidisciplinary, community-inclusive composition ensures balanced ethical review from scientific, legal, social, and community perspectives."
  },
  {
    id: 72,
    question: "In global health partnerships between high-income country (HIC) and low-and-middle-income country (LMIC) institutions, the concept of 'equitable partnership' requires:",
    options: [
      "Equal financial contributions from all partners",
      "Co-design of research questions, shared decision-making authority, equitable authorship, data ownership agreements, and capacity building that strengthens LMIC institutions — moving beyond transactional relationships",
      "HIC partners taking the lead on all scientific decisions to ensure quality",
      "LMIC partners managing all field operations without involvement in analysis or publication"
    ],
    answer: 1,
    explanation: "Equitable partnership in global health research moves beyond 'collaboration' (where HICs define problems, design studies, and publish results) to true co-creation where LMIC partners have genuine decision-making power, first authorship on locally relevant publications, data access and ownership rights, and benefit from capacity building that strengthens institutions (not just individual researchers). Frameworks like the Partnership Assessment Toolkit (PAT), Research Fairness Initiative, and the ESSENCE principles provide benchmarks for equitable partnership. The 2019 Lancet Global Health series 'Decolonising global health' provides critical analysis."
  },

  // Questions 73-80: Molecular Biology & Genetics
  {
    id: 73,
    question: "Single-cell RNA sequencing (scRNA-seq) can identify cell types that are not detectable by bulk RNA sequencing. This is primarily because:",
    options: [
      "scRNA-seq uses different sequencing chemistry than bulk RNA-seq",
      "Bulk RNA-seq averages gene expression across thousands of cells, masking rare cell types and subpopulations; scRNA-seq profiles transcriptomes of individual cells, revealing heterogeneity",
      "scRNA-seq captures both nuclear and mitochondrial RNA simultaneously",
      "Bulk RNA-seq cannot detect non-coding RNA species"
    ],
    answer: 1,
    explanation: "Bulk RNA-seq generates an averaged transcriptome across all cells in a sample — a population-level average that masks cell-to-cell variability. scRNA-seq profiles gene expression in each individual cell, enabling unsupervised clustering to identify distinct cell types, states, and trajectories. This revealed unexpected diversity: the brain contains >100 distinct neuron types; tumors contain rare immunosuppressive macrophage subpopulations; intestinal crypts have multiple stem cell states. scRNA-seq was the methodological foundation for the Human Cell Atlas project."
  },
  {
    id: 74,
    question: "Spatial transcriptomics (e.g., 10x Visium, MERFISH) adds what dimension to conventional scRNA-seq?",
    options: [
      "Temporal resolution, enabling single-cell profiling across multiple time points simultaneously",
      "Spatial location within tissue — enabling mapping of gene expression patterns while preserving information about where cells are physically positioned within the tissue architecture",
      "Protein-level quantification alongside RNA measurement",
      "Single-molecule sensitivity without amplification bias"
    ],
    answer: 1,
    explanation: "Spatial transcriptomics captures gene expression while retaining the physical spatial coordinates of cells within tissue sections. Conventional scRNA-seq requires tissue dissociation, losing spatial context. Technologies like 10x Visium (sequencing-based), MERFISH, seqFISH+ (imaging-based), and Slide-seq capture the spatial dimension, enabling study of tissue zonation (e.g., liver zonation), tumor microenvironment architecture, brain region-specific gene expression, and cell-cell communication within anatomical context. Spatial biology was Nature Methods' Method of the Year 2020."
  },
  {
    id: 75,
    question: "Patient-derived organoids (PDOs) for cancer drug testing are advantageous over traditional cancer cell lines because:",
    options: [
      "PDOs are immortalized and can be expanded indefinitely without genetic drift",
      "PDOs recapitulate the 3D architecture, cellular heterogeneity, and patient-specific genetic characteristics of the original tumor, providing more accurate prediction of patient drug response than flat 2D cell lines",
      "PDOs do not require specialized culture conditions",
      "PDOs can be used for in vivo experiments directly without ethical approval"
    ],
    answer: 1,
    explanation: "Traditional cancer cell lines grown in 2D monolayers lack the three-dimensional structure, stromal interactions, and cellular heterogeneity of actual tumors, and have often drifted genetically from the original tumor over decades of passaging. Patient-derived organoids are grown from primary tumor tissue in Matrigel-based 3D cultures, maintaining patient-specific mutations, copy number alterations, and histological architecture. PDO drug response profiles show significantly better correlation with patient clinical responses than cell line-based predictions, supporting personalized oncology applications."
  },
  {
    id: 76,
    question: "CRISPR base editing, as opposed to traditional CRISPR-Cas9 cutting, achieves gene correction through:",
    options: [
      "Complete excision of the target gene",
      "Chemical conversion of one DNA base to another (e.g., C to T, or A to G) without creating double-strand DNA breaks, enabling precise point mutation correction",
      "Insertion of a corrected DNA template via homology-directed repair",
      "Transcriptional silencing of the target gene through epigenetic modification"
    ],
    answer: 1,
    explanation: "Base editors (developed by David Liu's lab) combine a catalytically impaired Cas9 (nickase) with a deaminase enzyme that chemically converts DNA bases: cytosine base editors (CBEs) convert C•G to T•A; adenine base editors (ABEs) convert A•T to G•C. Unlike traditional CRISPR-Cas9 which creates double-strand breaks (DSBs) — requiring HDR for precise correction (inefficient in most cells) — base editors achieve precise point mutation corrections without DSBs, improving precision and reducing off-target indels. Clinical trials for sickle cell disease using base editing are underway."
  },
  {
    id: 77,
    question: "The Genome India Project, launched by the Department of Biotechnology in 2020, aims to:",
    options: [
      "Create a public database of international human genomes for comparison with Indian genomes",
      "Sequence 10,000 whole genomes from individuals representing the diverse ethnic, linguistic, and geographic populations of India to build a reference haplotype panel for South Asian genomics",
      "Develop CRISPR-based therapies for common genetic disorders in India",
      "Sequence the genomes of all ICMR-funded research subjects"
    ],
    answer: 1,
    explanation: "The Genome India Project (GIP) is a mission to sequence 10,000 whole genomes from individuals representing India's immense genetic diversity across 83 population groups — spanning tribal, caste, geographic, and linguistic groups. India's population has ancient bottlenecks, founder effects, and extensive endogamy creating unique genetic architecture not represented in existing European-dominated reference databases (like the 1000 Genomes Project). The GIP aims to build a South Asian reference panel enabling better genome-wide association study imputation, pharmacogenomics, and population genetics research for Indian populations."
  },
  {
    id: 78,
    question: "Organs-on-chips (OoC) technology uses microfluidic devices to mimic human organ physiology. The key advantage over animal models in drug development is:",
    options: [
      "Lower manufacturing cost than animal facility maintenance",
      "Human cells in dynamic microfluidic environments recapitulate human organ-level responses more faithfully than animal models, addressing species differences in drug metabolism and toxicity",
      "OoC devices can completely replace all preclinical testing",
      "OoC devices enable higher-throughput screening than cell-free biochemical assays"
    ],
    answer: 1,
    explanation: "Organs-on-chips use living human cells cultured in microfluidic channels with physiologically relevant mechanical forces (fluid flow, cyclic stretch) to recapitulate organ function. The gut-on-chip (Wyss Institute, Ingber lab) replicates peristaltic motion, villus formation, and gut microbiome co-culture. OoC devices address a critical problem: ~90% of drugs that pass animal testing fail in human trials, often due to species differences in ADME/toxicology. Human liver-on-chip, lung-on-chip, and kidney-on-chip models predict human-specific toxicities not predicted by rodent studies."
  },
  {
    id: 79,
    question: "Epigenome-wide association studies (EWAS) examine DNA methylation patterns in relation to disease. A key challenge in EWAS is:",
    options: [
      "DNA methylation is not heritable and therefore irrelevant to disease",
      "Cell-type heterogeneity in bulk tissue samples — different cell types have distinct methylomes, and varying cell proportions between individuals or disease states can confound associations",
      "DNA methylation cannot be measured in blood samples",
      "EWAS require sample sizes smaller than GWAS and are therefore less statistically powered"
    ],
    answer: 1,
    explanation: "A major confounder in EWAS using bulk tissue (especially blood) is that different cell types (monocytes, T cells, B cells, granulocytes) have distinctly different methylation profiles. If disease cases have different blood cell compositions than controls (e.g., increased neutrophil-to-lymphocyte ratio in inflammation), apparent disease-associated methylation differences may simply reflect cellular composition differences, not true epigenetic changes. Statistical methods (e.g., Houseman algorithm, reference-based cell type deconvolution) are used to adjust for cell type proportions, but remain an active methodological challenge."
  },
  {
    id: 80,
    question: "Long-read sequencing technologies (Oxford Nanopore, PacBio HiFi) offer which key advantage over short-read Illumina sequencing?",
    options: [
      "Lower sequencing error rate per base than Illumina",
      "Ability to span repetitive regions, resolve structural variants, phase haplotypes, and detect base modifications (methylation) directly from native DNA, addressing limitations of short-read assembly",
      "Lower cost per gigabase for large-scale population studies",
      "Better compatibility with formalin-fixed paraffin-embedded (FFPE) tissue samples"
    ],
    answer: 1,
    explanation: "Short-read (Illumina) sequencing generates 150bp reads that cannot span long repetitive elements (LINE-1, SINEs, centromeres), making structural variant detection and de novo assembly difficult. Long-read technologies generate reads of 10-100kb+ (ONT) or 15-20kb HiFi reads (PacBio), enabling: complete assembly of repeat-rich regions (the first complete T2T human genome assembly required long reads), direct detection of DNA methylation from native bases (ONT), phasing of distant variants on the same chromosome, and resolution of complex structural variants causing genetic disease."
  },

  // Questions 81-86: Microbiology
  {
    id: 81,
    question: "Phage therapy for antibiotic-resistant bacterial infections works through which mechanism?",
    options: [
      "Bacteriophages trigger the bacterial SOS response, leading to antibiotic sensitization",
      "Lytic bacteriophages infect specific bacterial hosts, replicate within them, and lyse the bacterial cells, releasing progeny phages that continue to kill bacterial cells in situ",
      "Phages produce antibiotic compounds that kill surrounding bacteria",
      "Phages integrate into bacterial genomes and permanently silence virulence genes"
    ],
    answer: 1,
    explanation: "Lytic phage therapy uses bacteriophages (viruses that infect bacteria) that recognize specific bacterial surface receptors, inject DNA, hijack bacterial machinery, replicate, and ultimately lyse the host cell, releasing 50-200 new phages that can infect neighboring bacteria. The high host specificity (often strain-level) is both an advantage (sparing microbiome) and challenge (requiring precise bacterial typing before therapy). Successful cases include the UC San Diego compassionate use program treating phage-sensitive MDR Acinetobacter baumannii infections. Phage cocktails and synthetic biology-engineered phages are advancing the field."
  },
  {
    id: 82,
    question: "Rapid antibiotic susceptibility testing (AST) using microfluidics and single-cell imaging can provide results in:",
    options: [
      "5-7 days, similar to standard broth microdilution",
      "30 minutes to 4 hours from positive blood culture, compared to 24-48 hours for conventional methods",
      "Exactly 12 hours in all settings",
      "Results are not reproducible enough for clinical use"
    ],
    answer: 1,
    explanation: "Conventional AST requires overnight culture (16-20 hours for MIC testing after 24 hours of blood culture = total 48+ hours from blood draw). Microfluidic rapid AST platforms (e.g., QuickMIC, LifeScale) observe individual bacterial growth under antibiotic exposure using imaging and mass-based detection in 30 minutes to 4 hours after positive blood culture flagging. This can accelerate appropriate antibiotic selection for bacteremia by 1-2 days, during which time empirical broad-spectrum antibiotics may be given unnecessarily. Faster AST is a major priority in antimicrobial stewardship."
  },
  {
    id: 83,
    question: "CRISPR-Cas antimicrobials (CRISPR-based antimicrobials) work by:",
    options: [
      "Using CRISPR to edit the human immune system to better fight bacteria",
      "Delivering programmable CRISPR-Cas nucleases (e.g., via phagemids or phages) that target and cut specific bacterial genomic sequences or resistance gene sequences, killing bacteria or sensitizing them to antibiotics",
      "Screening CRISPR libraries to identify new antibiotic drug targets",
      "Inhibiting CRISPR-Cas systems within bacteria to prevent them from acquiring phage resistance"
    ],
    answer: 1,
    explanation: "CRISPR antimicrobials use phage or nanoparticle delivery systems to introduce CRISPR-Cas nucleases programmed to cut specific sequences in bacterial genomes (essential genes) or resistance plasmids. Bacteria lacking non-homologous end joining (NHEJ) repair — like most gram-negative bacteria — cannot repair DSBs and die. This approach can be highly specific (targeting only the pathogen with specific sequences, sparing commensals), programmable (easily re-targeted to new bacteria), and can target resistance genes (sensitizing MDR bacteria back to antibiotic treatment). First clinical trials are in exploratory phases."
  },
  {
    id: 84,
    question: "Oxford Nanopore Technologies (ONT) sequencing was used for real-time genomic surveillance during the West African Ebola outbreak (2014-2016) through the ARTIC network. The key operational advantage was:",
    options: [
      "Lower cost than conventional Sanger sequencing for individual samples",
      "Portability and rapid turnaround — sequencers the size of a USB drive enabled in-country, near-patient sequencing within hours, avoiding weeks-long delays from shipping samples to reference labs",
      "Higher accuracy than PacBio SMRT sequencing",
      "Ability to sequence DNA without prior extraction"
    ],
    answer: 1,
    explanation: "Oxford Nanopore's MinION sequencer weighs 90g and fits in a pocket, enabling sequencing in mobile field laboratories without cold chain requirements for key reagents. During the 2014-2016 Ebola outbreak, this allowed sequencing in Guinea/Sierra Leone within 24-48 hours of sample collection, enabling real-time identification of transmission chains and imported cases. This was transformative — previously, samples required weeks of shipping to European reference labs. The ARTIC network subsequently established protocols for rapid nanopore sequencing of respiratory viruses (SARS-CoV-2, influenza) in outbreak settings."
  },
  {
    id: 85,
    question: "The MCR-1 gene, first described in China in 2015, encodes resistance to which last-resort antibiotic class and is of global concern because:",
    options: [
      "Beta-lactam antibiotics; it is carried on chromosomal DNA",
      "Colistin (polymyxin), a last-resort antibiotic for MDR gram-negative infections; MCR-1 is plasmid-mediated and horizontally transferable across bacterial species, threatening pan-drug resistance scenarios",
      "Carbapenems; it produces a metallo-beta-lactamase",
      "Glycopeptides (vancomycin); it modifies cell wall peptidoglycan precursors"
    ],
    answer: 1,
    explanation: "MCR-1 (mobile colistin resistance-1) encodes a phosphoethanolamine transferase that modifies lipid A in the outer membrane, reducing colistin binding and conferring resistance to colistin — often the last effective antibiotic for carbapenem-resistant Enterobacteriaceae (CRE) and carbapenem-resistant Acinetobacter/Pseudomonas. Critically, MCR-1 is carried on conjugative plasmids that can transfer between bacterial genera (E. coli, Klebsiella, Salmonella, Pseudomonas), raising fears of pan-drug resistant gram-negative bacteria. MCR-1 has since been detected in >50 countries across human, animal, and environmental samples."
  },
  {
    id: 86,
    question: "The ESKAPE pathogens (Enterococcus faecium, Staphylococcus aureus, Klebsiella pneumoniae, Acinetobacter baumannii, Pseudomonas aeruginosa, Enterobacter species) are clinically significant primarily because:",
    options: [
      "They exclusively cause community-acquired infections",
      "They are the leading causes of hospital-acquired infections and have high rates of multidrug resistance, making treatment extremely challenging and driving antibiotic stewardship priorities",
      "They are all gram-positive organisms with similar resistance mechanisms",
      "They only cause infections in immunocompetent patients"
    ],
    answer: 1,
    explanation: "ESKAPE pathogens are the leading causes of nosocomial (healthcare-associated) infections globally and are characterized by extensive antimicrobial resistance, including MRSA (S. aureus), VRE (E. faecium), ESBL and carbapenemase-producing Klebsiella and Enterobacter, MDR/XDR Pseudomonas and Acinetobacter. The ESKAPE acronym (coined by Rice, 2008) highlights that these pathogens effectively 'escape' the bactericidal action of antibiotics. They are the primary focus of WHO's global priority pathogen list (2017) and antibiotic development pipelines. ESKAPE infections have high attributable mortality (15-50% for carbapenem-resistant strains)."
  },

  // Questions 87-93: English/Critical Reasoning
  {
    id: 87,
    question: "Read the argument: 'All peer-reviewed studies showing no harm from mobile phone radiation were funded by telecommunications companies. Therefore, mobile phone radiation is harmful.' What is the primary logical flaw in this argument?",
    options: [
      "It provides too much statistical evidence for its conclusion",
      "It commits the genetic fallacy — dismissing evidence based on its source rather than evaluating the content and quality of the evidence itself, and also assumes that absence of industry-funded positive evidence implies harm",
      "It relies on a valid causal mechanism for radiation harm",
      "It correctly applies the principle of conflict of interest to overturn scientific consensus"
    ],
    answer: 1,
    explanation: "The genetic fallacy occurs when an argument's validity is judged by its origin rather than its logical content. While funding source is a legitimate consideration for bias, dismissing all industry-funded evidence without evaluating methodological quality commits this fallacy. Additionally, the argument makes a leap: 'industry-funded studies show no harm' does not imply 'harm exists' — there may be independent studies also showing no harm, or the biological mechanism may not support harm at typical exposure levels. This argument also potentially commits an informal fallacy of incomplete evidence."
  },
  {
    id: 88,
    question: "Passage: 'Countries that implemented early school closures during the COVID-19 pandemic saw lower transmission rates in the 6 weeks following closure. Therefore, school closures were the cause of reduced transmission.' The weakest point in this causal argument is:",
    options: [
      "The observation period of 6 weeks is too long",
      "Confounding — school closures occurred simultaneously with other interventions (lockdowns, business closures, mask mandates), making it impossible to isolate the effect of school closures alone from observational data",
      "The argument correctly establishes causation through temporal precedence",
      "Transmission rate is not a valid epidemiological measure"
    ],
    answer: 1,
    explanation: "Establishing causation requires more than temporal association and correlation. In this case, school closures were almost universally implemented as part of broader public health packages — simultaneously with business closures, stay-at-home orders, mask mandates, and travel restrictions. Without a counterfactual (countries that closed schools but did nothing else), the contribution of school closures specifically cannot be separated from the package of interventions. This is a classic confounding/multiple simultaneous interventions problem in observational epidemiology."
  },
  {
    id: 89,
    question: "Which of the following best identifies the ASSUMPTION underlying this argument: 'We should not fund research into potential benefits of cannabis because it sends the wrong message to young people about drug use.'",
    options: [
      "Cannabis has no potential medical benefits",
      "The primary purpose of scientific research funding decisions should be messaging to young people, rather than the potential scientific and medical merit of the research",
      "Young people would not learn about cannabis through any other channel",
      "All drug research is equally likely to influence youth drug use behavior"
    ],
    answer: 1,
    explanation: "The hidden assumption is that funding research decisions should be governed by their messaging effects on youth rather than scientific merit, public health need, or evidence quality. This assumption conflates the purpose of scientific research (generating knowledge) with the purpose of public health messaging (influencing behavior). Identifying this assumption exposes a category error: using considerations appropriate to social policy communication to determine scientific funding — which is distinct from whether cannabis is medically promising or whether youth messaging is important."
  },
  {
    id: 90,
    question: "Which of the following, if true, would most WEAKEN the argument: 'A randomized trial showed Drug X reduces 30-day mortality by 20% (RR=0.80, p=0.03). Drug X should be adopted as standard of care for this condition.'",
    options: [
      "The trial was published in a peer-reviewed journal with high impact factor",
      "The trial had a fragility index of 1, meaning only one event change would make the result non-significant, and had significant unexplained heterogeneity across 3 pre-specified subgroups",
      "The drug is already available as a generic formulation",
      "The trial enrolled patients from multiple countries"
    ],
    answer: 1,
    explanation: "A fragility index of 1 reveals that the statistically significant result depends on a single event — if one patient in the treatment arm had died instead of survived, p>0.05 and the conclusion would reverse. This substantially weakens the clinical evidence base for broad adoption. Compounded by significant unexplained heterogeneity across subgroups (suggesting the drug may harm some subgroups and benefit others), the case for universal standard-of-care adoption becomes very weak. The argument requires more robust, reproducible evidence before practice change."
  },
  {
    id: 91,
    question: "Identify the type of reasoning error: 'Our hospital adopted Protocol A for sepsis management in 2019. Sepsis mortality decreased by 15% in 2020. Therefore, Protocol A caused the mortality reduction.'",
    options: [
      "False dichotomy",
      "Post hoc ergo propter hoc (after this, therefore because of this) — assuming temporal succession implies causation without ruling out alternative explanations",
      "Circular reasoning",
      "Hasty generalization"
    ],
    answer: 1,
    explanation: "Post hoc ergo propter hoc ('after this, therefore because of this') is the fallacy of inferring causation from temporal sequence alone. The 2020 mortality improvement could reflect: (1) Hawthorne effect from increased clinical attention during protocol implementation, (2) concurrent improvements in antibiotic stewardship, fluid management, or ICU staffing, (3) secular trends in sepsis outcomes, (4) changes in case mix or diagnosis coding, or (5) chance variation. Without a concurrent control group or interrupted time series design with plausible controls, causation cannot be established."
  },
  {
    id: 92,
    question: "A research paper concludes: 'Since our survey found that 78% of physicians report feeling burned out, the healthcare system is failing its doctors.' The argument would be STRENGTHENED most by which additional evidence?",
    options: [
      "A survey of nurses showing similar burnout prevalence in other professions",
      "Validated measurement of burnout using a standardized tool (e.g., Maslach Burnout Inventory) with demonstrated psychometric properties, longitudinal data showing worsening burnout trends, and evidence linking burnout to systemic organizational factors rather than individual physician characteristics",
      "Higher burnout rates in the same survey among physicians with longer working hours",
      "Comparison data showing burnout is lower in other countries"
    ],
    answer: 1,
    explanation: "The original argument has multiple weaknesses: (1) self-reported 'feeling burned out' lacks precision — burnout is a multi-dimensional syndrome requiring validated measurement; (2) a cross-sectional survey cannot establish whether the system is 'failing' without historical comparison; (3) attribution to 'healthcare system failure' requires ruling out individual-level explanations. Validated tools (MBI), longitudinal trend data, and evidence linking burnout to specific organizational factors (staffing ratios, EHR burden, autonomy) would collectively strengthen the causal claim about systemic failure."
  },
  {
    id: 93,
    question: "In the following argument, identify the logical structure: 'If vaccination rates fall below 95%, measles outbreaks will occur. Measles outbreaks are occurring in several districts. Therefore, vaccination rates in those districts have fallen below 95%.' This is an example of:",
    options: [
      "Modus ponens (affirming the antecedent)",
      "Affirming the consequent — a formal logical fallacy where observing the consequent (outbreaks) is used to infer the antecedent (low vaccination rates), which is invalid because outbreaks could have other causes",
      "Modus tollens (denying the consequent)",
      "A valid hypothetical syllogism"
    ],
    answer: 1,
    explanation: "The argument has the form: If P (low vaccination) then Q (outbreaks); Q is true; therefore P is true — this is affirming the consequent, a formal logical fallacy. The conclusion does not necessarily follow because Q (outbreaks) could result from other causes: introduction of a new variant evading vaccine immunity, waning immunity in previously vaccinated cohorts, or clustering of unvaccinated individuals even at overall 95% coverage (due to geographic clustering). Valid reasoning from Q being true would be: 'low vaccination rates are one possible explanation' — not 'low vaccination rates are the definite cause.'"
  },

  // Questions 94-100: General Knowledge
  {
    id: 94,
    question: "The National One Health Mission in India, piloted in 5 states in 2021, primarily integrates which sectors?",
    options: [
      "Agriculture and food security only",
      "Human health (MoHFW), animal health (DAH&D), and environmental/wildlife health (MoEFCC), with collaboration across sectors for zoonotic disease prevention and AMR control",
      "Human health and water sanitation only",
      "Defense health services and civilian health infrastructure"
    ],
    answer: 1,
    explanation: "India's National One Health Mission operationalizes the One Health framework by establishing coordinated surveillance and response mechanisms across the Ministry of Health and Family Welfare (human health), the Department of Animal Husbandry, Dairying and Fisheries (animal health), and the Ministry of Environment, Forest and Climate Change (wildlife/environmental health). The five pilot states were Assam, Uttarakhand, Tripura, Himachal Pradesh, and Odisha. The mission prioritizes zoonotic diseases, food safety, antimicrobial resistance, and pandemic preparedness with a One Health lens."
  },
  {
    id: 95,
    question: "The Anusandhan National Research Foundation (ANRF), established under the ANRF Act 2023, is modelled on which primary objective?",
    options: [
      "Replacing the Department of Science and Technology entirely",
      "Seeding, growing, and promoting research and development and fostering a culture of research and innovation throughout India's universities, colleges, research institutions, and R&D laboratories",
      "Exclusively funding defense and space research",
      "Providing research visas for international scientists to conduct research in India"
    ],
    answer: 1,
    explanation: "The Anusandhan National Research Foundation (formerly National Research Foundation) was established through the ANRF Act, 2023 with a projected outlay of Rs. 50,000 crore over 5 years (2023-2028), with 70% from the private sector. It is modelled on the US National Science Foundation and aims to seed and grow research culture across all scientific disciplines in India — especially in universities and institutions previously lacking research funding — while also fostering industry-academia partnerships. ANRF subsumes the Science and Engineering Research Board (SERB)."
  },
  {
    id: 96,
    question: "The ICMR National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017) differ from the 2006 guidelines primarily by:",
    options: [
      "Removing the requirement for informed consent in all research",
      "Incorporating updated guidance on emerging research areas including social science research, biobanks and biological materials, research involving children and pregnant women, stem cell research, research in disasters, and use of electronic data",
      "Restricting all international collaborative research in India",
      "Eliminating the role of Institutional Ethics Committees"
    ],
    answer: 1,
    explanation: "The 2017 ICMR guidelines significantly expanded coverage beyond the 2006 version to address: biobanking and biological material storage, social science and behavioral research, research involving electronic health data and big data, stem cell research ethics, research during public health emergencies and disasters, research on vulnerable populations (tribal communities, prisoners), and updated provisions for international collaborative research (data/sample sharing). The 2017 document also provided clearer guidance on waiver of consent, community consent, and compensation for research-related injury."
  },
  {
    id: 97,
    question: "The Genome India Project's significance for pharmacogenomics in India lies in:",
    options: [
      "Enabling Indian patients to access global genomic databases designed for European populations",
      "Characterizing population-specific variants in drug-metabolizing enzyme genes (CYP450 family, UGT enzymes, transporters) that differ in frequency from European populations, enabling development of India-specific pharmacogenomic guidelines",
      "Providing free whole-genome sequencing to all patients starting chemotherapy",
      "Replacing genetic testing with AI-based phenotyping for drug dosing decisions"
    ],
    answer: 1,
    explanation: "Indian populations have distinct allele frequencies in pharmacogenes — for example, CYP2C19 poor metabolizer frequency, CYP2D6 variant distribution, and TPMT variants differ markedly between South Asian and European populations. Current pharmacogenomic guidelines (CPIC, DPWG) are largely derived from European and East Asian populations, potentially leading to suboptimal drug dosing in Indian patients. GIP data will enable characterization of Indian population-specific pharmacogenomic variants, supporting India-specific therapeutic guidelines for antidepressants, anticoagulants, antiretrovirals, and cancer chemotherapy."
  },
  {
    id: 98,
    question: "PM Ayushman Bharat — Health and Wellness Centres (AB-HWCs), a component of Ayushman Bharat, aim to deliver which expanded package of services at the sub-health centre level?",
    options: [
      "Tertiary care services including CT scans and cardiac catheterization",
      "Comprehensive primary healthcare including prevention, promotion, and curative care for NCDs (hypertension, diabetes, cancer screening), maternal and child health, mental health, oral health, ophthalmology, ENT, palliative care, and emergency services",
      "Exclusively maternal and child health services",
      "Only outpatient consultations for communicable diseases"
    ],
    answer: 1,
    explanation: "AB-HWCs (now rebranded as Ayushman Arogya Mandirs) transform sub-health centres and primary health centres into comprehensive primary healthcare facilities delivering 12 expanded service packages: care in pregnancy and childbirth, neonatal and infant health, child health, adolescent health, family planning, communicable diseases, NCDs (HTN, DM, 3 common cancers), mental health, oral health, ophthalmology, ENT, and geriatric/palliative care. The target was 1.5 lakh HWCs by 2022; 1.6 lakh were reported as functional by 2023. They are staffed by ASHA, ANM, and a community health officer (CHO)."
  },
  {
    id: 99,
    question: "The Indian Brain Health Initiative (IBHI) was established with which primary scientific mandate?",
    options: [
      "Training neurosurgeons for tier-2 and tier-3 cities",
      "Creating an atlas of the Indian brain — mapping structural, functional, and connectomic features in healthy Indians across the lifespan, establishing Indian normative data distinct from existing Western neuroimaging atlases",
      "Developing new antipsychotic drugs for the Indian market",
      "Managing rehabilitation services for traumatic brain injury"
    ],
    answer: 1,
    explanation: "The Indian Brain Health Initiative (IBHI), supported by ICMR and DBT, aims to create a large-scale normative neuroimaging database of structurally and functionally healthy Indian brains across the lifespan — generating Indian-specific MRI atlases and normative data for brain morphology, white matter connectivity, and functional connectivity. Most existing brain atlases are derived from Western (predominantly European-American) populations, which differ from Indian populations in cranial morphology, brain size, and potentially network organization. Indian normative data are essential for accurate clinical diagnosis of neurological and psychiatric conditions in Indian patients."
  },
  {
    id: 100,
    question: "The National Health Policy 2017 of India set targets to increase government health expenditure to what proportion of GDP, and what specific health outcome targets were included?",
    options: [
      "2.5% of GDP; reducing under-5 mortality to <23/1000 LB by 2025 and achieving 90% immunization coverage",
      "2.5% of GDP by 2025; reducing under-5 mortality to ≤23/1000 LB, MMR to ≤100/100,000, and infant mortality to ≤28/1000 LB, and elimination of leprosy and kala-azar",
      "5% of GDP by 2030; eliminating all infectious diseases and achieving universal health coverage",
      "1% of GDP by 2020; focusing exclusively on maternal mortality reduction"
    ],
    answer: 1,
    explanation: "National Health Policy 2017 set a target of raising government health expenditure to 2.5% of GDP by 2025 (from ~1.15% at the time of policy adoption). Specific outcome targets included: reducing U5MR to ≤23/1000 live births, IMR to ≤28/1000 LB, MMR to ≤100/100,000 LB, total fertility rate to 2.1, and eliminating leprosy by 2018, kala-azar by 2017, and lymphatic filariasis by 2017. The policy also aimed to reduce premature NCD mortality by 25% by 2025 and achieve 90/90 coverage for TB (diagnosis, treatment, cure). India's health expenditure reached approximately 1.84% of GDP by 2021-22."
  }
];

export default questions;

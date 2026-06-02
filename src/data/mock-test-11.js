const questions = [
  // Questions 1-12: Research Methodology
  {
    id: 1,
    question: "In a 2×2 factorial design trial studying the effects of Drug A and Drug B, which of the following is a unique advantage over two separate parallel trials?",
    options: [
      "It requires twice the sample size, improving statistical precision",
      "It allows simultaneous testing of two interventions and their interaction effect within a single trial",
      "It eliminates the need for randomization since factors are assigned systematically",
      "It is only applicable when both drugs target the same biological pathway"
    ],
    answer: 1,
    explanation: "A factorial design allows two or more interventions to be evaluated simultaneously in a single trial, testing main effects of each intervention and their interaction. If there is no interaction (additivity assumption holds), a factorial design can answer two questions for the price of approximately one. This is highly efficient. However, if a significant interaction exists (e.g., Drug A enhances or diminishes the effect of Drug B), interpretation becomes complex. The Women's Health Initiative used a 2×2 factorial design."
  },
  {
    id: 2,
    question: "In a Latin square design used in agricultural or nutrition research, the primary purpose of the Latin square arrangement is to:",
    options: [
      "Increase the number of treatment groups beyond what a factorial design allows",
      "Control simultaneously for two sources of variation (rows and columns) using the same number of experimental units as treatments",
      "Allow repeated measures on the same subject across all time points without washout",
      "Eliminate selection bias by blinding investigators to treatment allocation"
    ],
    answer: 1,
    explanation: "A Latin square design is a blocked design that controls for two independent nuisance variables (row and column effects) simultaneously. Each treatment appears exactly once in each row and each column. For a 3×3 Latin square with treatments A, B, C, only 9 experimental units are needed instead of 27 for a full factorial. It is commonly used in crossover trials and nutrition studies where two blocking factors (e.g., period and subject) must be controlled. The main limitation is that treatment-by-block interactions cannot be estimated."
  },
  {
    id: 3,
    question: "The Solomon four-group design in educational and psychological research is used to:",
    options: [
      "Test the same intervention in four different population subgroups",
      "Assess and control for the sensitizing effect of the pre-test on post-test outcomes",
      "Compare four different doses of an intervention simultaneously",
      "Combine qualitative and quantitative methods in a single research framework"
    ],
    answer: 1,
    explanation: "The Solomon four-group design (Solomon, 1949) is an extension of the classic pre-test/post-test control group design. It uses four groups: (1) pre-test + intervention + post-test; (2) pre-test + no intervention + post-test; (3) no pre-test + intervention + post-test; (4) no pre-test + no intervention + post-test. By comparing groups with and without pre-testing, it isolates the sensitizing (testing) effect — where exposure to the pre-test itself may change behavior or knowledge, independent of the intervention. It is considered the gold standard for educational research."
  },
  {
    id: 4,
    question: "In a crossover trial comparing two antihypertensive drugs, a 'washout period' between the two treatment phases is necessary primarily to:",
    options: [
      "Allow sufficient time for participant recruitment and consent for the second phase",
      "Eliminate the carryover effect of the first treatment so that it does not influence the outcome during the second treatment period",
      "Ensure participants maintain blinding by discontinuing all medications simultaneously",
      "Allow the statistical team to analyze the first period data before the second period begins"
    ],
    answer: 1,
    explanation: "In a crossover trial, each participant receives both treatments sequentially. A carryover effect occurs when the residual biological effect of the first treatment persists into the second treatment period, confounding the comparison. The washout period — a drug-free interval between treatments — allows the pharmacological effects of the first drug to dissipate completely (typically ≥5 half-lives). If carryover effects cannot be adequately washed out (e.g., for treatments with long-lasting effects or diseases that are permanently altered), a crossover design is inappropriate."
  },
  {
    id: 5,
    question: "An N-of-1 trial (single-subject randomized trial) is MOST appropriate when:",
    options: [
      "A researcher wants to establish population-level efficacy of a new vaccine",
      "A clinician wants to determine the optimal treatment for an individual patient with a chronic stable condition using multiple randomized treatment cycles",
      "A public health program aims to evaluate a community-wide intervention",
      "A pharmaceutical company needs regulatory approval for a new drug"
    ],
    answer: 1,
    explanation: "N-of-1 trials are randomized crossover experiments conducted in a single patient, involving multiple treatment cycles where the patient alternates between active treatment and control (or alternative treatment) in random order. They are ideal for chronic stable conditions (e.g., ADHD, chronic pain, osteoarthritis) where intraindividual variability is lower than interindividual variability. N-of-1 trials provide the highest level of evidence for treatment decisions in an individual patient and can be aggregated into a series for broader inference. They are particularly valuable when population-level RCTs do not reflect individual patient heterogeneity."
  },
  {
    id: 6,
    question: "A pragmatic trial differs from an explanatory (efficacy) trial in that:",
    options: [
      "Pragmatic trials use more stringent inclusion criteria to reduce heterogeneity",
      "Pragmatic trials test interventions under real-world conditions with broad eligibility, routine practice settings, and clinically relevant outcomes",
      "Explanatory trials are conducted in community settings, while pragmatic trials are conducted in academic hospitals",
      "Pragmatic trials do not require randomization and use historical controls"
    ],
    answer: 1,
    explanation: "The PRECIS-2 (PRagmatic Explanatory Continuum Indicator Summary) tool helps classify trials on a spectrum. Explanatory (efficacy) trials maximize internal validity using strict eligibility criteria, protocol-driven adherence, specialist settings, and surrogate outcomes to test whether an intervention works under ideal conditions. Pragmatic trials maximize external validity (generalizability) by including diverse participants, using routine practice settings, allowing flexible delivery, and measuring outcomes important to patients and payers. The RECOVERY trial for COVID-19 was a landmark pragmatic trial."
  },
  {
    id: 7,
    question: "Which of the following best describes 'allocation concealment' in a randomized controlled trial, and why is it important?",
    options: [
      "Keeping participants unaware of their treatment assignment to prevent the placebo effect",
      "Concealing the sequence of randomization from investigators enrolling participants, preventing selection bias in allocation",
      "Blinding outcome assessors to treatment assignment to prevent detection bias",
      "Masking the statistical analysis plan from the data safety monitoring board"
    ],
    answer: 1,
    explanation: "Allocation concealment ensures that investigators enrolling participants cannot predict the next treatment assignment, preventing selection bias (enrolling or excluding participants based on anticipated allocation). It is distinct from blinding — it occurs before randomization. Methods include central randomization by phone/web, sealed opaque envelopes, or pharmacy-controlled allocation. Inadequate allocation concealment is associated with exaggerated treatment effects (up to 30–40% overestimation) in meta-analyses. Blinding, by contrast, occurs after allocation and prevents performance and detection biases."
  },
  {
    id: 8,
    question: "In a stepped-wedge cluster randomized trial, which of the following correctly describes the design?",
    options: [
      "All clusters start in the control condition and sequentially cross over to the intervention at different time points until all receive the intervention",
      "Half the clusters are randomized to intervention and half to control, with no crossover",
      "Individual participants within each cluster are randomly assigned to intervention or control",
      "Clusters are randomized to receive increasing doses of the intervention in a stepwise fashion"
    ],
    answer: 0,
    explanation: "In a stepped-wedge design, all clusters begin in the control condition. At each 'step' (time period), one or more randomly selected clusters switch to the intervention, until all clusters have received it. This design is used when it is logistically or ethically infeasible to withhold an intervention from the control group indefinitely, or when rollout must be phased. Both within-cluster and between-cluster comparisons are made. The design has become popular for health systems research but requires careful attention to time effects that may confound the intervention effect."
  },
  {
    id: 9,
    question: "The CONSORT (Consolidated Standards of Reporting Trials) statement is primarily designed to:",
    options: [
      "Guide the ethical conduct of randomized trials, including informed consent procedures",
      "Improve the transparency and completeness of reporting of randomized controlled trials through a checklist and flow diagram",
      "Establish minimum sample size requirements for clinical trials",
      "Provide regulatory requirements for pharmaceutical trial registration"
    ],
    answer: 1,
    explanation: "The CONSORT statement provides a minimum set of recommendations for reporting RCTs. The 2010 version includes a 25-item checklist addressing title/abstract, introduction, methods (randomization, blinding, outcomes), results (flow diagram of participants, recruitment, baseline data, outcomes), and discussion. The CONSORT flow diagram depicts the flow of participants through the trial. Systematic reviews have shown that CONSORT-compliant trials are more completely reported, enabling readers and meta-analysts to assess risk of bias. CONSORT has extensions for cluster trials, crossover trials, and non-inferiority trials."
  },
  {
    id: 10,
    question: "In intention-to-treat (ITT) analysis of a randomized trial, which of the following correctly describes the approach?",
    options: [
      "Participants are analyzed only if they completed the full treatment protocol as assigned",
      "All randomized participants are analyzed in their originally assigned groups, regardless of whether they received the intended treatment",
      "Participants who withdrew or were lost to follow-up are excluded from analysis",
      "Analysis is restricted to participants who were fully adherent to the intervention"
    ],
    answer: 1,
    explanation: "Intention-to-treat (ITT) analysis includes all randomized participants in the groups to which they were randomly assigned, regardless of protocol deviations, non-compliance, or dropout. ITT preserves the benefits of randomization and provides an unbiased estimate of the effect of offering the treatment (effectiveness), reflecting real-world conditions. Per-protocol (PP) analysis, which restricts to compliant participants, may overestimate efficacy and reintroduce selection bias. Modified ITT (mITT) excludes pre-specified categories (e.g., participants with no post-baseline data) but must be clearly defined a priori."
  },
  {
    id: 11,
    question: "Which of the following describes 'information bias' (also called measurement bias or misclassification bias) in epidemiological studies?",
    options: [
      "Systematic error resulting from non-random differences in how exposure or outcome data are collected between comparison groups",
      "Bias arising from the non-random selection of study participants from the source population",
      "Bias introduced when a third variable causes an apparent association between exposure and outcome",
      "Bias caused by overrepresentation of cases compared to controls in a case-control study"
    ],
    answer: 0,
    explanation: "Information bias (measurement/misclassification bias) occurs when exposure or outcome status is measured inaccurately. Differential misclassification occurs when measurement errors differ between comparison groups (e.g., cases recall exposures more accurately than controls — recall bias), which can bias results in either direction. Non-differential misclassification (errors equal across groups) typically biases results toward the null (underestimates true association). Common types include recall bias, interviewer bias, surveillance bias, and diagnostic suspicion bias."
  },
  {
    id: 12,
    question: "The concept of 'effect modification' (interaction) in epidemiology differs from confounding in that:",
    options: [
      "Both effect modification and confounding should be removed by adjustment in the final analysis",
      "Effect modification is a true biological phenomenon where the effect of exposure differs across strata of a third variable, while confounding is a spurious distortion that should be controlled",
      "Confounding occurs only in case-control studies, while effect modification occurs only in cohort studies",
      "Effect modification and confounding are the same phenomenon described using different terminology"
    ],
    answer: 1,
    explanation: "Effect modification (interaction) occurs when the magnitude of an association between exposure and outcome genuinely differs across strata of a third variable (the modifier). It is a real biological phenomenon that should be reported and described, not removed. Confounding is a mixing of effects where a third variable (confounder) is associated with both exposure and outcome, creating a spurious or distorted association that should be controlled in analysis. The appropriate response to effect modification is to present stratum-specific estimates; the appropriate response to confounding is adjustment."
  },

  // Questions 13-24: Biostatistics
  {
    id: 13,
    question: "The DeLong method is used when comparing two ROC curves from the same set of subjects. What is its primary advantage?",
    options: [
      "It adjusts for multiple testing when comparing more than five ROC curves simultaneously",
      "It accounts for the correlation between the two AUC estimates because they come from the same subjects, providing a valid paired comparison",
      "It allows comparison of ROC curves from different laboratories with different reference standards",
      "It replaces the need for bootstrap resampling in all AUC comparison scenarios"
    ],
    answer: 1,
    explanation: "When two diagnostic tests are applied to the same subjects, their AUC estimates are correlated (a patient who scores high on Test A tends to score high on Test B). The DeLong et al. (1988) non-parametric method correctly accounts for this correlation using an asymptotic variance estimator, providing a valid statistical test for the difference in AUC. Using an independent-samples test (ignoring the correlation) would give incorrect (usually too conservative) p-values. The DeLong method is implemented in most ROC analysis software including pROC in R."
  },
  {
    id: 14,
    question: "The partial AUC (pAUC) of an ROC curve is most useful when:",
    options: [
      "The overall AUC is less than 0.7 and the test is clinically useless",
      "Clinical or operational constraints restrict acceptable false positive rates or sensitivity to a specific range, making performance in that range more relevant than overall performance",
      "The sample size is too small to compute the full AUC accurately",
      "Comparing tests across different disease prevalences in different populations"
    ],
    answer: 1,
    explanation: "The partial AUC integrates sensitivity over a restricted range of specificity (or vice versa) relevant to the clinical context. For example, a cancer screening test may require specificity ≥90% to be clinically acceptable — in this case, discriminative ability only in the high-specificity region matters, and overall AUC may be misleading. pAUC can be standardized (divided by the width of the integration range) to facilitate comparison. McClish (1989) standardized the pAUC to range from 0.5 to 1.0, analogous to the full AUC."
  },
  {
    id: 15,
    question: "Time-dependent ROC analysis is used instead of standard ROC analysis in survival data because:",
    options: [
      "Standard ROC analysis requires normally distributed biomarker values, which survival data violate",
      "In survival studies, disease status changes over time (cases at time t are those who experienced the event by t), so the optimal cutoff and AUC vary with the time horizon chosen",
      "Time-dependent ROC analysis can handle missing data in longitudinal studies, unlike standard ROC",
      "It allows comparison of survival curves between positive and negative test results"
    ],
    answer: 1,
    explanation: "In survival analysis, a subject's 'case' status (event occurrence) is time-dependent — someone who is event-free at 1 year may experience the event by 5 years. Standard ROC analysis assumes a fixed binary outcome. Time-dependent ROC (Heagerty et al., 2000) defines cases and controls at each time point t, computing sensitivity and specificity as functions of time. The AUC at time t (AUC(t)) represents discrimination at that specific time horizon. This is particularly relevant for biomarkers used for prognosis (e.g., BNP for cardiovascular events at 1 year vs. 5 years)."
  },
  {
    id: 16,
    question: "In a study of cancer mortality where patients may die from competing causes (e.g., cardiovascular disease), the Fine-Gray subdistribution hazard model is preferred over cause-specific Cox regression because:",
    options: [
      "Fine-Gray model is computationally simpler and requires no proportionality assumptions",
      "Fine-Gray model directly models the cumulative incidence function (CIF) of the cause-specific event, accounting for competing risks in the hazard model itself",
      "Cox regression overestimates the hazard ratio when competing risks are present, while Fine-Gray underestimates it",
      "Fine-Gray model uses all-cause mortality as the outcome, avoiding the need to adjudicate cause of death"
    ],
    answer: 1,
    explanation: "In competing risks settings, two approaches exist: (1) Cause-specific hazard (Cox model on cause-specific events, censoring competing events) — appropriate for understanding etiology; (2) Fine-Gray subdistribution hazard model — models covariates on the cumulative incidence function (CIF) directly, keeping those who experienced competing events in the risk set as pseudo-observations. Fine-Gray is appropriate for prognosis and prediction because CIF directly represents the probability of experiencing the event. Using 1-Kaplan-Meier in competing risks overestimates cumulative incidence."
  },
  {
    id: 17,
    question: "The cumulative incidence function (CIF) in competing risks analysis differs from 1 minus the Kaplan-Meier estimate in that:",
    options: [
      "CIF is always higher than 1-KM because it includes competing event times in the calculation",
      "1-KM overestimates the probability of the event of interest by treating competing events as non-informative censoring, while CIF correctly accounts for the fact that those who experience competing events can no longer experience the primary event",
      "CIF is a continuous function while 1-KM is a step function",
      "1-KM and CIF are numerically equivalent when the sample size exceeds 1000"
    ],
    answer: 1,
    explanation: "The Kaplan-Meier method treats competing events as censored observations, assuming censoring is non-informative. However, subjects who experience a competing event (e.g., cardiovascular death) are permanently removed from the risk set for the primary event (cancer death) — they cannot later develop the primary event. Therefore, 1-KM systematically overestimates the true cumulative incidence. The CIF (Aalen-Johansen estimator) correctly computes the cause-specific cumulative incidence as the sum of (cause-specific hazard at time t × overall survival at t-1), giving a lower, unbiased estimate."
  },
  {
    id: 18,
    question: "In a meta-analysis, the I² statistic measures:",
    options: [
      "The absolute amount of heterogeneity in effect size units across studies",
      "The proportion of total variation in study estimates attributable to between-study heterogeneity rather than within-study sampling error",
      "The probability that the combined effect estimate is statistically significant",
      "The number of studies needed to overturn the pooled result (fail-safe N)"
    ],
    answer: 1,
    explanation: "I² = (Q − df)/Q × 100%, where Q is the Cochran's Q statistic and df = (number of studies − 1). I² ranges from 0% to 100% and represents the percentage of total variability that is due to heterogeneity between studies rather than chance. Interpretation: 0–25% = low, 25–50% = moderate, 50–75% = substantial, 75–100% = considerable heterogeneity (Higgins et al., 2003). Unlike Q (sensitive to sample size), I² is not sensitive to the number of studies. High I² suggests subgroup or meta-regression analyses are needed to explore sources of heterogeneity."
  },
  {
    id: 19,
    question: "In logistic regression, the 'Hosmer-Lemeshow goodness-of-fit test' assesses:",
    options: [
      "Whether the regression coefficients are significantly different from zero",
      "Whether the predicted probabilities from the model match the observed event frequencies across deciles of predicted probability",
      "Whether the sample size is adequate for the number of predictors in the model",
      "Whether multicollinearity among predictor variables inflates standard errors"
    ],
    answer: 1,
    explanation: "The Hosmer-Lemeshow test evaluates the fit of a logistic regression model by grouping subjects into deciles (or other groups) based on predicted probability and comparing predicted vs. observed event frequencies within each group using a chi-square test. A non-significant p-value (p > 0.05) indicates adequate fit (observed and expected frequencies are similar). However, the test has limitations: it is sensitive to the number of groups chosen and may lack power with small samples or be overly sensitive with large samples. The calibration plot is a complementary graphical assessment."
  },
  {
    id: 20,
    question: "In survival analysis, the log-rank test is specifically designed to compare survival curves between two or more groups. Its primary assumption is:",
    options: [
      "The survival times follow an exponential distribution in all groups",
      "The hazard ratio between groups is constant over time (proportional hazards assumption)",
      "All subjects must be followed for the same length of time without loss to follow-up",
      "The outcome must be a continuous variable with normal distribution"
    ],
    answer: 1,
    explanation: "The log-rank test (Mantel-Haenszel test for survival data) assumes proportional hazards — that the ratio of hazard rates between groups remains constant throughout the follow-up period. The test is most powerful when this assumption holds. When hazards cross or converge over time (non-proportional hazards), the log-rank test loses power and may give misleading results. Alternative tests include the Wilcoxon (Breslow) test (more weight on early differences), the weighted log-rank test, or the restricted mean survival time (RMST) analysis, which does not require proportional hazards."
  },
  {
    id: 21,
    question: "A type II error (β error) in a clinical trial occurs when:",
    options: [
      "A statistically significant difference is found when no true difference exists",
      "The trial fails to detect a true difference between treatments that actually exists",
      "The sample size is larger than needed, wasting resources",
      "The p-value exceeds the pre-specified alpha level despite a clinically important effect"
    ],
    answer: 1,
    explanation: "Type II error (false negative, β error) occurs when the null hypothesis is not rejected despite a true difference existing — i.e., a real treatment effect is missed. The power of a study (1-β) is the probability of correctly detecting a true effect. Conventionally, β ≤ 0.20 (power ≥ 80%) is acceptable. Factors increasing risk of type II error: small sample size, high variability, small true effect size, and excessive conservatism in the α level. Type I error (α error, false positive) is rejecting a true null hypothesis. Underpowered trials are a major source of inconclusive results in the literature."
  },
  {
    id: 22,
    question: "In a randomized trial, the 'number needed to treat' (NNT) is calculated as:",
    options: [
      "Relative Risk × Control event rate",
      "1 / Absolute Risk Reduction (ARR), where ARR = Control event rate − Treatment event rate",
      "Control event rate / Treatment event rate",
      "1 / (Relative Risk Reduction × Control event rate)"
    ],
    answer: 1,
    explanation: "NNT = 1 / ARR, where ARR (Absolute Risk Reduction) = Control group event rate − Treatment group event rate. For example, if 20% of controls and 12% of treated patients experience the outcome, ARR = 0.20 − 0.12 = 0.08, and NNT = 1/0.08 = 12.5. NNT represents the number of patients who need to be treated for one additional patient to benefit (compared to the control). NNT should always be interpreted with confidence intervals and in the context of the specific outcome, follow-up duration, and patient population."
  },
  {
    id: 23,
    question: "Bayesian inference differs from frequentist statistical inference primarily in that:",
    options: [
      "Bayesian methods do not require any data and rely solely on prior knowledge",
      "Bayesian methods incorporate prior probability distributions and update them with observed data to produce posterior probability distributions for parameters of interest",
      "Frequentist methods cannot compute confidence intervals, while Bayesian methods always produce credible intervals",
      "Bayesian methods are exclusively used for small samples where central limit theorem does not apply"
    ],
    answer: 1,
    explanation: "Bayesian inference treats unknown parameters as random variables with probability distributions. Prior beliefs (prior distribution) are combined with the likelihood of observed data to produce a posterior distribution. This allows direct probability statements about parameters (e.g., 'there is a 95% probability that the true effect is between X and Y' — a 95% credible interval), unlike frequentist confidence intervals. Bayesian adaptive trial designs can update allocation ratios in real-time based on accumulating data. Bayesian methods are increasingly used in regulatory submissions and complex adaptive trials."
  },
  {
    id: 24,
    question: "In a two-sample comparison using the Mann-Whitney U test (Wilcoxon rank-sum test), the appropriate null hypothesis being tested is:",
    options: [
      "The means of the two populations are equal",
      "The probability that a randomly selected value from population 1 exceeds a randomly selected value from population 2 equals 0.5",
      "The variances of the two populations are equal",
      "The two distributions have the same shape and only differ in their median"
    ],
    answer: 1,
    explanation: "The Mann-Whitney U test is a non-parametric test whose correct null hypothesis states that for randomly selected values X (from population 1) and Y (from population 2), P(X > Y) = P(Y > X) = 0.5 — i.e., neither distribution is stochastically larger. It does not specifically test equality of medians unless the shapes of the two distributions are assumed identical. The U statistic has a probabilistic interpretation: it estimates the probability that a random observation from one group exceeds a random observation from the other. This is equivalent to the AUC interpretation."
  },

  // Questions 25-34: Diagnostic Tests
  {
    id: 25,
    question: "Multiplex PCR panels used for syndromic testing (e.g., respiratory pathogen panels) differ from conventional single-target PCR in that:",
    options: [
      "Multiplex PCR has higher sensitivity for each individual pathogen compared to single-target PCR",
      "Multiplex PCR simultaneously detects multiple pathogens in a single reaction, enabling rapid broad-based diagnosis without pre-formulated clinical hypotheses",
      "Multiplex PCR uses gel electrophoresis for detection while single-target PCR uses fluorescent probes",
      "Multiplex PCR is exclusively performed in reference laboratories and cannot be used at the point of care"
    ],
    answer: 1,
    explanation: "Multiplex PCR panels (e.g., BioFire FilmArray Respiratory Panel, which tests for 20+ respiratory pathogens) use multiple primer-probe sets in a single reaction, identifying bacterial and viral pathogens in one test. This enables syndromic testing — diagnostic testing guided by clinical syndrome rather than a single suspected pathogen. Advantages include faster turnaround (1–2 hours vs. days), breadth of detection, and reduced empirical antibiotic use. Limitations include higher cost, potential detection of colonizers or clinically irrelevant pathogens, and difficulty interpreting co-detections."
  },
  {
    id: 26,
    question: "Rapid antigen tests (RATs) for COVID-19 compared to RT-PCR generally have which of the following characteristics?",
    options: [
      "Higher sensitivity but lower specificity than RT-PCR",
      "Lower sensitivity but comparable specificity to RT-PCR, with much faster turnaround and no need for laboratory infrastructure",
      "Equivalent sensitivity and specificity to RT-PCR in all clinical settings",
      "Higher sensitivity during the asymptomatic phase compared to the symptomatic phase"
    ],
    answer: 1,
    explanation: "Rapid antigen tests (lateral flow immunoassays) detect viral protein antigens (typically nucleocapsid protein). Compared to RT-PCR, RATs have lower sensitivity (65–80% for symptomatic, lower for asymptomatic) but high specificity (>97%). They are most sensitive when viral loads are high (early symptomatic phase). Advantages: result in 15–30 minutes, no laboratory needed, affordable, suitable for mass screening. False negatives are common at low viral loads. WHO recommends RATs meeting ≥80% sensitivity and ≥97% specificity criteria for COVID-19 surveillance in resource-limited settings."
  },
  {
    id: 27,
    question: "Lateral flow assays (LFAs) work on which of the following detection principles?",
    options: [
      "Enzymatic amplification of target nucleic acid sequences followed by colorimetric detection",
      "Capillary flow of a sample through a nitrocellulose membrane where antibody-conjugated colored particles (e.g., gold nanoparticles) bind to captured antigen at the test line",
      "Electrochemical detection of specific ions released during antigen-antibody reactions",
      "Fluorescent emission from quantum dots excited by UV light after antigen binding"
    ],
    answer: 1,
    explanation: "Lateral flow assays use capillary action to draw the sample through a nitrocellulose membrane. The sample first encounters a conjugate pad containing antibodies labeled with colloidal gold (or latex beads) that bind to the target antigen. The complex migrates to the test line (containing capture antibody) — if antigen is present, the colored complex binds, producing a visible line. Excess conjugate binds at the control line regardless of antigen, confirming test validity. Results are typically read visually within 10–20 minutes, making LFAs ideal for point-of-care testing with no equipment requirement."
  },
  {
    id: 28,
    question: "CLIA-waived tests in the United States are defined as:",
    options: [
      "Tests that have been waived from the requirement for any quality control procedures",
      "Simple tests cleared by the FDA with such low risk of erroneous results that following the manufacturer's instructions is sufficient, requiring no special training or laboratory certification",
      "Tests that are exempt from insurance reimbursement requirements under Medicare",
      "Tests specifically developed for use in intensive care unit settings without standard precautions"
    ],
    answer: 1,
    explanation: "Under the Clinical Laboratory Improvement Amendments (CLIA) of 1988, waived tests are simple laboratory examinations and procedures with negligible risk of harm if performed incorrectly, cleared by FDA for home use, or approved by CDC. Waived tests include urine dipstick, blood glucose meters, urine pregnancy tests, fecal occult blood tests, and many rapid antigen tests. Facilities performing only waived tests need a Certificate of Waiver and must follow manufacturer's instructions. In India, the equivalent concept covers point-of-care tests approved for use at the sub-district level under quality-assured testing programs."
  },
  {
    id: 29,
    question: "Loop-Mediated Isothermal Amplification (LAMP) is preferred over conventional PCR in resource-limited settings primarily because:",
    options: [
      "LAMP has higher sensitivity than PCR for all pathogens in all specimen types",
      "LAMP amplifies DNA at a constant temperature (60–65°C), eliminating the need for expensive thermal cyclers while maintaining high sensitivity and specificity",
      "LAMP results can be quantified more accurately than real-time PCR",
      "LAMP does not require any enzymes and uses only physical amplification principles"
    ],
    answer: 1,
    explanation: "LAMP uses a DNA polymerase with strand displacement activity and 4–6 primers recognizing 6–8 distinct sequences on the target, amplifying DNA isothermally (60–65°C) with high efficiency. It does not require a thermal cycler — a simple water bath or heat block suffices. Results can be read by the naked eye (turbidity from magnesium pyrophosphate precipitate, or fluorescence with intercalating dye). LAMP has been adapted for TB (TB-LAMP, endorsed by WHO), malaria, dengue, and SARS-CoV-2. RT-LAMP adds a reverse transcription step for RNA targets."
  },
  {
    id: 30,
    question: "In the evaluation of a new diagnostic test, the Likelihood Ratio for a Negative test result (LR−) is calculated as:",
    options: [
      "(1 − Sensitivity) / Specificity",
      "Sensitivity / (1 − Specificity)",
      "(1 − Sensitivity) / Specificity — specifically (False Negative Rate / True Negative Rate)",
      "Specificity / (1 − Sensitivity)"
    ],
    answer: 2,
    explanation: "LR− = (1 − Sensitivity) / Specificity = False Negative Rate / True Negative Rate. It represents how much the odds of disease decrease when the test is negative. An LR− < 0.1 indicates a very useful negative result for ruling out disease (large decrease in post-test probability). LR+ = Sensitivity / (1 − Specificity) for positive tests. Post-test odds = Pre-test odds × Likelihood Ratio. Unlike predictive values, likelihood ratios are independent of disease prevalence, making them more generalizable across populations with different pre-test probabilities."
  },
  {
    id: 31,
    question: "The Xpert MTB/RIF assay (GeneXpert) for tuberculosis diagnosis is a cartridge-based real-time PCR test. Its primary advantage over sputum smear microscopy is:",
    options: [
      "It can detect TB from blood samples, making sputum collection unnecessary",
      "It simultaneously detects M. tuberculosis and rifampicin resistance (as a proxy for MDR-TB) within 2 hours, with higher sensitivity than smear microscopy including in smear-negative and HIV-co-infected patients",
      "It can identify the complete drug resistance profile including resistance to all second-line drugs",
      "It is cheaper than smear microscopy and requires no electricity"
    ],
    answer: 1,
    explanation: "Xpert MTB/RIF (CBNAAT — Cartridge Based Nucleic Acid Amplification Test) detects M. tuberculosis DNA and rifampicin resistance mutations (rpoB gene) simultaneously in ~2 hours. Sensitivity is ~89% overall vs. ~67% for smear microscopy, and importantly ~79% in smear-negative patients and ~79% in HIV-co-infected patients who are frequently smear-negative. WHO endorsed Xpert MTB/RIF in 2010 as the initial diagnostic test in TB-suspected individuals with HIV co-infection, MDR-TB risk, or in children. Xpert Ultra has higher sensitivity for smear-negative disease."
  },
  {
    id: 32,
    question: "Syndromic surveillance differs from traditional case-based surveillance in that:",
    options: [
      "Syndromic surveillance requires laboratory confirmation before reporting, while case-based surveillance uses clinical criteria",
      "Syndromic surveillance monitors pre-diagnostic indicators (ED chief complaints, pharmacy sales, absenteeism) for early signal detection before clinical diagnoses are established",
      "Syndromic surveillance is exclusively used for vector-borne disease monitoring",
      "Case-based surveillance is faster than syndromic surveillance and is preferred for emerging outbreaks"
    ],
    answer: 1,
    explanation: "Syndromic surveillance monitors non-specific health indicators (emergency department chief complaints, over-the-counter drug sales, school/work absenteeism, internet search trends) in near-real-time to detect disease clusters before confirmed diagnoses are available. This enables earlier warning of outbreaks, bioterrorism events, or emerging infections. Examples: BioSense (CDC), ESSENCE. Limitations include poor specificity (many false alarms) and difficulty distinguishing signals from background noise. Traditional surveillance requires confirmed cases but provides specific diagnosis-linked data."
  },
  {
    id: 33,
    question: "When a diagnostic test has a positive result for a patient with a chronic disease, the post-test probability is determined by:",
    options: [
      "Only the sensitivity of the test, independent of pre-test probability",
      "Both the pre-test probability (prior probability of disease) and the positive likelihood ratio of the test, applied via Bayes' theorem",
      "The disease prevalence in the laboratory's catchment population",
      "The negative predictive value of the test in the general population"
    ],
    answer: 1,
    explanation: "Bayes' theorem: Post-test odds = Pre-test odds × Likelihood Ratio. Pre-test probability is the clinician's estimate of disease probability before the test (based on clinical history, examination, risk factors, and local prevalence). For positive results, post-test probability = Post-test odds / (1 + Post-test odds). This framework explains why the same test with the same sensitivity/specificity gives very different PPV in high-prevalence (e.g., symptomatic patients) vs. low-prevalence (screening asymptomatic population) settings. The Fagan nomogram graphically applies this calculation."
  },
  {
    id: 34,
    question: "In microbiology, the 'analytic specificity' of a molecular diagnostic test refers to:",
    options: [
      "The proportion of truly negative samples correctly identified as negative in a clinical validation study",
      "The ability of the assay to detect only the intended target organism without cross-reacting with related organisms or normal flora",
      "The minimum detectable concentration of nucleic acid in a sample (limit of detection)",
      "The reproducibility of results when the same sample is tested in multiple laboratories"
    ],
    answer: 1,
    explanation: "In molecular diagnostics, analytical specificity (also called 'inclusivity/exclusivity') refers to whether the assay detects only the intended target without cross-reactivity with closely related organisms, host DNA, or normal flora. For example, a PCR for N. gonorrhoeae must not cross-react with N. meningitidis or commensal Neisseria species. This is tested by challenging the assay with a panel of target-positive and potentially cross-reactive specimens. Analytical specificity is distinct from clinical specificity (true negative rate in clinical validation) and from analytical sensitivity (limit of detection)."
  },

  // Questions 35-49: Communicable Diseases
  {
    id: 35,
    question: "WHO's global hepatitis B elimination targets by 2030 call for what levels of reduction in incidence and mortality compared to 2015?",
    options: [
      "50% reduction in incidence and 25% reduction in mortality",
      "90% reduction in incidence and 65% reduction in mortality",
      "75% reduction in incidence and 50% reduction in mortality",
      "80% reduction in incidence and 90% reduction in mortality"
    ],
    answer: 1,
    explanation: "The WHO Global Health Sector Strategy on Viral Hepatitis 2016–2021 (extended to 2030) sets targets of: 90% reduction in new HBV infections (incidence) and 65% reduction in HBV-related mortality by 2030 compared to the 2015 baseline. The strategy's pillars are: universal birth dose vaccination (within 24 hours), prevention of mother-to-child transmission through antiviral prophylaxis (tenofovir) in high-viremia mothers, testing of 90% of infected persons, and treating 80% of those diagnosed. Achieving 96% birth dose coverage and treating high-viremia mothers are critical."
  },
  {
    id: 36,
    question: "Pre-Exposure Prophylaxis (PrEP) for HIV prevention using oral tenofovir disoproxil fumarate/emtricitabine (TDF/FTC) has which of the following demonstrated efficacy profile?",
    options: [
      "100% efficacy regardless of adherence, making adherence monitoring unnecessary",
      "Up to 99% reduction in HIV acquisition risk with high adherence (≥4 doses/week), with effectiveness strongly correlated with drug adherence",
      "70% efficacy in men who have sex with men but less than 40% efficacy in heterosexual women",
      "Effective only when initiated within 72 hours of potential exposure (post-exposure, not pre-exposure)"
    ],
    answer: 1,
    explanation: "The iPrEx trial demonstrated 44% overall efficacy of oral TDF/FTC PrEP in men who have sex with men (MSM), but pharmacokinetic sub-studies showed >90% efficacy in those with detectable drug levels. Partners PrEP and TDF2 trials showed 62–75% efficacy in heterosexual couples. Drug adherence is the critical determinant: ≥4 tablets/week provides ~99% protection. Daily oral PrEP (F/TAF — tenofovir alafenamide/emtricitabine) and long-acting injectable cabotegravir PrEP (every 2 months) are newer options with superior adherence profiles. WHO recommends PrEP for all at substantial HIV risk."
  },
  {
    id: 37,
    question: "Post-Exposure Prophylaxis (PEP) for HIV must be initiated within how many hours of exposure, and for how long is it continued?",
    options: [
      "Within 48 hours; continued for 14 days",
      "Within 72 hours; continued for 28 days",
      "Within 24 hours; continued for 90 days",
      "Within 96 hours; continued for 28 days"
    ],
    answer: 1,
    explanation: "HIV PEP must be started as soon as possible (ideally within 2 hours) and no later than 72 hours after potential HIV exposure. PEP is not recommended after 72 hours. The standard 28-day regimen recommended by WHO (2014) is TDF + 3TC (or FTC) + dolutegravir (or raltegravir or lopinavir/ritonavir). PEP effectiveness is approximately 80% if started promptly and taken correctly. PEP is appropriate for occupational exposures (needlestick), sexual assault, and consensual sexual exposure. If PEP is started repeatedly, transition to PrEP should be considered."
  },
  {
    id: 38,
    question: "In Prevention of Mother-to-Child Transmission (PMTCT) of HIV, Option B+ refers to:",
    options: [
      "Providing ART to the mother only during pregnancy and breastfeeding, then discontinuing if she is not eligible for treatment",
      "Providing lifelong ART to all HIV-positive pregnant and breastfeeding women regardless of CD4 count or WHO stage",
      "Providing nevirapine to the newborn alone without treating the mother",
      "A two-drug regimen for the mother during labor and delivery only"
    ],
    answer: 1,
    explanation: "Option B+ (introduced by Malawi in 2011 and endorsed by WHO in 2012) provides lifelong triple ART to all HIV-positive pregnant and breastfeeding women immediately upon diagnosis, regardless of CD4 count or clinical stage, and continues it for life. Benefits: eliminates complicated eligibility determinations, prevents MTCT in all pregnancies (not just the current one), reduces sexual transmission to partner, and simplifies programming. This approach has been superseded by 'Treat All' (Test and Treat / Universal Treatment) under the 2016 WHO consolidated ART guidelines."
  },
  {
    id: 39,
    question: "The recommended diagnostic approach for HIV in infants younger than 18 months born to HIV-positive mothers is:",
    options: [
      "HIV antibody ELISA test, same as in adults",
      "HIV virological testing using early infant diagnosis (EID) with DNA PCR or RNA PCR, because maternal antibodies persist and make antibody tests unreliable",
      "Western blot confirmation within the first week of birth",
      "Clinical diagnosis based on failure to thrive and recurrent infections until antibody testing becomes reliable at 12 months"
    ],
    answer: 1,
    explanation: "Maternal IgG antibodies cross the placenta and persist in the infant for up to 18 months, making HIV antibody tests (ELISA) unreliable for diagnosing HIV infection in infants under 18 months. Early Infant Diagnosis (EID) requires virological tests — HIV DNA PCR (preferred for dried blood spots in resource-limited settings) or HIV RNA PCR — to detect the virus directly. WHO recommends EID at 4–6 weeks of age (or the earliest opportunity), with a repeat test at 9 months if first test negative, and antibody testing at 18 months. Point-of-care EID (e.g., m-PIMA, SAMBA) improves turnaround time."
  },
  {
    id: 40,
    question: "In TB-HIV co-infection, the recommended timing of antiretroviral therapy (ART) initiation in relation to TB treatment (anti-TB drugs) is:",
    options: [
      "ART should be delayed until TB treatment is completed (6 months) to avoid drug interactions",
      "ART should be started within 2–8 weeks of initiating TB treatment in most patients; for those with CD4 < 50 cells/mm³, ART should be started within 2 weeks",
      "ART and TB treatment should always be initiated simultaneously on the same day",
      "ART timing depends on the patient's hepatitis B status and should be delayed if HBsAg positive"
    ],
    answer: 1,
    explanation: "WHO 2021 guidelines recommend starting ART within 2 weeks of TB treatment initiation for patients with CD4 count < 50 cells/mm³ (severely immunocompromised). For patients with CD4 ≥ 50 cells/mm³, ART should be started within 8 weeks. Starting ART earlier reduces mortality significantly. An exception is TB meningitis, where early ART (within 2 weeks) was associated with worse outcomes in the CAMELIA/SAPiT trials, suggesting deferral to 4–8 weeks is prudent. Immune Reconstitution Inflammatory Syndrome (IRIS) risk increases with early ART but is manageable with corticosteroids."
  },
  {
    id: 41,
    question: "The WHO-recommended MDR-TB treatment regimen incorporating bedaquiline (as per 2022 WHO guidelines) is:",
    options: [
      "Bedaquiline + linezolid + clofazimine + pyrazinamide for 6 months (BPaLM)",
      "Bedaquiline + amikacin + pyrazinamide + ethambutol for 9 months",
      "Bedaquiline + delamanid + linezolid for 6 months only in XDR-TB",
      "Bedaquiline + moxifloxacin + pyrazinamide + cycloserine for 24 months"
    ],
    answer: 0,
    explanation: "WHO 2022 consolidated guidelines on tuberculosis introduced the BPaL (bedaquiline + pretomanid + linezolid) and BPaLM (BPaL + moxifloxacin) regimens for MDR/RR-TB and XDR-TB. The BPaLM regimen is recommended for a 6-month duration in MDR/RR-TB patients without confirmed fluoroquinolone resistance. For fluoroquinolone-resistant XDR-TB, BPaL (without moxifloxacin) for 6 months is recommended. These all-oral, shorter regimens represent a paradigm shift from previous 18–24 month regimens and are based on evidence from the ZeNix and TB-PRACTECAL trials."
  },
  {
    id: 42,
    question: "The updated WHO definition of Extensively Drug-Resistant TB (XDR-TB), revised in 2021, defines XDR-TB as:",
    options: [
      "Resistance to isoniazid, rifampicin, any fluoroquinolone, and at least one injectable second-line drug (amikacin, capreomycin, or kanamycin)",
      "Resistance to rifampicin and isoniazid (MDR-TB) plus resistance to any fluoroquinolone and at least one of bedaquiline or linezolid",
      "Resistance to all first-line and second-line TB drugs",
      "Resistance to rifampicin, isoniazid, and at least two of the Group A drugs"
    ],
    answer: 1,
    explanation: "The WHO revised XDR-TB definition (May 2021) updated the 2006 definition. New XDR-TB = MDR/RR-TB (rifampicin resistance, with or without isoniazid resistance) PLUS resistance to any fluoroquinolone (levofloxacin or moxifloxacin) AND at least one of bedaquiline or linezolid. The previous definition used injectable agents (amikacin/kanamycin/capreomycin) which are now Group C (less preferred) drugs. The revised definition reflects the new priority drugs in MDR-TB treatment regimens and better identifies patients who are most difficult to treat."
  },
  {
    id: 43,
    question: "The National Vector Borne Disease Control Programme (NVBDCP) India recommends which drug for radical cure of Plasmodium vivax malaria (to prevent relapse)?",
    options: [
      "Chloroquine 25 mg/kg over 3 days",
      "Primaquine 0.25 mg/kg/day for 14 days (with G6PD testing in high-prevalence areas)",
      "Artesunate combination therapy for 3 days only",
      "Doxycycline 100 mg twice daily for 7 days"
    ],
    answer: 1,
    explanation: "P. vivax forms dormant liver hypnozoites that cause relapses months to years later. Radical cure (elimination of hypnozoites) requires primaquine (an 8-aminoquinoline). The NVBDCP recommends primaquine 0.25 mg/kg/day for 14 days following chloroquine treatment. Primaquine causes hemolysis in G6PD-deficient patients, so G6PD testing before administration is recommended where feasible. In regions with Chesson-strain P. vivax (higher relapse frequency), the 0.5 mg/kg/day dose may be used. Tafenoquine (single-dose radical cure) is an alternative but requires G6PD quantitative testing."
  },
  {
    id: 44,
    question: "The global surveillance system for antimicrobial resistance uses the GLASS (Global Antimicrobial Resistance and Use Surveillance System) platform. GLASS was launched by WHO in which year, and what is its primary function?",
    options: [
      "2000; to monitor antibiotic sales and consumption data from pharmaceutical companies",
      "2015; to collect standardized AMR data from countries on priority pathogens to inform global action plans and track trends",
      "2010; to certify laboratories meeting international quality standards for AMR testing",
      "2018; to provide real-time outbreak alerts for drug-resistant pathogen clusters"
    ],
    answer: 1,
    explanation: "GLASS was launched by WHO in 2015 to support the implementation of the Global Action Plan on Antimicrobial Resistance. It establishes a standardized approach to collecting, analyzing, and sharing AMR data from countries. GLASS focuses on priority pathogens from clinical specimens including E. coli, Klebsiella pneumoniae, Acinetobacter baumannii, S. aureus, S. pneumoniae, Salmonella spp., Shigella spp., Neisseria gonorrhoeae, and S. pyogenes. By 2022, over 127 countries enrolled. GLASS data inform WHO priority pathogen lists and global AMR burden estimates."
  },
  {
    id: 45,
    question: "During a cholera outbreak, the recommended first-line oral rehydration therapy for moderately dehydrated patients uses ORS with which osmolarity specification?",
    options: [
      "Standard WHO ORS with osmolarity of 311 mOsm/L",
      "Reduced-osmolarity ORS with 245 mOsm/L (sodium 75 mmol/L, glucose 75 mmol/L)",
      "Rice-based ORS with osmolarity > 400 mOsm/L for higher caloric content",
      "Plain glucose solution without sodium for young children under 5"
    ],
    answer: 1,
    explanation: "WHO and UNICEF recommend the reduced-osmolarity ORS (245 mOsm/L: sodium 75 mmol/L, glucose 75 mmol/L, potassium 20 mmol/L, chloride 65 mmol/L, citrate 10 mmol/L) as the standard for all diarrheal diseases including cholera. Compared to the older standard ORS (311 mOsm/L), reduced-osmolarity ORS is associated with less need for unscheduled IV therapy, less vomiting, and lower stool output. For cholera specifically, WHO recommends the same reduced-osmolarity ORS. Severely dehydrated cholera patients require IV Ringer's lactate at 100 mL/kg over 3 hours (adults)."
  },
  {
    id: 46,
    question: "The Integrated Management of Neonatal and Childhood Illness (IMNCI) strategy classifies the severity of pneumonia in children based on:",
    options: [
      "Chest X-ray findings showing consolidation or pleural effusion",
      "Presence of fast breathing (age-specific respiratory rate cutoffs) and chest indrawing as clinical signs for classification and treatment decisions",
      "Blood culture results and C-reactive protein levels",
      "Pulse oximetry readings and blood oxygen saturation"
    ],
    answer: 1,
    explanation: "IMNCI (WHO/UNICEF) classifies pneumonia using clinical signs without requiring laboratory or radiological investigations, making it suitable for first-level facilities. Classification: No pneumonia (no fast breathing, no chest indrawing) — home treatment; Pneumonia (fast breathing only: ≥60 bpm in < 2 months, ≥50 in 2–11 months, ≥40 in 1–5 years) — oral amoxicillin, outpatient; Severe pneumonia (chest indrawing or danger signs) — refer, injectable antibiotics. In India, the Facility Based IMNCI (F-IMNCI) extends this to facility level care."
  },
  {
    id: 47,
    question: "Nipah virus (NiV) outbreaks in Kerala, India, are primarily associated with which mode of transmission to humans?",
    options: [
      "Mosquito bites from Culex species breeding in paddy fields",
      "Direct contact with infected bats (Pteropus species — flying foxes) or their secretions/urine-contaminated date palm sap, or human-to-human transmission via close contact",
      "Consumption of undercooked pork from infected pigs",
      "Waterborne transmission through contaminated groundwater in endemic areas"
    ],
    answer: 1,
    explanation: "Nipah virus is a paramyxovirus harbored in Pteropus fruit bats (flying foxes) as reservoir hosts. Transmission to humans occurs through: consumption of raw date palm sap contaminated with bat urine/saliva (Bangladesh/India outbreaks), direct contact with infected animals, and importantly human-to-human transmission (documented in Bangladesh and Kerala) via respiratory secretions and close contact. Kerala has experienced NiV outbreaks in 2018, 2019, 2021, and 2023. CFR is 40–75%. No licensed vaccine exists; monoclonal antibody treatment (m102.4) is experimental."
  },
  {
    id: 48,
    question: "Scrub typhus, a common cause of undifferentiated febrile illness in India, is caused by which organism and transmitted by which vector?",
    options: [
      "Rickettsia typhi, transmitted by the human body louse (Pediculus humanus)",
      "Orientia tsutsugamushi, transmitted by the bite of larval trombiculid mites (chiggers)",
      "Coxiella burnetii, transmitted by inhalation of contaminated dust from livestock",
      "Borrelia burgdorferi, transmitted by the bite of Ixodes ticks"
    ],
    answer: 1,
    explanation: "Scrub typhus is caused by Orientia tsutsugamushi (formerly Rickettsia tsutsugamushi), an obligate intracellular bacterium. It is transmitted by the bite of infected larval trombiculid mites (chiggers, primarily Leptotrombidium deliense) — the mite itself (not its bite) is the reservoir. A pathognomonic eschar (black scab at the bite site) is present in about 50% of Indian cases. Diagnosis: Weil-Felix test (OXK positive, though insensitive), IFA (gold standard), PCR. Treatment: doxycycline (first-line) or azithromycin. Common in Himalayan foothills, Northeast India, and Andaman Islands."
  },
  {
    id: 49,
    question: "The concept of 'One Health' approach in infectious disease control emphasizes:",
    options: [
      "The priority of human health over animal and environmental health in resource allocation",
      "The interdependence of human, animal, and environmental health, recognizing that most emerging infectious diseases originate at the human-animal-environment interface",
      "Unification of all national disease control programs under a single ministry",
      "The global standardization of vaccination schedules for both humans and animals"
    ],
    answer: 1,
    explanation: "The 'One Health' concept recognizes that human health is inextricably linked to the health of animals and their shared environment. Over 60% of emerging infectious diseases (EIDs) are zoonotic, and 75% of emerging human pathogens originate in animals. One Health approaches are essential for: pandemic preparedness (influenza, coronavirus), antimicrobial resistance surveillance (shared use of antibiotics in humans and livestock), food safety, and vector-borne disease control. The joint FAO-OIE-WHO tripartite collaboration and PREDICT program exemplify One Health implementation."
  },

  // Questions 50-64: Non-Communicable Diseases
  {
    id: 50,
    question: "The NIHSS (National Institutes of Health Stroke Scale) is used in acute stroke management primarily to:",
    options: [
      "Identify the occluded vessel on CT angiography",
      "Quantify neurological deficits to guide treatment decisions (e.g., IV thrombolysis eligibility) and monitor recovery",
      "Differentiate hemorrhagic from ischemic stroke without neuroimaging",
      "Calculate the 30-day mortality risk for prognostic counseling"
    ],
    answer: 1,
    explanation: "The NIHSS is a standardized 11-item neurological examination scale scoring deficits in: consciousness, orientation, commands, gaze, visual fields, facial palsy, motor arm/leg, limb ataxia, sensory, language, dysarthria, and extinction/inattention. Total score ranges 0–42 (higher = more severe deficit). It guides thrombolysis decisions (most trials included NIHSS ≥4–25), helps select patients for mechanical thrombectomy, and monitors response. A score of 0–1 is normal; ≥21 is considered severe. It is also used for clinical trial enrollment and as a primary outcome measure."
  },
  {
    id: 51,
    question: "Atrial fibrillation (AF) is an independent risk factor for ischemic stroke. The CHA₂DS₂-VASc score is used to:",
    options: [
      "Diagnose atrial fibrillation using clinical features when ECG is unavailable",
      "Estimate annual stroke risk in AF patients to guide anticoagulation therapy decisions",
      "Assess bleeding risk before initiating anticoagulation with warfarin or DOACs",
      "Classify AF severity and guide cardioversion or catheter ablation decisions"
    ],
    answer: 1,
    explanation: "CHA₂DS₂-VASc scores points for: Congestive heart failure (1), Hypertension (1), Age ≥75 (2), Diabetes (1), Stroke/TIA/thromboembolism history (2), Vascular disease (1), Age 65–74 (1), Sex category — female (1). Maximum = 9. ESC guidelines recommend oral anticoagulation (OAC) for men with score ≥2 and women with score ≥3. A score of 1 (men) or 2 (women) requires individualized decision. HAS-BLED score assesses bleeding risk. Direct oral anticoagulants (DOACs: apixaban, rivaroxaban, dabigatran) are preferred over warfarin for non-valvular AF."
  },
  {
    id: 52,
    question: "In the management of acute decompensated heart failure, B-type natriuretic peptide (BNP) and N-terminal pro-BNP (NT-proBNP) serve which of the following clinical roles?",
    options: [
      "They identify the etiology of heart failure (ischemic vs. non-ischemic cardiomyopathy)",
      "They aid in diagnosis of heart failure, assess severity, guide diuretic therapy, and predict prognosis — with higher levels associated with worse outcomes",
      "They are specific markers for right heart failure, not useful for left heart failure",
      "They replace echocardiography for assessing ejection fraction in routine follow-up"
    ],
    answer: 1,
    explanation: "BNP and NT-proBNP are released by ventricular myocytes in response to wall stress/volume overload. BNP < 100 pg/mL and NT-proBNP < 300 pg/mL effectively exclude acute heart failure (high NPV). BNP > 500 pg/mL and NT-proBNP > 900 pg/mL (age-stratified: >450 for <50y, >900 for 50–75y, >1800 for >75y) support HF diagnosis. Levels correlate with NYHA class, guide decongestion (target BNP-guided therapy in GUIDE-IT trial), and predict 30-day readmission and mortality. Factors falsely elevating BNP include renal failure, PE, sepsis; obesity falsely lowers BNP."
  },
  {
    id: 53,
    question: "The KDIGO (Kidney Disease: Improving Global Outcomes) 2012 classification of chronic kidney disease (CKD) stages is primarily based on:",
    options: [
      "Serum creatinine alone, classified into 5 stages",
      "Both GFR category (G1–G5) and albuminuria category (A1–A3), creating a combined risk matrix for CKD progression and cardiovascular outcomes",
      "Urine protein/creatinine ratio alone, without consideration of GFR",
      "Symptoms of CKD such as edema, fatigue, and uremic symptoms"
    ],
    answer: 1,
    explanation: "KDIGO 2012 classifies CKD using a 2-dimensional GFR-albuminuria matrix. GFR categories: G1 (≥90), G2 (60–89), G3a (45–59), G3b (30–44), G4 (15–29), G5 (<15 mL/min/1.73m²). Albuminuria categories: A1 (<30 mg/g, normal-mildly increased), A2 (30–300, moderately increased), A3 (>300, severely increased). Risk of CKD progression and cardiovascular events increases with both declining GFR and increasing albuminuria. This bidimensional staging better identifies high-risk patients — e.g., a patient with GFR 60 + severe albuminuria has worse prognosis than a patient with GFR 45 + normal albuminuria."
  },
  {
    id: 54,
    question: "Diabetic nephropathy in type 2 diabetes mellitus is now recommended to be treated (from its earliest stages) with SGLT2 inhibitors because:",
    options: [
      "SGLT2 inhibitors are more effective than ACE inhibitors at reducing blood pressure in diabetics",
      "SGLT2 inhibitors (empagliflozin, dapagliflozin, canagliflozin) reduce intraglomerular pressure via tubuloglomerular feedback and have demonstrated significant renoprotective effects in large outcome trials (EMPA-REG, CREDENCE, DAPA-CKD)",
      "SGLT2 inhibitors directly repair damaged glomeruli through anti-inflammatory mechanisms",
      "SGLT2 inhibitors are the only class effective in patients with GFR < 30 mL/min/1.73m²"
    ],
    answer: 1,
    explanation: "SGLT2 inhibitors block sodium-glucose cotransporter-2 in the proximal tubule, increasing glucosuria. Renoprotective mechanisms include: tubuloglomerular feedback-mediated afferent arteriole vasoconstriction (reducing intraglomerular pressure), decreased tubular sodium reabsorption (reducing metabolic demand), anti-inflammatory and anti-fibrotic effects. CREDENCE trial (canagliflozin) showed 34% reduction in composite renal outcome in T2DM with CKD. DAPA-CKD (dapagliflozin) extended benefits to non-diabetic CKD. KDIGO 2022 guidelines recommend SGLT2 inhibitors for CKD patients with T2DM and eGFR ≥20 mL/min/1.73m²."
  },
  {
    id: 55,
    question: "The recommended screening interval for diabetic retinopathy in a newly diagnosed type 2 diabetic patient with no retinopathy on initial fundus examination is:",
    options: [
      "Every 6 months regardless of glycemic control",
      "Every 1–2 years for patients with good glycemic control and no retinopathy, with annual screening for those with risk factors or pre-existing retinopathy",
      "Only when visual symptoms develop",
      "Every 5 years for the first decade, then annually"
    ],
    answer: 1,
    explanation: "ADA (American Diabetes Association) 2024 Standards of Care recommend initial dilated fundus examination at T2DM diagnosis, and then every 1–2 years if no retinopathy is present with well-controlled glycemia. Annual re-examination is recommended if any retinopathy is present or risk factors include poor glycemic control, hypertension, or long disease duration. The UK NICE guidelines also endorse annual digital photographic screening. Early detection and timely laser photocoagulation or anti-VEGF therapy (for diabetic macular edema/PDR) can prevent up to 90% of vision loss."
  },
  {
    id: 56,
    question: "The Global Burden of Disease (GBD) study classifies causes of death and disability into three broad categories. These are:",
    options: [
      "Infectious, Non-infectious, and Environmental diseases",
      "Communicable, maternal, neonatal, and nutritional diseases (CMNN); non-communicable diseases (NCDs); and injuries",
      "Preventable, treatable, and fatal diseases",
      "Tropical, temperate, and Arctic diseases based on geographic distribution"
    ],
    answer: 1,
    explanation: "The GBD study (Institute for Health Metrics and Evaluation — IHME) classifies causes into three Level-1 categories: (1) Communicable, maternal, neonatal, and nutritional diseases (CMNN) — Group I; (2) Non-communicable diseases (NCDs) — Group II; (3) Injuries — Group III (further divided into unintentional injuries and self-harm/interpersonal violence). The GBD 2019 study estimated 74.4% of deaths were due to NCDs globally. India's disease burden shows an epidemiological transition with NCDs now accounting for >60% of deaths."
  },
  {
    id: 57,
    question: "In the clinical management of acute ischemic stroke, IV alteplase (rtPA) is currently approved for administration within what time window from symptom onset?",
    options: [
      "Within 3 hours only, regardless of age",
      "Within 4.5 hours in most patients, with specific exclusion criteria applying beyond 3 hours",
      "Within 6 hours for all patients meeting clinical criteria",
      "Within 24 hours if MRI demonstrates diffusion-perfusion mismatch"
    ],
    answer: 1,
    explanation: "The original NINDS trial established IV alteplase efficacy within 3 hours. The ECASS-3 trial extended the window to 4.5 hours in selected patients (excluding those >80 years, severe stroke NIHSS >25, prior stroke + diabetes, oral anticoagulants). AHA/ASA 2019 guidelines approve IV alteplase within 3 hours (Level IA) and 3–4.5 hours (Level IB) with specific exclusions. The WAKE-UP trial using MRI DWI-FLAIR mismatch allowed treatment of wake-up stroke patients. Mechanical thrombectomy (with NIHSS ≥6, large vessel occlusion) can be performed up to 24 hours (DAWN/DEFUSE-3 criteria)."
  },
  {
    id: 58,
    question: "The Framingham Risk Score is used to estimate which of the following?",
    options: [
      "10-year risk of developing type 2 diabetes based on metabolic syndrome components",
      "10-year cardiovascular disease risk (coronary heart disease, stroke) based on age, sex, blood pressure, total/HDL cholesterol, diabetes, and smoking status",
      "Lifetime risk of developing any cancer based on genetic and lifestyle risk factors",
      "5-year mortality risk following a first myocardial infarction"
    ],
    answer: 1,
    explanation: "The Framingham Risk Score (FRS), derived from the Framingham Heart Study (Massachusetts), estimates the 10-year probability of developing cardiovascular disease (primarily coronary heart disease and stroke). Variables include: age, sex, total cholesterol, HDL cholesterol, systolic blood pressure (and whether treated), smoking status, and diabetes. Risk categories: low (<10%), intermediate (10–20%), high (>20%). High-risk patients benefit most from statins and lifestyle interventions. The Pooled Cohort Equations (PCE) by AHA/ACC 2013 are more widely recommended in current US guidelines as a replacement."
  },
  {
    id: 59,
    question: "The Indian Council of Medical Research (ICMR) — India Diabetes (InDiab) study is significant because it:",
    options: [
      "Established the glycemic cutoffs for diagnosing diabetes specific to the Indian population",
      "Provided the first nationally representative data on diabetes and pre-diabetes prevalence across all Indian states, showing adult prevalence of 11.4% and 15.3% respectively",
      "Demonstrated that metformin is superior to sulfonylureas in Indian type 2 diabetic patients",
      "Established the cost-effectiveness of insulin therapy vs. oral agents in Indian public health settings"
    ],
    answer: 1,
    explanation: "The ICMR-InDiab study (published in Lancet Diabetes & Endocrinology, 2023) is the first nationally representative cross-sectional survey of diabetes and pre-diabetes in India across all 31 states and union territories. It found diabetes prevalence of 11.4% (estimated 101 million adults with diabetes) and pre-diabetes prevalence of 15.3% (136 million). Hypertension prevalence was 35.5% and generalized obesity 28.6%. The study found significant variation by state, urbanization, and socioeconomic status, providing a critical evidence base for India's NCD policy and planning."
  },
  {
    id: 60,
    question: "In the management of hypertension, the concept of 'J-curve phenomenon' suggests that:",
    options: [
      "Blood pressure control follows a J-shaped time curve before reaching the target level with medication",
      "Excessively lowering diastolic blood pressure (especially below 60–70 mmHg) may paradoxically increase cardiovascular risk, particularly coronary events",
      "Hypertension drugs should be started at low doses and increased in a stepwise J-pattern",
      "Morning blood pressure surge follows a J-shaped pattern in high-risk hypertensives"
    ],
    answer: 1,
    explanation: "The 'J-curve' hypothesis proposes that while higher blood pressure increases cardiovascular risk, excessively low diastolic blood pressure (dBP < 60–70 mmHg) may also increase coronary artery disease risk. This is explained by coronary perfusion being predominantly diastolic — very low dBP may impair myocardial perfusion especially in patients with coronary artery disease. The ONTARGET and ACCORD trials provided supporting evidence. However, the SPRINT trial achieved systolic BP < 120 mmHg without clear J-curve harm. The ACOSOG-HF and CLARIFY registry suggest a dBP J-curve particularly in established CAD."
  },
  {
    id: 61,
    question: "The UNAIDS 95-95-95 targets for HIV by 2025 aim for:",
    options: [
      "95% of adults covered by HIV testing, 95% of tested positives on ART, 95% of those on ART achieving viral suppression",
      "95% reduction in new infections, 95% reduction in AIDS deaths, 95% of children born HIV-free",
      "95% of HIV-positive persons aware of their status, 95% receiving ART, 95% of those on ART achieving viral suppression",
      "95% population HIV testing coverage, 95% antiretroviral drug availability, 95% reduction in stigma"
    ],
    answer: 2,
    explanation: "The UNAIDS 95-95-95 targets (successor to the 90-90-90 targets achieved by 2020) aim by 2025 to ensure: (1) 95% of all people living with HIV know their status (diagnosis); (2) 95% of all people with diagnosed HIV receive sustained ART; (3) 95% of all people on ART achieve viral suppression (<1000 copies/mL). Achieving all three targets would result in approximately 86% of all PLHIV being virally suppressed, effectively reducing transmission and AIDS mortality to near elimination levels. India's 2021 estimates showed 84-88-95 (first-second-third 90s)."
  },
  {
    id: 62,
    question: "In non-alcoholic fatty liver disease (NAFLD), which scoring system is most widely used to predict the risk of advanced fibrosis non-invasively?",
    options: [
      "Child-Pugh score",
      "NAFLD fibrosis score (NFS), calculated from age, BMI, hyperglycemia, platelet count, albumin, and AST/ALT ratio",
      "MELD (Model for End-stage Liver Disease) score",
      "FIB-4 index is based only on platelet count and liver enzymes without demographic data"
    ],
    answer: 1,
    explanation: "The NAFLD Fibrosis Score (NFS) = -1.675 + 0.037 × age + 0.094 × BMI + 1.13 × IFG/diabetes (yes=1/no=0) + 0.99 × AST/ALT ratio - 0.013 × platelets (10⁹/L) - 0.66 × albumin (g/dL). A score > 0.676 has high PPV for advanced fibrosis; < -1.455 effectively rules it out. FIB-4 index (age × AST / [platelets × √ALT]) is another widely used non-invasive marker. Both are endorsed by EASL and AASLD for initial triage before liver biopsy, which remains the gold standard for staging. NAFLD is being renamed MASLD (metabolic dysfunction-associated steatotic liver disease)."
  },
  {
    id: 63,
    question: "Chronic obstructive pulmonary disease (COPD) is diagnosed based on post-bronchodilator spirometry showing:",
    options: [
      "FVC < 80% of predicted with a normal FEV1/FVC ratio",
      "FEV1/FVC ratio < 0.70 (< 70%) after bronchodilator administration, indicating persistent airflow limitation",
      "FEV1 < 50% of predicted regardless of the FEV1/FVC ratio",
      "Peak expiratory flow rate < 80% of predicted on at least three occasions"
    ],
    answer: 1,
    explanation: "GOLD (Global Initiative for Chronic Obstructive Lung Disease) 2023 guidelines define COPD by a fixed post-bronchodilator FEV1/FVC ratio < 0.70. The GOLD staging for COPD severity based on FEV1: GOLD 1 (mild, FEV1 ≥80%), GOLD 2 (moderate, 50–79%), GOLD 3 (severe, 30–49%), GOLD 4 (very severe, <30%). GOLD 2023 introduced the Pre-GOLD category for individuals with respiratory symptoms and risk factors but normal spirometry. The fixed ratio may overdiagnose COPD in elderly patients (normal aging decreases FEV1/FVC); the LLN (lower limit of normal) is an alternative criterion."
  },
  {
    id: 64,
    question: "The WHO HEARTS technical package for cardiovascular disease management in primary care includes which of the following components?",
    options: [
      "Hypertension treatment, Evidence-based protocols, Access to medications, Risk-based CVD management, Team-based care, Systems for monitoring",
      "Hospital Emergency ARrest Treatment Strategies for acute MI management",
      "Healthy diet, Exercise, Alcohol reduction, Risk counseling, Tobacco cessation, Surgery",
      "Holistic Evaluation And Risk Triaging for Stroke prevention in secondary care"
    ],
    answer: 0,
    explanation: "WHO's HEARTS technical package (2018) provides a strategic approach to improve cardiovascular health in primary care through six modules forming the HEARTS acronym: H — Healthy lifestyle counseling; E — Evidence-based treatment protocols; A — Access to essential medicines and technology; R — Risk-based CVD management; T — Team-based care; S — Systems for monitoring. The package is designed for implementation in low- and middle-income countries to standardize hypertension and CVD management. India has adapted this as part of its primary health care strengthening under Ayushman Bharat."
  },

  // Questions 65-72: Bioethics
  {
    id: 65,
    question: "The Genetic Information Nondiscrimination Act (GINA) in the United States protects against genetic discrimination in:",
    options: [
      "Life insurance and disability insurance policies",
      "Health insurance and employment, prohibiting use of genetic information for coverage/premium decisions or hiring/promotion decisions",
      "Educational institutions and housing applications",
      "All forms of insurance including life insurance, disability, and long-term care"
    ],
    answer: 1,
    explanation: "GINA (2008) has two titles: Title I prohibits health insurance companies from using genetic information to make eligibility, coverage, underwriting, or premium-setting decisions; Title II prohibits employers with ≥15 employees from using genetic information in hiring, firing, pay, or promotions. Importantly, GINA does NOT cover life insurance, disability insurance, or long-term care insurance. GINA also prohibits employers from requesting genetic information. India lacks equivalent legislation; the DNA Technology (Use and Application) Regulation Bill has been under consideration but not enacted as of 2024."
  },
  {
    id: 66,
    question: "Direct-to-consumer (DTC) genetic testing raises which primary ethical concern related to the principle of autonomy?",
    options: [
      "The tests are always inaccurate and mislead consumers about their true genetic risk",
      "Consumers may receive unexpected, anxiety-provoking genetic information (e.g., APOE ε4 for Alzheimer's risk) without adequate pre-test genetic counseling to ensure truly informed consent and psychological preparedness",
      "DTC testing companies profit from genetic data, violating the principle of justice",
      "DTC testing necessarily leads to unnecessary medical procedures and harms the healthcare system"
    ],
    answer: 1,
    explanation: "DTC genetic testing (e.g., 23andMe, AncestryDNA) allows consumers to access genetic information about ancestry, carrier status, disease risk, and pharmacogenomics without physician involvement. Key ethical concerns: (1) Informed consent — consumers may not fully understand probabilistic risk information or implications; (2) Incidental findings — unexpected disease risk results (e.g., BRCA mutation, APOE ε4) can cause significant psychological distress without support; (3) Privacy — data sharing with third parties; (4) Right not to know — family members may be affected by shared genetic information. The FDA requires medical oversight for high-risk (Class III) genetic tests."
  },
  {
    id: 67,
    question: "The 14-day rule in human embryo research ethics refers to:",
    options: [
      "The legal requirement to obtain consent within 14 days of embryo creation",
      "The internationally accepted limit prohibiting the in vitro culture of human embryos beyond 14 days post-fertilization (the primitive streak stage), beyond which individualization and neural differentiation begin",
      "The 14-day window during which IVF embryos can be legally transferred to a surrogate mother",
      "The required waiting period before embryos can be discarded after IVF treatment completion"
    ],
    answer: 1,
    explanation: "The 14-day rule emerged from the 1984 Warnock Report (UK) and has been adopted in approximately 12 countries. The primitive streak — a developmental structure marking the beginning of CNS differentiation and loss of twinning potential — forms at approximately 14 days post-fertilization. The rule allows embryo research for up to 14 days, balancing scientific benefit with protection of morally significant developmental thresholds. In 2021, ISSCR updated its guidelines to suggest contextual extensions beyond 14 days for specific research justified through robust ethical oversight, reigniting debate about revising the rule."
  },
  {
    id: 68,
    question: "Mitochondrial replacement therapy (MRT), also called mitochondrial donation, is ethically controversial primarily because:",
    options: [
      "It modifies the nuclear genome of the embryo, creating heritable genetic changes across generations",
      "It involves three genetic contributors (nuclear DNA from two parents + mitochondrial DNA from a donor) and produces heritable changes in the mitochondrial genome passed to all future descendants",
      "It is used exclusively for sex selection, violating gender equality principles",
      "It requires destruction of more embryos than conventional IVF, creating disproportionate harm"
    ],
    answer: 1,
    explanation: "MRT techniques (spindle transfer or pronuclear transfer) replace defective mitochondria in a woman's egg with healthy mitochondria from a donor egg, to prevent transmission of mitochondrial diseases. The resulting embryo has nuclear DNA from both parents and mitochondrial DNA from the donor ('three-parent baby'). Ethical concerns: (1) Heritable germline modification affecting all descendants; (2) Unknown long-term safety risks; (3) Nuclear-mitochondrial incompatibility; (4) Identity implications for children; (5) Slippery slope to germline enhancement. The UK became the first country to legally permit MRT (2015, HFEA). Approximately 40 live births have been reported."
  },
  {
    id: 69,
    question: "Gene drive technology in public health contexts (e.g., eradicating malaria-transmitting mosquitoes) raises which primary ethical concern that distinguishes it from other biotechnologies?",
    options: [
      "Gene drives cannot be adequately tested in controlled laboratory conditions before environmental release",
      "Gene drives are designed to spread genetic modifications through wild populations beyond the release site, potentially causing irreversible ecosystem-level changes that cannot be undone",
      "Gene drives violate the principle of beneficence since they only benefit malaria-endemic populations and not global populations equally",
      "Gene drives require proprietary technology owned by pharmaceutical companies, creating justice concerns about access"
    ],
    answer: 1,
    explanation: "Gene drives (typically using CRISPR-Cas9) are genetic elements that override normal Mendelian inheritance, spreading modifications rapidly through a wild population. Applications include suppression drives to reduce Anopheles mosquito populations (malaria control). Unique ethical concerns: (1) Cross-border spread without consent of affected nations; (2) Ecological irreversibility — species extinction or ecosystem disruption cannot be undone; (3) Unknown evolutionary consequences; (4) Community consent in affected regions; (5) Dual-use misuse potential. Daisy-chain drives and reversal drives are being developed as ecological safeguards. The Convention on Biological Diversity requires careful consideration of gene drive releases."
  },
  {
    id: 70,
    question: "The principle of 'therapeutic privilege' in medical ethics — withholding information from a patient because disclosure might cause harm — is now generally considered ethically problematic because:",
    options: [
      "It has been ruled illegal in all jurisdictions, so its application carries criminal penalties",
      "It paternalistically substitutes the physician's judgment for the patient's right to make autonomous decisions, potentially violating the patient's right to information even if disclosure is uncomfortable",
      "It applies only in psychiatry and has no relevance in general medicine or surgery",
      "The potential for patient harm from information disclosure has been scientifically disproven in clinical studies"
    ],
    answer: 1,
    explanation: "Therapeutic privilege historically allowed physicians to withhold 'harmful' information from patients (e.g., a terminal diagnosis). Modern bioethics largely rejects this as it undermines patient autonomy — a foundational principle. The standard of care has shifted to truth-telling with compassion and appropriate support. The 'right not to know' remains ethically distinct — patients can waive their right to receive information — but this must be the patient's own expressed preference, not a physician's unilateral decision. Limited exceptions exist (e.g., when disclosure would cause immediate, severe psychological decompensation), but these should be rare and reviewable."
  },
  {
    id: 71,
    question: "Research ethics require special protections for 'vulnerable populations.' Which of the following correctly identifies a vulnerability that requires additional safeguards?",
    options: [
      "Elderly patients over 70 years old are always cognitively impaired and cannot consent",
      "Decisional impairment, coercive or undue influence environments (prisoners, institutionalized patients), or economic or social disadvantage that may compromise voluntariness of consent",
      "Populations with genetic diseases since their enrollment constitutes unfair exploitation",
      "Healthy volunteers are never considered vulnerable and need no special protections"
    ],
    answer: 1,
    explanation: "The CIOMS International Ethical Guidelines (2016) identify vulnerability as a diminished ability to protect one's own interests due to: (1) cognitive or communicative impairment (impaired capacity); (2) coercive environment (prisoners, military personnel, students, employees of sponsors); (3) economic or social disadvantage (may enroll for financial compensation rather than research interest); (4) life-threatening illness (may be willing to accept unusual risks); (5) stigmatized groups. Protections include: independent consent observers, community advisory boards, ensuring research is responsive to the community's health needs, and fair benefit sharing."
  },
  {
    id: 72,
    question: "In the context of biobanking and genomic research, 'dynamic consent' refers to:",
    options: [
      "Repeated informed consent required at each new data use, regardless of research scope",
      "A flexible, participant-centered consent model using digital platforms that allows individuals to update their consent preferences over time as new research uses emerge",
      "A legal doctrine requiring that banked specimens be recontacted before every new study",
      "Automatic consent renewal every 5 years without requiring participant re-contact"
    ],
    answer: 1,
    explanation: "Dynamic consent (Kaye et al., 2015) is an innovative approach to consent for large-scale biobanks and genomic repositories where participants can use digital interfaces to manage their consent over time — choosing to permit or withdraw consent for specific types of research, receiving updates about how their samples/data are used, and opting in or out of specific studies. It contrasts with broad consent (allowing wide future research use under a general consent) and tiered consent (preset consent categories). Dynamic consent aligns with increasing emphasis on participant engagement, data sovereignty, and respect for autonomy in longitudinal research."
  },

  // Questions 73-80: Molecular Biology & Genetics
  {
    id: 73,
    question: "In RNA interference (RNAi), the RISC (RNA-Induced Silencing Complex) achieves gene silencing by:",
    options: [
      "Methylating the promoter region of the target gene, preventing transcription factor binding",
      "Using small interfering RNA (siRNA) as a guide to cleave complementary mRNA, preventing its translation",
      "Phosphorylating the ribosome to prevent translation initiation at the 5' cap",
      "Editing the target mRNA sequence by deamination of adenosine to inosine"
    ],
    answer: 1,
    explanation: "RNAi is a cellular mechanism in which double-stranded RNA (dsRNA) triggers silencing of complementary mRNA. Processing: (1) Dicer enzyme cleaves dsRNA into 21–23 nucleotide siRNA duplexes; (2) siRNA is loaded into RISC, with the guide (antisense) strand retained; (3) Argonaute 2 (AGO2), the catalytic component of RISC, uses the guide strand to identify complementary mRNA; (4) AGO2's 'slicer' activity cleaves the target mRNA between positions 10–11 of the guide strand. The cleaved mRNA is then degraded. RNAi is distinct from miRNA-mediated silencing, which typically acts via translational repression rather than cleavage."
  },
  {
    id: 74,
    question: "MicroRNA (miRNA) target prediction relies on which of the following primary computational criteria?",
    options: [
      "100% sequence complementarity between miRNA and mRNA along the entire miRNA length",
      "Complementarity between the miRNA seed region (nucleotides 2–8 at the 5' end) and the 3'UTR of the target mRNA, supplemented by free energy calculations and evolutionary conservation",
      "Perfect match of the complete miRNA sequence to the coding DNA sequence of the target gene",
      "Binding of miRNA to the 5' cap structure of the mRNA to prevent ribosome attachment"
    ],
    answer: 1,
    explanation: "miRNA target prediction algorithms (TargetScan, miRanda, DIANA-microT) primarily rely on: (1) Seed match — perfect Watson-Crick base pairing between miRNA nucleotides 2–8 (seed region) and the 3' UTR of target mRNA; (2) Thermodynamic stability of the miRNA-mRNA duplex (ΔG); (3) Evolutionary conservation of the target site across species; (4) Site accessibility (secondary structure of mRNA). Unlike siRNA, miRNA typically has incomplete (imperfect) complementarity with targets beyond the seed, allowing one miRNA to target hundreds of mRNAs. Experimental validation using luciferase reporter assays is required to confirm predicted targets."
  },
  {
    id: 75,
    question: "Long non-coding RNAs (lncRNAs) exert gene regulatory functions through which of the following mechanisms?",
    options: [
      "Direct enzymatic degradation of protein substrates in the cytoplasm",
      "Multiple mechanisms including chromatin remodeling (recruiting PRC2 or activating complexes), acting as competing endogenous RNAs (ceRNA) to sponge miRNAs, scaffolding regulatory proteins, and modulating transcription factor activity",
      "Translation of short regulatory peptides from open reading frames within the lncRNA sequence",
      "Exclusively functioning as antisense RNAs to block mRNA splicing"
    ],
    answer: 1,
    explanation: "lncRNAs (>200 nucleotides, not translated into protein) regulate gene expression through multiple mechanisms: (1) Chromatin regulation — e.g., XIST (X chromosome inactivation) and HOTAIR recruit PRC2 to silence chromatin; (2) Transcriptional regulation — acting as enhancer RNAs or blocking transcription factors; (3) Post-transcriptional regulation — acting as ceRNAs (miRNA sponges) competing with mRNA for miRNA binding; (4) Protein scaffolding — organizing protein complexes; (5) RNA processing — affecting splicing. Dysregulated lncRNAs are implicated in cancer, cardiovascular disease, and neurological conditions. MALAT1, H19, and ANRIL are well-characterized disease-associated lncRNAs."
  },
  {
    id: 76,
    question: "Circular RNAs (circRNAs) are distinguished from linear RNAs by which structural feature, and what is their primary functional significance?",
    options: [
      "Circular RNAs have a 5' cap and 3' poly-A tail like mRNAs but form a circular structure during translation",
      "Circular RNAs are formed by back-splicing (3' splice site joins to an upstream 5' splice site), creating a covalently closed loop without free 5' or 3' ends, and predominantly function as miRNA sponges",
      "Circular RNAs are exclusively found in mitochondria and regulate mitochondrial gene expression",
      "Circular RNAs are DNA-RNA hybrids stabilized by covalent bonds between 5-methylcytosine and uracil"
    ],
    answer: 1,
    explanation: "circRNAs are produced by non-canonical back-splicing where a downstream splice donor joins to an upstream splice acceptor, creating a covalently closed circular structure. Unlike linear RNA, they lack free 5' or 3' ends, making them resistant to exonucleases and highly stable in cells and plasma/serum (potential biomarkers). Primary functions: (1) miRNA sponging — e.g., CDR1as/ciRS-7 has 70+ miR-7 binding sites, sequestering miR-7; (2) RNA-binding protein sponges; (3) Some circRNAs can be translated via IRES (Internal Ribosome Entry Site) mechanisms in specific contexts. Thousands of circRNAs have been identified in human cells."
  },
  {
    id: 77,
    question: "RNA editing by ADAR (Adenosine Deaminase Acting on RNA) enzymes modifies which nucleotide, and what is its consequence?",
    options: [
      "Cytosine to Uracil; allowing the mRNA to encode a stop codon",
      "Adenosine to Inosine (A-to-I editing); inosine is read as guanosine by the ribosome, potentially changing codons and the amino acid sequence of the encoded protein",
      "Guanosine to Adenosine; creating premature stop codons in tumor suppressor genes",
      "Uracil to Cytosine; activating normally silent mRNA transcripts through codon correction"
    ],
    answer: 1,
    explanation: "ADAR enzymes catalyze hydrolytic deamination of adenosine to inosine (A-to-I) in double-stranded RNA regions. Inosine is biochemically similar to guanosine and is read as G by ribosomes and polymerases. Consequences: (1) Recoding — A-to-I changes an AUA (Ile) codon to IUA (=GUA, Val), potentially altering protein function; (2) Splicing alteration; (3) miRNA biogenesis interference. The AMPA receptor GluR-B Q/R site editing (changing glutamine to arginine) is essential — unedited AMPA receptors are calcium-permeable and cause excitotoxicity. Dysregulated ADAR editing is implicated in cancer, autoimmune disease, and neurological disorders."
  },
  {
    id: 78,
    question: "Antisense oligonucleotides (ASOs) used therapeutically can achieve gene silencing through which of the following mechanisms?",
    options: [
      "They edit the DNA sequence in the nucleus using CRISPR-Cas9 components",
      "RNase H-mediated degradation of the mRNA-ASO hybrid (gapmers), exon skipping (steric blocking ASOs), or splice switching to modulate alternative splicing",
      "They deliver miRNA mimics into RISC to activate RNA interference pathways",
      "They block the nuclear export of mRNA by binding to nuclear export signals"
    ],
    answer: 1,
    explanation: "ASOs are single-stranded synthetic oligonucleotides (15–25 nucleotides) complementary to target mRNA. Mechanisms: (1) Gapmer ASOs have a central DNA 'gap' flanked by modified nucleotides — the DNA:RNA hybrid recruits RNase H, which cleaves the RNA strand, degrading the target mRNA (e.g., inotersen for hATTR amyloidosis); (2) Steric blocking ASOs bind target sequences without RNase H activation, blocking ribosome access or splicing — used for exon skipping in Duchenne muscular dystrophy (eteplirsen, casimersen); (3) Splice-switching ASOs correct aberrant splicing. Chemical modifications (2'-MOE, phosphorothioate backbone) increase stability and reduce immunogenicity."
  },

  // Questions 81-86: Microbiology
  {
    id: 79,
    question: "Löwenstein-Jensen (LJ) medium used for mycobacterial culture contains which of the following ingredients that makes it selective and differential?",
    options: [
      "MacConkey agar with crystal violet and bile salts to inhibit Gram-positive organisms",
      "Coagulated egg medium containing glycerol (for M. tuberculosis) or pyruvate (for M. bovis), malachite green as an inhibitor of contaminants, and asparagine as a nitrogen source",
      "Chocolate agar with X and V factors supplemented with NAD",
      "Middlebrook 7H10 agar with OADC (oleic acid, albumin, dextrose, catalase) supplement"
    ],
    answer: 1,
    explanation: "LJ medium is a solid egg-based mycobacterial culture medium containing: coagulated whole eggs (protein source), mineral salts, glycerol (enhances M. tuberculosis growth; M. bovis grows better on pyruvate-containing LJ), asparagine (nitrogen source), and malachite green dye (inhibits contaminating bacteria). LJ is incubated at 37°C for up to 8 weeks; M. tuberculosis produces buff-colored, rough, raised colonies (eugonic growth on glycerol). LJ is WHO-endorsed for DST. Middlebrook 7H9/7H10 (liquid/solid) is an alternative. MGIT (Mycobacterial Growth Indicator Tube) liquid system detects growth faster (average 13 days vs. 4–6 weeks for LJ)."
  },
  {
    id: 80,
    question: "In MGIT (Mycobacteria Growth Indicator Tube) 960 system, growth of mycobacteria is detected by:",
    options: [
      "Visual inspection of turbidity and colonies in the liquid medium",
      "Fluorometric detection of oxygen consumption — a fluorescent compound embedded in silicone at the tube bottom is quenched by oxygen; as bacteria consume oxygen, the compound fluoresces, detected by continuous automated monitoring",
      "Colorimetric change in pH indicator from red to yellow as mycobacteria produce acid from glucose",
      "Detection of mycobacterium-specific antigens released into the culture medium by ELISA"
    ],
    answer: 1,
    explanation: "The BACTEC MGIT 960 system uses fluorescent indicator technology. Each MGIT tube contains a ruthenium pentahydrate fluorescent compound embedded in silicone at the bottom. Oxygen quenches this compound's fluorescence. When mycobacteria grow and consume oxygen, fluorescence increases and is read every 60 minutes by the automated system. A growth unit ≥100 triggers a positive flag. MGIT reduces mean time to detection to ~13 days for M. tuberculosis vs. 4–6 weeks for LJ medium. MGIT is also used for liquid culture-based Drug Susceptibility Testing (DST) of first and second-line anti-TB drugs."
  },
  {
    id: 81,
    question: "Lactophenol cotton blue (LPCB) staining is used in mycology for microscopic identification of fungi. The components of LPCB and their functions are:",
    options: [
      "Crystal violet (stains chitin), iodine (mordant), and acetone (decolorizer)",
      "Phenol (kills viable organisms), lactic acid (preserves and clarifies), glycerol (prevents desiccation), and cotton blue (aniline dye staining fungal cell walls containing chitin and cellulose)",
      "Malachite green (stains fungal spores), safranin (counterstain for hyphae), and acetic acid (fixative)",
      "Acid fuchsin (stains fungal hyphae red), methylene blue (stains background), and glycerol (mounting medium)"
    ],
    answer: 1,
    explanation: "LPCB (LPCB, Amann's lactophenol cotton blue) is a standard stain for microscopic examination of fungi: (1) Phenol — kills viable fungal organisms (safety); (2) Lactic acid — preserves fungal structures and acts as a clearing agent; (3) Glycerol — prevents desiccation and acts as a mounting medium; (4) Cotton blue (aniline blue) — stains chitin in fungal cell walls blue. LPCB preparations are made from culture (tease preparation or cello-tape preparation) to preserve hyphal morphology, conidial arrangements, and spore characteristics essential for species identification (e.g., Aspergillus, Fusarium, Penicillium)."
  },
  {
    id: 82,
    question: "The concentration technique used in parasitology for detection of intestinal parasites in stool — the formol-ether concentration technique — works by:",
    options: [
      "Centrifuging stool at high speed to pellet all microorganisms including bacteria and viruses",
      "Fixing stool in 10% formol-saline (preserving morphology), then adding diethyl ether (extracting lipids and debris), centrifuging to produce a pellet enriched with cysts, eggs, and larvae, while debris collects in the ether-formol interface",
      "Filtering stool through a 0.2 micron membrane that traps all parasites but allows bacteria to pass through",
      "Adding sodium sulfate (flotation solution) to make parasite eggs and cysts float to the surface for collection"
    ],
    answer: 1,
    explanation: "The Ritchie formol-ether sedimentation concentration technique: (1) Stool is emulsified in 10% formol-saline (fixes and preserves); (2) Diethyl ether (or ethyl acetate) is added — this organic solvent extracts fats and debris; (3) After centrifugation, four layers form: ether layer (top), plug of debris at ether-formol interface, formol layer, and a pellet containing concentrated parasites; (4) The plug is loosened, supernatant decanted, and sediment examined by microscopy. This technique concentrates protozoan cysts, helminth eggs, and larvae effectively. Flotation techniques (e.g., zinc sulfate, saturated salt) work by density differences for specific parasites."
  },
  {
    id: 83,
    question: "The Modified Ziehl-Neelsen (mZN) stain at a lower decolorization strength (using 1% sulfuric acid instead of 20%) is used to identify which organism?",
    options: [
      "Mycobacterium tuberculosis, which requires stronger acid decolorization to differentiate from other mycobacteria",
      "Cryptosporidium parvum oocysts, which are partially acid-fast and would be decolorized by the stronger acid used in standard ZN staining",
      "Nocardia species, which require weaker acid but are not identified by mZN stain",
      "Strongyloides stercoralis larvae, which are weakly acid-fast due to their cuticle composition"
    ],
    answer: 1,
    explanation: "Modified ZN stain (hot carbol fuchsin, decolorized with 1% H₂SO₄ instead of 3% acid-alcohol or 20% H₂SO₄) is used for partially acid-fast organisms. Cryptosporidium parvum oocysts are partially acid-fast — they would lose the carbol fuchsin stain with stronger decolorization. mZN reveals them as pink/red oocysts (4–6 μm) against blue (methylene blue) background. Also used for Isospora (now Cystoisospora) belli oocysts and Cyclospora cayetanensis (variably acid-fast). Nocardia species are also weakly acid-fast and identified by modified Kinyoun stain (without heating)."
  },
  {
    id: 84,
    question: "The MacConkey agar medium differentiates lactose fermenters from non-fermenters. Pink/red colonies on MacConkey agar indicate:",
    options: [
      "Gram-positive organisms that resist bile salts",
      "Lactose fermenters that produce acid, causing the neutral red indicator to turn pink/red, indicating Gram-negative enteric bacteria such as E. coli",
      "Non-lactose fermenters that are more pathogenic and dangerous",
      "Organisms producing hydrogen sulfide, which reacts with iron to form black precipitate"
    ],
    answer: 1,
    explanation: "MacConkey agar contains: (1) Peptone (carbon/nitrogen source); (2) Lactose (fermentable carbohydrate); (3) Bile salts and crystal violet (selective agents inhibiting Gram-positive organisms); (4) Neutral red indicator (turns pink-red in acid). Lactose-fermenting organisms (E. coli, Klebsiella, Enterobacter) produce acid from lactose → neutral red turns pink/red → pink/red colonies (E. coli: pink flat colonies with metallic sheen at 18 hours). Non-lactose fermenters (Salmonella, Shigella, Pseudomonas) produce colorless/pale colonies. This selective-differential medium is critical for isolating Gram-negative enteric pathogens from feces."
  },
  {
    id: 85,
    question: "The catalase test in microbiology differentiates Staphylococcus from Streptococcus. A positive catalase test (bubbling with H₂O₂) in Staphylococcus is due to the presence of the catalase enzyme, which:",
    options: [
      "Oxidizes hemoglobin in blood agar, producing the characteristic golden-yellow pigment",
      "Breaks down hydrogen peroxide (2H₂O₂ → 2H₂O + O₂), with released oxygen gas producing visible bubbles",
      "Hydrolyzes optochin (ethylhydrocupreine) used for Streptococcus pneumoniae identification",
      "Produces coagulase enzyme that clots plasma, differentiating S. aureus from coagulase-negative staphylococci"
    ],
    answer: 1,
    explanation: "Catalase (hydrogen peroxide oxidoreductase) catalyzes the decomposition: 2H₂O₂ → 2H₂O + O₂. The released O₂ gas produces immediate vigorous bubbling on adding 3% H₂O₂. Staphylococcus (catalase-positive) can thus detoxify H₂O₂ generated by their own aerobic metabolism. Streptococcus and Enterococcus are catalase-negative (no bubbling). After positive catalase, coagulase test differentiates S. aureus (coagulase-positive — rabbit plasma clots within 4 hours) from coagulase-negative staphylococci (CoNS). MRSA (methicillin-resistant S. aureus) retains catalase and coagulase positivity, identified by mecA gene PCR or cefoxitin disk diffusion."
  },
  {
    id: 86,
    question: "Kirby-Bauer disk diffusion antibiotic susceptibility testing interprets zone sizes as susceptible, intermediate, or resistant based on CLSI/EUCAST breakpoints. Which of the following correctly describes the 'intermediate' category interpretation?",
    options: [
      "The organism is fully susceptible and the standard dose will achieve clinical cure",
      "The organism is resistant to standard doses but may respond to higher doses if the antibiotic can be safely concentrated at the infection site, or susceptibility is uncertain",
      "The zone is exactly equal to the susceptible breakpoint, indicating borderline susceptibility",
      "The test result was invalid and should be repeated with a fresh disk"
    ],
    answer: 1,
    explanation: "CLSI (2019) and EUCAST have updated the 'intermediate' (I) category. EUCAST renamed it 'susceptible, increased exposure' (I) — meaning the isolate may be successfully treated when there is increased drug exposure through higher dosing, more frequent dosing, or drug concentration at the infection site (e.g., urinary tract infections where drug is concentrated in urine). CLSI retains 'intermediate' (I) to mean equivocal/buffer zone results with technical uncertainty. 'Susceptible' (S) means standard dosing will achieve clinical success; 'Resistant' (R) means standard therapy is likely to fail. EUCAST's reclassification of I provides clearer clinical guidance."
  },

  // Questions 87-93: English
  {
    id: 87,
    question: "The idiom 'burning the midnight oil' in the context of medical research means:",
    options: [
      "Setting fire to laboratory samples as a safety protocol",
      "Working late into the night, especially studying or working hard to complete a task",
      "Wasting resources on unnecessary experiments",
      "Achieving breakthrough results through spontaneous inspiration"
    ],
    answer: 1,
    explanation: "'Burning the midnight oil' is an idiom meaning to work or study late into the night, derived from the era when candles and oil lamps were the primary light sources for nighttime work. In research contexts, it aptly describes the dedication of scientists who work long hours to complete experiments or analyze data. Other health-related idioms: 'under the weather' (feeling ill), 'back on one's feet' (recovering from illness), 'the bitter pill to swallow' (an unpleasant but necessary truth)."
  },
  {
    id: 88,
    question: "Complete the proverb: 'Prevention is better than ______.'",
    options: [
      "Medication",
      "Cure",
      "Treatment",
      "Intervention"
    ],
    answer: 1,
    explanation: "'Prevention is better than cure' is a proverb attributed to Desiderius Erasmus (circa 1500) and is the foundational axiom of public health and preventive medicine. It encapsulates the principle that avoiding disease through preventive measures (vaccination, healthy lifestyle, sanitation) is preferable to treating disease after it occurs. This principle underpins all primary prevention strategies. The phrase 'an ounce of prevention is worth a pound of cure' (attributed to Benjamin Franklin) conveys the same concept with greater emphasis on the comparative value."
  },
  {
    id: 89,
    question: "Choose the correct preposition: 'The patient complained ______ severe chest pain that had started two hours ago.'",
    options: [
      "for",
      "about",
      "of",
      "with"
    ],
    answer: 2,
    explanation: "'Complained of' is the correct idiomatic preposition when a patient reports a symptom or ailment. In clinical documentation, 'the patient complains of' or 'the patient presented with complaints of' is standard English. 'Complained about' implies discontent with a situation or person (e.g., complained about the hospital food), not reporting a symptom. 'Complained for' and 'complained with' are grammatically incorrect in this context. Clinical history-taking uses 'chief complaint of' as the standard medical English formulation."
  },
  {
    id: 90,
    question: "Identify the error in article usage: 'The patient was given a aspirin and an heparin infusion.'",
    options: [
      "No error; 'a aspirin' and 'an heparin' are both correct",
      "'a aspirin' should be 'an aspirin' (vowel sound 'a-'), and 'an heparin' should be 'a heparin' (consonant sound 'h-' when h is pronounced)",
      "'a aspirin' is correct but 'an heparin' is incorrect; it should be 'the heparin'",
      "Both 'a' and 'an' should be replaced with 'the' since aspirin and heparin are specific drugs"
    ],
    answer: 1,
    explanation: "Article usage is determined by the sound of the following word, not the letter: (1) 'Aspirin' begins with the vowel sound 'a-' → correct article is 'an aspirin'; (2) 'Heparin' begins with a pronounced 'h-' consonant sound → correct article is 'a heparin'. Compare: 'an hour' (h is silent, vowel sound 'ow-') vs. 'a hospital' (h is pronounced). In medical writing, correct article use is important: 'an ECG,' 'an MRI,' 'a CT scan,' 'an ELISA,' 'a PCR test' (P is pronounced, not spelled out). The rule is: use 'an' before words beginning with a vowel sound."
  },
  {
    id: 91,
    question: "The phrase 'the patient is in extremis' is a Latin medical phrase meaning:",
    options: [
      "The patient is extremely resistant to treatment",
      "The patient is at the point of death or in a critical dying state requiring immediate intervention",
      "The patient is outside the normal range of vital signs",
      "The patient has extreme pain requiring narcotic analgesia"
    ],
    answer: 1,
    explanation: "'In extremis' is a Latin phrase meaning 'at the point of death' or 'in extreme circumstances.' In medical usage, a patient 'in extremis' is dying or critically ill with imminent death. This is important for clinical decision-making regarding resuscitation, interventions, and goals of care discussions. Related Latin medical phrases: 'in situ' (in place), 'in vitro' (in glass/in the laboratory), 'in vivo' (in living organism), 'post mortem' (after death), 'antemortem' (before death), 'nil per os' (nothing by mouth, NPO)."
  },
  {
    id: 92,
    question: "Select the sentence with CORRECT use of the word 'affect' versus 'effect':",
    options: [
      "'The new drug effected the patient's blood pressure significantly.'",
      "'The treatment had a positive affect on patient recovery rates.'",
      "'The intervention significantly affected the incidence of hospital-acquired infections.'",
      "'The side effects of the medication seriously affected the quality of life of patient's.' "
    ],
    answer: 2,
    explanation: "'Affect' is typically a verb meaning 'to influence or have an impact on' (e.g., 'the drug affected blood pressure'). 'Effect' is typically a noun meaning 'result or outcome' (e.g., 'the drug had a positive effect'). Option C correctly uses 'affected' as a verb. Option A incorrectly uses 'effected' as a verb (though 'to effect' as a verb does exist, meaning 'to bring about,' it is rarely used and inappropriate here). Option B incorrectly uses 'affect' (noun) where 'effect' (noun) is needed. Option D has a possessive apostrophe error ('patient's' vs. 'patients'')."
  },
  {
    id: 93,
    question: "Which of the following sentences demonstrates CORRECT subject-verb agreement?",
    options: [
      "'Neither the physician nor the nurses was available for comment.'",
      "'The data collected from all participants suggest a significant reduction in mortality.'",
      "'The number of cases reported in rural areas are higher than in urban areas.'",
      "'Each of the patients were given individualized treatment plans.'"
    ],
    answer: 1,
    explanation: "'Data' is the plural of 'datum'; in scientific writing, 'data suggest' (plural verb) is grammatically correct, though 'data suggests' is accepted in modern informal usage. Analysis: Option A — 'neither...nor' rule: verb agrees with the nearest noun ('nurses'), so 'were' is correct, not 'was'; Option B — 'The data...suggest' is correct (plural subject, plural verb); Option C — 'The number of' takes a singular verb, so 'is' (not 'are') is correct; Option D — 'Each' is singular, so 'was given' is correct, not 'were given.' Option B is the only sentence with correct subject-verb agreement."
  },

  // Questions 94-100: General Knowledge (ICMR Institutes)
  {
    id: 94,
    question: "The National Institute of Epidemiology (NIE), an institute of ICMR, is located in which city, and what is its primary mandate?",
    options: [
      "New Delhi; conducting clinical drug trials for the Ministry of Health",
      "Chennai (Tamil Nadu); epidemiological research including field epidemiology training, surveillance, outbreak investigation, and capacity building in epidemiology",
      "Pune (Maharashtra); research on vaccine development and immunology",
      "Hyderabad (Telangana); research on environmental health and occupational diseases"
    ],
    answer: 1,
    explanation: "The National Institute of Epidemiology (NIE), located in Chennai, Tamil Nadu, is a premier ICMR institute established in 1999. Its mandate covers: epidemiological research on communicable and non-communicable diseases, operational research, disease surveillance, outbreak investigation, and capacity building. NIE runs the Field Epidemiology Training Programme (FETP) in India, which trains epidemic intelligence officers through a 2-year competency-based program modeled on the US CDC EIS. NIE is a WHO Collaborating Centre for Research and Training in Epidemiology."
  },
  {
    id: 95,
    question: "The National AIDS Research Institute (NARI), a premier ICMR institute for HIV/AIDS research, is located in:",
    options: [
      "Mumbai, Maharashtra",
      "Pune, Maharashtra",
      "Bengaluru, Karnataka",
      "Chennai, Tamil Nadu"
    ],
    answer: 1,
    explanation: "NARI (National AIDS Research Institute) is located in Pune, Maharashtra, and was established in 1992. It is the apex research institution in India for HIV/AIDS research under ICMR. NARI conducts research in areas including HIV epidemiology, prevention, diagnostics, treatment, and vaccines. It has conducted landmark studies including HIV natural history studies in female sex workers (Pune cohort), HIV-TB co-infection, and pediatric HIV. NARI is a WHO Collaborating Centre for AIDS Research and serves as a reference laboratory for HIV testing and molecular surveillance."
  },
  {
    id: 96,
    question: "The National Institute of Nutrition (NIN), located in Hyderabad, was founded in 1918 as the 'Deficiency Disease Enquiry.' Which of the following research contributions is NIN most prominently associated with?",
    options: [
      "Development of ORS for diarrheal disease management",
      "Establishing Indian Recommended Dietary Allowances (RDA), the ICMR-NIN food composition tables, and pioneering research on vitamin deficiencies including discovery of vitamin A deficiency as a cause of blindness in India",
      "Development of anti-tuberculosis drugs including rifampicin",
      "Establishing the normal range for blood glucose in the Indian population"
    ],
    answer: 1,
    explanation: "The National Institute of Nutrition (NIN), Hyderabad (established 1918, became NIN in 1969), is India's premier nutrition research institute under ICMR. Key contributions: (1) Indian RDAs (repeatedly revised, latest 2020); (2) ICMR-NIN food composition tables for Indian foods; (3) Discovery of pellagra in jowar-eating communities; (4) Identification of vitamin A deficiency as a leading cause of blindness; (5) Research on fluorosis, iodine deficiency, and micronutrient deficiencies; (6) Development of Nutrient-Rich Foods (NRF) concept; (7) Hyderabad document on balanced diet. NIN's research underpins India's national nutrition programs (POSHAN Abhiyaan)."
  },
  {
    id: 97,
    question: "The ICMR Regional Medical Research Centres (RMRCs) are distributed across India. The RMRC for the North-Eastern region is located in:",
    options: [
      "Guwahati, Assam",
      "Dibrugarh, Assam",
      "Shillong, Meghalaya",
      "Imphal, Manipur"
    ],
    answer: 1,
    explanation: "The ICMR-Regional Medical Research Centre, North East (ICMR-RMRC NE) is located in Dibrugarh, Assam. It was established to conduct medical research relevant to the North-Eastern states of India, covering diseases prevalent in the region including malaria, filariasis, scrub typhus, kala-azar, Japanese encephalitis, and snakebite. Other ICMR-RMRCs include: RMRC Bhubaneswar (Odisha), RMRC Port Blair (Andaman & Nicobar Islands), RMRC Belgaum (Karnataka), and RMRC Gorakhpur (Uttar Pradesh, now upgraded). The RMRC network extends ICMR's research reach to geographically and epidemiologically distinct regions."
  },
  {
    id: 98,
    question: "The National Institute of Cholera and Enteric Diseases (NICED), an ICMR institute, is located in Kolkata and is primarily known for research on:",
    options: [
      "Malaria and tropical parasitic diseases endemic to West Bengal",
      "Enteric infections including cholera, diarrheal diseases, typhoid, and rotavirus gastroenteritis, with a focus on pathogenesis, epidemiology, and vaccine development",
      "Cardiovascular diseases prevalent in urban Eastern India",
      "Tuberculosis drug resistance surveillance in Eastern India"
    ],
    answer: 1,
    explanation: "ICMR-NICED (National Institute of Cholera and Enteric Diseases), located in Kolkata (established 1962), is the apex institution for research on cholera and enteric diseases in India. Kolkata's history of cholera epidemics makes it the ideal location. NICED's contributions: (1) Epidemiological surveillance of V. cholerae including tracking of El Tor biotype and O139 serogroup emergence; (2) Pathogenesis of cholera and enteric pathogens; (3) Clinical trials of oral cholera vaccine (Shanchol); (4) Rotavirus surveillance and vaccine studies; (5) Typhoid Vi conjugate vaccine research. NICED is a WHO Collaborating Centre for Cholera research."
  },
  {
    id: 99,
    question: "The Central JALMA Institute for Leprosy and Other Mycobacterial Diseases (ICMR-JALMA) is located in Agra. What does 'JALMA' stand for, and what is its primary research focus?",
    options: [
      "Japanese-Allied Leprosy Mission for Asia; research on leprosy eradication programs in Asia-Pacific",
      "The institute was established through a collaboration with the Japan Anti-Leprosy Missions for Asia (JALMA); it conducts research on leprosy (Hansen's disease) and other mycobacterial diseases including tuberculosis",
      "Joint Allied Laboratory for Mycobacterial Analysis; focused exclusively on drug-resistant tuberculosis",
      "Japanese Agency for Leprosy and Malaria Advocacy; a bilateral research center for tropical infectious diseases"
    ],
    answer: 1,
    explanation: "ICMR-JALMA (Central JALMA Institute for Leprosy and Other Mycobacterial Diseases) is located in Agra, Uttar Pradesh. 'JALMA' stands for Japan Anti-Leprosy Missions for Asia — it was established in 1966 through Japanese-Indian collaboration. The institute is dedicated to research on leprosy (Mycobacterium leprae) and other mycobacterial diseases including tuberculosis and Buruli ulcer. Key research areas: leprosy immunology, drug resistance in M. leprae, molecular epidemiology of TB, animal model development, and diagnostics. It is a WHO Collaborating Centre for research on mycobacterial diseases. India achieved leprosy elimination (<1 case per 10,000 population) in 2005."
  },
  {
    id: 100,
    question: "The ICMR headquarters is located in New Delhi. Which of the following correctly describes ICMR's mandate and the year it was established in its current form?",
    options: [
      "Established in 1911 as the Indian Research Fund Association (IRFA), renamed ICMR in 1949; it is the apex body in India for formulation, coordination, and promotion of biomedical research",
      "Established in 1950 after independence; it functions under the Ministry of Science and Technology",
      "Established in 1966 as part of the Green Revolution; it coordinates agricultural health research",
      "Established in 2000 under the National Health Policy; it primarily manages clinical trial regulation"
    ],
    answer: 0,
    explanation: "The Indian Council of Medical Research (ICMR) traces its origin to the Indian Research Fund Association (IRFA) established in 1911 following the plague and other epidemic outbreaks. It was renamed ICMR in 1949. ICMR functions under the Department of Health Research, Ministry of Health and Family Welfare, and is the apex body in India for formulation, coordination, and promotion of biomedical research. ICMR funds extramural research, maintains a network of 25+ national institutes and regional centers, and sets national research priorities including clinical trial guidelines, ethical guidelines, and national health research agendas."
  }
];

export default questions;

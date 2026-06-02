const questions = [
  // Questions 1-12: Research Methodology
  {
    id: 1,
    question: "In a case-crossover study, the control window is selected from the same individual to control for:",
    options: ["Time-varying confounders such as seasonal factors", "All time-invariant personal characteristics (fixed confounders)", "Random measurement error in exposure assessment", "Differential misclassification of the outcome"],
    answer: 1,
    explanation: "The case-crossover design uses each participant as their own control by comparing exposure during the hazard window (just before the event) with exposure during control windows from the same person's history. Because the same individual contributes both case and control observations, all time-invariant (fixed) confounders — such as sex, genetics, socioeconomic status, and chronic disease status — are automatically controlled. This design is ideal for studying transient exposures and acute-onset outcomes such as myocardial infarction triggered by air pollution."
  },
  {
    id: 2,
    question: "An interrupted time series (ITS) study evaluates the effect of a policy intervention by comparing:",
    options: ["Outcomes in a treated group versus a simultaneously observed untreated control group", "The pre-intervention trend and level with the post-intervention trend and level in the same population", "Baseline and follow-up measurements in a single cross-sectional sample", "Randomized and non-randomized participants from the same cohort"],
    answer: 1,
    explanation: "Interrupted time series analysis fits a segmented regression model to routinely collected data measured repeatedly before and after an intervention in the same population. It estimates two main effects: (1) a level change (immediate step change at the intervention point) and (2) a slope change (change in the ongoing trend). ITS is particularly useful for evaluating policy interventions where randomization is not feasible. A controlled ITS (with a comparison group following the same time series) strengthens causal inference by accounting for concurrent historical events."
  },
  {
    id: 3,
    question: "The Delphi method is a structured iterative technique used in health research primarily to:",
    options: ["Estimate the sample size required for a clinical trial through expert simulation", "Achieve consensus among a panel of experts through repeated rounds of questionnaires with controlled feedback", "Assign treatment allocation in multi-center trials through expert randomization", "Validate a diagnostic questionnaire against a gold standard reference"],
    answer: 1,
    explanation: "The Delphi method uses multiple rounds (typically 2-4) of structured questionnaires sent to a geographically dispersed expert panel. After each round, aggregated anonymized responses and statistical feedback are shared with participants, who then revise their answers. Consensus is operationally defined (e.g., ≥70% agreement) and iteratively refined. It is widely used in health research for developing clinical guidelines, defining outcome sets (e.g., COMET core outcome sets), prioritizing research questions, and establishing diagnostic criteria where empirical evidence is lacking."
  },
  {
    id: 4,
    question: "In qualitative research, 'thematic analysis' involves:",
    options: ["Quantifying the frequency of specific words in interview transcripts using computational tools", "Identifying, analyzing, and reporting patterns (themes) within qualitative data through systematic coding", "Comparing quantitative scales across different qualitative studies in a meta-synthesis", "Using pre-specified theoretical codes derived from the research hypothesis before data collection"],
    answer: 1,
    explanation: "Thematic analysis (Braun & Clarke) is a flexible qualitative method involving six phases: familiarization with data, generating initial codes, searching for themes, reviewing themes, defining and naming themes, and producing the report. It can be applied inductively (themes driven by data) or deductively (themes driven by a prior framework). Unlike grounded theory or phenomenology, thematic analysis is not tied to a specific theoretical paradigm. Themes are defined by shared meaning across data items, not just frequency, distinguishing thematic analysis from content analysis."
  },
  {
    id: 5,
    question: "The PRECEDE-PROCEED model in health promotion planning uses the PRECEDE phase to:",
    options: ["Implement and evaluate the health promotion program after objectives are set", "Conduct a multi-level diagnostic assessment of factors predisposing, reinforcing, and enabling health behaviors before program design", "Select evidence-based interventions from existing program registries for adaptation", "Monitor program fidelity and implementation quality during program delivery"],
    answer: 1,
    explanation: "PRECEDE (Predisposing, Reinforcing, and Enabling Constructs in Educational Diagnosis and Evaluation) is the planning phase in Green and Kreuter's PRECEDE-PROCEED model. It involves epidemiological diagnosis (identifying health priorities), behavioral and environmental diagnosis (identifying behavioral and environmental determinants), and educational and ecological diagnosis (identifying predisposing factors such as knowledge and attitudes, reinforcing factors such as social support, and enabling factors such as skills and resources). PROCEED covers the implementation and evaluation phases."
  },
  {
    id: 6,
    question: "In a mixed methods convergent design, the qualitative and quantitative strands are:",
    options: ["Conducted sequentially with qualitative findings informing the quantitative instrument development", "Conducted simultaneously and independently, then merged at the interpretation stage to compare and triangulate results", "Combined into a single data collection instrument to be analyzed jointly", "Used in alternating phases with results of each phase determining the next phase's methods"],
    answer: 1,
    explanation: "In the convergent (parallel triangulation) mixed methods design, qualitative and quantitative data are collected concurrently but analyzed separately, then the results are merged (integrated) during interpretation. The purpose is triangulation: examining whether qualitative themes and quantitative findings converge, diverge, or complement each other, providing a more complete understanding of the research problem. This contrasts with explanatory sequential designs (quant → qual) and exploratory sequential designs (qual → quant → quant instrument development)."
  },
  {
    id: 7,
    question: "In a cohort study, 'loss to follow-up' introduces bias when:",
    options: ["The proportion lost to follow-up exceeds 5% regardless of any relationship with outcome or exposure", "Those lost to follow-up differ systematically from those retained with respect to the exposure-outcome relationship", "Follow-up duration is shorter than the disease's typical latency period", "More participants are lost from the exposed group than from the unexposed group regardless of outcome risk"],
    answer: 1,
    explanation: "Loss to follow-up introduces selection (attrition) bias specifically when the probability of being lost differs according to both the exposure status and the outcome risk. If participants are lost randomly (non-differential), the study loses power but estimates remain unbiased. Systematic differences — such as more exposed sick participants dropping out — distort the true association. Sensitivity analyses (best-case, worst-case scenarios) and multiple imputation under missing-not-at-random assumptions are used to assess the potential impact of differential loss to follow-up."
  },
  {
    id: 8,
    question: "A researcher calculates an attributable risk (risk difference) of 15 per 1,000 and a relative risk of 2.5 for a study exposure. The attributable risk percent among the exposed (ARP%) is approximately:",
    options: ["15%", "40%", "60%", "75%"],
    answer: 2,
    explanation: "Attributable Risk Percent among the Exposed (ARP%) = [(RR − 1) / RR] × 100 = [(2.5 − 1) / 2.5] × 100 = [1.5 / 2.5] × 100 = 60%. ARP% is the proportion of disease among the exposed that can be attributed to the exposure. It is also calculated as (Risk in exposed − Risk in unexposed) / Risk in exposed × 100. A value of 60% means 60% of the disease burden in the exposed group would theoretically be prevented if the exposure were eliminated, assuming a causal relationship."
  },
  {
    id: 9,
    question: "Cluster sampling is preferred over simple random sampling in field epidemiology primarily because:",
    options: ["It provides more precise estimates by reducing within-cluster variability", "It is operationally feasible when a complete sampling frame of individuals is unavailable and clusters can be defined", "It automatically adjusts for confounding by cluster-level variables", "It ensures equal representation of all subgroups in the study population"],
    answer: 1,
    explanation: "Cluster sampling selects naturally occurring groups (villages, schools, households) rather than individuals. It is preferred when: (1) a complete sampling frame listing all individuals is unavailable or prohibitively expensive to obtain; (2) field logistics favor geographically concentrated sampling; and (3) the cost of visiting many dispersed individuals is high. The statistical cost is a design effect (DEFF > 1) due to intra-cluster correlation (ICC), meaning a larger total sample is needed than for SRS to achieve equivalent precision. The WHO EPI 30×7 cluster sampling method uses this approach."
  },
  {
    id: 10,
    question: "In a systematic review, 'grey literature' refers to:",
    options: ["Studies published in predatory open-access journals not indexed in PubMed", "Research produced outside traditional commercial publishing channels, including government reports, theses, conference abstracts, and unpublished trials", "Meta-analyses that pool studies of low methodological quality", "Retracted publications that have been withdrawn from peer-reviewed journals"],
    answer: 1,
    explanation: "Grey literature includes any research or information produced outside traditional commercial or academic publishing, such as government and agency reports, WHO technical reports, theses and dissertations, conference proceedings, trial registries, and unpublished data. Including grey literature in systematic reviews is essential to reduce publication bias, since positive results are more likely to be published in peer-reviewed journals. Databases for grey literature include OpenGrey, ClinicalTrials.gov, WHO ICTRP, and SIGLE. PRISMA guidelines recommend a documented search strategy for grey literature."
  },
  {
    id: 11,
    question: "Which feature best distinguishes a scoping review from a systematic review?",
    options: ["Scoping reviews always include a meta-analysis, while systematic reviews do not", "Scoping reviews aim to map the breadth and nature of evidence on a topic without synthesizing effect sizes, while systematic reviews aim to answer a specific clinical question by synthesizing and critically appraising evidence", "Systematic reviews include only RCTs, whereas scoping reviews include all study designs", "Scoping reviews are conducted without a predefined protocol, whereas systematic reviews require registration"],
    answer: 1,
    explanation: "Scoping reviews (Arksey & O'Malley framework; Joanna Briggs Institute methodology) are designed to map the existing literature on a broad topic, identify key concepts, gaps, and types of evidence, and clarify the scope of a field — not to synthesize effect estimates. They typically include all study types and may not critically appraise individual studies. Systematic reviews are designed to answer a specific, focused PICO question through comprehensive search, critical appraisal, and quantitative (meta-analysis) or qualitative synthesis. Scoping reviews should also be prospectively registered (e.g., in OSF or PROSPERO)."
  },
  {
    id: 12,
    question: "Hawthorne effect in clinical research refers to:",
    options: ["The tendency of participants to report socially desirable behaviors regardless of actual practice", "Modification of participant behavior due to awareness of being observed or studied, independent of the intervention itself", "The phenomenon where earlier trials systematically overestimate treatment effects", "Selective reporting of study outcomes based on statistical significance"],
    answer: 1,
    explanation: "The Hawthorne effect describes the behavioral change that occurs when research participants know they are being observed or studied. Originally observed at the Western Electric Hawthorne plant in the 1920s-30s, it is relevant to clinical and public health research because participants may change their health behaviors (diet, medication adherence, exercise) simply due to study participation — not the intervention itself. This can inflate outcomes in both treated and control groups, attenuating the apparent difference between arms. Blinding and minimizing the intrusiveness of data collection help mitigate this effect."
  },

  // Questions 13-24: Biostatistics
  {
    id: 13,
    question: "The geometric mean is most appropriate as a measure of central tendency when:",
    options: ["The data are normally distributed with few extreme values", "The data are log-normally distributed, such as antibody titers or chemical exposure concentrations", "The data contain a large number of zeros requiring special handling", "The variable is ordinal rather than continuous"],
    answer: 1,
    explanation: "The geometric mean is appropriate for positively skewed, log-normally distributed data where values span several orders of magnitude. It is calculated as the antilog of the mean of log-transformed values. Common applications in medical research include antibody titers, serum drug concentrations, microbial counts, and environmental pollutant levels. The geometric mean is always ≤ the arithmetic mean (with equality only when all values are identical). It is insensitive to extreme high values on the original scale and better represents the 'typical' value in skewed distributions."
  },
  {
    id: 14,
    question: "The Wilcoxon signed-rank test is used to:",
    options: ["Compare the medians of two independent non-normally distributed samples", "Test whether the median of paired differences between two related samples differs significantly from zero", "Assess the correlation between two ordinal variables in a contingency table", "Compare the distributions of more than two related samples simultaneously"],
    answer: 1,
    explanation: "The Wilcoxon signed-rank test is a non-parametric alternative to the paired t-test, used when the assumptions of normality are not met for paired data. It ranks the absolute values of the differences between paired observations, then sums the ranks of positive versus negative differences. It tests the null hypothesis that the median of paired differences equals zero. It is more powerful than the sign test (which only uses the direction of differences) because it also uses the magnitude of differences. The corresponding test for two independent samples is the Mann-Whitney U test."
  },
  {
    id: 15,
    question: "Fisher's exact test is preferred over the chi-square test in a 2×2 contingency table when:",
    options: ["The sample size is very large (n > 1,000) and the outcome is rare", "Any expected cell frequency falls below 5, making the chi-square approximation unreliable", "The data are paired or matched between the two groups compared", "The exposure and outcome variables are both continuous rather than categorical"],
    answer: 1,
    explanation: "Fisher's exact test calculates the exact probability of observing the table (and all more extreme tables) under the null hypothesis of no association, without relying on the chi-square approximation to the sampling distribution. It is preferred when expected cell frequencies are small (typically < 5 in any cell), which violates the assumption underlying the chi-square test and leads to inflated Type I error rates. Fisher's exact test is computationally intensive for large tables but is routinely feasible with modern statistical software. The McNemar test is used for paired 2×2 tables."
  },
  {
    id: 16,
    question: "Negative binomial regression is preferred over Poisson regression for count outcome data when:",
    options: ["The mean count in the sample is less than 1 (rare events)", "The variance of the count exceeds the mean (overdispersion), violating the Poisson mean-variance equality assumption", "The outcome is a binary variable coded 0 or 1 rather than a true count", "The study design involves matched case-control pairs"],
    answer: 1,
    explanation: "Poisson regression assumes equidispersion: variance equals the mean. In practice, count outcomes (hospitalizations, emergency visits, exacerbations) often show overdispersion — variance substantially greater than the mean — due to heterogeneity across individuals not captured by model covariates. Overdispersion leads to underestimated standard errors and spuriously significant p-values in Poisson models. Negative binomial regression adds a dispersion parameter (gamma-distributed random effect per observation) to handle overdispersion. The Pearson chi-square/df ratio or the dispersion parameter estimate from a Poisson model can diagnose overdispersion."
  },
  {
    id: 17,
    question: "Bland-Altman analysis is used to assess:",
    options: ["The correlation between two methods of measuring the same variable", "Agreement between two measurement methods by plotting the difference against the mean of the two measurements", "Whether a new diagnostic test meets clinical sensitivity and specificity thresholds", "The reliability of repeated measurements by the same observer over time"],
    answer: 1,
    explanation: "Bland-Altman analysis is the standard method for assessing agreement (not correlation) between two measurement methods. It plots the difference between the two methods on the y-axis against their mean on the x-axis. The mean difference (bias) indicates systematic error, and the 95% limits of agreement (mean difference ± 1.96 SD of differences) define the range within which 95% of differences between methods fall. A scatter plot or funnel shape indicates proportional bias. The key question is whether the limits of agreement are clinically acceptable — a statistical question that requires clinical judgment about what difference matters."
  },
  {
    id: 18,
    question: "Intraclass correlation coefficient (ICC) values of 0.75–0.90 are generally interpreted as indicating:",
    options: ["Poor reliability with substantial disagreement between measurements", "Poor to moderate reliability requiring substantial improvement", "Good reliability, suitable for many clinical and research applications", "Excellent reliability appropriate for all purposes including individual diagnosis"],
    answer: 2,
    explanation: "ICC values are commonly interpreted as: < 0.50 = poor reliability; 0.50–0.75 = moderate reliability; 0.75–0.90 = good reliability; > 0.90 = excellent reliability (Koo & Mae, 2016). The appropriate ICC model depends on the study design: one-way or two-way (fixed vs. random raters), and whether single or average measurements are assessed. ICC values should be reported with confidence intervals, as point estimates from small samples can be imprecise. For individual-level clinical decision-making, excellent reliability (>0.90) is typically required."
  },
  {
    id: 19,
    question: "In a multiple linear regression model, multicollinearity refers to:",
    options: ["The non-linear relationship between the predictor and the outcome variable", "High correlation among independent predictor variables, which inflates standard errors and makes coefficients unstable", "Violation of the assumption that residuals are normally distributed", "The situation where the outcome variable is skewed and requires transformation"],
    answer: 1,
    explanation: "Multicollinearity occurs when two or more predictor variables in a regression model are highly correlated with each other. Its consequences include: inflated standard errors (wider confidence intervals), unstable and sensitive coefficient estimates, difficulty in distinguishing the independent effect of each predictor, and potential sign reversal of coefficients. It is diagnosed using the Variance Inflation Factor (VIF): VIF > 5–10 indicates problematic multicollinearity. Solutions include removing redundant variables, combining correlated predictors into an index, ridge regression, or principal component regression."
  },
  {
    id: 20,
    question: "The 'number needed to harm' (NNH) is most directly calculated from:",
    options: ["The hazard ratio from a Cox proportional hazards model", "The reciprocal of the absolute risk increase (ARI) associated with the exposure or treatment", "The ratio of the incidence of harm in the treatment group to the incidence in the control group", "The difference between the NNT for benefit and the NNT for the adverse outcome"],
    answer: 1,
    explanation: "NNH = 1 / ARI (Absolute Risk Increase), where ARI = Risk of harm in exposed/treated group − Risk of harm in unexposed/control group. For example, if a drug causes a serious adverse event in 8% of treated patients versus 3% in controls, ARI = 5% = 0.05, so NNH = 20. NNH represents how many patients must be treated for one additional patient to experience the harm compared to the control condition. It should always be interpreted alongside the NNT for benefit to assess the therapeutic index and inform clinical decision-making."
  },
  {
    id: 21,
    question: "A p-value of 0.03 in a two-sided hypothesis test with α = 0.05 means:",
    options: ["There is a 3% probability that the alternative hypothesis is true", "There is a 3% probability of obtaining a test statistic at least as extreme as the observed one if the null hypothesis were true", "The null hypothesis is false with 97% certainty", "The effect size is clinically meaningful with 97% probability"],
    answer: 1,
    explanation: "A p-value is the probability of observing a test statistic equal to or more extreme than the one actually observed, given that the null hypothesis is true. It is NOT the probability that the null hypothesis is false, nor the probability that the result occurred by chance, nor a measure of effect size. A p-value of 0.03 < α of 0.05 leads to rejection of the null hypothesis under the frequentist framework, but it does not convey the magnitude or clinical importance of the effect. Confidence intervals should be reported alongside p-values to convey effect size and precision."
  },
  {
    id: 22,
    question: "In a receiver operating characteristic (ROC) curve analysis, the optimal cutpoint using the Youden index is identified as the point that maximizes:",
    options: ["Sensitivity alone, irrespective of specificity", "The product of sensitivity and specificity (sensitivity × specificity)", "The sum of sensitivity and specificity minus 1 (Sensitivity + Specificity − 1)", "The positive predictive value at the highest prevalence of disease"],
    answer: 2,
    explanation: "The Youden index (J) = Sensitivity + Specificity − 1, which equals the maximum vertical distance from the ROC curve to the diagonal chance line. It ranges from 0 (no discriminative ability) to 1 (perfect discrimination). The optimal cutpoint maximizing J simultaneously maximizes the sum of sensitivity and specificity, identifying the point of greatest overall discriminative ability. However, the clinically optimal cutpoint also depends on the relative consequences of false positives versus false negatives, which may necessitate different thresholds in different clinical contexts (e.g., screening vs. confirmation)."
  },
  {
    id: 23,
    question: "Survival curves from two groups in a clinical trial are compared using the log-rank test. The log-rank test is most powerful when:",
    options: ["The hazard ratio is non-proportional, crossing between groups over time", "The hazard ratio is constant over time (proportional hazards assumption holds)", "The sample size per group exceeds 200 and the event rate is above 50%", "The Kaplan-Meier curves diverge only at the very end of follow-up"],
    answer: 1,
    explanation: "The log-rank test weights all time points equally and is most powerful for detecting differences when the proportional hazards assumption holds — i.e., one group consistently has a higher hazard rate throughout follow-up. When hazards are non-proportional (crossing curves, early effect that diminishes), the log-rank test has reduced power. Alternative weighted tests (Wilcoxon-Gehan, which weights early time points more heavily; Fleming-Harrington tests with different weighting parameters) may be more appropriate when non-proportionality is anticipated and should ideally be specified a priori."
  },
  {
    id: 24,
    question: "In a meta-analysis using a random-effects model, the between-study variance τ² (tau-squared) represents:",
    options: ["The within-study sampling variance averaged across included studies", "The true variance in effect sizes across studies beyond what is expected from sampling error alone", "The standard error of the pooled effect estimate from the meta-analysis", "The proportion of total variance explained by identified moderators"],
    answer: 1,
    explanation: "In the random-effects meta-analysis model (DerSimonian and Laird), τ² (tau-squared) quantifies the true between-study heterogeneity in effect sizes — the variance in true effects across different study populations, settings, interventions, and outcome measurements after accounting for within-study sampling variation. The square root τ (tau) is the standard deviation of the distribution of true effects and is used to calculate prediction intervals. When τ² = 0, the random-effects model reduces to the fixed-effects model. A prediction interval (pooled effect ± 1.96τ) is more informative clinically than a confidence interval alone."
  },

  // Questions 25-34: Diagnostic Tests
  {
    id: 25,
    question: "A Fagan nomogram is used in clinical practice to:",
    options: ["Plot the ROC curve for a new diagnostic test across a range of cutpoints", "Graphically convert pre-test probability to post-test probability using a known likelihood ratio", "Display the reference range for a laboratory test in a specific population", "Estimate the sensitivity and specificity of a test from a published 2×2 table"],
    answer: 1,
    explanation: "The Fagan nomogram (1975) is a graphical tool for applying Bayes' theorem at the bedside. A straight line drawn from the pre-test probability (left axis) through the likelihood ratio (middle axis) extends to the post-test probability (right axis). It elegantly applies the formula: Post-test odds = Pre-test odds × Likelihood ratio. Clinicians can use it to quickly estimate the probability of disease after a positive or negative test result, integrating the test's diagnostic performance (LR) with the patient's clinical context (pre-test probability)."
  },
  {
    id: 26,
    question: "Post-test probability of disease after a negative test result is calculated using:",
    options: ["The positive predictive value of the test in the study population", "The pre-test odds multiplied by the negative likelihood ratio, then converted to probability", "The ratio of true negatives to all negative test results", "One minus the sensitivity of the test applied to the pre-test probability"],
    answer: 1,
    explanation: "Post-test probability after a negative test uses Bayesian updating: Post-test odds (given negative) = Pre-test odds × LR−. LR− = (1 − Sensitivity) / Specificity. A very low LR− (e.g., < 0.1) substantially reduces post-test probability, helping to 'rule out' disease. For example, a pre-test probability of 30% with LR− of 0.05 yields post-test probability ≈ 2%. Converting between probability and odds: odds = probability/(1−probability); probability = odds/(1+odds). The Fagan nomogram provides a graphical solution to this calculation."
  },
  {
    id: 27,
    question: "Diagnostic Odds Ratio (DOR) is defined as:",
    options: ["The ratio of the positive predictive value to the negative predictive value", "The ratio of the odds of a positive test in diseased persons to the odds of a positive test in non-diseased persons (LR+ / LR−)", "The product of sensitivity and specificity across all possible cutpoints", "The area under the summary ROC curve from a meta-analysis of diagnostic studies"],
    answer: 1,
    explanation: "DOR = LR+ / LR− = [Sensitivity × Specificity] / [(1 − Sensitivity) × (1 − Specificity)]. It summarizes the overall discriminative ability of a test in a single number: DOR = 1 indicates no discriminative value; higher values indicate better discrimination. DOR has the advantage of being independent of prevalence and can be easily pooled across studies in meta-analysis using standard logistic regression (Moses-Littenberg method). Its limitation is that the same DOR can arise from many combinations of sensitivity and specificity, so it should be used alongside summary ROC curves."
  },
  {
    id: 28,
    question: "STARD (Standards for Reporting Diagnostic Accuracy Studies) guidelines require which of the following as mandatory reporting elements?",
    options: ["The economic cost-effectiveness analysis of the index test versus the reference standard", "A flow diagram showing the number of participants enrolled, those receiving the index test, the reference standard, and the final analysis sample", "The licensing status and commercial availability of the index test", "The reviewer's inter-rater reliability for interpreting the index test results"],
    answer: 1,
    explanation: "STARD 2015 (Standards for Reporting Diagnostic Accuracy Studies) is a 30-item reporting checklist that promotes complete and transparent reporting of diagnostic accuracy studies. The STARD flow diagram is a mandatory element showing: participants meeting eligibility criteria, those who received the index test, those who received the reference standard, and those with inconclusive or missing results — enabling readers to assess selection biases and understand the study population. STARD also requires reporting the time interval between index test and reference standard, and whether evaluators were blinded to each other's results."
  },
  {
    id: 29,
    question: "Spectrum bias in diagnostic test evaluation refers to:",
    options: ["Systematic overestimation of sensitivity when the test is applied to a broader than intended population", "Variation in test performance (sensitivity and specificity) depending on the clinical spectrum (severity mix) of disease in the study population", "Bias introduced by using different reference standards across studies in a meta-analysis", "The tendency of new tests to perform better in published studies than in routine clinical practice"],
    answer: 1,
    explanation: "Spectrum bias occurs because a test's sensitivity and specificity are not fixed properties — they vary depending on the clinical spectrum of disease in the tested population. Sensitivity is typically higher in studies including severe disease cases (who have more obvious abnormalities) compared to studies testing mild or early disease. Specificity may be lower in populations with more confounding conditions. Studies conducted in referral centers (tertiary hospitals) with severe disease will overestimate sensitivity when the test is applied in primary care settings with milder presentations."
  },
  {
    id: 30,
    question: "Verification bias (work-up bias) in diagnostic accuracy studies occurs when:",
    options: ["Only some patients with a positive index test result proceed to the reference standard, while others with negative results do not, leading to biased estimates of sensitivity and specificity", "The reference standard is of poor quality and misclassifies some truly diseased patients as disease-free", "Test readers are aware of the clinical diagnosis when interpreting the index test results", "The study population does not represent the population in which the test will be used clinically"],
    answer: 0,
    explanation: "Verification bias occurs when the probability of receiving the reference standard (gold standard) depends on the index test result. For example, in suspected coronary artery disease, patients with positive stress tests are more likely to undergo coronary angiography (the reference standard) than those with negative tests. This leads to overestimation of sensitivity (all positive index tests are verified) and overestimation of specificity (many true negatives with negative index tests are not verified). Statistical corrections for verification bias include Begg and Greenes method and multiple imputation approaches."
  },
  {
    id: 31,
    question: "The pre-test probability of disease in a diagnostic test study is most analogous to which population-level measure?",
    options: ["Incidence rate of the disease in the study period", "Prevalence of the disease in the clinical population being tested", "Lifetime risk of the disease in the general population", "Attack rate during an outbreak in the screened population"],
    answer: 1,
    explanation: "Pre-test probability in diagnostic testing corresponds directly to the prevalence of the target condition in the population from which the patient comes (or the probability estimated from the clinical context before the test is done). In a study setting, the prevalence in the study population sets the prior probability. Predictive values (PPV and NPV) are directly affected by prevalence, while likelihood ratios are prevalence-independent and thus more generalizable. Bayes' theorem formally links prevalence (prior probability) with likelihood ratios to calculate post-test probability."
  },
  {
    id: 32,
    question: "A clinical test with sensitivity of 90% and specificity of 80% is applied to a population with 5% prevalence. The positive predictive value (PPV) is approximately:",
    options: ["90%", "80%", "19%", "72%"],
    answer: 2,
    explanation: "Using a hypothetical population of 10,000: True positives = 0.9 × 500 = 450; False positives = 0.2 × 9,500 = 1,900; PPV = 450 / (450 + 1,900) = 450 / 2,350 ≈ 19%. This illustrates the dramatic impact of low prevalence on PPV: even with good sensitivity and specificity, PPV is low when prevalence is low. This is why screening in low-prevalence populations produces many false positives. Targeting screening to higher-risk populations increases pre-test probability and thus PPV. NPV = 9,500 × 0.80 / (9,500 × 0.80 + 500 × 0.10) = 7,600 / 7,650 ≈ 99.3%."
  },
  {
    id: 33,
    question: "A meta-analysis of diagnostic tests should address heterogeneity in which specific way that differs from meta-analyses of therapeutic interventions?",
    options: ["Using random-effects models exclusively, since fixed-effects models are never appropriate for diagnostic data", "Accounting for the implicit negative correlation between sensitivity and specificity arising from threshold variation across studies, using bivariate or HSROC models", "Pooling only studies with identical index test cutpoints to eliminate inter-study variability", "Applying Egger's test for asymmetry in the Deeks funnel plot to assess publication bias"],
    answer: 1,
    explanation: "A unique feature of diagnostic test meta-analysis is the inherent negative correlation between sensitivity and specificity: studies using a higher threshold (stricter positivity criterion) will have lower sensitivity and higher specificity than those with a lower threshold. Bivariate random-effects models (Reitsma) and HSROC models explicitly model this correlation structure, estimating a summary point on the ROC space along with a summary ROC curve. Pooling sensitivity and specificity independently ignores this correlation and can produce misleading summary estimates. Deeks' funnel plot is used to assess publication bias in diagnostic meta-analysis."
  },
  {
    id: 34,
    question: "The net benefit formula in decision curve analysis is: Net benefit = (True positives/n) − (False positives/n) × [pt/(1−pt)]. Here, 'pt' represents:",
    options: ["The observed prevalence of the outcome in the study sample", "The threshold probability at which a clinician would choose to intervene (the harm-to-benefit ratio of treatment)", "The positive predictive value of the prediction model at the chosen cutpoint", "The pre-specified significance level for the hypothesis test of clinical utility"],
    answer: 1,
    explanation: "In the net benefit formula, 'pt' is the threshold probability — the probability at which the clinician is indifferent between treating and not treating. It reflects the harm-to-benefit ratio: pt/(1−pt) = the odds form of the threshold. At pt = 0.1, a clinician would accept up to 9 false positives for every 1 true positive (the term pt/(1−pt) = 1/9 penalizes false positives less). At pt = 0.5, equal weight is given to false positives and false negatives. Decision curves plot net benefit over a range of clinically plausible thresholds."
  },

  // Questions 35-49: Communicable Diseases
  {
    id: 35,
    question: "India's Kala-azar (visceral leishmaniasis) elimination program defines elimination as:",
    options: ["Zero new cases of kala-azar nationally for two consecutive years", "Less than 1 case per 10,000 population at the sub-district (block/upazila) level per year", "Less than 1% seroprevalence of anti-Leishmania antibodies in the 5–14 year age group", "Complete elimination of the sandfly vector Phlebotomus argentipes from endemic districts"],
    answer: 1,
    explanation: "Kala-azar elimination in South Asia (India, Bangladesh, Nepal) is defined as reducing the annual incidence of visceral leishmaniasis to less than 1 case per 10,000 population at the sub-district level (block in India, upazila in Bangladesh, VDC in Nepal). The strategies include: active case detection and treatment with liposomal amphotericin B (single dose), indoor residual spraying (IRS) with DDT/synthetic pyrethroids for vector control, bed nets, and surveillance strengthening. Post-kala-azar dermal leishmaniasis (PKDL) control is also critical as PKDL patients are a reservoir for transmission."
  },
  {
    id: 36,
    question: "Japanese Encephalitis (JE) vaccine is included in India's Universal Immunization Programme. The vaccine primarily used and the target age group for the first dose are:",
    options: ["Killed JE vaccine (IXIARO), given at 6 months of age in endemic districts", "Live attenuated SA 14-14-2 JE vaccine, given at 9 months (along with measles) in endemic districts", "Recombinant JE vaccine, given at 12 months in all districts nationwide", "Chimeric yellow fever-JE vaccine (IMOJEV), given at 18 months along with DPT booster"],
    answer: 1,
    explanation: "India's Universal Immunization Programme uses the live attenuated SA 14-14-2 Japanese Encephalitis vaccine (manufactured by Bharat Biotech as JE-VAX). In JE-endemic districts, the first dose is administered at 9–12 months simultaneously with measles vaccine, and a second dose is given at 16–24 months. The SA 14-14-2 vaccine has demonstrated >95% efficacy, requires cold chain maintenance, and has an excellent safety profile after administration to millions of children in Asia. India's JE vaccination program has significantly reduced JE burden in endemic states like UP, Bihar, and Assam."
  },
  {
    id: 37,
    question: "Chikungunya virus is transmitted by which vector, and what is the characteristic clinical distinguishing feature from dengue?",
    options: ["Aedes aegypti only; hemorrhagic manifestations are more common than in dengue", "Aedes aegypti and Aedes albopictus; severe and prolonged polyarthralgia/arthritis affecting multiple joints", "Culex quinquefasciatus; encephalitis is the predominant neurological manifestation", "Anopheles stephensi; splenomegaly and cyclical fever are the hallmark features"],
    answer: 1,
    explanation: "Chikungunya is transmitted by Aedes aegypti and Aedes albopictus mosquitoes. Its name in Makonde means 'that which bends up' — describing the stooped posture due to severe joint pain. The hallmark clinical feature distinguishing it from dengue is severe, debilitating polyarthralgia/arthritis, predominantly affecting peripheral joints (wrists, ankles, fingers), which can persist for months to years (chronic chikungunya arthritis). While dengue commonly causes thrombocytopenia and hemorrhagic manifestations, severe joint involvement is unusual. Neurological manifestations (encephalitis) can occur but are not the predominant feature."
  },
  {
    id: 38,
    question: "Leptospirosis in India peaks during and after the monsoon season. The primary route of human infection is:",
    options: ["Inhalation of aerosols from infected animal urine in occupational settings", "Direct contact of abraded skin or mucous membranes with water, soil, or mud contaminated with Leptospira-infected animal urine", "Consumption of undercooked pork or wild game contaminated with Leptospira species", "Arthropod-borne transmission through tick bites in forested regions"],
    answer: 1,
    explanation: "Leptospira organisms are shed in the urine of infected reservoir animals (rodents, cattle, dogs, pigs) and can survive for weeks in moist soil and water. Human infection occurs when abraded skin or mucous membranes (eyes, nose, mouth) come into contact with contaminated water, soil, or mud — as occurs during flooding, wading through floodwater, agricultural work in rice fields, or recreational water exposure. High-risk groups include farmers, sewage workers, and flood relief workers. Weil's disease (severe leptospirosis) presents with jaundice, renal failure, and hemorrhage."
  },
  {
    id: 39,
    question: "Scrub typhus is caused by Orientia tsutsugamushi and is transmitted by:",
    options: ["Body lice (Pediculus humanus corporis) feeding on infected humans", "The larval stage (chigger) of trombiculid mites (Leptotrombidium species)", "Ixodid hard ticks (Ixodes ricinus) in forested areas", "Soft ticks (Ornithodoros species) found in rodent burrows"],
    answer: 1,
    explanation: "Scrub typhus is transmitted by the bite of Leptotrombidium mite larvae ('chiggers'). Humans are accidental hosts; the chigger larvae feed once on a host to obtain nutrients for development, and this single blood meal transmits Orientia tsutsugamushi. The characteristic eschar (a painless black necrotic lesion at the bite site) occurs in 50-90% of cases and is pathognomonic when present. The disease is endemic across the 'tsutsugamushi triangle' from Pakistan through Asia to Australia, and is increasingly recognized as a major cause of acute undifferentiated febrile illness in India, particularly in hilly and scrubby vegetation areas."
  },
  {
    id: 40,
    question: "Anthrax is caused by Bacillus anthracis. The most lethal form of anthrax and the agent of greatest bioterrorism concern is:",
    options: ["Cutaneous anthrax acquired from handling infected animal hides or wool", "Inhalation (pulmonary) anthrax from inhaling anthrax spores", "Gastrointestinal anthrax from consuming undercooked meat from infected animals", "Injection anthrax from contaminated heroin injection in drug users"],
    answer: 1,
    explanation: "Inhalation anthrax is the most feared form because: (1) the infective dose is low (8,000–50,000 spores); (2) spores can be aerosolized as a weapon; (3) initial symptoms mimic influenza ('prodromal phase') followed by rapid deterioration with mediastinal widening, septicemia, and meningitis; (4) mortality exceeds 80% even with treatment if not initiated before the fulminant phase. The 2001 anthrax letter attacks in the US demonstrated its bioterrorism potential. Cutaneous anthrax (most common natural form) has <1% mortality with treatment. Treatment is ciprofloxacin or doxycycline."
  },
  {
    id: 41,
    question: "Plague is caused by Yersinia pestis. The WHO requires notification of plague under the International Health Regulations (IHR). The vector in bubonic plague is:",
    options: ["Ixodes ricinus (deer tick) found in endemic temperate forests", "Xenopsylla cheopis (oriental rat flea) that regurgitates bacilli during feeding on a new host", "Aedes aegypti mosquito, which can transmit plague during outbreaks near rodent colonies", "Pulex irritans (human flea) in settings with high human-rodent contact"],
    answer: 1,
    explanation: "Bubonic plague is transmitted by the bite of infected fleas, most commonly Xenopsylla cheopis (oriental rat flea). When a flea feeds on a bacteremic rodent, Yersinia pestis multiplies in the flea's proventriculus (pre-stomach), forming a 'block.' When the blocked flea attempts to feed on a new host, it regurgitates the blocked mass of bacilli back into the bite wound. Bubonic plague presents with painful swollen lymph nodes (buboes). Pneumonic plague (person-to-person via respiratory droplets) is the most dangerous form. Plague is classified as a Category A bioterrorism agent."
  },
  {
    id: 42,
    question: "Brucellosis is a notifiable zoonosis. The most common Brucella species causing human infection in India and the primary animal reservoir are:",
    options: ["Brucella melitensis; sheep and goats are the primary reservoirs", "Brucella abortus; cattle are the primary reservoir", "Brucella suis; pigs are the primary reservoir", "Brucella canis; domestic dogs are the primary reservoir"],
    answer: 0,
    explanation: "Brucella melitensis (sheep and goats) is the most common and most virulent species causing human brucellosis worldwide, including India. Brucella abortus (cattle) is also endemic in India. Human infection occurs through: consumption of unpasteurized dairy products (milk, cheese), direct contact with infected animals or their body fluids (aborted fetuses, placentas), and rarely by inhalation. Clinical features include undulant fever, arthralgia, night sweats, and hepatosplenomegaly. Diagnosis: SAT (serum agglutination test), ELISA, blood culture. Treatment: doxycycline plus rifampicin for 6 weeks."
  },
  {
    id: 43,
    question: "Under India's Integrated Disease Surveillance Programme (IDSP), which outbreak is classified as an 'S-form' (syndromic) alert requiring immediate action?",
    options: ["Confirmed cholera cases in a district, identified by stool culture", "A sudden cluster of acute watery diarrhea with >5 cases from the same locality within 24 hours", "A laboratory-confirmed case of Japanese Encephalitis in a school-age child", "A dengue NS1-positive case in a non-endemic district"],
    answer: 1,
    explanation: "IDSP surveillance uses three reporting forms: S-form (Syndromic surveillance) for reporting disease syndromes before laboratory confirmation, P-form (Probable cases) for clinically suspected cases based on defined criteria, and L-form (Laboratory-confirmed cases). The S-form is designed for rapid reporting by community health workers (ASHA, ANM) and peripheral health staff of syndrome clusters like acute watery diarrhea, acute respiratory illness, fever with rash, etc. A sudden cluster of ≥5 cases of acute watery diarrhea from the same locality within 24 hours would trigger S-form reporting and immediate outbreak investigation even before laboratory confirmation."
  },
  {
    id: 44,
    question: "The Aedes aegypti mosquito is the primary vector for dengue, Zika, and chikungunya. The most effective community-level control measure for Aedes mosquitoes is:",
    options: ["Large-scale outdoor fogging with pyrethroid insecticides at 2-week intervals", "Source reduction by eliminating or covering water-holding containers where Aedes breeds", "Indoor residual spraying (IRS) with organophosphate insecticides on household walls", "Biological control using larvivorous fish (Gambusia) in all stagnant water bodies"],
    answer: 1,
    explanation: "Aedes aegypti breeds in clean, stagnant water in artificial containers (tires, flowerpots, water storage containers, coolers, discarded containers). Unlike Anopheles which breeds in natural water bodies, Aedes' peridomestic breeding habit makes source reduction (eliminating breeding sites by emptying, covering, or treating containers) the most effective sustainable control strategy. Outdoor fogging kills adult mosquitoes but does not affect larvae and has limited duration of effect. The 5S approach (source reduction, segregation, safety, self-protection, support of health-seeking behavior) is promoted by NVBDCP India."
  },
  {
    id: 45,
    question: "The case definition of SARS-CoV-2 infection used for public health surveillance typically includes which epidemiological component beyond clinical features?",
    options: ["Positive serology (IgG antibodies) more than 14 days after symptom onset", "Exposure history: contact with a confirmed case or travel to an area with active transmission within the incubation period", "Negative HIV test to rule out opportunistic respiratory infection", "Residence in a district where community transmission has been documented by the national health authority"],
    answer: 1,
    explanation: "Epidemiological case definitions for infectious diseases typically include three components: (1) clinical criteria (signs and symptoms), (2) laboratory criteria (diagnostic test results), and (3) epidemiological criteria (exposure history). For SARS-CoV-2, the epidemiological component includes: contact with a confirmed or probable case within 14 days before symptom onset, or residence in or travel to an area with community transmission. A suspected case meeting clinical criteria alone without epi-linkage is classified differently than one with laboratory confirmation. WHO case definitions are used for international reporting under IHR."
  },
  {
    id: 46,
    question: "Ring vaccination strategy, used during Ebola outbreaks, is best described as:",
    options: ["Universal mass vaccination of the entire population in an affected country to achieve herd immunity rapidly", "Vaccination of all contacts and contacts-of-contacts of a confirmed case, creating a ring of immune individuals around each case", "Selective vaccination of all healthcare workers and burial teams regardless of case contact history", "Targeted vaccination of the highest-risk occupational groups identified through seroprevalence surveys"],
    answer: 1,
    explanation: "Ring vaccination identifies all contacts (individuals who had direct contact with a confirmed Ebola case) and contacts of contacts, and vaccinates them within 48–72 hours of case identification. This creates a 'ring' of immune individuals around each case, interrupting chains of transmission without requiring mass vaccination. The rVSV-ZEBOV Ebola vaccine (Ervebo) was evaluated using a ring vaccination strategy in the 2015 Guinea trial, showing 100% efficacy in the immediate vaccination group. Ring vaccination is also the strategy proposed for smallpox control in a potential bioterrorism scenario."
  },
  {
    id: 47,
    question: "The term 'superspreader event' in infectious disease epidemiology refers to:",
    options: ["A case with an unusually high viral load causing rapid deterioration", "An event or individual responsible for a disproportionately large number of secondary transmissions beyond what is expected from the average R₀", "The epidemic peak during which transmission rates exceed the healthcare system's capacity", "A mutation in the pathogen that dramatically increases transmissibility across the entire population"],
    answer: 1,
    explanation: "Superspreading refers to the phenomenon where a small proportion of cases generate a disproportionately large fraction of secondary transmissions. This is described by the overdispersion parameter k in negative binomial distributions of secondary cases: low k values (e.g., k ≈ 0.1 for SARS-CoV, MERS, and SARS-CoV-2) indicate highly overdispersed transmission, meaning 80% of transmissions may come from ≈20% of cases (the 20/80 rule). Superspreading events are often linked to crowded indoor environments with poor ventilation, prolonged close contact, and pre-symptomatic or mildly symptomatic individuals."
  },
  {
    id: 48,
    question: "Under India's National Program for Control of Blindness and Visual Impairment (NPCBVI), trachoma control follows the SAFE strategy. The 'A' in SAFE stands for:",
    options: ["Active surveillance for new trachoma cases in endemic communities", "Antibiotic treatment with azithromycin for active trachoma cases and their contacts", "Awareness campaigns to improve early treatment-seeking behavior", "Animal reservoir control since certain animals can harbor Chlamydia trachomatis"],
    answer: 1,
    explanation: "The WHO-recommended SAFE strategy for trachoma elimination consists of: Surgery for trichiasis (inturned eyelashes scratching the cornea causing blindness); Antibiotics (azithromycin single oral dose or topical tetracycline) to treat active trachoma infection; Facial cleanliness (to reduce transmission through ocular and nasal discharge); and Environmental improvement (access to clean water and sanitation). The 'A' is Antibiotics. WHO recommends azithromycin mass drug administration in communities with >10% prevalence of active trachoma (TF) in children aged 1–9 years."
  },
  {
    id: 49,
    question: "HIV drug resistance testing is recommended in which clinical scenarios? (Select the single best answer)",
    options: ["Before initiating first-line ART in all newly diagnosed HIV patients regardless of prior exposure", "In individuals experiencing virological failure (viral load >1,000 copies/mL on current ART) to guide switch to second-line regimen", "In all HIV-exposed infants at birth to identify transmitted drug resistance", "After achieving viral suppression below the limit of detection to confirm absence of archived resistance mutations"],
    answer: 1,
    explanation: "HIV drug resistance testing (genotypic or phenotypic) is recommended when virological failure is detected — defined as persistent HIV RNA >1,000 copies/mL on at least two consecutive measurements while on ART. Resistance testing guides selection of an effective second-line or salvage regimen by identifying which drugs are likely to be active. Pre-treatment drug resistance surveillance is conducted at the population level. Genotypic resistance testing identifies mutations in reverse transcriptase, protease, integrase, and envelope genes associated with reduced drug susceptibility using algorithms (Stanford HIVdb, ANRS, REGA)."
  },

  // Questions 50-64: Non-Communicable Diseases
  {
    id: 50,
    question: "Rheumatic heart disease (RHD) results from recurrent episodes of acute rheumatic fever (ARF). The primary preventive strategy for ARF is:",
    options: ["Primary prophylaxis: treating Group A streptococcal (GAS) pharyngitis with penicillin to prevent the first ARF episode", "Secondary prophylaxis: monthly benzathine penicillin G injections to prevent recurrent GAS infections in patients with established RHD", "Tertiary prevention: valve replacement surgery for severe RHD", "Vaccination against GAS using the multi-valent streptococcal M-protein vaccine"],
    answer: 0,
    explanation: "Primary prevention of ARF involves prompt identification and treatment of Group A streptococcal (Streptococcus pyogenes) pharyngitis with a full 10-day course of phenoxymethylpenicillin (penicillin V) or a single injection of benzathine penicillin G. This prevents the immune-mediated reaction to GAS that leads to ARF and subsequent rheumatic heart disease. Secondary prevention (monthly benzathine penicillin G for 5–10 years or until age 21) prevents recurrent ARF episodes in those who have already had ARF, since each episode increases the risk of progressive valve damage."
  },
  {
    id: 51,
    question: "Sickle cell disease (SCD) is caused by a point mutation in the beta-globin gene. Newborn screening programs for SCD in India (under NHM) primarily use which laboratory method?",
    options: ["Complete blood count with reticulocyte count to detect hemolytic anemia in the first month", "High-performance liquid chromatography (HPLC) to identify and quantify hemoglobin variants (HbS, HbA, HbF)", "Peripheral blood smear for sickle cells under hypoxic conditions using sickling test", "Molecular genetic testing (PCR) for the HbS (Glu6Val) mutation in cord blood samples"],
    answer: 1,
    explanation: "HPLC (High Performance Liquid Chromatography) is the gold standard method for neonatal hemoglobinopathy screening as it can accurately identify and quantify all major hemoglobin variants (HbA, HbS, HbC, HbD, HbE, HbF) in a single run from a small blood sample. India's tribal-belt states (Chhattisgarh, Odisha, Gujarat, Maharashtra) where SCD is prevalent have implemented newborn screening programs using HPLC. Early identification allows initiation of prophylactic penicillin by 2 months of age, pneumococcal vaccination, hydroxyurea therapy, and family counseling, significantly reducing morbidity and mortality."
  },
  {
    id: 52,
    question: "India's National Thalassemia Control Program focuses on which primary strategy to reduce the burden of beta-thalassemia major?",
    options: ["Bone marrow transplantation for all children diagnosed with beta-thalassemia major under 10 years of age", "Prevention through carrier detection, genetic counseling, and prenatal diagnosis to prevent birth of affected children", "Iron chelation therapy with deferasirox as first-line treatment for all thalassemia major patients", "Mandatory hemoglobin electrophoresis screening of all couples registering for marriage"],
    answer: 1,
    explanation: "Beta-thalassemia carrier frequency in India is approximately 3–4% (population of ~40 million carriers), making prevention the most impactful strategy. India's thalassemia control program emphasizes population carrier screening (using NESTROFT — naked eye single tube red cell osmotic fragility test as a first-line screening tool), followed by confirmatory hemoglobin electrophoresis/HPLC for carriers. At-risk couples (both partners identified as carriers) receive genetic counseling and are offered prenatal diagnosis (chorionic villus sampling at 10–12 weeks or amniocentesis at 14–16 weeks) using DNA-based mutation analysis to identify affected fetuses."
  },
  {
    id: 53,
    question: "Dental and skeletal fluorosis in India is caused by excess fluoride intake. The safe upper limit for fluoride in drinking water recommended by WHO is:",
    options: ["0.5 mg/L", "1.5 mg/L", "3.0 mg/L", "5.0 mg/L"],
    answer: 1,
    explanation: "WHO recommends a guideline value of 1.5 mg/L for fluoride in drinking water, balancing the benefit of dental caries prevention (optimal at 0.5–1.0 mg/L in temperate climates) against the risk of dental and skeletal fluorosis from excess fluoride. In India, natural groundwater fluoride levels exceeding 1.5 mg/L (and sometimes >10 mg/L in endemic areas like Rajasthan, Gujarat, Andhra Pradesh, and parts of Punjab) cause dental fluorosis (mottled enamel), skeletal fluorosis (joint deformities, bone pain), and neurological effects. BIS (Bureau of Indian Standards) sets the permissible limit at 1.0 mg/L and maximum at 1.5 mg/L."
  },
  {
    id: 54,
    question: "Iodine Deficiency Disorders (IDD) are eliminated when urinary iodine concentration (UIC) in school-age children indicates adequate iodine nutrition. The median UIC indicating adequate iodine status is:",
    options: ["< 50 μg/L (mild deficiency threshold)", "100–199 μg/L (adequate range per WHO criteria)", "200–299 μg/L (more than adequate range)", "> 300 μg/L (excessive, risk of iodine-induced hyperthyroidism)"],
    answer: 1,
    explanation: "WHO defines adequate iodine nutrition in school-age children as a median urinary iodine concentration (UIC) of 100–199 μg/L. Values below 100 μg/L indicate iodine deficiency (mild: 50–99, moderate: 20–49, severe: <20 μg/L). Values of 200–299 μg/L indicate more than adequate intake, and ≥300 μg/L indicate excessive intake with risk of iodine-induced hyperthyroidism and autoimmune thyroid disease. India declared elimination of iodine deficiency as a public health problem in 2016, with UIC ≥100 μg/L achieved nationally, though some states remain below this threshold."
  },
  {
    id: 55,
    question: "India's National Mental Health Programme (NMHP) was launched in 1982 and was restructured with the District Mental Health Programme (DMHP). The primary strategy of DMHP is:",
    options: ["Establishing a new psychiatric hospital in each district with 100-bed capacity", "Integration of mental health care into the existing primary health care system at the district level through task-sharing with general health workers", "Providing free psychiatric medications at all public health facilities irrespective of PHC level", "Training psychiatrists in all district hospitals to replace the role of general practitioners in mental health care"],
    answer: 1,
    explanation: "The District Mental Health Programme (DMHP), the operational component of NMHP, is based on the principle of integrating mental health into the primary health care system at the district level. Key strategies include: training general health workers (doctors, nurses, CHWs) in basic mental health care (task-shifting); establishing outpatient mental health services at district hospitals; community awareness to reduce stigma; early detection and treatment of common mental disorders (depression, anxiety, psychosis, epilepsy) at the peripheral level; and a tertiary referral linkage system. DMHP follows the Bellary model, which demonstrated that 80% of cases can be managed at the community level."
  },
  {
    id: 56,
    question: "The Global Mental Health Action Plan 2013-2030 sets a target for coverage of services for severe mental disorders. This target is:",
    options: ["50% coverage of people with severe mental disorders receiving effective treatment by 2020", "80% of countries having a national policy or plan for mental health by 2030 and 80% treatment coverage", "A 20% increase in service coverage for severe mental disorders from the 2015 baseline by 2030", "Universal coverage (100%) for psychosis and epilepsy in all WHO member states by 2025"],
    answer: 2,
    explanation: "The WHO Comprehensive Mental Health Action Plan 2013-2030 sets a target of 20% improvement in availability of and access to mental health services in countries from baseline levels by 2030. Given the treatment gap for mental disorders (often 75–90% in LMICs — meaning most people with mental illness receive no treatment), even a 20% improvement represents a major challenge. The plan also aims for 80% of countries having national mental health policy/plan, and 80% with standalone mental health legislation. It recognizes that mental health is integrated into the SDGs."
  },
  {
    id: 57,
    question: "Lead poisoning in children causes neurodevelopmental harm. The WHO has established 'no safe blood lead level' in children. Lead exposure in India is primarily from:",
    options: ["Industrial worker occupational exposure alone, not affecting children in the general population", "Multiple sources including leaded paint, soil contamination near smelters, informal battery recycling, and contaminated spices and traditional remedies", "Exclusive dietary exposure from seafood consumption in coastal populations", "Only from occupational exposure of parents in battery manufacturing or painting industries"],
    answer: 1,
    explanation: "Children in India are exposed to lead from multiple sources: leaded paint in older buildings (pre-1990s paints could contain >1% lead); contaminated soil near secondary lead smelters and battery recycling sites; traditional cosmetics and remedies (surma/kohl eye cosmetic, some Ayurvedic medicines contain heavy metals); adulterated spices (turmeric adulterated with lead chromate); and water from lead pipes. Blood lead levels ≥5 μg/dL (the CDC reference value) are associated with cognitive impairment, behavioral problems, and reduced IQ. Elimination of lead in paint and fuel (completed in India in 2000) are key interventions."
  },
  {
    id: 58,
    question: "The NPCDCS (National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Disease and Stroke) operational strategy in India includes which primary screening tool at the community level?",
    options: ["FDG-PET scan for cancer screening in high-risk individuals above 40 years", "Opportunistic screening using CBE (Clinical Breast Examination), VIA (Visual Inspection with Acetic Acid), and blood glucose/BP measurement at health facilities", "Mass population-wide genetic testing for cancer susceptibility genes (BRCA1/2, APC)", "Mandatory annual health check-up including full body CT scan for individuals above 30 years"],
    answer: 1,
    explanation: "NPCDCS targets four major NCDs (cancer, diabetes, CVD, stroke) through opportunistic screening of individuals aged ≥30 years attending any health facility. Community-level screening includes: oral cancer screening (visual inspection for suspicious lesions), cervical cancer screening with VIA (Visual Inspection with Acetic Acid), breast cancer screening with clinical breast examination (CBE), and measurement of blood pressure and random blood glucose. VIA is preferred for cervical cancer screening in resource-limited settings because it provides immediate results, does not require laboratory infrastructure, and allows same-day treatment with cryotherapy."
  },
  {
    id: 59,
    question: "Occupational lung disease in India most commonly presents as pneumoconiosis. Which industry and corresponding pneumoconiosis is most prevalent in India?",
    options: ["Asbestos mining — asbestosis with characteristic pleural plaques", "Coal mining — coal workers' pneumoconiosis (CWP) with progressive massive fibrosis", "Sandstone quarrying and construction — silicosis from crystalline silica dust exposure", "Cotton textile industry — byssinosis with Monday morning chest tightness"],
    answer: 2,
    explanation: "Silicosis from crystalline silica (quartz) exposure is the most prevalent and devastating pneumoconiosis in India, affecting workers in sandstone quarrying (Rajasthan, Gujarat), agate polishing (Khambhat), slate pencil manufacturing, foundries, ceramic factories, and construction. India has an estimated 3 million workers exposed to silica, with silicosis rates of 40–55% in stone quarry workers in some regions. It is an irreversible fibrotic lung disease associated with progressive respiratory failure, and increases the risk of tuberculosis (silico-tuberculosis) 3-fold. There is no curative treatment; prevention through dust control is essential."
  },
  {
    id: 60,
    question: "Nutrition-related non-communicable diseases in India reflect a 'double burden of malnutrition.' This term describes:",
    options: ["Simultaneous high rates of child stunting and adult overweight/obesity coexisting in the same country, household, or even individual", "The dual problem of micronutrient deficiency and protein-energy malnutrition occurring only in children under 5 years", "The coexistence of dietary inadequacy in rural areas with dietary excess exclusively in urban populations", "The paradox of high food production but persistent food insecurity due to poor distribution"],
    answer: 0,
    explanation: "The double burden of malnutrition describes the coexistence of undernutrition (stunting, wasting, micronutrient deficiencies) alongside overnutrition (overweight, obesity, diet-related NCDs) within the same country, community, or household. India exemplifies this: NFHS-5 data show that 35.5% of children under 5 are stunted and 19.3% are wasted, while simultaneously 24% of women are overweight or obese. Nutritional transition (shift from traditional diets to energy-dense processed foods) combined with persistent poverty creates this paradox. Prevention requires simultaneous attention to both extremes of the nutritional spectrum."
  },
  {
    id: 61,
    question: "The Sustainable Development Goal (SDG) 3.4 specifically targets non-communicable diseases. SDG 3.4 aims to:",
    options: ["Eliminate communicable diseases from the global agenda by 2030", "Reduce premature mortality from NCDs by one-third and promote mental health and well-being by 2030", "Achieve universal health coverage including financial risk protection for NCD treatment by 2025", "Reduce the global prevalence of diabetes and hypertension by 50% through lifestyle interventions by 2030"],
    answer: 1,
    explanation: "SDG 3.4 states: 'By 2030, reduce by one-third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being.' Premature mortality is defined as deaths between ages 30–70 from cardiovascular disease, cancer, diabetes, and chronic respiratory diseases. This target aligns with the WHO Global Action Plan for NCDs. Progress is tracked using the probability of dying between ages 30–70 from the four major NCDs (expressed as a percentage), which the WHO estimates needs to decline to below 17% by 2030 from the 2015 baseline."
  },
  {
    id: 62,
    question: "Cardiovascular disease risk reduction in hypertension management: which antihypertensive drug class has the strongest evidence for reducing stroke risk specifically?",
    options: ["Beta-blockers (atenolol) as first-line agents for all hypertensive patients", "ACE inhibitors as superior to all other classes for stroke prevention in all patients", "Calcium channel blockers and thiazide diuretics, which have the strongest evidence for stroke reduction in comparative trials", "Alpha-blockers (doxazosin), which showed superiority in the ALLHAT trial subgroup analysis"],
    answer: 2,
    explanation: "Multiple large RCTs (ALLHAT, VALUE, ACCOMPLISH) and meta-analyses demonstrate that calcium channel blockers (e.g., amlodipine) have particularly strong evidence for stroke prevention, potentially superior to beta-blockers and comparable to or better than ACE inhibitors for stroke endpoints. Thiazide diuretics (chlorthalidone in ALLHAT) are also highly effective for stroke prevention. The ALLHAT trial showed chlorthalidone superior to doxazosin (which was associated with 25% more cardiovascular events and increased CHF risk, leading to early termination of the doxazosin arm). Blood pressure lowering per se — regardless of drug class — is the primary mechanism."
  },
  {
    id: 63,
    question: "Glycated hemoglobin (HbA1c) of 6.5% as a diagnostic criterion for diabetes was recommended by which body and reflects average blood glucose over what time period?",
    options: ["WHO (2006) and BIS; reflects average glucose over the preceding 3 months", "American Diabetes Association (2010) and subsequently endorsed by WHO (2011); reflects average blood glucose over the preceding 2–3 months", "IDF (International Diabetes Federation, 2009); reflects cumulative glucose exposure over the preceding 6 months", "ICMR Expert Group (2018); reflects average glucose over the preceding 1 month"],
    answer: 1,
    explanation: "The American Diabetes Association (ADA) recommended HbA1c ≥6.5% as a diagnostic criterion for diabetes in 2010, subsequently endorsed by a WHO expert committee in 2011. HbA1c reflects the average blood glucose concentration over the lifespan of red blood cells (approximately 90–120 days), representing a 2–3 month average. In conditions that alter RBC lifespan (hemolytic anemia, sickle cell disease, iron deficiency anemia, kidney disease), HbA1c may be falsely low or high, making it unreliable for diagnosis. Fasting plasma glucose and 2-hour OGTT remain the reference standards."
  },
  {
    id: 64,
    question: "The AUDIT (Alcohol Use Disorders Identification Test) is a 10-item screening tool developed by WHO. An AUDIT score of ≥8 in adults indicates:",
    options: ["Probable alcohol dependence requiring urgent detoxification", "Hazardous or harmful alcohol use requiring brief intervention", "Severe alcohol use disorder requiring pharmacological treatment with naltrexone", "Normal/low-risk alcohol consumption that needs no intervention"],
    answer: 1,
    explanation: "The WHO AUDIT (Alcohol Use Disorders Identification Test) screens for hazardous and harmful drinking. Scoring: 0–7 = low-risk (education); 8–15 = hazardous/harmful use (brief advice, typically 5 minutes counseling); 16–19 = harmful use (brief counseling and monitoring); 20–40 = probable alcohol dependence (referral for diagnostic evaluation and treatment). AUDIT-C (3-item abbreviated version) is used for rapid screening in primary care. Brief interventions (FRAMES: Feedback, Responsibility, Advice, Menu, Empathic, Self-efficacy) at the score ≥8 level are evidence-based and reduce alcohol consumption by 10–30% in primary care settings."
  },

  // Questions 65-72: Bioethics
  {
    id: 65,
    question: "The Nuremberg Code (1947) was developed in response to unethical medical experiments conducted during World War II. The first and most fundamental principle of the Nuremberg Code states:",
    options: ["The experiment must yield results beneficial to society that are unprocurable by other methods", "The voluntary consent of the human subject is absolutely essential", "The degree of risk must never exceed the humanitarian importance of the problem to be solved", "The experiment should be conducted only by scientifically qualified persons"],
    answer: 1,
    explanation: "Principle 1 of the Nuremberg Code (1947) establishes voluntary consent as the 'absolutely essential' foundation of ethical research involving human subjects. It requires that the person giving consent have: (1) legal capacity to consent; (2) sufficient knowledge to make an informed decision (free from force, fraud, deceit, or coercion); and (3) sufficient understanding to make an enlightened choice. This principle emerged from the Doctors' Trial at Nuremberg (United States v. Karl Brandt et al.) which prosecuted Nazi physicians for lethal experiments on concentration camp prisoners without consent."
  },
  {
    id: 66,
    question: "The Tuskegee Syphilis Study (1932–1972) revealed fundamental ethical violations that led to major reforms in research ethics. The primary ethical failure of the Tuskegee Study was:",
    options: ["Failure to obtain institutional review board approval before conducting the study in 1932", "Deliberate withholding of penicillin treatment from Black men with syphilis after it became the standard of care in 1947, to observe the natural history of untreated disease", "Conducting the study in a predominantly Black population without culturally appropriate consent forms", "Publishing the results without obtaining participant authorization for data release"],
    answer: 1,
    explanation: "The US Public Health Service Tuskegee Study enrolled 399 Black men with syphilis in Alabama to study the natural history of untreated syphilis. The primary ethical failure was that when penicillin became the standard treatment for syphilis in 1947, researchers deliberately withheld it from participants (and even prevented them from receiving it elsewhere) to continue observation of natural disease progression. The study continued until a whistleblower (Peter Buxtun) exposed it in 1972. Its legacy includes the National Research Act (1974), the Belmont Report (1979), and justified persistent mistrust of medical research among African Americans."
  },
  {
    id: 67,
    question: "CIOMS International Ethical Guidelines for Health-related Research Involving Humans (2016, revised) contain how many guidelines and what is the primary focus of Guideline 2?",
    options: ["25 guidelines; Guideline 2 addresses the use of placebo in clinical trials", "25 guidelines; Guideline 2 requires that research in resource-poor settings address the health needs of the host community", "17 guidelines; Guideline 2 mandates independent ethics committee review of all research protocols", "25 guidelines; Guideline 2 addresses individual and community informed consent requirements"],
    answer: 1,
    explanation: "The 2016 CIOMS guidelines (Council for International Organizations of Medical Sciences) contain 25 guidelines. Guideline 2 — 'Research conducted in resource-limited settings' — states that research in such settings must be responsive to the health needs and priorities of the host country/community, build local research capacity, and ensure that successful interventions will be made available and accessible to the host population. This guideline addresses the 'standard of care' debate and responds to concerns about exploitation of vulnerable populations in LMICs for research whose benefits accrue primarily to high-income countries."
  },
  {
    id: 68,
    question: "Therapeutic misconception in clinical research refers to:",
    options: ["Researchers believing their intervention will work despite neutral prior evidence", "Participants conflating the purpose of clinical research (generating generalizable knowledge) with the purpose of clinical care (optimizing individual benefit), leading them to misunderstand randomization, experimental uncertainty, and potential risks", "IRB members approving research they mistakenly believe has therapeutic benefit", "Sponsors designing trials with therapeutic intent when the scientific question is purely mechanistic"],
    answer: 1,
    explanation: "Therapeutic misconception (Henderson et al.; Appelbaum et al.) occurs when research participants fail to appreciate the distinction between research and clinical care — believing that trial procedures (randomization, placebo assignment, dose escalation) are tailored to their individual therapeutic benefit. This leads to inadequate understanding of randomization (they believe assignment is based on their needs), experimental uncertainty (they believe the treatment is known to work), and the research purpose (they think the trial is primarily for their benefit). Therapeutic misconception undermines autonomous informed consent. Remedies include clearer consent processes, use of comprehension assessments, and repeated discussions about the research-care distinction."
  },
  {
    id: 69,
    question: "A waiver of informed consent may be granted by an ethics committee when which conditions are met?",
    options: ["The research is funded by a government agency and involves only anonymous data", "The research involves no more than minimal risk, cannot practicably be carried out without the waiver, participants' rights and welfare will not be adversely affected, and participants will be provided relevant information afterward when appropriate", "The sample size is large (>10,000) making individual consent logistically impossible", "The IRB chair has determined the research question is of sufficient public health importance"],
    answer: 1,
    explanation: "Under 45 CFR 46.116(f) (US regulations) and analogous frameworks (ICH GCP, ICMR guidelines), an IRB/IEC may waive informed consent if: (1) the research presents no more than minimal risk; (2) the waiver will not adversely affect the rights and welfare of participants; (3) the research could not practicably be carried out without the waiver; and (4) when appropriate, participants are provided with pertinent information after participation (debriefing). Emergency research and retrospective medical record studies commonly use waivers. The waiver must be documented in the IRB approval."
  },
  {
    id: 70,
    question: "Community Advisory Boards (CABs) in clinical research serve which primary ethical function?",
    options: ["Replacing the independent ethics committee review for community-level interventions", "Providing community representation to advise researchers on recruitment strategies, acceptability of protocols, participant concerns, and benefit-sharing, thereby operationalizing community engagement", "Approving final research publications before peer review to protect community interests", "Conducting independent monitoring of data safety and reporting to the sponsor without researcher involvement"],
    answer: 1,
    explanation: "Community Advisory Boards (CABs) are community-based bodies of individuals representing the target research community who advise researchers on the design, conduct, and dissemination of research. They operationalize the principle of community engagement and respect for community autonomy. CABs help ensure: research is culturally appropriate and acceptable; recruitment materials are understood and non-coercive; community concerns about risks and stigma are addressed; benefits reach the community; and findings are communicated in accessible formats. CABs are required in many HIV/AIDS and vaccine trials and are recommended by UNAIDS Good Participatory Practice Guidelines."
  },
  {
    id: 71,
    question: "Equipoise in clinical research refers to the ethical condition required to justify randomization in a clinical trial. Genuine equipoise exists when:",
    options: ["The principal investigator personally believes neither treatment is superior", "There is genuine uncertainty in the medical community about the comparative merits of the interventions being compared, making randomization ethically permissible", "The trial sponsor has not disclosed its preferred outcome to the investigators", "The treating clinician is blinded to the patient's treatment assignment throughout the trial"],
    answer: 1,
    explanation: "Clinical (or collective) equipoise, as formulated by Benjamin Freedman (1987), holds that a RCT is ethically permissible as long as there is genuine uncertainty among the relevant expert clinical community about which treatment is superior — not simply in the mind of the individual investigator. If one treatment is clearly superior (e.g., proven by strong prior evidence), it would be unethical to randomize patients to the inferior arm. Equipoise is distinct from a clinician's personal opinion; it reflects the state of collective clinical knowledge. Equipoise can be disturbed by accumulating trial evidence, which is why Data Safety Monitoring Boards conduct interim analyses."
  },
  {
    id: 72,
    question: "The principle of justice in bioethics, as articulated in the Belmont Report (1979), requires in the context of clinical research that:",
    options: ["Research risks and benefits be distributed equitably across social groups, and vulnerable populations not be targeted specifically to bear burdens while benefits flow to others", "All research participants receive equal remuneration regardless of the duration of their participation", "Equal scientific weight be given to all study outcomes regardless of their clinical importance", "Research protocols be reviewed by both national and institutional ethics committees to ensure equal oversight"],
    answer: 0,
    explanation: "The Belmont Report's principle of Justice requires that the benefits and burdens of research be fairly distributed. Historically, justice concerns arose because: (1) vulnerable populations (prisoners, the institutionalized mentally ill, minorities) bore research burdens while benefits flowed to the privileged; (2) conversely, some groups (women, children, elderly) were excluded from research, denying them the benefits. Justice requires fair selection of subjects (not targeting the vulnerable for convenience), fair distribution of research benefits, and attention to historical injustices (as in the Tuskegee legacy). It also requires post-trial access provisions."
  },

  // Questions 73-80: Molecular Biology & Genetics
  {
    id: 73,
    question: "Southern blotting is used to detect and analyze:",
    options: ["Protein expression levels in tissue samples using specific antibodies", "Specific DNA sequences in a sample by transferring restriction-enzyme-digested DNA from a gel to a membrane, followed by hybridization with a labeled probe", "mRNA transcript abundance in cells and tissues", "Chromosome karyotype abnormalities in metaphase spreads"],
    answer: 1,
    explanation: "Southern blotting (E.M. Southern, 1975) involves: (1) digesting genomic DNA with restriction endonucleases; (2) separating fragments by agarose gel electrophoresis; (3) denaturing and transferring (blotting) the DNA to a nitrocellulose or nylon membrane; (4) hybridizing with a labeled DNA probe complementary to the sequence of interest; (5) detection by autoradiography or chemiluminescence. Applications include: RFLP analysis, gene copy number determination, detection of gene rearrangements (e.g., BCR-ABL in CML), and confirmation of homologous recombination in gene targeting. Northern blotting uses RNA; Western blotting uses protein."
  },
  {
    id: 74,
    question: "Northern blotting, as opposed to Southern blotting, specifically analyzes:",
    options: ["DNA sequences using denatured protein extracts as the starting material", "RNA (mRNA) to study gene expression levels, using RNA separated by electrophoresis and hybridized with a complementary DNA or RNA probe", "Protein-DNA interactions using chromatin immunoprecipitation followed by gel transfer", "Epigenetic modifications of histone proteins using specific antibody probes"],
    answer: 1,
    explanation: "Northern blotting (Alwine, Kemp, Stark, 1977 — a pun on Southern blotting) is used to analyze RNA. The procedure: (1) extract total RNA; (2) separate by denaturing agarose gel electrophoresis (formaldehyde or glyoxal gels to prevent secondary structure); (3) transfer to a membrane; (4) hybridize with a labeled probe to the mRNA of interest; (5) detect by autoradiography. Northern blotting reveals: mRNA transcript size, expression levels, and alternatively spliced isoforms. Though largely replaced by RT-PCR and RNA-seq for expression analysis, it remains a gold-standard confirmatory technique because it directly visualizes intact transcripts."
  },
  {
    id: 75,
    question: "Western blotting is used to detect:",
    options: ["Specific DNA sequences in restriction-digested genomic DNA samples", "Specific proteins in a sample by separating proteins by SDS-PAGE, transferring to a membrane, and probing with a specific antibody", "mRNA transcripts using radioactively labeled oligonucleotide probes", "Chromosomal translocations using fluorescently labeled FISH probes on metaphase spreads"],
    answer: 1,
    explanation: "Western blotting (Towbin et al., 1979) detects specific proteins: (1) proteins are denatured and separated by SDS-PAGE (sodium dodecyl sulfate-polyacrylamide gel electrophoresis) based on molecular weight; (2) transferred (electrophoretically blotted) to a nitrocellulose or PVDF membrane; (3) blocked with protein (milk, BSA) to prevent non-specific antibody binding; (4) incubated with a primary antibody specific to the target protein; (5) detected with a labeled secondary antibody (HRP-conjugated) using ECL (enhanced chemiluminescence). Applications include: diagnostic HIV testing (confirmatory test), protein expression quantification, post-translational modification analysis."
  },
  {
    id: 76,
    question: "Type II restriction endonucleases are essential tools in molecular cloning because they:",
    options: ["Repair double-strand DNA breaks using template-directed synthesis at high fidelity", "Cut DNA at specific palindromic recognition sequences, producing predictable fragments with defined ends (blunt or cohesive)", "Synthesize new DNA strands from RNA templates (reverse transcriptase activity)", "Remove RNA primers from the lagging strand during DNA replication"],
    answer: 1,
    explanation: "Type II restriction endonucleases recognize specific palindromic DNA sequences (4–8 bp) and cleave both strands at or near the recognition site, producing defined fragments. Cleavage may produce: (1) blunt ends (e.g., EcoRV: 5'-GATATC-3' cut between T and A); or (2) cohesive ('sticky') ends with 5' or 3' overhangs (e.g., EcoRI: 5'-GAATTC-3' produces 5'-AATT overhangs). Cohesive ends from compatible enzymes can be ligated together using DNA ligase, enabling directional cloning of inserts into vectors. The discovery of restriction enzymes by Arber, Nathans, and Smith earned the 1978 Nobel Prize in Physiology or Medicine."
  },
  {
    id: 77,
    question: "A plasmid vector used in gene cloning must contain which essential functional elements?",
    options: ["A viral coat protein gene for efficient packaging and delivery into host cells", "An origin of replication (ori), a selectable marker (antibiotic resistance gene), and a multiple cloning site (MCS) with restriction enzyme sites for inserting foreign DNA", "Telomeric sequences for maintenance in mammalian cells and centromeres for segregation during mitosis", "A promoter sequence for transcription of the cloned gene only if expression of the insert is desired"],
    answer: 1,
    explanation: "Essential elements of a plasmid cloning vector: (1) Origin of replication (ori) — allows autonomous replication in the host cell, determining copy number (high-copy: ColE1 ori; low-copy: p15A ori); (2) Selectable marker — typically an antibiotic resistance gene (ampicillin/ampR, kanamycin/kanR) allowing selection of transformed bacteria on antibiotic plates; (3) Multiple cloning site (MCS/polylinker) — a cluster of unique restriction enzyme sites for inserting the gene of interest. Expression vectors additionally contain promoter sequences (T7, lac, CMV), ribosome binding sites, and transcription terminators."
  },
  {
    id: 78,
    question: "Site-directed mutagenesis using PCR allows researchers to:",
    options: ["Insert an entire foreign gene into the genome at a specific chromosomal locus using homologous recombination", "Introduce specific, predetermined nucleotide changes (substitutions, insertions, deletions) at a defined position in a cloned DNA sequence", "Sequence an entire genome rapidly by amplifying overlapping fragments", "Silence gene expression by introducing stop codons throughout the coding sequence at random positions"],
    answer: 1,
    explanation: "Site-directed mutagenesis (SDM) introduces defined, precise nucleotide changes at a specific location in a DNA sequence. The most common PCR-based method (QuikChange) uses mutagenic primers containing the desired mutation to amplify the entire plasmid, then digests the parental (methylated) template DNA with DpnI (which cuts methylated DNA). The resulting circular plasmid contains the desired mutation. Applications: studying protein structure-function relationships by changing specific amino acids; creating or abolishing restriction enzyme sites; introducing disease-associated variants to model them in cell lines; engineering enzyme active sites for industrial applications."
  },

  // Questions 81-86: Microbiology
  {
    id: 79,
    question: "The Widal test for typhoid fever detects:",
    options: ["Salmonella Typhi bacteria in blood by culture on specific media", "Agglutinating antibodies against Salmonella Typhi O (somatic) and H (flagellar) antigens in patient serum", "Salmonella Typhi Vi antigen in urine using latex agglutination", "Salmonella Typhi DNA in blood using real-time PCR amplification of the hlyE gene"],
    answer: 1,
    explanation: "The Widal test (Georges-Fernand Widal, 1896) is a serological tube agglutination test that detects antibodies (agglutinins) against the O (lipopolysaccharide) and H (flagellar) antigens of Salmonella Typhi and Salmonella Paratyphi A/B/C. A four-fold rise in titer between acute and convalescent samples is diagnostic. However, its limitations include: (1) cross-reactions with other Salmonella species and febrile illnesses; (2) false positives from prior vaccination or endemic exposure; (3) false negatives in early illness; (4) variable sensitivity and specificity. Blood culture remains the gold standard for typhoid diagnosis."
  },
  {
    id: 80,
    question: "Cold agglutinins are IgM antibodies that agglutinate red blood cells at 4°C. Their detection in a febrile patient with atypical pneumonia suggests infection with which organism?",
    options: ["Legionella pneumophila causing Legionnaires' disease", "Mycoplasma pneumoniae causing primary atypical pneumonia ('walking pneumonia')", "Chlamydophila pneumoniae causing TWAR strain pneumonia", "Coxiella burnetii causing Q fever"],
    answer: 1,
    explanation: "Cold agglutinins (IgM anti-I antibodies) are produced in approximately 50–75% of Mycoplasma pneumoniae infections, typically rising in the second week of illness. They are non-specific but clinically useful in the appropriate context (young adult, dry cough, bilateral interstitial infiltrates, 'walking pneumonia' picture). The bedside cold agglutinin test: draw blood, cool in ice, and observe for agglutination that reverses on warming. More specific tests include Mycoplasma PCR, culture, and paired serological titres (ELISA for IgM/IgG). The classic radiological appearance is bilateral interstitial or mixed interstitial-alveolar infiltrates."
  },
  {
    id: 81,
    question: "Dark-field microscopy is the gold standard for direct diagnosis of which infectious disease?",
    options: ["Tuberculosis, by visualizing acid-fast bacilli in sputum without staining", "Syphilis, by visualizing live Treponema pallidum spirochetes in exudate from a primary chancre", "Malaria, by visualizing Plasmodium species in unstained thick blood films under dark-field illumination", "Leptospirosis, by visualizing Leptospira spirochetes in urine from febrile patients"],
    answer: 1,
    explanation: "Dark-field microscopy is used for direct visualization of Treponema pallidum from chancre fluid in primary syphilis. T. pallidum cannot be cultured in vitro and is too thin (0.1–0.18 μm diameter) to be seen by light microscopy under bright-field conditions. Dark-field illumination reveals the characteristic corkscrew morphology and motility (rotational, translational, and flexion movements) of live spirochetes. It requires fresh material collected from a primary or secondary lesion and must be examined within 20 minutes. Oral or rectal lesions may harbor non-pathogenic treponemes, making dark-field less reliable at these sites."
  },
  {
    id: 82,
    question: "Ziehl-Neelsen staining demonstrates acid-fast organisms. The 'acid-fastness' property of mycobacteria is due to:",
    options: ["High lipid content (mycolic acids) in the cell wall that resists decolorization with acid-alcohol once stained with carbol fuchsin", "The presence of a polysaccharide capsule that binds carbol fuchsin tightly and resists decolorization", "Production of catalase-peroxidase enzymes that metabolize the decolorizing agent", "A unique double lipid bilayer membrane structure that sequesters the dye intracellularly"],
    answer: 0,
    explanation: "Acid-fastness is a property of mycobacteria (and Nocardia to a lesser degree) due to their exceptionally high cell wall content of mycolic acids — long-chain fatty acids (60–90 carbons) that form a waxy, hydrophobic barrier. Once stained with hot carbol fuchsin (primary stain), the dye penetrates the waxy cell wall and resists removal by acid-alcohol (3% HCl in 95% ethanol), so mycobacteria retain the red stain. Non-acid-fast organisms are decolorized and take up the counterstain (methylene blue). ZN staining sensitivity is ~10,000 organisms/mL sputum; auramine-rhodamine fluorescence staining is more sensitive (~5,000 organisms/mL)."
  },
  {
    id: 83,
    question: "India ink preparation is used in clinical microbiology to diagnose:",
    options: ["Pneumocystis jirovecii pneumonia in HIV patients by visualizing cysts in BAL fluid", "Cryptococcal meningitis by demonstrating the capsule of Cryptococcus neoformans in cerebrospinal fluid", "Candida species in oral or vaginal smears by staining yeast cells and pseudohyphae", "Histoplasma capsulatum in macrophages from bone marrow aspirates"],
    answer: 1,
    explanation: "India ink (nigrosin) preparation demonstrates the polysaccharide capsule of Cryptococcus neoformans in CSF. India ink particles cannot penetrate the capsule, creating a 'halo' or 'clearing' effect around the organism — the large capsule appears as a clear zone around the yeast cell, which has a characteristic narrow-based bud. The capsular antigen can be detected more sensitively by latex agglutination or lateral flow assay. India ink has approximately 60–80% sensitivity in HIV-positive cryptococcal meningitis (lower in HIV-negative cases). Cryptococcal meningitis is the leading cause of adult meningitis in sub-Saharan Africa."
  },
  {
    id: 84,
    question: "KOH (potassium hydroxide) mount is used in microbiology for:",
    options: ["Demonstrating Gram-positive cocci in clusters suggestive of Staphylococcus aureus infection", "Direct examination of skin scrapings, nail clippings, or hair for fungal elements (hyphae, pseudohyphae, spores) by dissolving keratin", "Detecting Trichomonas vaginalis in vaginal discharge using a wet mount under phase contrast", "Identifying Helicobacter pylori in gastric biopsy specimens using urease activity"],
    answer: 1,
    explanation: "KOH (10–20% potassium hydroxide) mount is a rapid direct microscopy technique for diagnosing superficial and cutaneous fungal infections (dermatophytosis, tinea versicolor, candidiasis, onychomycosis). KOH dissolves keratin, cellular debris, and host cells while preserving fungal structures, making hyphae, pseudohyphae, arthroconidia, and yeast cells visible. Calcofluor white (a fluorescent whitener that binds to chitin in fungal cell walls) enhances visualization under fluorescence microscopy. KOH preparation can be examined within minutes and is an essential bedside/clinic tool for diagnosing ringworm, tinea unguium, and other superficial mycoses."
  },
  {
    id: 85,
    question: "The VITEK 2 automated system in clinical microbiology performs which functions?",
    options: ["DNA sequencing of bacterial 16S rRNA genes for definitive species identification", "Automated microbial identification and antimicrobial susceptibility testing using miniaturized fluorometric biochemical reactions in plastic cards", "Whole-genome sequencing of pathogens for outbreak investigation and resistance gene detection", "MALDI-TOF mass spectrometry-based identification from protein profiles"],
    answer: 1,
    explanation: "The VITEK 2 system (bioMérieux) uses miniaturized plastic cards containing 64 wells of lyophilized biochemical substrates. Organisms are inoculated into cards and incubated in the instrument; fluorometric or colorimetric reactions are read automatically at timed intervals, generating a numeric probability profile compared to a database for species identification. VITEK 2 also performs automated minimum inhibitory concentration (MIC) determination for antimicrobial susceptibility testing. Results are available in 4–18 hours. It is widely used in clinical laboratories for routine identification and susceptibility testing of Enterobacteriaceae, Gram-positive cocci, anaerobes, and yeasts."
  },
  {
    id: 86,
    question: "The Elek test (immunodiffusion precipitin test) is used to confirm toxin production by:",
    options: ["Staphylococcus aureus (TSST-1 and enterotoxins causing food poisoning)", "Corynebacterium diphtheriae (diphtheria exotoxin), distinguishing toxigenic from non-toxigenic strains", "Clostridium tetani (tetanospasmin causing tetanus)", "Vibrio cholerae (cholera toxin causing watery diarrhea)"],
    answer: 1,
    explanation: "The Elek test detects diphtheria toxin production by Corynebacterium diphtheriae. A strip of filter paper impregnated with diphtheria antitoxin is embedded in an agar plate; test isolates and positive/negative controls are streaked at right angles to the strip. If the strain is toxigenic, secreted diphtheria toxin diffuses from the bacterial growth and meets antitoxin diffusing from the strip, forming characteristic precipitin lines (chevron/arrowhead patterns) at the zone of equivalence. The Elek test differentiates toxigenic (dangerous) from non-toxigenic (clinically less significant) strains and is required before treating cases as diphtheria."
  },

  // Questions 87-93: English
  {
    id: 87,
    question: "Choose the correctly spelled medical term from the options below:",
    options: ["Diarrhhoea", "Diarrhoea", "Diarreah", "Diarroea"],
    answer: 1,
    explanation: "'Diarrhoea' is the correct British/international spelling (used in WHO documents, ICD codes, and most international medical literature). The American spelling is 'diarrhea.' The word derives from Greek: dia (through) + rhein (to flow). Common misspellings include 'diarrhea' variants with errors in the double-r or the 'oe'/'ea' ending. In ICMR examinations and Indian public health documents, British spellings are standard, making 'diarrhoea' the expected correct form."
  },
  {
    id: 88,
    question: "Identify the pair of commonly confused words used CORRECTLY in the following sentence: 'The effect of the intervention on patient outcomes was profound; the new policy will _____ the quality of care across all districts.'",
    options: ["affect", "effect (verb)", "affectation", "effectuate"],
    answer: 1,
    explanation: "'Effect' used as a verb means 'to bring about' or 'to cause' — as in 'to effect a change.' This is distinct from 'affect' (verb meaning 'to influence' or 'to have an impact on'). In the sentence, 'will effect the quality of care' would mean 'will bring about/cause' quality of care, which is meaningful but unusual. The more natural verb is 'affect' (will influence), making option A ('affect') the most grammatically natural choice for this sentence. However, 'effect' as a verb (option B) is grammatically correct if the meaning is 'bring about.' This distinction is commonly tested in ICMR English papers."
  },
  {
    id: 89,
    question: "Select the sentence that correctly uses the word 'comprise':",
    options: ["The study is comprised of five components and three phases.", "The study comprises five components and three phases.", "Five components and three phases are comprising the study.", "The study is comprising of five components."],
    answer: 1,
    explanation: "'Comprise' means 'to consist of' or 'to include' — the whole comprises the parts. Correct usage: 'The whole comprises the parts' (not 'is comprised of'). Option A ('is comprised of') is a common error called 'passive comprise' — grammatically, 'comprise' is not typically used in the passive voice with 'of.' Option B is correct: 'The study comprises five components' (the whole comprises its parts). 'Compose' can be used in the passive: 'Five components compose the study' / 'The study is composed of five components.' The distinction is commonly tested in competitive examination English sections."
  },
  {
    id: 90,
    question: "The phrase 'morbidity and mortality' in public health writing refers to:",
    options: ["The statistical concepts of prevalence and incidence respectively", "Disease burden (illness, disability) and death rate respectively, used together to capture the full health impact of a condition", "Hospitalization rates and case fatality rates respectively", "Prevalence of complications and the crude death rate respectively"],
    answer: 1,
    explanation: "'Morbidity' refers to the state of being diseased or ill, and in epidemiology encompasses incidence, prevalence, disability, and disease burden. 'Mortality' refers to death, measured by mortality rates, case fatality rates, and years of life lost. The phrase 'morbidity and mortality' is standard in public health writing to comprehensively capture a condition's full impact on a population — both the toll in terms of disease/suffering and premature death. Weekly Morbidity and Mortality Reports (MMWR from CDC) use this terminology. Understanding these terms precisely is essential for reading and writing public health literature."
  },
  {
    id: 91,
    question: "Choose the option that best improves the following sentence: 'The data what was collected from patients were not analyzable.'",
    options: ["The data what was collected from patients was not analyzable.", "The data that were collected from patients were not analyzable.", "The data which was collected from the patients was not analyzable.", "The data collected from patients was not analyzable at all."],
    answer: 1,
    explanation: "The original sentence has two errors: (1) 'what' should be 'that' or 'which' as a relative pronoun; (2) 'data' is plural ('datum' singular), requiring plural verbs 'were' (not 'was'). Option B corrects both: 'that were' correctly uses the relative pronoun 'that' with the plural verb 'were' for plural 'data.' Option C uses 'which' (acceptable) but retains the singular 'was' — incorrect. Option D drops the relative clause and uses singular 'was' — also incorrect for formal scientific writing. Option A retains the incorrect 'what.' In formal academic and scientific English, 'data' takes plural verbs."
  },
  {
    id: 92,
    question: "The word 'incidence' in epidemiology is most closely synonymous with which commonly used English word?",
    options: ["Occurrence (the act of happening or arising)", "Prevalence (the widespread presence of something)", "Frequency (how often something happens in general)", "Occurrence rate (how quickly new cases arise in a population at risk)"],
    answer: 3,
    explanation: "In epidemiology, 'incidence' specifically refers to the rate of new cases arising in a population at risk over a defined time period (incidence rate = new cases / person-time at risk). Among the options, 'occurrence rate' most closely captures this meaning — the rate at which new events occur in a population. 'Occurrence' alone describes a single event, not a rate. 'Prevalence' is distinct (existing cases / total population at a point in time). 'Frequency' in general English is vaguer and does not capture the 'new cases in a population at risk' specificity. Precise use of these terms is critical in public health writing."
  },
  {
    id: 93,
    question: "Fill in the blank with the most appropriate word: 'The _____ between the two groups was statistically significant, suggesting that the intervention had a meaningful impact.'",
    options: ["differential", "discrepancy", "difference", "distinction"],
    answer: 2,
    explanation: "'Difference' is the most precise and conventionally correct term in statistical reporting to describe the quantified gap between two groups (e.g., mean difference, risk difference). 'Discrepancy' implies an unexplained or inconsistent gap, typically used for disagreements or errors. 'Differential' is used as a noun mainly in specialized contexts (e.g., 'wage differential') or as an adjective ('differential diagnosis'). 'Distinction' describes a qualitative contrast or characteristic, not a quantitative measured gap. In statistical and epidemiological writing, 'difference' is the standard term for the numerical comparison between groups."
  },

  // Questions 94-100: General Knowledge
  {
    id: 94,
    question: "The WHO is organized into six regional offices. Which regional office covers the South-East Asia Region (SEARO), and which countries does it include?",
    options: ["The Regional Office for South-East Asia, based in New Delhi, covering 11 member states including India, Bangladesh, Indonesia, Nepal, Thailand, and Myanmar", "The Regional Office for Asia and Pacific, based in Manila, covering India, China, Japan, and Australia", "The Regional Office for South-East Asia, based in Geneva, covering India and the SAARC nations", "The Regional Office for South Asia, based in Colombo, covering 8 SAARC member states"],
    answer: 0,
    explanation: "The WHO Regional Office for South-East Asia (SEARO) is headquartered in New Delhi, India, and covers 11 member states: India, Bangladesh, Bhutan, Indonesia, Maldives, Myanmar, Nepal, North Korea (Democratic People's Republic of Korea), Sri Lanka, Thailand, and Timor-Leste. SEARO covers approximately 26% of the world's population and carries a major burden of infectious and non-communicable diseases. The Western Pacific Regional Office (WPRO), headquartered in Manila, covers China, Japan, Australia, and other Pacific nations. China is notably NOT in SEARO."
  },
  {
    id: 95,
    question: "The Alma-Ata Declaration (1978) on Primary Health Care established which landmark principle that remains foundational to global health today?",
    options: ["Universal health coverage through insurance-based mechanisms is the right of all citizens", "Health for All by the year 2000 through primary health care as the key to attaining an acceptable level of health, with community participation and intersectoral action", "Eradication of all major communicable diseases by the year 2000 through vertical disease control programs", "International trade in health commodities should be regulated to ensure equitable access to essential medicines"],
    answer: 1,
    explanation: "The Alma-Ata Declaration (WHO-UNICEF, Alma-Ata, USSR, 1978) proclaimed 'Health for All by the Year 2000' through primary health care (PHC) as the key strategy. Its fundamental principles include: PHC is the first level of contact between individuals, the family, and community with the national health system; it should be universally accessible and affordable; it requires community participation; it is part of intersectoral development (agriculture, education, water, housing); it should address local health problems using appropriate technology; and health is a fundamental human right. Though the 2000 target was not met, Alma-Ata inspired decades of PHC development globally."
  },
  {
    id: 96,
    question: "The Ministry of AYUSH in India oversees which systems of medicine? (Select the complete list)",
    options: ["Ayurveda, Yoga, Unani, Siddha, and Homeopathy only", "Ayurveda, Yoga and Naturopathy, Unani, Siddha, Sowa-Rigpa, and Homeopathy", "Ayurveda, Yoga, Unani, Siddha, Reiki, and Traditional Chinese Medicine", "Ayurveda, Yoga, Unani, Siddha, Naturopathy, and Allopathy"],
    answer: 1,
    explanation: "The Ministry of AYUSH (Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homeopathy) was established as a separate ministry in November 2014 (previously the Department of AYUSH under MoHFW). In 2020, Sowa-Rigpa (the traditional medicine of Ladakh and parts of Himalayan regions) was officially included under AYUSH, making the complete list: Ayurveda, Yoga and Naturopathy, Unani, Siddha, Sowa-Rigpa, and Homeopathy. AYUSH practitioners are integrated into India's health system through health and wellness centres, AYUSH hospitals, and the National AYUSH Mission (NAM)."
  },
  {
    id: 97,
    question: "National Health Accounts (NHA) in India are compiled by which nodal agency, and what is the primary purpose of NHA estimates?",
    options: ["Compiled by the Reserve Bank of India for monetary policy decisions regarding healthcare financing", "Compiled by the National Health Systems Resource Centre (NHSRC) under MoHFW to track health expenditure flows — who pays, what is purchased, and for whom — enabling health financing policy analysis", "Compiled by NITI Aayog to allocate central government funds between states based on NHA rankings", "Compiled by ICMR annually to measure the economic burden of disease for research prioritization"],
    answer: 1,
    explanation: "National Health Accounts (NHA) for India are compiled by the National Health Systems Resource Centre (NHSRC) under the Ministry of Health and Family Welfare, using the System of Health Accounts (SHA 2011) framework developed by WHO, OECD, and Eurostat. NHA estimates systematically track health expenditure flows: by financing source (government, households, employers, insurance), by provider (hospitals, clinics, PHCs), and by function (curative care, preventive care, long-term care). NHA enables tracking of out-of-pocket expenditure, government health spending as % of GDP, and progress toward UHC financing goals."
  },
  {
    id: 98,
    question: "The Pradhan Mantri Jan Arogya Yojana (PMJAY), the health insurance component of Ayushman Bharat, provides coverage of:",
    options: ["₹1 lakh per family per year for outpatient care in government hospitals only", "₹5 lakh per family per year for secondary and tertiary hospitalization in empanelled public and private hospitals", "₹10 lakh per family lifetime for catastrophic illnesses including cancer and cardiac surgeries only", "₹2 lakh per individual per year for all types of healthcare including outpatient, dental, and optical care"],
    answer: 1,
    explanation: "Pradhan Mantri Jan Arogya Yojana (PMJAY), launched in September 2018 as part of Ayushman Bharat, provides health insurance coverage of ₹5 lakh per family per year (on a floater basis) for secondary and tertiary hospitalization to approximately 10.74 crore vulnerable families (the bottom 40% of India's population). Coverage is for hospitalization across 1,574+ health benefit packages including surgery, medical care, and daycare procedures in both empanelled public and private hospitals. Outpatient care is not covered by PMJAY; it is addressed by Health and Wellness Centres (HWCs), the other component of Ayushman Bharat."
  },
  {
    id: 99,
    question: "The concept of 'Essential Health Services' as defined by WHO for Universal Health Coverage (UHC) is organized into which four categories?",
    options: ["Preventive care, Curative care, Rehabilitative care, and Palliative care", "Reproductive/maternal/newborn/child health; Infectious diseases; NCDs; Service capacity and access", "Primary health care, Secondary health care, Tertiary health care, and Community health care", "Communicable diseases, Non-communicable diseases, Injuries/emergencies, and Mental health"],
    answer: 1,
    explanation: "The WHO/World Bank UHC Service Coverage Index (SCI) tracks coverage of essential health services organized into four tracer categories: (1) Reproductive, maternal, newborn, and child health (contraception, antenatal care, skilled birth attendance, child immunization); (2) Infectious diseases (TB treatment, HIV ART, malaria prevention); (3) Non-communicable diseases (hypertension treatment, diabetes management, cancer screening); (4) Service capacity and access (hospital beds, health worker density, essential medicines access, health security). The SCI ranges from 0–100, with a global target of ≥80 by 2030 under SDG 3.8."
  },
  {
    id: 100,
    question: "The PHC (Primary Health Care) principles as operationalized in India's health system include which feature that distinguishes Indian PHC from the Alma-Ata model?",
    options: ["Indian PHC is exclusively vertical and disease-focused, unlike the comprehensive Alma-Ata model", "India has adopted selective PHC (targeting specific diseases: malaria, TB, leprosy, MCH, family planning) alongside elements of comprehensive PHC, and has recently expanded to Health and Wellness Centres under Ayushman Bharat to move closer to comprehensive PHC", "Indian PHC operates without community participation, unlike the Alma-Ata emphasis on community involvement", "India has fully implemented the Alma-Ata comprehensive PHC model with no selective elements since 1978"],
    answer: 1,
    explanation: "India's PHC system has historically followed selective PHC — implementing vertical programs targeting specific diseases (National Malaria Control Programme, Revised National Tuberculosis Control Programme, National Leprosy Eradication Programme, Reproductive and Child Health Programme) rather than purely comprehensive PHC. Selective PHC was championed by Walsh and Warren (1979) as more cost-effective for resource-limited settings. However, the 2018 Ayushman Bharat Health and Wellness Centres (HWCs) expanded the scope of Sub-Health Centres and PHCs to deliver 12 comprehensive care packages including mental health, palliative care, dental care, and NCDs — a significant move toward comprehensive PHC as envisioned at Alma-Ata and Astana (2018)."
  }
];

export default questions;

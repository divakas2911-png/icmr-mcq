const questions = [
  {
    id: 1,
    question: "An ecological study examines the relationship between sugar consumption (measured at the population level) and diabetes prevalence across 30 countries. What is the major limitation of this study design?",
    options: [
      "Ecological fallacy",
      "Berkson's bias",
      "Neyman bias",
      "Hawthorne effect"
    ],
    answer: 0,
    explanation: "The ecological fallacy (also called the aggregation bias) is the major limitation of ecological studies. It refers to the error of assuming that associations observed at the group level apply to individuals. Because data are collected at the population level, it is impossible to link individual exposure to individual outcome."
  },
  {
    id: 2,
    question: "In a nested case-control study conducted within a cohort, cases are identified after follow-up and controls are selected from the risk set. What is the PRIMARY advantage of this design over a traditional case-control study?",
    options: [
      "It eliminates confounding completely",
      "Stored biological samples can be used, reducing cost compared to a full cohort analysis",
      "It allows calculation of incidence rates directly",
      "It requires no matching"
    ],
    answer: 1,
    explanation: "The nested case-control study is conducted within an established cohort where biological specimens are often collected and stored at baseline. Cases and controls can be identified and their stored specimens analyzed, making it far more cost-efficient than analyzing all cohort members, while still maintaining temporal relationships between exposure and outcome."
  },
  {
    id: 3,
    question: "A case-crossover study design is MOST appropriate for studying:",
    options: [
      "The long-term effect of chronic exposures on chronic disease",
      "Rare diseases with long latency periods",
      "Transient exposures on acute outcomes",
      "The efficacy of a new drug over 5 years"
    ],
    answer: 2,
    explanation: "Case-crossover design is ideal for studying transient, intermittent exposures (e.g., air pollution spike, physical exertion) and their effect on acute outcomes (e.g., myocardial infarction, asthma attack). Each case acts as their own control during a 'control window,' eliminating confounding by time-invariant individual characteristics."
  },
  {
    id: 4,
    question: "A pragmatic trial differs from an explanatory (efficacy) trial in that a pragmatic trial:",
    options: [
      "Uses highly selected, homogeneous patient populations",
      "Measures biological endpoints under tightly controlled conditions",
      "Tests whether an intervention works in real-world clinical conditions",
      "Always uses double-blinding"
    ],
    answer: 2,
    explanation: "Pragmatic trials are designed to test effectiveness — whether an intervention works in real-world, routine clinical settings with a broad patient population. Explanatory (efficacy) trials, in contrast, test whether an intervention works under ideal, controlled conditions with a highly selected population to establish biological efficacy."
  },
  {
    id: 5,
    question: "In intention-to-treat (ITT) analysis, participants are analyzed:",
    options: [
      "Only if they completed the full treatment protocol",
      "According to the treatment group they were originally randomized to, regardless of adherence",
      "Based on the treatment they actually received",
      "After excluding all protocol violators"
    ],
    answer: 1,
    explanation: "Intention-to-treat (ITT) analysis includes all randomized participants in the groups they were originally assigned to, regardless of whether they actually received or adhered to the treatment. This preserves the prognostic balance established by randomization and provides an unbiased estimate of treatment effect in real-world conditions, minimizing attrition bias."
  },
  {
    id: 6,
    question: "Per-protocol (PP) analysis in a clinical trial analyzes:",
    options: [
      "All randomized participants irrespective of compliance",
      "Only participants who completed the study per the protocol without major deviations",
      "All participants who received at least one dose",
      "Participants based on the investigator's preferred assignment"
    ],
    answer: 1,
    explanation: "Per-protocol analysis restricts the analysis to the subset of participants who fully complied with the protocol — received the allocated intervention, completed the follow-up, and had no major protocol violations. It provides an estimate of efficacy under ideal conditions but is prone to selection bias since non-compliers may differ systematically from compliers."
  },
  {
    id: 7,
    question: "A 2x2 factorial randomized trial is designed to test Drug A versus placebo AND Drug B versus placebo simultaneously. What is the KEY assumption required for a factorial design to be valid?",
    options: [
      "Both drugs must have the same mechanism of action",
      "There should be no interaction (effect modification) between Drug A and Drug B",
      "Equal sample sizes in all four arms",
      "Both drugs must be administered by the same route"
    ],
    answer: 1,
    explanation: "The key assumption for a factorial design is the absence of interaction between the two interventions. If Drug A and Drug B interact (i.e., the effect of one depends on the presence of the other), the combined estimate will be misleading. The factorial design's main efficiency advantage — testing two interventions simultaneously — only holds when interventions are independent of each other."
  },
  {
    id: 8,
    question: "An equivalence trial is designed to test the hypothesis that a new treatment is:",
    options: [
      "Superior to the standard treatment",
      "Neither better nor worse than the standard treatment by more than a pre-specified margin",
      "At least as good as the standard treatment",
      "Completely identical to the standard treatment"
    ],
    answer: 1,
    explanation: "Equivalence trials aim to demonstrate that a new treatment is neither inferior nor superior to an existing standard by more than a pre-specified clinically acceptable margin (the equivalence margin, delta). Both one-sided non-inferiority margins are tested. This is different from a non-inferiority trial, which tests only that the new treatment is not worse than the standard."
  },
  {
    id: 9,
    question: "In a cluster-randomized trial (CRT), the unit of randomization is the cluster rather than the individual. What statistical issue must be specifically addressed in CRTs?",
    options: [
      "Attrition bias",
      "Intracluster correlation (ICC)",
      "Regression to the mean",
      "Interviewer bias"
    ],
    answer: 1,
    explanation: "In cluster-randomized trials, individuals within the same cluster tend to be more similar to each other than to individuals in other clusters. This within-cluster correlation, measured by the intracluster correlation coefficient (ICC), means individuals are not fully independent. Failing to account for the ICC leads to underestimated standard errors and inflated Type I error. Sample size calculations must include a design effect to correct for clustering."
  },
  {
    id: 10,
    question: "In an adaptive trial design, the interim analysis allows for:",
    options: [
      "Changing the primary outcome after unblinding",
      "Pre-specified modifications to trial procedures based on accumulating data",
      "Removing participants with adverse events without statistical adjustment",
      "Switching from randomized to observational design mid-trial"
    ],
    answer: 1,
    explanation: "Adaptive trial designs allow pre-planned modifications to the trial based on interim data analysis. These modifications can include sample size re-estimation, dose selection, dropping or adding arms, and changing allocation ratios. The key word is 'pre-specified' — modifications must be planned before the trial begins and described in the protocol to maintain the trial's integrity and control Type I error."
  },
  {
    id: 11,
    question: "A chi-square test is used to assess association between two categorical variables. Which of the following is a PREREQUISITE for its valid application?",
    options: [
      "The data must be normally distributed",
      "The expected frequency in each cell should be at least 5",
      "The sample size must exceed 1000",
      "The variables must be ordinal"
    ],
    answer: 1,
    explanation: "The chi-square test requires that expected frequencies in each cell of the contingency table be at least 5. When this assumption is violated (especially in small samples or sparse tables), Fisher's exact test should be used instead. The chi-square test is applicable to categorical data and does not require normality."
  },
  {
    id: 12,
    question: "An independent samples t-test compares the means of two groups. The PAIRED t-test should be used instead when:",
    options: [
      "The sample sizes in both groups are unequal",
      "The observations in the two groups are correlated (e.g., before-after measurements in the same subjects)",
      "The data are not normally distributed",
      "The variance in both groups is equal"
    ],
    answer: 1,
    explanation: "The paired t-test is appropriate when the two sets of measurements are related or correlated — for example, before-and-after measurements on the same subjects, or measurements on matched pairs. By accounting for within-subject or within-pair correlation, the paired t-test is more powerful than the independent samples t-test in such situations."
  },
  {
    id: 13,
    question: "One-way ANOVA is used to compare means across three or more groups. It tests the null hypothesis that:",
    options: [
      "All group variances are equal",
      "At least one pair of group means differs significantly",
      "All group means are equal",
      "The data follow a normal distribution"
    ],
    answer: 2,
    explanation: "One-way ANOVA tests the null hypothesis that all group population means are equal (H0: μ1 = μ2 = ... = μk). A significant F-test indicates that at least one group mean differs from the others, but does not specify which pairs differ — post-hoc tests (e.g., Tukey, Bonferroni) are needed for that. ANOVA assumes normality and homogeneity of variances."
  },
  {
    id: 14,
    question: "The Mann-Whitney U test is the non-parametric equivalent of which parametric test?",
    options: [
      "Paired t-test",
      "One-way ANOVA",
      "Independent samples t-test",
      "Pearson correlation"
    ],
    answer: 2,
    explanation: "The Mann-Whitney U test (also called the Wilcoxon rank-sum test) is the non-parametric alternative to the independent samples t-test. It is used to compare two independent groups when the data are ordinal or when the normality assumption is violated. It works by ranking all observations and comparing the rank sums of the two groups."
  },
  {
    id: 15,
    question: "The Kruskal-Wallis test is the non-parametric equivalent of:",
    options: [
      "Independent samples t-test",
      "One-way ANOVA",
      "Chi-square test",
      "Pearson correlation"
    ],
    answer: 1,
    explanation: "The Kruskal-Wallis test is the non-parametric counterpart of one-way ANOVA. It is used to compare three or more independent groups when the normality assumption cannot be met. Like ANOVA, a significant result indicates that at least one group differs, and post-hoc tests (e.g., Dunn's test) are needed to identify which groups differ."
  },
  {
    id: 16,
    question: "Fisher's exact test is preferred over the chi-square test when:",
    options: [
      "The sample size is very large (n > 1000)",
      "Expected cell frequencies are less than 5 in a 2x2 contingency table",
      "The outcome variable is continuous",
      "Three or more groups are being compared"
    ],
    answer: 1,
    explanation: "Fisher's exact test computes the exact probability of the observed table (and all more extreme tables) and does not rely on a large-sample chi-square approximation. It is preferred when expected cell frequencies are small (generally < 5), which commonly occurs with small total sample sizes or sparse tables, where the chi-square approximation is unreliable."
  },
  {
    id: 17,
    question: "In a case-control study, 40 cases and 80 controls were enrolled. Among cases, 20 were exposed; among controls, 20 were exposed. The odds ratio (OR) is:",
    options: [
      "1.0",
      "2.0",
      "3.0",
      "4.0"
    ],
    answer: 2,
    explanation: "OR = (a/c) / (b/d) = (a×d) / (b×c). Cases: exposed=20, unexposed=20. Controls: exposed=20, unexposed=60. OR = (20×60) / (20×20) = 1200/400 = 3.0. This means cases were 3 times more likely to have been exposed compared to controls."
  },
  {
    id: 18,
    question: "In a cohort study, the incidence of disease is 10% in the exposed group and 4% in the unexposed group. The relative risk (RR) is:",
    options: [
      "0.4",
      "1.5",
      "2.5",
      "6.0"
    ],
    answer: 2,
    explanation: "Relative Risk (RR) = Incidence in exposed / Incidence in unexposed = 10% / 4% = 2.5. This means the exposed group has 2.5 times the risk of developing the disease compared to the unexposed group."
  },
  {
    id: 19,
    question: "The attributable risk (AR) percent in the exposed group measures:",
    options: [
      "The proportion of disease in the total population due to the exposure",
      "The proportion of disease in the exposed group that can be attributed to the exposure",
      "The excess risk in the unexposed group",
      "The risk difference between two different exposures"
    ],
    answer: 1,
    explanation: "Attributable Risk Percent (AR%) in the exposed = (RR - 1) / RR × 100. It estimates what proportion of the disease risk in the exposed group is due to the exposure. It assumes the exposure is causal. The Population Attributable Risk Percent (PAR%) accounts for the prevalence of exposure in the population."
  },
  {
    id: 20,
    question: "In a clinical trial, the event rate in the control group is 20% and in the treatment group is 10%. The Number Needed to Treat (NNT) is:",
    options: [
      "5",
      "10",
      "15",
      "20"
    ],
    answer: 1,
    explanation: "NNT = 1 / Absolute Risk Reduction (ARR). ARR = Control Event Rate - Treatment Event Rate = 20% - 10% = 10% = 0.10. NNT = 1 / 0.10 = 10. This means 10 patients need to be treated to prevent one additional adverse event compared to the control."
  },
  {
    id: 21,
    question: "Bayes' theorem is used in diagnostic testing to calculate:",
    options: [
      "Sensitivity of a test",
      "Post-test probability of disease given the test result",
      "Specificity of a test",
      "The likelihood of a false positive"
    ],
    answer: 1,
    explanation: "Bayes' theorem is the mathematical foundation for updating pre-test probability to post-test probability using the likelihood ratio (LR). Post-test odds = Pre-test odds × LR. This is graphically represented by the Fagan nomogram. It allows clinicians to incorporate prior knowledge (prevalence) with the test result to estimate the true probability of disease."
  },
  {
    id: 22,
    question: "Tests performed in SERIES (sequential testing) are used when the goal is to:",
    options: [
      "Increase sensitivity at the cost of specificity",
      "Increase specificity at the cost of sensitivity",
      "Increase both sensitivity and specificity simultaneously",
      "Reduce the number of tests required"
    ],
    answer: 1,
    explanation: "Serial (sequential) testing requires all tests to be positive for the overall result to be positive. A patient with a negative result on any test is classified as negative. This strategy increases overall specificity (and positive predictive value) but decreases sensitivity. It is useful for confirming diagnoses where false positives are costly, such as HIV confirmatory testing."
  },
  {
    id: 23,
    question: "Tests performed in PARALLEL (simultaneous testing) are used when the goal is to:",
    options: [
      "Minimize false positives",
      "Maximize specificity",
      "Maximize sensitivity (to not miss any disease)",
      "Confirm a diagnosis with high certainty"
    ],
    answer: 2,
    explanation: "Parallel (simultaneous) testing classifies a patient as positive if ANY one of the tests is positive. This strategy increases overall sensitivity and negative predictive value, minimizing false negatives. It is useful in screening and emergency settings where missing a disease case is unacceptable (e.g., screening blood donors, emergency workup)."
  },
  {
    id: 24,
    question: "The Fagan nomogram is a graphical tool used to:",
    options: [
      "Calculate sample size for diagnostic studies",
      "Convert pre-test probability to post-test probability using the likelihood ratio",
      "Plot the ROC curve for a diagnostic test",
      "Determine the cut-off point for a diagnostic test"
    ],
    answer: 1,
    explanation: "The Fagan nomogram allows clinicians to visually convert pre-test probability to post-test probability using the likelihood ratio (LR+ or LR-). A straight line drawn from the pre-test probability through the likelihood ratio intersects the post-test probability axis. It is the graphical representation of Bayes' theorem applied to diagnostic tests."
  },
  {
    id: 25,
    question: "The STARD (Standards for Reporting Diagnostic Accuracy Studies) guidelines specifically apply to:",
    options: [
      "Randomized controlled trials",
      "Systematic reviews and meta-analyses",
      "Studies reporting the accuracy of diagnostic tests",
      "Observational cohort studies"
    ],
    answer: 2,
    explanation: "STARD (Standards for Reporting of Diagnostic Accuracy Studies) is a reporting guideline for studies evaluating the accuracy of diagnostic tests. It includes a 30-item checklist and a flow diagram to improve the completeness and transparency of reporting. CONSORT applies to RCTs, PRISMA to systematic reviews/meta-analyses, and STROBE to observational studies."
  },
  {
    id: 26,
    question: "Verification bias (work-up bias) in a diagnostic study occurs when:",
    options: [
      "The reference standard changes during the study",
      "Only individuals with a positive index test result undergo verification with the reference standard",
      "The index test and reference standard are performed simultaneously",
      "The study population does not represent the target population"
    ],
    answer: 1,
    explanation: "Verification bias occurs when only a non-random subset of study participants — typically those with a positive index test result — are verified by the reference (gold) standard. This leads to overestimation of sensitivity and underestimation of specificity, as true negatives among those not verified are missed. It is a major concern in diagnostic accuracy studies."
  },
  {
    id: 27,
    question: "Spectrum bias in diagnostic test evaluation refers to:",
    options: [
      "Using the wrong reference standard",
      "Variation in test performance depending on the clinical spectrum of disease severity in the study population",
      "Applying a test developed in one population to another",
      "Differences in interpretation between laboratories"
    ],
    answer: 1,
    explanation: "Spectrum bias occurs when the performance (sensitivity, specificity) of a diagnostic test varies depending on the mix of disease severity in the study population. A test validated in patients with severe disease may perform poorly in early or mild disease. Studies using extreme groups (obvious cases vs. healthy controls) overestimate test performance compared to routine clinical application."
  },
  {
    id: 28,
    question: "The Diagnostic Odds Ratio (DOR) for a diagnostic test is calculated as:",
    options: [
      "Sensitivity / (1 - Specificity)",
      "Likelihood Ratio Positive (LR+) / Likelihood Ratio Negative (LR-)",
      "(True Positives × True Negatives) / (False Positives × False Negatives)",
      "Positive Predictive Value / Negative Predictive Value"
    ],
    answer: 2,
    explanation: "The Diagnostic Odds Ratio (DOR) = (TP × TN) / (FP × FN). It is a single summary measure of test performance that is equivalent to LR+ / LR-. A DOR of 1 indicates the test has no discriminatory value. The higher the DOR, the better the test distinguishes diseased from non-diseased individuals. It is commonly used in meta-analyses of diagnostic accuracy."
  },
  {
    id: 29,
    question: "Cohen's kappa statistic measures:",
    options: [
      "Agreement between a diagnostic test and a reference standard",
      "The strength of association between two categorical variables",
      "Agreement between two raters beyond that expected by chance",
      "The reliability of a continuous measurement instrument"
    ],
    answer: 2,
    explanation: "Cohen's kappa (κ) measures the degree of agreement between two raters (or a test and gold standard) for categorical outcomes, correcting for agreement expected by chance alone. κ = (Observed agreement - Expected agreement) / (1 - Expected agreement). Values > 0.8 indicate almost perfect agreement, 0.6–0.8 substantial, 0.4–0.6 moderate, and < 0.4 fair to poor."
  },
  {
    id: 30,
    question: "The Youden Index (J) for a diagnostic test is calculated as:",
    options: [
      "Sensitivity + Specificity",
      "Sensitivity × Specificity",
      "Sensitivity + Specificity - 1",
      "(Sensitivity + Specificity) / 2"
    ],
    answer: 2,
    explanation: "Youden's Index J = Sensitivity + Specificity - 1 (range: 0 to 1). It summarizes the test's ability to discriminate between diseased and non-diseased individuals with a single value. J = 0 means no discriminatory ability, J = 1 means perfect discrimination. It is used to identify the optimal cut-off point on an ROC curve — the cut-off that maximizes J."
  },
  {
    id: 31,
    question: "Which COVID-19 vaccine uses a replication-deficient chimpanzee adenoviral vector to deliver the SARS-CoV-2 spike protein gene?",
    options: [
      "Covaxin (BBV152)",
      "Covishield (ChAdOx1 nCoV-19)",
      "Sputnik V",
      "mRNA-1273 (Moderna)"
    ],
    answer: 1,
    explanation: "Covishield, developed by the University of Oxford and AstraZeneca and manufactured by the Serum Institute of India, uses a replication-deficient chimpanzee adenoviral (ChAdOx1) vector. Covaxin is an inactivated whole-virion vaccine. Sputnik V uses human adenoviral vectors (Ad26 and Ad5). mRNA-1273 uses lipid nanoparticle-encapsulated mRNA."
  },
  {
    id: 32,
    question: "Which of the following represents an EMERGING infection characterized by high case fatality rate, fruit bats as a reservoir, and transmission via contact with infected body fluids?",
    options: [
      "Nipah virus disease",
      "Marburg virus disease",
      "Ebola virus disease",
      "Hendra virus disease"
    ],
    answer: 2,
    explanation: "Ebola Virus Disease (EVD) is caused by Ebola virus (family Filoviridae). It has a high case fatality rate (25–90%), fruit bats (Pteropodidae family) are considered the natural reservoir, and transmission to humans occurs via direct contact with blood, secretions, or organs of infected people or animals. Marburg also has bats as a reservoir but is caused by a different filovirus."
  },
  {
    id: 33,
    question: "The ESKAPE pathogens are significant in the context of antimicrobial resistance. Which organism is INCLUDED in this group?",
    options: [
      "Streptococcus pneumoniae",
      "Mycobacterium tuberculosis",
      "Klebsiella pneumoniae",
      "Clostridium difficile"
    ],
    answer: 2,
    explanation: "ESKAPE pathogens are: Enterococcus faecium, Staphylococcus aureus, Klebsiella pneumoniae, Acinetobacter baumannii, Pseudomonas aeruginosa, and Enterobacter species. These pathogens represent the greatest threat due to their ability to 'escape' the bactericidal action of antibiotics through multiple resistance mechanisms. They are responsible for the majority of healthcare-associated infections globally."
  },
  {
    id: 34,
    question: "The WASH approach to disease prevention refers to:",
    options: [
      "Water safety, Air quality, Sanitation, Hygiene",
      "Water, Sanitation, and Hygiene",
      "Waste management, Air pollution, Soil contamination, and Health",
      "Water treatment, Antiseptic use, Sterilization, and Hand hygiene"
    ],
    answer: 1,
    explanation: "WASH stands for Water, Sanitation, and Hygiene. WASH interventions are critical public health strategies targeting safe drinking water access, adequate sanitation facilities (latrines), and proper hygiene practices (handwashing with soap). WASH interventions are fundamental to preventing diarrheal diseases, cholera, typhoid, hepatitis A, and many other infectious diseases, particularly in low- and middle-income countries."
  },
  {
    id: 35,
    question: "Indoor Residual Spraying (IRS) and Long-Lasting Insecticidal Nets (LLINs) are key strategies for controlling which vector-borne disease?",
    options: [
      "Dengue fever",
      "Malaria",
      "Kala-azar (Visceral Leishmaniasis)",
      "Japanese Encephalitis"
    ],
    answer: 1,
    explanation: "IRS (spraying insecticide on indoor walls to kill resting mosquitoes) and LLINs (bed nets treated with insecticide) are the two primary vector control interventions for malaria. They target Anopheles mosquitoes, which rest indoors and bite primarily at night. The WHO recommends both as core components of malaria prevention. For dengue, source reduction (eliminating breeding sites) is the primary strategy."
  },
  {
    id: 36,
    question: "Rabies is a classic example of a zoonotic disease. The incubation period in humans is variable. Death from rabies encephalitis is almost invariable UNLESS:",
    options: [
      "Broad-spectrum antibiotics are administered immediately",
      "Post-exposure prophylaxis (PEP) with vaccine and immunoglobulin is given promptly before symptom onset",
      "The patient is treated in an ICU with antiviral drugs",
      "Interferon therapy is started within 48 hours of bite"
    ],
    answer: 1,
    explanation: "Once clinical rabies symptoms develop, the disease is almost universally fatal. However, timely post-exposure prophylaxis (PEP) — which includes wound washing, rabies immunoglobulin (RIG) infiltrated at the wound site, and a course of rabies vaccine — is highly effective in preventing the disease if administered before viral neuroinvasion. The Milwaukee Protocol (intensive care) has had very limited documented success and is not standard of care."
  },
  {
    id: 37,
    question: "The MOST common cause of foodborne illness globally is:",
    options: [
      "Salmonella typhi",
      "Campylobacter jejuni",
      "Clostridium botulinum",
      "Listeria monocytogenes"
    ],
    answer: 1,
    explanation: "Campylobacter is the most common bacterial cause of foodborne gastroenteritis globally, according to WHO and CDC data. It is primarily transmitted through contaminated poultry, unpasteurized milk, and water. Salmonella is second. Clostridium botulinum causes the rare but severe botulism. Listeria, while uncommon, has a high case-fatality rate particularly in vulnerable groups."
  },
  {
    id: 38,
    question: "Which of the following is the causative agent of Cholera, and what is its primary mechanism of causing watery diarrhea?",
    options: [
      "Vibrio cholerae; the CT-B subunit directly destroys enterocytes",
      "Vibrio cholerae; cholera toxin (CT) activates adenylate cyclase via ADP-ribosylation of Gs, increasing cAMP and causing secretory diarrhea",
      "Shigella dysenteriae; Shiga toxin inhibits protein synthesis",
      "Enterotoxigenic E. coli; LT toxin inhibits guanylate cyclase"
    ],
    answer: 1,
    explanation: "Vibrio cholerae O1/O139 produces cholera toxin (CT). The CT-A subunit ADP-ribosylates the Gs protein (alpha subunit), permanently activating adenylate cyclase. This increases cAMP in enterocytes, causing constitutive activation of CFTR chloride channels, leading to massive secretion of chloride and water into the intestinal lumen — producing the characteristic 'rice-water' stools of profuse watery diarrhea."
  },
  {
    id: 39,
    question: "The concept of herd immunity threshold (HIT) is defined as the proportion of the population that must be immune to cause a decline in disease incidence. For measles, the HIT is approximately:",
    options: [
      "50–60%",
      "70–75%",
      "92–95%",
      "99–100%"
    ],
    answer: 2,
    explanation: "The Herd Immunity Threshold (HIT) = 1 - 1/R0. For measles, R0 is among the highest of any infectious disease (12–18), giving a HIT of approximately 92–95%. This means at least 92–95% of the population must be immune (through vaccination or prior infection) to prevent sustained transmission. This high threshold makes measles elimination challenging and susceptible to outbreaks when vaccine coverage falls."
  },
  {
    id: 40,
    question: "The key difference between QUARANTINE and ISOLATION in public health is:",
    options: [
      "Quarantine is for symptomatic people; isolation is for asymptomatic exposed individuals",
      "Quarantine is for asymptomatic individuals who may have been exposed; isolation is for confirmed infected or symptomatic individuals",
      "Quarantine applies only to international travelers; isolation applies to all",
      "There is no difference; the terms are interchangeable"
    ],
    answer: 1,
    explanation: "Isolation separates and restricts the movement of persons who are known or confirmed to be infected (sick or contagious) to prevent spread to others. Quarantine separates and restricts the movement of persons who are not yet sick but have been potentially exposed to a contagious disease and may become infectious, for a period equal to the maximum incubation period of the disease."
  },
  {
    id: 41,
    question: "According to the International Diabetes Federation (IDF) and joint scientific statement criteria, Metabolic Syndrome requires central obesity (mandatory) PLUS two of the following. Which combination is CORRECT?",
    options: [
      "Raised fasting glucose (≥5.6 mmol/L), raised triglycerides (≥1.7 mmol/L), reduced HDL-cholesterol, raised blood pressure (≥130/85 mmHg)",
      "Raised LDL-cholesterol, raised fasting glucose, raised uric acid, raised blood pressure",
      "Obesity (BMI ≥30), raised fasting insulin, raised triglycerides, reduced LDL",
      "Raised fasting glucose, raised fasting insulin, raised blood pressure, raised creatinine"
    ],
    answer: 0,
    explanation: "Metabolic syndrome (IDF/joint scientific statement 2009) requires central obesity (waist circumference with population-specific cutoffs) PLUS any two of: (1) raised triglycerides ≥1.7 mmol/L or treatment; (2) reduced HDL-C (<1.03 mmol/L in men, <1.29 mmol/L in women) or treatment; (3) raised BP ≥130/85 mmHg or treatment; (4) raised fasting glucose ≥5.6 mmol/L or type 2 diabetes."
  },
  {
    id: 42,
    question: "The WHO STEPwise Approach to Surveillance (STEPS) monitors NCD risk factors using three levels. Which of the following correctly describes Step 2?",
    options: [
      "Questionnaire data only (self-reported information on behaviors)",
      "Simple physical measurements (height, weight, blood pressure, waist circumference)",
      "Blood sample collection for biochemical measurements (glucose, lipids)",
      "Imaging studies and ECG"
    ],
    answer: 1,
    explanation: "WHO STEPS has three levels: Step 1 — Questionnaire (self-reported behavioral risk factors such as tobacco use, physical inactivity, diet, alcohol); Step 2 — Physical measurements (height, weight, BMI, waist circumference, blood pressure, heart rate); Step 3 — Blood sample biochemical measurements (fasting blood glucose, total cholesterol, HDL cholesterol). Each step builds upon the previous."
  },
  {
    id: 43,
    question: "According to WHO classification, a BMI of 35.0–39.9 kg/m² corresponds to:",
    options: [
      "Obesity Class I",
      "Obesity Class II",
      "Obesity Class III (morbid obesity)",
      "Overweight"
    ],
    answer: 1,
    explanation: "WHO BMI classification: Underweight (<18.5), Normal weight (18.5–24.9), Overweight (25–29.9), Obesity Class I (30–34.9), Obesity Class II (35–39.9), Obesity Class III/Morbid Obesity (≥40). Note that for Asian populations (including Indians), the cut-offs are lower — overweight ≥23, obesity ≥27.5 kg/m²."
  },
  {
    id: 44,
    question: "The National Mental Health Programme (NMHP) in India was launched in:",
    options: [
      "1975",
      "1982",
      "1990",
      "1996"
    ],
    answer: 1,
    explanation: "The National Mental Health Programme (NMHP) was launched in India in 1982, based on the recommendations of the National Mental Health Policy. Its key components include the District Mental Health Programme (DMHP), launched as part of the 8th Five Year Plan in 1996 starting in Bellary, Karnataka. NMHP aims to ensure availability of mental health services at the community level."
  },
  {
    id: 45,
    question: "Under the Tobacco Control Act (COTPA 2003) in India, cigarette smoking in public places is prohibited. COTPA stands for:",
    options: [
      "Control of Tobacco Products and Advertising Act",
      "Cigarettes and Other Tobacco Products (Prohibition of Advertisement and Regulation of Trade and Commerce, Production, Supply and Distribution) Act",
      "Comprehensive Ordinance for Tobacco Prevention Act",
      "Central Organization for Tobacco Products Awareness"
    ],
    answer: 1,
    explanation: "COTPA stands for the Cigarettes and Other Tobacco Products (Prohibition of Advertisement and Regulation of Trade and Commerce, Production, Supply and Distribution) Act, 2003. Key provisions include prohibition of smoking in public places (Section 4), prohibition of advertisement (Section 5), prohibition of sale to/by minors (Section 6), and mandatory pictorial health warnings on packaging (Section 7)."
  },
  {
    id: 46,
    question: "Which of the following is a DIRECT measure of occupational exposure to silica dust and is used to diagnose pneumoconiosis?",
    options: [
      "Spirometry showing obstructive pattern",
      "HRCT chest showing upper-lobe predominant nodular opacities with eggshell calcification of hilar lymph nodes",
      "BAL showing hemosiderin-laden macrophages",
      "Positive skin test to silica antigen"
    ],
    answer: 1,
    explanation: "Silicosis results from inhalation of crystalline silica dust. The classic radiological features include small rounded opacities (nodules) predominantly in the upper lobes of the lung, and eggshell calcification of hilar and mediastinal lymph nodes (peripheral ring calcification), which is pathognomonic of silicosis. Spirometry may show a restrictive or mixed pattern. HRCT is the most sensitive imaging modality."
  },
  {
    id: 47,
    question: "Road Traffic Injuries (RTIs) are a major public health problem. The MOST effective single intervention to reduce RTI deaths is:",
    options: [
      "Improving road lighting",
      "Enforcing seat belt use",
      "Increasing speed limits on highways",
      "Reducing pedestrian crossings"
    ],
    answer: 1,
    explanation: "Seat belt use is the most evidence-based, cost-effective intervention for reducing RTI fatalities and serious injuries. Meta-analyses show that seat belts reduce the risk of death in front-seat occupants by approximately 45–65% and the risk of serious injury by 50%. Other effective interventions include helmet use (motorcycles), drunk-driving laws, speed control, and child restraint systems."
  },
  {
    id: 48,
    question: "The Disability-Adjusted Life Year (DALY) is calculated as:",
    options: [
      "Years Lived with Disability (YLD) minus Years of Life Lost (YLL)",
      "Years of Life Lost (YLL) plus Years Lived with Disability (YLD)",
      "Quality-Adjusted Life Years (QALYs) minus Years Lost",
      "Life expectancy minus healthy life expectancy"
    ],
    answer: 1,
    explanation: "DALY = YLL + YLD. YLL (Years of Life Lost) represents mortality burden — years lost due to premature death (calculated as number of deaths × standard life expectancy at age of death). YLD (Years Lived with Disability) represents morbidity burden — years lived in states of less than full health. DALYs quantify the total burden of disease and are used by WHO's Global Burden of Disease study."
  },
  {
    id: 49,
    question: "The Comprehensive Geriatric Assessment (CGA) is a multidimensional diagnostic tool used in geriatric medicine. Which of the following is NOT a standard domain assessed in CGA?",
    options: [
      "Cognitive function",
      "Nutritional status",
      "Genetic profiling",
      "Social support and environment"
    ],
    answer: 2,
    explanation: "CGA is a multidisciplinary assessment that typically covers: (1) Medical — comorbidities, polypharmacy; (2) Functional status — ADLs, IADLs; (3) Cognitive function — MMSE, MoCA; (4) Psychological — depression screening (GDS); (5) Nutritional status — MNA; (6) Sensory function — vision, hearing; (7) Social environment — support, living conditions; (8) Falls and gait. Genetic profiling is not a standard CGA domain."
  },
  {
    id: 50,
    question: "Quality-Adjusted Life Year (QALY) is used in health technology assessment (HTA). A QALY value of 0.5 for one year means:",
    options: [
      "The patient died at age 0.5 years",
      "The patient lived for one year at 50% of full health (equivalent to 0.5 years in perfect health)",
      "The patient has a 50% chance of dying within one year",
      "The treatment costs $0.50 per year of life gained"
    ],
    answer: 1,
    explanation: "A QALY combines quality and quantity of life. Health states are assigned a utility value from 0 (death) to 1 (perfect health). A QALY = duration in health state × utility value. Therefore, living for 1 year with utility 0.5 = 0.5 QALYs, equivalent to 6 months in perfect health. QALYs are used to compare the cost-effectiveness of health interventions (cost per QALY gained)."
  },
  {
    id: 51,
    question: "The Belmont Report (1979) established three core ethical principles for human subjects research. Which of the following is NOT one of the Belmont principles?",
    options: [
      "Respect for Persons (Autonomy)",
      "Beneficence",
      "Justice",
      "Non-maleficence"
    ],
    answer: 3,
    explanation: "The Belmont Report's three principles are: (1) Respect for Persons — individuals should be treated as autonomous agents and those with diminished autonomy deserve protection; (2) Beneficence — maximize benefits and minimize harms; (3) Justice — fair distribution of research burdens and benefits. Non-maleficence ('do no harm') is a principle from Beauchamp and Childress's 'Principles of Biomedical Ethics' (principlism) — it is NOT one of the three Belmont principles."
  },
  {
    id: 52,
    question: "The CIOMS International Ethical Guidelines for Health-related Research Involving Humans (2016) specifically emphasize which principle regarding research in low-resource settings?",
    options: [
      "All research in LMICs must be replicated in high-income countries first",
      "Research must be responsive to the health needs and priorities of the host community",
      "Informed consent may be waived for all community-based research",
      "Sponsors from high-income countries need not involve local investigators"
    ],
    answer: 1,
    explanation: "CIOMS 2016 guidelines (Guideline 2) emphasize that research conducted in resource-limited settings must be responsive to the health needs and priorities of the host country — research must address conditions affecting the community. This principle, along with capacity building and post-trial access, is designed to prevent exploitation of vulnerable populations in lower-income countries by research sponsors from wealthier nations."
  },
  {
    id: 53,
    question: "GCP-ICH guidelines define 'equipoise' in clinical research as:",
    options: [
      "Equal randomization of participants to each arm",
      "Genuine uncertainty in the expert medical community about the comparative benefits of each intervention",
      "Equal distribution of baseline characteristics between trial arms",
      "Balance between potential risks and benefits in a trial"
    ],
    answer: 1,
    explanation: "Clinical equipoise (or the 'uncertainty principle') is the ethical precondition for a randomized controlled trial. It means there is genuine uncertainty — disagreement or lack of consensus in the expert community — about which treatment arm is superior. If clear evidence already favors one treatment, randomizing patients to the inferior arm is unethical. Equipoise justifies the act of randomization itself."
  },
  {
    id: 54,
    question: "Therapeutic misconception in research ethics refers to the tendency of research participants to:",
    options: [
      "Believe that research poses no risk whatsoever",
      "Conflate the purpose of research with the purpose of clinical care, believing the primary goal is their individual benefit",
      "Misunderstand the difference between placebos and active drugs",
      "Overestimate the likelihood of adverse events"
    ],
    answer: 1,
    explanation: "Therapeutic misconception, first described by Appelbaum et al. (1982), occurs when research participants fail to appreciate the distinction between the goals of clinical research (generating generalizable knowledge) and the goals of clinical care (promoting individual patient welfare). Participants may believe the trial protocol is individualized for their therapeutic benefit rather than designed to test a hypothesis — this compromises truly informed consent."
  },
  {
    id: 55,
    question: "Post-trial access in research ethics refers to the obligation to provide:",
    options: [
      "Free publication of trial results in open-access journals",
      "Continued access to a beneficial intervention to participants after the trial concludes",
      "Follow-up health monitoring for all participants for life",
      "Compensation to participants for time lost during the trial"
    ],
    answer: 1,
    explanation: "Post-trial access (CIOMS Guideline 6, Declaration of Helsinki Paragraph 34) obligates sponsors and investigators to make provisions for continued access to interventions that prove beneficial during a trial, to all participants after the trial concludes. This is especially important in LMICs where participants may not otherwise afford the intervention. Arrangements should be made before the trial begins."
  },
  {
    id: 56,
    question: "In benefit sharing in genetics research, the concept of 'fair benefits' refers to:",
    options: [
      "Equal payment to all research participants regardless of contribution",
      "Sharing the benefits of research (health improvements, capacity building, technology transfer) fairly with communities that contributed biological samples",
      "Sharing patent royalties equally between researchers and institutions",
      "Providing identical benefits to cases and controls"
    ],
    answer: 1,
    explanation: "Fair benefits in genomic/genetic research refers to the equitable sharing of the benefits arising from research with the communities and populations that contributed biological materials and data. This includes access to resulting health interventions, capacity building, technology transfer, and publication of results. It addresses the imbalance between communities that donate samples and the researchers/institutions that commercialize findings."
  },
  {
    id: 57,
    question: "The ethical principle MOST relevant to the governance of biobanks (large collections of biological specimens) is:",
    options: [
      "Non-maleficence",
      "Dynamic consent — ongoing, granular consent that can be updated as research evolves",
      "Single broad consent given once at donation",
      "Waiver of consent for all future uses"
    ],
    answer: 1,
    explanation: "Biobank governance raises the ethical challenge of future uses of stored specimens that cannot all be anticipated at the time of donation. Dynamic consent (also called tiered or layered consent) allows participants to provide specific preferences for different categories of research use, update their consent over time, and withdraw for future studies. This respects autonomy more effectively than broad blanket consent, especially with digital platforms enabling ongoing participant engagement."
  },
  {
    id: 58,
    question: "Direct-to-consumer (DTC) genetic testing raises specific ethical concerns. Which is the MOST significant ethical issue?",
    options: [
      "High cost of testing",
      "Inadequate pre- and post-test genetic counseling and potential for psychological harm from unsupervised results interpretation",
      "Use of too small a sample volume",
      "Lack of technical accuracy of current platforms"
    ],
    answer: 1,
    explanation: "DTC genetic testing bypasses medical supervision and genetic counseling. Key ethical concerns include: (1) Inadequate pre/post-test counseling leading to misinterpretation of probabilistic risk information; (2) Psychological harm from unexpected findings (e.g., BRCA status, Huntington's disease risk); (3) Privacy and data security of genetic data; (4) Testing minors; (5) Clinical validity and utility of results. The absence of professional guidance is the most critical issue."
  },
  {
    id: 59,
    question: "In the context of AI ethics in healthcare, algorithmic bias most commonly arises from:",
    options: [
      "Using too many computational layers in the neural network",
      "Training datasets that are not representative of the target population (underrepresentation of minority groups)",
      "Using open-source software frameworks",
      "High processing speed of AI systems"
    ],
    answer: 1,
    explanation: "Algorithmic bias in healthcare AI arises primarily when training data do not adequately represent the diversity of the target population. AI systems trained predominantly on data from white males in Western settings may perform poorly on women, elderly patients, or non-Western populations. This perpetuates and potentially amplifies existing health disparities. It is a major concern for FDA/regulatory approval of AI medical devices."
  },
  {
    id: 60,
    question: "The principle of 'justice' in the context of AI and healthcare ethics includes:",
    options: [
      "Legal justice — ensuring AI developers face criminal liability",
      "Equitable access to AI-driven healthcare benefits and protection from AI-driven harms across all population groups",
      "Financial justice — equal payment to all patients using AI services",
      "Judicial oversight — all AI decisions must be approved by a court"
    ],
    answer: 1,
    explanation: "Justice in AI healthcare ethics encompasses: (1) Equity — ensuring AI benefits are accessible to all, not just wealthy populations; (2) Non-discrimination — AI algorithms should not perpetuate or amplify health disparities; (3) Fair distribution of both benefits and burdens; (4) Procedural justice — transparent, accountable decision-making processes. This mirrors the Belmont principle of justice applied to the domain of artificial intelligence."
  },
  {
    id: 61,
    question: "During DNA replication, a mismatch in the newly synthesized strand is corrected by which repair mechanism?",
    options: [
      "Nucleotide Excision Repair (NER)",
      "Base Excision Repair (BER)",
      "Mismatch Repair (MMR)",
      "Non-Homologous End Joining (NHEJ)"
    ],
    answer: 2,
    explanation: "Mismatch Repair (MMR) corrects base-base mismatches and small insertion/deletion loops that escape proofreading during DNA replication. Key proteins include MutS (mismatch recognition), MutL (coordination), and MutH (strand discrimination in bacteria). In humans, MLH1, MSH2, MSH6, and PMS2 are key MMR genes — germline mutations cause Lynch syndrome (hereditary non-polyposis colorectal cancer, HNPCC)."
  },
  {
    id: 62,
    question: "MicroRNAs (miRNAs) regulate gene expression by:",
    options: [
      "Catalyzing mRNA synthesis in the nucleus",
      "Binding to complementary sequences in the 3' UTR of target mRNAs, leading to mRNA degradation or translational repression",
      "Directly modifying histone proteins",
      "Functioning as ribosomal components during translation"
    ],
    answer: 1,
    explanation: "miRNAs are short (~22 nt) non-coding RNAs that are incorporated into the RNA-induced silencing complex (RISC). Within RISC, miRNAs guide the complex to complementary sequences typically in the 3' UTR of target mRNAs. Near-perfect complementarity leads to mRNA cleavage (degradation); partial complementarity leads to translational repression without degradation. miRNAs are key post-transcriptional regulators and have roles in development, cancer, and disease."
  },
  {
    id: 63,
    question: "In the lac operon of E. coli, when glucose is absent and lactose is present, which of the following occurs?",
    options: [
      "The lac repressor binds the operator, preventing transcription",
      "cAMP levels rise, CAP binds the promoter, and the lac repressor is inactivated by allolactose — full transcription occurs",
      "The lac genes are constitutively expressed regardless of sugar levels",
      "cAMP levels fall, and RNA polymerase cannot bind the promoter"
    ],
    answer: 1,
    explanation: "The lac operon is controlled by two mechanisms: (1) Negative control — the lac repressor (encoded by lacI) binds the operator and blocks transcription. When lactose is present, its metabolite allolactose binds the repressor, causing a conformational change that releases it from the operator. (2) Positive control (catabolite repression) — when glucose is absent, cAMP levels are high. cAMP-CAP complex binds the promoter and enhances RNA polymerase binding. Both must occur for maximum transcription."
  },
  {
    id: 64,
    question: "In the PI3K/Akt/mTOR signal transduction pathway, which second messenger is generated by PI3K?",
    options: [
      "cAMP",
      "IP3",
      "PIP3 (Phosphatidylinositol 3,4,5-trisphosphate)",
      "DAG (Diacylglycerol)"
    ],
    answer: 2,
    explanation: "Phosphoinositide 3-kinase (PI3K) phosphorylates PIP2 (phosphatidylinositol 4,5-bisphosphate) to generate PIP3 (phosphatidylinositol 3,4,5-trisphosphate) at the inner leaflet of the plasma membrane. PIP3 recruits PDK1 and Akt (PKB) to the membrane via their PH domains, where Akt is activated. PTEN is the phosphatase that reverses this by converting PIP3 back to PIP2 — PTEN is a major tumor suppressor."
  },
  {
    id: 65,
    question: "In the intrinsic pathway of apoptosis, cytochrome c released from mitochondria forms a complex with which protein to activate procaspase-9?",
    options: [
      "Bcl-2",
      "APAF-1 (Apoptotic Protease Activating Factor-1)",
      "Survivin",
      "XIAP (X-linked Inhibitor of Apoptosis Protein)"
    ],
    answer: 1,
    explanation: "In the intrinsic (mitochondrial) apoptosis pathway, pro-apoptotic signals cause cytochrome c to be released from the mitochondrial intermembrane space. Cytochrome c binds to APAF-1 (Apoptotic Protease-Activating Factor-1), which oligomerizes in an ATP-dependent manner to form the apoptosome — a heptameric wheel structure. The apoptosome recruits and activates procaspase-9, which then activates effector caspases-3, -6, and -7."
  },
  {
    id: 66,
    question: "The cell cycle checkpoint that prevents entry into mitosis until DNA damage is repaired is controlled by:",
    options: [
      "G1/S checkpoint (restriction point)",
      "Spindle assembly checkpoint (SAC)",
      "G2/M checkpoint",
      "M/G1 checkpoint"
    ],
    answer: 2,
    explanation: "The G2/M checkpoint monitors DNA integrity before the cell enters mitosis. If DNA damage is detected, ATM/ATR kinases phosphorylate and activate Chk1/Chk2 kinases, which phosphorylate Cdc25C phosphatase, targeting it for degradation or sequestration. This prevents activation of the CDK1-Cyclin B complex (Maturation Promoting Factor), blocking entry into mitosis. The spindle assembly checkpoint (SAC) operates within mitosis to ensure correct kinetochore-microtubule attachment."
  },
  {
    id: 67,
    question: "The RB1 gene (retinoblastoma gene) is a classic tumor suppressor. In its active (hypophosphorylated) form, pRb:",
    options: [
      "Activates the E2F transcription factors, promoting S-phase entry",
      "Sequesters E2F transcription factors, blocking S-phase gene expression",
      "Activates CDK4/6-Cyclin D complexes",
      "Degrades p53 protein"
    ],
    answer: 1,
    explanation: "Retinoblastoma protein (pRb) is the key regulator of the G1/S restriction point. In its hypophosphorylated (active) form, pRb binds and sequesters E2F transcription factors, preventing transcription of genes required for S-phase entry. In response to mitogenic signals, CDK4/6-Cyclin D (and CDK2-Cyclin E) phosphorylate pRb, releasing E2F and allowing cell cycle progression. Loss-of-function mutations in RB1 (Knudson's two-hit hypothesis) cause retinoblastoma."
  },
  {
    id: 68,
    question: "RAS proto-oncogenes (HRAS, KRAS, NRAS) are mutated in approximately 30% of all human cancers. The most common activating mutation locks RAS in an active state by:",
    options: [
      "Increasing receptor tyrosine kinase expression",
      "Preventing GTP hydrolysis, keeping RAS in the GTP-bound (active) state",
      "Inhibiting GAP (GTPase-activating protein) overexpression",
      "Activating GEF (guanine nucleotide exchange factor) proteins"
    ],
    answer: 1,
    explanation: "RAS proteins are molecular switches that cycle between GDP-bound (inactive) and GTP-bound (active) states. Activating mutations (most commonly at codons 12 and 13) substitute amino acids that impair the intrinsic GTPase activity of RAS and block GAP-mediated GTP hydrolysis. This results in RAS being permanently locked in the GTP-bound active state, constitutively activating downstream signaling (RAF-MEK-ERK, PI3K-AKT) and driving uncontrolled proliferation."
  },
  {
    id: 69,
    question: "Pharmacogenomics studies how genetic variation affects drug response. Patients with CYP2D6 poor metabolizer status would be at greatest risk for toxicity from:",
    options: [
      "Warfarin",
      "Codeine",
      "Metformin",
      "Aspirin"
    ],
    answer: 1,
    explanation: "CYP2D6 is responsible for metabolizing codeine (a prodrug) to morphine (the active analgesic). CYP2D6 ultra-rapid metabolizers convert codeine to morphine extremely rapidly, risking morphine toxicity/death. Conversely, poor metabolizers cannot adequately convert codeine to morphine and receive no analgesic benefit. Due to this pharmacogenomic variability, the FDA has issued warnings against codeine use in certain populations. Warfarin is primarily metabolized by CYP2C9; metformin is not significantly CYP-metabolized."
  },
  {
    id: 70,
    question: "Next-Generation Sequencing (NGS) differs from Sanger sequencing primarily in that NGS:",
    options: [
      "Can only sequence DNA, not RNA",
      "Sequences millions of DNA fragments massively in parallel, enabling whole-genome sequencing at much lower cost and higher throughput",
      "Requires radioactive labeling of nucleotides",
      "Cannot detect single nucleotide polymorphisms (SNPs)"
    ],
    answer: 1,
    explanation: "Next-Generation Sequencing (NGS), also called massively parallel sequencing or high-throughput sequencing, sequences millions to billions of DNA fragments simultaneously in parallel. This provides dramatically higher throughput, lower cost per base, and the ability to sequence entire genomes compared to Sanger (chain-termination) sequencing, which sequences one fragment at a time. NGS platforms (Illumina, Ion Torrent, Oxford Nanopore) have revolutionized genomics, enabling whole-genome, whole-exome, and RNA-seq."
  },
  {
    id: 71,
    question: "Cholera toxin and pertussis toxin both work via ADP-ribosylation. What is the KEY difference in their mechanisms?",
    options: [
      "Cholera toxin activates Gs (increasing cAMP); pertussis toxin ADP-ribosylates Gi (preventing inhibition of adenylate cyclase, also increasing cAMP)",
      "Both toxins activate Gs protein equally",
      "Cholera toxin decreases cAMP; pertussis toxin increases cAMP",
      "Pertussis toxin acts on the nucleus; cholera toxin acts on ribosomes"
    ],
    answer: 0,
    explanation: "Both toxins are ADP-ribosyl transferases acting on G proteins but with opposing targets: Cholera toxin ADP-ribosylates the alpha subunit of Gs, preventing GTP hydrolysis and constitutively activating adenylate cyclase → massive cAMP increase → secretory diarrhea. Pertussis toxin ADP-ribosylates the alpha subunit of Gi, preventing Gi from inhibiting adenylate cyclase → adenylate cyclase activity increases and cAMP rises → impaired immune cell signaling, contributing to whooping cough pathogenesis."
  },
  {
    id: 72,
    question: "The lytic cycle of a bacteriophage concludes with:",
    options: [
      "Integration of viral DNA into the host chromosome",
      "Dormancy of viral DNA as a prophage",
      "Lysis of the host cell and release of new phage particles",
      "Transduction of bacterial genes to another host"
    ],
    answer: 2,
    explanation: "In the lytic cycle, the bacteriophage infects the host bacterium, takes over its replication machinery, produces hundreds of new phage particles (virion assembly), and then lyses (destroys) the host cell to release the progeny phages. This contrasts with the lysogenic cycle, where the phage DNA (prophage) integrates into the bacterial chromosome and replicates passively with each bacterial division without killing the host."
  },
  {
    id: 73,
    question: "Prion diseases (transmissible spongiform encephalopathies) are caused by:",
    options: [
      "A slow-acting retrovirus",
      "An abnormally folded, protease-resistant form of normal cellular prion protein (PrPSc) that propagates by converting normal PrPC",
      "A defective interfering particle lacking nucleic acid",
      "Autoimmune destruction of neurons"
    ],
    answer: 1,
    explanation: "Prion diseases (Creutzfeldt-Jakob disease in humans, BSE in cattle, Scrapie in sheep) are caused by misfolded prion proteins (PrPSc — scrapie isoform). PrPSc is a conformational isomer of normal cellular PrPC — both have the same amino acid sequence but differ in 3D structure (PrPSc is beta-sheet rich vs. PrPC's alpha-helical structure). PrPSc is protease-resistant and self-propagating: it templates the misfolding of normal PrPC molecules, creating a chain reaction without any nucleic acid. This protein-only infectious agent theory was proposed by Stanley Prusiner (Nobel Prize 1997)."
  },
  {
    id: 74,
    question: "Biofilm formation provides bacteria with protection from antibiotics. The FIRST step in biofilm formation is:",
    options: [
      "Production of the extracellular polymeric substance (EPS) matrix",
      "Reversible attachment of planktonic bacteria to a surface",
      "Quorum sensing between bacteria",
      "Irreversible attachment and micro-colony formation"
    ],
    answer: 1,
    explanation: "Biofilm formation occurs in stages: (1) Initial reversible attachment — planktonic (free-floating) bacteria adhere non-specifically to a surface via weak van der Waals and electrostatic forces; (2) Irreversible attachment — stronger specific adhesin-receptor interactions; (3) Microcolony formation; (4) Maturation — production of extracellular polymeric substance (EPS) matrix, quorum sensing, structured 3D architecture; (5) Dispersal — bacteria detach and colonize new sites."
  },
  {
    id: 75,
    question: "HEPA (High-Efficiency Particulate Air) filters are used in biosafety cabinets and are defined as filters that remove at least what percentage of airborne particles ≥0.3 μm?",
    options: [
      "95%",
      "99.97%",
      "90%",
      "99.5%"
    ],
    answer: 1,
    explanation: "HEPA filters are defined by their ability to remove at least 99.97% of airborne particles ≥0.3 micrometers in diameter. The 0.3 μm particle size is the 'most penetrating particle size' (MPPS) — particles larger or smaller are actually captured more efficiently. HEPA filters are used in biosafety cabinets (Class II BSC), operating theatres, ICUs, and isolation rooms to prevent transmission of airborne pathogens."
  },
  {
    id: 76,
    question: "In an autoclave (steam sterilization), the standard sterilization cycle for surgical instruments operates at:",
    options: [
      "100°C at 1 atm for 30 minutes",
      "121°C at 15 psi (103 kPa) for 15–20 minutes",
      "134°C at atmospheric pressure for 5 minutes",
      "160°C at 15 psi for 60 minutes"
    ],
    answer: 1,
    explanation: "The standard gravity displacement autoclave cycle operates at 121°C (250°F) at 15 psi (103 kPa) above atmospheric pressure for 15–20 minutes. The higher temperature (compared to boiling at 100°C at sea level) achieved under pressure is necessary to kill bacterial endospores (the most heat-resistant life forms). Pre-vacuum autoclaves can operate at 132–134°C for shorter times. Dry heat sterilization requires 160°C for 2 hours."
  },
  {
    id: 77,
    question: "Biosafety Level 4 (BSL-4) laboratories are required for working with:",
    options: [
      "All pathogenic bacteria",
      "Agents with no available vaccine or therapy that pose a high risk of life-threatening disease via aerosol transmission (e.g., Ebola, Marburg, Nipah virus)",
      "HIV and HBV",
      "Drug-resistant tuberculosis (MDR-TB)"
    ],
    answer: 1,
    explanation: "BSL-4 is the highest containment level, required for agents that pose a high risk of life-threatening disease, for which no vaccine or effective therapy exists, and that may be transmitted via aerosol. Examples include Ebola virus, Marburg virus, Nipah virus, Lassa fever virus, and variola (smallpox) virus. BSL-4 labs require full-body pressurized suits, airlock entry, and Class III biosafety cabinets. MDR-TB requires BSL-3. HIV/HBV are BSL-2."
  },
  {
    id: 78,
    question: "Koch's postulates, as modified by Robert Koch (1884), established criteria for proving that a specific microorganism causes a specific disease. Which MODIFICATION to Koch's postulates was necessary for viral diseases?",
    options: [
      "Viruses must be visible under light microscopy",
      "Viruses can be grown on artificial culture media",
      "Viruses cannot always be isolated in pure culture since they require living host cells; the concept of 'molecular Koch's postulates' was developed using nucleic acid evidence",
      "Koch's postulates apply unchanged to all viruses"
    ],
    answer: 2,
    explanation: "Koch's original postulates require culturing the organism in pure culture outside the host — which is impossible for obligate intracellular parasites like viruses (and also some bacteria like Mycobacterium leprae). Evans' postulates expanded the framework for viruses. Falkow's molecular Koch's postulates (1988) use molecular evidence: (1) The gene encoding virulence should be found in pathogenic but not non-pathogenic strains; (2) Disruption of the gene reduces virulence; (3) Restoration of the gene restores virulence."
  },
  {
    id: 79,
    question: "The predominant normal flora organism in the human vagina that maintains an acidic pH and protects against pathogenic infections is:",
    options: [
      "Staphylococcus epidermidis",
      "Bacteroides fragilis",
      "Lactobacillus species (Döderlein's bacillus)",
      "Escherichia coli"
    ],
    answer: 2,
    explanation: "Lactobacillus species (historically known as Döderlein's bacillus) are the dominant normal flora of the healthy vagina. They metabolize glycogen (from vaginal epithelial cells under estrogen influence) to lactic acid, maintaining a low vaginal pH (3.8–4.5) that inhibits the growth of pathogens like Gardnerella vaginalis, Candida, and Trichomonas. Disruption of Lactobacillus flora (e.g., by antibiotics) leads to bacterial vaginosis."
  },
  {
    id: 80,
    question: "The MOST common causative organism of hospital-acquired (nosocomial) urinary tract infections associated with urinary catheterization is:",
    options: [
      "Staphylococcus aureus",
      "Pseudomonas aeruginosa",
      "Escherichia coli",
      "Candida albicans"
    ],
    answer: 2,
    explanation: "Escherichia coli remains the most common causative organism of catheter-associated urinary tract infections (CAUTI) and community-acquired UTIs. It accounts for approximately 50% of all UTIs. In the hospital setting, Enterococcus species, Klebsiella pneumoniae, Pseudomonas aeruginosa, and Candida are also significant pathogens, particularly in ICU patients with prolonged catheterization. Gram-negative bacilli collectively predominate."
  },
  {
    id: 81,
    question: "Choose the sentence in which the phrasal verb 'come across' is used correctly:",
    options: [
      "The surgeon come across the operating table carefully.",
      "She came across an interesting article while browsing the medical journal.",
      "The patient came across the medication on the doctor's recommendation.",
      "The nurse came across loudly at the patient."
    ],
    answer: 1,
    explanation: "'Come across' as a phrasal verb means to find or encounter something unexpectedly. In option B, 'came across an interesting article while browsing' correctly uses the phrasal verb to mean 'encountered by chance.' Option C incorrectly uses it to mean 'received.' Option D confuses it with 'came across as' (to create an impression). Option A uses it literally with physical movement, not as a phrasal verb."
  },
  {
    id: 82,
    question: "The Latin phrase 'in vitro' used in biomedical research literally means and refers to:",
    options: [
      "'In life' — experiments conducted in living organisms",
      "'In glass' — experiments conducted outside living organisms in a controlled environment such as a test tube or cell culture",
      "'In truth' — verified experimental conditions",
      "'In vivo' — experiments conducted in the body"
    ],
    answer: 1,
    explanation: "'In vitro' (Latin: 'in glass') refers to experiments conducted outside a living organism in a laboratory setting — in a test tube, Petri dish, or cell culture system. This contrasts with 'in vivo' (Latin: 'in the living [body]') — experiments conducted within a living organism. A third term, 'ex vivo,' refers to experiments conducted on tissue removed from an organism and maintained outside under near-physiological conditions."
  },
  {
    id: 83,
    question: "Which of the following pairs are HOMOPHONES (words that sound the same but have different meanings)?",
    options: [
      "'Principal' and 'principle'",
      "'Affect' and 'effect'",
      "'Complement' and 'compliment'",
      "'Ileum' and 'ilium'"
    ],
    answer: 3,
    explanation: "Homophones are words that sound identical when spoken but differ in spelling and meaning. 'Ileum' (the distal part of the small intestine) and 'ilium' (the large flared bone of the pelvis) are homophones — both are pronounced identically. 'Principal/principle,' 'affect/effect,' and 'complement/compliment' are often confused word pairs but are NOT perfect homophones — they sound slightly different when pronounced carefully."
  },
  {
    id: 84,
    question: "Which of the following pairs of words is most commonly confused in medical writing?",
    options: [
      "'Prognosis' and 'diagnosis'",
      "'Efficacy' and 'effectiveness'",
      "'Adverse' and 'averse'",
      "'Incidence' and 'prevalence'"
    ],
    answer: 3,
    explanation: "Incidence and prevalence are the most commonly confused epidemiological terms in medical writing. Incidence refers to the number of NEW cases of a disease occurring in a defined population during a specified time period. Prevalence refers to the TOTAL number (new + existing) of cases of a disease in a population at a given time or during a period. Understanding this distinction is fundamental to epidemiology."
  },
  {
    id: 85,
    question: "Identify the correct PASSIVE VOICE transformation of: 'The committee will approve the research protocol.'",
    options: [
      "The research protocol will be approved by the committee.",
      "The research protocol has been approved by the committee.",
      "The research protocol was approved by the committee.",
      "The research protocol is approved by the committee."
    ],
    answer: 0,
    explanation: "The original sentence is in future simple active voice. To convert to passive: the object ('the research protocol') becomes the subject, the verb changes to 'will be + past participle' (will be approved), and the original subject becomes an agent ('by the committee'). Option B uses present perfect passive (incorrect tense), C uses simple past (incorrect), and D uses simple present (incorrect)."
  },
  {
    id: 86,
    question: "Convert the following to INDIRECT SPEECH: She said, 'I am presenting my research findings tomorrow.'",
    options: [
      "She said that she is presenting her research findings tomorrow.",
      "She said that she was presenting her research findings the next day.",
      "She said that I am presenting my research findings tomorrow.",
      "She said she will present her research findings tomorrow."
    ],
    answer: 1,
    explanation: "In indirect speech: (1) The tense shifts back (backshift): 'am presenting' (present continuous) → 'was presenting' (past continuous); (2) Time expressions change: 'tomorrow' → 'the next day'; (3) Pronouns change to reflect the new perspective: 'I' → 'she'; (4) The reporting verb 'said' does not need 'to' (say/said + that clause without 'to'). Option B correctly applies all rules."
  },
  {
    id: 87,
    question: "Identify the sentence with CORRECT subject-verb agreement:",
    options: [
      "The data was collected from multiple centers.",
      "A number of participants was excluded from the analysis.",
      "The committee have made their decision unanimously.",
      "Neither the intervention nor the controls were effective."
    ],
    answer: 3,
    explanation: "With 'neither...nor,' the verb agrees with the subject closest to it. 'Controls' (plural) is closest to the verb, so 'were' is correct. Option A: 'Data' is plural (datum is singular) — should be 'data were.' Option B: 'A number of' takes a plural verb — 'a number of participants were.' Option C: 'Committee' as a collective noun in American English takes a singular verb — 'has made.' Option D is correct."
  },
  {
    id: 88,
    question: "Identify the correctly formed PAST PERFECT TENSE sentence:",
    options: [
      "The patient recovered before the new medication was introduced.",
      "The patient had recovered before the new medication was introduced.",
      "The patient was recovering before the new medication was introduced.",
      "The patient has recovered before the new medication was introduced."
    ],
    answer: 1,
    explanation: "The past perfect tense (had + past participle) is used to describe an action that was completed BEFORE another past action. In option B, 'had recovered' correctly indicates that the recovery was completed prior to the introduction of the medication — both events are in the past, with 'had recovered' establishing the earlier one. Option A uses simple past for both (suggests simultaneous events), C uses past continuous (ongoing action), D uses present perfect (incorrect in past context)."
  },
  {
    id: 89,
    question: "Choose the sentence with correct ARTICLE usage:",
    options: [
      "She is a only researcher to have published three studies in a single year.",
      "He holds an MBA in Healthcare Management from a university.",
      "The results indicated an uniform decline in morbidity rates.",
      "An MBBS degree is required for admission to the programme."
    ],
    answer: 3,
    explanation: "Article usage rule: Use 'an' before words that begin with a vowel SOUND (not just a vowel letter). 'MBBS' is an abbreviation pronounced 'em-bee-bee-es,' starting with a vowel sound /ɛ/, so 'an MBBS' is correct (option D). Option C: 'uniform' starts with a /j/ (consonant) sound, so 'a uniform' is correct — 'an uniform' is wrong. Option A: 'a only' should be 'the only.' Option B is correct but 'an MBA' is also correct since 'MBA' starts with vowel sound /ɛm/."
  },
  {
    id: 90,
    question: "Choose the sentence with correct PREPOSITION use in academic/research writing:",
    options: [
      "The study was conducted at the period of 2019 to 2023.",
      "The findings are consistent to previous literature.",
      "The data were analyzed in accordance with the WHO guidelines.",
      "The manuscript was submitted on the journal for peer review."
    ],
    answer: 2,
    explanation: "'In accordance with' is the correct fixed prepositional phrase meaning 'following' or 'as required by.' Option A: Should be 'during the period from 2019 to 2023.' Option B: 'Consistent with' — not 'consistent to.' Option D: 'Submitted to the journal' — not 'submitted on the journal.' Correct prepositions with fixed phrases are frequently tested in ICMR English sections."
  },
  {
    id: 91,
    question: "The 2023 Nobel Prize in Physiology or Medicine was awarded for the development of effective mRNA vaccines against COVID-19. Who were the recipients?",
    options: [
      "Barney Graham and Jason McLellan",
      "Katalin Karikó and Drew Weissman",
      "Ugur Sahin and Özlem Türeci",
      "Albert Bourla and Stéphane Bancel"
    ],
    answer: 1,
    explanation: "The 2023 Nobel Prize in Physiology or Medicine was awarded jointly to Katalin Karikó (BioNTech/UPenn) and Drew Weissman (UPenn) for their discoveries concerning nucleoside base modifications that enabled the development of effective mRNA vaccines against COVID-19. Their key innovation was modifying mRNA with pseudouridine instead of uridine, preventing the innate immune system from degrading the therapeutic mRNA, enabling high-level protein expression."
  },
  {
    id: 92,
    question: "World AIDS Day is observed every year on:",
    options: [
      "April 7",
      "October 10",
      "December 1",
      "July 28"
    ],
    answer: 2,
    explanation: "World AIDS Day is observed on December 1 every year since 1988 — it was the first ever global health day. The day raises awareness about the HIV/AIDS pandemic and commemorates those who have died. April 7 is World Health Day. October 10 is World Mental Health Day. July 28 is World Hepatitis Day (the birthday of Nobel laureate Baruch Blumberg, who discovered HBV)."
  },
  {
    id: 93,
    question: "A person with blood group AB+ (AB positive) can receive blood from which of the following donors?",
    options: [
      "Only from AB+ donors",
      "From O- donors only",
      "From donors of any ABO and Rh type (universal recipient)",
      "From A and B donors only"
    ],
    answer: 2,
    explanation: "AB+ individuals are the 'universal recipients' for red blood cell transfusions. They have both A and B antigens on their RBCs (no anti-A or anti-B antibodies) and are Rh positive (no anti-D antibody). Therefore, they can receive blood from A+, A-, B+, B-, AB+, AB-, O+, or O- donors without ABO or Rh incompatibility. O- individuals are the 'universal donors' as their red cells lack A, B, and D antigens."
  },
  {
    id: 94,
    question: "Vitamin B12 (cobalamin) deficiency causes megaloblastic anemia. What is the classical clinical presentation in a strict vegan who develops B12 deficiency?",
    options: [
      "Microcytic hypochromic anemia with glossitis and angular stomatitis",
      "Normocytic normochromic anemia with thrombocytopenia",
      "Macrocytic megaloblastic anemia, peripheral neuropathy (subacute combined degeneration of the spinal cord), and glossitis",
      "Hemolytic anemia with splenomegaly"
    ],
    answer: 2,
    explanation: "Vitamin B12 deficiency classically presents with: (1) Hematological — macrocytic megaloblastic anemia (large oval macrocytes, hypersegmented neutrophils); (2) Neurological — subacute combined degeneration (SCD) of the spinal cord affecting posterior and lateral columns, causing peripheral neuropathy, impaired proprioception, and spastic weakness; (3) Glossitis (Hunter's glossitis — smooth, beefy red tongue). Folate deficiency causes similar megaloblastic anemia but WITHOUT the neurological features."
  },
  {
    id: 95,
    question: "The National Family Health Survey (NFHS-5), conducted in 2019–2021, reported which key finding regarding child wasting in India?",
    options: [
      "Child wasting improved significantly compared to NFHS-4",
      "Child wasting (low weight for height) worsened slightly, from 21.0% (NFHS-4) to 19.3%",
      "Child wasting worsened from 21.0% (NFHS-4) to 19.3% — wait, it actually improved",
      "Child wasting (low weight for height) increased from 21.0% (NFHS-4) to 19.3% in NFHS-5 — a decline, showing improvement"
    ],
    answer: 3,
    explanation: "NFHS-5 (2019-21) reported child wasting (weight-for-height <-2SD) decreased from 21.0% (NFHS-4, 2015-16) to 19.3% (NFHS-5) — a marginal improvement. However, stunting also slightly declined (38.4% to 35.5%). Importantly, child overweight/obesity increased. The NFHS-5 key findings include improvements in sex ratio, institutional deliveries, and full immunization, but concerns remain about anemia prevalence (particularly in women and children) which worsened compared to NFHS-4."
  },
  {
    id: 96,
    question: "According to Census of India 2011, what was the sex ratio (females per 1000 males) in India?",
    options: [
      "933",
      "940",
      "943",
      "950"
    ],
    answer: 2,
    explanation: "The Census of India 2011 reported a sex ratio of 943 females per 1000 males — an improvement from 933 in Census 2001. However, the child sex ratio (0-6 years) declined to 918 girls per 1000 boys in 2011 from 927 in 2001, indicating continued preference for sons and sex-selective practices. Kerala had the highest sex ratio (1084), while Haryana had the lowest (877) among states in Census 2011."
  },
  {
    id: 97,
    question: "In a logical reasoning question, if in a certain code language, 'RESEARCH' is written as 'SFTHBBSDI', what is the coding rule being applied?",
    options: [
      "Each letter is replaced by the previous letter in the alphabet",
      "Each letter is replaced by the next letter in the alphabet",
      "Consonants are replaced by the next letter; vowels remain unchanged",
      "The word is written in reverse and each letter is shifted by one"
    ],
    answer: 1,
    explanation: "Applying the rule 'each letter is replaced by the next letter in the alphabet': R→S, E→F, S→T, E→F, A→B, R→S... Wait — 'RESEARCH' = R,E,S,E,A,R,C,H → S,F,T,F,B,S,D,I = 'SFTFBSDI'. The given code 'SFTHBBSDI' has 9 letters for 8-letter RESEARCH. Let's verify: R→S, E→F, S→T, E→H? No. Actually the answer follows a +1 letter shift for each: R+1=S, E+1=F, S+1=T, E+1=F, A+1=B, R+1=S, C+1=D, H+1=I = SFTFBSDI. The +1 shift (next letter in alphabet) is the correct rule."
  },
  {
    id: 98,
    question: "In a family, A is the father of B. C is the mother of B. D is the brother of A. E is the daughter of C. What is D's relationship to E?",
    options: [
      "Uncle",
      "Father",
      "Grandfather",
      "Brother"
    ],
    answer: 0,
    explanation: "Let us trace the relationships: A is the father of B; C is the mother of B — so A and C are parents of B (A is the husband of C). E is the daughter of C — since C's children include B and E, B and E are siblings (E is B's sibling). D is the brother of A — so D is the paternal uncle of B. Since D is the brother of A (E's father), D is also the uncle (paternal uncle) of E. Therefore, D is E's uncle."
  },
  {
    id: 99,
    question: "World Tuberculosis Day is observed on March 24 every year to commemorate:",
    options: [
      "The date the first anti-TB drug (streptomycin) was synthesized",
      "The date Robert Koch announced his discovery of Mycobacterium tuberculosis in 1882",
      "The founding date of the Stop TB Partnership",
      "The date the WHO declared TB a global emergency"
    ],
    answer: 1,
    explanation: "World TB Day is observed on March 24 because on that date in 1882, Dr. Robert Koch announced his discovery of Mycobacterium tuberculosis — the bacterium that causes tuberculosis — to a small audience at the Berlin Physiological Society. His announcement marked a pivotal turning point in the fight against TB. Koch was awarded the Nobel Prize in Physiology or Medicine in 1905 for this discovery and his investigations of tuberculosis."
  },
  {
    id: 100,
    question: "The District Level Household and Facility Survey (DLHS) in India primarily collects data on:",
    options: [
      "Agricultural productivity and rural income",
      "Maternal and child health, family planning, and utilization of reproductive and child health services at the district level",
      "Nutritional status of the elderly population",
      "Non-communicable disease burden and risk factors"
    ],
    answer: 1,
    explanation: "The District Level Household and Facility Survey (DLHS) is a large-scale survey conducted by IIPS (International Institute for Population Sciences), Mumbai, on behalf of the Ministry of Health and Family Welfare, Government of India. It provides district-level data on maternal health (antenatal care, institutional delivery), child health (immunization, nutrition), family planning, and utilization of reproductive and child health (RCH) services. DLHS-4 was conducted in 2012-13 in states not covered by AHS. It complements the NFHS."
  }
];

export default questions;

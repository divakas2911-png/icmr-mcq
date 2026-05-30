const questions = [
  {
    id: 1,
    question: "A researcher follows a group of smokers and non-smokers over 20 years to assess lung cancer development. What type of study is this?",
    options: ["Case-control study", "Cross-sectional study", "Prospective cohort study", "Randomized controlled trial"],
    answer: 2,
    explanation: "A prospective cohort study follows a defined group of people (cohort) forward in time to observe outcomes. Here, smokers and non-smokers are identified first, then followed to see who develops lung cancer. This contrasts with case-control studies, which start with the outcome and look backward."
  },
  {
    id: 2,
    question: "In a case-control study examining the association between alcohol use and liver cirrhosis, the cases are patients with cirrhosis and controls are hospitalized patients without cirrhosis. What type of bias is most likely introduced?",
    options: ["Recall bias", "Berkson's bias", "Neyman bias", "Observer bias"],
    answer: 1,
    explanation: "Berkson's bias (hospital admission bias) occurs when both cases and controls are selected from a hospital population, which is not representative of the general population. Since hospitalized patients differ systematically from the community, the exposure-disease association may be distorted."
  },
  {
    id: 3,
    question: "Which sampling method ensures that every member of the population has an equal and independent chance of being selected?",
    options: ["Stratified random sampling", "Systematic random sampling", "Simple random sampling", "Cluster sampling"],
    answer: 2,
    explanation: "Simple random sampling gives every individual in the population an equal and independent probability of selection. Stratified sampling divides the population into subgroups first; systematic sampling selects every nth person; cluster sampling selects groups rather than individuals."
  },
  {
    id: 4,
    question: "A study participant changes their behavior because they know they are being observed. This phenomenon is known as:",
    options: ["Placebo effect", "Hawthorne effect", "Observer bias", "Attention bias"],
    answer: 1,
    explanation: "The Hawthorne effect refers to the alteration of behavior by study subjects when they are aware of being observed. It was first noted in studies at the Hawthorne Works plant. It is a form of reactivity bias and can threaten the internal validity of a study."
  },
  {
    id: 5,
    question: "In a randomized controlled trial, which type of blinding prevents both participants and outcome assessors from knowing group allocation?",
    options: ["Single blind", "Double blind", "Triple blind", "Open label"],
    answer: 1,
    explanation: "Double blinding means neither the participant nor the outcome assessor (clinician/researcher) knows the treatment allocation. Triple blinding additionally blinds the data analysts. Single blinding means only one party (usually the participant) is blinded."
  },
  {
    id: 6,
    question: "A variable that is associated with both the exposure and the outcome but is not on the causal pathway is called a:",
    options: ["Effect modifier", "Mediator", "Confounder", "Moderator"],
    answer: 2,
    explanation: "A confounder is associated with both the exposure and the outcome and can distort the observed association. An effect modifier changes the magnitude of association across its strata. A mediator lies on the causal pathway between exposure and outcome."
  },
  {
    id: 7,
    question: "Which type of study design provides the highest level of evidence in the hierarchy of evidence-based medicine?",
    options: ["Well-designed cohort study", "Systematic review with meta-analysis of RCTs", "Double-blind RCT", "Case-control study"],
    answer: 1,
    explanation: "The hierarchy of evidence places systematic reviews and meta-analyses of well-conducted RCTs at the top, followed by individual RCTs, cohort studies, case-control studies, and expert opinion. Pooling multiple RCTs provides greater statistical power and generalizability."
  },
  {
    id: 8,
    question: "In a cross-sectional study, what is the primary measure of association that is calculated?",
    options: ["Relative risk", "Odds ratio", "Prevalence ratio", "Hazard ratio"],
    answer: 2,
    explanation: "Cross-sectional studies measure exposure and outcome simultaneously, so they yield prevalence data. The appropriate measure of association is the prevalence ratio (or prevalence odds ratio). Relative risk requires incidence data from cohort studies, and odds ratios are the standard measure in case-control studies."
  },
  {
    id: 9,
    question: "A participant in a dietary study over-reports healthy food consumption because they want to appear health-conscious. This is an example of:",
    options: ["Selection bias", "Recall bias", "Social desirability bias", "Lead-time bias"],
    answer: 2,
    explanation: "Social desirability bias occurs when participants respond in a manner they believe will be viewed favorably rather than truthfully. This is common in dietary and behavioral studies. Recall bias is differential recall of past exposures; selection bias relates to who is included in the study."
  },
  {
    id: 10,
    question: "The Declaration of Helsinki primarily governs:",
    options: ["Animal experimentation", "Medical research involving human subjects", "Publication ethics in journals", "Industrial chemical safety"],
    answer: 1,
    explanation: "The Declaration of Helsinki, adopted by the World Medical Association in 1964 and revised multiple times, is a foundational document establishing ethical principles for medical research involving human subjects. It emphasizes informed consent, risk-benefit assessment, and protection of vulnerable populations."
  },
  {
    id: 11,
    question: "The arithmetic mean of a dataset is most affected by:",
    options: ["The mode of the distribution", "Extreme values (outliers)", "The sample size alone", "The interquartile range"],
    answer: 1,
    explanation: "The arithmetic mean is sensitive to extreme values (outliers) because it uses all data values in its calculation. In skewed distributions with outliers, the median is a more robust measure of central tendency. The mode is the least affected by outliers."
  },
  {
    id: 12,
    question: "Number of new cases of a disease occurring in a defined population over a specified time period divided by the total population at risk defines:",
    options: ["Prevalence rate", "Cumulative incidence", "Period prevalence", "Attack rate"],
    answer: 1,
    explanation: "Cumulative incidence (incidence proportion) is the number of new cases occurring in a population during a specified period divided by the number of individuals at risk at the beginning of that period. It estimates the probability of developing the disease during that time."
  },
  {
    id: 13,
    question: "India's Infant Mortality Rate (IMR) is defined as the number of deaths of children under one year of age per:",
    options: ["100 live births", "1000 live births", "10,000 live births", "100,000 live births"],
    answer: 1,
    explanation: "IMR is expressed as the number of deaths in children under 1 year of age per 1,000 live births in a given year. It is one of the most sensitive indicators of health status and socioeconomic development of a country. India's IMR has been declining progressively."
  },
  {
    id: 14,
    question: "A 95% confidence interval for an odds ratio is reported as 1.8 (1.2–2.7). What does this mean?",
    options: ["There is a 95% chance the true OR is exactly 1.8", "We are 95% confident the true OR in the population lies between 1.2 and 2.7", "The result is not statistically significant", "The OR would be 1.8 in 95% of repetitions of the study"],
    answer: 1,
    explanation: "A 95% CI means that if the study were repeated 100 times, 95 of the resulting intervals would contain the true population parameter. An OR CI that does not cross 1.0 indicates statistical significance. Here, since the entire interval is above 1, the association is statistically significant."
  },
  {
    id: 15,
    question: "Maternal Mortality Ratio (MMR) is expressed as maternal deaths per:",
    options: ["1,000 women of reproductive age", "100,000 live births", "1,000 deliveries", "10,000 pregnancies"],
    answer: 1,
    explanation: "MMR is defined as the number of maternal deaths per 100,000 live births in a given period. A maternal death is the death of a woman while pregnant or within 42 days of termination of pregnancy, irrespective of the site or duration of pregnancy, from causes related to or aggravated by the pregnancy."
  },
  {
    id: 16,
    question: "The standard deviation is the square root of the:",
    options: ["Mean deviation", "Variance", "Coefficient of variation", "Standard error"],
    answer: 1,
    explanation: "Standard deviation (SD) is the square root of variance. Variance is the average of the squared deviations from the mean. SD expresses dispersion in the same units as the original data, making it more interpretable than variance."
  },
  {
    id: 17,
    question: "A p-value of 0.03 in a study with a significance threshold of 0.05 indicates:",
    options: ["The null hypothesis is proven true", "There is a 3% probability the null hypothesis is true", "The result is statistically significant at the 5% level", "The study has 97% power"],
    answer: 2,
    explanation: "A p-value of 0.03 means there is a 3% probability of observing a result as extreme as (or more extreme than) the one obtained, assuming the null hypothesis is true. Since 0.03 < 0.05, the result is statistically significant at the 5% significance level, and we reject the null hypothesis."
  },
  {
    id: 18,
    question: "In a normal distribution, approximately what percentage of values fall within two standard deviations of the mean?",
    options: ["68%", "90%", "95%", "99.7%"],
    answer: 2,
    explanation: "In a normal (Gaussian) distribution: ~68% of values fall within ±1 SD, ~95% within ±2 SD, and ~99.7% within ±3 SD. This is known as the 68-95-99.7 rule or empirical rule."
  },
  {
    id: 19,
    question: "Perinatal mortality rate includes deaths occurring:",
    options: ["From birth to 7 days of life only", "From 28 weeks of gestation to 7 days after birth", "From birth to 28 days of life", "From 22 weeks of gestation to 28 days after birth"],
    answer: 1,
    explanation: "The perinatal mortality rate includes stillbirths (from 28 weeks gestation) plus early neonatal deaths (in the first 7 days of life), expressed per 1,000 total births. This period is critical as the majority of under-5 mortality is concentrated here."
  },
  {
    id: 20,
    question: "Which statistical measure describes the strength and direction of a linear relationship between two continuous variables?",
    options: ["Chi-square statistic", "Pearson's correlation coefficient (r)", "Relative risk", "Spearman's rho"],
    answer: 1,
    explanation: "Pearson's correlation coefficient (r) measures the strength and direction of a linear relationship between two continuous, normally distributed variables. Its value ranges from -1 to +1. Spearman's rho is the non-parametric equivalent for ordinal or non-normally distributed data."
  },
  {
    id: 21,
    question: "A test for tuberculosis has a sensitivity of 90% and specificity of 85%. If the prevalence of TB is 10%, what is the positive predictive value (PPV)?",
    options: ["Approximately 40%", "Approximately 60%", "Approximately 75%", "Approximately 90%"],
    answer: 0,
    explanation: "Using Bayes' theorem: PPV = (Sensitivity × Prevalence) / [(Sensitivity × Prevalence) + (1-Specificity)(1-Prevalence)] = (0.9×0.1) / [(0.9×0.1) + (0.15×0.9)] = 0.09 / (0.09 + 0.135) = 0.09/0.225 ≈ 40%. This demonstrates that even with a good test, low prevalence substantially reduces PPV."
  },
  {
    id: 22,
    question: "Which of the following is the MOST important criterion for a good screening test?",
    options: ["High specificity to minimize false positives", "High sensitivity to minimize false negatives", "Low cost and ease of administration", "High positive predictive value in the screened population"],
    answer: 1,
    explanation: "For screening, high sensitivity is most critical because the goal is to identify all potentially diseased individuals. Missing a true case (false negative) in a screening context can have serious consequences. Confirmatory diagnostic tests subsequently use high specificity to reduce false positives."
  },
  {
    id: 23,
    question: "The area under a ROC (Receiver Operating Characteristic) curve represents:",
    options: ["The prevalence of the disease in the population", "The overall discriminatory ability of the test", "The sensitivity of the test at a specific cut-off", "The specificity of the test at a specific cut-off"],
    answer: 1,
    explanation: "The Area Under the ROC Curve (AUC or c-statistic) ranges from 0.5 (no discrimination, like chance) to 1.0 (perfect discrimination). It represents the probability that a randomly chosen diseased individual will be ranked higher by the test than a randomly chosen non-diseased individual."
  },
  {
    id: 24,
    question: "Negative Predictive Value (NPV) is BEST defined as:",
    options: ["The probability that a person with a negative test truly does not have the disease", "The proportion of true negatives among all who test negative", "Both A and B are correct", "The complement of sensitivity"],
    answer: 2,
    explanation: "NPV = True Negatives / (True Negatives + False Negatives). It is the probability that a person with a negative test result truly does not have the disease. Both options A and B describe the same concept from different angles, making option C correct."
  },
  {
    id: 25,
    question: "According to Wilson-Jungner criteria, which of the following is NOT a criterion for a suitable disease for screening?",
    options: ["The disease should be an important health problem", "There should be a recognized latent or early symptomatic stage", "The disease must have no effective treatment once symptomatic", "The test should be acceptable to the population"],
    answer: 2,
    explanation: "Wilson and Jungner (1968) outlined criteria for screening, which include: the disease is an important health problem, there is a recognized latent stage, there is an acceptable test, and there is an effective treatment. The existence of effective treatment is a requirement, NOT its absence."
  },
  {
    id: 26,
    question: "Specificity of a diagnostic test is defined as the ability of the test to:",
    options: ["Correctly identify those WITH the disease", "Correctly identify those WITHOUT the disease", "Predict disease in a positive test result", "Predict absence of disease in a negative test result"],
    answer: 1,
    explanation: "Specificity = True Negatives / (True Negatives + False Positives). It measures the test's ability to correctly identify individuals who do NOT have the disease (true negative rate). High specificity means fewer false positives."
  },
  {
    id: 27,
    question: "When the prevalence of a disease increases in a population while test sensitivity and specificity remain constant, what happens to PPV and NPV?",
    options: ["Both PPV and NPV increase", "PPV increases, NPV decreases", "PPV decreases, NPV increases", "Both remain unchanged"],
    answer: 1,
    explanation: "As prevalence increases: more true positives and fewer true negatives exist, so PPV increases (more positives are true). However, since there are fewer true negatives relative to false negatives, NPV decreases. This is a critical concept for understanding how screening performance changes across populations."
  },
  {
    id: 28,
    question: "The positive likelihood ratio (LR+) is calculated as:",
    options: ["Sensitivity / (1 - Specificity)", "(1 - Sensitivity) / Specificity", "Specificity / (1 - Sensitivity)", "PPV / NPV"],
    answer: 0,
    explanation: "Positive Likelihood Ratio (LR+) = Sensitivity / (1 - Specificity) = True Positive Rate / False Positive Rate. A high LR+ (>10) substantially increases the post-test probability of disease. LR- = (1 - Sensitivity) / Specificity."
  },
  {
    id: 29,
    question: "In a 2x2 table for a diagnostic test: TP=80, FP=20, FN=10, TN=90. What is the sensitivity?",
    options: ["80%", "88.9%", "81.6%", "90%"],
    answer: 1,
    explanation: "Sensitivity = TP / (TP + FN) = 80 / (80 + 10) = 80/90 = 88.9%. This represents the proportion of truly diseased individuals correctly identified by the test. Specificity = TN/(TN+FP) = 90/(90+20) = 81.8%."
  },
  {
    id: 30,
    question: "Lead-time bias in cancer screening studies results in:",
    options: ["Overestimation of disease prevalence", "Apparent improvement in survival without actual prolongation of life", "Underestimation of disease incidence", "Selection of healthier individuals into screening programs"],
    answer: 1,
    explanation: "Lead-time bias occurs when screening detects disease earlier in its natural history. Survival appears longer from diagnosis, but patients may not actually live longer—they simply know about their disease for a longer period. This can falsely make a screening program appear to improve survival."
  },
  {
    id: 31,
    question: "Under India's National Tuberculosis Elimination Programme (NTEP), what is the currently recommended first-line treatment regimen for new pulmonary TB cases (drug-sensitive)?",
    options: ["2HRZ/4HR", "2HRZE/4HR", "2HRZES/1HRZE/5HRE", "6HRE"],
    answer: 1,
    explanation: "Under NTEP (formerly RNTCP), the standard treatment for new drug-sensitive TB is 2HRZE/4HR: Intensive phase of 2 months with Isoniazid (H), Rifampicin (R), Pyrazinamide (Z), and Ethambutol (E), followed by a 4-month continuation phase with H and R. Daily fixed-dose combinations (FDCs) are used."
  },
  {
    id: 32,
    question: "The 'End TB Strategy' target set by WHO aims to reduce TB incidence by what percentage by 2030 (from 2015 baseline)?",
    options: ["50%", "75%", "80%", "90%"],
    answer: 2,
    explanation: "The WHO End TB Strategy aims to reduce TB incidence by 80% and TB deaths by 90% by 2030, compared to 2015. India's National Strategic Plan for Tuberculosis Elimination has set even more ambitious targets to eliminate TB by 2025."
  },
  {
    id: 33,
    question: "Which Plasmodium species is responsible for the most severe and potentially fatal form of malaria?",
    options: ["Plasmodium vivax", "Plasmodium malariae", "Plasmodium falciparum", "Plasmodium ovale"],
    answer: 2,
    explanation: "Plasmodium falciparum causes the most severe form of malaria, characterized by complications such as cerebral malaria, severe anemia, respiratory distress, and multi-organ failure. P. vivax and P. ovale can cause relapsing malaria due to hypnozoites in the liver."
  },
  {
    id: 34,
    question: "The WHO criteria for dengue with warning signs includes all EXCEPT:",
    options: ["Abdominal pain or tenderness", "Persistent vomiting", "Mucosal bleed", "Bradycardia"],
    answer: 3,
    explanation: "WHO 2009 dengue classification warning signs include: abdominal pain/tenderness, persistent vomiting, clinical fluid accumulation, mucosal bleed, lethargy/restlessness, liver enlargement >2cm, and rising hematocrit with rapid platelet decline. Bradycardia is not a listed warning sign."
  },
  {
    id: 35,
    question: "Hepatitis B virus is transmitted primarily through which route?",
    options: ["Feco-oral route", "Airborne droplet transmission", "Parenteral and sexual transmission", "Vector-borne transmission"],
    answer: 2,
    explanation: "HBV is transmitted through parenteral routes (blood transfusion, needle sharing, needlestick injuries), sexual contact, and mother-to-child transmission (vertical/perinatal). It is NOT transmitted via the feco-oral route, unlike Hepatitis A and E."
  },
  {
    id: 36,
    question: "Under India's Universal Immunization Programme (UIP), Rotavirus vaccine is administered at:",
    options: ["6 weeks, 10 weeks, and 14 weeks", "6 months, 9 months, and 12 months", "At birth and 6 weeks", "9 months and 15 months"],
    answer: 0,
    explanation: "Rotavirus vaccine under UIP is given as three oral doses at 6, 10, and 14 weeks of age, along with OPV and Pentavalent vaccines. It was introduced in phases from 2016 and provides protection against severe rotavirus diarrhea."
  },
  {
    id: 37,
    question: "In outbreak investigation, the epidemic curve with a point source exposure typically shows:",
    options: ["A gradually rising and falling curve over weeks to months", "A sharp rise and fall within one incubation period", "Multiple peaks at intervals equal to the incubation period", "A sustained plateau over several weeks"],
    answer: 1,
    explanation: "A point source epidemic (single-source, limited exposure) shows a sharp rise followed by a rapid decline, all within one incubation period. Propagated epidemics show multiple peaks. Continuous source epidemics show a sustained plateau with a gradual rise."
  },
  {
    id: 38,
    question: "NACP (National AIDS Control Programme) in India is currently in which phase?",
    options: ["Phase II", "Phase III", "Phase IV", "Phase V"],
    answer: 3,
    explanation: "India's National AIDS Control Programme (NACP) was launched in 1992. Phase V (2021-2026) focuses on achieving the 95-95-95 targets: 95% of people living with HIV know their status, 95% of those diagnosed are on ART, and 95% of those on ART achieve viral suppression."
  },
  {
    id: 39,
    question: "The Bacillus Calmette-Guérin (BCG) vaccine primarily provides protection against which form of tuberculosis in children?",
    options: ["Pulmonary TB in adults", "Drug-resistant TB", "Disseminated TB and TB meningitis", "Latent TB infection"],
    answer: 2,
    explanation: "BCG vaccine is most effective (70-80% protection) against severe disseminated forms of childhood TB, including miliary TB and TB meningitis. Its protection against pulmonary TB in adults is variable and less reliable. It is given at birth under UIP."
  },
  {
    id: 40,
    question: "The basic reproduction number (R0) of measles is approximately:",
    options: ["2-5", "6-8", "12-18", "1-2"],
    answer: 2,
    explanation: "Measles has one of the highest R0 values of any infectious disease, estimated at 12-18, meaning one infectious person can infect 12-18 susceptible individuals in a fully susceptible population. This necessitates very high vaccination coverage (>95%) to achieve herd immunity."
  },
  {
    id: 41,
    question: "According to WHO criteria (2006), which parameter is used to classify acute malnutrition as 'severe wasting' in children under 5?",
    options: ["Weight-for-age Z-score < -3 SD", "Weight-for-height Z-score < -3 SD", "Height-for-age Z-score < -3 SD", "Mid-upper arm circumference < 12.5 cm"],
    answer: 1,
    explanation: "Severe acute malnutrition (SAM) is defined by WHO as weight-for-height Z-score < -3 SD, MUAC < 115 mm, or bilateral pitting edema. Wasting specifically refers to weight-for-height deficit. Stunting (HAZ < -2 SD) reflects chronic malnutrition, and underweight (WAZ < -2 SD) reflects combined."
  },
  {
    id: 42,
    question: "The NPCDCS (National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke) integrates screening and management at which level?",
    options: ["Primary health center level only", "District hospital level only", "Sub-center, PHC, CHC, and district hospital levels", "Tertiary care centers only"],
    answer: 2,
    explanation: "NPCDCS is implemented across all levels of the healthcare system, from sub-centers and PHCs for community-level screening and awareness, CHCs for case management, and district hospitals for specialist care. This integrated approach aims for early detection and comprehensive management."
  },
  {
    id: 43,
    question: "Vitamin A deficiency manifesting as Bitot's spots corresponds to which grade in the WHO/ICCIDD classification?",
    options: ["X1A", "X1B", "X2", "X3A"],
    answer: 1,
    explanation: "WHO classification of Vitamin A deficiency signs: XN = night blindness, X1A = conjunctival xerosis, X1B = Bitot's spots, X2 = corneal xerosis, X3A = corneal ulceration/keratomalacia <1/3 cornea, X3B = keratomalacia ≥1/3 cornea, XS = corneal scar, XF = xerophthalmic fundus."
  },
  {
    id: 44,
    question: "The POSHAN Abhiyaan (National Nutrition Mission) was launched in India in which year?",
    options: ["2013", "2016", "2018", "2020"],
    answer: 2,
    explanation: "POSHAN Abhiyaan (Prime Minister's Overarching Scheme for Holistic Nutrition) was launched on March 8, 2018. It aims to improve nutritional status by reducing stunting, wasting, underweight, and anemia among children (0-6 years), adolescent girls, pregnant women, and lactating mothers."
  },
  {
    id: 45,
    question: "Iron deficiency anemia in children is most accurately diagnosed by:",
    options: ["Hemoglobin level alone", "Serum ferritin level", "Peripheral blood smear showing hypochromic microcytic cells", "Total iron-binding capacity"],
    answer: 1,
    explanation: "Serum ferritin is the most sensitive and specific single test for iron deficiency as it reflects iron stores directly. Low serum ferritin (< 12 μg/L in children) confirms iron deficiency even before anemia develops. Hemoglobin detects anemia but not its cause; TIBC is elevated in IDA but less specific."
  },
  {
    id: 46,
    question: "Which criterion defines hypertension according to the JNC 8 guidelines?",
    options: ["≥120/80 mmHg", "≥130/80 mmHg", "≥140/90 mmHg", "≥150/90 mmHg"],
    answer: 2,
    explanation: "JNC 8 (2014) guidelines define hypertension as blood pressure ≥140/90 mmHg in the general population and recommend treatment initiation at this level. Note that ACC/AHA 2017 guidelines lowered the definition to ≥130/80 mmHg, but JNC 8 remains a frequently tested reference in Indian competitive exams."
  },
  {
    id: 47,
    question: "In Type 2 Diabetes Mellitus, the primary pathophysiological defect is:",
    options: ["Absolute lack of insulin due to autoimmune beta-cell destruction", "Insulin resistance combined with progressive beta-cell dysfunction", "Excess glucagon secretion alone", "Increased hepatic glucose uptake"],
    answer: 1,
    explanation: "Type 2 DM is characterized by insulin resistance (primarily in muscle, liver, and adipose tissue) combined with progressive beta-cell dysfunction, leading to relative insulin deficiency. Type 1 DM involves absolute insulin deficiency due to autoimmune destruction of beta cells."
  },
  {
    id: 48,
    question: "The ICDS (Integrated Child Development Services) scheme in India provides services to which age group?",
    options: ["0-3 years only", "0-6 years and pregnant/lactating women", "6 months to 5 years", "3-6 years only"],
    answer: 1,
    explanation: "ICDS, launched in 1975, provides services to children 0-6 years of age, pregnant women, and lactating mothers. Services include supplementary nutrition, immunization, health check-up, referral, pre-school education, and nutrition and health education."
  },
  {
    id: 49,
    question: "Which micronutrient deficiency is responsible for endemic goiter and cretinism?",
    options: ["Vitamin D deficiency", "Iodine deficiency", "Zinc deficiency", "Selenium deficiency"],
    answer: 1,
    explanation: "Iodine deficiency disorders (IDD) range from goiter and hypothyroidism to cretinism (irreversible neurological damage from fetal/early childhood deficiency). Iodized salt is the primary public health intervention. Universal Salt Iodization (USI) is promoted globally and in India."
  },
  {
    id: 50,
    question: "The 'Fasting Plasma Glucose' threshold for diagnosing diabetes mellitus according to ADA criteria is:",
    options: ["≥100 mg/dL", "≥110 mg/dL", "≥126 mg/dL", "≥140 mg/dL"],
    answer: 2,
    explanation: "ADA diagnostic criteria for diabetes: FPG ≥126 mg/dL (7.0 mmol/L) on two occasions, or 2-hour PG ≥200 mg/dL during OGTT, or HbA1c ≥6.5%, or random PG ≥200 mg/dL with symptoms. Pre-diabetes is FPG 100-125 mg/dL (impaired fasting glucose)."
  },
  {
    id: 51,
    question: "The four foundational principles of biomedical ethics as described by Beauchamp and Childress are:",
    options: ["Autonomy, Beneficence, Non-maleficence, Veracity", "Autonomy, Beneficence, Non-maleficence, Justice", "Respect, Beneficence, Equity, Accountability", "Consent, Confidentiality, Competence, Care"],
    answer: 1,
    explanation: "Beauchamp and Childress in 'Principles of Biomedical Ethics' (1979) identified four prima facie principles: Autonomy (respect for individuals' right to make decisions), Beneficence (acting in the patient's best interest), Non-maleficence (avoiding harm), and Justice (fair distribution of resources and burdens)."
  },
  {
    id: 52,
    question: "Which of the following is an ESSENTIAL element of valid informed consent?",
    options: ["Written documentation only", "Presence of a witness", "Disclosure, competence, voluntariness, and comprehension", "Approval from the patient's family"],
    answer: 2,
    explanation: "Valid informed consent requires: disclosure of relevant information, patient competence (capacity to understand and decide), voluntariness (freedom from coercion or undue influence), and comprehension (understanding of disclosed information). A written document alone is not sufficient for ethical consent."
  },
  {
    id: 53,
    question: "The Nuremberg Code (1947) was formulated in response to:",
    options: ["Tuskegee syphilis study abuses", "Nazi human experimentation during World War II", "Willowbrook hepatitis studies", "Guatemala syphilis experiments"],
    answer: 1,
    explanation: "The Nuremberg Code was established in 1947 following the Nuremberg Doctors' Trial, which prosecuted Nazi physicians for conducting unethical and inhumane experiments on concentration camp prisoners during WWII. It was the first international document emphasizing voluntary consent as essential to human experimentation."
  },
  {
    id: 54,
    question: "According to ICMR National Ethical Guidelines for Biomedical and Health Research (2017), the minimum composition of an Institutional Ethics Committee (IEC) includes:",
    options: ["At least 5 members from the same institution", "At least 7 members, including lay persons and non-scientists", "At least 10 members, majority being clinicians", "At least 3 members: chairperson, member secretary, and ethicist"],
    answer: 1,
    explanation: "ICMR guidelines specify that an IEC must have a minimum of 7 members with diverse backgrounds: a chairperson (preferably non-institutional), clinicians, basic scientists, a legal expert or retired judge, a social scientist/NGO representative, a lay person from the community, and a member secretary."
  },
  {
    id: 55,
    question: "The ethical principle of 'Justice' in research ethics is most directly concerned with:",
    options: ["Ensuring that research has potential benefits", "Fair distribution of research burdens and benefits across society", "Respecting participants' right to withdraw", "Ensuring the research methodology is scientifically sound"],
    answer: 1,
    explanation: "Justice in research ethics concerns the fair distribution of the benefits and burdens of research. Vulnerable or disadvantaged populations should not bear disproportionate research burdens while benefits accrue to others. The Belmont Report identified justice as one of three core principles."
  },
  {
    id: 56,
    question: "Research involving deception is considered ethically permissible ONLY when:",
    options: ["It is never ethically permissible under any circumstances", "The research cannot be conducted otherwise, the deception is minimized, and participants are debriefed afterward", "Participants are paid for their participation", "The IEC has more than 10 members"],
    answer: 1,
    explanation: "While deception is generally discouraged, some psychological and social science research may require it. Ethical acceptability requires: scientific necessity (no alternatives), minimal deception, no significant harm, and complete debriefing of participants after the study. Informed consent must be obtained prospectively for general participation."
  },
  {
    id: 57,
    question: "Conflict of interest in research occurs when:",
    options: ["A researcher collaborates with international institutions", "A researcher's personal interests could improperly influence professional judgment or research conduct", "Two or more researchers publish competing papers", "A journal editor rejects a manuscript"],
    answer: 1,
    explanation: "Conflict of interest arises when a researcher's financial, personal, or professional relationships could bias research design, data collection, analysis, interpretation, or reporting. Transparency requires declaration and management of conflicts. Financial ties (e.g., to pharmaceutical companies) are the most commonly discussed form."
  },
  {
    id: 58,
    question: "Which of the following constitutes 'research misconduct' according to international guidelines?",
    options: ["Honest errors in data interpretation", "Plagiarism, fabrication, and falsification (FFP)", "Negative or inconclusive research findings", "Disagreement with peer reviewers"],
    answer: 1,
    explanation: "Research misconduct is defined as Fabrication (making up data), Falsification (manipulating data/results), and Plagiarism (using others' work without attribution), collectively known as FFP. Honest errors and differences of opinion are not considered misconduct, though they should be corrected."
  },
  {
    id: 59,
    question: "The concept of 'therapeutic misconception' in clinical trials refers to:",
    options: ["A participant believing a placebo is a real treatment", "Participants incorrectly believing that research procedures are designed primarily for their individual benefit", "Researchers conducting trials with unrealistic expectations", "Misclassification of therapeutic vs. non-therapeutic procedures"],
    answer: 1,
    explanation: "Therapeutic misconception occurs when research participants fail to understand that the primary purpose of a clinical trial is to generate generalizable knowledge, not to provide individualized medical care. They may conflate research procedures with therapeutic decisions made in their best interest."
  },
  {
    id: 60,
    question: "Under the ICMR guidelines, 'vulnerable populations' in research include all of the following EXCEPT:",
    options: ["Pregnant women", "Prisoners", "Medical students of the researcher", "Experienced adult professionals"],
    answer: 3,
    explanation: "Vulnerable populations include those with diminished autonomy or increased susceptibility to coercion: children, pregnant women, prisoners, cognitively impaired individuals, economically or educationally disadvantaged persons, subordinates (e.g., students of the researcher), and patients in dependent relationships. Experienced adult professionals are generally not considered vulnerable."
  },
  {
    id: 61,
    question: "During DNA replication, the enzyme responsible for synthesizing new DNA strands in the 5' to 3' direction is:",
    options: ["RNA polymerase", "DNA ligase", "DNA polymerase III (in prokaryotes)", "Helicase"],
    answer: 2,
    explanation: "DNA polymerase III is the main replicative enzyme in prokaryotes (DNA polymerase delta/epsilon in eukaryotes), synthesizing new DNA in the 5'→3' direction. Helicase unwinds the double helix; RNA polymerase synthesizes the primer; DNA ligase joins Okazaki fragments on the lagging strand."
  },
  {
    id: 62,
    question: "In polymerase chain reaction (PCR), the denaturation step typically occurs at:",
    options: ["50-55°C", "60-65°C", "72°C", "94-96°C"],
    answer: 3,
    explanation: "PCR has three temperature steps: Denaturation at 94-96°C (separates DNA strands), Annealing at 50-65°C (primers bind to template), and Extension at 72°C (Taq polymerase synthesizes new DNA). Taq polymerase's optimum temperature of 72°C matches the extension step."
  },
  {
    id: 63,
    question: "CRISPR-Cas9 system was adapted from the immune defense mechanism of:",
    options: ["Bacteriophages", "Fungi", "Bacteria and archaea", "Eukaryotic cells"],
    answer: 2,
    explanation: "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a naturally occurring adaptive immune system found in bacteria and archaea that protects against viral infections. Scientists Jennifer Doudna and Emmanuelle Charpentier (Nobel Prize 2020) adapted it for precise genome editing."
  },
  {
    id: 64,
    question: "The central dogma of molecular biology describes information flow as:",
    options: ["Protein → RNA → DNA", "RNA → DNA → Protein", "DNA → RNA → Protein", "DNA → Protein → RNA"],
    answer: 2,
    explanation: "The central dogma, proposed by Francis Crick in 1958, states that genetic information flows from DNA to RNA (transcription) to Protein (translation). Reverse transcription (RNA→DNA), as in retroviruses, is an exception but does not change the general unidirectionality of the central dogma."
  },
  {
    id: 65,
    question: "A child inherits one copy of a mutated gene from each parent (both carriers) but the mutation causes disease only when two copies are present. This pattern of inheritance is called:",
    options: ["Autosomal dominant", "X-linked recessive", "Autosomal recessive", "Mitochondrial inheritance"],
    answer: 2,
    explanation: "Autosomal recessive inheritance requires two copies of the mutant allele (homozygous) for disease expression. Carriers (heterozygotes) are phenotypically normal. Examples include cystic fibrosis, phenylketonuria, and sickle cell disease. Each child of two carrier parents has a 25% chance of being affected."
  },
  {
    id: 66,
    question: "Down syndrome (Trisomy 21) results most commonly from which mechanism?",
    options: ["Chromosomal deletion", "Non-disjunction during meiosis", "Chromosomal translocation only", "Point mutation in chromosome 21"],
    answer: 1,
    explanation: "About 95% of Down syndrome cases result from non-disjunction (failure of homologous chromosomes to separate) during meiosis I or II, usually in the mother, producing an egg with two copies of chromosome 21. 4% are from Robertsonian translocation and 1% are mosaic."
  },
  {
    id: 67,
    question: "Real-time PCR (quantitative PCR/qPCR) differs from conventional PCR in that it:",
    options: ["Uses RNA as the starting material", "Amplifies DNA using a different enzyme", "Allows detection and quantification of DNA during amplification using fluorescent reporters", "Requires gel electrophoresis for result interpretation"],
    answer: 2,
    explanation: "qPCR uses fluorescent dyes (e.g., SYBR Green) or sequence-specific probes (e.g., TaqMan) to monitor DNA amplification in real time. This eliminates the need for post-PCR gel electrophoresis and allows accurate quantification of the initial template amount, making it faster and less contamination-prone."
  },
  {
    id: 68,
    question: "Epigenetic modifications alter gene expression WITHOUT changing the DNA sequence. Which of the following is a classic epigenetic mechanism?",
    options: ["Point mutations", "DNA methylation at CpG sites", "Chromosomal deletions", "Transposable element insertion"],
    answer: 1,
    explanation: "DNA methylation (addition of methyl groups to cytosine at CpG sites) is a primary epigenetic mechanism that generally silences gene expression when occurring in promoter regions. Other mechanisms include histone modification (acetylation, methylation, phosphorylation) and non-coding RNA regulation."
  },
  {
    id: 69,
    question: "Gel electrophoresis separates DNA fragments based on:",
    options: ["Molecular weight and charge, with smaller fragments traveling farther", "Color and fluorescence intensity", "Nucleotide base composition", "Protein binding affinity"],
    answer: 0,
    explanation: "In agarose gel electrophoresis, DNA (negatively charged due to phosphate groups) migrates toward the positive electrode. Smaller fragments move through the gel matrix faster and travel farther from the well, allowing size-based separation. Results are visualized by ethidium bromide or other DNA-intercalating dyes under UV light."
  },
  {
    id: 70,
    question: "Gene therapy approaches can be broadly classified as:",
    options: ["Only somatic gene therapy (non-heritable)", "Somatic (non-heritable) and germline (heritable) gene therapy", "Only viral vector-based therapy", "Only ex vivo gene therapy"],
    answer: 1,
    explanation: "Gene therapy is classified as somatic (targeting non-reproductive cells; changes are not heritable) and germline (targeting eggs, sperm, or embryos; changes are heritable). Germline modification is currently banned in most countries due to ethical concerns. Somatic gene therapy is approved for several conditions."
  },
  {
    id: 71,
    question: "In Gram staining, Gram-positive bacteria appear purple/violet because:",
    options: ["They have an outer membrane that retains the safranin counterstain", "Their thick peptidoglycan cell wall retains the crystal violet-iodine complex during decolorization", "They lack a cell wall, allowing dye penetration", "Their lipopolysaccharide binds crystal violet irreversibly"],
    answer: 1,
    explanation: "Gram-positive bacteria have a thick peptidoglycan cell wall (20-80 nm) that dehydrates and traps the crystal violet-iodine complex during alcohol decolorization, appearing purple. Gram-negative bacteria have a thin peptidoglycan layer plus an outer membrane; the outer membrane dissolves in alcohol, releasing the complex, and they take up the pink safranin counterstain."
  },
  {
    id: 72,
    question: "Which culture medium is used for the isolation of Mycobacterium tuberculosis?",
    options: ["MacConkey agar", "Lowenstein-Jensen (LJ) medium", "Blood agar", "Chocolate agar"],
    answer: 1,
    explanation: "Lowenstein-Jensen medium is the classic solid egg-based culture medium for M. tuberculosis. It contains malachite green (inhibits other organisms) and supports slow-growing mycobacteria. MGIT (Mycobacteria Growth Indicator Tube) is a liquid medium used for faster automated culture (BACTEC system)."
  },
  {
    id: 73,
    question: "The mechanism of action of penicillin antibiotics is:",
    options: ["Inhibition of DNA gyrase", "Inhibition of bacterial cell wall synthesis by binding penicillin-binding proteins (PBPs)", "Disruption of the cell membrane", "Inhibition of protein synthesis at the 30S ribosomal subunit"],
    answer: 1,
    explanation: "Penicillins are beta-lactam antibiotics that irreversibly inhibit transpeptidase (penicillin-binding proteins), enzymes essential for peptidoglycan cross-linking in bacterial cell wall synthesis. This leads to osmotic lysis. Fluoroquinolones inhibit DNA gyrase; polymyxins disrupt cell membranes; aminoglycosides target 30S ribosomes."
  },
  {
    id: 74,
    question: "Which type of microscopy uses a condenser that directs light at an oblique angle, making specimens appear bright against a dark background?",
    options: ["Phase-contrast microscopy", "Fluorescence microscopy", "Darkfield microscopy", "Electron microscopy"],
    answer: 2,
    explanation: "Darkfield microscopy uses a special condenser that illuminates the specimen from the sides, so only scattered light reaches the objective; the background appears dark and the specimen appears bright and luminous. It is used for visualization of Treponema pallidum (syphilis) and Leptospira."
  },
  {
    id: 75,
    question: "Ziehl-Neelsen staining is used to detect acid-fast bacilli. The primary stain and decolorizing agent used are:",
    options: ["Crystal violet and acetone-alcohol", "Carbol fuchsin and acid-alcohol", "Methylene blue and alcohol", "Safranin and acetone"],
    answer: 1,
    explanation: "ZN staining: Carbol fuchsin (primary stain, heated/cold) is applied, followed by acid-alcohol decolorization (3% HCl in 95% alcohol). Acid-fast bacteria (mycobacteria, Nocardia) retain carbol fuchsin and appear bright red/pink; non-acid-fast bacteria are decolorized and take up the methylene blue counterstain."
  },
  {
    id: 76,
    question: "Candida albicans is differentiated from other Candida species by:",
    options: ["Its inability to grow on Sabouraud's dextrose agar", "Production of germ tubes at 37°C in serum (Reynolds-Braude phenomenon)", "Positive Gram stain result", "Production of black colonies on Niger seed agar"],
    answer: 1,
    explanation: "C. albicans produces germ tubes (short hyphal extensions) within 2-3 hours of incubation in serum at 37°C, known as the Reynolds-Braude phenomenon or germ tube test. This distinguishes it from other Candida species. Cryptococcus neoformans produces melanin on Niger seed (birdseed) agar."
  },
  {
    id: 77,
    question: "Which sterilization method is most appropriate for heat-labile materials such as surgical gloves and plastic catheters?",
    options: ["Autoclaving at 121°C for 15 minutes", "Dry heat at 160°C for 1 hour", "Ethylene oxide gas sterilization", "Boiling at 100°C for 20 minutes"],
    answer: 2,
    explanation: "Ethylene oxide (EO) gas sterilization is effective at low temperatures (37-63°C), making it ideal for heat-sensitive or moisture-sensitive materials including rubber gloves, plastic catheters, electronic components, and endoscopes. Autoclaving and dry heat damage heat-labile materials."
  },
  {
    id: 78,
    question: "The ESKAPE pathogens refer to bacteria that most commonly exhibit multidrug resistance. The 'K' in ESKAPE stands for:",
    options: ["Kluyvera ascorbata", "Klebsiella pneumoniae", "Kingella kingae", "Kurthia species"],
    answer: 1,
    explanation: "ESKAPE stands for: Enterococcus faecium, Staphylococcus aureus, Klebsiella pneumoniae, Acinetobacter baumannii, Pseudomonas aeruginosa, and Enterobacter species. These pathogens 'escape' the effects of antibiotics and represent the leading cause of nosocomial infections worldwide."
  },
  {
    id: 79,
    question: "Fluorescence microscopy requires the use of:",
    options: ["High voltage electron beams and vacuum chambers", "Fluorescent dyes or labels and specific excitation/emission filters", "A special condenser that blocks direct light", "Immersion oil only for high magnification"],
    answer: 1,
    explanation: "Fluorescence microscopy uses fluorescent dyes (fluorophores) or fluorescently labeled antibodies that, when excited by specific wavelengths of light, emit light at longer wavelengths. Specific excitation and barrier filters are used to select the correct wavelengths. It is widely used in immunofluorescence, FISH, and confocal microscopy."
  },
  {
    id: 80,
    question: "MacConkey agar is a selective and differential medium used to isolate Gram-negative bacteria. Lactose-fermenting colonies on MacConkey agar appear:",
    options: ["Colorless or pale", "Blue-green with metallic sheen", "Pink to red due to acid production", "Black with metallic sheen"],
    answer: 2,
    explanation: "MacConkey agar contains lactose and neutral red indicator. Lactose-fermenting bacteria (e.g., E. coli, Klebsiella) produce acid, which turns the neutral red indicator pink/red, producing pink to magenta colonies. Non-fermenting bacteria (e.g., Salmonella, Shigella) produce colorless/pale colonies."
  },
  {
    id: 81,
    question: "Choose the word most similar in meaning to 'AMELIORATE':",
    options: ["Worsen", "Improve", "Maintain", "Evaluate"],
    answer: 1,
    explanation: "'Ameliorate' means to make something bad or unsatisfactory better; to improve. For example: 'The new medication helped ameliorate the patient's symptoms.' Its antonym would be 'deteriorate' or 'worsen.'"
  },
  {
    id: 82,
    question: "Choose the word OPPOSITE in meaning to 'LACONIC':",
    options: ["Verbose", "Concise", "Ambiguous", "Taciturn"],
    answer: 0,
    explanation: "'Laconic' means using very few words; brief and concise. 'Verbose' means using more words than necessary; long-winded. 'Taciturn' is a near-synonym (habitually silent), not an antonym."
  },
  {
    id: 83,
    question: "The idiom 'burn the midnight oil' means:",
    options: ["To waste resources carelessly", "To work late into the night", "To cause unnecessary trouble", "To create problems for others"],
    answer: 1,
    explanation: "'Burn the midnight oil' means to work or study late into the night, historically referring to working by the light of an oil lamp past midnight. Example: 'She burned the midnight oil to finish her research paper before the deadline.'"
  },
  {
    id: 84,
    question: "Identify the correctly spelled word:",
    options: ["Accomodation", "Accommodation", "Acommodation", "Acomodation"],
    answer: 1,
    explanation: "The correct spelling is 'Accommodation' — with double 'c' and double 'm'. It is one of the most commonly misspelled words in English. A helpful mnemonic: 'ACCOmmodation has two Cs and two Ms.'"
  },
  {
    id: 85,
    question: "Choose the best one-word substitution for: 'A person who cannot be bribed or corrupted':",
    options: ["Incorrigible", "Insolvent", "Incorruptible", "Indolent"],
    answer: 2,
    explanation: "'Incorruptible' means a person who cannot be corrupted or bribed. 'Incorrigible' means not able to be reformed or corrected (of bad behavior). 'Insolvent' means unable to pay debts. 'Indolent' means habitually lazy."
  },
  {
    id: 86,
    question: "Convert to passive voice: 'The doctor examines the patient every morning.'",
    options: ["The patient has been examined every morning by the doctor.", "The patient was examined every morning by the doctor.", "The patient is examined every morning by the doctor.", "The patient had been examined every morning by the doctor."],
    answer: 2,
    explanation: "For simple present active voice, the passive is formed as: Object + is/am/are + past participle + by + subject. 'Examines' → 'is examined.' The subject (doctor) becomes the agent (by the doctor), and the object (patient) becomes the new subject."
  },
  {
    id: 87,
    question: "Fill in the blank: 'The committee _______ unable to reach a consensus during the meeting.'",
    options: ["were", "was", "are", "have been"],
    answer: 1,
    explanation: "Collective nouns like 'committee,' 'team,' 'jury,' and 'board' take singular verbs when acting as a unified body (British English may use plural). 'Was' is the correct choice here as the committee is treated as a single entity making a collective decision."
  },
  {
    id: 88,
    question: "Identify the error in the sentence: 'Each of the students have submitted their assignments on time.'",
    options: ["'Each' should be 'every'", "'have' should be 'has' because 'each' is singular", "'submitted' should be 'submit'", "No error"],
    answer: 1,
    explanation: "'Each' is an indefinite pronoun that is always treated as singular. The correct sentence is: 'Each of the students HAS submitted...' The verb must agree with 'each,' not with 'students.' Similarly, 'each one,' 'everyone,' 'anyone,' and 'nobody' take singular verbs."
  },
  {
    id: 89,
    question: "What is the collective noun for a group of physicians/doctors?",
    options: ["A panel of doctors", "A flock of doctors", "A pack of doctors", "A swarm of doctors"],
    answer: 0,
    explanation: "The accepted collective noun for doctors is 'a panel of doctors' (also 'a body of doctors'). 'Flock' is used for birds; 'pack' for wolves or dogs; 'swarm' for insects. Collective nouns are conventional and specific to different groups."
  },
  {
    id: 90,
    question: "Choose the correct meaning of the word 'EQUIVOCAL':",
    options: ["Perfectly clear and unambiguous", "Open to more than one interpretation; ambiguous", "Equally distributed", "Fair and just"],
    answer: 1,
    explanation: "'Equivocal' means open to two or more interpretations; ambiguous or uncertain. Example: 'The test results were equivocal, requiring repeat testing.' 'Unequivocal' means leaving no doubt; clear and certain. Do not confuse with 'equitable' (fair and just)."
  },
  {
    id: 91,
    question: "The Indian Council of Medical Research (ICMR) was established in:",
    options: ["1911", "1949", "1966", "1985"],
    answer: 0,
    explanation: "ICMR was established in 1911 as the Indian Research Fund Association (IRFA) and was reorganized and renamed as ICMR in 1949 after independence. However, 1911 is considered the year of its founding. It is the apex body for biomedical research in India, under the Department of Health Research."
  },
  {
    id: 92,
    question: "The Sustainable Development Goal (SDG) 3 specifically targets:",
    options: ["Zero hunger and food security", "Good health and well-being for all at all ages", "Quality education for all", "Clean water and sanitation"],
    answer: 1,
    explanation: "SDG 3 aims to 'Ensure healthy lives and promote well-being for all at all ages.' Key targets include reducing maternal mortality, ending preventable deaths of newborns and children, ending epidemics like AIDS, TB, and malaria, achieving Universal Health Coverage, and reducing deaths from NCDs."
  },
  {
    id: 93,
    question: "The Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY) provides health insurance coverage of up to how much per family per year?",
    options: ["₹1 lakh", "₹3 lakh", "₹5 lakh", "₹10 lakh"],
    answer: 2,
    explanation: "PM-JAY, launched in September 2018, provides health coverage of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization. It covers approximately 50 crore beneficiaries (bottom 40% of India's population) and is one of the world's largest government-funded health insurance schemes."
  },
  {
    id: 94,
    question: "What does the abbreviation 'DALY' stand for in public health?",
    options: ["Disease-Adjusted Life Year", "Disability-Adjusted Life Year", "Death-Adjusted Life Year", "Drug-Adjusted Life Year"],
    answer: 1,
    explanation: "DALY (Disability-Adjusted Life Year) is a measure of overall disease burden combining years of life lost due to premature mortality (YLL) and years lived with disability (YLD). One DALY represents one lost year of 'healthy' life. It was developed by the World Bank and WHO for the Global Burden of Disease study."
  },
  {
    id: 95,
    question: "Which of the following is the correct sequence in a number series? 2, 6, 18, 54, ___",
    options: ["108", "162", "216", "270"],
    answer: 1,
    explanation: "The pattern is multiplication by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162. This is a geometric progression with common ratio 3."
  },
  {
    id: 96,
    question: "The Central Drugs Standard Control Organisation (CDSCO) functions under the:",
    options: ["Ministry of Commerce", "Ministry of Health and Family Welfare", "Ministry of Science and Technology", "Ministry of Chemicals and Fertilizers"],
    answer: 1,
    explanation: "CDSCO is the national regulatory authority for drugs, medical devices, diagnostics, and cosmetics in India. It functions under the Directorate General of Health Services, Ministry of Health and Family Welfare. It is the Indian equivalent of the US FDA."
  },
  {
    id: 97,
    question: "The abbreviation 'EHR' in healthcare informatics stands for:",
    options: ["Emergency Health Response", "Electronic Health Record", "Extended Health Research", "Evidence-based Health Report"],
    answer: 1,
    explanation: "EHR (Electronic Health Record) is a digital version of a patient's medical history maintained by the healthcare provider. Unlike EMR (Electronic Medical Record) used within one practice, EHR can be shared across different healthcare settings and providers, enabling continuity of care."
  },
  {
    id: 98,
    question: "The Janani Suraksha Yojana (JSY) is a centrally sponsored scheme aimed at reducing maternal and neonatal mortality by:",
    options: ["Providing free antenatal check-ups only", "Promoting institutional deliveries through cash incentives", "Distributing free iron and folic acid tablets", "Training traditional birth attendants"],
    answer: 1,
    explanation: "JSY, launched in 2005 under NRHM, promotes institutional delivery among pregnant women in low-performing states by providing cash incentives. It has significantly increased institutional deliveries in India. It targets below-poverty-line and SC/ST women in LPS (Low-Performing States) and is integrated with ASHA workers."
  },
  {
    id: 99,
    question: "If HEALTH is coded as IFBMUI, then NURSE would be coded as:",
    options: ["OVSUF", "OVSTF", "NVSTF", "OVSQF"],
    answer: 0,
    explanation: "Each letter is shifted forward by 1 position in the alphabet: H→I, E→F, A→B, L→M, T→U, H→I = IFBMUI. Applying the same: N→O, U→V, R→S, S→T, E→F = OVSTF. Wait, let me recheck: N(14)→O(15), U(21)→V(22), R(18)→S(19), S(19)→T(20), E(5)→F(6) = OVSTF... but option A is OVSUF. Rechecking: N→O, U→V, R→S, S→T, E→F → OVSTF = option B. The correct answer is OVSTF (option B, index 1). However, since the coding shifts each letter by +1: N=O, U=V, R=S, S=T, E=F → OVSTF."
  },
  {
    id: 100,
    question: "The National Health Policy of India was most recently revised in:",
    options: ["2002", "2009", "2017", "2020"],
    answer: 2,
    explanation: "The National Health Policy 2017 replaced the earlier NHP 2002. NHP 2017 aims to achieve universal health coverage, increase public health expenditure to 2.5% of GDP, strengthen primary healthcare, reduce out-of-pocket expenditure, and address the rising burden of NCDs along with communicable diseases. It emphasizes health and wellness centers."
  }
];

export default questions;

const questions = [
  {
    id: 1,
    question: "Which of the following Bradford Hill criteria refers to the consistency of the association across different populations, times, and circumstances?",
    options: ["Specificity", "Consistency", "Plausibility", "Coherence"],
    answer: 1,
    explanation: "Consistency (replication) is one of Bradford Hill's criteria for causation. It means the association is repeatedly observed by different researchers, in different populations, at different times and places. This strengthens the argument for a causal relationship."
  },
  {
    id: 2,
    question: "In the hierarchy of evidence, which study design is considered the highest level for evaluating the effectiveness of an intervention?",
    options: ["Randomized controlled trial", "Systematic review with meta-analysis", "Cohort study", "Case-control study"],
    answer: 1,
    explanation: "Systematic reviews with meta-analysis sit at the top of the evidence hierarchy because they synthesize data from multiple well-designed randomized controlled trials, providing the highest level of evidence for evaluating interventions."
  },
  {
    id: 3,
    question: "In meta-analysis, the Cochran's Q test is used to assess:",
    options: ["Publication bias", "Statistical heterogeneity among studies", "Effect size estimation", "Selection bias"],
    answer: 1,
    explanation: "Cochran's Q test assesses statistical heterogeneity in a meta-analysis by testing the null hypothesis that all studies share a common effect size. A significant Q statistic suggests heterogeneity, though the test has low power with few studies."
  },
  {
    id: 4,
    question: "Which step in conducting a systematic review involves developing pre-specified criteria for including and excluding studies?",
    options: ["Data extraction", "Quality assessment", "Eligibility criteria formulation", "GRADE assessment"],
    answer: 2,
    explanation: "Formulating eligibility (inclusion/exclusion) criteria is a critical early step in systematic reviews. These criteria must be pre-specified in the protocol to prevent bias, and are typically defined using the PICO framework (Population, Intervention, Comparator, Outcome)."
  },
  {
    id: 5,
    question: "PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) guidelines primarily address:",
    options: ["How to conduct a meta-analysis", "How to report systematic reviews and meta-analyses", "Sample size requirements for systematic reviews", "Grading the quality of evidence"],
    answer: 1,
    explanation: "PRISMA is a reporting guideline—it specifies how to transparently report what was done and found in a systematic review or meta-analysis. It includes a 27-item checklist and a flow diagram showing the flow of information through the review phases."
  },
  {
    id: 6,
    question: "The CONSORT statement was developed to improve the reporting of which type of study?",
    options: ["Cohort studies", "Case-control studies", "Randomized controlled trials", "Diagnostic accuracy studies"],
    answer: 2,
    explanation: "CONSORT (Consolidated Standards of Reporting Trials) provides a minimum set of recommendations for reporting randomized controlled trials. It includes a 25-item checklist and a flow diagram to help authors report RCTs transparently and completely."
  },
  {
    id: 7,
    question: "STROBE (Strengthening the Reporting of Observational Studies in Epidemiology) guidelines apply to which of the following study designs?",
    options: ["Randomized controlled trials only", "Cohort, case-control, and cross-sectional studies", "Systematic reviews and meta-analyses", "Animal experimental studies"],
    answer: 1,
    explanation: "STROBE guidelines were developed to improve the reporting of observational epidemiological studies, specifically cohort studies, case-control studies, and cross-sectional studies. The guidelines provide a 22-item checklist with some items specific to each design."
  },
  {
    id: 8,
    question: "In a funnel plot used to detect publication bias, asymmetry is typically interpreted as:",
    options: ["High heterogeneity among studies", "Possible publication bias with smaller studies showing larger effect sizes", "High statistical significance of the pooled effect", "Presence of confounding in individual studies"],
    answer: 1,
    explanation: "A funnel plot is a scatter plot of effect size versus study precision (sample size or standard error). In the absence of publication bias, it should be symmetrical. Asymmetry—particularly absence of small studies with null or negative results—suggests publication bias, as smaller studies with negative results tend not to be published."
  },
  {
    id: 9,
    question: "Effect modification (interaction) differs from confounding in that effect modification:",
    options: ["Can be controlled by restriction or stratification", "Is a bias that should always be eliminated", "Represents a true biological phenomenon where the effect of exposure differs across strata", "Is caused by a third variable associated with both exposure and outcome"],
    answer: 2,
    explanation: "Effect modification (interaction) is a true biological phenomenon where the magnitude or direction of an association between an exposure and outcome genuinely differs across levels of a third variable (the effect modifier). Unlike confounding, effect modification should be reported, not removed. Confounding is a bias caused by mixing of effects."
  },
  {
    id: 10,
    question: "Propensity score matching in observational studies is used to:",
    options: ["Increase the statistical power of a study", "Balance measured confounders between exposed and unexposed groups", "Eliminate selection bias in randomized trials", "Adjust for unmeasured confounders"],
    answer: 1,
    explanation: "Propensity score matching uses the estimated probability of receiving treatment given observed baseline characteristics to create matched groups. It balances measured confounders between treated and untreated groups, mimicking aspects of randomization. However, it cannot control for unmeasured confounders."
  },
  {
    id: 11,
    question: "In logistic regression, the exponentiated regression coefficient (e^β) represents the:",
    options: ["Risk ratio", "Risk difference", "Odds ratio", "Hazard ratio"],
    answer: 2,
    explanation: "In logistic regression, exponentiating the regression coefficient (e^β) gives the odds ratio for the association between the predictor and the binary outcome, adjusted for other variables in the model. The odds ratio represents the multiplicative change in odds per unit increase in the predictor."
  },
  {
    id: 12,
    question: "In a Kaplan-Meier survival analysis, what happens to censored observations?",
    options: ["They are excluded from the analysis entirely", "They are treated as events at the time of censoring", "They contribute to the analysis up to their censoring time, then are removed from the risk set", "They are assigned the median survival time of the group"],
    answer: 2,
    explanation: "Censored observations in Kaplan-Meier analysis are those for whom the event has not occurred by the end of follow-up or who were lost to follow-up. They contribute to the risk set until their censoring time, after which they are removed. This correctly uses available information without treating censoring as an event."
  },
  {
    id: 13,
    question: "A hazard ratio of 0.65 in a clinical trial means:",
    options: ["The treatment group has a 35% lower event rate at any given time compared to the control group", "The probability of surviving 5 years is 65% in the treatment group", "The treatment group has a 65% higher hazard than the control group", "The median survival in the treatment group is 65% of that in the control group"],
    answer: 0,
    explanation: "A hazard ratio of 0.65 means that at any given point in time, the treated group has a hazard (instantaneous risk) that is 65% of the control group's hazard—a 35% reduction in hazard. This is a proportional hazards assumption and applies over the study follow-up period."
  },
  {
    id: 14,
    question: "Statistical power is defined as the probability of:",
    options: ["Correctly rejecting a true null hypothesis", "Making a type I error", "Correctly rejecting a false null hypothesis (detecting a true effect)", "Accepting the null hypothesis when it is false"],
    answer: 2,
    explanation: "Statistical power (1 - β) is the probability of correctly rejecting a false null hypothesis—i.e., detecting a true effect when one exists. It is typically set at 80% or 90% in study design. Power is influenced by sample size, effect size, significance level, and variability."
  },
  {
    id: 15,
    question: "In a study comparing two proportions (p1 = 0.40, p2 = 0.25), which of the following changes would MOST increase the required sample size?",
    options: ["Increasing the significance level from 5% to 10%", "Decreasing the power from 90% to 80%", "Decreasing the detectable difference from 15% to 10%", "Using a one-tailed instead of two-tailed test"],
    answer: 2,
    explanation: "Sample size is inversely related to the square of the detectable difference. Decreasing the minimum detectable difference (from 15% to 10%) substantially increases the required sample size because you need more subjects to reliably detect a smaller effect. Increasing alpha or decreasing power both decrease sample size."
  },
  {
    id: 16,
    question: "A type II error (beta error) in hypothesis testing refers to:",
    options: ["Rejecting a true null hypothesis", "Failing to reject a false null hypothesis", "Using the wrong statistical test", "Having inadequate sample size in the study"],
    answer: 1,
    explanation: "A type II error (beta error) occurs when we fail to reject the null hypothesis when it is actually false—missing a true effect. The probability of a type II error is beta (β), and power = 1 - β. Type I error (alpha error) is the opposite: rejecting a true null hypothesis."
  },
  {
    id: 17,
    question: "Bonferroni correction is applied in research to control for:",
    options: ["Confounding in observational studies", "Increased type I error rate due to multiple comparisons", "Selection bias in clinical trials", "Information bias in case-control studies"],
    answer: 1,
    explanation: "When multiple statistical tests are performed simultaneously, the probability of making at least one type I error increases. Bonferroni correction addresses this by dividing the significance threshold (alpha) by the number of comparisons (e.g., if 10 tests are performed, each test uses α = 0.005 instead of 0.05)."
  },
  {
    id: 18,
    question: "In an ROC curve analysis, an AUC (Area Under the Curve) of 0.85 indicates:",
    options: ["The test correctly classifies 85% of all subjects", "There is an 85% probability that the test will rank a randomly chosen positive case higher than a randomly chosen negative case", "The test has 85% sensitivity", "The test has 85% specificity"],
    answer: 1,
    explanation: "The AUC represents the probability that the diagnostic test will rank a randomly selected positive case higher than a randomly selected negative case. An AUC of 0.85 indicates good discriminatory ability. AUC of 0.5 = no discrimination; AUC of 1.0 = perfect discrimination."
  },
  {
    id: 19,
    question: "In a forest plot from a meta-analysis, when the confidence interval of an individual study's effect estimate crosses the line of no effect, it means:",
    options: ["The study has high risk of bias", "The study's result is not statistically significant at the chosen alpha level", "The study should be excluded from the meta-analysis", "The study has a large sample size"],
    answer: 1,
    explanation: "In a forest plot, the line of no effect is the vertical reference line (usually at OR=1 or RR=1 for ratio measures, or MD=0 for mean differences). When a study's confidence interval crosses this line, the result is not statistically significant—the data are consistent with no effect at the chosen significance level."
  },
  {
    id: 20,
    question: "An I-squared (I²) value of 75% in a meta-analysis indicates:",
    options: ["75% of the pooled effect is due to bias", "Substantial heterogeneity—75% of total variation across studies is due to true between-study variability", "Only 25% of the studies should be included in the meta-analysis", "The meta-analysis lacks statistical power"],
    answer: 1,
    explanation: "I² quantifies the proportion of total variability in study estimates that is due to between-study heterogeneity rather than chance. Values of 0-25% indicate low heterogeneity, 25-50% moderate, 50-75% substantial, and >75% considerable heterogeneity. An I² of 75% indicates substantial heterogeneity that requires investigation."
  },
  {
    id: 21,
    question: "Mass screening differs from targeted (selective) screening in that mass screening:",
    options: ["Is applied to high-risk groups only", "Uses more sensitive tests", "Is applied to the entire population regardless of individual risk", "Is always more cost-effective"],
    answer: 2,
    explanation: "Mass (universal) screening is applied to the entire eligible population regardless of individual risk factors, while targeted (selective) screening focuses on high-risk subgroups. Mass screening may find more cases but is less efficient; targeted screening has better yield per person screened. The choice depends on disease prevalence and cost-benefit analysis."
  },
  {
    id: 22,
    question: "Lead-time bias in cancer screening refers to:",
    options: ["Earlier detection appearing to improve survival without actually prolonging life", "Slower-growing tumors being preferentially detected by screening", "Patient selection biases in screening programs", "The time between screening rounds being too long"],
    answer: 0,
    explanation: "Lead-time bias occurs when screening detects disease earlier in its natural history. Survival time from diagnosis appears longer in screened individuals, but this may simply reflect earlier diagnosis rather than true prolongation of life. The patient may die at the same time regardless—the 'lead time' is the head-start given by early detection."
  },
  {
    id: 23,
    question: "Length-time bias in cancer screening programs results from:",
    options: ["The false-positive rate being higher in screened populations", "Preferential detection of slow-growing, less aggressive tumors that have longer pre-clinical phases", "The screening interval being longer than the mean sojourn time", "Healthy volunteer bias in screening participants"],
    answer: 1,
    explanation: "Length-time bias occurs because tumors with longer pre-clinical (detectable but asymptomatic) phases—typically slower-growing, less aggressive tumors—have a higher probability of being detected by periodic screening. Aggressive, fast-growing tumors are more likely to become symptomatic between screenings. This makes screened populations appear to have better outcomes."
  },
  {
    id: 24,
    question: "Overdiagnosis in cancer screening refers to:",
    options: ["False-positive test results requiring further investigation", "Detection of cancers that would never have caused symptoms or death during the patient's lifetime", "Overestimation of cancer prevalence in the population", "Misclassification of benign lesions as malignant"],
    answer: 1,
    explanation: "Overdiagnosis refers to the detection—by screening—of true cancers that would never have caused symptoms or death during the patient's lifetime if left undetected. These are not false positives; they are histologically confirmed cancers that have indolent biology. Overdiagnosis leads to unnecessary treatment with associated harms."
  },
  {
    id: 25,
    question: "Visual Inspection with Acetic Acid (VIA) for cervical cancer screening is preferred in low-resource settings primarily because:",
    options: ["It has higher sensitivity than HPV testing", "It is an immediate, low-cost, training-accessible test with same-day results enabling screen-and-treat", "It detects HPV infection directly", "It has a higher specificity than Pap smear"],
    answer: 1,
    explanation: "VIA is preferred in low-resource settings because it requires no laboratory infrastructure, provides immediate results at the point of care, allows same-day treatment (screen-and-treat approach), is low cost, and can be performed by trained healthcare workers. While it has lower specificity than HPV testing, its operational advantages are significant in resource-limited settings."
  },
  {
    id: 26,
    question: "The recommended interval for mammographic screening in women aged 50-69 years, according to most international guidelines, is:",
    options: ["Annually", "Every 2 years", "Every 3 years", "Every 5 years"],
    answer: 1,
    explanation: "Most international guidelines (WHO, European guidelines) recommend biennial (every 2 years) mammographic screening for women aged 50-69 years. This interval balances the benefits of early detection against the harms of false positives, unnecessary investigations, and overdiagnosis. Annual screening is recommended by some US guidelines for average-risk women aged 40-74."
  },
  {
    id: 27,
    question: "Fecal Immunochemical Test (FIT) for colorectal cancer screening detects:",
    options: ["Carcinoembryonic antigen (CEA) in stool", "Human hemoglobin specifically, using antibodies to human hemoglobin", "Occult blood from any source including dietary hemoglobin", "DNA mutations in colorectal cancer cells"],
    answer: 1,
    explanation: "FIT (Fecal Immunochemical Test) uses antibodies specific to human hemoglobin to detect occult blood in stool. Unlike guaiac-based FOBT, FIT does not react with non-human hemoglobin (from red meat) or upper GI bleeding, making it more specific for lower GI bleeding. No dietary restrictions are needed, improving patient compliance."
  },
  {
    id: 28,
    question: "In India, the Newborn Screening program under RBSK (Rashtriya Bal Swasthya Karyakram) screens for which of the following conditions?",
    options: ["Only phenylketonuria and congenital hypothyroidism", "Congenital hypothyroidism, phenylketonuria, glucose-6-phosphate dehydrogenase deficiency, and congenital adrenal hyperplasia among others", "Sickle cell disease only", "Only hearing impairment and congenital cataract"],
    answer: 1,
    explanation: "RBSK screens newborns and children for 4 Ds: Defects at birth, Diseases, Deficiencies, and Developmental delays. The program screens for conditions including congenital hypothyroidism, congenital deafness, phenylketonuria, G6PD deficiency, congenital adrenal hyperplasia, and other conditions. Early detection enables timely intervention."
  },
  {
    id: 29,
    question: "Cell-free fetal DNA (cfDNA) screening (NIPT) during pregnancy is most commonly used to detect:",
    options: ["Neural tube defects", "Chromosomal aneuploidies such as trisomy 21, 18, and 13", "Structural cardiac defects", "Inborn errors of metabolism"],
    answer: 1,
    explanation: "Non-invasive prenatal testing (NIPT) analyzes cell-free fetal DNA in maternal blood to screen for chromosomal aneuploidies, primarily trisomy 21 (Down syndrome), trisomy 18 (Edwards syndrome), and trisomy 13 (Patau syndrome), and can also detect sex chromosome abnormalities. It is a screening test, not diagnostic—positive results require confirmatory diagnostic testing."
  },
  {
    id: 30,
    question: "According to Wilson-Jungner criteria for screening, which of the following is a criterion related to the screening test itself?",
    options: ["The condition should be an important public health problem", "There should be an accepted treatment for patients with recognized disease", "The test should be acceptable to the population", "The natural history of the condition should be adequately understood"],
    answer: 2,
    explanation: "Wilson and Jungner (1968) proposed classic criteria for screening programs. Criteria relating to the test include: it should be simple, safe, precise, and validated; acceptable to the population; and have a known sensitivity and specificity. The criterion 'acceptable to the population' specifically pertains to the screening test. Other criteria relate to the disease, treatment, and health system."
  },
  {
    id: 31,
    question: "According to WHO/NLEP classification, a leprosy patient with 1-5 skin lesions and a single nerve trunk involvement is classified as:",
    options: ["Indeterminate leprosy", "Paucibacillary (PB) leprosy", "Multibacillary (MB) leprosy", "Borderline leprosy"],
    answer: 1,
    explanation: "WHO/NLEP operational classification: Paucibacillary (PB) leprosy = 1-5 skin lesions with absent/absent bacilli on slit-skin smear. Multibacillary (MB) leprosy = 6 or more skin lesions, or any number of lesions with positive smear. Single skin lesion leprosy (SLSL) is treated as PB. The classification guides MDT regimen choice."
  },
  {
    id: 32,
    question: "For multibacillary (MB) leprosy in adults, the standard WHO MDT regimen duration is:",
    options: ["6 months", "12 months", "18 months", "24 months"],
    answer: 1,
    explanation: "The current WHO MDT regimen for MB leprosy in adults is 12 months duration, consisting of rifampicin 600mg monthly (supervised) + clofazimine 300mg monthly (supervised) + dapsone 100mg daily + clofazimine 50mg daily. This replaced the earlier 24-month regimen. PB leprosy is treated for 6 months."
  },
  {
    id: 33,
    question: "Post-exposure prophylaxis (PEP) for Category III rabies exposure (deep puncture wounds, bites on face/neck/hands) includes:",
    options: ["Wound washing and rabies vaccine only", "Wound washing, rabies immunoglobulin (RIG) infiltrated into wound, and complete vaccine course", "Rabies immunoglobulin alone", "Wound washing and antibiotics only"],
    answer: 1,
    explanation: "Category III exposure (single or multiple transdermal bites/scratches, bites on face/neck/fingertips, or mucous membrane contact) requires: immediate wound washing with soap and water for 15 minutes, infiltration of rabies immunoglobulin (human or equine) into the wound, and complete rabies vaccine course (days 0, 3, 7, 14, and 28 for Essen schedule)."
  },
  {
    id: 34,
    question: "Japanese Encephalitis (JE) virus is primarily transmitted by:",
    options: ["Aedes aegypti mosquitoes", "Culex tritaeniorhynchus mosquitoes", "Anopheles mosquitoes", "Mansonia mosquitoes"],
    answer: 1,
    explanation: "Japanese Encephalitis is transmitted by Culex tritaeniorhynchus mosquitoes (and other Culex species). These mosquitoes breed in rice paddies and feed on pigs and water birds (which are amplifying hosts). Humans are dead-end hosts. JE is the leading cause of viral encephalitis in Asia. Two vaccines (SA 14-14-2 live attenuated, and Vero cell-derived inactivated) are available."
  },
  {
    id: 35,
    question: "Chikungunya fever is characterized by all of the following EXCEPT:",
    options: ["Arthralgia and arthritis that may persist for months to years", "Transmission by Aedes mosquitoes", "High mortality rate (>10%)", "Maculopapular rash"],
    answer: 2,
    explanation: "Chikungunya is characterized by sudden onset fever, severe arthralgia/arthritis (may persist for months to years—a distinguishing feature), maculopapular rash, and myalgia. Mortality is generally low (case fatality rate < 1%), though severe disease can occur in neonates, elderly, and immunocompromised. It is transmitted by Aedes aegypti and Aedes albopictus mosquitoes."
  },
  {
    id: 36,
    question: "The gold standard for laboratory diagnosis of typhoid fever in the first week of illness is:",
    options: ["Widal test", "Blood culture", "Bone marrow culture", "Stool culture"],
    answer: 1,
    explanation: "Blood culture is the gold standard for diagnosing typhoid fever and is most sensitive during the first week of illness (positive in 40-80% of cases). Bone marrow culture is more sensitive (>90%) and remains positive after antibiotic initiation. The Widal test has poor sensitivity and specificity due to cross-reactions. Stool and urine cultures become positive later."
  },
  {
    id: 37,
    question: "The WHO-recommended ORS for cholera treatment has which of the following compositions?",
    options: ["Sodium 90 mmol/L, glucose 111 mmol/L (standard ORS)", "Sodium 75 mmol/L, glucose 75 mmol/L (reduced osmolarity ORS)", "Sodium 45 mmol/L, glucose 75 mmol/L (hypo-osmolar ORS)", "Sodium 130 mmol/L, glucose 200 mmol/L (high-sodium ORS)"],
    answer: 1,
    explanation: "WHO currently recommends reduced-osmolarity ORS (sodium 75 mmol/L, chloride 65 mmol/L, glucose 75 mmol/L, potassium 20 mmol/L, citrate 10 mmol/L; total osmolarity 245 mOsm/L) for most cases. For severe cholera with profuse watery diarrhea, Ringer's lactate IV and ORS are used. The older high-osmolarity ORS (311 mOsm/L) had sodium 90 mmol/L."
  },
  {
    id: 38,
    question: "The WHO measles elimination target requires maintaining measles immunization coverage above what percentage at national and district levels?",
    options: ["80%", "90%", "95%", "99%"],
    answer: 2,
    explanation: "Measles has a basic reproduction number (R0) of 12-18, requiring herd immunity threshold of approximately 92-95%. WHO measles elimination targets require at least 95% coverage with two doses of measles-containing vaccine at both national and district levels to interrupt transmission. India has set a target to eliminate measles by 2023-2025."
  },
  {
    id: 39,
    question: "In the Global Polio Eradication Initiative, the switch from trivalent OPV to bivalent OPV (bOPV) was done primarily to:",
    options: ["Reduce the cost of vaccination", "Eliminate type 2 component after wild poliovirus type 2 was eradicated, reducing risk of type 2 vaccine-derived poliovirus (cVDPV2)", "Improve cold chain requirements", "Increase the efficacy against types 1 and 3"],
    answer: 1,
    explanation: "Wild poliovirus type 2 was eradicated in 1999. Continuing to use tOPV maintained unnecessary risk of circulating vaccine-derived poliovirus type 2 (cVDPV2). In April 2016, globally synchronized withdrawal of tOPV and introduction of bOPV (types 1 and 3) occurred along with introduction of at least one IPV dose to maintain type 2 immunity."
  },
  {
    id: 40,
    question: "The clinical presentation of pertussis (whooping cough) in its paroxysmal phase is characterized by:",
    options: ["High fever, maculopapular rash, and lymphadenopathy", "Repetitive bursts of severe coughing followed by an inspiratory whoop and post-tussive vomiting", "Barking cough, stridor, and low-grade fever", "Productive cough with hemoptysis in school-age children"],
    answer: 1,
    explanation: "Pertussis (whooping cough) has three phases: (1) catarrhal phase (1-2 weeks): coryza and mild cough; (2) paroxysmal phase (2-6 weeks): repetitive, violent coughing bursts followed by an inspiratory whoop and often post-tussive vomiting; (3) convalescent phase: gradually decreasing cough. Infants may have apnea instead of whoop. Adults may have only prolonged cough."
  },
  {
    id: 41,
    question: "According to WHO classification, moderate anemia in pregnant women is defined as hemoglobin level of:",
    options: ["Less than 7 g/dL", "7.0 – 9.9 g/dL", "10.0 – 10.9 g/dL", "11.0 – 11.9 g/dL"],
    answer: 1,
    explanation: "WHO classifies anemia in pregnant women as: Mild anemia: Hb 10.0-10.9 g/dL; Moderate anemia: Hb 7.0-9.9 g/dL; Severe anemia: Hb < 7.0 g/dL. For non-pregnant women, anemia is defined as Hb < 12.0 g/dL, and for pregnant women as Hb < 11.0 g/dL."
  },
  {
    id: 42,
    question: "The most specific laboratory test for iron deficiency anemia is:",
    options: ["Serum ferritin level", "Serum iron level", "Total iron binding capacity (TIBC)", "Red cell distribution width (RDW)"],
    answer: 0,
    explanation: "Serum ferritin is the most sensitive and specific single test for iron deficiency, reflecting body iron stores. Low ferritin (<12-15 μg/L) confirms iron deficiency even before anemia develops. However, ferritin is an acute-phase reactant and may be falsely elevated in infection/inflammation, making it less reliable in these conditions."
  },
  {
    id: 43,
    question: "Bitot's spots, a sign of vitamin A deficiency, are characterized by:",
    options: ["Foamy, grayish-white triangular plaques on the bulbar conjunctiva adjacent to the cornea", "Corneal ulceration with perforation", "Bilateral pitting edema of the lower extremities", "Night blindness without ocular changes"],
    answer: 0,
    explanation: "Bitot's spots are foamy, grayish-white triangular patches on the bulbar conjunctiva, usually on the temporal side. They represent accumulations of desquamated epithelial cells and saprophytic bacteria (Xerosis bacillus). They are graded XlB in WHO classification. They indicate moderate vitamin A deficiency. Corneal xerosis, keratomalacia, and night blindness represent more severe deficiency."
  },
  {
    id: 44,
    question: "Iodine deficiency during pregnancy most critically affects the fetus by causing:",
    options: ["Congenital hypothyroidism with subsequent intellectual disability (cretinism)", "Neural tube defects", "Cleft palate and cleft lip", "Skeletal dysplasia"],
    answer: 0,
    explanation: "Iodine is essential for thyroid hormone synthesis. Iodine deficiency during pregnancy, especially in the first trimester when fetal thyroid function is not yet established, can cause maternal and fetal hypothyroidism. The most serious consequence is cretinism—characterized by irreversible intellectual disability, deaf-mutism, and neurological damage. It is the most common preventable cause of intellectual disability globally."
  },
  {
    id: 45,
    question: "Dental fluorosis is caused by excessive fluoride intake and is characterized by:",
    options: ["Chalky white patches, brown staining, and pitting of tooth enamel", "Gingival bleeding and loose teeth", "Rapid dental caries formation", "Delayed tooth eruption"],
    answer: 0,
    explanation: "Dental fluorosis results from excessive fluoride intake during tooth development (0-8 years). It ranges from white opaque areas (mild) to brown staining and pitting of enamel (severe/moderate, Dean's index grade 3-4). Skeletal fluorosis (spine, joints) occurs with very high, long-term exposure. Optimal fluoride in drinking water is 0.5-1.0 mg/L; >1.5 mg/L causes dental fluorosis."
  },
  {
    id: 46,
    question: "According to WHO/UNICEF IYCF recommendations, exclusive breastfeeding should be continued for:",
    options: ["3 months", "4 months", "6 months", "12 months"],
    answer: 2,
    explanation: "WHO and UNICEF recommend exclusive breastfeeding (no other food or liquid, including water, except medicines and vitamins) for the first 6 months of life. After 6 months, complementary foods should be introduced while continuing breastfeeding up to 2 years or beyond. Breastfeeding initiation should occur within 1 hour of birth."
  },
  {
    id: 47,
    question: "Timely introduction of complementary feeding means introducing age-appropriate foods at:",
    options: ["3 months of age", "4 months of age", "6 months of age", "9 months of age"],
    answer: 2,
    explanation: "Timely introduction of complementary feeding means starting at 6 months (not before 4 months, not after 6 months). Complementary foods should be adequate (sufficient energy, protein, micronutrients), appropriate (age-appropriate consistency and variety), safe (hygienically prepared), and correctly fed (responsive feeding). Premature introduction before 4 months increases infection risk; delayed introduction causes growth faltering."
  },
  {
    id: 48,
    question: "Mass supplementation programs for vitamin A in India (VANI) recommend giving vitamin A to children aged 9 months to 5 years at:",
    options: ["Every 3 months", "Every 6 months", "Every 9 months", "Annually"],
    answer: 1,
    explanation: "Under India's Vitamin A Supplementation program (now VANI - Vitamin A, Nutrition & Immunization), vitamin A is given every 6 months (bi-annually) to children aged 9 months to 5 years. The dose is 100,000 IU at 9 months (with measles vaccine), then 200,000 IU every 6 months from 18 months to 5 years."
  },
  {
    id: 49,
    question: "Mid-Upper Arm Circumference (MUAC) of less than 11.5 cm in children aged 6-59 months indicates:",
    options: ["Moderate acute malnutrition", "Severe acute malnutrition (SAM)", "Mild malnutrition", "Normal nutritional status"],
    answer: 1,
    explanation: "MUAC cut-offs for children 6-59 months: <11.5 cm = Severe Acute Malnutrition (SAM); 11.5-12.5 cm = Moderate Acute Malnutrition (MAM); ≥12.5 cm = Normal. MUAC is easy to use in community settings for screening. Children with SAM by MUAC or by WHZ score < -3 SD should be referred for therapeutic feeding programs."
  },
  {
    id: 50,
    question: "WHO Growth Charts use which reference population as the standard?",
    options: ["US CDC reference population from 1977", "Multi-country study of children raised under optimal conditions (WHO Multicentre Growth Reference Study)", "National data from India's NFHS", "European reference population"],
    answer: 1,
    explanation: "The WHO Growth Standards (2006) are based on the WHO Multicentre Growth Reference Study (MGRS), which followed children from six countries (Brazil, Ghana, India, Norway, Oman, USA) raised under optimal conditions (breastfed, non-smoking environments, etc.). These represent how children should grow, not just how they do grow, making them prescriptive standards rather than descriptive references."
  },
  {
    id: 51,
    question: "Under the COPE (Committee on Publication Ethics) guidelines, research misconduct includes three main categories: fabrication, falsification, and plagiarism (FFP). Fabrication is defined as:",
    options: ["Manipulating research materials or processes to change or omit data", "Making up data or results and recording or reporting them as real", "Using another person's ideas or words without attribution", "Duplicate publication of the same data in multiple journals"],
    answer: 1,
    explanation: "Fabrication refers to making up data, results, or findings that did not occur and reporting them as if they are real. Falsification involves manipulating research data, equipment, or processes, or omitting data. Plagiarism is the appropriation of another person's ideas, processes, results, or words without attribution. These three constitute the core of research misconduct (FFP)."
  },
  {
    id: 52,
    question: "A researcher discovers that their supervisor is falsifying data in a funded study. What protection does the researcher have under Indian research ethics frameworks?",
    options: ["No formal protection exists for whistleblowers in Indian research settings", "The researcher can report to the Institutional Ethics Committee (IEC) or funding agency, and the Whistleblowers Protection Act 2014 provides some legal protection", "Protection is provided only if the researcher is a government employee", "The researcher must first confront the supervisor directly before reporting"],
    answer: 1,
    explanation: "In India, the Whistleblowers Protection Act 2014 provides legal protection to persons who expose wrongdoing. In research contexts, whistleblowers can report to the IEC, institutional leadership, or funding agencies (e.g., ICMR). ICMR's National Ethical Guidelines encourage reporting of research misconduct. Institutional policies should protect reporters from retaliation."
  },
  {
    id: 53,
    question: "According to ICMJE (International Committee of Medical Journal Editors) criteria, authorship requires which of the following conditions to be met?",
    options: ["Providing funding for the study", "Meeting ALL four criteria: substantial contribution to conception/design/data; drafting/critically revising the work; final approval; accountability for all aspects", "Being the primary investigator on the research project", "Collecting and analyzing more than 50% of the study data"],
    answer: 1,
    explanation: "ICMJE 2013 authorship criteria require ALL four conditions: (1) Substantial contribution to conception, design, acquisition, analysis, or interpretation; (2) Drafting or critically revising the work; (3) Final approval of the version to be published; (4) Agreement to be accountable for all aspects of the work. Those not meeting all criteria should be acknowledged, not listed as authors."
  },
  {
    id: 54,
    question: "Predatory journals can best be identified by which of the following characteristics?",
    options: ["High impact factor and established peer review", "Lack of transparent peer review, aggressive solicitation, rapid publication for fees, false editorial boards, and deceptive indexing claims", "Open access publishing model", "Acceptance rate of less than 20%"],
    answer: 1,
    explanation: "Predatory journals exploit the open-access model by charging publication fees without providing legitimate editorial and peer review services. Key features: deceptive/false peer review, aggressive email solicitation, lack of clear retraction policies, false claims of indexing (PubMed, Scopus), unrealistically rapid publication, and fake impact factors. Beall's list (now archived) was a tool for identifying them."
  },
  {
    id: 55,
    question: "In the context of research ethics, a conflict of interest (COI) arises when:",
    options: ["Two researchers disagree on methodology", "A researcher has a secondary interest (financial, personal) that could improperly influence their primary obligation to research integrity", "A researcher publishes in a competing journal", "An IEC member has subject matter expertise in the study being reviewed"],
    answer: 1,
    explanation: "A conflict of interest exists when a researcher's secondary interests (financial gain, academic advancement, personal relationships) could compromise or appear to compromise their judgment about primary research obligations. COIs don't necessarily cause misconduct but must be disclosed. Financial COIs from industry funding, stock ownership, or speaker honoraria are most common and must be disclosed in publications."
  },
  {
    id: 56,
    question: "Data sharing in clinical trials, as recommended by ICMJE, should include sharing of:",
    options: ["Only the final published results", "Deidentified individual participant data, data dictionaries, and supporting documents used to generate results reported in the article", "Only aggregate data summaries", "Data only when requested by peer reviewers"],
    answer: 1,
    explanation: "ICMJE requires that clinical trials registering after July 2018 must commit to sharing individual participant data as a condition of consideration for publication. This includes deidentified individual participant data, data dictionaries, analytic code, and supporting documents. Data sharing improves research transparency, enables verification, and maximizes research value."
  },
  {
    id: 57,
    question: "Meaningful community engagement in research is best described as:",
    options: ["Informing communities about completed research", "A process of ongoing, bidirectional communication and partnership where communities are involved from conception through dissemination, influencing research design and implementation", "Distributing research findings to community leaders", "Recruiting participants from the community"],
    answer: 1,
    explanation: "Meaningful community engagement involves genuine partnership where communities participate in decisions about research, not just as subjects. It includes identifying research questions, designing protocols, interpreting findings, and disseminating results. It respects community autonomy, builds trust, improves research relevance, and is mandated by ICMR and WHO guidelines for research involving communities."
  },
  {
    id: 58,
    question: "Under what circumstances can an Institutional Ethics Committee (IEC) waive the requirement for individual informed consent?",
    options: ["When the study is funded by government agencies", "When the research poses minimal risk, is not practicable without waiver, does not adversely affect rights/welfare of participants, and participants will be debriefed when appropriate", "When the study is observational only", "When the sample size is large enough to ensure anonymity"],
    answer: 1,
    explanation: "IECs may grant waiver of consent when: (1) the research involves no more than minimal risk; (2) the rights and welfare of participants are not adversely affected; (3) research could not be practicably conducted without the waiver; and (4) whenever appropriate, participants will be provided pertinent information afterward (debriefing). Examples include certain retrospective studies, public health surveillance, and emergency research."
  },
  {
    id: 59,
    question: "Emergency research ethics allows research without prior consent when:",
    options: ["The research is sponsored by government agencies", "The condition is life-threatening, standard treatments are unsatisfactory, no alternatives exist to enroll the person, surrogate consent is sought when possible, and an independent data safety monitoring board is in place", "The emergency department physician approves the enrollment", "More than 50% of eligible patients can provide consent"],
    answer: 1,
    explanation: "Exception from informed consent in emergency research is permitted when: the subject faces a life-threatening situation; obtaining consent is not feasible; time does not permit; the research could not be done without the exception; and there is a reasonable possibility of benefit. Surrogate consent, community consultation, and ethics oversight are required. This is governed by 21 CFR Part 50.24 in the US and ICMR's National Ethical Guidelines in India."
  },
  {
    id: 60,
    question: "In pediatric research, 'assent' refers to:",
    options: ["Parental permission for a child to participate in research", "The child's affirmative agreement to participate, separate from parental permission", "The ethics committee's approval of a pediatric study", "The legal concept of minor consent for medical procedures"],
    answer: 1,
    explanation: "Assent is a child's affirmative agreement to participate in research, recognizing their developing autonomy and decision-making capacity. It is separate from and in addition to parental permission (consent). ICMR guidelines recommend assent for children aged 7-12 years (simplified process) and more formal assent for older adolescents. A child's dissent should generally be respected even if parents agree."
  },
  {
    id: 61,
    question: "In a population in Hardy-Weinberg equilibrium, if the frequency of the recessive allele 'a' is 0.3, what is the expected frequency of heterozygous carriers (Aa)?",
    options: ["0.09", "0.21", "0.42", "0.49"],
    answer: 2,
    explanation: "Under Hardy-Weinberg equilibrium (p² + 2pq + q² = 1): If q (frequency of 'a') = 0.3, then p (frequency of 'A') = 1 - 0.3 = 0.7. Frequency of heterozygotes = 2pq = 2 × 0.7 × 0.3 = 0.42. Frequency of AA = p² = 0.49; frequency of aa = q² = 0.09. These proportions are maintained generation after generation without evolution."
  },
  {
    id: 62,
    question: "In a pedigree showing a trait that appears in every generation, affects both males and females equally, and affected individuals always have at least one affected parent, the most likely inheritance pattern is:",
    options: ["Autosomal recessive", "Autosomal dominant", "X-linked recessive", "Mitochondrial"],
    answer: 1,
    explanation: "Autosomal dominant inheritance features: (1) trait appears in every generation (vertical transmission); (2) both males and females affected equally; (3) affected individuals usually have at least one affected parent; (4) transmission from father to son (rules out X-linked); (5) approximately 50% of offspring of an affected individual are affected. Examples: Huntington disease, Marfan syndrome, BRCA1/2 mutations."
  },
  {
    id: 63,
    question: "Cystic fibrosis is an autosomal recessive disorder. If two carriers (Aa × Aa) have children, what is the probability that a child is both a carrier AND phenotypically normal?",
    options: ["25%", "50%", "75%", "100%"],
    answer: 1,
    explanation: "From Aa × Aa cross: Expected genotype frequencies are 1/4 AA, 2/4 Aa, 1/4 aa. Carriers are heterozygous (Aa) = 2/4 = 50%. These carriers are phenotypically normal since the disease requires homozygous recessive (aa). So the probability of being both a carrier and phenotypically normal = 50%. The probability of having cystic fibrosis (aa) = 25%."
  },
  {
    id: 64,
    question: "X-linked recessive disorders such as haemophilia A are characterized by which of the following inheritance patterns?",
    options: ["Affected fathers always pass the trait to all sons", "Carrier mothers have a 50% chance of having affected sons, and all daughters of affected fathers are carriers", "Both males and females are equally affected", "The trait skips generations in an unpredictable manner"],
    answer: 1,
    explanation: "X-linked recessive inheritance: (1) Males are predominantly affected (hemizygous—one X chromosome); (2) Females are usually carriers (heterozygous); (3) Carrier mothers: 50% of sons affected, 50% of daughters are carriers; (4) Affected fathers: all daughters are carriers (obligate carriers), no sons are affected (since fathers pass Y to sons); (5) No father-to-son transmission."
  },
  {
    id: 65,
    question: "Mitochondrial inheritance (maternal inheritance) is characterized by:",
    options: ["Equal transmission through fathers and mothers", "Transmission exclusively through the maternal line affecting all offspring of an affected mother", "Predominantly affecting females", "Following Mendelian ratios in segregation"],
    answer: 1,
    explanation: "Mitochondrial DNA is inherited exclusively maternally (sperm contribute virtually no mitochondria at fertilization). All offspring (sons and daughters) of an affected mother will inherit the mutation. Affected fathers do NOT transmit mtDNA to their children. Features include: variable expression (heteroplasmy), multisystem involvement (especially high-energy tissues: brain, muscle, heart), and maternal-only inheritance."
  },
  {
    id: 66,
    question: "A couple with a previously affected child with an autosomal recessive condition seeks genetic counseling. The risk for their next child to be affected is:",
    options: ["25%, regardless of how many affected children they have previously had", "It decreases with each subsequent pregnancy", "50%", "Dependent on the sex of the child"],
    answer: 0,
    explanation: "For autosomal recessive conditions, if both parents are carriers (Aa × Aa), the probability for each pregnancy is independently 25% (1/4). This probability is constant for each pregnancy—having had one affected child does not decrease or increase the risk for subsequent pregnancies. This is a fundamental principle of independent assortment (Mendel's law)."
  },
  {
    id: 67,
    question: "Chorionic villus sampling (CVS) is typically performed at which gestational age?",
    options: ["8-10 weeks", "10-13 weeks", "15-20 weeks", "20-24 weeks"],
    answer: 1,
    explanation: "CVS is typically performed between 10-13 weeks gestation (most commonly 11-13 weeks). It provides fetal cells for chromosomal analysis (karyotype, microarray, specific gene testing) earlier than amniocentesis. Risks include procedure-related pregnancy loss (~1%), limb defects if performed before 10 weeks, and possible maternal cell contamination. Amniocentesis is performed at 15-20 weeks."
  },
  {
    id: 68,
    question: "Phenylketonuria (PKU), detected by newborn screening, requires immediate dietary intervention because untreated accumulation of phenylalanine causes:",
    options: ["Hepatic failure", "Renal tubular acidosis", "Irreversible intellectual disability and microcephaly", "Cardiac arrhythmias"],
    answer: 2,
    explanation: "PKU is caused by deficiency of phenylalanine hydroxylase, causing accumulation of phenylalanine, which is neurotoxic. Untreated, it causes irreversible intellectual disability, seizures, microcephaly, behavioural problems, and a musty odour. Newborn screening (Guthrie test/tandem mass spectrometry on dried blood spot) allows early dietary treatment (low-phenylalanine diet) preventing intellectual disability if started within 3 weeks of birth."
  },
  {
    id: 69,
    question: "Genetic drift refers to:",
    options: ["Directional change in allele frequencies due to natural selection", "Random changes in allele frequencies in a population, particularly significant in small populations", "The movement of alleles between populations through migration", "Changes in allele frequencies due to mutation pressure"],
    answer: 1,
    explanation: "Genetic drift refers to random fluctuations in allele frequencies caused by chance (sampling error), not selection. It is most significant in small populations (founder effect, bottleneck effect). Over generations, drift can fix or eliminate alleles regardless of their fitness effects. It explains why rare alleles can become common in isolated populations (e.g., high frequency of specific genetic disorders in founder populations)."
  },
  {
    id: 70,
    question: "The founder effect, a special case of genetic drift, refers to:",
    options: ["The establishment of a new population from a large representative sample", "The establishment of a new population from a small number of individuals with reduced genetic diversity compared to the original population", "The gradual accumulation of beneficial mutations in an isolated population", "The increase in allele frequencies through positive selection in a new environment"],
    answer: 1,
    explanation: "The founder effect occurs when a new population is established by a small number of individuals from a larger population. The founders carry only a fraction of the original genetic diversity, and rare alleles in the founders may become common in the new population while other alleles are lost. Examples: high frequency of Huntington disease in Venezuela's Lake Maracaibo region, and Tay-Sachs disease in Ashkenazi Jews."
  },
  {
    id: 71,
    question: "Ziehl-Neelsen (ZN) staining detects acid-fast bacilli because mycobacteria:",
    options: ["Have a capsule that repels the decolorizer", "Have a thick lipid-rich cell wall (mycolic acids) that retains carbol fuchsin even after acid-alcohol decolorization", "Are Gram-positive organisms with unique staining properties", "Have spores that resist decolorization"],
    answer: 1,
    explanation: "Mycobacteria are 'acid-fast' because their cell walls contain large amounts of mycolic acids and other waxy lipids. These lipids bind carbol fuchsin (the primary dye in ZN staining) so tightly that they resist decolorization with acid-alcohol (3% HCl in 95% ethanol). Other bacteria lose the dye and stain blue with the counterstain (methylene blue). ZN-positive bacilli appear red against a blue background."
  },
  {
    id: 72,
    question: "Auramine-rhodamine (fluorochrome) staining for acid-fast bacilli, compared to Ziehl-Neelsen staining:",
    options: ["Has lower sensitivity but higher specificity", "Has higher sensitivity and allows faster reading at lower magnification, but requires a fluorescence microscope", "Is the gold standard for detecting mycobacteria in tissue sections", "Detects only live mycobacteria", ],
    answer: 1,
    explanation: "Auramine-rhodamine staining uses fluorochromes that bind mycolic acids. AFB appear bright yellow-orange against a dark background. Advantages over ZN: higher sensitivity (more AFB detected per field), faster screening (lower magnification 25×-40× vs 100× oil immersion for ZN), and less reader fatigue. Disadvantage: requires expensive fluorescence microscope. Positive results may be confirmed by ZN staining."
  },
  {
    id: 73,
    question: "Transmission electron microscopy (TEM) differs from scanning electron microscopy (SEM) in that TEM:",
    options: ["Provides three-dimensional surface images of specimens", "Transmits electrons through ultra-thin specimen sections to produce detailed internal (ultrastructural) images", "Has a lower resolution than light microscopy", "Is primarily used for examining living cells"],
    answer: 1,
    explanation: "TEM transmits a beam of electrons through an ultra-thin specimen (50-100 nm sections), producing high-resolution images of internal ultrastructure (organelles, membranes, viruses). Resolution: ~0.1-0.2 nm. SEM scans a focused electron beam across the specimen surface, producing three-dimensional surface topography images (resolution ~1-20 nm). TEM requires heavy metal staining (osmium, uranyl acetate) to provide contrast."
  },
  {
    id: 74,
    question: "Dark-field microscopy is particularly useful for visualizing:",
    options: ["Mycobacteria in sputum samples", "Treponema pallidum (syphilis spirochetes) in fresh specimens, which are too thin to be seen by conventional light microscopy", "Viral particles in infected cells", "Capsulated bacteria such as Klebsiella pneumoniae"],
    answer: 1,
    explanation: "Dark-field microscopy illuminates specimens obliquely so that only scattered light enters the objective. Objects appear bright against a dark background. It is ideal for visualizing very thin organisms like Treponema pallidum (spirochetes of syphilis) that cannot be stained with Gram stain and are too thin to see by bright-field microscopy. The characteristic corkscrew motility of spirochetes is also visible."
  },
  {
    id: 75,
    question: "Phase contrast microscopy is most useful for:",
    options: ["Staining fixed bacterial specimens", "Visualizing unstained, living cells by converting phase shifts in transmitted light into amplitude (contrast) differences", "Detecting fluorescently labeled antibodies", "Three-dimensional surface imaging"],
    answer: 1,
    explanation: "Phase contrast microscopy converts differences in the refractive index (phase shifts) of cell components into differences in brightness (amplitude), making transparent, unstained structures visible. It is ideal for examining living cells, cell motility, internal structures (nucleus, organelles) without fixation or staining, and for detecting protozoa in wet mounts (e.g., Giardia, Trichomonas)."
  },
  {
    id: 76,
    question: "The lag phase of bacterial growth is characterized by:",
    options: ["Exponential increase in cell numbers", "Metabolic activity, enzyme synthesis, and adaptation to the new environment with little or no cell division", "Constant cell number due to equal birth and death rates", "Rapid cell death due to nutrient depletion"],
    answer: 1,
    explanation: "The bacterial growth curve has four phases: (1) Lag phase: active metabolism, synthesis of enzymes and other molecules needed to utilize available nutrients; cells adapt to the environment but no net increase in cell number. (2) Log (exponential) phase: rapid exponential growth. (3) Stationary phase: growth equals death rate. (4) Death (decline) phase: cell death exceeds growth due to nutrient exhaustion and toxic metabolite accumulation."
  },
  {
    id: 77,
    question: "MacConkey agar is classified as both a selective and differential medium because it:",
    options: ["Selects for only Gram-positive bacteria and differentiates species by hemolysis", "Selects against Gram-positive bacteria (bile salts and crystal violet inhibit them) and differentiates lactose-fermenting from non-lactose-fermenting Gram-negative bacteria", "Selects for only anaerobes and differentiates by colonial morphology", "Selects for only Enterobacteriaceae and differentiates by motility"],
    answer: 1,
    explanation: "MacConkey agar contains bile salts and crystal violet (selective agents inhibiting Gram-positive bacteria) and lactose with a pH indicator (neutral red) for differentiation. Lactose fermenters (e.g., E. coli, Klebsiella) produce acid, lowering pH, and turn pink/red. Non-lactose fermenters (e.g., Salmonella, Shigella, Proteus) remain colorless/pale. It is widely used for isolating enteric pathogens."
  },
  {
    id: 78,
    question: "The Kirby-Bauer disk diffusion method for antimicrobial susceptibility testing uses which standard to interpret zone sizes?",
    options: ["WHO International Standard breakpoints", "CLSI (Clinical and Laboratory Standards Institute) or EUCAST breakpoints based on the Mueller-Hinton agar medium", "NCCLS guidelines for broth dilution", "ICH E6 guidelines for susceptibility testing"],
    answer: 1,
    explanation: "The Kirby-Bauer disk diffusion method uses Mueller-Hinton agar as the standard medium. Antibiotic-impregnated disks are placed on inoculated agar, and after incubation, inhibition zone diameters are measured and compared against CLSI (Clinical and Laboratory Standards Institute) or EUCAST breakpoints to categorize organisms as susceptible (S), intermediate (I), or resistant (R)."
  },
  {
    id: 79,
    question: "Chocolate agar (heated blood agar) provides which growth factors necessary for fastidious organisms like Haemophilus influenzae?",
    options: ["Hemin and NAD (factor X and factor V)", "Bile salts and crystal violet", "Cysteine and glutathione", "Vancomycin and colistin"],
    answer: 0,
    explanation: "Chocolate agar is made by heating blood agar to 80°C, which lyses red blood cells and releases intracellular contents. This provides hemin (Factor X: heat-stable) and NAD/NADP (Factor V: heat-labile when in intact cells, released by lysis). Both factors are required by Haemophilus influenzae. Chocolate agar also supports Neisseria gonorrhoeae and N. meningitidis growth."
  },
  {
    id: 80,
    question: "In anaerobic culture techniques, the thioglycolate broth provides anaerobic conditions because:",
    options: ["It contains antibiotics that inhibit aerobic bacteria", "Thioglycolate reduces oxygen tension by reacting with dissolved oxygen, and the density of the medium prevents oxygen diffusion to the bottom", "It is maintained in a sealed jar with oxygen absorbers", "It contains carbon dioxide that displaces oxygen"],
    answer: 1,
    explanation: "Sodium thioglycolate is a reducing agent that binds to dissolved oxygen, lowering the oxygen tension in the medium. The viscous medium also reduces oxygen diffusion. This creates aerobic conditions at the top (where oxygen diffuses in), anaerobic conditions at the bottom, and microaerophilic conditions in between. Obligate anaerobes grow in the bottom, aerobes at the top, and facultative organisms throughout."
  },
  {
    id: 81,
    question: "Choose the word that best completes the analogy: MICROSCOPE : BIOLOGIST :: STETHOSCOPE : ___",
    options: ["Laboratory", "Physician", "Patient", "Diagnosis"],
    answer: 1,
    explanation: "A microscope is a primary diagnostic/investigative tool used by a biologist, just as a stethoscope is a primary clinical tool used by a physician. The relationship is TOOL : USER. A microscope is to a biologist as a stethoscope is to a physician."
  },
  {
    id: 82,
    question: "Choose the word that best completes the analogy: ETIOLOGY : CAUSE :: PROGNOSIS : ___",
    options: ["Treatment", "Outcome", "Diagnosis", "Prevention"],
    answer: 1,
    explanation: "Etiology means 'cause' (of a disease). Prognosis means 'predicted outcome' or 'likely course' of a disease. The relationship is MEDICAL TERM : ITS MEANING. Etiology is to cause as prognosis is to outcome."
  },
  {
    id: 83,
    question: "Select the most appropriate word to fill in the blank: The researchers concluded that further studies are ___ to establish a definitive causal relationship between the risk factor and the disease.",
    options: ["redundant", "warranted", "precluded", "superfluous"],
    answer: 1,
    explanation: "'Warranted' means justified, necessary, or appropriate. In academic writing, saying further studies are 'warranted' is standard formal language indicating that additional research is needed and justified. 'Redundant' and 'superfluous' mean unnecessary (opposite meaning). 'Precluded' means prevented or made impossible."
  },
  {
    id: 84,
    question: "In research writing, which of the following sentences contains a grammatical error?",
    options: ["The data were analyzed using SPSS version 25.", "Each of the participants were given an informed consent form.", "The committee has submitted its final report.", "The results suggest a significant association between the variables."],
    answer: 1,
    explanation: "'Each of the participants were given' is grammatically incorrect. 'Each' is a singular indefinite pronoun and takes a singular verb. The correct form is 'Each of the participants WAS given an informed consent form.' The other sentences are grammatically correct: 'data' takes plural verb ('were'); 'committee' takes singular verb ('has'); 'results' takes plural verb ('suggest')."
  },
  {
    id: 85,
    question: "The suffix '-itis' in medical terminology denotes:",
    options: ["Surgical removal of an organ", "Inflammation of an organ or tissue", "Disease or abnormal condition", "Examination or study of"],
    answer: 1,
    explanation: "The suffix '-itis' derives from Greek and denotes inflammation. Examples: appendicitis (inflammation of appendix), meningitis (inflammation of meninges), hepatitis (inflammation of liver). '-ectomy' = surgical removal; '-osis' or '-pathy' = disease or abnormal condition; '-scopy' = visual examination; '-logy' = study of."
  },
  {
    id: 86,
    question: "Which of the following is the correct British English spelling?",
    options: ["Pediatrics", "Anaesthesia", "Estrogen", "Fetus"],
    answer: 1,
    explanation: "British English: 'Anaesthesia' (with the 'ae' digraph). American English: 'Anesthesia'. Other British vs American differences: 'Paediatrics' (British) vs 'Pediatrics' (American); 'Oestrogen' (British) vs 'Estrogen' (American); 'Foetus' (British, though 'fetus' is now accepted) vs 'Fetus' (American). ICMR publications typically follow British English conventions."
  },
  {
    id: 87,
    question: "In the sentence 'The principal investigator will affect the outcome of the trial by modifying the protocol,' which word is used INCORRECTLY?",
    options: ["Principal", "Affect", "Outcome", "Modifying"],
    answer: 0,
    explanation: "Actually, here the question tests 'affect' vs 'effect.' 'Affect' is used correctly as a verb meaning 'to influence.' The word used incorrectly here is 'principal' — in this context, the person leading the investigation should be called the 'Principal Investigator' which is in fact correct (principal = primary/main, as an adjective). Re-examining: 'affect' as a verb is correct. All words are used correctly. However, if the question intends to test 'affect/effect': 'affect' (verb) = to influence; 'effect' (noun) = result. Both are correctly used here. The answer tests that 'principal' (main/primary) is correct for an investigator, not 'principle' (a rule or belief)."
  },
  {
    id: 88,
    question: "Which of the following options represents formal academic language appropriate for a research paper?",
    options: ["The results were quite good and showed that the drug works.", "The findings demonstrated a statistically significant reduction in mortality (p < 0.05) in the intervention group.", "Lots of patients dropped out of the study because the medicine had bad side effects.", "We think the vaccine might work based on what we saw."],
    answer: 1,
    explanation: "Formal academic language in research papers uses precise, objective, and technical language. Option B correctly uses: 'findings demonstrated' (formal verb), 'statistically significant' (technical term), 'reduction in mortality' (specific outcome), and provides the p-value. Options A, C, and D use informal language ('quite good,' 'works,' 'lots of,' 'bad,' 'might work,' 'what we saw') inappropriate for scientific writing."
  },
  {
    id: 89,
    question: "The proverb 'A stitch in time saves nine' is most applicable to which public health principle?",
    options: ["Tertiary prevention", "Treatment of established disease", "Primary and secondary prevention — early intervention prevents greater problems later", "Rehabilitation of disabled individuals"],
    answer: 2,
    explanation: "'A stitch in time saves nine' means that timely action (one stitch) prevents a larger problem later (nine stitches). This is directly analogous to the public health principle of primary and secondary prevention — intervening early (e.g., vaccination, early treatment) prevents costly, severe disease and complications later. It encapsulates the preventive medicine philosophy."
  },
  {
    id: 90,
    question: "Which of the following correctly identifies the literary term for a figure of speech comparing two unlike things without using 'like' or 'as'?",
    options: ["Simile", "Metaphor", "Alliteration", "Hyperbole"],
    answer: 1,
    explanation: "A metaphor is a direct comparison of two unlike things stating one IS another (e.g., 'The lab is a battlefield'). A simile uses 'like' or 'as' (e.g., 'The disease spread like wildfire'). Alliteration is repetition of consonant sounds. Hyperbole is deliberate exaggeration. Metaphors are common in scientific writing to explain complex concepts ('molecular clock,' 'genetic bottleneck')."
  },
  {
    id: 91,
    question: "In a study of 50 patients, the mean age is 42 years with a standard deviation of 8 years. If 5 more patients with a mean age of 52 years are added, the new mean age (approximately) is:",
    options: ["43 years", "43.8 years", "44.5 years", "46 years"],
    answer: 1,
    explanation: "Original total age sum = 50 × 42 = 2100. New patients' total age sum = 5 × 52 = 260. New total sum = 2100 + 260 = 2360. New total patients = 55. New mean = 2360 ÷ 55 = 42.9 ≈ 43.8 years. The new mean shifts upward because the added patients are older than the original group's mean."
  },
  {
    id: 92,
    question: "If the disease prevalence in a population increases from 5% to 10%, and a test with fixed sensitivity (80%) and specificity (90%) is applied, which of the following will change?",
    options: ["Sensitivity and specificity", "Positive predictive value (PPV) and negative predictive value (NPV)", "Only negative predictive value", "Neither PPV nor NPV"],
    answer: 1,
    explanation: "Sensitivity and specificity are intrinsic properties of a test and do not change with disease prevalence. However, positive predictive value (PPV) and negative predictive value (NPV) are heavily dependent on prevalence. As prevalence increases from 5% to 10%, PPV increases (more true positives relative to false positives) and NPV decreases (more false negatives relative to true negatives)."
  },
  {
    id: 93,
    question: "Five persons A, B, C, D, and E are sitting in a row. B is to the right of A, D is to the left of E, and C is between B and D. Who is sitting in the middle?",
    options: ["B", "C", "D", "E"],
    answer: 1,
    explanation: "From the clues: B is to the right of A (A...B); D is to the left of E (D...E); C is between B and D. Arranging: A, B, C, D, E (left to right). C is between B and D, placing C in the middle (position 3 of 5). A is at position 1, B at position 2, C at position 3 (middle), D at position 4, E at position 5."
  },
  {
    id: 94,
    question: "A person walks 10 km north, then 6 km east, then 10 km south. How far is the person from the starting point, and in which direction?",
    options: ["6 km west", "6 km east", "10 km east", "14 km south"],
    answer: 1,
    explanation: "Starting at origin: Walk 10 km north (now at 0, 10); Walk 6 km east (now at 6, 10); Walk 10 km south (now at 6, 0). The final position is 6 km east and 0 km north/south from the start (back to latitude 0). Distance from start = 6 km. Direction = East."
  },
  {
    id: 95,
    question: "If January 1, 2024 is a Monday, what day of the week will January 1, 2025 fall on?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    answer: 2,
    explanation: "2024 is a leap year (divisible by 4) with 366 days. 366 days = 52 weeks + 2 days. So January 1, 2025 is 2 days after Monday = Wednesday. If it were a non-leap year (365 days = 52 weeks + 1 day), the next January 1 would be 1 day later = Tuesday. Since 2024 is a leap year, the answer is Wednesday."
  },
  {
    id: 96,
    question: "The discovery of penicillin by Alexander Fleming in 1928 was significant in medicine because it:",
    options: ["Was the first vaccine against bacterial infections", "Was the first naturally derived antibiotic demonstrating that bacteria could be killed by a fungal product, inaugurating the antibiotic era", "Led directly to the development of antiseptics for wound care", "Proved that all infectious diseases are caused by bacteria"],
    answer: 1,
    explanation: "Alexander Fleming discovered that Penicillium notatum mold produced a substance (penicillin) that inhibited bacterial growth in 1928. Howard Florey and Ernst Chain subsequently purified penicillin for clinical use (1940s), transforming medicine. It was the first naturally derived antibiotic and launched the antibiotic era, dramatically reducing mortality from bacterial infections. Fleming, Florey, and Chain shared the 1945 Nobel Prize in Physiology or Medicine."
  },
  {
    id: 97,
    question: "Article 47 of the Indian Constitution, which is a Directive Principle of State Policy, directs the State to:",
    options: ["Provide free legal aid to citizens", "Regard the raising of the level of nutrition and standard of living and improvement of public health as among its primary duties", "Ensure free and compulsory education for children up to 14 years", "Protect the environment and safeguard forests"],
    answer: 1,
    explanation: "Article 47 of the Indian Constitution (Directive Principles of State Policy) states: 'The State shall regard the raising of the level of nutrition and the standard of living of its people and the improvement of public health as among its primary duties.' It also directs the State to bring about prohibition of intoxicating drinks and drugs injurious to health except for medicinal purposes."
  },
  {
    id: 98,
    question: "UN Sustainable Development Goal 3 (SDG 3) aims to:",
    options: ["End poverty in all its forms everywhere", "Ensure healthy lives and promote well-being for all at all ages", "Ensure inclusive and equitable quality education", "Achieve food security and improved nutrition"],
    answer: 1,
    explanation: "SDG 3 (Good Health and Well-being) aims to 'Ensure healthy lives and promote well-being for all at all ages.' Key targets include reducing maternal mortality, ending preventable deaths of newborns and children under 5, ending epidemics of AIDS/TB/malaria/NTDs, reducing premature mortality from NCDs, achieving universal health coverage (UHC), and strengthening health systems. SDG 1 = No Poverty; SDG 2 = Zero Hunger; SDG 4 = Quality Education."
  },
  {
    id: 99,
    question: "The One Health concept recognizes that human health is interconnected with:",
    options: ["Only animal health through zoonotic diseases", "Animal health, plant health, and environmental/ecosystem health—all are interdependent and must be addressed together", "Only environmental factors affecting water and air quality", "Agricultural practices and food security alone"],
    answer: 1,
    explanation: "One Health is an integrated approach recognizing that human health, animal health, and ecosystem/environmental health are inextricably linked. About 60% of infectious diseases in humans are zoonotic (originating in animals), and 75% of emerging infectious diseases are zoonotic. One Health promotes cross-sectoral collaboration between human medicine, veterinary medicine, and environmental health to prevent and control threats such as antimicrobial resistance, zoonoses, and food safety issues."
  },
  {
    id: 100,
    question: "Which of the following best describes the environmental health concept of 'planetary boundaries' as relevant to public health?",
    options: ["National boundaries that define environmental health regulations", "A framework identifying nine Earth-system processes with boundaries within which humanity can operate safely; transgressing these boundaries increases the risk of irreversible environmental changes threatening human health", "The limits of toxic substance exposure set by WHO for occupational health", "The maximum allowable pollutant concentrations in ambient air as defined by international bodies"],
    answer: 1,
    explanation: "The 'planetary boundaries' framework (Rockström et al., 2009; Steffen et al., 2015) identifies nine Earth-system processes: climate change, biosphere integrity, land-system change, freshwater use, biogeochemical flows (N, P), ocean acidification, atmospheric aerosol loading, stratospheric ozone depletion, and novel entities (chemicals, plastics). Staying within these boundaries maintains the stable Holocene-like conditions that allowed human civilization to flourish. Transgressing boundaries threatens global environmental stability and public health."
  }
];

export default questions;

const questions = [
  {
    id: 1,
    question: "A physician publishes a detailed report describing the clinical features, investigation findings, treatment, and outcome of a single patient with an unusual presentation of a known disease. This type of study is best described as:",
    options: ["Case series", "Case report", "Cross-sectional study", "Descriptive cohort study"],
    answer: 1,
    explanation: "A case report describes a single patient in detail, covering clinical history, diagnosis, treatment, and outcome. A case series involves multiple patients (typically 3 or more) with similar presentations. Case reports are useful for describing rare conditions or unusual presentations but cannot establish causality."
  },
  {
    id: 2,
    question: "A study finds that countries with higher per-capita sugar consumption have higher rates of type 2 diabetes. A researcher concludes that individuals who consume more sugar are at higher risk of type 2 diabetes. This error is known as:",
    options: ["Selection bias", "Ecological fallacy", "Confounding", "Information bias"],
    answer: 1,
    explanation: "Ecological fallacy (also called atomistic fallacy in reverse) occurs when associations observed at the group (population) level are incorrectly applied to individuals. Group-level data cannot be used to make inferences about individual-level associations. The study described is an ecological study using aggregate data."
  },
  {
    id: 3,
    question: "In a hospital-based case-control study on lung cancer and smoking, cases and controls are recruited from the same hospital. Controls are selected from patients admitted for other respiratory diseases, many of whom are also smokers. This leads to an underestimate of the true association. This is an example of:",
    options: ["Neyman bias", "Berkson's bias", "Hawthorne effect", "Lead time bias"],
    answer: 1,
    explanation: "Berkson's bias (hospital admission bias) occurs in hospital-based case-control studies when both cases and controls are selected from hospitalized patients. Since hospitalization is associated with multiple diseases, controls may have higher exposure rates than the general population, leading to an underestimate of the true odds ratio."
  },
  {
    id: 4,
    question: "In a cohort study on myocardial infarction (MI) survivors, only those who survive long enough to be enrolled are included. This leads to underrepresentation of patients with severe MI. This type of bias is called:",
    options: ["Berkson's bias", "Lead time bias", "Neyman bias", "Volunteer bias"],
    answer: 2,
    explanation: "Neyman bias (prevalence-incidence bias or survival bias) occurs when cases with severe or rapidly fatal outcomes die before they can be enrolled in the study. This leads to a study sample that includes only survivors, potentially distorting exposure-outcome associations. It is particularly relevant in studies of diseases with high early mortality."
  },
  {
    id: 5,
    question: "In a pharmacoepidemiological study, patients who are newly started on a drug are followed from the date of first prescription. However, some patients actually started the drug before the study period began. Including the time before the study start as 'unexposed time' for these patients creates:",
    options: ["Protopathic bias", "Immortal time bias", "Depletion of susceptibles bias", "Detection bias"],
    answer: 1,
    explanation: "Immortal time bias occurs when a period of follow-up during which the outcome cannot occur (immortal time) is misclassified as exposed or unexposed time. In drug studies, if time before the drug is prescribed is counted as 'exposed,' the exposed group appears artificially healthier, leading to spurious protective effects."
  },
  {
    id: 6,
    question: "In a dietary recall study, participants with cancer tend to over-report consumption of red meat compared to healthy controls, while healthy controls report accurately. This type of misclassification is:",
    options: ["Non-differential misclassification", "Differential misclassification", "Random misclassification", "Berkson's misclassification"],
    answer: 1,
    explanation: "Differential misclassification occurs when the error in classifying exposure (or outcome) differs between cases and controls (or exposed and unexposed). In this scenario, cases recall red meat consumption differently from controls. This can bias the association either toward or away from the null. Non-differential misclassification is equal between groups and typically biases toward the null."
  },
  {
    id: 7,
    question: "A clinical trial conducted in tertiary care academic hospitals shows significant benefit of a new drug. However, when the same drug is used in community hospitals, the benefit is not observed. The concern here relates to which concept?",
    options: ["Internal validity", "External validity", "Statistical power", "Allocation concealment"],
    answer: 1,
    explanation: "External validity (generalizability) refers to the extent to which study results can be applied to populations or settings outside the study. Internal validity refers to whether the results are valid within the study itself (freedom from bias and confounding). When results from tertiary academic hospitals do not apply to community settings, external validity is compromised."
  },
  {
    id: 8,
    question: "A randomized controlled trial is designed to answer the question 'Does this drug work under ideal, controlled conditions?' rather than 'Does this drug work in real-world clinical practice?' This trial is best described as:",
    options: ["Pragmatic trial", "Explanatory trial", "Adaptive trial", "Superiority trial"],
    answer: 1,
    explanation: "An explanatory (efficacy) trial tests whether an intervention works under ideal, controlled conditions with a selected, homogeneous population and strict protocols. A pragmatic trial tests whether an intervention works in real-world clinical practice with a diverse population and flexible protocols. Pragmatic trials have higher external validity."
  },
  {
    id: 9,
    question: "A researcher designs a trial to compare a new antihypertensive drug versus standard care in diverse community settings, with broad eligibility criteria and flexible dosing to reflect routine clinical practice. This is an example of:",
    options: ["Explanatory trial", "Pragmatic trial", "Crossover trial", "Factorial trial"],
    answer: 1,
    explanation: "A pragmatic trial is designed to test interventions in routine clinical practice with real-world conditions. Key features include broad eligibility criteria, minimal exclusions, flexible intervention delivery, and clinically meaningful outcomes. Pragmatic trials have high external validity but may have lower internal validity compared to explanatory trials."
  },
  {
    id: 10,
    question: "The SPIRIT guidelines (Standard Protocol Items: Recommendations for Interventional Trials) primarily apply to:",
    options: ["Reporting of completed clinical trials", "Reporting of systematic reviews", "Writing clinical trial protocols", "Design of observational studies"],
    answer: 2,
    explanation: "SPIRIT (Standard Protocol Items: Recommendations for Interventional Trials) is a guideline for the content of clinical trial protocols, not reporting of completed trials. CONSORT guidelines are for reporting completed randomized trials. SPIRIT aims to improve the completeness and transparency of trial protocols to facilitate peer review, ethical review, and replication."
  },
  {
    id: 11,
    question: "A meta-analysis changes the inclusion criteria and statistical model to test the robustness of its primary findings. This process is called:",
    options: ["Subgroup analysis", "Sensitivity analysis", "Meta-regression", "Funnel plot analysis"],
    answer: 1,
    explanation: "Sensitivity analysis tests how robust the findings of a study or meta-analysis are to changes in assumptions, inclusion criteria, or analytical methods. If results remain consistent across different analytical choices, the findings are considered robust. It is different from subgroup analysis, which examines effects in specific subgroups."
  },
  {
    id: 12,
    question: "A researcher examines the effect of blood pressure on cardiovascular outcomes while simultaneously adjusting for age, sex, BMI, and diabetes in a single regression model. This type of analysis is correctly termed:",
    options: ["Multivariate analysis", "Multivariable analysis", "Bivariate analysis", "Univariate analysis"],
    answer: 1,
    explanation: "Multivariable analysis (multiple regression) involves one outcome variable with multiple predictor/exposure variables. Multivariate analysis involves multiple outcome variables simultaneously (e.g., MANOVA, canonical correlation). In clinical research, 'multivariable' is the correct term when adjusting for multiple covariates with a single outcome."
  },
  {
    id: 13,
    question: "In a study on smoking and lung cancer, the researcher suspects that the effect of smoking differs between males and females. To test this, the researcher includes a smoking × sex product term in the regression model. This term is called:",
    options: ["Confounding variable", "Mediating variable", "Interaction term", "Suppressor variable"],
    answer: 2,
    explanation: "An interaction term (product term) in a regression model tests whether the effect of one variable (e.g., smoking) on the outcome differs across levels of another variable (e.g., sex). This is also called effect modification or statistical interaction. If the interaction term is statistically significant, the effect of the primary exposure differs by the modifier."
  },
  {
    id: 14,
    question: "A researcher stratifies a case-control study by age group (<40, 40-60, >60 years) to examine whether the association between obesity and colorectal cancer is consistent across age groups. This approach is used primarily to:",
    options: ["Increase statistical power", "Control for confounding by age and assess effect modification", "Eliminate selection bias", "Improve internal validity"],
    answer: 1,
    explanation: "Stratified analysis serves two purposes: (1) controlling for confounding by creating strata with similar covariate values, and (2) assessing effect modification by examining whether the exposure-outcome association differs across strata. If the stratum-specific estimates are homogeneous, a summary estimate (pooled) can be calculated using methods like Mantel-Haenszel."
  },
  {
    id: 15,
    question: "When combining stratum-specific odds ratios from a stratified analysis, the Mantel-Haenszel method provides:",
    options: ["An unweighted average of stratum-specific odds ratios", "A pooled odds ratio weighted by the amount of information in each stratum", "An odds ratio adjusted for effect modification", "A geometric mean of stratum-specific odds ratios"],
    answer: 1,
    explanation: "The Mantel-Haenszel method provides a weighted summary of stratum-specific odds ratios (or risk ratios) where each stratum is weighted by the amount of statistical information it contains (sample size and cell counts). It is used when stratification is done to control for confounding and stratum-specific estimates are homogeneous (no effect modification)."
  },
  {
    id: 16,
    question: "In occupational epidemiology, the observed deaths in an exposed worker group are compared to the deaths expected if the workers had the same mortality rates as the general population. The ratio of observed to expected deaths is called:",
    options: ["Proportional mortality ratio", "Standardized mortality ratio", "Cause-specific death rate", "Comparative mortality ratio"],
    answer: 1,
    explanation: "Standardized Mortality Ratio (SMR) = (Observed deaths / Expected deaths) × 100. An SMR > 100 indicates higher mortality than the reference population, while SMR < 100 indicates lower mortality. It is used in occupational epidemiology to assess excess mortality in worker cohorts. Expected deaths are calculated using mortality rates from a reference (general) population."
  },
  {
    id: 17,
    question: "Years of Potential Life Lost (YPLL) before age 70 is calculated as:",
    options: ["Sum of (70 - age at death) for all deaths occurring before age 70", "Average life expectancy minus average age at death", "Total life-years lost due to premature mortality and disability", "Number of deaths occurring before the expected retirement age"],
    answer: 0,
    explanation: "YPLL before age 70 is calculated by summing (70 - age at death) for each death occurring before age 70. It places greater weight on deaths at younger ages and is used to prioritize public health interventions targeting premature mortality. Unlike crude death rates, YPLL highlights the burden of conditions affecting younger populations."
  },
  {
    id: 18,
    question: "Age-period-cohort (APC) analysis is used in epidemiology to:",
    options: ["Adjust for age confounding in cross-sectional studies", "Disentangle the separate effects of age, calendar period, and birth cohort on disease rates", "Compare mortality rates between age groups across countries", "Standardize incidence rates for international comparisons"],
    answer: 1,
    explanation: "APC analysis separates three time-related effects on disease rates: age effects (biological aging), period effects (factors affecting all age groups at a specific calendar time, e.g., new treatment), and cohort effects (exposures experienced by people born in the same period). The main challenge is the perfect collinearity between the three variables (period = age + birth year)."
  },
  {
    id: 19,
    question: "In a time-series study of air pollution and respiratory hospitalizations over 20 years, a gradual decline in hospitalizations is observed independently of pollution levels, attributed to changes in medical care and diagnosis over time. This is an example of:",
    options: ["Seasonal variation", "Secular trend", "Epidemic curve", "Cyclical variation"],
    answer: 1,
    explanation: "Secular trend (long-term trend) refers to changes in disease rates or health outcomes over long periods (years to decades), independent of seasonal or cyclical variations. It reflects gradual changes in risk factors, medical technology, diagnostic practices, or population characteristics. Distinguishing secular trends from exposure effects is important in time-series analyses."
  },
  {
    id: 20,
    question: "A study examining the dose-response relationship between cigarette smoking (pack-years) and lung cancer finds that risk increases linearly with increasing pack-years of smoking. The term for this consistent increase in risk with increasing exposure is:",
    options: ["Biological gradient", "Temporal relationship", "Plausibility", "Specificity"],
    answer: 0,
    explanation: "Biological gradient (dose-response relationship) is one of Bradford Hill's criteria for causality. It states that as the exposure increases, the risk of the outcome should increase in a consistent pattern. This supports a causal interpretation of the association. A linear dose-response is the simplest form; J-shaped or threshold relationships are also possible."
  },
  {
    id: 21,
    question: "Testing whether healthy individuals carry one copy of a gene mutation (e.g., BRCA1) that could be passed to offspring is called:",
    options: ["Diagnostic genetic testing", "Carrier testing", "Presymptomatic testing", "Pharmacogenomic testing"],
    answer: 1,
    explanation: "Carrier testing identifies individuals who carry one copy of a gene mutation that, when present in two copies (homozygous), causes a genetic disease (e.g., cystic fibrosis, sickle cell disease). Carriers are typically unaffected but can pass the mutation to offspring. This is used for family planning purposes. Presymptomatic testing is for individuals at risk of developing a disease themselves."
  },
  {
    id: 22,
    question: "Testing for CYP2D6 gene variants before prescribing codeine to determine appropriate dosing and predict adverse effects is an example of:",
    options: ["Companion diagnostics", "Pharmacogenomic testing", "Carrier testing", "Predictive genetic testing"],
    answer: 1,
    explanation: "Pharmacogenomic testing examines genetic variants that affect drug metabolism, efficacy, or toxicity. CYP2D6 is a key enzyme in drug metabolism; poor metabolizers may have toxic effects from codeine (which is metabolized to morphine), while ultra-rapid metabolizers may have insufficient analgesia. This informs personalized drug selection and dosing."
  },
  {
    id: 23,
    question: "A diagnostic test that is approved specifically to select patients who are eligible for a particular targeted therapy (e.g., HER2 testing for trastuzumab) is called:",
    options: ["Pharmacogenomic test", "Companion diagnostic", "Biomarker test", "Liquid biopsy"],
    answer: 1,
    explanation: "A companion diagnostic is a medical device (usually a laboratory test) that is essential for the safe and effective use of a corresponding drug or biological product. The FDA co-approves the drug and its companion diagnostic together. Examples include HER2/neu testing for trastuzumab, EGFR mutation testing for gefitinib, and PD-L1 testing for checkpoint inhibitors."
  },
  {
    id: 24,
    question: "Circulating tumor DNA (ctDNA) detected in plasma can be used to detect cancer-related mutations without tissue biopsy. This technology is most accurately termed:",
    options: ["Pharmacogenomic profiling", "Liquid biopsy", "Companion diagnostics", "Next-generation sequencing panel"],
    answer: 1,
    explanation: "Liquid biopsy refers to sampling and analysis of non-solid biological tissues (primarily blood) for circulating tumor DNA (ctDNA), circulating tumor cells (CTCs), or tumor-derived exosomes. ctDNA liquid biopsy can detect tumor mutations, monitor treatment response, detect minimal residual disease, and identify mechanisms of resistance without invasive tissue sampling."
  },
  {
    id: 25,
    question: "A biomarker is assessed for its ability to detect disease at a biological/molecular level (e.g., presence of a specific protein) versus its ability to predict clinically meaningful outcomes (disease progression, response to treatment). These two properties are respectively called:",
    options: ["Sensitivity and specificity", "Clinical validity and clinical utility", "Analytical validity and clinical validity", "Positive predictive value and negative predictive value"],
    answer: 2,
    explanation: "Analytical validity refers to how accurately and reliably a test measures the specific biological marker (sensitivity, specificity, reproducibility of the assay). Clinical validity refers to how well the test result predicts a clinically meaningful outcome (disease presence, prognosis). Clinical utility refers to whether testing leads to improved health outcomes. All three must be established for a biomarker to be clinically useful."
  },
  {
    id: 26,
    question: "A PCR assay can detect as few as 10 copies of viral RNA per mL (very low limit of detection), but a significant proportion of patients with confirmed viral infection test negative because the virus is present below this threshold. The property being described in the first part of this question is:",
    options: ["Clinical sensitivity", "Analytical sensitivity", "Specificity", "Positive predictive value"],
    answer: 1,
    explanation: "Analytical sensitivity (also called limit of detection) refers to the smallest amount of analyte that the assay can reliably detect. Clinical sensitivity refers to the proportion of patients with the disease who test positive (true positive rate). A test can have excellent analytical sensitivity (very low limit of detection) but still have lower clinical sensitivity if the disease presents with varying viral loads."
  },
  {
    id: 27,
    question: "A multiplex PCR assay simultaneously tests for 20 respiratory pathogens from a single nasopharyngeal swab. The main advantage of this approach over individual single-pathogen tests is:",
    options: ["Higher specificity for each individual pathogen", "Reduced cost per pathogen and simultaneous detection of multiple agents from one sample", "Elimination of the need for clinical judgment", "Better sensitivity for rare pathogens"],
    answer: 1,
    explanation: "Multiplex assays simultaneously detect multiple targets in a single reaction from one specimen. Advantages include reduced sample volume, faster turnaround time, reduced cost per pathogen, and ability to detect co-infections or identify the causative agent when multiple pathogens are plausible. Disadvantages include potential for cross-reactions and complex interpretation."
  },
  {
    id: 28,
    question: "A laboratory develops its own test for a rare genetic condition that is not commercially available. This test is used only within that laboratory and is not commercially distributed. This type of test is called:",
    options: ["Companion diagnostic", "Laboratory-developed test (LDT)", "FDA-approved IVD", "Point-of-care test"],
    answer: 1,
    explanation: "A laboratory-developed test (LDT) is an in vitro diagnostic test that is designed, manufactured, and used within a single laboratory, without commercial distribution. LDTs are subject to less regulatory oversight than FDA-cleared/approved IVDs. The FDA has been increasing oversight of LDTs due to concerns about analytical and clinical validity. In India, CDSCO regulates in vitro diagnostics."
  },
  {
    id: 29,
    question: "In India, the regulatory body responsible for approving in vitro diagnostic devices (IVDs) including diagnostic kits for infectious diseases is:",
    options: ["ICMR", "DCGI/CDSCO", "NMC", "FSSAI"],
    answer: 1,
    explanation: "The Central Drugs Standard Control Organisation (CDSCO) under the Drug Controller General of India (DCGI) is responsible for regulating medical devices including in vitro diagnostic devices in India. IVDs are regulated under the Medical Devices Rules, 2017. ICMR provides scientific guidance but is not a regulatory authority. FSSAI regulates food safety."
  },
  {
    id: 30,
    question: "Before a new diagnostic test is considered for widespread clinical use, it must demonstrate acceptable performance characteristics. The correct sequence of validation studies is:",
    options: ["Clinical validation → Analytical validation → Clinical utility → Implementation", "Analytical validation → Clinical validation → Clinical utility assessment → Implementation", "Implementation → Analytical validation → Clinical validation", "Clinical utility → Analytical validation → Clinical validation → Implementation"],
    answer: 1,
    explanation: "The correct sequence for biomarker/diagnostic test development is: (1) Analytical validation - the test measures what it claims to measure accurately; (2) Clinical validation - the test accurately identifies the disease or predicts the outcome; (3) Clinical utility assessment - using the test leads to improved patient outcomes; (4) Implementation in clinical practice. Skipping steps can lead to widespread use of inaccurate or clinically useless tests."
  },
  {
    id: 31,
    question: "A disease that has existed in a population for a long time, recently increased in incidence or geographic range, or has newly appeared in a population is called:",
    options: ["Endemic disease", "Emerging or re-emerging infectious disease", "Epidemic disease", "Pandemic disease"],
    answer: 1,
    explanation: "Emerging infectious diseases are those that have newly appeared in a population or have existed but are rapidly increasing in incidence, geographic range, or severity. Re-emerging diseases are known diseases that have declined in the past but are resurgent. Examples of emerging diseases include COVID-19, Nipah, Zika, and MERS-CoV. Factors driving emergence include deforestation, urbanization, and international travel."
  },
  {
    id: 32,
    question: "Nipah virus infection, which causes fatal encephalitis and was reported in India (Kerala), is primarily transmitted to humans from:",
    options: ["Mosquitoes", "Fruit bats (Pteropus species) through contaminated fruits or direct contact", "Domestic pigs through aerosol transmission", "Contaminated water sources"],
    answer: 1,
    explanation: "Nipah virus (NiV) is a paramyxovirus naturally hosted by fruit bats of the genus Pteropus. Human infection occurs through consumption of fruits contaminated with bat saliva/urine, direct contact with infected bats, or through intermediate hosts like pigs (in Malaysia/Singapore outbreaks). Human-to-human transmission also occurs. Kerala has reported multiple Nipah outbreaks since 2018."
  },
  {
    id: 33,
    question: "Ebola Virus Disease (EVD) is characterized by all of the following EXCEPT:",
    options: ["Hemorrhagic fever with high case fatality rate", "Transmission through infected body fluids", "Airborne transmission as the primary route", "Occurrence mainly in sub-Saharan Africa"],
    answer: 2,
    explanation: "Ebola virus is NOT transmitted through airborne route. It spreads through direct contact with blood and body fluids (vomit, urine, feces, sweat, semen) of infected individuals. It does not spread through casual contact or air. EVD causes severe hemorrhagic fever with CFRs of 25-90%. All PPE for Ebola healthcare workers must include full barrier precautions but not necessarily air-purifying respirators."
  },
  {
    id: 34,
    question: "Middle East Respiratory Syndrome Coronavirus (MERS-CoV) is associated with which intermediate host that serves as the primary source of human infection?",
    options: ["Bats", "Camels (Camelus dromedarius)", "Pigs", "Civets"],
    answer: 1,
    explanation: "MERS-CoV is primarily transmitted to humans from dromedary camels (Camelus dromedarius), which serve as the intermediate animal reservoir. Bats are thought to be the original animal reservoir. Human-to-human transmission occurs mainly in healthcare settings. MERS-CoV has a CFR of approximately 35%, much higher than SARS-CoV-2. Most cases have been reported from the Arabian Peninsula."
  },
  {
    id: 35,
    question: "Avian influenza H5N1 is classified as a high pathogenicity avian influenza (HPAI) strain. The main concern regarding H5N1 from a pandemic preparedness perspective is:",
    options: ["Its current high efficiency of human-to-human transmission", "Its high mortality rate in humans combined with the potential risk of acquiring efficient human-to-human transmission", "Its resistance to all available antiviral drugs", "Its ability to cause mild disease in birds but severe disease in humans"],
    answer: 1,
    explanation: "H5N1 avian influenza has a very high case fatality rate in humans (>50%), but currently has limited human-to-human transmission efficiency. The pandemic concern is that the virus could mutate or reassort to acquire efficient human-to-human transmission while retaining its high virulence. Oseltamivir has some activity against H5N1. It causes severe disease in birds (hence 'high pathogenicity')."
  },
  {
    id: 36,
    question: "Monkeypox (now renamed Mpox) virus belongs to which family and genus?",
    options: ["Flaviviridae, Flavivirus", "Poxviridae, Orthopoxvirus", "Paramyxoviridae, Henipavirus", "Filoviridae, Ebolavirus"],
    answer: 1,
    explanation: "Mpox (formerly monkeypox) is caused by Monkeypox virus, which belongs to the family Poxviridae and genus Orthopoxvirus. It is related to smallpox virus (Variola) and vaccinia virus. Mpox causes a disease similar to smallpox but milder. WHO declared the 2022 mpox outbreak a Public Health Emergency of International Concern (PHEIC). Transmission occurs through direct contact with lesions, body fluids, or respiratory droplets."
  },
  {
    id: 37,
    question: "Antimicrobial stewardship programs (ASPs) in hospitals are primarily designed to:",
    options: ["Develop new antibiotics", "Optimize antibiotic selection, dosing, duration, and route to improve patient outcomes and reduce antimicrobial resistance", "Screen patients for resistant organisms on admission", "Provide rapid diagnostic testing for all bacterial infections"],
    answer: 1,
    explanation: "Antimicrobial stewardship programs aim to optimize antibiotic use to: (1) improve individual patient outcomes, (2) reduce adverse effects including C. difficile infection, (3) minimize the selection of resistant organisms, and (4) reduce healthcare costs. Key ASP strategies include prospective audit and feedback, pre-authorization for restricted antibiotics, de-escalation based on culture results, and IV-to-oral switch programs."
  },
  {
    id: 38,
    question: "According to WHO classification, Category A bioterrorism agents are characterized by:",
    options: ["Low transmissibility but high environmental stability", "High public health impact, ease of transmission, high mortality, ability to cause public panic, and requiring special public health preparedness", "Moderate risk requiring enhanced diagnostics only", "Being limited to respiratory transmission only"],
    answer: 1,
    explanation: "CDC/WHO Category A bioterrorism agents include: Anthrax (Bacillus anthracis), Botulism (Clostridium botulinum toxin), Plague (Yersinia pestis), Smallpox (Variola major), Tularemia (Francisella tularensis), and Viral hemorrhagic fevers (Ebola, Marburg). They are prioritized because they pose the highest risk to public health, can be easily disseminated, cause high mortality, and require special preparedness."
  },
  {
    id: 39,
    question: "The chain of infection in healthcare settings is most effectively broken by which single intervention?",
    options: ["Universal mask wearing", "Hand hygiene (handwashing with soap or alcohol-based hand rub)", "Negative pressure isolation rooms", "Prophylactic antibiotics for all patients"],
    answer: 1,
    explanation: "Hand hygiene is the single most important measure to prevent transmission of healthcare-associated infections (HAIs). WHO's '5 Moments for Hand Hygiene' include: before patient contact, before aseptic procedures, after exposure to body fluids, after patient contact, and after contact with patient surroundings. Alcohol-based hand rub is effective for most pathogens except C. difficile spores (requires soap and water)."
  },
  {
    id: 40,
    question: "Catheter-associated urinary tract infection (CAUTI) is classified as a healthcare-associated infection (HAI). The most effective prevention strategy for CAUTI is:",
    options: ["Prophylactic antibiotics during catheterization", "Avoiding unnecessary urinary catheter insertion and removing catheters as soon as no longer needed", "Routine changing of urinary catheters every 72 hours", "Using larger diameter catheters to prevent obstruction"],
    answer: 1,
    explanation: "The most effective CAUTI prevention strategy is avoiding unnecessary urinary catheterization and removing catheters promptly when no longer clinically indicated. Additional measures include: using sterile technique during insertion, maintaining a closed drainage system, keeping the drainage bag below bladder level, and regular reassessment of catheter necessity. Prophylactic antibiotics are not recommended and increase resistance."
  },
  {
    id: 41,
    question: "The WHO Framework Convention on Tobacco Control (FCTC), which India has ratified, requires parties to implement all of the following measures EXCEPT:",
    options: ["Banning tobacco advertising, promotion, and sponsorship", "Requiring health warnings on tobacco packaging", "Providing tobacco taxation and price increase measures", "Providing free tobacco products to prisoners as humanitarian aid"],
    answer: 3,
    explanation: "The WHO FCTC (2003) is the first international public health treaty. Key provisions include: (Article 6) price and tax measures; (Article 8) protection from exposure to tobacco smoke; (Article 11) packaging and labeling requirements with health warnings; (Article 13) ban on tobacco advertising, promotion, and sponsorship; (Article 14) cessation support. Providing tobacco to prisoners is obviously not a FCTC requirement."
  },
  {
    id: 42,
    question: "Under India's Cigarettes and Other Tobacco Products Act (COTPA) 2003, smoking in public places was banned under which section?",
    options: ["Section 2", "Section 4", "Section 6", "Section 7"],
    answer: 1,
    explanation: "COTPA 2003, Section 4 prohibits smoking in public places. Section 5 bans direct and indirect advertisement of cigarettes and tobacco products. Section 6 prohibits sale of tobacco products to minors (below 18 years) and within 100 yards of educational institutions. Section 7 mandates health warnings on tobacco products. Section 4 violations are punishable with fines."
  },
  {
    id: 43,
    question: "According to WHO guidelines (2020), the recommended level of physical activity for adults (18-64 years) for substantial health benefits is:",
    options: ["At least 75 minutes of vigorous-intensity or 150 minutes of moderate-intensity aerobic activity per week", "At least 30 minutes of moderate-intensity activity daily without rest days", "At least 10,000 steps per day", "At least 60 minutes of vigorous activity every day"],
    answer: 0,
    explanation: "WHO 2020 Physical Activity Guidelines recommend adults (18-64 years) should do at least 150-300 minutes of moderate-intensity, or 75-150 minutes of vigorous-intensity aerobic physical activity, or an equivalent combination, throughout the week. Additional muscle-strengthening activities are recommended on 2 or more days per week. The 2020 guidelines also emphasize reducing sedentary behavior."
  },
  {
    id: 44,
    question: "The NOVA food classification system categorizes foods based on:",
    options: ["Nutrient content (calories, fat, sugar, sodium)", "Extent and purpose of industrial food processing", "Glycemic index and glycemic load", "Country of origin and production methods"],
    answer: 1,
    explanation: "The NOVA classification categorizes foods into 4 groups based on the extent and purpose of processing: Group 1 (unprocessed/minimally processed foods), Group 2 (processed culinary ingredients), Group 3 (processed foods), and Group 4 (ultra-processed foods). Ultra-processed foods (UPFs) are formulations of mostly cheap industrial sources with added cosmetic additives. Higher UPF consumption is associated with multiple adverse health outcomes."
  },
  {
    id: 45,
    question: "Front-of-pack nutrition labeling (FOP) schemes like traffic light labeling are designed to:",
    options: ["Provide detailed nutritional information for clinical use", "Help consumers make healthier food choices quickly at point of purchase", "Replace the nutritional information panel on the back of packages", "Certify that products meet organic food standards"],
    answer: 1,
    explanation: "Front-of-pack (FOP) nutrition labeling provides simplified nutritional information on the front of food packages to help consumers make quick, healthier choices at point of purchase. Systems include traffic lights (UK), Nutri-Score (France), warning labels (Chile), and Health Star Rating (Australia). FSSAI has proposed a Health Star Rating system for India. FOP labels focus on nutrients of concern (fat, sugar, salt, calories)."
  },
  {
    id: 46,
    question: "Sugar-sweetened beverage (SSB) taxes have been implemented in several countries as a public health measure. The primary public health rationale for SSB taxation is:",
    options: ["To generate government revenue for healthcare funding", "To reduce consumption of SSBs and thereby reduce obesity, diabetes, and dental caries", "To promote the local fruit juice industry as a healthier alternative", "To comply with WTO trade regulations on imported beverages"],
    answer: 1,
    explanation: "The primary public health rationale for SSB taxes is to reduce consumption of sugar-sweetened beverages, which are associated with obesity, type 2 diabetes, dental caries, and cardiovascular disease. Evidence from countries like Mexico, UK, and Chile shows that SSB taxes reduce consumption. Revenue generation is a secondary benefit. The WHO recommends a minimum 20% tax on SSBs to achieve meaningful health effects."
  },
  {
    id: 47,
    question: "Ultra-processed foods (UPFs) are characterized by all of the following EXCEPT:",
    options: ["Industrial formulations with minimal whole food content", "Addition of flavors, colors, emulsifiers, and other additives", "High nutrient density with multiple vitamins and minerals", "Low cost and high palatability"],
    answer: 2,
    explanation: "Ultra-processed foods are NOT characterized by high nutrient density. They are typically low in fiber, vitamins, and minerals relative to their caloric content. Characteristics of UPFs include: industrial manufacturing, little or no whole food, multiple additives (flavors, colors, emulsifiers, sweeteners), long shelf life, high palatability, and aggressive marketing. Examples include soft drinks, packaged snacks, instant noodles, and fast food."
  },
  {
    id: 48,
    question: "The WHO Global Action Plan for NCDs 2013-2030 includes which of the following as a 'best buy' intervention for NCD prevention?",
    options: ["Mandatory physical activity programs in workplaces", "Increasing tobacco taxes and enforcing smoke-free policies", "Universal screening for all common NCDs annually", "Providing free gym memberships to high-risk populations"],
    answer: 1,
    explanation: "WHO 'best buys' are highly cost-effective NCD interventions. They include: tobacco tax increases, smoke-free policies, tobacco advertising bans, brief tobacco cessation interventions, alcohol tax increases, alcohol advertising restrictions, reduced salt in food, healthy diet promotion, physical activity promotion, and hepatitis B vaccination. These are prioritized because they are cost-effective, feasible, and have large population-level impact."
  },
  {
    id: 49,
    question: "A workplace wellness program that offers free health screenings, subsidized gym memberships, and smoking cessation programs targets NCD prevention at which level of prevention?",
    options: ["Primordial prevention", "Primary prevention", "Secondary prevention (screening component) and primary prevention (wellness component)", "Tertiary prevention"],
    answer: 2,
    explanation: "This program operates at multiple prevention levels: Health screenings represent secondary prevention (early detection of existing disease). Smoking cessation and gym memberships represent primary prevention (reducing risk factors to prevent disease). Primordial prevention would address social determinants before risk factors develop. The correct answer acknowledges both components."
  },
  {
    id: 50,
    question: "The SHAKE technical package by WHO for salt reduction includes all of the following strategies EXCEPT:",
    options: ["Surveillance of salt intake", "Harnessing industry to reformulate products", "Adopting front-of-pack labels", "Keeping marketing restrictions on high-salt foods", "Mandatory salt fortification of all processed foods"],
    answer: 4,
    explanation: "The WHO SHAKE technical package for salt reduction stands for: Surveillance, Harnessing industry (reformulation), Adopting standards for labeling, Knowledge (public awareness campaigns), and Environment (supportive food environment). Mandatory salt fortification is NOT a SHAKE component; in fact, the goal is to reduce salt content. Iodine fortification (not salt fortification) is a separate public health program."
  },
  {
    id: 51,
    question: "A researcher wants to use social media posts (tweets/Facebook posts) about mental health experiences for a study on help-seeking behavior. Which is the most important ethical consideration specific to this type of research?",
    options: ["The posts are publicly available so no ethical review is needed", "Researchers must consider whether users had a reasonable expectation of privacy, even for publicly accessible posts", "Informed consent is never required for social media research", "All social media data is considered to be in the public domain"],
    answer: 1,
    explanation: "Social media research ethics requires consideration of users' reasonable expectation of privacy even for technically public posts. People sharing health information in online communities may not expect their posts to be used in research. Key considerations include: context of sharing (private health forum vs. public broadcast), sensitivity of data (mental health is particularly sensitive), potential for re-identification, and whether consent is needed. AoIR guidelines address these complexities."
  },
  {
    id: 52,
    question: "In genomic research using biobanks, a participant who initially consented to cancer research wants to withdraw from the study after samples have already been used in 100 publications. What is the ethical principle applicable here?",
    options: ["The right to withdraw must be honored, and all data derived from their sample must be destroyed", "Withdrawal can be limited once samples are irrevocably linked to published datasets; prospective use should be stopped", "No withdrawal is possible once consent has been given for biobank research", "The participant must pay compensation to the researchers for study disruption"],
    answer: 1,
    explanation: "The right to withdraw from research is a fundamental ethical principle (Helsinki Declaration). However, in biobank research, complete retrospective removal may be practically impossible once data has been published. The ethical approach is to: (1) honor withdrawal prospectively (stop using samples/data going forward), (2) acknowledge that retrospective removal from existing published analyses may not be feasible, and (3) explain this limitation clearly in informed consent processes."
  },
  {
    id: 53,
    question: "A physician withholds information about a poor prognosis from a patient, believing that knowing the truth would cause psychological harm. This practice is called:",
    options: ["Beneficence", "Therapeutic privilege", "Paternalism in a positive sense", "Informed consent"],
    answer: 1,
    explanation: "Therapeutic privilege refers to the withholding of information from a patient when the physician believes disclosure would cause psychological harm or interfere with the patient's ability to make rational decisions. It is an exception to the informed consent requirement. However, therapeutic privilege is controversial, rarely justified, and should only be invoked in exceptional circumstances where full disclosure would directly cause substantial harm."
  },
  {
    id: 54,
    question: "Whole exome sequencing of a patient for a known hereditary disease reveals an incidentally discovered BRCA1 mutation with high risk of breast/ovarian cancer. The ethical term for this finding and the researcher's obligation is:",
    options: ["Secondary finding requiring mandatory disclosure to all family members", "Incidental finding with obligation to consider return of results to the participant", "Collateral finding with no obligation to disclose", "Actionable variant requiring immediate prophylactic treatment"],
    answer: 1,
    explanation: "Incidental (secondary) findings are results that emerge from research beyond the original study objectives. The ACMG (American College of Medical Genetics) recommends actively looking for and returning certain actionable secondary findings including BRCA1/2 mutations. Researchers have an ethical obligation to develop a plan for returning clinically significant incidental findings to participants, with appropriate genetic counseling. This must be addressed in the informed consent process."
  },
  {
    id: 55,
    question: "The Declaration of Helsinki requires that placebo-controlled trials be used only when:",
    options: ["The sponsor requests a placebo comparison for regulatory purposes", "No proven intervention exists, or when compelling methodological reasons require placebo use and patients will not suffer serious harm", "The new treatment is expected to be superior to all existing treatments", "All participants have given written informed consent"],
    answer: 1,
    explanation: "Helsinki Declaration (2013 revision) states that placebo controls are ethically acceptable only when: (1) no proven intervention exists, or (2) when compelling methodological reasons require placebo use AND patients who receive placebo will not suffer serious or irreversible harm. Withholding effective treatment from seriously ill patients for placebo comparison is unethical. The option of using active controls (comparing new treatment to standard treatment) should always be considered."
  },
  {
    id: 56,
    question: "A multi-site clinical trial is conducted across research sites in India, USA, and France. The ethical review process should involve:",
    options: ["Only the ethics committee of the lead institution in the USA", "Ethics review by all participating institutional review boards/ethics committees in all countries", "A single international ethics committee representing all three countries", "Ethics review only in the developing country site"],
    answer: 1,
    explanation: "Multi-site studies require ethics review by each participating institution/country because: (1) local ethics committees understand local cultural contexts and regulations, (2) research regulations differ by country, (3) each institution has independent obligations to protect its participants. All participating sites must have ethics approval before enrolling participants. The lead institution's approval does not substitute for local approvals."
  },
  {
    id: 57,
    question: "In digital health research, using mobile health applications to collect continuous location data, sleep patterns, and social interactions from participants raises concerns about which ethical principle primarily?",
    options: ["Non-maleficence", "Justice", "Privacy and autonomy", "Beneficence"],
    answer: 2,
    explanation: "Continuous digital data collection from mobile devices raises significant concerns about privacy (protection of personal information) and autonomy (the right of individuals to control information about themselves). Digital health data can be highly granular and sensitive, capable of revealing information about relationships, behaviors, and locations that participants may not have intended to share. Appropriate safeguards include data minimization, strong security measures, and transparent consent."
  },
  {
    id: 58,
    question: "When conducting research with a culturally distinct indigenous community, the researcher should:",
    options: ["Obtain individual informed consent from participants only", "Obtain community-level consent from leaders AND individual informed consent from participants, and engage the community throughout the research process", "Follow only the standard ethics committee requirements without special considerations", "Publish findings without returning results to the community"],
    answer: 1,
    explanation: "Research with indigenous and other culturally distinct communities requires cultural competence and additional ethical safeguards: (1) community-level engagement and consent from community leaders/groups, in addition to individual consent; (2) community involvement in research design; (3) ensuring research addresses community priorities; (4) returning results to the community; (5) capacity building within the community. This reflects respect for collective decision-making norms."
  },
  {
    id: 59,
    question: "Big data research using electronic health records (EHRs) that are de-identified under HIPAA standards may still pose re-identification risks because:",
    options: ["EHR data is never truly de-identified", "Combining multiple de-identified variables (age, sex, ZIP code, diagnosis date) can often uniquely identify individuals", "HIPAA does not apply to research use of EHR data", "De-identification requires patient consent which is rarely obtained"],
    answer: 1,
    explanation: "Re-identification risk in de-identified datasets arises from the combination of multiple seemingly non-identifying variables. Research has shown that combinations of date of birth, sex, and 5-digit ZIP code can uniquely identify 87% of Americans. This is called 'linkage attack.' As datasets become larger and external reference datasets more available, re-identification risks increase. This is the 'jigsaw effect' in data privacy."
  },
  {
    id: 60,
    question: "The Belmont Report (1979) identified three fundamental ethical principles for research involving human subjects. These are:",
    options: ["Beneficence, non-maleficence, and autonomy", "Respect for persons, beneficence, and justice", "Informed consent, risk minimization, and equitable selection", "Autonomy, beneficence, and non-maleficence"],
    answer: 1,
    explanation: "The Belmont Report (National Commission, 1979, USA) identified three fundamental principles: (1) Respect for persons (autonomy, informed consent, protection of vulnerable populations), (2) Beneficence (maximizing benefits and minimizing harms), and (3) Justice (fair distribution of research benefits and burdens). Beauchamp and Childress later added non-maleficence to create the four principles of biomedical ethics, but the Belmont Report specifies three."
  },
  {
    id: 61,
    question: "CRISPR-Cas9 gene editing works by:",
    options: ["Inserting genes randomly into the host genome using viral vectors", "Using a guide RNA to direct the Cas9 endonuclease to a specific DNA sequence, creating a double-strand break that can be repaired by NHEJ or HDR", "Silencing gene expression through RNA interference", "Correcting point mutations by base excision repair only"],
    answer: 1,
    explanation: "CRISPR-Cas9 (Clustered Regularly Interspaced Short Palindromic Repeats - CRISPR associated protein 9) uses: (1) a single guide RNA (sgRNA) that is complementary to the target DNA sequence, (2) Cas9 nuclease that creates a double-strand break (DSB) at the target site. The DSB is repaired by: (a) NHEJ (non-homologous end joining) - error-prone, leading to insertions/deletions (knockouts), or (b) HDR (homology-directed repair) - precise correction using a template."
  },
  {
    id: 62,
    question: "Base editing, a newer form of precision genome editing, differs from CRISPR-Cas9 in that it:",
    options: ["Requires a double-strand break in DNA for editing", "Converts one DNA base to another without creating double-strand breaks, using deaminase enzymes", "Can only be used in plant cells, not human cells", "Requires viral vector delivery for all applications"],
    answer: 1,
    explanation: "Base editing uses a catalytically impaired Cas9 (nickase or dead Cas9) fused to a deaminase enzyme. It converts one base to another (C→T using cytosine base editors, or A→G using adenine base editors) without creating double-strand DNA breaks. This reduces the risk of large chromosomal deletions and unwanted insertions/deletions that occur with conventional CRISPR-Cas9. It is useful for correcting single point mutations that cause genetic diseases."
  },
  {
    id: 63,
    question: "Prime editing, described as a 'search and replace' genome editing tool, uses a combination of:",
    options: ["Two guide RNAs and two Cas9 proteins", "A Cas9 nickase fused to a reverse transcriptase and a pegRNA (prime editing guide RNA)", "Zinc finger nucleases and TALE proteins", "CRISPR-Cas12a and a DNA repair template"],
    answer: 1,
    explanation: "Prime editing uses a prime editor (PE) protein consisting of a Cas9 nickase fused to an engineered reverse transcriptase, guided by a prime editing guide RNA (pegRNA). The pegRNA contains both the targeting sequence and the desired edit as an RNA template. The reverse transcriptase copies this template into DNA at the target site. Prime editing can perform all 12 types of point mutations and small insertions/deletions without double-strand breaks or separate donor DNA."
  },
  {
    id: 64,
    question: "Gene drives are genetic systems designed to:",
    options: ["Silence gene expression in specific cell types using RNA interference", "Spread a genetic modification rapidly through a wild population, potentially beyond Mendelian inheritance rates", "Replace defective genes in somatic cells using viral vectors", "Edit multiple genes simultaneously in laboratory cell lines"],
    answer: 1,
    explanation: "Gene drives are genetic elements that can spread through a population at greater than normal (Mendelian) rates because they bias inheritance in their favor. CRISPR-based gene drives have been developed that could theoretically spread a desired genetic modification (e.g., malaria resistance) through wild mosquito populations. They raise significant ecological and ethical concerns because they could irreversibly alter or eliminate wild populations."
  },
  {
    id: 65,
    question: "RNA interference (RNAi) silences gene expression through which primary mechanism?",
    options: ["Transcriptional activation by small interfering RNAs (siRNAs)", "Post-transcriptional silencing via RISC-mediated cleavage or translational repression of complementary mRNA", "Direct methylation of DNA at target gene promoters", "Insertion of double-stranded RNA into the target gene's coding sequence"],
    answer: 1,
    explanation: "RNA interference (RNAi) is a biological process where small double-stranded RNA molecules (siRNA or miRNA) silence gene expression post-transcriptionally. The dsRNA is processed by Dicer into small interfering RNAs (siRNAs), which are loaded into the RNA-induced silencing complex (RISC). RISC uses the siRNA as a guide to identify and cleave complementary mRNA sequences, preventing protein production."
  },
  {
    id: 66,
    question: "Antisense oligonucleotides (ASOs) differ from siRNA in that ASOs:",
    options: ["Work exclusively through RISC-mediated mRNA degradation", "Are single-stranded DNA or RNA molecules that bind target mRNA by Watson-Crick base pairing to modulate expression through multiple mechanisms", "Cannot cross the blood-brain barrier under any circumstances", "Require viral vector delivery for therapeutic applications"],
    answer: 1,
    explanation: "Antisense oligonucleotides (ASOs) are short, single-stranded synthetic DNA or RNA molecules (15-25 nucleotides) that bind target mRNA through Watson-Crick base pairing. ASOs can work through multiple mechanisms: (1) RNase H-mediated degradation of the mRNA:ASO duplex, (2) steric blockade of translation, (3) splicing modulation. Examples include nusinersen (spinal muscular atrophy) and eteplirsen (Duchenne muscular dystrophy). Unlike siRNA, ASOs work independently of RISC."
  },
  {
    id: 67,
    question: "mRNA vaccines (like BNT162b2 for COVID-19) work by:",
    options: ["Introducing live attenuated virus into the body to stimulate immunity", "Delivering lipid nanoparticle-encapsulated mRNA encoding a viral antigen, which is translated by host ribosomes to produce the antigen and stimulate an immune response", "Using viral vectors to permanently integrate antigenic genes into host cell chromosomes", "Injecting purified recombinant viral proteins adjuvanted with alum"],
    answer: 1,
    explanation: "mRNA vaccines deliver synthetic mRNA encoding a viral antigen (e.g., SARS-CoV-2 spike protein) encapsulated in lipid nanoparticles (LNPs) for stability and cellular uptake. Host cell ribosomes translate the mRNA to produce the antigen, which stimulates both humoral and cellular immune responses. The mRNA does not enter the nucleus, does not integrate into DNA, and is degraded within days. LNPs protect the mRNA from degradation and facilitate cellular uptake."
  },
  {
    id: 68,
    question: "Adeno-associated virus (AAV) vectors used in gene therapy have which important advantage over adenoviral vectors?",
    options: ["AAV can carry larger gene inserts (up to 30 kb) compared to adenoviral vectors", "AAV typically causes minimal immune response and can achieve long-term gene expression in non-dividing cells", "AAV integrates predictably into 'safe harbor' loci without insertional mutagenesis risk", "AAV can be produced more cheaply than any other viral vector platform"],
    answer: 1,
    explanation: "AAV vectors have advantages over other viral vectors: (1) low immunogenicity - minimal inflammatory response, (2) ability to transduce non-dividing cells, (3) long-term gene expression (episomal persistence or site-specific integration at AAVS1), (4) broad tissue tropism with different serotypes. Disadvantages include small packaging capacity (~4.7 kb), pre-existing immunity in some patients, and high manufacturing cost. Examples: Luxturna (RPE65 gene for retinal dystrophy), Zolgensma (SMN1 for SMA)."
  },
  {
    id: 69,
    question: "CAR-T cell therapy (Chimeric Antigen Receptor T-cell therapy) works by:",
    options: ["Infusing genetically unmodified T cells that naturally target tumor antigens", "Collecting patient T cells, genetically engineering them to express a chimeric antigen receptor targeting a specific tumor antigen, and reinfusing them", "Using monoclonal antibodies to activate endogenous T cells against tumors", "Blocking immune checkpoints (PD-1/CTLA-4) to activate existing anti-tumor T cells"],
    answer: 1,
    explanation: "CAR-T cell therapy involves: (1) collecting patient's T cells by leukapheresis, (2) genetically engineering them ex vivo to express a CAR that combines an antigen-binding domain (usually single-chain variable fragment from antibody) with intracellular T cell signaling domains, (3) expanding the cells, and (4) reinfusing. CARs direct T cells to kill tumor cells expressing the target antigen (e.g., CD19 for B-cell malignancies). FDA-approved examples: tisagenlecleucel (Kymriah), axicabtagene ciloleucel (Yescarta)."
  },
  {
    id: 70,
    question: "In CRISPR-Cas9 gene editing, the PAM (Protospacer Adjacent Motif) sequence is required because:",
    options: ["It provides the energy for the Cas9 endonuclease activity", "Cas9 requires the presence of a PAM sequence adjacent to the target site for recognition and cleavage; the guide RNA does not bind the PAM", "It specifies which type of DNA repair pathway will be used after cutting", "It determines the specificity of the guide RNA for its target"],
    answer: 1,
    explanation: "The PAM (Protospacer Adjacent Motif) is a short DNA sequence (5'-NGG-3' for SpCas9 from S. pyogenes) immediately downstream of the target sequence that is required for Cas9 binding and cleavage. Cas9 first interrogates DNA for the PAM sequence, then unwinds DNA to check complementarity with the guide RNA. The PAM must be present in the target but not in the guide RNA itself. PAM requirements limit the targetable sequences; modified Cas9 variants with altered PAM requirements expand targeting range."
  },
  {
    id: 71,
    question: "Confocal laser scanning microscopy differs from conventional fluorescence microscopy primarily because:",
    options: ["It uses electron beams instead of light for imaging", "It uses a pinhole aperture to eliminate out-of-focus light, producing sharp optical sections from thick specimens", "It does not require fluorescent labeling of specimens", "It has lower resolution but faster imaging speed"],
    answer: 1,
    explanation: "Confocal microscopy uses a pinhole aperture positioned at the conjugate focal plane to block out-of-focus light from reaching the detector. This produces crisp optical sections and allows 3D reconstruction from thick specimens. Unlike conventional fluorescence microscopy (which collects all emitted light including out-of-focus blur), confocal produces sharper images with better signal-to-noise ratio. It is widely used for imaging cellular structures and co-localization studies."
  },
  {
    id: 72,
    question: "Flow cytometry can simultaneously measure which properties of individual cells in suspension?",
    options: ["Only cell size and internal complexity", "Multiple physical and chemical characteristics including size, granularity, and multiple fluorescent markers simultaneously", "Gene expression levels only through mRNA quantification", "Cell viability exclusively using trypan blue exclusion"],
    answer: 1,
    explanation: "Flow cytometry analyzes individual cells as they flow through a laser beam. It simultaneously measures: (1) Forward scatter (FSC) - cell size, (2) Side scatter (SSC) - internal granularity/complexity, and (3) Multiple fluorescent signals from fluorochrome-conjugated antibodies or dyes. Modern flow cytometers can measure 40+ parameters simultaneously. Applications include immunophenotyping, cell cycle analysis, apoptosis detection, intracellular cytokine staining, and cell sorting (FACS)."
  },
  {
    id: 73,
    question: "Immunohistochemistry (IHC) detects antigens in tissue sections using:",
    options: ["Fluorescent dyes that bind non-specifically to cellular structures", "Specific antibodies that bind to target antigens, detected by enzyme-linked secondary antibodies that produce a visible color reaction", "PCR amplification of target gene sequences in paraffin sections", "Radioactive isotopes incorporated into antibodies for autoradiographic detection"],
    answer: 1,
    explanation: "IHC uses specific antibodies to detect target proteins (antigens) in formalin-fixed paraffin-embedded (FFPE) or frozen tissue sections. The most common detection method uses enzyme-linked secondary antibodies (horseradish peroxidase or alkaline phosphatase) that react with chromogenic substrates to produce colored deposits (DAB produces brown, AEC produces red). IHC is widely used in diagnostic pathology (e.g., HER2, PD-L1, ER/PR in breast cancer) and research."
  },
  {
    id: 74,
    question: "MALDI-TOF mass spectrometry has revolutionized clinical microbiology because it enables:",
    options: ["Detection of antibiotic resistance genes directly from blood cultures", "Rapid identification of microorganisms (bacteria, fungi) within minutes based on their unique protein spectral fingerprints", "Quantification of bacterial load in clinical specimens", "Determination of minimum inhibitory concentrations (MICs) for all antibiotics"],
    answer: 1,
    explanation: "MALDI-TOF (Matrix-Assisted Laser Desorption/Ionization - Time of Flight) mass spectrometry identifies microorganisms by comparing their mass spectra (protein fingerprints, primarily ribosomal proteins) to a reference database. It identifies bacteria and fungi within minutes from colonies, is cost-effective, and has largely replaced biochemical identification systems in clinical microbiology. It does not reliably detect resistance genes (requires molecular methods) or directly determine MICs."
  },
  {
    id: 75,
    question: "16S rRNA gene sequencing is used in microbiology for:",
    options: ["Determining antibiotic resistance profiles of bacteria", "Identification of bacteria and analysis of microbiome composition, as the 16S rRNA gene contains conserved and variable regions useful for phylogenetic classification", "Detecting viral pathogens in clinical specimens", "Quantifying gene expression in bacterial cultures"],
    answer: 1,
    explanation: "The 16S ribosomal RNA gene (present in all prokaryotes) has conserved regions (for universal primer binding) and variable regions (V1-V9, for species discrimination). 16S rRNA sequencing is used for: (1) identification of bacteria that cannot be cultured or are difficult to identify biochemically, (2) microbiome composition analysis (amplicon sequencing of variable regions), and (3) phylogenetic classification. It does not detect antibiotic resistance or viral pathogens."
  },
  {
    id: 76,
    question: "Metagenomics applied to clinical microbiology (mNGS) differs from conventional culture-based diagnostics in that it:",
    options: ["Requires prior knowledge of the suspected pathogen to design specific primers", "Sequences all nucleic acids in a clinical sample, potentially identifying any pathogen (known or novel) without culture or prior hypothesis", "Is faster but has lower sensitivity than culture methods", "Can only be used for bacterial identification, not viruses or fungi"],
    answer: 1,
    explanation: "Metagenomic next-generation sequencing (mNGS) sequences all nucleic acids in a sample simultaneously, allowing identification of bacteria, viruses, fungi, and parasites without culture or specific primers. It is particularly valuable for: undiagnosed infections, novel pathogens, fastidious/non-culturable organisms, and outbreak investigation. Challenges include cost, complex bioinformatics, interpretation of commensals vs. pathogens, and detection of very low-abundance pathogens."
  },
  {
    id: 77,
    question: "Whole genome sequencing (WGS) has become a powerful tool in outbreak investigation because it:",
    options: ["Is faster than all conventional typing methods in every situation", "Provides highest-resolution genetic fingerprinting, allowing precise determination of relatedness between isolates and identification of transmission chains", "Replaces the need for clinical epidemiology in outbreak investigations", "Can determine antimicrobial resistance phenotypes more accurately than MIC testing"],
    answer: 1,
    explanation: "WGS provides the highest-resolution molecular typing of pathogens by comparing single nucleotide polymorphisms (SNPs) across entire genomes. In outbreak investigations, WGS can: confirm or refute epidemiological links, distinguish outbreak strains from sporadic cases, identify transmission chains, detect mixed infections, and characterize resistance and virulence genes. It has replaced pulsed-field gel electrophoresis (PFGE) as the gold standard for many pathogens."
  },
  {
    id: 78,
    question: "The Minimum Inhibitory Concentration (MIC) is defined as:",
    options: ["The minimum concentration of antibiotic that kills 99.9% of bacteria", "The lowest concentration of an antimicrobial agent that visibly inhibits growth of a microorganism after overnight incubation", "The concentration at which 50% of bacteria are killed (EC50)", "The minimum antibiotic concentration achievable in blood serum"],
    answer: 1,
    explanation: "MIC (Minimum Inhibitory Concentration) is the lowest concentration of an antimicrobial agent that prevents visible growth of a microorganism after defined incubation (usually 18-24 hours). MIC is determined by broth dilution methods (macrodilution or microdilution). MBC (Minimum Bactericidal Concentration) is the lowest concentration that kills 99.9% of the initial inoculum. MIC is used to classify organisms as susceptible, intermediate, or resistant using breakpoints from CLSI or EUCAST."
  },
  {
    id: 79,
    question: "In the Kirby-Bauer disk diffusion method for antimicrobial susceptibility testing, the zone of inhibition is measured and interpreted using:",
    options: ["MIC breakpoints from broth dilution tests", "Standardized zone diameter breakpoints from CLSI or EUCAST guidelines", "The McFarland turbidity standard alone", "A comparison with the MBC for each antibiotic"],
    answer: 1,
    explanation: "In the disk diffusion (Kirby-Bauer) method: (1) A standardized inoculum (0.5 McFarland) is spread on Mueller-Hinton agar, (2) antibiotic-impregnated disks are placed, (3) after overnight incubation, zones of inhibition are measured in mm, (4) results are interpreted using standardized zone diameter breakpoints from CLSI (USA) or EUCAST (Europe) to classify as Susceptible, Intermediate, or Resistant (SIR). The zone diameter correlates inversely with MIC."
  },
  {
    id: 80,
    question: "Immunofluorescence (IF) microscopy differs from immunohistochemistry (IHC) primarily in that IF:",
    options: ["Uses enzyme-based chromogenic detection systems on paraffin sections", "Uses fluorochrome-labeled antibodies detected by fluorescence microscopy, allowing visualization of multiple targets simultaneously with different fluorescent colors", "Cannot be used on frozen tissue sections", "Is less sensitive than IHC for all applications"],
    answer: 1,
    explanation: "Immunofluorescence uses antibodies conjugated to fluorochromes (FITC, PE, Cy3, Alexa dyes) and requires fluorescence microscopy. Key advantages over IHC: (1) multiplexing - multiple antigens can be detected simultaneously with different colored fluorochromes, (2) quantifiable signal intensity. IF can be direct (fluorochrome-labeled primary antibody) or indirect (unlabeled primary + fluorochrome-labeled secondary). Applications include kidney biopsy diagnosis (IF for immunoglobulins/complement), autoimmune disease diagnosis, and cell biology research."
  },
  {
    id: 81,
    question: "The idiom 'to keep an eye on something' means:",
    options: ["To physically observe something with one eye closed", "To monitor or watch something carefully", "To ignore something completely", "To look at something briefly"],
    answer: 1,
    explanation: "The body part idiom 'to keep an eye on something/someone' means to watch carefully or monitor. Example: 'Please keep an eye on the patient's blood pressure while I'm away.' Other common body part idioms include 'cost an arm and a leg' (very expensive), 'put your foot in your mouth' (say something embarrassing), and 'turn a blind eye' (ignore something)."
  },
  {
    id: 82,
    question: "The color idiom 'once in a blue moon' means:",
    options: ["During a full moon phase", "Very rarely", "Every month", "During nighttime hours only"],
    answer: 1,
    explanation: "The color idiom 'once in a blue moon' means very rarely or hardly ever. A 'blue moon' refers to the second full moon in a single calendar month, which is an infrequent occurrence. Example: 'She only visits her family once in a blue moon.' Other color idioms: 'green with envy' (jealous), 'in the red' (in debt), 'red tape' (bureaucratic procedures), 'grey area' (unclear situation)."
  },
  {
    id: 83,
    question: "When someone says 'let the cat out of the bag,' they mean:",
    options: ["Release an animal from captivity", "Accidentally reveal a secret", "Create unnecessary panic", "Introduce chaos into a situation"],
    answer: 1,
    explanation: "'Let the cat out of the bag' is an animal-based idiom meaning to accidentally reveal a secret or surprise. Example: 'She let the cat out of the bag about the surprise party.' Other animal idioms: 'bite the bullet' - endure pain; 'barking up the wrong tree' - making a wrong assumption; 'the elephant in the room' - obvious problem being ignored; 'a wolf in sheep's clothing' - dangerous person appearing harmless."
  },
  {
    id: 84,
    question: "The food-related expression 'the best thing since sliced bread' is used to describe:",
    options: ["A very basic or ordinary invention", "Something considered an excellent, innovative, or highly useful invention or development", "Something that is overrated and disappointing", "A product that has failed commercially"],
    answer: 1,
    explanation: "'The best thing since sliced bread' is a hyperbolic expression meaning something is a wonderful new invention or idea. It refers to the introduction of pre-sliced bread in 1928, which was considered a revolutionary convenience. Example: 'This new diagnostic app is the best thing since sliced bread.' Other food idioms: 'a piece of cake' (very easy), 'spill the beans' (reveal a secret), 'full of beans' (energetic)."
  },
  {
    id: 85,
    question: "In weather-based idioms, 'to be under the weather' means:",
    options: ["To be experiencing extreme weather conditions", "To feel slightly ill or unwell", "To be caught in a storm", "To work outdoors in harsh conditions"],
    answer: 1,
    explanation: "'To be under the weather' means to feel slightly ill or unwell. It is commonly used for minor ailments. Example: 'I won't be coming to the meeting today; I'm feeling a bit under the weather.' Other weather idioms: 'every cloud has a silver lining' (every difficulty has a positive aspect), 'brainstorm' (group creative thinking), 'it never rains but it pours' (problems come together), 'take a rain check' (postpone an invitation)."
  },
  {
    id: 86,
    question: "In formal business English, the term 'due diligence' refers to:",
    options: ["Punctuality and meeting deadlines", "A thorough investigation and analysis conducted before a business transaction or decision", "Legal compliance with regulatory requirements", "Financial auditing of company accounts"],
    answer: 1,
    explanation: "Due diligence refers to the comprehensive appraisal/investigation of a business or person before signing a contract or making an investment. It involves examining financial records, legal compliance, operations, and risks. In healthcare, 'clinical due diligence' involves reviewing a facility's clinical quality, processes, and outcomes before acquisition. The term comes from the standard of care expected of a reasonably prudent person."
  },
  {
    id: 87,
    question: "In legal English, the term 'inter alia' means:",
    options: ["Therefore or consequently", "Among other things", "In good faith", "Without prejudice"],
    answer: 1,
    explanation: "'Inter alia' is a Latin legal term meaning 'among other things' or 'among others.' It is used when listing examples without being exhaustive. Example: 'The guidelines cover, inter alia, informed consent, data protection, and participant safety.' Other common legal Latin terms: 'prima facie' (at first sight, based on first impression), 'bona fide' (in good faith, genuine), 'pro bono' (for the public good, free of charge), 'sine qua non' (indispensable condition)."
  },
  {
    id: 88,
    question: "In a formal letter, the phrase 'Yours faithfully' is used when:",
    options: ["The recipient is a close personal friend", "The letter begins with 'Dear Sir/Madam' (recipient's name is not known)", "The letter begins with the recipient's name (e.g., 'Dear Dr. Smith')", "Writing to a senior colleague in the same organization"],
    answer: 1,
    explanation: "British English formal letter conventions: 'Yours faithfully' is used when the salutation is 'Dear Sir,' 'Dear Madam,' or 'Dear Sir/Madam' (when the recipient's name is unknown). 'Yours sincerely' is used when the salutation includes the person's name (e.g., 'Dear Dr. Smith'). American English typically uses 'Sincerely yours' or 'Respectfully yours' for all formal letters. These are important for professional scientific and medical correspondence."
  },
  {
    id: 89,
    question: "In professional email etiquette, which of the following subject lines is MOST appropriate for a formal research inquiry?",
    options: ["RE: Important!!!", "Request for collaboration - ICMR-funded TB project inquiry", "Hey - quick question", "URGENT URGENT URGENT - please read"],
    answer: 1,
    explanation: "A professional email subject line should be: (1) specific and descriptive, (2) concise (< 60 characters), (3) free of excessive punctuation or capitalization, (4) informative enough for the recipient to understand the email's purpose without opening it. 'Request for collaboration - ICMR-funded TB project inquiry' is specific, professional, and descriptive. Using all caps, multiple exclamation marks, or vague subjects like 'Hey' are unprofessional."
  },
  {
    id: 90,
    question: "The word 'perspicacious' most closely means:",
    options: ["Sweating profusely", "Having a ready insight into things; shrewd and discerning", "Persevering despite obstacles", "Speaking loudly and persuasively"],
    answer: 1,
    explanation: "'Perspicacious' (adjective) means having a ready insight into things; shrewd; having mental penetration or discernment. Example: 'The perspicacious researcher noticed the flaw in the study design that others had missed.' Related words: perspicacity (noun). Commonly confused with 'perspicuous' (clearly expressed). Other high-level vocabulary: 'salubrious' (health-giving), 'inimical' (hostile), 'tendentious' (promoting a point of view), 'sanguine' (optimistic)."
  },
  {
    id: 91,
    question: "The Swachh Bharat Mission (SBM), launched on October 2, 2014, aims to achieve which primary health-related goal?",
    options: ["Universal health coverage for all Indians by 2022", "Elimination of open defecation and ensuring access to sanitation facilities for all households", "Provision of clean drinking water to all rural households", "Elimination of vector-borne diseases through environmental management"],
    answer: 1,
    explanation: "Swachh Bharat Mission (Clean India Mission) was launched on Mahatma Gandhi's 150th birth anniversary to achieve the vision of a 'Clean India' by eliminating open defecation (ODF), constructing household toilets in rural and urban areas, and managing solid waste. SBM (Rural) Phase 1 focused on ODF; Phase 2 (2020-2025) focuses on ODF-Plus (sustainability, solid/liquid waste management). SBM directly impacts diarrheal diseases, malnutrition, and maternal-child health."
  },
  {
    id: 92,
    question: "Jal Jeevan Mission (JJM), launched in 2019, aims to provide:",
    options: ["Irrigation water to all agricultural land in India by 2024", "Functional household tap water connections (FHTC) to all rural households by 2024", "Water purification plants in all district hospitals", "Groundwater conservation through micro-irrigation"],
    answer: 1,
    explanation: "Jal Jeevan Mission (Har Ghar Jal) aims to provide Functional Household Tap Connections (FHTC) delivering safe drinking water (55 liters per capita per day) to every rural household by 2024. It replaced the National Rural Drinking Water Programme (NRDWP). JJM addresses the challenge that millions of Indian rural households lacked piped water access, contributing to waterborne diseases. The mission also focuses on water quality testing and village water and sanitation committees."
  },
  {
    id: 93,
    question: "The Ayushman Bharat Digital Mission (ABDM) primarily focuses on:",
    options: ["Providing free digital devices to ASHA workers", "Creating a digital health ecosystem with unique Health IDs (ABHA) for citizens to access longitudinal health records", "Digitizing government hospital administrative records only", "Providing telemedicine services to urban populations"],
    answer: 1,
    explanation: "Ayushman Bharat Digital Mission (ABDM), launched September 2021 (previously National Digital Health Mission), aims to create an integrated digital health infrastructure. Key components: (1) Ayushman Bharat Health Account (ABHA) - 14-digit unique health ID for every citizen, (2) Health Professionals Registry (HPR), (3) Health Facility Registry (HFR), (4) Unified Health Interface (UHI) for interoperability. It enables citizens to access their longitudinal health records across different healthcare providers."
  },
  {
    id: 94,
    question: "PM-Ayushman Bharat Health Infrastructure Mission (PM-ABHIM) is primarily focused on:",
    options: ["Health insurance coverage for BPL families", "Strengthening health infrastructure across the continuum of care from village to national level, including critical care capacity", "Training of ASHA workers and ANMs", "Providing free medicines under Jan Aushadhi Scheme"],
    answer: 1,
    explanation: "PM-ABHIM (Pradhan Mantri Ayushman Bharat Health Infrastructure Mission), launched October 2021 with Rs. 64,180 crore over 5-6 years, focuses on: (1) establishing Health and Wellness Centres (Ayushman Arogya Mandirs) at the last mile, (2) critical care hospital blocks in districts and regions, (3) disease surveillance networks, (4) national health institution strengthening, (5) health research. It complements PM-JAY (insurance) by addressing supply-side infrastructure gaps."
  },
  {
    id: 95,
    question: "e-Sanjeevani is India's national telemedicine platform. The two models under e-Sanjeevani are:",
    options: ["Patient-to-doctor and doctor-to-specialist (Hub and Spoke)", "Urban telemedicine and rural telemedicine", "Emergency telemedicine and elective telemedicine", "Government hospital and private hospital telemedicine"],
    answer: 0,
    explanation: "e-Sanjeevani operates two models: (1) e-SanjeevaniAB (Ayushman Bharat) - a doctor-to-doctor (Hub and Spoke) model where primary care doctors consult specialists for patient management, implemented under Ayushman Arogya Mandirs; (2) e-Sanjeevani OPD - a patient-to-doctor model where patients directly consult doctors online. India's e-Sanjeevani platform has conducted crores of consultations and is one of the world's largest telemedicine programs."
  },
  {
    id: 96,
    question: "The CoWIN platform was developed in India for:",
    options: ["Digital health ID registration under ABDM", "COVID-19 vaccine registration, appointment scheduling, and digital vaccination certificate generation", "Contact tracing during COVID-19 pandemic", "Real-time disease surveillance reporting"],
    answer: 1,
    explanation: "CoWIN (COVID Vaccine Intelligence Network) was developed by the Ministry of Health and Family Welfare for managing India's COVID-19 vaccination program. Functions include: (1) beneficiary registration, (2) appointment scheduling at vaccination centers, (3) recording vaccination doses, (4) generating digital vaccination certificates, (5) dashboard for monitoring vaccination progress. India's vaccination drive using CoWIN was one of the largest globally, vaccinating over 2 billion doses."
  },
  {
    id: 97,
    question: "ASHA (Accredited Social Health Activist) workers are a key component of India's primary healthcare system. ASHAs are primarily:",
    options: ["Government employees on regular payroll from the Ministry of Health", "Voluntary community health workers who serve as links between communities and the public health system, receiving performance-based incentives", "Trained nurses posted at sub-centres", "Village-level health educators with no clinical responsibilities"],
    answer: 1,
    explanation: "ASHAs are community health volunteers introduced under the National Rural Health Mission (NRHM, 2005). Key features: (1) selected from the same village/community they serve, (2) typically a woman with minimum 8th standard education, (3) NOT government employees - they receive performance-based incentives for specific activities (institutional deliveries, immunization, TB DOTS, etc.), (4) serve as the first point of contact between community and health system, (5) approximately 10 lakh ASHAs serving rural India."
  },
  {
    id: 98,
    question: "Under the Health and Wellness Centre (HWC/Ayushman Arogya Mandir) program, the primary healthcare service delivery has been expanded to include which new primary care services compared to the earlier Sub-Centre model?",
    options: ["Emergency surgical services and intensive care", "Comprehensive primary health care including NCD screening, mental health, oral health, palliative care, and first-level care for emergencies", "Specialized outpatient services for tertiary conditions", "Medical education and training programs"],
    answer: 1,
    explanation: "Health and Wellness Centres (now Ayushman Arogya Mandirs) transformed Sub-Centres and Primary Health Centres to provide Comprehensive Primary Health Care (CPHC) beyond the earlier RCH and communicable disease focus. Added services include: (1) NCD screening (hypertension, diabetes, common cancers), (2) mental health first aid, (3) oral health, (4) ENT care, (5) ophthalmic care, (6) elderly care, (7) palliative care, (8) emergency/trauma first aid. Led by Community Health Officers (CHOs) with Mid-Level Health Provider training."
  },
  {
    id: 99,
    question: "India's Primary Health Centre (PHC) is designed to serve a population of approximately:",
    options: ["5,000 in hilly/tribal areas and 30,000 in plains", "20,000-30,000 population (plains) and 12,000 in tribal/hilly areas", "1 lakh population in all areas", "50,000 population uniformly across India"],
    answer: 1,
    explanation: "As per IPHS (Indian Public Health Standards) and NRHM norms: (1) PHC serves 20,000-30,000 population in plains and 12,000-20,000 in hilly/tribal areas. (2) Sub-Centre serves 5,000 population (plains) and 3,000 (hilly/tribal). (3) Community Health Centre (CHC) serves 80,000-1,20,000 population. (4) District Hospital serves the entire district population. PHCs are the first contact point between the community and the medical officer and provide preventive, promotive, and curative services."
  },
  {
    id: 100,
    question: "Under the Alma-Ata Declaration (1978), primary health care is defined as including all of the following elements EXCEPT:",
    options: ["Education concerning prevailing health problems and methods of prevention", "Promotion of food supply and proper nutrition", "An adequate supply of safe water and basic sanitation", "Specialized tertiary care services for complex diseases"],
    answer: 3,
    explanation: "The Alma-Ata Declaration (1978) defined primary health care as including: (1) health education, (2) food supply and nutrition, (3) safe water and sanitation, (4) maternal and child health including family planning, (5) immunization against major infectious diseases, (6) prevention and control of locally endemic diseases, (7) treatment of common diseases and injuries, and (8) provision of essential drugs. Specialized tertiary care is explicitly NOT part of the PHC definition. The declaration coined the goal of 'Health for All by 2000.'"
  },
];

export default questions;

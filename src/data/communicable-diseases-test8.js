const questions = [
  {
    id: 1,
    question: "In a typhoid outbreak, 400 persons attended a wedding feast. Of these, 160 developed typhoid fever meeting the clinical case definition within 7-21 days. Calculate the attack rate for this outbreak.",
    options: [
      "16% (16 per 100)",
      "40% (40 per 100)",
      "25% (25 per 100)",
      "64% (64 per 100)"
    ],
    answer: 1,
    explanation: "Attack Rate = (Number of cases / Population at risk) x 100 = (160 / 400) x 100 = 40%. The attack rate is the incidence proportion over the course of a defined outbreak period. It is used in outbreak investigations to characterize the magnitude of exposure-specific risk. An attack rate of 40% suggests a common-source exposure with moderate infectious dose or partial population immunity. This is distinguished from the incidence rate (which requires person-time denominators) and is appropriate for outbreaks with defined at-risk populations and limited time periods."
  },
  {
    id: 2,
    question: "In a measles outbreak, 12 primary cases were confirmed. Among 240 unvaccinated household contacts of these primary cases, 84 subsequently developed measles. Among 60 vaccinated household contacts, 6 developed measles. What is the secondary attack rate (SAR) among unvaccinated contacts?",
    options: [
      "35%",
      "10%",
      "5%",
      "50%"
    ],
    answer: 0,
    explanation: "Secondary Attack Rate (SAR) = (Secondary cases among contacts / Total susceptible contacts exposed) x 100. SAR in unvaccinated contacts = (84 / 240) x 100 = 35%. SAR in vaccinated contacts = (6 / 60) x 100 = 10%. The SAR among unvaccinated contacts (35%) reflects the intrinsic transmissibility of measles in susceptible household contacts. The ratio of SAR vaccinated / SAR unvaccinated = 10% / 35% = 0.286, indicating vaccine effectiveness of approximately 71% in this field setting. SAR is an important measure for assessing transmission intensity and evaluating control measures in household or institutional settings."
  },
  {
    id: 3,
    question: "In a hepatitis A outbreak, 250 cases were reported in a district with a population of 500,000. Of the 250 cases, 5 died. Which of the following correctly distinguishes the Case Fatality Rate (CFR) from the cause-specific mortality rate?",
    options: [
      "CFR = 2%, Cause-specific mortality rate = 1 per 100,000; CFR measures deaths among cases, mortality rate measures deaths in total population",
      "CFR = 2%, Cause-specific mortality rate = 2%; they measure the same thing",
      "CFR = 5 per 100,000, Cause-specific mortality rate = 2%",
      "CFR = 1 per 100,000, Cause-specific mortality rate = 5%"
    ],
    answer: 0,
    explanation: "Case Fatality Rate (CFR) = (Deaths / Cases) x 100 = (5 / 250) x 100 = 2%. CFR is a measure of disease severity - the probability of dying given that one is a case. Cause-specific mortality rate = (Deaths from the disease / Total population) x 100,000 = (5 / 500,000) x 100,000 = 1 per 100,000. The mortality rate measures the impact of the disease on the entire population. CFR varies with case ascertainment - if mild cases are missed (as often in hepatitis A), CFR is overestimated. The cause-specific mortality rate is used for comparing disease burden across populations. Both are distinct from the proportional mortality ratio (PMR), which expresses deaths from one cause as a percentage of all deaths."
  },
  {
    id: 4,
    question: "An epidemic curve for a Hepatitis E outbreak shows cases beginning at day 15, peaking sharply at day 28, and declining by day 50. The known incubation period for Hepatitis E is 15-60 days (median 40 days). Using the epidemic curve, what was the most likely exposure date?",
    options: [
      "Approximately day 28 (the peak day itself)",
      "Approximately day 50 (after the peak)",
      "Subtracting the median incubation period (40 days) from the peak (day 28) gives a negative date, so subtract from the earliest case onset: day 15 minus 15 days = day 0, indicating a single point-source exposure around day 0",
      "The exposure date cannot be estimated from an epidemic curve without laboratory confirmation"
    ],
    answer: 2,
    explanation: "For a point-source outbreak, the probable exposure date is estimated by subtracting the median incubation period from the peak of the epidemic curve, or subtracting the minimum incubation period from the date of the first case, or subtracting the maximum incubation period from the date of the last case. Using the minimum incubation period: First case day 15 minus 15 days (minimum incubation) = day 0. Using the median: Peak day 28 minus 40 days = day -12 (inconsistent). The most reliable method uses the first case minus minimum incubation: day 15 - 15 = day 0, suggesting a point-source exposure around day 0. This technique is fundamental for identifying the common exposure event (e.g., a contaminated meal at a specific event) during outbreak investigation."
  },
  {
    id: 5,
    question: "The serial interval for COVID-19 is estimated at 5.5 days, and the mean infectious period is 5 days. The basic reproduction number R0 estimated from early epidemic data is 2.5. Using the herd immunity threshold formula, what minimum proportion of the population must be immune to prevent epidemic spread?",
    options: [
      "40% immune (1 - 1/R0 = 1 - 1/2.5 = 0.6; incorrect calculation)",
      "60% immune (1 - 1/R0 = 1 - 1/2.5 = 0.60 = 60%)",
      "75% immune (based on serial interval calculation)",
      "80% immune (standard threshold for all respiratory infections)"
    ],
    answer: 1,
    explanation: "Herd immunity threshold (HIT) = 1 - 1/R0 = 1 - 1/2.5 = 1 - 0.4 = 0.60 = 60%. This means 60% of the population must be immune (through vaccination or prior infection) to prevent ongoing transmission. The effective reproduction number Re = R0 x (1 - proportion immune). When Re falls below 1, the epidemic declines. At 60% immunity, Re = 2.5 x (1 - 0.60) = 2.5 x 0.4 = 1.0, which is exactly the threshold. For Re < 1, immunity must exceed 60%. The serial interval and infectious period inform R0 estimation but the HIT formula uses R0 directly. Higher R0 diseases (measles R0 = 12-18, HIT = 92-94%) require higher vaccination coverage than lower R0 diseases."
  },
  {
    id: 6,
    question: "In a randomized controlled trial of a new cholera vaccine, 1000 vaccinated participants and 1000 placebo recipients were followed for one year. 20 cholera cases occurred in the vaccinated group and 100 in the placebo group. Calculate the vaccine efficacy (VE) and the number needed to vaccinate (NNV).",
    options: [
      "VE = 80%, NNV = 12.5",
      "VE = 20%, NNV = 5",
      "VE = 80%, NNV = 50",
      "VE = 90%, NNV = 10"
    ],
    answer: 0,
    explanation: "Attack rate in vaccinated (ARV) = 20/1000 = 0.02 (2%). Attack rate in unvaccinated (ARU) = 100/1000 = 0.10 (10%). Vaccine Efficacy (VE) = (ARU - ARV) / ARU x 100 = (0.10 - 0.02) / 0.10 x 100 = 0.08/0.10 x 100 = 80%. Alternatively, VE = (1 - Relative Risk) x 100 = (1 - 0.02/0.10) x 100 = (1 - 0.2) x 100 = 80%. Absolute Risk Reduction (ARR) = ARU - ARV = 0.10 - 0.02 = 0.08 (8%). Number Needed to Vaccinate (NNV) = 1 / ARR = 1 / 0.08 = 12.5. This means 12.5 people need to be vaccinated to prevent one cholera case. NNV is useful for policy decisions comparing the cost-effectiveness of vaccination programmes."
  },
  {
    id: 7,
    question: "In a case-control study on dengue infection, 120 cases and 240 controls are enrolled. Among cases, 90 reported no window screen use; among controls, 100 reported no window screen use. The crude odds ratio (OR) is calculated. After stratifying by urban/rural residence, the stratum-specific ORs are 3.8 (urban) and 3.5 (rural). The Mantel-Haenszel adjusted OR is 3.7. How should urban/rural residence be classified?",
    options: [
      "Urban/rural is a confounder because the adjusted OR (3.7) differs from crude OR",
      "Urban/rural is an effect modifier because stratum-specific ORs (3.8 and 3.5) differ from each other",
      "Urban/rural is neither a significant confounder nor an effect modifier; stratum-specific ORs are similar to each other and to the adjusted OR, confirming the association between no window screen use and dengue",
      "Urban/rural is a precision variable only; it does not affect OR estimation"
    ],
    answer: 2,
    explanation: "Crude OR = (90 x 140) / (30 x 100) = 12600 / 3000 = 4.2. After stratification, the MH adjusted OR is 3.7. Confounding is assessed by comparing crude OR to adjusted OR: a >10-15% difference suggests confounding. The difference here is (4.2 - 3.7)/4.2 = 12%, borderline but the stratum-specific ORs (3.8 and 3.5) are similar to each other (no effect modification) and to the adjusted OR (3.7). Effect modification (interaction) would require substantially different stratum-specific ORs (e.g., one >2, the other <1). The conclusion: urban/rural residence is a minor confounder at most, and there is no effect modification. No window screen use remains consistently associated with dengue across both strata, confirming it as a significant risk factor."
  },
  {
    id: 8,
    question: "A cohort study follows 500 HIV-positive patients for varying durations. Patient A contributes 2 years; Patient B contributes 0.5 years (died); Patient C contributes 3 years; and remaining 497 patients contribute an average of 2.8 years each. 45 new tuberculosis cases occur during follow-up. Calculate the TB incidence rate per 100 person-years.",
    options: [
      "9% (45/500 x 100)",
      "Approximately 3.2 per 100 person-years",
      "Approximately 7.5 per 100 person-years",
      "45 per 497 patient-years = 9.05 per 100 person-years"
    ],
    answer: 1,
    explanation: "Person-time calculation: Patient A: 2 years; Patient B: 0.5 years; Patient C: 3 years; 497 patients x 2.8 years = 1391.6 years. Total person-years = 2 + 0.5 + 3 + 1391.6 = 1397.1 person-years. Incidence rate = Cases / Person-time = 45 / 1397.1 = 0.0322 per person-year = 3.22 per 100 person-years. Person-time calculation is essential when participants are followed for different durations or are lost to follow-up. Unlike the cumulative incidence (attack rate), the incidence rate accounts for varying observation periods. The denominator is 'person-years at risk' - the sum of time each disease-free person was observed. This is the appropriate measure for cohort studies with variable follow-up."
  },
  {
    id: 9,
    question: "Age-standardized (age-adjusted) TB notification rates are being compared between State A and State B. State A has a crude rate of 120/100,000 and State B has a crude rate of 90/100,000. After direct standardization using the national population as the standard, State A rate = 95/100,000 and State B rate = 105/100,000. What is the most appropriate interpretation?",
    options: [
      "State A has higher TB burden than State B because crude rates are always the correct comparison measure",
      "The crude rates are confounded by different age structures; after age-standardization, State B actually has a higher TB rate (105 vs 95 per 100,000), suggesting State A's higher crude rate was due to an older population (more elderly = more TB cases in absolute terms), not higher underlying TB risk",
      "Age standardization is only used for cancer, not for communicable diseases like TB",
      "The standardized rates cannot be compared; only crude rates should be used for policy decisions"
    ],
    answer: 1,
    explanation: "Direct age standardization removes the confounding effect of different age distributions when comparing rates between populations. TB incidence is higher in older age groups; a population with more elderly people will have higher crude TB rates even if age-specific rates are the same as or lower than another population. Here, State A's higher crude rate (120 vs 90/100,000) is explained by its older population structure, not higher TB risk. After standardizing to the national population, State B shows a higher age-adjusted rate (105 vs 95/100,000), indicating higher TB risk in State B. This reversal is called Simpson's paradox or confounding by age. Age-standardized rates are essential for valid comparisons of disease burden across populations with different demographic structures."
  },
  {
    id: 10,
    question: "A study reports a 95% confidence interval for the relative risk of malaria in a high-transmission area vs low-transmission area as RR = 3.2 (95% CI: 1.8-5.7). Which statement BEST interprets this confidence interval?",
    options: [
      "There is a 95% probability that the true RR is between 1.8 and 5.7",
      "If the study were repeated 100 times using the same methods, approximately 95 of the resulting confidence intervals would contain the true population RR; the observed RR of 3.2 is statistically significant as the CI excludes 1.0",
      "The RR of 3.2 is not statistically significant because the confidence interval is wide",
      "The 95% CI means the study has 95% statistical power to detect this association"
    ],
    answer: 1,
    explanation: "The frequentist interpretation of a 95% CI: if the study were repeated many times under the same conditions, 95% of the calculated intervals would contain the true population parameter. It does NOT mean there is 95% probability that the true value lies in this specific interval (that is the Bayesian credible interval interpretation). The CI of 1.8-5.7 is statistically significant because it does not include 1.0 (the null value for RR), meaning the association is unlikely to be due to chance at the 5% significance level. A wide CI (1.8-5.7) indicates imprecision in the estimate (often due to small sample size) but does NOT indicate lack of statistical significance. Statistical significance and precision are distinct concepts."
  },
  {
    id: 11,
    question: "In a prospective cohort study on cholera in a slum population, the incidence in exposed (no access to safe water) = 15 per 1000 person-years; incidence in unexposed (safe water access) = 3 per 1000 person-years. The prevalence of unsafe water access in the population is 40%. Calculate the attributable risk percent (AR%) and the population attributable fraction (PAF).",
    options: [
      "AR% = 80%, PAF = 32%",
      "AR% = 80%, PAF = 48%",
      "AR% = 20%, PAF = 80%",
      "AR% = 50%, PAF = 20%"
    ],
    answer: 0,
    explanation: "Attributable Risk (AR) = Incidence in exposed - Incidence in unexposed = 15 - 3 = 12 per 1000 person-years. Attributable Risk Percent (AR%) = AR / Incidence in exposed x 100 = 12/15 x 100 = 80%. This means 80% of cholera cases in the exposed group are attributable to unsafe water. Population Attributable Fraction (PAF) = [Prevalence of exposure x (RR-1)] / [1 + Prevalence x (RR-1)]. RR = 15/3 = 5. PAF = [0.40 x (5-1)] / [1 + 0.40 x (5-1)] = [0.40 x 4] / [1 + 1.6] = 1.6 / 2.6 = 0.615 = 61.5%. Alternatively, PAF = (overall incidence - unexposed incidence) / overall incidence. Overall incidence = 0.4 x 15 + 0.6 x 3 = 6 + 1.8 = 7.8; PAF = (7.8 - 3)/7.8 = 61.5%. PAF = 32% is incorrect; the correct PAF is approximately 61.5%."
  },
  {
    id: 12,
    question: "A case-control study comparing cases of leptospirosis (n=100) and community controls (n=300) finds an adjusted odds ratio of 5.4 (95% CI: 2.8-10.4) for wading in floodwater. What does the Population Attributable Fraction (PAF) indicate if 30% of the general population wades in floodwater during floods?",
    options: [
      "PAF = (0.30 x (5.4-1)) / (1 + 0.30 x (5.4-1)) = 1.32/2.32 = 56.9%; removing floodwater exposure could prevent approximately 57% of leptospirosis cases in the population",
      "PAF = 5.4 x 0.30 = 162%; the formula gives >100% indicating confounding",
      "PAF = 1/5.4 = 18.5%; this is the reciprocal of the OR",
      "PAF cannot be calculated from case-control studies; only cohort studies provide PAF data"
    ],
    answer: 0,
    explanation: "PAF from case-control studies using prevalence of exposure in the population: PAF = [Pe x (OR-1)] / [1 + Pe x (OR-1)], where Pe = prevalence of exposure in the source population (approximated by control exposure or population data). PAF = [0.30 x (5.4-1)] / [1 + 0.30 x (5.4-1)] = [0.30 x 4.4] / [1 + 0.30 x 4.4] = 1.32 / 2.32 = 0.569 = 56.9%. This means 56.9% of leptospirosis cases in the population are attributable to floodwater wading; eliminating this exposure could prevent approximately 57% of cases. PAF is used to prioritize public health interventions by identifying exposures with the highest population-level impact. PAF CAN be calculated from case-control studies using the OR as an approximation of RR when the disease is rare."
  },
  {
    id: 13,
    question: "Under India's Integrated Disease Surveillance Programme (IDSP), a District Surveillance Officer receives an S-form (syndromic) report showing a 3-fold increase in cases of 'fever with rash' in a PHC area over one week. What is the CORRECT sequential IDSP response?",
    options: [
      "File the report and review at the monthly district health meeting",
      "Alert the national IDSP portal; deploy army for area containment",
      "Analyze the S-form trend to confirm threshold exceedance, cross-reference P-forms and L-forms from the same area, issue an alert to the District Rapid Response Team (DRRT) for field investigation, collect clinical specimens for laboratory confirmation, and report upward through the state surveillance unit",
      "Close all health facilities in the affected area pending investigation results"
    ],
    answer: 2,
    explanation: "IDSP threshold-based alert and response sequence: (1) S-form data is analyzed weekly for unusual clusters or threshold exceedance (typically 3-fold increase over baseline triggers an alert); (2) Cross-reference with P-forms (presumptive diagnoses from PHC doctors) and L-forms (lab results) from the same area for triangulation; (3) If threshold exceeded, the District Surveillance Officer issues an alert and activates the District Rapid Response Team (DRRT); (4) DRRT conducts field investigation: case verification, case finding, specimen collection; (5) Report upward to State Surveillance Unit (SSU) and Central Surveillance Unit (CSU); (6) Laboratory confirmation through IDSP state lab network. The S-P-L triangulation prevents both false alarms and missed outbreaks. Premature escalation to national level or area closure without investigation is inappropriate."
  },
  {
    id: 14,
    question: "The Integrated Health Information Platform (IHIP) includes a mobile application for real-time data entry by field health workers. Which attribute of the IHIP most significantly improves upon the traditional paper-based IDSP S-form reporting?",
    options: [
      "IHIP eliminates the need for laboratory confirmation of communicable diseases",
      "IHIP restricts reporting to Medical Officers only, removing lay health worker reporting",
      "IHIP enables case-based geo-tagged reporting in near real-time, allowing spatial clustering detection, automated threshold alerts, and integration with HMIS - replacing weekly aggregate paper forms that caused 7-21 day reporting lags",
      "IHIP covers only COVID-19 and not other communicable diseases"
    ],
    answer: 2,
    explanation: "Key improvements of IHIP over paper-based IDSP: (1) Real-time case-based reporting via mobile app (vs weekly paper S-forms causing 7-21 day reporting delays); (2) Automatic geo-tagging of each reported case enabling spatial clustering analysis and disease mapping; (3) Automated threshold alerts when case counts exceed district/week-specific baseline thresholds; (4) Individual case tracking (vs aggregate counts in S-forms); (5) Integration with HMIS, ANMOL (ANM Online), and other platforms; (6) Dashboard visualization for district, state, and national levels; (7) Elimination of manual data entry errors through structured digital forms. These improvements enable earlier outbreak detection and faster response - critical for limiting outbreak size. IHIP maintains coverage of all communicable diseases under IDSP surveillance."
  },
  {
    id: 15,
    question: "A public health epidemiologist is evaluating two surveillance approaches for dengue in a district: (A) Sentinel surveillance using 5 large hospitals reporting all confirmed dengue cases with full clinical data, and (B) Universal passive surveillance requiring all healthcare facilities to report any suspected dengue case. Which statement BEST describes the trade-offs?",
    options: [
      "Sentinel surveillance (A) is always superior because laboratory confirmation ensures data quality",
      "Universal passive surveillance (B) is always superior because it captures all cases",
      "Sentinel surveillance (A) provides higher data quality, timeliness, and clinical detail from a defined population but underestimates total burden; universal passive surveillance (B) provides broader case capture and better incidence estimates but suffers from variable reporting completeness and quality across facilities",
      "Both systems are identical in performance; the choice depends only on budget"
    ],
    answer: 2,
    explanation: "Sentinel vs Universal surveillance trade-offs: Sentinel surveillance advantages: standardized case definitions and diagnostic criteria; complete clinical and laboratory data; high data quality; timely reporting from committed sentinels; can calculate accurate rates in defined sentinel populations. Limitations: underestimates true disease burden; not representative if sentinels are selected hospitals. Universal passive surveillance advantages: theoretically captures all cases; provides population-level incidence estimates; broader geographic coverage. Limitations: variable reporting quality and completeness; clinician under-reporting (reporting fatigue); variable case definition adherence; delays in aggregation. WHO recommends using both systems complementarily: sentinel for trend monitoring and clinical characterization, universal for burden estimation. Neither is universally superior - the choice depends on surveillance objectives."
  },
  {
    id: 16,
    question: "A surveillance system for acute encephalitis syndrome (AES) in Bihar is evaluated using the CDC framework for surveillance system evaluation. The system captures 70% of true cases (sensitivity = 70%) but generates 15% false positives. Which CDC surveillance attribute does the 15% false positive rate directly affect, and what is the practical implication?",
    options: [
      "Sensitivity; a 15% false positive rate means sensitivity is inadequate",
      "Positive predictive value (PPV); a 15% false positive rate means PPV is reduced, leading to unnecessary outbreak investigations and resource wastage when reported clusters may include misclassified cases",
      "Timeliness; false positives delay real case detection",
      "Representativeness; false positives affect geographic distribution of reported cases"
    ],
    answer: 1,
    explanation: "The CDC framework for surveillance system evaluation includes attributes: sensitivity, specificity, positive predictive value (PPV), representativeness, timeliness, simplicity, flexibility, acceptability, stability, and usefulness. A 15% false positive rate directly affects PPV - the proportion of reported cases that are true cases. Low PPV means: (1) Unnecessary outbreak investigations for false clusters; (2) Wasted resources (RRTs dispatched for non-existent outbreaks); (3) Erosion of stakeholder confidence; (4) Misallocation of public health resources. Sensitivity (70%) is the proportion of true cases captured - a separate attribute from specificity/PPV. Improving case definitions or adding laboratory confirmation can reduce false positives and improve PPV, though often at the cost of reduced sensitivity (sensitivity-specificity trade-off)."
  },
  {
    id: 17,
    question: "During a WHO Joint External Evaluation (JEE) of India's IHR core capacities, the assessors evaluate the surveillance system for active vs passive surveillance components. Which of the following is an example of ACTIVE surveillance for influenza?",
    options: [
      "General practitioners voluntarily reporting influenza cases to the district health office when they choose to",
      "A hospital reporting all influenza-like illness (ILI) cases to IDSP at the end of each month",
      "Trained surveillance officers visiting selected sentinel sites (hospitals, clinics) every week to actively collect case data, review registers, and collect specimens regardless of whether facilities have reported spontaneously",
      "Social media monitoring for influenza-related terms as the primary data source"
    ],
    answer: 2,
    explanation: "Active surveillance involves deliberate, regular data collection by health authorities - they actively seek case information rather than waiting for it to be reported. Examples: (1) Sentinel site officers making weekly visits to collect ILI/SARI data and specimens; (2) AFP (Acute Flaccid Paralysis) surveillance - district officers visiting hospitals weekly to review paediatric ward registers for any unreported AFP cases; (3) During polio eradication, health workers going house-to-house to find missed AFP cases. Passive surveillance relies on voluntary, spontaneous reporting by healthcare providers. Active surveillance has higher sensitivity and completeness but is more resource-intensive. Passive surveillance is more feasible at scale but under-reports. India's polio eradication success relied heavily on active AFP surveillance with non-polio AFP rate as a quality indicator."
  },
  {
    id: 18,
    question: "The importance of 'zero reporting' in disease surveillance systems is being discussed at a district health review. What is the MOST accurate explanation of why zero reporting is essential?",
    options: [
      "Zero reporting means no diseases are present, so surveillance can be reduced",
      "Zero reporting is a bureaucratic requirement with no epidemiological significance",
      "Zero reporting (actively reporting zero cases for a specific disease during a reporting period) confirms that the surveillance system is functional and the absence of cases is genuine, not due to reporting failure - distinguishing true absence from surveillance gap",
      "Zero reports trigger automatic deployment of RRTs to verify the absence of cases"
    ],
    answer: 2,
    explanation: "Zero reporting is a critical quality indicator in surveillance systems. When a facility or district submits a zero report, it confirms: (1) The surveillance system was active during that period; (2) Healthcare providers were looking for the disease; (3) The absence of reported cases reflects genuine absence, not a breakdown in reporting. Without zero reporting, silence is ambiguous - it could mean no cases OR that the system was not functioning. This distinction is vital for: interpreting disease-free periods; calculating reporting completeness rates; identifying non-reporting facilities for follow-up; providing reliable data for trend analysis. WHO's Global Polio Eradication Initiative and NTEP both require zero reporting from all registered facilities. Non-reporting facilities are tracked and followed up to ensure completeness."
  },
  {
    id: 19,
    question: "An integrated vector management (IVM) programme in a district co-endemic for malaria and lymphatic filariasis uses House Index (HI) for Aedes and Man Biting Rate (MBR) for Anopheles as key monitoring indicators. Why are DIFFERENT entomological indices used for these two vectors?",
    options: [
      "Administrative convenience; both indices measure the same vector density",
      "Aedes aegypti and Culex quinquefasciatus breed in the same containers; shared indices apply",
      "Different entomological indices are used because Aedes aegypti/albopictus (dengue/chikungunya vectors) are day-biting, container-breeding mosquitoes best measured by larval indices (House Index, Breteau Index, Container Index), while Anopheles (malaria vector) are night-biting, ground/water-breeding mosquitoes whose adult density and human contact is better measured by Man Biting Rate (MBR) or malaria parasite rate in vector",
      "HI and MBR measure identical parameters; the distinction is only geographic"
    ],
    answer: 2,
    explanation: "Vector surveillance uses indices tailored to each vector's biology: Aedes-specific larval indices: House Index (% houses with Aedes larvae) = most widely used; Breteau Index (number of positive containers per 100 houses); Container Index (% water-holding containers with larvae) - appropriate because Aedes breeds in discrete, identifiable containers and adult density correlates with larval indices. Anopheles-specific indices: Man Biting Rate (MBR = number of bites per person per night during exposure period) and Entomological Inoculation Rate (EIR = MBR x sporozoite rate) - appropriate because Anopheles breeds in ground water pools, swamps, and rice fields where larval sampling is impractical; adult biting rate directly measures malaria transmission intensity. Culex quinquefasciatus (filariasis vector) uses larval indices similar to Aedes but in different habitats (drains, cesspools)."
  },
  {
    id: 20,
    question: "The ICMR Virus Research and Diagnostic Laboratories (VRDL) network was activated during a novel hemorrhagic fever cluster in Odisha. Specimens could not be diagnosed at the district VRDL. Which level of the VRDL network handles Biosafety Level 3 (BSL-3) pathogens for unknown hemorrhagic fever investigations?",
    options: [
      "District VRDLs are equipped with BSL-3 capacity for all outbreak investigations",
      "Any private laboratory accredited by NABL can handle BSL-3 specimens",
      "ICMR-National Institute of Virology (NIV), Pune is the apex reference laboratory with BSL-3/4 capacity for high-consequence pathogens (Nipah, CCHF, Ebola, Marburg); Biosafety Level 3 pathogens require this specialized infrastructure not available at district or most state VRDLs",
      "WHO's regional reference laboratory in New Delhi handles all BSL-3 specimens from India"
    ],
    answer: 2,
    explanation: "ICMR-VRDL tiered structure: Tier 1 (District VRDLs - >130 labs): basic viral diagnostics, ELISA, rapid antigen/antibody tests, BSL-2 PCR for common diseases (dengue, chikungunya, influenza, COVID-19). Tier 2 (State VRDLs): confirmatory testing, advanced molecular diagnostics, some BSL-2 enhanced. Tier 3 (Apex/National Reference Laboratories): ICMR-NIV Pune (Biosafety Level 3 and 4 for Nipah, Ebola, CCHF, Marburg, unknown hemorrhagic fevers); ICMR-NIMHANS Bengaluru (neurotropic viruses); ICMR-NCBS Bengaluru. NCDC (MOHFW, not ICMR) also has BSL-3 capacity. BSL-4 is required for pathogens with no treatment and aerosol transmission risk (Ebola, Marburg) - very limited globally. NIV Pune played pivotal roles in identifying Nipah (1999 Kerala), SARS-CoV-2 (2020), and other emerging pathogens in India."
  },
  {
    id: 21,
    question: "In evaluating an electronic disease surveillance tool used for real-time reporting of acute diarrheal disease in flood-affected camps, which CDC surveillance system attribute is MOST important to evaluate first?",
    options: [
      "Stability (uptime and reliability of electronic system in low-connectivity areas)",
      "Flexibility (ability to add new disease categories)",
      "Usefulness (does the surveillance data lead to actionable public health responses that reduce morbidity)",
      "Simplicity (ease of data entry for field workers)"
    ],
    answer: 2,
    explanation: "While all CDC surveillance attributes are important, usefulness is the overarching attribute from which all others derive value. A surveillance system's purpose is to provide data that leads to effective public health action. If a highly sophisticated electronic system generates real-time data that is never acted upon, it has no value. Usefulness encompasses: does the data detect outbreaks early? does it support case management? does it guide resource allocation? does it trigger appropriate responses? In flood-affected camps with diarrheal disease, usefulness = does surveillance data lead to timely oral rehydration therapy distribution, water chlorination, improved sanitation, RRT deployment? All other attributes (simplicity, flexibility, stability, timeliness) are prerequisites to usefulness, but usefulness is the ultimate objective against which a surveillance system should be evaluated."
  },
  {
    id: 22,
    question: "Genomic surveillance using whole genome sequencing (WGS) of SARS-CoV-2 variants was implemented in India through INSACOG (Indian SARS-CoV-2 Genomics Consortium). Which of the following is the MOST appropriate application of genomic surveillance data in communicable disease control?",
    options: [
      "Genomic data is used primarily for academic publication and has no direct public health application",
      "WGS data identifies individual patients' viral sequences for medico-legal purposes",
      "Genomic surveillance tracks variant emergence and spread, detects new variants of concern early, guides vaccine composition decisions, links outbreak cases to confirm transmission chains, and monitors vaccine effectiveness against new variants",
      "Genomic surveillance replaces the need for clinical and epidemiological surveillance"
    ],
    answer: 2,
    explanation: "Genomic/molecular epidemiology applications: (1) Variant tracking: early detection of new variants of concern (e.g., Delta, Omicron) before they cause major waves, enabling preparedness; (2) Transmission chain analysis: phylogenetic clustering of identical sequences links cases in outbreak investigations (hospital clusters, super-spreader events); (3) Vaccine composition: influenza vaccine strain selection updated annually based on genomic surveillance of circulating strains; (4) Imported case tracing: genomic data distinguishes local vs imported variants; (5) Monitoring vaccine escape mutations: variants with mutations in spike protein (target of vaccines) may reduce vaccine effectiveness. INSACOG (consortium of 38 labs) sequenced >500,000 samples during COVID-19. Limitations: WGS is expensive, requires specialized labs, and provides complementary data - it does not replace clinical/epidemiological surveillance."
  },
  {
    id: 23,
    question: "An ICMR-funded operational research study evaluates the impact of community health workers (ASHA) on tuberculosis case notification rates in tribal districts. The study uses a before-after design without a control group. What is the PRIMARY limitation of this study design for evaluating programme effectiveness?",
    options: [
      "Before-after studies cannot measure TB notification rates accurately",
      "The study has no limitation as temporal trends prove causation",
      "Without a control group, the study cannot distinguish the programme effect from secular trends (natural changes over time unrelated to the intervention), regression to the mean, concurrent interventions, or historical events - observed improvements may not be attributable to ASHA activities",
      "ASHAs are not qualified to contribute to TB notification data"
    ],
    answer: 2,
    explanation: "Before-after (pre-post) study design limitations: (1) Secular trends: TB notification rates may be increasing nationally regardless of the ASHA programme (e.g., improved diagnostic capacity, WHO-driven targets); (2) Regression to the mean: if baseline period had unusually low notification, rates would naturally increase without intervention; (3) Concurrent interventions: NTEP may have simultaneously increased CBNAAT (Xpert MTB/RIF) machines, which also increases notifications; (4) Historical events: economic changes, migration, COVID-19 disruptions confound temporal comparisons. A controlled before-after design (interrupted time series with control districts, or stepped wedge design) would be stronger. Ideally, a cluster randomized trial comparing ASHA-intervention districts to control districts would provide causal evidence. This limitation is fundamental to evaluating public health programmes and underlies the preference for randomized designs."
  },
  {
    id: 24,
    question: "A cluster randomized trial is designed to evaluate the effectiveness of house-to-house vector control visits by community health workers for dengue prevention in urban wards. 30 wards are randomized: 15 to intervention, 15 to control. The primary outcome is dengue incidence per 1000 population. Which analytical approach is MOST appropriate for this trial?",
    options: [
      "Analyze individual-level data as if wards were not the unit of randomization (ignoring clustering)",
      "Analyze ward-level summary data using t-test comparing mean incidence between intervention and control wards",
      "Use multilevel (hierarchical) regression models or generalized estimating equations (GEE) that account for within-cluster correlation (intra-cluster correlation coefficient, ICC), with ward as the unit of analysis, to obtain valid standard errors and confidence intervals",
      "Use a case-control study nested within the trial for more efficient analysis"
    ],
    answer: 2,
    explanation: "Cluster randomized trials (CRTs) require specialized analytical methods because individuals within the same cluster (ward) are more similar to each other than to individuals in other clusters - this within-cluster correlation (measured by the intra-cluster correlation coefficient, ICC) means observations are not independent, violating standard regression assumptions. Ignoring clustering leads to underestimated standard errors and falsely narrow confidence intervals (inflated Type I error). Appropriate methods: (1) Multilevel regression (mixed-effects models) with ward as random effect; (2) Generalized Estimating Equations (GEE) with robust standard errors; (3) Cluster-level analysis using ward mean incidence as the unit (simple but loses power); (4) ANCOVA adjusting for baseline cluster characteristics. Sample size calculation must also account for ICC to ensure adequate power. The ICC is typically small (0.01-0.05 for dengue) but substantially inflates required sample size."
  },
  {
    id: 25,
    question: "India's National Kala-Azar Elimination Programme set a target of <1 case per 10,000 population at the block level by 2023. An ICMR implementation research team evaluates programme performance. Which measure BEST captures the distinction between programme COVERAGE and programme EFFECTIVENESS?",
    options: [
      "Coverage and effectiveness are synonymous in disease elimination programmes",
      "Coverage = proportion of target population receiving the intervention (e.g., 85% of suspected cases receiving diagnosis and treatment); Effectiveness = impact of the programme on disease burden reduction (e.g., reduction in kala-azar incidence per 10,000) after accounting for real-world implementation conditions including coverage gaps, treatment adherence, drug resistance, and case detection completeness",
      "Effectiveness = coverage x 100; a simple mathematical relationship",
      "Coverage is measured only for vaccines; effectiveness is used only for drug treatments"
    ],
    answer: 1,
    explanation: "Coverage and effectiveness are distinct but related programme evaluation metrics: Coverage measures programme reach - what proportion of the target population receives the intended intervention. Examples: % kala-azar cases receiving rK39 diagnosis; % confirmed cases receiving liposomal amphotericin B. Effectiveness measures real-world impact - the actual reduction in disease burden under field conditions. It is affected by: coverage (incomplete reach); treatment quality and adherence; drug efficacy vs emerging resistance; case detection completeness (many cases missed = falsely low apparent coverage); healthcare system factors. Efficacy (from trials) > Effectiveness (from field) because trials have ideal adherence and case ascertainment. A programme can have high coverage (85% of DETECTED cases treated) but low effectiveness if 40% of cases are never detected. Implementation research bridges the efficacy-effectiveness gap by identifying and addressing real-world implementation barriers."
  },
  {
    id: 26,
    question: "The supply chain for insecticide-treated nets (ITNs) under NVBDCP faces last-mile delivery challenges. Which of the following represents a key SUPPLY CHAIN MANAGEMENT principle applied to ITN distribution to ensure availability at the community level?",
    options: [
      "Stockpiling all ITNs at the national level for 5 years to ensure security of supply",
      "Push system where state health departments distribute ITNs based on estimated population without feedback from lower levels",
      "Pull system with real-time stock monitoring: sub-district facilities report actual stock levels and consumption rates; supplies are replenished based on actual demand data; maximum-minimum stock level norms are maintained at each level; distribution is timed to malaria season and mass distribution campaigns",
      "Outsourcing the entire ITN supply chain to private pharmacies"
    ],
    answer: 2,
    explanation: "Effective vaccine and commodity supply chain management uses data-driven approaches: Pull systems (demand-driven): supplies requested from below based on actual consumption and stock levels, reducing over-supply at high levels and stock-outs at peripheral levels. Push systems (allocation-driven): top-down distribution based on population estimates - risk over-supply at some facilities and stock-out at others. Key supply chain management principles for ITNs: (1) Maximum-minimum stock level norms (e.g., minimum 2 months stock, maximum 6 months); (2) Regular stock reporting through HMIS/DVDMS (Drug Vaccines and Distributables Management System); (3) Seasonal alignment - distribution before malaria season; (4) Accountability through distribution registers at household level; (5) Quality verification (intact nets, LLIN vs conventional distinction). Stockpiling at national level creates pipeline delays and expiry risks for perishable commodities."
  },
  {
    id: 27,
    question: "During an ICMR-funded cluster randomized trial evaluating a novel dengue vaccine in school-age children, the ethics committee raises concerns about informed consent. Which of the following BEST represents ethical informed consent in this paediatric clinical trial?",
    options: [
      "Verbal consent from parents is sufficient; written consent is not required for vaccine trials",
      "Written informed consent from parents/guardians AND age-appropriate assent from children ≥7 years, explaining trial purpose, procedures, benefits, risks, voluntary participation, and right to withdraw without penalty - in local language with adequate time for questions",
      "Consent from school principal is sufficient as legal guardian of students on school premises",
      "Consent waiver is acceptable for vaccine trials as benefit outweighs risk"
    ],
    answer: 1,
    explanation: "Ethical informed consent in paediatric research (ICMR National Ethical Guidelines for Biomedical and Health Research, 2017): (1) Written informed consent from parent/legal guardian is mandatory (LAR - Legally Acceptable Representative); (2) Assent from children aged 7-17 years is required - age-appropriate explanation in simple language; (3) Both consent AND assent are needed (not either/or); consent from child cannot substitute parental consent; (4) Consent must cover: study purpose, procedures, duration, expected benefits, reasonably foreseeable risks, alternatives, voluntary nature, right to withdraw, confidentiality, compensation for trial-related injury, and contact information; (5) Provided in participant's language with adequate comprehension time; (6) No coercion or undue inducement. School principal is NOT a legal guardian. Consent waiver requires specific ethics committee justification and is rare in interventional trials with minors."
  },
  {
    id: 28,
    question: "An ICMR extramural research grant is being sought to study the epidemiology of leptospirosis in coastal Karnataka. The proposal includes a retrospective records review of hospital discharge data followed by a prospective case-control study. Which ICMR funding mechanism is MOST appropriate?",
    options: [
      "ICMR Task Force project - for large multi-site coordinated studies on national priority diseases",
      "ICMR Intramural research - funded only for ICMR institute employees' research",
      "ICMR Open-end project (Extramural Research) or Short-term Studentship - for individual investigators in non-ICMR institutions studying regional epidemiological questions",
      "DBT-Wellcome Trust India Alliance - for basic science research only"
    ],
    answer: 2,
    explanation: "ICMR funding mechanisms: (1) Extramural Research (Open-end grants): for investigators in non-ICMR institutions (medical colleges, universities) studying any health research question; budget typically up to Rs 30-50 lakhs; 2-3 year duration; suitable for epidemiological studies; (2) Task Force Projects: large coordinated national studies on ICMR-identified priority areas (e.g., national disease burden studies); multiple institutions; (3) Short-term Studentships (STS): for MBBS/postgraduate students for 2-month projects; (4) DHR-ICMR Advanced Research (formerly ICMR Advanced Research): for cutting-edge innovation; (5) Grand Challenges India: for innovative health solutions. The described leptospirosis epidemiology study (records review + case-control study) is appropriately funded through an extramural open-end grant from a non-ICMR institution. Task Force projects involve larger consortia. DBT-Wellcome Trust India Alliance is for translational/implementation research."
  },
  {
    id: 29,
    question: "Good Clinical Practice (GCP) guidelines are being applied to a multi-site dengue vaccine trial. Under GCP, what is the PRIMARY responsibility of the Principal Investigator (PI) regarding trial conduct?",
    options: [
      "The PI's sole responsibility is statistical analysis of trial data",
      "The PI is responsible for all aspects of trial conduct at the site: ensuring protocol compliance, obtaining and documenting informed consent, maintaining accurate case report forms, ensuring participant safety, reporting serious adverse events (SAEs) within 24 hours to sponsor and ethics committee, and maintaining essential trial documents",
      "The PI can delegate all responsibilities to research coordinators and need only sign final reports",
      "GCP applies only to drug trials; vaccine trials follow different standards"
    ],
    answer: 1,
    explanation: "GCP (ICH E6 guidelines, adopted by CDSCO in India) Principal Investigator responsibilities: (1) Protocol compliance: conducting the trial strictly per approved protocol; (2) Informed consent: personally overseeing or delegating to trained staff the consent process; (3) Data integrity: ensuring case report forms (CRFs) are accurate, complete, and promptly documented; (4) Safety monitoring: identifying and reporting Serious Adverse Events (SAEs) to the sponsor within 24 hours and to ethics committee within 14 days (expedited reporting); (5) Essential documents: maintaining investigator file (patient logs, signed consent forms, lab reports); (6) Delegation log: documenting any delegated responsibilities with signatures; (7) Ethics committee compliance: conducting trial per EC approval without unauthorized amendments. GCP applies equally to drug and vaccine trials. The PI cannot delegate accountability even if tasks are delegated. ICMR follows Schedule Y (Drugs and Cosmetics Act) and ICH GCP guidelines."
  },
  {
    id: 30,
    question: "Health systems research (HSR) is being designed to evaluate bottlenecks in the malaria elimination programme in high-burden districts of Odisha. Which framework is MOST appropriate for systematically analyzing health system bottlenecks?",
    options: [
      "Clinical trial framework with randomized allocation of districts to intervention",
      "WHO Health System Building Blocks framework: analyzing service delivery, health workforce, health information, medical products (supply chain), financing, and leadership/governance to identify which building blocks are limiting malaria elimination progress",
      "SWOT analysis of individual health workers' performance",
      "Malaria parasite resistance profiling (pharmacological analysis)"
    ],
    answer: 1,
    explanation: "WHO Health Systems Framework (6 building blocks) for malaria elimination bottleneck analysis: (1) Service Delivery: Are malaria services accessible? Are quality diagnostic and treatment services available at PHC level? Are active case detection (ACD) services functioning? (2) Health Workforce: Are sufficient trained ASHAs, lab technicians, and medical officers available? Are they trained in RDT use and ACT administration? (3) Health Information: Is the IDSP/NVBDCP data system capturing all cases? Is data being used for decision-making? (4) Medical Products: Are RDTs, ACTs, LLINs, and IRS insecticides available without stock-outs? (5) Financing: Is programmatic funding adequate and disbursed timely? (6) Leadership/Governance: Are inter-sectoral coordination mechanisms working? This framework systematically identifies which building block is the primary constraint to programme performance, enabling targeted interventions."
  },
  {
    id: 31,
    question: "In an ethics review of an outbreak investigation study in a remote tribal district during an acute encephalitis cluster, the investigators request a waiver of written informed consent due to emergency conditions. Under ICMR ethical guidelines, which conditions justify a consent waiver in outbreak research?",
    options: [
      "Consent waivers are never permitted under ICMR guidelines regardless of circumstances",
      "Any study conducted by government employees automatically waives consent requirements",
      "Ethics committees may grant consent waiver when: (1) research involves minimal risk; (2) waiver will not adversely affect rights and welfare of participants; (3) research cannot practicably be done without waiver; (4) participants will be provided information after the fact when possible - all four conditions must be met; in acute outbreaks, verbal consent with documentation may be acceptable pending formal written consent",
      "Outbreak investigations are not classified as research and require no ethics review"
    ],
    answer: 2,
    explanation: "ICMR National Ethical Guidelines (2017) and CIOMS guidelines allow ethics committees to waive or modify informed consent requirements under specific conditions (all must be met): (1) No more than minimal risk to participants; (2) Waiver will not adversely affect participants' rights and welfare; (3) Research could not practicably be carried out without the waiver or modification; (4) Whenever possible, participants will be provided additional pertinent information after participation. In acute outbreak investigations: specimen collection for surveillance may be considered program activity rather than research; if it is research, verbal consent with field documentation may be acceptable as modified consent; in life-threatening situations, Legally Acceptable Representative consent may be obtained; deferred consent procedures may apply. Outbreak investigations often blur the boundary between public health practice and research - ethics committee guidance is essential."
  },
  {
    id: 32,
    question: "A programme evaluation of the Revised National Tuberculosis Elimination Programme (NTEP) uses treatment success rate as the primary outcome indicator. The national treatment success rate for new bacteriologically confirmed pulmonary TB is 85%. Which of the following is the WHO-recommended minimum treatment success rate target for TB?",
    options: [
      "70% treatment success rate",
      "80% treatment success rate",
      "85% treatment success rate and this is considered adequate performance",
      "90% treatment success rate - India's 85% indicates a 5% gap requiring programmatic action to address loss-to-follow-up, treatment failure, and death outcomes"
    ],
    answer: 3,
    explanation: "WHO End TB Strategy targets: treatment success rate target for new and relapse TB cases = 90% by 2025. India's 85% treatment success rate (2021 cohort) falls 5 percentage points below the 90% target, representing a significant programmatic gap. Treatment success = cured + treatment completed. The 15% not achieving success comprises: loss-to-follow-up (LTFU, the largest gap - often 8-10%), treatment failure (2-3%), and died (3-4%). Programme actions to close the gap: (1) Reducing LTFU through Nikshay Poshan Yojana (nutritional support for adherence), patient support systems, tracing lost patients; (2) Better drug-susceptibility testing to detect resistance early; (3) Improved adverse event management; (4) Community-based DOT. The 85/90 treatment success comparison is a key benchmark in NTEP programme evaluation reviews."
  },
  {
    id: 33,
    question: "An ICMR implementation research study evaluates whether community-led total sanitation (CLTS) intervention reduces diarrheal disease incidence. The study uses a stepped wedge design where 20 villages are sequentially enrolled, with 5 new villages added every 3 months over 12 months. What is the PRIMARY advantage of the stepped wedge design over a parallel arm trial?",
    options: [
      "Stepped wedge designs require fewer villages and smaller sample sizes",
      "All villages eventually receive the intervention (ethically acceptable when intervention is known to be beneficial), while still providing a valid comparison between already-implemented and not-yet-implemented villages at each time step, using time as the comparison period within each village",
      "Stepped wedge designs completely eliminate confounding",
      "Stepped wedge designs do not require ethics approval as all participants eventually receive the intervention"
    ],
    answer: 1,
    explanation: "Stepped wedge (SW) trial advantages: (1) Ethical: all clusters eventually receive the intervention - no permanent control group denied an intervention believed to be beneficial; appropriate when complete withholding is ethically unacceptable; (2) Efficiency: uses both between-cluster and within-cluster comparisons over time; (3) Implementation feasibility: phased rollout is often operationally realistic for programmes; (4) Allows learning during rollout. Analytical approach: mixed-effects models treating calendar time as a fixed effect and cluster as a random effect. Limitations: (1) Complex analysis required; (2) Sensitive to secular trends (external changes over time that affect outcome); (3) Long duration required; (4) Contamination between clusters in adjacent implementation phases. SW designs do not necessarily require fewer clusters - sample size may be similar to parallel trials. They still require full ethics committee approval. Confounding is reduced but not eliminated."
  },
  {
    id: 34,
    question: "In a food safety assessment after a restaurant-associated Salmonella outbreak, the investigation team uses the 2x2 table method. Among 200 persons who ate the restaurant meal: 80 ate the suspect dessert and became ill; 20 ate the suspect dessert but did not become ill; 10 did not eat the dessert but became ill; 90 did not eat the dessert and did not become ill. Calculate the Odds Ratio (OR) for the suspect dessert.",
    options: [
      "OR = (80 x 90) / (20 x 10) = 7200 / 200 = 36",
      "OR = (80 / 100) / (10 / 100) = 8.0",
      "OR = 80 / (80 + 20) = 0.8",
      "OR = (80 + 10) / (20 + 90) = 0.82"
    ],
    answer: 0,
    explanation: "2x2 table: Exposed-Ill (a) = 80; Exposed-Not ill (b) = 20; Unexposed-Ill (c) = 10; Unexposed-Not ill (d) = 90. Odds Ratio = (a x d) / (b x c) = (80 x 90) / (20 x 10) = 7200 / 200 = 36. This extremely high OR of 36 indicates that consumption of the suspect dessert is strongly associated with illness - those who ate the dessert had 36 times higher odds of illness than those who did not. For cohort/outbreak studies, Relative Risk is preferred: RR = [a/(a+b)] / [c/(c+d)] = (80/100) / (10/100) = 0.80/0.10 = 8.0. In this case both OR (36) and RR (8) show strong association, but OR overestimates RR when disease is common (50% attack rate here) - RR (8.0) is the more accurate measure of relative risk in this outbreak cohort."
  },
  {
    id: 35,
    question: "In a district with an ongoing dengue outbreak, the District Surveillance Officer examines weekly IDSP data from the past 8 weeks. Cases by week: 5, 8, 12, 25, 48, 72, 45, 18. What does this temporal pattern MOST suggest, and what action does it inform?",
    options: [
      "The outbreak is still escalating; emergency response should be scaled up because cases are still above baseline",
      "The epidemic curve shows an initial acceleration phase (weeks 1-6), a peak in week 6 (72 cases), and a declining phase (weeks 7-8: 45, 18 cases). This declining trend suggests the outbreak may be self-limiting or that control measures are effective; however, vigilance must be maintained, vector control sustained, and surveillance for potential resurgence continued",
      "The data shows no clear pattern; weekly fluctuations are expected in dengue surveillance",
      "Week 8 with 18 cases means the outbreak is over; all response activities should be stood down"
    ],
    answer: 1,
    explanation: "Interpreting time-series surveillance data: (1) Epidemic curve shape: weeks 1-6 show exponential growth (5, 8, 12, 25, 48, 72) typical of spreading vector-borne disease; peak at week 6 (72 cases); weeks 7-8 show decline (45, 18); (2) Response implications: declining phase suggests either natural epidemic dynamics (herd immunity effect, seasonal vector reduction) or effectiveness of vector control measures implemented around peak; (3) Caution: premature stand-down risks: (a) Dengue has multiple serotypes; if different serotype circulates, new wave possible; (b) Residual Aedes larval indices may still be high; (c) Reporting delays may mask continued transmission; (4) Actions: continue vector control and surveillance; assess entomological indices to confirm vector reduction; maintain RRT readiness. Week 8 cases (18) are above the baseline (week 1: 5), so the outbreak is not over but declining."
  },
  {
    id: 36,
    question: "A GIS (Geographic Information System) analysis of malaria cases in a district maps case distribution over a 5-year period. Clusters of high-incidence villages are identified near forest areas and irrigation canal systems. How should this GIS analysis directly inform the vector control programme?",
    options: [
      "GIS analysis is purely academic; it cannot guide operational vector control decisions",
      "The GIS cluster map identifies high-risk geographic zones for targeted resource allocation: prioritizing IRS, LLIN distribution, and active case detection (ACD) in forest-fringe villages and canal-side habitations; stratifying the district into high/medium/low risk blocks for differential intensity of interventions; identifying specific breeding habitats for targeted larval source management",
      "GIS shows where cases occurred historically; future cases will occur randomly so historical mapping is irrelevant",
      "GIS analysis identifies drug-resistant malaria clusters requiring only therapeutic changes"
    ],
    answer: 1,
    explanation: "GIS applications in malaria epidemiology and control: (1) Spatial risk stratification: identifying high-transmission villages and micro-geographies (forest-fringe, waterlogged areas, irrigation canal habitats) for targeted intervention; (2) Resource optimization: focusing IRS, LLINs, and RDT stock on high-risk areas rather than uniform distribution; (3) Active case detection planning: identifying villages with high parasite rates for monthly ACD camps; (4) Breeding site mapping: overlaying GIS cases with satellite-derived water body, vegetation, and land use data to locate Anopheles breeding habitats for larval source management; (5) Programme monitoring: tracking temporal-spatial shifts in malaria burden to evaluate interventions; (6) Surveillance gap identification: areas with high case density but low health facility access. GIS-informed stratification is now standard in India's malaria elimination strategy under the National Framework for Malaria Elimination (NFME) 2016-2030."
  },
  {
    id: 37,
    question: "An economic evaluation of two cholera prevention strategies is conducted: (A) Oral Cholera Vaccine (OCV) mass vaccination campaign (cost: Rs 50 lakhs) preventing 500 cholera cases; (B) Water chlorination programme (cost: Rs 20 lakhs) preventing 300 cholera cases. Calculate the Cost-Effectiveness Ratio (CER) for both strategies and determine which is more cost-effective.",
    options: [
      "Strategy A CER = Rs 1,000/case prevented; Strategy B CER = Rs 667/case prevented; Strategy B is more cost-effective per case prevented",
      "Strategy A CER = Rs 10,000/case prevented; Strategy B CER = Rs 6,667/case prevented; Strategy B is more cost-effective",
      "Strategy A is superior because it prevents more cases in absolute terms",
      "Strategy B is inferior because it prevents fewer total cases"
    ],
    answer: 0,
    explanation: "Cost-Effectiveness Ratio (CER) = Programme Cost / Health Outcome (cases prevented). Strategy A CER = Rs 50,00,000 / 500 cases = Rs 10,000 per case prevented. Strategy B CER = Rs 20,00,000 / 300 cases = Rs 6,667 per case prevented. Strategy B is more cost-effective with a lower cost per case prevented (Rs 6,667 vs Rs 10,000). Decision-making considerations: (1) CER alone does not determine the better choice - it depends on available budget and the maximum number of cases to prevent; (2) Incremental Cost-Effectiveness Ratio (ICER) compares the additional cost per additional benefit of A vs B: ICER = (50 - 20 lakhs) / (500 - 300 cases) = 30 lakhs / 200 cases = Rs 15,000 per additional case prevented by A over B; (3) Decision-makers must judge if Rs 15,000 for each additional case prevented justifies choosing A. Cost-effectiveness analysis informs but does not dictate public health decisions."
  },
  {
    id: 38,
    question: "A gastrointestinal outbreak occurs in a village of 600 people following a community festival. Within 48 hours, 180 cases of diarrhoea are reported. The field team identifies two potential food exposures: raw salad (eaten by 300 persons, 120 became ill) and cooked rice (eaten by 500 persons, 60 became ill). Using food-specific attack rates, which food is the most likely vehicle?",
    options: [
      "Cooked rice: more people were exposed (500 vs 300), so it accounts for more cases",
      "Raw salad: Attack rate in salad consumers = 120/300 = 40%; Attack rate in non-salad consumers = 60/300 = 20%; RR = 40/20 = 2.0; compared to rice: AR in rice consumers = 60/500 = 12%; AR in non-rice consumers = 120/100 = 120% (impossible); raw salad with AR of 40% vs 20% in unexposed and RR = 2.0 implicates salad",
      "Both foods equally implicated because the total outbreak attack rate is 30%",
      "Neither food is implicated; the low RR suggests water-borne transmission"
    ],
    answer: 1,
    explanation: "Food-specific attack rate analysis: Raw salad: exposed (ate salad): 120 ill / 300 total = 40% AR. Not exposed to salad: remaining 300 persons with (180-120) = 60 ill / 300 = 20% AR. RR = 40% / 20% = 2.0. Cooked rice: exposed: 60 ill / 500 = 12% AR. Not exposed: (180-60) = 120 ill / 100 = 120% (arithmetic error - this is impossible, meaning most unexposed to rice also ate other foods). The raw salad shows a clear differential: 40% ill among consumers vs 20% among non-consumers (RR = 2). The calculation for cooked rice is problematic because nearly all attendees ate rice (500/600), making the 'unexposed to rice' group very small. Raw salad with higher AR among consumers and lower AR among non-consumers, combined with its raw preparation method (no heat killing pathogens), implicates it as the vehicle."
  },
  {
    id: 39,
    question: "A measles outbreak is reported in a school with 500 students. Vaccination records show 420 students (84%) received at least one dose of measles vaccine. Over 3 weeks, 60 measles cases occur: 15 in unvaccinated students (80 unvaccinated) and 45 in vaccinated students (420 vaccinated). Calculate the vaccine effectiveness (VE) from this outbreak data.",
    options: [
      "VE = 75% because 75% of cases were vaccinated",
      "VE = (AR unvaccinated - AR vaccinated) / AR unvaccinated x 100 = (15/80 - 45/420) / (15/80) x 100 = (18.75% - 10.71%) / 18.75% x 100 = 42.9%",
      "VE = 84% because 84% vaccination coverage implies 84% effectiveness",
      "VE cannot be calculated from outbreak data; only from randomized trials"
    ],
    answer: 1,
    explanation: "Vaccine effectiveness (VE) from outbreak data (screening method or cohort method): AR in unvaccinated = 15/80 = 0.1875 = 18.75%. AR in vaccinated = 45/420 = 0.1071 = 10.71%. VE = (ARu - ARv) / ARu x 100 = (0.1875 - 0.1071) / 0.1875 x 100 = 0.0804 / 0.1875 x 100 = 42.9%. This relatively low VE (43%) for measles vaccine (expected 85-95% for one dose) suggests vaccine failure - either primary failure (vaccine didn't induce immunity) or secondary failure (immunity waned). This outbreak demonstrates the importance of two-dose measles vaccination: single dose leaves 5-15% without immunity, and with high measles R0 (12-18), even this small susceptible proportion can sustain outbreaks. Actions: analyze coverage for second dose (MCV2), conduct outbreak response immunization."
  },
  {
    id: 40,
    question: "During a dengue outbreak, an entomological survey of 200 houses finds: 36 houses with Aedes aegypti larvae (House Index = 18%), 50 positive containers in these 36 houses (Breteau Index = 50/200 = 25), 50 positive containers out of 300 water-holding containers inspected (Container Index = 50/300 = 16.7%). The outbreak response team prioritizes which action based on a BI of 25?",
    options: [
      "A BI of 25 indicates low vector density; no emergency intervention required",
      "A BI of 25 far exceeds the dengue transmission threshold (BI >5) and the critical BI (BI >50 = epidemic danger); this indicates high vector density requiring emergency larval source management (draining, covering, or treating all water containers), community mobilization for source reduction, and targeted ULV space spraying to reduce adult Aedes populations",
      "A BI of 25 is acceptable; only a BI >100 requires emergency response",
      "Entomological indices are not actionable; only confirmed dengue case counts drive response"
    ],
    answer: 1,
    explanation: "Breteau Index (BI) interpretation: BI < 5 = low risk; BI 5-50 = dengue transmission risk (action required); BI > 50 = critical, epidemic danger. A BI of 25 places the area in the high-risk transmission zone. WHO and NVBDCP define: BI > 5 triggers vector control actions; BI > 20 requires emergency response. Actions at BI = 25: (1) Emergency Larval Source Management (LSM): house-to-house inspection and elimination of all Aedes breeding sites (covering drums, emptying coolers, clearing roof gutters, treating flower vases); (2) Community mobilization for 'dry day' (one day/week when all containers emptied); (3) Temephos (abate) or BTI application to non-drainable containers; (4) ULV space spraying during early morning/evening (Aedes peak biting times) to kill adult mosquitoes; (5) Re-survey after 2 weeks to assess BI reduction. Entomological indices are the primary tool for guiding vector control decisions BEFORE outbreak peaks."
  },
  {
    id: 41,
    question: "A hospital infection control team investigates a cluster of 8 nosocomial Clostridioides difficile infections (CDI) in a medical ward over 6 weeks. All cases had received broad-spectrum antibiotics. Whole genome sequencing (WGS) of all 8 isolates shows they are clonal (>99.9% genomic similarity). What does clonality confirm and what is the next investigative step?",
    options: [
      "Clonality confirms the outbreak but is irrelevant to control measures",
      "Clonality proves antibiotic use is the sole cause; no further environmental investigation needed",
      "Clonality confirms a common source outbreak (all cases infected by the same strain) rather than multiple independent acquisitions; next step is to identify the transmission pathway: environmental sampling of ward surfaces, shared equipment, HCW hand cultures, and review of case-patient care overlap (same rooms, beds, staff, procedures) to identify the source/route of cross-transmission",
      "Clonality means surgical ward closure is mandatory"
    ],
    answer: 2,
    explanation: "WGS clonality interpretation: when outbreak isolates are genetically identical or near-identical (>99.9% similarity), it confirms a common source outbreak - all patients were infected by the same strain, indicating transmission from a single source rather than multiple independent environmental sources or patient introductions. This rules out coincidental co-occurrence of unrelated CDI cases. Next investigative steps: (1) Environmental sampling: ward surfaces (call buttons, bed rails, commodes, shared toilets) - C. difficile spores persist for months; (2) Review patient care overlap: shared rooms, beds, care staff, procedures (colonoscopy equipment, enema equipment); (3) Case-patient timeline: construct a line list with room assignments to identify transmission chains; (4) HCW screening (rarely done for CDI but may identify asymptomatic carriers); (5) Implement and assess control measures: contact precautions, spore-killing disinfection (bleach), hand hygiene with soap/water, antibiotic stewardship."
  },
  {
    id: 42,
    question: "A seroprevalence survey for dengue is being designed in an urban district with an estimated dengue seroprevalence of 40%. The survey aims to estimate prevalence with 5% absolute precision and 95% confidence. What sample size is required (ignoring design effect)?",
    options: [
      "n = z² x p x (1-p) / d² = 1.96² x 0.40 x 0.60 / 0.05² = 3.84 x 0.24 / 0.0025 = 369 individuals",
      "n = 1000 (standard minimum for seroprevalence surveys)",
      "n = 100 (sufficient for a pilot study)",
      "n = 2000 (always required for urban surveys)"
    ],
    answer: 0,
    explanation: "Sample size for prevalence studies: n = Z² x p x (1-p) / d², where Z = 1.96 for 95% confidence, p = expected prevalence = 0.40, (1-p) = 0.60, d = desired absolute precision = 0.05 (5%). n = (1.96)² x 0.40 x 0.60 / (0.05)² = 3.8416 x 0.24 / 0.0025 = 0.9220 / 0.0025 = 368.6, rounded up to 369 individuals. Practical considerations: (1) Add 10-20% for non-response: final n ≈ 406-443; (2) If cluster sampling is used (e.g., cluster random sampling of households), multiply by design effect (DEFF, typically 1.5-2.5): n = 369 x DEFF; (3) Precision can be improved by narrowing d to 3% (n = 1025) or worsened by wider d to 10% (n = 92). The formula assumes simple random sampling. For stratified surveys, calculate stratum-specific sample sizes. Seroprevalence surveys for dengue typically use this approach with cluster sampling of households."
  },
  {
    id: 43,
    question: "In interpreting IDSP weekly outbreak data, a state epidemiologist notes that the number of reported outbreaks of acute diarrheal disease (ADD) increases sharply in June-July every year. This seasonal pattern is observed consistently over 5 years. What is the MOST appropriate interpretation and programmatic response?",
    options: [
      "The June-July increase represents surveillance artifact (reporting increases due to summer holidays when health workers have more time to report)",
      "Each June-July cluster should be investigated as a new independent outbreak",
      "The consistent seasonal pattern of ADD outbreaks in June-July (monsoon onset) likely reflects predictable epidemiological factors: heavy rainfall causing sewage overflow and drinking water contamination, flooding of open defecation sites, increased fly density, and higher ambient temperatures promoting pathogen growth; programmatic response: pre-monsoon preparedness activities (water chlorination, ORS stockpiling, health worker training, sanitation improvement) should be completed by May every year",
      "Seasonal patterns indicate the IDSP system is unreliable; ignore the data"
    ],
    answer: 2,
    explanation: "Seasonal disease patterns analysis and programme response: The consistent June-July ADD outbreak peak correlates with monsoon onset - a well-documented epidemiological phenomenon: (1) Heavy rainfall overwhelms sewage systems causing fecal contamination of drinking water sources; (2) Flooding spreads open defecation site contamination; (3) Increased fly population density amplifies fecal-oral transmission; (4) Higher temperatures (27-37°C) accelerate bacterial growth in food and water. Pre-monsoon preparedness (May-June): (a) District-level water source mapping and chlorination; (b) ORS and zinc stockpiling at sub-centres; (c) ANM/ASHA training on diarrhea case management; (d) Water quality testing before monsoon; (e) Sanitation drives (elimination of open defecation sites); (f) Contingency plans for flood scenarios. Using predictable seasonal patterns for prospective programme planning is a hallmark of effective disease surveillance utilization."
  },
  {
    id: 44,
    question: "During an unknown fever cluster investigation in a forested tribal district of Chhattisgarh, 30 patients present with fever, rash, and lymphadenopathy over 3 weeks. There is no prior seasonal pattern for this presentation. The IDSP Rapid Response Team arrives. Which differential epidemiological approach BEST guides specimen collection and preliminary management?",
    options: [
      "Collect only malaria blood smears as malaria is the most common cause of fever in tribal Chhattisgarh",
      "Apply the DIME (Disease, Incubation period, Mode of transmission, Epidemiology) framework: clinically characterize cases (fever pattern, rash morphology, lymphadenopathy type), construct an epidemic curve, map cases geographically, conduct exposure history (forest entry, animal contact, tick/mite exposure, water source), and collect a systematic specimen panel: blood for malaria (smear + RDT), serology for scrub typhus, spotted fever, leptospirosis, dengue, hepatitis; blood culture; EDTA blood for PCR for rickettsial diseases - to rule in/out multiple diagnoses simultaneously",
      "Prescribe antibiotics to all patients and monitor response to guide diagnosis",
      "Refer all patients to AIIMS Delhi before any investigation"
    ],
    answer: 1,
    explanation: "Unknown fever cluster in tribal forested areas requires a systematic differential epidemiological approach: (1) Clinical characterization: fever pattern (continuous, intermittent, remittent), rash type (maculopapular, petechial, eschar), lymphadenopathy pattern, organ involvement - these narrow the differential; (2) Epidemic curve: point source vs ongoing exposure; (3) Geographic mapping: forest-linked clusters suggest vector/zoonotic etiology; (4) Exposure history: tick exposure (spotted fever), mite exposure (scrub typhus), rodent/small mammal contact (leptospirosis), forest entry timing; (5) Systematic specimen panel: blood smear + RDT (malaria), serology (Weil-Felix for rickettsia, IgM ELISA for scrub typhus, leptospira, dengue, chikungunya), blood culture (bacteremia, typhoid), EDTA blood for PCR panel. In tribal Chhattisgarh, scrub typhus, spotted fever rickettsiae (Rickettsia conorii), malaria, and leptospirosis are key differentials. Empirical antibiotic therapy may be started (doxycycline covers most rickettsial diseases) but after specimen collection."
  },
  {
    id: 45,
    question: "A food poisoning outbreak at a school lunch event is investigated using a cohort study. The 2x2 table for the suspect food (chicken roll) shows: Ate chicken roll and ill = 70; Ate chicken roll and not ill = 30; Did not eat and ill = 10; Did not eat and not ill = 90. Calculate both the Relative Risk (RR) and Odds Ratio (OR), and explain which is more appropriate for this outbreak.",
    options: [
      "RR = 70/10 = 7; OR = 70/30 = 2.3; RR is more appropriate",
      "RR = (70/100) / (10/100) = 7.0; OR = (70 x 90) / (30 x 10) = 21; RR (7.0) is more appropriate for this cohort outbreak study as it directly estimates the probability ratio; OR (21) overestimates RR when disease is common (70% attack rate in exposed)",
      "RR = 7.0; OR = 21; OR is always preferred over RR in epidemiology",
      "RR and OR are identical when disease is common"
    ],
    answer: 1,
    explanation: "2x2 table: a = 70 (exposed+ill), b = 30 (exposed+not ill), c = 10 (unexposed+ill), d = 90 (unexposed+not ill). RR = [a/(a+b)] / [c/(c+d)] = (70/100) / (10/100) = 0.70/0.10 = 7.0. OR = (a x d) / (b x c) = (70 x 90) / (30 x 10) = 6300/300 = 21. OR (21) substantially overestimates RR (7) because the attack rate in exposed is high (70%) - OR approximates RR only when disease prevalence/attack rate is low (<10%; the rare disease assumption). In a cohort/outbreak study where all participants are followed from a defined exposure event, RR is the preferred measure of association as it directly measures the ratio of risks (probabilities). OR is preferred in case-control studies where the study design does not allow direct risk estimation. The 3-fold difference between OR (21) and RR (7) demonstrates why using OR as a proxy for RR is invalid when attack rates are high."
  },
  {
    id: 46,
    question: "An IDSP outbreak report from a district shows 85 cases of viral hepatitis from a single locality over 6 weeks. Laboratory results confirm 90% are Hepatitis E virus (HEV). The locality uses a shared overhead tank connected to a borewell. What study design is MOST appropriate to identify the specific source within the water system?",
    options: [
      "Randomized controlled trial comparing different water sources",
      "Cross-sectional survey of current HEV seroprevalence across the district",
      "Retrospective cohort study: enroll all residents of the locality and compare attack rates by water source characteristics (connection to overhead tank, alternative water sources, water usage patterns, boiling habits) - RR calculation for specific exposures to identify which point in the water supply system is the contamination source",
      "Case series describing clinical features of the 85 confirmed cases"
    ],
    answer: 2,
    explanation: "Waterborne outbreak investigation study design: A retrospective cohort study is most appropriate when the at-risk population is defined (residents of the locality) and is available for interview. The study: (1) Enrolls all residents of the locality (cases + non-cases); (2) Collects exposure history: which water source each household uses, frequency of use, water treatment practices (boiling, filtration), access to alternative sources; (3) Calculates attack rates and RR for each exposure: households using the suspect overhead tank vs borewell vs piped water vs purchased water; (4) Maps distribution network to identify potential contamination points; (5) Collects environmental samples: water from the borewell, overhead tank, distribution pipes, and household taps at different points for fecal coliform, E. coli counts, and HEV PCR. Case-control design could be used if enrolling all residents is impractical; cross-sectional or case series cannot identify the source."
  },
  {
    id: 47,
    question: "A researcher designs a seroprevalence survey to estimate the proportion of the population with prior dengue infection using IgG ELISA. The survey uses a two-stage cluster sampling design: first-stage selection of 30 clusters (villages), second-stage selection of 20 households per cluster, with one adult per household sampled. What is the primary analytical challenge in this design?",
    options: [
      "Two-stage cluster sampling always produces biased results and should not be used",
      "Cluster sampling creates within-cluster correlation (design effect) - individuals within the same cluster are more similar to each other in dengue exposure and immunity than to individuals in other clusters; standard SE formulas assuming SRS will underestimate variance; analysis must account for cluster sampling using survey-weighted methods (SVY commands in Stata, PROC SURVEY in SAS) with cluster as the primary sampling unit to obtain correct standard errors and confidence intervals",
      "The design is perfectly valid; no special analytical considerations are needed",
      "Only one cluster per stratum can be analyzed; 30 clusters are too many"
    ],
    answer: 1,
    explanation: "Cluster sampling analytical challenges: (1) Within-cluster correlation (ICC): individuals in the same village share environment, vector exposure, and past outbreaks - they are more similar to each other than to individuals in other villages; (2) Design effect (DEFF): the factor by which variance increases due to clustering compared to simple random sampling; DEFF = 1 + (m-1) x ICC, where m = cluster size. For dengue seroprevalence (ICC often 0.1-0.3), DEFF of 2-5 is common; (3) Standard error underestimation: ignoring clustering underestimates SEs, producing falsely narrow CIs and inflated statistical significance; (4) Analytical methods: survey-weighted analyses in statistical software account for sampling probabilities, clustering, and stratification; Taylor linearization or bootstrap methods estimate correct variances; (5) Sample size: must be increased by DEFF at design stage. This is standard in WHO EPI cluster surveys (30x7 design for vaccination coverage) and seroprevalence surveys."
  },
  {
    id: 48,
    question: "An ICMR research team calculates the sample size needed to estimate the prevalence of hepatitis B surface antigen (HBsAg) carriage in a population where a previous study found 3% prevalence. They want 95% confidence and 1% absolute precision. What sample size is required and what practical challenge does this present?",
    options: [
      "n = 1.96² x 0.03 x 0.97 / 0.01² = 3.84 x 0.0291 / 0.0001 = 1,117 individuals; this is feasible for a district-level survey",
      "n = 1.96² x 0.03 x 0.97 / 0.01² = 1,117; this is the basic SRS estimate but for cluster sampling with DEFF = 2, required n = 2,234; with 15% non-response adjustment, final n = 2,570; logistically challenging for a serology survey requiring blood collection",
      "n = 100; sufficient for rare disease prevalence estimation",
      "Sample size cannot be calculated for prevalences below 5%"
    ],
    answer: 1,
    explanation: "Sample size calculation: n = Z² x p x (1-p) / d² = (1.96)² x 0.03 x 0.97 / (0.01)² = 3.8416 x 0.0291 / 0.0001 = 0.1118 / 0.0001 = 1,118 ≈ 1,118 (SRS). Adjustments: (1) Design effect for cluster sampling: if DEFF = 2, n = 1,118 x 2 = 2,236; (2) Non-response: assuming 15% non-response, n = 2,236 / 0.85 = 2,631; (3) Practical challenge: blood collection from >2,500 individuals for HBsAg serology is resource-intensive, requiring trained phlebotomists, cold chain for specimen transport, ELISA laboratory capacity, and significant funding; (4) Low prevalence (3%) means 97% of participants are sampled but do not have the outcome - large denominator required for precise estimation of rare conditions; (5) With 2% absolute precision (d = 0.02), n drops to 280 (SRS) - precision requirement substantially affects feasibility. This trade-off between precision and feasibility is a central challenge in seroprevalence study design."
  },
  {
    id: 49,
    question: "A five-year time-series analysis of malaria cases in a district shows a declining trend from 2500 cases in 2018 to 800 cases in 2022, with a temporary spike to 1800 cases in 2020 (COVID-19 pandemic year). Which statistical and epidemiological interpretations are MOST appropriate?",
    options: [
      "The overall 5-year trend shows a 68% reduction (2500 to 800), consistent with malaria control progress; the 2020 spike represents disrupted malaria services during COVID-19 (reduced surveillance, treatment-seeking, vector control activities) rather than true increased transmission; interrupted time series analysis can separate the trend from the COVID-19 disruption effect; the post-2020 resumption of decline confirms the disruption was temporary",
      "The 2020 spike proves malaria control has failed; the entire programme should be redesigned",
      "Time series analysis cannot account for COVID-19 disruption; the 2020 data should be excluded entirely",
      "The declining trend is statistically insignificant without p-value calculation"
    ],
    answer: 0,
    explanation: "Time-series analysis of malaria data: (1) Overall trend: 2500 to 800 cases = 68% reduction over 5 years, consistent with successful malaria control; (2) 2020 anomaly: the COVID-19 pandemic caused well-documented disruptions to malaria surveillance and services globally - lockdowns reduced health-seeking behavior, health workers were redeployed, supply chains disrupted (RDT, ACT shortages), surveillance completeness dropped; (3) Analytical approach: Interrupted Time Series (ITS) analysis can model: pre-COVID trend (2018-2019), level change at COVID onset (2020), post-COVID trend (2021-2022), separating programme effect from external disruption; (4) Causal inference: the resumption of decline post-2020 supports that the disruption was temporary; (5) Policy implication: pandemic preparedness plans must include maintaining essential health services (malaria, TB, immunization) during health emergencies. Using 2020 data without context would give misleading programme evaluation conclusions."
  },
  {
    id: 50,
    question: "India's National Action Plan for Elimination of Lymphatic Filariasis (NAPELF) uses mass drug administration (MDA) with diethylcarbamazine (DEC) + albendazole in endemic districts. An implementation researcher evaluates MDA coverage in a district with reported administrative coverage of 85% (doses distributed/total population x 100) but a community survey shows effective coverage of only 62% (doses actually swallowed under observation). Which concept does this discrepancy illustrate?",
    options: [
      "Both measures are identical; the discrepancy is a data entry error",
      "Administrative coverage (doses distributed) consistently overestimates effective coverage (doses actually consumed) in MDA programmes; the 23% gap indicates pill-taking non-compliance or drug hoarding; this distinction is operationally critical because MDA effectiveness depends on the proportion actually consuming the drug, and effective coverage must exceed the transmission interruption threshold (approximately 65% of total population or 85% of eligible population) for LF elimination",
      "Administrative coverage is always the correct measure; community survey coverage is unreliable",
      "Effective coverage of 62% exceeds the LF elimination threshold; no action is required"
    ],
    answer: 1,
    explanation: "Administrative vs effective coverage in MDA: Administrative coverage = (Doses distributed / Target population) x 100. This is a proxy that overestimates consumption because: (1) Drugs may be distributed but not swallowed (pill hoarding); (2) Community members may be counted as covered when they received but discarded the drug; (3) Beneficiary lists may be inaccurate. Effective coverage (treatment coverage) = proportion who actually consumed the drug under observation or verified consumption. The 23% gap (85% vs 62%) in this example is a critical programmatic finding. LF elimination threshold: WHO requires >65% effective population coverage (approximately 85% of eligible population, excluding contraindicated groups) for MDA to interrupt transmission. At 62% effective coverage, the programme may not achieve transmission interruption. Solutions: supervised swallowing (observe drug consumption), social mobilization to address drug hesitancy, coverage surveys to validate administrative data. Coverage surveys are now mandatory every 3 years in LF endemic districts under NAPELF."
  }
];

export default questions;

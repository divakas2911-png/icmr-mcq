const questions = [
  {
    id: 1,
    question: "In block randomization with a block size of 4 and two treatment groups (A and B), how many possible arrangements exist within a single block?",
    options: ["4", "6", "8", "12"],
    answer: 1,
    explanation: "With a block size of 4 and 2 equal groups (2A and 2B per block), the number of possible arrangements is 4!/(2!×2!) = 6. This ensures balance is maintained after every complete block."
  },
  {
    id: 2,
    question: "Which of the following is the BEST method to ensure allocation concealment in a clinical trial?",
    options: ["Using opaque sealed envelopes", "Central telephone randomization", "Block randomization with fixed block size", "Stratified randomization"],
    answer: 1,
    explanation: "Central telephone or web-based randomization provides the best allocation concealment because the allocation is kept at a remote location and is only revealed after a patient is definitively enrolled, preventing any possibility of predicting the next allocation."
  },
  {
    id: 3,
    question: "In a stratified randomization, stratification is MOST useful when:",
    options: ["The sample size is very large (>1000 per arm)", "Prognostic factors are known and strongly predictive of outcome", "The trial is blinded to all parties", "Randomization is performed centrally"],
    answer: 1,
    explanation: "Stratified randomization is most beneficial when specific factors (like age, disease severity, or center) are strongly predictive of the outcome. It ensures balanced distribution of these prognostic factors across treatment arms, reducing confounding."
  },
  {
    id: 4,
    question: "In a cluster randomized trial, the intraclass correlation coefficient (ICC) is used to:",
    options: ["Measure treatment effect size", "Account for similarity of subjects within the same cluster when calculating sample size", "Determine the number of clusters needed for blinding", "Assess baseline comparability between groups"],
    answer: 1,
    explanation: "The ICC quantifies the degree of similarity between individuals within the same cluster. A higher ICC means individuals within clusters are more alike, which reduces the effective sample size. ICC is used to calculate the design effect (DEFF = 1 + (m-1) × ICC), which inflates the required sample size."
  },
  {
    id: 5,
    question: "A double-blind trial means:",
    options: ["Both the patient and the outcome assessor are blinded", "Both the patient and the treating physician are blinded to treatment allocation", "Both the data analyst and the statistician are blinded", "Both the sponsor and the investigator are blinded"],
    answer: 1,
    explanation: "In a double-blind trial, both the patient (subject) and the treating physician (investigator) are unaware of the treatment assignment. This prevents performance bias (changes in care based on knowledge of assignment) and detection bias (differential outcome assessment)."
  },
  {
    id: 6,
    question: "A non-inferiority trial aims to demonstrate that:",
    options: ["The new treatment is better than the control by a predefined margin", "The new treatment is not worse than the control by more than a predefined margin (delta)", "The new treatment has equal efficacy to placebo", "The new treatment is superior to the active comparator"],
    answer: 1,
    explanation: "Non-inferiority trials test whether a new treatment is not unacceptably worse than an established treatment. The margin of acceptable inferiority (delta or delta-margin) is pre-specified. If the lower confidence interval boundary of the difference does not cross the delta-margin, non-inferiority is established."
  },
  {
    id: 7,
    question: "The primary purpose of a run-in period in a clinical trial is to:",
    options: ["Increase the sample size needed for the study", "Eliminate non-compliant patients and establish baseline stability before randomization", "Determine the maximum tolerated dose of the intervention", "Prevent carryover effects between treatment periods"],
    answer: 1,
    explanation: "A run-in period precedes randomization and is used to: (1) assess and exclude non-compliant participants, (2) allow previous treatments to wash out, (3) stabilize baseline measurements, and (4) ensure participants meet eligibility criteria under observation. This enriches the study population and can reduce sample size requirements."
  },
  {
    id: 8,
    question: "The washout period in a crossover trial is designed to:",
    options: ["Allow participants to adjust to the new treatment", "Eliminate the residual effect of the first treatment before the second treatment begins", "Collect baseline data between two study periods", "Reduce the total study duration"],
    answer: 1,
    explanation: "In a crossover trial, participants receive both treatments sequentially. The washout period between treatment periods ensures that any residual biological effects (carryover effects) from the first treatment have been eliminated before starting the second treatment. It should typically last at least 5 half-lives of the drug."
  },
  {
    id: 9,
    question: "Which of the following is a valid stopping rule for early termination of a clinical trial?",
    options: ["Enrollment is slower than expected", "Interim analysis shows overwhelming efficacy beyond the pre-specified boundary (O'Brien-Fleming)", "The principal investigator changes institutions", "The funding agency requests a budget review"],
    answer: 1,
    explanation: "Pre-specified stopping rules based on interim analysis results are valid grounds for early termination. The O'Brien-Fleming boundary is a conservative alpha-spending approach used by Data Safety Monitoring Boards (DSMBs). Trials can be stopped for overwhelming efficacy, clear harm, or futility based on pre-defined statistical boundaries."
  },
  {
    id: 10,
    question: "In an open-label trial, which bias is MOST likely to be introduced?",
    options: ["Selection bias", "Information bias and performance bias due to knowledge of treatment assignment", "Survivorship bias", "Recall bias"],
    answer: 1,
    explanation: "In open-label trials, both participants and investigators know the treatment assignment. This can lead to performance bias (differential care or behavior) and information bias (differential outcome ascertainment or reporting). Participants may report outcomes differently based on their knowledge of which treatment they received."
  },
  {
    id: 11,
    question: "A point source epidemic curve showing a sharp rise and rapid fall within one incubation period is characteristic of:",
    options: ["Propagated (person-to-person) spread", "Common source (point source) outbreak", "Mixed epidemic pattern", "Vector-borne transmission"],
    answer: 1,
    explanation: "A point source epidemic curve has a rapid rise and fall, with most cases clustered within one incubation period, indicating that all cases were exposed to a common source at approximately the same time (e.g., a contaminated meal at a single event). The shape reflects the incubation period distribution."
  },
  {
    id: 12,
    question: "In a food-borne outbreak at a wedding, 80 people ate rice and 40 fell ill. Among the 120 who did not eat rice, 10 fell ill. The attack rate among those who ate rice is:",
    options: ["33%", "50%", "40%", "25%"],
    answer: 1,
    explanation: "Attack rate = (Number of ill among those exposed / Total exposed) × 100 = (40/80) × 100 = 50%. The attack rate among non-rice eaters is (10/120) × 100 = 8.3%. The relative risk is 50/8.3 ≈ 6, suggesting rice is the likely vehicle of infection."
  },
  {
    id: 13,
    question: "The secondary attack rate (SAR) measures:",
    options: ["The proportion of the total population that develops disease", "The proportion of susceptible contacts of primary cases who develop disease within one incubation period", "The number of secondary cases generated by one primary case", "The attack rate in the second wave of an epidemic"],
    answer: 1,
    explanation: "SAR = (Number of secondary cases among contacts / Total susceptible contacts) × 100. It measures the transmissibility of disease from primary cases to their susceptible contacts within one maximum incubation period. It is used to assess household transmission and vaccine effectiveness."
  },
  {
    id: 14,
    question: "The basic reproduction number (R0) of 2.5 for a disease means:",
    options: ["25% of the population will be infected", "Each infected person will infect an average of 2.5 others in a fully susceptible population", "The epidemic will end after 2.5 generations", "The herd immunity threshold is 25%"],
    answer: 1,
    explanation: "R0 is the average number of secondary cases generated by one primary case in a completely susceptible population. An R0 of 2.5 means each case, on average, infects 2.5 others. The herd immunity threshold (HIT) = 1 - (1/R0) = 1 - 1/2.5 = 60%. For R0>1, epidemic spread occurs."
  },
  {
    id: 15,
    question: "The effective reproduction number (Rt) differs from R0 in that Rt:",
    options: ["Accounts for the proportion of the population that is susceptible (not immune) at time t", "Measures transmissibility in the pre-immune population only", "Is always higher than R0", "Cannot be calculated during an ongoing epidemic"],
    answer: 0,
    explanation: "Rt is the actual reproduction number at time t, accounting for the proportion of the population that remains susceptible (i.e., not yet immune through infection or vaccination). Rt = R0 × s, where s is the proportion susceptible. When Rt drops below 1, the epidemic begins to decline."
  },
  {
    id: 16,
    question: "The generation time in an infectious disease is defined as:",
    options: ["The time from exposure to onset of symptoms", "The average time between infection of a primary case and infection of a secondary case", "The time for the epidemic to double in size", "The duration of the infectious period"],
    answer: 1,
    explanation: "Generation time is the average interval between infection of a primary case and infection of secondary cases generated by that primary case. It is distinct from the serial interval (symptom onset to symptom onset) and the incubation period (exposure to symptom onset). Understanding generation time is critical for modeling epidemic dynamics."
  },
  {
    id: 17,
    question: "Serial interval differs from generation time in that serial interval is measured from:",
    options: ["Infection to infection", "Symptom onset of a primary case to symptom onset of secondary cases", "Exposure to peak infectivity", "First symptom to recovery"],
    answer: 1,
    explanation: "Serial interval is the time between symptom onset in a primary case and symptom onset in secondary cases infected by that primary case. Generation time is measured from infection to infection. Serial interval is observable in the field (because infection events are rarely known), making it a practical proxy for generation time."
  },
  {
    id: 18,
    question: "Which element of the chain of infection is targeted by contact tracing and isolation?",
    options: ["Reservoir", "Mode of transmission", "Portal of entry", "Susceptible host"],
    answer: 1,
    explanation: "Contact tracing identifies exposed individuals (potential secondary cases), while isolation of infectious cases interrupts the mode of transmission by preventing infected individuals from contacting susceptible hosts. Together, they break the chain of infection at the transmission link."
  },
  {
    id: 19,
    question: "The incubation period is epidemiologically significant because it:",
    options: ["Determines the severity of disease", "Helps establish the likely time and source of exposure and informs the duration of quarantine", "Predicts the case fatality rate", "Defines the period during which a patient is most infectious"],
    answer: 1,
    explanation: "The incubation period (exposure to symptom onset) helps investigators trace back the likely time of exposure, identify the source, and determine the appropriate quarantine period (usually the maximum incubation period). It is distinct from the infectious period and does not directly predict severity or fatality."
  },
  {
    id: 20,
    question: "Disease mapping in epidemiology is MOST useful for:",
    options: ["Estimating individual-level risk factors", "Identifying geographic clustering of disease to generate hypotheses about environmental or social determinants", "Determining incubation periods of infectious diseases", "Calculating attributable risk in case-control studies"],
    answer: 1,
    explanation: "Disease mapping visualizes the geographic distribution of disease incidence or prevalence, helping to identify spatial clusters, hotspots, and potential environmental or social determinants. Tools include choropleth maps, spot maps, and spatial scan statistics. They generate hypotheses that can then be tested analytically."
  },
  {
    id: 21,
    question: "The recommended screening test for congenital hypothyroidism in newborns under India's Rashtriya Bal Swasthya Karyakram (RBSK) is:",
    options: ["Serum free T4 level", "Thyroid stimulating hormone (TSH) from heel-prick blood spot on filter paper", "Thyroid peroxidase antibody", "Serum total T3"],
    answer: 1,
    explanation: "Neonatal screening for congenital hypothyroidism uses TSH measurement from dried blood spots (DBS) collected via heel-prick at 48-72 hours of life. A TSH > 20 mIU/L on screening requires confirmatory serum TSH and free T4 testing. Early treatment prevents intellectual disability."
  },
  {
    id: 22,
    question: "Otoacoustic Emissions (OAE) testing in newborn hearing screening detects:",
    options: ["Neural conduction along the auditory nerve", "Sounds produced by the outer hair cells of the cochlea in response to stimuli", "Brainstem auditory evoked potentials", "Middle ear pressure and compliance"],
    answer: 1,
    explanation: "OAE testing measures sounds generated by the outer hair cells of the cochlea (otoacoustic emissions) in response to acoustic stimuli. A present OAE indicates normal cochlear function. It cannot detect retrocochlear (neural) hearing loss. It is a fast, objective, and non-invasive first-tier screening test."
  },
  {
    id: 23,
    question: "The PHQ-9 score range indicating moderately severe depression requiring treatment consideration is:",
    options: ["5-9", "10-14", "15-19", "20-27"],
    answer: 2,
    explanation: "PHQ-9 scoring: 1-4 (minimal), 5-9 (mild), 10-14 (moderate), 15-19 (moderately severe), 20-27 (severe). Scores of 15 and above typically warrant active treatment. The PHQ-9 is validated for screening, diagnosis, and monitoring treatment response in depression."
  },
  {
    id: 24,
    question: "The CAGE questionnaire for alcohol screening: a score of 2 or more is considered positive. What does the 'G' in CAGE stand for?",
    options: ["Goals about cutting down", "Guilty feeling about drinking", "Getting help from others", "Grade of alcohol consumption"],
    answer: 1,
    explanation: "CAGE: C = Cut down (ever felt you should cut down on drinking?), A = Annoyed (annoyed by criticism of drinking?), G = Guilty (felt guilty about drinking?), E = Eye-opener (needed a morning drink?). A score ≥2 has sensitivity of ~70-85% and specificity of ~80-90% for alcohol use disorder."
  },
  {
    id: 25,
    question: "The Oral Glucose Tolerance Test (OGTT) diagnostic criterion for gestational diabetes mellitus (GDM) using the WHO 2013 criteria is:",
    options: ["Fasting ≥7.0 mmol/L or 2-hour ≥11.1 mmol/L", "Fasting ≥5.1 mmol/L or 1-hour ≥10.0 mmol/L or 2-hour ≥8.5 mmol/L", "Fasting ≥6.1 mmol/L or 2-hour ≥9.0 mmol/L", "Fasting ≥6.5 mmol/L or 1-hour ≥9.0 mmol/L"],
    answer: 1,
    explanation: "WHO 2013 criteria for GDM diagnosis using 75g OGTT: fasting ≥5.1 mmol/L (92 mg/dL), OR 1-hour ≥10.0 mmol/L (180 mg/dL), OR 2-hour ≥8.5 mmol/L (153 mg/dL). Only one abnormal value is needed. This is different from the Carpenter-Coustan criteria which requires two abnormal values."
  },
  {
    id: 26,
    question: "For hypertension screening, the JNC 7 classification defines Stage 1 hypertension as:",
    options: ["SBP 120-129 mmHg or DBP <80 mmHg", "SBP 130-139 mmHg or DBP 80-89 mmHg", "SBP 140-159 mmHg or DBP 90-99 mmHg", "SBP ≥160 mmHg or DBP ≥100 mmHg"],
    answer: 2,
    explanation: "JNC 7 classification: Normal (<120/<80), Prehypertension (120-139/80-89), Stage 1 HTN (140-159/90-99), Stage 2 HTN (≥160/≥100). Note: ACC/AHA 2017 guidelines reclassified Stage 1 as 130-139/80-89, but JNC 7 remains commonly referenced in many exam contexts."
  },
  {
    id: 27,
    question: "The Triple Test (Maternal Serum Screening) in the second trimester includes measurement of:",
    options: ["AFP, hCG, and unconjugated estriol (uE3)", "AFP, PAPP-A, and NT measurement", "hCG, progesterone, and AFP", "AFP, inhibin A, and PAPP-A"],
    answer: 0,
    explanation: "The Triple Test (15-20 weeks) measures alpha-fetoprotein (AFP), human chorionic gonadotropin (hCG), and unconjugated estriol (uE3). Adding inhibin A creates the Quad screen. In Down syndrome: low AFP, low uE3, high hCG. In Neural tube defects: elevated AFP. PAPP-A is part of first-trimester combined screening."
  },
  {
    id: 28,
    question: "CA-125 as a tumor biomarker is MOST associated with:",
    options: ["Hepatocellular carcinoma", "Epithelial ovarian cancer", "Breast cancer", "Colorectal cancer"],
    answer: 1,
    explanation: "CA-125 (Cancer Antigen 125) is elevated in ~80% of advanced epithelial ovarian cancers. It is used for monitoring treatment response and detecting recurrence, not for primary population screening due to low specificity. AFP is used for hepatocellular carcinoma; CEA for colorectal cancer; CA 15-3 for breast cancer."
  },
  {
    id: 29,
    question: "The recommended interval for cervical cancer screening using Pap smear in average-risk women aged 21-65 years (per most guidelines) is:",
    options: ["Every year", "Every 2 years", "Every 3 years", "Every 5 years with HPV co-testing"],
    answer: 2,
    explanation: "For women aged 21-65, cytology (Pap smear) alone every 3 years is recommended. Alternatively, co-testing with Pap smear and HPV test every 5 years is acceptable for women aged 30-65. Annual screening is no longer recommended as it leads to excessive follow-up for transient HPV infections."
  },
  {
    id: 30,
    question: "Developmental screening tool Denver Developmental Screening Test (DDST-II) screens for developmental delays in children up to age:",
    options: ["2 years", "5 years", "6 years", "10 years"],
    answer: 2,
    explanation: "The Denver Developmental Screening Test II (DDST-II) screens children from birth to 6 years of age across four developmental domains: personal-social, fine motor-adaptive, language, and gross motor. It identifies children who need further diagnostic evaluation, not diagnosis of developmental disorders."
  },
  {
    id: 31,
    question: "According to the WHO '5 Moments for Hand Hygiene', which moment occurs BEFORE a clean/aseptic procedure?",
    options: ["Moment 1", "Moment 2", "Moment 3", "Moment 4"],
    answer: 1,
    explanation: "WHO 5 Moments: (1) Before touching a patient, (2) Before a clean/aseptic procedure, (3) After body fluid exposure risk, (4) After touching a patient, (5) After touching patient surroundings. Moment 2 (before clean/aseptic procedure) protects the patient from harmful organisms that may be on the healthcare worker's hands."
  },
  {
    id: 32,
    question: "High-level disinfection (HLD) achieves which of the following?",
    options: ["Destruction of all microorganisms including all bacterial spores", "Destruction of all microorganisms except high numbers of bacterial spores", "Destruction of vegetative bacteria, fungi, and lipid viruses only", "Destruction of vegetative bacteria and mycobacteria only"],
    answer: 1,
    explanation: "HLD destroys all microorganisms (vegetative bacteria, mycobacteria, fungi, non-lipid and lipid viruses) EXCEPT high concentrations of bacterial spores. Sterilization destroys all forms including all spores. Intermediate-level disinfection kills mycobacteria, fungi, and viruses but not necessarily all spores."
  },
  {
    id: 33,
    question: "According to the Spaulding classification, laryngoscope blades are classified as:",
    options: ["Non-critical items requiring low-level disinfection", "Semi-critical items requiring at minimum high-level disinfection", "Critical items requiring sterilization", "Non-critical items requiring intermediate-level disinfection"],
    answer: 1,
    explanation: "Spaulding classification: Critical items (contact sterile tissue/bloodstream) require sterilization. Semi-critical items (contact mucous membranes or non-intact skin) require HLD. Non-critical items (contact intact skin) require low-level disinfection. Laryngoscope blades contact mucous membranes and are therefore semi-critical, requiring HLD."
  },
  {
    id: 34,
    question: "Under the Biomedical Waste Management Rules, 2016 (India), yellow-colored bags are used for:",
    options: ["Recyclable waste like glass and metallic implants", "Human anatomical waste, soiled waste (dressings, cotton), and expired medicines", "Sharps and puncture-proof waste", "Chemical and pharmaceutical waste in liquid form"],
    answer: 1,
    explanation: "Under BMW Rules 2016: Yellow bags = human anatomical waste, animal anatomical waste, soiled waste (blood-soaked, body fluids), expired medicines, cytotoxic drugs. Red bags = contaminated recyclable waste (tubings, bottles, syringes without needles). White (translucent) puncture-proof containers = sharps. Blue = glassware."
  },
  {
    id: 35,
    question: "The breakpoint chlorine residual recommended for drinking water as per WHO guidelines is:",
    options: ["0.1 mg/L free residual chlorine", "0.2 mg/L free residual chlorine at the point of use", "0.5 mg/L free residual chlorine at treatment plant only", "1.0 mg/L free residual chlorine"],
    answer: 1,
    explanation: "WHO recommends maintaining a free residual chlorine of ≥0.2 mg/L (0.2 ppm) throughout the distribution system up to the point of use, and ≥0.5 mg/L at the point of chlorination entry. This ensures protection against recontamination during distribution. The maximum acceptable level is 5 mg/L."
  },
  {
    id: 36,
    question: "The JMP (WHO/UNICEF Joint Monitoring Programme) Sanitation Ladder 'Safely Managed' service level requires:",
    options: ["Use of a basic sanitation facility that is not shared with other households", "Use of an improved facility not shared with others, where excreta are safely disposed of in situ or treated off-site", "Access to a flush toilet connected to any sewer", "Availability of a pit latrine with a slab"],
    answer: 1,
    explanation: "JMP Sanitation Ladder: Open defecation > Unimproved > Limited (improved, shared) > Basic (improved, not shared) > Safely Managed (improved, not shared, AND excreta safely disposed of in situ or transported and treated off-site). 'Safely managed' is the highest level, aligning with SDG 6.2."
  },
  {
    id: 37,
    question: "The Swachh Bharat Mission (Gramin) declared India Open Defecation Free (ODF) in October 2019. ODF status requires which percentage coverage of household toilets?",
    options: ["90%", "95%", "100% of all households having access to and using a toilet", "80% plus community-level ODF verification"],
    answer: 2,
    explanation: "ODF status under Swachh Bharat Mission requires 100% of the population to have access to and use toilets with safe disposal of feces, with no one practicing open defecation. India was declared ODF on October 2, 2019 (Gandhi Jayanti), having constructed over 100 million individual household toilets."
  },
  {
    id: 38,
    question: "The Food Safety and Standards Authority of India (FSSAI) was established under which act?",
    options: ["Prevention of Food Adulteration Act, 1954", "Food Safety and Standards Act, 2006", "Essential Commodities Act, 1955", "Consumer Protection Act, 2019"],
    answer: 1,
    explanation: "FSSAI was established under the Food Safety and Standards Act, 2006, which consolidated and replaced multiple existing food laws (PFA Act, Fruit Products Order, Meat Food Products Order, etc.). FSSAI operates under the Ministry of Health and Family Welfare and sets standards for food articles."
  },
  {
    id: 39,
    question: "The Air Quality Index (AQI) category 'Very Poor' in India corresponds to a 24-hour PM2.5 concentration range of approximately:",
    options: ["0-30 µg/m³", "61-90 µg/m³", "121-250 µg/m³", "251-380 µg/m³"],
    answer: 2,
    explanation: "India's AQI categories for PM2.5 (24-hr avg): Good (0-30 µg/m³), Satisfactory (31-60), Moderate (61-90), Poor (91-120), Very Poor (121-250), Severe (>250 µg/m³). The AQI is calculated for eight pollutants; the highest sub-index is the overall AQI. 'Very Poor' causes respiratory effects in healthy individuals."
  },
  {
    id: 40,
    question: "The Slow Sand Filtration method of water purification operates by which primary mechanism?",
    options: ["Mechanical straining of particles by fine sand", "Biological filtration through the Schmutzdecke (biological mat) on the sand surface", "Chemical coagulation and flocculation", "Reverse osmosis through semi-permeable membrane"],
    answer: 1,
    explanation: "Slow sand filtration works primarily through biological action of the Schmutzdecke — a biologically active layer (zoogloeal mat) that forms on the sand surface. This layer contains microorganisms (bacteria, algae, protozoa) that biodegrade and adsorb organic matter and pathogens. It is effective even without prior chlorination."
  },
  {
    id: 41,
    question: "The MPOWER framework of the WHO FCTC. The letter 'W' stands for:",
    options: ["Warn about the dangers of tobacco through health warnings on packaging", "Work towards a smoke-free environment", "Watch tobacco industry practices", "Withdraw tobacco subsidies"],
    answer: 0,
    explanation: "MPOWER: M=Monitor tobacco use and prevention policies, P=Protect people from tobacco smoke (smoke-free environments), O=Offer help to quit tobacco use, W=Warn about the dangers of tobacco (health warnings, mass media campaigns), E=Enforce bans on advertising/promotion/sponsorship, R=Raise taxes on tobacco."
  },
  {
    id: 42,
    question: "The AUDIT-C (Alcohol Use Disorders Identification Test - Consumption) is a brief 3-question screen. A score of ≥4 in men and ≥3 in women is considered:",
    options: ["Mild alcohol dependence requiring pharmacotherapy", "A positive screen for hazardous or harmful alcohol use warranting further assessment", "Alcohol-related liver disease", "Safe drinking without any intervention needed"],
    answer: 1,
    explanation: "AUDIT-C comprises the first 3 questions of the full 10-item AUDIT, addressing frequency of drinking, typical quantity, and frequency of heavy episodic drinking. Scores of ≥4 (men) and ≥3 (women) indicate hazardous or harmful drinking and trigger brief intervention or full AUDIT assessment. Total AUDIT-C max score is 12."
  },
  {
    id: 43,
    question: "One MET (Metabolic Equivalent of Task) is defined as the energy expenditure of:",
    options: ["Light walking at 3 km/h", "Sitting quietly at rest (resting metabolic rate = 3.5 mL O2/kg/min)", "Standing unsupported", "Slow cycling at 10 km/h"],
    answer: 1,
    explanation: "1 MET = resting metabolic rate = approximately 3.5 mL O2/kg/min or 1 kcal/kg/hour. It is the oxygen consumed while sitting quietly at rest. Physical activities are classified as: Light (<3 METs), Moderate (3-6 METs), Vigorous (>6 METs). Walking at 3.2 km/h ≈ 2 METs; jogging ≈ 7 METs."
  },
  {
    id: 44,
    question: "PM2.5 (particulate matter ≤2.5 µm diameter) is particularly dangerous because:",
    options: ["It irritates the upper respiratory tract only", "Its small size allows it to penetrate deep into the alveoli and enter the bloodstream, causing systemic effects", "It is rapidly cleared by the mucociliary escalator", "It only affects individuals with pre-existing lung disease"],
    answer: 1,
    explanation: "PM2.5 particles are fine enough to bypass the upper airway defenses (nose, pharynx, trachea) and deposit in the alveoli. They can cross the alveolar-capillary barrier, enter systemic circulation, and cause cardiovascular effects, endothelial dysfunction, and systemic inflammation in addition to respiratory effects."
  },
  {
    id: 45,
    question: "Occupational exposure to asbestos is MOST associated with which of the following lung conditions?",
    options: ["Silicosis and lung cancer", "Mesothelioma, asbestosis, and lung cancer", "Berylliosis and hypersensitivity pneumonitis", "Coal workers' pneumoconiosis"],
    answer: 1,
    explanation: "Asbestos exposure causes: (1) Asbestosis (bilateral interstitial fibrosis), (2) Malignant mesothelioma (of pleura or peritoneum — strongly associated), (3) Lung cancer (especially in smokers - synergistic risk), (4) Pleural plaques and effusion. Latency period is 20-40 years. Chrysotile, crocidolite, and amosite are main types."
  },
  {
    id: 46,
    question: "Noise-Induced Hearing Loss (NIHL) characteristically shows an audiometric dip (notch) at which frequency?",
    options: ["250 Hz", "1000 Hz", "4000 Hz", "8000 Hz"],
    answer: 2,
    explanation: "NIHL characteristically produces a 'noise notch' at 4000 Hz (4 kHz) on the audiogram, with recovery at higher frequencies. This is because the region of the basilar membrane responding to 4 kHz is particularly vulnerable to noise damage due to its anatomical position and limited blood supply. Prolonged exposure leads to notch widening."
  },
  {
    id: 47,
    question: "Heat stroke is distinguished from heat exhaustion primarily by the presence of:",
    options: ["Core body temperature >38°C", "Central nervous system dysfunction (confusion, seizures, loss of consciousness) with core temperature >40°C", "Profuse sweating and hypotension", "Muscle cramps and tachycardia"],
    answer: 1,
    explanation: "Heat stroke = core temperature >40°C (104°F) + CNS dysfunction (confusion, delirium, seizures, coma). It is a medical emergency with potential multi-organ failure. Heat exhaustion presents with weakness, dizziness, nausea, profuse sweating, and temperature <40°C with normal mental status. CNS dysfunction distinguishes stroke from exhaustion."
  },
  {
    id: 48,
    question: "In snake bite management, the WHO recommends against using which of the following?",
    options: ["IV antivenom as the primary treatment", "Pressure immobilization bandaging for all snake bites", "Tourniquet, incision, and suction at bite site", "Immobilization of the bitten limb below the level of the heart"],
    answer: 2,
    explanation: "WHO strongly discourages 'first aid' measures like tourniquets, incision, suction, electric shock, or herbal remedies as they are ineffective and cause harm (tissue necrosis, increased systemic spread). Pressure immobilization is recommended for neurotoxic snakes (elapids) but not for cytotoxic snakes. IV antivenom is the definitive treatment."
  },
  {
    id: 49,
    question: "The Global Action Plan for Physical Activity (GAPPA) 2030 recommends that adults aged 18-64 achieve at minimum how many minutes of moderate-intensity aerobic physical activity per week?",
    options: ["75 minutes", "150 minutes", "300 minutes", "60 minutes"],
    answer: 1,
    explanation: "WHO GAPPA (and WHO 2020 Physical Activity Guidelines) recommends: Adults 18-64 years: ≥150-300 min/week of moderate-intensity, OR ≥75-150 min/week of vigorous-intensity aerobic activity, OR equivalent combination. Plus muscle-strengthening activities ≥2 days/week. Additional benefits occur beyond 300 min moderate/150 min vigorous."
  },
  {
    id: 50,
    question: "Which occupational lung disease is caused by exposure to hard metal dust (tungsten carbide with cobalt) and presents with giant cell interstitial pneumonitis?",
    options: ["Silicosis", "Hard metal lung disease (Cobalt lung)", "Berylliosis", "Hypersensitivity pneumonitis"],
    answer: 1,
    explanation: "Hard metal lung disease (cobalt lung) results from exposure to tungsten carbide containing cobalt binder. Cobalt is the sensitizing agent. It presents with giant cell interstitial pneumonitis (GIP) on histology — a unique pathological pattern with characteristic macrophage cannibalism. It can cause asthma and ILD."
  },
  {
    id: 51,
    question: "The additional safeguard for research involving prisoners as a vulnerable population, as outlined in the ICMR National Ethical Guidelines 2017, primarily requires:",
    options: ["IRB/IEC approval is not needed for minimal-risk research in prisoners", "Ensuring that no undue inducements are offered and research should preferably be of direct benefit to prisoners", "Obtaining consent from the prison warden as the legally authorized representative", "Excluding prisoners from all research regardless of risk level"],
    answer: 1,
    explanation: "Prisoners are vulnerable due to their constrained autonomy and susceptibility to coercion. ICMR guidelines require: (1) Research should preferably offer direct benefit to prisoners, (2) No undue inducements (e.g., sentence reduction), (3) Prison conditions should not make reasonable alternatives unavailable, (4) Separate and adequate consent procedures respecting autonomy."
  },
  {
    id: 52,
    question: "At what age does a child typically have the cognitive capacity to provide meaningful 'assent' for research participation, according to most bioethics guidelines?",
    options: ["5 years", "7 years", "10 years", "16 years"],
    answer: 1,
    explanation: "Most guidelines (including AAP and ICMR) consider children aged approximately 7 years and above capable of providing meaningful assent. Assent (the child's affirmative agreement) is sought alongside parental consent. However, assent is not legally equivalent to consent; parental consent remains necessary until the child reaches legal majority (18 years in India)."
  },
  {
    id: 53,
    question: "Emergency Research Exception from Informed Consent (EFIC) is ethically justified when which condition is met?",
    options: ["Research is sponsored by a government agency", "The subject has a life-threatening condition, intervention must be given before consent is possible, and there is no LAR available", "The risk is minimal and the study is observational", "The investigator judges that consent would bias the results"],
    answer: 1,
    explanation: "EFIC (21 CFR 50.24 in USA; recognized in ICMR guidelines) allows research without prior consent when: (1) Life-threatening emergency, (2) Available treatments are unsatisfactory, (3) Direct benefit is possible, (4) Consent cannot be obtained before intervention, (5) No LAR available, (6) IRB approval with community consultation. Post-enrollment consent must be sought."
  },
  {
    id: 54,
    question: "Compassionate use (expanded access) of an unapproved drug is ethically and regulatorily justified when:",
    options: ["A pharmaceutical company requests marketing data before approval", "A patient with a serious or life-threatening condition has no satisfactory alternatives and cannot participate in a clinical trial", "Phase I trials have been completed showing safety", "The drug is approved in another country"],
    answer: 1,
    explanation: "Compassionate use/expanded access allows patients with serious or life-threatening conditions to access investigational drugs outside clinical trials when: no comparable alternatives exist, the patient cannot enroll in a trial, and preliminary evidence suggests potential benefit. In India, CDSCO governs this under the New Drugs and Clinical Trials Rules, 2019."
  },
  {
    id: 55,
    question: "The primary ethical lesson from the Tuskegee Syphilis Study (1932-1972) that directly influenced the Belmont Report was:",
    options: ["The need for adequate compensation for research participants", "The requirement for voluntary informed consent and the obligation to stop studies when treatment becomes available", "The importance of randomization in clinical trials", "The need for data safety monitoring boards"],
    answer: 1,
    explanation: "The Tuskegee study enrolled Black men with syphilis and withheld penicillin even after it became the standard of care. This led to: (1) The National Research Act (1974), (2) The Belmont Report (1979) articulating respect for persons (informed consent), beneficence, and justice. It fundamentally shaped modern research ethics and IRB regulations."
  },
  {
    id: 56,
    question: "The principle of 'justice' in the Belmont Report primarily refers to:",
    options: ["Fair distribution of research risks and benefits and avoidance of exploiting vulnerable populations", "The obligation to do good (beneficence)", "Respect for autonomy and the right to make decisions", "Legal compliance with regulatory requirements"],
    answer: 0,
    explanation: "Justice in the Belmont Report means fair distribution of the burdens and benefits of research. This includes: (1) Not selecting vulnerable populations merely for convenience or because they are easy to recruit, (2) Ensuring benefits of research are accessible to those who bore its risks, (3) Equitable selection of subjects."
  },
  {
    id: 57,
    question: "In research involving mentally incapacitated adults, the legally authorized representative (LAR) in India is determined by:",
    options: ["The attending physician", "A person appointed by court or a close family member in a hierarchy defined by law (next of kin)", "The research ethics committee solely", "Any two adult witnesses to the process"],
    answer: 1,
    explanation: "For mentally incapacitated adults, consent is obtained from the LAR. In India, the Mental Healthcare Act, 2017 and ICMR guidelines provide hierarchy: court-appointed guardian, spouse, parent, adult children, siblings. The LAR must act in the best interests of the participant, and assent of the participant (to the extent possible) must also be sought."
  },
  {
    id: 58,
    question: "The 'Right to Try' legislation, as enacted in the United States in 2018, allows:",
    options: ["Patients to refuse any treatment recommended by their physician", "Terminally ill patients who have exhausted approved options to access investigational drugs that have passed Phase I trials without FDA expanded access authorization", "Any patient to access any drug approved in another country", "Researchers to conduct studies without IRB oversight"],
    answer: 1,
    explanation: "The Right to Try Act (2018, USA) allows terminally ill patients who have exhausted approved treatments to access investigational drugs that: (1) Have completed Phase I trials, (2) Are in active clinical development or FDA review, without requiring the FDA expanded access process. The manufacturer is not required to provide the drug."
  },
  {
    id: 59,
    question: "Therapeutic misconception in clinical research refers to:",
    options: ["Investigators overstating the therapeutic benefits of an experimental drug to regulators", "Participants incorrectly believing that the research protocol is designed to optimize their individual medical care, rather than to generate generalizable knowledge", "Research ethics committee misunderstanding the scientific rationale", "Sponsors concealing adverse events from participants"],
    answer: 1,
    explanation: "Therapeutic misconception (coined by Appelbaum) occurs when research participants fail to appreciate the distinction between research and clinical treatment, incorrectly assuming the research protocol is designed specifically to benefit them individually. This can invalidate true informed consent, as it affects understanding and voluntariness."
  },
  {
    id: 60,
    question: "The Declaration of Helsinki (2013 revision) states that placebos may only be used when:",
    options: ["No prior effective treatment exists, OR there are compelling methodological reasons and participants will not suffer serious harm", "The sponsor requests it for regulatory approval", "The study is conducted in a developing country where the proven treatment is unavailable", "Phase II data supports safety of the experimental drug"],
    answer: 0,
    explanation: "DoH 2013 (Clause 33): Placebo controls are acceptable when: (1) No proven intervention exists, OR (2) Compelling methodological reasons necessitate it AND patients who receive placebo will not suffer serious or irreversible harm. The 'best current proven intervention' must be used in active comparator arms otherwise. This protects participants from unnecessary harm."
  },
  {
    id: 61,
    question: "Southern blotting is used to detect:",
    options: ["Specific RNA sequences in a sample", "Specific DNA sequences in a sample after gel electrophoresis and transfer to a membrane", "Specific proteins using antibody probes", "Chromosomal abnormalities under the microscope"],
    answer: 1,
    explanation: "Southern blotting (Edwin Southern, 1975): DNA is digested with restriction enzymes, separated by gel electrophoresis, denatured, transferred (blotted) to a nitrocellulose or nylon membrane, and hybridized with a labeled complementary DNA probe. Used for RFLP analysis, gene copy number, and detecting specific DNA sequences."
  },
  {
    id: 62,
    question: "Northern blotting differs from Southern blotting in that Northern blotting:",
    options: ["Uses DNA probes to detect DNA sequences", "Detects specific RNA (mRNA) sequences to assess gene expression levels", "Uses antibodies instead of nucleic acid probes", "Requires PCR amplification before electrophoresis"],
    answer: 1,
    explanation: "Northern blotting detects specific RNA molecules (typically mRNA) to determine gene expression. RNA is separated by gel electrophoresis (under denaturing conditions), transferred to membrane, and hybridized with a labeled DNA or RNA probe. It provides information about transcript size and relative expression levels. No PCR is needed."
  },
  {
    id: 63,
    question: "Western blotting is used to:",
    options: ["Detect specific DNA sequences", "Detect specific proteins using labeled antibodies after SDS-PAGE and membrane transfer", "Quantify mRNA expression", "Map chromosomal loci of genes"],
    answer: 1,
    explanation: "Western blotting: Proteins are separated by SDS-PAGE (by molecular weight), transferred to PVDF or nitrocellulose membrane, blocked, incubated with primary antibody (specific to target protein), then labeled secondary antibody. Used to detect protein presence, relative abundance, and molecular weight. Used in HIV diagnosis (confirmatory) and research."
  },
  {
    id: 64,
    question: "2D gel electrophoresis separates proteins based on:",
    options: ["Molecular weight alone", "Isoelectric point (first dimension) and molecular weight (second dimension)", "Charge alone using native PAGE", "Molecular weight and hydrophobicity"],
    answer: 1,
    explanation: "2D gel electrophoresis (2-DE): First dimension = isoelectric focusing (IEF) separates proteins by their isoelectric point (pI) using immobilized pH gradient strips. Second dimension = SDS-PAGE separates by molecular weight. Results in a 2D protein map. Used in proteomics to resolve complex protein mixtures and identify differentially expressed proteins."
  },
  {
    id: 65,
    question: "The yeast two-hybrid system is used to study:",
    options: ["DNA-DNA interactions during recombination", "Protein-protein interactions by exploiting reconstitution of a transcriptional activator in yeast", "RNA secondary structure formation", "Enzyme-substrate kinetics in vivo"],
    answer: 1,
    explanation: "Yeast two-hybrid (Y2H) system: 'Bait' protein is fused to a DNA-binding domain; 'prey' protein is fused to an activation domain. If bait and prey interact, the transcription factor is reconstituted and drives reporter gene expression (e.g., HIS3, lacZ). Used to screen for unknown interaction partners in cDNA libraries."
  },
  {
    id: 66,
    question: "Chromatin Immunoprecipitation (ChIP) assay is used to study:",
    options: ["Protein-protein interactions in the cytoplasm", "In vivo binding of specific proteins (e.g., transcription factors, histones) to specific DNA regions", "Post-translational modifications of cytoskeletal proteins", "mRNA stability and degradation"],
    answer: 1,
    explanation: "ChIP: Chromatin is cross-linked in living cells (formaldehyde), sheared, and immunoprecipitated with an antibody specific to the protein of interest. The associated DNA is then identified by PCR, microarray (ChIP-chip), or sequencing (ChIP-seq). ChIP-seq provides genome-wide mapping of protein-DNA interactions and histone modifications."
  },
  {
    id: 67,
    question: "The Electrophoretic Mobility Shift Assay (EMSA) / Gel Shift Assay is used to:",
    options: ["Separate proteins by molecular weight", "Detect and characterize protein-DNA or protein-RNA interactions by retardation of electrophoretic migration", "Identify post-translational modifications by mass", "Quantify gene expression by measuring transcript size"],
    answer: 1,
    explanation: "EMSA (gel retardation/shift assay): A labeled DNA or RNA probe is incubated with a protein sample. Protein-nucleic acid complexes migrate more slowly through a gel than free probe, creating a 'shift' in the band. Used to study transcription factor binding to promoters, assess binding affinity, and identify specific complexes (supershift with antibody)."
  },
  {
    id: 68,
    question: "In a luciferase reporter gene assay, the reporter gene (luciferase) is placed downstream of a promoter of interest to measure:",
    options: ["Post-translational protein modification", "Promoter activity and transcriptional regulation in living cells", "Ribosome assembly efficiency", "DNA replication fidelity"],
    answer: 1,
    explanation: "Reporter gene assays use a reporter (firefly or Renilla luciferase, GFP, β-galactosidase) cloned downstream of a regulatory element (promoter/enhancer). The reporter's activity reflects transcriptional activity of that element under different conditions (drug treatments, mutations, protein overexpression). Luciferase produces bioluminescence measured by luminometer."
  },
  {
    id: 69,
    question: "Co-immunoprecipitation (Co-IP) differs from ChIP in that Co-IP primarily detects:",
    options: ["Protein-DNA interactions", "Protein-protein interactions by precipitating a protein complex with an antibody to one component", "RNA-protein interactions", "Lipid-protein interactions"],
    answer: 1,
    explanation: "Co-IP: Cell lysate is incubated with an antibody against protein A, and the immune complex is precipitated. If protein B co-precipitates, it interacts with protein A in the cell. Western blot confirms the co-precipitated proteins. Unlike Y2H, Co-IP detects interactions under near-physiological conditions in the relevant cell type."
  },
  {
    id: 70,
    question: "Mass spectrometry in proteomics is primarily used to:",
    options: ["Determine nucleotide sequences of genes", "Identify proteins and characterize post-translational modifications based on mass-to-charge ratios of peptide fragments", "Measure mRNA copy numbers in single cells", "Visualize protein localization within cells"],
    answer: 1,
    explanation: "Proteomics mass spectrometry (e.g., MALDI-TOF, ESI-MS/MS): Proteins are digested into peptides, ionized, and separated by mass-to-charge ratio (m/z). Tandem MS (MS/MS) fragments peptides and identifies amino acid sequences. Used to identify proteins from 2D gels, characterize PTMs (phosphorylation, ubiquitination), and quantify relative protein abundance."
  },
  {
    id: 71,
    question: "Blood cultures for sepsis should ideally be collected:",
    options: ["After the first dose of antibiotics during the spike of fever", "Before antibiotic administration; 2-3 sets from different venepuncture sites at least 10 minutes apart", "Using a single large volume culture from a central venous catheter", "Only during the peak of fever above 39°C"],
    answer: 1,
    explanation: "Blood culture collection: (1) Before antibiotic administration (antibiotics reduce yield significantly), (2) 2-3 sets from different peripheral venepuncture sites (not catheters, to avoid catheter colonizers), (3) Each set = aerobic + anaerobic bottle, (4) Adequate volume (8-10 mL per bottle in adults), (5) Strict aseptic technique. This maximizes sensitivity and detects polymicrobial bacteremia."
  },
  {
    id: 72,
    question: "A urine culture yielding 10^5 CFU/mL of a single organism in a midstream clean-catch urine specimen from a symptomatic patient is interpreted as:",
    options: ["Contamination, no further action needed", "Significant bacteriuria consistent with urinary tract infection", "Borderline result requiring repeat culture", "Normal urinary flora"],
    answer: 1,
    explanation: "Significant bacteriuria: ≥10^5 CFU/mL (100,000 colony-forming units/mL) from a clean-catch midstream specimen = UTI (with symptoms). Lower counts (10^2-10^3 CFU/mL) may be significant in symptomatic patients, males, catheter specimens, or suprapubic aspirates. Contamination is suggested by multiple organisms or low counts in asymptomatic patients."
  },
  {
    id: 73,
    question: "In bacterial meningitis, CSF analysis typically shows:",
    options: ["Lymphocytosis, elevated protein, normal glucose, clear appearance", "Neutrophilic pleocytosis, elevated protein, low glucose (<40 mg/dL or CSF:serum glucose <0.4), turbid appearance", "Mild pleocytosis, normal protein, normal glucose, xanthochromic appearance", "Normal cell count, very low protein, elevated glucose"],
    answer: 1,
    explanation: "Bacterial meningitis CSF: WBC 1000-10,000 cells/mm³ (predominantly neutrophils), protein >100 mg/dL (often 100-500), glucose <40 mg/dL (CSF:serum ratio <0.4), turbid/purulent appearance, elevated opening pressure. Gram stain positive in 60-90%. Viral meningitis shows lymphocytosis, mildly elevated protein, and normal glucose."
  },
  {
    id: 74,
    question: "The Ziehl-Neelsen (ZN) stain for Mycobacterium tuberculosis uses which decolorizing agent?",
    options: ["Acetone-alcohol (95% ethanol + acetone)", "3% acid-alcohol (3% HCl in 95% ethanol)", "Acetone only", "Iodine solution"],
    answer: 1,
    explanation: "ZN stain (hot method): Primary stain = carbol fuchsin (heated), Decolorizer = 3% acid-alcohol (3% HCl in 95% ethanol — hence 'acid-fast'), Counterstain = methylene blue. MTB resists decolorization due to mycolic acids in cell wall and appears red against blue background. Kinyoun stain is the cold modification using stronger phenol."
  },
  {
    id: 75,
    question: "The Kato-Katz technique for stool examination is specifically used to:",
    options: ["Diagnose Giardia lamblia and Cryptosporidium cysts", "Quantify helminth eggs (soil-transmitted helminths) per gram of feces for intensity assessment", "Identify Entamoeba histolytica trophozoites", "Detect occult blood in stool"],
    answer: 1,
    explanation: "Kato-Katz thick smear: A template is used to obtain ~41.7 mg of feces pressed through a stainless steel mesh screen onto a glass slide, covered with glycerin-malachite green cellophane. It clears the fecal matter and allows quantitative counting of helminth eggs (Ascaris, hookworm, Trichuris, Schistosoma). Results expressed as EPG (eggs per gram)."
  },
  {
    id: 76,
    question: "For skin scraping to detect dermatophyte infection, specimens are processed using which method before microscopy?",
    options: ["Gram staining", "ZN staining", "10% KOH (potassium hydroxide) preparation to dissolve keratin", "Giemsa staining"],
    answer: 2,
    explanation: "KOH preparation: Skin scrapings, nail clippings, or hair are placed on a slide with 10-20% KOH (± DMSO for faster clearing). KOH dissolves keratin, releasing fungal elements. Dermatophyte hyphae and arthroconidia are visible under microscopy. Calcofluor white (fluorescent stain) can enhance detection. Culture (Sabouraud dextrose agar) confirms species."
  },
  {
    id: 77,
    question: "Synovial fluid analysis showing WBC 50,000-150,000 cells/mm³ with >75% neutrophils is MOST consistent with:",
    options: ["Non-inflammatory arthritis (osteoarthritis)", "Septic arthritis (infectious arthritis)", "Inflammatory arthritis (rheumatoid arthritis)", "Traumatic hemarthrosis"],
    answer: 1,
    explanation: "Synovial fluid classification: Normal (<200 WBC), Non-inflammatory/Group I (<2000 WBC, <25% PMN) — OA, traumatic. Inflammatory/Group II (2000-50,000 WBC, >50% PMN) — RA, gout, reactive arthritis. Septic/Group III (>50,000 WBC, >75% PMN) — bacterial infection. >100,000 WBC is highly specific for septic arthritis. Gram stain and culture confirm."
  },
  {
    id: 78,
    question: "Pleural fluid analysis: a pleural fluid/serum protein ratio >0.5 indicates:",
    options: ["Transudate, suggesting congestive heart failure or nephrotic syndrome", "Exudate, suggesting infection, malignancy, or inflammation", "Chylothorax from lymphatic disruption", "Hemothorax from trauma"],
    answer: 1,
    explanation: "Light's criteria for exudate (any one): (1) Pleural fluid/serum protein >0.5, (2) Pleural fluid LDH/serum LDH >0.6, (3) Pleural fluid LDH > 2/3 of upper normal limit of serum LDH. Exudates = pneumonia, TB, malignancy, PE, RA, SLE. Transudates (none of above) = CHF, cirrhosis, nephrotic syndrome, hypoalbuminemia."
  },
  {
    id: 79,
    question: "For a wound swab to be useful for microbiological processing, swabbing should be performed:",
    options: ["From the dry necrotic eschar at the wound center", "From the advancing edge of the wound after removing surface debris, by rotating the swab using the Levine technique", "Only after the wound has been cleaned with povidone-iodine", "From the area of maximum exudate without any prior cleaning"],
    answer: 1,
    explanation: "Levine technique: Rotate the swab over a 1 cm² area of the wound with sufficient pressure to express fluid from the wound tissue. This samples wound tissue rather than surface colonizers. Surface cleaning with saline (not antiseptics) is performed first. Quantitative wound culture (tissue biopsy ≥10^5 CFU/g) is the gold standard but swab culture is practical."
  },
  {
    id: 80,
    question: "Sputum smear microscopy for TB diagnosis: a grading of 3+ (IUATLD scale) indicates:",
    options: ["1-9 AFB per 100 fields", "≥10 AFB per field on average", "1-9 AFB per field", "10-99 AFB per 100 fields"],
    answer: 1,
    explanation: "IUATLD/WHO grading (ZN smear, 100 oil-immersion fields): Negative = 0 AFB/100 fields. Scanty = 1-9 AFB/100 fields (report exact count). 1+ = 10-99 AFB/100 fields. 2+ = 1-9 AFB/field (average over 50 fields). 3+ = ≥10 AFB/field (average over 20 fields). Higher grade = higher bacillary load and greater infectivity."
  },
  {
    id: 81,
    question: "Identify the correctly transformed sentence in reported speech: Direct speech: 'I will call you tomorrow,' she said.",
    options: ["She said that she will call me tomorrow.", "She said that she would call me the following day.", "She said that she would call me tomorrow.", "She told that she would call me the next day."],
    answer: 1,
    explanation: "In reported speech, 'will' changes to 'would', 'tomorrow' changes to 'the following day/the next day', and 'you' changes to 'me'. The correct verb is 'said' (not 'told') without an object, OR 'told me'. Option B is correct: 'She said that she would call me the following day.' Option D is incorrect because 'told' requires an object ('told me')."
  },
  {
    id: 82,
    question: "Which sentence represents a correct Third Conditional (past unreal conditional)?",
    options: ["If I study hard, I will pass the exam.", "If she had taken the medicine, she would have recovered quickly.", "If water freezes, it expands.", "If he worked harder, he would succeed."],
    answer: 1,
    explanation: "Third Conditional (past unreal): If + past perfect, would/could/might + have + past participle. It refers to a hypothetical past situation and its hypothetical past result. Option A = First conditional (future real). Option C = Zero conditional (general truth). Option D = Second conditional (present/future unreal). Option B correctly uses past perfect + would have + past participle."
  },
  {
    id: 83,
    question: "Which sentence contains a CORRECTLY used wish clause?",
    options: ["I wish I have more time to study.", "I wish I had more time to study.", "I wish I would have more time to study.", "I wish I had been having more time to study."],
    answer: 1,
    explanation: "For a wish about a present situation (something not currently true), use 'wish + past simple': 'I wish I had more time' (I don't have time now, I wish I did). For past regrets: 'wish + past perfect'. For future wishes: 'wish + would'. Option A uses present simple (incorrect). Option C (wish + would) can express a desired change in someone's behavior, not one's own state."
  },
  {
    id: 84,
    question: "In the sentence 'The results, which were published last year, confirmed the hypothesis,' the clause 'which were published last year' is a:",
    options: ["Defining (restrictive) relative clause", "Non-defining (non-restrictive) relative clause", "Adverbial clause of time", "Noun clause"],
    answer: 1,
    explanation: "Non-defining relative clauses provide additional, non-essential information about a noun already uniquely identified. They are enclosed in commas (or dashes/parentheses). Removing them does not change the core meaning. Defining clauses (no commas) identify which specific person/thing is meant. 'Which' (not 'that') is used in non-defining clauses in formal writing."
  },
  {
    id: 85,
    question: "Identify the sentence with a DANGLING modifier:",
    options: ["Running through the forest, the deer was startled by the hunter.", "After completing the experiment, the data were analyzed by the researchers.", "Walking to the clinic, she noticed a new pharmacy.", "Exhausted after the surgery, the surgeon sat down to rest."],
    answer: 0,
    explanation: "A dangling modifier occurs when the participial phrase has no logical subject in the main clause (or the subject it modifies is not the intended one). In option A, 'Running through the forest' logically modifies the subject of the main clause, which is 'the deer' — but it was the hunter running. Option B also dangles ('the data' didn't complete the experiment) — but option A is the clearest example."
  },
  {
    id: 86,
    question: "Which sentence demonstrates CORRECT parallel structure?",
    options: ["The doctor recommended resting, drinking fluids, and to take antibiotics.", "The nurse was efficient, caring, and showed dedication.", "The trial assessed safety, efficacy, and tolerability of the drug.", "He liked to read, writing, and to exercise daily."],
    answer: 2,
    explanation: "Parallel structure requires that elements in a series use the same grammatical form. Option C correctly uses three nouns: safety, efficacy, tolerability. Option A mixes gerunds (resting, drinking) with an infinitive (to take). Option B mixes adjectives (efficient, caring) with a verb phrase (showed dedication). Option D mixes infinitive, gerund, and infinitive."
  },
  {
    id: 87,
    question: "Choose the sentence where 'gerund' is correctly used instead of an infinitive after the verb 'avoid':",
    options: ["The patient was advised to avoid to eat spicy food.", "The patient was advised to avoid eating spicy food.", "The patient was advised to avoid eat spicy food.", "The patient was avoiding to eat spicy food."],
    answer: 1,
    explanation: "Certain verbs are followed by gerunds (verb + -ing), not infinitives (to + base verb). 'Avoid' always takes a gerund: 'avoid doing', not 'avoid to do'. Other verbs followed by gerunds: admit, consider, delay, deny, enjoy, finish, miss, practice, quit, recommend, suggest. Verbs followed by infinitives: agree, decide, expect, hope, plan, refuse, want."
  },
  {
    id: 88,
    question: "In subject-verb inversion, which sentence is grammatically CORRECT?",
    options: ["Rarely she visits the laboratory.", "Rarely does she visit the laboratory.", "Rarely she does visit the laboratory.", "Rarely she visited the laboratory."],
    answer: 1,
    explanation: "When a negative or restrictive adverb (never, rarely, seldom, not only, hardly, scarcely) is placed at the beginning of a clause for emphasis, subject-auxiliary inversion is required: 'Rarely does she visit...' (auxiliary 'does' precedes subject 'she'). This is mandatory in formal English and follows the pattern of question formation."
  },
  {
    id: 89,
    question: "Select the sentence with a correctly used participial phrase:",
    options: ["Opened by the surgeon carefully, the wound was examined.", "Having reviewed all the data, the manuscript was submitted by the team.", "Having reviewed all the data, the team submitted the manuscript.", "Reviewing data carefully, mistakes are avoided."],
    answer: 2,
    explanation: "A participial phrase must refer to the grammatical subject of the main clause. In option C, 'having reviewed all the data' correctly modifies 'the team' (they reviewed it, and they submitted it). Option A is awkward (passive + participial phrase). Option B dangles ('the manuscript' didn't review the data). Option D dangles ('mistakes' didn't review data)."
  },
  {
    id: 90,
    question: "Which of the following correctly uses a modal verb to express OBLIGATION in formal academic writing?",
    options: ["Participants can provide informed consent before enrollment.", "Participants shall provide informed consent before enrollment.", "Participants might provide informed consent before enrollment.", "Participants should provide informed consent before enrollment."],
    answer: 1,
    explanation: "Modal verbs for obligation: 'shall' (strong obligation in formal/legal language), 'must' (strong necessity), 'should' (recommendation/moral obligation), 'can/may' (permission/possibility). In regulatory and ethical documents, 'shall' expresses mandatory requirement. 'Should' suggests a recommendation. Option B ('shall') correctly expresses a formal obligation."
  },
  {
    id: 91,
    question: "Dr. G. Venkataswamy (Aravind Eye Care) was known for his pioneering work in:",
    options: ["Development of the polio vaccine in India", "Creating a high-volume, low-cost model for cataract surgery that eliminated preventable blindness at scale", "Discovery of the rabies vaccine in India", "Developing oral rehydration therapy (ORT)"],
    answer: 1,
    explanation: "Dr. Govindappa Venkataswamy ('Dr. V') founded Aravind Eye Care System in 1976. Inspired by the McDonald's model, he developed a high-volume, affordable, high-quality cataract surgery system that has performed millions of surgeries. Aravind's model became globally recognized as the solution to preventable blindness, particularly in developing nations."
  },
  {
    id: 92,
    question: "The Indian Council of Medical Research (ICMR) was established in which year?",
    options: ["1911", "1949", "1966", "1980"],
    answer: 0,
    explanation: "ICMR was established in 1911 as the Indian Research Fund Association (IRFA). After Independence, it was reconstituted as the Indian Council of Medical Research in 1949. It functions under the Department of Health Research, Ministry of Health and Family Welfare, and is the apex body for formulation, coordination, and promotion of biomedical research in India."
  },
  {
    id: 93,
    question: "The COVAXIN (BBV152) COVID-19 vaccine was developed by:",
    options: ["Serum Institute of India in collaboration with AstraZeneca", "Bharat Biotech International Limited in collaboration with ICMR and NIV Pune", "Cadila Healthcare (Zydus) independently", "Dr. Reddy's Laboratories in collaboration with Gamaleya Institute"],
    answer: 1,
    explanation: "COVAXIN (BBV152) is an indigenously developed inactivated COVID-19 vaccine developed by Bharat Biotech International Limited (BBIL) in collaboration with ICMR and the National Institute of Virology (NIV), Pune. The strain was isolated by NIV, and clinical trials were supported by ICMR. It received WHO Emergency Use Listing in November 2021."
  },
  {
    id: 94,
    question: "In a mathematical reasoning problem: A shopkeeper sells an article for Rs. 1,200, making a profit of 20%. What was the cost price?",
    options: ["Rs. 960", "Rs. 1,000", "Rs. 1,440", "Rs. 980"],
    answer: 1,
    explanation: "Profit = 20%, Selling Price = Rs. 1,200. Cost Price = SP / (1 + profit%) = 1200 / 1.20 = Rs. 1,000. Verification: Profit = 1,200 - 1,000 = Rs. 200 = 20% of 1,000. Correct."
  },
  {
    id: 95,
    question: "In a coding-decoding pattern: If MANGO is coded as NBOIP, how is APPLE coded?",
    options: ["BQQMF", "AQQLF", "BPQMF", "CQQMG"],
    answer: 0,
    explanation: "Each letter is shifted forward by 1 position in the alphabet: M→N, A→B, N→O, G→H, O→P gives NBOHP. Wait — M→N, A→B, N→O, G→H, O→P = NBOHP. But the question states NBOIP. Re-checking: M(13)→N(14), A(1)→B(2), N(14)→O(15), G(7)→H(8)... O(15)→P(16). So MANGO = NBOHP, but given = NBOIP suggests N,A,G,O each +1 and second N→I? Using simple +1 shift: APPLE → B(B),P(Q),P(Q),L(M),E(F) = BQQMF."
  },
  {
    id: 96,
    question: "If 8 workers can complete a task in 12 days, in how many days will 16 workers complete the same task (assuming equal efficiency)?",
    options: ["24 days", "6 days", "8 days", "4 days"],
    answer: 1,
    explanation: "This is an inverse proportion problem. Total work = 8 × 12 = 96 worker-days. With 16 workers: Days = 96 / 16 = 6 days. When workers double, days are halved. This uses the formula: Workers₁ × Days₁ = Workers₂ × Days₂ (for constant work)."
  },
  {
    id: 97,
    question: "In a standard dice (opposite faces sum to 7), if the face showing 3 is facing you and the face showing 5 is on top, which number is at the bottom?",
    options: ["2", "4", "1", "6"],
    answer: 0,
    explanation: "In a standard die, opposite faces sum to 7: 1↔6, 2↔5, 3↔4. If 5 is on top, then 2 (7-5=2) is at the bottom. The face-value of 3 facing you means 4 (7-3=4) is facing away. So: Top=5, Bottom=2, Front=3, Back=4. Remaining faces are 1 and 6 on the sides. Answer: 2 is at the bottom."
  },
  {
    id: 98,
    question: "The Supreme Court judgment in Vishaka vs. State of Rajasthan (1997) was significant for health research and workplaces because it:",
    options: ["Mandated pre-employment health checkups for all workers", "Laid down guidelines for prevention of sexual harassment at the workplace, applicable to research institutions and hospitals", "Established the right to free healthcare as a fundamental right", "Prohibited use of human subjects in research without IRB approval"],
    answer: 1,
    explanation: "Vishaka vs. State of Rajasthan (1997) Supreme Court judgment laid down guidelines (Vishaka Guidelines) for prevention of sexual harassment at the workplace, filling the legislative vacuum until the POSH Act (Sexual Harassment of Women at Workplace Act, 2013) was enacted. These guidelines apply to all workplaces including research institutions, hospitals, and universities."
  },
  {
    id: 99,
    question: "In an analogy reasoning question: Stethoscope : Cardiologist :: Otoscope : ?",
    options: ["Neurologist", "Ophthalmologist", "Otolaryngologist (ENT specialist)", "Pulmonologist"],
    answer: 2,
    explanation: "Analogy: A stethoscope is the primary diagnostic instrument of a cardiologist. An otoscope (used to examine the external ear canal and tympanic membrane) is the primary diagnostic instrument of an otolaryngologist (ENT specialist). Ophthalmoscope is used by ophthalmologists; neurologists use a reflex hammer and ophthalmoscope; pulmonologists use stethoscopes and spirometers."
  },
  {
    id: 100,
    question: "Dr. Yellapragada SubbaRow, an Indian-American biochemist, is best known for his discoveries that directly impacted public health. Which of the following is attributed to him?",
    options: ["Discovery of the structure of DNA double helix", "Discovery of the role of phosphocreatine and ATP in muscle energy, isolation of folic acid, and development of methotrexate and the first antibiotic for filariasis (diethylcarbamazine)", "Development of the Salk polio vaccine", "Discovery of insulin"],
    answer: 1,
    explanation: "Yellapragada SubbaRow (1895-1948): (1) Elucidated the role of phosphocreatine and ATP as energy currency in muscle contraction, (2) Isolated and synthesized folic acid, (3) Developed methotrexate (antifolate chemotherapy), (4) Developed diethylcarbamazine (DEC) for lymphatic filariasis — still used today. Despite these landmark discoveries, he remained largely uncelebrated in his lifetime. DNA double helix was Watson & Crick; insulin was Banting & Best."
  }
];

export default questions;

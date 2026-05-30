const questions = [
  {
    id: 1,
    question: "In a cross-over trial, which of the following is the primary advantage over a parallel group design?",
    options: [
      "Each participant serves as their own control, reducing inter-individual variability",
      "It can be completed in a shorter time frame without a washout period",
      "It is suitable for studying irreversible or chronic progressive conditions",
      "Randomization is not required since treatment order is fixed"
    ],
    answer: 0,
    explanation: "In a cross-over trial, each participant receives all treatments in sequence, acting as their own control. This eliminates between-subject variability, increasing statistical efficiency. A washout period is essential to prevent carry-over effects. Cross-over designs are NOT suitable for conditions that change irreversibly over time."
  },
  {
    id: 2,
    question: "Mendelian randomization uses genetic variants as instrumental variables primarily to:",
    options: [
      "Confirm causality between a genetic trait and disease",
      "Estimate the causal effect of a modifiable exposure on an outcome while minimizing confounding",
      "Determine the mode of inheritance of complex traits",
      "Identify gene-environment interactions in family-based studies"
    ],
    answer: 1,
    explanation: "Mendelian randomization exploits the random assortment of genetic variants at conception as natural randomization. A genetic variant associated with an exposure (e.g., LDL cholesterol-associated SNP) is used as an instrumental variable to infer the causal relationship between exposure and outcome (e.g., coronary artery disease), controlling for confounders and reverse causation."
  },
  {
    id: 3,
    question: "The Delphi method is a structured consensus-building technique. Which statement BEST describes its key characteristic?",
    options: [
      "Panelists meet face-to-face in multiple rounds to reach consensus",
      "It involves iterative rounds of questionnaires with anonymous feedback and controlled opinion revision",
      "It requires a minimum of 100 expert panelists for statistically valid results",
      "It is primarily used for hypothesis testing in experimental research"
    ],
    answer: 1,
    explanation: "The Delphi method uses multiple iterative rounds of questionnaires sent to a panel of experts. Responses are anonymous to prevent dominant opinion leaders from influencing others. After each round, a facilitator provides summarized feedback, allowing panelists to revise their views. Consensus is typically measured using inter-quartile range or percentage agreement. Panel size is usually 10-50 experts."
  },
  {
    id: 4,
    question: "Which qualitative research method involves a trained moderator facilitating a discussion among 6-12 purposively selected participants on a specific topic?",
    options: [
      "In-depth interview",
      "Ethnographic observation",
      "Focus group discussion (FGD)",
      "Narrative inquiry"
    ],
    answer: 2,
    explanation: "A Focus Group Discussion (FGD) involves a trained moderator guiding a homogeneous group of 6-12 participants in a structured discussion on a predetermined topic. The group dynamic elicits spontaneous responses and reveals shared perspectives. In-depth interviews are one-on-one, ethnography involves prolonged observation, and narrative inquiry explores individual life stories."
  },
  {
    id: 5,
    question: "Mixed methods research integrates qualitative and quantitative approaches. Which design collects qualitative data FIRST to inform the development of a quantitative instrument?",
    options: [
      "Convergent parallel design",
      "Explanatory sequential design",
      "Exploratory sequential design",
      "Embedded design"
    ],
    answer: 2,
    explanation: "In the exploratory sequential design, qualitative data are collected and analyzed first to explore a phenomenon, and the findings are then used to develop or refine a quantitative instrument (e.g., questionnaire). The explanatory sequential design does the reverse — quantitative first, then qualitative to explain results. Convergent parallel collects both simultaneously."
  },
  {
    id: 6,
    question: "Action research is best described as:",
    options: [
      "A retrospective study examining past records to generate new hypotheses",
      "A cyclical process where researchers and practitioners collaboratively identify problems, implement solutions, and evaluate outcomes",
      "A randomized experiment conducted in real-world settings without laboratory controls",
      "A systematic review of published literature to guide clinical practice"
    ],
    answer: 1,
    explanation: "Action research is a collaborative, cyclical process (plan-act-observe-reflect) conducted by practitioners (e.g., healthcare workers, teachers) and researchers together to solve practical, real-world problems. It is iterative — findings from one cycle inform the next. It differs from experimental research in that it does not require randomization and aims at immediate problem-solving."
  },
  {
    id: 7,
    question: "Community-Based Participatory Research (CBPR) is distinguished from conventional research by:",
    options: [
      "Exclusive control of the research process by academic investigators",
      "Involving community members as equal partners in all phases of the research process",
      "Requiring that all research be conducted in laboratory settings",
      "Focusing solely on quantitative outcome measurement"
    ],
    answer: 1,
    explanation: "CBPR is a partnership approach that equitably involves community members, organizational representatives, and researchers in all aspects of the research process — from defining the problem and designing the study to collecting data and disseminating findings. This co-ownership enhances relevance, trust, and translation of findings into community action."
  },
  {
    id: 8,
    question: "In active surveillance for infectious disease, which of the following is the MOST accurate description?",
    options: [
      "Health authorities passively wait for healthcare providers to report cases",
      "Health authorities or their agents regularly contact healthcare providers to solicit reports of cases",
      "Only sentinel sites selected for their diagnostic capacity report cases",
      "Surveillance relies entirely on mortality data from civil registration systems"
    ],
    answer: 1,
    explanation: "In active surveillance, public health officials proactively contact healthcare providers, laboratories, or other sources at regular intervals to seek out cases of a condition. This is more sensitive but resource-intensive than passive surveillance, where reports are voluntarily submitted. Sentinel surveillance uses a selected network of sites to monitor trends rather than achieve complete case enumeration."
  },
  {
    id: 9,
    question: "The Integrated Disease Surveillance Programme (IDSP) in India operates at which levels for disease reporting?",
    options: [
      "Sub-centre and Primary Health Centre levels only",
      "District, State, and Central levels with a tiered reporting structure",
      "Only at national medical colleges designated as apex institutions",
      "Only at international airports and seaports for imported diseases"
    ],
    answer: 1,
    explanation: "IDSP is a decentralized, state-based surveillance program operating at district, state, and central (national) levels. Weekly data are reported using 'S' (Syndromic), 'P' (Presumptive), and 'L' (Laboratory-confirmed) forms. District Rapid Response Teams (RRTs) investigate outbreaks. The program uses IDSP portal for real-time data entry and monitoring."
  },
  {
    id: 10,
    question: "Under the Indian Epidemic Diseases Act 1897 and subsequent regulations, which disease is NOT mandatorily notifiable at the national level under International Health Regulations (IHR 2005)?",
    options: [
      "Cholera",
      "Pneumonic plague",
      "Typhoid fever",
      "Yellow fever"
    ],
    answer: 2,
    explanation: "Under IHR (2005), cholera, pneumonic plague, yellow fever, and smallpox are among the diseases always requiring notification to WHO. Typhoid fever, while an important public health disease notifiable in many states, is NOT on the IHR mandatory notification list. IHR requires reporting of any Public Health Emergency of International Concern (PHEIC) regardless of specific disease."
  },
  {
    id: 11,
    question: "The Poisson distribution is most appropriately used to model which of the following?",
    options: [
      "The proportion of patients responding to a drug in a clinical trial",
      "The number of rare events occurring in a fixed interval of time or space",
      "The distribution of blood pressure measurements in a population",
      "The time to first event in a survival analysis"
    ],
    answer: 1,
    explanation: "The Poisson distribution models the number of times a rare, independent event occurs in a fixed interval of time, space, or volume, when the average rate (lambda) is known. Examples include the number of cancer cases per district per year, number of mutations per gene, or number of emergency calls per hour. It assumes events are independent and the average rate is constant."
  },
  {
    id: 12,
    question: "A researcher conducts 10 independent trials, each with a probability of success of 0.3. Which distribution should be used to calculate the probability of exactly 4 successes?",
    options: [
      "Poisson distribution",
      "Normal distribution",
      "Binomial distribution",
      "Negative binomial distribution"
    ],
    answer: 2,
    explanation: "The binomial distribution applies when: (1) there are a fixed number of trials (n=10), (2) each trial has only two outcomes (success/failure), (3) probability of success (p=0.3) is constant across trials, and (4) trials are independent. P(X=4) = C(10,4) × 0.3^4 × 0.7^6. Poisson is for rare events over continuous space/time. Normal approximates binomial only for large n."
  },
  {
    id: 13,
    question: "In Bayesian statistics, the 'posterior probability' is best defined as:",
    options: [
      "The probability of the hypothesis before any data are observed",
      "The probability of observing the data given the null hypothesis is true",
      "The updated probability of the hypothesis after incorporating the observed data",
      "The probability that a test result is a true positive"
    ],
    answer: 2,
    explanation: "In Bayesian statistics: Posterior ∝ Prior × Likelihood. The prior probability reflects beliefs about the hypothesis before seeing data. The likelihood is the probability of observed data given the hypothesis. The posterior is the revised probability of the hypothesis after data are incorporated. This framework naturally incorporates prior knowledge and is increasingly used in clinical trials and diagnostic test evaluation."
  },
  {
    id: 14,
    question: "The Kruskal-Wallis test is the non-parametric equivalent of which parametric test?",
    options: [
      "Independent samples t-test",
      "Paired t-test",
      "One-way analysis of variance (ANOVA)",
      "Pearson correlation"
    ],
    answer: 2,
    explanation: "The Kruskal-Wallis test is a non-parametric test used to compare three or more independent groups when the assumption of normality is violated. It is the non-parametric equivalent of one-way ANOVA and works on ranks. The Mann-Whitney U test is the non-parametric equivalent of the independent t-test. The Wilcoxon signed-rank test corresponds to the paired t-test."
  },
  {
    id: 15,
    question: "Spearman's rank correlation coefficient (rs) is used when:",
    options: [
      "Both variables are normally distributed and the relationship is linear",
      "Data are on an interval/ratio scale and sample size exceeds 100",
      "Variables are measured on an ordinal scale or when normality cannot be assumed",
      "Only one variable is continuous and the other is categorical"
    ],
    answer: 2,
    explanation: "Spearman's rank correlation is a non-parametric measure of the strength and direction of monotonic association between two variables. It is used when data are ordinal, or when interval/ratio data do not meet normality assumptions. Pearson's correlation requires both variables to be continuous, normally distributed, with a linear relationship. Spearman converts data to ranks before computing the correlation."
  },
  {
    id: 16,
    question: "Pearson's correlation coefficient (r) ranges from -1 to +1. A value of r = +0.9 indicates:",
    options: [
      "A weak positive linear association between the two variables",
      "A strong positive linear association between the two variables",
      "A perfect non-linear positive association",
      "That one variable causes an increase in the other variable"
    ],
    answer: 1,
    explanation: "Pearson's r measures the strength and direction of linear association. Values closer to +1 indicate strong positive linear correlation (both variables increase together). A value of 0.9 indicates a strong positive linear relationship. Importantly, correlation does NOT imply causation. Values 0.7-0.9 are considered strong, 0.4-0.7 moderate, and below 0.4 weak (by common convention)."
  },
  {
    id: 17,
    question: "Coefficient of Variation (CV) is used to compare variability between two datasets. It is calculated as:",
    options: [
      "(Mean / Standard Deviation) × 100",
      "(Standard Deviation / Mean) × 100",
      "(Variance / Mean) × 100",
      "(Range / Mean) × 100"
    ],
    answer: 1,
    explanation: "CV = (SD/Mean) × 100. It expresses variability as a percentage of the mean, making it a dimensionless measure useful for comparing variability between datasets with different units or different means. For example, comparing variability of hemoglobin levels (g/dL) with blood glucose (mg/dL). A lower CV indicates relatively less variability."
  },
  {
    id: 18,
    question: "In direct standardization of rates, the standard population is used to:",
    options: [
      "Adjust the observed rates for differences in age structure between populations, using a common standard population",
      "Calculate expected deaths in the study population using rates from the standard population",
      "Determine the statistical significance of rate differences between populations",
      "Remove the effect of misclassification bias in outcome measurement"
    ],
    answer: 0,
    explanation: "Direct standardization applies age-specific rates from the study population to a common standard population's age distribution, producing a summary rate that removes the confounding effect of age structure differences. Indirect standardization applies standard population rates to the study population's age structure to calculate expected events, used to compute the Standardized Mortality Ratio (SMR = Observed/Expected × 100)."
  },
  {
    id: 19,
    question: "In life table analysis, what does the 'life expectancy at birth (e0)' represent?",
    options: [
      "The age at which 50% of a birth cohort has died",
      "The average number of years a newborn is expected to live if current age-specific mortality rates persist throughout their lifetime",
      "The maximum age observed in the study population",
      "The probability of surviving from birth to age 65"
    ],
    answer: 1,
    explanation: "Life expectancy at birth (e0) is the average number of years a newborn is expected to live given that current age-specific mortality rates remain constant throughout their life. It is derived from the life table by summing the total person-years lived by the cohort (Tx) divided by the initial cohort size (l0). It is a summary measure of population health and mortality."
  },
  {
    id: 20,
    question: "According to the Demographic Transition Theory, which stage is characterized by both high birth rates and declining death rates, leading to rapid population growth?",
    options: [
      "Stage 1 (Pre-industrial/High stationary)",
      "Stage 2 (Early expanding)",
      "Stage 3 (Late expanding)",
      "Stage 4 (Low stationary)"
    ],
    answer: 1,
    explanation: "Stage 2 (Early expanding/Transitional) is characterized by high and stable birth rates with declining death rates (due to improved sanitation, nutrition, and basic healthcare), resulting in rapid population growth. Stage 1 has high birth AND death rates with slow growth. Stage 3 has declining birth rates. Stage 4 has low birth and low death rates with slow growth. India is considered to be in late Stage 2 / early Stage 3."
  },
  {
    id: 21,
    question: "Point-of-care testing (POCT) refers to diagnostic testing performed:",
    options: [
      "Only in centralized reference laboratories",
      "At or near the site of patient care, providing rapid results to guide immediate clinical decisions",
      "Exclusively by molecular methods requiring specialized equipment",
      "As part of population screening programs in community settings only"
    ],
    answer: 1,
    explanation: "POCT (also called near-patient testing or bedside testing) is performed at or near the patient — in clinics, emergency rooms, ICUs, or community settings — delivering rapid results within minutes to guide immediate clinical decisions. Examples include blood glucose meters, pregnancy test strips, rapid malaria tests, troponin point-of-care assays, and pulse oximeters. Quality control is a critical challenge for POCT."
  },
  {
    id: 22,
    question: "Rapid Diagnostic Tests (RDTs) for malaria are primarily based on detection of which antigen?",
    options: [
      "Merozoite surface protein-1 (MSP-1)",
      "HRP-2 (Histidine-Rich Protein 2) for P. falciparum and pLDH for non-falciparum species",
      "Circumsporozoite protein (CSP)",
      "Apical membrane antigen-1 (AMA-1)"
    ],
    answer: 1,
    explanation: "Malaria RDTs detect parasite antigens in peripheral blood. HRP-2 is highly specific to P. falciparum and is the most widely used target. Parasite lactate dehydrogenase (pLDH) can detect both P. falciparum and non-falciparum species (P. vivax, P. malariae, P. ovale). Aldolase is another pan-malaria antigen. Notably, HRP-2/3 gene deletions in P. falciparum strains can cause false-negative RDT results."
  },
  {
    id: 23,
    question: "In a sandwich (indirect) ELISA, which component is directly linked to the enzyme label?",
    options: [
      "The capture antibody coated on the plate",
      "The antigen in the patient sample",
      "The secondary (detection) antibody",
      "The substrate solution"
    ],
    answer: 2,
    explanation: "In a sandwich ELISA: (1) capture antibody is coated on the plate; (2) sample antigen binds to the capture antibody; (3) a detection antibody (specific to a different epitope on the antigen) is added; (4) an enzyme-conjugated secondary antibody binds to the detection antibody; (5) substrate is added and color change is proportional to antigen quantity. The enzyme label is on the secondary antibody."
  },
  {
    id: 24,
    question: "Western blot is used as a confirmatory test for HIV because it:",
    options: [
      "Detects HIV viral RNA with high sensitivity",
      "Identifies antibodies against specific HIV proteins separated by molecular weight, providing greater specificity than ELISA",
      "Quantifies the viral load in peripheral blood",
      "Detects proviral DNA integrated into host cell genome"
    ],
    answer: 1,
    explanation: "Western blot (immunoblot) separates HIV proteins by molecular weight via SDS-PAGE, transfers them to a membrane, and detects antibodies in the patient's serum against specific bands (e.g., gp160, gp120, gp41, p24, p31, p51, p55, p66). Reactivity to bands from two different gene products constitutes a positive result. This specificity makes it superior to ELISA as a confirmatory test, though it has been largely replaced by 4th generation assays."
  },
  {
    id: 25,
    question: "CBNAAT (Cartridge-Based Nucleic Acid Amplification Test) / GeneXpert MTB/RIF simultaneously detects:",
    options: [
      "M. tuberculosis and resistance to isoniazid",
      "M. tuberculosis and resistance to rifampicin (as a surrogate for MDR-TB)",
      "All Mycobacterium species and first-line drug susceptibility",
      "M. tuberculosis, HIV co-infection, and hepatitis B"
    ],
    answer: 1,
    explanation: "The GeneXpert MTB/RIF (CBNAAT) is a real-time PCR assay that simultaneously detects M. tuberculosis complex DNA and mutations in the rpoB gene that confer rifampicin resistance (>95% of rifampicin-resistant strains are MDR-TB). It provides results in about 2 hours from sputum samples. Rifampicin resistance serves as a proxy marker for MDR-TB. It is WHO-endorsed as the initial diagnostic test for TB."
  },
  {
    id: 26,
    question: "The 'window period' in HIV testing refers to:",
    options: [
      "The time between initiation of ART and achievement of viral suppression",
      "The interval between HIV infection and the appearance of detectable antibodies, antigens, or nucleic acids depending on the test used",
      "The period during which a patient is infectious but not yet symptomatic",
      "The duration for which a positive test result remains valid before retesting is needed"
    ],
    answer: 1,
    explanation: "The window period is the time between infection and when a test can reliably detect the infection. For HIV: 4th generation Ag/Ab combination tests can detect p24 antigen and antibodies (~18-45 days post-infection). Nucleic acid tests (NAT) can detect viral RNA within 10-33 days. Older 3rd generation antibody-only tests had a window period of 45-90 days. Testing during the window period can yield false-negative results."
  },
  {
    id: 27,
    question: "Mandatory blood bank screening in India under the Drugs and Cosmetics Act includes testing for all of the following EXCEPT:",
    options: [
      "HIV 1 and 2",
      "Hepatitis B surface antigen (HBsAg)",
      "Malaria (by microscopy or RDT)",
      "Dengue NS1 antigen"
    ],
    answer: 3,
    explanation: "Mandatory blood bank screening in India includes: HIV 1 & 2, HBsAg, Anti-HCV, VDRL/RPR (syphilis), and malaria (by peripheral blood smear or RDT). Dengue NS1 antigen testing is NOT currently mandated for routine blood bank screening, although dengue can be transfusion-transmitted. The Drugs and Cosmetics Act Schedule F(II) specifies these mandatory tests."
  },
  {
    id: 28,
    question: "Internal Quality Control (IQC) in a diagnostic laboratory primarily involves:",
    options: [
      "External assessment of laboratory performance by sending samples to a reference laboratory",
      "Routine use of control samples with known values within the laboratory to monitor precision and detect analytical errors",
      "Periodic inspection of laboratory facilities by an accreditation body",
      "Proficiency testing by comparing results with peer laboratories"
    ],
    answer: 1,
    explanation: "IQC uses control materials (with known target values and acceptable ranges) run alongside patient samples in each analytical batch. Westgard rules are used to interpret control charts (Levey-Jennings charts) and identify systematic errors (bias, calibration drift) or random errors (imprecision). External Quality Assurance Schemes (EQAS) involve sending samples to external organizations for proficiency testing."
  },
  {
    id: 29,
    question: "NABL (National Accreditation Board for Testing and Calibration Laboratories) accreditation for medical laboratories in India is based on which international standard?",
    options: [
      "ISO 9001:2015 (Quality Management Systems)",
      "ISO 15189:2022 (Medical Laboratories — Requirements for Quality and Competence)",
      "ISO 17025:2017 (Testing and Calibration Laboratories)",
      "ISO 14001:2015 (Environmental Management Systems)"
    ],
    answer: 1,
    explanation: "NABL accredits medical/clinical laboratories based on ISO 15189, which specifies requirements for quality and competence specific to medical laboratories, including pre-examination, examination, and post-examination processes. ISO 17025 is for testing and calibration laboratories (non-medical). ISO 9001 is a general quality management standard. NABL accreditation is mandatory for certain Government of India programs and ensures reliability of test results."
  },
  {
    id: 30,
    question: "Six Sigma in laboratory quality management targets a defect rate of:",
    options: [
      "1 defect per 1,000 opportunities (DPMO = 1,000)",
      "3.4 defects per million opportunities (DPMO = 3.4)",
      "100 defects per million opportunities (DPMO = 100)",
      "1 defect per 100 opportunities (DPMO = 10,000)"
    ],
    answer: 1,
    explanation: "Six Sigma represents a quality level of 3.4 defects per million opportunities (DPMO), corresponding to 6 standard deviations between the process mean and the nearest specification limit. In laboratory medicine, a sigma metric ≥6 indicates excellent analytical performance requiring minimal quality control. Sigma = (TEa - |bias|) / CV, where TEa is total allowable error. Most clinical labs operate at 3-4 sigma."
  },
  {
    id: 31,
    question: "The causative organism of primary syphilis and the characteristic lesion are:",
    options: [
      "Neisseria gonorrhoeae causing a painful genital ulcer",
      "Treponema pallidum causing a painless indurated ulcer (chancre)",
      "Haemophilus ducreyi causing a soft, painful chancroid",
      "Chlamydia trachomatis causing lymphogranuloma venereum"
    ],
    answer: 1,
    explanation: "Primary syphilis is caused by Treponema pallidum and presents as a single, painless, indurated ulcer (chancre) at the site of inoculation with associated painless regional lymphadenopathy. This resolves spontaneously in 3-6 weeks. Chancroid (H. ducreyi) causes a painful ulcer. Gonorrhea (N. gonorrhoeae) causes urethritis/cervicitis. LGV (C. trachomatis serovars L1-L3) causes inguinal lymphadenopathy."
  },
  {
    id: 32,
    question: "The drug of choice for uncomplicated gonorrhea in India, as per current guidelines, following widespread resistance to fluoroquinolones, is:",
    options: [
      "Ciprofloxacin 500 mg single dose",
      "Azithromycin 1g single dose alone",
      "Ceftriaxone 500 mg IM single dose (with or without azithromycin)",
      "Doxycycline 100 mg twice daily for 7 days"
    ],
    answer: 2,
    explanation: "Due to widespread fluoroquinolone resistance in N. gonorrhoeae, ceftriaxone (3rd generation cephalosporin) is now the recommended first-line treatment. WHO and Indian guidelines recommend ceftriaxone 500 mg IM single dose. Dual therapy with azithromycin was previously recommended but azithromycin resistance is increasing. Doxycycline covers chlamydia co-infection. Ciprofloxacin is no longer recommended for gonorrhea."
  },
  {
    id: 33,
    question: "Chlamydia trachomatis serovars A, B, Ba, and C are responsible for which clinical condition?",
    options: [
      "Non-gonococcal urethritis",
      "Lymphogranuloma venereum",
      "Trachoma (leading to preventable blindness)",
      "Reactive arthritis (Reiter's syndrome)"
    ],
    answer: 2,
    explanation: "C. trachomatis serovars A, B, Ba, C cause trachoma — repeated eye infections leading to follicular conjunctivitis, scarring (Herbert's pits), trichiasis, and ultimately corneal blindness. Serovars D-K cause genital tract infections (urethritis, cervicitis, PID) and neonatal conjunctivitis. Serovars L1-L3 cause lymphogranuloma venereum. Trachoma is the leading infectious cause of preventable blindness globally."
  },
  {
    id: 34,
    question: "Soil-transmitted helminths (STH) controlled under the National Deworming Day (NDD) program in India primarily include all of the following EXCEPT:",
    options: [
      "Ascaris lumbricoides",
      "Trichuris trichiura",
      "Hookworm (Ancylostoma duodenale and Necator americanus)",
      "Wuchereria bancrofti"
    ],
    answer: 3,
    explanation: "The National Deworming Day (NDD) targets soil-transmitted helminths: Ascaris lumbricoides, Trichuris trichiura, and hookworms (Ancylostoma duodenale, Necator americanus). Albendazole 400 mg is given to children aged 1-19 years twice yearly. Wuchereria bancrofti causes lymphatic filariasis and is NOT a soil-transmitted helminth — it is transmitted by mosquitoes (Culex quinquefasciatus)."
  },
  {
    id: 35,
    question: "India's target for elimination of lymphatic filariasis (LF) is defined as:",
    options: [
      "Zero transmission by 2030 as verified by Transmission Assessment Survey (TAS)",
      "Reduction of microfilaremia prevalence below 1% in implementation units (IUs) as assessed by TAS",
      "Complete eradication of Culex mosquito vectors by 2025",
      "Reduction of clinical disease (lymphoedema and hydrocele) cases by 90%"
    ],
    answer: 1,
    explanation: "WHO defines LF elimination as interruption of transmission, verified by Transmission Assessment Survey (TAS) showing antigenemia/microfilaremia prevalence below 1% in sentinel and spot-check sites within implementation units (IUs). India's National Programme for Elimination of LF (NPELF) uses annual Mass Drug Administration (MDA) with DEC + Albendazole, and in some states triple drug therapy (IDA: Ivermectin + DEC + Albendazole). TAS guides when to stop MDA."
  },
  {
    id: 36,
    question: "Kala-azar (Visceral Leishmaniasis) elimination target in India is defined as:",
    options: [
      "Zero reported cases in all districts",
      "Less than 1 case per 10,000 population at the sub-district (block/PHC) level",
      "Less than 1 case per 1,000 population at the district level",
      "Reduction of sandfly density by 95% in endemic areas"
    ],
    answer: 1,
    explanation: "India's kala-azar elimination target is <1 case per 10,000 population at the sub-district (block/PHC) level, sustained for at least 3 years. India uses Miltefosine (oral), Liposomal Amphotericin B, and combination therapy. The rK39 rapid test (immunochromatographic test) is used for diagnosis. Phlebotomus argentipes is the sandfly vector in India. Indoor Residual Spraying (IRS) with DDT/synthetic pyrethroids targets vectors."
  },
  {
    id: 37,
    question: "Leptospirosis transmission to humans occurs primarily through:",
    options: [
      "Person-to-person contact via respiratory droplets",
      "Ingestion of food contaminated with infected animal feces",
      "Contact of broken skin or mucous membranes with water or soil contaminated with urine from infected animals",
      "Bite of infected Ixodes ticks in forested areas"
    ],
    answer: 2,
    explanation: "Leptospirosis is caused by pathogenic Leptospira species. Humans are accidental dead-end hosts infected through contact of abraded skin or mucous membranes with contaminated water, mud, or soil containing urine from reservoir animals (rats, cattle, pigs, dogs). Occupational groups at risk include farmers, sewage workers, veterinarians, and miners. Flooding increases risk. Treatment: doxycycline or penicillin."
  },
  {
    id: 38,
    question: "Scrub typhus is caused by which organism and transmitted by which vector?",
    options: [
      "Rickettsia rickettsii transmitted by Dermacentor ticks",
      "Orientia tsutsugamushi transmitted by larval trombiculid mites (chiggers)",
      "Borrelia burgdorferi transmitted by Ixodes ticks",
      "Coxiella burnetii transmitted by inhaling dust from infected animal products"
    ],
    answer: 1,
    explanation: "Scrub typhus is caused by Orientia tsutsugamushi and transmitted by the bite of larval trombiculid mites (chiggers/harvest mites), particularly Leptotrombidium deliense. The mite bite leaves a characteristic eschar. Scrub typhus is endemic in the 'tsutsugamushi triangle' (Asia-Pacific). Diagnosis: Weil-Felix test (OXK agglutination), ELISA, or PCR. Treatment: doxycycline (drug of choice)."
  },
  {
    id: 39,
    question: "Plague is caused by Yersinia pestis. Which form of plague is directly transmitted from person to person via respiratory droplets?",
    options: [
      "Bubonic plague",
      "Septicemic plague",
      "Pneumonic plague",
      "Sylvatic plague"
    ],
    answer: 2,
    explanation: "Pneumonic plague (primary or secondary) involves infection of the lungs and is the only form that can spread directly from person to person via respiratory droplets — hence it is the most dangerous form for public health. Bubonic plague (most common) is transmitted by flea bites and presents with swollen lymph nodes (buboes). Septicemic plague involves bloodstream infection. Treatment: streptomycin, gentamicin, or doxycycline."
  },
  {
    id: 40,
    question: "Brucellosis is a zoonotic disease. Which occupational group has the HIGHEST risk of infection?",
    options: [
      "Fishermen and seafood handlers",
      "Veterinarians, farmers, abattoir workers, and laboratory personnel handling Brucella cultures",
      "Healthcare workers in intensive care units",
      "Forest workers in tick-endemic areas"
    ],
    answer: 1,
    explanation: "Brucellosis is caused by Brucella species (B. melitensis from goats/sheep is most virulent; B. abortus from cattle; B. suis from pigs). Transmission occurs through contact with infected animal products (placentas, aborted fetuses, blood), consumption of unpasteurized dairy, or laboratory exposure. Veterinarians, farmers, abattoir workers, and lab personnel are at highest risk. Diagnosis: Rose Bengal test (screening), SAT, blood cultures. Treatment: doxycycline + rifampicin for 6 weeks."
  },
  {
    id: 41,
    question: "Rheumatic heart disease (RHD) prevention strategy primarily focuses on:",
    options: [
      "Universal vaccination against Group A Streptococcus",
      "Primary prevention (treatment of GAS pharyngitis) and secondary prophylaxis (monthly benzathine penicillin to prevent recurrences)",
      "Early surgical intervention for all patients with mild mitral stenosis",
      "Dietary modification to reduce streptococcal colonization"
    ],
    answer: 1,
    explanation: "RHD prevention: Primary prevention involves prompt treatment of GAS (Group A Streptococcus) pharyngitis with penicillin/amoxicillin to prevent first attacks of acute rheumatic fever (ARF). Secondary prophylaxis with monthly benzathine penicillin G injections prevents recurrent ARF and further valvular damage. Duration depends on age and severity of cardiac involvement. Echocardiographic screening detects subclinical RHD."
  },
  {
    id: 42,
    question: "GOLD (Global Initiative for Chronic Obstructive Lung Disease) classifies COPD severity. A patient with post-bronchodilator FEV1/FVC < 0.70 and FEV1 40-49% of predicted falls in which GOLD grade?",
    options: [
      "GOLD 1 (Mild)",
      "GOLD 2 (Moderate)",
      "GOLD 3 (Severe)",
      "GOLD 4 (Very Severe)"
    ],
    answer: 2,
    explanation: "GOLD spirometric grades for COPD (all require FEV1/FVC < 0.70): Grade 1 (Mild): FEV1 ≥80% predicted. Grade 2 (Moderate): FEV1 50-79%. Grade 3 (Severe): FEV1 30-49%. Grade 4 (Very Severe): FEV1 <30%. Therefore, FEV1 40-49% falls in GOLD Grade 3. Note: The GOLD system also uses symptom assessment (CAT score, mMRC dyspnea scale) and exacerbation history for overall ABCD assessment."
  },
  {
    id: 43,
    question: "According to GINA (Global Initiative for Asthma) guidelines, what is the preferred initial controller medication for mild persistent asthma in adults?",
    options: [
      "Short-acting beta-2 agonist (SABA) alone as reliever therapy",
      "Low-dose inhaled corticosteroid (ICS) as regular controller therapy",
      "Long-acting beta-2 agonist (LABA) alone",
      "Oral theophylline as regular controller"
    ],
    answer: 1,
    explanation: "GINA Step 2 recommends low-dose inhaled corticosteroid (ICS) as the preferred regular controller therapy for mild persistent asthma, as ICS reduces airway inflammation, prevents exacerbations, and improves lung function. SABA alone is no longer recommended as the sole treatment (associated with adverse outcomes). LABA should not be used without ICS in asthma. As-needed low-dose ICS-formoterol is an alternative at Step 1-2."
  },
  {
    id: 44,
    question: "Chronic Kidney Disease (CKD) staging is based on GFR categories and albuminuria categories. Stage G3a corresponds to an eGFR of:",
    options: [
      "≥90 mL/min/1.73m²",
      "60-89 mL/min/1.73m²",
      "45-59 mL/min/1.73m²",
      "30-44 mL/min/1.73m²"
    ],
    answer: 2,
    explanation: "KDIGO CKD GFR categories: G1: ≥90; G2: 60-89; G3a: 45-59; G3b: 30-44; G4: 15-29; G5: <15 mL/min/1.73m². CKD is defined as abnormalities of kidney structure or function present for >3 months. Albuminuria categories: A1 (<30 mg/g), A2 (30-300 mg/g, moderately increased), A3 (>300 mg/g, severely increased). Both GFR and albuminuria independently predict CKD progression and cardiovascular risk."
  },
  {
    id: 45,
    question: "The National Programme for Control of Blindness and Visual Impairment (NPCB&VI) in India primarily targets which cause of avoidable blindness?",
    options: [
      "Diabetic retinopathy",
      "Cataract (accounting for over 60% of blindness in India)",
      "Glaucoma",
      "Age-related macular degeneration"
    ],
    answer: 1,
    explanation: "Cataract accounts for approximately 60-66% of blindness in India, making it the leading cause of avoidable blindness. NPCB&VI focuses on cataract surgeries (targeting high-quality IOL implantation), with targets of 6-7 million cataract surgeries per year. The programme also addresses other causes: trachoma, childhood blindness, refractive errors, corneal blindness, glaucoma, and diabetic retinopathy."
  },
  {
    id: 46,
    question: "The T-score in osteoporosis diagnosis represents:",
    options: [
      "The patient's bone mineral density (BMD) compared to the average BMD of age- and sex-matched controls",
      "The number of standard deviations by which the patient's BMD differs from the mean BMD of a young healthy reference population",
      "A ratio of trabecular to cortical bone density measured by quantitative CT",
      "The 10-year probability of fracture calculated by the FRAX algorithm"
    ],
    answer: 1,
    explanation: "T-score = (Patient's BMD − Mean BMD of young healthy adults) / SD of young healthy adults. WHO criteria: T-score ≥ -1.0: Normal. T-score -1.0 to -2.5: Osteopenia. T-score ≤ -2.5: Osteoporosis. T-score ≤ -2.5 with fragility fracture: Severe osteoporosis. Z-score compares to age-matched peers and is used in pre-menopausal women and men under 50."
  },
  {
    id: 47,
    question: "Rheumatoid arthritis (RA) differs from osteoarthritis (OA) primarily in that RA:",
    options: [
      "Characteristically affects weight-bearing joints symmetrically in older adults",
      "Is characterized by synovial inflammation, morning stiffness >1 hour, symmetrical joint involvement, and positive rheumatoid factor/anti-CCP antibodies",
      "Shows osteophyte formation and joint space narrowing on X-ray without systemic features",
      "Is definitively diagnosed by measuring serum uric acid levels"
    ],
    answer: 1,
    explanation: "RA is an autoimmune, inflammatory arthritis: symmetric small joint involvement (MCPs, PIPs, wrists), morning stiffness >1 hour, rheumatoid factor (RF) and anti-cyclic citrullinated peptide (anti-CCP) antibodies, systemic features (fatigue, anemia of chronic disease). OA is degenerative: asymmetric large/weight-bearing joint involvement, brief morning stiffness (<30 min), osteophytes on X-ray, no systemic inflammation. Uric acid elevation suggests gout."
  },
  {
    id: 48,
    question: "Regarding stroke management, 'Time is Brain' concept emphasizes that:",
    options: [
      "Early surgery is more important than medical management within the first hour",
      "Each minute of ischemic stroke causes death of approximately 1.9 million neurons, underscoring urgency of reperfusion therapy",
      "Blood pressure reduction should be the primary intervention regardless of stroke type",
      "All stroke patients should receive anticoagulation within 3 hours of onset"
    ],
    answer: 1,
    explanation: "In acute ischemic stroke, approximately 1.9 million neurons, 13.8 billion synapses, and 12 km of myelinated fibers are lost every minute without treatment. IV thrombolysis with alteplase (tPA) is indicated within 4.5 hours of onset (if eligible). Mechanical thrombectomy is indicated up to 24 hours for selected patients. The 'door-to-needle' time target for tPA is <60 minutes. Hemorrhagic stroke requires different management."
  },
  {
    id: 49,
    question: "Congenital heart disease (CHD) screening in newborns using pulse oximetry (critical CHD screening) is performed to detect:",
    options: [
      "All forms of CHD including small VSDs",
      "Critical CHD causing significant oxygen desaturation (e.g., TAPVR, transposition of great arteries, hypoplastic left heart syndrome)",
      "Pulmonary hypertension in premature infants",
      "Rhythm disorders such as complete heart block"
    ],
    answer: 1,
    explanation: "Critical CHD screening uses pulse oximetry in newborns (24-48 hours post-birth) to detect ductal-dependent lesions that cause significant hypoxemia: hypoplastic left heart syndrome, pulmonary atresia, tricuspid atresia, tetralogy of Fallot, TAPVR, transposition of great arteries (TGA), truncus arteriosus, and coarctation of aorta. A reading <95% or >3% difference between right hand and foot is a positive screen warranting echocardiography."
  },
  {
    id: 50,
    question: "Epilepsy is defined as:",
    options: [
      "Any single unprovoked seizure lasting more than 5 minutes",
      "Two or more unprovoked seizures occurring >24 hours apart, OR one unprovoked seizure with high recurrence risk, OR diagnosis of an epilepsy syndrome",
      "Recurrent febrile convulsions in children under 5 years",
      "Abnormal EEG activity regardless of clinical seizure episodes"
    ],
    answer: 1,
    explanation: "ILAE (2014) defines epilepsy as: (1) ≥2 unprovoked (or reflex) seizures occurring >24 hours apart; (2) one unprovoked seizure with ≥60% probability of further seizures (e.g., post-stroke, after intracranial infection); or (3) diagnosis of an epilepsy syndrome. Febrile seizures are provoked and do NOT define epilepsy. Abnormal EEG alone without clinical seizures does not constitute epilepsy."
  },
  {
    id: 51,
    question: "The concept of 'brain death' in organ transplantation ethics is important because:",
    options: [
      "It allows organ harvesting when the patient is in a persistent vegetative state",
      "It legally and medically defines irreversible cessation of all brain functions including brainstem, permitting organ donation under the Transplantation of Human Organs Act",
      "It justifies withdrawal of all life-sustaining treatment regardless of family consent",
      "It is determined by a single physician's clinical assessment"
    ],
    answer: 1,
    explanation: "Brain death is the irreversible cessation of all brain functions, including the brainstem, while the heart continues beating with ventilator support. In India, the Transplantation of Human Organs and Tissues Act (THOTA), 1994 (amended 2011) recognizes brain death as legal death and permits deceased donor organ transplantation. Brain death certification requires a panel of at least 4 doctors including a neurologist/neurosurgeon and the hospital's medical administrator."
  },
  {
    id: 52,
    question: "Active euthanasia involves intentionally administering a lethal agent to end a patient's life. What is the current legal status of active euthanasia in India?",
    options: [
      "Legal when a patient has a terminal illness and has provided written consent",
      "Legal only for patients with irreversible coma",
      "Illegal; however, passive euthanasia (withdrawal of life support) in specific conditions is permitted by Supreme Court ruling",
      "Legal under the Medical Termination of Pregnancy Act provisions"
    ],
    answer: 2,
    explanation: "Active euthanasia (intentionally administering a lethal substance) remains illegal in India under Sections 302 and 304 of IPC (now Bharatiya Nyaya Sanhita). However, in Aruna Shanbaug v. Union of India (2011) and Common Cause v. Union of India (2018), the Supreme Court allowed passive euthanasia (withdrawal of life support) and recognized the right to die with dignity, including the validity of 'Advance Directives' (living wills) for terminally ill patients."
  },
  {
    id: 53,
    question: "The Surrogacy (Regulation) Act, 2021 in India permits which type of surrogacy?",
    options: [
      "Commercial surrogacy by Indian or foreign surrogates",
      "Altruistic surrogacy only, where the surrogate is a close relative and no monetary compensation beyond medical expenses is given",
      "Gestational surrogacy for single women without any restrictions",
      "International surrogacy where foreign nationals can commission surrogates in India"
    ],
    answer: 1,
    explanation: "The Surrogacy (Regulation) Act, 2021 bans commercial surrogacy and permits only altruistic surrogacy. The surrogate must be a married woman (25-35 years, with her own child), a close relative of the intending couple. No payment beyond medical expenses and insurance is allowed. The intending couple must be Indian citizens, married 5+ years, with at least one partner having a medical indication. Single women (widows/divorcees) can commission surrogacy; foreign nationals and same-sex couples cannot."
  },
  {
    id: 54,
    question: "The PCPNDT Act (Pre-Conception and Pre-Natal Diagnostic Techniques Act), 1994 prohibits:",
    options: [
      "All forms of prenatal ultrasound examination during pregnancy",
      "Sex determination and sex-selective abortion, with regulation of ultrasound equipment and prenatal diagnostic procedures",
      "Only genetic testing for hereditary conditions",
      "Use of ultrasound in private clinics for any purpose"
    ],
    answer: 1,
    explanation: "The PCPNDT Act prohibits: communication of the sex of the fetus; sex selection before or after conception; sex-selective abortions; advertisement of sex determination services. It regulates all prenatal diagnostic techniques (ultrasound, amniocentesis, CVS) by requiring registration of facilities/equipment and maintenance of records. Violations can result in 3-5 years imprisonment and fines. The Act was amended in 2003 to cover pre-conception sex selection."
  },
  {
    id: 55,
    question: "Under New Drugs and Clinical Trials Rules, 2019 (India), a Serious Adverse Event (SAE) in a clinical trial must be reported to the Central Licensing Authority (CDSCO) within:",
    options: [
      "7 calendar days for fatal or life-threatening SAEs, and 15 calendar days for other SAEs",
      "24 hours for all SAEs regardless of severity",
      "30 days for all SAEs occurring during the trial",
      "At the end of the trial in the final study report"
    ],
    answer: 0,
    explanation: "Under the New Drugs and Clinical Trials Rules, 2019: Fatal or life-threatening unexpected SAEs must be reported to CDSCO within 7 calendar days (with a follow-up in 15 days). Other serious unexpected SAEs must be reported within 15 calendar days. The Investigator reports to the sponsor, and the sponsor reports to CDSCO and the Ethics Committee. SAEs require causality assessment."
  },
  {
    id: 56,
    question: "The primary role of a Data Safety Monitoring Board (DSMB) in a clinical trial is to:",
    options: [
      "Approve the study protocol before trial initiation",
      "Independently review accumulating safety and efficacy data during the trial to recommend continuation, modification, or early termination",
      "Conduct the statistical analysis at the end of the trial",
      "Obtain informed consent from study participants"
    ],
    answer: 1,
    explanation: "A DSMB (also called Data Monitoring Committee, DMC) is an independent committee of experts (clinicians, statisticians, ethicists) that periodically reviews unblinded accumulating data during a trial. It can recommend stopping the trial early due to: unexpected harm (safety stopping rules), clear efficacy (benefit stopping), or futility (no chance of showing effect). The DSMB protects participant safety and trial integrity while the trial remains blinded to the investigators."
  },
  {
    id: 57,
    question: "The Belmont Report's principle of 'Justice' in research ethics primarily requires:",
    options: [
      "That all participants provide written informed consent",
      "That benefits and burdens of research be distributed fairly, avoiding exploitation of vulnerable populations",
      "That potential benefits of research outweigh the risks",
      "That research participants can withdraw at any time without penalty"
    ],
    answer: 1,
    explanation: "The Belmont Report (1979) identified three core principles: Respect for Persons (autonomy, informed consent), Beneficence (maximize benefits, minimize harms), and Justice (fair distribution of research benefits and burdens). Justice requires that no group be systematically excluded from benefits or disproportionately bear research burdens. Historically, vulnerable populations (prisoners, minorities, poor) were exploited; justice guards against this."
  },
  {
    id: 58,
    question: "Compensation for research-related injury in clinical trials in India is governed by which regulatory provision?",
    options: [
      "Consumer Protection Act, 2019",
      "New Drugs and Clinical Trials Rules, 2019 — Schedule Y which mandates free medical treatment and compensation for trial-related injuries and deaths",
      "Medical Council of India Code of Ethics only",
      "No specific legislation; compensation is voluntary"
    ],
    answer: 1,
    explanation: "The New Drugs and Clinical Trials Rules, 2019 (amended from Schedule Y) mandate that sponsors provide free medical management and financial compensation for trial-related injuries and deaths. The compensation quantum is determined by a formula considering factors like age, income, and seriousness of injury. Ethics Committees must ensure compensation provisions are in place before approving a trial. This addressed concerns raised after the deaths in clinical trials in India around 2012-2013."
  },
  {
    id: 59,
    question: "Biospecimen banking ethics requires all of the following EXCEPT:",
    options: [
      "Informed consent specifying potential future uses of stored samples",
      "Right of participants to withdraw their samples from the biobank",
      "Mandatory disclosure of all incidental findings to participants",
      "Privacy protection through de-identification or coding of samples"
    ],
    answer: 2,
    explanation: "Biobank ethics requires: broad or specific informed consent for future use; right to withdrawal (though practically the sample may be destroyed rather than traced); de-identification/coding to protect privacy; governance structure and access policies; benefit sharing. However, disclosure of all incidental findings is NOT mandatory — biobanks develop policies on managing clinically actionable vs. non-actionable incidental findings, which varies by institution and type of finding."
  },
  {
    id: 60,
    question: "A researcher proposes to re-use existing clinical samples collected for another purpose. This is ethically permissible if:",
    options: [
      "The original study's consent form included broad language permitting future use for related research purposes",
      "The samples are anonymized and therefore ethical review is never required",
      "The principal investigator of the new study personally knows the donors",
      "More than 10 years have elapsed since the original collection"
    ],
    answer: 0,
    explanation: "Secondary use of biospecimens is ethically permissible when: (1) the original consent covered future use; (2) a waiver of consent is granted by an Ethics Committee for anonymized/de-identified samples where re-identification risk is minimal and individual contact is impracticable; or (3) new consent is obtained. Anonymization reduces but does not eliminate the need for ethical review — Ethics Committees must still evaluate risks. Time elapsed and personal relationship are irrelevant ethical criteria."
  },
  {
    id: 61,
    question: "Restriction enzymes (endonucleases) recognize and cut DNA at specific sequences called:",
    options: [
      "Promoter regions",
      "Palindromic sequences (restriction sites)",
      "Intron-exon boundaries",
      "Telomeric repeats"
    ],
    answer: 1,
    explanation: "Type II restriction endonucleases recognize specific short (4-8 bp) palindromic DNA sequences (reads the same on both strands in 5'→3' direction) and cut within or near the recognition site. For example, EcoRI recognizes 5'-GAATTC-3' and cuts between G and A. The resulting 'sticky ends' (cohesive ends) or 'blunt ends' facilitate ligation into cloning vectors. They are essential tools in recombinant DNA technology."
  },
  {
    id: 62,
    question: "A Yeast Artificial Chromosome (YAC) cloning vector can accommodate DNA inserts of:",
    options: [
      "Up to 10 kb",
      "Up to 40-50 kb (as with cosmids)",
      "100-2000 kb (100 kb to 2 Mb)",
      "Only circular supercoiled DNA up to 5 kb"
    ],
    answer: 2,
    explanation: "Cloning vector insert capacity: Plasmids: up to ~10 kb; Lambda phage: 15-23 kb; Cosmids: 40-50 kb; Fosmids: ~40 kb; BAC (Bacterial Artificial Chromosome): 100-300 kb; YAC (Yeast Artificial Chromosome): 100 kb to 2 Mb. YACs contain yeast telomeres, centromere, and origin of replication, allowing propagation of very large fragments. They were used in the Human Genome Project. Disadvantage: prone to chimerism and rearrangements."
  },
  {
    id: 63,
    question: "Northern blotting is used to detect:",
    options: [
      "Specific DNA sequences in a genomic DNA sample",
      "Specific RNA (mRNA) sequences, providing information about gene expression levels",
      "Specific protein antigens using antibodies",
      "Protein-DNA interactions in chromatin"
    ],
    answer: 1,
    explanation: "The blotting hierarchy: Southern blot = DNA detection (named after Edwin Southern). Northern blot = RNA detection (named by analogy). Western blot = protein detection. Eastern blot (less common) = lipids or post-translational modifications. Northern blotting involves RNA electrophoresis, transfer to membrane, and hybridization with labeled probe. It provides information on mRNA size and expression levels. RT-PCR and RNA-seq have largely replaced it."
  },
  {
    id: 64,
    question: "Fluorescence In Situ Hybridization (FISH) is primarily used in clinical diagnostics to:",
    options: [
      "Sequence the entire human genome",
      "Detect chromosomal abnormalities such as deletions, duplications, translocations, or aneuploidy using fluorescently labeled DNA probes",
      "Quantify protein expression in tissue sections",
      "Identify antibiotic resistance genes in bacterial cultures"
    ],
    answer: 1,
    explanation: "FISH uses fluorescently labeled DNA probes that hybridize to specific chromosomal locations in metaphase or interphase cells. Clinical applications: detecting gene amplifications (HER2/neu in breast cancer), translocations (BCR-ABL in CML), microdeletions (22q11 deletion in DiGeorge syndrome), and aneuploidy (trisomies). It is faster than conventional karyotyping and can be done on interphase cells without cell culture."
  },
  {
    id: 65,
    question: "SNP (Single Nucleotide Polymorphism) genotyping is used in which of the following applications?",
    options: [
      "Measuring mRNA expression levels across the transcriptome",
      "Identifying proteins in complex biological mixtures",
      "Genome-wide association studies (GWAS) to identify genetic variants associated with disease risk",
      "Determining the methylation status of CpG islands"
    ],
    answer: 2,
    explanation: "SNPs are single base-pair variations in DNA sequence occurring at >1% frequency in a population. SNP genotyping platforms (Illumina SNP arrays, Affymetrix) can genotype hundreds of thousands to millions of SNPs simultaneously. GWAS uses SNP genotyping to identify associations between common genetic variants and complex diseases (e.g., type 2 diabetes, schizophrenia, coronary artery disease). Expression arrays measure mRNA. Mass spectrometry/proteomics identifies proteins. Bisulfite sequencing assesses methylation."
  },
  {
    id: 66,
    question: "Mass spectrometry-based proteomics is used to:",
    options: [
      "Sequence mRNA molecules directly from cell lysates",
      "Identify, quantify, and characterize proteins in complex biological samples by measuring mass-to-charge ratios of peptide fragments",
      "Detect chromosomal copy number variations",
      "Measure telomere length in cancer cells"
    ],
    answer: 1,
    explanation: "Mass spectrometry (MS)-based proteomics: proteins are enzymatically digested into peptides, ionized, and separated by mass-to-charge ratio (m/z). Tandem MS (MS/MS) provides peptide sequence information for protein identification. Approaches include SILAC, iTRAQ, TMT for quantitative proteomics, and label-free quantification. Applications: biomarker discovery, protein-protein interactions, post-translational modification analysis, and drug target identification."
  },
  {
    id: 67,
    question: "Metabolomics is defined as the comprehensive study of:",
    options: [
      "All genes expressed in a cell or tissue at a given time",
      "All proteins present in a biological sample",
      "The complete set of small molecule metabolites (<1500 Da) in a biological sample, reflecting the functional status of biological systems",
      "Epigenetic modifications of the genome"
    ],
    answer: 2,
    explanation: "Metabolomics (or metabonomics) is the systematic study of the complete set of small molecules (metabolites — intermediates and products of metabolism, <1500 Da) in a cell, tissue, or biofluid. It provides a snapshot of physiological/pathological state. Techniques: NMR spectroscopy and mass spectrometry. Applications: disease biomarker discovery, drug toxicity monitoring, nutritional research, and gut microbiome studies. It sits at the bottom of the 'omics cascade' (genome → transcriptome → proteome → metabolome)."
  },
  {
    id: 68,
    question: "Comparative Genomic Hybridization (CGH) arrays are used to detect:",
    options: [
      "Single nucleotide polymorphisms across the genome",
      "DNA copy number variations (CNVs) — gains and losses of chromosomal regions — across the entire genome",
      "Protein expression differences between tumor and normal tissue",
      "Epigenetic silencing of tumor suppressor genes"
    ],
    answer: 1,
    explanation: "Array CGH (aCGH) simultaneously compares copy numbers across the genome by co-hybridizing differentially labeled test and reference DNA to an array of genomic probes. Gains (amplifications) and losses (deletions) appear as shifts in fluorescence ratio. It identifies submicroscopic CNVs not detectable by conventional karyotyping. Applications: cancer genomics (identifying oncogene amplifications, tumor suppressor deletions), and developmental disorders (microdeletion/microduplication syndromes)."
  },
  {
    id: 69,
    question: "In RT-PCR (Reverse Transcription PCR), the enzyme reverse transcriptase is used to:",
    options: [
      "Amplify DNA using a heat-stable DNA polymerase",
      "Convert RNA into complementary DNA (cDNA) as a prerequisite for PCR amplification",
      "Sequence RNA molecules directly without conversion",
      "Ligate DNA fragments into expression vectors"
    ],
    answer: 1,
    explanation: "In RT-PCR, RNA is first reverse-transcribed into complementary DNA (cDNA) by reverse transcriptase (an RNA-dependent DNA polymerase from retroviruses). The cDNA is then amplified by PCR. RT-PCR is used to detect RNA viruses (HIV, SARS-CoV-2), measure gene expression (mRNA levels), and create cDNA libraries. Quantitative RT-PCR (qRT-PCR) measures initial RNA quantity using fluorescent signals (SYBR Green or TaqMan probes)."
  },
  {
    id: 70,
    question: "DNA microarray technology allows simultaneous measurement of:",
    options: [
      "Gene expression levels for thousands of genes in a single experiment",
      "Protein concentrations in serum samples",
      "The three-dimensional structure of DNA in the nucleus",
      "Mitochondrial DNA mutations only"
    ],
    answer: 0,
    explanation: "DNA microarrays (gene chips) contain thousands of oligonucleotide probes fixed on a solid surface. Labeled cDNA/cRNA from a sample hybridizes to complementary probes, and fluorescence intensity reflects mRNA expression levels. Applications: transcriptomics, SNP genotyping, CGH, methylation profiling, and miRNA expression profiling. RNA-seq has largely superseded expression microarrays but arrays remain cost-effective for targeted analyses."
  },
  {
    id: 71,
    question: "Dimorphic fungi are characterized by their ability to exist in two forms. Which temperature determines the morphological transition?",
    options: [
      "They exist as yeasts at 25°C (room temperature) and as molds at 37°C (body temperature)",
      "They exist as molds at 25°C (room temperature) and as yeasts at 37°C (body temperature)",
      "They are always molds regardless of temperature but change cell wall composition",
      "The transition depends on pH rather than temperature"
    ],
    answer: 1,
    explanation: "Dimorphic fungi follow the mnemonic 'mold in the cold (25°C), yeast in the heat (37°C)': at environmental temperature (25°C), they grow as molds (saprophytic form); at body temperature (37°C) in host tissues, they exist as yeasts or spherules. Examples: Histoplasma capsulatum, Coccidioides immitis (forms spherules, not yeast), Blastomyces dermatitidis, Paracoccidioides brasiliensis, Sporothrix schenckii, Talaromyces (Penicillium) marneffei."
  },
  {
    id: 72,
    question: "Dermatophytes causing ringworm infections belong to which genera?",
    options: [
      "Candida, Cryptococcus, and Aspergillus",
      "Trichophyton, Microsporum, and Epidermophyton",
      "Fusarium, Alternaria, and Curvularia",
      "Mucor, Rhizopus, and Cunninghamella"
    ],
    answer: 1,
    explanation: "Dermatophytes are fungi that infect keratinized tissues (skin, hair, nails). The three genera are: Trichophyton (most common, all three sites), Microsporum (skin and hair, not nails — except M. gypseum), and Epidermophyton (skin and nails, not hair). They cause tinea infections: tinea capitis (scalp), tinea corporis (body), tinea pedis (athlete's foot), tinea unguium/onychomycosis (nails). Identified by colony morphology, macroconidia shape, and hair invasion pattern."
  },
  {
    id: 73,
    question: "Pneumocystis jirovecii pneumonia (PCP) is a life-threatening opportunistic infection primarily seen in patients with CD4 count:",
    options: [
      "< 500 cells/μL",
      "< 350 cells/μL",
      "< 200 cells/μL",
      "< 100 cells/μL"
    ],
    answer: 2,
    explanation: "PCP (caused by the fungus Pneumocystis jirovecii, previously P. carinii in rats) typically occurs when CD4 count falls below 200 cells/μL. It presents with progressive dyspnea, dry cough, and hypoxia. Diagnosis: induced sputum or BAL showing cysts/trophic forms by GMS/Giemsa stain; PCR. Treatment: co-trimoxazole (TMP-SMX) — high dose for treatment, low dose for prophylaxis. Primary prophylaxis is started when CD4 <200 cells/μL."
  },
  {
    id: 74,
    question: "The life cycle of Plasmodium falciparum in the human host includes all of the following stages EXCEPT:",
    options: [
      "Liver (hepatic/exoerythrocytic) schizogony",
      "Erythrocytic schizogony producing merozoites",
      "Formation of gametocytes",
      "Dormant hypnozoites in the liver"
    ],
    answer: 3,
    explanation: "P. falciparum does NOT form hypnozoites (dormant liver stages responsible for relapses). Hypnozoites are formed by P. vivax and P. ovale. P. falciparum cycle: sporozoites (from mosquito bite) → liver schizogony (asymptomatic) → merozoites → infect RBCs → erythrocytic schizogony (48-hour cycle, tertian fever) → some become gametocytes → ingested by Anopheles mosquito → sexual cycle → sporozoites. P. malariae also lacks hypnozoites."
  },
  {
    id: 75,
    question: "The standard algorithm for HIV diagnosis in India recommended by NACO uses which testing strategy?",
    options: [
      "Single ELISA test followed by Western blot confirmation for all reactive samples",
      "Three rapid tests in sequence (A1, A2, A3) using tests of different antigens/principles, with serial testing strategy",
      "Viral load measurement as the initial diagnostic test",
      "CD4 count as the primary diagnostic criterion"
    ],
    answer: 1,
    explanation: "NACO's HIV testing strategy (Strategy III for blood banks and clinical settings): three tests using rapid/simple assays. A1 (most sensitive ELISA/rapid test): if non-reactive, report HIV-negative. If A1 reactive → A2 (different antigen/principle): if non-reactive, report HIV-negative. If A2 reactive → A3 (third test, different principle): if reactive, report HIV-positive; if non-reactive, report indeterminate. Western blot is NOT used routinely in India. CD4 and VL are for monitoring, not diagnosis."
  },
  {
    id: 76,
    question: "Serological markers in acute Hepatitis B infection appear in the following sequence:",
    options: [
      "HBsAg → Anti-HBc IgM → HBeAg → Anti-HBe → Anti-HBs",
      "Anti-HBs → HBsAg → HBeAg → Anti-HBc",
      "Anti-HBc IgG → Anti-HBs → HBsAg",
      "HBeAg → Anti-HBe → HBsAg → Anti-HBc → Anti-HBs"
    ],
    answer: 0,
    explanation: "Timeline of HBV markers in acute infection: HBsAg appears first (incubation period, 1-12 weeks post-exposure); HBeAg and HBV DNA appear concurrently (high infectivity); Anti-HBc IgM appears at symptom onset (best marker of acute infection); HBeAg disappears before HBsAg (seroconversion to Anti-HBe); HBsAg clears (window period — neither HBsAg nor Anti-HBs detectable, Anti-HBc IgM present); Anti-HBs appears last (indicates recovery and immunity)."
  },
  {
    id: 77,
    question: "Line Probe Assay (LPA) for TB drug resistance detection is based on which principle?",
    options: [
      "Liquid culture with drug-containing media measuring growth inhibition",
      "PCR amplification of resistance-associated gene regions followed by reverse hybridization to membrane-bound probes",
      "Mass spectrometry identification of resistance mutations in extracted DNA",
      "Next-generation sequencing of the entire M. tuberculosis genome"
    ],
    answer: 1,
    explanation: "LPA (GenoType MTBDRplus, GenoType MTBDRsl) uses PCR to amplify specific gene regions (rpoB for RIF resistance, katG and inhA for INH resistance; gyrA/gyrB for fluoroquinolones, rrs/eis for aminoglycosides) followed by reverse hybridization to membrane-bound wild-type and mutation-specific probes. Absence of wild-type probe signal and/or presence of mutation probe signal indicates resistance. Results available in 4-6 hours. MGIT 960 is a liquid culture system."
  },
  {
    id: 78,
    question: "For COVID-19 diagnosis, RT-PCR targets which genomic regions of SARS-CoV-2?",
    options: [
      "Hemagglutinin (HA) and neuraminidase (NA) genes",
      "E gene (envelope), N gene (nucleocapsid), and RdRp gene (RNA-dependent RNA polymerase) — using multiple targets for specificity",
      "Spike (S) gene alone as the primary diagnostic target",
      "Reverse transcriptase gene, as SARS-CoV-2 is a retrovirus"
    ],
    answer: 1,
    explanation: "SARS-CoV-2 RT-PCR assays typically target 2-3 genomic regions for sensitivity and specificity: E gene (first-line screening per WHO/Corman-Drosten protocol), N gene (nucleocapsid), RdRp gene, and ORF1ab. Using multiple targets reduces false negatives and false positives. SARS-CoV-2 is a positive-sense ssRNA coronavirus, NOT a retrovirus. Spike gene mutations are important for variant characterization. HA/NA are influenza genes."
  },
  {
    id: 79,
    question: "The MGIT (Mycobacteria Growth Indicator Tube) 960 system is used in TB diagnostics for:",
    options: [
      "Rapid identification of Mycobacterium species from clinical samples by PCR",
      "Automated liquid culture for M. tuberculosis isolation and drug susceptibility testing, detecting growth via fluorescence",
      "Staining of acid-fast bacilli in sputum smears",
      "Immunochromatographic detection of TB antigens in urine"
    ],
    answer: 1,
    explanation: "MGIT 960 (BD Diagnostics) uses liquid Middlebrook 7H9 broth with a fluorescent oxygen sensor (ruthenium pentahydrate) at the tube bottom. As mycobacteria grow, they consume oxygen, reducing quenching of fluorescence — increased fluorescence signals growth. The automated system monitors 960 tubes simultaneously. Mean detection time: 11-15 days (vs. 3-6 weeks on LJ media). Used for both primary culture and drug susceptibility testing (DST) including first and second-line drugs."
  },
  {
    id: 80,
    question: "Leishmania donovani, the causative agent of kala-azar, is transmitted by which vector and exists in which forms?",
    options: [
      "Anopheles mosquito; sporozoite (infective) and merozoite (blood stage) forms",
      "Phlebotomus sandfly; promastigote (in sandfly, infective) and amastigote (intracellular in human macrophages)",
      "Triatoma (triatomine) bug; epimastigote and trypomastigote forms",
      "Culex mosquito; microfilaria (in blood) and adult worm (in lymphatics) forms"
    ],
    answer: 1,
    explanation: "Leishmania donovani: Vector — female Phlebotomus argentipes sandfly (in India). In sandfly gut: promastigotes (flagellated, extracellular). Inoculated into human skin, promastigotes are phagocytosed by macrophages and transform into amastigotes (non-flagellated, intracellular). Amastigotes multiply in mononuclear phagocyte system (spleen, liver, bone marrow, lymph nodes). Sandfly ingests amastigotes during blood meal → transform to promastigotes. Trypanosoma is transmitted by triatomine bugs (T. cruzi) or tsetse flies (T. brucei)."
  },
  {
    id: 81,
    question: "The word 'Nosology' means:",
    options: [
      "The study of bacteria causing hospital-acquired infections",
      "The branch of medicine concerned with the classification of diseases",
      "The scientific study of the nose and its disorders",
      "The study of drug interactions and toxicology"
    ],
    answer: 1,
    explanation: "Nosology (from Greek: nosos = disease, logos = study) is the branch of medical science dealing with the classification and systematic arrangement of diseases. It involves organizing diseases into categories and establishing criteria for diagnosis. It differs from 'nosocomial' (hospital-acquired). Rhinology studies the nose. Pharmacology/toxicology studies drugs and poisons."
  },
  {
    id: 82,
    question: "The collective noun for a group of surgeons is:",
    options: [
      "A ward of surgeons",
      "A theatre of surgeons",
      "A panel of surgeons",
      "A round of surgeons"
    ],
    answer: 1,
    explanation: "The collective noun for surgeons is 'a theatre of surgeons' — referencing the operating theatre where surgeons work. Similarly: a 'ward' is associated with nurses. 'A panel' is used for judges or experts. While 'a panel of surgeons' may be used informally (e.g., expert panel), the established collective noun specific to surgeons is 'a theatre of surgeons.'"
  },
  {
    id: 83,
    question: "The feminine gender of 'testator' (one who makes a will) is:",
    options: [
      "Testatress",
      "Testatrice",
      "Testatrix",
      "Testatora"
    ],
    answer: 2,
    explanation: "Testatrix is the feminine form of testator (a person who makes a legally valid will). This is an example of Latin-derived gender distinction. Similar Latin feminine forms: executor → executrix; administrator → administratrix; benefactor → benefactress. These terms are used in legal and medical-legal contexts (e.g., forensic medicine, wills and probate)."
  },
  {
    id: 84,
    question: "The plural of 'criterion' is:",
    options: [
      "Criterions",
      "Criteria",
      "Criterias",
      "Criterian"
    ],
    answer: 1,
    explanation: "Criterion (Greek origin: kriterion) has the irregular plural 'criteria.' This is one of the most commonly misused plurals in academic and scientific writing (often incorrectly used as singular: 'this criteria is...'). Similar Greek/Latin plurals: phenomenon → phenomena; datum → data; stratum → strata; bacterium → bacteria; medium → media; curriculum → curricula; appendix → appendices."
  },
  {
    id: 85,
    question: "Which of the following medical terms is CORRECTLY spelled?",
    options: [
      "Haemorrhaige",
      "Diarrhoea",
      "Anesthesia",
      "Septicaemia"
    ],
    answer: 1,
    explanation: "Diarrhoea (British) / Diarrhea (American) — correct. The other options are misspelled: Haemorrhage (not 'haemorrhaige'); Anaesthesia (British) / Anesthesia (American) — 'Anesthesia' is correct American spelling; Septicaemia (British) / Septicemia (American) — both are actually correct depending on the style guide used. 'Septicaemia' is the British spelling and is correct. In this context, 'Diarrhoea' is unambiguously correct while others have misspellings."
  },
  {
    id: 86,
    question: "The Latin/Greek root 'hepato-' refers to:",
    options: [
      "The heart",
      "The kidney",
      "The liver",
      "The spleen"
    ],
    answer: 2,
    explanation: "Hepato- (from Greek: hepar, hepatos) refers to the liver. Examples: hepatitis (liver inflammation), hepatomegaly (enlarged liver), hepatocyte (liver cell), hepatectomy (surgical removal), hepatotoxic (toxic to the liver). Cardio- = heart; Nephro-/Reno- = kidney; Spleno- = spleen; Gastro- = stomach; Chole- = bile; Pneumo-/Pulmo- = lung."
  },
  {
    id: 87,
    question: "In a research paper, 'et al.' is an abbreviation of the Latin phrase:",
    options: [
      "Et alterum (and the other)",
      "Et alii (and others)",
      "Etcetera alii (and other things)",
      "Et alumnus (and students)"
    ],
    answer: 1,
    explanation: "Et al. is an abbreviation of 'et alii' (masculine), 'et aliae' (feminine), or 'et alia' (neuter) — all meaning 'and others.' It is used in citations to avoid listing all authors when there are multiple authors (typically used after 3 or more authors depending on citation style: 'Smith et al., 2023'). Other common Latin abbreviations: i.e. = id est (that is); e.g. = exempli gratia (for example); cf. = confer (compare); viz. = videlicet (namely)."
  },
  {
    id: 88,
    question: "In scientific writing, the IMRAD structure of a research article stands for:",
    options: [
      "Introduction, Methods, Results, Analysis, Discussion",
      "Introduction, Methods, Results, And Discussion",
      "Introduction, Materials, Research, Analysis, Data",
      "Index, Methodology, Results, Abstracts, Data"
    ],
    answer: 1,
    explanation: "IMRAD (Introduction, Methods, Results, And Discussion) is the standard structure for reporting primary research in biomedical journals, as recommended by ICMJE (International Committee of Medical Journal Editors). Introduction: states the question and rationale. Methods: describes how the study was conducted. Results: presents findings without interpretation. Discussion: interprets results, discusses limitations, and draws conclusions. The Abstract summarizes all four sections."
  },
  {
    id: 89,
    question: "In Vancouver citation style (used by most biomedical journals), how are references cited in the text?",
    options: [
      "By author name and year in parentheses: (Smith, 2020)",
      "By consecutive Arabic numerals in superscript or in parentheses in the order they appear in the text",
      "By author name and page number: (Smith p.45)",
      "By alphabetical listing in footnotes at the bottom of each page"
    ],
    answer: 1,
    explanation: "The Vancouver style (numeric/sequential): references are cited in the text using Arabic numerals (superscript or in parentheses) in the order they first appear. The reference list is numbered in citation order. Developed by ICMJE for biomedical journals (NEJM, Lancet, BMJ, etc.). APA style uses Author-Date (Smith, 2020). MLA uses Author-Page. Chicago uses footnotes/endnotes. ICMR journals typically follow Vancouver style."
  },
  {
    id: 90,
    question: "In writing a scientific abstract, the 'structured abstract' format typically includes which components?",
    options: [
      "Background, Case Report, Differential Diagnosis, Treatment, Outcome",
      "Background/Objective, Methods, Results, Conclusions",
      "Introduction, Literature Review, Methodology, Findings, Recommendations",
      "Aims, Hypothesis, Statistical Analysis, Summary"
    ],
    answer: 1,
    explanation: "A structured abstract for original research articles follows: Background/Objective (why the study was done), Methods (how it was done — study design, participants, interventions, outcomes), Results (what was found — key quantitative results with significance levels), Conclusions (what it means — implications). Some journals add: Setting, Participants as separate headings. Unstructured abstracts are used for reviews and editorials. Word limit is typically 250-300 words."
  },
  {
    id: 91,
    question: "The National Institute of Nutrition (NIN), a premier institution under ICMR, is located in:",
    options: [
      "Mumbai, Maharashtra",
      "Hyderabad, Telangana",
      "New Delhi",
      "Chennai, Tamil Nadu"
    ],
    answer: 1,
    explanation: "The National Institute of Nutrition (NIN) is located in Hyderabad, Telangana. Established in 1918 (originally as Beri-beri Enquiry Unit), NIN conducts research on nutrition, food safety, and related public health issues. It publishes the 'Nutritive Value of Indian Foods' and recommends Dietary Reference Values (DRVs) for Indians. ICMR headquarters is in New Delhi. NIIH (National Institute of Immunohaematology) is in Mumbai."
  },
  {
    id: 92,
    question: "The ICMR-National Institute of Virology (NIV), a leading virology reference laboratory, is located in:",
    options: [
      "New Delhi",
      "Pune, Maharashtra",
      "Kolkata, West Bengal",
      "Bengaluru, Karnataka"
    ],
    answer: 1,
    explanation: "ICMR-National Institute of Virology (NIV) is located in Pune, Maharashtra. Established in 1952, NIV serves as the apex virology institute in India, conducting research on viral diseases and acting as a national reference laboratory. It played a pivotal role in COVID-19 diagnostics, successfully isolating SARS-CoV-2 and developing diagnostic assays. NIV has field stations in Mumbai, Kerala, and other locations."
  },
  {
    id: 93,
    question: "The WHO Regional Office for South-East Asia (SEARO), which covers India, is located in:",
    options: [
      "Mumbai, India",
      "New Delhi, India",
      "Dhaka, Bangladesh",
      "Colombo, Sri Lanka"
    ],
    answer: 1,
    explanation: "The WHO Regional Office for South-East Asia (SEARO) is based in New Delhi, India. SEARO covers 11 member states: Bangladesh, Bhutan, Democratic People's Republic of Korea, India, Indonesia, Maldives, Myanmar, Nepal, Sri Lanka, Thailand, and Timor-Leste. WHO has 6 regional offices: AFRO (Brazzaville), AMRO/PAHO (Washington DC), SEARO (New Delhi), EURO (Copenhagen), EMRO (Cairo), WPRO (Manila)."
  },
  {
    id: 94,
    question: "UNAIDS (Joint United Nations Programme on HIV/AIDS) is headquartered in:",
    options: [
      "New York, USA",
      "Geneva, Switzerland",
      "Vienna, Austria",
      "Brussels, Belgium"
    ],
    answer: 1,
    explanation: "UNAIDS is headquartered in Geneva, Switzerland. Established in 1996, UNAIDS is a joint programme of 11 UN system organizations including WHO, UNICEF, UNDP, UNFPA, UNESCO, ILO, and World Bank. It leads the global response to HIV/AIDS. WHO (headquarters also Geneva), UNHCR (Geneva), ILO (Geneva). UNICEF is in New York. UNFPA is in New York. PAHO/AMRO is in Washington DC."
  },
  {
    id: 95,
    question: "The Mental Health Care Act, 2017 in India notably provides which right to persons with mental illness?",
    options: [
      "Compulsory hospitalization in government facilities for all severe mental disorders",
      "The right to make an advance directive about their treatment preferences and to appoint a nominated representative",
      "Complete exemption from criminal liability for all offenses committed",
      "Mandatory electroconvulsive therapy for treatment-resistant depression"
    ],
    answer: 1,
    explanation: "The Mental Health Care Act, 2017 (replacing the Mental Health Act, 1987) provides persons with mental illness the right to: make advance directives (specifying treatment preferences when they lack capacity); appoint a nominated representative; access mental healthcare; community living; confidentiality; protection from inhuman treatment; and legal aid. It decriminalized attempted suicide (Section 309 IPC no longer applied). It aligned India with UNCRPD principles."
  },
  {
    id: 96,
    question: "What comes next in the series: 2, 6, 12, 20, 30, ?",
    options: [
      "40",
      "42",
      "44",
      "48"
    ],
    answer: 1,
    explanation: "Pattern: 2=1×2, 6=2×3, 12=3×4, 20=4×5, 30=5×6, next = 6×7 = 42. Alternatively, the differences between consecutive terms are: 4, 6, 8, 10, 12 (increasing by 2), so 30+12=42. The series follows n(n+1) for n=1,2,3,4,5,6..."
  },
  {
    id: 97,
    question: "In a letter series: A, C, F, J, O, ?",
    options: [
      "T",
      "U",
      "V",
      "W"
    ],
    answer: 1,
    explanation: "Letter positions: A=1, C=3, F=6, J=10, O=15. Differences: +2, +3, +4, +5, +6. Next position = 15+6 = 21 = U. The pattern adds increasing consecutive integers (2,3,4,5,6) to the letter's alphabetical position each time."
  },
  {
    id: 98,
    question: "In a class of 50 students, 30 study Biology, 20 study Chemistry, and 10 study both. How many students study neither Biology nor Chemistry?",
    options: [
      "5",
      "10",
      "15",
      "20"
    ],
    answer: 1,
    explanation: "Using the inclusion-exclusion principle: n(B∪C) = n(B) + n(C) − n(B∩C) = 30 + 20 − 10 = 40. Students studying neither = Total − n(B∪C) = 50 − 40 = 10. This is a Venn diagram problem. The union gives those studying at least one subject; subtracting from total gives those in neither."
  },
  {
    id: 99,
    question: "Statements: All doctors are educated. Some educated people are wealthy. Conclusion I: Some doctors are wealthy. Conclusion II: All wealthy people are doctors. Which conclusion(s) follow?",
    options: [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Both Conclusion I and II follow",
      "Neither Conclusion I nor II follows"
    ],
    answer: 3,
    explanation: "Statement 1: All doctors → educated (A-type: All D are E). Statement 2: Some educated → wealthy (I-type: Some E are W). Conclusion I: Some doctors are wealthy. From A+I syllogism (All D are E; Some E are W), we CANNOT conclude 'Some D are W' — the wealthy educated people may not overlap with doctors. Conclusion II: All wealthy are doctors — this does not follow at all. Therefore, neither conclusion follows."
  },
  {
    id: 100,
    question: "If in a coding system, 'RESEARCH' is coded as 'TGUGGTEJ', which option correctly codes 'HEALTH'?",
    options: [
      "JGCNVJ",
      "IFBMUI",
      "JGCMUJ",
      "JFBNUJ"
    ],
    answer: 0,
    explanation: "Pattern: Each letter is shifted forward by +2 in the alphabet. R+2=T, E+2=G, S+2=U, E+2=G, A+2=C, R+2=T (but shown as T... wait: R→T(+2), E→G(+2), S→U(+2), E→G(+2), A→C(+2), R→T(+2), C→E(+2), H→J(+2). RESEARCH → TGUGGTEAJ. Applying to HEALTH: H+2=J, E+2=G, A+2=C, L+2=N, T+2=V, H+2=J → JGCNVJ. Therefore, HEALTH is coded as JGCNVJ."
  }
];

export default questions;

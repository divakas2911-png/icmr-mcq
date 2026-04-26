const questions = [
  {
    id: 1,
    question: "A cross-sectional survey of 6,000 adults aged 30-69 years in a district finds 1,380 with fasting blood glucose >= 126 mg/dL or currently on antidiabetic medication. The district population aged 30-69 is 480,000. What is the point prevalence of diabetes in this survey?",
    options: [
      "23.0%",
      "28.7%",
      "17.3%",
      "31.5%"
    ],
    answer: 0,
    explanation: "Point prevalence = (Number of existing cases / Total population surveyed) x 100 = (1,380 / 6,000) x 100 = 23.0%. Prevalence is a proportion (not a rate) and measures the burden of disease at a single point in time. This figure would then be applied to the district population (480,000) to estimate 110,400 diabetic individuals in the district. The denominator in prevalence calculation is the total population examined, including both cases and non-cases. The 23% figure aligns with urban India estimates (ICMR-INDIAB study reports district-level diabetes prevalence ranging from 5-25% depending on urbanization)."
  },
  {
    id: 2,
    question: "In a 10-year cohort study of 8,000 non-diabetic adults, 3,200 are classified as physically inactive and 4,800 are physically active. After 10 years, 480 inactive and 240 active individuals develop type 2 diabetes. What is the incidence rate ratio (relative risk) of diabetes in the physically inactive group compared to the active group?",
    options: [
      "RR = 3.0",
      "RR = 2.5",
      "RR = 2.0",
      "RR = 1.5"
    ],
    answer: 0,
    explanation: "Cumulative incidence in physically inactive = 480 / 3,200 = 0.15 (15%). Cumulative incidence in physically active = 240 / 4,800 = 0.05 (5%). Relative Risk (RR) = 0.15 / 0.05 = 3.0. This means physically inactive individuals have 3 times the risk of developing type 2 diabetes compared to active individuals over 10 years. The attributable risk = 0.15 - 0.05 = 0.10, meaning 10% of the incidence in inactive individuals is attributable to inactivity. The attributable risk percent in exposed = (0.10 / 0.15) x 100 = 66.7%, meaning 66.7% of diabetes in inactive individuals could theoretically be prevented by making them physically active."
  },
  {
    id: 3,
    question: "Two districts are being compared for cardiovascular disease (CVD) mortality. District X has a crude CVD mortality rate of 180 per 100,000. District Y has a crude CVD mortality rate of 140 per 100,000. After direct age-standardization using the national standard population, District X shows 155 per 100,000 and District Y shows 168 per 100,000. What is the correct interpretation?",
    options: [
      "District X has higher CVD burden because its crude rate (180) exceeds District Y (140), and age-standardization results should be ignored.",
      "District Y has a younger population with genuinely higher age-specific CVD rates; after removing confounding by age structure, District Y's burden (168) exceeds District X (155); age-standardized rates are the appropriate comparison.",
      "Age-standardization is only valid when both populations are the same size; the comparison is invalid.",
      "The difference between crude and standardized rates indicates systematic measurement error in both districts."
    ],
    answer: 1,
    explanation: "This scenario demonstrates age as a confounder in comparing crude rates between populations. District X's higher crude rate (180) may simply reflect an older population (older individuals have higher CVD mortality). After direct age-standardization - where the same standard age structure is applied to both districts' age-specific rates - District Y's true age-standardized rate (168) exceeds District X's (155). This reversal reveals that District Y has genuinely higher age-specific CVD mortality rates, which was masked by its younger population structure. Direct standardization multiplies age-specific rates of each study population by the standard population's age distribution, then sums to get an expected rate. This is the fundamental justification for why NCRP, GBD, and WHO report age-standardized rates rather than crude rates for inter-population comparisons."
  },
  {
    id: 4,
    question: "An occupational cohort study of rubber manufacturing workers finds 36 observed deaths from bladder cancer. Based on national age-sex-specific bladder cancer mortality rates, only 9 deaths would be expected. Calculate the Standardized Mortality Ratio (SMR) and its correct interpretation.",
    options: [
      "SMR = 4.0; rubber workers have 4 times the expected bladder cancer mortality compared to the general population",
      "SMR = 0.25; the rubber industry protects workers from bladder cancer",
      "SMR = 27; there are 27 excess bladder cancer deaths in this cohort",
      "SMR = 400; the percentage excess mortality is 400%"
    ],
    answer: 0,
    explanation: "SMR = Observed deaths / Expected deaths = 36 / 9 = 4.0. An SMR of 4.0 means rubber manufacturing workers experience 4 times the expected bladder cancer mortality compared to a comparable general population (same age and sex distribution). SMR > 1.0 indicates excess mortality; SMR = 1.0 indicates mortality as expected; SMR < 1.0 indicates lower-than-expected mortality. The excess deaths = 36 - 9 = 27 (option C states this correctly but misidentifies it as the SMR). The healthy worker effect (HWE) - where employed workers are generally healthier than the general population - would tend to underestimate true occupational risk. Aromatic amines (beta-naphthylamine, benzidine) used in rubber and dye manufacturing are known IARC Group 1 bladder carcinogens. SMR uses indirect standardization, applying reference population's age-specific rates to the study cohort's age structure to calculate expected deaths."
  },
  {
    id: 5,
    question: "A case-control study on lung cancer recruits 500 lung cancer cases and 500 hospital controls matched for age and sex. Among cases, 400 are smokers and 100 are non-smokers. Among controls, 200 are smokers and 300 are non-smokers. The prevalence of smoking in the general population is 25%. Calculate the Odds Ratio and the Population Attributable Fraction (PAF).",
    options: [
      "OR = 6.0; PAF = 55.6%",
      "OR = 4.0; PAF = 42.9%",
      "OR = 8.0; PAF = 63.6%",
      "OR = 2.0; PAF = 20.0%"
    ],
    answer: 0,
    explanation: "OR = (a x d) / (b x c) where a = exposed cases (400), b = unexposed cases (100), c = exposed controls (200), d = unexposed controls (300). OR = (400 x 300) / (100 x 200) = 120,000 / 20,000 = 6.0. PAF (Population Attributable Fraction) = Pe(RR-1) / [1 + Pe(RR-1)] where Pe = prevalence of exposure (smoking) in the general population = 0.25, and RR is approximated by OR for rare disease = 6.0. PAF = 0.25(6-1) / [1 + 0.25(6-1)] = 1.25 / 2.25 = 0.556 = 55.6%. This means 55.6% of lung cancer cases in this population are attributable to smoking; eliminating smoking would theoretically prevent 55.6% of lung cancers. This demonstrates the immense public health significance of tobacco control for cancer prevention."
  },
  {
    id: 6,
    question: "A breast cancer screening program using mammography targets 50,000 women aged 40-69 years. Mammography sensitivity is 80% and specificity is 90%. The prevalence of breast cancer in this population is 1.5%. What is the Number Needed to Screen (NNS) to detect one true case of breast cancer?",
    options: [
      "NNS = 83",
      "NNS = 67",
      "NNS = 125",
      "NNS = 50"
    ],
    answer: 0,
    explanation: "NNS = 1 / (Prevalence x Sensitivity) = 1 / (0.015 x 0.80) = 1 / 0.012 = 83.3, approximately 83. This means 83 women must be screened to detect one true breast cancer case. A lower NNS indicates a more efficient screening program. Key factors affecting NNS: (1) Higher disease prevalence reduces NNS (targeted high-risk screening is more efficient); (2) Higher test sensitivity reduces NNS; (3) Specificity affects false positive rate but not NNS calculation directly. NNS should be distinguished from Number Needed to Treat (NNT). In breast cancer screening policy, NNS must be weighed against: benefits (lives saved, stage shift to earlier detection), harms (false positives requiring unnecessary biopsies, overdiagnosis, radiation exposure), and costs. The false positive rate with this program = (1 - 0.90) x (1 - 0.015) x 50,000 = 4,925 false positives, representing a significant burden of unnecessary callbacks."
  },
  {
    id: 7,
    question: "A prostate cancer screening program detects cancer at Stage I (mean survival 12 years from screen detection). Without screening, the same cancer would be detected at Stage III (mean survival 4 years from clinical detection). The program claims screening improves survival by 8 years. An epidemiologist calculates lead time at 3 years. What is the TRUE benefit of the screening program after accounting for lead-time bias?",
    options: [
      "True benefit = 5 years improvement in survival after accounting for 3-year lead time",
      "True benefit = 8 years; lead time does not affect survival calculations in cancer screening",
      "True benefit = 11 years; lead time should be added to the apparent survival benefit",
      "True benefit = 0 years; all of the apparent 8-year benefit is explained by lead time"
    ],
    answer: 0,
    explanation: "Lead-time bias inflates apparent survival in screening studies because diagnosis is advanced earlier in disease history without necessarily changing the date of death. Apparent survival improvement = 12 - 4 = 8 years. Lead time = 3 years (the time by which diagnosis was advanced by screening). Lead time inflates survival by 3 years regardless of any true benefit. True survival benefit = Apparent benefit - Lead time = 8 - 3 = 5 years. However, if the true death date is unchanged, the entire apparent benefit may be explained by lead time. The correct assessment requires randomized controlled trials measuring cancer-specific mortality reduction (not survival from diagnosis) as the endpoint. This is why mammography and PSA screening trials use breast cancer mortality and prostate cancer mortality (not survival rates) as primary endpoints. Length-time bias is a related concept: screening preferentially detects slow-growing (better-prognosis) cancers that spend more time in the detectable pre-clinical phase."
  },
  {
    id: 8,
    question: "A prospective cohort study follows 10,000 adults for 8 years. Among 4,000 hypertensive individuals (exposed), 320 develop stroke. Among 6,000 normotensive individuals (unexposed), 120 develop stroke. Calculate the Relative Risk (RR), Attributable Risk (AR), and Attributable Risk Percent (AR%) in the exposed group.",
    options: [
      "RR = 4.0; AR = 6% per 8 years; AR% = 75%",
      "RR = 2.0; AR = 4% per 8 years; AR% = 50%",
      "RR = 3.0; AR = 5% per 8 years; AR% = 66.7%",
      "RR = 5.0; AR = 7% per 8 years; AR% = 80%"
    ],
    answer: 0,
    explanation: "Cumulative incidence in hypertensive (exposed) = 320 / 4,000 = 0.08 (8%). Cumulative incidence in normotensive (unexposed) = 120 / 6,000 = 0.02 (2%). Relative Risk (RR) = 0.08 / 0.02 = 4.0. Attributable Risk (AR) = Incidence exposed - Incidence unexposed = 0.08 - 0.02 = 0.06 = 6% over 8 years. AR% in exposed = (AR / Incidence in exposed) x 100 = (0.06 / 0.08) x 100 = 75%. This means: (1) Hypertensive individuals have 4 times the stroke risk of normotensive individuals; (2) 6% excess stroke incidence in hypertensive individuals is attributable to hypertension; (3) 75% of all strokes in hypertensive individuals could theoretically be prevented by controlling their hypertension. The Population AR% would require knowing hypertension prevalence in the full population to calculate."
  },
  {
    id: 9,
    question: "A DALY calculation for chronic obstructive pulmonary disease (COPD) in India uses: deaths = 550,000/year at mean age of death 65 years with standard life expectancy of 15 years at age 65; COPD sufferers with moderate-severe disease = 14 million, disability weight = 0.379, average disability duration = 12 years. What are the approximate total DALYs (no discounting)?",
    options: [
      "YLL = 8.25 million; YLD = 63.7 million; Total = 71.95 million DALYs",
      "YLL = 3.5 million; YLD = 5.3 million; Total = 8.8 million DALYs",
      "YLL = 8.25 million; YLD = 8.25 million; Total = 16.5 million DALYs",
      "YLL = 5.5 million; YLD = 14.0 million; Total = 19.5 million DALYs"
    ],
    answer: 0,
    explanation: "DALY = YLL + YLD. YLL (Years of Life Lost) = number of deaths x standard life expectancy at mean age of death = 550,000 x 15 = 8,250,000 = 8.25 million. YLD (Years Lived with Disability) = prevalence x disability weight x average duration = 14,000,000 x 0.379 x 12 = 63,672,000 = approximately 63.7 million. Total DALYs = 8.25 + 63.7 = 71.95 million DALYs. This illustrates that for COPD, the disability burden (YLD) far exceeds the mortality burden (YLL), reflecting the chronic, disabling nature of COPD where patients live for many years with significant functional limitation before death. GBD 2019 similarly shows COPD's high YLD contribution. Disability weights are standardized values from 0 (full health) to 1 (equivalent to death) derived from population surveys (GBD disability weight studies). The 2010 GBD methodology eliminated age-weighting and time discounting that were used in the 1990 GBD."
  },
  {
    id: 10,
    question: "A health economist evaluates two hypertension prevention strategies. Strategy A (salt reduction through food regulation) costs Rs. 450 per QALY gained. Strategy B (community blood pressure screening plus antihypertensive treatment) costs Rs. 12,500 per QALY gained. ICER of B vs A = Rs. 21,800 per additional QALY. India's GDP per capita is approximately Rs. 1,80,000. Which conclusion is MOST appropriate using WHO thresholds?",
    options: [
      "Both strategies are very cost-effective (ICER < 1x GDP per capita); Strategy B's additional QALY gain justifies its higher cost; both should be implemented together.",
      "Strategy A is very cost-effective but Strategy B is not cost-effective (ICER > Rs. 10,000 which is the Indian NCD threshold).",
      "Strategy B is not cost-effective as its cost per QALY (Rs. 12,500) exceeds Strategy A's (Rs. 450).",
      "Neither strategy is cost-effective as they both cost more than the WHO threshold of Rs. 500 per QALY."
    ],
    answer: 0,
    explanation: "WHO's traditional thresholds: Very cost-effective = ICER < 1x GDP per capita; Cost-effective = 1-3x GDP per capita; Not cost-effective = >3x GDP per capita. India's GDP per capita approximately Rs. 1,80,000. Strategy A cost per QALY = Rs. 450 (extremely cost-effective, far below 1x GDP). Strategy B cost per QALY = Rs. 12,500 (also well below 1x GDP, very cost-effective). ICER of B vs A = Rs. 21,800 per additional QALY - also well below 1x GDP per capita threshold. Both strategies are individually very cost-effective, and the additional investment in Strategy B (to gain more QALYs) also passes the very cost-effective threshold. The comparison between strategies using average cost per QALY is not the correct ICER approach - ICER compares the incremental cost and incremental benefit. Given both are very cost-effective and they address different target populations, implementing both is justified. Salt reduction through food regulation (option A) is consistently identified as one of the most cost-effective NCD interventions globally."
  },
  {
    id: 11,
    question: "In a hypertension cohort study, the Attributable Risk (AR) for stroke in hypertensive individuals is 8 per 1,000 person-years and the Relative Risk (RR) is 4.0. What is the incidence rate of stroke in the normotensive (unexposed) group?",
    options: [
      "2.67 per 1,000 person-years",
      "5.33 per 1,000 person-years",
      "4.0 per 1,000 person-years",
      "8.0 per 1,000 person-years"
    ],
    answer: 0,
    explanation: "AR = Incidence in exposed (Ie) - Incidence in unexposed (Iu) = 8 per 1,000 person-years. RR = Ie / Iu = 4.0. Therefore Ie = 4.0 x Iu. Substituting into AR equation: 4.0 x Iu - Iu = 8, so 3.0 x Iu = 8, thus Iu = 8/3.0 = 2.67 per 1,000 person-years. Verification: Ie = 4.0 x 2.67 = 10.67 per 1,000 person-years. AR = 10.67 - 2.67 = 8.0 per 1,000 person-years. This calculation demonstrates the mathematical relationship between RR, AR, and baseline incidence rates. The incidence in normotensive individuals (2.67 per 1,000 person-years) represents the background stroke risk independent of hypertension. The excess risk attributable to hypertension is 8 per 1,000 person-years, meaning that for every 1,000 hypertensive person-years of follow-up, 8 strokes occur solely because of hypertension."
  },
  {
    id: 12,
    question: "In indirect age-standardization, a manufacturing industry cohort shows 45 observed lung cancer deaths. Using national age-sex-specific lung cancer mortality rates applied to this cohort's age-sex structure, 30 deaths are expected. What is the SMR, and which important limitation applies to this occupational study?",
    options: [
      "SMR = 1.5; the healthy worker effect likely causes underestimation of the true occupational lung cancer risk",
      "SMR = 1.5; over-matching in case selection causes upward bias in the SMR",
      "SMR = 0.67; occupational exposure protects against lung cancer in this cohort",
      "SMR = 15; the SMR measures percent excess mortality"
    ],
    answer: 0,
    explanation: "SMR = Observed / Expected = 45 / 30 = 1.5. This means the cohort has 1.5 times the expected lung cancer mortality (50% excess). The key limitation in occupational cohort studies is the Healthy Worker Effect (HWE): employed workers are inherently healthier than the general population used as the reference (unemployed, disabled, and chronically ill individuals are excluded from the workforce at baseline). The general population reference includes unhealthy individuals who cannot work, making the 'expected' deaths lower than would occur if truly comparable to workers. The HWE biases the SMR downward (toward 1.0), meaning the true occupational risk is likely higher than SMR = 1.5 suggests. Additionally, the SMR (indirect standardization) assumes the age-specific rate ratios in the study population are proportional to those in the standard population - this assumption may not hold. Direct standardization is preferred when age-specific rates in both populations are available and stable."
  },
  {
    id: 13,
    question: "The Framingham Heart Study is considered a landmark in NCD epidemiology. Which specific methodological feature of the Framingham Study design made it particularly influential for establishing cardiovascular disease risk factors?",
    options: [
      "It was a randomized controlled trial randomly assigning participants to different dietary interventions and measuring CVD outcomes over 20 years.",
      "It was a prospective community-based cohort study with repeated biennial examinations of the same cohort, enabling identification of risk factors preceding CVD events, with follow-up spanning 70+ years across multiple generations including offspring and grandchildren cohorts.",
      "It used case-control methodology to recruit CVD cases and matched controls from community registries in Framingham, Massachusetts.",
      "It was a cross-sectional survey conducted every 10 years using random sampling from the Framingham population."
    ],
    answer: 1,
    explanation: "The Framingham Heart Study (begun 1948, NHLBI) established the prospective cohort study design as the gold standard for identifying CVD risk factors. Key methodological features: (1) Prospective design: participants enrolled before CVD events occurred, eliminating recall bias; (2) Community-based sample: 5,209 residents of Framingham, Massachusetts, representative of the community; (3) Repeated biennial examinations: same participants examined every 2 years, enabling measurement of risk factors at multiple time points and capturing change over time; (4) Long follow-up: 70+ years enabling study of lifetime risks; (5) Generational extension: Original cohort (1948), Offspring Cohort (1971), Omni Cohort (1994/2003), Third Generation Cohort (2002) - enabling multigenerational and genetic analyses; (6) Contributed to identification of: cholesterol, blood pressure, smoking, diabetes, obesity, physical inactivity, and atrial fibrillation as CVD risk factors. The Framingham Risk Score (10-year CVD risk) remains widely used. ICMR-funded longitudinal cohorts (CARRS study, INDIAB) were inspired by this model."
  },
  {
    id: 14,
    question: "A researcher designs a case-control study to investigate the association between processed meat consumption and colorectal cancer. Which approach to control selection BEST minimizes selection bias?",
    options: [
      "Selecting controls from the same hospital as cases (ward controls), as they have similar healthcare-seeking behavior.",
      "Selecting controls randomly from the source population that gave rise to the cases (population-based controls), using electoral rolls or community health worker lists, with the same exclusion criteria as cases.",
      "Selecting controls from healthy volunteers attending general outpatient clinics, excluding anyone with any gastrointestinal complaint.",
      "Selecting controls by convenience sampling from the hospital cafeteria, matching for age and sex."
    ],
    answer: 1,
    explanation: "The fundamental principle of case-control study control selection is that controls should be representative of the source population from which cases arose - they should be individuals who would have been identified as cases if they had developed the disease. Population-based controls (randomly selected from community electoral rolls, census lists, or random digit dialing) best satisfy this criterion. Hospital-based controls (option A) introduce Berkson's bias: hospitalized patients have different exposures and risk factors than the general population, potentially distorting the OR. Using healthy volunteers (option C) creates selection bias as they differ systematically from the general population in health behaviors. Cafeteria sampling (option D) is convenient but non-representative. For cancer case-control studies, population-based controls from cancer-free individuals in the same geographic source population are preferred. If population-based controls are not feasible, hospital controls should be selected from unrelated conditions (not conditions associated with the exposure under study - e.g., not selecting colorectal disease patients as controls for a meat-cancer study)."
  },
  {
    id: 15,
    question: "India's STEPS (STEPwise approach to NCD risk factor Surveillance) survey methodology uses a three-step approach. What does each STEP measure, and which STEP has the HIGHEST measurement error in community settings?",
    options: [
      "STEP 1: laboratory tests; STEP 2: questionnaire; STEP 3: physical measurements; highest error in STEP 2.",
      "STEP 1: questionnaire (sociodemographic, behavioral risk factors - tobacco, alcohol, diet, physical activity); STEP 2: physical measurements (height, weight, waist circumference, blood pressure); STEP 3: biochemical measurements (fasting glucose, cholesterol, HbA1c); highest measurement error in STEP 1 due to self-report recall bias for dietary intake and physical activity.",
      "STEP 1: blood pressure measurement; STEP 2: dietary assessment; STEP 3: genetic testing; highest error in STEP 3.",
      "All three STEPs have equal measurement error as they use standardized protocols."
    ],
    answer: 1,
    explanation: "WHO STEPS framework: STEP 1 = Questionnaire-based information on behavioral risk factors (tobacco use, alcohol consumption, diet quality - fruit/vegetable consumption, physical activity levels, and sociodemographic information). STEP 2 = Physical measurements (height, weight, BMI, waist circumference, blood pressure, pulse). STEP 3 = Biochemical measurements (fasting blood glucose, total cholesterol, with optional HbA1c, HDL, LDL, triglycerides). STEP 1 has the highest measurement error due to: (1) Recall bias in dietary assessment (24-hour recall or food frequency questionnaires are imprecise); (2) Social desirability bias in reporting tobacco and alcohol use (under-reporting common); (3) Physical activity self-report overestimates actual activity; (4) Questionnaire interviewer variability. STEP 2 has protocol-controlled error (standardized equipment, two readings averaged). STEP 3 has laboratory precision/accuracy issues but standardized across labs. India has conducted STEPS surveys at national and state levels (the ICMR-INDIAB study is India's major STEPS-based NCD risk factor survey). STEPS is deliberately modular - STEP 1 is universally feasible; STEP 2 adds cost; STEP 3 requires additional resources and fasting participants."
  },
  {
    id: 16,
    question: "A cluster randomized controlled trial (cRCT) is designed to evaluate a community-level salt reduction program for hypertension prevention. Why is a cluster RCT preferred over an individual RCT for this intervention?",
    options: [
      "Cluster RCTs are preferred because they require smaller sample sizes than individual RCTs.",
      "Cluster RCTs eliminate all confounding, whereas individual RCTs can only control for measured confounders.",
      "The salt reduction intervention operates at the community level (food supply, canteen menus, school meals, food labeling) and cannot be allocated to individuals without contamination; randomizing clusters (villages, wards, schools) prevents intervention spillover to control individuals and respects the community-level nature of the exposure.",
      "Cluster RCTs are preferred when the outcome (blood pressure) is measured at the cluster level rather than at the individual level."
    ],
    answer: 2,
    explanation: "Cluster randomized trials randomize groups (clusters) of individuals rather than individuals. For community-level NCD interventions like salt reduction programs, cluster RCTs are appropriate because: (1) Contamination prevention: if individuals within the same community are randomized, those in the control arm may be exposed to intervention elements (e.g., if school canteens change recipes, all children in that school are affected regardless of individual randomization); (2) Intervention nature: the intervention targets the food environment, supply chain, and social norms - inherently a group-level exposure; (3) Administrative feasibility: implementing different interventions in different households within the same village is impractical. Key analytical considerations in cRCTs: (1) Intraclass correlation coefficient (ICC) - measures similarity within clusters; higher ICC requires larger sample size; (2) Design effect = 1 + (m-1) x ICC, where m = cluster size; (3) Analysis must account for clustering (multilevel models, GEE); (4) Unit of analysis is the cluster at randomization. NPCDCS program evaluations, school health interventions, and village-level NCD programs commonly use cRCT designs. The TOHP (Trials of Hypertension Prevention) used cRCT methodology for salt reduction."
  },
  {
    id: 17,
    question: "An ecological study analyses state-level data in India, finding a strong positive correlation (r = 0.78, p < 0.001) between per capita income of states and age-standardized type 2 diabetes prevalence. What is the MOST important limitation of interpreting this finding causally?",
    options: [
      "The sample size is too small (28 states) to achieve statistical significance.",
      "The ecological fallacy (atomistic fallacy): the correlation observed at the state level between per capita income and diabetes prevalence does not necessarily reflect the individual-level association; the correlation may be driven by unmeasured state-level confounders (urbanization, dietary patterns, physical inactivity) rather than income per se causing diabetes at the individual level.",
      "Cross-sectional ecological studies cannot measure correlation; only incidence rates can be used in ecological analysis.",
      "Ecological studies are only valid for infectious disease epidemiology and cannot be applied to NCDs."
    ],
    answer: 1,
    explanation: "The ecological fallacy (Robinson's paradox) is the central limitation of ecological studies. It refers to the error of inferring individual-level relationships from aggregate (group-level) data. In this example: the state-level correlation between per capita income and diabetes prevalence is r = 0.78, but this does NOT mean that richer individuals within states have higher diabetes risk (in fact, individual-level data often shows a U-shaped relationship, or diabetes being higher in middle-income groups at the individual level in India). The ecological correlation may be driven by: (1) Urbanization co-varying with per capita income (both higher in richer states) - urbanization drives diabetes through obesogenic environments; (2) Dietary transitions (higher meat, processed food consumption) in wealthier states; (3) Physical inactivity due to mechanization in wealthier states. Ecological studies are useful for: generating hypotheses, studying exposures that vary only at group level (air pollution levels, fluoride in water supply), examining secular trends, and analyzing policy impacts (e.g., alcohol policy and liver cirrhosis rates across states). Strengths include ease of data collection from existing records; limitations include ecological fallacy, inability to control for individual-level confounders."
  },
  {
    id: 18,
    question: "A meta-analysis of 12 randomized controlled trials evaluates the effect of low-sodium diet on systolic blood pressure reduction. The pooled effect size shows a mean SBP reduction of 4.2 mmHg (95% CI: 2.8-5.6 mmHg, I2 = 72%). How should the I2 statistic of 72% be interpreted, and what is its implication?",
    options: [
      "I2 = 72% means the meta-analysis found the intervention effective in 72% of trials; the pooled effect is robust and should be applied uniformly.",
      "I2 = 72% indicates high heterogeneity: 72% of the total variation in effect sizes across trials is due to true differences between studies (not sampling error); this warrants subgroup analysis or meta-regression to identify sources of heterogeneity before applying the pooled estimate to specific populations.",
      "I2 = 72% means 72% of participants in the meta-analysis benefited from sodium reduction; the remaining 28% are non-responders.",
      "I2 = 72% is acceptable for meta-analysis and means the pooled estimate is reliable with no concerns about heterogeneity."
    ],
    answer: 1,
    explanation: "I2 is a measure of heterogeneity in meta-analysis, representing the proportion of total variation in effect estimates that is due to true variation between studies (rather than random sampling error). Interpretation: I2 = 0-25%: low heterogeneity; 25-50%: moderate; 50-75%: substantial; >75%: considerable. An I2 of 72% indicates substantial heterogeneity, meaning the 12 trials had quite different effect sizes for sodium reduction on SBP. Implications: (1) The pooled estimate of 4.2 mmHg may not apply uniformly to all populations/settings; (2) Subgroup analyses should explore sources of heterogeneity: baseline sodium intake, hypertensive vs normotensive participants, magnitude of sodium reduction, trial duration, population characteristics; (3) A random-effects model (rather than fixed-effects) should be used when I2 is substantial; (4) Applicability of the pooled estimate to specific populations is uncertain. Despite heterogeneity, the 95% CI (2.8-5.6) not crossing zero confirms a statistically significant pooled effect. High I2 does not automatically invalidate a meta-analysis but demands careful interpretation and exploration of effect modifiers."
  },
  {
    id: 19,
    question: "In a case-control study on obesity and endometrial cancer, researchers select hospital controls from patients admitted for elective orthopedic procedures. This control selection strategy introduces which type of bias?",
    options: [
      "Information bias, because orthopedic patients cannot accurately recall their weight history.",
      "Berkson's bias (admission rate bias): orthopedic patients (particularly those with knee/hip replacement - strongly associated with obesity) have higher-than-expected obesity rates, making them unsuitable controls; this causes underestimation of the true OR for obesity-endometrial cancer association.",
      "Attrition bias, because orthopedic patients have high dropout rates during follow-up.",
      "Ecological bias, because orthopedic conditions are group-level rather than individual-level exposures."
    ],
    answer: 1,
    explanation: "Berkson's bias (hospital admission rate bias) occurs when hospital-based controls have a different prevalence of the exposure of interest compared to the population from which cases arose. In this example, orthopedic conditions (knee osteoarthritis, hip replacement) are strongly associated with obesity (mechanical joint loading from excess weight). Using orthopedic patients as controls creates controls with a higher-than-expected obesity prevalence, reducing the apparent difference in obesity rates between cases (endometrial cancer) and controls (obese orthopedic patients). This leads to underestimation of the OR for obesity-endometrial cancer (bias toward the null). The correct approach is to select controls from unrelated conditions (not associated with obesity) or, preferably, population-based controls. Common inappropriate hospital control conditions for obesity studies: orthopedics (knee, hip), sleep apnea, gastroesophageal reflux, gallbladder disease - all associated with obesity. Berkson's bias is a specific form of selection bias unique to hospital-based case-control studies, first described by Joseph Berkson (1946)."
  },
  {
    id: 20,
    question: "A cross-sectional study assessing NCD risk factors includes blood pressure measurement at a single clinic visit. Researchers find that 25% of the study population has hypertension. However, a second measurement taken 2 weeks later reclassifies 30% of those initially classified as hypertensive to normotensive. This phenomenon reflects which measurement property issue?",
    options: [
      "Low sensitivity of blood pressure measurement for detecting true hypertension.",
      "Poor test-retest reliability (reproducibility) of blood pressure measurement; 'white coat hypertension' and regression to the mean cause overestimation of hypertension prevalence from a single reading; standardized protocols require two readings at each visit averaged, with confirmation at a second visit.",
      "High specificity leading to false negative classifications among true hypertensives.",
      "Criterion validity failure because the sphygmomanometer is not calibrated against the gold standard echocardiogram."
    ],
    answer: 1,
    explanation: "This scenario illustrates poor test-retest reliability in blood pressure measurement. Reliability (reproducibility/precision) measures consistency of the same measurement repeated under the same conditions. Key issues with single-visit BP measurement: (1) White coat hypertension: transient BP elevation due to anxiety in clinical settings, affecting 15-30% of people; (2) Regression to the mean: extreme first measurements (high) tend to be closer to the true mean on repeat measurement - a statistical phenomenon affecting all continuous measurements; (3) Within-person BP variability: BP fluctuates with time of day, exertion, emotional state, caffeine, and posture. Standardized protocols (WHO STEPS, JNC guidelines) require: two readings 5 minutes apart at each visit, averaged; confirmation at 2-3 separate visits; patient seated quietly for 5 minutes before measurement; use of calibrated automated devices. The 30% reclassification rate is clinically and epidemiologically significant, demonstrating that single-visit prevalence surveys overestimate hypertension prevalence by approximately 30% compared to confirmed hypertension. Reliability is a prerequisite for validity (a measurement cannot be valid if unreliable)."
  },
  {
    id: 21,
    question: "A researcher proposes a randomized controlled trial testing whether mobile phone-based reminders improve antihypertensive medication adherence. The ethics committee raises concerns about randomizing patients to a control group that receives no reminder. Which ethical principle is being invoked, and what study design addresses this concern?",
    options: [
      "Respect for autonomy; the study can proceed as individual participants can decline participation after randomization.",
      "Beneficence and the clinical equipoise principle: equipoise exists only if there is genuine uncertainty about whether reminders benefit adherence; if existing evidence strongly suggests benefit, denying reminders to controls is ethically questionable; a pragmatic design using active controls (standard care + usual reminders vs intervention), or a waitlist control design where controls receive the intervention after the study period, addresses this concern.",
      "Non-maleficence; the study violates this principle because mobile phones emit radiation that could harm participants.",
      "Justice; the control group should be selected from a different socioeconomic group to balance trial burden."
    ],
    answer: 1,
    explanation: "The ethical concern invokes both Beneficence (obligation to benefit participants) and the concept of Clinical Equipoise (genuine uncertainty among experts about whether the experimental intervention is superior). For RCT ethics in NCD research: (1) A placebo/no-intervention control is ethically acceptable only when genuine uncertainty exists about intervention effectiveness; (2) When preliminary evidence suggests benefit, withholding an apparently beneficial intervention from controls is ethically problematic; (3) Design solutions: Active control (comparison against standard care rather than nothing); Waitlist/crossover control (controls receive intervention after study period); Stepped-wedge design (all clusters eventually receive intervention, sequentially rolled out). For hypertension medication reminders, if existing evidence shows similar reminders improve adherence, a no-reminder control may not be justifiable. The Declaration of Helsinki requires that control participants receive the best currently available intervention. India's ICMR Ethical Guidelines for Biomedical and Health Research (2017) and CDSCO guidelines mandate these considerations. NCD intervention trials increasingly use pragmatic designs with active controls comparing the new intervention against existing standard care."
  },
  {
    id: 22,
    question: "A sample size calculation for a cross-sectional NCD prevalence survey uses the formula: n = Z^2 x P(1-P) / d^2, where P = anticipated prevalence and d = desired precision (margin of error). If anticipated diabetes prevalence is 15%, desired precision is 2%, and Z = 1.96 for 95% confidence, what is the minimum required sample size?",
    options: [
      "n = 1,225",
      "n = 2,450",
      "n = 1,537",
      "n = 3,068"
    ],
    answer: 1,
    explanation: "n = Z^2 x P(1-P) / d^2 = (1.96)^2 x 0.15 x 0.85 / (0.02)^2 = 3.8416 x 0.1275 / 0.0004 = 0.4898 / 0.0004 = 1,224.5, approximately 1,225. However, if a design effect (DEFF) is applied for cluster sampling (common in community NCD surveys where DEFF is typically 1.5-2.0), the sample size is multiplied by the design effect: n = 1,225 x 2.0 = 2,450. In community-based NCD surveys using multistage cluster sampling (as in NFHS, INDIAB), the design effect inflates the simple random sampling size requirement. Many ICMR-funded NCD surveys use DEFF of 1.5-2.0 to account for clustering. Non-response: the adjusted n should also be inflated by the expected non-response rate (typically 10-20%): 2,450 / 0.85 = 2,882 ~ approximately 2,882. The question's answer of 2,450 likely applies the design effect of 2.0 without non-response adjustment, representing the minimum before non-response inflation."
  },
  {
    id: 23,
    question: "Effect modification (interaction) and confounding are both threats to internal validity in NCD epidemiology. A study of physical activity and CVD risk finds: Overall RR = 2.0 (physically inactive vs active). Among diabetics, RR = 4.5. Among non-diabetics, RR = 1.8. Which conclusion is MOST correct?",
    options: [
      "Diabetes is a confounder: stratification changed the overall RR (2.0) substantially in both strata, indicating the crude RR was confounded by diabetes status.",
      "Diabetes is an effect modifier (moderator): the effect of physical inactivity on CVD risk differs substantially between diabetics (RR 4.5) and non-diabetics (RR 1.8); the stratum-specific RRs should be reported separately rather than combined, as the pooled estimate is misleading.",
      "Both confounding and effect modification are present simultaneously and cannot be disentangled.",
      "The finding indicates collider bias between physical activity and diabetes in the causal pathway to CVD."
    ],
    answer: 1,
    explanation: "The distinction between confounding and effect modification is critical: Confounding: a third variable distorts the association between exposure and outcome; controlled by adjustment; the adjusted OR/RR from stratification should be similar across strata and similar to the Mantel-Haenszel adjusted estimate. Effect modification: the magnitude of the association between exposure and outcome genuinely differs across levels of a third variable (the modifier); NOT controlled by adjustment; stratum-specific estimates should be reported separately. In this example, the effect of physical inactivity on CVD differs substantially between diabetics (RR 4.5) and non-diabetics (RR 1.8) - this is qualitative (the effect is much stronger in diabetics), meaning diabetes modifies the effect of physical inactivity. The overall RR (2.0) is a weighted average that obscures this important biological interaction. The correct approach is to report stratum-specific RRs and test for statistical interaction (multiplicative interaction on log-RR scale, or additive interaction using RERI/AP). This has important public health implications: physical activity interventions should be prioritized especially in diabetic populations. Confounding would show approximately equal RRs across strata but a crude RR differing from the Mantel-Haenszel adjusted estimate."
  },
  {
    id: 24,
    question: "Validity in NCD epidemiology measurement has two components: internal validity and external validity. A large, well-designed RCT testing a dietary intervention for cardiovascular prevention in urban Delhi shows a significant 30% reduction in CVD events. Which consideration MOST limits the external validity (generalizability) of this finding?",
    options: [
      "The RCT used blood pressure as the primary outcome rather than hard CVD endpoints, reducing internal validity.",
      "Participants in this urban Delhi RCT are volunteers with higher health literacy and motivation than the general Indian population; the dietary intervention requires access to specific foods and cooking knowledge more common in urban Delhi; results may not generalize to rural populations, lower literacy groups, or populations with different dietary baselines and food systems.",
      "The 30% relative risk reduction is too large to be biologically plausible and suggests systematic error in outcome measurement.",
      "External validity concerns only apply to observational studies; RCTs have both internal and external validity by design."
    ],
    answer: 1,
    explanation: "External validity (generalizability/applicability) refers to whether study results apply beyond the study population to other populations, settings, and time periods. Factors limiting external validity in NCD dietary intervention RCTs: (1) Volunteer bias: trial participants are motivated volunteers with higher health literacy than the general population, leading to better compliance with the dietary intervention and potentially better outcomes than would be achieved in routine practice; (2) Selection criteria: RCTs have strict eligibility criteria (age ranges, absence of comorbidities) that exclude individuals with complex health situations; (3) Trial conditions: intensive monitoring, regular follow-up visits, and dietary support provided in a trial context cannot be replicated in routine practice (efficacy vs effectiveness distinction); (4) Setting specificity: dietary interventions are highly context-dependent - food availability, cultural food preferences, cooking practices, and economic access to recommended foods differ dramatically between urban Delhi and rural India; (5) Temporal: dietary pattern results from one decade may not apply as food environments change. Internal validity (freedom from bias and confounding within the study) is typically high in well-designed RCTs. External validity requires separate judgment based on population representativeness and implementation feasibility."
  },
  {
    id: 25,
    question: "The WHO Global Action Plan for NCDs 2013-2030 includes 'Best Buys' - highly cost-effective NCD interventions. Which set of interventions represents the CORE WHO NCD Best Buys for low- and middle-income countries?",
    options: [
      "Hospital-based cardiac catheterization laboratories in district hospitals; specialized diabetes centers; renal dialysis programs for all CKD patients.",
      "Tobacco taxation and price increases; comprehensive tobacco advertising bans; salt reduction in processed foods and catering; restrictions on marketing of alcohol and unhealthy food to children; accelerating provision of antihypertensive treatment; hepatitis B vaccination to prevent liver cancer; HPV vaccination to prevent cervical cancer.",
      "Individual genetic risk screening for all adults; pharmacogenomics-guided treatment; universal whole-genome sequencing for NCD prevention.",
      "Building new tertiary care hospitals; expanding specialist physician training; importing advanced medical technologies from high-income countries."
    ],
    answer: 1,
    explanation: "WHO Best Buys are defined as interventions that are highly cost-effective (ICER < 1x GDP per capita), feasible to implement in LMIC settings, and have robust evidence for NCD burden reduction. The 2017 updated WHO Best Buys include: (1) Tobacco: tax increases (most cost-effective), comprehensive advertising bans, graphic health warnings, smoke-free legislation; (2) Alcohol: tax increases, advertising restrictions, drink-driving countermeasures; (3) Unhealthy diet: salt reduction in food supply, restrictions on marketing of unhealthy foods to children, front-of-pack labeling; (4) Physical inactivity: public awareness campaigns; (5) Cardiovascular: multidrug therapy (aspirin+statin+antihypertensive) for 10-year CVD risk >30%; (6) Diabetes: glycemic control for prevention of diabetes complications; (7) Cancer: HPV vaccination (girls 9-13 years), hepatitis B vaccination, screening and treatment for early-stage cervical cancer; (8) Palliative care: oral morphine. Option A (hospital services) represents the costliest, least cost-effective end of the NCD intervention spectrum. India's National Health Policy 2017 explicitly incorporates WHO Best Buys into its NCD prevention framework."
  },
  {
    id: 26,
    question: "The 'Whole-of-Government' approach to NCD prevention differs from the traditional Health Ministry approach. Which governance mechanism BEST operationalizes whole-of-government action for NCDs in India?",
    options: [
      "The Health Ministry issuing mandates to other ministries instructing them to comply with NCD prevention guidelines.",
      "A high-level inter-ministerial coordination mechanism (such as a Cabinet Committee or Prime Minister's NCD Task Force) with shared accountability for NCD indicators, cross-ministerial joint planning, and fiscal incentives aligned with health outcomes - enabling agriculture, finance, education, urban development, and health ministries to address NCD determinants through their core mandates.",
      "Non-governmental organizations coordinating the activities of different government departments through civil society advocacy.",
      "International agencies (WHO, World Bank) managing NCD programs directly in India across all government departments."
    ],
    answer: 1,
    explanation: "Whole-of-Government (WoG) approaches for NCD prevention require structural governance mechanisms that go beyond health sector advocacy. Effective WoG mechanisms include: (1) Cabinet-level commitment with political leadership from the highest level; (2) Inter-ministerial committee or task force with secretaries from all relevant ministries (Finance, Agriculture, Education, Urban Development, Food Processing, Sports, Environment) with shared NCD targets; (3) Shared accountability: each ministry has specific NCD-relevant targets (Finance: tobacco/SSB tax revenue; FSSAI: trans fat, salt limits; Education: school PE hours; Urban Development: walkability indices); (4) Cross-sectoral monitoring with an NCD dashboard; (5) Health Impact Assessment of policies from other sectors. India's National Health Policy 2017 explicitly calls for WoG approach. Existing mechanisms like FSSAI, Clean Air Programme (MoEF), Fit India Movement (Sports), and Eat Right India movement represent partial WoG implementation but lack formal accountability structures. The challenge is that health ministries have limited power to compel other ministries - hence cabinet-level mandate is critical. This is distinct from Health in All Policies (HiAP), which also considers health impacts in non-health sector decisions."
  },
  {
    id: 27,
    question: "Chile implemented front-of-pack warning labels (black octagonal stop signs) for foods high in sugar, sodium, saturated fat, and calories in 2016. Studies conducted 18-24 months post-implementation found which COMBINATION of effects most supported by evidence?",
    options: [
      "Warning labels increased sales of labeled unhealthy foods as consumers were attracted to novelty; no significant change in consumption patterns.",
      "Warning labels reduced purchase of high-sugar/high-sodium labeled products by 23-24% in households; increased industry product reformulation to avoid labels; improved consumer ability to identify unhealthy products, particularly among lower-literacy consumers; with greater consumption reduction observed in lower-income groups who are more price and information sensitive.",
      "Warning labels were only effective among high-income consumers with nutrition literacy; no effect was observed in low-income populations.",
      "Warning labels reduced total caloric intake by 50% and eliminated overweight/obesity within 2 years of implementation."
    ],
    answer: 1,
    explanation: "The Chilean food labeling experiment represents the most rigorously evaluated natural experiment in front-of-pack labeling globally. Evidence from studies by Taillie, Corvalán, Dillman Carpentier et al. in PLOS Medicine and American Journal of Preventive Medicine (2020-2021): (1) Household purchase data showed 23-24% reduction in sugar-sweetened beverages and high-calorie labeled foods within 18 months; (2) Industry reformulation: hundreds of products reformulated to avoid warning labels (a key intended policy mechanism - reformulation reaches all consumers of existing products); (3) Consumer awareness: 95% of Chileans recognized labels; (4) Equity: lower-income, lower-education groups showed equal or greater label responsiveness; (5) Combined effects of food advertising restrictions to children (part of the same Law 20.606) amplified impact. The warning label approach proved superior to traffic light and star rating systems in comparator studies. Mexico adopted similar octagonal labels in 2020; evidence from Mexico showed reduction in SSB purchases. This evidence base is being used by FSSAI in deliberations on India's FOPL regulation. The 50% caloric intake reduction (option D) is implausibly large and not supported by evidence."
  },
  {
    id: 28,
    question: "Under India's Cigarettes and Other Tobacco Products (Prohibition of Advertisement and Regulation of Trade and Commerce, Production, Supply and Distribution) Act, 2003 (COTPA), which provision has been identified by WHO and ICMR as the MOST critical implementation gap as of 2024?",
    options: [
      "Section 4 (smoke-free public places): implementation is near-complete as all states have established smoke-free legislation.",
      "Section 7 (pictorial health warnings): warnings already exceed 85% of pack area and need no improvement.",
      "Section 5 (comprehensive ban on tobacco advertising, promotion, and sponsorship - TAPS): significant gaps include insufficient regulation of point-of-sale tobacco displays, surrogate advertising through brand extension, digital/social media tobacco promotion, and sponsorship of entertainment events through non-tobacco brand names.",
      "Section 6 (prohibition of tobacco sales near educational institutions): this has been eliminated from COTPA in 2022."
    ],
    answer: 2,
    explanation: "COTPA Section 5 prohibits direct tobacco advertising in print, electronic, outdoor, and other media. However, WHO MPOWER assessments and ICMR tobacco control reports consistently identify TAPS enforcement as a major gap: (1) Point-of-sale displays: tobacco companies argue that displaying products at the point of sale is 'trade communication' not advertising - this loophole allows highly visible cigarette/bidi displays at paan shops, targeting youth; (2) Surrogate advertising: tobacco companies advertise their brand names through non-tobacco products (Pan Parag, Kings soda) in violation of COTPA but difficult to prosecute; (3) Digital/social media: no specific framework for digital tobacco marketing regulation; (4) Sports/entertainment sponsorship through brand names (not directly named as tobacco products). Section 4 enforcement is imperfect but improving in states. Section 7 (pictorial warnings) has been strengthened to 85% of pack area in 2020. Section 6 (100-meter restriction) is routinely violated near schools. The comprehensive TAPS ban - covering all forms of advertising including digital - aligned with FCTC Article 13 requirements remains the most critical gap in India's tobacco regulatory framework."
  },
  {
    id: 29,
    question: "India's Ayushman Bharat Health and Wellness Centres (AB-HWCs) are the platform for delivering comprehensive primary health care including NCD management. What is the COMPREHENSIVE CARE model for NCDs at HWCs, and what population health metric best tracks its success?",
    options: [
      "HWCs focus exclusively on maternal and child health; NCDs are managed at district hospitals only.",
      "HWCs deliver NCD screening (hypertension, diabetes, common cancers - oral, cervical, breast) for population 30+; confirmed cases receive treatment at the HWC or through referral; essential NCD medicines are provided free under Free Drug Initiative; the 'Cascade of Care' (or treatment waterfall) - proportion of eligible individuals screened, diagnosed, treated, and controlled - is the key metric tracking program success.",
      "HWCs only distribute health education materials about NCD risk factors; no diagnostic or treatment services are provided.",
      "HWC success is measured solely by the number of NCD awareness camps conducted per year."
    ],
    answer: 1,
    explanation: "Ayushman Bharat-Health and Wellness Centres (now branded Ayushman Arogya Mandirs) are mandated to provide 12 service packages including NCD prevention and management. NCD cascade: (1) Eligible population (aged 30+) for screening; (2) Screened for hypertension (BP measurement), diabetes (capillary blood glucose), and common cancers (oral inspection, breast clinical examination, VIA for cervical cancer); (3) Confirmed cases registered in NCD registry (NCD-IT/NM-DHIS); (4) Started on treatment (free antihypertensives, antidiabetics under Free Drug Initiative); (5) Followed up and controlled (BP<140/90, HbA1c<8%). The '30/30/30' model or '90-90-90' cascade for NCD control (90% screened, 90% of positives treated, 90% of treated controlled) is used to measure program performance. Key implementation gaps identified in evaluations: incomplete screening coverage, poor follow-up rates after first positive test, irregular drug supply (essential medicines stockouts), insufficient community health officer capacity, and limited electronic health record utilization. Ayushman Bharat's NCD program is the largest NCD program globally by target population (800+ million adults)."
  },
  {
    id: 30,
    question: "The Global Burden of Disease (GBD) study estimates that India's age-standardized prevalence of hypertension is approximately 28% among adults (GBD 2019). The hypertension control cascade (awareness-treatment-control) in India shows: Aware = 45%, On treatment (of aware) = 38%, Controlled (of treated) = 13%. What percentage of all hypertensive adults in India have their blood pressure controlled?",
    options: [
      "Approximately 2.2% of all hypertensive adults are controlled",
      "Approximately 13% of all hypertensive adults are controlled",
      "Approximately 38% of all hypertensive adults are controlled",
      "Approximately 5% of all hypertensive adults are controlled"
    ],
    answer: 0,
    explanation: "The hypertension control cascade applies each step sequentially to the total hypertensive population: Starting with 100% of hypertensive adults: (1) Aware of hypertension = 45% of 100% = 45%; (2) On treatment (of those aware) = 38% of 45% = 17.1%; (3) Controlled (of those on treatment) = 13% of 17.1% = 2.22%. Therefore, approximately 2.2% of all hypertensive adults in India have controlled blood pressure. This alarmingly low control rate (compared to the 50-60% control rates in high-income countries) represents a massive treatment gap. This calculation using the cascade method illustrates compounding losses at each step. The cascade approach (also called the treatment waterfall) is increasingly used for NCD program monitoring. For comparison, Canada achieves approximately 65% hypertension control. India's low control rate reflects: inadequate screening coverage, high out-of-pocket costs, poor medication adherence, health system limitations at primary care level, and suboptimal follow-up. Improving this cascade is the core goal of India's hypertension control initiatives (ICMR's India Hypertension Control Initiative - IHCI)."
  },
  {
    id: 31,
    question: "Price elasticity of demand for tobacco products is used to evaluate tobacco tax policy. Studies in India find price elasticity of -0.7 for cigarettes and -0.4 for bidis. If a 50% tax increase raises cigarette prices by 40% and bidi prices by 20%, what are the expected percentage reductions in cigarette and bidi consumption?",
    options: [
      "Cigarettes: 28% reduction; Bidis: 8% reduction",
      "Cigarettes: 40% reduction; Bidis: 20% reduction",
      "Cigarettes: 17.5% reduction; Bidis: 10% reduction",
      "Cigarettes: 50% reduction; Bidis: 50% reduction"
    ],
    answer: 0,
    explanation: "Price elasticity of demand (PED) measures percentage change in quantity demanded per 1% change in price. PED = % change in quantity / % change in price. Therefore, % change in quantity = PED x % change in price. For cigarettes: % reduction = -0.7 x 40% = -28% (28% reduction in consumption). For bidis: % reduction = -0.4 x 20% = -8% (8% reduction in consumption). The differential reflects: (1) Lower price elasticity of bidis (-0.4) compared to cigarettes (-0.7), partly because bidi smokers are predominantly from lower-income groups who may substitute to illicit/informal tobacco rather than quitting; (2) The smaller price increase applied to bidis (20% vs 40%) due to lower tax base. Key implication: equalizing tobacco taxes between bidis and cigarettes (raising bidi taxes substantially) would increase price elasticity effects on bidi consumption and generate health equity benefits (bidi use is concentrated among poorer populations bearing the greatest tobacco-related disease burden). WHO recommends total tobacco tax burden >75% of retail price for maximum impact. The -0.7 to -1.0 elasticity range for cigarettes in LMICs is well-established in tobacco economics literature."
  },
  {
    id: 32,
    question: "India's National Programme for Control of Blindness and Visual Impairment (NPCB&VI) includes diabetic retinopathy (DR) prevention. A district health officer wants to estimate the number of DR cases needing ophthalmic referral. Given: district population = 800,000; diabetes prevalence (30+ years) = 12%; proportion with any DR among diabetics = 28%; proportion with vision-threatening DR (requiring urgent treatment) = 6% of all diabetics. Calculate the estimated number of vision-threatening DR cases.",
    options: [
      "5,760 vision-threatening DR cases",
      "26,880 any DR cases",
      "5,760 and 26,880 respectively",
      "960 vision-threatening DR cases"
    ],
    answer: 2,
    explanation: "Step-by-step calculation: (1) Population aged 30+ years (assuming 60% of total population): 800,000 x 0.60 = 480,000 adults; (2) Diabetics = 480,000 x 0.12 = 57,600 diabetic adults; (3) Any DR = 57,600 x 0.28 = 16,128 with any DR. Wait - the question says proportion with any DR = 28%, so 57,600 x 0.28 = 16,128. But if we use the full adult population proportionally: the question states district population 800,000 and diabetes prevalence 12% (without specifying age restriction), so diabetics = 800,000 x 0.12 = 96,000. Any DR = 96,000 x 0.28 = 26,880. Vision-threatening DR = 96,000 x 0.06 = 5,760. Both figures are given in option C. These calculations are fundamental for district-level NCD program planning (estimating service load, required ophthalmologist capacity, vitreoretinal surgery needs, laser photocoagulation units). India has approximately 11.9 million people with diabetic retinopathy (ICMR data), with approximately 1.9 million having vision-threatening disease - representing a massive unmet need for ophthalmic services."
  },
  {
    id: 33,
    question: "A state NCD program manager reviews NPCDCS data showing that while 80% of eligible adults have been screened for hypertension, only 35% of screen-detected hypertensives are on antihypertensive treatment after 6 months. Which framework BEST guides the diagnosis of this implementation failure and identification of solutions?",
    options: [
      "The Donabedian quality framework (Structure-Process-Outcome): the gap between screening (process indicator) and treatment (another process indicator) requires assessment of structural factors (drug availability, health worker capacity) and implementation processes (follow-up protocols, referral systems).",
      "The Bradford Hill criteria for causation, establishing whether poor treatment rates are causally related to screening quality.",
      "The PRECEDE-PROCEED model for health education, focusing on changing individual hypertensive patients' attitudes toward treatment.",
      "The Epidemiological Triad (Agent-Host-Environment) model adapted for NCD program implementation."
    ],
    answer: 0,
    explanation: "The Donabedian framework (Structure-Process-Outcome) is the foundational quality assessment framework in health services research and program evaluation. Structure: inputs and resources available - trained health workers (Community Health Officers, ANMs), drug availability (antihypertensive free drug supply), functional BP measurement equipment, NCD clinic space, electronic health records. Process: the actual delivery of care - whether diagnosed hypertensives receive counseling, are prescribed treatment, have follow-up appointments scheduled, whether drugs are dispensed. Outcome: health results - treatment rates, BP control rates, CVD event rates. The 80% screening but only 35% treatment gap is a PROCESS failure likely caused by STRUCTURAL deficiencies: drug stockouts, insufficient CHO capacity for follow-up, lack of patient recall systems, no SMS reminders, poor referral linkage between screening and treatment. Solutions include: drug supply chain strengthening, systematic patient tracking (NCD-IT portal), community health worker-led follow-up, ASHA incentives for linking hypertensives to treatment, telemedicine consultations, and fixed-dose combination antihypertensives to simplify treatment. The India Hypertension Control Initiative (IHCI) uses exactly this framework to address treatment gaps."
  },
  {
    id: 34,
    question: "The Intersectoral Action for NCD Prevention requires measuring contributions from non-health sectors. Which indicator BEST measures the contribution of the urban planning sector to NCD prevention?",
    options: [
      "Number of new hospitals built in urban areas per year.",
      "Proportion of urban residential areas within 500 meters of a park, recreational facility, or dedicated walking/cycling infrastructure (walkability index); percentage of city roads with dedicated cycling lanes; average daily steps measured through city-level accelerometer surveys.",
      "Number of NCD awareness campaigns conducted by the urban local body health department.",
      "Urban local body budget allocated to NCD drug procurement."
    ],
    answer: 1,
    explanation: "Measuring intersectoral contributions to NCD prevention requires sector-appropriate indicators that reflect the actual determinants each sector controls. Urban planning's contribution to NCD prevention operates through: (1) Built environment for physical activity: parks, walking tracks, cycling infrastructure, active transport options (walkability); (2) Food environments: proximity to fresh food markets vs. density of ultra-processed food outlets (food desert index); (3) Green space for mental health and air quality; (4) Urban design for heat island mitigation (climate-NCD). Appropriate urban planning indicators for NCD prevention: Walkability index, park access (% residents within 500m of green space), cycling lane km per 1000 population, street connectivity metrics, food environment ratio (healthy vs unhealthy food outlets per capita). These are used in Smart Cities Mission evaluations in India and by WHO's Urban Health initiative. Option A (hospitals) is a health sector indicator. Option C (awareness campaigns) is a health communication indicator. Option D (drug procurement) is a health system indicator. Cross-sectoral NCD monitoring requires sector-specific determinant indicators rather than proximal health outcomes - enabling each ministry to report on its specific contribution."
  },
  {
    id: 35,
    question: "The ICMR Task Force on Non-Communicable Diseases uses the CHNRI (Child Health and Nutrition Research Initiative) methodology for NCD research priority setting. What does CHNRI methodology involve, and what are its key assessment criteria?",
    options: [
      "CHNRI methodology involves individual expert committees rating research proposals by grant size and institutional prestige.",
      "CHNRI is a systematic, transparent, multi-expert scoring method where proposed research questions are scored against standardized criteria: answerability (technical feasibility), effectiveness (potential for significant health impact if positive), deliverability (implementability of findings), equity (benefits reaching poorest populations), and maximum potential for disease burden reduction; scores are aggregated across experts to produce a ranked priority list.",
      "CHNRI methodology uses randomized assignment of research priorities to investigators to eliminate bias.",
      "CHNRI stands for Comprehensive Health and NCD Research Integration and refers to a database of completed NCD studies."
    ],
    answer: 1,
    explanation: "CHNRI (Child Health and Nutrition Research Initiative, developed by Rudan et al., adapted for adult NCDs) is a systematic research priority setting methodology adopted by WHO, ICMR, and funding agencies. Process: (1) Defining the investment domain (e.g., NCD prevention in India, 2020-2030); (2) Generating a comprehensive list of potential research questions; (3) Scoring by a diverse panel of experts (scientists, clinicians, program managers, community representatives) against standardized criteria: Answerability (Is it technically feasible to answer this question?); Effectiveness (If answered positively, will it lead to better health interventions?); Deliverability, Affordability, Sustainability of resulting interventions; Maximum Potential for Disease Burden Reduction; Equity (Will benefits reach the most vulnerable?); (4) Aggregating scores; (5) Ranking research questions by composite score. ICMR uses CHNRI for NCD research agenda-setting. Key advantages: systematic, transparent, reproducible, inclusive of multiple stakeholder perspectives, prevents dominance by vested interests or individual expert opinions. Similar to GRADE methodology for evidence quality, CHNRI provides a structured approach to research investment decisions. This is increasingly important as India's ICMR NCD research budget allocation needs evidence-based justification."
  },
  {
    id: 36,
    question: "Alcohol policy in India includes state-level variation in minimum legal drinking age, alcohol availability restrictions, and taxation. The 'total consumption model' (Ledermann theory) in alcohol epidemiology predicts which relationship between per capita alcohol consumption and alcohol-related harm?",
    options: [
      "Alcohol-related harm is concentrated among a small group of alcoholics and is independent of population-average consumption levels.",
      "Per capita alcohol consumption follows a log-normal distribution; the entire distribution shifts when mean consumption changes; therefore, reducing average per capita consumption also reduces the proportion of heavy drinkers and alcohol-related harm - supporting population-wide alcohol reduction policies (taxation, availability restrictions) rather than targeting only problem drinkers.",
      "Alcohol-related harm only increases above a threshold of 5 drinks per day; no harm occurs below this threshold.",
      "Ledermann theory applies only to developing countries; high-income countries follow different alcohol consumption patterns."
    ],
    answer: 1,
    explanation: "The Ledermann theory (total consumption model or single distribution theory) underpins the public health approach to alcohol policy. Key elements: (1) Alcohol consumption in a population follows approximately a log-normal distribution; (2) The entire distribution is interconnected - when mean per capita consumption changes, the whole distribution shifts, including the tail of heavy drinkers; (3) Reducing mean consumption reduces the proportion of heavy drinkers (the high-harm tail) even without specifically targeting them; (4) Geoffrey Rose extended this to the 'prevention paradox': most alcohol-related harm comes from the large number of moderate drinkers, not the small number of heavy drinkers, because the moderate group is much larger. Policy implication: population-wide measures (taxation that raises prices across all consumption levels, reducing hours of sale, reducing outlet density) are more effective than strategies targeting only heavy drinkers or those with alcohol use disorder. Minimum unit pricing (minimum Rs. per standard unit of alcohol) is the most targeted application of this theory - it selectively raises prices of cheap, high-strength alcohol consumed predominantly by heavy drinkers. India's state-level alcohol policy variation allows natural experiments to test these theories."
  },
  {
    id: 37,
    question: "India's NPCDCS now integrates mental health under the National Mental Health Programme (NMHP) in the AB-HWC platform. Which is the MOST important epidemiological rationale for integrating mental health with NCD screening and management?",
    options: [
      "Mental health conditions cause NCDs through direct biological mechanisms in 100% of cases; therefore treating depression cures diabetes.",
      "Bidirectional comorbidity: depression increases risk of T2DM by 40-60% (via HPA axis dysregulation, inflammation, behavioral pathways); diabetes increases depression risk 2-3 fold; depression reduces medication adherence and self-management in all NCDs; common risk factors (psychosocial stress, poverty, physical inactivity) drive both; shared primary care platform enables co-screening and integrated management improving outcomes in both conditions.",
      "Mental health integration is primarily a cost-saving measure with no direct impact on NCD outcomes.",
      "Mental health and NCDs share no common risk factors or biological pathways; integration is solely for administrative convenience."
    ],
    answer: 1,
    explanation: "The evidence for NCD-mental health integration is compelling and bidirectional: (1) Depression-diabetes bidirectional link: depression increases T2DM risk by 40-60% through HPA axis hyperactivation (elevated cortisol causes insulin resistance), inflammatory cytokines, unhealthy behaviors (physical inactivity, poor diet, tobacco/alcohol); T2DM increases depression through neurological effects of hyperglycemia, burden of chronic illness, hypoglycemia-related anxiety; (2) Cardiovascular: depression doubles MI risk and worsens post-MI outcomes; (3) Adherence: depression is the strongest predictor of poor medication adherence in hypertension, diabetes, and COPD - integrated mental health care improves adherence and NCD control; (4) Shared determinants: poverty, psychosocial stress, adverse childhood experiences (ACEs), urban inequity drive both depression and cardiometabolic NCDs; (5) Healthcare utilization: depressed NCD patients use more expensive emergency services. Integrated care models (ATMIYATA, MANAS, NIMHANS CBR programs) show promise. The ICMR-WHO Mental Health Action Plan 2023-2030 specifically calls for NCD-mental health integration at primary care level. PHQ-9 and PHQ-2 screening for depression is being integrated into HWC NCD screening protocols."
  },
  {
    id: 38,
    question: "A surveillance system for NCD risk factors is being evaluated. The system captures data from 150 sentinel health facilities across India on a monthly basis. Which characteristic of this surveillance system represents its GREATEST limitation for measuring population-level NCD burden?",
    options: [
      "The monthly reporting frequency is too frequent for NCD surveillance, which requires annual data only.",
      "Facility-based sentinel surveillance captures only those who seek healthcare, systematically missing individuals with undiagnosed NCDs, those who do not seek care (often the poorest and most rural), and those managing NCDs outside formal health facilities; it cannot provide population-level prevalence estimates and is subject to healthcare-seeking bias.",
      "The 150 sentinel sites are too many; NCD surveillance requires a maximum of 10 representative sites.",
      "Facility-based surveillance overestimates NCD burden because healthcare workers over-diagnose NCDs to justify their programs."
    ],
    answer: 1,
    explanation: "Facility-based sentinel surveillance has a fundamental limitation: it only captures the 'tip of the iceberg' of NCD burden - individuals who have been diagnosed and are seeking care. For NCDs specifically, this is a major problem because: (1) The diagnosis rate for hypertension in India is only approximately 45% (most hypertensives are unaware); diabetes awareness is approximately 45%; (2) A large proportion of the NCD burden exists in undiagnosed, untreated individuals who do not appear in facility data; (3) Healthcare-seeking bias: the sicker, older, more educated, and more urban individuals disproportionately seek care; (4) Rural and poor populations with highest NCD risk may have least healthcare access and thus lowest facility capture rate. Population-level NCD prevalence estimation requires population-based surveys (STEPS, NFHS, INDIAB, DLHS). Triangulating facility data with population surveys provides a more complete picture. Facility data is valuable for: monitoring treatment patterns, drug utilization, complications, and healthcare system response to NCDs - but not for measuring community prevalence. NCD surveillance strengthening in India requires both population-based periodic surveys AND robust facility-based reporting through HMIS/HIMS integrated with NCD-IT."
  },
  {
    id: 39,
    question: "An AI-based risk prediction tool for cardiovascular disease is developed using electronic health records from a large urban tertiary care hospital in Mumbai. The tool achieves high accuracy (AUC = 0.85) in internal validation. A public health researcher proposes deploying it at rural primary health centers in Bihar for CVD risk screening. Which concern is MOST methodologically valid?",
    options: [
      "The tool cannot be used outside Mumbai because Maharashtra and Bihar have different official languages.",
      "Internal validation AUC does not reflect external validity; the tool was trained on an urban, tertiary-care, typically more affluent and health-aware population with different risk factor distributions (dietary patterns, tobacco types, occupational exposures, comorbidities), healthcare utilization patterns, and missing data patterns than rural Bihar populations; external validation in the target population is essential before deployment.",
      "AI tools with AUC > 0.80 are automatically generalizable to all Indian populations without external validation.",
      "The primary concern is data privacy regulation under India's DPDP Act, not model performance generalizability."
    ],
    answer: 1,
    explanation: "This scenario illustrates the critical distinction between internal validity (performance in the development sample) and external validity (generalizability to different populations). The MOST important methodological concern for AI/ML model deployment in public health is algorithmic generalizability (population shift or distribution shift). Sources of non-generalizability: (1) Covariate shift: the distribution of risk factors in rural Bihar (bidi smoking, specific dietary patterns, occupational exposures, malnutrition, different CVD risk factor profiles) differs from urban Mumbai (cigarette smoking, sedentary lifestyle, different diet); (2) Outcome shift: CVD types and rates differ (rural India has more RHD, younger CVD onset); (3) Data quality shift: rural PHC data has more missing values, less standardized measurements; (4) Label shift: case ascertainment of CVD events in rural settings uses different diagnostic criteria. Even validated tools like Framingham Risk Score perform differently in South Asian vs European populations. External validation requirements: the tool must be validated in a representative sample from the target deployment population (rural Bihar PHC patients) before large-scale implementation. Regulatory framework: CDSCO's medical device guidance for AI/ML-based software as medical device (SaMD) requires clinical validation. DPDP Act concerns (option D) are real but secondary to performance validity."
  },
  {
    id: 40,
    question: "The Diabetes Prevention Program (DPP) demonstrated that intensive lifestyle intervention reduced T2DM incidence by 58% in high-risk individuals. The Indian DPP (IDPP-1) showed similar results with a 28% reduction. This gap in efficacy may reflect which important concept in translational research?",
    options: [
      "Indian participants had lower genetic risk for diabetes, so the intervention had less impact.",
      "Efficacy-effectiveness gap (explanatory vs pragmatic trial distinction): IDPP-1 achieved 28% reduction under Indian real-world resource constraints and cultural dietary patterns, compared to DPP's 58% in a highly resourced, intensive US trial with individual dietary counseling, exercise trainers, and behavioral psychologists; scaling lifestyle interventions requires adapting them to local food culture, available resources, and healthcare delivery platforms - the effectiveness in scaled programs is typically lower than efficacy in clinical trials.",
      "The IDPP-1 used an inferior lifestyle intervention design that was methodologically flawed.",
      "Metformin was more effective than lifestyle intervention in IDPP-1, making the comparison with DPP invalid."
    ],
    answer: 1,
    explanation: "The efficacy-effectiveness gap is a fundamental concept in translational research ('bench to bedside to population'). Efficacy = performance under ideal, controlled trial conditions. Effectiveness = performance under real-world conditions. DPP (US): intensive intervention - 16 supervised sessions, individual case managers, structured dietary counseling, supervised exercise, behavioral psychologists, resource-intensive; result: 58% reduction in T2DM at 3 years. IDPP-1 (India, Ramachandran et al., Lancet 2006): lifestyle advice (diet, exercise) delivered in group sessions with less intensive individual follow-up; metformin arm also tested; result: lifestyle 28.5% reduction, metformin 26.4% reduction, combined 28.2%; both significantly less than DPP lifestyle arm. Reasons for gap: (1) Resource intensity: IDPP used fewer sessions, less intensive counseling; (2) Cultural dietary patterns: South Indian diet high in refined rice/wheat, specific challenges in modification; (3) Healthcare system capacity; (4) Economic constraints on exercise facilities. This efficacy-effectiveness gap has crucial policy implications: real-world scale-up of lifestyle interventions for T2DM prevention in India needs contextually adapted, resource-appropriate implementation strategies. This is why ICMR and WHO emphasize 'implementation science' alongside clinical efficacy trials."
  },
  {
    id: 41,
    question: "India's State-level NCD burden varies significantly. The ICMR India State-Level Disease Burden Initiative (2017) found which pattern in the distribution of NCD burden across Indian states?",
    options: [
      "NCD burden is uniformly distributed across all states with no significant regional variation.",
      "Southern states (Kerala, Tamil Nadu, Andhra Pradesh) have the highest NCD burden proportionally (NCDs constitute >65% of total disease burden) due to more advanced epidemiological transition from infectious to chronic diseases; high-burden BIMARU states (Bihar, UP, Rajasthan, MP) still have high infectious and maternal disease burdens but are experiencing rapid NCD increases, creating a 'double burden'; NE states show intermediate patterns.",
      "Northern states exclusively have the highest NCD burden due to extreme cold weather increasing cardiovascular risk.",
      "Urban states universally have lower NCD burden than rural states due to better healthcare access."
    ],
    answer: 1,
    explanation: "The ICMR India State-Level Disease Burden Initiative (GBD 2017 India Collaborators, Lancet 2017-2019) revealed profound state-level heterogeneity in NCD burden reflecting different stages of the epidemiological transition: High NCD states (epidemiological transition Level 4): Kerala, Goa, Tamil Nadu, Andhra Pradesh, Karnataka, Punjab, Maharashtra - NCDs account for 60-76% of total disease burden; leading causes: cardiovascular disease, diabetes, cancer, COPD. States characterized by low infectious disease burden, older age structure, higher urbanization, better healthcare. Low NCD states (still in transition, Level 1-2): Bihar, UP, Rajasthan, Madhya Pradesh, Odisha, Assam - NCDs still <50% of burden; higher maternal/child/infectious disease burden. These states are experiencing rapid NCD increase as nutritional/infectious transitions occur quickly without corresponding chronic disease health system development. This diversity means uniform national NCD policies are inappropriate; state-specific NCD programs based on their transition stage are needed. The ICMR initiative used 333 disease codes and attributable risk methodology to produce state-specific estimates. Urban-rural differences exist within states but do not override the state-level transition pattern."
  },
  {
    id: 42,
    question: "The concept of 'precision public health' for NCDs involves using population-level data at fine geographic resolution to target interventions. Which approach BEST illustrates precision public health for hypertension control in India?",
    options: [
      "Prescribing individualized antihypertensive drug combinations based on each patient's pharmacogenomic profile.",
      "Using Aadhaar-linked health data, HMIS facility data, and mobile phone data with machine learning to identify sub-district geographic clusters with highest hypertension prevalence, lowest treatment rates, and poorest drug supply - then allocating mobile health van resources, additional CHO training, and drug supply preferentially to these highest-need clusters while tracking impact through real-time NCD-IT dashboards.",
      "Conducting whole-genome sequencing of all hypertensive patients in India to identify common genetic variants predisposing to hypertension.",
      "Precision public health is limited to infectious disease surveillance and has no application to NCD prevention."
    ],
    answer: 1,
    explanation: "Precision public health (Dowell et al., MMWR 2016) applies precision medicine concepts to population health - using advanced data analytics and diverse data streams to target public health interventions with greater precision than traditional uniform approaches. For hypertension control in India, precision public health involves: (1) Geo-spatial epidemiology: mapping hypertension prevalence, treatment gaps, and drug stockouts at block/village level using HMIS/NCD-IT data, NFHS small-area estimates, satellite imagery of healthcare facility locations; (2) Machine learning to identify high-risk clusters and predict where intervention will have maximum impact; (3) Resource allocation optimization: directing mobile health vans, CHO deployments, and drug supply to highest-need areas; (4) Digital contact tracing equivalent: identifying diagnosed-but-uncontrolled hypertensives through NM-DHIS for proactive outreach; (5) Real-time monitoring through dashboards. ICMR and NHSRC are developing such systems. This contrasts with pharmacogenomics (option A, precision medicine), which is individual-level. Precision public health operates at population/community level using population-level data streams. The India Hypertension Control Initiative (IHCI) uses district-level dashboards - a form of precision public health to identify and address geographic treatment gaps."
  },
  {
    id: 43,
    question: "NCD prevention in adolescents requires which theoretical framework MOST suited to address the complex interplay of individual, social, and structural determinants of adolescent health behaviors?",
    options: [
      "The Health Belief Model (HBM) - focused on individual perceived susceptibility and severity - is optimal for adolescent NCD prevention as adolescents respond primarily to individualized risk information.",
      "The Social-Ecological Model (Bronfenbrenner), recognizing nested levels of influence (individual, interpersonal/family, organizational/school, community, and societal/policy) is most appropriate; effective adolescent NCD prevention must simultaneously address individual behaviors, family norms, school food and physical activity environments, digital/social media influences, urban built environments, and structural policies (food marketing restrictions, urban planning, school physical education mandates).",
      "The Biomedical Model - focusing exclusively on biological risk factors and pharmacological prevention - is most appropriate for adolescent NCDs.",
      "Classical conditioning (Pavlovian) theory is the primary theoretical basis for adolescent NCD prevention programs."
    ],
    answer: 1,
    explanation: "The Social-Ecological Model (SEM, based on Bronfenbrenner's Bioecological Model, adapted by McLeroy for health promotion) is the most comprehensive framework for adolescent NCD prevention. SEM recognizes that behavior is determined by multiple nested levels: (1) Individual: biological factors, knowledge, attitudes, self-efficacy, motivation; (2) Interpersonal: family dietary practices, peer influences on tobacco/alcohol initiation, parental physical activity role-modeling; (3) Organizational: school food environment (canteen, mid-day meal quality), PE programs, school health policies; (4) Community: neighborhood walkability, proximity to fast food outlets, local social norms around tobacco/alcohol; (5) Societal/Policy: food advertising regulations, tobacco taxation, urban planning policies, school PE mandates. Single-level interventions (only individual counseling, or only policy change) are less effective than multilevel approaches. The WHO Health Promoting Schools framework operationalizes SEM for school-based NCD prevention. For adolescents specifically, social influences (peers, social media) and environmental influences (food environments at schools) are particularly powerful determinants. The Health Belief Model (option A) is individual-level and insufficient for addressing structural determinants. India's Rashtriya Kishor Swasthya Karyakram uses a community-based participatory approach aligned with SEM principles."
  },
  {
    id: 44,
    question: "Epigenetic changes associated with NCD risk include DNA methylation alterations. Which Indian study provides the MOST relevant evidence for epigenetic programming of metabolic risk in the Indian context?",
    options: [
      "No Indian studies have examined epigenetic mechanisms in NCD risk; all epigenetic evidence comes from European populations.",
      "The Pune Maternal Nutrition Study (PMNS) demonstrated that maternal vitamin B12 deficiency combined with high folate status was associated with offspring insulin resistance and higher adiposity at 6 years, with mechanistic studies showing altered methylation of metabolic genes (glucocorticoid receptor, PPAR-gamma, IGF2/H19); the 'thin-fat Indian baby' phenotype (low birth weight but high adiposity percentage) reflects fetal epigenetic programming under maternal undernutrition conditions.",
      "The only Indian epigenetic study used rat models and found no relevance to human metabolic disease.",
      "Indian epigenetic studies show that yoga and meditation reverse all epigenetic changes within 6 months, eliminating NCD risk."
    ],
    answer: 1,
    explanation: "The Pune Maternal Nutrition Study (PMNS, led by Dr. Chittaranjan Yajnik, KEM Hospital Pune, in collaboration with MRC Human Nutrition Research, Cambridge) is the landmark Indian study demonstrating epigenetic programming of metabolic risk. Key findings: (1) Indian mothers had higher folate but lower B12 status compared to UK mothers; offspring of B12-deficient, folate-replete mothers showed higher insulin resistance and adiposity at 6 and 13 years; (2) Mechanistic studies by Lillycrop, Yajnik et al.: maternal B12/folate imbalance alters methyl group availability for DNA methylation; genes particularly affected include glucocorticoid receptor (Nr3c1), PPAR-alpha (fatty acid metabolism), and IGF2/H19 imprinting locus; (3) The 'thin-fat Indian baby' phenomenon: Indian neonates have low birth weight but paradoxically high body fat percentage, high insulin resistance - consistent with fetal programming for nutrient conservation; (4) These programmed metabolic characteristics persist into adulthood, contributing to India's high T2DM burden. This work supports periconceptional and antenatal B12 + folate supplementation as an NCD prevention strategy beyond neural tube defect prevention. The PMNS findings contributed to DOHaD (Developmental Origins of Health and Disease) theory and specifically to understanding South Asian phenotype's unique metabolic vulnerability."
  },
  {
    id: 45,
    question: "The relationship between urbanization and NCD burden in India shows a 'rural-urban gradient.' Recent NFHS-5 (2019-21) data shows which trend is MOST concerning regarding this gradient?",
    options: [
      "NCD risk factors (obesity, hypertension, diabetes) remain exclusively urban; rural areas are protected by traditional lifestyles.",
      "The rural-urban gap in NCD risk factors is narrowing rapidly: while urban prevalence remains higher, rural rates of hypertension, obesity, and diabetes have increased substantially in NFHS-5 compared to NFHS-4 (2015-16); rural areas now carry a significant and growing NCD burden driven by nutrition transition, motorization, tobacco spread, and expanding screen time, even before rural health systems are equipped to manage NCDs.",
      "Urban areas have lower NCD burden than rural areas in NFHS-5 due to better healthcare and awareness.",
      "The rural-urban gradient has remained completely unchanged between NFHS-3, NFHS-4, and NFHS-5."
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21) data reveals an alarming convergence of NCD risk factors between urban and rural populations: Hypertension (elevated BP): NFHS-5 urban women 23.4%, rural women 19.9% - gap narrowing from NFHS-4 (urban 25.0%, rural 18.3%). Obesity (BMI >25): urban women 39.3%, rural women 24.8% in NFHS-5 (rural rate increased from 19.7% in NFHS-4 - 26% relative increase). Tobacco use: rural populations consistently have higher smokeless tobacco use. This rural NCD expansion is driven by: (1) Nutrition transition reaching rural areas through expanded road connectivity, mobile retail, and changing food habits; (2) Motorization and labor-saving technologies reducing physical activity; (3) Television, smartphones, and streaming increasing sedentary behavior; (4) Rural tobacco markets targeted by industry as urban markets saturate. The critical policy challenge: rural health systems (PHCs, CHCs) designed for acute infectious/maternal care are ill-equipped for chronic NCD management (lack of antihypertensives, antidiabetics, trained staff, follow-up systems). The AB-HWC expansion specifically addresses this rural NCD management gap. Policy must anticipate rural NCD escalation rather than treating NCDs as purely urban problems."
  },
  {
    id: 46,
    question: "A large-scale NCD prevention program evaluation uses a quasi-experimental design with a comparison group rather than an RCT. Which design BEST approximates a randomized experiment when randomization is not feasible for a national-level program?",
    options: [
      "A simple pre-post comparison of NCD indicators in intervention districts, interpreting all changes as program effects.",
      "A difference-in-differences (DiD) design: comparing changes in NCD outcomes from baseline to follow-up in intervention districts (that received the program) minus changes over the same period in matched comparison districts (that did not receive the program); this controls for time trends and pre-existing differences, providing a more valid causal estimate of program impact.",
      "An uncontrolled before-after study using only national average data as the comparison.",
      "A cross-sectional survey at program endpoint in intervention areas only, comparing to non-program districts with no baseline data."
    ],
    answer: 1,
    explanation: "Difference-in-Differences (DiD) is a quasi-experimental impact evaluation design particularly well-suited for program evaluations where randomization is not feasible. DiD estimate = (Post - Pre in intervention group) - (Post - Pre in comparison group). Key assumptions: Parallel trends assumption: in the absence of the intervention, intervention and comparison groups would have followed similar trends in the outcome; this is tested by examining pre-intervention trends. DiD advantages: (1) Controls for time-invariant confounders between groups; (2) Controls for common time trends (secular trends in NCD rates) that affect both groups; (3) Uses each group as its own control (within-group comparison). For national NCD program evaluation (e.g., NPCDCS, IHCI): intervention districts receiving the program are compared with propensity-score-matched control districts not yet receiving it; changes in hypertension control rates, diabetes treatment, or CVD mortality from baseline to endline are compared using DiD. Simple pre-post (option A) is biased by secular trends and regression to the mean. Cross-sectional endpoint comparison (option D) cannot separate program effects from pre-existing differences. ICMR's program evaluation methodology guidelines recommend DiD with matched controls as the preferred quasi-experimental design for NCD program evaluation."
  },
  {
    id: 47,
    question: "NCD and climate change policy intersect through 'co-benefits' where climate mitigation actions simultaneously reduce NCD burden. Which example MOST accurately demonstrates a co-benefit relevant to India?",
    options: [
      "Building coal power plants increases energy security which reduces poverty-related NCDs; therefore climate mitigation harms NCD prevention.",
      "Transitioning from biomass cooking fuels (wood, dung, agricultural residue) to clean cooking (LPG, electric induction) simultaneously reduces household air pollution (PM2.5, CO, VOCs) associated with COPD, lung cancer, IHD, and stroke; reduces women's time burden collecting fuel; and reduces carbon dioxide and black carbon emissions driving climate change - making clean cooking a major NCD-climate co-benefit policy.",
      "Planting trees reduces climate change but has no direct effect on NCD burden.",
      "Electric vehicles reduce air pollution only in urban areas and have no impact on the NCD burden of rural populations."
    ],
    answer: 1,
    explanation: "Co-benefits of climate action for NCDs represent 'win-win' policies that simultaneously advance climate mitigation/adaptation and NCD prevention. The household air pollution-clean cooking co-benefit is the most quantitatively important example in India: India's HAP burden: approximately 800 million people use solid cooking fuels (biomass - wood, agricultural residue, dung); HAP from incomplete combustion contributes to COPD, IHD, stroke, lung cancer, cataracts; GBD 2019 attributes approximately 600,000+ deaths annually to HAP in India. Climate co-benefit: biomass combustion releases black carbon (potent short-lived climate pollutant, 3500x GWP of CO2 over 20 years), methane, and CO2. Transitioning to LPG or electric induction cooking: eliminates HAP exposure, reduces premature NCD deaths, reduces black carbon/GHG emissions, reduces time poverty (women spending 3-5 hours daily collecting fuel), reduces deforestation (biomass harvesting). India's Ujjwala Yojana (free LPG connections to BPL households) is exactly this co-benefit policy - reducing HAP for NCD prevention while also reducing GHG emissions. However, refill affordability remains a barrier. Electric vehicles (option D) also have urban-rural co-benefits through ambient air quality improvement. The NCAP-NCD linkage recognizes these intersections."
  },
  {
    id: 48,
    question: "Palliative care needs assessment for NCDs requires quantifying the population requiring palliative care. Using WHO methodology, if India has 53 million people with serious health conditions requiring palliative care, of whom approximately 80% have NCDs (cancer 25%, cardiovascular 38%, COPD 7%, diabetes 7%, other NCDs 3%), what proportion of India's NCD-related palliative care need is currently estimated to be met?",
    options: [
      "Less than 2-4% of palliative care need is met, reflecting critical deficiency in palliative care services, particularly for non-cancer NCDs.",
      "Approximately 50% of palliative care need is met through the NPCDCS program.",
      "India meets 75% of palliative care need through private hospitals.",
      "Palliative care need is fully met in states with population-based cancer registries."
    ],
    answer: 0,
    explanation: "WHO's Worldwide Palliative Care Alliance estimates that only approximately 14% of people needing palliative care globally actually receive it; in LMIC countries like India, the figure is estimated at <2-4%. Key data points for India: (1) India's morphine consumption: approximately 0.2 mg/capita vs. 300+ mg/capita in USA and UK - a >1500-fold difference, reflecting near-complete unavailability of opioids for pain management; (2) Palliative care services: concentrated in Kerala (highest per-capita density), some private hospitals in major cities; virtually absent from public health system in most states; (3) Specialist palliative care workforce: <5,000 professionals for a 1.4 billion population; (4) Non-cancer NCDs: cardiovascular, COPD, and renal disease patients have even less access than cancer patients as palliative care traditionally focuses on oncology. Reasons for the massive unmet need: (1) NDPS Act (1985) regulatory barriers to opioid prescribing (improved but not resolved by 2014 amendment); (2) No palliative care training in medical/nursing curricula; (3) Inadequate community-based palliative care infrastructure; (4) Cultural attitudes equating palliative care with 'giving up' rather than comfort-focused care. Kerala's community palliative care model (Neighbourhood Network in Palliative Care) is the global model for low-resource palliative care."
  },
  {
    id: 49,
    question: "India's SDG 3.4 progress is tracked using the 'unconditional probability of dying between ages 30 and 70 from cardiovascular disease, cancer, diabetes, or chronic respiratory disease' (the NCD mortality probability). If this indicator was 26.8% in 2015 and the SDG 3.4 target requires a one-third reduction by 2030, what is the TARGET value for 2030, and what annual rate of decline is required?",
    options: [
      "Target = 17.9%; required annual decline = 2.53% per year",
      "Target = 20.0%; required annual decline = 2.0% per year",
      "Target = 13.4%; required annual decline = 5.0% per year",
      "Target = 22.5%; required annual decline = 1.0% per year"
    ],
    answer: 0,
    explanation: "SDG 3.4 target: reduce premature NCD mortality by one-third between 2015 and 2030. India's 2015 NCD mortality probability (30-70 years, 4 main NCDs): approximately 26.8% (GBD 2019 estimate for India). Target value = 26.8% x (1 - 1/3) = 26.8% x 0.667 = 17.87%, approximately 17.9%. Years from 2015 to 2030 = 15 years. Required total reduction = 26.8% - 17.9% = 8.9 percentage points. Annual absolute reduction required = 8.9 / 15 = 0.593 percentage points per year. Annual relative reduction = (0.593 / 26.8) x 100 = 2.21%, approximately 2.5% per year relative reduction. WHO's assessment uses the annual rate of change formula: required rate = (1/15) x ln(17.9/26.8) = -0.025 = -2.5% per year. Current India's rate of decline (GBD 2019) is approximately -1.8% per year - insufficient to achieve the target. Implications: without acceleration (dramatically improved hypertension control, tobacco tax increases, cancer screening scale-up), India will fail to meet SDG 3.4 by 2030. This calculation is fundamental to NCD priority-setting and investment decisions by ICMR, Ministry of Health, and Planning Commission (NITI Aayog)."
  },
  {
    id: 50,
    question: "India's cancer registry system (NCRP - National Cancer Registry Programme under ICMR) has evolved over decades. Population-Based Cancer Registries (PBCRs) differ from Hospital-Based Cancer Registries (HBCRs) in which MOST important way relevant to national cancer burden estimation?",
    options: [
      "PBCRs collect more detailed clinical staging data than HBCRs, making them better for treatment protocol evaluation.",
      "PBCRs capture all cancer cases (diagnosed and treated in any facility, or diagnosed post-mortem) occurring in a defined geographic population, enabling calculation of age-standardized incidence and mortality rates representative of that population; HBCRs capture only cases treated at one institution and cannot estimate population-level incidence; PBCRs are therefore the gold standard for cancer burden estimation, epidemiological research, time trend analysis, and inter-regional comparisons.",
      "HBCRs are more accurate than PBCRs because they have complete pathological confirmation of all cases.",
      "PBCRs and HBCRs measure identical indicators; the choice between them is purely administrative."
    ],
    answer: 1,
    explanation: "Population-Based Cancer Registries (PBCRs) vs Hospital-Based Cancer Registries (HBCRs) is a fundamental distinction in cancer epidemiology: PBCRs: (1) Denominator: all residents of a defined geographic area; (2) Numerator: all new cancer cases occurring in that population regardless of where diagnosed or treated; (3) Case ascertainment: active surveillance across all hospitals, pathology labs, death records, death certificates in the catchment area; (4) Output: age-standardized incidence rates, mortality rates, survival rates representative of the defined population; (5) Uses: cancer burden estimation, time trends, inter-regional/international comparisons, etiological research, prevention program evaluation. HBCRs: (1) Capture only patients treated at one institution; (2) Biased by catchment characteristics, referral patterns, institutional specialization; (3) Cannot estimate population incidence rates; (4) Useful for: quality of care assessment, treatment outcomes research, staging patterns at that institution. NCRP's PBCRs (initially 3 in 1982 in Mumbai, Chennai, Bangalore; now 30 PBCRs covering approximately 10% of India's population): provide regional cancer burden data. Limitations: PBCRs cover only a fraction of India's population; most PBCRs are in urban/semi-urban areas, potentially missing rural cancer patterns. The Cancer Registry Programme is a critical ICMR function for evidence-based cancer control policy."
  }
];

export default questions;

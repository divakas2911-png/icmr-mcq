const questions = [
  {
    id: 1,
    question: "The Burden of Obstructive Lung Disease (BOLD) study used a standardized protocol to estimate COPD prevalence using post-bronchodilator spirometry. The primary reason spirometry-based surveys are considered the gold standard for COPD prevalence estimation over questionnaire-based surveys is:",
    options: [
      "Questionnaires are more expensive to administer than spirometers",
      "COPD is largely asymptomatic in early stages and spirometry detects airflow obstruction before symptoms appear, reducing under-estimation",
      "Spirometry measures blood oxygen saturation accurately",
      "Questionnaire-based surveys require longer field time than spirometry"
    ],
    answer: 1,
    explanation: "COPD is frequently underdiagnosed because it remains asymptomatic or mildly symptomatic until significant lung function loss has occurred. Questionnaire-based surveys that rely on self-reported symptoms (cough, breathlessness) substantially underestimate true COPD prevalence. Post-bronchodilator spirometry, using the GOLD criterion of FEV1/FVC < 0.7, detects persistent airflow limitation regardless of symptom status. The BOLD study used this standardized spirometric protocol across 41 sites internationally, and Indian data from BOLD showed COPD prevalence of approximately 7-14% in adults aged 40 years and above."
  },
  {
    id: 2,
    question: "According to the Global Burden of Disease (GBD) 2019 study, the estimated number of people living with COPD in India was approximately:",
    options: [
      "10 million",
      "25 million",
      "55 million",
      "90 million"
    ],
    answer: 2,
    explanation: "GBD 2019 estimates indicate approximately 55 million people in India live with COPD, the highest absolute burden of any country globally. India accounts for approximately one-third of the global COPD burden. The high burden is attributable to high tobacco smoking prevalence (particularly bidi smoking), widespread biomass fuel combustion for cooking and heating, outdoor air pollution, occupational dust exposures, and a large and ageing population base. COPD was the second leading cause of death in India in GBD 2019."
  },
  {
    id: 3,
    question: "Population attributable fraction (PAF) analysis of COPD risk factors in India reveals that the relative contribution of biomass fuel exposure compared to tobacco smoking differs from high-income countries. In Indian women with COPD, the PAF for biomass fuel combustion is estimated to be:",
    options: [
      "Less than 10% because most Indian women do not smoke",
      "Around 50%, similar to tobacco smoking in men",
      "Greater than 50%, making it the dominant attributable risk in this group",
      "Negligible as indoor air pollution does not cause COPD"
    ],
    answer: 2,
    explanation: "In Indian women, biomass fuel combustion accounts for more than 50% of the population attributable fraction for COPD, making it the dominant risk factor in this demographic. Studies from Kolkata, Delhi, and rural south India have consistently shown that women who cook with biomass fuels (wood, cow dung, crop residue) on traditional chulhas in poorly ventilated kitchens have 2-4 times the COPD risk compared to women using clean fuels. This is epidemiologically distinct from men, where tobacco (particularly bidi) smoking is the primary risk factor. The Pradhan Mantri Ujjwala Yojana (PMUY) distributing LPG connections to BPL households is a key COPD prevention policy."
  },
  {
    id: 4,
    question: "The Indian Study on Epidemiology of Asthma, Respiratory Symptoms and Chronic Bronchitis (INSEARCH) is a landmark multi-site Indian epidemiology study. Which of the following findings is most consistent with INSEARCH study data on COPD prevalence?",
    options: [
      "COPD prevalence was uniform across all Indian states at approximately 2%",
      "COPD prevalence among adults aged 35 years and above was approximately 4-6% overall, with higher rates in rural areas",
      "COPD was found exclusively in smokers with no cases among non-smokers",
      "COPD prevalence was higher in women than men across all sites"
    ],
    answer: 1,
    explanation: "The INSEARCH study, conducted across 12 sites in India representing different geographical and socioeconomic contexts, found COPD prevalence (based on spirometry) of approximately 4-6% among adults aged 35 years and above. The study showed significant heterogeneity across sites, with higher rates in northern and central India. Importantly, INSEARCH confirmed substantial COPD prevalence among non-smokers (particularly women with biomass fuel exposure), underscoring that tobacco-centric COPD prevention strategies are insufficient for India. The study also highlighted the significant undiagnosed fraction."
  },
  {
    id: 5,
    question: "COPD mortality trends in India from GBD data show that COPD age-standardized death rates in India have been changing over time. The most accurate description of this trend is:",
    options: [
      "COPD age-standardized death rates have increased rapidly due to tobacco and pollution",
      "COPD age-standardized death rates have declined over recent decades due to reduced biomass fuel use and tobacco control, but absolute deaths continue to rise due to population growth and ageing",
      "COPD death rates are stable and have not changed in 30 years",
      "India has lower COPD death rates than global averages"
    ],
    answer: 1,
    explanation: "GBD data show a paradox: COPD age-standardized death rates have declined in India due to improvements in nutrition, reduced childhood respiratory infections (which impair lung development), some reduction in biomass fuel use, and tobacco control measures. However, absolute COPD deaths have increased because of population growth and demographic ageing. India had approximately 1 million COPD deaths in GBD 2019. This pattern — declining age-standardized rates but rising absolute burden — is characteristic of many NCDs in India's epidemiological transition."
  },
  {
    id: 6,
    question: "The Air Quality Index (AQI) in India is calculated by the Central Pollution Control Board (CPCB). Epidemiological evidence on ambient air pollution and respiratory disease in Indian cities shows that for every 10 microgram/m3 increase in PM2.5 concentration, respiratory mortality risk increases by approximately:",
    options: [
      "Less than 0.5%",
      "1-3%",
      "10-15%",
      "50-60%"
    ],
    answer: 1,
    explanation: "Meta-analyses of cohort studies from Asia, including pooled analysis from India, show that each 10 microgram/m3 increase in long-term PM2.5 exposure is associated with a 1-3% increase in all-cause respiratory mortality. For COPD-specific mortality, the effect is somewhat larger. Most Indian cities regularly exceed the NAAQS (National Ambient Air Quality Standard) for PM2.5 of 60 microgram/m3 annual mean (itself 12 times the revised WHO guideline of 5 microgram/m3). The National Clean Air Programme (NCAP) launched in 2019 targets 20-30% reduction in PM2.5 in 102 non-attainment cities by 2024."
  },
  {
    id: 7,
    question: "Asthma prevalence among Indian children: The Global Asthma Network (GAN) Phase I study in India and prior ISAAC (International Study of Asthma and Allergies in Childhood) data show that asthma prevalence in 13-14 year old Indian adolescents has been:",
    options: [
      "Declining over time, now below 2%",
      "Increasing in urban areas, with urban adolescents showing higher prevalence (approximately 6-10%) than rural adolescents",
      "Uniform at 15% across all states regardless of urbanization",
      "Higher in rural than urban adolescents due to farm exposures"
    ],
    answer: 1,
    explanation: "ISAAC Phase I to III data from India and GAN data show that asthma symptom prevalence is higher in urban Indian adolescents (approximately 6-10% for current wheeze in 13-14 year olds) compared to rural counterparts. Urban asthma is associated with outdoor air pollution, indoor allergen exposure (house dust mite, cockroach), reduced microbial diversity (hygiene hypothesis), and increased obesity. India has an estimated 30-35 million people with asthma, of whom children form a substantial proportion. The National Programme for Prevention and Control of Asthma (under NP-NCD) focuses on awareness and spirometry access."
  },
  {
    id: 8,
    question: "The WHO Global Burden of Disease attributable to household air pollution from solid fuel use is estimated globally. The fraction of COPD deaths attributable to household air pollution from solid fuels globally, according to GBD estimates, is approximately:",
    options: [
      "Less than 5%",
      "About 30-40%",
      "About 70-80%",
      "Almost 100%"
    ],
    answer: 1,
    explanation: "GBD 2019 estimates that household air pollution from solid fuel combustion is responsible for approximately 30-40% of global COPD deaths, making it one of the two dominant COPD risk factors alongside tobacco smoking. In South Asia, this fraction is even higher due to the extensive use of biomass fuels. Globally, household air pollution from solid fuels causes approximately 3.8 million premature deaths per year from all causes (COPD, pneumonia, ischemic heart disease, stroke, lung cancer). India bears the highest national burden due to its large population still using solid fuels."
  },
  {
    id: 9,
    question: "Occupational lung disease surveillance in India: Which of the following is the largest category of occupational lung disease by estimated prevalence in India?",
    options: [
      "Byssinosis (cotton textile workers)",
      "Silicosis (stone quarry, mining, and sandblasting workers)",
      "Asbestosis (shipbreaking and construction workers)",
      "Occupational asthma from isocyanate exposure"
    ],
    answer: 1,
    explanation: "Silicosis (caused by inhalation of crystalline silica dust) is the most prevalent occupational lung disease in India, with an estimated 3-6 million workers at risk and hundreds of thousands of cases. High-risk industries include stone quarrying (Rajasthan, Andhra Pradesh), mining (coal and metal mines), agate industry (Khambhat, Gujarat), sandblasting, construction, and foundry work. India's Rajasthan state, with its extensive sandstone quarrying, has the highest burden. Silicosis is recognized under the Employees' State Insurance Act and Factories Act, and the National Silicosis Policy (2013) mandated dust control measures and compensation for silicosis victims."
  },
  {
    id: 10,
    question: "COPD exacerbation epidemiology in India: Acute exacerbations of COPD (AECOPD) are major drivers of COPD mortality and hospitalization costs. Studies show that moderate-to-severe COPD patients in India experience on average how many exacerbations per year?",
    options: [
      "Less than 0.5 exacerbations per year",
      "1-2 exacerbations per year",
      "5-6 exacerbations per year",
      "More than 10 exacerbations per year"
    ],
    answer: 1,
    explanation: "Studies from India show that patients with moderate-to-severe COPD experience approximately 1-2 exacerbations per year on average, consistent with global COPD literature. However, a subgroup of patients (approximately 20-30%) are 'frequent exacerbators' (2 or more exacerbations per year) and drive disproportionate healthcare costs. In India, respiratory infections (particularly Streptococcus pneumoniae, Haemophilus influenzae, and influenza viruses) are the most common triggers of AECOPD. Air pollution episodes (dust storms, crop burning-related haze) are associated with AECOPD clustering, particularly in north India."
  },
  {
    id: 11,
    question: "Pulmonary function survey methodology: When conducting a population-based spirometry survey in India, which quality control criterion is mandatory for a spirometric test to be considered acceptable according to ATS/ERS standards?",
    options: [
      "The patient must be aged above 50 years and have smoked for at least 10 pack-years",
      "At least 3 technically acceptable maneuvers with start-of-test criteria met, good effort plateau, and FEV1 and FVC values within 150 mL of each other (reproducibility criterion)",
      "The FVC must be above 3 liters for men and above 2 liters for women",
      "A peak expiratory flow rate above 500 L/min must be achieved"
    ],
    answer: 1,
    explanation: "ATS/ERS 2019 spirometry standards require: (1) Acceptability: at least 3 acceptable maneuvers with good start (back-extrapolated volume < 5% FVC or < 0.1 L), absence of cough in first second, no early termination; (2) Reproducibility: FEV1 and FVC from the best two acceptable maneuvers must be within 150 mL of each other (or 100 mL if FVC < 1 L). These quality criteria are essential in population surveys like BOLD and INSEARCH to ensure that COPD prevalence estimates are not inflated by poor-quality spirometry. Training field technicians and using dedicated spirometry quality control software are critical for large-scale Indian surveys."
  },
  {
    id: 12,
    question: "The BOLD (Burden of Obstructive Lung Disease) study provided spirometry-based COPD prevalence estimates globally. The key methodological innovation of the BOLD study compared to earlier epidemiological surveys was:",
    options: [
      "Using self-reported doctor diagnosis of COPD as the primary outcome",
      "Standardized post-bronchodilator spirometry with a centralized quality control protocol and harmonized analysis, enabling valid comparisons across sites globally",
      "Restricting the study only to smokers with 20 or more pack-years",
      "Using peak expiratory flow rate instead of FEV1/FVC as the primary diagnostic criterion"
    ],
    answer: 1,
    explanation: "The BOLD study's key innovation was standardizing the entire spirometry protocol: validated equipment calibration, centralized technician training, standardized pre-bronchodilator and post-bronchodilator (400 mcg salbutamol) spirometry, and centralized quality grading of all spirograms. This enabled valid cross-national comparisons of COPD prevalence. Earlier surveys used varying definitions and methods, making comparisons unreliable. BOLD found that COPD prevalence varied from 3.7% to 19.0% across 41 sites globally, with India showing significant site-to-site variation based on smoking rates and biomass fuel use."
  },
  {
    id: 13,
    question: "The SEEK (Screening and Early Evaluation of Kidney Disease) study was a cross-sectional CKD prevalence study in India. The SEEK study found CKD prevalence of approximately 17% in the studied population. Which definition of CKD was used in SEEK to identify prevalent CKD cases?",
    options: [
      "Self-reported kidney disease or dialysis use only",
      "eGFR < 60 mL/min/1.73m2 or presence of proteinuria (dipstick 1+ or above) measured at a single time point",
      "Serum creatinine above 2 mg/dL on two occasions at least 3 months apart",
      "History of recurrent urinary tract infections"
    ],
    answer: 1,
    explanation: "The SEEK study used a cross-sectional design measuring eGFR (estimated GFR using MDRD equation) and dipstick proteinuria to identify CKD at a single time point, defining CKD as eGFR < 60 mL/min/1.73m2 OR proteinuria 1+ or above. The 17.2% prevalence found in SEEK is likely an overestimate of true CKD prevalence because single-point measurements cannot distinguish true CKD (requiring >3 months duration) from acute kidney disease or transient proteinuria. Despite this limitation, SEEK provided the most comprehensive national data on CKD burden in India and highlighted that most CKD cases (stages 1-3) were undiagnosed and unaware of their condition."
  },
  {
    id: 14,
    question: "CKD-MBD (Chronic Kidney Disease - Mineral Bone Disorder) is a systemic complication of CKD. From a population epidemiology perspective, which stage of CKD does secondary hyperparathyroidism typically begin to emerge as a significant population-level complication?",
    options: [
      "CKD Stage 1 (eGFR >= 90)",
      "CKD Stage 2 (eGFR 60-89)",
      "CKD Stage 3 (eGFR 30-59), particularly Stage 3b",
      "Only at CKD Stage 5 (ESRD requiring dialysis)"
    ],
    answer: 2,
    explanation: "Secondary hyperparathyroidism (SHPT), a key manifestation of CKD-MBD, begins to emerge at CKD Stage 3 (eGFR 30-59 mL/min/1.73m2), particularly in Stage 3b (eGFR 30-44). At this stage, reduced renal activation of vitamin D (calcitriol) and impaired phosphate excretion trigger PTH elevation. By Stage 4-5, SHPT becomes nearly universal. From a public health surveillance perspective, monitoring PTH and mineral markers should begin at Stage 3. This is particularly relevant in India where baseline vitamin D deficiency is already prevalent in the general population, potentially accelerating CKD-MBD progression."
  },
  {
    id: 15,
    question: "Dialysis access in India: The Pradhan Mantri National Dialysis Programme (PMNDP) was launched under the National Health Mission (NHM) to provide free hemodialysis to BPL patients. As of recent data, PMNDP has established dialysis units primarily at which level of the healthcare system?",
    options: [
      "Sub-centres and primary health centres (PHCs)",
      "District hospitals",
      "Only AIIMS and premier government medical colleges",
      "Exclusively through private sector PPP arrangements without any government facilities"
    ],
    answer: 1,
    explanation: "PMNDP established hemodialysis units primarily at district hospitals (DHs) across India, making dialysis accessible at the district level through a public-private partnership (PPP) model. The programme provides free hemodialysis to patients below the poverty line (BPL). By 2022-23, PMNDP had established over 900 dialysis units across 35 states/UTs providing approximately 25-30 lakh dialysis sessions annually. However, coverage remains inadequate relative to India's estimated ESRD burden (approximately 2.2 lakh new ESRD cases per year). Peritoneal dialysis (CAPD) is less common in India due to cost and lack of awareness."
  },
  {
    id: 16,
    question: "Organ transplantation rates in India: India's deceased donor organ transplantation rate (deceased donor transplants per million population, or pmp) compared to Spain (the global leader) is:",
    options: [
      "Similar to Spain at approximately 46 pmp",
      "Half of Spain's rate at approximately 23 pmp",
      "Extremely low at approximately 0.8-1.0 pmp, compared to Spain's 46 pmp",
      "Zero, as India only performs living donor transplants"
    ],
    answer: 2,
    explanation: "India's deceased donor organ transplantation rate is extremely low at approximately 0.8-1.0 per million population (pmp), compared to Spain's approximately 46 pmp (global leader) and the USA's approximately 40 pmp. Despite the Transplantation of Human Organs and Tissues Act (THOTA) 1994 (amended 2011) and the National Organ and Tissue Transplant Organisation (NOTTO) coordinating efforts, India faces major barriers: low awareness of brain death concept, family refusal, inadequate ICU infrastructure for donor maintenance, and poor coordination. Living donor transplantation (primarily kidney and liver) dominates in India. Approximately 5,000-6,000 kidney transplants are performed annually in India."
  },
  {
    id: 17,
    question: "The CKD-diabetes-hypertension triad in India represents a major convergent burden. Among patients with type 2 diabetes in India, the approximate proportion who develop diabetic nephropathy (CKD attributable to diabetes) over their lifetime is:",
    options: [
      "Less than 5%",
      "10-15%",
      "30-40%",
      "More than 70%"
    ],
    answer: 2,
    explanation: "Approximately 30-40% of patients with type 2 diabetes develop diabetic nephropathy (diabetic kidney disease, DKD) over their lifetime. In India, given the high prevalence of type 2 diabetes (approximately 77 million diagnosed cases - IDF 2021) and suboptimal glycemic and blood pressure control, DKD represents an enormous burden. The CKD-diabetes-hypertension triad creates a vicious cycle: diabetes causes CKD, CKD worsens hypertension, and hypertension accelerates CKD progression. Each year, approximately 1.5-2 lakh diabetic patients in India progress to ESRD requiring renal replacement therapy."
  },
  {
    id: 18,
    question: "Osteoporosis burden in India: Community-based studies estimate what proportion of Indian women aged 50 years and above have osteoporosis (T-score <= -2.5)?",
    options: [
      "Less than 5%",
      "About 10%",
      "20-30%",
      "More than 60%"
    ],
    answer: 2,
    explanation: "Studies from India estimate that 20-30% of Indian women aged 50 years and above have osteoporosis (T-score <= -2.5 on DXA), with an additional 30-40% having osteopenia (T-score -1.0 to -2.5). India has an estimated 50 million osteoporotic individuals. Key Indian-specific risk factors include: widespread vitamin D deficiency (affecting 70-90% of the population due to dietary habits, sun avoidance, and pigmented skin), low calcium intake (average Indian dietary calcium intake is approximately 400 mg/day against the recommended 1000 mg/day), early menopause, low body weight, and physical inactivity. Hip fracture incidence is increasing with India's ageing population."
  },
  {
    id: 19,
    question: "The National Sickle Cell Anaemia Elimination Mission launched by the Government of India in 2023 targets elimination of sickle cell disease by 2047. The Mission's primary population-level strategy is:",
    options: [
      "Universal newborn screening for sickle cell disease in all hospitals",
      "Universal screening of tribal and high-prevalence populations aged 0-40 years using HPLC/sickling tests, with premarital and prenatal counseling to prevent new births with SCD",
      "Providing hydroxyurea treatment free of cost to all sickle cell trait carriers",
      "Establishing bone marrow transplant centres in all tribal districts"
    ],
    answer: 1,
    explanation: "The National Sickle Cell Anaemia Elimination Mission (2023-2047) focuses on: (1) Universal screening of individuals aged 0-40 years in tribal and high-prevalence districts using point-of-care tests (HPLC confirmation); (2) Creating a national registry of SCD patients and carriers; (3) Premarital and prenatal genetic counseling for carrier couples; (4) Prenatal diagnosis for carrier couples to prevent new SCD births; (5) Comprehensive management for existing patients. The mission targets tribal belts across Odisha, Chhattisgarh, Jharkhand, Gujarat, Maharashtra, and Madhya Pradesh where carrier prevalence can reach 10-40% in specific communities."
  },
  {
    id: 20,
    question: "Beta-thalassemia carrier screening in India: The estimated carrier (trait) frequency of beta-thalassemia in the general Indian population is approximately 3-4%. In which of the following communities is the carrier frequency substantially higher?",
    options: [
      "Scheduled Tribes of Northeast India",
      "Sindhis, Punjabis, Gujaratis, and Bengalis, where carrier frequency may reach 5-17%",
      "Brahmins of South India",
      "Buddhist communities of Ladakh and Sikkim"
    ],
    answer: 1,
    explanation: "While the general Indian population has a beta-thalassemia carrier frequency of 3-4%, certain communities have much higher rates: Sindhis (up to 11%), Punjabis (6-8%), Gujaratis (up to 9%), and Bengali communities (5-7%). The high carrier frequency in these migrant communities is attributed to founder effects and historical consanguinity. The Federation of Indian Thalassaemia Societies recommends community-specific premarital screening programs targeting these high-frequency groups. Prevention through carrier identification, genetic counseling, and prenatal diagnosis could prevent the majority of new thalassemia major births."
  },
  {
    id: 21,
    question: "Fluorosis endemic areas in India: Dental and skeletal fluorosis are significant public health problems. The National Programme for Prevention and Control of Fluorosis (NPPCF) identifies how many states in India as endemic for fluorosis?",
    options: [
      "5 states",
      "12 states",
      "19 states",
      "All 28 states"
    ],
    answer: 2,
    explanation: "The National Programme for Prevention and Control of Fluorosis (NPPCF), launched in 2008-09, identified 19 states in India as endemic for fluorosis (both dental and skeletal): Andhra Pradesh, Telangana, Rajasthan, Gujarat, Uttar Pradesh, Punjab, Haryana, Bihar, Madhya Pradesh, Jharkhand, Odisha, Tamil Nadu, West Bengal, Karnataka, Chhattisgarh, Maharashtra, Uttarakhand, Assam, and Jammu & Kashmir. Approximately 66 million people are exposed to groundwater fluoride exceeding 1.5 mg/L. NPPCF strategies include: alternative safe water supply, defluoridation, nutritional interventions (calcium and vitamin C to reduce fluoride absorption), and health education."
  },
  {
    id: 22,
    question: "The DMFT index is the key metric used in dental caries epidemiology surveys. What does the abbreviation DMFT stand for, and what is the approximate mean DMFT score in 12-year-old Indian children according to National Oral Health Survey data?",
    options: [
      "Decayed, Missing, Filled Teeth; mean DMFT approximately 5.0 in 12-year-olds",
      "Decayed, Missing, Filled Teeth; mean DMFT approximately 1.5-2.0 in 12-year-olds",
      "Damaged, Malformed, Fractured Teeth; mean DMFT approximately 3.0 in 12-year-olds",
      "Dental, Mucosal, Fluorosis, Trauma index; mean DMFT approximately 4.0 in 12-year-olds"
    ],
    answer: 1,
    explanation: "DMFT stands for Decayed, Missing, Filled Teeth index - the sum of teeth that are decayed (D), missing due to caries (M), or filled/restored (F) per individual. The WHO target is a mean DMFT of <= 1.0 in 12-year-olds by 2020. National Oral Health Survey of India data shows mean DMFT in 12-year-old Indian children is approximately 1.5-2.0, with significant variation by state, urban-rural status, and socioeconomic group. Urban children and those with higher sugar intake tend to have higher DMFT. The National Oral Health Programme under NP-NCD promotes school dental health, fluoride toothpaste use, and sugar reduction."
  },
  {
    id: 23,
    question: "Birth defect surveillance in India: The Indian Council of Medical Research (ICMR) Birth Defects Surveillance Project identified the birth prevalence of major congenital anomalies in India. The overall birth prevalence of all major congenital anomalies in India is approximately:",
    options: [
      "0.5 per 1,000 live births",
      "5-6 per 1,000 live births",
      "20-25 per 1,000 live births",
      "50 per 1,000 live births"
    ],
    answer: 1,
    explanation: "The ICMR Birth Defects Surveillance Project and other Indian studies estimate the overall birth prevalence of major congenital anomalies at approximately 5-6 per 1,000 live births for hospital-based surveillance. Community-based estimates, which capture stillbirths and home deliveries, suggest rates of 20-25 per 1,000 births, consistent with WHO estimates for LMICs. Major categories include: neural tube defects (0.5-2/1000), Down syndrome, congenital heart disease (8-10/1000), cleft lip/palate, and limb anomalies. The National Birth Defects Surveillance Programme under the RBSK (Rashtriya Bal Swasthya Karyakram) screens newborns and children for 30 birth defects."
  },
  {
    id: 24,
    question: "Musculoskeletal disorder burden in India: According to GBD 2019, low back pain is the leading cause of years lived with disability (YLDs) in India. The approximate proportion of working-age Indian adults who experience low back pain in any given year is:",
    options: [
      "Less than 5%",
      "About 10%",
      "20-30%",
      "More than 50%"
    ],
    answer: 2,
    explanation: "GBD 2019 estimates that approximately 20-30% of working-age Indian adults experience low back pain in any given year, making it the leading cause of years lived with disability (YLDs) in India — surpassing even depression and iron-deficiency anaemia. Risk factors at the population level include heavy physical labour (agriculture, construction), prolonged sitting (office workers), poor ergonomics, obesity, and psychosocial stress. India lacks a national low back pain registry or dedicated surveillance programme. NP-NCD has now incorporated musculoskeletal disorders, but population-level interventions for low back pain remain nascent."
  },
  {
    id: 25,
    question: "According to GBD 2019, depression (major depressive disorder) ranks as the leading single cause of which specific burden metric globally?",
    options: [
      "Years of Life Lost (YLLs) due to premature death",
      "Years Lived with Disability (YLDs)",
      "Age-standardized incidence rate",
      "Case fatality rate across all causes"
    ],
    answer: 1,
    explanation: "Major depressive disorder (MDD) is the leading single cause of Years Lived with Disability (YLDs) globally, according to GBD 2019. YLDs measure the burden of living with a disabling health condition weighted by severity. Depression causes profound functional impairment across social, occupational, and personal domains. Unlike many NCDs, depression has relatively low direct mortality but enormous disability burden. GBD 2019 estimated 280 million people globally live with depression. In India, GBD data estimate approximately 57 million people with depression, contributing substantially to India's overall disease burden."
  },
  {
    id: 26,
    question: "The National Mental Health Survey (NMHS) 2016 of India was conducted under the leadership of NIMHANS. Regarding the NMHS 2016 findings on mental health service utilization, which statement is most accurate?",
    options: [
      "More than 75% of persons with mental disorders had accessed treatment in the previous 12 months",
      "Only 13.3% of persons with mental disorders had received treatment in the previous 12 months, highlighting a treatment gap exceeding 86%",
      "Treatment gap was highest for schizophrenia at less than 30%",
      "Urban and rural treatment gaps were similar at approximately 50%"
    ],
    answer: 1,
    explanation: "NMHS 2016 found that only 13.3% of persons with mental disorders had received treatment or were in contact with a health service in the preceding 12 months, implying a treatment gap exceeding 86%. The treatment gap was highest for common mental disorders (depression, anxiety) and alcohol/substance use disorders. Schizophrenia had a relatively lower treatment gap (approximately 30-35%) because severe symptoms often compel families to seek some form of care. Treatment gap was substantially worse in rural areas compared to urban areas, and among those with lower educational attainment and lower income. NMHS also found that median duration of untreated illness was 2-4 years for most disorders."
  },
  {
    id: 27,
    question: "The District Mental Health Programme (DMHP) coverage in India: As per the National Health Mission data, DMHP has been extended to all 717 districts of India. The primary human resource component of DMHP at the district level includes:",
    options: [
      "Appointing a senior psychiatrist, clinical psychologist, psychiatric social worker, and psychiatric nurse at the district hospital level",
      "Deploying community health workers (ASHAs) as the sole mental health providers",
      "Establishing residential psychiatric hospitals in every district",
      "Training only private sector general practitioners in mental health"
    ],
    answer: 0,
    explanation: "The DMHP staffing model at each district includes a core team of: (1) Psychiatrist, (2) Clinical Psychologist, (3) Psychiatric Social Worker (PSW), and (4) Psychiatric Nurse. This multidisciplinary team is positioned at the district hospital to provide outpatient, inpatient (limited beds), and community outreach mental health services. The team also trains and supervises general health staff at PHCs and CHCs in mental health identification and management. In practice, many DMHP positions remain vacant due to shortage of trained mental health professionals — India has approximately 0.3 psychiatrists per 100,000 population, against the WHO recommended minimum of 1 per 100,000."
  },
  {
    id: 28,
    question: "The Mental Healthcare Act 2017 (MHA 2017) decriminalized attempted suicide in India. This was achieved by amending which provision?",
    options: [
      "Abolishing Section 302 (murder) of the Indian Penal Code",
      "Adding a presumption of severe stress in Section 309 IPC, making prosecution effectively not applicable for persons who attempt suicide",
      "Introducing life imprisonment for repeated suicide attempts",
      "Removing all mental illness-related provisions from the Constitution of India"
    ],
    answer: 1,
    explanation: "Section 115 of the Mental Healthcare Act 2017 states: 'Notwithstanding anything contained in Section 309 of the IPC (1860), any person who attempts to commit suicide shall be presumed, unless proved otherwise, to have severe stress and shall not be tried and punished under the said Section.' This effectively decriminalized attempted suicide by creating a presumption of severe stress. Section 309 IPC itself was not repealed, but MHA 2017 made prosecution under it virtually impossible. This is a major public health advance as criminalization of suicide attempts was a barrier to help-seeking. The Bharatiya Nyaya Sanhita 2023 (replacing IPC) formally omitted Section 309."
  },
  {
    id: 29,
    question: "Suicide epidemiology in India: According to NCRB Accidental Deaths and Suicides in India (ADSI) 2022, the overall suicide rate per 100,000 population in India is approximately:",
    options: [
      "3-4 per 100,000",
      "12-13 per 100,000",
      "25-30 per 100,000",
      "50 per 100,000"
    ],
    answer: 1,
    explanation: "NCRB ADSI data consistently shows India's suicide rate at approximately 12-13 per 100,000 population. In 2022, India recorded approximately 1,70,000 suicides (crude rate approximately 12.4 per 100,000). The male suicide rate (approximately 18/100,000) is approximately twice the female rate (approximately 6/100,000), though India has a lower male-to-female suicide ratio than most Western countries. Among occupational groups, daily wage workers and homemakers (housewives) contribute the highest absolute numbers. India's Aarogyasri and iCall helplines, and WHO-aligned NIMHANS suicide prevention guidelines, are key national response elements."
  },
  {
    id: 30,
    question: "Farmer suicide epidemiology in India: NCRB data shows that the proportion of suicides among farmers/cultivators as a percentage of total suicides in India is approximately:",
    options: [
      "Less than 3% in recent years",
      "6-8% in recent years",
      "25-30% in recent years",
      "More than 50% of all suicides"
    ],
    answer: 1,
    explanation: "NCRB data shows that farmers and cultivators constitute approximately 6-8% of total suicides in recent years (2019-2022). While this represents tens of thousands of deaths annually, the proportion has declined from earlier peaks (15-20% in early 2000s). Maharashtra (particularly Vidarbha), Karnataka, and Andhra Pradesh/Telangana report the highest absolute numbers of farmer suicides. Risk factors include crop failure, indebtedness, lack of irrigation, volatile market prices, and inadequate social protection. The PM Kisan Samman Nidhi and crop insurance schemes (PMFBY) represent policy responses to address agricultural distress underlying farmer suicides."
  },
  {
    id: 31,
    question: "The epidemiology of alcohol use in India from NMHS 2016: The prevalence of alcohol use disorder in Indian men aged 18-45 years is substantially higher than in women. This male predominance in alcohol use disorder in India is best explained by which sociological and epidemiological factor?",
    options: [
      "Biological differences in alcohol metabolism between Indian men and women",
      "Social and cultural norms that strongly discourage women from drinking, creating a large gender differential; women who do drink face greater stigma and social sanctions",
      "Government regulations prohibiting alcohol sales to women",
      "Indian women have genetic protection against alcohol addiction"
    ],
    answer: 1,
    explanation: "The extreme gender differential in alcohol use disorder in India (NMHS 2016: men 9.1%, women 0.5%) is primarily driven by deeply entrenched social and cultural norms that strongly stigmatize drinking among women. These norms suppress alcohol use initiation in women, and women who drink face severe social sanctions (family rejection, marital difficulties, community ostracism). This is distinct from Western countries where gender differences are narrowing. However, female drinking is increasing in urban, educated, and higher-income Indian women. Policy implications: alcohol control measures in India must be gender-sensitive, recognizing that the burden and social context differ markedly by sex."
  },
  {
    id: 32,
    question: "Epilepsy epidemiology: The estimated prevalence of active epilepsy in India is approximately 5.59 per 1,000 population (ILAE/WHO data). India's epilepsy burden in absolute numbers is estimated at approximately:",
    options: [
      "500,000 people",
      "5 million people",
      "12 million people",
      "50 million people"
    ],
    answer: 2,
    explanation: "With a population of approximately 1.4 billion and epilepsy prevalence of approximately 5.59-12 per 1,000, India has an estimated 10-12 million people with epilepsy — the second-largest national epilepsy burden after China. India accounts for approximately 25% of the global epilepsy burden. The condition is associated with significant stigma, discrimination, marriage barriers, and employment restrictions. Neurocysticercosis (pork tapeworm brain infection) is an important potentially preventable cause of epilepsy in India. The National Programme for Treatment of Epilepsy (embedded in DMHP/NP-NCD) provides free antiepileptic drugs through government facilities."
  },
  {
    id: 33,
    question: "Dementia and India's ageing population: India's population aged 60 years and above is projected to reach what proportion of total population by 2050, creating the demographic context for increasing dementia burden?",
    options: [
      "5% of total population",
      "10% of total population",
      "20% of total population",
      "40% of total population"
    ],
    answer: 2,
    explanation: "India's population aged 60 years and above is projected to reach approximately 20% of total population (approximately 340 million) by 2050, according to UN Population Division projections and the Longitudinal Ageing Study in India (LASI). Currently (2021), the elderly population is approximately 10%. This demographic shift will dramatically increase the burden of dementia, as the incidence doubles with every 5 years of age above 65. ARDSI estimates India's dementia cases will increase from approximately 5.3 million (2020) to approximately 14 million by 2050. India lacks a national dementia policy, and most dementia care falls on unpaid family caregivers."
  },
  {
    id: 34,
    question: "Mental health integration into primary care: Evidence from WHO mhGAP implementation studies globally shows that training primary care providers using mhGAP significantly improves detection and management of priority mental disorders. In India, what percentage of PHCs have trained staff in mhGAP or equivalent mental health protocols under DMHP/NP-NCD?",
    options: [
      "More than 80% of all PHCs",
      "About 50% of PHCs",
      "Less than 20-30% of PHCs, with highly uneven coverage across states",
      "Zero, as mental health is exclusively delivered at district hospitals"
    ],
    answer: 2,
    explanation: "Despite DMHP policy mandating mental health integration at PHC level, implementation data show that less than 20-30% of Indian PHCs have consistently trained staff in mental health screening and management. Coverage is highly uneven — southern states (Kerala, Tamil Nadu, Karnataka) and some northeastern states have better integration than north Indian states. Key barriers include: frequent transfers of trained staff without retraining replacements, stock-outs of essential psychiatric medicines at PHCs, competing priorities of general health staff, and inadequate supervision from district DMHP teams. Scaling up mhGAP training and ensuring drug availability are the most critical next steps."
  },
  {
    id: 35,
    question: "The NIMHANS National Mental Health Survey 2016 found significant variation in mental disorder prevalence between urban metro, urban non-metro, and rural areas. Which pattern best describes this urban-rural variation?",
    options: [
      "Mental disorder prevalence was uniformly distributed with no urban-rural difference",
      "Urban metro areas had higher prevalence of common mental disorders (depression, anxiety) and substance use disorders compared to rural areas",
      "Rural areas had uniformly higher prevalence of all mental disorders due to poverty",
      "Mental disorders were found exclusively in urban populations"
    ],
    answer: 1,
    explanation: "NMHS 2016 found that urban metro populations had higher prevalence of common mental disorders (CMD - depression, anxiety) and alcohol use disorders compared to rural populations. Urban stressors (job insecurity, social isolation, commuting stress, competitive pressure) contribute to higher CMD rates in cities. However, treatment gap was higher in rural areas despite lower prevalence, due to lack of services. Psychoses (schizophrenia, bipolar disorder) showed less clear urban-rural differences, consistent with global literature. Overall mental disorder burden (all conditions combined) was higher in urban than rural India per NMHS 2016."
  },
  {
    id: 36,
    question: "Mental health research priorities in India identified by the ICMR Task Force on Mental Health include which of the following as the most critical research gap?",
    options: [
      "Development of new psychiatric drugs for schizophrenia",
      "Epidemiology of rare psychiatric conditions in specialized tertiary care settings",
      "Implementation science — understanding how to effectively scale up evidence-based mental health interventions in resource-limited Indian contexts, including task-sharing and digital health approaches",
      "Neuroscience research on brain imaging in academic institutions only"
    ],
    answer: 2,
    explanation: "ICMR's mental health research priorities emphasize implementation science as the critical gap — India has adequate evidence that interventions like mhGAP, task-sharing, and community-based care work, but lacks evidence on how to scale them effectively in diverse Indian contexts. Key research priorities include: (1) Implementation of task-sharing models (training ASHAs, ANMs, and general practitioners); (2) Digital and m-Health interventions for mental health screening and treatment adherence; (3) Reducing stigma through community-based campaigns; (4) Suicide prevention strategies at population level; and (5) Mental health financing mechanisms. Pure drug development research is not identified as an immediate national priority given existing treatment options."
  },
  {
    id: 37,
    question: "The Longitudinal Ageing Study in India (LASI) Wave 1 data (2017-19), which covered 72,250 individuals aged 45 years and above across India, found the prevalence of self-reported depressive symptoms (using CIDI-SF) among older Indian adults. What did LASI data reveal about depression in the elderly?",
    options: [
      "Depression was rare in Indian elderly at less than 1% prevalence",
      "Approximately 8.7% of adults aged 45 and above had significant depressive symptoms, with higher rates in women and those in lower socioeconomic quintiles",
      "Depression prevalence was equal across all age groups above 45 years",
      "Rural elderly had lower depression prevalence than urban elderly in LASI data"
    ],
    answer: 1,
    explanation: "LASI Wave 1 found that approximately 8.7% of adults aged 45 and above had significant depressive symptoms meeting CIDI-SF threshold, with a higher prevalence in women (10.5%) than men (6.8%). Depression prevalence increased with age and was inversely associated with socioeconomic status, education level, and social support. Widowed individuals had significantly higher rates. Importantly, LASI also showed very low treatment rates for depression among the elderly — fewer than 5% of those with depression were receiving any treatment, reflecting the combined barriers of stigma, lack of recognition, limited geriatric mental health services, and cost."
  },
  {
    id: 38,
    question: "Road traffic injury (RTI) burden in India: According to WHO Global Status Report on Road Safety and MoRTH data, India accounts for what approximate fraction of global road traffic deaths despite having only about 2% of the world's vehicles?",
    options: [
      "2% of global road traffic deaths",
      "5% of global road traffic deaths",
      "11% of global road traffic deaths",
      "30% of global road traffic deaths"
    ],
    answer: 2,
    explanation: "India accounts for approximately 11% of global road traffic deaths (approximately 1.5-1.8 lakh deaths/year) despite having only about 2% of the world's vehicles — indicating extremely high crash risk per vehicle. This disparity reflects: poor road design (no pedestrian infrastructure, inadequate lighting, lack of median barriers), heterogeneous traffic (pedestrians, cyclists, two-wheelers, heavy trucks sharing roads), weak traffic law enforcement, high proportion of older vehicles without safety features, and inadequate post-crash emergency response. SDG 3.6 targets halving global road traffic deaths by 2030. The Decade of Action for Road Safety 2021-2030 aligns India's National Road Safety Policy with this target."
  },
  {
    id: 39,
    question: "RTI risk factors at the population level: Which vehicle category is involved in the highest proportion of road traffic fatalities in India according to MoRTH data?",
    options: [
      "Pedestrians (those not in vehicles)",
      "Two-wheelers (motorcycles and scooters)",
      "Heavy motor vehicles (trucks, buses)",
      "Cars and jeeps"
    ],
    answer: 1,
    explanation: "Two-wheelers (motorcycles and scooters) are involved in the highest proportion of road traffic fatalities in India, accounting for approximately 44-47% of all road accident deaths according to MoRTH 2022 data. India has the world's largest two-wheeler fleet (approximately 220 million), and many riders lack helmets, drive unlicensed, and mix with high-speed traffic on undivided highways. Pedestrians are the second largest group (approximately 15-20% of deaths). Helmet use laws exist under the Motor Vehicles Amendment Act 2019, and helmet use surveillance in India shows wide variation between high-enforcement states (Kerala approximately 80%) and low-enforcement states (approximately 20-30%)."
  },
  {
    id: 40,
    question: "Drowning prevention in India: The WHO and UNICEF recommend five evidence-based drowning prevention strategies. Which of the following is considered the single most effective drowning prevention intervention for children under 5 years in LMICs?",
    options: [
      "Universal swimming lessons for all children from birth",
      "Installation of four-sided barriers (fencing) isolating water bodies from children's play areas",
      "Banning all water bodies near residential areas",
      "Providing life jackets to all residents in flood-prone areas"
    ],
    answer: 1,
    explanation: "WHO Global Report on Drowning (2014) identifies installation of four-sided barriers (fencing) isolating open water bodies from child play and living areas as the single most cost-effective drowning prevention intervention for children under 5 years in low- and middle-income countries. This passive environmental intervention requires no ongoing behaviour change. India's rural landscape has numerous unguarded ponds, wells, irrigation channels, and rivers near habitations, creating extreme drowning risk. Other WHO-recommended strategies include: day care crèche provision (removing children from hazardous water environments), teaching swimming and water safety, training bystanders in CPR, and improving boat safety."
  },
  {
    id: 41,
    question: "Falls in the elderly: India's Longitudinal Ageing Study (LASI) Wave 1 data found that approximately what proportion of adults aged 60 years and above reported at least one fall in the past two years?",
    options: [
      "Less than 5%",
      "About 10%",
      "Approximately 20%",
      "More than 50%"
    ],
    answer: 2,
    explanation: "LASI Wave 1 found that approximately 20% of Indian adults aged 60 years and above reported at least one fall in the preceding two years. Falls are the leading cause of injury-related disability in the elderly, and in India, hip fractures due to osteoporotic falls carry a one-year mortality of approximately 20-25%. Risk factors for falls in Indian elderly include: polypharmacy, low vitamin D and calcium (impaired muscle strength), cataracts (unaddressed visual impairment is common), environmental hazards (uneven floors, lack of handrails), and muscle weakness from sedentary behaviour. Fall prevention programs integrating exercise (particularly Tai Chi and balance training), vision correction, and home modification are underimplemented in India."
  },
  {
    id: 42,
    question: "Violence epidemiology in India: According to NCRB Crime in India 2022 data, the rate of reported crimes against women (per 100,000 women population) has been changing. Which trend best describes violence against women data in India from NCRB?",
    options: [
      "Reported crimes against women have declined steadily over the last decade",
      "Reported crimes against women have increased in absolute numbers and rate, partly due to improved reporting after legislative reforms (Criminal Law Amendment Act 2013 post-Nirbhaya case)",
      "Crimes against women are uniformly distributed across all states with no geographical variation",
      "Domestic violence (IPV) is not captured in NCRB data and is entirely unmeasured"
    ],
    answer: 1,
    explanation: "NCRB data shows that reported crimes against women (including rape, domestic violence under Section 498A IPC/Section 85 BNS, stalking, and trafficking) have increased in absolute numbers over the past decade. This increase reflects both a genuine increase in violence and substantially improved reporting following legislative reforms after the 2012 Delhi gang rape case (Criminal Law Amendment Act 2013, which expanded definitions of sexual assault, introduced life imprisonment for gangrape, and created fast-track courts). Uttar Pradesh, Rajasthan, and Maharashtra consistently report the highest absolute numbers of crimes against women, but smaller states can have higher rates per population. NCRB does capture domestic violence under 'Cruelty by Husband or His Relatives' (Section 498A IPC/Section 85 BNS)."
  },
  {
    id: 43,
    question: "Burn injury epidemiology in India: The estimated annual incidence of burn injuries requiring medical attention in India, and the population most disproportionately affected, are:",
    options: [
      "Approximately 10,000 burns per year; elderly males most affected",
      "Approximately 700,000-1,000,000 burns per year; women of reproductive age (15-40 years) most disproportionately represented in severe burns and burn deaths",
      "Approximately 50,000 burns per year; industrial workers exclusively",
      "Approximately 5 million burns per year; evenly distributed across all demographics"
    ],
    answer: 1,
    explanation: "India estimates 700,000-1,000,000 burn injuries per year requiring medical attention, with approximately 120,000-140,000 deaths annually — among the highest burn mortality globally. Women of reproductive age (15-40 years) are disproportionately represented in severe burns and burn deaths, primarily due to cooking-related accidents with kerosene stoves and open fires (chulhas). The medico-legal overlap with dowry-related violence ('bride burning') is significant and requires careful investigation in young married women with burns. National Burn Care Policy (2010) recommendations include: burn prevention education, LPG access, national burn registry, and establishment of regional burn centres."
  },
  {
    id: 44,
    question: "Occupational injury surveillance in India: The Directorate General Factory Advice Service and Labour Institutes (DGFASLI) compiles occupational injury statistics from registered factories. A major limitation of India's occupational injury surveillance system is:",
    options: [
      "Over-reporting of minor injuries from all sectors including agriculture and informal employment",
      "DGFASLI statistics cover only registered factories under the Factories Act, missing the enormous burden in the unorganized/informal sector (agriculture, construction, domestic work) which employs over 90% of India's workforce",
      "India has too few factories to generate meaningful occupational injury data",
      "Occupational injury data in India is more complete than European Union member states"
    ],
    answer: 1,
    explanation: "India's occupational injury surveillance system is severely limited because DGFASLI data covers only registered factories under the Factories Act 1948, which represents a small fraction of India's total workforce. Over 90% of India's 500+ million workforce is employed in the informal/unorganized sector (agriculture, construction, domestic service, small enterprises, hawkers), which has no mandatory injury reporting system. Agricultural injuries (from machinery, pesticide exposure, animal attacks) alone are estimated to cause 40,000-60,000 deaths annually. A comprehensive National Occupational Safety and Health Registry covering both formal and informal sectors is a major surveillance gap identified by the WHO Regional Office for SEARO."
  },
  {
    id: 45,
    question: "Obesity prevalence India NFHS-5: NFHS-5 (2019-21) data compared to NFHS-4 (2015-16) shows which significant trend in overweight and obesity in India?",
    options: [
      "Overweight/obesity prevalence declined from NFHS-4 to NFHS-5 due to government nutrition campaigns",
      "Overweight/obesity prevalence (BMI >= 25 kg/m2) increased from NFHS-4 to NFHS-5 in both men and women across all states, with rapid increases in southern and smaller states",
      "Obesity increased only in metropolitan cities and declined in rural areas",
      "Obesity prevalence was stable with no change between NFHS-4 and NFHS-5"
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21) showed significant increases in overweight/obesity compared to NFHS-4 (2015-16): among women aged 15-49, overweight/obesity (BMI >= 25) increased from 20.6% to 24.0%; among men aged 15-49, from 18.9% to 22.9%. All states showed increases except a few. Notably, some of the highest prevalence was recorded in smaller states: Puducherry (48.4% women), Andaman & Nicobar (46.7% women), and Sikkim (40.9% women). This trajectory, if unchecked, will drive dramatic increases in diabetes, hypertension, cardiovascular disease, and certain cancers. The Fit India Movement, Eat Right India, and POSHAN Abhiyaan are policy responses."
  },
  {
    id: 46,
    question: "Childhood obesity surveillance in India: The Comprehensive National Nutrition Survey (CNNS) 2016-18 assessed overweight and obesity in Indian children. Which urban-rural gradient was observed for childhood overweight/obesity?",
    options: [
      "Rural children had higher overweight/obesity rates than urban children",
      "Overweight/obesity was equally prevalent in urban and rural children",
      "Urban children had 2-3 times higher overweight/obesity rates than rural children, particularly in the 10-19 year age group",
      "No childhood overweight was detected in any region surveyed by CNNS"
    ],
    answer: 2,
    explanation: "CNNS 2016-18 found a clear urban-rural gradient: urban children had approximately 2-3 times higher overweight/obesity rates than rural children, with the gradient most pronounced in the 10-19 year adolescent group. Urban adolescent overweight prevalence was approximately 10-12% compared to approximately 4-5% in rural adolescents. The driving factors include: increased access to and marketing of ultra-processed foods, sugar-sweetened beverages, reduced active transportation (use of private vehicles/e-rickshaws), increased screen/sedentary time, and reduced outdoor play space in urban settings. Double burden of malnutrition (coexisting stunting/wasting and overweight within same households and communities) is a major challenge for Indian nutrition policy."
  },
  {
    id: 47,
    question: "Metabolic syndrome prevalence in India: Population-based studies using NCEP-ATP III or IDF/JIS criteria estimate the prevalence of metabolic syndrome in Indian adults. The approximate prevalence in urban Indian adults is:",
    options: [
      "Less than 5%",
      "About 10%",
      "25-35%",
      "More than 60%"
    ],
    answer: 2,
    explanation: "Multiple community-based studies from urban India (Chennai Urban Rural Epidemiology Study - CURES, Chandigarh Urban Diabetes Study, Mumbai studies) estimate metabolic syndrome prevalence at 25-35% in urban adults using harmonized JIS 2009 criteria. The CURES study from Chennai found metabolic syndrome in approximately 26% of urban adults. Prevalence is higher in women (particularly post-menopausal), those with sedentary occupations, and higher BMI. Metabolic syndrome substantially increases risk of type 2 diabetes (5-fold), cardiovascular disease (2-fold), and CKD. Rural Indian metabolic syndrome prevalence is lower at approximately 10-20%, but is rapidly increasing with urbanization."
  },
  {
    id: 48,
    question: "Physical activity surveillance in India: The Indian Council of Medical Research India Diabetes (ICMR-INDIAB) study assessed leisure time physical activity in Indian adults. What proportion of Indian adults meet the WHO recommended minimum of 150 minutes of moderate-intensity physical activity per week?",
    options: [
      "More than 75% of Indian adults meet the recommendation",
      "About 50% of Indian adults meet the recommendation",
      "Less than 25% of Indian adults meet the leisure-time physical activity recommendation, though total physical activity (including occupational activity) may be higher in manual workers",
      "Physical activity surveys have not been conducted at national level in India"
    ],
    answer: 2,
    explanation: "ICMR-INDIAB and other Indian studies show that fewer than 25% of Indian adults meet the WHO leisure-time physical activity recommendations (150 min/week moderate intensity). However, this figure is nuanced: a large proportion of India's workforce (agricultural and construction workers) engage in high occupational physical activity, which does provide health benefits. Among urban, educated, and sedentary-occupation adults, physical inactivity rates exceeding 50-60% are documented. Physical inactivity is the fourth leading risk factor for global mortality (WHO). India's Fit India Movement (2019), PMYY (Pradhan Mantri Yog Yojana), and Active India campaign target population-level physical activity promotion."
  },
  {
    id: 49,
    question: "NCD multimorbidity epidemiology in India: Multimorbidity (having two or more chronic NCDs simultaneously) is an emerging epidemiological concern. Studies from India estimate what prevalence of multimorbidity among adults aged 45 years and above?",
    options: [
      "Less than 5%",
      "About 10-15%",
      "20-30%",
      "More than 60%"
    ],
    answer: 2,
    explanation: "LASI Wave 1 and cross-sectional studies from urban India estimate NCD multimorbidity prevalence at 20-30% among adults aged 45 years and above. The most common dyads are hypertension + diabetes, hypertension + cardiovascular disease, and diabetes + musculoskeletal disorders. Multimorbidity is associated with: higher healthcare costs (polypharmacy, multiple specialist visits), poorer quality of life, worse treatment outcomes, and greater caregiver burden. India's NCD programme (NP-NCD) has traditionally been organized as vertical, disease-specific programmes, which is suboptimal for managing multimorbid patients. Integrated NCD care models with chronic care teams at PHC level are now being promoted under Health and Wellness Centres (HWCs)."
  },
  {
    id: 50,
    question: "Sedentary behaviour surveillance in India: Excessive sedentary time (sitting time) independent of physical activity level is associated with increased NCD risk. Studies on occupational sedentary time in Indian office workers show:",
    options: [
      "Indian office workers sit for less than 4 hours per day on average, within safe limits",
      "Indian office workers average 8-10 hours of sitting per day, with sedentary time associated with higher prevalence of obesity, metabolic syndrome, and cardiovascular risk factors independent of leisure-time physical activity",
      "Screen time and sitting time have no health effects in non-obese individuals",
      "Sedentary behaviour data in India is completely absent and no studies have been conducted"
    ],
    answer: 1,
    explanation: "Studies of urban Indian office workers (IT professionals, government employees, call centre staff) show average daily sitting times of 8-10 hours, substantially exceeding recommended limits. Sedentary behaviour surveillance data from India (WHO STEPS surveys, urban NCD cohorts) demonstrates that prolonged sitting time is independently associated with obesity, abdominal adiposity, higher fasting glucose, dyslipidaemia, and hypertension — even after adjusting for leisure-time physical activity. This phenomenon ('active couch potato' — some who exercise regularly but still sit for 8-10 hours show metabolic risk) is increasingly recognized. India's NCD prevention strategy needs population-level sedentary behaviour reduction campaigns beyond merely increasing physical activity."
  }
];

export default questions;

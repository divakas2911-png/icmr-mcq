const questions = [
  {
    id: 1,
    question: "The ICMR-PHFI-IHME GBD India 2017 study reported that the share of total DALYs attributable to NCDs in India increased from approximately 30% in 1990 to what percentage by 2016?",
    options: ["42%", "55%", "61%", "74%"],
    answer: 1,
    explanation: "The GBD India 2017 study reported that NCDs' share of total DALYs rose from approximately 30% in 1990 to around 55% by 2016, reflecting rapid epidemiological transition. This shift underscores the displacement of communicable diseases by NCDs as the dominant source of disease burden in India over a 25-year period."
  },
  {
    id: 2,
    question: "Which term in Omran's epidemiological transition theory describes the phase where populations begin experiencing rising rates of degenerative diseases while infectious disease mortality declines?",
    options: ["Age of Pestilence and Famine", "Age of Receding Pandemics", "Age of Degenerative and Man-made Diseases", "Age of Delayed Degenerative Diseases"],
    answer: 2,
    explanation: "Omran's 'Age of Degenerative and Man-made Diseases' is Stage 3 of the epidemiological transition, characterized by declining infectious disease mortality and rising chronic NCD burden. India is broadly situated in this stage, though with incomplete transition resulting in a double burden with persisting infectious diseases alongside rapidly rising NCDs."
  },
  {
    id: 3,
    question: "The concept of 'triple burden of disease' as applied to India adds which component beyond the communicable disease and NCD double burden?",
    options: ["Genetic disorders", "Injuries (road traffic accidents, occupational injuries, violence)", "Mental health disorders", "Nutritional deficiency diseases"],
    answer: 1,
    explanation: "The 'triple burden of disease' in India refers to the simultaneous burden of: (1) communicable diseases, (2) non-communicable diseases, and (3) injuries (including road traffic injuries, falls, drowning, burns, poisoning, and violence). This framework is used in GBD analyses and NHM planning to capture the full spectrum of preventable mortality and morbidity facing India."
  },
  {
    id: 4,
    question: "According to the GBD India 2017 report, which NCD was the single largest cause of years of life lost (YLL) in India in 2016?",
    options: ["Chronic obstructive pulmonary disease", "Stroke", "Ischemic heart disease", "Diabetes mellitus"],
    answer: 2,
    explanation: "Ischemic heart disease was the single largest cause of Years of Life Lost (YLL) in India in 2016, according to GBD India 2017. YLL measures premature mortality and IHD caused more premature deaths than any other single condition. This reflects India's substantial and growing cardiovascular disease epidemic, driven by hypertension, dyslipidemia, tobacco use, and physical inactivity."
  },
  {
    id: 5,
    question: "The probability of premature NCD mortality, used as the SDG 3.4.1 indicator, is calculated for which specific age band and which four diseases?",
    options: ["20-65 years; CVD, cancer, diabetes, chronic kidney disease", "30-70 years; cardiovascular diseases, cancers, diabetes, chronic respiratory diseases", "25-75 years; CVD, stroke, cancer, diabetes", "35-70 years; IHD, stroke, breast cancer, type 2 diabetes"],
    answer: 1,
    explanation: "SDG indicator 3.4.1 measures the probability of dying between exact ages 30 and 70 years from any of four major NCD clusters: cardiovascular diseases (IHD, stroke), cancers, diabetes mellitus, and chronic respiratory diseases (COPD, asthma). This age band captures premature mortality and excludes deaths in those aged under 30 or 70 and above, focusing the metric on preventable working-age mortality."
  },
  {
    id: 6,
    question: "State-wise NCD burden data from GBD India 2017 placed which state with the highest age-standardized cardiovascular disease DALY rate, reflecting advanced epidemiological transition?",
    options: ["Punjab", "Kerala", "Andhra Pradesh", "Tamil Nadu"],
    answer: 0,
    explanation: "Punjab showed among the highest age-standardized cardiovascular disease DALY rates in the GBD India 2017 analysis, attributable to high prevalence of hypertension, dyslipidemia, overweight/obesity, and tobacco use in the population. Kerala also ranks high, but Punjab's combination of dietary patterns (high saturated fat) and widespread tobacco use contribute to its elevated cardiovascular burden."
  },
  {
    id: 7,
    question: "In the GBD India 2017 study framework, the Sociodemographic Index (SDI) used to classify Indian states is a composite of which three variables?",
    options: ["Literacy rate, urbanization rate, per capita income", "Lag-distributed income per capita, average years of schooling, total fertility rate", "HDI, GNI per capita, life expectancy", "Poverty headcount, child malnutrition rate, access to healthcare"],
    answer: 1,
    explanation: "The Sociodemographic Index (SDI) used in GBD analyses is a composite measure of lag-distributed income per capita (adjusted for purchasing power parity), mean years of education in those aged 15+, and total fertility rate. It ranges from 0 to 1 and is used to compare disease burden across states and countries at similar stages of socioeconomic development, enabling analysis of whether a state's health outcomes match its expected SDI-based performance."
  },
  {
    id: 8,
    question: "Which NFHS-5 (2019-21) finding best illustrates the narrowing urban-rural NCD risk factor gap in India?",
    options: ["Urban hypertension prevalence is now identical to rural prevalence", "Current tobacco use among rural men (38%) now exceeds urban men (25%), indicating a rural NCD risk factor shift", "Overweight/obesity prevalence in rural women (23.8%) has approached urban women (33.2%), a significant narrowing from NFHS-4", "Rural diabetes prevalence has surpassed urban diabetes prevalence"],
    answer: 2,
    explanation: "NFHS-5 showed overweight/obesity prevalence among rural women rising to 23.8% compared to 33.2% in urban women, a significant narrowing of the urban-rural gap compared to NFHS-4 (where urban prevalence was roughly double rural). This convergence is attributed to dietary changes, reduced physical activity due to mechanization of agriculture, and adoption of urban food habits in rural areas, signaling that NCD risk is no longer primarily an urban phenomenon."
  },
  {
    id: 9,
    question: "According to NFHS-5 (2019-21) data, what percentage of Indian men aged 15+ currently use tobacco in any form?",
    options: ["18.4%", "28.7%", "38.5%", "46.2%"],
    answer: 2,
    explanation: "NFHS-5 (2019-21) reported that approximately 38.5% of men aged 15 years and above in India currently use tobacco in any form (smoking or smokeless tobacco combined). This remains a major NCD risk factor contributing to cancers, COPD, and cardiovascular disease. While there has been a decline from NFHS-4 (44.5%), the burden remains very high and presents a significant public health challenge."
  },
  {
    id: 10,
    question: "The demographic transition in India, characterized by declining fertility and rising life expectancy, contributes to the NCD epidemic primarily through which mechanism?",
    options: ["Reduction in immune competence of the population", "Population aging increasing the absolute number and proportion of older age groups with higher NCD susceptibility", "Declining child mortality increasing total population competing for NCD risk factors", "Rural-to-urban migration increasing urban NCD risk factor exposure"],
    answer: 1,
    explanation: "The demographic transition in India primarily contributes to the NCD epidemic through population aging: as total fertility rates decline and life expectancy increases, the proportion of older adults (who have higher NCD risk due to longer cumulative exposure to risk factors and biological aging processes) increases. India's population aged 60+ is projected to double from approximately 138 million (2011) to about 340 million by 2050, substantially increasing the absolute NCD burden."
  },
  {
    id: 11,
    question: "According to WHO's NCD Country Profile for India (2022 edition), what is India's age-standardized NCD mortality rate per 100,000 population?",
    options: ["Around 450 per 100,000", "Around 650 per 100,000", "Around 850 per 100,000", "Around 1050 per 100,000"],
    answer: 1,
    explanation: "WHO's NCD Country Profile for India (2022) reported India's age-standardized NCD mortality rate at approximately 650 per 100,000 population, which is higher than the global average for lower-middle income countries and reflects the high burden of cardiovascular diseases, cancers, chronic respiratory diseases, and diabetes in India. This rate is used for international comparisons after adjustment for age distribution differences between populations."
  },
  {
    id: 12,
    question: "The World Economic Forum/Harvard School of Public Health (2011) analysis projected that India's cumulative economic losses from the five leading NCDs (heart disease, stroke, cancer, chronic respiratory disease, diabetes) between 2012-2030 would amount to approximately:",
    options: ["USD 1.8 trillion", "USD 4.5 trillion", "USD 6.2 trillion", "USD 8.9 trillion"],
    answer: 2,
    explanation: "The 2011 WEF/HSPH report 'From Burden to Best Buys' projected that India would lose approximately USD 6.2 trillion due to the five leading NCDs between 2012 and 2030, from a combination of premature deaths (lost productivity) and healthcare expenditures. This makes NCDs an economic emergency in addition to a health crisis, with out-of-pocket NCD treatment costs pushing millions of Indian households into poverty each year."
  },
  {
    id: 13,
    question: "NPCDCS (2010) was implemented in its initial phase across how many districts?",
    options: ["50 districts across 15 states", "100 districts across 21 states", "150 districts across 25 states", "200 districts across 28 states"],
    answer: 1,
    explanation: "NPCDCS was initially launched in 100 districts across 21 states and Union Territories in a phased manner starting from 2010. It was subsequently scaled up to additional districts and eventually integrated under the National Health Mission framework. The phased approach allowed for learning and refinement of program strategies before national scale-up."
  },
  {
    id: 14,
    question: "Which of the following best describes the population-based screening approach under NPCDCS for cervical cancer?",
    options: ["Annual Pap smears for all women aged 30+", "Visual Inspection with Acetic Acid (VIA) for women aged 30-65 years at primary health care facilities", "HPV DNA testing for all women at district hospital level", "Colposcopy-based screening at community health centre level"],
    answer: 1,
    explanation: "Under NPCDCS (and Ayushman Bharat-HWC integration), cervical cancer screening uses Visual Inspection with Acetic Acid (VIA) for women aged 30-65 years at primary health care facilities including Health and Wellness Centres and CHCs. VIA was chosen as it is low-cost, requires no laboratory infrastructure, can be performed by trained nurses/ANMs, and provides immediate results, making it suitable for resource-limited settings in India."
  },
  {
    id: 15,
    question: "The Community Based Assessment Checklist (CBAC) under NPCDCS/Ayushman Bharat covers which categories of NCD risk factors and symptoms?",
    options: ["Only tobacco use and alcohol consumption", "Behavioral risk factors (tobacco, alcohol, diet, activity), anthropometric markers, symptoms of NCDs, and family history", "Only clinical symptoms and signs of NCDs requiring referral", "Blood pressure and blood glucose measurements only"],
    answer: 1,
    explanation: "The CBAC is a structured checklist administered by ASHA workers that covers: behavioral risk factors (tobacco use, alcohol consumption, dietary habits, physical activity), anthropometric indicators (overweight/obesity perception), common NCD symptoms (chest pain, breathlessness, excessive thirst/urination, unusual bleeding/lumps), and family history of NCDs. Based on the score, individuals are stratified as low or high risk and referred accordingly for further evaluation at health facilities."
  },
  {
    id: 16,
    question: "Under NPCDCS, the NCD Day Care Centre at District Hospital level primarily provides which services?",
    options: ["Outpatient NCD consultations for stable patients", "Cancer chemotherapy administration on day-care basis, reducing need for prolonged inpatient admission", "Surgical management of NCD complications", "Palliative care for terminal NCD patients only"],
    answer: 1,
    explanation: "NCD Day Care Centres established at District Hospitals under NPCDCS primarily provide cancer chemotherapy administration on a day-care basis. This allows patients to receive chemotherapy and return home the same day rather than requiring prolonged hospitalization, reducing the burden on limited hospital bed capacity and bringing cancer treatment closer to patients who previously had to travel to distant regional cancer centres."
  },
  {
    id: 17,
    question: "The NCD Cell at the District level under NPCDCS is responsible for which set of functions?",
    options: ["Clinical management of complex NCD cases referred from CHC level", "Program coordination, data management, supply chain oversight, monitoring of NPCDCS indicators, and stakeholder coordination at district level", "Biomedical research on local NCD epidemiology", "Procurement of all NCD drugs and equipment for the district"],
    answer: 1,
    explanation: "District NCD Cells under NPCDCS serve as the administrative hub for NCD program management at district level. Their functions include: coordinating NCD program activities across facilities, managing district-level NCD data and MIS reporting, overseeing drug and equipment supply chains, monitoring program indicators (screening coverage, referral completion rates, treatment initiation rates), training coordination, and stakeholder engagement. They report to the State NCD Cell and ultimately to the Central NCD Division."
  },
  {
    id: 18,
    question: "How does the integration of NPCDCS with Ayushman Bharat Health and Wellness Centres change the primary care NCD service delivery model?",
    options: ["NPCDCS was discontinued when AB-HWC was launched", "HWCs deliver NCD screening and initial management as part of comprehensive primary health care, eliminating the need for separate disease-specific NCD program visits", "Only urban HWCs provide NCD services, while rural areas continue under the old NPCDCS model", "AB-HWC integration has expanded the target age for NCD screening from 30+ to 18+ years"],
    answer: 1,
    explanation: "Integration of NPCDCS with Ayushman Bharat-HWCs has shifted the NCD service delivery model from a vertical disease-specific program to a horizontal comprehensive primary health care approach. Under integrated HWCs, NCD screening (hypertension, diabetes, oral/breast/cervical cancers) is delivered to all individuals 30 years and above as a routine part of comprehensive primary health care visits, rather than requiring separate disease-specific program visits. This improves efficiency and reduces stigma while expanding NCD care coverage."
  },
  {
    id: 19,
    question: "The National Mental Health Programme (NMHP) in India is relevant to NCD epidemiology because of which documented relationship?",
    options: ["Mental health disorders have no proven relationship with NCDs", "Depression and anxiety are both risk factors for and consequences of NCDs like diabetes and cardiovascular disease, with high comorbidity rates", "NMHP addresses only substance use disorders which are distinct from NCDs", "Mental health programs compete with NCD programs for funding with no programmatic integration"],
    answer: 1,
    explanation: "NMHP is relevant to NCD epidemiology due to established bidirectional relationships: depression is an independent risk factor for cardiovascular disease and diabetes, depression impairs NCD self-management and medication adherence, and having a chronic NCD (diabetes, CVD, cancer) increases risk of depression/anxiety 2-3 fold. Mental-physical health comorbidity leads to worse NCD outcomes and higher healthcare costs. India's NCD programs increasingly recognize the need to integrate mental health screening and support."
  },
  {
    id: 20,
    question: "The NPHCE (National Programme for Health Care of the Elderly) includes which specific component at the Community Health Centre level?",
    options: ["Geriatric intensive care units", "Dedicated Geriatric OPD clinic staffed by a trained Medical Officer", "Home-based geriatric physiotherapy services", "Palliative care wards exclusively for cancer patients"],
    answer: 1,
    explanation: "Under NPHCE, Community Health Centres are to have dedicated Geriatric OPD clinics staffed by Medical Officers trained in geriatric care. Higher-level components include Regional Geriatric Centres at medical college hospitals providing specialist geriatric care, training of healthcare providers in geriatric medicine, and community outreach for elderly health promotion. The program recognizes that elderly individuals have the highest NCD burden and require age-appropriate healthcare services."
  },
  {
    id: 21,
    question: "Which key monitoring indicator best reflects the effectiveness of population-based NCD screening under NPCDCS/Ayushman Bharat-HWC?",
    options: ["Number of NCD drugs procured per district per year", "Percentage of eligible population (30+ years) screened for hypertension, diabetes, and common cancers", "Number of NCD specialist consultations at district hospital level", "Percentage of district hospital beds allocated to NCD patients"],
    answer: 1,
    explanation: "The primary monitoring indicator for NCD screening effectiveness under NPCDCS and Ayushman Bharat-HWC is the percentage of the eligible population aged 30 years and above who have been screened for hypertension, diabetes, and oral/breast/cervical cancers. This indicator appears in the NHM Program Implementation Plan, is tracked through the Health Management Information System (HMIS), and is reviewed at quarterly NHM Program Review Meetings."
  },
  {
    id: 22,
    question: "The National Tobacco Control Programme (NTCP) Tobacco Cessation Centres (TCCs) are primarily established at which level of health facilities?",
    options: ["Sub-centre level across all districts", "District hospitals and medical college hospitals", "Community health centres only", "Private hospitals empanelled under Ayushman Bharat-PMJAY"],
    answer: 1,
    explanation: "Under NTCP, Tobacco Cessation Centres (TCCs) are established at District Hospitals and Medical College Hospitals (tertiary care level). TCCs provide comprehensive tobacco cessation services including counseling (brief advice and intensive behavioral support), pharmacotherapy (NRT, varenicline, bupropion), and follow-up. NTCP also supports a National Tobacco Cessation Helpline (iCall/Quit Line) for broader population reach beyond facility-based TCCs."
  },
  {
    id: 23,
    question: "The National Programme for Control of Blindness and Visual Impairment (NPCB&VI) addresses which two NCD-related causes of blindness of particular relevance to NPCDCS?",
    options: ["Cataract and trachoma", "Diabetic retinopathy and glaucoma", "Hypertensive retinopathy and age-related macular degeneration", "Diabetic retinopathy and hypertensive retinopathy"],
    answer: 3,
    explanation: "The two NCD-related causes of blindness most relevant to NPCDCS-NPCB&VI linkage are diabetic retinopathy (a microvascular complication of long-standing or poorly controlled diabetes mellitus) and hypertensive retinopathy (retinal damage due to chronic hypertension). Both are preventable through good metabolic and blood pressure control achieved under NPCDCS. India's rising diabetes and hypertension burden makes these leading causes of preventable blindness and visual impairment."
  },
  {
    id: 24,
    question: "Under NPCDCS program monitoring, which indicator specifically measures quality of NCD management at the primary care level?",
    options: ["Number of patients screened per ASHA per month", "Percentage of hypertensive patients with blood pressure under control (<140/90 mmHg) at last visit", "Total expenditure on NCD drugs at district hospital per quarter", "Number of NCD training programs conducted per state per year"],
    answer: 1,
    explanation: "The percentage of hypertensive patients with blood pressure under control (defined as <140/90 mmHg at the last recorded visit) is the key quality-of-care indicator for hypertension management under NPCDCS. Similarly, percentage of diabetics with HbA1c <7% measures diabetes control quality. These treatment outcome indicators, tracked through facility-level registers and HMIS, measure program effectiveness beyond just screening coverage."
  },
  {
    id: 25,
    question: "The WHO Global NCD Action Plan 2013-2030 is built around which overarching framework of six objectives?",
    options: ["Prevent, Detect, Manage, Rehabilitate, Research, Fund", "Raise priority, strengthen national capacity, reduce modifiable risk factors, strengthen health systems, promote research, monitor and evaluate", "Tobacco, alcohol, diet, physical activity, air pollution, healthcare access", "Leadership, partnerships, advocacy, surveillance, innovation, financing"],
    answer: 1,
    explanation: "The WHO Global NCD Action Plan 2013-2030 is structured around six objectives: (1) Raise the priority accorded to NCDs, (2) Strengthen national capacity for NCD leadership, governance, multisectoral action and accountability, (3) Reduce modifiable risk factors, (4) Strengthen and reorient health systems, (5) Promote and support national capacity for high-quality NCD research and development, (6) Monitor the trends and determinants of NCDs and evaluate progress. Each objective has associated policy options and WHO best buys."
  },
  {
    id: 26,
    question: "Among the 9 voluntary global NCD targets in the WHO Global Action Plan, what is the specific target for reducing harmful use of alcohol?",
    options: ["50% relative reduction by 2025", "20% relative reduction by 2025", "10% relative reduction by 2025", "30% relative reduction by 2025"],
    answer: 2,
    explanation: "The WHO Global Action Plan includes a 10% relative reduction in the harmful use of alcohol (as appropriate within the national context) by 2025 as one of the 9 voluntary global NCD targets. This is measured by age-standardized prevalence of heavy episodic drinking among adolescents and adults, and total alcohol per capita consumption. Alcohol reduction is considered a best buy for NCD prevention due to its links to liver disease, cardiovascular disease, and cancers."
  },
  {
    id: 27,
    question: "The WHO target for halting the rise in diabetes and obesity refers to which specific metric for the voluntary global NCD targets?",
    options: ["Zero increase in the age-standardized prevalence of raised blood glucose/diabetes and obesity by 2025", "25% reduction in diabetes and obesity prevalence by 2025", "10% reduction in diabetes incidence by 2025", "Halving childhood obesity rates by 2025"],
    answer: 0,
    explanation: "The WHO voluntary global NCD target for diabetes and obesity is to halt the rise in the age-standardized prevalence of raised blood glucose/diabetes and obesity by 2025. Unlike the tobacco and alcohol targets which aim for relative reductions, this target pragmatically aims to prevent further increase (halt the rise) given the complexity of reversing current obesity and diabetes trends globally, recognizing that maintaining current prevalence without further increase would itself represent significant progress."
  },
  {
    id: 28,
    question: "In WHO STEPS methodology, which specific measurements are collected in Step 2 (Physical measurements)?",
    options: ["Blood glucose, cholesterol, and creatinine", "Height, weight, waist circumference, and blood pressure", "Spirometry, ECG, and fundus examination", "BMI, waist-hip ratio, and skinfold thickness only"],
    answer: 1,
    explanation: "WHO STEPS Step 2 (Physical measurements) collects: height (cm), weight (kg), waist circumference (cm), hip circumference (cm, optional), and blood pressure (mmHg, measured three times with a standardized protocol). From these, BMI (weight/height squared) and waist-hip ratio are calculated. These standardized physical measurements enable calculation of overweight/obesity and abdominal obesity prevalence, and hypertension prevalence, using comparable methodology across all STEPS-implementing countries."
  },
  {
    id: 29,
    question: "WHO Package of Essential NCD (PEN) interventions uses which approach to prioritize patients for management of cardiovascular disease risk?",
    options: ["Individual risk factor treatment regardless of overall cardiovascular risk level", "Total cardiovascular risk assessment using validated risk prediction charts to guide treatment decisions", "Biomarker-based individual genetic risk profiling", "Hospital-based specialist assessment for all patients prior to initiating treatment"],
    answer: 1,
    explanation: "WHO PEN uses a total cardiovascular risk (TCR) assessment approach using WHO/ISH cardiovascular disease risk prediction charts (available in versions with and without laboratory data). Patients are stratified into low (<10%), moderate (10-20%), high (20-30%), or very high (>30%) 10-year CVD risk categories. Treatment intensity (lifestyle advice alone versus adding drug therapy) is determined by total risk level rather than by individual risk factor levels, optimizing resource allocation in low-resource settings."
  },
  {
    id: 30,
    question: "The WHO Global Monitoring Framework includes 25 indicators organized into which categories?",
    options: ["Mortality indicators, morbidity indicators, and service coverage indicators", "Mortality and morbidity indicators, risk factor exposure indicators, national systems response indicators", "Input indicators, process indicators, output indicators, outcome indicators", "Primary prevention, secondary prevention, and tertiary prevention indicators"],
    answer: 1,
    explanation: "The WHO Global Monitoring Framework for NCDs organizes its 25 indicators into three categories: (1) mortality and morbidity indicators (measuring disease burden outcomes including premature NCD mortality probability and cause-specific mortality rates), (2) risk factor exposure indicators (measuring population prevalence of tobacco use, alcohol use, physical inactivity, unhealthy diet, obesity, hypertension, raised blood glucose, raised cholesterol), and (3) national systems response indicators (measuring health system capacity, policies, and program coverage)."
  },
  {
    id: 31,
    question: "SDG 3.4 includes a second sub-target (3.4.2) beyond NCD mortality reduction. What does SDG 3.4.2 address?",
    options: ["Universal health coverage for NCD treatment", "Suicide mortality rate reduction", "Mental health service coverage", "Reduction in alcohol-related harm"],
    answer: 1,
    explanation: "SDG 3.4.2 addresses suicide mortality rate: 'Suicide mortality rate (per 100,000 population).' This recognizes that mental health is an integral component of overall health and is explicitly included in SDG 3.4 alongside NCD mortality. The SDG framework thus links NCD prevention with mental health promotion, consistent with WHO's emphasis that mental health disorders are themselves major contributors to the global burden of disease."
  },
  {
    id: 32,
    question: "The WHO FCTC Article 6 specifically requires countries to implement which tobacco control measure?",
    options: ["Mandatory graphic health warnings on all tobacco products", "Comprehensive bans on tobacco advertising, promotion and sponsorship", "Price and tax measures to reduce demand for tobacco products", "Regulations on tobacco product contents and disclosures"],
    answer: 2,
    explanation: "WHO FCTC Article 6 specifically addresses price and tax measures to reduce demand for tobacco products. It requires parties to implement tax and price policies that reduce tobacco consumption. Evidence consistently shows that tax increases are among the most effective tobacco control measures - a 10% price increase reduces consumption by approximately 4% in high-income countries and 8% in low- and middle-income countries. India's COTPA 2003 and annual Union Budget tobacco tax increases implement FCTC Article 6 obligations."
  },
  {
    id: 33,
    question: "WHO's REPLACE initiative for eliminating industrially-produced trans-fatty acids sets which specific target for global elimination?",
    options: ["Elimination by 2020 globally", "Elimination by 2023 globally", "Elimination by 2025 globally", "Elimination by 2030 globally"],
    answer: 0,
    explanation: "WHO's REPLACE initiative, launched in 2018, set a target for global elimination of industrially-produced trans-fatty acids (iTFAs) from the global food supply by 2023 (originally 2020 for 5 highest-income countries, 2023 globally). The REPLACE acronym stands for: Review dietary sources, Promote healthy oil alternatives, Legislate or regulate elimination, Assess and monitor changes, Create awareness, Enforce compliance. India's FSSAI has implemented progressive reductions in permissible trans-fat levels in foods."
  },
  {
    id: 34,
    question: "NCD Countdown 2030 collaborators assessed which metric to determine whether countries are 'on track' to meet the SDG 3.4 target?",
    options: ["Current NCD mortality rate compared to global average", "Annual rate of decline in premature NCD mortality probability required to achieve the one-third reduction target by 2030", "Number of NCD prevention policies implemented per country", "Country ranking on the WHO NCD control index"],
    answer: 1,
    explanation: "NCD Countdown 2030 assesses whether countries are 'on track' by calculating the annual rate of decline in premature NCD mortality (probability of dying between ages 30-70 from the four major NCDs) required from the 2015 baseline to achieve a one-third reduction by 2030. Countries where current mortality trend implies insufficient decline are classified as 'not on track.' The 2023 Lancet NCD Countdown analysis found India was not on track, with insufficient annual decline in premature NCD mortality."
  },
  {
    id: 35,
    question: "The 'Health in All Policies' (HiAP) approach for NCD prevention in India is reflected in which specific policy mechanism?",
    options: ["NPCDCS program implementation guidelines", "The National Multisectoral Action Plan for Prevention and Control of NCDs (2017-2022) involving 11 ministries", "NHM Program Implementation Plans at state level", "ICMR research funding priorities for NCD studies"],
    answer: 1,
    explanation: "India's National Multisectoral Action Plan (NMSAP) for Prevention and Control of NCDs (2017-2022) is the primary HiAP mechanism for NCD prevention, involving commitments from 11 central government ministries including Health, Agriculture, Food Processing, Finance, Urban Development, Education, Sports, Information and Broadcasting, Consumer Affairs, Women and Child Development, and Ayush. Each ministry identified NCD-relevant actions within their mandates, reflecting the HiAP principle that health is shaped by decisions across all sectors."
  },
  {
    id: 36,
    question: "Among WHO's 'best buy' NCD interventions, which alcohol control policy measure is considered highly cost-effective?",
    options: ["Free alcohol rehabilitation programs for all users", "Comprehensive alcohol advertising bans", "Enforcing minimum unit pricing and restricting alcohol outlet density", "Voluntary industry self-regulation of alcohol marketing"],
    answer: 2,
    explanation: "WHO identifies enforcing minimum unit pricing (MUP) for alcohol and restricting the density of alcohol retail outlets as highly cost-effective 'best buy' interventions for reducing harmful alcohol consumption. MUP sets a floor price per unit of alcohol, making the cheapest and strongest alcoholic beverages less affordable and reducing consumption among heavy drinkers (who tend to favor cheap spirits). These structural measures have stronger evidence than education campaigns alone."
  },
  {
    id: 37,
    question: "The WHO Global Strategy on Physical Activity and Health 2018-2030 ('More Active People for a Healthier World') recommends what percentage of the global population should meet physical activity guidelines by 2030?",
    options: ["10% more active from 2016 baseline", "15% more active from 2016 baseline", "25% more active from 2016 baseline", "50% reduction in physical inactivity from 2016 baseline"],
    answer: 0,
    explanation: "The WHO Global Action Plan on Physical Activity (GAPPA) 2018-2030 sets a global target of a 15% relative reduction in the prevalence of physical inactivity by 2030 compared to the 2016 baseline (effectively meaning 10% more of the population would be physically active). The plan is organized around four strategic objectives: active societies, active environments, active people, and active systems, recognizing that physical activity requires both behavioral and environmental/policy interventions."
  },
  {
    id: 38,
    question: "The ICMR-INDIAB (India Diabetes and Insulin Resistance Audit/Burden) study Phase 1 was conducted in which specific states as a pilot before national scale-up?",
    options: ["Tamil Nadu, Maharashtra, Jharkhand, and Chandigarh", "Karnataka, Gujarat, Bihar, and Delhi", "Kerala, Punjab, West Bengal, and Odisha", "Andhra Pradesh, Rajasthan, Assam, and Haryana"],
    answer: 0,
    explanation: "ICMR-INDIAB Phase 1 was conducted in Tamil Nadu (representing urban south India), Maharashtra (representing urban west India), Jharkhand (representing rural/low-income India), and Chandigarh (representing north India/Union Territory). This multi-state design captured geographic and socioeconomic diversity. The sampling methodology used a stratified random sample with urban and rural strata in each state, generating state-specific and aggregated national diabetes and prediabetes prevalence estimates."
  },
  {
    id: 39,
    question: "ICMR's National Centre for Disease Informatics and Research (NCDIR) coordinates which two types of cancer registries in India?",
    options: ["Clinical cancer registries and hospital cancer registries", "Population-Based Cancer Registries (PBCRs) and Hospital-Based Cancer Registries (HBCRs)", "Urban cancer registries and rural cancer registries", "Primary cancer registries and metastatic cancer registries"],
    answer: 1,
    explanation: "ICMR-NCDIR coordinates: (1) Population-Based Cancer Registries (PBCRs) which record all cancer cases occurring in a defined geographic population (city or district) from all sources, enabling true incidence rate calculations - India currently has over 30 PBCRs; and (2) Hospital-Based Cancer Registries (HBCRs) which record all cancer patients attending a specific hospital, enabling analysis of case mix, treatment patterns, and survival. PBCRs provide epidemiological incidence data while HBCRs provide clinical outcome data."
  },
  {
    id: 40,
    question: "The IDSP NCD surveillance component primarily uses data from which sources for monitoring NCD burden at district level?",
    options: ["Door-to-door surveys conducted by district health officers monthly", "Facility-based reporting from district hospitals, CHCs, and PHCs through the HMIS platform and periodic NCD risk factor surveys", "Insurance claim data from PMJAY for NCD hospitalization", "Community ASHA reporting through monthly ASHA meeting records"],
    answer: 1,
    explanation: "The IDSP NCD surveillance component uses facility-based reporting from district hospitals, CHCs, and PHCs through the Health Management Information System (HMIS) and the IDSP P/L/S forms to track NCD-related morbidity. Additionally, IDSP supports periodic state-level NCD risk factor surveys using WHO STEPS methodology, and sentinel surveillance at selected facilities. This multi-source approach aggregates routine facility data with periodic population-based surveys to monitor NCD trends."
  },
  {
    id: 41,
    question: "The National NCD Monitoring Survey (NNMS), conducted by MoHFW with WHO India support, used which sampling design?",
    options: ["Convenience sampling of patients attending government health facilities", "Stratified multistage cluster sampling to generate nationally and regionally representative estimates", "Simple random sampling of households from voter registration lists", "Purposive sampling of high-NCD-burden districts identified from HMIS data"],
    answer: 1,
    explanation: "The National NCD Monitoring Survey (NNMS) used stratified multistage cluster sampling to generate nationally representative and regionally representative (four regional strata) estimates of NCD risk factor prevalence. The sampling design was aligned with WHO STEPS methodology to ensure international comparability. The survey covered both urban and rural strata, adults aged 18-69 years, and included questionnaire (Step 1), physical measurements (Step 2), and point-of-care biochemical tests (Step 3 simplified)."
  },
  {
    id: 42,
    question: "The Chennai Urban Rural Epidemiology Study (CURES) documented which important finding about diabetes-related complications in India?",
    options: ["Diabetic retinopathy prevalence is low in India due to protective dietary factors", "Approximately 17-20% of known diabetics in Chennai had diabetic peripheral neuropathy, indicating a high complication burden", "Diabetic nephropathy is rare in India compared to Western populations", "Cardiovascular complications of diabetes are less common in South Indians than North Indians"],
    answer: 1,
    explanation: "CURES documented high rates of diabetes complications in the Chennai population: approximately 17-20% of known diabetics had diabetic peripheral neuropathy, 5.6% had overt diabetic nephropathy, 17.6% had diabetic retinopathy, and 14.9% had electrocardiographic evidence of coronary artery disease. These findings established the high complication burden of diabetes in India even in an urban study population with access to healthcare, highlighting inadequate metabolic control."
  },
  {
    id: 43,
    question: "The Jaipur Heart Watch series of studies found which specific trend in cardiovascular risk factors in North India over successive cross-sectional surveys?",
    options: ["Declining cardiovascular risk factor prevalence in all age groups from 1990 to 2010", "Increasing prevalence of hypertension, dyslipidemia, and overweight/obesity over successive surveys (1990s to 2000s), especially in semi-urban populations", "Stable cardiovascular risk factor rates with no significant change between surveys", "Declining tobacco use compensating for rising metabolic risk factors with net neutral cardiovascular risk"],
    answer: 1,
    explanation: "The Jaipur Heart Watch studies (conducted in the 1990s and 2000s) documented increasing prevalence trends for cardiovascular risk factors including hypertension, dyslipidemia (high total cholesterol, high LDL-cholesterol, low HDL-cholesterol), overweight/obesity, and type 2 diabetes across successive cross-sectional surveys. This secular trend was particularly notable in semi-urban populations, suggesting that the cardiovascular risk factor epidemic was spreading beyond major metropolitan areas into smaller cities in North India."
  },
  {
    id: 44,
    question: "The INTERHEART study (global case-control study of first acute MI) identified nine modifiable risk factors. What proportion of population-attributable risk do these nine factors account for?",
    options: ["About 50% of acute MI risk globally", "About 72% of acute MI risk globally", "About 90% of acute MI risk globally", "About 99% of acute MI risk globally"],
    answer: 2,
    explanation: "The INTERHEART study, published in The Lancet (2004), found that nine modifiable risk factors (abnormal lipids, smoking, hypertension, diabetes, abdominal obesity, psychosocial factors, fruit and vegetable consumption, regular alcohol consumption, and regular physical activity) accounted for over 90% of the population-attributable risk for acute myocardial infarction globally. This finding was consistent across regions including South Asia, demonstrating that the vast majority of MI risk is preventable through modifiable risk factor control."
  },
  {
    id: 45,
    question: "Evidence for task-shifting in NCD care in low-resource settings most strongly supports which specific application?",
    options: ["Non-physician health workers performing surgical interventions for NCD complications", "Nurses and community health workers delivering hypertension screening, treatment initiation for uncomplicated hypertension, and medication adherence support with equivalent outcomes to physician-led care", "ASHA workers independently prescribing antidiabetic medications", "Task-shifting NCD diagnosis exclusively to mobile health technology without human health worker involvement"],
    answer: 1,
    explanation: "The strongest evidence for task-shifting in NCD care comes from studies demonstrating that nurses and trained community health workers can deliver hypertension screening, initiate treatment for uncomplicated hypertension using simple algorithms, and provide medication adherence support with blood pressure control rates equivalent to physician-led care. The HOPE-4 study, Hypertension Treatment in Stroke Prevention (THIRST) study, and India-specific community health worker hypertension programs provide this evidence, informing the Community Health Officer role at Ayushman Bharat-HWCs."
  },
  {
    id: 46,
    question: "The WHO mHealth for NCD prevention and control evidence synthesis found which applications to have the strongest evidence for effectiveness?",
    options: ["Social media campaigns for NCD awareness without behavior change components", "SMS-based medication adherence reminders and mobile phone-based cessation support (m-Cessation) showing significant improvements in medication adherence and tobacco quit rates", "Wearable device monitoring for all NCD risk factors in community settings", "Smartphone-based diagnosis of NCDs replacing laboratory investigations"],
    answer: 1,
    explanation: "WHO's mHealth evidence synthesis found strongest evidence for: SMS-based medication adherence reminders (increasing adherence to antihypertensives, antidiabetics by 10-20%), text/app-based tobacco cessation programs (m-Cessation) increasing quit rates by 30-50% compared to no support, and mobile phone-based counseling for NCD risk factor reduction. India's MoHFW implemented the m-Cessation program in partnership with WHO, using text messages to support tobacco quitting, reaching over 3 million registrants."
  },
  {
    id: 47,
    question: "ICMR's research funding priorities for NCDs in India have particularly focused on which research gap identified in national health research priority exercises?",
    options: ["Drug development for NCDs equivalent to Western pharmaceutical research", "Implementation research on how to scale up evidence-based NCD interventions in India's health system, and epidemiological research on NCD burden in underrepresented populations", "Basic science research on NCD genetics requiring high-technology genomics platforms", "Clinical trials of NCD treatments conducted primarily in tertiary hospitals"],
    answer: 1,
    explanation: "National health research priority exercises in India (including ICMR's 5-year research priority setting) have identified implementation research and epidemiological research in underrepresented populations as key NCD research gaps. Implementation research addresses how to effectively scale up evidence-based NCD interventions in India's health system context (rural, low-resource, large population). Epidemiological research priorities include NCD burden in rural populations, tribal communities, and north-eastern states where registry and survey data are sparse."
  },
  {
    id: 48,
    question: "The ICMR NCD risk factor surveys in India use which specific diagnostic criterion for defining hypertension at the population level in survey settings?",
    options: ["Single blood pressure measurement >140/90 mmHg on one occasion", "Average of three blood pressure readings >140/90 mmHg OR self-reported use of antihypertensive medication", "Ambulatory blood pressure monitoring showing 24-hour average >130/80 mmHg", "Physician-diagnosed hypertension based on clinical assessment only"],
    answer: 1,
    explanation: "ICMR NCD risk factor surveys and WHO STEPS surveys in India define hypertension as: average of the second and third of three sequential blood pressure measurements showing systolic BP >/=140 mmHg or diastolic BP >/=90 mmHg, OR currently taking antihypertensive medication (regardless of blood pressure level at the time of survey). Including medication users ensures those with controlled hypertension are not misclassified as normotensive, providing more accurate prevalence estimates for population planning."
  },
  {
    id: 49,
    question: "Health system strengthening for NCDs under NHM includes a specific initiative for NCD drug availability. Which program provides free essential NCD medicines at public facilities?",
    options: ["Pradhan Mantri Bhartiya Jan Aushadhi Pariyojana (PMBJP) only", "The Free Drugs Service Initiative under NHM, supplemented by state-level free drug schemes like Tamil Nadu Medical Services Corporation model", "PMJAY (Ayushman Bharat) insurance coverage for NCD drug costs", "Central procurement through HLL Lifecare for NCD drugs exclusively"],
    answer: 1,
    explanation: "The Free Drugs Service Initiative (FDSI) under NHM mandates that public health facilities (Sub-Centres, PHCs, CHCs, District Hospitals) provide essential medicines for NCDs free of cost. The Tamil Nadu Medical Services Corporation (TNMSC) model, which uses centralized procurement through competitive tendering to achieve lower prices and ensures regular supply, has been recognized as a best practice and adapted by several other states. PMBJP provides subsidized (not free) generic medicines through Jan Aushadhi stores, complementing the FDSI."
  },
  {
    id: 50,
    question: "The ICMR-PHFI-IHME GBD India 2017 state-level NCD analysis found that 'metabolic risk factors' (high systolic blood pressure, high fasting plasma glucose, high LDL cholesterol, high BMI) account for what proportion of the total NCD DALYs burden in India?",
    options: ["About 15% of total NCD DALYs", "About 25% of total NCD DALYs", "About 40% of total NCD DALYs", "About 55% of total NCD DALYs"],
    answer: 2,
    explanation: "GBD India 2017 analysis attributed approximately 40% of total NCD DALYs to metabolic risk factors including high systolic blood pressure (the single largest risk factor contributor), high fasting plasma glucose, high LDL cholesterol, and high BMI. Behavioral risk factors (tobacco, alcohol, physical inactivity, dietary risks) accounted for an additional substantial proportion. These findings support prioritizing metabolic risk factor control (hypertension, diabetes, dyslipidemia, obesity management) as the highest-yield strategy for NCD DALY reduction in India."
  },
];

export default questions;

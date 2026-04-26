const questions = [
  {
    id: 1,
    question: "According to the GOLD (Global Initiative for Chronic Obstructive Lung Disease) definition, COPD is characterized by persistent airflow limitation that is usually progressive and associated with an enhanced chronic inflammatory response. The post-bronchodilator spirometric criterion for COPD diagnosis is:",
    options: ["FEV1/FVC ratio < 0.8", "FEV1/FVC ratio < 0.7", "FEV1 < 80% of predicted", "FVC < 70% of predicted"],
    answer: 1,
    explanation: "GOLD defines COPD as post-bronchodilator FEV1/FVC ratio < 0.7 (fixed ratio). This ratio confirms persistent airflow limitation and is the standard spirometric criterion for COPD diagnosis globally, including in India. Using the fixed ratio (< 0.7) rather than the lower limit of normal (LLN) is the GOLD-recommended approach for clinical diagnosis."
  },
  {
    id: 2,
    question: "As per GOLD 2023 guidelines, a patient with COPD has post-bronchodilator FEV1/FVC < 0.7 and FEV1 of 45% of predicted. This patient would be classified as GOLD stage:",
    options: ["GOLD 1 (Mild)", "GOLD 2 (Moderate)", "GOLD 3 (Severe)", "GOLD 4 (Very Severe)"],
    answer: 2,
    explanation: "GOLD staging is based on post-bronchodilator FEV1 % predicted (with FEV1/FVC < 0.7 confirmed): GOLD 1 (Mild): FEV1 >= 80%; GOLD 2 (Moderate): 50% <= FEV1 < 80%; GOLD 3 (Severe): 30% <= FEV1 < 50%; GOLD 4 (Very Severe): FEV1 < 30%. An FEV1 of 45% falls in the 30-50% range, making this GOLD 3 (Severe)."
  },
  {
    id: 3,
    question: "In India, a major and unique risk factor for COPD in women in rural areas, distinct from the pattern seen in developed countries, is:",
    options: ["Cigarette smoking", "Biomass fuel combustion for cooking", "Occupational dust exposure in factories", "Outdoor air pollution from vehicles"],
    answer: 1,
    explanation: "In India, biomass fuel (wood, cow dung, crop residue) combustion for cooking and heating is a major risk factor for COPD in women, particularly in rural areas. Women spend long hours cooking in poorly ventilated kitchens, leading to high levels of indoor smoke exposure. This is a significant epidemiological difference from developed countries where cigarette smoking predominates as the primary COPD risk factor in both sexes."
  },
  {
    id: 4,
    question: "The Global Burden of Disease (GBD) study indicates that India has one of the highest burdens of COPD globally. The estimated number of COPD cases in India is approximately:",
    options: ["5 million", "15 million", "55 million", "100 million"],
    answer: 2,
    explanation: "India bears a disproportionately high burden of COPD. GBD estimates suggest approximately 55 million people in India are affected by COPD, making it one of the countries with the highest absolute number of COPD cases globally. This large burden is attributed to high rates of tobacco smoking, extensive biomass fuel use, occupational exposures, and a large population base."
  },
  {
    id: 5,
    question: "During an acute exacerbation of COPD (AECOPD), the first-line bronchodilator treatment that should be administered is:",
    options: ["Long-acting beta-2 agonist (LABA) inhaler", "Short-acting beta-2 agonist (SABA) with or without short-acting anticholinergic", "Intravenous aminophylline", "Oral montelukast"],
    answer: 1,
    explanation: "During AECOPD, short-acting bronchodilators (SABDs) are the mainstay of acute treatment. Short-acting beta-2 agonists (SABAs like salbutamol) with or without short-acting muscarinic antagonists (SAMAs like ipratropium) are recommended as first-line bronchodilators. Systemic corticosteroids (prednisolone 40 mg/day for 5 days) and antibiotics (if indicated by increased sputum purulence) are also key components of AECOPD management."
  },
  {
    id: 6,
    question: "A key spirometric feature that helps differentiate COPD from bronchial asthma is:",
    options: ["FEV1/FVC ratio < 0.7", "Significant bronchodilator reversibility (FEV1 increase > 12% and 200 mL post-bronchodilator)", "Low peak expiratory flow rate", "Reduced FVC"],
    answer: 1,
    explanation: "Significant bronchodilator reversibility (increase in FEV1 > 12% AND > 200 mL above baseline after bronchodilator) favors a diagnosis of asthma over COPD. In COPD, airflow limitation is not fully reversible - the FEV1/FVC ratio remains < 0.7 post-bronchodilator. In asthma, airflow limitation is typically variable and reversible. However, overlap (ACO - Asthma-COPD Overlap) can occur, especially in older smokers with history of asthma."
  },
  {
    id: 7,
    question: "The Global Asthma Network (GAN) Phase I study found that the prevalence of asthma symptoms in Indian children (6-7 years) was approximately:",
    options: ["2-3%", "6-7%", "12-15%", "20-25%"],
    answer: 1,
    explanation: "Studies including the Global Asthma Network data suggest asthma symptom prevalence in Indian children aged 6-7 years is approximately 6-7%, though there is considerable regional variation. India has a large absolute burden due to its population size. Urban children tend to have higher rates than rural children, attributed to outdoor air pollution, allergen exposure, and the 'hygiene hypothesis'."
  },
  {
    id: 8,
    question: "Which of the following is the most important modifiable risk factor for the development of bronchial asthma in genetically susceptible individuals?",
    options: ["Exposure to indoor allergens (house dust mite, cockroach, mold)", "Air pollution from industry", "Consumption of processed foods", "Physical inactivity"],
    answer: 0,
    explanation: "Indoor allergen exposure, particularly house dust mite (HDM), cockroach allergens, pet dander, and mold, is the most important modifiable environmental risk factor for asthma development and exacerbation in genetically susceptible individuals. In India, house dust mite is the predominant allergen. Sensitization to indoor allergens in early childhood is a key trigger for asthma development. Other risk factors include tobacco smoke, respiratory infections, obesity, and occupational exposures."
  },
  {
    id: 9,
    question: "A peak flow meter is used to measure peak expiratory flow rate (PEFR) in asthma management. The 'traffic light' system for asthma self-management uses PEFR % of personal best. A PEFR of 40-60% of personal best indicates:",
    options: ["Green zone - continue regular medications", "Yellow/Amber zone - increase reliever medication and seek medical advice", "Red zone - emergency treatment needed", "Blue zone - reduce medications"],
    answer: 1,
    explanation: "The traffic light asthma action plan uses PEFR % of personal best: Green zone (> 80%): well-controlled, continue regular medications; Yellow/Amber zone (50-80%): caution, increase reliever bronchodilator, consider oral corticosteroids, seek medical advice; Red zone (< 50%): emergency, use reliever immediately, seek urgent medical care or go to hospital. A PEFR of 40-60% falls in the amber/yellow zone requiring increased treatment and medical consultation."
  },
  {
    id: 10,
    question: "Pulmonary rehabilitation (PR) in COPD is a comprehensive intervention. The minimum duration recommended for a pulmonary rehabilitation program to achieve clinically meaningful improvements in exercise capacity and quality of life is:",
    options: ["2 weeks", "4 weeks", "6-8 weeks", "12 months"],
    answer: 2,
    explanation: "GOLD guidelines recommend that pulmonary rehabilitation programs should be at least 6-8 weeks in duration (with some evidence suggesting 8 weeks provides better outcomes than 4 weeks) to achieve clinically meaningful improvements in exercise capacity (6-minute walk distance) and health-related quality of life. PR programs typically include exercise training, education, nutritional counseling, and psychosocial support. PR is one of the most cost-effective interventions in COPD management."
  },
  {
    id: 11,
    question: "Indoor air pollution from biomass fuel combustion in India is measured by a key particulate matter indicator. The PM2.5 concentration in kitchens using biomass fuels in India can exceed WHO guidelines by how much?",
    options: ["2-5 times the WHO guideline of 15 ug/m3 annual mean", "10-50 times the WHO guideline", "Equal to WHO guideline levels", "Below WHO guideline levels"],
    answer: 1,
    explanation: "Studies from India have consistently shown that PM2.5 concentrations in kitchens using biomass fuels (wood, cow dung, crop residue) can reach 500-2000 ug/m3 during cooking, which is 10-50 times or more above the WHO annual mean PM2.5 guideline of 5 ug/m3 (revised 2021). This massive exposure contributes to COPD, acute lower respiratory infections, lung cancer, and cardiovascular disease. The Pradhan Mantri Ujjwala Yojana (PMUY) aims to provide LPG connections to reduce biomass exposure."
  },
  {
    id: 12,
    question: "Occupational COPD is an important entity. Which of the following occupational exposures is most strongly associated with the development of occupational COPD in India?",
    options: ["Keyboard and computer use", "Coal dust and silica dust exposure in mining", "Fluorescent lighting exposure", "Air-conditioned office environments"],
    answer: 1,
    explanation: "Coal dust and silica dust exposure in mining (coal miners, stone quarry workers, sandblasters) is strongly associated with occupational COPD in India. Other significant occupational causes include cotton dust (byssinosis in textile workers), grain dust, cadmium fumes, isocyanates, and biomass/wood dust. The Ministry of Labour estimates millions of Indian workers are exposed to occupational respiratory hazards. Occupational COPD may account for 10-20% of all COPD in industrialized populations."
  },
  {
    id: 13,
    question: "According to Kidney Disease: Improving Global Outcomes (KDIGO) guidelines, Chronic Kidney Disease (CKD) is defined as abnormalities of kidney structure or function, present for more than:",
    options: ["1 month", "2 months", "3 months", "6 months"],
    answer: 2,
    explanation: "KDIGO defines CKD as abnormalities of kidney structure or function, present for more than 3 months, with implications for health. The 3-month threshold distinguishes CKD from acute kidney injury (AKI). CKD diagnosis requires either: eGFR < 60 mL/min/1.73m2, OR markers of kidney damage (albuminuria, urine sediment abnormalities, imaging abnormalities, history of kidney transplant), present for more than 3 months."
  },
  {
    id: 14,
    question: "KDIGO classifies CKD into stages based on GFR. A patient with eGFR of 25 mL/min/1.73m2 would be classified as CKD stage:",
    options: ["Stage 2 (eGFR 60-89)", "Stage 3b (eGFR 30-44)", "Stage 4 (eGFR 15-29)", "Stage 5 (eGFR < 15)"],
    answer: 2,
    explanation: "KDIGO GFR-based CKD staging: Stage 1: eGFR >= 90 (with kidney damage markers); Stage 2: eGFR 60-89; Stage 3a: eGFR 45-59; Stage 3b: eGFR 30-44; Stage 4: eGFR 15-29; Stage 5: eGFR < 15 (kidney failure/ESRD). An eGFR of 25 mL/min/1.73m2 falls in Stage 4, which is severely decreased kidney function and the stage where preparation for renal replacement therapy begins."
  },
  {
    id: 15,
    question: "In India, the two leading risk factors responsible for the majority of CKD cases requiring dialysis are:",
    options: ["Glomerulonephritis and polycystic kidney disease", "Diabetes mellitus and hypertension", "Obstructive uropathy and recurrent urinary tract infections", "Analgesic nephropathy and herbal medicine use"],
    answer: 1,
    explanation: "Diabetes mellitus and hypertension are the two leading causes of CKD and ESRD in India, together accounting for approximately 40-50% of all cases requiring renal replacement therapy (dialysis/transplant). The rising prevalence of both conditions in India is driving the epidemic of CKD. Diabetic nephropathy is the most common single cause in urban India, while hypertensive nephrosclerosis is also a major contributor. CKD burden in India is estimated at 17% of the adult population (SEEK study)."
  },
  {
    id: 16,
    question: "The Indian CKD Registry data and studies like SEEK (Screening and Early Evaluation of Kidney Disease) suggest the prevalence of CKD in India is approximately:",
    options: ["1-2% of the adult population", "5-8% of the adult population", "17% of the adult population", "30% of the adult population"],
    answer: 2,
    explanation: "The SEEK (Screening and Early Evaluation of Kidney Disease) study, one of the largest CKD epidemiology studies from India, found a CKD prevalence of approximately 17.2% in the Indian adult population. This high prevalence is attributed to high rates of diabetes, hypertension, and other risk factors. India has an estimated 7.85 million people with CKD Stage 5 (ESRD) requiring renal replacement therapy, but only a fraction receive adequate treatment due to cost barriers."
  },
  {
    id: 17,
    question: "Regarding renal replacement therapy (RRT) in India, the primary barrier preventing patients with ESRD from receiving adequate dialysis or transplantation is:",
    options: ["Shortage of dialysis machines", "High cost of treatment and lack of universal health coverage", "Lack of trained nephrologists in all districts", "Inadequate ESRD patient education"],
    answer: 1,
    explanation: "The primary barrier to RRT in India is the high cost of treatment and absence of universal health coverage. Hemodialysis costs approximately Rs. 15,000-25,000 per month, and kidney transplantation costs Rs. 5-10 lakhs or more. Only a small fraction of ESRD patients can afford long-term dialysis privately. Government programs like Pradhan Mantri National Dialysis Programme (PMNDP) under NHM aim to provide free dialysis in district hospitals, but coverage remains insufficient for the large burden."
  },
  {
    id: 18,
    question: "The most effective strategy for primary prevention of CKD at the population level in India, targeting the two leading risk factors, is:",
    options: ["Universal kidney function screening in all adults above 18 years", "Prevention and optimal control of diabetes mellitus and hypertension through lifestyle modification and medication adherence", "Widespread use of herbal kidney-protective supplements", "Restriction of NSAID use only"],
    answer: 1,
    explanation: "Since diabetes mellitus and hypertension are the two leading causes of CKD in India, prevention and optimal control of these conditions is the most effective population-level CKD prevention strategy. This includes: blood pressure control to < 130/80 mmHg (with RAS blockade - ACE inhibitors/ARBs preferred), glycemic control (HbA1c < 7%), lifestyle modification (salt restriction, weight management, physical activity, smoking cessation), and ensuring medication adherence. Early detection through urine albumin-to-creatinine ratio (UACR) screening in high-risk groups is also important."
  },
  {
    id: 19,
    question: "Osteoporosis is characterized by reduced bone mineral density (BMD) and increased fracture risk. Osteoporosis is defined by a T-score of:",
    options: ["T-score >= -1.0 (normal)", "T-score between -1.0 and -2.5 (osteopenia)", "T-score <= -2.5", "T-score <= -3.0"],
    answer: 2,
    explanation: "WHO defines osteoporosis by dual-energy X-ray absorptiometry (DXA) T-score: Normal: T-score >= -1.0; Osteopenia (low bone mass): T-score between -1.0 and -2.5; Osteoporosis: T-score <= -2.5; Severe osteoporosis: T-score <= -2.5 with one or more fragility fractures. In India, osteoporosis is common due to widespread vitamin D deficiency, calcium-poor diets, and low peak bone mass. Post-menopausal women and elderly men are at highest risk."
  },
  {
    id: 20,
    question: "Sickle cell disease (SCD) has a significant burden in tribal populations of India. Which region of India has the highest prevalence of sickle cell trait and disease?",
    options: ["Northern India (Punjab, Haryana, UP)", "Southern India (Kerala, Tamil Nadu)", "Central and Western tribal belts (Odisha, Chhattisgarh, Jharkhand, MP, Gujarat, Maharashtra tribals)", "North-Eastern states (Assam, Meghalaya)"],
    answer: 2,
    explanation: "Sickle cell disease (homozygous HbSS) and sickle cell trait (HbAS) are highly prevalent in tribal populations of central and western India, particularly in Odisha, Chhattisgarh, Jharkhand, Madhya Pradesh, Gujarat (particularly Bharuch district), and Maharashtra (Vidarbha region). Prevalence of sickle cell trait in some tribal groups can be 5-40%. The National Sickle Cell Anaemia Elimination Mission was launched in 2023 to eliminate SCD by 2047, focusing on tribal areas."
  },
  {
    id: 21,
    question: "Beta-thalassemia major in India: the estimated number of children born with beta-thalassemia major each year in India is approximately:",
    options: ["100-200 children/year", "1,000 children/year", "10,000-12,000 children/year", "50,000 children/year"],
    answer: 2,
    explanation: "India has one of the world's highest burdens of thalassemia. Approximately 10,000-12,000 children with beta-thalassemia major are born each year in India. The carrier (trait) frequency of beta-thalassemia in India is 3-4% in the general population, with higher frequencies in certain communities (Sindhis, Punjabis, Gujaratis, Bengalis). Premarital screening, prenatal diagnosis, and pre-implantation genetic diagnosis are preventive strategies. India has an estimated 1-1.5 lakh patients with thalassemia major currently."
  },
  {
    id: 22,
    question: "Dental fluorosis in India is caused by excess fluoride in drinking water. The WHO-recommended maximum permissible limit of fluoride in drinking water to prevent dental fluorosis while ensuring adequate protection against dental caries is:",
    options: ["0.5 mg/L", "1.0 mg/L", "1.5 mg/L", "4.0 mg/L"],
    answer: 2,
    explanation: "WHO recommends a maximum fluoride concentration of 1.5 mg/L in drinking water. The Bureau of Indian Standards (BIS) also specifies 1.5 mg/L as the permissible limit. At levels < 0.5 mg/L, dental caries increases; at 0.5-1.5 mg/L, optimal protection against caries with minimal fluorosis; at > 1.5 mg/L, dental fluorosis risk increases; at > 4 mg/L, skeletal fluorosis can occur. India has 65 million people exposed to excess fluoride (> 1.5 mg/L), particularly in Rajasthan, Gujarat, Andhra Pradesh, Telangana, and parts of Tamil Nadu."
  },
  {
    id: 23,
    question: "Folic acid supplementation for prevention of neural tube defects (NTDs) is a key public health intervention. The recommended dose of folic acid for all women of reproductive age for NTD prevention is:",
    options: ["0.1 mg (100 mcg) daily", "0.4 mg (400 mcg) daily", "4 mg (4000 mcg) daily for high-risk women", "10 mg daily"],
    answer: 1,
    explanation: "WHO and national guidelines recommend 0.4 mg (400 mcg) of folic acid daily for all women of reproductive age, ideally starting at least 1 month before conception and continuing through the first trimester (12 weeks). This reduces NTD risk (spina bifida, anencephaly) by up to 70%. Women with a previous NTD-affected pregnancy should take 4 mg/day (high-dose). India's antenatal care program includes folic acid supplementation under the Mother and Child Tracking System and Janani Suraksha Yojana."
  },
  {
    id: 24,
    question: "The Carrea of Rheumatoid Arthritis (RA) in India: Rheumatoid Arthritis is an autoimmune inflammatory joint disease. The prevalence of RA in India is approximately:",
    options: ["0.05% of population", "0.5-1% of population", "5% of population", "10% of population"],
    answer: 1,
    explanation: "Rheumatoid arthritis affects approximately 0.5-1% of the Indian adult population (similar to global prevalence of 0.5-1%). In India, it predominantly affects women (female to male ratio 3:1), with peak onset in the 4th-5th decade. RA causes significant disability, reduced work productivity, and impaired quality of life. Early aggressive treatment with DMARDs (disease-modifying antirheumatic drugs), particularly methotrexate, is the cornerstone of management to prevent joint destruction."
  },
  {
    id: 25,
    question: "According to the Global Burden of Disease (GBD) study, depression is the leading cause of disability globally. The metric used to measure this disability burden is:",
    options: ["Case fatality rate (CFR)", "Years Lived with Disability (YLDs)", "Disability Adjusted Life Years (DALYs) from mortality only", "Incidence rate per 100,000 population"],
    answer: 1,
    explanation: "Depression is the leading single cause of Years Lived with Disability (YLDs) globally. YLDs measure the years of healthy life lost due to living with a health condition (as opposed to YLLs - years of life lost due to premature death). DALYs = YLLs + YLDs. Depression contributes enormously to YLDs because of its high prevalence and the substantial functional impairment it causes. The GBD 2019 study ranked major depressive disorder as the third largest contributor to DALYs globally."
  },
  {
    id: 26,
    question: "The National Mental Health Survey (NMHS) 2016 of India, the largest ever mental health epidemiology survey in India, found that the prevalence of mental disorders (excluding tobacco use disorders) among Indian adults was approximately:",
    options: ["1-2%", "5-7%", "10-13.7%", "25-30%"],
    answer: 2,
    explanation: "The NMHS 2016, conducted across 12 states covering approximately 34,800 adults, found the prevalence of mental disorders (excluding tobacco use disorders) to be 10.6% (or 13.7% including tobacco use). Common mental disorders (depression, anxiety) accounted for the majority. The survey found: depression 2.7%, anxiety disorders 3.1%, alcohol use disorder 4.6%, bipolar disorder 0.3%, schizophrenia and other psychoses 0.9%. NMHS highlighted the enormous treatment gap and urban-rural disparities in mental healthcare."
  },
  {
    id: 27,
    question: "The treatment gap for mental illness in India, as highlighted by the NMHS 2016 and other studies, refers to the proportion of people with mental disorders who do not receive treatment. The treatment gap in India is estimated to be:",
    options: ["20-30%", "40-50%", "70-80% or more", "95% or more"],
    answer: 2,
    explanation: "The treatment gap for mental illness in India is enormous, estimated at 70-80% or higher for most mental disorders. NMHS 2016 found that only 13.3% of persons with mental disorders had received any treatment in the past 12 months, meaning approximately 86.7% did not receive treatment. For severe mental disorders like schizophrenia and bipolar disorder, treatment gap is 70-80%; for common mental disorders (depression, anxiety), it is even higher. Key barriers include stigma, lack of awareness, shortage of mental health professionals, poor access, and cost."
  },
  {
    id: 28,
    question: "The District Mental Health Programme (DMHP) was launched in India in 1996 as part of the National Mental Health Programme (NMHP). The DMHP primarily aims to:",
    options: ["Establish large psychiatric hospitals in all districts", "Integrate mental health services into the general health services at the district level", "Provide free psychiatric medications only at government medical colleges", "Train traditional healers as mental health professionals"],
    answer: 1,
    explanation: "DMHP, launched in Bellary district of Karnataka in 1996, aims to integrate mental health services into existing general health services at the district level. Key components include: training of general health staff (doctors, nurses, ANMs) in mental health; outpatient mental health services at district hospitals; provision of essential psychiatric drugs at PHCs; community awareness programs; and referral linkages. NMHP (1982) provided the national framework, while DMHP operationalized it at the district level. Currently DMHP is implemented in all 717 districts of India."
  },
  {
    id: 29,
    question: "The Mental Healthcare Act 2017 (MHA 2017) of India represents a landmark legislation for mental health. Which of the following is a key provision of MHA 2017?",
    options: ["Mandatory hospitalization for all persons with severe mental illness", "Right to access mental healthcare and treatment at government hospitals free of cost for persons below poverty line", "Criminalization of attempted suicide", "Prohibition of community mental health services"],
    answer: 1,
    explanation: "MHA 2017 (replaced MHA 1987) has several landmark provisions: (1) Right to access mental healthcare and treatment at affordable cost or free for BPL individuals; (2) Decriminalization of attempted suicide (Section 309 IPC effectively decriminalized); (3) Advance directives (nominated representative system); (4) Prohibition of electroconvulsive therapy (ECT) without anesthesia; (5) Right to equality and non-discrimination; (6) Mental illness defined broadly. MHA 2017 shifted from custodial to rights-based approach in mental healthcare aligned with UN Convention on Rights of Persons with Disabilities (CRPD)."
  },
  {
    id: 30,
    question: "According to NCRB (National Crime Records Bureau) data on suicides in India, which state consistently reports the highest absolute number of suicides annually?",
    options: ["Uttar Pradesh", "Maharashtra", "Tamil Nadu or Maharashtra (varying by year)", "Kerala"],
    answer: 2,
    explanation: "NCRB data shows that Maharashtra and Tamil Nadu consistently rank highest in absolute number of suicides in India. In recent years (NCRB 2022 data), Maharashtra reported the highest number followed by Tamil Nadu and Madhya Pradesh. However, in terms of suicide RATE per 100,000 population, smaller states like Sikkim, Andaman & Nicobar, Puducherry, and Chhattisgarh have had higher rates. India's overall suicide rate is approximately 12-13 per 100,000 population. Farmers/agricultural workers, daily wage workers, and students are vulnerable groups."
  },
  {
    id: 31,
    question: "NCRB Accidental Deaths & Suicides in India (ADSI) 2021 data shows that the most common method of suicide in India is:",
    options: ["Firearms", "Poisoning (agricultural pesticides)", "Hanging", "Drowning"],
    answer: 2,
    explanation: "According to NCRB data, hanging is consistently the most common method of suicide in India, accounting for approximately 45-50% of all suicides. The second most common method is poisoning (predominantly organophosphate pesticide ingestion in agricultural communities), followed by drowning, self-immolation, and jumping from buildings. Restricting access to means (particularly organophosphate pesticides and medications) is a key suicide prevention strategy. WHO recommends means restriction as one of the most evidence-based suicide prevention interventions."
  },
  {
    id: 32,
    question: "Alcohol Use Disorder (AUD) epidemiology in India: The NMHS 2016 found that alcohol use disorder was the most common mental disorder in India excluding tobacco. The prevalence of alcohol use disorder in Indian adults is approximately:",
    options: ["0.5%", "2.3%", "4.6%", "10%"],
    answer: 2,
    explanation: "NMHS 2016 found that alcohol use disorder (including harmful use and dependence) had a prevalence of 4.6% among Indian adults, making it the single most common mental/substance use disorder when tobacco use was excluded. Alcohol use is predominantly a male problem in India (male prevalence ~9.1%, female ~0.5%). Alcohol is associated with liver cirrhosis, road traffic accidents, domestic violence, and other NCDs. India's per capita alcohol consumption has been rising, particularly among youth."
  },
  {
    id: 33,
    question: "In the context of opioid use disorder in India, which state has been identified as having the highest burden of opioid/heroin use, particularly along drug trafficking routes?",
    options: ["Rajasthan", "Punjab", "Bihar", "West Bengal"],
    answer: 1,
    explanation: "Punjab has the highest documented burden of opioid use disorder in India, attributed to its proximity to the 'Golden Crescent' drug trafficking route (Afghanistan-Pakistan-India). Studies estimate 2-3% of Punjab's population may be dependent on opioids (heroin, pharmaceutical opioids). The problem is compounded by unemployment, migration, and easy availability. The 2019 Punjab Opioid Dependence Survey estimated 8.8 lakh persons dependent on opioids in Punjab. Opioid Substitution Therapy (OST) with buprenorphine-naloxone is the evidence-based treatment for opioid dependence."
  },
  {
    id: 34,
    question: "Epilepsy epidemiology in India: The prevalence of epilepsy in India is approximately 5.59 per 1,000 population. The treatment gap for epilepsy (proportion of those with active epilepsy not receiving treatment) in rural India is estimated to be:",
    options: ["10-20%", "30-40%", "50-60%", "75-90%"],
    answer: 3,
    explanation: "The treatment gap for epilepsy in rural India is alarmingly high at 75-90%. Studies from rural India have consistently shown that the vast majority of people with epilepsy (PWE) do not receive treatment. Key factors include: poverty and inability to afford medications, stigma and discrimination, lack of awareness about epilepsy as a treatable neurological condition, shortage of neurologists (India has only ~1,500 neurologists for 1.4 billion people), and preference for faith healers. Community-based programs using generic antiepileptic drugs (phenobarbitone, carbamazepine) distributed through PHCs have been shown to reduce the treatment gap."
  },
  {
    id: 35,
    question: "According to the Alzheimer's and Related Disorders Society of India (ARDSI), the estimated number of people with dementia in India is approximately:",
    options: ["1 million", "5.3 million", "15 million", "30 million"],
    answer: 1,
    explanation: "ARDSI and GBD estimates indicate approximately 5.3 million people are living with dementia in India (as of recent estimates), with Alzheimer's disease being the most common type (60-70% of cases). Projections suggest this number will double every 20 years due to India's ageing population. Risk factors include age, low education, hypertension, diabetes, and lack of cognitive engagement. India lacks a national dementia policy, and awareness about dementia remains extremely low, with most cases undiagnosed. Dementia contributes significantly to the growing NCD burden in India."
  },
  {
    id: 36,
    question: "Schizophrenia affects approximately what percentage of the global population, and what is the primary evidence-based treatment?",
    options: ["0.1-0.2% globally; psychotherapy alone", "0.5-1% globally; antipsychotic medications combined with psychosocial interventions", "5% globally; electroconvulsive therapy (ECT)", "10% globally; long-term hospitalization"],
    answer: 1,
    explanation: "Schizophrenia has a global lifetime prevalence of approximately 0.5-1%, with similar rates across countries and cultures. NMHS 2016 found a prevalence of 0.9% for schizophrenia and other psychoses in India. First-line treatment consists of antipsychotic medications (second-generation/atypical antipsychotics preferred for new-onset cases) combined with psychosocial interventions (family psychoeducation, cognitive behavioral therapy, vocational rehabilitation). The treatment gap for schizophrenia in India is 70-80%, meaning most patients do not receive adequate treatment."
  },
  {
    id: 37,
    question: "Collaborative/Integrated care models for mental health in primary care have been shown to be effective. In India, the mhGAP (Mental Health Gap Action Programme) Intervention Guide by WHO has been adapted for use in:",
    options: ["Only tertiary care hospitals", "Primary and secondary healthcare settings by non-specialist health workers", "Community mental health workers only with no medical training", "Exclusively private psychiatric clinics"],
    answer: 1,
    explanation: "WHO's mhGAP Intervention Guide (mhGAP-IG) is specifically designed for use by non-specialist health workers in primary and secondary care settings in low- and middle-income countries (LMICs). In India, it has been adapted under DMHP/NMHP to train general practitioners, medical officers, nurses, and ANMs at PHCs and CHCs to identify and manage priority mental, neurological, and substance use (MNS) conditions. Priority conditions include depression, psychosis, epilepsy, alcohol/substance use disorders, suicide risk, and child/adolescent mental health problems."
  },
  {
    id: 38,
    question: "India has one of the world's highest burdens of road traffic injuries (RTIs). According to the Ministry of Road Transport and Highways (MoRTH) data, the approximate number of road traffic deaths in India per year is:",
    options: ["30,000-40,000", "80,000-90,000", "1,50,000-1,80,000", "5,00,000"],
    answer: 2,
    explanation: "MoRTH data consistently shows approximately 1,50,000-1,80,000 road traffic deaths in India annually, making India one of the countries with the highest absolute road traffic mortality globally. India accounts for about 11% of global road accident deaths while having only 2% of world's vehicles - indicating extremely poor road safety. Two-wheelers are involved in the majority of fatalities. The Sustainable Development Goal (SDG) 3.6 targets halving global road traffic deaths by 2030. India's National Road Safety Policy and Decade of Action 2021-2030 are key initiatives."
  },
  {
    id: 39,
    question: "The National Road Safety Policy of India emphasizes the 'Safe System Approach' to road safety. The four pillars of the Safe System Approach are:",
    options: ["Safe roads, safe vehicles, safe speeds, and safe road users", "Traffic laws, vehicle inspection, driver licensing, and road construction", "Police enforcement, ambulance services, hospital trauma care, and insurance", "Speed cameras, breathalyzer tests, seatbelt checks, and helmet laws"],
    answer: 0,
    explanation: "The Safe System Approach to road safety, adopted by WHO and incorporated in India's road safety frameworks, is built on four pillars: (1) Safe Roads - road design and infrastructure that protects users from errors; (2) Safe Vehicles - vehicles with safety features (airbags, ABS, ESC); (3) Safe Speeds - speed limits that match human injury tolerance (30 km/h in urban areas near schools/pedestrians); (4) Safe Road Users - education, enforcement, and behavior change. This approach acknowledges that humans make errors and the road system must be designed to prevent fatalities even when errors occur."
  },
  {
    id: 40,
    question: "Drowning is a significant preventable cause of death in India, particularly among children. Which age group is most vulnerable to drowning deaths in India?",
    options: ["Infants (0-1 year)", "Children aged 1-14 years", "Young adults aged 25-34 years", "Elderly aged > 65 years"],
    answer: 1,
    explanation: "Children aged 1-14 years are the most vulnerable age group for drowning deaths in India and globally. In India, drowning is estimated to cause approximately 36,000-40,000 deaths annually, with children disproportionately affected. Risk factors include proximity to open water bodies (ponds, wells, rivers, waterlogged fields), lack of swimming ability, inadequate supervision, and lack of barriers around water. WHO Global Report on Drowning (2014) recommends: installing barriers around water, teaching children to swim, training bystanders in resuscitation, and setting safe swimming areas."
  },
  {
    id: 41,
    question: "Falls are the leading cause of injury-related mortality and morbidity in the elderly in India. The most important modifiable risk factor for falls in the elderly is:",
    options: ["Female sex", "Polypharmacy (taking 5 or more medications)", "Living in urban areas", "Having a college education"],
    answer: 1,
    explanation: "Polypharmacy (taking 5 or more medications simultaneously) is a major and modifiable risk factor for falls in the elderly. Many medications commonly used in older adults - sedatives, hypnotics, antidepressants, antihypertensives, and antidiabetics - can cause orthostatic hypotension, dizziness, sedation, and impaired balance, increasing fall risk. Other key modifiable risk factors include impaired vision, muscle weakness, environmental hazards (loose rugs, poor lighting, lack of grab bars), cognitive impairment, and vestibular disorders. Comprehensive fall prevention programs include exercise (balance training, tai chi), medication review, vision correction, and home modification."
  },
  {
    id: 42,
    question: "Violence against women (VAW) in India: The National Family Health Survey (NFHS-5) 2019-21 found that the proportion of married women aged 18-49 who experienced spousal violence (physical, sexual, or emotional violence) in India is approximately:",
    options: ["5-8%", "18-29%", "45-60%", "70-80%"],
    answer: 1,
    explanation: "NFHS-5 (2019-21) found that 29.3% of ever-married women aged 18-49 in India had experienced spousal violence (physical, sexual, or emotional) since age 15. This indicates nearly 1 in 3 married Indian women experiences intimate partner violence (IPV). The rate has declined from 33.3% in NFHS-4 (2015-16). States with highest rates included Bihar (40%), UP (38%), and Manipur (48%). The Protection of Women from Domestic Violence Act 2005 (PWDVA) provides civil remedies, while Section 498A IPC addresses cruelty by husband/relatives."
  },
  {
    id: 43,
    question: "Burn injuries in India: India has a high burden of burn injuries, particularly affecting women. The major cause of burn injuries and burn-related deaths in women in India is:",
    options: ["Industrial accidents", "Burns from fireworks during festivals", "Kitchen fire accidents (cooking-related burns with kerosene stoves and open fires)", "Electrical burns from power lines"],
    answer: 2,
    explanation: "Kitchen fire accidents (cooking-related burns) are the most common cause of severe burns and burn-related deaths in Indian women. Kerosene stoves (which are unstable and prone to explosions) and open cooking fires (chulhas) are major risk factors. India is estimated to have 700,000-1,000,000 burn injuries annually, with women aged 15-35 most affected. Additionally, a proportion of 'kitchen fires' in women may represent stove dowry deaths/attempts - a medico-legal concern. Transition to LPG/electric cooking (via PMUY) is a key preventive strategy."
  },
  {
    id: 44,
    question: "Occupational injuries in India are a major public health concern. Which industry sector has the highest rate of occupational fatalities and injuries in India?",
    options: ["Information technology (IT) sector", "Construction industry", "Retail and hospitality sector", "Financial services sector"],
    answer: 1,
    explanation: "The construction industry consistently reports the highest rates of occupational fatalities and serious injuries in India. Falls from height, being struck by falling objects, electrocution, and machinery accidents are the leading causes of construction fatalities. India's construction sector employs approximately 51 million workers, most in the informal sector without social security or workers' compensation coverage. Other high-risk industries include mining, manufacturing, and agriculture. The Factories Act 1948, Building and Other Construction Workers Act 1996, and Employees' State Insurance Act 1948 provide occupational safety frameworks, but enforcement is weak."
  },
  {
    id: 45,
    question: "NFHS-5 (2019-21) data on overweight and obesity in India shows that the prevalence of overweight and obesity (BMI >= 25 kg/m2) among women aged 15-49 years in India is approximately:",
    options: ["5-8%", "15-20%", "24%", "40%"],
    answer: 2,
    explanation: "NFHS-5 (2019-21) found that 24% of women and 22.9% of men aged 15-49 in India were overweight or obese (BMI >= 25 kg/m2). This represents a significant increase from NFHS-4 (20.6% women, 18.9% men). Importantly, India uses Asian BMI cutoffs where overweight is BMI 23-24.9 and obesity is BMI >= 25 kg/m2, as Asian populations have higher metabolic risk at lower BMI. Urban residents have significantly higher obesity rates than rural residents. Kerala, Goa, Andaman & Nicobar Islands, and Puducherry have the highest obesity prevalence."
  },
  {
    id: 46,
    question: "Childhood obesity trends in India: The Comprehensive National Nutrition Survey (CNNS) 2016-18 found overweight/obesity prevalence in school-going children aged 5-9 years. What trend best describes childhood obesity in India?",
    options: ["Childhood obesity is declining due to government nutrition programs", "Childhood obesity is a growing concern primarily in urban areas and higher socioeconomic groups, increasing over time", "Childhood obesity prevalence is equal between urban and rural children", "Childhood obesity is not a significant public health concern in India"],
    answer: 1,
    explanation: "CNNS 2016-18 found overweight/obesity prevalence of 4% among children aged 5-9 years, with significant urban-rural disparities (urban children having 2-3 times higher rates than rural). Childhood obesity in India is increasing, particularly in urban areas and among higher socioeconomic strata, driven by: consumption of ultra-processed foods and sugar-sweetened beverages, increased screen time, reduced physical activity, and sedentary lifestyles. The double burden of malnutrition (coexistence of undernutrition and overnutrition) is India's major nutritional challenge. Childhood obesity increases risk of adult obesity, T2DM, hypertension, and cardiovascular disease."
  },
  {
    id: 47,
    question: "Metabolic syndrome is defined by the presence of multiple cardiometabolic risk factors. Using the Joint Interim Statement (JIS) 2009 definition (harmonized criteria), metabolic syndrome requires at least 3 of 5 criteria. Which combination correctly identifies 3 of the 5 criteria for metabolic syndrome?",
    options: ["Elevated fasting glucose (>= 100 mg/dL), elevated total cholesterol (>= 200 mg/dL), and hypertension (>= 130/85 mmHg)", "Central obesity (waist circumference with population-specific cut-offs), elevated triglycerides (>= 150 mg/dL), and reduced HDL cholesterol", "High LDL cholesterol (>= 160 mg/dL), elevated creatinine, and obesity (BMI >= 30)", "Elevated HbA1c (>= 6.5%), proteinuria, and impaired fasting glucose"],
    answer: 1,
    explanation: "JIS 2009 harmonized criteria for metabolic syndrome requires >= 3 of 5 criteria: (1) Central obesity: elevated waist circumference using population-specific cut-offs (for South Asians: men >= 90 cm, women >= 80 cm); (2) Elevated triglycerides: >= 150 mg/dL; (3) Reduced HDL-cholesterol: < 40 mg/dL (men), < 50 mg/dL (women); (4) Elevated blood pressure: >= 130/85 mmHg or on treatment; (5) Elevated fasting glucose: >= 100 mg/dL or on treatment. Studies suggest metabolic syndrome prevalence in India is 25-35%, with higher rates in urban areas and women."
  },
  {
    id: 48,
    question: "Bariatric surgery in India: According to the Federation of Indian Chambers of Commerce & Industry (FICCI) and clinical guidelines, which BMI threshold makes an Indian patient eligible for bariatric surgery in the presence of obesity-related comorbidities (diabetes, hypertension)?",
    options: ["BMI >= 25 kg/m2", "BMI >= 30 kg/m2 (general global threshold)", "BMI >= 32.5 kg/m2 with comorbidities (Asian-adapted lower threshold)", "BMI >= 40 kg/m2 only"],
    answer: 2,
    explanation: "Asian bariatric surgery guidelines (endorsed by IFSO - International Federation for the Surgery of Obesity) recommend lower BMI thresholds for Asians compared to Western guidelines: BMI >= 37.5 kg/m2 without comorbidities; BMI >= 32.5 kg/m2 with major comorbidities (type 2 diabetes, hypertension, OSA, etc.); consideration at BMI >= 27.5 kg/m2 for inadequately controlled type 2 diabetes alone. These lower thresholds recognize that Asian populations develop obesity-related metabolic complications at lower BMI values. Roux-en-Y gastric bypass and sleeve gastrectomy are the most common procedures performed in India."
  },
  {
    id: 49,
    question: "WHO recommends a minimum amount of moderate-intensity physical activity per week for health benefits in adults. The recommended minimum is:",
    options: ["75 minutes of moderate-intensity activity per week", "150-300 minutes of moderate-intensity aerobic activity per week", "30 minutes only on weekends (60 minutes total)", "500 minutes of vigorous activity per week"],
    answer: 1,
    explanation: "WHO Global Guidelines on Physical Activity and Sedentary Behaviour (2020) recommend: Adults (18-64 years): 150-300 minutes of moderate-intensity aerobic activity, OR 75-150 minutes of vigorous-intensity aerobic activity, OR an equivalent combination per week, plus muscle-strengthening activities on 2 or more days per week. Children/adolescents: 60 minutes of moderate-to-vigorous activity daily. India's National Programme for Prevention and Control of NCDs (NP-NCD) promotes physical activity through initiatives like 'Fit India Movement' and 'Khelo India'. Less than 25% of Indian adults meet physical activity recommendations."
  },
  {
    id: 50,
    question: "The impact of sedentary lifestyle and excessive screen time on health has been recognized as a growing public health concern in India. Excessive screen time in children is associated with all of the following EXCEPT:",
    options: ["Increased risk of obesity and metabolic syndrome", "Sleep disturbances and reduced sleep duration", "Improved academic performance and cognitive development", "Increased risk of depression, anxiety, and social isolation"],
    answer: 2,
    explanation: "Excessive screen time (defined as > 2 hours/day for children aged 2-18 years by various guidelines) is associated with: increased obesity risk (sedentary behavior + exposure to food advertising); sleep disturbances (blue light suppresses melatonin); depression, anxiety, cyberbullying, and poor social skills; reduced physical activity; and delayed language development in toddlers. It is NOT associated with improved academic performance or cognitive development - in fact, excessive passive screen time is associated with poorer academic outcomes. WHO 2019 guidelines recommend NO screen time for children under 2 years, and limiting to 1 hour for children 3-4 years. India's POSHAN Abhiyaan now includes screen time counseling as part of early childhood development guidance."
  }
];

export default questions;

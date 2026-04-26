const questions = [
  {
    id: 1,
    question: "According to the Global Burden of Disease India study (ICMR-PHFI-IHME, 2017), what percentage of total deaths in India are attributed to non-communicable diseases?",
    options: ["53%", "63%", "71%", "48%"],
    answer: 1,
    explanation: "The ICMR-PHFI-IHME GBD India study (2017) reported that NCDs are responsible for approximately 63% of total deaths in India, marking a significant epidemiological transition from communicable to non-communicable diseases as the leading cause of mortality."
  },
  {
    id: 2,
    question: "Which stage of Omran's epidemiological transition is India currently considered to be in, given its concurrent burden of communicable and non-communicable diseases?",
    options: ["Stage 1 - Age of Pestilence and Famine", "Stage 2 - Age of Receding Pandemics", "Stage 3 - Age of Degenerative and Man-made Diseases", "Stage 4 - Age of Delayed Degenerative Diseases"],
    answer: 2,
    explanation: "India is considered to be in Stage 3 of Omran's epidemiological transition - the Age of Degenerative and Man-made Diseases. However, India also exhibits a 'double burden' as communicable diseases have not yet been fully controlled, making this transition incomplete and overlapping."
  },
  {
    id: 3,
    question: "The concept of 'double burden of disease' in India refers to which of the following?",
    options: ["High burden of both acute and chronic NCDs", "Simultaneous persistence of communicable diseases alongside rising NCDs", "Burden of disease affecting both urban and rural populations equally", "Co-existence of undernutrition and obesity in the same individual"],
    answer: 1,
    explanation: "The 'double burden of disease' in India refers to the simultaneous persistence of communicable diseases (such as TB, malaria, diarrheal diseases) alongside a rapidly rising burden of non-communicable diseases (cardiovascular diseases, diabetes, cancers, COPD). This is characteristic of countries in epidemiological transition."
  },
  {
    id: 4,
    question: "According to the GBD India study, which NCD contributes the highest DALY burden in India?",
    options: ["Diabetes mellitus", "Ischemic heart disease", "Chronic obstructive pulmonary disease", "Stroke"],
    answer: 1,
    explanation: "According to the GBD India study (ICMR-PHFI-IHME 2017), ischemic heart disease contributes the highest DALY (Disability-Adjusted Life Year) burden among NCDs in India, reflecting the country's significant cardiovascular disease epidemic. DALYs lost to IHD have increased substantially over the past three decades."
  },
  {
    id: 5,
    question: "Premature NCD mortality is defined by WHO as death occurring due to NCDs in which age group?",
    options: ["15-60 years", "30-70 years", "20-65 years", "25-75 years"],
    answer: 1,
    explanation: "WHO defines premature NCD mortality as deaths occurring due to cardiovascular diseases, cancers, diabetes, or chronic respiratory diseases between the ages of 30 and 70 years. SDG target 3.4 aims to reduce this premature mortality by one-third by 2030 compared to the 2015 baseline."
  },
  {
    id: 6,
    question: "Which Indian state has the highest age-standardized NCD mortality rate as per the GBD India 2017 report?",
    options: ["Kerala", "Punjab", "Andhra Pradesh", "Uttar Pradesh"],
    answer: 0,
    explanation: "Kerala has among the highest age-standardized NCD mortality rates in India as per GBD India 2017, which is paradoxically related to its advanced epidemiological transition - communicable diseases have been controlled and the population is older, making NCDs the dominant cause of death. This illustrates the 'Kerala paradox' in epidemiology."
  },
  {
    id: 7,
    question: "The GBD India 2017 study found a widening variation in NCD burden across Indian states. Which region showed the lowest NCD-related DALY rates?",
    options: ["Southern states (Kerala, Tamil Nadu)", "Northern states (Punjab, Haryana)", "North-eastern states (Mizoram, Manipur)", "Western states (Gujarat, Maharashtra)"],
    answer: 2,
    explanation: "North-eastern states such as Mizoram, Manipur, and Meghalaya showed relatively lower NCD-related DALY rates compared to states like Kerala, Punjab, and Andhra Pradesh. This is attributed to their earlier stage of epidemiological transition, lower urbanization, and different dietary/lifestyle patterns, although this is changing rapidly."
  },
  {
    id: 8,
    question: "The urban-rural gradient for NCD risk factors in India, as shown by NFHS-5 and STEPS survey data, demonstrates which trend?",
    options: ["Urban areas consistently have 3-4 times higher NCD prevalence than rural areas", "The urban-rural gap in NCD risk factors is narrowing with increasing rural NCD burden", "Rural areas now have higher NCD burden due to agricultural chemical exposure", "No significant difference exists between urban and rural NCD burden in India"],
    answer: 1,
    explanation: "NFHS-5 (2019-21) and the WHO STEPS survey data indicate that while urban areas still have higher NCD risk factor prevalence, the urban-rural gap is narrowing. Rural populations are increasingly adopting urban dietary habits, physical inactivity, and tobacco use, leading to a rising rural NCD burden. This has significant implications for NCD prevention strategies."
  },
  {
    id: 9,
    question: "According to NFHS-5 (2019-21), what percentage of women aged 15-49 years in India are overweight or obese (BMI ≥25)?",
    options: ["15.4%", "24.0%", "18.5%", "30.2%"],
    answer: 1,
    explanation: "NFHS-5 (2019-21) reported that approximately 24% of women aged 15-49 years in India are overweight or obese (BMI ≥25 kg/m2), a significant increase from 20.6% in NFHS-4. This represents an important NCD risk factor driving the rising burden of diabetes, cardiovascular disease, and hypertension in India."
  },
  {
    id: 10,
    question: "Which demographic transition theory concept best explains the rise in NCDs in India due to an aging population?",
    options: ["First demographic dividend", "Second demographic dividend and population aging", "Demographic momentum", "Migration transition"],
    answer: 1,
    explanation: "The second demographic dividend and population aging explains much of the NCD rise in India. As fertility rates decline and life expectancy increases, India's population is aging, increasing the proportion of older individuals who are at higher risk for NCDs. The number of elderly (60+ years) in India is projected to reach 340 million by 2050."
  },
  {
    id: 11,
    question: "According to WHO's NCD Country Profile for India, what is the probability of dying from any of the four main NCDs (CVD, cancer, diabetes, CRD) between ages 30-70 years?",
    options: ["14%", "23%", "26%", "31%"],
    answer: 1,
    explanation: "WHO's NCD Country Profile for India indicates a probability of approximately 23-26% of dying from one of the four main NCDs (cardiovascular diseases, cancer, diabetes, or chronic respiratory diseases) between ages 30 and 70 years. This metric is directly linked to SDG target 3.4 on reducing premature NCD mortality."
  },
  {
    id: 12,
    question: "The economic impact of NCDs on India's GDP includes which of the following projections?",
    options: ["India will lose $6.2 trillion due to NCDs between 2012-2030", "NCD-related healthcare costs constitute 2% of India's GDP currently", "NCDs primarily affect the elderly and thus have minimal economic impact on productive age groups", "India spends more on NCD prevention than treatment"],
    answer: 0,
    explanation: "WHO and World Economic Forum estimated that India will lose approximately $6.2 trillion due to NCDs between 2012 and 2030 due to premature deaths and productivity losses. NCDs disproportionately affect working-age adults in India (due to earlier age of onset compared to developed countries), creating significant economic consequences including catastrophic household health expenditure."
  },
  {
    id: 13,
    question: "The National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCS) was launched in which year?",
    options: ["2008", "2010", "2012", "2014"],
    answer: 1,
    explanation: "NPCDCS was launched in 2010 under the Ministry of Health and Family Welfare, Government of India, initially in 100 districts across 21 states in a phased manner. It was later expanded to cover more districts and integrated under the National Health Mission framework in 2013."
  },
  {
    id: 14,
    question: "Which of the following is NOT a stated objective of the National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCS)?",
    options: ["Prevention and control of common NCDs through behavior change communication", "Early diagnosis and management of NCDs at primary health care level", "Strengthening healthcare infrastructure for NCD management", "Eradication of genetic risk factors for non-communicable diseases"],
    answer: 3,
    explanation: "Eradication of genetic risk factors is not an objective of NPCDCS, as genetic factors cannot be eradicated through public health programs. The actual objectives include: prevention through behavior change, early diagnosis and management at primary care level, strengthening infrastructure at district and sub-district levels, building human resource capacity, and IEC/awareness activities for NCD prevention."
  },
  {
    id: 15,
    question: "Under NPCDCS, NCD clinics are established at which levels of healthcare?",
    options: ["Sub-centre and Primary Health Centre level only", "Community Health Centre (CHC) and District Hospital level", "Medical college hospitals only", "All levels from sub-centre to tertiary hospital"],
    answer: 1,
    explanation: "Under NPCDCS, dedicated NCD clinics are established at Community Health Centre (CHC) and District Hospital level. At the CHC level, the NCD clinic provides outpatient services, while District Hospitals have Day Care Centres for cancer patients requiring chemotherapy. This tiered approach ensures referral and management at appropriate levels."
  },
  {
    id: 16,
    question: "Under NPCDCS, population-based screening for NCDs is targeted at which age group?",
    options: ["18 years and above", "25 years and above", "30 years and above", "40 years and above"],
    answer: 2,
    explanation: "Under NPCDCS (and integrated under Ayushman Bharat), population-based screening for common NCDs (hypertension, diabetes, and common cancers) targets individuals 30 years of age and above. This age cut-off was chosen because NCD risk increases significantly from this age, and early detection can prevent progression to serious complications."
  },
  {
    id: 17,
    question: "The Community Based Assessment Checklist (CBAC) used under NPCDCS is primarily administered by which health worker?",
    options: ["Auxiliary Nurse Midwife (ANM)", "Accredited Social Health Activist (ASHA)", "Community Health Officer (CHO)", "Multipurpose Health Worker (MPW)"],
    answer: 1,
    explanation: "The Community Based Assessment Checklist (CBAC) is administered by ASHA (Accredited Social Health Activist) workers during household visits. CBAC is a simple tool used to identify individuals at high risk for NCDs based on lifestyle risk factors, symptoms, and history. Individuals identified as high-risk are referred to health facilities for further evaluation and management."
  },
  {
    id: 18,
    question: "Under NPCDCS, what is the referral pathway for a patient with suspected diabetes identified at the sub-centre level?",
    options: ["Sub-centre -> PHC -> CHC -> District Hospital", "Sub-centre -> District Hospital directly", "Sub-centre -> CHC -> Medical College", "Sub-centre -> ASHA -> ANM -> PHC"],
    answer: 0,
    explanation: "The referral pathway under NPCDCS follows the standard tiered structure: Sub-centre (ASHA/ANM screen using CBAC) -> Primary Health Centre (confirmation of diagnosis, initiation of treatment for mild/moderate cases) -> Community Health Centre (NCD clinic for management of complex cases) -> District Hospital (specialist care, Day Care Centre). Cases requiring tertiary care are further referred to medical colleges."
  },
  {
    id: 19,
    question: "Which component of NPCDCS focuses on the establishment of cancer treatment facilities at the district level?",
    options: ["NCD clinic at CHC", "District NCD Cell", "Day Care Centre at District Hospital", "Cancer Registry unit"],
    answer: 2,
    explanation: "Day Care Centres established at District Hospitals under NPCDCS provide cancer treatment services including administration of chemotherapy on a day-care basis, avoiding the need for prolonged hospitalization. This brings cancer treatment closer to patients in peripheral areas and reduces the burden on regional cancer centres."
  },
  {
    id: 20,
    question: "NCD Cells established at the state and district levels under NPCDCS primarily serve which function?",
    options: ["Providing clinical NCD management services", "Administrative coordination, monitoring, and program management", "Conducting population-based cancer screening", "Drug procurement and supply chain management only"],
    answer: 1,
    explanation: "NCD Cells at the State and District level under NPCDCS serve as the administrative and program management units. They are responsible for planning, coordination, monitoring, and evaluation of NCD program activities; maintaining data; coordinating with different stakeholders; and ensuring program implementation fidelity. They do not directly provide clinical services."
  },
  {
    id: 21,
    question: "How has Ayushman Bharat - Health and Wellness Centres (AB-HWC) integrated with NPCDCS?",
    options: ["AB-HWC has replaced NPCDCS entirely", "AB-HWC provides comprehensive primary health care including NCD screening and management, subsuming NPCDCS activities at the primary care level", "NPCDCS and AB-HWC function as completely separate parallel programs", "AB-HWC only handles NCD cases referred from NPCDCS"],
    answer: 1,
    explanation: "Ayushman Bharat - Health and Wellness Centres have integrated and subsumed the primary care NCD activities of NPCDCS. Under this integration, HWCs (upgraded Sub-Centres and PHCs) now provide comprehensive primary health care including population-based screening for NCDs (diabetes, hypertension, oral/breast/cervical cancers) for all individuals 30 years and above, making NCD care a routine part of primary health care."
  },
  {
    id: 22,
    question: "The National Programme for Health Care of the Elderly (NPHCE) targets which age group for specialized care?",
    options: ["55 years and above", "60 years and above", "65 years and above", "70 years and above"],
    answer: 1,
    explanation: "NPHCE (launched 2010) targets individuals 60 years and above (the elderly) for specialized geriatric care. The program aims to provide dedicated, specialized, and preventive healthcare to elderly individuals through dedicated geriatric OPDs at district hospitals, regional geriatric centres at medical colleges, and training of healthcare providers in geriatric medicine."
  },
  {
    id: 23,
    question: "The National Tobacco Control Programme (NTCP), which addresses a key NCD risk factor, operates under which framework?",
    options: ["NPCDCS", "National Health Mission, Ministry of Health and Family Welfare", "Ministry of Commerce and Industry", "FSSAI (Food Safety and Standards Authority of India)"],
    answer: 1,
    explanation: "The National Tobacco Control Programme (NTCP) operates under the National Health Mission, Ministry of Health and Family Welfare, Government of India. It is implemented under the provisions of the Cigarettes and Other Tobacco Products Act (COTPA) 2003. NTCP supports IEC activities, training, establishment of Tobacco Cessation Centres, and policy advocacy for tobacco control."
  },
  {
    id: 24,
    question: "The National Programme for Control of Blindness and Visual Impairment (NPCB&VI) is relevant to NCD control primarily because it addresses which NCD complication?",
    options: ["Blindness due to cataracts only", "Visual complications of diabetes (diabetic retinopathy) and hypertension (hypertensive retinopathy) among other causes", "Glaucoma resulting from steroid use in NCD treatment", "Nutritional blindness due to Vitamin A deficiency"],
    answer: 1,
    explanation: "NPCB&VI is relevant to NCD control because it addresses blindness and visual impairment arising from NCD complications, particularly diabetic retinopathy (a major microvascular complication of diabetes) and hypertensive retinopathy. Diabetes is now one of the leading causes of blindness in India, making NPCB&VI and NPCDCS programmatically linked."
  },
  {
    id: 25,
    question: "The WHO Global Action Plan for the Prevention and Control of NCDs 2013-2020 (extended to 2030) sets how many voluntary global targets?",
    options: ["6 targets", "9 targets", "12 targets", "15 targets"],
    answer: 1,
    explanation: "The WHO Global Action Plan for the Prevention and Control of NCDs 2013-2020 (extended to 2030) established 9 voluntary global targets to be achieved by 2025 (later adapted for 2030). These include the overarching 25x25 target (25% relative reduction in premature NCD mortality by 2025), along with targets for risk factors like tobacco use, physical inactivity, salt/sodium intake, hypertension, harmful alcohol use, and targets for health system response like medicines/technologies access and coverage of drug therapy."
  },
  {
    id: 26,
    question: "The '25 by 25' WHO target for NCDs refers to which specific goal?",
    options: ["25% reduction in NCD-related disability by 2025", "25% relative reduction in overall premature NCD mortality by 2025", "Coverage of 25% of NCD patients with essential medicines by 2025", "25% reduction in NCD risk factor prevalence by 2025"],
    answer: 1,
    explanation: "The '25 by 25' target, adopted at the World Health Assembly in 2013, refers to a 25% relative reduction in overall premature NCD mortality (deaths between 30-70 years from cardiovascular diseases, cancers, diabetes, or chronic respiratory diseases) by the year 2025, compared to the 2010 baseline."
  },
  {
    id: 27,
    question: "WHO 'Best Buys' for NCD prevention include which of the following interventions categorized under MPOWER for tobacco control?",
    options: ["M - Monitor tobacco use, P - Protect from tobacco smoke, O - Offer cessation support, W - Warn about dangers, E - Enforce advertising bans, R - Raise tobacco taxes", "M - Manufacture tobacco alternatives, P - Penalize tobacco companies, O - Outlaw tobacco farming, W - Widen smoke-free zones, E - Educate all citizens, R - Remove tobacco subsidies", "M - Mandate health warnings, P - Prohibit all tobacco sales, O - Operate cessation clinics, W - Withdraw subsidies, E - Eliminate all tobacco ads, R - Regulate nicotine content", "M - Monitor industry compliance, P - Promote safe smoking, O - Offer nicotine patches free, W - Warn only in urban areas, E - Ensure rural access, R - Reduce import duties"],
    answer: 0,
    explanation: "MPOWER is the WHO FCTC implementation framework consisting of: M - Monitor tobacco use and prevention policies; P - Protect people from tobacco smoke (smoke-free environments); O - Offer help to quit tobacco use (cessation services); W - Warn about the dangers of tobacco (health warnings); E - Enforce bans on tobacco advertising, promotion and sponsorship; R - Raise taxes on tobacco products. These are evidence-based best buys for tobacco control."
  },
  {
    id: 28,
    question: "WHO STEPS surveillance methodology for NCD risk factors uses which approach?",
    options: ["Clinical record review and hospital data extraction", "A standardized three-step approach: questionnaire, physical measurements, and biochemical measurements", "Satellite monitoring of food supply chains and environmental NCD risk factors", "Social media analysis and digital health data aggregation"],
    answer: 1,
    explanation: "WHO STEPS (STEPwise approach to Surveillance) uses a standardized three-step approach: Step 1 - Questionnaire (self-reported information on tobacco use, alcohol consumption, diet, physical activity), Step 2 - Physical measurements (height, weight, blood pressure, waist circumference), Step 3 - Biochemical measurements (fasting blood glucose, total cholesterol). This standardized approach allows international comparisons of NCD risk factor data."
  },
  {
    id: 29,
    question: "The WHO Package of Essential NCD (PEN) interventions is designed for implementation at which level of the health system?",
    options: ["Tertiary care and specialty hospitals", "Primary health care and first-level care facilities in low-resource settings", "District hospitals and community health centres only", "National reference laboratories and advanced diagnostic centres"],
    answer: 1,
    explanation: "WHO PEN (Package of Essential NCD interventions) is specifically designed for implementation at primary health care and first-level care facilities in low-resource settings. It provides evidence-based protocols for management of cardiovascular diseases (including hypertension), diabetes, chronic respiratory diseases, and palliative care using a risk stratification approach, making NCD care feasible in resource-limited environments."
  },
  {
    id: 30,
    question: "The WHO Global Monitoring Framework for NCDs includes how many indicators to track progress on the voluntary global NCD targets?",
    options: ["15 indicators", "25 indicators", "33 indicators", "42 indicators"],
    answer: 2,
    explanation: "The WHO Global Monitoring Framework for NCDs includes 25 indicators (some sources cite variations), covering the 9 voluntary global targets and additional process indicators related to national NCD plans, health system capacity, and risk factor monitoring. These indicators are used by countries to report progress to the WHO every 2 years as part of the global reporting mechanism."
  },
  {
    id: 31,
    question: "SDG 3.4 specifically states which target related to NCDs?",
    options: ["Eliminate NCDs as a cause of death by 2030", "Reduce by one-third premature mortality from non-communicable diseases through prevention and treatment by 2030", "Achieve universal NCD treatment coverage by 2030", "Reduce NCD-related disability by 50% by 2030"],
    answer: 1,
    explanation: "SDG 3.4 states: 'By 2030, reduce by one-third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being.' The indicator for this target is 3.4.1 - Probability of dying between ages 30 and 70 from cardiovascular disease, cancer, diabetes, or chronic respiratory disease. This aligns with the WHO 25x25 target."
  },
  {
    id: 32,
    question: "The WHO Framework Convention on Tobacco Control (FCTC) came into force in which year, and India ratified it in which year?",
    options: ["FCTC entered force 2003, India ratified 2003", "FCTC entered force 2005, India ratified 2004", "FCTC entered force 2005, India ratified 2005", "FCTC entered force 2007, India ratified 2006"],
    answer: 1,
    explanation: "The WHO Framework Convention on Tobacco Control (WHO FCTC) entered into force on February 27, 2005. India was among the early signatories and ratified the FCTC in February 2004, even before it officially came into force. India subsequently enacted COTPA (Cigarettes and Other Tobacco Products Act) 2003 as the domestic legislation implementing FCTC obligations."
  },
  {
    id: 33,
    question: "The WHO Global Strategy on Diet, Physical Activity and Health (adopted 2004) recommends which target for daily salt/sodium intake?",
    options: ["Less than 10 grams of salt per day", "Less than 5 grams of salt (2 grams sodium) per day", "Less than 8 grams of salt per day", "Less than 3 grams of salt per day"],
    answer: 1,
    explanation: "WHO recommends consuming less than 5 grams of salt (equivalent to less than 2 grams of sodium) per day for adults to reduce blood pressure and risk of cardiovascular disease, stroke and coronary heart attack. Studies show average salt consumption in India ranges from 8-11 grams per day, far exceeding this recommendation. Salt reduction is among WHO's 'best buys' for NCD prevention."
  },
  {
    id: 34,
    question: "NCD Countdown 2030 is a collaborative that tracks progress toward which goal?",
    options: ["Counting the number of new NCD cases globally each year", "Monitoring whether countries are on track to meet the SDG 3.4 target of reducing premature NCD mortality by one-third by 2030", "Documenting the 2030 global NCD burden projections", "Tracking NCD research funding globally until 2030"],
    answer: 1,
    explanation: "NCD Countdown 2030 is a collaboration of NCD Alliance, WHO, Imperial College London, and The Lancet that monitors whether countries are on track to meet the SDG 3.4 target of reducing premature NCD mortality by one-third by 2030. Their analyses, published in The Lancet, show that most low- and middle-income countries, including India, are not on track to meet this target."
  },
  {
    id: 35,
    question: "The 'Health in All Policies' (HiAP) approach to NCD prevention requires which type of action?",
    options: ["Focusing NCD prevention exclusively within the health ministry", "Multisectoral engagement where all government sectors consider health impacts of their policies", "Private sector self-regulation of NCD risk factor products", "Decentralization of all health policy to state governments"],
    answer: 1,
    explanation: "Health in All Policies (HiAP) is an approach that systematically considers the health implications of decisions across all sectors and policy areas. For NCD prevention, this means agriculture policy (food production), finance (taxation of tobacco/alcohol/unhealthy foods), urban planning (active transport, green spaces), education (health literacy), trade (food imports), and other sectors must all consider NCD prevention in their policymaking. This is essential because most NCD risk factors lie outside the direct control of the health sector."
  },
  {
    id: 36,
    question: "Among WHO's 'best buy' interventions for NCD prevention, which specific dietary intervention has been shown to be highly cost-effective?",
    options: ["Mandatory calorie labeling on all food products", "Elimination of industrially-produced trans-fatty acids from the food supply", "Supplementation of omega-3 fatty acids in all processed foods", "Complete elimination of sugar from all food products"],
    answer: 1,
    explanation: "Elimination of industrially-produced trans-fatty acids (iTFAs) from the food supply is classified as a WHO 'best buy' for NCD prevention due to its high cost-effectiveness, strong evidence base, and feasibility of implementation through food regulations. Trans-fatty acids increase LDL cholesterol and decrease HDL cholesterol, significantly increasing cardiovascular disease risk. FSSAI has set limits on trans-fats in India."
  },
  {
    id: 37,
    question: "Multisectoral Action Plans for NCDs in India typically involve which sectors beyond health?",
    options: ["Health and finance sectors only", "Health, agriculture, education, finance, urban development, food processing, and sports/youth affairs", "Health, defense, and interior ministries only", "Health and information technology sectors only"],
    answer: 1,
    explanation: "India's National Multisectoral Action Plan for Prevention and Control of NCDs involves multiple sectors including: Health and Family Welfare (lead ministry), Agriculture (healthy food production), Food Processing (food fortification, labeling), Education (school health programs), Finance (taxation of tobacco/alcohol, food subsidies), Urban Development (built environment for physical activity), Sports and Youth Affairs (promoting physical activity), and Information and Broadcasting (media campaigns). This reflects the multidetermined nature of NCD risk factors."
  },
  {
    id: 38,
    question: "The ICMR-INDIAB (Indian Diabetes and Insulin Resistance Audit Burden) study estimated the prevalence of diabetes in India to be approximately:",
    options: ["5.9% of adults", "7.3% of adults", "10.4% of adults", "15.2% of adults"],
    answer: 2,
    explanation: "The ICMR-INDIAB study (Phase 1 published in Lancet Diabetes & Endocrinology 2023, led by Dr. V. Mohan) estimated the diabetes prevalence in India at approximately 10.4-11.4% of adults (varying by phase and inclusion criteria), with an estimated 101 million people with diabetes in India. This made India one of the countries with the highest absolute number of diabetes cases globally."
  },
  {
    id: 39,
    question: "The Indian Council of Medical Research's National Cancer Registry Programme is coordinated by which institution?",
    options: ["All India Institute of Medical Sciences (AIIMS), New Delhi", "National Centre for Disease Informatics and Research (NCDIR), Bengaluru (formerly NCRP, ICMR)", "Tata Memorial Centre, Mumbai", "Regional Cancer Centre, Thiruvananthapuram"],
    answer: 1,
    explanation: "The ICMR's National Cancer Registry Programme (NCRP) is coordinated by the National Centre for Disease Informatics and Research (ICMR-NCDIR), Bengaluru. NCDIR coordinates population-based cancer registries (PBCRs) and hospital-based cancer registries (HBCRs) across India, collects cancer incidence data, and publishes the 'Cancer Incidence in Five Continents' and national cancer registry reports."
  },
  {
    id: 40,
    question: "The Integrated Disease Surveillance Programme (IDSP) expanded its scope to include NCDs through which component?",
    options: ["S-form reporting (suspected case reporting) for NCD clusters", "NCD risk factor surveillance wing with dedicated NCD data officers", "P-form (private sector reporting) for NCD cases", "Community-based NCD cluster monitoring through ASHA workers"],
    answer: 0,
    explanation: "IDSP expanded to include NCD surveillance through the concept of NCD reporting in the S-form (Syndromic surveillance form completed by community health workers). Additionally, IDSP supports NCD sentinel surveillance and risk factor surveys at the state level. The Epidemic Intelligence Officers (EIOs) at state and district levels are increasingly being trained to detect and report NCD clusters/outbreaks."
  },
  {
    id: 41,
    question: "The National NCD Monitoring Survey (NNMS) conducted in India primarily aimed to:",
    options: ["Monitor implementation fidelity of NPCDCS at the facility level", "Generate nationally representative estimates of NCD risk factor prevalence to establish baseline data for monitoring India's NCD targets", "Conduct biomarker-based NCD risk factor screening in all districts", "Replace the NFHS survey for NCD-specific data collection"],
    answer: 1,
    explanation: "The National NCD Monitoring Survey (NNMS), conducted by the Ministry of Health and Family Welfare with support from WHO India, aimed to generate nationally representative estimates of NCD risk factor prevalence (tobacco use, physical inactivity, unhealthy diet, harmful alcohol use, raised blood pressure, raised blood glucose, raised cholesterol, and overweight/obesity) to establish baseline data for tracking India's progress toward the WHO Global Voluntary NCD Targets and SDG 3.4."
  },
  {
    id: 42,
    question: "The Chennai Urban Rural Epidemiology Study (CURES) is a landmark Indian cohort study primarily focused on which NCD?",
    options: ["Cardiovascular disease epidemiology in South India", "Diabetes mellitus and its complications in urban and rural Tamil Nadu", "Cancer risk factors in the Chennai metropolitan area", "Hypertension prevalence and control in South India"],
    answer: 1,
    explanation: "CURES (Chennai Urban Rural Epidemiology Study) is a landmark epidemiological study led by Dr. V. Mohan from Madras Diabetes Research Foundation, focused on the epidemiology of diabetes mellitus and its complications, as well as associated cardiovascular risk factors in urban and rural Tamil Nadu. CURES has generated extensive data on diabetes prevalence, complications (diabetic nephropathy, retinopathy, neuropathy), and associated risk factors in South India."
  },
  {
    id: 43,
    question: "The Jaipur Heart Watch study is significant in Indian NCD epidemiology because it:",
    options: ["Established the first prospective cardiovascular cohort in North India, documenting high IHD rates in urban Rajasthan", "Documented the protective effect of vegetarian diet on cardiovascular disease in Rajasthan", "Compared cardiovascular disease rates between India and Pakistan", "Established national hypertension treatment guidelines for India"],
    answer: 0,
    explanation: "Jaipur Heart Watch is a series of cross-sectional population-based studies conducted in Jaipur, Rajasthan by Dr. Rajeev Gupta and colleagues. It documented high and increasing rates of coronary heart disease (CHD) risk factors and CHD prevalence in urban and semi-urban North India, establishing important baseline epidemiological data on cardiovascular disease burden in this region and contributing to understanding of the 'Asian Indian phenotype' of cardiovascular risk."
  },
  {
    id: 44,
    question: "The INTERHEART South Asian data showed which unique pattern of cardiovascular risk in South Asians compared to other ethnic groups?",
    options: ["South Asians had lower overall cardiovascular risk due to protective dietary patterns", "South Asians developed acute myocardial infarction at a younger age (about 5-10 years earlier) than other populations", "South Asians had lower smoking rates compensating for other metabolic risk factors", "South Asians showed higher prevalence of protective HDL cholesterol levels"],
    answer: 1,
    explanation: "The INTERHEART study (a global case-control study of acute MI) and its South Asian component showed that South Asians (including Indians) develop acute myocardial infarction approximately 5-10 years earlier than individuals from other ethnic groups. South Asians also showed higher abdominal obesity at lower BMI values, higher insulin resistance, lower HDL cholesterol, and higher lipoprotein(a) levels - collectively termed the 'Asian Indian phenotype' of cardiovascular risk."
  },
  {
    id: 45,
    question: "Task-shifting for NCD management in India primarily involves which approach?",
    options: ["Shifting NCD patients from public to private hospitals to reduce public sector burden", "Training non-physician health workers (nurses, CHOs, ASHAs) to deliver specific NCD care tasks traditionally performed by physicians", "Transferring NCD program management from central to state governments", "Outsourcing NCD data management to private IT companies"],
    answer: 1,
    explanation: "Task-shifting (or task-sharing) for NCD management in India involves training non-physician health workers - particularly Community Health Officers (CHOs) at Health and Wellness Centres, nurses, ANMs, and ASHAs - to deliver specific NCD care tasks that were traditionally the exclusive domain of physicians. This includes conducting risk assessments, screening, monitoring treatment adherence, health counseling, and follow-up of stable NCD patients. Task-shifting is essential given the shortage of physicians, especially in rural areas."
  },
  {
    id: 46,
    question: "mHealth (mobile health) interventions for NCD management in India include which of the following applications?",
    options: ["Using mobile phones exclusively for NCD patient billing and insurance claims", "Digital tools for medication adherence reminders, tele-consultation, NCD risk assessment apps, and patient tracking for follow-up", "Mobile phone-based social media campaigns only, without clinical applications", "Smartphone apps for real-time surgical procedures for NCD complications"],
    answer: 1,
    explanation: "mHealth interventions for NCD management in India include: mobile phone-based medication adherence reminders (SMS/IVR), tele-consultation connecting peripheral health workers with specialists, NCD risk assessment and CBAC-based screening apps used by ASHAs, patient tracking systems for follow-up (reducing loss to follow-up), m-Diabetes and m-Cessation programs (WHO/MoHFW initiatives), and the CoWIN-like NCD patient management platforms being piloted under Ayushman Bharat Digital Mission."
  },
  {
    id: 47,
    question: "ICMR guidelines for management of type 2 diabetes in India differ from international guidelines primarily in which aspect?",
    options: ["ICMR recommends higher HbA1c targets (>9%) for all Indian patients", "ICMR guidelines are adapted to the Indian context with consideration of predominant South Asian phenotype, available drugs, local food patterns, and resource constraints", "ICMR guidelines are identical to ADA (American Diabetes Association) guidelines", "ICMR recommends surgery as first-line treatment for all type 2 diabetes"],
    answer: 1,
    explanation: "ICMR clinical practice guidelines for T2DM management are adapted to the Indian context, considering: the South Asian phenotype (lower BMI with higher adiposity and insulin resistance), Indian dietary patterns (carbohydrate-heavy diets, specific glycemic indices of Indian foods), drugs available and affordable in India, resource-limited settings, and population-specific risk factors. ICMR guidelines differ from ADA guidelines in target populations, drug preferences, and context-specific recommendations."
  },
  {
    id: 48,
    question: "ICMR NCD risk factor surveys have documented which alarming trend regarding hypertension in India?",
    options: ["Hypertension prevalence has been declining in India due to salt reduction campaigns", "Large proportion (>50%) of hypertensives are unaware of their diagnosis, with even lower rates of treatment and control - representing a hypertension control cascade problem", "Hypertension is predominantly a disease of urban India with negligible rural prevalence", "Blood pressure levels in India are now within the normal range across all adult age groups"],
    answer: 1,
    explanation: "ICMR NCD risk factor surveys, NFHS-5, and state-level STEPS surveys consistently document a hypertension control cascade problem in India: approximately 50-60% of hypertensives are unaware of their diagnosis, of those diagnosed only about 40-50% are on treatment, and of those on treatment only 10-30% have adequately controlled blood pressure. This represents a major gap in hypertension detection, treatment, and control, with significant implications for stroke and cardiovascular disease burden."
  },
  {
    id: 49,
    question: "Health system strengthening for NCDs in India under the National Health Mission includes which specific strategy to improve NCD drug availability at primary care level?",
    options: ["Patients with NCDs must purchase all drugs from private pharmacies", "Free essential medicines for NCDs (antihypertensives, oral hypoglycemic agents, statins) provided at public health facilities through the Free Drugs Initiative", "NCD drugs are available only at district hospitals under NHM", "NCD drug procurement is managed exclusively by state governments without central support"],
    answer: 1,
    explanation: "The Free Drugs Initiative under the National Health Mission mandates provision of essential medicines for NCDs free of cost at public health facilities. This includes antihypertensives (amlodipine, enalapril, atenolol), oral hypoglycemic agents (metformin, glibenclamide), statins, and aspirin - available at Sub-Centres, PHCs, CHCs, and District Hospitals. This strategy aims to reduce catastrophic out-of-pocket expenditure on NCD medicines, which is a major barrier to treatment adherence among low-income populations."
  },
  {
    id: 50,
    question: "The ICMR-PHFI-IHME GBD India study 2017 identified which state-level finding regarding the 'state of states' variation in NCD burden?",
    options: ["All Indian states have identical NCD burdens regardless of development level", "States with higher sociodemographic index (more developed states like Kerala, Goa, Tamil Nadu) bear a higher proportional NCD burden, while less developed states still have high communicable disease burden", "NCD burden is entirely determined by genetic factors with no association with state-level socioeconomic development", "North Indian states uniformly have higher NCD burden than South Indian states"],
    answer: 1,
    explanation: "The GBD India study 2017 found a strong correlation between Sociodemographic Index (SDI) and NCD burden across Indian states. States with higher SDI (Kerala, Goa, Tamil Nadu, Andhra Pradesh) showed higher proportional NCD burden and had completed more of the epidemiological transition. In contrast, lower-SDI states (Bihar, UP, Jharkhand, NE states) still bore a high communicable disease burden. This creates a double burden challenge for India as a whole, requiring differentiated state-level NCD strategies."
  },
];

export default questions;

const questions = [
  {
    id: 1,
    question: "According to WHO data, cardiovascular diseases account for approximately what percentage of global deaths annually?",
    options: ["17%", "32%", "45%", "51%"],
    answer: 1,
    explanation: "Cardiovascular diseases are the leading cause of death globally, accounting for approximately 32% of all global deaths. This translates to about 17.9 million deaths per year, with heart disease and stroke being the two dominant contributors."
  },
  {
    id: 2,
    question: "The ICMR-GBD India study (2017) found that cardiovascular diseases contributed to what percentage of total disease burden (DALYs) in India?",
    options: ["8.7%", "14.1%", "22.9%", "31.4%"],
    answer: 1,
    explanation: "The ICMR-GBD India study published in The Lancet (2017) found that cardiovascular diseases contributed approximately 14.1% of total DALYs in India. The burden varied significantly across states, with more developed states showing higher proportional CVD burden consistent with epidemiological transition."
  },
  {
    id: 3,
    question: "India accounts for approximately what proportion of premature cardiovascular deaths globally (in persons aged 30-69 years)?",
    options: ["1 in 10", "1 in 6", "1 in 4", "1 in 3"],
    answer: 2,
    explanation: "India accounts for approximately one in four (25%) premature cardiovascular deaths globally among those aged 30-69 years. This disproportionate burden, given India's share of world population, reflects early onset of CVD in South Asians and risk factor clustering."
  },
  {
    id: 4,
    question: "The 'South Asian paradox' in cardiovascular disease refers to:",
    options: [
      "Higher CVD mortality in rural South Asians despite lower caloric intake",
      "Greater CVD risk in South Asians at lower BMI due to thin-fat phenotype with excess visceral adiposity",
      "Lower rates of hypertension in South Asians despite high salt consumption",
      "Paradoxically low cholesterol levels in South Asian populations with high CVD rates"
    ],
    answer: 1,
    explanation: "The South Asian paradox refers to the observation that South Asians develop CVD at lower BMI thresholds compared to Western populations. This is attributed to the 'thin-fat phenotype' - normal or low BMI with disproportionately high visceral and ectopic fat deposition, insulin resistance, and metabolic dysfunction. WHO has recommended lower BMI cut-offs for obesity in Asians (23 kg/m2 for overweight, 27.5 kg/m2 for obesity)."
  },
  {
    id: 5,
    question: "The INTERHEART study identified 9 potentially modifiable risk factors. Which combination accounts for over 90% of attributable risk for acute myocardial infarction?",
    options: [
      "Smoking, hypertension, diabetes, obesity, dyslipidemia, diet, exercise, alcohol, psychosocial factors",
      "Smoking, hypertension, diabetes, obesity, dyslipidemia, diet, exercise, family history, psychosocial factors",
      "Smoking, hypertension, diabetes, obesity, C-reactive protein, diet, exercise, alcohol, psychosocial factors",
      "Smoking, hypertension, diabetes, obesity, dyslipidemia, diet, exercise, atrial fibrillation, psychosocial factors"
    ],
    answer: 0,
    explanation: "The INTERHEART study (Yusuf et al., Lancet 2004), a case-control study in 52 countries, identified 9 modifiable risk factors accounting for over 90% of the population attributable risk for first MI: smoking, dyslipidemia (ApoB/ApoA1 ratio), hypertension, diabetes, abdominal obesity, psychosocial factors, daily consumption of fruits and vegetables, regular physical activity, and alcohol consumption. Family history is a non-modifiable factor not in the INTERHEART 9."
  },
  {
    id: 6,
    question: "The epidemiological transition model as applied to cardiovascular disease in India is best described as:",
    options: [
      "India has fully transitioned to Stage 4 with degenerative diseases predominating",
      "India is experiencing a dual burden - high rates of both infectious diseases and NCDs simultaneously",
      "Most Indian states remain in Stage 2 (receding pandemics) with low CVD rates",
      "Urban India is in Stage 3 while rural India remains in Stage 1 of transition"
    ],
    answer: 1,
    explanation: "India is experiencing a dual burden of disease - the so-called 'stage 4B' or 'polarized' model. While infectious diseases and malnutrition remain significant (stages 1-2 features), CVD, diabetes and other NCDs are rising rapidly (stages 3-4 features). This occurs simultaneously across and within states, unlike the sequential transition seen in Western countries. The ICMR-GBD study confirms this heterogeneous transition across Indian states."
  },
  {
    id: 7,
    question: "According to Registrar General of India (RGI) data from the Sample Registration System (SRS), what proportion of deaths in India are attributed to cardiovascular diseases?",
    options: ["8-10%", "18-20%", "28-30%", "38-40%"],
    answer: 1,
    explanation: "According to RGI-SRS data, cardiovascular diseases account for approximately 18-20% of all deaths in India. The SRS-based Mortality Schedule provides cause of death data through verbal autopsy. However, this is likely an underestimate due to poor attribution of cause of death at community level, especially in rural areas."
  },
  {
    id: 8,
    question: "Urban-rural differences in CVD prevalence in India show which pattern?",
    options: [
      "CVD prevalence is uniformly distributed between urban and rural areas",
      "Urban areas have 2-3 times higher CVD prevalence than rural areas, with the gap narrowing",
      "Rural areas now have higher CVD burden due to poor healthcare access",
      "The urban-rural divide applies only to stroke, not coronary artery disease"
    ],
    answer: 1,
    explanation: "Studies consistently show 2-3 times higher CVD prevalence in urban compared to rural India. Urban areas have higher rates of hypertension, diabetes, obesity, sedentary lifestyle, and stress. However, the gap is narrowing as rural areas undergo lifestyle changes (dietary transition, reduced physical activity). Rural CVD may also be underdiagnosed due to limited healthcare access. The India Heart Watch and CARRS studies documented this urban-rural gradient."
  },
  {
    id: 9,
    question: "Which of the following is a CVD risk factor unique to or more prominent in women compared to men?",
    options: [
      "Smoking and dyslipidemia",
      "Hypertension and obesity",
      "Premature menopause, preeclampsia history, and autoimmune diseases like lupus",
      "Diabetes and physical inactivity"
    ],
    answer: 2,
    explanation: "Women have unique or sex-specific CVD risk factors: premature menopause (before age 40) increases CVD risk 2-fold; history of preeclampsia/gestational hypertension doubles future CVD risk; polycystic ovarian syndrome (PCOS); gestational diabetes; autoimmune conditions (lupus, rheumatoid arthritis) have higher prevalence in women and confer CVD risk. Women also present differently (atypical MI symptoms) and are underdiagnosed and undertreated for CVD."
  },
  {
    id: 10,
    question: "The prevalence of rheumatic heart disease (RHD) in India is estimated at:",
    options: [
      "0.01-0.05 per 1000 population",
      "0.5-1 per 1000 population",
      "5-8 per 1000 population",
      "15-20 per 1000 population"
    ],
    answer: 2,
    explanation: "India has one of the highest burdens of rheumatic heart disease globally. Population-based studies using echocardiographic screening show prevalence of 5-8 per 1000 children. The burden is higher in lower socioeconomic groups, slums, and areas with overcrowding facilitating Group A Streptococcal transmission. RHD accounts for a significant proportion of heart failure and valvular disease in young Indians, unlike in Western countries where degenerative causes predominate."
  },
  {
    id: 11,
    question: "Chagas cardiomyopathy is caused by which organism and is endemic to which region?",
    options: [
      "Toxoplasma gondii - Sub-Saharan Africa",
      "Trypanosoma cruzi - Latin America (Southern Cone countries)",
      "Leishmania donovani - Indian subcontinent",
      "Plasmodium falciparum - Southeast Asia"
    ],
    answer: 1,
    explanation: "Chagas cardiomyopathy is caused by Trypanosoma cruzi, transmitted by triatomine bugs ('kissing bugs'). It is endemic to Latin America, particularly the Southern Cone countries (Argentina, Brazil, Bolivia, Chile). It affects 6-7 million people worldwide. Cardiac manifestations include dilated cardiomyopathy, arrhythmias, and sudden cardiac death. It is a major cause of heart failure in Latin America. Due to migration, cases are increasingly seen in non-endemic countries."
  },
  {
    id: 12,
    question: "The inverse socioeconomic gradient in cardiovascular disease means:",
    options: [
      "CVD affects the wealthy more because they can afford unhealthy processed foods",
      "In high-income countries CVD disproportionately affects lower socioeconomic groups; in LMICs the pattern is reversing",
      "Higher education is uniformly protective against CVD across all countries",
      "CVD rates are highest in middle-income countries regardless of individual socioeconomic status"
    ],
    answer: 1,
    explanation: "In high-income countries, CVD disproportionately affects lower socioeconomic groups (lower education, income, occupational class) due to higher risk factor prevalence, poor healthcare access, psychosocial stress, and unhealthy behaviours. In LMICs including India, the pattern is more complex - historically CVD was a disease of the affluent, but with epidemiological transition, the poor bear increasing burden due to risk factor exposure, inability to afford medications, and poor healthcare. This convergence means the poorest are now doubly disadvantaged globally."
  },
  {
    id: 13,
    question: "According to ACC/AHA 2017 guidelines, hypertension is defined as blood pressure at or above:",
    options: ["130/80 mmHg", "140/90 mmHg", "150/95 mmHg", "160/100 mmHg"],
    answer: 0,
    explanation: "The 2017 ACC/AHA guidelines lowered the definition of hypertension from 140/90 mmHg to 130/80 mmHg. Stage 1 hypertension is 130-139/80-89 mmHg and Stage 2 is ≥140/90 mmHg. Elevated BP (formerly prehypertension) is 120-129/<80 mmHg. JNC 7 (2003) defined hypertension as ≥140/90 mmHg. India and WHO still largely use the 140/90 mmHg threshold for clinical management decisions. The ACC/AHA 2017 threshold is important for ICMR/PG exam context."
  },
  {
    id: 14,
    question: "White coat hypertension is defined as:",
    options: [
      "BP ≥140/90 mmHg in clinic but normal on ambulatory blood pressure monitoring (ABPM) with <135/85 mmHg awake average",
      "BP ≥130/80 mmHg in clinic with normal home readings",
      "BP that normalizes with antihypertensive therapy but rebounds when medications are stopped",
      "Hypertension caused by anxiety specifically in healthcare settings requiring no treatment"
    ],
    answer: 0,
    explanation: "White coat hypertension (WCH) is defined as persistently elevated BP in clinical settings (≥140/90 mmHg) but normal on 24-hour ABPM (awake average <135/85 mmHg, 24-hour average <130/80 mmHg). Prevalence is 15-30% of those with office hypertension. WCH carries intermediate cardiovascular risk between normotension and sustained hypertension. Masked hypertension is the reverse - normal office BP with elevated out-of-office BP, which carries higher cardiovascular risk than WCH."
  },
  {
    id: 15,
    question: "Which of the following is NOT a standard indication for ambulatory blood pressure monitoring (ABPM)?",
    options: [
      "Suspected white coat hypertension",
      "Evaluation of nocturnal hypertension (non-dipping pattern)",
      "Monitoring response to antihypertensive therapy in all treated hypertensives",
      "Suspected masked hypertension"
    ],
    answer: 2,
    explanation: "ABPM is not indicated for routine monitoring of all treated hypertensives. Standard indications include: suspected white coat hypertension, suspected masked hypertension, evaluation of nocturnal BP patterns (non-dipping associated with higher cardiovascular risk), assessment of BP variability, evaluation of drug-resistant hypertension, symptomatic hypotension, BP assessment in pregnancy, autonomic dysfunction evaluation, and episodic hypertension. Home BP monitoring (HBPM) is used for routine follow-up of treated hypertension."
  },
  {
    id: 16,
    question: "National Family Health Survey (NFHS-5, 2019-21) data on hypertension prevalence in India shows:",
    options: [
      "Overall hypertension prevalence of 5-8% in adults, with urban-rural parity",
      "Hypertension in approximately 24% of men and 21% of women aged 15 years and above",
      "Hypertension prevalence of 35% in urban and 15% in rural areas",
      "Hypertension is more common in women than men across all age groups in India"
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21) found hypertension (≥140/90 mmHg or on medication) in approximately 24% of men and 21% of women aged 15+ years in India. Earlier NFHS surveys showed much lower rates, partly reflecting improved detection. State-wise variation is significant, with higher rates in Kerala, Punjab, and Goa. Urban prevalence is higher than rural. Hypertension control rates remain poor - only about 1 in 10 hypertensives have controlled BP in India, highlighting the treatment gap."
  },
  {
    id: 17,
    question: "Salt sensitivity, relevant to hypertension pathophysiology, is defined as a change in mean arterial pressure of more than how many mmHg with dietary sodium loading/depletion?",
    options: ["3 mmHg", "10 mmHg", "20 mmHg", "30 mmHg"],
    answer: 1,
    explanation: "Salt sensitivity is defined as a change in mean arterial pressure (MAP) of ≥10 mmHg (some define as ≥5% change in MAP) in response to acute sodium loading versus sodium depletion protocols. Approximately 50% of hypertensives and 25% of normotensives are salt-sensitive. Salt sensitivity is more common in elderly, Black populations, diabetics, those with chronic kidney disease, and obese individuals. South Asians also show higher salt sensitivity. It is associated with higher cardiovascular risk independent of resting BP."
  },
  {
    id: 18,
    question: "The DASH (Dietary Approaches to Stop Hypertension) trial demonstrated that the DASH diet reduced systolic blood pressure by approximately how much in hypertensives?",
    options: ["2-3 mmHg", "5-6 mmHg", "11-12 mmHg", "18-20 mmHg"],
    answer: 2,
    explanation: "The DASH trial (Appel et al., NEJM 1997) showed that the DASH diet (rich in fruits, vegetables, low-fat dairy, whole grains, poultry, fish; low in saturated fat, red meat, sweets, sugar-sweetened beverages) reduced systolic BP by approximately 11-12 mmHg and diastolic BP by 5-6 mmHg in hypertensives compared to a control diet. In normotensives, reduction was about 3 mmHg systolic. Combined with sodium restriction (DASH-Sodium trial), reductions were even greater."
  },
  {
    id: 19,
    question: "Target organ damage (TOD) assessment in hypertension includes all of the following EXCEPT:",
    options: [
      "Electrocardiogram for left ventricular hypertrophy",
      "Urine albumin-to-creatinine ratio for nephropathy",
      "Serum HDL cholesterol as marker of vascular damage",
      "Fundoscopy for hypertensive retinopathy"
    ],
    answer: 2,
    explanation: "Serum HDL cholesterol is a cardiovascular risk factor but not a marker of hypertensive target organ damage (TOD). Standard TOD assessment includes: ECG (LVH - Sokolow-Lyon or Cornell criteria), echocardiogram (LVH, diastolic dysfunction), urine ACR (microalbuminuria ≥30 mg/g indicates nephropathy), serum creatinine and eGFR (renal damage), fundoscopy (Keith-Wagener-Barker retinopathy grades), ankle-brachial index (peripheral vascular disease), carotid intima-media thickness (subclinical atherosclerosis), and pulse wave velocity (arterial stiffness)."
  },
  {
    id: 20,
    question: "A hypertensive urgency is distinguished from a hypertensive emergency by:",
    options: [
      "The level of blood pressure - urgency is 160-179 mmHg systolic and emergency is ≥180 mmHg",
      "The presence of acute target organ damage - emergency has acute TOD, urgency does not",
      "The need for IV vs oral antihypertensives - urgency uses oral agents",
      "The duration of hypertension - urgency is acute onset, emergency is chronic"
    ],
    answer: 1,
    explanation: "The critical distinction between hypertensive emergency and urgency is the presence or absence of acute target organ damage (TOD), not the BP level alone. Hypertensive emergency: severely elevated BP (usually >180/120 mmHg) WITH acute TOD (hypertensive encephalopathy, acute MI, aortic dissection, acute HF/pulmonary edema, acute kidney injury, eclampsia, hypertensive retinopathy grade III/IV). Requires IV antihypertensives and ICU admission. Hypertensive urgency: severely elevated BP WITHOUT acute TOD. Managed with oral agents and outpatient follow-up."
  },
  {
    id: 21,
    question: "Resistant hypertension is defined as BP above target despite treatment with:",
    options: [
      "Two antihypertensive drugs at maximum tolerated doses",
      "Three antihypertensive drugs of different classes at optimal doses, including a diuretic",
      "Four antihypertensive drugs at any dose",
      "Any antihypertensive drug for more than 6 months"
    ],
    answer: 1,
    explanation: "Resistant hypertension is defined as BP remaining above target (≥140/90 mmHg for most, ≥130/80 mmHg per ACC/AHA 2017) despite concurrent use of three antihypertensive agents of different classes at optimal/maximally tolerated doses, one of which must be a diuretic. Prevalence is about 10-15% of treated hypertensives. Before diagnosing true resistance, pseudo-resistance must be excluded (poor medication adherence, white coat effect, inadequate doses/combinations, interfering substances like NSAIDs/OCPs). Refractory hypertension requires ≥5 drugs."
  },
  {
    id: 22,
    question: "Regarding hypertension in pregnancy, the HELLP syndrome is characterized by:",
    options: [
      "Hypertension, Elevated Liver enzymes, Low Platelet count",
      "Hemolysis, Elevated Liver enzymes, Low Platelet count",
      "Hemolysis, Edema, Low Protein in urine",
      "Hypertension, Edema, Low Platelet count, Proteinuria"
    ],
    answer: 1,
    explanation: "HELLP syndrome stands for Hemolysis, Elevated Liver enzymes, and Low Platelet count. It is a severe complication of preeclampsia/eclampsia occurring in 0.5-0.9% of all pregnancies and 10-20% of severe preeclampsia cases. Features: microangiopathic hemolytic anemia, elevated AST/ALT >70 IU/L, platelets <100,000/mm3. Definitive treatment is delivery. Pre-eclampsia is defined as hypertension (≥140/90 mmHg) after 20 weeks gestation with proteinuria (≥300 mg/24 hours or ACR ≥30 mg/mmol) or other features of end-organ damage."
  },
  {
    id: 23,
    question: "Pediatric hypertension is defined based on:",
    options: [
      "Absolute BP values of ≥120/80 mmHg for all children above 10 years",
      "BP ≥95th percentile for age, sex, and height on three separate occasions",
      "BP >140/90 mmHg at any age above 5 years",
      "Systolic BP >2 standard deviations above the mean for age group"
    ],
    answer: 1,
    explanation: "Pediatric hypertension (ages 1-13 years) is defined as average systolic and/or diastolic BP ≥95th percentile for age, sex, and height on 3 or more separate occasions. Elevated BP (formerly prehypertension) is 90th-95th percentile. For adolescents ≥13 years, adult thresholds (≥130/80 mmHg for Stage 1, ≥140/90 mmHg for Stage 2 per AAP 2017) apply. Height-based normative tables (from Task Force on Blood Pressure Control in Children) are used. Secondary hypertension is more common in children than adults, with renal disease being the leading cause."
  },
  {
    id: 24,
    question: "Which is the most common identifiable cause of secondary hypertension?",
    options: [
      "Primary aldosteronism (Conn's syndrome)",
      "Renal parenchymal disease (chronic kidney disease)",
      "Renovascular hypertension (renal artery stenosis)",
      "Pheochromocytoma"
    ],
    answer: 1,
    explanation: "Renal parenchymal disease (chronic kidney disease, glomerulonephritis, polycystic kidney disease) is the most common identifiable cause of secondary hypertension, accounting for 2-5% of hypertension cases. Primary aldosteronism is the most common endocrine cause (5-10% of hypertensives, much more common than previously thought). Renovascular hypertension (fibromuscular dysplasia in young women, atherosclerosis in elderly) accounts for 1-5%. Pheochromocytoma is rare (<0.5%). Other causes: obstructive sleep apnea, hypothyroidism, Cushing's syndrome, coarctation of aorta."
  },
  {
    id: 25,
    question: "Which of the following is a non-modifiable risk factor for coronary artery disease?",
    options: [
      "Smoking",
      "Dyslipidemia",
      "Family history of premature CAD in first-degree male relative before age 55",
      "Physical inactivity"
    ],
    answer: 2,
    explanation: "Family history of premature CAD (in a first-degree male relative before age 55, or female relative before age 65) is a non-modifiable risk factor for CAD. Other non-modifiable factors include: age (men ≥45 years, women ≥55 years), male sex (women have lower risk pre-menopause, higher post-menopause), and ethnicity (South Asians have higher risk). Modifiable risk factors include smoking, dyslipidemia, hypertension, diabetes, obesity, physical inactivity, unhealthy diet, and psychosocial factors."
  },
  {
    id: 26,
    question: "The Framingham Risk Score (FRS) calculates 10-year risk for cardiovascular events and includes which variables?",
    options: [
      "Age, sex, total cholesterol, HDL cholesterol, systolic BP, BP treatment status, smoking status, diabetes",
      "Age, sex, LDL cholesterol, triglycerides, diastolic BP, smoking, obesity, family history",
      "Age, sex, BMI, waist circumference, fasting glucose, blood pressure, smoking, alcohol use",
      "Age, sex, C-reactive protein, total cholesterol, BP, smoking, renal function"
    ],
    answer: 0,
    explanation: "The Framingham Risk Score (Wilson et al., 1998; updated 2001) calculates 10-year cardiovascular risk using: age, sex, total cholesterol, HDL cholesterol, systolic blood pressure, whether BP is treated, current smoking status, and diabetes status (in some versions). Low risk: <10%; intermediate: 10-20%; high: >20%. The Pooled Cohort Equations (PCE/ASCVD risk calculator, ACC/AHA 2013) uses similar variables but also includes race. FRS was derived from predominantly White populations and may underestimate risk in South Asians."
  },
  {
    id: 27,
    question: "The 2013 ACC/AHA Pooled Cohort Equations (ASCVD Risk Calculator) is indicated for which primary prevention population?",
    options: [
      "All adults aged 18-75 years without established cardiovascular disease",
      "Adults aged 40-79 years without established CVD or diabetes, with LDL 70-189 mg/dL",
      "Adults aged 30-80 years with at least one cardiovascular risk factor",
      "Adults aged 21-70 years with hyperlipidemia requiring statin therapy"
    ],
    answer: 1,
    explanation: "The ACC/AHA 2013 Pooled Cohort Equations are validated for primary prevention in adults aged 40-79 years, without established atherosclerotic cardiovascular disease (ASCVD), with LDL cholesterol 70-189 mg/dL. It estimates 10-year risk for first atherosclerotic CVD event (non-fatal MI, coronary heart disease death, or stroke). For those aged <40 or >79 years, or those with established CVD/diabetes/very high LDL, different approaches apply. Notably, the ASCVD calculator includes race (African American vs White) as a variable."
  },
  {
    id: 28,
    question: "In acute myocardial infarction, cardiac troponin (cTnI or cTnT) is preferred over CK-MB because:",
    options: [
      "Troponin rises faster than CK-MB (within 1 hour of MI onset)",
      "Troponin has greater cardiac specificity and remains elevated for 7-14 days (longer diagnostic window)",
      "Troponin levels directly correlate with infarct size, making it useful for monitoring therapy",
      "Troponin does not rise in non-cardiac conditions like renal failure, unlike CK-MB"
    ],
    answer: 1,
    explanation: "Cardiac troponin (cTnI and cTnT) is preferred over CK-MB for MI diagnosis because of greater cardiac specificity and prolonged elevation (7-14 days for standard assay, allowing late presentation diagnosis). Both rise at similar time (3-6 hours after MI onset); high-sensitivity troponin (hs-cTn) can rise within 1-3 hours. CK-MB returns to normal within 48-72 hours and has lower specificity (skeletal muscle also expresses some CK-MB). Troponin does rise in non-cardiac conditions (Type 2 MI, renal failure, PE, myocarditis, heart failure) - these are considered 'Type 2 MI' or 'myocardial injury'."
  },
  {
    id: 29,
    question: "The ECG finding most specific for STEMI that mandates immediate reperfusion therapy is:",
    options: [
      "ST-segment depression >1 mm in two contiguous leads",
      "ST-segment elevation ≥1 mm in two or more contiguous limb leads or ≥2 mm in two or more contiguous precordial leads (or LBBB)",
      "New Q waves in two or more leads",
      "T-wave inversions in precordial leads V1-V4"
    ],
    answer: 1,
    explanation: "STEMI is defined by new ST-elevation ≥1 mm (0.1 mV) in two or more contiguous limb leads or ≥2 mm (0.2 mV) in two or more contiguous precordial leads, OR new (or presumed new) left bundle branch block (LBBB). This ECG finding mandates immediate reperfusion (primary PCI within 90 minutes of first medical contact, or thrombolysis if PCI unavailable within 120 minutes). ST depression indicates NSTEMI or unstable angina. New Q waves indicate completed infarction. De Winter T-waves (anterior ST depression with hyperacute T-waves) is an equivalent of LAD occlusion."
  },
  {
    id: 30,
    question: "The preferred reperfusion strategy for STEMI, when available, is primary PCI. If PCI is not available within the recommended time window, fibrinolysis should be administered within:",
    options: [
      "30 minutes of first medical contact (FMC)",
      "60 minutes of FMC ('door-to-needle' within 30 minutes of hospital arrival)",
      "12 hours of symptom onset if PCI facility is >120 minutes away",
      "24 hours of symptom onset as late thrombolysis is still beneficial"
    ],
    answer: 1,
    explanation: "If primary PCI cannot be performed within 120 minutes of first medical contact (FMC), fibrinolysis should be administered. The target is FMC-to-needle time of ≤30 minutes ('door-to-needle' ≤30 minutes). Fibrinolysis is most effective within 2-3 hours of symptom onset (reduces mortality by ~25%) and can be used up to 12 hours. After successful fibrinolysis, coronary angiography should be performed within 3-24 hours (pharmacoinvasive strategy). Absolute contraindications include prior hemorrhagic stroke, recent surgery, active bleeding, severe uncontrolled hypertension."
  },
  {
    id: 31,
    question: "Cardiac rehabilitation (CR) consists of how many phases, and what does Phase II involve?",
    options: [
      "Two phases; Phase II is outpatient supervised exercise training for 3-6 months",
      "Three phases; Phase II is supervised outpatient exercise program lasting 6-12 weeks starting weeks after discharge",
      "Four phases; Phase II is the inpatient phase during hospitalization for MI",
      "Three phases; Phase II is long-term maintenance exercise at home"
    ],
    answer: 1,
    explanation: "Cardiac rehabilitation has three phases: Phase I (inpatient, during hospitalization) - early mobilization, patient education, risk stratification; Phase II (outpatient, supervised) - structured exercise training (ECG-monitored), risk factor modification, education, psychosocial support, typically 6-12 weeks, starting 1-6 weeks post-discharge; Phase III (maintenance, long-term) - independent unsupervised exercise, lifelong risk factor management. CR reduces mortality by 20-30% and hospital readmissions, improves functional capacity and quality of life. It is vastly underutilized in India and other LMICs."
  },
  {
    id: 32,
    question: "Globally, approximately what percentage of strokes are ischemic (as opposed to hemorrhagic)?",
    options: ["50%", "65%", "85%", "95%"],
    answer: 2,
    explanation: "Approximately 85% of all strokes are ischemic (caused by arterial occlusion - thrombotic or embolic), while 15% are hemorrhagic (intracerebral hemorrhage 10-15%, subarachnoid hemorrhage 5%). Ischemic strokes are further classified by TOAST criteria: large artery atherosclerosis, cardioembolic (e.g., AF), small vessel occlusion (lacunar), other determined etiology, and undetermined etiology (cryptogenic). The proportion of hemorrhagic stroke is higher in low-income countries and in Asian populations, where hypertension is more prevalent and less controlled."
  },
  {
    id: 33,
    question: "Atrial fibrillation (AF) increases the risk of cardioembolic stroke by approximately:",
    options: ["Twofold", "Fivefold", "Tenfold", "Twentyfold"],
    answer: 1,
    explanation: "Atrial fibrillation increases the risk of stroke approximately 5-fold compared to age-matched controls without AF. AF is responsible for about 20-25% of all ischemic strokes (cardioembolic mechanism - stasis of blood in left atrial appendage leading to thrombus formation and embolism). Older patients, those with hypertension, heart failure, prior stroke/TIA, diabetes, or vascular disease have even higher stroke risk (quantified by CHA2DS2-VASc score). Anticoagulation with warfarin or DOACs reduces stroke risk by about 60-65% in AF."
  },
  {
    id: 34,
    question: "A Transient Ischemic Attack (TIA) is currently defined as:",
    options: [
      "Focal neurological deficit lasting less than 24 hours with no infarction on imaging",
      "Focal neurological deficit lasting less than 1 hour that completely resolves",
      "Any temporary neurological deficit caused by cerebrovascular disease, regardless of imaging findings",
      "Focal neurological deficit lasting <24 hours without imaging requirement"
    ],
    answer: 0,
    explanation: "The tissue-based definition of TIA (replacing the old time-based <24 hour definition) defines TIA as: transient episode of neurological dysfunction caused by focal brain, spinal cord, or retinal ischemia WITHOUT acute infarction on imaging (CT or MRI). The time-based definition (<24 hours) is outdated - many events lasting <1 hour have infarction on DWI-MRI ('TIA mimic'). TIA is a medical emergency: 10-15% risk of stroke within 3 months, half within 48 hours. ABCD2 score (Age, BP, Clinical features, Duration, Diabetes) stratifies early stroke risk post-TIA."
  },
  {
    id: 35,
    question: "The time window for IV thrombolysis (rt-PA/alteplase) in acute ischemic stroke is:",
    options: [
      "Within 3 hours of symptom onset for all eligible patients",
      "Within 4.5 hours of symptom onset in eligible patients per guidelines",
      "Within 6 hours of symptom onset",
      "Within 24 hours if DWI-FLAIR mismatch is present on MRI"
    ],
    answer: 1,
    explanation: "IV alteplase (rt-PA, 0.9 mg/kg, max 90 mg) is indicated within 4.5 hours of ischemic stroke onset in eligible patients (per AHA/ASA 2019 and ESO guidelines). The original NINDS trial established 3-hour benefit; ECASS III extended this to 4.5 hours with additional exclusions (age >80, prior stroke + diabetes, on anticoagulants, NIHSS >25). Endovascular thrombectomy (EVT) extends to 24 hours in selected patients with large vessel occlusion and favorable perfusion imaging (DAWN, DEFUSE-3 trials). India has very low thrombolysis rates (<5%) due to delayed presentation, lack of stroke units, and cost."
  },
  {
    id: 36,
    question: "Dyslipidemia management targets for very high cardiovascular risk patients (established CVD or diabetes with target organ damage) per ESC/EAS 2019 guidelines recommend LDL-C to be reduced to:",
    options: [
      "Less than 100 mg/dL (<2.6 mmol/L)",
      "Less than 70 mg/dL (<1.8 mmol/L) AND ≥50% reduction from baseline",
      "Less than 55 mg/dL (<1.4 mmol/L) AND ≥50% reduction from baseline",
      "Less than 40 mg/dL (<1.0 mmol/L) for secondary prevention only"
    ],
    answer: 2,
    explanation: "ESC/EAS 2019 guidelines (most current at ICMR exam level) recommend: Very high risk (established ASCVD, DM with TOD, severe CKD, familial hypercholesterolemia with CVD, 10-year risk ≥10%): LDL-C <55 mg/dL (<1.4 mmol/L) AND ≥50% reduction from baseline. High risk (DM without TOD, moderate CKD, 10-year risk 5-10%): LDL-C <70 mg/dL (<1.8 mmol/L) AND ≥50% reduction. Moderate risk: <100 mg/dL. Low risk: <116 mg/dL. ACC/AHA 2018 uses a risk-based approach with high-intensity statins for high-risk patients."
  },
  {
    id: 37,
    question: "Secondary prevention pharmacotherapy after acute MI includes all of the following EXCEPT:",
    options: [
      "Dual antiplatelet therapy (aspirin + P2Y12 inhibitor) for 12 months",
      "High-intensity statin therapy regardless of baseline LDL-C",
      "Beta-blocker therapy for all patients with reduced LVEF",
      "Calcium channel blocker as preferred antihypertensive agent post-MI"
    ],
    answer: 3,
    explanation: "Calcium channel blockers (specifically non-dihydropyridine CCBs like verapamil and diltiazem) are generally avoided post-MI, especially in patients with reduced ejection fraction (EF), as they have negative inotropic effects. Standard post-MI secondary prevention includes: dual antiplatelet therapy (aspirin + clopidogrel/ticagrelor/prasugrel) for 12 months; high-intensity statin (regardless of baseline LDL-C); ACE inhibitor or ARB (especially if LVEF <40%, hypertension, diabetes, CKD); beta-blocker (especially if LVEF <40%, arrhythmia, hypertension); aldosterone antagonist if LVEF <40% with heart failure symptoms or diabetes."
  },
  {
    id: 38,
    question: "Primordial prevention of cardiovascular disease focuses on:",
    options: [
      "Treating established risk factors in high-risk individuals to prevent cardiovascular events",
      "Preventing the development of risk factors in the first place through population-wide measures",
      "Screening asymptomatic individuals for subclinical atherosclerosis",
      "Rehabilitating patients after cardiovascular events to prevent recurrence"
    ],
    answer: 1,
    explanation: "Primordial prevention aims to prevent the emergence of risk factors themselves in a population or individual before they develop. It targets the social, environmental, economic, and behavioural determinants: healthy urban planning, school-based nutrition and physical activity programs, food policy (reducing salt/sugar/trans fats in processed food), tobacco control legislation, physical activity-friendly environments. This is distinguished from: Primary prevention (preventing CVD events in those with risk factors), Secondary prevention (preventing recurrence in those with established CVD), and Tertiary prevention (rehabilitation after events)."
  },
  {
    id: 39,
    question: "The WHO PEN (Package of Essential NCD Interventions) for primary healthcare includes which cardiovascular component?",
    options: [
      "Universal echocardiography screening for all adults above 40 years",
      "Risk stratification using WHO CVD risk charts and treatment protocols for hypertension, diabetes, and high cardiovascular risk",
      "Coronary artery calcium scoring for all hypertensives",
      "Mandatory lipid panel screening every 5 years from age 20"
    ],
    answer: 1,
    explanation: "WHO PEN is designed for low-resource primary healthcare settings and includes protocols for: cardiovascular risk assessment using WHO/ISH CVD risk prediction charts (which don't require laboratory tests in chart B version), treatment of hypertension and diabetes, lifestyle counseling, and management of people at high CVD risk (≥20% 10-year risk). It emphasizes task-sharing/task-shifting (non-physician healthcare workers can implement protocols), affordable essential medicines, and integration into primary care. PEN was updated in 2020 and is the basis for many LMIC NCD programs."
  },
  {
    id: 40,
    question: "The WHO HEARTS technical package for cardiovascular disease management in primary care is organized around which framework?",
    options: [
      "HEARTS: Healthy lifestyle counseling, Evidence-based protocols, Access to medicines, Risk factor monitoring, Team-based care, Systems for patient follow-up",
      "HEARTS: Hypertension management, Evidence-based protocols, Access to essential medicines and technology, Risk stratification, Team-based care, Systems for monitoring",
      "HEARTS: H - Healthy lifestyle, E - Evidence-based treatment protocols, A - Access to essential medicines, R - Risk-based CVD management, T - Team-based care, S - Systems for monitoring and evaluation",
      "HEARTS: H - Hypertension screening, E - Emergency response for MI/stroke, A - Aspirin therapy, R - Rehabilitation, T - Tobacco cessation, S - Statin therapy"
    ],
    answer: 2,
    explanation: "The WHO HEARTS technical package (2018) provides a systematic approach to CVD management in primary care: H - Healthy lifestyle counseling (tobacco cessation, diet, physical activity, alcohol); E - Evidence-based treatment protocols (standardized treatment algorithms); A - Access to essential medicines and technology (availability of affordable medications and diagnostics); R - Risk-based CVD management (stratification using CVD risk scores); T - Team-based care (task-sharing with non-physician providers); S - Systems for monitoring and evaluation (data systems to track coverage and outcomes). HEARTS has been adopted in over 30 countries including India."
  },
  {
    id: 41,
    question: "Geoffrey Rose's population strategy for CVD prevention versus the high-risk strategy: which statement is correct?",
    options: [
      "High-risk strategy is superior because it is more efficient in identifying who will benefit",
      "Population strategy shifts the entire risk distribution, benefiting many but giving small individual benefit; high-risk strategy gives large benefit to few",
      "Population strategy is less cost-effective than high-risk strategy for CVD prevention",
      "Both strategies are equivalent in total cardiovascular events prevented at the population level"
    ],
    answer: 1,
    explanation: "Geoffrey Rose's 'prevention paradox': population strategy (universal interventions to shift entire risk distribution - e.g., reducing population salt intake) produces small individual benefit but large population benefit ('a large number of people at small risk may give rise to more cases of disease than a small number who are at high risk'). High-risk strategy (identifying and treating those at highest risk) gives large individual benefit to few. Both strategies are complementary. Rose advocated for population strategy as the foundation because most CVD events occur in the large number at moderate risk, not the small number at very high risk."
  },
  {
    id: 42,
    question: "Under the National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCS), cardiovascular disease-specific activities include:",
    options: [
      "Universal cardiac catheterization for all MI patients in district hospitals",
      "Population-level screening for hypertension, diabetes, and common NCDs at health and wellness centers with referral pathways",
      "Provision of free statins and aspirin to all adults above 40 years in India",
      "Mandatory cardiovascular risk scoring for all government employees"
    ],
    answer: 1,
    explanation: "NPCDCS (launched 2010, integrated with NHM) focuses on: population-level NCD risk factor screening (opportunistic screening for hypertension, diabetes, and cancers at NCD clinics/Health and Wellness Centers), promotive and preventive care, establishment of NCD clinics at district hospitals and CHCs, treatment of common NCDs, and referral to tertiary care. The Ayushman Bharat component (Health and Wellness Centers) now conducts comprehensive primary healthcare including hypertension/diabetes management. Universal free statins/aspirin for all adults is not part of the program - targeting is based on risk stratification."
  },
  {
    id: 43,
    question: "A community-based cardiovascular intervention using task-shifting to ASHAs and ANMs for hypertension management in India would most appropriately involve:",
    options: [
      "ASHAs independently prescribing antihypertensive medications and adjusting doses",
      "ASHAs and ANMs conducting BP measurement, identifying hypertensives, counseling on lifestyle modification, ensuring medication adherence, and facilitating referral under medical supervision",
      "ASHAs performing ECGs and interpreting results in the community",
      "ANMs independently diagnosing and managing hypertensive emergencies at sub-center level"
    ],
    answer: 1,
    explanation: "Task-shifting for hypertension in India appropriately involves ASHAs and ANMs in: blood pressure measurement and screening, identifying and tracking hypertensives in the community, counseling on lifestyle modification (DASH diet, salt reduction, physical activity, tobacco cessation, alcohol reduction), medication adherence support and follow-up, and facilitating referral to Medical Officers for diagnosis and prescription. Prescribing and dose adjustment remain with licensed medical practitioners. This model is supported by evidence from the India Hypertension Control Initiative (IHCI) and WHO HEARTS implementation experience."
  },
  {
    id: 44,
    question: "The fixed-dose combination (FDC) 'polypill' for cardiovascular prevention typically contains which combination of drugs?",
    options: [
      "Aspirin + metformin + beta-blocker + statin",
      "Aspirin + ACE inhibitor/ARB + statin + beta-blocker (with or without hydrochlorothiazide)",
      "Aspirin + calcium channel blocker + ACE inhibitor + diuretic",
      "Statin + ACE inhibitor + diuretic + metformin"
    ],
    answer: 1,
    explanation: "The polypill concept (proposed by Wald and Law in 2003) suggests a fixed-dose combination containing: aspirin (75 mg) + statin (e.g., simvastatin 40 mg) + one or more antihypertensives (ACE inhibitor, beta-blocker, thiazide diuretic). Clinical trials (TIPS, UMPIRE, IMPACT, PolyIran, HOPE-3) show polypills improve medication adherence by 30-40% and reduce cardiovascular events. The Polycap (TIPS trial, India) contains hydrochlorothiazide + atenolol + ramipril + simvastatin + aspirin. The polypill is particularly relevant for LMIC settings where pill burden and cost are barriers to secondary prevention. India's generic pharmaceutical capability makes polypill production feasible."
  },
  {
    id: 45,
    question: "The India Hypertension Control Initiative (IHCI) was launched in 2017 as a collaboration between which organizations?",
    options: [
      "ICMR, WHO India, Resolve to Save Lives, and Ministry of Health and Family Welfare",
      "AIIMS, CDC Atlanta, and National Heart Institute",
      "WHO Geneva, World Heart Federation, and Indian Medical Association",
      "Ministry of Health, Indian Council of Medical Research, and World Bank"
    ],
    answer: 0,
    explanation: "The India Hypertension Control Initiative (IHCI) was launched in 2017 as a collaboration between the Ministry of Health and Family Welfare (MoHFW), Indian Council of Medical Research (ICMR), WHO India, and Resolve to Save Lives (a global public health initiative). IHCI implemented in 5 initial states (later expanded) uses: standardized treatment protocols (simple algorithm with amlodipine + losartan + hydrochlorothiazide), fixed-drug supply, digital patient tracking, task-sharing with ASHAs, and quarterly performance monitoring. It follows the WHO HEARTS model and aims to achieve 80% hypertension control in enrolled patients."
  },
  {
    id: 46,
    question: "A STEMI network (hub-and-spoke model) for improving MI outcomes in India functions by:",
    options: [
      "Performing primary PCI at all spoke hospitals to reduce treatment delays",
      "Identifying STEMI at spoke hospitals via telemedicine ECG transmission, transporting directly to PCI-capable hub, or administering thrombolysis at spoke with pharmacoinvasive strategy",
      "Establishing cardiac ICUs at all district hospitals for STEMI management",
      "Training all physicians at spoke hospitals to perform emergency PCI"
    ],
    answer: 1,
    explanation: "STEMI networks in India (e.g., Tamil Nadu STEMI program, Kerala STEMI network, Stemi India) use a hub-and-spoke model: Spoke (district/community hospital) - 12-lead ECG at first medical contact, telemedicine transmission to hub cardiologist for diagnosis, dual antiplatelet loading, thrombolysis if PCI hub >120 minutes away (pharmacoinvasive strategy); Hub (tertiary PCI center) - receives pre-activated catheterization lab alert, performs primary PCI or rescue PCI after thrombolysis, then pharmacoinvasive PCI within 3-24 hours. These networks have dramatically reduced door-to-balloon times and mortality in India. STEMI India registry has documented outcomes."
  },
  {
    id: 47,
    question: "Barriers to cardiac rehabilitation (CR) uptake in Low and Middle Income Countries (LMICs) like India include all of the following EXCEPT:",
    options: [
      "Low patient awareness and physician referral rates for CR",
      "High cost and poor insurance coverage for CR programs",
      "Lack of CR facilities - India has very few accredited CR programs",
      "Overabundance of CR centers leading to competition and fragmented care"
    ],
    answer: 3,
    explanation: "Cardiac rehabilitation is severely underutilized in India and other LMICs. There is certainly no overabundance of CR centers - this is a fictitious option. Real barriers include: Patient-level: low awareness, cultural factors, transportation, inability to take time off work, financial constraints; System-level: very few CR facilities (India has <50 formal CR programs for >1 billion population), inadequate insurance coverage for CR, poor physician referral rates (<10% of eligible post-MI patients are referred), no standardized CR protocols; Societal-level: lack of safe exercise facilities, misconception that rest is better than exercise after MI. Home-based and digital/mobile CR are being explored to overcome these barriers."
  },
  {
    id: 48,
    question: "The population attributable risk (PAR%) for hypertension in causing stroke in India is approximately:",
    options: [
      "10-15%",
      "25-30%",
      "45-55%",
      "65-70%"
    ],
    answer: 2,
    explanation: "Hypertension is the single largest modifiable risk factor for stroke globally and in India. Population attributable risk (PAR%) of hypertension for stroke in India is approximately 45-55%, meaning nearly half of all strokes could theoretically be prevented if hypertension were eliminated. This is higher in India than in Western countries due to higher prevalence of untreated/poorly controlled hypertension. Studies from India (INSPIRE, Ludhiana ICMR study) confirm hypertension as the dominant stroke risk factor, present in 60-70% of stroke patients. Effective hypertension control would have the single largest impact on stroke burden reduction in India."
  },
  {
    id: 49,
    question: "The Framingham Heart Study's contribution to understanding CVD epidemiology included which landmark finding?",
    options: [
      "Discovery that low-dose aspirin prevents first MI in all adults above 45 years",
      "First demonstration that cholesterol-lowering with statins reduces cardiovascular mortality",
      "Identification that cigarette smoking, hypertension, and hypercholesterolemia are major risk factors for CHD and the concept of 'risk factors' itself",
      "Proof that Mediterranean diet reduces cardiovascular events more than drug therapy"
    ],
    answer: 2,
    explanation: "The Framingham Heart Study (began 1948, Framingham, Massachusetts) is one of the most important cardiovascular epidemiology studies in history. Its landmark contributions include: coining the term 'risk factors' (Kannel et al., 1961); demonstrating that smoking, hypertension, hypercholesterolemia, obesity, diabetes, and physical inactivity are major risk factors for CHD; developing the Framingham Risk Score; establishing that HDL is protective and LDL is atherogenic; linking atrial fibrillation to stroke risk; and identifying heart failure risk factors. It enrolled 5,209 adults and now continues with third-generation participants."
  },
  {
    id: 50,
    question: "The 'Rule of Halves' applied to hypertension in India states:",
    options: [
      "Only half of hypertensives in India have systolic hypertension, the rest have diastolic hypertension",
      "Of all hypertensives: half are unaware, of those aware half are untreated, of those treated half are uncontrolled",
      "Hypertension control can be achieved in 50% of patients with a single drug",
      "Half of all CVD events in India occur in hypertensives, the other half in normotensives"
    ],
    answer: 1,
    explanation: "The 'Rule of Halves' (originally described in UK, widely applied to India) states that among all hypertensives in the community: approximately half are undiagnosed/unaware of their condition; of those aware, approximately half are not on treatment; of those on treatment, approximately half have uncontrolled BP. This means only about 12.5% (1/8th) of all hypertensives in the community have controlled BP. NFHS-5 data for India broadly confirms this pattern - large treatment and control gaps persist. The India Hypertension Control Initiative (IHCI) specifically targets improving each step of this cascade (awareness, treatment, control)."
  },
];

export default questions;

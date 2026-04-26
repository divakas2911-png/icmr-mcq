const questions = [
  {
    id: 1,
    question: "A 45-year-old obese man presents with polyuria, polydipsia, and fatigue for 3 months. Fasting plasma glucose is 132 mg/dL on two separate occasions. C-peptide level is normal. Which of the following is the most appropriate diagnosis?",
    options: [
      "Type 1 diabetes mellitus",
      "Type 2 diabetes mellitus",
      "Impaired fasting glucose",
      "Latent autoimmune diabetes in adults (LADA)"
    ],
    answer: 1,
    explanation: "Type 2 diabetes mellitus is characterized by insulin resistance and relative insulin deficiency, commonly occurring in obese middle-aged adults. FPG >= 126 mg/dL on two occasions meets the ADA/WHO diagnostic criteria. Normal C-peptide indicates preserved beta-cell function, distinguishing it from Type 1 DM where C-peptide is low/absent. LADA would show positive islet autoantibodies. IFG is defined as FPG 100-125 mg/dL (ADA) or 110-125 mg/dL (WHO)."
  },
  {
    id: 2,
    question: "According to WHO 2006 and ADA 2024 criteria, which of the following correctly defines the diagnostic threshold for diabetes mellitus using HbA1c?",
    options: [
      "HbA1c >= 6.0%",
      "HbA1c >= 6.5%",
      "HbA1c >= 7.0%",
      "HbA1c >= 7.5%"
    ],
    answer: 1,
    explanation: "ADA 2010 onwards and subsequently adopted widely, HbA1c >= 6.5% (48 mmol/mol) is diagnostic of diabetes mellitus when measured by a NGSP-certified method standardized to the DCCT assay. HbA1c 5.7-6.4% indicates prediabetes (ADA) or 'increased risk.' WHO adopted HbA1c >= 6.5% as a diagnostic criterion in 2011. HbA1c >= 6.0% falls in the 'at risk' category, not diagnostic."
  },
  {
    id: 3,
    question: "In the WHO 75g oral glucose tolerance test (OGTT), which 2-hour plasma glucose value is used to diagnose diabetes mellitus?",
    options: [
      ">= 140 mg/dL",
      ">= 160 mg/dL",
      ">= 200 mg/dL",
      ">= 180 mg/dL"
    ],
    answer: 2,
    explanation: "According to WHO criteria, a 2-hour plasma glucose >= 200 mg/dL (11.1 mmol/L) during a 75g OGTT is diagnostic of diabetes mellitus. A 2-hour value of 140-199 mg/dL defines Impaired Glucose Tolerance (IGT). OGTT is the gold standard for diagnosing gestational diabetes and IGT. The fasting criterion is >= 126 mg/dL (7.0 mmol/L)."
  },
  {
    id: 4,
    question: "A 28-year-old pregnant woman at 26 weeks gestation has a 75g OGTT. Results: fasting 92 mg/dL, 1-hour 185 mg/dL, 2-hour 153 mg/dL. According to IADPSG/WHO 2013 criteria, what is the diagnosis?",
    options: [
      "Normal glucose tolerance in pregnancy",
      "Gestational diabetes mellitus",
      "Overt diabetes in pregnancy",
      "Impaired glucose tolerance"
    ],
    answer: 1,
    explanation: "According to IADPSG (International Association of Diabetes and Pregnancy Study Groups) 2010 criteria adopted by WHO 2013, GDM is diagnosed if any ONE of the following thresholds is met during a 75g OGTT: fasting >= 92 mg/dL, 1-hour >= 180 mg/dL, 2-hour >= 153 mg/dL. Here fasting is 92 mg/dL (meets threshold) and 2-hour is 153 mg/dL (meets threshold), confirming GDM. Overt diabetes requires fasting >= 126 mg/dL or 2-hour >= 200 mg/dL or random >= 200 mg/dL."
  },
  {
    id: 5,
    question: "Which of the following is NOT a component of the WHO 1999 metabolic syndrome definition?",
    options: [
      "Insulin resistance or Type 2 diabetes",
      "Blood pressure >= 140/90 mmHg",
      "Triglycerides >= 150 mg/dL",
      "LDL cholesterol >= 130 mg/dL"
    ],
    answer: 3,
    explanation: "The WHO 1999 metabolic syndrome criteria require insulin resistance (Type 2 DM, IFG, IGT, or low insulin sensitivity) PLUS two or more of: hypertension (BP >= 140/90 mmHg or on antihypertensives), dyslipidemia (TG >= 150 mg/dL and/or HDL < 35 mg/dL in men, < 39 mg/dL in women), central obesity (WHR > 0.9 men, > 0.85 women, or BMI > 30 kg/m²), microalbuminuria (UAE >= 20 mcg/min). LDL cholesterol is NOT a component of the WHO metabolic syndrome definition. IDF 2006 uses waist circumference as the central requirement."
  },
  {
    id: 6,
    question: "The MODY (Maturity Onset Diabetes of the Young) most commonly associated with mutations in the glucokinase gene (GCK), causing mild stable hyperglycemia, is:",
    options: [
      "MODY 1 (HNF-4alpha)",
      "MODY 2 (GCK)",
      "MODY 3 (HNF-1alpha)",
      "MODY 5 (HNF-1beta)"
    ],
    answer: 1,
    explanation: "MODY 2 is caused by heterozygous loss-of-function mutations in the glucokinase (GCK) gene. Glucokinase acts as a glucose sensor in pancreatic beta cells; its mutation raises the glucose threshold for insulin secretion, leading to mild, stable, non-progressive fasting hyperglycemia (typically 5.5-8 mmol/L). MODY 3 (HNF-1alpha) is the most common MODY and is progressive with good response to sulfonylureas. MODY 1 (HNF-4alpha) and MODY 5 (HNF-1beta) are associated with progressive beta-cell failure and renal abnormalities (MODY 5), respectively."
  },
  {
    id: 7,
    question: "A 60-year-old Type 2 diabetic presents to the emergency with blood glucose 650 mg/dL, serum osmolality 340 mOsm/kg, pH 7.35, and serum ketones negative. What is the diagnosis?",
    options: [
      "Diabetic ketoacidosis (DKA)",
      "Hyperosmolar hyperglycemic state (HHS)",
      "Lactic acidosis",
      "Euglycemic DKA"
    ],
    answer: 1,
    explanation: "Hyperosmolar Hyperglycemic State (HHS) is characterized by: severe hyperglycemia (typically > 600 mg/dL), markedly elevated serum osmolality (> 320 mOsm/kg), absence of significant ketosis or acidosis (pH > 7.30, bicarbonate > 15 mEq/L), and profound dehydration. It occurs predominantly in Type 2 diabetics with enough residual insulin to prevent ketogenesis but not hyperglycemia. DKA features pH < 7.30, significant ketosis, and usually lower glucose (250-500 mg/dL). Mortality of HHS (5-20%) is higher than DKA (< 1% in expert centers)."
  },
  {
    id: 8,
    question: "Which microvascular complication of diabetes is the LEADING cause of new cases of blindness in adults aged 20-74 years in developed countries?",
    options: [
      "Diabetic nephropathy",
      "Diabetic peripheral neuropathy",
      "Diabetic retinopathy",
      "Diabetic macular edema alone"
    ],
    answer: 2,
    explanation: "Diabetic retinopathy is the leading cause of new-onset blindness in working-age adults (20-74 years) in developed countries. It affects approximately one-third of people with diabetes. Proliferative diabetic retinopathy and diabetic macular edema are the vision-threatening stages. Diabetic nephropathy is the leading cause of end-stage renal disease (ESRD), while peripheral neuropathy is the most common microvascular complication overall. All three are microvascular complications driven by chronic hyperglycemia."
  },
  {
    id: 9,
    question: "According to the IDF Diabetes Atlas 2021, which country has the highest ABSOLUTE number of people living with diabetes?",
    options: [
      "India",
      "United States of America",
      "China",
      "Pakistan"
    ],
    answer: 2,
    explanation: "According to IDF Diabetes Atlas 2021 (10th edition), China has the highest absolute number of people with diabetes (approximately 140.9 million), followed by India (approximately 74.2 million), and the USA (approximately 32.2 million). However, India is projected to have the highest burden by 2045. The IDF estimated 537 million adults (20-79 years) live with diabetes globally in 2021, expected to rise to 783 million by 2045."
  },
  {
    id: 10,
    question: "Impaired Fasting Glucose (IFG) according to ADA 2024 criteria is defined as fasting plasma glucose of:",
    options: [
      "100-125 mg/dL",
      "110-125 mg/dL",
      "110-139 mg/dL",
      "100-139 mg/dL"
    ],
    answer: 0,
    explanation: "ADA defines IFG as fasting plasma glucose 100-125 mg/dL (5.6-6.9 mmol/L). WHO and many international organizations use a higher threshold of 110-125 mg/dL (6.1-6.9 mmol/L) for IFG. Impaired Glucose Tolerance (IGT) is defined by both ADA and WHO as 2-hour OGTT plasma glucose 140-199 mg/dL (7.8-11.0 mmol/L). Both IFG and IGT represent 'prediabetes' states associated with increased risk of progression to Type 2 DM and cardiovascular disease."
  },
  {
    id: 11,
    question: "The primary pathophysiological mechanism underlying insulin resistance in Type 2 diabetes mellitus involves:",
    options: [
      "Autoimmune destruction of pancreatic beta cells",
      "Post-receptor defect in insulin signaling pathway (IRS-1/PI3K/Akt)",
      "Reduced synthesis of proinsulin",
      "Increased glucagon secretion as the primary event"
    ],
    answer: 1,
    explanation: "Insulin resistance in Type 2 DM primarily involves defects in the post-receptor insulin signaling pathway. After insulin binds its receptor (tyrosine kinase), normal signaling proceeds via IRS-1 (Insulin Receptor Substrate-1) phosphorylation, activating PI3K (phosphoinositide 3-kinase), which phosphorylates Akt/PKB, leading to GLUT-4 translocation for glucose uptake. In insulin resistance, serine phosphorylation of IRS-1 (caused by excess free fatty acids, inflammation, etc.) impairs this cascade. Autoimmune beta-cell destruction is the mechanism in Type 1 DM. Increased glucagon is a secondary contributing factor (the 'bihormonal hypothesis')."
  },
  {
    id: 12,
    question: "A 38-year-old woman with Type 1 diabetes since age 12 is found to have urine albumin-to-creatinine ratio (UACR) of 45 mg/g on two out of three samples over 3 months, with eGFR 68 mL/min/1.73m2. According to KDIGO 2022, what stage of diabetic kidney disease does she have?",
    options: [
      "CKD G2 A1 - normal to mildly reduced eGFR with normal albuminuria",
      "CKD G2 A2 - normal to mildly reduced eGFR with moderately increased albuminuria",
      "CKD G3a A2 - mildly to moderately reduced eGFR with moderately increased albuminuria",
      "CKD G3a A1 - mildly to moderately reduced eGFR with normal albuminuria"
    ],
    answer: 1,
    explanation: "KDIGO CKD staging uses eGFR categories (G1-G5) and albuminuria categories (A1-A3). eGFR 60-89 mL/min/1.73m2 = G2 (mildly reduced). UACR 30-299 mg/g = A2 (moderately increased albuminuria, previously called 'microalbuminuria'). Therefore, this patient has CKD G2 A2. eGFR 45-59 = G3a. UACR < 30 mg/g = A1 (normal to mildly increased). The combination of eGFR 68 (G2) and UACR 45 mg/g (A2) gives CKD G2 A2, representing early diabetic nephropathy."
  },
  {
    id: 13,
    question: "According to the ACC/AHA 2017 hypertension guidelines, Stage 1 hypertension is defined as:",
    options: [
      "SBP 130-139 mmHg or DBP 80-89 mmHg",
      "SBP 140-159 mmHg or DBP 90-99 mmHg",
      "SBP 120-129 mmHg and DBP < 80 mmHg",
      "SBP >= 160 mmHg or DBP >= 100 mmHg"
    ],
    answer: 0,
    explanation: "ACC/AHA 2017 guidelines lowered hypertension thresholds significantly. The new classification: Normal: < 120/80 mmHg; Elevated: SBP 120-129 and DBP < 80 mmHg; Stage 1 HTN: SBP 130-139 OR DBP 80-89 mmHg; Stage 2 HTN: SBP >= 140 OR DBP >= 90 mmHg; Hypertensive crisis: SBP > 180 and/or DBP > 120 mmHg. This contrasts with JNC 8 (2014) which maintained the treatment threshold at >= 140/90 mmHg (or >= 150/90 for those > 60 years). Option C describes 'Elevated' blood pressure in ACC/AHA 2017 classification."
  },
  {
    id: 14,
    question: "Atherosclerosis pathogenesis begins primarily with:",
    options: [
      "Smooth muscle cell proliferation in the media",
      "Endothelial dysfunction and subendothelial accumulation of oxidized LDL",
      "Platelet aggregation on intact endothelium",
      "Calcification of the tunica adventitia"
    ],
    answer: 1,
    explanation: "The 'response to injury' hypothesis (Ross 1976, updated) describes atherosclerosis beginning with endothelial dysfunction/injury caused by risk factors (hypertension, dyslipidemia, smoking, diabetes). This leads to increased permeability and subendothelial accumulation of LDL, which undergoes oxidation (ox-LDL). Monocytes adhere to activated endothelium, migrate into the intima, differentiate into macrophages, engulf ox-LDL to form foam cells - the hallmark of the fatty streak, the earliest atherosclerotic lesion. Smooth muscle cell migration and proliferation (from media to intima) and platelet aggregation occur later in plaque progression."
  },
  {
    id: 15,
    question: "The Framingham Heart Study's 10-year cardiovascular risk score includes all of the following variables EXCEPT:",
    options: [
      "Age and sex",
      "Total cholesterol and HDL cholesterol",
      "Systolic blood pressure and treatment status",
      "Body mass index and waist circumference"
    ],
    answer: 3,
    explanation: "The Framingham 10-year CVD risk score (Wilson et al. 1998; updated versions) includes: age, sex, total cholesterol, HDL cholesterol, systolic blood pressure (and whether treated), diabetes status (yes/no), and smoking status. BMI and waist circumference are NOT included in the classic Framingham score, despite being important CVD risk factors. The ACC/AHA Pooled Cohort Equations (2013) similarly do not include BMI. The Framingham score was developed from the Framingham Heart Study cohort in Massachusetts and is primarily validated for White and Black American populations."
  },
  {
    id: 16,
    question: "A 58-year-old hypertensive smoker presents with sudden onset severe headache ('thunderclap headache'), neck stiffness, and photophobia. CT scan shows blood in the subarachnoid space. What type of stroke is this?",
    options: [
      "Ischemic stroke - cardioembolic",
      "Intracerebral hemorrhage",
      "Subarachnoid hemorrhage",
      "Lacunar infarct"
    ],
    answer: 2,
    explanation: "Subarachnoid hemorrhage (SAH) is characterized by sudden severe 'thunderclap' headache (worst headache of life), meningeal signs (neck stiffness, photophobia), and blood in the subarachnoid space on CT. SAH accounts for about 5% of all strokes; 85% are due to ruptured saccular (berry) aneurysms. Intracerebral hemorrhage causes blood in brain parenchyma (not subarachnoid space) and typically presents with focal deficits. Ischemic stroke (80% of all strokes) would not show blood on CT acutely. Lacunar infarcts are small deep infarcts from small vessel disease."
  },
  {
    id: 17,
    question: "According to the Global Burden of Disease study, cardiovascular diseases account for approximately what percentage of all deaths globally?",
    options: [
      "15%",
      "24%",
      "32%",
      "42%"
    ],
    answer: 2,
    explanation: "According to the Global Burden of Disease (GBD) 2019 data and WHO, cardiovascular diseases are the leading cause of death globally, accounting for approximately 32% of all global deaths (approximately 17.9 million deaths per year). Ischemic heart disease and stroke together account for the majority of CVD deaths. In India, CVD accounts for approximately 28-30% of all deaths. The WHO NCD Global Monitoring Framework 2017 reports cardiovascular diseases as responsible for the largest proportion of premature NCD deaths."
  },
  {
    id: 18,
    question: "In acute coronary syndrome (ACS), the finding that distinguishes NSTEMI from unstable angina is:",
    options: [
      "Presence of chest pain at rest",
      "ST-segment depression on ECG",
      "Elevation of cardiac biomarkers (troponin I or T)",
      "Response to sublingual nitrates"
    ],
    answer: 2,
    explanation: "Both unstable angina (UA) and NSTEMI present without persistent ST-segment elevation, may have ST depression/T-wave changes, and cause chest pain at rest. The critical distinguishing feature is elevation of cardiac biomarkers - specifically troponin I or troponin T (high-sensitivity troponin preferred). In NSTEMI, myocardial necrosis occurs causing troponin release. In UA, there is no myocardial necrosis and biomarkers remain normal. STEMI is defined by persistent ST-elevation plus biomarker rise. Response to nitrates does not reliably distinguish the two entities."
  },
  {
    id: 19,
    question: "Rheumatic heart disease (RHD) predominantly affects which heart valve in the majority of cases?",
    options: [
      "Aortic valve alone",
      "Mitral valve (mitral stenosis being the most common lesion)",
      "Tricuspid valve",
      "Pulmonary valve"
    ],
    answer: 1,
    explanation: "Rheumatic heart disease results from repeated episodes of acute rheumatic fever (ARF) caused by group A beta-hemolytic Streptococcus. The mitral valve is involved in the majority of cases (65-70% of isolated valve disease). Mitral stenosis is the most characteristic and common lesion (pure MS or MS with MR). Combined mitral and aortic valve involvement occurs in about 25% of cases. Isolated aortic valve disease occurs in about 5%. Tricuspid and pulmonary involvement is rare in isolation. RHD remains a leading cause of cardiovascular morbidity in low-middle income countries including India."
  },
  {
    id: 20,
    question: "Which of the following lipid abnormalities is the MOST COMMON dyslipidemia pattern in Type 2 diabetes mellitus?",
    options: [
      "Elevated LDL-C with normal triglycerides",
      "Low HDL-C, elevated triglycerides, and small dense LDL particles (diabetic dyslipidemia)",
      "Isolated elevated total cholesterol",
      "Elevated Lp(a) with normal triglycerides"
    ],
    answer: 1,
    explanation: "The characteristic diabetic dyslipidemia (atherogenic dyslipidemia) in Type 2 DM consists of: elevated triglycerides (due to increased hepatic VLDL production from insulin resistance), low HDL-C, and predominantly small dense LDL particles (sdLDL, more atherogenic than large buoyant LDL). Total LDL-C may be normal or only mildly elevated, making it a particularly insidious pattern. Insulin resistance increases free fatty acid flux to liver, increasing VLDL synthesis and TG. CETP activity exchanges TG for cholesterol esters, depleting HDL and creating sdLDL. This triad substantially increases cardiovascular risk."
  },
  {
    id: 21,
    question: "The INTERHEART study identified what fraction of the population-attributable risk (PAR) for acute myocardial infarction that could be explained by 9 modifiable risk factors?",
    options: [
      "Over 50%",
      "Over 70%",
      "Over 90%",
      "Over 99%"
    ],
    answer: 2,
    explanation: "The INTERHEART study (Yusuf et al., Lancet 2004), a large case-control study across 52 countries with 15,152 MI cases and 14,820 controls, demonstrated that 9 modifiable risk factors (abnormal lipids, smoking, hypertension, diabetes, abdominal obesity, psychosocial factors, low fruit/vegetable consumption, physical inactivity, and excessive alcohol) collectively accounted for over 90% of the population-attributable risk for acute MI. Abnormal ApoB/ApoA1 ratio had the highest PAR (49%), followed by smoking (36%). This study highlighted the universality of CVD risk factors across different geographic and ethnic populations."
  },
  {
    id: 22,
    question: "Heart failure with reduced ejection fraction (HFrEF) is defined as heart failure with left ventricular ejection fraction (LVEF) of:",
    options: [
      "< 55%",
      "< 50%",
      "< 45%",
      "< 40%"
    ],
    answer: 3,
    explanation: "According to ESC 2021 and ACC/AHA 2022 heart failure guidelines, HFrEF is defined as heart failure with LVEF < 40%. Heart failure with preserved ejection fraction (HFpEF) has LVEF >= 50%. A new category 'heart failure with mildly reduced ejection fraction' (HFmrEF) covers LVEF 41-49% (ESC 2021). Previously, HFmrEF was called 'heart failure with mid-range ejection fraction.' Guideline-directed medical therapy (GDMT) with ACE inhibitors/ARBs/ARNIs, beta-blockers, MRAs, and SGLT-2 inhibitors has mortality benefit specifically in HFrEF (LVEF < 40%)."
  },
  {
    id: 23,
    question: "Sudden cardiac death (SCD) is most commonly caused by which arrhythmia in adults with structural heart disease?",
    options: [
      "Complete heart block (third-degree AV block)",
      "Ventricular fibrillation (VF)",
      "Atrial fibrillation with rapid ventricular response",
      "Torsades de pointes"
    ],
    answer: 1,
    explanation: "Ventricular fibrillation (VF) is the most common mechanism of sudden cardiac death (SCD), accounting for approximately 75-80% of cases in adults. VF typically occurs in the setting of structural heart disease, most commonly coronary artery disease (responsible for 80% of SCD in Western populations). VF causes immediate loss of organized cardiac output. Torsades de pointes (a specific polymorphic VT) is a cause of SCD mainly in long QT syndrome but is less common overall. Complete heart block can cause asystole and SCD but is less frequent. SCD accounts for approximately 50% of all cardiovascular deaths."
  },
  {
    id: 24,
    question: "According to the WHO STEPS surveillance framework, the 'Step 1' of the STEPwise approach to NCD risk factor surveillance involves:",
    options: [
      "Biochemical measurements (blood glucose, lipids)",
      "Physical measurements (height, weight, waist circumference, blood pressure)",
      "Questionnaire-based assessment of behavioral risk factors",
      "Medical record review for clinical diagnoses"
    ],
    answer: 2,
    explanation: "The WHO STEPwise Approach to NCD Risk Factor Surveillance (STEPS) consists of three steps: Step 1 - Questionnaire (behavioral risk factors: tobacco use, alcohol consumption, physical activity, diet/fruit and vegetable intake); Step 2 - Physical measurements (height, weight, waist circumference, blood pressure, heart rate); Step 3 - Biochemical measurements (fasting blood glucose, total cholesterol, sometimes urinary creatinine for salt intake). The framework is designed to be implemented in a stepwise manner with increasing resources, allowing countries to collect comparable data for monitoring NCD risk factors over time."
  },
  {
    id: 25,
    question: "According to GLOBOCAN 2020, which cancer has the highest incidence globally (both sexes combined)?",
    options: [
      "Lung cancer",
      "Breast cancer",
      "Colorectal cancer",
      "Prostate cancer"
    ],
    answer: 1,
    explanation: "According to GLOBOCAN 2020 (IARC), breast cancer surpassed lung cancer to become the most commonly diagnosed cancer globally for the first time, with an estimated 2.26 million new cases (11.7% of all cancers). Lung cancer came second with 2.21 million cases, followed by colorectal cancer (1.93 million), prostate cancer (1.41 million), and stomach cancer (1.09 million). For cancer mortality, lung cancer remains the leading cause of cancer deaths globally (1.8 million deaths, 18% of all cancer deaths). This global ranking reflects rising breast cancer incidence in low-middle income countries."
  },
  {
    id: 26,
    question: "In India, according to National Cancer Registry Programme (NCRP) data, the MOST COMMON cancer in WOMEN is:",
    options: [
      "Cervical cancer",
      "Breast cancer",
      "Ovarian cancer",
      "Colorectal cancer"
    ],
    answer: 1,
    explanation: "According to NCRP/ICMR-NCDIR data (Three-Year Report 2012-2014 and subsequent reports), breast cancer has overtaken cervical cancer as the most common cancer in women in India overall, particularly in urban areas. However, there is significant geographic variation: cervical cancer remains the most common in rural areas and northeastern states. In terms of the national aggregate, breast cancer is now the leading cancer in Indian women (approximately 28-30 per 100,000 ASR in urban registries). Cervical cancer is a close second. Together, breast and cervical cancers account for approximately 60% of all cancers in Indian women."
  },
  {
    id: 27,
    question: "The International Agency for Research on Cancer (IARC) classifies tobacco smoking as a Group 1 carcinogen. Group 1 classification means:",
    options: [
      "Possibly carcinogenic to humans (limited evidence)",
      "Probably carcinogenic to humans (sufficient animal evidence, limited human evidence)",
      "Carcinogenic to humans (sufficient evidence of carcinogenicity in humans)",
      "Not classifiable as to carcinogenicity to humans"
    ],
    answer: 2,
    explanation: "IARC Monographs classify agents into 4 groups based on strength of evidence: Group 1 - Carcinogenic to humans (sufficient evidence of carcinogenicity in humans); Group 2A - Probably carcinogenic to humans (limited human evidence but sufficient animal evidence); Group 2B - Possibly carcinogenic to humans (limited evidence in humans and animals); Group 3 - Not classifiable as to carcinogenicity to humans; Group 4 - Probably not carcinogenic to humans (only one agent: caprolactam). Tobacco smoking (Group 1) causes cancers of lung, oral cavity, pharynx, esophagus, stomach, pancreas, kidney, bladder, cervix, and acute myeloid leukemia."
  },
  {
    id: 28,
    question: "The Population-Based Cancer Registry (PBCR) collects cancer incidence data from a defined geographic population. ICMR-NCDIR coordinates the cancer registry network in India. How does PBCR differ from Hospital-Based Cancer Registry (HBCR)?",
    options: [
      "PBCR records only mortality data while HBCR records incidence data",
      "PBCR provides population-based incidence rates useful for planning; HBCR reflects case mix of patients attending that hospital",
      "PBCR is maintained by private hospitals while HBCR is maintained by government hospitals",
      "PBCR collects histopathology data while HBCR collects clinical data only"
    ],
    answer: 1,
    explanation: "PBCR (Population-Based Cancer Registry) collects data on all new cancer cases occurring in a defined geographic area/population, allowing calculation of age-standardized incidence rates (ASR) representative of that population. HBCR (Hospital-Based Cancer Registry) records all cancer cases diagnosed and/or treated at a specific hospital, reflecting that institution's case mix but not generalizable to the population. PBCR is essential for calculating cancer burden, risk, and planning prevention programs. ICMR-NCDIR (National Centre for Disease Informatics and Research) in Bengaluru coordinates India's NCRP with both types of registries. India has over 30 PBCRs and multiple HBCRs."
  },
  {
    id: 29,
    question: "In the TNM staging system for cancer, 'N2' generally denotes:",
    options: [
      "No regional lymph node metastasis",
      "Metastasis to ipsilateral regional lymph nodes",
      "Metastasis to multiple regional lymph nodes or contralateral nodes (site-specific definition)",
      "Distant metastasis to lymph nodes"
    ],
    answer: 2,
    explanation: "In the AJCC/UICC TNM classification: T - primary tumor extent; N - regional lymph node involvement; M - distant metastasis. N categories: N0 - no regional lymph node metastasis; N1 - metastasis to 1-3 regional lymph nodes (or ipsilateral single nodes in some sites); N2 - metastasis to 4+ regional lymph nodes, or contralateral/bilateral nodes (site-specific, e.g., in breast cancer N2 = ipsilateral axillary nodes fixed/matted, or internal mammary nodes without axillary); N3 - more extensive regional node involvement. M0 = no distant metastasis; M1 = distant metastasis. The exact N2 definition varies by primary cancer site in the TNM system."
  },
  {
    id: 30,
    question: "Visual Inspection with Acetic Acid (VIA) is used as a cervical cancer screening tool in low-resource settings. What is the principle behind VIA?",
    options: [
      "Acetic acid stains dysplastic cells blue",
      "Acetowhitening - acetic acid causes reversible coagulation of proteins in abnormal/dysplastic cells, making them appear white",
      "Acetic acid dissolves mucus to allow better visualization of the transformation zone",
      "Acetic acid reacts with HPV viral proteins to produce a visible precipitate"
    ],
    answer: 1,
    explanation: "VIA (Visual Inspection with Acetic Acid) uses 3-5% acetic acid applied to the cervix; abnormal cells (CIN/dysplasia) with high nuclear protein density undergo reversible acetowhitening - the acetic acid coagulates nuclear proteins, causing the abnormal epithelium to appear white ('acetowhite') against the normal pink squamous epithelium. The transformation zone (squamocolumnar junction) is the target area. VIA is recommended by WHO as a screen-and-treat approach in low-resource settings (LMIC) due to its low cost and immediate result capability. Sensitivity is approximately 70-80%, specificity 70-85% depending on the setting."
  },
  {
    id: 31,
    question: "The age-standardized incidence rate (ASR) of cancer is calculated using which standard population?",
    options: [
      "The population of the country being studied",
      "WHO World Standard Population (Segi/Doll, modified by WHO)",
      "The population of India for Indian data",
      "The oldest available national census data"
    ],
    answer: 1,
    explanation: "Age-Standardized Rate (ASR) uses the WHO World Standard Population (originally developed by Segi 1960, modified by Doll and subsequently by WHO) to allow comparison of cancer rates across populations and time periods by removing the effect of different age structures. The WHO World Standard Population assigns proportional weights to each 5-year age group. ASR is expressed per 100,000 population per year. In India, NCRP/ICMR-NCDIR uses the WHO World Standard Population for calculating ASRs to enable international comparisons. Using the country's own population would prevent meaningful comparison between nations."
  },
  {
    id: 32,
    question: "Which of the following is the MOST COMMON cancer in MEN in India according to NCRP data?",
    options: [
      "Lung cancer",
      "Colorectal cancer",
      "Lip and oral cavity cancer",
      "Prostate cancer"
    ],
    answer: 2,
    explanation: "According to NCRP/ICMR-NCDIR data for India, lip and oral cavity cancer is the most common cancer in men, accounting for approximately 11-16% of all male cancers. This reflects the high prevalence of tobacco use (smoking and smokeless tobacco/betel quid) in India. Lung cancer is second or third depending on the registry. Prostate cancer has a relatively low incidence in India compared to Western countries. This pattern differs markedly from Western nations where prostate cancer (USA) or colorectal cancer top the list. The high oral cancer burden in India is directly attributable to tobacco and areca nut use."
  },
  {
    id: 33,
    question: "Five-year relative survival rate for cancer is calculated as:",
    options: [
      "Proportion of cancer patients alive at 5 years after diagnosis",
      "Observed survival in cancer patients divided by expected survival in a matched general population without cancer, expressed as percentage",
      "Number of cancer patients surviving 5 years divided by total cancer deaths",
      "Proportion of patients completing 5-year cancer treatment"
    ],
    answer: 1,
    explanation: "Five-year relative survival rate = (Observed survival in cancer cohort / Expected survival in a matched general population of same age, sex, and year) x 100. This measure accounts for deaths from all causes in the cancer cohort while adjusting for background mortality, providing a measure closer to the 'net cancer survival' - survival attributable to the cancer. It is preferred over crude 5-year survival which doesn't account for competing causes of death. High relative survival (e.g., thyroid cancer ~98%) indicates favorable prognosis; low rates (pancreatic cancer ~11%) indicate poor prognosis. Used by SEER (USA) and cancer registries worldwide."
  },
  {
    id: 34,
    question: "HELICOBACTER PYLORI infection is classified by IARC as a Group 1 carcinogen for which cancer?",
    options: [
      "Colorectal cancer",
      "Hepatocellular carcinoma",
      "Gastric (stomach) cancer",
      "Esophageal squamous cell carcinoma"
    ],
    answer: 2,
    explanation: "Helicobacter pylori is classified as a Group 1 carcinogen (IARC Monograph Vol 61, 1994; reaffirmed) specifically for gastric (stomach) cancer and gastric MALT lymphoma. H. pylori infection causes chronic active gastritis, leading to atrophic gastritis, intestinal metaplasia, dysplasia, and ultimately gastric adenocarcinoma (Correa cascade). H. pylori accounts for approximately 75% of all gastric cancers globally. Stomach cancer is the 5th most common cancer globally (GLOBOCAN 2020). HBV and HCV are Group 1 carcinogens for hepatocellular carcinoma; HPV for cervical cancer; Schistosoma haematobium for bladder cancer."
  },
  {
    id: 35,
    question: "Breast self-examination (BSE), clinical breast examination (CBE), and mammography are methods of breast cancer detection. Which approach has been shown to reduce breast cancer MORTALITY in randomized controlled trials?",
    options: [
      "Breast self-examination",
      "Clinical breast examination alone",
      "Mammographic screening",
      "Ultrasound breast screening"
    ],
    answer: 2,
    explanation: "Mammographic screening is the only breast cancer screening method with proven mortality reduction in multiple randomized controlled trials (the Swedish Two-County Trial, HIP Trial, etc.). Meta-analyses show approximately 15-20% reduction in breast cancer mortality in women aged 50-69 years invited for mammography. Breast self-examination (BSE) has not been shown to reduce mortality (Shanghai RCT showed no mortality benefit, more biopsies). Clinical breast examination alone has insufficient RCT evidence for mortality reduction. WHO recommends mammography screening in organized programs for women aged 50-69 where quality control can be assured."
  },
  {
    id: 36,
    question: "India's National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCS) includes screening for which three cancers at the community level?",
    options: [
      "Lung, stomach, and colorectal cancers",
      "Oral, cervical, and breast cancers",
      "Cervical, ovarian, and breast cancers",
      "Oral, lung, and cervical cancers"
    ],
    answer: 1,
    explanation: "India's NPCDCS (launched 2010, now integrated into Comprehensive Primary Health Care under Ayushman Bharat) includes population-level screening for: oral cancer (visual examination for tobacco/areca nut users), cervical cancer (VIA/VILI for women aged 30-65 years), and breast cancer (CBE for women aged 30-65 years). These three cancers were selected based on their high burden in India and availability of feasible, cost-effective screening tools for low-resource settings. Cervical cancer screening uses VIA (Visual Inspection with Acetic Acid) as a primary tool, with HPV DNA testing being scaled up under the revised guidelines."
  },
  {
    id: 37,
    question: "The concept of 'clonal evolution' in cancer describes:",
    options: [
      "The process by which cancer cells metastasize to distant organs",
      "The sequential accumulation of genetic mutations in a single cell lineage, conferring selective growth advantage, leading to malignant transformation",
      "The spread of cancer within a tissue without lymphatic involvement",
      "The process by which cancer cells escape immune surveillance"
    ],
    answer: 1,
    explanation: "Clonal evolution (Nowell 1976) describes how cancer arises from a single cell that acquires genetic mutations over time. Each subsequent mutation that confers a growth advantage leads to clonal expansion of that cell population - natural selection at the cellular level. Vogelstein's multistep carcinogenesis model of colorectal cancer (APC mutation → K-ras → DCC → p53 → invasive cancer) is a classic example. Hallmarks of cancer (Hanahan and Weinberg 2000, updated 2011) include: sustained proliferative signaling, evading growth suppressors, resisting cell death, enabling replicative immortality, inducing angiogenesis, activating invasion/metastasis, among others."
  },
  {
    id: 38,
    question: "COPD (Chronic Obstructive Pulmonary Disease) is diagnosed spirometrically when post-bronchodilator FEV1/FVC ratio is:",
    options: [
      "< 0.80",
      "< 0.75",
      "< 0.70",
      "< 0.65"
    ],
    answer: 2,
    explanation: "According to GOLD (Global Initiative for Chronic Obstructive Lung Disease) guidelines, COPD is confirmed by post-bronchodilator FEV1/FVC < 0.70 (< 70%). This fixed ratio criterion is used despite debate about its overdiagnosis of COPD in the elderly and underdiagnosis in the young (where LLN - lower limit of normal - may be more appropriate). GOLD severity classification (after confirming obstruction): GOLD 1 (mild): FEV1 >= 80% predicted; GOLD 2 (moderate): 50% <= FEV1 < 80%; GOLD 3 (severe): 30% <= FEV1 < 50%; GOLD 4 (very severe): FEV1 < 30% predicted. Tobacco smoking is the most important risk factor for COPD globally; biomass fuel exposure is equally important in India/LMICs."
  },
  {
    id: 39,
    question: "According to WHO BMI classification, which BMI range defines 'Obesity Class II'?",
    options: [
      "BMI 25.0-29.9 kg/m2",
      "BMI 30.0-34.9 kg/m2",
      "BMI 35.0-39.9 kg/m2",
      "BMI >= 40.0 kg/m2"
    ],
    answer: 2,
    explanation: "WHO BMI classification: Underweight < 18.5; Normal weight 18.5-24.9; Overweight (pre-obese) 25.0-29.9; Obesity Class I 30.0-34.9; Obesity Class II 35.0-39.9; Obesity Class III (morbid obesity) >= 40.0 kg/m2. For Asian populations (including Indians), WHO/IOTF recommends lower thresholds: overweight >= 23 kg/m2, obesity >= 27.5 kg/m2, with action points at 23 (increased risk) and 27.5 (high risk). This is because Asians have higher body fat percentage and metabolic risk at lower BMIs compared to Caucasians."
  },
  {
    id: 40,
    question: "Chronic Kidney Disease (CKD) is defined as abnormalities of kidney structure or function present for MORE THAN:",
    options: [
      "1 month",
      "2 months",
      "3 months",
      "6 months"
    ],
    answer: 2,
    explanation: "KDIGO (Kidney Disease: Improving Global Outcomes) 2012 defines CKD as abnormalities of kidney structure or function, present for > 3 months, with implications for health. Criteria include: eGFR < 60 mL/min/1.73m2 (categories G3a-G5), OR markers of kidney damage (albuminuria, urine sediment abnormalities, electrolyte/tubular disorders, structural abnormalities on imaging, kidney transplant history), regardless of eGFR, present for > 3 months. The 3-month criterion distinguishes CKD from acute kidney injury (AKI). Diabetes and hypertension are the leading causes of CKD globally. CKD affects approximately 10-15% of adults worldwide."
  },
  {
    id: 41,
    question: "The WHO 'Global Action Plan for the Prevention and Control of NCDs 2013-2020' (extended to 2030) set a target of reducing premature NCD mortality by what percentage by 2025 compared to 2010 baseline?",
    options: [
      "10% relative reduction",
      "25% relative reduction",
      "33% relative reduction",
      "50% relative reduction"
    ],
    answer: 1,
    explanation: "The WHO Global Action Plan for Prevention and Control of NCDs 2013-2020 established the '25x25' target: a 25% relative reduction in premature mortality from cardiovascular diseases, cancers, diabetes, and chronic respiratory diseases by 2025 compared to the 2010 baseline. The plan also set 9 voluntary global targets including: 10% reduction in harmful alcohol use, 10% reduction in physical inactivity, 30% reduction in mean salt intake, 30% reduction in tobacco use prevalence, 25% reduction in raised blood pressure prevalence or halt the rise, halt the rise in obesity and diabetes, and coverage of treatment for cardiovascular diseases and prevention of heart attacks and strokes. The plan was extended to 2030 in alignment with SDGs."
  },
  {
    id: 42,
    question: "The epidemiological transition theory (Omran 1971) describes a shift in mortality patterns. India is currently considered to be in which stage of epidemiological transition?",
    options: [
      "Stage 1: Age of pestilence and famine",
      "Stage 2: Age of receding pandemics",
      "Stage 3: Age of degenerative and man-made diseases",
      "A transitional stage between Stage 2 and Stage 3 (experiencing double burden of disease)"
    ],
    answer: 3,
    explanation: "India is in an epidemiological transition phase, experiencing the 'double burden of disease' - continuing high burden of communicable diseases (TB, malaria, diarrheal diseases, malnutrition) alongside rapidly rising NCDs (CVD, diabetes, cancer, COPD). This corresponds to a transitional stage between Omran's Stage 2 (receding pandemics) and Stage 3 (degenerative diseases). Omran's stages: Stage 1 - pestilence and famine (high mortality, low life expectancy); Stage 2 - receding pandemics (improving sanitation/nutrition); Stage 3 - degenerative/man-made diseases (NCDs predominate). Developed countries are in Stage 3-4 (delayed degenerative disease age). This double burden creates immense challenges for India's health system."
  },
  {
    id: 43,
    question: "According to Global Burden of Disease 2019 data for India, NCDs account for approximately what percentage of total deaths in India?",
    options: [
      "30-35%",
      "45-50%",
      "55-60%",
      "62-65%"
    ],
    answer: 3,
    explanation: "According to GBD 2019 data, NCDs account for approximately 63-65% of all deaths in India. The leading NCD causes of death in India are cardiovascular diseases (~28% of total deaths), chronic respiratory diseases (~11%), cancers (~8%), and diabetes (~3%). Despite this high NCD burden, India continues to face significant communicable disease mortality, illustrating the double burden. The ICMR-PHFI-IHMe India burden of disease report (2017) estimated that NCDs contributed 61.8% of India's total disease burden (measured in DALYs) in 2016, up from 30.5% in 1990 - a doubling in 25 years."
  },
  {
    id: 44,
    question: "Road traffic injuries in India - according to Ministry of Road Transport data, India accounts for approximately what proportion of global road traffic deaths despite having a much smaller fraction of global vehicles?",
    options: [
      "3-5%",
      "6-8%",
      "11-12%",
      "18-20%"
    ],
    answer: 2,
    explanation: "India consistently accounts for approximately 11% of global road traffic deaths (approximately 150,000-160,000 deaths per year per MoRTH data, though WHO estimates are higher ~300,000+ when accounting for under-reporting), despite having only about 1% of the world's vehicles. Road traffic injuries are a leading cause of death in young adults aged 15-29 years globally and in India. The WHO Global Status Report on Road Safety 2023 places India among the top 5 countries for road traffic deaths. Two-wheelers account for the majority of RTI deaths in India. Road traffic injuries contribute significantly to India's NCD and injury burden and are a target in the WHO Sustainable Development Goals (SDG 3.6: halve road traffic deaths by 2030)."
  },
  {
    id: 45,
    question: "Blindness due to cataract in India - the National Programme for Control of Blindness and Visual Impairment (NPCBVI) target is to reduce the prevalence of blindness to what level?",
    options: [
      "< 1% by 2020",
      "< 0.3% by 2020",
      "< 0.5% by 2025",
      "< 2% by 2030"
    ],
    answer: 1,
    explanation: "India's National Programme for Control of Blindness (NPCB, now NPCBVI - National Programme for Control of Blindness and Visual Impairment) set a target of reducing the prevalence of blindness from 1.4% (1990 baseline) to < 0.3% by 2020. Cataract accounts for approximately 62-66% of blindness in India, making it the leading cause. Other causes include corneal blindness (~7%), glaucoma (~6%), refractive errors (~1%), posterior segment disorders, and others. The Cataract Surgical Rate (CSR) in India was approximately 6,000-7,000 per million population. India has made significant progress through cataract surgical camps and secondary eye care infrastructure."
  },
  {
    id: 46,
    question: "Mental health disorders globally - according to WHO and GBD 2019 data, depression is estimated to affect approximately how many people worldwide?",
    options: [
      "100 million",
      "280 million",
      "400 million",
      "650 million"
    ],
    answer: 1,
    explanation: "WHO estimates that depression affects approximately 280 million people worldwide (approximately 3.8% of the global population), including 5.0% of adults and 5.7% of adults older than 60 years. Depression is the leading cause of disability globally, measured by YLDs (Years Lived with Disability) in GBD studies. Globally, mental disorders account for approximately 10-13% of the global burden of disease. In India, GBD 2017 estimated that mental disorders contributed approximately 4.7% of total DALYs. The WHO 2022 World Mental Health Report highlighted that COVID-19 increased global rates of anxiety and depression by ~25% in 2020."
  },
  {
    id: 47,
    question: "The COMMON RISK FACTORS approach to NCD prevention is based on the concept that many major NCDs share common upstream risk factors. Which of the following correctly lists the FOUR major behavioral risk factors identified by WHO for NCDs?",
    options: [
      "Tobacco use, alcohol use, physical inactivity, and unhealthy diet",
      "Tobacco use, hypertension, diabetes, and obesity",
      "Physical inactivity, stress, air pollution, and alcohol use",
      "Tobacco use, high sodium intake, sedentary behavior, and poverty"
    ],
    answer: 0,
    explanation: "WHO identifies four major modifiable behavioral risk factors that drive the four main NCDs (cardiovascular diseases, cancers, chronic respiratory diseases, diabetes): (1) Tobacco use, (2) Harmful use of alcohol, (3) Physical inactivity, and (4) Unhealthy diet (high in salt, saturated/trans fats, free sugars; low in fruits, vegetables, whole grains). These behavioral risk factors lead to four key metabolic risk factors: raised blood pressure, raised blood glucose, dyslipidemia, and overweight/obesity. The 'Common Risk Factor Approach' (Sheiham & Watt 2000) advocates addressing these shared determinants through integrated programs rather than disease-by-disease approaches."
  },
  {
    id: 48,
    question: "Non-alcoholic fatty liver disease (NAFLD) and its progressive form NASH (Non-Alcoholic Steatohepatitis) are considered hepatic manifestations of:",
    options: [
      "Excessive alcohol consumption",
      "Metabolic syndrome and insulin resistance",
      "Viral hepatitis B coinfection",
      "Autoimmune hepatitis"
    ],
    answer: 1,
    explanation: "NAFLD/NASH is strongly associated with metabolic syndrome and insulin resistance. It is considered the hepatic manifestation of metabolic syndrome. Risk factors include obesity, Type 2 diabetes, dyslipidemia, and hypertension. NAFLD (steatosis alone) can progress to NASH (steatosis + inflammation + ballooning degeneration) → fibrosis → cirrhosis → hepatocellular carcinoma. NAFLD affects approximately 25-30% of the global population and 9-32% of Indians (rising with urbanization). It is now renamed MASLD (Metabolic Dysfunction-Associated Steatotic Liver Disease) by consensus in 2023. Unlike alcoholic liver disease, NAFLD/MASLD occurs without significant alcohol consumption."
  },
  {
    id: 49,
    question: "The WHO Global NCD Action Plan includes monitoring using 25 indicators. Which of the following is a 'best buy' intervention for NCDs recommended by WHO as cost-effective?",
    options: [
      "Universal bariatric surgery programs for obesity",
      "Routine cardiac catheterization for all high-risk adults",
      "Tax increases on tobacco and alcohol products",
      "Population-wide lipid screening with statin prophylaxis"
    ],
    answer: 2,
    explanation: "WHO 'Best Buys' are highly cost-effective NCD interventions that are feasible to implement even in low-resource settings. Tobacco-related best buys include: raising tobacco taxes (most cost-effective), smoke-free legislation, health warning labels, mass media campaigns, and tobacco cessation support. Alcohol best buys include: raising alcohol taxes, restricting access, and advertising bans. Unhealthy diet best buys include salt reduction, trans-fat elimination, and marketing restrictions on unhealthy foods to children. Physical activity best buys include public awareness campaigns. These population-level measures have high impact at low cost per DALY averted. Bariatric surgery and universal catheterization are not WHO 'best buys' due to high cost and limited scalability in LMICs."
  },
  {
    id: 50,
    question: "According to the IDF Diabetes Atlas 2021, India has the second highest number of adults with diabetes. However, India's diabetes prevalence (%) in adults aged 20-79 years is lower than China's. The ICMR-INDIAB Phase 1-4 national study (2019-2020) estimated the overall diabetes prevalence in India to be approximately:",
    options: [
      "4.3%",
      "7.3%",
      "11.4%",
      "15.2%"
    ],
    answer: 2,
    explanation: "The ICMR-INDIAB (Indian Council of Medical Research - India Diabetes) study, the largest nationally representative diabetes study in India (Anjana et al., Lancet Diabetes & Endocrinology, 2023), reported that the age-standardized prevalence of diabetes in India was approximately 11.4% (with significant state-wise variation ranging from 3.31% in Uttar Pradesh to 26.4% in Goa). The study used WHO 2011 diagnostic criteria (FPG >= 126 mg/dL, 2h PG >= 200 mg/dL, or HbA1c >= 6.5%, or known diabetic). This translates to approximately 101 million people with diabetes in India. Prediabetes prevalence was estimated at 15.3% (approximately 136 million), highlighting the future burden of diabetes in India."
  }
];

export default questions;

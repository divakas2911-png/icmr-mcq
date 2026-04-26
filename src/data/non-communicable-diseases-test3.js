const questions = [
  {
    id: 1,
    question: "According to the IDF Diabetes Atlas (10th Edition, 2021), which country has the highest number of people living with diabetes in the world?",
    options: ["India", "China", "United States", "Pakistan"],
    answer: 1,
    explanation: "China has the highest number of adults living with diabetes globally, followed by India and the United States, according to the IDF Diabetes Atlas 10th Edition (2021). India is often referred to as the 'diabetes capital of the world' in relative terms but China holds the top rank in absolute numbers."
  },
  {
    id: 2,
    question: "The ICMR-INDIAB study (Phase I, 2011) estimated the overall prevalence of diabetes in India. Which of the following best reflects its key finding regarding urban-rural differences?",
    options: [
      "Prevalence was equal in urban and rural areas at approximately 7%",
      "Urban prevalence was significantly higher than rural prevalence, with urban areas showing nearly double the rates",
      "Rural prevalence exceeded urban prevalence due to lower healthcare access",
      "Urban and rural prevalence differed only in southern states"
    ],
    answer: 1,
    explanation: "The ICMR-INDIAB study demonstrated a clear urban-rural gradient, with urban areas showing significantly higher diabetes prevalence compared to rural areas. Urban prevalence was roughly double that in rural areas, attributed to sedentary lifestyle, obesity, and dietary changes in urban populations. This gradient was consistent across studied states."
  },
  {
    id: 3,
    question: "The ICMR-INDIAB Phase II national study published in 2023 estimated the overall prevalence of diabetes in India. What was the approximate national prevalence reported?",
    options: ["5.9%", "8.9%", "11.4%", "15.3%"],
    answer: 2,
    explanation: "The ICMR-INDIAB Phase II study (Anjana et al., Lancet Diabetes & Endocrinology, 2023) reported a national diabetes prevalence of approximately 11.4% in adults, with pre-diabetes at around 15.3%. This study covered all 31 states and union territories, representing the most comprehensive national diabetes prevalence data for India."
  },
  {
    id: 4,
    question: "Which Indian state was found to have the highest prevalence of diabetes in the ICMR-INDIAB study?",
    options: ["Maharashtra", "Tamil Nadu", "Goa", "Kerala"],
    answer: 2,
    explanation: "Goa was found to have the highest prevalence of diabetes among the states studied in the ICMR-INDIAB study, with prevalence rates exceeding those of other states. This is attributed to higher urbanization, dietary patterns including greater fat and alcohol consumption, and lifestyle factors in Goa."
  },
  {
    id: 5,
    question: "Type 1 diabetes mellitus shows a bimodal peak in age of onset. What are the two recognized peak periods?",
    options: [
      "Ages 2-4 years and ages 10-14 years",
      "Ages 5-7 years and ages 10-14 years",
      "Ages 1-3 years and ages 16-20 years",
      "Ages 5-7 years and ages 20-25 years"
    ],
    answer: 1,
    explanation: "Type 1 diabetes shows a bimodal age distribution with two peaks: the first at ages 5-7 years (coinciding with school entry and increased viral infections) and the second at ages 10-14 years (around puberty). The pubertal peak is larger and more prominent. Geographic variation exists, with Scandinavian countries (Finland, Sweden) having the highest incidence rates globally."
  },
  {
    id: 6,
    question: "Latent Autoimmune Diabetes in Adults (LADA) is characterized by which of the following features that distinguishes it from classical Type 2 diabetes?",
    options: [
      "Onset before 30 years of age with ketoacidosis at presentation",
      "Presence of islet autoantibodies (particularly GAD65) and slow progression to insulin dependence",
      "Complete insulin deficiency from the time of diagnosis",
      "Absence of family history and strong association with obesity"
    ],
    answer: 1,
    explanation: "LADA (also called Type 1.5 diabetes) is characterized by the presence of islet autoantibodies - most commonly anti-GAD65 (glutamic acid decarboxylase antibodies) - in adults presenting with apparent Type 2 diabetes. These patients have a slow progression to insulin dependence (typically over months to years) unlike classical Type 1, are usually non-obese, and often do not have metabolic syndrome features. C-peptide levels are preserved initially but decline over time."
  },
  {
    id: 7,
    question: "Fibrocalculous Pancreatic Diabetes (FCPD) is a form of secondary diabetes particularly prevalent in India and other tropical countries. Which of the following is the most characteristic radiological finding in FCPD?",
    options: [
      "Diffuse pancreatic enlargement on ultrasound",
      "Intraductal pancreatic calculi on plain X-ray of abdomen",
      "Pancreatic pseudocyst formation",
      "Pancreatic duct dilation without calculi"
    ],
    answer: 1,
    explanation: "Fibrocalculous Pancreatic Diabetes (FCPD), formerly called tropical calcific pancreatitis, is characterized by intraductal pancreatic calculi visible on plain X-ray of the abdomen. The classic triad is abdominal pain, steatorrhea, and diabetes. It occurs predominantly in young, non-obese, malnourished individuals in tropical countries. Previously classified as Type 3c diabetes (pancreatic diabetes). Kerala and coastal Karnataka in India have high prevalence."
  },
  {
    id: 8,
    question: "Maturity Onset Diabetes of the Young (MODY) Type 3, the most common form of MODY in most populations, is caused by a mutation in which gene?",
    options: ["GCK (Glucokinase) gene", "HNF-1alpha gene", "HNF-4alpha gene", "IPF-1 gene"],
    answer: 1,
    explanation: "MODY Type 3 is caused by mutations in the HNF-1alpha (Hepatocyte Nuclear Factor 1-alpha) gene and accounts for 30-70% of MODY cases in most European populations. MODY 2 (GCK mutations) causes mild fasting hyperglycemia that rarely needs treatment. MODY 3 (HNF-1alpha) is progressive and often requires sulfonylureas. All MODY types are autosomal dominant with strong family history across multiple generations."
  },
  {
    id: 9,
    question: "Neonatal diabetes mellitus (NDM) that persists beyond 6 months is called permanent neonatal diabetes mellitus (PNDM). The most common genetic cause of PNDM involves mutations in which gene?",
    options: ["INS gene (insulin)", "ABCC8 gene (SUR1)", "KCNJ11 gene (Kir6.2)", "FOXP3 gene"],
    answer: 2,
    explanation: "Mutations in KCNJ11 (encoding Kir6.2, the inward rectifier potassium channel subunit of the ATP-sensitive K+ channel) are the most common cause of permanent neonatal diabetes mellitus. ABCC8 (SUR1) mutations are the second most common cause. Importantly, patients with KCNJ11 and ABCC8 mutations can often be successfully treated with high-dose sulfonylureas instead of insulin, as these drugs close the mutated K-ATP channels."
  },
  {
    id: 10,
    question: "Pre-existing diabetes in pregnancy is associated with which of the following congenital malformations that is distinctly characteristic and rarely seen in Gestational Diabetes Mellitus (GDM)?",
    options: [
      "Ventricular septal defect",
      "Caudal regression syndrome (sacral agenesis)",
      "Neural tube defects",
      "Cleft palate"
    ],
    answer: 1,
    explanation: "Caudal regression syndrome (sacral agenesis/hypoplasia) is a rare but pathognomonic complication of pre-existing (pre-gestational) diabetes mellitus in pregnancy. It occurs due to hyperglycemia during the first trimester during organogenesis. GDM begins after the period of organogenesis (typically diagnosed after 24-28 weeks) and therefore is not associated with structural congenital anomalies. However, GDM is associated with macrosomia, hypoglycemia, and other metabolic complications in the neonate."
  },
  {
    id: 11,
    question: "Which secondary cause of diabetes is associated with excess growth hormone secretion leading to insulin resistance?",
    options: ["Cushing's syndrome", "Acromegaly", "Pheochromocytoma", "Primary hyperaldosteronism"],
    answer: 1,
    explanation: "Acromegaly (excess growth hormone in adults from pituitary adenoma) causes diabetes through insulin resistance. Growth hormone is a counter-regulatory hormone that antagonizes insulin action. Cushing's syndrome (excess cortisol) also causes diabetes through glucocorticoid-induced insulin resistance and increased hepatic gluconeogenesis. Pheochromocytoma causes diabetes through catecholamine-induced inhibition of insulin secretion and increased glycogenolysis."
  },
  {
    id: 12,
    question: "The prevalence of diabetes in India has been increasing over the decades. Which of the following factors is considered the MOST important driver of this epidemic in India?",
    options: [
      "Increasing prevalence of Type 1 diabetes due to viral infections",
      "Rapid urbanization combined with the Asian Indian phenotype of increased visceral adiposity at lower BMI",
      "Decreasing physical activity exclusively in urban males above 50 years",
      "High sugar consumption in rural populations due to agricultural practices"
    ],
    answer: 1,
    explanation: "The diabetes epidemic in India is driven primarily by rapid urbanization combined with the unique 'Asian Indian phenotype' - a tendency toward higher visceral adiposity, lower muscle mass, and insulin resistance at lower BMI thresholds compared to Caucasians. Indians develop metabolic complications at BMI levels that would be considered normal by Western standards. This thrifty genotype/phenotype combined with environmental changes (sedentary lifestyle, calorie-dense food) explains the epidemic."
  },
  {
    id: 13,
    question: "According to WHO 2006 diagnostic criteria, what is the fasting plasma glucose cutoff for diagnosis of diabetes mellitus?",
    options: [
      ">=6.0 mmol/L (>=108 mg/dL)",
      ">=7.0 mmol/L (>=126 mg/dL)",
      ">=7.8 mmol/L (>=140 mg/dL)",
      ">=6.5 mmol/L (>=117 mg/dL)"
    ],
    answer: 1,
    explanation: "According to WHO 2006 criteria, diabetes is diagnosed when fasting plasma glucose is >=7.0 mmol/L (>=126 mg/dL), 2-hour plasma glucose after 75g OGTT is >=11.1 mmol/L (>=200 mg/dL), or random plasma glucose is >=11.1 mmol/L (>=200 mg/dL) in the presence of symptoms. In 2011, WHO endorsed HbA1c >=6.5% (>=48 mmol/mol) as an additional diagnostic criterion."
  },
  {
    id: 14,
    question: "The ADA 2023 criteria for diagnosis of diabetes includes HbA1c. Which of the following correctly states the ADA HbA1c cutoff for diabetes diagnosis AND the pre-diabetes range?",
    options: [
      "Diabetes: HbA1c >=7.0%; Pre-diabetes: 6.0-6.9%",
      "Diabetes: HbA1c >=6.5%; Pre-diabetes: 5.7-6.4%",
      "Diabetes: HbA1c >=6.5%; Pre-diabetes: 6.0-6.4%",
      "Diabetes: HbA1c >=7.0%; Pre-diabetes: 5.7-6.9%"
    ],
    answer: 1,
    explanation: "ADA criteria define diabetes as HbA1c >=6.5% and pre-diabetes as HbA1c 5.7-6.4%. WHO criteria for pre-diabetes using HbA1c is 6.0-6.4% (higher cutoff), which differs from ADA. This difference is clinically significant: using ADA criteria would identify more people as having pre-diabetes. The ADA lower cutoff of 5.7% for pre-diabetes allows earlier intervention."
  },
  {
    id: 15,
    question: "NGSP (National Glycohemoglobin Standardization Program) HbA1c values can be converted to IFCC (International Federation of Clinical Chemistry) values. Which of the following conversion approximately applies?",
    options: [
      "IFCC (mmol/mol) = [NGSP (%) - 2.15] x 10.93",
      "IFCC (mmol/mol) = [NGSP (%) - 2.15] x 10.93, with an HbA1c of 6.5% NGSP corresponding to approximately 48 mmol/mol IFCC",
      "IFCC (mmol/mol) = NGSP (%) x 11 - 24",
      "IFCC (mmol/mol) = [NGSP (%) + 1.5] x 9.5"
    ],
    answer: 1,
    explanation: "The IFCC to NGSP conversion uses the formula: NGSP (%) = [0.0915 x IFCC (mmol/mol)] + 2.15, or equivalently IFCC = [NGSP - 2.15] / 0.0915. The diagnostic cutoff of HbA1c 6.5% (NGSP) corresponds to 48 mmol/mol (IFCC). HbA1c 7.0% NGSP = 53 mmol/mol IFCC, and 5.7% NGSP = 39 mmol/mol IFCC. Standardization is critical for consistent diabetes diagnosis globally."
  },
  {
    id: 16,
    question: "For the standard 75g Oral Glucose Tolerance Test (OGTT) procedure, which of the following pre-test preparations is mandatory?",
    options: [
      "Fasting for at least 4 hours prior to the test",
      "At least 3 days of unrestricted carbohydrate diet (>=150g/day) followed by overnight fast of 8-14 hours",
      "24-hour carbohydrate-free diet to maximize glucose challenge",
      "Administration of 75g glucose in 500mL water over 30 minutes"
    ],
    answer: 1,
    explanation: "The standard OGTT requires: (1) at least 3 days of unrestricted diet with carbohydrate intake of at least 150g/day (to prevent false positive results from carbohydrate depletion), (2) overnight fasting of 8-14 hours, (3) the patient should be seated and not smoke during the test, (4) 75g anhydrous glucose dissolved in 250-300mL water consumed within 5 minutes. Blood samples are drawn at 0 and 120 minutes (fasting and 2-hour)."
  },
  {
    id: 17,
    question: "The IADPSG (International Association of Diabetes and Pregnancy Study Groups) criteria for GDM diagnosis uses a one-step approach with 75g OGTT. What are the diagnostic thresholds?",
    options: [
      "Fasting >=95 mg/dL OR 1-hour >=180 mg/dL OR 2-hour >=155 mg/dL (2 of 3 must be met)",
      "Fasting >=92 mg/dL OR 1-hour >=180 mg/dL OR 2-hour >=153 mg/dL (any one value is diagnostic)",
      "Fasting >=100 mg/dL OR 2-hour >=140 mg/dL (either value is diagnostic)",
      "Fasting >=92 mg/dL AND 2-hour >=153 mg/dL (both values must be met)"
    ],
    answer: 1,
    explanation: "IADPSG criteria (endorsed by WHO 2013 for GDM diagnosis): Using 75g OGTT at 24-28 weeks, GDM is diagnosed if ANY ONE of the following thresholds is met: Fasting PG >=92 mg/dL (5.1 mmol/L), 1-hour PG >=180 mg/dL (10.0 mmol/L), or 2-hour PG >=153 mg/dL (8.5 mmol/L). This is a one-step approach where a single abnormal value is diagnostic, unlike the older Carpenter-Coustan criteria requiring 2 abnormal values."
  },
  {
    id: 18,
    question: "The DIPSI (Diabetes in Pregnancy Study Group India) criteria for GDM screening uses which simplified approach?",
    options: [
      "Fasting blood glucose >90 mg/dL at first antenatal visit",
      "Non-fasting 75g glucose challenge test with 2-hour plasma glucose >=140 mg/dL as diagnostic cutoff",
      "Random blood glucose >200 mg/dL at any gestational age",
      "50g glucose challenge test with 1-hour value >=130 mg/dL"
    ],
    answer: 1,
    explanation: "DIPSI criteria recommend a simplified non-fasting 75g glucose challenge test where a 2-hour plasma glucose of >=140 mg/dL is diagnostic of GDM. This approach is practical for Indian settings as it does not require fasting, making it feasible at peripheral health facilities. Values between 120-139 mg/dL are considered gestational impaired glucose tolerance. This single-step test is recommended for routine GDM screening in India."
  },
  {
    id: 19,
    question: "HbA1c measurement is unreliable for diabetes diagnosis in which of the following conditions?",
    options: [
      "Mild chronic kidney disease (GFR 60-89 mL/min)",
      "Hemolytic anemia and hemoglobinopathies such as sickle cell disease",
      "Hypothyroidism",
      "Mild iron deficiency without anemia"
    ],
    answer: 1,
    explanation: "HbA1c is unreliable in conditions affecting red blood cell turnover or hemoglobin structure: hemolytic anemia (reduced RBC lifespan falsely lowers HbA1c), hemoglobinopathies like sickle cell disease and thalassemia (interfere with assay methods), recent blood transfusion, G6PD deficiency, and pregnancy (especially 2nd and 3rd trimester). Fasting plasma glucose or OGTT should be used in these situations. Iron deficiency anemia can falsely elevate HbA1c due to decreased RBC turnover."
  },
  {
    id: 20,
    question: "Glycated albumin (GA) and fructosamine reflect glycemic control over what time period, making them useful when HbA1c is unreliable?",
    options: [
      "Glycated albumin: 1-2 weeks; Fructosamine: 3-4 weeks",
      "Glycated albumin: 2-3 weeks; Fructosamine: 2-3 weeks",
      "Glycated albumin: 2-3 weeks; Fructosamine: 1-3 weeks (reflecting past 2-3 weeks)",
      "Glycated albumin: 4-6 weeks; Fructosamine: 6-8 weeks"
    ],
    answer: 2,
    explanation: "Glycated albumin reflects glycemic control over the past 2-3 weeks (albumin half-life ~20 days). Fructosamine (measures all glycated serum proteins) reflects the past 2-3 weeks. Both are useful alternatives to HbA1c when HbA1c is unreliable (hemolytic anemia, hemoglobinopathies, dialysis patients, pregnancy with rapid glucose changes). Fructosamine is particularly useful in pregnancy where rapid changes in glycemia occur. Normal fructosamine is approximately 200-285 micromol/L."
  },
  {
    id: 21,
    question: "Continuous Glucose Monitoring (CGM) uses which of the following to measure interstitial glucose levels?",
    options: [
      "Electrochemical detection of hydrogen peroxide produced by glucose oxidase reaction in subcutaneous tissue",
      "Near-infrared spectroscopy of dermal capillary blood",
      "Fluorescence-based optical detection in subcutaneous tissue",
      "Microdialysis with enzymatic colorimetric detection"
    ],
    answer: 0,
    explanation: "Most commercial CGM devices (e.g., Dexcom, Medtronic Enlite) use an electrochemical biosensor inserted subcutaneously that measures glucose via the glucose oxidase reaction: glucose + O2 -> gluconolactone + H2O2. The H2O2 produced is detected amperometrically. There is a physiological lag of 5-15 minutes between blood glucose and interstitial glucose readings. Factory-calibrated systems (like Dexcom G6, FreeStyle Libre) do not require fingerstick calibration."
  },
  {
    id: 22,
    question: "The pre-diabetes category of Impaired Fasting Glucose (IFG) uses different cutoffs according to WHO and ADA. Which of the following correctly states both?",
    options: [
      "WHO IFG: fasting PG 6.0-6.9 mmol/L (110-125 mg/dL); ADA IFG: fasting PG 5.6-6.9 mmol/L (100-125 mg/dL)",
      "WHO IFG: fasting PG 5.6-6.9 mmol/L (100-125 mg/dL); ADA IFG: fasting PG 6.0-6.9 mmol/L (110-125 mg/dL)",
      "WHO IFG: fasting PG 5.5-6.9 mmol/L (99-125 mg/dL); ADA IFG: fasting PG 5.6-6.9 mmol/L (100-125 mg/dL)",
      "WHO IFG: fasting PG 6.0-7.0 mmol/L; ADA IFG: fasting PG 5.6-7.0 mmol/L"
    ],
    answer: 0,
    explanation: "WHO uses a higher IFG cutoff of 6.1-6.9 mmol/L (110-125 mg/dL), while ADA uses a lower cutoff of 5.6-6.9 mmol/L (100-125 mg/dL). Impaired Glucose Tolerance (IGT) is defined identically by both: 2-hour OGTT glucose 7.8-11.0 mmol/L (140-199 mg/dL). The lower ADA cutoff identifies more individuals as pre-diabetic. Combined IFG+IGT confers the highest risk of progression to diabetes."
  },
  {
    id: 23,
    question: "Regarding diabetes screening recommendations in India, which population should receive targeted/opportunistic screening according to ICMR/Rssdi guidelines?",
    options: [
      "All adults above 18 years irrespective of risk factors",
      "Adults aged >=30 years with any one risk factor including overweight/obesity, family history, physical inactivity, hypertension, prior GDM, or polycystic ovarian syndrome",
      "Only symptomatic individuals with polyuria, polydipsia, and weight loss",
      "Adults above 45 years only, regardless of risk factors"
    ],
    answer: 1,
    explanation: "ICMR/RSSDI Indian guidelines recommend opportunistic/targeted screening for diabetes in adults aged >=30 years who have at least one risk factor: overweight (BMI >=23 kg/m2 for Indians), central obesity (waist circumference >90 cm men, >80 cm women), first-degree relative with diabetes, physical inactivity, prior GDM or baby >3.5 kg, hypertension, dyslipidemia, PCOS, or history of cardiovascular disease. High-risk individuals should be screened regardless of age."
  },
  {
    id: 24,
    question: "In elderly patients (>65 years), diabetes diagnosis using HbA1c can be challenging because of which specific concern?",
    options: [
      "HbA1c is always falsely elevated in elderly due to renal failure",
      "Increasing proportion of HbA1c not reflecting true glycemia due to altered red blood cell survival and age-related hemoglobin glycation differences",
      "Elderly patients cannot tolerate the OGTT procedure",
      "Fasting glucose levels are invariably higher in elderly due to hormonal changes, making all elderly appear diabetic"
    ],
    answer: 1,
    explanation: "In elderly patients, HbA1c may be unreliable due to: (1) age-related increase in RBC lifespan (may falsely elevate HbA1c), (2) higher prevalence of conditions causing hemolysis or nutritional deficiencies, (3) concurrent chronic kidney disease affecting assay, and (4) some studies showing that HbA1c underestimates true glycemia in elderly. Additionally, elderly may have atypical presentations of diabetes and higher prevalence of cognitive impairment making symptom reporting unreliable. OGTT or fasting glucose may be preferred."
  },
  {
    id: 25,
    question: "Diabetic retinopathy is classified by the International Clinical Diabetic Retinopathy Disease Severity Scale. Which of the following represents Proliferative Diabetic Retinopathy (PDR)?",
    options: [
      "Presence of hard exudates within one disc diameter of the fovea",
      "Neovascularization anywhere on the retina or vitreous/preretinal hemorrhage",
      "More than 20 microaneurysms in all four quadrants",
      "Cotton wool spots with moderate non-proliferative changes"
    ],
    answer: 1,
    explanation: "Proliferative Diabetic Retinopathy (PDR) is defined by the presence of neovascularization (new blood vessel formation) on the disc (NVD), elsewhere on the retina (NVE), in the anterior segment (iris - rubeosis iridis), or vitreous/preretinal hemorrhage. PDR is sight-threatening and requires urgent panretinal photocoagulation (PRP) or anti-VEGF therapy. High-risk PDR includes NVD >=1/3 disc area or any NVD with vitreous hemorrhage."
  },
  {
    id: 26,
    question: "According to KDIGO 2022 staging, Diabetic Kidney Disease (DKD) is staged based on GFR and albuminuria. A patient with GFR 45 mL/min/1.73m2 and urine albumin-to-creatinine ratio (UACR) of 350 mg/g is in which risk category?",
    options: [
      "Moderately increased risk (Green)",
      "High risk (Yellow)",
      "Very high risk (Orange)",
      "Highest risk (Red)"
    ],
    answer: 3,
    explanation: "KDIGO CKD heat map: GFR 45 mL/min/1.73m2 corresponds to G3b category. UACR 350 mg/g corresponds to A3 (severely increased albuminuria, >300 mg/g). G3b + A3 places the patient in the 'Red' (Highest risk) category on the KDIGO risk heat map. This patient requires intensive management with RAAS blockade (ACE-I or ARB), SGLT2 inhibitor, and potentially finerenone to slow CKD progression."
  },
  {
    id: 27,
    question: "Diabetic neuropathy most commonly presents as which clinical pattern?",
    options: [
      "Asymmetric proximal motor neuropathy (diabetic amyotrophy)",
      "Symmetric distal sensorimotor polyneuropathy with 'stocking and glove' distribution",
      "Autonomic neuropathy with postural hypotension as the first symptom",
      "Cranial nerve palsy, most commonly involving the oculomotor nerve"
    ],
    answer: 1,
    explanation: "The most common form of diabetic neuropathy is chronic sensorimotor distal symmetric polyneuropathy (DSPN), affecting approximately 50% of diabetic patients over their lifetime. It presents with 'stocking and glove' distribution - symptoms beginning in the toes and feet, progressing proximally. Symptoms include burning, tingling, numbness, and pain. Loss of protective sensation (10g monofilament test) is a key risk factor for diabetic foot ulcers. The Michigan Neuropathy Screening Instrument (MNSI) is used for assessment."
  },
  {
    id: 28,
    question: "Wagner's classification of diabetic foot ulcers is widely used in clinical practice. A patient with a diabetic foot ulcer that extends to tendon, capsule, or bone but without osteomyelitis or abscess is classified as:",
    options: ["Wagner Grade 1", "Wagner Grade 2", "Wagner Grade 3", "Wagner Grade 4"],
    answer: 1,
    explanation: "Wagner Classification: Grade 0 = intact skin, high-risk foot; Grade 1 = superficial ulcer (skin only); Grade 2 = deep ulcer to tendon, capsule, or bone without infection/abscess; Grade 3 = deep ulcer with osteomyelitis, abscess, or joint sepsis; Grade 4 = localized gangrene (forefoot/heel); Grade 5 = gangrene of entire foot. Grades 3-5 require hospitalization and often surgical intervention. Osteomyelitis (Grade 3) is the key distinction from Grade 2."
  },
  {
    id: 29,
    question: "The UKPDS (UK Prospective Diabetes Study) was a landmark trial in Type 2 diabetes. Which of the following was a KEY finding of the UKPDS related to intensive glycemic control?",
    options: [
      "Intensive glucose control significantly reduced macrovascular events (MI and stroke) in all subgroups",
      "Each 1% reduction in HbA1c was associated with a 35% reduction in microvascular complications",
      "Metformin in obese patients showed no cardiovascular benefit over conventional treatment",
      "Intensive control with sulfonylurea or insulin increased the risk of all-cause mortality"
    ],
    answer: 1,
    explanation: "The UKPDS showed that each 1% reduction in HbA1c was associated with a 35% reduction in microvascular complications (retinopathy, nephropathy, neuropathy) and a 25% reduction in diabetes-related deaths. However, it did not show a significant reduction in macrovascular events (MI) with intensive control at the time of original publication. The 10-year post-trial follow-up (legacy effect) did show reduction in MI. Metformin in obese patients showed cardiovascular benefits beyond glycemia."
  },
  {
    id: 30,
    question: "The DCCT (Diabetes Control and Complications Trial) was conducted in Type 1 diabetes. What was the primary finding regarding intensive versus conventional insulin therapy?",
    options: [
      "Intensive therapy reduced HbA1c by 3% and reduced the risk of retinopathy by 76% in primary prevention",
      "Intensive therapy reduced HbA1c from ~9% to ~7% and reduced risk of retinopathy development by 76% (primary) and progression by 54% (secondary)",
      "Intensive therapy increased the risk of severe hypoglycemia threefold with no benefit on nephropathy",
      "Conventional therapy was equivalent to intensive therapy for neuropathy outcomes"
    ],
    answer: 1,
    explanation: "DCCT findings: Intensive insulin therapy reduced HbA1c from ~9% to ~7%. In primary prevention cohort: 76% reduction in development of retinopathy. In secondary intervention cohort: 54% reduction in progression of retinopathy, 39% reduction in microalbuminuria, 54% reduction in clinical neuropathy. The risk of severe hypoglycemia was 3-fold higher with intensive therapy. The EDIC follow-up study demonstrated the 'metabolic memory' or legacy effect, with sustained cardiovascular benefits decades later."
  },
  {
    id: 31,
    question: "Which SGLT2 inhibitor demonstrated significant reduction in hospitalization for heart failure and cardiovascular death in the EMPA-REG OUTCOME trial?",
    options: ["Dapagliflozin", "Canagliflozin", "Empagliflozin", "Ertugliflozin"],
    answer: 2,
    explanation: "The EMPA-REG OUTCOME trial showed that empagliflozin significantly reduced cardiovascular death by 38%, hospitalization for heart failure by 35%, and all-cause mortality by 32% in patients with Type 2 diabetes and established cardiovascular disease. CANVAS trial showed similar benefits with canagliflozin. DECLARE-TIMI 58 showed dapagliflozin reduced HHF. SGLT2 inhibitors work through glucosuria, natriuresis, and hemodynamic effects beyond glucose lowering. They are now recommended for T2DM with HF or CKD regardless of glucose control."
  },
  {
    id: 32,
    question: "The GLP-1 receptor agonist liraglutide demonstrated cardiovascular benefits in the LEADER trial. The mechanism of cardiovascular protection of GLP-1 RAs is primarily attributed to:",
    options: [
      "Direct anti-atherosclerotic effect through reduction of inflammation and endothelial dysfunction, independent of glucose lowering",
      "Reduction in body weight and blood pressure leading to reduced cardiac workload",
      "Blockade of cardiac beta receptors reducing arrhythmia risk",
      "Improved renal function through direct tubular effects similar to SGLT2 inhibitors"
    ],
    answer: 0,
    explanation: "The cardiovascular benefits of GLP-1 RAs (demonstrated in LEADER for liraglutide, SUSTAIN-6 for semaglutide, REWIND for dulaglutide) are primarily attributed to direct atheroprotective effects: reduction of inflammation, oxidative stress, endothelial dysfunction, and plaque stabilization. These benefits appear to go beyond weight loss and blood pressure reduction, as they emerged early in trials. GLP-1 receptors are expressed in cardiac and vascular tissue. Unlike SGLT2 inhibitors, GLP-1 RAs primarily reduce atherosclerotic MACE rather than hospitalization for heart failure."
  },
  {
    id: 33,
    question: "For HbA1c targets in diabetes management, which patient group should have a LESS STRINGENT target of HbA1c <8% (64 mmol/mol) rather than <7% (53 mmol/mol)?",
    options: [
      "Young patients with newly diagnosed Type 2 diabetes and no comorbidities",
      "Elderly patients with long duration of diabetes, multiple comorbidities, limited life expectancy, or hypoglycemia unawareness",
      "Pregnant women with pre-existing diabetes",
      "Patients with microalbuminuria only"
    ],
    answer: 1,
    explanation: "Less stringent HbA1c targets (7.5-8.5%) are appropriate for: elderly patients with functional dependence, long disease duration, severe hypoglycemia unawareness, advanced complications, multiple comorbidities, or limited life expectancy. These patients are at high risk of hypoglycemia harm which may outweigh glycemic benefits. Conversely, more stringent targets (<6.5%) may be appropriate for young, recently diagnosed patients with no complications. Pregnant women require very stringent control (HbA1c <6.5% pre-conception, <6% if achievable safely)."
  },
  {
    id: 34,
    question: "Regarding insulin types, which of the following insulin analogs has the LONGEST duration of action?",
    options: ["Insulin glargine U100", "Insulin detemir", "Insulin degludec", "NPH insulin"],
    answer: 2,
    explanation: "Insulin degludec (Tresiba) has the longest duration of action, exceeding 42 hours (essentially peakless for >24 hours). Insulin glargine U300 and degludec both have ultra-long action. Glargine U100 acts for ~24 hours, detemir for 12-20 hours, and NPH insulin for 10-16 hours with a peak. Ultra-long acting insulins like degludec have lower risk of nocturnal hypoglycemia compared to NPH. Degludec showed cardiovascular safety in the DEVOTE trial."
  },
  {
    id: 35,
    question: "Severe hypoglycemia in a conscious patient who can swallow should be treated with the 'Rule of 15'. What does this rule state?",
    options: [
      "Give 15g of fast-acting carbohydrate, wait 15 minutes, recheck glucose; repeat if still <70 mg/dL",
      "Give 15g glucose IV push over 15 minutes and recheck in 15 minutes",
      "Give 15 units of glucagon IM and 15g oral glucose simultaneously",
      "Give 15 mL of 50% dextrose IV and recheck after 15 minutes"
    ],
    answer: 0,
    explanation: "The '15-15 Rule' for conscious hypoglycemia: Give 15 grams of fast-acting carbohydrate (4 glucose tablets, 150 mL fruit juice, 6-7 regular candies, or 1 tablespoon of sugar/honey), wait 15 minutes, and recheck blood glucose. If still <70 mg/dL (3.9 mmol/L), repeat the treatment. Once glucose is >70 mg/dL, have the patient eat a meal or snack. For unconscious patients: IV dextrose (25-50 mL of 50% dextrose) or glucagon IM/SC 1mg (or 0.5mg if <25kg). Glucagon nasal powder (Baqsimi) is also available."
  },
  {
    id: 36,
    question: "Diabetic Ketoacidosis (DKA) is a life-threatening complication. Which laboratory finding is required to diagnose DKA according to standard criteria?",
    options: [
      "Blood glucose >250 mg/dL, arterial pH <7.30, serum bicarbonate <15 mEq/L, and positive ketones",
      "Blood glucose >300 mg/dL, arterial pH <7.25, serum bicarbonate <10 mEq/L, and positive ketones",
      "Blood glucose >200 mg/dL, venous pH <7.35, and urine ketones 2+ or more",
      "Blood glucose >400 mg/dL, osmolality >320 mOsm/kg, and negative ketones"
    ],
    answer: 0,
    explanation: "Standard DKA diagnostic criteria (ADA): (1) Blood glucose >250 mg/dL (may be lower in euglycemic DKA with SGLT2 inhibitors or in pregnancy), (2) Arterial pH <7.30 (mild: 7.25-7.30, moderate: 7.00-7.24, severe: <7.00), (3) Serum bicarbonate <15 mEq/L (18 mEq/L per some criteria), (4) Positive urine/serum ketones. Treatment: IV fluid resuscitation, insulin infusion, potassium replacement, and monitoring. Key complication is cerebral edema (especially in children)."
  },
  {
    id: 37,
    question: "Diabetic patients are at increased risk of which specific infection that is particularly aggressive and caused by Mucor species, often following COVID-19 in India?",
    options: ["Necrotizing fasciitis", "Rhinocerebral mucormycosis (black fungus)", "Invasive pulmonary aspergillosis", "Candida septicemia"],
    answer: 1,
    explanation: "Rhinocerebral mucormycosis (caused by Mucor, Rhizopus, Cunninghamella species) is a rapidly progressive, life-threatening infection with particular predilection for diabetic patients with poor glycemic control. During COVID-19 pandemic in India, 'COVID-19-associated mucormycosis' emerged as a major problem - diabetic patients on steroids for COVID-19 were at extreme risk. Hyperglycemia, acidosis, and impaired phagocyte function in diabetics promote Mucor growth. Treatment requires IV amphotericin B and aggressive surgical debridement. India reported >45,000 cases during the pandemic."
  },
  {
    id: 38,
    question: "The Diabetes Prevention Program (DPP) trial in the USA compared intensive lifestyle intervention versus metformin versus placebo in preventing diabetes in high-risk individuals. What was the key finding regarding lifestyle intervention?",
    options: [
      "Lifestyle intervention reduced diabetes incidence by 31% compared to placebo",
      "Lifestyle intervention reduced diabetes incidence by 58% compared to placebo, compared to 31% reduction with metformin",
      "Metformin and lifestyle intervention were equally effective at 50% diabetes prevention",
      "Lifestyle intervention was only effective in patients below 45 years of age"
    ],
    answer: 1,
    explanation: "The DPP trial showed: Lifestyle intervention (7% weight loss goal + 150 min/week moderate physical activity) reduced diabetes incidence by 58% compared to placebo. Metformin 850mg twice daily reduced incidence by 31% compared to placebo. The lifestyle intervention was most effective in older participants (>60 years: 71% reduction). The Finnish Diabetes Prevention Study (DPS) showed similar 58% reduction with lifestyle intervention. These trials established that Type 2 diabetes is preventable through lifestyle modification."
  },
  {
    id: 39,
    question: "The National Programme for Non-Communicable Diseases (NPCDCS) in India targets which diseases for population-based screening and management?",
    options: [
      "Diabetes mellitus, hypertension, and cardiovascular diseases only",
      "Diabetes mellitus, hypertension, cardiovascular diseases (CHD, stroke), and cancer (oral, cervical, breast)",
      "Diabetes, hypertension, COPD, and mental health disorders",
      "Diabetes, hypertension, obesity, and chronic kidney disease"
    ],
    answer: 1,
    explanation: "NPCDCS (National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke) was launched in 2010 and renamed/revised multiple times. It targets: diabetes mellitus, hypertension, cardiovascular diseases (CHD and stroke), and cancer (oral, cervical, and breast cancers). The program focuses on health promotion, opportunistic screening at health facilities, early diagnosis, management, and referral linkages from sub-center to district hospital level."
  },
  {
    id: 40,
    question: "Under NPCDCS, NCD clinics have been established at which levels of the health system for diabetes and hypertension management?",
    options: [
      "Only at district hospitals (DH)",
      "At Community Health Centers (CHC) and District Hospitals (DH)",
      "At Primary Health Centers (PHC), CHC, and DH",
      "At sub-centers, PHC, CHC, and DH"
    ],
    answer: 1,
    explanation: "Under NPCDCS, NCD clinics are established at Community Health Centers (CHC) and District Hospitals (DH). CHC-level NCD clinics provide basic diabetes and hypertension management services with access to essential medicines and basic investigations. District Hospital NCD clinics provide more comprehensive care including specialist consultation. Screening can be done at all levels including sub-centers and PHCs, but formal NCD management clinics are at CHC and DH levels. ASHAs and health workers perform opportunistic screening at community level."
  },
  {
    id: 41,
    question: "Population-based screening for diabetes under NPCDCS in India uses which primary screening tool at the community level?",
    options: [
      "Universal OGTT for all adults above 30 years",
      "Indian Diabetes Risk Score (IDRS) for risk stratification, followed by blood glucose testing for high-risk individuals",
      "Fasting blood glucose for all adults at annual health check",
      "HbA1c testing at sub-center level using point-of-care devices"
    ],
    answer: 1,
    explanation: "NPCDCS uses a targeted screening approach. The Indian Diabetes Risk Score (IDRS), developed by Dr. V. Mohan at Madras Diabetes Research Foundation, is used for community-level risk stratification. IDRS uses 4 parameters: age, waist circumference, physical activity, and family history. Score >=60 indicates high risk. High-risk individuals are referred for blood glucose testing. This prevents the need for universal blood testing of the entire population and directs resources to those most at risk."
  },
  {
    id: 42,
    question: "Diabetes Self-Management Education and Support (DSMES) is a cornerstone of diabetes care. According to evidence, at which critical time points should DSMES be provided?",
    options: [
      "Only at the time of initial diabetes diagnosis",
      "At diagnosis, annually, when complications arise, and during transitions in care or life changes",
      "Only when the patient is non-adherent to medication",
      "Annually in group settings regardless of individual patient needs"
    ],
    answer: 1,
    explanation: "DSMES should be provided at four critical time points (ADA Standards of Care): (1) At diagnosis of diabetes, (2) Annually and/or when treatment goals are not met, (3) When complications develop or health status changes that influence self-management, and (4) During transitions in care (hospitalization, new care setting). Key DSMES components include: healthy eating, being active, monitoring, taking medication, problem solving, reducing risks, and healthy coping. DSMES reduces HbA1c by approximately 0.5-1%."
  },
  {
    id: 43,
    question: "In India, which community health worker plays a key role in diabetes prevention and early detection at the village level under NPCDCS?",
    options: [
      "Auxiliary Nurse Midwife (ANM) at sub-center",
      "Accredited Social Health Activist (ASHA) who performs opportunistic screening and facilitates referrals",
      "Community Health Officer (CHO) at Health and Wellness Center",
      "Multipurpose Worker (MPW) at PHC"
    ],
    answer: 1,
    explanation: "ASHAs (Accredited Social Health Activists) are the frontline community health workers in the NPCDCS for NCD screening. They are trained to use the Indian Diabetes Risk Score (IDRS) to identify high-risk individuals, measure blood pressure, check random blood glucose using glucometers, and refer high-risk individuals to higher health facilities. Under Ayushman Bharat - Health and Wellness Centers, Community Health Officers (CHOs) also play a significant role in NCD management at the primary care level."
  },
  {
    id: 44,
    question: "mHealth interventions for diabetes management in India have shown promising results. Which of the following mHealth modalities has the STRONGEST evidence for improving HbA1c in low-resource settings?",
    options: [
      "Wearable fitness tracker apps for step counting",
      "SMS-based health messaging and reminders for medication adherence and follow-up",
      "Telemedicine video consultation replacing all in-person visits",
      "Social media diabetes support groups without clinical oversight"
    ],
    answer: 1,
    explanation: "SMS-based health messaging has the strongest evidence for diabetes management in low-resource settings like India, as it works on basic mobile phones without smartphones or internet connectivity. Multiple RCTs from India and other LMICs have shown that structured SMS reminders for medication adherence, glucose monitoring, dietary advice, and follow-up appointments improve HbA1c. Examples include the WellDoc system and various Indian studies. The Digital Health for Diabetes program by ICMR has explored SMS and IVR (Interactive Voice Response) technologies for scalable diabetes support."
  },
  {
    id: 45,
    question: "ICMR guidelines for management of Type 2 diabetes in India recommend which drug as first-line therapy in addition to lifestyle modifications, aligning with international guidelines?",
    options: [
      "Sulfonylurea (glimepiride) due to low cost",
      "Metformin (unless contraindicated)",
      "DPP-4 inhibitor (sitagliptin) due to low hypoglycemia risk",
      "Alpha-glucosidase inhibitor (acarbose) due to suitability for Indian carbohydrate-rich diet"
    ],
    answer: 1,
    explanation: "ICMR guidelines (RSSDI/Indian guidelines) recommend metformin as first-line pharmacotherapy for Type 2 diabetes in addition to lifestyle modifications, consistent with ADA, EASD, and WHO guidelines. Metformin is preferred due to: proven efficacy, safety profile, cardiovascular benefits (UKPDS), weight neutrality, low cost, and wide availability. It is contraindicated in eGFR <30 mL/min, severe liver disease, and should be used cautiously in eGFR 30-45. Indian patients often have lower BMI but still benefit from metformin."
  },
  {
    id: 46,
    question: "Evidence from randomized controlled trials on yoga and diabetes shows that yoga interventions can improve glycemic control. What is the most robust finding from meta-analyses on yoga and Type 2 diabetes?",
    options: [
      "Yoga reduces HbA1c by approximately 1.0-1.5% and can replace oral hypoglycemic agents",
      "Yoga reduces HbA1c by approximately 0.3-0.8%, fasting glucose, and improves lipid profiles in Type 2 diabetes",
      "Yoga has no significant effect on glycemia but improves psychological well-being only",
      "Yoga is only effective in patients with BMI <25 kg/m2"
    ],
    answer: 1,
    explanation: "Meta-analyses of RCTs (including Innes & Selfe 2016, and subsequent reviews) show that yoga interventions in Type 2 diabetes reduce HbA1c by approximately 0.3-0.8%, reduce fasting blood glucose, improve lipid profiles (reduced LDL, triglycerides), reduce body weight, and improve blood pressure. AIIMS, Morarji Desai National Institute of Yoga, and other Indian institutions have conducted trials. However, yoga should be considered adjunctive therapy, not a replacement for standard diabetes management. Effect sizes are modest compared to pharmacotherapy."
  },
  {
    id: 47,
    question: "Metabolic/bariatric surgery for diabetes (metabolic surgery) is recommended for Type 2 diabetes patients who meet which criteria according to major diabetes societies including IDF?",
    options: [
      "BMI >=25 kg/m2 with uncontrolled diabetes despite one oral agent",
      "BMI >=40 kg/m2 (or >=35 with obesity-related comorbidities) in adults with inadequately controlled Type 2 diabetes, with lower BMI thresholds (>=27.5 with comorbidities) considered for Asians",
      "BMI >=30 kg/m2 with any type of diabetes regardless of glycemic control",
      "BMI >=35 kg/m2 only in patients failing all available pharmacotherapy including GLP-1 RAs"
    ],
    answer: 1,
    explanation: "IDF (2011) and ADA recommend metabolic surgery for Type 2 diabetes with: BMI >=40 kg/m2 regardless of glycemic control; BMI 35-39.9 kg/m2 with inadequate glycemic control despite optimal medical therapy. For Asian populations: BMI >=37.5 (or >=32.5 with comorbidities) with lower thresholds due to Asian BMI-related risk. IDF specifically notes that for Asians, thresholds of BMI >=27.5 kg/m2 with comorbidities may be considered. Roux-en-Y gastric bypass has the strongest evidence for diabetes remission (60-80% remission rates)."
  },
  {
    id: 48,
    question: "A woman diagnosed with GDM during pregnancy has a long-term risk of developing Type 2 diabetes. What is the approximate risk of developing Type 2 diabetes within 10 years of GDM diagnosis?",
    options: [
      "5-10%",
      "15-20%",
      "35-70%",
      "80-90%"
    ],
    answer: 2,
    explanation: "Women with GDM have a 35-70% lifetime risk of developing Type 2 diabetes, with most studies showing approximately 50% risk within 5-10 years post-partum. ADA recommends post-partum OGTT at 4-12 weeks for all GDM women, then every 1-3 years. The child born to a GDM mother also has increased risk of obesity, impaired glucose tolerance, and Type 2 diabetes later in life. Breastfeeding, weight management, and physical activity can reduce the mother's progression risk. This intergenerational cycle makes GDM prevention and management a public health priority."
  },
  {
    id: 49,
    question: "The Finnish Diabetes Prevention Study (DPS) demonstrated that lifestyle intervention could prevent Type 2 diabetes. What were the main lifestyle intervention targets in the Finnish DPS?",
    options: [
      "Weight loss of >=5%, fat intake <30% of energy, saturated fat <10% of energy, fiber >=15g/1000kcal, physical activity >=30 min/day",
      "Weight loss of >=10%, complete elimination of simple sugars, and aerobic exercise 60 min/day",
      "Low-carbohydrate diet (<50g/day), resistance training 3x/week, and BMI target of <25",
      "Caloric restriction to 1200 kcal/day, Mediterranean diet, and 10,000 steps per day"
    ],
    answer: 0,
    explanation: "Finnish DPS lifestyle intervention targets: (1) Weight reduction of >=5%, (2) Total fat intake <30% of daily energy, (3) Saturated fat <10% of daily energy, (4) Dietary fiber >=15g per 1000 kcal, (5) Moderate-intensity physical activity >=30 minutes per day. These were individualized goals with regular dietary counseling. The intervention achieved 58% relative risk reduction in diabetes incidence over mean 3.2 years. Weight loss was the dominant mediating factor. These targets are similar to DPP and have been adopted in numerous national prevention programs."
  },
  {
    id: 50,
    question: "The Diabetes Prevention Program (DPP) in the USA showed long-term benefits in the DPPOS (DPP Outcomes Study). Which of the following reflects the 15-year follow-up findings?",
    options: [
      "Benefits of lifestyle intervention completely disappeared after 5 years, with equal diabetes rates in all groups",
      "Lifestyle intervention group maintained significant diabetes delay (2-4 years), with all groups showing reduced microvascular complications compared to no intervention",
      "Metformin group had better long-term outcomes than the lifestyle group at 15 years",
      "The lifestyle group had higher cardiovascular mortality at 15 years due to excessive physical activity"
    ],
    answer: 1,
    explanation: "The DPPOS 15-year follow-up showed: All three groups (lifestyle, metformin, placebo) showed lower diabetes rates than expected for general population. Lifestyle intervention delayed diabetes onset by approximately 4 years compared to placebo; metformin delayed by 2 years. Importantly, all three randomized groups showed reduced microvascular complications (nephropathy and neuropathy), with the lifestyle and metformin groups having lower rates than the original placebo group. This suggests diabetes prevention translates into complication prevention. There was no difference in macrovascular outcomes, possibly due to underpowering."
  }
];

export default questions;

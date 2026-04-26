const questions = [
  {
    id: 1,
    question: "According to the IDF Diabetes Atlas 10th edition (2021), approximately how many adults aged 20-79 years were living with diabetes globally?",
    options: ["337 million", "422 million", "537 million", "643 million"],
    answer: 2,
    explanation: "The IDF Diabetes Atlas 10th edition (2021) estimated that approximately 537 million adults (20-79 years) were living with diabetes globally, representing a prevalence of 10.5%. This figure is projected to rise to 643 million by 2030 and 783 million by 2045, underscoring the scale of the global diabetes epidemic."
  },
  {
    id: 2,
    question: "The ICMR-INDIAB study (Phase 1, 2011) provided the first large-scale nationally representative diabetes prevalence estimate for India. What was the estimated national prevalence of diabetes from this study?",
    options: ["4.6%", "7.3%", "10.4%", "13.1%"],
    answer: 1,
    explanation: "The ICMR-INDIAB Phase 1 study (Anjana et al., Diabetologia, 2011) estimated the national prevalence of diabetes in India at 7.3%, with significant urban-rural and state-level variation. Tamil Nadu and Maharashtra showed higher rates, while states like Jharkhand had lower prevalence. This study used WHO 2006 diagnostic criteria and was based on a large stratified multistage cluster sample across four states and one union territory."
  },
  {
    id: 3,
    question: "Which of the following best describes the key epidemiological difference between Type 1 and Type 2 diabetes at the population level relevant to disease burden estimation?",
    options: [
      "Type 1 diabetes accounts for 30-40% of all diabetes globally and is more common in low-income countries",
      "Type 2 diabetes accounts for 90-95% of all diabetes globally, while Type 1 accounts for 5-10%",
      "Type 1 and Type 2 have equal global prevalence but differ only in age of onset",
      "Type 2 diabetes predominates only in high-income countries due to sedentary lifestyles"
    ],
    answer: 1,
    explanation: "Type 2 diabetes accounts for approximately 90-95% of all diabetes cases globally, while Type 1 accounts for 5-10%. This distinction has major implications for population-level burden estimation and surveillance. Type 2 is strongly associated with older age, obesity, physical inactivity, and urbanization, making it the primary driver of the global diabetes epidemic. Type 1 has an autoimmune etiology and peaks in childhood/adolescence, with higher incidence in Scandinavian and Northern European countries."
  },
  {
    id: 4,
    question: "For population-level screening programs, the WHO/ADA fasting plasma glucose (FPG) cutoff used to diagnose diabetes is:",
    options: [
      "FPG >= 6.1 mmol/L (110 mg/dL)",
      "FPG >= 6.5 mmol/L (117 mg/dL)",
      "FPG >= 7.0 mmol/L (126 mg/dL)",
      "FPG >= 7.8 mmol/L (140 mg/dL)"
    ],
    answer: 2,
    explanation: "The WHO/ADA diagnostic criterion for diabetes using fasting plasma glucose is >= 7.0 mmol/L (126 mg/dL). In population screening programs such as the India STEPS survey and NFHS, this cutoff identifies individuals with probable diabetes requiring confirmatory testing. The cutoff of 6.1 mmol/L (110 mg/dL) defines WHO Impaired Fasting Glucose (IFG), while 7.8 mmol/L (140 mg/dL) is the 2-hour OGTT threshold distinguishing IGT from normal."
  },
  {
    id: 5,
    question: "Gestational Diabetes Mellitus (GDM) prevalence in India is among the highest globally. Based on population surveys using IADPSG/WHO 2013 criteria, the estimated GDM prevalence in India is approximately:",
    options: ["1-3%", "5-8%", "10-20%", "25-35%"],
    answer: 2,
    explanation: "GDM prevalence in India ranges from approximately 10-20% depending on the diagnostic criteria applied and the geographic region studied, which is significantly higher than the global average of about 14% (IDF 2021). Urban women in southern India, including Tamil Nadu and Karnataka, show some of the highest rates. The high GDM burden has major public health implications as it increases future risk of Type 2 diabetes in both the mother (7-fold increased risk) and the offspring."
  },
  {
    id: 6,
    question: "In the WHO STEPS survey (STEPwise Approach to NCD Risk Factor Surveillance), which primary biochemical indicator is used to measure diabetes prevalence at the population level?",
    options: [
      "Fasting plasma glucose measured after an 8-12 hour overnight fast",
      "HbA1c measured from dried blood spots",
      "2-hour post-glucose load plasma glucose (OGTT)",
      "Random capillary blood glucose with glucometer"
    ],
    answer: 0,
    explanation: "The WHO STEPS survey uses fasting plasma glucose (FPG) as the primary biochemical indicator for population-level diabetes surveillance. Participants are instructed to fast for 8-12 hours before the survey. The standardized STEPS methodology enables cross-country and cross-time comparison of NCD risk factor data. India has conducted STEPS surveys to obtain population-representative prevalence data for planning NCD prevention programs under the National NCD Action Plan."
  },
  {
    id: 7,
    question: "The urban-rural gradient for diabetes prevalence in India, as documented in the ICMR-INDIAB study, is best described as:",
    options: [
      "Rural areas have higher diabetes prevalence due to high-carbohydrate diets and physical stress",
      "Urban areas consistently show higher diabetes prevalence than rural areas across Indian states",
      "Urban and rural prevalence are approximately equal, with differences explained only by age distribution",
      "Urban-rural differences have disappeared in southern Indian states due to equalized dietary patterns"
    ],
    answer: 1,
    explanation: "The ICMR-INDIAB study consistently demonstrated that urban areas show higher diabetes prevalence than rural areas across Indian states. For example, in Tamil Nadu, urban prevalence was 18.6% versus 9.8% in rural areas. This urban-rural gradient is attributed to sedentary lifestyles, dietary transitions (refined carbohydrates, high-calorie foods), obesity, and greater diagnostic access in urban areas. This gradient is also observed in NFHS-5 data on measured blood glucose levels."
  },
  {
    id: 8,
    question: "According to the IDF consensus definition (2005), the diagnosis of metabolic syndrome requires central obesity as an essential criterion. For South Asian populations, the waist circumference cutoffs are:",
    options: [
      ">= 94 cm for men and >= 80 cm for women",
      ">= 90 cm for men and >= 80 cm for women",
      ">= 85 cm for men and >= 75 cm for women",
      ">= 102 cm for men and >= 88 cm for women"
    ],
    answer: 1,
    explanation: "The IDF 2005 consensus definition of metabolic syndrome requires central obesity as an essential criterion. For South Asians (and most Asian populations), ethnicity-specific waist circumference cutoffs are >= 90 cm for men and >= 80 cm for women, which are lower than the European cutoffs (>= 94 cm men, >= 80 cm women). Additionally, any two of the following are required: raised triglycerides (>= 1.7 mmol/L), reduced HDL-C, raised blood pressure (>= 130/85 mmHg), or raised fasting plasma glucose (>= 5.6 mmol/L). The lower South Asian cutoffs reflect higher metabolic risk at lower waist circumference values."
  },
  {
    id: 9,
    question: "The WHO definition of Impaired Fasting Glucose (IFG) used in international surveillance differs from the ADA definition. The WHO IFG cutoff is:",
    options: [
      "Fasting plasma glucose 5.6-6.9 mmol/L (100-125 mg/dL)",
      "Fasting plasma glucose 6.1-6.9 mmol/L (110-125 mg/dL)",
      "Fasting plasma glucose 5.0-5.9 mmol/L (90-106 mg/dL)",
      "Fasting plasma glucose 6.5-6.9 mmol/L (117-124 mg/dL)"
    ],
    answer: 1,
    explanation: "The WHO definition of Impaired Fasting Glucose (IFG) is fasting plasma glucose 6.1-6.9 mmol/L (110-125 mg/dL), while the ADA uses a lower cutoff of 5.6-6.9 mmol/L (100-125 mg/dL). The WHO cutoff is more commonly used in international epidemiological surveillance and STEPS surveys for cross-country comparisons. The ADA cutoff identifies more individuals as having prediabetes, leading to higher prevalence estimates. This definitional difference is important when comparing IFG prevalence data across studies."
  },
  {
    id: 10,
    question: "Impaired Glucose Tolerance (IGT) is defined by the WHO as a 2-hour post-load plasma glucose (75g OGTT) value of:",
    options: [
      "7.0-10.9 mmol/L (126-196 mg/dL)",
      "7.8-11.0 mmol/L (140-198 mg/dL)",
      "6.5-7.8 mmol/L (117-140 mg/dL)",
      "8.0-11.1 mmol/L (144-200 mg/dL)"
    ],
    answer: 1,
    explanation: "WHO defines Impaired Glucose Tolerance (IGT) as a 2-hour post-load plasma glucose (75g OGTT) of 7.8-11.0 mmol/L (140-198 mg/dL) with fasting glucose below the diabetic threshold. IGT is a significant population-level indicator for future Type 2 diabetes risk (approximately 5-10% annual conversion rate) and is associated with independently increased cardiovascular risk. The ICMR-INDIAB study found substantial IGT prevalence across Indian states, often exceeding diabetes prevalence in rural areas."
  },
  {
    id: 11,
    question: "The economic burden of diabetes at the population level, as estimated in the IDF Diabetes Atlas, is measured using which approach?",
    options: [
      "Direct medical costs of hospitalization and insulin procurement only",
      "Total health expenditure attributable to diabetes, including direct and indirect costs",
      "Cost per quality-adjusted life year (QALY) lost due to diabetes complications",
      "Proportion of national GDP allocated to diabetes care programs"
    ],
    answer: 1,
    explanation: "The IDF Diabetes Atlas estimates the economic burden using total health expenditure attributable to diabetes, encompassing direct costs (outpatient visits, medications, hospitalizations, management of complications) and indirect costs (lost productivity, absenteeism, premature mortality). The 10th edition (2021) estimated global diabetes-related health expenditure at USD 966 billion, representing approximately 9% of global adult health expenditure. India's high diabetes burden translates to substantial economic loss, particularly affecting working-age adults."
  },
  {
    id: 12,
    question: "Diabetes-attributable mortality at the population level in India is best estimated using which epidemiological approach?",
    options: [
      "Counting only deaths where diabetes is listed as the primary cause in hospital records",
      "Population-attributable fraction using community diabetes prevalence and mortality relative risk from prospective cohort studies",
      "Verbal autopsy data from civil registration alone",
      "Facility-based death audits restricted to tertiary care hospitals"
    ],
    answer: 1,
    explanation: "Diabetes-attributable mortality is most accurately estimated using the Population-Attributable Fraction (PAF), calculated as: PAF = Pe(RR-1)/[Pe(RR-1)+1], where Pe is the community-level diabetes prevalence and RR is the relative risk of mortality from prospective cohort studies. This approach captures the indirect role diabetes plays in cardiovascular deaths, renal failure, and infections — causes often not coded as 'diabetes deaths' in vital registration. Relying solely on direct death certificate data substantially underestimates diabetes mortality due to poor cause-of-death coding in India."
  },
  {
    id: 13,
    question: "According to WHO Global Health Observatory and GBD 2019 data, cardiovascular diseases (CVDs) are responsible for approximately what proportion of all global deaths annually?",
    options: ["15%", "22%", "32%", "44%"],
    answer: 2,
    explanation: "CVDs are the leading cause of death globally, responsible for approximately 32% of all global deaths (approximately 17.9 million deaths per year). Ischemic heart disease accounts for about 16% of global deaths, making it the single leading cause, while stroke accounts for about 11%. In India, CVDs account for approximately 27-30% of all deaths based on GBD 2019 data and SRS-based estimates, with premature CVD deaths (before age 70) being disproportionately higher than in high-income countries."
  },
  {
    id: 14,
    question: "The GBD study data for India consistently identify which condition as the leading cause of CVD-related DALYs (Disability-Adjusted Life Years)?",
    options: [
      "Rheumatic heart disease",
      "Ischemic heart disease",
      "Hemorrhagic stroke",
      "Peripheral artery disease"
    ],
    answer: 1,
    explanation: "Ischemic heart disease contributes the highest CVD burden in India in terms of DALYs, according to GBD study data. India has experienced a rapid rise in ischemic heart disease over recent decades, with a younger age of onset compared to high-income countries (mean age of first MI approximately 6-10 years earlier). The ICMR-PHFI-IHMe report on India's Burden of Disease (2017) confirmed ischemic heart disease as the leading single cause of death and DALYs, reflecting accelerated epidemiological transition."
  },
  {
    id: 15,
    question: "In global NCD burden analyses and the WHO 25x25 target framework, 'premature CVD death' is defined as death from CVD occurring before what age?",
    options: ["Before 50 years", "Before 60 years", "Before 70 years", "Before 75 years"],
    answer: 2,
    explanation: "Premature CVD (and NCD) death is defined as death occurring before age 70 years. The WHO Global Action Plan for NCDs targets a 25% relative reduction in premature NCD mortality (30-70 years) by 2025 compared to 2010 baseline. India has a particularly high burden of premature CVD deaths — over 50% of ischemic heart disease deaths in India occur in individuals under 70 years, substantially higher than in high-income countries where CVD predominantly affects older age groups."
  },
  {
    id: 16,
    question: "The INTERHEART study calculated Population Attributable Fractions (PAF) for nine modifiable risk factors for acute myocardial infarction across 52 countries. Globally, which risk factor had the highest PAF for MI?",
    options: [
      "Hypertension",
      "Smoking",
      "Abnormal lipids (ApoB/ApoA1 ratio)",
      "Diabetes mellitus"
    ],
    answer: 2,
    explanation: "The INTERHEART study (Yusuf et al., Lancet 2004) found that abnormal lipids, measured by the ApoB/ApoA1 ratio, had the highest PAF for acute MI globally (49.2%), followed by smoking (35.7%), psychosocial factors (32.5%), abdominal obesity (20.1%), hypertension (17.9%), diabetes (9.9%), low fruit/vegetable intake (13.7%), physical inactivity (12.2%), and alcohol (6.7%). The nine factors collectively accounted for over 90% of the PAF for MI. This study highlighted the universality of CVD risk factors across different geographic and ethnic populations."
  },
  {
    id: 17,
    question: "NFHS-5 (2019-21) measured blood pressure in adults aged 15 years and above in India. The prevalence of elevated blood pressure (>= 140/90 mmHg) reported in NFHS-5 was approximately:",
    options: [
      "10% in men and 8% in women",
      "24% in men and 21% in women",
      "38% in men and 34% in women",
      "50% in men and 45% in women"
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21) reported that approximately 24% of men and 21% of women aged 15 years and above had elevated blood pressure (>= 140/90 mmHg or currently taking medication for it). This represents a significant increase from NFHS-4 (2015-16) estimates (13% men, 12% women using the same definition). NFHS-5 also found that awareness, treatment, and control rates for hypertension were low, with only about 12% of hypertensive men and 19% of hypertensive women having their blood pressure controlled — indicating a large treatment gap."
  },
  {
    id: 18,
    question: "The Framingham Risk Score is applied in public health for which population-level purpose?",
    options: [
      "Determining eligibility for bariatric surgery in clinical settings",
      "Estimating 10-year CVD risk for population risk stratification and targeted preventive intervention planning",
      "Calculating global DALYs attributable to cardiovascular disease in GBD analyses",
      "Setting health insurance premiums based on cardiovascular mortality projections"
    ],
    answer: 1,
    explanation: "The Framingham Risk Score (variables: age, sex, total cholesterol, HDL-C, systolic blood pressure, antihypertensive treatment, smoking, diabetes) estimates 10-year CVD risk. At the population level, it is used for risk stratification: identifying high-risk groups for targeted preventive interventions, monitoring trends in population-level cardiovascular risk, and evaluating the impact of prevention programs. It is widely used in NCD program planning, though its calibration in non-Western populations like South Asians has limitations and recalibration or alternative scores (SCORE, WHO CVD risk charts) may be preferred."
  },
  {
    id: 19,
    question: "GBD study data on global stroke epidemiology indicate that compared to high-income countries (HICs), stroke in low- and middle-income countries (LMICs) like India:",
    options: [
      "Has lower incidence but similar case fatality rates",
      "Occurs predominantly in older age groups with lower premature mortality",
      "Has higher incidence, occurs at younger ages, and contributes to disproportionately more stroke-related deaths and DALYs",
      "Is predominantly hemorrhagic rather than ischemic, unlike in HICs"
    ],
    answer: 2,
    explanation: "GBD data show that LMICs bear a disproportionately higher stroke burden: higher incidence rates, younger age of occurrence, and higher case fatality compared to HICs. LMICs account for approximately 87% of global stroke-related deaths and DALYs despite having better population-level primary prevention opportunities. India's stroke incidence has been rising, driven by hypertension (the most important modifiable risk factor), diabetes, tobacco use, and air pollution. The younger age of stroke onset in India represents a major loss of productive years."
  },
  {
    id: 20,
    question: "Rheumatic Heart Disease (RHD) represents a significant CVD burden in India. Which population group bears the highest RHD prevalence, and what is the primary epidemiological driver?",
    options: [
      "Elderly urban males due to cumulative hypertension exposure and valvular calcification",
      "Children and young adults in low-income settings due to repeated untreated streptococcal throat infections causing acute rheumatic fever",
      "Middle-aged urban women due to estrogen-related valvular changes and autoimmune mechanisms",
      "Adults aged 50-70 years in periurban areas due to delayed healthcare-seeking behavior"
    ],
    answer: 1,
    explanation: "RHD predominantly affects children and young adults in low-income settings. It results from repeated episodes of Acute Rheumatic Fever (ARF) following untreated Group A Streptococcal pharyngitis, leading to progressive valvular damage. Poor housing conditions, household overcrowding, and limited access to antibiotics are key social determinants. India accounts for approximately one-third to one-quarter of global RHD deaths. The GBD 2019 estimated approximately 39 million prevalent RHD cases globally, with South Asia being the highest-burden region."
  },
  {
    id: 21,
    question: "Which surveillance system in India is specifically designed to monitor NCD risk factors including CVD risk factors (tobacco, alcohol, diet, physical activity, blood pressure, blood glucose, cholesterol) at the population level?",
    options: [
      "Integrated Disease Surveillance Programme (IDSP) — focused on infectious disease outbreaks",
      "India WHO STEPS Survey — standardized NCD risk factor surveillance",
      "Sample Registration System (SRS) — cause of death recording",
      "National Family Health Survey (NFHS) — covers only reproductive and child health indicators"
    ],
    answer: 1,
    explanation: "The India STEPS Survey (WHO STEPwise Approach to Surveillance) is specifically designed to monitor NCD risk factors at the population level using a standardized three-step methodology: behavioral questionnaire, physical measurements, and biochemical measurements. India conducted STEPS surveys to obtain representative prevalence data for NCD risk factors (tobacco use, physical inactivity, diet, blood pressure, blood glucose, cholesterol), which are used for planning NCD prevention programs and monitoring progress toward WHO Global NCD targets."
  },
  {
    id: 22,
    question: "Population surveys in India including STEPS surveys estimate the prevalence of raised total cholesterol (>= 200 mg/dL) in Indian adults to be approximately:",
    options: ["5-10%", "13-17%", "25-30%", "40-50%"],
    answer: 2,
    explanation: "Population surveys in India, including state-level STEPS surveys and community-based studies, estimate dyslipidemia (total cholesterol >= 200 mg/dL) prevalence at approximately 25-30% in Indian adults, with urban populations showing consistently higher rates. The ICMR study on dyslipidemia in urban Indian adults (DISHA study) and multiple STEPS surveys confirm this range. Rising dyslipidemia prevalence — driven by dietary transitions, physical inactivity, and increasing obesity — is a major contributor to the growing atherosclerotic CVD burden in India."
  },
  {
    id: 23,
    question: "The 'socioeconomic gradient' in CVD epidemiology, observed globally, is best described as:",
    options: [
      "CVD incidence is uniformly highest among the wealthiest socioeconomic groups in all countries",
      "In HICs, CVD burden has progressively shifted to lower socioeconomic groups; in LMICs, lower socioeconomic strata increasingly bear a higher CVD burden",
      "Socioeconomic status has no consistent independent relationship with CVD after adjusting for behavioral risk factors",
      "Middle-income groups have the highest CVD risk due to transitional dietary patterns and partial access to healthcare"
    ],
    answer: 1,
    explanation: "The socioeconomic gradient in CVD is well-documented: in high-income countries, CVD risk has progressively shifted toward lower socioeconomic groups as wealthier groups adopted healthier lifestyles, while in LMICs including India, CVD increasingly affects lower socioeconomic strata due to limited access to prevention, poor hypertension control, higher tobacco exposure, and dietary risk factors. GBD data show that lower socioeconomic quintiles in India have higher CVD mortality rates — reflecting both higher risk factor exposure and poorer access to effective care."
  },
  {
    id: 24,
    question: "In Omran's epidemiological transition framework, what stage is India predominantly experiencing regarding the CVD burden?",
    options: [
      "Stage 1 (Pestilence and Famine): CVD from nutritional deficiencies and infections",
      "Stage 2 (Receding Pandemics): CVD predominantly from rheumatic disease and infections",
      "Stage 3 (Degenerative and Man-made Diseases): rising atherosclerotic CVD driven by behavioral risk factors",
      "Stage 4 (Delayed Degenerative Diseases): CVD burden shifting to older age groups with effective prevention"
    ],
    answer: 2,
    explanation: "India is predominantly in Stage 3 of Omran's epidemiological transition (Degenerative and Man-made Diseases), characterized by rising atherosclerotic CVD and stroke driven by tobacco use, dietary changes, sedentary lifestyles, and urbanization. However, India exhibits a unique 'compressed' or 'polarized' transition — atherosclerotic CVD coexists with significant rheumatic heart disease and infection-related cardiovascular mortality, especially in rural and low-income populations. This reflects heterogeneity across Indian states, with southern and western states more advanced in transition than eastern and central states."
  },
  {
    id: 25,
    question: "GLOBOCAN 2020 data from IARC estimated the total number of new cancer cases globally to be approximately:",
    options: ["12.1 million", "15.5 million", "19.3 million", "24.8 million"],
    answer: 2,
    explanation: "GLOBOCAN 2020 (IARC) estimated approximately 19.3 million new cancer cases and 10.0 million cancer deaths globally in 2020. Breast cancer surpassed lung cancer for the first time as the most commonly diagnosed cancer globally (2.26 million cases), while lung cancer remained the leading cause of cancer death (1.8 million deaths). These data are the primary global reference for cancer burden estimation and are used for national cancer control planning, resource allocation, and international comparisons."
  },
  {
    id: 26,
    question: "According to ICMR-NCDIR National Cancer Registry Programme data, which cancer is currently the most common among females in India?",
    options: ["Cervical cancer", "Breast cancer", "Ovarian cancer", "Colorectal cancer"],
    answer: 1,
    explanation: "Breast cancer has overtaken cervical cancer as the most common cancer among Indian women, as per recent ICMR-NCDIR data (Three-Year Reports). However, there is significant geographic variation: cervical cancer remains the leading cancer in several states, particularly northeastern states and rural areas. Nationally, breast cancer accounts for approximately 27-28% of all female cancers, followed by cervical cancer (~18%), ovarian cancer, and corpus uteri cancer. The shift reflects both rising breast cancer incidence (reproductive risk factors, urbanization) and declining cervical cancer incidence in some areas due to screening."
  },
  {
    id: 27,
    question: "A Population-Based Cancer Registry (PBCR) differs from a Hospital-Based Cancer Registry (HBCR) in which fundamental methodological way?",
    options: [
      "PBCR records cancer mortality data while HBCR records cancer incidence data",
      "PBCR captures all incident cancer cases in a defined geographic population to calculate true incidence rates; HBCR records cases attending a specific hospital and cannot generate population-based rates",
      "PBCR is maintained only in metropolitan areas while HBCR covers rural regions",
      "PBCR relies exclusively on histopathological confirmation while HBCR uses clinical diagnoses"
    ],
    answer: 1,
    explanation: "A Population-Based Cancer Registry (PBCR) systematically captures all new cancer cases (incident cases) occurring in a defined geographic population during a defined period, enabling calculation of age-standardized incidence rates (ASIR) representative of that population. These rates are used for epidemiological analysis, burden estimation, and program planning. An Hospital-Based Cancer Registry (HBCR) records all cancer patients attending a specific hospital — useful for studying patient characteristics, treatment patterns, and survival outcomes, but it cannot calculate true population-based incidence rates because its denominator (catchment population) is undefined."
  },
  {
    id: 28,
    question: "According to ICMR-NCDIR National Cancer Registry data, which is the most common cancer among males in India?",
    options: ["Prostate cancer", "Colorectal cancer", "Lip and oral cavity cancer", "Lung cancer"],
    answer: 2,
    explanation: "Lip and oral cavity cancer is the most common cancer among Indian males according to ICMR-NCDIR National Cancer Registry Programme data, accounting for approximately 11-16% of all male cancers depending on the registry. This high burden is directly attributable to the high prevalence of tobacco use (cigarette smoking, bidi smoking, and smokeless tobacco/betel quid chewing) among Indian men. Oral cancers in India account for approximately 30% of global oral cancer burden, making tobacco control the most impactful intervention for reducing male cancer burden in India."
  },
  {
    id: 29,
    question: "Age-Standardized Incidence Rate (ASIR) of cancer is calculated and preferred over crude incidence rates because:",
    options: [
      "It adjusts for differences in healthcare access and diagnostic capacity across populations",
      "It removes the confounding effect of different population age structures, enabling valid comparisons across regions and time periods",
      "It weights cancer rates by population density to produce geographically uniform estimates",
      "It adjusts for differences in case ascertainment completeness between registries"
    ],
    answer: 1,
    explanation: "Age-Standardized Incidence Rate (ASIR) adjusts for differences in age structures of populations using a standard population (typically the WHO World Standard Population based on Segi's 1960 world population), allowing valid epidemiological comparisons of cancer incidence across countries, regions, and over time. Since cancer incidence is strongly age-dependent (rising sharply with age), a population with more elderly individuals will show higher crude rates independent of any true difference in cancer risk. ASIR is the primary metric used in GLOBOCAN and ICMR-NCDIR reports."
  },
  {
    id: 30,
    question: "The IARC Monographs programme classifies agents according to strength of carcinogenicity evidence. Which group classification indicates that an agent is 'probably carcinogenic to humans'?",
    options: ["Group 1", "Group 2A", "Group 2B", "Group 3"],
    answer: 1,
    explanation: "IARC classification: Group 1 = Carcinogenic to humans (sufficient human evidence); Group 2A = Probably carcinogenic to humans (limited human evidence + sufficient animal evidence, or strong mechanistic evidence); Group 2B = Possibly carcinogenic to humans (limited evidence in humans or animals); Group 3 = Not classifiable as to carcinogenicity. Examples: Group 1 includes tobacco smoke, HPV, HBV, HCV, aflatoxin, benzene; Group 2A includes red meat, acrylamide, glyphosate; Group 2B includes coffee (previously classified; now Group 3), pickled vegetables."
  },
  {
    id: 31,
    question: "In evaluating population-based cancer screening programs, which indicator measures the ability of a screening test to correctly identify all true positive cancer cases in the screened population?",
    options: [
      "Specificity — proportion of true negatives correctly identified",
      "Positive predictive value — proportion of screen-positives who truly have cancer",
      "Sensitivity — proportion of true positives correctly identified by the screening test",
      "Negative predictive value — proportion of screen-negatives who truly do not have cancer"
    ],
    answer: 2,
    explanation: "Sensitivity is the proportion of individuals with the disease (true positives) who are correctly identified as positive by the screening test: Sensitivity = TP/(TP+FN). In cancer screening programs, high sensitivity is critical to minimize missed cancer cases (false negatives), which may progress to advanced stages before clinical detection. For example, mammography sensitivity for breast cancer is approximately 80-90% and VIA sensitivity for CIN is approximately 70-80%. Sensitivity is a key program evaluation indicator alongside specificity, PPV, and coverage."
  },
  {
    id: 32,
    question: "Temporal trends in cancer incidence from registry data are analyzed using which statistical method to identify statistically significant changes in trend direction and quantify the rate of change?",
    options: [
      "Simple linear regression on annual age-standardized incidence rates",
      "Joinpoint regression analysis to calculate Annual Percent Change (APC) and Average Annual Percent Change (AAPC)",
      "Log-rank test to compare survival trends between cancer registry periods",
      "Poisson regression adjusted for population growth rates"
    ],
    answer: 1,
    explanation: "Joinpoint regression analysis is the standard statistical method for analyzing temporal trends in cancer incidence and mortality. It identifies 'joinpoints' — years where statistically significant changes in trend direction occur — and calculates Annual Percent Change (APC) for each trend segment. The overall Average Annual Percent Change (AAPC) summarizes the trend over the entire period. This method is used by IARC, NCI SEER program, and ICMR-NCDIR for cancer trend analysis. Increasing AAPC indicates rising incidence; decreasing AAPC indicates declining incidence."
  },
  {
    id: 33,
    question: "The five-year relative survival rate for cancer, used as a standard metric for comparing cancer outcomes across populations, is calculated as:",
    options: [
      "Proportion of all cancer patients alive exactly 5 years after diagnosis",
      "Ratio of observed survival probability of cancer patients to the expected survival of a comparable cancer-free population over 5 years, expressed as a percentage",
      "Number of cancer patients surviving 5 years divided by total cancer-related deaths in that period",
      "Proportion of cancer patients who completed full treatment and survived 5 years"
    ],
    answer: 1,
    explanation: "Five-year relative survival rate = (Observed survival in cancer cohort / Expected survival in a matched cancer-free population of same age, sex, and calendar period) x 100. This metric eliminates the effect of competing (non-cancer) causes of death, providing a measure of net survival attributable to the cancer. India's cancer registry-based relative survival data (from PBCR survival studies by ICMR-NCDIR) show substantially lower rates than HICs for most cancers, reflecting later stage at diagnosis, lower treatment access, and differences in cancer biology."
  },
  {
    id: 34,
    question: "The Cancer Mortality-to-Incidence Ratio (MIR) is used as a population-level indicator for which purpose?",
    options: [
      "Measuring the 30-day case fatality rate after cancer diagnosis",
      "Estimating cancer care effectiveness and survival at the population level — a higher MIR indicates poorer outcomes",
      "Calculating the relative mortality risk of cancer patients compared to the general population",
      "Estimating the proportion of cancer deaths attributable to late-stage presentation"
    ],
    answer: 1,
    explanation: "The Mortality-to-Incidence Ratio (MIR) is calculated as cancer mortality rate divided by cancer incidence rate for a given cancer type and population. It serves as an ecological proxy for cancer survival and health system effectiveness: a MIR close to 1.0 indicates poor survival (most diagnosed patients die), typically seen in LMICs with late-stage diagnosis and limited treatment access. A low MIR (e.g., 0.2 for thyroid cancer) indicates high survival. India has relatively high MIRs for breast, cervical, and colorectal cancers compared to HICs, reflecting delayed diagnosis and treatment gaps."
  },
  {
    id: 35,
    question: "GLOBOCAN cancer projections for future years (e.g., 2040) are generated using which primary methodological approach?",
    options: [
      "Applying current age-standardized incidence and mortality rates to future demographic projections from UN World Population Prospects",
      "Agent-based modeling of future cancer risk factor exposure trends",
      "Simple extrapolation of absolute cancer case numbers from the most recent GLOBOCAN year",
      "Monte Carlo simulation of future screening program scale-up scenarios"
    ],
    answer: 0,
    explanation: "GLOBOCAN cancer projections for future years use demographic projections from the UN World Population Prospects (projected population size and age structure) combined with current age-standardized incidence and mortality rates. This 'demographic projection' approach provides estimates useful for health system planning and resource allocation, but assumes that current rates remain constant — it does not account for future changes in risk factor exposure, screening programs, or treatment advances. GLOBOCAN projects approximately 28.4 million new cancer cases globally by 2040."
  },
  {
    id: 36,
    question: "Population Attributable Fraction (PAF) for tobacco as a risk factor for oral cancer in India is estimated using Levin's formula. If tobacco use prevalence (Pe) in the population is 30% and the relative risk (RR) of oral cancer in tobacco users is 5.0, the PAF is approximately:",
    options: ["30%", "55%", "71%", "87%"],
    answer: 1,
    explanation: "Using Levin's formula: PAF = Pe(RR-1) / [Pe(RR-1) + 1] = 0.30 x (5-1) / [0.30 x (5-1) + 1] = 0.30 x 4 / [0.30 x 4 + 1] = 1.2 / 2.2 = 0.545 ≈ 55%. This means approximately 55% of oral cancer cases in this population are attributable to tobacco use and could theoretically be prevented by eliminating tobacco use. PAF is the key metric for prioritizing interventions — higher PAF exposures represent greater prevention potential. Tobacco use accounts for the largest PAF for oral, lung, esophageal, and bladder cancers in India."
  },
  {
    id: 37,
    question: "India's National Cancer Registry Programme (NCRP), coordinated by ICMR-NCDIR (Bengaluru), currently operates approximately how many Population-Based Cancer Registries (PBCRs) across India?",
    options: [
      "5 PBCRs, covering only the four metropolitan cities and Bangalore",
      "Approximately 30 PBCRs covering urban and rural areas across multiple states",
      "Over 100 PBCRs providing near-complete national geographic coverage",
      "8 PBCRs covering only state capitals in major Indian states"
    ],
    answer: 1,
    explanation: "India's ICMR-NCDIR (National Centre for Disease Informatics and Research) coordinates approximately 30 Population-Based Cancer Registries (PBCRs) covering both urban and rural areas across multiple Indian states and union territories, though complete national geographic coverage is yet to be achieved. PBCRs in cities like Mumbai, Delhi, Chennai, Bangalore, Bhopal, and rural registries in Barshi, Cachar, and East Khasi Hills provide diverse geographic representation. NCRP data constitute India's contribution to GLOBOCAN and CI5 (Cancer Incidence in Five Continents)."
  },
  {
    id: 38,
    question: "COPD burden in India is substantially higher than global average estimates, partly because of which India-specific exposure that is the primary driver in rural Indian women but not in women in high-income countries?",
    options: [
      "High altitude hypoxia exposure in Himalayan border populations",
      "Biomass fuel combustion for cooking causing prolonged indoor air pollution exposure",
      "Occupational asbestos exposure in textile manufacturing workers",
      "High ambient pollen levels from native Indian plant species"
    ],
    answer: 1,
    explanation: "Biomass fuel combustion (wood, crop residues, cow dung cakes) for cooking is a major driver of COPD in India, disproportionately affecting rural women and children who spend prolonged hours in poorly ventilated kitchens. IHME and GBD study data rank household air pollution from solid fuels as one of the leading risk factors for COPD in India, comparable to tobacco in terms of PAF. This distinguishes India's COPD epidemiology from HICs where cigarette smoking is the dominant etiology. Approximately 60% of Indian households use solid fuels for cooking (NFHS-5)."
  },
  {
    id: 39,
    question: "Based on GBD study data for India, what are the leading attributable risk factors for Chronic Kidney Disease (CKD) burden in India currently?",
    options: [
      "Glomerulonephritis from streptococcal and malarial infections",
      "Diabetes mellitus and hypertension as the leading metabolic causes",
      "Lead and cadmium nephrotoxicity from occupational and environmental exposure",
      "Analgesic nephropathy from widespread NSAID and ayurvedic herbal medicine use"
    ],
    answer: 1,
    explanation: "Diabetes mellitus and hypertension are the leading attributable risk factors for CKD in India, according to GBD study data, mirroring the global pattern. Diabetic nephropathy (DN) and hypertensive nephrosclerosis are increasingly the dominant causes of CKD and end-stage renal disease (ESRD) in India, replacing the historically prominent glomerulonephritis and obstructive uropathies. As diabetes (affecting approximately 101 million) and hypertension (approximately 315 million) prevalence rises in India, the downstream CKD burden is projected to increase substantially."
  },
  {
    id: 40,
    question: "The National Mental Health Survey of India (NMHS, 2015-16), the largest nationally representative mental health survey, estimated what lifetime prevalence of any mental disorder in India?",
    options: ["3.4%", "7.5%", "13.7%", "22.4%"],
    answer: 2,
    explanation: "The NMHS (2015-16), conducted by NIMHANS Bengaluru across 12 states, estimated the lifetime prevalence of any mental disorder in India at approximately 13.7%, meaning about 150 million individuals needed active mental health interventions. The survey found a massive treatment gap — fewer than 30% of those with mental disorders received treatment. Common mental disorders (depression, anxiety disorders) had the highest prevalence. The NMHS data are the primary national reference for mental health burden estimation and planning under the National Mental Health Policy 2014."
  },
  {
    id: 41,
    question: "NFHS-5 (2019-21) documented the trend in overweight and obesity prevalence in India. Which finding best reflects the NFHS-5 data on obesity?",
    options: [
      "Overweight/obesity prevalence declined from NFHS-4 to NFHS-5 due to improved food security programs",
      "Overweight/obesity (BMI >= 25 kg/m2) prevalence increased in both men and women between NFHS-4 (2015-16) and NFHS-5 (2019-21)",
      "Overweight/obesity is confined to urban populations with negligible rural prevalence in NFHS-5",
      "Overweight/obesity prevalence in India plateaued at levels similar to NFHS-3 (2005-06)"
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21) documented an increase in overweight/obesity prevalence compared to NFHS-4 (2015-16) in both sexes. The percentage of women with BMI >= 25 kg/m2 increased from 20.6% to 24.0%, and men from 18.9% to 22.9%. This increasing trend is observed in both urban and rural areas, though urban prevalence remains higher. The simultaneous presence of underweight (18.7% of women) and overweight/obesity represents the 'double burden of malnutrition' within India, reflecting the complex nutritional transition."
  },
  {
    id: 42,
    question: "In the GBD disease classification framework, road traffic injuries (RTIs) are categorized under which broad disease group, and why is this relevant for NCD surveillance?",
    options: [
      "RTIs are classified as NCDs in GBD, alongside cancer, CVD, and diabetes",
      "RTIs are classified under 'Injuries' — a separate GBD category distinct from NCDs — but share surveillance frameworks and risk factors with NCDs in national programs",
      "RTIs are classified as maternal and neonatal disorders due to their impact on reproductive-age adults",
      "RTIs are classified as communicable diseases because of their association with alcohol consumption"
    ],
    answer: 1,
    explanation: "In the GBD framework, injuries (including road traffic injuries) form a separate cause category alongside communicable diseases and NCDs. However, WHO's NCD surveillance frameworks and national NCD action plans often include injury prevention given shared risk determinants (alcohol, inadequate infrastructure). India has one of the highest road traffic mortality rates globally — approximately 1.5 lakh deaths officially (MoRTH) to over 3 lakh deaths (WHO estimates after accounting for under-reporting) annually. RTIs are a leading cause of death in those aged 15-49 years."
  },
  {
    id: 43,
    question: "Based on recent GBD study data and SRS-based estimates, NCDs account for approximately what proportion of total mortality in India?",
    options: ["38%", "49%", "63%", "76%"],
    answer: 2,
    explanation: "Based on GBD 2019 study data, NCDs account for approximately 63% of all deaths in India. Cardiovascular diseases contribute the largest share (~28%), followed by chronic respiratory diseases (~11%), cancers (~8%), and diabetes (~3%). This proportion has been increasing over decades as communicable disease mortality declines — GBD estimated NCDs accounted for only 30.5% of India's DALYs in 1990, rising to 61.8% by 2016, confirming rapid epidemiological transition. The SRS Medical Certification of Cause of Death (MCCD) data, though covering limited urban areas, also confirms the dominant NCD mortality burden."
  },
  {
    id: 44,
    question: "The WHO '25x25' NCD target refers to which specific global commitment?",
    options: [
      "Achieving a 25% reduction in NCD incidence in persons under 25 years of age by 2025",
      "A 25% relative reduction in premature mortality from the four major NCDs between 2010 and 2025",
      "Ensuring 25% of countries achieve functional population-based NCD surveillance by 2025",
      "Reducing 25 specific NCD risk factors by a quarter by the year 2025"
    ],
    answer: 1,
    explanation: "The WHO '25x25' target, adopted in the WHO Global Action Plan for NCDs (2013-2020), aims for a 25% relative reduction in premature mortality (deaths in ages 30-70 years) from the four major NCDs — cardiovascular diseases, cancers, chronic respiratory diseases, and diabetes — by 2025 compared to the 2010 baseline. Achieving this requires progress on specific risk factor targets: tobacco, harmful alcohol use, physical inactivity, salt/sodium intake, and metabolic targets (blood pressure, diabetes/obesity). A 2022 WHO progress report indicated that most countries are off-track to achieve this target."
  },
  {
    id: 45,
    question: "The WHO Global Action Plan for NCDs (2013-2030) includes nine voluntary global targets. Which of the following is an accurately stated quantified target from this plan?",
    options: [
      "A 50% relative reduction in tobacco use prevalence by 2025",
      "A 30% relative reduction in tobacco use prevalence by 2025",
      "A 25% absolute reduction in physical inactivity prevalence by 2025",
      "Elimination of raised blood pressure (>= 140/90 mmHg) in all adults by 2030"
    ],
    answer: 1,
    explanation: "The WHO Global Action Plan voluntary targets include: 30% relative reduction in tobacco use prevalence; at least 10% relative reduction in harmful alcohol use; 10% relative reduction in prevalence of insufficient physical activity; 30% relative reduction in mean population salt/sodium intake; 25% relative reduction in prevalence of raised blood pressure or halt the rise; halt the rise in obesity and diabetes; at least 50% of eligible people receive drug therapy/counselling for prevention of heart attacks and strokes; 80% availability of affordable essential NCD medicines and basic technologies; and 25% relative reduction in premature NCD mortality."
  },
  {
    id: 46,
    question: "The WHO STEPwise Approach to NCD Risk Factor Surveillance (STEPS) is organized into three sequential steps. What does Step 3 (biochemical measurements) specifically include?",
    options: [
      "Administration of a standardized questionnaire on tobacco, alcohol, diet, and physical activity",
      "Physical measurements including height, weight, waist circumference, hip circumference, and blood pressure",
      "Laboratory-based biochemical measurements including fasting blood glucose, total cholesterol, and other blood analytes",
      "Ecological assessment of community-level food environments and physical activity infrastructure"
    ],
    answer: 2,
    explanation: "The three steps of WHO STEPS surveillance are: Step 1 — Questionnaire (behavioral risk factors: tobacco use, alcohol consumption, diet, physical activity); Step 2 — Physical measurements (height, weight, waist circumference, hip circumference, blood pressure, heart rate); Step 3 — Biochemical measurements (fasting blood glucose, total cholesterol, HDL-C, triglycerides, and optionally urinary creatinine/sodium for salt intake estimation). The modular design allows countries to implement all three steps or a subset based on available resources and capacity, with each step providing additional granularity for NCD risk factor profiling."
  },
  {
    id: 47,
    question: "Tobacco use is identified as the most important 'shared risk factor' for multiple NCDs. Which set of NCDs is tobacco use causally linked to at the population level?",
    options: [
      "Only lung cancer and COPD — respiratory conditions primarily",
      "Cardiovascular diseases (CVD), multiple cancers, type 2 diabetes, and COPD",
      "Only cancers and cardiovascular disease, with limited evidence for diabetes",
      "Primarily cancers (20+ types) but not cardiovascular diseases in non-smokers"
    ],
    answer: 1,
    explanation: "Tobacco use is causally linked to multiple NCDs: cardiovascular diseases (atherosclerosis, MI, stroke — through endothelial dysfunction, platelet activation, and dyslipidemia), multiple cancers (lung, oral cavity, pharynx, larynx, esophagus, stomach, pancreas, kidney, bladder, cervix, acute myeloid leukemia), type 2 diabetes (approximately 30-40% higher risk in smokers), and COPD (primary cause in HICs). This makes tobacco control the single highest-priority intervention in integrated NCD prevention programs, with the greatest population-level health impact achievable through a single policy lever (tobacco taxation being the 'best buy')."
  },
  {
    id: 48,
    question: "The 'double burden of disease' in countries like India refers specifically to which epidemiological phenomenon?",
    options: [
      "The simultaneous occurrence of two major infectious disease epidemics (e.g., TB and HIV) in the same population",
      "The coexistence of a high burden of communicable diseases alongside a rapidly rising burden of non-communicable diseases in the same population",
      "The dual burden of maternal/child mortality alongside adult NCD mortality competing for limited health resources",
      "The simultaneous epidemic of obesity and undernutrition occurring within the same households in transitional economies"
    ],
    answer: 1,
    explanation: "The 'double burden of disease' refers to the coexistence of high communicable disease burden (infectious diseases, malnutrition-related conditions, maternal and child health problems) alongside rapidly rising non-communicable disease burden in the same population or country. India and most LMICs face this double burden, where health systems must simultaneously address traditional health challenges and the emerging NCD epidemic — straining limited financial, infrastructural, and human resources. The GBD data for India show both TB and ischemic heart disease among the top causes of DALYs, exemplifying this double burden."
  },
  {
    id: 49,
    question: "In Omran's epidemiological transition model, Stage 2 (the 'Age of Receding Pandemics') is characterized by which of the following patterns?",
    options: [
      "NCDs surpass communicable diseases as the leading cause of death, with life expectancy exceeding 65 years",
      "Declining mortality from infectious diseases, improving life expectancy (30-50 years), and early emergence of chronic diseases beginning to rise",
      "High and fluctuating mortality predominantly from infectious diseases, pestilence, and famine with low life expectancy",
      "Delayed onset of degenerative diseases due to improved medical care, with most deaths occurring after age 70"
    ],
    answer: 1,
    explanation: "In Omran's epidemiological transition model (1971), Stage 2 ('Age of Receding Pandemics') is characterized by: declining mortality from infectious diseases due to improved nutrition and sanitation (preceding medical interventions), declining famine-related mortality, improving life expectancy (rising from approximately 30 toward 50 years), falling fertility rates beginning, and early emergence of chronic degenerative diseases beginning to contribute to mortality. This stage preceded the classic NCD-dominant Stage 3. Stage 1 ('Pestilence and Famine') has high fluctuating mortality; Stage 3 ('Degenerative and Man-made Diseases') has NCD dominance; Stage 4 ('Delayed Degenerative Diseases') features successful prevention."
  },
  {
    id: 50,
    question: "Which indicator is used by WHO and national NCD programs to quantify the 'treatment gap' for NCDs — the proportion of those affected who are not receiving effective care — at the population level in national surveys like NFHS?",
    options: [
      "Proportion of NCD patients who received surgical or specialist intervention compared to those requiring it",
      "The cascade of care: proportion of those with the NCD who are (1) aware of their diagnosis, (2) receiving treatment, and (3) achieving control of the condition",
      "Number of NCD specialists per 100,000 population relative to WHO recommended staffing norms",
      "Percentage of the national health budget allocated to NCD prevention versus curative NCD care"
    ],
    answer: 1,
    explanation: "The NCD treatment gap is quantified using the 'cascade of care' (or 'care continuum') framework: among all individuals with a given NCD (e.g., hypertension, diabetes) in the population, what proportion are (1) aware of their condition (diagnosed), (2) on treatment, and (3) have the condition controlled to target. NFHS-5 data illustrated India's large treatment gap: for hypertension, approximately 45% of hypertensive adults were aware, approximately 40% were on treatment, and only 12-19% had controlled BP. For diabetes, similar gaps exist. This cascade data directly informs where to strengthen the health system response."
  }
];

export default questions;

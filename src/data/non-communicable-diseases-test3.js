const questions = [
  {
    id: 1,
    question: "According to the IDF Diabetes Atlas 10th Edition (2021), what is the estimated number of adults (20-79 years) living with diabetes globally?",
    options: ["337 million", "422 million", "537 million", "623 million"],
    answer: 2,
    explanation: "The IDF Diabetes Atlas 10th Edition (2021) estimated that 537 million adults aged 20-79 years were living with diabetes globally. This represents approximately 1 in 10 adults worldwide. The Atlas also projected this number to rise to 643 million by 2030 and 783 million by 2045, driven by population growth, aging, and rising prevalence in low- and middle-income countries."
  },
  {
    id: 2,
    question: "The ICMR-INDIAB study is India's largest representative study on diabetes prevalence. Which methodological feature distinguishes ICMR-INDIAB from earlier state-level prevalence studies?",
    options: [
      "It used HbA1c as the sole diagnostic criterion",
      "It used a stratified multistage cluster random sampling design covering urban, rural, and tribal populations across all Indian states and union territories",
      "It enrolled only adults above 40 years with a family history of diabetes",
      "It was limited to self-reported diabetes without confirmatory blood glucose testing"
    ],
    answer: 1,
    explanation: "ICMR-INDIAB used a stratified multistage cluster random sampling design to ensure representative population coverage across urban, rural, and slum areas, with subsequent phases expanding to cover all 31 states and union territories including tribal populations. Participants underwent fasting plasma glucose and 2-hour post-load glucose (75g OGTT) for diabetes diagnosis using WHO 2006 criteria. This comprehensive sampling methodology makes it the most nationally representative diabetes prevalence study in India."
  },
  {
    id: 3,
    question: "The ICMR-INDIAB national phase (published in Lancet Diabetes & Endocrinology, 2023) reported diabetes prevalence across Indian states. Which of the following represents the urban-rural-tribal prevalence gradient observed?",
    options: [
      "Tribal > Urban > Rural",
      "Urban > Rural > Tribal",
      "Rural > Urban > Tribal",
      "Urban = Rural > Tribal"
    ],
    answer: 1,
    explanation: "The ICMR-INDIAB study consistently demonstrated an urban > rural > tribal prevalence gradient for diabetes across India. Urban populations had the highest prevalence (approximately 16.2%), followed by rural populations (approximately 8.9%), with tribal populations showing the lowest prevalence (approximately 5.0%). This gradient reflects the impact of urbanization, sedentary lifestyle, dietary transitions, and adiposity on diabetes risk, while tribal populations maintain relatively more active lifestyles and traditional diets."
  },
  {
    id: 4,
    question: "In the context of diabetes epidemiology, which of the following states in India showed the highest diabetes prevalence in the ICMR-INDIAB national study (2023)?",
    options: ["Kerala", "Goa", "Tamil Nadu", "Sikkim"],
    answer: 1,
    explanation: "Goa consistently showed the highest diabetes prevalence among Indian states in ICMR-INDIAB, exceeding 26% in some analyses. This is attributed to high levels of urbanization, the unique dietary pattern (higher fat, fish, and alcohol consumption), greater affluence, and sedentary lifestyles. Goa has one of the highest per-capita incomes in India. Tamil Nadu and Kerala also have high prevalences. Northeastern and tribal-majority states generally show lower prevalences."
  },
  {
    id: 5,
    question: "Global incidence of Type 1 diabetes mellitus shows marked geographic variation. Which region has the highest incidence of Type 1 DM in the world?",
    options: ["South Asia (India and Bangladesh)", "Scandinavia (Finland and Sweden)", "Sub-Saharan Africa", "East Asia (China and Japan)"],
    answer: 1,
    explanation: "Scandinavia, particularly Finland and Sardinia (Italy), has the world's highest incidence of Type 1 diabetes. Finland has an incidence of approximately 60 per 100,000 children per year. The reasons are attributed to genetic susceptibility (high frequency of HLA-DR3 and HLA-DR4 alleles), environmental triggers, and possibly the 'hygiene hypothesis' - reduced early childhood microbial exposure. In contrast, East Asian countries have among the lowest incidence rates. Global Type 1 DM incidence has been increasing at about 3% per year."
  },
  {
    id: 6,
    question: "LADA (Latent Autoimmune Diabetes in Adults) accounts for what estimated proportion of patients clinically diagnosed as Type 2 diabetes in epidemiological surveys?",
    options: ["Less than 1%", "2-12%", "20-30%", "40-50%"],
    answer: 1,
    explanation: "Epidemiological studies estimate that LADA accounts for approximately 2-12% of all cases clinically diagnosed as Type 2 diabetes, depending on the population studied and the antibody testing protocol used. The NIRAD (Non-Insulin Requiring Autoimmune Diabetes) study in Italy found approximately 5-10% prevalence among apparent Type 2 diabetics. In India, studies show LADA prevalence of 3-6% among Type 2 diabetics. LADA is likely the most common form of autoimmune diabetes in adults, and is underdiagnosed without routine GAD antibody testing."
  },
  {
    id: 7,
    question: "Which of the following secondary causes of diabetes is most prevalent at the population level in India and other low- and middle-income countries?",
    options: [
      "Cystic fibrosis-related diabetes (CFRD)",
      "Fibrocalculous Pancreatic Diabetes (FCPD) and post-infective chronic pancreatitis",
      "Hemochromatosis-related diabetes",
      "Glucocorticoid-induced hyperglycemia"
    ],
    answer: 1,
    explanation: "At the population level in India and other tropical LMICs, FCPD (Fibrocalculous Pancreatic Diabetes) and post-infective chronic pancreatitis (secondary to malnutrition, tropical exposures, and infections including chronic alcohol use) represent the most prevalent forms of secondary diabetes. FCPD, classified as Type 3c diabetes, is particularly prevalent in Kerala and coastal Karnataka. In high-income countries, cystic fibrosis-related diabetes (CFRD) and hemochromatosis are more commonly recognized secondary forms, but these conditions are less prevalent in Indian populations."
  },
  {
    id: 8,
    question: "GDM prevalence studies in India using the DIPSI criteria have reported what approximate range of prevalence among pregnant women attending antenatal clinics?",
    options: ["2-5%", "8-10%", "10-20%", "25-30%"],
    answer: 2,
    explanation: "Studies using DIPSI criteria (non-fasting 75g OGTT with 2-hour glucose >=140 mg/dL) in India have reported GDM prevalence ranging from approximately 10-20% in antenatal clinic populations, with some urban studies reporting even higher rates. The HAPO study and subsequent Indian data show that GDM prevalence varies significantly by geographic region, socioeconomic status, and BMI. Urban areas show higher GDM rates. India contributes a large absolute burden of GDM globally due to its population size and elevated background risk from the Asian Indian phenotype."
  },
  {
    id: 9,
    question: "In India's diabetes epidemiological data, migrant Indian populations (diaspora) living in Western countries tend to show which pattern compared to non-migrant Indians in India?",
    options: [
      "Lower diabetes prevalence due to better healthcare access",
      "Similar or higher diabetes prevalence compared to non-migrant Indians, with much higher prevalence than the host country's indigenous populations",
      "Lower prevalence due to adoption of Western diet and loss of traditional risk factors",
      "Identical prevalence to the host country's indigenous population within one generation"
    ],
    answer: 1,
    explanation: "Studies on Indian migrant populations (UK South Asians, NRIs in USA, Gulf Indian migrants) consistently show that they maintain similar or higher diabetes prevalence compared to Indians living in India, and have markedly higher prevalence than the host country's indigenous populations. UK-based Gujarati migrants show 3-5 times higher diabetes prevalence than white British populations. This demonstrates the strong genetic/biological basis of diabetes risk in people of Indian origin, interacting with environmental exposures. The 'thrifty genotype' hypothesis and intrinsic adiposity are key explanatory factors."
  },
  {
    id: 10,
    question: "Which decade saw the most dramatic increase in diabetes prevalence in India based on sequential national and state-level survey data?",
    options: ["1970s-1980s", "1980s-1990s", "1990s-2000s", "2000s-2010s"],
    answer: 2,
    explanation: "The most dramatic increase in diabetes prevalence in India occurred during the 1990s-2000s, coinciding with rapid economic liberalization (post-1991), urbanization, motorization, and dietary transitions. Bangalore studies by Ramachandran showed diabetes prevalence tripling in urban areas during this period. The composite effect of economic growth creating sedentary jobs, greater food availability (especially processed foods), reduced physical activity, and a genetically susceptible population created what has been termed the 'perfect storm' for diabetes epidemic acceleration in India during this period."
  },
  {
    id: 11,
    question: "Age-sex distribution of Type 2 diabetes in India shows which of the following characteristics compared to Western countries?",
    options: [
      "Indian Type 2 diabetes predominantly affects those above 65 years, similar to Western populations",
      "Indian Type 2 diabetes tends to occur about a decade earlier, with peak prevalence in the 45-64 age group, and shows less sex difference",
      "Indian males have significantly lower diabetes rates than females at all ages",
      "Diabetes affects equal proportions in all age groups above 30 years in India"
    ],
    answer: 1,
    explanation: "A key epidemiological characteristic of diabetes in India is earlier age of onset compared to Western populations. Indians develop Type 2 diabetes approximately 10 years earlier than Caucasians at any given BMI level. The ICMR-INDIAB study showed rising prevalence from the 25-34 age group, peaking in the 45-64 age group. This has enormous public health implications as it means more productive life years lost. Sex differences in prevalence are less marked in India compared to Western countries, though urban women show particularly high rates due to lower physical activity."
  },
  {
    id: 12,
    question: "Fibrocalculous Pancreatic Diabetes (FCPD) in tropical countries is associated with which of the following epidemiological features at the population level?",
    options: [
      "Predominantly affects obese adult males above 50 years with a long history of alcohol use",
      "Predominantly affects young, non-obese individuals from low socioeconomic backgrounds with cassava consumption and malnutrition",
      "Affects equally all age groups and is primarily a genetic disorder transmitted in autosomal dominant pattern",
      "Primarily affects urban professional populations due to processed food consumption"
    ],
    answer: 1,
    explanation: "FCPD epidemiologically affects young (teens and twenties), non-obese individuals from low socioeconomic backgrounds, predominantly in tropical coastal areas (Kerala, coastal Karnataka, parts of South India, Sri Lanka, Nigeria, Uganda, Indonesia). Cassava (tapioca) consumption and malnutrition have been implicated as environmental triggers, though the exact etiology remains debated. The classic demographic profile is a young person from a low-income family presenting with recurrent abdominal pain, later developing diabetes. Unlike alcoholic pancreatitis in the West, FCPD predominantly affects non-alcoholic young people."
  },
  {
    id: 13,
    question: "For population-based epidemiological surveys of diabetes, which diagnostic approach is considered the gold standard according to WHO 2006 guidelines?",
    options: [
      "HbA1c alone using a cutoff of >=6.5%",
      "Two-step approach: fasting glucose screening followed by OGTT for those with intermediate values",
      "75g OGTT measuring fasting and 2-hour plasma glucose, applying WHO 2006 diagnostic thresholds",
      "Capillary random blood glucose with a cutoff of >11.1 mmol/L"
    ],
    answer: 2,
    explanation: "WHO 2006 guidelines recommend the 75g OGTT measuring both fasting plasma glucose (FPG) and 2-hour post-load plasma glucose (2hPG) as the reference diagnostic method for population surveys. This captures both FPG-based diabetes (predominantly hepatic insulin resistance) and IGT/post-load hyperglycemia (predominantly peripheral insulin resistance), ensuring no cases are missed. Relying on FPG alone misses approximately 30-40% of cases with isolated post-load hyperglycemia. HbA1c as a sole criterion may miss additional cases, particularly in populations with hemoglobin variants."
  },
  {
    id: 14,
    question: "A key methodological challenge in comparing diabetes prevalence data across Indian states in ICMR-INDIAB was standardization. Which analytical approach was used to enable valid comparisons across states with different age structures?",
    options: [
      "Crude prevalence rates without any adjustment",
      "Age-standardization using the WHO world standard population",
      "Age-sex-standardization using Indian census population as the standard",
      "Prevalence ratios adjusted only for sex"
    ],
    answer: 2,
    explanation: "ICMR-INDIAB used age-standardization using the Indian census population as the reference standard to enable valid comparisons across states with different age-sex distributions. States with older population structures would otherwise appear to have higher diabetes prevalence simply due to demographic differences rather than true differences in risk. Age-standardized rates allow assessment of whether differences between states reflect genuine variations in diabetes risk or are artifacts of demographic composition. This is essential methodology for any national epidemiological survey."
  },
  {
    id: 15,
    question: "Point-of-care (POC) HbA1c devices used in field surveys for diabetes screening have certain limitations. Which of the following is the most significant quality concern when using POC HbA1c in large-scale field surveys?",
    options: [
      "The devices are too expensive for use in field conditions",
      "POC HbA1c devices may have higher coefficient of variation and may not meet NGSP performance criteria (CV <3%, bias <7%) compared to laboratory-based methods",
      "POC HbA1c requires venous blood collection which is impractical in community settings",
      "POC HbA1c cannot distinguish Type 1 from Type 2 diabetes"
    ],
    answer: 1,
    explanation: "Point-of-care HbA1c devices used in field settings must meet NGSP/CAP performance standards (total error <7% or bias <6% from reference method, CV <3%). Studies evaluating POC HbA1c devices (Afinion, DCA Vantage, etc.) in Indian field conditions found variable performance, particularly in extreme temperatures and humidity. Hemoglobin variants common in Indian populations (HbS, HbE, HbD, HbC) can interfere with some POC methods but not others, depending on the assay technology (boronate affinity vs. immunoassay vs. capillary electrophoresis). These quality concerns affect prevalence estimates from field surveys."
  },
  {
    id: 16,
    question: "The ICMR-INDIAB study used venous plasma glucose as the reference standard. When comparing to capillary blood glucose used in many field surveys, which correction factor is typically applied?",
    options: [
      "Capillary whole blood glucose is approximately 15% higher than venous plasma glucose",
      "Capillary whole blood glucose is approximately 11-15% lower than venous plasma glucose; conversion factor used to express as plasma equivalent",
      "Capillary and venous plasma glucose are interchangeable with no correction needed",
      "Capillary plasma glucose is 20% higher than venous whole blood glucose"
    ],
    answer: 1,
    explanation: "Capillary whole blood glucose values are approximately 11-15% lower than venous plasma glucose values due to the higher hematocrit of whole blood diluting glucose concentration. Most modern glucometers are calibrated to report plasma-equivalent values. When interpreting field survey data using capillary whole blood glucose, a conversion factor of approximately 1.11 (multiply by 1.11) is needed to express as venous plasma glucose equivalent. WHO diagnostic thresholds (7.0 mmol/L fasting, 11.1 mmol/L 2-hour) are for venous plasma. This distinction is critical for valid prevalence comparisons between studies."
  },
  {
    id: 17,
    question: "Pre-diabetes epidemiology shows that Impaired Glucose Tolerance (IGT) and Impaired Fasting Glucose (IFG) have different pathophysiological bases. In terms of progression to diabetes, which pre-diabetes category has the HIGHEST annual conversion rate?",
    options: [
      "Isolated IFG alone",
      "Isolated IGT alone",
      "Combined IFG + IGT",
      "Elevated HbA1c (5.7-6.4%) alone without IFG or IGT"
    ],
    answer: 2,
    explanation: "Combined IFG+IGT (both impaired fasting glucose and impaired glucose tolerance present simultaneously) has the highest annual conversion rate to diabetes, approximately 10-15% per year in some cohort studies, compared to 5-10% for isolated IGT and 3-6% for isolated IFG. The combination reflects both hepatic and peripheral insulin resistance together with impaired beta-cell function. The ICMR-INDIAB study found pre-diabetes prevalence of approximately 15.3% nationally. Individuals with combined IFG+IGT should be prioritized for intensive diabetes prevention interventions."
  },
  {
    id: 18,
    question: "For GDM screening in India, how do IADPSG and DIPSI criteria differ in their approach and the populations they identify as GDM?",
    options: [
      "Both use a one-step approach but with different glucose loads (IADPSG: 100g, DIPSI: 75g)",
      "IADPSG requires fasting and uses three time-points (0, 1, 2 hours) with any one value diagnostic; DIPSI uses a non-fasting single-step test with 2-hour glucose only",
      "DIPSI requires two abnormal values for diagnosis while IADPSG requires only one",
      "IADPSG screens only high-risk women while DIPSI recommends universal screening"
    ],
    answer: 1,
    explanation: "Key differences: IADPSG (endorsed by WHO 2013) requires a fasting state and 75g OGTT with measurements at 0, 1, and 2 hours; any one of three thresholds (FPG >=92 mg/dL, 1h >=180 mg/dL, 2h >=153 mg/dL) is diagnostic. DIPSI (developed in India) uses a non-fasting 75g glucose load with only a 2-hour measurement (>=140 mg/dL), making it more feasible in resource-limited Indian settings. DIPSI criteria are recommended by Government of India maternal health programs due to operational feasibility. IADPSG tends to identify more women as GDM (15-20%) compared to DIPSI (10-14%) in similar populations."
  },
  {
    id: 19,
    question: "The CBAC (Community Based Assessment Checklist) tool used under NPCDCS for diabetes screening in India assesses which parameters to identify high-risk individuals?",
    options: [
      "Only blood pressure and blood glucose measurements",
      "Age, waist circumference, blood pressure, symptoms of hyperglycemia, history of diabetes, tobacco and alcohol use - a non-invasive risk assessment checklist",
      "BMI, HbA1c, and fasting glucose",
      "Family history and oral glucose tolerance test results only"
    ],
    answer: 1,
    explanation: "The CBAC (Community Based Assessment Checklist) is a non-invasive, non-blood-based screening tool used by ASHAs and health workers under NPCDCS. It captures: age (>=30 years), waist circumference, history of hypertension, history of diabetes in family, symptoms of hyperglycemia (polyuria, polydipsia), physical activity, and tobacco/alcohol use. High-risk individuals identified through CBAC are referred for blood glucose measurement. This approach enables mass screening without requiring laboratory infrastructure at the community level, making it scalable across India's vast community health worker network."
  },
  {
    id: 20,
    question: "In comparing opportunistic vs. systematic population-based screening for diabetes, which evidence-based statement is most accurate?",
    options: [
      "Opportunistic screening has consistently higher yield and coverage than systematic screening",
      "Systematic population-based screening identifies more cases but opportunistic screening reaches higher-risk individuals in clinical settings; both approaches are complementary in India's context",
      "Population-based screening is not recommended as it identifies too many pre-diabetes cases without capacity for intervention",
      "Opportunistic screening at health facilities is the only evidence-based approach recommended by WHO"
    ],
    answer: 1,
    explanation: "Evidence shows both approaches have distinct advantages: systematic population-based screening (as in NPCDCS door-to-door surveys) ensures broader coverage and identifies cases not in contact with health system. Opportunistic screening (testing all individuals attending health facilities for any reason) concentrates resources on those already accessing healthcare. In India's context, where a large proportion of the population does not access formal healthcare regularly, both approaches are complementary. WHO 2023 guidelines suggest risk-based systematic screening is preferred over universal opportunistic screening for resource efficiency."
  },
  {
    id: 21,
    question: "Random blood glucose (RBG) as a screening tool for diabetes has which of the following performance characteristics that makes it useful in community settings?",
    options: [
      "RBG >=140 mg/dL has sensitivity >90% and specificity >95% for diabetes diagnosis",
      "RBG >=140 mg/dL post-meal has moderate sensitivity but should be confirmed with FPG or OGTT; it is useful as a first-pass community screening tool due to feasibility",
      "RBG is not recommended for any screening purpose due to excessive variability",
      "RBG >=126 mg/dL is diagnostic of diabetes regardless of meal timing"
    ],
    answer: 1,
    explanation: "Random blood glucose (RBG) is practical for community screening but has limitations: its interpretation depends on timing relative to last meal. An RBG >=200 mg/dL with symptoms is diagnostic of diabetes per WHO. An RBG of 140-199 mg/dL warrants confirmatory OGTT. Studies in Indian community settings show that using RBG >=140 mg/dL (post-meal equivalent) has a sensitivity of approximately 60-80% and specificity of 70-85% for identifying undetected diabetes. Given its operational simplicity (no fasting required), RBG is recommended as the primary screening test at community and sub-center level in resource-limited Indian settings."
  },
  {
    id: 22,
    question: "Diabetes surveillance in India is conducted through multiple mechanisms. Which of the following surveillance systems specifically tracks diabetes at the national level in India?",
    options: [
      "Integrated Disease Surveillance Programme (IDSP) NCD module",
      "National Family Health Survey (NFHS) with blood glucose measurement component",
      "Both IDSP-NCD surveillance and the NFHS provide national-level diabetes prevalence data, along with ICMR sentinel surveillance sites",
      "Diabetes is not tracked through any national surveillance system in India"
    ],
    answer: 2,
    explanation: "Multiple systems contribute to diabetes surveillance in India: NFHS-5 (2019-21) included blood glucose measurement using glucometers for the first time in the NFHS series, providing national and state-level prevalence data. IDSP has an NCD module for surveillance. ICMR-INDIAB serves as population-based prevalence data. State-specific NCD surveys provide subnational data. The WHO STEPS surveys have also been conducted in some Indian states. Integration of these data sources is needed for robust national diabetes surveillance, as no single integrated sentinel surveillance network comparable to communicable disease systems exists for NCDs in India."
  },
  {
    id: 23,
    question: "Diabetes screening in elderly populations (>65 years) presents unique challenges. Which of the following survey considerations is most important when assessing diabetes prevalence in elderly cohorts?",
    options: [
      "Elderly cannot perform OGTT so must be excluded from prevalence surveys",
      "Cognitive impairment and frailty may affect ability to provide informed consent and complete OGTT; HbA1c may be unreliable due to comorbidities; age-specific diagnostic thresholds should be considered",
      "HbA1c is more reliable in elderly than in younger adults due to stable red cell turnover",
      "Elderly should only be screened using fasting glucose with a higher cutoff of 130 mg/dL"
    ],
    answer: 1,
    explanation: "Epidemiological surveys in elderly populations face multiple challenges: cognitive impairment affects consent and protocol compliance; frailty and comorbidities (CKD, anemia) affect HbA1c reliability; the OGTT procedure requires sustained sitting which may be difficult. Additionally, elderly may have atypical diabetes presentation without classic symptoms (polyuria, polydipsia may be blunted). Some experts suggest less stringent diagnostic thresholds for very elderly to avoid over-diagnosis of pre-diabetes. ICMR-INDIAB specifically analyzed elderly sub-groups showing very high diabetes prevalence (>30%) in the 60-70 age group in some regions."
  },
  {
    id: 24,
    question: "The Indian Diabetes Risk Score (IDRS) developed for community-based diabetes screening uses which four parameters, and what score threshold indicates high risk?",
    options: [
      "BMI, blood pressure, family history, age; score >=50 indicates high risk",
      "Age, waist circumference, physical activity level, family history of diabetes; score >=60 indicates high risk requiring blood glucose testing",
      "Age, BMI, fasting glucose, HbA1c; score >=70 indicates high risk",
      "Waist circumference, blood pressure, smoking history, alcohol use; score >=55 indicates high risk"
    ],
    answer: 1,
    explanation: "The Indian Diabetes Risk Score (IDRS), validated by Dr. V. Mohan and colleagues at Madras Diabetes Research Foundation, uses four parameters: (1) Age (0-20 points based on age group), (2) Waist circumference (0-20 points based on WC cut-offs for South Asians), (3) Physical activity (0-20 points based on activity level), and (4) Family history of diabetes (0-20 points). Maximum score is 80. A score >=60 indicates high risk requiring blood glucose testing. The IDRS has been validated against OGTT with a sensitivity of approximately 72% and specificity of 60% for detecting undiagnosed diabetes in community settings."
  },
  {
    id: 25,
    question: "Population-based studies in India on diabetic retinopathy prevalence have found what approximate rate of any diabetic retinopathy among known diabetic patients?",
    options: ["5-8%", "10-15%", "17-28%", "40-50%"],
    answer: 2,
    explanation: "Population-based studies from India (including Chennai Urban Rural Epidemiology Study - CURES, and the Sankara Nethralaya Diabetic Retinopathy Epidemiology and Molecular Genetic Study - SN-DREAMS) have reported prevalence of any diabetic retinopathy in the range of 17-28% among known diabetic patients. The CURES study reported approximately 20.8% prevalence. Sight-threatening retinopathy (PDR and clinically significant macular edema) affects approximately 5% of diabetics. Longer diabetes duration, poor glycemic control, and hypertension are the strongest risk factors. Many cases are detected late due to limited screening programs."
  },
  {
    id: 26,
    question: "The burden of diabetic kidney disease (DKD) in India as determined from population studies shows which of the following patterns?",
    options: [
      "DKD accounts for less than 5% of end-stage renal disease in India due to low diabetes prevalence",
      "Diabetes is now the leading or co-leading cause of end-stage renal disease (ESRD) in urban India, contributing 30-40% of ESRD cases requiring dialysis",
      "DKD in Indian diabetics presents predominantly as rapid progressive glomerulonephritis rather than gradual proteinuria",
      "DKD prevalence is identical in Type 1 and Type 2 diabetes patients in India"
    ],
    answer: 1,
    explanation: "Registry data from urban India (including the Indian CKD Registry) shows that diabetes mellitus has become the leading cause of ESRD in urban India, contributing approximately 30-40% of patients on dialysis, surpassing chronic glomerulonephritis. This epidemiological shift mirrors the diabetes epidemic. Population-based screening studies (SEEK India, CURES) show microalbuminuria (early DKD marker) in 25-30% of diabetics. The huge population of undiagnosed and poorly controlled diabetics represents a large reservoir for future ESRD burden, with enormous healthcare cost implications."
  },
  {
    id: 27,
    question: "The UKPDS (UK Prospective Diabetes Study) was a landmark epidemiological and clinical trial. From an epidemiological perspective, what did the UKPDS 10-year post-trial monitoring (legacy effect study) demonstrate?",
    options: [
      "Glycemic benefits of intensive control disappeared completely within 3 years after the trial ended",
      "Early intensive glycemic control produced sustained reductions in microvascular and cardiovascular outcomes (including myocardial infarction) for years after the intensive control period ended",
      "The legacy effect was only seen with metformin, not with sulfonylurea or insulin",
      "Blood pressure control showed no legacy effect while glycemia showed a strong legacy effect"
    ],
    answer: 1,
    explanation: "The UKPDS 10-year post-trial monitoring (published 2008 in NEJM) demonstrated 'metabolic memory' or 'legacy effect': despite HbA1c levels equalizing between intensive and conventional groups after the trial ended, the intensive control group maintained significant reductions in: myocardial infarction (15% reduction, statistically significant for the first time), diabetes-related death (13% reduction), and microvascular endpoints. This landmark finding supports aggressive early glycemic management at diagnosis, establishing the concept that early metabolic exposures have lasting consequences on vascular tissue."
  },
  {
    id: 28,
    question: "In the DCCT/EDIC study, the 'metabolic memory' concept was further elaborated. What was the approximate duration of follow-up in the EDIC study that demonstrated persistent cardiovascular benefits of early intensive control in Type 1 diabetes?",
    options: ["3-5 years", "10-15 years", "20-30 years", "Only the original 6.5-year DCCT period showed benefits"],
    answer: 2,
    explanation: "The EDIC (Epidemiology of Diabetes Interventions and Complications) study followed DCCT participants for 20-30 years after the trial. By year 17 of EDIC follow-up (approximately 27 years total including DCCT), the intensive control group showed a 57% reduction in non-fatal MI, stroke, or cardiovascular death compared to the conventional group. Remarkably, the HbA1c difference between groups had disappeared within 1-2 years of EDIC start, yet cardiovascular protection persisted. This strongly supports early intensive control in Type 1 diabetes and has shaped current treatment guidelines."
  },
  {
    id: 29,
    question: "Population-level epidemiological data on diabetic foot amputations in India shows which concerning trend?",
    options: [
      "India has among the world's lowest amputation rates due to traditional Indian medicine practices",
      "India has disproportionately high rates of diabetes-related lower limb amputations due to late presentation, poor glycemic control, limited foot care services, and inadequate footwear",
      "Amputation rates are declining in India due to improved NCD management programs",
      "Amputation rates in India are identical to those in Western Europe"
    ],
    answer: 1,
    explanation: "Epidemiological data from tertiary care centers and the Global Lower Extremity Amputation Study indicate that India has disproportionately high diabetes-related lower limb amputation rates. Factors contributing include: late diagnosis, poor glycemic control, inadequate foot care education, poor footwear and walking barefoot in rural areas, delayed treatment-seeking, limited podiatry services, inadequate wound care facilities at primary levels, and high rates of peripheral neuropathy (often asymptomatic). The Chennai-based CURES study found diabetic foot problems in approximately 5.4% of diabetics, with 9.6% having peripheral neuropathy. Amputation prevention through foot care programs is a public health priority."
  },
  {
    id: 30,
    question: "Diabetes-attributable mortality is estimated using the concept of 'excess mortality.' According to IDF Diabetes Atlas estimates, what proportion of global deaths in adults aged 20-79 years are attributable to diabetes?",
    options: ["About 2-3%", "About 6-7%", "About 10-12%", "About 20-25%"],
    answer: 1,
    explanation: "The IDF Diabetes Atlas 10th Edition (2021) estimated that diabetes caused approximately 6.7 million deaths in adults aged 20-79 years in 2021, representing about 12.2% of all deaths in this age group globally. However, this likely underestimates true diabetes mortality because diabetes is frequently not recorded as the underlying cause of death on death certificates - cardiovascular disease, renal failure, and infections (the proximate causes of death in diabetics) are typically recorded. The true fraction of deaths attributable to diabetes (including as a contributing cause) is substantially higher."
  },
  {
    id: 31,
    question: "The economic burden of diabetes in India includes both direct and indirect costs. Which of the following best characterizes the economic impact of diabetes complications at the population level?",
    options: [
      "Complications account for less than 20% of total diabetes-related costs",
      "Complications (particularly cardiovascular disease, ESRD, and retinopathy) account for 60-80% of total diabetes-related healthcare expenditure, creating catastrophic out-of-pocket costs for households",
      "The government bears most diabetes costs through public sector facilities, minimizing household burden",
      "Indirect costs (productivity losses) are negligible because diabetes primarily affects retired elderly populations"
    ],
    answer: 1,
    explanation: "Economic analyses of diabetes burden in India (including studies by Ramachandran et al. and the IDF Diabetes Atlas) consistently show that complications drive 60-80% of direct diabetes healthcare costs. Dialysis for ESRD, coronary interventions for CAD, surgical treatment of diabetic foot, and anti-VEGF injections for retinopathy impose catastrophic out-of-pocket expenditures. Given that most diabetes care in India is paid out-of-pocket (>60%), complications push households below the poverty line (catastrophic health expenditure). Indirect costs from disability and premature mortality are substantial as diabetes affects working-age adults."
  },
  {
    id: 32,
    question: "Quality of Life (QoL) studies in diabetic populations in India using validated tools have shown which major determinant of reduced QoL beyond glycemic control?",
    options: [
      "The type of antidiabetic medication used is the primary QoL determinant",
      "Presence of complications, treatment burden, fear of hypoglycemia, and psychosocial factors (depression, stigma) are major QoL determinants beyond glycemic control",
      "QoL in Indian diabetics is primarily determined by household income",
      "Physical activity levels have no significant correlation with QoL in Indian diabetic patients"
    ],
    answer: 1,
    explanation: "QoL studies in Indian diabetics using tools such as the EQ-5D, WHOQOL-BREF, DQoL (Diabetes Quality of Life measure), and ADDQoL (Audit of Diabetes-Dependent Quality of Life) consistently identify complications as the primary driver of reduced QoL. Depression (comorbid in 15-25% of diabetics), fear of hypoglycemia, treatment burden (multiple medications, monitoring requirements), stigma from chronic disease, and sexual dysfunction also significantly impact QoL. Studies from AIIMS and medical colleges across India highlight that mental health component of diabetes care is grossly neglected in routine NCD management programs."
  },
  {
    id: 33,
    question: "Population-level data on macrovascular disease burden in Indian diabetics shows which specific pattern compared to Western diabetics?",
    options: [
      "Indian diabetics have lower macrovascular risk because their BMI is lower",
      "Indian diabetics show higher rates of coronary artery disease relative to peripheral vascular disease compared to Western diabetics, with CAD occurring at younger ages and with less BMI-related risk",
      "Indian diabetics have lower rates of all macrovascular diseases due to protective dietary factors",
      "Stroke is more common than coronary artery disease in Indian diabetics, unlike Western populations"
    ],
    answer: 1,
    explanation: "Epidemiological studies on Indian diabetics show a specific macrovascular pattern: coronary artery disease (CAD) is the predominant macrovascular manifestation, occurring at younger ages and with less obesity than Western diabetics. Indian diabetics develop premature CAD often before age 50. The CURES study showed CAD prevalence of approximately 21% in urban Chennai diabetics. The pattern of diffuse three-vessel disease, smaller coronary vessel size, and higher rates of sudden cardiac death is characteristic. Peripheral arterial disease is relatively less prevalent, though diabetic foot complications (neuropathic) remain high."
  },
  {
    id: 34,
    question: "Diabetes complication screening programs in India under NPCDCS recommend which minimum frequency for retinal screening in known diabetics?",
    options: [
      "Every 5 years for all diabetics",
      "Annually for all diabetics, with more frequent follow-up if retinopathy is detected",
      "Only when visual symptoms develop",
      "Every 2 years if glycemic control is good (HbA1c <7%)"
    ],
    answer: 1,
    explanation: "NPCDCS guidelines and RSSDI/API consensus recommend annual diabetic retinopathy screening for all known diabetics, with more frequent follow-up (every 3-6 months) if retinopathy is detected. Screening should begin at diagnosis for Type 2 diabetes (as onset of hyperglycemia may precede diagnosis by years) and 5 years after diagnosis for Type 1 diabetes. Fundus photography using non-mydriatic cameras (tele-ophthalmology) has been piloted in several states to scale up screening. Despite guidelines, actual screening coverage in India remains inadequate, with studies showing only 20-40% of diabetics having ever undergone retinal examination."
  },
  {
    id: 35,
    question: "The HbA1c population target concept is used in public health to assess the quality of diabetes care at the health system level. What HbA1c threshold is commonly used to define 'poor glycemic control' in population-level diabetes care audits?",
    options: ["HbA1c >6.5%", "HbA1c >7.0%", "HbA1c >8.0%", "HbA1c >9.0%"],
    answer: 2,
    explanation: "In population-level diabetes care quality assessments and health system audits, HbA1c >8.0% (64 mmol/mol) is commonly used as the threshold for 'poor glycemic control' requiring intensification of management. The ADA quality metric uses HbA1c >9% as a marker of very poor control. Studies from ICMR-INDIAB and hospital-based audits in India show that a substantial proportion (40-60%) of treated diabetics have HbA1c >8.0%, indicating that treatment effectiveness at the population level is suboptimal. This population-level metric helps prioritize health system strengthening efforts."
  },
  {
    id: 36,
    question: "Infection-related mortality in diabetic populations compared to non-diabetic populations at the population level shows which pattern from epidemiological studies?",
    options: [
      "Diabetics have identical infection-related mortality to non-diabetics if glycemic control is adequate",
      "Diabetics have approximately 2-3 times higher risk of infection-related hospitalization and mortality, with tuberculosis, urinary tract infections, skin infections, and lower respiratory infections particularly elevated",
      "Diabetes reduces infection risk because elevated blood glucose kills bacteria",
      "Only Type 1 diabetics have elevated infection risk; Type 2 diabetics show no difference"
    ],
    answer: 1,
    explanation: "Large population-based cohort studies and meta-analyses consistently show that diabetics have 2-3 times higher risk of infection-related morbidity and mortality compared to non-diabetics. Specific infections with markedly elevated risk include: tuberculosis (2-3x higher incidence - diabetes is the leading risk factor for TB globally after HIV), urinary tract infections, lower respiratory infections, skin and soft tissue infections, and fungal infections (mucormycosis, candidiasis). Mechanisms include impaired innate immunity, reduced phagocytic function, neuropathy reducing wound detection, and poor vascularity. India's dual burden of diabetes and TB creates significant overlap."
  },
  {
    id: 37,
    question: "The Global Burden of Disease (GBD) study methodology uses Disability-Adjusted Life Years (DALYs) to measure diabetes burden. For diabetes, what is the relative contribution of Years Lived with Disability (YLD) vs. Years of Life Lost (YLL) to total DALYs?",
    options: [
      "YLL completely dominates DALY burden for diabetes (>90% of total DALYs)",
      "YLD and YLL contribute approximately equally to diabetes DALY burden in most regions",
      "YLD (from non-fatal complications) contributes more to diabetes DALYs than YLL in high-income countries; YLL is relatively more important in LMICs with high premature mortality",
      "Diabetes generates negligible DALY burden because most diabetics live long lives"
    ],
    answer: 2,
    explanation: "GBD analyses show that for diabetes, the contribution of YLD versus YLL varies by development context: in high-income countries with better cardiovascular and cancer care, patients live longer with diabetes complications (neuropathy, retinopathy, nephropathy), making YLD the dominant component. In LMICs like India, higher premature mortality from cardiovascular and infectious complications means YLL contributes more to the total DALY burden. This has implications for prioritization: YLD reduction requires complication prevention programs; YLL reduction requires emergency and critical care capacity alongside prevention. India shows a mixed pattern given its epidemiological transition."
  },
  {
    id: 38,
    question: "The Indian Diabetes Prevention Programme (IDPP-1) was a landmark trial testing lifestyle modification and metformin for diabetes prevention in Indians with IGT. What were the key findings of IDPP-1?",
    options: [
      "Lifestyle modification reduced diabetes incidence by 58%; metformin reduced it by 31%, similar to the US DPP",
      "Lifestyle modification alone reduced diabetes incidence by 28.5%; metformin alone by 26.4%; combined lifestyle + metformin by 28.2% - all three compared to control group showing no significant additive benefit",
      "Only metformin was effective (50% reduction) while lifestyle intervention failed in the Indian context",
      "IDPP-1 showed no significant diabetes prevention benefit in Indians with IGT"
    ],
    answer: 1,
    explanation: "IDPP-1 (Ramachandran et al., Diabetologia, 2006) studied 531 Asian Indian men with IGT in Chennai. Key findings: Lifestyle modification reduced diabetes incidence by 28.5% (relative risk reduction), Metformin alone by 26.4%, and combined Lifestyle + Metformin by 28.2% compared to control. Notably, there was NO additive benefit of combining lifestyle and metformin. Effect sizes were smaller than US DPP (58% for lifestyle) and the Finnish DPS (58%), possibly because the control group in IDPP-1 also received standard dietary advice, and Indians already had active lifestyles (no sedentary suburban lifestyle to change significantly)."
  },
  {
    id: 39,
    question: "The US Diabetes Prevention Program (DPP) found that lifestyle intervention was most effective in which subgroup of participants?",
    options: [
      "Young adults (18-35 years) with high BMI",
      "Participants older than 60 years, showing 71% relative risk reduction compared to 58% overall",
      "Participants with isolated IGT without IFG",
      "Female participants compared to male participants"
    ],
    answer: 1,
    explanation: "The DPP subgroup analysis showed that the lifestyle intervention was most effective in participants aged >60 years, who showed a 71% relative risk reduction in diabetes incidence compared to the overall 58% reduction. This is particularly noteworthy because older adults are often assumed to be less responsive to lifestyle changes. In contrast, metformin was most effective in younger participants (age 25-44) and those with highest BMI (>=35 kg/m2). This has policy implications: intensive lifestyle programs may be particularly valuable for older pre-diabetic individuals."
  },
  {
    id: 40,
    question: "Under Ayushman Bharat - Health and Wellness Centers (AB-HWCs), diabetes screening and management have been integrated. Which specific service delivery model is used for NCD management at HWCs?",
    options: [
      "HWCs only provide referral slips for diabetes; all management occurs at district hospitals",
      "Community Health Officers (CHOs/mid-level health providers) at HWCs screen, initiate treatment for hypertension and uncomplicated diabetes, provide lifestyle counseling, and refer complicated cases to higher facilities through a population health management approach",
      "HWCs only perform point-of-care HbA1c testing and report to district health offices",
      "Diabetes management at HWCs is limited to distributing government-procured metformin without clinical assessment"
    ],
    answer: 1,
    explanation: "Ayushman Bharat-HWCs (now Pradhan Mantri Jan Arogya Yojana-HWC) deploy trained Community Health Officers (CHOs/nursing graduates with 6-month bridge course) who provide comprehensive primary care including: universal screening of adults >=30 years for hypertension and diabetes using CBAC, fasting blood glucose testing, basic counseling, initiation of first-line antihypertensives and metformin for uncomplicated cases, chronic disease registers, follow-up care, and teleconsultation linkage. The model aims to shift NCD management from hospitals to community level, covering 30 years+ population in 1.5 lakh HWCs nationally."
  },
  {
    id: 41,
    question: "The NPCDCS diabetes component specifies a referral pathway. How should a newly detected diabetes case identified during community screening by an ASHA be managed?",
    options: [
      "ASHA should initiate metformin therapy and monitor at village level",
      "Positive screening cases are referred to ANM at sub-center for confirmatory blood glucose, then to PHC Medical Officer for diagnosis and management initiation, with complicated cases referred to CHC or district hospital",
      "All positive screening cases must be directly referred to district hospital NCD clinic",
      "ASHA performs OGTT at the village level for confirmatory diagnosis"
    ],
    answer: 1,
    explanation: "The NPCDCS referral pathway for diabetes: ASHA performs CBAC/risk assessment and capillary blood glucose screening at village level. Those with high risk or elevated glucose are referred to the sub-center ANM for initial assessment. ANM refers to PHC Medical Officer for confirmatory diagnosis (fasting glucose) and initiation of management. Complicated diabetes (with renal/cardiac complications, need for insulin, etc.) is referred to CHC NCD clinic. Those needing specialist care, advanced investigations, or surgical interventions go to district hospital. This tiered system aims to decentralize uncomplicated diabetes management to PHC level."
  },
  {
    id: 42,
    question: "Diabetes Self-Management Education (DSME) programs in community settings in India have been evaluated. Which structured DSME model has shown effectiveness in improving glycemic outcomes in Indian studies?",
    options: [
      "One-time group education session at diagnosis is sufficient for sustained glycemic improvement",
      "Structured peer-led group education combined with individual counseling sessions (similar to DESMOND or X-PERT models adapted for India) has shown HbA1c reductions of 0.5-1.5% in Indian RCTs",
      "Individual physician counseling during 5-minute consultations has the strongest evidence",
      "DSME is not effective in India because of low health literacy"
    ],
    answer: 1,
    explanation: "Indian adaptation studies of structured DSME programs (including adaptations of DESMOND, Look AHEAD education components, and ICMR-funded education programs) show HbA1c reductions of 0.5-1.5% when delivered as structured peer-led group education with individual follow-up. Studies from CMC Vellore, JIPMER, and AIIMS demonstrate effectiveness across educational levels. Key adaptations for India include vernacular language delivery, culturally relevant dietary counseling (rice-based diet, festival foods), and family-inclusive sessions. Peer support models using trained community diabetes educators have shown sustainability advantages."
  },
  {
    id: 43,
    question: "mHealth interventions for diabetes have been studied in India. The ICMR-funded study on mobile health for diabetes management ('mDiabetes' initiative) reported which finding?",
    options: [
      "mHealth interventions had no significant impact on HbA1c in Indian settings",
      "IVR (Interactive Voice Response)-based health messaging in local languages improved medication adherence and reduced HbA1c by approximately 0.5-1% in community-based Type 2 diabetics",
      "Smartphone app-based interventions were most effective, reducing HbA1c by 2% in all populations",
      "mHealth was only effective in urban, educated, smartphone-using patients aged below 40"
    ],
    answer: 1,
    explanation: "ICMR and WHO India-supported mDiabetes and related mHealth interventions in India using IVR technology (pre-recorded health messages in local language delivered to basic mobile phones) showed improvements in medication adherence, dietary practices, and HbA1c reductions of approximately 0.5-1% in community-based studies. IVR was preferred over SMS in populations with low literacy. Studies from Karnataka, Tamil Nadu, and Maharashtra demonstrated feasibility. The WHO mDiabetes program deployed in India as part of the BeHe@lthy BeMobile initiative used SMS-based behavioral messages and showed improvements in self-care behaviors."
  },
  {
    id: 44,
    question: "ICMR's research priorities for diabetes in India include which of the following specific epidemiological research gaps identified in policy documents?",
    options: [
      "Research on Type 1 diabetes insulin regimens and pharmacokinetics",
      "Comprehensive surveillance systems for tracking diabetes incidence (not just prevalence), studies on diabetes in tribal populations, implementation research on the effectiveness of community-based prevention programs, and biomarker studies for early diabetes detection",
      "Drug discovery for novel oral hypoglycemic agents for Indian populations",
      "Genomic sequencing of all Type 2 diabetics in India for personalized medicine"
    ],
    answer: 1,
    explanation: "ICMR's NCD research agenda and the National Diabetes Strategic Action Plan (NDSAP) identify key gaps: (1) Lack of incidence data (only prevalence studies exist - ICMR-INDIAB type studies) requiring prospective cohorts; (2) Paucity of data from tribal, hilly, and northeastern populations; (3) Implementation research evaluating real-world effectiveness of NPCDCS and HWC-based diabetes programs; (4) Low-cost biomarker studies for early detection; (5) Research on diabetes in pregnancy burden; and (6) Cost-effectiveness analyses of different screening strategies. These priorities guide ICMR's intramural and extramural research funding for NCDs."
  },
  {
    id: 45,
    question: "Yoga intervention studies for Type 2 diabetes in India have been conducted by AIIMS and other institutions. From an epidemiological research perspective, which methodological limitation has been most commonly cited in systematic reviews of yoga and diabetes trials from India?",
    options: [
      "Yoga interventions were too short to show any metabolic effects",
      "Most Indian yoga-diabetes trials suffer from small sample sizes, lack of adequate control groups (waitlist or active exercise comparison), lack of allocation concealment, and high dropout rates - limiting internal validity",
      "Yoga trials only enrolled Type 1 diabetics making findings inapplicable to Type 2 diabetes",
      "Yoga trials used non-standardized HbA1c measurement making comparisons impossible"
    ],
    answer: 1,
    explanation: "Systematic reviews of yoga and diabetes RCTs from India (Singh et al., Thind et al., Innes & Selfe) consistently identify methodological limitations: (1) Small sample sizes (many <50 participants), limiting statistical power; (2) Inadequate control groups - comparison with sedentary controls rather than matched exercise programs overestimates yoga-specific benefits; (3) Poor allocation concealment and blinding (impossible to blind participants to yoga); (4) Short duration (most <3 months); (5) High dropout rates in control groups; and (6) Lack of standardization of yoga protocols across studies. Cochrane reviews call for larger, adequately powered, multi-center RCTs with active exercise comparators."
  },
  {
    id: 46,
    question: "The Barker hypothesis (Developmental Origins of Health and Disease - DOHaD) relates to diabetes epidemiology. What is the key epidemiological evidence supporting this hypothesis in the Indian context?",
    options: [
      "Wealthier Indian states have lower diabetes rates, confirming economic development prevents diabetes",
      "Low birth weight Indian infants who gain weight rapidly in childhood show disproportionately high rates of insulin resistance, metabolic syndrome, and Type 2 diabetes - the 'thin-fat Indian' phenotype representing in-utero programming",
      "The hypothesis has been refuted in the Indian context because all Indian populations show the same diabetes risk regardless of birth weight",
      "Only maternal diabetes (GDM) at birth predicts offspring diabetes; other in-utero factors are not significant"
    ],
    answer: 1,
    explanation: "The Barker/DOHaD hypothesis has strong Indian evidence: Indian babies have a characteristic 'thin-fat' phenotype - low birth weight with disproportionately high body fat percentage and visceral adiposity even at low BMI. Yajnik et al.'s Pune Children's Study and Pune Maternal Nutrition Study showed that low birth weight Indian infants who underwent 'catch-up' growth had markedly higher insulin resistance and metabolic risk. The Indian epigenome studies suggest in-utero nutrition programs adipogenesis and glucose metabolism. This creates an intergenerational cycle: malnourished mothers produce low-birth-weight thin-fat babies who develop diabetes in adulthood."
  },
  {
    id: 47,
    question: "GDM as a risk factor for Type 2 diabetes in the mother: population-based cohort studies show that the risk of progression from GDM to Type 2 diabetes is modified by which factor most strongly?",
    options: [
      "The sex of the offspring born during the GDM pregnancy",
      "Postpartum weight retention and breastfeeding - women who retain excess weight and do not breastfeed have substantially higher progression rates",
      "The specific antidiabetic drug used to treat GDM during pregnancy",
      "The gestational week at which GDM was first diagnosed"
    ],
    answer: 1,
    explanation: "Prospective cohort studies on post-GDM women (including the HAPO follow-up study and the Nurses' Health Study cohort analyses) show that postpartum lifestyle factors strongly modify T2DM progression risk: women who retain excess postpartum weight have 2-4 times higher diabetes progression rates. Breastfeeding is associated with 50% lower risk of Type 2 diabetes progression in GDM women (protective through improved insulin sensitivity and weight management). ADA and ICMR recommend intensive lifestyle intervention post-partum for GDM women, with OGTT at 4-12 weeks and annual diabetes screening for life. Metformin can reduce progression in post-GDM women with ongoing pre-diabetes."
  },
  {
    id: 48,
    question: "The Finnish Diabetes Prevention Study (DPS) compared lifestyle intervention to control in individuals with IGT. What was the relative risk reduction in diabetes incidence achieved in the Finnish DPS?",
    options: ["28%", "42%", "58%", "72%"],
    answer: 2,
    explanation: "The Finnish Diabetes Prevention Study (Tuomilehto et al., NEJM, 2001) showed a 58% relative risk reduction in diabetes incidence in the lifestyle intervention group compared to the control group over a mean follow-up of 3.2 years. The lifestyle intervention targeted weight loss >=5%, dietary fat <30% of energy, saturated fat <10% of energy, fiber >=15g/1000kcal, and physical activity >=30 min/day. This 58% reduction is identical to the US DPP lifestyle intervention result (also 58%), strengthening confidence in lifestyle intervention effectiveness across different populations and contexts."
  },
  {
    id: 49,
    question: "Community health worker (ASHA) training for NCD activities under NPCDCS includes specific competencies for diabetes. Which of the following accurately reflects what ASHAs are trained and authorized to do for diabetes in India?",
    options: [
      "ASHAs are trained to diagnose diabetes, prescribe metformin, and manage uncomplicated cases independently",
      "ASHAs are trained to identify high-risk individuals using CBAC/IDRS, measure capillary blood glucose using glucometers, counsel on diabetes prevention (diet, physical activity), ensure treatment adherence for known diabetics, and facilitate timely referrals - they do not prescribe medications",
      "ASHAs are only trained for maternal and child health; NCD activities are exclusively done by ANMs",
      "ASHAs measure HbA1c using point-of-care devices and report directly to district health offices"
    ],
    answer: 1,
    explanation: "Under NPCDCS and the updated NCD package for ASHAs, their competencies include: (1) CBAC administration for NCD risk stratification; (2) Random capillary blood glucose testing using basic glucometers (after competency training); (3) Counseling on healthy diet, physical activity, tobacco cessation for diabetes prevention; (4) Adherence support and treatment compliance monitoring for known diabetics; (5) Facilitating referrals and return-to-care for defaulters; and (6) Maintaining village-level NCD registers. They are not authorized to prescribe medications - this remains the domain of medical officers at PHC and above. ASHAs receive performance-based incentives for NCD screening activities."
  },
  {
    id: 50,
    question: "The lifestyle intervention component of the US DPP achieved its 58% diabetes risk reduction through which specific quantified lifestyle targets met by participants?",
    options: [
      "10% weight loss and 300 minutes of moderate exercise per week were the two targets",
      "7% weight loss from baseline and at least 150 minutes of moderate-intensity physical activity (e.g., brisk walking) per week were the two primary targets, achieved through 16 individual sessions with a lifestyle coach",
      "Low-carbohydrate diet (<100g/day) and resistance training 3 times per week were the primary targets",
      "5% weight loss and complete dietary fat elimination were the primary intervention targets"
    ],
    answer: 1,
    explanation: "The US DPP lifestyle intervention had two primary goals: (1) At least 7% weight loss from baseline body weight through caloric reduction and increased physical activity; and (2) At least 150 minutes per week of moderate-intensity physical activity (equivalent to brisk walking). The intervention used 16 individual sessions with a trained lifestyle coach in the first 24 weeks, followed by monthly maintenance sessions. Diet goals included reduced total fat intake and increased fiber. The 7% weight loss goal (not 5% as in Finnish DPS or 10% as in many weight loss programs) was chosen as an achievable and meaningful threshold. Weight loss was the most important mediating factor for diabetes prevention."
  }
];

export default questions;

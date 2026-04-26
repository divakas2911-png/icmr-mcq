const questions = [
  {
    id: 1,
    question: "Which of the following is considered the single leading modifiable risk factor for non-communicable diseases globally?",
    options: ["Physical inactivity", "Tobacco use", "Unhealthy diet", "Harmful alcohol use"],
    answer: 1,
    explanation: "Tobacco use is recognized as the single leading modifiable risk factor for NCDs globally, responsible for approximately 8 million deaths per year. It is a major risk factor for cardiovascular disease, cancer, chronic respiratory disease, and diabetes."
  },
  {
    id: 2,
    question: "In India, which form of tobacco is most commonly used and is associated with oral cancer?",
    options: ["Cigarettes", "Bidi", "Gutka (smokeless tobacco with betel nut)", "Hookah"],
    answer: 2,
    explanation: "Gutka, a mixture of tobacco, betel nut (areca nut), lime, and other ingredients, is the most widely used smokeless tobacco in India and is strongly associated with oral submucous fibrosis and oral cancer. Bidi is the most commonly smoked form of tobacco in India, but gutka is the most commonly used overall form of tobacco."
  },
  {
    id: 3,
    question: "The Cigarettes and Other Tobacco Products Act (COTPA) 2003 mandates that pictorial health warnings on tobacco product packages must cover what minimum percentage of the package surface?",
    options: ["40%", "50%", "85%", "100%"],
    answer: 2,
    explanation: "As per the amended COTPA rules effective from April 2016, pictorial health warnings must cover at least 85% of the principal display area of tobacco product packages in India. This is one of the largest mandated warning sizes globally."
  },
  {
    id: 4,
    question: "Which article of the WHO Framework Convention on Tobacco Control (FCTC) deals with protection from exposure to tobacco smoke (passive smoking)?",
    options: ["Article 6", "Article 8", "Article 11", "Article 14"],
    answer: 1,
    explanation: "Article 8 of the WHO FCTC deals with protection from exposure to tobacco smoke and requires parties to adopt measures providing universal protection from exposure to tobacco smoke in indoor workplaces, public transport, indoor public places, and other public places."
  },
  {
    id: 5,
    question: "Passive smoking (secondhand smoke exposure) in non-smokers is associated with which of the following increased risks?",
    options: ["25-30% increased risk of lung cancer", "10% increased risk of ischemic heart disease only", "Only respiratory tract infections in children", "No significant cardiovascular risk"],
    answer: 0,
    explanation: "Non-smokers exposed to secondhand smoke have approximately 25-30% increased risk of developing lung cancer. Passive smoking is also associated with a 25-30% increased risk of ischemic heart disease, increased risk of stroke, and respiratory problems in children including asthma and respiratory tract infections."
  },
  {
    id: 6,
    question: "The 'Smoking Attributable Fraction' (SAF) is calculated using which formula?",
    options: ["SAF = (RR - 1) / RR", "SAF = P(RR - 1) / [P(RR - 1) + 1]", "SAF = Incidence in smokers / Incidence in non-smokers", "SAF = Prevalence of smoking x Relative risk"],
    answer: 1,
    explanation: "The Smoking Attributable Fraction (SAF) is calculated using the formula: SAF = P(RR-1) / [P(RR-1) + 1], where P is the prevalence of smoking in the population and RR is the relative risk of the disease in smokers compared to non-smokers. This represents the proportion of disease in the population attributable to smoking."
  },
  {
    id: 7,
    question: "The AUDIT (Alcohol Use Disorders Identification Test) is a screening tool developed by which organization, and a score of 8 or more indicates what?",
    options: ["CDC; alcohol dependence", "WHO; hazardous or harmful alcohol use", "NIAAA; alcohol abuse disorder", "ICMR; need for detoxification"],
    answer: 1,
    explanation: "AUDIT (Alcohol Use Disorders Identification Test) was developed by the WHO. It consists of 10 questions covering alcohol consumption, drinking behavior, and alcohol-related problems. A score of 8 or more (out of 40) indicates hazardous or harmful alcohol use requiring intervention. Scores of 20 or above suggest alcohol dependence."
  },
  {
    id: 8,
    question: "Which of the following diseases has the STRONGEST causal association with chronic alcohol use?",
    options: ["Gastric cancer", "Alcoholic liver cirrhosis", "Pancreatic cancer", "Esophageal adenocarcinoma"],
    answer: 1,
    explanation: "Alcoholic liver cirrhosis has the strongest causal association with chronic alcohol use. Approximately 90% of heavy drinkers develop alcoholic fatty liver, 20-30% develop alcoholic hepatitis, and 10-20% develop cirrhosis. Alcohol is also causally associated with cancers of the oral cavity, pharynx, esophagus, liver, colorectum, and breast."
  },
  {
    id: 9,
    question: "Brief interventions for hazardous alcohol use in primary care settings are based on which framework?",
    options: ["FRAMES (Feedback, Responsibility, Advice, Menu, Empathy, Self-efficacy)", "SMART goals only", "12-step Alcoholics Anonymous model", "Motivational interviewing stage 3 only"],
    answer: 0,
    explanation: "Brief interventions for alcohol are based on the FRAMES framework: Feedback (personalized feedback on drinking), Responsibility (personal responsibility for change), Advice (clear advice to change), Menu (menu of strategies), Empathy (empathic counseling style), and Self-efficacy (building confidence). Brief interventions of 5-15 minutes have been shown to be effective in reducing hazardous alcohol use."
  },
  {
    id: 10,
    question: "Which pharmacological agent for tobacco cessation is a partial agonist at the alpha4-beta2 nicotinic acetylcholine receptor and is considered the most effective single pharmacotherapy for smoking cessation?",
    options: ["Bupropion SR", "Nortriptyline", "Varenicline (Champix)", "Nicotine replacement therapy patch"],
    answer: 2,
    explanation: "Varenicline (brand name Champix/Chantix) is a partial agonist at the alpha4-beta2 nicotinic acetylcholine receptor. It reduces craving and withdrawal symptoms while also blocking the rewarding effects of smoking. Meta-analyses show varenicline is the most effective single pharmacotherapy for smoking cessation, approximately doubling quit rates compared to placebo and being superior to bupropion."
  },
  {
    id: 11,
    question: "The economic burden of tobacco in India, including direct healthcare costs and indirect productivity losses, was estimated at approximately how much in recent studies?",
    options: ["Rs. 5,000 crore per year", "Rs. 27,500 crore per year", "Rs. 1,04,500 crore per year", "Rs. 2,00,000 crore per year"],
    answer: 2,
    explanation: "Studies including one published in the Indian Journal of Public Health estimated the economic burden of tobacco use in India at approximately Rs. 1,04,500 crore (about USD 22 billion) per year, including direct healthcare costs for treating tobacco-related diseases and indirect costs from premature mortality and morbidity. This significantly exceeds revenue collected from tobacco taxes."
  },
  {
    id: 12,
    question: "Under COTPA 2003, smoking in which of the following places is NOT prohibited?",
    options: ["Hotels with more than 30 rooms (designated smoking rooms allowed)", "Airports", "Schools and colleges", "Government offices"],
    answer: 0,
    explanation: "Under COTPA 2003 Section 4, smoking is prohibited in all public places. However, hotels with 30 or more rooms, restaurants with seating capacity of 30 or more, and airports are allowed to provide designated smoking rooms/areas that are fully enclosed with negative air pressure. All other public places including schools, colleges, and government offices must be completely smoke-free."
  },
  {
    id: 13,
    question: "Trans fatty acids (TFAs) increase cardiovascular risk primarily by which mechanism?",
    options: ["Increasing HDL cholesterol only", "Increasing LDL cholesterol and decreasing HDL cholesterol simultaneously", "Decreasing total cholesterol", "Increasing HDL and LDL cholesterol equally"],
    answer: 1,
    explanation: "Trans fatty acids (TFAs) have a uniquely adverse lipid profile effect - they both increase LDL ('bad') cholesterol AND decrease HDL ('good') cholesterol simultaneously. This dual effect makes TFAs particularly harmful for cardiovascular health. WHO recommends limiting TFA intake to less than 1% of total energy intake, and India's FSSAI has set limits on TFA content in foods."
  },
  {
    id: 14,
    question: "The FSSAI (Food Safety and Standards Authority of India) regulations limit the amount of trans fats in foods to what maximum percentage of total fats?",
    options: ["5% by 2022, with complete elimination by 2025", "2% by 2022 (reduced from earlier 5% limit)", "10% currently with phased reduction", "No current regulatory limit"],
    answer: 1,
    explanation: "FSSAI amended regulations to limit trans fats in partially hydrogenated vegetable oils, vanaspati, margarine, and bakery shortenings to 2% of total fats by January 2022, reduced from a previous limit of 5%. This is part of India's commitment to WHO's REPLACE initiative to eliminate industrially produced trans fats."
  },
  {
    id: 15,
    question: "According to WHO guidelines (2020), the recommended amount of moderate-intensity aerobic physical activity per week for adults is:",
    options: ["75 minutes per week", "150-300 minutes per week", "60 minutes per day (420 minutes per week)", "30 minutes per day on at least 3 days per week"],
    answer: 1,
    explanation: "WHO 2020 Global Guidelines on Physical Activity recommend that adults (18-64 years) should do at least 150-300 minutes of moderate-intensity aerobic physical activity per week, OR 75-150 minutes of vigorous-intensity activity, OR an equivalent combination. These guidelines also recommend muscle-strengthening activities on 2 or more days per week."
  },
  {
    id: 16,
    question: "Prolonged sedentary behavior (sitting for long periods) is associated with increased risk of NCDs even in people who meet physical activity guidelines. Which of the following statements about sedentary behavior is CORRECT?",
    options: ["Only total physical activity time matters; sedentary time has no independent effect", "Prolonged sedentary time is independently associated with adverse health outcomes regardless of physical activity level", "Sedentary behavior is only harmful if less than 1 hour of activity per day", "Screen time is the only form of sedentary behavior that increases NCD risk"],
    answer: 1,
    explanation: "WHO 2020 guidelines recognize that prolonged sedentary behavior is independently associated with adverse health outcomes (type 2 diabetes, cardiovascular disease, cancer, and all-cause mortality) regardless of whether an individual meets physical activity recommendations. Breaking up sedentary time throughout the day is recommended, and the guidelines for the first time included recommendations to limit sedentary behavior."
  },
  {
    id: 17,
    question: "In India, according to NFHS-5 (2019-21), what percentage of women and men are classified as overweight or obese (BMI >= 25 kg/m2)?",
    options: ["Women 10%, Men 8%", "Women 24%, Men 23%", "Women 40%, Men 35%", "Women 15%, Men 12%"],
    answer: 1,
    explanation: "According to NFHS-5 (2019-21), approximately 24% of women and 23% of men in India are overweight or obese (BMI >= 25 kg/m2). This represents a significant increase from previous NFHS surveys and reflects the growing obesity epidemic in India driven by nutrition transition, urbanization, and sedentary lifestyles."
  },
  {
    id: 18,
    question: "For Asian populations including Indians, the WHO recommends lower BMI cutoff points for obesity classification. Which of the following represents the correct Asian-specific BMI cutoffs?",
    options: ["Overweight: BMI >= 25, Obese: BMI >= 30 (same as Western)", "Overweight: BMI >= 23, Obese: BMI >= 27.5", "Overweight: BMI >= 20, Obese: BMI >= 25", "Overweight: BMI >= 22, Obese: BMI >= 28"],
    answer: 1,
    explanation: "For Asian populations including South Asians, WHO recommends lower BMI cutoffs: Overweight at BMI >= 23 kg/m2, and Obese at BMI >= 27.5 kg/m2. These lower cutoffs are used because Asians have a higher percentage of body fat and greater risk of metabolic complications at lower BMI values compared to Western populations."
  },
  {
    id: 19,
    question: "For Asian men and women, what are the waist circumference cutoff values recommended for defining abdominal obesity by the International Diabetes Federation (IDF)?",
    options: ["Men >= 102 cm, Women >= 88 cm", "Men >= 90 cm, Women >= 80 cm", "Men >= 85 cm, Women >= 75 cm", "Men >= 94 cm, Women >= 80 cm"],
    answer: 1,
    explanation: "The IDF recommends ethnicity-specific waist circumference cutoffs for abdominal obesity. For South/Southeast Asians (including Indians), the cutoffs are Men >= 90 cm and Women >= 80 cm. These are lower than European cutoffs (Men >= 94 cm, Women >= 80 cm for IDF, or Men >= 102 cm, Women >= 88 cm for ATP III). Abdominal obesity is a key component of metabolic syndrome."
  },
  {
    id: 20,
    question: "According to the IDF (2006) criteria for metabolic syndrome, which of the following is the CENTRAL/OBLIGATORY criterion?",
    options: ["Fasting glucose >= 100 mg/dL", "Blood pressure >= 130/85 mmHg", "Central obesity (ethnicity-specific waist circumference)", "Triglycerides >= 150 mg/dL"],
    answer: 2,
    explanation: "According to the IDF 2006 criteria for metabolic syndrome, central obesity (measured by waist circumference using ethnicity-specific cutoffs) is the CENTRAL/OBLIGATORY criterion. In addition to central obesity, at least 2 of the following 4 criteria must be present: raised triglycerides (>=150 mg/dL), reduced HDL-cholesterol, raised blood pressure (>=130/85 mmHg), or raised fasting plasma glucose (>=100 mg/dL or diagnosed T2DM)."
  },
  {
    id: 21,
    question: "Ultra-processed foods (UPFs) are classified using which internationally recognized classification system?",
    options: ["WHO NOVA classification", "FAO Nutrient Profiling System", "FSSAI Star Rating System", "Codex Alimentarius classification"],
    answer: 0,
    explanation: "Ultra-processed foods are classified using the NOVA food classification system, developed by researchers at the University of Sao Paulo. NOVA classifies foods into 4 groups based on the degree of processing: Group 1 (unprocessed/minimally processed), Group 2 (processed culinary ingredients), Group 3 (processed foods), and Group 4 (ultra-processed food products). UPFs typically contain additives, flavoring agents, and undergo multiple industrial processing steps."
  },
  {
    id: 22,
    question: "The DASH (Dietary Approaches to Stop Hypertension) diet is characterized by which of the following?",
    options: ["High protein, low carbohydrate, moderate fat", "High fruits and vegetables, low-fat dairy, reduced sodium, limited saturated fats", "Ketogenic diet with very low carbohydrates", "Mediterranean diet with high olive oil consumption"],
    answer: 1,
    explanation: "The DASH diet emphasizes high consumption of fruits and vegetables (8-10 servings/day), low-fat dairy products, whole grains, lean meats, nuts and legumes, while limiting sodium (1500-2300 mg/day), saturated fats, and added sugars. Clinical trials have demonstrated DASH diet reduces systolic blood pressure by 8-14 mmHg, making it an effective non-pharmacological intervention for hypertension."
  },
  {
    id: 23,
    question: "The National Institute of Nutrition (NIN) Hyderabad publishes India-specific dietary guidelines. The recommended daily intake of fruits and vegetables for Indians as per NIN guidelines is:",
    options: ["100g fruits + 100g vegetables per day", "At least 400g (5 portions) of fruits and vegetables per day", "Only 2 portions of fruits, unlimited vegetables", "300g fruits + 200g vegetables separately"],
    answer: 1,
    explanation: "NIN's Dietary Guidelines for Indians recommend consuming at least 400g of fruits and vegetables per day (approximately 5 portions), consistent with WHO recommendations. The guidelines emphasize consuming a variety of colorful fruits and vegetables to ensure adequate intake of micronutrients, fiber, and phytochemicals. These guidelines also recommend limiting salt to 5g/day and sugar to less than 10% of total energy."
  },
  {
    id: 24,
    question: "Which of the following statements about the Mediterranean diet and NCD prevention is CORRECT?",
    options: ["Mediterranean diet is primarily beneficial for weight loss only", "Mediterranean diet is associated with reduced risk of cardiovascular disease, type 2 diabetes, and certain cancers", "Mediterranean diet has no significant effect on cardiovascular outcomes", "Mediterranean diet is not applicable to Indian populations"],
    answer: 1,
    explanation: "The Mediterranean diet, characterized by high consumption of olive oil, legumes, unrefined cereals, fruits, vegetables, moderate fish and dairy, and low meat consumption, is associated with significant reductions in cardiovascular disease risk (PREDIMED trial showed 30% risk reduction), type 2 diabetes, metabolic syndrome, and certain cancers. Its principles of whole foods, plant-based eating, and healthy fats are applicable across populations."
  },
  {
    id: 25,
    question: "Hypertension is called the 'silent killer' because:",
    options: ["It kills patients in their sleep", "It is usually asymptomatic until complications develop, leading to delayed diagnosis", "It kills more people than any other single disease", "Medications for hypertension have silent side effects"],
    answer: 1,
    explanation: "Hypertension is called the 'silent killer' because it is typically asymptomatic (without symptoms) for many years while causing progressive damage to target organs including the heart, brain, kidneys, and eyes. This asymptomatic nature leads to delayed diagnosis and treatment, allowing complications such as stroke, myocardial infarction, heart failure, and renal failure to develop. In India, approximately 30% of adults have hypertension but awareness is low."
  },
  {
    id: 26,
    question: "Geoffrey Rose's strategy for prevention distinguishes between two approaches. The 'high-risk strategy' differs from the 'population strategy' in that:",
    options: ["High-risk strategy targets the entire population for risk reduction", "High-risk strategy identifies and treats individuals above a defined risk threshold, while population strategy shifts the entire risk distribution", "Population strategy is more expensive than high-risk strategy", "High-risk strategy is only used for infectious diseases"],
    answer: 1,
    explanation: "Geoffrey Rose distinguished the high-risk strategy (identifying and treating individuals above a risk threshold) from the population strategy (shifting the entire population's risk distribution through environmental and societal changes). The population strategy prevents more cases overall because most cases come from people at moderate risk who are more numerous. Rose's 'prevention paradox' states that a measure that brings large benefit to the community may offer little to the participating individual."
  },
  {
    id: 27,
    question: "Primordial prevention for cardiovascular disease refers to:",
    options: ["Secondary prevention after first myocardial infarction", "Prevention of risk factors from developing in the first place through social and environmental measures", "Screening of asymptomatic individuals for subclinical disease", "Tertiary prevention through cardiac rehabilitation"],
    answer: 1,
    explanation: "Primordial prevention aims to prevent the development of risk factors themselves in the population, particularly in children and young adults. It involves societal, environmental, and policy measures such as healthy school environments, physical activity promotion, food policies limiting unhealthy foods, tobacco control policies, and creating healthy urban environments. This contrasts with primary prevention (preventing disease in those with risk factors), secondary prevention (early detection), and tertiary prevention (preventing complications)."
  },
  {
    id: 28,
    question: "The Diabetes Prevention Program (DPP) trial demonstrated that intensive lifestyle modification in pre-diabetic individuals reduced progression to type 2 diabetes by approximately:",
    options: ["18% compared to placebo", "31% (same as metformin)", "58% compared to placebo (compared to 31% for metformin)", "75% compared to placebo"],
    answer: 2,
    explanation: "The landmark DPP (Diabetes Prevention Program) trial conducted in the USA showed that intensive lifestyle modification (diet and exercise targeting 7% weight loss and 150 minutes of activity per week) reduced progression from pre-diabetes to type 2 diabetes by 58% compared to placebo over 3 years. Metformin reduced progression by 31%. This established lifestyle modification as the cornerstone of diabetes prevention."
  },
  {
    id: 29,
    question: "Pre-diabetes is defined by which of the following criteria according to the American Diabetes Association (ADA)?",
    options: ["Fasting glucose 100-125 mg/dL OR HbA1c 5.7-6.4% OR 2-hour OGTT glucose 140-199 mg/dL", "Fasting glucose 110-125 mg/dL only", "HbA1c 6.0-6.4% only", "Random glucose 140-199 mg/dL"],
    answer: 0,
    explanation: "Pre-diabetes is defined by ADA as: Impaired Fasting Glucose (IFG) with fasting glucose 100-125 mg/dL, OR Impaired Glucose Tolerance (IGT) with 2-hour OGTT glucose 140-199 mg/dL, OR HbA1c 5.7-6.4%. Individuals with pre-diabetes have significantly elevated risk of developing type 2 diabetes and cardiovascular disease and benefit most from preventive interventions."
  },
  {
    id: 30,
    question: "The NPCDCS (National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke) screening protocol in India recommends opportunistic screening for diabetes using which test at health and wellness centers?",
    options: ["Only fasting plasma glucose", "Random blood glucose (RBG) using glucometer as first-line opportunistic screening", "HbA1c as first-line test", "Only OGTT (75g glucose)"],
    answer: 1,
    explanation: "Under NPCDCS/CPHC (Comprehensive Primary Health Care) guidelines at Health and Wellness Centers, opportunistic screening for diabetes uses Random Blood Glucose (RBG) as the first-line screening test due to its practicality in community settings (no need for fasting). A RBG >= 140 mg/dL warrants confirmatory fasting plasma glucose testing. This approach allows population-level screening without requiring fasting, increasing screening coverage."
  },
  {
    id: 31,
    question: "Opportunistic screening for hypertension and diabetes is recommended for all adults above what age in India as per NPCDCS guidelines?",
    options: ["Above 18 years", "Above 30 years", "Above 40 years", "Above 50 years"],
    answer: 1,
    explanation: "Under NPCDCS and the Comprehensive Primary Health Care framework, opportunistic screening for common NCDs including hypertension, diabetes, and common cancers is recommended for all individuals aged 30 years and above who visit any government health facility for any reason. This age threshold reflects the relatively early onset of NCDs in Indian populations compared to Western populations."
  },
  {
    id: 32,
    question: "The 'Polypill' concept for cardiovascular prevention involves combining which drugs in a single tablet?",
    options: ["Only antihypertensive drugs", "Statin + aspirin + antihypertensive(s) + folic acid in a single pill", "Metformin + aspirin + statin", "ACE inhibitor + calcium channel blocker only"],
    answer: 1,
    explanation: "The Polypill concept, proposed by Wald and Law in 2003, involves combining in a single tablet: a statin, aspirin, three antihypertensive drugs (at half standard dose), and folic acid. The theoretical calculation suggested this could reduce heart attacks by 88% and strokes by 80% if taken by all individuals over 55 years. The main advantages are simplicity, improved adherence, and lower cost. Indian-manufactured polypills like Polycap have been studied in clinical trials."
  },
  {
    id: 33,
    question: "Current guidelines on aspirin use for PRIMARY prevention of cardiovascular disease recommend:",
    options: ["Aspirin 75-100 mg daily for all adults over 50 years", "Aspirin is no longer routinely recommended for primary prevention; risk-benefit ratio is unfavorable due to bleeding risk", "Aspirin 325 mg daily for high-risk primary prevention", "Aspirin only for diabetic patients over 40 years"],
    answer: 1,
    explanation: "Updated guidelines (ACC/AHA 2019, USPSTF 2022) no longer recommend routine aspirin for primary cardiovascular prevention. The ASPREE, ARRIVE, and ASCEND trials showed that aspirin's bleeding risk (GI bleeding, hemorrhagic stroke) largely offsets its cardiovascular benefit in primary prevention. Aspirin remains recommended for secondary prevention (established cardiovascular disease). The 2022 USPSTF recommends against initiating aspirin for primary prevention in adults 60 years and older."
  },
  {
    id: 34,
    question: "Population-level salt reduction is a priority NCD prevention strategy. WHO recommends reducing sodium intake to less than what amount per day for adults?",
    options: ["Less than 5 grams of salt (2 grams sodium) per day", "Less than 2 grams of salt per day", "Less than 10 grams of salt per day", "Less than 1 gram of sodium per day"],
    answer: 0,
    explanation: "WHO recommends reducing salt intake to less than 5 grams per day (approximately 2 grams of sodium) for adults. Current average salt intake in India is approximately 8-11 grams per day. Salt reduction strategies include reformulation of processed foods, front-of-pack labeling, consumer education, and fiscal measures. A 1g/day reduction in population salt intake is estimated to prevent approximately 1.25 million deaths globally per year."
  },
  {
    id: 35,
    question: "Statins for PRIMARY prevention of cardiovascular disease are recommended based on which criteria?",
    options: ["All adults over 40 years regardless of risk", "Individuals with LDL-cholesterol above 160 mg/dL regardless of overall risk", "Based on overall cardiovascular risk assessment (10-year CVD risk >= 7.5-10%), not LDL alone", "Only for individuals with both hypertension and diabetes"],
    answer: 2,
    explanation: "Current guidelines recommend statins for primary prevention based on overall 10-year cardiovascular risk (using tools like Pooled Cohort Equations, Framingham Risk Score, or WHO/ISH risk charts) rather than LDL-cholesterol alone. ACC/AHA guidelines recommend statin therapy for individuals with 10-year ASCVD risk >= 7.5-10%. For intermediate-risk patients (7.5-20%), additional risk-enhancing factors are considered. This risk-based approach avoids treating low-risk individuals unnecessarily."
  },
  {
    id: 36,
    question: "Which of the following lifestyle interventions has been shown in clinical trials to reduce systolic blood pressure by the GREATEST amount?",
    options: ["Aerobic exercise (30 min, 5 days/week)", "DASH diet alone", "Sodium restriction to less than 2g/day", "Combination of DASH diet + sodium restriction"],
    answer: 3,
    explanation: "The combination of DASH diet plus sodium restriction produces the greatest reduction in blood pressure in clinical trials. The DASH-Sodium trial showed that combining the DASH diet with low sodium intake (1500 mg/day) reduced systolic blood pressure by 8.9 mmHg in normotensive individuals and by 11.5 mmHg in hypertensive individuals. DASH diet alone reduces SBP by 5-6 mmHg, and sodium restriction alone by 3-5 mmHg."
  },
  {
    id: 37,
    question: "For diabetes prevention in India, which lifestyle intervention target has been validated as most important in the Indian Diabetes Prevention Programme (IDPP)?",
    options: ["Achieving complete normoglycemia through very low calorie diet", "Moderate physical activity (30 min/day) and dietary modification showing 28.5% risk reduction", "Weight loss of more than 10% body weight", "Pharmacological intervention with metformin as first-line"],
    answer: 1,
    explanation: "The Indian Diabetes Prevention Programme (IDPP) demonstrated that lifestyle modification (LSM) with moderate physical activity (30 min/day of brisk walking) and dietary changes reduced progression from IGT to diabetes by 28.5% over 3 years in Asian Indians, while metformin reduced risk by 26.4%. Combination of both reduced risk by 28.2%. This Indian trial showed similar but somewhat smaller effects than the US DPP, and established feasibility in South Asian populations."
  },
  {
    id: 38,
    question: "Primary prevention of cervical cancer includes which of the following vaccines and is most effective when administered at what age?",
    options: ["HPV vaccine types 6, 11, 16, 18; most effective when given before sexual debut (9-14 years)", "HBV vaccine; most effective after age 18", "HPV vaccine only for women over 25 years", "Combined HPV and HSV vaccine; given after first sexual encounter"],
    answer: 0,
    explanation: "Primary prevention of cervical cancer includes HPV vaccination targeting HPV types 16 and 18 (responsible for 70% of cervical cancers) and types 6 and 11 (responsible for genital warts). The vaccine is most effective when administered before sexual debut, ideally at 9-14 years (pre-adolescent girls). India's CERVAVAC (indigenous quadrivalent HPV vaccine) has been developed and approved. Three doses are recommended if started after 15 years; two doses suffice for 9-14 year olds."
  },
  {
    id: 39,
    question: "The VIA (Visual Inspection with Acetic Acid) test for cervical cancer screening is recommended in low-resource settings primarily because:",
    options: ["It has higher sensitivity than Pap smear", "It is immediate (results available at same visit), low cost, requires no laboratory, and is suitable for single-visit approach (screen and treat)", "It detects all HPV types", "It is the only WHO-recommended test"],
    answer: 1,
    explanation: "VIA (Visual Inspection with Acetic Acid) is recommended for low-resource settings because it provides immediate results (within 1-2 minutes), is low-cost, requires no laboratory infrastructure, and enables a single-visit screen-and-treat approach (treatment with cryotherapy at the same visit). Its sensitivity is approximately 70-80% and specificity 70-80%. WHO recommends VIA-based screening every 3-5 years for women aged 30-49 years where colposcopy and cytology are unavailable."
  },
  {
    id: 40,
    question: "The current WHO recommendation for cervical cancer screening strategy, in order of preference, is:",
    options: ["Pap smear first, then VIA, then HPV testing", "HPV DNA testing as first choice, then VIA as second choice, then Pap smear as third choice", "VIA only in developing countries", "Colposcopy for all women over 25 years"],
    answer: 1,
    explanation: "WHO's 2021 updated cervical cancer screening and treatment guidelines recommend HPV DNA testing as the first-choice screening test, followed by VIA as the second choice, and cytology (Pap smear) as the third choice for settings with strong laboratory capacity. HPV testing has higher sensitivity (approximately 90%) than VIA or cytology, and when combined with appropriate follow-up, provides more effective cervical cancer prevention."
  },
  {
    id: 41,
    question: "Mammography screening for breast cancer is most commonly recommended for which age group, and at what interval?",
    options: ["Age 25-40, annually", "Age 40-74, every 1-2 years (recommendations vary by organization)", "Age 50-80, every 5 years", "Age 30-60, every 6 months"],
    answer: 1,
    explanation: "Mammography screening recommendations vary among organizations but generally target women aged 40-74 years. ACS recommends annual mammography from age 45 (with option to start at 40); USPSTF recommends biennial (every 2 years) mammography for women 40-74 years. In India, due to younger age at presentation and different risk profile, screening recommendations are adapted. Mammography reduces breast cancer mortality by approximately 15-20% in screened populations."
  },
  {
    id: 42,
    question: "Oral visual examination (OVE) as a secondary prevention strategy for oral cancer is particularly relevant in India due to high prevalence of which risk behavior?",
    options: ["Alcohol consumption only", "Smokeless tobacco use (gutka/khaini/pan masala) and betel nut chewing causing oral submucous fibrosis and leukoplakia", "Cigarette smoking in urban areas", "HPV infection in oral cavity"],
    answer: 1,
    explanation: "Oral visual examination is particularly important in India because of the high prevalence of smokeless tobacco use (gutka, khaini, pan masala) and betel nut (areca nut) chewing, which cause premalignant lesions including oral submucous fibrosis and leukoplakia. India has one of the highest incidences of oral cancer globally. OVE by trained health workers can detect premalignant lesions, and a clinical trial in Kerala demonstrated that OVE-based screening in high-risk individuals reduced oral cancer mortality."
  },
  {
    id: 43,
    question: "Betel nut (areca nut) is classified by the International Agency for Research on Cancer (IARC) as:",
    options: ["Group 2B (possibly carcinogenic)", "Group 1 (carcinogenic to humans), even without tobacco", "Group 2A (probably carcinogenic)", "Not classified as carcinogenic"],
    answer: 1,
    explanation: "IARC has classified betel nut (areca nut) as a Group 1 carcinogen (carcinogenic to humans) even in the ABSENCE of tobacco. Areca nut is associated with oral submucous fibrosis and oral cancer. The combination of areca nut with tobacco (as in gutka) significantly amplifies the carcinogenic risk. This is particularly relevant for India where areca nut chewing is culturally prevalent in many regions."
  },
  {
    id: 44,
    question: "Hepatitis B virus (HBV) vaccination as primary prevention is critically important for preventing which cancer?",
    options: ["Pancreatic cancer", "Hepatocellular carcinoma (liver cancer)", "Cholangiocarcinoma", "Colorectal cancer"],
    answer: 1,
    explanation: "HBV vaccination is a primary prevention strategy for hepatocellular carcinoma (HCC/liver cancer). Chronic HBV infection is the leading cause of HCC globally, responsible for approximately 50-55% of HCC cases. Universal infant HBV vaccination has been shown to dramatically reduce HCC incidence in countries like Taiwan. India's Universal Immunization Programme includes HBV vaccine at birth, 6 weeks, 10 weeks, and 14 weeks."
  },
  {
    id: 45,
    question: "Asbestos is classified as a Group 1 carcinogen and is primarily associated with which malignancy in occupationally exposed workers?",
    options: ["Lung adenocarcinoma only", "Mesothelioma (pleural and peritoneal) and lung cancer", "Bladder cancer", "Leukemia"],
    answer: 1,
    explanation: "Asbestos (all forms - chrysotile, crocidolite, amosite) is classified as a Group 1 carcinogen and is the primary cause of malignant mesothelioma (cancer of the pleura and peritoneum). Asbestos exposure also significantly increases lung cancer risk, particularly in smokers (synergistic effect). The latency period for mesothelioma is typically 20-50 years after exposure. Despite banning in many countries, asbestos remains in use in some industries in India."
  },
  {
    id: 46,
    question: "Benzene is a Group 1 carcinogen particularly associated with which type of cancer in occupationally exposed workers?",
    options: ["Liver cancer", "Leukemia (particularly acute myeloid leukemia - AML)", "Bladder cancer", "Mesothelioma"],
    answer: 1,
    explanation: "Benzene is classified as a Group 1 carcinogen and is primarily associated with leukemia, particularly acute myeloid leukemia (AML) and other hematological malignancies including non-Hodgkin lymphoma and multiple myeloma. Benzene is found in petroleum products, rubber industry, shoe manufacturing, and traffic-related air pollution. Workers in petrochemical, rubber, and paint industries have the highest occupational exposure."
  },
  {
    id: 47,
    question: "Vinyl chloride monomer is a Group 1 carcinogen associated with which rare cancer?",
    options: ["Mesothelioma", "Hepatic angiosarcoma (liver blood vessel tumor)", "Hepatocellular carcinoma", "Cholangiocarcinoma"],
    answer: 1,
    explanation: "Vinyl chloride monomer (VCM), used in the production of polyvinyl chloride (PVC), is classified as a Group 1 carcinogen and is specifically associated with hepatic angiosarcoma, a rare and highly aggressive cancer of the blood vessels of the liver. Workers in PVC manufacturing plants are primarily at risk. The latency period can be 10-30 years. This association was first identified in workers at B.F. Goodrich facilities in the 1970s."
  },
  {
    id: 48,
    question: "Helicobacter pylori (H. pylori) is classified as a Group 1 carcinogen associated with which cancers?",
    options: ["Esophageal cancer and colorectal cancer", "Gastric cancer (adenocarcinoma) and gastric MALT lymphoma", "Pancreatic cancer and liver cancer", "Oral cancer and pharyngeal cancer"],
    answer: 1,
    explanation: "H. pylori, classified as a Group 1 carcinogen by IARC, is causally associated with gastric adenocarcinoma (approximately 75% of non-cardia gastric cancers are attributable to H. pylori) and gastric MALT (Mucosa-Associated Lymphoid Tissue) lymphoma. H. pylori eradication has been shown to reduce gastric cancer risk and is the treatment of choice for MALT lymphoma. India has high H. pylori prevalence (70-80%), contributing to gastric cancer burden."
  },
  {
    id: 49,
    question: "Aflatoxin B1, produced by Aspergillus species contaminating stored grains and nuts, is a Group 1 carcinogen primarily associated with which cancer?",
    options: ["Colorectal cancer", "Hepatocellular carcinoma (liver cancer), synergistic with HBV", "Esophageal cancer", "Lung cancer"],
    answer: 1,
    explanation: "Aflatoxin B1 is the most potent naturally occurring carcinogen known, produced by Aspergillus flavus and A. parasiticus contaminating stored cereals, groundnuts, and spices in humid conditions. It is classified as a Group 1 carcinogen primarily associated with hepatocellular carcinoma. Crucially, aflatoxin B1 and HBV infection act SYNERGISTICALLY - individuals with both HBV infection and aflatoxin exposure have 30-fold higher HCC risk than those with HBV alone (5-fold). This is highly relevant in tropical regions including parts of India."
  },
  {
    id: 50,
    question: "Epstein-Barr virus (EBV) is associated with which of the following malignancies?",
    options: ["Nasopharyngeal carcinoma, Burkitt lymphoma, Hodgkin lymphoma, and post-transplant lymphoproliferative disorder", "Cervical cancer and anal cancer only", "Hepatocellular carcinoma and MALT lymphoma", "Kaposi's sarcoma and primary CNS lymphoma only"],
    answer: 0,
    explanation: "EBV (also known as Human Herpesvirus 4) is classified as a Group 1 carcinogen associated with multiple malignancies: nasopharyngeal carcinoma (NPC, especially in Southeast Asian and North African populations), Burkitt lymphoma (endemic form), Hodgkin lymphoma (EBV-positive cases), and post-transplant lymphoproliferative disorder (PTLD) in immunocompromised individuals. EBV is also associated with gastric carcinoma (EBV-associated gastric cancer) in a subset of gastric adenocarcinomas."
  },
];

export default questions;

const questions = [
  {
    id: 1,
    question: "According to the Global Adult Tobacco Survey India (GATS-2) 2016-17, what was the overall prevalence of tobacco use (any form) among adults aged 15 years and above in India?",
    options: ["18.4%", "28.6%", "42.4%", "12.1%"],
    answer: 1,
    explanation: "GATS-2 India (2016-17) reported that 28.6% of adults (15 years and above) used some form of tobacco, covering both smoked and smokeless forms. This represented a decline from GATS-1 (2009-10) when prevalence was 34.6%, indicating a significant reduction over seven years. Among men, tobacco use prevalence was 42.4%, and among women it was 14.2%."
  },
  {
    id: 2,
    question: "In India, which form of tobacco use is more prevalent than cigarette smoking and contributes most to the overall tobacco burden according to GATS-2 data?",
    options: ["Bidi smoking", "Smokeless tobacco (SLT) use", "Hookah use", "Cigarette smoking"],
    answer: 1,
    explanation: "According to GATS-2 (2016-17), smokeless tobacco (SLT) use at 21.4% was significantly more prevalent than smoked tobacco (10.7%) in India. Common SLT products include khaini, gutka, betel quid with tobacco, and zarda. India accounts for approximately 90% of the global smokeless tobacco burden. Bidi is the most common smoked product (8.4%), more prevalent than cigarettes (3.4%)."
  },
  {
    id: 3,
    question: "Section 6 of COTPA 2003 prohibits the sale of tobacco products to and by minors. What is the age threshold defined under this section?",
    options: ["Below 16 years", "Below 18 years", "Below 21 years", "Below 14 years"],
    answer: 1,
    explanation: "Section 6 of COTPA 2003 prohibits the sale of tobacco products to persons below 18 years of age and also prohibits the sale of tobacco products by persons below 18 years. It also bans the sale of tobacco products within 100 yards of educational institutions. These provisions aim to prevent tobacco uptake among youth by restricting their access to tobacco products."
  },
  {
    id: 4,
    question: "The WHO MPOWER package for tobacco control includes six evidence-based policies. What does the letter 'M' in MPOWER stand for?",
    options: ["Marketing restrictions on tobacco products", "Monitor tobacco use and prevention policies", "Mandate smoke-free environments", "Mobilize community action"],
    answer: 1,
    explanation: "In the WHO MPOWER package, 'M' stands for Monitor tobacco use and prevention policies. The full MPOWER package comprises: Monitor (M), Protect people from tobacco smoke (P), Offer help to quit tobacco use (O), Warn about the dangers of tobacco (W), Enforce bans on tobacco advertising, promotion and sponsorship (E), and Raise taxes on tobacco (R). This comprehensive framework supports implementation of the WHO FCTC."
  },
  {
    id: 5,
    question: "Article 13 of the WHO Framework Convention on Tobacco Control (FCTC) mandates that parties implement a comprehensive ban on which aspect of tobacco marketing?",
    options: ["Only television advertising", "All tobacco advertising, promotion, and sponsorship (TAPS)", "Only sponsorship of sporting events", "Internet advertising only"],
    answer: 1,
    explanation: "Article 13 of the WHO FCTC requires parties to implement a comprehensive ban on all tobacco advertising, promotion, and sponsorship (TAPS). The article recognizes that a comprehensive ban is necessary because partial bans allow the tobacco industry to shift promotional activity to unregulated channels. Studies show that comprehensive TAPS bans reduce tobacco consumption, particularly among youth. India's COTPA Section 5 gives effect to this obligation."
  },
  {
    id: 6,
    question: "When calculating the smoking-attributable fraction (SAF) using the formula SAF = P(RR-1) / [P(RR-1)+1], if the prevalence of smoking (P) is 30% and the relative risk (RR) of lung cancer in smokers is 15, what is the approximate SAF?",
    options: ["0.72 (72%)", "0.81 (81%)", "0.54 (54%)", "0.91 (91%)"],
    answer: 1,
    explanation: "Using SAF = P(RR-1) / [P(RR-1)+1]: P = 0.30, RR = 15, (RR-1) = 14. Numerator = 0.30 x 14 = 4.2. Denominator = 4.2 + 1 = 5.2. SAF = 4.2 / 5.2 = 0.808, approximately 0.81 or 81%. This means approximately 81% of lung cancer cases in this population would be attributable to smoking. The SAF is a measure of the proportion of disease burden that would be eliminated if the risk factor were removed."
  },
  {
    id: 7,
    question: "Passive smoking (secondhand smoke exposure) in the workplace is associated with what approximate increase in the risk of lung cancer among non-smoking workers?",
    options: ["5-10% increased risk", "20-30% increased risk", "50-60% increased risk", "No significant increased risk"],
    answer: 1,
    explanation: "Epidemiological studies and meta-analyses consistently show that non-smoking workers chronically exposed to secondhand smoke in workplaces have approximately 20-30% increased risk of developing lung cancer. This evidence formed the scientific basis for smoke-free workplace legislation globally. IARC has classified secondhand smoke as a Group 1 carcinogen. In India, COTPA Section 4 prohibits smoking in workplaces and public places to protect non-smokers."
  },
  {
    id: 8,
    question: "Concerning the price elasticity of demand for tobacco in low- and middle-income countries (LMICs), which of the following statements reflects the consensus evidence?",
    options: ["Demand for tobacco is perfectly inelastic; price increases have no effect", "A 10% increase in tobacco price reduces tobacco consumption by approximately 4-8% in LMICs", "Price increases affect consumption only in high-income countries", "Price elasticity is the same for cigarettes and smokeless tobacco"],
    answer: 1,
    explanation: "Evidence from LMICs consistently shows that the price elasticity of demand for tobacco is approximately -0.4 to -0.8, meaning a 10% increase in price reduces tobacco consumption by approximately 4-8%. LMICs tend to have higher price elasticity than high-income countries, making taxation particularly effective. WHO and the NCI Tobacco Economics report recommend raising tobacco taxes to at least 75% of the retail price as the most effective single measure to reduce tobacco use."
  },
  {
    id: 9,
    question: "The National Tobacco Control Programme (NTCP) in India is implemented through a which tier structure and what is its primary implementing unit at the district level?",
    options: ["Two-tier: State and District Health Societies", "Three-tier: National, State Tobacco Control Cells, and District Tobacco Control Cells (DTCCs)", "Four-tier: National, State, District, and Block levels equally", "Single tier: Central government directly"],
    answer: 1,
    explanation: "The NTCP operates through a three-tier structure. At the national level, the Ministry of Health and Family Welfare oversees the program. State Tobacco Control Cells (STCCs) at the state level coordinate implementation. District Tobacco Control Cells (DTCCs) are the primary implementing units, responsible for awareness campaigns, enforcement support, cessation services, and monitoring at the district level. The program was launched in 2007-08 and has been progressively scaled up."
  },
  {
    id: 10,
    question: "Evidence from large-scale studies on pictorial health warnings (PHWs) on tobacco packs shows that PHWs are most effective in which population group?",
    options: ["Long-term addicted adult smokers", "Youth and low-literacy populations who benefit most from visual communication", "Only highly educated adults who read text warnings", "PHWs have no demonstrated effectiveness"],
    answer: 1,
    explanation: "Research consistently shows that pictorial health warnings are particularly effective among youth (helping prevent uptake) and low-literacy populations who are better reached by visual messages than text alone. PHWs increase health knowledge, promote quit intentions, and reduce tobacco use. Studies from countries implementing large PHWs (Australia, Canada, Brazil) demonstrate that larger, more graphic warnings are more effective. India's 85% PHW requirement is evidence-based."
  },
  {
    id: 11,
    question: "According to WHO estimates, what percentage of all NCD deaths globally are attributable to tobacco use annually?",
    options: ["5%", "16%", "29%", "40%"],
    answer: 1,
    explanation: "WHO estimates that tobacco use causes approximately 8 million deaths per year globally, representing roughly 16% of all NCD deaths. Tobacco causes approximately 71% of all lung cancer deaths, 42% of chronic respiratory disease deaths, and about 10% of cardiovascular disease deaths. It is the leading single preventable cause of death. In India, tobacco attributable mortality is estimated at approximately 1.3 million deaths annually."
  },
  {
    id: 12,
    question: "The AUDIT-C (Alcohol Use Disorders Identification Test - Consumption) is a shortened 3-question version of the full AUDIT tool. A score of 3 or more in women and 4 or more in men on AUDIT-C indicates:",
    options: ["Alcohol dependence requiring detoxification", "Hazardous or harmful drinking warranting further assessment", "Safe drinking levels", "Need for hospitalization"],
    answer: 1,
    explanation: "The AUDIT-C consists of the first 3 questions of the full AUDIT, covering frequency of drinking, typical quantity, and frequency of heavy episodic drinking. A score of 3 or more in women and 4 or more in men indicates hazardous or harmful drinking and warrants further assessment using the full AUDIT or clinical evaluation. The AUDIT-C is widely used in primary care settings for efficient alcohol screening. It has good sensitivity (73-86%) and specificity (89-91%) for identifying unhealthy alcohol use."
  },
  {
    id: 13,
    question: "The WHO's best buys for NCD prevention include population-level dietary interventions. Which of the following is classified as a WHO 'best buy' for unhealthy diet?",
    options: ["Individual dietary counseling for all adults", "Mandatory front-of-pack nutrition labeling, reformulation of food products to reduce salt/sugar/fat, and restrictions on marketing of unhealthy foods to children", "Providing free vitamin supplements to all", "Banning all processed foods"],
    answer: 1,
    explanation: "WHO best buys for unhealthy diet at the population level include: mandatory front-of-pack nutrition labeling, food reformulation to reduce salt, sugar, and saturated fats, restrictions on marketing of unhealthy foods and beverages to children, and fiscal policies (taxes on sugary beverages). These population-level interventions are cost-effective because they reach the entire population without requiring individual behavioral change, consistent with the population strategy of Geoffrey Rose."
  },
  {
    id: 14,
    question: "The Food Safety and Standards Authority of India (FSSAI) is responsible for setting food safety standards under which legislation?",
    options: ["Prevention of Food Adulteration Act 1954", "Food Safety and Standards Act 2006", "Essential Commodities Act 1955", "Consumer Protection Act 2019"],
    answer: 1,
    explanation: "FSSAI was established under the Food Safety and Standards Act (FSSA) 2006, which replaced the Prevention of Food Adulteration Act (PFA) 1954 and consolidated multiple food-related laws. FSSAI regulates food safety, sets standards for food products including limits for trans fats, additives, contaminants, and pesticide residues, and implements front-of-pack labeling regulations. Its public health mandate includes reducing diet-related NCD risk at the population level."
  },
  {
    id: 15,
    question: "The WHO 2020 Global Physical Activity Guidelines for the first time included recommendations for which additional population group not covered in previous guidelines?",
    options: ["Pregnant women", "Children under 5 years of age and people living with chronic conditions/disabilities", "Adults over 65 years", "Adolescents aged 12-17 years"],
    answer: 1,
    explanation: "The 2020 WHO Global Guidelines on Physical Activity and Sedentary Behaviour for the first time included recommendations for children under 5 years of age and for people living with chronic conditions (such as cardiovascular disease, type 2 diabetes, cancer, and HIV) and people with disabilities. Previous guidelines (2010) did not cover these groups. The 2020 guidelines also formally recognized sedentary behavior as an independent risk factor and provided recommendations to reduce it."
  },
  {
    id: 16,
    question: "According to NFHS-5 (2019-21) data, what proportion of Indian women aged 15-49 years consume vegetables daily, and why is this a significant NCD risk indicator?",
    options: ["95% consume vegetables daily; no significant concern", "Only about 22% consume green leafy vegetables daily; inadequate vegetable intake is a major population-level diet risk factor for NCDs", "50% consume sufficient vegetables; borderline adequate", "Data not available in NFHS-5"],
    answer: 1,
    explanation: "NFHS-5 data reveal that only approximately 22% of women aged 15-49 consume green leafy vegetables daily. Inadequate fruit and vegetable consumption is a major population-level dietary risk factor for NCDs including cardiovascular disease, diabetes, and several cancers. WHO estimates that low fruit and vegetable intake causes approximately 1.7 million deaths globally per year. This data underscores the need for population-level dietary promotion policies in India."
  },
  {
    id: 17,
    question: "The rationale for using lower BMI cutoffs for defining obesity in Asian populations (overweight >= 23, obese >= 27.5 kg/m2) compared to WHO standard cutoffs is primarily based on which evidence?",
    options: ["Asian populations are naturally lighter so standard cutoffs are inappropriate", "Asian populations have higher percentage body fat and central adiposity at lower BMI values, with metabolic complications occurring at lower BMI thresholds", "Lower cutoffs are used only for administrative convenience", "Asian cutoffs are used because Asians have smaller skeletal frames"],
    answer: 1,
    explanation: "The scientific rationale for lower BMI cutoffs in Asian populations is that, at equivalent BMI, Asians (including South Asians) have higher percentage body fat, greater visceral/abdominal adiposity, and develop metabolic complications (insulin resistance, type 2 diabetes, hypertension, dyslipidemia) at lower BMI values than European populations. Studies from India show that metabolic risk increases significantly at BMI >= 23 kg/m2 and >= 27.5 kg/m2 in Indians, corresponding to WHO standard overweight and obese thresholds."
  },
  {
    id: 18,
    question: "Which of the following best describes the 'nutrition transition' phenomenon occurring in India and contributing to the NCD epidemic?",
    options: ["A shift from malnutrition to food security with no NCD implications", "A shift from traditional diets (high fiber, low fat, low sugar) toward energy-dense diets (high fat, high sugar, low fiber) combined with reduced physical activity, creating a double burden of malnutrition", "Only urban populations are affected by nutrition transition", "Nutrition transition refers only to increased protein intake"],
    answer: 1,
    explanation: "The nutrition transition in India represents a shift from traditional diets high in whole grains, pulses, and vegetables toward energy-dense, nutrient-poor diets high in saturated fats, refined carbohydrates, added sugars, and salt, combined with reduced physical activity due to mechanization and urbanization. This creates India's 'double burden of malnutrition' - persistent undernutrition alongside rapidly rising overweight, obesity, and diet-related NCDs. Both urban and increasingly rural populations are affected."
  },
  {
    id: 19,
    question: "The IDF worldwide definition of metabolic syndrome (2006) requires central obesity plus at least TWO of the following additional criteria. Which option correctly lists the four additional criteria?",
    options: ["Fasting glucose >= 126 mg/dL, TG >= 200 mg/dL, HDL < 40 mg/dL (men) or < 50 mg/dL (women), BP >= 140/90 mmHg", "Fasting glucose >= 100 mg/dL, TG >= 150 mg/dL, HDL < 40 mg/dL (men) or < 50 mg/dL (women), BP >= 130/85 mmHg", "Fasting glucose >= 110 mg/dL, TG >= 175 mg/dL, HDL < 35 mg/dL, BP >= 135/90 mmHg", "Fasting glucose >= 100 mg/dL, TG >= 150 mg/dL, LDL >= 130 mg/dL, BP >= 130/85 mmHg"],
    answer: 1,
    explanation: "The IDF 2006 metabolic syndrome definition requires central obesity (obligatory criterion) plus at least 2 of: (1) Raised triglycerides >= 150 mg/dL or on treatment; (2) Reduced HDL-C < 40 mg/dL in men, < 50 mg/dL in women, or on treatment; (3) Raised blood pressure >= 130 mmHg systolic or >= 85 mmHg diastolic, or on treatment; (4) Raised fasting plasma glucose >= 100 mg/dL or previously diagnosed type 2 diabetes. Metabolic syndrome prevalence in India is estimated at 25-40% of adults."
  },
  {
    id: 20,
    question: "The term 'ultra-processed foods' (Group 4 in NOVA classification) is best characterized by which feature?",
    options: ["Foods that have been cooked or heated", "Industrial formulations containing mostly food-derived substances and additives with little or no whole food, designed for hyper-palatability and long shelf life", "Any food that has been refrigerated", "Foods with more than 5 ingredients"],
    answer: 1,
    explanation: "NOVA Group 4 ultra-processed foods are industrial formulations that typically contain little or no whole food. They consist mostly of chemically modified food substances (refined starches, hydrogenated oils, hydrolyzed proteins) plus additives including artificial flavors, colors, emulsifiers, preservatives, and sweeteners. Examples include packaged snacks, instant noodles, carbonated drinks, and reconstituted meat products. Studies link UPF consumption with obesity, type 2 diabetes, cardiovascular disease, cancer, and all-cause mortality."
  },
  {
    id: 21,
    question: "The PREDIMED trial (Prevención con Dieta Mediterránea) provided level 1 evidence for which dietary intervention in cardiovascular disease prevention?",
    options: ["Low-fat diet reduces cardiovascular events by 30%", "Mediterranean diet supplemented with olive oil or nuts reduces major cardiovascular events by approximately 30% compared to a low-fat control diet", "High-protein diet prevents myocardial infarction", "Gluten-free diet reduces stroke risk"],
    answer: 1,
    explanation: "The PREDIMED trial (published 2013, re-analyzed 2018) was a randomized controlled trial in Spain involving 7,447 high-risk participants. It demonstrated that a Mediterranean diet supplemented with extra-virgin olive oil or mixed nuts reduced the incidence of major cardiovascular events (MI, stroke, cardiovascular death) by approximately 30% compared to a low-fat control diet. This is one of the strongest RCT-level dietary evidence for cardiovascular prevention through a whole-diet approach."
  },
  {
    id: 22,
    question: "The average daily salt consumption in India, as estimated by dietary surveys, compared to the WHO recommended target of less than 5 grams per day, is approximately:",
    options: ["3-4 grams per day (below WHO target)", "8-11 grams per day (exceeding WHO target by 60-120%)", "5 grams per day (meeting WHO target)", "15-20 grams per day"],
    answer: 1,
    explanation: "Dietary surveys estimate India's average salt consumption at approximately 8-11 grams per day, well above the WHO target of less than 5 grams per day. High salt intake is the leading dietary risk factor for hypertension. Sources of dietary salt in India include salt added during cooking (dominant source unlike Western countries), processed foods, and naturally occurring sodium. Population-level salt reduction strategies are a priority WHO best buy for NCD prevention."
  },
  {
    id: 23,
    question: "The National Institute of Nutrition (NIN) Dietary Guidelines for Indians (2011, revised 2024) recommend consuming how many food groups daily for a balanced diet?",
    options: ["Three food groups (cereals, vegetables, protein)", "Seven food groups including cereals, pulses, milk, eggs/fish/meat, fruits, vegetables, and fats/oils", "Five food groups based on the food pyramid", "Only plant-based food groups"],
    answer: 1,
    explanation: "NIN's Dietary Guidelines for Indians recommend consuming foods from all major food groups daily: cereals and millets (major energy source), pulses and legumes (protein), milk and milk products (calcium), eggs, fish, and meat or plant-protein alternatives, vegetables (including dark green leafy vegetables), fruits, and fats and oils in moderation. The guidelines also recommend limiting salt to 5g/day, sugar to below 10% of total energy, and processed/ultra-processed foods."
  },
  {
    id: 24,
    question: "Sugar-sweetened beverage (SSB) consumption is a significant NCD risk factor. Evidence from prospective cohort studies linking SSB consumption to type 2 diabetes risk shows approximately what increase in risk per additional serving per day?",
    options: ["No significant association", "Approximately 13-26% increased risk of type 2 diabetes per additional daily serving", "50% increased risk per serving", "Only a risk factor in children, not adults"],
    answer: 1,
    explanation: "Meta-analyses of prospective cohort studies show that each additional daily serving of sugar-sweetened beverages (approximately 250-355 mL) is associated with approximately 13-26% increased risk of type 2 diabetes, independent of BMI and total caloric intake. The mechanism involves direct effects of rapidly absorbed sugars on glycemic load and insulin resistance, as well as indirect effects through weight gain. SSB taxation is a WHO best buy for NCD prevention."
  },
  {
    id: 25,
    question: "Geoffrey Rose's 'prevention paradox' states that a measure bringing large community benefit may offer little benefit to individual participants. Which example best illustrates this paradox?",
    options: ["Treating patients with established hypertension with medications", "Population-wide moderate reduction in salt intake preventing many strokes, with each individual's personal absolute risk reduction being small", "Screening high-risk individuals for colorectal cancer", "Providing antihypertensive drugs to all adults over 60"],
    answer: 1,
    explanation: "Geoffrey Rose's prevention paradox is well illustrated by population-level salt reduction: a shift of the entire population's blood pressure distribution downward by even 2-3 mmHg through salt reduction prevents large numbers of cardiovascular events at the population level, yet any individual's personal risk reduction is very small. This contrasts with the high-risk strategy where identifiable individuals gain substantial personal benefit. The paradox explains why population strategies can be politically difficult despite being highly effective."
  },
  {
    id: 26,
    question: "In the framework of prevention levels for NCDs, which level of prevention does tobacco taxation represent?",
    options: ["Primary prevention only (after risk factor is present)", "Primordial prevention (preventing risk factor development) AND primary prevention (reducing existing tobacco use)", "Secondary prevention (early detection)", "Tertiary prevention (preventing complications)"],
    answer: 1,
    explanation: "Tobacco taxation operates at multiple prevention levels simultaneously. It is primordial prevention when it discourages young people from ever starting to smoke, preventing adoption of the risk factor itself. It is primary prevention when it motivates existing smokers to quit, thereby removing the risk factor before disease develops. This dual action makes tobacco taxation one of the most cost-effective public health interventions. The WHO MPOWER package places tobacco taxation (R = Raise taxes) as a cornerstone measure."
  },
  {
    id: 27,
    question: "The Diabetes Prevention Program (DPP) trial's lifestyle intervention achieved its 58% reduction in diabetes incidence through which specific behavioral targets?",
    options: ["Reducing caloric intake by 1000 kcal/day and exercising 300 minutes/week", "Achieving at least 7% weight loss through reduced fat and caloric intake, and at least 150 minutes per week of moderate physical activity", "Achieving BMI below 25 kg/m2 and zero alcohol consumption", "Low-carbohydrate diet and daily walking for 60 minutes"],
    answer: 1,
    explanation: "The DPP lifestyle intervention had two specific behavioral goals: (1) at least 7% weight loss from baseline body weight through reduced dietary fat and caloric intake, and (2) at least 150 minutes per week of moderate-intensity physical activity (equivalent to brisk walking). The intervention was delivered through 16 individual sessions over 24 weeks followed by monthly contacts. Achieving these targets reduced progression from pre-diabetes to type 2 diabetes by 58% over 3 years compared to placebo."
  },
  {
    id: 28,
    question: "Population-level prevalence of pre-diabetes (impaired fasting glucose or impaired glucose tolerance) in India is estimated to be approximately what proportion of the adult population?",
    options: ["5-8% of adults", "15-20% of adults", "35-40% of adults", "50-55% of adults"],
    answer: 1,
    explanation: "Studies including ICMR-INDIAB (2017) and various state-level studies estimate pre-diabetes prevalence at approximately 15-20% of the adult population in India (varying by state and urban/rural residence). This represents a huge reservoir of individuals at high risk of developing type 2 diabetes. Given India's adult population of approximately 900 million, this translates to approximately 135-180 million pre-diabetic individuals, making population-level prevention an enormous public health priority."
  },
  {
    id: 29,
    question: "The NPCDCS (National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke) cervical cancer screening protocol recommends VIA-based screening for women in which age group and at what frequency?",
    options: ["All women from age 18, annually", "Women aged 30-65 years, every 5 years", "Women aged 25-49 years, once in a lifetime", "Women aged 40-70 years, every 3 years"],
    answer: 1,
    explanation: "Under the NPCDCS guidelines, VIA-based opportunistic screening for cervical cancer is recommended for women aged 30-65 years, with the test to be offered every 5 years. This targets the age group with the highest yield for detecting pre-cancerous lesions (CIN 2+). At Health and Wellness Centers under Ayushman Bharat, trained female health workers perform VIA screening, and positive cases are referred to higher facilities for colposcopy and management."
  },
  {
    id: 30,
    question: "The WHO's REPLACE initiative for eliminating industrially produced trans fats consists of six action areas. What does the acronym REPLACE stand for?",
    options: ["Remove, Eliminate, Phase, Limit, Assess, Control, Enforce", "Review dietary fat intake, Eliminate trans fats, Promote healthy fats, Legislation, Assessment, Create awareness, Evaluate progress", "Review policies, Eliminate trans fat sources, Promote alternatives, Legislate, Assess and monitor, Create awareness, Evaluate", "The acronym covers: Review, Eliminate, Promote, Legislate, Assess, Create awareness, Evaluate"],
    answer: 3,
    explanation: "WHO's REPLACE (2018) initiative comprises 6 strategic actions: Review dietary sources of industrially produced trans fats and the landscape for required policy change; Eliminate industrially produced trans fats by developing strong policies; Promote the replacement of industrially produced trans fats with healthier fats and oils; Legislate or enact regulatory actions to eliminate industrially produced trans fats; Assess and monitor trans fats content in food supply and changes in trans fat consumption; Create awareness of the negative health impact of trans fats. The target is global elimination by 2023."
  },
  {
    id: 31,
    question: "Mexico's sugar-sweetened beverage (SSB) tax, implemented in 2014 as a peso-per-liter excise tax, is considered a landmark policy. Evidence from evaluation studies showed what change in SSB purchasing in the first year?",
    options: ["No change in SSB purchasing", "Approximately 6-12% reduction in SSB purchasing, with larger reductions in low-income households", "50% reduction in SSB purchasing", "Increase in SSB purchasing due to income effects"],
    answer: 1,
    explanation: "Evaluation studies of Mexico's SSB tax (1 peso per liter, approximately 10% of average price) showed approximately 6-12% reduction in SSB purchases in the first year, with reductions sustained and growing in subsequent years. Crucially, the largest reductions were observed in low-income households (17% reduction), who are most affected by price changes and bear the greatest burden of obesity-related NCDs. This evidence has informed SSB taxation policies in many countries including India's health cess on aerated drinks."
  },
  {
    id: 32,
    question: "Front-of-pack labeling (FOPL) systems for foods are intended to help consumers make healthier choices. Which FOPL system uses a five-color coding scheme based on nutrient profiling and is backed by the strongest evidence for improving consumer food choices?",
    options: ["India's FSSAI star rating system", "UK's Multiple Traffic Light (MTL)/Nutri-Score hybrid", "The Nutriscore (5-color grading from A to E based on overall nutritional quality)", "Guideline Daily Amounts (GDA) labels"],
    answer: 2,
    explanation: "Nutriscore, developed in France and adopted by several European countries, uses a 5-color, 5-letter scale (dark green A to dark red E) based on an algorithm assessing overall nutritional quality per 100g (positive nutrients like fiber, protein, fruits/vegetables; and negative components like sugar, sodium, saturated fat). Systematic reviews show Nutriscore improves consumer ability to identify healthier products compared to GDA labels or traffic light systems. FSSAI is developing an Indian FOPL system considering consumer behavior in the Indian context."
  },
  {
    id: 33,
    question: "Workplace wellness programs targeting NCD risk factors are evaluated using which key metric that assesses economic returns?",
    options: ["Number of employees attending health screenings", "Return on Investment (ROI), with evidence suggesting ROI of approximately $3-6 savings for every $1 invested in comprehensive programs", "Number of sick days taken by employees", "Employee satisfaction scores"],
    answer: 1,
    explanation: "Workplace wellness programs targeting tobacco cessation, physical activity, healthy eating, and hypertension management are evaluated using Return on Investment (ROI). Systematic reviews and meta-analyses suggest that comprehensive workplace wellness programs yield approximately $3-6 in savings (reduced healthcare costs, reduced absenteeism, improved productivity) for every $1 invested. WHO recommends workplace wellness as part of a multi-sector approach to NCD prevention. In India, large industries and public sector undertakings are encouraged to implement workplace health programs."
  },
  {
    id: 34,
    question: "Population-level salt reduction strategies include food reformulation, public education, and fiscal measures. Evidence from Finland's salt reduction program, which reduced average salt intake from 12g/day to 9g/day over decades, showed which population health outcome?",
    options: ["No change in cardiovascular mortality", "Significant reduction in stroke and coronary heart disease mortality (approximately 75-80% decline in cardiovascular mortality over 30 years)", "Increase in cardiovascular events due to iodine deficiency", "Only blood pressure reduction with no mortality benefit"],
    answer: 1,
    explanation: "Finland's salt reduction program, initiated in the 1970s with mandatory front-of-pack 'high salt' labeling and food industry reformulation, successfully reduced average salt intake from approximately 12g/day to 9g/day. Over 30 years, Finland recorded approximately 75-80% decline in both stroke and coronary heart disease mortality. While multiple factors contributed, this is considered one of the most dramatic improvements in cardiovascular mortality achieved through a public health program, and validates population-level salt reduction as an effective strategy."
  },
  {
    id: 35,
    question: "The 'Polycap' polypill trial conducted primarily in India evaluated which population and showed what primary outcome?",
    options: ["Patients with established MI; 40% reduction in recurrence", "Individuals with at least one cardiovascular risk factor; significant reductions in blood pressure and LDL cholesterol compared to individual components (TIPS trial)", "Primary prevention in all adults over 50; no benefit", "Patients with heart failure; improved ejection fraction"],
    answer: 1,
    explanation: "The TIPS (The Indian Polycap Study) trial evaluated Polycap (containing thiazide, atenolol, ramipril, simvastatin, and aspirin) in individuals aged 45-80 years with at least one cardiovascular risk factor. The trial demonstrated significant reductions in blood pressure (7.4 mmHg systolic), heart rate, and LDL cholesterol compared to individual components, with a safety profile similar to placebo. Follow-up trials (TIPS-3, 2021) showed Polycap reduced major cardiovascular events by 21% in intermediate-risk individuals, supporting the polypill concept for primary prevention."
  },
  {
    id: 36,
    question: "In the context of NCD surveillance, what does the STEPS survey methodology developed by WHO measure, and how often has India conducted STEPS surveys?",
    options: ["STEPS measures infectious disease burden annually; India has conducted it 5 times", "STEPS is a standardized approach measuring behavioral risk factors (Step 1), physical measurements (Step 2), and biochemical measurements (Step 3) for NCDs; India conducted its first national STEPS survey in 2017-18", "STEPS measures only tobacco and alcohol use", "STEPS is a clinical assessment tool for individual patients"],
    answer: 1,
    explanation: "WHO STEPS (STEPwise approach to Surveillance) is a standardized methodology for collecting NCD risk factor data at the population level. Step 1 collects behavioral data (tobacco, alcohol, diet, physical activity) through questionnaires. Step 2 adds physical measurements (height, weight, blood pressure). Step 3 adds biochemical measurements (blood glucose, cholesterol). India conducted its first comprehensive national STEPS survey in 2017-18, providing the most complete national data on NCD risk factor prevalence, showing 28.5% hypertension prevalence, 7.3% diabetes prevalence, and high tobacco use rates."
  },
  {
    id: 37,
    question: "The WHO Global Action Plan for the Prevention and Control of NCDs 2013-2030 sets a target of reducing premature mortality from the four major NCDs by what percentage by 2030?",
    options: ["10% reduction", "25% reduction (one third reduction by 2030 from 2015 baseline)", "50% reduction", "15% reduction"],
    answer: 1,
    explanation: "The WHO Global Action Plan for NCDs 2013-2030 (updated from original 2025 target) aims for a one-third reduction in premature mortality (deaths between ages 30-70 years) from cardiovascular disease, cancer, diabetes, and chronic respiratory diseases by 2030. This is achieved through a combination of risk factor reduction (25% reduction in tobacco use, 10% reduction in harmful alcohol use, halt the rise in obesity and diabetes) and strengthening health systems for NCD management. India has incorporated these targets into its National NCD Action Plan."
  },
  {
    id: 38,
    question: "The first indigenous HPV vaccine developed in India, CERVAVAC, was manufactured by which institution and what strains does it target?",
    options: ["ICMR; targets HPV 16, 18, 31, 45", "Serum Institute of India; targets HPV 6, 11, 16, and 18 (quadrivalent)", "Bharat Biotech; targets HPV 16 and 18 only (bivalent)", "AIIMS; targets all oncogenic HPV strains"],
    answer: 1,
    explanation: "CERVAVAC is India's first indigenous quadrivalent HPV vaccine, developed and manufactured by the Serum Institute of India in collaboration with the Department of Biotechnology. It targets HPV types 6, 11, 16, and 18. Types 16 and 18 are responsible for approximately 70% of cervical cancers globally and in India, while types 6 and 11 cause genital warts. CERVAVAC was approved in 2022 and included in the Universal Immunization Programme for girls aged 9-14 years, making HPV vaccination accessible at lower cost."
  },
  {
    id: 39,
    question: "The sensitivity and specificity of VIA (Visual Inspection with Acetic Acid) for detecting CIN 2+ (moderate to severe cervical pre-cancer) compared to colposcopy-directed biopsy is approximately:",
    options: ["Sensitivity 30-40%, Specificity 95-99% (very specific, not sensitive)", "Sensitivity 70-80%, Specificity 70-80% (moderate sensitivity and specificity)", "Sensitivity 95-98%, Specificity 50-60% (high sensitivity, low specificity)", "Sensitivity 50-60%, Specificity 60-70%"],
    answer: 1,
    explanation: "Systematic reviews report VIA sensitivity for detecting CIN 2+ approximately 70-80% and specificity approximately 70-80%, with variation depending on provider training, population, and reference standard. While HPV DNA testing has higher sensitivity (approximately 90%), VIA's advantage in low-resource settings is immediate results allowing same-visit treatment. Provider training significantly impacts VIA performance. The WHO recommends VIA as a second-choice screening method after HPV testing."
  },
  {
    id: 40,
    question: "Breast cancer mammography screening programs are evaluated using several metrics. What is 'over-diagnosis' in the context of mammography screening, and why is it a public health concern?",
    options: ["Diagnosing cancer incorrectly as benign", "Detection and treatment of cancers that would never have caused symptoms or death during a woman's lifetime, leading to unnecessary treatment and harm", "Missing cancers that are present (false negatives)", "Diagnosing benign conditions as cancer"],
    answer: 1,
    explanation: "Over-diagnosis in mammography screening refers to the detection and treatment of breast cancers that would never have progressed to cause symptoms or death during the woman's natural lifetime. These include slow-growing tumors and ductal carcinoma in situ (DCIS) that may regress spontaneously. Over-diagnosis is a significant public health concern because it leads to unnecessary surgery, radiation, and chemotherapy with attendant harm, anxiety, and cost. Estimates of mammography over-diagnosis range from 11% to 52% of screen-detected cancers, contributing to ongoing debate about optimal screening strategies."
  },
  {
    id: 41,
    question: "The 'screen-and-treat' approach for cervical cancer prevention, using VIA followed by immediate cryotherapy, is recommended for which clinical scenario?",
    options: ["Any VIA positive result regardless of lesion size or location", "VIA positive results where the lesion is small enough for cryotherapy (does not extend into the canal, covers less than 75% of the cervix, and is not suspicious for invasive cancer)", "All women over 40 years regardless of VIA result", "Only for women with confirmed HPV infection"],
    answer: 1,
    explanation: "The single-visit screen-and-treat approach recommends immediate cryotherapy for VIA-positive women when the lesion meets specific criteria: the lesion should not extend into the endocervical canal, should cover less than 75% of the ectocervix, and should not be suspicious for invasive cancer. Women not meeting criteria are referred for colposcopy. This approach maximizes the benefit of single-visit screening by avoiding loss-to-follow-up between screening and treatment visits, which is a major problem in low-resource settings."
  },
  {
    id: 42,
    question: "The Kerala Oral Cancer Prevention Trial (by Sankaranarayanan et al.) demonstrated that oral visual examination (OVE) by trained health workers reduced oral cancer mortality in which population?",
    options: ["All adults regardless of risk behavior", "Tobacco users and alcohol drinkers who underwent periodic OVE screening had significant reduction in oral cancer mortality (approximately 34% in high-risk subjects)", "Only patients with existing leukoplakia", "Only women above 45 years"],
    answer: 1,
    explanation: "The landmark cluster randomized controlled trial by Sankaranarayanan et al. in Kerala demonstrated that three rounds of OVE screening at 3-year intervals significantly reduced oral cancer mortality among high-risk subjects (tobacco users and/or alcohol drinkers). The intervention arm showed approximately 34% reduction in oral cancer mortality among high-risk individuals who complied with screening. This is one of the few RCTs demonstrating mortality reduction from cancer screening in a low-resource setting and established evidence for OVE in India."
  },
  {
    id: 43,
    question: "Population Attributable Fraction (PAF) for cancer due to tobacco in India is highest for which cancer site?",
    options: ["Breast cancer", "Cervical cancer", "Lung cancer (and oral cavity cancer due to smokeless tobacco)", "Colorectal cancer"],
    answer: 2,
    explanation: "The PAF for tobacco (both smoked and smokeless forms) in India is highest for lung cancer (approximately 85-90% of lung cancers attributable to tobacco) and oral cavity/oropharyngeal cancers (approximately 80-85% attributable to tobacco and areca nut, reflecting India's unique smokeless tobacco burden). The combination of bidi and cigarette smoking for lung cancer and gutka/khaini use for oral cancers creates India's distinctive tobacco-attributable cancer profile. India has one of the highest burdens of oral cancer globally due to smokeless tobacco use."
  },
  {
    id: 44,
    question: "Helicobacter pylori eradication as a primary prevention strategy for gastric cancer has been supported by evidence from which type of studies?",
    options: ["Only case-control studies", "Randomized controlled trials showing that H. pylori eradication reduces gastric cancer incidence by approximately 30-50% in high-incidence populations", "Only animal experiments", "Ecological studies with no RCT evidence"],
    answer: 1,
    explanation: "Multiple RCTs, particularly from East Asian high-incidence populations (China, Japan, South Korea), have demonstrated that H. pylori eradication with antibiotic therapy reduces the incidence of gastric cancer by approximately 30-50%. A Cochrane review and multiple meta-analyses support this evidence. The benefit is greater when eradication occurs before premalignant lesions (intestinal metaplasia) develop. This has led to population-level H. pylori eradication programs in some high-incidence countries and WHO recognition of H. pylori eradication as a cancer prevention strategy."
  },
  {
    id: 45,
    question: "Aflatoxin contamination of foods is monitored by food safety authorities as part of which regulatory framework, and what is the maximum permissible limit for aflatoxin B1 in food commodities in India?",
    options: ["No regulatory limits exist in India for aflatoxins", "FSSAI regulations set limits of 10 micrograms per kilogram (10 ppb) for aflatoxin B1 in food", "FSSAI permits up to 50 micrograms per kg for aflatoxin B1", "Only aflatoxin M1 in milk is regulated; groundnut aflatoxins are unregulated"],
    answer: 1,
    explanation: "FSSAI regulations set maximum limits for aflatoxins in foods in India. The limit for total aflatoxins (B1+B2+G1+G2) in most food commodities is 10 micrograms per kilogram (10 ppb), with aflatoxin B1 specifically limited to 10 ppb. For aflatoxin M1 in milk, the limit is 0.5 ppb. India also has aflatoxin limits for groundnuts, spices, and maize. Aflatoxin monitoring is important given India's tropical climate favoring Aspergillus growth and significant groundnut, spice, and cereal production."
  },
  {
    id: 46,
    question: "Occupational exposure to which carcinogen is specifically associated with increased risk of bladder cancer, and in which occupational groups is this risk highest?",
    options: ["Benzene; rubber workers", "Aromatic amines (beta-naphthylamine, benzidine); dye, rubber, and leather workers", "Asbestos; construction workers", "Vinyl chloride; PVC workers"],
    answer: 1,
    explanation: "Aromatic amines, particularly beta-naphthylamine and benzidine, are IARC Group 1 carcinogens specifically associated with bladder cancer. Workers in dye manufacturing, rubber industry, leather goods manufacturing, and printing are at highest risk. These chemicals are absorbed through the skin and lungs, metabolized to carcinogenic N-hydroxy compounds, and concentrated in the bladder during excretion, causing urothelial damage. Occupational bladder cancer prevention requires workplace exposure monitoring, substitution with safer chemicals, and personal protective equipment."
  },
  {
    id: 47,
    question: "UV radiation as a risk factor for skin cancer: WHO's INTERSUN program promotes which primary prevention measure at the population level to reduce UV exposure?",
    options: ["Avoiding all outdoor activity", "Use of UV Index to guide sun protection behavior, promotion of sun-protective clothing, sunscreens, and shade-seeking especially between 10am-4pm when UV is highest", "Mandatory sunscreen use laws", "Reducing stratospheric ozone depletion"],
    answer: 1,
    explanation: "WHO's INTERSUN Global UV Project promotes population-level skin cancer prevention through the UV Index - a standardized measure of UV radiation intensity published in weather forecasts. Prevention messages include using the UV Index to guide protection decisions, seeking shade (especially 10am-4pm), wearing sun-protective clothing and hats, using SPF 30+ broad-spectrum sunscreen, and avoiding sun beds. In India, although skin cancer is less common than in fair-skinned populations, UV protection is increasingly important especially in outdoor workers."
  },
  {
    id: 48,
    question: "The WHO best buys for cancer prevention include which set of interventions classified as highly cost-effective with strong evidence?",
    options: ["Screening all adults over 30 for all cancers", "Tobacco taxation and smoke-free policies, HPV vaccination, hepatitis B vaccination, and VIA-based cervical cancer screening in LMICs", "Providing chemoprevention drugs (tamoxifen) to all women", "Universal cancer genetic testing programs"],
    answer: 1,
    explanation: "WHO best buys for cancer prevention include: tobacco taxation and comprehensive tobacco control (MPOWER) for tobacco-related cancers; HPV vaccination for cervical cancer prevention; Hepatitis B vaccination for liver cancer prevention; VIA-based cervical cancer screening for early detection in LMICs; and hepatitis C treatment for liver cancer prevention. These are considered best buys because they are highly cost-effective, feasible in resource-limited settings, and address the largest preventable cancer burdens globally."
  },
  {
    id: 49,
    question: "In cancer screening program evaluation, 'lead time bias' refers to which phenomenon that can falsely appear to show benefit?",
    options: ["Bias introduced by selecting healthier individuals for screening (healthy volunteer effect)", "The apparent improvement in survival after diagnosis that occurs simply because cancer is detected earlier, without the patient actually living longer (earlier detection extends time from diagnosis to death without changing time from birth to death)", "Detecting slow-growing cancers that would not have caused death (over-diagnosis)", "Differences in treatment quality between screened and unscreened groups"],
    answer: 1,
    explanation: "Lead time bias occurs when screening detects cancer earlier in its natural history, increasing the apparent survival time from diagnosis to death, without actually extending the patient's total lifespan. For example, if cancer would normally present symptomatically at age 60 and cause death at age 63 (3-year survival), but screening detects it at age 57, the patient still dies at 63 but now appears to have had 6-year survival. This falsely appears to show benefit. Properly designed randomized controlled trials measuring cause-specific mortality rather than survival are needed to avoid lead time bias."
  },
  {
    id: 50,
    question: "ICMR's cancer research priorities for NCD prevention in India focus primarily on which areas given India's specific cancer epidemiology?",
    options: ["Exclusively on chemotherapy drug development", "Population-based cancer registries to establish incidence/mortality data, tobacco-related cancer prevention research, cervical cancer screening optimization, oral cancer early detection, and cancer risk factor surveillance in Indian populations", "Only genetic research on cancer susceptibility", "Clinical trials of imported cancer drugs"],
    answer: 1,
    explanation: "ICMR's cancer research priorities reflect India's cancer burden profile: (1) expanding the National Cancer Registry Programme (NCRP) to improve population-based incidence and mortality data; (2) tobacco-related cancer prevention research given India's unique smokeless and smoked tobacco burden; (3) optimizing cervical cancer screening for Indian conditions including evaluation of HPV testing vs VIA; (4) oral cancer early detection and OVE program optimization; (5) establishing cancer risk factor PAFs using Indian data; and (6) evaluating indigenous CERVAVAC HPV vaccine effectiveness. These priorities address cancers where India has the highest burden and greatest prevention potential."
  },
];

export default questions;

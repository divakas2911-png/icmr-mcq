const questions = [
  {
    id: 1,
    question: "According to the WHO Global Health Estimates, the total number of deaths attributable to cardiovascular diseases globally per year is approximately:",
    options: ["9.4 million", "12.6 million", "17.9 million", "22.3 million"],
    answer: 2,
    explanation: "WHO estimates that cardiovascular diseases (CVDs) kill approximately 17.9 million people every year, representing 32% of all global deaths. Of these, 85% are due to heart attacks and strokes. More than three quarters of CVD deaths occur in low- and middle-income countries. This figure makes CVD the leading cause of death globally, ahead of all infectious diseases, cancers, and other non-communicable diseases."
  },
  {
    id: 2,
    question: "The ICMR-GBD India study published in The Lancet (2017) found that among Indian states, which group showed the highest proportional CVD burden as percentage of total DALYs?",
    options: [
      "Empowered Action Group (EAG) states like UP and Bihar",
      "Southern states and high-income states like Kerala, Tamil Nadu, and Punjab",
      "North-eastern states with tribal populations",
      "All states showed a uniform CVD burden of approximately 14% of DALYs"
    ],
    answer: 1,
    explanation: "The ICMR-GBD India study found that more epidemiologically advanced states - particularly southern and high-income states like Kerala, Tamil Nadu, Andhra Pradesh, Punjab, and Goa - showed the highest proportional CVD burden as a percentage of total DALYs, consistent with their more advanced epidemiological transition. In contrast, EAG states like UP, Bihar, Rajasthan, and Madhya Pradesh had a lower proportional CVD burden but higher burden from communicable diseases and child health conditions. This heterogeneity within India reflects simultaneous stages of epidemiological transition across states."
  },
  {
    id: 3,
    question: "In terms of premature cardiovascular mortality (deaths in 30-69 year age group), India compared to high-income countries shows:",
    options: [
      "Similar rates of premature CVD deaths after age-standardization",
      "Lower premature CVD mortality due to predominantly vegetarian dietary patterns",
      "Two to three times higher age-standardized premature CVD mortality rates",
      "Higher premature CVD mortality only in men, not in women"
    ],
    answer: 2,
    explanation: "India has substantially higher age-standardized premature CVD mortality (in the 30-69 year age group) compared to high-income countries - approximately 2 to 3 times higher. South Asians develop CVD a decade earlier than Western populations. This translates to enormous lost productive years - the GBD study estimates India loses significantly more years of life lost (YLL) per capita from CVD than high-income countries. The premature CVD mortality burden reflects inadequate primary prevention, late diagnosis, poor risk factor control, and limited access to emergency cardiac care."
  },
  {
    id: 4,
    question: "The thin-fat phenotype in South Asians, relevant to the South Asian paradox in CVD risk, is characterized by:",
    options: [
      "Low BMI with proportionally low muscle mass but also low fat mass",
      "Normal or low BMI with disproportionately high visceral and truncal adiposity, insulin resistance, and elevated triglycerides",
      "High waist circumference due to skeletal frame differences rather than excess fat",
      "Normal body composition but elevated inflammatory markers from genetic predisposition"
    ],
    answer: 1,
    explanation: "The thin-fat phenotype describes South Asians who appear lean by conventional BMI standards but have: excess visceral (intra-abdominal) fat, increased ectopic fat deposits in liver and skeletal muscle, lower skeletal muscle mass, insulin resistance, dyslipidemia (elevated triglycerides and low HDL), and higher fasting glucose. This phenotype confers high metabolic and cardiovascular risk despite a 'normal' BMI. Barker's hypothesis and developmental programming (nutritional deprivation in utero followed by nutritional abundance in adulthood) partially explains this. WHO now recommends lower BMI cut-offs for Asians: overweight at 23 kg/m2, obesity at 27.5 kg/m2."
  },
  {
    id: 5,
    question: "In the INTERHEART study, among the 9 modifiable risk factors identified, which single factor had the highest population attributable risk (PAR%) for acute MI globally?",
    options: [
      "Hypertension (PAR ~43%)",
      "Dyslipidemia - abnormal ApoB/ApoA1 ratio (PAR ~49%)",
      "Smoking (PAR ~36%)",
      "Psychosocial factors including stress and depression (PAR ~33%)"
    ],
    answer: 1,
    explanation: "In the INTERHEART study (Yusuf et al., Lancet 2004), a case-control study spanning 52 countries with over 27,000 participants, abnormal lipids (measured as ApoB/ApoA1 ratio) had the highest PAR% at approximately 49% globally for first MI. Smoking was second (~36%), followed by psychosocial factors (~33%), abdominal obesity (~20%), hypertension (~18%), diabetes (~10%), low daily fruit/vegetable consumption (~14%), physical inactivity (~12%), and alcohol (~7%). Combined, the 9 factors accounted for >90% PAR for first MI. Protective factors (fruit/vegetable consumption, regular exercise, alcohol in moderation) reduced risk."
  },
  {
    id: 6,
    question: "Omran's model of epidemiological transition describes four stages. Which stage is characterized by degenerative and man-made diseases (CVD, cancer) as the predominant causes of mortality, with life expectancy at 50-75 years?",
    options: [
      "Stage 1: Age of Pestilence and Famine",
      "Stage 2: Age of Receding Pandemics",
      "Stage 3: Age of Degenerative and Man-made Diseases",
      "Stage 4: Age of Delayed Degenerative Diseases"
    ],
    answer: 2,
    explanation: "Omran's epidemiological transition model (1971): Stage 1 (Age of Pestilence and Famine) - infectious diseases dominate, high mortality, life expectancy 20-40 years; Stage 2 (Age of Receding Pandemics) - declining infectious disease mortality, life expectancy 30-50 years; Stage 3 (Age of Degenerative and Man-made Diseases) - NCDs including CVD and cancer become predominant, life expectancy 50-75 years; Stage 4 (Age of Delayed Degenerative Diseases) - CVD mortality declines due to prevention and treatment advances, life expectancy >75 years. Olshansky and Ault added Stage 5 (re-emerging infectious diseases). India is heterogeneously distributed across stages 2-4."
  },
  {
    id: 7,
    question: "The Sample Registration System (SRS) Medical Certificate of Cause of Death (MCCD) system in India has a major limitation in estimating CVD mortality because:",
    options: [
      "The SRS only covers urban areas, missing rural CVD deaths entirely",
      "Less than 25% of deaths in India are registered with a medically certified cause, with majority assigned through verbal autopsy leading to misclassification",
      "CVD deaths are systematically over-reported because hospitals inflate CVD mortality data",
      "The MCCD system only collects data every 10 years, like the census"
    ],
    answer: 1,
    explanation: "A critical limitation of CVD mortality estimation from SRS-MCCD data is that only about 20-25% of all registered deaths in India have a medically certified cause of death. The vast majority of deaths - especially in rural areas - are assigned cause of death through verbal autopsy, which has significant limitations in accurately classifying CVD versus other causes. Additionally, complete death registration coverage itself is incomplete in many states. This leads to substantial uncertainty in CVD cause-specific mortality estimates. The RGI-SRS verbal autopsy-based data show CVD as responsible for about 18-20% of deaths, but this is considered an underestimate by most experts."
  },
  {
    id: 8,
    question: "The Prospective Urban Rural Epidemiology (PURE) study's findings on CVD risk factors in India showed which important urban-rural pattern?",
    options: [
      "Urban populations in India had dramatically higher CVD event rates, 4-5 times that of rural populations",
      "CVD risk factors like hypertension, obesity, and physical inactivity were higher in urban areas, but absolute CVD event rates were converging between urban and rural areas",
      "Rural populations in India had lower CVD risk due to predominantly agricultural diets with high grain and vegetable content",
      "Urban-rural differences in CVD risk factors in India were not statistically significant when controlling for income"
    ],
    answer: 1,
    explanation: "The PURE study (Prospective Urban Rural Epidemiology, a large multinational prospective cohort including India) found that while CVD risk factors (hypertension, dyslipidemia, diabetes, obesity, physical inactivity) were consistently higher in urban populations, CVD event rates and case fatality were also significantly influenced by healthcare access. Rural populations in India have fewer CVD risk factors on average, but when CVD occurs, case fatality is higher due to poor healthcare access. The urban-rural gap in risk factors is narrowing over time as rural populations undergo nutritional and lifestyle transition, suggesting future rural CVD burden will rise substantially."
  },
  {
    id: 9,
    question: "The unique epidemiological feature of CVD in women, specifically regarding the timing of cardiovascular disease onset, is:",
    options: [
      "Women develop CVD at the same age as men but have more severe disease",
      "Women develop CVD on average 10 years later than men, but this protective effect is lost in women with premature menopause, diabetes, or autoimmune conditions",
      "Women are completely protected from CVD before age 65 due to estrogen",
      "Women have lower CVD mortality than men at all ages because of hormonal and behavioral differences"
    ],
    answer: 1,
    explanation: "Women develop clinical CVD approximately 10 years later than men on average, attributed to the cardioprotective effects of endogenous estrogen. However, this protection is substantially reduced or eliminated in women with: premature menopause (before age 40, 2-fold higher CVD risk), diabetes (which eliminates the sex-based protection - diabetic women have equal or higher CVD risk than diabetic men), autoimmune conditions (lupus, rheumatoid arthritis), history of preeclampsia or gestational hypertension (2-3 fold higher future CVD risk), and PCOS. Post-menopausal women rapidly approach male CVD risk levels. Women also have higher CVD mortality after events due to under-diagnosis and under-treatment."
  },
  {
    id: 10,
    question: "Echocardiographic screening for rheumatic heart disease (RHD) in Indian schoolchildren using the World Heart Federation (WHF) 2012 criteria for definite RHD requires:",
    options: [
      "Presence of mitral regurgitation on color Doppler alone is sufficient for definite RHD diagnosis",
      "Morphological valve changes on 2D echocardiography plus pathological regurgitation meeting WHF criteria (regurgitant jet length, velocity, duration) in at least one valve",
      "Clinical auscultation findings (murmur) confirmed by any echocardiographic valve abnormality",
      "Elevated ASO titer plus any echocardiographic valve abnormality"
    ],
    answer: 1,
    explanation: "The WHF 2012 echocardiographic criteria classify RHD as Definite or Borderline: Definite RHD requires morphological mitral valve changes (anterior leaflet thickening, restricted mobility of posterior leaflet, excessive leaflet tip motion in systole, chordal thickening) AND pathological mitral regurgitation (jet length >/=2 cm, velocity >2.5 m/s, pansystolic), or any degree of mitral stenosis with mean gradient >4 mmHg, or pathological aortic regurgitation. Borderline RHD includes cases meeting some but not all criteria. These echocardiographic screening criteria have been used in India-based studies showing 5-8 per 1000 prevalence, much higher than clinical (auscultatory) screening alone."
  },
  {
    id: 11,
    question: "Global CVD projections for India indicate that by 2030, CVD deaths in India are expected to:",
    options: [
      "Decline due to successful implementation of NCD prevention programs",
      "Remain stable at current levels due to improved risk factor control",
      "Increase to approximately 4 million deaths per year, with greatest rise in premature deaths in the working-age population",
      "Increase only in women due to lifestyle changes, while men's CVD mortality will stabilize"
    ],
    answer: 2,
    explanation: "Multiple modeling studies project that India's CVD mortality will increase to approximately 4 million deaths annually by 2030, up from the current approximately 2.8-3 million. The greatest projected increase is in premature CVD deaths (30-69 years), particularly in urban populations. Key drivers of this projection include: rising prevalence of diabetes, hypertension, and obesity; ageing population; urbanization and nutritional transition; and insufficient progress in CVD prevention and treatment coverage. Conversely, optimistic scenarios (with effective risk factor control and treatment scale-up) show potential to avert 1-2 million deaths annually, highlighting the importance of preventive action now."
  },
  {
    id: 12,
    question: "The socioeconomic gradient in CVD in India differs from high-income countries in which important way?",
    options: [
      "In India, the socioeconomic gradient is identical to that in the UK - the poor have higher CVD burden",
      "In India, CVD was historically concentrated in higher socioeconomic groups, but with epidemiological transition, a reverse gradient is emerging with increasing CVD burden in lower socioeconomic groups who cannot afford treatment",
      "In India, middle socioeconomic groups have the highest CVD burden due to food transitions without income for healthcare",
      "Socioeconomic gradients do not apply to CVD in India because traditional diet practices are protective at all income levels"
    ],
    answer: 1,
    explanation: "The socioeconomic-CVD relationship in India is undergoing a transition. Historically, CVD (especially coronary artery disease) was a disease of the affluent in India due to sedentary urban lifestyles, rich diets, and tobacco use. However, with the epidemiological transition, CVD risk factors are increasingly prevalent in lower socioeconomic groups (cheaper processed foods, passive entertainment, unregulated tobacco). Simultaneously, lower socioeconomic groups have less access to preventive care, medications, and emergency cardiac services - leading to higher case fatality. This 'double burden' on the poor mirrors what occurred in high-income countries decades ago."
  },
  {
    id: 13,
    question: "The NFHS-5 (2019-21) measurement protocol for hypertension involved taking blood pressure readings at which intervals, and hypertension was defined as elevated BP on which reading(s)?",
    options: [
      "Single BP reading; hypertension defined as SBP >/=140 or DBP >/=90 mmHg",
      "Three consecutive readings at 5-minute intervals; average of all three readings used",
      "Two readings after 5 minutes rest; average of second and third readings (if three taken) or second reading used; >/=140/90 or on antihypertensive medication",
      "Two readings on separate days; hypertension confirmed only on repeat measurement"
    ],
    answer: 2,
    explanation: "In NFHS-5, blood pressure was measured using a digital sphygmomanometer. Two readings were taken after 5 minutes of rest in a seated position, with a 2-minute interval between readings. The average of the two readings was used. If the first two readings differed significantly, a third reading was taken and the average of the last two was used. Hypertension was defined as average SBP >/=140 mmHg or average DBP >/=90 mmHg, or currently taking antihypertensive medication. This methodology differs from clinical guidelines recommending multiple readings on multiple visits for diagnosis, making NFHS-5 data a population survey estimate rather than a clinical diagnostic tool."
  },
  {
    id: 14,
    question: "The 'awareness-treatment-control cascade' for hypertension in India from NFHS-5 data shows which approximate pattern?",
    options: [
      "Awareness 75%, treatment 65%, control 45% - indicating a relatively mature hypertension control program",
      "Awareness 45%, treatment 35%, control 15% - showing large gaps at every step of the cascade",
      "Awareness 25%, treatment 70% of aware, control 30% of treated - with the primary gap being awareness",
      "Awareness 60%, treatment 55%, control 50% - consistent with middle-income country average performance"
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21) data reveals a poor hypertension awareness-treatment-control cascade in India: approximately 45% of hypertensive men and 56% of hypertensive women are aware of their condition; among those aware, approximately 35-45% are receiving treatment; and among those on treatment, only about 15-25% have controlled BP (</=140/90 mmHg). This means only roughly 10-13% of all hypertensives in India have their BP controlled. This cascade - sometimes called the 'Rule of Halves' - shows gaps at every step: awareness, treatment initiation, and treatment effectiveness. Significant state-wise variation exists, with Kerala performing best."
  },
  {
    id: 15,
    question: "Masked hypertension, in contrast to white coat hypertension, is epidemiologically important because:",
    options: [
      "It is more common than white coat hypertension, affecting about 30-40% of the general population",
      "It carries lower cardiovascular risk than sustained hypertension since BP is only intermittently elevated",
      "It is detected as normal office BP but elevated out-of-office BP (ABPM or home BP), and carries cardiovascular risk comparable to sustained hypertension",
      "It is exclusively caused by recreational drug use and is not a true hypertensive state"
    ],
    answer: 2,
    explanation: "Masked hypertension (MH) is defined as normal office/clinic BP (</=140/90 mmHg) but elevated out-of-office blood pressure on ABPM (24-hour average >/=130/80, awake average >/=135/85 mmHg) or home BP monitoring (>/=135/85 mmHg). Prevalence is approximately 10-15% of the general population with normal office BP. MH is clinically important because it carries cardiovascular risk comparable to sustained hypertension (2-3 times higher than true normotension) and is associated with target organ damage. It is more common in men, smokers, those with stress, heavy alcohol use, physical inactivity, and diabetes. Home BP monitoring can help detect MH."
  },
  {
    id: 16,
    question: "The National Salt Reduction Programme (NSRP) evidence base for India is supported by data showing average dietary salt (sodium chloride) intake in India is approximately:",
    options: [
      "4-5 grams per day (within WHO recommended limit of 5 g/day)",
      "8-10 grams per day - approximately double the WHO recommended limit",
      "12-15 grams per day - nearly triple the WHO limit, the highest globally",
      "6-7 grams per day - slightly above WHO recommendation"
    ],
    answer: 1,
    explanation: "Dietary salt intake surveys in India, including ICMR-led studies and global data, consistently show average intake of approximately 8-10 grams per day in adult Indians, approximately double the WHO recommended maximum of 5 grams per day (or 2 grams sodium). Sources include: table salt added during cooking (major source), processed and packaged foods, pickles, and papads. Regional variation exists - some studies show higher intake in Maharashtra, Punjab, and Andhra Pradesh. India's population-level salt reduction strategy is important given the high prevalence of hypertension and the known 2-3 mmHg systolic BP reduction achievable with salt reduction."
  },
  {
    id: 17,
    question: "The DASH (Dietary Approaches to Stop Hypertension) dietary pattern, when evaluated at the population level as a public health intervention, has the greatest evidence for which outcome?",
    options: [
      "Reversal of atherosclerotic plaques in coronary arteries",
      "Reduction of blood pressure comparable to low-dose antihypertensive monotherapy, achievable through dietary pattern change alone",
      "Prevention of type 2 diabetes but not cardiovascular disease",
      "Benefit only in those with established hypertension, not in normotensive individuals"
    ],
    answer: 1,
    explanation: "Population-level evidence for the DASH dietary pattern (rich in fruits, vegetables, low-fat dairy, whole grains, lean protein; low in saturated fat, red meat, sweets) shows: systolic BP reduction of 8-14 mmHg in hypertensives (comparable to low-dose antihypertensive monotherapy), and 3-4 mmHg in normotensives. The DASH-Sodium trial demonstrated additive benefits of combining DASH diet with sodium restriction. Population-wide adoption of DASH-like dietary patterns could substantially reduce hypertension prevalence and CVD events. However, the DASH diet was developed in US context and requires adaptation for Indian food culture. The Mediterranean diet also shows CVD risk reduction."
  },
  {
    id: 18,
    question: "Hypertension in pregnancy (including gestational hypertension, preeclampsia, and chronic hypertension) contributes to global maternal mortality by causing approximately what percentage of maternal deaths?",
    options: ["2-5%", "10-14%", "20-25%", "35-40%"],
    answer: 2,
    explanation: "Hypertensive disorders of pregnancy (HDP) - including gestational hypertension, preeclampsia, eclampsia, and HELLP syndrome - account for approximately 20-25% of global maternal deaths, making them one of the leading causes of maternal mortality. In India, HDP causes approximately 5-8% of maternal deaths, though eclampsia remains a significant contributor. Preeclampsia affects 2-8% of pregnancies globally and is more common in first pregnancies, multiple gestations, pre-existing hypertension, diabetes, obesity, and in women with prior preeclampsia. Beyond immediate maternal-fetal risk, women with preeclampsia have 2-4 times higher lifetime CVD risk."
  },
  {
    id: 19,
    question: "The population attributable risk (PAR%) of hypertension as a risk factor for stroke globally is estimated at approximately:",
    options: ["15-20%", "25-30%", "35-50%", "55-65%"],
    answer: 2,
    explanation: "Hypertension is the single largest modifiable risk factor for stroke, accounting for approximately 35-50% of the population attributable risk for stroke globally. This varies by region - in low-income countries and South Asia, the PAR% may be even higher (up to 50-55%) given higher hypertension prevalence and poorer control rates. The INTERSTROKE study (global case-control study analogous to INTERHEART but for stroke) found that hypertension had the highest PAR% among all stroke risk factors. Effective hypertension control at the population level would prevent approximately one-third to half of all strokes, making it the most impactful single intervention for stroke prevention."
  },
  {
    id: 20,
    question: "The pediatric hypertension epidemic in India is epidemiologically significant because community-based studies show hypertension or prehypertension in approximately what percentage of school-aged children?",
    options: ["0.5-1%", "3-5%", "10-14%", "20-25%"],
    answer: 2,
    explanation: "Community-based screening studies in Indian school-children (typically 6-18 year age group) have found prehypertension or hypertension (using age-sex-height specific 90th/95th percentile thresholds) in approximately 10-14% of children. This is substantially higher than expected and is driven by rising obesity, increased salt intake, physical inactivity, and possible low-birth-weight/catch-up growth in many children (Barker hypothesis). The ICMR task force has highlighted this emerging concern. Pediatric hypertension frequently tracks into adult hypertension, making early identification and lifestyle intervention crucial for primordial CVD prevention."
  },
  {
    id: 21,
    question: "The India Hypertension Control Initiative (IHCI) simplified treatment protocol uses which first-line antihypertensive combination strategy?",
    options: [
      "Atenolol + hydrochlorothiazide as first-line, ACE inhibitor added as second line",
      "Amlodipine monotherapy, then adding losartan, then adding hydrochlorothiazide in a step-up protocol",
      "Ramipril as first-line for all hypertensives given India's high diabetes prevalence",
      "Fixed-dose combination of any two drugs chosen by the prescribing physician"
    ],
    answer: 1,
    explanation: "The IHCI simplified treatment protocol, adapted from WHO HEARTS, uses a standardized step-up algorithm to reduce clinical decision variability: Step 1 - Amlodipine 5 mg; if uncontrolled, Step 2 - add Losartan 50 mg; if still uncontrolled, Step 3 - add Hydrochlorothiazide 12.5-25 mg. This evidence-based, simple, three-step protocol reduces therapeutic inertia and enables task-shifting to non-physician providers for follow-up. Generic medications keep costs low. IHCI reported that in facilities implementing this protocol with good adherence, BP control rates improved from approximately 13% to 40-50% within 12-18 months of implementation."
  },
  {
    id: 22,
    question: "Resistant hypertension in population-based studies has a true prevalence (after excluding pseudo-resistance) of approximately:",
    options: ["1-2% of all adults", "5-10% of hypertensive individuals", "15-25% of hypertensive individuals", "30-40% of treated hypertensives"],
    answer: 1,
    explanation: "True resistant hypertension (BP above target despite 3 optimally dosed antihypertensives of different classes including a diuretic, with confirmed medication adherence and exclusion of white coat effect) has a true prevalence of approximately 5-10% of hypertensive individuals. Studies often report apparent resistant hypertension at 10-20% of treated hypertensives, but after rigorous exclusion of pseudo-resistance (poor adherence, white coat effect, suboptimal drug doses/combinations, interfering medications like NSAIDs), true resistance drops to 5-10%. Important secondary causes to screen: primary aldosteronism (most common, 5-10% of resistant cases), obstructive sleep apnea, renovascular disease, and chronic kidney disease."
  },
  {
    id: 23,
    question: "Primary aldosteronism (Conn's syndrome) is now recognized to be far more common than previously thought, and is an important cause of hypertension to screen for because:",
    options: [
      "It exclusively causes severe hypertension (>180/110 mmHg) that is easily recognized clinically",
      "It causes hypokalemia in all cases, making laboratory screening straightforward",
      "It is present in approximately 5-10% of all hypertensives and up to 20% of resistant hypertension, with excess cardiovascular risk beyond BP elevation, and is potentially curable surgically",
      "It only occurs in patients with adrenal adenomas and is confirmed by CT scan of the adrenal glands alone"
    ],
    answer: 2,
    explanation: "Primary aldosteronism (PA) is now estimated to affect 5-10% of all hypertensives and 15-20% of those with resistant hypertension - far more common than previously appreciated. Critically, PA causes cardiovascular damage (myocardial fibrosis, endothelial dysfunction, arrhythmias) beyond that attributable to BP elevation alone due to direct mineralocorticoid receptor activation. Importantly, only 30-40% of PA patients have hypokalemia, so normokalemia does not exclude PA. Screening with aldosterone-renin ratio (ARR) is recommended in: resistant hypertension, young-onset hypertension, hypertension with spontaneous hypokalemia, and incidentally discovered adrenal adenoma. Unilateral adenoma is potentially curable by adrenalectomy."
  },
  {
    id: 24,
    question: "In the epidemiology of hypertension, the concept of 'J-curve' phenomenon refers to:",
    options: [
      "The J-shaped distribution of blood pressure in the population with a peak at 140/90 mmHg",
      "The observation that at very low achieved diastolic BP (especially <65-70 mmHg) during treatment, cardiovascular event rates may paradoxically rise, particularly in those with established coronary artery disease",
      "The J-shaped temporal trend of hypertension prevalence peaking in middle age and declining in elderly",
      "The relationship between salt intake and BP that shows a J-curve with very low salt intake also increasing BP"
    ],
    answer: 1,
    explanation: "The 'J-curve' or 'J-shaped curve' in hypertension management refers to the observation that when diastolic BP is lowered too aggressively (typically below 65-70 mmHg), cardiovascular event rates (particularly coronary events) may paradoxically increase in patients with established coronary artery disease. This is thought to occur because coronary perfusion (occurring during diastole) is compromised at very low diastolic pressures in those with fixed atherosclerotic coronary stenosis. This phenomenon was highlighted in the ONTARGET and ACCORD trials. Debate continues on the clinical significance of the J-curve, and most guidelines advise not lowering diastolic BP below 65 mmHg in high-risk patients, particularly the elderly."
  },
  {
    id: 25,
    question: "The Pooled Cohort Equations (PCE) for ASCVD risk estimation differ from the Framingham Risk Score in which important way relevant to population surveillance in India?",
    options: [
      "PCE uses LDL cholesterol rather than total cholesterol, making it more accurate in Indian populations",
      "PCE was derived from diverse US cohorts and includes race as a variable, but has not been validated in South Asian populations and may underestimate CVD risk in Indians",
      "PCE includes family history of premature CVD, which makes it more sensitive than Framingham for South Asians",
      "PCE is preferred in India because it uses clinic-based rather than laboratory-based variables"
    ],
    answer: 1,
    explanation: "The ACC/AHA 2013 Pooled Cohort Equations were derived from multiple US prospective cohorts (ARIC, CHS, CARDIA, Framingham) and include race (African American vs White) as a variable. They have not been prospectively validated in South Asian populations and have been shown in some studies to both under- and overestimate CVD risk in different South Asian subgroups. The WHO/ISH CVD risk charts and the European SCORE have also not been adequately validated in India. There is a recognized need for India-specific CVD risk prediction models derived from Indian prospective cohort data. ICMR has called for development of such models as a research priority. The CARRS and UDAY studies provide some Indian data."
  },
  {
    id: 26,
    question: "The Framingham Heart Study made which specific methodological contribution to cardiovascular epidemiology that transformed the field?",
    options: [
      "It was the first randomized controlled trial demonstrating that antihypertensive treatment reduces stroke",
      "It pioneered the prospective cohort study design for studying chronic disease etiology and introduced the concept of 'risk factors' for disease",
      "It developed the case-control methodology for studying rare cardiovascular outcomes efficiently",
      "It first demonstrated that population-based screening programs for hypertension are cost-effective"
    ],
    answer: 1,
    explanation: "The Framingham Heart Study (FHS, began 1948) made landmark contributions to cardiovascular epidemiology: it pioneered the prospective cohort design for studying CVD in a defined community population; William Kannel et al. coined the term 'risk factor' in their 1961 Framingham paper, transforming how chronic disease etiology and prevention were conceptualized; FHS identified smoking, hypertension, hypercholesterolemia, diabetes, and obesity as major CHD risk factors; demonstrated HDL's protective role; developed sex-specific risk prediction; linked atrial fibrillation to stroke; and documented heart failure epidemiology. The concept of quantifying cumulative risk and developing risk prediction tools originated from FHS methodology."
  },
  {
    id: 27,
    question: "Dyslipidemia prevalence data from India-based population surveys indicate that elevated total cholesterol (>/=200 mg/dL) is present in approximately what percentage of Indian adults?",
    options: ["10-15%", "25-30%", "40-45%", "55-60%"],
    answer: 1,
    explanation: "Community-based surveys in India (ICMR-INDIAB study, CARRS study, state-level STEPS surveys) find elevated total cholesterol (>/=200 mg/dL) in approximately 25-30% of Indian adults, with significant urban-rural and state-based variation. Urban populations, particularly in southern and western states, show higher dyslipidemia prevalence. A distinctive Indian pattern is the 'atherogenic dyslipidemia' - relatively modest elevations in LDL-C but high triglycerides and low HDL-C, associated with the thin-fat phenotype and insulin resistance. Dyslipidemia awareness is poor - only about 10-20% of dyslipidemic Indians are aware of their condition, fewer are treated, and treatment control rates are very low."
  },
  {
    id: 28,
    question: "The incidence of acute myocardial infarction (AMI) in urban India compared to rural India and compared to Western populations shows which pattern?",
    options: [
      "Urban India AMI incidence is similar to rural India but both are lower than Western populations",
      "Urban India AMI incidence is 2-4 times higher than rural India; South Asians in India have comparable or higher AMI incidence than Western populations and present at younger ages",
      "AMI incidence in India is uniformly lower than Western countries due to predominantly vegetarian dietary practices",
      "AMI incidence in India has been declining since 2000 due to successful NPCDCS implementation"
    ],
    answer: 1,
    explanation: "AMI incidence in urban India (approximately 60-100 per 100,000 person-years in various studies) is 2-4 times higher than rural India (approximately 15-30 per 100,000 person-years). Crucially, South Asians in general have higher age-standardized AMI incidence and mortality than White Europeans and Americans, with onset occurring approximately 5-10 years earlier. Indian AMI registries (CREATE registry, STEMI India registry) document that the mean age of AMI in India is approximately 55-60 years, compared to 65-70 years in Western countries. The burden of premature AMI (in those <50 years) is disproportionately high in India, with smoking, diabetes, and stress as major contributors."
  },
  {
    id: 29,
    question: "The STEMI-NSTEMI ratio in India (proportion of all acute MI that are STEMI) compared to Western countries shows:",
    options: [
      "STEMI comprises approximately 25-30% of AMI in India, similar to Western countries",
      "STEMI comprises approximately 50-60% of all AMI in India - higher than the 30-40% seen in high-income countries - reflecting delayed presentation and less prior antiplatelet use",
      "NSTEMI has become more common than STEMI in India as in Western countries due to statin and antiplatelet use",
      "STEMI and NSTEMI are equally common in India (50:50 ratio) regardless of geography"
    ],
    answer: 1,
    explanation: "STEMI comprises approximately 50-60% of all AMI presentations in India (based on CREATE registry, STEMI India registry, and state-based studies), compared to approximately 30-40% in high-income countries. In high-income countries, the proportion of NSTEMI has been rising relative to STEMI due to: widespread statin and antiplatelet use (which may convert potential STEMIs to NSTEMIs), earlier presentation due to awareness, and improved diagnostic capability with high-sensitivity troponin. In India, higher STEMI proportions reflect: later presentation (patients reaching hospitals hours after symptom onset), less background antiplatelet/statin use, and different disease patterns. NSTEMI in India may also be underdiagnosed due to limited troponin testing access."
  },
  {
    id: 30,
    question: "Stroke epidemiology in India shows which important pattern regarding stroke subtypes compared to Western populations?",
    options: [
      "Ischemic stroke predominates in India (>85%), similar to Western populations",
      "India has a higher proportion of hemorrhagic stroke (~25-30% of all strokes) compared to Western populations (~15%), attributed to less-controlled hypertension",
      "Subarachnoid hemorrhage is the predominant stroke subtype in India due to genetic predisposition",
      "Lacunar infarcts are virtually absent in Indian stroke populations due to dietary patterns"
    ],
    answer: 1,
    explanation: "India and other South/East Asian countries have a higher proportion of hemorrhagic stroke compared to Western countries. While ischemic stroke still predominates in India (~65-75% of strokes), hemorrhagic stroke comprises approximately 25-30% of all strokes in India, compared to approximately 15% in Western populations (intracerebral hemorrhage ~10-15%, subarachnoid hemorrhage ~5%). The higher hemorrhagic stroke proportion in India is attributed to: higher prevalence of poorly controlled hypertension (which is the main cause of intracerebral hemorrhage), younger age at stroke onset, and possible genetic factors. This epidemiological difference has implications for acute stroke management and thrombolysis protocols."
  },
  {
    id: 31,
    question: "The concept of TIA as 'brain angina' - a warning for imminent stroke - is epidemiologically supported by data showing that the 90-day stroke risk after TIA is approximately:",
    options: ["0.5-1%", "3-5%", "10-15%", "25-30%"],
    answer: 2,
    explanation: "Large cohort studies demonstrate that TIA is associated with approximately 10-15% risk of stroke within 90 days, with the highest risk in the first 48-72 hours (approximately 3-5% within 48 hours, 5-8% within 7 days). The ABCD2 score (Age >/=60 =1pt, BP >/=140/90 =1pt, Clinical features - unilateral weakness =2pts/speech only =1pt, Duration >/=60min =2pts/10-59min =1pt, Diabetes =1pt; score 0-7) stratifies 90-day stroke risk: low (0-3) ~1%, moderate (4-5) ~4%, high (6-7) ~8%. TIA should be managed as an emergency with immediate brain imaging, ECG, antiplatelet therapy, and risk factor control. The EXPRESS and SOS-TIA studies showed rapid TIA clinic intervention reduces 90-day stroke risk by 80%."
  },
  {
    id: 32,
    question: "The prevalence of atrial fibrillation (AF) in India compared to Western populations and the resulting stroke risk implications are:",
    options: [
      "AF prevalence in India (~0.5-1%) is similar to Western countries (~1-2%), making AF-attributable stroke equally important",
      "AF prevalence in India (~0.2-0.5%) is lower than in Western countries (~1-2%), but AF-related strokes are more severe due to under-anticoagulation",
      "AF prevalence is higher in India due to the higher prevalence of rheumatic heart disease as a cause of AF",
      "AF-related stroke is uncommon in India because valvular AF (rheumatic) predominates and these patients receive anticoagulation at high rates"
    ],
    answer: 1,
    explanation: "AF prevalence in India (~0.2-0.5% from community studies) is lower than Western countries (~1-2% in adults >65 years in Europe/North America). However, AF-related strokes in India are clinically significant for several reasons: rheumatic heart disease (particularly mitral stenosis) is a common cause of AF in India (unlike degenerative AF in Western countries), and rheumatic AF carries 17-fold higher stroke risk; anticoagulation rates for AF in India are very low (estimated <10-20% of eligible patients receive OAC); many AF patients are undetected in the community. The net result is that AF-attributable stroke in India may represent approximately 15-20% of ischemic strokes, comparable to Western data."
  },
  {
    id: 33,
    question: "Secondary prevention coverage for coronary artery disease (CAD) in India - defined as the proportion of post-MI patients on evidence-based medications (antiplatelet, statin, beta-blocker, ACE inhibitor) at 1 year after discharge - is approximately:",
    options: [
      "65-75% - comparable to high-income country benchmarks",
      "45-55% - moderate coverage with room for improvement",
      "20-35% - substantially lower than high-income countries, with rapid medication discontinuation",
      "5-10% - critically low, with most patients not receiving any secondary prevention medications"
    ],
    answer: 2,
    explanation: "Secondary prevention medication coverage in India for post-MI patients is a significant concern. Cross-sectional surveys and registry data (CREATE registry, OASIS-7 India data, STEMI India follow-up data) consistently show that secondary prevention medication use drops dramatically after discharge. At 1 year post-MI, approximately 20-35% of patients remain on all four recommended medication classes (antiplatelet, statin, beta-blocker, ACE inhibitor/ARB). Cost (inability to afford long-term medications), poor health literacy, asymptomatic nature of secondary prevention benefits, and inadequate follow-up systems contribute to this gap. Cardiac rehabilitation - which supports secondary prevention - reaches fewer than 5% of eligible post-MI patients in India."
  },
  {
    id: 34,
    question: "Stroke case-fatality rates in India compared to high-income countries show which pattern based on available registry and population data?",
    options: [
      "India's 30-day stroke case-fatality is approximately 5%, lower than the 10-12% in Western countries due to younger patient age",
      "India's 30-day stroke case-fatality is approximately 20-25%, substantially higher than the 10-15% in Western countries, reflecting poor acute stroke care infrastructure",
      "Stroke case-fatality in India and Western countries are equivalent (around 12-15% at 30 days)",
      "India's stroke case-fatality is immeasurable due to the large proportion of home deaths without medical contact"
    ],
    answer: 1,
    explanation: "Available data from Indian stroke registries (INSPIRE, Ludhiana ICMR multicenter study, Kolkata hospital-based registry) and community-based studies suggest 30-day stroke case-fatality in India is approximately 20-25%, higher than the 10-15% reported from high-income countries. Contributing factors include: delayed presentation to hospitals; lack of organized stroke units and stroke pathways (fewer than 5% of Indian hospitals have dedicated stroke units); limited access to thrombolysis (<5% of eligible ischemic stroke patients receive rt-PA in India) and mechanical thrombectomy; poor post-stroke complication management; and high hemorrhagic stroke proportion. Community-based death-to-event ratios are difficult to measure as many strokes occur and die outside hospital settings."
  },
  {
    id: 35,
    question: "The Global Burden of Disease (GBD) study metric that best captures the combined effect of premature mortality AND disability from cardiovascular diseases at the population level is:",
    options: [
      "Crude mortality rate (deaths per 100,000 population)",
      "Age-standardized mortality rate",
      "Disability-Adjusted Life Years (DALYs) = Years of Life Lost (YLL) + Years Lived with Disability (YLD)",
      "Potential Years of Life Lost (PYLL) before age 70"
    ],
    answer: 2,
    explanation: "Disability-Adjusted Life Years (DALYs) = Years of Life Lost (YLL) due to premature mortality + Years Lived with Disability (YLD) due to morbidity and disability. DALYs are the GBD study's preferred summary measure of population health loss because they capture both the fatal and non-fatal burden of disease. For CVD, this is important because: stroke survivors often live with significant disability (hemiplegia, aphasia, cognitive impairment); heart failure patients have reduced functional capacity; these non-fatal sequelae contribute substantially to YLD. Age-standardized DALY rates allow comparison across populations. India's CVD DALY burden from ICMR-GBD is approximately 14.1% of total DALYs, with significant contribution from both YLL and YLD."
  },
  {
    id: 36,
    question: "The concept of 'lifetime risk' versus '10-year risk' of cardiovascular disease is important for population-level CVD prevention because:",
    options: [
      "Lifetime risk and 10-year risk are equivalent measures and can be used interchangeably",
      "10-year risk overestimates true CVD risk in most populations due to competing causes of death",
      "Young adults with risk factors may have low 10-year CVD risk but high lifetime risk, and 10-year risk-based intervention thresholds may miss young high-risk individuals who would benefit most from early prevention",
      "Lifetime risk is always lower than 10-year risk because longer time periods allow more preventive interventions"
    ],
    answer: 2,
    explanation: "The 10-year CVD risk calculation (Framingham, ASCVD, SCORE) is age-dependent - a 35-year-old with multiple risk factors may have a low 10-year absolute risk (<5%) yet have very high lifetime CVD risk (>40-50%). Sole reliance on 10-year risk thresholds for treatment decisions may result in under-treating young adults with established risk factors who would accumulate decades of risk factor exposure. Lifetime risk estimates (developed from FHS and other cohorts) better capture the long-term burden for young patients. This is particularly important in India where CVD onset is earlier. Current guidelines (ACC/AHA 2019) recommend considering lifetime risk as a patient-physician shared decision-making tool alongside 10-year risk, especially in those aged 40-59."
  },
  {
    id: 37,
    question: "The proportion of global CVD deaths occurring in low- and middle-income countries (LMICs) like India, and the implication for global CVD prevention strategy, is:",
    options: [
      "Approximately 40% of CVD deaths occur in LMICs, suggesting high-income countries still bear the majority of the CVD burden",
      "Over 75-80% of CVD deaths occur in LMICs, necessitating that global CVD prevention strategies be LMIC-appropriate in terms of cost, infrastructure, and human resources",
      "LMIC CVD mortality is rising but is still lower than high-income country CVD deaths in absolute numbers",
      "CVD deaths are equally distributed between high-income and low-income countries on a per capita basis"
    ],
    answer: 1,
    explanation: "WHO estimates that over 75-80% of all CVD deaths now occur in low- and middle-income countries (LMICs). This dramatic shift occurred because: high-income countries have successfully reduced CVD mortality through risk factor control, evidence-based treatment, and emergency cardiac care over recent decades; simultaneously, LMICs like India, China, and sub-Saharan Africa are experiencing rapid rises in CVD risk factors with insufficient healthcare infrastructure to manage the resulting disease burden. This epidemiological reality mandates that global CVD prevention research, tools (WHO PEN, HEARTS), and strategies prioritize LMIC-appropriate, low-cost, scalable, and task-shiftable solutions rather than replicating resource-intensive high-income country models."
  },
  {
    id: 38,
    question: "Primordial prevention of CVD at the national policy level is best exemplified by which intervention?",
    options: [
      "Prescribing statins to all adults above 40 years with a family history of heart disease",
      "Universal neonatal screening for congenital heart disease to enable early surgical correction",
      "National legislation banning industrially produced trans-fatty acids (partially hydrogenated oils) from the food supply",
      "Mandatory hypertension screening for all adults attending government hospitals"
    ],
    answer: 2,
    explanation: "Primordial prevention targets the upstream determinants to prevent risk factors from ever developing. National legislation banning industrial trans-fatty acids (iTFA/PHO - partially hydrogenated oils) from the food supply is a classic example: it acts before hypercholesterolemia (the risk factor) develops, at the population level, without requiring individual action. WHO's REPLACE action package aims to eliminate iTFA globally by 2023. India's FSSAI has progressively lowered permissible iTFA in foods, with a target of <2% by weight. In contrast, statin prescribing treats established dyslipidemia (primary prevention), screening identifies existing hypertension (not primordial), and neonatal cardiac screening addresses congenital rather than acquired CVD risk factors."
  },
  {
    id: 39,
    question: "The WHO PEN (Package of Essential NCD Interventions) for primary healthcare uses CVD risk charts that have a 'non-laboratory-based' version (Chart B). The primary purpose of this non-laboratory version is:",
    options: [
      "To screen for CVD risk using biomarkers not requiring blood collection",
      "To enable CVD risk assessment in low-resource settings where blood tests are unavailable, using age, sex, smoking status, systolic BP, BMI/waist circumference, and presence of diabetes by history",
      "To assess CVD risk in emergency settings when laboratory results are unavailable",
      "To perform rapid CVD risk screening in large community camps without individual patient consultation"
    ],
    answer: 1,
    explanation: "The WHO/ISH CVD risk prediction charts come in two versions: Chart A (laboratory-based) requires total cholesterol measurement; Chart B (non-laboratory-based) uses clinical and anthropometric variables only - age, sex, smoking status, systolic blood pressure, and BMI (as a proxy for cholesterol in the absence of lab data). Chart B was developed specifically for low-resource primary care settings in LMICs where laboratory cholesterol testing is routinely unavailable. While less accurate than lab-based charts, Chart B enables risk-stratified care decisions at the community level. It classifies 10-year CVD risk as <10%, 10-20%, 20-30%, or >30%, guiding decisions on antihypertensive initiation, aspirin recommendation, and referral. WHO updated these charts in 2019."
  },
  {
    id: 40,
    question: "The WHO HEARTS technical package has been implemented in India primarily through which existing program structure?",
    options: [
      "The National AIDS Control Organisation (NACO) infrastructure adapted for NCD management",
      "The India Hypertension Control Initiative (IHCI) which uses HEARTS principles within the National Health Mission framework at government primary health facilities",
      "Private sector hospital networks that adopted HEARTS as a quality improvement framework",
      "The ASHA home visit program, with HEARTS protocols adapted for community-level implementation"
    ],
    answer: 1,
    explanation: "India adopted the WHO HEARTS technical package framework through the India Hypertension Control Initiative (IHCI), a partnership of MoHFW, ICMR, WHO India, and Resolve to Save Lives, implemented within the National Health Mission. IHCI applies HEARTS principles in government primary health facilities: standardized step-up antihypertensive treatment protocol (Amlodipine + Losartan + HCTZ), reliable drug supply, patient registration and digital tracking (electronic health records), team-based care with ANMs/ASHAs for follow-up and medication adherence support, and facility/district-level performance monitoring dashboards. IHCI expanded from 5 pilot states in 2017 to national scale by 2022-23, demonstrating that HEARTS-based approaches improve hypertension control in LMIC settings."
  },
  {
    id: 41,
    question: "Geoffrey Rose's 'prevention paradox' in CVD has the following implication for designing population-level CVD prevention programs:",
    options: [
      "High-risk individuals should be the exclusive focus of prevention because they account for the majority of CVD events",
      "Most CVD events actually occur among the large segment of the population at moderate risk, not the small segment at very high risk, therefore population-wide strategies are essential to complement high-risk strategies",
      "Population-wide strategies are only applicable to physical activity promotion, not to dietary or pharmaceutical interventions",
      "The paradox means that preventive interventions paradoxically increase CVD awareness anxiety without actually reducing events"
    ],
    answer: 1,
    explanation: "Geoffrey Rose's prevention paradox states: 'a large number of people at a small risk may give rise to more cases of disease than a small number who are at high risk.' Applied to CVD: while the individual relative risk at any moderate BP level is low, the majority of CVD events in the population occur among the large number of people with borderline-to-moderate hypertension - not the small high-risk tail. Therefore, population-wide strategies (reducing average population BP by 2-3 mmHg through salt reduction, dietary improvement, and physical activity) would prevent more total CVD events than treating only those at highest risk. Both strategies are complementary: high-risk strategy for individual clinical benefit, population strategy for population-level CVD burden reduction."
  },
  {
    id: 42,
    question: "The NPCDCS (National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke) screening targets which population for CVD risk factor detection under the population-based screening initiative?",
    options: [
      "All Indians above age 18 years for annual BP measurement",
      "Adults aged 30 years and above for hypertension, diabetes, and common cancers through opportunistic and outreach screening at Health and Wellness Centers",
      "Only those with a family history of CVD or diabetes attending government tertiary hospitals",
      "Women aged 25-45 years through reproductive health program integration"
    ],
    answer: 1,
    explanation: "Under NPCDCS integrated with the Ayushman Bharat Health and Wellness Centers (HWC) initiative, population-based NCD screening targets all adults aged 30 years and above for hypertension and diabetes; all women aged 30+ for cervical cancer (VIA), breast cancer (CBE), and oral cancer; and risk factor screening for all adults. HWCs are mandated to conduct wellness activities, record BP and random blood sugar for adults >/=30 years attending for any purpose (opportunistic screening), maintain NCD registers, and provide follow-up care. Screening is linked to referral pathways to CHC/district hospital NCD clinics for diagnosis confirmation and treatment initiation. This is supported by the IT-based electronic health record (ABHA/ABPM) system."
  },
  {
    id: 43,
    question: "Evidence supporting task-shifting for hypertension management to non-physician health workers in LMICs is best summarized by which landmark study?",
    options: [
      "ACCOMPLISH trial showing combination antihypertensive therapy superiority",
      "SPRINT trial demonstrating intensive BP target benefits in high-risk patients",
      "TASMC and HOPE-4 trials showing that community health worker-led interventions can achieve BP control rates comparable to physician-led care in LMIC settings",
      "ALLHAT trial establishing chlorthalidone as first-line antihypertensive"
    ],
    answer: 2,
    explanation: "The HOPE-4 trial (Colombia and Malaysia) demonstrated that a community health worker (CHW)-delivered CVD risk reduction program, using standardized treatment algorithms and CHW follow-up, achieved significantly better BP and cholesterol control compared to standard physician-led care. The Simplified Hypertension Initiative by teams study (TASMC) and similar task-shifting trials in India (ASHA-delivered IHCI interventions), sub-Saharan Africa, and Southeast Asia support this evidence base. WHO HEARTS, WHO PEN, and global evidence reviews recommend task-shifting as a core strategy for hypertension and CVD management in primary care settings in LMICs, with physicians retaining oversight and prescription authority while CHWs handle measurement, adherence, and follow-up."
  },
  {
    id: 44,
    question: "The TIPS (The Indian Polycap Study) trial evaluated the Polycap fixed-dose combination pill. The Polycap used in this trial contained which combination and showed which primary finding?",
    options: [
      "Aspirin + atorvastatin + ramipril + metformin; reduced CVD events by 50% in diabetics",
      "Hydrochlorothiazide + atenolol + ramipril + simvastatin + aspirin; demonstrated safety and tolerability with potential for significant risk factor reduction",
      "Amlodipine + losartan + simvastatin + aspirin; proved superior to individual components in adherence",
      "Aspirin + statin + ACE inhibitor only (3-in-1 pill); demonstrated 40% reduction in primary CVD endpoints"
    ],
    answer: 1,
    explanation: "The TIPS trial (Indian Polycap Study, Yusuf et al., Lancet 2009) tested the Polycap - a single capsule containing hydrochlorothiazide 12.5 mg + atenolol 50 mg + ramipril 5 mg + simvastatin 20 mg + aspirin 100 mg - versus individual components in adults aged 45-80 years with at least one CVD risk factor. Primary findings: Polycap was safe and well-tolerated; it produced significant reductions in BP, heart rate, cholesterol, and urinary thromboxane. The TIPS-3 trial (2020) subsequently demonstrated that Polycap + aspirin significantly reduced CVD events in intermediate-risk individuals (HR 0.79, 95% CI 0.63-0.99). These results support the polypill concept for affordable CVD prevention in LMICs."
  },
  {
    id: 45,
    question: "The PolyIran study (published 2019 in The Lancet) demonstrated which important finding regarding the polypill for CVD prevention?",
    options: [
      "Polypill was inferior to individually prescribed medications in patients with established CVD",
      "Polypill reduced major adverse cardiovascular events (MACE) by approximately 34% compared to minimal care in a community setting in Iran, with the greatest benefit from medication adherence improvements",
      "Polypill benefit was limited to patients with prior MI and did not help primary prevention populations",
      "Polypill showed only BP reduction benefits without any reduction in clinical CVD endpoints"
    ],
    answer: 1,
    explanation: "The PolyIran trial (Roshandel et al., Lancet 2019) was a randomized controlled trial in Golestan Province, Iran. Participants aged >/=50 years were randomized to polypill (aspirin 81 mg + atorvastatin 20 mg + hydrochlorothiazide 12.5 mg + enalapril 5 mg OR valsartan 40 mg) plus minimal care, versus minimal care alone. Results: polypill group had approximately 34% lower rate of major adverse cardiovascular events (MACE) (HR 0.66, 95% CI 0.52-0.83). Polypill significantly improved medication adherence (~80% vs ~50%). The benefit was seen in both primary and secondary prevention groups. This trial, alongside TIPS-3 and HOPE-3 results, provides strong evidence for polypill use for CVD prevention in LMIC primary care settings."
  },
  {
    id: 46,
    question: "The STEMI care network model in India faces which specific operational challenge that limits its population-level impact in reducing STEMI mortality?",
    options: [
      "Lack of evidence that primary PCI is superior to thrombolysis in Indian settings",
      "Very low first medical contact at healthcare facilities - majority of STEMI patients either die before reaching hospital or arrive after the optimal reperfusion window (>12 hours from symptom onset)",
      "Over-reliance on expensive imported stents making STEMI networks unsustainable",
      "STEMI networks have successfully covered all urban areas but cannot be adapted to rural settings"
    ],
    answer: 1,
    explanation: "The primary operational challenge limiting STEMI network impact in India is extreme pre-hospital delay. Population-based studies show: median symptom-to-hospital arrival time in India is approximately 4-6 hours (vs <2 hours in high-income countries); 20-30% of STEMI patients arrive >12 hours after symptom onset (beyond optimal reperfusion window); community-level STEMI awareness is poor (patients do not recognize symptoms or self-transport to appropriate hospitals); healthcare-seeking behavior (visiting local practitioners before hospitals) adds further delay. Even where STEMI networks exist with good door-to-balloon times, the proportion of STEMI patients actually benefiting from reperfusion therapy remains low. Community-level STEMI awareness campaigns and call-112 emergency medical services integration are essential complements to STEMI networks."
  },
  {
    id: 47,
    question: "Cost-effectiveness analysis of cardiovascular prevention interventions in India shows which intervention is most cost-effective (lowest cost per DALY averted)?",
    options: [
      "Coronary artery bypass grafting (CABG) for three-vessel disease",
      "Aspirin therapy for all adults above 50 years (chemoprevention strategy)",
      "Population-level interventions targeting CVD risk factors (salt reduction, tobacco taxation, trans-fat elimination) combined with primary care-based cardiovascular risk management",
      "Cardiac catheterization laboratory establishment in all district hospitals"
    ],
    answer: 2,
    explanation: "Economic analyses (including WHO-CHOICE analysis, DCP3 estimates, and India-specific models) consistently show that population-level CVD prevention interventions are the most cost-effective strategies. Tobacco taxation, salt reduction policies, trans-fat elimination, and hypertension control through primary care collectively avert large numbers of CVD DALYs at costs of <$100-1000 per DALY averted - well within standard cost-effectiveness thresholds (<1-3x per capita GDP, approximately $2000-6000 for India). In contrast, invasive procedures (PCI, CABG) cost $10,000-50,000 per DALY averted. The World Bank DCP3 CVD chapter and ICMR health technology assessments support prioritizing preventive and primary care CVD interventions in India's constrained health budget context."
  },
  {
    id: 48,
    question: "Community-based CVD intervention trials in India, such as the ICMR-sponsored collaborative studies, have primarily demonstrated:",
    options: [
      "That community-based interventions can eliminate CVD risk in Indian populations within 5 years",
      "That community health education combined with risk factor screening and management can reduce CVD risk factor prevalence and CVD events, but sustained impact requires integration into the health system",
      "That community interventions are ineffective in India due to cultural barriers to lifestyle change",
      "That community-level drug therapy distribution is more effective than lifestyle intervention in Indian rural populations"
    ],
    answer: 1,
    explanation: "Community-based CVD intervention trials in India (including ICMR multicenter studies in Trivandrum, Chennai, Delhi, and Dibrugarh; the CARRS intervention study; and state-level programs) have demonstrated that structured interventions combining: health education on CVD risk factors, community-level blood pressure and glucose screening, counseling on lifestyle modification, and linkage to primary care treatment can significantly reduce CVD risk factor burden over 3-5 years. However, studies consistently show that effects are maintained only with sustained intervention and health system integration - benefits wane when research intervention ends. This highlights the need to embed community CVD prevention within the mainstream health system (NHM/HWC framework) rather than relying on project-based approaches."
  },
  {
    id: 49,
    question: "ICMR's identified research priorities for CVD epidemiology and prevention in India include which specific gap that remains inadequately addressed?",
    options: [
      "The need for more tertiary cardiac centers to perform complex interventional procedures",
      "Development and validation of India-specific CVD risk prediction models, understanding state-wise CVD epidemiology through representative data, and implementation science research on scale-up of proven interventions",
      "Translational research on novel biomarkers for early CVD detection applicable to specialist clinics",
      "International collaborative trials on new drug classes for acute coronary syndrome management"
    ],
    answer: 1,
    explanation: "ICMR's CVD research priorities (as reflected in ICMR task force reports and NCD research agenda documents) identify critical gaps including: absence of validated India-specific CVD risk prediction models (current tools like Framingham were derived in non-Indian populations and may misclassify risk); limited representative epidemiological data on CVD incidence, prevalence, and mortality across Indian states (most data are from urban hospital-based studies, not community-based); implementation science research needed to understand how to scale up proven interventions (hypertension control, cardiac rehabilitation, STEMI networks) to full population coverage; research on the thin-fat phenotype and South Asian-specific risk factors; and mixed-methods research on behavior change and health-seeking patterns for CVD in Indian populations."
  },
  {
    id: 50,
    question: "The HOPE-3 trial (Heart Outcomes Prevention Evaluation-3), published in the New England Journal of Medicine (2016), is relevant to CVD prevention in intermediate-risk populations because it found:",
    options: [
      "Combination of statin + antihypertensive (candesartan + HCTZ) significantly reduced CVD events in all intermediate-risk adults",
      "Rosuvastatin 10 mg significantly reduced CVD events in intermediate-risk adults (without established CVD) irrespective of baseline LDL, while candesartan + HCTZ showed no benefit; but the combination showed benefit in those with elevated systolic BP (>143 mmHg)",
      "Fixed-dose combination polypill was superior to individual drugs for primary prevention in intermediate-risk populations globally",
      "Intensive statin therapy (rosuvastatin 40 mg) was required for CVD prevention in intermediate-risk populations, with no benefit from lower doses"
    ],
    answer: 1,
    explanation: "The HOPE-3 trial enrolled intermediate-risk adults without established CVD from 21 countries. It had a 2x2 factorial design testing rosuvastatin 10 mg vs placebo AND candesartan 16 mg + hydrochlorothiazide 12.5 mg vs placebo. Key findings: Rosuvastatin 10 mg significantly reduced the primary CVD outcome by 24% (HR 0.76) regardless of baseline LDL-C level, supporting statin use for primary prevention in intermediate-risk individuals based on overall cardiovascular risk rather than just LDL level. The antihypertensive combination showed no significant benefit in the overall population, but showed benefit in the subgroup with systolic BP >143 mmHg. The combination arm showed significant benefit in this hypertensive subgroup. HOPE-3 informed guidelines on primary prevention statin use in intermediate-risk individuals."
  },
];

export default questions;

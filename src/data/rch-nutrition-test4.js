const questions = [
  {
    id: 1,
    question: "According to WHO 2006 growth standards, a child with Weight-for-Age Z-score (WAZ) between -2 SD and -3 SD is classified as:",
    options: ["Normal", "Moderately underweight", "Severely underweight", "Mildly underweight"],
    answer: 1,
    explanation: "WHO classifies WAZ < -2 SD as underweight. Between -2 SD and -3 SD is moderately underweight, while WAZ < -3 SD is severely underweight. This replaces the older NCHS reference which used the 3rd and 10th percentile cutoffs."
  },
  {
    id: 2,
    question: "The MUAC cutoff for diagnosing Severe Acute Malnutrition (SAM) in children aged 6-59 months is:",
    options: ["Less than 12.5 cm", "Less than 11.5 cm", "Less than 13.5 cm", "Less than 10.5 cm"],
    answer: 1,
    explanation: "MUAC < 11.5 cm indicates SAM in children aged 6-59 months. MUAC between 11.5 cm and < 12.5 cm indicates Moderate Acute Malnutrition (MAM). MUAC >= 12.5 cm is considered normal. This is per WHO/UNICEF/WFP/UNHCR joint statement 2009."
  },
  {
    id: 3,
    question: "Height-for-Age Z-score (HAZ) < -2 SD in a child indicates:",
    options: ["Wasting", "Stunting", "Underweight", "Severe acute malnutrition"],
    answer: 1,
    explanation: "HAZ < -2 SD indicates stunting, which reflects chronic malnutrition or repeated episodes of acute malnutrition. Wasting is indicated by Weight-for-Height Z-score (WHZ) < -2 SD, and underweight by WAZ < -2 SD."
  },
  {
    id: 4,
    question: "The correct site for measuring Mid-Upper Arm Circumference (MUAC) is:",
    options: ["At the midpoint between acromion and olecranon of the left arm", "At the midpoint between acromion and olecranon of the right arm", "2 cm above the olecranon of the left arm", "At the belly of the biceps of the left arm"],
    answer: 0,
    explanation: "MUAC is measured at the midpoint between the tip of the acromion process of the scapula and the tip of the olecranon process of the ulna of the LEFT arm, with the arm hanging relaxed at the side. The left arm is used by convention for standardization."
  },
  {
    id: 5,
    question: "Gomez classification Grade III malnutrition corresponds to which percentage of expected weight-for-age?",
    options: ["75-90%", "60-74%", "Less than 60%", "Less than 50%"],
    answer: 2,
    explanation: "Gomez classification: Grade I (mild) = 75-90% of expected weight-for-age (50th percentile of Harvard/NCHS standards); Grade II (moderate) = 60-74%; Grade III (severe) = less than 60%. This is one of the oldest classifications based purely on weight-for-age."
  },
  {
    id: 6,
    question: "In Waterlow classification, a child who is stunted but NOT wasted would have:",
    options: ["Low HAZ and normal WHZ", "Normal HAZ and low WHZ", "Low HAZ and low WHZ", "Normal HAZ and normal WAZ"],
    answer: 0,
    explanation: "Waterlow classification uses two indices: stunting (HAZ < -2 SD, reflecting chronic malnutrition) and wasting (WHZ < -2 SD, reflecting acute malnutrition). A stunted but not wasted child has low HAZ (chronic insult) but normal WHZ (no current acute malnutrition)."
  },
  {
    id: 7,
    question: "The Composite Index of Anthropometric Failure (CIAF) was proposed by:",
    options: ["Waterlow", "Gomez", "Svedberg", "WHO Expert Committee"],
    answer: 2,
    explanation: "CIAF was proposed by Peter Svedberg in 2000. It combines all three conventional anthropometric failure indicators (underweight, stunting, wasting) to capture children who are failing on ANY of the three measures, giving a more comprehensive picture of malnutrition burden than any single indicator."
  },
  {
    id: 8,
    question: "Edematous malnutrition graded as '+' (one plus) indicates:",
    options: ["Bilateral pitting edema of the feet and ankles only", "Edema extending up to the knees", "Edema of the face", "Generalized edema including the face and arms"],
    answer: 0,
    explanation: "Edema grading: + (mild) = bilateral pitting edema of feet and ankles only; ++ (moderate) = edema extending up to the knees/lower legs and hands; +++ (severe) = generalized/anasarca including face, arms and entire body. This grading is part of SAM clinical assessment."
  },
  {
    id: 9,
    question: "Which WHO growth standard is currently recommended for assessing nutritional status of Indian children under 5 years?",
    options: ["NCHS 1977 reference", "WHO 2006 Child Growth Standards", "IAP 2015 growth charts", "CDC 2000 growth reference"],
    answer: 1,
    explanation: "WHO 2006 Child Growth Standards (based on MGRS - Multicentre Growth Reference Study from 6 countries including India) are recommended. They describe how children SHOULD grow under optimal conditions, unlike NCHS 1977 which was descriptive. India adopted WHO 2006 standards for all national programs."
  },
  {
    id: 10,
    question: "BMI-for-age Z-score < -2 SD in a 15-year-old adolescent indicates:",
    options: ["Overweight", "Thinness (Grade I)", "Severe thinness", "Normal variation"],
    answer: 1,
    explanation: "For adolescents (5-19 years), WHO uses BMI-for-age. BMI-for-age < -2 SD = thinness (Grade I/moderate thinness); < -3 SD = severe thinness (Grade II); between -1 and -2 SD = Grade III mild thinness by some classifications. The IAP classification for adolescents aligns with WHO cutoffs."
  },
  {
    id: 11,
    question: "Which of the following correctly identifies 'growth faltering' on a growth chart?",
    options: ["A curve that crosses TWO or more major percentile lines downward over time", "Weight below the 3rd percentile on a single measurement", "Height below -2 SD Z-score", "Weight gain less than expected for age at one point"],
    answer: 0,
    explanation: "Growth faltering (also called failure to thrive in older literature) is defined as a growth curve that crosses two or more major percentile channels downward over time on the growth chart, indicating declining growth velocity. A single low measurement may represent constitutional small stature; the trend is more important."
  },
  {
    id: 12,
    question: "IAP classification of protein-energy malnutrition grades malnutrition based on:",
    options: ["Weight-for-height only", "Height-for-age only", "Weight-for-age as percentage of expected median", "MUAC alone"],
    answer: 2,
    explanation: "IAP (Indian Academy of Pediatrics) classification uses weight-for-age as percentage of expected (50th percentile): Grade I = 71-80%, Grade II = 61-70%, Grade III = 51-60%, Grade IV = < 50%. It was proposed by Sehgal (1999) and adopted widely in India, though WHO 2006 Z-score based classification is now preferred."
  },
  {
    id: 13,
    question: "According to WHO, the diagnostic criteria for Severe Acute Malnutrition (SAM) include all of the following EXCEPT:",
    options: ["WHZ < -3 SD", "MUAC < 11.5 cm", "Bilateral pitting edema", "WAZ < -3 SD"],
    answer: 3,
    explanation: "SAM is diagnosed by: (1) WHZ < -3 SD (wasting), (2) MUAC < 11.5 cm in 6-59 months, OR (3) presence of bilateral pitting edema (kwashiorkor/marasmic-kwashiorkor). WAZ < -3 SD means severe underweight but is NOT a criterion for SAM. WHZ/MUAC/edema are the defining criteria."
  },
  {
    id: 14,
    question: "Community-Based Management of Acute Malnutrition (CMAM) includes which of the following components?",
    options: ["Only inpatient therapeutic care", "Community mobilization, outpatient therapeutic care (OTC), supplementary feeding, and inpatient care", "Only supplementary feeding programmes", "Only nutritional rehabilitation centres"],
    answer: 1,
    explanation: "CMAM has four components: (1) Community mobilization and outreach for case detection, (2) Outpatient Therapeutic Care (OTC) for SAM without complications, (3) Supplementary Feeding Programme (SFP) for MAM, and (4) Inpatient/facility-based care for SAM with complications. This model was adopted by India's NRC program."
  },
  {
    id: 15,
    question: "In the WHO 10-step protocol for management of SAM, which is the FIRST priority step?",
    options: ["Treat infections", "Correct electrolyte imbalances", "Treat and prevent hypoglycemia", "Treat and prevent dehydration"],
    answer: 2,
    explanation: "WHO 10 steps: Step 1 - Treat/prevent hypoglycemia; Step 2 - Treat/prevent hypothermia; Step 3 - Treat/prevent dehydration; Step 4 - Correct electrolyte imbalances; Step 5 - Treat/prevent infections; Step 6 - Correct micronutrient deficiencies; Step 7 - Cautious feeding; Step 8 - Rebuild wasted tissues (catch-up growth); Step 9 - Provide sensory stimulation; Step 10 - Prepare for follow-up."
  },
  {
    id: 16,
    question: "F-75 therapeutic milk is used in SAM management because:",
    options: ["It provides high calories to promote rapid catch-up growth", "It is low in protein and energy to allow stabilization without overwhelming the sick child", "It replaces electrolytes rapidly", "It contains high amounts of potassium and iron"],
    answer: 1,
    explanation: "F-75 (75 kcal/100 ml, 0.9 g protein/100 ml) is used in the STABILIZATION phase because the child's systems are overwhelmed and cannot handle high protein/energy loads. It provides just enough to stabilize without precipitating refeeding syndrome or cardiac failure. F-100 (100 kcal/100 ml, 2.9 g protein/100 ml) is used in the rehabilitation phase for catch-up growth."
  },
  {
    id: 17,
    question: "The composition of Ready-to-Use Therapeutic Food (RUTF) per 100g includes approximately:",
    options: ["300 kcal, 5g protein, 10g fat", "500 kcal, 12-15g protein, 25-30g fat", "200 kcal, 8g protein, 5g fat", "400 kcal, 20g protein, 15g fat"],
    answer: 1,
    explanation: "Standard RUTF (typically peanut-based, e.g., Plumpy'Nut) per 100g: ~500 kcal, 12-15g protein, 25-30g fat, plus complete micronutrient fortification. The therapeutic dose is 150-220 kcal/kg/day. RUTF does not require water addition, is safe at home, and is the standard for outpatient SAM treatment."
  },
  {
    id: 18,
    question: "The appetite test in SAM management is performed using:",
    options: ["F-75 therapeutic milk", "F-100 therapeutic milk", "Ready-to-Use Therapeutic Food (RUTF)", "Regular home diet"],
    answer: 2,
    explanation: "The appetite test uses RUTF. The child is offered RUTF in a quiet setting; if it can consume >= 1/4 of a standard RUTF sachet (92g) within 30 minutes, it passes the appetite test and can be managed as outpatient. Failing the appetite test, along with medical complications, indicates need for inpatient care."
  },
  {
    id: 19,
    question: "The stabilization phase in SAM management typically lasts for:",
    options: ["1-2 days", "2-7 days", "7-14 days", "14-21 days"],
    answer: 1,
    explanation: "The stabilization phase (using F-75, treating acute complications, correcting deficiencies) lasts approximately 2-7 days. The rehabilitation phase (using F-100 or RUTF for catch-up growth) follows and lasts 2-6 weeks. Total NRC stay in India is typically 14 days for the intensive phase."
  },
  {
    id: 20,
    question: "Nutritional Rehabilitation Centres (NRCs) in India under the National Health Mission target which group?",
    options: ["All malnourished children under 5 years", "SAM children aged 6-59 months with or without complications", "Only SAM children with medical complications", "MAM children aged 6-23 months"],
    answer: 1,
    explanation: "NRCs in India under NHM target SAM children aged 6-59 months. SAM children without complications can be managed in NRC (facility-based) or through CMAM (outpatient). NRC provides 14-day inpatient care including therapeutic feeding, micronutrient supplementation, treatment of infections, and caregiver counselling."
  },
  {
    id: 21,
    question: "Discharge criteria from Nutritional Rehabilitation Centre (NRC) in India include:",
    options: ["MUAC > 12.5 cm or WHZ > -2 SD, no edema, clinically well for 2 consecutive days", "MUAC > 13.5 cm and weight gain > 20% of admission weight", "Only absence of bilateral edema", "WAZ > -2 SD and no acute infections"],
    answer: 0,
    explanation: "NRC discharge criteria (India NHM guidelines): MUAC >= 12.5 cm OR WHZ >= -2 SD, absence of bilateral edema, clinically well and alert, eating well (appetite present), and these criteria met for at least 2 consecutive days. Post-discharge follow-up at 2 weeks, 1 month, 2 months, and 3 months is recommended."
  },
  {
    id: 22,
    question: "MAM management through Supplementary Feeding Programmes (SFP) uses which product as the primary therapeutic option?",
    options: ["F-75 therapeutic milk", "F-100 therapeutic milk", "Ready-to-Use Supplementary Food (RUSF) or fortified blended foods", "Standard RUTF"],
    answer: 2,
    explanation: "MAM management uses Ready-to-Use Supplementary Food (RUSF) or fortified blended foods (corn-soya blend/Bal Shakha in India) through SFP. RUTF is reserved for SAM. Fortified blended foods provide additional calories and micronutrients on top of home diet. India's ICDS uses take-home rations and hot cooked meals for MAM."
  },
  {
    id: 23,
    question: "A child with SAM and which of the following features should be managed through INPATIENT facility-based care rather than outpatient CMAM?",
    options: ["MUAC 10 cm with normal appetite and no edema", "WHZ -3.5 SD with good appetite and clinically stable", "Bilateral pitting edema with failure of appetite test", "MUAC 11 cm with mild diarrhea but good appetite"],
    answer: 2,
    explanation: "Indications for inpatient care in SAM: bilateral pitting edema (especially ++/+++), failure of appetite test, medical complications (severe dehydration, high fever, pneumonia, altered consciousness, severe anemia, hypoglycemia, hypothermia, skin lesions). A child with bilateral edema AND failed appetite test mandates inpatient care."
  },
  {
    id: 24,
    question: "The recommended catch-up growth rate during rehabilitation phase of SAM management is:",
    options: ["5-10 g/kg/day", "10-15 g/kg/day", "> 15 g/kg/day", "20-25 g/kg/day"],
    answer: 1,
    explanation: "During the rehabilitation phase of SAM, the target weight gain rate is 10-15 g/kg/day, which is considered satisfactory catch-up growth. A rate < 5 g/kg/day is poor and warrants investigation for hidden infections, inadequate feeding, or psychosocial problems. F-100 or RUTF is titrated to achieve this rate."
  },
  {
    id: 25,
    question: "According to NFHS-5 (2019-21), the prevalence of anemia among children aged 6-59 months in India is approximately:",
    options: ["40%", "50%", "67%", "32%"],
    answer: 2,
    explanation: "NFHS-5 (2019-21) found that 67.1% of children aged 6-59 months in India were anemic (Hb < 11 g/dL). This is a worsening from NFHS-4 (2015-16) which showed 58.6%, making it a major public health concern. Iron deficiency is the most common cause, though non-iron deficiency anemia (hemoglobinopathies, infections) also contributes."
  },
  {
    id: 26,
    question: "WHO classification of iron deficiency anemia (IDA) in children under 5: 'severe anemia' is defined as hemoglobin below:",
    options: ["10 g/dL", "9 g/dL", "8 g/dL", "7 g/dL"],
    answer: 3,
    explanation: "WHO classification for children 6-59 months: No anemia >= 11 g/dL; Mild anemia = 10-10.9 g/dL; Moderate anemia = 7-9.9 g/dL; Severe anemia = < 7 g/dL. Severe anemia requires urgent treatment. For pregnant women, anemia is Hb < 11 g/dL; severe is < 7 g/dL."
  },
  {
    id: 27,
    question: "Bitot's spots, the hallmark of Vitamin A deficiency, are characterized by:",
    options: ["Superficial foamy triangular spots on the conjunctiva (temporal side)", "Corneal ulceration and perforation", "Night blindness with no visible eye changes", "Papilledema of the optic disc"],
    answer: 0,
    explanation: "Bitot's spots (WHO classification X1B) are foamy, triangular, silvery-white spots on the bulbar conjunctiva, classically on the temporal side, caused by squamous metaplasia and keratinization. They may appear bilateral. They follow night blindness (XN) and conjunctival xerosis (X1A) in the WHO xerophthalmia classification."
  },
  {
    id: 28,
    question: "WHO classification of xerophthalmia - which stage indicates irreversible damage?",
    options: ["X1A - Conjunctival xerosis", "X1B - Bitot's spots", "X2 - Corneal xerosis", "X3A/X3B - Corneal ulceration/keratomalacia"],
    answer: 3,
    explanation: "WHO xerophthalmia stages: XN (night blindness), X1A (conjunctival xerosis), X1B (Bitot's spots), X2 (corneal xerosis) - all are reversible with Vitamin A treatment. X3A (corneal ulceration < 1/3 of cornea) and X3B (keratomalacia > 1/3 of cornea) indicate irreversible damage leading to permanent blindness. XS = corneal scar."
  },
  {
    id: 29,
    question: "The National Iodine Deficiency Disorders Control Programme (NIDDCP) recommends iodization of salt at which level?",
    options: ["15 ppm at production level", "15 ppm at household level and 30 ppm at production level", "30 ppm at household level", "10 ppm at all levels"],
    answer: 1,
    explanation: "NIDDCP recommends: 30 ppm iodine at production/manufacturer level (to account for losses during storage and transport) and 15 ppm at household/consumption level. Urinary iodine concentration (UIC) > 100 mcg/L indicates adequate iodine status in a population. UIC < 50 mcg/L indicates severe IDD."
  },
  {
    id: 30,
    question: "WHO goiter grading: Grade 1 goiter is defined as:",
    options: ["Goiter visible on inspection from 15 feet with neck in normal position", "Thyroid palpable but not visible with neck in normal position; visible only with neck extended", "Thyroid visible with neck in normal position", "Thyroid massively enlarged visible from across the room"],
    answer: 1,
    explanation: "WHO goiter grading: Grade 0 = no goiter; Grade 1 = thyroid palpable but not visible with neck in normal position, OR visible only with neck fully extended; Grade 2 = thyroid clearly visible with neck in normal position. Total goiter rate (Grade 1 + Grade 2) > 5% in school-age children indicates IDD as a public health problem."
  },
  {
    id: 31,
    question: "Zinc deficiency is most strongly associated with which condition in children?",
    options: ["Scurvy", "Rickets", "Diarrhea and impaired immune function", "Megaloblastic anemia"],
    answer: 2,
    explanation: "Zinc is critical for immune function, cell division, and gut integrity. Zinc deficiency is strongly associated with increased incidence, severity, and duration of diarrhea. WHO/UNICEF recommend zinc supplementation (20 mg/day for 10-14 days in children > 6 months; 10 mg/day for infants) as adjunct therapy for diarrhea management alongside ORS."
  },
  {
    id: 32,
    question: "The classic radiological finding in Vitamin D deficiency rickets is:",
    options: ["Increased bone density at the growth plate", "Widening, cupping, and fraying of the metaphysis (rachitic rosary area)", "Periosteal reaction along the diaphysis", "Subperiosteal hemorrhage"],
    answer: 1,
    explanation: "Vitamin D deficiency rickets shows: widening, cupping, and fraying of the metaphysis on X-ray (most prominent at wrist - radius and ulna); rachitic rosary on clinical examination (knobby enlargement of costochondral junctions); and Harrison's groove. Serum 25-OH Vitamin D < 20 ng/mL indicates deficiency; < 12 ng/mL is severe deficiency."
  },
  {
    id: 33,
    question: "Neural tube defects are primarily prevented by supplementation with which micronutrient in the periconceptional period?",
    options: ["Iron", "Vitamin B12", "Folic acid", "Zinc"],
    answer: 2,
    explanation: "Folic acid supplementation of 400 mcg/day periconceptionally (at least 1 month before and 3 months after conception) reduces the risk of neural tube defects (anencephaly, spina bifida, encephalocele) by 50-70%. Women with previous NTD-affected pregnancy require 4-5 mg/day. This is the basis for WIFS and antenatal iron-folic acid supplementation in India."
  },
  {
    id: 34,
    question: "Biofortification differs from conventional food fortification in that:",
    options: ["It adds nutrients to food during processing", "It increases nutrient content in staple crops through agricultural means (breeding/biotechnology)", "It supplements individual people with micronutrients", "It fortifies processed foods at the factory level"],
    answer: 1,
    explanation: "Biofortification increases micronutrient content of staple food crops through plant breeding (conventional or biotechnology) so that the crop itself is nutrient-rich at harvest. Examples: iron-biofortified pearl millet (developed by ICRISAT), zinc-biofortified wheat, Vitamin A-rich orange sweet potato. It reaches rural populations who grow their own food, unlike conventional fortification which reaches market-dependent populations."
  },
  {
    id: 35,
    question: "The Weekly Iron and Folic Acid Supplementation (WIFS) programme in India provides iron-folic acid supplementation to:",
    options: ["Children 6-59 months only", "Adolescent girls and boys aged 10-19 years in school and out-of-school settings", "Pregnant and lactating women only", "Children under 5 years and adolescent girls"],
    answer: 1,
    explanation: "WIFS targets adolescents (10-19 years), both girls and boys, in school and out-of-school settings. It provides weekly IFA tablets (100 mg elemental iron + 500 mcg folic acid) supervised in schools. Out-of-school adolescents are covered through AWCs and ASHAs. WIFS is integrated with deworming (albendazole 400 mg twice yearly)."
  },
  {
    id: 36,
    question: "Vitamin A supplementation under National Immunization Schedule in India is given at which ages?",
    options: ["6, 12, 18, 24 months (4 doses total)", "9 months and 5 years (2 doses)", "9 months, then every 6 months until 5 years (9 doses)", "Only at 9 months with measles vaccine"],
    answer: 2,
    explanation: "India's Vitamin A supplementation schedule: 1st dose at 9 months (with measles vaccine), then every 6 months until 5 years = 9 doses total (at 9, 15, 21, 27, 33, 39, 45, 51, 57 months). Dose: 1 lakh IU at 9 months; 2 lakh IU for subsequent doses. This is implemented through National Vitamin A Supplementation Programme under RMNCH+A."
  },
  {
    id: 37,
    question: "Double fortification of salt (DFS) refers to fortification with:",
    options: ["Iodine and fluoride", "Iodine and iron", "Iron and zinc", "Iodine and vitamin A"],
    answer: 1,
    explanation: "Double Fortified Salt (DFS) is fortified with both iodine AND iron, addressing two major deficiencies simultaneously through a commonly used vehicle. DFS has been piloted in India under government programmes. The iron form used is typically ferric pyrophosphate or ferrous fumarate encapsulated to prevent iodine degradation."
  },
  {
    id: 38,
    question: "The 24-hour dietary recall method for dietary assessment has which major limitation?",
    options: ["It takes too long to administer (more than 2 hours)", "It depends on memory and may not represent usual intake (single day recall)", "It cannot be used in large population surveys", "It requires laboratory analysis of all foods consumed"],
    answer: 1,
    explanation: "The 24-hour dietary recall relies on the subject's memory of all foods and drinks consumed in the previous 24 hours. Key limitation: a single-day recall does not capture usual (habitual) intake due to day-to-day variation. Multiple 24-hour recalls (3+ days including a weekend) are recommended to estimate usual intake. Despite this, it is widely used in national surveys including NFHS."
  },
  {
    id: 39,
    question: "Which dietary assessment method is considered the gold standard for estimating actual food intake?",
    options: ["24-hour dietary recall", "Food frequency questionnaire (FFQ)", "Weighed food record (duplicate portion method)", "Diet history method"],
    answer: 2,
    explanation: "The weighed food record (also called duplicate diet method or weighed inventory) is the gold standard - all foods and beverages are weighed before consumption, and leftovers are subtracted. It provides precise quantitative data without relying on memory. The duplicate portion method collects identical food samples for laboratory analysis. However, it is expensive, burdensome, and may alter eating behavior."
  },
  {
    id: 40,
    question: "The Food Frequency Questionnaire (FFQ) is most useful for:",
    options: ["Measuring precise nutrient intake over 24 hours", "Ranking individuals by usual dietary patterns and food group intake for epidemiological studies", "Assessing immediate nutritional status in clinical settings", "Calculating exact calorie intake per day"],
    answer: 1,
    explanation: "FFQ asks about frequency of consumption of specific foods over a defined period (week/month/year) and is designed to rank individuals by usual dietary patterns. It is not designed for precise quantitative nutrient estimation. FFQ is the method of choice for large epidemiological studies (e.g., cohort studies) examining diet-disease relationships. It is quick, cheap, and does not depend on recent memory."
  },
  {
    id: 41,
    question: "In NFHS-5 (2019-21), which state/UT had the HIGHEST prevalence of stunting among children under 5?",
    options: ["Bihar", "Uttar Pradesh", "Meghalaya", "Madhya Pradesh"],
    answer: 2,
    explanation: "NFHS-5 (2019-21) showed Meghalaya had the highest prevalence of stunting at approximately 46.5% among children under 5. Other states with high stunting: Bihar (42.9%), Uttar Pradesh (39.7%). States with lowest stunting: Kerala (~23%), Goa (~25%), and Sikkim (~22%)."
  },
  {
    id: 42,
    question: "The Comprehensive National Nutrition Survey (CNNS) 2016-18 was India's first nationally representative survey specifically for nutrition. It covered which age group?",
    options: ["0-5 years only", "0-19 years (children and adolescents)", "Women 15-49 years", "All age groups including adults"],
    answer: 1,
    explanation: "CNNS 2016-18 (conducted by MoHFW, UNICEF, CDC) was India's first nationally representative nutrition survey covering 0-19 years (preschool children, school-age children, and adolescents). It collected anthropometric data, dietary intake, biochemical indicators (including micronutrient deficiencies), and covered 30 states/UTs."
  },
  {
    id: 43,
    question: "India's rank in the Global Hunger Index (GHI) 2023 among 125 countries is approximately:",
    options: ["Between 50-70 (moderate hunger)", "Between 70-90 (serious hunger)", "Between 100-125 (alarming hunger)", "Between 1-30 (low hunger)"],
    answer: 2,
    explanation: "India ranked 111 out of 125 countries in the GHI 2023, with a score indicating 'serious' to 'alarming' hunger levels. India has consistently ranked poorly due to high rates of wasting (highest globally at ~18%) even though underweight and stunting have declined. GHI components: undernourishment, child wasting, child stunting, and child mortality."
  },
  {
    id: 44,
    question: "The Global Hunger Index (GHI) is calculated using four indicators. Which of the following is NOT one of them?",
    options: ["Proportion of undernourished population", "Child wasting prevalence", "Child mortality rate under 5", "Maternal anemia prevalence"],
    answer: 3,
    explanation: "GHI four components: (1) Undernourishment (% of population with insufficient caloric intake), (2) Child wasting (% children under 5 with low WHZ), (3) Child stunting (% children under 5 with low HAZ), (4) Child mortality (under-5 mortality rate). Maternal anemia is NOT a GHI component, though it is tracked in other nutrition indices."
  },
  {
    id: 45,
    question: "Food security as defined by the 1996 World Food Summit exists when:",
    options: ["All people have physical access to food at all times", "All people at all times have physical, social and economic access to sufficient, safe and nutritious food", "National food production meets national consumption needs", "Food distribution reaches all households equally"],
    answer: 1,
    explanation: "1996 World Food Summit definition: 'Food security exists when all people, at all times, have physical and economic access to sufficient, safe and nutritious food that meets their dietary needs and food preferences for an active and healthy life.' Four pillars of food security: Availability, Access, Utilization, and Stability."
  },
  {
    id: 46,
    question: "The Lancet Maternal and Child Nutrition Series (2013) estimated that malnutrition in the first 1000 days (conception to 2 years) causes what proportion of stunting that cannot be reversed after this window?",
    options: ["25%", "50%", "80-100%", "33%"],
    answer: 2,
    explanation: "The Lancet 2013 Nutrition Series emphasized that the first 1000 days (270 days of pregnancy + 730 days = 0-2 years) is the critical window for nutrition interventions. Stunting that occurs during this period is largely irreversible - approximately 80-100% of stunting is established by 2 years of age. This forms the scientific basis for 1000 days programmes in India (POSHAN Abhiyaan/National Nutrition Mission)."
  },
  {
    id: 47,
    question: "Nutrition surveillance systems in India include which of the following?",
    options: ["Only NFHS and DLHS surveys", "NFHS, CNNS, NNMB surveys, HMIS/MCTS data, and Poshan Tracker", "Only WHO STEPS survey", "Only ICMR nutrition surveys"],
    answer: 1,
    explanation: "India's nutrition surveillance ecosystem includes: NFHS (every 5 years, MoHFW), National Nutrition Monitoring Bureau/NNMB surveys (ICMR-NIN), CNNS (one-time 2016-18), HMIS/MCTS/RCH portal routine data, and Poshan Tracker (real-time monitoring of ICDS/POSHAN Abhiyaan beneficiaries). The Integrated Child Development Services (ICDS) system also generates routine nutrition data."
  },
  {
    id: 48,
    question: "The concept of 'nutrition transition' in India refers to:",
    options: ["Shift from undernutrition to overnutrition/obesity alongside persistent undernutrition (double burden of malnutrition)", "Complete elimination of undernutrition", "Transition from breastfeeding to formula feeding", "Movement of nutrition programs from states to central government"],
    answer: 0,
    explanation: "Nutrition transition refers to the epidemiological shift where India simultaneously faces the 'double burden of malnutrition' - persistent high rates of undernutrition (stunting, wasting, micronutrient deficiencies) coexisting with rapidly increasing overweight, obesity, and diet-related non-communicable diseases. Urban and higher socioeconomic groups are most affected by overnutrition, while rural and lower SES groups bear the brunt of undernutrition."
  },
  {
    id: 49,
    question: "Biochemical assessment of iron deficiency follows a progression. Which sequence correctly represents the stages from early to late iron deficiency?",
    options: ["Anemia -> depleted iron stores -> iron-deficient erythropoiesis", "Depleted iron stores -> iron-deficient erythropoiesis -> iron deficiency anemia", "Iron deficiency anemia -> iron-deficient erythropoiesis -> depleted stores", "Iron-deficient erythropoiesis -> depleted stores -> anemia"],
    answer: 1,
    explanation: "Iron deficiency progresses in three stages: Stage 1 - Iron depletion (serum ferritin falls, bone marrow iron reduced, no anemia); Stage 2 - Iron-deficient erythropoiesis (serum iron falls, TIBC rises, transferrin saturation falls, red cell protoporphyrin rises, but Hb still normal); Stage 3 - Iron deficiency anemia (Hb falls, microcytic hypochromic anemia). Ferritin is the earliest sensitive marker."
  },
  {
    id: 50,
    question: "According to the Lancet 2013 Nutrition Series, what percentage of child deaths under 5 globally are attributable to undernutrition?",
    options: ["25%", "35%", "45%", "15%"],
    answer: 1,
    explanation: "The Lancet 2013 Maternal and Child Nutrition Series estimated that undernutrition (including fetal growth restriction, stunting, wasting, and deficiencies of Vitamin A and zinc) is associated with approximately 3.1 million child deaths per year, accounting for 45% of all child deaths under 5 years globally. This underscores nutrition as a central development and survival issue. Updated estimates in subsequent years have maintained similar proportions."
  },
];

export default questions;

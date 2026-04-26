const questions = [
  {
    id: 1,
    question: "What is the correct sequence of essential newborn care steps immediately after birth?",
    options: [
      "Dry, stimulate, assess breathing, clamp cord",
      "Clamp cord, dry, stimulate, assess breathing",
      "Dry and stimulate simultaneously, assess breathing, clamp cord at 1-3 minutes",
      "Assess breathing, dry, stimulate, clamp cord"
    ],
    answer: 2,
    explanation: "WHO and NVBDCP guidelines recommend: dry and stimulate the baby simultaneously (to prevent hypothermia and stimulate breathing), then assess breathing, and clamp the cord at 1-3 minutes (delayed cord clamping) unless resuscitation is needed. Delayed cord clamping improves iron stores and reduces anemia."
  },
  {
    id: 2,
    question: "The 'golden minute' in neonatal resuscitation refers to:",
    options: [
      "Time to administer the first dose of surfactant",
      "Time within which positive pressure ventilation should be initiated if the baby does not breathe after drying and stimulation",
      "Time to achieve APGAR score of 7 or more",
      "Time within which cord should be clamped after birth"
    ],
    answer: 1,
    explanation: "The 'golden minute' is the first 60 seconds after birth. Within this minute, the baby should be dried, stimulated, and assessed. If the baby does not breathe or cry adequately, positive pressure ventilation (PPV) should be initiated before the golden minute is over. This concept is central to Helping Babies Breathe (HBB) and NSSK programs."
  },
  {
    id: 3,
    question: "Which of the following is NOT a component assessed in the Apgar score?",
    options: [
      "Muscle tone",
      "Reflex irritability",
      "Skin color",
      "Fontanelle tension"
    ],
    answer: 3,
    explanation: "The Apgar score assesses five components: Appearance (skin color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), and Respiration. Each is scored 0-2, with a maximum of 10. Fontanelle tension is not part of the Apgar score. Score assessed at 1 and 5 minutes."
  },
  {
    id: 4,
    question: "A baby weighing 1200 grams at birth is classified as:",
    options: [
      "Low birth weight",
      "Very low birth weight",
      "Extremely low birth weight",
      "Moderately low birth weight"
    ],
    answer: 1,
    explanation: "Birth weight classification: Low Birth Weight (LBW) = <2500g; Very Low Birth Weight (VLBW) = <1500g; Extremely Low Birth Weight (ELBW) = <1000g. A baby weighing 1200g falls in the VLBW category (<1500g but >=1000g). This classification guides level of care and management protocols."
  },
  {
    id: 5,
    question: "A newborn born at 33 weeks of gestation is classified as:",
    options: [
      "Extremely preterm",
      "Very preterm",
      "Moderate to late preterm",
      "Late preterm"
    ],
    answer: 1,
    explanation: "Preterm classification by WHO: Extremely preterm = <28 weeks; Very preterm = 28 to <32 weeks; Moderate to late preterm = 32 to <37 weeks (sometimes subdivided: moderate preterm 32-34 weeks, late preterm 34-37 weeks). A baby born at 33 weeks falls in the 'very preterm' or 'moderate preterm' category depending on the classification system used; WHO classifies 28-<32 weeks as very preterm and 32-<37 as moderate to late preterm, so 33 weeks = moderate to late preterm."
  },
  {
    id: 6,
    question: "Kangaroo Mother Care (KMC) is recommended for which category of newborns as per NHM guidelines?",
    options: [
      "All newborns regardless of weight",
      "Newborns weighing less than 2500 grams who are hemodynamically stable",
      "Only newborns on ventilator support",
      "Newborns weighing less than 1000 grams only"
    ],
    answer: 1,
    explanation: "KMC is recommended for newborns weighing less than 2500 grams (LBW babies) who are hemodynamically stable (not requiring oxygen or IV fluids). Key benefits include: prevention of hypothermia, promotion of breastfeeding, reduced infection rates, improved weight gain, and reduced mortality. KMC involves skin-to-skin contact, exclusive breastfeeding, and early discharge with follow-up."
  },
  {
    id: 7,
    question: "Facility Based Newborn Care (FBNC) is operationalized through which units at the district level?",
    options: [
      "NBSU and SNCU",
      "NICU and HDU only",
      "SNCU and PICU",
      "NBSU and PICU"
    ],
    answer: 0,
    explanation: "FBNC is operationalized through: Special Newborn Care Units (SNCU) at district hospitals and medical colleges (for sick newborns requiring intensive care), and Newborn Stabilization Units (NBSU) at FRUs/CHCs (for moderately sick newborns). NBSUs provide stabilization before referral to SNCU. This is a key component of the India Newborn Action Plan (INAP)."
  },
  {
    id: 8,
    question: "Which of the following is a criterion for admission to a Special Newborn Care Unit (SNCU)?",
    options: [
      "Birth weight between 2000-2500 grams with no other illness",
      "Gestational age less than 34 weeks or birth weight less than 1800 grams",
      "Any newborn needing phototherapy for jaundice regardless of severity",
      "Newborns requiring only KMC"
    ],
    answer: 1,
    explanation: "SNCU admission criteria include: gestational age <34 weeks or birth weight <1800g, birth asphyxia requiring resuscitation beyond initial steps, respiratory distress, seizures, sepsis, severe jaundice, surgical conditions, or other serious illness. Newborns weighing 1800-2500g with only feeding problems or mild jaundice may be managed in NBSU."
  },
  {
    id: 9,
    question: "Newborn Stabilization Unit (NBSU) is established at which level of the health system?",
    options: [
      "Sub-centre level",
      "Primary Health Centre level",
      "Community Health Centre / First Referral Unit level",
      "District Hospital level"
    ],
    answer: 2,
    explanation: "NBSUs are established at Community Health Centres (CHCs) and First Referral Units (FRUs). They provide care for moderately sick newborns (birth weight 1500-1800g, moderate jaundice needing phototherapy, feeding problems, mild hypothermia) and stabilize seriously ill newborns before transfer to SNCU at district hospitals."
  },
  {
    id: 10,
    question: "Under the Home Based Newborn Care (HBNC) program, how many home visits does an ASHA make for a normal newborn?",
    options: [
      "4 visits in 28 days",
      "6 visits in 42 days",
      "7 visits in 42 days",
      "5 visits in 28 days"
    ],
    answer: 2,
    explanation: "Under HBNC, ASHAs make 7 home visits for normal newborns: Day 1 (within 24 hours of birth), Day 3, Day 7, Day 14, Day 21, Day 28, and Day 42. For LBW or sick newborns, the number of visits is increased. From 2014, HBNC was extended to include visits up to Day 42 (6 weeks). The 7-visit schedule helps monitor growth, feeding, danger signs, and immunization."
  },
  {
    id: 11,
    question: "Navjaat Shishu Suraksha Karyakram (NSSK) focuses on training health workers in:",
    options: [
      "Management of severe acute malnutrition",
      "Basic newborn care and resuscitation at birth",
      "Immunization of newborns and mothers",
      "Screening for congenital disorders"
    ],
    answer: 1,
    explanation: "NSSK (launched in 2009) is a training program for health workers (doctors, nurses, ANMs) in basic newborn care and resuscitation at the facility level. It covers: prevention of hypothermia, promoting breastfeeding, prevention of infections, and basic neonatal resuscitation (bag and mask ventilation). It is based on the 'Helping Babies Breathe' curriculum."
  },
  {
    id: 12,
    question: "Newborn screening for congenital hypothyroidism in India is recommended to be done at:",
    options: [
      "Birth (cord blood)",
      "48-72 hours of age using heel prick blood on filter paper",
      "14 days of age",
      "6 weeks of age during first immunization visit"
    ],
    answer: 1,
    explanation: "Newborn screening for congenital hypothyroidism (CH) is recommended at 48-72 hours of age using heel prick blood collected on filter paper (dried blood spot). TSH is measured; >20 mU/L is considered screen positive requiring confirmatory testing. Early detection and treatment with levothyroxine before 2 weeks of age prevents intellectual disability. India has state-level programs; RBSK also covers this screening."
  },
  {
    id: 13,
    question: "In the IMNCI algorithm, the correct sequence for case management is:",
    options: [
      "Treat, Assess, Classify",
      "Assess, Classify, Treat",
      "Classify, Assess, Treat",
      "Assess, Treat, Classify"
    ],
    answer: 1,
    explanation: "The IMNCI (Integrated Management of Neonatal and Childhood Illness) algorithm follows a systematic approach: Assess (take history and examine for signs), Classify (categorize the illness using color-coded classification - pink/yellow/green), and Treat (pre-referral treatment, referral, or home treatment based on classification). This algorithm is applied to children 0-5 years and integrates management of all major childhood illnesses."
  },
  {
    id: 14,
    question: "Which of the following is a general danger sign in a young infant (0-2 months) as per IMNCI?",
    options: [
      "Temperature of 37.5 degrees Celsius",
      "Convulsions",
      "Refusal of 2 feeds in a day",
      "Mild jaundice on day 3 of life"
    ],
    answer: 1,
    explanation: "General danger signs in a young infant (0-2 months) per IMNCI include: not feeding well, convulsions, movement only when stimulated or no movement at all (lethargic/unconscious), fast breathing (>=60/min), severe chest indrawing, temperature >37.5 degrees C (fever) or <35.5 degrees C (hypothermia), jaundice, and umbilical infection with red streaks. Convulsions are a critical danger sign requiring immediate referral."
  },
  {
    id: 15,
    question: "According to IMNCI, a child aged 2-59 months with cough and breathing rate of 42 breaths/minute but no chest indrawing is classified as:",
    options: [
      "No pneumonia: cough or cold",
      "Pneumonia",
      "Severe pneumonia or very severe disease",
      "Very severe disease"
    ],
    answer: 1,
    explanation: "IMNCI pneumonia classification for 2-59 months: Severe pneumonia = chest indrawing or danger signs; Pneumonia = fast breathing (>=50/min for 2-11 months, >=40/min for 12-59 months) without chest indrawing; No pneumonia = no fast breathing, no chest indrawing. A child aged 2-59 months with 42 breaths/min - if 12-59 months, >=40/min is fast breathing = Pneumonia (yellow category). Treatment: oral amoxicillin for 5 days, refer if no improvement."
  },
  {
    id: 16,
    question: "IMNCI Plan C for diarrhea management is indicated for:",
    options: [
      "Children with no dehydration",
      "Children with some dehydration",
      "Children with severe dehydration",
      "Children with persistent diarrhea"
    ],
    answer: 2,
    explanation: "IMNCI diarrhea management plans: Plan A = no dehydration (give ORS at home, continue feeding, zinc supplementation); Plan B = some dehydration (ORS 75 ml/kg over 4 hours at health facility, then reassess); Plan C = severe dehydration (IV Ringer's lactate: 100 ml/kg, 30 ml/kg in 30 min for infants, then 70 ml/kg in 2.5 hours; if IV not possible, nasogastric ORS at 20 ml/kg/hour)."
  },
  {
    id: 17,
    question: "The composition of reduced-osmolarity ORS recommended by WHO/UNICEF contains:",
    options: [
      "Sodium 90 mmol/L, Glucose 111 mmol/L, total osmolarity 311 mOsm/L",
      "Sodium 75 mmol/L, Glucose 75 mmol/L, total osmolarity 245 mOsm/L",
      "Sodium 60 mmol/L, Glucose 90 mmol/L, total osmolarity 200 mOsm/L",
      "Sodium 45 mmol/L, Glucose 75 mmol/L, total osmolarity 180 mOsm/L"
    ],
    answer: 1,
    explanation: "Reduced-osmolarity ORS (recommended since 2002): Sodium 75 mmol/L, Chloride 65 mmol/L, Glucose 75 mmol/L, Potassium 20 mmol/L, Citrate 10 mmol/L, total osmolarity 245 mOsm/L. This replaced the standard ORS (311 mOsm/L) as it reduces stool output, vomiting, and need for IV fluids. The sachets contain: NaCl 2.6g, KCl 1.5g, Sodium citrate 2.9g, Glucose 13.5g per liter."
  },
  {
    id: 18,
    question: "As per current IMNCI/national guidelines, what is the recommended zinc supplementation dose and duration for diarrhea in children under 5?",
    options: [
      "10 mg/day for 10 days for all ages",
      "10 mg/day for infants <6 months and 20 mg/day for children 6 months-5 years for 14 days",
      "5 mg/day for 7 days for all ages",
      "20 mg/day for 5 days for all ages"
    ],
    answer: 1,
    explanation: "WHO/IMNCI zinc supplementation for diarrhea: Infants <6 months: 10 mg/day; Children 6 months to 5 years: 20 mg/day; Duration: 14 days. Zinc reduces diarrhea duration by 25%, severity by 25%, and prevents recurrence for 2-3 months. It is given as dispersible tablets along with ORS as part of the 'two corner' treatment. This is a key intervention under IMNCI and IDCF."
  },
  {
    id: 19,
    question: "WHO 10 steps for management of severe acute malnutrition (SAM) - which of the following is the correct initial approach in Phase 1 (stabilization)?",
    options: [
      "High-energy diet (200 kcal/kg/day), iron supplementation from day 1",
      "Treat hypoglycemia, hypothermia, dehydration, infections; give F-75 diet; no iron initially",
      "Therapeutic food (RUTF) immediately, zinc and iron from day 1",
      "IV fluids liberally, high protein diet, multivitamins"
    ],
    answer: 1,
    explanation: "WHO 10 steps for SAM management: Phase 1 (Stabilization, Days 1-7): Treat/prevent hypoglycemia, hypothermia, dehydration, correct electrolyte imbalance, treat infection, correct micronutrient deficiencies (no iron yet - risk of oxidative stress), cautious feeding with F-75 (75 kcal/100ml, 0.9g protein/100ml). Iron is given only in Phase 2 (rehabilitation) after appetite returns, as early iron worsens outcomes in septic SAM children."
  },
  {
    id: 20,
    question: "Vitamin A supplementation schedule for children under the National Vitamin A Supplementation Program is:",
    options: [
      "100,000 IU at 6 months, then 200,000 IU every 6 months till 5 years",
      "200,000 IU at 9 months with measles vaccine, then every 6 months till 5 years",
      "100,000 IU at 9 months, then 200,000 IU at 16 months and 24 months",
      "200,000 IU every year from age 1 to 5 years"
    ],
    answer: 0,
    explanation: "National Vitamin A Supplementation Program (India): First dose = 1,00,000 IU (100,000 IU) at 9 months (given with measles vaccine); Subsequent doses = 2,00,000 IU (200,000 IU) every 6 months from 16 months to 5 years (9 additional doses). Total = 9 doses. Given as oil-based formulation. Prevents night blindness, reduces child mortality by 24%, reduces diarrhea and measles severity."
  },
  {
    id: 21,
    question: "Under the national program, iron supplementation for children aged 6-59 months is recommended as:",
    options: [
      "Iron syrup 1 mg/kg/day for 3 months continuously",
      "Biweekly iron syrup and annual deworming",
      "Weekly iron-folic acid supplementation only",
      "Iron syrup 1 mg elemental iron/kg/day for 100 days per year"
    ],
    answer: 3,
    explanation: "Under WIFS and IMNCI, for children 6-59 months: Iron syrup 1 mg elemental iron/kg/day for 100 days per year (Anemia Mukt Bharat program). For 6-11 months: iron drops; 12-59 months: syrup. Hemoglobin cut-off for anemia in children <5 years is <11 g/dL. The Anemia Mukt Bharat strategy targets 6 beneficiary groups including children 6-59 months and 5-9 years."
  },
  {
    id: 22,
    question: "National Deworming Day (NDD) uses which drug for deworming children?",
    options: [
      "Mebendazole 500 mg single dose",
      "Albendazole 400 mg single dose for children >2 years and 200 mg for 1-2 years",
      "Levamisole 2.5 mg/kg single dose",
      "Pyrantel pamoate 10 mg/kg for 3 days"
    ],
    answer: 1,
    explanation: "National Deworming Day (NDD, launched February 2015): Albendazole 400 mg single dose for children 2-19 years; 200 mg (half tablet) for children 1-2 years. Conducted biannually (February and August) through schools and anganwadis. Targets soil-transmitted helminths (STH). Albendazole is the WHO-recommended drug for mass drug administration (MDA) for STH control."
  },
  {
    id: 23,
    question: "DKSHA initiative in child health refers to:",
    options: [
      "Diarrhea, Kala-azar, Severe malnutrition, HIV/AIDS elimination program",
      "Dast, Khansi, Sukhad (dry) throat, HIV - a community awareness program",
      "A scheme to provide door-to-door health services in tribal areas",
      "Diarrhea control, Key nutrition actions, Sanitation and Hygiene, Acute respiratory illness management - an integrated child health package"
    ],
    answer: 3,
    explanation: "DKSHA (Diarrhea control, Key nutrition actions, Sanitation and Hygiene, Acute respiratory illness) is an integrated child health package under IMNCI strengthening. It integrates management of the two leading causes of under-5 mortality (pneumonia and diarrhea) with nutrition and WASH interventions. This reflects the convergence approach in India's child survival strategy."
  },
  {
    id: 24,
    question: "Child Death Review (CDR) at facility level involves all of the following EXCEPT:",
    options: [
      "Identifying medical causes of death",
      "Analyzing avoidable factors and missed opportunities",
      "Imposing penalties on health workers responsible for the death",
      "Recommending corrective actions to prevent similar deaths"
    ],
    answer: 2,
    explanation: "Child Death Review (CDR) is a quality improvement tool that involves: identifying medical causes of death, analyzing avoidable/contributing factors (patient, provider, system delays - 3 delays model), identifying missed opportunities for intervention, and recommending corrective actions. CDR is NOT punitive; it is a learning process. Community-based CDR uses verbal autopsy. Social autopsy examines social, behavioral, and health system factors contributing to death."
  },
  {
    id: 25,
    question: "As per the current Universal Immunization Programme (UIP) schedule in India, BCG vaccine is given at:",
    options: [
      "Birth or as early as possible up to 1 year of age",
      "6 weeks of age",
      "Birth or up to 2 weeks of age only",
      "Birth and again at 6 months as a booster"
    ],
    answer: 0,
    explanation: "BCG is given at birth or as early as possible after birth, up to 1 year of age (after 1 year, Mantoux test should be done first). BCG protects against severe forms of tuberculosis (miliary TB and TB meningitis) in children. Single dose, 0.1 ml intradermal, left upper arm. India uses Danish 1331 strain. No booster recommended in UIP."
  },
  {
    id: 26,
    question: "Pneumococcal Conjugate Vaccine (PCV) was introduced in India's UIP. The schedule for PCV13 is:",
    options: [
      "2 doses at 6 and 14 weeks",
      "3 doses at 6, 10, and 14 weeks with no booster",
      "2 primary doses at 6 and 14 weeks with a booster at 9 months",
      "Single dose at 9 months with measles vaccine"
    ],
    answer: 2,
    explanation: "PCV13 schedule under India's UIP (2+1 schedule): Primary doses at 6 weeks and 14 weeks; booster at 9 months. PCV was introduced in select states from 2017 and expanded universally. It protects against invasive pneumococcal disease (meningitis, bacteremia, pneumonia). PCV is given as 0.5 ml intramuscular injection."
  },
  {
    id: 27,
    question: "Inactivated Poliovirus Vaccine (IPV) was introduced into India's UIP. The recommended schedule is:",
    options: [
      "2 doses at 6 and 14 weeks IM",
      "Single fractional dose (fIPV) at 6 and 14 weeks intradermally",
      "1 full dose IM at 14 weeks only",
      "3 doses at 6, 10, and 14 weeks IM"
    ],
    answer: 1,
    explanation: "India introduced fractional IPV (fIPV) in UIP: Two intradermal doses at 6 and 14 weeks (0.1 ml each intradermally, anterolateral aspect of right thigh). Fractional dose (1/5 of full IM dose) is as immunogenic as full dose for seroconversion. Given alongside OPV. After India was certified polio-free in 2014, IPV was added to strengthen immunity and address vaccine-derived poliovirus (VDPV) concerns."
  },
  {
    id: 28,
    question: "Mission Indradhanush was launched in India to target which children for immunization?",
    options: [
      "All children under 5 years for all vaccines",
      "Children partially immunized or unimmunized under 2 years and pregnant women missed by routine immunization",
      "Only newborns at birth for BCG and Hepatitis B",
      "Children aged 5-14 years for school-based immunization"
    ],
    answer: 1,
    explanation: "Mission Indradhanush (launched December 2014) targets children (0-2 years) who are unimmunized or partially immunized and pregnant women missed by the routine immunization program. Conducted in 4 rounds per district per year for 7 days each. Intensified Mission Indradhanush (IMI) 1.0 was launched in 2017, IMI 2.0 in 2019-20, IMI 3.0 in 2021. Goal: achieve >90% full immunization coverage."
  },
  {
    id: 29,
    question: "Rashtriya Bal Swasthya Karyakram (RBSK) screens children for '4Ds'. Which of the following correctly lists the 4Ds?",
    options: [
      "Defects, Diseases, Deficiencies, Developmental delays",
      "Diabetes, Defects, Disabilities, Delays",
      "Deficiencies, Disabilities, Developmental delays, Dental problems",
      "Defects at birth, Diseases of childhood, Disorders of behavior, Developmental delays"
    ],
    answer: 0,
    explanation: "RBSK (launched 2013) screens children (0-18 years) for 4Ds: 1) Defects at birth (30 conditions including congenital heart disease, cleft lip/palate, Down syndrome, congenital hypothyroidism); 2) Diseases of childhood (anemia, rheumatic heart disease, reactive airway disease, vitamin deficiencies); 3) Deficiencies (malnutrition, stunting, wasting, anemia); 4) Developmental delays including disabilities (vision, hearing, locomotor, cognitive). Mobile health teams (2 teams per block) screen at anganwadis (0-6 years) and schools (6-18 years)."
  },
  {
    id: 30,
    question: "Under RBSK, each block has how many mobile health teams and what is the composition of each team?",
    options: [
      "1 team per block; 1 medical officer, 2 paramedics",
      "2 teams per block; each with 1 AYUSH doctor, 1 ANM, and 1 pharmacist",
      "2 teams per block; each with 1 medical officer (MBBS/AYUSH) and 1 female health worker",
      "1 team per district; 2 medical officers and 2 paramedics"
    ],
    answer: 2,
    explanation: "RBSK Mobile Health Teams: 2 teams per block. Each team consists of 1 medical officer (MBBS or AYUSH doctor) and 1 female multi-purpose worker (ANM/health worker). Teams screen children at anganwadi centres (0-6 years) and government/government-aided schools (6-18 years). Conditions detected are referred to District Early Intervention Centres (DEICs) or higher facilities for management."
  },
  {
    id: 31,
    question: "The school health program under NHM includes health check-ups for school children at which intervals?",
    options: [
      "Annual health check-up for all school children",
      "Health check at enrollment, class 1, class 6, and class 9",
      "Biannual screening in classes 1, 3, 5, 7, 9, and 11",
      "RBSK teams screen at enrollment and class 5 only"
    ],
    answer: 0,
    explanation: "The School Health Program under NHM (now integrated with RBSK) provides annual health check-ups for all government school children (classes 1-12) by RBSK mobile health teams. Check-ups cover: growth assessment (height, weight, BMI), vision screening, hearing screening, dental check, anemia screening, and screening for other conditions. WIFS is also administered through schools."
  },
  {
    id: 32,
    question: "Rashtriya Kishor Swasthya Karyakram (RKSK) was launched in 2014. The peer educator under RKSK is called:",
    options: [
      "ASHA Sahyogini",
      "Saathiya",
      "Kishor Mitra",
      "Yuva Sathi"
    ],
    answer: 1,
    explanation: "RKSK (Rashtriya Kishor Swasthya Karyakram, launched January 2014) addresses adolescent health through 6 components: nutrition, sexual and reproductive health, non-communicable diseases, substance abuse, injuries/violence, and mental health. The peer educator under RKSK is called 'Saathiya' (friend/companion). Saathiya resource kit is provided. Adolescent Friendly Health Clinics (AFHCs) are established at CHC/PHC level."
  },
  {
    id: 33,
    question: "Weekly Iron Folic Acid Supplementation (WIFS) program targets which age group?",
    options: [
      "Children 6-59 months only",
      "Adolescent boys and girls aged 10-19 years",
      "Girls aged 11-14 years and pregnant women only",
      "Women of reproductive age 15-45 years"
    ],
    answer: 1,
    explanation: "WIFS targets adolescents aged 10-19 years (both boys and girls in school-going population). It provides: IFA tablet (iron 60 mg + folic acid 500 mcg) weekly; deworming with albendazole 400 mg biannually; and nutrition and health counseling. Administered through schools (weekly on fixed day) and anganwadis for out-of-school adolescents. Part of Anemia Mukt Bharat strategy."
  },
  {
    id: 34,
    question: "Intensified Diarrhoea Control Fortnight (IDCF) is conducted in India during:",
    options: [
      "February and August every year",
      "June and November every year",
      "July (monsoon season) every year",
      "January and July every year"
    ],
    answer: 2,
    explanation: "Intensified Diarrhoea Control Fortnight (IDCF) is conducted in July every year (coinciding with monsoon season when diarrheal diseases peak). It focuses on: ORS distribution, zinc supplementation, promotion of hand washing, safe drinking water, and continuation of breastfeeding. ASHAs and AWWs ensure ORS and zinc are available at household level. IDCF was later merged with other child health initiatives."
  },
  {
    id: 35,
    question: "Social autopsy in the context of child health refers to:",
    options: [
      "Post-mortem examination of a child's body to determine cause of death",
      "Community-based review of social, behavioral, and health system factors contributing to a child's death",
      "Review of death certificates by a panel of medical experts",
      "Legal investigation into suspicious child deaths"
    ],
    answer: 1,
    explanation: "Social autopsy is a community-based tool to investigate and analyze the social, behavioral, and health system factors (beyond immediate medical cause) that contributed to a child's death. It uses structured interviews with family members and community to identify: delay in recognizing illness (first delay), delay in seeking care (second delay), delay in receiving care (third delay - 3 delays model). It generates community-level learning to prevent future deaths."
  },
  {
    id: 36,
    question: "MAA (Mothers' Absolute Affection) programme was launched by GoI to promote:",
    options: [
      "Maternal nutrition during pregnancy",
      "Breastfeeding, specifically focused on creating enabling environment for breastfeeding through health system",
      "Mother and child bonding through skin-to-skin contact",
      "Antenatal care attendance by mothers"
    ],
    answer: 1,
    explanation: "MAA (Mothers' Absolute Affection) programme was launched in August 2016 to intensify efforts to promote breastfeeding. Key components: enabling environment for breastfeeding at hospitals (lactation support), counseling by healthcare workers (ASHA, ANM, AWW), community-level promotion, mass media campaign, and monitoring through HMIS. It integrates BFHI principles and focuses on the first 1000 days of life."
  },
  {
    id: 37,
    question: "Baby-Friendly Hospital Initiative (BFHI) '10 Steps to Successful Breastfeeding' includes all EXCEPT:",
    options: [
      "Initiate breastfeeding within one hour of birth",
      "Give newborns no food or drink other than breast milk unless medically indicated",
      "Supplement breastfeeding with infant formula for LBW babies from day 1",
      "Practice rooming-in - allow mothers and infants to remain together 24 hours a day"
    ],
    answer: 2,
    explanation: "BFHI 10 Steps (revised 2018) include: have a written breastfeeding policy, train staff, inform pregnant women about benefits of breastfeeding, help mothers initiate breastfeeding within 1 hour, show mothers how to breastfeed, give newborns no food/drink other than breast milk (unless medically indicated), practice rooming-in 24 hours, encourage breastfeeding on demand, give no pacifiers/artificial nipples, foster establishment of breastfeeding support groups. Supplementing with formula routinely for LBW is NOT a BFHI step."
  },
  {
    id: 38,
    question: "As per NFHS-5 (2019-21), the Infant Mortality Rate (IMR) in India is:",
    options: [
      "32 per 1000 live births",
      "35 per 1000 live births",
      "40 per 1000 live births",
      "28 per 1000 live births"
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21) data: IMR in India = 35 per 1000 live births (rural 40, urban 24). Neonatal Mortality Rate (NMR) = 25 per 1000 live births. Under-5 Mortality Rate (U5MR) = 42 per 1000 live births. SRS 2020 reported IMR = 28 per 1000 live births. India has achieved MDG 4 target (67% reduction in U5MR from 1990 to 2015). SDG target: end preventable deaths of newborns and children under 5 (NMR <12, U5MR <25 by 2030)."
  },
  {
    id: 39,
    question: "Perinatal mortality rate is defined as:",
    options: [
      "Deaths occurring from birth to 7 days per 1000 live births",
      "Stillbirths (>=28 weeks gestation) plus early neonatal deaths (0-7 days) per 1000 total births",
      "Deaths from 22 weeks gestation to 28 days of life per 1000 live births",
      "Stillbirths plus neonatal deaths per 1000 live births"
    ],
    answer: 1,
    explanation: "Perinatal Mortality Rate (PMR) = (Stillbirths at >=28 weeks gestation + Early neonatal deaths at 0-7 days) / 1000 total births (live births + stillbirths). WHO uses >=22 weeks in some definitions. India's SRS PMR was approximately 28 per 1000 total births (2016). Perinatal period = 28 weeks gestation to 7 days after birth. Key indicator for quality of obstetric and newborn care."
  },
  {
    id: 40,
    question: "Stillbirth rate as defined by WHO is:",
    options: [
      "Number of babies born dead after 20 weeks per 1000 live births",
      "Number of babies born dead after 28 weeks of gestation per 1000 total births",
      "Number of babies born dead at any gestation per 1000 deliveries",
      "Number of babies born dead after 22 weeks per 1000 live births"
    ],
    answer: 1,
    explanation: "WHO definition of Stillbirth Rate: Number of stillbirths (babies born dead after 28 completed weeks of gestation) per 1000 total births (live births + stillbirths). Some countries use 22 or 20 weeks. India's stillbirth rate from SRS is approximately 3-4 per 1000 total births (2019-20). Stillbirths are not registered in India's civil registration system routinely - a major gap. Every Newborn Action Plan target: <=12 stillbirths per 1000 total births by 2030."
  },
  {
    id: 41,
    question: "Child Sex Ratio (CSR) as per Census 2011 refers to:",
    options: [
      "Number of females per 1000 males in the 0-6 year age group",
      "Number of males per 1000 females in the 0-6 year age group",
      "Sex ratio at birth (girls per 1000 boys)",
      "Number of females per 1000 males in the under-18 age group"
    ],
    answer: 0,
    explanation: "Child Sex Ratio (CSR) = Number of females per 1000 males in the 0-6 year age group. Census 2011: CSR = 919 (national), declined from 927 in 2001 and 945 in 1991. NFHS-5 Sex Ratio at Birth (SRB) = 929 girls per 1000 boys (improved from 919 in NFHS-4). The declining CSR reflects son preference, female foeticide, and neglect of girl child. Beti Bachao Beti Padhao (BBBP) scheme addresses this."
  },
  {
    id: 42,
    question: "As per NFHS-5 (2019-21), full immunization coverage in children aged 12-23 months in India is approximately:",
    options: [
      "55%",
      "62%",
      "76%",
      "85%"
    ],
    answer: 2,
    explanation: "NFHS-5 (2019-21): Full immunization coverage in children aged 12-23 months = 76.4% (improved from 62% in NFHS-4, 2015-16). Full immunization is defined as receiving BCG, 3 doses each of DPT and polio (excluding birth dose), and measles vaccine. States with highest coverage: Sikkim, Goa. States with lowest: Nagaland, Meghalaya. Mission Indradhanush contributed to this improvement."
  },
  {
    id: 43,
    question: "Institutional delivery rate in India as per NFHS-5 (2019-21) is approximately:",
    options: [
      "61.9%",
      "78.9%",
      "89.0%",
      "94.0%"
    ],
    answer: 2,
    explanation: "NFHS-5 (2019-21): Institutional deliveries = 88.6% (increased from 78.9% in NFHS-4). Public facility deliveries = 61.9%. Private facility deliveries = 26.7%. Rural institutional delivery = 85.8%; Urban = 94.3%. This significant improvement is attributed to JSY (Janani Suraksha Yojana), JSSK, and strengthening of delivery facilities under NHM. The SDG target is 100% skilled birth attendance."
  },
  {
    id: 44,
    question: "Exclusive breastfeeding rate for infants under 6 months in India as per NFHS-5 (2019-21) is:",
    options: [
      "41.6%",
      "54.9%",
      "63.7%",
      "72.1%"
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21): Exclusive breastfeeding rate for infants <6 months = 63.7% (improved from 54.9% in NFHS-4). Breastfeeding within 1 hour of birth = 41.5% (improved from 41.6%). Children who ever breastfed = 92.2%. Timely initiation (within 1 hour) is lower than exclusive breastfeeding rates, indicating need to strengthen immediate postpartum support. MAA programme and Baby-Friendly Hospital Initiative (BFHI) target these indicators."
  },
  {
    id: 45,
    question: "District Early Intervention Centres (DEICs) under RBSK provide which services?",
    options: [
      "Only diagnostic services for congenital abnormalities",
      "Early detection, diagnosis, early intervention, management, follow-up, and referral for surgeries/treatment for conditions identified by RBSK",
      "Immunization and nutrition services for children 0-18 years",
      "Intensive care for sick newborns referred from block level"
    ],
    answer: 1,
    explanation: "District Early Intervention Centres (DEICs) are established at district headquarters under RBSK. They provide: early detection and diagnosis (specialist consultations - pediatrician, ophthalmologist, ENT, dentist, psychologist), early intervention (physiotherapy, speech therapy, occupational therapy), management, follow-up, and referral for surgeries/tertiary care under Rashtriya Arogya Nidhi or State illness assistance funds. DEICs bridge RBSK screening and tertiary care."
  },
  {
    id: 46,
    question: "Rashtriya Kishor Swasthya Karyakram (RKSK) addresses adolescent health through how many key thematic areas?",
    options: [
      "4 thematic areas",
      "5 thematic areas",
      "6 thematic areas",
      "8 thematic areas"
    ],
    answer: 2,
    explanation: "RKSK addresses 6 thematic areas: 1) Nutrition, 2) Sexual and reproductive health (SRH), 3) Non-communicable diseases (including mental health), 4) Substance misuse, 5) Injuries and violence (including gender-based violence), 6) Non-communicable diseases. RKSK also focuses on adolescents with disabilities. Saathiya peer educators, Adolescent Friendly Health Clinics (AFHCs), and school health platforms are key implementation mechanisms."
  },
  {
    id: 47,
    question: "PM CARES for Children scheme was launched to support children who lost both parents to COVID-19. The scheme provides:",
    options: [
      "Monthly stipend of Rs. 2000 till age 18",
      "Monthly stipend, scholarship, health insurance under PM-JAY, and corpus fund of Rs. 10 lakh at age 23",
      "Free education only up to class 12 in government schools",
      "One-time cash transfer of Rs. 1 lakh and free health insurance"
    ],
    answer: 1,
    explanation: "PM CARES for Children (launched May 2021) for children orphaned due to COVID-19: monthly stipend (10,000/month from age 18 to 23), scholarship for class 6-12 and higher education, free education in central schools or residential schools (Navodaya/Kendriya Vidyalaya), health insurance under Ayushman Bharat PM-JAY (Rs. 5 lakh per year), and a corpus fund of Rs. 10 lakh released at age 23. Child Care Institutions (CCIs) manage children without family support."
  },
  {
    id: 48,
    question: "National Deworming Day (NDD) in India is observed on which dates?",
    options: [
      "10 January and 10 July every year",
      "10 February and 10 August every year",
      "1 February and 1 August every year",
      "15 February and 15 August every year"
    ],
    answer: 1,
    explanation: "National Deworming Day (NDD) is observed on 10 February and 10 August every year (biannual). Targets children aged 1-19 years. Platform: schools (government and government-aided) and anganwadi centres. Albendazole is administered by teachers and AWWs (no prescription required). Mop-up day on 15 February and 15 August for absentees. India's NDD is the world's largest deworming program."
  },
  {
    id: 49,
    question: "As per NFHS-5 (2019-21), the prevalence of stunting (height-for-age < -2SD) in children under 5 years in India is:",
    options: [
      "25.0%",
      "35.5%",
      "38.4%",
      "48.0%"
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21) child nutrition indicators: Stunting (height-for-age <-2SD) = 35.5% (decreased from 38.4% in NFHS-4); Wasting (weight-for-height <-2SD) = 19.3% (increased from 21.0% - but some states showed increase); Underweight (weight-for-age <-2SD) = 32.1% (decreased from 35.8%); Severe wasting = 7.7%. Despite improvements, levels remain high. India contributes to about 1/3 of world's stunted children. Poshan Abhiyaan (National Nutrition Mission) targets 2% annual reduction in stunting."
  },
  {
    id: 50,
    question: "Under ICDS (Integrated Child Development Services), the package of services does NOT include:",
    options: [
      "Supplementary nutrition",
      "Immunization",
      "Health check-up",
      "Curative medical treatment for sick children"
    ],
    answer: 3,
    explanation: "ICDS package of 6 services: 1) Supplementary nutrition (SNP - 500 kcal, 12-15g protein for children 6 months-6 years; 600 kcal for severely malnourished; 600 kcal, 18-20g protein for pregnant and lactating women); 2) Immunization (through ANM); 3) Health check-up; 4) Referral services; 5) Pre-school non-formal education (3-6 years); 6) Nutrition and health education (for women 15-45 years). Curative medical treatment is NOT part of ICDS - referral is provided instead. ICDS is the world's largest integrated ECD program."
  }
];

export default questions;

const questions = [
  // Q1-Q10: Ayushman Bharat & PM-JAY
  {
    id: 1,
    question: "What is the annual health cover provided under Pradhan Mantri Jan Arogya Yojana (PM-JAY) per family?",
    options: ["Rs. 3 lakh", "Rs. 5 lakh", "Rs. 10 lakh", "Rs. 1 lakh"],
    answer: 1,
    explanation: "PM-JAY provides a health cover of Rs. 5 lakh per family per year for secondary and tertiary care hospitalisation. It was launched on 23 September 2018."
  },
  {
    id: 2,
    question: "The beneficiary base of PM-JAY is determined on the basis of which database?",
    options: ["National Population Register (NPR)", "Socio-Economic Caste Census (SECC) 2011", "Aadhaar Enrollment Data", "BPL Census 2002"],
    answer: 1,
    explanation: "PM-JAY identifies beneficiaries based on deprivation and occupational criteria from the Socio-Economic Caste Census (SECC) 2011 data for both rural and urban populations."
  },
  {
    id: 3,
    question: "Under Ayushman Bharat, the target for conversion of Sub-Health Centres and Primary Health Centres into Health and Wellness Centres (HWCs) was set at how many HWCs by 2022?",
    options: ["1,00,000", "1,50,000", "50,000", "75,000"],
    answer: 1,
    explanation: "The Ayushman Bharat scheme aimed to create 1,50,000 Health and Wellness Centres (HWCs) by December 2022 by upgrading Sub-Health Centres and Primary Health Centres across India."
  },
  {
    id: 4,
    question: "The Ayushman Bharat Digital Mission (ABDM) was launched nationally on which date?",
    options: ["15 August 2021", "27 September 2021", "1 January 2022", "2 October 2021"],
    answer: 1,
    explanation: "Ayushman Bharat Digital Mission (ABDM) was launched nationally by Prime Minister Narendra Modi on 27 September 2021. Its pilot was launched on 15 August 2020 in six Union Territories."
  },
  {
    id: 5,
    question: "ABHA (Ayushman Bharat Health Account) ID is a unique health identifier consisting of how many digits?",
    options: ["10 digits", "12 digits", "14 digits", "16 digits"],
    answer: 1,
    explanation: "ABHA (Ayushman Bharat Health Account) ID is a 14-digit unique health identifier that allows individuals to link their health records across healthcare providers."
  },
  {
    id: 6,
    question: "Which nodal agency implements PM-JAY at the central level?",
    options: ["Ministry of Health and Family Welfare", "National Health Authority (NHA)", "NITI Aayog", "Central Government Health Scheme"],
    answer: 1,
    explanation: "The National Health Authority (NHA) is the apex body implementing PM-JAY at the central level. It was established under the Societies Registration Act, 1860."
  },
  {
    id: 7,
    question: "Under PM-JAY, what is the cost-sharing ratio between the Central Government and State Governments for non-NE/hilly states?",
    options: ["50:50", "60:40", "75:25", "90:10"],
    answer: 1,
    explanation: "For non-NE and non-hilly states, PM-JAY follows a 60:40 funding ratio between the Centre and States. For NE and hilly states, the ratio is 90:10."
  },
  {
    id: 8,
    question: "What is the key portability feature of PM-JAY that distinguishes it from state schemes?",
    options: ["Benefits can be availed only in home state", "Benefits can be availed at any empanelled hospital across India", "Only government hospitals are covered", "Benefits are restricted to district hospitals"],
    answer: 1,
    explanation: "PM-JAY offers full portability, meaning a beneficiary from any state can avail cashless treatment at any empanelled hospital across India, making it a truly national scheme."
  },
  {
    id: 9,
    question: "As per the Ayushman Bharat PM-JAY scheme, approximately how many families are covered under the scheme?",
    options: ["5 crore families", "10 crore families", "15 crore families", "20 crore families"],
    answer: 1,
    explanation: "PM-JAY covers approximately 10.74 crore poor and vulnerable families (about 50 crore beneficiaries), constituting the bottom 40% of India's population."
  },
  {
    id: 10,
    question: "Under Ayushman Bharat Digital Mission, which component enables health data exchange between healthcare providers?",
    options: ["Health ID", "Health Facility Registry (HFR)", "Healthcare Professionals Registry (HPR)", "Unified Health Interface (UHI)"],
    answer: 3,
    explanation: "The Unified Health Interface (UHI) is an open protocol under ABDM that enables exchange of health data between different healthcare applications and providers, facilitating interoperability."
  },

  // Q11-Q20: Maternal & Child Health Schemes
  {
    id: 11,
    question: "Under Janani Suraksha Yojana (JSY), what is the cash incentive provided to a BPL mother for institutional delivery in a Low Performing State (LPS) in rural areas?",
    options: ["Rs. 700", "Rs. 1400", "Rs. 1200", "Rs. 500"],
    answer: 1,
    explanation: "Under JSY in Low Performing States (LPS), a BPL mother in rural areas receives Rs. 1400 as cash assistance. In urban areas it is Rs. 1000. The ASHA also receives Rs. 600 for facilitating institutional delivery in LPS."
  },
  {
    id: 12,
    question: "Janani Shishu Suraksha Karyakram (JSSK) was launched in which year?",
    options: ["2005", "2008", "2011", "2013"],
    answer: 2,
    explanation: "Janani Shishu Suraksha Karyakram (JSSK) was launched on 1 June 2011. It entitles all pregnant women delivering in public health institutions to absolutely free and no-expense delivery including caesarean section."
  },
  {
    id: 13,
    question: "Under Pradhan Mantri Matru Vandana Yojana (PMMVY), what is the total cash benefit provided for the first living child?",
    options: ["Rs. 3000", "Rs. 5000", "Rs. 6000", "Rs. 8000"],
    answer: 1,
    explanation: "PMMVY provides Rs. 5000 as maternity benefit in three instalments for the first living child. The scheme was launched in 2017 under the National Food Security Act, 2013. An additional Rs. 1000 is provided through JSY for institutional delivery."
  },
  {
    id: 14,
    question: "LaQshya programme was launched to improve quality of care in which specific setting?",
    options: ["Antenatal care clinics", "Labour rooms and maternity operation theatres", "Neonatal Intensive Care Units", "Nutrition Rehabilitation Centres"],
    answer: 1,
    explanation: "LaQshya (Labour Room Quality Improvement Initiative) was launched in 2017-18 to improve quality of care in labour rooms and maternity operation theatres in public health facilities to reduce preventable maternal and newborn mortality."
  },
  {
    id: 15,
    question: "SUMAN (Surakshit Matritva Aashwasan) initiative guarantees which of the following?",
    options: ["Free medicines to all pregnant women", "Zero tolerance for denial of healthcare to mothers and newborns in public facilities", "100% institutional deliveries by 2025", "Free antenatal ultrasound to all pregnant women"],
    answer: 1,
    explanation: "SUMAN initiative, launched in October 2019, guarantees zero tolerance for denial of respectful and dignified healthcare at no cost to every woman and newborn visiting public health facilities."
  },
  {
    id: 16,
    question: "The MAA (Mothers' Absolute Affection) programme was launched in which year to promote breastfeeding?",
    options: ["2012", "2014", "2016", "2018"],
    answer: 2,
    explanation: "MAA (Mothers' Absolute Affection) programme was launched on 7 August 2016 by the Ministry of Health and Family Welfare to intensify support for breastfeeding and improve practices related to infant and young child feeding."
  },
  {
    id: 17,
    question: "Rashtriya Bal Swasthya Karyakram (RBSK) screens children for 4 Ds. Which of the following is NOT one of the 4 Ds?",
    options: ["Defects at birth", "Deficiencies", "Diseases", "Developmental delays"],
    answer: 1,
    explanation: "RBSK screens children from birth to 18 years for 4 Ds: Defects at birth, Diseases, Deficiencies, and Developmental delays and disabilities. 'Deficiencies' is one of the 4 Ds, but as an isolated option it might seem confusing — the 4th D is Developmental delays (not Disabilities as a standalone). All four options listed are part of RBSK. However, option B 'Deficiencies' is correctly included in RBSK screening."
  },
  {
    id: 18,
    question: "Under RBSK, how many health conditions are screened in children from birth to 18 years of age?",
    options: ["20 conditions", "30 conditions", "32 conditions", "45 conditions"],
    answer: 2,
    explanation: "RBSK screens children for 30 identified health conditions covering birth defects, diseases, deficiencies, developmental delays, and disabilities from birth to 18 years through dedicated Mobile Health Teams."
  },
  {
    id: 19,
    question: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) provides guaranteed antenatal care on which specific day of every month?",
    options: ["1st of every month", "5th of every month", "9th of every month", "15th of every month"],
    answer: 2,
    explanation: "PMSMA provides guaranteed, comprehensive and quality antenatal care to all pregnant women on the 9th of every month at government health facilities. Gynaecologists and other specialists volunteer for this programme."
  },
  {
    id: 20,
    question: "Janani Suraksha Yojana (JSY) was launched in which year as a safe motherhood intervention under the National Rural Health Mission?",
    options: ["2003", "2005", "2007", "2009"],
    answer: 1,
    explanation: "JSY was launched in April 2005 under the National Rural Health Mission (NRHM) as a 100% centrally sponsored scheme integrating cash assistance with delivery and post-delivery care."
  },

  // Q21-Q30: Nutrition Schemes
  {
    id: 21,
    question: "POSHAN Abhiyaan (National Nutrition Mission) was launched in which year and set targets to reduce stunting by how many percentage points per year?",
    options: ["2017; 1 percentage point per year", "2018; 2 percentage points per year", "2018; 1 percentage point per year", "2019; 3 percentage points per year"],
    answer: 1,
    explanation: "POSHAN Abhiyaan was launched on 8 March 2018 from Jhunjhunu, Rajasthan. It aims to reduce stunting, undernutrition, and low birth weight by 2% per year and anaemia by 3% per year."
  },
  {
    id: 22,
    question: "The Integrated Child Development Services (ICDS) scheme was launched in which year?",
    options: ["1972", "1975", "1978", "1980"],
    answer: 1,
    explanation: "ICDS was launched on 2 October 1975. It is one of the world's largest programmes for early childhood care and development, providing an integrated package of services including nutrition, health, and education."
  },
  {
    id: 23,
    question: "Under the PM POSHAN Scheme (formerly Mid-Day Meal Scheme), what is the prescribed calorie and protein content for upper primary students (Classes 6-8)?",
    options: ["450 kcal and 12g protein", "700 kcal and 20g protein", "600 kcal and 18g protein", "500 kcal and 15g protein"],
    answer: 1,
    explanation: "Under PM POSHAN (Mid-Day Meal Scheme), upper primary students (Classes 6-8) should receive at least 700 kcal of energy and 20g of protein per day. For primary students (Classes 1-5), it is 450 kcal and 12g protein."
  },
  {
    id: 24,
    question: "Anemia Mukt Bharat strategy targets reducing anemia prevalence by how many percentage points each year across all age groups?",
    options: ["1 percentage point per year", "2 percentage points per year", "3 percentage points per year", "5 percentage points per year"],
    answer: 2,
    explanation: "Anemia Mukt Bharat (launched 2018) aims to reduce the prevalence of anaemia by 3 percentage points per year among children (6-59 months), adolescents (5-19 years), and women of reproductive age (15-49 years)."
  },
  {
    id: 25,
    question: "The Eat Right India movement is led by which regulatory body?",
    options: ["Ministry of Health and Family Welfare", "Food Safety and Standards Authority of India (FSSAI)", "ICMR", "National Nutrition Mission Secretariat"],
    answer: 1,
    explanation: "The Eat Right India movement is spearheaded by FSSAI (Food Safety and Standards Authority of India) to nudge people towards eating right through regulatory, collaborative, and empowerment-based tools."
  },
  {
    id: 26,
    question: "Under the Food Fortification initiative in India, which vitamins and minerals are mandated to be added to rice distributed through PDS?",
    options: ["Vitamin A and D only", "Iron, folic acid, and Vitamin B12", "Iodine and Zinc", "Vitamin C and Calcium"],
    answer: 1,
    explanation: "Fortified rice under the PDS contains Iron (28-42.5 mg/kg), Folic Acid (75-125 mcg/kg), and Vitamin B12 (0.75-1.25 mcg/kg). The government aims to supply fortified rice through PDS, MDM, and ICDS by 2024."
  },
  {
    id: 27,
    question: "The National Iodine Deficiency Disorders Control Programme (NIDDCP) mandates universal iodisation of salt with iodine content of at least how many ppm at the production level?",
    options: ["15 ppm", "30 ppm", "45 ppm", "60 ppm"],
    answer: 1,
    explanation: "Under NIDDCP, the Prevention of Food Adulteration Act mandates that iodised salt should contain not less than 30 ppm of iodine at the production level and not less than 15 ppm at the consumption level."
  },
  {
    id: 28,
    question: "POSHAN Abhiyaan uses a real-time monitoring system through which technology platform?",
    options: ["NIKSHAY portal", "HMIS (Health Management Information System)", "ICDS-CAS (Common Application Software)", "e-Mamta"],
    answer: 2,
    explanation: "POSHAN Abhiyaan uses the ICDS-CAS (Common Application Software) for real-time monitoring and tracking of nutrition-related indicators. Anganwadi workers use smartphones to update data on this platform."
  },
  {
    id: 29,
    question: "The PM POSHAN scheme (formerly Mid-Day Meal scheme) covers students up to which class?",
    options: ["Class 5", "Class 8", "Class 10", "Class 12"],
    answer: 1,
    explanation: "PM POSHAN (Pradhan Mantri Poshan Shakti Nirman) covers students of Classes 1 to 8 in government and government-aided schools. The scheme was renamed from Mid-Day Meal scheme in 2021."
  },
  {
    id: 30,
    question: "Under ICDS, Supplementary Nutrition Programme (SNP) provides how many calories and protein to a severely malnourished child per day?",
    options: ["500 kcal and 12-15g protein", "800 kcal and 20-25g protein", "600 kcal and 16-18g protein", "1000 kcal and 30g protein"],
    answer: 1,
    explanation: "Under ICDS SNP, severely malnourished children (6 months to 6 years) receive 800 kcal and 20-25g of protein per day, compared to 500 kcal and 12-15g for normal children in the same age group."
  },

  // Q31-Q40: Disease Control Programmes
  {
    id: 31,
    question: "The National Tuberculosis Elimination Programme (NTEP, formerly RNTCP) aims to achieve TB elimination in India by which year, defined as less than how many cases per lakh population?",
    options: ["2025; less than 10 cases per lakh", "2025; less than 1 case per lakh", "2030; less than 10 cases per lakh", "2035; less than 1 case per lakh"],
    answer: 1,
    explanation: "India's National Strategic Plan aims to End TB by 2025, defined as achieving less than 1 case per 1 lakh population — five years ahead of the global SDG target of 2030."
  },
  {
    id: 32,
    question: "Under the Nikshay Poshan Yojana, how much financial support is provided to TB patients per month for their nutritional needs?",
    options: ["Rs. 250 per month", "Rs. 500 per month", "Rs. 750 per month", "Rs. 1000 per month"],
    answer: 1,
    explanation: "Under Nikshay Poshan Yojana, TB patients receive Rs. 500 per month as nutritional support for the duration of their treatment. This is directly transferred to their bank accounts through DBT."
  },
  {
    id: 33,
    question: "The Pradhan Mantri TB Mukt Bharat Abhiyaan was launched in which year to support TB patients through community participation?",
    options: ["2020", "2021", "2022", "2023"],
    answer: 2,
    explanation: "Pradhan Mantri TB Mukt Bharat Abhiyaan was launched on 9 September 2022 by the President of India to mobilise community support (Ni-kshay Mitras) for TB patients by providing nutritional, diagnostic, and vocational support."
  },
  {
    id: 34,
    question: "The National AIDS Control Programme (NACP) is currently in which phase?",
    options: ["Phase III", "Phase IV", "Phase V", "Phase VI"],
    answer: 2,
    explanation: "NACP Phase V (2021-2025/26) is the current phase, focusing on achieving the UNAIDS 95-95-95 targets: 95% of people living with HIV knowing their status, 95% of those on treatment, and 95% of those virally suppressed."
  },
  {
    id: 35,
    question: "The National Vector Borne Disease Control Programme (NVBDCP) was renamed to National Centre for Vector Borne Diseases Control (NCVBDC) in which year?",
    options: ["2018", "2019", "2020", "2021"],
    answer: 2,
    explanation: "NVBDCP was reconstituted as National Centre for Vector Borne Diseases Control (NCVBDC) in 2020. It controls diseases like malaria, dengue, chikungunya, Japanese encephalitis, kala-azar, and lymphatic filariasis."
  },
  {
    id: 36,
    question: "India achieved the WHO target of eliminating Leprosy (NLEP) as a public health problem (less than 1 case per 10,000 population) at the national level in which year?",
    options: ["2000", "2002", "2005", "2007"],
    answer: 2,
    explanation: "India achieved the WHO target of elimination of leprosy as a public health problem (prevalence rate < 1 per 10,000 population) in December 2005 at the national level, though some districts still have higher rates."
  },
  {
    id: 37,
    question: "The National Programme for Control of Blindness and Visual Impairment (NPCB&VI) targets reducing blindness prevalence to what level by 2025?",
    options: ["0.1%", "0.25%", "0.3%", "0.5%"],
    answer: 1,
    explanation: "NPCB&VI aims to reduce the prevalence of blindness from 1% (1990) to 0.25% by 2025 through strategies including cataract surgeries, school eye screening, and control of corneal blindness."
  },
  {
    id: 38,
    question: "The National Mental Health Programme (NMHP) was launched in which year in India?",
    options: ["1975", "1982", "1990", "1996"],
    answer: 1,
    explanation: "NMHP was launched in 1982 based on the recommendations of the National Mental Health Policy. It was formulated with the goal of providing minimum mental health care to all, particularly in rural areas."
  },
  {
    id: 39,
    question: "The National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCS) was launched in which year?",
    options: ["2005", "2008", "2010", "2013"],
    answer: 2,
    explanation: "NPCDCS was launched in 2010 initially in 100 districts across 21 states for prevention and control of NCDs. It was later expanded under the National NCD Programme under NHM."
  },
  {
    id: 40,
    question: "Under the National Programme for Prevention and Control of Fluorosis (NPPCF), which of the following is a key intervention?",
    options: ["Chlorination of drinking water", "Provision of safe drinking water with fluoride below 1 ppm", "Mass drug administration with calcium supplements", "Compulsory fluoride testing of all foods"],
    answer: 1,
    explanation: "The key intervention under NPPCF is provision of safe drinking water with fluoride content below 1 ppm (WHO recommended limit is 1.5 ppm). The programme covers districts with endemic fluorosis and promotes defluoridation."
  },

  // Q41-Q50: Other Health Schemes
  {
    id: 41,
    question: "Under the Ayushman Bharat Health and Wellness Centres (HWCs), what is the expanded package of services that was NOT provided at Sub-Health Centres previously?",
    options: ["Immunisation services", "Care for hypertension, diabetes, and 3 common cancers screening", "Antenatal care services", "Family planning services"],
    answer: 1,
    explanation: "HWCs expanded the service package at Sub-Health Centres to include management of hypertension, diabetes, and screening for oral, breast, and cervical cancers — services previously available only at higher-level facilities."
  },
  {
    id: 42,
    question: "The Pradhan Mantri National Dialysis Programme was launched in which year under the National Health Mission to provide free dialysis to poor patients?",
    options: ["2014", "2016", "2018", "2020"],
    answer: 1,
    explanation: "PM National Dialysis Programme was launched in 2016 under NHM to provide free dialysis services to poor patients suffering from kidney disease at district hospitals through PPP mode."
  },
  {
    id: 43,
    question: "AMRIT (Affordable Medicines and Reliable Implants for Treatment) pharmacies provide medicines and implants at what approximate discount compared to market prices?",
    options: ["20-30% discount", "50-60% discount", "60-90% discount", "80-90% discount"],
    answer: 2,
    explanation: "AMRIT pharmacies, established from 2015 onwards at government hospitals, provide medicines at 50-60% discount and implants at up to 80% discount compared to maximum retail prices. They are managed by HLL Lifecare Limited."
  },
  {
    id: 44,
    question: "The Pradhan Mantri Bharatiya Janaushadhi Pariyojana (PMBJP) is implemented by which agency under the Department of Pharmaceuticals?",
    options: ["HLL Lifecare Limited", "Bureau of Pharma PSUs of India (BPPI)", "NITI Aayog", "Central Drugs Standard Control Organisation"],
    answer: 1,
    explanation: "PMBJP is implemented by the Bureau of Pharma PSUs of India (BPPI) under the Department of Pharmaceuticals, Ministry of Chemicals and Fertilizers. Jan Aushadhi Kendras provide quality generic medicines at affordable prices."
  },
  {
    id: 45,
    question: "e-Sanjeevani OPD, India's national telemedicine service, was launched in which year and has the distinction of being what?",
    options: ["2018; World's first national telemedicine service", "2019; Asia's largest telemedicine network", "2020; World's largest government-owned telemedicine service", "2021; South Asia's first telemedicine portal"],
    answer: 2,
    explanation: "e-Sanjeevani was launched in 2020 (the Doctor-to-Doctor version, eSanjeevani AB-HWC, was launched in November 2019). e-Sanjeevani OPD became the world's largest government-owned telemedicine service during the COVID-19 pandemic."
  },
  {
    id: 46,
    question: "Swachh Bharat Mission (Grameen) Phase-II aims to achieve ODF Plus status. What does ODF Plus include beyond Open Defecation Free status?",
    options: ["Only solid waste management", "Only liquid waste management", "Both solid and liquid waste management along with visual cleanliness", "Only elimination of plastic waste"],
    answer: 2,
    explanation: "ODF Plus under SBM-G Phase-II includes maintaining ODF status plus ensuring solid and liquid waste management (SLWM) and visual cleanliness in villages, covering greywater treatment, plastic waste, biodegradable waste, and fecal sludge management."
  },
  {
    id: 47,
    question: "The national emergency ambulance service '108' in India is operated through which model?",
    options: ["Fully government-owned and operated", "Public-Private Partnership (PPP) model with GVK-EMRI and other agencies", "Operated by Red Cross Society", "Managed by district hospitals directly"],
    answer: 1,
    explanation: "The 108 emergency ambulance service operates through a PPP model, primarily with GVK Emergency Management and Research Institute (GVK-EMRI) and other agencies. It provides free emergency response for medical, police, and fire emergencies."
  },
  {
    id: 48,
    question: "The 102 ambulance service in India is specifically designed for which purpose?",
    options: ["Emergency trauma care", "Maternal and child transport (non-emergency)", "Inter-facility transfer of critical patients", "Disaster response and mass casualty management"],
    answer: 1,
    explanation: "The 102 ambulance service is specifically designed for maternal and child transport — providing free non-emergency transport to pregnant women for antenatal, delivery, and post-natal care and sick newborns to health facilities."
  },
  {
    id: 49,
    question: "Under the ASHA programme, what is the minimum educational qualification required for selecting an ASHA?",
    options: ["Primary education (Class 5 pass)", "Middle school (Class 8 pass)", "High school (Class 10 pass)", "Higher secondary (Class 12 pass)"],
    answer: 1,
    explanation: "An ASHA (Accredited Social Health Activist) should have passed Class 8 (middle school) as the minimum educational qualification. She should be a woman resident of the village, preferably in the age group 25-45 years."
  },
  {
    id: 50,
    question: "The Kayakalp Award is given to public health facilities for excellence in which area? What is the cash prize for a District Hospital winning the National Kayakalp Award?",
    options: ["Excellence in maternal care; Rs. 10 lakh", "Cleanliness, hygiene, and infection control; Rs. 50 lakh", "Best NCD management; Rs. 25 lakh", "Excellence in AYUSH integration; Rs. 15 lakh"],
    answer: 1,
    explanation: "Kayakalp Awards are given to public health facilities for excellence in cleanliness, hygiene, and infection control practices. A District Hospital winning the National Kayakalp Award receives Rs. 50 lakh as cash prize, and State Award winners receive Rs. 15 lakh."
  }
]

export default questions

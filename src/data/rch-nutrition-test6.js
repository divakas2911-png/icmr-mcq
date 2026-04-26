const questions = [
  {
    id: 1,
    question: "The National Health Mission (NHM) was launched in which year, merging the National Rural Health Mission (NRHM) and the National Urban Health Mission (NUHM)?",
    options: ["2005", "2010", "2013", "2017"],
    answer: 2,
    explanation: "NHM was launched in 2013, subsuming NRHM (launched in 2005) and NUHM into a single umbrella mission to address health needs across both rural and urban populations."
  },
  {
    id: 2,
    question: "The National Rural Health Mission (NRHM) was launched in which year?",
    options: ["2000", "2005", "2008", "2012"],
    answer: 1,
    explanation: "NRHM was launched on 5th April 2005 with the goal of providing accessible, affordable, accountable, effective, and reliable primary health care, especially to the poor and vulnerable sections of rural India."
  },
  {
    id: 3,
    question: "Which of the following is NOT a component of the National Health Mission (NHM)?",
    options: ["National Rural Health Mission (NRHM)", "National Urban Health Mission (NUHM)", "National Mental Health Programme (NMHP)", "Reproductive, Maternal, Newborn, Child and Adolescent Health (RMNCH+A)"],
    answer: 2,
    explanation: "NHM has two sub-missions: NRHM and NUHM. RMNCH+A is a key strategy under NHM. The National Mental Health Programme (NMHP) is a separate national programme, not a component of NHM per se, though NHM supports its implementation."
  },
  {
    id: 4,
    question: "Village Health, Sanitation and Nutrition Committees (VHSNCs) are constituted as sub-committees of which body?",
    options: ["Gram Panchayat", "Block Development Committee", "District Health Society", "Primary Health Centre"],
    answer: 0,
    explanation: "VHSNCs are constituted as sub-committees of the Gram Panchayat. They are responsible for planning and monitoring health, sanitation, and nutrition activities at the village level and are provided with an untied fund of Rs. 10,000 per annum."
  },
  {
    id: 5,
    question: "What is the annual untied fund provided to Village Health, Sanitation and Nutrition Committees (VHSNCs) under NHM?",
    options: ["Rs. 5,000", "Rs. 10,000", "Rs. 25,000", "Rs. 50,000"],
    answer: 1,
    explanation: "Under NHM, VHSNCs are provided with an annual untied fund of Rs. 10,000 for undertaking local health action. This fund is meant for village-level activities related to health, sanitation, and nutrition."
  },
  {
    id: 6,
    question: "Which of the following is the correct eligibility criterion for selection as an ASHA (Accredited Social Health Activist)?",
    options: ["Age 18-45 years, resident of the village, preferably married/widowed/divorced, 8th pass", "Age 20-50 years, resident of the village, graduate", "Age 18-40 years, resident of the village, 10th pass mandatory", "Age 25-45 years, any educational qualification, preference to unmarried women"],
    answer: 0,
    explanation: "ASHA should be a woman resident of the village, preferably in the age group 25-45 years (18-45 in some guidelines), married/widowed/divorced, having passed 8th standard minimum educational qualification. She should be a literate woman with communication skills and leadership qualities."
  },
  {
    id: 7,
    question: "Under NHM, the Rogi Kalyan Samiti (RKS) is constituted at which level of health facility?",
    options: ["Sub-Centre level", "Primary Health Centre level", "Community Health Centre and above", "All levels including Sub-Centre"],
    answer: 2,
    explanation: "Rogi Kalyan Samitis (Patient Welfare Committees) are constituted at CHC, District Hospital, and other higher-level facilities. They are registered societies that manage hospital resources and improve quality of care. PHCs may also have RKS in some states."
  },
  {
    id: 8,
    question: "As per the Indian Public Health Standards (IPHS), a Sub-Centre (SC) caters to a population of how many people in plain areas?",
    options: ["3,000", "5,000", "10,000", "30,000"],
    answer: 1,
    explanation: "As per IPHS norms, one Sub-Centre serves a population of 5,000 in plain areas and 3,000 in hilly/tribal/difficult terrain. The Sub-Centre is the most peripheral health facility in the public health system."
  },
  {
    id: 9,
    question: "As per IPHS norms, a Primary Health Centre (PHC) caters to a population of how many in plain areas?",
    options: ["5,000", "10,000", "30,000", "80,000-1,20,000"],
    answer: 2,
    explanation: "One PHC serves a population of 30,000 in plain areas and 20,000 in hilly/tribal/difficult terrain. A PHC is the first contact point between the community and the medical officer."
  },
  {
    id: 10,
    question: "As per IPHS norms, a Community Health Centre (CHC) is established for a population norm of:",
    options: ["30,000", "80,000", "1,20,000", "3,00,000"],
    answer: 2,
    explanation: "A CHC serves a population of 1,20,000 in plain areas and 80,000 in hilly/tribal/difficult terrain. It has 30 beds, a specialist team (surgeon, physician, obstetrician/gynaecologist, paediatrician), and serves as the first referral unit."
  },
  {
    id: 11,
    question: "The National Ambulance Service '108' under NHM is primarily designed for:",
    options: ["Maternal and child transport only", "Emergency medical services (police, fire, ambulance - tri-service)", "Referral transport for BPL patients", "Mobile health clinics for remote areas"],
    answer: 1,
    explanation: "108 is an integrated emergency response service (tri-service - ambulance, police, fire) providing emergency medical care. The 102 service (Janani Express/Mamta Vahini) is dedicated to maternal and child transport. Both operate under NHM."
  },
  {
    id: 12,
    question: "Free Drugs Service Initiative (FDSI) and Free Diagnostics Service Initiative (FrDSI) are mandated under NHM. The Free Drugs list is based on:",
    options: ["WHO Essential Medicines List", "State Essential Drugs List/National List of Essential Medicines", "Drugs approved by CDSCO only", "Drugs mentioned in BNF"],
    answer: 1,
    explanation: "The Free Drugs Service Initiative mandates provision of essential drugs free of cost at public health facilities. The drug list is based on the National List of Essential Medicines (NLEM) and each state develops its own State Essential Drug List (SEDL)."
  },
  {
    id: 13,
    question: "Ayushman Bharat has two pillars. Which of the following correctly describes both pillars?",
    options: ["PMJAY and National Health Policy", "Health and Wellness Centres (HWC) and PM-JAY", "ASHA programme and PMJAY", "HWC and National Health Mission"],
    answer: 1,
    explanation: "Ayushman Bharat has two components: (1) Health and Wellness Centres (HWC) - to bring health care closer to the community; and (2) Pradhan Mantri Jan Arogya Yojana (PMJAY) - providing health protection to vulnerable families. Both were announced in Union Budget 2018."
  },
  {
    id: 14,
    question: "Under Pradhan Mantri Jan Arogya Yojana (PMJAY), what is the annual health coverage per family?",
    options: ["Rs. 1 lakh", "Rs. 2 lakh", "Rs. 5 lakh", "Rs. 10 lakh"],
    answer: 2,
    explanation: "PMJAY provides health coverage of Rs. 5 lakh per family per year for secondary and tertiary care hospitalisation. It covers the bottom 40% of India's vulnerable population (~10.74 crore families, ~50 crore beneficiaries)."
  },
  {
    id: 15,
    question: "The beneficiaries for PMJAY are identified through which database?",
    options: ["BPL card holders list", "Socio-Economic Caste Census (SECC) 2011 database", "Antyodaya Anna Yojana list", "MGNREGA beneficiary list"],
    answer: 1,
    explanation: "PMJAY beneficiaries are identified on the basis of deprivation and occupational criteria in the Socio-Economic Caste Census (SECC) 2011 data for rural and urban areas. There is no cap on family size or age."
  },
  {
    id: 16,
    question: "The apex body responsible for implementing PMJAY at the national level is:",
    options: ["Ministry of Health and Family Welfare", "National Health Authority (NHA)", "Planning Commission of India", "NITI Aayog"],
    answer: 1,
    explanation: "National Health Authority (NHA) is the apex body for implementing PMJAY at the national level. It was established in January 2018 by converting the erstwhile National Health Agency into a full-fledged authority."
  },
  {
    id: 17,
    question: "Health and Wellness Centres (HWCs) under Ayushman Bharat aim to provide comprehensive primary health care. How many service packages are included?",
    options: ["6 packages", "10 packages", "12 packages", "15 packages"],
    answer: 2,
    explanation: "HWCs provide comprehensive primary health care (CPHC) through 12 service packages including care for reproductive, maternal, newborn, child and adolescent health; communicable diseases; non-communicable diseases; mental health; ENT; ophthalmology; oral health; palliative care; trauma care; geriatric care."
  },
  {
    id: 18,
    question: "According to National Health Accounts 2019-20, what is the approximate share of Out-of-Pocket Expenditure (OOPE) in India's Total Health Expenditure (THE)?",
    options: ["28%", "38%", "48%", "58%"],
    answer: 2,
    explanation: "India's Out-of-Pocket Expenditure constitutes approximately 48% of Total Health Expenditure as per National Health Accounts estimates. This is a significant burden on households and is one of the key indicators of financial risk protection."
  },
  {
    id: 19,
    question: "Catastrophic health expenditure is defined as out-of-pocket health expenditure exceeding what threshold of total household consumption/income?",
    options: ["5%", "10%", "20%", "40%"],
    answer: 2,
    explanation: "Catastrophic health expenditure is typically defined as out-of-pocket payments for health exceeding 10-40% of household income, most commonly 10% of total consumption or 40% of non-food (capacity to pay) expenditure as per WHO definition."
  },
  {
    id: 20,
    question: "The National Health Policy 2017 targets public health expenditure to reach what percentage of GDP by 2025?",
    options: ["1.0%", "1.5%", "2.5%", "5.0%"],
    answer: 2,
    explanation: "National Health Policy 2017 envisions increasing government health expenditure to 2.5% of GDP by 2025. Currently India's government health expenditure is approximately 1.35-1.5% of GDP, which is far below the desired target."
  },
  {
    id: 21,
    question: "Central Government Health Scheme (CGHS) covers which category of beneficiaries?",
    options: ["All BPL families in India", "Central Government employees, pensioners, and their dependents", "All citizens below poverty line in cities", "ASHA workers and ANMs"],
    answer: 1,
    explanation: "CGHS covers central government employees (serving and retired), pensioners, and their dependents in specified cities. It provides comprehensive medical care through wellness centres, empanelled hospitals, and CGHS dispensaries."
  },
  {
    id: 22,
    question: "Employees' State Insurance Scheme (ESIS) is primarily applicable to employees in the organised sector drawing a monthly wage up to:",
    options: ["Rs. 10,000", "Rs. 15,000", "Rs. 21,000", "Rs. 50,000"],
    answer: 2,
    explanation: "ESIS covers employees in the organised sector (factories, establishments) drawing wages up to Rs. 21,000 per month (Rs. 25,000 for persons with disability). It provides medical care, sickness benefits, maternity benefits, disablement benefits, and dependent benefits."
  },
  {
    id: 23,
    question: "Universal Health Coverage (UHC) as defined by WHO means ensuring that:",
    options: ["All citizens receive free medical care without any payment", "All people have access to needed quality health services without financial hardship", "Government provides 100% funding for all health services", "Health services are available only through government facilities"],
    answer: 1,
    explanation: "UHC means ensuring that all people can use the promotive, preventive, curative, rehabilitative, and palliative health services they need, of sufficient quality, without suffering financial hardship. It has three dimensions: population coverage, service coverage, and financial risk protection."
  },
  {
    id: 24,
    question: "Total Health Expenditure (THE) in India is composed of which of the following?",
    options: ["Government health expenditure + Private health expenditure + External aid", "Only government expenditure at central and state levels", "Only out-of-pocket expenditure by households", "Insurance premiums + Government expenditure only"],
    answer: 0,
    explanation: "Total Health Expenditure (THE) includes: Government/public health expenditure (central + state), Private health expenditure (household OOP + private insurance + employer-provided), and External/donor funding. National Health Accounts tracks these using SHA 2011 framework."
  },
  {
    id: 25,
    question: "The Reproductive and Child Health (RCH) Programme in India evolved through which phases?",
    options: ["RCH-I (1997-2004) and RCH-II (2005-2012)", "RCH-I (1990-1997) and RCH-II (1997-2005)", "RCH-I (2000-2005) and RCH-II (2005-2010)", "RCH-I (1994-2000) and RCH-II (2002-2010)"],
    answer: 0,
    explanation: "RCH-I was launched in 1997-98 replacing the earlier Target Free Approach, focusing on client-centred, community needs-based approach. RCH-II (2005-2012) was launched under NRHM as the next phase with expanded coverage and services."
  },
  {
    id: 26,
    question: "RMNCH+A strategy stands for:",
    options: ["Rural, Maternal, Neonatal, Child Health and Adolescent strategy", "Reproductive, Maternal, Newborn, Child and Adolescent Health strategy", "Reproductive, Maternal, Nutritional, Child and Adult Health", "Rural, Maternal, Nutritional, Community and Adolescent Health"],
    answer: 1,
    explanation: "RMNCH+A stands for Reproductive, Maternal, Newborn, Child and Adolescent Health. The '+A' signifies the inclusion of adolescent health as an integral part of the continuum of care. It was introduced in 2013 to provide a comprehensive strategy across the life cycle."
  },
  {
    id: 27,
    question: "Rashtriya Kishor Swasthya Karyakram (RKSK) was launched in which year and has how many components/pillars?",
    options: ["2012, 4 pillars", "2014, 6 pillars", "2016, 8 pillars", "2010, 5 pillars"],
    answer: 1,
    explanation: "RKSK was launched in January 2014 with 6 components/pillars: Nutrition, Reproductive and Sexual Health, Non-communicable diseases, Substance misuse, Mental Health, and Injuries and Violence (including gender-based violence)."
  },
  {
    id: 28,
    question: "Adolescent-Friendly Health Clinics (AFHCs) under RKSK are operational at which facility level?",
    options: ["Sub-Centre level", "PHC and above", "CHC and District Hospital level", "Medical College Hospital level only"],
    answer: 1,
    explanation: "AFHCs are established at PHC level and above (CHC, District Hospitals) to provide adolescent-friendly services including reproductive health, nutrition counselling, mental health, and guidance in a confidential and non-judgmental environment."
  },
  {
    id: 29,
    question: "The Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act was enacted in which year to prohibit sex determination?",
    options: ["1990", "1994", "2000", "2003"],
    answer: 1,
    explanation: "The PCPNDT Act was enacted in 1994 to prohibit the use of pre-natal diagnostic techniques for determination of sex of the foetus and prevent female foeticide. It was amended in 2003 to also cover pre-conception sex selection techniques."
  },
  {
    id: 30,
    question: "Beti Bachao Beti Padhao (BBBP) scheme was launched in which year and primarily targets which indicator?",
    options: ["2012, Maternal Mortality Rate", "2015, Child Sex Ratio (0-6 years)", "2017, Total Fertility Rate", "2014, Infant Mortality Rate"],
    answer: 1,
    explanation: "Beti Bachao Beti Padhao was launched on 22nd January 2015 from Panipat, Haryana. It was initially launched in 100 gender-critical districts and primarily aims to improve the declining Child Sex Ratio (0-6 years) as measured by the Census."
  },
  {
    id: 31,
    question: "Sukanya Samriddhi Yojana (SSY) is a government savings scheme that can be opened for a girl child up to what age?",
    options: ["5 years", "8 years", "10 years", "12 years"],
    answer: 2,
    explanation: "Sukanya Samriddhi Yojana can be opened for a girl child below the age of 10 years by her natural/legal guardian. It was launched in 2015 as part of Beti Bachao Beti Padhao campaign to encourage savings for education and marriage of girl child."
  },
  {
    id: 32,
    question: "The National Population Policy 2000 set a target for achieving which of the following by 2010?",
    options: ["TFR of 1.8", "Replacement level fertility (TFR 2.1)", "CBR below 15 per 1000", "MMR below 50 per 1,00,000 live births"],
    answer: 1,
    explanation: "National Population Policy 2000 set an immediate objective of meeting unmet contraceptive needs, medium-term objective of TFR 2.1 (replacement level) by 2010, and long-term objective of population stabilisation by 2045. The TFR 2.1 target was not met by 2010 but India achieved it around 2020."
  },
  {
    id: 33,
    question: "The Menstrual Hygiene Scheme under NHM primarily targets which age group and provides sanitary napkins at what subsidised cost?",
    options: ["10-19 years, Re. 1 per packet of 6", "12-24 years, Rs. 2 per packet of 10", "15-24 years, free of cost", "10-19 years, Rs. 6 for 10 napkins"],
    answer: 0,
    explanation: "The Menstrual Hygiene Scheme targets adolescent girls in rural areas aged 10-19 years, providing sanitary napkins at a subsidised price of Re. 1 per packet of 6 napkins through ASHAs and other community-level workers."
  },
  {
    id: 34,
    question: "The Prevention of Child Marriage Act in India sets the minimum age of marriage at:",
    options: ["18 years for girls, 21 years for boys", "16 years for girls, 18 years for boys", "18 years for both", "21 years for both"],
    answer: 0,
    explanation: "The Prohibition of Child Marriage Act 2006 (which replaced the Child Marriage Restraint Act 1929) sets minimum age of marriage at 18 years for girls and 21 years for boys. Child marriage is defined as marriage where either party is below these ages."
  },
  {
    id: 35,
    question: "Adolescent Reproductive and Sexual Health (ARSH) strategy under NRHM focuses on which aspects?",
    options: ["Only contraception for married adolescents", "Comprehensive services including nutrition, RTI/STI, menstrual problems, contraception, and safe abortion services", "Only antenatal care for teenage mothers", "Immunisation and growth monitoring only"],
    answer: 1,
    explanation: "ARSH strategy provides comprehensive services for adolescents including nutrition counselling, RTI/STI management, menstrual problems, contraception, safe abortion services, and guidance on reproductive health. It aims to create adolescent-friendly services at public health facilities."
  },
  {
    id: 36,
    question: "Under RKSK, the peer educators programme for adolescents uses which term for trained adolescent peer educators?",
    options: ["ASHA Sahyogini", "Kishori Shakti", "Saathiya", "Kishori Samuh"],
    answer: 2,
    explanation: "Under RKSK, trained adolescent peer educators are called 'Saathiya'. The Saathiya Resource Kit is a comprehensive resource kit provided to them. Saathiyas are selected from the community to deliver health-related information to their peers."
  },
  {
    id: 37,
    question: "Family planning spacing methods are promoted under Mission Parivar Vikas. Which areas does this mission specifically target?",
    options: ["All districts of India equally", "117 high-fertility districts in 7 states with highest TFR (>3)", "Only urban slum areas", "All BIMARU states uniformly"],
    answer: 1,
    explanation: "Mission Parivar Vikas targets 146 high-fertility districts (initially 117) across 7 states (UP, Bihar, Rajasthan, MP, Chhattisgarh, Jharkhand, Assam) with highest TFR (>3). It aims to increase access and uptake of family planning services in these areas."
  },
  {
    id: 38,
    question: "The Health Management Information System (HMIS) in India at the national level is maintained by:",
    options: ["ICMR", "National Health Systems Resource Centre (NHSRC)", "Ministry of Health and Family Welfare through NHM HMIS portal", "National Informatics Centre (NIC)"],
    answer: 2,
    explanation: "HMIS at the national level is maintained by the Ministry of Health and Family Welfare through the NHM HMIS portal (hmis.nhp.gov.in). It collects data from all public health facilities on RCH services, disease control programmes, and health infrastructure."
  },
  {
    id: 39,
    question: "Mother and Child Tracking System (MCTS), now integrated as RCH portal, was designed to track:",
    options: ["Only maternal deaths", "Pregnant women and children up to 5 years for service delivery tracking", "ASHA performance monitoring only", "Supply chain management of drugs"],
    answer: 1,
    explanation: "MCTS (now RCH portal) is a name-based tracking system for pregnant women (antenatal care, institutional delivery, postnatal care) and children (immunisation up to 5 years). It enables tracking of individual beneficiaries for timely service delivery."
  },
  {
    id: 40,
    question: "The Sample Registration System (SRS) in India is conducted by which organisation?",
    options: ["ICMR", "Office of the Registrar General of India (ORGI)", "National Statistical Office (NSO)", "Ministry of Health and Family Welfare"],
    answer: 1,
    explanation: "SRS is conducted by the Office of the Registrar General of India (ORGI) under the Ministry of Home Affairs. It provides annual estimates of fertility (CBR, TFR) and mortality (CDR, IMR, MMR) at the national and state levels through a dual record system."
  },
  {
    id: 41,
    question: "National Family Health Survey (NFHS-5) was conducted in which years?",
    options: ["2015-16", "2017-18", "2019-21", "2022-23"],
    answer: 2,
    explanation: "NFHS-5 was conducted during 2019-21. NFHS-4 was in 2015-16, NFHS-3 in 2005-06, NFHS-2 in 1998-99, and NFHS-1 in 1992-93. NFHS is conducted by IIPS (International Institute for Population Sciences) Mumbai."
  },
  {
    id: 42,
    question: "As per NFHS-5 (2019-21), the Total Fertility Rate (TFR) of India is approximately:",
    options: ["1.6", "2.0", "2.3", "2.7"],
    answer: 1,
    explanation: "As per NFHS-5 (2019-21), India's TFR is 2.0, which is below the replacement level fertility of 2.1. This marks a significant achievement. However, states like Bihar (2.98), Meghalaya (2.91), and UP (2.35) are still above replacement level."
  },
  {
    id: 43,
    question: "As per SRS 2020, the Crude Birth Rate (CBR) of India is approximately:",
    options: ["15.9 per 1000", "19.5 per 1000", "22.0 per 1000", "25.0 per 1000"],
    answer: 0,
    explanation: "As per SRS 2020 data, India's Crude Birth Rate (CBR) is approximately 19.2-20.0 per 1000 population with a declining trend. CBR has been declining steadily from 40 per 1000 in the 1950s. The latest estimates place it around 19-20 per 1000."
  },
  {
    id: 44,
    question: "As per SRS 2020, the Crude Death Rate (CDR) of India is approximately:",
    options: ["4.0 per 1000", "6.2 per 1000", "8.0 per 1000", "10.5 per 1000"],
    answer: 1,
    explanation: "India's Crude Death Rate (CDR) as per SRS 2020 is approximately 6.2 per 1000 population. CDR has declined from 27.4 per 1000 in 1941-50 to around 6 per 1000 currently, reflecting improvement in health services and living conditions."
  },
  {
    id: 45,
    question: "Life expectancy at birth in India as per recent estimates is approximately:",
    options: ["62 years", "67 years", "70 years", "75 years"],
    answer: 2,
    explanation: "Life expectancy at birth in India is approximately 69-70 years (68.7 for males, 71.2 for females as per 2015-19 SRS estimates). This has improved significantly from 32 years in 1947 to current levels, reflecting improvements in health services and living standards."
  },
  {
    id: 46,
    question: "The concept of 'Demographic Dividend' refers to:",
    options: ["Increase in population leading to more workers", "Economic growth potential from a shift in population age structure when working-age population (15-64 years) is larger than dependents", "Benefits of reducing population growth", "Financial aid received from developed countries for family planning"],
    answer: 1,
    explanation: "Demographic dividend is the economic growth potential that results from changes in a population's age structure, mainly when the share of the working-age population (15-64 years) is larger than the non-working-age (dependents). India is expected to reap its demographic dividend till around 2055-2060."
  },
  {
    id: 47,
    question: "The Civil Registration System (CRS) in India is responsible for registering which vital events?",
    options: ["Only births and deaths", "Births, deaths, stillbirths, and marriages", "Births, deaths, marriages, and divorces", "Only deaths for cause of death statistics"],
    answer: 1,
    explanation: "The Civil Registration System (CRS) is responsible for registering vital events including births, deaths, and stillbirths as per the Registration of Births and Deaths Act 1969. CRS is managed by ORGI. Marriages are registered separately under the Hindu Marriage Act/Special Marriage Act."
  },
  {
    id: 48,
    question: "SDG health indicator 3.1 relates to which maternal health target?",
    options: ["Reduce neonatal mortality to at least 12 per 1000 live births", "Reduce global Maternal Mortality Ratio to less than 70 per 1,00,000 live births by 2030", "Achieve universal health coverage", "End preventable deaths of newborns and children under 5"],
    answer: 1,
    explanation: "SDG 3.1 target is to reduce global maternal mortality ratio to less than 70 per 100,000 live births by 2030. India's MMR has declined from 254 (2004-06) to 97 (2018-20 SRS), which is approaching the SDG target. The indicator for 3.1 is Maternal Mortality Ratio."
  },
  {
    id: 49,
    question: "SDG indicator 3.7 relates to which health target?",
    options: ["Reduce child mortality", "Ensure universal access to sexual and reproductive health care services", "Reduce premature mortality from non-communicable diseases", "End the epidemic of AIDS, tuberculosis, malaria"],
    answer: 1,
    explanation: "SDG 3.7 aims to ensure universal access to sexual and reproductive health-care services, including for family planning, information, and education, and the integration of reproductive health into national strategies and programmes. Key indicators include family planning coverage and adolescent birth rate."
  },
  {
    id: 50,
    question: "District Level Household Survey (DLHS) in India differs from NFHS primarily in that:",
    options: ["DLHS collects data only on immunisation, NFHS covers all health topics", "DLHS provides district-level estimates and focuses on RCH programme monitoring, while NFHS provides state and national estimates with broader scope", "DLHS is conducted annually, NFHS is conducted every 10 years", "DLHS uses census method, NFHS uses sample survey method"],
    answer: 1,
    explanation: "DLHS provides district-level estimates focusing on RCH programme-related indicators (maternal health, child health, immunisation, family planning, HIV/AIDS), making it useful for programme monitoring at district level. NFHS provides state/national estimates with a broader scope including nutrition, anaemia, domestic violence, and other health indicators."
  },
];

export default questions;

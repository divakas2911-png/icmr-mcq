const questions = [
  {
    id: 1,
    question: "Under the National Health Mission, the Indian Public Health Standards (IPHS) for Community Health Centres (CHCs) mandate a minimum bed strength of how many beds?",
    options: ["20 beds", "30 beds", "50 beds", "100 beds"],
    answer: 1,
    explanation: "IPHS guidelines stipulate that a Community Health Centre (CHC) should have a minimum of 30 beds. CHCs serve a population of about 80,000–1,20,000 and act as the first referral unit in the rural health infrastructure."
  },
  {
    id: 2,
    question: "The Village Health, Sanitation and Nutrition Committee (VHSNC) under NHM is primarily a sub-committee of which body?",
    options: ["Gram Panchayat", "Block Development Committee", "District Health Society", "Primary Health Centre Management Committee"],
    answer: 0,
    explanation: "The VHSNC is a sub-committee of the Gram Panchayat. It is constituted at the revenue village level and is chaired by the elected representative of the Ward Panchayat Member to oversee local health, sanitation, and nutrition activities."
  },
  {
    id: 3,
    question: "Under NHM, the annual untied grant provided to a Sub-Centre for local health action is:",
    options: ["Rs. 5,000", "Rs. 10,000", "Rs. 15,000", "Rs. 25,000"],
    answer: 1,
    explanation: "Each Sub-Centre under NHM receives an annual untied grant of Rs. 10,000. This fund is meant to address local health needs at the grassroots level and is managed by the ANM with oversight from the VHSNC."
  },
  {
    id: 4,
    question: "The National Urban Health Mission (NUHM) was formally merged with NRHM to create NHM in which year?",
    options: ["2012", "2013", "2014", "2015"],
    answer: 1,
    explanation: "NUHM was approved by the Cabinet in 2013 and subsequently integrated into the overarching National Health Mission (NHM), which now encompasses both the National Rural Health Mission (NRHM) and NUHM as its two sub-missions."
  },
  {
    id: 5,
    question: "A Rogi Kalyan Samiti (RKS) at a District Hospital functions as a:",
    options: ["Statutory body under the Epidemic Diseases Act", "Registered Society with a hospital management committee", "Government department under the state health ministry", "Non-governmental organisation for patient welfare"],
    answer: 1,
    explanation: "RKS (also called Hospital Management Society/Patient Welfare Committee) is a registered society under the Societies Registration Act. It has the power to receive, hold, and spend funds, enabling hospital management to be more responsive and flexible than a pure government department."
  },
  {
    id: 6,
    question: "The ASHA incentive under NHM for institutional delivery in a government facility in low-performing states (LPS) is currently:",
    options: ["Rs. 300", "Rs. 600", "Rs. 1,400 (JSY incentive to ASHA)", "Rs. 500"],
    answer: 2,
    explanation: "In low-performing states (LPS) under JSY, ASHA receives Rs. 600 for ANC care and Rs. 300 for post-natal care, but the total package linked to institutional delivery accompaniment is Rs. 1,400 (Rs. 600 + Rs. 300 + Rs. 500 for facilitating the birth). Specifically the NHM ASHA incentive for accompanying a woman for institutional delivery in LPS is Rs. 600 for facilitating + Rs. 300 for post-partum care = Rs. 900 from JSY, but the total JSY cash entitlement to the beneficiary is Rs. 1,400. The direct ASHA incentive for escorting a beneficiary for delivery is Rs. 600 in LPS."
  },
  {
    id: 7,
    question: "Under IPHS norms, what is the population norm for establishing one Primary Health Centre (PHC) in hilly/tribal areas?",
    options: ["20,000", "30,000", "15,000", "10,000"],
    answer: 0,
    explanation: "For hilly, tribal, and difficult terrain areas, an IPHS norm of 1 PHC per 20,000 population applies, compared to 1 per 30,000 in plain areas. This reduced norm accounts for geographic access challenges."
  },
  {
    id: 8,
    question: "Community Health Officers (CHOs) posted at Health and Wellness Centres under the Ayushman Bharat-HWC programme are required to have which qualification?",
    options: ["MBBS", "B.Sc. Nursing", "Bachelor of Community Health (BCH) / B.Sc. Community Health", "Diploma in Health Assistant"],
    answer: 2,
    explanation: "CHOs at Ayushman Bharat-Health and Wellness Centres are mid-level health providers who hold a Bachelor of Community Health (BCH) / B.Sc. Community Health degree (a bridge course for nurses/ANMs/paramedics). They are trained to deliver comprehensive primary care including screening for NCDs."
  },
  {
    id: 9,
    question: "The 15th Finance Commission (2021–26) recommended a specific grant for health to local bodies amounting to:",
    options: ["Rs. 13,192 crore", "Rs. 70,051 crore", "Rs. 8,000 crore", "Rs. 45,000 crore"],
    answer: 1,
    explanation: "The 15th Finance Commission (2021–26) recommended Rs. 70,051 crore as tied grants for health sector to urban and rural local bodies over the five-year period. This was a landmark recommendation earmarking grants specifically for local health infrastructure."
  },
  {
    id: 10,
    question: "Under NHM's Janani Shishu Suraksha Karyakram (JSSK), which of the following entitlements is provided FREE to sick newborns up to how many days after birth?",
    options: ["Up to 7 days", "Up to 14 days", "Up to 30 days", "Up to 90 days"],
    answer: 2,
    explanation: "Under JSSK, launched in June 2011, sick newborns can receive free treatment (drugs, diagnostics, diet, blood transfusion) in public health institutions up to 30 days after birth. This entitlement covers transport as well."
  },
  {
    id: 11,
    question: "The Rashtriya Swasthya Bima Yojana (RSBY) was launched in which year and provided coverage of how much per family per year?",
    options: ["2007; Rs. 20,000", "2008; Rs. 30,000", "2009; Rs. 50,000", "2010; Rs. 25,000"],
    answer: 1,
    explanation: "RSBY was launched on April 1, 2008 by the Ministry of Labour and Employment. It provided a smart card-based cashless hospitalisation cover of Rs. 30,000 per family per year (floater basis) for BPL families."
  },
  {
    id: 12,
    question: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY) was launched on which date and provides coverage of how much per family per year?",
    options: ["September 23, 2018; Rs. 5 lakh", "April 1, 2018; Rs. 3 lakh", "August 15, 2018; Rs. 5 lakh", "January 1, 2019; Rs. 10 lakh"],
    answer: 0,
    explanation: "PM-JAY was officially launched on September 23, 2018 at Ranchi, Jharkhand. It provides a health cover of Rs. 5 lakh per family per year for secondary and tertiary care hospitalisation, covering approximately 10.74 crore poor and vulnerable families."
  },
  {
    id: 13,
    question: "The Central Government Health Scheme (CGHS) was established in which year and initially started in which city?",
    options: ["1948, Calcutta", "1954, New Delhi", "1952, Mumbai", "1960, Chennai"],
    answer: 1,
    explanation: "CGHS was established in 1954 and initially started in New Delhi. It provides comprehensive healthcare facilities to Central Government employees, pensioners, and their dependents. It now covers over 70 cities across India."
  },
  {
    id: 14,
    question: "The Employees' State Insurance Scheme (ESIS) is administered by ESIC under which Act and applies to factories/establishments employing a minimum of how many persons?",
    options: ["Factories Act 1948; 20 persons", "ESI Act 1948; 10 persons", "Workmen's Compensation Act 1923; 15 persons", "Minimum Wages Act 1948; 25 persons"],
    answer: 1,
    explanation: "ESIS is administered under the Employees' State Insurance Act, 1948 by the ESIC. It applies to factories and specified establishments employing 10 or more persons (reduced from 20 in 2010). The wage ceiling for ESI coverage was enhanced to Rs. 21,000/month in 2017."
  },
  {
    id: 15,
    question: "Aarogyasri Health Care Trust operates the scheme in which state and was renamed as which scheme after reorganisation?",
    options: ["Tamil Nadu; Chief Minister's Comprehensive Health Insurance Scheme", "Andhra Pradesh/Telangana; Dr. YSR Aarogyasri / Aarogyasri", "Karnataka; Arogya Karnataka", "Kerala; Karunya Health Scheme"],
    answer: 1,
    explanation: "Aarogyasri was launched by the Government of Andhra Pradesh in 2007 under CM Y.S. Rajasekhara Reddy. After bifurcation, Telangana continued it as 'Aarogyasri' and Andhra Pradesh renamed it 'Dr. YSR Aarogyasri' in 2019 in honour of the former CM."
  },
  {
    id: 16,
    question: "The Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY) is operated in which state and provides coverage of how much per family per year?",
    options: ["Rajasthan; Rs. 3 lakh", "Maharashtra; Rs. 1.5 lakh", "Gujarat; Rs. 2 lakh", "Madhya Pradesh; Rs. 1 lakh"],
    answer: 1,
    explanation: "MJPJAY (formerly Rajiv Gandhi Jeevandayee Arogya Yojana) is operated in Maharashtra. It provides cashless medical treatment coverage of Rs. 1.5 lakh per family per year (extendable to Rs. 2.5 lakh for rare diseases/transplants) at empanelled hospitals."
  },
  {
    id: 17,
    question: "The National Health Authority (NHA), which implements PM-JAY, is structured as:",
    options: ["A statutory authority under the Ministry of Finance", "An attached office of the Ministry of Health and Family Welfare", "An autonomous body/registered society under the Ministry of Health and Family Welfare", "A Special Purpose Vehicle under NITI Aayog"],
    answer: 2,
    explanation: "NHA is an autonomous body (registered society) under the Ministry of Health and Family Welfare. It is the apex body responsible for implementing PM-JAY and was given the status of an apex body (replacing the previous National Health Agency) in January 2019."
  },
  {
    id: 18,
    question: "India's National Health Policy 2017 sets a target to increase government health expenditure to what percentage of GDP by 2025?",
    options: ["1.5% of GDP", "2.5% of GDP", "3.5% of GDP", "5% of GDP"],
    answer: 1,
    explanation: "The National Health Policy 2017 set a target to increase government health expenditure from approximately 1.15% of GDP to 2.5% of GDP by 2025. This is aimed at achieving universal health coverage and reducing out-of-pocket expenditure."
  },
  {
    id: 19,
    question: "Chief Minister's Comprehensive Health Insurance Scheme (CMCHIS) operates in which state and was launched in which year?",
    options: ["Karnataka; 2012", "Tamil Nadu; 2012", "Kerala; 2013", "Andhra Pradesh; 2014"],
    answer: 1,
    explanation: "CMCHIS operates in Tamil Nadu and was launched in 2012. It provides coverage of Rs. 5 lakh per family per year for government-hospital-based treatment and has been a model state-level health insurance scheme."
  },
  {
    id: 20,
    question: "Which of the following is NOT a benefit under the Central Government Health Scheme (CGHS)?",
    options: ["OPD treatment at CGHS Wellness Centres", "Coverage for AYUSH treatments", "Maternity benefits for all deliveries without limit", "Reimbursement for treatment in empanelled private hospitals"],
    answer: 2,
    explanation: "CGHS covers maternity benefits but only for the first two surviving children (confinement up to 2 deliveries). It does provide OPD treatment, AYUSH coverage, and reimbursement for empanelled private hospitals for indoor treatment."
  },
  {
    id: 21,
    question: "Swachh Bharat Mission (Gramin) Phase II (SBM-G Phase II) was approved for implementation from 2020-21 to which year with what primary focus?",
    options: ["2024-25; ODF Plus (solid/liquid waste management, plastic waste)", "2023-24; constructing individual household toilets", "2025-26; achieving universal sanitation coverage", "2022-23; behavioural change communication"],
    answer: 0,
    explanation: "SBM-G Phase II was approved for the period 2020-21 to 2024-25 with a focus on 'ODF Plus' - sustaining ODF status and improving solid and liquid waste management (SLWM), including faecal sludge management and plastic waste management, in villages."
  },
  {
    id: 22,
    question: "The Jal Jeevan Mission aims to provide Functional Household Tap Connections (FHTC) to all rural households by which year?",
    options: ["2022", "2024", "2025", "2030"],
    answer: 2,
    explanation: "Jal Jeevan Mission, launched on August 15, 2019, aims to provide Functional Household Tap Connections (FHTC) supplying 55 litres per capita per day (lpcd) of potable water to every rural household by 2024. This was later revised to 2024 in some communications, but the original target year set at launch was 2024."
  },
  {
    id: 23,
    question: "The Food Safety and Standards Authority of India (FSSAI) was established under which Act and in which year did it become operational?",
    options: ["Prevention of Food Adulteration Act 1954; 2005", "Food Safety and Standards Act 2006; 2011", "Consumer Protection Act 1986; 2010", "Essential Commodities Act 1955; 2008"],
    answer: 1,
    explanation: "FSSAI was established under the Food Safety and Standards Act, 2006 and became fully operational in 2011. It replaced multiple food-related laws including the PFA Act 1954. FSSAI is headquartered in New Delhi with regional offices across India."
  },
  {
    id: 24,
    question: "The National Clean Air Programme (NCAP) was launched in January 2019 with a target to reduce PM2.5 and PM10 concentration by what percentage by 2024 (later revised to 2026)?",
    options: ["10-15%", "20-30%", "40-50%", "5-10%"],
    answer: 1,
    explanation: "NCAP was launched in January 2019 with an initial target to achieve 20-30% reduction in PM2.5 and PM10 concentrations by 2024 (base year 2017), covering 102 non-attainment cities. The target was later revised to 40% reduction by 2026."
  },
  {
    id: 25,
    question: "Ahmedabad city implemented India's first formal Heat Action Plan (HAP) in which year, in collaboration with which international partner?",
    options: ["2010; WHO", "2013; Natural Resources Defense Council (NRDC) and IIPH Gandhinagar", "2008; UNICEF", "2015; World Meteorological Organization"],
    answer: 1,
    explanation: "Ahmedabad implemented India's (and Asia's) first Heat Action Plan in 2013 following the deadly 2010 heatwave. It was developed in collaboration with the Natural Resources Defense Council (NRDC) and the Indian Institute of Public Health (IIPH) Gandhinagar, and is considered a global model."
  },
  {
    id: 26,
    question: "India's National Action Plan on Climate Change (NAPCC) was launched in which year and comprises how many National Missions?",
    options: ["2007; 6 missions", "2008; 8 missions", "2010; 10 missions", "2012; 12 missions"],
    answer: 1,
    explanation: "NAPCC was launched on June 30, 2008. It comprises 8 National Missions, including the National Mission on Sustainable Habitat, National Water Mission, and others. The Ministry of Health's work on climate change and health falls under this framework."
  },
  {
    id: 27,
    question: "The Namami Gange Programme was approved as a flagship programme in which year with a budget outlay of how much?",
    options: ["2013; Rs. 10,000 crore", "2014; Rs. 20,000 crore", "2015; Rs. 25,000 crore", "2016; Rs. 30,000 crore"],
    answer: 1,
    explanation: "Namami Gange Programme was approved by the Union Cabinet in May 2015 with a budget of Rs. 20,000 crore for the period 2015-2020. It integrates efforts to rejuvenate the Ganga including sewage treatment, ghat development, and industrial effluent control, with significant implications for waterborne disease prevention."
  },
  {
    id: 28,
    question: "The Open Defecation Free (ODF) protocol under SBM requires verification at what minimum number of consecutive days of no open defecation?",
    options: ["30 days", "60 days", "90 days", "180 days"],
    answer: 2,
    explanation: "Under SBM, a village is declared ODF only after verification that no open defecation has occurred for at least 90 consecutive days. This sustained behaviour change requirement distinguishes ODF certification from merely achieving toilet construction targets."
  },
  {
    id: 29,
    question: "FSSAI's 'Eat Right India' movement includes which of the following sub-initiatives for reducing salt, sugar, and fat in food?",
    options: ["Poshan Abhiyaan", "Aaj Se Thoda Kam", "Mission Indradhanush", "Pradhan Mantri Surakshit Matritva Abhiyan"],
    answer: 1,
    explanation: "FSSAI's 'Eat Right India' movement includes the 'Aaj Se Thoda Kam' (Reduce a Little from Today) campaign specifically targeting reduction of salt, sugar, and fat (SSF) intake. It uses nudge theory and behavioural interventions to promote healthier food choices."
  },
  {
    id: 30,
    question: "The National Programme for Prevention and Control of Fluorosis (NPPCF) targets fluorosis through which primary intervention that is also linked to the Jal Jeevan Mission?",
    options: ["Supplementation of calcium tablets", "Provision of safe alternative drinking water sources with low fluoride", "Mass defluoridation camps", "Fluoride-free toothpaste distribution"],
    answer: 1,
    explanation: "NPPCF primarily targets fluorosis through provision of safe, alternative drinking water with fluoride below permissible limits (1.5 mg/L as per BIS). The Jal Jeevan Mission's FHTC targets directly support this by providing treated piped water, replacing high-fluoride groundwater sources."
  },
  {
    id: 31,
    question: "The National Mental Health Programme (NMHP) was launched in India in which year?",
    options: ["1975", "1982", "1990", "1995"],
    answer: 1,
    explanation: "The National Mental Health Programme (NMHP) was launched in India in 1982. It was the first national programme for mental health and was based on recommendations of the Expert Committee on Mental Health. The District Mental Health Programme (DMHP) was added as a component in 1996."
  },
  {
    id: 32,
    question: "The District Mental Health Programme (DMHP) was piloted in which district and in which year before being scaled up nationally?",
    options: ["Bellary, Karnataka; 1992", "Bangalore, Karnataka; 1994", "Bellary, Karnataka; 1996", "Pune, Maharashtra; 1998"],
    answer: 2,
    explanation: "DMHP was piloted in Bellary district, Karnataka, in 1996 under the NMHP with WHO support. The programme aimed to integrate mental health services with community health services at the district level. It was subsequently scaled up to more districts."
  },
  {
    id: 33,
    question: "The Mental Healthcare Act 2017 replaced which earlier legislation and came into force in which year?",
    options: ["Mental Health Act 1987; 2018", "Indian Lunacy Act 1912; 2017", "Mental Health Act 1987; 2017", "Persons with Disabilities Act 1995; 2018"],
    answer: 0,
    explanation: "The Mental Healthcare Act 2017 replaced the Mental Health Act 1987. It came into force on May 29, 2018. Key provisions include the right to mental healthcare, advance directives, the concept of 'nominated representative', and decriminalisation of attempted suicide (Section 309 IPC)."
  },
  {
    id: 34,
    question: "Under the Mental Healthcare Act 2017, every person with mental illness has the right to access mental healthcare from which level of government facility?",
    options: ["Only tertiary level hospitals", "Only district hospitals", "State-run and funded mental health establishments at all levels", "Only Community Health Centres"],
    answer: 2,
    explanation: "Section 18 of the Mental Healthcare Act 2017 guarantees the right to access mental healthcare and treatment from the state. This right applies to all state-run or state-funded mental health establishments at community, district, and tertiary levels, ensuring no one is denied care."
  },
  {
    id: 35,
    question: "The Rights of Persons with Disabilities (RPWD) Act 2016 increased the number of recognised disability categories from 7 to:",
    options: ["14", "19", "21", "25"],
    answer: 2,
    explanation: "The RPWD Act 2016 replaced the Persons with Disabilities Act 1995 and expanded the number of recognised disability categories from 7 to 21, including newly added conditions like acid attack victims, Parkinson's disease, thalassemia, haemophilia, sickle cell disease, autism, and specific learning disabilities."
  },
  {
    id: 36,
    question: "The National Programme for Healthcare of the Elderly (NPHCE) was launched under NHM and provides dedicated services starting from which level of the health system?",
    options: ["Sub-Centre level", "PHC level", "CHC level", "District Hospital level"],
    answer: 1,
    explanation: "NPHCE, launched in 2010-11, provides dedicated healthcare services to elderly persons (60 years and above) starting from PHC level. It includes dedicated OPD timings, physiotherapy services at CHCs/district hospitals, and establishment of Regional Geriatric Centres at tertiary level."
  },
  {
    id: 37,
    question: "The Indira Gandhi National Disability Pension Scheme (IGNDPS) under NSAP provides a monthly pension to persons with disabilities above what percentage of disability and above what age?",
    options: ["40% disability; 18 years", "60% disability; 18 years", "80% disability; 21 years", "70% disability; 25 years"],
    answer: 1,
    explanation: "IGNDPS under the National Social Assistance Programme (NSAP) provides a monthly pension to BPL persons aged 18–79 years with severe/multiple disabilities (60% or more disability). The central government's contribution is Rs. 300 per month, with states expected to add their share."
  },
  {
    id: 38,
    question: "The Accessible India Campaign (Sugamya Bharat Abhiyan) was launched on which date, coinciding with which international observance?",
    options: ["December 3, 2015; International Day of Persons with Disabilities", "January 26, 2016; Republic Day", "October 2, 2015; Gandhi Jayanti", "November 19, 2015; World Toilet Day"],
    answer: 0,
    explanation: "The Accessible India Campaign (Sugamya Bharat Abhiyan) was launched on December 3, 2015, coinciding with the International Day of Persons with Disabilities. It aims to make the built environment, transport, and ICT ecosystem accessible to persons with disabilities."
  },
  {
    id: 39,
    question: "The National Trust for the Welfare of Persons with Autism, Cerebral Palsy, Mental Retardation and Multiple Disabilities was established under which Act?",
    options: ["Persons with Disabilities Act 1995", "National Trust Act 1999", "Mental Health Act 1987", "RPWD Act 2016"],
    answer: 1,
    explanation: "The National Trust was established under the National Trust for the Welfare of Persons with Autism, Cerebral Palsy, Mental Retardation and Multiple Disabilities Act, 1999. It focuses on these four specific disability categories and promotes independent living and legal guardianship arrangements."
  },
  {
    id: 40,
    question: "The Rashtriya Vayoshri Yojana (RVY) scheme provides physical aids and assisted-living devices to senior citizens belonging to BPL category and is implemented through which nodal agency?",
    options: ["Ministry of Social Justice and Empowerment through ALIMCO", "Ministry of Health through NHM", "Ministry of Labour through ESIC", "NITI Aayog through State Governments"],
    answer: 0,
    explanation: "Rashtriya Vayoshri Yojana (RVY), launched in 2017, is implemented by the Ministry of Social Justice and Empowerment through the Artificial Limbs Manufacturing Corporation of India (ALIMCO). It provides physical aids (walking sticks, elbow crutches, walkers, wheelchairs, hearing aids) to BPL senior citizens (60+)."
  },
  {
    id: 41,
    question: "The National Digital Health Mission (NDHM) was launched on August 15, 2020 and later renamed as what? Its foundational building block is:",
    options: ["Digital India Health Mission; Aadhaar linkage", "Ayushman Bharat Digital Mission (ABDM); Ayushman Bharat Health Account (ABHA)", "Pradhan Mantri Digital Health Mission; CoWIN ID", "National eHealth Authority Mission; Health ID Card"],
    answer: 1,
    explanation: "NDHM was launched on August 15, 2020 and renamed as Ayushman Bharat Digital Mission (ABDM) in September 2021. Its foundational building block is the Ayushman Bharat Health Account (ABHA) number (previously called Health ID), a 14-digit unique identifier for every citizen."
  },
  {
    id: 42,
    question: "The CoWIN platform for COVID-19 vaccination was developed and managed by which ministry/body?",
    options: ["Ministry of Electronics and IT (MeitY)", "Ministry of Health and Family Welfare with NIC/MoHFW IT division", "ICMR", "National Health Authority"],
    answer: 1,
    explanation: "CoWIN was developed and managed by the Ministry of Health and Family Welfare (MoHFW) in partnership with the National Informatics Centre (NIC). It served as the digital backbone for COVID-19 vaccination registration, appointment scheduling, and certificate generation in India."
  },
  {
    id: 43,
    question: "e-Sanjeevani, India's national telemedicine service, has two variants. Which variant enables doctor-to-doctor teleconsultations (hub and spoke model)?",
    options: ["eSanjeevani OPD", "eSanjeevani AB-HWC", "eSanjeevani Primary", "eSanjeevani Connect"],
    answer: 1,
    explanation: "e-Sanjeevani has two variants: eSanjeevani AB-HWC (Ayushman Bharat Health and Wellness Centre), which enables doctor-to-doctor (spoke-to-hub) teleconsultations, and eSanjeevani OPD, which enables patient-to-doctor consultations. The AB-HWC variant was launched in November 2019."
  },
  {
    id: 44,
    question: "The Integrated Health Information Platform (IHIP), launched by IDSP for disease surveillance, replaced which earlier surveillance system?",
    options: ["National Disease Surveillance Portal", "Integrated Disease Surveillance Project (IDSP) portal", "HMIS (Health Management Information System) portal", "IDSurv software"],
    answer: 1,
    explanation: "IHIP was launched in 2019 as a next-generation disease surveillance platform, replacing the older web-based IDSP portal. IHIP supports real-time surveillance of 33 health conditions (compared to the older system) and integrates with other national health IT platforms under ABDM."
  },
  {
    id: 45,
    question: "NIKSHAY, the web-based case notification and management system for tuberculosis, is managed by which programme and was made mandatory for all TB case notifications since which year?",
    options: ["RNTCP/NTEP; 2012", "NTEP; 2018", "RNTCP; 2016", "NHM; 2015"],
    answer: 0,
    explanation: "NIKSHAY is managed by the Revised National TB Control Programme (RNTCP), now renamed National Tuberculosis Elimination Programme (NTEP). It was launched and made mandatory for all public and private sector TB case notifications from 2012. It supports the cascade of care under the TB elimination strategy."
  },
  {
    id: 46,
    question: "The Electronic Vaccine Intelligence Network (eVIN) was initially developed with support from which international organisation before being nationalised?",
    options: ["WHO", "UNICEF", "UNDP", "World Bank"],
    answer: 2,
    explanation: "eVIN was initially developed with support from UNDP (United Nations Development Programme) under the Intensified Mission Indradhanush programme framework before being nationalised and handed over to MoHFW. It tracks vaccine stocks and cold chain temperature monitoring in real time."
  },
  {
    id: 47,
    question: "The Telemedicine Practice Guidelines 2020, published by MoHFW and NITI Aayog, were issued under which Act that enables their legal validity?",
    options: ["Indian Medical Council Act 1956", "Clinical Establishments Act 2010", "National Medical Commission Act 2019", "Information Technology Act 2000"],
    answer: 0,
    explanation: "The Telemedicine Practice Guidelines 2020 were issued as an amendment to the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002, under the Indian Medical Council Act, 1956. This gave them legal standing for registered medical practitioners."
  },
  {
    id: 48,
    question: "The Sugamya Bharat App, developed for reporting accessibility barriers, is a product of which ministry/department?",
    options: ["Ministry of Electronics and Information Technology", "Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice", "Ministry of Urban Development", "National Informatics Centre"],
    answer: 1,
    explanation: "The Sugamya Bharat App was developed by the Department of Empowerment of Persons with Disabilities (DEPwD) under the Ministry of Social Justice and Empowerment as part of the Accessible India Campaign. Citizens can use it to report accessibility gaps in public buildings, transport, and ICT infrastructure."
  },
  {
    id: 49,
    question: "The Health Management Information System (HMIS) portal under NHM collects data from health facilities. The data reported through HMIS at the Sub-Centre level is submitted by:",
    options: ["ASHA workers", "Medical Officer of PHC", "Auxiliary Nurse Midwife (ANM)", "District Data Entry Operator"],
    answer: 2,
    explanation: "Data from Sub-Centres is entered into the HMIS portal by the Auxiliary Nurse Midwife (ANM), who maintains service registers at the Sub-Centre. ANMs compile monthly reports on maternal health, immunisation, family planning, and other services which are submitted via HMIS."
  },
  {
    id: 50,
    question: "Under ABDM, the Health Facility Registry (HFR) and Healthcare Professionals Registry (HPR) together form what is known as:",
    options: ["National Digital Health Ecosystem (NDHE) base registries", "Ayushman Bharat Digital backbone infrastructure", "ABDM sandbox environment", "National Health Stack foundation layer"],
    answer: 0,
    explanation: "Under ABDM, the Health Facility Registry (HFR) and Healthcare Professionals Registry (HPR) are the base registries that form the foundational layer of the National Digital Health Ecosystem (NDHE). These registries ensure that all health facilities and professionals are uniquely identified and verifiable within the ABDM framework."
  }
]

export default questions

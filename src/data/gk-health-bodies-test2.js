const questions = [
  {
    id: 1,
    question: "The National Institute of Mental Health and Neurosciences (NIMHANS) is an Institute of National Importance under which Ministry?",
    options: ["Ministry of Health & Family Welfare", "Ministry of Science & Technology", "Ministry of Education", "Ministry of Social Justice & Empowerment"],
    answer: 0,
    explanation: "NIMHANS, located in Bengaluru and established in 1974, was declared an Institute of National Importance in 2012 under the Ministry of Health & Family Welfare. It is an autonomous institution functioning as a multidisciplinary centre for mental health and neurosciences."
  },
  {
    id: 2,
    question: "The National Institute of Nutrition (NIN) is located in which city and functions under which apex body?",
    options: ["Mumbai, under ICAR", "Hyderabad, under ICMR", "Pune, under DBT", "Chennai, under CSIR"],
    answer: 1,
    explanation: "NIN is located in Hyderabad and is one of the oldest constituent institutes of ICMR, established in 1918. It was initially called the Deficiency Disease Enquiry, later renamed Nutrition Research Laboratories, and became NIN in 1969."
  },
  {
    id: 3,
    question: "The Vector Control Research Centre (VCRC), a premier ICMR institute focused on lymphatic filariasis and vector-borne diseases, is located at:",
    options: ["Calicut, Kerala", "Pondicherry", "Mangalore, Karnataka", "Vizag, Andhra Pradesh"],
    answer: 1,
    explanation: "VCRC is located in Pondicherry (Puducherry) and is an ICMR institute established in 1975. It specializes in research on vectors and vector-borne diseases including lymphatic filariasis, dengue, malaria, and chikungunya."
  },
  {
    id: 4,
    question: "The National Institute of Biologicals (NIB), which serves as the national repository and testing centre for biological products, is located at:",
    options: ["Kasauli, Himachal Pradesh", "Noida, Uttar Pradesh", "Pune, Maharashtra", "Lucknow, Uttar Pradesh"],
    answer: 1,
    explanation: "NIB is located in Noida, Uttar Pradesh. It is an autonomous institution under the Ministry of Health & Family Welfare established in 1992, functioning as a national repository for biological reference standards and testing of biological products including vaccines and blood products."
  },
  {
    id: 5,
    question: "The Central Drugs Laboratory (CDL), the apex drug-testing laboratory in India that tests drugs for the Central Government and provides referee testing, is located at:",
    options: ["Mumbai", "Hyderabad", "Kolkata", "Chennai"],
    answer: 2,
    explanation: "CDL is located in Kolkata and is the apex drug-testing laboratory established under the Drugs & Cosmetics Act, 1940. It functions under the Central Drugs Standard Control Organisation (CDSCO) and provides referee testing for disputed drug samples."
  },
  {
    id: 6,
    question: "The Indian Pharmacopoeia Commission (IPC), which publishes the Indian Pharmacopoeia (IP), is an autonomous institution headquartered at:",
    options: ["New Delhi", "Ghaziabad, Uttar Pradesh", "Mumbai", "Bengaluru"],
    answer: 1,
    explanation: "IPC is headquartered in Ghaziabad, Uttar Pradesh. It is an autonomous institution under the Ministry of Health & Family Welfare and is responsible for setting standards for drugs and pharmaceuticals through the Indian Pharmacopoeia, which is revised periodically."
  },
  {
    id: 7,
    question: "The National Centre for Disease Control (NCDC) in New Delhi was formerly known as:",
    options: ["Central Epidemiology Bureau", "National Institute of Communicable Diseases (NICD)", "Central Institute of Epidemiology", "Epidemiology & Disease Surveillance Division"],
    answer: 1,
    explanation: "NCDC was formerly known as the National Institute of Communicable Diseases (NICD). It was renamed NCDC in 2009. It is the nodal body under the Ministry of Health & Family Welfare for disease surveillance, outbreak investigation, and control of communicable diseases in India."
  },
  {
    id: 8,
    question: "The Central Leprosy Division, which coordinates the National Leprosy Eradication Programme (NLEP), functions under which Directorate?",
    options: ["Directorate General of Health Services (DGHS)", "National AIDS Control Organisation (NACO)", "Directorate of National Vector Borne Disease Control Programme", "Central TB Division"],
    answer: 0,
    explanation: "The Central Leprosy Division functions under the Directorate General of Health Services (DGHS), Ministry of Health & Family Welfare. It is responsible for coordinating the National Leprosy Eradication Programme (NLEP), which targets the elimination of leprosy as a public health problem."
  },
  {
    id: 9,
    question: "NIMHANS was granted the status of Institute of National Importance in which year?",
    options: ["2005", "2008", "2012", "2016"],
    answer: 2,
    explanation: "NIMHANS was declared an Institute of National Importance by an Act of Parliament in 2012. Prior to this, it functioned as a university under the University Grants Commission. It is the only Institute of National Importance in the mental health and neurosciences sector."
  },
  {
    id: 10,
    question: "The National Jalma Institute for Leprosy and Other Mycobacterial Diseases (NJIL&OMD), an ICMR institute, is located at:",
    options: ["Lucknow", "Agra", "Kanpur", "Varanasi"],
    answer: 1,
    explanation: "NJIL&OMD is located in Agra, Uttar Pradesh. It is an ICMR institute established in 1966 named after the Japanese leprologist Dr. Yo Masuda Jalma. It conducts research on leprosy, tuberculosis, and other mycobacterial diseases."
  },
  {
    id: 11,
    question: "The Biotechnology Industry Research Assistance Council (BIRAC) was established in which year and under which Ministry?",
    options: ["2005, Ministry of Science & Technology", "2012, Department of Biotechnology", "2008, Ministry of Commerce & Industry", "2015, Ministry of Health & Family Welfare"],
    answer: 1,
    explanation: "BIRAC was established in 2012 as a not-for-profit Section 8 company under the Department of Biotechnology (DBT), Ministry of Science & Technology. It was set up to strengthen and empower the emerging biotech enterprise in India and nurture innovation."
  },
  {
    id: 12,
    question: "The Central Drug Research Institute (CDRI) in Lucknow is a constituent laboratory of which council?",
    options: ["ICMR", "DBT", "CSIR", "DST"],
    answer: 2,
    explanation: "CDRI is a constituent laboratory of the Council of Scientific and Industrial Research (CSIR). Established in 1951 in Lucknow, it conducts research on new drug discovery and development, particularly for diseases like malaria, tuberculosis, filariasis, and metabolic disorders."
  },
  {
    id: 13,
    question: "How many National Institutes of Pharmaceutical Education and Research (NIPERs) are currently established in India?",
    options: ["5", "7", "9", "11"],
    answer: 2,
    explanation: "There are 9 NIPERs established across India, located in Ahmedabad, Guwahati, Hajipur, Hyderabad, Kolkata, Lucknow, Mohali (the first NIPER, established 1998), Mumbai, and Raebareli. They are under the Department of Pharmaceuticals, Ministry of Chemicals & Fertilizers."
  },
  {
    id: 14,
    question: "BIRAC's flagship programme 'SBIRI' (Small Business Innovation Research Initiative) is primarily aimed at:",
    options: ["Funding large pharmaceutical companies for clinical trials", "Providing grants and loans to small & medium biotechnology enterprises for early-stage innovation", "Regulating biotech exports", "Setting standards for biotech products"],
    answer: 1,
    explanation: "SBIRI is BIRAC's flagship programme designed to provide grants and soft loans to small and medium-sized biotech enterprises for early-stage product development and innovation. It bridges the gap between basic research and product development in the biotech sector."
  },
  {
    id: 15,
    question: "The Indian Institute of Chemical Technology (IICT), which conducts chemical research including pharmaceutical chemistry, is located at:",
    options: ["Mumbai, Maharashtra", "Hyderabad, Telangana", "Pune, Maharashtra", "Chennai, Tamil Nadu"],
    answer: 1,
    explanation: "IICT is located in Hyderabad, Telangana, and is a CSIR constituent laboratory. Established in 1944, it conducts research in chemical sciences including pharmaceutical chemistry, fine chemicals, and chemical engineering. It has been instrumental in developing processes for generic drug manufacturing."
  },
  {
    id: 16,
    question: "The first NIPER (National Institute of Pharmaceutical Education and Research) was established in 1998 at:",
    options: ["Lucknow, Uttar Pradesh", "Ahmedabad, Gujarat", "Mohali, Punjab", "Hyderabad, Telangana"],
    answer: 2,
    explanation: "The first NIPER was established in 1998 at Mohali, Punjab. It is the only NIPER to have been established by an Act of Parliament (NIPER Act, 1998) and is considered the premier institution among all NIPERs. The other NIPERs were established under the NIPER Amendment Act, 2011."
  },
  {
    id: 17,
    question: "Serum Institute of India (SII) is headquartered in which city and is notable for being:",
    options: ["Mumbai; the largest vaccine manufacturer by revenue", "Pune; the world's largest vaccine manufacturer by number of doses", "Hyderabad; the first Indian company to produce rDNA vaccines", "Bengaluru; the manufacturer of India's first indigenous vaccine"],
    answer: 1,
    explanation: "SII is headquartered in Pune, Maharashtra, and is recognized as the world's largest vaccine manufacturer by number of doses produced and sold globally. Founded in 1966 by Cyrus Poonawalla, it produces over 1.5 billion doses annually of various vaccines including measles, polio, and COVID-19 (Covishield)."
  },
  {
    id: 18,
    question: "Bharat Biotech's indigenous COVID-19 vaccine Covaxin (BBV152) was developed in collaboration with:",
    options: ["AIIMS, New Delhi", "ICMR and National Institute of Virology (NIV), Pune", "DBT and BIRAC", "Department of Pharmaceuticals and CDSCO"],
    answer: 1,
    explanation: "Covaxin (BBV152) was developed by Bharat Biotech in collaboration with ICMR and the National Institute of Virology (NIV), Pune. It is a whole-virion inactivated SARS-CoV-2 vaccine and was the first indigenous COVID-19 vaccine to receive Emergency Use Authorization in India in January 2021."
  },
  {
    id: 19,
    question: "The Haffkine Bio-Pharmaceutical Corporation Limited, a public sector vaccine manufacturing unit, is located in which city?",
    options: ["Kolkata", "Mumbai", "Chennai", "Pune"],
    answer: 1,
    explanation: "Haffkine Bio-Pharmaceutical Corporation Limited is located in Mumbai (Parel), Maharashtra. It is a public sector undertaking under the Government of Maharashtra, named after Dr. Waldemar Haffkine. It manufactures vaccines including anti-rabies vaccine and anti-tetanus serum."
  },
  {
    id: 20,
    question: "The Pasteur Institute of India, one of the oldest biological product manufacturing institutes in India, is located at:",
    options: ["Kolkata, West Bengal", "Kasauli, Himachal Pradesh", "Coonoor, Tamil Nadu", "Shillong, Meghalaya"],
    answer: 2,
    explanation: "The Pasteur Institute of India is located in Coonoor, Tamil Nadu. Established in 1907, it is one of the oldest biological institutes in India and manufactures vaccines and sera including anti-rabies vaccine and various antisera. It functions under the Ministry of Health & Family Welfare."
  },
  {
    id: 21,
    question: "The Integrated Disease Surveillance Programme (IDSP) was launched in India with World Bank assistance in which year?",
    options: ["2001", "2004", "2008", "2012"],
    answer: 1,
    explanation: "IDSP was launched in 2004 with World Bank assistance under the Ministry of Health & Family Welfare. It was established to decentralize, integrate, and strengthen disease surveillance in India and operates through state and district surveillance units. It was later renamed IHIP (Integrated Health Information Platform)."
  },
  {
    id: 22,
    question: "The Integrated Health Information Platform (IHIP), which replaced IDSP for real-time disease surveillance, was launched in which year?",
    options: ["2015", "2018", "2019", "2021"],
    answer: 2,
    explanation: "IHIP was launched in 2019 as an upgraded, real-time disease surveillance system replacing IDSP. It uses a case-based system rather than the aggregate data approach of IDSP and covers more than 33 diseases with near real-time data entry capability at the facility level across all states."
  },
  {
    id: 23,
    question: "The Health Management Information System (HMIS) in India collects data primarily from:",
    options: ["Household surveys only", "Public health facilities and reports on health service delivery indicators", "Insurance companies and private hospitals", "International organizations and WHO"],
    answer: 1,
    explanation: "HMIS collects data from public health facilities (sub-centres, PHCs, CHCs, district hospitals) and generates reports on health service delivery indicators. It is managed by the Ministry of Health & Family Welfare under NHM and provides monthly facility-level data on maternal health, child health, family planning, and disease control."
  },
  {
    id: 24,
    question: "The Mother and Child Tracking System (MCTS), later evolved into the Reproductive and Child Health (RCH) portal, was primarily designed to:",
    options: ["Track hospital billing for mother and child services", "Provide individual-level tracking of pregnant women and children for service delivery", "Monitor supply chain of vaccines and drugs", "Register all births and deaths in India"],
    answer: 1,
    explanation: "MCTS/RCH portal was designed to provide individual-level tracking of pregnant women and children up to 5 years of age for ensuring complete antenatal, delivery, postnatal, and immunization services. It enables health workers to identify dropouts and ensure continuity of care."
  },
  {
    id: 25,
    question: "The National Health Systems Resource Centre (NHSRC), established in 2007 as a technical support institution for NHM, is headquartered at:",
    options: ["Mumbai", "New Delhi", "Hyderabad", "Lucknow"],
    answer: 1,
    explanation: "NHSRC is headquartered in New Delhi. It was established in 2007 as an autonomous registered society under the Ministry of Health & Family Welfare to provide technical assistance for the implementation of the National Health Mission (NHM), covering areas like health financing, quality improvement, HR management, and procurement."
  },
  {
    id: 26,
    question: "The International Institute for Population Sciences (IIPS), which conducts the National Family Health Survey (NFHS), is an autonomous organization located at:",
    options: ["New Delhi", "Kolkata", "Mumbai", "Chennai"],
    answer: 2,
    explanation: "IIPS is located in Mumbai, Maharashtra. It is a deemed university and an autonomous organization under the Ministry of Health & Family Welfare. It is the nodal agency for conducting NFHS rounds in India and provides training in population sciences and demographic research."
  },
  {
    id: 27,
    question: "The Registrar General of India (RGI), which manages the Civil Registration System (CRS) for vital statistics, functions under which Ministry?",
    options: ["Ministry of Health & Family Welfare", "Ministry of Statistics & Programme Implementation", "Ministry of Home Affairs", "Ministry of Law & Justice"],
    answer: 2,
    explanation: "The Registrar General of India functions under the Ministry of Home Affairs. The office is headed by the Registrar General and Census Commissioner of India. RGI manages the decennial census, Sample Registration System (SRS), and the Civil Registration System for births and deaths."
  },
  {
    id: 28,
    question: "The National Commission on Population (NCP), established in 2000, is chaired by:",
    options: ["Union Health Minister", "Prime Minister of India", "Cabinet Secretary", "NITI Aayog Vice Chairman"],
    answer: 1,
    explanation: "The National Commission on Population is chaired by the Prime Minister of India. It was established in 2000 to review and oversee implementation of the National Population Policy 2000 and to provide direction for stabilizing India's population while promoting social development."
  },
  {
    id: 29,
    question: "In the National Sample Survey (NSS), which round specifically focused on health and morbidity in India, collecting data on hospitalization, ailments, and medical expenditure?",
    options: ["52nd Round (1995-96)", "60th Round (2004-05)", "75th Round (2017-18)", "Both A and C"],
    answer: 3,
    explanation: "Both the 52nd Round (1995-96) and the 75th Round (2017-18) of NSS focused on health and morbidity. The 60th Round (2004-05) was on morbidity, health care, and conditions of the aged. These rounds provide nationally representative data on health service utilization and out-of-pocket expenditure."
  },
  {
    id: 30,
    question: "The Sample Registration System (SRS) in India, which provides annual data on birth rates, death rates, and infant mortality rates, is a scheme operated by:",
    options: ["Ministry of Health & Family Welfare", "Office of the Registrar General of India", "IIPS Mumbai", "National Statistical Office"],
    answer: 1,
    explanation: "SRS is operated by the Office of the Registrar General of India (RGI) under the Ministry of Home Affairs. It has been operational since 1964-65 and uses dual record system through continuous enumeration of births and deaths plus periodic retrospective surveys. It is the largest demographic survey in India."
  },
  {
    id: 31,
    question: "Dr. Tedros Adhanom Ghebreyesus, the current WHO Director-General, belongs to which country and was elected for a second term in which year?",
    options: ["Kenya; 2022", "Ethiopia; 2022", "South Africa; 2021", "Nigeria; 2022"],
    answer: 1,
    explanation: "Dr. Tedros Adhanom Ghebreyesus is from Ethiopia. He was first elected as WHO DG in 2017 and re-elected for a second five-year term in 2022. He is the first African to lead the WHO and previously served as Ethiopia's Minister of Health and Minister of Foreign Affairs."
  },
  {
    id: 32,
    question: "The WHO South-East Asia Regional Office (SEARO) is headquartered at:",
    options: ["Mumbai, India", "New Delhi, India", "Colombo, Sri Lanka", "Bangkok, Thailand"],
    answer: 1,
    explanation: "WHO SEARO is headquartered in New Delhi, India. It covers 11 member states: Bangladesh, Bhutan, DPR Korea, India, Indonesia, Maldives, Myanmar, Nepal, Sri Lanka, Thailand, and Timor-Leste. India being the headquarters country is a historical arrangement since SEARO's establishment."
  },
  {
    id: 33,
    question: "The WHO Regional Director for South-East Asia Region (SEARO) is appointed by:",
    options: ["WHO Director-General directly", "Regional Committee for South-East Asia and confirmed by Executive Board", "United Nations Secretary-General", "Health Ministers of SEARO member countries"],
    answer: 1,
    explanation: "The WHO Regional Director is elected by the Regional Committee (composed of health ministers of member states of the region) and confirmed by the WHO Executive Board. Each of the 6 WHO regions has its own regional committee that elects the regional director."
  },
  {
    id: 34,
    question: "The Pan American Health Organization (PAHO) serves as the WHO Regional Office for the Americas. Its headquarters is located at:",
    options: ["New York, USA", "Washington D.C., USA", "Mexico City, Mexico", "Geneva, Switzerland"],
    answer: 1,
    explanation: "PAHO is headquartered in Washington D.C., USA. It is the oldest international public health organization in the world, established in 1902, and serves as both the WHO Regional Office for the Americas and the health agency of the Inter-American system."
  },
  {
    id: 35,
    question: "The WHO Eastern Mediterranean Regional Office (EMRO) is headquartered at:",
    options: ["Beirut, Lebanon", "Amman, Jordan", "Cairo, Egypt", "Riyadh, Saudi Arabia"],
    answer: 2,
    explanation: "WHO EMRO is headquartered in Cairo, Egypt. It covers 22 countries across the Middle East and North Africa region including Arab countries plus Iran, Pakistan, and Somalia. It is one of the 6 WHO regional offices worldwide."
  },
  {
    id: 36,
    question: "The International Health Regulations (IHR) 2005 requires each WHO member state to designate a National IHR Focal Point. In India, which body serves as the IHR National Focal Point?",
    options: ["ICMR", "Ministry of External Affairs", "NCDC under DGHS/MoHFW", "WHO India Country Office"],
    answer: 2,
    explanation: "In India, the National Centre for Disease Control (NCDC) under the Directorate General of Health Services, Ministry of Health & Family Welfare serves as the National IHR Focal Point. It is responsible for communicating with WHO under IHR 2005 for reporting public health events of potential international concern."
  },
  {
    id: 37,
    question: "The WHO BioHub System, established in 2021, is designed to:",
    options: ["Manufacture vaccines for low-income countries", "Facilitate rapid sharing of pathogens and biological materials between countries during health emergencies", "Provide biosafety level-4 laboratory facilities to WHO member states", "Conduct clinical trials for WHO-prequalified medicines"],
    answer: 1,
    explanation: "The WHO BioHub System was established in 2021 to facilitate the rapid sharing of novel pathogens and biological materials between countries during health emergencies. It operates with a physical BioHub facility at Spiez Laboratory in Switzerland and enables timely global access to pathogens for research and countermeasure development."
  },
  {
    id: 38,
    question: "The Codex Alimentarius Commission (CAC), which develops international food standards, is a joint body of:",
    options: ["WHO and UNEP", "FAO and WHO", "FAO and WTO", "WHO and WTO"],
    answer: 1,
    explanation: "The Codex Alimentarius Commission is a joint body of FAO (Food and Agriculture Organization) and WHO, established in 1963. It develops international food standards, guidelines, and codes of practice to protect consumer health and ensure fair practices in food trade. Its standards are referenced in WTO agreements."
  },
  {
    id: 39,
    question: "The World Organisation for Animal Health (WOAH), formerly known as OIE, is an intergovernmental organization important in global health due to its role in:",
    options: ["Manufacturing veterinary vaccines globally", "Setting international standards for animal health, zoonotic disease surveillance, and safe trade in animals", "Regulating pharmaceutical companies producing veterinary drugs", "Providing financial assistance to countries for livestock disease control"],
    answer: 1,
    explanation: "WOAH (formerly OIE - Office International des Epizooties) sets international standards for animal health, animal welfare, and food safety, and plays a crucial role in surveillance of zoonotic diseases (diseases transmissible between animals and humans). It was renamed WOAH in 2022 and is headquartered in Paris, France."
  },
  {
    id: 40,
    question: "The WHO Academy, launched in 2020 as WHO's learning institution, is headquartered at:",
    options: ["Geneva, Switzerland", "Lyon, France", "Brussels, Belgium", "Vienna, Austria"],
    answer: 1,
    explanation: "The WHO Academy is headquartered in Lyon, France. It was inaugurated in 2020 as WHO's learning arm, designed to provide lifelong learning for health and care workers worldwide using digital technology, artificial intelligence, and innovative pedagogical approaches to improve health outcomes globally."
  },
  {
    id: 41,
    question: "The National Accreditation Board for Hospitals & Healthcare Providers (NABH), which accredits healthcare organizations, functions under:",
    options: ["Ministry of Health & Family Welfare directly", "Quality Council of India (QCI)", "National Health Authority (NHA)", "Indian Medical Council"],
    answer: 1,
    explanation: "NABH is a constituent board of the Quality Council of India (QCI). Established in 2005, it sets standards and accredits hospitals and healthcare providers in India. NABH is also an institutional member of the International Society for Quality in Health Care (ISQua), giving its accreditation international recognition."
  },
  {
    id: 42,
    question: "The National Accreditation Board for Testing and Calibration Laboratories (NABL) is the authoritative body for laboratory accreditation in India. It grants accreditation based on which international standard?",
    options: ["ISO 9001:2015", "ISO/IEC 17025:2017 and ISO 15189:2012", "ISO 14001:2015", "ISO 27001:2013"],
    answer: 1,
    explanation: "NABL accredits testing and calibration laboratories based on ISO/IEC 17025:2017 (for testing and calibration laboratories) and ISO 15189:2012 (for medical laboratories). NABL is a constituent board of QCI and is a signatory to ILAC (International Laboratory Accreditation Cooperation) Mutual Recognition Arrangement."
  },
  {
    id: 43,
    question: "The Quality Council of India (QCI) was established in which year and as a joint initiative of which entities?",
    options: ["1995, Government of India alone", "1997, Government of India and Indian industry represented by CII, FICCI, and ASSOCHAM", "2000, Ministry of Commerce and BIS", "2005, Ministry of Health and ISO"],
    answer: 1,
    explanation: "QCI was established in 1997 as a joint initiative of the Government of India and the Indian industry represented by three premier industry associations: CII (Confederation of Indian Industry), FICCI (Federation of Indian Chambers of Commerce and Industry), and ASSOCHAM (Associated Chambers of Commerce and Industry of India)."
  },
  {
    id: 44,
    question: "The Indian Public Health Association (IPHA), the premier professional body for public health in India, was founded in which year and is headquartered at:",
    options: ["1950, New Delhi", "1957, Kolkata", "1965, Mumbai", "1972, Chennai"],
    answer: 1,
    explanation: "IPHA was founded in 1957 and is headquartered in Kolkata. It is the premier professional organization for public health professionals in India and publishes the Indian Journal of Public Health. It is a member of the World Federation of Public Health Associations (WFPHA)."
  },
  {
    id: 45,
    question: "The Clinical Establishments (Registration and Regulation) Act, 2010, was initially implemented across India in all States/UTs except those with their own Acts. As of its enactment, which States were initially notified under this Central Act?",
    options: ["All States except Maharashtra and Tamil Nadu", "All Union Territories and 4 States initially (Arunachal Pradesh, Himachal Pradesh, Mizoram, and Sikkim)", "Only Union Territories", "Only northeastern States"],
    answer: 1,
    explanation: "The Clinical Establishments Act 2010 was initially notified for 4 NE States (Arunachal Pradesh, Mizoram, Sikkim) and Himachal Pradesh along with all Union Territories administered by the Central Government. States can opt in or have their own Acts. The Act aims to register and regulate all clinical establishments."
  },
  {
    id: 46,
    question: "The Joint Commission International (JCI), which provides international hospital accreditation, is the international arm of which organization?",
    options: ["WHO", "The Joint Commission (formerly JCAHO) of the USA", "International Society for Quality in Health Care (ISQua)", "American Hospital Association"],
    answer: 1,
    explanation: "JCI is the international division of The Joint Commission (formerly the Joint Commission on Accreditation of Healthcare Organizations, JCAHO) of the United States. It accredits hospitals worldwide against international standards and is one of the most recognized international hospital accreditation bodies."
  },
  {
    id: 47,
    question: "The Medical Devices Rules, 2017, which regulate medical devices in India, were made under which Act?",
    options: ["Medical Devices Act, 2016", "Drugs and Cosmetics Act, 1940", "Bureau of Indian Standards Act, 2016", "Consumer Protection Act, 2019"],
    answer: 1,
    explanation: "The Medical Devices Rules, 2017 were framed under the Drugs and Cosmetics Act, 1940 (amended), as medical devices were brought under the purview of this Act. The rules replaced earlier provisions and created a comprehensive risk-based regulatory framework classifying devices into Class A, B, C, and D based on risk."
  },
  {
    id: 48,
    question: "The Central Drugs Standard Control Organisation (CDSCO) Medical Device Division is responsible for regulating medical devices under which authority?",
    options: ["Drug Controller General of India (DCGI)", "National Pharmaceutical Pricing Authority (NPPA)", "Ministry of Electronics & Information Technology", "Bureau of Indian Standards (BIS)"],
    answer: 0,
    explanation: "CDSCO's Medical Device Division functions under the Drug Controller General of India (DCGI). The DCGI, appointed under the Drugs and Cosmetics Act 1940, is the regulatory authority for medical devices, diagnostics, and in-vitro diagnostics in India. CDSCO is the national regulatory body under MoHFW."
  },
  {
    id: 49,
    question: "The Association of Physicians of India (API), the largest body of specialist physicians in India, was founded in which year?",
    options: ["1930", "1939", "1947", "1952"],
    answer: 1,
    explanation: "The Association of Physicians of India was founded in 1939. It is one of the oldest and largest medical professional bodies in India, with chapters across all states. It publishes the Journal of the Association of Physicians of India (JAPI) and focuses on internal medicine and its specialties."
  },
  {
    id: 50,
    question: "The National Accreditation Board for Education and Training (NABET), a constituent board of QCI that accredits healthcare training institutions, also accredits which health-related entities?",
    options: ["Hospitals providing NABH accreditation training only", "EIA (Environmental Impact Assessment) consultant organizations, QMS auditors, and occupational health & safety training organizations", "Medical colleges under MCI/NMC", "AYUSH practitioners and institutions"],
    answer: 1,
    explanation: "NABET, as a QCI constituent board, accredits EIA consultant organizations, quality management system (QMS) auditors/lead auditors, occupational health & safety training organizations, and various other training bodies. It is distinct from NABH (hospitals) and NABL (laboratories) within the QCI umbrella structure."
  }
]

export default questions

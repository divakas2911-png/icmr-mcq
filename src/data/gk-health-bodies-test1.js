const questions = [
  {
    id: 1,
    question: "Which division of the Ministry of Health and Family Welfare is primarily responsible for policy formulation related to health and family welfare, international health, and medical education?",
    options: [
      "Department of Health Research",
      "Department of Pharmaceuticals",
      "Department of Health and Family Welfare",
      "Department of Biotechnology"
    ],
    answer: 2,
    explanation: "The Ministry of Health and Family Welfare (MoHFW) has two departments: the Department of Health and Family Welfare and the Department of Health Research. The former handles policy on health, family welfare, international health relations, and medical education, while the latter oversees health research including ICMR."
  },
  {
    id: 2,
    question: "The Directorate General of Health Services (DGHS) is headed by which officer and is responsible for which primary function?",
    options: [
      "Health Secretary; financial management of central health schemes",
      "Director General of Health Services; technical advisory and administrative control of central health institutions",
      "Additional Secretary (Health); implementation of National Health Mission",
      "Joint Secretary (Policy); regulatory oversight of pharmaceutical companies"
    ],
    answer: 1,
    explanation: "DGHS is headed by the Director General of Health Services, who is the principal technical adviser to the Government of India on all medical and public health matters. DGHS exercises technical advisory functions and administrative control over central government health institutions."
  },
  {
    id: 3,
    question: "The Central Drugs Standard Control Organisation (CDSCO) functions under which Ministry and is headquartered at which location?",
    options: [
      "Ministry of Commerce; Mumbai",
      "Ministry of Health and Family Welfare; New Delhi",
      "Ministry of Chemicals and Fertilizers; Hyderabad",
      "Ministry of Science and Technology; Pune"
    ],
    answer: 1,
    explanation: "CDSCO is the national regulatory authority for pharmaceuticals and medical devices in India, functioning under the Ministry of Health and Family Welfare. Its headquarters is in New Delhi, with zonal offices in Mumbai, Kolkata, Chennai, Hyderabad, Ahmedabad, and Guwahati."
  },
  {
    id: 4,
    question: "Under which Act was the Food Safety and Standards Authority of India (FSSAI) established, and in which year did this Act come into force?",
    options: [
      "Prevention of Food Adulteration Act, 1954; came into force in 1955",
      "Food Safety and Standards Act, 2006; came into force in 2008 (partially) and fully in 2011",
      "Essential Commodities Act, 1955; came into force in 1956",
      "Consumer Protection Act, 1986; came into force in 1987"
    ],
    answer: 1,
    explanation: "FSSAI was established under the Food Safety and Standards Act, 2006. The Act came into force partially in 2008 and the food safety provisions became fully operational in 2011. FSSAI is headquartered in New Delhi and is chaired by a non-executive Chairperson."
  },
  {
    id: 5,
    question: "The National Medical Commission (NMC) replaced which body, and under which Act was it constituted?",
    options: [
      "Central Council of Health; NMC Act, 2018",
      "Medical Council of India; National Medical Commission Act, 2019",
      "Indian Medical Association; NMC Ordinance, 2018",
      "Dental Council of India; Medical Practitioners Act, 2020"
    ],
    answer: 1,
    explanation: "The National Medical Commission was established under the National Medical Commission Act, 2019, replacing the Medical Council of India (MCI). NMC has four autonomous boards: Under-Graduate Medical Education Board (UGMEB), Post-Graduate Medical Education Board (PGMEB), Medical Assessment and Rating Board (MARB), and Ethics and Medical Registration Board (EMRB)."
  },
  {
    id: 6,
    question: "The National Health Authority (NHA), which implements Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (AB-PMJAY), is a successor to which body and was given its present form in which year?",
    options: [
      "National Rural Health Mission; 2013",
      "National Health Agency; 2019",
      "National Health Systems Resource Centre; 2020",
      "Central Bureau of Health Intelligence; 2017"
    ],
    answer: 1,
    explanation: "The National Health Authority was reconstituted in January 2019 as a successor to the National Health Agency (which had been set up in 2018 to implement AB-PMJAY). NHA is an attached office of MoHFW and is governed by a Governing Board chaired by the Union Health Minister."
  },
  {
    id: 7,
    question: "The Central Bureau of Health Intelligence (CBHI) publishes which flagship publication that provides comprehensive data on health infrastructure and health status in India?",
    options: [
      "Annual Health Survey",
      "National Health Profile",
      "District Level Household Survey",
      "Sample Registration System Bulletin"
    ],
    answer: 1,
    explanation: "CBHI, functioning under DGHS, is the nodal agency for collection, compilation, and analysis of health data. Its flagship publication is the National Health Profile (NHP), published annually, which provides data on demography, socioeconomic status, health status indicators, and health infrastructure."
  },
  {
    id: 8,
    question: "The National Centre for Disease Control (NCDC), formerly known as the National Institute of Communicable Diseases (NICD), is headquartered in which city and functions under which directorate?",
    options: [
      "Mumbai; CDSCO",
      "New Delhi; DGHS",
      "Pune; ICMR",
      "Chennai; MoHFW"
    ],
    answer: 1,
    explanation: "NCDC (formerly NICD, renamed in 2009) is headquartered in New Delhi and functions under DGHS. It serves as the national reference laboratory for disease surveillance and outbreak investigation. Its mandate includes disease surveillance, epidemic intelligence, entomology, and environmental health."
  },
  {
    id: 9,
    question: "The National Institute of Health and Family Welfare (NIHFW) is an autonomous organisation under MoHFW, primarily functioning as which type of institution?",
    options: [
      "Tertiary care hospital for referral services",
      "Apex technical institute for training, research, and education in health and family welfare",
      "Regulatory body for private medical colleges",
      "National repository for essential medicines procurement"
    ],
    answer: 1,
    explanation: "NIHFW, established in 1977 by merging the National Institute of Health Administration and Education (NIHAE) and the Central Family Planning Institute (CFPI), is an apex technical institution for training, research, consultancy, and education in health and family welfare management. It is located in New Delhi."
  },
  {
    id: 10,
    question: "Which national programme is administered by the National Health Authority for providing health and wellness services through Health and Wellness Centres (HWCs), representing the first pillar of Ayushman Bharat?",
    options: [
      "Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
      "Comprehensive Primary Health Care through Ayushman Arogya Mandir",
      "National Urban Health Mission",
      "Janani Suraksha Yojana"
    ],
    answer: 1,
    explanation: "Ayushman Bharat has two components: (1) Health and Wellness Centres (now called Ayushman Arogya Mandirs) providing Comprehensive Primary Health Care, and (2) PM-JAY for secondary and tertiary hospitalization. The HWC/AAM component is now managed under NHA, previously under NHM."
  },
  {
    id: 11,
    question: "The Pharmacy Council of India (PCI) was established under which Act and regulates pharmacy education up to which level?",
    options: [
      "Drugs and Cosmetics Act, 1940; up to postgraduate level",
      "Pharmacy Act, 1948; up to diploma and degree (B.Pharm) level",
      "Pharmacy Act, 1948; up to doctoral (Ph.D.) level",
      "Medical Council Act, 1956; up to undergraduate level"
    ],
    answer: 1,
    explanation: "PCI was constituted under the Pharmacy Act, 1948. It regulates pharmacy education and practice at the diploma (D.Pharm) and degree (B.Pharm) levels, prescribing minimum standards of pharmacy education, and maintains a central register of pharmacists."
  },
  {
    id: 12,
    question: "The Dental Council of India (DCI) was established under the Dentists Act of which year, and is empowered to prescribe standards for which programs?",
    options: [
      "1948; MBBS and MD programs",
      "1948; BDS and MDS programs",
      "1956; BDS programs only",
      "1965; MDS and Ph.D. programs"
    ],
    answer: 1,
    explanation: "DCI was established under the Dentists Act, 1948. It prescribes standards for dental education (BDS – Bachelor of Dental Surgery and MDS – Master of Dental Surgery), recognizes dental qualifications, and maintains a central register of dentists."
  },
  {
    id: 13,
    question: "The Indian Nursing Council (INC) was established under the Indian Nursing Council Act of which year and primarily regulates which category of health workers?",
    options: [
      "1947; Doctors specializing in critical care nursing",
      "1947; Nurses, midwives, nursing assistants, and health visitors",
      "1956; Auxiliary nurse midwives only",
      "1970; Nurses in government hospitals only"
    ],
    answer: 1,
    explanation: "INC was established under the Indian Nursing Council Act, 1947. It prescribes standards for nursing education, recognizes nursing qualifications, and maintains the central register for nurses, midwives, auxiliary nurse-midwives (ANMs), and health visitors."
  },
  {
    id: 14,
    question: "The Central Council of Indian Medicine (CCIM) was established under the Indian Medicine Central Council Act, 1970, and regulates which systems of medicine?",
    options: [
      "Ayurveda and Yoga only",
      "Ayurveda, Unani, Siddha, and Sowa-Rigpa",
      "Homoeopathy, Naturopathy, and Yoga",
      "Unani, Siddha, and Homoeopathy"
    ],
    answer: 1,
    explanation: "CCIM, established under the Indian Medicine Central Council Act, 1970 (amended to include Sowa-Rigpa in 2020), regulates Ayurveda, Unani, Siddha, and Sowa-Rigpa systems. It is now under the Ministry of Ayush. Homoeopathy is separately regulated by the Central Council of Homoeopathy."
  },
  {
    id: 15,
    question: "The Central Council of Homoeopathy (CCH) was constituted under which Act and in which year?",
    options: [
      "Homoeopathy Central Council Act, 1973",
      "Indian Medicine Central Council Act, 1970",
      "Homoeopathic Pharmacopoeia Act, 1965",
      "Ministry of Ayush Act, 2014"
    ],
    answer: 0,
    explanation: "CCH was constituted under the Homoeopathy Central Council Act, 1973. It prescribes minimum standards for homoeopathic medical education, recognizes medical qualifications in homoeopathy, and maintains a central register of homoeopathic practitioners."
  },
  {
    id: 16,
    question: "The Drugs Technical Advisory Board (DTAB) is constituted under Section 5 of the Drugs and Cosmetics Act, 1940. What is the primary function of DTAB?",
    options: [
      "To advise the Central and State Governments on technical matters arising out of the administration of the Drugs and Cosmetics Act",
      "To approve new drug applications submitted by pharmaceutical companies",
      "To license pharmaceutical manufacturing units across India",
      "To set price controls on essential medicines"
    ],
    answer: 0,
    explanation: "DTAB is a statutory advisory body constituted under Section 5 of the Drugs and Cosmetics Act, 1940. Its primary function is to advise the Central Government and State Governments on technical matters arising from the administration of the Act. The Drug Controller General of India (DCGI) is the ex-officio Member Secretary of DTAB."
  },
  {
    id: 17,
    question: "The Drugs Consultative Committee (DCC) is constituted under Section 7 of the Drugs and Cosmetics Act, 1940. How does DCC differ in its primary function from DTAB?",
    options: [
      "DCC focuses on pharmacovigilance; DTAB focuses on drug approvals",
      "DCC advises on securing uniformity in administration of the Act across states; DTAB advises on technical matters",
      "DCC regulates Ayurvedic drugs; DTAB regulates allopathic drugs",
      "DCC issues drug pricing orders; DTAB issues import licenses"
    ],
    answer: 1,
    explanation: "While DTAB advises on technical matters under the Drugs and Cosmetics Act, DCC (constituted under Section 7) advises on securing uniformity in the administration of the Act throughout India. DCC includes representatives of State Drug Controllers and helps coordinate drug regulation across different states."
  },
  {
    id: 18,
    question: "The Atomic Energy Regulatory Board (AERB) which regulates radiation safety in India was constituted in which year under which order, and is now governed by which Act?",
    options: [
      "1983; under the Atomic Energy Act, 1962 and a Government Order; now governed by the Atomic Energy Regulatory Board Act, 2023",
      "1975; under the Radiation Protection Act, 1975; now governed by the same Act",
      "1990; under the Nuclear Safety Act, 1990; now governed by the AERB Act, 2010",
      "1962; under the Atomic Energy Act, 1962; still governed by the same Act"
    ],
    answer: 0,
    explanation: "AERB was constituted on November 15, 1983, under a Government Order pursuant to the Atomic Energy Act, 1962. It replaced the erstwhile Atomic Energy Control Board. The AERB Act, 2023 was enacted to give AERB statutory independence. AERB regulates the use of ionizing radiation in medical, industrial, and research applications."
  },
  {
    id: 19,
    question: "The National Commission for Allied and Healthcare Professions (NCAHP) was established under which Act and regulates which categories of health professionals?",
    options: [
      "Allied and Healthcare Professions Act, 2021; over 50 categories of allied health and healthcare professionals",
      "Paramedical Council Act, 2018; nursing and pharmacy professionals",
      "National Health Policy, 2017; community health workers",
      "NMC Act, 2019; medical imaging professionals only"
    ],
    answer: 0,
    explanation: "NCAHP was established under the National Commission for Allied and Healthcare Professions Act, 2021. It regulates education and practice of over 50 categories of allied health professionals (physiotherapy, occupational therapy, medical lab technology, radiology, etc.) and healthcare professionals (perfusionists, anesthesia technicians, etc.)."
  },
  {
    id: 20,
    question: "Which body is responsible for accreditation of hospitals and healthcare organizations in India, and under which ministry does it function?",
    options: [
      "CDSCO; Ministry of Health and Family Welfare",
      "National Accreditation Board for Hospitals and Healthcare Providers (NABH); Quality Council of India under Ministry of Commerce and Industry",
      "NMC; Ministry of Health and Family Welfare",
      "Bureau of Indian Standards; Ministry of Consumer Affairs"
    ],
    answer: 1,
    explanation: "NABH is a constituent board of the Quality Council of India (QCI), which functions under the Ministry of Commerce and Industry. NABH accredits hospitals, medical imaging centres, blood banks, and other healthcare organizations against evidence-based standards. QCI was set up jointly by the Government of India and Indian industry."
  },
  {
    id: 21,
    question: "The first AIIMS was established at New Delhi under which Act, and in which year was it inaugurated?",
    options: [
      "All India Institute of Medical Sciences Act, 1956; inaugurated in 1956",
      "All India Institute of Medical Sciences Act, 1956; inaugurated in 1956 but fully functional from 1960",
      "Medical College Act, 1950; inaugurated in 1952",
      "University Grants Commission Act, 1956; inaugurated in 1958"
    ],
    answer: 1,
    explanation: "AIIMS New Delhi was established under the All India Institute of Medical Sciences Act, 1956. It was inaugurated in 1956 by Prime Minister Jawaharlal Nehru, though it became fully functional as a complete institution by 1960. It was established with assistance from the Government of New Zealand under the Colombo Plan."
  },
  {
    id: 22,
    question: "PGIMER Chandigarh was established as an autonomous institution under which Act, and which government granted it the status of an Institute of National Importance?",
    options: [
      "Post Graduate Institute of Medical Education and Research Act, 1966; Central Government",
      "Post Graduate Institute of Medical Education and Research (Chandigarh) Act, 1966; Central Government",
      "Punjab Medical College Act, 1956; Punjab Government",
      "PGIMER Act, 1960; Joint body of Punjab and Haryana"
    ],
    answer: 1,
    explanation: "PGIMER Chandigarh was established under the Post Graduate Institute of Medical Education and Research (Chandigarh) Act, 1966, and declared an Institute of National Importance. It was established with WHO assistance and is now under MoHFW. Its roots go back to 1962 when it started functioning."
  },
  {
    id: 23,
    question: "JIPMER (Jawaharlal Institute of Post Graduate Medical Education & Research) in Puducherry was granted the status of an Institute of National Importance in which year, and originally started as which institution?",
    options: [
      "2008; originally the École de Médecine de Pondichéry established in 1823",
      "2001; originally a civil hospital in 1950",
      "2012; originally the Indira Gandhi Government Medical College",
      "1998; originally a French colonial medical school established in 1900"
    ],
    answer: 0,
    explanation: "JIPMER was granted the status of an Institute of National Importance in 2008 under the JIPMER Puducherry Act, 2008. It traces its history to the École de Médecine de Pondichéry established in 1823 by the French colonial administration, making it one of the oldest medical institutions in India."
  },
  {
    id: 24,
    question: "NIMHANS (National Institute of Mental Health and Neuro Sciences) in Bengaluru was declared an Institute of National Importance in which year and was formed by merging which two institutions?",
    options: [
      "2012; merger of the All India Institute of Mental Health and the Central Institute of Psychiatry",
      "2012; merger of the All India Institute of Mental Health (AIIMH) and the Mysore State Mental Hospital",
      "1974; merger of two colonial-era asylums",
      "1995; merger of the National Brain Research Centre and Bangalore Mental Hospital"
    ],
    answer: 0,
    explanation: "NIMHANS was declared an Institute of National Importance in 2012 under the National Institute of Mental Health and Neuro-Sciences Bangalore Act, 2012. It was formed in 1974 by merging the All India Institute of Mental Health (AIIMH, established 1954) and the Mysore Government Mental Hospital (established 1847)."
  },
  {
    id: 25,
    question: "Sree Chitra Tirunal Institute for Medical Sciences and Technology (SCTIMST) in Thiruvananthapuram is unique among Institutes of National Importance because it combines which two areas?",
    options: [
      "Medical education and pharmaceutical research",
      "Medical sciences (neurosciences, cardiology) and biomedical technology (Biomedical Technology Wing)",
      "Public health research and clinical medicine",
      "Tropical medicine and space medicine research"
    ],
    answer: 1,
    explanation: "SCTIMST is unique as it combines an advanced hospital (known for neurosciences, cardio-vascular and thoracic surgery) with the Biomedical Technology Wing (BMTW), which develops indigenous biomedical devices, implants, and biomaterials. It was declared an Institute of National Importance under the Sree Chitra Tirunal Institute Act, 1980."
  },
  {
    id: 26,
    question: "ICMR's National Institute of Nutrition (NIN) is located in which city and is known for publishing which comprehensive dietary reference document?",
    options: [
      "Mumbai; Indian Food Composition Tables",
      "Hyderabad; Dietary Guidelines for Indians and Recommended Dietary Allowances (RDA)",
      "New Delhi; National Nutrition Monitoring Bureau reports",
      "Bengaluru; ICMR-NIN Atlas of Nutrition"
    ],
    answer: 1,
    explanation: "NIN is located in Hyderabad and is the oldest nutrition research institution in India (established 1918). It publishes the 'Dietary Guidelines for Indians' and 'Nutrient Requirements and Recommended Dietary Allowances (RDA) for Indians,' which are the standard dietary reference documents in India. It also publishes Indian Food Composition Tables."
  },
  {
    id: 27,
    question: "The National Centre for Biological Sciences (NCBS) in Bengaluru is a centre of the Tata Institute of Fundamental Research (TIFR) and is associated with which other institution on the same campus?",
    options: [
      "Centre for Cellular and Molecular Biology (CCMB)",
      "Institute for Stem Cell Science and Regenerative Medicine (inStem)",
      "National Brain Research Centre (NBRC)",
      "International Centre for Genetic Engineering and Biotechnology (ICGEB)"
    ],
    answer: 1,
    explanation: "NCBS (under TIFR, Department of Atomic Energy) shares the GKVK campus in Bengaluru with the Institute for Stem Cell Science and Regenerative Medicine (inStem, under DBT). Both are part of the Bangalore Life Sciences Cluster (BLiSC). THSTI (Translational Health Science and Technology Institute) is a separate DBT institute in Faridabad."
  },
  {
    id: 28,
    question: "The CSIR-Central Drug Research Institute (CDRI) is located in which city, and which landmark drug for malaria did it develop that became the first drug discovered and developed entirely in India?",
    options: [
      "Hyderabad; Arteether",
      "Lucknow; Arteether (developed as CDRI-81/470)",
      "Pune; Chloroquine analogue",
      "Mumbai; Pyronaridine"
    ],
    answer: 1,
    explanation: "CSIR-CDRI is located in Lucknow. Arteether (developed as compound CDRI-81/470, marketed as E-mal) is considered a landmark as it was developed entirely in India for the treatment of cerebral malaria. CDRI was established in 1951 and has contributed numerous drugs including Centchroman (an oral contraceptive)."
  },
  {
    id: 29,
    question: "CSIR-Centre for Cellular and Molecular Biology (CCMB) and CSIR-Institute of Genomics and Integrative Biology (IGIB) are located in which cities respectively?",
    options: [
      "Pune and New Delhi",
      "Hyderabad and New Delhi",
      "Bengaluru and Mumbai",
      "Hyderabad and Chennai"
    ],
    answer: 1,
    explanation: "CSIR-CCMB is located in Hyderabad and CSIR-IGIB is located in New Delhi. CCMB is known for research in cellular and molecular biology, evolutionary biology, and played a key role in COVID-19 genomic surveillance. IGIB is known for genomics, metabolomics, and respiratory disease research."
  },
  {
    id: 30,
    question: "The Translational Health Science and Technology Institute (THSTI), a DBT autonomous institute, is located in which science cluster and primarily focuses on which type of research?",
    options: [
      "JNCASR campus, Bengaluru; stem cell research",
      "NCR Biotech Science Cluster, Faridabad; translational research bridging laboratory discoveries to clinical applications",
      "Biopolis, Hyderabad; drug manufacturing technology",
      "AIIMS campus, New Delhi; clinical pharmacology"
    ],
    answer: 1,
    explanation: "THSTI is located at the NCR Biotech Science Cluster in Faridabad, Haryana. It focuses on translational health research — bridging the gap between laboratory discoveries and clinical applications. Other institutes in the same cluster include RCB (Regional Centre for Biotechnology) and ABLE (Association of Biotechnology Led Enterprises - Education Research)."
  },
  {
    id: 31,
    question: "The World Health Assembly (WHA), the supreme decision-making body of WHO, meets annually in which city? What is the composition of the WHO Executive Board?",
    options: [
      "New York; 194 member states represented by health ministers",
      "Geneva; 34 persons technically qualified in health, each designated by a member state selected by WHA",
      "Geneva; 15 rotating members from WHO regional offices",
      "Zurich; all 194 member states' permanent representatives"
    ],
    answer: 1,
    explanation: "WHA meets annually in Geneva, Switzerland. The WHO Executive Board is composed of 34 persons technically qualified in health, each designated by a member state elected by the WHA to do so. Board members serve in their personal capacity, not as representatives of their governments. The EB normally meets in January and May each year."
  },
  {
    id: 32,
    question: "India belongs to which WHO Regional Office, and where is this regional office headquartered?",
    options: [
      "WPRO (Western Pacific Regional Office); Manila",
      "SEARO (South-East Asia Regional Office); New Delhi",
      "EMRO (Eastern Mediterranean Regional Office); Cairo",
      "EURO (European Regional Office); Copenhagen"
    ],
    answer: 1,
    explanation: "India is a member of WHO's South-East Asia Regional Office (SEARO), which is headquartered in New Delhi. SEARO covers 11 member countries including India, Bangladesh, Bhutan, Democratic People's Republic of Korea, Indonesia, Maldives, Myanmar, Nepal, Sri Lanka, Thailand, and Timor-Leste."
  },
  {
    id: 33,
    question: "UNICEF's global headquarters is in New York. In India, UNICEF's country office is headquartered in New Delhi. What is UNICEF's primary funding mechanism?",
    options: [
      "Assessed contributions from member states, similar to the UN regular budget",
      "Voluntary contributions from governments, intergovernmental organizations, and private sector",
      "Revenue from sale of UNICEF greeting cards and merchandise only",
      "Special drawing rights from the IMF"
    ],
    answer: 1,
    explanation: "Unlike some UN agencies, UNICEF is entirely funded by voluntary contributions — from governments, intergovernmental organizations, NGOs, and private sector partners. It has no assessed contributions from member states. UNICEF India partners with the Government of India on child health, nutrition, WASH, education, and child protection programs."
  },
  {
    id: 34,
    question: "UNFPA (United Nations Population Fund) was established in which year and its mandate in India primarily covers which areas?",
    options: [
      "1969; reproductive health, family planning, maternal health, and adolescent health",
      "1964; population census assistance and demographic surveys only",
      "1975; HIV/AIDS prevention among pregnant women",
      "1981; nutrition supplementation programs for pregnant women"
    ],
    answer: 0,
    explanation: "UNFPA was established in 1969 (originally as the United Nations Fund for Population Activities, renamed in 1987). In India, UNFPA's mandate covers reproductive health and rights, family planning, maternal health, adolescent health and development, and gender-based violence prevention. It is headquartered in New York."
  },
  {
    id: 35,
    question: "UNAIDS, the Joint United Nations Programme on HIV/AIDS, is co-sponsored by multiple UN agencies and is headquartered in which city? How many co-sponsoring organizations does it have?",
    options: [
      "New York; 8 co-sponsors",
      "Geneva; 11 co-sponsors",
      "Geneva; 6 co-sponsors",
      "New York; 15 co-sponsors"
    ],
    answer: 1,
    explanation: "UNAIDS is headquartered in Geneva, Switzerland. It has 11 co-sponsoring organizations: UNHCR, UNICEF, WFP, UNDP, UNFPA, UNODC, UN Women, ILO, UNESCO, WHO, and the World Bank. UNAIDS was established in 1996 and is the main advocate for accelerated, comprehensive, and coordinated global action on HIV/AIDS."
  },
  {
    id: 36,
    question: "The Global Fund to Fight AIDS, Tuberculosis and Malaria is headquartered in which city, and which model distinguishes its funding mechanism from traditional bilateral aid?",
    options: [
      "New York; government-to-government bilateral grants",
      "Geneva; a financing instrument that raises and invests funds, but does not implement programs directly — it relies on in-country implementers",
      "Brussels; a direct implementation model through UN agencies",
      "Washington DC; loans to middle-income countries"
    ],
    answer: 1,
    explanation: "The Global Fund is headquartered in Geneva. It is a financing mechanism, not an implementing agency — it raises money from donors and invests it in country proposals developed by Country Coordinating Mechanisms (CCMs). Implementation is done by local organizations (government and civil society). India is among the largest recipients of Global Fund grants."
  },
  {
    id: 37,
    question: "GAVI, the Vaccine Alliance, was originally created in which year, and its secretariat is based in which city?",
    options: [
      "1990; New York",
      "2000; Geneva",
      "2006; Brussels",
      "1995; Washington DC"
    ],
    answer: 1,
    explanation: "GAVI was created in 2000 at the World Economic Forum in Davos and its secretariat is based in Geneva. It was created to improve access to new and underused vaccines for children in the world's poorest countries. Its founding partners include WHO, UNICEF, World Bank, and the Bill & Melinda Gates Foundation."
  },
  {
    id: 38,
    question: "CEPI (Coalition for Epidemic Preparedness Innovations) was established following which epidemic and is headquartered in which city?",
    options: [
      "SARS outbreak of 2003; Singapore",
      "West Africa Ebola outbreak of 2014-16; Oslo, Norway",
      "H1N1 pandemic of 2009; Geneva",
      "Zika outbreak of 2015-16; Washington DC"
    ],
    answer: 1,
    explanation: "CEPI was established in 2017 following the West Africa Ebola outbreak (2014-16), which exposed the lack of preparedness for epidemic diseases. It is headquartered in Oslo, Norway. CEPI's mission is to accelerate the development of vaccines against emerging infectious diseases and enable equitable access."
  },
  {
    id: 39,
    question: "UNITAID, the international health initiative focused on access to medicines for HIV/AIDS, hepatitis C, and tuberculosis, uses which innovative financing mechanism as its primary funding source?",
    options: [
      "Pharmaceutical company levies",
      "Solidarity levy on airline tickets, pioneered by France",
      "Carbon credit trading",
      "Lottery revenue from member countries"
    ],
    answer: 1,
    explanation: "UNITAID was established in 2006 and pioneered the use of a solidarity levy on airline tickets as a primary funding source. France was the first country to implement this levy. UNITAID, hosted by WHO in Geneva, works on health market innovation — lowering prices, improving quality, and accelerating availability of diagnostics, medicines, and preventive tools."
  },
  {
    id: 40,
    question: "The World Bank's International Development Association (IDA) provides concessional loans to low-income countries for health. Under which window does India primarily receive World Bank health financing, given India's current income classification?",
    options: [
      "IDA grants only, as India is still a low-income country",
      "IBRD (International Bank for Reconstruction and Development) loans, as India is now classified as a lower-middle-income country and has graduated from IDA",
      "IFC (International Finance Corporation) equity investments only",
      "MIGA (Multilateral Investment Guarantee Agency) guarantees"
    ],
    answer: 1,
    explanation: "India graduated from IDA eligibility in the early 2000s and now primarily borrows from IBRD at non-concessional rates, as it is classified as a lower-middle-income country. India remains one of the largest IBRD borrowers globally. Major World Bank health projects in India include those for disease surveillance, reproductive health, and health systems strengthening."
  },
  {
    id: 41,
    question: "Under the National Health Mission framework, at the state level, the NHM is implemented through which structure that has financial and administrative powers?",
    options: [
      "State Health Department directly through the Health Secretary",
      "State Health Society (SHS), a registered society with a Governing Body chaired by the Chief Minister/Health Minister",
      "District Collector's office with district-level planning",
      "State Planning Commission's social sector division"
    ],
    answer: 1,
    explanation: "NHM is implemented through State Health Societies (SHS) — registered societies with Governing Bodies typically chaired by the Chief Minister or Health Minister. The Principal Secretary/Secretary (Health) usually chairs the Executive Committee. This structure gives states flexibility in planning and financial management. District Health Societies (DHS) are sub-entities at the district level."
  },
  {
    id: 42,
    question: "The District Health Society (DHS) operates at the district level under NHM. Who typically chairs the Governing Body of a District Health Society?",
    options: [
      "Chief Medical Officer (CMO) or District Health Officer",
      "District Collector / District Magistrate",
      "Zilla Parishad Chairman",
      "Member of Parliament from the district"
    ],
    answer: 1,
    explanation: "The Governing Body of a District Health Society is typically chaired by the District Collector/District Magistrate (DC/DM). The Chief Medical Officer/Civil Surgeon/District Health Officer serves as the Member Secretary. This structure ensures convergence with other district-level programs and administrative oversight."
  },
  {
    id: 43,
    question: "State Food and Drug Administrations (FDAs/Drug Control Departments) at the state level enforce the Drugs and Cosmetics Act, 1940 through State Drug Controllers. What is the primary division of regulatory jurisdiction between CDSCO (central) and state drug authorities?",
    options: [
      "CDSCO regulates all drugs; state FDAs regulate only food",
      "CDSCO regulates approval of new drugs, clinical trials, and import licenses for drugs/cosmetics; State Drug Controllers regulate manufacturing and sale/distribution licenses within the state",
      "CDSCO regulates branded medicines; state FDAs regulate generic medicines",
      "CDSCO regulates prescription drugs; state FDAs regulate OTC drugs"
    ],
    answer: 1,
    explanation: "There is a two-tier regulatory structure: CDSCO (central) handles new drug approvals, clinical trial permissions, import licenses, and standards setting. State Drug Controllers issue manufacturing licenses for drugs/cosmetics produced in their state and licenses for sale and distribution. Both share enforcement responsibilities under the Drugs and Cosmetics Act."
  },
  {
    id: 44,
    question: "State Medical Councils (SMCs) in India register medical practitioners under which act and their relationship with the National Medical Commission (NMC) is defined how?",
    options: [
      "Under respective State Medical Registration Acts; SMCs are fully autonomous with no connection to NMC",
      "Under the National Medical Commission Act, 2019 and respective state acts; SMCs maintain state registers and the Ethics and Medical Registration Board (EMRB) of NMC maintains the National Medical Register (NMR)",
      "Under the Indian Medical Council Act, 1956 (still in force); SMCs report directly to MCI",
      "Under MCI guidelines; SMCs are subordinate offices of NMC"
    ],
    answer: 1,
    explanation: "Under the NMC Act, 2019, the Ethics and Medical Registration Board (EMRB) maintains the National Medical Register (NMR). State Medical Councils continue to register practitioners under state acts, but NMC's EMRB oversees the national register and has appellate jurisdiction over SMC decisions on registration and ethics."
  },
  {
    id: 45,
    question: "The Public Health Foundation of India (PHFI) is headquartered in which city, and what was its primary mandate when established in 2006?",
    options: [
      "Mumbai; to manage public-private partnerships in hospital care",
      "New Delhi/Gurugram; to build public health capacity through education, training, research, and policy advocacy",
      "Chennai; to conduct clinical trials for tropical diseases",
      "Hyderabad; to provide technical assistance to state health departments"
    ],
    answer: 1,
    explanation: "PHFI is headquartered in New Delhi (with offices in Gurugram). Established in 2006 as a public-private initiative, its mandate is to build public health capacity in India through establishing Indian Institutes of Public Health (IIPHs), conducting research, training public health professionals, and informing health policy."
  },
  {
    id: 46,
    question: "The National Health Systems Resource Centre (NHSRC) was established in which year and primarily serves as what type of institution under the NHM?",
    options: [
      "2007; apex technical support institution to MoHFW and states for strengthening health systems under NHM",
      "2005; a regulatory body for quality assurance in government hospitals",
      "2012; a financing agency for state health societies",
      "2000; a training institution for ASHA workers"
    ],
    answer: 0,
    explanation: "NHSRC was established in 2007 as an apex technical support institution under NHM/MoHFW. It provides technical assistance to states/UTs on health systems strengthening, quality improvement, human resources, health financing, and community processes. It also houses the Community Processes Resource Centre and oversees KAYAKALP (hospital cleanliness initiative)."
  },
  {
    id: 47,
    question: "The first Health University in India (and currently the largest in Asia) was established in which state, and what is its full name?",
    options: [
      "Tamil Nadu; Tamil Nadu Dr. MGR Medical University, established in 1987",
      "Maharashtra; Maharashtra University of Health Sciences (MUHS), established in 1998",
      "Karnataka; Rajiv Gandhi University of Health Sciences, established in 1996",
      "Uttar Pradesh; King George's Medical University, established as university in 2002"
    ],
    answer: 0,
    explanation: "The Tamil Nadu Dr. MGR Medical University, established in 1987 in Chennai, was the first health university in India and is considered the largest health sciences university in Asia by number of affiliated colleges. It was established to provide affiliation to medical, dental, nursing, and allied health science colleges in Tamil Nadu."
  },
  {
    id: 48,
    question: "The Kerala University of Health Sciences (KUHS), established in 2010, took over affiliating functions for health science colleges from which university?",
    options: [
      "University of Calicut",
      "University of Kerala",
      "Calicut University and Mahatma Gandhi University, along with other Kerala universities",
      "Cochin University of Science and Technology"
    ],
    answer: 2,
    explanation: "KUHS was established under the Kerala University of Health Sciences Act, 2010, and took over the affiliating functions of medical, dental, nursing, pharmacy, and allied health science colleges from various general universities in Kerala, including the University of Kerala, University of Calicut, and Mahatma Gandhi University."
  },
  {
    id: 49,
    question: "The Employees' State Insurance Corporation (ESIC), which runs a large network of hospitals and dispensaries, functions under which Ministry and is governed by which Act?",
    options: [
      "Ministry of Health and Family Welfare; Employees Health Insurance Act, 1948",
      "Ministry of Labour and Employment; Employees' State Insurance Act, 1948",
      "Ministry of Finance; Social Security Act, 1952",
      "Ministry of Social Justice and Empowerment; ESIC Act, 1960"
    ],
    answer: 1,
    explanation: "ESIC functions under the Ministry of Labour and Employment and is governed by the Employees' State Insurance Act, 1948. It is a statutory body providing social security and health insurance to workers in the organized sector. ESIC runs a network of hospitals (ESI Hospitals) and dispensaries providing comprehensive medical care to insured workers and their dependents."
  },
  {
    id: 50,
    question: "The Central Government Health Scheme (CGHS), which provides comprehensive healthcare to Central Government employees and pensioners, operates in how many cities approximately, and is administered by which Directorate?",
    options: [
      "25 cities; Directorate of CGHS under DGHS, MoHFW",
      "15 cities; National Health Authority",
      "50 cities; Ministry of Personnel, Public Grievances and Pensions",
      "10 cities; Central Bureau of Health Intelligence"
    ],
    answer: 0,
    explanation: "CGHS operates in approximately 25 cities across India (including Delhi, Mumbai, Chennai, Kolkata, Hyderabad, Bengaluru, Ahmedabad, and others) and is administered by the Directorate of CGHS under DGHS, MoHFW. It provides outpatient, specialist, and hospitalization services through Wellness Centres and empanelled hospitals, covering central government employees, pensioners, and their dependents."
  }
]

export default questions

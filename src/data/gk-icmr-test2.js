const questions = [
  // Q1-Q10: ICMR institutes deep dive
  {
    id: 1,
    question: "The National Institute of Virology (NIV), Pune, operates India's only Biosafety Level-4 (BSL-4) laboratory. Which of the following pathogens CANNOT be handled at BSL-4 but requires only BSL-3 containment?",
    options: [
      "Nipah virus",
      "Ebola virus",
      "Kyasanur Forest Disease virus",
      "Crimean-Congo Hemorrhagic Fever virus"
    ],
    answer: 2,
    explanation: "Kyasanur Forest Disease (KFD) virus, a tick-borne flavivirus, requires BSL-3 containment. Nipah, Ebola, and CCHF viruses are classified as BSL-4 agents due to their high lethality, lack of approved vaccines, and potential for aerosol transmission. NIV Pune's BSL-4 facility is unique in India and handles these highest-risk pathogens."
  },
  {
    id: 2,
    question: "The National Institute of Malaria Research (NIMR) developed the first indigenous malaria rapid diagnostic test kit. Which protein does India's indigenous RDT primarily detect for falciparum malaria diagnosis?",
    options: [
      "Lactate Dehydrogenase (pLDH)",
      "Histidine-Rich Protein-2 (HRP-2)",
      "Aldolase",
      "Glutamate Dehydrogenase (GDH)"
    ],
    answer: 1,
    explanation: "NIMR's indigenous RDT for Plasmodium falciparum primarily detects Histidine-Rich Protein-2 (HRP-2), a protein uniquely expressed by P. falciparum. This antigen-based test was developed indigenously to reduce dependence on imported kits. NIMR also contributed to the National Drug Policy on Malaria and artemisinin combination therapy (ACT) rollout in India."
  },
  {
    id: 3,
    question: "The National Institute of Nutrition (NIN), Hyderabad, revised India's Recommended Dietary Allowances (RDA) in 2020. What is the revised RDA for Vitamin D in healthy adults (19–50 years) as per NIN 2020 guidelines?",
    options: [
      "200 IU/day",
      "400 IU/day",
      "600 IU/day",
      "800 IU/day"
    ],
    answer: 1,
    explanation: "NIN's revised Dietary Reference Values for Indians (2020) set the RDA for Vitamin D at 400 IU/day (10 mcg/day) for healthy adults aged 19–50 years. This revision replaced the earlier 2010 guidelines and incorporated data from the Diet & Disease Cohort studies conducted by NIN across multiple Indian states."
  },
  {
    id: 4,
    question: "ICMR's National AIDS Research Institute (NARI), Pune, is credited with pioneering HIV research in India. NARI was the first to demonstrate which crucial epidemiological finding in India that changed the national HIV prevention strategy?",
    options: [
      "IV drug users as the primary route of transmission in Mumbai",
      "Heterosexual transmission as the dominant route of HIV spread in India",
      "Mother-to-child transmission rate exceeding 40% without intervention",
      "Co-infection of HIV with tuberculosis exceeding 60% in Maharashtra"
    ],
    answer: 1,
    explanation: "NARI, Pune was instrumental in establishing that heterosexual transmission is the dominant route of HIV spread in India, contrasting with the IV drug use-predominant pattern seen in Western nations at the time. This finding fundamentally shaped India's HIV prevention strategy toward targeting high-risk heterosexual populations, sex workers, and truckers, leading to targeted interventions under NACP."
  },
  {
    id: 5,
    question: "ICMR-National Centre for Disease Informatics and Research (NCDIR), Bengaluru, coordinates cancer registries in India. Which of the following statements correctly describes the difference between a Population-Based Cancer Registry (PBCR) and a Hospital-Based Cancer Registry (HBCR)?",
    options: [
      "PBCR records only incident cases while HBCR records both incidence and prevalence",
      "PBCR collects data from all cancer cases in a defined geographic population; HBCR collects data only from patients treated at a specific hospital",
      "PBCR is funded by state governments while HBCR is funded by ICMR directly",
      "PBCR uses active case ascertainment while HBCR uses passive surveillance exclusively"
    ],
    answer: 1,
    explanation: "A Population-Based Cancer Registry (PBCR) records all new cancer cases occurring in a defined geographic population, enabling calculation of incidence rates representative of that community. A Hospital-Based Cancer Registry (HBCR) records only patients treated at or referred to a specific hospital, providing clinical and treatment data but not population-based incidence. NCDIR coordinates both under the National Cancer Registry Programme (NCRP)."
  },
  {
    id: 6,
    question: "ICMR's Regional Medical Research Centres (RMRCs) are distributed across India's regions. Which RMRC is specifically mandated to focus on tribal health and is located in the northeastern region?",
    options: [
      "RMRC Bhubaneswar",
      "RMRC Dibrugarh",
      "RMRC Port Blair",
      "RMRC Gorakhpur"
    ],
    answer: 1,
    explanation: "RMRC Dibrugarh (Assam) is strategically located to address health challenges in the northeastern states, with a specific focus on tribal health, endemic diseases of the region (including Japanese encephalitis, scrub typhus, and malaria), and kala-azar in the Brahmaputra Valley. RMRC Bhubaneswar focuses on Odisha's tribal belt, while RMRC Port Blair covers Andaman & Nicobar Islands."
  },
  {
    id: 7,
    question: "The ICMR-National Institute for Research in Tuberculosis (NIRT), Chennai, was formerly known by a different name. What was its original designation before being renamed?",
    options: [
      "Tuberculosis Research Centre (TRC)",
      "National Tuberculosis Institute (NTI)",
      "Central Jalma Institute for Leprosy and Other Mycobacterial Diseases",
      "All India Institute of Hygiene and Public Health (AIIHPH)"
    ],
    answer: 0,
    explanation: "ICMR-NIRT, Chennai was formerly known as the Tuberculosis Research Centre (TRC), established in 1956. It was renamed NIRT in 2012. TRC made landmark contributions including demonstrating the efficacy of short-course chemotherapy for TB, which revolutionized global TB treatment protocols and informed WHO guidelines. The institute also contributed to the DOTS strategy adopted under RNTCP."
  },
  {
    id: 8,
    question: "The National Institute for Research in Reproductive Health (NIRRH), Mumbai, is a premier ICMR institute. Which major contraceptive method was developed and clinically evaluated primarily through NIRRH's research program?",
    options: [
      "Levonorgestrel-releasing IUD (Mirena)",
      "DMPA (Depo-Provera) injectable",
      "Centchroman (Saheli) — the non-steroidal weekly oral contraceptive",
      "Combined oral contraceptive pill (COCP)"
    ],
    answer: 2,
    explanation: "Centchroman (trade name Saheli), a non-steroidal selective estrogen receptor modulator (SERM) taken weekly, was developed by CDRI Lucknow but was clinically evaluated extensively through NIRRH and the ICMR network. It is unique as the world's first non-steroidal weekly oral contraceptive pill approved for use. NIRRH also conducts research on infertility, reproductive endocrinology, and male contraception."
  },
  {
    id: 9,
    question: "ICMR-National Institute of Traditional Medicine (NITM), Belagavi, focuses on Ayurveda and traditional medicine research. In which year was this institute established, and under which ministry does it primarily collaborate for research validation?",
    options: [
      "Established in 1980; collaborates with Ministry of Health & Family Welfare",
      "Established in 1973; collaborates with Ministry of AYUSH",
      "Established in 1966; collaborates with Ministry of Science & Technology",
      "Established in 1990; collaborates with Ministry of AYUSH"
    ],
    answer: 1,
    explanation: "ICMR-NITM, Belagavi was established in 1973 with the mandate to conduct scientific research on traditional medicine systems. It primarily collaborates with the Ministry of AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy) to validate traditional formulations using modern scientific methods, including clinical trials and pharmacological studies on Ayurvedic drugs."
  },
  {
    id: 10,
    question: "NIV Pune's BSL-4 facility was formally inaugurated in which year, making India one of only a few countries in Asia with such a high-containment facility?",
    options: [
      "2009",
      "2012",
      "2015",
      "2018"
    ],
    answer: 1,
    explanation: "NIV Pune's BSL-4 facility was inaugurated in 2012, making India one of the few countries in Asia with a fully functional BSL-4 laboratory. The facility can handle the world's most dangerous pathogens including filoviruses (Ebola, Marburg), arenaviruses, and other risk group 4 agents. This facility played a critical role during the COVID-19 pandemic for SARS-CoV-2 characterization."
  },

  // Q11-Q20: ICMR COVID-19 response
  {
    id: 11,
    question: "ICMR conducted four national seroprevalence surveys (serosurveils) during the COVID-19 pandemic. Which of the following correctly describes the finding of the FOURTH national serosurvey (June–July 2021)?",
    options: [
      "Approximately 21% of adults had antibodies against SARS-CoV-2",
      "Approximately 67.6% of the population aged 6 years and above had antibodies",
      "Approximately 44.4% of population had seroprevalence",
      "Approximately 28.5% of urban populations were seropositive"
    ],
    answer: 1,
    explanation: "The 4th national COVID-19 serosurvey conducted by ICMR (June–July 2021) reported a seroprevalence of approximately 67.6% in the population aged 6 years and above. The surveys progressively showed: 1st survey (May–June 2020): ~0.73%; 2nd survey (Aug–Sep 2020): ~7.1%; 3rd survey (Dec 2020–Jan 2021): ~21.5%; 4th survey: ~67.6%, indicating massive infection exposure before vaccines were widely administered."
  },
  {
    id: 12,
    question: "ICMR and Bharat Biotech developed Covaxin (BBV152) collaboratively. What was the key biological material contribution that ICMR made to the Covaxin development process?",
    options: [
      "ICMR developed the adjuvant Algel-IMDG used in Covaxin",
      "ICMR's NIV Pune isolated the SARS-CoV-2 strain (NIV-2020-770) and provided it to Bharat Biotech for vaccine development",
      "ICMR conducted Phase 1 trials exclusively using its own hospital network",
      "ICMR synthesized the inactivated viral antigen used in the final vaccine formulation"
    ],
    answer: 1,
    explanation: "NIV Pune, under ICMR, was the first institution in India to successfully isolate SARS-CoV-2. The isolated strain, designated NIV-2020-770, was transferred to Bharat Biotech International Ltd. under a Material Transfer Agreement (MTA). Bharat Biotech then inactivated this strain using beta-propiolactone and formulated it with Algel-IMDG adjuvant (which they developed) to create Covaxin (BBV152)."
  },
  {
    id: 13,
    question: "ICMR launched the iCall/iCMR portal during COVID-19. However, ICMR also developed a specific data management portal for COVID-19 testing. What was this testing data portal called and what was its primary function?",
    options: [
      "CoWIN — vaccination tracking and certificate management",
      "ICMR COVID-19 Testing Portal — real-time tracking of RT-PCR test results from approved laboratories",
      "Aarogya Setu — contact tracing via Bluetooth and GPS",
      "COVA app — COVID-19 symptom surveillance"
    ],
    answer: 1,
    explanation: "ICMR developed a dedicated COVID-19 Testing Portal (icmr.gov.in/covid19) that served as the central repository for all COVID-19 RT-PCR test results reported from ICMR-approved laboratories across India. This portal enabled real-time tracking of cumulative tests, daily testing numbers, lab-wise performance, and state-wise data, providing a national dashboard for testing surveillance distinct from CoWIN (vaccination) and Aarogya Setu (contact tracing)."
  },
  {
    id: 14,
    question: "ICMR recommended pooled testing for COVID-19 in India during the pandemic. What is the maximum pool size ICMR recommended for RT-PCR pooled testing, and below what prevalence rate is pooled testing considered most efficient?",
    options: [
      "Pool size of 10; prevalence below 5%",
      "Pool size of 5; prevalence below 2%",
      "Pool size of 25; prevalence below 10%",
      "Pool size of 32; prevalence below 1%"
    ],
    answer: 0,
    explanation: "ICMR recommended a pool size of up to 10 samples for RT-PCR-based pooled testing for SARS-CoV-2, with this approach being most efficient when community prevalence is below 5%. When a pool tests positive, all individual samples in that pool are re-tested separately. This strategy allowed India to scale up testing capacity significantly during periods of high demand with limited reagent supply."
  },
  {
    id: 15,
    question: "The India SARS-CoV-2 Genomics Consortium (INSACOG) was established in December 2020. How many national laboratories were originally constituted as INSACOG member laboratories at its founding?",
    options: [
      "5 laboratories",
      "10 laboratories",
      "15 laboratories",
      "28 laboratories"
    ],
    answer: 1,
    explanation: "INSACOG was established on December 25, 2020 with 10 national laboratories as founding members to conduct whole genome sequencing (WGS) of SARS-CoV-2 to track variants of concern (VOCs) and variants of interest (VOIs) in India. The consortium was subsequently expanded. ICMR coordinates INSACOG along with the Ministry of Health & Family Welfare, Department of Biotechnology, and CSIR."
  },
  {
    id: 16,
    question: "ICMR developed indigenous RT-PCR testing kits for COVID-19 in collaboration with private partners. Which kit, developed with ICMR's technical validation, became the first indigenous SARS-CoV-2 RT-PCR kit approved for use in India?",
    options: [
      "Truenat SARS-CoV-2 by Molbio Diagnostics",
      "Patho Detect by Mylab Discovery Solutions",
      "KAVACH by CSIR-IGIB",
      "COVIRAP by IIT Kharagpur"
    ],
    answer: 1,
    explanation: "Patho Detect COVID-19 Qualitative PCR Kit by Mylab Discovery Solutions, Pune, was the first Made-in-India RT-PCR kit to receive ICMR validation and CDSCO approval in March 2020. ICMR's validation process enabled rapid scaling of indigenous testing kit manufacturing, reducing India's dependence on imported kits. Truenat, KAVACH, and COVIRAP were approved later as additional indigenous testing modalities."
  },
  {
    id: 17,
    question: "ICMR's COVID-19 clinical management guidelines went through multiple revisions. Which treatment was included in early ICMR guidelines but was later withdrawn due to evidence of harm from the WHO Solidarity Trial?",
    options: [
      "Remdesivir",
      "Dexamethasone",
      "Hydroxychloroquine (HCQ)",
      "Favipiravir"
    ],
    answer: 2,
    explanation: "Hydroxychloroquine (HCQ) was initially recommended by ICMR's clinical management guidelines for both prophylaxis of healthcare workers and treatment of mild-to-moderate COVID-19. However, the WHO Solidarity Trial published in October 2020 demonstrated no significant reduction in mortality with HCQ, leading to its withdrawal from treatment guidelines. ICMR subsequently updated its guidelines to remove HCQ from therapeutic recommendations."
  },
  {
    id: 18,
    question: "During the first COVID-19 lockdown in India (March 2020), ICMR issued specific testing criteria. Which was NOT a criterion for COVID-19 testing in ICMR's initial testing strategy (March 2020)?",
    options: [
      "Symptomatic international travelers",
      "Asymptomatic contacts of laboratory-confirmed COVID-19 patients during home quarantine period",
      "Symptomatic healthcare workers",
      "All persons testing positive for Influenza A (H1N1) in Sentinel Surveillance Hospitals"
    ],
    answer: 1,
    explanation: "In ICMR's initial testing strategy (March 2020), asymptomatic contacts of confirmed cases were NOT included for testing. Testing was restricted to: symptomatic international travelers (with travel history to affected countries), symptomatic contacts of confirmed cases, symptomatic healthcare workers, and hospitalized patients with severe acute respiratory illness. Asymptomatic testing was introduced in later revised strategies as test capacity expanded."
  },
  {
    id: 19,
    question: "ICMR's first national serosurvey (May–June 2020) found overall SARS-CoV-2 seroprevalence of approximately 0.73%. This survey used which type of serological test and targeted which age group?",
    options: [
      "Neutralization assay; all age groups above 18 years",
      "IgG ELISA targeting spike protein; adults above 18 years in selected districts",
      "Chemiluminescence immunoassay (CLIA) for IgM and IgG; population above 10 years",
      "Lateral flow immunoassay for IgG/IgM; population above 5 years"
    ],
    answer: 1,
    explanation: "ICMR's first national COVID-19 serosurvey used an IgG ELISA test targeting the SARS-CoV-2 spike protein antigen. The survey covered adults above 18 years across 83 districts in 21 states, selected to represent different geographic zones and population densities. The 0.73% seroprevalence indicated that the vast majority of India's population was still susceptible as of June 2020, guiding early containment strategies."
  },
  {
    id: 20,
    question: "ICMR collaborated with which institution to validate the TrueNat chip-based molecular testing platform for COVID-19, which enabled decentralized testing at district level?",
    options: [
      "AIIMS New Delhi",
      "CMC Vellore",
      "NIMHANS Bengaluru",
      "PGIMER Chandigarh"
    ],
    answer: 1,
    explanation: "ICMR collaborated with CMC (Christian Medical College) Vellore for the clinical validation of TrueNat SARS-CoV-2 testing on the Molbio chip-based platform. CMC Vellore, a designated ICMR network laboratory, conducted the analytical and clinical validation studies. TrueNat's portability (it was already deployed for TB diagnostics) enabled rapid expansion of COVID-19 testing to district hospitals and primary health infrastructure."
  },

  // Q21-Q30: ICMR research networks & registries
  {
    id: 21,
    question: "The National Cancer Registry Programme (NCRP) was launched by ICMR in which year, and how many Population-Based Cancer Registries (PBCRs) are currently operational under NCRP (as of recent data)?",
    options: [
      "1975; 28 PBCRs",
      "1982; over 30 PBCRs",
      "1990; 15 PBCRs",
      "1975; 12 PBCRs"
    ],
    answer: 1,
    explanation: "ICMR's National Cancer Registry Programme (NCRP) was established in 1982 with three pioneering PBCRs at Mumbai, Chennai, and Bengaluru. As of recent years, over 30 PBCRs are operational across India, with ICMR-NCDIR (formerly NCRP secretariat, Bengaluru) coordinating the network. Data from these registries are published periodically in the 'Cancer Incidence in Five Continents' series by IARC/WHO."
  },
  {
    id: 22,
    question: "India's Antimicrobial Resistance Research and Surveillance Network (AMRSN), coordinated by ICMR, monitors AMR patterns. Which pathogen has consistently shown the highest rates of carbapenem resistance in India as per ICMR-AMRSN annual reports?",
    options: [
      "Staphylococcus aureus",
      "Klebsiella pneumoniae",
      "Streptococcus pneumoniae",
      "Mycobacterium tuberculosis"
    ],
    answer: 1,
    explanation: "Klebsiella pneumoniae has consistently shown the highest carbapenem resistance rates in India as per ICMR-AMRSN reports, often exceeding 50% resistance to carbapenems in certain hospital settings. The NDM-1 (New Delhi Metallo-beta-lactamase) producing K. pneumoniae is a major concern. ICMR-AMRSN publishes annual reports on AMR trends, guiding national antibiotic stewardship programs and the National Action Plan on AMR."
  },
  {
    id: 23,
    question: "The ICMR Viral Research and Diagnostic Laboratory (VRDL) network was established to strengthen viral disease surveillance. What is the TOTAL number of VRDL laboratories across India in the network established under Phase-I and Phase-II?",
    options: [
      "75 VRDLs",
      "120 VRDLs",
      "147 VRDLs",
      "200 VRDLs"
    ],
    answer: 2,
    explanation: "The ICMR-VRDL network established 147 laboratories across India spread across Phase-I (initiated in 2014–15) and Phase-II expansions. These laboratories are situated in state medical colleges and research institutions and serve as sentinel sites for viral disease surveillance, outbreak investigation, and novel pathogen detection. The VRDL network formed the backbone of India's early COVID-19 testing expansion."
  },
  {
    id: 24,
    question: "The ICMR-coordinated National Rotavirus Surveillance Network (NRSN) monitors rotavirus gastroenteritis in children. The data generated by NRSN was critical for policy decisions regarding which vaccine that was introduced in India's Universal Immunization Programme?",
    options: [
      "ROTARIX (GlaxoSmithKline monovalent vaccine)",
      "RotaTeq (Merck pentavalent vaccine)",
      "ROTAVAC (Bharat Biotech 116E strain indigenous vaccine)",
      "Rotasiil (Serum Institute pentavalent vaccine)"
    ],
    answer: 2,
    explanation: "NRSN data on rotavirus disease burden, genotype distribution, and morbidity/mortality was instrumental in the policy decision to introduce ROTAVAC into India's Universal Immunization Programme in 2016. ROTAVAC (developed by Bharat Biotech using the indigenous 116E strain originally isolated by AIIMS Delhi) was validated through Phase 3 trials partly supported by ICMR network infrastructure. NRSN continues to monitor post-vaccine genotype changes."
  },
  {
    id: 25,
    question: "ICMR's Hospital-Based Cancer Registry (HBCR) collects data using a standardized format. Which of the following data elements is collected in HBCR but NOT typically in a Population-Based Cancer Registry (PBCR)?",
    options: [
      "Site of primary tumor (topography)",
      "Morphology and histological type",
      "Treatment modalities administered (surgery, chemotherapy, radiation)",
      "Age at diagnosis"
    ],
    answer: 2,
    explanation: "Hospital-Based Cancer Registries (HBCRs) collect detailed clinical data including treatment modalities (type of surgery, chemotherapy regimens, radiation protocols), treatment outcomes, and follow-up survival data. Population-Based Cancer Registries (PBCRs) focus on incidence (new cases), basic patient demographics, tumor site, morphology, and stage at diagnosis, but do not systematically collect treatment and outcome data as patients may be treated at multiple facilities."
  },
  {
    id: 26,
    question: "The ICMR tuberculosis consortium has conducted landmark trials. The concept of directly observed treatment short-course (DOTS) was scientifically validated in India through trials at which ICMR institute, and in which decade?",
    options: [
      "NIRT Chennai (formerly TRC) in the 1980s",
      "NITM Belagavi in the 1990s",
      "NIRT Chennai (formerly TRC) in the 1960s–1970s",
      "AIIMS New Delhi in the 1970s"
    ],
    answer: 2,
    explanation: "The Tuberculosis Research Centre (TRC, now ICMR-NIRT), Chennai conducted landmark clinical trials in the 1960s–1970s demonstrating the efficacy of short-course chemotherapy (SCC) for tuberculosis. The Madras studies (TRC) showed that domiciliary treatment with SCC was as effective as sanatorium treatment, and that 6-month regimens were as effective as 12-month regimens, forming the scientific basis for DOTS which was later formalized globally in the 1990s."
  },
  {
    id: 27,
    question: "ICMR's NARI (National AIDS Research Institute) coordinates the Integrated Biological and Behavioural Surveillance (IBBS). IBBS monitors HIV among high-risk populations. Which of the following populations showed the highest HIV prevalence in India as per recent IBBS rounds?",
    options: [
      "Long-distance truck drivers",
      "Female Sex Workers (FSW) in specific high-prevalence southern states",
      "Men who have Sex with Men (MSM)",
      "People Who Inject Drugs (PWID) in northeastern states"
    ],
    answer: 3,
    explanation: "People Who Inject Drugs (PWID) in northeastern states, particularly Manipur, have shown the highest HIV prevalence in India in IBBS rounds — historically exceeding 15–20% in some surveys. While FSW and MSM populations also show elevated prevalence, the PWID population in the northeast consistently shows the highest rates, driven by needle-sharing practices. This finding has shaped harm reduction programs targeting PWID through needle-syringe exchange programmes (NSEP) under NACP."
  },
  {
    id: 28,
    question: "ICMR's Kala-azar surveillance and research network has been central to India's kala-azar elimination program. Which state became the first to achieve the kala-azar elimination target (less than 1 case per 10,000 population at block level) as per ICMR-supported surveillance data?",
    options: [
      "Bihar",
      "West Bengal",
      "Jharkhand",
      "Uttar Pradesh"
    ],
    answer: 1,
    explanation: "West Bengal was among the first states to achieve the kala-azar elimination target of <1 case per 10,000 population at block level, aided by ICMR-supported vector control research, drug efficacy studies, and surveillance network data. Bihar, which bears the highest burden of kala-azar in India (over 90% of cases), has been the most challenging state. ICMR's RMRC Patna and NIMR have been key contributors to kala-azar elimination research."
  },
  {
    id: 29,
    question: "The National Filaria Control Programme received significant technical inputs from ICMR research. ICMR developed a test for detecting circulating filarial antigens for use in transmission assessment surveys. What is the name of this point-of-care antigen detection test?",
    options: [
      "ICT Filariasis card test",
      "Brugia Rapid test",
      "FTS (Filariasis Test Strip) using Og4C3 monoclonal antibody",
      "ELISA for anti-Bm14 antibodies"
    ],
    answer: 2,
    explanation: "The Filariasis Test Strip (FTS), based on the Og4C3 monoclonal antibody detecting Wuchereria bancrofti circulating antigen, is used in India's Transmission Assessment Surveys (TAS) under the National Programme to Eliminate Lymphatic Filariasis. While FTS was developed by TDR/WHO, ICMR's NVBDCP-linked research contributed to its validation in Indian field settings. The ICT card test (now replaced by FTS) and Brugia Rapid (for Brugia spp.) are related tools."
  },
  {
    id: 30,
    question: "ICMR established the National Registry of Rare Diseases to address rare and orphan diseases. Under which act were the ethical and regulatory frameworks for rare disease research in India primarily governed before the 2021 Rare Diseases Policy?",
    options: [
      "The Drugs and Cosmetics Act, 1940",
      "The Persons with Disabilities Act, 1995",
      "ICMR National Guidelines for Stem Cell Research and Therapy",
      "The Clinical Establishments (Registration and Regulation) Act, 2010"
    ],
    answer: 0,
    explanation: "Before the National Policy for Rare Diseases 2021, the primary regulatory framework governing rare disease drug research and clinical trials in India was the Drugs and Cosmetics Act, 1940 and its amendments. ICMR's National Ethical Guidelines for Biomedical and Health Research (2017) also provided guidance on rare disease research ethics. The 2021 policy created a dedicated framework for rare disease treatment, categorization (Group 1, 2, 3), and financial support."
  },

  // Q31-Q40: ICMR collaborations & international partnerships
  {
    id: 31,
    question: "India has several WHO Collaborating Centres (WHO-CCs) that work closely with ICMR. Which ICMR institute is designated as a WHO Collaborating Centre for Research and Training in Enteric Infections?",
    options: [
      "NIMR New Delhi",
      "NICED (National Institute of Cholera and Enteric Diseases), Kolkata",
      "NIRT Chennai",
      "NIN Hyderabad"
    ],
    answer: 1,
    explanation: "ICMR-NICED (National Institute of Cholera and Enteric Diseases), Kolkata is designated as a WHO Collaborating Centre for Research and Training in Enteric Infections including cholera, diarrheal diseases, and enteric fever. NICED conducts molecular surveillance of Vibrio cholerae, Salmonella typhi, and other enteric pathogens, and contributes to WHO's global enteric disease surveillance through the Global Foodborne Infections Network (GFN)."
  },
  {
    id: 32,
    question: "The Indo-US Joint Working Group on Biomedical Research operates under a broader bilateral health research agreement. Which US agency is the primary counterpart to ICMR in the Indo-US bilateral health research collaboration?",
    options: [
      "Centers for Disease Control and Prevention (CDC)",
      "National Institutes of Health (NIH), Department of Health and Human Services",
      "US Agency for International Development (USAID)",
      "Food and Drug Administration (FDA)"
    ],
    answer: 1,
    explanation: "The National Institutes of Health (NIH), under the US Department of Health and Human Services (HHS), is the primary counterpart to ICMR in the Indo-US bilateral biomedical research collaboration. The ICMR-NIH collaborative research program funds joint research projects across priority areas including infectious diseases, non-communicable diseases, and health systems research. This is separate from CDC partnerships on disease surveillance and USAID programs on specific health programs."
  },
  {
    id: 33,
    question: "ICMR participated in the Global Alliance for TB Drug Development (TB Alliance) as part of international TB research collaboration. Which novel TB drug regimen, tested in trials partly involving Indian sites, was approved by the US FDA as the first new TB drug in over 40 years?",
    options: [
      "Delamanid (OPC-67683)",
      "Pretomanid (PA-824)",
      "Bedaquiline (TMC207/Sirturo)",
      "Linezolid for MDR-TB"
    ],
    answer: 2,
    explanation: "Bedaquiline (TMC207, trade name Sirturo, developed by Janssen/Johnson & Johnson) received US FDA accelerated approval in December 2012 as the first truly new TB drug in over 40 years. Clinical trials including Phase 2b studies (TBCII and BEACON) involved Indian trial sites coordinated through ICMR's TB research network. ICMR subsequently supported the conditional introduction of bedaquiline into India's programmatic MDR-TB treatment under the National TB Elimination Programme."
  },
  {
    id: 34,
    question: "ICMR is a member of the South Asian Association for Regional Cooperation (SAARC) health network and participates in BRICS health research cooperation. At which BRICS summit was a dedicated Working Group on Research and Development/Innovation on Antimicrobial Resistance formally established, with ICMR as India's nodal agency?",
    options: [
      "Ufa Summit 2015",
      "Goa Summit 2016",
      "Johannesburg Summit 2018",
      "New Delhi Declaration 2021"
    ],
    answer: 1,
    explanation: "The BRICS Working Group on Research and Development/Innovation on Antimicrobial Resistance was formally established at the Goa BRICS Summit in 2016 during India's presidency of BRICS. ICMR was designated as India's nodal agency for this working group, which coordinates joint research, surveillance, and innovation on AMR across BRICS nations (Brazil, Russia, India, China, South Africa). This led to the BRICS AMR research collaboration framework."
  },
  {
    id: 35,
    question: "ICMR has a Memorandum of Understanding with the Medical Research Council (MRC) of the United Kingdom for Indo-UK health research collaboration. Which disease area has been the primary focus of the Indo-UK ICMR-MRC collaborative program?",
    options: [
      "Malaria drug resistance",
      "Non-communicable diseases (diabetes, cardiovascular disease, mental health)",
      "HIV/AIDS treatment research",
      "Neglected tropical diseases (NTDs)"
    ],
    answer: 1,
    explanation: "The Indo-UK ICMR-MRC collaborative program has primarily focused on non-communicable diseases (NCDs), particularly the dual burden of type 2 diabetes, cardiovascular disease (CVD), and mental health disorders in India. Notable collaborative studies include the South Asian Birth Cohort (START), the Centre for Chronic Disease Control (CCDC)-MRC collaborations on CVD risk, and research on the developmental origins of NCDs (DOHaD). This reflects India's epidemiological transition and the UK's NCD research strengths."
  },
  {
    id: 36,
    question: "ICMR participates in the WHO South-East Asia Regional Office (SEARO) Technical Advisory Group. In which specific WHO-SEARO initiative is ICMR recognized as a Regional Reference Laboratory (RRL)?",
    options: [
      "Regional Laboratory Network for Poliomyelitis (Global Polio Laboratory Network — SEARO node)",
      "WHO Pandemic Influenza Preparedness (PIP) Framework",
      "WHO Integrated Disease Surveillance and Response (IDSR) framework",
      "WHO Global Antimicrobial Resistance Surveillance System (GLASS)"
    ],
    answer: 0,
    explanation: "NIV Pune, functioning as an ICMR institute, is designated as a WHO Regional Reference Laboratory (RRL) for the Global Polio Laboratory Network (GPLN) — SEARO node. This designation means NIV Pune performs confirmatory poliovirus testing, environmental surveillance samples, and vaccine-derived poliovirus (VDPV) characterization for countries in the South-East Asia region, contributing to the WHO global polio eradication initiative."
  },
  {
    id: 37,
    question: "The DBT-ICMR task force was established for a specific health research agenda. The DBT-ICMR Joint programme on 'Stem Cell Research and Therapy' issued guidelines in 2017. What type of stem cell research is PROHIBITED under ICMR's National Guidelines for Stem Cell Research?",
    options: [
      "Autologous adult stem cell transplantation",
      "Creating human embryos solely for research purposes (reproductive cloning)",
      "Induced Pluripotent Stem cell (iPSC) research",
      "Cord blood banking for allogeneic transplantation"
    ],
    answer: 1,
    explanation: "ICMR's National Guidelines for Stem Cell Research (2017, updated guidelines) explicitly prohibit creating human embryos solely for research purposes and reproductive cloning (cloning to produce a human individual). Therapeutic cloning through somatic cell nuclear transfer (SCNT) to generate patient-specific stem cells is permitted under strict oversight. iPSC research, autologous stem cell therapy, and cord blood banking are all permitted under specified regulatory conditions."
  },
  {
    id: 38,
    question: "ICMR's collaboration with the International Agency for Research on Cancer (IARC), Lyon, has primarily focused on which research activity?",
    options: [
      "Establishing PBCR methodology and cancer data quality assessment",
      "Drug trials for new anticancer agents in Phase 2",
      "Radiation oncology protocols for head and neck cancers",
      "Genetic profiling of Indian cancer patients"
    ],
    answer: 0,
    explanation: "ICMR-NCDIR's collaboration with IARC (International Agency for Research on Cancer), the WHO's cancer research agency in Lyon, has primarily focused on establishing Population-Based Cancer Registry (PBCR) methodology, data quality assessment tools, and inclusion of Indian cancer incidence data in the authoritative 'Cancer Incidence in Five Continents' (CI5) series. IARC also provides GLOBOCAN data (global cancer statistics) partly sourced from ICMR-NCRP registries."
  },
  {
    id: 39,
    question: "ICMR participates in the Global Burden of Disease (GBD) Study coordinated by the Institute for Health Metrics and Evaluation (IHME), Seattle. A landmark ICMR-IHME collaboration produced a state-level GBD analysis for India. In which year was the first state-level 'India: Health of the Nation's States' report published?",
    options: [
      "2012",
      "2015",
      "2017",
      "2020"
    ],
    answer: 2,
    explanation: "The landmark 'India: Health of the Nation's States' report, a collaboration between ICMR, PHFI (Public Health Foundation of India), and IHME (Seattle), was published in 2017. This report provided the first comprehensive state-level analysis of disease burden, risk factors, and health system performance across all Indian states and UTs using the GBD 2016 study framework, enabling state-specific health policy planning and resource allocation."
  },
  {
    id: 40,
    question: "Under the South-South cooperation framework, ICMR has been involved in capacity building for African nations in health research. With which African institution did ICMR sign a prominent MOU for collaborative research on tropical diseases, genomics, and public health?",
    options: [
      "African Institute of Health Sciences, Accra",
      "South African Medical Research Council (SAMRC)",
      "East African Community Health Research Network",
      "WHO Regional Office for Africa (AFRO)"
    ],
    answer: 1,
    explanation: "ICMR has a prominent MOU with the South African Medical Research Council (SAMRC) covering collaborative research on tropical and infectious diseases, non-communicable diseases, genomics, and public health research capacity building. SAMRC is South Africa's apex health research body, analogous to ICMR, making this a South-South research council bilateral partnership. This collaboration also contributes to BRICS health research cooperation given South Africa's BRICS membership."
  },

  // Q41-Q50: ICMR milestones, notable directors & legacy
  {
    id: 41,
    question: "Col. Sir Ram Nath Chopra was a pioneering pharmacologist who served as a foundational figure in ICMR's early history. He is best known for his work on which subject that influenced early drug policy in India?",
    options: [
      "Antimalarial drug development and quinine derivatives",
      "Indigenous drugs including opium, cannabis, and the Indian Pharmacopoeia",
      "Leprosy chemotherapy and dapsone trials",
      "Cholera bacteriology and vaccine development"
    ],
    answer: 1,
    explanation: "Col. Sir Ram Nath Chopra (1882–1973) was a legendary pharmacologist who made foundational contributions to the study of indigenous Indian drugs, including opium alkaloids, cannabis, and traditional medicinal plants. His seminal work 'Indigenous Drugs of India' (1933) became a reference work for pharmacognosy. He served as the Director of the Indian Research Fund Association (IRFA), the predecessor of ICMR, from 1935–1945, and helped establish India's early drug regulatory framework including contributions to the Indian Pharmacopoeia."
  },
  {
    id: 42,
    question: "Major General S.L. Bhatia served as Director General of ICMR during a period of significant organizational growth. He is credited with which major structural contribution to ICMR's development?",
    options: [
      "Establishing the National Institute of Virology during the smallpox eradication era",
      "Transforming IRFA into the Indian Council of Medical Research (ICMR) in 1949",
      "Introducing the ICMR extramural research grant program for universities",
      "Establishing the first Population-Based Cancer Registry in India"
    ],
    answer: 1,
    explanation: "Major General S.L. Bhatia was the Director General responsible for the historic transformation of the Indian Research Fund Association (IRFA), established in 1911, into the Indian Council of Medical Research (ICMR) in 1949 following India's independence. This reorganization expanded ICMR's mandate from primarily communicable disease research to a comprehensive medical research council. This restructuring laid the organizational and administrative foundation for modern ICMR."
  },
  {
    id: 43,
    question: "Dr. V.M. Katoch served as Director General of ICMR and is distinguished for his research contributions before assuming administrative leadership. In which field of research is Dr. Katoch primarily known for his scientific contributions?",
    options: [
      "HIV molecular epidemiology and antiretroviral drug resistance",
      "Mycobacterial research including leprosy and tuberculosis",
      "Cancer genomics and pharmacogenomics",
      "Vector biology and malaria parasite genetics"
    ],
    answer: 1,
    explanation: "Dr. Vishwa Mohan Katoch, who served as ICMR Director General from 2008 to 2014, is primarily distinguished as a mycobacteriologist. His scientific career at JALMA (Central JALMA Institute for Leprosy and Other Mycobacterial Diseases), Agra focused on Mycobacterium leprae, M. tuberculosis, and environmental mycobacteria. He contributed to understanding drug resistance mechanisms in mycobacteria and was instrumental in leprosy research and vaccine development attempts."
  },
  {
    id: 44,
    question: "India was certified polio-free by WHO in March 2014. ICMR's contribution to polio eradication included surveillance activities. What specific surveillance system, with ICMR's NIV Pune as a key laboratory, provided critical data for declaring polio eradication?",
    options: [
      "Acute Flaccid Paralysis (AFP) surveillance with laboratory confirmation",
      "Environmental (sewage) surveillance for poliovirus detection",
      "Seroprevalence surveys for poliovirus antibodies in children",
      "All of the above were used, with AFP surveillance being the cornerstone"
    ],
    answer: 3,
    explanation: "India's polio eradication certification relied on multiple interlocking surveillance systems, all with ICMR involvement: (1) AFP (Acute Flaccid Paralysis) surveillance was the cornerstone, detecting paralytic polio cases with NIV Pune as the RRL for laboratory confirmation; (2) Environmental surveillance (ES) monitoring sewage for poliovirus was established in high-risk areas; and (3) Seroprevalence studies helped assess population immunity. AFP surveillance with NIV Pune's RRL role was the primary certification criterion."
  },
  {
    id: 45,
    question: "India achieved WHO-declared leprosy elimination (defined as less than 1 case per 10,000 population at national level) in which year, and what was the primary ICMR research contribution that accelerated this achievement?",
    options: [
      "2005; ICMR's multi-drug therapy (MDT) field trials proving superiority over dapsone monotherapy",
      "2000; ICMR's development of the leprosy vaccine ICMR-Mycobacterium vaccine",
      "2010; ICMR's chemoprophylaxis trials with single-dose rifampicin for contacts",
      "1995; ICMR's BCG vaccination mass trial demonstrating cross-protection against leprosy"
    ],
    answer: 0,
    explanation: "India achieved leprosy elimination (< 1 case/10,000 population nationally) in December 2005. ICMR's primary contribution was through field trials of WHO's Multi-Drug Therapy (MDT) regimen conducted at JALMA (Agra) and through the ICMR network in the 1980s–1990s, proving MDT's superiority over dapsone monotherapy, its cure rates, and its feasibility as a public health intervention. ICMR-JALMA also worked on leprosy immunology and attempted vaccine development using Mycobacterium w (Mw) and BCG combinations."
  },
  {
    id: 46,
    question: "ICMR's contributions to the understanding of coronary artery disease (CAD) in Indians include landmark epidemiological studies. The concept that Indians develop premature CAD compared to Western populations was established through which ICMR-supported registry?",
    options: [
      "INTERHEART South Asia Sub-study",
      "CREATE (Clinical Registry Evaluating Acute Coronary Syndrome Treatment) registry",
      "ICMR-INSEARCH (Indian Study on Asthma, Respiratory symptoms and CHronic bronchitis)",
      "JNCASR Diabetes Cohort"
    ],
    answer: 1,
    explanation: "The CREATE (Clinical Registry Evaluating Acute Coronary Treatment and Epidemiology) registry, an ICMR-supported multi-center registry of acute coronary syndrome (ACS) patients across India, provided landmark data demonstrating that Indians develop ACS at a significantly younger age (typically a decade earlier) compared to Western populations, with more severe presentation and higher in-hospital mortality. These findings shaped aggressive secondary prevention guidelines for Indian patients with CAD."
  },
  {
    id: 47,
    question: "ICMR has been involved in the development and evaluation of indigenous vaccines. The ICMR-developed 'Rotavac' was NOT directly developed by ICMR, but ICMR supported a collaborative vaccine development. Which vaccine was DIRECTLY developed with ICMR's own research as the primary scientific driver, reaching clinical trials?",
    options: [
      "Whole cell cholera vaccine for oral immunization",
      "Japanese Encephalitis SA-14-14-2 live attenuated vaccine",
      "Hepatitis E recombinant vaccine",
      "Anti-leprosy vaccine using Mycobacterium indicus pranii (MIP/Mw)"
    ],
    answer: 3,
    explanation: "The Mycobacterium indicus pranii (MIP) vaccine, also known as Mycobacterium w (Mw) vaccine, was directly developed through ICMR research, primarily at ICMR-JALMA, Agra. This candidate leprosy vaccine underwent Phase 3 clinical trials supported by ICMR, demonstrating immunomodulatory effects and some efficacy in leprosy contact prophylaxis. It was also studied as an immunotherapy for tuberculosis, making it ICMR's most directly attributable vaccine development effort."
  },
  {
    id: 48,
    question: "Dr. Rajeshwari Devi Chanana is a notable figure associated with ICMR. In which capacity is she most prominently known within the context of ICMR?",
    options: [
      "First woman Director General of ICMR",
      "Pioneer of the Indian Council of Medical Research's bioethics program and drafting of ICMR ethical guidelines",
      "Founding Director of NARI (National AIDS Research Institute), Pune",
      "First Indian scientist elected to the WHO Executive Board from the South-East Asia region"
    ],
    answer: 1,
    explanation: "Dr. Rajeshwari Devi Chanana is prominently associated with ICMR as a pioneer of biomedical research ethics in India. She was instrumental in developing the early iterations of ICMR's ethical guidelines for biomedical research on human subjects, contributing to the foundation of India's health research ethics framework. The ICMR bioethics program, which produced its first comprehensive guidelines in 2000 and subsequent revisions, drew heavily on her work in establishing ethical principles for Indian health research."
  },
  {
    id: 49,
    question: "ICMR's involvement in kala-azar elimination includes critical drug research. The shift from antimonials (sodium stibogluconate) to miltefosine for visceral leishmaniasis treatment in India was supported by which landmark clinical trial conducted under ICMR?",
    options: [
      "LEAP (Leishmaniasis East Africa Platform) trial",
      "B2309 trial — Phase 3 trial of miltefosine by ICMR network in Bihar, India",
      "CALSHA trial (Combination Against Leishmaniasis Study)",
      "AmBisome compassionate use program coordinated by ICMR"
    ],
    answer: 1,
    explanation: "The landmark Phase 3 clinical trial of miltefosine (B2309 trial) was conducted by the ICMR research network in Bihar, India, demonstrating oral miltefosine's efficacy and safety for visceral leishmaniasis (kala-azar). This trial, published in the New England Journal of Medicine (2002), led to miltefosine becoming the first oral drug approved for kala-azar and its introduction into India's National Kala-azar Elimination Programme, replacing parenteral antimonials as first-line therapy."
  },
  {
    id: 50,
    question: "ICMR celebrated its centenary in which year, and which current ICMR initiative represents its flagship effort to build a national biobank for population-level genomic and health data?",
    options: [
      "2011; Indian Genome Variation (IGV) Consortium project",
      "2011; IndiGen programme and the Indian Biological Data Centre (IBDC)",
      "2018; GenomeIndia project coordinated by DBT with ICMR participation",
      "2020; ICMR Bio-repository network under the National Bioresource Development Board"
    ],
    answer: 1,
    explanation: "ICMR was established as IRFA in 1911 and celebrated its centenary in 2011. ICMR's flagship genomics initiative is the IndiGen programme (launched 2019), which sequenced the whole genomes of 1,008 individuals representing diverse Indian ethnic groups, and the associated Indian Biological Data Centre (IBDC) established at DBT-RCB Faridabad as India's national repository for biological and health data. IndiGen provides the reference Indian genome dataset for pharmacogenomics, rare disease diagnosis, and population genetics research."
  }
]

export default questions

const questions = [
  // Q1-Q10: ICMR History & Structure
  {
    id: 1,
    question: "The Indian Research Fund Association (IRFA), the predecessor of ICMR, was established in which year and under which legislative act?",
    options: [
      "A. 1905, under the Indian Medical Service Act",
      "B. 1911, under the Indian Research Fund Association Act",
      "C. 1919, under the Government of India Act",
      "D. 1930, under the Indian Council Act"
    ],
    answer: 1,
    explanation: "The Indian Research Fund Association (IRFA) was established in 1911 under the Indian Research Fund Association Act. It was renamed the Indian Council of Medical Research (ICMR) in 1949 following India's independence, to reflect its expanded mandate as a national body for biomedical and health research. The 1911 date is precise and frequently tested."
  },
  {
    id: 2,
    question: "ICMR was renamed from IRFA to its current name in 1949. The primary reason for this renaming was:",
    options: [
      "A. To align with the WHO nomenclature for national medical research councils",
      "B. To reflect the post-independence expansion of mandate beyond fund administration to active research coordination",
      "C. To comply with the requirements of the Indian Constitution under the Seventh Schedule",
      "D. To merge with the Indian Medical Council established under the same year"
    ],
    answer: 1,
    explanation: "After independence in 1947, India reorganized its research infrastructure. IRFA's name was changed to ICMR in 1949 to reflect the transition from a fund-disbursing association to an active apex body for biomedical and health research, emphasizing coordination and conduct of research rather than just fund allocation. The 'Council' designation emphasized governance and scientific direction."
  },
  {
    id: 3,
    question: "ICMR functions as an autonomous body under which ministry, and what is the primary source of its core funding?",
    options: [
      "A. Ministry of Science and Technology; Department of Biotechnology grants",
      "B. Ministry of Health and Family Welfare; Government of India through annual budget grants",
      "C. Ministry of Science and Technology; CSIR collaborative funding",
      "D. Ministry of Health and Family Welfare; WHO and international donor agencies"
    ],
    answer: 1,
    explanation: "ICMR is an autonomous body under the Department of Health Research (DHR), Ministry of Health and Family Welfare (MoHFW), Government of India. Its core funding comes from the Government of India through annual budget appropriations via DHR. While ICMR may receive some international grants, its primary and core funding is through the Union Budget under MoHFW/DHR."
  },
  {
    id: 4,
    question: "The highest policy-making body of ICMR is the Governing Body. Who chairs the ICMR Governing Body?",
    options: [
      "A. The Director General of ICMR",
      "B. The Union Minister for Health and Family Welfare",
      "C. The Secretary, Department of Health Research",
      "D. The Principal Scientific Adviser to the Government of India"
    ],
    answer: 1,
    explanation: "The ICMR Governing Body is chaired by the Union Minister for Health and Family Welfare. The Director General of ICMR serves as the Member Secretary of the Governing Body and is the chief executive of the organization. The Secretary, DHR is also a key member. This distinction between chairperson (Minister) and chief executive (DG) is commonly tested."
  },
  {
    id: 5,
    question: "The Scientific Advisory Board (SAB) of ICMR provides expert scientific guidance. The SAB is chaired by:",
    options: [
      "A. The Director General of ICMR",
      "B. A distinguished scientist appointed by the Governing Body",
      "C. The Secretary, Department of Health Research",
      "D. The President of the Indian National Science Academy"
    ],
    answer: 1,
    explanation: "The Scientific Advisory Board (SAB) of ICMR is chaired by a distinguished scientist appointed by the Governing Body, distinct from the Director General who serves as the chief executive. The SAB advises the Governing Body and ICMR management on scientific priorities, research programs, and policy. This separation of administrative and scientific advisory leadership is a key structural feature."
  },
  {
    id: 6,
    question: "ICMR headquarters is located in New Delhi. The specific building/campus name of ICMR headquarters is:",
    options: [
      "A. Rajiv Gandhi Bhawan, Safdarjung Estate",
      "B. V. Ramalingaswami Bhawan, Ansari Nagar",
      "C. Nirman Bhawan, Maulana Azad Road",
      "D. Kotla Road Campus, New Delhi"
    ],
    answer: 1,
    explanation: "ICMR headquarters is located at V. Ramalingaswami Bhawan, Ansari Nagar, New Delhi. The building is named after V. Ramalingaswami, a distinguished ICMR scientist and former Director General who made major contributions to nutritional research and leprosy. This location also houses the Department of Health Research (DHR)."
  },
  {
    id: 7,
    question: "Under the ICMR organizational structure, which body specifically reviews and approves extramural research funding proposals submitted by researchers from universities and medical colleges?",
    options: [
      "A. Scientific Advisory Board (SAB)",
      "B. Scientific Advisory Groups (SAGs) / Task Force committees",
      "C. Governing Body Finance Committee",
      "D. National Bioethics Committee"
    ],
    answer: 1,
    explanation: "ICMR's extramural research program is reviewed by Scientific Advisory Groups (SAGs) — also called Task Force committees for specific disease areas or themes. These expert panels review grant proposals, recommend funding, and monitor ongoing projects in their respective domains (e.g., SAG for Communicable Diseases, SAG for Non-Communicable Diseases). The SAB provides overarching scientific direction but proposal-level review is done by SAGs."
  },
  {
    id: 8,
    question: "ICMR's mandate includes which of the following as per its charter? Select the MOST comprehensive description:",
    options: [
      "A. Exclusively conducting intramural research at its own institutes on communicable diseases",
      "B. Formulation, coordination, and promotion of biomedical research including support for extramural research, training, and policy guidance for health research in India",
      "C. Regulating clinical trials and approving new drugs for the Indian market",
      "D. Providing technical assistance only to WHO and other international agencies for global health research"
    ],
    answer: 1,
    explanation: "ICMR's mandate is broad: it formulates, coordinates, and promotes biomedical research in India. This includes conducting intramural research at its own institutes, funding extramural research at universities/medical colleges, training biomedical researchers, developing health research policy, setting ethical guidelines, and advising the government. Drug regulation is the mandate of CDSCO under DGHS, not ICMR."
  },
  {
    id: 9,
    question: "The Department of Health Research (DHR) under which ICMR functions was created in which year by bifurcating the existing Department of Health?",
    options: [
      "A. 1999",
      "B. 2003",
      "C. 2007",
      "D. 2012"
    ],
    answer: 2,
    explanation: "The Department of Health Research (DHR) was created in 2007 by bifurcating the Department of Health and Family Welfare. DHR was established to specifically oversee health research, technology development, and international health collaborations, with ICMR as its primary body. This was a significant organizational reform that gave health research a dedicated administrative home within MoHFW."
  },
  {
    id: 10,
    question: "Which of the following CORRECTLY describes the relationship between ICMR and its national institutes regarding financial and administrative autonomy?",
    options: [
      "A. Each national institute is a fully independent statutory body with its own Act of Parliament",
      "B. National institutes are constituent units of ICMR, funded through ICMR, with Directors reporting to the ICMR Director General",
      "C. National institutes are jointly funded by ICMR and respective state governments with equal administrative control",
      "D. National institutes operate as societies registered under the Societies Registration Act independently of ICMR governance"
    ],
    answer: 1,
    explanation: "ICMR national institutes are constituent units (not independent statutory bodies) of ICMR. They are funded through ICMR's budget allocations, and their Directors report to the ICMR Director General. They operate under the overall governance of the ICMR Governing Body. While some have local advisory committees, they are not independent from ICMR administratively or financially."
  },

  // Q11-Q20: ICMR Research Institutes
  {
    id: 11,
    question: "The National Institute of Epidemiology (NIE), an ICMR institute, is located in which city and has a specific focus area that distinguishes it from other ICMR institutes?",
    options: [
      "A. Mumbai; focus on viral hemorrhagic fevers and biosafety level-4 research",
      "B. Chennai; focus on epidemiology, field studies, training in epidemiological methods, and disease surveillance",
      "C. New Delhi; focus on disease burden estimation and health economics",
      "D. Kolkata; focus on cholera, enteric diseases, and waterborne pathogens"
    ],
    answer: 1,
    explanation: "ICMR-National Institute of Epidemiology (ICMR-NIE) is located in Chennai (Tamil Nadu). Its primary focus is on epidemiology research, field investigations of disease outbreaks, training in epidemiological methods (including the Field Epidemiology Training Program), disease surveillance, and health systems research. It plays a central role in India's outbreak response and epidemiological capacity building."
  },
  {
    id: 12,
    question: "The National AIDS Research Institute (NARI), an ICMR institute, is located in Pune. Its specific mandate includes:",
    options: [
      "A. Manufacturing and distributing antiretroviral drugs for the national HIV program",
      "B. Conducting biomedical research on HIV/AIDS including epidemiology, immunology, vaccine development, and prevention strategies",
      "C. Regulatory oversight of HIV testing kits and diagnostics in India",
      "D. Administering the National AIDS Control Program (NACP) on behalf of NACO"
    ],
    answer: 1,
    explanation: "ICMR-NARI (National AIDS Research Institute) in Pune conducts biomedical research on HIV/AIDS encompassing epidemiology, immunology, virology, vaccine development, and HIV prevention strategies including pre-exposure prophylaxis (PrEP) research. It does not manufacture drugs, regulate diagnostics, or administer NACP — these are roles of pharmaceutical companies, CDSCO, and NACO respectively."
  },
  {
    id: 13,
    question: "NIV Pune (National Institute of Virology) is unique among ICMR institutes because it:",
    options: [
      "A. Is the only ICMR institute with a Biosafety Level 4 (BSL-4) laboratory in India, enabling work with the most dangerous pathogens",
      "B. Has the largest research staff of any ICMR institute, exceeding 1000 scientists",
      "C. Is jointly operated with WHO as a Regional Reference Laboratory for South-East Asia",
      "D. Was established before ICMR itself, having originated as a Rockefeller Foundation institute in 1952"
    ],
    answer: 0,
    explanation: "ICMR-NIV Pune is India's premier virology institute and is notable for housing India's only Biosafety Level 4 (BSL-4) laboratory, which allows safe research on the most dangerous pathogens (Risk Group 4 agents) such as Ebola, Nipah, and other hemorrhagic fever viruses. NIV played a central role in COVID-19 diagnostics, isolating the SARS-CoV-2 virus in India and developing testing protocols."
  },
  {
    id: 14,
    question: "The National Institute for Research in Tuberculosis (NIRT), formerly known as Tuberculosis Research Centre (TRC), is located in:",
    options: [
      "A. Mumbai",
      "B. Lucknow",
      "C. Chennai",
      "D. Bengaluru"
    ],
    answer: 2,
    explanation: "ICMR-NIRT (National Institute for Research in Tuberculosis), formerly Tuberculosis Research Centre (TRC), is located in Chennai, Tamil Nadu. It was one of the earliest specialized research centers established under ICMR's predecessor and has a long history of TB epidemiology, diagnostics, treatment, and vaccine research. Its location in Chennai distinguishes it from ICMR-NITM (formerly CRME) in Belagavi."
  },
  {
    id: 15,
    question: "The National Institute for Research in Reproductive Health (NIRRH) is located in Mumbai and focuses on:",
    options: [
      "A. Population statistics and census methodology for reproductive health indicators",
      "B. Biomedical research on reproductive health, fertility, contraception, and maternal health",
      "C. Training of auxiliary nurse midwives (ANMs) and community health workers",
      "D. Clinical management of infertility cases as a tertiary care hospital"
    ],
    answer: 1,
    explanation: "ICMR-NIRRH (National Institute for Research in Reproductive Health) in Mumbai conducts biomedical research on reproductive and maternal health, including fertility, infertility, contraception development, pregnancy complications, and reproductive endocrinology. It does not run training programs for ANMs (NRHM/NHM role) or function primarily as a clinical hospital."
  },
  {
    id: 16,
    question: "ICMR-NCDIR (National Centre for Disease Informatics and Research) is located in Bengaluru and is specifically responsible for:",
    options: [
      "A. Digital health and electronic health record standardization across India",
      "B. Maintaining and analyzing the National Cancer Registry Programme (NCRP) and disease burden data",
      "C. Cybersecurity for health data and telemedicine platforms",
      "D. Pharmacovigilance and adverse drug reaction monitoring"
    ],
    answer: 1,
    explanation: "ICMR-NCDIR in Bengaluru is the nodal center for the National Cancer Registry Programme (NCRP) and maintains population-based and hospital-based cancer registries across India. It analyzes cancer incidence, mortality, and survival data to inform national cancer control policies. It also works on disease burden estimation and health informatics. Pharmacovigilance is managed by PVPI under CDSCO."
  },
  {
    id: 17,
    question: "The National Institute of Nutrition (NIN), an ICMR institute in Hyderabad, is best known for producing which flagship national nutritional reference?",
    options: [
      "A. National Family Health Survey (NFHS) nutritional tables",
      "B. Dietary Guidelines for Indians and Nutrient Requirements for Indians",
      "C. Integrated Child Development Services (ICDS) program manual",
      "D. National Nutrition Monitoring Bureau (NNMB) mandate and annual reports"
    ],
    answer: 1,
    explanation: "ICMR-NIN (National Institute of Nutrition), Hyderabad produces the authoritative 'Dietary Guidelines for Indians' and 'Nutrient Requirements for Indians' (formerly Recommended Dietary Allowances). These are the standard reference documents for all nutritional planning, public health nutrition policy, and clinical nutrition in India. NIN also conducts the NNMB surveys, but its flagship outputs are the dietary guidelines and nutrient requirement tables."
  },
  {
    id: 18,
    question: "ICMR-NIMR (National Institute of Malaria Research) is headquartered in New Delhi. Which of the following CORRECTLY describes an ICMR institute focused on vector-borne diseases OTHER than malaria?",
    options: [
      "A. ICMR-VCRC in Pondicherry focuses on vector control and lymphatic filariasis, kala-azar, and other vector-borne diseases",
      "B. ICMR-NIRT in Chennai focuses on dengue and chikungunya vector control",
      "C. ICMR-NIE in Chennai is the nodal institute for all vector-borne disease research in India",
      "D. ICMR-RMRC Bhubaneswar specializes exclusively in malaria vectors"
    ],
    answer: 0,
    explanation: "ICMR-VCRC (Vector Control Research Centre) in Puducherry (Pondicherry) specifically focuses on vector-borne diseases including lymphatic filariasis, kala-azar (visceral leishmaniasis), dengue, and vector control strategies. It conducts entomological research and works on biological and chemical control of vectors. NIMR in New Delhi specifically covers malaria research."
  },
  {
    id: 19,
    question: "The Regional Medical Research Centres (RMRCs) under ICMR are distributed across India. Which of the following is INCORRECT regarding ICMR RMRCs?",
    options: [
      "A. RMRC Bhubaneswar covers the eastern region with focus on tribal health and vector-borne diseases",
      "B. RMRC Dibrugarh covers the northeastern region",
      "C. RMRC Belgaum (Belagavi) focuses on reproductive health and tropical diseases in the Deccan region",
      "D. RMRC Jabalpur is one of the established RMRCs covering central India with forest malaria focus"
    ],
    answer: 2,
    explanation: "ICMR-RMRC Belgaum (Belagavi) is actually the location of ICMR-NITM (National Institute of Traditional Medicine, formerly Central Research Institute for Unani Medicine/CRME). The institute in Belagavi is not primarily an RMRC focused on reproductive health. RMRC Bhubaneswar (eastern), RMRC Dibrugarh (northeastern), and RMRC Jabalpur (central India, tribal/forest malaria) are correctly described."
  },
  {
    id: 20,
    question: "As of 2023-24, the approximate total number of institutes/centres under ICMR, including national institutes, regional centres, and specialized centres, is:",
    options: [
      "A. 12 institutes",
      "B. 19 institutes",
      "C. 26 institutes",
      "D. 35 institutes"
    ],
    answer: 2,
    explanation: "ICMR has approximately 26 institutes and centres across India as of recent counts. These include national institutes (such as NIV, NIRT, NIRRH, NIE, NIN, NIMR, NARI, NCDIR, NITM, VCRC), regional medical research centres (RMRCs in Bhubaneswar, Dibrugarh, Port Blair, Jodhpur, Jabalpur, Belgaum area), and specialized centres. The exact number varies slightly with reorganizations, but 26 is the commonly cited figure in ICMR documentation."
  },

  // Q21-Q30: ICMR Research Contributions
  {
    id: 21,
    question: "The INDIAB study (Indian Council of Medical Research - India Diabetes study), a landmark epidemiological study conducted by ICMR, was led by which scientist and what was its primary finding?",
    options: [
      "A. Dr. V. Mohan; established the national prevalence of diabetes and prediabetes across all Indian states for the first time using a standardized methodology",
      "B. Dr. K. Srinath Reddy; estimated cardiovascular disease burden associated with diabetes in India",
      "C. Dr. Balram Bhargava; provided the first national estimate of hypertension prevalence linked to diabetes",
      "D. Dr. Soumya Swaminathan; quantified the nutritional causes of type 2 diabetes in Indian populations"
    ],
    answer: 0,
    explanation: "The ICMR-INDIAB (India Diabetes) study was led by Dr. V. Mohan (Chennai) in collaboration with ICMR. It was the first population-based study to estimate the prevalence of diabetes and prediabetes across all Indian states using a standardized oral glucose tolerance test (OGTT)-based methodology. Published in Lancet Diabetes & Endocrinology (2023), it found approximately 101 million people with diabetes and 136 million with prediabetes in India."
  },
  {
    id: 22,
    question: "The IndiGen programme, a landmark genomics initiative by ICMR and CSIR, sequenced the whole genomes of 1,029 individuals. What was its primary scientific objective?",
    options: [
      "A. To develop a database of known pathogen genomes circulating in India for infectious disease surveillance",
      "B. To establish a reference dataset of genetic variants in the Indian population to enable pharmacogenomics, rare disease diagnosis, and population genetics research",
      "C. To identify genetic risk factors specifically for type 2 diabetes in South Asian populations",
      "D. To create a national biobank of DNA samples for future cancer genomics research"
    ],
    answer: 1,
    explanation: "The IndiGen programme (2019), jointly executed by IGIB (CSIR) and CCMB (CSIR) with ICMR support, sequenced 1,029 whole genomes representing diverse Indian populations. Its objective was to establish reference allele frequencies of genetic variants in Indians, enabling population-specific pharmacogenomics (e.g., drug metabolism variations), rare disease diagnosis, and understanding Indian population genetics. This is distinct from pathogen surveillance or disease-specific studies."
  },
  {
    id: 23,
    question: "During the COVID-19 pandemic, ICMR developed India's first indigenous RT-PCR test for SARS-CoV-2 in collaboration with which organization?",
    options: [
      "A. All India Institute of Medical Sciences (AIIMS), New Delhi",
      "B. MyLab Discovery Solutions, Pune",
      "C. Serum Institute of India, Pune",
      "D. National Institute of Immunology, New Delhi"
    ],
    answer: 1,
    explanation: "ICMR collaborated with MyLab Discovery Solutions (a Pune-based private company) to develop India's first indigenous RT-PCR kit for SARS-CoV-2 detection, branded as 'PathoDetect.' This partnership was significant as it reduced India's dependence on imported testing kits and enabled rapid scale-up of COVID-19 testing capacity. MyLab received ICMR validation, making it the first domestically produced COVID-19 test kit approved in India."
  },
  {
    id: 24,
    question: "ICMR conducted national seroprevalence surveys for SARS-CoV-2. How many rounds of national serosurveys did ICMR complete, and what was the approximate finding of the final round?",
    options: [
      "A. Two rounds; final round showed 40% seroprevalence before vaccine rollout",
      "B. Four rounds; the fourth round (June-July 2021) showed approximately 67.6% seroprevalence among adults, indicating two-thirds had been exposed",
      "C. Six rounds; the sixth round showed near-complete population immunity (>90%) by early 2022",
      "D. Three rounds; the third round showed 50% seroprevalence after the first wave"
    ],
    answer: 1,
    explanation: "ICMR conducted four rounds of national seroprevalence surveys. The fourth national serosurvey (June-July 2021, published in IJMR) found approximately 67.6% seroprevalence in adults (>=18 years), meaning two-thirds of India's adult population had been exposed to SARS-CoV-2 before widespread vaccination. This was a landmark finding that informed India's pandemic response strategy and vaccine prioritization."
  },
  {
    id: 25,
    question: "The National Cancer Registry Programme (NCRP), managed by ICMR-NCDIR, consists of two types of registries. Which CORRECTLY describes both types?",
    options: [
      "A. Facility-based registries (hospitals) and community-based registries (PHCs) — both covering only urban populations",
      "B. Population-Based Cancer Registries (PBCRs) covering defined geographic areas and Hospital-Based Cancer Registries (HBCRs) recording cases from specific institutions",
      "C. Active surveillance registries (mandatory reporting) and passive registries (voluntary reporting) — both under state government control",
      "D. Urban cancer registries and rural cancer registries, each with separate methodology and reporting formats"
    ],
    answer: 1,
    explanation: "NCRP has two complementary registry types: (1) Population-Based Cancer Registries (PBCRs) — cover all cancer cases in a defined geographic population, enabling incidence rate calculations; and (2) Hospital-Based Cancer Registries (HBCRs) — record cancer cases managed at specific hospitals, capturing stage, treatment, and survival data. PBCRs are the gold standard for measuring true cancer burden in a population. India has 28+ PBCRs and numerous HBCRs under NCRP."
  },
  {
    id: 26,
    question: "ICMR's contribution to India's Global Burden of Disease (GBD) study included a landmark state-level analysis. What was the specific publication and key metric it introduced for India?",
    options: [
      "A. 'India: Health of the Nation's States' (2017) in Lancet — introduced state-level age-standardized DALYs and compared India's disease burden with global SDI levels",
      "B. 'India GBD 2019' in NEJM — introduced QALY-based metrics for prioritizing national health insurance coverage",
      "C. 'Burden of Disease in India' (2015) in BMJ — introduced YLL and YLD calculations for the first time in an Indian context",
      "D. 'Indian Disease Registry' (2020) in IJMR — provided first comprehensive ICD-10 coded mortality data from all states"
    ],
    answer: 0,
    explanation: "The landmark report 'India: Health of the Nation's States — The India State-Level Disease Burden Initiative' (2017), published in Lancet, was a collaboration between ICMR, PHFI, and IHME (GBD collaborators). It provided the first comprehensive state-level estimates of disease burden using Disability-Adjusted Life Years (DALYs), comparing each state's epidemiological transition against global Socio-demographic Index (SDI) benchmarks. This established the heterogeneity of health burden across Indian states."
  },
  {
    id: 27,
    question: "The ICMR Antimicrobial Resistance Surveillance Network (AMRSN) was established to address AMR in India. Which of the following BEST describes AMRSN's structure and output?",
    options: [
      "A. A single national laboratory at AIIMS that tests all clinical isolates for antibiotic resistance and publishes annual reports",
      "B. A network of sentinel surveillance sites (hospitals/labs) across India that collect and share AMR data to generate national resistance trend reports",
      "C. A regulatory body that issues prescription guidelines and restricts antibiotic sales based on surveillance data",
      "D. A WHO-mandated program that reports Indian AMR data directly to the Global Antimicrobial Resistance Surveillance System (GLASS)"
    ],
    answer: 1,
    explanation: "ICMR-AMRSN is a network of sentinel surveillance sites — tertiary care hospitals and reference laboratories distributed across India — that systematically collect antibiotic susceptibility testing data on key priority pathogens. The network generates annual AMR trend reports published by ICMR, providing nationally representative data on resistance patterns. It feeds into the National Action Plan on AMR and contributes data to WHO's GLASS system, but is not itself a regulatory body."
  },
  {
    id: 28,
    question: "ICMR's Integrated Disease Surveillance Programme (IDSP) collaboration role is best described as:",
    options: [
      "A. ICMR runs IDSP independently as its primary disease surveillance program",
      "B. ICMR provides technical and research support to IDSP (which is operated by NCDC under MoHFW) including outbreak investigation expertise and laboratory confirmation",
      "C. ICMR replaced IDSP with its own Integrated Health Information Platform (IHIP)",
      "D. ICMR administers IDSP through its NIE Chennai which serves as the national coordinating centre"
    ],
    answer: 1,
    explanation: "IDSP (Integrated Disease Surveillance Programme) is operated by NCDC (National Centre for Disease Control) under MoHFW — it is NOT an ICMR program. ICMR's role is to provide technical expertise, outbreak investigation capacity, and laboratory confirmation support. ICMR-NIE Chennai contributes training and field epidemiology support to IDSP. IHIP (Integrated Health Information Platform) is the digital upgrade of IDSP under NCDC, not ICMR."
  },
  {
    id: 29,
    question: "The ICMR Nutrition Atlas of India, compiled by ICMR-NIN, provides data on which of the following that makes it distinct from NFHS nutritional data?",
    options: [
      "A. It provides district-level nutrient intake data based on 24-hour dietary recall surveys, capturing actual food consumption patterns across all Indian districts",
      "B. It measures anthropometric data (height, weight, BMI) from a larger sample than NFHS",
      "C. It focuses exclusively on micronutrient deficiencies in tribal populations",
      "D. It uses biomarker-based nutritional assessment (serum levels) rather than dietary intake surveys"
    ],
    answer: 0,
    explanation: "The ICMR-NIN Nutrition Atlas of India is based on district-level dietary intake surveys using 24-hour dietary recall methodology, providing food consumption and nutrient intake data at the district level. This is methodologically distinct from NFHS, which primarily collects anthropometric data (height, weight, MUAC) and hemoglobin levels. The Atlas captures what people actually eat and their nutrient intakes, enabling food system and dietary policy analysis."
  },
  {
    id: 30,
    question: "ICMR's flagship journal, the Indian Journal of Medical Research (IJMR), has a specific historical distinction. Which of the following is CORRECT about IJMR?",
    options: [
      "A. IJMR was first published in 1913, making it one of the oldest medical research journals in Asia",
      "B. IJMR was established in 1949 simultaneously with the renaming of IRFA to ICMR",
      "C. IJMR is jointly published by ICMR and the Indian Medical Association (IMA)",
      "D. IJMR's current Impact Factor places it among the top 10 medical journals in Asia-Pacific"
    ],
    answer: 0,
    explanation: "The Indian Journal of Medical Research (IJMR) was first published in 1913 (originally as the Indian Journal of Medical Research under IRFA), making it one of the oldest medical journals in Asia. It predates India's independence and the renaming to ICMR. IJMR is published exclusively by ICMR (not jointly with IMA) and serves as India's premier biomedical research journal, publishing original research, reviews, and policy papers."
  },

  // Q31-Q40: ICMR Guidelines & Policies
  {
    id: 31,
    question: "The ICMR's 'National Ethical Guidelines for Biomedical and Health Research Involving Human Participants' were most recently comprehensively revised in which year?",
    options: [
      "A. 2006",
      "B. 2011",
      "C. 2017",
      "D. 2020"
    ],
    answer: 2,
    explanation: "ICMR released the comprehensively revised 'National Ethical Guidelines for Biomedical and Health Research Involving Human Participants' in 2017, replacing the earlier 2006 guidelines. The 2017 guidelines incorporated updates on community engagement, vulnerability, emerging technologies, social media research, biological material repositories, and post-trial access. The 2017 document is the current reference standard for all human subjects research ethics in India."
  },
  {
    id: 32,
    question: "Under ICMR's 2017 Ethical Guidelines, what is the specific requirement for research involving 'vulnerable populations' regarding additional protections?",
    options: [
      "A. Research on vulnerable populations is completely prohibited unless a waiver is obtained from the Union Health Minister",
      "B. Additional safeguards are required including justification for inclusion, enhanced informed consent procedures, community consultation where appropriate, and monitoring for exploitation or undue inducement",
      "C. Vulnerable populations can only be enrolled if the research offers direct therapeutic benefit to participants",
      "D. An independent DSMB (Data Safety Monitoring Board) is mandatory for all research involving any vulnerable population, regardless of risk level"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines on vulnerable populations require: scientific/ethical justification for their inclusion (they should not be used merely for convenience), enhanced informed consent (including assent for children, proxy consent for incapacitated adults), community consultation for community-level research, appropriate compensation without undue inducement, and additional monitoring. DSMB is risk-dependent, not mandatory for all research on vulnerable populations."
  },
  {
    id: 33,
    question: "The Clinical Trials Registry – India (CTRI) is maintained by which ICMR institute and what is the regulatory significance of registration?",
    options: [
      "A. Maintained by ICMR-NIE Chennai; registration is voluntary but required for publication in ICMR-affiliated journals",
      "B. Maintained by ICMR-NCDIR Bengaluru; prospective registration is mandatory for all clinical trials before enrollment as per CDSCO/Schedule Y requirements and ICMR guidelines",
      "C. Maintained by ICMR headquarters New Delhi; registration is required only for Phase III and IV trials",
      "D. Maintained by NIMS Hyderabad under MoHFW; registration is required for international multicentric trials only"
    ],
    answer: 1,
    explanation: "CTRI (Clinical Trials Registry – India) is maintained by ICMR-NCDIR (National Centre for Disease Informatics and Research), Bengaluru, which is a WHO Primary Registry. Since 2009, prospective registration before enrollment is mandatory for all clinical trials in India as per CDSCO's Schedule Y requirements and ICMR guidelines. CTRI registration is also required by ICMR and major journals (ICMJE requirements) for publication. It covers all phases of clinical trials."
  },
  {
    id: 34,
    question: "ICMR released guidelines on 'Biobanking and Biorepositories in India' in 2019. Which of the following is a KEY requirement under these guidelines for collection and storage of biological samples?",
    options: [
      "A. All biological samples stored in Indian biobanks must be registered in a Central Government database within 30 days of collection",
      "B. Broad consent (rather than specific consent) is permissible for biobanking with appropriate governance, and transfer of samples abroad requires ICMR approval and MTA (Material Transfer Agreement)",
      "C. Biological samples can only be stored for a maximum of 10 years, after which they must be destroyed",
      "D. Commercial biobanks are prohibited from storing human biological material under the ICMR biobanking guidelines"
    ],
    answer: 1,
    explanation: "ICMR's 2019 Biobanking Guidelines permit broad consent for sample storage (acknowledging that specific consent for all future uses may not be feasible), provided appropriate governance structures (Institutional Biobank Committee) are in place. Critically, transfer of human biological samples abroad requires ICMR approval and a Material Transfer Agreement (MTA), addressing concerns about biopiracy and sovereignty. Storage duration limits and commercial biobank prohibitions are not as described in option A/C/D."
  },
  {
    id: 35,
    question: "The ICMR guidelines on stem cell research in India, 'National Guidelines for Stem Cell Research (NGSCR),' are jointly issued by ICMR and which other body?",
    options: [
      "A. Department of Biotechnology (DBT) — ICMR and DBT jointly issue the NGSCR",
      "B. Indian Council of Scientific and Industrial Research (CSIR)",
      "C. Central Drugs Standard Control Organisation (CDSCO)",
      "D. Ministry of Science and Technology"
    ],
    answer: 0,
    explanation: "The National Guidelines for Stem Cell Research (NGSCR) are jointly issued by ICMR and DBT (Department of Biotechnology). The most recent version (2017) updated guidelines on embryonic stem cell research, induced pluripotent stem cells (iPSC), somatic cell nuclear transfer (SCNT), and clinical translation of stem cell therapies. The joint ICMR-DBT mandate reflects the dual health research (ICMR) and biotechnology development (DBT) dimensions of stem cell research."
  },
  {
    id: 36,
    question: "Under ICMR's guidelines on human gene therapy and genetic research, which category of genetic modification is currently PROHIBITED in India?",
    options: [
      "A. Somatic gene therapy for hereditary conditions using viral vectors",
      "B. Germline gene editing (modification of human embryos, sperm, or eggs intended for reproduction)",
      "C. Ex vivo gene therapy using autologous cells for enzyme deficiencies",
      "D. Genetic testing of somatic tissue for oncological diagnosis and treatment planning"
    ],
    answer: 1,
    explanation: "ICMR's genetic research guidelines, along with DBT guidelines and CDSCO regulations, prohibit germline gene editing — modification of human embryos, gametes (sperm/eggs), or early embryos with heritable genetic changes intended for reproductive purposes. This follows international consensus (post-He Jiankui controversy) and ethical principles preventing unintended heritable modifications. Somatic gene therapy, ex vivo cellular therapy, and somatic genetic testing for diagnosis are permitted under appropriate regulatory approvals."
  },
  {
    id: 37,
    question: "The ICMR-DHR guidelines on 'Good Clinical Laboratory Practices (GCLP)' are specifically relevant because:",
    options: [
      "A. GCLP certification by ICMR is mandatory for all private diagnostic laboratories in India to operate legally",
      "B. GCLP standards ensure quality assurance in clinical trial laboratories performing specimen analysis, bridging GCP (clinical trial conduct) and GLP (laboratory practice) requirements",
      "C. GCLP guidelines replace NABL accreditation requirements for government hospital laboratories",
      "D. GCLP standards are exclusively applicable to laboratories conducting BSL-3 and BSL-4 pathogen research"
    ],
    answer: 1,
    explanation: "ICMR-DHR's GCLP (Good Clinical Laboratory Practices) guidelines address the specific quality requirements for laboratories conducting specimen analysis in clinical trials. GCLP bridges the gap between GCP (Good Clinical Practice — governing trial conduct) and GLP (Good Laboratory Practice — governing non-clinical safety studies), ensuring that laboratory data generated in clinical trials meets regulatory and scientific quality standards. GCLP is distinct from NABL accreditation (which covers diagnostic labs generally) and not mandatory for all private labs."
  },
  {
    id: 38,
    question: "ICMR's biosafety guidelines classify biological agents into Risk Groups 1-4. Which of the following agents is correctly placed in Risk Group 4 (requiring BSL-4 containment)?",
    options: [
      "A. Mycobacterium tuberculosis (requiring BSL-3 containment)",
      "B. Ebola virus (Filoviridae) — high mortality, no available vaccine or therapy at time of guidelines",
      "C. Dengue virus (requiring BSL-2 containment)",
      "D. Salmonella typhi (requiring BSL-2 containment)"
    ],
    answer: 1,
    explanation: "Under ICMR/DBT biosafety guidelines (consistent with WHO classification), Ebola virus is a Risk Group 4 (RG4) agent requiring BSL-4 containment. RG4 agents cause severe human disease with high mortality, have no established vaccines or treatment, and pose high risk of person-to-person transmission. M. tuberculosis is RG3 (BSL-3), while dengue virus and Salmonella typhi are RG3 and RG2 respectively. India's only BSL-4 facility is at ICMR-NIV Pune."
  },
  {
    id: 39,
    question: "The ICMR policy on compensation for research-related injury states that:",
    options: [
      "A. Compensation is only applicable in Phase I first-in-human trials and is capped at Rs. 5 lakhs",
      "B. Research participants who sustain injury directly attributable to research participation are entitled to free treatment and financial compensation as determined by the IEC, based on injury severity and economic status",
      "C. Compensation for research injury is the sole responsibility of the sponsor-investigator and ICMR bears no liability",
      "D. Research-related injury compensation in India follows the same schedule as motor accident compensation under the Motor Vehicles Act"
    ],
    answer: 1,
    explanation: "Under ICMR 2017 Ethical Guidelines and Schedule Y (amended), research participants who sustain injury directly attributable to study participation are entitled to free medical treatment of the injury and financial compensation. The Institutional Ethics Committee (IEC) plays a role in determining the appropriate compensation, considering injury severity, participant's economic status, and causal attribution. This is a fundamental ethical protection reflecting the principle that research participants should not bear the costs of research risks."
  },
  {
    id: 40,
    question: "ICMR's guidelines on 'Research on Human Embryos and Fetal Tissue' impose which of the following specific restrictions?",
    options: [
      "A. Research on human embryos is completely banned regardless of the stage or purpose",
      "B. Research on human embryos in vitro is restricted to the first 14 days post-fertilization (the '14-day rule'), after which embryos must not be maintained in culture or used for research",
      "C. Only embryos with confirmed lethal genetic defects can be used for research, requiring a separate national committee approval for each study",
      "D. Research on fetal tissue is permitted only in ICMR-designated institutes and requires annual renewal of approval"
    ],
    answer: 1,
    explanation: "ICMR guidelines (consistent with NGSCR 2017 and international norms) apply the '14-day rule' — human embryos can be maintained in vitro and used for research only up to 14 days post-fertilization (the time of primitive streak formation). After 14 days, the embryo must not be maintained in culture. This internationally recognized limit reflects the developmental stage at which individuation begins. Creation of embryos solely for research is prohibited; only surplus IVF embryos (with donor consent) can be used."
  },

  // Q41-Q50: ICMR Fellowships, Awards & Recent Initiatives
  {
    id: 41,
    question: "The 'Shakuntala Amir Chand Prize' awarded by ICMR recognizes work in which specific area of biomedical research?",
    options: [
      "A. Outstanding contribution to cancer research and oncology in India",
      "B. Best research work done by a young scientist (under 40 years) in any area of basic or applied medical sciences",
      "C. Excellence in field epidemiology and outbreak investigation",
      "D. Pioneering contributions to tropical medicine and infectious diseases"
    ],
    answer: 1,
    explanation: "The ICMR Shakuntala Amir Chand Prize is awarded to young scientists (typically under 40 years of age) for outstanding research work in any area of basic or applied medical sciences. It is one of ICMR's most prestigious awards for young investigators, recognizing promising early-career contributions. It is named after Shakuntala Amir Chand, a benefactor who endowed the prize."
  },
  {
    id: 42,
    question: "The ICMR 'Haffkine Prize' is named after Waldemar Haffkine and is awarded for outstanding contribution to research in which field?",
    options: [
      "A. Nutrition and metabolic diseases",
      "B. Epidemiology and public health",
      "C. Infectious diseases, specifically cholera and plague (or broadly, microbiology and immunology)",
      "D. Clinical medicine and patient care innovation"
    ],
    answer: 2,
    explanation: "The Haffkine Prize is named after Waldemar Haffkine, the bacteriologist who developed vaccines for cholera and plague in India (working at what is now Haffkine Institute, Mumbai). The ICMR Haffkine Prize recognizes outstanding research in microbiology and immunology, particularly infectious diseases. It reflects Haffkine's legacy in vaccine development and microbial disease research in India."
  },
  {
    id: 43,
    question: "The ICMR 'Amrut Mody - Unichem Prize' is awarded for research on which subject?",
    options: [
      "A. Pharmacology and drug development relevant to Indian disease burden",
      "B. Reproductive health and maternal mortality reduction",
      "C. Health economics and healthcare financing",
      "D. Environmental health and pollution-related diseases"
    ],
    answer: 0,
    explanation: "The ICMR Amrut Mody - Unichem Prize recognizes outstanding research in pharmacology and drug development, particularly work relevant to the Indian pharmaceutical context and disease burden. It reflects the importance ICMR places on translational pharmacological research contributing to drug development for India's specific health needs."
  },
  {
    id: 44,
    question: "ICMR Senior Research Fellowship (SRF) for biomedical sciences has specific eligibility criteria. Which of the following is the CORRECT minimum qualification for ICMR SRF in life sciences?",
    options: [
      "A. MBBS or equivalent medical degree with at least 55% marks",
      "B. Master's degree (M.Sc. or equivalent) in life sciences/biomedical sciences with at least 55% marks, and qualifying a national-level written examination conducted by ICMR",
      "C. Ph.D. degree in any basic science subject with 2 years post-doctoral experience",
      "D. B.Sc. with 3 years of research experience in an ICMR institute"
    ],
    answer: 1,
    explanation: "ICMR SRF (Senior Research Fellowship) in biomedical sciences requires a minimum of M.Sc. (or equivalent postgraduate degree) in relevant life/biomedical sciences with at least 55% marks, combined with clearing the ICMR-JRF/SRF national entrance examination. Candidates are selected through a competitive written exam (JRF initially, upgraded to SRF after 2 years of satisfactory research). MBBS holders may have different pathways but M.Sc. is the standard minimum."
  },
  {
    id: 45,
    question: "The ICMR Extramural Research programme funds investigators at universities and medical colleges. The maximum project duration and the upper funding ceiling for a standard extramural research grant (ad-hoc scheme) is approximately:",
    options: [
      "A. 1 year duration; maximum Rs. 5 lakhs",
      "B. 3 years duration; maximum Rs. 30-50 lakhs (varies by category and year)",
      "C. 5 years duration; maximum Rs. 1 crore",
      "D. 2 years duration; maximum Rs. 10 lakhs strictly"
    ],
    answer: 1,
    explanation: "ICMR's standard extramural ad-hoc research grants typically have a maximum duration of 3 years. The funding ceiling for general projects is approximately Rs. 30-50 lakhs depending on the research category, year of sanction, and specific scheme. Task Force projects or large multi-site studies may have higher funding. 5-year duration and Rs. 1 crore ceiling apply to specific long-term Task Force projects, not standard ad-hoc grants."
  },
  {
    id: 46,
    question: "The 'ICMR Advanced Centre' scheme designates certain academic institutions to receive sustained, long-term funding for research in specific disease areas. What is the key distinction between an ICMR Advanced Centre and a regular ICMR extramural grant?",
    options: [
      "A. Advanced Centres receive funding for 10+ years, have dedicated infrastructure grants, and serve as national reference centres for their designated disease area",
      "B. Advanced Centres are exclusively located at IITs and IISc for translational research only",
      "C. Advanced Centres receive only consumables support and no salary support for researchers",
      "D. Advanced Centres are jointly funded by ICMR and World Bank under specific health system strengthening projects"
    ],
    answer: 0,
    explanation: "ICMR Advanced Centres are long-term (typically 5-10 years, often renewable) funded centres at academic/research institutions that serve as national centres of excellence and reference centres for specific disease areas or research themes. They receive comprehensive funding including infrastructure, equipment, salaries, and consumables. This sustained, comprehensive support distinguishes them from one-time or short-term project grants. They build institutional capacity in specific research domains."
  },
  {
    id: 47,
    question: "The ICMR-DHR International Fellowship for Indian Biomedical Scientists aims to:",
    options: [
      "A. Bring foreign scientists to work at ICMR institutes for technology transfer",
      "B. Enable Indian biomedical scientists to undertake short-term research training or collaborative research at leading international institutions abroad",
      "C. Fund Indian scientists' participation in WHO technical advisory committees",
      "D. Support NRI scientists to return to India and establish research programs"
    ],
    answer: 1,
    explanation: "The ICMR-DHR International Fellowship is designed to enable promising Indian biomedical scientists to undertake short-term training (typically 3-6 months) or collaborative research at leading international research institutions abroad. The goal is to enhance research skills, expose Indian scientists to advanced methodologies and technologies, and foster international collaborations that can be applied to India's health research priorities upon return."
  },
  {
    id: 48,
    question: "ICMR launched the 'One Health' initiative in collaboration with multiple ministries and international agencies. In the context of ICMR's mandate, 'One Health' specifically integrates research on:",
    options: [
      "A. Human health, animal health, and environmental/ecosystem health, recognizing their interconnectedness for addressing zoonotic diseases, antimicrobial resistance, and emerging infections",
      "B. Primary, secondary, and tertiary healthcare delivery systems under a unified research framework",
      "C. Allopathic, Ayurvedic, and traditional medicine research under a single governance structure",
      "D. Urban, rural, and tribal health research to eliminate health disparities"
    ],
    answer: 0,
    explanation: "ICMR's One Health initiative integrates human health (ICMR), animal health (ICAR — Indian Council of Agricultural Research), and environmental/ecosystem health in a unified research framework. This is essential for addressing zoonotic diseases (diseases transmissible between animals and humans), antimicrobial resistance (shared across human-animal-environment), and emerging infectious diseases. ICMR collaborates with ICAR, MoEF (Ministry of Environment), and international agencies like FAO, WHO, WOAH on One Health research."
  },
  {
    id: 49,
    question: "The ICMR Task Force on 'Tribal Health Research' is significant because tribal populations in India have specific health vulnerabilities. Which of the following is a specific research priority unique to this Task Force?",
    options: [
      "A. Documenting traditional herbal medicine use only, without investigating biomedical disease burden",
      "B. Research on specific disease burden in tribal populations including sickle cell disease, malnutrition, vector-borne diseases, and barriers to healthcare access in forest and remote areas",
      "C. Genetic isolation studies to map tribal genetic divergence from the general population only",
      "D. Advocacy for constitutional protections for tribal health rights without conducting primary research"
    ],
    answer: 1,
    explanation: "ICMR's Tribal Health Research Task Force focuses on the specific disease profile of tribal populations, which includes high burden of sickle cell disease (particularly in central Indian tribes), severe malnutrition, vector-borne diseases (malaria, kala-azar in forest areas), neglected tropical diseases, and significant barriers to healthcare access. Research includes disease burden quantification, intervention studies, and health systems research specific to tribal geographies and sociocultural contexts."
  },
  {
    id: 50,
    question: "ICMR's 'Vision 2030' document outlines strategic research priorities for the decade. Which of the following is identified as a HIGH-PRIORITY area in ICMR's recent strategic planning, reflecting emerging health challenges?",
    options: [
      "A. Exclusive focus on communicable diseases to achieve zero transmission of all infectious diseases by 2030",
      "B. Precision medicine and genomics-guided healthcare, digital health research, climate change and health, mental health research, and accelerating indigenous diagnostic and vaccine development capacity",
      "C. Shifting ICMR's mandate from research to direct primary healthcare delivery in underserved areas",
      "D. International pharmaceutical partnerships for drug manufacturing, replacing academic research as the primary activity"
    ],
    answer: 1,
    explanation: "ICMR's strategic priorities for the coming decade, reflected in its Vision documents and annual reports, include: (1) Precision medicine and genomics-guided healthcare leveraging India's genetic diversity, (2) Digital health research and health data science, (3) Climate change and health (heat stress, vector distribution changes, food security), (4) Mental health burden research, and (5) Strengthening indigenous capacity for diagnostics, therapeutics, and vaccines (accelerated by COVID-19 lessons). This reflects the epidemiological transition and emerging technological and environmental challenges."
  }
]

export default questions

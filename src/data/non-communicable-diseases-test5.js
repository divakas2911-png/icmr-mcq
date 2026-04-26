const questions = [
  {
    id: 1,
    question: "According to GLOBOCAN 2020, which cancer ranks as the most common cancer in India overall (both sexes combined)?",
    options: ["Lung cancer", "Breast cancer", "Oral cavity cancer", "Cervical cancer"],
    answer: 1,
    explanation: "According to GLOBOCAN 2020, breast cancer is the most common cancer in India overall when both sexes are combined, accounting for the highest number of new cases. It surpassed cervical cancer in incidence in recent years."
  },
  {
    id: 2,
    question: "The National Cancer Registry Programme (NCRP) in India is coordinated by which organization?",
    options: ["Indian Council of Medical Research (ICMR)", "ICMR-National Centre for Disease Informatics and Research (ICMR-NCDIR)", "Ministry of Health and Family Welfare", "National Institute of Epidemiology"],
    answer: 1,
    explanation: "The National Cancer Registry Programme (NCRP) in India is coordinated by ICMR-NCDIR (National Centre for Disease Informatics and Research), formerly known as National Cancer Registry Programme. It collects cancer data through a network of Population-Based Cancer Registries (PBCRs) and Hospital-Based Cancer Registries (HBCRs)."
  },
  {
    id: 3,
    question: "What is the key distinguishing feature of a Population-Based Cancer Registry (PBCR) compared to a Hospital-Based Cancer Registry (HBCR)?",
    options: ["PBCR collects data only from government hospitals", "PBCR captures all cancer cases in a defined geographic population regardless of where they are treated", "PBCR focuses only on childhood cancers", "PBCR is limited to metropolitan cities"],
    answer: 1,
    explanation: "A Population-Based Cancer Registry (PBCR) captures all new cancer cases occurring in a defined geographic population (city or district), regardless of where the patient is treated. This allows calculation of true incidence rates. Hospital-Based Cancer Registries (HBCRs) collect data only from patients attending specific hospitals, introducing selection bias."
  },
  {
    id: 4,
    question: "In Indian males, which five cancers together account for the majority of cancer burden (ranked by incidence)?",
    options: ["Lung, mouth, prostate, stomach, colorectum", "Mouth/oral cavity, lung, stomach, colorectum, oesophagus", "Prostate, bladder, kidney, lung, colorectum", "Liver, lung, stomach, pancreas, brain"],
    answer: 1,
    explanation: "In Indian males, the top five cancers by incidence are: mouth/oral cavity, lung, stomach, colorectum, and oesophagus. Tobacco-related cancers (oral, lung, oesophagus) dominate the male cancer burden in India, reflecting high rates of tobacco use in various forms."
  },
  {
    id: 5,
    question: "In Indian females, which cancer has the highest age-standardized incidence rate?",
    options: ["Cervical cancer", "Breast cancer", "Ovarian cancer", "Colorectal cancer"],
    answer: 1,
    explanation: "Breast cancer now has the highest age-standardized incidence rate (ASIR) in Indian females, surpassing cervical cancer. The ASIR for breast cancer in India is approximately 25.8 per 100,000, while cervical cancer is around 18.0 per 100,000 (GLOBOCAN 2020 data)."
  },
  {
    id: 6,
    question: "Age-Standardized Rate (ASR) in cancer epidemiology is calculated using which standard population?",
    options: ["Indian standard population 2011", "WHO World Standard Population", "Segi World Standard Population", "United Nations Standard Population"],
    answer: 2,
    explanation: "Age-Standardized Rate (ASR) for cancer is calculated using the Segi World Standard Population (1960), which allows comparison of cancer rates between different populations by removing the effect of different age structures. This is the convention used in GLOBOCAN and IARC publications."
  },
  {
    id: 7,
    question: "Which trend is most accurately observed in tobacco-related cancers in urban India over the past two decades?",
    options: ["Steadily increasing incidence", "Declining incidence due to tobacco control measures", "No significant change", "Increasing in females but declining in males"],
    answer: 1,
    explanation: "Tobacco-related cancers (lung, oral) are showing a declining trend in urban India over the past two decades, largely attributed to tobacco control measures under the Cigarettes and Other Tobacco Products Act (COTPA) 2003 and increased awareness. In contrast, breast cancer incidence is rising due to lifestyle changes."
  },
  {
    id: 8,
    question: "The cancer Mortality-to-Incidence (M:I) ratio is an indicator of which aspect of cancer control?",
    options: ["Cancer screening coverage", "Cancer treatment effectiveness and survival", "Cancer prevention program success", "Environmental carcinogen exposure"],
    answer: 1,
    explanation: "The Mortality-to-Incidence (M:I) ratio reflects cancer treatment effectiveness, healthcare access, and overall survival. A lower M:I ratio indicates better survival and treatment outcomes. India has a high M:I ratio for several cancers (e.g., cervical, oral), indicating late-stage diagnosis and limited treatment access compared to high-income countries."
  },
  {
    id: 9,
    question: "Which childhood cancer is most common in India?",
    options: ["Neuroblastoma", "Wilms tumor", "Acute Lymphoblastic Leukemia (ALL)", "Medulloblastoma"],
    answer: 2,
    explanation: "Acute Lymphoblastic Leukemia (ALL) is the most common childhood cancer in India, as in most parts of the world. It accounts for approximately 25-30% of all childhood cancers. India carries a substantial global burden of childhood cancer, with cure rates lower than high-income countries due to treatment abandonment and delayed diagnosis."
  },
  {
    id: 10,
    question: "The 5-year relative survival rate for breast cancer in India is approximately which value compared to the USA?",
    options: ["Similar (85-90%)", "India 60-65% vs USA 90%", "India 40% vs USA 75%", "India 80% vs USA 85%"],
    answer: 1,
    explanation: "The 5-year relative survival rate for breast cancer in India is approximately 60-65%, compared to approximately 90% in the USA. This disparity is largely due to late-stage diagnosis in India (majority presenting at stage III-IV vs stage I-II in USA), limited treatment access, and socioeconomic factors."
  },
  {
    id: 11,
    question: "Northeast India has distinctively high rates of which cancers compared to the rest of India?",
    options: ["Breast and cervical cancer", "Lung and bladder cancer", "Stomach and nasopharyngeal cancer", "Liver and pancreatic cancer"],
    answer: 2,
    explanation: "Northeast India, particularly states like Mizoram, Nagaland, and Arunachal Pradesh, has distinctively high incidence rates of stomach cancer and nasopharyngeal cancer. These patterns are attributed to dietary habits (smoked and salted meats, pickled vegetables), high prevalence of H. pylori infection, and Epstein-Barr virus (EBV) for nasopharyngeal cancer, along with ethnic factors."
  },
  {
    id: 12,
    question: "According to projections, the total number of new cancer cases in India by 2025 is estimated to be approximately:",
    options: ["800,000", "1.2 million", "1.57 million", "2.0 million"],
    answer: 2,
    explanation: "According to ICMR-NCDIR projections, India is expected to have approximately 1.57 million new cancer cases by 2025. This represents a significant increase from the estimated 1.39 million in 2020, driven by population growth, aging, and changing risk factor profiles. This projection underscores the urgent need for cancer control programs."
  },
  {
    id: 13,
    question: "Which form of tobacco use is most strongly associated with oral cavity cancer in India?",
    options: ["Cigarette smoking", "Bidi smoking", "Smokeless tobacco (chewing tobacco/gutka)", "Hookah/waterpipe"],
    answer: 2,
    explanation: "Smokeless tobacco use (chewing tobacco, gutka, khaini, pan masala with tobacco) is most strongly associated with oral cavity cancer in India. Smokeless tobacco contains potent carcinogens including tobacco-specific nitrosamines (TSNAs), polycyclic aromatic hydrocarbons, and heavy metals. India has one of the highest rates of smokeless tobacco use globally."
  },
  {
    id: 14,
    question: "The synergistic effect of alcohol and tobacco in cancer causation is best described by which relationship?",
    options: ["Additive - combined risk equals sum of individual risks", "Multiplicative - combined risk exceeds sum of individual risks", "Antagonistic - alcohol reduces tobacco carcinogenicity", "No interaction - effects are independent"],
    answer: 1,
    explanation: "Alcohol and tobacco exhibit a multiplicative (synergistic) interaction in causing cancers of the oral cavity, pharynx, larynx, and oesophagus. The combined risk is greater than the sum of individual risks. For example, heavy smokers who are also heavy drinkers have a 35-fold increased risk of oral cancer compared to non-users of both substances."
  },
  {
    id: 15,
    question: "Human Papillomavirus (HPV) is causally associated with which set of cancers?",
    options: ["Cervical, oropharyngeal, anal, vulvar, vaginal, penile cancers", "Cervical cancer only", "Cervical and breast cancers", "Cervical, lung, and bladder cancers"],
    answer: 0,
    explanation: "HPV is causally associated with cervical cancer (99% attributable fraction), oropharyngeal cancer (especially HPV-16), anal cancer, vulvar cancer, vaginal cancer, and penile cancer. HPV-16 and HPV-18 are responsible for approximately 70% of cervical cancers globally. HPV vaccination is the primary prevention strategy."
  },
  {
    id: 16,
    question: "Which infectious agents are classified as definite (Group 1) carcinogens by IARC relevant to Indian cancer burden?",
    options: ["HPV, HBV, HCV, H. pylori, EBV, HHV-8, HTLV-1", "HPV and H. pylori only", "HBV and HCV only", "EBV and HTLV-1 only"],
    answer: 0,
    explanation: "IARC classifies multiple infectious agents as Group 1 (definite) carcinogens: HPV (cervical, oropharyngeal, anal cancers), HBV and HCV (hepatocellular carcinoma), H. pylori (gastric cancer, MALT lymphoma), EBV (Burkitt lymphoma, nasopharyngeal cancer, some Hodgkin lymphoma), HHV-8 (Kaposi's sarcoma), and HTLV-1 (adult T-cell leukemia/lymphoma). These are all relevant to the Indian cancer burden."
  },
  {
    id: 17,
    question: "Obesity is most strongly associated with increased risk of which cancers?",
    options: ["Lung and bladder cancer", "Endometrial, postmenopausal breast, colorectal, and kidney cancers", "Oral and oesophageal cancers", "Prostate and testicular cancers"],
    answer: 1,
    explanation: "Obesity is most strongly associated with endometrial cancer (3-4 fold increased risk), postmenopausal breast cancer, colorectal cancer, kidney (renal cell) cancer, oesophageal adenocarcinoma, gallbladder cancer, and pancreatic cancer. Mechanisms include hyperinsulinemia, elevated IGF-1, chronic inflammation, and elevated estrogen levels from adipose tissue aromatase activity."
  },
  {
    id: 18,
    question: "PM2.5 air pollution is classified by IARC as a Group 1 carcinogen most strongly linked to which cancer?",
    options: ["Bladder cancer", "Lung cancer", "Breast cancer", "Colorectal cancer"],
    answer: 1,
    explanation: "IARC classified outdoor air pollution (and PM2.5 specifically) as a Group 1 carcinogen in 2013, most strongly linked to lung cancer. India has among the highest PM2.5 levels globally, particularly in the Indo-Gangetic Plain. Air pollution is estimated to contribute significantly to lung cancer burden in India, even in non-smokers."
  },
  {
    id: 19,
    question: "Which occupational cancer association is correctly matched?",
    options: ["Asbestos - bladder cancer", "Benzene - lung cancer", "Vinyl chloride - angiosarcoma of the liver", "Chromium - mesothelioma"],
    answer: 2,
    explanation: "Vinyl chloride monomer is a Group 1 carcinogen specifically associated with angiosarcoma of the liver (hepatic angiosarcoma). Asbestos causes mesothelioma and lung cancer; benzene causes leukemia and lymphomas; chromium (hexavalent) causes lung cancer. These occupational carcinogens are regulated under industrial safety standards."
  },
  {
    id: 20,
    question: "BRCA1 and BRCA2 gene mutations are associated with increased lifetime risk of which cancers?",
    options: ["Breast and ovarian cancers only", "Breast, ovarian, pancreatic, and prostate cancers", "Colon and uterine cancers (Lynch syndrome)", "Multiple endocrine neoplasia"],
    answer: 1,
    explanation: "BRCA1 and BRCA2 are tumor suppressor genes involved in DNA repair. Pathogenic variants confer significantly elevated lifetime risk: BRCA1 - breast cancer (55-72%), ovarian cancer (44%), and associated with pancreatic cancer; BRCA2 - breast cancer (45-69%), ovarian cancer (17%), pancreatic cancer, and prostate cancer. BRCA2 mutations also increase male breast cancer risk."
  },
  {
    id: 21,
    question: "Which reproductive factor most significantly INCREASES breast cancer risk?",
    options: ["Early age at first full-term pregnancy (<20 years)", "Late menarche (>14 years)", "Multiparity (>4 children)", "Nulliparity or late age at first birth (>30 years)"],
    answer: 3,
    explanation: "Nulliparity (never having children) or late age at first full-term birth (>30 years) significantly increases breast cancer risk. Early first full-term pregnancy is protective. Other risk factors include early menarche (<12 years), late menopause (>55 years), and hormone replacement therapy. These factors reflect cumulative estrogen exposure throughout life."
  },
  {
    id: 22,
    question: "Red and processed meat consumption is most strongly associated with increased risk of which cancer?",
    options: ["Gastric cancer", "Colorectal cancer", "Pancreatic cancer", "Bladder cancer"],
    answer: 1,
    explanation: "Red meat and processed meat are classified by IARC as Group 2A (probable) and Group 1 (definite) carcinogens respectively, most strongly associated with colorectal cancer. Mechanisms include N-nitroso compounds, heterocyclic amines, polycyclic aromatic hydrocarbons from cooking, and heme iron. High dietary fiber intake is protective against colorectal cancer."
  },
  {
    id: 23,
    question: "Areca nut (betel nut) chewing without tobacco is causally associated with which cancer?",
    options: ["Lung cancer only", "No cancer risk without tobacco", "Oral submucous fibrosis and oral cancer", "Oesophageal cancer only"],
    answer: 2,
    explanation: "Areca nut (betel nut) is classified as a Group 1 carcinogen by IARC even without tobacco. It causes oral submucous fibrosis (OSF), a premalignant condition, and is independently associated with oral cancer. Areca nut contains arecoline and other alkaloids that are mutagenic. In India, pan masala (without tobacco) is also carcinogenic due to areca nut content."
  },
  {
    id: 24,
    question: "Ultraviolet (UV) radiation-induced skin cancer is primarily caused by which mechanism?",
    options: ["UV-A inducing reactive oxygen species damaging DNA", "UV-B causing pyrimidine dimer formation in DNA (C to T transitions)", "UV-C causing strand breaks in RNA", "Infrared radiation activating proto-oncogenes"],
    answer: 1,
    explanation: "UV-B radiation (280-315 nm) is the primary carcinogenic component of solar UV, causing formation of pyrimidine dimers (cyclobutane pyrimidine dimers and 6-4 photoproducts) in DNA. This leads to characteristic C to T and CC to TT transitions (UV signature mutations). Unrepaired dimers cause mutations in tumor suppressor genes (p53) leading to basal cell carcinoma, squamous cell carcinoma, and melanoma."
  },
  {
    id: 25,
    question: "According to the Wilson-Jungner criteria for cancer screening, which condition is the MOST important prerequisite for an effective screening program?",
    options: ["The test must be inexpensive", "The disease must have a recognizable latent or early symptomatic stage", "The screening test must be 100% specific", "The treatment must be curative in all cases"],
    answer: 1,
    explanation: "The Wilson-Jungner criteria (1968) specify that for effective screening, the disease must have a recognizable latent or early symptomatic stage during which intervention improves outcomes. Other key criteria include: important health problem, accepted treatment, adequate facilities available, natural history understood, agreed policy on whom to treat, cost-effective, and the process must be continuous."
  },
  {
    id: 26,
    question: "Visual Inspection with Acetic Acid (VIA) for cervical cancer screening works on which principle?",
    options: ["Acetic acid stains malignant cells permanently red for biopsy guidance", "Acetowhite reaction: acetic acid causes transient whitening of dysplastic cells with high nuclear protein content", "VIA uses fluorescence to detect HPV DNA", "Acetic acid removes normal squamous epithelium exposing columnar cells"],
    answer: 1,
    explanation: "VIA works because acetic acid (3-5%) causes transient coagulation and precipitation of cytoplasmic and nuclear proteins in dysplastic cells (which have high nuclear-cytoplasmic ratio and dense nuclear protein content), producing a white appearance (acetowhite). Normal squamous epithelium remains pink. The reaction is transient (fades in 1-2 minutes), and results are read immediately. VIA is suitable for low-resource settings."
  },
  {
    id: 27,
    question: "The 'see-and-treat' approach in cervical cancer screening refers to:",
    options: ["Performing Pap smear and immediate colposcopy in the same visit", "VIA screening followed by immediate cryotherapy for VIA-positive women in the same visit", "HPV DNA testing followed by immediate LEEP procedure", "Visual examination followed by immediate hysterectomy for suspicious lesions"],
    answer: 1,
    explanation: "The see-and-treat approach involves VIA screening followed by immediate cryotherapy (or thermal ablation) for women who are VIA-positive in the same visit, without waiting for biopsy confirmation. This single-visit approach (SVA - Single Visit Approach) reduces loss to follow-up, which is a major problem in low-resource settings. The WHO recommends this approach for low-resource settings where follow-up is difficult."
  },
  {
    id: 28,
    question: "The current evidence-based recommendation for breast cancer screening in average-risk women is:",
    options: ["Monthly BSE (breast self-examination) starting at age 20", "Annual mammography starting at age 40 for all women", "Mammography every 2 years for women aged 50-69 (organized screening)", "Annual MRI screening starting at age 30 for all women"],
    answer: 2,
    explanation: "The strongest evidence supports organized mammographic screening every 2 years for average-risk women aged 50-69 years, which reduces breast cancer mortality by approximately 20-30%. Breast Self-Examination (BSE) has not been shown to reduce mortality in RCTs and may increase unnecessary biopsies. Clinical Breast Examination (CBE) has limited evidence. In India, mammography access is limited, and organized screening programs are not yet nationally implemented."
  },
  {
    id: 29,
    question: "Which statement about oral cancer visual examination screening in India is CORRECT?",
    options: ["No RCT evidence supports visual examination screening for oral cancer", "An RCT in Kerala (Sankaranarayanan et al.) showed visual examination screening reduced oral cancer mortality by 34% in tobacco/alcohol users", "Visual examination has 95% sensitivity for oral cancer detection", "Oral cancer screening is not recommended by any Indian health program"],
    answer: 1,
    explanation: "The landmark RCT conducted in Kerala (Sankaranarayanan et al., 2005) demonstrated that visual examination screening by trained health workers reduced oral cancer mortality by 34% in tobacco and/or alcohol users. This is the only RCT evidence for any cancer visual examination screening showing mortality reduction. Given India's high tobacco use burden, oral visual examination screening is highly cost-effective and has been incorporated into India's cancer screening programs."
  },
  {
    id: 30,
    question: "Fecal Occult Blood Test (FOBT) for colorectal cancer screening is based on which principle?",
    options: ["Detection of carcinoembryonic antigen (CEA) in stool", "Detection of hemoglobin in stool using guaiac or immunochemical methods", "Detection of colorectal cancer DNA mutations in stool", "Detection of bile acids in stool"],
    answer: 1,
    explanation: "FOBT detects hidden (occult) blood in stool. Guaiac FOBT (gFOBT) uses the peroxidase-like activity of hemoglobin to catalyze a color reaction. Fecal Immunochemical Test (FIT) uses antibodies specific to human hemoglobin, making it more sensitive and specific. Randomized trials have shown that annual/biennial FOBT reduces colorectal cancer mortality by 15-33%. It is the recommended first-line screening test in many national programs."
  },
  {
    id: 31,
    question: "The PSA (Prostate-Specific Antigen) test for prostate cancer screening is controversial primarily because:",
    options: ["PSA testing is too expensive for routine use", "PSA leads to significant overdiagnosis and overtreatment of indolent cancers without clear mortality benefit in all populations", "PSA has very low sensitivity for detecting prostate cancer", "PSA testing is not approved by FDA"],
    answer: 1,
    explanation: "PSA screening is controversial because it leads to significant overdiagnosis (detecting cancers that would never cause symptoms) and overtreatment (surgery/radiation with side effects like incontinence and impotence) without a clearly demonstrated reduction in overall mortality. The PLCO trial showed no mortality benefit while ERSPC showed modest benefit. Major organizations give conflicting recommendations. PSA screening requires shared decision-making between clinician and patient."
  },
  {
    id: 32,
    question: "Low-Dose CT (LDCT) screening for lung cancer is recommended for which high-risk group based on the NLST trial?",
    options: ["All adults above 40 years", "Current or former smokers aged 55-80 years with 30+ pack-year history", "All current smokers regardless of age or duration", "Former smokers who quit more than 15 years ago"],
    answer: 1,
    explanation: "Based on the National Lung Screening Trial (NLST, 2011), LDCT screening is recommended for high-risk individuals: current or former smokers aged 55-80 years with at least 30 pack-year smoking history (and former smokers who quit within the past 15 years). NLST showed 20% reduction in lung cancer mortality. In India, LDCT screening is not yet implemented nationally due to cost and infrastructure constraints."
  },
  {
    id: 33,
    question: "Under India's National Programme for Non-Communicable Diseases (NPCDCS) and Ayushman Bharat, cancer screening is offered for which three cancers at Health and Wellness Centres?",
    options: ["Lung, liver, and prostate cancers", "Oral, cervical, and breast cancers", "Colorectal, stomach, and oesophageal cancers", "Leukemia, lymphoma, and brain tumors"],
    answer: 1,
    explanation: "Under NPCDCS and Ayushman Bharat's Health and Wellness Centres (HWCs), population-based screening is offered for three common cancers: oral cancer (visual examination), cervical cancer (VIA), and breast cancer (clinical breast examination - CBE). These were chosen based on high burden in India, availability of cost-effective screening tests, and feasibility in primary care settings. Target group is adults aged 30 years and above."
  },
  {
    id: 34,
    question: "Opportunistic cancer screening differs from organized (population-based) screening in which fundamental way?",
    options: ["Opportunistic screening is more effective in reducing cancer mortality", "Opportunistic screening occurs when patients visiting healthcare facilities are screened; organized screening systematically invites a defined target population", "Organized screening only occurs in private hospitals", "Opportunistic screening uses more advanced diagnostic tests"],
    answer: 1,
    explanation: "Opportunistic screening occurs when patients who visit health facilities for other reasons are offered screening (provider- or patient-initiated). It is ad hoc and lacks systematic follow-up. Organized (population-based) screening systematically identifies and invites a defined target population, has quality assurance, centralized call-recall systems, monitoring, and evaluation. Organized screening achieves higher coverage, reduces inequity, and is more effective at reducing cancer mortality at the population level."
  },
  {
    id: 35,
    question: "Over-diagnosis in cancer screening refers to:",
    options: ["False positive results requiring unnecessary biopsies", "Detection and treatment of cancers that would never have caused symptoms or death during a patient's lifetime", "Incorrect staging of cancer at diagnosis", "Delay in reading screening test results"],
    answer: 1,
    explanation: "Over-diagnosis in cancer screening refers to the detection of true cancers (histologically confirmed) that would never have caused symptoms or death during the patient's lifetime if left undetected. These indolent cancers are treated unnecessarily, causing harm without benefit. Over-diagnosis is a recognized problem in breast cancer mammography screening, thyroid cancer screening, and PSA-based prostate cancer screening. It must be distinguished from false positives."
  },
  {
    id: 36,
    question: "In low- and middle-income countries (LMICs) like India, the MOST cost-effective cervical cancer screening strategy is:",
    options: ["Annual Pap smear starting at age 21", "Single lifetime VIA or HPV DNA test at age 35, followed by see-and-treat", "Triennial colposcopy starting at age 25", "Annual HPV DNA testing starting at age 18"],
    answer: 1,
    explanation: "Modeling studies and WHO recommendations for LMICs demonstrate that a single lifetime screen (at age 35 using VIA or HPV DNA testing) followed by immediate treatment (see-and-treat) is the most cost-effective strategy. This approach can reduce cervical cancer mortality by 25-36%. Frequency can be increased to 2-3 lifetime screens for greater benefit. This is more practical than annual screening in resource-limited settings."
  },
  {
    id: 37,
    question: "The recommended HPV DNA screening interval in the WHO 90-70-90 cervical cancer elimination strategy for countries with HPV testing capacity is:",
    options: ["Annual HPV testing", "Every 2 years", "Every 5 years (HPV DNA test at age 35 and 45)", "Every 10 years"],
    answer: 2,
    explanation: "WHO's 90-70-90 elimination strategy for cervical cancer includes: 90% of girls vaccinated with HPV vaccine by age 15, 70% of women screened with a high-performance test by age 35 and again by age 45, and 90% of women with detected disease receiving treatment. The HPV DNA test at ages 35 and 45 (every 5 years/2 lifetime screens) is the recommended strategy for high-income countries and those with HPV testing capacity."
  },
  {
    id: 38,
    question: "The primary objective of India's National Cancer Control Programme (NCCP/NPCCP) includes all EXCEPT:",
    options: ["Primary prevention of tobacco-related cancers", "Early detection and treatment of cancer", "Equitable cancer treatment through District Cancer Care units", "Mandatory genetic testing for all cancer patients"],
    answer: 3,
    explanation: "India's National Cancer Control Programme objectives include: (1) primary prevention of tobacco-related and other cancers; (2) early detection and downstaging through screening programs; (3) strengthening treatment facilities and making treatment equitable (District Cancer Care centers); (4) palliative care and pain relief; and (5) research and training. Mandatory genetic testing for all cancer patients is not an objective of the NCCP."
  },
  {
    id: 39,
    question: "HPV vaccine as primary prevention for cervical cancer is most effective when given to which group?",
    options: ["Women with active HPV infection", "Girls aged 9-14 years before sexual debut (prior to HPV exposure)", "Women aged 26-45 years as catch-up", "Boys only to prevent oropharyngeal cancer"],
    answer: 1,
    explanation: "HPV vaccines are most effective when given to girls aged 9-14 years, before sexual debut and potential HPV exposure. In this age group, 2-dose schedules are sufficient (2-dose series, 6 months apart). Post-exposure vaccination has limited benefit. India introduced HPV vaccination under the Universal Immunization Programme targeting 9-14 year old girls with the indigenously developed quadrivalent HPV vaccine (Cervavac). Catch-up vaccination is recommended up to age 26."
  },
  {
    id: 40,
    question: "Hepatitis B vaccination as cancer prevention primarily prevents which cancer?",
    options: ["Bile duct cancer (cholangiocarcinoma)", "Hepatocellular carcinoma (HCC)", "Colorectal cancer", "Pancreatic cancer"],
    answer: 1,
    explanation: "Hepatitis B vaccination prevents chronic HBV infection, which is the leading cause of hepatocellular carcinoma (HCC) worldwide. HBV causes approximately 50% of all HCC globally. Taiwan's universal HBV vaccination program begun in 1984 demonstrated a 70% reduction in HCC incidence in vaccinated cohorts compared to unvaccinated - the first demonstration of a vaccine preventing cancer. India has HBV vaccination in its UIP since 2002."
  },
  {
    id: 41,
    question: "The WHO Three-Step Analgesic Ladder for cancer pain management follows which sequence?",
    options: ["Opioids first, then NSAIDs, then adjuvants", "Non-opioids (Step 1) -> Weak opioids + non-opioids (Step 2) -> Strong opioids + non-opioids (Step 3)", "Adjuvants first, then weak opioids, then strong opioids", "Strong opioids (Step 1) -> Weak opioids (Step 2) -> Non-opioids (Step 3)"],
    answer: 1,
    explanation: "The WHO Three-Step Analgesic Ladder (1986) for cancer pain: Step 1 - mild pain: non-opioids (aspirin, paracetamol, NSAIDs) ± adjuvants; Step 2 - moderate pain persisting: add weak opioids (codeine, tramadol) to non-opioids ± adjuvants; Step 3 - severe pain persisting: replace with strong opioids (morphine, oxycodone, fentanyl) ± non-opioids ± adjuvants. Oral morphine availability is a key challenge in India for palliative care."
  },
  {
    id: 42,
    question: "The National Cancer Grid (NCG) of India was established with which primary objective?",
    options: ["To regulate private cancer hospitals' fee structures", "To connect cancer centers across India for uniform standards of care, research, and telemedicine", "To manage cancer drug procurement for government hospitals", "To conduct cancer screening camps in rural areas"],
    answer: 1,
    explanation: "The National Cancer Grid (NCG), established in 2012 under the Department of Atomic Energy (Tata Memorial Centre) and later supported by DST, connects over 250 cancer centers across India. Its objectives include: establishing uniform standards of cancer care, facilitating tumor boards/multidisciplinary care via telemedicine, training oncologists, conducting collaborative research, and reducing disparities in cancer care quality between metro and non-metro areas."
  },
  {
    id: 43,
    question: "The District Cancer Care model in India under NPCDCS involves which level of care?",
    options: ["Only tertiary cancer centers in state capitals", "District hospital-based care with oncologist support for diagnosis, basic treatment, and referral", "Only home-based palliative care", "Cancer screening only without treatment capacity"],
    answer: 1,
    explanation: "The District Cancer Care model under NPCDCS aims to bring basic cancer care closer to patients by strengthening District Hospitals with: oncology OPDs, trained cancer care nurses, basic diagnostic facilities (biopsy, histopathology), chemotherapy administration, palliative care, and linkage to tertiary centers for surgery/radiation. Day Care Chemotherapy Centres at district level reduce the need for patients to travel to metro cities for every treatment cycle."
  },
  {
    id: 44,
    question: "A major barrier to cancer treatment access in India is:",
    options: ["Excess number of oncologists in rural areas", "Geographic concentration of cancer treatment facilities in large cities and high out-of-pocket expenditure", "Overutilization of cancer screening leading to unnecessary treatment", "Mandatory insurance coverage creating wait times"],
    answer: 1,
    explanation: "Key barriers to cancer treatment access in India include: geographic concentration of cancer centers in large cities (Mumbai, Delhi, Chennai, Kolkata, Bengaluru); high out-of-pocket expenditure (cancer treatment can cost INR 5-20 lakhs); catastrophic health expenditure leading families to financial ruin; lack of trained oncologists in tier 2 and 3 cities; late-stage presentation; and social stigma. Ayushman Bharat PM-JAY provides coverage for cancer treatment up to INR 5 lakhs."
  },
  {
    id: 45,
    question: "Cancer survivorship care addresses which specific needs of cancer survivors?",
    options: ["Only monitoring for cancer recurrence", "Physical, psychosocial, financial late effects of treatment; surveillance for recurrence and second cancers; health promotion", "Genetic counseling for family members only", "Palliative and end-of-life care"],
    answer: 1,
    explanation: "Cancer survivorship care encompasses comprehensive post-treatment care addressing: surveillance for recurrence and second primary cancers; managing late and long-term physical effects (fatigue, lymphedema, neuropathy, cardiac toxicity); psychosocial support (depression, anxiety, PTSD); fertility/reproductive health; financial toxicity; health promotion (exercise, nutrition, tobacco cessation); and care coordination between oncologists and primary care. India has limited structured survivorship care programs."
  },
  {
    id: 46,
    question: "Cancer registration is important for cancer control primarily because it:",
    options: ["Provides names of cancer patients for treatment prioritization", "Provides population-based incidence, prevalence, survival data needed for policy, resource allocation, and evaluating prevention programs", "Helps identify cancer patients for insurance claims", "Monitors individual treatment compliance"],
    answer: 1,
    explanation: "Cancer registries are the backbone of cancer control programs. They provide: population-based incidence rates for planning screening and prevention programs; trends over time to evaluate effectiveness of interventions; survival data to measure treatment outcomes; prevalence data for service planning; rural-urban and regional variation for equity assessments; and data for research. Without accurate cancer registration, it is impossible to know the true burden or evaluate program impact."
  },
  {
    id: 47,
    question: "India's Tobacco Quitline number, which provides free cessation counseling, is:",
    options: ["1800-112-356", "1800-180-1104", "104", "1800-233-444"],
    answer: 0,
    explanation: "India's National Tobacco Quitline number is 1800-112-356 (toll-free). It provides free telephonic behavioral counseling for tobacco cessation. The service is available in multiple regional languages. It is part of India's comprehensive tobacco control strategy under COTPA and the National Tobacco Control Programme (NTCP). mCessation (mobile-based cessation) is another initiative under India's tobacco control program."
  },
  {
    id: 48,
    question: "Population Attributable Fraction (PAF) for tobacco in cancer refers to:",
    options: ["The percentage of smokers who develop cancer", "The proportion of cancer cases in the total population that can be attributed to tobacco use (i.e., would not occur if tobacco were eliminated)", "The relative risk of cancer in tobacco users", "The number of cancer deaths prevented by tobacco control"],
    answer: 1,
    explanation: "Population Attributable Fraction (PAF) for tobacco = the proportion of total cancer cases in the population that are attributable to tobacco use, and that would be prevented if tobacco exposure were eliminated. PAF depends on both the prevalence of tobacco use in the population and the relative risk of cancer in tobacco users. In India, tobacco accounts for PAF of approximately 50% for oral cancers, 50-60% for lung cancers, making tobacco control the single most important cancer prevention strategy."
  },
  {
    id: 49,
    question: "Lynch syndrome (Hereditary Non-Polyposis Colorectal Cancer - HNPCC) is caused by germline mutations in which genes?",
    options: ["BRCA1 and BRCA2", "APC and MUTYH genes", "MLH1, MSH2, MSH6, PMS2 (DNA mismatch repair genes)", "TP53 and RB1 genes"],
    answer: 2,
    explanation: "Lynch syndrome is caused by germline mutations in DNA mismatch repair (MMR) genes: MLH1, MSH2, MSH6, and PMS2. It is the most common hereditary colorectal cancer syndrome, causing 2-4% of all colorectal cancers. It also increases risk of endometrial, ovarian, gastric, small bowel, urinary tract, and other cancers. Tumors show microsatellite instability (MSI-H). Li-Fraumeni syndrome involves TP53 mutations; FAP involves APC mutations."
  },
  {
    id: 50,
    question: "The primary prevention strategy with the HIGHEST potential impact on cancer burden reduction in India is:",
    options: ["Universal genetic screening for BRCA mutations", "Comprehensive tobacco control (prevention of initiation, promotion of cessation, protection from secondhand smoke)", "Annual cancer screening for all adults above 30", "Mandatory antioxidant supplementation"],
    answer: 1,
    explanation: "Comprehensive tobacco control has the highest potential impact on cancer burden reduction in India. Tobacco is responsible for approximately 40-50% of all male cancers and 20% of female cancers in India. Effective tobacco control includes: price/tax increases (most effective), pictorial health warnings, ban on advertising/promotion/sponsorship, smoke-free environments, cessation support, and mass media campaigns - all components of the MPOWER framework (WHO FCTC). No other single intervention can prevent as many cancer deaths."
  },
];

export default questions;

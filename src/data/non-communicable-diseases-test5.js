const questions = [
  {
    id: 1,
    question: "According to GLOBOCAN 2020, what is the estimated number of new cancer cases globally per year?",
    options: ["10 million", "14.1 million", "19.3 million", "23 million"],
    answer: 2,
    explanation: "GLOBOCAN 2020 estimated approximately 19.3 million new cancer cases globally (excluding non-melanoma skin cancers), with 10 million cancer deaths. This represented a significant increase from the 14.1 million estimated in GLOBOCAN 2012. Asia accounted for nearly half of all new cases, partly due to its large population. These figures underscore the global cancer burden and the need for comprehensive cancer control strategies."
  },
  {
    id: 2,
    question: "The ICMR-NCDIR (National Centre for Disease Informatics and Research) was previously known as:",
    options: ["National Institute of Cancer Prevention and Research (NICPR)", "National Cancer Registry Programme (NCRP)", "Cancer Institute Coordinating Authority", "Indian Cancer Society Registry Directorate"],
    answer: 1,
    explanation: "ICMR-NCDIR was previously known as the National Cancer Registry Programme (NCRP), which was established in 1981. It was restructured and renamed to ICMR-NCDIR (formerly ICMR-NCRP) to reflect its expanded mandate beyond cancer registries to include disease informatics and research. It coordinates the network of Population-Based Cancer Registries (PBCRs) and Hospital-Based Cancer Registries (HBCRs) across India and publishes the annual cancer statistics report."
  },
  {
    id: 3,
    question: "Hospital-Based Cancer Registries (HBCRs) are primarily used for which purpose?",
    options: ["Calculating age-standardized cancer incidence rates for the population", "Monitoring hospital workload, treatment patterns, and institutional survival outcomes", "Estimating cancer prevalence in rural areas", "Calculating population attributable fractions for cancer risk factors"],
    answer: 1,
    explanation: "HBCRs collect data on all cancer patients attending a specific hospital, making them suitable for monitoring hospital workload, treatment patterns, stage distribution at presentation, and institutional survival rates. They cannot be used to calculate true population incidence rates (which require a defined denominator population) - that is the function of PBCRs. HBCRs are valuable for quality of care assessment, training programs, and identifying referral patterns within the health system."
  },
  {
    id: 4,
    question: "Which statement about cancer incidence data from PBCR Annual Report (2012-2016) for Indian females is CORRECT?",
    options: ["Cervical cancer remains the leading cancer in all cities", "Breast cancer is the leading cancer in most urban PBCRs while cervical cancer leads in rural PBCRs", "Ovarian cancer has overtaken cervical cancer nationally", "Colorectal cancer is the second most common female cancer nationally"],
    answer: 1,
    explanation: "PBCR data (2012-2016) shows a clear urban-rural divide for female cancers in India: breast cancer is the leading cancer in most urban PBCRs (Delhi, Mumbai, Bengaluru, Chennai, Kolkata), while cervical cancer remains the leading cancer in rural and semi-urban PBCRs (Barshi, Bhopal rural). This reflects the epidemiological transition occurring in urban areas with changing reproductive patterns, obesity, and reduced breastfeeding, contrasted with persistent HPV infection risk in rural areas with limited screening."
  },
  {
    id: 5,
    question: "Mizoram consistently reports among the highest cancer incidence rates in India, especially for which cancer in males?",
    options: ["Oral cavity cancer", "Lung cancer", "Stomach cancer", "Liver cancer"],
    answer: 1,
    explanation: "Mizoram has the highest age-standardized incidence rate for lung cancer in Indian males, with rates approaching those seen in high-income countries. This is attributed to very high smoking prevalence in Mizoram (one of the highest in India), along with use of smoked meats. Mizoram also has high rates of stomach cancer. The PBCR at Aizawl in Mizoram consistently records these elevated rates, highlighting the need for targeted tobacco control in northeastern states."
  },
  {
    id: 6,
    question: "The Segi World Standard Population used for calculating Age-Standardized Rates (ASR) consists of which total population?",
    options: ["100,000 persons across 5 age groups", "1,000,000 persons across 18 age groups", "100,000 persons across 18 five-year age groups", "10,000 persons across 10 age groups"],
    answer: 2,
    explanation: "The Segi World Standard Population (1960), used by IARC and GLOBOCAN for cancer ASR calculation, consists of a hypothetical population of 100,000 persons distributed across 18 five-year age groups (0-4, 5-9, ..., 85+). The age-specific rates from the observed population are applied to this standard population to calculate the number of expected cases, which are then summed and expressed per 100,000. This allows comparison across populations with different age structures."
  },
  {
    id: 7,
    question: "Which trend in breast cancer incidence in India is MOST accurately described?",
    options: ["Declining in urban areas due to better screening detection", "Rising in both urban and rural areas, more steeply in urban areas, linked to lifestyle changes", "Stable for two decades with no significant change", "Rising only in postmenopausal age groups"],
    answer: 1,
    explanation: "Breast cancer incidence in India is rising in both urban and rural areas, but more steeply in urban areas. This rising trend is linked to lifestyle changes including delayed first childbirth, reduced parity, shorter breastfeeding duration, increased obesity, sedentary lifestyle, and use of oral contraceptives and hormone replacement therapy. The age of onset in India (premenopausal, peak 40-50 years) differs from Western countries (postmenopausal, peak 60-70 years), suggesting different etiological contributions."
  },
  {
    id: 8,
    question: "A cancer registry reports an age-standardized incidence rate of 20 per 100,000 and a mortality rate of 14 per 100,000 for a specific cancer. The Mortality-to-Incidence ratio of 0.70 suggests:",
    options: ["Excellent survival with 70% 5-year survival rate", "Poor prognosis with only 30% surviving, indicating advanced stage diagnosis and/or poor treatment", "The cancer has a 70% cure rate", "70% of cases are detected at early stage"],
    answer: 1,
    explanation: "A Mortality-to-Incidence (M:I) ratio of 0.70 indicates poor prognosis - approximately 70% of diagnosed patients will die from the disease, implying only 30% long-term survival. High M:I ratios are characteristic of cancers presenting at late stages and/or with limited treatment efficacy. For context, India has high M:I ratios for cervical cancer (0.50), stomach cancer (0.80+), and pancreatic cancer (0.90+), while breast cancer M:I in India (0.50) is higher than in USA (0.20), reflecting poorer survival."
  },
  {
    id: 9,
    question: "The IICC (International Incidence of Childhood Cancer) classification system is used in childhood cancer epidemiology for which specific reason?",
    options: ["Children's cancers are classified by stage rather than site like adult cancers", "Childhood cancers are classified primarily by morphology and cell of origin rather than by anatomic site", "IICC provides age-standardized rates using a pediatric standard population", "IICC focuses only on leukemias and lymphomas"],
    answer: 1,
    explanation: "The International Classification of Childhood Cancer (ICCC) classifies childhood cancers primarily by morphology (cell type/histology) and cell of origin rather than by primary anatomic site, as used for adult cancers. This is because childhood cancers are predominantly embryonal tumors and hematologic malignancies where histology defines the entity (e.g., ALL vs AML; Wilms tumor vs neuroblastoma) rather than location. This classification is used by the Automated Childhood Cancer Information System (ACCIS) and IARC for childhood cancer epidemiology."
  },
  {
    id: 10,
    question: "The net survival measure in cancer epidemiology differs from observed survival in that:",
    options: ["Net survival measures only cancer-specific deaths while excluding deaths from other causes", "Net survival includes all deaths regardless of cause", "Net survival is the same as relative survival", "Net survival cannot be calculated using population-based registry data"],
    answer: 0,
    explanation: "Net survival (also called cancer-specific survival or cause-specific survival when using death certificates) represents survival from cancer in the hypothetical scenario where cancer is the only possible cause of death, eliminating competing causes of mortality. It allows comparison of cancer survival between populations with different background mortality rates and age structures. Relative survival (observed survival / expected survival from life tables) is the most common approximation of net survival used in population-based registry studies, including CONCORD studies by LSHTM."
  },
  {
    id: 11,
    question: "Rural cancer registries in India consistently show which pattern compared to urban registries?",
    options: ["Higher rates of breast cancer and lower rates of cervical cancer", "Higher rates of infection-related cancers (cervical, stomach, liver) and lower rates of lifestyle-related cancers (breast, colorectal)", "Similar cancer profiles as urban registries", "Higher rates of lung cancer due to indoor biomass fuel combustion"],
    answer: 1,
    explanation: "Rural PBCRs in India (e.g., Barshi, Wardha) consistently show: higher incidence of infection-attributable cancers including cervical cancer (high HPV prevalence, no screening), stomach cancer (high H. pylori burden), and oral cancer (smokeless tobacco use). Urban PBCRs show higher incidence of lifestyle-related cancers including breast cancer, colorectal cancer, and thyroid cancer. This urban-rural divide reflects differential exposure to infectious agents, lifestyle factors, and access to screening/healthcare."
  },
  {
    id: 12,
    question: "Cancer projections methodology used by ICMR-NCDIR involves which primary approach?",
    options: ["Agent-based modeling using individual patient data", "Age-period-cohort statistical modeling applied to current registry trends with demographic projections", "Machine learning prediction models using social media health data", "Expert consensus Delphi method"],
    answer: 1,
    explanation: "ICMR-NCDIR uses age-period-cohort (APC) statistical modeling applied to historical cancer registry trend data combined with demographic projections (population growth, aging) from census data and UN population projections. The methodology accounts for: age effects (inherent cancer risk at different ages), period effects (changes in exposure, detection), and cohort effects (generational differences in risk factor exposure). The NORDPRED software is commonly used. Projections assume continuation of current trends and are inherently uncertain."
  },
  {
    id: 13,
    question: "The Population Attributable Fraction (PAF) for tobacco in causing lung cancer in Indian males is approximately:",
    options: ["20-30%", "40-50%", "60-80%", "90%+"],
    answer: 2,
    explanation: "The Population Attributable Fraction (PAF) for tobacco (all forms: cigarettes, bidis) in causing lung cancer in Indian males is approximately 60-80%, lower than in Western countries (where it reaches 85-90% in males) due to the significance of indoor air pollution from biomass fuel combustion and occupational exposures as additional risk factors. In Indian females, tobacco PAF for lung cancer is lower (40-50%) because many non-smoking women develop lung cancer due to indoor air pollution from cooking. PAF = [P(RR-1)] / [1 + P(RR-1)] where P is prevalence of exposure."
  },
  {
    id: 14,
    question: "In assessing the carcinogenicity of alcohol, IARC classifies alcohol consumption as which group, and for which cancers?",
    options: ["Group 2A (probable), for breast and colorectal cancer only", "Group 1 (definite carcinogen), for cancers of oral cavity, pharynx, larynx, oesophagus, liver, colorectum, and breast", "Group 2B (possible), for liver cancer only", "Group 3 (not classifiable), as evidence is inconsistent"],
    answer: 1,
    explanation: "IARC classifies alcohol consumption (ethanol) as a Group 1 definite carcinogen for cancers of the oral cavity, pharynx, larynx, oesophagus (squamous cell), liver (hepatocellular carcinoma), colorectum, and female breast. The risk is dose-dependent with no safe threshold - even light drinking increases risk of some cancers (notably breast). Acetaldehyde (the primary metabolite) is the main carcinogenic compound. Alcohol accounts for approximately 5-6% of all cancer deaths globally."
  },
  {
    id: 15,
    question: "The Population Attributable Fraction (PAF) for infection-attributable cancers globally is approximately:",
    options: ["5-8%", "15-20%", "30-35%", "50-55%"],
    answer: 1,
    explanation: "Globally, approximately 15-20% of all cancers are attributable to infectious agents (de Martel et al., Lancet Oncology 2012). The major contributors are: H. pylori (stomach cancer, MALT lymphoma) - 5.5%; HPV (cervical, oropharyngeal, anal, vulvar, vaginal, penile) - 5.2%; HBV (hepatocellular carcinoma) - 3.7%; HCV (hepatocellular carcinoma) - 2.1%; EBV (Burkitt, Hodgkin, nasopharyngeal) - 1.8%. In low- and middle-income countries, the infection-attributable PAF is higher (approximately 25%), while in high-income countries it is lower (approximately 8%)."
  },
  {
    id: 16,
    question: "According to GBD (Global Burden of Disease) 2019 data, ambient air pollution (PM2.5) contributes to what proportion of global lung cancer deaths?",
    options: ["2-5%", "8-10%", "14-16%", "25-30%"],
    answer: 2,
    explanation: "GBD 2019 estimates that ambient particulate matter pollution (PM2.5) is responsible for approximately 14-16% of global lung cancer deaths (approximately 200,000-250,000 deaths annually). In South Asia, particularly India, where PM2.5 levels frequently exceed WHO guidelines by 5-10 times (especially in the Indo-Gangetic Plain), air pollution is an important contributor to lung cancer burden even among non-smokers. Household air pollution from solid fuel combustion adds to this burden, particularly among women."
  },
  {
    id: 17,
    question: "Occupational exposure to which substance is specifically associated with bladder cancer?",
    options: ["Asbestos", "Benzidine and beta-naphthylamine (aromatic amines)", "Vinyl chloride", "Chromium hexavalent"],
    answer: 1,
    explanation: "Aromatic amines, particularly benzidine and beta-naphthylamine, are the classic occupational carcinogens associated with bladder cancer (transitional cell carcinoma). Workers in dye manufacturing, rubber industry, leather industry, and printing industries were historically at high risk. These compounds are hydroxylated in the liver, conjugated, and excreted in urine where they are re-activated by urinary tract epithelium. They are now largely banned in high-income countries but remain occupational hazards in some LMICs including India."
  },
  {
    id: 18,
    question: "The dose-response relationship for ionizing radiation and cancer follows which model, as established by atomic bomb survivor studies?",
    options: ["Threshold model - no risk below a safe threshold dose", "Linear no-threshold (LNT) model - risk increases linearly from zero dose with no safe threshold", "Hormesis model - low doses are protective", "Quadratic model - risk increases exponentially with dose"],
    answer: 1,
    explanation: "The Linear No-Threshold (LNT) model is the accepted model for ionizing radiation carcinogenesis, based primarily on Life Span Study of Japanese atomic bomb survivors (RERF). It assumes cancer risk increases linearly with dose from zero, with no safe threshold. This conservative model is used for radiation protection policy worldwide (ICRP recommendations). Medical radiation (CT scans, fluoroscopy) contributes to cancer risk in the population, supporting the ALARA principle (As Low As Reasonably Achievable)."
  },
  {
    id: 19,
    question: "Which dietary pattern is associated with REDUCED colorectal cancer risk based on epidemiological evidence?",
    options: ["Western diet high in red meat and refined carbohydrates", "High dietary fiber intake from whole grains, fruits, and vegetables", "High animal fat and low carbohydrate (ketogenic) diet", "High dairy and low plant food diet"],
    answer: 1,
    explanation: "High dietary fiber intake is consistently associated with reduced colorectal cancer risk in meta-analyses of prospective cohort studies, with approximately 10% risk reduction per 10g/day increase in total fiber intake. Proposed mechanisms include: reduced transit time, dilution and binding of carcinogens, fermentation to short-chain fatty acids (butyrate is antiproliferative), and modulation of gut microbiome. High consumption of fruits and vegetables is also protective. Conversely, red meat, processed meat, and low-fiber diets increase colorectal cancer risk."
  },
  {
    id: 20,
    question: "Lynch syndrome carriers have an increased lifetime risk of which cancer that is unique compared to BRCA1/2 carriers?",
    options: ["Ovarian cancer", "Pancreatic cancer", "Endometrial cancer (second most common cancer in Lynch syndrome)", "Breast cancer"],
    answer: 2,
    explanation: "Endometrial cancer is the second most common cancer in Lynch syndrome, with lifetime risk of 25-60% depending on the specific MMR gene mutation (highest with MLH1 and MSH2 mutations). This is a critical distinguishing feature from BRCA1/2 carriers where endometrial cancer risk is not significantly elevated. Lynch syndrome also increases ovarian, gastric, small bowel, urinary tract, biliary, brain, and sebaceous gland cancer risks. Women with Lynch syndrome require gynecological cancer surveillance in addition to colorectal cancer screening."
  },
  {
    id: 21,
    question: "Physical inactivity as a cancer risk factor has the highest Population Attributable Fraction (PAF) for which cancer?",
    options: ["Lung cancer", "Breast cancer (postmenopausal)", "Colon cancer", "Prostate cancer"],
    answer: 2,
    explanation: "Colon cancer has the highest PAF attributable to physical inactivity among all cancer types. Physically active individuals have approximately 24% lower colon cancer risk compared to the least active. Proposed mechanisms include: reduced transit time (less contact with carcinogens), reduced insulin/IGF-1 levels, reduced obesity, and reduced inflammatory markers. Breast cancer (postmenopausal) and endometrial cancer also have significant PAFs for physical inactivity. GBD 2019 estimates physical inactivity accounts for approximately 1.5-3% of all cancer deaths."
  },
  {
    id: 22,
    question: "Epidemiological studies of betel quid (with tobacco) users in India show the highest oral cancer risk in which combination?",
    options: ["Betel quid alone (no tobacco, no alcohol)", "Betel quid with tobacco and alcohol combined (multiplicative interaction)", "Cigarette smoking alone", "Alcohol alone without betel quid or tobacco"],
    answer: 1,
    explanation: "The combination of betel quid with tobacco AND alcohol shows multiplicative interaction for oral cancer risk, producing the highest relative risk. Studies from India (particularly from Trivandrum, Mumbai, and northeast India) show that: betel quid alone has RR approximately 2-3; betel quid with tobacco RR approximately 7-10; adding heavy alcohol use further multiplies the risk (RR 20-40+). This reflects the fact that all three carcinogen exposures act on the same target tissue (oral mucosa) through partly independent but synergistic mechanisms."
  },
  {
    id: 23,
    question: "Aflatoxin B1, a mycotoxin produced by Aspergillus molds contaminating stored grains and groundnuts, is a risk factor for which cancer?",
    options: ["Gastric cancer", "Hepatocellular carcinoma (liver cancer)", "Colorectal cancer", "Oesophageal cancer"],
    answer: 1,
    explanation: "Aflatoxin B1 (AFB1) is classified by IARC as a Group 1 carcinogen for hepatocellular carcinoma (HCC). AFB1 is hydroxylated to AFB1-8,9-epoxide which forms adducts with guanine in DNA, causing G to T transversion mutations in codon 249 of the TP53 tumor suppressor gene (a characteristic 'mutation hotspot'). AFB1 acts synergistically with chronic HBV infection in HCC causation. In India, aflatoxin contamination of stored groundnuts, maize, and spices is a concern, particularly in humid post-monsoon storage conditions."
  },
  {
    id: 24,
    question: "In the epidemiology of tobacco-attributable cancer, the concept of 'pack-years' is calculated as:",
    options: ["Number of cigarettes per day divided by 20 multiplied by years of smoking", "Number of packs smoked per day multiplied by number of years smoked", "Total lifetime cigarettes smoked divided by 7300", "Number of cigarettes per day minus age of smoking initiation"],
    answer: 1,
    explanation: "Pack-years = (number of cigarette packs smoked per day) x (number of years smoked). Since 1 pack = 20 cigarettes, smoking 1 pack/day for 30 years = 30 pack-years; smoking 2 packs/day for 15 years = 30 pack-years. Pack-years is a standardized measure of cumulative tobacco exposure used in epidemiological studies and clinical risk assessment (e.g., NLST eligibility required 30+ pack-years). It combines intensity and duration into a single exposure metric, though age at initiation provides additional information about duration of early-life exposure."
  },
  {
    id: 25,
    question: "According to Wilson-Jungner criteria, which statement about the screening test requirement is CORRECT?",
    options: ["The test must have 100% sensitivity with no false negatives", "The test must be acceptable to the target population and performed under agreed quality standards", "The test must replace diagnostic testing (no further workup needed after positive screen)", "The test must be performed by a physician"],
    answer: 1,
    explanation: "Wilson-Jungner criteria state that the screening test must be: acceptable to the population; performed under adequate conditions with agreed-upon definitions of normal and abnormal; available to all members of the target population; and cost-effective. Perfect sensitivity or specificity is not required - screening tests inherently have false positives and negatives. Positive screen results require diagnostic confirmation. Importantly, a two-stage process (screening test followed by diagnostic confirmation) is the expected model, not replacement of diagnosis."
  },
  {
    id: 26,
    question: "The sensitivity and specificity of VIA (Visual Inspection with Acetic Acid) for detecting CIN 2+ lesions is approximately:",
    options: ["Sensitivity 40%, Specificity 95%", "Sensitivity 70-80%, Specificity 70-80%", "Sensitivity 95%, Specificity 95%", "Sensitivity 50%, Specificity 50%"],
    answer: 1,
    explanation: "VIA for detecting CIN 2+ (cervical intraepithelial neoplasia grade 2 or worse) has approximately 70-80% sensitivity and 70-80% specificity in meta-analyses of studies from LMICs. Sensitivity is higher than Pap smear (50-60%) but specificity is lower (Pap smear specificity ~95%). HPV DNA testing has the highest sensitivity (90-95%) with lower specificity (80-90%). The tradeoff for VIA is acceptable for low-resource settings given its simplicity, low cost, immediate result, and feasibility for see-and-treat. VIA requires trained providers for consistent performance."
  },
  {
    id: 27,
    question: "The Number Needed to Screen (NNS) for breast cancer mammography to prevent one breast cancer death is approximately:",
    options: ["50 women screened", "200-250 women screened over 10 years", "1000-2000 women screened over 10 years", "10,000 women screened"],
    answer: 2,
    explanation: "Based on meta-analyses of mammography RCTs, the NNS to prevent one breast cancer death is approximately 1,000-2,000 women invited for screening over 10 years (varies by age group: NNS is lower for 60-69 year olds and higher for 40-49 year olds). For every breast cancer death prevented, approximately 10 women will be over-diagnosed and unnecessarily treated. These NNS figures are higher than often portrayed, fueling the mammography screening debate. The absolute benefit must be weighed against harms including false positives, anxiety, and over-diagnosis."
  },
  {
    id: 28,
    question: "HPV DNA testing as primary cervical cancer screening has which key advantage over Pap smear?",
    options: ["HPV DNA testing requires fewer trained personnel since results are immediate", "HPV DNA testing has significantly higher sensitivity (90-95%) reducing interval cancers, with potential for extended screening intervals", "HPV DNA testing eliminates the need for colposcopy follow-up", "HPV DNA testing is less expensive than Pap smear in all settings"],
    answer: 1,
    explanation: "The primary advantage of HPV DNA testing over Pap smear for cervical cancer screening is its significantly higher sensitivity for detecting CIN 2+ lesions (90-95% vs 50-65% for cytology). This high sensitivity means: (1) fewer interval cancers (cancers occurring between scheduled screens); (2) a negative HPV test provides stronger reassurance, allowing safe extension of screening intervals to 5 years; and (3) better protection with one-time or infrequent screening. However, lower specificity means more women need colposcopy follow-up, and costs are higher in resource-limited settings."
  },
  {
    id: 29,
    question: "The FOBT (Fecal Occult Blood Test)-based colorectal cancer screening program's Number Needed to Screen (NNS) to prevent one CRC death is approximately:",
    options: ["100 persons screened over 10 years", "500 persons screened over 10 years", "1,000-1,200 persons screened over 10 years", "5,000 persons screened over 10 years"],
    answer: 2,
    explanation: "Based on the four landmark colorectal cancer FOBT screening RCTs (Minnesota, Nottingham, Funen, Gothenburg), the NNS to prevent one CRC death over 10 years with annual or biennial FOBT is approximately 1,000-1,200 persons. These trials demonstrated 15-33% relative risk reduction in CRC mortality. The Minnesota trial (annual FOBT) showed the highest mortality reduction (33%). Importantly, colonoscopy (the diagnostic follow-up for positive FOBT) itself carries risks including perforation and bleeding (approximately 1 in 1,000-2,000 procedures)."
  },
  {
    id: 30,
    question: "The NLST (National Lung Screening Trial) demonstrated which key finding about LDCT lung cancer screening?",
    options: ["25% reduction in all-cause mortality with annual LDCT", "20% reduction in lung cancer mortality compared to chest X-ray in high-risk smokers", "50% reduction in lung cancer incidence", "LDCT increased lung cancer overdiagnosis with no mortality benefit"],
    answer: 1,
    explanation: "The NLST (2011, NEJM), enrolling 53,454 high-risk current or former smokers aged 55-74, found that 3 annual LDCT scans reduced lung cancer mortality by 20% compared to chest X-ray. All-cause mortality was reduced by 6.7%. However, 39.1% of LDCT participants had at least one positive result, and 96.4% of positive screens were false positives. The NELSON trial (2020) confirmed these findings with 24% mortality reduction in men. LDCT is currently recommended for eligible high-risk smokers but has implementation challenges including cost, radiation, and false positives."
  },
  {
    id: 31,
    question: "Lead-time bias in cancer screening evaluation means:",
    options: ["Screening programs detect smaller, more slowly growing tumors", "Survival appears improved simply because diagnosis occurs earlier without actually prolonging life", "Screening programs improve survival by catching cancers at a curable stage", "Earlier diagnosis leads to earlier treatment with genuine survival benefit"],
    answer: 1,
    explanation: "Lead-time bias occurs when cancer screening appears to improve survival (measured from diagnosis to death) because the time of diagnosis is advanced (lead time), not because death is actually postponed. For example, if a cancer would be diagnosed symptomatically in 2022 and cause death in 2024 (2-year survival), but screening detects it in 2020 and the person still dies in 2024 (now 4-year survival), survival appears doubled without any actual life extension. To avoid lead-time bias, cancer screening trials should measure cancer-specific MORTALITY at the population level, not survival from diagnosis."
  },
  {
    id: 32,
    question: "Length-time bias in cancer screening evaluation refers to:",
    options: ["Slower-growing (more indolent) cancers are preferentially detected by periodic screening because they have a longer detectable preclinical phase", "Screening programs are longer and therefore detect more cancers", "Cancer prognosis is worse when detected in between scheduled screening intervals", "Screening is more effective in older versus younger age groups"],
    answer: 0,
    explanation: "Length-time bias (also called length-biased sampling) occurs because periodic screening preferentially detects slower-growing, more indolent tumors that have a longer sojourn time (detectable preclinical phase). Rapidly progressing cancers are more likely to occur as interval cancers (between screening rounds). This makes screen-detected cancers appear to have better prognosis than clinically detected cancers, but this is partly an artifact of case mix - not a true treatment benefit. Length-time bias inflates apparent screening benefit in non-randomized comparisons; RCTs with randomization by INVITATION are needed."
  },
  {
    id: 33,
    question: "Under Ayushman Bharat Health and Wellness Centres (HWC), the target population age for cancer screening (oral, cervical, breast) under NPCDCS is:",
    options: ["All individuals above 18 years", "Adults aged 30 years and above", "Women aged 25-65 years only", "Adults aged 40-70 years"],
    answer: 1,
    explanation: "Under the NPCDCS and Ayushman Bharat HWC cancer screening component, the target population for screening of oral cancer (visual examination), cervical cancer (VIA), and breast cancer (clinical breast examination) is adults aged 30 years and above. This threshold was chosen based on the age distribution of these cancers in India and the practicability of implementation at the primary care level. ASHAs and ANMs are trained to perform initial screening, with positive cases referred to Community Health Centres or District Hospitals."
  },
  {
    id: 34,
    question: "The Trivandrum oral cancer screening RCT (Sankaranarayanan et al.) was designed as which type of study, and what was its primary finding?",
    options: ["Case-control study showing 5-fold risk reduction with screening", "Cluster randomized trial showing 34% mortality reduction in tobacco/alcohol users screened by trained health workers", "Cohort study showing 50% reduction in late-stage oral cancer", "Cross-sectional study demonstrating high oral cancer prevalence in Kerala"],
    answer: 1,
    explanation: "The Trivandrum oral cancer screening trial was a cluster randomized controlled trial conducted in Kerala (Sankaranarayanan et al., 2005, Lancet). Clusters of villages were randomized to intervention (visual examination by trained health workers + referral of suspicious lesions) or control. Primary finding: 34% statistically significant reduction in oral cancer mortality among tobacco and/or alcohol users who were screened. This trial provided the world's only RCT evidence for visual examination screening reducing cancer mortality, and formed the evidence base for including oral cancer screening in India's national programs."
  },
  {
    id: 35,
    question: "Quantification of overdiagnosis in prostate cancer PSA screening is challenging because it requires:",
    options: ["Only comparison of PSA-screened vs unscreened cohort survival rates", "Long follow-up to determine the proportion of screen-detected cancers that would never have caused symptoms or death during remaining lifetime, accounting for competing mortality", "Simply counting false positive biopsy results", "Comparison of PSA levels in different age groups"],
    answer: 1,
    explanation: "Quantifying overdiagnosis in PSA screening is methodologically difficult because it requires: (1) very long follow-up (often exceeding natural lifespan) to observe which screen-detected cancers would have remained asymptomatic for life; (2) adjustment for lead time (without which overdiagnosis is overestimated); (3) accounting for competing causes of death (men dying of other causes cannot be evaluated); and (4) data from randomized trials with long follow-up. Estimates of PSA overdiagnosis range widely from 23-84% of screen-detected prostate cancers, reflecting genuine methodological uncertainty."
  },
  {
    id: 36,
    question: "The screening interval for cervical cancer using HPV DNA testing as the primary test is recommended as:",
    options: ["Annual", "Every 2 years", "Every 3 years (same as Pap smear)", "Every 5 years"],
    answer: 3,
    explanation: "Because HPV DNA testing has very high sensitivity (90-95%), a negative HPV test provides strong reassurance that CIN 2+ lesions are absent. This high sensitivity justifies extending the screening interval to every 5 years for HPV-negative women, compared to every 3 years for Pap smear-negative women. The 5-year interval for HPV-based screening is supported by evidence from European trials (NTCC Italy, POBASCAM Netherlands, ARTISTIC UK) and is endorsed by WHO guidelines. This extended interval also makes HPV-based screening feasible in low-resource settings with 1-2 lifetime screens."
  },
  {
    id: 37,
    question: "The organized colorectal cancer screening program using FIT (Fecal Immunochemical Test) as compared to guaiac FOBT has which key advantage?",
    options: ["FIT requires dietary restrictions before collection", "FIT uses antibodies specific to human hemoglobin, eliminating dietary interference, with higher sensitivity for colorectal cancer and advanced adenomas", "FIT is cheaper than guaiac FOBT in all settings", "FIT requires only one stool sample versus three for guaiac FOBT and identifies any gastrointestinal bleeding"],
    answer: 1,
    explanation: "FIT (Fecal Immunochemical Test) advantages over guaiac FOBT: (1) uses antibodies specific to human hemoglobin, so no dietary restrictions (no need to avoid red meat, aspirin, vitamin C as required for gFOBT); (2) higher sensitivity for colorectal cancer (79% vs 69%) and advanced adenomas; (3) requires fewer samples (1 vs 3 for gFOBT); (4) automated analysis reduces subjective interpretation. FIT has largely replaced guaiac FOBT in organized screening programs in Europe, Australia, Japan, and Taiwan. Positivity rate is approximately 5-10%, requiring follow-up colonoscopy."
  },
  {
    id: 38,
    question: "The primary objectives of the National Cancer Control Programme (NCCP) in India include cancer prevention, early detection, and:",
    options: ["Manufacturing cancer drugs domestically to reduce costs", "Strengthening treatment services and palliative care through Cancer Care facilities at different levels of healthcare", "Training all MBBS graduates as oncologists", "Establishing cancer research centers only in IIMs"],
    answer: 1,
    explanation: "India's National Cancer Control Programme (launched 1975, revised 1984-85, integrated into NPCDCS in 2010) has four core objectives: (1) Primary prevention - especially tobacco control; (2) Early detection/screening - screening for common cancers; (3) Strengthening of treatment facilities - Regional Cancer Centres (RCCs), State Cancer Institutes, Oncology Wings in Medical Colleges, Day Care Chemotherapy Centres; (4) Palliative care and pain relief - oral morphine availability, home care. The programme operates through a hub-and-spoke model from RCCs to district hospitals."
  },
  {
    id: 39,
    question: "Cost-effectiveness analysis (CEA) of HPV vaccination in India compared to no vaccination shows that the intervention is:",
    options: ["Not cost-effective because cervical cancer treatment is cheap in India", "Cost-effective or cost-saving particularly when delivered through school-based programs to 9-14 year old girls", "Only cost-effective when combined with adult catch-up vaccination", "Not cost-effective because of cold chain infrastructure requirements"],
    answer: 1,
    explanation: "Multiple cost-effectiveness models for India (Goldie et al., Sankaranarayanan et al.) consistently show HPV vaccination of 9-14 year old girls through school-based programs is cost-effective (ICER well below GDP per capita per DALY averted) or even cost-saving when compared to no vaccination. Key factors: high cervical cancer burden in India (2nd most common female cancer), low cost of domestically produced vaccines (Cervavac, India's quadrivalent HPV vaccine launched 2023), and efficient school-based delivery. Vaccination + screening combinations are most cost-effective."
  },
  {
    id: 40,
    question: "PAF (Population Attributable Fraction)-based priority setting for cancer prevention in India identifies which intervention as having the highest priority?",
    options: ["Obesity prevention through physical activity programs", "Tobacco control programs (eliminating tobacco would prevent the largest proportion of cancers)", "Universal colorectal cancer screening", "Reducing red meat consumption"],
    answer: 1,
    explanation: "PAF-based priority setting for cancer prevention in India consistently identifies tobacco control as the highest priority intervention because: (1) high prevalence of tobacco use (28% of adults use tobacco); (2) high relative risk for multiple cancers (oral, lung, pharyngeal, oesophageal, bladder, kidney, pancreatic cancers); (3) tobacco accounts for approximately 40-50% of male cancers and 20% of female cancers in India; (4) PAF for tobacco exceeds that for all other individual risk factors. Eliminating tobacco would prevent more cancer cases and deaths than any other single intervention."
  },
  {
    id: 41,
    question: "The WHO 90-70-90 cervical cancer elimination strategy targets the following goals by 2030:",
    options: ["90% screening coverage, 70% vaccination coverage, 90% treatment for screen-positive women", "90% of girls vaccinated by age 15, 70% of women screened by age 35 and 45, 90% of those with disease receiving treatment", "90% reduction in cervical cancer incidence, 70% reduction in mortality, 90% 5-year survival", "90% HPV vaccine efficacy, 70% population immunity, 90% cancer registry coverage"],
    answer: 1,
    explanation: "WHO's 90-70-90 global strategy (2020) for cervical cancer elimination by the end of this century requires meeting these targets by 2030 in each country: (1) 90% of girls fully vaccinated with HPV vaccine by age 15; (2) 70% of women screened with a high-performance test by age 35, and again by age 45; (3) 90% of women identified with cervical disease (pre-cancer or invasive) receiving treatment. Countries achieving these targets by 2030 can reduce cervical cancer incidence below the elimination threshold of 4 per 100,000 within decades."
  },
  {
    id: 42,
    question: "The National Cancer Grid (NCG) uses which approach to improve cancer care equity in India?",
    options: ["Mandating all patients to travel to major cancer centers for treatment", "Tumor boards and telemedicine consultations connecting smaller cancer centers to major centers for multidisciplinary opinion", "Providing free cancer drugs from a central pool to all government hospitals", "Training only surgeons in cancer management"],
    answer: 1,
    explanation: "The National Cancer Grid uses tumor boards (multidisciplinary cancer conferences) conducted via telemedicine to connect smaller district/state cancer centers with major cancer centers (Tata Memorial Centre, AIIMS, CMC Vellore, etc.). This allows complex cases to receive multidisciplinary expert opinion without patients needing to travel long distances. NCG also standardizes treatment protocols (tumor site-specific guidelines), provides training programs, facilitates clinical trials, and develops a common electronic medical record system. Over 250 cancer centers are members."
  },
  {
    id: 43,
    question: "Which indicator best measures cancer care access at the population level in India?",
    options: ["Number of cancer hospitals per state", "Stage distribution at diagnosis (proportion presenting at Stage I-II vs Stage III-IV)", "Number of chemotherapy drugs in the essential medicines list", "Proportion of oncologists with fellowship training"],
    answer: 1,
    explanation: "Stage distribution at diagnosis is the best population-level indicator of cancer care access. If the majority of patients present at advanced stage (III-IV), it indicates: poor public awareness, lack of early detection programs, limited healthcare access, financial barriers to seeking care, and ineffective primary care cancer detection. In India, majority of oral, cervical, and breast cancers present at Stage III-IV, unlike in high-income countries. Other indicators include: time from symptom onset to diagnosis, treatment initiation rate, and proportion receiving evidence-based treatment."
  },
  {
    id: 44,
    question: "Cancer survivorship epidemiology in India shows which pattern regarding growing survivor numbers?",
    options: ["India has fewer cancer survivors because of lower incidence", "Improving early detection and treatment has increased the number of cancer survivors, creating need for long-term follow-up care", "Cancer survivor numbers are declining due to better prevention", "Survivorship rates are similar across rural and urban India"],
    answer: 1,
    explanation: "As cancer detection and treatment improve in India, the cancer survivor population is growing - defined as those living after a cancer diagnosis including during treatment, remission, and cure. Currently India has an estimated 3-4 million cancer survivors. Growing survivor numbers create new demands for: surveillance for recurrence and second cancers, management of long-term treatment toxicities (e.g., cardiotoxicity from anthracyclines, neuropathy from taxanes), psychological support, rehabilitation, fertility counseling, and occupational reintegration. India lacks structured survivorship care programs, and most oncologists are focused on active treatment."
  },
  {
    id: 45,
    question: "The importance of cancer registration for cancer policy is best exemplified by which scenario?",
    options: ["Cancer registry data directly determines drug prices in India", "PBCR data showing rising breast cancer incidence led to prioritization of breast cancer screening programs and resource allocation in national programs", "Cancer registry data is used to identify individual patients for government insurance", "HBCRs automatically generate treatment protocols for oncologists"],
    answer: 1,
    explanation: "Cancer registry data directly informs policy through trend analysis. A practical example: consistent PBCR data from NCRP showing rising breast cancer incidence surpassing cervical cancer in urban India led to: (1) prioritization of breast cancer in NPCDCS; (2) inclusion of clinical breast examination in HWC screening protocol; (3) allocation of mammography to district hospitals; (4) awareness campaigns targeting breast cancer. Similarly, high oral cancer rates in tobacco-using populations justified oral cancer visual screening program. Without registry data, cancer control programs would lack an evidence base for prioritization."
  },
  {
    id: 46,
    question: "The mCessation program for tobacco cessation in India, launched by Ministry of Health and Family Welfare, works by which mechanism?",
    options: ["Providing free nicotine replacement therapy by mail to registered users", "Delivering personalized motivational text messages to registered tobacco users on mobile phones to support quitting", "Telemedicine consultations with addiction specialists via mobile app", "Social media campaign targeting tobacco manufacturers"],
    answer: 1,
    explanation: "India's mCessation programme (launched 2016 under WHO FCTC mTobacco Cessation initiative) delivers personalized, motivational text messages (SMS) to tobacco users who voluntarily register (via missed call to 011-22901701). Messages are tailored by tobacco type (smoked vs smokeless), quit status, and motivational stage. Users receive 6 weeks of messages with quit day, pre-quit, and post-quit support. mCessation complements the National Tobacco Quitline (1800-112-356) for telephonic behavioral counseling. Studies show text-based interventions increase quit rates by 1.5-2x compared to no intervention."
  },
  {
    id: 47,
    question: "ICMR's cancer research priorities include which focus area most directly relevant to the Indian cancer burden?",
    options: ["Development of novel immunotherapy drugs for melanoma", "Research on tobacco-related oral and lung cancers, cervical cancer HPV biology, and population-based cancer registry strengthening", "Basic research on rare genetic cancer syndromes", "Development of proton beam therapy technology"],
    answer: 1,
    explanation: "ICMR's cancer research priorities are aligned with India's cancer burden and focus on: (1) tobacco-related cancers - oral, lung, oesophageal - given India's high tobacco use prevalence; (2) cervical cancer - HPV natural history, vaccination implementation, cost-effective screening in Indian settings; (3) breast cancer - biology of premenopausal presentation, genetics in Indian context; (4) strengthening PBCR network and NCRP methodology; (5) cancer prevention trials in Indian populations; (6) traditional medicine integration evidence; and (7) cancer health economics in Indian context. ICMR funds extramural research grants through these priority areas."
  },
  {
    id: 48,
    question: "Cost-effectiveness analysis (CEA) of cancer screening programs compares interventions using which primary metric?",
    options: ["Number of cancers detected per rupee spent", "Incremental Cost-Effectiveness Ratio (ICER) - additional cost per additional DALY averted or life-year gained compared to an alternative", "Total budget expenditure for the screening program", "Number of false positives per 1000 screened"],
    answer: 1,
    explanation: "Cost-effectiveness analysis uses the Incremental Cost-Effectiveness Ratio (ICER) = (Cost of intervention - Cost of comparator) / (Effect of intervention - Effect of comparator), expressed as cost per DALY averted (or cost per life-year gained, or cost per QALYgained). An intervention is considered cost-effective if its ICER falls below the willingness-to-pay threshold (WHO previously recommended 1-3x GDP per capita per DALY, now country-specific thresholds are preferred). For India, cost per DALY averted below approximately USD 1,000-3,000 (INR 80,000-250,000) generally indicates cost-effectiveness."
  },
  {
    id: 49,
    question: "GLOBOCAN 2020 data for India shows the 5 leading cancer sites in Indian males are (in order by incidence):",
    options: ["Prostate, lung, colorectum, stomach, bladder", "Lip/oral cavity, lung, stomach, colorectum, oesophagus", "Lung, prostate, colorectum, stomach, liver", "Breast, lung, colorectum, cervix, thyroid"],
    answer: 1,
    explanation: "According to GLOBOCAN 2020, the top 5 cancers in Indian males by incidence are: (1) Lip, oral cavity - reflecting the high tobacco use burden (smokeless tobacco, bidi); (2) Lung - tobacco smoking and air pollution; (3) Stomach - H. pylori, dietary factors, highest in northeast India; (4) Colorectum - rising with urbanization and dietary changes; (5) Oesophagus - tobacco, alcohol, hot food consumption. This list emphasizes the tobacco dominance in Indian male cancer epidemiology, contrasting with prostate-dominated profiles seen in Western countries."
  },
  {
    id: 50,
    question: "The Primary prevention of infection-attributable cancers in India's comprehensive cancer control strategy includes which set of interventions?",
    options: ["Chemoprevention drugs for all high-risk individuals", "HBV vaccination (UIP), HPV vaccination (UIP since 2023), H. pylori detection and treatment research, aflatoxin food safety standards", "Universal population screening for HCV and HBV", "Antibiotic prophylaxis against H. pylori in high-risk communities"],
    answer: 1,
    explanation: "India's primary prevention strategy for infection-attributable cancers includes: (1) Hepatitis B vaccination in Universal Immunization Programme (since 2002) - prevents HBV-related liver cancer; (2) HPV vaccination introduced in UIP (2023, girls 9-14 years with Cervavac) - prevents cervical and oropharyngeal cancers; (3) Research on H. pylori eradication as stomach cancer prevention (not yet universally implemented); (4) Food safety regulations limiting aflatoxin in grains and groundnuts (FSSAI standards); (5) Blood safety and infection control programs reducing HCV transmission. Vaccination is the most scalable primary prevention for infection-attributable cancers."
  },
];

export default questions;

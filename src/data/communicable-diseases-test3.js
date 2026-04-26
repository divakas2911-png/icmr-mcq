const questions = [
  {
    id: 1,
    question: "According to WHO Global TB Report 2023, which country has the highest absolute number of incident TB cases globally?",
    options: ["India", "China", "Indonesia", "Nigeria"],
    answer: 0,
    explanation: "India accounts for approximately 27% of the global TB burden, consistently ranking first in absolute number of incident TB cases. WHO estimates India had about 2.8 million incident TB cases in 2022, making it the highest-burden country globally."
  },
  {
    id: 2,
    question: "What is the estimated TB incidence rate in India as per WHO Global TB Report 2023 (per 100,000 population per year)?",
    options: ["150-170", "180-190", "195-210", "240-260"],
    answer: 2,
    explanation: "WHO estimates India's TB incidence rate at approximately 199 per 100,000 population per year (2022 data). India contributes about 27% of global TB cases despite comprising about 18% of the world population, reflecting a disproportionately high burden."
  },
  {
    id: 3,
    question: "In which year was the Revised National Tuberculosis Control Programme (RNTCP) officially launched nationwide in India?",
    options: ["1992", "1997", "2000", "2006"],
    answer: 1,
    explanation: "RNTCP was officially launched in 1997 after a pilot phase starting in 1993. It was based on the DOTS strategy and was scaled up to cover the entire country by 2006. In 2020, RNTCP was renamed the National Tuberculosis Elimination Programme (NTEP)."
  },
  {
    id: 4,
    question: "In which year was RNTCP renamed to the National Tuberculosis Elimination Programme (NTEP) and what was the primary rationale?",
    options: ["2018, to align with Sustainable Development Goals", "2020, to reflect India's target of eliminating TB by 2025 - five years ahead of the global End TB target", "2019, to incorporate WHO End TB Strategy", "2017, to integrate TB with HIV programs"],
    answer: 1,
    explanation: "RNTCP was renamed NTEP in 2020 to reflect India's ambitious goal of eliminating TB by 2025, five years ahead of the global End TB Strategy target of 2030. Elimination is defined as fewer than 1 case per million population. The renaming signaled a programmatic shift from control to elimination."
  },
  {
    id: 5,
    question: "Which of the following is NOT one of the five components of the DOTS strategy under RNTCP?",
    options: ["Political commitment with sustained financing", "Case detection through quality-assured bacteriology", "Standardized treatment with patient support and supervision", "Mandatory hospitalization for all smear-positive patients"],
    answer: 3,
    explanation: "The five DOTS components are: (1) Political commitment with sustained financing; (2) Case detection through quality-assured bacteriology; (3) Standardized treatment with supervision and patient support; (4) Effective drug supply and management system; (5) Monitoring and evaluation system. Mandatory hospitalization is NOT a DOTS component - the strategy emphasizes community-based ambulatory treatment."
  },
  {
    id: 6,
    question: "The WHO End TB Strategy targets an 80% reduction in TB incidence and 90% reduction in TB deaths by 2030 compared to 2015. What are the corresponding targets for 2035?",
    options: ["85% incidence reduction and 92% mortality reduction", "90% incidence reduction and 95% mortality reduction", "95% incidence reduction and 99% mortality reduction", "75% incidence reduction and 85% mortality reduction"],
    answer: 1,
    explanation: "The WHO End TB Strategy 2030 milestones are 80% reduction in TB incidence rate and 90% reduction in TB deaths vs 2015 baseline. The 2035 milestones are more ambitious: 90% reduction in incidence and 95% reduction in deaths. The ultimate goal is TB elimination (<1 case per million population) by 2050."
  },
  {
    id: 7,
    question: "Under which legislation was TB made a notifiable disease in India, mandating notification by all healthcare providers including private sector?",
    options: ["Prevention of Food Adulteration Act 1954", "Gazette Notification under Epidemic Diseases Act 1897 (2012)", "Clinical Establishments Act 2010", "National Health Mission Framework 2013"],
    answer: 1,
    explanation: "TB was made a notifiable disease in India through a Gazette Notification in 2012 under the Epidemic Diseases Act 1897. This made it mandatory for all healthcare providers (public and private) to notify TB cases through the Nikshay portal. Non-notification became a punishable offence, enabling capture of private sector case load."
  },
  {
    id: 8,
    question: "Which active case finding strategy specifically involves systematic screening of household and close contacts of confirmed pulmonary TB patients?",
    options: ["Passive case finding", "Intensified case finding at high-risk congregate settings", "Contact tracing", "Population-based prevalence surveys"],
    answer: 2,
    explanation: "Contact tracing involves the systematic identification and examination of household and close contacts of confirmed TB cases. It is a form of active case finding where contacts are proactively screened rather than waiting for self-referral. Studies show approximately 4-10% of household contacts of smear-positive TB patients have active TB disease."
  },
  {
    id: 9,
    question: "What is the approximate yield (proportion diagnosed with active TB) from contact tracing of smear-positive pulmonary TB index cases in high-burden settings?",
    options: ["0.5-1%", "2-5%", "8-12%", "15-20%"],
    answer: 1,
    explanation: "Meta-analyses show approximately 2-5% of household contacts of smear-positive TB patients have active TB disease. This yield is much higher than background prevalence in the general population (0.3-0.5%) and justifies prioritizing contact tracing. Yield is higher among child contacts and HIV-positive contacts."
  },
  {
    id: 10,
    question: "India's National Drug Resistance Survey (NDRS) 2014-16 was designed as a nationally representative survey to estimate drug resistance prevalence in which patient categories?",
    options: ["Only new TB patients never previously treated", "Only previously treated TB patients with treatment failure", "Both new and previously treated TB patients using cluster random sampling", "Only MDR-TB patients referred to designated centers"],
    answer: 2,
    explanation: "The NDRS 2014-16 was India's first nationally representative drug resistance survey estimating resistance in both new and previously treated TB patients using cluster random sampling methodology. It found 2.84% MDR-TB among new cases and 11.7% among previously treated cases, informing India's programmatic MDR-TB response."
  },
  {
    id: 11,
    question: "In a TB prevalence survey, what methodology is used to distinguish TB disease from TB infection at population level?",
    options: ["Tuberculin skin test alone as the primary screening tool", "Chest X-ray screening of all enrolled individuals followed by microbiological confirmation of suspects", "GeneXpert testing of randomly selected survey participants", "Sputum culture of all survey participants without prior screening"],
    answer: 1,
    explanation: "TB prevalence surveys use chest X-ray screening as the primary tool to identify suspects among enrolled individuals, followed by sputum examination (smear microscopy and culture) for microbiological confirmation. This two-step approach is cost-efficient. TST/IGRA measures TB infection, not disease. India conducted a national TB prevalence survey between 2019-2021."
  },
  {
    id: 12,
    question: "TB-HIV co-infection epidemiology demonstrates that HIV-positive individuals have approximately how many times higher risk of developing active TB compared to HIV-negative individuals with similar TB infection exposure?",
    options: ["2-3 times", "5-10 times", "20-30 times", "50-100 times"],
    answer: 2,
    explanation: "HIV-positive individuals have approximately 20-30 times higher risk of developing active TB compared to HIV-negative individuals. This is because HIV profoundly impairs cell-mediated immunity, particularly CD4+ T-lymphocyte function critical for controlling Mycobacterium tuberculosis. TB is the leading cause of death among PLHIV globally, accounting for about one-third of AIDS-related deaths."
  },
  {
    id: 13,
    question: "Under NTEP, what is the current treatment success rate target for new and relapse TB cases, aligned with WHO End TB Strategy?",
    options: ["75%", "85%", "90%", "95%"],
    answer: 2,
    explanation: "NTEP targets a treatment success rate of at least 90% for new and relapse TB cases, aligning with WHO End TB Strategy milestones. Treatment success rate = (Cured + Treatment completed) / (Total enrolled) x 100. India's recent treatment success rates are approximately 83-85% for notified pulmonary TB cases, indicating ongoing gaps to address."
  },
  {
    id: 14,
    question: "The Case Notification Rate (CNR) as a TB program indicator is defined as:",
    options: ["Number of TB deaths per 100,000 population per year", "Number of new and relapse TB cases notified per 100,000 population per year", "Proportion of diagnosed TB cases who successfully complete treatment", "Number of bacteriologically confirmed cases per 1,000 TB suspects examined"],
    answer: 1,
    explanation: "Case Notification Rate (CNR) = (Number of new and relapse TB cases notified / Population) x 100,000, expressed per year. It serves as a proxy indicator for incidence when case detection is complete. India's CNR increased significantly after mandatory notification in 2012, and private sector notifications are tracked to assess coverage gaps."
  },
  {
    id: 15,
    question: "What is the primary function of the Nikshay portal in India's NTEP program?",
    options: ["Drug procurement and supply chain management exclusively", "Case-based web-based surveillance and notification system tracking all TB cases from diagnosis to treatment outcome", "Laboratory quality assurance and proficiency testing management", "Financial management and fund disbursement for TB program"],
    answer: 1,
    explanation: "Nikshay is India's case-based web-based TB surveillance and notification system, mandatory for notifying all TB cases (public and private). It tracks the patient cascade from notification to treatment outcome, links patients to Nikshay Poshan Yojana (nutritional support), facilitates private sector engagement monitoring, and generates program monitoring and evaluation data."
  },
  {
    id: 16,
    question: "Which level of the NTEP organizational hierarchy is directly responsible for program implementation, drug supply, and treatment outcome monitoring at district level?",
    options: ["State TB Officer (STO)", "District TB Officer (DTO)", "Central TB Division (CTD) under MoHFW", "Additional Chief Medical and Health Officer"],
    answer: 1,
    explanation: "The District TB Officer (DTO) is responsible for TB program implementation at district level, overseeing Tuberculosis Units (TU), managing drug supply, supervising microscopy and molecular diagnostic centers, monitoring treatment outcomes, and engaging private sector. The DTO reports to the STO at state level, who reports to Central TB Division (CTD)."
  },
  {
    id: 17,
    question: "Nikshay Poshan Yojana (NPY) under NTEP addresses which epidemiologically established risk factor for TB and poor treatment outcomes?",
    options: ["Tobacco smoking cessation", "Malnutrition and undernutrition", "Diabetes mellitus control", "Indoor air pollution reduction"],
    answer: 1,
    explanation: "Nikshay Poshan Yojana provides Rs. 500 per month as nutritional support to all notified TB patients throughout treatment. Malnutrition is a major risk factor for TB (approximately 3-fold increased risk of developing active TB) and adversely affects treatment outcomes. The direct benefit transfer mechanism ensures funds reach patients while improving treatment adherence and nutrition status."
  },
  {
    id: 18,
    question: "NTEP's laboratory quality assurance is implemented through which tiered network structure?",
    options: ["WHO-certified private laboratories conducting independent audits", "National Reference Laboratories supervising Intermediate Reference Laboratories at state level, which supervise District Reference Laboratories", "ICMR institutes conducting external quality assessment of all TB laboratories", "Single central laboratory with direct supervision of all peripheral laboratories"],
    answer: 1,
    explanation: "NTEP uses a tiered laboratory quality assurance network: National Reference Laboratories (NRL) supervise Intermediate Reference Laboratories (IRL) at state level, which in turn supervise District Reference Laboratories (DRL). EQA mechanisms include panel testing, on-site evaluation, and blinded re-checking of sputum smear slides to ensure diagnostic quality across the network."
  },
  {
    id: 19,
    question: "TB Preventive Treatment (TPT, formerly IPT) under NTEP is primarily indicated for which eligible population groups?",
    options: ["All household contacts of any TB patient regardless of age or HIV status", "PLHIV without active TB disease and children under 5 years who are household contacts of pulmonary TB patients", "All healthcare workers in high TB burden settings with positive TST", "Diabetic patients with positive tuberculin skin test"],
    answer: 1,
    explanation: "Under NTEP, TPT is indicated for PLHIV without active TB (preventing progression from latent TB infection to disease) and children under 5 years who are household contacts of pulmonary TB patients (highest risk of rapid progression). The preferred regimen in India is 6 months of daily isoniazid (6H). Expanding TPT eligibility is a key strategy in India's TB elimination plan."
  },
  {
    id: 20,
    question: "In the hierarchy of TB infection control measures at healthcare facilities, which category of controls is considered highest priority and most effective?",
    options: ["Respiratory protection controls (N95 respirators for all staff)", "Environmental controls (natural ventilation, UV germicidal irradiation, HEPA filtration)", "Administrative controls (early identification, triage, prompt initiation of treatment)", "Personal protective equipment and waste management"],
    answer: 2,
    explanation: "Administrative controls are the highest priority in TB infection control because they reduce transmission at the source by ensuring early identification of TB suspects, prompt triage, reducing time in waiting areas, and initiating treatment quickly (which dramatically reduces infectiousness). Environmental controls are second priority, and respiratory protection is third. Administrative measures are most cost-effective and impactful."
  },
  {
    id: 21,
    question: "Sputum smear conversion at two months (end of intensive phase) is used as a programmatic indicator in NTEP to primarily measure:",
    options: ["Treatment completion rates at the end of the program", "Bacteriological response to treatment and reduction in patient infectiousness as an intermediate outcome", "Diagnostic accuracy of microscopy centers", "Development of drug resistance during treatment"],
    answer: 1,
    explanation: "Two-month sputum smear conversion indicates bacteriological response to treatment and serves as a proxy for reduction in patient infectiousness. As a programmatic indicator, low conversion rates may signal drug resistance, poor treatment adherence, or misdiagnosis. It is an intermediate treatment outcome indicator routinely monitored in NTEP cohort analysis."
  },
  {
    id: 22,
    question: "What has been the overall trend in TB mortality in India over the past two decades based on WHO estimates?",
    options: ["Increasing trend due to rising drug resistance and HIV co-infection", "Stable with no statistically significant change", "Declining trend attributed to DOTS scale-up, improved case detection, and HIV-TB collaboration", "Fluctuating pattern with peaks during 2010-2015 followed by decline"],
    answer: 2,
    explanation: "TB mortality in India has shown a declining trend, attributed to RNTCP/NTEP scale-up, improved case detection through mandatory notification, HIV-TB collaborative activities, and better treatment outcomes. WHO estimates India's TB mortality fell from approximately 42 per 100,000 in 2000 to about 23 per 100,000 in 2022, though absolute numbers remain high due to population size."
  },
  {
    id: 23,
    question: "ICMR's TB research mandate includes which of the following epidemiological and public health research domains?",
    options: ["Drug development and pharmaceutical trials exclusively", "Operational research, drug resistance surveys, TB burden estimation methodology, biomarker discovery, and TB comorbidity research", "Clinical management guidelines development only", "International TB vaccine consortium management only"],
    answer: 1,
    explanation: "ICMR's TB research encompasses multiple domains: operational research on program implementation gaps; nationally representative drug resistance surveys; TB burden estimation methodologies; biomarker discovery for diagnosis and treatment monitoring; TB-diabetes and TB-malnutrition bidirectional research; and evaluation of new diagnostics. ICMR collaborates with NTEP to generate evidence for policy formulation and program improvement."
  },
  {
    id: 24,
    question: "Private sector engagement in NTEP through Nikshay notification requirements primarily aims to achieve which program objective?",
    options: ["Commercializing TB diagnostic services through accreditation", "Capturing TB case notifications from private providers to ensure all cases are detected, treated with quality-assured regimens, and receive patient support benefits", "Providing TB drugs free of cost to all private hospitals and clinics", "Monitoring private sector pharmaceutical drug sales volumes"],
    answer: 1,
    explanation: "Private sector engagement via mandatory Nikshay notification captures TB cases managed by private providers (estimated 50-70% of TB patients initially seek private care in India), ensures linkage to quality treatment, provides patient support (NPY), and helps close the gap between estimated TB incidence and public sector notifications. It is central to India's Universal Drug Susceptibility Testing and patient support strategies."
  },
  {
    id: 25,
    question: "According to UNAIDS 2023 Global AIDS Update, the total global number of people living with HIV (PLHIV) is approximately:",
    options: ["25 million", "39 million", "52 million", "15 million"],
    answer: 1,
    explanation: "UNAIDS 2023 estimates place global PLHIV at approximately 39 million (range 33.1-45.7 million). Sub-Saharan Africa bears the highest burden with about 25.6 million PLHIV (66% of global total). Eastern and Southern Africa has the highest regional burden. Global new HIV infections in 2022 were approximately 1.3 million."
  },
  {
    id: 26,
    question: "NACO's HIV Estimates 2023 place India's total PLHIV population at approximately:",
    options: ["0.8 million", "1.2 million", "2.4 million", "4.0 million"],
    answer: 2,
    explanation: "NACO's HIV Estimates 2023 place India's total PLHIV at approximately 2.4 million (range 1.93-3.04 million). Adult HIV prevalence is approximately 0.20%. India's epidemic is concentrated, primarily affecting key populations (FSW, MSM, PWID, transgender persons) and their sexual partners, rather than being a generalized epidemic."
  },
  {
    id: 27,
    question: "Which states in India have historically been classified as Category A (high HIV prevalence) states under NACP, requiring prioritized intervention resources?",
    options: ["Uttar Pradesh, Bihar, Rajasthan, Madhya Pradesh", "Andhra Pradesh, Karnataka, Maharashtra, Tamil Nadu, Manipur, Nagaland", "Kerala, Goa, Gujarat, Assam", "West Bengal, Odisha, Jharkhand, Chhattisgarh"],
    answer: 1,
    explanation: "High HIV prevalence states in India have been Andhra Pradesh (including Telangana), Karnataka, Maharashtra, Tamil Nadu (southern states with high heterosexual transmission through sex work networks) and Manipur and Nagaland (northeastern states with PWID-driven epidemics). These received prioritized NACP Targeted Interventions and resources during NACP-II and III."
  },
  {
    id: 28,
    question: "India's HIV Sentinel Surveillance (HSS) system uses which study design and what does unlinked anonymous testing (UAT) methodology ensure?",
    options: ["Longitudinal cohort design tracking the same individuals over time", "Cross-sectional surveillance at fixed sites using UAT, where specimens collected for other purposes are de-linked from identifiers before HIV testing, ensuring anonymity", "Population-based random sample household surveys with informed consent for HIV testing", "Case-control design comparing HIV-positive and HIV-negative individuals at clinics"],
    answer: 1,
    explanation: "India's HSS uses cross-sectional unlinked anonymous testing at fixed sentinel sites including ANC clinics (general population proxy), STI clinics, and key population sites (FSW, MSM, PWID, TG). In UAT, blood specimens collected for other purposes (ANC blood work, STI screening) are de-linked from identifiers before HIV testing, ensuring anonymity. Annual rounds provide trend data to monitor epidemic trajectory."
  },
  {
    id: 29,
    question: "The Spectrum/EPP modeling tool used for HIV estimation in India generates national HIV estimates by integrating which data inputs?",
    options: ["Direct counting of all HIV-positive laboratory test results from reporting facilities", "Mathematical modeling combining sentinel surveillance prevalence trends, demographic data, ART coverage and efficacy, and HIV natural history parameters", "Extrapolation from voluntary blood donor HIV screening data alone", "Census-linked household survey data with HIV testing"],
    answer: 1,
    explanation: "Spectrum (with EPP - Estimation and Projection Package) is UNAIDS-supported mathematical modeling software used by NACO. It integrates sentinel surveillance HIV prevalence trends, demographic parameters (population size, fertility, mortality by age/sex), ART coverage and efficacy, pediatric HIV transmission rates, and natural history parameters to estimate HIV incidence, prevalence, AIDS deaths, and PLHIV counts with uncertainty intervals."
  },
  {
    id: 30,
    question: "NACP-IV (2012-2017) had which primary strategic focus compared to earlier phases?",
    options: ["Establishing blood transfusion safety infrastructure for the first time", "Decentralizing program management to states, mainstreaming HIV with general health system, and sustaining prevention while expanding treatment", "Launching the national ART program for the first time in India", "Establishing the Voluntary Counseling and Testing Centre (VCTC) network"],
    answer: 1,
    explanation: "NACP-IV focused on consolidating gains, decentralizing management to State AIDS Control Societies (SACS), mainstreaming HIV with general health services, sustaining TI scale-up, and expanding universal access to treatment. NACP-I (1992-99) focused on blood safety and awareness; NACP-II (1999-2006) on TI scale-up; NACP-III (2007-12) on saturation of high-risk groups and free ART expansion."
  },
  {
    id: 31,
    question: "Targeted Interventions (TIs) under NACP for key populations are designed using which core epidemiological principle of concentrated epidemic control?",
    options: ["Uniform resource distribution across all districts regardless of HIV prevalence", "Concentrating prevention resources on populations with highest HIV incidence and transmission potential to interrupt transmission pathways and reduce epidemic spread cost-effectively", "Providing identical services to all sexually active adults across India", "Geographic hotspot mapping without consideration of behavioral risk profiles"],
    answer: 1,
    explanation: "TIs use the concentrated epidemic model - in India's concentrated epidemic, HIV transmission is driven by key populations (FSW, MSM, PWID, TG) and their sexual/injecting partners. Concentrating prevention resources (condom promotion, STI treatment, peer education, harm reduction, testing) on these groups maximizes cost-effectiveness and addresses the core epidemic drivers as recommended by UNAIDS."
  },
  {
    id: 32,
    question: "India adopted the Test and Treat policy for HIV in 2017. What is its primary epidemiological rationale?",
    options: ["To reduce the government's drug procurement costs through bulk purchasing", "To reduce community viral load through ART-mediated viral suppression, thereby decreasing HIV transmission risk and improving individual health outcomes simultaneously", "To comply with international donor requirements for HIV funding", "To exclusively prevent mother-to-child HIV transmission"],
    answer: 1,
    explanation: "The Test and Treat policy (ART for all PLHIV regardless of CD4 count) is based on Treatment as Prevention (TasP) evidence: ART reduces viral load to undetectable levels, reducing HIV transmission risk by 96% (HPTN 052 trial). The U=U (Undetectable = Untransmittable) principle means virally suppressed individuals cannot sexually transmit HIV, reducing community viral load and epidemic trajectory."
  },
  {
    id: 33,
    question: "The UNAIDS 95-95-95 targets for 2025 (replacing 90-90-90) require monitoring HIV program cascades at population level. What does cascade analysis primarily identify?",
    options: ["Individual patient treatment adherence and appointment keeping", "Bottlenecks in the HIV continuum of care - where the largest proportional losses occur between HIV diagnosis, ART linkage, and viral suppression - to guide resource allocation", "Laboratory quality performance across testing networks", "Cost-effectiveness of different HIV prevention modalities"],
    answer: 1,
    explanation: "Population-level cascade analysis (testing gap, linkage gap, retention gap, viral suppression gap) identifies which step in the HIV care continuum has the largest loss. This guides targeted program strengthening - e.g., if the second 95 (ART coverage) is the bottleneck, linkage interventions are prioritized. NACP uses cascade data disaggregated by key population, age, sex, and geographic area to focus resources."
  },
  {
    id: 34,
    question: "Viral load suppression as a population-level HIV program indicator for the third 95 target is defined as:",
    options: ["Proportion of PLHIV on ART with CD4 count above 200 cells per cubic millimeter", "Proportion of all PLHIV (or all on ART) with HIV RNA below the transmission threshold (typically less than 1000 copies per milliliter)", "Number of viral load tests performed per PLHIV per year as a quality metric", "Proportion of newly diagnosed patients starting ART within 30 days of diagnosis"],
    answer: 1,
    explanation: "Viral load suppression (third 95 target) = proportion of PLHIV on ART with HIV viral load below 1000 copies/mL (or preferably below 200 copies/mL for U=U). As a population indicator, high community viral load suppression rates predict epidemic decline. NACP monitors this through routine viral load testing at ART centers, with suppression rates informing individual and program-level responses."
  },
  {
    id: 35,
    question: "WHO-recommended HIV Drug Resistance Surveillance (HIVDR) methodology includes which specific survey approaches for generating nationally representative estimates?",
    options: ["Retrospective analysis of treatment failure records compiled from ART centers", "Prospective acquired HIVDR surveys at 12 months on ART with viral load testing and genotyping for unsuppressed individuals, plus pretreatment drug resistance surveys in ART-naive persons", "Random population-based blood surveys for resistance mutations in the general population", "Laboratory benchmarking studies comparing genotyping platforms only"],
    answer: 1,
    explanation: "WHO HIVDR surveillance includes: (1) Acquired HIVDR surveys - prospectively following ART initiators, testing viral load at 12 months, and performing genotypic resistance testing on unsuppressed specimens; (2) Pretreatment Drug Resistance (PDR) surveys in ART-naive individuals to detect transmitted resistance; (3) Transmitted Drug Resistance (TDR) surveys in newly diagnosed. Standardized genotypic sequencing protocols ensure comparability."
  },
  {
    id: 36,
    question: "The ICTC (Integrated Counseling and Testing Centre) network in India serves which primary programmatic function within NACP?",
    options: ["Specialized inpatient hospital care for advanced HIV disease management", "Entry point for HIV testing with pre-test and post-test counseling, linkage to ART centers, PMTCT services, and STI treatment at primary and secondary health facilities", "Confirmatory HIV testing laboratory using Western blot for all reactive rapid test samples", "Administrative data collection and reporting center for NACP SIMS"],
    answer: 1,
    explanation: "ICTCs are facility-based entry points providing: HIV pre-test and post-test counseling; HIV testing using rapid test algorithms; linkage to ART centers for reactive individuals; PMTCT services for HIV-positive pregnant women; and STI referral. They are established at district hospitals, CHCs, and PHCs. ICTCs are complemented by mobile ICTCs for outreach and community-based testing approaches."
  },
  {
    id: 37,
    question: "What distinguishes Targeted Interventions for key populations under NACP from general population HIV programs in terms of program delivery strategy?",
    options: ["TIs provide hospitalization facilities exclusively for key populations", "TIs use community-led peer-based outreach through NGO-run programs with community involvement in design, monitoring, and advocacy to overcome stigma barriers and reach hidden populations", "TIs mandate HIV testing of all key population members without consent", "TIs restrict services to government health facilities only"],
    answer: 1,
    explanation: "NACP TIs use peer-based outreach: peers from key populations (FSW, MSM, PWID, TG) are trained as peer educators and outreach workers. NGOs run TIs with community involvement in service design, monitoring, and advocacy. This peer approach overcomes stigma and confidentiality barriers, increases acceptability and trust, and reaches hidden populations not accessible through facility-based programs."
  },
  {
    id: 38,
    question: "Which is the primary program indicator used to monitor PMTCT coverage progress toward virtual elimination of mother-to-child HIV transmission in India?",
    options: ["Number of ANC clinics providing HIV testing", "Proportion of HIV-positive pregnant women who received ART for PMTCT (ART coverage in PMTCT)", "Number of HIV-positive pregnant women identified through sentinel surveillance", "Proportion of infants born to HIV-positive mothers receiving formula feeding"],
    answer: 1,
    explanation: "ART coverage among HIV-positive pregnant women is the primary PMTCT coverage indicator, tracking how many HIV-positive pregnant women received ART to prevent transmission to infants. Complementary indicators include: ANC HIV testing coverage, early infant diagnosis (EID) coverage through DBS testing at 6 weeks, and the final mother-to-child transmission rate at 18 months. WHO's target is <50 new pediatric infections per 100,000 live births."
  },
  {
    id: 39,
    question: "India's PrEP (Pre-Exposure Prophylaxis) rollout strategy under NACP prioritizes which population groups for initial implementation based on epidemic epidemiology?",
    options: ["All sexually active adults aged 18-45 years uniformly", "Key populations (FSW, MSM, TG persons, PWID) and serodiscordant couples at highest measured HIV incidence and risk", "Only healthcare workers with occupational exposure risk", "Only prisoners and institutionalized populations"],
    answer: 1,
    explanation: "India's PrEP rollout prioritizes key populations (FSW, MSM, TG, PWID) and serodiscordant couples as they have the highest HIV incidence and absolute risk, and would benefit most from biomedical prevention. Daily oral PrEP (tenofovir/emtricitabine) has demonstrated >90% efficacy when taken consistently. Targeted PrEP is more cost-effective than universal rollout in India's concentrated epidemic."
  },
  {
    id: 40,
    question: "Which indicator is used to monitor the effectiveness of the blood safety program component of NACP in reducing transfusion-transmitted HIV?",
    options: ["Total number of blood units collected annually", "Proportion of blood units collected from Voluntary Non-Remunerated Blood Donors (VNRBD rate)", "Number of blood banks achieving NABL accreditation", "Number of HIV tests performed in blood banks annually"],
    answer: 1,
    explanation: "Voluntary Non-Remunerated Blood Donor (VNRBD) rate is the primary blood safety indicator because voluntary donors have substantially lower HIV prevalence than paid or replacement donors. India's VNRBD rate improved from below 60% in the early 2000s to over 90% currently. Additional indicators include HIV prevalence among blood donors and nucleic acid testing (NAT) coverage to detect window-period donations."
  },
  {
    id: 41,
    question: "Evidence from Cochrane systematic reviews on harm reduction interventions (Needle Syringe Programs and Opioid Substitution Therapy) among PWID demonstrates which epidemiological outcome?",
    options: ["No significant measurable effect on HIV transmission or injecting risk behaviors", "Significant reduction in HIV incidence (33-51% reduction) and needle-sharing behaviors at sufficient program coverage, with OST additionally reducing injecting frequency", "Increased risk of overdose deaths in communities with NSP programs", "Effectiveness only when combined with mandatory abstinence-based detoxification programs"],
    answer: 1,
    explanation: "Substantial evidence (WHO, Cochrane) demonstrates: NSP reduces needle sharing by 50-75% and HIV incidence by 33-51% among PWID; OST (buprenorphine/methadone) reduces injecting frequency, needle sharing, and HIV risk. These harm reduction interventions are endorsed by WHO and UNAIDS as essential for concentrated epidemics in PWID populations, as seen in northeastern India (Manipur, Nagaland)."
  },
  {
    id: 42,
    question: "Condom social marketing programs under NACP are evaluated using which outcome indicator that reflects behavior change rather than just program output?",
    options: ["Number of condoms manufactured and distributed through program channels", "Condom use at last sex with non-regular or commercial partner (consistent condom use rate) among key populations measured through behavioral surveys", "Revenue generated from subsidized condom sales through social marketing", "Number of condom vending machines installed at targeted locations"],
    answer: 1,
    explanation: "Condom use at last sex with a non-regular or commercial partner (or consistent condom use rate) measured in behavioral surveys (IBBS, Behavioral Tracking Surveys) is the impact indicator for condom social marketing. This behavior change indicator reflects program effectiveness beyond distribution numbers. Program output indicators (condoms distributed, outlet coverage) complement behavioral impact measures in NACP's monitoring framework."
  },
  {
    id: 43,
    question: "The Greater Involvement of People Living with HIV (GIPA) principle in NACP mandates which specific role for PLHIV networks and community-based organizations?",
    options: ["Administrative management and financial control of ART centers", "Meaningful involvement in program design, governance committees, community monitoring, peer support delivery, stigma reduction, and rights-based advocacy", "Laboratory quality assurance for HIV diagnostic testing", "Independent financial auditing of NACP and SACS expenditures"],
    answer: 1,
    explanation: "The GIPA principle, endorsed in NACP and internationally, requires meaningful involvement of PLHIV organizations (like INP+, Positive Women Network) in: SACS program design and governance; community monitoring of service quality; peer support for newly diagnosed individuals; HIV-related stigma and discrimination reduction campaigns; and advocacy for rights of PLHIV. Community involvement improves program accountability and acceptability."
  },
  {
    id: 44,
    question: "ART center coverage monitoring in NACP tracks which combination of access indicators to assess geographic equity?",
    options: ["Number of CD4 testing machines procured for ART centers", "ART coverage rate (proportion of eligible or all PLHIV currently on ART) combined with geographic distribution analysis of ART centers relative to estimated PLHIV distribution by district", "Annual budget per ART center and cost per patient-year on treatment", "Number of qualified physicians assigned to ART centers"],
    answer: 1,
    explanation: "ART coverage (proportion of PLHIV on ART) is the core access indicator tracking progress toward the second 95 target. Geographic distribution analysis maps ART centers against estimated district-level PLHIV to identify underserved areas. Complementary indicators include: time from diagnosis to ART initiation (linkage speed), retention rates at 12 and 24 months, and loss-to-follow-up rates. These together reveal equity and quality of ART access."
  },
  {
    id: 45,
    question: "NACP's monitoring and evaluation framework uses which approach to generate reliable program performance estimates?",
    options: ["Exclusive reliance on facility-based routine reporting through SIMS", "Data triangulation across multiple sources including SIMS/CMIS routine data, HIV Sentinel Surveillance, IBBS, ART cohort monitoring, NFHS, and periodic coverage surveys to validate estimates and identify inconsistencies", "Exclusive reliance on NFHS national survey data for all program indicators", "Only laboratory records from National Reference Laboratories"],
    answer: 1,
    explanation: "NACP's M&E framework triangulates multiple data sources: SIMS/CMIS (facility-based routine reporting), HSS (prevalence trends), IBBS (behavioral and biological data in key populations), ART cohort monitoring (treatment outcomes), NFHS (population-level indicators), and coverage surveys. Triangulation improves reliability, reveals inconsistencies between program reports and independent sources, and guides evidence-based program decision-making."
  },
  {
    id: 46,
    question: "HIV Sentinel Surveillance (HSS) trends in India over the past two decades demonstrate which overall epidemiological pattern at ANC sentinel sites?",
    options: ["Persistently increasing HIV prevalence at ANC sites indicating an expanding generalized epidemic", "Declining HIV prevalence at ANC sites in historically high-burden southern states since 2007, reflecting NACP TI scale-up impact, while localized hotspots persist", "Completely stable prevalence with no temporal trends at any sentinel sites", "Uniform shift of epidemic burden from southern to northern states"],
    answer: 1,
    explanation: "India's HSS shows declining HIV prevalence at ANC sentinel sites in high-burden southern states (AP, Karnataka, Maharashtra, Tamil Nadu) since 2007, validating NACP-III Targeted Intervention scale-up. Northeastern states (Manipur, Nagaland) show variable trends linked to PWID dynamics. These HSS trends informed evidence-based resource reallocation and guided evaluation of NACP's concentrated epidemic control strategy."
  },
  {
    id: 47,
    question: "ICMR's contributions to HIV research in India have primarily addressed which epidemiological and public health research domains?",
    options: ["Pharmaceutical drug synthesis and pharmacokinetics research exclusively", "HIV natural history in Indian settings, burden estimation methodology, HIV vaccine efficacy trial coordination, ART program evaluation, PMTCT operational research, and TB-HIV co-infection studies", "Basic immunology and molecular virology research exclusively", "International multicenter clinical trial management and coordination only"],
    answer: 1,
    explanation: "ICMR contributions span: natural history studies of HIV in Indian populations; burden estimation methodology development; coordination of HIV vaccine efficacy research (with IAVI, HVTN); evaluation of India's ART program outcomes; PMTCT operational research; TB-HIV co-infection epidemiology studies; and drug resistance surveillance. ICMR's National Institute of Medical Statistics contributes to HIV burden estimation methodological development for NACO."
  },
  {
    id: 48,
    question: "Integrated Biological and Behavioral Surveillance (IBBS) among key populations differs from routine HIV Sentinel Surveillance in which fundamental way?",
    options: ["IBBS uses only biological HIV testing without any behavioral data collection", "IBBS simultaneously collects biological specimens for HIV and STI testing AND structured behavioral data through respondent-driven sampling or time-location sampling to reach community-dwelling hidden populations", "IBBS is conducted only at government health facilities serving key populations", "IBBS measures general population prevalence rather than key population-specific prevalence and risk"],
    answer: 1,
    explanation: "IBBS simultaneously collects biological (HIV, STI testing) and behavioral (risk practices, condom use, healthcare-seeking, knowledge) data from key populations using probability-based sampling methods like Respondent-Driven Sampling (RDS) or time-location sampling. Unlike facility-based sentinel surveillance, IBBS reaches community-dwelling key populations who may not attend health facilities, providing both prevalence estimates and behavioral risk data to design and evaluate TIs."
  },
  {
    id: 49,
    question: "The Link Worker Scheme under NACP was specifically designed to reduce HIV risk in which epidemiologically defined population segment?",
    options: ["Urban slum populations with generalized HIV risk", "Bridge populations (migrant workers, truckers, male clients of sex workers, seasonal laborers) in peri-urban and rural settings who transmit HIV between core key populations and the general population", "Intravenous drug users in metropolitan cities requiring harm reduction", "Healthcare workers in high-burden districts with occupational risk"],
    answer: 1,
    explanation: "The Link Worker Scheme targets bridge populations - migrant workers, long-distance truckers, male clients of sex workers, and seasonal laborers in peri-urban and rural areas. These groups are at intermediate HIV risk and serve as epidemiological transmission bridges between core key populations (FSW) and the general population. Link workers provide community-based peer outreach, condom promotion, STI referral, HIV testing linkage, and behavior change communication."
  },
  {
    id: 50,
    question: "Which programmatic indicator best measures the efficiency of HIV testing programs in identifying new HIV diagnoses among key populations under NACP's testing strategy?",
    options: ["Total number of HIV tests performed annually across all program facilities", "HIV positivity rate (proportion of tests returning HIV-positive results) among key populations tested through targeted community outreach, reflecting testing yield and program efficiency", "Cost per HIV test performed as a financial efficiency measure", "Proportion of HIV tests performed at community versus facility settings"],
    answer: 1,
    explanation: "HIV positivity rate (yield) measures testing program efficiency - the proportion of tests identifying new HIV-positive individuals. High-yield testing concentrating on key populations with higher HIV prevalence identifies more PLHIV per test and is more cost-effective than low-yield testing in low-prevalence populations. WHO's strategic testing guidance recommends optimizing positivity yield as part of the efficiency agenda within the 95-95-95 strategy, ensuring testing resources are directed where the epidemic is concentrated."
  }
];

export default questions;

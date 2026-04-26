const questions = [
  {
    id: 1,
    question: "According to the Global TB Report 2023, which country has the highest estimated TB incidence in absolute numbers?",
    options: ["India", "China", "Indonesia", "South Africa"],
    answer: 0,
    explanation: "India accounts for approximately 27% of the global TB burden, making it the country with the highest number of estimated TB incident cases in the world. The Global TB Report 2023 estimated approximately 2.8 million incident TB cases in India in 2022."
  },
  {
    id: 2,
    question: "The estimated TB incidence rate in India as per the Global TB Report 2023 is approximately:",
    options: ["195 per 100,000 population", "210 per 100,000 population", "312 per 100,000 population", "450 per 100,000 population"],
    answer: 0,
    explanation: "As per the Global TB Report 2023, India's estimated TB incidence rate is approximately 195 per 100,000 population per year. This figure includes all forms of TB (pulmonary and extra-pulmonary)."
  },
  {
    id: 3,
    question: "RNTCP (Revised National TB Control Programme) was renamed to NTEP (National Tuberculosis Elimination Programme) in which year?",
    options: ["2017", "2018", "2019", "2020"],
    answer: 2,
    explanation: "RNTCP was renamed to NTEP (National Tuberculosis Elimination Programme) in 2019 to reflect India's commitment to eliminating TB by 2025, five years ahead of the global target of 2030 set under the WHO End TB Strategy."
  },
  {
    id: 4,
    question: "The five components of the DOTS (Directly Observed Treatment Short-course) strategy include all of the following EXCEPT:",
    options: ["Government commitment", "Case detection by sputum smear microscopy", "Standardized short-course chemotherapy under direct observation", "Mass chemoprophylaxis for high-risk groups"],
    answer: 3,
    explanation: "The five components of DOTS are: (1) Government commitment, (2) Case detection by quality sputum smear microscopy, (3) Standardized short-course chemotherapy under direct observation, (4) Uninterrupted supply of quality drugs, and (5) Systematic recording and reporting system. Mass chemoprophylaxis is not a component of DOTS."
  },
  {
    id: 5,
    question: "Under NTEP, TB notification is mandatory for both public and private sector providers under which Act?",
    options: ["The Epidemic Diseases Act, 1897", "The Clinical Establishments Act, 2010", "Gazette notification under the Tuberculosis Control Act", "Gazette notification under the Public Health (Prevention, Control and Management of Epidemics, Bio-terrorism and Disasters) Act"],
    answer: 0,
    explanation: "TB was made a notifiable disease in India in 2012 under the Epidemic Diseases Act, 1897. All healthcare providers including private practitioners are mandated to notify every diagnosed TB case to the government, with non-compliance being punishable under this Act."
  },
  {
    id: 6,
    question: "Active Case Finding (ACF) in NTEP primarily targets which of the following groups?",
    options: ["All individuals above 60 years of age", "Contacts of TB patients, high-risk groups, and vulnerable populations in selected geographies", "Only sputum smear-positive contacts", "School children in high-burden districts"],
    answer: 1,
    explanation: "Active Case Finding under NTEP targets high-risk groups including household contacts of TB patients, people living in congregate settings (prisons, old-age homes), people living with HIV, malnourished individuals, tribal populations, and other vulnerable groups. It also includes geographic mapping of high-burden areas."
  },
  {
    id: 7,
    question: "Index case contact tracing under NTEP requires that all household contacts of a sputum smear-positive TB case be evaluated. The recommended yield of new TB cases from contact tracing in high-burden settings is approximately:",
    options: ["0.5-1% of contacts", "2-4% of contacts", "5-10% of contacts", "15-20% of contacts"],
    answer: 1,
    explanation: "Studies from high-burden settings including India show that contact tracing of smear-positive TB patients yields approximately 2-4% new TB cases among household contacts. This justifies systematic contact investigation as a key strategy in TB control programs."
  },
  {
    id: 8,
    question: "The recommended management of TB-HIV co-infection regarding timing of ART initiation is:",
    options: ["ART should be started only after completing 6 months of ATT", "ART should be started within 2-8 weeks of starting ATT, regardless of CD4 count", "ART should be started simultaneously with ATT on day 1", "ART initiation depends on CD4 count; start within 2 weeks if CD4 <50 cells/mm3"],
    answer: 3,
    explanation: "For TB-HIV co-infected patients: if CD4 count is less than 50 cells/mm3, ART should be started within 2 weeks of initiating ATT (due to high mortality risk). If CD4 is 50 cells/mm3 or more, ART can be started within 8 weeks of ATT. This is per WHO and NACP guidelines to reduce immune reconstitution inflammatory syndrome (IRIS) risk."
  },
  {
    id: 9,
    question: "India's target for TB elimination under the End TB strategy is to achieve less than what incidence rate per 100,000 population by 2025?",
    options: ["10 per 100,000", "44 per 100,000", "100 per 100,000", "150 per 100,000"],
    answer: 0,
    explanation: "India's National Strategic Plan (NSP) 2017-2025 for TB Elimination aims to achieve less than 10 TB cases per 100,000 population by 2025, which is the threshold for TB elimination. This is aligned with Prime Minister's commitment to eliminate TB by 2025, five years ahead of the global 2030 SDG target."
  },
  {
    id: 10,
    question: "The National Drug Resistance Survey (NDRS) 2014-2016 in India found that the proportion of MDR-TB among new TB cases was approximately:",
    options: ["1.3%", "2.8%", "6.2%", "11.4%"],
    answer: 1,
    explanation: "The National Drug Resistance Survey (NDRS) 2014-2016 found that MDR-TB prevalence among new TB cases in India was 2.84% (approximately 2.8%), while among previously treated cases it was 11.76%. This survey provided nationally representative data on drug resistance for programmatic planning."
  },
  {
    id: 11,
    question: "TB prevalence is BEST defined as:",
    options: ["Number of new TB cases occurring in a population per unit time", "Total number of TB cases existing in a population at a given point in time", "Number of TB deaths per 100,000 population per year", "Number of smear-positive TB cases per 100,000 population"],
    answer: 1,
    explanation: "TB prevalence is the total number of TB cases (new and previously treated) existing in a population at a given point in time, expressed per 100,000 population. It is a point prevalence measure. TB incidence refers to the number of new cases arising per unit time in a defined population."
  },
  {
    id: 12,
    question: "Nikshay portal in India is used for:",
    options: ["Only drug procurement and supply chain management for TB", "Online TB case notification, patient tracking, treatment outcome recording, and benefit transfer under Nikshay Poshan Yojana", "Sentinel surveillance of drug-resistant TB only", "Mapping of TB laboratories and diagnostic centers"],
    answer: 1,
    explanation: "Nikshay (meaning 'repository of TB' in Hindi) is the national web-based TB patient monitoring system. It is used for mandatory TB notification by all public and private providers, patient tracking throughout treatment, treatment outcome recording, and facilitating the Nikshay Poshan Yojana (nutritional support of Rs. 500/month to TB patients)."
  },
  {
    id: 13,
    question: "BCG vaccine provides maximum protection against which form of tuberculosis?",
    options: ["Adult pulmonary TB", "Miliary TB and TB meningitis in children", "Smear-positive pulmonary TB in adults", "Latent TB infection"],
    answer: 1,
    explanation: "BCG vaccine provides the best protection against severe disseminated forms of TB in children, particularly miliary TB (70-80% efficacy) and TB meningitis (64-86% efficacy). Its protection against adult pulmonary TB is variable (0-80%), which is why it does not prevent the transmission cycle in high-burden countries."
  },
  {
    id: 14,
    question: "Under India's National Immunization Schedule, BCG is given at:",
    options: ["Birth or as early as possible up to 1 year of age", "6 weeks of age", "At birth and a booster at 5 years", "Only to HIV-negative neonates at birth"],
    answer: 0,
    explanation: "Under India's National Immunization Schedule, BCG is given at birth or as early as possible up to 1 year of age. It is a single dose given intradermally in the left upper arm. BCG should not be given to symptomatic HIV-positive infants, though asymptomatic HIV-exposed infants may receive it."
  },
  {
    id: 15,
    question: "Which of the following is an absolute contraindication to BCG vaccination?",
    options: ["Low birth weight infant (1.5-2 kg)", "Mild fever (temperature 37.5-38 degrees Celsius)", "Symptomatic HIV infection in the infant", "Family history of keloid formation"],
    answer: 2,
    explanation: "Symptomatic HIV infection in the infant is an absolute contraindication to BCG vaccination due to the risk of disseminated BCG disease (BCG-osis). Asymptomatic HIV-exposed infants may receive BCG. Other contraindications include severe combined immunodeficiency and other primary immunodeficiency conditions. Low birth weight per se is not a contraindication."
  },
  {
    id: 16,
    question: "INH Preventive Therapy (IPT) under NTEP is recommended for all of the following EXCEPT:",
    options: ["Child under 5 years who is a household contact of sputum smear-positive TB case", "PLHIV who has no active TB", "Healthcare workers with documented tuberculin skin test conversion", "All household contacts of MDR-TB patients"],
    answer: 3,
    explanation: "INH Preventive Therapy (IPT) is recommended for: children under 5 years who are household contacts of smear-positive TB (6 months INH); PLHIV without active TB (6-36 months INH or 3HP regimen); and TST converters in high-risk groups. IPT is NOT recommended for contacts of MDR-TB patients because INH alone is ineffective against MDR-TB, and there is no established preventive therapy regimen for MDR-TB contacts."
  },
  {
    id: 17,
    question: "In hospital infection control for TB, the hierarchy of controls in order of priority is:",
    options: ["Personal protective equipment (N95 respirators) > Environmental controls > Administrative controls", "Administrative controls > Environmental controls > Personal protective equipment (respiratory protection)", "Environmental controls > Administrative controls > Personal protective equipment", "All three have equal priority and should be implemented simultaneously"],
    answer: 1,
    explanation: "The WHO hierarchy of TB infection control prioritizes: (1) Administrative controls (most important - triage, separation of coughing patients, reducing time in health facilities, cough etiquette, fast-tracking TB suspects), (2) Environmental controls (natural ventilation, mechanical ventilation, UV germicidal irradiation), and (3) Personal protective equipment (N95 respirators for healthcare workers exposed to infectious TB). Administrative controls are most important because they reduce exposure at the source."
  },
  {
    id: 18,
    question: "For sputum collection for TB diagnosis under NTEP using the Xpert MTB/RIF assay, the recommended minimum volume of sputum is:",
    options: ["0.5 ml", "1 ml", "2 ml", "5 ml"],
    answer: 2,
    explanation: "For sputum collection for TB diagnosis using Xpert MTB/RIF (CBNAAT), a minimum of 2 ml of sputum is required for the assay. The recommended volume is 2-4 ml. Sputum should be mucopurulent (not saliva), collected early morning, and transported in a sterile wide-mouthed container with a tight lid."
  },
  {
    id: 19,
    question: "Under NTEP, the treatment regimen for new drug-sensitive TB (DS-TB) patients (Category I equivalent) is:",
    options: ["2HRZE / 4HR (daily), weight-band based dosing", "2HRZES / 1HRZE / 5HRE", "2HRZE / 4H3R3 (thrice weekly)", "6 months of HRZE throughout"],
    answer: 0,
    explanation: "Under the current NTEP regimen for new DS-TB patients, the standard treatment is 2HRZE/4HR using daily fixed-dose combinations (FDCs) with weight-band based dosing. This replaced the previous thrice-weekly regimen (2HRZE/4H3R3). The intensive phase is 2 months of HRZE and the continuation phase is 4 months of HR."
  },
  {
    id: 20,
    question: "Directly Observed Therapy (DOT) in NTEP is BEST described as:",
    options: ["Only health worker administered treatment in a health facility", "Treatment observed by any trained DOT provider including community volunteers, ASHA workers, or family members (non-family preferred)", "Video-observed therapy only for MDR-TB patients", "Supervision limited to the first 2 months of treatment"],
    answer: 1,
    explanation: "DOT in NTEP means every dose of treatment is observed by a trained DOT provider. This can be an ASHA worker, community volunteer, NGO worker, or health facility staff. Family members are generally not preferred as DOT providers (conflict of interest), though they may be used when no alternative exists. Video-observed therapy (VOT) is also being explored. DOT applies throughout the entire treatment course."
  },
  {
    id: 21,
    question: "The shorter MDR-TB treatment regimen (9-12 months) recommended under NTEP contains which key drugs?",
    options: ["Bedaquiline, Linezolid, Clofazimine, Cycloserine", "Kanamycin, Moxifloxacin, Prothionamide, Isoniazid, Clofazimine, Pyrazinamide, Ethambutol", "Bedaquiline, Pretomanid, Linezolid (BPaL regimen)", "Amikacin, Levofloxacin, Ethionamide, Cycloserine"],
    answer: 1,
    explanation: "The conventional shorter MDR-TB regimen (9-12 months) includes: Kanamycin (or Amikacin), high-dose Moxifloxacin, Prothionamide, Clofazimine, high-dose Isoniazid, Pyrazinamide, and Ethambutol in the intensive phase (4-6 months), followed by Moxifloxacin, Clofazimine, Pyrazinamide, and Ethambutol in continuation. The BPaL regimen (Bedaquiline-Pretomanid-Linezolid) is used for XDR-TB."
  },
  {
    id: 22,
    question: "Bedaquiline's primary mechanism of action in MDR-TB treatment is:",
    options: ["Inhibition of cell wall mycolic acid synthesis", "Inhibition of mycobacterial ATP synthase (energy metabolism)", "Inhibition of DNA gyrase (topoisomerase II)", "Inhibition of protein synthesis at 30S ribosomal subunit"],
    answer: 1,
    explanation: "Bedaquiline is a diarylquinoline antibiotic that selectively inhibits mycobacterial ATP synthase (the proton pump), thereby disrupting energy metabolism of Mycobacterium tuberculosis. It is bactericidal for both replicating and non-replicating (dormant) bacteria. Its unique mechanism of action makes it effective against drug-resistant strains including MDR-TB and XDR-TB."
  },
  {
    id: 23,
    question: "Delamanid, used in treatment of MDR-TB, belongs to which drug class and its primary action is:",
    options: ["Oxazolidinone; inhibits protein synthesis", "Nitroimidazole; inhibits mycolic acid synthesis and produces toxic nitric oxide intermediates", "Diarylquinoline; inhibits ATP synthase", "Cycloserine analogue; inhibits peptidoglycan synthesis"],
    answer: 1,
    explanation: "Delamanid is a nitroimidazo-oxazole compound. It inhibits mycolic acid synthesis (both methoxy- and keto-mycolic acids) and generates reactive nitrogen intermediates (reactive oxygen species) within the mycobacterium. It is used as an add-on drug for MDR-TB and XDR-TB when adequate regimens cannot be constructed with available drugs."
  },
  {
    id: 24,
    question: "Under the Nikshay Poshan Yojana (NPY), TB patients in India receive nutritional support of:",
    options: ["Rs. 300 per month for the duration of treatment", "Rs. 500 per month for the duration of treatment", "Rs. 1000 per month for 6 months only", "A one-time payment of Rs. 5000"],
    answer: 1,
    explanation: "Under the Nikshay Poshan Yojana launched in 2018, all TB patients notified on Nikshay receive a direct benefit transfer (DBT) of Rs. 500 per month for the entire duration of treatment to meet nutritional needs. This is in recognition of the bidirectional relationship between TB and malnutrition."
  },
  {
    id: 25,
    question: "According to UNAIDS 2023 data, the global number of people living with HIV (PLHIV) is approximately:",
    options: ["19 million", "29 million", "39 million", "49 million"],
    answer: 2,
    explanation: "As per UNAIDS Global AIDS Update 2023, approximately 39 million people were living with HIV globally at the end of 2022. Sub-Saharan Africa remains the most affected region, accounting for approximately two-thirds of all PLHIV globally."
  },
  {
    id: 26,
    question: "As per NACO (National AIDS Control Organisation) estimates, the number of People Living with HIV (PLHIV) in India is approximately:",
    options: ["1.5 million", "2.4 million", "3.8 million", "5.1 million"],
    answer: 1,
    explanation: "As per NACO's India HIV Estimates 2023, there are approximately 2.4 million PLHIV in India. The adult HIV prevalence is approximately 0.2%, which is well below the generalized epidemic threshold of 1%. India has an overall low prevalence but concentrated epidemic in certain states and key populations."
  },
  {
    id: 27,
    question: "Which states in India are classified as high HIV prevalence states (adult HIV prevalence >1%)?",
    options: ["Uttar Pradesh, Bihar, Rajasthan, Madhya Pradesh", "Manipur, Mizoram, Nagaland, Andhra Pradesh, Telangana, Karnataka", "Maharashtra, Gujarat, West Bengal, Delhi", "Tamil Nadu, Kerala, Odisha, Jharkhand"],
    answer: 1,
    explanation: "The high HIV prevalence states in India (with adult HIV prevalence historically above 1% or significant burden) include the North-Eastern states (Manipur, Mizoram, Nagaland - with high prevalence among PWID) and Southern states (Andhra Pradesh, Telangana, Karnataka - with high prevalence among heterosexual populations). Maharashtra also has high absolute numbers."
  },
  {
    id: 28,
    question: "HIV Sentinel Surveillance (HSS) in India is conducted annually at which sites?",
    options: ["Only at ART centers in district hospitals", "At Antenatal Clinics (ANC), STI clinics, targeted intervention sites for key populations, and general population sites", "Only in high HIV prevalence states", "At all primary health centers in rural areas"],
    answer: 1,
    explanation: "HIV Sentinel Surveillance in India is conducted annually at unlinked anonymous testing sites including: Antenatal Clinics (ANC) for general population measurement, STI/RTI clinics, Integrated Counselling and Testing Centres (ICTC), and targeted intervention sites for key populations (FSW, MSM, PWID, migrants, truckers). ANC sentinel surveillance is the primary tool for monitoring HIV trends in the general population."
  },
  {
    id: 29,
    question: "The WHO/NACO HIV testing strategy for diagnosis requires confirmation using a three-test algorithm (A1, A2, A3). A person is declared HIV positive when:",
    options: ["A1 is reactive", "A1 and A2 are both reactive", "A1, A2, and A3 are all reactive", "Any two out of three tests are reactive"],
    answer: 2,
    explanation: "Under the NACO/WHO HIV testing strategy for diagnosis (serial testing strategy), a person is declared HIV positive only when all three tests (A1, A2, A3) using three different HIV tests are reactive. The three tests must have different antigen/antibody preparations. If A1 is non-reactive, the person is declared HIV negative. If A1 reactive and A2 non-reactive, the specimen is indeterminate and requires additional testing."
  },
  {
    id: 30,
    question: "Integrated Counselling and Testing Centres (ICTC) in India provide which services?",
    options: ["Only HIV testing without counselling", "Pre-test counselling, HIV testing, post-test counselling, and referral to care and treatment", "HIV testing and ART initiation at the same site", "Only testing for key populations (FSW, MSM, PWID)"],
    answer: 1,
    explanation: "ICTCs (now also called Facility-Integrated Counselling and Testing Centres - FICTC) provide a package of services: pre-test information/counselling, HIV testing using the three-test serial algorithm, post-test counselling (for both positive and negative results), referral and linkage to treatment (ART centres), and prevention services. They serve as the gateway to HIV prevention, care, and treatment services."
  },
  {
    id: 31,
    question: "NACP Phase IV (National AIDS Control Programme Phase IV) covered the period:",
    options: ["2001-2007", "2007-2012", "2012-2017", "2017-2024"],
    answer: 2,
    explanation: "NACP Phase IV covered 2012-2017. NACP-I (1992-1999) focused on establishing surveillance and prevention infrastructure; NACP-II (1999-2006) scaled up prevention; NACP-III (2007-2012) aimed at 'halting and reversing the epidemic'; NACP-IV (2012-2017) aimed at 'accelerating reversal and mainstreaming'. India's current HIV program continues under subsequent national health programs."
  },
  {
    id: 32,
    question: "Targeted Interventions (TI) under NACP are designed for which populations?",
    options: ["General population in all districts", "Key populations at higher risk: Female Sex Workers (FSW), Men who have Sex with Men (MSM), People who Inject Drugs (PWID), Transgender persons, migrants, truckers", "Only HIV-positive individuals needing treatment", "Children born to HIV-positive mothers"],
    answer: 1,
    explanation: "Targeted Interventions (TI) under NACP are focused, evidence-based interventions for key populations at higher risk of HIV including Female Sex Workers (FSW), Men who have Sex with Men (MSM), People who Inject Drugs (PWID), Transgender/Hijra persons, migrants, bridge populations (truckers, male migrant workers). TIs provide outreach, STI treatment, condom promotion, HIV testing, and linkage to care."
  },
  {
    id: 33,
    question: "India's 'Test and Treat' policy for HIV, meaning ART is offered to all HIV-positive individuals regardless of CD4 count, was adopted in:",
    options: ["2013", "2015", "2017", "2019"],
    answer: 2,
    explanation: "India adopted the 'Universal Test and Treat' (UTT) policy in April 2017, under which all HIV-positive individuals are offered ART regardless of their CD4 count or clinical stage. This followed the WHO 2016 Consolidated Guidelines recommendation and was accelerated by evidence from the START trial showing benefits of early ART at all CD4 counts."
  },
  {
    id: 34,
    question: "The UNAIDS 95-95-95 targets for 2030 mean:",
    options: ["95% of PLHIV know status, 95% of those on treatment, 95% of those virally suppressed", "95% HIV incidence reduction, 95% AIDS-related mortality reduction, 95% reduction in HIV stigma", "95% testing coverage, 95% ART coverage, 95% PMTCT coverage", "95% of key populations reached, 95% condom use, 95% viral suppression"],
    answer: 0,
    explanation: "The UNAIDS 95-95-95 targets for 2030 mean: 95% of all PLHIV know their HIV status; 95% of those who know their status are on antiretroviral therapy; and 95% of those on ART achieve viral suppression (viral load <1000 copies/ml). Previously the 90-90-90 targets were for 2020. Achieving 95-95-95 would lead to 86% of PLHIV being virally suppressed."
  },
  {
    id: 35,
    question: "Viral load suppression is defined by WHO as HIV RNA viral load below:",
    options: ["50 copies/ml", "200 copies/ml", "400 copies/ml", "1000 copies/ml"],
    answer: 3,
    explanation: "WHO defines viral load suppression (for public health/programmatic purposes) as HIV RNA viral load less than 1000 copies/ml. This threshold is used in the 90-90-90 and 95-95-95 targets. For clinical purposes, full suppression is often considered as below 50 copies/ml, but the programmatic definition and NACO monitoring standard use <1000 copies/ml."
  },
  {
    id: 36,
    question: "Community-based HIV testing in India is known as:",
    options: ["Rapid Field Testing (RFT)", "Community-Based Testing (CBT) or HIV Self-Testing", "Mobile ICTC services", "All of the above strategies are used"],
    answer: 3,
    explanation: "Community-based HIV testing approaches in India include: Mobile ICTCs (M-ICTCs) that take testing services to communities including key populations; Community-Based Screening (CBS) for outreach; and HIV Self-Testing (HIVST) which is increasingly being promoted by NACO as a strategy to reach undiagnosed individuals. All these strategies complement facility-based ICTC testing."
  },
  {
    id: 37,
    question: "In India, the primary mode of HIV transmission is:",
    options: ["Injection drug use", "Mother-to-child transmission", "Heterosexual contact", "Blood transfusion"],
    answer: 2,
    explanation: "In India, heterosexual contact is the predominant mode of HIV transmission, accounting for approximately 87% of infections. Injection drug use is important in North-Eastern states (Manipur, Nagaland, Mizoram). Mother-to-child transmission (MTCT) and blood transfusion/blood products account for smaller proportions. This pattern reflects India's concentrated heterosexual epidemic."
  },
  {
    id: 38,
    question: "The first-line ART regimen recommended by NACO for treatment-naive adult HIV-positive individuals in India is:",
    options: ["Zidovudine (AZT) + Lamivudine (3TC) + Efavirenz (EFV)", "Tenofovir (TDF) + Lamivudine (3TC) + Dolutegravir (DTG)", "Tenofovir (TDF) + Emtricitabine (FTC) + Efavirenz (EFV)", "Abacavir (ABC) + Lamivudine (3TC) + Nevirapine (NVP)"],
    answer: 1,
    explanation: "NACO's current first-line ART regimen for treatment-naive adult PLHIV in India is TDF + 3TC + DTG (Tenofovir + Lamivudine + Dolutegravir). Dolutegravir replaced Efavirenz as the preferred third drug due to its higher genetic barrier to resistance, better tolerability, fewer drug interactions, and once-daily dosing. This is aligned with WHO 2019 consolidated guidelines."
  },
  {
    id: 39,
    question: "PMTCT Option B+ in India means:",
    options: ["All HIV-positive pregnant women receive ART only during pregnancy and breastfeeding", "All HIV-positive pregnant women are initiated on lifelong ART regardless of CD4 count or clinical stage, and continue ART for life", "HIV-positive pregnant women receive triple ART only if CD4 is below 350", "Zidovudine prophylaxis to the mother and Nevirapine to the infant"],
    answer: 1,
    explanation: "PMTCT Option B+ (adopted by India under NACP) means all HIV-positive pregnant women are initiated on lifelong triple combination ART (TDF+3TC+DTG) regardless of CD4 count or WHO clinical stage, and they continue this ART for life. This approach simplifies PMTCT, prevents MTCT during pregnancy and breastfeeding, treats the mother, and prevents sexual transmission. The exposed infant also receives NVP prophylaxis for 6 weeks."
  },
  {
    id: 40,
    question: "Pre-Exposure Prophylaxis (PrEP) for HIV prevention in India is currently recommended for:",
    options: ["All adults in high HIV prevalence districts", "HIV-negative individuals at substantial ongoing risk of HIV infection (key populations - serodiscordant couples, FSW, MSM, PWID)", "Only healthcare workers after needle-stick injury", "Pregnant women in high prevalence states"],
    answer: 1,
    explanation: "PrEP (daily oral TDF+FTC or TDF+3TC) is recommended for HIV-negative individuals at substantial ongoing risk of HIV acquisition. In India's NACO guidelines, PrEP is prioritized for key populations including serodiscordant couples (where the HIV-positive partner is not virally suppressed), Female Sex Workers (FSW), Men who have Sex with Men (MSM), Transgender persons, and People who Inject Drugs (PWID). PEP (Post-Exposure Prophylaxis) is for post-exposure situations including needle-stick injuries."
  },
  {
    id: 41,
    question: "The recommended Post-Exposure Prophylaxis (PEP) regimen for healthcare workers after significant HIV exposure in India is:",
    options: ["AZT + 3TC for 28 days", "TDF + 3TC + DTG for 28 days", "AZT + 3TC + LPV/r for 28 days", "TDF + FTC for 28 days"],
    answer: 1,
    explanation: "As per NACO's current PEP guidelines (aligned with WHO 2016), the recommended PEP regimen for healthcare workers after significant HIV exposure is TDF + 3TC + DTG (Tenofovir + Lamivudine + Dolutegravir) for 28 days. PEP should be initiated as soon as possible after exposure (ideally within 2 hours, definitely within 72 hours). After 72 hours, PEP is not recommended."
  },
  {
    id: 42,
    question: "The National AIDS Control Programme's condom promotion strategy includes which of the following social marketing program?",
    options: ["Nirodh brand condoms sold through public distribution", "Red Ribbon Express", "Social Marketing of condoms through Hindustan Latex Ltd (HLL) and other partners under the brand names Nirodh and others", "Free condom distribution only at ART centres"],
    answer: 2,
    explanation: "NACO's condom promotion strategy includes: (1) Social marketing of condoms through HLL Lifecare Ltd (formerly Hindustan Latex Ltd) with the brand 'Nirodh' and other commercial brands; (2) Free condom distribution through targeted intervention sites, health facilities, and vending machines; (3) Condom promotion as part of behavior change communication. The Red Ribbon Express was an awareness campaign train, not a condom program."
  },
  {
    id: 43,
    question: "The ICTC (Integrated Counselling and Testing Centre) workflow for a client testing positive on all three tests (A1+A2+A3 reactive) includes as the NEXT immediate step:",
    options: ["Repeat testing at 3 months", "Informing the client of positive result with post-test counselling, disclosure support, and referral to ART centre for enrolment", "Immediate CD4 count testing before disclosure", "Referral to a virologist for confirmatory Western Blot testing"],
    answer: 1,
    explanation: "When all three HIV tests (A1, A2, A3) are reactive, the ICTC counsellor provides post-test counselling informing the client of their HIV-positive status, provides emotional support, counsels on disclosure to partner, prevention of transmission, and immediately refers and links the client to the nearest ART centre for enrolment and initiation of treatment (under Test and Treat policy). Western Blot is not required in India's national testing algorithm."
  },
  {
    id: 44,
    question: "Blood safety measures to prevent HIV transmission through blood transfusion in India are regulated by which authority?",
    options: ["NACO exclusively", "CDSCO (Central Drugs Standard Control Organisation) under Drugs and Cosmetics Act, with NBTC/NACO coordination", "Indian Red Cross Society", "State blood transfusion councils independently"],
    answer: 1,
    explanation: "Blood safety in India is regulated under the Drugs and Cosmetics Act 1940, with CDSCO (Central Drugs Standard Control Organisation) licensing blood banks. The National Blood Transfusion Council (NBTC) under the Ministry of Health provides policy guidance. NACO works in coordination to ensure 100% voluntary blood donation and mandatory testing of all blood units for HIV, HBV, HCV, syphilis, and malaria. Professional/paid blood donation is banned."
  },
  {
    id: 45,
    question: "Harm reduction strategies for People Who Inject Drugs (PWID) in India under NACP include:",
    options: ["Needle Syringe Programmes (NSP) and Opioid Substitution Therapy (OST) with buprenorphine", "Only detoxification and rehabilitation programmes", "ART provision only, without addressing injecting practices", "Methadone maintenance therapy as the sole intervention"],
    answer: 0,
    explanation: "Harm reduction for PWID in India under NACP's Targeted Interventions includes: (1) Needle Syringe Programmes (NSP) - provision of sterile needles/syringes and safe disposal; (2) Opioid Substitution Therapy (OST) - buprenorphine (and buprenorphine-naloxone) is used in India as OST; (3) HIV testing and counselling; (4) ART for HIV-positive PWID; (5) Condom promotion; (6) Behaviour Change Communication. Methadone is not widely available in India; buprenorphine is the primary OST drug."
  },
  {
    id: 46,
    question: "ART adherence monitoring in India's programme is primarily done through:",
    options: ["Daily phone calls to patients by ASHA workers", "Pill counts at monthly ART collection visits, viral load testing at 6 months, 12 months, and then annually, and pharmacy refill records on ART software", "Only CD4 count monitoring every 6 months", "Home visits by community health workers only"],
    answer: 1,
    explanation: "ART adherence monitoring in NACO's programme includes: (1) Pill counts at monthly ART pharmacy visits (more than 95% adherence required); (2) Viral load testing at 6 months, 12 months after ART initiation, and then annually - viral load is the gold standard for treatment monitoring; (3) ART software tracking of refill patterns; (4) CD4 count monitoring (though viral load is now preferred). Community support through PLHIV networks and ASHA workers supplements facility-based monitoring."
  },
  {
    id: 47,
    question: "Immune Reconstitution Inflammatory Syndrome (IRIS) in HIV-positive patients starting ART is BEST described as:",
    options: ["A new opportunistic infection acquired after ART initiation due to immunosuppression", "Paradoxical worsening of a pre-existing or newly unmasked opportunistic infection due to recovering immune system after ART", "ART drug toxicity presenting as fever and lymphadenopathy", "HIV drug resistance leading to virological failure and immune decline"],
    answer: 1,
    explanation: "IRIS is a paradoxical clinical deterioration that occurs in HIV-positive patients who start ART, due to the recovering immune system mounting an inflammatory response against antigens from pre-existing (often subclinical) opportunistic infections. IRIS most commonly occurs within 4-8 weeks of ART initiation, is more common with low baseline CD4 counts (<50 cells/mm3), and TB-IRIS (Mycobacterium tuberculosis) is the most common IRIS presentation. Treatment involves continuing ART and managing the OI; corticosteroids are used for severe cases."
  },
  {
    id: 48,
    question: "The standard first-line ART regimen for HIV-positive children aged 3-10 years in India under NACO guidelines is:",
    options: ["ABC + 3TC + NVP", "AZT + 3TC + EFV", "ABC + 3TC + DTG (weight-band appropriate dosing)", "TDF + 3TC + DTG"],
    answer: 2,
    explanation: "For HIV-positive children aged 3-10 years (or weighing 10-<25 kg) in India, NACO's current first-line paediatric ART regimen (aligned with WHO 2019 guidelines) recommends ABC + 3TC + DTG (Abacavir + Lamivudine + Dolutegravir) using weight-band appropriate dosing. Dolutegravir dispersible tablets are now available for children above 4 weeks and 3 kg. TDF + 3TC + DTG is used for adolescents above 25 kg."
  },
  {
    id: 49,
    question: "HIV Drug Resistance (HIVDR) surveillance in India under NACO uses which approach to monitor acquired and transmitted drug resistance?",
    options: ["Routine genotypic resistance testing for all patients on ART", "WHO methodology: Threshold Surveys for Transmitted Drug Resistance (TDR) in newly diagnosed ART-naive patients, and monitoring of early warning indicators (EWIs) of acquired drug resistance in ART programmes", "Phenotypic resistance testing in national reference laboratories only", "Viral tropism testing to guide second-line ART selection"],
    answer: 1,
    explanation: "India's HIVDR surveillance follows WHO methodology and includes: (1) Transmitted Drug Resistance (TDR) threshold surveys in ART-naive individuals recently diagnosed with HIV to detect pre-treatment drug resistance (PDR); (2) Monitoring Early Warning Indicators (EWIs) of acquired drug resistance including on-time drug pick-up rates, retention on first-line ART, viral suppression rates, and switching to second-line; (3) Population-level surveys in ART clinics. Routine individual genotypic testing is not done for all patients due to cost constraints."
  },
  {
    id: 50,
    question: "Cotrimoxazole Preventive Therapy (CPT) is recommended by NACO for all HIV-positive individuals with CD4 count below which threshold, and also regardless of CD4 count in certain situations?",
    options: ["CD4 < 500 cells/mm3; also for all pregnant PLHIV regardless of CD4", "CD4 < 350 cells/mm3; also for WHO stage 3 or 4 regardless of CD4", "CD4 < 200 cells/mm3; also for children under 5 years regardless of CD4", "All PLHIV regardless of CD4 count"],
    answer: 3,
    explanation: "As per NACO's current guidelines (aligned with WHO 2014 consolidated guidelines), Cotrimoxazole Preventive Therapy (CPT) is recommended for ALL HIV-positive individuals, regardless of CD4 count or clinical stage, in high-burden settings for endemic infections (Pneumocystis jirovecii pneumonia, toxoplasmosis, malaria, bacterial infections). In India, CPT is given to all PLHIV enrolled in care. It is the most cost-effective intervention reducing morbidity and mortality in PLHIV. CPT is continued until the patient achieves immune recovery (CD4 > 350 cells/mm3 on ART for 6 months, per some guidelines)."
  },
];

export default questions;

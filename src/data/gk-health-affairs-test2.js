const questions = [
  // Q1-Q10: WHO health days & campaigns
  {
    id: 1,
    question: "World Zoonoses Day is observed annually on which date, commemorating Louis Pasteur's first successful rabies vaccination in 1885?",
    options: ["6 July", "14 June", "28 September", "3 March"],
    answer: 0,
    explanation: "World Zoonoses Day is observed on 6 July each year to commemorate Louis Pasteur's administration of the first successful rabies vaccine on 6 July 1885. It raises awareness about zoonotic diseases that can spread between animals and humans."
  },
  {
    id: 2,
    question: "The theme of World Tuberculosis Day 2024 (24 March) was:",
    options: ["'Yes! We can end TB!'", "'Invest to End TB. Save Lives.'", "'The Clock is Ticking'", "'Unite to End TB'"],
    answer: 0,
    explanation: "The theme of World TB Day 2024 was 'Yes! We can end TB!' This theme aimed to inspire hope and call for commitment to accelerate progress toward ending TB — a disease that remains one of the world's top infectious killers."
  },
  {
    id: 3,
    question: "World Malaria Day 2024 was observed under which theme?",
    options: ["'Accelerating the fight against malaria for a more equitable world'", "'Zero malaria starts with me'", "'Harness innovation to reduce the malaria disease burden and save lives'", "'Ready to beat malaria'"],
    answer: 2,
    explanation: "World Malaria Day 2024 (25 April) was observed under the theme 'Harness innovation to reduce the malaria disease burden and save lives.' This theme highlighted the importance of new tools, technologies, and approaches in combating malaria globally."
  },
  {
    id: 4,
    question: "The WHO's World Antimicrobial Resistance Awareness Week (WAAW) is observed annually during which period?",
    options: ["1–7 November", "12–18 November", "18–24 November", "24–30 November"],
    answer: 2,
    explanation: "World Antimicrobial Resistance Awareness Week (WAAW) is observed from 18 to 24 November each year. It aims to increase awareness of AMR and encourage best practices among the public, health workers, and policymakers to reduce further emergence and spread of drug-resistant infections."
  },
  {
    id: 5,
    question: "World AIDS Day 2023 was observed under which theme?",
    options: ["'End inequalities. End AIDS.'", "'Let communities lead'", "'Equalize'", "'Global solidarity, shared responsibility'"],
    answer: 1,
    explanation: "World AIDS Day 2023 (1 December) was observed under the theme 'Let communities lead.' This theme recognized the crucial role that communities of people living with or affected by HIV play in driving progress toward ending AIDS as a public health threat."
  },
  {
    id: 6,
    question: "The theme of World Health Day 2024 (7 April) was:",
    options: ["'Our planet, our health'", "'My health, my right'", "'Universal Health Coverage: Everyone, Everywhere'", "'Health for all'"],
    answer: 1,
    explanation: "World Health Day 2024 theme was 'My health, my right.' This theme was chosen to champion the right of everyone, everywhere to have access to quality health services, education, and information, and safe drinking water, clean air, good nutrition, quality housing, decent working and environmental conditions."
  },
  {
    id: 7,
    question: "World Immunization Week is observed every year during the last week of April. The theme for World Immunization Week 2024 was:",
    options: ["'Vaccines Work for All'", "'Long Life for All'", "'The Big Catch-Up'", "'Immunization for All is Humanly Possible'"],
    answer: 1,
    explanation: "World Immunization Week 2024 (24–30 April) was observed under the theme 'Long Life for All.' This theme emphasized immunization as a key to achieving longer, healthier lives for people of all ages, and called for sustained investment in vaccines and immunization programs worldwide."
  },
  {
    id: 8,
    question: "World Hepatitis Day is observed on 28 July. The theme for 2024 was:",
    options: ["'Hepatitis Free Future'", "'Find the Missing Millions'", "'It's time for action'", "'One life, one liver'"],
    answer: 3,
    explanation: "World Hepatitis Day 2024 (28 July) was observed under the theme 'It's time for action.' This theme called for urgent acceleration of efforts to eliminate viral hepatitis as a public health threat by 2030."
  },
  {
    id: 9,
    question: "World Chagas Disease Day is observed on which date, as designated by the WHO?",
    options: ["2 April", "14 April", "14 June", "7 September"],
    answer: 1,
    explanation: "World Chagas Disease Day is observed on 14 April each year. The date was chosen to mark the anniversary of when Carlos Chagas first diagnosed a patient with the disease in 1909. WHO designated this day in 2019 to raise awareness about this neglected tropical disease."
  },
  {
    id: 10,
    question: "The WHO 'End TB Strategy' targets to reduce TB deaths by what percentage by 2030 compared to 2015 baseline?",
    options: ["75%", "80%", "90%", "95%"],
    answer: 2,
    explanation: "The WHO End TB Strategy targets a 90% reduction in TB deaths and a 80% reduction in TB incidence rate by 2030, compared to the 2015 baseline. The milestone targets for 2020 were 35% reduction in TB deaths and 20% reduction in TB incidence."
  },

  // Q11-Q20: India's vaccination & immunization updates
  {
    id: 11,
    question: "India's iNCOVACC, the world's first intranasal COVID-19 vaccine, was developed by which company and received emergency use authorization from DCGI in which year?",
    options: ["Serum Institute of India, 2022", "Bharat Biotech International, 2022", "Zydus Cadila, 2023", "Biological E Limited, 2023"],
    answer: 1,
    explanation: "iNCOVACC (BBV154) is the world's first intranasal COVID-19 vaccine, developed by Bharat Biotech International Limited. It received emergency use authorization from the Drug Controller General of India (DCGI) in December 2022, making India the first country globally to approve an intranasal COVID-19 vaccine."
  },
  {
    id: 12,
    question: "ZyCoV-D, India's first DNA-based COVID-19 vaccine, received emergency use authorization in August 2021. It is administered using which device?",
    options: ["Conventional needle syringe", "PharmaJet needle-free injector", "Biojector needle-free system", "Stratis needle-free injector"],
    answer: 3,
    explanation: "ZyCoV-D, developed by Zydus Cadila (now Zydus Lifesciences), uses the Stratis needle-free injector (PharmaJet's device was rebranded) for intradermal administration. It is a 3-dose vaccine administered on days 0, 28, and 56, and was the world's first DNA plasmid vaccine approved for COVID-19."
  },
  {
    id: 13,
    question: "Under Mission Indradhanush 3.0, which was launched in February 2021, the target was to immunize children and pregnant women who had been missed due to COVID-19 disruptions. How many rounds were conducted?",
    options: ["2 rounds", "3 rounds", "4 rounds", "5 rounds"],
    answer: 0,
    explanation: "Mission Indradhanush 3.0 was launched in February 2021 and conducted 2 rounds of intensified immunization activities (February-March 2021 and April-May 2021) across districts with the lowest immunization coverage to catch up on missed immunizations during the COVID-19 pandemic."
  },
  {
    id: 14,
    question: "India's CERVAVAC, the indigenous quadrivalent HPV vaccine, was developed by Serum Institute of India. It targets which HPV strains?",
    options: ["HPV 6, 11, 16, 18", "HPV 16, 18, 31, 45", "HPV 6, 11, 31, 33", "HPV 16, 18, 52, 58"],
    answer: 0,
    explanation: "CERVAVAC is India's first indigenous quadrivalent HPV vaccine developed by Serum Institute of India. It targets HPV types 6, 11, 16, and 18 — the same strains targeted by Gardasil. HPV 16 and 18 cause approximately 70% of cervical cancers, while HPV 6 and 11 cause genital warts."
  },
  {
    id: 15,
    question: "The Pneumococcal Conjugate Vaccine (PCV) was introduced into India's Universal Immunization Programme (UIP) for universal rollout across all states in which year?",
    options: ["2017", "2019", "2021", "2023"],
    answer: 1,
    explanation: "PCV13 (Pneumococcal Conjugate Vaccine 13-valent) was introduced into India's Universal Immunization Programme with universal rollout across all states and union territories completed by 2019, after being piloted in select states from 2017. It protects against 13 strains of Streptococcus pneumoniae."
  },
  {
    id: 16,
    question: "India launched the Intensified Mission Indradhanush (IMI) 5.0 targeting which specific population groups as a priority focus?",
    options: ["Only urban slum children under 2 years", "Children under 2 years and pregnant women in high-risk districts including migrants and displaced populations", "Only tribal population children under 5 years", "Children 0-5 years in all districts uniformly"],
    answer: 1,
    explanation: "IMI 5.0 targeted children under 2 years and pregnant women, with special focus on high-risk areas including urban slums, brick kilns, construction sites, and areas with migrant and displaced populations in districts with lower immunization coverage — groups frequently missed by routine immunization services."
  },
  {
    id: 17,
    question: "The Adult Japanese Encephalitis (JE) vaccine was added to India's UIP for vaccination of which age group in endemic districts?",
    options: ["1-15 years", "1 year to 15 years old including adults in endemic areas", "0-1 year as part of routine schedule", "15-65 years adult population only"],
    answer: 1,
    explanation: "Japan Encephalitis vaccine (SA 14-14-2 live attenuated vaccine) is administered in India's UIP to children aged 1-15 years in JE-endemic districts as a catch-up immunization campaign, followed by integration into the routine immunization schedule for infants in these districts."
  },
  {
    id: 18,
    question: "Rotavac 5D, an improved version of India's indigenous rotavirus vaccine, was developed by which institution/company and approved by DCGI in 2023?",
    options: ["Serum Institute of India", "Bharat Biotech International", "Indian Immunologicals Limited", "Biological E Limited"],
    answer: 1,
    explanation: "Rotavac 5D is the improved pentavalent rotavirus vaccine developed by Bharat Biotech International (BBIL). It was developed based on India's original Rotavac (116E strain), with the '5D' denoting 5 doses in dried form. BBIL developed the original Rotavac in partnership with AIIMS and NIH."
  },
  {
    id: 19,
    question: "India's COVID-19 vaccination program achieved administering 2 billion doses by which approximate date in 2022?",
    options: ["January 2022", "April 2022", "July 2022", "October 2022"],
    answer: 2,
    explanation: "India crossed the milestone of administering 2 billion COVID-19 vaccine doses in July 2022. India's vaccination program, which started on 16 January 2021 with healthcare workers, expanded progressively to cover the entire adult population and later adolescents aged 12-17 years."
  },
  {
    id: 20,
    question: "The Measles-Rubella (MR) elimination target set by India under the National Measles-Rubella Strategic Plan 2017-2020 aims to achieve elimination by which year?",
    options: ["2020", "2023", "2025", "2030"],
    answer: 2,
    explanation: "India's National Measles-Rubella Strategic Plan targets measles elimination and rubella/congenital rubella syndrome (CRS) control by 2023, with a long-term goal of verification of elimination by 2025. WHO's South-East Asia Region target is measles elimination by 2023."
  },

  // Q21-Q30: Global health agreements & organizations
  {
    id: 21,
    question: "The Nagoya Protocol on Access to Genetic Resources and the Fair and Equitable Sharing of Benefits came into force on which date?",
    options: ["12 October 2012", "12 October 2014", "29 October 2015", "1 January 2016"],
    answer: 1,
    explanation: "The Nagoya Protocol on Access to Genetic Resources and the Fair and Equitable Sharing of Benefits Arising from their Utilization (ABS) to the Convention on Biological Diversity entered into force on 12 October 2014. It provides a transparent framework for the implementation of the 'access and benefit sharing' obligations of the CBD."
  },
  {
    id: 22,
    question: "The WHO Pandemic Accord (Pandemic Treaty) negotiations are being conducted by the Intergovernmental Negotiating Body (INB). At which WHO World Health Assembly was the decision to establish the INB taken?",
    options: ["74th WHA, May 2021", "75th WHA, May 2022", "Special Session (SSWHA-2), November-December 2021", "73rd WHA, May 2020"],
    answer: 2,
    explanation: "The decision to establish the Intergovernmental Negotiating Body (INB) to draft and negotiate a WHO convention, agreement, or other international instrument on pandemic prevention, preparedness, and response was taken at the 2nd Special Session of the World Health Assembly (SSWHA-2) held in November-December 2021."
  },
  {
    id: 23,
    question: "The WTO TRIPS waiver proposal for COVID-19 vaccines was originally co-sponsored by India and South Africa in October 2020. Which WTO Ministerial Conference (MC) in June 2022 adopted a partial waiver decision?",
    options: ["MC11 in Buenos Aires", "MC12 in Geneva", "MC13 in Abu Dhabi", "Special General Council meeting"],
    answer: 1,
    explanation: "The WTO 12th Ministerial Conference (MC12) held in Geneva in June 2022 adopted a decision on the TRIPS Agreement and COVID-19 Vaccines. This partial waiver allowed eligible developing country members to authorize the use of patented subject matter for the production and supply of COVID-19 vaccines without the right holder's consent for 5 years."
  },
  {
    id: 24,
    question: "The Doha Declaration on the TRIPS Agreement and Public Health (2001) specifically clarified that the TRIPS Agreement should be interpreted to protect which right?",
    options: ["Right to intellectual property of pharmaceutical companies", "Right of WTO members to protect public health and promote access to medicines for all", "Right to free trade in essential medicines between countries", "Right to generic manufacturing without any obligations"],
    answer: 1,
    explanation: "The Doha Declaration on TRIPS Agreement and Public Health (adopted at the 4th WTO Ministerial Conference in Doha, Qatar, November 2001) confirmed that the TRIPS Agreement does not and should not prevent Members from taking measures to protect public health, and that the Agreement should be interpreted in a manner supportive of WTO Members' right to protect public health and, in particular, to promote access to medicines for all."
  },
  {
    id: 25,
    question: "The WHO Framework Convention on Tobacco Control (FCTC) was the first international treaty negotiated under the auspices of WHO. In which year did it come into force?",
    options: ["2003", "2004", "2005", "2006"],
    answer: 2,
    explanation: "The WHO Framework Convention on Tobacco Control (WHO FCTC) was adopted by the World Health Assembly in May 2003, opened for signature in June 2003, and entered into force on 27 February 2005. It is the first international treaty negotiated under the auspices of the WHO and has 182 Parties (as of recent data)."
  },
  {
    id: 26,
    question: "The One Health Joint Plan of Action (2022-2026) was launched jointly by FAO, UNEP, WHO, and WOAH (OIE). What is the primary objective of this plan?",
    options: ["To create a single global health database", "To build a more equitable, resilient and sustainable One Health world through better prevention and response to health threats at the human-animal-ecosystem interface", "To eliminate all zoonotic diseases by 2030", "To establish joint funding for pandemic vaccines globally"],
    answer: 1,
    explanation: "The One Health Joint Plan of Action (OH JPA) 2022-2026, launched by the 'Quadripartite' (FAO, UNEP, WHO, and WOAH), aims to build a more equitable, resilient, and sustainable One Health world by enhancing capacities to prevent, predict, detect, and respond to health threats at the human-animal-ecosystem interface."
  },
  {
    id: 27,
    question: "The Codex Alimentarius Commission is a joint body of FAO and WHO. In which year was it established?",
    options: ["1958", "1961", "1963", "1969"],
    answer: 2,
    explanation: "The Codex Alimentarius Commission was established in 1963 by FAO and WHO to develop international food standards, guidelines, and related texts (collectively the Codex Alimentarius or 'food code'). Its main goals are protecting consumer health and ensuring fair practices in food trade."
  },
  {
    id: 28,
    question: "The Global Action Plan on Antimicrobial Resistance (GAP-AMR) was endorsed at the World Health Assembly in which year?",
    options: ["2013", "2014", "2015", "2016"],
    answer: 2,
    explanation: "The Global Action Plan on Antimicrobial Resistance (GAP-AMR) was endorsed at the 68th World Health Assembly in May 2015. It outlines five strategic objectives to address AMR, including improving awareness and understanding, strengthening surveillance, reducing infection incidence, optimizing antimicrobial use, and ensuring sustainable investment in new medicines and vaccines."
  },
  {
    id: 29,
    question: "The International Health Regulations (IHR 2005) require countries to develop core public health capacities and report events that may constitute a Public Health Emergency of International Concern (PHEIC). By what year were all WHO Member States required to meet the IHR core capacity requirements?",
    options: ["2012", "2014", "2016", "2019"],
    answer: 1,
    explanation: "The IHR (2005) required all WHO Member States to meet the core capacity requirements by 2012, with an extension deadline of June 2014 for countries that requested extensions. The IHR core capacities include legislation/policy, coordination, surveillance, response, preparedness, risk communication, human resources, and laboratory capabilities."
  },
  {
    id: 30,
    question: "The Minamata Convention on Mercury, which has significant public health implications, came into force in which year?",
    options: ["2013", "2015", "2017", "2019"],
    answer: 2,
    explanation: "The Minamata Convention on Mercury entered into force on 16 August 2017, after receiving its 50th ratification. Named after Minamata Bay in Japan where severe mercury poisoning incidents occurred in the 1950s-60s, it aims to protect human health and the environment from anthropogenic emissions and releases of mercury and mercury compounds."
  },

  // Q31-Q40: India's health statistics & rankings
  {
    id: 31,
    question: "According to the Global Hunger Index (GHI) 2023 Report, India was ranked at which position out of 125 countries?",
    options: ["107th", "111th", "101st", "113th"],
    answer: 1,
    explanation: "India ranked 111th out of 125 countries in the Global Hunger Index (GHI) 2023 Report, with a GHI score of 28.7 (considered 'serious'). This placed India behind neighbours like Pakistan (102nd), Bangladesh (81st), and Nepal (69th). India disputed the methodology used to calculate the GHI."
  },
  {
    id: 32,
    question: "According to the WHO Global Tuberculosis Report 2023, India accounted for what percentage of global TB incidence?",
    options: ["22%", "26%", "28%", "32%"],
    answer: 1,
    explanation: "According to the WHO Global Tuberculosis Report 2023, India accounted for approximately 26% of the world's total TB burden (incidence), with an estimated 2.8 million incident TB cases. India has the highest TB burden globally, followed by Indonesia (10%) and China (7.1%)."
  },
  {
    id: 33,
    question: "India's National Strategic Plan for Elimination of Tuberculosis 2017-2025 (NSP) set which target for TB elimination?",
    options: ["Eliminate TB by 2025 (incidence <1 case per 10 lakh population)", "Reduce TB incidence to <10 per lakh by 2025 and eliminate TB by 2030", "Eliminate TB by 2025 (incidence <10 per lakh population)", "Reduce TB mortality by 90% by 2025"],
    answer: 2,
    explanation: "India's NSP 2017-2025 aims to eliminate TB by 2025 — five years ahead of the global SDG target of 2030. TB elimination is defined as fewer than 1 case per million population. India's interim target is to reduce TB incidence to less than 10 per lakh (1 lakh = 100,000) population by 2025."
  },
  {
    id: 34,
    question: "According to the NFHS-5 (2019-21) data, what was India's Total Fertility Rate (TFR)?",
    options: ["2.0", "2.2", "2.5", "2.7"],
    answer: 0,
    explanation: "The National Family Health Survey (NFHS-5) 2019-21 data revealed that India's Total Fertility Rate (TFR) dropped to 2.0, which is at or below the replacement level of 2.1. This marked a significant demographic milestone, with 31 states/UTs having TFR at or below replacement level compared to 24 in NFHS-4."
  },
  {
    id: 35,
    question: "India's out-of-pocket (OOP) expenditure as a percentage of total health expenditure, as reported in National Health Accounts 2019-20, was approximately:",
    options: ["39%", "47%", "54%", "63%"],
    answer: 2,
    explanation: "According to the National Health Accounts (NHA) Estimates for India 2019-20, out-of-pocket (OOP) expenditure as a proportion of Total Health Expenditure (THE) was approximately 47-54% (showing a declining trend from around 62% in 2013-14). The NHA 2019-20 estimated OOP at approximately 48.2% of THE."
  },
  {
    id: 36,
    question: "According to WHO data, India's life expectancy at birth for 2021 (reflecting COVID-19 impact) was approximately:",
    options: ["67.5 years", "68.4 years", "70.2 years", "72.1 years"],
    answer: 1,
    explanation: "India's life expectancy at birth in 2021 was approximately 67-68 years (around 67.2-68.4 years for the total population), reflecting the impact of COVID-19 mortality which reduced life expectancy from the pre-pandemic trend. Male life expectancy was around 66-67 years and female around 69-70 years."
  },
  {
    id: 37,
    question: "India's malaria elimination target, according to the National Framework for Malaria Elimination (NFME) 2016-2030, aims for elimination (zero indigenous cases) in how many states/UTs by 2022?",
    options: ["All NE states and islands", "Category 1 and 2 states (26 states/UTs)", "All states except high-endemic ones", "Only island territories (A&N, Lakshadweep)"],
    answer: 3,
    explanation: "The National Framework for Malaria Elimination (NFME) 2016-2030 envisages phased elimination. By 2022, elimination was targeted in category 1 states (API <1): largely the island territories and low-endemic states. The phased targets were: elimination in low-endemic areas by 2022, all states by 2027, and malaria-free status of India by 2030."
  },
  {
    id: 38,
    question: "India's Human Development Index (HDI) ranking in the UNDP Human Development Report 2023/24 was:",
    options: ["127th", "132nd", "134th", "140th"],
    answer: 2,
    explanation: "India ranked 134th out of 193 countries in the UNDP Human Development Report 2023/24 with an HDI value of 0.644, placing it in the 'medium human development' category. India's HDI improved from 0.633 in the 2021 report, showing steady progress in health, education, and living standards components."
  },
  {
    id: 39,
    question: "According to NFHS-5, what percentage of children under 5 years in India were stunted (height-for-age below -2 SD)?",
    options: ["32.1%", "35.5%", "38.4%", "41.2%"],
    answer: 0,
    explanation: "According to NFHS-5 (2019-21), 35.5% of children under 5 years in India were stunted (height-for-age below -2 SD), down from 38.4% in NFHS-4 (2015-16). While showing improvement, childhood stunting remains a significant public health concern in India."
  },
  {
    id: 40,
    question: "According to the Global Burden of Disease Study, which non-communicable disease is the leading cause of premature mortality (deaths under 70 years) in India?",
    options: ["Diabetes mellitus", "Chronic obstructive pulmonary disease", "Ischaemic heart disease", "Stroke"],
    answer: 2,
    explanation: "Ischaemic heart disease (coronary artery disease) is the leading cause of premature mortality and total mortality among NCDs in India according to GBD study data. India has a disproportionately high burden of coronary artery disease, occurring about a decade earlier than in Western populations."
  },

  // Q41-Q50: Recent medical breakthroughs & innovations
  {
    id: 41,
    question: "The Nobel Prize in Physiology or Medicine 2023 was awarded to Katalin Karikó and Drew Weissman for discoveries concerning nucleoside base modifications that enabled the development of effective mRNA vaccines. What was the key modification they discovered?",
    options: ["Replacing uridine with pseudouridine to reduce innate immune activation", "Adding 5' cap structures to mRNA molecules", "Using lipid nanoparticles as delivery vehicles", "Developing circular mRNA for enhanced stability"],
    answer: 0,
    explanation: "Karikó and Weissman discovered that replacing uridine with pseudouridine (and other modified nucleosides) in mRNA substantially reduced its immunogenicity (innate immune activation) while maintaining or enhancing protein production. This critical modification enabled the development of effective mRNA vaccines including those against COVID-19."
  },
  {
    id: 42,
    question: "CAR-T cell therapy for B-cell malignancies involves engineering T cells to express a chimeric antigen receptor (CAR). India's first indigenously developed CAR-T cell therapy (NexCAR19) was approved by DCGI in which year?",
    options: ["2022", "2023", "2024", "2025"],
    answer: 2,
    explanation: "NexCAR19, India's first indigenously developed CAR-T cell therapy targeting CD19 for B-cell malignancies (B-cell lymphoma and B-cell ALL), received approval from the Drug Controller General of India (DCGI) in October 2023. It was developed by ImmunoACT, a company incubated at IIT Bombay, in collaboration with Tata Memorial Hospital."
  },
  {
    id: 43,
    question: "The first CRISPR-Cas9 gene therapy to receive regulatory approval (from both FDA and MHRA in 2023) was developed for which genetic disorder?",
    options: ["Hemophilia A", "Sickle cell disease and beta-thalassemia", "Duchenne muscular dystrophy", "Spinal muscular atrophy"],
    answer: 1,
    explanation: "Casgevy (exagamglogene autotemcel, exa-cel), a CRISPR-Cas9 gene therapy developed by Vertex Pharmaceuticals and CRISPR Therapeutics, received approval from the UK's MHRA in November 2023 and the US FDA in December 2023 for treatment of sickle cell disease and transfusion-dependent beta-thalassemia — marking the first approved CRISPR-based medicine."
  },
  {
    id: 44,
    question: "Lecanemab (Leqembi), approved by the US FDA in July 2023 for Alzheimer's disease, works by which mechanism?",
    options: ["Inhibiting beta-secretase (BACE1) enzyme to reduce amyloid production", "Targeting and clearing amyloid beta protofibrils (soluble oligomers)", "Blocking tau protein phosphorylation", "Enhancing acetylcholine levels via cholinesterase inhibition"],
    answer: 1,
    explanation: "Lecanemab (Leqembi) is a humanized IgG1 monoclonal antibody that targets amyloid beta protofibrils (soluble aggregates/oligomers) — a more toxic form of amyloid compared to plaques. It received traditional (full) approval from the US FDA in July 2023 for early Alzheimer's disease, becoming the first drug to demonstrate slowing of clinical decline in a large Phase 3 trial."
  },
  {
    id: 45,
    question: "The WHO added a new class of antibiotics to combat drug-resistant infections in the 2023 update of the Essential Medicines List. Which novel antibiotic-class drug was added for treatment of extensively drug-resistant tuberculosis (XDR-TB)?",
    options: ["Bedaquiline", "Pretomanid", "Delamanid", "Sutezolid"],
    answer: 1,
    explanation: "Pretomanid was added to WHO's Model List of Essential Medicines for treatment of XDR-TB and treatment-intolerant/non-responsive MDR-TB as part of the BPaL (Bedaquiline, Pretomanid, Linezolid) regimen. The BPaL regimen showed high efficacy in the ZeNix trial with 89% favorable outcomes."
  },
  {
    id: 46,
    question: "India approved the world's first malaria vaccine (RTS,S/AS01, brand name Mosquirix) for routine immunization. The WHO recommended this vaccine for broad use in children in sub-Saharan Africa in which year?",
    options: ["2019", "2020", "2021", "2022"],
    answer: 2,
    explanation: "WHO recommended the RTS,S/AS01 (Mosquirix) malaria vaccine for broad use in children in sub-Saharan Africa in October 2021, following results from a large-scale pilot program in Ghana, Kenya, and Malawi that started in 2019. It is the world's first malaria vaccine and was developed by GlaxoSmithKline (GSK) with support from PATH and the Bill & Melinda Gates Foundation."
  },
  {
    id: 47,
    question: "The FDA approved the first RSV (Respiratory Syncytial Virus) vaccines for older adults in 2023. Which two vaccines were approved, and who developed them?",
    options: ["Abrysvo (Pfizer) and mResvia (Moderna)", "Arexvy (GSK) and Abrysvo (Pfizer)", "Arexvy (GSK) and mResvia (Moderna)", "Abrysvo (Pfizer) and Menveo (GSK)"],
    answer: 1,
    explanation: "The FDA approved two RSV vaccines for adults aged 60 years and older in 2023: Arexvy (RSVPreF3 OA) developed by GSK, approved in May 2023 as the first-ever RSV vaccine approved; and Abrysvo (RSVpreF) developed by Pfizer, approved in June 2023. Both are protein subunit vaccines targeting the RSV prefusion F protein."
  },
  {
    id: 48,
    question: "WHO's PANORAMIC trial (2021-2023) evaluated the antiviral molnupiravir for COVID-19. What did it find regarding hospitalization rates?",
    options: ["Molnupiravir reduced hospitalization by 50% in vaccinated high-risk patients", "Molnupiravir reduced hospitalization by 30% in unvaccinated patients only", "Molnupiravir did not significantly reduce hospitalization in vaccinated COVID-19 patients in the community", "Molnupiravir was effective only for immunocompromised patients"],
    answer: 2,
    explanation: "The PANORAMIC trial (UK, 2021-2023) found that in vaccinated adults with COVID-19 in the community, molnupiravir did not significantly reduce hospitalization or death compared to usual care. While it did reduce viral clearance time, the primary endpoint of reducing hospitalization was not met in this predominantly vaccinated, lower-risk population."
  },
  {
    id: 49,
    question: "Artificial intelligence tool 'CHIEF' (Clinical Histopathology Imaging Evaluation Foundation), developed by researchers from Harvard Medical School and published in Nature (2023), can perform which tasks using H&E stained pathology slides?",
    options: ["Only cancer subtype classification", "Only genomic alteration prediction", "Pan-cancer detection, subtype classification, and patient outcome prediction across 19 cancer types", "Only breast cancer diagnosis and staging"],
    answer: 2,
    explanation: "CHIEF (Clinical Histopathology Imaging Evaluation Foundation), published in Nature in 2023 by Tuanfeng Chen et al. from Harvard Medical School, is a general-purpose AI model trained on 60,530 whole-slide images across 19 cancer types. It can perform pan-cancer detection, subtype classification, genomic alteration identification, and patient outcome prediction from routine H&E stained pathology slides."
  },
  {
    id: 50,
    question: "The WHO updated its categorization of antibiotics into AWaRe (Access, Watch, Reserve) categories. Carbapenems, colistin, and cephalosporins (5th generation) are classified under which category to limit their use to last-resort situations?",
    options: ["Access", "Watch", "Reserve", "Unclassified"],
    answer: 2,
    explanation: "In the WHO AWaRe (Access, Watch, Reserve) classification framework (updated in 2021 and 2023), the Reserve category includes antibiotics that should be used as last-resort options when all other alternatives have failed, including carbapenems, colistin, ceftazidime-avibactam, and other last-line antibiotics. The WHO target is for at least 70% of antibiotic consumption to come from the Access category."
  }
]

export default questions

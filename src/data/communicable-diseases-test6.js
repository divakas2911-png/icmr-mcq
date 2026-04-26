const questions = [
  {
    id: 1,
    question: "The basic reproduction number (R0) of measles is approximately 12-18. What minimum population immunity threshold is required to interrupt measles transmission and achieve elimination?",
    options: ["75-80%", "85-88%", "92-95%", "98-100%"],
    answer: 2,
    explanation: "The herd immunity threshold is calculated as 1 - 1/R0. For measles with R0 of 12-18, this works out to 92-95%. This is why WHO/UNICEF set the measles elimination benchmark at achieving at least 95% coverage with two doses of measles-containing vaccine in all districts."
  },
  {
    id: 2,
    question: "Which AFP surveillance indicator is used as a proxy measure of surveillance system sensitivity for polio eradication certification?",
    options: ["AFP case fatality rate above 1%", "Non-polio AFP rate of at least 2 per 100,000 children under 15 years", "Percentage of AFP cases with adequate stool specimens above 50%", "Total AFP cases reported per year exceeding 500"],
    answer: 1,
    explanation: "The non-polio AFP rate (expected ≥2 per 100,000 children under 15 years) is the key surveillance sensitivity indicator. A low rate suggests under-reporting. The other key quality indicator is adequate stool specimen collection (two specimens ≥24 hours apart, within 14 days of paralysis onset) in ≥80% of AFP cases. Both are required for polio-free certification."
  },
  {
    id: 3,
    question: "India's Measles-Rubella (MR) elimination targets under the National Immunization Schedule align with which WHO SEAR regional target year?",
    options: ["2020", "2023", "2025", "2030"],
    answer: 2,
    explanation: "The WHO South-East Asia Regional Office (SEAR) set 2023 as the target for measles elimination and rubella/CRS control, subsequently revised. India's MR campaign (2017-2019) targeted all children 9 months to 15 years to boost population immunity. The two-dose MR schedule aims for ≥95% coverage to achieve the elimination threshold."
  },
  {
    id: 4,
    question: "In the context of diphtheria disease burden and epidemiology, which age group has historically shown resurgence of diphtheria cases in India despite high childhood vaccination coverage?",
    options: ["Neonates under 1 month", "Adolescents and adults due to waning immunity", "Children 1-4 years only", "Elderly above 65 years"],
    answer: 1,
    explanation: "Diphtheria resurgence in vaccinated populations is driven by waning antibody levels in adolescents and adults who received only childhood doses. Immunity from toxoid-containing vaccines wanes over 5-10 years. India still reports diphtheria cases, often in partially vaccinated or unvaccinated children, but adult outbreaks also occur. This is the rationale for Td booster doses in adolescents."
  },
  {
    id: 5,
    question: "India's hepatitis B carrier rate (HBsAg seroprevalence) in the general population is estimated at approximately:",
    options: ["0.5-1%", "2-4%", "8-10%", "15-20%"],
    answer: 1,
    explanation: "India has an intermediate hepatitis B endemicity with HBsAg seroprevalence estimated at 2-4% in the general population (approximately 40 million chronic carriers). This places India in the intermediate endemic category (2-8%). High-risk groups (blood donors, healthcare workers, tribal populations) may have higher rates. Vertical (perinatal) transmission accounts for a significant proportion of chronic carriage."
  },
  {
    id: 6,
    question: "Japanese Encephalitis (JE) is endemic in which geographic zones of India, and the primary vector mosquito responsible for transmission is:",
    options: ["Coastal areas only; Aedes aegypti", "Gangetic plains, eastern India, and parts of southern India; Culex tritaeniorhynchus", "Western Rajasthan desert areas; Culex quinquefasciatus", "High-altitude Himalayan regions; Anopheles stephensi"],
    answer: 1,
    explanation: "Japanese Encephalitis is endemic in the Gangetic plains (UP, Bihar), eastern India (West Bengal, Assam, Odisha), and parts of southern India (Karnataka, Andhra Pradesh, Tamil Nadu). The primary vector is Culex tritaeniorhynchus, a paddy-field breeding mosquito. Pigs and wading birds serve as amplifying hosts. JE is the leading cause of viral encephalitis in Asia."
  },
  {
    id: 7,
    question: "Rotavirus is the leading cause of severe diarrheal disease in children under 5 years globally. What proportion of severe diarrhea hospitalizations in children under 5 years in India are attributed to rotavirus?",
    options: ["5-10%", "15-20%", "40-50%", "70-80%"],
    answer: 2,
    explanation: "Rotavirus accounts for approximately 40-50% of hospitalizations for severe acute diarrhea in children under 5 years in India. Pre-vaccine studies estimated India had about 100,000 rotavirus-associated deaths annually in under-5 children. Rotavirus vaccine introduction in the UIP from 2016 has been monitored for impact on rotavirus gastroenteritis burden."
  },
  {
    id: 8,
    question: "Rubella/Congenital Rubella Syndrome (CRS) surveillance: which case is classified as a 'confirmed CRS case' for surveillance purposes?",
    options: ["Any infant with cataracts born to a mother with rash during pregnancy", "Laboratory-confirmed rubella IgM in a clinically compatible infant, or infant epidemiologically linked to a confirmed rubella case", "Any infant born with congenital heart disease to a mother with fever during pregnancy", "Infant with deafness alone detected at birth screening"],
    answer: 1,
    explanation: "A confirmed CRS case requires either laboratory confirmation (rubella-specific IgM in an infant, or isolation of rubella virus) in a clinically compatible case, OR epidemiological linkage to a laboratory-confirmed rubella case. Surveillance of CRS is used to monitor rubella transmission and assess vaccination program impact. India integrated rubella surveillance with measles case-based surveillance."
  },
  {
    id: 9,
    question: "The Global Polio Eradication Initiative (GPEI) Polio Endgame Strategy after wild poliovirus eradication includes which sequential step to address vaccine-derived poliovirus (VDPV) risk?",
    options: ["Immediately stop all polio vaccination globally", "Switch from trivalent OPV to bivalent OPV (removing type 2 component), then eventual OPV cessation with IPV for routine immunization", "Replace all OPV with IPV immediately in all countries simultaneously", "Continue trivalent OPV indefinitely as a safety measure"],
    answer: 1,
    explanation: "The GPEI Endgame Strategy included the global synchronized switch from trivalent OPV (tOPV) to bivalent OPV (bOPV, types 1 and 3) in April 2016, removing the type 2 component to eliminate type 2 cVDPV risk after wild type 2 eradication in 1999. IPV was introduced into routine immunization before the switch. Eventual cessation of all OPV with IPV-only schedules is the final goal."
  },
  {
    id: 10,
    question: "Disease elimination differs from eradication in that elimination is defined as:",
    options: ["Complete absence of the causative organism from the environment globally", "Reduction of disease incidence to zero globally with no further need for control measures", "Reduction of disease incidence to zero in a defined geographic area, with continued measures needed to prevent re-introduction", "Reduction of disease burden by 90% globally"],
    answer: 2,
    explanation: "Elimination refers to reduction of case incidence to zero in a defined geographic area (country or region), but continued surveillance and intervention measures are required to prevent re-introduction. Eradication means global permanent reduction to zero with no further control measures needed (achieved only for smallpox). Extinction means the organism no longer exists anywhere, including laboratory stocks."
  },
  {
    id: 11,
    question: "Which VPD surveillance indicator specifically measures the timeliness and completeness of reporting from sentinel sites to the national level?",
    options: ["Case fatality rate of VPDs", "Proportion of districts reporting zero cases (zero reporting rate)", "Percentage of expected weekly/monthly reports received (reporting completeness and timeliness)", "Number of outbreak investigations conducted per year"],
    answer: 2,
    explanation: "Reporting completeness (proportion of expected reports actually received) and timeliness (proportion received within defined time period) are key VPD surveillance performance indicators. WHO recommends ≥80% completeness and timeliness from subnational reporting units. Zero reporting (active reporting of zero cases) is also important to distinguish true absence of cases from non-reporting."
  },
  {
    id: 12,
    question: "The 'herd immunity threshold' concept implies that vaccination protects not only the vaccinated individual but also unvaccinated persons. For varicella (chickenpox) with R0 of approximately 8-10, the herd immunity threshold would be approximately:",
    options: ["50-60%", "75-80%", "87-90%", "95-98%"],
    answer: 2,
    explanation: "Using the formula: herd immunity threshold = 1 - 1/R0. For varicella with R0 = 8-10: threshold = 1 - 1/8 to 1 - 1/10 = 87.5% to 90%. This explains why varicella outbreaks can still occur in populations with partial vaccination coverage below this threshold, as susceptible individuals form clusters that allow transmission chains."
  },
  {
    id: 13,
    question: "Cholera epidemiology: the O139 serogroup of Vibrio cholerae emerged in 1992 in which country and spread to India. Why is O139 epidemiologically distinct from O1?",
    options: ["O139 is transmitted by person-to-person contact only, unlike O1 which is waterborne", "O139 produces a capsule conferring immunity evasion, and prior O1 immunity does not protect against O139", "O139 affects only children under 5 years, whereas O1 affects all ages", "O139 causes a milder disease than O1 El Tor"],
    answer: 1,
    explanation: "V. cholerae O139 (Bengal strain) possesses a polysaccharide capsule absent in O1 strains, which enables immune evasion and means that pre-existing O1 antibody-mediated immunity (from infection or O1-based vaccines) does not protect against O139. It first emerged in Bangladesh/India in 1992 and was feared to cause an 8th pandemic, though O1 El Tor has remained dominant globally."
  },
  {
    id: 14,
    question: "In cholera outbreak investigation, the case fatality rate (CFR) serves as a key program indicator. An acceptable CFR target in cholera outbreaks according to WHO/IDSP is:",
    options: ["Less than 10%", "Less than 5%", "Less than 1%", "Less than 0.1%"],
    answer: 2,
    explanation: "WHO and IDSP set a CFR target of less than 1% for cholera outbreaks, achievable with prompt ORS administration and appropriate case management. A CFR above 1% indicates inadequate case management and signals the need for urgent intervention. CFR can reach 25-50% without treatment. India's IDSP monitors outbreak CFR as a quality indicator."
  },
  {
    id: 15,
    question: "Typhoid incidence in India according to burden studies is estimated at approximately how many cases per 100,000 person-years in endemic urban areas?",
    options: ["1-5 per 100,000", "10-20 per 100,000", "100-500 per 100,000", "1000-2000 per 100,000"],
    answer: 2,
    explanation: "Typhoid fever incidence in India is high, with urban surveillance studies (DURDIS study, Kolkata data) estimating 100-500+ cases per 100,000 person-years in endemic areas, making India one of the highest-burden countries. The true burden is underestimated due to self-medication with antibiotics. Antimicrobial resistance (including XDR typhoid) is an emerging concern."
  },
  {
    id: 16,
    question: "Hepatitis A and Hepatitis E can both cause waterborne outbreaks. Which epidemiological characteristic helps distinguish Hepatitis E outbreaks from Hepatitis A outbreaks?",
    options: ["Hepatitis E outbreaks have shorter incubation period than Hepatitis A", "Hepatitis E causes high mortality (15-25%) specifically in pregnant women, unlike Hepatitis A which has uniform severity", "Hepatitis A outbreaks affect mainly adults, while Hepatitis E affects mainly children", "Hepatitis E is transmitted by fecal-oral route but Hepatitis A is bloodborne"],
    answer: 1,
    explanation: "A distinctive epidemiological feature of Hepatitis E outbreaks is the dramatically elevated mortality (15-25%) in pregnant women, particularly in the third trimester, due to fulminant hepatic failure. Hepatitis A rarely causes fulminant hepatitis and has no specific high-risk group based on pregnancy. Both are transmitted fecal-orally; HEV genotype 1 causes epidemic waterborne outbreaks in India."
  },
  {
    id: 17,
    question: "Leptospirosis shows a characteristic seasonal pattern in India. Which period sees peak incidence, and what is the primary occupational risk group in India?",
    options: ["Winter months; coal miners", "Post-monsoon and monsoon season (July-October); rice farmers, sugarcane workers, sewer workers, fishermen", "Pre-monsoon (April-June); construction workers only", "Year-round with no seasonality; urban slum dwellers only"],
    answer: 1,
    explanation: "Leptospirosis peaks during and after the monsoon season (July-October) in India when flooding creates conditions for human contact with contaminated water and soil. Primary occupational risk groups include paddy/rice field farmers, sugarcane workers, sewer workers, abattoir workers, veterinarians, and fishermen. Kerala, Tamil Nadu, and Maharashtra have highest burden. Flooding is the most important risk factor for outbreak amplification."
  },
  {
    id: 18,
    question: "Under India's Integrated Disease Surveillance Programme (IDSP), foodborne disease outbreaks are reported using which form, and what is the minimum threshold for reporting?",
    options: ["P-form; any single case of food poisoning in a community", "S-form; outbreaks with more than 100 cases only", "L-form (lab form); any cluster of diarrheal cases regardless of size", "P-form (provisional case report) and L-form; any cluster of 5 or more cases of similar illness linked to a common food source"],
    answer: 3,
    explanation: "IDSP uses P-forms (provisional weekly reports from health facilities), S-forms (suspected outbreak reports), and L-forms (laboratory reports). Foodborne outbreaks are reported through S-forms when clusters of illness linked to a common food exposure are detected. IDSP's Foodborne Illness Surveillance monitors outbreaks and generates weekly surveillance data reported to the national level."
  },
  {
    id: 19,
    question: "Food poisoning investigation uses incubation period as a key clue to identify the causative agent. A group illness with onset 1-6 hours after eating cream pastries at a party, with predominantly vomiting, suggests which agent?",
    options: ["Clostridium perfringens (heat-stable spore former)", "Staphylococcus aureus enterotoxin", "Bacillus cereus diarrheal toxin", "Salmonella typhi"],
    answer: 1,
    explanation: "A very short incubation period of 1-6 hours (typically 2-4 hours) with predominantly vomiting strongly points to Staphylococcal food poisoning from preformed heat-stable enterotoxin in food. Cream pastries, custards, and mayonnaise are classical vehicles. Clostridium perfringens has an 8-16 hour incubation with predominantly diarrhea. B. cereus emetic toxin has 1-5 hour incubation but from fried rice/cereals. Salmonella takes 12-36 hours."
  },
  {
    id: 20,
    question: "WHO guidelines for drinking water quality specify that the standard for thermotolerant (faecal) coliforms in treated piped water supplies is:",
    options: ["Less than 10 CFU per 100 mL", "Less than 5 CFU per 100 mL", "Less than 1 CFU per 100 mL", "0 CFU per 100 mL (none detectable)"],
    answer: 3,
    explanation: "WHO Guidelines for Drinking-water Quality specify that E. coli or thermotolerant coliforms must not be detectable in any 100 mL sample of treated drinking water distributed through piped systems. The standard is 0 per 100 mL. For untreated water from protected springs or boreholes, the target is also 0 per 100 mL E. coli. This 'zero tolerance' standard reflects that any faecal coliform indicates potential health risk."
  },
  {
    id: 21,
    question: "During a waterborne disease outbreak investigation, the 'attack rate by water source' analysis is used to establish which epidemiological link?",
    options: ["To determine the incubation period of the disease", "To identify the specific water source or distribution system responsible through differential attack rates", "To calculate the secondary attack rate in households", "To determine the case fatality rate of the outbreak"],
    answer: 1,
    explanation: "In waterborne outbreak investigation, comparing attack rates among persons using different water sources (wells, piped supply, bottled water) helps identify the implicated water source through differential attack rates - the source with significantly higher attack rate is the suspected vehicle. This approach was used in the classic Broad Street pump investigation by John Snow and remains standard outbreak investigation methodology."
  },
  {
    id: 22,
    question: "India's National Rural Drinking Water Programme (NRDWP)/Jal Jeevan Mission monitors water quality using which primary indicator of safe water coverage?",
    options: ["Percentage of households with piped water connection providing 55 liters per capita per day of potable water", "Percentage of villages with no diarrheal outbreak in the past year", "Percentage of water samples negative for coliforms", "Number of hand pumps installed per village"],
    answer: 0,
    explanation: "Jal Jeevan Mission (JJM) monitors the percentage of rural households with functional household tap connections (FHTCs) providing potable water at 55 liters per capita per day. This is the primary coverage indicator. The mission targets 100% FHTC coverage by 2024. Water quality testing (physical, chemical, bacteriological) is a complementary monitoring component through Field Test Kits at the Gram Panchayat level."
  },
  {
    id: 23,
    question: "Evidence from systematic reviews on WASH (Water, Sanitation, and Hygiene) interventions shows that which single WASH intervention has the greatest protective efficacy against diarrheal disease?",
    options: ["Provision of safe water at point of use alone", "Improved sanitation (latrine construction) alone", "Handwashing with soap at critical times", "All three together (combined WASH) show synergistic effect greater than individual interventions"],
    answer: 3,
    explanation: "Systematic reviews (including Cochrane reviews) show that combined WASH interventions have synergistic effects greater than individual components. Handwashing with soap at critical times has consistently shown 30-48% reduction in diarrheal disease. Point-of-use water treatment reduces diarrhea by ~30-40%. Sanitation improvements show smaller but additive effects. WHO advocates integrated WASH approaches as the evidence base is strongest for combined interventions."
  },
  {
    id: 24,
    question: "India's food safety monitoring is governed by which regulatory authority, and which act empowers it?",
    options: ["Central Pollution Control Board under Environment Protection Act 1986", "Food Safety and Standards Authority of India (FSSAI) under Food Safety and Standards Act 2006", "Bureau of Indian Standards under BIS Act 2016", "Ministry of Agriculture under Prevention of Food Adulteration Act 1954"],
    answer: 1,
    explanation: "The Food Safety and Standards Authority of India (FSSAI) is the apex food regulatory body established under the Food Safety and Standards Act, 2006, which replaced the Prevention of Food Adulteration Act 1954 and several other food laws. FSSAI sets standards, regulates food businesses, conducts surveillance and monitoring of food quality, and manages food safety at ports of entry."
  },
  {
    id: 25,
    question: "India's influenza surveillance network uses sentinel sites monitoring two clinical syndromes. Which are they, and what is the key difference between them?",
    options: ["ILI (Influenza-Like Illness) at outpatient level and SARI (Severe Acute Respiratory Infection) at inpatient/hospital level", "AFP (Acute Flaccid Paralysis) at community level and SARI at hospital level", "ARI (Acute Respiratory Infection) at primary care and pneumonia at tertiary hospitals", "Community surveys and school-based surveillance only"],
    answer: 0,
    explanation: "India's sentinel influenza surveillance monitors: ILI (Influenza-Like Illness - fever ≥38°C + cough or sore throat, onset within 10 days, outpatient cases) at PHC/CHC level, and SARI (Severe Acute Respiratory Infection - history of fever or fever ≥38°C + cough or sore throat + onset within 10 days + requiring hospitalization) at hospital level. ILI tracks community-level transmission; SARI tracks severe disease burden."
  },
  {
    id: 26,
    question: "INSACOG (Indian SARS-CoV-2 Genomics Consortium), established during the COVID-19 pandemic, was created primarily for which surveillance function?",
    options: ["Clinical trial coordination for COVID-19 vaccines", "Genomic sequencing and surveillance of SARS-CoV-2 variants circulating in India", "Contact tracing and quarantine management at national level", "Serological surveillance for COVID-19 herd immunity estimation"],
    answer: 1,
    explanation: "INSACOG (Indian SARS-CoV-2 Genomics Consortium) was established in December 2020 as a multi-laboratory network under the Ministry of Health and Family Welfare and DST to conduct whole-genome sequencing of SARS-CoV-2 for variant surveillance. It tracked the emergence and spread of VOCs including Delta and Omicron in India and informed public health responses. It expanded to 54 laboratories across India."
  },
  {
    id: 27,
    question: "National seroprevalence surveys (serosurveys) for SARS-CoV-2 conducted in India (2020-2021) primarily measured which antibody to assess population exposure?",
    options: ["Anti-spike (S) protein IgG - vaccination and infection marker", "Anti-nucleocapsid (N) protein IgG - infection-only marker", "Neutralizing antibody titers", "Anti-spike IgM for recent infection detection"],
    answer: 1,
    explanation: "India's national COVID-19 seroprevalence surveys (4 rounds conducted by ICMR, 2020-2021) used anti-nucleocapsid (N) protein IgG as the primary marker because N protein antibodies are produced only in response to natural infection, NOT vaccination. This allowed estimation of infection-derived immunity independent of vaccination status. By the 4th serosurvey (June-July 2021), ~67.6% seroprevalence was detected."
  },
  {
    id: 28,
    question: "Global pneumonia burden in children under 5 years: pneumonia is the leading single infectious cause of child mortality. Which pathogen is the most important bacterial cause of pneumonia in children under 5 years globally?",
    options: ["Staphylococcus aureus", "Streptococcus pneumoniae (pneumococcus)", "Haemophilus influenzae type b (Hib)", "Klebsiella pneumoniae"],
    answer: 1,
    explanation: "Streptococcus pneumoniae (pneumococcus) is the leading bacterial cause of pneumonia mortality in children under 5 years globally. WHO estimates pneumococcal disease causes approximately 300,000-500,000 child deaths annually. Hib is the second most important bacterial cause. PCV (Pneumococcal Conjugate Vaccine) and Hib vaccine are included in UIP schedules. India introduced PCV in UIP from 2017 in phased manner."
  },
  {
    id: 29,
    question: "The African meningitis belt spans approximately 26 countries in sub-Saharan Africa. The primary driver of large meningococcal epidemics in this region, particularly the seasonal outbreak pattern, is associated with:",
    options: ["HIV co-infection rates in the region", "Dry Harmattan winds, crowding during dry season, and low population immunity to Neisseria meningitidis serogroup A", "Malnutrition and vitamin D deficiency during rainy season", "Overcrowded refugee camps during conflicts"],
    answer: 1,
    explanation: "Meningococcal epidemics in the African meningitis belt occur characteristically during the dry season (December-June), associated with dry dusty Harmattan winds that damage nasopharyngeal mucosa, facilitating meningococcal invasion. Low population immunity and crowding also contribute. Serogroup A has caused the largest epidemics. MenAfriVac (MenA conjugate vaccine) has dramatically reduced serogroup A epidemics since its introduction in 2010."
  },
  {
    id: 30,
    question: "India's pandemic preparedness framework is guided by which national plan, and which agency coordinates the multi-sectoral response during a health emergency?",
    options: ["National Disaster Management Plan; NDMA alone", "National Action Plan for Health Security (NAPHS) under IHR 2005; coordinated by MoHFW with NDMA, NCDC, and others", "National Health Policy 2017; coordinated by NiTI Aayog", "National Epidemic Act 1897; coordinated by state health departments independently"],
    answer: 1,
    explanation: "India developed its National Action Plan for Health Security (NAPHS) 2019-2023 under IHR 2005 obligations to strengthen core capacities across surveillance, laboratory, response, and governance. During health emergencies, MoHFW coordinates with NCDC (National Centre for Disease Control), ICMR, NDMA, and state governments. The Epidemic Diseases Act 1897 (amended 2020) and Disaster Management Act 2005 provide legal powers."
  },
  {
    id: 31,
    question: "Nipah virus outbreak investigation in Kerala identified which exposure as the primary source of human cases in the 2018 outbreak?",
    options: ["Consumption of undercooked pork from infected pigs", "Contact with Pteropus bat-contaminated materials (fruit, date palm sap, direct bat contact) through a single index case with healthcare transmission chain", "Mosquito bite from Culex species", "Contaminated water source in the community"],
    answer: 1,
    explanation: "The 2018 Kerala Nipah outbreak originated from a single index case (Kozhikode district) who likely had exposure to Pteropus (fruit bat) excreta/contaminated materials. Subsequent transmission occurred primarily in healthcare settings among caregivers and healthcare workers, demonstrating nosocomial amplification. Strict infection prevention and control measures including PPE, contact tracing, and isolation contained the outbreak. 17 of 18 cases died (CFR 94%)."
  },
  {
    id: 32,
    question: "Which surveillance system in India specifically tracks influenza virus strains circulating in the country to inform annual vaccine strain selection?",
    options: ["Integrated Disease Surveillance Programme (IDSP) weekly surveillance only", "WHO Global Influenza Surveillance and Response System (GISRS) network including NIV Pune and other national influenza centers", "National Centre for Disease Control (NCDC) outbreak investigation only", "Central Drugs Standard Control Organisation (CDSCO) post-market surveillance"],
    answer: 1,
    explanation: "India participates in the WHO Global Influenza Surveillance and Response System (GISRS) through National Influenza Centers (NICs), primarily the National Institute of Virology (NIV), Pune. These centers perform viral isolation, characterization, and antigenic analysis of influenza strains. Data is shared with WHO GISRS twice yearly to inform Northern and Southern Hemisphere vaccine strain selection recommendations."
  },
  {
    id: 33,
    question: "RSV (Respiratory Syncytial Virus) disease burden surveillance in India shows which epidemiological pattern?",
    options: ["RSV peaks in summer months (April-June) across India", "RSV shows winter seasonality in temperate northern India and monsoon-associated peaks in tropical southern India", "RSV has no seasonal pattern in tropical India", "RSV only affects immunocompromised adults in India"],
    answer: 1,
    explanation: "RSV seasonality in India shows geographic variation: winter peaks (November-February) in northern temperate regions and monsoon-season peaks (July-September) in southern tropical regions. RSV is the dominant cause of bronchiolitis requiring hospitalization in infants under 12 months. ICMR sentinel hospital-based surveillance has characterized RSV disease burden and seasonality in India, which is relevant for timing of preventive interventions."
  },
  {
    id: 34,
    question: "COVID-19 pandemic waves in India showed distinct variant-driven epidemiology. The second wave (April-May 2021) was predominantly driven by which variant and was notable for which epidemiological feature?",
    options: ["Alpha variant; primarily affected elderly only", "Delta variant (B.1.617.2); dramatically increased transmissibility, affected younger age groups, and caused massive surge overwhelming health systems", "Beta variant; primarily nosocomial transmission pattern", "Omicron variant; milder disease but extremely high case counts"],
    answer: 1,
    explanation: "India's devastating second COVID-19 wave (April-May 2021) was driven predominantly by the Delta variant (B.1.617.2), first identified in India. Delta had significantly higher transmissibility (R0 ~6-7 vs ~2.5 for ancestral strain), caused more severe disease, affected younger age groups more than earlier waves, and resulted in unprecedented healthcare system strain. It subsequently became the globally dominant variant before being displaced by Omicron."
  },
  {
    id: 35,
    question: "Pandemic preparedness: which international legal framework defines core capacity requirements for disease surveillance, reporting, and response that all WHO member states including India are obligated to implement?",
    options: ["Convention on Biological Diversity (CBD)", "International Health Regulations (IHR) 2005", "Global Health Security Agenda (GHSA)", "Biological Weapons Convention (BWC)"],
    answer: 1,
    explanation: "The International Health Regulations (IHR) 2005, which came into force in 2007, is the legally binding international framework requiring all 196 WHO member states to develop core capacities in surveillance, reporting, response, and laboratory functions. IHR requires notification of potential Public Health Emergencies of International Concern (PHEIC). India's NAPHS was developed to fulfill IHR core capacity obligations. JEE (Joint External Evaluation) assesses IHR implementation."
  },
  {
    id: 36,
    question: "Airborne vs droplet transmission classification has significant implications for infection prevention and control. Which of the following is correctly classified as requiring airborne precautions (not just droplet)?",
    options: ["Influenza (seasonal)", "Rubella", "Measles, active pulmonary tuberculosis, and varicella/disseminated zoster", "SARS-CoV-2 in all clinical settings without aerosol-generating procedures"],
    answer: 2,
    explanation: "Diseases requiring airborne precautions (negative pressure room, N95 respirator) include: measles, active pulmonary tuberculosis, and varicella/disseminated zoster - all transmitted by droplet nuclei (<5 microns diameter) that remain suspended in air. Influenza and rubella require droplet precautions (surgical mask, 1-metre distance). SARS-CoV-2 requires airborne precautions during aerosol-generating procedures; standard droplet+contact precautions otherwise, though WHO guidance evolved during pandemic."
  },
  {
    id: 37,
    question: "Influenza strain characterization identifies which two surface proteins that determine the H and N nomenclature, and which of these is the primary target of antibody-mediated immunity?",
    options: ["Hemagglutinin (H) and Neuraminidase (N); both equally important for immunity", "Hemagglutinin (H) and Neuraminidase (N); Hemagglutinin is the primary target of neutralizing antibodies mediating protective immunity", "Matrix protein (M) and Nucleoprotein (NP); both are primary immunity targets", "Polymerase (PB1, PB2, PA) proteins; these determine virulence"],
    answer: 1,
    explanation: "Influenza A viruses are classified by Hemagglutinin (H, 18 subtypes) and Neuraminidase (N, 11 subtypes) surface glycoproteins. Hemagglutinin is the primary target of virus-neutralizing antibodies that mediate protective immunity - antibodies block HA binding to sialic acid receptors on host cells. Annual vaccine strain selection targets the HA of circulating strains. Neuraminidase antibodies provide additional (non-neutralizing) immunity and are targeted by antiviral drugs (oseltamivir)."
  },
  {
    id: 38,
    question: "India's National Rabies Control Programme targets rabies elimination by 2030 through a 'One Health' approach. Dog bite incidence in India is estimated at approximately how many exposures per year, necessitating post-exposure prophylaxis?",
    options: ["100,000 dog bites per year", "500,000 dog bites per year", "1.5-2 crore (15-20 million) dog bites per year", "5 crore (50 million) dog bites per year"],
    answer: 2,
    explanation: "India has one of the highest dog bite burdens globally, with an estimated 1.5-2 crore (15-20 million) dog bite exposures annually. Dogs are responsible for >96% of human rabies deaths in India. India accounts for approximately 36% of global rabies deaths (~18,000-20,000/year). The National Rabies Control Programme focuses on mass dog vaccination (anti-rabies vaccine - ARV campaigns), PEP availability, and One Health coordination."
  },
  {
    id: 39,
    question: "Kala-azar (visceral leishmaniasis) elimination program in India defines elimination as achieving a case incidence below which threshold at block (sub-district) level?",
    options: ["Less than 10 cases per 10,000 population per year", "Less than 1 case per 10,000 population per year", "Less than 1 case per 100,000 population per year", "Zero cases (complete elimination) at block level"],
    answer: 1,
    explanation: "India's Kala-azar Elimination Programme, launched in 2005 with a target initially set for 2015 (subsequently revised), defines elimination as achieving VL incidence of less than 1 case per 10,000 population per year at the block (sub-district) level. Progress is monitored through active and passive case detection, rK39 test-based diagnosis, and indoor residual spraying (IRS) with insecticide coverage indicators. India has made significant progress toward this target."
  },
  {
    id: 40,
    question: "Chikungunya epidemiology in India: the 2006 outbreak was one of the largest in India's history. Which vector was identified as primarily responsible for urban chikungunya transmission during this outbreak, differing from the classical pattern?",
    options: ["Culex quinquefasciatus (the primary urban vector)", "Aedes aegypti (classical vector) and Aedes albopictus (re-emerged as efficient urban vector during 2006)", "Anopheles stephensi (urban malaria vector)", "Mansonia mosquitoes"],
    answer: 1,
    explanation: "The massive 2006 chikungunya outbreak in India (affecting >1.25 million cases across multiple states) was notable for the prominent role of Aedes albopictus alongside Aedes aegypti. A key mutation in the E1 envelope glycoprotein (E1-A226V) enhanced chikungunya virus replication and transmission efficiency in Ae. albopictus, expanding the geographic range of outbreaks to areas where Ae. aegypti was absent. This represented a significant evolutionary epidemiological event."
  },
  {
    id: 41,
    question: "Zika virus infection causes congenital Zika syndrome. What is the critical window of pregnancy during which maternal Zika infection poses the highest risk of fetal microcephaly?",
    options: ["Third trimester (weeks 28-40)", "Second trimester (weeks 14-27)", "First trimester (weeks 1-13), with risk extending into second trimester", "Peripartum period (last 2 weeks before delivery)"],
    answer: 2,
    explanation: "Congenital microcephaly and other CNS malformations (cortical malformations, calcifications, cerebellar hypoplasia) from Zika virus infection have highest risk when maternal infection occurs in the first trimester (weeks 1-13), when neurogenesis and cortical development are most active. Risk exists through the second trimester for some malformations. The overall risk of birth defects in women with symptomatic Zika infection during pregnancy is estimated at 5-10%."
  },
  {
    id: 42,
    question: "Lymphatic Filariasis Transmission Assessment Survey (TAS) is conducted after completing at least 5 rounds of MDA in an implementation unit. What is the TAS criteria for stopping MDA (passing TAS)?",
    options: ["Microfilaremia prevalence below 5% in sentinel sites", "Antigen prevalence in 6-7 year old children below the critical cut-off of 2% (for Wuchereria bancrofti) or antibody prevalence below 2% at TAS", "Mf prevalence below 1% in the general population survey", "Zero filarial transmission detected by entomological surveys"],
    answer: 1,
    explanation: "TAS (Transmission Assessment Survey) for lymphatic filariasis uses immunochromatographic card tests (ICT) for circulating filarial antigen (CFA) in children aged 6-7 years (school-age children who would have been exposed since birth post-MDA). The critical cut-off is <2% antigen prevalence (for W. bancrofti). If TAS is passed, MDA can be stopped and post-MDA surveillance begins. This WHO-standardized survey replaced sentinel/spot check surveys."
  },
  {
    id: 43,
    question: "Scrub typhus epidemiology in India shows which geographic and seasonal distribution pattern?",
    options: ["Endemic year-round in all parts of India with equal distribution", "Predominantly in monsoon and post-monsoon months (October-January) in foothill areas, scrub vegetation zones of northeast India, Himalayan foothills, and parts of southern India; underdiagnosed nationwide", "Exclusively in coastal areas during summer months", "Only in urban slum areas of metropolitan cities"],
    answer: 1,
    explanation: "Scrub typhus shows peak incidence in post-monsoon months (October-January) coinciding with peak chigger mite (Leptotrombidium species) larval activity. It is prevalent in scrub vegetation transitional zones (ecotones), forest fringes, and foothill areas. High-burden states include Meghalaya, Assam, Sikkim, Uttarakhand, Himachal Pradesh, Tamil Nadu, and Telangana. Nationwide, scrub typhus is an important but underdiagnosed cause of Acute Febrile Illness (AFI)."
  },
  {
    id: 44,
    question: "Plague surveillance in India focuses on which states as historically endemic areas, and which surveillance activity is the key early warning indicator for plague risk?",
    options: ["All states equally; routine blood culture surveillance", "Historically endemic areas in Himachal Pradesh, Uttarakhand, and parts of Rajasthan; rodent die-off (epizootic) surveillance as an early warning signal", "Only Gujarat and Maharashtra; mosquito surveillance", "Only northeastern states; flea index monitoring"],
    answer: 1,
    explanation: "India's plague-endemic areas are primarily in Himachal Pradesh (Kinnaur, Lahaul-Spiti), Uttarakhand, and historically Rajasthan and Karnataka. The 1994 Surat pneumonic plague outbreak prompted strengthened surveillance. Rodent die-offs (epizootics) preceding human cases serve as the key early warning indicator, as Yersinia pestis first causes high mortality in rodent populations. Rodent surveillance, flea index monitoring, and rodent serology are key components."
  },
  {
    id: 45,
    question: "Kyasanur Forest Disease (KFD) epidemiology: which surveillance finding serves as an early warning for increased KFD human case risk?",
    options: ["Increased Aedes mosquito density in forest areas", "Die-off of monkeys (langurs and macaques) in KFD-endemic forest areas of Karnataka", "Increased migratory bird activity in endemic areas", "Detection of KFD antibodies in cattle herds"],
    answer: 1,
    explanation: "Monkey die-offs (langurs - Semnopithecus entellus and macaques - Macaca radiata) in forested areas of Karnataka serve as the primary early warning signal for KFD human case risk, as monkeys are highly susceptible amplifying hosts for KFD virus. Forest workers, shepherds, and people entering endemic forests are at highest human risk. Haemaphysalis ticks (H. spinigera, H. turturis) are the primary vectors."
  },
  {
    id: 46,
    question: "Crimean-Congo Haemorrhagic Fever (CCHF) has been reported in India, primarily in which state, and what is the primary route of transmission to humans?",
    options: ["Kerala; transmitted through contact with infected bats", "Gujarat (first confirmed outbreak 2011, Amreli district); transmitted through bite of Hyalomma ticks or contact with blood/tissues of viremic animals or humans", "Rajasthan; transmitted through contaminated water", "Maharashtra; transmitted through Culex mosquito bites"],
    answer: 1,
    explanation: "CCHF was first laboratory-confirmed in India in 2011 in Amreli district, Gujarat, and subsequent cases have been identified in Gujarat, Rajasthan, and other states. Primary transmission occurs through bite of infected Hyalomma ticks or through direct contact with blood, secretions, or tissues of viremic animals (livestock) or humans. Human-to-human nosocomial transmission is an important concern. CFR is 10-40%. CCHF virus is a Nairovirus (Bunyaviridae)."
  },
  {
    id: 47,
    question: "Yellow fever vaccination certificate requirements under IHR: which travelers to India require proof of yellow fever vaccination according to India's entry requirements?",
    options: ["All international travelers arriving in India", "Travelers arriving from any African country", "Travelers arriving from countries with risk of yellow fever transmission (endemic countries in Africa and South America), or travelers who have transited through such countries", "Only travelers without valid passport"],
    answer: 2,
    explanation: "India requires a valid International Certificate of Vaccination or Prophylaxis (ICVP) for yellow fever for travelers arriving from countries with risk of yellow fever transmission (WHO yellow fever endemic list in Africa and South America) or travelers who have transited for >12 hours through airports of such countries. Since July 2016, ICVP validity is lifetime (changed from 10-year validity). This is an IHR 2005 measure to prevent yellow fever importation into India, which has competent Aedes vectors."
  },
  {
    id: 48,
    question: "One Health surveillance for zoonoses integrates human, animal, and environmental health sectors. Which Indian government initiative represents a formal One Health coordination mechanism?",
    options: ["National Vector Borne Disease Control Programme (NVBDCP)", "National One Health Mission / One Health framework involving MoHFW, MoA, MoEFCC, and ICMR-NCDC-ICAR coordination", "National AIDS Control Organisation (NACO)", "Pradhan Mantri Jan Arogya Yojana (PMJAY)"],
    answer: 1,
    explanation: "India's National One Health Mission (announced in Union Budget 2021-22) and the One Health Framework involve coordination between Ministry of Health and Family Welfare (MoHFW), Ministry of Agriculture and Farmers' Welfare, Ministry of Environment, Forest and Climate Change, and scientific bodies including ICMR, NCDC, ICAR, and NABI. This multi-sectoral approach addresses zoonotic disease surveillance (rabies, brucellosis, avian influenza, Nipah, KFD, etc.) at the human-animal-environment interface."
  },
  {
    id: 49,
    question: "ICMR's Virus Research and Diagnostic Laboratory (VRDL) network was established to strengthen laboratory-based surveillance for emerging and re-emerging infections. What is the primary function of the VRDL network?",
    options: ["To conduct phase 3 clinical trials for antiviral drugs", "To provide decentralized diagnostic capacity for viral diseases and support outbreak investigation across states, reducing dependence on central reference laboratories", "To manufacture vaccines for national immunization programs", "To conduct population-based seroprevalence surveys only"],
    answer: 1,
    explanation: "The ICMR-VRDL network (established from 2013, expanded significantly during COVID-19) consists of >100 VRDLs established in medical college hospitals across all states and UTs. Its primary functions are: providing decentralized diagnostic capacity for viral diseases (including emerging/re-emerging infections), supporting outbreak investigation, training laboratory personnel, and reporting surveillance data to ICMR and NCDC. VRDLs were critical nodes in India's COVID-19 testing expansion."
  },
  {
    id: 50,
    question: "The MDA (Mass Drug Administration) coverage indicator for lymphatic filariasis elimination is monitored as 'treatment coverage' vs 'programme coverage'. Which measure is epidemiologically more meaningful for assessing MDA impact?",
    options: ["Programme coverage (drugs distributed / total population) as it reflects program reach", "Treatment coverage (drugs consumed / total population), also called epidemiological coverage, which reflects actual drug ingestion and is more predictive of microfilaremia reduction", "Number of MDA rounds completed regardless of coverage achieved", "Percentage of health workers trained in MDA distribution"],
    answer: 1,
    explanation: "Treatment coverage (epidemiological coverage) - the proportion of eligible population who actually consumed the drugs - is more meaningful than programme coverage (drugs distributed) for predicting MDA impact on microfilaremia prevalence. WHO recommends ≥65% treatment coverage (drugs actually ingested) to achieve the microfilaremia reduction needed for elimination. Post-MDA coverage surveys using validated questionnaires assess drug ingestion, not just distribution, in random household samples."
  },
];

export default questions;

const questions = [
  {
    id: 1,
    question: "Which of the following correctly lists all vaccines given to a newborn at birth under the Universal Immunization Programme (UIP) in India?",
    options: [
      "BCG, OPV-0, Hepatitis B birth dose",
      "BCG, OPV-0, Hepatitis B birth dose, Vitamin K",
      "BCG, Hepatitis B birth dose, IPV",
      "BCG, OPV-0, Hepatitis B birth dose, IPV"
    ],
    answer: 0,
    explanation: "At birth, three vaccines are given under UIP: BCG (prevents tuberculosis), OPV-0 (zero dose of oral polio vaccine), and Hepatitis B birth dose. Vitamin K is a drug, not a vaccine. IPV is given at 6 weeks along with other primary series vaccines, not at birth."
  },
  {
    id: 2,
    question: "The pentavalent vaccine introduced in India's UIP is classified as which type of vaccine?",
    options: [
      "Live attenuated combination vaccine",
      "Killed/inactivated combination vaccine containing toxoid components",
      "Subunit combination vaccine",
      "Conjugate polysaccharide vaccine"
    ],
    answer: 1,
    explanation: "Pentavalent vaccine combines Diphtheria toxoid + Tetanus toxoid + whole-cell killed Pertussis (DTP) + inactivated Hepatitis B surface antigen + conjugated Haemophilus influenzae type b (Hib). It is classified as an inactivated/killed combination vaccine with toxoid components. The Hib component specifically is a conjugate vaccine (polysaccharide coupled to a carrier protein)."
  },
  {
    id: 3,
    question: "Which temperature range must be maintained for oral polio vaccine (OPV) at state vaccine stores in India?",
    options: [
      "+2 to +8 degrees Celsius",
      "0 to +4 degrees Celsius",
      "-15 to -25 degrees Celsius",
      "-30 to -40 degrees Celsius"
    ],
    answer: 2,
    explanation: "OPV is the most heat-sensitive vaccine in the UIP schedule. At state and regional vaccine stores, OPV must be stored at -15 to -25 degrees Celsius (frozen). At district and peripheral health facility (PHC/subcentre) level, OPV is stored at +2 to +8 degrees Celsius but only for the duration of the immunization session period. Freeze-sensitive vaccines such as DPT, TT, and Hepatitis B must never be frozen."
  },
  {
    id: 4,
    question: "A Vaccine Vial Monitor (VVM) showing the inner square darker than the outer circle indicates which stage, and what action should be taken?",
    options: [
      "Stage 2 - vaccine is safe to use",
      "Stage 3 - vaccine is approaching discard point but can still be used",
      "Stage 4 - vaccine must be discarded immediately",
      "Stage 1 - vaccine has been adequately refrigerated"
    ],
    answer: 2,
    explanation: "VVM has four stages. Stage 1: inner square much lighter than outer circle - safe to use. Stage 2: inner square slightly lighter - still safe, use soon. Stage 3: inner square matches outer circle - discard point reached, do not use. Stage 4: inner square darker than outer circle - vaccine must be discarded. The VVM tracks cumulative heat exposure; darkness of the inner square corresponds to accumulated heat damage."
  },
  {
    id: 5,
    question: "Under the Open Vial Policy (OVP) in India's UIP, which vaccine CANNOT be used in subsequent immunization sessions after opening?",
    options: [
      "DPT",
      "Hepatitis B",
      "OPV",
      "BCG"
    ],
    answer: 3,
    explanation: "The Open Vial Policy allows multi-dose vials of OPV, DPT, TT, Hepatitis B, and liquid pentavalent vaccines to be used in subsequent sessions up to 4 weeks if stored properly, cap is intact, VVM has not reached discard point, and sterility is maintained. BCG is excluded from OVP because it is a live freeze-dried vaccine and reconstituted BCG must be discarded within 3-4 hours of reconstitution to prevent loss of viability."
  },
  {
    id: 6,
    question: "According to the revised WHO/India AEFI classification system, a cluster of similar adverse events occurring at community level following vaccination with the same vaccine lot is classified as:",
    options: [
      "Vaccine product-related reaction",
      "Vaccine quality defect-related reaction",
      "Immunization error-related reaction",
      "Immunization anxiety-related reaction"
    ],
    answer: 1,
    explanation: "The WHO 2013 revised AEFI classification defines a vaccine quality defect-related reaction as one caused by a defect in the vaccine product including its formulation or manufacturing. A cluster of cases with similar symptoms after the same lot or batch is a hallmark of a quality defect. Immunization error reactions are scattered and related to handling or administration technique. Anxiety reactions are individual psychogenic responses unrelated to vaccine chemistry."
  },
  {
    id: 7,
    question: "The Electronic Vaccine Intelligence Network (eVIN) in India primarily aims to:",
    options: [
      "Digitize AEFI reporting and pharmacovigilance at national level",
      "Provide real-time data on vaccine stocks and cold chain equipment status at all immunization points",
      "Track immunization status of individual beneficiaries through biometric linking",
      "Manage procurement and tendering of vaccines at the central government level"
    ],
    answer: 1,
    explanation: "eVIN, implemented by UNDP in collaboration with MoHFW, digitizes vaccine stock management and cold chain temperature monitoring across all immunization points. It uses smartphones and a cloud-based dashboard to provide real-time data on vaccine stock levels and cold chain equipment performance, enabling timely replenishment and preventing stockouts or wastage. Individual beneficiary tracking is done under the U-WIN platform."
  },
  {
    id: 8,
    question: "Mission Indradhanush was launched in December 2014 with the primary target of achieving what level of full immunization coverage, and by when?",
    options: [
      "75% by 2017",
      "90% by 2018",
      "85% by 2020",
      "95% by 2022"
    ],
    answer: 1,
    explanation: "Mission Indradhanush was launched in December 2014 with the goal of achieving at least 90% full immunization coverage of all children and pregnant women by 2018. It targeted low-performing districts and urban areas with high numbers of unvaccinated or partially vaccinated children. Intensified Mission Indradhanush (IMI) 2.0 and IMI 3.0 (Har Ghar Dastak) were subsequent phases extending this coverage push."
  },
  {
    id: 9,
    question: "Pneumococcal Conjugate Vaccine (PCV) was introduced into India's UIP in 2017 in select states. What schedule does it follow?",
    options: [
      "6-10-14 weeks with booster at 9 months",
      "6 and 14 weeks with booster at 9 months",
      "6 and 10 weeks with booster at 15 months",
      "9 months and 15 months only"
    ],
    answer: 1,
    explanation: "PCV was introduced in India's UIP in 2017 in 5 states (Himachal Pradesh, Bihar, Madhya Pradesh, Rajasthan, Uttar Pradesh) using a 2+1 schedule: primary doses at 6 weeks and 14 weeks, and a booster at 9 months. It has since been progressively expanded nationally. The 6-10-14 week schedule is used for pentavalent and IPV primary series, not for PCV."
  },
  {
    id: 10,
    question: "As per NFHS-5 (2019-21), what was the percentage of children aged 12-23 months who were fully immunized in India, and how did this compare to NFHS-4?",
    options: [
      "62.0% in NFHS-5, up from 44.0% in NFHS-4",
      "76.4% in NFHS-5, up from 62.0% in NFHS-4",
      "83.6% in NFHS-5, up from 76.4% in NFHS-4",
      "90.0% in NFHS-5, up from 76.4% in NFHS-4"
    ],
    answer: 1,
    explanation: "NFHS-5 (2019-21) reported that 76.4% of children aged 12-23 months in India were fully immunized, a significant increase from 62.0% in NFHS-4 (2015-16). Full immunization for NFHS survey purposes is defined as receiving BCG, three doses each of DPT and OPV, and one dose of measles-containing vaccine. This 14.4 percentage point increase is attributed partly to Mission Indradhanush interventions."
  },
  {
    id: 11,
    question: "In immunization program analysis, the dropout rate between DPT1 and DPT3 is calculated using which formula?",
    options: [
      "(DPT1 - DPT3) / DPT3 x 100",
      "(DPT1 - DPT3) / DPT1 x 100",
      "(DPT3 - DPT1) / DPT1 x 100",
      "(DPT1 - DPT3) / Target population x 100"
    ],
    answer: 1,
    explanation: "Dropout rate = (DPT1 doses - DPT3 doses) / DPT1 doses x 100. This measures the proportion of children who started the vaccine series but did not complete it. A dropout rate greater than 10% indicates a significant program problem. Left-out rate = (target - DPT1) / target x 100, measuring those never reached by the program. Together, dropout and left-out rates diagnose different types of program failure and guide targeted interventions."
  },
  {
    id: 12,
    question: "Which of the following correctly defines a 'fully immunized child' for survey-based coverage assessment (NFHS) for a child aged 12-23 months?",
    options: [
      "BCG + 3 doses OPV + 3 doses DPT + Measles",
      "BCG + 3 doses OPV + 3 doses DPT + Measles + Hepatitis B",
      "BCG + 3 doses OPV + 3 doses Pentavalent + Measles + Vitamin A",
      "BCG + 3 doses OPV + 3 doses DPT + 3 doses Hepatitis B + Measles"
    ],
    answer: 0,
    explanation: "For NFHS and coverage survey purposes, a fully immunized child (aged 12-23 months) is one who has received BCG + 3 doses OPV + 3 doses DPT + 1 dose measles-containing vaccine by 12 months of age. While current UIP includes many additional vaccines (rotavirus, PCV, fIPV, MR), the standard NFHS benchmark used to report the 76.4% coverage figure remains this traditional definition."
  },
  {
    id: 13,
    question: "The herd immunity threshold for measles is approximately 92-95% because measles has which basic reproduction number (R0)?",
    options: [
      "R0 of 2-4",
      "R0 of 5-7",
      "R0 of 12-18",
      "R0 of 20-25"
    ],
    answer: 2,
    explanation: "Herd immunity threshold (HIT) = 1 - (1/R0). Measles has R0 of 12-18, one of the highest of any infectious disease, giving HIT approximately 93-95%. This explains why 95% vaccination coverage is needed to prevent measles outbreaks. For comparison: polio R0 is 5-7 (HIT approximately 80-86%), seasonal influenza R0 is 2-3 (HIT approximately 50-67%), COVID-19 original strain R0 approximately 2-3 (HIT approximately 50-67%)."
  },
  {
    id: 14,
    question: "The primary immune response differs from the secondary (anamnestic) immune response in that the primary response has which characteristics?",
    options: [
      "Shorter lag phase, higher antibody titers, and predominantly IgG",
      "Longer lag phase, predominantly IgM, and lower antibody titers",
      "Immediate onset, equal IgM and IgG, and longer duration",
      "Shorter lag phase, predominantly IgM, and higher affinity antibodies"
    ],
    answer: 1,
    explanation: "Primary immune response (first antigen exposure): longer lag phase (7-14 days), lower peak antibody titers, predominantly IgM initially followed by low-level IgG, shorter duration. Secondary immune response (re-exposure or booster): shorter lag phase (2-5 days), markedly higher antibody titers, predominantly high-affinity IgG (due to somatic hypermutation and class switching), longer duration from memory B and T cells. This immunological basis underpins the rationale for booster doses in vaccine schedules."
  },
  {
    id: 15,
    question: "At the population level, which scenario is the most appropriate public health application of passive immunization?",
    options: [
      "Mass immunization campaigns for long-term community-level herd protection",
      "Post-exposure prophylaxis in unimmunized individuals requiring immediate protection",
      "Routine immunization of neonates to establish long-term immune memory",
      "Pre-exposure prophylaxis campaigns covering entire high-risk population groups"
    ],
    answer: 1,
    explanation: "Passive immunization provides immediate but temporary protection (weeks to months). Its primary population-level application is post-exposure prophylaxis for unimmunized or inadequately immunized individuals: rabies immunoglobulin after animal exposure, Hepatitis B immunoglobulin for unimmunized exposed persons, tetanus immunoglobulin for wound management. Active immunization (vaccines) is used for long-term protection and immune memory. Both can be co-administered in some post-exposure scenarios (e.g., rabies, Hepatitis B)."
  },
  {
    id: 16,
    question: "Why are plain polysaccharide vaccines less effective in children under 2 years compared to conjugate vaccines (such as PCV vs PPSV23)?",
    options: [
      "Polysaccharide vaccines induce only T-cell responses without antibody production",
      "Polysaccharide antigens are T-independent and cannot generate immunological memory in infants",
      "Conjugate vaccines contain more potent adjuvants that polysaccharide vaccines lack",
      "Maternal antibodies specifically neutralize polysaccharide vaccines but not conjugate vaccines"
    ],
    answer: 1,
    explanation: "Polysaccharide antigens are T-independent (TI-2) antigens that stimulate B cells directly without T-cell help, resulting in no immunological memory and poor immunogenicity in children under 2 years whose immune systems cannot mount effective T-independent responses. Conjugating the polysaccharide to a carrier protein (e.g., CRM197 or tetanus toxoid) converts it to a T-dependent antigen, enabling T-cell help, germinal center reactions, memory B-cell formation, and effective responses even in infants."
  },
  {
    id: 17,
    question: "Vaccine efficacy (VE) in a randomized controlled trial is calculated using which formula?",
    options: [
      "VE = (Risk in vaccinated - Risk in unvaccinated) / Risk in vaccinated x 100",
      "VE = (Risk in unvaccinated - Risk in vaccinated) / Risk in unvaccinated x 100",
      "VE = Relative risk of disease in vaccinated compared to unvaccinated x 100",
      "VE = (Cases in vaccinated / Cases in unvaccinated) x 100"
    ],
    answer: 1,
    explanation: "Vaccine Efficacy = (ARU - ARV) / ARU x 100 = (1 - Relative Risk) x 100, where ARU is the attack rate in unvaccinated and ARV is the attack rate in vaccinated groups. This measures the proportional reduction in disease risk under ideal RCT conditions. Vaccine effectiveness is the analogous real-world field measure using observational study designs and is generally somewhat lower than efficacy due to differences in population characteristics and conditions of use."
  },
  {
    id: 18,
    question: "In vaccine program evaluation, the Number Needed to Vaccinate (NNV) is the reciprocal of which measure?",
    options: [
      "Vaccine efficacy",
      "Relative risk reduction",
      "Absolute risk reduction",
      "Attributable risk in the vaccinated group"
    ],
    answer: 2,
    explanation: "NNV = 1 / Absolute Risk Reduction (ARR), where ARR = risk in unvaccinated minus risk in vaccinated. NNV represents the number of individuals who need to be vaccinated to prevent one additional case of disease. A lower NNV indicates a more efficient vaccine program. Example: if ARR = 8% (0.08), NNV = 1/0.08 = 12.5. NNV is more useful for public health cost-effectiveness decisions than relative risk reduction, which does not account for baseline risk."
  },
  {
    id: 19,
    question: "In WHO's 30x7 cluster sampling methodology for vaccine coverage surveys, what do the numbers '30' and '7' represent?",
    options: [
      "30 districts and 7 sub-districts per district",
      "30 clusters selected by PPS sampling and 7 eligible children surveyed per cluster",
      "30 households per village and 7 children per household",
      "30 primary sampling units and 7 secondary sampling units per primary unit"
    ],
    answer: 1,
    explanation: "The WHO 30x7 EPI cluster survey involves selecting 30 clusters (typically villages or urban wards) using probability proportional to size (PPS) sampling, and then systematically surveying 7 children aged 12-23 months per cluster, giving a total sample of 210 children. This design provides estimates with acceptable confidence intervals and is the standard for immunization coverage surveys in low- and middle-income countries. It is used to assess both coverage levels and equity."
  },
  {
    id: 20,
    question: "WHO identified vaccine hesitancy as one of the top 10 threats to global health in 2019. The WHO SAGE Working Group described vaccine hesitancy using which conceptual framework?",
    options: [
      "The 4C model: Confidence, Complacency, Convenience, and Calculation",
      "The 3C model: Confidence, Complacency, and Convenience",
      "The VACC model: Vaccine Access, Affordability, Communication, and Capacity",
      "The Health Belief Model applied to vaccine decision-making"
    ],
    answer: 1,
    explanation: "The WHO SAGE Working Group on Vaccine Hesitancy developed the 3C model with three main determinants: (1) Confidence - trust in vaccine effectiveness and safety, and in the health system; (2) Complacency - low perceived risk of vaccine-preventable diseases; (3) Convenience - physical availability, affordability, and willingness to accept vaccination. Some later frameworks added a 4th C for Calculation (risk-benefit assessment), but the WHO SAGE canonical framework is the 3C model."
  },
  {
    id: 21,
    question: "Gavi, the Vaccine Alliance, supports vaccine introduction in countries with per capita GNI at or below approximately what threshold (World Bank classification)?",
    options: [
      "USD 1,000",
      "USD 1,580",
      "USD 2,000",
      "USD 4,000"
    ],
    answer: 1,
    explanation: "Gavi supports low-income countries with a GNI per capita at or below approximately USD 1,580 (based on current World Bank low-income country thresholds). Countries with GNI between this threshold and approximately USD 7,000 are in a co-financing and transition phase. India graduated from Gavi support in 2016-2017, reflecting its economic growth and strong domestic vaccine manufacturing capacity. Post-graduation, India funds its own UIP vaccines while continuing to support global vaccine access through its manufacturing sector."
  },
  {
    id: 22,
    question: "In vaccine clinical trials, what is the primary efficacy endpoint used in Phase III trials to determine whether a vaccine should be licensed?",
    options: [
      "Antibody titer levels at 28 days post-vaccination (immunogenicity endpoint)",
      "T-cell immune response measured by ELISPOT assay",
      "Incidence of laboratory-confirmed disease in vaccinated versus placebo group (clinical endpoint)",
      "Reduction in disease severity scores in breakthrough infections"
    ],
    answer: 2,
    explanation: "Phase III vaccine trials are large-scale RCTs powered to detect a statistically significant reduction in disease incidence. The primary endpoint is a clinical outcome: laboratory-confirmed disease cases. Phase I trials assess safety and dose; Phase II assess immunogenicity and optimize dosing; Phase III assess efficacy against clinical disease in thousands of participants; Phase IV (post-marketing surveillance) assess real-world effectiveness, long-term safety, and rare adverse events at population scale."
  },
  {
    id: 23,
    question: "The Brighton Collaboration was established to create what type of scientific resource for vaccine safety surveillance?",
    options: [
      "Standardized procurement and cold chain logistics protocols for low-income countries",
      "Standardized case definitions for adverse events following immunization to enable international safety data comparison",
      "WHO prequalification criteria for vaccine manufacturers and production facilities",
      "Vaccine schedule harmonization recommendations for developing country programs"
    ],
    answer: 1,
    explanation: "The Brighton Collaboration (established 2000) is a global network that develops standardized case definitions and guidelines for collecting, analyzing, and presenting adverse events following immunization (AEFI). These standardized case definitions enable international comparison of vaccine safety data across trials and post-marketing surveillance programs, support regulatory decision-making, and are used by national AEFI committees worldwide including India's."
  },
  {
    id: 24,
    question: "Post-marketing (Phase IV) surveillance of vaccines for safety signals in India is primarily coordinated through which mechanism?",
    options: [
      "Indian Pharmacopoeia Commission (IPC) vaccine batch release testing",
      "Pharmacovigilance Programme of India (PvPI) under CDSCO, alongside the national AEFI surveillance programme",
      "ICMR Clinical Trial Registry and post-trial monitoring",
      "Directorate General of Health Services (DGHS) hospital-based surveillance"
    ],
    answer: 1,
    explanation: "Post-marketing vaccine safety surveillance in India operates through two parallel systems: (1) Pharmacovigilance Programme of India (PvPI) under CDSCO, which handles spontaneous adverse drug reaction reporting including vaccines; and (2) the national AEFI surveillance programme under UIP, with district, state, and national AEFI committees reviewing and classifying cases. ICMR provides research and evidence synthesis support but does not coordinate routine pharmacovigilance."
  },
  {
    id: 25,
    question: "Under NTEP, which indicator specifically measures the proportion of bacteriologically-confirmed TB patients who were smear or culture negative at the end of treatment AND on at least one previous occasion?",
    options: [
      "Treatment success rate",
      "Cure rate",
      "Case notification rate",
      "Treatment completion rate"
    ],
    answer: 1,
    explanation: "Cure rate specifically refers to bacteriologically-confirmed TB patients who were smear/culture negative at the end of treatment AND on at least one previous occasion during treatment. Treatment success rate is broader and includes both 'cured' and 'treatment completed' (for those without bacteriological confirmation at end of treatment). NTEP targets a treatment success rate of greater than 90% for new DS-TB cases. The distinction is important for program evaluation and is tracked in the Ni-kshay digital system."
  },
  {
    id: 26,
    question: "India's NACP monitoring framework tracks progress toward HIV epidemic control using which primary population-level surveillance indicator?",
    options: [
      "Number of people on antiretroviral therapy (ART) as a proxy for epidemic size",
      "HIV prevalence among antenatal clinic (ANC) attendees through sentinel surveillance",
      "CD4 count at ART initiation as an indicator of late diagnosis",
      "Number of HIV testing and counselling centres operational per district"
    ],
    answer: 1,
    explanation: "HIV prevalence among antenatal clinic (ANC) attendees through sentinel surveillance is the primary epidemiological indicator used in India's NACP to track HIV epidemic trends at population level. ANC attendees serve as a proxy for the general reproductive-age population. India's sentinel surveillance network covers both high-risk groups (HRG) and general population sites. The UNAIDS 95-95-95 targets measure the treatment cascade indicators, which complement the epidemiological surveillance."
  },
  {
    id: 27,
    question: "The National Centre for Vector Borne Disease Control (NCVBDC) was established in 2021. Which combination of diseases does it cover?",
    options: [
      "Malaria and filariasis only",
      "Malaria, filariasis, kala-azar, dengue, chikungunya, Japanese encephalitis, and Zika",
      "All vector-borne diseases including rabies and leptospirosis",
      "Malaria, filariasis, kala-azar, dengue, and tuberculosis"
    ],
    answer: 1,
    explanation: "NCVBDC (formed in 2021 by renaming NVBDCP) covers: Malaria, Lymphatic Filariasis, Kala-azar (Visceral Leishmaniasis), Dengue, Chikungunya, Japanese Encephalitis (JE), and Zika virus disease. Rabies (transmitted by animal bites, not arthropod vectors) is handled under a separate National Rabies Control Programme. Leptospirosis is managed under state programs. NCVBDC coordinates with state vector control programs and ICMR for research support."
  },
  {
    id: 28,
    question: "India achieved national leprosy elimination in 2005. The elimination criterion is defined as prevalence below which threshold?",
    options: [
      "1 case per 10,000 population at national level",
      "1 case per 100,000 population at national level",
      "1 case per 10,000 population at district level",
      "Zero new cases of grade-2 disability nationally"
    ],
    answer: 0,
    explanation: "Leprosy elimination is defined as prevalence below 1 case per 10,000 population. India achieved national-level elimination in December 2005. However, post-elimination surveillance revealed continued transmission in several districts. The current goal under NLEP is achieving sub-national (district-level) elimination. Over 150 districts still exceed the 1/10,000 threshold. Global leprosy strategy targets interruption of transmission (zero new autochthonous cases) by 2030, which is a higher bar than elimination."
  },
  {
    id: 29,
    question: "Under IDSP/IHIP, the 'P', 'L', and 'S' reporting forms are used for surveillance. What do these three forms capture?",
    options: [
      "Primary care, Laboratory, and Secondary care case data",
      "Presumptive/Syndromic cases, Laboratory-confirmed cases, and weekly Summary reports",
      "Patient demographics, Lab results, and Surveillance trends",
      "Population-based data, Lab-based data, and Sample survey data"
    ],
    answer: 1,
    explanation: "IDSP uses three complementary reporting forms: P-form (Presumptive/Syndromic) - reported by community health workers and peripheral health workers based on clinical syndromes without laboratory confirmation; L-form (Laboratory) - reported by laboratories confirming diagnoses through tests; S-form (Summary) - weekly compiled summary of confirmed cases reported by Medical Officers at facility level. IHIP is the digital platform that replaced the older IDSP online portal for real-time case-based data entry and analysis."
  },
  {
    id: 30,
    question: "AFP (Acute Flaccid Paralysis) surveillance is the cornerstone of polio eradication monitoring. The minimum non-polio AFP rate threshold indicating adequate surveillance sensitivity is:",
    options: [
      "1 per 100,000 children under 15 years",
      "2 per 100,000 children under 15 years",
      "5 per 100,000 children under 15 years",
      "1 per 100,000 total population"
    ],
    answer: 1,
    explanation: "WHO standards require a non-polio AFP (NPAFP) rate of at least 2 per 100,000 children under 15 years to demonstrate adequate surveillance sensitivity. Additionally, adequate stool specimen collection (2 specimens within 14 days of paralysis onset, properly transported) in at least 80% of AFP cases is required. A high NPAFP rate indicates the surveillance system would detect wild poliovirus circulation if it occurred, giving confidence in certification of polio-free status."
  },
  {
    id: 31,
    question: "India's kala-azar elimination target defines success at which administrative level and what threshold?",
    options: [
      "National level - less than 1 case per 100,000 population by 2030",
      "District level - less than 1 case per 10,000 population by 2025",
      "Sub-district (block) level - less than 1 case per 10,000 population",
      "Village level - zero indigenous transmission"
    ],
    answer: 2,
    explanation: "India's kala-azar elimination target is less than 1 case per 10,000 population at the sub-district (block) level. This granular geographic target reflects the focal nature of kala-azar transmission concentrated in specific blocks of Bihar, Jharkhand, West Bengal, and Uttar Pradesh. Annual Parasitic Incidence (API) is the key monitoring indicator. India, Bangladesh, and Nepal jointly committed to this elimination target under a regional framework coordinated with WHO SEARO."
  },
  {
    id: 32,
    question: "Lot Quality Assurance Sampling (LQAS) methodology is used for immunization program evaluation. How does it classify program performance?",
    options: [
      "High, medium, or low performing areas based on a continuous percentage scale",
      "Acceptable or not acceptable based on a pre-defined decision threshold using small sample size",
      "Red, yellow, or green zones based on coverage quartile ranking",
      "Priority or non-priority districts based on disease burden indicators"
    ],
    answer: 1,
    explanation: "LQAS classifies program units (called lots) as acceptable or not acceptable using small, fixed samples (usually 19 per lot). A decision threshold (d) is pre-specified; if the number of non-covered individuals in the sample exceeds d, the lot is classified as not acceptable. This binary classification is achieved without requiring a full coverage survey. LQAS is used in immunization and nutrition programs to rapidly identify poorly-performing geographic areas for targeted remedial action."
  },
  {
    id: 33,
    question: "The National Programme for Climate Change and Human Health (NPCCHH) under NCDC primarily conducts surveillance for which categories of health outcomes?",
    options: [
      "Non-communicable diseases aggravated by air pollution only",
      "Vector-borne diseases, heat-related illness, and waterborne diseases most sensitive to climate variability",
      "Respiratory infections due to seasonal cold waves across northern India",
      "Occupational diseases in climate-sensitive agricultural and industrial sectors"
    ],
    answer: 1,
    explanation: "NPCCHH under the National Centre for Disease Control (NCDC) focuses on health impacts of climate change. Core surveillance domains include: vector-borne diseases (malaria, dengue, chikungunya - influenced by temperature, rainfall, and humidity patterns); heat-related illness (heatstroke, heat exhaustion during heatwaves); and waterborne diseases (cholera, typhoid - linked to floods and water contamination events). It also covers food security, extreme weather health impacts, and air quality-related morbidity."
  },
  {
    id: 34,
    question: "The U-WIN platform in India's immunization program is designed to serve which primary function?",
    options: [
      "Track tuberculosis treatment outcomes digitally under NTEP",
      "Provide a digital beneficiary tracking system for universal immunization with a unique ID for pregnant women and children",
      "Monitor cold chain equipment and vaccine stock levels in real time",
      "Manage AEFI reporting and causality assessment at national level"
    ],
    answer: 1,
    explanation: "U-WIN (Universal Immunization - WIN) is India's digital beneficiary tracking platform developed to assign unique IDs to pregnant women and children enrolled in UIP, enabling tracking across geographic locations and health facilities. It is designed to replace paper-based Mother and Child Protection (MCP) cards with a digital system, preventing missed doses when families migrate. U-WIN integrates with the CoWIN platform architecture and complements eVIN (which tracks vaccines and cold chain, not beneficiaries)."
  },
  {
    id: 35,
    question: "In routine district-level UIP monitoring, HMIS-based immunization coverage is calculated using which denominator when recent census data is unavailable?",
    options: [
      "Anganwadi registration data from the district",
      "HMIS target population derived from total population multiplied by crude birth rate",
      "Sample Registration System (SRS) birth cohort projection",
      "NFHS survey-based population estimate for the district"
    ],
    answer: 1,
    explanation: "HMIS targets for immunization at district level are derived from estimated beneficiary numbers calculated as: Total population x Crude Birth Rate = birth cohort, adjusted for survival to the target age group. When census data is outdated between census years, projected populations using annual growth rates are applied. This HMIS-based administrative coverage is the routine monitoring tool, while coverage surveys (NFHS, DLHS, state-level CES) provide independent survey-based verification of coverage claims."
  },
  {
    id: 36,
    question: "The Malaria Elimination Research Alliance India (MERA-India) coordinated by ICMR targets malaria elimination by 2030 under which phased framework?",
    options: [
      "NFME (National Framework for Malaria Elimination) 2016-2030, with phased state-by-state elimination based on Annual Parasite Incidence",
      "NVBDCP Strategic Plan 2017-2022 targeting high-burden states first",
      "WHO SEARO Regional Malaria Elimination Framework 2020-2030",
      "NCVBDC Malaria Action Plan 2021-2025"
    ],
    answer: 0,
    explanation: "India's National Framework for Malaria Elimination (NFME) 2016-2030, coordinated by NCVBDC with research support from ICMR through MERA-India (Malaria Elimination Research Alliance), targets the elimination of malaria (zero indigenous transmission) by 2030. The phased approach classifies states by Annual Parasite Incidence (API): states with API less than 1 targeted for elimination first, with progressive phases through 2030. ICMR's MERA-India consortium links field research to programmatic implementation."
  },
  {
    id: 37,
    question: "India's measles elimination target (as defined by WHO SEARO for the region) requires achieving incidence below what threshold?",
    options: [
      "Less than 5 cases per million population per year",
      "Less than 1 case per million population per year",
      "Zero reported cases nationally",
      "Less than 1 case per 100,000 population per year"
    ],
    answer: 1,
    explanation: "WHO's measles elimination definition requires reducing measles incidence to less than 1 confirmed case per million population per year in every region. The WHO SEARO regional elimination target was originally 2020, revised to 2023 due to COVID-19 pandemic disruptions to immunization. India conducted a nationwide Measles-Rubella (MR) campaign (2017-2020) targeting 9 months to 15 years, but elimination has not yet been achieved given ongoing transmission and sub-optimal coverage in some states."
  },
  {
    id: 38,
    question: "Which of the following most accurately defines a 're-emerging infection' as distinct from an 'emerging infection'?",
    options: [
      "A previously unknown pathogen causing infection in humans for the first time",
      "A known infection that was previously controlled or declining but is increasing again in incidence, geographic range, or drug resistance",
      "A laboratory-engineered pathogen inadvertently released into the environment",
      "Any infection that has crossed species barriers from animals to humans"
    ],
    answer: 1,
    explanation: "Re-emerging infections are known infections previously controlled, declining, or geographically restricted that are now increasing in incidence, geographic range, or drug resistance. Examples: drug-resistant tuberculosis (MDR-TB), dengue (geographic spread to new continents), kala-azar (drug resistance), measles (vaccination coverage gaps), cholera (new genetic variants). Emerging infections are caused by new pathogens or known pathogens appearing in new host species or geographic areas for the first time (e.g., SARS-CoV-2, Nipah, Ebola in West Africa)."
  },
  {
    id: 39,
    question: "The International Health Regulations (IHR 2005) require countries to report which category of public health events to WHO within 24 hours of assessment?",
    options: [
      "Any cluster of unexplained illness with more than 10 cases in a district",
      "Events meeting IHR Annex 2 decision instrument criteria for potential Public Health Emergency of International Concern (PHEIC)",
      "All outbreaks of WHO-designated priority pathogens regardless of size",
      "Any new disease with a case fatality rate exceeding 10% in the first 100 cases"
    ],
    answer: 1,
    explanation: "IHR 2005 requires member states to notify WHO within 24 hours of assessing any event that may constitute a PHEIC, using the IHR Annex 2 decision instrument. Four criteria are assessed: seriousness of public health impact, unusualness or unexpectedness, significant risk of international spread, and risk of restrictions on international travel or trade. Additionally, four specific diseases (smallpox, wild poliovirus, human influenza with new subtype, SARS) always require immediate notification regardless of the decision instrument outcome."
  },
  {
    id: 40,
    question: "India's National One Health Mission and the One Health Consortium under ICMR-DBT operationalize the One Health approach by focusing research on which interface?",
    options: [
      "Human disease burden and pharmaceutical sector capacity building",
      "Human-animal-environment interface to address zoonoses, AMR, and emerging infections",
      "Primary healthcare strengthening and disease surveillance integration",
      "Environmental pollution and occupational disease prevention"
    ],
    answer: 1,
    explanation: "The One Health Consortium, established under ICMR and DBT with ICAR and MoEF participation, and the National One Health Mission (announced 2022 Union Budget) conduct research at the human-animal-environment interface. Core focus areas include: zoonotic disease surveillance, antimicrobial resistance (shared across human, veterinary, and agricultural antibiotic use), and emerging infections at wildlife-human interfaces. This differs from disease-specific vertical programs; One Health uses cross-sectoral coordination and shared research infrastructure."
  },
  {
    id: 41,
    question: "The Global Antimicrobial Resistance and Use Surveillance System (GLASS), which India participates in through ICMR's NARS-Net, is coordinated by which organization?",
    options: [
      "Centers for Disease Control and Prevention (CDC), USA",
      "World Health Organization (WHO)",
      "Global Antibiotic Research and Development Partnership (GARDP)",
      "Wellcome Trust Global AMR Programme"
    ],
    answer: 1,
    explanation: "GLASS (launched 2015) is WHO's global platform for AMR surveillance, aggregating national AMR data from participating countries to monitor trends and guide global policy. India participates in GLASS through ICMR's National AMR Surveillance Network (NARS-Net), which collects AMR data from sentinel hospital sites across India. India's National Action Plan on AMR (NAP-AMR), launched in 2017 and aligned with WHO's 2015 Global Action Plan on AMR, is the policy framework guiding India's participation."
  },
  {
    id: 42,
    question: "BSL-4 (Biosafety Level 4) laboratory containment is required specifically for working with which category of pathogens?",
    options: [
      "HIV, Hepatitis B virus, and Salmonella typhi",
      "Mycobacterium tuberculosis, Bacillus anthracis, and Yersinia pestis",
      "Ebola virus, Marburg virus, and Crimean-Congo Hemorrhagic Fever virus",
      "SARS-CoV-2, influenza A (H5N1), and dengue virus"
    ],
    answer: 2,
    explanation: "BSL-4 is required for agents causing life-threatening disease with a high risk of aerosol transmission for which no available vaccine or specific therapy exists: Ebola virus, Marburg virus, Crimean-Congo Hemorrhagic Fever (CCHF) virus, Lassa fever virus, Hendra virus, Nipah virus (select strains). BSL-3 is used for MTB, B. anthracis, Y. pestis, SARS-CoV-2. BSL-2 for HIV and HBV. BSL-1 for non-pathogenic organisms. ICMR's NIV Pune has operational BSL-3 labs and is the primary site for India's BSL-4 capability development."
  },
  {
    id: 43,
    question: "Standard precautions in research laboratory settings handling human specimens apply to which materials?",
    options: [
      "Only specimens from patients known to have bloodborne infections",
      "All human blood, body fluids, secretions, excretions, and potentially infectious materials regardless of known infection status",
      "Only aerosol-generating procedures involving clinical research specimens",
      "Only procedures involving sharp instruments and needlestick-prone activities"
    ],
    answer: 1,
    explanation: "Standard precautions (formerly Universal Precautions) assume ALL human blood, body fluids, secretions, excretions (except sweat), non-intact skin, and mucous membranes may contain transmissible infectious agents, regardless of the known infection status of the source. In research lab settings, this applies to all human specimens. Components include: hand hygiene, appropriate PPE (gloves, gown, eye protection, mask), respiratory hygiene, safe sharps management, environmental decontamination, and regulated medical waste disposal."
  },
  {
    id: 44,
    question: "Regarding healthcare-associated infection (HAI) surveillance in India, which statement best reflects the current situation?",
    options: [
      "India has a fully operational mandatory national HAI surveillance system coordinated by NCDC",
      "HAI surveillance in India is primarily facility-based with no mandatory national coordination system currently operational",
      "ICMR's NARS-Net serves as the national HAI surveillance system capturing all HAI data",
      "NABH accreditation requirements have led to uniform national HAI data collection"
    ],
    answer: 1,
    explanation: "India currently lacks a formal, mandatory nationally coordinated HAI surveillance program. HAI surveillance is largely facility-based, driven by NABH accreditation requirements for individual hospitals, infection control committees, and individual research studies. ICMR's NARS-Net captures AMR data from clinical isolates (some of which are HAI-related), but this is not a comprehensive HAI surveillance system. National Infection Control Guidelines exist but a mandatory national HAI surveillance registry with standardized reporting is not yet operational across India."
  },
  {
    id: 45,
    question: "The CDC classifies bioterrorism agents into Category A, B, and C. Category A agents (highest priority) share which defining characteristics?",
    options: [
      "They are easily synthesized in makeshift laboratory settings with widely available materials",
      "They have documented prior use as biological weapons in twentieth-century warfare",
      "They can be easily disseminated, cause high mortality, have potential for major public health impact, and may cause public panic",
      "They have no available medical countermeasures and cause invariably fatal disease"
    ],
    answer: 2,
    explanation: "CDC Category A bioterrorism agents are highest priority because they: (1) can be easily disseminated or transmitted person-to-person, (2) cause high mortality with major public health impact, (3) might cause public panic and social disruption requiring special public health preparedness actions. Category A includes: anthrax (Bacillus anthracis), botulism, plague (Yersinia pestis), smallpox (Variola major), tularemia (Francisella tularensis), and viral hemorrhagic fevers (Ebola, Marburg, Lassa). Category B agents such as Brucella are second priority. Category C includes emerging pathogens like Nipah."
  },
  {
    id: 46,
    question: "The Global Health Security Agenda (GHSA), launched in 2014, builds country capacity across which three strategic pillars?",
    options: [
      "Prevention, Detection, and Response",
      "Surveillance, Laboratory, and Emergency Operations",
      "Prevent, Prepare, and Respond",
      "Detect, Contain, and Recover"
    ],
    answer: 0,
    explanation: "GHSA is organized around three strategic pillars: (1) Prevent - prevent avoidable epidemics including AMR, zoonotic diseases, and biosafety/biosecurity; (2) Detect - real-time surveillance, laboratory capacity, reporting; (3) Respond - emergency operations, linking public health with security authorities, medical countermeasures and personnel deployment. The Joint External Evaluation (JEE) tool measures country-level IHR core capacity across 19 technical areas mapped to these pillars. India joined GHSA in 2014 and has undergone JEE assessment."
  },
  {
    id: 47,
    question: "ICMR's high-consequence pathogen research, including BSL-3 diagnostics and research for outbreak pathogens, is anchored at which institution?",
    options: [
      "All India Institute of Medical Sciences (AIIMS), New Delhi",
      "National Institute of Virology (NIV), Pune",
      "National Centre for Disease Control (NCDC), New Delhi",
      "Rajiv Gandhi Centre for Biotechnology (RGCB), Thiruvananthapuram"
    ],
    answer: 1,
    explanation: "ICMR's National Institute of Virology (NIV), Pune is the apex institution for high-consequence pathogen research in India, housing operational BSL-3 facilities and India's most advanced viral diagnostic and research capabilities. NIV played central roles in characterizing Nipah virus outbreaks, SARS-CoV-2 variants, and other emerging infections. India's planned BSL-4 Maximum Containment Laboratory is also being established at NIV Pune. NCDC functions under DGHS (not ICMR) and has separate, complementary biosafety capabilities."
  },
  {
    id: 48,
    question: "Whole Genome Sequencing (WGS) in outbreak investigation provides which critical advantage over conventional molecular typing methods such as MLST or PFGE?",
    options: [
      "Faster turnaround time than PCR-based diagnostic methods",
      "Ability to detect antigens without the need to culture organisms",
      "Higher resolution phylogenetic analysis enabling precise transmission chain reconstruction and source attribution",
      "Real-time field deployment capability without need for central laboratory infrastructure"
    ],
    answer: 2,
    explanation: "WGS provides complete genomic information enabling high-resolution phylogenomics: (1) precise cluster identification and transmission chain reconstruction, (2) source attribution - linking outbreak strains to reservoir, food source, or index case, (3) simultaneous detection of AMR genes and virulence factors, (4) real-time tracking of pathogen evolution during outbreaks. WGS was central to COVID-19 variant surveillance through India's INSACOG network. While WGS has slower turnaround than PCR, it provides far higher discriminatory power than MLST or PFGE for outbreak investigation."
  },
  {
    id: 49,
    question: "Wastewater-based epidemiology (WBE) for pathogen surveillance gained global prominence for tracking which pathogens, and what is its primary public health advantage?",
    options: [
      "Hepatitis A virus; advantage is detecting foodborne clusters before clinical cases occur",
      "Poliovirus and SARS-CoV-2; advantage is detecting community-level pathogen circulation including from asymptomatic individuals before clinical surveillance signals emerge",
      "Vibrio cholerae; advantage is mapping the specific water distribution system contamination point",
      "Salmonella typhi; advantage is identifying specific households harboring chronic typhoid carriers"
    ],
    answer: 1,
    explanation: "WBE gained global prominence for two pathogens: (1) Poliovirus - environmental surveillance of sewage has long complemented AFP surveillance to detect circulating poliovirus; (2) SARS-CoV-2 - wastewater surveillance proved effective for early warning of surges and variant detection 4-14 days before clinical case signals. The primary advantage is detecting population-level pathogen circulation including from asymptomatic and pre-symptomatic individuals who never seek healthcare, providing epidemiological early warning without relying solely on healthcare-seeking behavior. ICMR conducted WBE studies for SARS-CoV-2 across Indian cities."
  },
  {
    id: 50,
    question: "India's INSACOG (Indian SARS-CoV-2 Genomics Consortium), established in December 2020, demonstrated which key pandemic preparedness principle relevant to ICMR's research mandate?",
    options: [
      "A single centralized laboratory is more efficient than a distributed network for timely outbreak genomic analysis",
      "Genomic surveillance networks require mandatory private sector participation to achieve national scale",
      "Distributed national genomic surveillance networks enable geographically representative variant monitoring and rapid public health response during pandemics",
      "International collaboration must precede establishment of national genomic surveillance capability"
    ],
    answer: 2,
    explanation: "INSACOG, established under ICMR, DBT, CSIR, and MoHFW as a network of 54 laboratories across India for SARS-CoV-2 WGS, demonstrated that distributed national genomic surveillance networks enable: (1) geographically representative sampling across diverse populations, (2) rapid identification of variants of concern (Delta and Omicron detected through INSACOG), (3) surge sequencing capacity during waves, and (4) integration of genomic data with clinical and epidemiological information for real-time public health response. This model is now being extended to other priority pathogens under India's broader pandemic preparedness and One Health genomic surveillance framework."
  }
];

export default questions;

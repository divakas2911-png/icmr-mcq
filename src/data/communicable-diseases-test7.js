const questions = [
  {
    id: 1,
    question: "As per the Universal Immunization Programme (UIP) schedule in India, which of the following vaccines are given at birth?",
    options: [
      "BCG, OPV-0, Hepatitis B-1",
      "BCG, OPV-0, Hepatitis B-1, Vitamin K",
      "BCG, DPT, OPV-0",
      "BCG, Hepatitis B-1, IPV"
    ],
    answer: 0,
    explanation: "At birth, UIP recommends BCG (1 dose), OPV-0 (zero dose), and Hepatitis B-1 (first dose). Vitamin K is not part of the UIP schedule. IPV is introduced later (at 6 and 14 weeks). DPT begins at 6 weeks."
  },
  {
    id: 2,
    question: "Under the UIP schedule, the pentavalent vaccine (DPT + Hib + Hepatitis B) is given at which time points?",
    options: [
      "6, 10, and 14 weeks",
      "6, 10, 14 weeks and 16-24 months (booster)",
      "6, 10, 14 weeks and 9 months",
      "2, 4, and 6 months"
    ],
    answer: 1,
    explanation: "Pentavalent vaccine (DPT + Hib + Hepatitis B) is given at 6, 10, and 14 weeks (primary series) and a booster is given at 16-24 months as DPT (not pentavalent). The booster at 16-24 months uses the DPT component only."
  },
  {
    id: 3,
    question: "The Measles-Rubella (MR) vaccine under UIP is given at which ages?",
    options: [
      "9 months and 16-24 months",
      "9 months only",
      "12 months and 4-6 years",
      "6 months and 12 months"
    ],
    answer: 0,
    explanation: "MR vaccine is given at 9 months (first dose) and 16-24 months (second dose) under UIP. India transitioned from measles vaccine to MR vaccine as part of the measles-rubella campaign and subsequent routine immunization."
  },
  {
    id: 4,
    question: "Which of the following correctly describes the recommended temperature for storage of vaccines in the cold chain under the UIP?",
    options: [
      "0 to 4 degrees Celsius throughout the cold chain",
      "+2 to +8 degrees Celsius at all levels except for freeze-sensitive vaccines",
      "+2 to +8 degrees Celsius at district and subdistrict levels; -15 to -25 degrees Celsius at state level for OPV",
      "+4 to +8 degrees Celsius universally"
    ],
    answer: 2,
    explanation: "In the UIP cold chain: OPV is stored at -15 to -25 degrees Celsius at state and regional levels. At district and subdistrict (PHC) levels, all vaccines including OPV are stored at +2 to +8 degrees Celsius. Freeze-sensitive vaccines (DPT, TT, Hepatitis B, DT) must never be frozen and are stored at +2 to +8 degrees Celsius."
  },
  {
    id: 5,
    question: "Vaccine Vial Monitor (VVM) is a heat-sensitive label placed on vaccine vials. Which color change in VVM indicates that the vaccine SHOULD NOT be used?",
    options: [
      "The inner square is lighter than the outer circle",
      "The inner square matches the outer circle in color",
      "The inner square is darker than the outer circle",
      "The inner square turns blue"
    ],
    answer: 2,
    explanation: "VVM works on cumulative heat exposure. The inner square darkens with heat exposure. When the inner square becomes darker than or matches the outer circle, the vaccine should NOT be used (discard point reached). As long as the inner square is lighter than the outer circle, the vaccine can be used if within expiry."
  },
  {
    id: 6,
    question: "The Open Vial Policy under UIP allows multi-dose vials of which vaccines to be used in subsequent sessions (up to 4 weeks) after opening?",
    options: [
      "OPV, BCG, and measles vaccines only",
      "OPV, DPT, TT, Hepatitis B, and liquid pentavalent vaccines",
      "All vaccines including BCG and measles-rubella",
      "Only inactivated vaccines - DPT, TT, Hepatitis B"
    ],
    answer: 1,
    explanation: "Open Vial Policy applies to OPV, DPT, TT, Hepatitis B, and liquid pentavalent vaccines - vaccines that meet WHO criteria (not live freeze-dried vaccines). BCG and MR vaccines (reconstituted) must be discarded within 4 hours of reconstitution. Reconstituted vaccines are excluded from open vial policy."
  },
  {
    id: 7,
    question: "Adverse Events Following Immunization (AEFI) surveillance in India classifies AEFI into which categories as per the WHO classification?",
    options: [
      "Minor, moderate, and major",
      "Vaccine product-related, vaccine quality defect-related, immunization error-related, immunization anxiety-related, and coincidental",
      "Local reactions, systemic reactions, and allergic reactions",
      "Expected, unexpected, and coincidental"
    ],
    answer: 1,
    explanation: "WHO (2012) classifies AEFI into five categories: (1) Vaccine product-related reaction, (2) Vaccine quality defect-related reaction, (3) Immunization error-related reaction (previously called programmatic error), (4) Immunization anxiety-related reaction, and (5) Coincidental event. India's AEFI surveillance follows this WHO classification."
  },
  {
    id: 8,
    question: "Electronic Vaccine Intelligence Network (eVIN) was launched in India to address which key challenge in immunization?",
    options: [
      "Training of health workers in injection technique",
      "Real-time tracking of vaccine stocks and cold chain temperature monitoring",
      "Online registration of children for immunization",
      "Surveillance of AEFI at the national level"
    ],
    answer: 1,
    explanation: "eVIN (Electronic Vaccine Intelligence Network) was launched in India to digitize vaccine stock management and cold chain temperature monitoring in real time. It uses smartphones and a cloud-based system to track vaccine inventory and temperatures across the cold chain, preventing stockouts and vaccine wastage."
  },
  {
    id: 9,
    question: "Mission Indradhanush was launched in India in which year, and what was its primary objective?",
    options: [
      "2012, to introduce new vaccines in UIP",
      "2014, to achieve 90% immunization coverage for all children by 2020",
      "2015, to immunize children and pregnant women who were missed or left out",
      "2016, to eliminate polio and measles from India"
    ],
    answer: 2,
    explanation: "Mission Indradhanush was launched on December 25, 2014 (implemented from April 2015) with the aim to immunize all unvaccinated and partially vaccinated children (0-2 years) and pregnant women with all available vaccines under UIP. The target was to achieve at least 90% full immunization coverage by 2020. Intensified Mission Indradhanush (IMI) was launched in 2017 with a more focused approach."
  },
  {
    id: 10,
    question: "Pneumococcal Conjugate Vaccine (PCV) was introduced into India's UIP schedule at which time points?",
    options: [
      "6, 14 weeks, and 9 months",
      "6, 10, 14 weeks, and 15 months",
      "9 months and 15 months only",
      "6, 10, 14 weeks with no booster"
    ],
    answer: 0,
    explanation: "PCV in India's UIP is given on a 2+1 schedule: at 6 weeks, 14 weeks (primary doses), and 9 months (booster dose). PCV was first introduced in select high-burden states in 2017 and has been progressively scaled up nationally. It protects against pneumococcal pneumonia and meningitis."
  },
  {
    id: 11,
    question: "Rotavirus vaccine was introduced in India's UIP and is given at which schedule?",
    options: [
      "6, 10, and 14 weeks (3 doses orally)",
      "6 and 14 weeks (2 doses)",
      "9 months and 15 months",
      "Birth, 6, and 14 weeks"
    ],
    answer: 0,
    explanation: "Rotavirus vaccine (Rotavac - indigenously developed by Bharat Biotech) was introduced in India's UIP in 2016. It is given orally at 6, 10, and 14 weeks (3 doses). It was first rolled out in 4 states and progressively expanded to all states."
  },
  {
    id: 12,
    question: "Inactivated Polio Vaccine (IPV) was introduced into the UIP schedule in India as which type of schedule?",
    options: [
      "Full IPV replacing OPV completely",
      "Sequential schedule - 2 doses IPV followed by OPV",
      "IPV given as a fractional intradermal dose at 6 and 14 weeks along with OPV",
      "Single IPV dose at 6 weeks followed by OPV at all other time points"
    ],
    answer: 2,
    explanation: "India uses a fractional dose IPV (fIPV) intradermal schedule - 0.1 ml intradermally at 6 weeks and 14 weeks, in addition to the regular OPV doses. This was necessitated by global shortage of IPV. fIPV (1/5th of a full dose given intradermally) produces equivalent immune response to full IM dose due to the immunological richness of the intradermal route."
  },
  {
    id: 13,
    question: "Herd immunity (community immunity) threshold is calculated by which formula?",
    options: [
      "1 - (1/R0)",
      "1/R0",
      "1 - R0",
      "(R0 - 1)/R0"
    ],
    answer: 3,
    explanation: "Herd immunity threshold = 1 - 1/R0 = (R0 - 1)/R0. Both expressions are mathematically equivalent: 1 - 1/R0 = (R0-1)/R0. For measles (R0 = 12-18), herd immunity threshold is approximately 92-95%. For polio (R0 = 5-7), threshold is approximately 80-86%. Higher R0 requires higher coverage to achieve herd immunity."
  },
  {
    id: 14,
    question: "Which of the following best describes the primary immune response compared to the secondary immune response?",
    options: [
      "Primary response is faster, produces more IgG, and has longer duration",
      "Secondary response has a longer lag phase, predominantly IgM, and lower antibody titres",
      "Primary response has a longer lag phase (7-14 days), predominantly IgM, lower peak antibody titres, and shorter duration",
      "Primary and secondary responses are identical in kinetics but differ only in antibody class"
    ],
    answer: 2,
    explanation: "Primary immune response: long lag phase (7-14 days), predominantly IgM initially then IgG, lower peak antibody titre, shorter duration of antibody. Secondary (anamnestic/booster) response: short lag phase (1-3 days), predominantly IgG (high affinity due to somatic hypermutation), higher peak titre, longer duration. This is why booster doses are given."
  },
  {
    id: 15,
    question: "Which of the following vaccines provides passive immunization?",
    options: [
      "Hepatitis B vaccine",
      "Hepatitis B immunoglobulin (HBIG)",
      "BCG vaccine",
      "Inactivated influenza vaccine"
    ],
    answer: 1,
    explanation: "Passive immunization involves administration of pre-formed antibodies (immunoglobulins) - it provides immediate but temporary protection. HBIG is passive immunization. Active immunization involves stimulating the host's own immune system (vaccines). In post-exposure prophylaxis for Hepatitis B, both HBIG (passive) and Hepatitis B vaccine (active) are given simultaneously."
  },
  {
    id: 16,
    question: "What is the key immunological advantage of conjugate vaccines over plain polysaccharide vaccines in children under 2 years?",
    options: [
      "Conjugate vaccines contain more antigens and are therefore more immunogenic",
      "Conjugate vaccines convert T-independent antigen response to T-dependent response, allowing memory cell formation and immune response in children under 2 years",
      "Polysaccharide vaccines are live attenuated while conjugate vaccines are inactivated",
      "Conjugate vaccines do not require adjuvants while polysaccharide vaccines do"
    ],
    answer: 1,
    explanation: "Plain polysaccharide antigens are T-independent antigens - they stimulate B cells directly without T cell help, resulting in no immunological memory and poor response in children under 2 years (immature immune system). Conjugating polysaccharide to a carrier protein (like CRM197 or tetanus toxoid) converts it to a T-dependent antigen, enabling T cell help, memory B cell formation, and effective response in infants. Example: PCV vs PPSV23."
  },
  {
    id: 17,
    question: "Aluminum salts (alum) are used as adjuvants in vaccines. What is the primary mechanism by which adjuvants enhance vaccine immunogenicity?",
    options: [
      "They directly kill pathogens in the vaccine preparation",
      "They increase antigen persistence at injection site, stimulate innate immunity, and recruit antigen-presenting cells",
      "They neutralize antibodies that might destroy the vaccine antigen",
      "They convert T-independent antigens to T-dependent antigens"
    ],
    answer: 1,
    explanation: "Adjuvants (from Latin 'adjuvare' - to help) enhance immunogenicity through: (1) Depot effect - slow release of antigen prolonging immune stimulation, (2) Activation of innate immunity via pattern recognition receptors, (3) Recruitment and activation of antigen-presenting cells (dendritic cells, macrophages), (4) Promoting antigen uptake and processing. Common adjuvants: Alum (aluminum hydroxide/phosphate), MF59 (squalene emulsion in influenza vaccines), AS04 (in HPV vaccine)."
  },
  {
    id: 18,
    question: "Which of the following is a TRUE contraindication to vaccination (not a false contraindication)?",
    options: [
      "Mild upper respiratory tract infection with low-grade fever",
      "Diarrhea in a child scheduled for OPV",
      "Anaphylaxis to a previous dose of the same vaccine",
      "Malnutrition in a child due for routine immunization"
    ],
    answer: 2,
    explanation: "True contraindications to vaccination: (1) Anaphylaxis/severe allergic reaction to previous dose or vaccine component, (2) Severe combined immunodeficiency (SCID) - for live vaccines, (3) Encephalopathy within 7 days of DPT - contraindication to further pertussis vaccine. False contraindications (vaccines should still be given): mild fever/URTI, diarrhea (OPV is still given and dose repeated), malnutrition, antibiotic use, family history of adverse events, prematurity."
  },
  {
    id: 19,
    question: "Vaccine efficacy is defined as the percentage reduction in disease incidence in vaccinated versus unvaccinated individuals under ideal conditions. If attack rate in unvaccinated = 20% and attack rate in vaccinated = 5%, what is the vaccine efficacy?",
    options: [
      "25%",
      "75%",
      "80%",
      "15%"
    ],
    answer: 1,
    explanation: "Vaccine Efficacy = (ARU - ARV) / ARU x 100 = (20% - 5%) / 20% x 100 = 15/20 x 100 = 75%. Here ARU = attack rate in unvaccinated, ARV = attack rate in vaccinated. Vaccine efficacy is measured under ideal (RCT) conditions. Vaccine effectiveness is measured under real-world field conditions and is usually lower than efficacy."
  },
  {
    id: 20,
    question: "In a vaccine trial, the attack rate in the unvaccinated group is 10% and in the vaccinated group is 2%. What is the Absolute Risk Reduction (ARR) and Number Needed to Vaccinate (NNV)?",
    options: [
      "ARR = 8%, NNV = 12.5",
      "ARR = 80%, NNV = 1.25",
      "ARR = 8%, NNV = 125",
      "ARR = 2%, NNV = 50"
    ],
    answer: 0,
    explanation: "ARR (Absolute Risk Reduction) = ARU - ARV = 10% - 2% = 8% = 0.08. NNV (Number Needed to Vaccinate) = 1/ARR = 1/0.08 = 12.5. Relative Risk Reduction (RRR) = ARR/ARU = 8%/10% = 80% (this equals vaccine efficacy). NNV is the number of individuals who need to be vaccinated to prevent one case of disease. Lower NNV indicates more efficient vaccine."
  },
  {
    id: 21,
    question: "Which immunization coverage indicator is used to assess the performance of immunization programs and represents children who received all recommended vaccines in the first year of life?",
    options: [
      "DPT3 coverage",
      "Full immunization coverage (FIC)",
      "BCG coverage",
      "OPV3 coverage"
    ],
    answer: 1,
    explanation: "Full Immunization Coverage (FIC) is the key indicator for immunization program performance. A child is 'fully immunized' if they have received BCG, OPV (3 doses), DPT (3 doses), and measles vaccine by 12 months of age. In India, the National Family Health Survey (NFHS) and Coverage Evaluation Survey (CES) track FIC. DPT3/Penta3 coverage is used as a proxy indicator by WHO/UNICEF for global tracking."
  },
  {
    id: 22,
    question: "Live attenuated vaccines are contraindicated in which of the following situations?",
    options: [
      "HIV-positive child with CD4 count above 25%",
      "Child on low-dose inhaled corticosteroids",
      "Pregnant women (for most live vaccines) and severely immunocompromised individuals",
      "Children with egg allergy receiving MMR vaccine"
    ],
    answer: 2,
    explanation: "Live attenuated vaccines are contraindicated in: (1) Pregnancy (most live vaccines - MMR, varicella, yellow fever) due to theoretical risk to fetus, (2) Severely immunocompromised individuals (primary immunodeficiencies, HIV with low CD4, high-dose immunosuppressants, chemotherapy) due to risk of vaccine-strain disease. Exceptions: BCG and OPV are given to HIV-positive children with adequate CD4. Egg allergy is NOT a contraindication to MMR. Low-dose inhaled steroids are not a contraindication."
  },
  {
    id: 23,
    question: "Which of the following is a KILLED (inactivated) vaccine used in India's UIP?",
    options: [
      "BCG",
      "OPV (oral polio vaccine)",
      "Hepatitis B vaccine",
      "MR (measles-rubella) vaccine"
    ],
    answer: 2,
    explanation: "Hepatitis B vaccine is a recombinant subunit vaccine (killed/inactivated type) containing HBsAg produced in yeast. Inactivated vaccines in UIP: Hepatitis B, IPV, DPT (DT, TT are toxoids - also inactivated). Live attenuated vaccines in UIP: BCG, OPV, MR (measles-rubella), rotavirus, yellow fever. Toxoids are chemically inactivated toxins (DT component of DPT, TT)."
  },
  {
    id: 24,
    question: "What is the recommended site and route for BCG vaccination in newborns under the UIP?",
    options: [
      "Right deltoid region, intradermal, 0.1 ml",
      "Left deltoid region or left upper arm, intradermal, 0.05 ml in neonates (under 1 month) and 0.1 ml after 1 month",
      "Outer aspect of thigh, subcutaneous, 0.1 ml",
      "Right upper arm, subcutaneous, 0.05 ml"
    ],
    answer: 1,
    explanation: "BCG is given intradermally in the left upper arm (over the insertion of left deltoid muscle). Dose: 0.05 ml for neonates and infants under 1 month of age; 0.1 ml for children over 1 month. The intradermal route is essential - BCG given subcutaneously or IM does not produce the characteristic wheal and may cause abscess. A raised bleb of 7mm indicates correct intradermal injection."
  },
  {
    id: 25,
    question: "The National Tuberculosis Elimination Programme (NTEP), formerly RNTCP, targets TB elimination in India by which year, using which definition of elimination?",
    options: [
      "2025, defined as zero TB cases",
      "2030, defined as less than 10 cases per 100,000 population",
      "2025, defined as less than 1 case per million population (incidence) and zero deaths",
      "2030, defined as eradication (zero cases globally)"
    ],
    answer: 2,
    explanation: "India's National Strategic Plan for TB Elimination targets: TB-free India by 2025 (5 years ahead of SDG target of 2030). The definition of elimination is: incidence less than 1 case per million population per year (same as WHO global elimination target for 2050, but India aims to achieve it by 2025). This is an ambitious target given India's current burden (~210/100,000). NTEP uses the NIKSHAY portal for digital notification."
  },
  {
    id: 26,
    question: "Under NTEP (National TB Elimination Programme), the treatment regimen for new drug-susceptible TB (DS-TB) in adults is:",
    options: [
      "2HRZE/4HR (2 months intensive phase + 4 months continuation phase)",
      "2HRZES/1HRZE/5HRE",
      "6 months of HRZE daily throughout",
      "2HRZ/4HR"
    ],
    answer: 0,
    explanation: "NTEP treatment for new DS-TB: 2HRZE (Intensive Phase - 2 months) / 4HR (Continuation Phase - 4 months) = total 6 months. H=Isoniazid, R=Rifampicin, Z=Pyrazinamide, E=Ethambutol. India uses daily fixed-dose combination (FDC) tablets. DOTS (Directly Observed Treatment Short course) is the strategy. For MDR-TB, longer regimens with second-line drugs are used."
  },
  {
    id: 27,
    question: "The National AIDS Control Programme (NACP) in India is in which phase currently, and what is India's target for HIV?",
    options: [
      "NACP-IV, target is to eliminate HIV by 2025",
      "NACP-V, target is 95-95-95 by 2025 (95% of PLHIV know status, 95% of those on ART, 95% of those virally suppressed)",
      "NACP-IV, target is zero new HIV infections by 2030",
      "NACP-III, target is universal ART coverage by 2020"
    ],
    answer: 1,
    explanation: "India is currently under NACP-V (2021-2026), implementing the UNAIDS 95-95-95 targets by 2025: 95% of all PLHIV (People Living with HIV) know their HIV status, 95% of those diagnosed receive ART, and 95% of those on ART achieve viral suppression. This replaces the earlier 90-90-90 target. NACO (National AIDS Control Organization) under Ministry of Health implements NACP."
  },
  {
    id: 28,
    question: "The National Vector Borne Disease Control Programme (NVBDCP) has been reorganized as NCVBDC. Which of the following diseases does NCVBDC NOT cover?",
    options: [
      "Malaria",
      "Dengue",
      "Kala-azar (Visceral Leishmaniasis)",
      "Rabies"
    ],
    answer: 3,
    explanation: "NCVBDC (National Centre for Vector Borne Diseases Control) covers: Malaria, Dengue, Chikungunya, Japanese Encephalitis (JE), Lymphatic Filariasis, Kala-azar (Visceral Leishmaniasis), and Zika virus disease. Rabies is NOT a vector-borne disease (it is transmitted by animal bites) and is handled under the National Rabies Control Programme, which is separate."
  },
  {
    id: 29,
    question: "India's target for kala-azar (visceral leishmaniasis) elimination is defined as:",
    options: [
      "Zero cases in endemic districts",
      "Less than 1 case per 10,000 population at block/sub-district level per year",
      "Less than 1 case per 100,000 population at district level",
      "Less than 1 case per million population nationally"
    ],
    answer: 1,
    explanation: "India's kala-azar elimination target: less than 1 case per 10,000 population per year at the block (sub-district) level. This is the WHO-recommended elimination threshold for visceral leishmaniasis. India along with Bangladesh and Nepal had committed to eliminate kala-azar by 2015 (subsequently extended to 2023). The disease is endemic in Bihar, Jharkhand, West Bengal, and UP."
  },
  {
    id: 30,
    question: "National Leprosy Eradication Programme (NLEP) defines elimination of leprosy as achieving which prevalence rate?",
    options: [
      "Less than 1 case per 10,000 population",
      "Zero new cases nationally",
      "Less than 1 case per 100,000 population",
      "Less than 1 case per 1,000 population"
    ],
    answer: 0,
    explanation: "Leprosy elimination is defined by WHO as a prevalence rate of less than 1 case per 10,000 population. India achieved this national elimination target in 2005. However, several states/districts still have higher burden. Current focus of NLEP is on reducing new cases with Grade 2 disability and child leprosy cases. The target is now zero leprosy (interruption of transmission) globally by 2030 under WHO's Global Leprosy Strategy."
  },
  {
    id: 31,
    question: "Integrated Disease Surveillance Programme (IDSP) was launched in India in which year, and which platform has upgraded IDSP?",
    options: [
      "2004, upgraded to IHIP (Integrated Health Information Platform) in 2019",
      "2005, upgraded to NIKSHAY in 2012",
      "2007, integrated with HMIS",
      "2010, upgraded to eVIN"
    ],
    answer: 0,
    explanation: "IDSP was launched in 2004 under the Ministry of Health and Family Welfare with World Bank funding to decentralize disease surveillance and detect outbreaks early. It uses 'S' (Syndromic), 'P' (Presumptive), and 'L' (Laboratory) forms for reporting. IHIP (Integrated Health Information Platform) was launched in 2019 to upgrade IDSP with real-time digital case-based surveillance, replacing the older weekly reporting system."
  },
  {
    id: 32,
    question: "Pulse Polio Immunization Programme in India was launched in which year, and India was declared polio-free in which year?",
    options: [
      "1994 launched; 2012 declared polio-free",
      "1995 launched; 2014 certified polio-free",
      "1995 launched; 2011 (last wild poliovirus case); 2014 certified polio-free by WHO",
      "1994 launched; 2011 last case; 2012 polio-free"
    ],
    answer: 2,
    explanation: "Pulse Polio Immunization (PPI) was launched in India in 1995 with the aim to eradicate polio. National Immunization Days (NIDs) were held twice yearly giving OPV to all children under 5 years. The last case of wild poliovirus in India was in January 2011 (Howrah, West Bengal). India was certified polio-free by WHO on March 27, 2014. India is in the WHO South-East Asia Region which was certified polio-free in 2014."
  },
  {
    id: 33,
    question: "Under the National Programme for Control of Blindness and Visual Impairment (NPCB&VI), which indicator is used to define 'blindness' in India for program purposes?",
    options: [
      "Visual acuity less than 6/60 in the better eye with best correction",
      "Visual acuity less than 3/60 in the better eye with best correction",
      "Visual acuity less than 6/18 in the better eye",
      "Complete absence of light perception"
    ],
    answer: 1,
    explanation: "India's definition of blindness for program purposes (NPCB): visual acuity less than 3/60 in the better eye with best correction (or visual field less than 10 degrees). This is stricter than the previous definition of 6/60. WHO's current definition uses the same threshold of less than 3/60. Cataract is the leading cause of blindness in India (approximately 62-66% of all blindness)."
  },
  {
    id: 34,
    question: "Which of the following is the correct elimination target for lymphatic filariasis (LF) in India?",
    options: [
      "Microfilaria rate less than 1% and antigenemia rate less than 2% in all endemic districts",
      "Zero new cases of lymphedema",
      "Microfilaria rate less than 0.5% at district level",
      "Transmission Assessment Survey (TAS) passing threshold of less than 2% in 6-7 year olds"
    ],
    answer: 3,
    explanation: "LF elimination is validated using Transmission Assessment Survey (TAS): if antigenemia/microfilaria prevalence in 6-7 year old children is less than 2% (critical cut-off), mass drug administration (MDA) can be stopped. India uses a Triple Drug Therapy (IDA - Ivermectin + DEC + Albendazole) under the Accelerated Plan for Elimination of Lymphatic Filariasis (APELF). The criteria for stopping MDA includes microfilaria rate less than 1% in baseline surveys."
  },
  {
    id: 35,
    question: "The National Programme on Climate Change and Human Health (NPCCHH) focuses primarily on which aspect of communicable disease control?",
    options: [
      "Control of antibiotic-resistant infections",
      "Surveillance and control of climate-sensitive diseases including vector-borne, water-borne diseases, and heat-related illness",
      "Prevention of occupational infections in healthcare workers",
      "Control of zoonotic diseases transmitted from livestock"
    ],
    answer: 1,
    explanation: "NPCCHH (National Programme on Climate Change and Human Health) was launched to address health impacts of climate change including: (1) Increased burden of vector-borne diseases (malaria, dengue, chikungunya) due to changing vector habitats, (2) Water-borne diseases due to floods/droughts, (3) Heat-related illness, (4) Air pollution-related diseases, (5) Food security impacts. It involves disease surveillance under climate-sensitive scenarios."
  },
  {
    id: 36,
    question: "India's measles elimination target (as per WHO SEARO) is to eliminate measles and control rubella/CRS by which year?",
    options: [
      "2020",
      "2023",
      "2023 (revised from original 2020 target)",
      "2030"
    ],
    answer: 2,
    explanation: "WHO SEARO set the measles elimination target for the South-East Asia Region as 2020, subsequently revised to 2023 due to the COVID-19 pandemic's impact on immunization services. India conducted a nationwide Measles-Rubella (MR) campaign (2017-2020) targeting 9 months to 15 years age group. India's HMIS shows improvement in measles coverage but elimination (incidence less than 1 per million) has not yet been achieved."
  },
  {
    id: 37,
    question: "Which of the following is the key indicator for NTEP (National TB Elimination Programme) performance?",
    options: [
      "Case Fatality Rate",
      "Treatment Success Rate (TSR) - target greater than 90% for DS-TB",
      "Case Notification Rate only",
      "Sputum conversion rate at 2 months"
    ],
    answer: 1,
    explanation: "Treatment Success Rate (TSR) is the key output indicator for NTEP. WHO target: TSR greater than or equal to 90% for new DS-TB cases. TSR = (Cured + Treatment Completed) / Total Enrolled x 100. Other important NTEP indicators: Case Notification Rate (CNR), Proportion of private sector notifications, CBNAAT (cartridge-based NAAT) testing rates, treatment initiation within 24 hours of diagnosis. India's TSR for DS-TB is approximately 82-86%."
  },
  {
    id: 38,
    question: "Which of the following is the most accurate definition of an 'emerging infectious disease'?",
    options: [
      "Any disease caused by a newly discovered pathogen",
      "Infections that have newly appeared in a population, or have existed but are rapidly increasing in incidence or geographic range",
      "Diseases that have re-appeared after a period of decline",
      "Infections that cross species barriers from animals to humans"
    ],
    answer: 1,
    explanation: "Emerging infectious diseases (EIDs) are infections that: (1) Have newly appeared in a population (e.g., HIV, COVID-19, Nipah), or (2) Have existed but are rapidly increasing in incidence or geographic range (e.g., dengue, Zika). Re-emerging diseases (like plague, cholera) are those that had declined but returned. Factors driving emergence include: ecological changes, human demographics, international travel/trade, antimicrobial resistance, failure of public health, and microbial evolution."
  },
  {
    id: 39,
    question: "The One Health approach for managing emerging zoonotic diseases recognizes the interconnection between:",
    options: [
      "Human health and pharmaceutical industry",
      "Human health, animal health, and ecosystem/environmental health",
      "Communicable diseases and non-communicable diseases",
      "Primary, secondary, and tertiary healthcare"
    ],
    answer: 1,
    explanation: "One Health is a collaborative, multisectoral approach that recognizes that human health, animal health (domestic and wildlife), and ecosystem health are interconnected. About 75% of emerging infectious diseases are zoonotic. One Health is particularly relevant for: zoonoses (Nipah, Ebola, avian influenza, COVID-19), antimicrobial resistance (shared antibiotic use in humans, animals, agriculture), and food safety. FAO-WHO-OIE (now WOAH) implement the One Health framework."
  },
  {
    id: 40,
    question: "WHO pandemic phases (for influenza pandemic preparedness) include which sequence?",
    options: [
      "Interpandemic phase, Alert phase, Pandemic phase, Transition phase",
      "Pre-pandemic, Pandemic alert, Pandemic, Post-pandemic",
      "Phases 1-6 with phase 6 being pandemic",
      "Endemic, Epidemic, Pandemic, Post-pandemic"
    ],
    answer: 0,
    explanation: "WHO revised the pandemic phases in 2013 to: (1) Interpandemic phase (between pandemics), (2) Alert phase (new influenza subtype causing human cases), (3) Pandemic phase (global spread in at least 2 WHO regions), (4) Transition phase (risk decreasing, moving toward interpandemic). The older 6-phase classification (phases 1-6) has been replaced. National pandemic preparedness plans are developed based on these phases."
  },
  {
    id: 41,
    question: "Antimicrobial Resistance (AMR) - India's National Action Plan (NAP-AMR) was launched in which year, and it follows which global framework?",
    options: [
      "2012, following WHO Global Action Plan on AMR 2011",
      "2017, following WHO Global Action Plan on AMR 2015",
      "2015, following GLASS (Global Antimicrobial Resistance Surveillance System) framework",
      "2019, following G20 AMR commitments"
    ],
    answer: 1,
    explanation: "India's NAP-AMR (National Action Plan on Antimicrobial Resistance) was launched in April 2017, aligned with WHO's Global Action Plan on AMR (2015). The five strategic priorities of NAP-AMR mirror the Global Action Plan: (1) Improve awareness and understanding, (2) Strengthen knowledge through surveillance (India joined GLASS - Global AMR Surveillance System), (3) Reduce infection through IPC, (4) Optimize use of antimicrobials, (5) Develop investments in R&D."
  },
  {
    id: 42,
    question: "Biosafety Level 4 (BSL-4) laboratory is required for handling which of the following pathogens?",
    options: [
      "Mycobacterium tuberculosis",
      "HIV",
      "Ebola virus and Marburg virus",
      "Salmonella typhi"
    ],
    answer: 2,
    explanation: "BSL-4 is the highest containment level for pathogens that cause severe, often fatal disease for which no vaccine or therapy is available: Ebola virus, Marburg virus, Nipah virus, Lassa fever virus, Crimean-Congo Hemorrhagic Fever virus. BSL-1: non-pathogenic (E. coli K12). BSL-2: moderate risk (Salmonella, HIV, Hepatitis B). BSL-3: serious/potentially lethal, treatment available (M. tuberculosis, SARS-CoV-2, anthrax, yellow fever). BSL-4: life-threatening, no available vaccines or therapy."
  },
  {
    id: 43,
    question: "Standard Precautions in infection prevention and control (IPC) apply to:",
    options: [
      "Only patients known to have infectious diseases",
      "All patients regardless of diagnosis or presumed infectious status",
      "Only bodily fluids that are visibly blood-stained",
      "Healthcare workers with active infections only"
    ],
    answer: 1,
    explanation: "Standard Precautions (previously called Universal Precautions) apply to ALL patients regardless of their diagnosis or presumed infectious status. They are based on the principle that any blood, body fluid, secretion, or excretion (except sweat) may contain transmissible infectious agents. Components include: hand hygiene, PPE (gloves, gown, mask, eye protection), safe injection practices, respiratory hygiene, environmental cleaning, and safe handling of sharps."
  },
  {
    id: 44,
    question: "Healthcare-Associated Infections (HAIs) - which of the following is the most common HAI globally and is also a key indicator for IPC program effectiveness?",
    options: [
      "Surgical Site Infection (SSI)",
      "Catheter-Associated Urinary Tract Infection (CAUTI)",
      "Ventilator-Associated Pneumonia (VAP)",
      "Central Line-Associated Bloodstream Infection (CLABSI)"
    ],
    answer: 1,
    explanation: "Catheter-Associated Urinary Tract Infection (CAUTI) is the most common HAI globally, accounting for approximately 30-40% of all HAIs. The urinary catheter is the most frequently used invasive device in hospitalized patients. However, all four are important HAIs tracked as part of IPC programs. In ICU settings, VAP and CLABSI have higher mortality. Hand hygiene is the single most important intervention for preventing all HAIs."
  },
  {
    id: 45,
    question: "CDC/WHO classifies bioterrorism agents into Category A, B, and C. Which of the following is a Category A bioterrorism agent (highest priority)?",
    options: [
      "Salmonella (typhoid fever)",
      "Brucella species",
      "Bacillus anthracis (anthrax) and Variola major (smallpox)",
      "Ricin toxin"
    ],
    answer: 2,
    explanation: "Category A bioterrorism agents: Bacillus anthracis (anthrax), Clostridium botulinum (botulism), Yersinia pestis (plague), Variola major (smallpox), Francisella tularensis (tularemia), Viral hemorrhagic fever viruses (Ebola, Marburg, Lassa). These are highest priority because they can be easily disseminated, cause high mortality, have major public health impact, and require special action. Category B (second priority): Brucella, Salmonella, food/water safety threats. Category C: emerging pathogens like Nipah."
  },
  {
    id: 46,
    question: "The Global Health Security Agenda (GHSA) launched in 2014 aims to achieve which overall goal?",
    options: [
      "Eradication of all communicable diseases by 2030",
      "Universal health coverage for infectious disease treatment",
      "A world safe and secure from infectious disease threats through building capacity to prevent, detect, and respond",
      "Standardization of vaccine schedules globally"
    ],
    answer: 2,
    explanation: "GHSA (Global Health Security Agenda) was launched in February 2014 by 44 countries (now 70+), international organizations, and NGOs. Its goal is to build countries' capacities to prevent, detect, and respond to infectious disease threats - whether natural, accidental, or deliberate. It operationalizes the International Health Regulations (IHR 2005) by building core capacities. India joined GHSA in 2014. JEE (Joint External Evaluation) tool assesses country IHR core capacities under GHSA."
  },
  {
    id: 47,
    question: "Transmission-Based Precautions in IPC are added when Standard Precautions are insufficient. Which precaution category requires negative pressure rooms?",
    options: [
      "Contact precautions",
      "Droplet precautions",
      "Airborne precautions",
      "Both contact and droplet precautions"
    ],
    answer: 2,
    explanation: "Airborne Precautions are required for pathogens transmitted by airborne particles (droplet nuclei less than 5 microns) that remain suspended in air: tuberculosis, measles, varicella, COVID-19 (aerosol-generating procedures). Requirements include: N95 respirator (not just surgical mask), negative pressure isolation room (at least 6-12 air changes per hour), HEPA filtration. Droplet precautions (greater than 5 microns): surgical mask, 1 meter distance. Contact precautions: gloves and gown."
  },
  {
    id: 48,
    question: "Re-emerging infectious diseases are best described as:",
    options: [
      "New pathogens discovered for the first time causing outbreaks",
      "Diseases that were previously controlled but have returned due to factors like drug resistance, waning immunity, or ecological changes",
      "Diseases that have spread geographically to new areas for the first time",
      "Laboratory-created pathogens accidentally released"
    ],
    answer: 1,
    explanation: "Re-emerging infectious diseases are those that were previously controlled or declining but have returned as a significant public health problem. Examples: tuberculosis (MDR-TB), cholera, dengue (new areas), plague, diphtheria (post-Soviet states), polio (VDPV), yellow fever. Causes include: antimicrobial resistance, breakdown of public health infrastructure, waning vaccination coverage, climate change altering vector habitats, and human encroachment into new ecosystems."
  },
  {
    id: 49,
    question: "GLASS (Global Antimicrobial Resistance and Use Surveillance System) was established by WHO to:",
    options: [
      "Monitor antibiotic use in livestock and agriculture only",
      "Provide a standardized approach for global surveillance of AMR in humans and coordinate AMR data globally",
      "Regulate international trade of antibiotics between countries",
      "Certify hospitals as antibiotic stewardship compliant"
    ],
    answer: 1,
    explanation: "GLASS (Global Antimicrobial Resistance and Use Surveillance System) was established by WHO in 2015 following the Global Action Plan on AMR. It provides a standardized approach to the collection, analysis, and sharing of AMR data globally from human infections. GLASS also monitors antimicrobial consumption/use data. India participates in GLASS through its AMR surveillance network (ICMR-AMR network with sentinel sites). GLASS data informs WHO's global AMR reports."
  },
  {
    id: 50,
    question: "The R0 (basic reproduction number) of an infectious disease represents:",
    options: [
      "The number of secondary cases produced by one infected individual in a fully susceptible population",
      "The rate of recovery from infection in the population",
      "The proportion of the population that needs to be immune to prevent epidemic spread",
      "The generation time of the pathogen"
    ],
    answer: 0,
    explanation: "R0 (basic reproduction number) is the average number of secondary infections produced by one infectious case in a completely susceptible population with no interventions. R0 greater than 1: epidemic potential. R0 less than 1: infection dies out. R0 examples: measles (12-18), COVID-19 Delta (5-6), COVID-19 Omicron (8-15), influenza (2-3), SARS (2-5), Ebola (1.5-2.5). The effective reproduction number (Rt or Re) accounts for existing immunity and interventions. Herd immunity threshold = 1 - 1/R0."
  },
];

export default questions;

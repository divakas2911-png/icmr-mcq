const questions = [
  {
    id: 1,
    question: "The causative agent of tuberculosis, Mycobacterium tuberculosis, is characterized by all of the following EXCEPT:",
    options: [
      "Acid-fast bacillus due to mycolic acid in cell wall",
      "Obligate intracellular organism",
      "Slow-growing with generation time of 15-20 hours",
      "Aerobic organism preferring high oxygen tension tissues"
    ],
    answer: 1,
    explanation: "Mycobacterium tuberculosis is NOT an obligate intracellular organism - it is a facultative intracellular pathogen that can survive both inside and outside cells. It is acid-fast due to mycolic acids in its cell wall, has a slow generation time of 15-20 hours (explaining why cultures take 6-8 weeks), and is aerobic, which explains its predilection for the upper lung lobes where oxygen tension is highest."
  },
  {
    id: 2,
    question: "A 45-year-old man presents with fever, cough for 3 weeks, and a chest X-ray showing a calcified lesion in the right upper lobe with ipsilateral hilar lymphadenopathy. This radiological complex is called:",
    options: [
      "Simon focus",
      "Ghon complex",
      "Ranke complex",
      "Assmann focus"
    ],
    answer: 2,
    explanation: "The Ranke complex refers to the calcified Ghon focus (primary lesion in the lung parenchyma) together with calcified ipsilateral hilar/draining lymph nodes. The Ghon complex refers to the primary focus plus the associated lymphangitis and lymphadenopathy (non-calcified stage). The Ghon focus alone is just the primary parenchymal lesion. Simon foci are apical lesions from lymphohematogenous spread during primary infection. The Assmann focus is a subapical infiltrate in post-primary TB."
  },
  {
    id: 3,
    question: "In the pathogenesis of primary tuberculosis, the sequence of events after inhalation of Mycobacterium tuberculosis is BEST described as:",
    options: [
      "Alveolar macrophage ingestion → caseation necrosis → Ghon focus → lymphatic spread → bacteremia",
      "Neutrophil phagocytosis → T-cell sensitization → Ghon focus → calcification → immunity",
      "Direct alveolar infection → immediate caseation → cavitation → lymphadenopathy",
      "Alveolar macrophage ingestion → local multiplication → T-cell sensitization (3-8 weeks) → granuloma formation → Ghon focus"
    ],
    answer: 3,
    explanation: "The correct sequence in primary TB: inhaled bacilli are ingested by alveolar macrophages, multiply locally (as macrophages lack specific immunity initially), spread to regional lymph nodes, trigger T-cell sensitization after 3-8 weeks (when tuberculin test becomes positive), leading to granuloma formation with central caseation. This primary complex (Ghon focus + lymphadenitis) may calcify or progress. Neutrophils are not the primary early responders in TB pathogenesis."
  },
  {
    id: 4,
    question: "A child has miliary tuberculosis. Which of the following BEST explains the pathogenesis of this form?",
    options: [
      "Direct extension from a primary lung focus to pleural cavity",
      "Hematogenous dissemination of bacilli from a caseous focus eroding into a blood vessel",
      "Lymphatic spread from mediastinal lymph nodes",
      "Reactivation of a healed Ghon focus during immunosuppression"
    ],
    answer: 1,
    explanation: "Miliary tuberculosis results from hematogenous dissemination of large numbers of bacilli when a caseous focus (often in lung or lymph node) erodes into a blood vessel. The bacilli spread through the bloodstream and seed multiple organs simultaneously, producing uniformly distributed small (millet seed-sized, 1-2 mm) granulomas throughout the body. This can occur during primary infection (especially in young children and immunocompromised) or from reactivation. It is NOT due to lymphatic spread or direct extension."
  },
  {
    id: 5,
    question: "Post-primary (secondary) tuberculosis differs from primary tuberculosis in all of the following EXCEPT:",
    options: [
      "Occurs in a previously sensitized host",
      "More commonly affects upper lobes of lungs",
      "Regional lymphadenopathy is prominent",
      "Tends to form cavities"
    ],
    answer: 2,
    explanation: "Prominent regional lymphadenopathy is a feature of PRIMARY tuberculosis, not post-primary TB. In post-primary TB, the host already has delayed-type hypersensitivity from prior sensitization, so the immune response is more vigorous and localized. This leads to upper lobe disease (due to high oxygen tension and poor lymphatic drainage), cavity formation due to rapid necrosis, and minimal lymphadenopathy because the immune response contains the infection more locally."
  },
  {
    id: 6,
    question: "Under the Revised National TB Control Programme (RNTCP)/National TB Elimination Programme (NTEP), which drug regimen is used for new drug-sensitive TB patients?",
    options: [
      "2HRZE/4HR",
      "2HRZ/4HR",
      "2HRZES/1HRZE/5HRE",
      "6HRZ"
    ],
    answer: 0,
    explanation: "Under RNTCP/NTEP, the standard regimen for new drug-sensitive TB patients is 2HRZE/4HR: an intensive phase of 2 months with Isoniazid (H), Rifampicin (R), Pyrazinamide (Z), and Ethambutol (E), followed by a continuation phase of 4 months with Isoniazid and Rifampicin. The old regimen 2HRZES/1HRZE/5HRE was used for retreatment cases under the previous category-II regimen, which has now been replaced by individualized treatment based on drug sensitivity testing."
  },
  {
    id: 7,
    question: "A patient is diagnosed with MDR-TB. The CORRECT definition of MDR-TB is:",
    options: [
      "Resistance to Isoniazid alone",
      "Resistance to Rifampicin alone",
      "Resistance to at least Isoniazid AND Rifampicin",
      "Resistance to Isoniazid, Rifampicin, any fluoroquinolone, AND any second-line injectable"
    ],
    answer: 2,
    explanation: "MDR-TB (Multi-Drug Resistant TB) is defined as resistance to at least BOTH Isoniazid AND Rifampicin - the two most potent first-line anti-TB drugs. Option D describes Pre-XDR or XDR-TB. XDR-TB (Extensively Drug Resistant TB) - as per the 2021 WHO revised definition - is MDR/RR-TB plus resistance to any fluoroquinolone AND at least one of bedaquiline or linezolid. RR-TB (Rifampicin Resistant TB) has the same treatment implications as MDR-TB."
  },
  {
    id: 8,
    question: "The Mantoux test is read at 48-72 hours. A 5 TU (PPD) intradermal injection produces an induration of 12 mm in a healthy adult with no known risk factors in India. This result is BEST interpreted as:",
    options: [
      "Negative - cut-off is 15 mm for healthy adults",
      "Positive - cut-off of 10 mm is applicable for healthy adults in high TB burden countries",
      "Inconclusive - requires repeat testing",
      "Positive only if there is erythema of >15 mm"
    ],
    answer: 1,
    explanation: "The Mantoux test interpretation depends on clinical context and population: In India (high TB burden setting), 10 mm induration is considered positive for most individuals. A 12 mm induration exceeds this threshold. The 5 mm cut-off is used for HIV-positive individuals, close contacts of active TB cases, and immunocompromised patients. The 15 mm cut-off applies to low-risk individuals in low-prevalence settings. Erythema (redness) is NOT measured - only induration (palpable raised, hardened area) is measured."
  },
  {
    id: 9,
    question: "Interferon-Gamma Release Assays (IGRAs) for tuberculosis diagnosis differ from the Mantoux test in all of the following EXCEPT:",
    options: [
      "IGRAs are not affected by BCG vaccination status",
      "IGRAs require a blood sample rather than skin testing",
      "IGRAs use ESAT-6 and CFP-10 antigens absent from BCG strains",
      "IGRAs cannot distinguish latent TB infection from active TB disease"
    ],
    answer: 3,
    explanation: "Both IGRAs AND the Mantoux test cannot reliably distinguish latent TB infection (LTBI) from active TB disease - this is a shared limitation, not a difference. IGRAs differ from Mantoux in that: they use blood samples (not skin injection), they are not affected by prior BCG vaccination (because they use antigens ESAT-6 and CFP-10 encoded in the RD1 region absent from BCG strains and most non-tuberculous mycobacteria), and they require only one patient visit. IGRAs have higher specificity than Mantoux in BCG-vaccinated populations."
  },
  {
    id: 10,
    question: "GeneXpert MTB/RIF assay is used in TB diagnosis. Which statement about this test is CORRECT?",
    options: [
      "It detects TB bacilli by culture and requires 6-8 weeks",
      "It simultaneously detects Mycobacterium tuberculosis complex and resistance to Isoniazid",
      "It uses real-time PCR and can detect rifampicin resistance within 2 hours",
      "It requires acid-fast staining as a prerequisite"
    ],
    answer: 2,
    explanation: "GeneXpert MTB/RIF (Xpert MTB/RIF) uses automated real-time PCR (cartridge-based nested PCR) to simultaneously detect M. tuberculosis complex DNA and mutations in the rpoB gene (encoding the beta subunit of RNA polymerase) conferring Rifampicin resistance - all within approximately 2 hours. It does NOT detect Isoniazid resistance (that requires Xpert MTB/RIF Ultra or line probe assays). No prior staining is required. It is WHO-recommended as the initial diagnostic test for suspected TB."
  },
  {
    id: 11,
    question: "In Ziehl-Neelsen (ZN) staining for acid-fast bacilli, the mycobacteria appear red against a blue background. The acid-fastness of mycobacteria is attributed to:",
    options: [
      "High lipid content of the cell wall, particularly mycolic acids",
      "Presence of endospores resistant to decolorization",
      "The thick peptidoglycan layer similar to gram-positive bacteria",
      "Presence of a polysaccharide capsule"
    ],
    answer: 0,
    explanation: "Acid-fastness is attributed to the high lipid content of the mycobacterial cell wall, particularly the long-chain mycolic acids (C60-C90 carbon chain fatty acids) that form a waxy, hydrophobic barrier. This barrier retains the primary stain (carbol fuchsin - red) even after treatment with acid-alcohol decolorizer (3% HCl in ethanol). After decolorization, the counterstain (methylene blue or malachite green) stains background cells blue/green. AFB appear as red/pink bacilli against the blue background."
  },
  {
    id: 12,
    question: "BCG vaccine is given to protect against tuberculosis. Which of the following statements about BCG vaccine is CORRECT?",
    options: [
      "BCG provides 100% protection against pulmonary tuberculosis in adults",
      "BCG is most effective in preventing severe forms of childhood TB such as miliary TB and TB meningitis",
      "BCG vaccine should not be given to neonates as it is unsafe",
      "BCG protects equally against all strains of Mycobacterium tuberculosis"
    ],
    answer: 1,
    explanation: "BCG (Bacillus Calmette-Guerin) vaccine is most effective in preventing severe disseminated forms of childhood tuberculosis - particularly miliary TB (approximately 80% efficacy) and TB meningitis (approximately 64-86% efficacy) in children. Its efficacy against adult pulmonary TB is highly variable (0-80% in different studies), likely due to differences in prior mycobacterial exposure, BCG strain variations, and geographical factors. Under the Universal Immunization Programme in India, BCG is given at birth (or as early as possible). It is safe for neonates."
  },
  {
    id: 13,
    question: "HIV-1 and HIV-2 differ in which of the following characteristics?",
    options: [
      "HIV-2 is more transmissible than HIV-1 and causes faster progression to AIDS",
      "HIV-2 has lower viremia, slower progression to AIDS, and is predominantly found in West Africa",
      "HIV-1 is confined to sub-Saharan Africa while HIV-2 is a global pandemic",
      "HIV-2 does not respond to antiretroviral therapy"
    ],
    answer: 1,
    explanation: "HIV-2 differs from HIV-1 in several important ways: it has lower plasma viremia (viral load), slower progression to AIDS (longer asymptomatic period), lower transmissibility (mother-to-child and sexual transmission), and is predominantly found in West Africa (particularly Guinea-Bissau, Senegal, Cape Verde). HIV-1 is responsible for the global pandemic. HIV-2 has intrinsic resistance to NNRTIs (non-nucleoside reverse transcriptase inhibitors) and enfuvirtide, but does respond to other ART regimens including PIs and NRTIs."
  },
  {
    id: 14,
    question: "According to WHO clinical staging of HIV infection, which of the following conditions would classify a patient as WHO Stage 3?",
    options: [
      "Persistent generalized lymphadenopathy",
      "Oral candidiasis",
      "Pulmonary tuberculosis",
      "Pneumocystis jirovecii pneumonia"
    ],
    answer: 2,
    explanation: "WHO HIV Clinical Staging: Stage 1: Asymptomatic, persistent generalized lymphadenopathy. Stage 2: Minor conditions including oral candidiasis (angular cheilitis/thrush), recurrent oral ulcers, herpes zoster, seborrhoeic dermatitis, papular pruritic eruptions. Stage 3 (Severe): Pulmonary TB, unexplained chronic diarrhea >1 month, unexplained fever >1 month, severe bacterial infections, oral hairy leukoplakia. Stage 4 (AIDS-defining): PCP (Pneumocystis jirovecii pneumonia), cerebral toxoplasmosis, cryptococcal meningitis, CMV retinitis, Kaposi's sarcoma, HIV wasting syndrome."
  },
  {
    id: 15,
    question: "A patient with HIV infection has a CD4 count of 180 cells/mm3. According to current guidelines, this patient's immunological stage is:",
    options: [
      "Stage 1: CD4 > 500 cells/mm3",
      "Stage 2: CD4 200-499 cells/mm3",
      "Stage 3: CD4 < 200 cells/mm3",
      "Stage 4: CD4 < 100 cells/mm3"
    ],
    answer: 2,
    explanation: "WHO immunological classification of HIV: Stage 1 (Not significant): CD4 > 500 cells/mm3. Stage 2 (Mild): CD4 350-499 cells/mm3. Stage 3 (Advanced): CD4 200-349 cells/mm3. Stage 4 (Severe): CD4 < 200 cells/mm3. A CD4 count of 180 cells/mm3 falls below 200 cells/mm3, classifying the patient as Stage 4 (Severe immunodeficiency). This threshold of <200 CD4 cells/mm3 also defines AIDS in the CDC classification and marks the threshold below which certain prophylactic medications (e.g., cotrimoxazole for PCP) are particularly important."
  },
  {
    id: 16,
    question: "The 'window period' in HIV infection refers to:",
    options: [
      "The period between HIV exposure and the onset of AIDS",
      "The time between HIV infection and when antibody tests become positive (seroconversion)",
      "The period during which viral load is undetectable on treatment",
      "The incubation period before acute HIV syndrome symptoms appear"
    ],
    answer: 1,
    explanation: "The window period is the time between HIV infection (exposure/transmission) and when serological tests (antibody tests like ELISA) become positive - i.e., the time for seroconversion. During this period, the person is infected and infectious but antibody tests are negative (false negative). With 4th generation assays (HIV Ag/Ab combo detecting p24 antigen + antibodies), the window period is approximately 18-45 days. 3rd generation antibody-only assays have a window period of 23-90 days. RNA PCR can detect HIV within 10-33 days of infection, before antibodies develop."
  },
  {
    id: 17,
    question: "ELISA for HIV diagnosis uses which principle, and what is the interpretation of a reactive ELISA result?",
    options: [
      "ELISA detects HIV RNA; a reactive result confirms HIV infection",
      "ELISA detects HIV antibodies (and p24 antigen in 4th generation); a reactive result requires confirmation by Western blot or another test",
      "ELISA detects HIV by viral culture; reactive result requires CD4 count measurement",
      "ELISA is a definitive confirmatory test; reactive result is sufficient to diagnose HIV"
    ],
    answer: 1,
    explanation: "ELISA (Enzyme-Linked Immunosorbent Assay) is a screening test for HIV that detects antibodies against HIV-1/HIV-2 (3rd generation) or both antibodies AND p24 antigen (4th generation combo assay). A reactive (positive) ELISA result is a SCREENING result and MUST be confirmed by a supplemental/confirmatory test such as Western blot, immunofluorescence assay, or HIV-1/HIV-2 antibody differentiation assay. In India's National HIV Testing Algorithm, two or three rapid tests using different antigens/formats are used. A single reactive ELISA is never sufficient for diagnosis."
  },
  {
    id: 18,
    question: "Which of the following is the MOST common AIDS-defining opportunistic infection in India?",
    options: [
      "Cryptococcal meningitis",
      "CMV retinitis",
      "Pulmonary tuberculosis",
      "Pneumocystis jirovecii pneumonia (PCP)"
    ],
    answer: 2,
    explanation: "In India and other high TB-burden countries, pulmonary tuberculosis is the most common AIDS-defining illness and opportunistic infection in HIV-infected individuals. India has a dual epidemic of HIV and TB. TB can occur at any CD4 count level (unlike many other OIs that occur primarily at very low CD4 counts). Extrapulmonary TB becomes more common as CD4 count falls. PCP is more common in Western countries. Cryptococcal meningitis and CMV retinitis typically occur at CD4 <100 cells/mm3 and are less common than TB in India."
  },
  {
    id: 19,
    question: "Viral load measurement in HIV serves which primary clinical purpose?",
    options: [
      "To diagnose HIV infection initially",
      "To monitor response to antiretroviral therapy and detect treatment failure",
      "To determine the patient's CD4 count",
      "To identify the specific subtype of HIV for treatment selection"
    ],
    answer: 1,
    explanation: "HIV viral load (HIV RNA quantification) measures the amount of HIV RNA copies per mL of plasma. Its primary clinical uses are: (1) Monitoring response to ART - viral load should become undetectable (<50 copies/mL) within 6 months of starting ART; (2) Detecting virological failure (viral load >1000 copies/mL on two consecutive measurements); (3) Assessing transmission risk (Undetectable = Untransmittable, U=U). While viral load can diagnose HIV in infants (early infant diagnosis) and during the window period, CD4 count (not viral load) reflects immune status. Viral load does not identify HIV subtypes."
  },
  {
    id: 20,
    question: "The recommended first-line ART regimen for treatment-naive adults with HIV in India under the National AIDS Control Programme is:",
    options: [
      "Zidovudine + Lamivudine + Nevirapine (AZT + 3TC + NVP)",
      "Tenofovir + Lamivudine + Efavirenz (TDF + 3TC + EFV)",
      "Abacavir + Lamivudine + Lopinavir/Ritonavir",
      "Stavudine + Lamivudine + Efavirenz"
    ],
    answer: 1,
    explanation: "The current WHO-recommended and NACP India first-line ART regimen for treatment-naive adults is TDF (Tenofovir disoproxil fumarate) + 3TC (Lamivudine) + EFV (Efavirenz), available as a fixed-dose combination (FDC) taken once daily. This replaced the older AZT+3TC+NVP and Stavudine-based regimens due to better tolerability and simplified once-daily dosing. Dolutegravir (DTG) is increasingly replacing EFV as TDF+3TC+DTG in many settings per 2019 WHO guidelines."
  },
  {
    id: 21,
    question: "Prevention of Mother-to-Child Transmission (PMTCT) of HIV in India currently recommends:",
    options: [
      "Zidovudine monotherapy from 28 weeks gestation",
      "Lifelong ART (Option B+) for all HIV-positive pregnant women regardless of CD4 count",
      "ART only during labor and delivery",
      "Nevirapine single dose during labor and Zidovudine for 6 weeks to the newborn"
    ],
    answer: 1,
    explanation: "India follows WHO Option B+ for PMTCT: ALL HIV-positive pregnant women (regardless of CD4 count or WHO clinical stage) are initiated on lifelong ART (TDF+3TC+EFV) and continue for life. This eliminates the need for CD4 testing before initiation, simplifies the program, prevents MTCT during breastfeeding, and benefits the mother's health. The newborn also receives Nevirapine syrup for 6 weeks as prophylaxis. MTCT can occur during pregnancy (~5-10%), delivery (~10-20%), and breastfeeding (~5-20%). Option B+ reduces MTCT to <2%."
  },
  {
    id: 22,
    question: "A healthcare worker sustains a needlestick injury from an HIV-positive patient's blood. Post-exposure prophylaxis (PEP) should be started:",
    options: [
      "Within 72 hours of exposure and continued for 28 days",
      "Within 24 hours only; if delayed, PEP is not effective",
      "Only if the source patient has detectable viral load",
      "Within 7 days of exposure and continued for 14 days"
    ],
    answer: 0,
    explanation: "HIV Post-Exposure Prophylaxis (PEP) should be started as soon as possible, ideally within 1-2 hours, and MUST be started within 72 hours (3 days) of exposure. After 72 hours, PEP is unlikely to be effective. PEP is continued for 28 days (4 weeks). The recommended PEP regimen is TDF + FTC (or 3TC) + Raltegravir or Dolutegravir. PEP is recommended regardless of the source's viral load (as low viral load does not guarantee zero risk). The healthcare worker should also be tested for baseline HIV status and followed up at 6 weeks, 3 months, and 6 months."
  },
  {
    id: 23,
    question: "Western blot is used as a confirmatory test for HIV. Which bands on Western blot constitute a POSITIVE result per WHO criteria?",
    options: [
      "Any single band present on the blot",
      "Presence of bands p24 alone",
      "At least two of the following bands: p24, gp41, gp120/gp160",
      "Any three bands regardless of specificity"
    ],
    answer: 2,
    explanation: "Per WHO criteria, a Western blot is POSITIVE for HIV-1 if at least two of the following three envelope/core bands are present: p24 (core), gp41 (transmembrane envelope), and gp120/gp160 (surface envelope). The result is NEGATIVE if no bands are present, and INDETERMINATE if bands are present but criteria for positivity are not met. Indeterminate results require repeat testing after 2-4 weeks. Western blot detects antibodies to specific HIV proteins separated by electrophoresis. Due to cost and complexity, many programs now use HIV antibody differentiation immunoassays instead of Western blot."
  },
  {
    id: 24,
    question: "Kaposi's sarcoma in HIV/AIDS is caused by which co-infecting agent?",
    options: [
      "Epstein-Barr virus (EBV)",
      "Human Herpesvirus 8 (HHV-8) / Kaposi's Sarcoma-Associated Herpesvirus (KSHV)",
      "Human Papillomavirus (HPV)",
      "Cytomegalovirus (CMV)"
    ],
    answer: 1,
    explanation: "Kaposi's Sarcoma (KS) in HIV/AIDS patients is caused by Human Herpesvirus 8 (HHV-8), also called Kaposi's Sarcoma-Associated Herpesvirus (KSHV). It is an AIDS-defining illness (WHO Stage 4 / CDC Category C). KS presents as purple-red, non-blanching skin lesions and can involve mucous membranes, lymph nodes, lungs, and GI tract. Classic KS occurs in elderly Mediterranean men independent of HIV. EBV causes primary CNS lymphoma and oral hairy leukoplakia in HIV patients. HPV causes cervical cancer and anogenital warts. CMV causes retinitis, colitis, and encephalitis in AIDS."
  },
  {
    id: 25,
    question: "Which Plasmodium species is responsible for the MOST severe and potentially fatal form of malaria?",
    options: [
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium falciparum",
      "Plasmodium ovale"
    ],
    answer: 2,
    explanation: "Plasmodium falciparum causes the most severe and fatal form of malaria. It differs from other species in that it: (1) infects red blood cells of ALL ages (not age-specific), leading to high parasitemia; (2) causes cytoadherence (infected RBCs stick to capillary endothelium via PfEMP-1), leading to microvascular obstruction; (3) causes rosetting (infected RBCs bind to uninfected RBCs); and (4) can cause cerebral malaria, severe anemia, ARDS, acute renal failure, and multi-organ failure. P. vivax and P. ovale have dormant liver stages (hypnozoites). P. malariae causes quartan malaria."
  },
  {
    id: 26,
    question: "The vector for malaria transmission is the female Anopheles mosquito. Which of the following correctly describes the Anopheles mosquito's resting and feeding behavior?",
    options: [
      "Daytime biting, horizontal resting position, prefers clean stagnant water",
      "Night-biting, head-down resting position at angle to surface (endophilic), prefers clear unpolluted water",
      "Night-biting, horizontal body position parallel to surface, breeds only in salt water",
      "Dusk-biting only, prefers heavily polluted urban water bodies, endophobic behavior"
    ],
    answer: 1,
    explanation: "Anopheles mosquitoes, the malaria vectors, characteristically: (1) bite at night (peak biting between dusk and dawn); (2) rest with head pointing downward at an angle to the surface (due to posterior position of proboscis - the classic angled resting posture, different from Culex which rests parallel to surface); (3) breed in clean, unpolluted, slow-moving or stagnant water; (4) are endophilic (prefer to rest indoors) and endophagic (bite indoors) - important for indoor residual spraying (IRS) effectiveness. Anopheles does not have barrel-shaped egg rafts like Culex; eggs are laid singly with floats."
  },
  {
    id: 27,
    question: "The complete life cycle of Plasmodium falciparum includes an exoerythrocytic phase in the liver. The duration of the liver stage (pre-patent period) for P. falciparum is approximately:",
    options: [
      "5-6 days",
      "8-9 days",
      "12-14 days",
      "15-16 days"
    ],
    answer: 1,
    explanation: "The liver stage (exoerythrocytic schizogony) duration varies by species: P. falciparum: 5-6 days (shortest liver stage); P. vivax: 8 days; P. ovale: 9 days; P. malariae: 13-16 days. The total pre-patent period (from mosquito bite to detection of parasites in blood) is longer - approximately 7-14 days for P. falciparum. Importantly, P. falciparum and P. malariae do NOT have a dormant liver stage (hypnozoites), unlike P. vivax and P. ovale where hypnozoites cause relapses weeks to months later."
  },
  {
    id: 28,
    question: "A patient presents with fever, altered consciousness, and seizures. Blood smear shows P. falciparum with >5% parasitemia. Which criterion MOST specifically suggests cerebral malaria?",
    options: [
      "Parasitemia >2% on peripheral blood smear",
      "Unarousable coma (Blantyre Coma Score <3 in children) not attributable to other causes in confirmed P. falciparum malaria",
      "Fever >40°C with rigors in P. falciparum infection",
      "Presence of ring forms and gametocytes on peripheral smear"
    ],
    answer: 1,
    explanation: "Cerebral malaria is defined by the WHO as unarousable coma (Glasgow Coma Scale <11 in adults; Blantyre Coma Score <3 in children) not explained by another cause (hypoglycemia, meningitis, etc.) in a patient with confirmed P. falciparum infection. It is the most common cause of non-traumatic encephalopathy in children in sub-Saharan Africa. Pathophysiology involves cytoadherence of parasitized RBCs to cerebral endothelium, sequestration, rosetting, and release of pro-inflammatory cytokines. Mortality is 15-25% even with treatment. Parasitemia >5% alone indicates hyperparasitemia (a marker of severe malaria) but not specifically cerebral malaria."
  },
  {
    id: 29,
    question: "P. vivax malaria differs from P. falciparum malaria in all of the following EXCEPT:",
    options: [
      "P. vivax has hypnozoites causing relapses",
      "P. vivax preferentially infects reticulocytes (young RBCs)",
      "P. vivax causes quotidian (daily) fever pattern",
      "P. vivax can cause severe malaria with ARDS and thrombocytopenia"
    ],
    answer: 2,
    explanation: "P. vivax causes TERTIAN (every 48 hours / every 3rd day) fever pattern, not quotidian (daily). The erythrocytic cycle of P. vivax is 48 hours, producing fever every other day. Quartan fever (every 72 hours) is caused by P. malariae. True quotidian fever in malaria suggests double tertian (infection with two broods of P. vivax maturing alternately). All other options are true: P. vivax has hypnozoites causing relapses (requires primaquine to eliminate), preferentially infects reticulocytes (Duffy antigen receptor), and can cause severe malaria including ARDS, severe thrombocytopenia, and splenic rupture."
  },
  {
    id: 30,
    question: "Thick blood smear versus thin blood smear for malaria diagnosis - which statement is CORRECT?",
    options: [
      "Thin smear is more sensitive for detection; thick smear allows species identification",
      "Thick smear is more sensitive for detection (detects lower parasitemia); thin smear allows species identification",
      "Both smears have equal sensitivity and specificity",
      "Thick smear is used only for P. falciparum; thin smear for P. vivax"
    ],
    answer: 1,
    explanation: "Thick blood smear is more SENSITIVE for parasite detection because a larger volume of blood is concentrated on the slide (concentrates parasites ~20-40 times), allowing detection of low parasitemia (as low as 5-10 parasites/microL). However, RBCs are lysed during staining, destroying their morphology. Thin blood smear preserves RBC morphology and parasite morphology, allowing accurate SPECIES IDENTIFICATION (based on RBC size, parasite morphology, Schuffner's dots in P. vivax/ovale, Maurer's clefts in P. falciparum, etc.). Standard practice: use both together."
  },
  {
    id: 31,
    question: "Rapid Diagnostic Tests (RDTs) for malaria detect which antigens?",
    options: [
      "Plasmodium falciparum-specific HRP-2 and/or pan-Plasmodium aldolase or pLDH",
      "Plasmodium-specific DNA by PCR",
      "Plasmodium antibodies in patient serum",
      "Hemozoin (malaria pigment) in red blood cells"
    ],
    answer: 0,
    explanation: "Malaria Rapid Diagnostic Tests (RDTs) are immunochromatographic strip tests that detect Plasmodium antigens in blood: (1) HRP-2 (Histidine-Rich Protein 2) - P. falciparum specific; remains detectable for weeks after treatment (limitation); (2) pLDH (Plasmodium lactate dehydrogenase) - pan-Plasmodium (all species) or P. falciparum-specific; clears faster after treatment; (3) Aldolase - pan-Plasmodium. Concern: HRP-2/3 gene deletions in P. falciparum (especially in parts of South America and Southeast Asia) cause false-negative HRP-2-based RDTs. RDTs cannot quantify parasitemia or confirm species definitively."
  },
  {
    id: 32,
    question: "For treatment of uncomplicated P. falciparum malaria in India, the first-line treatment recommended by NVBDCP is:",
    options: [
      "Chloroquine 25 mg/kg over 3 days",
      "Artemisinin-based Combination Therapy (ACT) - Artesunate + Sulfadoxine-Pyrimethamine",
      "Quinine sulfate for 7 days",
      "Mefloquine monotherapy"
    ],
    answer: 1,
    explanation: "India's National Vector Borne Disease Control Programme (NVBDCP) recommends Artemisinin-based Combination Therapy (ACT) for uncomplicated P. falciparum malaria: Artesunate (AS) + Sulfadoxine-Pyrimethamine (SP) as the first-line. ACT combines a fast-acting artemisinin derivative (reduces parasite burden rapidly) with a longer-acting partner drug. Chloroquine is ineffective against P. falciparum in most parts of India due to widespread resistance. Primaquine (0.75 mg/kg single dose) is added on Day 2 to eliminate gametocytes (prevents transmission). For severe P. falciparum: IV Artesunate is preferred over quinine."
  },
  {
    id: 33,
    question: "Primaquine is used in malaria treatment. What is its primary mechanism of action and the major adverse effect that limits its use?",
    options: [
      "Inhibits DNA synthesis; major adverse effect is hepatotoxicity",
      "Acts on liver hypnozoites (radical cure) and gametocytes; major adverse effect is hemolytic anemia in G6PD-deficient patients",
      "Inhibits hemozoin polymerization; major adverse effect is retinal toxicity",
      "Kills erythrocytic stage parasites; major adverse effect is cardiac arrhythmia"
    ],
    answer: 1,
    explanation: "Primaquine acts primarily on: (1) Liver stages - hypnozoites of P. vivax and P. ovale (radical cure preventing relapses); and (2) Gametocytes of P. falciparum (preventing transmission to mosquitoes). Its major life-threatening adverse effect is HEMOLYTIC ANEMIA in patients with G6PD (Glucose-6-Phosphate Dehydrogenase) deficiency, because primaquine metabolites cause oxidative stress on RBCs. G6PD testing before primaquine administration is recommended. Chloroquine/quinine inhibit hemozoin polymerization. Chloroquine causes retinal toxicity with long-term use. Quinine causes cardiac arrhythmias."
  },
  {
    id: 34,
    question: "Annual Parasite Incidence (API) is the key malaria indicator used in India. API is calculated as:",
    options: [
      "(Number of positive blood slides / Population at risk) x 1000",
      "(Number of confirmed malaria cases / Mid-year population) x 1000",
      "(Number of blood slides examined / Population) x 1000",
      "(Number of malaria deaths / Confirmed malaria cases) x 100"
    ],
    answer: 1,
    explanation: "Annual Parasite Incidence (API) = (Number of confirmed malaria cases in a year / Mid-year population at risk) x 1000. It is the standard indicator for measuring malaria burden in India used by NVBDCP. Interpretation: API >2 = High risk area; API 1-2 = Moderate risk; API <1 = Low risk. India's national malaria elimination target is to achieve API <1 in all districts. Annual Blood Examination Rate (ABER) = (Number of blood slides examined / Population) x 100 - measures surveillance intensity. Slide Positivity Rate (SPR) = (Positive slides / Slides examined) x 100."
  },
  {
    id: 35,
    question: "Which malaria prevention strategy involves spraying insecticide on interior walls and ceilings of houses to kill resting mosquitoes?",
    options: [
      "Larval source management (LSM)",
      "Long-Lasting Insecticidal Nets (LLINs)",
      "Indoor Residual Spraying (IRS)",
      "Space spraying / fogging"
    ],
    answer: 2,
    explanation: "Indoor Residual Spraying (IRS) involves applying residual insecticide to the interior surfaces (walls, ceilings, under furniture) of houses and animal sheds. When Anopheles mosquitoes rest on these treated surfaces after blood feeding, they absorb a lethal dose of insecticide and die before they can complete the sporogonic cycle or bite again. IRS is effective because Anopheles is endophilic (rests indoors). Common insecticides used: DDT (still used in India), synthetic pyrethroids, and organophosphates. LLINs protect sleeping individuals. LSM targets breeding sites. Space spraying has no residual activity."
  },
  {
    id: 36,
    question: "G6PD deficiency is relevant to malaria in which of the following contexts?",
    options: [
      "G6PD deficiency confers complete protection against P. falciparum malaria",
      "G6PD deficiency is a contraindication to primaquine use due to risk of hemolysis; also, G6PD deficiency confers partial protection against severe P. falciparum malaria",
      "G6PD deficiency increases susceptibility to all forms of malaria equally",
      "G6PD deficiency only affects treatment of P. vivax but not P. falciparum"
    ],
    answer: 1,
    explanation: "G6PD (Glucose-6-Phosphate Dehydrogenase) deficiency is relevant to malaria in two important ways: (1) TREATMENT: Primaquine (used for radical cure of P. vivax/P. ovale relapses and P. falciparum gametocyte clearance) causes hemolytic anemia in G6PD-deficient patients due to oxidative stress - hence primaquine is contraindicated or used with caution in G6PD deficiency; (2) EPIDEMIOLOGY: G6PD deficiency (X-linked) is maintained in malaria-endemic populations because it confers partial PROTECTION against severe P. falciparum malaria (parasitized G6PD-deficient RBCs are cleared more rapidly by the spleen), similar to sickle-cell trait."
  },
  {
    id: 37,
    question: "The sporogonic cycle (development of malaria parasite in the mosquito) requires a minimum temperature to complete. What is the approximate minimum temperature required for P. falciparum sporogony?",
    options: [
      "10 degrees Celsius",
      "15 degrees Celsius",
      "16 degrees Celsius",
      "20 degrees Celsius"
    ],
    answer: 2,
    explanation: "The sporogonic cycle (extrinsic incubation period - development of Plasmodium in the Anopheles mosquito from ingested gametocytes to infective sporozoites) requires minimum temperatures: P. falciparum: minimum 16 degrees Celsius (optimal 25-30 degrees C, duration ~10-12 days at optimal temperature); P. vivax: minimum 16 degrees C (some sources say 14.5 degrees C); P. malariae: minimum 18 degrees C. This temperature requirement explains why malaria is altitude-limited and seasonal in many regions. Temperature below minimum = malaria transmission impossible (threshold for vector control strategies). Duration of sporogony increases at lower temperatures."
  },
  {
    id: 38,
    question: "Dengue fever is caused by a flavivirus with how many serotypes, and what is the significance of the different serotypes?",
    options: [
      "2 serotypes; infection with one provides cross-protection against the other",
      "4 serotypes (DENV-1 to DENV-4); infection with one provides lifelong immunity to that serotype only, and secondary infection with a different serotype increases risk of severe dengue",
      "4 serotypes; infection with any one provides cross-immunity to all others",
      "5 serotypes; DENV-5 causes the most severe disease"
    ],
    answer: 1,
    explanation: "Dengue virus (DENV) has 4 serotypes: DENV-1, DENV-2, DENV-3, and DENV-4 (DENV-5 has been reported tentatively but is not officially recognized). Primary infection with one serotype provides lifelong immunity to that serotype only and short-term partial cross-immunity to others. Secondary infection with a DIFFERENT serotype carries increased risk of severe dengue (Dengue Hemorrhagic Fever/Dengue Shock Syndrome) due to Antibody-Dependent Enhancement (ADE) - pre-existing non-neutralizing antibodies from first infection enhance uptake of the second serotype into monocytes/macrophages, amplifying viral replication and cytokine release."
  },
  {
    id: 39,
    question: "The primary vector of dengue fever, Aedes aegypti, is characterized by all of the following EXCEPT:",
    options: [
      "Daytime biting activity with peak at dawn and dusk",
      "Distinctive black and white stripe pattern on body and legs",
      "Breeds in clean, stagnant water in artificial containers",
      "Night-biting behavior and prefers to breed in polluted water drains"
    ],
    answer: 3,
    explanation: "Aedes aegypti is characterized by: daytime biting (NOT night-biting; peak biting around sunrise and sunset); distinctive black body with white silvery markings/stripes (lyre-shaped pattern on thorax); breeding in CLEAN, stagnant water in artificial containers (flower pots, discarded tires, water storage containers, desert coolers, water tanks - NOT polluted drains). Aedes albopictus (tiger mosquito) is a secondary vector. Anopheles (malaria vector) breeds in cleaner natural water. Culex (Japanese encephalitis/filaria vector) breeds in polluted, organic-rich water like drains and cesspools."
  },
  {
    id: 40,
    question: "According to the 2009 WHO classification, dengue clinical presentation is classified into three categories. A patient with dengue fever who develops persistent vomiting, clinical fluid accumulation, mucosal bleeding, and lethargy falls into which category?",
    options: [
      "Dengue without warning signs",
      "Dengue with warning signs",
      "Severe dengue",
      "Dengue Hemorrhagic Fever Grade III"
    ],
    answer: 1,
    explanation: "2009 WHO Dengue Classification: (1) Dengue WITHOUT Warning Signs: fever, nausea, vomiting, rash, aches/pains, positive tourniquet test, leukopenia. (2) Dengue WITH Warning Signs: abdominal pain/tenderness, persistent vomiting, clinical fluid accumulation (ascites, pleural effusion), mucosal bleeding, lethargy/restlessness, liver enlargement >2 cm, rising hematocrit with rapid decline in platelet count - requires CLOSE observation and often hospital admission. (3) Severe Dengue: severe plasma leakage (shock/fluid accumulation with respiratory distress), severe bleeding, severe organ impairment (liver, CNS, renal, cardiac). DHF grading is the older 1997 WHO classification."
  },
  {
    id: 41,
    question: "The NS1 (Non-Structural Protein 1) antigen test for dengue diagnosis - which statement is CORRECT?",
    options: [
      "NS1 is detectable from Day 5 onwards and can distinguish dengue serotypes",
      "NS1 is detectable from Day 1-2 of fever onset and remains positive for 5-9 days; it is positive in primary and secondary dengue",
      "NS1 test is more specific than PCR for dengue diagnosis",
      "NS1 antigen persists for several weeks after fever resolution"
    ],
    answer: 1,
    explanation: "NS1 antigen is secreted by dengue virus-infected cells and is detectable in blood from Day 1-2 of fever onset (before antibodies develop) and typically remains detectable for 5-9 days. It is positive in BOTH primary and secondary dengue infections. NS1 testing is the most useful early diagnostic test for dengue during the febrile phase (before Day 5). PCR is the gold standard for early diagnosis and serotyping (Day 1-5). IgM antibodies appear around Day 5. In secondary infections, IgG rises rapidly (anamnestic response). NS1 levels may be lower in secondary dengue (due to immune complex formation)."
  },
  {
    id: 42,
    question: "In dengue serology, a patient presents on Day 8 of fever. IgM antibody for dengue is positive. What does this indicate?",
    options: [
      "Definitive diagnosis of primary dengue infection only",
      "Current or recent dengue infection (primary or secondary); IgM appears around Day 5 and persists for 2-3 months",
      "Past dengue infection from >1 year ago",
      "False positive result - IgM is not a reliable marker beyond Day 7"
    ],
    answer: 1,
    explanation: "Dengue IgM antibodies appear approximately 5 days after fever onset in primary infection (3-5 days in secondary). IgM peaks at 2 weeks and persists for 2-3 months. A positive IgM on Day 8 indicates current or recent dengue infection (within the past 2-3 months). In PRIMARY dengue: IgM rises first, then IgG (rises slowly after 2 weeks). In SECONDARY dengue: IgG rises rapidly (within 1-2 days - anamnestic response), often reaching high levels before or simultaneously with IgM. High IgG with absent/low IgM in early illness suggests secondary dengue. IgG persists for life (lifelong immunity to that serotype)."
  },
  {
    id: 43,
    question: "The Tourniquet Test (Rumpel-Leede Capillary Fragility Test) is used in dengue diagnosis. A positive tourniquet test is defined as:",
    options: [
      "More than 5 petechiae per 2.5 cm2 area",
      "More than 10 petechiae per 1 inch2 (6.25 cm2) area",
      "Appearance of any petechiae after tourniquet inflation",
      "Bleeding from the tourniquet application site"
    ],
    answer: 1,
    explanation: "The Tourniquet Test (TT) assesses capillary fragility: inflate BP cuff to the midpoint between systolic and diastolic pressure for 5 minutes. A POSITIVE result is defined as 10 or more petechiae per 1 square inch (6.25 cm2) in the antecubital fossa area. The tourniquet test is positive in dengue (increases with disease progression), thrombocytopenic conditions, and capillary fragility disorders. In the 1997 WHO DHF criteria, a positive tourniquet test was required for diagnosis. It may be positive in early dengue (febrile phase) even before thrombocytopenia develops. False positives occur in sunburned skin."
  },
  {
    id: 44,
    question: "Dengue Hemorrhagic Fever (DHF) grading per the 1997 WHO classification - Grade III is characterized by:",
    options: [
      "Fever, hemorrhagic manifestations, thrombocytopenia, and hemoconcentration only",
      "Circulatory failure with rapid weak pulse, narrow pulse pressure (<20 mmHg) or hypotension, and cold clammy skin",
      "Profound shock with undetectable blood pressure and pulse",
      "Severe bleeding requiring blood transfusion"
    ],
    answer: 1,
    explanation: "1997 WHO DHF Grading: Grade I: Fever, constitutional symptoms, positive tourniquet test, thrombocytopenia, hemoconcentration. Grade II: Grade I + spontaneous bleeding (skin, gums, GI). Grade III: Circulatory failure - rapid weak pulse, narrow pulse pressure (<=20 mmHg) OR hypotension, cold clammy skin, restlessness (incipient shock - also called Dengue Shock Syndrome). Grade IV: Profound shock with undetectable BP and pulse (severe Dengue Shock Syndrome). Grades III and IV = Dengue Shock Syndrome (DSS). Key diagnostic criteria for DHF: fever, hemorrhagic manifestations, thrombocytopenia (<100,000/mm3), objective evidence of plasma leakage (hematocrit rise >=20%, pleural effusion, ascites)."
  },
  {
    id: 45,
    question: "In the management of dengue with warning signs (but NO shock), fluid management should follow which principle?",
    options: [
      "Aggressive IV crystalloid resuscitation with 20 mL/kg boluses immediately",
      "Oral rehydration therapy preferred; IV isotonic crystalloids at maintenance rate with frequent monitoring, titrated to clinical response",
      "Colloids (albumin/dextran) are preferred over crystalloids for plasma leakage",
      "Platelet transfusion should be given for platelet count <50,000/mm3"
    ],
    answer: 1,
    explanation: "For dengue WITH warning signs but NO shock: oral rehydration is preferred if tolerated. If IV fluids needed, isotonic crystalloids (Normal saline or Ringer's lactate) are given at maintenance or slightly above maintenance rates (NOT boluses), with careful monitoring of vital signs, hematocrit, urine output, and clinical status every 1-4 hours. Overzealous fluid administration is harmful (can worsen effusions/pulmonary edema once plasma leakage phase ends). Bolus resuscitation is reserved for shock. Colloids are considered only in severe refractory shock. Platelet transfusion is NOT indicated for thrombocytopenia alone without significant bleeding (platelets <10,000 with bleeding, or prophylactic at <10,000 in some guidelines)."
  },
  {
    id: 46,
    question: "The Breteau Index (BI) is used for Aedes mosquito surveillance. It is defined as:",
    options: [
      "Number of Aedes-positive containers per 100 houses inspected",
      "Number of Aedes-positive houses per 100 houses inspected",
      "Number of adult Aedes mosquitoes per house inspected",
      "Number of larval breeding sites per 100 square meters"
    ],
    answer: 0,
    explanation: "Aedes larval surveillance indices: Breteau Index (BI) = Number of Aedes-positive containers per 100 houses inspected (most epidemiologically significant as it relates containers to a standard unit). Container Index (CI) = (Positive containers / Total containers inspected) x 100. House Index (HI) = (Number of Aedes-positive houses / Total houses inspected) x 100. BI threshold indicating dengue transmission risk: BI >5 is considered significant risk; BI >50 indicates high risk. BI is preferred over CI because it accounts for the number of containers per house and is better correlated with dengue transmission."
  },
  {
    id: 47,
    question: "A 25-year-old returns from a dengue-endemic area with fever for 4 days, severe headache, retro-orbital pain, myalgia, and a maculopapular rash that appeared on Day 3. Platelet count is 85,000/mm3 and hematocrit has risen 22% from baseline. Which of the following BEST characterizes this patient's condition?",
    options: [
      "Dengue without warning signs - manage as outpatient",
      "Dengue with warning signs due to hemoconcentration - requires hospital admission and monitoring",
      "Severe dengue - requires ICU admission immediately",
      "Classic Dengue Hemorrhagic Fever Grade I only if tourniquet test is positive"
    ],
    answer: 1,
    explanation: "This patient has dengue with warning signs: the hematocrit rise of 22% (>20%) indicates significant plasma leakage, which is a warning sign and a criterion for DHF in the 1997 classification. Under 2009 WHO classification, hematocrit rise with rapid platelet decline is a warning sign. Thrombocytopenia (platelets 85,000) alone is common in dengue. Warning signs require hospital admission for close monitoring and IV fluid management. This is NOT severe dengue yet (no shock, no severe bleeding, no organ impairment). ICU is not immediately required without shock or severe complications. The patient needs careful fluid titration during the critical plasma leakage phase (Day 3-6)."
  },
  {
    id: 48,
    question: "Which of the following dengue control measures specifically targets LARVAL stages of Aedes aegypti?",
    options: [
      "Indoor residual spraying with insecticides",
      "Use of Bacillus thuringiensis israelensis (Bti) in water containers",
      "Adult mosquito traps",
      "Wearing protective clothing during daytime"
    ],
    answer: 1,
    explanation: "Bacillus thuringiensis israelensis (Bti) is a biological larvicide - it produces toxins that kill mosquito larvae when ingested. It is used in water containers and other Aedes breeding sites and is safe for humans and non-target organisms. Other larval control measures include: Temephos (abate) - chemical larvicide for water containers; source reduction (emptying/covering/removing water containers); fish (Gambusia, guppy) for larger water bodies. Indoor Residual Spraying (IRS) and space spraying target ADULT mosquitoes. Personal protection measures (clothing, repellents, nets) prevent bites. Sterile Insect Technique (SIT) and Wolbachia-infected Aedes are newer biocontrol strategies."
  },
  {
    id: 49,
    question: "Dengue Shock Syndrome (DSS) is characterized by which hemodynamic finding that distinguishes it from other causes of shock?",
    options: [
      "Low diastolic pressure with wide pulse pressure",
      "High systolic pressure with bounding pulse",
      "Narrow pulse pressure (<=20 mmHg) or hypotension due to plasma leakage into extravascular compartment",
      "Normal blood pressure with bradycardia"
    ],
    answer: 2,
    explanation: "Dengue Shock Syndrome (DSS) is caused by massive PLASMA LEAKAGE (not blood loss) into the extravascular compartment (pleural cavity, peritoneum) during the critical phase. This reduces intravascular volume, leading to compensated shock initially characterized by NARROW PULSE PRESSURE (<=20 mmHg) - the diastolic pressure rises (peripheral vasoconstriction) while systolic falls, compressing the pulse pressure. This is unlike hemorrhagic shock (wide pulse pressure initially) or septic shock (initially wide pulse pressure from vasodilation). Tachycardia, cold clammy skin, and prolonged capillary refill time also occur. Hemoconcentration (rising hematocrit) confirms plasma leakage."
  },
  {
    id: 50,
    question: "A researcher is comparing dengue control strategies. Which statement about dengue vaccine (Dengvaxia/CYD-TDV) is CORRECT regarding current WHO recommendations?",
    options: [
      "Dengvaxia is recommended for all children aged 9-45 years in endemic areas regardless of prior dengue exposure",
      "Dengvaxia should only be used in individuals with confirmed prior dengue infection (seropositive) as it increases risk of severe dengue in seronegative individuals",
      "Dengvaxia provides protection against all 4 serotypes equally and can replace vector control measures",
      "Dengvaxia is contraindicated in all immunocompromised individuals and is not approved for use"
    ],
    answer: 1,
    explanation: "Dengvaxia (CYD-TDV, Sanofi Pasteur) is a live attenuated tetravalent dengue vaccine. WHO 2018 position: Dengvaxia should ONLY be given to individuals with DOCUMENTED PRIOR DENGUE INFECTION (seropositive) because in seronegative individuals (no prior dengue), the vaccine acts as a 'primary infection,' and subsequent natural dengue infection causes enhanced severe disease (similar to ADE in secondary infection). Pre-vaccination screening for prior dengue exposure is essential. WHO recommends a test-and-vaccinate strategy. The vaccine does not provide equal protection against all serotypes (lower efficacy against DENV-1 and DENV-2 in some studies). Vector control remains essential."
  }
];

export default questions;

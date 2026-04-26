const questions = [
  {
    id: 1,
    question: "Respiratory droplets produced during coughing are classified as 'large droplets' when they exceed which particle diameter threshold, determining that they will settle by gravity rather than remain airborne?",
    options: ["1 micron", "5 microns", "10 microns", "50 microns"],
    answer: 1,
    explanation: "The conventional threshold distinguishing large respiratory droplets from droplet nuclei (airborne particles) is 5 microns in diameter, though some authorities use 10 microns. Particles >5 microns settle rapidly by gravity within approximately 1 meter of the source. Particles <5 microns (droplet nuclei) can remain suspended in air for prolonged periods. This size distinction underpins the separation of droplet precautions from airborne precautions in infection control."
  },
  {
    id: 2,
    question: "A healthcare worker sustains a needle-stick injury from a patient with active Hepatitis C infection. Without post-exposure prophylaxis, what is the average risk of acquiring HCV infection from a single percutaneous exposure?",
    options: ["0.03%", "1.8%", "6-30%", "30-40%"],
    answer: 1,
    explanation: "The average risk of HCV transmission following a needle-stick injury from an HCV-positive source is approximately 1.8% (range 0-7%). This is higher than HIV (approximately 0.3% per percutaneous exposure) but lower than HBeAg-positive HBV (6-30%). There is no licensed post-exposure prophylaxis for HCV. Early detection and monitoring followed by treatment with direct-acting antivirals if infection occurs is the current management approach."
  },
  {
    id: 3,
    question: "Contact transmission can be direct or indirect. Which of the following examples specifically represents DIRECT contact transmission?",
    options: [
      "Transmission of norovirus via a contaminated door handle",
      "Transmission of scabies via prolonged skin-to-skin contact with an infested person",
      "Transmission of Salmonella via contaminated poultry served at a buffet",
      "Transmission of influenza via respiratory droplets landing on a mucous membrane"
    ],
    answer: 1,
    explanation: "Direct contact transmission requires physical contact between the source and the susceptible host without an intermediate object. Scabies (Sarcoptes scabiei) is transmitted by direct prolonged skin-to-skin contact. The mite burrows into skin during close personal contact. A contaminated door handle is fomite (indirect contact) transmission. Food-borne is vehicle-borne. Droplet transmission is its own distinct category, though it involves 'direct' proximity."
  },
  {
    id: 4,
    question: "Mother-to-child transmission of HIV can occur via three routes. In a breastfeeding population without any antiretroviral intervention, what proportion of total vertical HIV transmission occurs via breastfeeding?",
    options: ["5-10%", "14-22%", "40-50%", "60-70%"],
    answer: 1,
    explanation: "Without antiretroviral intervention, mother-to-child HIV transmission occurs as follows: antepartum (in utero) accounts for approximately 25-40%, intrapartum (during delivery) accounts for approximately 50-75% of non-breastfeeding transmission, and postnatal via breastfeeding accounts for 14-22% of total transmission risk over a 24-month breastfeeding period. Combined risk without any intervention is approximately 20-45%. This distribution guides WHO PMTCT (Prevention of Mother-to-Child Transmission) protocols."
  },
  {
    id: 5,
    question: "In the epidemiology of feco-oral transmitted diseases, which of the following best describes a 'four F' pathway of transmission?",
    options: [
      "Fever, Fatigue, Flushing, Failure-to-thrive as clinical indicators of feco-oral disease",
      "Fluids, Food, Fingers, Flies as vehicles connecting fecal contamination to oral ingestion",
      "First, Fourth, Fifteenth, and Fortieth day as critical fever intervals for diagnosis",
      "Fomite, Fungal, Filth, and Flea routes of transmission in endemic areas"
    ],
    answer: 1,
    explanation: "The 'four F's' (sometimes 'five F's') framework describes the pathways by which fecal contamination reaches a new host: Fluids (contaminated water), Food (contaminated food), Fingers (contaminated hands touching mouth), and Flies (mechanical vectors carrying fecal organisms to food). Sometimes 'Fields' (night soil agricultural practices) is added as a fifth F. This framework was classically used in sanitation program design to identify intervention points for breaking feco-oral transmission."
  },
  {
    id: 6,
    question: "A public health researcher is analyzing the secondary attack rate (SAR) of influenza in households. In one household of 4 susceptible contacts, 3 develop influenza after a single index case. What is the household secondary attack rate?",
    options: ["25%", "60%", "75%", "100%"],
    answer: 2,
    explanation: "Secondary attack rate (SAR) = (Number of new cases among contacts / Number of susceptible contacts exposed) x 100. SAR = (3 new cases / 4 susceptible contacts) x 100 = 75%. The index case is excluded from both numerator and denominator. SAR measures transmission efficiency within a defined exposure group. Household SAR for seasonal influenza is typically 10-30%. A higher SAR indicates more efficient transmission and is used to compare pathogen transmissibility across settings."
  },
  {
    id: 7,
    question: "Vertical transmission of Toxoplasma gondii from mother to fetus follows which epidemiological pattern?",
    options: [
      "Risk is highest in the first trimester when T. gondii can most easily cross the immature placental barrier",
      "Risk of transmission increases with gestational age, but severity of fetal disease is greatest when infection occurs in the first trimester",
      "Risk and severity are both highest in the third trimester due to greater placental permeability",
      "Vertical transmission risk is constant across all trimesters and is unaffected by gestational age"
    ],
    answer: 1,
    explanation: "Toxoplasma gondii congenital infection follows a classic pattern: transmission probability INCREASES with advancing gestational age (5-15% in first trimester, 30-40% in second, 60-90% in third trimester) due to increasing placental permeability. However, fetal SEVERITY is inversely related to gestational age - first trimester infection causes the most severe disease (spontaneous abortion, severe neurological damage) while third trimester infection may be subclinical at birth but cause chorioretinitis later. This dissociation between risk and severity is epidemiologically important."
  },
  {
    id: 8,
    question: "A survey of healthcare workers finds 1.2% seroconversion to HIV annually among those with frequent needle-stick injuries, compared to 0.01% in the general population. The risk ratio for needle-stick exposure represents which type of blood-borne transmission quantification?",
    options: [
      "Attributable risk per exposure event",
      "Per-act transmission probability (infectivity per exposure)",
      "Cumulative incidence over the study period",
      "Prevalence-based transmission estimate"
    ],
    answer: 1,
    explanation: "Per-act transmission probability (also called per-exposure infectivity or attack rate per contact) quantifies the risk of infection from a single defined exposure event. For HIV via needle-stick: approximately 0.3% per percutaneous exposure. For receptive anal intercourse: approximately 1.4% per act. For receptive vaginal intercourse: approximately 0.08% per act. This per-act framework is essential for calculating transmission risk, informing post-exposure prophylaxis decisions, and building mathematical models of HIV spread."
  },
  {
    id: 9,
    question: "During a cholera outbreak, a public health team investigates the waterborne transmission dynamics. Which feature of V. cholerae O1 El Tor biotype transmission makes waterborne outbreaks particularly explosive?",
    options: [
      "V. cholerae cannot survive outside the human gut for more than 2 hours",
      "The organism can multiply in water to very high densities, a very low infectious dose is required, and it survives in aquatic environments for weeks",
      "V. cholerae is exclusively transmitted by the fecal-oral route via direct person-to-person contact",
      "Waterborne cholera transmission requires water temperatures below 10 degrees Celsius"
    ],
    answer: 1,
    explanation: "V. cholerae O1 El Tor can survive and multiply in aquatic environments, particularly in estuarine and coastal waters associated with zooplankton. The organism can form biofilms and persist for weeks in contaminated water sources. Infectious dose is approximately 10^6-10^8 organisms in healthy adults (lower in those with achlorhydria or on antacids). When contamination of a water supply is heavy, large numbers of people are simultaneously exposed, causing explosive outbreaks. The El Tor biotype shows enhanced environmental persistence compared to classical biotype."
  },
  {
    id: 10,
    question: "Regarding zoonotic transmission, a hunter develops a febrile illness after skinning and handling an infected rabbit carcass. Ulceroglandular tularemia (Francisella tularensis) is diagnosed. The mode of transmission in this case is:",
    options: [
      "Vector-borne biological transmission via tick bite during hunting",
      "Direct zoonotic contact transmission via skin abrasion during carcass handling",
      "Airborne transmission via aerosolized rabbit dander",
      "Feco-oral transmission via contaminated rabbit meat"
    ],
    answer: 1,
    explanation: "Francisella tularensis can penetrate intact or abraded skin during direct contact with infected animals or carcasses, resulting in ulceroglandular tularemia (skin ulcer at inoculation site with regional lymphadenopathy). Tularemia has multiple transmission routes: direct contact (ulceroglandular), tick/deerfly bite (ulceroglandular), inhalation of aerosolized organisms (pneumonic), ingestion of contaminated water/food (oropharyngeal). The portal of entry determines the clinical form. Skinning rabbits is a classic exposure scenario in endemic areas."
  },
  {
    id: 11,
    question: "In the epidemiology of sexual transmission of HIV, which of the following factors most substantially increases the per-act probability of HIV transmission?",
    options: [
      "Concurrent use of hormonal contraception by the female partner",
      "High plasma viral load (>100,000 copies/mL) in the HIV-positive partner",
      "HIV subtype B versus subtype C infection",
      "Age of the HIV-positive partner"
    ],
    answer: 1,
    explanation: "Plasma viral load is the single most important determinant of HIV sexual transmission probability. The per-act transmission probability increases approximately 2.5-fold for each log10 increase in viral load. Persons with viral load >100,000 copies/mL have approximately 10-fold higher transmission risk than those with 1,000-10,000 copies/mL. This is the biological basis for 'Treatment as Prevention' (TasP) - persons on effective ART with undetectable viral load have effectively zero transmission risk (U=U: Undetectable = Untransmittable)."
  },
  {
    id: 12,
    question: "A village experiences a cluster of Nipah virus infections. Person-to-person spread is documented within hospital settings. Which feature of Nipah virus person-to-person transmission distinguishes it epidemiologically from measles?",
    options: [
      "Nipah spreads exclusively via vector-borne routes unlike measles which is airborne",
      "Nipah virus has a much lower R0 (typically less than 1 in most outbreaks) compared to measles (R0 = 12-18), indicating inefficient person-to-person spread",
      "Nipah has a shorter incubation period than measles, making case detection easier",
      "Nipah is transmitted via the feco-oral route while measles is transmitted by droplets"
    ],
    answer: 1,
    explanation: "Nipah virus person-to-person transmission occurs via close contact with respiratory secretions or body fluids of infected persons, particularly in nosocomial settings. However, the R0 for Nipah is typically less than 1 in most outbreaks (range 0.33-0.48 in Bangladesh), indicating that the average case infects less than one person and outbreaks self-limit without sustained chains of transmission. This contrasts sharply with measles (R0 = 12-18). This difference in transmissibility reflects fundamental differences in pathogen biology and shedding dynamics."
  },
  {
    id: 13,
    question: "Wells' equation describes the relationship between droplet nuclei production and airborne infection risk. Which factor in this framework most directly determines whether airborne transmission will occur in an enclosed space?",
    options: [
      "The height of the ceiling in the room",
      "The quantum of infection produced per unit time, ventilation rate, and time of exposure",
      "The temperature of the room affecting pathogen viability",
      "The number of windows present in the room"
    ],
    answer: 1,
    explanation: "The Wells-Riley equation models airborne infection: P = 1 - e^(-Iqpt/Q), where I = number of infectious sources, q = quantum generation rate (infectious doses/hour produced by source), p = breathing rate of susceptible, t = time of exposure, Q = ventilation rate (air changes per hour). Ventilation rate is the primary modifiable engineering control - increasing Q dilutes infectious droplet nuclei concentration. This equation is used to calculate the number of expected cases from airborne exposure and to design ventilation requirements for high-risk settings."
  },
  {
    id: 14,
    question: "In the Bradley classification of water-related diseases, which category correctly describes guinea worm disease (dracunculiasis)?",
    options: [
      "Waterborne - transmitted via ingestion of contaminated water",
      "Water-washed - prevented by increased water quantity for hygiene",
      "Water-based - an obligate part of the life cycle occurs in water through the copepod intermediate host",
      "Water-related - the insect vector breeds in water"
    ],
    answer: 2,
    explanation: "Dracunculiasis is a water-based disease in Bradley's classification because Dracunculus medinensis has an obligatory aquatic intermediate host - the Cyclops copepod. Infected humans release L1 larvae into water; Cyclops ingest and harbor L3 larvae; humans drink water containing infected Cyclops. The copepod is an obligate intermediate host. This is distinct from waterborne (cholera - ingestion of organisms), water-washed (trachoma - hygiene-dependent), or water-related (malaria - vector breeds in water but water not in life cycle)."
  },
  {
    id: 15,
    question: "A food safety investigator is analyzing an outbreak where 120 people developed gastroenteritis 18-36 hours after attending a community potluck. Which pathogen has an incubation period most consistent with this timeframe and is commonly associated with potluck settings?",
    options: [
      "Staphylococcus aureus enterotoxin (incubation 1-6 hours)",
      "Salmonella species (incubation 6-48 hours)",
      "Hepatitis A virus (incubation 15-50 days)",
      "Bacillus cereus emetic toxin (incubation 1-5 hours)"
    ],
    answer: 1,
    explanation: "Salmonella gastroenteritis has an incubation period of 6-48 hours (median 18-36 hours), making it the most consistent pathogen for this outbreak's timeline. It is commonly associated with contaminated poultry, eggs, and other animal products at community events. S. aureus enterotoxin (1-6 hours) and B. cereus emetic toxin (1-5 hours) cause earlier onset. Hepatitis A causes a hepatitis syndrome after a much longer incubation (2-6 weeks). An 18-36 hour incubation strongly suggests bacterial replication rather than preformed toxin."
  },
  {
    id: 16,
    question: "Legionella pneumophila is not classified as a 'waterborne' disease in the traditional sense despite being water-associated. Which of the four Bradley categories best describes Legionnaires' disease transmission?",
    options: [
      "Waterborne - because Legionella is found in contaminated water sources",
      "Water-washed - because handwashing prevents most Legionella transmission",
      "Water-based - because the amoebal intermediate host lives in water",
      "Water-related (water-dispersed) - because the pathogen amplifies in water systems and transmission is via inhaled aerosols, not ingestion"
    ],
    answer: 3,
    explanation: "Legionellosis does not fit classical waterborne (ingestion) transmission. Legionella amplifies in engineered water systems (cooling towers, hot water systems, spa pools) at temperatures of 20-45 degrees Celsius. Transmission occurs via inhalation of fine aerosols containing Legionella, not by drinking contaminated water. In extended Bradley classification, this is sometimes termed 'water-dispersed' or falls under water-related. Person-to-person transmission does not occur. Control focuses on water system temperature management (hot >60 degrees, cold <20 degrees) and biocide treatment."
  },
  {
    id: 17,
    question: "A vehicle-borne outbreak of hepatitis A is investigated at a restaurant. The vehicle is traced to frozen strawberries imported from a region with poor sanitation. In this chain of transmission, the frozen strawberries represent which epidemiological concept?",
    options: [
      "A reservoir of hepatitis A virus",
      "An intermediate host of hepatitis A virus",
      "A vehicle (inanimate carrier) conveying the pathogen from reservoir to susceptible host",
      "A mechanical vector of hepatitis A virus"
    ],
    answer: 2,
    explanation: "A vehicle is an inanimate intermediary that passively carries an infectious agent from a source/reservoir to a susceptible host. Hepatitis A virus does not multiply or change in the frozen strawberries - they merely transport the virus. Common vehicles include water, food, and blood products. This is distinct from a fomite (which is a contact surface), a vector (which is animate), and a reservoir (where the agent normally lives and multiplies). Frozen produce-associated hepatitis A outbreaks are well-documented due to fecal contamination during harvesting in low-income settings."
  },
  {
    id: 18,
    question: "Regarding fomite transmission of pathogens, which of the following pathogens has been documented to survive on dry environmental surfaces for several WEEKS, making environmental decontamination critical to outbreak control?",
    options: [
      "HIV - survives up to 7 days on dry surfaces",
      "Influenza A - survives up to 72 hours on stainless steel",
      "Norovirus - survives 1-4 weeks on environmental surfaces",
      "Rhinovirus - survives up to 24 hours on hard surfaces"
    ],
    answer: 2,
    explanation: "Norovirus is uniquely resistant to environmental conditions and can survive on surfaces for 1-4 weeks (some studies suggest longer). It is also resistant to many common disinfectants and requires chlorine-based disinfectants (1,000-5,000 ppm) for reliable inactivation. Low infectious dose (10-100 particles) combined with prolonged surface survival makes norovirus the leading cause of foodborne illness outbreaks globally. HIV survives only hours to a few days on surfaces. This persistence profile makes environmental decontamination a cornerstone of norovirus outbreak control in hospitals, cruise ships, and care homes."
  },
  {
    id: 19,
    question: "Population-level airborne infection control in tuberculosis prevention focuses on which hierarchy of controls?",
    options: [
      "Administrative controls > Environmental/engineering controls > Personal respiratory protection (in order of priority)",
      "Personal respiratory protection > Environmental controls > Administrative controls",
      "Chemoprophylaxis > Vaccination > Environmental controls",
      "Quarantine > Environmental controls > Administrative controls"
    ],
    answer: 0,
    explanation: "WHO and CDC TB infection control guidelines establish a hierarchy: Administrative controls (first, most impactful) - policies to reduce exposure, early case detection, patient separation, cough etiquette, triage; Environmental/engineering controls (second) - natural or mechanical ventilation, UV germicidal irradiation, HEPA filtration to reduce airborne droplet nuclei concentration; Personal respiratory protection (third, last resort) - N95 respirators for healthcare workers in high-risk settings. Administrative controls are prioritized because they prevent generation of infectious aerosols at the source rather than simply diluting or removing them."
  },
  {
    id: 20,
    question: "An investigation of a Cryptosporidium outbreak in a city traces the source to a chlorinated municipal swimming pool. This exemplifies which category of water-associated transmission, and why does chlorination fail to prevent Cryptosporidium spread?",
    options: [
      "Waterborne via drinking water; chlorination failure is due to inadequate dosing",
      "Water-based via aquatic intermediate host; the oocysts require a snail host to become infective",
      "Water-related via recreational water; Cryptosporidium oocysts are highly chlorine-resistant and require UV or filtration for removal",
      "Water-washed disease; prevention requires increasing water quantity rather than water quality"
    ],
    answer: 2,
    explanation: "Cryptosporidium is transmitted via the feco-oral route through contaminated water (recreational or drinking water). Cryptosporidium parvum and C. hominis oocysts are extremely resistant to chlorine disinfection at concentrations used in swimming pools and water treatment - this is a defining feature of the pathogen. Effective control requires UV irradiation (which inactivates oocysts) or adequate filtration (oocysts are 4-6 microns in diameter). Recreational water illness from Cryptosporidium is the leading cause of pool-associated outbreaks in the USA."
  },
  {
    id: 21,
    question: "In the context of food poisoning outbreaks, which pairing of pathogen, incubation period, and primary vehicle is INCORRECT?",
    options: [
      "Clostridium perfringens - 8-22 hours incubation - cooked meat/poultry held at warm temperatures",
      "Bacillus cereus diarrheal toxin - 8-16 hours incubation - cooked rice, meat, vegetables",
      "Vibrio parahaemolyticus - 4-96 hours incubation - raw or undercooked seafood",
      "Listeria monocytogenes - 2-4 hours incubation - deli meats, soft cheeses, smoked fish"
    ],
    answer: 3,
    explanation: "Listeria monocytogenes has a highly variable incubation period of 3-70 days (mean 3 weeks for invasive disease), NOT 2-4 hours. This long incubation makes source identification extremely challenging. It causes invasive disease (bacteremia, meningitis, fetal infection) in immunocompromised persons, pregnant women, neonates, and elderly. Other incubation periods are correct: C. perfringens 8-22 hours (heat-resistant spores germinate in reheated food), B. cereus diarrheal 6-15 hours, V. parahaemolyticus 4-96 hours (median 24 hours)."
  },
  {
    id: 22,
    question: "A large apartment building has multiple cases of tuberculosis. The building investigator finds that 8 of 12 cases live on the same floor served by a single ventilation shaft. This distribution of cases suggests:",
    options: [
      "Direct contact transmission between residents sharing the corridor",
      "A common vehicle (contaminated water supply) serving only that floor",
      "Airborne transmission facilitated by the shared ventilation system concentrating and distributing infectious droplet nuclei",
      "Vector-borne transmission with vectors preferring that floor's microenvironment"
    ],
    answer: 2,
    explanation: "Clustering of TB cases along a ventilation shaft is a classic finding in building-associated TB outbreaks. Shared ventilation systems can distribute infectious droplet nuclei (<5 microns) from an index case to multiple rooms or units. TB transmission in buildings has been documented to occur over considerable distances when ventilation is recirculated without adequate filtration. This type of outbreak investigation requires ventilation system assessment, consideration of air pressure differentials, and may require specialized environmental sampling for infection control planning."
  },
  {
    id: 23,
    question: "Mechanical versus biological vector transmission: a housefly (Musca domestica) carries cholera bacilli on its legs from feces to food. Which feature specifically classifies this as 'mechanical' rather than 'biological' transmission?",
    options: [
      "The fly is an insect rather than an arachnid",
      "V. cholerae does not multiply, change developmental form, or complete any part of its life cycle within the fly",
      "The fly can only transmit cholera to humans and not to other animals",
      "Mechanical transmission occurs only during the fly's larval stage"
    ],
    answer: 1,
    explanation: "The defining feature of mechanical transmission is that the arthropod serves as a passive carrier - the pathogen does not multiply, develop, or undergo any part of its life cycle within the vector. The vector simply transports the organism physically on external body surfaces or transiently through the gut. In contrast, biological vectors are essential hosts in which the pathogen undergoes multiplication (propagative), developmental change (cyclodevelopmental), or both (cyclopropagative). Mechanical transmission can also be accomplished by contaminated instruments, hands, or fomites."
  },
  {
    id: 24,
    question: "A public health surveillance team documents cases of leptospirosis following flooding in a low-lying urban area. The epidemiological link between floodwater and human infection best represents which mode of transmission?",
    options: [
      "Airborne transmission via water vapor containing Leptospira",
      "Direct vehicle-borne waterborne transmission via ingestion of floodwater",
      "Indirect contact via floodwater contaminated with Leptospira from rodent urine penetrating intact or abraded skin and mucous membranes",
      "Vector-borne transmission via aquatic arthropods present in floodwater"
    ],
    answer: 2,
    explanation: "Leptospira interrogans is shed in massive quantities in the urine of infected reservoir hosts (rats, cattle, dogs). Floodwater mixed with rodent urine creates a high-risk environment. Transmission to humans occurs primarily through contact with contaminated water or soil, with Leptospira penetrating through skin abrasions, cuts, or intact mucous membranes (eyes, nose, mouth). Ingestion and inhalation are minor routes. This is indirect contact transmission via contaminated water. Flood events create epidemic conditions by mixing contaminated rodent habitat with human living spaces."
  },
  {
    id: 25,
    question: "Wuchereria bancrofti (causing lymphatic filariasis/elephantiasis) is transmitted by Culex quinquefasciatus in urban settings. What type of biological transmission occurs within the Culex mosquito?",
    options: [
      "Propagative - W. bancrofti multiplies without changing form in the mosquito",
      "Cyclopropagative - W. bancrofti both multiplies and changes form in the mosquito",
      "Cyclodevelopmental - microfilariae develop from L1 to infective L3 without multiplication in the mosquito thoracic muscles",
      "Transovarial - W. bancrofti passes through mosquito eggs to the next generation"
    ],
    answer: 2,
    explanation: "Wuchereria bancrofti undergoes cyclodevelopmental transmission in Culex mosquitoes. Ingested microfilariae (L1) develop through L2 to infective L3 larvae within the mosquito's thoracic flight muscles over approximately 10-14 days. This involves change in developmental form WITHOUT multiplication. The L3 larvae migrate to the mouthparts and are deposited on skin during blood feeding. Transovarial transmission does NOT occur. The EIP of approximately 10-14 days means mosquitoes must survive this period before transmitting infection."
  },
  {
    id: 26,
    question: "The sandfly Phlebotomus argentipes is the primary vector of Visceral Leishmaniasis (kala-azar) in South Asia including India. Regarding the extrinsic incubation period (EIP) of Leishmania donovani in the sandfly, which statement is accurate?",
    options: [
      "EIP is approximately 4-25 days; temperature significantly affects the rate of parasite development",
      "EIP is fixed at exactly 7 days regardless of environmental temperature",
      "There is no EIP because Leishmania is transmitted immediately upon the sandfly taking an infected blood meal",
      "EIP refers only to the time Leishmania spends in the sandfly midgut before being destroyed by digestive enzymes"
    ],
    answer: 0,
    explanation: "The extrinsic incubation period for Leishmania in sandflies is approximately 4-25 days depending on ambient temperature, parasite species, and sandfly species. During this period, amastigotes transform to promastigotes in the sandfly midgut, multiply, and develop to infective metacyclic promastigotes that migrate to the proboscis. Temperature critically affects this EIP - warmer temperatures accelerate development. Sandfly lifespan (2-3 weeks) must exceed the EIP for transmission to occur. This temperature-EIP relationship has implications for predicting Leishmaniasis spread with climate change."
  },
  {
    id: 27,
    question: "Which mosquito genus is the principal biological vector of Japanese Encephalitis Virus (JEV), and what type of biological transmission cycle does JEV maintain?",
    options: [
      "Anopheles mosquitoes in a direct transmission cycle between pigs and humans",
      "Culex tritaeniorhynchus in an enzootic cycle between ardeid birds and pigs as amplifying hosts, with humans as dead-end hosts",
      "Aedes aegypti in an urban cycle similar to dengue with humans as the primary amplifying host",
      "Mansonia species in a cycle involving domestic animals as the primary reservoir"
    ],
    answer: 1,
    explanation: "Japanese Encephalitis Virus (JEV) is transmitted primarily by Culex tritaeniorhynchus (and related Culex species) in an enzootic cycle involving ardeid birds (herons, egrets) as the primary reservoir and pigs as amplifying hosts. Pigs develop high-titer viremia sufficient to infect mosquitoes. Humans are incidental dead-end hosts who develop insufficient viremia to infect mosquitoes. This epidemiological pattern explains why JE occurs in agricultural areas where pig farming and rice cultivation (Culex breeding sites) coexist near bird habitats, and why humans do not amplify transmission."
  },
  {
    id: 28,
    question: "Anopheles stephensi differs from Anopheles gambiae in its ecological preference. This distinction has important implications for malaria vector control. Which statement correctly describes their epidemiological difference?",
    options: [
      "An. stephensi is a rural vector while An. gambiae thrives in urban water storage containers",
      "An. gambiae is a highly anthropophilic rural African vector; An. stephensi is an urban vector that breeds in wells and water storage containers, currently invading African cities",
      "Both species have identical vectorial capacity and transmission dynamics",
      "An. stephensi transmits only P. vivax while An. gambiae transmits only P. falciparum"
    ],
    answer: 1,
    explanation: "Anopheles gambiae complex is the dominant malaria vector in sub-Saharan Africa, breeding in temporary rain pools and highly anthropophilic (preferentially biting humans). Anopheles stephensi is the primary urban malaria vector in South Asia and the Middle East, uniquely adapted to breed in wells, cisterns, and man-made water storage containers - making it an efficient urban vector. An. stephensi has recently been detected in African cities (Djibouti 2012, Ethiopia, Nigeria), raising major concerns about urban malaria transmission across Africa where urban populations had previously been at lower risk."
  },
  {
    id: 29,
    question: "The vectorial capacity formula (C = ma^2 p^n / -ln p) is used in malaria transmission modeling. In this equation, which component is most directly influenced by insecticide vector control programs?",
    options: [
      "'a' (daily biting rate on humans) which is fixed by the vector's biology",
      "'p' (daily vector survival probability) which is reduced by insecticides, dramatically affecting the exponential term p^n",
      "'n' (extrinsic incubation period) which increases with insecticide exposure",
      "'m' (vector density per human host) which cannot be influenced by insecticides"
    ],
    answer: 1,
    explanation: "In the vectorial capacity equation, 'p' (daily survival probability of the vector) appears twice in the formula: both as p^n (proportion surviving the EIP) and as 1/(-ln p) (life expectancy). Because n (EIP) is approximately 10-12 days for P. falciparum, p^n means even small reductions in daily survival have enormous exponential impact. For example, reducing p from 0.9 to 0.8 reduces p^12 from 0.28 to 0.07 - a 75% reduction in vectorial capacity. This is why indoor residual spraying (IRS) and insecticide-treated nets, which kill or shorten mosquito lifespan, are so effective at reducing malaria transmission."
  },
  {
    id: 30,
    question: "The Entomological Inoculation Rate (EIR) is a key metric in malaria epidemiology. Which formula correctly defines EIR?",
    options: [
      "EIR = Number of malaria cases / Number of mosquito bites received",
      "EIR = Mosquito biting rate x Sporozoite rate (proportion of mosquitoes with infective sporozoites in salivary glands)",
      "EIR = Vector density / Human population size",
      "EIR = (Number of infectious mosquitoes / Total mosquitoes) x Duration of transmission season"
    ],
    answer: 1,
    explanation: "Entomological Inoculation Rate (EIR) = man-biting rate (ma) x sporozoite rate (proportion of Anopheles with sporozoites in salivary glands, determined by ELISA or PCR). EIR represents the number of infective bites received per person per unit time and is the gold standard measure of malaria transmission intensity. EIR ranges from <1 per year in low-transmission settings to >1,000 per year in holoendemic areas of Africa. EIR is used to classify malaria endemicity, evaluate intervention impact, and predict epidemiological patterns."
  },
  {
    id: 31,
    question: "WHO bioassay methods for insecticide resistance monitoring in vector populations include which standardized test formats?",
    options: [
      "Tube dilution test and agar well diffusion test",
      "Discriminating concentration bioassay (CDC bottle assay) and WHO tube test using insecticide-impregnated papers at discriminating concentrations",
      "Field spray test and greenhouse bioassay only",
      "Passive trap monitoring and CDC light trap collections only"
    ],
    answer: 1,
    explanation: "WHO insecticide resistance monitoring uses two primary bioassay methods: (1) WHO tube test - adult mosquitoes are exposed to insecticide-impregnated papers at discriminating concentrations for defined time periods, and mortality is recorded after 24 hours holding period; (2) CDC bottle assay - mosquitoes are exposed to insecticide-coated bottles at discriminating concentrations for defined periods. A mortality of >98% indicates susceptibility; 90-98% suggests resistance; <90% confirms resistance. These standardized methods allow global comparisons of resistance status and guide insecticide rotation policies."
  },
  {
    id: 32,
    question: "Transovarial transmission has been demonstrated for which of the following vector-borne pathogens, allowing the vector itself to act as a reservoir across generations?",
    options: [
      "Plasmodium falciparum in Anopheles mosquitoes",
      "Dengue virus in Aedes aegypti - transovarial transmission documented in nature",
      "Wuchereria bancrofti in Culex quinquefasciatus",
      "Trypanosoma brucei in Glossina (tsetse fly)"
    ],
    answer: 1,
    explanation: "Transovarial (vertical) transmission has been demonstrated for dengue virus in Aedes aegypti and Aedes albopictus in both laboratory and field conditions. Infected female mosquitoes can pass dengue virus to eggs, with infected larvae, pupae, and adults emerging from uninfected blood sources. While the efficiency is variable (<10% transmission rate to offspring), it allows dengue virus to survive inter-epidemic periods without a human blood meal. This is epidemiologically significant as it complicates the concept of inter-epidemic virus persistence. Plasmodium, filarial worms, and Trypanosoma are NOT transmitted transovarially."
  },
  {
    id: 33,
    question: "Vector surveillance programs for Aedes aegypti use the Breteau Index (BI) as a standard entomological indicator. What does the Breteau Index measure?",
    options: [
      "Number of adult female Aedes per 100 human residents surveyed",
      "Number of positive containers per 100 houses inspected (regardless of number of containers per house)",
      "Percentage of water-holding containers positive for Aedes larvae",
      "Number of Aedes larvae per liter of water sampled from containers"
    ],
    answer: 1,
    explanation: "Breteau Index (BI) = Number of positive containers per 100 houses inspected. It is considered the most informative single larval index because it relates both container infestation and house infestation. Other indices: House Index (HI) = percentage of houses with at least one positive container (0-100%); Container Index (CI) = percentage of water-holding containers infested. WHO recommends BI >5 as threshold for dengue outbreak risk. These indices guide source reduction campaigns and help identify high-risk neighborhoods for targeted vector control."
  },
  {
    id: 34,
    question: "Which of the following correctly describes the epidemiological significance of 'vector competence' in the context of arboviral disease surveillance?",
    options: [
      "Vector competence refers to the geographic range of a vector species and its impact on disease distribution",
      "Vector competence is the intrinsic, genetically-determined ability of a vector to acquire, replicate, disseminate, and transmit a pathogen, independent of environmental factors",
      "Vector competence measures the density of vectors required to sustain epidemic transmission",
      "Vector competence is synonymous with vectorial capacity and both terms are used interchangeably in surveillance"
    ],
    answer: 1,
    explanation: "Vector competence is an intrinsic, species-specific biological property determined by genetics. It encompasses four barriers the pathogen must overcome: midgut infection barrier (initial infection of midgut epithelium), midgut escape barrier (dissemination from midgut to hemolymph), salivary gland infection barrier, and salivary gland escape barrier. A competent vector successfully overcomes all barriers. Vectorial capacity incorporates competence but also includes ecological parameters (biting rate, density, survival). A highly competent vector in a region with low density may have lower vectorial capacity than a less competent but extremely abundant vector."
  },
  {
    id: 35,
    question: "Culex quinquefasciatus is the primary vector of West Nile Virus (WNV) in North America. The transmission cycle of WNV is maintained between mosquitoes and which primary amplifying hosts?",
    options: [
      "Humans and horses (both are amplifying hosts with high viremia)",
      "Wild birds (primarily corvids and passerines) with mosquitoes as the bridge vector to humans and horses",
      "Rodents and domestic animals in a sylvatic cycle",
      "Pigs and cattle in agricultural settings near wetlands"
    ],
    answer: 1,
    explanation: "West Nile Virus maintains an enzootic cycle between Culex mosquitoes and wild birds, particularly corvids (crows, ravens - which experience high mortality) and passerine birds. Infected birds develop high viremia sufficient to infect feeding mosquitoes. Humans and horses are incidental dead-end hosts with insufficient viremia to infect mosquitoes. The die-off of crows (bird surveillance) served as an early warning system for WNV activity in North America. Human cases occur when Culex bridge vectors feed on both birds and humans. This explains why WNV outbreaks are associated with areas of bird die-off."
  },
  {
    id: 36,
    question: "Ixodes scapularis (black-legged tick) transmits Lyme disease (Borrelia burgdorferi) in North America. The tick undergoes three-host lifecycle stages. At which stage is transmission to humans most commonly documented?",
    options: [
      "Adult female tick, because it is the largest and feeds longest",
      "Nymphal stage, because nymphs are small (making detection difficult), feed during spring-summer (peak human outdoor activity), and are frequently infected from larval feeding on infected Peromyscus mice",
      "Larval stage immediately after hatching from eggs",
      "Adult male tick during mating season"
    ],
    answer: 1,
    explanation: "Nymphal Ixodes scapularis ticks are responsible for the majority of human Lyme disease transmission because: (1) nymphs are very small (1-2 mm, poppy seed-sized) and difficult to detect, allowing prolonged attachment without awareness; (2) nymphs are active during spring-summer when human outdoor activity is highest; (3) nymphs became infected as larvae feeding on white-footed mice (Peromyscus leucopus - the primary reservoir) and carry B. burgdorferi at rates of 15-25%. Transmission requires tick attachment for approximately 36-48 hours. Adult ticks are more easily spotted and removed before transmission occurs."
  },
  {
    id: 37,
    question: "The concept of 'cyclodevelopmental transmission' applies to which of the following vector-pathogen pairs?",
    options: [
      "Plasmodium falciparum in Anopheles mosquito (undergoes sporogony with both multiplication and form change)",
      "Yersinia pestis in Xenopsylla cheopis flea (multiplies in proventriculus without form change)",
      "Wuchereria bancrofti microfilariae developing to L3 in Culex mosquito thoracic muscles (form change without multiplication)",
      "Borrelia recurrentis in Pediculus humanus louse (multiplies in hemolymph without form change)"
    ],
    answer: 2,
    explanation: "Cyclodevelopmental transmission involves change in developmental form WITHOUT multiplication: Wuchereria bancrofti microfilariae (L1) develop through L2 to infective L3 in Culex mosquito thoracic muscles - they change form three times without multiplying. Plasmodium undergoes cyclopropagative transmission (both multiplication via sporogony AND form change). Y. pestis in fleas undergoes propagative transmission (multiplication without form change). B. recurrentis in lice also undergoes propagative transmission (multiplies in louse hemolymph without developmental change)."
  },
  {
    id: 38,
    question: "The epidemiological triad model (agent-host-environment) proposes that disease occurs when there is an imbalance among these three components. In the context of the COVID-19 pandemic, which change in the ENVIRONMENT component most dramatically altered transmission dynamics in early 2020?",
    options: [
      "Mutation of SARS-CoV-2 leading to higher transmissibility (agent change)",
      "Waning population immunity from prior coronavirus infections (host change)",
      "Global travel and trade networks enabling rapid geographic spread of SARS-CoV-2 from a single origin to a pandemic (environment change)",
      "Increased human population density in megacities (agent-host interface change)"
    ],
    answer: 2,
    explanation: "The environment in the epidemiological triad encompasses physical, biological, and social environments including transportation networks. The unprecedented global air travel and trade network in 2020 constituted a critical environmental change that enabled SARS-CoV-2 to spread from Wuhan, China to 114 countries within 3 months - the fastest pandemic spread in recorded history. This environmental factor (global connectivity) transformed what might have been a regional epidemic into a pandemic. Social environment factors (high-density indoor settings, healthcare system capacity) also constituted key environmental determinants."
  },
  {
    id: 39,
    question: "Which of the following correctly describes a 'zoonotic reservoir' in disease epidemiology?",
    options: [
      "A reservoir that only infects wild animals and cannot infect humans",
      "Any animal species that maintains the pathogen in nature and from which humans can acquire infection, where the animal host may or may not show disease",
      "Exclusively domestic animals that serve as sources of human infection",
      "Water bodies that harbor zoonotic pathogens as primary reservoirs"
    ],
    answer: 1,
    explanation: "A zoonotic reservoir is an animal host population that maintains the pathogen in nature and from which spillover transmission to humans occurs. The reservoir animal may be asymptomatic (e.g., bats for Ebola, rabies), may show subclinical infection (e.g., rodents for Lassa fever), or may show disease (e.g., birds for some avian influenza strains). Reservoirs are distinguished from amplifying hosts (which increase pathogen prevalence) and dead-end hosts (which cannot transmit further). Identifying the animal reservoir is critical for zoonotic disease control strategies."
  },
  {
    id: 40,
    question: "In the chain of infection, the portal of exit for Mycobacterium tuberculosis is primarily the respiratory tract. However, M. tuberculosis can exit via other portals in extrapulmonary TB. Which portal of exit is relevant in renal tuberculosis and poses a transmission risk via which route?",
    options: [
      "Skin (cutaneous TB lesions) transmitting via direct skin contact",
      "Urinary tract (kidneys shedding M. tuberculosis in urine) transmitting via contaminated water in endemic areas",
      "Gastrointestinal tract (intestinal TB) transmitting via feco-oral route in communities with poor sanitation",
      "Lymph nodes (cervical TB/scrofula) transmitting via droplets from ulcerating lymph nodes"
    ],
    answer: 1,
    explanation: "In renal tuberculosis, M. tuberculosis infects the kidney and is shed in urine (renal bacilluria). Historically, this was relevant when unpasteurized milk from cattle with bovine tuberculosis caused intestinal TB in humans, and when cattle drank water contaminated with human urine containing M. tuberculosis. Urinary TB shedding can theoretically contaminate water sources in low-sanitation settings. While respiratory transmission accounts for >95% of M. tuberculosis transmission, understanding all portals of exit is important for comprehensive chain-of-infection analysis."
  },
  {
    id: 41,
    question: "The incubation period of a communicable disease has important public health applications. Which statement about incubation periods and their epidemiological use is CORRECT?",
    options: [
      "The minimum incubation period is used to determine the maximum quarantine period needed to detect all cases",
      "The maximum incubation period defines the outer limit of the exposure window when tracing cases back from symptom onset to identify a common source",
      "The mean incubation period is irrelevant to public health practice; only the serial interval matters",
      "Incubation periods are identical for the same disease across all age groups and immune states"
    ],
    answer: 1,
    explanation: "The maximum incubation period determines the quarantine period - individuals exposed to a pathogen are quarantined for the maximum incubation period to detect all possible cases before community release. For COVID-19 (max incubation ~14 days), 14-day quarantine was recommended. The maximum incubation period also defines the backward exposure window for outbreak investigation - when a case is identified, the exposure must have occurred within the maximum incubation period before symptom onset. Incubation periods may vary with age, inoculum size, and immune status."
  },
  {
    id: 42,
    question: "In a school outbreak of mumps, the epidemic curve shows a single peak followed by a secondary peak approximately 18 days later. The incubation period of mumps is 12-25 days (mean 18 days). This pattern suggests:",
    options: [
      "A point source exposure with a very wide range of individual incubation periods",
      "A two-wave propagated epidemic with person-to-person spread generating a second generation of cases approximately one incubation period after the first wave",
      "Reinfection of immune individuals with a mutant mumps strain",
      "Laboratory reporting delays causing artificial bimodal distribution"
    ],
    answer: 1,
    explanation: "A propagated (progressive source) epidemic curve shows successive peaks, each approximately one mean incubation period apart from the previous peak. The first peak represents primary cases (exposed to the original source or index case), and the second peak approximately 18 days later represents secondary cases infected by the first-wave cases. This person-to-person spread pattern is characteristic of highly contagious diseases with person-to-person transmission. This pattern is distinct from a point source epidemic (single peak) or continuous source (plateau). Each wave may be smaller if control measures are implemented."
  },
  {
    id: 43,
    question: "The generation time distribution of SARS-CoV-2 (mean approximately 5-6 days) combined with its serial interval (mean approximately 4-5 days) led to what important epidemiological conclusion about COVID-19 transmission?",
    options: [
      "COVID-19 cannot spread before symptom onset since serial interval equals generation time",
      "The shorter serial interval compared to generation time mathematically implies that substantial pre-symptomatic transmission occurs, since secondary cases develop symptoms before expected if infection only occurred at or after symptom onset",
      "Both measures indicate that COVID-19 spreads exclusively through symptomatic individuals",
      "The similar values of serial interval and generation time confirm that post-symptomatic transmission dominates"
    ],
    answer: 1,
    explanation: "When the serial interval is shorter than the generation time, this mathematically implies that some transmission occurs before symptom onset in the source (pre-symptomatic transmission). Studies estimated that 40-60% of SARS-CoV-2 transmission occurred pre-symptomatically. This had profound public health implications: symptom-based isolation alone (isolating only symptomatic individuals) would miss pre-symptomatic transmission, necessitating contact tracing, testing, and quarantine of exposed contacts even before they develop symptoms. This pre-symptomatic transmission window was a key driver of the COVID-19 pandemic."
  },
  {
    id: 44,
    question: "The basic reproduction number (R0) of seasonal influenza is approximately 1.2-1.4. How does this compare to measles (R0 = 12-18) in terms of herd immunity requirements and implications for vaccination programs?",
    options: [
      "Influenza requires higher vaccination coverage than measles because influenza mutates rapidly",
      "Influenza requires only approximately 20% population immunity for herd protection (HIT = 1-1/1.3 = 23%), compared to approximately 94% for measles, explaining why even modest vaccination coverage can meaningfully reduce influenza burden",
      "Both diseases require 95% population immunity for herd protection regardless of R0",
      "R0 does not influence the herd immunity threshold; only vaccine efficacy determines the required coverage"
    ],
    answer: 1,
    explanation: "Herd immunity threshold (HIT) = 1 - (1/R0). For influenza with R0 = 1.3: HIT = 1 - (1/1.3) = 1 - 0.77 = 0.23 = 23%. For measles R0 = 15: HIT = 1 - (1/15) = 93%. This means influenza programs can meaningfully reduce transmission at much lower vaccination coverage levels, while measles demands near-universal coverage. Additionally, for influenza, natural immunity from infection contributes substantially to seasonal population immunity, explaining why epidemic waves naturally decline. The low R0 of influenza also means that interventions with modest effectiveness can have disproportionate epidemic impact."
  },
  {
    id: 45,
    question: "A village of 500 people experiences a gastroenteritis outbreak. 200 people attended a wedding feast. Of the 200 attendees, 80 developed illness within 24 hours. Of the 300 non-attendees, 24 became ill. What is the relative risk of illness from wedding attendance?",
    options: ["2.5", "3.0", "5.0", "8.0"],
    answer: 2,
    explanation: "Attack rate among attendees (exposed) = 80/200 = 40% (0.40). Attack rate among non-attendees (unexposed) = 24/300 = 8% (0.08). Relative Risk (RR) = Attack rate exposed / Attack rate unexposed = 0.40 / 0.08 = 5.0. This means wedding attendees were 5 times more likely to develop gastroenteritis than non-attendees, strongly implicating the wedding feast as the source of the outbreak."
  },
  {
    id: 46,
    question: "During the COVID-19 pandemic, the effective reproduction number (Rt) dropped below 1.0 in several countries following implementation of lockdown measures. What does Rt = 0.7 specifically indicate about epidemic dynamics?",
    options: [
      "70% of the population has been infected and the epidemic is near its natural end",
      "Each infectious individual generates on average 0.7 secondary cases, meaning the epidemic is declining and will eventually die out unless Rt rises above 1.0",
      "Interventions have reduced transmission efficiency by 70% compared to baseline",
      "The fatality rate has decreased to 0.7% indicating the epidemic is controlled"
    ],
    answer: 1,
    explanation: "When Rt <1, each case generates on average fewer than one secondary case, so the chain of transmission gradually dies out. At Rt = 0.7, each 100 cases lead to 70 secondary cases in the next generation, then 49, then 34, etc. - a geometric decline. The epidemic is shrinking but does not end immediately. If Rt rises above 1.0 again (e.g., due to lifting restrictions, waning immunity, or new variant), epidemic growth resumes. Real-time Rt monitoring was a critical dashboard metric for governments assessing the effectiveness of non-pharmaceutical interventions during COVID-19."
  },
  {
    id: 47,
    question: "A susceptible community has an R0 of 3.0 for measles (simplified example). Currently, 50% of the population is immune through vaccination. What is the effective reproduction number (Rt) and what does it indicate?",
    options: [
      "Rt = 3.0; vaccination has no effect on transmission",
      "Rt = 1.5; the epidemic is growing since Rt >1, indicating insufficient vaccine coverage to prevent transmission",
      "Rt = 0.5; the epidemic is declining since Rt <1, indicating sufficient herd immunity",
      "Rt = 2.0; the epidemic is growing slowly"
    ],
    answer: 1,
    explanation: "Rt = R0 x (proportion susceptible) = R0 x (1 - proportion immune) = 3.0 x (1 - 0.5) = 3.0 x 0.5 = 1.5. Since Rt = 1.5 >1, the epidemic is still growing, though more slowly than in a fully susceptible population (where Rt = R0 = 3.0). To stop transmission, the herd immunity threshold must be reached: HIT = 1 - (1/R0) = 1 - (1/3) = 67%. With only 50% immune, the community has not reached the threshold and sustained transmission will continue. An additional 17% of the population needs to be immunized to achieve herd protection."
  },
  {
    id: 48,
    question: "In the SIR (Susceptible-Infected-Recovered) mathematical model of infectious disease transmission, the epidemic threshold theory states that an epidemic can occur only when which condition is met?",
    options: [
      "The number of infected individuals exceeds 1% of the total population",
      "The density of susceptible individuals (S) exceeds the epidemic threshold N/R0, where N is total population and R0 is the basic reproduction number",
      "The recovered population exceeds the susceptible population in size",
      "The pathogen mutation rate exceeds the immune response clearance rate"
    ],
    answer: 1,
    explanation: "In epidemic threshold theory derived from the SIR model, an epidemic can only be initiated and sustained when S > N/R0, i.e., when the number of susceptibles exceeds a threshold determined by total population and R0. Equivalently, the fraction susceptible must exceed 1/R0. When vaccination reduces susceptibles below this threshold, herd immunity is achieved and introduction of a case will not cause a sustained epidemic. This is the mathematical basis for the herd immunity threshold (HIT = 1 - 1/R0). At the threshold, Rt = R0 x (S/N) = R0 x (1/R0) = 1, the tipping point between growth and decline."
  },
  {
    id: 49,
    question: "A researcher studies the chain of infection for Ebola Virus Disease (EVD). In terms of reservoir, portal of exit, mode of transmission, portal of entry, and susceptible host - which element in the chain of infection is the most effective point for breaking EVD transmission at the population level?",
    options: [
      "Eliminating the reservoir (fruit bats) through culling programs",
      "Mode of transmission interruption through safe burial practices, contact tracing with isolation, and strict PPE use - since EVD spreads via direct contact with body fluids of symptomatic cases",
      "Increasing host resistance through mass immunization of entire populations in affected regions",
      "Blocking all portals of entry by applying topical antiseptics to all community members"
    ],
    answer: 1,
    explanation: "Ebola transmission occurs via direct contact with blood or body fluids of symptomatic EVD patients (and corpses, which are highly infectious). The most effective and feasible intervention point in the chain is at the mode of transmission: (1) safe and dignified burials prevent transmission from infectious corpses at funerals; (2) contact tracing with isolation of cases breaks person-to-person chains; (3) strict PPE use in healthcare settings prevents nosocomial amplification. Culling fruit bats is not feasible, effective, or humane. Vaccines (rVSV-ZEBOV) are now available but ring vaccination (targeting contacts) rather than mass vaccination is the strategy used."
  },
  {
    id: 50,
    question: "In basic compartmental epidemiological models (SIR/SEIR), what does the addition of an 'E' (Exposed) compartment in the SEIR model specifically account for that the simpler SIR model does not?",
    options: [
      "The E compartment accounts for environmental contamination as a source of infection",
      "The E compartment represents individuals who have been infected but are in the latent (incubation) period - infected but not yet infectious - which introduces a time delay between infection and the ability to transmit, critically affecting the modeled epidemic curve shape and timing",
      "The E compartment tracks individuals who are exposed to the pathogen but have innate immunity and will not develop infection",
      "The E compartment models the effect of vaccination on reducing susceptibility before exposure"
    ],
    answer: 1,
    explanation: "In the SEIR model, the 'E' (Exposed) compartment represents individuals who have been infected but are in the incubation/latent period and are NOT YET infectious. This biologically corresponds to the time from infection to onset of infectiousness. Adding this compartment introduces a time delay (corresponding to the latent period) that smooths and delays the epidemic peak compared to the SIR model. The rate of moving from E to I (infected-infectious) is 1/latent period. SEIR models better replicate real epidemic dynamics for diseases with significant incubation periods (COVID-19, measles, influenza). For diseases with very short latent periods, the simpler SIR approximation may suffice."
  }
];

export default questions;

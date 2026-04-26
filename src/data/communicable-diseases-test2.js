const questions = [
  {
    id: 1,
    question: "A healthcare worker sustains a needle-stick injury from a patient known to be HBeAg-positive. Without post-exposure prophylaxis, what is the approximate risk of acquiring Hepatitis B infection?",
    options: ["1-2%", "6-30%", "0.1-0.3%", "40-60%"],
    answer: 1,
    explanation: "The risk of acquiring Hepatitis B following a needle-stick injury from an HBeAg-positive source is approximately 6-30%. This is significantly higher than HIV (0.3%) or Hepatitis C (1.8%). HBeAg positivity indicates active viral replication and high infectivity."
  },
  {
    id: 2,
    question: "A pregnant woman is diagnosed with primary syphilis at 32 weeks of gestation. Which statement best describes the risk of congenital syphilis in this scenario?",
    options: [
      "Risk is negligible as Treponema pallidum cannot cross the placenta before 36 weeks",
      "Transplacental transmission can occur at any gestational age, with highest risk during primary and secondary syphilis",
      "Transmission only occurs during delivery through contact with genital lesions",
      "Risk is approximately 5% regardless of the stage of maternal syphilis"
    ],
    answer: 1,
    explanation: "Treponema pallidum can cross the placenta at any gestational age. The risk of fetal infection is highest during primary (70-100%) and secondary syphilis (67%) when maternal spirochetemia is greatest. Without treatment, primary syphilis at 32 weeks carries an extremely high risk of congenital syphilis."
  },
  {
    id: 3,
    question: "In a school, 5 children develop streptococcal pharyngitis within 24 hours of attending the same classroom. The teacher had a sore throat the previous week. This pattern of spread is best characterized as:",
    options: [
      "Common source outbreak with continuous exposure",
      "Person-to-person spread via large respiratory droplets",
      "Airborne transmission via droplet nuclei",
      "Vehicle-borne transmission via contaminated water"
    ],
    answer: 1,
    explanation: "Streptococcus pyogenes (Group A Strep) spreads primarily via large respiratory droplets (>5 microns) during close contact. The clustering of cases in a classroom within 24 hours following exposure to an infectious teacher is classic person-to-person direct droplet transmission. Airborne (droplet nuclei) transmission plays a minimal role in streptococcal pharyngitis."
  },
  {
    id: 4,
    question: "A woman with HIV is pregnant. Without any antiretroviral intervention, what proportion of mother-to-child HIV transmission occurs during the intrapartum period?",
    options: ["5-10%", "15-20%", "50-75%", "85-90%"],
    answer: 2,
    explanation: "Without antiretroviral intervention, approximately 50-75% of mother-to-child HIV transmission occurs during labor and delivery (intrapartum). Antepartum (in utero) transmission accounts for 25-40%, and postnatal transmission via breastfeeding accounts for 14-22%. This distribution justifies the importance of intrapartum antiretroviral prophylaxis."
  },
  {
    id: 5,
    question: "A patient presents with bloody diarrhea after consuming undercooked beef. Stool culture grows E. coli O157:H7. The primary mode of transmission for this pathogen from cattle to humans is:",
    options: [
      "Feco-oral route via contaminated food or water",
      "Direct contact with cattle hide",
      "Inhalation of aerosolized cattle feces",
      "Vector-borne transmission via flies"
    ],
    answer: 0,
    explanation: "E. coli O157:H7 (STEC) is transmitted primarily via the feco-oral route through consumption of contaminated food (especially undercooked ground beef), unpasteurized milk/juice, contaminated water, and person-to-person contact. Cattle are the primary reservoir. The organism is present in cattle feces and contaminates meat during slaughter."
  },
  {
    id: 6,
    question: "Which of the following sexually transmitted infections has the highest probability of transmission per unprotected sexual act from an infected to an uninfected partner?",
    options: ["HIV", "Gonorrhea", "Syphilis", "Herpes Simplex Virus-2"],
    answer: 1,
    explanation: "Gonorrhea has one of the highest per-act transmission probabilities among STIs - approximately 50-70% per act from male to female and 20-30% from female to male. HIV per-act transmission is approximately 0.04-0.08% for receptive vaginal sex. Syphilis is approximately 10-30% per act, and HSV-2 is approximately 1-10% per act depending on lesion status."
  },
  {
    id: 7,
    question: "A neonate born to a hepatitis B surface antigen (HBsAg) positive mother develops HBV infection despite receiving hepatitis B immunoglobulin and vaccine at birth. The most likely timing of transmission was:",
    options: [
      "First trimester via transplacental route",
      "During labor and delivery (intrapartum)",
      "Postnatally via breast milk",
      "Second trimester via amniotic fluid"
    ],
    answer: 1,
    explanation: "The majority (approximately 95%) of perinatal hepatitis B transmission occurs during labor and delivery (intrapartum). When HBIG and vaccine are given within 12 hours of birth, they are highly effective (85-95% protective) but may fail in cases of in utero infection or very high maternal viral load. The intrapartum period is the primary window of vulnerability."
  },
  {
    id: 8,
    question: "A family cluster of typhoid fever is traced to a single food handler with chronic asymptomatic Salmonella Typhi carriage. The gallbladder acts as a reservoir in this case. This transmission scenario best illustrates:",
    options: [
      "Common source, point source outbreak",
      "Zoonotic transmission with animal reservoir",
      "Human reservoir with indirect feco-oral route transmission",
      "Vector-borne transmission with biological vector"
    ],
    answer: 2,
    explanation: "Typhoid fever is exclusively a human disease (no animal reservoir). The chronic carrier serves as a human reservoir, shedding S. Typhi in stool/urine. Transmission occurs indirectly via the feco-oral route through contaminated food prepared by the carrier. The gallbladder (and occasionally urinary tract) harbors chronic carriage."
  },
  {
    id: 9,
    question: "A farmer develops cutaneous anthrax after handling wool from imported sheep. This mode of transmission is best classified as:",
    options: [
      "Indirect vehicle-borne transmission via fomite",
      "Direct zoonotic contact transmission",
      "Vector-borne biological transmission",
      "Airborne droplet nuclei transmission"
    ],
    answer: 1,
    explanation: "Cutaneous anthrax from handling infected animal products (wool, hide, hair) represents direct zoonotic contact transmission. Bacillus anthracis spores enter through skin abrasions or cuts during direct handling of infected animals or their products. This is distinct from indirect vehicle transmission, though the wool could also be considered a vehicle."
  },
  {
    id: 10,
    question: "In a blood transfusion recipient, which of the following transfusion-transmitted infections has the longest window period that most significantly challenges blood bank screening?",
    options: ["HIV", "Hepatitis B virus", "Hepatitis C virus", "Treponema pallidum"],
    answer: 1,
    explanation: "Hepatitis B has the longest window period of approximately 38-45 days even with 4th generation combination antigen/antibody assays, or up to 59 days with HBsAg-only testing. HBV DNA can be undetectable during the early window period. NAT testing reduces HIV window to ~9 days and HCV to ~7 days. HBV NAT window period remains ~20 days."
  },
  {
    id: 11,
    question: "A child develops chickenpox 14 days after close contact with a case of herpes zoster in their grandfather. The route of transmission most likely responsible is:",
    options: [
      "Direct contact with vesicular fluid from zoster lesions",
      "Airborne transmission via droplet nuclei from zoster patient",
      "Feco-oral route via contaminated surfaces",
      "Vector-borne transmission via infected arthropods"
    ],
    answer: 0,
    explanation: "Varicella-zoster virus (VZV) can be transmitted from a herpes zoster patient to a susceptible individual (causing chickenpox, not zoster) primarily via direct contact with vesicular fluid. Airborne transmission from zoster is less efficient than from chickenpox. Disseminated zoster can transmit via airborne route, but localized zoster primarily spreads via direct contact with lesion fluid."
  },
  {
    id: 12,
    question: "Which statement most accurately describes the vertical transmission dynamics of Treponema pallidum compared to HIV?",
    options: [
      "Both pathogens have identical transmission rates across all trimesters",
      "Syphilis transmission risk is highest in early pregnancy while HIV risk is highest at delivery",
      "HIV transmission risk is highest in the first trimester while syphilis risk is highest at delivery",
      "Both pathogens are primarily transmitted postnatally via breast milk"
    ],
    answer: 1,
    explanation: "Treponema pallidum can cause fetal infection in any trimester but the risk of adverse fetal outcomes is highest when maternal infection occurs early in pregnancy due to prolonged fetal exposure. HIV transmission risk is primarily intrapartum (50-75%) during labor and delivery. Syphilis transmits transplacentally throughout pregnancy with high efficiency during maternal spirochetemia."
  },
  {
    id: 13,
    question: "Mycobacterium tuberculosis is primarily transmitted via airborne droplet nuclei (<5 microns). Which physical property of droplet nuclei allows them to remain suspended in air for prolonged periods?",
    options: [
      "High lipid content of the mycobacterial cell wall",
      "Small particle size resulting in negligible settling velocity under Stoke's law",
      "Active motility of the organism",
      "Attachment to mucus particles with neutral buoyancy"
    ],
    answer: 1,
    explanation: "Droplet nuclei are particles <5 microns (typically 1-5 microns) produced by evaporation of larger respiratory droplets. Their extremely small size means settling velocity under Stoke's law is negligible, allowing them to remain suspended in air currents for hours. M. tuberculosis survives within these particles due to its resistant cell wall, enabling airborne transmission over long distances."
  },
  {
    id: 14,
    question: "An outbreak of Legionellosis occurs among hotel guests who never had close contact with each other but all used the hotel's whirlpool spa. The mode of transmission here is best described as:",
    options: [
      "Person-to-person droplet transmission",
      "Water-borne transmission via ingestion of contaminated water",
      "Airborne transmission via aerosols generated from water source (water-related disease)",
      "Fomite transmission via contaminated spa surfaces"
    ],
    answer: 2,
    explanation: "Legionellosis is transmitted via inhalation of aerosols from environmental water sources (cooling towers, whirlpool spas, showers). This falls under 'water-related' transmission in the Bradley classification - disease is water-related because the organism amplifies in water systems and is transmitted via water aerosols, NOT via drinking water. Person-to-person transmission does not occur."
  },
  {
    id: 15,
    question: "In the Bradley classification of water-associated diseases, cholera would be classified as a 'waterborne' disease. Which of the following diseases is correctly classified as 'water-washed'?",
    options: [
      "Schistosomiasis",
      "Typhoid fever",
      "Trachoma",
      "Legionellosis"
    ],
    answer: 2,
    explanation: "In Bradley's classification: Waterborne = transmitted via ingested contaminated water (cholera, typhoid). Water-washed (water-scarce) = diseases reduced by increased water quantity for hygiene (trachoma, scabies, lice). Water-based = organism has aquatic intermediate host (schistosomiasis, guinea worm). Water-related = insect vectors breed in water (malaria, dengue). Legionellosis is water-related (aerosol-borne)."
  },
  {
    id: 16,
    question: "A community experiences outbreaks of both influenza and measles simultaneously. Which statement correctly distinguishes the airborne transmission characteristics of these two viruses?",
    options: [
      "Both spread exclusively via large droplets; neither is truly airborne",
      "Influenza spreads primarily via large droplets while measles is highly airborne via droplet nuclei",
      "Measles spreads primarily via large droplets while influenza is airborne",
      "Both are equally airborne with identical transmission distances"
    ],
    answer: 1,
    explanation: "Measles virus is one of the most efficiently airborne pathogens - it can remain infectious in air for up to 2 hours after an infected person has left a room and can travel through ventilation systems (R0 = 12-18). Influenza transmission involves primarily large droplets (though short-range aerosol transmission occurs), with much lower airborne efficiency. Measles vaccine-preventable outbreaks frequently involve secondary cases who were never in the same room as the index case."
  },
  {
    id: 17,
    question: "A nurse develops Staphylococcus aureus wound infection after using a blood pressure cuff that was previously used on an infected patient without proper disinfection. This represents transmission via:",
    options: [
      "Droplet transmission from respiratory secretions",
      "Fomite transmission (indirect contact via contaminated inanimate object)",
      "Airborne transmission via droplet nuclei",
      "Vehicle-borne transmission via contaminated water"
    ],
    answer: 1,
    explanation: "A fomite is any inanimate object that can harbor and transmit infectious agents. The blood pressure cuff serves as a fomite in this scenario. S. aureus can survive on surfaces for weeks to months. This is indirect contact transmission via fomite, distinct from direct contact (person-to-person), vehicle-borne (food/water), or airborne routes."
  },
  {
    id: 18,
    question: "Regarding fomite survival times, which pathogen can survive on dry surfaces for the LONGEST period?",
    options: [
      "Influenza A virus (up to 24 hours)",
      "HIV (up to 7 days)",
      "Clostridium difficile spores (up to 5 months)",
      "Norovirus (up to 2 weeks)"
    ],
    answer: 2,
    explanation: "Clostridium difficile spores can survive on surfaces for up to 5 months, making environmental contamination a major transmission route in healthcare settings. HIV survives only hours to days on surfaces. Influenza A survives up to 24 hours on hard surfaces. Norovirus can persist 1-4 weeks. C. difficile spores' extreme environmental persistence explains the need for sporicidal disinfectants (bleach) and the difficulty of controlling healthcare-associated outbreaks."
  },
  {
    id: 19,
    question: "During a food-borne outbreak investigation, 40 of 100 people who ate potato salad at a picnic developed gastroenteritis within 2-4 hours. The pathogen most consistent with this incubation period and vehicle is:",
    options: [
      "Salmonella typhi",
      "Staphylococcus aureus enterotoxin",
      "Campylobacter jejuni",
      "Hepatitis A virus"
    ],
    answer: 1,
    explanation: "Staphylococcal food poisoning (preformed enterotoxin) has the shortest incubation period of 1-6 hours (mean 2-4 hours), caused by preformed heat-stable toxin in food. Salmonella non-typhoidal: 6-48 hours. Campylobacter: 2-5 days. Hepatitis A: 15-50 days. Potato salad (mayonnaise-based, temperature-abused) is a classic vehicle for S. aureus enterotoxin."
  },
  {
    id: 20,
    question: "In an outbreak of typhoid fever traced to a contaminated municipal water supply, the epidemic curve shows a sharp rise and fall in cases clustered within the incubation period range of typhoid. This pattern is most consistent with:",
    options: [
      "Propagated (progressive source) epidemic",
      "Point source epidemic with single exposure",
      "Continuous common source epidemic",
      "Mixed epidemic pattern"
    ],
    answer: 1,
    explanation: "A sharp rise and fall in cases with clustering within one incubation period of a single contamination event represents a point source epidemic. In contrast, continuous common source shows a plateau while cases persist. Propagated epidemics show multiple waves each approximately one incubation period apart. Waterborne outbreaks can be point source (single event) or continuous (ongoing contamination)."
  },
  {
    id: 21,
    question: "Schistosomiasis is classified as a 'water-based' disease in Bradley's classification. What does this designation specifically mean?",
    options: [
      "The pathogen is transmitted via contaminated drinking water",
      "An obligate part of the pathogen's life cycle occurs in an aquatic environment",
      "The disease can be prevented by improving water supply quantity alone",
      "Vectors that transmit the disease breed in water"
    ],
    answer: 1,
    explanation: "Water-based diseases in Bradley's classification are those where an obligate part of the pathogen's life cycle occurs in water or in an aquatic organism. For Schistosoma, miracidia must infect freshwater snails (Bulinus/Biomphalaria species) and cercariae emerge from snails into water to penetrate human skin. The aquatic snail is an obligatory intermediate host. This differs from water-related (vectors breed in water) or waterborne (ingestion-transmitted)."
  },
  {
    id: 22,
    question: "A hospital reports multiple cases of Aspergillus fumigatus infection in immunocompromised patients during a period of hospital construction. The mode of transmission implicated is:",
    options: [
      "Person-to-person droplet transmission from infected patients",
      "Airborne transmission via aerosolized fungal conidia from disturbed soil/materials",
      "Vehicle-borne transmission via contaminated intravenous fluids",
      "Fomite transmission via contaminated medical equipment"
    ],
    answer: 1,
    explanation: "Aspergillus fumigatus is ubiquitous in the environment, producing small airborne conidia (2-3 microns) that can remain airborne for extended periods. Hospital construction disturbs soil and building materials releasing conidia, dramatically increasing airborne concentrations. Immunocompromised patients (neutropenic, transplant recipients) are at high risk for invasive aspergillosis via inhalation. HEPA filtration and positive pressure rooms are protective measures."
  },
  {
    id: 23,
    question: "Which of the following correctly distinguishes droplet transmission from airborne (droplet nuclei) transmission?",
    options: [
      "Droplet transmission requires close contact (<1 meter) while airborne transmission can occur at longer distances and without direct contact",
      "Droplets are smaller than droplet nuclei and thus travel further",
      "Airborne transmission only occurs for pathogens with lipid envelopes",
      "There is no clinically meaningful distinction between the two modes"
    ],
    answer: 0,
    explanation: "The key distinction: Large respiratory droplets (>5-10 microns) settle quickly by gravity within approximately 1 meter and require close contact for transmission. Droplet nuclei (<5 microns) are the residues of evaporated droplets that remain suspended in air, can travel >1 meter, persist for hours, and may spread through ventilation systems. This distinction drives different infection control precautions (droplet vs. airborne precautions)."
  },
  {
    id: 24,
    question: "Guinea worm disease (dracunculiasis) is classified as a water-based disease. The infective stage that humans encounter is:",
    options: [
      "Cercariae that penetrate intact skin during water contact",
      "Cyclops (copepod) containing L3 larvae ingested via drinking contaminated water",
      "Infective eggs present on contaminated vegetables",
      "L3 larvae that penetrate skin from contaminated soil"
    ],
    answer: 1,
    explanation: "Dracunculus medinensis transmission: infected person releases larvae into water (L1) -> Cyclops (water flea/copepod) ingests larvae which develop to L3 -> humans drink contaminated water containing infected Cyclops -> Cyclops digested, L3 larvae penetrate intestinal wall, mature into adults over 10-14 months. This is why filtering drinking water through cloth (to remove Cyclops) is the primary prevention strategy."
  },
  {
    id: 25,
    question: "Malaria transmission by Anopheles mosquitoes is classified as cyclopropagative transmission. What specifically distinguishes this from cyclodevelopmental transmission?",
    options: [
      "Cyclopropagative involves pathogen multiplication without change in form; cyclodevelopmental involves change in form without multiplication",
      "Cyclopropagative involves both multiplication AND change in form; cyclodevelopmental involves change in form WITHOUT multiplication",
      "They are synonymous terms used interchangeably",
      "Cyclopropagative occurs in the vector's gut; cyclodevelopmental occurs in the vector's salivary glands"
    ],
    answer: 1,
    explanation: "In vector-borne biological transmission: Cyclopropagative = pathogen undergoes BOTH multiplication AND change in form within the vector (e.g., malaria Plasmodium - undergoes sporogony in Anopheles mosquito). Cyclodevelopmental = pathogen undergoes change in form WITHOUT multiplication (e.g., microfilariae developing to infective L3 in mosquitoes). Propagative = multiplication without change in form (e.g., plague bacilli in fleas)."
  },
  {
    id: 26,
    question: "The tsetse fly (Glossina species) transmits African trypanosomiasis. This is an example of which type of biological transmission?",
    options: [
      "Propagative transmission - Trypanosoma multiplies without changing form",
      "Cyclodevelopmental transmission - Trypanosoma changes form without multiplication",
      "Cyclopropagative transmission - Trypanosoma both multiplies and changes form",
      "Transovarial transmission - Trypanosoma passes through fly eggs to offspring"
    ],
    answer: 2,
    explanation: "Trypanosoma brucei undergoes cyclopropagative transmission in the tsetse fly. In the fly's midgut, trypanosomes transform from bloodstream forms to procyclic forms (change in form), multiply extensively, then migrate to salivary glands transforming into metacyclic trypomastigotes (the infective form). Both multiplication and developmental change occur. This is distinct from transovarial transmission (e.g., some tick-borne infections passed through eggs)."
  },
  {
    id: 27,
    question: "Onchocerciasis (river blindness) is transmitted by Simulium (blackfly) species that breed in fast-flowing rivers. The extrinsic incubation period (EIP) for Onchocerca volvulus in the blackfly is approximately:",
    options: ["2-4 days", "6-8 days", "7-14 days", "20-30 days"],
    answer: 2,
    explanation: "The extrinsic incubation period (EIP) for Onchocerca volvulus in Simulium blackflies is approximately 7-14 days, during which microfilariae undergo development to the infective L3 stage. The EIP is the time from when a vector ingests an infectious blood meal until it can transmit the pathogen. Blackflies breed specifically in fast-flowing, well-oxygenated rivers, hence the geographic clustering of disease near rivers ('river blindness')."
  },
  {
    id: 28,
    question: "A patient from a rural area develops visceral leishmaniasis (kala-azar). The vector responsible for transmission is:",
    options: [
      "Anopheles mosquito - cyclodevelopmental transmission",
      "Phlebotomus sandfly - cyclodevelopmental transmission of promastigotes to amastigotes",
      "Culex mosquito - propagative transmission",
      "Ixodes tick - transovarial transmission"
    ],
    answer: 1,
    explanation: "Visceral leishmaniasis is transmitted by Phlebotomus sandfly (in Old World; Lutzomyia in New World). In the sandfly, Leishmania exists as promastigotes (flagellated, extracellular). When transmitted to humans via sandfly bite, they transform to amastigotes (non-flagellated, intracellular in macrophages) - this change in form without multiplication in the vector makes it cyclodevelopmental transmission. The sandfly requires blood from infected host to acquire infection."
  },
  {
    id: 29,
    question: "Dengue fever is transmitted by Aedes aegypti. Which feature of Aedes aegypti makes it a particularly efficient urban vector?",
    options: [
      "It breeds exclusively in clean natural water bodies like rivers and lakes",
      "It is primarily a nocturnal biter, allowing extensive nighttime transmission",
      "It breeds in small artificial water containers, bites during the day, and has adapted to urban environments",
      "It undergoes transovarial transmission, maintaining dengue virus across generations"
    ],
    answer: 2,
    explanation: "Aedes aegypti is the quintessential urban vector because: (1) breeds in small man-made containers (flower pots, discarded tires, water storage vessels), (2) is a daytime feeder (peak biting at dawn and dusk), (3) has adapted to live in close proximity to humans (anthropophilic), (4) takes multiple blood meals from different hosts, amplifying transmission. While transovarial dengue transmission by Aedes has been demonstrated, it is not the primary epidemiological driver."
  },
  {
    id: 30,
    question: "A mechanical vector differs from a biological vector in which fundamental way?",
    options: [
      "Mechanical vectors are always arthropods while biological vectors include vertebrate animals",
      "In mechanical transmission, the pathogen does not multiply or undergo developmental changes in the vector",
      "Mechanical vectors always transmit pathogens transovarially",
      "Biological vectors transmit only viruses while mechanical vectors transmit only bacteria"
    ],
    answer: 1,
    explanation: "A mechanical vector simply carries the pathogen externally (on body parts) or internally (passes through gut) without the pathogen multiplying or undergoing developmental changes. The vector acts as a passive transport mechanism. Example: Housefly (Musca domestica) mechanically transmits cholera, typhoid, dysentery by carrying organisms on its legs/body. Biological vectors are essential hosts in which the pathogen multiplies and/or develops (mosquitoes for malaria, ticks for Lyme disease)."
  },
  {
    id: 31,
    question: "Bancroftian filariasis is transmitted by Culex quinquefasciatus in urban areas and by Mansonia species in rural areas. What distinguishes Mansonia from Culex as a vector in terms of breeding habits?",
    options: [
      "Mansonia breeds in fast-flowing rivers while Culex breeds in stagnant water",
      "Mansonia larvae attach to aquatic plant roots to obtain oxygen, while Culex larvae breathe at the water surface",
      "Mansonia is exclusively a daytime biter while Culex bites only at night",
      "Mansonia transmits malaria in addition to filariasis while Culex transmits only filariasis"
    ],
    answer: 1,
    explanation: "Mansonia larvae have a distinctive breathing mechanism - they pierce the roots and stems of aquatic plants (water hyacinth, Pistia species) to extract oxygen, meaning they do not need to come to the water surface to breathe. This makes them resistant to conventional larvicidal oil application used against surface-breathing Culex larvae. Control of Mansonia-transmitted filariasis requires removal of aquatic vegetation."
  },
  {
    id: 32,
    question: "Rocky Mountain Spotted Fever is transmitted by Dermacentor ticks. Which term describes the transmission of Rickettsia rickettsii from adult female ticks to their offspring through infected eggs?",
    options: [
      "Transstadial transmission",
      "Transovarial transmission",
      "Cyclopropagative transmission",
      "Mechanical transmission"
    ],
    answer: 1,
    explanation: "Transovarial (transovarian) transmission refers to the passage of an infectious agent from an infected female arthropod to its offspring through infected eggs. This is important for Rickettsia and some arboviruses in ticks. Transstadial transmission refers to the maintenance of infection across developmental stages of the arthropod (e.g., larva to nymph to adult), which is also important for many tick-borne infections including Lyme disease."
  },
  {
    id: 33,
    question: "The extrinsic incubation period (EIP) of Plasmodium falciparum in Anopheles mosquitoes at 25°C is approximately 10-12 days. How does increasing ambient temperature affect the EIP and malaria transmission?",
    options: [
      "Higher temperatures lengthen the EIP, reducing transmission potential",
      "Temperature does not affect the EIP of Plasmodium species",
      "Higher temperatures (up to the vector's thermal limit) shorten the EIP, increasing transmission potential",
      "Higher temperatures extend vector lifespan, compensating for unchanged EIP"
    ],
    answer: 2,
    explanation: "Temperature critically affects EIP: higher temperatures accelerate Plasmodium sporogonic development in mosquitoes, shortening the EIP. Plasmodium falciparum requires minimum temperature of about 18°C (cannot complete development below this). At 30°C, EIP shortens to approximately 8-9 days vs 10-12 days at 25°C. Shorter EIP means more mosquitoes survive long enough to become infectious, increasing vectorial capacity. This explains why malaria transmission intensifies with warming climate."
  },
  {
    id: 34,
    question: "Vector competence and vectorial capacity are related but distinct concepts. Which of the following correctly defines 'vectorial capacity'?",
    options: [
      "The intrinsic ability of a vector to acquire, maintain, and transmit a pathogen",
      "The number of potentially infective bites delivered per case per day, incorporating vector abundance, biting rate, daily survival, and EIP",
      "The minimum infectious dose of pathogen required for vector infection",
      "The geographic range over which a vector can transmit a pathogen"
    ],
    answer: 1,
    explanation: "Vector competence = intrinsic biological ability of a vector species to transmit a pathogen (laboratory measure, includes midgut infection barrier, dissemination). Vectorial capacity = field measure: C = ma²p^n/(-ln p), where m=vector density per host, a=biting rate, p=daily survival probability, n=EIP in days. It quantifies the rate of new infections generated by all vectors feeding on one infected host per day. It incorporates both biological competence and ecological factors."
  },
  {
    id: 35,
    question: "Plague is transmitted by rat fleas (Xenopsylla cheopis). The mode of transmission from flea to human is best described as:",
    options: [
      "Mechanical transmission via contaminated flea mouthparts",
      "Biological propagative transmission - Yersinia pestis multiplies in flea gut causing blockage, regurgitated during blood meal",
      "Cyclodevelopmental transmission with Y. pestis changing form in the flea",
      "Transovarial transmission from infected female fleas to eggs"
    ],
    answer: 1,
    explanation: "Plague transmission via fleas is biological-propagative: Y. pestis multiplies (propagates) in the flea's proventriculus without changing form, eventually forming a 'block' (clot). When a blocked flea attempts to feed, it cannot swallow blood, becomes increasingly hungry, bites repeatedly, and regurgitates Y. pestis back into the wound. Interestingly, transovarial transmission does NOT occur in fleas. Rats are the reservoir; as rats die, hungry fleas seek alternative hosts including humans."
  },
  {
    id: 36,
    question: "Louse-borne typhus (epidemic typhus) is caused by Rickettsia prowazekii transmitted by the human body louse (Pediculus humanus corporis). What is the actual route by which the louse transmits infection to humans?",
    options: [
      "Directly via louse bite as saliva is inoculated into the skin",
      "Via louse feces contaminating the bite wound or mucous membranes when the host scratches",
      "Via transovarial transmission with larvae hatching from infected eggs",
      "Via inhalation of dried louse feces aerosolized from clothing"
    ],
    answer: 1,
    explanation: "The body louse ingests Rickettsia prowazekii during blood meal from a rickettsemic patient. Rickettsiae multiply in the louse's gut epithelium and are shed in large quantities in louse feces. When the louse feeds (causing itch), the host scratches, inoculating infected feces into the bite wound or abraded skin. R. prowazekii is NOT transmitted via louse bite saliva. Dried louse feces (option D) can also transmit via mucous membranes or inhalation, which is relevant for laboratory workers."
  },
  {
    id: 37,
    question: "Scrub typhus is caused by Orientia tsutsugamushi transmitted by larval trombiculid mites (chiggers). Which statement about this vector is correct?",
    options: [
      "Only adult mites transmit scrub typhus; larvae are not infectious",
      "Chigger larvae are the only stage that feeds on humans; transovarial transmission maintains O. tsutsugamushi in mite populations",
      "Adult mites take multiple blood meals, facilitating efficient transmission",
      "Scrub typhus mites can be controlled by eliminating rodent populations without affecting transmission risk"
    ],
    answer: 1,
    explanation: "Key features of scrub typhus transmission: (1) Only the LARVAL stage (chiggers) feeds on vertebrates including humans - nymphs and adults are free-living soil predators; (2) Transovarial transmission is essential - O. tsutsugamushi passes from infected females to eggs, maintaining infection in mite populations independent of vertebrate reservoir; (3) Rodents are the primary vertebrate hosts maintaining infection; (4) Chiggers feed only once in their life, making this relationship highly dependent on transovarial maintenance."
  },
  {
    id: 38,
    question: "The epidemiological triad (agent-host-environment) is foundational to understanding communicable disease transmission. In the context of tuberculosis, which environmental factor MOST significantly influences transmission dynamics?",
    options: [
      "Soil composition and mineral content of the geographic region",
      "Ventilation and crowding in indoor environments affecting droplet nuclei concentration",
      "Ambient temperature affecting mycobacterial viability in the environment",
      "Vector density in the surrounding ecosystem"
    ],
    answer: 1,
    explanation: "For M. tuberculosis (airborne pathogen), the critical environmental factors are indoor air quality - ventilation, crowding, and sunlight exposure. Poor ventilation in crowded spaces (prisons, shelters, mines) allows accumulation of infectious droplet nuclei, dramatically increasing transmission risk. UV light is tuberculocidal. Temperature and humidity affect survivability but ventilation is the dominant environmental determinant. Crowding is why TB is a disease of poverty and urbanization."
  },
  {
    id: 39,
    question: "What is the difference between a 'reservoir' and a 'source' of infection?",
    options: [
      "They are synonymous; both refer to the habitat where the pathogen lives and multiplies",
      "A reservoir is the natural habitat where the pathogen lives and multiplies long-term; the source is the person, animal, or object from which the infection is transmitted directly to the host",
      "A reservoir refers only to human hosts; a source refers only to environmental contamination",
      "A source must be animate while a reservoir can be inanimate"
    ],
    answer: 1,
    explanation: "Reservoir = any person, animal, arthropod, plant, soil, or substance in which an infectious agent normally lives and multiplies, on which it depends primarily for survival, and where it reproduces itself. Source = the immediate origin from which the host is infected. These may differ: e.g., in a common source outbreak, the water supply (reservoir) contaminates food (source), from which humans get infected. In malaria, humans are the reservoir (for P. vivax/falciparum) and Anopheles is the source of human infection."
  },
  {
    id: 40,
    question: "In a typhoid fever case, S. Typhi can exit the human body through multiple portals. Rank the following portals of exit from most to least important for epidemic typhoid transmission:",
    options: [
      "Respiratory > Fecal > Urinary > Skin",
      "Fecal > Urinary > Blood (transfusion) > Respiratory",
      "Urinary > Fecal > Respiratory > Skin shedding",
      "Blood > Fecal > Urinary > Respiratory"
    ],
    answer: 1,
    explanation: "S. Typhi portals of exit: Fecal is the most epidemiologically important (chronic fecal carriers shed 10^9 organisms/gram stool). Urinary exit also important (3-4% become urinary carriers, especially with concurrent Schistosoma haematobium). Blood-borne transmission (transfusion) is possible during bacteremic phase. Respiratory exit is negligible. Fecal-urinary chronological: fecal carriage begins week 1-3, peaks at week 3-4; urinary shedding follows. The feco-oral route drives epidemic spread."
  },
  {
    id: 41,
    question: "The incubation period of cholera is 6 hours to 5 days (typically 1-2 days). During a cholera outbreak, a patient develops symptoms 8 hours after consuming contaminated water. This SHORT incubation period most likely reflects:",
    options: [
      "A particularly virulent strain with higher toxin production",
      "A very large infectious dose, overwhelming normal gastric defense mechanisms rapidly",
      "Pre-formed toxin in the water source (toxin-mediated, similar to S. aureus enterotoxin)",
      "The patient's compromised immune system accelerating symptom onset"
    ],
    answer: 1,
    explanation: "Cholera incubation period is inversely related to inoculum size. Vibrio cholerae requires a relatively large infective dose (10^6 organisms in immunocompetent persons, lower in achlorhydric patients). A very large inoculum (as occurs from heavily contaminated water during outbreaks or from point source exposure) can overcome gastric acid barrier rapidly, accelerating bacterial multiplication and toxin production. Cholera toxin (CT) itself is not preformed in water - Vibrio must colonize and produce CT in vivo."
  },
  {
    id: 42,
    question: "A measles patient is most infectious during which period relative to the rash appearance?",
    options: [
      "Immediately when the rash appears and continues for 2 weeks after rash resolution",
      "4 days before to 4 days after rash appearance (peak at rash onset)",
      "Only during the prodromal phase before rash; once rash appears, infectivity ceases",
      "Exclusively during Koplik's spot phase"
    ],
    answer: 1,
    explanation: "Measles infectious period: 4 days before rash to 4 days after rash appearance. The virus is shed in highest quantities during the prodrome (catarrhal phase) and early rash phase. Koplik's spots appear 1-2 days before rash and coincide with peak viral shedding. After 4 days of rash, patients are generally not infectious. Standard isolation: patients with measles should be placed on airborne precautions and excluded from settings until 4 days after rash onset."
  },
  {
    id: 43,
    question: "The serial interval and generation time are related but distinct measures. What is the key conceptual difference?",
    options: [
      "Serial interval measures time between symptom onsets in a transmission pair; generation time measures time between infection events (exposure to exposure) in a transmission pair",
      "Generation time is always longer than serial interval",
      "Serial interval is used only for vector-borne diseases; generation time for direct transmission",
      "They are identical concepts measured in different units"
    ],
    answer: 0,
    explanation: "Serial interval = time between symptom onset in the index case and symptom onset in the secondary case (observable, symptoms-to-symptoms). Generation time = time between the moment of infection of the index case and the moment of infection of the secondary case (often unobservable, infection-to-infection). If pre-symptomatic transmission occurs (as with COVID-19, influenza), serial interval can be shorter than generation time. The distinction is critical for modeling transmission dynamics."
  },
  {
    id: 44,
    question: "The basic reproduction number (R0) for measles is estimated at 12-18. What does this specifically mean?",
    options: [
      "One measles case causes 12-18 deaths in an unvaccinated population",
      "In a fully susceptible population with no interventions, one infectious individual generates an average of 12-18 secondary cases",
      "Measles has a 12-18 day incubation period",
      "The herd immunity threshold for measles requires 12-18% of the population to be immune"
    ],
    answer: 1,
    explanation: "R0 (basic reproduction number) = average number of secondary infections produced by one infectious individual in a completely susceptible population, with no interventions. R0 = 12-18 for measles means one case generates 12-18 secondary cases in a fully susceptible population. R0 >1 means epidemic growth; R0 <1 means epidemic dies out. R0 is a theoretical quantity dependent on agent, host susceptibility, and contact patterns - it does NOT directly account for vaccination or immunity."
  },
  {
    id: 45,
    question: "Given that measles has an R0 of approximately 15, calculate the minimum herd immunity threshold (HIT) required to prevent sustained transmission.",
    options: ["33%", "67%", "87%", "93%"],
    answer: 3,
    explanation: "Herd immunity threshold (HIT) = 1 - (1/R0). For measles with R0 = 15: HIT = 1 - (1/15) = 1 - 0.067 = 0.933 = 93.3%. This means approximately 93-95% of the population must be immune (through vaccination or prior infection) to prevent sustained measles transmission. This is why measles requires very high (95%+) population vaccine coverage, and even small pockets of unvaccinated individuals can sustain outbreaks."
  },
  {
    id: 46,
    question: "During a foodborne outbreak investigation, 80 persons attended a banquet. 60 ate the shrimp cocktail, of whom 45 became ill. 20 did not eat shrimp, of whom 5 became ill. Calculate the attack rate among those who ate shrimp.",
    options: ["56.25%", "75%", "80%", "25%"],
    answer: 1,
    explanation: "Attack rate among exposed (ate shrimp) = (ill among exposed / total exposed) x 100 = (45/60) x 100 = 75%. Attack rate among unexposed = (5/20) x 100 = 25%. Relative risk = 75/25 = 3.0, meaning those who ate shrimp were 3 times more likely to become ill. This strongly implicates shrimp as the vehicle. The attributable risk = 75% - 25% = 50% of illness attributable to shrimp consumption."
  },
  {
    id: 47,
    question: "In the context of infectious disease epidemiology, what is the 'effective reproduction number' (Rt or Re) and how does it differ from R0?",
    options: [
      "Rt is a fixed biological property of the pathogen while R0 changes with population immunity",
      "Rt is the average number of secondary cases generated by one case at time t, accounting for current population immunity and interventions; unlike R0, it changes over time",
      "Rt measures only pre-symptomatic transmission while R0 measures symptomatic transmission",
      "Rt and R0 are identical; the different notation is purely conventional"
    ],
    answer: 1,
    explanation: "R0 is a theoretical maximum in a fully susceptible population with no control measures. Rt (effective reproduction number) = R0 x (proportion of population still susceptible) = R0 x S/N. As immunity builds (through infection or vaccination) or interventions are implemented, Rt decreases. When Rt <1, the epidemic is declining. Real-time Rt monitoring was critical during COVID-19 for evaluating intervention effectiveness. Rt >1 indicates growing epidemic regardless of R0 value."
  },
  {
    id: 48,
    question: "A susceptible individual is exposed to a case of chickenpox. The incubation period of chickenpox is 14-21 days. If the exposed individual is going to develop chickenpox, from which day post-exposure would they be expected to be infectious to others?",
    options: [
      "Only from the day rash appears",
      "From 1-2 days before rash appearance (late incubation) through 5 days after rash onset or until all lesions crust",
      "Only during the first 3 days of rash when lesions are vesicular",
      "From the first day of exposure through the entire incubation period"
    ],
    answer: 1,
    explanation: "Varicella (chickenpox) infectious period: begins 1-2 days BEFORE rash appearance (when the infected person may feel prodromal symptoms but has no visible rash) through 5 days after rash onset OR until all lesions have crusted (whichever is later). This pre-rash infectivity makes containment challenging. The incubation period is 10-21 days (mean 14 days). This pre-symptomatic infectious period is why isolation must begin before rash and why secondary cases appear before the source case's rash is recognized."
  },
  {
    id: 49,
    question: "A malaria patient with P. vivax returns to a non-endemic country after travel to a malaria-endemic region. Despite appropriate treatment with chloroquine, new episodes of malaria occur 6 and 11 months later. These late relapses are best explained by:",
    options: [
      "Re-infection from local mosquitoes in the non-endemic country",
      "Chloroquine resistance of P. vivax blood-stage parasites",
      "Reactivation of dormant liver-stage hypnozoites that were not eliminated by chloroquine",
      "Persistence of drug-resistant gametocytes in the bloodstream"
    ],
    answer: 2,
    explanation: "P. vivax (and P. ovale) form hypnozoites - dormant liver-stage parasites that can reactivate weeks to years later causing true relapses. Chloroquine treats only blood-stage infection and does not eliminate hypnozoites. Primaquine (or tafenoquine) is required for radical cure (elimination of hypnozoites). Relapse timing varies by P. vivax strain: 'tropical' strains relapse in 3-6 weeks; 'temperate' strains may have long-latency relapses of 6-12 months, explaining late relapses in returned travelers."
  },
  {
    id: 50,
    question: "In a refugee camp, an outbreak of meningococcal meningitis occurs. Neisseria meningitidis is identified. The 'carrier state' in meningococcal disease is epidemiologically important because:",
    options: [
      "Carriers develop fulminant disease within 48 hours without antibiotic prophylaxis",
      "Asymptomatic nasopharyngeal carriage rates of 5-25% in populations mean carriers vastly outnumber cases and drive transmission through droplet spread",
      "Carriers are immune to all serogroups of N. meningitidis permanently",
      "The carrier state lasts for life without antibiotic treatment"
    ],
    answer: 1,
    explanation: "N. meningitidis nasopharyngeal carrier rates are 5-10% in general populations and up to 25-40% in crowded settings (military barracks, colleges, refugee camps). Asymptomatic carriers vastly outnumber clinical cases (ratio approximately 100-1000 carriers per case) and are the primary source of transmission via respiratory droplets and direct contact. Carriage typically lasts weeks to months (not lifelong). Chemoprophylaxis (rifampicin, ciprofloxacin) eliminates carriage in close contacts to interrupt transmission chains."
  }
];

export default questions;

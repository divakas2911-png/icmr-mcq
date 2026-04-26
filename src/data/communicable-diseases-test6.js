const questions = [
  {
    id: 1,
    question: "India was certified polio-free by WHO in which year?",
    options: ["2012", "2014", "2016", "2018"],
    answer: 1,
    explanation: "India was certified polio-free by the WHO on 27 March 2014, after three years without a reported wild poliovirus case. The last case was reported from Howrah, West Bengal, in January 2011."
  },
  {
    id: 2,
    question: "Acute Flaccid Paralysis (AFP) surveillance for polio eradication requires reporting of AFP cases in which age group?",
    options: ["Under 5 years", "Under 10 years", "Under 15 years", "Under 18 years"],
    answer: 2,
    explanation: "AFP surveillance targets children under 15 years of age. The expected AFP non-polio rate is at least 2 per 100,000 children under 15 years, which serves as a quality indicator for surveillance sensitivity."
  },
  {
    id: 3,
    question: "The measles elimination target for India was set at achieving which level of measles-rubella vaccination coverage?",
    options: ["80% in all districts", "85% in all districts", "90% in all districts", "95% in all districts"],
    answer: 3,
    explanation: "WHO/UNICEF recommend at least 95% coverage with two doses of measles-containing vaccine to interrupt transmission and achieve elimination. India's MR campaign aimed for 95% coverage in all districts."
  },
  {
    id: 4,
    question: "Koplik's spots, the pathognomonic enanthem of measles, appear on which surface?",
    options: ["Dorsum of tongue", "Hard palate", "Buccal mucosa opposite lower molars", "Tonsillar fauces"],
    answer: 2,
    explanation: "Koplik's spots are small, bluish-white spots with an erythematous base appearing on the buccal mucosa opposite the lower molars (molar teeth). They appear 1-2 days before the measles rash and are pathognomonic for measles."
  },
  {
    id: 5,
    question: "The Schick test is used to assess immunity to which disease?",
    options: ["Pertussis", "Diphtheria", "Tetanus", "Typhoid"],
    answer: 1,
    explanation: "The Schick test assesses immunity to diphtheria. A small amount of diphtheria toxin is injected intradermally; if the person lacks immunity, a local inflammatory reaction (positive test) occurs. It is now largely replaced by serological antibody testing."
  },
  {
    id: 6,
    question: "The 'staccato cough' followed by a characteristic inspiratory 'whoop' is the hallmark of which disease?",
    options: ["Croup", "Pertussis", "Epiglottitis", "Bronchiolitis"],
    answer: 1,
    explanation: "Pertussis (whooping cough), caused by Bordetella pertussis, is characterised by paroxysmal coughing fits (staccato cough) followed by an inspiratory whoop. The whoop may be absent in infants under 6 months. The catarrhal phase is most infectious."
  },
  {
    id: 7,
    question: "Neonatal tetanus is defined as tetanus occurring in a neonate within how many days of birth?",
    options: ["Within 3 days", "Within 7 days", "Within 28 days", "Within 42 days"],
    answer: 2,
    explanation: "Neonatal tetanus (Tetanus neonatorum) is defined as tetanus occurring in the first 28 days (4 weeks) of life, usually due to unhygienic cutting or care of the umbilical cord. A case fatality rate of 70-100% is seen if untreated."
  },
  {
    id: 8,
    question: "In India's Universal Immunisation Programme (UIP), the hepatitis B birth dose should ideally be given within how many hours of birth to maximally prevent vertical (mother-to-child) transmission?",
    options: ["6 hours", "12 hours", "24 hours", "48 hours"],
    answer: 2,
    explanation: "The hepatitis B birth dose should be given within 24 hours of birth to prevent perinatal (vertical) transmission. When given within 24 hours along with hepatitis B immunoglobulin (HBIG) in HBsAg-positive mothers, it provides over 90% protection against mother-to-child transmission."
  },
  {
    id: 9,
    question: "Japanese Encephalitis (JE) vaccine included in India's UIP is administered in which states/regions primarily?",
    options: ["All states uniformly", "Only coastal states", "Endemic districts in selected states", "Only northeastern states"],
    answer: 2,
    explanation: "JE vaccination under UIP is targeted at endemic districts in selected high-burden states rather than being universal across India. SA 14-14-2 live attenuated vaccine is used. States like Uttar Pradesh, Bihar, Assam, West Bengal, and others with endemic JE receive the vaccine."
  },
  {
    id: 10,
    question: "Rotavirus vaccine was introduced into India's UIP in 2016. Which type of vaccine is currently used in India's UIP for rotavirus?",
    options: ["Inactivated parenteral vaccine", "Live attenuated oral vaccine", "Recombinant subunit vaccine", "Virus-like particle vaccine"],
    answer: 1,
    explanation: "India uses live attenuated oral rotavirus vaccines in its UIP. Initially Rotavac (116E strain, indigenously developed by Bharat Biotech) was introduced, subsequently joined by Rotasiil. Both are live attenuated oral vaccines given at 6, 10, and 14 weeks."
  },
  {
    id: 11,
    question: "Congenital Rubella Syndrome (CRS) classically presents with which triad?",
    options: ["Cataract, deafness, and congenital heart defect", "Microcephaly, rash, and arthritis", "Purpura, hepatosplenomegaly, and pneumonia", "Retinitis, encephalitis, and hydrocephalus"],
    answer: 0,
    explanation: "The classic Gregg's triad of Congenital Rubella Syndrome (CRS) includes: cataracts (and other eye defects like glaucoma/microphthalmia), sensorineural deafness, and congenital heart defects (patent ductus arteriosus, pulmonary artery stenosis). Risk is highest when maternal infection occurs in the first trimester."
  },
  {
    id: 12,
    question: "Varicella (chickenpox) is most infectious during which period?",
    options: ["1-2 days before rash until all lesions crust over", "Only during the rash phase", "Only during the prodromal phase", "From onset of fever until 3 days after rash"],
    answer: 0,
    explanation: "Varicella is infectious from 1-2 days before the rash appears until all lesions have crusted over (usually 5-7 days after rash onset). This makes pre-symptomatic transmission common, contributing to outbreaks in schools and households."
  },
  {
    id: 13,
    question: "The El Tor biotype of Vibrio cholerae O1 differs from the classical biotype in that it:",
    options: ["Does not produce cholera toxin", "Has higher case fatality rate", "Survives longer in the environment and causes milder disease", "Is resistant to ORS treatment"],
    answer: 2,
    explanation: "The El Tor biotype replaced classical Vibrio cholerae as the cause of the current (7th) pandemic. It survives longer in aquatic environments and tends to cause milder disease with higher rates of asymptomatic carriage (~75% subclinical), making it epidemiologically more persistent than the classical biotype."
  },
  {
    id: 14,
    question: "Vibrio cholerae O139 (Bengal strain) is important because:",
    options: ["It does not respond to ORS", "Pre-existing immunity to O1 does not protect against it", "It primarily affects children under 5 years", "It is transmitted by direct contact, not water"],
    answer: 1,
    explanation: "V. cholerae O139 (Bengal strain), identified in 1992, is important because immunity to O1 strains (from prior infection or vaccination) does not confer cross-protection against O139. This means adults who have previously had cholera or been vaccinated with O1-based vaccines remain susceptible."
  },
  {
    id: 15,
    question: "The WHO-recommended Oral Rehydration Solution (ORS) formula reduced osmolarity to which value (mOsm/L) compared to the original ORS?",
    options: ["311 mOsm/L", "270 mOsm/L", "245 mOsm/L", "200 mOsm/L"],
    answer: 2,
    explanation: "The reduced-osmolarity ORS recommended by WHO since 2002 has 245 mOsm/L (compared to 311 mOsm/L of the original WHO-ORS). It contains sodium 75 mmol/L, glucose 75 mmol/L, chloride 65 mmol/L, potassium 20 mmol/L, citrate 10 mmol/L. It reduces stool output and vomiting compared to original ORS."
  },
  {
    id: 16,
    question: "The Widal test for typhoid becomes positive from which week of illness, and which antibody titre is considered significant?",
    options: ["1st week; O titre >/= 1:20", "2nd week; O titre >/= 1:80 or rising titre", "3rd week; H titre >/= 1:40", "4th week; Vi titre >/= 1:40"],
    answer: 1,
    explanation: "The Widal test (agglutination test) typically becomes positive in the 2nd week of typhoid illness. A single O titre of 1:80 or above, or a fourfold rise in titre between paired sera, is considered significant. H agglutinins rise later but persist longer; Vi agglutinins are used to detect chronic carriers."
  },
  {
    id: 17,
    question: "The gold standard for diagnosis of typhoid fever in the first week of illness is:",
    options: ["Widal test", "Blood culture (Castaneda's method)", "Stool culture", "Bone marrow culture"],
    answer: 1,
    explanation: "Blood culture (using Castaneda's biphasic medium or conventional culture) is the gold standard in the first week when bacteraemia is highest. Bone marrow culture has even higher sensitivity (~90%) and remains positive despite prior antibiotic use, but is invasive. Stool culture is positive from the 2nd-3rd week."
  },
  {
    id: 18,
    question: "A chronic typhoid carrier is defined as a person who continues to excrete Salmonella Typhi in stool or urine for more than:",
    options: ["3 months after illness", "6 months after illness", "1 year after illness", "2 years after illness"],
    answer: 1,
    explanation: "A chronic typhoid carrier is defined as someone who continues to excrete Salmonella Typhi in faeces or urine for more than 3 months (some sources say 6 months) after acute illness. The gallbladder is the usual reservoir; Vi antibody test helps identify carriers. Ciprofloxacin or amoxicillin for 4 weeks may eliminate carriage."
  },
  {
    id: 19,
    question: "Hepatitis E virus (HEV) causes high mortality specifically in which group?",
    options: ["Children under 5 years", "Elderly males", "Pregnant women (especially 3rd trimester)", "Immunocompromised patients"],
    answer: 2,
    explanation: "HEV causes exceptionally high mortality (15-25%) in pregnant women, particularly in the third trimester, due to fulminant hepatic failure. HEV genotype 1 causes epidemic waterborne hepatitis E in India and South Asia. Unlike hepatitis A, there is no effective long-term immunity conferring vaccine widely available in India."
  },
  {
    id: 20,
    question: "Leptospirosis is transmitted to humans primarily through:",
    options: ["Bite of infected rodents", "Inhalation of rodent urine aerosols", "Contact of skin/mucous membranes with water or soil contaminated with infected animal urine", "Consumption of undercooked rodent meat"],
    answer: 2,
    explanation: "Leptospirosis is transmitted through contact of broken skin or mucous membranes with water, soil, or mud contaminated with urine of infected animals (especially rats, cattle, dogs). Flooding greatly increases risk. Weil's disease (severe leptospirosis with jaundice and renal failure) is caused by L. icterohaemorrhagiae."
  },
  {
    id: 21,
    question: "Amoebiasis (Entamoeba histolytica) causes dysentery characterised by:",
    options: ["Large volume watery stools with blood and mucus mixed throughout", "Small volume bloody mucoid stools with tenesmus; blood and mucus separate from faeces", "Painless watery diarrhoea without blood", "Profuse rice-water stools with no pain"],
    answer: 1,
    explanation: "Amoebic dysentery classically produces small-volume stools with blood and mucus that tend to be separate from the faecal matter (blood-streaked mucus, 'raspberry jelly' appearance), with cramping abdominal pain but less tenesmus than bacillary dysentery. The stool has fewer pus cells and more red cells than bacillary dysentery."
  },
  {
    id: 22,
    question: "Staphylococcal food poisoning is characterised by which incubation period and mechanism?",
    options: ["30 minutes to 6 hours; preformed enterotoxin ingested with food", "8-16 hours; toxin produced in the gut after ingestion of spores", "18-36 hours; invasion of intestinal mucosa by bacteria", "2-5 days; toxin produced by bacteria multiplying in intestines"],
    answer: 0,
    explanation: "Staphylococcal food poisoning has a very short incubation period of 1-6 hours (typically 2-4 hours) because it results from ingestion of preformed heat-stable enterotoxin (not live bacteria). Cooking does not destroy the toxin. Vomiting is the predominant symptom; diarrhoea may occur. Common vehicles: cream pastries, custards, mayonnaise."
  },
  {
    id: 23,
    question: "The indicator of bacteriological quality of drinking water recommended by WHO is:",
    options: ["Total plate count at 37°C", "Coliform count (total coliforms)", "Faecal coliform (thermotolerant coliform/E. coli) count", "Streptococcal count"],
    answer: 2,
    explanation: "Faecal coliforms (thermotolerant coliforms, principally E. coli) are the primary bacteriological indicator of drinking water safety, as they indicate recent faecal contamination. WHO guidelines specify 0 E. coli or thermotolerant coliforms per 100 mL in treated piped drinking water."
  },
  {
    id: 24,
    question: "Bacillary dysentery caused by Shigella dysenteriae type 1 (Shiga bacillus) is particularly dangerous because it produces:",
    options: ["Heat-labile enterotoxin only", "Shiga toxin (Stx) causing haemolytic uraemic syndrome (HUS)", "Neurotoxin causing paralysis", "Exfoliative toxin causing skin peeling"],
    answer: 1,
    explanation: "Shigella dysenteriae type 1 produces Shiga toxin (Stx), a potent cytotoxin that inhibits protein synthesis and can cause haemolytic uraemic syndrome (HUS) - the triad of microangiopathic haemolytic anaemia, thrombocytopenia, and acute renal failure. It causes the most severe form of bacillary dysentery."
  },
  {
    id: 25,
    question: "The influenza pandemic of 2009 was caused by which strain, and what was unique about it?",
    options: ["H5N1; purely avian origin", "H1N1 (pdm09); reassortant with swine, avian, and human influenza gene segments", "H3N2; purely human seasonal influenza", "H7N9; reassortant of human and avian segments only"],
    answer: 1,
    explanation: "The 2009 influenza pandemic was caused by a novel H1N1 virus (A/H1N1pdm09) with a unique reassortant genome containing gene segments from North American swine, Eurasian swine, avian, and human influenza viruses. It caused a pandemic declared by WHO in June 2009 - the first pandemic since 1968."
  },
  {
    id: 26,
    question: "Avian influenza H5N1 has high mortality in humans but does NOT cause sustained human-to-human transmission primarily because:",
    options: ["The virus cannot infect human cells at all", "Human upper respiratory tract cells predominantly express sialic acid alpha-2,6 receptors to which H5N1 binds poorly", "H5N1 is destroyed by stomach acid before reaching the lungs", "H5N1 does not replicate in human immune cells"],
    answer: 1,
    explanation: "H5N1 avian influenza binds preferentially to sialic acid alpha-2,3 receptors (found mainly in human lower respiratory tract/alveoli and bird intestines) rather than sialic acid alpha-2,6 receptors (predominant in human upper respiratory tract). This anatomical distribution limits efficient airborne human-to-human transmission, though it causes severe lower respiratory tract disease."
  },
  {
    id: 27,
    question: "Which COVID-19 variant was first classified as a Variant of Concern (VOC) by WHO and named 'Alpha'?",
    options: ["B.1.617.2 (Delta)", "B.1.1.7 (detected in UK)", "B.1.351 (detected in South Africa)", "P.1 (detected in Brazil)"],
    answer: 1,
    explanation: "B.1.1.7, first detected in the UK in September 2020, was the first variant classified as a Variant of Concern by WHO and designated Alpha. It showed ~50-70% increased transmissibility compared to the original strain. Subsequent VOCs named Beta (B.1.351), Gamma (P.1), Delta (B.1.617.2), and Omicron (B.1.1.529) followed."
  },
  {
    id: 28,
    question: "The Integrated Management of Neonatal and Childhood Illness (IMNCI) classifies a child with pneumonia as having 'severe pneumonia' based on which finding?",
    options: ["Fast breathing alone", "Chest indrawing (lower chest wall indrawing)", "Cough and cold with no danger signs", "Wheeze with fast breathing"],
    answer: 1,
    explanation: "In IMNCI classification: 'Fast breathing' (age-specific rates) = Pneumonia (treat with oral amoxicillin); 'Chest indrawing' (lower chest wall drawing in with inspiration) = Severe Pneumonia (refer to hospital, give first dose amoxicillin); 'General danger signs' (unable to drink, vomiting everything, convulsions, lethargic/unconscious) = Very Severe Disease."
  },
  {
    id: 29,
    question: "Meningococcal meningitis outbreaks are most commonly caused by which serogroup in the 'meningitis belt' of sub-Saharan Africa, while in India sporadic cases are more often which serogroup?",
    options: ["Serogroup A in Africa; Serogroup B in India", "Serogroup B in Africa; Serogroup A in India", "Serogroup C in Africa; Serogroup W in India", "Serogroup A in Africa; Serogroup C in India"],
    answer: 0,
    explanation: "Serogroup A (Neisseria meningitidis) causes epidemic meningitis in the African meningitis belt. In India, sporadic cases and outbreaks have predominantly involved Serogroup B and A; Serogroup B is not covered by polysaccharide vaccines (meningococcal polysaccharide vaccine covers A, C, W135, Y). India has reported outbreaks in Delhi and Rajasthan."
  },
  {
    id: 30,
    question: "SARS-CoV-1 (Severe Acute Respiratory Syndrome) was caused by a coronavirus first identified in 2002-2003. Its primary animal reservoir is believed to be:",
    options: ["Bats, with civet cats as intermediate host", "Camels as direct reservoir", "Pigs as primary reservoir", "Rodents as primary reservoir"],
    answer: 0,
    explanation: "SARS-CoV-1 is believed to have originated in bats (horseshoe bats, Rhinolophus species) with palm civet cats (Paguma larvata) acting as intermediate amplifying hosts to humans. MERS-CoV, by contrast, has dromedary camels as the primary zoonotic reservoir for human cases."
  },
  {
    id: 31,
    question: "Nipah virus disease in India was first reported in Kerala in 2018. Its primary reservoir in India is:",
    options: ["Pigs", "Fruit bats (Pteropus species)", "Horses", "Rodents"],
    answer: 1,
    explanation: "Fruit bats (flying foxes, Pteropus genus) are the natural reservoir of Nipah virus. In India's Kerala outbreaks (2018, 2019, 2021, 2023), transmission occurred through contact with bat-contaminated date palm sap or direct exposure to bats. Person-to-person transmission also occurs, particularly in healthcare settings. CFR in India outbreaks ~70%."
  },
  {
    id: 32,
    question: "Hantavirus Pulmonary Syndrome (HPS) is transmitted to humans primarily through:",
    options: ["Bite of infected rodents", "Inhalation of aerosolised rodent excreta (urine, faeces, saliva)", "Contact with rodent blood during butchering", "Vector tick bites"],
    answer: 1,
    explanation: "HPS is transmitted primarily through inhalation of aerosols from dried rodent urine, faeces, or saliva (Sin Nombre virus, New World hantaviruses). Person-to-person transmission is rare except with Andes virus. In India, hantavirus seropositivity has been documented but clinical HPS is rarely reported; Old World hantaviruses cause haemorrhagic fever with renal syndrome (HFRS)."
  },
  {
    id: 33,
    question: "Respiratory Syncytial Virus (RSV) is the most common cause of which serious lower respiratory tract infection in infants?",
    options: ["Epiglottitis", "Bronchiolitis", "Bacterial pneumonia", "Croup (laryngotracheobronchitis)"],
    answer: 1,
    explanation: "RSV is the leading cause of bronchiolitis and viral pneumonia in infants and young children under 2 years. It accounts for approximately 33% of all acute lower respiratory tract infections in young children globally. RSV infection in premature infants and those with congenital heart disease or immunodeficiency can be life-threatening."
  },
  {
    id: 34,
    question: "Airborne precautions (requiring negative pressure isolation room and N95 respirator) are required for which of the following infections?",
    options: ["Influenza", "COVID-19 (all settings)", "Active pulmonary tuberculosis, measles, and varicella", "Meningococcal meningitis"],
    answer: 2,
    explanation: "Airborne precautions (negative pressure room, N95 respirator for HCW) are required for diseases transmitted by droplet nuclei (<5 microns) that remain suspended in air: pulmonary TB, measles, and varicella/disseminated zoster. Influenza and meningococcal disease require droplet precautions (surgical mask, 1-metre distance). COVID-19 requires airborne precautions during aerosol-generating procedures."
  },
  {
    id: 35,
    question: "MERS-CoV (Middle East Respiratory Syndrome Coronavirus) is associated with which animal as the primary zoonotic source for human infection?",
    options: ["Bats", "Civet cats", "Dromedary camels", "Pigs"],
    answer: 2,
    explanation: "Dromedary camels (Camelus dromedarius) are the primary zoonotic reservoir of MERS-CoV for human infection, with bats considered the likely evolutionary origin. Most human cases in the Middle East have direct or indirect camel contact. Human-to-human transmission occurs mainly in healthcare settings. Case fatality rate is approximately 35%."
  },
  {
    id: 36,
    question: "The basic reproduction number (R0) of measles is approximately:",
    options: ["2-3", "4-5", "8-18", "20-30"],
    answer: 2,
    explanation: "Measles has one of the highest R0 values of any infectious disease, estimated at 12-18 (range 8-18). This means that in a fully susceptible population, one case generates 12-18 secondary cases. This high R0 necessitates 92-95% population immunity to achieve herd immunity and interrupt transmission."
  },
  {
    id: 37,
    question: "Droplet precautions differ from airborne precautions in that droplets are defined as respiratory particles larger than:",
    options: ["1 micron", "5 microns", "10 microns", "20 microns"],
    answer: 1,
    explanation: "Droplets are conventionally defined as respiratory particles >5 microns in diameter that fall quickly due to gravity and travel only short distances (typically <1-2 metres). Droplet precautions require surgical mask and eye protection within 1 metre of the patient. Droplet nuclei (airborne) are <5 microns and remain suspended in air for longer distances."
  },
  {
    id: 38,
    question: "The category of animal bite requiring immediate rabies post-exposure prophylaxis (PEP) including both RIG and rabies vaccine, according to WHO classification, is:",
    options: ["Category I: touching or feeding animals", "Category II: nibbling of uncovered skin, minor scratches without bleeding", "Category III: single or multiple transdermal bites or scratches, contamination of mucous membranes with saliva", "Category II and III both require RIG"],
    answer: 2,
    explanation: "WHO Category III exposure (single/multiple transdermal bites or scratches, contamination of mucous membranes/broken skin with saliva, direct contact of bat with skin) requires wound washing, Rabies Immunoglobulin (RIG) infiltrated into wound, AND complete rabies vaccination course. Category II requires wound washing and vaccination only. Category I requires only wound washing."
  },
  {
    id: 39,
    question: "The Essen regimen for rabies post-exposure prophylaxis consists of:",
    options: ["3 doses of vaccine on days 0, 7, 28", "4 doses of vaccine on days 0, 3, 7, 14", "5 doses of vaccine on days 0, 3, 7, 14, 28", "2 doses of vaccine on days 0 and 28"],
    answer: 2,
    explanation: "The Essen regimen is the standard intramuscular rabies PEP schedule: 5 doses on days 0, 3, 7, 14, and 28 (one dose per injection site, 1 mL IM in deltoid). The Zagreb regimen (2-1-1: 2 doses day 0, 1 dose day 7, 1 dose day 21) is an alternative 4-dose schedule. Both are WHO-approved."
  },
  {
    id: 40,
    question: "Chikungunya fever is characterised by which distinctive clinical feature that differentiates it from dengue?",
    options: ["Haemorrhagic manifestations", "Severe and persistent polyarthralgia/polyarthritis, often debilitating", "Hepatic failure", "Encephalitis in most cases"],
    answer: 1,
    explanation: "Chikungunya (meaning 'that which bends up' in Makonde) is characterised by severe, debilitating polyarthralgia/arthritis affecting multiple joints, which can persist for months to years. This persistent arthritis differentiates chikungunya from dengue. Aedes aegypti and A. albopictus are vectors. Major outbreaks occurred in India in 2006 and 2016."
  },
  {
    id: 41,
    question: "Zika virus infection during pregnancy is associated with which congenital abnormality?",
    options: ["Congenital rubella syndrome", "Microcephaly and congenital Zika syndrome", "Congenital toxoplasmosis", "Neural tube defects"],
    answer: 1,
    explanation: "Zika virus (flavivirus, Aedes-transmitted) infection during pregnancy, particularly in the first trimester, causes congenital Zika syndrome including microcephaly, brain anomalies (cortical malformations), ocular anomalies, and neurological impairment. The 2015-2016 Brazilian outbreak established this teratogenic association. Zika also causes Guillain-Barre syndrome."
  },
  {
    id: 42,
    question: "Kala-azar (visceral leishmaniasis) in India is caused by which species and transmitted by which vector?",
    options: ["L. tropica; Phlebotomus argentipes", "L. donovani; Phlebotomus argentipes (sandfly)", "L. major; Lutzomyia longipalpis", "L. infantum; Phlebotomus papatasi"],
    answer: 1,
    explanation: "Visceral leishmaniasis (kala-azar) in India is caused by Leishmania donovani and transmitted by the female sandfly Phlebotomus argentipes. India (Bihar, Jharkhand, West Bengal, UP) accounts for a large proportion of global kala-azar burden. PKDL (Post-Kala-azar Dermal Leishmaniasis) is an important reservoir maintaining transmission."
  },
  {
    id: 43,
    question: "India's National Programme for Elimination of Lymphatic Filariasis uses Mass Drug Administration (MDA). The current triple-drug therapy (IDA) consists of which drugs?",
    options: ["Ivermectin + DEC + Albendazole", "DEC + Albendazole only (double drug therapy)", "Ivermectin + Albendazole only", "DEC + Ivermectin only"],
    answer: 0,
    explanation: "The triple-drug therapy IDA (Ivermectin + DEC + Albendazole) is WHO-recommended and adopted by India for accelerated lymphatic filariasis elimination. IDA has superior microfilaraemia clearance compared to the previous double-drug DA (DEC + Albendazole). MDA is given annually in all endemic districts. The elimination target is microfilaraemia prevalence <1%."
  },
  {
    id: 44,
    question: "The microfilaraemia survey (mf survey) for lymphatic filariasis programme evaluation should be conducted by collecting blood at which time?",
    options: ["Morning (6-10 AM) as microfilariae are diurnal", "Afternoon (12-3 PM)", "Night (8:30 PM to 12 midnight) as microfilariae show nocturnal periodicity", "Any time of day; no periodicity"],
    answer: 2,
    explanation: "Wuchereria bancrofti microfilariae (the dominant LF parasite in India) show nocturnal periodicity - they appear in peripheral blood mainly between 8:30 PM and midnight, correlating with the biting time of the night-biting Culex mosquito vector. Blood for mf surveys must be collected between 8:30 PM and midnight for accurate results."
  },
  {
    id: 45,
    question: "Scrub typhus, an important cause of acute febrile illness in India, is caused by:",
    options: ["Rickettsia typhi", "Orientia tsutsugamushi", "Rickettsia rickettsii", "Coxiella burnetii"],
    answer: 1,
    explanation: "Scrub typhus is caused by Orientia tsutsugamushi (formerly Rickettsia tsutsugamushi), transmitted by the bite of infected larval trombiculid mites (chiggers). A characteristic eschar (painless black crusted ulcer) at the mite bite site is seen in ~50% of cases. It is a major cause of undifferentiated acute febrile illness in India, especially in foothills and scrub areas. Doxycycline is the drug of choice."
  },
  {
    id: 46,
    question: "Plague is caused by Yersinia pestis. The form of plague with highest mortality if untreated is:",
    options: ["Bubonic plague", "Septicaemic plague", "Pneumonic plague", "Meningeal plague"],
    answer: 2,
    explanation: "Pneumonic plague (primary: inhalation of infectious respiratory droplets; secondary: haematogenous spread from bubonic/septicaemic plague) has the highest mortality approaching 100% if untreated. It is also the only form transmissible person-to-person. Bubonic plague (flea bite, ~30-60% untreated mortality) is the most common form. Surat, India experienced an outbreak in 1994."
  },
  {
    id: 47,
    question: "Brucellosis in India is predominantly an occupational disease. Which occupation carries the highest risk?",
    options: ["Fishermen and fish handlers", "Veterinarians, farmers, abattoir workers, and livestock handlers", "Rice paddy field workers", "Forestry workers"],
    answer: 1,
    explanation: "Brucellosis is a zoonosis caused by Brucella species (B. melitensis from goats/sheep, B. abortus from cattle, B. suis from pigs). Occupational risk groups include veterinarians, farmers, slaughterhouse/abattoir workers, and livestock handlers who contact infected animals, aborted foetuses, or animal products. Consumption of unpasteurised dairy products is also a major route."
  },
  {
    id: 48,
    question: "Anthrax is caused by Bacillus anthracis. The most dangerous form of anthrax with highest mortality is:",
    options: ["Cutaneous anthrax (malignant pustule)", "Gastrointestinal anthrax", "Inhalation (pulmonary/woolsorters' disease) anthrax", "Anthrax meningitis"],
    answer: 2,
    explanation: "Inhalation anthrax (woolsorters' disease, pulmonary anthrax) has the highest mortality (>80% even with treatment) due to rapid progression of mediastinal widening, septicaemia, and toxaemia from anthrax toxin (Lethal Factor + Protective Antigen + Oedema Factor). Cutaneous anthrax is the most common form (~95% of cases) with low mortality if treated. Anthrax is also a potential bioterrorism agent."
  },
  {
    id: 49,
    question: "Kyasanur Forest Disease (KFD), a tick-borne haemorrhagic fever endemic to which Indian state, is caused by:",
    options: ["Crimean-Congo Haemorrhagic Fever virus; Karnataka", "KFD virus (Flaviviridae); Karnataka (Shimoga/Shivamogga district and surrounding areas)", "Hantavirus; Kerala", "Nipah virus; Karnataka"],
    answer: 1,
    explanation: "Kyasanur Forest Disease (KFD, 'Monkey disease') is caused by KFD virus (KFDV, Flaviviridae family) and is endemic to Karnataka, particularly Shivamogga (Shimoga), Uttara Kannada, Chikkamagaluru, and neighbouring districts. It is transmitted by Haemaphysalis ticks. Hard-tick-infested monkeys (langurs, macaques) serve as amplifying hosts. A formalin-inactivated KFDV vaccine is available for endemic populations."
  },
  {
    id: 50,
    question: "Yellow fever vaccination is mandatory for travellers to which region, and the certificate of vaccination is valid for:",
    options: ["South Asian countries; 5 years", "Sub-Saharan Africa and tropical South America; lifetime (previously 10 years, changed in 2016)", "Southeast Asian countries; 1 year", "Middle Eastern countries; 3 years"],
    answer: 1,
    explanation: "Yellow fever vaccination is required under International Health Regulations (IHR) for travellers to endemic/epidemic zones in sub-Saharan Africa and tropical South America. Since 11 July 2016, WHO changed the International Certificate of Vaccination or Prophylaxis (ICVP) validity from 10 years to lifetime after a single dose, reflecting data showing lifelong immunity. India requires proof of vaccination from travellers arriving from endemic countries."
  },
];

export default questions;

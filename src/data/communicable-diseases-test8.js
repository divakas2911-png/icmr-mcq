const questions = [
  {
    id: 1,
    question: "A 32-year-old HIV-positive male on ART (efavirenz-based regimen) is diagnosed with sputum smear-positive pulmonary TB. His CD4 count is 180 cells/mm3. What is the most appropriate management strategy regarding timing of ART?",
    options: [
      "Stop ART immediately and start anti-TB therapy; restart ART after 6 months",
      "Start anti-TB therapy first and introduce ART within 2 weeks given CD4 <200",
      "Start both ART and anti-TB therapy simultaneously on day 1",
      "Continue current ART unchanged and add anti-TB therapy without modification"
    ],
    answer: 1,
    explanation: "WHO and RNTCP guidelines recommend starting anti-TB therapy first, then introducing ART within 2 weeks in patients with CD4 count <50 cells/mm3 (within 8 weeks for higher CD4). However, for CD4 <200, ART should be started within 2-4 weeks of anti-TB therapy initiation to prevent immune reconstitution inflammatory syndrome (IRIS) while reducing AIDS-related mortality. Efavirenz-based regimens are preferred with rifampicin-containing TB treatment due to favorable pharmacokinetic interaction compared to nevirapine."
  },
  {
    id: 2,
    question: "A pregnant woman at 28 weeks gestation presents with fever, chills, and rigors in a P. falciparum endemic area. Peripheral smear shows P. falciparum with 3% parasitemia. She has no severe malaria features. Which of the following treatment regimens is most appropriate?",
    options: [
      "Chloroquine 600 mg base followed by 300 mg at 6, 24, and 48 hours",
      "Artesunate-amodiaquine combination for 3 days",
      "Artemether-lumefantrine (AL) for 3 days with close monitoring",
      "Quinine sulfate 10 mg/kg three times daily for 7 days plus clindamycin"
    ],
    answer: 2,
    explanation: "Artemether-lumefantrine (AL) is the recommended first-line treatment for uncomplicated P. falciparum malaria in the second and third trimesters of pregnancy. In the first trimester, quinine plus clindamycin is preferred due to limited safety data on artemisinins. Chloroquine is ineffective against P. falciparum in most endemic areas due to resistance. Artesunate-amodiaquine is an alternative ACT but AL is preferred. Primaquine for radical cure is contraindicated in pregnancy due to risk of haemolysis in G6PD-deficient fetal erythrocytes."
  },
  {
    id: 3,
    question: "During a monsoon outbreak, patients present with acute febrile illness with polyarthralgia, maculopapular rash, and leucopenia. Some patients also have thrombocytopenia. The vector is Aedes aegypti. Which clinical feature MOST reliably distinguishes chikungunya from dengue in this co-circulation scenario?",
    options: [
      "Thrombocytopenia below 100,000/mm3",
      "Severe incapacitating symmetrical polyarthritis persisting beyond 2 weeks",
      "Retro-orbital pain and myalgia",
      "Haemorrhagic manifestations and plasma leakage"
    ],
    answer: 1,
    explanation: "Severe, symmetric, incapacitating polyarthritis persisting beyond 2 weeks is the hallmark that most reliably distinguishes chikungunya from dengue. Chikungunya arthralgia/arthritis characteristically affects small joints symmetrically (wrists, ankles, interphalangeal joints) and persists for weeks to months. Thrombocytopenia occurs in both but is more pronounced in dengue. Retro-orbital pain and myalgia occur predominantly in dengue. Haemorrhagic manifestations and plasma leakage define severe dengue (DHF/DSS). Both share Aedes aegypti as a common vector, making clinical differentiation important during co-epidemics."
  },
  {
    id: 4,
    question: "A 40-year-old farmer from Bihar presents with 3 weeks of fever, hepatosplenomegaly, weight loss, and pancytopenia. rK39 rapid test is positive. He is HIV-negative with CD4 count 620 cells/mm3. Which first-line treatment is recommended under the National Kala-Azar Elimination Programme?",
    options: [
      "Sodium stibogluconate 20 mg/kg/day IM for 30 days",
      "Miltefosine orally for 28 days based on body weight",
      "Single-dose liposomal amphotericin B 10 mg/kg IV",
      "Amphotericin B deoxycholate 1 mg/kg IV on alternate days for 30 doses"
    ],
    answer: 2,
    explanation: "Under India's National Kala-Azar Elimination Programme, single-dose liposomal amphotericin B (AmBisome) 10 mg/kg IV is the recommended first-line treatment for visceral leishmaniasis (kala-azar) in India. This replaced miltefosine as first-line due to superior efficacy, single-dose convenience, and emerging miltefosine resistance. Sodium stibogluconate (SSG) is no longer first-line in India due to high resistance rates in Bihar (>60%). Miltefosine remains an alternative oral option. Amphotericin B deoxycholate is nephrotoxic and requires prolonged administration, making it less preferable."
  },
  {
    id: 5,
    question: "A patient presents with Pyrexia of Unknown Origin (PUO) - fever >38.3C for more than 3 weeks with no diagnosis after 1 week of inpatient investigation. He is from a tribal district in Jharkhand. Which sequence of investigations is most appropriate as per the systematic PUO workup in Indian endemic settings?",
    options: [
      "Start empirical anti-TB therapy, then investigate if no response at 2 months",
      "CT-PET scan immediately followed by bone marrow biopsy",
      "Peripheral smear for malaria, rK39 antigen test, thin smear for trypanosomes, blood culture, and Weil-Felix reaction",
      "Peripheral smear for malaria, rK39 test, blood culture (aerobic and anaerobic), Widal test, dengue NS1 antigen, and serology for leptospirosis and rickettsial diseases"
    ],
    answer: 3,
    explanation: "In tribal areas of Jharkhand, the differential for PUO includes malaria (P. falciparum, P. vivax), visceral leishmaniasis, enteric fever, dengue, leptospirosis, and rickettsial diseases. A systematic approach includes: peripheral smear for malaria (and rapid antigen test), rK39 for kala-azar, blood cultures for typhoid and bacteremia, Widal test, dengue NS1/IgM, and leptospiral IgM ELISA and rickettsial serology (Weil-Felix, SCRUB IgM). CT-PET is reserved for refractory PUO. Empirical anti-TB without diagnosis is not recommended. Trypanosomes are not endemic in India."
  },
  {
    id: 6,
    question: "A patient with HIV (CD4 100 cells/mm3) on tenofovir/lamivudine/efavirenz presents with P. vivax malaria. After chloroquine treatment, primaquine is planned for radical cure. What is the key prerequisite before starting primaquine in this HIV-positive patient?",
    options: [
      "Check renal function (eGFR) as primaquine is nephrotoxic",
      "Perform G6PD enzyme assay as primaquine causes haemolytic anaemia in G6PD deficiency",
      "Check CD4 count; primaquine is contraindicated if CD4 <200 cells/mm3",
      "Ensure patient is not on efavirenz as there is a fatal drug-drug interaction"
    ],
    answer: 1,
    explanation: "G6PD (glucose-6-phosphate dehydrogenase) deficiency testing is mandatory before administering primaquine. Primaquine is an 8-aminoquinoline that causes dose-dependent oxidative haemolysis in G6PD-deficient individuals. Prevalence of G6PD deficiency is significant in malaria-endemic populations. In G6PD deficiency, weekly primaquine (0.75 mg/kg once weekly for 8 weeks) can be used as a safer alternative to daily dosing. There is no absolute CD4 cutoff for primaquine. Efavirenz has no clinically significant direct interaction with primaquine. Primaquine is not nephrotoxic."
  },
  {
    id: 7,
    question: "A 28-year-old HIV-positive patient on efavirenz-based ART is started on rifampicin-containing anti-TB therapy. Which pharmacokinetic concern is MOST critical in this combination?",
    options: [
      "Rifampicin inhibits CYP3A4, increasing efavirenz levels and causing toxicity",
      "Efavirenz inhibits rifampicin metabolism, causing rifampicin accumulation and hepatotoxicity",
      "Rifampicin strongly induces CYP3A4 and CYP2B6, reducing efavirenz plasma levels by 26%, necessitating dose adjustment",
      "Rifampicin and efavirenz compete for protein binding, displacing each other and causing sub-therapeutic levels of both"
    ],
    answer: 2,
    explanation: "Rifampicin is a potent inducer of cytochrome P450 enzymes (CYP3A4 and CYP2B6) and P-glycoprotein. This induction significantly reduces plasma concentrations of efavirenz by approximately 26%. Despite this pharmacokinetic interaction, standard efavirenz dosing (600 mg daily) is generally maintained, though some guidelines recommend increasing the dose to 800 mg daily in patients >60 kg. Notably, if nevirapine is used instead of efavirenz, plasma levels are reduced by 40-55%, making efavirenz the preferred NNRTI with rifampicin. Rifampicin induces, not inhibits, CYP enzymes."
  },
  {
    id: 8,
    question: "In a dengue outbreak, a 35-year-old patient with dengue fever develops warning signs: abdominal pain, persistent vomiting, clinical fluid accumulation, mucosal bleeding, lethargy, and liver enlargement >2 cm. Platelet count is 60,000/mm3, haematocrit has risen by 22% from baseline. What is the most appropriate immediate management?",
    options: [
      "Discharge with oral hydration and platelet count monitoring every 12 hours",
      "Hospital admission, IV crystalloid fluid therapy with careful monitoring of haematocrit and urine output",
      "Immediate platelet transfusion as platelet <100,000/mm3 with bleeding risk",
      "IV corticosteroids to reduce capillary leak and haematocrit rise"
    ],
    answer: 1,
    explanation: "Patients with dengue warning signs require hospital admission and IV fluid therapy. The WHO 2009 dengue guidelines classify this as dengue with warning signs requiring careful monitoring. IV crystalloids (normal saline or Ringer's lactate) are given at 5-7 ml/kg/hour, titrated based on haematocrit (aim for 10-20% reduction), urine output (target 0.5-1 ml/kg/hr), and vital signs. A haematocrit rise >20% indicates significant plasma leakage. Platelet transfusion is NOT recommended unless platelet <20,000/mm3 with severe bleeding. Corticosteroids are not beneficial and may worsen outcomes in dengue."
  },
  {
    id: 9,
    question: "In a TB-HIV co-infected patient on successful TB treatment, paradoxical IRIS (immune reconstitution inflammatory syndrome) develops 3 weeks after ART initiation. The patient has new cervical lymphadenopathy and fever. What is the MOST appropriate initial management?",
    options: [
      "Stop ART immediately and re-evaluate after 4 weeks",
      "Stop anti-TB therapy as TB-IRIS indicates treatment failure and drug resistance",
      "Continue both ART and anti-TB therapy; add NSAIDs and, if severe, prednisolone",
      "Switch to second-line TB drugs assuming acquired drug resistance"
    ],
    answer: 2,
    explanation: "Paradoxical TB-IRIS is a clinical diagnosis of exclusion (after ruling out treatment failure, drug resistance, and new opportunistic infections). It typically occurs within 3 months of ART initiation. Management: continue both ART and anti-TB therapy (stopping either is harmful), treat symptoms with NSAIDs for mild-moderate IRIS. For severe IRIS (impending airway obstruction, expanding CNS lesions, severe hypoxia), prednisolone 1.5 mg/kg/day for 2 weeks then taper is recommended (CAMELIA trial). Switching TB drugs without DST evidence of resistance is inappropriate. Stopping ART reverses immune recovery and increases mortality."
  },
  {
    id: 10,
    question: "A cluster of 5 patients from the same village presents with fever, jaundice, conjunctival suffusion, myalgia, and oliguria following monsoon flooding. Two patients have haemoptysis. Weil-Felix reaction is negative. What is the most likely diagnosis and the treatment of choice?",
    options: [
      "Rickettsial fever; doxycycline 100 mg twice daily for 7 days",
      "Leptospirosis (Weil's disease); IV penicillin G or IV ceftriaxone for severe disease",
      "Viral haemorrhagic fever; supportive care only",
      "Hepatitis E with fulminant liver failure; N-acetylcysteine infusion"
    ],
    answer: 1,
    explanation: "Leptospirosis (Weil's disease) presents classically with fever, jaundice, renal failure (oliguria), conjunctival suffusion, myalgia, and pulmonary haemorrhage (in severe pulmonary leptospirosis - ARDS/haemoptysis). Flooding and animal contact are typical risk factors. Weil-Felix is for rickettsial disease and is negative in leptospirosis. Diagnosis: microscopic agglutination test (MAT) is gold standard; IgM ELISA is used for screening. Treatment: mild disease - oral doxycycline 100 mg BD for 7 days; severe disease - IV penicillin G 1.5 MU 6-hourly or IV ceftriaxone 1g daily for 7 days. Pulmonary haemorrhage syndrome requires ICU support."
  },
  {
    id: 11,
    question: "A patient co-infected with TB and HIV develops peripheral neuropathy 6 weeks after starting anti-TB therapy containing isoniazid. He is also on stavudine (d4T)-based ART. What is the pathophysiology and management?",
    options: [
      "Rifampicin-induced demyelination; switch rifampicin to ethambutol",
      "Isoniazid inhibits pyridoxine (B6) metabolism AND stavudine causes mitochondrial toxicity, causing additive peripheral neuropathy; add pyridoxine 25-50 mg daily and consider replacing stavudine with tenofovir",
      "Pyrazinamide causes neuropathy; stop pyrazinamide after 2 months as per regimen",
      "HIV viral neuropathy unrelated to medications; intensify ART regimen"
    ],
    answer: 1,
    explanation: "This is a case of additive peripheral neuropathy from two mechanisms: (1) Isoniazid inhibits pyridoxal phosphokinase, depleting active vitamin B6 (pyridoxal phosphate), causing peripheral neuropathy - managed by adding pyridoxine 25-50 mg daily prophylactically with INH in HIV-positive patients; (2) Stavudine (d4T) causes mitochondrial toxicity leading to painful peripheral neuropathy. Management: add pyridoxine, and replace stavudine with tenofovir (WHO now recommends phasing out d4T). WHO guidelines prefer TDF/3TC/EFV as first-line ART, avoiding d4T given its toxicity profile."
  },
  {
    id: 12,
    question: "A 25-year-old woman with P. vivax malaria is found to have G6PD deficiency (class I, severe). She requires radical cure to prevent relapses. What is the most appropriate management for radical cure in this patient?",
    options: [
      "Standard primaquine 15 mg daily for 14 days - G6PD class does not affect primaquine dosing",
      "Withhold primaquine permanently; chloroquine monoprophylaxis alone is sufficient",
      "Tafenoquine single dose 300 mg as an alternative to primaquine for G6PD-deficient patients",
      "Weekly primaquine 0.75 mg/kg once weekly for 8 weeks with close clinical monitoring for haemolysis"
    ],
    answer: 3,
    explanation: "In G6PD-deficient patients with P. vivax, the approach to radical cure depends on severity of deficiency. For Class I (severe) G6PD deficiency with <10% enzyme activity, daily primaquine is absolutely contraindicated. Tafenoquine is also contraindicated in G6PD deficiency. The WHO-recommended approach for moderate G6PD deficiency is weekly primaquine 0.75 mg/kg once weekly for 8 weeks under supervised administration with monitoring for haemolysis. For severe (class I) deficiency, the risk-benefit must be carefully assessed. Many guidelines suggest withholding primaquine or using supervised weekly dosing with haematological monitoring. Chloroquine alone does not prevent P. vivax relapses from dormant hypnozoites."
  },
  {
    id: 13,
    question: "In a cholera outbreak in a village, 200 persons were exposed to contaminated water. Of these, 80 developed diarrhoea meeting the cholera case definition. The outbreak lasted 7 days. Calculate the attack rate.",
    options: [
      "0.4% (4 per 1000)",
      "40% (40 per 100)",
      "80% (80 per 100)",
      "8% (8 per 100)"
    ],
    answer: 1,
    explanation: "Attack Rate = (Number of new cases / Population at risk) x 100. Attack Rate = (80/200) x 100 = 40%. The attack rate of 40% is consistent with a common-source waterborne outbreak of cholera, which typically shows high attack rates when the infecting dose is sufficient and population immunity is low. The attack rate is also called the incidence proportion for outbreak investigations. It is distinguished from the secondary attack rate (SAR), which measures transmission among household or close contacts of primary cases."
  },
  {
    id: 14,
    question: "In a measles outbreak in a school, 10 index cases were identified. Among 150 susceptible household contacts of these index cases, 45 subsequently developed measles. What is the secondary attack rate (SAR)?",
    options: [
      "6.7%",
      "30%",
      "45%",
      "10%"
    ],
    answer: 1,
    explanation: "Secondary Attack Rate (SAR) = (Number of secondary cases among contacts / Number of susceptible contacts exposed to primary cases) x 100. SAR = (45/150) x 100 = 30%. The SAR measures the transmissibility of an infection in a defined setting (household, school, ward). It reflects both the inherent infectivity of the pathogen and the susceptibility of contacts. Measles has a very high SAR (75-90% in unvaccinated populations), so a SAR of 30% in this example suggests partial vaccination coverage in the household contacts. SAR is different from the basic reproduction number (R0), which reflects average transmission in a fully susceptible population."
  },
  {
    id: 15,
    question: "In a meningococcal meningitis outbreak, 500 cases were reported in a district with a population of 500,000. Of the 500 cases, 50 patients died. What is the case fatality rate (CFR) and how does it differ from the mortality rate?",
    options: [
      "CFR = 10%, Mortality rate = 10 per 100,000; CFR measures deaths among cases, mortality rate measures deaths in the total population",
      "CFR = 10%, Mortality rate = 10%; they are both the same measure expressed differently",
      "CFR = 50 per 100,000, Mortality rate = 10%; CFR is always expressed per 100,000",
      "CFR = 1%, Mortality rate = 10 per 100,000; CFR includes all population not just cases"
    ],
    answer: 0,
    explanation: "Case Fatality Rate (CFR) = (Deaths from disease / Cases of disease) x 100 = (50/500) x 100 = 10%. CFR measures the probability of dying given that one has the disease - it is a measure of disease severity. Mortality Rate (Cause-specific) = (Deaths from disease / Total population) x 1000 or 100,000 = (50/500,000) x 100,000 = 10 per 100,000. Mortality rate is a measure of the impact of disease on the total population. CFR depends on the case ascertainment rate and diagnostic sensitivity - if mild cases are missed, CFR is overestimated. The distinction is fundamental in outbreak reporting."
  },
  {
    id: 16,
    question: "An epidemic curve for a Hepatitis A outbreak shows a narrow, sharply peaked histogram with most cases clustered within a single incubation period (15-50 days), with the peak at day 28. This epidemic curve pattern is MOST consistent with:",
    options: [
      "Propagated (person-to-person) spread indicating ongoing transmission",
      "Point source exposure at a single point in time",
      "Continuous common source with ongoing exposure over weeks",
      "Vector-borne transmission with seasonal amplification"
    ],
    answer: 1,
    explanation: "A narrow, sharply peaked epidemic curve with cases clustered within a single incubation period is characteristic of a POINT SOURCE outbreak - exposure to the causative agent at a single point in time. The distribution of cases reflects the range of incubation periods for the disease. For Hepatitis A (incubation 15-50 days, median 28 days), if all cases cluster within this period, a single contamination event (contaminated food at a common meal) is implicated. Propagated spread shows multiple peaks, each separated by roughly one incubation period. Continuous common source shows a plateau or prolonged peak. Identifying the exposure time: subtract the median incubation period from the peak date."
  },
  {
    id: 17,
    question: "The basic reproduction number (R0) for measles is estimated at 12-18. In a population where 90% have been vaccinated with a 95% effective vaccine, what is the effective reproduction number (Re)?",
    options: [
      "Re = 12 x (1-0.90 x 0.95) = 12 x 0.145 = 1.74, indicating sustained transmission",
      "Re = 12 x (1-0.95) = 0.6, indicating the epidemic will not sustain",
      "Re = 12 x (1-0.90) = 1.2, indicating borderline epidemic potential",
      "Re = 18 x (1-0.90 x 0.95) = 18 x 0.145 = 2.61, indicating sustained transmission"
    ],
    answer: 0,
    explanation: "The effective reproduction number Re = R0 x (proportion susceptible). Proportion immune = vaccination coverage x vaccine efficacy = 0.90 x 0.95 = 0.855. Proportion susceptible = 1 - 0.855 = 0.145. Re = R0 x proportion susceptible = 12 x 0.145 = 1.74. Since Re >1, the epidemic can still sustain (each case infects >1 person on average). Herd immunity threshold = 1 - 1/R0 = 1 - 1/12 = 91.7%. For Re <1 to achieve herd immunity, effective vaccine coverage must exceed ~92% (accounting for vaccine efficacy). This explains why measles outbreaks occur even in high-vaccination settings when coverage drops slightly below the threshold."
  },
  {
    id: 18,
    question: "The herd immunity threshold for polio (R0 = 5) using OPV (efficacy 85%) is calculated. What minimum vaccination coverage is needed to achieve herd immunity?",
    options: [
      "70.6% (calculated as (1-1/R0)/VE = 0.8/0.85)",
      "80% (standard WHO recommendation for all EPI vaccines)",
      "94.1% (calculated as (1-1/R0)/VE = 0.8/0.85 = 94.1%)",
      "85% (equals the vaccine efficacy)"
    ],
    answer: 2,
    explanation: "Herd immunity threshold (Pc) = (1 - 1/R0) / Vaccine Efficacy. For polio: 1 - 1/R0 = 1 - 1/5 = 0.8. Pc = 0.8 / 0.85 = 0.941 = 94.1%. This means vaccination coverage of at least 94.1% with OPV (85% efficacy) is required to achieve herd immunity for polio. With IPV (efficacy ~99% for seroconversion), the required coverage would be 0.8/0.99 = 80.8%. This calculation explains why pulse polio immunization rounds aim for near-universal coverage (>95%) to compensate for vaccine efficacy below 100% and to create adequate herd immunity in high-density, high-transmission settings."
  },
  {
    id: 19,
    question: "In a vaccine trial for a new typhoid vaccine, 500 vaccinated subjects and 500 placebo recipients were followed for 2 years. 10 cases of typhoid occurred in the vaccinated group and 50 in the placebo group. Calculate the vaccine efficacy (VE).",
    options: [
      "VE = (50-10)/50 x 100 = 80%",
      "VE = 10/50 x 100 = 20% (attack rate in vaccinated group)",
      "VE = (10/500)/(50/500) x 100 = 20% (risk ratio, not VE)",
      "VE = 50/500 - 10/500 = 8% (absolute risk reduction)"
    ],
    answer: 0,
    explanation: "Vaccine Efficacy (VE) = [(Attack Rate in Unvaccinated - Attack Rate in Vaccinated) / Attack Rate in Unvaccinated] x 100. AR in unvaccinated = 50/500 = 0.10 (10%). AR in vaccinated = 10/500 = 0.02 (2%). VE = (0.10 - 0.02) / 0.10 x 100 = 0.08/0.10 x 100 = 80%. Alternatively, VE = (1 - Relative Risk) x 100 = (1 - 0.02/0.10) x 100 = (1 - 0.2) x 100 = 80%. This means vaccination reduced the risk of typhoid by 80% compared to no vaccination. VE of 80% is the threshold typically required for WHO prequalification of vaccines. The absolute risk reduction is 8% and the number needed to vaccinate (NNV) = 1/0.08 = 12.5."
  },
  {
    id: 20,
    question: "In a food poisoning outbreak investigation at a wedding, a retrospective cohort study is conducted. The crude Relative Risk (RR) for consuming chicken biryani is 4.5 (95% CI: 2.1-9.6). After stratifying by consumption of raita (yogurt), the stratum-specific RRs are 4.6 for raita consumers and 4.4 for non-raita consumers (Mantel-Haenszel RR = 4.5). What does this stratified analysis indicate?",
    options: [
      "Raita is a confounder; the adjusted RR of 4.5 differs from the crude RR, proving confounding",
      "Raita is an effect modifier; different stratum-specific RRs indicate interaction",
      "Raita is neither a confounder nor an effect modifier; stratum-specific RRs are similar to each other and to the crude RR, confirming biryani as the vehicle",
      "The analysis is inconclusive as both biryani and raita could be the vehicle"
    ],
    answer: 2,
    explanation: "When stratum-specific RRs are similar to each other AND similar to the crude RR, there is neither confounding nor effect modification. Confounding would cause the adjusted (MH) RR to differ substantially from the crude RR. Effect modification (interaction) would cause stratum-specific RRs to differ substantially from each other. Here, stratum-specific RRs (4.6 and 4.4) are similar to each other and to the crude RR (4.5), confirming that raita is neither a confounder nor an effect modifier. The consistent RR of ~4.5 strongly implicates biryani as the vehicle of infection. This approach - Mantel-Haenszel stratified analysis - is the standard method for outbreak investigation cohort studies."
  },
  {
    id: 21,
    question: "In an outbreak of scrub typhus in a rural district, 100 cases are identified over 8 weeks. The epidemic curve shows multiple small peaks without a clear index case pattern. This pattern, combined with the mode of transmission (chigger mites in grass), is MOST consistent with:",
    options: [
      "Point source outbreak from a contaminated water body",
      "Propagated person-to-person spread within households",
      "Continuous common source from endemic exposure to a scrub typhus 'mite island'",
      "Vector-borne outbreak with amplification during peak vector season"
    ],
    answer: 2,
    explanation: "Scrub typhus is caused by Orientia tsutsugamushi transmitted by Leptotrombidium chigger mite larvae found in discrete ecological niches called 'mite islands' (scrub vegetation, transitional zones). Multiple small peaks without clear person-to-person spread indicate a continuous common source - ongoing exposure to infected chigger mites in the environment. This is not a propagated outbreak as scrub typhus is not transmitted person-to-person. The epidemic curve pattern reflects the staggered timing of different individuals entering the 'mite island' (agricultural workers, foragers) throughout the outbreak period. This understanding guides control - targeting the mite habitat and protecting workers with repellents and doxycycline prophylaxis."
  },
  {
    id: 22,
    question: "A district reports the following polio case data: 200 cases of Acute Flaccid Paralysis (AFP) per year (population 2 million, children <15 years = 400,000). The non-polio AFP rate is calculated as 8.5 per 100,000 children <15 years. What does this rate signify for the surveillance system?",
    options: [
      "The rate is too high, indicating over-reporting of AFP cases and surveillance artifact",
      "A non-polio AFP rate of at least 2 per 100,000 children <15 years indicates sensitive AFP surveillance; 8.5 exceeds the minimum threshold, confirming good surveillance sensitivity",
      "The rate is inadequate; WHO requires non-polio AFP rate of at least 10 per 100,000",
      "AFP rate measures polio incidence directly; 8.5 per 100,000 indicates ongoing polio transmission"
    ],
    answer: 1,
    explanation: "WHO uses non-polio AFP rate as a key indicator of AFP surveillance sensitivity. The minimum required non-polio AFP rate is 2 per 100,000 children <15 years per year (in polio-endemic countries and those maintaining surveillance). If the rate falls below 2/100,000, the surveillance is considered inadequate and may be missing true polio cases. A rate of 8.5/100,000 well exceeds the minimum threshold, indicating sensitive surveillance that is capturing non-polio AFP cases (from conditions like Guillain-Barre syndrome, transverse myelitis). The other key AFP surveillance indicator is stool adequacy rate: >80% of AFP cases should have 2 stool specimens collected within 14 days of onset."
  },
  {
    id: 23,
    question: "In a hepatitis B seroprevalence study, 1000 individuals are tested. The ELISA has sensitivity of 97% and specificity of 99%. The true prevalence in the population is 5%. Using Bayes theorem, what is the positive predictive value (PPV) of the test in this population?",
    options: [
      "PPV = 97% (equals sensitivity)",
      "PPV = approximately 83.8%",
      "PPV = 99% (equals specificity)",
      "PPV = approximately 16.2%"
    ],
    answer: 1,
    explanation: "PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + (1 - Specificity) x (1 - Prevalence)]. PPV = (0.97 x 0.05) / [(0.97 x 0.05) + (0.01 x 0.95)] = 0.0485 / (0.0485 + 0.0095) = 0.0485 / 0.0580 = 0.836 = 83.6% (approximately 83.8%). This demonstrates that even with excellent sensitivity (97%) and specificity (99%), the PPV is significantly reduced at low prevalence (5%). At 5% prevalence, roughly 1 in 6 positive tests will be a false positive. This has major implications for screening programs in low-prevalence populations - confirmatory testing (e.g., anti-HBc, HBsAg neutralization, or NAT) is essential for positive ELISA results."
  },
  {
    id: 24,
    question: "In a case-control study investigating a hepatitis C outbreak among injecting drug users, the crude odds ratio (OR) for sharing needles is 8.5 (95% CI: 3.2-22.4). After adjusting for HIV status (as a potential confounder), the adjusted OR is 7.9 (95% CI: 2.9-21.5). What is the MOST accurate interpretation?",
    options: [
      "HIV status is a confounder; the adjusted OR of 7.9 is substantially different from 8.5, invalidating the crude estimate",
      "The association between needle sharing and HCV is robust; HIV status is not a significant confounder as the adjusted OR (7.9) is similar to the crude OR (8.5); needle sharing remains strongly associated with HCV (OR ~8) after adjustment",
      "HIV status is an effect modifier creating interaction; stratified analysis is required instead of the adjusted OR",
      "The confidence intervals overlapping between crude and adjusted ORs means the study is underpowered"
    ],
    answer: 1,
    explanation: "Confounding is considered significant when the adjusted OR differs from the crude OR by >10-15%. Here, the crude OR is 8.5 and adjusted OR is 7.9 - a difference of only 7%, indicating minimal confounding by HIV status. The association between needle sharing and HCV transmission remains strong and statistically significant (the 95% CI excludes 1.0 in both cases). The interpretation: after controlling for HIV status, needle sharing is associated with approximately 8 times higher odds of HCV infection. Wide confidence intervals indicate statistical instability but do not indicate underpowering per se - the association is significant. Overlapping CIs between crude and adjusted estimates is expected and appropriate."
  },
  {
    id: 25,
    question: "Under India's Integrated Disease Surveillance Programme (IDSP), which component is responsible for weekly reporting of 'S' (syndromic) data by health workers at the sub-district level?",
    options: [
      "District Rapid Response Team (RRT) that investigates all reported clusters",
      "Weekly 'S' form submitted by health workers (ASHA, ANM, sub-centre staff) reporting syndromes like fever with rash, acute diarrhoea, and jaundice",
      "State surveillance unit that compiles monthly district health management information",
      "Central IDSP portal that directly collects laboratory-confirmed case data"
    ],
    answer: 1,
    explanation: "IDSP uses a three-component reporting structure: S (Syndromic) forms - submitted weekly by health workers/sub-centres reporting clinical syndromes (fever >101F, acute diarrhoea, jaundice, fever with rash, etc.) without laboratory confirmation; P (Presumptive) forms - submitted by medical officers/PHC doctors reporting presumptive diagnoses; L (Laboratory) forms - submitted by district/state laboratories reporting confirmed cases. The S-P-L format allows early warning before laboratory confirmation. District Rapid Response Teams investigate outbreaks when reports indicate clustering. IHIP (Integrated Health Information Platform) is the digital successor to IDSP, enabling real-time data entry."
  },
  {
    id: 26,
    question: "The Integrated Health Information Platform (IHIP) was launched to replace IDSP. Which of the following is a key ADDITIONAL capability of IHIP over the traditional IDSP reporting system?",
    options: [
      "IHIP collects only laboratory-confirmed data, replacing the syndromic reporting of IDSP",
      "IHIP enables real-time individual case-based reporting using a mobile application, automatic geo-tagging of cases, and linkage to other health management systems (HMIS, ANMOL)",
      "IHIP operates only at the state level and does not involve district or sub-district data entry",
      "IHIP restricts surveillance to the 33 diseases notifiable under the Epidemic Diseases Act"
    ],
    answer: 1,
    explanation: "IHIP (Integrated Health Information Platform) is an upgraded digital platform replacing IDSP's paper-based and manual reporting. Key enhancements: (1) Real-time case-based reporting through mobile app for ASHAs and ANMs; (2) Automatic geo-tagging enabling spatial mapping of disease clusters; (3) Integration with HMIS, ANMOL (ANM Online), and other health platforms; (4) Dashboard-based visualization for decision-making; (5) Automated alerts when threshold exceeded; (6) Linkage with laboratory networks (EQAS) for confirmation. IHIP maintains the S-P-L format but in digital form and covers all reportable diseases, not just 33. It aims for near real-time outbreak detection."
  },
  {
    id: 27,
    question: "An integrated vector management (IVM) programme is being planned for a district co-endemic for malaria, dengue, chikungunya, and lymphatic filariasis. Which combination strategy represents BEST PRACTICE for IVM in this district?",
    options: [
      "Separate, disease-specific vector control programmes for each disease to ensure focused outcomes",
      "Universal indoor residual spraying (IRS) with DDT for all four diseases simultaneously",
      "Integrated approach combining larval source management (Bacillus thuringiensis israelensis for dengue/filariasis), long-lasting insecticidal nets (LLIN) for malaria, targeted IRS in high-malaria areas, community mobilization for stagnant water elimination, and entomological monitoring of insecticide resistance",
      "Mass drug administration with diethylcarbamazine for filariasis combined with artemisinin for malaria prophylaxis"
    ],
    answer: 2,
    explanation: "Integrated Vector Management (IVM) is WHO's strategic approach for rational use of resources and maximizing health impact by targeting multiple vectors with coordinated interventions. For a co-endemic district: (1) Larval source management - BTI or temephos for Culex quinquefasciatus (filariasis) and Aedes aegypti (dengue/chikungunya) larvae; (2) LLIN for malaria (Anopheles control); (3) IRS with insecticide for malaria in high-burden areas; (4) Community mobilization for Aedes breeding site elimination; (5) Entomological surveillance including resistance monitoring; (6) Environmental management. DDT is banned in India for public health use. Mass drug administration is for filariasis elimination but is not vector control. IVM avoids the inefficiency of parallel, disease-specific programmes."
  },
  {
    id: 28,
    question: "During a suspected foodborne disease outbreak in a district, the District Rapid Response Team (RRT) is activated. What is the CORRECT sequence of steps in outbreak investigation?",
    options: [
      "Collect specimens first, then establish case definition, then interview cases",
      "Establish case definition, verify diagnosis, describe epidemic (time, place, person), formulate hypothesis, test hypothesis (analytical study), implement control measures, and communicate findings",
      "Implement control measures first (close the implicated restaurant), then investigate retrospectively",
      "Conduct a case-control study first to identify the vehicle, then establish case definition based on study results"
    ],
    answer: 1,
    explanation: "The standard steps of outbreak investigation (CDC/WHO framework): (1) Prepare for field work; (2) Verify diagnosis and confirm the outbreak; (3) Establish a case definition; (4) Find cases systematically (case finding); (5) Describe epidemic by time (epidemic curve), place (spot map), and person (attack rate table); (6) Formulate hypothesis about source, vehicle, and mode; (7) Test hypothesis using analytical epidemiology (cohort or case-control study); (8) Implement control and prevention measures (concurrent with investigation, not waiting for completion); (9) Communicate findings and write report. Note: control measures are implemented concurrently - not after investigation is complete. Case definition must precede case finding."
  },
  {
    id: 29,
    question: "The ICMR-Virus Research and Diagnostic Laboratories (VRDL) network was established for outbreak investigation. Which of the following BEST describes the tiered structure of this laboratory network?",
    options: [
      "A single apex laboratory at AIIMS Delhi that handles all outbreak specimens from across India",
      "A three-tier network: district-level VRDLs for basic diagnostics, state-level VRDLs for confirmatory testing, and ICMR apex institutes (NIV Pune, NIMHANS) for reference/biosafety level 3-4 pathogens",
      "Exclusively private-sector laboratory network contracted by ICMR for outbreak diagnostics",
      "VRDLs are restricted to viral diseases only; bacterial and parasitic outbreaks are handled by separate networks"
    ],
    answer: 1,
    explanation: "ICMR's Virus Research and Diagnostic Laboratories (VRDL) network comprises: (1) District-level VRDLs (over 130): basic viral diagnostics, ELISA, rapid antigen tests, PCR for common viral diseases; (2) State-level VRDLs: confirmatory testing, advanced molecular diagnostics, serology; (3) National/Apex Institutes: National Institute of Virology (NIV) Pune - reference laboratory for emerging/re-emerging viruses, BSL-3/4 capacity for high-consequence pathogens (Nipah, SARS-CoV-2, Ebola confirmation); NIMHANS Bengaluru for neurotropic viruses; NCDC Delhi for integrated surveillance. The network was instrumental in COVID-19 testing scale-up. VRDLs handle only viral diseases; bacterial/parasitic require separate reference labs under ICMR."
  },
  {
    id: 30,
    question: "The Revised National Tuberculosis Control Programme (RNTCP)/National TB Elimination Programme (NTEP) uses the Nikshay portal. Which of the following is the PRIMARY function of the Nikshay system?",
    options: [
      "Procurement and distribution of anti-TB drugs exclusively",
      "Real-time patient-level case-based electronic surveillance: case registration, treatment tracking, outcome recording, and linkage to Nikshay Poshan Yojana (nutritional support) beneficiary identification",
      "Laboratory information management system for sputum smear microscopy results only",
      "Drug resistance surveillance restricted to MDR-TB cases in reference laboratories"
    ],
    answer: 1,
    explanation: "Nikshay (meaning 'to eliminate' in Sanskrit) is the web-based patient management system for NTEP (formerly RNTCP). Functions: (1) Real-time case registration for all TB patients (presumptive and confirmed); (2) Treatment assignment and tracking - ensuring DOT (directly observed treatment); (3) Treatment outcome recording (cured, treatment completed, failed, died, lost-to-follow-up, not evaluated); (4) Drug resistance testing tracking (CBNAAT/Xpert, LPA results); (5) Nikshay Poshan Yojana - identification and disbursement of Rs 500/month nutritional support to TB patients via DBT; (6) Private sector notification (mandatory since 2012). Nikshay enables India to report TB elimination progress to WHO through accurate patient-level data rather than aggregate estimates."
  },
  {
    id: 31,
    question: "In a rural block with high malaria burden, the ASHA (Accredited Social Health Activist) finds a patient with fever and headache. She performs a Rapid Diagnostic Test (RDT) for malaria. The RDT is positive for P. falciparum HRP2 antigen. What is the ASHA's role in management under the National Vector Borne Disease Control Programme (NVBDCP)?",
    options: [
      "ASHA should refer all RDT-positive cases to PHC; she cannot administer any treatment",
      "ASHA can administer the full course of Artemisinin-based Combination Therapy (ACT) for P. falciparum and refer for clinical evaluation",
      "ASHA should collect a blood slide (thick and thin smear) and send to lab; treat with chloroquine pending results",
      "ASHA should administer paracetamol only and refer within 24 hours for blood smear"
    ],
    answer: 1,
    explanation: "Under NVBDCP's malaria case management policy and the ASHA guidelines, ASHAs in high-burden areas are empowered to perform malaria RDTs and administer appropriate treatment without waiting for referral. For RDT-positive P. falciparum: ASHA administers the complete ACT (Artemether-Lumefantrine) along with a single dose of primaquine (0.75 mg/kg) as a gametocytocide (contraindicated in G6PD deficiency, pregnancy). For P. vivax: chloroquine course and primaquine 14-day radical cure. ASHA also collects a blood slide (for confirmation in the lab as backup) but does not wait for results before treatment in P. falciparum given risk of rapid progression to severe malaria. This community-level diagnosis and treatment (CDST) is central to early case management."
  },
  {
    id: 32,
    question: "Quality assurance in malaria microscopy is conducted through the External Quality Assurance Scheme (EQAS) under NVBDCP. Which of the following is a component of EQAS for malaria microscopy?",
    options: [
      "All malaria blood slides are sent to the national reference laboratory in Delhi for reading",
      "Random re-reading of 10% of all slides (both positive and negative) at a higher-level laboratory (district/state), with feedback to peripheral microscopists on discordant results",
      "Only slides that are positive at the peripheral level are sent for re-reading; negative slides are not part of EQAS",
      "EQAS is limited to MDR malaria cases; routine P. vivax and P. falciparum do not require external QA"
    ],
    answer: 1,
    explanation: "EQAS (External Quality Assurance Scheme) for malaria microscopy under NVBDCP involves: (1) Random selection of 10% of all slides (positive AND negative) from peripheral laboratories; (2) Re-reading at the next higher level (district reads sub-district slides; state laboratory reads district slides); (3) Comparison of results - concordance rate is calculated; (4) Feedback provided to peripheral microscopist when discordance detected (false positive or false negative); (5) Retraining required if concordance falls below 80%. EQAS also involves slide panels (standardized panels of positive/negative slides) sent by state labs to test peripheral microscopists. This two-way QA system (random sampling + panel testing) ensures diagnostic quality across the entire malaria laboratory network."
  },
  {
    id: 33,
    question: "Under the Universal Immunization Programme (UIP), the cold chain for vaccines operates on the 'first expiry, first out' (FEFO) principle. A district medical officer finds that the District Vaccine Store has received pentavalent vaccine stocks with varying expiry dates. Which management practice is MOST appropriate?",
    options: [
      "Use stocks with the latest expiry date first to maximize storage time flexibility",
      "Distribute the entire stock equally to all PHCs regardless of expiry dates",
      "Segregate stocks by expiry date, place stocks with earliest expiry date at the front/in accessible positions, and distribute these first to ensure they are used before expiry (FEFO principle)",
      "Discard any vaccine lot with an expiry date less than 6 months away to prevent close-to-expiry vaccines reaching community level"
    ],
    answer: 2,
    explanation: "FEFO (First Expiry, First Out) is the mandatory cold chain management principle for vaccines and medicines, as opposed to FIFO (First In, First Out) used for non-perishable goods. Implementation: stocks are physically arranged with earliest-expiry lots at the front/most accessible position and distributed first to lower levels. This minimizes vaccine wastage from expiry. Vaccine stock management also requires: VVM (Vaccine Vial Monitor) checking before use; temperature monitoring logs; stock ledger maintenance; cold chain equipment monitoring. Discarding vaccines with <6 months expiry would cause enormous wastage. Near-expiry vaccines should be expeditiously distributed to high-utilization centres. The UIP vaccine supply chain uses a 4-tier system: national > state > district > PHC/cold chain point."
  },
  {
    id: 34,
    question: "The ANM (Auxiliary Nurse Midwife) is conducting a Village Health, Sanitation, and Nutrition Day (VHSND). During the session, she identifies a child who missed 3 doses of OPV during the routine immunization schedule. What is the correct immunization catch-up strategy for this child aged 14 months?",
    options: [
      "Restart the entire immunization schedule from birth; all previous doses given after gaps are invalid",
      "Administer all missed doses at once during this session to complete the schedule",
      "Administer only the doses due at the current visit according to the catch-up schedule; give remaining doses at minimum intervals (4 weeks between OPV doses); do not repeat doses already given - the principle of 'valid doses' applies regardless of schedule gaps",
      "Refer the child to district hospital for serology testing to check if previous immunization was effective before giving catch-up doses"
    ],
    answer: 2,
    explanation: "The 'catch-up' immunization principle: no restart is required regardless of how long the schedule gap is ('do not restart, do not repeat'). Valid doses given at any time count, and the child continues from where they left off. For OPV: minimum interval between doses is 4 weeks; maximum 3 doses needed for primary series plus booster at 16-24 months. The catch-up schedule given at one visit should not overload with too many simultaneous injections unnecessarily. Multiple vaccines CAN be given simultaneously at different sites (this reduces missed opportunities). The national immunization schedule under UIP follows age-appropriate administration, and catch-up follows the same biologics with minimum intervals. Serological testing is NOT required before catch-up vaccination."
  },
  {
    id: 35,
    question: "India's National Programme for Containment of Antimicrobial Resistance (AMR) requires sentinel surveillance of antimicrobial resistance patterns. Which of the following describes the CORRECT approach for AMR surveillance in a district hospital?",
    options: [
      "Test all patients admitted to the hospital for AMR regardless of clinical indication",
      "Report only carbapenem-resistant Enterobacteriaceae (CRE) cases to the national AMR surveillance network",
      "Prospective culture-based surveillance of clinically significant isolates (blood, CSF, urine, pus) with standardized antibiotic susceptibility testing (AST) using CLSI/EUCAST breakpoints, aggregate data entry into the AMR surveillance platform, with pharmacy data on antibiotic consumption for linkage",
      "Use rapid PCR tests only (not culture) for AMR surveillance to speed up results reporting"
    ],
    answer: 2,
    explanation: "AMR sentinel surveillance under India's National Action Plan on AMR (NAP-AMR, 2017-2021) involves: (1) Culture of clinically significant specimens (blood cultures for bacteremia, CSF for meningitis, urine for UTI, wound swabs); (2) Standardized Antimicrobial Susceptibility Testing (AST) using Kirby-Bauer disk diffusion or MIC testing with CLSI/EUCAST interpretive criteria; (3) Data entry into national AMR surveillance network platform (linked to WHONET software); (4) Antibiotic consumption/usage data (DDD - defined daily doses per 100 patient days) for correlation with resistance trends; (5) Regular feedback reports to clinicians. Surveillance covers all priority pathogens (ESKAPE organisms, extended-spectrum beta-lactamase producers), not just CRE. Pure PCR-based surveillance misses resistance mechanisms not detectable by targeted PCR."
  },
  {
    id: 36,
    question: "Under the National AIDS Control Programme (NACP) Phase V, which strategy is used to identify HIV-positive individuals who are currently NOT on treatment and link them to ART centres?",
    options: [
      "Mandatory HIV testing for all adults in high-prevalence districts regardless of consent",
      "HIV index testing (partner notification services): offering HIV testing to sexual partners, needle-sharing partners, and biological children of known HIV-positive individuals",
      "Population-level serosurveys conducted every year in all districts",
      "Exclusive focus on PPTCT (prevention of parent-to-child transmission) as the sole case finding strategy"
    ],
    answer: 1,
    explanation: "HIV index testing (also called partner notification services or contact tracing for HIV) is a key strategy under NACP for reaching undiagnosed HIV-positive individuals. Known HIV-positive individuals (index cases) are counselled to disclose status and bring sexual partners, needle-sharing partners, and biological children for HIV testing. This voluntary, confidential strategy has high yield because partners of HIV-positive individuals have significantly higher HIV prevalence than the general population. Other case-finding strategies under NACP: targeted testing at integrated counselling and testing centres (ICTC), facility-based provider-initiated testing and counselling (PITC), community-based testing camps. The 95-95-95 targets (95% diagnosed, 95% on ART, 95% virally suppressed) drive India's HIV programme goals."
  },
  {
    id: 37,
    question: "The National Centre for Disease Control (NCDC) operates the Integrated Disease Surveillance Programme. In a district where dengue cases are rising, the District Surveillance Officer (DSO) wants to confirm whether dengue has crossed the epidemic threshold. Which approach is MOST appropriate for defining the dengue epidemic threshold?",
    options: [
      "Any laboratory-confirmed dengue case exceeding 5 per week constitutes an epidemic",
      "Epidemic threshold is a fixed national number (100 cases per district per month)",
      "Epidemic threshold is district-specific: calculated as mean weekly cases + 2 standard deviations based on at least 5 years of historical surveillance data for the same epidemiological week; crossing this threshold triggers outbreak response",
      "WHO defines the dengue epidemic threshold as an attack rate of 1% of the district population"
    ],
    answer: 2,
    explanation: "Epidemic thresholds for endemic diseases like dengue are defined using historical baseline data rather than fixed absolute numbers, because disease burden varies substantially between districts. The standard approach: calculate weekly case counts from at least 5 years of historical data for each epidemiological week; the epidemic threshold is typically set at mean + 2 standard deviations (or the 75th/90th percentile) for that specific week. When current week's cases exceed this threshold, an outbreak response is initiated. This district-specific, week-specific threshold accounts for normal seasonal variation in dengue. IDSP uses similar thresholds for weekly alert generation. The EWARN (Early Warning and Response Network) system embedded in IHIP automates this threshold calculation."
  },
  {
    id: 38,
    question: "A gastroenteritis outbreak occurs in a village of 500 people after a community feast. Within 24 hours, 120 people develop profuse watery diarrhoea with vomiting. The incubation period ranges from 1-6 hours. Stool cultures sent to the lab. Based on the SHORT incubation period and clinical features, what is the MOST likely etiological agent?",
    options: [
      "Vibrio cholerae O1 El Tor biotype",
      "Staphylococcus aureus enterotoxin (preformed toxin)",
      "Salmonella typhi causing typhoid fever",
      "Rotavirus causing viral gastroenteritis"
    ],
    answer: 1,
    explanation: "An incubation period of 1-6 hours is characteristic of preformed toxin food poisoning, not infection. Staphylococcus aureus produces heat-stable enterotoxins (A-E) in food, which are ingested preformed. Onset is rapid (1-6 hours), symptoms are primarily vomiting and diarrhoea without fever, and resolution occurs within 24-48 hours. The short incubation rules out: Vibrio cholerae (incubation 6-48 hours, classical rice-water stools), Salmonella (incubation 6-72 hours for gastroenteritis, 1-3 weeks for typhoid), Rotavirus (incubation 1-3 days, primarily in children). Other short-incubation toxin-mediated outbreaks: Bacillus cereus emetic type (1-6 hours, from reheated rice), Bacillus cereus diarrhoeal type (8-16 hours). The community feast setting suggests a common food source incubated at room temperature promoting S. aureus toxin production."
  },
  {
    id: 39,
    question: "In the gastroenteritis outbreak in question 38, a retrospective cohort study is conducted. Among 150 people who ate chicken curry, 90 developed illness (attack rate 60%). Among 350 who did not eat chicken curry, 30 developed illness (attack rate 8.6%). Calculate the Relative Risk and interpret the food-specific attack rate table.",
    options: [
      "RR = 60/8.6 = 6.98; chicken curry is the likely vehicle with 7-fold higher risk in those who ate it",
      "RR = 90/30 = 3.0; the difference is not clinically significant",
      "RR = 150/350 = 0.43; those eating chicken curry were protected",
      "RR = (90-30)/(150+350) = 0.12; absolute risk difference is more meaningful than relative risk"
    ],
    answer: 0,
    explanation: "Relative Risk (RR) = Attack Rate in Exposed / Attack Rate in Unexposed = 60% / 8.6% = 6.98 (approximately 7). Interpretation: people who ate chicken curry were approximately 7 times more likely to develop illness than those who did not. This is strong epidemiological evidence implicating chicken curry as the vehicle. In food-specific attack rate analysis, the implicated food typically shows: (1) High attack rate in those who ate it (60%); (2) Low attack rate in those who did not (8.6%); (3) High Relative Risk (>3); (4) The difference in attack rates is statistically significant. The residual attack rate of 8.6% in non-exposed suggests either another food vehicle or cross-contamination. This analysis should be repeated for all foods served to identify the specific vehicle."
  },
  {
    id: 40,
    question: "A measles outbreak is reported in a government primary school with 400 students. Over 3 weeks, 40 students develop fever with maculopapular rash and Koplik spots. The school vaccination records show 85% of students received 1 dose of measles-containing vaccine (MCV1) at 9-12 months. What is the FIRST action in outbreak response?",
    options: [
      "Immediately close the school for 4 weeks to interrupt transmission",
      "Confirm the outbreak: verify clinical diagnosis of at least 3 cases with laboratory confirmation (serology for measles IgM), establish a case definition, and simultaneously initiate outbreak response vaccination for all unvaccinated and under-vaccinated students",
      "Administer antibiotics to all students as prophylaxis against secondary bacterial infections",
      "Wait for all 40 suspected cases to have laboratory confirmation before initiating any response"
    ],
    answer: 1,
    explanation: "WHO and NVBDCP measles outbreak response protocol: (1) Confirm outbreak - clinically verify cases (fever, rash, cough/coryza/conjunctivitis) and laboratory-confirm at least 3 cases (measles IgM serology or PCR). Laboratory confirmation should not delay response; (2) Establish case definition for outbreak (clinical + epidemiological link or lab confirmation); (3) Notify district surveillance officer and state health department; (4) Outbreak response immunization (ORI): administer MCV to all unvaccinated/incompletely vaccinated children 6 months to 5 years (or school age in this context) in the affected area, regardless of previous vaccination history; (5) Vitamin A supplementation for all children with measles; (6) Identify susceptibles (check vaccination records). School closure is not the primary response and may not be necessary if ORI is implemented promptly."
  },
  {
    id: 41,
    question: "During a dengue outbreak investigation in an urban ward, the Aedes aegypti larval survey reveals a House Index (HI) of 18%, Breteau Index (BI) of 25, and Container Index (CI) of 12%. The entomological threshold for dengue transmission risk is HI >1%, BI >5. Which vector control strategy is MOST appropriate?",
    options: [
      "Indoor residual spraying (IRS) with DDT in all houses in the ward",
      "Emergency indoor and outdoor ultra-low volume (ULV) space spraying with pyrethroid insecticide to rapidly kill adult Aedes mosquitoes, COMBINED with intensive larval source management (LSM) targeting all water-holding containers, with community mobilization",
      "Distribute ORS packets to all households as the primary dengue response measure",
      "Conduct serological survey first to determine dengue seroprevalence before initiating any vector control"
    ],
    answer: 1,
    explanation: "With House Index of 18% and Breteau Index of 25 (both far exceeding thresholds of 1% and 5 respectively), vector density is critically high, indicating very high dengue transmission risk. Outbreak response requires: (1) Emergency space spraying (ULV fogging) with pyrethroid (deltamethrin/malathion) to knock down adult Aedes mosquitoes rapidly - reduces transmission immediately; (2) Simultaneous intensive Larval Source Management: drain, cover, or treat with larvicide (temephos, BTI) all water containers (drums, coolers, flower pots, overhead tanks, desert coolers); (3) Community mobilization: 'dry day' campaigns - one day per week when all residents inspect and empty water containers; (4) Entomological re-survey after 2 weeks to assess impact. Fogging alone without LSM is ineffective as Aedes re-populates from breeding sites. DDT is not used against Aedes and is banned for indoor use."
  },
  {
    id: 42,
    question: "A cluster of healthcare-associated infections (HAI) is detected in a surgical ward: 8 patients develop SSI (surgical site infection) with Klebsiella pneumoniae within 2 weeks. Normally the ward sees <1 SSI per month. An infection control investigation is initiated. Which of the following is the MOST systematic approach to identify the source?",
    options: [
      "Immediately close the ward and restart after terminal cleaning with bleach",
      "Blame the scrub nurse as the most common source of SSI in outbreak settings",
      "Conduct a case-control study: compare surgical procedures, surgical teams, instruments, antiseptics, pre-operative antibiotics, duration of surgery, and environmental samples (surfaces, instruments, saline bottles); collect clinical isolates and environmental isolates for whole genome sequencing/PFGE to establish clonality",
      "Administer prophylactic carbapenem to all surgical patients in the ward for 2 weeks"
    ],
    answer: 2,
    explanation: "HAI cluster investigation follows outbreak investigation principles adapted to the healthcare setting: (1) Confirm the cluster: verify diagnoses, collect isolates, check if incidence exceeds baseline; (2) Establish case definition; (3) Case-control or cohort study comparing cases to non-infected surgical patients for exposures (specific surgical team, operating theatre, instruments/implants, IV fluids, antiseptic solutions, pre-op shaving, duration of surgery, antibiotic prophylaxis); (4) Environmental sampling: surface swabs from OT tables, anesthesia equipment, saline/antiseptic bottles, instrument trays; (5) Microbiological typing: PFGE (pulsed-field gel electrophoresis) or whole genome sequencing to determine if isolates are clonal (same strain = common source); (6) Implement infection prevention and control (IPC) measures. Empirical ward closure or prophylactic carbapenems without investigation do not address the source."
  },
  {
    id: 43,
    question: "A cluster of 6 patients presents over 10 days in a district of Kerala with acute encephalitis, high fever, and two deaths. All patients are from villages near a fruit bat (Pteropus) colony. Healthcare workers who treated early cases without PPE are anxious. What is the FIRST priority action for the District Health Team?",
    options: [
      "Collect serum samples from fruit bats and submit to ICMR NIV Pune before taking any human actions",
      "Immediately notify the state and central health authorities (NCDC/ICMR), ensure strict isolation of suspected cases with PPE (N95 mask, gowns, gloves, eye protection), initiate contact tracing and monitoring of all exposed healthcare workers and community contacts, and submit clinical samples to ICMR NIV Pune for Nipah virus testing",
      "Administer ribavirin prophylaxis to all healthcare workers who had any contact with patients",
      "Reassure the community that encephalitis is common in Kerala and await laboratory results before any action"
    ],
    answer: 1,
    explanation: "A cluster of acute encephalitis with deaths near a fruit bat colony in Kerala should immediately raise suspicion for Nipah virus disease (NiV), which has caused outbreaks in Kerala (2018, 2019, 2021, 2023). Nipah has case fatality rate of 40-75% and can spread human-to-human via respiratory droplets and direct contact. Immediate actions: (1) Notify state/central authorities (NCDC, ICMR, WHO under IHR 2005 reporting obligation); (2) Strict isolation of cases with appropriate PPE; (3) Contact tracing of all exposed individuals (healthcare workers, family members); (4) 21-day monitoring of contacts (max incubation period); (5) Submit samples (serum, CSF, urine) to ICMR NIV Pune (only BSL-4 capable facility in India for Nipah confirmation); (6) Educate community about avoiding fruit bat contact, not consuming partially-eaten fruits. Ribavirin efficacy for prophylaxis is not established."
  },
  {
    id: 44,
    question: "An outbreak of unknown acute febrile illness is reported from a remote tribal area - 50 cases, 10 deaths over 3 weeks. No prior outbreaks in the area. Clinical features: fever, severe headache, myalgia, hemorrhagic manifestations in 6 deaths. The district has no diagnostic capacity. Which of the following is the MOST appropriate initial classification and response?",
    options: [
      "Classify as malaria outbreak and start empirical chloroquine treatment for all fever cases",
      "Classify as dengue haemorrhagic fever based on hemorrhagic manifestations and implement standard dengue response",
      "Classify as Disease of Unknown Etiology (DUE); collect samples (serum, clotted blood, paired samples) following biosafety precautions, send to NIV Pune/NCDC as Unknown Fever; simultaneously provide supportive care and implement standard universal precautions/isolation for all cases",
      "Await complete laboratory confirmation before implementing any infection control measures"
    ],
    answer: 2,
    explanation: "Undiagnosed acute febrile illness with haemorrhage and high CFR (10/50 = 20%) in a remote area requires a 'Disease of Unknown Etiology' (DUE) approach: (1) Do NOT assume a diagnosis - differential includes viral haemorrhagic fever (Crimean-Congo Haemorrhagic Fever, Kyasanur Forest Disease in tribal Karnataka/Maharashtra, Hantavirus), severe leptospirosis, rickettsia, or unknown pathogen; (2) Implement universal precautions and strict infection control immediately (barrier nursing, PPE); (3) Systematic sample collection: whole blood (EDTA), serum (plain tube), throat swab, urine - in triple packaging following biosafety protocols; (4) Send to National reference labs (NIV Pune, NCDC) with clinical details; (5) Notify through IDSP/IHIP as DUE; (6) Supportive care for all cases. Empirical specific treatment without diagnosis risks missing the actual cause and delays appropriate management."
  },
  {
    id: 45,
    question: "A traveller returns from sub-Saharan Africa after a 2-week safari. Three days after return, she develops fever, rigors, severe headache, and myalgia. She did not take malaria chemoprophylaxis. Peripheral smear examination is MOST likely to show which finding if P. falciparum malaria is suspected?",
    options: [
      "Ring trophozoites within enlarged erythrocytes with Schuffner's dots",
      "Small ring forms with multiple rings per erythrocyte (double infection), accole/applique forms, no enlarged RBCs, and banana-shaped gametocytes",
      "Large amoeboid trophozoites in enlarged erythrocytes with Schuffner's dots",
      "Band-form trophozoites in normal-sized erythrocytes"
    ],
    answer: 1,
    explanation: "P. falciparum peripheral smear characteristics: (1) Small delicate ring forms (1/5 RBC diameter); (2) Multiple rings per erythrocyte (double/multiple infection - unique to P. falciparum); (3) Accole (applique) forms - rings applied to RBC periphery; (4) No enlarged erythrocytes (unlike P. vivax/P. ovale which enlarge RBCs); (5) Schuffner's dots absent in P. falciparum (present in P. vivax, P. ovale); (6) Banana/crescent-shaped gametocytes (pathognomonic for P. falciparum); (7) In severe falciparum, mature trophozoites and schizonts may appear (normally sequestered in microvasculature). Schuffner's dots in enlarged RBCs = P. vivax or P. ovale. Band forms = P. malariae. Amoeboid trophozoites in enlarged RBCs = P. vivax. Travel history to sub-Saharan Africa without prophylaxis with fever = P. falciparum until proven otherwise."
  },
  {
    id: 46,
    question: "At a wedding reception attended by 300 guests, 80 develop acute gastroenteritis within 12 hours. A cohort study is conducted. The food-specific attack rates are: rice (55% exposed, AR 28%), lentil curry (70% exposed, AR 26%), tandoori chicken (45% exposed, AR 65%), and salad (30% exposed, AR 68%). Which food items should be prioritized as the vehicle of infection, and what is the relevant calculation?",
    options: [
      "Rice and lentil curry: highest exposure proportions indicate highest risk",
      "Tandoori chicken and salad: highest food-specific attack rates (65% and 68%) with RR >3.0 compared to those who did not consume these items",
      "All four foods: since multiple foods are implicated, the outbreak is likely water-borne not food-borne",
      "Lentil curry: highest number of exposed persons (70%) means highest absolute number of cases"
    ],
    answer: 1,
    explanation: "In a food-specific attack rate analysis, the implicated vehicle shows: (1) High attack rate in those who consumed it; (2) Low attack rate in those who did NOT consume it; (3) High Relative Risk (ratio of attack rates). Tandoori chicken (AR 65%) and salad (AR 68%) have the highest attack rates. For confirmation, compare attack rates among those who DID vs DID NOT eat each food and calculate RR. Foods with the highest attack rate differentials and highest RR are the primary suspects. High exposure proportion (like lentil curry at 70%) with moderate AR (26%) does not implicate it. The absolute number of cases is not the metric - the relative risk (attack rate ratio) is the key statistic. The high attack rates in tandoori chicken and salad with presumably low AR in non-consumers would give RR >3-5, strongly implicating these as vehicles."
  },
  {
    id: 47,
    question: "An international traveller arrives from West Africa with fever, jaundice, and haemorrhagic manifestations at a major international airport. The airport health officer suspects a Viral Haemorrhagic Fever (VHF). Under the International Health Regulations (IHR) 2005, which of the following is the CORRECT immediate notification obligation for India?",
    options: [
      "India notifies WHO within 48 hours only if the case is laboratory-confirmed",
      "India notifies WHO within 24 hours of any event that may constitute a Public Health Emergency of International Concern (PHEIC), regardless of laboratory confirmation, if the case meets the IHR decision instrument criteria",
      "Notification is not required unless 10 or more similar cases are reported",
      "IHR 2005 notification applies only to cholera, yellow fever, and plague - VHF is not a notifiable condition"
    ],
    answer: 1,
    explanation: "Under IHR 2005, Member States must notify WHO within 24 hours of assessment indicating a potential Public Health Emergency of International Concern (PHEIC). The IHR 2005 decision instrument (Annex 2) uses four criteria to assess notification need: (1) Is the public health impact serious? (2) Is the event unusual or unexpected? (3) Is there significant risk of international spread? (4) Is there significant risk of international travel/trade restrictions? VHF from West Africa would typically meet all four criteria. Notification does NOT require laboratory confirmation - clinical suspicion with epidemiological criteria is sufficient. IHR 2005 covers all public health events, not just specific diseases (the old IHR 1969 listed specific diseases). Four diseases always require notification: cholera, plague, smallpox, VAPP - but others are notified based on the decision algorithm."
  },
  {
    id: 48,
    question: "In a hospital outbreak investigation of Clostridioides difficile infection (CDI), 15 cases are identified in a medicine ward over 6 weeks. All cases received antibiotics (primarily cephalosporins and fluoroquinolones). The environmental sampling shows C. difficile spores on multiple surfaces. What is the MOST effective infection prevention strategy to terminate this outbreak?",
    options: [
      "Switch all patients to oral vancomycin prophylaxis regardless of CDI diagnosis",
      "Implement contact precautions (private rooms, gowns and gloves), strict hand hygiene with soap and water (NOT alcohol-based hand rub), terminal room cleaning with sodium hypochlorite (bleach) 1000-5000 ppm, antibiotic stewardship to restrict cephalosporins and fluoroquinolones",
      "Install HEPA air filtration systems as C. difficile spreads primarily by airborne route",
      "Use alcohol-based hand rub with 70% isopropanol as the primary hand hygiene intervention"
    ],
    answer: 1,
    explanation: "Clostridioides difficile (formerly Clostridium difficile) outbreak control requires specific measures based on its biology: (1) C. difficile forms spores that are NOT killed by alcohol-based hand rubs - hand hygiene MUST use soap and water to physically remove spores; this distinguishes CDI control from most other HAI; (2) Contact precautions: private rooms or cohorting, gown and gloves for all patient contact; (3) Environmental decontamination: C. difficile spores require sporicidal agents - sodium hypochlorite (bleach) at 1000-5000 ppm; standard quaternary ammonium disinfectants are ineffective; (4) Antibiotic stewardship: restricting high-risk antibiotics (cephalosporins, fluoroquinolones, clindamycin, carbapenems) that disrupt colonic flora and predispose to CDI; (5) Probiotics may be adjunctive. C. difficile is not airborne - HEPA filtration is irrelevant."
  },
  {
    id: 49,
    question: "During an outbreak investigation of a gastroenteritis cluster in a school, the investigators use the 'hypothesis generation' phase. Students from three different canteen counters were affected differentially: Counter A (sandwiches) - 45/80 ill; Counter B (rice meals) - 5/90 ill; Counter C (fruit juices) - 20/50 ill. A descriptive analysis shows the epidemic curve peaks at 6-8 hours after the lunch break. Which statement BEST describes the next step?",
    options: [
      "Conclude that Counter A sandwiches are the vehicle; no further analytical study needed",
      "The descriptive data suggests Counter A sandwiches and Counter C fruit juices as priority hypotheses based on differential attack rates; proceed to analytical case-control study comparing cases (ill students) and controls (well students) for consumption of specific food items at each counter to test these hypotheses formally",
      "Since multiple counters are affected, this is a water-borne outbreak; test only the school water supply",
      "The 6-8 hour incubation identifies Staph aureus definitely; collect food samples from Counter A only"
    ],
    answer: 1,
    explanation: "The hypothesis generation phase uses descriptive epidemiology to formulate (not confirm) hypotheses. Differential attack rates: Counter A (45/80 = 56%), Counter B (5/90 = 5.6%), Counter C (20/50 = 40%) suggest Counters A and C as priority suspects (higher AR). The 6-8 hour incubation is consistent with preformed toxin (S. aureus, B. cereus) but also early-onset infection. However, descriptive data alone cannot confirm the vehicle - an analytical study is required to test hypotheses. A case-control study comparing food-item specific consumption among ill vs non-ill students will calculate odds ratios for each specific food item within each counter. This is the standard sequence: descriptive epidemiology generates hypotheses, analytical epidemiology tests them. Collecting samples only from Counter A would be premature before the analytical study."
  },
  {
    id: 50,
    question: "A national public health review assesses India's performance on the Global Health Security Index (GHSI) and IHR Joint External Evaluation (JEE) domains. For the domain of 'Zoonotic Disease' preparedness, which of the following activities BEST represents integration of human, animal, and environmental health under the One Health approach?",
    options: [
      "Separate disease reporting systems for the Ministry of Health and Ministry of Agriculture with no data sharing",
      "Restricting zoonotic disease surveillance to the veterinary sector as animals are the primary reservoir",
      "Establishment of inter-ministerial One Health task forces integrating MoHFW, Ministry of Agriculture, Ministry of Environment, with shared early warning systems, joint outbreak investigation protocols for zoonotic diseases (rabies, brucellosis, avian influenza, Nipah), integrated laboratory networks, and coordinated response capacity",
      "Annual World Zoonosis Day (July 6) awareness campaigns as the primary One Health intervention"
    ],
    answer: 2,
    explanation: "The One Health approach recognizes that human health, animal health, and environmental health are interconnected and require coordinated action. For zoonotic disease preparedness under IHR JEE and India's National Action Plan for AMR and Zoonoses: (1) Inter-sectoral coordination: MoHFW (human health), Ministry of Agriculture and Farmers Welfare (Department of Animal Husbandry - DAHD), Ministry of Environment Forest & Climate Change; (2) Shared early warning: joint surveillance systems for diseases at human-animal interface (avian influenza H5N1/H9N2, Nipah, brucellosis, rabies, Q fever, leptospirosis); (3) Joint outbreak investigation protocols with shared epidemiological and veterinary investigation teams; (4) Integrated laboratory networks linking human and veterinary labs; (5) National One Health Mission under India's health agenda. Awareness campaigns alone do not constitute preparedness capacity. Separate siloed systems are the problem, not the solution."
  }
];

export default questions;

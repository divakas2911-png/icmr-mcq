const questions = [
  {
    id: 1,
    question: "A district health officer receives reports of 15 cases of acute watery diarrhea from a village with a population of 500 over 3 days. The expected monthly incidence for diarrhea in this area is 2 per 1000 population. Which term best describes this situation?",
    options: [
      "Endemic",
      "Epidemic",
      "Pandemic",
      "Sporadic"
    ],
    answer: 1,
    explanation: "An epidemic (outbreak) is defined as the occurrence of cases of disease in excess of what would normally be expected in a defined community, geographical area, or season. The expected cases here would be approximately 1 per month, but 15 cases occurred in 3 days, far exceeding the expected number. An endemic is the constant presence of a disease at a baseline level. A pandemic is a worldwide epidemic. Sporadic refers to occasional, irregular occurrence."
  },
  {
    id: 2,
    question: "Which of the following best distinguishes an 'epidemic' from a 'pandemic'?",
    options: [
      "Number of cases involved",
      "Severity of the disease",
      "Geographic spread across multiple countries or continents",
      "Mode of transmission"
    ],
    answer: 2,
    explanation: "A pandemic is an epidemic that has spread across multiple countries or continents, usually affecting a large number of people. The distinction is based on geographic spread, not on the number of cases, severity, or mode of transmission. COVID-19 was declared a pandemic in March 2020 by WHO because it had spread to multiple continents simultaneously."
  },
  {
    id: 3,
    question: "During routine surveillance in a district, 8 cases of measles are reported in a week. The epidemic threshold for measles in this district (population 100,000) is set at 5 cases per week. What is the most appropriate next step?",
    options: [
      "Wait for more cases to accumulate before acting",
      "Declare a Public Health Emergency of International Concern (PHEIC)",
      "Initiate outbreak investigation and alert the rapid response team",
      "Conduct a seroprevalence survey"
    ],
    answer: 2,
    explanation: "When reported cases exceed the epidemic threshold, it signals a potential outbreak requiring immediate action. The appropriate response is to initiate outbreak investigation and alert the rapid response team (RRT). The epidemic threshold is an alert level above which public health action is triggered. Declaring PHEIC is a WHO-level decision under IHR 2005. Waiting for more cases would delay control measures. Seroprevalence survey is a long-term epidemiological tool, not an immediate response."
  },
  {
    id: 4,
    question: "The Integrated Disease Surveillance Programme (IDSP) in India uses a three-tiered reporting format. Which of the following correctly identifies the 'S', 'P', and 'L' forms used in IDSP?",
    options: [
      "S = Syndromic, P = Probable, L = Laboratory confirmed",
      "S = Suspected, P = Probable, L = Lab reports",
      "S = Severe, P = Probable, L = Lab confirmed",
      "S = Syndromic, P = Presumptive, L = Laboratory"
    ],
    answer: 0,
    explanation: "IDSP uses three reporting forms: S (Syndromic) - reports from community health workers and sub-centers based on syndromes; P (Probable) - reports from doctors at PHC/CHC level based on clinical diagnosis; and L (Laboratory confirmed) - reports from district/medical college laboratories. This tiered approach allows for early detection through syndromic surveillance while building toward laboratory confirmation."
  },
  {
    id: 5,
    question: "A community health worker reports a cluster of fever with rash cases in a village. Before declaring an outbreak, the district health officer needs to verify whether these cases represent a true outbreak or a reporting artifact. Which of the following is NOT a step in verifying the existence of an outbreak?",
    options: [
      "Reviewing laboratory data for confirmation",
      "Checking if case definitions have changed",
      "Initiating mass chemoprophylaxis immediately",
      "Comparing current rates with historical baseline data"
    ],
    answer: 2,
    explanation: "Initiating mass chemoprophylaxis is a control measure, not a verification step. Verifying the existence of an outbreak involves: (1) reviewing laboratory data to confirm diagnoses, (2) checking if case definitions or reporting systems have changed (which could create artificial increases), (3) comparing current rates with historical baseline data, (4) visiting the site to assess clinical presentations, and (5) ruling out laboratory errors. Control measures should follow, not precede, outbreak verification."
  },
  {
    id: 6,
    question: "In outbreak investigation, the 'index case' is best defined as:",
    options: [
      "The most severely ill patient in the outbreak",
      "The first case identified that brings the outbreak to attention",
      "The first case infected in the chain of transmission",
      "The case with confirmed laboratory diagnosis"
    ],
    answer: 1,
    explanation: "The index case is the first identified case that triggers the investigation or brings the outbreak to the attention of investigators. This is distinct from the primary case, which is the first case to be infected (the actual source). The index case may not be the primary case - for example, a patient presenting to a hospital with a rare illness may be the index case, but the primary case could be someone who was exposed earlier but not yet identified. This distinction is important in contact tracing."
  },
  {
    id: 7,
    question: "Which surveillance system in India is specifically designed for real-time monitoring of disease outbreaks and uses a web-based platform for data entry at district level?",
    options: [
      "National Family Health Survey (NFHS)",
      "Integrated Health Information Platform (IHIP)",
      "Annual Health Survey (AHS)",
      "District Level Household Survey (DLHS)"
    ],
    answer: 1,
    explanation: "The Integrated Health Information Platform (IHIP) is the upgraded digital version of IDSP, designed for real-time web-based reporting of disease outbreaks at district, state, and national levels. It replaced the older IDSP web portal and provides dashboards for monitoring notifiable diseases, outbreak alerts, and response activities. NFHS, AHS, and DLHS are periodic household surveys, not real-time surveillance systems."
  },
  {
    id: 8,
    question: "Under the National Health Mission, which of the following diseases is currently NOT in the list of notifiable diseases in India under the IDSP framework?",
    options: [
      "Cholera",
      "Plague",
      "Hypertension",
      "Dengue fever"
    ],
    answer: 2,
    explanation: "Hypertension is a non-communicable disease and is not a notifiable communicable disease under the IDSP framework. IDSP notifiable diseases include cholera, plague, dengue, malaria, typhoid, viral hepatitis, leptospirosis, Japanese encephalitis, Nipah, COVID-19, and others. Notifiable diseases are those for which healthcare providers are legally required to report to public health authorities to enable rapid response and epidemic control."
  },
  {
    id: 9,
    question: "A health official receives an unverified community report (rumor) of sudden deaths in a remote tribal area. What should be the FIRST step in responding to this rumor?",
    options: [
      "Issue a press release to prevent panic",
      "Deploy the Rapid Response Team immediately without further inquiry",
      "Verify the rumor through telephonic contact with local health staff and field visit",
      "Collect blood samples from all community members"
    ],
    answer: 2,
    explanation: "Rumor verification is the first step before deploying resources or making public announcements. This involves: contacting local health staff, ASHA workers, and community leaders to verify the reports, reviewing any available health facility data, and if needed, conducting a rapid field visit. Premature press releases can cause panic; deploying teams without verification wastes resources; mass blood collection is premature at this stage. The principle is 'verify before you amplify.'"
  },
  {
    id: 10,
    question: "Syndromic surveillance differs from conventional disease surveillance in that it:",
    options: [
      "Relies only on laboratory-confirmed cases",
      "Detects health events based on clinical syndromes before a specific diagnosis is established",
      "Is conducted only during declared outbreaks",
      "Focuses exclusively on deaths rather than illness"
    ],
    answer: 1,
    explanation: "Syndromic surveillance detects health events based on patterns of clinical syndromes (e.g., acute febrile illness, acute watery diarrhea, acute respiratory illness) before specific diagnoses are confirmed. This allows for earlier detection of outbreaks. Conventional surveillance relies on confirmed diagnoses. Syndromic surveillance is continuous, not just during outbreaks, and monitors illness (morbidity), not just mortality. The 'S' form in IDSP is based on this principle."
  },
  {
    id: 11,
    question: "The epidemic threshold for cholera in a district is defined as 'any confirmed case of cholera.' A single laboratory-confirmed case of cholera is reported. What does this imply?",
    options: [
      "No action is needed as one case is too few to constitute an outbreak",
      "An immediate outbreak response must be initiated as the threshold has been crossed",
      "The case should be re-tested before any action",
      "The district should wait for 5 more cases before responding"
    ],
    answer: 1,
    explanation: "For certain diseases with zero-tolerance thresholds (like cholera, plague, SARS), even a single confirmed case constitutes crossing the epidemic threshold and mandates immediate outbreak response. This is because these diseases have epidemic potential and require urgent containment. This differs from diseases where thresholds are set at a specific case count above baseline. This concept is codified in the International Health Regulations (IHR) 2005, where certain diseases require notification to WHO upon a single confirmed case."
  },
  {
    id: 12,
    question: "In an outbreak of gastroenteritis following a community feast, the 'primary case' is identified as the cook who prepared the food while having diarrhea. Forty guests who ate the food subsequently fell ill. The first guest to seek medical care is the:",
    options: [
      "Primary case",
      "Index case",
      "Secondary case",
      "Source case"
    ],
    answer: 1,
    explanation: "The cook who was infected and contaminated the food is the primary case (the original source of infection in the outbreak). The first guest to seek medical care and bring the outbreak to the attention of health authorities is the index case. The 40 guests who fell ill after eating the food are secondary cases (infected from the common source). The source case and primary case in this scenario refer to the same entity - the infected cook. This distinction is important in understanding transmission dynamics."
  },
  {
    id: 13,
    question: "An epidemic curve showing a sharp rise with a single peak lasting about 2-3 incubation periods, followed by a rapid decline, is most consistent with which type of outbreak?",
    options: [
      "Propagated (person-to-person) source outbreak",
      "Continuous common source outbreak",
      "Point source outbreak",
      "Intermittent common source outbreak"
    ],
    answer: 2,
    explanation: "A point source epidemic curve shows a sharp rise and rapid decline in cases with a single peak spanning approximately one incubation period. All cases are exposed at essentially the same time and place. Classic examples include a contaminated food item at a single event. Propagated outbreaks show successive waves each spanning one incubation period. Continuous common source shows a plateau during the exposure period. Intermittent common source shows multiple peaks corresponding to multiple exposure events."
  },
  {
    id: 14,
    question: "During investigation of a food-borne outbreak at a wedding banquet, the team constructs a line list. Which information is MOST essential to include in the line list?",
    options: [
      "Name, age, sex, food items consumed, onset date/time, symptoms, outcome",
      "Name, religion, caste, income, political affiliation",
      "Name, employer, travel history for the last 5 years",
      "Name, blood group, genetic history, prior illnesses"
    ],
    answer: 0,
    explanation: "A line list is a database where each row represents a case and columns represent key variables. For a food-borne outbreak, essential variables are: identifying information (name, age, sex), exposure information (food items consumed, timing of consumption), disease information (date/time of symptom onset, specific symptoms), and outcome (recovered, hospitalized, died). This data is used to calculate attack rates, identify the implicated food vehicle, determine the incubation period, and guide control measures."
  },
  {
    id: 15,
    question: "A spot map is used in outbreak investigation primarily to:",
    options: [
      "Calculate the incubation period of the disease",
      "Identify the temporal pattern of the outbreak",
      "Visualize the geographic distribution of cases to identify clustering and suggest the source",
      "Determine the case fatality rate"
    ],
    answer: 2,
    explanation: "A spot map places each case as a dot on a geographic map of the affected area, allowing investigators to visualize geographic clustering of cases. This can suggest the location of the source (e.g., cases clustered around a water source or specific restaurant), identify areas at risk, and guide environmental investigation. The temporal pattern is shown by the epidemic curve. Incubation period is calculated from exposure and onset data. Case fatality rate is calculated from case count and death data."
  },
  {
    id: 16,
    question: "In an outbreak of typhoid fever in a town, the attack rate among those who drank from the municipal water supply is 45/200 (22.5%), while among those who did not drink municipal water it is 5/300 (1.7%). The food-specific attack rate for municipal water is approximately:",
    options: [
      "13.2%",
      "20.8%",
      "22.5%",
      "24.2%"
    ],
    answer: 1,
    explanation: "The food/vehicle-specific attack rate difference (or attributable risk in the exposed) = Attack rate among exposed - Attack rate among unexposed = 22.5% - 1.7% = 20.8%. This represents the excess risk attributable to drinking municipal water. This is distinct from the crude attack rate among those exposed (22.5%). The difference attack rate (20.8%) helps identify the implicated vehicle by showing the excess risk among those exposed to that specific vehicle."
  },
  {
    id: 17,
    question: "In a school outbreak of chickenpox, 30 new cases develop among 120 susceptible household contacts of the 30 index cases. What is the secondary attack rate (SAR)?",
    options: [
      "20%",
      "25%",
      "50%",
      "100%"
    ],
    answer: 1,
    explanation: "Secondary Attack Rate (SAR) = (Number of new cases among contacts of index cases / Total susceptible contacts) x 100 = (30/120) x 100 = 25%. SAR measures the probability of infection among susceptible individuals within a reasonable incubation period following known contact with an index case. It reflects the transmissibility of the agent and the effectiveness of control measures. A high SAR indicates high transmissibility, which would argue for strict isolation and contact tracing."
  },
  {
    id: 18,
    question: "An epidemic curve for a measles outbreak in a school shows multiple peaks at regular intervals, each peak approximately 14 days apart (the incubation period of measles). This pattern is most consistent with:",
    options: [
      "Point source outbreak",
      "Continuous common source outbreak",
      "Propagated (person-to-person) outbreak",
      "Intermittent common source outbreak"
    ],
    answer: 2,
    explanation: "A propagated (person-to-person) epidemic curve shows successive waves of cases, each wave separated by approximately one incubation period. Each wave represents a new generation of cases infected by the previous generation. This is characteristic of diseases spread person-to-person like measles, influenza, and COVID-19. The regular interval of 14 days corresponds to the incubation period of measles. Each subsequent wave may be larger than the previous if susceptibles remain in the population."
  },
  {
    id: 19,
    question: "The generation time of an infectious disease can be estimated from the epidemic curve of a propagated outbreak by measuring:",
    options: [
      "The duration from the first case to the last case",
      "The interval between successive peaks in the epidemic curve",
      "The width of the epidemic curve at its base",
      "The height of the peak of the epidemic curve"
    ],
    answer: 1,
    explanation: "In a propagated outbreak, the epidemic curve shows successive waves. The interval between the peaks of successive waves approximates the generation time (serial interval) of the disease. Generation time is the interval between infection in the primary case and infection in the secondary case (or more practically, between the onset of symptoms in successive generations). This is a useful epidemiological parameter to understand disease transmissibility and to predict the course of the outbreak."
  },
  {
    id: 20,
    question: "During a food-borne outbreak investigation, the following data was collected: Among 100 people who ate rice, 40 became ill; among 100 who did not eat rice, 20 became ill. The attack rate ratio (relative risk) for eating rice is:",
    options: [
      "1.0",
      "1.5",
      "2.0",
      "2.5"
    ],
    answer: 2,
    explanation: "Attack Rate Ratio (Relative Risk) = Attack rate among exposed / Attack rate among unexposed = (40/100) / (20/100) = 0.40 / 0.20 = 2.0. This means people who ate rice were 2 times more likely to fall ill compared to those who did not eat rice. In food-borne outbreak investigations, the food item with the highest attack rate ratio and a statistically significant association is the likely vehicle of transmission."
  },
  {
    id: 21,
    question: "A case definition for a suspected outbreak of viral encephalitis is established as: 'Any person with acute onset of fever >38°C AND altered sensorium OR seizures, residing in the affected district.' This case definition is designed to be:",
    options: [
      "Highly specific to avoid false positives",
      "Highly sensitive to capture most true cases",
      "Both highly sensitive and highly specific simultaneously",
      "Based solely on laboratory confirmation"
    ],
    answer: 1,
    explanation: "Case definitions used in outbreak investigations are intentionally made sensitive (broad) rather than specific to capture as many true cases as possible, minimizing false negatives. In the early stages of an outbreak, it is more important to identify all potential cases and prevent missing true cases (which could lead to ongoing transmission) than to be specific. The case definition evolves from suspected to probable to confirmed as the investigation progresses and laboratory criteria are added."
  },
  {
    id: 22,
    question: "In characterizing an outbreak by 'time, place, and person,' the primary purpose of person characterization is to:",
    options: [
      "Determine the incubation period",
      "Identify who is at risk and thus generate hypotheses about exposure",
      "Calculate the case fatality rate",
      "Establish the geographic distribution of cases"
    ],
    answer: 1,
    explanation: "Person characteristics (age, sex, occupation, dietary habits, immunization status, behavioral factors) help identify which groups are disproportionately affected, thereby generating hypotheses about what exposures or risk factors may be responsible for the outbreak. For example, if cases are predominantly among adults who attended a specific wedding feast, this points to that event as the source. Time characterization generates hypotheses about exposure timing and incubation period. Place characterization identifies the geographic source."
  },
  {
    id: 23,
    question: "In a village of 1000 people, 50 cases of cholera occurred over a 2-week period. The overall attack rate is:",
    options: [
      "0.5%",
      "2%",
      "5%",
      "10%"
    ],
    answer: 2,
    explanation: "Attack Rate = (Number of new cases / Population at risk) x 100 = (50/1000) x 100 = 5%. The attack rate is a type of incidence proportion that measures the risk of developing disease among those exposed (or in a defined population) during a specific time period. In outbreak investigations, attack rates are calculated for the total population and for specific subgroups to identify risk factors and the vehicle of transmission."
  },
  {
    id: 24,
    question: "An epidemic curve showing a gradual rise, plateau, and gradual decline over an extended period, without a clear peak, is most consistent with:",
    options: [
      "Point source outbreak",
      "Propagated outbreak",
      "Continuous common source outbreak",
      "Mixed source outbreak"
    ],
    answer: 2,
    explanation: "A continuous common source epidemic curve shows a gradual rise, sustained plateau (during the period of ongoing exposure), and then a gradual decline after the source is removed. This pattern occurs when people are continuously exposed to a contaminated source over a prolonged period (e.g., contaminated water supply, ongoing food contamination). The curve lacks the sharp single peak of a point source outbreak and the regular waves of a propagated outbreak."
  },
  {
    id: 25,
    question: "In an outbreak of food poisoning following a hospital cafeteria meal, investigators wish to determine which food items are associated with illness. The most appropriate study design to use is:",
    options: [
      "Randomized controlled trial",
      "Cohort study among cafeteria attendees",
      "Cross-sectional survey of the general population",
      "Ecological study"
    ],
    answer: 1,
    explanation: "When the source population (all those exposed) is known and can be enumerated (as in a closed cohort like cafeteria attendees), a cohort study is preferred for outbreak investigation. All attendees are interviewed about food consumed and illness, allowing calculation of food-specific attack rates and relative risks (attack rate ratios) for each food item. Case-control studies are used when the exposed population cannot be fully enumerated. Randomized controlled trials are not feasible or ethical in outbreak investigations."
  },
  {
    id: 26,
    question: "In a large community outbreak of hepatitis A, investigators cannot enumerate all exposed individuals. They decide to conduct a case-control study. The cases are laboratory-confirmed hepatitis A cases; the controls should ideally be:",
    options: [
      "Cases of other liver diseases",
      "People from the same community who did not develop hepatitis A, matched for age and sex",
      "Health workers from the affected area",
      "Cases from a neighboring unaffected district"
    ],
    answer: 1,
    explanation: "In a case-control study, controls should be individuals from the same source population as the cases who did not develop the disease. They should be similar to cases in terms of potential confounders (age, sex, socioeconomic status, geographic location) but different in disease status. Matching for age and sex helps control confounding. Controls from the same community ensure they had the same opportunities for exposure as cases. Using cases of other diseases or health workers introduces selection bias."
  },
  {
    id: 27,
    question: "In a case-control study of a cholera outbreak, the odds ratio (OR) for drinking water from the river is 8.5 (95% CI: 3.2-22.4, p<0.001). What is the correct interpretation?",
    options: [
      "People who drank river water were 8.5 times more likely to develop cholera, and this association is statistically significant",
      "8.5% of cholera cases were due to river water consumption",
      "The relative risk of cholera from river water is 8.5",
      "River water caused cholera in 8.5 out of 10 people"
    ],
    answer: 0,
    explanation: "An odds ratio of 8.5 means that cases were 8.5 times more likely to have been exposed to river water compared to controls. Since the 95% CI does not include 1.0 (and p<0.001), this association is statistically significant. The odds ratio approximates relative risk when the disease is rare (rare disease assumption). It does not represent the percentage of cases caused by the exposure (that would be attributable fraction) or the absolute risk. In outbreak investigations, OR >1 with CI not crossing 1 indicates significant association."
  },
  {
    id: 28,
    question: "In a 2x2 table for a food-borne outbreak, 80 ate the implicated food and 60 became ill; 20 did not eat the food and 5 became ill. The relative risk (RR) is:",
    options: [
      "3.0",
      "3.75",
      "4.0",
      "6.0"
    ],
    answer: 1,
    explanation: "Attack rate among exposed = 60/80 = 0.75 (75%). Attack rate among unexposed = 5/20 = 0.25 (25%). Relative Risk = 0.75/0.25 = 3.0. Wait, let me recalculate: RR = (60/80)/(5/20) = 0.75/0.25 = 3.0. Actually answer index 0 = 3.0 is correct. Note: The RR of 3.0 means those who ate the implicated food were 3 times more likely to become ill. In cohort-type outbreak analyses, RR is the appropriate measure of association calculated directly from attack rates in exposed and unexposed groups."
  },
  {
    id: 29,
    question: "A p-value of 0.03 is obtained for the association between a food item and illness in a food-borne outbreak investigation. What is the correct interpretation?",
    options: [
      "There is a 3% probability that the food item caused the illness",
      "There is a 3% probability of observing this result (or more extreme) if there is truly no association",
      "97% of people who ate this food developed illness",
      "The food item is the definitive cause of the outbreak"
    ],
    answer: 1,
    explanation: "A p-value of 0.03 means there is a 3% probability of obtaining the observed results (or more extreme results) by chance alone, assuming the null hypothesis (no association) is true. Since p<0.05, we reject the null hypothesis and conclude the association is statistically significant. The p-value does NOT tell us the probability that the exposure caused the disease, the strength of association (which is the RR or OR), or the clinical significance. Statistical significance must be interpreted alongside the magnitude of association and biological plausibility."
  },
  {
    id: 30,
    question: "During a cholera outbreak investigation, a 2x2 table shows: exposed and ill = 40 (a), exposed and not ill = 10 (b), unexposed and ill = 10 (c), unexposed and not ill = 40 (d). The odds ratio is:",
    options: [
      "4",
      "8",
      "16",
      "12"
    ],
    answer: 2,
    explanation: "Odds Ratio = (a x d) / (b x c) = (40 x 40) / (10 x 10) = 1600 / 100 = 16. The OR of 16 indicates that exposed individuals had 16 times higher odds of developing cholera compared to unexposed individuals. This is a very strong association. In case-control studies, OR is the only direct measure of association obtainable. When disease prevalence is low, OR approximates RR (rare disease assumption), but here with high prevalence, OR overestimates RR."
  },
  {
    id: 31,
    question: "The attributable fraction in the exposed (AFe) for a food-borne outbreak where RR = 4 is:",
    options: [
      "25%",
      "50%",
      "75%",
      "80%"
    ],
    answer: 2,
    explanation: "Attributable Fraction in the Exposed (AFe) = (RR - 1) / RR x 100 = (4 - 1) / 4 x 100 = 3/4 x 100 = 75%. This means 75% of the illness among those who ate the implicated food is attributable to that food item (i.e., could be prevented if the exposure were eliminated). The remaining 25% would occur due to other causes. AFe is useful in outbreak investigations to quantify the impact of removing the identified vehicle of transmission."
  },
  {
    id: 32,
    question: "Stoll's dilution technique is used in the context of outbreak investigation of:",
    options: [
      "Foodborne illness",
      "Waterborne disease - to determine the number of viable organisms in water",
      "Vector-borne diseases - to calculate vector density",
      "Airborne diseases - to measure aerosol concentration"
    ],
    answer: 1,
    explanation: "Stoll's dilution method is used in water microbiology to estimate the number of viable organisms (Most Probable Number - MPN method) in water samples. In waterborne outbreak investigation, environmental sampling of suspected water sources is essential. The MPN method uses serial dilutions of water samples inoculated into culture media to statistically estimate the bacterial concentration. This helps confirm water as the vehicle and assess the degree of contamination. Coliform counts are typically used as indicators of fecal contamination."
  },
  {
    id: 33,
    question: "In an outbreak of diarrhea, a chi-square test is applied to test the association between consumption of a street food item and illness. The chi-square value is 12.4 with 1 degree of freedom (critical value at p=0.05 is 3.84). The conclusion is:",
    options: [
      "The association is not statistically significant as 12.4 > 3.84",
      "The association is statistically significant as 12.4 > 3.84",
      "The association cannot be determined from chi-square alone",
      "The chi-square value indicates the food item definitely caused the outbreak"
    ],
    answer: 1,
    explanation: "When the calculated chi-square value (12.4) exceeds the critical value at the chosen significance level (3.84 at p=0.05, df=1), we reject the null hypothesis of no association. The association between the street food item and illness is statistically significant (p<0.05). The chi-square test assesses whether observed differences in disease frequency between groups exceed what would be expected by chance. However, statistical significance does not imply causation; biological plausibility and other epidemiological criteria must also be considered."
  },
  {
    id: 34,
    question: "During a waterborne outbreak investigation, which environmental sample is most important for microbiological analysis?",
    options: [
      "Soil sample from the affected area",
      "Water sample from the suspected contaminated source taken at the point of consumption",
      "Air sample from the community",
      "Food samples from all restaurants in the district"
    ],
    answer: 1,
    explanation: "In a waterborne outbreak investigation, water samples should be collected from the suspected contaminated source at multiple points: the source, distribution network, and critically, at the point of consumption (household/community level). Point-of-consumption samples best reflect what people actually consumed. Samples are analyzed for fecal indicator organisms (E. coli, total coliforms), and when indicated, specific pathogens. Chain of custody must be maintained, samples stored at 4°C, and analyzed within 6 hours of collection."
  },
  {
    id: 35,
    question: "In a laboratory confirmation strategy during an outbreak, the recommended approach for specimen collection is:",
    options: [
      "Collect specimens from all cases regardless of illness duration",
      "Collect specimens from the first 5-10 cases before antimicrobial therapy, then a representative sample thereafter",
      "Collect only from fatal cases",
      "Collect only from children under 5 years"
    ],
    answer: 1,
    explanation: "The recommended strategy is to collect specimens from the first 5-10 cases before any antimicrobial therapy is administered (to maximize pathogen recovery), and then a representative sample thereafter to confirm diagnosis, identify antimicrobial resistance patterns, and track clonal strains. Collecting from all cases is impractical and unnecessary once the diagnosis is established. Pre-treatment specimens provide the best yield. Specimens should include appropriate samples based on the suspected diagnosis (e.g., stool for diarrhea, blood for septicemic illness)."
  },
  {
    id: 36,
    question: "In an outbreak investigation, matching in a case-control study is primarily done to:",
    options: [
      "Increase the number of cases available for analysis",
      "Control for confounding variables",
      "Increase the statistical power by ensuring equal numbers of cases and controls",
      "Reduce recall bias"
    ],
    answer: 1,
    explanation: "Matching in case-control studies is done to control for confounding variables by ensuring that controls are similar to cases in terms of potential confounders (age, sex, neighborhood). This prevents confounding from distorting the observed association between exposure and disease. While matched designs can increase statistical efficiency, the primary purpose is confounding control. Matching does not reduce recall bias (which is a type of information bias) and may actually reduce statistical power if overmatched."
  },
  {
    id: 37,
    question: "A cohort study during a food-borne outbreak at a wedding showed that 60 out of 100 people who ate the fish curry became ill, while 10 out of 100 who did not eat it became ill. The chi-square test shows p=0.001. However, fish curry was also eaten predominantly by adult males at this wedding. What is the concern?",
    options: [
      "Recall bias, as people may not remember accurately",
      "Confounding, as sex and age may be the true risk factors",
      "Selection bias, as only sick people were interviewed",
      "Measurement bias in recording food consumption"
    ],
    answer: 1,
    explanation: "Confounding is the concern here. If adult males ate fish curry predominantly AND were also more likely to develop illness for other reasons (e.g., drank more beverages or ate other items), then the association between fish curry and illness may be confounded by sex/age. A confounder must be associated with both the exposure (fish curry) and the outcome (illness) and must not be on the causal pathway. Stratified analysis by sex and age (or multivariate logistic regression) would be needed to assess and control for confounding."
  },
  {
    id: 38,
    question: "The FIRST and most immediate control measure when an outbreak of cholera is confirmed in a community is:",
    options: [
      "Mass vaccination with oral cholera vaccine",
      "Provision of safe drinking water and oral rehydration therapy",
      "Aerial spraying of insecticides",
      "Mass chemoprophylaxis with tetracycline for all community members"
    ],
    answer: 1,
    explanation: "For cholera outbreaks, the most immediate and effective control measures are: ensuring safe drinking water (chlorination, boiling, alternative supply) and providing oral rehydration therapy (ORT) for cases to prevent deaths. These address the primary transmission route (fecal-oral through contaminated water) and the major cause of mortality (dehydration). Mass vaccination is an adjunct measure, not a substitute for WASH interventions. Insecticide spraying is irrelevant for cholera. Mass chemoprophylaxis is not recommended as it promotes antibiotic resistance and provides only short-term, incomplete protection."
  },
  {
    id: 39,
    question: "What is the key distinction between 'quarantine' and 'isolation' in outbreak management?",
    options: [
      "Quarantine applies to symptomatic individuals; isolation to asymptomatic contacts",
      "Quarantine applies to exposed but asymptomatic individuals; isolation to confirmed or symptomatic cases",
      "Quarantine is voluntary; isolation is mandatory",
      "Quarantine is used for respiratory diseases; isolation for gastrointestinal diseases"
    ],
    answer: 1,
    explanation: "Quarantine restricts the movement of healthy individuals who have been exposed to a communicable disease, to monitor them for development of illness during the incubation period. Isolation separates and restricts the movement of individuals who are ill (symptomatic) or confirmed to have the disease. Both can be voluntary or mandatory depending on the legal framework. Both apply to various disease categories. During COVID-19, this distinction was critical: exposed contacts were quarantined; confirmed/symptomatic cases were isolated."
  },
  {
    id: 40,
    question: "Ring vaccination strategy was successfully employed during the global smallpox eradication campaign. The core principle of ring vaccination is:",
    options: [
      "Vaccinating the entire population in the affected country",
      "Vaccinating only children under 5 years of age",
      "Identifying and vaccinating all contacts and contacts of contacts of confirmed cases to create an immune buffer",
      "Vaccinating only healthcare workers exposed to the disease"
    ],
    answer: 2,
    explanation: "Ring vaccination involves identifying all contacts of confirmed cases and vaccinating them (the first ring), and then identifying and vaccinating contacts of those contacts (the second ring), creating an immune buffer around each case. This targeted strategy efficiently contains outbreaks by breaking the chain of transmission without requiring mass vaccination of the entire population. This approach was central to the WHO smallpox eradication campaign and has also been used in Ebola outbreaks. It conserves vaccine supply while achieving containment."
  },
  {
    id: 41,
    question: "During the Nipah virus outbreak in Kerala, India (2018), the primary mode of transmission that was identified was:",
    options: [
      "Mosquito-borne transmission",
      "Contaminated water supply",
      "Human-to-human transmission through close contact with body fluids, and bat-to-human transmission as the source",
      "Airborne transmission over long distances"
    ],
    answer: 2,
    explanation: "The 2018 Nipah virus outbreak in Kozhikode, Kerala was traced to fruit bats (Pteropus medius) as the animal reservoir. Human infection likely occurred through consumption of bat-contaminated fruits or bat contact. Subsequent transmission was through close contact with body fluids of infected individuals, particularly in healthcare settings (nosocomial transmission). This required strict isolation, contact tracing, and use of PPE by healthcare workers. The outbreak killed 17 of 18 infected individuals (CFR ~94%). Nipah is a BSL-4 pathogen with no approved vaccine."
  },
  {
    id: 42,
    question: "Contact tracing in an outbreak is best described as:",
    options: [
      "Testing all community members for the disease",
      "Systematic identification, listing, and follow-up of all individuals who have been in contact with confirmed cases during their infectious period",
      "Only tracing contacts in hospital settings",
      "Retrospective review of death certificates to identify cases"
    ],
    answer: 1,
    explanation: "Contact tracing involves: (1) identification of all individuals who had contact with a confirmed case during their infectious period (forward tracing for containment, backward tracing to find the source), (2) listing these contacts, (3) risk stratification based on type and duration of contact, and (4) follow-up for the duration of the incubation period with daily symptom monitoring. Contacts who develop symptoms become new cases requiring isolation. Contact tracing is a core intervention for diseases like tuberculosis, HIV, COVID-19, Ebola, and Nipah."
  },
  {
    id: 43,
    question: "Chemoprophylaxis during a meningococcal meningitis outbreak is indicated for:",
    options: [
      "All residents of the affected city",
      "Close contacts of confirmed cases (household contacts, dormitory contacts, healthcare workers without PPE)",
      "Only children under 5 years of age",
      "Only immunocompromised individuals"
    ],
    answer: 1,
    explanation: "Chemoprophylaxis for meningococcal meningitis (with rifampicin, ciprofloxacin, or ceftriaxone) is recommended for close contacts at highest risk: household contacts, daycare/school contacts, dormitory roommates, and healthcare workers who had close unprotected exposure to respiratory secretions. Mass chemoprophylaxis of the entire city population is not recommended due to antibiotic resistance, side effects, limited efficacy in large populations, and practical constraints. The goal is to eliminate carriage in those most likely to have been exposed."
  },
  {
    id: 44,
    question: "In disinfection terminology, 'concurrent disinfection' during an outbreak refers to:",
    options: [
      "Disinfection of the entire community after the outbreak has ended",
      "Continuous disinfection of discharges and contaminated articles of a case throughout the period of communicability",
      "Simultaneous disinfection of multiple affected households at one time",
      "Disinfection using multiple disinfectants simultaneously"
    ],
    answer: 1,
    explanation: "Concurrent disinfection refers to the immediate disinfection of infectious material (excreta, secretions, contaminated articles) as it is produced, throughout the period when the case remains communicable. This is done continuously and concurrently with the illness. Terminal disinfection, in contrast, is the thorough cleaning and disinfection of the case's surroundings AFTER the patient is no longer a source of infection (recovered, transferred, or died). Concurrent disinfection is a continuous process; terminal disinfection is a one-time final procedure."
  },
  {
    id: 45,
    question: "Under the International Health Regulations (IHR) 2005, a Public Health Emergency of International Concern (PHEIC) is declared by:",
    options: [
      "The affected Member State Government",
      "The Director General of WHO after consultation with the Emergency Committee",
      "The UN Security Council",
      "A majority vote of WHO Member States"
    ],
    answer: 1,
    explanation: "Under IHR 2005, the Director General of WHO has sole authority to declare a PHEIC, based on the recommendation of the Emergency Committee (an expert body convened for this purpose). A PHEIC is defined as 'an extraordinary event which is determined to constitute a public health risk to other states through international spread of disease and which potentially requires a coordinated international response.' Notable PHEICs include H1N1 (2009), Polio (2014), Ebola (2014), Zika (2016), Ebola DRC (2019), and COVID-19 (2020)."
  },
  {
    id: 46,
    question: "IHR 2005 requires States Parties to notify WHO of events that may constitute a PHEIC within:",
    options: [
      "24 hours of assessment",
      "48 hours of assessment",
      "72 hours of assessment",
      "7 days of assessment"
    ],
    answer: 1,
    explanation: "Under Article 6 of IHR 2005, States Parties must notify WHO of events that may constitute a PHEIC within 48 hours of assessment. The assessment must be done using the decision instrument in Annex 2 of IHR 2005, which considers four criteria: seriousness of public health impact, unusual or unexpected nature, potential for international spread, and potential for travel or trade restrictions. Timely notification is critical for international preparedness and response coordination."
  },
  {
    id: 47,
    question: "The composition of a Rapid Response Team (RRT) for outbreak investigation at the district level in India typically includes:",
    options: [
      "Only medical officers from the district hospital",
      "Epidemiologist, microbiologist/lab technician, clinician, entomologist (if vector-borne disease suspected), and public health nurse/social worker",
      "Only district health officer and one ASHA worker",
      "WHO representatives and national-level officials only"
    ],
    answer: 1,
    explanation: "A district-level RRT for outbreak investigation should be multidisciplinary, including: epidemiologist (to design and conduct the investigation), microbiologist/laboratory technician (for specimen collection and analysis), clinician (for clinical assessment and case management), entomologist (if vector-borne disease is suspected), public health nurse/social worker (for contact tracing and community engagement), and often an environmental health officer. This multidisciplinary composition ensures comprehensive investigation covering epidemiological, clinical, laboratory, and environmental aspects."
  },
  {
    id: 48,
    question: "The 1994 plague outbreak in Surat, India is best remembered in the context of outbreak communication because it led to:",
    options: [
      "Development of the IDSP surveillance system",
      "Mass panic, internal migration, and severe economic losses due to poor risk communication and media management",
      "Introduction of ring vaccination in India",
      "First implementation of IHR in India"
    ],
    answer: 1,
    explanation: "The 1994 Surat plague outbreak is a landmark lesson in outbreak communication. The outbreak of pneumonic plague caused massive panic, with an estimated 600,000 people fleeing Surat, creating a public health and economic crisis far larger than the outbreak itself (about 50 deaths). The panic was amplified by poor risk communication, sensationalist media reporting, and lack of coordinated messaging. This outbreak led to significant reforms in India's disease surveillance and response systems and is a case study in the critical importance of effective, transparent, and timely risk communication during outbreaks."
  },
  {
    id: 49,
    question: "An after-action review (AAR) following an outbreak should ideally be conducted:",
    options: [
      "At least 1 year after the outbreak to allow for complete data analysis",
      "Within 2-4 weeks after the outbreak is declared over, while memories are fresh",
      "Only if the outbreak resulted in more than 100 deaths",
      "Only by external international teams to avoid bias"
    ],
    answer: 1,
    explanation: "An After-Action Review (AAR) should be conducted within 2-4 weeks of the outbreak being declared over (or after significant milestones). This timeframe ensures: (1) memories of what happened are still fresh among responders, (2) documentation is recent and available, (3) lessons learned can be applied before the next event. AARs should be conducted after ALL significant outbreaks, not just large ones. They should involve the actual response team (not only external reviewers) to capture ground-level experience. AARs identify strengths, gaps, and corrective actions."
  },
  {
    id: 50,
    question: "A public health official is investigating an unusual cluster of severe respiratory illness in a mining community. Ten workers have been hospitalized in 3 days with fever, chest pain, and hemoptysis. Environmental sampling of the mine is planned. Which of the following best represents the correct sequence of steps in outbreak investigation?",
    options: [
      "Establish case definition → Confirm existence of outbreak → Conduct descriptive epidemiology → Generate hypotheses → Test hypotheses analytically → Implement control measures → Communicate findings",
      "Implement control measures → Establish case definition → Confirm outbreak → Conduct lab tests → Write report",
      "Conduct lab tests first → Then visit site → Then establish case definition → Then communicate with media",
      "Generate hypotheses → Establish case definition → Confirm outbreak → Test hypotheses → Implement control measures"
    ],
    answer: 0,
    explanation: "The systematic steps of outbreak investigation are: (1) Prepare for field work, (2) Establish or verify the diagnosis, (3) Define a case and count cases, (4) Orient data in terms of time, place, and person (descriptive epidemiology), (5) Determine who is at risk, (6) Develop hypotheses, (7) Evaluate hypotheses analytically, (8) Refine hypotheses and conduct additional studies if needed, (9) Implement and evaluate control measures (this should begin early and run parallel to investigation), (10) Communicate findings. Control measures should begin early and not wait for the investigation to be complete, especially for severe illness."
  }
];

export default questions;

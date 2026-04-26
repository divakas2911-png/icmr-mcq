const questions = [
  {
    id: 1,
    question: "Which of the following best defines an 'epidemic' in epidemiological terms?",
    options: [
      "A disease present at a constant level in a population at all times",
      "The occurrence of disease in a community or region clearly in excess of normal expectancy",
      "A disease that has spread to multiple countries or continents",
      "Any occurrence of an infectious disease in a new geographic area"
    ],
    answer: 1,
    explanation: "An epidemic is defined as the occurrence of disease cases in a community or region clearly in excess of normal expectancy. Endemic refers to constant baseline presence. Pandemic refers to worldwide spread. A disease appearing in a new area is not automatically an epidemic unless it exceeds expected levels."
  },
  {
    id: 2,
    question: "The Integrated Disease Surveillance Programme (IDSP) in India collects data through three reporting forms. Which combination correctly identifies the reporters for each form?",
    options: [
      "S form by doctors, P form by community workers, L form by hospitals",
      "S form by community health workers and ANMs, P form by doctors at health facilities, L form by laboratories",
      "S form by laboratories, P form by community workers, L form by district hospitals",
      "S form by medical colleges, P form by PHC doctors, L form by state labs only"
    ],
    answer: 1,
    explanation: "IDSP uses three reporting channels: S (Syndromic) forms are filled by community health workers, ASHAs, and ANMs reporting symptom clusters; P (Presumptive) forms are filled by doctors at PHCs, CHCs, and hospitals based on clinical diagnosis; L (Laboratory) forms are filled by district and sub-district laboratories with confirmed diagnostic results. This layered structure enables early detection through syndromic data while building toward laboratory confirmation."
  },
  {
    id: 3,
    question: "The Integrated Health Information Platform (IHIP) is best described as:",
    options: [
      "A periodic national household survey conducted every five years",
      "The upgraded digital real-time web-based surveillance platform that replaced the older IDSP portal",
      "A WHO-mandated reporting system for PHEIC notifications",
      "A laboratory network for confirmatory testing of notifiable diseases"
    ],
    answer: 1,
    explanation: "IHIP is the digitized, real-time upgrade of the earlier IDSP web portal. It enables entry of S, P, and L forms at the district level, provides automated dashboards for tracking notifiable disease trends, generates outbreak alerts, and supports monitoring from district to national level. It is distinct from periodic surveys like NFHS or DLHS, which are not real-time surveillance tools."
  },
  {
    id: 4,
    question: "Which of the following diseases mandates immediate notification to health authorities upon even a single confirmed case, because its epidemic threshold is set at zero?",
    options: [
      "Dengue fever",
      "Acute diarrheal disease",
      "Cholera",
      "Influenza-like illness"
    ],
    answer: 2,
    explanation: "Cholera has a zero-tolerance epidemic threshold, meaning a single laboratory-confirmed case requires immediate notification and outbreak response. The same applies to plague, SARS, and other IHR Annex 2 diseases. Dengue and influenza-like illness have thresholds based on case counts above baseline. Acute diarrheal disease is monitored in aggregate. Zero-threshold diseases have high epidemic potential and international spread risk, justifying immediate action."
  },
  {
    id: 5,
    question: "The 'alert threshold' in disease surveillance differs from the 'epidemic threshold' in that the alert threshold:",
    options: [
      "Confirms the existence of an epidemic requiring national emergency declaration",
      "Is set at a lower level to trigger heightened surveillance and preparedness before an epidemic is confirmed",
      "Is used exclusively by WHO and not by national surveillance systems",
      "Applies only to vector-borne diseases with seasonal variation"
    ],
    answer: 1,
    explanation: "The alert threshold is a predefined signal level set below the epidemic threshold. When crossed, it triggers heightened surveillance, investigation, and preparedness without confirming a full epidemic. It allows early action to prevent progression. The epidemic threshold, when crossed, confirms an outbreak and mandates a full response. Two-threshold systems (alert and action) are used in IDSP-based district surveillance in India."
  },
  {
    id: 6,
    question: "In an outbreak of jaundice in a village, a community health worker first reports five cases to the district health office. Investigators later identify that one of these five cases was actually the source of infection for the others. The first case reported to health authorities is the:",
    options: [
      "Primary case",
      "Index case",
      "Source case",
      "Secondary case"
    ],
    answer: 1,
    explanation: "The index case is the first identified case that triggers investigation and brings the outbreak to the attention of public health authorities. The primary case is the first person actually infected in a transmission chain, who may differ from the index case. The source case is the origin of infection for others. In this scenario, the first case reported by the community health worker is the index case, while the case identified as the infection source is the primary (source) case."
  },
  {
    id: 7,
    question: "Event-based surveillance (EBS) is differentiated from indicator-based surveillance (IBS) primarily because EBS:",
    options: [
      "Uses only laboratory-confirmed data from sentinel hospitals",
      "Captures informal, unstructured signals from media, community reports, and internet-based sources for early warning",
      "Is mandated under IHR 2005 as the primary national reporting mechanism",
      "Requires standardized case definitions before any data can be recorded"
    ],
    answer: 1,
    explanation: "Event-based surveillance (EBS) captures unstructured signals from informal sources such as media scanning, community informants, social media monitoring, and rumor tracking systems. It enables detection of novel or unexpected health events earlier than structured indicator-based surveillance. IBS uses standardized case definitions and formal reporting through health facility systems. Both are complementary components of a comprehensive national surveillance system."
  },
  {
    id: 8,
    question: "Syndromic surveillance contributes to early outbreak detection by:",
    options: [
      "Providing etiological confirmation of the causative pathogen before clinical assessment",
      "Monitoring trends in pre-diagnostic clinical syndromes to detect unusual increases before laboratory diagnosis is available",
      "Replacing conventional case-based surveillance for all notifiable diseases",
      "Calculating the epidemic threshold for each district based on historical mortality data"
    ],
    answer: 1,
    explanation: "Syndromic surveillance tracks trends in clinical syndromes (e.g., acute febrile illness, acute diarrheal disease, acute respiratory illness) using data from pharmacies, emergency departments, and community health workers. This enables detection of outbreak signals before specific diagnoses or laboratory confirmation are available, allowing earlier public health response. The S form in IDSP embodies this principle at the community level."
  },
  {
    id: 9,
    question: "WHO's Disease Outbreak News (DON) serves which primary function in global outbreak surveillance?",
    options: [
      "Declaring Public Health Emergencies of International Concern (PHEIC) on behalf of member states",
      "Providing timely, publicly accessible information about disease outbreaks and events of potential international public health significance",
      "Mandating travel restrictions for countries with active outbreaks",
      "Replacing member states' obligation to notify WHO under IHR 2005"
    ],
    answer: 1,
    explanation: "WHO's Disease Outbreak News (DON) is a publicly accessible online information resource that provides verified, timely information on disease outbreaks and public health events globally. It is separate from the PHEIC declaration process, which requires the Director-General's decision based on Emergency Committee recommendations. DON supports global situational awareness and does not override national notification obligations under IHR 2005."
  },
  {
    id: 10,
    question: "Upon receiving a rumor of mass illness from a remote area, the correct first action in the verification process is to:",
    options: [
      "Deploy a Rapid Response Team immediately without waiting for details",
      "Contact the reporting source to collect basic information: who, what, when, where, and how many",
      "Issue a public health advisory to prevent community panic",
      "Send laboratory kits to the area before assessing the situation"
    ],
    answer: 1,
    explanation: "The first step in rumor verification is contacting the source (ASHA, ANM, medical officer, media reporter) to collect preliminary information: who is affected (age, sex, community), what symptoms are present, when cases began, where they are located, and how many are affected. This initial information determines whether field investigation is warranted. Deploying teams or issuing public advisories without verification wastes resources and may cause unnecessary alarm."
  },
  {
    id: 11,
    question: "IDSP weekly surveillance reports are monitored for unusual disease increases using which statistical approach?",
    options: [
      "Cox proportional hazards regression comparing case rates over time",
      "Control chart method comparing current week cases against mean plus two standard deviations from the same week in prior years",
      "Receiver operating characteristic (ROC) curve to optimize sensitivity and specificity",
      "Interrupted time series analysis using ARIMA modelling"
    ],
    answer: 1,
    explanation: "IDSP uses a control chart approach where the current week's case counts are compared against a threshold derived from historical data for the same epidemiological week in previous years (typically mean plus two standard deviations). Counts exceeding this threshold generate an alert for investigation. This method accounts for seasonal variation by using the same calendar week from past years as the reference, rather than an overall average."
  },
  {
    id: 12,
    question: "A disease that is consistently present at a predictable level in a defined population year-round is described as:",
    options: [
      "Epidemic",
      "Pandemic",
      "Endemic",
      "Sporadic"
    ],
    answer: 2,
    explanation: "An endemic disease is one that is consistently present at a stable, predictable baseline level within a defined geographic area or population. An epidemic occurs when cases exceed this expected baseline. A pandemic is a geographically widespread epidemic affecting multiple countries or continents. Sporadic describes occasional, irregular, isolated cases with no predictable pattern. The endemic level serves as the reference baseline against which excess cases (i.e., an epidemic) are measured."
  },
  {
    id: 13,
    question: "A foodborne outbreak at a restaurant results in 80 ill persons, all of whom ate lunch between 12:00 and 13:00 on the same day. The epidemic curve shows cases beginning 2 hours after the meal and peaking at 4 hours, with a rapid decline by 8 hours. This pattern is MOST consistent with:",
    options: [
      "Propagated person-to-person transmission",
      "Continuous common-source exposure over multiple days",
      "Point-source exposure from a single brief exposure event",
      "Intermittent common-source exposure from a recurring contamination"
    ],
    answer: 2,
    explanation: "A point-source epidemic curve is characterized by a rapid rise, a single well-defined peak, and a rapid fall, consistent with all cases sharing a single brief exposure event (the contaminated lunch). The short incubation period (2-4 hours) suggests a preformed toxin (e.g., Staphylococcal enterotoxin or Bacillus cereus emetic toxin). In a propagated outbreak there would be successive peaks; continuous source would show a prolonged plateau; intermittent source would show multiple separate peaks."
  },
  {
    id: 14,
    question: "An epidemic curve of a measles outbreak shows three successive peaks at approximately 10-12 day intervals, corresponding to the measles incubation period. This pattern is characteristic of:",
    options: [
      "Point-source outbreak from a single exposure event",
      "Continuous common-source outbreak from an ongoing contaminated source",
      "Propagated outbreak with person-to-person transmission generating successive case generations",
      "Intermittent common-source outbreak from periodic contamination events"
    ],
    answer: 2,
    explanation: "A propagated epidemic curve shows successive waves of cases, each separated by approximately one incubation period of the disease, representing successive generations of person-to-person transmission. Each wave arises from cases infecting susceptibles in the previous generation. Measles, with its 10-12 day incubation period, produces this characteristic multi-peak pattern. This differs from point-source (single peak), continuous source (prolonged plateau), and intermittent source (multiple unequally spaced peaks) patterns."
  },
  {
    id: 15,
    question: "An epidemic curve showing a gradual rise over two weeks, a sustained plateau for three weeks, and then a gradual decline after a contaminated water supply was repaired is consistent with:",
    options: [
      "Point-source outbreak",
      "Propagated outbreak",
      "Intermittent common-source outbreak",
      "Continuous common-source outbreak"
    ],
    answer: 3,
    explanation: "A continuous common-source epidemic curve shows a gradual increase during the period when the source is becoming established, a sustained plateau during ongoing exposure, and a gradual decline after the source is removed or controlled. This pattern is typical of contaminated water supplies, continuous food contamination, or other persistent environmental sources. The duration of the plateau corresponds to the duration of the ongoing exposure, distinguishing it from the sharp single peak of a point-source outbreak."
  },
  {
    id: 16,
    question: "A line listing (line list) in an outbreak investigation is BEST described as:",
    options: [
      "A list of all health facilities in the outbreak-affected district",
      "A tabular record where each row represents one case and columns represent key epidemiological variables for each case",
      "A ranked list of food items by their food-specific attack rates",
      "A chronological list of all laboratory test results received during the outbreak"
    ],
    answer: 1,
    explanation: "A line list is a structured tabular database where each row represents an individual case and each column captures a specific variable: case identifier, date of onset, age, sex, residence, symptoms, exposure history (food items consumed, contacts, travel), laboratory results, and outcome. It serves as the primary analytical tool for descriptive epidemiology, enabling time-place-person characterization, incubation period estimation, and generation of hypotheses for analytical studies."
  },
  {
    id: 17,
    question: "In an outbreak investigation, a spot map is constructed by:",
    options: [
      "Plotting the date of disease onset against the number of cases to create an epidemic curve",
      "Placing a dot or symbol for each case at the geographic location of their residence or site of exposure on a map of the affected area",
      "Ranking food items by their odds ratios from highest to lowest association with illness",
      "Marking health facilities on a district map by their patient load"
    ],
    answer: 1,
    explanation: "A spot map is a geographic representation where each case is plotted as a dot (or symbol) at the location of their residence or site of exposure. Multiple cases at the same location may be represented by stacked dots or a number. Spot maps reveal spatial clustering, proximity to suspected sources (water sources, food outlets, vector breeding sites), and geographic spread pattern. Combined with place-specific data (wells, latrines, factories), spot maps generate hypotheses about the source of an outbreak."
  },
  {
    id: 18,
    question: "In a school cafeteria outbreak, 150 students ate fried rice and 45 developed illness; 50 students did not eat fried rice and 5 developed illness. The food-specific attack rate for fried rice is:",
    options: [
      "10%",
      "30%",
      "33%",
      "45%"
    ],
    answer: 1,
    explanation: "Food-specific attack rate for those who ate fried rice = (Number ill among those who ate / Total who ate) x 100 = (45/150) x 100 = 30%. The attack rate for those who did not eat fried rice = (5/50) x 100 = 10%. The relative risk = 30/10 = 3.0, indicating those who ate fried rice were three times more likely to develop illness, suggesting fried rice as the implicated vehicle."
  },
  {
    id: 19,
    question: "The secondary attack rate (SAR) is calculated as:",
    options: [
      "(Total cases in the outbreak / Total population at risk) x 100",
      "(Number of secondary cases among susceptible contacts of primary cases / Total susceptible contacts exposed) x 100",
      "(Number of cases in the second wave / Number of cases in the first wave) x 100",
      "(Number of laboratory-confirmed cases / Total suspected cases) x 100"
    ],
    answer: 1,
    explanation: "Secondary Attack Rate (SAR) = (Number of secondary cases among susceptible contacts of primary cases / Total susceptible contacts) x 100. SAR quantifies the probability of transmission from a primary case to a susceptible contact in a defined group (typically household or close contact setting) within one maximum incubation period. It is a direct measure of transmissibility. SAR is used to evaluate the effectiveness of control measures such as isolation and chemoprophylaxis."
  },
  {
    id: 20,
    question: "In a point-source outbreak, the median incubation period is estimated by:",
    options: [
      "Calculating the total outbreak duration divided by the number of cases",
      "Measuring the time from the known exposure event to the onset of the median case on the epidemic curve",
      "Using the range from the shortest to the longest onset time after exposure",
      "Subtracting the date of first case from the date of the last case"
    ],
    answer: 1,
    explanation: "When the time of a single exposure event is known (as in a point-source outbreak such as a common meal), the incubation period for each case is the time from exposure to symptom onset. The median incubation period corresponds to the onset time of the median case (the 50th percentile of onset times). This estimated incubation period is then compared to known incubation periods of suspected pathogens to narrow the etiological hypothesis before laboratory confirmation."
  },
  {
    id: 21,
    question: "A 'probable case' in an outbreak case definition is best characterized as:",
    options: [
      "A case confirmed by microbiological testing meeting all laboratory criteria",
      "A case meeting clinical criteria and having an epidemiological link to a confirmed case, but lacking laboratory confirmation",
      "A case with only a positive laboratory test but no clinical symptoms",
      "Any person residing in the outbreak area regardless of symptoms"
    ],
    answer: 1,
    explanation: "In the standard tiered case definition framework: a suspected case meets only clinical criteria; a probable case meets clinical criteria plus has an epidemiological link (e.g., contact with a confirmed case, shared exposure) but lacks laboratory confirmation; a confirmed case has laboratory confirmation. The probable category captures cases with strong indirect evidence, enables surveillance when laboratory capacity is limited, and prevents underreporting during active outbreaks."
  },
  {
    id: 22,
    question: "The generation time (serial interval) in a propagated outbreak epidemic curve is estimated by:",
    options: [
      "Measuring the time from the first case to the last case in the outbreak",
      "Measuring the time interval between successive wave peaks in the epidemic curve, approximating the average time between case generations",
      "Dividing the total number of cases by the basic reproduction number",
      "Calculating the mean incubation period from known exposure and onset data"
    ],
    answer: 1,
    explanation: "In a propagated epidemic curve, successive peaks represent successive generations of cases. The interval between consecutive peaks approximates the serial interval (generation time) - the average time between symptom onset in a primary case and symptom onset in their secondary cases. This parameter is fundamental to estimating the reproduction number (R) and predicting epidemic trajectory. It reflects both the incubation period and the infectious period of the pathogen."
  },
  {
    id: 23,
    question: "In time-place-person analysis of an outbreak, the 'person' component is analyzed to:",
    options: [
      "Determine the geographic distribution of cases relative to the water supply",
      "Plot the temporal trend of new cases over the outbreak period",
      "Identify demographic and exposure characteristics of cases to generate hypotheses about risk factors and exposed populations",
      "Establish the timeline of events from first exposure to last case"
    ],
    answer: 2,
    explanation: "The 'person' component of descriptive epidemiology characterizes WHO is affected: age distribution, sex ratio, occupation, immunization status, behavioral exposures (dietary habits, sexual behavior, travel), and socioeconomic factors. Identifying disproportionate risk in specific demographic or exposure groups generates hypotheses about the causative exposure. For example, cases predominantly among adults who attended a specific event implicates that event as the source."
  },
  {
    id: 24,
    question: "In a village outbreak of hepatitis E, investigators identify that all cases occurred within two weeks and were geographically clustered near a single hand pump. The epidemic curve shows a classic bell-shaped single peak. Which incubation period range would be consistent with hepatitis E as the causative agent?",
    options: [
      "2-6 hours",
      "1-3 days",
      "15-60 days",
      "6-12 months"
    ],
    answer: 2,
    explanation: "Hepatitis E virus has an incubation period of 15-60 days (average 40 days). In a point-source waterborne outbreak from a contaminated hand pump, cases would appear 15-60 days after exposure, consistent with the epidemic curve shape and geographic clustering. The short incubation times (2-6 hours, 1-3 days) are characteristic of preformed toxins or invasive bacteria (e.g., Staphylococcus, Salmonella). Six to 12 months would suggest HIV or viral hepatitis B."
  },
  {
    id: 25,
    question: "In an outbreak at a wedding where all attendees are known and enumerable, the preferred analytical study design is:",
    options: [
      "Case-control study, because the disease is rare in the population",
      "Retrospective cohort study, because the exposed population (all attendees) is well defined and can be fully enumerated",
      "Cross-sectional survey of the surrounding community",
      "Ecological study using aggregate district-level data"
    ],
    answer: 1,
    explanation: "A retrospective cohort study is preferred when the at-risk population is fully enumerable (e.g., wedding guest list, school roster, factory employee list). All members of the cohort are interviewed about their exposures and illness status, enabling direct calculation of attack rates and relative risk for each food item or exposure. Case-control studies are used when the source population is too large or diffuse to enumerate fully, or when the disease is rare."
  },
  {
    id: 26,
    question: "In a 2x2 table from a retrospective cohort study during a foodborne outbreak: ate implicated food and ill = 60 (a); ate food and not ill = 40 (b); did not eat food and ill = 10 (c); did not eat food and not ill = 90 (d). The Relative Risk (RR) is:",
    options: [
      "6.0",
      "13.5",
      "4.5",
      "3.0"
    ],
    answer: 1,
    explanation: "RR = Attack Rate in Exposed / Attack Rate in Unexposed = [a/(a+b)] / [c/(c+d)] = [60/(60+40)] / [10/(10+90)] = (60/100) / (10/100) = 0.60 / 0.10 = 6.0. Wait - recalculating: 0.60 / 0.10 = 6.0. So the RR is 6.0 (answer index 0). Note: This means those who ate the implicated food were 6 times more likely to develop illness. The Odds Ratio (used in case-control) would be (a x d)/(b x c) = (60 x 90)/(40 x 10) = 5400/400 = 13.5, demonstrating that OR overestimates RR when disease prevalence is high."
  },
  {
    id: 27,
    question: "In a case-control study during an outbreak, 50 cases and 100 controls were enrolled. Among cases, 40 reported eating raw shellfish; among controls, 20 reported eating raw shellfish. The Odds Ratio (OR) is:",
    options: [
      "4.0",
      "8.0",
      "12.0",
      "16.0"
    ],
    answer: 2,
    explanation: "OR = (a x d) / (b x c). a = cases exposed = 40, b = cases unexposed = 10, c = controls exposed = 20, d = controls unexposed = 80. OR = (40 x 80) / (10 x 20) = 3200 / 200 = 16.0. An OR of 16 indicates a very strong association between eating raw shellfish and illness. Since the confidence interval should not include 1 at this magnitude with this sample size, the association would be statistically significant."
  },
  {
    id: 28,
    question: "A chi-square test comparing illness rates between exposed and unexposed groups in a foodborne outbreak yields a value of 9.6 with 1 degree of freedom (critical value at p=0.05 is 3.84; at p=0.01 is 6.63). The correct interpretation is:",
    options: [
      "The association is not statistically significant at the 0.05 level",
      "The association is statistically significant at both the 0.05 and 0.01 levels",
      "The association is significant at 0.05 but not at 0.01",
      "The chi-square value confirms the food item caused the outbreak"
    ],
    answer: 1,
    explanation: "The calculated chi-square of 9.6 exceeds both the critical value at p=0.05 (3.84) and at p=0.01 (6.63), indicating statistical significance at both levels. This means there is less than a 1% probability of obtaining this result by chance alone if no true association existed. Statistical significance supports (but does not prove) causation; biological plausibility, dose-response relationship, and consistency with other findings must also be evaluated."
  },
  {
    id: 29,
    question: "A 95% confidence interval for a Relative Risk of 3.5 (95% CI: 0.8 - 15.2) in an outbreak study indicates:",
    options: [
      "The association is statistically significant as the RR is greater than 1",
      "The association is not statistically significant because the confidence interval includes the null value of 1",
      "The study has 95% accuracy in its RR estimate",
      "The true RR is definitely between 0.8 and 15.2 in the population"
    ],
    answer: 1,
    explanation: "A 95% CI that includes the null value (RR = 1) indicates the association is NOT statistically significant at the 0.05 level, despite the point estimate of 3.5 appearing elevated. The wide CI (0.8 - 15.2) also reflects substantial statistical uncertainty, likely due to small sample size. The p-value would be greater than 0.05. This result warrants caution in interpretation and may require a larger sample to achieve adequate statistical power."
  },
  {
    id: 30,
    question: "The Attributable Fraction in the Exposed (AFe) for an outbreak where the Relative Risk = 5 is:",
    options: [
      "20%",
      "40%",
      "60%",
      "80%"
    ],
    answer: 3,
    explanation: "AFe = (RR - 1) / RR x 100 = (5 - 1) / 5 x 100 = 4/5 x 100 = 80%. This means 80% of illness among those exposed to the implicated vehicle is attributable to that exposure and could theoretically be prevented by eliminating that exposure. The remaining 20% of illness in the exposed group would occur from other causes. AFe is a key measure for prioritizing control measures in foodborne and waterborne outbreak investigations."
  },
  {
    id: 31,
    question: "The Population Attributable Fraction (PAF) is most informative for public health decision-making because it:",
    options: [
      "Measures the relative risk of disease in exposed individuals compared to unexposed individuals",
      "Estimates the proportion of all cases in the total population (exposed and unexposed) that is attributable to the specific exposure",
      "Determines the sensitivity and specificity of the case definition used in the outbreak",
      "Calculates the number of secondary cases per primary case in a transmission chain"
    ],
    answer: 1,
    explanation: "PAF = (Incidence in total population - Incidence in unexposed) / Incidence in total population. It quantifies what fraction of disease burden in the entire population could be eliminated if the exposure were removed. Unlike AFe (which applies only to the exposed), PAF accounts for how common the exposure is in the population. A high PAF identifies exposures with the greatest potential public health impact if controlled, making it valuable for prioritizing interventions."
  },
  {
    id: 32,
    question: "In a matched case-control study during an outbreak, McNemar's test is used instead of the standard chi-square because:",
    options: [
      "McNemar's test can handle continuous outcome variables unlike chi-square",
      "Matched pairs must be analyzed as paired data to account for the correlation between matched cases and controls; standard chi-square ignores this pairing",
      "McNemar's test is more appropriate when the sample size exceeds 500 pairs",
      "McNemar's test can calculate odds ratios while chi-square cannot"
    ],
    answer: 1,
    explanation: "In a matched case-control study, each case is paired with one or more controls matched on specific variables (e.g., age, sex). The matched pairs are correlated (not independent), violating the independence assumption of the standard chi-square test. McNemar's test uses only the discordant pairs (where case and control differ in exposure status) and correctly accounts for the within-pair correlation. Conditional logistic regression is the multivariable extension for matched case-control analyses."
  },
  {
    id: 33,
    question: "A dose-response relationship in a foodborne outbreak investigation is demonstrated when:",
    options: [
      "More than one food item is associated with illness in the analytical study",
      "Those who consumed larger quantities of the implicated food have progressively higher attack rates than those who consumed smaller amounts",
      "The odds ratio exceeds 10 in the case-control study",
      "The p-value is less than 0.001 in the chi-square test"
    ],
    answer: 1,
    explanation: "A dose-response relationship (biological gradient) shows that increasing amounts of exposure lead to increasing risk of disease. In foodborne outbreak investigations, this is demonstrated by categorizing consumption into none, small, medium, and large portions and showing progressively rising attack rates across these categories. This is one of Bradford Hill's criteria for causation and strongly supports the implicated food as the causative vehicle."
  },
  {
    id: 34,
    question: "In an outbreak case-control study, sex is found to be associated with both consumption of the implicated food item and with illness. After stratifying by sex, the association between food consumption and illness persists in both males and females with similar odds ratios. This finding indicates:",
    options: [
      "Sex is a confounder and fully explains the association between food and illness",
      "Sex is an effect modifier causing the food to affect males and females differently",
      "Sex is not a confounder because the association between food and illness remains after controlling for sex",
      "The study design was flawed because sex should have been an exclusion criterion"
    ],
    answer: 2,
    explanation: "Confounding by sex is ruled out when stratified analysis shows similar odds ratios in both strata (males and females), indicating the food-illness association is not explained by sex. A confounder, when controlled, changes the estimate substantially (the crude and adjusted estimates differ). Effect modification (interaction) would produce notably different stratum-specific estimates. If the association persists with similar magnitude across strata, sex is not a confounder of the food-illness relationship."
  },
  {
    id: 35,
    question: "Multivariable logistic regression is applied in an outbreak case-control study to identify the independent risk factors. The adjusted odds ratio for eating raw oysters is 7.2 (95% CI: 2.1 - 24.8) after controlling for age, sex, and other foods. This finding indicates:",
    options: [
      "Eating raw oysters is not significantly associated with illness after adjustment for confounders",
      "Eating raw oysters is independently and significantly associated with illness, with 7.2 times higher odds, even after controlling for other variables",
      "The adjustment reduced the odds ratio, suggesting raw oysters were not the primary vehicle",
      "Logistic regression cannot be applied to outbreak investigations as it requires a prospective study design"
    ],
    answer: 1,
    explanation: "An adjusted OR of 7.2 with a 95% CI that does not include 1 (2.1 - 24.8) indicates a statistically significant, independent association between eating raw oysters and illness after controlling for confounders. Multivariable logistic regression allows simultaneous adjustment for multiple variables, isolating the independent contribution of each exposure. This is particularly important in foodborne outbreaks where multiple foods may be correlated (people who ate one food often ate others)."
  },
  {
    id: 36,
    question: "The Mantel-Haenszel method in outbreak analytical epidemiology is used to:",
    options: [
      "Plot the epidemic curve by stratifying cases by exposure status over time",
      "Obtain a pooled summary estimate of association (RR or OR) across strata of a potential confounder while testing for confounding and effect modification",
      "Calculate the secondary attack rate in household contacts stratified by age group",
      "Estimate the sample size needed for a case-control study in an outbreak setting"
    ],
    answer: 1,
    explanation: "The Mantel-Haenszel method produces a weighted pooled estimate of relative risk or odds ratio across strata of a confounding variable (e.g., age groups, sex). If stratum-specific estimates are homogeneous (no effect modification), the Mantel-Haenszel pooled estimate is the appropriate summary. If stratum-specific estimates differ substantially, effect modification is present and stratum-specific estimates should be reported separately. The Mantel-Haenszel chi-square tests the overall significance of the pooled association."
  },
  {
    id: 37,
    question: "In a large community outbreak where the source population cannot be enumerated, a case-control study is designed. Among 80 gastroenteritis cases and 160 controls interviewed, the chi-square value for association with a particular water source is 18.4 (p<0.001) with an OR of 9.1 (95% CI: 4.2 - 19.7). The p-value interpretation is:",
    options: [
      "There is a 0.1% probability that the water source caused the gastroenteritis",
      "There is less than a 0.1% probability of observing this association or a more extreme one if no true association existed between the water source and illness",
      "The study has a 99.9% probability of being correct",
      "9.1% of cases were caused by the water source"
    ],
    answer: 1,
    explanation: "A p-value less than 0.001 means there is less than a 0.1% probability of obtaining this association (OR of 9.1 or more extreme) by chance alone, assuming the null hypothesis of no association is true. The p-value is not the probability that the water source caused illness (that requires causal inference beyond statistical testing), nor does it indicate the fraction of cases attributable to the source (that is the attributable fraction). The wide CI above 1 confirms statistical significance."
  },
  {
    id: 38,
    question: "The most immediate control measure for a confirmed outbreak of typhoid fever linked to a contaminated municipal water supply is:",
    options: [
      "Mass typhoid vaccination of all district residents",
      "Boil water advisory for affected areas and emergency chlorination or alternative safe water supply",
      "Mass chemoprophylaxis with ciprofloxacin for all residents",
      "Quarantine of all symptomatic individuals in designated typhoid wards"
    ],
    answer: 1,
    explanation: "For a waterborne typhoid outbreak, the immediate priority is interrupting the transmission route by issuing a boil water advisory and simultaneously implementing emergency chlorination of the water supply or providing an alternative safe water source. These measures directly address the source. Mass vaccination takes weeks to confer immunity and does not help already-exposed persons. Mass chemoprophylaxis promotes resistance. Quarantine is appropriate for highly infectious diseases, not typhoid which spreads through contaminated water/food, not person-to-person."
  },
  {
    id: 39,
    question: "Quarantine is legally and epidemiologically distinguished from isolation in that quarantine:",
    options: [
      "Applies to persons confirmed to have an infectious disease, separating them from healthy individuals",
      "Applies to exposed but currently asymptomatic persons, restricting their movement during the incubation period to prevent potential onward transmission if they are infected",
      "Is always voluntary, while isolation may be compulsory under public health law",
      "Applies only to international travelers and not to domestic contacts of cases"
    ],
    answer: 1,
    explanation: "Quarantine separates and restricts the movement of people who have been exposed to a contagious disease and may be incubating it, though they are not yet ill. The duration equals the maximum incubation period of the disease. Isolation, by contrast, separates persons who are already ill or confirmed to be infected. Both quarantine and isolation can be voluntary or legally mandated depending on national public health legislation. Both apply to domestic and international settings."
  },
  {
    id: 40,
    question: "Ring vaccination was a cornerstone strategy in the WHO Global Smallpox Eradication Programme. The strategy's effectiveness rested on:",
    options: [
      "Vaccinating at least 95% of the total global population to achieve herd immunity",
      "Identifying and vaccinating all contacts and contacts-of-contacts of confirmed cases, creating a buffer of immune individuals around each case to block transmission chains",
      "Vaccinating only immunocompromised individuals who are at highest risk of severe disease",
      "Vaccinating only healthcare workers and laboratory personnel handling smallpox specimens"
    ],
    answer: 1,
    explanation: "Ring vaccination creates a 'ring' of immune individuals around each confirmed case by vaccinating all identified contacts (first ring) and then contacts of those contacts (second ring). This targeted strategy interrupts transmission chains without requiring mass vaccination of entire populations, conserving vaccine supplies and focusing efforts where transmission risk is highest. Evidence for ring vaccination effectiveness was also demonstrated in rVSV-ZEBOV vaccine trials during the 2018 Ebola outbreak in DRC."
  },
  {
    id: 41,
    question: "In contact tracing during an outbreak, the metric 'contact tracing completeness' refers to:",
    options: [
      "The proportion of contacts who are eventually laboratory tested for the disease",
      "The proportion of all contacts identified by cases who are successfully reached and followed up by health authorities",
      "The proportion of contacts who develop disease and become secondary cases",
      "The average time from case identification to first contact with the traced individual"
    ],
    answer: 1,
    explanation: "Contact tracing completeness measures the proportion of contacts listed by cases that are actually reached and enrolled in follow-up monitoring. High completeness (ideally >80-90%) ensures the contact tracing system is effective at identifying potentially infected persons before they develop and spread disease. Other contact tracing metrics include timeliness (time from case identification to contact notification), contact-to-case ratio, and the proportion of contacts who develop illness (helps estimate secondary attack rate)."
  },
  {
    id: 42,
    question: "Post-exposure chemoprophylaxis with rifampicin is recommended for close contacts of confirmed meningococcal meningitis cases. The primary rationale for this recommendation is to:",
    options: [
      "Treat sub-clinical meningococcal infection in contacts who may be incubating the disease",
      "Eliminate nasopharyngeal carriage of Neisseria meningitidis in close contacts to prevent secondary cases",
      "Provide passive immunity against meningococcal disease in the absence of vaccine availability",
      "Reduce fever and symptoms in contacts who may have already been infected"
    ],
    answer: 1,
    explanation: "Rifampicin (or ciprofloxacin or ceftriaxone) chemoprophylaxis for meningococcal contacts aims to eliminate nasopharyngeal carriage of Neisseria meningitidis, which is the reservoir for onward transmission. Close contacts (household members, daycare contacts, unprotected healthcare workers) are at highest risk of carriage and subsequent invasive disease. Eradicating carriage prevents secondary cases. This is distinct from treatment (which would require higher doses) or passive immunization."
  },
  {
    id: 43,
    question: "Terminal disinfection of a household following discharge or death of a case of cholera involves:",
    options: [
      "Ongoing daily disinfection of excreta and contaminated items while the case is still present",
      "A thorough one-time cleaning and disinfection of all contaminated surfaces, items, and the environment after the case has been removed from the premises",
      "Aerial spraying of the neighborhood with broad-spectrum disinfectants",
      "Disinfection of only the patient's immediate sleeping area using ultraviolet light"
    ],
    answer: 1,
    explanation: "Terminal disinfection is a comprehensive, one-time disinfection of the case's environment conducted after the case has been removed (discharged, transferred, or died). It involves disinfection of all surfaces, bedding, clothing, utensils, and sanitary facilities potentially contaminated by the patient's excreta. For cholera, 0.5% sodium hypochlorite solution is typically used. This differs from concurrent disinfection, which is the ongoing disinfection performed while the case is still present and actively producing infectious material."
  },
  {
    id: 44,
    question: "Under IHR 2005, the criteria used in the Annex 2 decision instrument to assess whether an event constitutes a potential PHEIC include all of the following EXCEPT:",
    options: [
      "Seriousness of the public health impact of the event",
      "Unusual or unexpected nature of the event",
      "Potential for international spread",
      "The case fatality rate exceeding 10% in the affected country"
    ],
    answer: 3,
    explanation: "IHR 2005 Annex 2 uses four criteria to assess whether an event may constitute a PHEIC: (1) is the public health impact serious? (2) is the event unusual or unexpected? (3) is there significant risk of international spread? (4) is there significant risk of international travel or trade restrictions? A specific case fatality rate threshold (e.g., 10%) is not one of the formal criteria. The assessment is qualitative and based on all available information at the time of assessment."
  },
  {
    id: 45,
    question: "Under Article 6 of IHR 2005, member states are required to assess events within their territory and notify WHO within what timeframe if the event may constitute a PHEIC?",
    options: [
      "6 hours of detection",
      "48 hours of assessment",
      "72 hours of first case confirmation",
      "7 days of outbreak declaration"
    ],
    answer: 1,
    explanation: "IHR 2005 Article 6 requires States Parties to assess public health events using the Annex 2 decision instrument and, if the event may constitute a PHEIC, to notify WHO within 48 hours of assessment. The notification must include case definitions, laboratory results, source and type of risk, number of cases and deaths, conditions affecting spread, and response measures applied. This 48-hour notification requirement enables rapid international response coordination."
  },
  {
    id: 46,
    question: "The IHR 2005 core capacities that all member states must build and maintain include all of the following EXCEPT:",
    options: [
      "Surveillance capacity to detect events of potential public health significance",
      "Laboratory capacity to confirm or rule out disease events",
      "Response capacity to contain and control events at source",
      "Mandatory stockpiling of WHO-specified antiviral drugs and vaccines for all known pandemic threats"
    ],
    answer: 3,
    explanation: "IHR 2005 Annex 1 specifies core capacities required at national level: surveillance (detection, assessment), laboratory (confirmation), response (containment), risk communication, and points-of-entry capacities. There is no IHR requirement for mandatory stockpiling of specific antiviral drugs or vaccines, though stockpiling is a recommended preparedness practice under WHO guidance. States Parties report their capacity progress annually through the SPAR (State Party Self-Assessment Annual Reporting) tool."
  },
  {
    id: 47,
    question: "A Rapid Response Team (RRT) deployed to investigate a cluster of severe acute respiratory illness in a poultry farming community should ideally include which composition?",
    options: [
      "Only district medical officers and state health administrators",
      "Epidemiologist, virologist or microbiologist, veterinarian or animal health expert, clinician, environmental health officer, and risk communication specialist",
      "International WHO consultants exclusively, without local health authority involvement",
      "Only laboratory scientists to conduct environmental sampling"
    ],
    answer: 1,
    explanation: "For a suspected zoonotic respiratory outbreak in a poultry farming community, the RRT must be multidisciplinary: an epidemiologist for outbreak investigation design, a virologist or microbiologist for specimen collection and pathogen identification, a veterinarian for animal health investigation and One Health interface, a clinician for case assessment and management guidance, an environmental health officer for farm and environmental assessment, and a risk communication specialist for community engagement. Local health authority inclusion is essential for sustained response."
  },
  {
    id: 48,
    question: "The 2018 Nipah virus outbreak in Kerala, India was successfully contained primarily through which combination of interventions?",
    options: [
      "Mass vaccination of the entire Kerala population with an experimental Nipah vaccine",
      "Rapid case identification, rigorous contact tracing with quarantine, strict infection prevention and control (IPC) in healthcare settings, and coordinated multi-agency response",
      "Aerial fumigation of bat habitats across Kozhikode district",
      "International travel bans from Kerala to prevent global spread"
    ],
    answer: 1,
    explanation: "The 2018 Kerala Nipah outbreak (18 cases, 17 deaths, CFR 94%) was contained without a vaccine through: rapid clinical and epidemiological case identification using a sensitive case definition, comprehensive contact listing and quarantine of over 2,000 contacts, stringent IPC measures in healthcare settings to prevent nosocomial amplification, and coordinated response between Kerala state health department, NCDC, NIV Pune, NIMHANS, and WHO. No licensed Nipah vaccine exists; containment relied entirely on non-pharmaceutical interventions."
  },
  {
    id: 49,
    question: "An After-Action Review (AAR) following an outbreak response is conducted primarily to:",
    options: [
      "Assign legal accountability for any delays or failures in the outbreak response",
      "Systematically identify what worked well, what gaps existed, and what corrective actions should be implemented to improve future preparedness and response",
      "Publish the epidemiological findings in a peer-reviewed journal",
      "Formally close the outbreak and remove it from surveillance reports"
    ],
    answer: 1,
    explanation: "An After-Action Review (AAR) is a structured process conducted within 2-4 weeks of outbreak resolution to assess: what was planned vs. what happened, what worked well (to be sustained), what gaps or weaknesses were identified (to be corrected), and specific corrective action items with responsible parties and timelines. AARs are blameless learning exercises focused on system improvement, not individual accountability. They are distinct from outbreak closure declarations and scientific publications, though they may inform both."
  },
  {
    id: 50,
    question: "The One Health approach is applied in outbreak investigation because:",
    options: [
      "Human health departments should have sole authority over all aspects of outbreak investigation including animal and environmental sectors",
      "Approximately 60-75% of emerging infectious diseases are zoonotic, and effective outbreak detection and response requires integrated surveillance and coordination across human health, animal health, wildlife, and environmental sectors",
      "Environmental sampling is only relevant for waterborne diseases and not for zoonotic or vector-borne outbreaks",
      "Veterinary authorities are responsible for all zoonotic outbreaks while human health departments respond only to non-zoonotic disease outbreaks"
    ],
    answer: 1,
    explanation: "The One Health concept recognizes that human health, animal health, and ecosystem health are deeply interconnected. An estimated 60-75% of emerging infectious diseases originate in animals (zoonoses), including Nipah, Ebola, Avian Influenza, SARS-CoV-2, Brucellosis, and Rabies. Effective outbreak investigation and response for these diseases requires joint surveillance, coordinated field investigation, shared laboratory resources, and integrated control measures across human health, veterinary, wildlife, and environmental sectors. IDSP, NCDC, and the National Centre for Disease Control have advocated for One Health frameworks in India."
  }
];

export default questions;

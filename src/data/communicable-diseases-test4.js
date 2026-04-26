const questions = [
  {
    id: 1,
    question: "According to the WHO World Malaria Report 2023, the estimated number of malaria deaths globally in 2022 was approximately:",
    options: ["250,000", "608,000", "1.2 million", "2 million"],
    answer: 1,
    explanation: "WHO estimated approximately 608,000 malaria deaths globally in 2022, with over 90% occurring in the African Region. The WHO South-East Asia Region, including India, accounted for about 2% of global deaths. This figure represents a decrease from the COVID-19 disruption peak of 625,000 in 2020 but is higher than the pre-pandemic 2019 estimate of 558,000."
  },
  {
    id: 2,
    question: "India's annual malaria cases have shown which overall trend between 2000 and 2022?",
    options: ["Steady increase from 2 million to over 10 million cases", "Decline from approximately 2.03 million confirmed cases in 2000 to under 0.2 million by 2022", "Stable at 1-2 million cases throughout", "Fluctuating with no discernible trend"],
    answer: 1,
    explanation: "India has shown a remarkable decline in malaria burden: from approximately 2.03 million confirmed cases and 932 deaths in 2000, cases fell to under 0.2 million by the early 2020s. This represents over a 90% reduction driven by the National Strategic Plan for Malaria Elimination, expanded LLIN coverage, IRS, and improved case detection and treatment under NCVBDC (formerly NVBDCP)."
  },
  {
    id: 3,
    question: "A district has a mid-year population of 500,000, and 1,250 confirmed malaria cases are reported during the year. The Annual Parasite Incidence (API) for this district is:",
    options: ["0.25 per 1000", "1.25 per 1000", "2.5 per 1000", "25 per 1000"],
    answer: 2,
    explanation: "API = (Number of confirmed malaria cases / Mid-year population) x 1000 = (1,250 / 500,000) x 1000 = 2.5 per 1000 population. An API of 2.5 places this district in the high transmission category (API >2), which under the National Strategic Plan for Malaria Elimination would classify it as Category 3, requiring intensified interventions including IRS, LLINs, and enhanced surveillance."
  },
  {
    id: 4,
    question: "A PHC with a population of 20,000 examined 2,400 blood slides during a year. The Annual Blood Examination Rate (ABER) is:",
    options: ["8%", "12%", "24%", "120%"],
    answer: 1,
    explanation: "ABER = (Number of blood slides examined in a year / Mid-year population) x 100 = (2,400 / 20,000) x 100 = 12%. The recommended minimum ABER is 10% of the population per year. This PHC has achieved an ABER of 12%, which meets the national target. ABER is a process indicator measuring the intensity of active fever surveillance and case detection."
  },
  {
    id: 5,
    question: "In a malaria-endemic area, 3,600 blood slides were examined during a surveillance period, of which 180 were found positive for malaria. The Slide Positivity Rate (SPR) is:",
    options: ["0.5%", "2%", "5%", "18%"],
    answer: 2,
    explanation: "SPR = (Number of positive slides / Total slides examined) x 100 = (180 / 3,600) x 100 = 5%. SPR reflects the proportion of examined slides positive for malaria parasites and indicates transmission intensity. SPR above 5% generally indicates moderate to high transmission. It must be interpreted alongside ABER - a high ABER with high SPR indicates a significant malaria burden in the population."
  },
  {
    id: 6,
    question: "Of 180 malaria-positive slides in a surveillance area, 90 were positive for Plasmodium falciparum. If a total of 3,600 slides were examined, the Slide Falciparum Rate (SFR) is:",
    options: ["1%", "2.5%", "5%", "50%"],
    answer: 1,
    explanation: "SFR = (Number of slides positive for P. falciparum / Total slides examined) x 100 = (90 / 3,600) x 100 = 2.5%. Note that the proportion of falciparum among all positives = 90/180 = 50%, but SFR is calculated against total slides examined, not total positives. SFR helps monitor the relative burden of the more dangerous P. falciparum and is used alongside SPR for malaria stratification and resource allocation."
  },
  {
    id: 7,
    question: "Under the National Strategic Plan for Malaria Elimination, Category 1 districts (low-burden) are defined as having an API of:",
    options: ["API = 0 (zero indigenous cases)", "API < 1 per 1000 population", "API 1-2 per 1000 population", "API > 2 per 1000 population"],
    answer: 1,
    explanation: "The National Strategic Plan for Malaria Elimination classifies districts into three categories: Category 1 (API <1) - low transmission, focus on maintaining elimination; Category 2 (API 1-2) - moderate transmission, focus on intensified case management and vector control; Category 3 (API >2) - high transmission, intensified interventions including IRS, LLINs, MDA where justified. A separate Category 0 denotes districts with zero indigenous cases for three consecutive years."
  },
  {
    id: 8,
    question: "WHO defines malaria elimination as:",
    options: ["Reduction of malaria incidence to less than 1 per 1000 population at risk per year", "Interruption of local mosquito-borne malaria transmission in a defined geographical area (zero indigenous cases)", "Permanent worldwide reduction of malaria to zero cases", "Reduction of malaria mortality to zero in a country"],
    answer: 1,
    explanation: "WHO defines malaria elimination as the interruption of local mosquito-borne malaria transmission in a defined geographical area (resulting in zero indigenous cases), though importation can still occur and requires continued surveillance and response. Malaria eradication, by contrast, is the permanent reduction to zero of the worldwide incidence of infection caused by human malaria parasites. Elimination requires ongoing prevention to prevent re-establishment."
  },
  {
    id: 9,
    question: "For WHO certification of malaria elimination, a country must demonstrate:",
    options: ["API <1 for at least 2 consecutive years", "Zero indigenous malaria cases and deaths for at least 3 consecutive years, with a proven functional surveillance system capable of detecting and responding to cases", "Less than 100 indigenous cases per year for 5 consecutive years", "Zero malaria deaths for 5 consecutive years regardless of case numbers"],
    answer: 1,
    explanation: "WHO certifies a country as malaria-free when it has demonstrated that the chain of indigenous malaria transmission has been interrupted nationwide, evidenced by zero indigenous cases and deaths for at least 3 consecutive years. The country must also demonstrate a functional surveillance and response system capable of detecting and responding to any introduced cases. WHO's Evidence Review Group evaluates the dossier submitted by the country before certification."
  },
  {
    id: 10,
    question: "In India, which geographic region/states have the highest P. falciparum proportion and account for disproportionately high malaria mortality?",
    options: ["Northern plains states (Uttar Pradesh, Bihar)", "Southern coastal states (Tamil Nadu, Kerala, Andhra Pradesh)", "Tribal forested areas of Odisha, Jharkhand, Chhattisgarh, and Northeastern states", "Western desert states (Rajasthan, Gujarat)"],
    answer: 2,
    explanation: "Tribal forested states - particularly Odisha, Jharkhand, Chhattisgarh, Madhya Pradesh, and northeastern states like Assam and Meghalaya - have the highest malaria burden in India, with P. falciparum predominating. These areas account for the majority of India's malaria deaths. Challenges include remote geography, forest-fringe habitation, tribal vulnerability, and high vector density of Anopheles culicifacies and An. fluviatilis."
  },
  {
    id: 11,
    question: "Malaria death audit under India's surveillance system serves which primary epidemiological purpose?",
    options: ["To calculate the case fatality rate for annual reports", "To identify preventable deaths, classify each death as indigenous or imported, determine treatment-seeking delays, and improve case management and surveillance system quality", "To estimate the total malaria mortality for WHO reporting", "To monitor antimalaria drug resistance patterns"],
    answer: 1,
    explanation: "Malaria death audit (verbal autopsy combined with case investigation) is a quality improvement tool that reviews each reported malaria death to determine: whether the case was correctly diagnosed, whether treatment was prompt and appropriate, whether the death was indigenous or imported, what systemic factors contributed, and how similar deaths can be prevented. It identifies gaps in the health system (delayed treatment-seeking, misdiagnosis, drug stock-outs) and feeds back into program improvement."
  },
  {
    id: 12,
    question: "Parasite Prevalence (PP) surveys for malaria, conducted through community-based cross-sectional studies, measure which indicator?",
    options: ["The proportion of blood slides positive among fever cases tested in health facilities", "The proportion of individuals in a random community sample who are currently carrying malaria parasites (including asymptomatic carriers)", "The annual number of confirmed malaria cases per 1000 population", "The proportion of households with malaria-positive members"],
    answer: 1,
    explanation: "Parasite Prevalence (PP) surveys are community-based cross-sectional studies where a random sample of the general population (including asymptomatic individuals) is tested for malaria parasites by blood smear or RDT or PCR. PP captures the true reservoir of infection including the large proportion of asymptomatic carriers not presenting to health facilities. PP surveys are essential for understanding true transmission intensity, assessing the impact of interventions, and for elimination surveillance where case-based surveillance may miss a large proportion of infections."
  },
  {
    id: 13,
    question: "India's National Framework for Malaria Elimination (NFME) 2016-2030 was launched by which ministry and sets the overall goal of achieving:",
    options: ["Ministry of Science and Technology; zero malaria by 2025", "Ministry of Health and Family Welfare; malaria-free India by 2030 with zero deaths due to malaria by 2025", "Ministry of Tribal Affairs; malaria elimination from tribal areas by 2027", "ICMR; malaria eradication globally by 2040"],
    answer: 1,
    explanation: "India's National Framework for Malaria Elimination (NFME) 2016-2030 was launched by the Ministry of Health and Family Welfare in 2016 as part of India's commitment to the WHO Global Technical Strategy for Malaria 2016-2030. It sets goals: eliminate malaria from all states and UTs by 2030, with zero deaths due to malaria by 2025. It is operationalized through successive National Strategic Plans and the E-2025 initiative (committing India to eliminating malaria by 2025 from selected states)."
  },
  {
    id: 14,
    question: "IRS (Indoor Residual Spraying) coverage is assessed by which key indicator in malaria surveillance?",
    options: ["Proportion of district population covered by at least one IRS round in the targeted period", "Number of IRS rounds completed per year", "Proportion of households using ITNs or LLINs", "Volume of insecticide used per square kilometer"],
    answer: 0,
    explanation: "IRS coverage is measured as the proportion of targeted structures (houses in high-risk areas) that were actually sprayed with the correct insecticide by trained spray workers in the appropriate season. The operational target in India is at least 85-90% of targeted structures. Coverage below 80% significantly reduces program effectiveness. Quality indicators also include proper surface coverage and spray timing relative to transmission season."
  },
  {
    id: 15,
    question: "LLIN (Long-Lasting Insecticidal Net) distribution coverage is measured by which standard indicator?",
    options: ["Proportion of households owning at least one LLIN", "Proportion of targeted population with access to an LLIN (typically one LLIN per two persons in endemic areas), and proportion who slept under an LLIN the previous night", "Number of LLINs distributed divided by total population", "Proportion of children under five sleeping under LLINs"],
    answer: 1,
    explanation: "LLIN coverage indicators include: access (proportion of population with access to an LLIN in the household, calculated as one LLIN per two persons), and use (proportion of the population or specific vulnerable groups - pregnant women, under-five children - who slept under an LLIN the previous night). Universal coverage requires one LLIN per two people sleeping in the household. Access-to-use gaps indicate barriers (non-use despite availability) that require behavioral interventions."
  },
  {
    id: 16,
    question: "The WHO cone bioassay is used for which purpose in malaria vector control programs?",
    options: ["Determining the concentration of insecticide needed for IRS in the field", "Testing the residual efficacy of insecticide-sprayed surfaces (walls) by exposing mosquitoes in cones placed on the sprayed surface", "Assessing insecticide resistance in wild-caught Anopheles mosquitoes", "Measuring LLIN insecticidal activity after washing"],
    answer: 1,
    explanation: "The WHO cone bioassay tests the residual efficacy of insecticide on sprayed surfaces (walls, ceilings). Standardized cones are placed on the sprayed surface, adult female Anopheles are exposed for a defined period (typically 30 minutes), then held for 24 hours and mortality recorded. It is used to monitor how long IRS insecticide remains effective on different wall surface types (mud, cement, wood) and is distinct from the WHO tube bioassay used for resistance monitoring."
  },
  {
    id: 17,
    question: "Malaria insecticide resistance monitoring using the WHO tube bioassay is designed to detect resistance in mosquito populations. A mosquito population is classified as having confirmed resistance when 24-hour mortality after exposure to the discriminating dose is:",
    options: ["More than 98%", "Between 90-97%", "Less than 90%", "Less than 50%"],
    answer: 2,
    explanation: "In the WHO tube/bottle bioassay: mortality >98% at 24 hours = susceptible population; mortality 90-97% = possible/suspected resistance (requires further testing including synergist assays and biochemical/molecular characterization); mortality <90% = confirmed resistance. Resistance to pyrethroids (the primary LLIN and IRS class) has been confirmed in multiple Anopheles species in India, including An. culicifacies and An. stephensi, with significant implications for LLIN and IRS effectiveness."
  },
  {
    id: 18,
    question: "Entomological surveillance for malaria uses the indicator 'man-hour density' (MHD) to measure vector density. MHD is calculated as:",
    options: ["Number of mosquitoes caught per trap per night", "Number of Anopheles mosquitoes caught per person per hour of collection (human landing catch or collection from resting sites)", "Number of Anopheles larvae found per dip (standard dipper)", "Number of mosquito bites received per person per night"],
    answer: 1,
    explanation: "Man-Hour Density (MHD) = Total number of Anopheles mosquitoes collected / Number of man-hours of collection. It is calculated from human landing catches or indoor/outdoor resting catches and represents the average number of mosquitoes collected per person per hour. MHD is used to monitor adult vector density trends, assess seasonal transmission intensity, and evaluate the impact of vector control interventions. It is a key entomological indicator for assessing malaria transmission risk."
  },
  {
    id: 19,
    question: "In India, the NCVBDC (previously NVBDCP) Antimalarial Drug Policy is revised periodically based on therapeutic efficacy study (TES) data. TES monitors which primary outcome?",
    options: ["Proportion of patients with G6PD deficiency requiring dose adjustment", "Treatment failure rates (day-28 or day-42 parasite clearance failure) of first-line drugs in sentinel sites across different malaria zones", "Rate of adverse drug reactions to artemisinin-based combinations", "Proportion of patients requiring hospitalization for severe malaria"],
    answer: 1,
    explanation: "Therapeutic Efficacy Studies (TES), also called in-vivo drug efficacy studies, monitor the clinical and parasitological response of patients with uncomplicated malaria to first-line antimalarial treatment. The primary outcome is treatment failure rate by day 28 (for P. falciparum, PCR-corrected to distinguish true recrudescence from reinfection) or day 42 for longer half-life drugs. WHO recommends changing first-line treatment policy when TES failure rate exceeds 10%. India conducts TES at sentinel sites across malaria zones."
  },
  {
    id: 20,
    question: "Larviciding in malaria control programs is most appropriate (operational justification) for which type of water bodies?",
    options: ["All water bodies including rivers, streams, and large lakes", "Only temporary rain-water collections lasting less than 2 weeks", "Permanent, fixed, identifiable, and mappable water bodies that cannot be drained or modified (ponds, irrigation tanks, mining pits)", "Agricultural fields during the kharif season"],
    answer: 2,
    explanation: "Operational larviciding is most appropriate and cost-effective for permanent, fixed, identifiable, and mappable water bodies that cannot be easily eliminated through source reduction - such as ponds, tanks, open wells, irrigation canals, and mining/construction pits. Larviciding temporary rain-water collections is operationally infeasible due to their transient and dispersed nature. The WHO recommends larviciding only where breeding sites are limited in number and accessible."
  },
  {
    id: 21,
    question: "The '1-3-7' malaria elimination surveillance strategy was originally developed in which country before being adapted for India?",
    options: ["Sri Lanka", "China", "Vietnam", "Thailand"],
    answer: 1,
    explanation: "China developed and implemented the 1-3-7 malaria elimination strategy as part of its successful national malaria elimination program. The strategy mandates: case notification within 1 day of diagnosis, case investigation and classification (indigenous/imported) within 3 days, and foci investigation and response (including vector control) within 7 days. China achieved WHO malaria elimination certification in 2021. India has adopted this strategy in elimination-phase districts under NCVBDC guidance."
  },
  {
    id: 22,
    question: "ICMR's malaria research network (MRCH - Malaria Research Centre, now part of ICMR-NIMR) has made significant contributions to which area of operational research?",
    options: ["Development of new antimalarial vaccines for clinical use", "Evidence generation for LLIN, IRS, insecticide resistance, vector bionomics, and tribal malaria epidemiology to inform national policy", "Malaria genomics exclusively for international publications", "Drug production and manufacturing for national programs"],
    answer: 1,
    explanation: "ICMR-National Institute of Malaria Research (ICMR-NIMR) and its field stations across India conduct operational research on: insecticide resistance monitoring in Anopheles vectors, vector bionomics and species composition, LLIN and IRS efficacy, malaria epidemiology in tribal communities, drug resistance monitoring, parasite genetics, and novel vector control tools. This research directly informs NCVBDC policy decisions on insecticide rotation, LLIN formulations, and intervention strategies."
  },
  {
    id: 23,
    question: "Mass Drug Administration (MDA) for malaria, if undertaken in India's elimination program, must achieve what minimum coverage to be epidemiologically effective?",
    options: ["50% coverage of eligible population", "75% coverage of eligible population", "Greater than 85-90% coverage of total eligible population in the target area", "Any coverage level combined with vector control"],
    answer: 2,
    explanation: "Mathematical modeling and field evidence from MDA trials indicate that coverage below 80-85% of the eligible population leaves sufficient untreated reservoirs of infection to re-seed transmission after MDA, making the intervention ineffective and potentially contributing to drug pressure. WHO recommends MDA for malaria only in specific elimination settings with robust epidemiological justification, adequate community consent, and infrastructure to achieve >85-90% coverage. Coverage monitoring through house-to-house records is essential."
  },
  {
    id: 24,
    question: "Under India's malaria surveillance system, which distinction is made between 'indigenous' and 'introduced' malaria cases?",
    options: ["Indigenous cases are acquired locally; introduced cases were acquired in another country", "Indigenous cases are transmitted by local mosquito vectors; introduced cases result from local transmission from an imported case (mosquito biting an imported case then transmitting locally)", "There is no distinction; all locally-acquired cases are classified as indigenous", "Indigenous cases refer to tribal populations; introduced cases refer to migrant laborers"],
    answer: 1,
    explanation: "In malaria elimination terminology: Imported case - acquired outside the reporting area (international or inter-district); Introduced case - locally transmitted from an imported case (first-generation local transmission from an imported case); Indigenous case - local transmission with no link to an imported case; Relapse case - P. vivax/P. ovale relapse from dormant hypnozoites; Induced case - transfusion/needle-sharing. This classification is critical for elimination surveillance to distinguish residual transmission from imported-driven transmission chains."
  },
  {
    id: 25,
    question: "The global dengue burden is estimated by WHO to have increased dramatically in recent decades. How many countries currently report dengue cases?",
    options: ["Fewer than 50 countries", "Approximately 100 countries", "More than 130 countries with over 3.9 billion people at risk", "All 195 WHO member states"],
    answer: 2,
    explanation: "WHO estimates that over 130 countries across tropical and subtropical regions report dengue, with over 3.9 billion people at risk. Annual reported cases have increased dramatically from less than 1 million before 2000 to over 5 million in recent years, with even higher true incidence estimated at 390 million infections per year (with only about 100 million clinically apparent). Dengue has spread to previously non-endemic regions including Europe and parts of the continental USA."
  },
  {
    id: 26,
    question: "The four dengue serotypes (DENV-1 to DENV-4) differ antigenically. Infection with one serotype provides which type of subsequent immunity?",
    options: ["Lifelong protection against all four serotypes (cross-protective immunity)", "Temporary (few months) cross-immunity against other serotypes, followed by lifelong homologous immunity but susceptibility to the other three serotypes", "No immunity to any serotype after recovery", "Immediate hypersensitivity reaction to other serotypes"],
    answer: 1,
    explanation: "Dengue immunity is serotype-specific: infection with DENV-1 provides lifelong protection against DENV-1 but only temporary (estimated 2-9 months) cross-protection against DENV-2, DENV-3, and DENV-4. After cross-immunity wanes, the person is fully susceptible to the other three serotypes and is at increased risk of severe dengue during secondary heterotypic infection through the Antibody-Dependent Enhancement (ADE) mechanism. This is the basis for why dengue epidemics occur in cycles related to serotype dynamics."
  },
  {
    id: 27,
    question: "In a population of 100,000 people, a dengue antibody seroprevalence survey finds that 65,000 individuals have dengue IgG antibodies to at least one serotype. If the total dengue IgG-positive individuals with antibodies to two or more serotypes number 35,000, what proportion of the seropositive population has been infected with more than one serotype?",
    options: ["35%", "53.8%", "65%", "Cannot be determined from this data"],
    answer: 1,
    explanation: "Proportion of seropositive individuals with multi-serotype infection = (35,000 / 65,000) x 100 = 53.8%. This type of analysis from seroprevalence surveys is important for understanding population immunity patterns, estimating the proportion at risk for ADE-mediated severe dengue, and modeling future epidemic potential as new serotypes are introduced into a population. High rates of multi-serotype immunity in adults, combined with naive children, can predict pediatric epidemic patterns."
  },
  {
    id: 28,
    question: "Antibody-Dependent Enhancement (ADE) in dengue most commonly occurs during which type of infection?",
    options: ["Primary dengue infection with any serotype", "Secondary (heterotypic) infection with a different dengue serotype", "Tertiary or quaternary dengue infection", "Infection in individuals with no prior dengue exposure"],
    answer: 1,
    explanation: "ADE most commonly occurs during secondary dengue infection with a different (heterotypic) serotype. Non-neutralizing cross-reactive antibodies from the primary infection form complexes with the new dengue serotype, which are recognized by Fc-gamma receptors on monocytes and macrophages, facilitating viral uptake and higher viral replication. This leads to higher viral load and cytokine storm, which are associated with plasma leakage and severe dengue (DHF/DSS). ADE risk is highest approximately 2-9 months after primary infection when cross-reactive but non-neutralizing antibodies predominate."
  },
  {
    id: 29,
    question: "The breeding habitats of Aedes aegypti are predominantly:",
    options: ["Ground pools, puddles, and flood water collections in agricultural areas", "Small, clean, stagnant water in artificial containers (water storage drums, flower vases, discarded tires, coolers, construction sites) in and around human habitation", "Polluted water drains and sewage systems in urban areas", "Natural water bodies such as streams, ponds, and wetlands"],
    answer: 1,
    explanation: "Aedes aegypti is a highly domesticated peridomestic species that preferentially breeds in small, clean, stagnant water in artificial containers close to or inside human habitations. Key breeding containers in Indian urban contexts include: overhead water storage tanks, underground sumps, cooler water trays, discarded tires, flower pots and vases, construction site water collections, and any container holding water for >7 days. It rarely breeds in polluted water or large natural water bodies, unlike Culex and Anopheles mosquitoes."
  },
  {
    id: 30,
    question: "Aedes aegypti eggs are unique among mosquito species because they:",
    options: ["Hatch immediately upon being deposited on water surfaces", "Can survive desiccation (drying) for months and hatch when re-submerged, enabling persistence through dry seasons", "Are deposited in floating egg rafts similar to Culex species", "Are deposited only on soil near water, not on container walls"],
    answer: 1,
    explanation: "Aedes aegypti lays eggs on moist container walls just above the waterline (not on the water surface). These eggs are highly resistant to desiccation and can survive for months (up to a year under optimal conditions) in a dried state. When containers are re-filled with water, the eggs rapidly hatch. This desiccation-resistant egg stage enables Ae. aegypti populations to survive dry seasons and explains why scrubbing container walls (not just emptying them) is essential for source reduction - merely emptying water leaves viable eggs on the walls."
  },
  {
    id: 31,
    question: "In India, dengue cases reported to NCVBDC are classified using which laboratory confirmation criteria?",
    options: ["Only PCR-confirmed cases are counted in national statistics", "NS1 antigen positivity or IgM/IgG antibody detection by ELISA, or PCR confirmation", "Only clinically diagnosed cases meeting the WHO clinical case definition", "Platelet count below 100,000 combined with fever and positive tourniquet test"],
    answer: 1,
    explanation: "India's national dengue surveillance under NCVBDC and IDSP counts laboratory-confirmed cases based on: (1) NS1 antigen detection (positive in first 5 days of illness), (2) dengue IgM antibody detection by MAC-ELISA (Day 5 onwards), or (3) RT-PCR confirmation. IgG alone in a single sample is not sufficient for acute case confirmation but is used for seroprevalence studies. National Reference Laboratories (NRLs) support district-level testing through a tiered laboratory network."
  },
  {
    id: 32,
    question: "Which IDSP reporting form is used for dengue case classification in India?",
    options: ["Form A (administrative data)", "S-form (Syndromic), P-form (Probable), and L-form (Laboratory confirmed) as part of the standard IDSP reporting cascade", "Only Form L (laboratory confirmed)", "IHR notification form for international reporting"],
    answer: 1,
    explanation: "IDSP uses a three-tier reporting system for dengue: S-form (Syndromic) - cases reported by health workers based on clinical signs (dengue-like illness); P-form (Probable) - cases meeting clinical case definition with NS1 or clinical criteria without laboratory confirmation; L-form (Laboratory confirmed) - cases with laboratory confirmation. This tiered reporting allows early detection of outbreaks (via syndromic surveillance) while building toward confirmed case counts. The L-form data feeds into NCVBDC national statistics."
  },
  {
    id: 33,
    question: "India's dengue trend shows which pattern in officially reported cases from 2010 to 2023?",
    options: ["Steady decline due to improved vector control", "Highly variable with epidemic peaks (>150,000 cases) alternating with lower years, and an overall increasing trend in reported cases due to improved surveillance and urbanization", "Stable at 10,000-20,000 cases per year throughout", "Exponential increase each year without any variation"],
    answer: 1,
    explanation: "India's dengue reporting shows epidemic years (such as 2015 with over 99,000 cases, 2017 with over 188,000 cases, and 2021 with over 193,000 cases) interspersed with lower-burden years, reflecting serotype dynamics, immune landscape shifts, and monsoon variations. The overall trend in reported cases has increased due to expanded laboratory capacity, improved surveillance under IDSP, and urbanization. True incidence is estimated to be 10-100 times higher than reported due to underdiagnosis and underreporting."
  },
  {
    id: 34,
    question: "In dengue surveillance, a House Index (HI) of 10% in pre-monsoon surveys in an urban area indicates:",
    options: ["Very low risk; no intervention required", "Moderate risk that requires surveillance monitoring only", "High risk level significantly above the WHO epidemic threshold of HI >1%, requiring urgent source reduction and vector control activities", "An acceptable baseline that requires only routine activities"],
    answer: 2,
    explanation: "A House Index of 10% means that 10% of inspected houses have active Aedes immature stage breeding. The WHO epidemic threshold for dengue risk is HI >1%. An HI of 10% is 10 times above this threshold, indicating high vector density and significant dengue transmission risk. This level would require immediate intensified source reduction (community mobilization, container removal/covering), targeted larviciding of positive containers, and adult Aedes surveillance. Outbreak preparedness activities should be activated."
  },
  {
    id: 35,
    question: "A dengue surveillance team surveys 200 houses and finds 30 houses positive for Aedes breeding, with a total of 45 positive containers among the inspected houses. The Breteau Index (BI) is:",
    options: ["15", "22.5", "30", "6.67"],
    answer: 1,
    explanation: "Breteau Index (BI) = (Number of positive containers / Total houses inspected) x 100 = (45 / 200) x 100 = 22.5. For comparison: House Index (HI) = (30 / 200) x 100 = 15%. Container Index (CI) would require knowing the total number of water-holding containers inspected. A BI of 22.5 is significantly above the danger threshold of BI >5 (or BI >20 in some guidelines indicates very high risk), indicating an urgent need for intensive vector control."
  },
  {
    id: 36,
    question: "Dengue seroprevalence studies using IgG ELISA on community samples serve which epidemiological purpose?",
    options: ["Estimating current (acute) dengue incidence during outbreaks", "Measuring the cumulative burden of past dengue exposure in a population, estimating serotype-specific immune landscape, and informing vaccine policy (seroprevalence requirement for Dengvaxia)", "Monitoring antiviral treatment response in hospitalized cases", "Diagnosing individual dengue cases in field settings"],
    answer: 1,
    explanation: "Dengue IgG seroprevalence studies measure the cumulative proportion of the population with previous dengue infection (immunity to at least one serotype). These data help: estimate the gap between true burden and reported cases, understand the serotype-specific immune landscape and predict future epidemic serotypes, identify age groups and geographic areas with highest susceptibility, and determine whether population seroprevalence meets the threshold recommended for Dengvaxia deployment (>70% seroprevalence in the target age group)."
  },
  {
    id: 37,
    question: "The epidemic threshold for dengue alert in a district under India's IDSP early warning system is best described as:",
    options: ["Any single dengue case confirmed in the district", "A fixed number of 50 cases per week in any district", "Cases exceeding two standard deviations above the historical mean for the same week in previous years, or a doubling of cases over two consecutive weeks", "A Case Fatality Rate exceeding 1%"],
    answer: 2,
    explanation: "IDSP uses epidemic thresholds based on historical baseline data for early warning: an alert is triggered when reported cases in a given week exceed two standard deviations above the 5-year historical mean for that same epidemiological week, or when there is a doubling of weekly cases over two consecutive weeks. Districts with no historical baseline may use absolute case thresholds. This statistical approach allows for local calibration accounting for seasonal variation, unlike a fixed national threshold."
  },
  {
    id: 38,
    question: "The primary principle of source reduction for dengue control is based on which entomological characteristic of Aedes aegypti?",
    options: ["Its wide flight range that disperses from breeding sites over several kilometers", "Its dependence on small, artificial, clean water containers for breeding, which are manageable through regular emptying, covering, or removal", "Its preference for biting at night when occupants are sleeping indoors", "Its susceptibility to all pyrethroid insecticides in common use"],
    answer: 1,
    explanation: "Source reduction is effective against Ae. aegypti because it preferentially breeds in small, artificial water containers that are finite, identifiable, and manageable by communities. Its limited flight range (100-200 m) means that eliminating breeding within the immediate vicinity of households directly protects those households. Since it does not breed in large water bodies or drains (unlike Culex), targeted container management can achieve significant population reduction without broad-spectrum environmental insecticide use."
  },
  {
    id: 39,
    question: "Integrated Vector Management (IVM) for dengue is operationally distinct from single-method vector control primarily because:",
    options: ["IVM uses only chemical insecticides in combination", "IVM integrates evidence-based decision-making combining biological, environmental, and chemical methods based on local vector ecology, resource availability, and intersectoral collaboration", "IVM is more expensive than single-method approaches", "IVM focuses exclusively on adult mosquito control through space spraying"],
    answer: 1,
    explanation: "IVM (Integrated Vector Management) is a rational decision-making process that selects and combines vector control methods (source reduction, biological control with BTI/larvivorous fish, targeted chemical larviciding, space spraying for outbreak response, personal protection, and legislative enforcement of container management bylaws) based on local evidence of breeding site composition, vector density, outbreak risk, and available resources. It promotes intersectoral collaboration (municipal bodies, urban development, water utilities) and community participation, unlike single-method insecticide-focused approaches."
  },
  {
    id: 40,
    question: "Space spraying (fogging) effectiveness for dengue control is maximized when conducted:",
    options: ["At any time of day regardless of meteorological conditions", "At night when residents are indoors and less exposed to insecticide", "Early morning (06:00-09:00) or late afternoon (15:00-17:00) during Aedes peak biting periods, with low wind speed (<10 km/h) and no rain, and when confirmed active dengue cases are present nearby", "Only in outdoor open areas, not inside homes"],
    answer: 2,
    explanation: "Space spraying effectiveness requires: (1) timing aligned with Ae. aegypti peak activity (early morning or late afternoon) when mosquitoes are flying and can contact insecticide droplets; (2) meteorological conditions - low wind speed to prevent rapid insecticide dispersion and no rain; (3) optimal droplet size for ULV (aerosol particles 5-20 microns remain airborne and contact flying mosquitoes); and (4) epidemiological justification (active cases in the area). Spraying at wrong times (night, when Aedes rests in dark corners) or in high wind wastes insecticide and provides no benefit."
  },
  {
    id: 41,
    question: "Community participation models for dengue control have shown that which approach achieves the most sustained reduction in container positivity indices?",
    options: ["One-time mass fogging campaigns conducted by the health department", "Government-led IRS programs without community involvement", "Community-led source reduction with trained local volunteers (house-to-house inspection, peer education, school-based programs) integrated with 'Dry Day' campaigns and enforced container management bylaws", "Distribution of chemical larvicide to households for self-application"],
    answer: 2,
    explanation: "Evidence from dengue control programs in Singapore, Cuba, Thailand, and India demonstrates that sustained reductions in vector indices require community ownership of source reduction. Key elements include: training local volunteers for house-to-house inspection and education; school-based programs (students as change agents); enforced municipal bylaws mandating covered water storage; weekly 'Dry Day' campaigns; and integration with primary healthcare outreach workers. Government-only spraying programs without community participation show rapid rebound in vector indices after each intervention cycle."
  },
  {
    id: 42,
    question: "The Wolbachia-based dengue control strategy, being researched and deployed in several countries, works by which mechanism?",
    options: ["Wolbachia bacteria kill adult Aedes mosquitoes directly", "Introducing Wolbachia-infected Aedes aegypti into the wild population; Wolbachia blocks dengue virus replication in the mosquito, reducing transmission capacity", "Wolbachia produces insecticide toxic to Aedes larvae", "Wolbachia competes with dengue virus for mosquito hosts, eliminating the virus from natural populations"],
    answer: 1,
    explanation: "Wolbachia is a naturally occurring intracellular bacteria absent from wild Ae. aegypti. When Wolbachia (particularly the wMel strain) is introduced into Ae. aegypti and these mosquitoes are released into wild populations, Wolbachia: (1) blocks dengue virus (and also Zika, chikungunya) replication in the mosquito gut, reducing vector competence; (2) spreads through wild populations via cytoplasmic incompatibility (infected females produce more offspring). The World Mosquito Program has deployed Wolbachia-infected Ae. aegypti in Indonesia, Colombia, Australia, and is conducting research in India."
  },
  {
    id: 43,
    question: "The Sterile Insect Technique (SIT) for Aedes aegypti control involves:",
    options: ["Sterilizing water containers with UV radiation to prevent mosquito breeding", "Mass release of radiation-sterilized male Aedes mosquitoes that mate with wild females, producing no viable offspring and suppressing the wild population over time", "Using sterile growth media to prevent larval development in water containers", "Treating wild mosquito populations with chemosterilants through insecticide-baited stations"],
    answer: 1,
    explanation: "Sterile Insect Technique (SIT) for Ae. aegypti involves: producing large numbers of male mosquitoes (males do not bite) in insectary facilities, sterilizing them using irradiation or other methods, and releasing them into the target area. Sterile males mate with wild females, which lay non-viable eggs. Sustained mass releases suppress or eliminate wild populations over time without insecticides. SIT combined with Wolbachia (IIT - Incompatible Insect Technique) is being researched. Challenges include mass production, sex separation, and release logistics."
  },
  {
    id: 44,
    question: "The seroprevalence requirement for deploying Dengvaxia (CYD-TDV) vaccine in a population, as recommended by WHO SAGE, is:",
    options: ["Vaccination is recommended only in settings with dengue seroprevalence >50% in the target age group", "Vaccination should only be given to individuals with confirmed prior dengue infection (seropositive), with pre-vaccination screening; WHO recommends population seroprevalence >70% for programmatic deployment", "Vaccination is recommended regardless of seroprevalence once dengue is endemic in the country", "Vaccination is only for seronegative individuals to prime them before natural infection"],
    answer: 1,
    explanation: "Following the Philippines safety signal, WHO SAGE revised Dengvaxia recommendations in 2018: (1) Dengvaxia should only be given to individuals who have had a prior dengue infection (seropositive), confirmed by pre-vaccination screening; (2) For programmatic decisions, WHO recommends vaccination only in settings where seroprevalence in the target age group exceeds 70-80%, to ensure the majority of vaccinees are seropositive; (3) Vaccinating seronegative individuals creates immunological 'priming' that increases severe dengue risk upon subsequent natural infection (vaccine-enhanced disease)."
  },
  {
    id: 45,
    question: "A dengue outbreak investigation team arrives in a locality with 15 confirmed dengue cases reported in one week. The correct sequence of steps in the outbreak investigation is:",
    options: ["Step 1: Start fogging; Step 2: Collect blood samples; Step 3: Report to state", "Step 1: Verify diagnosis and confirm outbreak; Step 2: Define and count cases (case finding); Step 3: Describe outbreak by person, place, time; Step 4: Entomological assessment (Stegomyia indices); Step 5: Formulate and test hypotheses; Step 6: Implement control measures; Step 7: Communicate and report", "Step 1: Quarantine the affected area; Step 2: Treat all residents with antivirals; Step 3: Conduct surveillance", "Step 1: Admit all fever cases to hospital; Step 2: Collect blood for serology; Step 3: Declare epidemic"],
    answer: 1,
    explanation: "Standard dengue outbreak investigation follows epidemiological principles: (1) Verify the diagnosis (confirm laboratory-confirmed dengue cases) and confirm epidemic threshold exceeded; (2) Define cases with a case definition and count all cases (active case finding); (3) Describe epidemiological characteristics (epidemic curve, mapping of cases, age/sex/occupation distribution); (4) Entomological survey (House Index, Container Index, Breteau Index, vector species identification); (5) Formulate hypotheses about source and transmission; (6) Implement emergency control measures (source reduction, fogging at case sites, case management support); (7) Communicate findings and submit outbreak investigation report."
  },
  {
    id: 46,
    question: "Environmental management for dengue control in urban settings is most effectively implemented through which intersectoral collaboration?",
    options: ["Health department unilaterally conducting source reduction in all premises", "Partnership between municipal corporations (water supply, solid waste, urban planning), public works departments (drainage), health department, and communities - addressing root causes of container breeding through urban design", "Defense department deploying personnel for house-to-house inspection", "Collaboration between hospitals and pharmaceutical companies for antiviral distribution"],
    answer: 1,
    explanation: "Environmental management for dengue requires intersectoral action because the root causes of Ae. aegypti breeding are multi-sectoral: intermittent water supply (forcing storage in uncovered containers, managed by water utilities); poor solid waste management (creating abandoned tire and container breeding sites, managed by municipal solid waste departments); lack of piped water access (creating need for large storage tanks); inadequate drainage (stagnant water); and building design lacking covered water storage. The health sector alone cannot address these drivers; intersectoral coordination under a municipal body or district health society framework is essential."
  },
  {
    id: 47,
    question: "Rapid Response Teams (RRTs) for dengue outbreaks in India are typically constituted under which program structure?",
    options: ["Deployed directly by ICMR research teams from New Delhi", "District-level RRTs constituted under the Chief Medical Officer/CMHO, comprising epidemiologist, entomologist, public health officer, and lab technician, activated through IDSP outbreak alert mechanism", "State-level RRTs activated only for outbreaks exceeding 500 cases", "WHO-India deployed teams from regional office"],
    answer: 1,
    explanation: "District-level Rapid Response Teams (RRTs) are constituted under the Chief Medical Officer (CMO) / Chief Medical and Health Officer (CMHO) and include: district epidemiologist (or public health officer trained in epidemiology), entomologist or vector control officer, laboratory technician, and clinical member. They are activated through the IDSP early warning and response system when the epidemic threshold is crossed. State Integrated Disease Surveillance Units (SIDSP) coordinate multi-district outbreaks and escalate to central level if required. NCDC provides technical support for large or complex outbreaks."
  },
  {
    id: 48,
    question: "Cost-effectiveness analysis of dengue vector control interventions has consistently shown which intervention to have the best cost-effectiveness ratio when applied correctly?",
    options: ["Routine space spraying (fogging) twice per week throughout the dengue season", "Community-based source reduction and container management, which has low direct cost, high community acceptability, and sustainable impact when institutionalized", "Mass distribution of personal insect repellents to all households", "Prophylactic antiviral administration to high-risk households"],
    answer: 1,
    explanation: "Economic analyses of dengue control (from Thailand, Singapore, Brazil, India, and other endemic settings) consistently show that community-based source reduction (organizing households to empty, cover, or remove water containers on a weekly basis) has the most favorable cost-effectiveness ratio because: (1) direct costs are minimal (community labor, health worker time); (2) impact is sustained once behavior change is institutionalized; (3) it addresses the root cause (vector breeding) rather than downstream stages. Space spraying has high operational costs, temporary effect, and requires frequent repetition. Vector control cost-effectiveness studies inform WHO and national policy on resource allocation."
  },
  {
    id: 49,
    question: "ICMR-Vector Control Research Centre (ICMR-VCRC) in Puducherry conducts dengue research relevant to the national program. Which research area is central to ICMR-VCRC's mandate?",
    options: ["Clinical trial management for dengue antivirals", "Operational research on vector bionomics, novel vector control tools (SIT, autocidal gravid ovitraps, biological control), insecticide resistance, and integrated vector management strategies for dengue and other vector-borne diseases", "Dengue vaccine production and licensing", "Dengue genomics exclusively for academic publications"],
    answer: 1,
    explanation: "ICMR-VCRC (Vector Control Research Centre) in Puducherry is a premier vector control research institution under ICMR, with a mandate that includes: dengue and filaria vector bionomics and ecology, insecticide resistance mechanisms and monitoring, novel vector control tools (sterile insect technique, ovitraps, autocidal gravid ovitraps, biological control agents), integrated vector management strategies, and operational research to translate vector control evidence into national program recommendations. It directly supports NCVBDC policy and trains national vector control personnel."
  },
  {
    id: 50,
    question: "In dengue surveillance research, the Ovitrap Index (OI) is used as an alternative to traditional Stegomyia indices. The Ovitrap Index is calculated as:",
    options: ["(Number of Aedes eggs per trap / Total traps inspected) x 100", "(Number of positive ovitraps / Total ovitraps deployed) x 100", "(Number of adult Aedes caught in ovitraps / Total ovitraps) x 100", "Number of eggs counted per positive ovitrap"],
    answer: 1,
    explanation: "Ovitrap Index (OI) = (Number of ovitraps positive for Aedes eggs / Total number of ovitraps deployed and inspected) x 100. Ovitraps (small black containers with a paddle or filter paper for egg laying) are deployed at fixed sites and inspected weekly. The OI reflects Ae. aegypti oviposition activity and is particularly useful for: early detection of seasonal Aedes activity before house-to-house surveys are needed; monitoring vector rebound after control interventions; and surveillance in low-density situations near the elimination threshold where traditional Stegomyia indices may miss low-level infestation. Ovitrap surveillance is more sensitive and less resource-intensive than house-to-house surveys."
  },
];

export default questions;

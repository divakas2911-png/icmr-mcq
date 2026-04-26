const questions = [
  {
    id: 1,
    question: "According to the World Health Organization World Malaria Report 2023, which region accounts for the highest proportion of global malaria cases?",
    options: ["South-East Asia Region", "African Region", "Eastern Mediterranean Region", "Western Pacific Region"],
    answer: 1,
    explanation: "The WHO African Region consistently accounts for over 90% of global malaria cases and deaths. Sub-Saharan Africa bears the greatest burden due to the predominance of Plasmodium falciparum and the highly efficient vector Anopheles gambiae."
  },
  {
    id: 2,
    question: "In India, the National Vector Borne Disease Control Programme (NVBDCP) was restructured and renamed to which organization?",
    options: ["National Centre for Disease Control (NCDC)", "National Centre for Vector Borne Diseases Control (NCVBDC)", "Directorate of National Health Mission", "Central Malaria Bureau"],
    answer: 1,
    explanation: "The NVBDCP was restructured and renamed as the National Centre for Vector Borne Diseases Control (NCVBDC) under the Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India. It oversees control programs for malaria, dengue, chikungunya, Japanese encephalitis, kala-azar, and lymphatic filariasis."
  },
  {
    id: 3,
    question: "The Annual Parasite Incidence (API) is calculated using which formula?",
    options: ["(Number of positive blood slides / Number of blood slides examined) x 100", "(Number of confirmed malaria cases / Mid-year population) x 1000", "(Number of confirmed malaria cases / Number of blood slides examined) x 1000", "(Number of fever cases / Mid-year population) x 100"],
    answer: 1,
    explanation: "API = (Number of confirmed malaria cases in a year / Mid-year population of the area) x 1000. It is the most important epidemiological indicator for malaria burden in India and is used for stratification of malaria-endemic areas."
  },
  {
    id: 4,
    question: "The Annual Blood Examination Rate (ABER) is the indicator for malaria surveillance intensity. The minimum recommended ABER target in India is:",
    options: ["5% of the population", "10% of the population", "15% of the population", "20% of the population"],
    answer: 1,
    explanation: "The recommended minimum ABER is 10% of the population per year. ABER = (Number of blood slides examined in a year / Mid-year population) x 100. It measures the intensity of fever surveillance and case detection efforts."
  },
  {
    id: 5,
    question: "The Slide Positivity Rate (SPR) in malaria surveillance is defined as:",
    options: ["Number of malaria positive slides per 1000 population", "(Number of positive slides / Number of slides examined) x 100", "(Number of falciparum positive slides / Number of total positive slides) x 100", "Number of positive slides per 100 fever cases"],
    answer: 1,
    explanation: "SPR = (Number of blood slides found positive for malaria / Total number of blood slides examined) x 100. It indicates the proportion of examined slides that are positive for malaria parasites and reflects malaria transmission intensity in the community."
  },
  {
    id: 6,
    question: "The Slide Falciparum Rate (SFR) is an indicator specifically used in malaria to measure:",
    options: ["The proportion of falciparum cases among all fever cases", "The proportion of falciparum positive slides among all slides examined", "The proportion of falciparum cases among all confirmed malaria cases", "The case fatality rate due to Plasmodium falciparum"],
    answer: 1,
    explanation: "SFR = (Number of slides found positive for P. falciparum / Total number of blood slides examined) x 100. It specifically monitors the burden of the more dangerous P. falciparum species and helps prioritize resources for falciparum-endemic areas."
  },
  {
    id: 7,
    question: "Under malaria stratification in India, a district/area with API greater than 2 per 1000 population is classified as:",
    options: ["Low transmission area", "Moderate transmission area", "High transmission area", "Hyperendemic area"],
    answer: 2,
    explanation: "Under the National Strategic Plan for Malaria Elimination, areas are stratified based on API: API <1 = low transmission (Category 1), API 1-2 = moderate transmission (Category 2), API >2 = high transmission (Category 3). High transmission areas require intensified interventions including IRS, LLINs, and enhanced surveillance."
  },
  {
    id: 8,
    question: "In India, which state/union territory was declared malaria-free (zero indigenous cases) first as part of the national elimination drive?",
    options: ["Goa", "Kerala", "Himachal Pradesh", "Sikkim"],
    answer: 2,
    explanation: "Himachal Pradesh was one of the first states to achieve zero indigenous malaria cases and has been maintaining this status. Several states in northern and north-eastern India have achieved or are close to achieving elimination. The National Strategic Plan aims for malaria elimination from the entire country by 2030."
  },
  {
    id: 9,
    question: "India's National Strategic Plan for Malaria Elimination 2017-2022 set the target to eliminate malaria (zero indigenous cases) from how many states/UTs by 2022?",
    options: ["5 states/UTs", "15 states/UTs", "21 states/UTs", "All states/UTs"],
    answer: 2,
    explanation: "The National Strategic Plan for Malaria Elimination 2017-2022 set a target to eliminate malaria from 21 states/UTs by 2022, reduce malaria to zero indigenous cases in the remaining states by 2027, and achieve malaria-free status for the entire country by 2030 - the target set under the E-2030 initiative."
  },
  {
    id: 10,
    question: "In India, Plasmodium vivax accounts for approximately what percentage of total malaria cases?",
    options: ["20-25%", "35-40%", "50-60%", "70-75%"],
    answer: 2,
    explanation: "In India, P. vivax accounts for approximately 50-60% of total malaria cases, while P. falciparum accounts for about 40-50%. However, P. falciparum predominates in forested, tribal, and northeastern states. The distribution varies significantly by geography - P. vivax is more common in plains while P. falciparum dominates in high-burden tribal states."
  },
  {
    id: 11,
    question: "Imported malaria in India is defined as:",
    options: ["Malaria cases brought in from other countries only", "Malaria cases acquired outside the district/state of reporting", "Malaria cases in travelers returning from endemic areas within India", "Malaria cases in migrants from high-endemic districts"],
    answer: 1,
    explanation: "Imported malaria refers to malaria cases where the infection was acquired outside the district or state where the case is being reported. It includes both international (from other countries) and inter-district/inter-state importation. Distinguishing imported from indigenous cases is critical for elimination surveillance."
  },
  {
    id: 12,
    question: "The peak malaria transmission season in most parts of India corresponds to which period?",
    options: ["January to March (winter)", "April to June (summer)", "July to November (post-monsoon and monsoon)", "December to February (early winter)"],
    answer: 2,
    explanation: "Malaria transmission peaks during and after the monsoon season (July to November) in most parts of India, when Anopheles mosquito breeding is at its highest due to accumulated water. In some states like Rajasthan, a second peak may occur in winter due to canal irrigation. The Northeast experiences transmission throughout the year."
  },
  {
    id: 13,
    question: "Indoor Residual Spraying (IRS) for malaria vector control should be completed before the malaria season starts. The recommended timing is:",
    options: ["At least 1 month before the start of transmission season", "At least 2 weeks before the start of transmission season", "During peak transmission season", "Immediately after the monsoon starts"],
    answer: 0,
    explanation: "IRS should be completed at least 1 month (preferably 4-6 weeks) before the start of the malaria transmission season so that the insecticide is in place before vector populations build up. IRS protects for 3-6 months depending on the insecticide used and surface type."
  },
  {
    id: 14,
    question: "Long-Lasting Insecticidal Nets (LLINs) differ from conventionally treated ITNs primarily because:",
    options: ["LLINs use a different class of insecticide", "LLINs retain insecticidal efficacy for 3 years or 20 washes without retreatment", "LLINs are made of a finer mesh than ITNs", "LLINs are effective against all species of Anopheles"],
    answer: 1,
    explanation: "LLINs (Long-Lasting Insecticidal Nets) have insecticide incorporated into or bound to the net fibers and retain efficacy for at least 3 years or 20 standard washes without retreatment. Conventional ITNs (Insecticide-Treated Nets) require re-treatment with insecticide every 6-12 months. This makes LLINs more practical for large-scale programs."
  },
  {
    id: 15,
    question: "Biological control of malaria vectors using Gambusia affinis (mosquito fish) works by which mechanism?",
    options: ["It releases a toxin that kills Anopheles larvae", "It is a larvivorous fish that eats mosquito larvae and pupae", "It competes with Anopheles for breeding sites", "It produces substances that prevent mosquito oviposition"],
    answer: 1,
    explanation: "Gambusia affinis (mosquito fish) and Poecilia reticulata (guppy fish) are larvivorous fish used in biological control of malaria vectors. They feed on mosquito larvae and pupae in water bodies. They are introduced in ponds, tanks, and slow-moving water bodies. However, they should not be used in water bodies meant for drinking water or where they may displace native species."
  },
  {
    id: 16,
    question: "Under the National Drug Policy for Malaria in India, the first-line treatment for uncomplicated Plasmodium falciparum malaria is:",
    options: ["Chloroquine for 3 days", "Artemisinin-based Combination Therapy (ACT) - Artemether-Lumefantrine", "Quinine for 7 days", "Sulfadoxine-Pyrimethamine single dose"],
    answer: 1,
    explanation: "As per India's National Drug Policy for Malaria (revised), uncomplicated P. falciparum malaria is treated with Artemether-Lumefantrine (AL) as first-line ACT, replacing the earlier Artesunate + Sulfadoxine-Pyrimethamine (AS+SP) regimen in most areas. ACT is used because of widespread chloroquine resistance in P. falciparum. A single dose of Primaquine (0.75 mg/kg) is added as a gametocytocidal agent."
  },
  {
    id: 17,
    question: "Radical cure for Plasmodium vivax malaria in India requires primaquine administration for how many days?",
    options: ["3 days", "7 days", "14 days", "21 days"],
    answer: 2,
    explanation: "Radical cure for P. vivax malaria requires Primaquine 0.25 mg/kg/day for 14 days to eliminate hepatic hypnozoites (dormant liver stages) and prevent relapses. This is in addition to the standard chloroquine treatment (25 mg/kg over 3 days). G6PD testing is recommended before primaquine administration as it can cause hemolysis in G6PD-deficient individuals."
  },
  {
    id: 18,
    question: "The recommended insecticide for larviciding in malaria control programs in India, applied to water bodies at a dose of 1 mg/L, is:",
    options: ["DDT (Dichloro-diphenyl-trichloroethane)", "Malathion", "Temephos (Abate)", "Deltamethrin"],
    answer: 2,
    explanation: "Temephos (Abate) is the WHO-recommended larvicide used for malaria vector control, applied at a concentration of 1 mg/L (1 ppm) to water bodies. It is an organophosphate with low mammalian toxicity and is also used for Aedes control in dengue programs. Malathion is used as a space spray, while DDT is used for IRS in some high-burden areas."
  },
  {
    id: 19,
    question: "Insecticide resistance monitoring in malaria vectors is conducted using WHO-standard bioassay tests. Resistance to pyrethroids in Anopheles mosquitoes is confirmed when mortality in the discriminating dose bioassay is:",
    options: ["More than 98%", "Between 90-98% (suspected resistance)", "Less than 90% (confirmed resistance)", "Less than 50%"],
    answer: 2,
    explanation: "In WHO tube bioassay tests: mortality >98% = susceptible; mortality 90-98% = possible resistance (requires further investigation); mortality <90% = confirmed resistance. Pyrethroid resistance in Anopheles vectors is increasingly reported in India and has significant implications for LLIN and IRS effectiveness."
  },
  {
    id: 20,
    question: "Malaria Rapid Diagnostic Tests (mRDTs) most commonly detect which antigen of Plasmodium falciparum?",
    options: ["Circumsporozoite protein (CSP)", "Histidine-Rich Protein 2 (HRP2)", "Merozoite Surface Protein 1 (MSP1)", "Glutamate-Dehydrogenase (GDH)"],
    answer: 1,
    explanation: "Most mRDTs detect Histidine-Rich Protein 2 (HRP2) which is specific to P. falciparum. Combination RDTs also detect pan-malarial antigens like pLDH (Plasmodium Lactate Dehydrogenase) or aldolase to detect non-falciparum species. False negatives can occur due to hrp2/hrp3 gene deletions in some P. falciparum strains, which is being increasingly reported globally including in India."
  },
  {
    id: 21,
    question: "Environmental management for malaria vector control includes which of the following anti-larval measures?",
    options: ["Fogging with pyrethroid insecticides", "Source reduction by draining or filling water bodies", "IRS with DDT", "Mass drug administration"],
    answer: 1,
    explanation: "Environmental management for malaria vector control includes source reduction (filling or draining breeding sites), water management (flushing irrigation canals, intermittent irrigation), and habitat modification (land reclamation, vegetation removal from water bodies). These are permanent or long-lasting measures that reduce vector breeding without chemical use."
  },
  {
    id: 22,
    question: "Mass Drug Administration (MDA) for malaria elimination in India is recommended under which circumstances?",
    options: ["In all districts with API >2", "In high-burden areas during elimination phase with specific epidemiological justification and community consent", "Annually in all tribal areas", "Only during malaria outbreaks"],
    answer: 1,
    explanation: "MDA for malaria (giving antimalarial drugs to the entire eligible population regardless of symptoms) is recommended in specific high-burden elimination settings with adequate epidemiological justification, high coverage, and community consent. It is not a routine measure and requires WHO guidance. It has been used in some high-burden tribal areas in India with appropriate safeguards."
  },
  {
    id: 23,
    question: "Fever surveillance under the malaria program requires that all fever cases in endemic areas be investigated with a blood smear or RDT. The ASHA/MPW must ensure blood slides are examined within how many hours of collection?",
    options: ["6 hours", "12 hours", "24 hours", "48 hours"],
    answer: 2,
    explanation: "Blood smears for malaria must be prepared and stained within 24 hours of collection to ensure quality and prevent deterioration of parasites. In the field, peripheral blood smear preparation is done by the MPW/ASHA, and slides are sent to the PHC laboratory. mRDTs allow immediate diagnosis in the field, improving early case detection and treatment."
  },
  {
    id: 24,
    question: "Under the National Malaria Control Programme, the '1-3-7' strategy for malaria elimination refers to:",
    options: ["Treat within 1 day, investigate within 3 days, respond within 7 days", "1 blood slide per case, 3-day treatment, 7-day follow-up", "API <1 by 2022, <3 by 2025, zero by 2027", "1 IRS round, 3 LLINs per household, 7-day chloroquine course"],
    answer: 0,
    explanation: "The 1-3-7 malaria elimination strategy (adapted from China's experience) involves: Case notification within 1 day, Case investigation and classification within 3 days, and Public health response (foci investigation and response) within 7 days. This approach is being adopted in India's elimination districts to ensure rapid response to every malaria case."
  },
  {
    id: 25,
    question: "Dengue is caused by a flavivirus with how many distinct serotypes?",
    options: ["2 serotypes", "3 serotypes", "4 serotypes", "5 serotypes"],
    answer: 2,
    explanation: "Dengue virus has 4 distinct serotypes: DENV-1, DENV-2, DENV-3, and DENV-4. All four serotypes can cause the full spectrum of dengue disease from mild dengue fever to severe dengue. A fifth serotype (DENV-5) has been proposed but is not yet officially recognized. Infection with one serotype provides lifelong immunity to that serotype but only temporary cross-immunity to others."
  },
  {
    id: 26,
    question: "Antibody-Dependent Enhancement (ADE) in dengue pathogenesis refers to:",
    options: ["Enhancement of viral replication by pre-existing heterologous dengue antibodies that facilitate virus entry into monocytes/macrophages", "Enhancement of dengue vaccine efficacy by adjuvants", "The role of T-cell antibodies in preventing dengue reinfection", "Neutralizing antibody response that prevents severe dengue"],
    answer: 0,
    explanation: "ADE occurs during secondary infection with a different dengue serotype. Pre-existing non-neutralizing (heterologous) antibodies from the primary infection form complexes with the new serotype virus, which are then efficiently phagocytosed by Fc-receptor bearing monocytes/macrophages, resulting in enhanced viral replication. This mechanism is thought to contribute to the increased risk of severe dengue (dengue hemorrhagic fever/dengue shock syndrome) during secondary infections."
  },
  {
    id: 27,
    question: "The primary vector of dengue in urban India is Aedes aegypti. Which characteristic best describes its breeding behavior?",
    options: ["Breeds in large natural water bodies like ponds and lakes", "Breeds in small artificial and natural water containers close to human habitation", "Breeds in slow-moving polluted water drains", "Breeds in paddy fields and agricultural areas"],
    answer: 1,
    explanation: "Aedes aegypti is a highly domesticated urban mosquito that breeds in small, clean, stagnant water containers in and around human habitations - such as water storage containers, flower pots, discarded tires, coolers, overhead tanks, and any artificial container holding water. It rarely breeds in large natural water bodies or polluted water, unlike Culex mosquitoes."
  },
  {
    id: 28,
    question: "Aedes aegypti is primarily a daytime biter. Its peak biting activity occurs at:",
    options: ["Midnight to early morning (00:00-04:00 hours)", "Early morning (06:00-09:00 hours) and late afternoon (15:00-17:00 hours)", "Dusk period (18:00-20:00 hours)", "Throughout the day with no peak"],
    answer: 1,
    explanation: "Aedes aegypti is a diurnal (daytime) biter with two peak biting periods: early morning for approximately 2 hours after sunrise (approximately 06:00-09:00 IST) and late afternoon (approximately 15:00-17:00 IST). This distinguishes it from Anopheles (night-biting) and Culex (evening/night-biting) mosquitoes and has implications for personal protection measures."
  },
  {
    id: 29,
    question: "The flight range of Aedes aegypti from its breeding site is approximately:",
    options: ["500 meters", "100-200 meters", "1-2 kilometers", "5 kilometers"],
    answer: 1,
    explanation: "Aedes aegypti has a relatively limited flight range of approximately 100-200 meters from its breeding site, rarely exceeding 400 meters. This short flight range makes it a highly localized urban vector and means that its breeding sites are typically very close to where cases are detected. This characteristic is important for targeted source reduction strategies."
  },
  {
    id: 30,
    question: "Aedes albopictus (Asian tiger mosquito) differs from Aedes aegypti in which important epidemiological aspect?",
    options: ["Aedes albopictus cannot transmit dengue", "Aedes albopictus is exclusively an urban mosquito", "Aedes albopictus can survive in cooler climates and is spreading to peri-urban and rural areas", "Aedes albopictus only bites at night"],
    answer: 2,
    explanation: "Aedes albopictus is a competent secondary vector for dengue (and also chikungunya, Zika). Unlike Ae. aegypti, it is more cold-tolerant (can overwinter as eggs), can adapt to outdoor breeding sites, and has spread to peri-urban and rural areas as well as temperate regions. This geographic expansion is contributing to dengue spread beyond traditional urban settings."
  },
  {
    id: 31,
    question: "In India, dengue cases are reported under which national surveillance system?",
    options: ["National Malaria Control Programme surveillance", "Integrated Disease Surveillance Programme (IDSP)", "Health Management Information System (HMIS)", "National Health Mission reporting"],
    answer: 1,
    explanation: "Dengue cases are reported under the Integrated Disease Surveillance Programme (IDSP), which operates through a network of state and district surveillance units. IDSP uses S, P, and L forms (Syndromic, Probable, and Laboratory confirmed) for case reporting. The NCVBDC also maintains dengue surveillance data. Dengue is a notifiable disease under IDSP."
  },
  {
    id: 32,
    question: "The largest dengue epidemic in India in recent decades occurred in which year, with cases reported from virtually all states?",
    options: ["1996", "2006", "2010", "2015"],
    answer: 0,
    explanation: "The 1996 dengue epidemic in Delhi was one of the most severe outbreaks in India's history, with thousands of hospitalized cases and significant mortality. However, subsequent epidemic years include 2006, 2010, 2013, and 2015-2019, with increasing case counts each decade due to urbanization, population growth, and serotype dynamics. The 1996 Delhi epidemic brought dengue to national attention."
  },
  {
    id: 33,
    question: "WHO classifies dengue into which clinical categories (2009 classification)?",
    options: ["Dengue Fever, Dengue Hemorrhagic Fever (Grades I-IV), and Dengue Shock Syndrome", "Dengue without warning signs, Dengue with warning signs, and Severe dengue", "Classical dengue, Dengue hemorrhagic fever, and Expanded dengue syndrome", "Mild dengue, Moderate dengue, and Severe dengue"],
    answer: 1,
    explanation: "The 2009 WHO dengue classification revised the older DHF/DSS classification into: (1) Dengue without warning signs, (2) Dengue with warning signs (abdominal pain/tenderness, persistent vomiting, clinical fluid accumulation, mucosal bleeding, lethargy/restlessness, liver enlargement >2cm, rising HCT with rapid fall in platelets), and (3) Severe dengue (severe plasma leakage, severe bleeding, severe organ impairment). This classification guides clinical management."
  },
  {
    id: 34,
    question: "The case fatality rate (CFR) for dengue in India as per NCVBDC data has been showing which trend in recent years?",
    options: ["Increasing CFR due to more virulent strains", "Decreasing CFR due to improved clinical management and awareness", "Stable CFR at around 5%", "Fluctuating CFR with no clear trend"],
    answer: 1,
    explanation: "India has shown a declining CFR for dengue over recent decades, attributed to improved clinical awareness, early recognition of warning signs, better fluid management protocols following the 2009 WHO guidelines, and strengthened healthcare infrastructure. The CFR has decreased from >3% in the 1990s to <0.5% more recently in many reporting periods, though it varies by year and outbreak characteristics."
  },
  {
    id: 35,
    question: "Dengue seroprevalence studies in India indicate which pattern of immunity in urban populations?",
    options: ["Less than 10% seropositive in most urban areas", "10-30% seropositive predominantly in adults", "40-80% seropositive suggesting high historical transmission, even in apparently low-reporting areas", "Near 100% seropositive in all urban areas"],
    answer: 2,
    explanation: "Multiple seroprevalence studies from urban India demonstrate high seropositivity rates of 40-80% in the general population, indicating extensive dengue transmission that far exceeds officially reported case counts. This massive underreporting gap is due to the large proportion of asymptomatic infections (estimated 75-80% of infections) and limited testing. This has implications for natural population immunity and vaccine policy."
  },
  {
    id: 36,
    question: "Dengue transmission in India shows which seasonal pattern?",
    options: ["Year-round transmission with no seasonal variation", "Peak during winter months (November-February)", "Peak during and after monsoon season (July-November), with a second peak in some southern states during northeast monsoon", "Peak during summer (March-June)"],
    answer: 2,
    explanation: "Dengue in India peaks during and after the monsoon season (July-November) when Aedes mosquito breeding is highest due to water accumulation in containers. Southern states (Tamil Nadu, Andhra Pradesh) experience a second peak during the northeast monsoon season (October-December). Some urban areas show year-round transmission at lower levels due to perennial Aedes breeding."
  },
  {
    id: 37,
    question: "The extrinsic incubation period (EIP) of dengue virus in Aedes aegypti mosquito, at a temperature of 28-32 degrees Celsius, is approximately:",
    options: ["2-4 days", "8-12 days", "14-21 days", "30 days"],
    answer: 1,
    explanation: "The extrinsic incubation period (time from mosquito taking an infective blood meal to becoming infectious) for dengue virus in Aedes aegypti is approximately 8-12 days at 28-32 degrees Celsius. Temperature significantly affects EIP - higher temperatures shorten it. The intrinsic incubation period in humans is 3-14 days (typically 4-7 days). Understanding EIP is critical for interpreting mosquito surveillance and outbreak dynamics."
  },
  {
    id: 38,
    question: "The House Index (HI) in Aedes surveillance for dengue is calculated as:",
    options: ["(Number of houses with immature Aedes stages / Total houses inspected) x 100", "(Number of Aedes adult mosquitoes found / Total houses inspected) x 100", "(Number of positive containers / Total containers inspected) x 100", "(Number of positive containers / Total houses inspected) x 100"],
    answer: 0,
    explanation: "House Index (HI) = (Number of houses found positive for Aedes immature stages / Total houses inspected) x 100. It indicates the percentage of inspected houses with Aedes breeding. WHO considers areas with HI >1% to be at risk for dengue epidemics. HI is one of the three standard Stegomyia indices (along with Container Index and Breteau Index) used in dengue vector surveillance."
  },
  {
    id: 39,
    question: "The Container Index (CI) for dengue vector surveillance is:",
    options: ["(Number of positive containers / Total houses inspected) x 100", "(Number of positive containers / Total containers inspected) x 100", "(Number of houses with containers / Total houses inspected) x 100", "(Number of Aedes-positive containers / Total houses inspected) x 100"],
    answer: 1,
    explanation: "Container Index (CI) = (Number of water-holding containers found positive for Aedes immature stages / Total number of water-holding containers inspected) x 100. It indicates the proportion of containers positive for Aedes larvae/pupae. The Container Index reflects the larval density in containers but does not account for the number of containers per house."
  },
  {
    id: 40,
    question: "The Breteau Index (BI), considered the most informative of the Stegomyia indices, is calculated as:",
    options: ["(Number of positive containers / Total houses inspected) x 100", "(Number of positive houses / Total containers inspected) x 100", "(Number of positive containers per 100 houses inspected)", "(Number of adult Aedes per 100 houses inspected)"],
    answer: 2,
    explanation: "Breteau Index (BI) = Number of positive containers per 100 houses inspected = (Number of positive containers / Total houses inspected) x 100. It combines information about container infestation and number of positive containers per house, making it the most informative Stegomyia index. A BI >5 is considered as indicating risk for dengue transmission. It is recommended as the standard for comparing dengue vector surveillance data."
  },
  {
    id: 41,
    question: "Source reduction as the primary strategy for dengue control focuses on:",
    options: ["Killing adult Aedes mosquitoes with insecticide spraying", "Treating water containers with larvicides", "Eliminating or managing water-holding containers to prevent Aedes breeding", "Distributing personal protective equipment to communities"],
    answer: 2,
    explanation: "Source reduction is the primary and most sustainable dengue control strategy, involving elimination of Aedes breeding sites by: removing unnecessary containers, covering water storage containers, changing water in flower vases/coolers/pet water bowls weekly, proper disposal of solid waste, and filling tree holes. It reduces vector populations at their source without chemical use and requires sustained community participation."
  },
  {
    id: 42,
    question: "Temephos (Abate) as a larvicide for dengue control is applied to water containers at what concentration?",
    options: ["0.1 mg/L (0.1 ppm)", "1 mg/L (1 ppm)", "10 mg/L (10 ppm)", "50 mg/L (50 ppm)"],
    answer: 1,
    explanation: "Temephos is applied to water containers at 1 mg/L (1 ppm = 1 part per million). It is safe for use in drinking water containers at this concentration and provides protection for 8-12 weeks. It is the WHO-approved organophosphate larvicide for both malaria and dengue control programs in India. However, its use is being replaced by BTI (Bacillus thuringiensis israelensis) in some programs due to environmental concerns."
  },
  {
    id: 43,
    question: "Bacillus thuringiensis israelensis (BTI) as a biological larvicide for dengue control has which advantage over temephos?",
    options: ["BTI is more cost-effective than temephos", "BTI is safe for use in potable water, has no effect on non-target organisms, and mosquitoes have not developed resistance to it", "BTI has a longer residual activity of 6 months", "BTI can kill both larvae and adult mosquitoes"],
    answer: 1,
    explanation: "BTI (Bacillus thuringiensis israelensis) produces crystal proteins (Cry toxins) that are specifically toxic to mosquito and blackfly larvae but safe for non-target organisms including humans, fish, and wildlife. It is safe for potable water, biodegradable, and importantly, mosquitoes have not developed resistance to BTI in the field, unlike chemical insecticides. Limitations include shorter residual activity (1-4 weeks) and higher cost."
  },
  {
    id: 44,
    question: "Space spraying (fogging) for dengue control using pyrethroid insecticides is effective primarily against:",
    options: ["Aedes larvae in water containers", "Aedes eggs on container walls", "Adult Aedes mosquitoes present at the time of spraying", "Both larvae and adult mosquitoes simultaneously"],
    answer: 2,
    explanation: "Space spraying (thermal fogging or cold ULV - Ultra Low Volume spraying) with pyrethroid insecticides (malathion, deltamethrin, permethrin) kills adult Aedes mosquitoes present and flying during spraying. It does not affect larvae, pupae, or eggs. Its effect is short-lived (hours to days) and must be conducted at the right time (early morning or late afternoon when Aedes is active) to be effective. It is used for rapid response during outbreaks, not as a primary control measure."
  },
  {
    id: 45,
    question: "The dengue vaccine Dengvaxia (CYD-TDV) is a live recombinant tetravalent vaccine. Its use is recommended only for seropositive individuals because:",
    options: ["The vaccine is ineffective in seronegative individuals", "Seronegative individuals vaccinated with Dengvaxia have increased risk of severe dengue upon subsequent natural infection (vaccine-enhanced disease)", "The vaccine causes dengue infection in seronegative individuals", "The vaccine has too many side effects in seronegative individuals"],
    answer: 1,
    explanation: "Post-licensure evidence from the Philippines showed that Dengvaxia vaccination in dengue-seronegative individuals acts like a primary dengue infection, priming for ADE. If they subsequently experience natural dengue infection, the risk of severe dengue and hospitalization is increased. Therefore, WHO recommends Dengvaxia only for seropositive individuals (confirmed prior dengue infection) aged 9-45 years in high-endemic areas. Pre-vaccination screening is mandatory."
  },
  {
    id: 46,
    question: "India's National Dengue Day is observed annually on which date to mobilize communities for dengue prevention?",
    options: ["April 16th", "May 16th", "June 16th", "July 16th"],
    answer: 1,
    explanation: "National Dengue Day is observed on May 16th every year in India by the Ministry of Health and Family Welfare / NCVBDC. It aims to raise public awareness about dengue prevention and control, mobilize communities for source reduction activities, and sensitize healthcare providers. The date coincides with the period just before the monsoon season, when dengue preparedness activities should be initiated."
  },
  {
    id: 47,
    question: "Sentinel Surveillance for dengue in India under IDSP involves:",
    options: ["Passive case reporting from all government health facilities", "Active case detection with blood testing of all fever cases in all districts", "Enhanced reporting and laboratory confirmation from designated sentinel sites (hospitals and laboratories) to monitor trends", "Community-based surveys to estimate dengue seroprevalence"],
    answer: 2,
    explanation: "Sentinel surveillance for dengue involves designating specific hospitals and laboratories as sentinel sites that conduct systematic, standardized case detection, laboratory confirmation (NS1 antigen, IgM ELISA), and reporting. It provides quality-assured trend data and early warning of outbreaks. IDSP operates a network of sentinel sites for dengue, supported by National Reference Laboratories (NRL-dengue) that perform confirmatory testing."
  },
  {
    id: 48,
    question: "During a dengue outbreak, the Rapid Response Team (RRT) deployed by the district health authorities should primarily focus on which activities?",
    options: ["Mass treatment of all community members with antivirals", "Epidemiological investigation, source reduction, vector control, case management support, and community mobilization", "Establishing temporary hospitals in affected areas", "Importing dengue vaccines for mass vaccination"],
    answer: 1,
    explanation: "Rapid Response Teams (RRTs) during dengue outbreaks are multidisciplinary teams (epidemiologist, entomologist, clinician, public health officer) that conduct: outbreak investigation and case finding, entomological survey and vector index assessment, emergency source reduction and vector control (larviciding, fogging), case management guidance to healthcare facilities, and community mobilization for prevention. They are activated through the IDSP early warning system."
  },
  {
    id: 49,
    question: "Integrated Vector Management (IVM) for dengue is defined by WHO as:",
    options: ["Using at least two different insecticides simultaneously for vector control", "A rational decision-making process for the optimal use of resources for vector control, combining biological, chemical, environmental, and legislative approaches", "Integrating dengue and malaria vector control activities", "Combining indoor and outdoor vector control measures"],
    answer: 1,
    explanation: "WHO defines Integrated Vector Management (IVM) as a rational decision-making process for the optimal use of resources for vector control. IVM integrates multiple interventions (environmental management, biological control, chemical control, personal protection, legislative measures) based on local evidence and local capacity, promotes intersectoral collaboration, and advocates use of evidence-based approaches. It aims to improve efficacy, cost-effectiveness, and sustainability while limiting environmental impact."
  },
  {
    id: 50,
    question: "The 'Dry Day' (or 'Friday Dry Day') concept in dengue prevention, recommended by NCVBDC for community implementation, refers to:",
    options: ["A day when water supply is cut to reduce breeding", "Designating one day per week when households drain and dry all water-holding containers to break the Aedes life cycle", "A day when space spraying is conducted in all areas", "A day for mass distribution of mosquito nets in dengue-prone areas"],
    answer: 1,
    explanation: "The 'Dry Day' concept (practiced in Singapore as 'Mozzie Wipeout' and adapted in India) involves designating one day per week - typically Friday - when all household members systematically drain, scrub, and dry all water-holding containers (coolers, flower pots, water storage vessels, overhead tanks). Since the Aedes life cycle (egg to adult) takes approximately 7-10 days, weekly draining interrupts the cycle before adults emerge. This is a highly effective, cost-free community-level intervention promoted by NCVBDC and state programs."
  },
];

export default questions;
